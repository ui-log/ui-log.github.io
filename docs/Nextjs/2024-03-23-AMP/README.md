---
title: "Nextjs 13에서 AMP 사용 하는 방법"
description: ""
date: 2024-03-23 14:53
sidebarDepth: 0
tag: Tech
thumbnail:
originalTitle: AMP
link: undefined
---

# AMP

Next.js를 사용하면 React 페이지를 최소한의 설정으로 AMP 페이지로 변환할 수 있으며 React를 떠나지 않고도 가능합니다.

공식 amp.dev 사이트에서 AMP에 대해 더 많은 정보를 확인할 수 있습니다.

## AMP 활성화

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

페이지에 AMP 지원을 활성화하고 다양한 AMP 구성에 대해 자세히 알아보려면 next/amp의 API 문서를 참조하세요.

## 주의 사항

- CSS-in-JS만 지원됩니다. CSS Modules은 현재 AMP 페이지에서 지원되지 않습니다. Next.js에 CSS Modules 지원을 기여할 수 있습니다.

## AMP 구성 요소 추가

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

AMP 커뮤니티는 AMP 페이지를 더 상호 작용적으로 만들기 위한 많은 구성 요소를 제공합니다. Next.js는 페이지에서 사용된 모든 구성 요소를 자동으로 가져오며 AMP 구성 요소 스크립트를 수동으로 가져올 필요가 없습니다:

```js
export const config = { amp: true };

function MyAmpPage() {
  const date = new Date();

  return (
    <div>
      <p>어느 시각: {date.toJSON()}</p>
      <amp-timeago width="0" height="15" datetime={date.toJSON()} layout="responsive">
        .
      </amp-timeago>
    </div>
  );
}

export default MyAmpPage;
```

위 예제는 amp-timeago 구성 요소를 사용합니다.

기본적으로 구성 요소의 최신 버전이 항상 가져와집니다. 버전을 사용자 정의하려면 다음 예제와 같이 next/head를 사용할 수 있습니다:

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
import Head from "next/head";

export const config = { amp: true };

function MyAmpPage() {
  const date = new Date();

  return (
    <div>
      <Head>
        <script async key="amp-timeago" custom-element="amp-timeago" src="https://cdn.ampproject.org/v0/amp-timeago-0.1.js" />
      </Head>

      <p>일부 시간: {date.toJSON()}</p>
      <amp-timeago width="0" height="15" datetime={date.toJSON()} layout="responsive">
        .
      </amp-timeago>
    </div>
  );
}

export default MyAmpPage;
```

## AMP 검증

AMP 페이지는 개발 중에 자동으로 amphtml-validator를 사용하여 유효성을 검사합니다. Next.js를 시작한 터미널에 오류 및 경고가 표시됩니다.

정적 HTML 내보내기 중에도 페이지가 유효성을 검사하며, 경고/오류가 있을 경우 터미널에 출력됩니다. AMP 오류가 있는 경우 내보내기가 유효하지 않음을 나타내는 상태 코드 1로 종료됩니다.

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

### 커스텀 유효성 검사기

아래와 같이 next.config.js에서 사용자 정의 AMP 유효성 검사기를 설정할 수 있습니다.

```js
module.exports = {
  amp: {
    validator: "./custom_validator.js",
  },
};
```

### AMP 검사 건너뛰기

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

AMP 유효성 검사를 해제하려면 다음 코드를 next.config.js에 추가해주세요.

```js
experimental: {
  amp: {
    skipValidation: true;
  }
}
```

### 정적 HTML 내보내기에서의 AMP

정적 HTML 내보내기를 사용할 때, Next.js는 페이지가 AMP를 지원하는지 감지하고 해당 내보내기 동작을 변경합니다.

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

예를 들어, 하이브리드 AMP 페이지 pages/about.js는 다음과 같이 출력됩니다:

- out/about.html - 클라이언트 측 React 런타임이 포함된 HTML 페이지
- out/about.amp.html - AMP 페이지

그리고 pages/about.js가 AMP 전용 페이지인 경우에는 다음과 같이 출력됩니다:

- out/about.html - 최적화된 AMP 페이지

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

Next.js는 HTML 버전에 페이지의 AMP 버전에 대한 링크를 자동으로 삽입하기 때문에 다음과 같이 할 필요가 없습니다:

```js
<link rel="amphtml" href="/about.amp.html" />
```

그리고 페이지의 AMP 버전은 HTML 페이지로의 링크를 포함합니다:

```js
<link rel="canonical" href="/about" />
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

개행할 때 trailingSlash를 사용하면 pages/about.js에 대한 내보낸 페이지는 다음과 같습니다:

- out/about/index.html - HTML 페이지
- out/about.amp/index.html - AMP 페이지

## TypeScript

AMP에는 현재 TypeScript용 내장 타입이 없지만 로드맵(#13791)에 있습니다.

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

작업 방법으로 프로젝트 내부에 amp.d.ts 라는 파일을 수동으로 생성하고 이러한 사용자 정의 유형을 추가할 수 있습니다.

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
