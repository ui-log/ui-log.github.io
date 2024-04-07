---
title: "스토리북 바벨 설정 방법(2024년)"
description: ""
date: 2024-04-07 03:53
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "babel"
link: "https://storybook.js.org/docs/api/main-config-babel"
---


부모: main.js|ts 설정

유형: (config: Babel.Config, options: Options) =` Babel.Config | Promise`Babel.Config`

Storybook의 Babel 설정을 사용자 정의하세요.

```typescript
// 사용 중인 프레임워크로 your-framework을 교체하세요 (예: react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  async babel(config, { configType }) {
    if (configType === 'DEVELOPMENT') {
      // 여기에 개발 구성을 넣으세요
    }
    if (configType === 'PRODUCTION') {
      // 여기에 프로덕션 구성을 넣으세요
    }
    return config;
  },
};

export default config;
```



## Babel.Config

Babel이 제공하는 옵션은 @storybook/addon-webpack5-compiler-babel 애드온을 활성화한 경우에만 적용됩니다.

## 옵션

유형: { configType?: `DEVELOPMENT` | `PRODUCTION` }



테이블 태그를 Markdown 형식으로 변경해주세요.