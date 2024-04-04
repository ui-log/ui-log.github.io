---
title: "프로젝트에 CSS와 SCSS 중에 무엇을 사용해야할까?  "
description: ""
date: 2024-03-29 10:24
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "CSS v SCSS"
link: "https://medium.com/@ykods/css-v-scss-dfb73068c5fd"
---


## 웹 개발에서 스타일링에 대한 더 깊은 이해

CSS(Cascading Style Sheets)와 SCSS(Sassy Cascading Style Sheets)는 모두 웹 개발 영역에서 중요한 도구로, 웹 페이지의 표현과 레이아웃을 정의하는 데 중요한 역할을 합니다. 이 글에서는 CSS와 SCSS의 차이점, 사용법, 호환성, 그리고 기능을 설명하기 위해 예시를 제시할 것입니다.

# CSS: Cascading Style Sheets

CSS는 HTML이나 XML로 작성된 문서의 모양과 형식을 설명하는 스타일시트 언어입니다. 이를 통해 개발자들은 웹페이지의 요소들을 스타일링하여 색상, 크기, 간격, 레이아웃과 같은 속성을 지정할 수 있습니다.

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

CSS는 웹 페이지의 모양을 제어하는 데 널리 사용됩니다. HTML 문서 내에서 직접 적용되거나 별도의 외부 파일에 저장되어 구조와 스타일 간의 명확한 분리를 촉진합니다.

```js
/* CSS 예시 */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f4;
}

h1 {
  color: #3366cc;
}

.container {
  width: 80%;
  margin: 0 auto;
}
```

# SCSS: 사슬리 캐스케이딩 스타일 시트

SCSS는 CSS로 해석되거나 변환되는 전처리기 스크립팅 언어입니다. 변수, 중첩, 믹스인과 같은 기능을 도입하여 스타일 시트의 유지 관리 및 효율성을 향상시키는 CSS의 확장입니다.

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

SCSS는 개발자들 사이에서 특히 인기가 많습니다. 스타일시트에 프로그래밍 개념을 도입하여 복잡한 스타일 요구 사항을 관리하기 쉽게 만들기 때문입니다. 이는 웹 애플리케이션에서 활용되기 전에 표준 CSS로 처리됩니다.

```js
/* SCSS 예시 */
$base-font: 'Arial', sans-serif;
$primary-color: #3366cc;

body {
  font-family: $base-font;
  background-color: #f4f4f4;
}

h1 {
  color: $primary-color;
}

.container {
  width: 80%;
  margin: 0 auto;
}
```

# 호환성

CSS와 SCSS는 서로 호환됩니다. SCSS는 CSS의 상위 집합으로, 표준 CSS 코드는 모두 유효한 SCSS 코드입니다. SCSS는 변수, 중첩, 믹스인과 같은 추가 기능을 도입하여 CSS의 기능을 확장하지만, 표준 CSS와 완전히 호환됩니다.

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

개발자들은 어떤 문제 없이 일반 CSS에서 SCSS로 점진적으로 전환할 수 있어요. 기존 CSS 코드는 원할하게 SCSS 파일에 통합될 수 있고, SCSS 파일은 표준 CSS 파일을 가져올 수 있어요. 이 호환성은 팀이 SCSS를 점진적으로 도입하고 전통적인 CSS와 함께 작업하는 동안 추가 기능을 활용할 수 있도록 해 줘요.

SCSS 코드는 웹사이트에 배포되기 전에 표준 CSS로 컴파일돼야 해요. 이 컴파일 단계를 통해 브라우저가 스타일을 올바르게 해석하고 렌더링할 수 있어요. SCSS를 CSS로 컴파일하는 다양한 도구와 빌드 프로세스가 있으며, 이 단계는 개발 워크플로에 자주 통합돼요.

# 차이점

CSS와 SCSS 간의 주요 차이점은 문법과 추가 기능에 있어요.

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

- 구문:

- CSS: 평평한 구조를 가진 간단한 구문을 사용합니다. 중첩이나 추가 구조 없이 스타일을 정의합니다.
- SCSS: 중첩 구조를 활용한 더 유연하고 가독성이 좋은 구문을 사용합니다. 전통적인 프로그래밍 언어와 닮아 HTML 요소를 구성하고 이해하기 쉽게 만듭니다.

2. 중첩:

- CSS: 셀렉터의 중첩을 지원하지 않습니다. 각 셀렉터는 독립적으로 작성됩니다.
- SCSS: 셀렉터의 중첩을 허용하여 HTML 요소의 계층 구조를 쉽게 표현할 수 있습니다. 이는 더 가독성이 좋고 유지보수가 쉬운 코드로 이어질 수 있습니다.

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

3. 변수:

- CSS: 변수를 지원하지 않습니다. 값은 스타일시트 전체에 반복되어야 하며, 이는 중복과 업데이트의 어려움을 야기할 수 있습니다.
- SCSS: 변수를 도입하여 개발자가 재사용 가능한 값을 정의할 수 있습니다. 이는 유지보수성을 향상시키고 스타일을 일관되게 업데이트하기 쉽게 만듭니다.

4. 믹스인:

- CSS: 믹스인 개념이 없습니다. 재사용 가능한 코드 세그먼트를 수동으로 복제해야 합니다.
- SCSS: 믹스인을 지원하여 재사용 가능한 코드 블록을 만들 수 있습니다. 이는 모듈식이고 효율적인 스타일시트 개발을 촉진합니다.

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

5. 부분 및 가져오기:

- CSS: 스타일시트는 일반적으로 다른 파일로 분리되지만 다른 CSS 파일을 가져오는 내장된 방법이 없습니다.
- SCSS: 부분의 개념을 소개하여 스타일시트를 작은 관리 가능한 파일로 분할할 수 있습니다. 이러한 부분은 주 스타일시트로 가져올 수 있어 모듈식 접근을 용이하게 합니다.

6. 파일 확장명:

- CSS: 파일은 .css 확장명을 가지고 있습니다.
- SCSS: 파일은 .scss 확장명을 가지고 있습니다.

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

7. 브라우저 호환성:

- CSS와 SCSS는 컴파일 이후 동일한 브라우저 호환성을 가집니다. SCSS는 사실상 표준 CSS로 변환되는 전처리기이기 때문입니다.

요약하자면, SCSS는 변수, 중첩, 믹스인과 같은 기능이 풍부하고 유연한 스타일시트 작성 방식을 제공하여 코드의 효율성과 유지 관리성을 향상시킵니다. 그러나 CSS와 SCSS 중 어떤 것을 선택할지는 주로 개인 취향, 프로젝트 요구 사항 및 개발 팀의 기존 워크플로에 따라 결정됩니다.

새로운 것을 배웠기를 바랍니다. ❤️

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

Connect with me via:

- GitHub
- LinkedIn
- Twitter