---
title: "Nextjs 14에서 데이터 fetch 하는 방법"
description: ""
date: 2024-03-20 17:41
sidebarDepth: 0
tag: Tech
thumbnail:
---

# Nextjs 14에서 데이터 fetch 하는 방법

Next.js는 네이티브 Web fetch() API를 확장하여 서버의 각 요청이 자체 지속적 캐싱 의미론을 설정할 수 있도록 합니다.

브라우저에서 cache 옵션은 fetch 요청이 브라우저의 HTTP 캐시와 상호 작용하는 방법을 나타냅니다. 이 확장 기능을 통해 cache는 서버 측 fetch 요청이 프레임워크의 지속적인 HTTP 캐시와 상호 작용하는 방법을 나타냅니다.

서버 컴포넌트 내에서 async 및 await을 사용하여 fetch를 직접 호출할 수 있습니다.

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

```typescript
export default async function Page() {
  // 수동으로 무효화되기 전까지 이 요청은 캐시되어야 합니다.
  // `getStaticProps`와 유사합니다.
  // `force-cache`는 기본값이며 생략할 수 있습니다.
  const staticData = await fetch(`https://...`, { cache: "force-cache" });

  // 매 요청마다 새로고침해야 하는 요청입니다.
  // `getServerSideProps`와 유사합니다.
  const dynamicData = await fetch(`https://...`, { cache: "no-store" });

  // 수명이 10초인 캐시로 저장되어야 하는 요청입니다.
  // `getStaticProps`와 `revalidate` 옵션과 유사합니다.
  const revalidatedData = await fetch(`https://...`, {
    next: { revalidate: 10 },
  });

  return <div>...</div>;
}
```

## fetch(url, options)

Next.js는 Web fetch() API를 확장하므로 사용 가능한 네이티브 옵션을 모두 사용할 수 있습니다.

### options.cache

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

Next.js 데이터 캐시와 상호 작용하는 요청을 구성하세요.

```js
fetch(`https://...`, { cache: "force-cache" | "no-store" });
```

- force-cache (기본 설정) - Next.js는 데이터 캐시에서 일치하는 요청을 찾습니다. 일치하고 새로운 경우, 캐시에서 반환됩니다. 일치하지 않거나 오래된 경우, Next.js는 리소스를 원격 서버에서 가져와 다운로드된 리소스로 캐시를 업데이트합니다.
- 일치하고 새로운 경우, 캐시에서 반환됩니다.
- 일치하지 않거나 오래된 경우, Next.js는 리소스를 원격 서버에서 가져와 다운로드된 리소스로 캐시를 업데이트합니다.
- no-store - Next.js는 캐시를 확인하지 않고 모든 요청마다 원격 서버에서 리소스를 가져오며, 다운로드된 리소스로 캐시를 업데이트하지 않습니다.

> 알아두면 좋은 사실:
> 캐시 옵션을 제공하지 않으면 Next.js는 기본적으로 force-cache로 설정됩니다. cookies()와 같은 동적 함수를 사용한 경우에는 no-store로 설정됩니다. no-cache 옵션은 Next.js에서 no-store와 동일하게 작동합니다.

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

### options.next.revalidate

```js
fetch(`https://...`, { next: { revalidate: false | 0 | number } });
```

리소스의 캐시 지속 시간(초)을 설정합니다.

- false - 리소스를 무기한 캐싱합니다. revalidate: Infinity 와 의미적으로 같습니다. HTTP 캐시는 오래된 리소스를 시간이 지남에 따라 제거할 수 있습니다.
- 0 - 리소스가 캐싱되지 않도록 방지합니다.
- number - (초) 리소스가 최대 n 초 동안 캐시 지속 시간이 있어야 함을 지정합니다.

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

> 잘 알아두세요:
> 개별 fetch() 요청이 경로의 기본 재유효화보다 낮은 재유효화 숫자를 설정하면 전체 경로 재유효화 간격이 줄어듭니다.
> 동일한 경로에서 동일한 URL을 사용하는 두 개의 fetch 요청이 다른 재유효화 값으로 설정되어 있을 경우, 낮은 값이 사용됩니다.
> 편의상, revalidate가 숫자로 설정된 경우 cache 옵션을 설정할 필요가 없습니다. 0은 cache: `no-store`를 의미하고 양수 값은 cache: `force-cache`를 의미합니다.
> { revalidate: 0, cache: `force-cache` } 나 { revalidate: 10, cache: `no-store` }와 같이 충돌하는 옵션이 있는 경우 오류가 발생합니다.

### options.next.tags

```js
fetch(`https://...`, { next: { tags: ["collection"] } });
```

리소스의 캐시 태그를 설정합니다. 그런 다음 revalidateTag를 사용하여 필요할 때 데이터를 다시 유효화할 수 있습니다. 사용자 정의 태그의 최대 길이는 256자이며 최대 태그 항목 수는 64입니다.

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

## 버전 히스토리

| 버전      | 변경 내용                 |
| --------- | ------------------------- |
| `v13.0.0` | `fetch`가 도입되었습니다. |

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
