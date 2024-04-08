---
title: "CSS 레이아웃 마스터하기: 디스플레이부터 그리드까지 - 웹 개발자를 위한 포괄적인 가이드"
description: ""
date: 2024-04-05 08:44
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "Mastering CSS Layout: From Display to Grid — A Comprehensive Guide for Web Developers"
link: "https://medium.com/@jinlow/mastering-css-layout-from-display-to-grid-a-comprehensive-guide-for-web-developers-a1a5075f8ab8"
---


## 최신 및 반응형 웹사이트를 구축하기 위한 CSS Display, Float, Positioning, Flexbox 및 Grid 기본기 배우기

참고 회원으로서 지원해 주신다면 너무나 기쁠 것 같아요. 그러나 이 플랫폼에서 기여한 수익이 원하던 업데이트 빈도를 유지하기에는 충분하지 않다는 것이 밝혀졌어요. 이런 현실을 직시하고, 새로운 수입 창구를 모색하기로 어려운 결정을 내렸습니다. 하지만 이것은 끝이 아니라 새롭고 흥미로운 시작입니다. 미래의 Substack 뉴스레터를 발행할 예정으로 기쁜 마음으로 공유합니다. IT 기술의 엄청난 잠재력을 활용하고 투자 전략에 시스템적 사고 방식을 적용하는 나만의 투자 체계를 살펴볼 거에요. 영감이 떠올 때마다 여전히 글을 게시할 거에요.

마일스톤: CSS의 진화

- 1994년 — Håkon Wium Lie가 문서 내용과 프레젠테이션을 분리하기 위해 CSS를 제안했습니다.
- 1996년 — CSS 1이 소개되어 기본 스타일링 기능을 제공했습니다.

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

- 글꼴 속성 — 웹 페이지의 텍스트 요소에 대한 글꼴 스타일, 크기, 두께 및 패밀리.
- 색상과 배경 속성 — 텍스트, 배경 및 테두리의 색상 설정.
- 여백 및 패딩 — 요소 주변의 간격을 제어하여 정확한 레이아웃 조정이 가능합니다.
- 텍스트 서식 — 텍스트 정렬, 꾸밈선(밑줄, 취소선과 같은), 들여쓰기.
- 기본 상자 모델 — 콘텐츠 영역, 패딩, 테두리 및 여백에 관한 웹 페이지에서 각 요소가 렌더링되는 방식.
- 링크 스타일링 — 방문한 링크와 방문하지 않은 링크, 그리고 호버 및 활성 상태를 구분하여 하이퍼링크의 모양을 사용자정의합니다.

3. 1998-2001— 복잡한 스타일링 기능 제공.

- 고급 선택자 — 개발자가 `[attribute]`, `[attribute=value]`, `[attribute~=value]`와 같이 속성에 따라 요소를 선택할 수 있도록 합니다. 부모 `자식`로 표시된 자식 선택자는 컨테이너 내 직계 자식의 스타일링을 가능케 합니다. 또한 CSS2에서 인접 형제 결합자(요소 + 형제)와 일반 형제 결합자(요소 ~ 형제)가 도입되어 인접하거나 일반 형제 요소와의 관계에 기반한 스타일링을 용이하게 합니다.
- 위치 지정 — position, z-index 및 float와 같은 위치 지정 속성이 도입되어 개발자가 웹 페이지의 요소 레이아웃과 위치를 효과적으로 제어할 수 있는 기능을 제공합니다. position을 통해 개발자는 relative와 static과 같은 위치 지정 방법을 정의할 수 있어 레이아웃 구조에 대한 정밀한 제어를 가능케 합니다. z-index 속성은 요소의 쌓임 순서를 조작하여 깊이 지각과 시각적 계층을 향상시킵니다. 또한 float 속성은 컨테이너 내에서 요소 정렬을 용이하게 하여 요소가 서로 감싸 인접형태의 레이아웃을 만들어 유연하고 다목적의 디자인을 장려합니다.
- 글꼴 속성 — 글씨체 두께, 스타일 및 변형을 포함한 글꼴 속성 개선.
- 테이블 — 셀 간격, 테두리 및 레이아웃을 제어하는 속성을 포함하여 HTML 테이블 스타일링. border-spacing 속성이 테이블 내 셀 간의 공간을 조정합니다. border-style, border-color, border-width와 같은 속성은 테이블 테두리의 외관을 사용자 정의합니다. border-collapse는 테이블 테두리가 단일 테두리로 병합되는지 또는 분리되는지를 제어합니다.
- 사용자 인터페이스 속성 — cursor 속성은 호버 시 요소에 대한 커서 유형을 정의하는 기능을 제공합니다. 또한 outline 속성은 요소 주변에 시각적 아웃라인을 생성하여 키보드 탐색을 위한 특히 강조된 또는 선택된 요소를 강조함으로써 접근성을 향상시킵니다. 더불어 CSS2가 ::before 및 ::after 가상 요소를 위한 content 속성을 도입하여 요소 콘텐츠 앞이나 뒤에 동적 콘텐츠를 삽입할 수 있도록 합니다.
- 색상 — 다양한 형식의 색상 값을 지정하고 텍스트 및 배경 색상을 더 정확하게 제어하기 위한 속성을 도입하여 색상 기능을 확대함.
- Overflow 속성 — 개발자가 오버플로우 콘텐츠가 클립되거나 숨겨지거나 스크롤바와 함께 표시되는지를 지정할 수 있도록 함.

4. 2011— 고급 웹 스타일링 기능을 제공.

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

- 미디어 쿼리 - 스크린 크기, 해상도, 방향 등의 기기 특성에 따라 다양한 스타일을 적용합니다.
- 플렉스박스 - 컨테이너 내 요소들을 쉽게 정렬하고 공간을 배분할 수 있어 다양한 화면 크기와 콘텐츠 차원을 수용합니다.
- 그리드 레이아웃 - 복잡하고 반응형 레이아웃을 간편하게 만들어주며, grid-template-columns, grid-template-rows, grid-gap와 같은 기능을 제공하여 유연하고 적응적인 디자인을 제공합니다.
- 전환과 애니메이션 - 자바스크립트를 사용하지 않고 부드럽고 시각적으로 매력적인 효과를 만듭니다.
- 변형 - 2D 또는 3D 공간에서 요소의 크기 조정, 회전, 기울임, 이동 등 다양한 변형을 적용합니다.
- 그라디언트와 그림자 - 색상 사이의 부드러운 전환을 가능하게 하며, 박스 그림자는 요소에 깊이와 차원을 더합니다.
- 사용자 정의 폰트 - @font-face 규칙을 도입하여 웹사이트에서 사용자 정의 글꼴을 사용할 수 있습니다.
- 새로운 선택자 - 속성 선택자, 가상 클래스, 가상 요소 등을 사용하여 다양한 기준에 따라 특정 요소를 대상으로 지정하고 스타일링합니다.

5. 2017 - 고급 Grid 레이아웃 스타일링 기능 제공.

- 그리드 라인과 트랙 - 가로와 세로 선이 그리드 구조를 형성하며, 트랙은 이러한 선 사이의 공간을 나타냅니다. 트랙은 고정 길이, 백분율 또는 사용 가능한 공간의 일부인 fr 단위를 사용하여 크기를 조정할 수 있습니다.
- 명시적 및 암시적 그리드 - 개발자는 grid-template-rows, grid-template-columns 등의 속성을 사용하여 명시적 그리드를 정의할 수 있습니다. 암시적 그리드는 명시적으로 정의된 그리드를 넘어 추가 콘텐츠를 자동으로 수용합니다.
- 그리드 영역 - 그리드 컨테이너 내에서 명명된 그리드 영역을 정의하여 grid-area 속성을 사용하여 특정 영역에 그리드 항목을 배치할 수 있습니다.
- 그리드 템플릿 - grid-template 속성은 행과 열의 수, 크기 및 그리드 항목의 배치를 포함한 그리드의 전체 구조를 정의합니다.
- 정렬과 정렬 - CSS 그리드 레이아웃은 justify-items, align-items, justify-content, align-content와 같은 속성을 사용하여 그리드 항목을 정확히 배치하고 정렬할 수 있는 정렬 및 정렬 기능을 제공합니다.
- 중첩 그리드 - 그리드 항목 내에서 그리드를 중첩할 수 있어 더 복잡한 레이아웃 구조와 디자인 가능성을 제공합니다.

6. 2019 - 스크롤 인터페이스 기능을 제공합니다.

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

- 스냅 지점 - 스크롤 가능한 컨테이너 내에서 특정 스냅 지점을 정의합니다.
- 다양한 스크롤 방향 지원 - 수평 및 수직 스크롤 방향을 모두 지원하며, 프로젝트의 레이아웃 요구에 따라 어떤 방향으로든 스냅 지점을 구현할 수 있도록 합니다.
- 구성 가능한 동작 - 스냅 지점 정의, 스냅 동작 지정 및 스냅 오프셋 조정을 포함한 스크롤 스내핑 동작을 제어할 수 있습니다.

7. 2021 - 콘테인먼트 제공

- 레이아웃 변경의 격리 - 개발자는 특정 DOM 요소나 서브트리를 포함 블록으로 표시하여 해당 요소 내의 변경 사항을 레이아웃의 나머지 부분과 격리시킬 수 있습니다. 이를 통해 주변 요소에 대한 수정의 영향을 최소화하고 스타일 재계산 및 문서 전체의 재배치를 줄여줍니다.
- 성능 향상 - 레이아웃 변경을 격리함으로써 렌더링 성능을 향상시킵니다. 복잡한 웹 레이아웃의 경우 특히 재배치 및 다시 그리기의 범위를 줄이며, 스타일 재계산 및 레이아웃 업데이트와 관련된 계산 부하를 최소화하여 브라우저 작업량을 줄입니다. 또한 콘테인먼트 경계의 명시적 정의는 레이아웃 렌더링에서 예측 가능성을 향상시키며, 개발자에게 문서 구조를 통해 변경 전파를 더 잘 제어할 수 있도록 합니다.

- 디스플레이 개념

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

CSS display 속성은 CSS1(1996년 12월)에서 소개되었으며 HTML 요소의 시각적 표현을 제어하여 레이아웃과 가시성에 영향을 줍니다. 이 속성에는 block, inline, inline-block, none과 같은 값이 포함되어 있으며 각 값은 레이아웃에 다르게 영향을 미칩니다.

- display: block— 요소는 전체 너비를 차지하며 새로운 줄을 시작하여 수직으로 쌓입니다. 너비, 높이, 여백 및 안쪽 여백을 조절할 수 있습니다. 예시: `div`, `p`, `h1` ~ `h6` .
- display: inline— 이러한 요소는 내용이 요구하는 공간만 차지합니다. 새 줄에서 시작하지 않으며 다른 요소들이 수평으로 옆에 있을 수 있습니다. 예시: `span`, `a`, `img`.
- display: inline-block— block 및 inline 요소의 특징을 결합한 것입니다. block 요소처럼 너비, 높이, 여백 및 안쪽 여백을 준수하지만 inline 요소처럼 새 줄에서 시작하지 않습니다. 그리드 모양의 구조를 만들거나 요소를 수평으로 정렬하는 데 유용합니다.
- display: none— 요소를 완전히 숨기며 문서 흐름에서 제거합니다. 어떤 공간도 차지하지 않으며 페이지에 렌더링되지 않습니다.

```js
/* display: block 예시 */
.block-example {
  display: block;
  width: 200px;
  height: 100px;
  background-color: lightblue;
  margin-bottom: 20px;
}
/* display: inline 예시 */
.inline-example {
  display: inline;
  background-color: lightgreen;
  padding: 5px;
}
/* display: inline-block 예시 */
.inline-block-example {
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: lightcoral;
  margin-right: 10px;
}
/* display: none 예시 */
.none-example {
  display: none;
}
```

2. float의 개념

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

플로트는 이미지를 플로팅하여 텍스트가 그 주위로 둘러싸이도록 하는 인쇄 디자인에서 시작되었습니다. 이는 전통적인 매거진 레이아웃을 모방하는 것입니다. 2001년경 CSS 명세에 추가된 플로트 속성은 웹 디자이너들이 요소를 왼쪽이나 오른쪽으로 위치시킬 수 있게 하여 인쇄물에서의 이미지 플로팅 동작을 모방하도록 했습니다. 이는 초기에 웹 레이아웃이 매거진 스프레드를 모방할 수 있도록 했지만, Flexbox나 CSS Grid와 같은 새로운 기술이 등장함에 따라 덜 선호되게 되었습니다. 그럼에도 불구하고, 보다 간단한 레이아웃이나 오래된 브라우저와의 하위 호환성을 위해 여전히 중요합니다.

CSS 레이아웃에서 요소가 플로트되면 일반 문서 흐름에서 벗어나 거기에 포함된 요소 내에서 왼쪽이나 오른쪽으로 위치하게 됩니다. 이를 통해 다른 콘텐츠가 그 주위로 둘러싸이게 됩니다. 그러나 이는 요소들이 서로 겹치거나 옆에 있는 요소들이 플로트된 요소 옆으로 올라갈 수 있는 레이아웃 문제를 야기할 수 있습니다. 이를 해결하기 위해 개발자들은 Clearfix나 clear 속성과 같은 기술을 사용하여 컨테이너가 플로트된 자식 요소들을 포함하도록 하고, 이후 요소들이 어떤 쪽에 더 이상 플로트하지 않아야 하는지를 명시합니다. 역사적 중요성에도 불구하고, 플로트는 특히 반응형이나 복잡한 디자인에서 레이아웃 안정성 및 수직 정렬에 대한 제한된 제어로 인해 복잡성을 도입할 수 있으며, 현대 웹 개발 관행과 일치하지 않을 수 있습니다.

```js
/* 왼쪽으로 플로트 */
.float-left {
  float: left;
}

/* 오른쪽으로 플로트 */
.float-right {
  float: right;
}

/* 플로트 해제 */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
```

3. 포지셔닝 컨셉

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

1996년에 CSS1이 데뷔했습니다. 이것은 static 및 relative와 같은 기본 위치 지정 속성을 소개했습니다. 그리고 1998년에 CSS2가 출시되었는데, 이것은 absolute 및 fixed 위치 지정을 통해 기능을 확장했습니다. CSS2.1은 2009년에 W3C 권고안으로 승인되어 위치 지정 모델을 확립했습니다. 그리고 2011년에 CSS3가 나와 sticky 값을 소개했는데, 이를 통해 요소들이 사용자가 스크롤할 때 컨테이너 내에서 고정될 수 있습니다.

- Static—이것은 기본 위치 지정 값을 나타냅니다. 요소는 문서의 정상 흐름에 따라 위치 지정되며 top, bottom, left 또는 right와 같은 명시적 위치 지정 속성에 영향을 받지 않습니다. 이 기본 동작은 요소가 HTML 마크업 내에서의 배치 순서에 따라 웹페이지에 표시되어야 함을 보장하며 CSS를 통해 적용되는 추가 조정 없이 정상적으로 나타나도록 합니다.
- Relative—요소는 원본 위치에서 조정을 허용하면서 문서 흐름 내에서 위치를 유지합니다. 이를 위해 top, right, bottom 및 left 속성을 사용하여 처음 위치에서 이동할 수 있습니다. 이러한 조정은 요소의 초기 위치에 대한 상대적입니다. 이것은 주로 position: absolute;를 가진 자식 요소에 영향을 끼치며, 이들은 부모 요소의 조정된 위치를 기준으로 정렬됩니다. top, right, bottom 또는 left와 같은 오프셋 속성이 지정되지 않은 경우에도 요소의 시각적 위치 지정은 변경되지 않지만, 여전히 위치 지정된 요소로 간주됩니다.
- Absolute—요소를 일반 문서 흐름에서 제거하여 가장 가까운 조상과 상대적인 위치를 가지게 합니다. 이것은 조상에 정의된 위치 속성 또는 이러한 조상이 없는 경우 초기 포함 블록에 대해 요소가 다른 요소의 위치에 영향을 미치지 않도록 합니다. 개발자는 top, right, bottom 또는 left와 같은 속성을 사용하여 위치를 정확하게 지정할 수 있어서 페이지 상의 위치를 섬세하게 제어할 수 있습니다.
- Fixed—요소를 뷰포트에 상대적으로 배치하여 페이지를 스크롤해도 동일한 위치에 유지되도록 합니다. 이렇게 함으로써 헤더 또는 내비게이션 바와 같은 지속 요소에 적합합니다. 이들은 조상 요소에 영향을 받지 않으며 문서 흐름에서 독립적입니다. 이는 다른 콘텐츠와 중첩되어 표기되는 현상을 초래할 수 있습니다.
- Sticky—이것은 상대적 및 고정 위치 지정을 결합하여 일정 지점을 지나 스크롤하는 경우 요소가 컨테이너 가장자리에 고정되도록 합니다. Relative 위치 지정과 달리, 스크롤 임계값이 넘어가면 고정 위치 지정처럼 작동하여 뷰포트에 상대적으로 유지됩니다. 동작하기 위해 top, right, bottom 또는 left 속성 중 하나 이상이 지정되어야 합니다. 요소는 스크롤 작업에 따라 상대적 및 고정 위치 지정 간 전환하여 문서 흐름에서 특정 위치에 고정된 위치로 부드럽게 변환됩니다.

```js
/* Static 위치 지정 */
.static-element {
  position: static;
}

/* Relative 위치 지정 */
.relative-parent {
  position: relative;
}

.relative-child {
  position: absolute;
  top: 50px; /* 필요에 따라 조정 */
  left: 50px; /* 필요에 따라 조정 */
}

/* Absolute 위치 지정 */
.absolute-element {
  position: absolute;
  top: 0; /* 필요에 따라 조정 */
  left: 0; /* 필요에 따라 조정 */
}

/* Fixed 위치 지정 */
.fixed-element {
  position: fixed;
  top: 0; /* 필요에 따라 조정 */
  left: 0; /* 필요에 따라 조정 */
}

/* Sticky 위치 지정 */
.sticky-element {
  position: sticky;
  top: 20px; /* 필요에 따라 조정 */
}
```

4. Flexbox 개념

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

2008년 이전에 최초로 논의된 Flexbox은 2009년 7월 23일에 처음으로 작업 초안이 나왔습니다. 2014년에 명세가 변경되었는데, 이는 개발자들의 채택이 증가함에 따른 것입니다. Flexbox에 대한 포괄적인 안내서가 2013년 4월에 발표되어 이 기술의 기능과 응용 분야를 강조했습니다.

Flexbox (Flexible Box Layout)은 반응형 웹 디자인을 위한 CSS 모델로, 요소들을 행 또는 열로 구성하고 사용 가능한 공간에 맞게 크기를 조정합니다. 주축과 교차 축을 도입하여 방향을 제어하며, 요소들이 화면 공간을 최적화하기 위해 확장되거나 축소되도록 합니다. 부유 요소보다 더 깔끔한 코드를 작성할 수 있습니다.

이 CSS 코드는 기본적인 flexbox 레이아웃을 설정합니다:

- .flex-container — display: flex를 사용하여 flex 컨테이너를 정의하며, 항목을 가로로 배열하고(flex-direction: row), 여러 줄로의 줄 바꿈을 방지합니다(flex-wrap: nowrap). 항목들을 주 축의 시작 부분에 정렬하며(justify-content: flex-start), 교차 축을 채우기 위해 그들을 늘립니다(align-items: stretch).
- .flex-item— 컨테이너 내의 flex 항목을 나타냅니다. flex 속성은 flex-basis, grow, shrink 인자를 지정하여 항목이 사용 가능한 공간에 따라 크기를 조정할 수 있도록 합니다.

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
/* Flex 컨테이너 정의 */
.flex-container {
  display: flex; /* Flexbox 레이아웃 사용 */
  flex-direction: row; /* 항목들을 가로로 배치 */
  flex-wrap: nowrap; /* 여러 줄로 나누지 않음 */
  justify-content: flex-start; /* 주 축의 시작 부분에 항목 정렬 */
  align-items: stretch; /* 교차 축을 채우기 위해 항목들을 늘림 */
}

/* Flex 항목 정의 */
.flex-item {
  flex: 1 1 auto; /* Flex 기본, 증가, 축소 속성 */
  /* Flex 항목 추가 스타일링 */
}
```

5. 그리드 개념

2017년 소개된 CSS Grid Layout은 웹 레이아웃 디자인을 혁신적으로 바꾸어 복잡한 레이아웃을 효율적으로 생성할 수 있는 2차원 그리드 시스템을 제공합니다. 그리드 컨테이너 내에서 개발자는 행과 열을 정의하여 그리드 라인과 트랙을 사용하여 요소 배치에 대한 정밀한 제어를 할 수 있습니다.

- .grid-container 클래스 — grid-template-columns 및 grid-template-rows와 같은 속성을 사용하여 그리드의 구조를 정의하고 행과 열의 크기 및 개수를 결정합니다. 이를 통해 레이아웃의 차원과 배열에 대한 개발자의 제어를 부여하며, grid-gap 속성은 그리드 항목 간 일관된 간격을 제공하여 시각적 일관성과 정렬을 향상시킵니다.
- .grid-item 클래스 — grid-column 및 grid-row와 같은 속성을 이용하여 각 항목이 차지하는 열과 행을 지정합니다. 이 수준의 제어는 반응형 및 시각적으로 매력적인 디자인을 만들 수 있도록 하며, 그리드 레이아웃 내에서 항목 배치와 정렬을 세세하게 조정할 수 있게 합니다.```

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

```css
/* 그리드 컨테이너 정의 */
.grid-container {
  display: grid;
  /* 그리드 구조 정의 */
  grid-template-columns: auto auto auto;
  grid-template-rows: 100px 200px;
  /* 그리드 아이템 사이의 간격 정의 */
  grid-gap: 10px;
}

/* 그리드 트랙 */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 50px); 
}

/* 그리드 아이템 정의 */
.grid-item {
  /* 그리드 내에서 아이템 위치 지정 */
  grid-column: 2 / span 2;
  grid-row: 1;
}
```

내 시각

비교 분석을 통해 CSS 레이아웃 방법의 역사적 의의와 현대적인 중요성을 깊게 이해하게 되었습니다. 한때 일반적이었던 플로트 기반 레이아웃이 서서히 사라지고 있음을 깨달았습니다. 그러므로 플로트 레이아웃의 숙달에 지나친 중점을 두는 것은 옳지 않아 보입니다.

대신, 플렉스박스와 그리드 레이아웃과 같은 현대적 기술에 우선순위를 두는 것이 현재의 CSS 개발 트렌드와 일치합니다. 그러므로 CSS 레이아웃 진화에 발을 맞추기 위해 이러한 고급 기술에 대한 학습 노력에 집중할 것입니다.```

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

참고 자료

내 게시물 중 도움이 됐다면 친절하게 커피 한 잔 사주시거나 제 작업을 지원해주시거나 후원해주시겠어요😊,

Patreon

Ko-fi.com

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

buymeacoffee

마지막으로, 아직 Medium 구독자가 아니시고 구독할 계획이 있다면, 아래 링크를 통해 가입해 주시기 바랍니다. 여러분의 구독료 중 일부가 저에게 전달되며 추가 비용은 없습니다.

이것은 제 첫 제휴 프로그램입니다. 시스템 지식을 더 향상시키고 싶다면 링크를 클릭하고 강의를 구매할 수 있습니다. 솔직히 말해서, 여러분의 수강료 중 20%가 저에게 전달되며 추가 비용은 없습니다. 무제한으로 강의에 접근할 수 있습니다. 시간 제한이 없으며 모든 향후 업데이트에 무료로 접근할 수 있습니다.