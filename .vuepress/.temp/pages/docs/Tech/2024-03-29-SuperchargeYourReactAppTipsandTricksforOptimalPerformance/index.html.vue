<template><div><img src="@source/docs/Tech/2024-03-29-SuperchargeYourReactAppTipsandTricksforOptimalPerformance/img/SuperchargeYourReactAppTipsandTricksforOptimalPerformance_0.png" />
<p>리액트는 성능이 우수한 웹 애플리케이션을 구축하는 강력한 도구가 될 수 있습니다. 리액트 성능을 향상시키는 몇 가지 팁을 소개합니다:</p>
<ul>
<li>리액트의 내장 도구 사용: 리액트는 성능을 향상시키기 위해 기본적으로 여러 도구를 제공합니다. 예를 들어, React.memo() 함수를 사용하여 컴포넌트를 메모이제이션할 수 있습니다. 이는 해당 컴포넌트가 프롭이 변경될 때에만 다시 렌더링되게 합니다. 비슷하게, React의 useMemo()와 useCallback() 훅은 값과 함수를 메모이제이션하는 데 사용할 수 있습니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// useMemo</span>

<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useMemo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> prop1<span class="token punctuation">,</span> prop2 <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> expensiveValue <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// prop1과 prop2를 기반으로 한 비싼 계산</span>
    <span class="token keyword">return</span> prop1 <span class="token operator">+</span> prop2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>prop1<span class="token punctuation">,</span> prop2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>expensiveValue<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 예시에서는 prop1과 prop2의 값에 따라 계산 결과를 기억하는 데 사용되는 useMemo() 훅을 사용하고 있어요. useMemo() 훅은 첫 번째 인수로 함수를 취하는데요, 이 함수는 기억하려는 값을 반환해야 해요. 두 번째 인수는 종속성 배열이며, 이 배열은 함수가 다시 실행되어야 하는 시점을 결정해요. 종속성 중 하나라도 변경되면 함수가 다시 실행되고 기억된 값이 업데이트될 거에요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//useCallback</span>

<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onClick <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> handleClick <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Button clicked"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>onClick<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span><span class="token operator">></span>Click me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서는 자식 컴포넌트에 전달되는 함수를 기억하기 위해 useCallback() 훅을 사용하고 있어요. useCallback() 훅은 함수를 첫 번째 인수로, 기억하려는 함수를 두 번째 인수로 배열로 받는데요, 이 배열은 함수가 다시 만들어져야 하는 시점을 결정해요. 종속성 중 하나라도 변경되면 함수가 다시 만들어지고 기억된 함수가 업데이트될 거에요.</p>
<ol start="2">
<li>컴포넌트 크기 최소화: 컴포넌트의 크기는 랜더링 및 다시 랜더링과 관련한 성능에 영향을 줄 수 있어요. 컴포넌트 크기를 최소화하기 위해 불필요한 props 및 상태를 사용하지 않고, 큰 컴포넌트를 작은 관리하기 쉬운 크기로 분할하는 것을 고려해보세요.</li>
</ol>
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
<ol start="3">
<li>가상화 사용하기: 긴 목록이나 표를 렌더링할 때, 브라우저가 전체 목록/표를 렌더링하는 대신 화면에 보이는 요소만 렌더링하는 것이 중요합니다. 이렇게 하면 렌더링 성능이 크게 향상되고 브라우저가 수행해야 하는 작업량이 줄어듭니다. React에서 가상화를 구현하는 인기 있는 라이브러리 중 하나는 react-virtualized입니다. 아래는 react-virtualized를 사용하여 아이템의 대량 목록을 렌더링하는 방법 예시입니다:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> List <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-virtualized"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> items <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">rowRenderer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> index<span class="token punctuation">,</span> key<span class="token punctuation">,</span> style <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>key<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token punctuation">{</span>items<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>List width<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">500</span><span class="token punctuation">}</span> height<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">500</span><span class="token punctuation">}</span> rowCount<span class="token operator">=</span><span class="token punctuation">{</span>items<span class="token punctuation">.</span>length<span class="token punctuation">}</span> rowHeight<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span> rowRenderer<span class="token operator">=</span><span class="token punctuation">{</span>rowRenderer<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 예제에서 MyComponent는 react-virtualized의 List 컴포넌트를 사용하여 아이템 목록을 렌더링합니다. rowRenderer 함수는 List 컴포넌트에 prop으로 전달되며 목록의 각 항목을 렌더링합니다. 이 rowRenderer 함수는 현재 화면에 보이는 항목에 대해서만 호출되며 사용자가 스크롤할 때 react-virtualized가 동적으로 추가 항목을 렌더링합니다.</p>
<ol start="4">
<li>이미지 최적화: 큰 이미지는 특히 모바일 기기에서 성능 저하의 주요 요인이 될 수 있습니다. 성능을 향상시키기 위해 이미지를 최적화하여 크기를 줄이고, 사용자가 필요할 때까지 로딩을 미루는 &quot;Lazy Loading&quot;을 사용하고, 화면 크기에 맞게 적절한 이미지를 제공하는 반응형 이미지를 고려해야 합니다. React 앱에서 이미지를 최적화하는 방법 예시는 다음과 같습니다:</li>
</ol>
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
<ul>
<li>이미지 최적화 도구를 사용하여 이미지를 압축하고 크기를 조정한 후 앱에 추가하세요. squoosh.app이나 tinypng.com과 같은 도구를 사용하면 이미지의 파일 크기를 줄일 수 있고 품질을 크게 포기하지 않고도 압축할 수 있습니다.</li>
<li>페이지에 표시되지 않는 이미지를 lazy-load하는 img 요소에 lazy 속성을 사용하세요. 이렇게 하면 페이지의 초기로드 시간을 줄이고 사용자 경험을 향상시킬 수 있습니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"이미지/경로.jpg"</span> alt<span class="token operator">=</span><span class="token string">"최적화된 이미지"</span> loading<span class="token operator">=</span><span class="token string">"lazy"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"다른-이미지/경로.jpg"</span> alt<span class="token operator">=</span><span class="token string">"다른 최적화된 이미지"</span> loading<span class="token operator">=</span><span class="token string">"lazy"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>img 요소에 srcSet 속성을 사용하여 서로 다른 화면 크기에 대한 다른 이미지 소스를 제공하세요. 이렇게 하면 더 작은 화면에서 이미지의 파일 크기를 줄일 수 있고, 더 큰 이미지가 필요하지 않은 경우에 유용합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>img
        src<span class="token operator">=</span><span class="token string">"이미지/경로.jpg"</span>
        alt<span class="token operator">=</span><span class="token string">"최적화된 이미지"</span>
        srcSet<span class="token operator">=</span>"
          이미지<span class="token operator">-</span>작은<span class="token operator">/</span>경로<span class="token punctuation">.</span>jpg 640w<span class="token punctuation">,</span>
          이미지<span class="token operator">-</span>중간<span class="token operator">/</span>경로<span class="token punctuation">.</span>jpg 1024w<span class="token punctuation">,</span>
          이미지<span class="token operator">-</span>큰<span class="token operator">/</span>경로<span class="token punctuation">.</span>jpg 2048w
        "
        sizes<span class="token operator">=</span>"<span class="token punctuation">(</span>max<span class="token operator">-</span>width<span class="token operator">:</span> 640px<span class="token punctuation">)</span> 640px<span class="token punctuation">,</span>
          <span class="token punctuation">(</span>max<span class="token operator">-</span>width<span class="token operator">:</span> 1024px<span class="token punctuation">)</span> 1024px<span class="token punctuation">,</span>
          2048px"
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<ol start="5">
<li>프로필 및 성능 최적화: 마지막으로, React 애플리케이션의 성능을 정기적으로 프로필링하고 최적화하는 것이 중요합니다. 성능 병목 현상을 식별하는 데 Chrome DevTools 성능 탭이나 React의 내장 프로파일링 도구와 같은 도구를 사용하고, 그 후에 이를 해결하기 위해 노력해야 합니다.</li>
</ol>
<p>이러한 팁을 따르면 React 애플리케이션이 성능이 우수하고 훌륭한 사용자 경험을 제공하는 데 도움이 될 수 있습니다.</p>
</div></template>
