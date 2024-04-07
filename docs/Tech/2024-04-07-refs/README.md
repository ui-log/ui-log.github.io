---
title: "Storybook 설정 refs 사용 방법"
description: ""
date: 2024-04-07 03:59
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "refs"
link: "https://storybook.js.org/docs/api/main-config-refs"
---


부모: main.js|ts 구성

유형:

```js
{ [key: string]:
  | { title: string; url: string; expanded?: boolean }
  | (config: { title: string; url: string; expanded?: boolean }) => { title: string; url: string; expanded?: boolean }
  | { disable: boolean }
}
```

Storybook 구성을 구성합니다.



```typescript
// 사용 중인 프레임워크로 표시 (예: react-webpack5, vue3-vite)로 교체하세요
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  refs: {
    'design-system': {
      title: 'Storybook 디자인 시스템',
      url: 'https://master--5ccbc373887ca40020446347.chromatic.com/',
      expanded: false, // 선택사항, 기본값은 true
    },
  },
};

export default config;
```

## 함수 사용

refs를 동적으로 설정하기 위해 함수를 사용할 수 있습니다:

```typescript
// 사용 중인 프레임워크로 표시 (예: react-webpack5, vue3-vite)로 교체하세요
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  // 👇 configType 인자에서 현재 환경을 가져옵니다
  refs: (config, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      return {
        react: {
          title: '개발 모드에서 실행 중인 합성된 React Storybook',
          url: 'http://localhost:7007',
        },
        angular: {
          title: '개발 모드에서 실행 중인 합성된 Angular Storybook',
          url: 'http://localhost:7008',
        },
      };
    }
    return {
      react: {
        title: '운영 중인 합성된 React Storybook',
        url: 'https://your-production-react-storybook-url',
      },
      angular: {
        title: '운영 중인 합성된 Angular Storybook',
        url: 'https://your-production-angular-storybook-url',
      },
    };
  },
};

export default config;
```



## 참조 비활성화

일부 패키지 의존성은 자동으로 Storybook을 구성합니다. 패키지 이름에 대해 disable을 true로 설정하여 이러한 동작을 비활성화할 수 있습니다:

```typescript
// 사용 중인 프레임워크로 your-framework을 대체하십시오 (예: react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  refs: {
    'package-name': { disable: true },
  },
};

export default config;
```