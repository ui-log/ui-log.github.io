<template><div><p><img src="@source/docs/Tech/2024-04-23-ExploringtheLatestFeaturesofReact18/img/ExploringtheLatestFeaturesofReact18_0.png" alt="React 18 소개 이미지"></p>
<p>React 18는 웹 애플리케이션 성능과 사용자 경험을 향상시키는 기능을 도입했습니다. 여기에서는 가장 중요한 업데이트 중 일부를 자세히 살펴보고 개발 프로세스를 개선하는 방법에 대해 알아보겠습니다.</p>
<h2 id="동시-렌더링" tabindex="-1"><a class="header-anchor" href="#동시-렌더링" aria-hidden="true">#</a> 동시 렌더링</h2>
<p><img src="@source/docs/Tech/2024-04-23-ExploringtheLatestFeaturesofReact18/img/ExploringtheLatestFeaturesofReact18_1.png" alt="Concurrent Rendering"></p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>리액트 18의 중요한 특징 중 하나는 동시 렌더링(Concurrent Rendering)입니다. 이를 통해 리액트는 사용자 인터페이스를 블로킹하지 않고 동시에 여러 렌더링 작업을 처리할 수 있습니다. 예를 들어, 실행 중인 렌더링 작업을 일시 중지하거나 다시 시작하거나 포기하여 부드럽고 반응성 있는 사용자 상호작용을 보장할 수 있습니다. 이는 이전 버전과는 다르게 렌더링 작업을 중단할 수 없었던 것과는 큰 변화입니다.</p>
<h2 id="자동-일괄-처리" tabindex="-1"><a class="header-anchor" href="#자동-일괄-처리" aria-hidden="true">#</a> 자동 일괄 처리</h2>
<p><img src="@source/docs/Tech/2024-04-23-ExploringtheLatestFeaturesofReact18/img/ExploringtheLatestFeaturesofReact18_2.png" alt="이미지 파일"></p>
<p>자동 일괄 처리는 다수의 상태 업데이트를 하나의 다시 렌더링 주기로 그룹화하는 성능 중심적인 기능입니다. 이를 통해 동시에 여러 상태가 변경될 때 필요한 다시 렌더링을 최소화하여 처리 오버헤드를 크게 줄일 수 있습니다. 이전의 리액트 버전에서는 일괄 처리가 클릭 핸들러와 같은 동기 이벤트로만 제한되어 있었습니다. 리액트 18은 이 기능을 프로미스와 타임아웃과 같은 비동기 작업에도 확장하여, 이러한 함수 내에서 업데이트가 함께 일괄 처리되어 이로 인해 발생하는 다시 렌더링이 감소하고 성능이 향상될 수 있도록 보장합니다.</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="전환" tabindex="-1"><a class="header-anchor" href="#전환" aria-hidden="true">#</a> 전환</h2>
<p><img src="@source/docs/Tech/2024-04-23-ExploringtheLatestFeaturesofReact18/img/ExploringtheLatestFeaturesofReact18_3.png" alt="이미지"></p>
<p>React 18에서는 UI 업데이트를 보다 효과적으로 관리하기 위해 전환(Transitions) 개념을 소개했습니다. 전환은 즉각적인 주의가 필요한 긴급 업데이트와 기다릴 수 있는 비긴급 업데이트를 구분하는 데 도움을 줍니다. 특정 업데이트를 비긴급으로 표시함으로써, 개발자는 React가 작업을 더 잘 우선순위를 정할 수 있도록 도와줄 수 있습니다. 이를 통해 사용자 경험을 향상시키며, 방대한 업데이트 중에도 반응이 빠른 인터페이스를 유지함으로써 사용자에게 보다 나은 경험을 제공할 수 있습니다.</p>
<h2 id="향상된-서스펜스-지원" tabindex="-1"><a class="header-anchor" href="#향상된-서스펜스-지원" aria-hidden="true">#</a> 향상된 서스펜스 지원</h2>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<img src="@source/docs/Tech/2024-04-23-ExploringtheLatestFeaturesofReact18/img/ExploringtheLatestFeaturesofReact18_4.png" />
<p>React 18에서의 Suspense는 서버 측 렌더링을 지원하도록 확장되어, 컴포넌트가 로드될 때까지 대기하는 동안 대체 콘텐츠를 지정할 수 있게 되었습니다. 예를 들어, 데이터를 가져오는 동안 로더를 표시함으로써 비동기 작업을 처리할 수 있습니다. 이는 비동기 작업을 처리하는 것을 개선하며 초기 렌더링 프로세스를 더 부드럽고 예측 가능하게 만들어줍니다.</p>
<h2 id="새로운-클라이언트-및-서버-렌더링-api" tabindex="-1"><a class="header-anchor" href="#새로운-클라이언트-및-서버-렌더링-api" aria-hidden="true">#</a> 새로운 클라이언트 및 서버 렌더링 API</h2>
<img src="@source/docs/Tech/2024-04-23-ExploringtheLatestFeaturesofReact18/img/ExploringtheLatestFeaturesofReact18_5.png" />
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>리액트 18에서는 이제 더 이상 사용되지 않는 방법을 대체하는 새로운 API가 클라이언트 및 서버 측 렌더링을위한 도입되었습니다. 이에는 클라이언트 측 렌더링을위한 createRoot 및 hydrateRoot 및 서버 측 렌더링을위한 renderToPipeableStream 및 renderToReadableStream이 포함됩니다. 이러한 새로운 방법은 리액트 컴포넌트를 렌더링하는 데 더 많은 유연성과 성능 향상을 제공합니다.</p>
<h2 id="strict-mode-업그레이드" tabindex="-1"><a class="header-anchor" href="#strict-mode-업그레이드" aria-hidden="true">#</a> Strict Mode 업그레이드</h2>
<p>리액트 18의 업데이트 된 Strict Mode에서는 컴포넌트의 마운트, 언마운트 및 다시 마운트를 시뮬레이션하여 상태 보존을 효과적으로 처리할 수있도록합니다. 개발 중에 잠재적인 문제를 감지하고 해결하는 데 중요한 이 기능은 제작 단계로 버그를 방지하는 데 중요합니다.</p>
<h1 id="마무리" tabindex="-1"><a class="header-anchor" href="#마무리" aria-hidden="true">#</a> 마무리</h1>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>React 18에서 소개된 업그레이드 사항인 Concurrent Rendering, Automatic Batching, Transitions, 그리고 개선된 Suspense 처리 등은 개발자들에게 고성능 및 반응성 있는 웹 애플리케이션을 만들기 위한 강력한 도구를 제공합니다. 이러한 기능들은 앞으로의 업데이트를 위한 기반을 마련하고 React로 개발자가 어떤 것을 달성할 수 있는 한계를 더욱 넓혀줍니다.</p>
<p>React 18로 업그레이드하는 것은 단순한 과정이며 애플리케이션의 성능과 사용자 경험을 크게 향상시킬 수 있습니다. 복잡한 기업급 애플리케이션이든 간단한 동적 웹 페이지든, 이러한 새로운 기능들은 개발 업무 흐름을 향상시켜줄 것입니다.</p>
<p>React 18의 기능에 대해 자세히 알아보고 싶은 분들을 위해, 상세한 문서 및 커뮤니티 정보를 포함한 다양한 자원이 제공되고 있습니다.</p>
</div></template>
