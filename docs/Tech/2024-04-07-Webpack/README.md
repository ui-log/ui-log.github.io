---
title: "스토리북 웹팩 설정 방법"
description: ""
date: 2024-04-07 03:50
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "Webpack"
link: "https://storybook.js.org/docs/builders/webpack"
---


Storybook Webpack builder는 Storybook의 기본 빌더입니다. 이 빌더를 사용하면 컴포넌트의 개발 및 테스트 경험을 원할하게 만들어줍니다. 또한 UI 컴포넌트를 격리된 환경에서 개발할 수 있어 기존 Webpack 구성과 함께 Storybook을 사용하여 효율적으로 개발할 수 있습니다.

## 설정

기본적으로 Storybook은 Webpack에 대한 Zero-config 지원을 제공하며 가장 일반적인 사용 사례와 작업할 수 있도록 만든 기본 구성이 자동으로 설정됩니다. 그러나 Storybook 구성 파일(예: .storybook/main.js|ts)을 확장하고 성능을 향상시키거나 필요에 맞게 사용자 정의할 수 있는 추가 옵션을 제공할 수 있습니다. 아래에 사용 가능한 옵션과 사용 방법 예시가 나와 있습니다.

```typescript
// 사용 중인 프레임워크를 입력하세요 (예: react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
};

export default config;
```



### 기본 구성 재정의하기

Storybook의 Webpack 구성은 Webpack 5를 기반으로 하며, 프로젝트의 요구에 맞게 확장할 수 있도록 설계되어 있습니다. 로더나 플러그인을 추가해야 할 경우, .storybook/main.js 또는 .storybook/main.ts 파일에서 webpackFinal 구성 요소를 제공할 수 있습니다. 이 구성 요소는 첫 번째 인수로 기본 구성을 받고 두 번째 인수로 Storybook 옵션 객체를 받는 함수를 내보내어야 합니다. 예를 들면:

```typescript
// 'your-framework' 부분을 사용 중인 프레임워크로 대체하세요 (예: react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  webpackFinal: async (config, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      // 개발용 구성 수정
    }
    if (configType === 'PRODUCTION') {
      // 프로덕션용 구성 수정
    }
    return config;
  },
};

export default config;
```

Storybook이 시작할 때, 자체 구성에 자동으로 병합됩니다. 그러나 webpackFinal 구성 요소를 제공할 때는 구성을 직접 병합해야 합니다. 구성 객체의 변경 사항을 책임 있게 처리하여 entry 및 output 속성을 유지하도록 권장합니다.



#### 웹팩 플러그인 사용하기

Storybook 구성을 사용자 정의하는 또 다른 방법은 코드 최적화, 자산 관리 또는 기타 작업에 도움을 주는 사용자 정의 플러그인이나 로더를 추가하는 것입니다. 그러나, Storybook은 미리보기 페이지를 생성하기 위해 HtmlWebpackPlugin을 사용하기 때문에 변경 사항을 config.plugins 배열에 추가하는 것이 아니라 덮어쓰지 않고 변경하는 것을 권장합니다. 예를 들어:

 ```typescript
// 사용 중인 framework(예: react-webpack5, vue3-vite)로 your-framework를 대체합니다
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
   webpackFinal: async (config) => {
    config.plugins.push(...);
    return config;
  },
};

export default config;
 ```

또한, 특정 파일 확장자를 명시적으로 포함하지 않는 Webpack 로더와 작업할 때(즉, test 속성을 통해), 해당 로더에 대한 .ejs 파일 확장자를 제외해야 합니다.



### 사용자 정의 Webpack 구성 파일 가져오기

이미 있는 Webpack 구성 파일을 Storybook과 재사용해야 할 경우, 해당 파일을 가져와 기본 구성과 병합할 수 있습니다. 예를 들어:

```typescript
// your-framework을 사용 중인 프레임워크로 바꿔주세요 (예: react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

import custom from '../webpack.config.js'; // 👈 가져오는 사용자 정의 Webpack 구성

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  webpackFinal: async (config) => {
    return {
      ...config,
      module: { ...config.module, rules: [...config.module.rules, ...custom.module.rules] },
    };
  },
};

export default config;
```

### Webpack 구성 디버그



만약 Storybook에서 사용하는 Webpack 구성을 디버그하려면 Storybook CLI를 사용할 수 있어요. 개발 모드에서 실행 중이라면 다음 명령어를 사용할 수 있어요:

```npm
npm run storybook -- --debug-webpack
```

게다가, Storybook의 정적 빌드를 생성하고 싶다면 다음 명령어를 사용할 수 있어요:

```npm
npm run build-storybook -- --debug-webpack
```



## 컴파일러 지원

Storybook은 컴파일러에 중립적인 방식으로 번들링을 수행합니다. 이는 당신이 자신만의 응용프로그램 번들러(Babel, SWC 등)를 가져와서 Webpack 5 기반 프로젝트의 방대한 생태계 내에서 호환성을 확보할 수 있도록 해줍니다.

### SWC

만약 SWC를 사용하여 프로젝트를 빌드했다면, @storybook/addon-webpack5-compiler-swc 애드온을 사용하세요. 이 애드온은 Webpack 5 프로젝트와의 생태계 호환성을 높이면서 높은 성능을 유지합니다. 다음 명령을 실행하여 애드온을 자동으로 설치하세요:



```npm
npx storybook@latest add @storybook/addon-webpack5-compiler-swc
```

이 애드온을 활성화하면 Webpack 구성이 swc-loader를 JavaScript 및 TypeScript 파일에 사용하도록 조정됩니다. 또한 프로젝트의 SWC 구성을 감지하고 사용할 것입니다.

### Babel

만약 TypeScript나 다른 최신 JavaScript 기능을 포함하여 특정 기능을 지원하기 위해 Babel의 도구를 활용하는 프로젝트를 다루고 있다면, @storybook/addon-webpack5-compiler-babel 애드온을 사용하여 Storybook에 이를 포함시켜 프로젝트와의 호환성을 보장할 수 있습니다. 다음 명령어를 실행하여 애드온을 자동으로 설정합니다:```



```npm
npx storybook@latest add @storybook/addon-webpack5-compiler-babel
```

이 추가 기능을 활성화하면 Webpack 구성을 조정하여 JavaScript와 TypeScript 파일에 대한 기본로더로 babel-loader를 사용합니다. 게다가 프로젝트의 Babel 구성을 감지하고 사용합니다.

## 문제 해결

### Storybook에서 TypeScript 모듈이 해결되지 않음



Storybook의 기본 Webpack 구성은 추가 구성 없이 대부분의 프로젝트 설정을 지원합니다. 그러나 프로젝트 구성이나 선택한 프레임워크에 따라, tsconfig 파일에서 alias를 사용하여 Storybook 내에서 TypeScript 모듈이 해결되지 않는 문제가 발생할 수 있습니다. 이 문제를 해결하려면 아래와 같이 Storybook의 Webpack 구성을 확장하면서 tsconfig-paths-webpack-plugin을 사용할 수 있습니다.

```typescript
// 사용 중인 프레임워크에 맞게 'your-framework'을 해당 프레임워크로 교체하세요 (예: react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        }),
      ];
    }
    return config;
  },
};

export default config;
```

그렇지만, 기본 alias 구성을 제공하는 프레임워크를 사용 중이고 Storybook에 동일한 alias를 사용하려는 경우 추가 패키지를 설치할 필요가 없을 수 있습니다. 대신, Storybook의 기본 구성을 확장하여 프레임워크에서 제공하는 동일한 alias를 사용할 수 있습니다. 예를 들어, @ import 경로에 대한 alias를 설정하려면 다음을 .storybook/main.js|ts 파일에 추가할 수 있습니다:

```typescript
import path from 'path';
// 사용 중인 프레임워크에 맞게 'your-framework'을 해당 프레임워크로 교체하세요 (예: react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
      };
    }
    return config;
  },
};

export default config;
```



### Storybook UI에서 미리 번들된 에셋이 표시되지 않습니다

Storybook은 내부 매니저를 빌드하기 위해 esbuild를 사용하기 때문에 managerWebpack으로 에셋을 번들링하는 것은 더 이상 Storybook UI에 영향을 미치지 않습니다. 기존의 managerWebpack 구성 요소를 Storybook 구성 파일에서 제거하고 이미지나 CSS 외의 에셋을 사전에 JavaScript로 번들링하는 것을 권장합니다.

### Storybook이 Webpack 4와 함께 작동하지 않습니다

Webpack 4 지원이 중단되었으며 더 이상 유지되지 않습니다. Storybook을 업그레이드하는 경우 자동으로 Webpack 5를 사용하고 구성을 이주하려고 시도할 것입니다. 그러나 사용자 정의 Webpack 구성과 작업 중인 경우, 해당 구성을 Webpack 5와 호환되도록 업데이트해야 할 수 있습니다. 최신 버전의 Storybook에서 프로젝트가 원활하게 실행되도록 하려면 마이그레이션 프로세스가 필요합니다. Webpack 웹사이트에 제공된 지침에 따라 구성을 업데이트할 수 있습니다.



노트: 더 많은 정보를 알아보세요!

- Vite 빌더: Vite와 번들링을 위한 빌더
- Webpack 빌더: Webpack과 번들링을 위한 빌더
- 빌더 API: Storybook 빌더를 구축하기 위한 API