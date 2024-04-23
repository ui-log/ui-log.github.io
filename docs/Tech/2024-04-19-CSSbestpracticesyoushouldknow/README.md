---
title: "반드시 알아야하는 CSS 팁들"
description: ""
date: 2024-04-19 21:22
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "CSS best practices you should know"
link: "https://medium.com/@paulohfev/css-best-practices-you-should-know-374c388a00dd"
---


## CSS 마스터가 되는 데 도움이 되는 최선의 실천 팁

계층 구조 스타일 시트(CSS)는 웹 디자인의 기본이며 모든 프런트엔드 개발자가 알아야 합니다. 그들의 힘을 효과적으로 다루는 법을 이해하는 것은 아름다운, 반응형 및 유지보수 가능한 웹 애플리케이션을 만드는 데 중요합니다.

이 가이드에서는 애플리케이션을 구축할 때 고려해야 할 몇 가지 CSS 최상의 실천 사례를 탐색해 보겠습니다!

![이미지](./img/CSSbestpracticesyoushouldknow_0.png)

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

시작하기 전에, 개발자들이 자신이 집중하고 있는 기술의 최상의 실천 방법에 대해 최신 정보를 유지하는 것이 중요하다는 점을 명심해 주세요. 오늘의 최상의 실첵 방법이 내일에 변경될 수 있다는 것을 아무도 막을 수 없습니다.

## 1. CSS 전처리기 사용

Sass나 Less와 같은 CSS 전처리기를 사용하면 더 체계적이고 모듈식 코드를 작성할 수 있습니다. 변수, 믹스인, 중첩과 같은 기능을 제공하여 코드를 더 유지보수하기 쉽게 만들고 중복을 줄일 수 있습니다.

## 2. 코드 조직

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

코드의 구성은 주관적인 면이 상당히 많지만, 모든 개발자가 염두에 두어야 할 일반적인 고려 사항이 있어요.

- 의미 있는 클래스 및 ID 이름 사용: 내용이나 요소의 목적을 반영하는 설명적인 클래스 및 ID 이름을 선택해야 해요. 예를 들어 `li className="navbar-link admin-link"` 안의 클래스 정의는 네비게이션 바의 링크이고 UI에서는 관리자 사용자만 볼 수 있는 링크라는 것을 명확하게 나타내요.
- 일관된 명명 규칙 사용: CSS 클래스와 ID 정의에 대해 명명 규칙을 지켜야 해요. 이렇게 하면 개발 팀이 일관성을 유지하고 프로젝트 전체에서 가독성을 향상시킬 수 있어요. BEM, OOCSS 및 SMACSS 등의 인기 있는 명명 규칙이 있어요. 또는 필요에 맞는 사용자 정의 명명 규칙을 항상 사용할 수 있어요.

## 3. 선택자 정의를 최적화하세요

CSS 선택자는 스타일을 지정하려는 HTML 요소를 찾는 데 사용돼요. 여기서 참조할 수 있는 선택자를 사용하는 여러 방법이 있어요.

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

일반적으로, HTML 구조에 너무 밀접하게 결합된 지나치게 특정한 선택자를 사용하는 것은 피하는 것이 좋습니다. 이렇게 하면 CSS를 유지 보수하기 어려워질 수 있습니다. 예를 들어:

```js
div#container > ul.navigation li.active a.btn-primary span.icon {
  /* CSS 규칙 */
}
```

이 선택자는 특정 요소에 대해 작동할 수 있지만 지나치게 구체적입니다. HTML 구조에 변경 사항이 생기면(새 요소 추가 또는 순서 변경 등), 이 선택자가 망가질 가능성이 높습니다. 대신 더 유연한 선택자를 선호하세요. 예를 들면:

```js
.nav-link {
  /* 네비게이션 링크에 대한 CSS 규칙 */
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

이 예시에서는 모든 탐색 링크를 대상으로 하는 클래스 기반 선택기를 사용하고 있습니다. 이는 HTML 구조가 변경되더라도 유지보수가 더 쉽고 브레이크가 적습니다.

## 4. CSS 특이성 규칙 이해하기

특이성은 브라우저가 요소에 적용할 속성 값을 결정하는 데 사용하는 내부 계산입니다.

CSS 특이성이 어떻게 작동하는지 이해하면 선택기와 정의를 가장 간결하고 명확하게 최적화할 수 있습니다. 다음 예시를 살펴보세요:

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
.container p {
  color: blue;
}

.text {
  color: red;
}
```

첫 번째 규칙은 container p로 설정되어 텍스트 색상을 파란색으로 지정하고 두 번째 규칙인 .text는 텍스트 색상을 빨간색으로 지정합니다.

.container p 규칙은 0-1-1-0 (하나의 클래스 선택기 및 하나의 유형 선택기)의 특이성을 가지고 있습니다. 그리고 .text 규칙은 0-0-1-0 (하나의 클래스 선택기)의 특이성을 가지고 있습니다.

특이성이 더 높은 규칙인 .container p가 우선합니다. 따라서 `p` 요소 내부의 텍스트는 파란색이 됩니다.

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

## 5. !important 속성 사용을 피하세요

앞서 언급한 두 가지 최적의 방법 중 하나는 !important 속성을 사용하는 것입니다. 이를 사용하면 해당 속성에 대한 이전의 모든 스타일 규칙을 무시할 수 있습니다. 예를 들면:

```js
.myParagraph {
  color: gray;
}

p {
  color: red !important;
}
```

이 경우, p 태그는 빨간색으로 표시됩니다.

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

일반적으로!important를 너무 많이 사용하는 것을 피하고 대신 사용자 정의 클래스 네이밍 및 적절한 선택자 정의를 통해 스타일링 정의를 의존하는 것이 좋습니다.

!important 속성은 특정 속성에 대한 모든 이전 스타일링을 덮어쓰는 멸시적인 성격을 가지고 있습니다. 프로젝트의 복잡성과 규모가 커질수록 유지 보수가 점점 어려워집니다. 이와 같은 파괴적인 정의는 쉽게 누락되기 쉽고 디버깅 시 찾기 어렵며, 스타일 정의에 부작용을 일으킬 수 있습니다. 사용에 대해 현명하게 판단해야 합니다!

## 6. 중첩 최소화

CSS 선택자를 하나의 부모에 너무 깊게 중첩하거나 부모와 자식 간 관계로 너무 깊게 중첩하지 말아야 합니다. 다음 예시를 살펴보세요:

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
.wrapper {
  // wrapper 스타일을 이곳에 작성하세요
  .container {
    // container 스타일을 이곳에 작성하세요
    .card {
      // card 스타일을 이곳에 작성하세요
      .content {
        // content 스타일을 이곳에 작성하세요
        .paragraph {
          // paragraph 스타일을 이곳에 작성하세요
          .paragraph-inner-text {
            // paragraph-inner-text 스타일을 이곳에 작성하세요
          }
        }
      }
    }
  }
}
```

프로젝트가 커져가면서 스타일시트 구조도 점점 커져감에 따라 깊게 중첩된 CSS 코드는 유지보수하기 어려워집니다. 깊게 중첩된 스타일은 특이성을 높일 수 있지만 코드를 읽기 어렵게 만듭니다.

중첩을 적절한 수준으로 유지하세요. 선택자를 3단계 이상으로 중첩하는 것은 피하도록 노력해보세요.

## 7. CSS 모듈화하기

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

모듈화는 CSS를 작은 재사용 가능한 모듈 또는 구성 요소로 나누는 것을 의미합니다. 이 방법을 사용하면 코드베이스를 더 유지보수하기 쉽게 만들고 특히 대규모 프로젝트에서 코드 재사용을 장려합니다. 각 모듈은 특정 UI 구성 요소나 기능의 스타일을 캡슐화해야 합니다.

예를 들어:

```js
/* 버튼 모듈 */
.button {
  /* 버튼 스타일 */
}

/* 내비게이션 모듈 */
.navbar {
  /* 내비게이션 스타일 */
}

/* 카드 모듈 */
.card {
  /* 카드 스타일 */
}
```

CSS를 모듈로 구성하면 버튼, 내비게이션 바, 카드에 대한 스타일을 웹사이트 전체에서 중복코드를 생성하지 않고 쉽게 재사용할 수 있습니다. 게다가 특정 컴포넌트의 스타일을 업데이트해야 할 경우 한 곳에서 변경하여 일관성을 유지할 수 있습니다.

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

더 큰 규모의 견고한 아키텍처에서는 CSS를 별도의 파일과 디렉터리로 나누는 것이 훨씬 효율적일 것입니다. 고려할 만한 인기 있는 패턴 중 하나는 Sass를 활용하는 7-1 패턴입니다.

## 8. 반응형 디자인

반응형 디자인은 다양한 화면 크기와 장치에 적응하는 웹 디자인을 만드는 실천입니다. 반응형 디자인을 우선시함으로써 응용 프로그램이 데스크톱 컴퓨터부터 모바일폰까지 다양한 장치에서 잘 보이고 작동되도록 할 수 있습니다.

## 9. 다양한 브라우저에서 테스트하기

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

다양한 브라우저에서 일관된 방식으로 스타일이 작동하는지 확인하고 호환성 문제를 해결함으로써 안심할 수 있습니다. 참고로, CanIUse 플랫폼을 사용하여 CSS 정의가 모든 브라우저에서 호환되는지 여부를 확인할 수 있습니다.

## 10. 문서화

CSS 코드 문서화는 주석을 추가하거나 CSS 규칙과 스타일의 목적, 사용법 및 중요한 세부 정보를 설명하는 외부 문서를 작성하는 것을 포함합니다.

문서화 작업은 팀 프로젝트에 참여할 때나 시간이 지난 후 자신의 코드로 돌아갈 때 특히 가치가 있습니다. 복잡한 해결책의 내부 기능을 설명하는 데 특히 유용합니다.

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

더 광범위한 문서가 필요하다면 전반적인 CSS 아키텍처, 네이밍 규칙과 유지 보수 및 스타일 확장에 대한 고려 사항과 특정 가이드라인을 설명하는 별도의 문서나 README 파일을 작성해 보세요.

예를 들어:

```js
# CSS 문서

이 문서는 프로젝트에서 사용되는 CSS 스타일에 대한 개요를 제공합니다.

## 구조

우리의 CSS는 다음과 같이 구성됩니다:

1. **구성요소**: 재사용 가능한 구성요소와 관련된 스타일, 예를 들어 폼과 버튼이 있습니다.
2. **레이아웃**: 메인 페이지 레이아웃과 레이아웃과 관련된 요소들에 대한 스타일입니다. 예를 들어 컨테이너, 그리드, 헤더 및 푸터가 있습니다.

## 네이밍 규칙

우리는 클래스에 BEM (Block Element Modifier) 네이밍 규칙을 따릅니다. 예를 들어:
- `.block`은 블록 수준의 구성요소에 대한 것입니다.
- `.block__element`는 블록 내의 요소에 대한 것입니다.
- `.block--modifier`는 블록의 모양을 변경하는 수정자에 대한 것입니다.

## 유지 보수 가이드라인

- 유지 관리가 가능하도록 스타일의 너무 많은 중첩을 피하세요. 최대 3단계까지 고려하십시오.
```

- 코딩 문제 해결 시리즈를 검토하실 흥미가 있으시다면 확인해보세요!
- 또한 더 많은 기사를 읽고 싶다면, 프로그래머 시리즈를 확인해보세요!