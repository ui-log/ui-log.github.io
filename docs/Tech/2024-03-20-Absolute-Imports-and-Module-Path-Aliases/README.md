---
title: "Nextjs 14 alias url 설정 방법"
description: ""
date: 2024-03-20 15:01
sidebarDepth: 0
tag: Tech
thumbnail:
---

# 절대 경로 임포트 및 모듈 경로 별칭

Next.js는 tsconfig.json 및 jsconfig.json 파일의 "paths" 및 "baseUrl" 옵션을 내장 지원합니다.
이러한 옵션을 사용하면 프로젝트 디렉토리를 절대 경로에 별칭으로 지정하여 모듈을 더 쉽게 가져올 수 있습니다. 예를 들어:

```js
// 이전
import { Button } from "../../../components/button";

// 이후
import { Button } from "@/components/button";
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

> 좋은 정보: create-next-app을 사용하면 이러한 옵션을 구성하라는 메시지가 표시됩니다.

## 절대 Imports

baseUrl 구성 옵션을 사용하면 프로젝트의 루트에서 직접 가져올 수 있습니다.
이 구성의 예시:

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
{
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

```typescript
export default function Button() {
  return <button>Click me</button>;
}
```

```typescript
import Button from "components/button";

export default function HomePage() {
  return (
    <>
      <h1>Hello World</h1>
      <Button />
    </>
  );
}
```

## 모듈 별칭

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

baseUrl 경로를 구성하는 것 외에도 "paths" 옵션을 사용하여 모듈 경로를 "별칭"으로 설정할 수 있어요.
아래 설정 예시에서는 @/components/*를 components/*로 매핑하는 구성을 보여줘요:

```js
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["components/*"]
    }
  }
}
```

```typescript
export default function Button() {
  return <button>Click me</button>;
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

```typescript
import Button from "@/components/button";

export default function HomePage() {
  return (
    <>
      <h1>안녕, 세상아</h1>
      <Button />
    </>
  );
}
```

각 "paths"는 baseUrl 위치를 기준으로 상대적입니다. 예를 들어:

```js
// tsconfig.json 또는 jsconfig.json
{
  "compilerOptions": {
    "baseUrl": "src/",
    "paths": {
      "@/styles/*": ["styles/*"],
      "@/components/*": ["components/*"]
    }
  }
}
```

```js
// pages/index.js
import Button from "@/components/button";
import "@/styles/styles.css";
import Helper from "utils/helper";

export default function HomePage() {
  return (
    <Helper>
      <h1>안녕, 세상아</h1>
      <Button />
    </Helper>
  );
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
