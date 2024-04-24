<template><div><p><img src="@source/docs/Tech/2024-04-23-AllReacthooksinoneshort/img/AllReacthooksinoneshort_0.png" alt="img"></p>
<p>리액트 훅은 함수형 컴포넌트에 상태 및 기타 기능을 추가할 수 있는 리액트의 강력한 기능입니다. 이들은 React 16.8에서 소개되었으며 그 이후로 React 개발의 필수 요소가 되었습니다. 이 블로그에서는 가장 일반적으로 사용되는 React 훅 몇 가지를 살펴보고 쉽게 이해할 수 있는 예제를 제공할 것입니다.</p>
<h1 id="_1-usestate-훅" tabindex="-1"><a class="header-anchor" href="#_1-usestate-훅" aria-hidden="true">#</a> 1: useState 훅</h1>
<p>useState 훅을 사용하면 함수형 컴포넌트에 상태를 추가할 수 있습니다. 초기값을 인수로 전달하고 현재 상태 값과 해당 값을 업데이트하는 함수가 포함된 배열을 반환합니다.</p>
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
<p>함수형 컴포넌트에 카운터를 추가하는 방법을 설명하는 예제입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token function-variable function">decrement</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>카운트<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>increment<span class="token punctuation">}</span><span class="token operator">></span>증가<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>decrement<span class="token punctuation">}</span><span class="token operator">></span>감소<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서는 0으로 시작하여 &quot;증가&quot; 및 &quot;감소&quot; 버튼을 클릭할 때마다 업데이트됩니다.</p>
<h1 id="_2-useeffect-훅" tabindex="-1"><a class="header-anchor" href="#_2-useeffect-훅" aria-hidden="true">#</a> 2: useEffect 훅</h1>
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
<p><code v-pre>useEffect</code> 훅을 사용하면 함수형 컴포넌트에서 부작용을 수행할 수 있습니다. 부작용에는 API에서 데이터를 가져오기, DOM을 업데이트하기, 이벤트를 구독하기 등이 포함될 수 있습니다.</p>
<p>아래는 API에서 데이터를 가져오는 방법을 보여주는 <code v-pre>useEffect</code>의 예제입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">DataFetcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://api.example.com/data'</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token function">setData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span>
      <span class="token punctuation">{</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서는 API에서 데이터를 가져와서 <code v-pre>setData</code> 함수를 사용하여 컴포넌트의 상태를 업데이트합니다.</p>
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
<h1 id="_3-usecontext-훅" tabindex="-1"><a class="header-anchor" href="#_3-usecontext-훅" aria-hidden="true">#</a> 3: useContext 훅</h1>
<p>useContext 훅은 함수형 컴포넌트에서 컨텍스트 객체에 접근할 수 있게 해줍니다. 컨텍스트는 props를 수동으로 전달하지 않고 컴포넌트 트리를 통해 데이터를 전달하는 방법입니다.</p>
<p>다음은 useContext를 사용하여 테마 컨텍스트에 접근하는 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> ThemeContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token string">'light'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ThemeButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>ThemeContext<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>button style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">background</span><span class="token operator">:</span> theme <span class="token operator">===</span> <span class="token string">'dark'</span> <span class="token operator">?</span> <span class="token string">'black'</span> <span class="token operator">:</span> <span class="token string">'white'</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> theme <span class="token operator">===</span> <span class="token string">'dark'</span> <span class="token operator">?</span> <span class="token string">'white'</span> <span class="token operator">:</span> <span class="token string">'black'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
      테마 변경
    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 예시에서는 &quot;light&quot;라는 기본 값을 가진 테마 컨텍스트를 만들고 useContext 훅을 사용하여 ThemeButton 컴포넌트에서 액세스합니다.</p>
<h1 id="_4-usereducer-훅" tabindex="-1"><a class="header-anchor" href="#_4-usereducer-훅" aria-hidden="true">#</a> 4: useReducer 훅</h1>
<p>useReducer 훅을 사용하면 함수형 컴포넌트에서 복잡한 상태를 관리할 수 있습니다. useState 훅과 유사하지만 단순한 값 대신에 리듀서 함수와 초기 상태를 사용합니다.</p>
<p>쇼핑 카트를 관리하기 위해 useReducer를 사용하는 예시가 여기 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useReducer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">cartReducer</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">'add'</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">,</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">'remove'</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>id <span class="token operator">!==</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">ShoppingCart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>cart<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useReducer</span><span class="token punctuation">(</span>cartReducer<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">addItem</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'add'</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> item <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token function-variable function">removeItem</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'remove'</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> item <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>장바구니<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span>ul<span class="token operator">></span>
        <span class="token punctuation">{</span>cart<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span> <span class="token operator">-</span> $<span class="token punctuation">{</span>item<span class="token punctuation">.</span>price<span class="token punctuation">}</span>
            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">removeItem</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>제거<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">addItem</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'상품 1'</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">9.99</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>상품 추가<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서는 cartReducer 함수를 정의하여 state 및 action을 받아들이고 action 유형에 따라 새 상태를 반환하는 방법을 정의합니다. 그런 다음 useReducer 훅을 사용하여 cartReducer 함수를 사용하여 cart 상태를 관리합니다.</p>
<p>또한 addItem 및 removeItem 두 함수를 정의하여 cartReducer에 작업을 디스패치하여 장바구니 상태에서 항목을 추가하거나 제거합니다.</p>
<p>마지막으로 장바구니 항목과 항목을 추가하거나 제거할 수 있는 버튼이 있는 쇼핑 카트를 렌더링합니다. 버튼이 클릭되면 useReducer 훅을 통해 반환된 dispatch 함수를 사용하여 카트 상태를 업데이트하기 위해 addItem 또는 removeItem 함수가 호출됩니다.```</p>
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
<h1 id="_5-usecallback-훅" tabindex="-1"><a class="header-anchor" href="#_5-usecallback-훅" aria-hidden="true">#</a> 5: useCallback 훅</h1>
<p>useCallback 훅을 사용하면 함수를 메모이즈하여 해당 함수의 종속성이 변경될 때만 다시 생성되도록 할 수 있습니다. 이를 통해 불필요한 다시 렌더링을 방지하여 성능을 향상시킬 수 있습니다.</p>
<p>useCallback을 사용하여 함수를 메모이즈하는 방법의 예시는 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">SearchBar</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onSearch <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>query<span class="token punctuation">,</span> setQuery<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> handleQueryChange <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setQuery</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">onSearch</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>onSearch<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> value<span class="token operator">=</span><span class="token punctuation">{</span>query<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleQueryChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
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
<p>이 예에서는 onSearch 프로퍼티 함수를 사용하는 SearchBar 컴포넌트를 정의합니다. useCallback 훅을 사용하여 handleQueryChange 함수를 메모이제이션하여 onSearch 함수가 변경될 때만 다시 생성되도록합니다.</p>
<h2 id="_6-usememo-훅" tabindex="-1"><a class="header-anchor" href="#_6-usememo-훅" aria-hidden="true">#</a> 6: useMemo 훅</h2>
<p>useMemo 훅을 사용하면 값이 의존성이 변경될 때만 다시 계산되도록 값을 메모이제이션 할 수 있습니다. 이를 통해 불필요한 다시 계산을 방지하여 성능을 향상시킬 수 있습니다.</p>
<p>useMemo를 사용하여 계산된 값을 메모이제이션하는 방법에 대한 예시는 다음과 같습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useMemo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ExpensiveCalculation</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> a<span class="token punctuation">,</span> b <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'계산 중...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>결과<span class="token operator">:</span> <span class="token punctuation">{</span>result<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서는 두 개의 props인 a와 b를 받는 ExpensiveCalculation 컴포넌트를 정의합니다. 계산 결과를 메모이제이션하기 위해 useMemo 훅을 사용하여 a 또는 b가 변경될 때만 다시 계산됩니다.</p>
<h1 id="_7-useref-훅" tabindex="-1"><a class="header-anchor" href="#_7-useref-훅" aria-hidden="true">#</a> 7: useRef 훅</h1>
<p>useRef 훅을 사용하면 컴포넌트의 수명 동안 지속되는 변경 가능한 ref 객체를 생성할 수 있습니다. 다시 렌더링을 유발하지 않는 값들을 저장하고 액세스하는 데 사용할 수 있습니다.</p>
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
<p>아래 예시는 useRef를 사용하여 입력 요소의 값을 액세스하는 방법을 보여줍니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">InputWithFocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> inputRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    inputRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> ref<span class="token operator">=</span><span class="token punctuation">{</span>inputRef<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span><span class="token operator">></span>Focus Input<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서는 useRef 훅을 사용하여 ref 객체를 생성하고 input 요소에 연결하는 InputWithFocus 컴포넌트를 정의합니다. ref 객체를 사용하여 &quot;Focus Input&quot; 버튼을 클릭했을 때 입력에 초점을 맞춥니다.</p>
<h1 id="_8-uselayouteffect-훅" tabindex="-1"><a class="header-anchor" href="#_8-uselayouteffect-훅" aria-hidden="true">#</a> 8: useLayoutEffect 훅</h1>
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
<p>useLayoutEffect 훅은 useEffect와 유사하지만 모든 DOM 변이 후 동기적으로 실행됩니다. 이는 컴포넌트가 렌더링된 직후 DOM을 조작하는 데 유용합니다.</p>
<p>다음은 요소의 크기를 측정할 때 useLayoutEffect를 사용하는 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useLayoutEffect<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ResizableBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>width<span class="token punctuation">,</span> setWidth<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>height<span class="token punctuation">,</span> setHeight<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> boxRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useLayoutEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleResize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setWidth</span><span class="token punctuation">(</span>boxRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span>clientWidth<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setHeight</span><span class="token punctuation">(</span>boxRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span>clientHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">handleResize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'resize'</span><span class="token punctuation">,</span> handleResize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'resize'</span><span class="token punctuation">,</span> handleResize<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token punctuation">{</span>boxRef<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'50%'</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'50%'</span><span class="token punctuation">,</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'red'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>Width<span class="token operator">:</span> <span class="token punctuation">{</span>width<span class="token punctuation">}</span>px<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>Height<span class="token operator">:</span> <span class="token punctuation">{</span>height<span class="token punctuation">}</span>px<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서는 resizableBox 컴포넌트를 정의하고, useLayoutEffect 훅을 사용하여 div 요소의 크기를 측정합니다. 그런 다음 크기 값을 사용하여 상자의 너비와 높이를 렌더링합니다. 훅은 창 크기 조정 시 사이즈 값을 업데이트하기 위해 크기 이벤트 리스너를 추가하고 제거합니다.</p>
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
<h1 id="_9-usedebugvalue-훅" tabindex="-1"><a class="header-anchor" href="#_9-usedebugvalue-훅" aria-hidden="true">#</a> 9: useDebugValue 훅</h1>
<p>useDebugValue는 React DevTools에서 사용자 정의 훅에 대한 디버깅 정보를 표시할 수 있는 훅입니다. 이는 훅을 디버깅하고 무엇이 뒤에서 일어나고 있는지 이해하는 데 유용할 수 있습니다.</p>
<p>다음은 useDebugValue를 사용하는 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect<span class="token punctuation">,</span> useDebugValue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">useFetch</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token function">setData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useDebugValue</span><span class="token punctuation">(</span>data <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">데이터 로드됨: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span>length<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 항목</span><span class="token template-punctuation string">`</span></span> <span class="token operator">:</span> <span class="token string">'로딩 중...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> data<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 예시에서는 URL에서 데이터를 가져와 반환하는 useFetch라는 사용자 정의 훅을 정의합니다. useDebugValue 훅을 사용하여 React DevTools에 사용자 정의 디버깅 메시지를 표시합니다. 데이터가 로드된 경우 데이터 항목 수를 포함하는 메시지를 표시합니다. 데이터가 아직 로드 중인 경우 &quot;로드 중...&quot;이라는 메시지를 표시합니다.</p>
<p>컴포넌트에서 useFetch 훅을 사용할 때 React DevTools에 사용자 정의 디버깅 메시지가 표시됩니다. 이는 무슨 일이 벌어지고 있는지 이해하고 발생할 수있는 문제를 해결하는 데 도움이 될 수 있습니다.</p>
<p>useDebugValue 훅은 디버깅 목적으로만 사용해야하며 사용자 정의 훅의 동작에는 영향을 미치지 않아야합니다. 사용자 정의 훅 작업 시 디버깅 도구 상에 좋은 도구입니다.</p>
<h1 id="_10-useimperativehandle-훅" tabindex="-1"><a class="header-anchor" href="#_10-useimperativehandle-훅" aria-hidden="true">#</a> 10: useImperativeHandle 훅</h1>
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
<p><code v-pre>useImperativeHandle</code> 훅을 사용하면 ref를 사용할 때 부모 컴포넌트에 노출되는 인스턴스 값을 사용자 정의할 수 있습니다. 이를 통해 자식 컴포넌트의 내부 구현 세부 정보를 모두 노출하고 싶지 않을 때 유용할 수 있습니다.</p>
<p><code v-pre>useImperativeHandle</code>를 사용하는 예제입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useRef<span class="token punctuation">,</span> useImperativeHandle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Input <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> inputRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useImperativeHandle</span><span class="token punctuation">(</span>ref<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">focus</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      inputRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> inputRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span>value
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>input
      type<span class="token operator">=</span><span class="token string">"text"</span>
      ref<span class="token operator">=</span><span class="token punctuation">{</span>inputRef<span class="token punctuation">}</span>
      placeholder<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>placeholder<span class="token punctuation">}</span>
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> inputRef <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    inputRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>Input ref<span class="token operator">=</span><span class="token punctuation">{</span>inputRef<span class="token punctuation">}</span> placeholder<span class="token operator">=</span><span class="token string">"여기에 입력하세요"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span><span class="token operator">></span>입력란에 초점 맞추기<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서는 <code v-pre>useImperativeHandle</code>을 사용하여 ref를 사용할 때 부모 컴포넌트에 노출될 focus 메서드와 value 속성을 가진 사용자 지정 Input 컴포넌트를 정의했습니다. <code v-pre>useImperativeHandle</code> 훅은 ref 객체와 부모 컴포넌트에 노출될 속성 및 메서드를 반환하는 콜백 함수 두 가지 인수를 사용합니다.</p>
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
<p>앱 컴포넌트에서 Input 컴포넌트를 사용하고 ref 객체를 전달합니다. 또한 클릭 시 inputRef 객체의 focus 메서드를 호출하는 handleClick 함수를 정의합니다.</p>
<p>이 코드를 실행하면 플레이스홀더 텍스트가 있는 입력 필드와 “입력에 초점 맞추기”라는 버튼이 표시됩니다. 버튼을 클릭하면 inputRef 객체의 focus 메서드가 호출되어 입력 필드가 초점을 맞춥니다.</p>
<p>요약하면 useImperativeHandle 훅을 사용하면 ref를 사용할 때 부모 컴포넌트에 노출되는 인스턴스 값을 사용자 정의할 수 있습니다. 자식 컴포넌트의 내부 구현 세부 정보를 모두 노출하고 싶지 않을 때 부모 컴포넌트에 특정 인터페이스를 제공해야 할 때 유용합니다.</p>
<h1 id="요약" tabindex="-1"><a class="header-anchor" href="#요약" aria-hidden="true">#</a> 요약</h1>
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
<li>&quot;강력한 React 훅을 사용하면 웹 개발을 더 나은 수준으로 끌어올려 효율적이고 효과적인 애플리케이션을 만들 수 있어요.&quot;</li>
<li>&quot;useReducer로 상태를 관리하거나 useMemo 및 useCallback을 사용해 성능을 최적화하는 등, 이러한 React 훅은 개발자들에게 혁신을 가져다 줍니다.&quot;</li>
<li>&quot;경험이 풍부한 React 개발자든, 막 시작한 개발자든, 이 훅은 코드를 간소화하고 성능을 향상시키며 사용자 경험을 향상시킬 수 있어요.&quot;</li>
<li>&quot;useDebugValue와 useImperativeHandle과 같은 React 훅의 최대 잠재력을 활용하여 코드를 최적화하고 유지보수 및 확장 가능성을 향상시킬 수 있어요.&quot;</li>
<li>&quot;요약하자면, React 훅은 모든 개발자가 갖추어야 할 강력한 도구입니다. 프로젝트에 이러한 훅을 통합함으로써 더 나은, 빠르고 반응성 있는 웹 애플리케이션을 만들 수 있어요.&quot;</li>
</ul>
<h1 id="마음에-드시면-좋아요와-팔로우-부탁드려요" tabindex="-1"><a class="header-anchor" href="#마음에-드시면-좋아요와-팔로우-부탁드려요" aria-hidden="true">#</a> 마음에 드시면 좋아요와 팔로우 부탁드려요.</h1>
</div></template>
