---
title: Mac에서 셀레니움 크롬드라이버 버전 이슈 해결방법(This version of ChromeDriver only supports Chrome version)
description: This version of ChromeDriver only supports Chrome version 이슈 해결 방법에 대해 정리합니다.
date: 2022-11-24
sidebarDepth: 0
tag: Selenium
thumbnail: https://user-images.githubusercontent.com/46010705/203762036-64948650-64cf-4959-800f-920af237b537.png
---

# 셀레니움 크롬드라이버 버전 이슈 해결방법 (This version of ChromeDriver only supports Chrome version)

::: tip 목표
셀레니움을 사용하다보면 아래와 같은 에러를 자주 만나는데 해결방법에 대해 알아보자
:::

```bash
session not created: This version of ChromeDriver only supports Chrome version 105
Current browser version is 107.0.5304.87 with binary path /Applications/Google Chrome.app/Contents/MacOS/Google Chrome
```

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

<img width="855" alt="스크린샷 2022-11-01 오전 8 32 09" src="https://user-images.githubusercontent.com/46010705/199128854-e993413b-65af-4309-995c-4c6145b4ea31.png">

결론부터 말하자면 이 에러는 ChromeDriver에서 **지원하는 Chrome버전이 로컬에 설치되어있는 Chrome 버전과 차이가 생겨서 발생하는 것이다.**

**해결 방법은 로컬에 ChromeDriver를 버전에 맞게 재설치해주면 된다.**

아래 크롭드라이브 설치 링크로 방문해준다.

[https://chromedriver.chromium.org/downloads](https://chromedriver.chromium.org/downloads)

<img width="978" alt="스크린샷 2022-11-01 오전 8 34 23" src="https://user-images.githubusercontent.com/46010705/199128961-a6e923fe-9fbb-4d8b-89d2-67456a08b39b.png">

에러메세지에서 나와있는 버전의 크롬 드라이버를 선택해준다.

<img width="829" alt="image" src="https://user-images.githubusercontent.com/46010705/199129048-570e667c-ac7a-4f35-80c1-2e00a9f69ef3.png">

사용하는 환경에 맞는 파일을 다운로드해준다.
나는 M1 mac을 사용중이니 `chromedriver_mac_arm64.zip`을 다운로드 받아준다.

<img width="306" alt="image" src="https://user-images.githubusercontent.com/46010705/199129159-69e93ba3-0563-488f-bfe1-ee40f29bd2d3.png">

다운로드 받아서 열 때는 우클릭으로 열기를 눌러준다.

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

<img width="259" alt="image" src="https://user-images.githubusercontent.com/46010705/199129197-81f23ba0-442c-4f66-960c-56bd0497a14f.png">

우클릭 후 열기를 눌러주면 위와 같이 나오는데 여기서 열기를 눌러준다.

<img width="562" alt="image" src="https://user-images.githubusercontent.com/46010705/199129391-941e55b4-83ed-4b07-a3e5-450434ab9738.png">

이렇게 설치가 성공적으로 됐다는 메세지가 나오면 성공이다.
이제 설치를 마친 크롬드라이버를 환경변수 폴더로 이동시켜주어야한다.

```
cd /usr/local/bin/
```

<img width="446" alt="image" src="https://user-images.githubusercontent.com/46010705/199129295-64de6753-bc2d-4c62-82ba-f365c862122a.png">

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

기존 크롬드라이버 제거

```
sudo rm chromedriver
```

크롬드라이버 이동

```
sudo mv chromedriver /usr/local/bin
```
