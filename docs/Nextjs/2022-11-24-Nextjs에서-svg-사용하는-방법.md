---
title: Nextjs에서 svg파일 사용하는 방법 (2022년 11월 최신)
description: Nextjs에서 svg파일을 사용하는 방법에 대해서 정리합니다.
date: 2022-11-24
sidebarDepth: 2
tag: Nextjs
thumbnail: https://user-images.githubusercontent.com/46010705/203769162-be91286a-4301-4687-87b3-f37f8792180a.png
---

# Nextjs에서 svg 사용하는 방법

::: tip 목표
create-react-app에서는 기본적으로 svg를 사용할 수 있도록 내장되어있지만
Nextjs에서는 따로 설정을 해주어야하는데요. 그 내용에 대해서 알아봅니다.
:::

CRA에서는 아래와 같이 코드를 작성하면 svg파일을 불러올 수 있는데요.

```tsx
import {ReactComponent as Svg} from './button.svg';
{...중략}

const Component = () => {
	return <Svg />
}
```

아쉽게도 Nextjs에서는 따로 설정을 해주어야합니다.

## 설정방법

nextjs에서 svg를 사용하기 위해서는 `@svgr/webpack` 모듈을 설치해주어야합니다.

```
npm i -D @svgr/webpack
yarn add -D @svgr/webpack
```

설치를 마쳤다면 next.config.js 파일을 수정해주어야합니다.

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    // 아래를 추가합니다.
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
```

위와 같이 설정을 마치면 아래처럼 Nextjs에서도 svg를 사용할 수 있습니다.

```tsx
import {ReactComponent as Svg} from './button.svg';
{...중략}

const Component = () => {
	return <Svg />
}
```
