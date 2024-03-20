<template><div><h1 id="lazy-loading" tabindex="-1"><a class="header-anchor" href="#lazy-loading" aria-hidden="true">#</a> Lazy Loading</h1>
<p>Next.js의 'Lazy Loading'은 라우트를 렌더링하기 위해 필요한 JavaScript 양을 줄여 애플리케이션의 초기 로딩 성능을 향상시키는 데 도움이 됩니다.
클라이언트 컴포넌트와 가져온 라이브러리의 로딩을 지연시키고, 사용자가 필요할 때에만 클라이언트 번들에 포함시킬 수 있습니다. 예를 들어, 사용자가 모달을 열 때까지 모달의 로딩을 지연시킬 수 있습니다.
Next.js에서 'Lazy Loading'을 구현하는 두 가지 방법이 있습니다:</p>
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
<li>다음/dynamic을 사용하여 동적 가져오기</li>
<li>React.lazy()와 Suspense를 사용하는 방법
기본적으로, 서버 컴포넌트는 자동으로 코드 분할되며, 스트리밍을 사용하여 서버에서 클라이언트로 UI 조각을 점진적으로 전송할 수 있습니다. 지연 로딩은 클라이언트 컴포넌트에 적용됩니다.</li>
</ul>
<h2 id="다음-dynamic" tabindex="-1"><a class="header-anchor" href="#다음-dynamic" aria-hidden="true">#</a> 다음/dynamic</h2>
<p>다음/dynamic은 React.lazy()와 Suspense의 조합입니다. 앱과 페이지 디렉토리에서 동일하게 작동하여 점진적으로 마이그레이션할 수 있도록 합니다.</p>
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
<h2 id="예시" tabindex="-1"><a class="header-anchor" href="#예시" aria-hidden="true">#</a> 예시</h2>
<h3 id="클라이언트-컴포넌트-가져오기" tabindex="-1"><a class="header-anchor" href="#클라이언트-컴포넌트-가져오기" aria-hidden="true">#</a> 클라이언트 컴포넌트 가져오기</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> dynamic <span class="token keyword">from</span> <span class="token string">"next/dynamic"</span><span class="token punctuation">;</span>

<span class="token comment">// 클라이언트 컴포넌트:</span>
<span class="token keyword">const</span> ComponentA <span class="token operator">=</span> <span class="token function">dynamic</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"../components/A"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ComponentB <span class="token operator">=</span> <span class="token function">dynamic</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"../components/B"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ComponentC <span class="token operator">=</span> <span class="token function">dynamic</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"../components/C"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">ssr</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ClientComponentExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showMore<span class="token punctuation">,</span> setShowMore<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token punctuation">{</span><span class="token comment">/* 즉시 로드되지만 별도의 클라이언트 번들에 포함됨 */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>ComponentA <span class="token operator">/</span><span class="token operator">></span>

      <span class="token punctuation">{</span><span class="token comment">/* 필요 시에만 로드되고, 조건이 충족되면 */</span><span class="token punctuation">}</span>
      <span class="token punctuation">{</span>showMore <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>ComponentB <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setShowMore</span><span class="token punctuation">(</span><span class="token operator">!</span>showMore<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>토글<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

      <span class="token punctuation">{</span><span class="token comment">/* 클라이언트 사이드에서만 로드됨 */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>ComponentC <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ssr-생략" tabindex="-1"><a class="header-anchor" href="#ssr-생략" aria-hidden="true">#</a> SSR 생략</h3>
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
<p>React.lazy()과 Suspense를 사용할 때, Client Components는 기본적으로 사전 렌더링(서버 측 렌더링)됩니다.
만약 Client Component의 사전 렌더링을 비활성화하고 싶다면, ssr 옵션을 false로 설정하여 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> ComponentC <span class="token operator">=</span> <span class="token function">dynamic</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"../components/C"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">ssr</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="서버-컴포넌트-가져오기" tabindex="-1"><a class="header-anchor" href="#서버-컴포넌트-가져오기" aria-hidden="true">#</a> 서버 컴포넌트 가져오기</h3>
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
<p>동적으로 서버 컴포넌트를 가져오면 서버 컴포넌트 자체가 지연로드되지 않고 서버 컴포넌트의 자식인 클라이언트 컴포넌트만이 지연로드됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> dynamic <span class="token keyword">from</span> <span class="token string">"next/dynamic"</span><span class="token punctuation">;</span>

<span class="token comment">// 서버 컴포넌트:</span>
<span class="token keyword">const</span> ServerComponent <span class="token operator">=</span> <span class="token function">dynamic</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"../components/ServerComponent"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ServerComponentExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>ServerComponent <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="외부-라이브러리-로드" tabindex="-1"><a class="header-anchor" href="#외부-라이브러리-로드" aria-hidden="true">#</a> 외부 라이브러리 로드</h3>
<p>외부 라이브러리는 import() 함수를 사용하여 필요에 따라 로드할 수 있습니다. 이 예시는 퍼즈 검색을 위해 외부 라이브러리 fuse.js를 사용합니다. 사용자가 검색 입력란에 입력을 할 때에만 모듈이 클라이언트에 로드됩니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'사용자용'</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">const</span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Tim'</span><span class="token punctuation">,</span> <span class="token string">'Joe'</span><span class="token punctuation">,</span> <span class="token string">'Bel'</span><span class="token punctuation">,</span> <span class="token string">'Lee'</span><span class="token punctuation">]</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>results<span class="token punctuation">,</span> setResults<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>input
        type<span class="token operator">=</span><span class="token string">"text"</span>
        placeholder<span class="token operator">=</span><span class="token string">"검색"</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>currentTarget
          <span class="token comment">// fuse.js 동적으로 로드</span>
          <span class="token keyword">const</span> Fuse <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'fuse.js'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default
          <span class="token keyword">const</span> fuse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fuse</span><span class="token punctuation">(</span>names<span class="token punctuation">)</span>

          <span class="token function">setResults</span><span class="token punctuation">(</span>fuse<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>pre<span class="token operator">></span>결과<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>results<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>pre<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="사용자-정의로딩-컴포넌트-추가" tabindex="-1"><a class="header-anchor" href="#사용자-정의로딩-컴포넌트-추가" aria-hidden="true">#</a> 사용자 정의로딩 컴포넌트 추가</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> dynamic <span class="token keyword">from</span> <span class="token string">"next/dynamic"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> WithCustomLoading <span class="token operator">=</span> <span class="token function">dynamic</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"../components/WithCustomLoading"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">loading</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>p<span class="token operator">></span>로딩 중<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token punctuation">{</span><span class="token comment">/* &lt;WithCustomLoading/>이 로드 중일 때 로딩 컴포넌트가 렌더링됩니다 */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>WithCustomLoading <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="named-exports-가져오기" tabindex="-1"><a class="header-anchor" href="#named-exports-가져오기" aria-hidden="true">#</a> Named Exports 가져오기</h3>
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
<p>명명된 내보내기를 동적으로 가져오려면, import() 함수에서 반환된 Promise에서 해당 내보내기를 반환할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>Hello<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> dynamic <span class="token keyword">from</span> <span class="token string">"next/dynamic"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> ClientComponent <span class="token operator">=</span> <span class="token function">dynamic</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"../components/hello"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">mod</span><span class="token punctuation">)</span> <span class="token operator">=></span> mod<span class="token punctuation">.</span>Hello<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
