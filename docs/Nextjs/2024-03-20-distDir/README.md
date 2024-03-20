---
title: "Nextjs 14 사용자 빌드 디렉터리를 위한 distDir"
description: ""
date: 2024-03-20 17:56
sidebarDepth: 0
tag: Tech
thumbnail:
---

# Nextjs 14 사용자 빌드 디렉터리를 위한 distDir

기본적으로 .next 대신 사용할 사용자 정의 빌드 디렉터리의 이름을 지정할 수 있습니다.

next.config.js 파일을 열고 distDir 구성을 추가하세요:

```js
module.exports = {
  distDir: "build",
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

이제 `next build`를 실행하면 Next.js는 기본 .next 폴더 대신 빌드를 사용할 것입니다.

> `distDir`은 프로젝트 디렉토리를 벗어나서는 안 됩니다. 예를 들어, ../build는 잘못된 디렉토리입니다.

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
