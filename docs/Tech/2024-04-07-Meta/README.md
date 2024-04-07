---
title: "Storybook에서 메타 데이터 추가하는 방법"
description: ""
date: 2024-04-07 04:07
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "Meta"
link: "https://storybook.js.org/docs/api/doc-block-meta"
---


메타 블록은 컴포넌트의 스토리 목록 옆에 사용자 정의 MDX 문서 페이지를 첨부하는 데 사용됩니다. 내용을 렌더링하지는 않지만 MDX 파일에서 두 가지 목적을 제공합니다:

- MDX 파일을 컴포넌트와 해당 스토리에 첨부한다.
- 사이드바에 연결되지 않은 문서 항목의 위치를 제어한다.

```js
import { Meta } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Meta of={ButtonStories} />
```

## Meta



```js
import { Meta } from '@storybook/blocks';
```

Meta는 다음과 같은 속성으로 구성됩니다:

### isTemplate

타입: 불린(boolean)



MDX 파일이 자동 문서 템플릿으로 작동하는지 여부를 결정합니다. true로 설정하면 MDX 파일이 일반적으로 색인화되는 대로 색인화되지 않습니다.

### 이름

유형: 문자열

첨부 문서 항목의 이름을 설정합니다. 각 파일의 Meta에 서로 다른 이름을 설정하여 사이드바에서 동일한 구성요소에 여러 MDX 파일을 첨부할 수 있습니다.



```js
import { Meta } from '@storybook/blocks';
import * as ComponentStories from './component.stories';

{/* 이 MDX 파일은 이제 "특별 문서"라고 불립니다 */}
<Meta of={ComponentStories} name="특별 문서" />
```

### of

유형: CSF 파일 내보내기

이 MDX 파일에 첨부된 CSF 파일을 지정합니다. CSF 파일에서 전체 내보내기 집합을 전달하십시오 (기본 내보내기가 아닙니다!).



```js
import { Meta, Story } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Meta of={ButtonStories} />
```

컴포넌트 스토리에 MDX 파일을 추가할 때 `of` 속성을 사용하는 것은 두 가지 목적을 달성합니다:

- MDX 콘텐츠가 컴포넌트의 스토리 목록 안에 사이드바에 나타납니다. 기본적으로 이는 `main.js`에 설정된 `docs.defaultName` 옵션(기본값은 "Docs")으로 명명됩니다. 하지만 `name` 속성을 사용하여 재정의할 수도 있습니다.
- 해당 컴포넌트와 해당 스토리를 MDX 파일에 연결하여 "attached" 모드에서 다른 문서 블록을 사용할 수 있게 합니다(예를 들어 Stories 블록을 사용하는 것과 같이).

### 제목



유형: 문자열

미첨부 MDX 파일의 제목을 설정합니다.

```js
import { Meta } from '@storybook/blocks';

{/* 사이드바에서 문서 항목의 위치를 제목으로 덮어쓰기 */}
<Meta title="path/to/Introduction" />
```

## 첨부된 vs. 미첨부된



Storybook에서, 문서 항목(MDX 파일)은 스토리 파일과 연결될 때 Meta의 of 속성을 통해 "첨부"됩니다. 첨부된 문서 항목은 사이드바에서 컴포넌트 아래의 스토리 목록 옆에 표시됩니다.

"첨부되지 않은" 문서 항목은 스토리 파일과 연결되지 않으며, Meta의 title 속성을 통해 사이드바의 어디에서든 표시될 수 있습니다.