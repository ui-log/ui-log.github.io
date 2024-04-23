<template><div><p>소개</p>
<p><img src="@source/docs/Nextjs/2024-04-05-ReactDevelopmentUnleashingtheinPowerofHooks/img/ReactDevelopmentUnleashingtheinPowerofHooks_0.png" alt="React 개발을 발전시키는 훅의 힘"></p>
<p>React 개발 영역에서 16.8 버전부터 도입된 훅은 중요한 이정표가 되었습니다. 이러한 훅은 개발자들이 함수형 컴포넌트 내에서 상태 및 다른 React 기능을 제어할 수 있는 패러다임 전환을 제공합니다. 이 문서는 훅의 세계에 관해 깊이 파헤치며, React 개발을 간소화하는 데 그들의 능력을 소개합니다.</p>
<p>훅 이해하기:</p>
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
<p>훅은 React 애플리케이션에서 상태(state)와 사이드 이펙트(side effects)를 관리하기 위한 새로운 접근법을 제공합니다. 몇 가지 주요 개념을 알아보겠습니다:</p>
<ol>
<li>useState 훅:</li>
</ol>
<ul>
<li>useState 훅은 함수형 컴포넌트에서 로컬 상태를 관리할 수 있게 해줍니다.</li>
<li>이 훅은 상태 값을 반환하고 이를 업데이트하는 함수를 제공하는데, 이는 클래스 컴포넌트의 this.setState와 유사합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>You clicked <span class="token punctuation">{</span>count<span class="token punctuation">}</span> times<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
        Click me
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<ol start="2">
<li>useEffect 훅:</li>
</ol>
<ul>
<li>useEffect 훅은 함수형 컴포넌트에서 부작용을 수행할 수 있게 합니다.</li>
<li>렌더링 후에 실행되며, componentDidMount, componentDidUpdate, 그리고 componentWillUnmount와 같은 라이프사이클 메서드를 대체합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>seconds<span class="token punctuation">,</span> setSeconds<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setSeconds</span><span class="token punctuation">(</span>seconds <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">clearInterval</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>seconds<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>Seconds<span class="token operator">:</span> <span class="token punctuation">{</span>seconds<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>커스텀 훅:</li>
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
<li>커스텀 후크를 사용하면 개발자가 컴포넌트 간에 상태를 재사용할 수 있어요.</li>
<li>이들은 use로 시작하는 일반적인 JavaScript 함수들이에요.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">useFormInput</span><span class="token punctuation">(</span><span class="token parameter">initialValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initialValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setValue</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    value<span class="token punctuation">,</span>
    <span class="token literal-property property">onChange</span><span class="token operator">:</span> handleChange
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">MyForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> username <span class="token operator">=</span> <span class="token function">useFormInput</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> password <span class="token operator">=</span> <span class="token function">useFormInput</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>form<span class="token operator">></span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> <span class="token punctuation">{</span><span class="token operator">...</span>username<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"password"</span> <span class="token punctuation">{</span><span class="token operator">...</span>password<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="후크의-장점" tabindex="-1"><a class="header-anchor" href="#후크의-장점" aria-hidden="true">#</a> 후크의 장점:</h2>
<ul>
<li>간소화된 로직: 후크를 사용하면 로직을 재사용 가능한 함수로 캡슐화하여 코드를 깔끔하고 가독성 있는 형태로 만들 수 있어요.</li>
<li>향상된 코드 재사용성: 커스텀 후크를 통해 고차 컴포넌트나 렌더 프롭 없이도 컴포넌트 간에 로직을 공유할 수 있어요.</li>
<li>향상된 성능: 후크를 사용하면 메모이제이션 기술을 활용하여 컴포넌트를 최적화하고 불필요한 다시 렌더링을 피할 수 있어요.</li>
</ul>
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
<h2 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론:</h2>
<p>훅스는 함수형 컴포넌트에서 상태와 사이드 이펙트를 관리하는 더 간단하고 직관적인 방법을 제공하여 React 개발을 혁신했습니다. 훅스를 사용하면 코드 재사용성이 증가하고 컴포넌트 캡슐화가 개선되며, 궁극적으로 개발자 경험이 향상됩니다.</p>
<p>훅스를 효과적으로 활용함으로써, 개발자들은 유지보수 가능하고 확장 가능한 React 애플리케이션을 더 쉽게 구축할 수 있습니다.</p>
</div></template>
