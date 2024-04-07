---
title: "storybook config 'stories' 설정 방법 정리"
description: ""
date: 2024-04-07 03:52
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "stories"
link: "https://storybook.js.org/docs/api/main-config-stories"
---



상위: main.js|ts 설정

타입:

```js
| (문자열 | StoriesSpecifier)[]
| async (목록: (문자열 | StoriesSpecifier)[]) => (문자열 | StoriesSpecifier)[]
```



Storybook을 지정된 위치에서 스토리를 로드하도록 구성합니다. 여기서 의도는 컴포넌트를 문서화하는 스토리 파일을 공존하도록 하는 것입니다:

```js
•
└── components
    ├── Button.ts
    └── Button.stories.ts
```

```typescript
// 사용 중인 프레임워크를 your-framework로 대체하세요 (예: react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
};

export default config;
```

## 배열로 글로브 사용하기



스토리북은 패턴 일치 문자열의 배열로 찾은 프로젝트의 스토리를 로드합니다.

스토리는 배열에 정의된 순서대로 로드됩니다. 이를 통해 사이드바에 표시되는 스토리의 순서를 제어할 수 있습니다:

```typescript
// 사용 중인 프레임워크(예: react-webpack5, vue3-vite)로 교체
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
};

export default config;
```

## 구성 객체로 함께



거기서 시작하실 수 있습니다.  함께 합니다.



### StoriesSpecifier

유형:

```js
{
  directory: string;
  files?: string;
  titlePrefix?: string;
}
```

#### StoriesSpecifier.directory



(필수)

유형: 문자열

스토리 파일을 찾기 시작할 위치로, 프로젝트 루트에 상대적인 위치입니다.

#### StoriesSpecifier.files



유형: 문자열

기본값: `**/*.@(mdx|stories.@(js|jsx|mjs|ts|tsx))`

로드할 파일 이름과 일치하는 glob입니다. StoriesSpecifier.directory와 관련이 있습니다 (선행 ./ 없이).

#### StoriesSpecifier.titlePrefix



유형: 문자열

기본값: ``

자동 제목 생성 시 스토리 제목에 사용되는 접두사입니다.

## 사용자 지정 구현과 함께



Storybook 구성을 조정하고 사용자 정의 로직을 구현할 수도 있어요. 예를 들어, 전통적인 방식으로는 해결할 수 없는 특정 패턴을 포함한 프로젝트를 작업 중이라고 가정해봅시다. 그런 경우에는 다음과 같이 구성을 조정할 수 있어요:

```typescript
// 사용 중인 프레임워크(예: react-webpack5, vue3-vite)로 your-framework을 대체하세요
import type { StorybookConfig } from '@storybook/your-framework';
import type { StoriesEntry } from '@storybook/types';

async function findStories(): Promise<StoriesEntry[]> {
  // 사용자 정의 로직이 파일 목록을 반환합니다
}

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: async (list: StoriesEntry[]) => [
    ...list,
    // 👇 찾은 스토리를 기존 스토리 파일 목록에 추가해요
    ...(await findStories()),
  ],
};

export default config;
```