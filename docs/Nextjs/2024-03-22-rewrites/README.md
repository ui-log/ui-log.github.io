---
title: "Nextjs 13 Rewrites로 url 경로 맵핑하기"
description: ""
date: 2024-03-22 14:29
sidebarDepth: 0
tag: Tech
thumbnail:
---

# 다시 쓰기

다시 쓰기를 사용하면 들어오는 요청 경로를 다른 대상 경로로 매핑할 수 있습니다.

다시 쓰기는 URL 프록시 역할을 하며 대상 경로를 가리고 있어 사용자가 사이트에서 위치를 변경하지 않은 것처럼 보입니다. 이와는 대조적으로 리다이렉트는 새 페이지로 리디렉션하고 URL 변경을 표시합니다.

다시 쓰기를 사용하려면 next.config.js 파일에서 다시 쓰기 키를 사용할 수 있습니다.

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
module.exports = {
  async rewrites() {
    return [
      {
        source: "/about",
        destination: "/",
      },
    ];
  },
};
```

리라이트는 클라이언트 측 라우팅에 적용됩니다. 위 예시에서 `Link href="/about"`은 리라이트가 적용됩니다.

리라이트는 source와 destination 속성을 가진 객체를 포함하는 배열 또는 객체의 배열을 반환할 것으로 예상되는 비동기 함수입니다:

- source: String - 들어오는 요청 경로 패턴입니다.
- destination: String - 라우팅할 경로입니다.
- basePath: false 또는 undefined - false면 일치하는 경우 basePath가 포함되지 않습니다. 외부 리라이트에만 사용할 수 있습니다.
- locale: false 또는 undefined - 일치하는 경우 로케일을 포함시키지 말아야 하는지입니다.
- has는 type, key, value 속성을 갖는 has 객체의 배열입니다.
- missing는 type, key, value 속성을 갖는 missing 객체의 배열입니다.

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

리라이트 함수가 배열을 반환할 때, 리라이트는 파일 시스템(페이지 및 /public 파일)을 확인한 후에 적용되고 동적 경로보다 먼저 적용됩니다. 리라이트 함수가 특정 형태의 배열 객체를 반환할 때는 이 동작을 변경하고 더 세밀하게 제어할 수 있습니다. 이 기능은 Next.js의 v10.1에서 추가되었습니다:

```js
module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        // 이 리라이트는 헤더/리다이렉션 이후, _next/public 파일을 포함한 모든 파일 이전에 확인됩니다.
        // 즉, 페이지 파일을 덮어쓸 수 있습니다.
        {
          source: "/some-page",
          destination: "/somewhere-else",
          has: [{ type: "query", key: "overrideMe" }],
        },
      ],
      afterFiles: [
        // 이 리라이트는 페이지/퍼블릭 파일 이후, 동적 경로 이전에 확인됩니다.
        {
          source: "/non-existent",
          destination: "/somewhere-else",
        },
      ],
      fallback: [
        // 이 리라이트는 페이지/퍼블릭 파일과 동적 경로 이후에 확인됩니다.
        {
          source: "/:path*",
          destination: `https://my-old-site.com/:path*`,
        },
      ],
    };
  },
};
```

> 참고: beforeFiles에서의 리라이트는 소스와 일치한 후에 즉시 파일 시스템/동적 경로를 확인하지 않고, 모든 beforeFiles가 확인될 때까지 계속됩니다.

Next.js에서 라우트가 확인되는 순서는 다음과 같습니다:

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

- 헤더가 확인/적용되었습니다
- 리디렉션이 확인/적용되었습니다
- beforeFiles 리라이트가 확인/적용되었습니다
- public 디렉토리의 정적 파일, \_next/static 파일 및 비동적 페이지가 확인/제공되었습니다
- afterFiles 리라이트가 확인/적용되었습니다. 이들 중 하나의 리라이트가 일치하면 각 일치 후 동적 경로/정적 파일을 확인합니다
- fallback 리라이트가 확인/적용되었습니다. 이들은 404 페이지를 렌더링하기 전과 동적 경로/모든 정적 에셋을 확인한 후에 적용됩니다. getStaticPaths에서 fallback: true/`blocking`를 사용하는 경우, next.config.js에서 정의된 fallback 리라이트는 실행되지 않습니다.

## 리라이트 매개변수

리라이트에 매개변수를 사용할 때, 대상에 매개변수 중 하나도 사용되지 않으면 기본적으로 쿼리에 매개변수가 전달됩니다.

```js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/old-about/:path*",
        destination: "/about", // 여기에는 :path 매개변수가 사용되지 않으므로 자동적으로 쿼리에 전달됩니다
      },
    ];
  },
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

목적지에 매개변수가 사용되면 쿼리에 매개변수가 자동으로 전달되지 않습니다.

```js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/docs/:path*",
        destination: "/:path*", // 여기서 :path 매개변수를 사용하므로 자동으로 쿼리로 전달되지 않습니다
      },
    ];
  },
};
```

이미 목적지에서 사용 중인 매개변수가 있을 경우, 목적지에 쿼리를 명시하여 수동으로 매개변수를 전달할 수 있습니다.

```js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/:first/:second",
        destination: "/:first?second=:second",
        // :first 매개변수가 목적지에서 사용되기 때문에 :second 매개변수가 자동으로 쿼리에 추가되지 않지만
        // 위와 같이 수동으로 추가할 수 있습니다
      },
    ];
  },
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

> 좋은 정보: 자동 정적 최적화 또는 리라이트에서 프리렌더링 매개변수로 가져온 정적 페이지는 수분화 후에 클라이언트에서 구문 분석되어 쿼리로 제공됩니다.

## 경로 일치

경로 일치는 허용됩니다. 예를 들어 /blog/:slug는 /blog/hello-world와 일치합니다 (중첩된 경로 없음):

```js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/blog/:slug",
        destination: "/news/:slug", // 일치하는 매개변수는 대상에서 사용할 수 있음
      },
    ];
  },
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

### 와일드카드 경로 매칭

와일드카드 경로 매칭을 위해 매개변수 뒤에 *을 사용할 수 있습니다. 예를 들어 /blog/:slug*는 /blog/a/b/c/d/hello-world를 매칭합니다:

```js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/blog/:slug*",
        destination: "/news/:slug*", // 일치하는 매개변수는 대상(destination)에서 사용할 수 있습니다
      },
    ];
  },
};
```

### 정규 표현식 경로 매칭

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

정규식 경로를 일치시키려면 매개변수 뒤에 괄호 안에 정규식을 넣어야 합니다. 예를 들어 /blog/:slug(\\d{1,})는 /blog/123은 일치하지만 /blog/abc는 일치하지 않습니다:

```js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/old-blog/:post(\\d{1,})",
        destination: "/blog/:post", //일치하는 매개변수를 대상(destinatio)에서 사용할 수 있습니다.
      },
    ];
  },
};
```

아래 문자들 (, ), {, }, [, ], |, \, ^, ., :, \*, +, -, ?, $은 정규식 경로 일치에 사용되므로 소스에서 비특수 값으로 사용될 때는 \\를 추가하여 이스케이프 처리해야 합니다:

```js
module.exports = {
  async rewrites() {
    return [
      {
        // 요청된 `/english(default)/something`와 일치할 것입니다
        source: "/english\\(default\\)/:slug",
        destination: "/en-us/:slug",
      },
    ];
  },
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

## 헤더, 쿠키 및 쿼리 일치

헤더, 쿠키 또는 쿼리 값이 일치하는 경우 리다이렉션을 일치시키기 위해 has 필드를 사용하거나 missing 필드를 사용할 수 있습니다. 소스와 모든 has 아이템이 일치하고 모든 missing 아이템이 일치하지 않아야 리다이렉션이 적용됩니다.

has 및 missing 아이템에는 다음과 같은 필드가 포함될 수 있습니다:

- type: String - header, cookie, host 또는 query 중 하나여야 합니다.
- key: String - 해당 유형을 선택한 키여야 합니다.
- value: String 또는 undefined - 확인할 값을 나타내며 undefined인 경우 모든 값이 일치합니다. 특정 값의 일부를 캡처하는 데 정규식과 같은 문자열을 사용할 수 있습니다. 예: 값이 first-(?`paramName`.\*) 인 경우 first-second이면 대상에서 :paramName으로 second를 사용할 수 있습니다.

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
module.exports = {
  async rewrites() {
    return [
      // 만약 헤더 `x-rewrite-me`가 존재한다면,
      // 이 리라이트가 적용됩니다
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-rewrite-me",
          },
        ],
        destination: "/another-page",
      },
      // 만약 헤더 `x-rewrite-me`가 존재하지 않는다면,
      // 이 리라이트가 적용됩니다
      {
        source: "/:path*",
        missing: [
          {
            type: "header",
            key: "x-rewrite-me",
          },
        ],
        destination: "/another-page",
      },
      // 만약 소스, 쿼리, 쿠키가 일치한다면,
      // 이 리라이트가 적용됩니다
      {
        source: "/specific/:path*",
        has: [
          {
            type: "query",
            key: "page",
            // 페이지 값은 명명된 캡처 그룹인 (?<page>home)을 사용하지 않으므로
            // 대상에서 페이지 값은 사용할 수 없습니다
            value: "home",
          },
          {
            type: "cookie",
            key: "authorized",
            value: "true",
          },
        ],
        destination: "/:path*/home",
      },
      // 헤더 `x-authorized`가 존재하고
      // 일치하는 값이 포함된 경우, 이 리라이트가 적용됩니다
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-authorized",
            value: "(?<authorized>yes|true)",
          },
        ],
        destination: "/home?authorized=:authorized",
      },
      // 호스트가 `example.com`인 경우,
      // 이 리라이트가 적용됩니다
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "example.com",
          },
        ],
        destination: "/another-page",
      },
    ];
  },
};
```

## 외부 URL로 리다이렉트

리라이트를 사용하면 외부 URL로 리다이렉트할 수 있습니다. 이것은 Next.js를 점진적으로 도입하는 데 특히 유용합니다. 다음은 메인 앱의 /blog 경로를 외부 사이트로 리다이렉팅하는 예제 리라이트입니다.

```js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://example.com/blog",
      },
      {
        source: "/blog/:slug",
        destination: "https://example.com/blog/:slug", // 일치하는 매개변수는 대상에서 사용할 수 있습니다
      },
    ];
  },
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

만약 trailingSlash: true를 사용 중이라면 소스 파라미터에 trailing slash를 추가해야 합니다. 대상 서버가 trailing slash를 예상한다면 대상 파라미터에도 포함되어야 합니다.

```js
module.exports = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/blog/",
        destination: "https://example.com/blog/",
      },
      {
        source: "/blog/:path*/",
        destination: "https://example.com/blog/:path*/",
      },
    ];
  },
};
```

### Next.js의 점진적 적용

모든 Next.js 경로 확인 후에도 기존 웹사이트로 프록시를 포용할 수 있습니다.

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

다음과 같이 변경하면 더 많은 페이지를 Next.js로 이동할 때 다시 작성 구성을 변경할 필요가 없습니다.

```js
module.exports = {
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: `https://custom-routes-proxying-endpoint.vercel.app/:path*`,
        },
      ],
    };
  },
};
```

### basePath 지원하는 리라이트

basePath 지원을 활용하여 리라이트하는 경우 모든 소스 및 대상은 basePath로 자동으로 접두사가 붙습니다. 또한 rewrite에 basePath: false를 추가하지 않는 한 basePath가 자동으로 추가됩니다.

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
module.exports = {
  basePath: "/docs",

  async rewrites() {
    return [
      {
        source: "/with-basePath", // 자동으로 /docs/with-basePath로 변경됩니다
        destination: "/another", // 자동으로 /docs/another로 변경됩니다
      },
      {
        // basePath: false가 설정되어 있으므로 /without-basePath를 /docs에 추가하지 않습니다
        // 참고: 이는 `destination: '/another'`와 같은 내부 리다이렉트에는 사용할 수 없습니다
        source: "/without-basePath",
        destination: "https://example.com",
        basePath: false,
      },
    ];
  },
};
```

### i18n 지원하는 리다이렉션

리다이렉션에서 i18n 지원을 활용할 때, 각 source와 destination은 설정된 로케일을 처리하기 위해 자동으로 접두어가 붙습니다. 단, 리다이렉트에 locale: false를 추가하지 않으면 올바르게 일치시키려면 source와 destination에 로케일을 접두어로 붙여야 합니다.

```js
module.exports = {
  i18n: {
    locales: ["en", "fr", "de"],
    defaultLocale: "en",
  },

  async rewrites() {
    return [
      {
        source: "/with-locale", // 모든 로케일을 자동으로 처리합니다
        destination: "/another", // 로케일을 자동으로 전달합니다
      },
      {
        // locale: false가 설정되어 있으므로 로케일을 자동으로 처리하지 않습니다
        source: "/nl/with-locale-manual",
        destination: "/nl/another",
        locale: false,
      },
      {
        // `en`이 defaultLocale이므로 '/'에 일치합니다
        source: "/en",
        destination: "/en/another",
        locale: false,
      },
      {
        // locale: false가 설정되어 있어도 모든 로케일에 일치할 수 있습니다
        source: "/:locale/api-alias/:path*",
        destination: "/api/:path*",
        locale: false,
      },
      {
        // /(en|fr|de)/(.*)로 변환되어 최상위 수준의 `/` 또는 `/fr` 경로와는 일치하지 않습니다
        source: "/(.*)",
        destination: "/another",
      },
    ];
  },
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

## 버전 기록

| 버전      | 변경 내용         |
| --------- | ----------------- |
| `v13.3.0` | `missing` 추가됨. |
| `v10.2.0` | `has` 추가됨.     |
| `v9.5.0`  | 헤더 추가됨.      |

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
