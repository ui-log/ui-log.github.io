---
title: "storybook 프로덕션 빌드 하는 방법(2024년)"
description: ""
date: 2024-04-07 03:54
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "build"
link: "https://storybook.js.org/docs/api/main-config-build"
---


부모: main.js|ts 구성

유형: TestBuildConfig

Storybook의 프로덕션 빌드 출력을 최적화하기 위한 구성 옵션을 제공합니다.

## test



종류: TestBuildFlags

```js
{
  disableBlocks?: boolean;
  disabledAddons?: string[];
  disableMDXEntries?: boolean;
  disableAutoDocs?: boolean;
  disableDocgen?: boolean;
  disableSourcemaps?: boolean;
  disableTreeShaking?: boolean;
}
```

Storybook의 프로덕션 빌드를 성능 테스트 용도로 구성하고, 빌드에서 특정 기능을 비활성화하는 설정입니다. build-storybook을 실행할 때 이 기능은 --test 플래그를 설정하여 활성화됩니다.

### test.disableBlocks



종류: 부울

빌드에서 @storybook/blocks 패키지를 제외하면 Docs 블록을 사용하여 자동 문서를 생성합니다.

```typescript
// 사용 중인 프레임워크 (예: react-webpack5, vue3-vite)로 your-framework를 대체하세요
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  build: {
    test: {
      disableBlocks: false,
    },
  },
};

export default config;
```

### test.disabledAddons



타입: 문자열 배열

빌드 출력에서 비활성화할 애드온 목록을 설정합니다.

```typescript
// 사용 중인 프레임워크로 your-framework을 대체하십시오 (예: react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  build: {
    test: {
      disabledAddons: ['@storybook/addon-a11y'],
    },
  },
};

export default config;
```

### test.disableMDXEntries



유형: 부울

이 옵션을 활성화하면 MDX 형식의 사용자 작성 문서 항목이 빌드에서 제거됩니다.

```typescript
// 사용 중인 프레임워크로 교체하세요 (예: react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  build: {
    test: {
      disableMDXEntries: false,
    },
  },
};

export default config;
```

### test.disableAutoDocs



유형: 부울

autodocs 기능으로 생성된 자동 문서가 빌드에 포함되지 않도록 방지합니다.

```typescript
// 사용 중인 프레임워크(예: react-webpack5, vue3-vite)로 your-framework을 대체하세요.
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  build: {
    test: {
      disableAutoDocs: false,
    },
  },
};

export default config;
```

### test.disableDocgen



유형: 부울

설명: 지원되는 프레임워크에 기반한 정적 분석 도구 중 하나를 사용하여 자동 argType 및 구성 속성 유추를 비활성화합니다.

```typescript
// 사용 중인 프레임워크(예: react-webpack5, vue3-vite)로 대체하세요
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  build: {
    test: {
      disableDocgen: false,
    },
  },
};

export default config;
```

### test.disableSourcemaps



테이블 태그를 Markdown 형식으로 변경하세요.

유형: boolean

빌드를 위한 소스 맵 생성의 기본 동작을 재정의합니다.

```typescript
// 사용 중인 프레임워크로 'your-framework'을(를) 해당 프레임워크로 대체하세요 (예: react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  build: {
    test: {
      disableSourcemaps: false,
    },
  },
};

export default config;
```

### test.disableTreeShaking



유형: 부울

빌드에서 트리 쉐이킹을 비활성화합니다.

```typescript
// 사용 중인 프레임워크로 your-framework를 교체하세요 (예: react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  build: {
    test: {
      disableTreeShaking: false,
    },
  },
};

export default config;
```