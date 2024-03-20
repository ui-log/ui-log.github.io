---
title: "Nextjs 14 crossOrigin 사용 방법"
description: ""
date: 2024-03-20 17:56
sidebarDepth: 0
tag: Tech
thumbnail:
---

# Nextjs 14 crossOrigin 사용 방법

`next/script` 컴포넌트에서 생성된 모든 `script` 태그에 크로스오리진 속성을 추가하고, 크로스 도메인 요청을 처리하는 방법을 정의하기 위해 crossOrigin 옵션을 사용하세요.

```js
module.exports = {
  crossOrigin: "anonymous",
};
```

## 옵션

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

- `anonymous`: crossOrigin="anonymous" 속성을 추가합니다.
- `use-credentials`: crossOrigin="use-credentials" 속성을 추가합니다.

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
