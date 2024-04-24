<template><div><p><img src="@source/docs/Tech/2024-04-23-ReactmemoOptimizeReactFunctionalComponents/img/ReactmemoOptimizeReactFunctionalComponents_0.png" alt="ReactmemoOptimizeReactFunctionalComponents_0"></p>
<p>리액트에서 함수형 컴포넌트의 성능을 최적화하는 것은 부드럽고 효율적인 사용자 인터페이스를 보장하기 위해 중요합니다. 이를 달성하는 한 가지 방법은 React.memo 함수를 사용하는 것인데, 이 함수는 이러한 컴포넌트의 렌더링 프로세스를 최적화하는 데 도움이 되는 고차 컴포넌트입니다. 이 글에서는 React.memo의 개념을 살펴보고 이를 통해 리액트 애플리케이션의 성능을 향상시킬 수 있는 방법을 알아보겠습니다.</p>
<h2 id="설명" tabindex="-1"><a class="header-anchor" href="#설명" aria-hidden="true">#</a> 설명:</h2>
<p>React.memo는 함수형 컴포넌트의 렌더링 결과를 메모이제이션하는 데 사용할 수 있는 함수입니다. 이 함수는 컴포넌트의 렌더링 출력을 캐싱하고 컴포넌트에 전달된 입력(프롭스)이 변경될 때만 다시 렌더링합니다. 이는 복잡한 컴포넌트나 큰 데이터 세트를 처리할 때 불필요한 다시 렌더링의 수를 크게 줄일 수 있습니다.</p>
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
<h2 id="예시" tabindex="-1"><a class="header-anchor" href="#예시" aria-hidden="true">#</a> 예시:</h2>
<p>간단한 예시를 살펴보겠습니다. &quot;UserList&quot;라는 기능 컴포넌트가 사용자 목록을 렌더링합니다. 사용자 목록은 컴포넌트에 속성(prop)으로 전달됩니다. React.memo를 사용하지 않으면 부모 컴포넌트의 변경이 발생하면 &quot;UserList&quot; 컴포넌트가 완전히 다시 렌더링됩니다. 심지어 사용자 목록이 동일한 경우에도요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">UserList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> users <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">-</span> item1
    <span class="token operator">-</span> item2
    <span class="token operator">-</span> item3
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> UserList<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&quot;UserList&quot; 컴포넌트의 렌더링을 최적화하기 위해 React.memo로 래핑할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> UserList <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> users <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span>
      <span class="token punctuation">{</span>users<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> UserList<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제, 부모 컴포넌트가 다시 렌더링되더라도 사용자 목록이 동일하면 React.memo가 &quot;UserList&quot; 컴포넌트의 재렌더링을 방지할 것입니다. 사용자 prop이 변경될 때만 다시 렌더링됩니다.</p>
<h2 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론:</h2>
<p>React.memo는 React의 함수형 컴포넌트의 성능을 최적화하기 위한 강력한 도구입니다. 렌더링 결과를 메모이제이션함으로써 불필요한 재렌더링을 줄이고 응용 프로그램의 전반적인 효율성을 향상시킵니다. 특히 렌더링 프로세스가 비용이 많이 드는 컴포넌트나 props로 대량의 데이터가 전달되는 컴포넌트와 관련된 경우, React.memo를 분별하여 사용하는 것을 기억해 주세요.```</p>
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
<p>고맙습니다! 끝까지 오신 것을 반가워요.</p>
<p>저와 소통해요. 아래 링크를 클릭하시면 더 많이 알 수 있어요.</p>
<p>다음 블로그를 발행할 때 알림을 받으려면 구독해주세요. 다음에 만나요.</p>
</div></template>
