<template><div><h1 id="nextjs-14에서-현재-url의-query를-가져오는-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14에서-현재-url의-query를-가져오는-방법" aria-hidden="true">#</a> Nextjs 14에서 현재 URL의 query를 가져오는 방법</h1>
<p>useSearchParams은 현재 URL의 쿼리 문자열을 읽을 수 있게 해주는 Client Component 훅입니다.</p>
<p>useSearchParams은 URLSearchParams 인터페이스의 읽기 전용 버전을 반환합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useSearchParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">SearchBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> searchParams <span class="token operator">=</span> <span class="token function">useSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> search <span class="token operator">=</span> searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"search"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// URL -> `/dashboard?search=my-project`</span>
  <span class="token comment">// `search` -> 'my-project'</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span><span class="token operator">></span>Search<span class="token operator">:</span> <span class="token punctuation">{</span>search<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
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
<h2 id="매개변수" tabindex="-1"><a class="header-anchor" href="#매개변수" aria-hidden="true">#</a> 매개변수</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> searchParams <span class="token operator">=</span> <span class="token function">useSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>useSearchParams 함수는 어떤 매개변수도 필요로하지 않습니다.</p>
<h2 id="반환값" tabindex="-1"><a class="header-anchor" href="#반환값" aria-hidden="true">#</a> 반환값</h2>
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
<p>useSearchParams은 URLSearchParams 인터페이스의 읽기 전용 버전을 반환합니다. 이 인터페이스에는 URL의 쿼리 문자열을 읽는 유틸리티 메소드가 포함되어 있습니다:</p>
<ul>
<li>URLSearchParams.get()
: 검색 파라미터와 연관된 첫 번째 값이 반환됩니다. 예를 들어:
URL searchParams.get(&quot;a&quot;)
/dashboard?a=1 <code v-pre>1</code>
/dashboard?a= ``/dashboard?b=3 null
/dashboard?a=1&amp;a=2<code v-pre>1</code> - 모든 값은 getAll()을 사용하여 얻을 수 있습니다.</li>
<li>URLSearchParams.has()
: 주어진 파라미터가 존재하는지를 나타내는 부울 값을 반환합니다. 예를 들어:
URL searchParams.has(&quot;a&quot;)
/dashboard?a=1 true
/dashboard?b=3 false</li>
<li>URLSearchParams의 다른 읽기 전용 메소드인 getAll(), keys(), values(), entries(), forEach(), toString() 등에 대해 더 알아보세요.</li>
</ul>
<blockquote>
<p>알아두면 좋은 사실:
useSearchParams는 클라이언트 컴포넌트 후크이며 서버 컴포넌트에서는 지원되지 않습니다. 부분 렌더링 중에 오래된 값이 발생하는 것을 방지하기 위함입니다.
응용 프로그램에 /pages 디렉토리가 포함된 경우, useSearchParams는 ReadonlyURLSearchParams | null을 반환합니다. null 값은 getServerSideProps를 사용하지 않는 페이지의 사전 렌더링 중에 검색 매개 변수를 알 수 없기 때문에 마이그레이션 중 호환성을 위해 사용됩니다.</p>
</blockquote>
<h3 id="정적-렌더링" tabindex="-1"><a class="header-anchor" href="#정적-렌더링" aria-hidden="true">#</a> 정적 렌더링</h3>
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
<p>만약 경로가 정적으로 렌더링되면, useSearchParams를 호출하면 클라이언트 구성 요소 트리가 가장 가까운 Suspense 경계까지 클라이언트 측에서 렌더링됩니다.</p>
<p>이는 경로의 일부가 정적으로 렌더링되는 동안 useSearchParams를 사용하는 동적 부분이 클라이언트 측에서 렌더링되도록합니다.</p>
<p>useSearchParams를 사용하는 Client Component를 <code v-pre>Suspense/</code> 경계로 감싸는 것을 권장합니다. 이렇게하면 그 위에있는 Client Components가 정적으로 렌더링되어 초기 HTML의 일부로 전송됩니다. 예를 들어.</p>
<p>예시:</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useSearchParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">SearchBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> searchParams <span class="token operator">=</span> <span class="token function">useSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> search <span class="token operator">=</span> searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"search"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 정적 렌더링을 사용할 때 서버에 로깅되지 않습니다.</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>search<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span><span class="token operator">></span>검색<span class="token operator">:</span> <span class="token punctuation">{</span>search<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> SearchBar <span class="token keyword">from</span> <span class="token string">"./search-bar"</span><span class="token punctuation">;</span>

<span class="token comment">// Suspense 경계로 전달된 이 컴포넌트는 초기 HTML에서 검색 바 자리에 렌더링됩니다.</span>
<span class="token comment">// React hydration 시 값이 사용 가능한 경우, fallback은 `&lt;SearchBar>` 컴포넌트로 대체됩니다.</span>
<span class="token keyword">function</span> <span class="token function">SearchBarFallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span><span class="token operator">></span>플레이스홀더<span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>nav<span class="token operator">></span>
        <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>SearchBarFallback <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>SearchBar <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>대시보드<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="동작" tabindex="-1"><a class="header-anchor" href="#동작" aria-hidden="true">#</a> 동작</h2>
<h3 id="동적-렌더링" tabindex="-1"><a class="header-anchor" href="#동적-렌더링" aria-hidden="true">#</a> 동적 렌더링</h3>
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
<p>경로가 동적으로 렌더링되는 경우, 클라이언트 컴포넌트의 초기 서버 렌더링 중에 useSearchParams가 사용 가능합니다.</p>
<p>예시:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useSearchParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">SearchBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> searchParams <span class="token operator">=</span> <span class="token function">useSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> search <span class="token operator">=</span> searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"search"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 이 내용은 서버의 초기 렌더링 중에 로그로 남겨집니다.</span>
  <span class="token comment">// 그리고 이후의 탐색 중에 클라이언트에서도 로그로 남습니다.</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>search<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span><span class="token operator">></span>Search<span class="token operator">:</span> <span class="token punctuation">{</span>search<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> SearchBar <span class="token keyword">from</span> <span class="token string">"./search-bar"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> dynamic <span class="token operator">=</span> <span class="token string">"force-dynamic"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>nav<span class="token operator">></span>
        <span class="token operator">&lt;</span>SearchBar <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>대시보드<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<blockquote>
<p>유용한 정보: 동적 라우트 세그먼트 설정 옵션을 'force-dynamic'으로 설정하면 동적 렌더링을 강제로 사용할 수 있습니다.</p>
</blockquote>
<h3 id="서버-구성-요소" tabindex="-1"><a class="header-anchor" href="#서버-구성-요소" aria-hidden="true">#</a> 서버 구성 요소</h3>
<h4 id="페이지" tabindex="-1"><a class="header-anchor" href="#페이지" aria-hidden="true">#</a> 페이지</h4>
<p>서버 구성 요소 (Server Components)에서 검색 매개변수에 액세스하려면 searchParams 속성을 사용하세요.</p>
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
<h4 id="레이아웃" tabindex="-1"><a class="header-anchor" href="#레이아웃" aria-hidden="true">#</a> 레이아웃</h4>
<p>페이지와 달리 레이아웃(서버 컴포넌트)은 searchParams 속성을 받지 않습니다. 이는 공유 레이아웃이 탐색 중에 다시 렌더링되지 않기 때문에 탐색 사이에 오래된 searchParams가 발생할 수 있기 때문입니다. 자세한 설명 보기.</p>
<p>대신에 클라이언트 컴포넌트에서 Page searchParams 속성이나 useSearchParams 훅을 사용하세요. 그것은 최신 searchParams와 함께 클라이언트에서 다시 렌더링됩니다.</p>
<h2 id="예제" tabindex="-1"><a class="header-anchor" href="#예제" aria-hidden="true">#</a> 예제</h2>
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
<h2 id="searchparams-업데이트하기" tabindex="-1"><a class="header-anchor" href="#searchparams-업데이트하기" aria-hidden="true">#</a> searchParams 업데이트하기</h2>
<p>새로운 searchParams를 설정하기 위해 useRouter 또는 Link를 사용할 수 있습니다. 네비게이션이 실행된 후에는 현재 page.js가 업데이트된 searchParams 속성을 받게 될 것입니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ExampleClientComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> pathname <span class="token operator">=</span> <span class="token function">usePathname</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> searchParams <span class="token operator">=</span> <span class="token function">useSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// 제공된 키/값 쌍과 현재 searchParams를 병합하여 새로운 searchParams 문자열을 가져옵니다</span>
  <span class="token keyword">const</span> createQueryString <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span>searchParams<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      params<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> value<span class="token punctuation">)</span>

      <span class="token keyword">return</span> params<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>searchParams<span class="token punctuation">]</span>
  <span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>정렬 방식<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>

      <span class="token punctuation">{</span><span class="token comment">/* useRouter 사용 */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>button
        onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token comment">// &lt;pathname>?sort=asc</span>
          router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>pathname <span class="token operator">+</span> <span class="token string">'?'</span> <span class="token operator">+</span> <span class="token function">createQueryString</span><span class="token punctuation">(</span><span class="token string">'sort'</span><span class="token punctuation">,</span> <span class="token string">'asc'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token operator">></span>
        오름차순
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

      <span class="token punctuation">{</span><span class="token comment">/* &lt;Link> 사용 */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>Link
        href<span class="token operator">=</span><span class="token punctuation">{</span>
          <span class="token comment">// &lt;pathname>?sort=desc</span>
          pathname <span class="token operator">+</span> <span class="token string">'?'</span> <span class="token operator">+</span> <span class="token function">createQueryString</span><span class="token punctuation">(</span><span class="token string">'sort'</span><span class="token punctuation">,</span> <span class="token string">'desc'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token operator">></span>
        내림차순
      <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="버전-이력" tabindex="-1"><a class="header-anchor" href="#버전-이력" aria-hidden="true">#</a> 버전 이력</h2>
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
<p>Version Changes
v13.0.0 useSearchParams introduced.</p>
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
</div></template>
