---
title: "디자인 시스템 - 디자인 토큰 시작하기"
description: ""
date: 2024-03-29 15:50
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "Where to Start with Design Tokens"
link: "https://medium.com/@mcapoz/where-to-start-with-design-tokens-fbfd1c168101"
---


디자인 시스템을 연구하고 있다면, "디자인 토큰"이라는 용어를 접해본 적이 있을 것입니다. (처음 들어보았다면 걱정하지 마세요! 여기에서 읽어볼 수 있어요.) 심지어 이 용어를 들어봤다 하더라도, 그들이 무엇이며 어디에서 시작해야 하는지 정말 이해하기 어려울 수 있어요.

디자인 토큰은 색상, 타이포그래피, 간격과 같은 스타일 속성을 미리 결정된 구조로 저장하는 방식입니다. 디자인 토큰은 직접적으로 하드 코딩된 스타일 데이터 대신으로 디자이너와 개발자가 일관된, 매력적인 레이아웃을 구축함으로써 빠르게 재디자인을 수행하고 응용 프로그램에 테마 레이어를 추가할 수 있도록 하는 대안입니다.

디자인 토큰을 변수로 생각할 수 있습니다. 이 변수는 16진 코드나 픽셀 값과 같은 기본 요소를 가리키는 것이죠.

내 의견으로는, 디자인 토큰은 디자인 시스템의 세계를 천천히 체험할 수 있는 좋은 방법입니다. 저는 디자인 시스템을 5개의 레이어로 생각합니다. 디자인 토큰은 그 시스템의 가장 작은 구성 요소입니다(또는 첫 번째 레이어). 또한 멀티 플랫폼 디자인 시스템을 해제하는 열쇠 역할을 합니다.

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

보통 디자이너와 개발자가 앱 작업을 시작할 때, 색상 및 글꼴과 같은 스타일 데이터를 구조화하고 중앙 집중식으로 정리하는 방법을 만들지 않습니다. 이것은 몇 년 동안은 전혀 문제가 되지 않지만, 결국 팀이 다음과 같은 문제 중 하나에 봉착하게 됩니다:

- 마케팅부서가 사이트를 재디자인하길 원하지만, 디자인 파일과 코드베이스 전체에 걸쳐 하드코딩된 색상은 추적하고 변경하기가 너무 어렵습니다.
- 팀이 다크 모드를 추가하길 원하지만, 중앙 집중식 스타일 데이터가 없어서 매우 어렵다는 것을 깨닫게 됩니다.
- 팀이 각각을 처음부터 완전히 빌드하지 않고도 여러 응용 프로그램을 지원하기를 원합니다. 

그래서 한 번 이러한 상황에 처하게 되면, 무엇을 해야 할까요?

# 1. 디자인 토큰에 투자하기

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

첫 번째 단계는 위에 나열된 세 가지 상황에 대응하는 좋은 도구로 디자인 토큰을 인식하는 것입니다. 이 시점에서 당신은 당신의 팀에게 연구하고 디자인 토큰을 실행하는 데 투자할 것을 권장해야 합니다.

## 2. 교육과 홍보

당신의 동료 중 일부가 디자인 토큰에 대해 들어본 적이 전혀 없을 가능성이 높습니다. 이들에게 이 도구의 가치에 대해 교육하고 자체 연구를 할 것을 권장해야 합니다. Theme UI의 데모를 활용하여 주장을 뒷받침하거나 직접 프로토 타입을 만들어 볼 수 있습니다.

## 3. 토큰을 구현할 방법 선택하기

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

토큰을 구현하는 방법에는 몇 가지 옵션이 있어요. 많은 팀이 자체 구조와 명명 체계를 구현하는 것을 선택해요. 이 방식을 택하면 외부 라이브러리에 의존하지 않아도 되어요. 중요한 점은 토큰의 이름이 특히 일반적으로 지어졌는지 확인하는 거예요! Salesforce와 같은 기업의 예제를 보고 토큰을 어떻게 구조화할지 아이디어를 얻을 수 있어요. 이 주제에 대해 더 자세히 살펴보려면 여기를 확인하세요.

또한 Theme UI와 같은 서드파티 라이브러리를 사용할 수도 있어요. Theme UI를 사용하면 테마 사양에 따라 토큰을 구현할 수 있고, sx 속성 및 variants 키와 같은 도움이 되는 구문 설탕이 제공돼요. 라이브러리가 맞지 않더라도 테마 사양을 영감으로 활용할 수 있어요.

# 4. 토큰 구현하기

이 시점에서 팀의 디자이너와 협의하여 토큰의 이름과 구조를 결정하고, 구조화된 스타일 데이터를 포함하는 객체를 만들어야 해요. 마지막 단계는 애플리케이션의 구성 요소를 수정하여 하드코딩된 값이 아닌 토큰에서 읽도록 설정하는 거예요.

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

만약 당신의 토큰이 이렇게 생겼다면:

```js
const tokens = {
  colors: {
    primary: "pink",
  },
};
```

당신의 컴포넌트는 더 이상 이렇게 생겨보이지 않을 거예요:

```js
const Nav = styled("nav")`
  color: pink;
`;
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

