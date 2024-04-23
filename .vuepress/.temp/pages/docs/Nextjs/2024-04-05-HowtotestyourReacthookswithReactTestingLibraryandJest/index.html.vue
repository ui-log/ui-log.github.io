<template><div><p><img src="@source/docs/Nextjs/2024-04-05-HowtotestyourReacthookswithReactTestingLibraryandJest/img/HowtotestyourReacthookswithReactTestingLibraryandJest_0.png" alt="이미지"></p>
<p>저는 마지막으로 무언가를 쓴 지 오래되었고, 커스텀 React 훅을 테스트하는 방법에 대해 작성해보는 것이 좋을 것 같다고 생각했습니다.</p>
<p>이에 관한 전용 저장소를 만들어두었으니, 지금 가셔서 코드를 확인하거나 먼저 블로그 글을 읽어보세요.</p>
<p>이 앱은 간단합니다. API에 요청을 보내고 받은 항목 목록을 렌더링합니다. 약속이 진행 중이면 로딩 표시를 하고, 에러가 발생하면 에러를 보여줍니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error<span class="token punctuation">,</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFetchedData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"App"</span><span class="token operator">></span>
      <span class="token punctuation">{</span>loading <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">}</span>

      <span class="token punctuation">{</span>error <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>Error<span class="token operator">:</span> <span class="token punctuation">{</span>error<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">}</span>

      <span class="token punctuation">{</span>data <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>ul<span class="token operator">></span>
          <span class="token punctuation">{</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>우리는 만든 useFetchedData 커스텀 훅에서 모든 값을 가져옵니다. 이 훅이 무엇을 하는지 그리고 무엇을 반환하는지 살펴봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">useFetchedData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>error<span class="token punctuation">,</span> setError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> abortController <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbortController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">fetchData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token constant">API_URL</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">signal</span><span class="token operator">:</span> abortController<span class="token punctuation">.</span>signal<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setData</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setError</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      abortController<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error<span class="token punctuation">,</span> loading <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="코드-간단한-설명" tabindex="-1"><a class="header-anchor" href="#코드-간단한-설명" aria-hidden="true">#</a> 코드 간단한 설명</h2>
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
<p>우선, 상태 변수의 초기값을 포함하는 객체를 반환합니다.</p>
<p>useEffect에서는 API에 요청을 보내고 데이터를 받아서 data 상태 변수에 저장한 후 로딩 변수를 업데이트합니다. 이로 인해 컴포넌트가 다시 렌더링되며 업데이트된 값이 포함된 새 객체를 반환합니다.</p>
<p>또한 오류가 발생할 경우 error 상태 변수에 오류를 저장하고 로딩 변수를 false로 업데이트합니다.</p>
<p>또한 useEffect 훅에 정리 함수를 추가하여 컴포넌트가 언마운트될 때 요청을 중단합니다.</p>
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
<h2 id="초기-상태-변수를-테스트합니다" tabindex="-1"><a class="header-anchor" href="#초기-상태-변수를-테스트합니다" aria-hidden="true">#</a> 초기 상태 변수를 테스트합니다</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> renderHook <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@testing-library/react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> useFetchedData <span class="token keyword">from</span> <span class="token string">"./useFetchedData"</span><span class="token punctuation">;</span>

<span class="token comment">// 다음 테스트에 이 mock이 필요합니다</span>
global<span class="token punctuation">.</span>fetch <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"useFetchedData"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"데이터, 에러 및 로딩에 대한 초기 값이 반환되어야 합니다"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> result <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">renderHook</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">useFetchedData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error<span class="token punctuation">,</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> result<span class="token punctuation">.</span>current<span class="token punctuation">;</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>loading<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 테스트에서는 비동기 요청이 완료되기 전에 커스텀 훅의 초기 값들을 테스트하려고 합니다. @testing-library/react의 renderHook을 사용하여 훅을 렌더링하고, 그 후에 상태 변수들의 값을 접근할 수 있습니다. 그런 다음 초기 값들이 올바른지 확인하는 단언을 추가합니다.</p>
<h2 id="요청이-성공적으로-완료되었을-때-테스트" tabindex="-1"><a class="header-anchor" href="#요청이-성공적으로-완료되었을-때-테스트" aria-hidden="true">#</a> 요청이 성공적으로 완료되었을 때 테스트</h2>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"데이터를 성공적으로 가져왔을 때"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> mockedData<span class="token punctuation">;</span>

  <span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    mockedData <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">"가짜 본문"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"가짜 제목"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    global<span class="token punctuation">.</span>fetch<span class="token punctuation">.</span><span class="token function">mockResolvedValue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">json</span><span class="token operator">:</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mockResolvedValue</span><span class="token punctuation">(</span>mockedData<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"데이터를 반환해야 합니다"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> result <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">renderHook</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">useFetchedData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">await</span> <span class="token function">waitFor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
      <span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> mockedData<span class="token punctuation">,</span>
        <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>테스트를 조직화하기 위해 기존에 있던 describe 블록에 하나 더 추가하여 더 명확히 할 수 있습니다. beforeEach에서 fetch 함수를 가로채 가짜 데이터를 반환하도록 설정합니다. 그런 다음 후크를 렌더링하고 프로미스가 해결될 때까지 기다리기 위해 waitFor을 사용합니다. 그런 다음 데이터가 우리가 예상한 것과 일치하는지 확인합니다.</p>
<p>그것이 행복한 상황이었습니다, 이제 API가 오류를 응답할 때 우리의 슬픈 상황인 세 번째 테스트를 추가해 보겠습니다. 😢 즉, API가 오류로 응답할 때입니다.</p>
<h2 id="loading-속성-테스트하기" tabindex="-1"><a class="header-anchor" href="#loading-속성-테스트하기" aria-hidden="true">#</a> loading 속성 테스트하기```</h2>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"로딩 속성"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"초기값은 true이고 나중에 false로 변경되어야 합니다"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> result <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">renderHook</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">useFetchedData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> result<span class="token punctuation">.</span>current<span class="token punctuation">;</span>

    <span class="token comment">// 리렌더링 전에 로딩의 초기값이 true임을 검증합니다</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>loading<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">await</span> <span class="token function">waitFor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> result<span class="token punctuation">.</span>current<span class="token punctuation">;</span>

      <span class="token function">expect</span><span class="token punctuation">(</span>loading<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다시 한 번, renderHook을 사용하여 훅을 렌더링하고, 리렌더링이 발생하기 전에 로딩 속성의 초기값이 true인지 확인합니다. 그런 다음 waitFor 내부에 두 번째 검증을 감싸어서 리렌더링 이후에 확인하도록 합니다.</p>
<h2 id="에러-시나리오를-테스트하는-부분" tabindex="-1"><a class="header-anchor" href="#에러-시나리오를-테스트하는-부분" aria-hidden="true">#</a> 에러 시나리오를 테스트하는 부분</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"데이터를 성공적으로 가져오지 못했을 때"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> mockedError <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"모의 에러"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// fetch가 rejected 값을 반환하도록 모의화하여</span>
    <span class="token comment">// 코드의 catch 블록에 대한 일부 커버리지를 추가합니다</span>
    fetch<span class="token punctuation">.</span><span class="token function">mockRejectedValue</span><span class="token punctuation">(</span>mockedError<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"에러를 반환해야 합니다"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> result <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">renderHook</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">useFetchedData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">await</span> <span class="token function">waitFor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> result<span class="token punctuation">.</span>current<span class="token punctuation">;</span>
      <span class="token function">expect</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span>mockedError<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>행복한 경로와는 조금 다르지만, 지금은 Jest의 mockRejectedValue를 사용하여 fetch 함수를 가짜로 만들어 모의 오류가 포함된 거부된 Promise를 반환합니다. 그런 다음 훅을 렌더링하고, 맞죠, 우리는 waitFor 내부에 어설션을 감싸서 약속이 거부되고 그 결과로 우리의 어설션이 통과할 때까지 기다립니다.</p>
<h2 id="커버리지와-일반적인-테스트에-대한-간단한-메모" tabindex="-1"><a class="header-anchor" href="#커버리지와-일반적인-테스트에-대한-간단한-메모" aria-hidden="true">#</a> 커버리지와 일반적인 테스트에 대한 간단한 메모</h2>
<p>이 시점에서 우리의 테스트 커버리지 도구는 우리가 100%의 커버리지를 가지고 있다고 보고합니다. 이게 진실일까요?</p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtotestyourReacthookswithReactTestingLibraryandJest/img/HowtotestyourReacthookswithReactTestingLibraryandJest_1.png" alt="How to test your React hooks with React Testing Library and Jest"></p>
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
<p>기술적으로는 맞지만 커버리지는 우리의 테스트에서 직접적으로 나오는 것은 아닙니다. RTL은 각 테스트 후에 클린업 함수를 실행하고, 이 함수는 useEffect에서 가지고 있는 클린업 함수를 실행합니다. 그렇게 되면 다음 코드가 커버되죠:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  abortController<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 경우에는 라이브러리의 기본 동작이 우리의 코드를 커버하는 것이죠. 하지만 현실적인 시나리오에서는 특정 부분의 테스트를 추가하지 않아도 100% 커버리지를 얻을 수 있는 경우가 있습니다. 예를 들어 다음 코드를 고려해 보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> saveToDadatabase <span class="token keyword">from</span> <span class="token string">"./saveToDatabase"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">processData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  data<span class="token punctuation">.</span>processed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

  <span class="token function">saveToDadatabase</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> data<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>우리는 데이터베이스에 데이터를 저장하는 것 외에도 전달한 데이터를 반환하는 processData 함수를 갖고 있습니다. 이제 이 파일에 대한 다음 테스트를 고려해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> processData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./processData"</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"processData"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should return processed data"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">"mock body"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> processedData <span class="token operator">=</span> <span class="token function">processData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>processedData<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">"mock body"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">processed</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 테스트는 processData 함수에 데이터 객체를 전달하면 processed 속성이 추가되어 true로 설정된 상태로 반환된다는 것을 확인합니다. 정확한 시나리오에서는 코드 커버리지가 100%가 될 것이며, saveToDatabase(data) 호출을 제거해도 테스트는 통과할 것입니다! 😱</p>
<p>나는 모든 것을 다루었는지 확인하기 위해 자신에게 하는 좋은 질문은 &quot;만약 이 코드 줄을 제거한다면 어떤 테스트가 실패할 것인가?&quot;입니다. 그렇지 않으면 해당 코드 줄을 다루는 더 많은 테스트를 추가하여 더 구체적으로 다뤄야 함을 알 수 있습니다.</p>
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
<p>어쨌든, 우리가 조금 색다른 방향으로 떠났지만 언급할 가치가 있다고 생각해요. useEffect에서 클린업 함수를 다루는 추가 테스트를 추가해볼까요?</p>
<h2 id="클린업-함수-테스트" tabindex="-1"><a class="header-anchor" href="#클린업-함수-테스트" aria-hidden="true">#</a> 클린업 함수 테스트</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"언마운트 시 fetch 요청을 중단해야 합니다"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> mockedAbortController <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">abort</span><span class="token operator">:</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    global<span class="token punctuation">.</span>AbortController <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> mockedAbortController<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"fetch 요청을 중단해야 합니다"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> unmount <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">renderHook</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">useFetchedData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">unmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>mockedAbortController<span class="token punctuation">.</span>abort<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서도 똑같은 패턴을 보시고 계실 거에요. beforeEach에서 무언가를 mocking한 다음 호출되었는지 확인하는 것이죠.</p>
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
<p>저는 주로 가능한 한 it 블록 대신 beforeEach에서 함수를 모킹하는 것을 좋아합니다. 그러면 일반적으로 당신의 어서션들을 훨씬 더 간결하게 할 수 있어요.</p>
<p>여기서 새로운 점은 renderHook이 반환하는 unmount 함수를 사용한다는 것인데, 이 함수는 우리의 컴포넌트를 언마운트하고 useEffect의 클린업 함수를 실행합니다.</p>
<h2 id="마지막으로" tabindex="-1"><a class="header-anchor" href="#마지막으로" aria-hidden="true">#</a> 마지막으로</h2>
<p>끝까지 왔네요!</p>
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
<p>저장소를 복제해서 직접 시도해볼 수 있어요. 앱.js 파일에 대한 테스트도 찾을 수 있을 거예요.</p>
<p>도움이 되었으면 좋겠고, 언제나 피드백을 공유해주세요 🙂</p>
</div></template>
