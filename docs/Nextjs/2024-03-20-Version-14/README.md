---
title: "Nextjs 13에서 14로 업그레이드 하기"
description: ""
date: 2024-03-20 17:20
sidebarDepth: 0
tag: Tech
thumbnail:
---

# Nextjs 13에서 14로 업그레이드 하기

## 13에서 14로 업그레이드하기

Next.js 버전 14로 업데이트하려면 즐겨 사용하는 패키지 매니저를 사용하여 다음 명령을 실행하십시오:

```js
npm i next@latest react@latest react-dom@latest eslint-config-next@latest
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

```js
yarn add next@latest react@latest react-dom@latest eslint-config-next@latest
```

```js
pnpm up next react react-dom eslint-config-next --latest
```

```js
bun add next@latest react@latest react-dom@latest eslint-config-next@latest
```

> 좋아 알아두세요: TypeScript를 사용 중이라면, @types/react와 @types/react-dom도 최신 버전으로 업그레이드하는 것을 잊지 마세요.

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

### v14 요약

- Node.js의 최소 버전이 16.14에서 18.17로 상향 조정되었습니다. 16.x 버전은 지원 종료되었기 때문입니다.
- `export` 구성을 사용하기 위해 next 명령어가 제거되었습니다. 자세한 내용은 문서를 참고해주세요.
- ImageResponse를 위한 next/server import가 next/og로 이름이 변경되었습니다. 안전하고 자동으로 import 이름을 바꾸기 위한 codemod가 제공됩니다.
- @next/font 패키지가 내장 next/font로 완전히 대체되었습니다. 안전하고 자동으로 import 이름을 바꾸기 위한 codemod가 제공됩니다.
- next-swc의 WASM 타겟이 제거되었습니다.

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
