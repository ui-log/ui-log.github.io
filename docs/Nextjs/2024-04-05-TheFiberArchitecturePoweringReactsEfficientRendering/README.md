---
title: "파이버 아키텍처: React의 효율적인 렌더링을 원동력으로"
description: ""
date: 2024-04-05 18:16
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "The Fiber Architecture: Powering React’s Efficient Rendering"
link: "https://medium.com/@thisisshuraim/the-fiber-architecture-powering-reacts-efficient-rendering-812e931b5fa1"
---


React를 한동안 사용해 왔다면, 대규모 어플리케이션에서 가끔 발생할 수 있는 성능 문제에 대해 이미 알고 있을 것입니다. React의 가상 DOM과 diffing 알고리즘은 혁신적이지만, 프론트엔드 어플리케이션이 확장됨에 따라 렌더링 프로세스가 병목 현상이 될 수 있습니다. 이때 React Fibers가 등장하는데요 — React 16에서 소개된 완전한 아키텍처 개편으로 렌더링과 업데이트 처리 방식을 근본적으로 변경합니다.

# Fiber 아키텍처

간단히 말하면, Fiber 아키텍처는 React가 조정(reconciliation)을 수행하는 새로운, 더 나은 그리고 효율적인 방법이라고 할 수 있습니다. 이 아키텍처에 대해 조금 더 깊이 파보도록 하죠.

# 잠깐, 조정이란 무엇을 의미할까요?

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

재조정은 컴포넌트 트리에서 상태 변경이나 업데이트가 발생할 때 DOM 트리에 어떤 변경이 필요한지 결정하는 과정입니다. 이것은 React의 렌더링 프로세스의 중요한 부분이며, React가 전체 UI를 다시 렌더링하지 않고 효율적인 업데이트를 달성하는 방법입니다.

# 재조정 작동 방식을 자세히 살펴보기

React는 다음 단계를 통해 재조정을 수행합니다:

- Virtual DOM: React는 UI의 메모리에 있는 표현인 Virtual DOM을 생성합니다. 이는 컴포넌트 트리를 반영하는 가벼운 JavaScript 트리입니다.
- Diffing: 상태나 프롭이 변경되면 React는 새로운 Virtual DOM 트리를 생성합니다. 그런 다음 새 트리를 이전 트리와 비교하여 차이점을 식별합니다.
- Batching: React는 여러 상태 업데이트를 하나의 재렌더링으로 묶어서 성능 최적화를 수행합니다.
- 재조정 알고리즘: React는 새로운 Virtual DOM 트리와 이전 트리를 탐색하면서 각 노드(컴포넌트)와 해당 자식을 비교합니다. 실제 DOM에 업데이트, 제거 또는 삽입해야 하는 노드를 결정합니다.
- DOM 업데이트: React는 새로운 Virtual DOM 표현과 일치하도록 실제 DOM을 업데이트하는 데 필요한 최소한의 작업 집합을 생성하여 이러한 변경 사항을 일괄 적용합니다.

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

# 이제 다시 Fiber 아키텍처로

일반적으로 React는 조정 작업을 동기적으로 수행하여 변경 사항을 계산하고 DOM을 업데이트하는 동안 메인 스레드를 차단합니다. 이것이 React 애플리케이션에서 가끔 성능이 저하되는 것을 알 수 있는 이유입니다.

Fiber 아키텍처는 조정을 비동기적으로 수행하여 전체 렌더링 프로세스를 더 효율적으로 만들고자 합니다. 이를 위해 작업을 더 작은 청크로 분할하거나 공식적으로 "파이버"라고도 하는 것으로 수행됩니다. 이러한 파이버들은 독립적으로 예약, 처리 및 우선순위를 매길 수 있습니다.

파이버는 다음과 같은 목표를 달성하기 위해 설정되었습니다:

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

- 필요에 따라 일시 중지, 다시 시작 및 재개할 수 있습니다 (점진적)
- 작업을 청크로 분할하고 우선순위를 지정합니다 (비동기)
- 이전에 완료된 작업을 재사용합니다 (메모이제이션)

# Fiber 트리와 피버 소개

이 아키텍처의 핵심 부분은 피버 트리와 피버에 있습니다.

피버 트리는 프레임워크가 보다 상세한 방식으로 처리해야 할 작업을 추적할 수 있도록 하는 가상 DOM을 나타내는 DOM 트리와 유사합니다. 피버 트리는 피버로 구성되어 있습니다.

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

파이버는 컴포넌트의 상태가 변경될 때 컴포넌트를 업데이트하고 새 요소를 렌더링하며 프롭을 업데이트하는 등 수행해야 할 작업 단위로 생각할 수 있습니다.

컴포넌트의 상태가 변경되면 React는 해당 컴포넌트에 대한 새로운 파이버를 생성하고 파이버 트리에 추가합니다. 그런 다음 React는 해당 파이버를 처리하기 위해 일정을 예약하고 처리해야 할 파이버 큐에 추가합니다. 그런 다음 React는 큐에서 한 번에 한 파이버씩 처리를 시작합니다.

## 파이버의 내부 동작

파이버 큐의 각 파이버는 다음 단계를 실행하여 처리됩니다:

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

- 컴포넌트의 상태가 업데이트되면 업데이트를 예약하는 요청이 트리거됩니다. 업데이트는 대기중인 작업 큐에 새로운 파이버 트리를 추가함으로써 예약됩니다.
- 다음 단계는 조정입니다. 이는 파이버 트리를 탐색하고 shouldComponentUpdate 및 render를 호출하여 새 트리를 구축합니다. 차이 알고리즘이 적용되어 변경이 필요한 노드만 업데이트됩니다.
- 큐에서 작업을 가져와 루프를 실행하고 더 이상 작업이 남아있지 않을 때까지 반복됩니다. 각 반복을 작업 단위라고 부릅니다. 작업 단위는 더 높은 우선순위 업데이트를 확인하기 위해 정기적으로 중단됩니다.
- 파이버 서브 트리가 완료되면 효과가 발생됩니다. 효과에는 레이아웃 업데이트나 DOM 쓰기 등이 포함됩니다.
- 변경 사항이 일괄 업데이트되어 DOM에 플러시되는 커밋 단계까지 작업이 계속됩니다.

# 파이버 아키텍처의 장점

- 주 스레드를 차단하지 않도록 다른 간격에서 작업을 일시 중지 및 재개합니다.
- 일부 작업을 다른 작업보다 우선시하여 UI가 응답성을 유지하도록 합니다.
- 메모이제이션을 통해 중복을 건너뛰는 이전에 완료된 작업을 재사용합니다.
- 작업을 덩어리로 분할하여 더 효율적일 수 있습니다.
- 가장자리 상황 문제를 우아하게 처리하도록 우선순위를 쉽게 변경하거나 감소시킬 수 있습니다.

# 결론

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

Fiber 아키텍처는 React가 내부적으로 어떻게 작동하는지에 대한 엄청난 업그레이드를 가져왔어요. 렌더링과 업데이트를 재고함으로써, Fibers는 가장 복잡한 앱조차도 빠르게 느껴지게 만들어 줘요. 점진적 렌더링, 더 나은 병렬화, 그리고 더 스마트한 조정 프로세스는 항상 프레임을 놓치지 않는 부드러운 사용자 인터페이스를 의미해요.

내부 작업은 고급스러운 편이지만, 영향은 명확해요 — React의 쉬운 개발자 모델을 희생하지 않고 매우 순수한 경험을 제공해 줘요. 더 풍부한 웹과 모바일 앱이 보편화되면서, Fibers는 최고급 및 고성능 UI를 구축하기 위해 게임을 앞서가는 React를 보장해 줘요.

# 참고 자료

React: Fiber 아키텍처란 무엇이며 어떻게 작동하는 걸까요?
React Fiber 이해 — 동작 방식과 중요성

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

해시노드에 원래 발행되었습니다