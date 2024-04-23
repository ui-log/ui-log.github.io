---
title: "React Typescript + Nextjs + Redux Toolkit을 위한 VSCode 코드 Snippets들"
description: ""
date: 2024-04-05 19:47
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "The Best Vscode Snippets for React Typescript + Nextjs + Redux Toolkit"
link: "https://medium.com/@bhanu1776/the-best-vscode-snippets-for-react-typescript-nextjs-redux-toolkit-e70db3ed3afd"
---


안녕하세요! ES7 React snippets 확장 프로그램을 사용해 보셨나요? 제공되는 막대한 양의 스니펫에 압도되었다고 느낀 적이 있나요? 그렇지 않다면, 여기 제가 추천하는 가장 필수적인 스니펫 목록이 있어요. 필수 사항에만 초점을 맞추면서 Visual Studio Code 설정을 간소화하고 코딩 경험을 효율적으로 만들어볼 수 있어요.

# React Snippets

## React useState → us

```js
"React useState": {
    "prefix": "us",
    "body": [
      "const [$1, set$2] = useState($3);"
    ]
  },
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

## React useEffect → ue

```js
"React useEffect": {
    "prefix": "ue",
    "body": [
      "useEffect(() => {",
      "  $1",
      "}, [$2]);"
    ]
  },
```

## React useCallback → ucb

```js
"React useCallback": {
    "prefix": "ucb",
    "body": [
      "useCallback(() => {",
      "  $1",
      "}, [$2]);"
    ]
  },
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

## React useMemo → 음

```js
"React useMemo": {
    "prefix": "umm",
    "body": [
      "useMemo(() => {",
      "  $1",
      "}, [$2]);"
    ]
  },
```

## React Functional components → rafce

```js
"React Function Component": {
    "key": "reactArrowFunctionExportComponent",
    "prefix": "rafce",
    "body": [
      "const ${1:${TM_FILENAME_BASE} = () => {",
      "  return (",
      "    <div>",
      "      <h1>${1:first}</h1>",
      "    </div>",
      "  )",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}"
    ],
    "description": "Creates a React Arrow Function Component with ES7 module system",
    "scope": "typescript,typescriptreact,javascript,javascriptreact"
  },
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

## 프롭스를 사용한 React 함수형 컴포넌트 → rafcep

```js
"React 함수형 컴포넌트와 프롭스": {
    "key": "react화살표함수내보냄컴포넌트",
    "prefix": "rafcep",
    "body": [
      "interface $1Props {}",
      "",
      "const ${1:${TM_FILENAME_BASE} = ({}: $1Props) => {",
      "  return (",
      "    <div>",
      "      <h1>${1:first}</h1>",
      "    </div>",
      "  )",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}"
    ],
    "description": "ES7 모듈 시스템을 사용하여 React 화살표 함수 컴포넌트를 생성합니다.",
    "scope": "typescript,typescriptreact,javascript,javascriptreact"
  },
```

# Next.js 단축키

## 비동기 React 함수형 컴포넌트 → arafce

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
"비동기 리액트 함수 컴포넌트": {
    "prefix": "arafce",
    "body": [
      "const ${1:${TM_FILENAME_BASE} = async () => {",
      "  return (",
      "    <div>",
      "      <h1>${1:first}</h1>",
      "    </div>",
      "  )",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}"
    ]
  },
```

## 비동기 리액트 함수 컴포넌트 with props → arafcep

```js
"비동기 리액트 함수 컴포넌트 with Props": {
    "prefix": "arafcep",
    "body": [
      "interface $1Props {}",
      "",
      "const ${1:${TM_FILENAME_BASE} = async ({}: $1Props) => {",
      "  return (",
      "    <div>",
      "      <h1>${1:first}</h1>",
      "    </div>",
      "  )",
      "}",
      "",
      "export default ${1:${TM_FILENAME_BASE}"
    ]
  },
```

# Imports alias → imp & imd

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
"import": {
    "key": "import",
    "prefix": "imp",
    "body": ["import ${2:second} from '${1:first}'"],
    "scope": "typescript, typescriptreact, javascript, javascriptreact"
  },
```

```js
"importDestructing": {
    "key": "importDestructing",
    "prefix": "imd",
    "body": ["import { ${2:second} } from '${1:first}'"],
    "scope": "typescript, typescriptreact, javascript, javascriptreact"
  },
```

# Redux Toolkit → rxslice

```js
"reduxSlice": {
    "key": "reduxSlice",
    "prefix": "rxslice",
    "body": [
      "import { createSlice } from '@reduxjs/toolkit'",
      "",
      "const initialState = {",
      "  ${3}",
      "}",
      "",
      "const ${1:${TM_FILENAME_BASE} = createSlice({",
      "  name: '${2:second}',",
      "  initialState,",
      "  reducers: {}",
      "});",
      "",
      "export const {} = ${1:${TM_FILENAME_BASE}.actions",
      "",
      "export default ${1:${TM_FILENAME_BASE}.reducer"
    ],
    "scope": "typescript, typescriptreact, javascript, javascriptreact"
  },
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

상단의 코드 스니펫을 TypeScriptReact.json 파일에 추가하거나 VSCode에서 제 제공해드리는 스니펫 파일을 사용해보세요. GitHub에서 확인하실 수 있습니다.