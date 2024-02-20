---
title: 이메일 템플릿 마크업에 사용해도 되는 CSS 속성인지 확인하는 방법
description: 까다로운 이메일 템플릿 마크업에 사용해도 되는 속성인지 확인할 수 있는 사이트를 소개합니다.
date: 2022-12-22 18:27
sidebarDepth: 2
tag: CSS
thumbnail: https://user-images.githubusercontent.com/77398961/209105266-75512c62-cda3-43db-a0d1-17f8f44b6ed7.png
---

# 이메일 템플릿 마크업에 사용해도 되는 CSS 속성인지 확인하는 방법

::: tip 💡이 포스팅을 읽으면
이메일 템플릿 마크업에 사용해도 되는 css 속성인지 체크할 수 있습니다.
:::

## 1. 이메일 템플릿 css 속성 확인 사이트

[caniemail](https://www.caniemail.com/)이라는 사이트를 통해서 이메일 마크업시 사용해도 되는 css를 확인할 수 있습니다.

<img src="./img/1.png" width="500" />

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

caniuse 사이트와 유사한데요. caniuse가 브라우저 지원 범위를 확인하는 사이트라면
caniemail은 이메일에 사용 가능한 css속성을 확인할 수 있습니다.

그럼 몇가지 헷갈리는 속성들을 직접 확인해보며 사용방법을 알려드리겠습니다.

### absolute 가능 여부

이메일에서는 absolute속성을 써야될 일이 있지는 않겠지만 혹시 써야할 수 도 있으니
지원 범위를 한번 살펴보겠습니다.

<img src="./img/2.png" width="500" />

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

위 사진을 보시면 특정 환경에 따라서 absolute를 지원하지 않는 경우가 있는데요.
대부분의 이메일 폼에서 지원하는 메일 템플릿을 만들려고 한다면 사용해서는 안되는 속성입니다.

그리고 absolute의 경우 낚시형 이메일을 만들어 클릭 실수를 유발하게끔하는 방식으로 사용되기 때문에
대부분의 메일 플랫폼에서 absolute를 사용하면 스타일을 다 제거해버리고 있습니다.

### background 가능 여부

요즘 사용되는 이메일 템플릿의 경우 텍스트만 사용되는 것이 아니라 배경 이미지도 사용되기 때문에
background 속성은 많이 필요로 할 것 같은데요.

<img src="./img/3.png" width="500" />

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

background 속성은 대부분의 메일에서 지원하고 있지만 주의할 점이 있네요.
background는 주로 축약형을 많이 사용하곤 하는데 이메일 템플릿 작성시에는
축약형을 사용하지 않고 background-image, background-position, background-size와 같이 각각 따로 지정해주어야합니다.

이메일 템플릿을 사용할 때는 외에도 많은 속성들을 사용하게 될 텐데요.

이메일 템플릿의 경우 css를 인라인으로 작성하다보니 작업이 완료된 후에 수정하는 것 또한 큰 공수가 들어가게 됩니다.
그렇기 때문에 작업 전에 사용할 속성에 대해서 caniemail에서 확인한 후에 진행하는 것이 좋을 것이라 생각됩니다.
