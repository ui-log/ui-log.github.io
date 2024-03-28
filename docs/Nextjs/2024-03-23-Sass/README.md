---
title: "Nextjs 13 저장소에서 sass/scss 사용하는 방법"
description: ""
date: 2024-03-23 14:43
sidebarDepth: 0
tag: Tech
thumbnail:
originalTitle: 간극
link: undefined
---

# Sass

Next.js는 .scss 및 .sass 확장자를 사용하여 sass를 통합하는 내장 지원 기능을 제공합니다. .module.scss 또는 .module.sass 확장자로 CSS Modules를 사용하여 구성 요소 수준의 Sass를 사용할 수 있습니다.

먼저 sass를 설치하세요:

```js
npm install --save-dev sass
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

> 알면 좋은 사실:
> Sass는 두 가지 다른 구문을 지원합니다. 각각에 대해 확장 기능이 있습니다. .scss 확장자는 SCSS 구문을 사용해야 하며, .sass 확장자는 Indented Syntax ("Sass")를 사용해야 합니다.
> 어떤 것을 선택할지 확신이 없다면, CSS의 상위집합인 .scss 확장자를 시작으로 선택하고, Indented Syntax ("Sass")를 배울 필요가 없습니다.

### Sass 옵션 사용자 정의

만약 Sass 컴파일러를 구성하려면, next.config.js에서 sassOptions를 사용하세요.

```js
const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
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

### Sass 변수

Next.js에서는 CSS 모듈 파일에서 내보낸 Sass 변수를 지원합니다.

예를 들어, 내보낸 primaryColor Sass 변수를 사용하려면:

```js
$primary-color: #64ff00;

:export {
  primaryColor: $primary-color;
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
import variables from "../styles/variables.module.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout color={variables.primaryColor}>
      <Component {...pageProps} />
    </Layout>
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
