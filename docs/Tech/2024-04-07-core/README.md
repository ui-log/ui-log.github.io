---
title: "storybook 중요 셋팅 방법"
description: ""
date: 2024-04-07 03:54
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "core"
link: "https://storybook.js.org/docs/api/main-config-core"
---


부모: main.js|ts 구성

유형:

```js
{
  builder?: string | { name: string; options?: BuilderOptions };
  channelOptions?: ChannelOptions;
  crossOriginIsolated?: boolean;
  disableProjectJson?: boolean;
  disableTelemetry?: boolean;
  disableWebpackDefaults?: boolean;
  disableWhatsNewNotifications?: boolean;
  enableCrashReports?: boolean;
  renderer?: RendererName;
}
```

Storybook의 내부 기능을 구성합니다.



## 빌더

유형:

```js
| '@storybook/builder-vite' | '@storybook/builder-webpack5'
| {
    name: '@storybook/builder-vite' | '@storybook/builder-webpack5';
    options?: BuilderOptions;
  }
```

Storybook의 빌더를 구성합니다. Vite 또는 Webpack을 사용할 수 있습니다.



```typescript
// 사용중인 프레임워크로 변경(예: react-webpack5, vue3-vite)으로 대체
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  core: {
    builder: {
      name: '@storybook/builder-vite',
      options: {
        viteConfigPath: '../../../vite.config.js',
      },
    },
  },
};

export default config;
```

## channelOptions

Type: ChannelOptions

```js
{
  allowClass: boolean;
  allowDate: boolean;
  allowFunction: boolean;
  allowRegExp: boolean;
  allowSymbol: boolean;
  allowUndefined: boolean;
  lazyEval: boolean;
  maxDepth: number;
  space: number | undefined;
}
```



Storybook에서 매니저와 미리보기 간에 통신하는 데 사용하는 채널을 구성합니다.

일반적으로 두 가지 속성만 사용될 가능성이 높습니다:

### channelOptions.allowFunction

유형: 부울 (boolean)



디폴트: false

채널 간에 함수 직렬화를 활성화합니다. 이는 보안 위험이 될 수 있습니다.

### channelOptions.maxDepth

타입: 숫자



기본값: 3

채널을 통해 직렬화할 수 있는 중첩 객체의 최대 깊이입니다. 값이 클수록 속도가 느려집니다.

## crossOriginIsolated

유형: 부울값



"안전한 컨텍스트"에서 문서를 실행하려면 CORS 헤더를 활성화하세요. SharedArrayBuffer 보안 요구 사항을 참조해주세요.

이렇게 개발 모드에서 헤더를 활성화할 수 있습니다:

- Cross-Origin-Opener-Policy: same-origin
- Cross-Origin-Embedder-Policy: require-corp

```typescript
// 사용 중인 프레임워크로 Framework를 대체하세요 (예: react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  core: {
    crossOriginIsolated: true,
  },
};

export default config;
```



## disableProjectJson

유형: 부울(boolean)

project.json 파일을 생성하는 작업을 비활성화합니다. 이 파일에는 Storybook 메타데이터가 포함됩니다.

```typescript
// 사용 중인 프레임워크를 나타내는 "your-framework" 부분을 해당 프레임워크로 대체하세요 (예: react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  core: {
    disableProjectJson: true,
  },
};

export default config;
```



## disableTelemetry

유형: boolean

Storybook의 텔레메트리 수집을 비활성화합니다.

```typescript
// 사용 중인 프레임워크와 함께 (예: react-webpack5, vue3-vite) 다음과 같이 교체하십시오
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  core: {
    disableTelemetry: true,
  },
};

export default config;
```



## disableWebpackDefaults

유형: boolean

Storybook의 기본 Webpack 구성을 비활성화합니다.

```typescript
// 사용 중인 프레임워크로 대체하세요 (예: react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  core: {
    disableWebpackDefaults: true,
  },
};

export default config;
```



## disableWhatsNewNotifications

유형: 부울형

새로운 Storybook 버전 및 생태계 업데이트(애드온, 콘텐츠 등)에 대한 UI의 "새로운 기능" 알림을 비활성화합니다.

```typescript
// 사용 중인 프레임워크(예: react-webpack5, vue3-vite)로 프레임워크를 바꿔주세요
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  core: {
    disableWhatsNewNotifications: true,
  },
};

export default config;
```



## enableCrashReports

유형: 부울(boolean)

Storybook 텔레메트리로 보내는 충돌 보고서를 활성화합니다.

```typescript
// 사용 중인 프레임워크로 your-framework을 대체하십시오 (예: react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  core: {
    enableCrashReports: true, // 👈 충돌 보고서를 텔레메트리 이벤트에 추가합니다
  },
};

export default config;
```



## 렌더러

유형: 렌더러 이름