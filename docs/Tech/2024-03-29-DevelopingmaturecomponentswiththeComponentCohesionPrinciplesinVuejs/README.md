---
title: "Vue.js에서 컴포넌트 개발하기"
description: ""
date: 2024-03-29 15:56
sidebarDepth: 0
tag: Tech
thumbnail:
originalTitle: "Developing mature components with the Component Cohesion Principles in Vue.js"
link: "https://medium.com/js-dojo/developing-mature-components-with-the-component-cohesion-principles-in-vue-js-1ef7a6cbbb4b"
---

이 글에서는 로버트 C. 마틴(일명 Uncle Bob)의 책인 "Clean Architecture: A Craftsman’s Guide to Software Structure and Design"에 설명된 컴포넌트 응집 원칙을 바탕으로 성숙한 컴포넌트뿐만 아니라 컴포넌트 간의 성숙한 관계를 만들기 위해 노력할 것입니다.

# 요약

컴포넌트란 무엇인가요?

재사용/릴리스 동등 원칙 (REP)
예시 및 실용적인 고찰

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

Common Closure Principle (CCP)  
실용적인 예시

Common Reuse Principle (CRP)  
반성

세 가지를 적용할 수 없어요...

결론

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

# 컴포넌트란 무엇인가요?

SPA(단일 페이지 응용프로그램) 프레임워크 및 생성 라이브러리의 등장으로 컴포넌트에 대한 이야기를 더 많이 듣게 되었습니다.

이러한 환경에서는 컴포넌트를 명시적으로보다는 내포적으로 이해하는 것이 간단합니다.

의견력이 더 강한 프레임워크를 사용하지 않는 환경에서는 컴포넌트를 구별하기가 더 어려워집니다. 따라서, Uncle Bob의 정의를 따르게 됩니다:

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

위에 언급된 것을 보충해서 Vue.js에는 vue 파일이 있습니다!

많은 사람들이 Vue.js 2의 컴포넌트를 초능력을 갖춘 클래스로 이해합니다. 이러한 원칙들의 이해는 클래스보다 약간 더 세밀한 수준에서 이루어집니다.

그러나 나는 이러한 원칙들을 활용하여 보다 성숙하고 전문적인 컴포넌트 및 그들 사이의 관계를 만들 수 있다고 믿습니다.

이 관점을 고려할 때, 각 원칙을 설명하고 그에 따른 예제나 고찰을 제시하겠습니다.

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

# 재사용/릴리스 동등의 원칙 (REP)

이 원칙은 구성 요소에 대해 성숙한 재사용을 제공하도록 지시합니다. 이러한 재사용은 각 구성 요소의 출시를 추적하는 것과 관련이 있습니다.

일상에서 사용하는 응용 프로그램의 새 버전을 출시하는 것과 동일한 가정을 따라, 새로운 업데이트가 나타날 때 우리는 업데이트를 진행할지 말지를 결정하기 위해 변동 사항을 확인합니다.

재사용 가능한 구성 요소를 제공할 때, 출시, 기능 또는 이러한 구성 요소를 사용하는 구성 요소를 충분히 추적하지 않으면, 이들은 맹목적입니다.

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

결론적으로, 이 아이디어는 이러한 컴포넌트들이 따로 릴리즈되고 버전이 관리되며 코드의 안전한 재사용을 보장하기 위해 추적된다는 것입니다.

## 예시와 실제 반영

Vue.js 컴포넌트의 맥락에서 프레임을 세우면, 대부분의 경우 우리는 Pull Request를 사용하여 컴포넌트를 출시합니다. 이렇게 생각하면, 잘 정의된 지속적인 전달 환경에서는 재사용을 제공하는 각 컴포넌트에 대해 별도의 Pull Request를 생성하는 것이 합리적입니다.

이를 통해 변경 사항의 문서화와 단언 테스트를 통한 가능한 설명을 남길 수 있는 공간을 만들었습니다.

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

이렇게 읽는 것은 명백한 것처럼 보이지만, 우리 중 몇 명이 이 간단한 예방 조치를 우회하지 않고 의존물의 안전을 희생하는 것일까요?!

# 공통 폐쇄 원칙 (CCP)

저자 본인의 말대로, 이 원칙은 SOLID 단일 책임 원칙(SRP)을 컴포넌트에 대해 다시 정의한 것입니다.

간단히 말해, 이는 컴포넌트가 변경의 여러 가지 이유를 가지면 안 된다는 것을 말합니다. 우리에게 어떤 항목들이 함께 그룹화되어야 하는지 알려줍니다 — "항목"이라는 적응어를 사용하는데, 원본 내용은 클래스를 다루기 때문입니다.

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

여기서 전하는 바는 변경 사항이 여기저기 흩어지는 것보다 한 곳에 모이는 것이 더 바람직하다는 것입니다.

## 실용적인 예시

상태와 도시 두 가지 입력이 들어 있는 컨테이너 컴포넌트가 있다고 가정해 봅시다. 사용자가 상태를 선택하면 해당 상태에 포함된 도시 목록을 반환하는 임의의 지점에 비동기 호출을 수행할 것입니다.

컨테이너가 상태 입력과 해당 비동기 호출 로직을 함께 포함하고 있을 경우 이 컴포넌트를 변경해야 할 이유는 컨테이너 로직(지정되지 않음)과 입력 로직 두 가지입니다. 언급되지 않은 도시 입력의 가능한 로직까지 고려하지 않았다는 점도 말씀드리지 않습니다.

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

이 구성 요소를 유지 관리할 때는 서로 다른 이유로 3가지 로직에 주의해야 합니다. 이 원리를 읽는 손의 방향과 반대로 이루어집니다.

# 공통 재사용 원칙 (CRP)

이 원칙의 초점은 종속 구성 요소가 필요로하지 않는 리소스에 의존하지 않는 것입니다.

저자에 따르면 다른 구성 요소의 기능에 의존하는 것은 약한 종속성을 만들며, 사용 중인 것이 보다 깊은 변경을 요구하는 경우 해당 변경은 그것을 사용하는 구성 요소에도 책임이 있어야 합니다. 그것을 사용하는 구성 요소가 변경에 대해 관심이 없더라도요.

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

이 원칙은 함께 있어야 하는 항목보다는 분리되어야 하는 항목에 대해 더 많이 이야기합니다.

## 반성

SOLID Interface Segregation Principle (ISP)과 관련이 깊습니다. 여기서는 사용하지 않는 항목을 포함하고 있는 항목에 의존해서는 안 된다는 것입니다.

CCP와 모순이 보입니다. 한쪽은 같은 이유로 변경되는 구성 요소들을 결합하는 것에 대해 이야기하지만, 다른 한쪽은 구성 요소 간의 약한 의존성을 해제하는 것에 대해 이야기합니다.

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

# 세 가지를 적용할 수가 없어서요...

작가가 밝히는 대로, 이 원칙들은 서로 격렬히 충돌합니다. REP와 CCP는 우리 구성 요소를 늘리는 것을 제안하는 반면 CRP의 독해는 반대로 작용합니다.

이 원칙들을 시행함으로써 우리는 두 가지만 성취할 수 있습니다. 하나는 포기해야 합니다.

아래 다이어그램(구성 요소 응집에 대한 긴장 다이어그램)에서는 반대편 원칙을 버릴 때 드는 비용을 설명하는 엣지들이 있습니다.

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

이러한 원칙을 따르는 구성 요소의 제정에 대한 정답이나 오답은 없습니다.

그들은 프로젝트의 시간과 순간에 따라 필요로 하는 것과 더 연관이 있습니다.

가장 중요한 것을 식별하고 적용하는 데에 훌륭한 기술이 숨겨져 있습니다.

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

# 참고 자료

- Clean Architecture: A Craftsman’s Guide to Software Structure and Design by Robert C. Martin
