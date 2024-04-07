---
title: "@storybook/blocks useOf 사용 방법"
description: ""
date: 2024-04-07 04:11
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "useOf"
link: "https://storybook.js.org/docs/api/doc-block-useof"
---


Storybook이 제공하는 기본 블록이 모든 사용 사례에 적합하지 않을 수 있으므로 사용자가 직접 블록을 작성하고자 할 수 있습니다.

만약 사용자 고유의 문서 블록이 스토리북의 주석과 상호 작용해야 하는 경우 - 스토리, 메타 또는 컴포넌트 - useOf 훅을 사용할 수 있습니다. 스토리, 메타 또는 컴포넌트의 모듈 내보내기를 전달하고 해당 주석이 적용된 형태로 반환됩니다 (매개변수, args, 로더, 데코레이터, play 함수가 적용됨) 그러면 원하는 방식으로 사용할 수 있습니다. 사실 Description 및 Canvas와 같은 대부분의 기존 블록은 내부적으로 useOf를 사용합니다.

다음은 useOf 훅을 사용하여 스토리 이름을 표시하는 사용자 정의 블록을 만드는 방법의 예입니다:

```js
import { useOf } from '@storybook/blocks';

/**
 * 스토리 이름 또는 제목을 표시하는 블록
 * - 스토리 참조가 전달되면 스토리 이름을 렌더링합니다
 * - 메타 참조가 전달되면 스토리 제목을 렌더링합니다
 * - 아무것도 전달되지 않으면 기본 스토리가 기본값으로 설정됩니다
 */
export const StoryName = ({ of }) => {
  const resolvedOf = useOf(of || 'story', ['story', 'meta']);
  switch (resolvedOf.type) {
    case 'story': {
      return <h1>{resolvedOf.story.name}</h1>;
    }
    case 'meta': {
      return <h1>{resolvedOf.preparedMeta.title}</h1>;
    }
  }
  return null;
};
```



```js
import { Meta } from '@storybook/blocks';
import { StoryName } from '../.storybook/blocks/StoryName';
import * as ButtonStories from './Button.stories';

<Meta of={ButtonStories} />

{/* "Secondary"를 렌더링함 */}
<StoryName of={ButtonStories.Secondary} />

{/* "Primary"을 렌더링함 */}
<StoryName />

{/* "Button"을 렌더링함 */}
<StoryName of={ButtonStories} />
```

## useOf

### Type

```js
(
  moduleExportOrType: ModuleExport | 'story' | 'meta' | 'component',
  validTypes?: Array<'story' | 'meta' | 'component'>
) => EnhancedResolvedModuleExportType
```



### 매개변수

#### moduleExportOrType

(필수)

형식: ModuleExport | `story` | `meta` | `component`



스토리 익스포트, 메타 익스포트, 컴포넌트 익스포트 또는 CSF 파일 익스포트로부터 가져온 어노테이션을 얻을 수 있습니다.

사용자 지정 블록이 첨부된 문서에 있는 경우에는 문자열을 전달함으로써 주(primary) 스토리, 메타 또는 컴포넌트를 얻는 것도 가능합니다. 이는 사용자 블록에서 of 속성을 생략할 수 있도록 유용합니다. 가장 일반적인 패턴은 `story` 또는 `meta`가 정의되지 않은 경우 주(primary) 스토리로 대체하는 useOf(props.of || `story`)를 사용하는 것입니다.

- useOf(`story`)는 첨부된 모드에서 어노테이션 주(primary) 스토리를 반환합니다; 첨부되지 않은 모드에서는 오류가 발생합니다.
- useOf(`meta`)는 첨부된 모드에서 어노테이션된 메타를 반환합니다; 첨부되지 않은 모드에서는 오류가 발생합니다.
- useOf(`component`)는 첨부된 모드에서 메타에서 지정된 어노테이션된 컴포넌트를 반환합니다; 첨부되지 않은 모드에서는 오류가 발생합니다.

#### 유효한 타입(validTypes)



Markdown 포맷으로 변경해보겠습니다:

Type: Array
```
story | meta | component
```

옵션으로 블록이 허용하는 유효한 유형의 배열을 지정할 수 있습니다. 유효하지 않은 유형을 전달하면 오류가 발생합니다. 예를 들어, Canvas 블록은 useOf(of, [`story`])를 사용하여 스토리에 대한 참조만 허용하도록 설정합니다. 메타나 컴포넌트는 허용하지 않습니다.

### 반환값

일치하는 유형에 따라 반환 값이 다릅니다:



#### EnhancedResolvedModuleExportType[`type`] === `story`

유형: { type: `story`, story: PreparedStory }

이야기의 경우 주석이 달린 이야기는 그대로 반환됩니다. 준비된 이야기는 이미 프로젝트 및 메타 주석과 병합되어 준비된 상태입니다.

#### EnhancedResolvedModuleExportType[`type`] === `meta`



유형: { type: `meta`, csfFile: CSFFile, preparedMeta: PreparedMeta }

메타의 경우, 구문 분석된 CSF 파일이 반환되며 준비된 주석이 담겨 있습니다. 즉, 프로젝트 주석이 메타 주석과 병합되지만 스토리 주석은 없습니다.

#### EnhancedResolvedModuleExportType[`type`] === `component`

유형: { type: `component`, component: Component, projectAnnotations: NormalizedProjectAnnotations }



구성 요소의 경우 프로젝트 주석과 함께 구성 요소가 반환됩니다. 메타 또는 스토리 주석은 포함되지 않습니다. 

훅이 구성 요소가 전달되었는지 또는 다른 객체가 전달되었는지 판별하는 것이 종종 불가능하기 때문에 알 수 없는 유형과 같이 동작합니다.