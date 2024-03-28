<template><div><h1 id="라우트-정의하기" tabindex="-1"><a class="header-anchor" href="#라우트-정의하기" aria-hidden="true">#</a> 라우트 정의하기</h1>
<p>가장 간단한 패턴은 앱 폴더 내에서 라우트 이름을 가진 디렉토리를 생성하고 해당 디렉토리 안에 page.tsx 파일을 만드는 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nextjs<span class="token operator">-</span>routing<span class="token operator">-</span>patterns
├── apps
│   └── blog
│       └── src
│           └── app
│               └── posts
│                   └── page<span class="token punctuation">.</span>tsx
└── libste
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음은 게시물을 가져와 표시하는 코드입니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ContentWrapper<span class="token punctuation">,</span> Title <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@nrp/components/server"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://jsonplaceholder.typicode.com/posts"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ContentWrapper<span class="token operator">></span>
      <span class="token operator">&lt;</span>Title<span class="token operator">></span>게시물<span class="token operator">&lt;</span><span class="token operator">/</span>Title<span class="token operator">></span>

      <span class="token operator">&lt;</span>ul className<span class="token operator">=</span><span class="token string">"flex flex-col gap-2"</span><span class="token operator">></span>
        <span class="token punctuation">{</span>posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">post</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> string <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/posts/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>post<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">"capitalize hover:underline"</span><span class="token operator">></span>
              <span class="token punctuation">{</span>post<span class="token punctuation">.</span>title<span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ContentWrapper<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="동적-루트" tabindex="-1"><a class="header-anchor" href="#동적-루트" aria-hidden="true">#</a> 동적 루트</h1>
<p>게시물의 ID로 이동하려면 동적 루트를 만들어야 합니다. 이를 위해 대괄호와 매개변수 이름이 포함된 디렉토리를 만들고 해당 디렉토리 안에 page.tsx 파일을 만드세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nextjs<span class="token operator">-</span>routing<span class="token operator">-</span>patterns
├── apps
│   └── blog
│       └── src
│           └── app
│               └── posts
│                   ├── <span class="token punctuation">[</span>postId<span class="token punctuation">]</span>
│                   │   └── page<span class="token punctuation">.</span>tsx
│                   └── page<span class="token punctuation">.</span>tsx
└── libs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위의 글을 한국어로 번역하면 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ContentWrapper<span class="token punctuation">,</span> Paragraph<span class="token punctuation">,</span> Title <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@nrp/components/server"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">postId</span><span class="token operator">:</span> string <span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> post <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://jsonplaceholder.typicode.com/posts/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">.</span>postId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ContentWrapper<span class="token operator">></span>
      <span class="token operator">&lt;</span>Title className<span class="token operator">=</span><span class="token string">"capitalize"</span><span class="token operator">></span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Title<span class="token operator">></span>

      <span class="token operator">&lt;</span>Paragraph className<span class="token operator">=</span><span class="token string">"capitalize"</span><span class="token operator">></span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>body<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Paragraph<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ContentWrapper<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="모든-경로-및-선택적-모든-경로" tabindex="-1"><a class="header-anchor" href="#모든-경로-및-선택적-모든-경로" aria-hidden="true">#</a> 모든 경로 및 선택적 모든 경로</h1>
<p>특정 디렉토리의 루트 이외의 모든 경로를 캐치하려면, Catch All 패턴을 사용할 수 있습니다. 우리는 [...slug] 괄호와 3 점 주석을 추가하고, 파라미터 props에서 slug를 경로 파라미터로 사용할 것이며, 해당 디렉토리에 page.tsx 파일을 추가할 것입니다.</p>
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
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nextjs-routing-patterns
├── apps
│ └── blog
│ └── src
│ └── app
│ └── catch-all
│ └── <span class="token punctuation">[</span><span class="token punctuation">..</span>.slug<span class="token punctuation">]</span>
│ └── page.tsx
└── libs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기가 코드입니다:</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ContentWrapper<span class="token punctuation">,</span> Title <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@nrp/components/server"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">slug</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ContentWrapper</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Title</span></span><span class="token punctuation">></span></span><span class="token plain-text">From Catch All</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Title</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>slug<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ContentWrapper</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/catch-all 경로로 이동하면 404 페이지가 나타납니다. 하지만 /catch-all/next/page/etc로 이동하면 원하는 대로 렌더링된 페이지가 표시되며 JSON 형식의 매개변수 배열이 표시됩니다.</p>
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
<p>두 번째 패턴을 사용하면 루트 디렉터리를 캐치할 수도 있어요. 디렉터리를 [[...slug]]와 3개의 점 주석으로 만든 다음, 그 폴더에 page.tsx를 추가할 거에요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nextjs<span class="token operator">-</span>routing<span class="token operator">-</span>patterns
├── apps
│   └── blog
│       └── src
│           └── app
│               └── optional<span class="token operator">-</span>catch<span class="token operator">-</span>all
│                   └── <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token operator">...</span>slug<span class="token punctuation">]</span><span class="token punctuation">]</span>
│                       └── page<span class="token punctuation">.</span>tsx
└── libs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>page.tsx 코드는 다음과 같아요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ContentWrapper<span class="token punctuation">,</span> Title <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@nrp/components/server"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">slug</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ContentWrapper<span class="token operator">></span>
      <span class="token operator">&lt;</span>Title<span class="token operator">></span>From Optional Catch All<span class="token operator">&lt;</span><span class="token operator">/</span>Title<span class="token operator">></span>

      <span class="token operator">&lt;</span>pre<span class="token operator">></span><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>slug<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>pre<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ContentWrapper<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<p>지금 루트 디렉토리는 404 페이지를 반환하지 않고 페이지의 제목 및 빈 매개 변수 배열을 반환합니다. 더 나아갈 때에도 이전에 설명한 것과 같은 동작이 발생할 것입니다.</p>
<h1 id="중첩-레이아웃" tabindex="-1"><a class="header-anchor" href="#중첩-레이아웃" aria-hidden="true">#</a> 중첩 레이아웃</h1>
<p>새 경로에 layout.tsx 파일이 추가되면 라우팅 레이아웃을 중첩할 수 있습니다. 이렇게 하면 현재 레이아웃을 상위 레이아웃 파일 안으로 중첩시키고 현재 페이지를 새 레이아웃의 자식들 안에 표시할 수 있습니다. 이는 탭 내비게이션을 만드는데 좋은 패턴입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nextjs<span class="token operator">-</span>routing<span class="token operator">-</span>patterns
├── apps
│   └── blog
│       └── src
│           └── app
│               └── nested
│                   ├── password
│                   │   └── page<span class="token punctuation">.</span>tsx
│                   ├── layout<span class="token punctuation">.</span>tsx
│                   ├── page<span class="token punctuation">.</span>tsx
│                   └── tabs<span class="token punctuation">.</span>tsx
└── libs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>여기 layout.tsx 코드입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ContentWrapper<span class="token punctuation">,</span> Title <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@nrp/components/server"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NavigationTabs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@nrp/components"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Layout</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">children</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ContentWrapper<span class="token operator">></span>
      <span class="token operator">&lt;</span>Title<span class="token operator">></span><span class="token constant">I</span> am nested layout<span class="token operator">&lt;</span><span class="token operator">/</span>Title<span class="token operator">></span>
      <span class="token operator">&lt;</span>NavigationTabs
        items<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Account"</span><span class="token punctuation">,</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"/nested"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Password"</span><span class="token punctuation">,</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"/nested/password"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>

      <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ContentWrapper<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>지금 중첩 경로에서 우리의 페이지가 레이아웃의 children과 또한 패스워드 경로에서 렌더링 될 것입니다. 레이아웃이 다시 렌더링되지 않아 SPA를 빠르게 탐색할 수 있다는 것이 좋은 점입니다.</p>
<p>레이아웃 페이지를 다시 렌더링해야 하는 경우 템플릿 파일 규칙을 사용하는 것을 고려해보세요: https://nextjs.org/docs/app/api-reference/file-conventions/template</p>
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
<p>여기 page.tsx 코드입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ContentWrapper<span class="token punctuation">,</span> Paragraph<span class="token punctuation">,</span> Title <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@nrp/components/server"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ContentWrapper<span class="token operator">></span>
      <span class="token operator">&lt;</span>Title<span class="token operator">></span>Account<span class="token operator">&lt;</span><span class="token operator">/</span>Title<span class="token operator">></span>

      <span class="token operator">&lt;</span>Paragraph<span class="token operator">></span>
        Lorem ipsum dolor sit amet<span class="token punctuation">,</span> consectetur adipisicing elit<span class="token punctuation">.</span> <span class="token constant">A</span> architecto<span class="token punctuation">,</span> corporis eos eum facilis incidunt libero perspiciatis provident quae quod<span class="token punctuation">.</span> Aliquid animi at culpa<span class="token punctuation">,</span> hic illo reiciendis
        similique<span class="token operator">?</span> Molestiae<span class="token punctuation">,</span> repudiandae<span class="token punctuation">.</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Paragraph<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ContentWrapper<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 비밀번호 페이지의 page.tsx 코드입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ContentWrapper<span class="token punctuation">,</span> Paragraph<span class="token punctuation">,</span> Title <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@nrp/components/server"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ContentWrapper<span class="token operator">></span>
      <span class="token operator">&lt;</span>Title<span class="token operator">></span>Password<span class="token operator">&lt;</span><span class="token operator">/</span>Title<span class="token operator">></span>

      <span class="token operator">&lt;</span>Paragraph<span class="token operator">></span>Lorem ipsum dolor sit amet<span class="token punctuation">,</span> consectetur adipiscing elit<span class="token punctuation">.</span> sed <span class="token keyword">do</span> eiusmod<span class="token operator">&lt;</span><span class="token operator">/</span>Paragraph<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ContentWrapper<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<h1 id="병렬-경로" tabindex="-1"><a class="header-anchor" href="#병렬-경로" aria-hidden="true">#</a> 병렬 경로</h1>
<p>이 패턴은 두 개 이상의 다른 페이지를 옆으로 나란히 표시하고 심지어 결합된 부모 페이지 내 각 페이지에 대한 고유한 탐색을 생성하는 데 좋습니다.</p>
<p>이를 위해 먼저 슬롯을 생성해야 합니다. 슬롯은 '@' 기호와 슬롯의 이름인 디렉토리입니다. 즉, @albums처럼. 여기서 우리는 다시 page.tsx 파일을 만들 것입니다. @users 페이지에 대해 동일한 것을 만들어 봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nextjs<span class="token operator">-</span>routing<span class="token operator">-</span>patterns
├── apps
│   └── blog
│       └── src
│           └── app
│               └── parallel
│                   ├── @albums
│                   │   └── page<span class="token punctuation">.</span>tsx
│                   └── @users
│                       └── page<span class="token punctuation">.</span>tsx
└── libs
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
<p>앨범 페이지 코드입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ContentWrapper<span class="token punctuation">,</span> Title <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@nrp/components/server"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> albums <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://jsonplaceholder.typicode.com/albums</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ContentWrapper<span class="token operator">></span>
      <span class="token operator">&lt;</span>Title size<span class="token operator">=</span><span class="token string">"small"</span><span class="token operator">></span>앨범<span class="token operator">&lt;</span><span class="token operator">/</span>Title<span class="token operator">></span>

      <span class="token operator">&lt;</span>ul<span class="token operator">></span>
        <span class="token punctuation">{</span>albums<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">album</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> string <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>album<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>album<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ContentWrapper<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 사용자 페이지 코드:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ContentWrapper<span class="token punctuation">,</span> Title <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@nrp/components/server"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Avatar<span class="token punctuation">,</span> AvatarFallback<span class="token punctuation">,</span> AvatarImage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@nrp/components"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://jsonplaceholder.typicode.com/users"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ContentWrapper<span class="token operator">></span>
      <span class="token operator">&lt;</span>Title size<span class="token operator">=</span><span class="token string">"small"</span><span class="token operator">></span>사용자<span class="token operator">&lt;</span><span class="token operator">/</span>Title<span class="token operator">></span>

      <span class="token operator">&lt;</span>ul className<span class="token operator">=</span><span class="token string">"flex flex-col gap-4"</span><span class="token operator">></span>
        <span class="token punctuation">{</span>users<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">username</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">email</span><span class="token operator">:</span> string <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">"flex items-center gap-4"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>Avatar<span class="token operator">></span>
              <span class="token operator">&lt;</span>AvatarImage className<span class="token operator">=</span><span class="token string">"bg-foreground"</span> src<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://robohash.org/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>user<span class="token punctuation">.</span>username<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span> alt<span class="token operator">=</span><span class="token string">"@shadcn"</span> <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>Avatar<span class="token operator">></span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>
              <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"text-sm font-medium leading-none"</span><span class="token operator">></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
              <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"text-sm text-muted-foreground"</span><span class="token operator">></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>email<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ContentWrapper<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>다음으로 레이아웃에 슬롯을 추가해야 합니다. 병렬 라우트 내에 중첩된 레이아웃을 추가하거나 루트 레이아웃에도 추가할 수 있습니다. 우리는 layout.tsx 파일과 병렬 페이지를 위한 page.tsx를 만듭니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nextjs<span class="token operator">-</span>routing<span class="token operator">-</span>patterns
├── apps
│   └── blog
│       └── src
│           └── app
│               ├── parallel
│               │   ├── @albums
│               │   │   └── page<span class="token punctuation">.</span>tsx
│               │   └── @users
│               │       └── page<span class="token punctuation">.</span>tsx
│               ├── layout<span class="token punctuation">.</span>tsx
│               └── page<span class="token punctuation">.</span>tsx
└── libs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음은 레이아웃에 대한 코드입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Title <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@nrp/components/server"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Layout</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children<span class="token punctuation">,</span> users<span class="token punctuation">,</span> albums <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">children</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">,</span> <span class="token literal-property property">users</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">,</span> <span class="token literal-property property">albums</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>Title<span class="token operator">></span>Parallel Layout<span class="token operator">&lt;</span><span class="token operator">/</span>Title<span class="token operator">></span>

      <span class="token punctuation">{</span>children<span class="token punctuation">}</span>

      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex gap-4 p-4 justify-around"</span><span class="token operator">></span>
        <span class="token punctuation">{</span>users<span class="token punctuation">}</span>
        <span class="token punctuation">{</span>albums<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그리고 우리의 병렬 라우트 페이지:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Title <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@nrp/components/server"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Title size<span class="token operator">=</span><span class="token string">"medium"</span><span class="token operator">></span>병렬 라우트<span class="token operator">&lt;</span><span class="token operator">/</span>Title<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="라우트-가로채기" tabindex="-1"><a class="header-anchor" href="#라우트-가로채기" aria-hidden="true">#</a> 라우트 가로채기</h1>
<p>가끔 페이지에서 소프트한 라우트를 원할 때가 있습니다. 예를 들어 Modal에서 페이지를 간단히 열어보고 원래의 라우트를 그대로 유지하려고 할 때나 직접 액세스하거나 링크를 공유할 때입니다. 그래서 이 패턴은 그런 용도로 아주 좋습니다.</p>
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
<p>사진 갤러리와 ID에 따른 사진 라우트가 있는 경우, 클라이언트에서 모달 대화상자에서 사진을 열지만 사진 페이지를 전체 새로 고침하고 직접 링크 공유를 통해 열 수 있도록 합니다.</p>
<p>우리의 사진 갤러리의 디렉터리 구조는 다음과 같을 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nextjs<span class="token operator">-</span>routing<span class="token operator">-</span>patterns
├── apps
│   └── blog
│       └── src
│           └── app
│               ├── intercepted
│               │   └── <span class="token punctuation">[</span>photoId<span class="token punctuation">]</span>
│               │       └── page<span class="token punctuation">.</span>tsx
│               └── page<span class="token punctuation">.</span>tsx
└── libs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 /intercepted/[photoId] 라우트를 가로채도록 원합니다. 이를 위해 레이아웃에 슬롯 디렉토리를 만들어 추가해야 합니다. 슬롯 디렉토리에서 현재 범위를 나타내는 접두사가 있는 디렉토리를 만들어야 합니다. 여기서 (.)는 현재 범위를, (..)는 상위 범위를, (../..)는 상위의 상위 범위를, (...)는 루트 범위를 나타냅니다.```</p>
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
<p>만약 중첩된 라우트라면 이 디렉토리 내에서 라우팅 디렉토리 구조를 추가할 거에요. (.) prefix 대신에, 첫 번째 폴더만 가지고 있을 거에요. 우리 @modal 슬롯을 보관할 layout.tsx 파일도 추가해 봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nextjs<span class="token operator">-</span>routing<span class="token operator">-</span>patterns
├── apps
│   └── blog
│       └── src
│           └── app
│               ├── intercepted
│               │   ├── @modal
│               │   │   <span class="token function">└──</span> <span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>intercepted
│               │   │       └── <span class="token punctuation">[</span>photoId<span class="token punctuation">]</span>
│               │   │           └── page<span class="token punctuation">.</span>tsx
│               │   └── <span class="token punctuation">[</span>photoId<span class="token punctuation">]</span>
│               │       └── page<span class="token punctuation">.</span>tsx
│               ├── layout<span class="token punctuation">.</span>tsx
│               └── page<span class="token punctuation">.</span>tsx
└── libs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음은 layout.tsx 파일의 코드에요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ReactNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Layout</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children<span class="token punctuation">,</span> modal <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">children</span><span class="token operator">:</span> ReactNode<span class="token punctuation">,</span> <span class="token literal-property property">modal</span><span class="token operator">:</span> ReactNode <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token punctuation">{</span>children<span class="token punctuation">}</span> <span class="token punctuation">{</span>modal<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<p>js
/[photoId]/page.tsx 페이지 코드:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ContentWrapper<span class="token punctuation">,</span> Title <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@nrp/components/server"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Photo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../../components/photo"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">imageId</span><span class="token operator">:</span> string <span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ContentWrapper<span class="token operator">></span>
      <span class="token operator">&lt;</span>Title<span class="token operator">></span>가로채인 라우트<span class="token operator">&lt;</span><span class="token operator">/</span>Title<span class="token operator">></span>

      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"w-[600px] self-center"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Photo imageId<span class="token operator">=</span><span class="token punctuation">{</span>params<span class="token punctuation">.</span>imageId<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ContentWrapper<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>가로채인 /@modal/(..)intercepted/[photoId]/page.tsx 페이지 코드:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Photo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../../../../components/photo"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Loader2 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"lucide-react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Modal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../../../../components/modal"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">imageId</span><span class="token operator">:</span> string <span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Modal title<span class="token operator">=</span><span class="token string">"가로채인 라우트"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"min-h-[100px] flex items-center justify-center"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Loader2 className<span class="token operator">=</span><span class="token string">"animate-spin"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Photo imageId<span class="token operator">=</span><span class="token punctuation">{</span>params<span class="token punctuation">.</span>imageId<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Modal<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>예상대로 작동하도록 하려면 default.tsx 파일을 디렉터리 구조에 추가해야 합니다. 이 파일은 만일 레이아웃의 슬롯에 렌더링할 내용이 없을 경우 next.js에 렌더링할 내용을 알려줍니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nextjs<span class="token operator">-</span>routing<span class="token operator">-</span>patterns
├── apps
│   └── blog
│       └── src
│           └── app
│               ├── intercepted
│               │   ├── @modal
│               │   │   <span class="token function">└──</span> <span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>intercepted
│               │   │       ├── <span class="token punctuation">[</span>photoId<span class="token punctuation">]</span>
│               │   │       │   └── page<span class="token punctuation">.</span>tsx
│               │   │       └── <span class="token keyword">default</span><span class="token punctuation">.</span>tsx
│               │   └── <span class="token punctuation">[</span>photoId<span class="token punctuation">]</span>
│               │       ├── <span class="token keyword">default</span><span class="token punctuation">.</span>tsx
│               │       └── page<span class="token punctuation">.</span>tsx
│               ├── <span class="token keyword">default</span><span class="token punctuation">.</span>tsx
│               ├── layout<span class="token punctuation">.</span>tsx
│               └── page<span class="token punctuation">.</span>tsx
└── libs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="동적-렌더링" tabindex="-1"><a class="header-anchor" href="#동적-렌더링" aria-hidden="true">#</a> 동적 렌더링</h1>
<p>또 다른 사용하는 패턴으로 옵셔널 캐치 올 라우트를 사용하는 것이 있습니다. 그리고 페이지를 조건부로 렌더링합니다. params가 제공되었는지 여부에 따라 페이지를 조건부로 렌더링할 수 있습니다. 이를 통해 페이지에서 여러 시나리오를 처리하고 직접 링크로 접근해도 항상 특정 페이지를 제어할 수 있는 방법을 제공합니다. 예를 들어 모달에서 이미지를 표시할 때 사용할 수 있습니다.</p>
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
<p>다음은 디렉토리 구조입니다:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nextjs-routing-patterns
├── apps
│ └── blog
│ └── src
│ └── app
│ └── dynamic-render
│ └── <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">..</span>.slug<span class="token punctuation">]</span><span class="token punctuation">]</span>
│ └── page.tsx
└── libs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 page.tsx 코드는 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Photo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../../components/photo"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Modal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../../components/modal"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Loader2 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"lucide-react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Photos <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../../components/photos"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ContentWrapper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@nrp/components/server"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">slug</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>photoId<span class="token punctuation">]</span> <span class="token operator">=</span> params<span class="token punctuation">.</span>slug <span class="token operator">??</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>photoId<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"Loading..."</span><span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Photos title<span class="token operator">=</span><span class="token string">"Dynamic Render"</span> page<span class="token operator">=</span><span class="token string">"dynamic-render"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ContentWrapper<span class="token operator">></span>
      <span class="token operator">&lt;</span>Photos title<span class="token operator">=</span><span class="token string">"Dynamic Render"</span> page<span class="token operator">=</span><span class="token string">"dynamic-render"</span> <span class="token operator">/</span><span class="token operator">></span>

      <span class="token punctuation">{</span>photoId <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>Modal<span class="token operator">></span>
          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"min-h-[100px] flex items-center justify-center"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Loader2 className<span class="token operator">=</span><span class="token string">"animate-spin"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>Photo imageId<span class="token operator">=</span><span class="token punctuation">{</span>photoId<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Modal<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ContentWrapper<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>우리는 Next.js 앱의 디렉토리 라우팅 패턴을 사용하여 내비게이션 시스템에 다양한 접근 방법을 구현할 수 있다는 것을 알게 되었습니다.</p>
<p>이 글이 도움이 되었다면 좋겠네요. 아래 댓글에 여러분의 생각, 제안, 사랑 😍을 남겨주세요.</p>
</div></template>
