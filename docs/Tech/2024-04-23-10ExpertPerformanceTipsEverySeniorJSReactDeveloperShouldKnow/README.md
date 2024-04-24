---
title: "시니어 JS React 개발자라면 알아야하는 성능 향상 10가지 방법"
description: ""
date: 2024-04-23 23:07
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "10 Expert Performance Tips Every Senior JS React Developer Should Know"
link: "https://medium.com/@learnwithstatanalytica/10-expert-performance-tips-every-senior-js-react-developer-should-know-a7d3e469d506"
---


React 애플리케이션을 멋지게 구축하는 것은 흥미로운 일이지만, 빠르고 부드럽게 유지하는 것은 좋은 개발자와 훌륭한 개발자를 구분짓는 중요한 부분이에요. 시니어 개발자로서, 우리의 임무는 복잡한 기능과 대량의 데이터가 포함된 React 앱이 원할하게 실행되도록 보장하는 것이죠.

![이미지](./img/10ExpertPerformanceTipsEverySeniorJSReactDeveloperShouldKnow_0.png)

이 기사는 React 전문가가 되도록 도와줄 10가지 성능 향상 팁을 제공해요. 

1. 컴포넌트를 가볍고 효과적으로 유지해요.

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

주방을 상상해봐요. 한 번에 너무 많은 요리사(코드)가 요리(렌더링)를 하려고 하면 혼란스럽죠. React 컴포넌트를 작고 집중된 조각들로 나눠보세요. 이렇게 하면 이해하고 유지보수하기 쉬워지며, 중요한 것은 렌더링이 빨라집니다. 각 요소가 특정 작업을 처리하도록 생각해보세요. 예를 들어 제품 카드를 표시하거나 양식을 처리하는 등의 작업을 말이죠.

2. 함수형 컴포넌트가 당신의 친구입니다

React는 두 가지 주요한 컴포넌트 작성 방법을 제공합니다: 클래스 기반과 함수형. 둘 다 작동하는데, 일반적으로 함수형 컴포넌트가 가벼우며 이해하기 쉬우며 접근하기 쉽습니다. 특히 다음 팁과 결합했을 때 더 나은 성능을 보입니다.

3. 메모이제이션 (React.memo와 PureComponent) 기술을 마스터하세요

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

가끔 React는 속성이 변경되지 않았더라도 구성 요소를 다시 렌더링할 수도 있어요. 이러한 불필요한 작업은 성능을 저하시킬 수 있어요. 이를 방지하기 위해 우리는 메모이제이션 기술을 사용해요.

- React.memo: 이것은 함수형 구성 요소에 대한 마법 같은 기술이에요. React.memo로 구성 요소를 감싸면 속성이 실제로 변경될 때에만 다시 렌더링해요.
- PureComponent: 이것은 메모이제이션을 위해 도움이 되는 클래스 구성 요소에요. 속성 변경을 자동으로 확인하고 다시 렌더링하기 전에 검사해요.

메모이제이션은 친구의 생일을 기억하는 것과 비슷해요 — 한 번만 계산하면 돼요!

4. 코드 분할: 필요할 때만 필요한 것을로드하세요.

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

영화 한 편을 플레이할 수 있기 전에 전체 영화를 다운로드해야 한다고 상상해보세요. 이상하죠, 그렇지 않나요? 코드 분할을 통해 React 애플리케이션을 더 작은 조각으로 나눌 수 있습니다. 처음 로드 속도가 빨라지는 이유는 사용자가 현재 보는 화면에 필요한 코드만 다운로드하기 때문입니다. 이는 크고 복잡한 프로젝트에 도움이 됩니다.

5. 가상화: 대용량 목록을 빠르게 만들기

아이템의 긴 목록은 성능을 크게 떨어뜨릴 수 있습니다. 가상화가 해결책이 됩니다! 한 번에 전체 목록을 렌더링하는 대신 보이는 아이템만 렌더링하고 사용자가 스크롤할 때 다시 렌더링합니다. 수천 개의 아이템이 있더라도 모든 것이 원할하게 유지됩니다.

6. 불변 데이터 사용하기 (상태 직접 변경하지 않기)

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

React는 이전 상태와 새 상태를 효율적으로 비교하여 리렌더링이 필요한지를 결정합니다. 상태를 직접 변경하면(기존 데이터를 변경하면) 이 비교가 까다로워지고 예상치 못한 리렌더링이 발생할 수 있습니다. 대신, 원하는 변경사항이 있는 새 상태 객체를 만드세요. 이렇게 하면 코드가 명확하고 성능이 향상됩니다.

7. 외부 스타일시트를 좋아하세요

JSX 내부의 인라인 스타일은 편리할 수 있지만 성능을 위해 외부 스타일시트를 사용하는 것이 더 좋을 수 있습니다. 브라우저에 의해 캐시된 외부 스타일시트는 한 번만로드되기 때문에 이후의 페이지 로드가 더 빨라집니다.

8. 제3자 라이브러리를 활용하세요 (그러나 신중하게 선택하세요!)

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

거의 모든 것에 대해 React용 라이브러리가 있어요. 이 라이브러리들은 정말 유용하지만, 너무 많이 추가하면 애플리케이션 크기가 커지며 성능이 떨어질 수 있어요. 유지보수가 잘 되고 지속적으로 개발되는 라이브러리를 선택하고, 정말 필요한 기능만 사용하세요.

9. 프로덕션 빌드: 실제 환경에 최적화하기

개발 빌드는 디버깅에 좋지만, 속도를 최적화해야 해요. React 애플리케이션을 배포할 때는 프로덕션 빌드 프로세스를 사용해야 해요. 코드를 최소화하고 사용되지 않는 부분을 제거해 실제 환경에서 원활하게 실행되도록 해요.

10. 프로파일 및 분석: 성능 탐정이 되어보세요

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

마지막 팁이 가장 중요할지도 모릅니다. 측정할 수 없으면 개선할 수도 없습니다. 프로파일러를 사용하면 React 앱의 성능을 저하시키는 부분을 찾을 수 있습니다. 이러한 도구들은 코드가 시간을 낭비하는 지점을 정확하게 보여주어 속도를 빠르게 만들 수 있도록 집중할 수 있게 해줍니다.

보너스 팁: 호기심을 가지고 계속 학습해주세요!

React 개발의 세계는 끊임없이 발전하고 있습니다. 새로운 성능 최적화 기술과 라이브러리가 계속해서 등장합니다. 호기심을 가지고 실험을 하며 계속해서 학습하여 React 애플리케이션이 혁신적인 위치를 유지할 수 있도록 하세요.

이 전문가들의 팁을 따라가면 React 성능 전문가가 되는 길에 한 발짝 다가갈 것입니다. 기억하세요, 빠르고 부드러운 사용자 경험이 정말로 훌륭한 React 애플리케이션을 각별하게 만드는 것입니다.