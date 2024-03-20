---
title: "Nextjs 14 codemod 사용 방법"
description: ""
date: 2024-03-20 17:09
sidebarDepth: 0
tag: Tech
thumbnail:
---

# 코드모드

코드모드는 코드베이스에 프로그래밍적으로 실행되는 변환을 의미합니다. 이를 통해 많은 변경 사항을 수작업으로 모든 파일을 일일이 훑지 않고도 프로그래밍적으로 적용할 수 있습니다.

Next.js는 API가 업데이트되거나 사용이 중단된 경우 Next.js 코드베이스를 업그레이드하는 데 도움이 되는 코드모드 변환을 제공합니다.

## 사용법

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

터미널에서 프로젝트 폴더로 이동한 후 다음 명령을 실행해주세요:

```js
npx @next/codemod <transform> <path>
```

`transform`과 `path`를 적절한 값으로 바꿔주세요.

- transform - 변환의 이름
- path - 변환할 파일 또는 디렉터리
- --dry - dry-run을 실행하여 코드를 편집하지 않음
- --print - 변경된 출력물을 비교를 위해 출력함

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

## Next.js Codemods

### 14.0

#### ImageResponse Imports 이주하기

```js
npx @next/codemod@latest next-og-import .
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

이 코드 변형은 다이나믹 OG 이미지 생성을 위해 next/server에서 next/og로 import를 변환합니다.

예시:

```js
import { ImageResponse } from "next/server";
```

다음과 같이 변환됩니다:

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
import { ImageResponse } from "next/og";
```

#### viewport 내보내기 사용

```js
npx @next/codemod@latest metadata-to-viewport-export .
```

이 코드 모드는 일부 viewport 메타데이터를 viewport 내보내기로 이전합니다.

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

예시로서:

```js
export const metadata = {
  title: "My App",
  themeColor: "dark",
  viewport: {
    width: 1,
  },
};
```

다음과 같이 변환됩니다:

```js
export const metadata = {
  title: "My App",
};

export const viewport = {
  width: 1,
  themeColor: "dark",
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

### 13.2

#### 내장 폰트 사용하기

```js
npx @next/codemod@latest built-in-next-font .
```

이 코드 모드는 @next/font 패키지를 제거하고 @next/font import를 내장된 next/font로 변환합니다.

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

예를 들어:

```js
import { Inter } from "next/font/google";
```

이렇게 바뀝니다.

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

### 13.0

#### 다음 이미지 가져오기 이름 변경

```js
npx @next/codemod@latest next-image-to-legacy-image .
```

기존 Next.js 10, 11 또는 12 애플리케이션에서 next/image 가져오기를 안전하게 Next.js 13의 next/legacy/image로 이름을 변경합니다. 또한 next/future/image를 next/image로 바꿉니다.

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

예를 들어:

```js
// 'next/image' becomes 'next/legacy/image'
import Image1 from "next/legacy/image";
// 'next/future/image' becomes 'next/image'
import Image2 from "next/image";

export default function Home() {
  return (
    <div>
      <Image1 src="/test.jpg" width="200" height="300" />
      <Image2 src="/test.png" width="500" height="400" />
    </div>
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

#### 새 이미지 구성 요소로 이전하기

```js
npx @next/codemod@latest next-image-experimental .
```

next/legacy/image에서 새로운 next/image로 안전하게 이전하려면 인라인 스타일을 추가하고 사용되지 않는 프롭을 제거해야 합니다.

- layout 프롭을 제거하고 스타일을 추가합니다.
- objectFit 프롭을 제거하고 스타일을 추가합니다.
- objectPosition 프롭을 제거하고 스타일을 추가합니다.
- lazyBoundary 프롭을 제거합니다.
- lazyRoot 프롭을 제거합니다.

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

#### 링크 구성 요소에서 `a` 태그 제거하기

```js
npx @next/codemod@latest new-link .
```

링크 구성 요소 내에서 `a` 태그를 제거하거나 자동으로 수정할 수 없는 링크에는 legacyBehavior 속성을 추가하세요.

예시:

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
<Link href="/about">
  <a>About</a>
</Link>
// 다음과 같이 변환됩니다
<Link href="/about">
  About
</Link>

<Link href="/about">
  <a onClick={() => console.log('clicked')}>About</a>
</Link>
// 다음과 같이 변환됩니다
<Link href="/about" onClick={() => console.log('clicked')}>
  About
</Link>
```

자동 수정이 적용되지 않는 경우, legacyBehavior prop이 추가됩니다. 이를 통해 특정 링크에 대해 이전 동작을 유지하면서 앱이 계속 작동할 수 있습니다.

```js
const Component = () => <a>About</a>

<Link href="/about">
  <Component />
</Link>
// 다음과 같이 변환됩니다
<Link href="/about" legacyBehavior>
  <Component />
</Link>
```

### 11

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

#### CRA에서 이전하기

```js
npx @next/codemod cra-to-next
```

이 명령어를 실행하면 Create React App 프로젝트를 Next.js로 이전할 수 있습니다. 페이지 라우터를 만들고 동작을 일치시키기 위한 필요한 구성을 생성합니다. 초기에는 클라이언트 측 렌더링만을 이용하여 SSR 중 창(window) 사용으로 인한 호환성 문제를 방지하며, Next.js의 특정 기능을 점진적으로 도입할 수 있도록 매끄럽게 활성화할 수 있습니다.

이 트랜스폼과 관련된 피드백이 있으시면 토론란에 공유해주세요.

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

### 10

#### React Imports 추가

```js
npx @next/codemod add-missing-react-import
```

React를 가져오지 않는 파일을 변환하여 React JSX 변환을 사용할 수 있도록 import를 포함시킵니다.

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

예를 들어:

```js
export default class Home extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}
```

다음과 같이 변환됩니다:

```js
import React from "react";
export default class Home extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
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

### 9

#### 익명 컴포넌트를 명명된 컴포넌트로 변환하기

```js
npx @next/codemod name-default-component
```

버전 9 이상에서 사용 가능합니다.

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

익명 컴포넌트를 구분할 수 있는 이름 있는 컴포넌트로 변경하여 Fast Refresh와 함께 작동하도록 합니다.

예시:

```js
export default function MyComponent() {
  return <div>Hello World</div>;
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

```js
export default function 내컴포넌트() {
  return <div>안녕, 세상</div>;
}
```

이 컴포넌트는 파일 이름을 기준으로 카멜 케이스로 명명되며, 화살표 함수와 함께 작동합니다.

### 8

#### AMP HOC를 페이지 구성으로 변환하기

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
npx @next/codemod withamp-to-config
```

withAmp HOC를 Next.js 9 페이지 구성으로 변환합니다.

예시:

```js
// 이전
import { withAmp } from "next/amp";

function Home() {
  return <h1>내 AMP 페이지</h1>;
}

export default withAmp(Home);
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
// 이후
export default function Home() {
  return <h1>내 AMP 페이지</h1>;
}

export const config = {
  amp: true,
};
```

### 6

#### withRouter 사용하기

```js
npx @next/codemod url-to-withrouter
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

전의 페이지 자동 주입 url 속성을 사용하여 withRouter 및 주입되는 router 속성을 사용하도록 변경되었습니다. 자세한 내용은 여기를 읽어보세요: [여기를 클릭하세요](https://nextjs.org/docs/messages/url-deprecated).

예를 들어:

```js
import React from "react";
export default class extends React.Component {
  render() {
    const { pathname } = this.props.url;
    return <div>현재 경로: {pathname}</div>;
  }
}
```

```js
import React from "react";
import { withRouter } from "next/router";
export default withRouter(
  class extends React.Component {
    render() {
      const { pathname } = this.props.router;
      return <div>현재 경로: {pathname}</div>;
    }
  }
);
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

이것은 한 가지 경우입니다. 변환된(그리고 테스트된) 모든 경우들은 **testfixtures** 디렉토리에서 찾을 수 있어요.

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
