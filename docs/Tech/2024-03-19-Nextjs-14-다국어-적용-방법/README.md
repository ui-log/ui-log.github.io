---
title: Nextjs 14 다국어 적용 방법
description:
date: 2024-03-19 13:33
sidebarDepth: 0
tag: Tech
thumbnail:
---

# Nextjs 14 다국어 적용 방법

# 국제화

Next.js를 사용하면 라우팅 및 콘텐츠 렌더링을 구성하여 여러 언어를 지원할 수 있습니다. 사이트를 다양한 로캘에 적응시키는 것은 번역된 콘텐츠(로컬라이제이션) 및 국제화된 라우트를 포함합니다.

<!-- ui-log 수평형 -->

<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>

## 용어

- 로캘: 언어 및 형식 지정 환경의 식별자입니다. 일반적으로 사용자의 기본 언어 및 지역 설정을 포함합니다.
  - en-US: 미국에서 사용되는 영어
  - nl-NL: 네덜란드에서 사용되는 네덜란드어
  - nl: 지정된 지역이 없는 네덜란드어

<!-- ui-log 수평형 -->

<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>

## 라우팅 개요

브라우저에서 사용자의 언어 환경 설정을 사용하여 어떤 로캘을 사용할지 선택하는 것이 좋습니다. 기본 언어를 변경하면 응용 프로그램에 들어오는 Accept-Language 헤더가 수정됩니다.

다음 라이브러리를 사용하면 다음과 같은 요청을 확인하여 로캘을 선택할 수 있습니다. 헤더, 지원할 로캘 및 기본 로캘에 따라 다릅니다.

```js
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let headers = { "accept-language": "en-US,en;q=0.5" };
let languages = new Negotiator({ headers }).languages();
let locales = ["en-US", "nl-NL", "nl"];
let defaultLocale = "en-US";

match(languages, locales, defaultLocale); // -> 'en-US'
```

<!-- ui-log 수평형 -->

<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>

라우팅은 하위 경로 (/fr/products) 또는 도메인 (my-site.fr/products)으로 국제화될 수 있습니다. 이 정보를 바탕으로 미들웨어 내에서 로캘을 기반으로 사용자를 리디렉션할 수 있습니다.

```js
import { NextResponse } from "next/server";

let locales = ['en-US', 'nl-NL', 'nl']

// 선호하는 로캘 가져오기, 위의 방법과 유사하거나 라이브러리 사용
function getLocale(request) { ... }

export function middleware(request) {
  // 경로명에 지원되는 로캘이 있는지 확인
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // 로캘이 없는 경우 리디렉션
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // 예: 들어오는 요청이 /products인 경우
  // 새 URL은 이제 /en-US/products입니다.
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // 모든 내부 경로 (_next) 건너뛰기
    '/((?!_next).*)',
    // 선택 사항: 루트 (/) URL에서만 실행
    // '/'
  ],
}
```

<!-- ui-log 수평형 -->

<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>

마지막으로, app/ 내의 모든 특수 파일이 app/[lang] 아래에 중첩되도록 확인하십시오. 이렇게 하면 Next.js 라우터가 경로의 다른 로캘을 동적으로 처리하고 모든 레이아웃과 페이지로 lang 매개변수를 전달할 수 있습니다. 예를 들어:

```js
// 현재 로캘에 액세스할 수 있습니다
// 예: /en-US/products -> `lang`은 "en-US"입니다
export default async function Page({ params: { lang } }) {
  return ...
}
```

<!-- ui-log 수평형 -->

<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
루트 레이아웃도 새 폴더에 중첩될 수 있습니다 (예: app/[lang]/layout.js).

## 로컬라이제이션

사용자의 기본 로캘에 따라 표시되는 콘텐츠를 변경하는 로컬라이제이션은 Next.js에만 특정되지 않습니다. 아래 설명된 패턴은 모든 웹 애플리케이션에서 동일하게 작동합니다.

예를 들어, 애플리케이션 내에서 영어 및 네덜란드어 콘텐츠를 지원하고자 한다고 가정해 봅시다. 키에서 로컬라이즈된 문자열로의 매핑을 제공하는 두 가지 다른 "사전"을 유지할 수 있습니다. 예를 들어:

```js
{
  "products": {
    "cart": "Add to Cart"
  }
}
```

```js
{
  "products": {
    "cart": "Toevoegen aan Winkelwagen"
  }
}
```

<!-- ui-log 수평형 -->

<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>

그런 다음 요청된 로캘에 대한 번역을로드하는 getDictionary 함수를 만들 수 있습니다.

```js
import 'server-only'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  nl: () => import('./dictionaries/nl.json').then((module)

 => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]()
```

<!-- ui-log 수평형 -->

<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>

현재 선택된 언어를 고려하여 레이아웃이나 페이지 내에서 사전을 가져올 수 있습니다.

```js
import { getDictionary } from "./dictionaries";

export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang); // en
  return <button>{dict.products.cart}</button>; // Add to Cart
}
```

app/ 디렉토리의 모든 레이아웃 및 페이지가 기본적으로 서버 컴포넌트이기 때문에 번역 파일의 크기가 클라이언트 측 JavaScript 번들 크기에 영향을 주지 않습니다. 이 코드는 서버에서만 실행되며 결과 HTML 만 브라우저로 전송됩니다.

## 정적 생성

특정 로캘 집합에 대한 정적 라우트를 생성하려면 페이지나 레이아웃에서 generateStaticParams를 사용할 수 있습니다. 이것은 전역적일 수 있으며, 예를 들어 루트 레이아웃에서:

<!-- ui-log 수평형 -->

<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>

```js
export async function generateStaticParams() {
  return [{ lang: "en-US" }, { lang: "de" }];
}

export default function Root({ children, params }) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
```

## 리소스

- 최소한의 i18n 라우팅 및 번역
- next-intl
- next-international
- next-i18n-router
