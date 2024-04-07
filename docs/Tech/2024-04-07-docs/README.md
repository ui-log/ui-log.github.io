---
title: "Storybook 에서 자동으로 문서 생성하는 방법"
description: ""
date: 2024-04-07 03:55
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "docs"
link: "https://storybook.js.org/docs/api/main-config-docs"
---


부모: main.js|ts 구성

타입:

```js
{
  autodocs?: boolean | 'tag';
  defaultName?: string;
  docsMode?: boolean;
}
```

Storybook의 자동 생성된 문서를 구성합니다.



## 자동 문서

유형: boolean | `tag`

기본값: `tag`

스토리에 대한 자동 문서화 기능을 활성화하거나 비활성화합니다.



- true: 모든 이야기에 대해 활성화됩니다.
- false: 모든 이야기에 대해 비활성화됩니다.
- `tag`: `autodocs`로 태그된 이야기에 대해 활성화됩니다.

```typescript
// 사용 중인 프레임워크로 your-framework를 대체하세요 (예: react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  docs: {
    autodocs: 'tag',
  },
};

export default config;
```

## defaultName

타입: 문자열



기본: `Docs`

생성된 문서 페이지에 사용할 이름입니다.

```typescript
// 사용 중인 framework로 교체하세요 (예: react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  docs: {
    defaultName: 'Documentation',
  },
};

export default config;
```

## docsMode



유형: 부울

사이드바에 문서 페이지만 표시합니다(일반적으로 --docs CLI 플래그로 설정됨).

```typescript
// 사용 중인 프레임워크로 your-framework을(예: react-webpack5, vue3-vite) 바꿔주세요
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  docs: {
    docsMode: true,
  },
};

export default config;
```