---
title: "Nextjs 14 basePath 옵션 설정 방법"
description: ""
date: 2024-03-20 17:55
sidebarDepth: 0
tag: Tech
thumbnail:
---

# Nextjs 14 basePath 옵션 설정 방법

도메인의 하위 경로로 Next.js 애플리케이션을 배포하려면 basePath 구성 옵션을 사용할 수 있습니다.

basePath를 사용하면 애플리케이션에 대한 경로 접두사를 설정할 수 있습니다. 예를 들어, 기본값인 빈 문자열 대신 /docs를 사용하려면 next.config.js를 열고 다음과 같이 basePath 구성을 추가하십시오:

```js
module.exports = {
  basePath: "/docs",
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

> 좋은 정보: 이 값은 빌드 시 설정해야 하며 클라이언트 측 번들에 인라인으로 포함되어 있기 때문에 다시 빌드하지 않고는 변경할 수 없습니다.

### 링크

next/link 및 next/router를 사용하여 다른 페이지에 링크할 때 basePath가 자동으로 적용됩니다.

예를 들어, /about을 사용하면 basePath가 /docs로 설정되어 있을 때 자동으로 /docs/about이 됩니다.

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
export default function HomePage() {
  return (
    <>
      <Link href="/about">About Page</Link>
    </>
  );
}
```

Output html:

```js
<a href="/docs/about">About Page</a>
```

이렇게 하면 basePath 값이 변경되어도 애플리케이션의 모든 링크를 변경할 필요가 없습니다.

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

### 이미지

다음/image 컴포넌트를 사용할 때는 src 앞에 basePath를 추가해야 합니다.

예를들어, basePath가 /docs로 설정되어 있을 때 /docs/me.png를 사용하면 이미지가 올바르게 제공됩니다.

```js
import Image from "next/image";

function Home() {
  return (
    <>
      <h1>내 홈페이지</h1>
      <Image src="/docs/me.png" alt="사진 저작자" width={500} height={500} />
      <p>내 홈페이지에 오신 것을 환영합니다!</p>
    </>
  );
}

export default Home;
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
