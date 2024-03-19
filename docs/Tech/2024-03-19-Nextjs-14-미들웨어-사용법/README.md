---
title: Nextjs 14 미들웨어 사용법
description:
date: 2024-03-19 13:34
sidebarDepth: 0
tag: Tech
thumbnail:
---

# Nextjs 14 미들웨어 사용법

# 미들웨어

미들웨어를 사용하면 요청이 완료되기 전에 코드를 실행할 수 있습니다. 그런 다음 들어오는 요청에 기반하여 응답을 수정하거나 다시 작성, 리디렉션, 요청 또는 응답 헤더를 수정하거나 직접 응답할 수 있습니다.

미들웨어는 캐시된 콘텐츠와 라우트가 일치하기 전에 실행됩니다. 자세한 내용은 경로 일치를 참조하십시오.

## 규칙

미들웨어를 정의하려면 프로젝트의 루트에 middleware.ts(또는 .js) 파일을 사용하십시오. 예를 들어, 페이지 또는 앱과 같은 수준에 있거나 해당하는 경우 src 내부에 있습니다.

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

## 예제

```typescript
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// `await`을 사용하는 경우 이 함수를 `async`로 표시할 수 있습니다
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/home", request.url));
}

// 아래 "경로 일치" 섹션을 참조하여 자세히 알아보세요
export const config = {
  matcher: "/about/:path*",
};
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

## 경로 일치

미들웨어는 프로젝트의 모든 라우트에 대해 호출됩니다. 실행 순서는 다음과 같습니다.

- next.config.js에서 헤더
- next.config.js에서 리디렉션
- 미들웨어 (재작성, 리디렉션 등)
- next.config.js에서 beforeFiles (재작성)
- 파일 시스템 경로 (public/, \_next/static/, pages/, app/ 등)
- next.config.js에서 afterFiles (재작성)
- 동적 라우트 (/blog/[slug])
- next.config.js에서 fallback (재작성)

미들웨어가 실행될 경로를 정의하는 방법에는 두 가지가 있습니다.

- 사용자 지정 matcher 구성
- 조건문

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

### Matcher

matcher를 사용하면 특정 경로에서 실행할 미들웨어를 필터링할 수 있습니다.

```js
export const config = {
  matcher: "/about/:path*",
};
```

단일 경로 또는 배열 구문을 사용하여 여러 경로를 일치시킬 수 있습니다.

```js
export const config = {
  matcher: ["/about/:path*", "/dashboard/:path*"],
};
```

matcher 구성에서는 부정적인 전방 탐색 또는 문자 일치와 같은 모든 정규식을 지원합니다. 특정 경로를 제외한 모든 요청 경로를 일치시키려면 다음과 같이 부정적인 전방 탐색을 사용할 수 있습니다.

```js
export const config = {
  matcher: [
    /*
     * 다음으로 시작하는 모든 요청 경로와 일치하지 않는 모든 요청 경로:
     * - api (API 라우트)
     * - _next/static (정적 파일)
     * - _next/image (이미지 최적화 파일)
     * - favicon.ico (파비콘 파일)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
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

미들웨어가 다음/link에서 가져온 prefetch를 무시하고 Middleware를 통과하지 않아도 되는 경우 missing 배열을 사용할 수 있습니다.

```js
export const config = {
  matcher: [
    /*
     * 다음으로 시작하는 모든 요청 경로와 일치하지 않는 모든 요청 경로:
     * - api (API 라우트)
     * - _next/static (정적 파일)
     * - _next/image (이미지 최적화 파일)
     * - favicon.ico (파비콘 파일)
     */
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
```

> 알아두세요: matcher 값은 상수여야 하므로 빌드 시간에 정적으로 분석될 수 있습니다. 변수와 같은 동적 값은 무시됩니다.

구성된 matcher:

- 반드시 /로 시작해야 합니다.
- 이름 있는 매개변수를 사용할 수 있습니다: /about/:path는 /about/a와 /about/b에 일치하지만 /about/a/c에는 일치하지 않습니다.
- 이름 있는 매개변수에 수정자를 사용할 수 있습니다 (시작이 :입니다): /about/:path*는 *이 0개 이상임을 나타냅니다. ?는 0개 또는 1개, +는 1개 이상입니다.
- 괄호로 둘러싼 정규식을 사용할 수 있습니다: /about/(.\*)는 /about

/:path\*와 같습니다.

경로에 대한 자세한 내용은 path-to-regexp 문서를 참조하십시오.

> 알아두세요: 하위 호환성을 위해 Next.js는 항상 /public을 /public/index로 간주합니다. 따라서 /public/:path matcher는 일치합니다.

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

### 조건문

```typescript
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/about")) {
    return NextResponse.rewrite(new URL("/about-2", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.rewrite(new URL("/dashboard/user", request.url));
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

## NextResponse

NextResponse API를 사용하면 다음을 수행할 수 있습니다:

- 들어오는 요청을 다른 URL로 리디렉션합니다.
- 주어진 URL을 표시하여 응답을 다시 작성합니다.
- API Routes, getServerSideProps 및 리디렉션 대상에 대한 요청 헤더를 설정합니다.
- 응답 쿠키를 설정합니다.
- 응답 헤더를 설정합니다.

미들웨어에서 응답을 생성하려면 다음을 수행할 수 있습니다:

- 응답을 생성하는 라우트(Page 또는 Route Handler)로 리디렉션합니다.
- 직접 NextResponse를 반환합니다. 응답 생성 참조

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

## 쿠키 사용

쿠키는 일반적인 헤더입니다. 요청에서는 쿠키가 Cookie 헤더에 저장됩니다. 응답에서는 Set-Cookie 헤더에 저장됩니다. Next.js는 NextRequest와 NextResponse의 cookies 확장을 통해 이러한 쿠키에 쉽게 액세스하고 조작할 수 있는 편리한 방법을 제공합니다.

- 들어오는 요청에 대해 cookies는 다음 메서드를 가지고 있습니다: get, getAll, set 및 delete cookies. has를 사용하여 쿠키의 존재 여부를 확인하거나 clear를 사용하여 모든 쿠키를 제거할 수 있습니다.
- 나가는 응답에 대해 cookies는 다음 메서드를 가지고 있습니다: get, getAll, set 및 delete입니다.

```typescript
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 들어오는 요청에서 "Cookie:nextjs=fast" 헤더가 있다고 가정합니다.
  // RequestCookies API를 사용하여 요청에서 쿠키를 가져옵니다.
  let cookie = request.cookies.get("nextjs");
  console.log(cookie); // => { name: 'nextjs', value: 'fast', Path: '/' }
  const allCookies = request.cookies.getAll();
  console.log(allCookies); // => [{ name: 'nextjs', value: 'fast' }]

  request.cookies.has("nextjs"); // => true
  request.cookies.delete("nextjs");
  request.cookies.has("nextjs"); // => false

  // ResponseCookies API를 사용하여 응답에 쿠키를 설정합니다.
  const response = NextResponse.next();
  response.cookies.set("vercel", "fast");
  response.cookies.set({
    name: "vercel",
    value: "fast",
    path: "/",
  });
  cookie = response.cookies.get("vercel");
  console.log(cookie); // => { name: 'vercel', value: 'fast', Path: '/' }
  // 나가는 응답에는 `Set-Cookie:vercel=fast;path=/` 헤더가 포함됩니다.

  return response;
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

## 헤더 설정

NextResponse API를 사용하여 요청 및 응답 헤더를 설정할 수 있습니다 (요청 헤더 설정은 Next.js v13.0.0부터 사용 가능합니다).

```typescript
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 요청 헤더를 복제하고 새로운 헤더 `x-hello-from-middleware1`를 설정합니다.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-hello-from-middleware1", "hello");

  // NextResponse.rewrite에서도 요청 헤더를 설정할 수 있습니다.
  const response = NextResponse.next({
    request: {
      // 새로운 요청 헤더
      headers: requestHeaders,
    },
  });

  // 새로운 응답 헤더 `x-hello-from-middleware2`를 설정합니다.
  response.headers.set("x-hello-from-middleware2", "hello");
  return response;
}
```

> 알아두세요: 큰 헤더를 설정하는 것은 백엔드 웹 서버 구성에 따라 431 Request Header Fields Too Large 오류를 발생시킬 수 있으므로 피하시기 바랍니다.

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

### CORS

미들웨어에서 CORS 헤더를 설정하여 단순 및 프리플라이트된 요청을 포함한 교차 출처 요청을 허용할 수 있습니다.

```typescript
import { NextRequest, NextResponse } from "next/server";

const allowedOrigins = ["https://acme.com", "https://my-app.org"];

const corsOptions = {
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export function middleware(request: NextRequest) {
  // 요청에서 origin을 확인합니다.
  const origin = request.headers.get("origin") ?? "";
  const isAllowedOrigin = allowedOrigins.includes(origin);

  // 프리플라이트된 요청을 처리합니다.
  const isPreflight = request.method === "OPTIONS";

  if (isPreflight) {
    const preflightHeaders = {
      ...(isAllowedOrigin && { "Access-Control-Allow-Origin": origin }),
      ...corsOptions,
    };
    return NextResponse.json({}, { headers: preflightHeaders });
  }

  // 단순 요청을 처리합니다.
  const response = NextResponse.next();

  if (isAllowedOrigin) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: "/api/:path*",
};
```

> 알아두세요: Route Handlers에서 개별 경로에 대한 CORS 헤더를 구성할 수 있습니다.

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

## 응답 생성

미들웨어에서 직접 응답을 반환하여 처리할 수 있습니다. 이 기능은 Next.js v13.1.0부터 사용할 수 있습니다.

```typescript
import { NextRequest } from "next/server";
import { isAuthenticated } from "@lib/auth";

// `/api/`로 시작하는 경로에 대해서만 미들웨어 적용
export const config = {
  matcher: "/api/:function*",
};

export function middleware(request: NextRequest) {
  // 요청을 확인하기 위해 인증 함수 호출
  if (!isAuthenticated(request)) {
    // 인증 실패를 나타내는 JSON으로 응답
    return Response.json({ success: false, message: "authentication failed" }, { status: 401 });
  }
}
```

### waitUntil과 NextFetchEvent

NextFetchEvent 객체는 네이티브 FetchEvent 객체를 확장하며, waitUntil() 메서드를 포함합니다.

waitUntil() 메서드는 프로미스를 인수로 사용하며, 프로미스가 settle될 때까지 미들웨어의 수명을 연장합니다. 이는 백그라운드에서 작업을 수행하는 데 유용합니다.

```typescript
import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";

export function middleware(req: NextRequest, event: NextFetchEvent) {
  event.waitUntil(
    fetch("https://my-analytics-platform.com", {
      method: "POST",
      body: JSON.stringify({ pathname: req.nextUrl.pathname }),
    })
  );

  return NextResponse.next();
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

## 고급 미들웨어 플래그

Next.js v13.1에서 미들웨어에 대한 두 가지 추가 플래그인 skipMiddlewareUrlNormalize 및 skipTrailingSlashRedirect가 소개되었습니다. 이러한 플래그는 고급 사용 사례를 다루기 위해 도입되었습니다.

skipTrailingSlashRedirect는 Next.js 리다이렉트를 사용하여 슬래시를 추가하거나 제거하는 것을 비활성화합니다. 이를 통해 미들웨어 내에서 일부 경로에는 슬래시를 유지하고 다른 경로에는 유지하지 않을 수 있으므로 점진적인 마이그레이션을 쉽게 수행할 수 있습니다.

```js
module.exports = {
  skipTrailingSlashRedirect: true,
};
```

```js
const legacyPrefixes = ["/docs", "/blog"];

export default async function middleware(req) {
  const { pathname } = req.nextUrl;

  if (legacyPrefixes.some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.next();
  }

  // 슬래시 처리 적용
  if (!pathname.endsWith("/") && !pathname.match(/((?!\.well-known(?:\/.*)?)(?:[^/]+\/)*[^/]+\.\w+)/)) {
    req.nextUrl.pathname += "/";
    return NextResponse.redirect(req.nextUrl);
  }
}
```

skipMiddlewareUrlNormalize은 Next.js에서 URL 정규화를 비활성화하여 직접 방문과 클라이언트 전환을 동일하게 처리할 수 있도록합니다. 일부 고급 케이스에서이 옵션을 사용하면 원래 URL을 사용하여 완전한 제어를 제공할 수 있습니다.

```js
module.exports = {
  skipMiddlewareUrlNormalize: true,
};
```

```js
export default async function middleware(req) {
  const { pathname } = req.nextUrl;

  // GET /_next/data/build-id/hello.json

  console.log(pathname);
  // 이 플래그를 사용하면 이제 /_next/data/build-id/hello.json입니다.
  // 이 플래그를 사용하지 않으면 이는 /hello로 정규화됩니다.
}
```

이렇게 함으로써, Next.js의 미들웨어를 사용하여 고급 사용 사례에 대한 처리를 더욱 유연하게 조정할 수 있습니다.

## 런타임

현재 Middleware는 Edge 런타임만 지원합니다. Node.js 런타임은 사용할 수 없습니다.

| Version   | Changes                                                                                       |
| --------- | --------------------------------------------------------------------------------------------- |
| `v13.1.0` | Advanced Middleware flags added                                                               |
| `v13.0.0` | Middleware can modify request headers, response headers, and send responses                   |
| `v12.2.0` | Middleware is stable, please see the [upgrade guide](/docs/messages/middleware-upgrade-guide) |
| `v12.0.9` | Enforce absolute URLs in Edge Runtime ([PR](https://github.com/vercel/next.js/pull/33410))    |
| `v12.0.0` | Middleware (Beta) added                                                                       |
