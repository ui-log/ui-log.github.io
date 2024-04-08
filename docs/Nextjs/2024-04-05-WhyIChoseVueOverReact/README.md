---
title: "내가 리액트 대신 뷰를 선택한 이유 😎"
description: ""
date: 2024-04-05 09:06
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "Why I Chose Vue Over React 😎"
link: "https://medium.com/@sarahisdevs/why-i-chose-vue-over-react-3ed520bcacb8"
---


![이미지](./img/WhyIChoseVueOverReact_0.png)

# 소개 😊

자바스크립트 생태계는 다양한 라이브러리와 프레임워크로 가득한데, 각각이 독특한 방식으로 문제를 해결하기 위한 접근법을 제공합니다. 이 많은 선택지는 주는 축복이자 저주일 수 있는데, 특히 입문자들은 좋은 것과 나쁜 것을 구별하기 어려울 수 있습니다. 많은 경쟁자 중에서 React와 Vue가 두드러지게 빛을 발합니다. 이 글에서는 Vue를 선택한 이유와 개인적인 경험에 대해 알아보겠습니다.

# 나의 여정 🚀

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

내 여정은 리액트로 시작되었어요. 당시에는 HTML, CSS, 자바스크립트 과정 몇 개만 수강한 수준이었죠. 리액트가 엄청 인기가 많아서, 그걸 머리 깊이 파고들며 Next.js와 최근에 출시된 앱 라우터를 사용해보기로 했어요. 제 첫 프로젝트는 꿈을 공유하는 메시지 보드였죠. 권한 부여, 프로필 페이지, 폼, 애니메이션 같은 기능들이 탑재돼서 만들었는데, 만족스러운 성과였어요. 그런데 호기심이 자꾸 더 해져서 더 탐험하게 되었죠.

# 뷰를 발견하다 🌟

이 탐험 중에 뷰.js를 우연히 발견했어요. 처음에는 문서가 조금 어렵게 느껴졌지만, 금방 사랑에 빠졌어요. 이제 자신있게 말할 수 있어요. 뷰가 제가 가장 선호하는 최신 웹 프레임워크인 거죠. 뷰의 학습 곡선, 문서, 그리고 개발자 친화적인 API가 이 선호도에 상당한 영향을 끼쳤어요.

# 학습 곡선 📚

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

Vue의 문서는 프레임워크의 모든 측면을 설명하는 데 뛰어나지요. 한편으로는 React의 문서는 주요 사항과 숨은 동작에 대한 자세한 정보가 부족한 경우가 많아 React 개발자들이 이해에 공백을 느낄 수 있습니다. Vue는 Vueschool.io와 Vuemastery.com과 같은 공식 학습 코스도 제공하여 새로운 이들에게 훌륭한 시작점을 제공해요. 더불어 Vue의 API는 더 개발자 친화적이며, React보다 응용 프로그램을 더 잘 제어할 수 있는 잘 설명된 도구 세트를 제공합니다. 이로써 새로운 개발자들이 실수를 우발적으로 줄일 수 있으며 개발 프로세스 중에 Vue가 관용적이란 장점도 있어요.

# 더 좋은 장비 🛠️

React와 비교했을 때 Vue의 장점 중 하나는 의견이 분명한 API인데요. 예를 들어 Vue에서는 React의 복잡한 "useEffect"를 제거하여 단일 도구 내에서 여러 목적을 제공하는 필요성을 없애요. Vue는 이를 단일하고 다용도로 사용할 수 있는 추상화로 단순화합니다. 또한 Vue는 자식 및 부모 구성요소 간의 데이터 바인딩을 좀 더 쉽게 다루기 위해 양방향 데이터 바인딩을 제공해요. 이 방법은 React의 동등 요소보다 간결하고 이해하기 쉽습니다.

# 컴파일러, 라이브러리가 아닌 📜

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

Vue의 독특한 기능은 .vue 파일용 컴파일러로, 순수 JavaScript 표현식에 의존하는 React와는 다릅니다. Vue의 scoped style 블록은 별도의 CSS 파일이 필요없이 CSS-in-JS 라이브러리에 대한 의존도를 줄입니다. 또한 Vue는 HTML 및 innerHTML을 처리하는 더 나은 규칙을 제공하여 개발 프로세스를 간소화합니다. 게다가 Vue는 속성 상속을 보다 직관적으로 처리하여 자식 구성 요소에 속성을 전달하기 쉽게 합니다.

# 슬롯이 더 좋은 자녀 🎰

Vue의 슬롯은 템플릿을 자식 구성 요소에 전달하는 뛰어난 방법을 제공합니다. React의 children 속성과 비교할 때 더 많은 유연성과 동적 기능을 제공합니다. Vue의 슬롯을 이용하면 여러 개의 이름이 지정된 슬롯을 생성하고 데이터를 부모 구성 요소에 노출시켜 재사용 가능한 구성 요소를 손쉽게 만들 수 있습니다.

# 렌더링은 우리에게 맡겨 💡

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

Vue의 렌더링 메커니즘은 React보다 더 고급이어서 변경 사항에 영향을 받는 DOM 노드만 추적하고 수술적으로 업데이트합니다. 이 방식은 "useMemo"나 "useCallback"과 같은 복잡한 기술이 필요 없게 하여 더 원활한 개발 경험을 제공합니다.

# 내장 기능 🧰

Vue는 Transition 컴포넌트와 같은 유용한 유틸리티를 제공하며, React는 비슷한 기능을 달성하기 위해 종종 외부 라이브러리가 필요합니다. Vue의 내장 솔루션은 애니메이션과 컴포넌트 캐싱을 간편하게 만듭니다.

# 결론 🎉

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

Vue와 React 사이의 전투에서는 명확한 승자가 없습니다. 두 프레임워크는 각자의 장점이 있으며, 최종 선택은 개인의 선호도와 프로젝트 요구사항에 따라 결정됩니다. 경험이 많은 싸움꾼처럼 React는 트릭이 있지만 연식의 징후를 보이고 있습니다. 반면에 새로운 채점자 중 하나로 Vue는 민첩하고 오픈 소스이며 열정적인 커뮤니티에 의해 주도됩니다. 두 프레임워크 모두 팬을 가지고 있고 웹 개발의 진화에 기여하고 있습니다. 결정을 내리기 전에 다양한 도구를 탐색하고 숙달하는 것이 중요합니다.

마지막으로, 가장 중요한 것은 기본 개념을 이해하는 것이며, 이 지식은 선택한 프레임워크에 상관없이 여러분을 잘 섬기게 될 것입니다. 웹 개발의 여정을 즐기며 즐거운 시간 보내세요! 😄👨‍💻🚀

“Sarah Dev의 통찰력 있는 콘텐츠를 더 알아보세요. 멤버십에 대한 최신 기사를 탐험하고 지식의 세계를 열어보세요! 📚🚀 여기서 읽어보세요: Medium에서 읽기”

“Sarah Dev의 작업을 지원하고 지지자 커뮤니티에 가입하세요. 그녀의 프로젝트에 기여하고 멤버로서 독점 혜택을 누리세요! ☕💼 지금 가입하세요: Buy Me a Coffee에서 지원하기”

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

"Sarah Dev의 프리미엄 콘텐츠 및 리소스에 액세스하세요. 그녀의 강의를 통해 실력과 지식을 향상시키세요. 🛍️💡 그녀의 Gumroad 스토어를 살펴보세요: Gumroad 방문"