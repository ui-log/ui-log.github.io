<template><div><p><img src="@source/docs/Nextjs/2024-04-05-MasteringReactTipstoAvoidCommonBeginnerErrors/img/MasteringReactTipstoAvoidCommonBeginnerErrors_0.png" alt="마스터링 리액트: 초보자가 피해야 할 일반 오류를 피하는 팁"></p>
<p>리액트는 사용자 인터페이스를 구축하는 강력한 라이브러리이지만, 어떤 도구든 마찬가지로 오용될 수 있습니다. 초보자들은 종종 유지 관리가 어려우며 성능이 낮아지는 애플리케이션으로 이어질 수 있는 함정에 빠지곤 합니다. 이 게시물에서는 이러한 일반적인 함정과 그것들을 피하는 방법을 살펴보겠습니다.</p>
<h1 id="실수-1-state-과용" tabindex="-1"><a class="header-anchor" href="#실수-1-state-과용" aria-hidden="true">#</a> 실수 1: State 과용</h1>
<p>State는 절약해서 사용하고 컴포넌트의 동적 정보를 표현하는 데이터에만 사용해야 합니다. State를 과용하면 불필요한 재렌더링이 발생할 수 있고, 컴포넌트의 로직을 이해하기 어렵게 만들 수 있습니다.</p>
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
<p>문제: 때때로, 꼭 필요하지 않은 상태의 모든 값을 저장하는 실수를 자주 저질러요.</p>
<p>해결책: 데이터 변경과 재렌더링을 유발하는 경우에만 상태를 사용하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 나쁨: 파생 데이터에 불필요한 상태</span>
<span class="token keyword">function</span> <span class="token function">PriceComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> basePrice <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>price<span class="token punctuation">,</span> setPrice<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>basePrice<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>tax<span class="token punctuation">,</span> setTax<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setTax</span><span class="token punctuation">(</span>basePrice <span class="token operator">*</span> <span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 파생 데이터는 상태에 저장하지 않아야 합니다.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>basePrice<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>총 가격<span class="token operator">:</span> <span class="token punctuation">{</span>price <span class="token operator">+</span> tax<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 좋음: 직접 파생 데이터 계산</span>
<span class="token keyword">function</span> <span class="token function">PriceComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> basePrice <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> tax <span class="token operator">=</span> basePrice <span class="token operator">*</span> <span class="token number">0.2</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>총 가격<span class="token operator">:</span> <span class="token punctuation">{</span>basePrice <span class="token operator">+</span> tax<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="실수-2-프래그먼트-사용하지-않기" tabindex="-1"><a class="header-anchor" href="#실수-2-프래그먼트-사용하지-않기" aria-hidden="true">#</a> 실수 2: 프래그먼트 사용하지 않기</h1>
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
<p>React Fragments는 추가 노드를 DOM에 추가하지 않고 여러 요소를 반환할 수 있게 해줍니다. 이는 DOM 트리를 깔끔하게 유지하고 성능을 향상시키는 데 유용합니다.</p>
<p>문제: 불필요한 DOM 요소가 마크업을 지저분하게 만들고 성능에 영향을 미칠 수 있습니다.</p>
<p>해결책: React Fragments를 사용하여 추가 노드를 DOM에 추가하지 않고 자식 요소 목록을 그룹화합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 안 좋은 방법: Extra div element</span>
<span class="token keyword">function</span> <span class="token function">List</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>ListItem <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>ListItem <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 좋은 방법: React.Fragment 사용</span>
<span class="token keyword">function</span> <span class="token function">List</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>ListItem <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>ListItem <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="실수-3-prop-types-무시하기" tabindex="-1"><a class="header-anchor" href="#실수-3-prop-types-무시하기" aria-hidden="true">#</a> 실수 3: Prop Types 무시하기</h1>
<p>Prop types는 컴포넌트로 전달된 속성의 의도된 유형을 문서화하는 방법입니다. 개발 중에 데이터 유형을 유효성 검사하여 버그를 방지하는 데 도움이 될 수 있습니다.</p>
<p>문제: prop을 유효성 검사하지 않으면 응용 프로그램에서 예상치 못한 버그가 발생할 수 있습니다.</p>
<p>해결책: propTypes를 사용하여 컴포넌트가 올바른 유형의 prop을 받도록 하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">'prop-types'</span><span class="token punctuation">;</span>

<span class="token comment">// Good: Using prop types for validation</span>
<span class="token keyword">function</span> <span class="token function">UserProfile</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>Name<span class="token operator">:</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>Age<span class="token operator">:</span> <span class="token punctuation">{</span>age<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

UserProfile<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="실수-4-컴포넌트-재렌더링-오해" tabindex="-1"><a class="header-anchor" href="#실수-4-컴포넌트-재렌더링-오해" aria-hidden="true">#</a> 실수 4: 컴포넌트 재렌더링 오해</h1>
<p>컴포넌트가 상태가 변경되었을 때뿐만 아니라 프롭이 변경되었거나 부모 컴포넌트가 재렌더링 될 때도 재렌더링됩니다. 이를 제대로 관리하지 않으면 성능 문제가 발생할 수 있습니다.</p>
<p>문제: React 컴포넌트는 상태가 변경될 때만 재렌더링된다고 생각하기.</p>
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
<p>해결책: 컴포넌트는 부모가 다시 렌더링될 때나 프롭이 변경될 때도 다시 렌더링된다는 것을 이해해주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 좋은 예시: React.memo로 최적화하기</span>
<span class="token keyword">const</span> ChildComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'ChildComponent이 렌더링됨'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ParentComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>ChildComponent value<span class="token operator">=</span><span class="token punctuation">{</span>count<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>증가<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="실수-5-상태-직접-변경하기" tabindex="-1"><a class="header-anchor" href="#실수-5-상태-직접-변경하기" aria-hidden="true">#</a> 실수 5: 상태 직접 변경하기</h1>
<p>상태를 직접 변이하는 것은 예상치 못한 동작을 초래할 수 있습니다. React는 변경 사항을 감지하기 위해 불변성에 의존하기 때문에 항상 setState 함수나 훅에서 제공하는 업데이터 함수를 사용해주세요.</p>
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
<p>문제: 상태를 직접 변경하면 예측할 수 없는 컴포넌트 동작을 유도할 수 있습니다.</p>
<p>해결책: 항상 setState 함수를 사용하여 상태를 업데이트하십시오.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 나쁜 예: 상태를 직접 변경</span>
<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>items<span class="token punctuation">,</span> setItems<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">addItem</span><span class="token punctuation">(</span><span class="token parameter">newItem</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newItem<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 이것은 재렌더링을 일으키지 않습니다</span>
    <span class="token function">setItems</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 좋은 예: 함수 업데이트 사용</span>
<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>items<span class="token punctuation">,</span> setItems<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">addItem</span><span class="token punctuation">(</span><span class="token parameter">newItem</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setItems</span><span class="token punctuation">(</span><span class="token parameter">prevItems</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>prevItems<span class="token punctuation">,</span> newItem<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
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
<p>자주 하는 실수를 피하면 더 나은, 더 신뢰할 수 있는 React 애플리케이션이 될 것입니다. React를 배우는 것은 여정입니다. 계속 실험하고, 독해하고, 코딩해보세요. 즐거운 개발되세요!</p>
</div></template>
