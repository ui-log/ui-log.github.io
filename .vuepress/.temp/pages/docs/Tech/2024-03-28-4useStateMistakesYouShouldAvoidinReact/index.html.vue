<template><div><p><img src="@source/docs/Tech/2024-03-28-4useStateMistakesYouShouldAvoidinReact/img/4useStateMistakesYouShouldAvoidinReact_0.png" alt="4useStateMistakesYouShouldAvoidinReact_0"></p>
<h2 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h2>
<p>React.js는 현대 웹 개발의 중심 요소가 되었으며, 컴포넌트 내에서 상태를 관리하는 독특한 방식으로 유명합니다. 일반적인 훅 중 하나인 useState는 기본적이지만 종종 오용됩니다. 이러한 일반적인 실수를 이해하고 피하는 것은 효율적이고 버그가 없는 애플리케이션을 만드는 것을 목표로 하는 초보자와 경험있는 개발자 양쪽에게 모두 중요합니다.</p>
<p>본 블로그에서는 React에서 useState를 사용할 때 피해야 할 네 가지 중요한 실수에 대해 살펴볼 것입니다. 함께 React 스킬을 향상시켜봅시다!</p>
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
<p>더 들어가기 전에 내 개인 웹사이트에서 웹 개발에 관한 보다 심층적인 기사들을 살펴보세요:</p>
<h3 id="실수-1-이전-상태를-고려하지-않는-것-😨" tabindex="-1"><a class="header-anchor" href="#실수-1-이전-상태를-고려하지-않는-것-😨" aria-hidden="true">#</a> 실수 1: 이전 상태를 고려하지 않는 것 😨</h3>
<p>React의 useState 훅을 사용할 때 흔한 실수는 가장 최근의 상태를 업데이트할 때 고려하지 않는 것입니다. 이 실수는 특히 빠른 상태 업데이트나 여러 상태 업데이트와 관련된 경우에 예상치 못한 행동으로 이어질 수 있습니다.</p>
<h3 id="❌-이슈를-이해하기" tabindex="-1"><a class="header-anchor" href="#❌-이슈를-이해하기" aria-hidden="true">#</a> ❌ 이슈를 이해하기</h3>
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
<p>상상해보세요. React에서 카운터를 만들고 있는 상황입니다. 버튼이 클릭될 때마다 카운트를 증가시키는 것이 목표입니다. 간단한 접근 방법은 현재 상태 값에 1을 더하는 것일 수 있습니다. 그러나 이렇게 하면 문제가 발생할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">CounterComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>counter<span class="token punctuation">,</span> setCounter<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">incrementCounter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setCounter</span><span class="token punctuation">(</span>counter <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 항상 올바르게 작동하지 않을 수 있습니다</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>Counter<span class="token operator">:</span> <span class="token punctuation">{</span>counter<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>incrementCounter<span class="token punctuation">}</span><span class="token operator">></span>Increment<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> CounterComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 코드에서 incrementCounter는 현재 값에 기반하여 카운터를 업데이트합니다. 이것은 간단해 보이지만 문제를 일으킬 수 있습니다. React는 여러 번의 setCounter 호출을 묶을 수도 있고, 다른 상태 업데이트가 간섭하여 카운터가 매번 올바르게 업데이트되지 않을 수 있습니다.</p>
<h2 id="✅-수정-방법" tabindex="-1"><a class="header-anchor" href="#✅-수정-방법" aria-hidden="true">#</a> ✅ 수정 방법:</h2>
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
<p>이 문제를 피하려면 setCounter 메서드의 기능적 형태를 사용하십시오. 이 버전은 함수를 인수로 취하며, React는 가장 최신의 상태 값을 전달합니다. 이를 통해 항상 최신 상태 값을 사용하게 됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">CounterComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>counter<span class="token punctuation">,</span> setCounter<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">incrementCounter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setCounter</span><span class="token punctuation">(</span><span class="token parameter">prevCounter</span> <span class="token operator">=></span> prevCounter <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 최신 상태를 기반으로 올바르게 업데이트</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>Counter<span class="token operator">:</span> <span class="token punctuation">{</span>counter<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>incrementCounter<span class="token punctuation">}</span><span class="token operator">></span>Increment<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> CounterComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 수정된 코드에서 incrementCounter는 함수를 사용하여 상태를 업데이트합니다. 이 함수는 가장 최신 상태(prevCounter)를 받아 업데이트된 상태를 반환합니다. 이 방식은 특히 업데이트가 빠르게 또는 여러 번 연속해서 발생하는 경우에 훨씬 더 신뢰할 수 있습니다.</p>
<h2 id="실수-2-상태-불변성을-방치하기-🧊" tabindex="-1"><a class="header-anchor" href="#실수-2-상태-불변성을-방치하기-🧊" aria-hidden="true">#</a> 실수 2: 상태 불변성을 방치하기 🧊</h2>
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
<h2 id="❌-문제-이해하기" tabindex="-1"><a class="header-anchor" href="#❌-문제-이해하기" aria-hidden="true">#</a> ❌ 문제 이해하기</h2>
<p>React에서는 상태(state)를 불변(immutable)하게 다루어야 합니다. 일반적인 실수 중 하나는 객체나 배열과 같은 복잡한 데이터 구조를 직접 수정하는 것입니다.</p>
<p>다음과 같이 잘못된 방식을 살펴보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ProfileComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>profile<span class="token punctuation">,</span> setProfile<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">updateAge</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    profile<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">31</span><span class="token punctuation">;</span> <span class="token comment">// 상태 직접 수정하는 실수</span>
    <span class="token function">setProfile</span><span class="token punctuation">(</span>profile<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>Name<span class="token operator">:</span> <span class="token punctuation">{</span>profile<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>Age<span class="token operator">:</span> <span class="token punctuation">{</span>profile<span class="token punctuation">.</span>age<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>updateAge<span class="token punctuation">}</span><span class="token operator">></span>나이 업데이트<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ProfileComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>테이블 태그를 Markdown 형식으로 변경하십시오.</p>
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
<p>수정된 코드에서 updateAge는 상태 불변성을 유지하면서 업데이트된 나이로 새 프로필 객체를 생성하기 위해 스프레드 연산자를 사용합니다.</p>
<h2 id="실수-3-비동기-업데이트-오해-⏳" tabindex="-1"><a class="header-anchor" href="#실수-3-비동기-업데이트-오해-⏳" aria-hidden="true">#</a> 실수 3: 비동기 업데이트 오해 ⏳</h2>
<h2 id="❌-문제-이해하기-1" tabindex="-1"><a class="header-anchor" href="#❌-문제-이해하기-1" aria-hidden="true">#</a> ❌ 문제 이해하기</h2>
<p>React의 useState를 통한 상태 업데이트는 비동기적으로 이루어집니다. 이는 종종 여러 상태 업데이트가 빠르게 일어날 때 헷갈릴 수 있습니다. 개발자들은 setState 호출 후 즉시 상태가 변경될 것으로 기대할 수 있지만, 사실은 React가 이러한 업데이트를 성능상의 이유로 일괄 처리합니다.</p>
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
<p>자주 발생하는 상황을 살펴보면 이해를 잘못하여 문제가 생길 수 있다는 점을 알 수 있어요</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">AsyncCounterComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">incrementCount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 개발자는 카운트가 두 번 증가될 것으로 예상합니다</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>Count<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>incrementCount<span class="token punctuation">}</span><span class="token operator">></span>Increment Count<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> AsyncCounterComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서, 개발자는 count를 두 번 증가시키려고 합니다. 그러나 상태 업데이트가 비동기적인 성질을 가지고 있기 때문에, 두 <code v-pre>setCount</code> 호출 모두 같은 초기 상태를 기반으로 하여 카운트가 한 번만 증가됩니다.</p>
<h2 id="✅-수정-방법-1" tabindex="-1"><a class="header-anchor" href="#✅-수정-방법-1" aria-hidden="true">#</a> ✅ 수정 방법:</h2>
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
<p>비동기 업데이트를 올바르게 다루려면 setCount의 함수형 업데이트 형식을 사용해야 합니다. 이를 통해 각 업데이트가 가장 최근의 상태를 기반으로 하도록 보장합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">AsyncCounterComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">incrementCount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token parameter">prevCount</span> <span class="token operator">=></span> prevCount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token parameter">prevCount</span> <span class="token operator">=></span> prevCount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 이제 각 업데이트는 가장 최근 상태에 맞게 정확히 의존합니다</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// 선택 사항: 업데이트된 상태를 확인하기 위해 useEffect 사용</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>Count<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>incrementCount<span class="token punctuation">}</span><span class="token operator">></span>Increment Count<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> AsyncCounterComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 코드에서 setCount 호출은 상태의 가장 최신 값을 사용하여 정확하고 순차적인 업데이트를 보장합니다. 이 접근 방식은 현재 상태에 의존하는 작업에 중요하며 특히 연속으로 여러 상태 업데이트가 발생할 때 핵심적입니다.</p>
<h2 id="실수-4-파생-데이터에-상태를-오용하기-📊" tabindex="-1"><a class="header-anchor" href="#실수-4-파생-데이터에-상태를-오용하기-📊" aria-hidden="true">#</a> 실수 4: 파생 데이터에 상태를 오용하기 📊</h2>
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
<h2 id="❌-이해해야-할-사항" tabindex="-1"><a class="header-anchor" href="#❌-이해해야-할-사항" aria-hidden="true">#</a> ❌ 이해해야 할 사항</h2>
<p>자주 발생하는 오류 중 하나는 기존 상태나 속성에서 파생될 수 있는 데이터에 상태를 사용하는 것입니다. 이 중복된 상태는 복잡하고 오류가 발생하기 쉬운 코드로 이어질 수 있습니다.</p>
<p>예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">GreetingComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>greeting<span class="token punctuation">,</span> setGreeting<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>greeting<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> GreetingComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>여기서 인사말 상태는 이름에서 직접 유도할 수 있기 때문에 필요하지 않습니다.</p>
<h2 id="✅-수정-내용" tabindex="-1"><a class="header-anchor" href="#✅-수정-내용" aria-hidden="true">#</a> ✅ 수정 내용:</h2>
<p>state 대신 기존 state나 props로부터 데이터를 직접 유도하도록 수정하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">GreetingComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> greeting <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">안녕하세요, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span> <span class="token comment">// props로부터 직접 유도</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>greeting<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> GreetingComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>수정된 코드에서는 greeting이 이름 속성에서 직접 계산되어 컴포넌트를 단순화하고 불필요한 상태 관리를 피했습니다.</p>
<h2 id="결론-🚀" tabindex="-1"><a class="header-anchor" href="#결론-🚀" aria-hidden="true">#</a> 결론 🚀</h2>
<p>React에서 useState 훅을 효과적으로 활용하는 것은 신뢰할 수 있고 효율적인 애플리케이션을 구축하는 데 중요합니다. 이전 상태를 무시하거나 상태의 불변성을 지키지 않는 것, 비동기 업데이트를 간과하는 것, 파생 데이터를 위한 중복 상태를 만들지 않는 것과 같은 일반적인 실수를 이해하고 피함으로써 더 부드럽고 예측 가능한 컴포넌트 동작을 보장할 수 있습니다. 이러한 통찰력을 염두에 두고 React 개발 여정을 향상시키고 더 견고한 애플리케이션을 만들어보세요.</p>
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
<p>행복한 코딩하세요!!</p>
</div></template>
