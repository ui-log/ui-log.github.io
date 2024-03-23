---
title: "Nextjs 14에서 검색엔진에 걸리기 위해 robots.txt 추가하는 방법"
description: ""
date: 2024-03-20 17:40
sidebarDepth: 0
tag: Tech
thumbnail:
---

# Nextjs 14에서 검색엔진에 걸리기 위해 robots.txt 추가하는 방법

사이트에서 어떤 URL에 접근할 수 있는지 검색 엔진 크롤러에게 알려주기 위해 앱 디렉토리 루트에 Robots Exclusion Standard와 일치하는 robots.txt 파일을 추가하거나 생성하세요.

## 정적 robots.txt

```js
User-Agent: *
Allow: /
Disallow: /private/

Sitemap: https://acme.com/sitemap.xml
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

## 로봇 파일 생성하기

로봇 객체를 반환하는 robots.js 또는 robots.ts 파일을 추가하세요.

```typescript
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://acme.com/sitemap.xml",
  };
}
```

결과:

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

User-Agent: \*
Allow: /
Disallow: /private/

Sitemap: https://acme.com/sitemap.xml

### 특정 사용자 에이전트 사용자 정의

개별 검색 엔진 봇이 사이트를 크롤하는 방법을 배열 형태의 사용자 에이전트를 rules 속성에 전달하여 사용자 정의할 수 있습니다. 예를 들어:

```typescript
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: "/private/",
      },
      {
        userAgent: ["Applebot", "Bingbot"],
        disallow: ["/"],
      },
    ],
    sitemap: "https://acme.com/sitemap.xml",
  };
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

```md
사용자 에이전트: Googlebot
허용: /
거부: /private/

사용자 에이전트: Applebot
거부: /

사용자 에이전트: Bingbot
거부: /

사이트맵: https://acme.com/sitemap.xml
```

### 로봇 객체

```js
type Robots = {
  rules:
    | {
        userAgent?: string | string[]
        allow?: string | string[]
        disallow?: string | string[]
        crawlDelay?: number
      }
    | Array<{
        userAgent: string | string[]
        allow?: string | string[]
        disallow?: string | string[]
        crawlDelay?: number
      }>
  sitemap?: string | string[]
  host?: string
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

## 버전 이력

| Version   | Changes                    |
| --------- | -------------------------- |
| `v13.3.0` | `robots`이 추가되었습니다. |

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
