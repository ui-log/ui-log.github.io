---
title: "스토리북 프리뷰에서 실행될 주석(annotation) 작성하는 방법"
description: ""
date: 2024-04-07 03:58
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "previewAnnotations"
link: "https://storybook.js.org/docs/api/main-config-preview-annotations"
---


부모: main.js|ts 설정

유형: string[] | ((config: string[], options: Options) => string[] | Promise<string[]>)

스토리 미리보기에서 실행할 추가 스크립트를 추가합니다.

```js
import type { StorybookConfig } from './types';

export const previewAnnotations: StorybookConfig['previewAnnotations'] = (entry = []) => [
  ...entry,
  require.resolve('@storybook/nextjs/preview.js'),
];
```