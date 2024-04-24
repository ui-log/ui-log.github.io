<template><div><p>React에서는 일반적으로 데이터가 부모 컴포넌트에서 자식 컴포넌트로 props를 통해 전달됩니다. 그러나 자식에서 부모로 데이터를 전달하는 것은 조금 더 복잡할 수 있습니다.</p>
<p>자식 컴포넌트에서 부모 컴포넌트로 데이터를 전달하는 한 가지 방법은 부모 컴포넌트에서 콜백 함수를 정의하고 해당 함수를 자식 컴포넌트로 props로 전달하는 것입니다. 자식 컴포넌트는 그런 다음 부모에 전달하려는 데이터와 함께 이 함수를 호출할 수 있습니다.</p>
<p>다음은 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 부모 컴포넌트</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">"./Child"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>dataFromChild<span class="token punctuation">,</span> setDataFromChild<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">handleDataFromChild</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setDataFromChild</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>자식으로부터의 데이터<span class="token operator">:</span> <span class="token punctuation">{</span>dataFromChild<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>Child sendDataToParent<span class="token operator">=</span><span class="token punctuation">{</span>handleDataFromChild<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Parent<span class="token punctuation">;</span>

<span class="token comment">// 자식 컴포넌트</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> sendDataToParent <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">sendDataToParent</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> value<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setData</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span><span class="token operator">></span>부모에 데이터 전송<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Child<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 예제에서 Parent 컴포넌트는 dataFromChild라는 상태 변수와 이를 업데이트하는 handleDataFromChild 함수를 정의합니다. Parent 컴포넌트는 또한 <code v-pre>Child</code> 컴포넌트를 렌더링하고 sendDataToParent라는 prop으로 handleDataFromChild 함수를 하향 전달합니다.</p>
<p>Child 컴포넌트는 자체의 상태 변수 data와 sendDataToParent 함수를 호출하는 handleClick 함수를 정의합니다. 이 함수는 현재 data 값을 인수로 사용하여 하향 전달된 sendDataToParent 함수를 호출합니다. Child 컴포넌트는 <code v-pre>input</code> 요소와 <code v-pre>button</code> 요소를 렌더링하며, 버튼이 클릭되면 handleClick 함수가 호출됩니다.</p>
<p>handleClick 함수가 호출되면 Parent 컴포넌트로부터 하향 전달된 sendDataToParent 함수가 호출됩니다. 이렇게 함으로써 Parent 컴포넌트의 handleDataFromChild 함수가 하위 컴포넌트의 data로 호출되어 dataFromChild 상태 변수가 업데이트됩니다. 마지막으로, 업데이트된 dataFromChild 값이 Parent 컴포넌트의 <code v-pre>h1</code> 요소에 표시됩니다.</p>
<p>이 방식을 통해 하위 컴포넌트가 부모 컴포넌트와 깔끔하고 효율적으로 통신할 수 있습니다. 부모 컴포넌트에서 콜백 함수를 정의하고 이를 prop으로 하위 컴포넌트로 전달함으로써, 복잡한 상태 관리 기술에 의존하지 않고도 하위 컴포넌트에서 상위 컴포넌트로 데이터를 쉽게 전달할 수 있습니다.</p>
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
<p>요약하자면, React에서 자식 컴포넌트에서 상위 컴포넌트로 데이터를 전달하는 것은 상위 컴포넌트에서 콜백 함수를 정의하고 이를 자식 컴포넌트로 prop으로 전달하여 달성할 수 있습니다. 자식 컴포넌트는 이 함수를 호출하여 상위 컴포넌트로 전달하려는 데이터를 전달할 수 있으며, 이를 통해 컴포넌트 간에 효율적이고 간단한 통신이 가능해집니다.</p>
</div></template>
