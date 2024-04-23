<template><div><p><img src="@source/docs/Nextjs/2024-04-05-ReactTestingLibraryUnderstandingactandwhentouseit/img/ReactTestingLibraryUnderstandingactandwhentouseit_0.png" alt="React Testing Library"></p>
<p>리액트 테스팅 라이브러리의 세계에서 act() 함수는 종종 다소 신비로운 존재로 나타납니다. &quot;테스트 내부의 ComponentName 업데이트가 act(...)로 래핑되지 않았습니다&quot;와 같은 경고를 본 적이 있을 것입니다. 이 기사에서는 act() 함수를 해석하고 특정 테스트 시나리오에서 왜 중요한지 설명하겠습니다.</p>
<h1 id="act-함수의-목적" tabindex="-1"><a class="header-anchor" href="#act-함수의-목적" aria-hidden="true">#</a> act() 함수의 목적</h1>
<p>act()의 주요 목적은 React 컴포넌트와 관련된 모든 업데이트(예: 상태 변경, 효과 등)가 처리되고 적용된 후 테스트에서 다음 작업으로 넘어가도록 하는 것입니다. 이는 테스트가 실제 브라우저 환경에서 React가 작동하는 방식을 시뮬레이션하도록 도와줍니다.</p>
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
<h1 id="act-함수를-사용해야-하는-경우" tabindex="-1"><a class="header-anchor" href="#act-함수를-사용해야-하는-경우" aria-hidden="true">#</a> <code v-pre>act()</code> 함수를 사용해야 하는 경우</h1>
<p><code v-pre>act()</code> 함수를 사용해야 하는 경우는 주로 테스트 중에 사용자 상호 작용이 발생하여 구성 요소에서 상태 업데이트나 효과를 일으키는 경우입니다. 예를 들어 구성 요소 내의 일부 상태를 수정하는 버튼 클릭과 같은 상호 작용을 트리거하는 경우입니다.</p>
<h1 id="act-함수를-사용하지-않은-예시" tabindex="-1"><a class="header-anchor" href="#act-함수를-사용하지-않은-예시" aria-hidden="true">#</a> <code v-pre>act()</code> 함수를 사용하지 않은 예시</h1>
<p>다음과 같은 간단한 컴포넌트를 살펴보겠습니다:</p>
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

<span class="token keyword">const</span> <span class="token function-variable function">Counter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>증가<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Counter<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 act()를 사용하지 않는 테스트 케이스를 작성해봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> fireEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@testing-library/react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Counter <span class="token keyword">from</span> <span class="token string">'./Counter'</span><span class="token punctuation">;</span>

<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"카운트를 증가시킵니다"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> getByText <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Counter <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  fireEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">'증가'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서는 어떤 경고 메시지도 보이지 않을 수 있습니다. 그러나 비동기 호출과 같은 부작용이 있는 컴포넌트의 경우 &quot;not wrapped in act(...)&quot; 경고가 나타날 수 있습니다.```</p>
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
<h1 id="findby로-이동" tabindex="-1"><a class="header-anchor" href="#findby로-이동" aria-hidden="true">#</a> findBy로 이동</h1>
<p>findBy 쿼리는 getBy 쿼리의 슈퍼히어로 버전 같은 것인데 비동기 작업을 위한 것이에요. 지정된 시간 내에 요소를 찾으면 해결되는 Promise를 반환하고 해당 요소가 찾아지지 않을 경우에는 거부돼요.</p>
<p>문법은 getBy와 유사해요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> button <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">findByRole</span><span class="token punctuation">(</span><span class="token string">'button'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Click Me'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="왜-findby를-사용하는-것이-더-나은-이유" tabindex="-1"><a class="header-anchor" href="#왜-findby를-사용하는-것이-더-나은-이유" aria-hidden="true">#</a> 왜 findBy를 사용하는 것이 더 나은 이유</h1>
<h2 id="act-암시적으로-적용" tabindex="-1"><a class="header-anchor" href="#act-암시적으로-적용" aria-hidden="true">#</a> act() 암시적으로 적용</h2>
<p>findBy는 쿼리를 자동으로 act()로 래핑합니다. 이는 테스트를 더 깔끔하게 만들 뿐만 아니라 비동기 호출을 act()로 래핑하는 것을 잊지 않도록 보장합니다.</p>
<h2 id="쉬운-비동기-처리" tabindex="-1"><a class="header-anchor" href="#쉬운-비동기-처리" aria-hidden="true">#</a> 쉬운 비동기 처리</h2>
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
<p>한 예시를 살펴보겠습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">AsyncComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/api/data'</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>data <span class="token operator">?</span> data<span class="token punctuation">.</span>message <span class="token operator">:</span> <span class="token string">'로딩 중...'</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="act-사용하기" tabindex="-1"><a class="header-anchor" href="#act-사용하기" aria-hidden="true">#</a> act() 사용하기</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> act <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@testing-library/react'</span><span class="token punctuation">;</span>

<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'데이터를 가져와서 표시해야 합니다'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> getByText <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>AsyncComponent <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">await</span> <span class="token function">act</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">'안녕'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="findby-사용" tabindex="-1"><a class="header-anchor" href="#findby-사용" aria-hidden="true">#</a> findBy 사용</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@testing-library/react'</span><span class="token punctuation">;</span>

<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'데이터를 가져와서 표시해야 합니다'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> findByText <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>AsyncComponent <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">findByText</span><span class="token punctuation">(</span><span class="token string">'Hello'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">expect</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>findBy 예제에서 코드가 훨씬 더 깔끔하다는 것을 알 수 있습니다. act() 예제와 동일한 작업을 하지만 더 간결하고 직관적입니다.</p>
<h1 id="에러-처리" tabindex="-1"><a class="header-anchor" href="#에러-처리" aria-hidden="true">#</a> 에러 처리</h1>
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
<p>만약 findBy가 지정된 시간 내에 요소를 찾지 못하면 자동으로 오류를 throw하며, 어떤 문제가 발생했는지 쉽게 디버깅할 수 있습니다. 이는 테스트 코드를 작성할 때 실제 코드가 실제 환경에서 동작하는 방식과 유사하도록 만드는 철학과 일치합니다.</p>
<h1 id="다른-암묵적-act-호출" tabindex="-1"><a class="header-anchor" href="#다른-암묵적-act-호출" aria-hidden="true">#</a> 다른 암묵적 act() 호출</h1>
<p>findBy가 act()로 쿼리를 암묵적으로 감싸는 유일한 함수가 아닙니다. 이런 경우에도 act()가 발생하는 다른 경우가 있습니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-ReactTestingLibraryUnderstandingactandwhentouseit/img/ReactTestingLibraryUnderstandingactandwhentouseit_1.png" alt="이미지"></p>
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
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>act()은 강력하며 더 많은 제어 수준을 제공하지만, findBy 쿼리는 React 컴포넌트에서 비동기 작업을 테스트하는 더 우아하고 덜 장황한 방법을 제공합니다. 암시적인 act() 래핑은 테스트가 깨끗하고 신뢰할 수 있도록 보장하며, 종종 findBy를 사용하여 테스트에서 비동기 동작을 다루는 것이 선호되는 선택지가 됩니다.</p>
</div></template>
