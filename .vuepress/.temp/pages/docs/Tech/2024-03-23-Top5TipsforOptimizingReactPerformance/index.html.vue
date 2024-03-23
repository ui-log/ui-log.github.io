<template><div><h2 id="컴포넌트-재렌더링을-줄이고-레이지-로딩-디바운싱-스로틀링을-사용하고-이미지를-최적화하여-react-앱-성능을-향상시킵니다" tabindex="-1"><a class="header-anchor" href="#컴포넌트-재렌더링을-줄이고-레이지-로딩-디바운싱-스로틀링을-사용하고-이미지를-최적화하여-react-앱-성능을-향상시킵니다" aria-hidden="true">#</a> 컴포넌트 재렌더링을 줄이고, 레이지 로딩, 디바운싱, 스로틀링을 사용하고 이미지를 최적화하여 React 앱 성능을 향상시킵니다</h2>
<p>React.js를 사용하면 동적이고 인터랙티브한 웹 애플리케이션을 만들 수 있습니다. 그러나 대량의 데이터 세트나 복잡한 컴포넌트를 다룰 때 성능을 최적화하는 것은 어려운 과제일 수 있습니다.</p>
<p>그래서 React 애플리케이션을 최적화하여 최대 성능을 확보하는 방법을 살펴보겠습니다!</p>
<h1 id="_1-불필요한-렌더링-줄이기" tabindex="-1"><a class="header-anchor" href="#_1-불필요한-렌더링-줄이기" aria-hidden="true">#</a> 1. 불필요한 렌더링 줄이기</h1>
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
<p>React 애플리케이션을 개발할 때는 성능을 최적화하는 것이 중요합니다. 한 가지 중요한 측면은 컴포넌트 재렌더링 횟수를 최소화하는 것입니다. 불필요한 재렌더링은 사용자 경험을 느리게 만들고 전체적인 응답성에 영향을 줄 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> memo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> ComponentB <span class="token operator">=</span> <span class="token function">memo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>propB<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ComponentB를 memo()로 감싸면, 부모가 몇 번이고 재렌더링되더라도 propB 값이 실제로 변경될 때에만 다시 렌더링됩니다.</p>
<p>useCallback()은 콜백 함수를 메모이제이션하는 훅입니다. 특히 자식 컴포넌트에 콜백을 props로 전달할 때 유용합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ParentComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> handleButtonClick <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 버튼 클릭 로직 처리</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ChildComponent onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleButtonClick<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>useCallback()을 사용하면 콜백 함수가 의존성이 변경되지 않는 한 렌더링 간 동일함을 보장할 수 있습니다.</p>
<p>React.memo()와 useCallback()과 같은 기술을 사용하여 성능을 최적화하는 동시에 균형을 맞추는 것이 중요합니다. 이전과 새로운 props를 비교하는 메모이제이션은 큰 props나 React 컴포넌트를 props로 전달할 때 자원을 소비할 수 있습니다.</p>
<h1 id="_2-코드-분할을-통한-레이지-로딩" tabindex="-1"><a class="header-anchor" href="#_2-코드-분할을-통한-레이지-로딩" aria-hidden="true">#</a> 2. 코드 분할을 통한 레이지 로딩</h1>
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
<p>리액트 애플리케이션의 성능을 최적화하기 위해 사용되는 <code v-pre>Lazy loading</code>과 <code v-pre>code splitting</code>은 필요한 컴포넌트만로드하여 코드를 더 작은 번들로 분할하여 초기로드 시간을 줄이는 기술입니다.</p>
<p><code v-pre>Lazy loading</code>은 <code v-pre>Suspense</code> 구성요소와 <code v-pre>react</code> 모듈에서 <code v-pre>lazy</code> 함수를 사용하여 구현할 수 있습니다. <code v-pre>lazy</code> 함수를 사용하면 필요할 때 나중에 로드될 컴포넌트를 정의할 수 있습니다.</p>
<p>다음은 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> lazy<span class="token punctuation">,</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> LazyComponent <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"./LazyComponent"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>LazyComponent <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
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
<p>이 예제에서는 LazyComponent가 필요할 때만 로드되고 Suspense 컴포넌트 내에서 표시됩니다. fallback 속성은 컴포넌트가 로드되는 동안 표시할 콘텐츠를 지정하는 데 사용됩니다.</p>
<p>동적 가져오기를 사용하여 코드 분할을 실현할 수 있습니다. 이를 통해 코드를 작은 번들로 분할하여 필요할 때 로드할 수 있습니다. 다음은 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> lazy<span class="token punctuation">,</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> LazyComponent <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"./LazyComponent"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>button
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
            <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"./AnotherLazyComponent"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">module</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">const</span> AnotherLazyComponent <span class="token operator">=</span> module<span class="token punctuation">.</span>AnotherLazyComponent<span class="token punctuation">;</span>
              <span class="token function">setComponent</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>AnotherLazyComponent <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token operator">></span>
          다른 Lazy 컴포넌트 로드
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span>LazyComponent <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서는 버튼을 클릭할 때 AnotherLazyComponent가 동적으로 로드되어 코드를 작은 번들로 분할하고 초기로드 시간을 줄일 수 있습니다.</p>
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
<p>레이지 로딩과 코드 분할을 사용하여 응용 프로그램이 필요한 구성 요소와 코드만로드되도록하고, 초기로드 시간을 줄이고 전반적인 성능을 향상시킬 수 있습니다.</p>
<h2 id="_3-디바운싱과-쓰로틀링" tabindex="-1"><a class="header-anchor" href="#_3-디바운싱과-쓰로틀링" aria-hidden="true">#</a> 3. 디바운싱과 쓰로틀링</h2>
<p>디바운싱과 쓰로틀링은 함수가 호출되는 속도를 제어하는 기술입니다. 디바운싱은 주어진 기간 동안 함수가 한 번만 호출되도록 보장하며, 쓰로틀링은 주어진 기간 동안 함수가 최대 한 번만 호출되도록 보장합니다. 이러한 기술은 React 애플리케이션의 성능을 향상시키는 데 유용할 수 있습니다, 특히 비싼 계산 또는 네트워크 요청을 유발할 수 있는 사용자 입력을 처리할 때는요.</p>
<p>디바운싱부터 시작해 보겠습니다. React 애플리케이션에서 매번 사용자가 문자를 입력할 때마다 서버로 네트워크 요청을 보내는 검색 바가 있다고 상상해보십시오. 이렇게하면 많은 불필요한 요청이 발생할 수 있고 애플리케이션이 느려질 수 있습니다. 이를 피하기 위해 디바운싱을 사용하여 사용자가 일정 시간 동안 타이핑을 멈춘 후에만 네트워크 요청이 전송되도록 할 수 있습니다.</p>
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
<p>여기 lodash의 debounce 기능을 사용하여 React 컴포넌트에서 디바운싱을 구현하는 방법에 대한 예시가 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> debounce <span class="token keyword">from</span> <span class="token string">'lodash.debounce'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">SearchBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>query<span class="token punctuation">,</span> setQuery<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 검색 함수를 디바운스하여 사용자의 타이핑이 멈춘 후 500ms 이후에만 호출되도록 합니다.</span>
  <span class="token keyword">const</span> debouncedSearch <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">query</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 쿼리를 검색하기 위한 네트워크 요청 보내기</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>$<span class="token punctuation">{</span>query<span class="token punctuation">}</span>를 검색 중입니다<span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleQueryChange</span> <span class="token operator">=</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newQuery <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token function">setQuery</span><span class="token punctuation">(</span>newQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">debouncedSearch</span><span class="token punctuation">(</span>newQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> value<span class="token operator">=</span><span class="token punctuation">{</span>query<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleQueryChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서는 사용자가 검색 바에 문자를 입력할 때마다 handleQueryChange 함수가 호출됩니다. 그러나 debouncedSearch 함수를 직접 호출하는 대신 debounce 함수에 전달하여 사용자가 타이핑을 멈춘 후 500ms 이후에 한 번만 호출되도록 합니다.</p>
<p>이제 쓰로틀링에 대해 이야기해 봅시다. 쓰로틀링은 함수가 여러 번 빠르게 연속해서 호출되더라도 호출 속도를 제한하고 싶을 때 유용합니다. 예를 들어, 브라우저의 이벤트 루프를 과부하시키지 않도록 스크롤 이벤트를 100ms로 제한하고 싶을 수 있습니다.</p>
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
<p>lodash의 쓰로틀(throttle) 함수를 사용하여 스크롤링을 구현하는 방법에 대한 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> throttle <span class="token keyword">from</span> <span class="token string">"lodash.throttle"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ScrollComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>scrollTop<span class="token punctuation">,</span> setScrollTop<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 스크롤 함수를 쓰로틀링하여 사용자가 해당 기간 동안 여러 번 스크롤해도</span>
  <span class="token comment">// 100ms마다 한 번만 호출되도록 보장합니다</span>
  <span class="token keyword">const</span> throttledScroll <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 현재 스크롤 위치로 scrollTop 상태를 업데이트합니다</span>
    <span class="token function">setScrollTop</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>pageYOffset<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleScroll</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">throttledScroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div onScroll<span class="token operator">=</span><span class="token punctuation">{</span>handleScroll<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">"500vh"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>스크롤하여 스크롤 위치를 확인하세요<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>스크롤 위치<span class="token operator">:</span> <span class="token punctuation">{</span>scrollTop<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서는 사용자가 페이지를 스크롤할 때마다 handleScroll 함수가 호출됩니다. 그러나 scrollTop 상태를 직접 업데이트하는 대신 쓰로틀 함수에 전달하여 해당 기간 동안 한 번만 호출되도록 합니다.</p>
<p>React 애플리케이션에서 디바운싱과 쓰로틀링을 사용하면 더 민첩하고 효율적인 사용자 인터페이스를 구축하여 사용자에게 더 나은 경험을 제공할 수 있습니다.</p>
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
<h1 id="_4-긴-목록-가상화" tabindex="-1"><a class="header-anchor" href="#_4-긴-목록-가상화" aria-hidden="true">#</a> 4. 긴 목록 가상화</h1>
<p>가상화는 긴 목록 항목을 표시하는 응용 프로그램의 성능을 개선하는 기술입니다. 가상화의 아이디어는 목록의 모든 항목을 렌더링하는 것이 아니라 현재 화면에 표시되는 항목들만 렌더링하는 것입니다. 이는 목록을 표시하는 데 필요한 메모리 및 CPU 사용량을 크게 줄일 수 있어, 더 빠른 로드 시간과 부드러운 사용자 경험을 제공할 수 있습니다.</p>
<p>다음은 긴 목록을 가상화하기 위해 react-virtualized를 사용하는 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> List <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-virtualized"</span><span class="token punctuation">;</span>

<span class="token comment">// 목록에서 각 행의 높이를 정의합니다</span>
<span class="token keyword">const</span> rowHeight <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>

<span class="token comment">// 목록의 총 항목 수를 정의합니다</span>
<span class="token keyword">const</span> totalItems <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span>

<span class="token comment">// 보이는 영역(뷰포트)의 크기를 정의합니다</span>
<span class="token keyword">const</span> rowCount <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> width <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> height <span class="token operator">=</span> rowCount <span class="token operator">*</span> rowHeight<span class="token punctuation">;</span>

<span class="token comment">// 목록의 데이터를 정의합니다</span>
<span class="token keyword">const</span> listData <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> totalItems <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Item </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 목록의 각 행마다 렌더링할 컴포넌트를 정의합니다</span>
<span class="token keyword">const</span> <span class="token function-variable function">Row</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> index<span class="token punctuation">,</span> style <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>listData<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token comment">// 가상화된 목록을 렌더링합니다</span>
<span class="token keyword">const</span> <span class="token function-variable function">VirtualizedList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>List width<span class="token operator">=</span><span class="token punctuation">{</span>width<span class="token punctuation">}</span> height<span class="token operator">=</span><span class="token punctuation">{</span>height<span class="token punctuation">}</span> rowCount<span class="token operator">=</span><span class="token punctuation">{</span>totalItems<span class="token punctuation">}</span> rowHeight<span class="token operator">=</span><span class="token punctuation">{</span>rowHeight<span class="token punctuation">}</span> rowRenderer<span class="token operator">=</span><span class="token punctuation">{</span>Row<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>

<span class="token comment">// 앱에서 사용할 수 있도록 VirtualizedList 컴포넌트를 내보냅니다</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> VirtualizedList<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 예시에서는 목록의 각 행의 높이 (rowHeight), 목록에서의 총 항목 수 (totalItems), 그리고 보이는 영역의 크기 (rowCount, 너비, 높이)를 정의합니다. 또한 목록을 위한 데이터 (listData)와 각 행을 렌더링하는 컴포넌트 (Row)를 정의합니다.</p>
<p>마지막으로, react-virtualized에서 제공하는 List 컴포넌트를 사용하여 가상 목록을 렌더링합니다. List 컴포넌트는 목록의 너비와 높이, 행 수 및 각 행의 높이, 그리고 각 행을 어떻게 렌더링할지 정의하는 rowRenderer 함수를 포함해 여러 가지 props를 전달받습니다.</p>
<p>긴 목록을 가상 목록화하여 react 애플리케이션의 성능을 향상시킬 수 있습니다. 특히 항목 수가 많은 목록을 다룰 때 많은 성능 향상을 얻을 수 있습니다.</p>
<h1 id="_5-이미지-최적화하기" tabindex="-1"><a class="header-anchor" href="#_5-이미지-최적화하기" aria-hidden="true">#</a> 5. 이미지 최적화하기</h1>
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
<p>이미지 최적화는 React 애플리케이션의 성능을 향상시키는 데 중요합니다. 이미지는 페이지 로드 시간에 상당한 영향을 미칠 수 있어요.</p>
<p>React 애플리케이션에서 이미지를 최적화하는 방법을 보여드릴게요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> OptimizedImage <span class="token keyword">from</span> <span class="token string">"react-optimized-image"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>OptimizedImage
    src<span class="token operator">=</span><span class="token string">"https://example.com/image.jpg"</span>
    alt<span class="token operator">=</span><span class="token string">"최적화된 이미지"</span>
    width<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">300</span><span class="token punctuation">}</span>
    height<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span>
    loading<span class="token operator">=</span><span class="token string">"lazy"</span> <span class="token comment">// 선택 사항: "eager"로 설정하여 이미지를 즉시 로드할 수도 있어요</span>
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MyComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서는 OptimizedImage 컴포넌트를 사용하여 원격 URL에서 이미지를 로드합니다. 이미지의 너비와 높이를 지정하고, 로딩 prop을 &quot;lazy&quot;로 설정하여 이미지를 뷰포트 근처에 다가올 때까지 로딩을 지연시키는 방식입니다.</p>
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
<p>The react-optimized-image 패키지는 이미지를 자동으로 최적화해주는 imgix 서비스를 이용합니다. 이 서비스는 이미지 압축, 크기 조절 및 기타 최적화 기능을 제공합니다. 또한 해당 패키지에는 레이지 로딩 및 점진적 로딩을 지원하여 로드 시간과 사용자 경험을 개선할 수 있습니다.</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>현대 웹 개발에서 성능 최적화는 매우 중요합니다, 특히 웹 애플리케이션의 복잡성이 높아지고 있는 상황에서.</p>
<p>불필요한 렌더링을 줄이고, 코드 분할을 통한 레이지 로딩을 활용하며, 디바운싱과 스로틀링을 사용하고, 긴 리스트를 가상화하고, 이미지를 최적화함으로써 개발자들은 React 애플리케이션의 성능을 크게 향상시킬 수 있습니다.</p>
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
<p>이러한 조치를 React 앱에서 시도하여 최대한 잘 작동하도록 보장하세요!</p>
<p>읽어 주셔서 감사합니다.</p>
<h1 id="더-알아보기" tabindex="-1"><a class="header-anchor" href="#더-알아보기" aria-hidden="true">#</a> 더 알아보기</h1>
</div></template>
