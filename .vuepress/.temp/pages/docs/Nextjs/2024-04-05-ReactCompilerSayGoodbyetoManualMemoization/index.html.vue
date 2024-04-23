<template><div><p><img src="@source/docs/Nextjs/2024-04-05-ReactCompilerSayGoodbyetoManualMemoization/img/ReactCompilerSayGoodbyetoManualMemoization_0.png" alt="ReactCompilerSayGoodbyetoManualMemoization_0.png"></p>
<p>최근에 React 팀이 흥미로운 공지를 했습니다: React 19의 준비가 완료되었고, React 컴파일러가 소개되었습니다. 이전에 React Forget으로 알려진 React 컴파일러는 지난 한 달 동안 React 커뮤니티의 주요 관심사가 되었습니다.</p>
<p>React 컴파일러는 프레임워크의 진화에 중요한 한걸음을 나아가며, 메모이제이션 기술 및 자율적인 재렌더링을 처리하여 개발을 간소화합니다. 컴파일러의 도움으로 개발자들은 React.memo, useCallback, useMemo와 같은 메모이제이션 개념을 수동으로 구현할 필요가 없을 수도 있습니다.</p>
<p>이 블로그에서는 곧 출시될 React 컴파일러에 대해 깊이 알아보고, 동작 방식 및 React에서 바뀌는 점에 대해 살펴보겠습니다.</p>
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
<h1 id="react-19에서-리액트-컴파일러가-출시되나요" tabindex="-1"><a class="header-anchor" href="#react-19에서-리액트-컴파일러가-출시되나요" aria-hidden="true">#</a> React 19에서 리액트 컴파일러가 출시되나요?</h1>
<p>리액트 팀은 최근 블로그 글에서 React 19 발표와 함께 리액트 컴파일러를 소개했습니다. 그러나 발표에 따르면, 현재 리액트 캐너리에 있는 새로운 기능은 예정대로 다음 주요 버전의 React에서 출시될 예정입니다.</p>
<p>게다가, 리액트 코어 팀의 한 멤버가 한 트윗을 통해 이 문제에 대한 추가 설명을 제공했습니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-ReactCompilerSayGoodbyetoManualMemoization/img/ReactCompilerSayGoodbyetoManualMemoization_1.png" alt="이미지"></p>
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
<h1 id="react-컴파일러" tabindex="-1"><a class="header-anchor" href="#react-컴파일러" aria-hidden="true">#</a> React 컴파일러</h1>
<p>React 컴포넌트가 상태 또는 프롭이 변경될 때 불필요하게 다시 렌더링되기 쉽다는 것을 알고 계실 것입니다. 이러한 불필요한 재렌더링을 완화하기 위해 우리는 useMemo, useCallback 및 React.memo와 같은 수동 메모이제이션 개념을 사용하여 컴포넌트를 최적화할 수 있습니다. 그러나 수동 메모이제이션은 어려움을 겪을 수 있고 실수하기 쉽며 최신 상태를 유지하기 위해 추가적인 노력이 필요합니다.</p>
<p>수동 메모이제이션은 추가적인 노력을 요구하지만 실행 가능합니다. 그러나 React 팀은 이것을 이상적이라고 보지 않습니다. 그래서 그들은 React의 핵심적인 메타모델을 해치지 않으면서 상태 변경 시 UI의 특정 부분을 선택적으로 다시 렌더링할 수 있도록 도와주는 새로운 최적화된 컴파일러인 'React Forget'를 도입하고 있습니다. 이 컴파일러는 React 컴파일러라는 이름으로 몇 시간 동안 개발되어왔고 거의 완성 단계에 이르렀습니다.</p>
<h2 id="react-컴파일러로-무엇이-정확히-변경되나요" tabindex="-1"><a class="header-anchor" href="#react-컴파일러로-무엇이-정확히-변경되나요" aria-hidden="true">#</a> React 컴파일러로 무엇이 정확히 변경되나요?</h2>
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
<p>답변은 — 이제 모든 것이 메모이제이션됩니다. React 컴파일러는 일반적인 React 코드를 모두 메모이제이션된 코드로 변환합니다. 모든 코드 블록, 컴포넌트 및 훅이 자동으로 메모이제이션됩니다.</p>
<p>예를 들어, 다음 간단한 코드를 살펴봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">Login</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 여기에 일부 코드</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>LoginForm onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>onSubmit<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 코드는 컴파일러에 의해 내부적으로 메모이제이션됩니다. React 컴파일러는 onSubmit 함수와 LoginForm 컴포넌트를 각각 useCallback과 React.memo를 사용하여 감쌀 것입니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> LoginForm <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span>LoginFormComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Login</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> onSubmit <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 여기에 일부 코드 작성</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>LoginForm onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>onSubmit<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>중요한 점은 React 컴파일러가 정확히 그 코드로 변환되지 않는다는 것을 기억하는 것이 중요합니다. 더 복잡하고 고급 로직이 관련되어 있습니다. 컴파일러에 의해 변환된 코드는 memoized될 것이지만, React가 제공하는 내장 useCallback, useMemo, React.memo 개념을 사용하지는 않을 것입니다.</p>
<p>React 핵심 팀 중 한 멤버가 제시한 비디오를 참고하시면, 컴파일러가 React 코드를 어떻게 변환하는지에 대한 예제를 보실 수 있습니다.</p>
<h2 id="불필요한-자식-요소의-재랜더링-없음" tabindex="-1"><a class="header-anchor" href="#불필요한-자식-요소의-재랜더링-없음" aria-hidden="true">#</a> 불필요한 자식 요소의 재랜더링 없음:</h2>
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
<p>현재, 부모 컴포넌트가 다시 렌더링될 때 모든 자식 컴포넌트도 다시 렌더링됩니다. 그러나 자식 프롭스는 변경되지 않습니다. 예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token parameter">prevState</span> <span class="token operator">=></span> prevState <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>Counter<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>increment<span class="token punctuation">}</span><span class="token operator">></span>Increment<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span>Child <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서 부모 컴포넌트는 0으로 초기화된 상태 카운트를 유지합니다. 버튼을 클릭하면 증가 함수가 트리거되어 상태 카운트를 업데이트하고 부모 컴포넌트를 다시 렌더링합니다. 그 결과 자식 컴포넌트도 상태 카운트와 독립적이지만 다시 렌더링됩니다.</p>
<p>이러한 불필요한 다시 렌더링을 피하기 위해 개발자는 모든 자식 컴포넌트를 메모이즈 할 수 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> MemoizedChild <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span>Child<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> increment <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token parameter">prevState</span> <span class="token operator">=></span> prevState <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>Counter<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>increment<span class="token punctuation">}</span><span class="token operator">></span>Increment<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span>MemoizedChild <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>컴파일러가 도입되면 React.memo를 사용하여 컴포넌트를 수동으로 메모이제이션할 필요가 없을 수 있습니다. 모든 것이 자동으로 메모이제이션되기 때문에 부모가 렌더링되었는지 여부에 상관없이 상태나 프롭이 변경될 때만 컴포넌트가 다시 렌더링됩니다.</p>
<h2 id="더-이상-구성-패턴을-사용하지-않습니다" tabindex="-1"><a class="header-anchor" href="#더-이상-구성-패턴을-사용하지-않습니다" aria-hidden="true">#</a> 더 이상 구성 패턴을 사용하지 않습니다:</h2>
<p>이전 예제에서 상태가 변경될 때 모든 하위 컴포넌트가 다시 렌더링됩니다. 이상적으로는 h1 및 button과 같이 영향을 받는 컴포넌트만 다시 렌더링되어야 합니다. 이러한 불필요한 다시 렌더링을 줄이기 위해 코드를 분할하는 구성 패턴을 따르는 state를 내려주기와 같은 방법을 사용할 수 있습니다.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 상태가 내려간 컴포넌트</span>
<span class="token keyword">const</span> <span class="token function-variable function">IncrementContainer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> increment <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token parameter">prevState</span> <span class="token operator">=></span> prevState <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>카운터<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>increment<span class="token punctuation">}</span><span class="token operator">></span>증가<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>IncrementContainer <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Child <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>리액트 컴파일러가 도착하면 성능 최적화를 위한 이러한 패턴들이 불필요해질 것입니다. 이는 더이상 성능을 위해 불필요한 다시 렌더링을 줄이기 위해 이러한 패턴들에 의존할 필요가 없다는 것을 의미합니다. 하지만 코드 분리와 가독성을 위해 이러한 패턴들을 여전히 선택할 수 있습니다.</p>
<h2 id="코드-가독성-향상" tabindex="-1"><a class="header-anchor" href="#코드-가독성-향상" aria-hidden="true">#</a> 코드 가독성 향상:</h2>
<p>때로 최적화 기술은 React 코드의 가독성에 영향을 미칠 수 있습니다. 메모화 개념을 많이 사용하면 코드 품질을 향상시킬 수 있지만 가독성이 떨어지고 코드 라인 수가 증가할 수 있습니다.```</p>
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
<p>예를 들어, 메모이제이션을 사용한 다음의 최적화된 컴포넌트를 살펴보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">Button</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>bgColor<span class="token punctuation">,</span> setBgColor<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'#0d6efd'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> changeColor <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'click'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setBgColor</span><span class="token punctuation">(</span><span class="token string">'#0a58ca'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'pointerenter'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setBgColor</span><span class="token punctuation">(</span><span class="token string">'#0b5ed7'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>button
      type<span class="token operator">=</span><span class="token string">"button"</span>
      onClick<span class="token operator">=</span><span class="token punctuation">{</span>changeColor<span class="token punctuation">}</span>
      onPointerEnter<span class="token operator">=</span><span class="token punctuation">{</span>changeColor<span class="token punctuation">}</span>
      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> bgColor <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">></span>
      색상 변경
    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 컴포넌트는 불필요한 다시 렌더링을 피하기 위해 최적화되어 있지만, changeColor 함수를 이해하기 위해서는 코드의 다른 부분을 알고 있어야 하는 문제가 있습니다.</p>
<p>동일한 컴포넌트의 더 가독성있는 버전은:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">Button</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>bgColor<span class="token punctuation">,</span> setBgColor<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'#0d6efd'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>button
      type<span class="token operator">=</span><span class="token string">"button"</span>
      onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setBgColor</span><span class="token punctuation">(</span><span class="token string">'#0a58ca'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      onPointerEnter<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setBgColor</span><span class="token punctuation">(</span><span class="token string">'#0b5ed7'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> bgColor <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">></span>
      색상 변경
    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그러나 이 보다 간단한 버전은 인라인 함수 사용으로 인해 컴포넌트 상태 변경 시 자식 컴포넌트를 다시 렌더링하는 문제가 발생합니다. 이를 해결하기 위해 코드 상단으로 인라인 함수를 이동하고 메모이제이션을 위해 useCallback 훅으로 감싸는 방법을 사용합니다.</p>
<p>React 컴파일러의 출시 이후에는 함수를 컴포넌트 상단으로 이동할 필요가 없어집니다. 대신 컴파일러가 자동으로 메모이제이션하고 최적화할 수 있는 인라인 함수를 사용할 수 있습니다. 이로 인해 코드 가독성이 향상되고 개발자들이 불필요한 재렌더링 대신 로직에 더 집중할 수 있습니다.</p>
<p>React 팀의 최신 업데이트에 따르면 React 컴파일러는 더 이상 연구 프로젝트가 아니라 인스타그램의 프로덕션 환경에서 이미 사용 중이라고 합니다. 코드 기반으로 된 프로덕션 애플리케이션에서 컴파일러를 활용함으로써 안정성과 효율성을 입증하고 있습니다. React 팀은 이를 Meta의 더 많은 플랫폼으로 확대하고 최종적으로 미래에 오픈 소스로 공개할 계획입니다.</p>
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
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론:</h1>
<p>새로운 React 컴파일러는 개발자들에게 중요한 패러다임 변화를 제공하며, 기본 제공 기능을 제공합니다. 이 혁신으로 인해, 개발자들은 더 이상 메모이제이션에 대해 걱정할 필요가 없으며 컴파일러가 자동으로 처리합니다. 이는 개발 프로세스를 더욱 간소화할 뿐만 아니라 더 깔끔하고 가독성이 좋은 코드를 유도합니다.</p>
<p>이 블로그 포스트가 도움이 되었기를 바라며, React 컴파일러의 출시를 기대하며 같이 기대하고 있습니다.</p>
<p>팔로우하세요:</p>
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
<p>GitHub: https://github.com/tanmaythole</p>
<p>LinkedIn: https://www.linkedin.com/in/tanmay-thole-b82978175/</p>
<h2 id="참고-자료" tabindex="-1"><a class="header-anchor" href="#참고-자료" aria-hidden="true">#</a> 참고 자료:</h2>
<ul>
<li>https://react.dev/blog/2024/02/15/react-labs-what-we-have-been-working-on-february-2024</li>
<li>https://www.youtube.com/watch?v=qOQClO3g8-Y</li>
<li>https://www.youtube.com/watch?v=kjOacmVsLSE</li>
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
<h1 id="읽어-주셔서-감사합니다-코딩-즐기세요-👨🏽‍💻" tabindex="-1"><a class="header-anchor" href="#읽어-주셔서-감사합니다-코딩-즐기세요-👨🏽‍💻" aria-hidden="true">#</a> 읽어 주셔서 감사합니다! 코딩 즐기세요! 👨🏽‍💻</h1>
</div></template>
