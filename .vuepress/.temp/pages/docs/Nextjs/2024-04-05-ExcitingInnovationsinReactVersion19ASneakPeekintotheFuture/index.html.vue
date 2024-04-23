<template><div><p>React 공식은 공식적으로 2024년 5월 15-16일에 버전 19을 릴리스할 예정입니다! 마지막 React 업데이트(v18.2 버전) 이후로 600일이 넘게 지났습니다. 이 기간 동안 React 팀은 React 커뮤니티의 호기심을 자극하는 다양한 프로젝트에 착수해왔습니다. 오늘은 이 기간 동안 React 팀이 생산한 일부 연구 결과를 공개하고, 그들이 어떻게 더 많은 혁신과 돌파구를 가져오기 위해 조용히 일해왔는지 살펴봅시다.</p>
<h1 id="_1-hooks-다시-강화" tabindex="-1"><a class="header-anchor" href="#_1-hooks-다시-강화" aria-hidden="true">#</a> 1. Hooks 다시 강화</h1>
<p>React는 주류 프론트엔드 프레임워크로 알려져 있으며, 유연성과 캡슐화 기능으로 자동 변속의 Vue와 비교될 만합니다. 새 API인 React Hooks가 v16.8 버전에 도입된 이후, React 사용 방식을 혁신적으로 바꾸었습니다. 요즘에는 Hooks가 React의 가장 큰 매력 요소 중 하나가 되었습니다. 다가오는 19번째 버전의 React에서는 새로운 Hooks가 소개됩니다. 아래에서 확인해 보겠습니다.</p>
<h1 id="useformstatus" tabindex="-1"><a class="header-anchor" href="#useformstatus" aria-hidden="true">#</a> useFormStatus</h1>
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
<p>공식 링크 useFormStatus는 마지막 폼의 상태에 대한 정보를 제공해주는 상태 훅입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useFormState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-dom"</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token parameter">previousState<span class="token punctuation">,</span> formData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> previousState <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">StatefulForm</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> formAction<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useFormState</span><span class="token punctuation">(</span>increment<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>form<span class="token operator">></span>
    <span class="token punctuation">{</span>state<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>button formAction<span class="token operator">=</span><span class="token punctuation">{</span>formAction<span class="token punctuation">}</span><span class="token operator">></span>Increment<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 코드에서 useFormState 함수는 fn과 initialState 두 매개변수를 사용하고 현재 폼 상태와 액션 함수를 반환합니다.</p>
<ul>
<li>fn: 반환된 값 formAction을 트리거하는 데 사용되며, 폼의 이전 상태와 현재 상태를 받습니다.</li>
<li>initialState: 폼의 초기 상태.</li>
<li>선택적 매개변수 permalink: 폼 제출 후 리디렉션할 URL을 나타냅니다. 기본값은 현재 페이지입니다.</li>
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
<p>두 개의 값으로 구성된 배열을 반환합니다:</p>
<ul>
<li>state: 현재 상태.</li>
<li>formAction: 폼에 전달된 동작.</li>
</ul>
<h1 id="useformstatus-1" tabindex="-1"><a class="header-anchor" href="#useformstatus-1" aria-hidden="true">#</a> useFormStatus()</h1>
<p>마지막 폼 제출의 상태 정보를 제공하는 공식 링크인 useFormStatus 훅입니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useFormStatus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-dom"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> action <span class="token keyword">from</span> <span class="token string">'./actions'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> status <span class="token operator">=</span> <span class="token function">useFormStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>button disabled<span class="token operator">=</span><span class="token punctuation">{</span>status<span class="token punctuation">.</span>pending<span class="token punctuation">}</span><span class="token operator">></span>제출<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token punctuation">{</span>action<span class="token punctuation">}</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Submit <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>useFormStatus</code>는 매개변수를 받지 않고 다음과 같은 속성을 포함한 상태 객체를 반환합니다:</p>
<ul>
<li>pending: 부모가 제출을 기다리고 있는지를 나타내는 부울 값입니다. 참이면 부모가 대기 중인 것을 나타내며, 그렇지 않으면 거짓입니다.</li>
<li>data: 부모가 제출하려는 데이터를 포함하는 FormData 인터페이스를 구현한 객체입니다. 부모가 없는 경우에는 null이 됩니다.</li>
<li>method: 'get' 또는 'post'일 수 있는 문자열 값입니다. 부모가 GET 또는 POST HTTP 방법을 사용하여 제출하는지를 나타냅니다. 기본적으로 GET 방법이 사용되고 method 속성을 통해 지정할 수 있습니다.</li>
<li>action: 부모의 action 속성에 전달된 함수에 대한 참조입니다. 부모가 없는 경우 null이 됩니다. action 속성이 URI 값을 제공하거나 action 속성이 지정되지 않는 경우 status.action은 null이 됩니다.</li>
</ul>
<h1 id="useoptimistic" tabindex="-1"><a class="header-anchor" href="#useoptimistic" aria-hidden="true">#</a> useOptimistic()```</h1>
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
<p>공식 링크 useOptimistic은 낙관적 업데이트 구현을 간단화하려는 목표를 가지고 있습니다. useOptimistic Hook을 사용하여 개발자들은 현재 상태와 업데이트 함수를 제공하여 낙관적 상태의 사본을 얻을 수 있습니다. 비동기 작업 중에 React는 이 낙관적 상태를 자동으로 렌더링하여 즉각적인 사용자 피드백을 제공합니다. 비동기 작업이 완료되면 React는 실제 결과에 기반하여 UI를 업데이트하여 최종 상태의 일관성을 보장합니다. 이 새로운 Hook은 낙관적 업데이트를 더 쉽게 처리하도록 도와주어 개발 효율성과 사용자 경험을 향상시킬 수 있습니다. 사용 예시:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useOptimistic <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">LikeButton</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> postId<span class="token punctuation">,</span> initialLikes <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>likes<span class="token punctuation">,</span> setLikes<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initialLikes<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>optimisticLikes<span class="token punctuation">,</span> updateOptimisticLikes<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useOptimistic</span><span class="token punctuation">(</span>
    likes<span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">currentLikes<span class="token punctuation">,</span> isLiked</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>isLiked <span class="token operator">?</span> currentLikes <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> currentLikes <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleLike</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">updateOptimisticLikes</span><span class="token punctuation">(</span><span class="token operator">!</span>optimisticLikes <span class="token operator">></span> likes<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token function">likePost</span><span class="token punctuation">(</span>postId<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setLikes</span><span class="token punctuation">(</span>optimisticLikes<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setLikes</span><span class="token punctuation">(</span>likes<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleLike<span class="token punctuation">}</span><span class="token operator">></span>
    <span class="token punctuation">{</span>optimisticLikes<span class="token punctuation">}</span> Likes
    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-새로운-컴파일러-자동-메모이제이션" tabindex="-1"><a class="header-anchor" href="#_2-새로운-컴파일러-자동-메모이제이션" aria-hidden="true">#</a> 2. 새로운 컴파일러: 자동 메모이제이션</h1>
<p>과거에는 반복적인 렌더링 문제를 수동으로 최적화하기 위해 useMemo, useCallback, memo와 같은 API를 사용하여 React의 성능을 향상시켰어야 했습니다. 사용 예시:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useMemo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ExpensiveComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> data <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 데이터를 기반으로 한 비용이 많이 드는 계산</span>
    <span class="token keyword">return</span> <span class="token function">performExpensiveComputation</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>data<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>result<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>React 19 버전에서 새로운 자동 메모이제이션 컴파일러가 도입되었습니다. 이 컴파일러는 개발자가 useMemo 또는 useCallback을 사용하여 수동으로 최적화할 필요 없이, 컴포넌트에서 반복적으로 사용되는 값을 자동으로 식별하고 메모이제이션할 수 있습니다. 이 컴파일러는 컴포넌트의 렌더 메서드를 분석하여 렌더 간에 안정적으로 판단된 값들을 자동으로 메모이제이션합니다.</p>
<p>이 새로운 기능은 개발자들의 최적화 작업을 단순화하고, React 애플리케이션의 성능을 향상시켜 렌더 간에 변경되지 않은 값들의 불필요한 재계산을 줄이는 것을 목표로 합니다.</p>
<h1 id="_3-개선된-동시-모드" tabindex="-1"><a class="header-anchor" href="#_3-개선된-동시-모드" aria-hidden="true">#</a> 3. 개선된 동시 모드</h1>
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
<p>React의 동시 모드를 사용하면 대규모 렌더링 작업을 작은 단위로 분해하여 중요도에 따라 업데이트를 우선 처리함으로써 응답성을 높일 수 있습니다. React 19 버전에서는 동시 모드가 렌더링 우선순위와 스케줄링에 대한 더 나은 제어를 제공하기 위해 개선되었습니다.</p>
<p>새로운 개선 사항으로, 개발자들은 응용 프로그램의 다른 부분에 대해 사용자 정의 렌더링 우선순위를 정의할 수 있어 중요한 업데이트가 먼저 처리되고 필수적이지 않은 업데이트는 유저 경험을 원활하게 유지하기 위해 지연됩니다.</p>
<p>게다가, 새로운 동시 모드는 비동기 렌더링 시나리오에서 오류를 더 우아하게 처리할 수 있는 향상된 에러 바운더리 기능을 제공하여 사용자 인터페이스를 방해하지 않고 오류를 처리하는 기능을 개발자에게 제공합니다.</p>
<p>동시 모드의 이러한 개선 사항들은 개발자가 복잡한 렌더링 작업을 효율적으로 처리하고 원활한 사용자 경험을 제공할 수 있는 반응성이 뛰어난 강력한 React 응용 프로그램을 더 쉽게 구축할 수 있도록 해줍니다.</p>
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
<p>React 버전 19는 개발자 생산성, 애플리케이션 성능, 그리고 사용자 경험을 향상시키기 위한 흥미로운 새로운 기능과 개선 사항을 제공합니다. React 팀은 이러한 혁신을 전달하기 위해 노력해오고 있으며, 다가오는 릴리스는 React 커뮤니티에 크게 기대되고 있습니다. 공식 릴리스 일인 2024년 5월 15일–16일에 이르는 과정에서 더 많은 업데이트와 공지 사항을 기대해 주세요! 🎉🚀</p>
</div></template>
