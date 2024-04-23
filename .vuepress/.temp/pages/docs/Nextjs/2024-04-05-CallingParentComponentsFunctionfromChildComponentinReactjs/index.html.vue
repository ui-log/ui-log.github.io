<template><div><p>React.js에서는 데이터와 함수를 부모 컴포넌트에서 자식 컴포넌트로 props를 통해 전달하는 것이 일반적입니다. 그러나 자식 컴포넌트에서 부모 컴포넌트의 함수를 호출해야 하는 경우는 어떨까요? 자식 컴포넌트 내에서 발생하는 이벤트를 기반으로 부모의 상태를 업데이트하거나 다른 작업을 수행해야 할 때 이러한 상황이 발생할 수 있습니다. 다행히 React는 이를 달성하기 위한 간편하고 효과적인 방법을 제공합니다.</p>
<p>방법 1: 콜백 함수</p>
<p>부모 컴포넌트의 함수를 자식 컴포넌트에서 호출하는 한 가지 방법은 자식 컴포넌트로 콜백 함수를 props로 전달하는 것입니다. 작동 방식은 다음과 같습니다:</p>
<ul>
<li>부모 컴포넌트에서 자식 컴포넌트로 전달할 함수를 정의합니다.</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ChildComponent <span class="token keyword">from</span> <span class="token string">'./ChildComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ParentComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleIncrement</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>ChildComponent onIncrement<span class="token operator">=</span><span class="token punctuation">{</span>handleIncrement<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>Count<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> ParentComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>자식 컴포넌트에서는 프롭을 함수로 사용하고 이벤트가 발생할 때 호출하십시오.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ChildComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onIncrement <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>onIncrement<span class="token punctuation">}</span><span class="token operator">></span>
      Count 증가
    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> ChildComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>방법 2: Ref 사용하기</p>
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
<p>부모 컴포넌트의 함수를 자식 컴포넌트에서 호출하는 또 다른 방법은 refs를 사용하는 것입니다. 이 방법은 부모 함수를 직접 호출해야 할 때 유용합니다. 예를 들어, 폼 제출이나 API 호출과 같은 경우입니다.</p>
<ul>
<li>부모 컴포넌트에서 ref를 생성하고 이를 자식 컴포넌트로 전달하세요.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ChildComponent <span class="token keyword">from</span> <span class="token string">'./ChildComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ParentComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> childRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleParentFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 부모 컴포넌트에서 작업 수행</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>ChildComponent ref<span class="token operator">=</span><span class="token punctuation">{</span>childRef<span class="token punctuation">}</span> parentFunction<span class="token operator">=</span><span class="token punctuation">{</span>handleParentFunction<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> ParentComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>자식 컴포넌트에서 useImperativeHandle을 사용하여 부모 함수를 노출하세요.</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> forwardRef<span class="token punctuation">,</span> useImperativeHandle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> ChildComponent <span class="token operator">=</span> <span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> parentFunction <span class="token punctuation">}</span><span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleChildEvent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 자식 컴포넌트에서 무언가를 수행합니다</span>
    <span class="token function">parentFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 부모 함수 호출</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">useImperativeHandle</span><span class="token punctuation">(</span>ref<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 부모 함수를 부모 컴포넌트에 노출</span>
    <span class="token literal-property property">callParentFunction</span><span class="token operator">:</span> handleChildEvent<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleChildEvent<span class="token punctuation">}</span><span class="token operator">></span>
      Call Parent Function
    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> ChildComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>결론</p>
<p>React.js에서 자식 컴포넌트에서 부모 컴포넌트의 함수를 호출하는 것은 콜백 함수 또는 ref를 사용하여 수행할 수 있습니다. 이러한 간단한 방법을 따르면 부모 및 자식 컴포넌트 간의 원활한 통신을 구축하여 더 다이내믹하고 인터랙티브한 애플리케이션을 개발할 수 있습니다. 콜백 함수 또는 ref 중 어떤 것을 선택할지는 특정 사용 사례에 따라 다를 수 있지만, 두 가지 방법 모두 컴포넌트 간 상호 작용을 유연하게 관리하는 데 강력하고 유연성을 제공합니다.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div></div></template>
