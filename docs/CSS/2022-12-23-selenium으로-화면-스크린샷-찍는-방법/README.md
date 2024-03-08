---
title: selenium으로 화면 스크린샷 찍는 방법
description: 셀레니움을 통해서 화면이나 특정 요소를 캡쳐하는 방법에 대해서 정리했습니다.
date: 2022-12-23 14:46
sidebarDepth: 0
tag: CSS
thumbnail: https://user-images.githubusercontent.com/77398961/209280981-1828fbac-6a83-44dd-b286-d7e5e37c8009.png
---

# selenium으로 화면 스크린샷 찍는 방법

::: tip 💡이 포스팅을 읽으면

:::

## takeScreenshot()

셀레니움으로 화면 전체 혹은 특정 요소만 캡쳐하는 것이 가능한데요.
`element.takeScreenshot()` 으로 할 수 있답니다.

저는 아래와 같이 만들어서 사용하고 있습니다.

<component is="script" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686" crossorigin="anonymous" async></component>

<!-- ui-log 수평형 -->

<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>

```js
async function capture({ driver, css, dir, fileName, position = 200 }) {
  await driver.wait(until.elementLocated(By.css(css)), 10000);
  let el = await driver.findElement(By.css(css));
  await driver.executeScript("arguments[0].scrollIntoView(true);", el);
  await driver.executeScript(`window.scrollTo(0, window.scrollY - ${position})`);
  await driver.sleep(1000);
  el.takeScreenshot().then(function (image, err) {
    require("fs").writeFile(`${dir}/${fileName}.png`, image, "base64", function (err) {
      if (err) console.log(err);
      else {
        console.log(chalk.bold.hex("#3498db")(fileName), chalk.bold.hex("#7f8c8d")("캡쳐 완료"));
      }
    });
  });
  await driver.sleep(2000);
}
```

코드를 순서대로 자세히 살펴보겠습니다.

### 1. 스크린 샷 찍을 요소가 있을 때까지 대기

```js
await driver.wait(until.elementLocated(By.css(css)), 10000);
```

### 2. 스크린 샷 찍을 요소까지 스크롤

**캡쳐를 할 때 주의할 점은 캡쳐 하는 요소에 스크롤이 이동되어있어야한다는 점인데요.**
그래서 아래 코드 부분처럼 특정 요소가 위치한 곳으로 스크롤하는 부분도 추가해두었습니다.
position은 여유롭게 더 스크롤하기 위한 값으로 추가해두었습니다.

<component is="script" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686" crossorigin="anonymous" async></component>

<!-- ui-log 수평형 -->

<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>

```js
let el = await driver.findElement(By.css(css));
await driver.executeScript("arguments[0].scrollIntoView(true);", el);
await driver.executeScript(`window.scrollTo(0, window.scrollY - ${position})`);
```

### 3. 스크린 샷 후 파일 저장

`takeScreenshot()`함수에 `.then()` 콜백함수를 넣어서 스크린 샷 찍은 파일을 로컬에 저장할 수 있습니다.
로컬에 스크린샷을 저장할 때는 fs의 writeFile 함수를 통해서 원하는 경로를 받아 저장하도록 했습니다.

```js
el.takeScreenshot().then(function (image, err) {
  require("fs").writeFile(`${dir}/${fileName}.png`, image, "base64", function (err) {
    if (err) console.log(err);
    else {
      console.log(chalk.bold.hex("#3498db")(fileName), chalk.bold.hex("#7f8c8d")("캡쳐 완료"));
    }
  });
});
```

위와 같은 캡쳐 함수를 만들어둔다면 특정 요소의 사진이 필요할 때 손쉽게 캡쳐할 수 있습니다.
