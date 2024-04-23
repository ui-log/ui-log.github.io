<template><div><p><img src="@source/docs/Nextjs/2024-04-05-HowReactuseCallbackworks/img/HowReactuseCallbackworks_0.png" alt="HowReactuseCallbackworks_0"></p>
<p>React.useCallback: useCallback은 React Hook으로, 다시 렌더링 사이에 함수 정의를 캐시할 수 있게 해줍니다.</p>
<p>렌더링 성능을 최적화할 때, 자식 컴포넌트로 전달하는 함수를 캐치해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** 부모 컴포넌트 */</span>

<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useCallback<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./styles.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">"./child"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> theme<span class="token punctuation">,</span> addCount <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>member<span class="token punctuation">,</span> addMember<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 캐시된 함수, 테마가 변경될 때마다 이는 다른 함수가 될 것입니다(동일한 함수 정의지만 다른 id/주소)</span>
  <span class="token keyword">const</span> onCount <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setCount</span><span class="token punctuation">(</span>addCount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>addCount<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleMember</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">addMember</span><span class="token punctuation">(</span>member <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>theme<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h4<span class="token operator">></span>Member <span class="token operator">:</span> <span class="token punctuation">{</span>member<span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">></span>
      <span class="token operator">&lt;</span>h4<span class="token operator">></span>Count <span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleMember<span class="token punctuation">}</span><span class="token operator">></span>Add Member<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span>Child onCount<span class="token operator">=</span><span class="token punctuation">{</span>onCount<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/** App 컴포넌트 */</span>

<span class="token keyword">import</span> <span class="token string">"./styles.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Parent <span class="token keyword">from</span> <span class="token string">"./parent"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"App"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello CodeSandbox<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>Parent theme<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"dark"</span><span class="token punctuation">}</span> addCount<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>기본적으로 React는 컴포넌트가 다시 렌더링될 때 모든 하위 컴포넌트를 재귀적으로 다시 렌더링합니다. 따라서 부모 컴포넌트가 다른 테마 속성으로 다시 렌더링되면 자식 컴포넌트도 다시 렌더링됩니다. 그러나 자식 컴포넌트의 다시 렌더링을 건너뛰고 싶다면 React.memo를 사용하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> memo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onCount <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"App"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h4<span class="token operator">></span>자식 컴포넌트<span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>onCount<span class="token punctuation">}</span><span class="token operator">></span>카운트 추가<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">memo</span><span class="token punctuation">(</span>Child<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>데모👉Codesandbox</p>
<p>React의 useCallback에 대해 더 많이 읽고 싶다면 React 업데이트된 문서 페이지를 확인해보세요.</p>
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
<p>여기에 오신 걸 환영합니다! 👍</p>
</div></template>
