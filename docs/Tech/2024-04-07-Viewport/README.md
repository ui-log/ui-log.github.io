---
title: "스토리북 뷰포트 Preview 설정 방법 "
description: ""
date: 2024-04-07 03:31
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "Viewport"
link: "https://storybook.js.org/docs/essentials/viewport"
---


"Viewport" 툴바 항목을 사용하여 이야기가 렌더링되는 iframe의 크기를 조정할 수 있습니다. 이를 통해 반응형 UI를 쉽게 개발할 수 있습니다.

<video autoplay playsinline loop>
  <source src="@source/docs/Tech/2024-04-07-Viewport/img/Viewport_0.mp4" type="video/mp4">
</video>

## 설정

"Viewport" 애드온은 기본적으로 사용할 수 있는 일련의 표준 뷰포트를 제공합니다. 기본 뷰포트를 변경하려면 .storybook/preview.js 파일에서 global parameters.viewport 매개변수를 설정할 수 있습니다.



```typescript
// your-framework을 사용하는 프레임워크로 바꿔주세요 (예: react, vue3)
import { Preview } from '@storybook/your-framework';

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: newViewports, // newViewports는 ViewportMap이어야 합니다. (아래 예제 참조)
      defaultViewport: 'someDefault',
    },
  },
};

export default preview;
```

viewport 전역 변수는 다음과 같은 키를 가진 객체를 받을 수 있습니다:

viewports 객체에는 다음과 같은 키가 필요합니다:

### 자세한 디바이스 설정 사용하기



뷰포트 애드온에는 구성 요소를 테스트할 때 사용할 수 있는 디바이스들이 포함되어 있습니다. 아래에는 사용 가능한 디바이스와 그들을 사용하는 예시가 나와 있습니다.

```typescript
// 사용 중인 프레임워크에 따라 your-framework을 해당 프레임워크로 대체하세요 (예: react, vue3)
import { Preview } from '@storybook/your-framework';

import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
      defaultViewport: 'iphone14promax',
    },
  },
};

export default preview;
```

### 새로운 디바이스 추가하기

특정 뷰포트나 사용해야 하는 뷰포트 목록이 있는 경우, .storybook/preview.js 파일을 수정하여 그들을 포함시킬 수 있습니다.



```typescript
const customViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};
```

다음 변경 사항을 적용하여 스토리북에서 사용하세요:

```typescript
// 프레임워크 이름으로 your-framework을 원하는 프레임워크로 변경하세요 (예: react, vue3)
import { Preview } from '@storybook/your-framework';

const preview: Preview = {
  parameters: {
    viewport: { viewports: customViewports },
  },
};

export default preview;
```

스토리북을 시작하면 새로운 뷰포트와 기기가 표시됩니다.



필요한 경우 이 두 가지를 다른 viewport 목록에 추가할 수 있어요.

예를 들어, 이 두 가지를 최소한의 viewport 목록과 함께 사용하려면 다음과 같이 할 수 있어요:

```typescript
// 사용 중인 프레임워크에 맞게 your-framework을(예: react, vue3) 대체하세요
import { Preview } from '@storybook/your-framework';

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

const customViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...customViewports,
      },
    },
  },
};

export default preview;
```

Kindle Fire 2와 Kindle Fire HD 두 개의 viewport(보기 화면)가 MINIMAL_VIEWPORTS에 병합되어 디바이스 목록에 포함됩니다.



### 컴포넌트 또는 스토리별 구성

특정 시나리오에서는 전역적으로 특정 시각적 뷰포트를 사용하는 것이 실용적이지 않을 수 있으며, 해당 뷰포트를 개별 스토리에 맞게 조정해야 할 수도 있습니다.

컴포넌트 수준이나 특정 스토리에 뷰포트를 포함하기 위해 매개변수를 통해 스토리를 업데이트하세요:

```typescript
import type { Meta, StoryObj } from '@storybook/react';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { MyComponent } from './MyComponent';

const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
  parameters: {
    //👇 Essentials 애드온의 viewports 객체
    viewport: {
      //👇 사용하고 싶은 뷰포트
      viewports: INITIAL_VIEWPORTS,
      //👇 자체 기본 뷰포트
      defaultViewport: 'iphone6',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const MyStory: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphonex',
    },
  },
};
```



### 키보드 단축키

- 이전 뷰포트: alt + shift + v
- 다음 뷰포트: alt + v
- 뷰포트 재설정: alt + control + v

필요하다면, 단축키 페이지에서 수정할 수 있어요.

## API



### 파라미터

이 애드온은 viewport 네임스페이스 아래 Storybook에 다음과 같은 파라미터를 제공합니다:

#### defaultOrientation

유형: `portrait` | `landscape`



기본적으로 `portrait`로 설정됩니다. 이는 이야기를 볼 때 사용되는 기본 방향을 지정합니다.

#### defaultViewport

타입: 문자열



이 스토리를 볼 때 사용하는 기본 뷰포트를 지정합니다. 뷰포트 오브젝트의 키와 일치해야 합니다.

#### disable

타입: boolean

이 애드온의 동작을 비활성화합니다. 스토리북 전체에서 이 애드온을 비활성화하려면 애드온-업계 표준 등록 시 이렇게 해야 합니다. 자세한 정보는 업계 표준 애드온 문서를 참조하세요.



이 매개변수는 더 구체적인 수준에서 재정의를 허용하는 데 가장 유용합니다. 예를 들어, 이 매개변수가 프로젝트 수준에서 true로 설정되어 있다면, 메타(컴포넌트) 또는 스토리 수준에서 false로 설정하여 다시 활성화할 수 있습니다.

#### 뷰포트

유형:

```js
{
  [key: string]: {
    name: string,
    styles: { height: string, width: string },
    type: 'desktop' | 'mobile' | 'tablet',
  },
};
```



사용 가능한 뷰포트를 지정하세요. 키는 뷰포트를 참조하는 데 사용되며 값은 해당 뷰포트를 정의하는 객체입니다. 위의 사용 예제를 참조하세요. 너비(width)와 높이(height) 값은 단위를 포함해야 합니다. 예: `320px`.

### 익스포트

이 애드온은 Storybook에 다음과 같은 익스포트를 제공합니다:

```js
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
```



#### 초기 뷰포트

타입: 오브젝트

위의 목록에 나열된 뷰포트 애드온에서 제공하는 기본 뷰포트 세트입니다.

#### 최소 뷰포트



종류: 객체

뷰포트 애드온에서 제공하는 최소한의 뷰포트 세트는 아래와 같이 나열됩니다: