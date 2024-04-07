---
title: "Storybook 애드온 API 사용 방법"
description: ""
date: 2024-04-07 03:37
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "Addon API"
link: "https://storybook.js.org/docs/addons/addons-api"
---


Storybook의 API를 통해 개발자들은 Storybook과 프로그래밍적으로 상호작용할 수 있습니다. 이 API를 사용하여 개발자들은 Storybook 기능을 향상시키는 사용자 정의 애드온 및 다른 도구를 빌드하고 배포할 수 있습니다.

## 핵심 애드온 API

저희 API는 두 가지 다른 목적을 가진 두 개의 패키지를 통해 노출됩니다:

- @storybook/manager-api는 Storybook 매니저 UI와 Storybook API에 상호작용하거나 접근하는 데 사용됩니다.
- @storybook/preview-api는 애드온의 동작을 제어하고 구성하는 데 사용됩니다.



```typescript
import { addons } from '@storybook/preview-api';

import { useStorybookApi } from '@storybook/manager-api';
```

### addons.add()

add 메서드를 사용하면 애드온과 관련된 UI 컴포넌트 유형 (예: 패널, 툴바, 탭)을 등록할 수 있습니다. 최소한의 기능을 갖춘 Storybook 애드온을 만들려면 다음 인수를 제공해야 합니다:

- type: 등록할 UI 컴포넌트의 유형.
- title: 애드온 패널에 표시할 제목.
- render: 애드온 UI 컴포넌트를 렌더링하는 함수.



```typescript
import React from 'react';

import { addons, types } from '@storybook/manager-api';

import { AddonPanel } from '@storybook/components';

const ADDON_ID = 'myaddon';
const PANEL_ID = `${ADDON_ID}/panel`;

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'My Addon',
    render: ({ active }) => (
      <AddonPanel active={active}>
        <div> Storybook addon panel </div>
      </AddonPanel>
    ),
  });
});
```

### addons.register()

모든 애드온의 진입점 역할을 합니다. 애드온을 등록하고 Storybook API에 액세스할 수 있게 해줍니다. 예를 들어:

```typescript
import { addons } from '@storybook/preview-api';

// 고유한 이름으로 애드온을 등록합니다.
addons.register('my-organisation/my-addon', (api) => {});
```



이제 StorybookAPI 인스턴스를 받게 될 거에요. 그 인스턴스를 사용하는 방법에 대한 Storybook API의 API 문서를 확인해보세요.

### addons.getChannel()

매니저 및 미리보기와 통신하기 위한 채널 인스턴스를 받아요. 이 인스턴스는 애드온 등록 코드와 애드온의 래퍼 컴포넌트(스토리 안에서 사용될 때) 양쪽에서 찾을 수 있어요.

NodeJS EventEmitter와 호환되는 API를 갖고 있어요. 그래서 이를 사용하여 이벤트를 발생시키고 이벤트를 수신할 수 있어요.



```typescript
import React, { useCallback } from 'react';

import { FORCE_RE_RENDER } from '@storybook/core-events';
import { addons } from '@storybook/preview-api';
import { useGlobals } from '@storybook/manager-api';
import { IconButton } from '@storybook/components';
import { OutlineIcon } from '@storybook/icons';

const ExampleToolbar = () => {
  const [globals, updateGlobals] = useGlobals();

  const isActive = globals['my-param-key'] || false;

  // 글로벌 값을 업데이트하고 UI를 갱신할 함수입니다.
  const refreshAndUpdateGlobal = () => {
    updateGlobals({
      ['my-param-key']: !isActive,
    }),
    // UI를 새로고침하기 위해 Storybook의 애드온 API 메서드를 추가하며 FORCE_RE_RENDER 이벤트를 내보냅니다.
    addons.getChannel().emit(FORCE_RE_RENDER);
  };

  const toggleToolbarAddon = useCallback(() => refreshAndUpdateGlobal(), [isActive]);

  return (
    <IconButton
      key="Example"
      active={isActive}
      title="툴바 애드온 보기"
      onClick={toggleToolbarAddon}
    >
      <OutlineIcon />
    </IconButton>
  );
};
```

### makeDecorator

공식 애드온과 같은 스타일로 데코레이터를 만들기 위해 makeDecorator API를 사용하세요. 다음과 같이 작성할 수 있습니다:

```typescript
import { makeDecorator } from '@storybook/preview-api';

export const withAddonDecorator = makeDecorator({
  name: 'withSomething',
  parameterName: 'CustomParameter',
  skipIfNoParametersOrOptions: true,
  wrapper: (getStory, context, { parameters }) => {
    /*
    * Storybook 스토리에 전달된 매개변수를 기반으로 여기에 사용자 정의 로직을 작성하세요.
    * 권장되지는 않지만 매개변수에 따라 스토리 출력을 변경할 수도 있습니다.
    */
    return getStory(context);
  },
});
```



makeDecorator API에는 다음과 같은 인수가 필요합니다:

- name: 사용자 정의 애드온 데코레이터를 식별하는 고유한 이름입니다.
- parameterName: 애드온에서 사용할 고유한 매개변수를 설정합니다.
- skipIfNoParametersOrOptions: (옵션) 사용자가 데코레이터나 매개변수를 통해 옵션을 설정하지 않았을 경우 데코레이터를 실행하지 않습니다.
- wrapper: 데코레이터 함수입니다. getStory, context 및 위에 나온 skipIfNoParametersOrOptions에 정의된 옵션과 매개변수를 모두 가져옵니다.

## Storybook API

Storybook의 API를 통해 Storybook UI의 다양한 기능에 액세스할 수 있습니다.



### api.selectStory()

**selectStory** API 메서드를 사용하면 단일 스토리를 선택할 수 있습니다. 두 가지 매개변수를 받습니다; 스토리 종류 이름과 선택 사항인 스토리 이름입니다. 예를 들어:

```typescript
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  /* 👇 title 속성은 선택 사항입니다.
   * 자동 제목을 생성하는 방법은
   * https://storybook.js.org/docs/configure/#configure-story-loading
   * 를 참조하세요.
   */
  title: 'Button',
  component: Button,
  //👇 스토리를 위한 특정 매개변수를 생성합니다.
  parameters: {
    myAddon: {
      data: 'This data is passed to the addon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 렌더 함수는 컴포넌트의 렌더링을 제어하는 프레임워크별 기능으로,
 * 렌더 함수를 사용하는 방법은
 * https://storybook.js.org/docs/api/csf
 * 를 참조하세요.
 */
export const Basic: Story = {
  render: () => <Button>Hello</Button>,
};
```

위의 스토리를 선택하는 방법입니다:



```typescript
addons.register('my-organisation/my-addon', (api) => {
  api.selectStory('Button', 'Default');
});
```

### api.selectInCurrentKind()

`selectInCurrentKind` 메서드는 `selectStory` API 메서드와 유사하지만, 스토리를 유일한 매개변수로만 사용합니다.

```typescript
addons.register('my-organisation/my-addon', (api) => {
  api.selectInCurrentKind('Default');
});
```



### api.setQueryParams()

이 메서드를 사용하면 쿼리 문자열 매개변수를 설정할 수 있습니다. 애드온에 대한 임시 저장소로 사용할 수 있습니다. 쿼리 매개변수를 정의하는 방법은 다음과 같습니다:

```typescript
addons.register('my-organisation/my-addon', (api) => {
  api.setQueryParams({
    exampleParameter: '예시 매개변수 값을 설정합니다',
    anotherParameter: '다른 매개변수 값을 설정합니다',
  });
});
```

게다가, 쿼리 매개변수를 제거해야 할 경우, 해당 매개변수를 애드온에서 제거하는 대신 null로 설정하십시오. 예를 들어:



```typescript
addons.register('my-organisation/my-addon', (api) => {
  api.setQueryParams({
    exampleParameter: null,
  });
});
```

### api.getQueryParam()

setQueryParams API 메서드를 통해 활성화된 쿼리 매개변수를 검색할 수 있습니다. 다음은 예시입니다:

```typescript
addons.register('my-organisation/my-addon', (api) => {
  api.getQueryParam('exampleParameter');
});
```



### api.getUrlState(overrideParams)

이 메서드를 사용하면 응용 프로그램 URL 상태를 가져올 수 있으며, 오버라이드된 또는 사용자 정의 매개변수 값도 포함됩니다. 예를 들어:

```typescript
addons.register('my-organisation/my-addon', (api) => {
  const href = api.getUrlState({
    selectedKind: 'kind',
    selectedStory: 'story',
  }).url;
});
```

### api.on(eventName, fn)



이 방법은 사용자가 이야기 간을 이동할 때마다 호출되는 핸들러 함수를 등록할 수 있습니다.

```typescript
addons.register('my-organisation/my-addon', (api) => {
  // 특정 이벤트가 발생할 때 브라우저 콘솔에 이벤트 데이터를 기록합니다.
  api.on('custom-addon-event', (eventData) => console.log(eventData));
});
```

### addons.setConfig(config)

이 방법을 사용하면 기본 Storybook UI 구성(예: 테마 설정 또는 UI 요소 숨김)을 재정의할 수 있습니다.



```typescript
import { addons } from '@storybook/manager-api';

addons.setConfig({
  navSize: 300,
  bottomPanelHeight: 300,
  rightPanelWidth: 300,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  theme: undefined,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});
```

아래 표는 API값 사용 방법을 자세히 설명합니다:

사이드바 네임스페이스 아래에서 구성 가능한 옵션들은 다음과 같습니다:

툴바 네임스페이스 아래에서 구성 가능한 옵션들은 다음과 같습니다:



## 스토리북 훅

애드온 개발을 간소화하고 보일러플레이트 코드를 줄이기 위해 API는 스토리북의 내부에 액세스할 수 있는 일련의 훅을 노출합니다. 이러한 훅은 @storybook/manager-api 패키지의 확장입니다.

### useStorybookState

이것은 스토리북의 내부 상태에 액세스할 수 있도록 합니다. useGlobals 훅과 유사하게, React.memo에 의존하는 애드온을 최적화하는 것을 권장합니다. 또는 다음 훅인 useMemo, useCallback을 사용하여 렌더링 사이클의 높은 양을 방지할 수 있습니다.



```typescript
import React from 'react';

import { AddonPanel } from '@storybook/components';

import { useStorybookState } from '@storybook/manager-api';

export const Panel = () => {
  const state = useStorybookState();
  return (
    <AddonPanel {...props}>
      {state.viewMode !== 'docs' ? (
        <h2>문서와 관련된 작업을 수행하세요</h2>
      ) : (
        <h2>이야기를 볼 때 패널을 표시하세요</h2>
      )}
    </AddonPanel>
  );
};
```

### useStorybookApi

useStorybookApi 훅은 Storybook API 메소드에 완전한 액세스 권한을 제공하기 위한 편리한 도우미입니다.

```typescript
import React, { useEffect, useCallback } from 'react';

import { useStorybookApi } from '@storybook/manager-api';
import { IconButton } from '@storybook/components';
import { ChevronDownIcon } from '@storybook/icons';

export const Panel = () => {
  const api = useStorybookApi();

  const toggleMyTool = useCallback(() => {
    // 여기에서 애드온을 토글하는 사용자 정의 로직
  }, []);

  useEffect(() => {
    api.setAddonShortcut('custom-toolbar-addon', {
      label: '툴바 애드온 활성화',
      defaultShortcut: ['G'],
      actionName: '토글',
      showInMenu: false,
      action: toggleAddon,
    });
  }, [api]);

  return (
    <IconButton key="custom-toolbar" active="true" title="툴바 애드온 표시">
      <ChevronDownIcon />
    </IconButton>
  );
};
```



### useChannel

이벤트에 대한 구독을 설정하고 채널에 사용자 정의 이벤트를 발생시킬 때 사용합니다.

메시지는 iframe 및 매니저에서 모두 청취할 수 있습니다.

```typescript
import React from 'react';

import { AddonPanel, Button } from '@storybook/components';

import { STORY_CHANGED } from '@storybook/core-events';

import { useChannel } from '@storybook/manager-api';

export const Panel = () => {
  // Story_CHANGED 이벤트를 구독하는 Storybook API 채널 생성
  const emit = useChannel({
    STORY_CHANGED: (...args) => console.log(...args),
  });

  return (
    <AddonPanel key="custom-panel" active="true">
      <Button onClick={() => emit('my-event-type', { sampleData: 'example' })}>
        사용자 정의 데이터로 Storybook API 이벤트 발생
      </Button>
    </AddonPanel>
  );
};
```



### useAddonState

useAddonState은 Storybook의 UI 수명주기 또는 더 복잡한 애드온(예: 툴바, 패널 등)에 데이터 지속성이 필요한 경우 유용한 후크입니다.

```typescript
import React from 'react';

import { useAddonState } from '@storybook/manager-api';
import { AddonPanel, IconButton } from '@storybook/components';
import { LightningIcon } from '@storybook/icons';

export const Panel = () => {
  const [state, setState] = useAddonState('addon-unique-identifier', 'initial state');

  return (
    <AddonPanel key="custom-panel" active="true">
      <Button onClick={() => setState('예시')}>
        Storybook의 내부 상태를 업데이트하려면 클릭하세요.
      </Button>
    </AddonPanel>
  );
};

export const Tool = () => {
  const [state, setState] = useAddonState('addon-unique-identifier', 'initial state');

  return (
    <IconButton key="custom-toolbar" active="true" title="내 애드온 활성화" onClick={() => setState('예시')}>
      <LightningIcon />
    </IconButton>
  );
};
```

### useParameter



useParameter은 현재 스토리의 매개변수를 가져옵니다. 매개변수 값이 정의되어 있지 않으면 자동으로 두 번째로 정의된 값을 기본값으로 사용합니다.

```typescript
import React from 'react';

import { AddonPanel } from '@storybook/components';

import { useParameter } from '@storybook/manager-api';

export const Panel = () => {
  // Storybook의 API에 연결하고 현재 스토리의 사용자 정의 매개변수 값 가져오기
  const value = useParameter('custom-parameter', 'initial value');

  return (
    <AddonPanel key="custom-panel" active="true">
      {value === 'initial value' ? (
        <h2>이 스토리에는 사용자 정의 매개변수가 포함되어 있지 않습니다. 초기값으로 전환됩니다.</h2>
      ) : (
        <h2>매개변수로 {value}을(를) 설정했습니다.</h2>
      )}
    </AddonPanel>
  );
};
```

### useGlobals

Storybook 글로벌을 의존하는 애드온에 매우 유용한 후크입니다. 글로벌 값을 가져오고 업데이트할 수 있도록 합니다. 또한 React.memo에 의존하도록 애드온을 최적화하고, 다음 후크인 useMemo, useCallback을 사용하여 렌더링 주기를 최적화하여 렌더링 주기가 높아지는 것을 방지하는 것을 권장합니다.



```typescript
import React from 'react';

import { AddonPanel, Button } from '@storybook/components';

import { useGlobals } from '@storybook/manager-api';

export const Panel = () => {
  const [globals, updateGlobals] = useGlobals();

  const isActive = globals['my-param-key'] || false; // 👈 전역 값에 기반해 가시성 설정.

  return (
    <AddonPanel key="custom-panel" active={isActive}>
      <Button onClick={() => updateGlobals({ ['my-param-key']: !isActive })}>
        {isActive ? '애드온 패널 숨기기' : '패널 보이기'}
      </Button>
    </AddonPanel>
  );
};
```

### useArgs

스토리의 args를 검색하거나 업데이트할 수 있는 훅입니다.

```typescript
import { useArgs } from '@storybook/manager-api';

const [args, updateArgs, resetArgs] = useArgs();

// 하나 이상의 인자를 업데이트:
updateArgs({ key: 'value' });

// 하나 이상의 인자를 초기화:
resetArgs((argNames: ['key']));

// 모든 인자를 초기화
resetArgs();
```



자세한 내용은 Storybook 애드온 생태계에 대해 알아보세요.

- 다른 종류의 애드온을 위한 애드온 종류
- 애드온 개발의 기본을 위한 애드온 작성
- 프리셋 개발을 위한 프리셋
- 요구 사항 및 사용 가능한 레시피에 대한 통합 카탈로그
- 사용 가능한 API에 대해 알아보기 위한 API 참조