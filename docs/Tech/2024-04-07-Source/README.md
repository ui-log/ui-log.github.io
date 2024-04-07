---
title: "@storybook/blocks Source 사용 방법"
description: ""
date: 2024-04-07 04:08
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "Source"
link: "https://storybook.js.org/docs/api/doc-block-source"
---


Source 블록은 소스 코드 조각을 직접 렌더링하는 데 사용됩니다.

```js
import { Meta, Source } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Meta of={ButtonStories} />

<Source of={ButtonStories.Primary} />
```

## Source



```js
import { Source } from '@storybook/blocks';
```

### 코드

타입: 문자열

기본값: parameters.docs.source.code



```js
import { Meta, Source } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Meta of={ButtonStories} />

<Source code={`const thisIsCustomSource = true;
if (isSyntaxHighlighted) {
  console.log('syntax highlighting is working');
}`} />
```

### dark

Type: boolean



Default: parameters.docs.source.dark

스니펫이 다크 모드로 렌더링되는지 여부를 결정합니다.

### excludeDecorators

유형: boolean



기본: parameters.docs.source.excludeDecorators

데코레이터가 소스 코드 스니펫에 렌더링되는지 여부를 결정합니다.

### 형식

유형: 부울 | `dedent` | BuiltInParserName



기본값: parameters.docs.source.format 또는 true

소스 코드에 사용된 형식 지정을 지정합니다. true 및 `dedent`는 모든 여분의 들여쓰기를 제거하는 동일한 효과를 줍니다. 모든 유효한 prettier 구문 분석기 이름을 지원합니다.

### 언어

유형:



```js
'jsextra' | 'jsx' | 'json' | 'yml' | 'md' | 'bash' | 'css' | 'html' | 'tsx' | 'typescript' | 'graphql'
```

기본값: parameters.docs.source.language 또는 `jsx`

구문 강조에 사용할 언어를 지정합니다.

### of



타입: 이야기 내보내기

이야기의 소스를 렌더링하는 것을 지정합니다.

### 변환

타입: (코드: 문자열, 이야기컨텍스트: 이야기컨텍스트) = 문자열



기본값: parameters.docs.source.transform

렌더링되기 전에 소스를 동적으로 변환하는 함수이며, 원본 소스 및 필요한 이야기 컨텍스트를 기반으로합니다. 반환된 문자열은 그대로 표시됩니다. code 및 transform이 모두 지정된 경우 transform은 무시됩니다.

### 유형

유형: `자동` | `코드` | `동적`



기본값: parameters.docs.source.type 또는 `auto`

소스 코드가 렌더링되는 방식을 지정합니다.

- auto: 이 값은 동적으로 렌더링됩니다. 이는 스토리의 렌더 함수가 args 입력을 허용하고 동적으로 업데이트 된 arg 값을 지원하는 프레임워크를 사용할 경우만 해당됩니다. 그렇지 않으면 code와 동일합니다.
- code: code prop의 값을 렌더링하며, 그렇지 않으면 정적 스토리 소스를 렌더링합니다.
- dynamic: 동적으로 업데이트된 arg 값으로 스토리 소스를 렌더링합니다.