<template><div><p><img src="@source/docs/Tech/2024-03-28-AsyncAtomsEasyStateManagementinNextjswithJotai/img/AsyncAtomsEasyStateManagementinNextjswithJotai_0.png" alt="Async Atoms Easy State Management in Next.js with Jotai"></p>
<p>Jotai는 비동기 원자도 지원합니다. 비동기 원자는 비동기적으로 읽고 쓸 수 있는 원자입니다. jotai/utils 모듈의 atom 함수와 loadable 함수를 사용하여 비동기 원자를 만들 수 있습니다. 다음과 같이 비동기 원자를 만들 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> atom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"jotai"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> loadable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"jotai/utils"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Post <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./user-atom"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> postsPaginationAtom <span class="token operator">=</span> <span class="token function">atom</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> postsAtom <span class="token operator">=</span> atom<span class="token operator">&lt;</span>Promise<span class="token operator">&lt;</span>Post<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">>></span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">get</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 페이지네이션 변경 시 이 원자가 다시 평가됩니다</span>
  <span class="token keyword">const</span> pagination <span class="token operator">=</span> <span class="token function">get</span><span class="token punctuation">(</span>postsPaginationAtom<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://jsonplaceholder.typicode.com/posts?_start=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>pagination<span class="token punctuation">.</span>start<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;_limit=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>pagination<span class="token punctuation">.</span>limit<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> data<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> getPostsAtom <span class="token operator">=</span> <span class="token function">loadable</span><span class="token punctuation">(</span>postsAtom<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>설명:</p>
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
<li>페이지네이션 정보를 저장하는 postsPaginationAtom 원자를 만듭니다.</li>
<li>페이지네이션 정보에 따라 게시물을 가져오는 postsAtom 원자를 만듭니다.</li>
<li>loadable 함수를 사용하여 getPostsAtom 원자를 만들어 비동기 원자를 읽고 쓸 수 있도록 합니다.</li>
</ul>
<p>이제 다음과 같이 컴포넌트에서 비동기 원자를 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useAtom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"jotai"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getPostsAtom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/atoms/posts-atom"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">PostsPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>response<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useAtom</span><span class="token punctuation">(</span>getPostsAtom<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>response 변수의 모양은 다음과 같을 것입니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token string">'loading'</span> <span class="token operator">|</span> <span class="token string">'hasData'</span> <span class="token operator">|</span> <span class="token string">'hasError'</span><span class="token punctuation">,</span>
    data<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
    error<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>async atom의 상태에 따라 다른 UI를 렌더링하는 데 state 속성을 사용할 수 있습니다. 예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token string">"loading"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 로딩 상태 렌더링</span>
  <span class="token punctuation">}</span>  <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token string">"hasError"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 에러 상태 렌더링</span>
  <span class="token punctuation">}</span>  <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token string">"hasData"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 데이터 상태 렌더링</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>data 속성은 state가 hasData인 경우 데이터를 포함하고, error 속성은 state가 hasError인 경우 오류를 포함합니다. async atom을 사용하는 구성 요소 예제는 다음과 같습니다:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"사용자 최적화"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getPostsAtom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/atoms/async-atom"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useAtom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"jotai"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> AsyncPostList <span class="token keyword">from</span> <span class="token string">"./posts"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Pagination <span class="token keyword">from</span> <span class="token string">"./pagination"</span><span class="token punctuation">;</span>
type Props <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">AsyncAtomPage</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">:</span> Props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>response<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useAtom</span><span class="token punctuation">(</span>getPostsAtom<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token string">"loading"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>로딩 중<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token string">"hasError"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>error <span class="token keyword">instanceof</span> <span class="token class-name">Error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>response<span class="token punctuation">.</span>error<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>알 수 없는 오류<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex flex-col items-center space-y-4"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>AsyncPostList posts<span class="token operator">=</span><span class="token punctuation">{</span>response<span class="token punctuation">.</span>data<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Pagination <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>페이지이션 구성요소는 다음과 같이 구현할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> postsPaginationAtom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/atoms/async-atom"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useAtom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"jotai"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

type Props <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Pagination</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> Props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>pagination<span class="token punctuation">,</span> setPagination<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useAtom</span><span class="token punctuation">(</span>postsPaginationAtom<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleNext</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setPagination</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>pagination<span class="token punctuation">,</span> <span class="token literal-property property">start</span><span class="token operator">:</span> pagination<span class="token punctuation">.</span>start <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handlePrevious</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setPagination</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>pagination<span class="token punctuation">,</span> <span class="token literal-property property">start</span><span class="token operator">:</span> pagination<span class="token punctuation">.</span>start <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex flex-row items-center space-x-4 p-2 mb-4"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>button
        onClick<span class="token operator">=</span><span class="token punctuation">{</span>handlePrevious<span class="token punctuation">}</span>
        disabled<span class="token operator">=</span><span class="token punctuation">{</span>pagination<span class="token punctuation">.</span>start <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">}</span>
        className<span class="token operator">=</span><span class="token string">"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"</span>
      <span class="token operator">></span>
        이전
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span>span<span class="token operator">></span>페이지<span class="token operator">:</span> <span class="token punctuation">{</span>pagination<span class="token punctuation">.</span>start <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
      <span class="token operator">&lt;</span>button
        onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleNext<span class="token punctuation">}</span>
        className<span class="token operator">=</span><span class="token string">"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"</span>
      <span class="token operator">></span>
        다음
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Pagination<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또한, AsyncPostList 구성요소는 다음과 같이 구현할 수 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Post <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/atoms/user-atom"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> PostCard <span class="token keyword">from</span> <span class="token string">"../post-card"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Header <span class="token keyword">from</span> <span class="token string">"./header"</span><span class="token punctuation">;</span>

type Props <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">posts</span><span class="token operator">:</span> Post<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">AsyncPostList</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> posts <span class="token punctuation">}</span><span class="token operator">:</span> Props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex flex-col items-center space-y-4 max-w-2xl"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Header <span class="token operator">/</span><span class="token operator">></span>
      <span class="token punctuation">{</span>posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>PostCard key<span class="token operator">=</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>id<span class="token punctuation">}</span> post<span class="token operator">=</span><span class="token punctuation">{</span>post<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> AsyncPostList<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Header 컴포넌트는 타이틀과 페이지네이션 제한 드롭다운을 표시하는 데 사용됩니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> postsPaginationAtom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/atoms/async-atom"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useAtom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"jotai"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

type Props <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> limits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Header</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">:</span> Props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>pagination<span class="token punctuation">,</span> setPagination<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useAtom</span><span class="token punctuation">(</span>postsPaginationAtom<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onLimitChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ChangeEvent<span class="token operator">&lt;</span>HTMLSelectElement<span class="token operator">></span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setPagination</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>pagination<span class="token punctuation">,</span> <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex flex-row items-center space-x-4 p-2 mb-4 w-full justify-between"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>Posts<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>select
        value<span class="token operator">=</span><span class="token punctuation">{</span>pagination<span class="token punctuation">.</span>limit<span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span>onLimitChange<span class="token punctuation">}</span>
        className<span class="token operator">=</span><span class="token string">"font-bold py-2 px-4 rounded border border-gray-300"</span>
      <span class="token operator">></span>
        <span class="token punctuation">{</span>limits<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">limit</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>option key<span class="token operator">=</span><span class="token punctuation">{</span>limit<span class="token punctuation">}</span> value<span class="token operator">=</span><span class="token punctuation">{</span>limit<span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token punctuation">{</span>limit<span class="token punctuation">}</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>select<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Jotai에서 async atom을 사용하여 데이터를 비동기적으로 가져오고 응용 프로그램의 데이터 상태를 관리할 수 있는 방법입니다.</p>
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
<h1 id="데모" tabindex="-1"><a class="header-anchor" href="#데모" aria-hidden="true">#</a> 데모</h1>
<p>비동기 Atom 예제의 데모입니다:</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*br1RR2pD_4tXuKSuoXws3w.gif" alt="데모"></p>
<p>전체 데모: <a href="https://jotai-example.rasit.me/" target="_blank" rel="noopener noreferrer">https://jotai-example.rasit.me/<ExternalLinkIcon/></a></p>
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
<p>깃허브 저장소: https://github.com/rasitcolakel/next-js-jotai</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>이 글에서는 React를 위한 간단하고 유연한 상태 관리 라이브러리 인 Jotai에 대해 배웠습니다. 우리는 Jotai를 사용하여 atom, 파생된 atom 및 비동기 atom을 만드는 방법을 알아보았습니다. 또한 Next.js 애플리케이션에서 Jotai를 사용하는 방법도 배웠습니다. Jotai는 애플리케이션의 상태를 간단하고 효율적으로 관리하는 데 도움이 되는 강력한 상태 관리 라이브러리입니다. 이 글이 도움이 되었기를 바랍니다. 궁금한 점이 있거나 피드백이 있다면 언제든지 Twitter를 통해 저에게 연락해 주세요. 읽어 주셔서 감사합니다!</p>
<h1 id="참고문헌" tabindex="-1"><a class="header-anchor" href="#참고문헌" aria-hidden="true">#</a> 참고문헌</h1>
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
<li>Jotai 문서</li>
<li>TypeScript</li>
<li>Next.js</li>
<li>Vercel</li>
<li>React</li>
</ul>
</div></template>
