---
title: Nextjs Static HTML 사이트 배포하는 방법
description: Nextjs Static HTML site를 deploy하는 방법에 대해서 소개합니다.
date: 2022-11-25
sidebarDepth: 2
tag: Nextjs
thumbnail:
---

# Nextjs Static HTML 사이트 배포하는 방법

::: tip 목표
웹사이트를 만들다보면 DB를 사용하지 않는 정적 웹 사이트를 만드는 경우가 있는데요.
Nextjs를 활용해 정적 웹사이트 배포하는 방법에 대해서 소개합니다.
:::

### scripts 변경

Nextjs 저장소의 package.json에 있는 build 명령어를 아래와 같이 바꿔줍니다.

```js
"scripts": {
  "build": "next build && next export"
}
```
