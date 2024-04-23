<template><div><p><img src="@source/docs/Nextjs/2024-04-05-DecodinguseMemoandmemoinReactUnderstandingTheirTrueDistinction/img/DecodinguseMemoandmemoinReactUnderstandingTheirTrueDistinction_0.png" alt="Decoding useMemo and memo in React"></p>
<h1 id="리액트의-usememo-훅-vs-memo-하이어오더-컴포넌트-초보자를-위한-비교" tabindex="-1"><a class="header-anchor" href="#리액트의-usememo-훅-vs-memo-하이어오더-컴포넌트-초보자를-위한-비교" aria-hidden="true">#</a> 리액트의 useMemo 훅 vs memo 하이어오더 컴포넌트: 초보자를 위한 비교</h1>
<p>사용자 인터페이스를 개발하는 데 널리 사용되는 자바스크립트 라이브러리인 리액트는 응용프로그램 성능을 향상시키기 위한 다양한 도구와 전략을 제공합니다. 이 중에서 useMemo와 memo는 불필요한 컴포넌트 재렌더링을 최소화하는 데 자주 사용되는 기술로 두드러집니다. 유사한 목표를 공유하고 있지만, 그들의 구현과 적합한 시나리오에서 현저하게 차이가 납니다. 이 기사에서는 리액트 내의 useMemo와 memo 사이의 명확한 차이점을 탐색합니다.</p>
<h1 id="usememo-리액트의-값-캐싱-훅을-활용하기" tabindex="-1"><a class="header-anchor" href="#usememo-리액트의-값-캐싱-훅을-활용하기" aria-hidden="true">#</a> useMemo: 리액트의 값 캐싱 훅을 활용하기</h1>
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
<li>useMemo은 함수의 결과를 메모이즈하는 훅입니다. 함수와 의존성 배열을 인자로 받아들이며, 의존성 중 하나가 변경되었을 때에만 메모이즈된 값의 재계산이 발생합니다.</li>
<li>주로 렌더링할 때마다 다시 실행할 필요가 없는 비용이 많이 드는 계산이나 연산을 최적화하는 데 사용됩니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useMemo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">calculateFactorial</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">//계산 비용이 높은 팩토리얼 계산을 모방</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'팩토리얼 계산 중...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">*=</span> i<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">FactorialComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>number<span class="token punctuation">,</span> setNumber<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 숫자를 기반으로한 팩토리얼 계산을 메모이즈</span>
  <span class="token keyword">const</span> factorial <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">calculateFactorial</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>number<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleNumberChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newNumber <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isNaN</span><span class="token punctuation">(</span>newNumber<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> newNumber <span class="token operator">>=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setNumber</span><span class="token punctuation">(</span>newNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>label<span class="token operator">></span>숫자를 입력하세요<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"number"</span> value<span class="token operator">=</span><span class="token punctuation">{</span>number<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleNumberChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>number<span class="token punctuation">}</span>의 팩토리얼<span class="token operator">:</span> <span class="token punctuation">{</span>factorial<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> FactorialComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서:</p>
<ul>
<li>사용자가 숫자를 입력할 수 있는 FactorialComponent가 있습니다.</li>
<li>calculateFactorial은 주어진 숫자에 대한 계산 비용이 많은 팩토리얼 계산을 모방합니다.</li>
<li>우리는 useMemo를 사용하여 숫자 상태를 기반으로한 팩토리얼 계산을 메모이즈합니다. 이를 통해 팩토리얼이 숫자가 변경될 때에만 재계산되도록 합니다.</li>
<li>사용자가 유효한 숫자를 입력하면 해당 숫자의 팩토리얼이 표시됩니다.</li>
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
<p>만약 숫자 state가 렌더링 간에 변경되지 않는다면, useMemo는 이전에 캐시된 팩토리얼 값을 다시 계산하지 않고 반환할 것입니다. 이 최적화를 통해 팩토리얼 계산이 필요할 때만 수행되며, 각 렌더링 사이클마다 불필요한 계산을 피함으로써 컴포넌트의 성능을 향상시킵니다.</p>
<h1 id="메모-리액트-컴포넌트-렌더링-최적화" tabindex="-1"><a class="header-anchor" href="#메모-리액트-컴포넌트-렌더링-최적화" aria-hidden="true">#</a> 메모: 리액트 컴포넌트 렌더링 최적화</h1>
<ul>
<li>memo는 함수형 컴포넌트를 메모이제이션하는 고차원 컴포넌트(HOC)입니다. 이전 프롭스와 다음 프롭스를 비교하고 프롭스가 변경되었을 때에만 컴포넌트를 다시 렌더링합니다.</li>
<li>프롭스가 변경되지 않았을 때 함수형 컴포넌트의 불필요한 다시 렌더링을 방지하는 데 유용합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> memo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token comment">// memo를 사용하여 메모이즈된 함수형 컴포넌트</span>
<span class="token keyword">const</span> MemoizedComponent <span class="token operator">=</span> <span class="token function">memo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> count <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'MemoizedComponent 다시 렌더링 중...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Count<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">incrementCount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>incrementCount<span class="token punctuation">}</span><span class="token operator">></span>카운트 증가<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span>MemoizedComponent count<span class="token operator">=</span><span class="token punctuation">{</span>count<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 예제에서:</p>
<ul>
<li>MemoizedComponent는 memo HOC로 래핑된 함수형 컴포넌트입니다.</li>
<li>이 컴포넌트는 count prop을 받아 렌더링합니다.</li>
<li>App은 count 상태를 증가시킬 버튼을 포함한 주요 컴포넌트입니다.</li>
<li>MemoizedComponent는 App 내에서 렌더링되고 현재 count 값을 표시합니다.</li>
<li>count 상태가 변경되면 memo에 의해 제공되는 메모이제이션 덕분에 MemoizedComponent가 count prop이 변경된 경우에만 다시 렌더링됩니다.</li>
</ul>
<p>memo HOC는 이곳에서 MemoizedComponent의 prop(count)이 변경되지 않았을 때의 불필요한 다시 렌더링을 방지하기 위해 사용됩니다. 이 최적화는 특히 prop에 의존하지만 매 렌더링마다 업데이트가 필요하지 않은 함수형 컴포넌트에 유용합니다.</p>
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
<p>요약하면, useMemo는 함수의 결과를 메모이제이션하는 데 사용되고, memo는 함수형 컴포넌트의 렌더링을 메모이제이션하는 데 사용됩니다. 둘 다 불필요한 계산이나 렌더링을 줄여 성능을 향상시키지만, React 애플리케이션 내에서 서로 다른 맥락에서 적용됩니다.</p>
<p>읽어 주셔서 감사합니다!</p>
</div></template>
