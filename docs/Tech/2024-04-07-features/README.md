---
title: "storybook config features 설정방법 정리"
description: ""
date: 2024-04-07 03:56
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "features"
link: "https://storybook.js.org/docs/api/main-config-features"
---


부모: main.js|ts 구성

유형:

```js
{
  argTypeTargetsV7?: boolean;
  legacyDecoratorFileOrder?: boolean;
}
```

Storybook의 추가 기능을 활성화합니다.



## legacyDecoratorFileOrder

유형: 부울

preview.js에서 추가 기능이나 프레임워크 데코레이터 전에 적용합니다. 더 많은 정보를 확인하세요.

```typescript
// 프레임워크(ex: react-webpack5, vue3-vite)를 사용 중이시라면 'your-framework'를 해당 프레임워크로 바꿔주세요.
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  features: {
    legacyDecoratorFileOrder: true,
  },
};

export default config;
```  



## argTypeTargetsV7

(⚠️ 실험중)

타입: 불리언

렌더 함수에서 "target"이 포함된 args를 필터링합니다.



```typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  features: {
    argTypeTargetsV7: true,
  },
};

export default config;
```