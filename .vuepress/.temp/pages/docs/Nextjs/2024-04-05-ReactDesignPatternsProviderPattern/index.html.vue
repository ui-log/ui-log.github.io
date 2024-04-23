<template><div><h2 id="컴포넌트-트리를-통해-데이터를-관리하고-전달하는-구조화된-방법" tabindex="-1"><a class="header-anchor" href="#컴포넌트-트리를-통해-데이터를-관리하고-전달하는-구조화된-방법" aria-hidden="true">#</a> 컴포넌트 트리를 통해 데이터를 관리하고 전달하는 구조화된 방법</h2>
<p><img src="@source/docs/Nextjs/2024-04-05-ReactDesignPatternsProviderPattern/img/ReactDesignPatternsProviderPattern_0.png" alt="이미지"></p>
<p>React의 Provider Pattern은 React의 context API를 활용하여 컴포넌트 트리를 통해 데이터를 관리하고 전달하는 구조화된 방법을 만드는 디자인 패턴입니다. 이는 데이터를 필요로 하지 않는 컴포넌트도 포함하여 데이터를 여러 계층을 통해 전달해야 하는 prop drilling을 피하는 데 도움이 됩니다.</p>
<h1 id="provider-pattern의-구조" tabindex="-1"><a class="header-anchor" href="#provider-pattern의-구조" aria-hidden="true">#</a> Provider Pattern의 구조</h1>
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
<p>공급자 패턴의 구조는 일반적으로 세 부분으로 구성됩니다.</p>
<h2 id="컨텍스트" tabindex="-1"><a class="header-anchor" href="#컨텍스트" aria-hidden="true">#</a> 컨텍스트</h2>
<p>구조에서 사용되는 컨텍스트 변수를 정의하는 파일입니다. React의 createContext 함수를 사용하여 생성됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> UserContext <span class="token operator">=</span> <span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="제공자" tabindex="-1"><a class="header-anchor" href="#제공자" aria-hidden="true">#</a> 제공자</h2>
<p>주어진 어떤 자식 요소를 동적 컨텍스트로 랩핑하는 주요 컨텍스트 제공자입니다. 이 컴포넌트는 컨텍스트를 사용하고 해당 값을 컴포넌트 트리 아래의 모든 컴포넌트에 제공합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">UserProvider</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'World'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span> setName <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>UserContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>UserContext<span class="token punctuation">.</span>Provider<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="훅" tabindex="-1"><a class="header-anchor" href="#훅" aria-hidden="true">#</a> 훅</h2>
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
<p>현재 컨텍스트 값을 컴포넌트에 제공하는 맞춤형 후크입니다. 이 데이터가 필요한 모든 컴포넌트에서 컨텍스트를 사용하는 데 사용됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> UserContext <span class="token keyword">from</span> <span class="token string">'./context'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">useUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">useContext</span><span class="token punctuation">(</span>UserContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="실습" tabindex="-1"><a class="header-anchor" href="#실습" aria-hidden="true">#</a> 실습</h1>
<p>보다시피 Provider 패턴은 리액트의 useContext 후크와 함께 사용할 수 있습니다. useContext 후크는 내장 후크로, 컴포넌트를 Context.Consumer 컴포넌트로 래핑하지 않고도 컨텍스트를 사용할 수 있게 해줍니다. 이를 통해 코드를 더 깨끗하고 이해하기 쉽게 만들어 줍니다.</p>
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
<p>프로바이더 패턴을 useContext 훅과 함께 사용하는 예제입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useContext<span class="token punctuation">,</span> createContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token comment">// 단계 1: 컨텍스트 생성</span>
<span class="token keyword">const</span> ThemeContext <span class="token operator">=</span> <span class="token function">createContext</span><span class="token punctuation">(</span><span class="token string">"light"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">"light"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 단계 2: 프로바이더 컴포넌트 생성</span>
<span class="token keyword">const</span> <span class="token function-variable function">ThemeProvider</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>theme<span class="token punctuation">,</span> setTheme<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">"light"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token keyword">return</span> <span class="token punctuation">(</span>
   <span class="token operator">&lt;</span>ThemeContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span> theme<span class="token punctuation">,</span> setTheme <span class="token punctuation">}</span><span class="token operator">></span>
     <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
   <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeContext<span class="token punctuation">.</span>Provider<span class="token operator">></span>
 <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> ThemeContext<span class="token punctuation">,</span> ThemeProvider <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 단계 3: 컨슈머 컴포넌트 생성</span>
<span class="token keyword">const</span> <span class="token function-variable function">UserSettings</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> <span class="token punctuation">{</span> theme<span class="token punctuation">,</span> setTheme <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>ThemeContext<span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 단계 4: 프로바이더로 컴포넌트 감싸기</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token punctuation">(</span>
   <span class="token operator">&lt;</span>ThemeProvider<span class="token operator">></span>
     <span class="token operator">&lt;</span>UserSettings <span class="token operator">/</span><span class="token operator">></span>
     <span class="token punctuation">{</span><span class="token comment">/* 컨텍스트를 사용해야 하는 다른 컴포넌트 */</span><span class="token punctuation">}</span>
   <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeProvider<span class="token operator">></span>
 <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 방법으로, useContext 훅을 사용하여 프로바이더 패턴을 더 직관적이고 명확하게 사용할 수 있습니다.</p>
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
<p>제공자 패턴의 주요 장점 중 하나는 코드를 리팩토링할 때 버그를 도입할 위험을 줄인다는 것입니다. 제공자 패턴을 사용하면 prop의 이름을 바꿔야 할 경우, context 제공자에서만 변경하면 됩니다. 제공자 패턴을 사용하지 않으면 응용 프로그램 전체에서 해당 prop의 모든 인스턴스를 찾아 변경해야 하므로 시간이 많이 소요되고 오류가 발생할 수 있습니다.</p>
<p>제공자 패턴은 응용 프로그램의 전역 상태를 관리하기 쉽게 만듭니다. 전역 상태를 보유하는 컨텍스트 제공자를 생성하고, 그 상태에 액세스해야 하는 모든 구성 요소는 컨텍스트를 통해 그 상태에 액세스할 수 있습니다. 이렇게 하면 응용 프로그램의 상태를 추적하고 관리하기 쉬워집니다.</p>
<p>그러나 제공자 패턴을 신중하게 사용하는 것이 중요합니다. 여러 구성 요소 간에 데이터를 공유하는 데는 좋지만, 지나치게 사용하면 성능 문제가 발생할 수 있습니다. 컨텍스트를 사용하는 모든 구성 요소는 컨텍스트 값이 변경될 때 다시 렌더링됩니다. 따라서 성능을 향상시키기 위해 논리에 따라 데이터를 다른 제공자로 분할하는 것이 좋습니다.</p>
<p>독해해 주셔서 감사합니다. 의견이나 제안 사항이 있으면 아래에 댓글을 남겨주세요.</p>
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
<p>당신은 트위터, 깃허브, 링크드인에서 저를 팔로우할 수 있어요.</p>
<p>안녕히 가세요! 👋</p>
</div></template>
