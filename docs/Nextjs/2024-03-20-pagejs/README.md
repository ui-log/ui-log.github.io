---
title: "Nextjs 14 페이지 컴포넌트 작성 방법"
description: ""
date: 2024-03-20 17:35
sidebarDepth: 0
tag: Tech
thumbnail:
---

# Nextjs 14 페이지 컴포넌트 작성 방법

페이지는 경로별로 고유한 UI입니다.

```typescript
export default function Page({ params, searchParams }: { params: { slug: string }; searchParams: { [key: string]: string | string[] | undefined } }) {
  return <h1>My Page</h1>;
}
```

## 속성

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

### 매개변수 (선택 사항)

해당 페이지로 이어지는 루트 세그먼트에서 동적 경로 매개변수가 포함된 객체입니다. 예를 들어:

| 예시                                 | URL         | `params`                       |
| ------------------------------------ | ----------- | ------------------------------ |
| `app/shop/[slug]/page.js`            | `/shop/1`   | `{ slug: '1' }`                |
| `app/shop/[category]/[item]/page.js` | `/shop/1/2` | `{ category: '1', item: '2' }` |
| `app/shop/[...slug]/page.js`         | `/shop/1/2` | `{ slug: ['1', '2'] }`         |

### searchParams (선택 사항)

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

현재 URL의 검색 매개변수를 포함한 객체입니다. 예를 들어:

| URL               | searchParams       |
| ----------------- | ------------------ |
| /shop?a=1         | { a: '1' }         |
| /shop?a=1&amp;b=2 | { a: '1', b: '2' } |
| /shop?a=1&amp;a=2 | { a: ['1', '2'] }  |

> 알아두면 좋아요:
> searchParams는 사전에 알 수없는 값이므로 동적 API입니다. 이를 사용하면 페이지가 요청 시 동적 렌더링으로 전환됩니다.
> searchParams는 URLSearchParams 인스턴스가 아닌 일반 JavaScript 객체를 반환합니다.

## 버전 이력

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

| Version   | Changes            |
| --------- | ------------------ |
| `v13.0.0` | `page` introduced. |

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
