<template><div><h1 id="페이지-및-레이아웃" tabindex="-1"><a class="header-anchor" href="#페이지-및-레이아웃" aria-hidden="true">#</a> 페이지 및 레이아웃</h1>
<p>페이지 라우터는 페이지 개념에 기반을 둔 파일 시스템 기반 라우터로 구축되어 있습니다.</p>
<p>페이지 디렉토리에 파일을 추가하면 해당 파일이 자동으로 경로로 사용할 수 있습니다.</p>
<p>Next.js에서 페이지는 페이지 디렉토리의 .js, .jsx, .ts 또는 .tsx 파일에서 내보낸 React 구성 요소입니다. 각 페이지는 파일 이름을 기반으로 경로와 연결됩니다.</p>
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
<p>예를 들어, 아래와 같이 React 컴포넌트를 내보내는 pages/about.js 파일을 만들면 이는 /about에서 접근할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">About</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>About<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="인덱스-경로" tabindex="-1"><a class="header-anchor" href="#인덱스-경로" aria-hidden="true">#</a> 인덱스 경로</h2>
<p>라우터는 index라는 이름의 파일을 디렉토리 루트로 자동으로 라우팅합니다.</p>
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
<li>pages/index.js → /</li>
<li>pages/blog/index.js → /blog</li>
</ul>
<h2 id="중첩된-라우트" tabindex="-1"><a class="header-anchor" href="#중첩된-라우트" aria-hidden="true">#</a> 중첩된 라우트</h2>
<p>라우터는 중첩된 파일을 지원합니다. 중첩된 폴더 구조를 생성하면 파일이 여전히 동일한 방법으로 라우팅됩니다.</p>
<ul>
<li>pages/blog/first-post.js → /blog/first-post</li>
<li>pages/dashboard/settings/username.js → /dashboard/settings/username</li>
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
<h2 id="동적-경로를-가지는-페이지" tabindex="-1"><a class="header-anchor" href="#동적-경로를-가지는-페이지" aria-hidden="true">#</a> 동적 경로를 가지는 페이지</h2>
<p>Next.js는 동적 경로를 갖는 페이지를 지원합니다. 예를 들어, pages/posts/[id].js라는 파일을 만들면, posts/1, posts/2 등의 경로에서 접근할 수 있습니다.</p>
<blockquote>
<p>동적 라우팅에 대해 자세히 알아보려면, 동적 라우팅 문서를 확인해보세요.</p>
</blockquote>
<h2 id="레이아웃-패턴" tabindex="-1"><a class="header-anchor" href="#레이아웃-패턴" aria-hidden="true">#</a> 레이아웃 패턴</h2>
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
<p>리액트 모델을 사용하면 페이지를 여러 구성 요소로 분해할 수 있습니다. 이러한 구성 요소 중 많은 것이 종종 페이지간에 재사용됩니다. 예를 들어, 모든 페이지에 동일한 내비게이션 바와 푸터가 있는 경우가 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Navbar <span class="token keyword">from</span> <span class="token string">"./navbar"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Footer <span class="token keyword">from</span> <span class="token string">"./footer"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Layout</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Navbar <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>main<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
      <span class="token operator">&lt;</span>Footer <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="예시" tabindex="-1"><a class="header-anchor" href="#예시" aria-hidden="true">#</a> 예시</h2>
<h3 id="사용자-지정-앱을-사용한-단일-공유-레이아웃" tabindex="-1"><a class="header-anchor" href="#사용자-지정-앱을-사용한-단일-공유-레이아웃" aria-hidden="true">#</a> 사용자 지정 앱을 사용한 단일 공유 레이아웃</h3>
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
<p>하나의 레이아웃만 사용하는 경우 Custom App을 생성하고 애플리케이션을 해당 레이아웃으로 감싸면 됩니다. 페이지를 변경할 때 사용되는 <code v-pre>Layout /</code> 컴포넌트는 상태가 유지되므로 (예: 입력 값) 페이지 간 이동 시 입력 값이 유지됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">"../components/layout"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Layout<span class="token operator">></span>
      <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="페이지별-레이아웃" tabindex="-1"><a class="header-anchor" href="#페이지별-레이아웃" aria-hidden="true">#</a> 페이지별 레이아웃</h3>
<p>여러 레이아웃이 필요한 경우 getLayout 속성을 페이지에 추가하여 레이아웃에 대한 React 컴포넌트를 반환할 수 있습니다. 이를 통해 페이지별로 레이아웃을 정의할 수 있습니다. 함수를 반환하기 때문에 원하는 경우 복잡한 중첩 레이아웃을 설정할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">'../components/layout'</span>
<span class="token keyword">import</span> NestedLayout <span class="token keyword">from</span> <span class="token string">'../components/nested-layout'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token doc-comment comment">/** 내용 입력 */</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

Page<span class="token punctuation">.</span><span class="token function-variable function">getLayout</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">getLayout</span><span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Layout<span class="token operator">></span>
      <span class="token operator">&lt;</span>NestedLayout<span class="token operator">></span><span class="token punctuation">{</span>page<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>NestedLayout<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 페이지 레벨에서 정의된 레이아웃을 사용합니다.</span>
  <span class="token keyword">const</span> getLayout <span class="token operator">=</span> Component<span class="token punctuation">.</span>getLayout <span class="token operator">??</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token operator">=></span> page<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token function">getLayout</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>페이지 간에 이동할 때, 싱글 페이지 애플리케이션(SPA) 경험을 위해 페이지 상태(입력 값, 스크롤 위치 등)를 유지하고 싶습니다.</p>
<p>이 레이아웃 패턴을 사용하면 React 컴포넌트 트리가 페이지 전환 사이에 유지되므로 상태가 지속됩니다. 컴포넌트 트리를 사용하면 React가 어떤 요소가 변경되었는지 이해하여 상태를 보존할 수 있습니다.```</p>
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
<blockquote>
<p>알아두면 좋아요: 이 과정을 조정(reconciliation)이라고 합니다. 이것은 React가 어떤 요소가 변경되었는지를 이해하는 방법입니다.</p>
</blockquote>
<h3 id="typescript을-사용할-때" tabindex="-1"><a class="header-anchor" href="#typescript을-사용할-때" aria-hidden="true">#</a> TypeScript을 사용할 때</h3>
<p>TypeScript을 사용할 때는 먼저 페이지에 대한 새로운 타입을 만들어야 합니다. 이 타입은 getLayout 함수를 포함해야 합니다. 그런 다음, AppProps에 대한 새로운 타입을 만들어야 합니다. 이 타입은 Component 속성을 이전에 생성된 타입을 사용하도록 재정의해야 합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> ReactElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">"../components/layout"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> NestedLayout <span class="token keyword">from</span> <span class="token string">"../components/nested-layout"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextPageWithLayout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./_app"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Page<span class="token operator">:</span> <span class="token function-variable function">NextPageWithLayout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>안녕<span class="token punctuation">,</span> 세계<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Page<span class="token punctuation">.</span><span class="token function-variable function">getLayout</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">getLayout</span><span class="token punctuation">(</span>page<span class="token operator">:</span> ReactElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Layout<span class="token operator">></span>
      <span class="token operator">&lt;</span>NestedLayout<span class="token operator">></span><span class="token punctuation">{</span>page<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>NestedLayout<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Page<span class="token punctuation">;</span>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> ReactElement<span class="token punctuation">,</span> ReactNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextPage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> AppProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/app"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">NextPageWithLayout<span class="token operator">&lt;</span><span class="token constant">P</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token constant">IP</span> <span class="token operator">=</span> <span class="token constant">P</span><span class="token operator">></span></span> <span class="token operator">=</span> NextPage<span class="token operator">&lt;</span><span class="token constant">P</span><span class="token punctuation">,</span> <span class="token constant">IP</span><span class="token operator">></span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  getLayout<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token operator">:</span> ReactElement<span class="token punctuation">)</span> <span class="token operator">=></span> ReactNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">AppPropsWithLayout</span> <span class="token operator">=</span> AppProps <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  Component<span class="token operator">:</span> NextPageWithLayout<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span><span class="token operator">:</span> AppPropsWithLayout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 사용 가능한 경우 페이지 레벨에서 정의된 레이아웃을 사용합니다</span>
  <span class="token keyword">const</span> getLayout <span class="token operator">=</span> Component<span class="token punctuation">.</span>getLayout <span class="token operator">??</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=></span> page<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token function">getLayout</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="데이터-가져오기" tabindex="-1"><a class="header-anchor" href="#데이터-가져오기" aria-hidden="true">#</a> 데이터 가져오기</h3>
<p>레이아웃 내에서 useEffect나 SWR과 같은 라이브러리를 사용하여 클라이언트 측에서 데이터를 가져올 수 있습니다. 이 파일은 페이지가 아니기 때문에 현재 getStaticProps 또는 getServerSideProps를 사용할 수 없습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> useSWR <span class="token keyword">from</span> <span class="token string">"swr"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Navbar <span class="token keyword">from</span> <span class="token string">"./navbar"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Footer <span class="token keyword">from</span> <span class="token string">"./footer"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Layout</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSWR</span><span class="token punctuation">(</span><span class="token string">"/api/navigation"</span><span class="token punctuation">,</span> fetcher<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>로드 실패<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>로딩 중<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Navbar links<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>links<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>main<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
      <span class="token operator">&lt;</span>Footer <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
</div></template>
