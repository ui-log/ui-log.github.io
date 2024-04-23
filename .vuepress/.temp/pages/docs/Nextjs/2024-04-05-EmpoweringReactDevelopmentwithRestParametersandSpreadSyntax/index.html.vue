<template><div><p>리액트는 페이스북에서 유명한 UI 라이브러리로, 견고한 구조를 토대로 매력적인 경험을 만들어냅니다. Rest 매개변수와 Spread 구문과 같은 현대적인 JavaScript 기능을 통합하면 리액트의 장점을 극대화하여 코드를 더 간결하고 사용자 경험을 개선할 수 있습니다.</p>
<p>이 기사에서는 이러한 기술을 리액트 컴포넌트 내에서 실용적으로 활용하는 방법을 탐구하여 새로운 개발자와 베테랑 개발자 모두에게 도움이 되도록 스킬을 향상시킬 것입니다.</p>
<h1 id="spread-구문을-사용한-props-조작" tabindex="-1"><a class="header-anchor" href="#spread-구문을-사용한-props-조작" aria-hidden="true">#</a> Spread 구문을 사용한 Props 조작</h1>
<p>임의의 Props를 받는 프레젠테이셔널 자식 컴포넌트를 설계한다고 가정해보세요. Spread 구문을 적용하면 속성 추출이 간단해지므로 수동 할당으로 인한 번거로움이 줄어듭니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ParentComponent.js</span>
<span class="token keyword">import</span> ChildComponent <span class="token keyword">from</span> <span class="token string">'./ChildComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> parentData <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'부모 데이터'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'일부 임의의 정보'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ParentComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ChildComponent <span class="token punctuation">{</span><span class="token operator">...</span>parentData<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// ChildComponent.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ChildComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> label<span class="token punctuation">,</span> description <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token punctuation">{</span>label<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>description<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>각 속성을 개별적으로 선언하는 대신 Spread 구문은 전체 parentData 객체를 전달하여 키를 해당 속성에 자동으로 매핑합니다. 또한 미래의 수정이 추가 필드를 추가하도록 요구하는 경우를 가정해보십시오. 이 전략 덕분에 업데이트가 이전 구성을 유지하면서 손쉽게 발생합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> parentData <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'부모 데이터'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'일부 임의의 정보'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'&lt;svg/>'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="이벤트-핸들러-및-나머지-매개변수" tabindex="-1"><a class="header-anchor" href="#이벤트-핸들러-및-나머지-매개변수" aria-hidden="true">#</a> 이벤트 핸들러 및 나머지 매개변수</h1>
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
<p>대부분의 경우 React에서 이벤트 처리는 핸들러 함수를 트리 아래로 전달하는 것을 포함합니다. 때로는, 자식 요소가 중앙 처리 루틴이 필요한 세분화된 이벤트 카테고리를 전달하는 경우가 있습니다. Rest 파라미터를 구현하면 다양한 데이터를 균일하게 수집하여 집계 작업을 도와줍니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// EventAggregator.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">EventAggregator</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>events<span class="token punctuation">,</span> setEvents<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">collectEventHandler</span><span class="token punctuation">(</span><span class="token parameter">eventName<span class="token punctuation">,</span> eventPayload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setEvents</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prevState</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>prevState<span class="token punctuation">,</span> <span class="token punctuation">{</span> eventName<span class="token punctuation">,</span> eventPayload <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token function">children</span><span class="token punctuation">(</span>collectEventHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// ButtonComponent.js</span>
<span class="token keyword">import</span> EventAggregator <span class="token keyword">from</span> <span class="token string">'./EventAggregator'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ButtonComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onClick <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"button"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">onClick</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
      Click me<span class="token operator">!</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// ContainerComponent.js</span>
<span class="token keyword">import</span> EventAggregator <span class="token keyword">from</span> <span class="token string">'./EventAggregator'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ButtonComponent <span class="token keyword">from</span> <span class="token string">'./ButtonComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ContainerComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>EventAggregator<span class="token operator">></span>
      <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">onClick</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>ButtonComponent onClick<span class="token operator">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>ul<span class="token operator">></span>
            <span class="token punctuation">{</span><span class="token comment">/* Render collected events here */</span><span class="token punctuation">}</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>EventAggregator<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 코드에서 EventAggregator 컴포넌트는 상태 저장을 관리하며, 하위 요소가 해당 상황을 감지할 때 호출할 콜백을 노출합니다. 한편 ButtonComponent는 필요한 DOM 이벤트 인스턴스를 전달하는 일반적인 <code v-pre>click</code> 신호를 발행합니다. 마지막으로, 캡처된 상호작용은 컨테이너 안에 모아져 있어 나타내거나 추가 분석에 사용할 수 있습니다.</p>
<h1 id="rest-파라미터로-가변-인자-기능-추가하기" tabindex="-1"><a class="header-anchor" href="#rest-파라미터로-가변-인자-기능-추가하기" aria-hidden="true">#</a> Rest 파라미터로 가변 인자 기능 추가하기</h1>
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
<p>가변 매개변수 함수를 구현하는 것은 변화무죄한 인수 개수를 소비할 수 있는 기능, 그렇게 함으로써 확장 가능한 API를 구축하는 데 중요합니다. 한번 더, Rest 매개변수는 이러한 노력들을 쉽게 돕습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// VariadicComponent.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">VariadicComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children<span class="token punctuation">,</span> variant<span class="token punctuation">,</span> <span class="token operator">...</span>props <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>props<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">updateCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prevState</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>prevState<span class="token punctuation">,</span> <span class="token literal-property property">count</span><span class="token operator">:</span> prevState<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token function">children</span><span class="token punctuation">(</span>updateCount<span class="token punctuation">,</span> variant<span class="token punctuation">,</span> state<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// ConsumerComponent.js</span>
<span class="token keyword">import</span> VariadicComponent<span class="token punctuation">,</span> <span class="token punctuation">{</span> updateCount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./VariadicComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ConsumerComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>VariadicComponent
      variant<span class="token operator">=</span><span class="token string">"primary"</span>
      color<span class="token operator">=</span><span class="token string">"#fff"</span>
      backgroundColor<span class="token operator">=</span><span class="token string">"#007bff"</span>
      borderRadius<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span>
    <span class="token operator">></span>
      <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">updateCount<span class="token punctuation">,</span> variant<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>button style<span class="token operator">=</span><span class="token punctuation">{</span> variant<span class="token punctuation">,</span> <span class="token operator">...</span>state <span class="token punctuation">}</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>updateCount<span class="token punctuation">}</span><span class="token operator">></span>
          Update <span class="token function">Count</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>VariadicComponent<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서 VariadicComponent는 Rest 매개변수를 통해 다양한 속성(변수 비포함)을 받아들이고, 해당 속성들을 파생된 내부 상태와 함께 번들링합니다. 이후, 이 데이터 집합은 소비자에게 전달되어 인라인 스타일과 매끄럽게 병합됩니다. 게다가, ConsumerComponent는 updateCount와 같은 도우미 유틸리티에 무제한 액세스를 제공받아 일관된 캡슐화를 보장합니다.</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
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
<p>휴대용 파라미터와 Spread 구문은 React 슈퍼파워를 자신있게 활용하는데 강력한 동료들로 입증됩니다. 번거로운 프롭 드릴링 절차를 자동화하거나 확장 가능한 아키텍처를 육성하든, 이러한 혁신은 개발 프로세스를 현저히 향상시킵니다. 지금 바로 시도해 보세요. 향상된 생산성을 목격할 것입니다.</p>
</div></template>
