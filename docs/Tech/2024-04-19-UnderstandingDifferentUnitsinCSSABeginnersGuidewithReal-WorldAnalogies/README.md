---
title: "CSS에서 다양한 단위 사용하는 방법"
description: ""
date: 2024-04-19 22:47
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "Understanding Different Units in CSS: A Beginner’s Guide with Real-World Analogies"
link: "https://medium.com/@wasiuwazzy/understanding-different-units-in-css-a-practical-guide-with-examples-bd816ec21836"
---


![Understanding Different Units in CSS: A Beginner's Guide with Real-World Analogies](./img/UnderstandingDifferentUnitsinCSSABeginnersGuidewithReal-WorldAnalogies_0.png)

- 소개
- 절대 단위: 웹의 인치 자
  - 1. 픽셀 (px): 건축 모듈
  - 2. 인치 (in), 센티미터 (cm), 밀리미터 (mm):
- 상대 단위: 유연한 측정 테이프
  - 1. Em (em):
  - 2. Rem (rem):
  - 3. 백분율 (%): 반응형 레시피
- 뷰포트 단위: 마법의 측정 지팡이
  - 1. 뷰포트 너비 (vw):
  - 2. 뷰포트 높이 (vh):
- 적절한 단위 선택: 도구 상자 유사성
- 결론

# 소개

아름다운 웹사이트를 만드는 웹 디자이너로 상상해보세요. 하지만 모든 것이 완벽하게 맞고, 요소가 적절하게 정렬되고, 레이아웃이 모든 기기에서 잘 보이도록 하는 방법은 무엇일까요? 이것이 케스케이딩 스타일 시트(CSS)의 단위가 중요한 역할을 하는 곳이며, 처음 보는 눈에는 혼란스러운 글자들(px, rem, em, %)로 보일 수 있습니다.

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

웹페이지에서 요소를 디자인하고 스타일을 적용할 때 CSS의 단위를 이해하는 것이 중요합니다. 이러한 단위는 너비, 높이, 여백, 안쪽 여백, 글꼴 크기 등의 속성에 대한 측정을 정의하는 데 사용됩니다. 하지만 걱정하지 마세요! 이 기사에서는 간단한 비유를 사용하여 이러한 단위를 설명하고, 금방이라도 당신을 단위 마스터로 만들어 드립니다.

# 절대 단위

이러한 단위를 신뢰할 수 있는 자와 같다고 생각해보세요. 이들은 인치와 같이 고정된 측정으로 크기를 정의합니다. 절대 단위에는 다음이 포함됩니다:

## 1. 픽셀 (px)

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

픽셀(px)은 CSS에서 가장 기본적인 측정 단위입니다. 화면의 개별 점을 나타내며, 요소의 크기와 위치를 정의하는 작은 건물 블록처럼 작동합니다. 웹사이트를 거대한 레고 세트로 상상해보세요. 각 픽셀은 레고 블록 하나씩입니다. 픽셀은 정확한 제어를 제공하지만, 서로 다른 화면 해상도를 가진 기기 사이에 불일치가 발생할 수 있습니다.

코드 예시:

```js
.box {
  width: 200px; /* 상자의 너비를 200픽셀로 설정 */
  height: 150px; /* 상자의 높이를 150픽셀로 설정 */
}
```

위 코드 예시에서 .box 클래스는 화면 크기와 상관없이 항상 가로로 200개의 레고 블록(200px)을 차지하고 세로로 150개의 블록(150px)을 차지합니다. 예를 들어 요소의 너비를 200px로, 높이를 150px로 설정하면 어떤 화면에서도 200픽셀 너비로, 150픽셀 높이로 나타납니다. 하지만 요소의 실제 크기는 화면 해상도에 따라 다르게 보일 수 있습니다. 마치 고무줄 자에 비유하면, 화면 해상도에 따라 크기가 늘어나거나 줄어들 수 있습니다.

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

## 2. Inches (in), Centimeters (cm), Millimeters (mm):

인치 (in), 센티미터 (cm), 밀리미터 (mm)는 CSS에서 실제 측정을 나타내는 길이 단위입니다. 이러한 단위는 현실 세계의 측정과 비슷합니다. 출력용으로 정확한 크기를 필요로 하는 디자인을 만들거나 현실 세계 단위로 크기를 지정해야 할 때 유용합니다. 예를 들어, 테두리를 1cm 두껍게 설정하면 종이 위에 1센티미터 길이의 선을 그리는 것과 같습니다.

코드 예시:

```js
.box {
  width: 2in; /* 상자의 너비를 2인치로 설정 */
  height: 5cm; /* 상자의 높이를 5센티미터로 설정 */
  border: 3mm solid blue; /* 상자 주위에 3밀리미터 두꺼운 파란색 테두리 설정 */
}
```

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

위의 코드 예시에서 .box 클래스는 요소의 너비를 2인치(in)로 설정하고 높이를 5센티미터(cm)로 설정합니다. 이는 상자가 2인치 너비와 5센티미터 높이가 됨을 의미합니다.

인치(in), 센티미터(cm), 밀리미터(mm)는 물리적 측정에 익숙할 수 있지만, 화면 렌더링 및 반응성에 제한이 있기 때문에 CSS에서 요소 크기를 정의하는 데 적합하지 않습니다. 픽셀, 백분율, ems/rems를 사용하여 더 나은 웹 개발 방법을 고려해보세요.

# 상대 단위:

자를 가늠자와는 다르게 이러한 단위들은 주변 환경에 따라 자동으로 조정되어 반응형 디자인에 적응하기 좋습니다. 측정하는 대상에 따라 자동으로 조정되는 유연한 측정 테이프를 상상해보세요.

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

## 1. Em (em):

EMs (em의 약자)은 요소의 크기를 부모 요소의 글꼴 크기에 상대적으로 정의하는 CSS 단위입니다. 이를 통해 웹 사이트의 계층 구조 내 요소들 간 비례적인 관계를 만들 수 있습니다. 서로 다른 크기의 중복 인형을 상상해보세요. 부모 요소의 글꼴 크기는 가장 큰 인형의 크기처럼 작용합니다.

EMs를 사용하면 자식 요소의 크기를 부모에 상대적으로 정의할 수 있습니다. 예를 들어, font-size: 2em;로 설정된 자식 요소는 부모의 크기의 두 배가 됩니다. font-size: 0.5em;로 설정된 다른 자식 요소는 부모의 크기의 절반이 됩니다.

코드 예시:

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
/* body에 대한 기본 글꼴 크기 설정 */
body {
  font-size: 16px;
}

/* 더 큰 글꼴 크기를 가진 부모 요소 정의 */
.parent {
  font-size: 20px;
}

/* 부모 요소에 상대적으로 EM으로 자식 요소 정의 */
.child-1 {
  font-size: 1.5em; /* 부모의 크기(30px)의 1.5배 */
}

.child-2 {
  font-size: 0.75em; /* 부모의 크기(15px)의 0.75배 */
}
```

위 코드 예제에서 문서 본문의 기본 글꼴 크기는 16px(16 픽셀)로 설정되어 있습니다. .parent 요소는 큰 글꼴 크기인 20px(20 픽셀)로 정의되어 있습니다. .child-1 요소는 글꼴 크기로 1.5em을 사용하며, 이는 부모 요소의 크기(20px)의 1.5배인 30px를 의미합니다. .child-2 요소는 0.75em을 사용하여, 글꼴 크기가 0.75em * 20px = 15px(부모의 크기의 0.75배)가 됩니다.

## 2. Rem (rem):

Rem(루트 rem의 준말)은 루트 요소의 글꼴 크기를 나타내는 CSS 단위입니다. em과 유사하지만 루트 요소(보통 HTML 태그)의 글꼴 크기를 기준으로 하므로 웹사이트 전체에서 일관된 크기를 유지합니다. REM은 이 기본 크기를 기준으로 다른 요소 크기(제목 크기 등)를 정의할 수 있게 합니다.

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

코드 예제:

```js
/* 기본 글꼴 크기 설정 */
html {
  font-size: 16px;
}

/* REM 단위를 사용하여 제목 크기 정의 */
h1 {
  font-size: 2rem; /* 기본 글꼴 크기의 두 배 */
}

/* REM 단위를 사용하여 단락 크기 정의 */
p {
  font-size: 1rem; /* 기본 글꼴 크기와 동일 */
}
```

위의 코드 예제에서는 웹 사이트 전체의 기본 글꼴 크기를 16px로 설정합니다. html {font-size: 16px; }를 사용합니다. h1 제목은 font-size: 2rem;를 설정하여 기본 글꼴 크기의 두 배로 정의됩니다. 즉, 기본 글꼴 크기가 16px이면 h1 제목은 2 * 16px = 32px가 됩니다. p 단락 텍스트는 font-size: 1rem;를 설정하여 기본 글꼴 크기를 유지합니다. 이는 본문 텍스트를 전체 글꼴 크기와 일관되게 유지합니다.

## 3. 백분율 (%):

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

퍼센트 (%)는 CSS에서 상대적인 크기를 정의하여 웹사이트 디자인에서 유연성과 반응성을 제공하는 강력한 단위입니다. 케이크를 자르는 것을 상상해보세요. 20% 조각은 언제나 전체 케이크의 20%이며, 케이크의 크기에 관계없이 동일합니다.

퍼센트는 마진, 패딩 및 전체 레이아웃과 비례적으로 조정되어야 하는 다른 요소를 정의하는 데 훌륭합니다. 마치 측량테이프를 사용하여 케이크에 퍼센트를 표시하는 것과 같아서 모두가 공평하게 분배받을 수 있습니다.

코드 예시:

```js
.container {
  width: 80%; /* 컨테이너의 너비를 뷰포트 너비의 80%로 설정 */
  margin: 0 auto; /* 컨테이너를 가로로 가운데 정렬 */
}

.box {
  width: 20%; /* 상자의 너비를 컨테이너 너비의 20%로 설정 */
  float: left; /* 상자를 왼쪽으로 위치시킴 */
}
```

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

위의 코드 예제에서 .container 클래스는 퍼센트 단위를 사용하여 뷰포트 너비의 80%를 차지하는 콘텐츠 영역을 정의합니다. 이는 컨테이너 내의 퍼센트 단위를 사용하여 사용 가능한 너비의 80%를 차지하도록 설정합니다. .box 클래스는 사용 가능한 공간의 20%를 차지하고 왼쪽으로 플로트됩니다.

요소 크기를 백분율로 지정하면 부모 컨테이너나 뷰포트의 크기에 비례하여 요소의 크기가 조정되므로 다양한 기기와 화면 크기에서 잘 작동하는 디자인을 만드는 데 용이합니다.

# 뷰포트 단위:

이러한 단위들은 마법의 지팡이처럼 작용하여 사용자 화면(뷰포트)의 크기에 맞춰 조절됩니다. 자동으로 크기를 조절하는 측정테이프가 뷰포트 차지하는 창의 크기에 따라 스케일을 조정하는 것을 상상해보세요.

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

## 1. 뷰포트 너비 (vw):

뷰포트 너비(vw)는 CSS에서 요소의 크기를 사용자의 뷰포트 너비에 상대적으로 정의하는 단위입니다. 웹사이트 레이아웃을 영화 스크린처럼 생각해보세요. 뷰포트 너비는 마치 영화 스크린의 실제 너비처럼 작동합니다. 뷰포트 단위를 사용하면 웹사이트의 요소들이 사용자의 화면 크기에 따라 크기를 조정할 수 있어서, 마치 영화가 다양한 화면 크기에 맞게 조정되면서도 가로세로 비율을 유지하는 것처럼 작동합니다.

코드 예시:

```js
.box {
  width: 50vw; /* 상자의 너비를 뷰포트 너비의 50%로 설정 */
  background-image: url("background.jpg");
  background-size: cover;
}
```

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

위의 코드 예제에서 .box 클래스의 너비가 50vw로 설정되어 있습니다. 이는 뷰포트의 너비의 50%에 해당합니다. 이는 사용자의 화면 크기와 관계없이 상자가 뷰포트의 절반만큼 넓을 것을 의미합니다. 배경 이미지는 cover 속성을 사용하여 사진 전체를 상자 영역에 비례하여 채우도록 크기가 조정됩니다.

그러나 뷰포트 단위를 과도하게 사용하면 매우 작은 화면에서 레이아웃 문제가 발생할 수 있습니다. 웹사이트의 반응성을 최적화하기 위해 다른 단위인 px 또는 %와 조합하여 전략적으로 뷰포트 단위를 사용하는 것이 권장됩니다.

## 2. 뷰포트 높이 (vh):

뷰포트 높이(vh)는 CSS에서 다른 단위로, 사용자의 뷰포트 높이에 대한 요소의 크기를 정의합니다. 뷰포트 너비(vw)와 마찬가지로, 이 단위는 다양한 화면 크기에 적응하는 반응형 웹사이트를 가능하게 합니다. 웹사이트 레이아웃을 세로 방향의 휴대전화 화면처럼 상상해보세요.

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

화면 높이는 전화기의 가시적인 영역의 높이와 같은 역할을 합니다. 뷰포트 높이를 사용하면 요소가 사용자의 화면 높이에 따라 크기를 조정하여 세로 및 가로 방향의 레이아웃을 적응시킬 수 있습니다.

코드 예시:

```js
.box {
  height: 50vh; /* 상자의 높이를 뷰포트 높이의 50%로 설정합니다 */
  margin: 0 auto; /* 콘텐츠를 수평으로 가운데 정렬합니다 */
}
```

위의 코드 예시에서 .box 클래스는 50vh로 설정되어 있습니다. 이는 뷰포트 높이의 50%에 해당하는데, 이는 사용자의 화면 크기와 방향과 관계 없이 상자가 사용 가능한 뷰포트 높이의 절반이 되도록 합니다. margin: 0 auto; 속성은 콘텐츠를 .box 클래스 내에서 수평으로 가운데 정렬합니다.

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

그러나 뷰포트 너비와 마찬가지로 뷰포트 높이를 과도하게 사용하면 매우 작은 화면에서 레이아웃 문제가 발생할 수 있습니다. 최적의 웹사이트 응답성을 위해 뷰포트 단위를 전략적으로 사용하고 px 또는 %와 결합하여 사용하는 것이 권장됩니다.

# 적절한 단위 선택: 도구 상자 비유

망치로 못을 돌바늘에 끼우지 않는 것처럼, 적절한 단위 선택은 특정 작업에 따라 달라집니다. 정교한 레이아웃 및 아이콘에는 px를 사용하고, 반응형 디자인 및 일관된 글꼴 크기에는 em/rem을 사용하고, 화면 크기에 따라 조절해야 하는 요소에는 vw, vh 또는 %를 사용하세요.

연습이 중요하다는 것을 명심하세요! 웹사이트 레이아웃에 미치는 영향을 관찰하기 위해 다양한 단위를 실험해 보세요. 조금의 이해와 이 간단한 비유를 통해 당신도 곧 CSS 단위 전문가가 될 것입니다!

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

# 결론

CSS에서 적절한 단위를 이해하고 활용하여 잘 구조화되고 적응 가능한 웹 페이지를 디자인하는 것이 중요합니다. 실제 세계와 마찬가지로 다양한 측정 단위를 사용하는 것처럼, 실제 세계 비유를 통해 각 단위의 목적과 기능을 이해할 수 있으며, 이를 CSS 스타일시트에 효과적으로 적용하는 것이 쉬워집니다.

만약 이 글이 도움이 되었다면 박수를 치고 공유하고 팔로우해주세요. 프론트엔드 개발, 블록체인 네트워크 등에 대해 더 많이 배우실 수 있습니다. 끝까지 읽어주셔서 감사합니다. 다음 글에서 만나요!