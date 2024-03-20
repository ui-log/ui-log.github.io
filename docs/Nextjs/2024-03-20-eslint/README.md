---
title: "Nextjs 14 eslint 설정하기"
description: ""
date: 2024-03-20 17:57
sidebarDepth: 0
tag: Tech
thumbnail:
---

# Nextjs 14 eslint 설정하기

프로젝트에서 ESLint가 감지되면, Next.js는 제품 빌드(다음 빌드) 중에 오류가 발생할 때 실패합니다.

만약 Next.js가 제품 코드를 생성하는 동안 응용 프로그램에 ESLint 오류가 있어도 되도록 하려면, 내장된 린팅 단계를 완전히 비활성화할 수 있습니다. 이것은 이미 ESLint가 워크플로우의 다른 부분(예: CI 또는 pre-commit 훅)에서 실행되도록 구성된 경우를 제외하고 권장하지 않습니다.

next.config.js 파일을 열고 eslint 구성에서 ignoreDuringBuilds 옵션을 활성화하세요.

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
  eslint: {
    // 경고: 이 옵션을 사용하면 프로젝트에 ESLint 오류가 있더라도
    // 제품 빌드가 성공적으로 완료될 수 있습니다.
    ignoreDuringBuilds: true,
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
