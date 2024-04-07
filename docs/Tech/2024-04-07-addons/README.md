---
title: "스토리북 8.0 애드온 이란?"
description: ""
date: 2024-04-07 03:53
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "addons"
link: "https://storybook.js.org/docs/api/main-config-addons"
---


상위: main.js|ts 구성

유형: (문자열 | { name: string; options?: AddonOptions })[]

Storybook에서 로드된 애드온을 등록합니다.

각 애드온의 사용 가능한 옵션에 대해서는 해당 문서를 참조하십시오.



```typescript
// 귀하가 사용하는 프레임워크로 table 태그를 변경하십시오. (예: react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  implementation: require.resolve('postcss'),
                },
              },
            ],
          },
        ],
      },
    },
  ],
};

export default config;
```