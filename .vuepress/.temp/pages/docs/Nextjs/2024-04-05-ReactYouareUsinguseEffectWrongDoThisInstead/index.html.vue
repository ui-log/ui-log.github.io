<template><div><p><img src="@source/docs/Nextjs/2024-04-05-ReactYouareUsinguseEffectWrongDoThisInstead/img/ReactYouareUsinguseEffectWrongDoThisInstead_0.png" alt="React hooks"></p>
<p>리액트를 공부하기로 결정했다면, 훅(Hooks)은 가장 먼저 배워야 하는 것 중 하나입니다. 하지만 훅을 사용하는 것에 대해 처음에는 당황스러울 수도 있습니다. 훅은 리액트의 필수 요소로, 첫 번째 몇 버전의 리액트에서 발생한 여러 문제를 해결하기 위해 만들어졌습니다. 리액트는 렌더링이 컴포넌트의 라이프사이클 함수 내에서 모두 수행되던 시절이 있었는데, 그런 문제들을 해결하고자 만들어진 것이죠.</p>
<p>그렇다면, 모두가 처음으로 다루는 첫 번째 훅(함수)은 useState()와 useEffect()일 것입니다. useState()는 상태 관리와 컴포넌트가 다시 렌더링되어야 하는 시점을 제어하는 데 사용됩니다. 반면 useEffect()는 위에서 언급한 라이프사이클 함수와 약간 유사한 방식으로 동작합니다.</p>
<p>useEffect() 훅은 두 가지 출력을 받을 수 있습니다. 첫 번째는 콜백 함수이고, 두 번째는 선택적으로 이 훅이 언제 호출되어야 하는지 정의합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prevProps</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">//prevProps는 선택적이며 특정 목적에 사용됩니다. 라이프사이클 함수와 비교될 때 어떻게 작동하는지 확인하십시오.</span>
 <span class="token comment">//사용자 정의 함수 내용….</span>
    사용자 정의 함수 내용…

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 컴포넌트가 해제되거나 종속성이 변경될 때 실행할 코드</span>
      <span class="token comment">// 메모리 누출과 예기치 못한 동작을 피하는 데 도움이 됩니다.</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>배열 형태의 종속성<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>많은 초보자들이 많이 혼동하는 주의 사항 중 하나는 두 번째 매개변수가 어떻게 작동하는지이다. 요약해보겠습니다:</p>
<p>useEffect의 작동 방식을 다시 살펴보았으니, 메모이제이션이라는 최적화 기술에 대해 자세히 알아야 합니다. 메모이제이션은 불필요한 다시 렌더링을 방지하고, useEffect에서 종속성 배열을 다룰 때 특히 컴포넌트의 성능을 크게 향상시킬 수 있습니다.</p>
<p>useEffect 훅의 주요 아이디어는 외부 API나 데이터베이스 접근, HTTP 요청 완료를 기다릴 때와 같이 데이터 전송을 동기화하는 것입니다. 그러나 이 훅을 코드 내의 가능한 모든 상황에서 사용하는 경향이 있어서 코드가 특히 Case A와 C*에 나열된 상황에서 더럽고 코드가 길어지면서 한 가지의 상태를 변경하면 프로세스 중에 종속성 배열의 하나를 변경하면 루프를 트리거할 수 있습니다.</p>
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
<p>이렇게 코드를 너무 비효율적으로 만들 수도 있어요. useEffect는 마치 코드를 실행하다가 다른 일을 한 다음에 다시 메인 스레드로 돌아오는 것처럼 동작하기 때문에 더 효율적일 수 있어요.</p>
<p>좋아요, 이제 가끔은 useEffect가 최선의 해결책이 아닐 수 있다는 것을 알았네요. 이제 각각의 경우를 자세히 살펴보겠습니다.</p>
<p>이제 우리는 각 경우에 대해 상세히 이야기할 거에요:</p>
<p>약속한 해결책에 대해 이제 이야기해 볼게요. 이 두 컴포넌트(부모 및 자식)를 고려해 봅시다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ParentComponent.js</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ChildComponent <span class="token keyword">from</span> <span class="token string">'./ChildComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ParentComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>message<span class="token punctuation">,</span> setMessage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'Hello from Parent!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">incrementCount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Button clicked </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> times!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>ChildComponent count<span class="token operator">=</span><span class="token punctuation">{</span>count<span class="token punctuation">}</span> message<span class="token operator">=</span><span class="token punctuation">{</span>message<span class="token punctuation">}</span> 
        callbackFunction<span class="token operator">=</span><span class="token punctuation">{</span>incrementCount<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ParentComponent<span class="token punctuation">;</span>


<span class="token comment">// ChildComponent.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ChildComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> count<span class="token punctuation">,</span> message<span class="token punctuation">,</span> callbackFunction <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h3<span class="token operator">></span>Child Component<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>Received Count from Parent<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>Received Message from Parent<span class="token operator">:</span> <span class="token punctuation">{</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>callbackFunction<span class="token punctuation">}</span><span class="token operator">></span>Click Me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ChildComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기에서 어떤 일이 일어나고 있는지 설명해보겠습니다:</p>
<p>우리는 코드를 수정해서 Child Component로 콜백 함수를 전달하도록 하였습니다. 이 변경사항을 주목해주세요:</p>
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
<p>요약하자면, 여기서 제공된 통찰력은 가치 있는 지침을 제공하지만, 소프트웨어 개발은 동적인 분야임을 인식하는 것이 중요하며 해결책은 일상에 맞지 않는 경우가 있습니다. useEffect는 React의 매우 중요한 부분이지만 때로는 최선의 해결책이 아닐 수도 있습니다.</p>
<p>오늘은 여기까지입니다. 읽어 주셔서 감사합니다!</p>
<h1 id="stackademic" tabindex="-1"><a class="header-anchor" href="#stackademic" aria-hidden="true">#</a> Stackademic</h1>
<p>오늘까지 읽어 주셔서 감사합니다. 떠나시기 전에:</p>
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
<li>작가에게 박수를 보내고 팔로우해주세요! 👏</li>
<li>트위터(X)가 아닌 링크드인과 유튜브에서도 팔로우해주세요.</li>
<li>전 세계적으로 무료 프로그래밍 교육의 민주화를 실현하는 Stackademic.com을 방문해보세요.</li>
</ul>
</div></template>
