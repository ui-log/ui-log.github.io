---
title: "storybook에서 환경변수 사용하는 방법"
description: ""
date: 2024-04-07 03:55
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "env"
link: "https://storybook.js.org/docs/api/main-config-env"
---


부모: main.js|ts 구성

유형: (config: { [key: string]: string }) = `{ [key: string]: string }

Storybook 환경 변수를 사용자 정의하는 데 사용됩니다.

```typescript
// 사용 중인 프레임워크로 변경하세요 (예: react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  /*
   * 👇 `config` 인수에는 다른 모든 기존 환경 변수가 포함됩니다.
   * `.env` 파일이나 명령 줄에서 구성된 변수 중 하나
   */
  env: (config) => ({
    ...config,
    EXAMPLE_VAR: 'Storybook에서 구성된 환경 변수',
  }),
};

export default config;
```