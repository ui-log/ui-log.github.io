<template><div><h1 id="react-uncontrolled-input-to-be-controlled-에러-해결-방법-100-됨" tabindex="-1"><a class="header-anchor" href="#react-uncontrolled-input-to-be-controlled-에러-해결-방법-100-됨" aria-hidden="true">#</a> React 'uncontrolled input to be controlled.' 에러 해결 방법(100% 됨)</h1>
<h2 id="에러" tabindex="-1"><a class="header-anchor" href="#에러" aria-hidden="true">#</a> 에러</h2>
<p>React를 개발하다보면 인풋을 사용할 때 onChange시 이런 에러를 만나는 경우가 있습니다.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="@source/docs/React/2024-03-21-React-'uncontrolled-input-to-be-controlled.'-에러-해결-방법(100)/img/1.png" width="500" />
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">useInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>input<span class="token punctuation">,</span> setInput<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setInput</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">[</span>input<span class="token punctuation">,</span> onChange<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> useInput<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>저는 위와 같이 useInput 훅을 만들어 사용중이었는데, 위 훅을 사용하면 에러가 발생했습니다.</p>
<h2 id="원인" tabindex="-1"><a class="header-anchor" href="#원인" aria-hidden="true">#</a> 원인</h2>
<p>위 에러가 발생하는 원인은 에러 메세지에 나와있는대로 uncontrolled input이 controlled로 변경되어서 발생한 것인데요.
더 쉽게 말하자면 input의 값이 undefined 되어있다가 onChange를 통해서 defined 된 값으로 변경되어서 발생하는 이슈입니다.</p>
<img src="@source/docs/React/2024-03-21-React-'uncontrolled-input-to-be-controlled.'-에러-해결-방법(100)/img/2.png" width="500" />
<h2 id="해결-방법" tabindex="-1"><a class="header-anchor" href="#해결-방법" aria-hidden="true">#</a> 해결 방법</h2>
<p>위 에러를 해결하려면 아래와 같이 value를 받아서 useState의 초기 값에 넣어주면 됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">useInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>input<span class="token punctuation">,</span> setInput<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setInput</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">[</span>input<span class="token punctuation">,</span> onChange<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> useInput<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>커스텀 훅을 사용하는 곳에서는 아래와 같이 초기값인 &quot;&quot; 빈 문자열을 넣어주면 됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>email<span class="token punctuation">,</span> onEmailChange<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useInput</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이렇게 하면 input에서 onChange할 때 발생하던 &quot;uncontrolled input to be controlled.&quot; 에러를 손 쉽게 해결할 수 있습니다.</p>
</div></template>
