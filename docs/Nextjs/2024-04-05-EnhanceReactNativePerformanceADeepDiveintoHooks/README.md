---
title: "React Native 훅을 사용해서 성능 향상하는 방법"
description: ""
date: 2024-04-05 17:50
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "Enhance React Native Performance: A Deep Dive into Hooks"
link: "https://medium.com/@tonimaxx/enhance-react-native-performance-a-deep-dive-into-hooks-675515c58e69"
---


# 최적의 사용자 경험을 발휘하기

리액트 네이티브 애플리케이션을 개발하는 과정은 대개 핵심 비즈니스 로직부터 시작되며, 이는 앱의 핵심입니다. 그러나 개발이 진행될수록 사용자 경험(UX)이 주요 관심사가 됩니다. 사용자들은 원활한 상호작용, 신속한 응답 및 빠른 콘텐츠 전달을 기대합니다. 여기서 성능 최적화가 등장하는데, 이는 React Hooks의 마법이 빛나는 중요한 단계로, 앱의 응답성을 중요하게 높여줍니다.

본 안내서에서는 React 16.8에서 소개된 React Hooks의 강력한 기능을 소개하고, 이를 활용하여 React 네이티브 애플리케이션의 성능을 향상시키는 방법에 대해 알아볼 것입니다. 구체적인 예시로서 Carousel 컴포넌트를 살펴보며, 각각의 훅의 특이한 점을 살펴보고 앱의 효율성을 높이는 잠재력을 발휘할 것입니다.

# TLDR; 너무 길어서 읽지 않았다: 실제 시나리오와 함께 한 요점

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

- React.memo 강조: CarouselB와 같은 컴포넌트를 React.memo로 감싸어 불필요한 다시 렌더링을 피함으로써 응용 프로그램의 성능을 향상시킬 수 있습니다. 예를 들어, 홈 화면의 다중 이미지 캐러셀에 React.memo를 구현하면 탐색 중 반복적인 이미지 로드를 피해로드 시간을 크게 줄이고 사용자 경험을 향상시킬 수 있습니다.

다중 캐러셀을 최적화하거나 상호 작용 요소를 포함하는 목록을 관리하는 홈 화면과 같은 실제 시나리오에 이러한 전략을 통합하면 React 응용 프로그램의 성능과 사용자 만족도를 높일 수 있습니다.

# 성능 최적화된 훅으로 React Native 강화하기

React Hooks는 함수형 컴포넌트에서 상태 및 사이드 이펙트를 관리하기 위한 간소화된 접근 방식을 제공합니다. 성능 향상 능력으로 두드러지는 주요 훅은 다음과 같습니다:

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

- useState: 함수형 패러다임에서 상태 업데이트를 관리하여 불필요한 다시 렌더링을 줄이고 성능을 향상시킵니다.
- useEffect: 데이터 가져오기와 타이머와 같은 부작용을 조정합니다. useEffect 내에서 데이터 가져오기를 전략적으로 배치함으로써 다시 렌더링을 최적화하여 실제 데이터 변경 시에만 발생하도록 보장합니다.
- useMemo: 무거운 계산을 기억하는 데 도움이 됩니다. 복잡한 함수 결과를 저장하고 의존성이 변경될 때만 이러한 계산을 다시 방문함으로써, useMemo는 불필요한 처리를 크게 줄입니다.
- useCallback: useMemo를 병렬로 맞추어 함수를 기억합니다. 특히 자식 구성 요소에 전달된 속성에 대해 매우 유익합니다. 각 렌더링마다 중복 함수 생성을 피하므로 효율성이 향상됩니다.

그리고 다른 하나는, React.memo, 나의 영웅

### React.memo: 컴포넌트 효율 향상

React.memo는 React 16.6에 도입된 하이어오더 컴포넌트로, 함수형 컴포넌트를 기억하는 도구 역할을 합니다. 속성이 변경되지 않을 때 불필요한 다시 렌더링을 방지함으로써, React.memo는 컴포넌트의 재생성 및 다시 렌더링 작업을 크게 줄여주어 React Native 성능에 큰 도움이 됩니다.

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

React.memo가 작동하는 방식:

- 함수형 컴포넌트를 감싼다.
- 연속된 렌더링에서 새로운 props와 이전 props 간 얕은 비교를 수행한다.
- props가 일정하면 다시 렌더링을 우회하고 대신에 마지막으로 렌더링된 출력물을 재사용한다.
- 변경 사항이 감지되면 업데이트된 props로 컴포넌트를 다시 렌더링한다.

참고: React.memo는 얕은 props 비교로 기본 설정되어 있어 객체나 배열 내부의 심층적인 변경을 간과할 수 있습니다. 복잡한 prop 구조에 대한 사용자 정의 비교 함수를 구현하는 것이 필요할 수 있습니다.

# 케이스 스터디: 훅을 통한 캐로셀 컴포넌트 최적화

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

CarouselB 컴포넌트를 고려해 보세요 — 이미지를 순환하는 디스플레이 기능입니다. 성능을 향상시키려면 일반적인 함정을 식별하고 수정해야 합니다:

도전 과제:

- 불필요한 다시 렌더링: 빈번하고 정당하지 않은 다시 렌더링은 사용자 경험을 저하시킬 수 있으며 시각적인 끊김으로 이어질 수 있습니다.
- 비효율적인 데이터 가져오기: 캐러셀 데이터를 가져오는 랙은 콘텐츠 전달을 지연시킬 수 있어 사용자의 인내심을 시험할 수 있습니다.

진단:

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

문제는 suboptimal useEffect 구현 또는 불충분한 상태 관리로 인한 과도한 다시 렌더링에서 비롯될 수 있습니다. 또는 함수형 컴포넌트에 대한 React.memo 무시도 그 중 하나일 수 있습니다.

해결책:

- 효율적인 데이터 가져오기: 데이터 검색을 위해 useEffect 훅을 활용하고 가져온 데이터를 종속성으로 정의하여 재렌더링이 실제 데이터 업데이트와 일치하도록 보장합니다.
- 조건부 렌더링: 조건부 렌더링을 도입하여 로딩 단계를 신호로 보내어 조기 컴포넌트 렌더링을 방지하고 사용자 참여도를 높입니다.
- React.memo를 활용한 최적화: React.memo 내부에 CarouselB를 캡슐화하여 다시 렌더링을 최소화하고 성능을 유지하면서 코드를 최소한으로 조정합니다.

여기까지가 이해할 만큼입니다!

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

<img src="./img/EnhanceReactNativePerformanceADeepDiveintoHooks_0.png" />

# 그러나, 더 자세히 내 시나리오를 공유하고 싶습니다.

이전:

```js
// CarouselB의 초기 구현
function CarouselB({
   snaptoitem,
   metadata,
   template = "default",
   titlebgcolor = "black",
   ...
   ...
   ...
}) 
{
...
...
...
}
export default withCarouselContext(CarouselB);
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

```js
// 단순히 MemoizedCarouselB로 CarouselB를 감싸 React.memo를 구현합니다.
const MemoizedCarouselB = React.memo(CarouselB, (prevProps, currentProps) => {
  // 비교 로직
  return (
    prevProps.query === currentProps.query &&
    prevProps.url === currentProps.url &&
    prevProps.data === currentProps.data 
  );
});

function CarouselB({
   snaptoitem,
   metadata,
   template = "default",
   titlebgcolor = "black",
   ...
   ...
   ...
})
{
...
...
...
}

export default withCarouselContext(MemoizedCarouselB);
```

더 들어가기: CarouselB 컴포넌트의 특별한 여정

우리는 UX를 완벽하게하기 위해, 일반적인 캐러셀에 맞춘 CarouselB를 소개했습니다. 동적 쇼케이스로 상상되는 우리의 홈 화면은 단 하나가 아니라 다섯 개의 CarouselB 인스턴스를 자랑하며, 각각 15개의 생생한 이미지로 넘쳐납니다. 이 설계 선택은 임의적이지 않습니다. 홈 화면을 포괄적인 탐색 허브로 변신시키는 비전에서 비롯됩니다. 다양한 옵션을 미리 제시함으로써, 사용자 이동 단계를 최소화하고 원하는 콘텐츠로 신속하고 직접적인 여정을 가능케 하려고 합니다.

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

도전: 네비게이션 유연성 vs. 성능

그러나 야망은 종종 장애물을 동반합니다. 사용자 네비게이션을 향상시키기 위해 설계된 기능에서 발생한 주목할만한 도전 과제는 CarouselB 구성 요소에서 나타났습니다. 화면 간 이동하는 사용자들은 눈에 띄는 문제를 마주했습니다. 홈 화면으로 돌아갈 때마다 캐러셀을 다시로드하는 문제가 발생했고, 이는 중복된 데이터를 가져오게 만들었습니다. 이는 사용자 경험의 유동성을 방해할 뿐만 아니라 앱의 인식된 성능과 효율성을 떨어뜨리는 결과를 초래했습니다.

근본적인 문제는 네비게이션 전환 사이에서 상태를 유지하지 않은 것입니다. 각 화면 재방문은 새로 시작하는 것으로 처리되어, 우리의 캐러셀을 다시 초기화하고 동일한 이미지를 재로드하게 되었습니다. 이 중복은 대역폭에 대한 우려뿐만 아니라 사용자 경험에 심각한 문제로 작용했습니다. 반복적인 로딩 화면과 불필요한 지연으로 나타났습니다.

탐구: 캐싱에서 메모리제이션으로

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

이 문제를 해결하기 위해 다양한 해결책을 탐구했습니다. 처음에는 이미지 캐싱이 유망한 방법으로 보였습니다. 이전에 로드된 이미지를 저장함으로써 로드 시간을 상당히 줄일 수 있었을 것입니다. 그러나 실험 결과, 캐싱이 장점을 가지고 있지만, 우리의 구체적인 사용 사례 요구 사항과 완전히 일치하지 않았고 핵심 문제인 구성 요소 재초기화에 대응하지 못했습니다.

보다 통합적인 해결책을 찾기 위해 React의 최적화 도구인 React.memo로 나아갔습니다. CarouselB 구성 요소를 React.memo로 감싸는 것으로 문제에 접근하려고 했습니다. 가설은 간단했습니다. CarouselB 구성 요소의 props가 변경되지 않는 한 불필요한 다시 렌더링을 방지할 수 있다면, 화면 전환에서 상태와 내용을 유지할 수 있을 것입니다.

발견: React.memo가 구조를 구했습니다

결과는 변화가 혁명적이었습니다. React.memo를 구현하는 것이 최적화 노력의 중심 요소가 되었습니다. 이 변경만으로도 홈 화면의 성능과 사용자 경험을 현격하게 향상시켰습니다. 이제 사용자가 다른 화면으로부터 돌아오면, 모든 캐로셀이 그대로 남아 있고, 이미지가 선명하게 표시되어 빠르게 반응하는 인터페이스가 사용자를 기다리게 됩니다.

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

중요한 개선 사항은 탐색 순조로움과 콘텐츠 안정성을 향상시키면서 최소한의 코드 수정으로 이루어졌습니다. 이는 React의 메모이제이션의 힘을 입증하는 사례입니다. 더불어, 이 방법론은 사용자 경험을 최적화하고 불필요한 작업을 줄이며 앱의 응답성을 향상시킴으로써 우리의 기본적인 디자인 철학과 완벽하게 부합했습니다.