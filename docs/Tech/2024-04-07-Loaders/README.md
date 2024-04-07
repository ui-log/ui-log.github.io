---
title: "Storybook 로더 (Loaders) 사용 방법"
description: ""
date: 2024-04-07 02:58
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "Loaders"
link: "https://storybook.js.org/docs/writing-stories/loaders"
---


로더는 이야기와 데코레이터용 데이터를 로드하는 비동기 함수입니다. 이야기의 로더는 이야기가 렌더링되기 전에 실행되며, 로드된 데이터는 렌더 컨텍스트를 통해 이야기에 주입됩니다.

로더는 모든 에셋을 로드하거나, 컴포넌트를 지연로드하거나, 원격 API에서 데이터를 가져오는 데 사용할 수 있습니다. 이 기능은 대규모 이야기 가져오기를 처리하기 위한 성능 최적화로 설계되었습니다. 그러나 args는 이야기 데이터를 관리하는 권장 방법입니다. Args 주변의 도구 및 기술 생태계를 구축 중이며, 이와 로드된 데이터가 호환되지 않을 수 있습니다.

로더는 고급 기능(즉, 탈출구)으로, 다른 수단으로 충족할 수 없는 특정한 필요성이 있는 경우에만 사용을 권장합니다.

## API 데이터 가져오기



스토리는 내부 데이터로 정의된 내용이나 스토리와 함께 전달되는 args로 렌더링되는 독립된 구성 요소 예시입니다.

로더는 스토리 데이터를 외부에서로드해야 할 때 도움이 됩니다(예: 원격 API에서). 할 일 목록에 표시할 할 일 항목을 가져오는 다음 예시를 고려해보세요:

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import fetch from 'node-fetch';
import { TodoItem } from './TodoItem';

const meta: Meta<typeof TodoItem> = {
  component: TodoItem,
  render: (args, { loaded: { todo } }) => <TodoItem {...args} {...todo} />,
};

export default meta;
type Story = StoryObj<typeof TodoItem>;

export const Primary: Story = {
  loaders: [
    async () => ({
      todo: await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json(),
    }),
  ],
};
```

원격 API 호출로부터 얻은 응답은 스토리 컨텍스트의 로드된 필드로 결합되며, 이는 스토리 함수의 두 번째 인수입니다. 예를 들어, React에서는 스토리 args가 우선되게 되도록 먼저 전개되었습니다. 다른 프레임워크(예: Angular)에서는 보통 하는 대로 스토리를 작성할 수 있습니다.



## 글로벌 로더

.storybook/preview.js 파일의 loaders 내보내기를 통해 모든 스토리에 로더를 설정할 수도 있어요 (이 파일은 모든 스토리를 구성하는 파일이에요):

```typescript
// 사용 중인 프레임워크 (예: react, vue3)로 your-framework를 교체해주세요
import { Preview } from '@storybook/your-framework';

const preview: Preview = {
  loaders: [
    async () => ({
      currentUser: await (await fetch('https://jsonplaceholder.typicode.com/users/1')).json(),
    }),
  ],
};

export default preview;
```

이 예에서, "현재 사용자"를 모든 스토리에서 loaded.currentUser로 불러올 수 있어요.



## 로더 상속

파라미터와 마찬가지로, 로더는 전역으로 정의할 수 있고, 컴포넌트 레벨 또는 개별 스토리에 대해 정의할 수 있습니다 (우리가 본 것처럼).

스토리북의 캔버스에 스토리가 렌더링되기 전에 모든 레벨에 정의된 모든 로더가 실행됩니다.

- 모든 로더는 병렬로 실행됨
- 모든 결과는 스토리 컨텍스트의 로드된 필드입니다
- 중복되는 키가 있다면 "나중에" 로더가 우선권을 갖습니다 (낮은 우선순위에서 높은 우선순위로):
전역 로더는 정의된 순서대로
컴포넌트 로더는 정의된 순서대로
스토리 로더는 정의된 순서대로
- 전역 로더는 정의된 순서대로
- 컴포넌트 로더는 정의된 순서대로
- 스토리 로더는 정의된 순서대로