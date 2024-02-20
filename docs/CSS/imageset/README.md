---
title: image-set 속성으로 반응형 background-image 사용하기
description: image-set 속성으로 디바이스에 따라 다른 이미지를 적용하는 방법에 대해서 살펴봅니다.
date: 2022-11-07
sidebarDepth: 2
tag: CSS, HTML
thumbnail: https://user-images.githubusercontent.com/46010705/201070894-001d4165-25ad-4ca6-a30c-418803704a51.png
---

# image-set 속성으로 반응형 background-image 사용하기

::: tip 목표
`image-set` 속성을 사용해서 아래와 같이 브라우저 및 디바이스마다 다른 이미지를 적용하는 방법에 대해 알 수 있습니다.
:::
<img src="https://user-images.githubusercontent.com/46010705/199180122-3b69bb91-75b2-4b7e-9f62-ac80bde4a81b.gif" width="700">

---

## 1. srcset

`image-set` 속성에 대해서 소개해 드리기 전에 기존에 자주 사용하는 `srcset` 대해서 간략히 설명하고 넘어가도록 하겠습니다.

코드 작성을 하다 보면 아래와 같이 이미지를 사용하는 경우가 많이 있는데요.

```html
<img src="./img/large-landscape_2048x1365.jpeg" width="2048" height="1365" alt="" />
```

```css
img {
  max-width: 100%;
  height: auto;
}
```

코드를 위와 같이 작성하면 브라우저에서 아래와 같이 보입니다.

<img src="https://user-images.githubusercontent.com/46010705/199177264-f4e1c114-740c-49a1-b357-4ad8987acc16.png" width="500">

고해상도의 이미지를 사용하는 것은 큰 브라우저에서는 의미가 있지만 아래처럼 핸드폰 화면에서도 엄청나게 큰 사이즈의 이미지 파일을 보여주는 것은 낭비가 됩니다.

<img src="https://user-images.githubusercontent.com/46010705/199177660-777e3efa-a51a-48c8-b96b-de45bc07a6a2.JPG" width="500">

핸드폰 화면같이 작은 경우에서는 상대적으로 작은 이미지를 보여주더라도 문제가 없습니다.

### 사용 방법

이러한 개념으로 나오게 된 `srcset`은 아래와 같이 사용하고 있습니다.
w(너비)가 750 이하인 경우에는 작은 사진을 보여주도록 작성한 코드입니다.

```html
<img src="./img/large-landscape_2048x1365.jpeg" srcset="./img/small-landscape_799x533.jpeg 750w, ./img/large-landscape_2048x1365.jpeg 2048w" width="2048" height="1536" alt="" />
```

### 결과

잘 동작하는지는 브라우저에서 확인해 보겠습니다.

<img src="https://user-images.githubusercontent.com/46010705/199180122-3b69bb91-75b2-4b7e-9f62-ac80bde4a81b.gif" width="700">

너비에 따라서 명시한 이미지 소스대로 보이는 것을 볼 수 있습니다.

> 여기서는 확인을 위해서 small, large에 서로 비율이 다른 이미지를 사용했지만,<br> `srcset` 속성은 비율이 같고 다양한 사이즈의 크기를 갖는 이미지들을 사용하고 싶을 때 적합한 속성이고 만약 비율이 다른 이미지를 사용하고 싶다면 `@media` 미디어쿼리를 사용하는 것이 적합합니다.

추가로, 크롬 브라우저에서 테스트 시 아래 gif처럼 브라우저 사이즈 조건을 만족하는 상황에서 새로고침을 해도 `srcset`이 적용이 안되는 경우가 있는데요.

<img src="https://user-images.githubusercontent.com/46010705/199181357-b59f14e0-ec15-4b8d-be5f-6f853879acfb.gif" width="700">

이것은 크롬브라우저의 이미지 캐시에 의해서 발생하는 이슈로 개발자도구 옵션의 Network 탭에서 'Disable cache' 를 활성화해주면 정상적으로 동작하는 것을 확인하실 수 있습니다.

<img src="https://user-images.githubusercontent.com/46010705/199181626-07917403-e6e3-45cb-9bfc-4747199200e2.png" width="700">

## 2. image-set

`image-set` 속성은 `srcset` 속성과 같은 목적이고 사용법도 거의 동일합니다.<br> 다만 img태그에 사용하는지 `background-image`에 사용하는지에 따라 다를 뿐 입니다.

### 사용방법

**As-is**

```css
.box {
  background-image: url("./img/large-landscape_2048x1365.jpeg");
}
```

**To-be**

```css
.box {
  background-image: image-set(url("./img/large-landscape_2048x1365.jpeg") 1x, url("./img/small-landscape_799x533.jpeg") 2x);
}
```

크롬 브라우저에서는 `-webkit-` prefix를 붙혀야 정상 동작합니다.

```css
.box {
  background-image: -webkit-image-set(url("./img/large-landscape_2048x1365.jpeg") 1x, url("./img/small-landscape_799x533.jpeg") 2x);
  background-image: image-set(url("./img/large-landscape_2048x1365.jpeg") 1x, url("./img/small-landscape_799x533.jpeg") 2x);
}
```

### 결과

브라우저에서 테스트해보면 아래 gif처럼 PC인 경우에 large이미지가 MW인 경우에는 small 이미지가 적용되는 것을 보실 수 있습니다.

<img src="https://user-images.githubusercontent.com/46010705/199197725-c52d111e-6815-4393-bf47-b3c3619d4ac1.gif" width="700">

모바일 기기에서도 small 이미지가 정상적으로 적용됩니다.

<img src="https://user-images.githubusercontent.com/46010705/199198274-2dfba72a-ae23-434a-803d-107ebe7da8d9.JPG" width="500">

## 지원범위

<img src="https://user-images.githubusercontent.com/46010705/199199878-dc0221d9-5c04-430e-bc0d-30cce82b23c3.png" width="700">

- IE는 지원하지 않고 다른 최신 브라우저에서도 완벽히 동작하지는 않기 때문에 사용에 제약은 있을 것으로 보입니다.

- `image-set`은 `srcset`과 달리 'x' 단위만 사용 가능하고 'w', 'h' 단위는 지원 예정입니다. [MDN](https://drafts.csswg.org/css-images-4/#issue-372ac642)

## 마치며

작업할 때 보통 기획에 따라서 img를 사용할지 `background-image`를 사용할지 결정이 되는 경우가 많은데요. <br> img 요소 속성들과 `background-image`의 값들이 기능적으로 공통되는 부분이 많아지면 UI개발을 함에 있어서 작업 방식을 선택할 때 보다 수월해지지 않을까 하는 생각이 들었습니다.
