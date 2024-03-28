---
title: "Nextjs 13 프로젝트 Babel 설정 방법"
description: ""
date: 2024-03-23 14:54
sidebarDepth: 0
tag: Tech
thumbnail:
originalTitle: 바벨
link: undefined
---

# Babel

Next.js는 앱에 next/babel 프리셋을 포함하여 React 애플리케이션 및 서버 측 코드를 컴파일하는 데 필요한 모든 것이 포함되어 있습니다. 그러나 기본 Babel 구성을 확장하려면 가능합니다.

## 프리셋 및 플러그인 추가

먼저 프로젝트의 루트 디렉토리에 .babelrc 파일(babel.config.js도 가능)을 정의해야 합니다. 이러한 파일이 발견되면 Next.js가 필요로 하는 next/babel 프리셋과 제공되어야 하는 진리의 원천으로 간주되므로 정의해야 합니다.

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

여기 예시 .babelrc 파일이 있어요:

```js
{
  "presets": ["next/babel"],
  "plugins": []
}
```

next/babel에 포함된 프리셋을 알아보려면 이 파일을 확인해보세요.

구성 없이 프리셋/플러그인을 추가하려면 이렇게 해도 돼요:

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

```json
{
  "presets": ["next/babel"],
  "plugins": ["@babel/plugin-proposal-do-expressions"]
}
```

## 프리셋과 플러그인 사용자 정의

사용자 정의 구성으로 프리셋/플러그인을 추가하려면 다음과 같이 next/babel 프리셋에서 수행하십시오:

```json
{
  "presets": [
    [
      "next/babel",
      {
        "preset-env": {},
        "transform-runtime": {},
        "styled-jsx": {},
        "class-properties": {}
      }
    ]
  ],
  "plugins": []
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

babel 구성에 대한 사용 가능한 옵션에 대해 더 알아보려면 babel의 문서 사이트를 방문해보세요.

> 유용한 정보:
> Next.js는 서버 측 컴파일에 현재 Node.js 버전을 사용합니다.
> "preset-env"의 모듈 옵션은 false로 유지해야 합니다. 그렇지 않으면 웹팩 코드 분할이 비활성화됩니다.

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
