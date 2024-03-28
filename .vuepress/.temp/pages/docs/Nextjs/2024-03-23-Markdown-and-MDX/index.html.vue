<template><div><h1 id="마크다운과-mdx" tabindex="-1"><a class="header-anchor" href="#마크다운과-mdx" aria-hidden="true">#</a> 마크다운과 MDX</h1>
<p>마크다운은 텍스트를 서식 지정하는 데 사용되는 가벼운 마크업 언어입니다. 일반 텍스트 구문을 사용하여 작성하고 구조적으로 유효한 HTML로 변환할 수 있습니다. 주로 웹사이트와 블로그에 콘텐츠를 작성하는 데 사용됩니다.</p>
<p>당신이 작성하는 내용은...</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">I</span> <span class="token operator">**</span>love<span class="token operator">**</span> using <span class="token punctuation">[</span>Next<span class="token punctuation">.</span>js<span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">nextjs.org</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>p<span class="token operator">></span>
  저는 <span class="token operator">&lt;</span>strong<span class="token operator">></span>Next<span class="token punctuation">.</span>js<span class="token operator">&lt;</span><span class="token operator">/</span>strong<span class="token operator">></span>를 사용하는 것을 좋아합니다<span class="token punctuation">.</span> <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"https://nextjs.org/"</span><span class="token operator">></span>Next<span class="token punctuation">.</span>js<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MDX는 JSX를 직접적으로 마크다운 파일에 작성할 수 있는 마크다운의 확장 기능입니다. 동적 상호작용을 추가하고 콘텐츠 내에 React 컴포넌트를 삽입하는 강력한 방법입니다.</p>
<p>Next.js는 응용 프로그램 내부의 로컬 MDX 콘텐츠뿐만 아니라 서버에서 동적으로 가져오는 원격 MDX 파일도 지원할 수 있습니다. Next.js 플러그인은 마크다운과 React 컴포넌트를 HTML로 변환하는 작업을 처리하며, App Router의 기본값인 서버 컴포넌트에서 사용되는 방법을 지원합니다.</p>
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
<h2 id="next-mdx" tabindex="-1"><a class="header-anchor" href="#next-mdx" aria-hidden="true">#</a> @next/mdx</h2>
<p>@next/mdx 패키지는 Next.js를 구성하여 마크다운 및 MDX를 처리할 수 있도록 합니다. 로컬 파일에서 데이터를 소스로 가져와서 /pages 또는 /app 디렉토리에서 .mdx 확장자로 직접 페이지를 생성할 수 있습니다.</p>
<p>Next.js에서 MDX를 구성하고 사용하는 방법을 살펴봅시다.</p>
<h2 id="시작하기" tabindex="-1"><a class="header-anchor" href="#시작하기" aria-hidden="true">#</a> 시작하기</h2>
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
<p>MDX를 렌더링하는 데 필요한 패키지를 설치하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install @next<span class="token operator">/</span>mdx @mdx<span class="token operator">-</span>js<span class="token operator">/</span>loader @mdx<span class="token operator">-</span>js<span class="token operator">/</span>react @types<span class="token operator">/</span>mdx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>프로젝트 루트에 있는 next.config.js 파일을 업데이트하여 MDX를 사용하도록 구성하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> withMDX <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@next/mdx"</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'next'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>NextConfig<span class="token punctuation">}</span></span> */</span>
<span class="token keyword">const</span> nextConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// `pageExtensions`를 구성하여 MDX 파일을 포함시킵니다</span>
  <span class="token literal-property property">pageExtensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"js"</span><span class="token punctuation">,</span> <span class="token string">"jsx"</span><span class="token punctuation">,</span> <span class="token string">"mdx"</span><span class="token punctuation">,</span> <span class="token string">"ts"</span><span class="token punctuation">,</span> <span class="token string">"tsx"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 원하는 경우, 다른 Next.js 구성을 추가하세요</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">withMDX</span><span class="token punctuation">(</span>nextConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>그럼, /pages 디렉토리 내에 새로운 MDX 페이지를 만들어보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  your<span class="token operator">-</span>project
  ├── pages
  │   └── my<span class="token operator">-</span>mdx<span class="token operator">-</span>page<span class="token punctuation">.</span>mdx
  └── <span class="token keyword">package</span><span class="token punctuation">.</span>json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 MDX 페이지 내에서 마크다운을 사용하고 React 컴포넌트를 직접 가져올 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'my-components'</span>

# 내 <span class="token constant">MDX</span> 페이지에 오신 것을 환영합니다<span class="token operator">!</span>

이것은 <span class="token operator">**</span>굵은<span class="token operator">**</span> 텍스트와 _이탤릭_ 텍스트입니다<span class="token punctuation">.</span>

이것은 마크다운의 목록입니다<span class="token operator">:</span>

<span class="token operator">-</span> 하나
<span class="token operator">-</span> 둘
<span class="token operator">-</span> 셋

내 React 컴포넌트를 확인해보세요<span class="token operator">:</span>

<span class="token operator">&lt;</span>MyComponent <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>/my-mdx-page 경로로 이동하면 렌더링된 MDX가 표시됩니다.</p>
<h2 id="원격-mdx" tabindex="-1"><a class="header-anchor" href="#원격-mdx" aria-hidden="true">#</a> 원격 MDX</h2>
<p>만약 여러분의 마크다운 또는 MDX 파일 또는 콘텐츠가 다른 곳에 저장되어 있다면, 서버에서 동적으로 가져올 수 있습니다. 이는 별도의 로컬 폴더, CMS, 데이터베이스 또는 다른 곳에 저장된 콘텐츠에 유용합니다. 이 용도로 널리 사용되는 커뮤니티 패키지 중 하나는 next-mdx-remote입니다.</p>
<blockquote>
<p>알아 두면 좋아요: 주의해서 진행해주세요. MDX는 JavaScript로 변환되어 서버에서 실행됩니다. 신뢰할 수 있는 소스에서만 MDX 콘텐츠를 가져와야 하며, 그렇지 않으면 원격 코드 실행(RCE)로 이어질 수 있습니다.</p>
</blockquote>
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
<p>다음 예제는 next-mdx-remote을 사용합니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> serialize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-mdx-remote/serialize"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> MDXRemote<span class="token punctuation">,</span> MDXRemoteSerializeResult <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-mdx-remote"</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
  mdxSource<span class="token operator">:</span> MDXRemoteSerializeResult<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RemoteMdxPage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> mdxSource <span class="token punctuation">}</span><span class="token operator">:</span> Props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>MDXRemote <span class="token punctuation">{</span><span class="token operator">...</span>mdxSource<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// MDX 텍스트 - 로컬 파일, 데이터베이스, CMS, fetch 등 어디서든 가져올 수 있습니다...</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https:..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> mdxText <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> mdxSource <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">serialize</span><span class="token punctuation">(</span>mdxText<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> props<span class="token operator">:</span> <span class="token punctuation">{</span> mdxSource <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/my-mdx-page-remote 경로로 이동하면 렌더링된 MDX가 표시됩니다.</p>
<h2 id="레이아웃" tabindex="-1"><a class="header-anchor" href="#레이아웃" aria-hidden="true">#</a> 레이아웃</h2>
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
<p>MDX 페이지 주변에 레이아웃을 공유하려면 레이아웃 구성 요소를 만드세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MdxLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 여기서 공유 레이아웃이나 스타일을 생성하세요</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">'blue'</span> <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음, 레이아웃 구성 요소를 MDX 페이지로 가져와서 MDX 콘텐츠를 레이아웃으로 감싸고 내보냈습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> MdxLayout <span class="token keyword">from</span> <span class="token string">'../components/mdx-layout'</span>

# 내 <span class="token constant">MDX</span> 페이지에 오신 것을 환영합니다<span class="token operator">!</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MDXPage</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>MdxLayout<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>MdxLayout<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="remark과-rehype-플러그인" tabindex="-1"><a class="header-anchor" href="#remark과-rehype-플러그인" aria-hidden="true">#</a> Remark과 Rehype 플러그인</h2>
<p>MDX 콘텐츠를 변환하기 위해 remark와 rehype 플러그인을 선택적으로 제공할 수 있습니다.</p>
<p>예를 들어, remark-gfm을 사용하여 GitHub Flavored Markdown을 지원할 수 있습니다.</p>
<p>remark와 rehype 생태계는 ESM(ES Modules)만 지원하므로 설정 파일로 next.config.mjs를 사용해야 합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> remarkGfm <span class="token keyword">from</span> <span class="token string">"remark-gfm"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> createMDX <span class="token keyword">from</span> <span class="token string">"@next/mdx"</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'next'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>NextConfig<span class="token punctuation">}</span></span> */</span>
<span class="token keyword">const</span> nextConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// Configure `pageExtensions` to include MDX files</span>
  <span class="token literal-property property">pageExtensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"js"</span><span class="token punctuation">,</span> <span class="token string">"jsx"</span><span class="token punctuation">,</span> <span class="token string">"mdx"</span><span class="token punctuation">,</span> <span class="token string">"ts"</span><span class="token punctuation">,</span> <span class="token string">"tsx"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// Optionally, add any other Next.js config below</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> withMDX <span class="token operator">=</span> <span class="token function">createMDX</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// Add markdown plugins here, as desired</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">remarkPlugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>remarkGfm<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rehypePlugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Merge MDX config with Next.js config</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">withMDX</span><span class="token punctuation">(</span>nextConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h2>
<p>Frontmatter는 페이지에 대한 데이터를 저장하는 데 사용할 수 있는 YAML과 유사한 키/값 쌍입니다. @next/mdx는 기본적으로 frontmatter를 지원하지 않지만 frontmatter를 MDX 콘텐츠에 추가하는 많은 솔루션이 있습니다. 예를 들어:</p>
<ul>
<li>remark-frontmatter</li>
<li>remark-mdx-frontmatter</li>
<li>gray-matter</li>
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
<p>@next/mdx를 사용하여 페이지 메타데이터에 액세스하려면 .mdx 파일 내에서 메타데이터 객체를 내보낼 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token string">'John Doe'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

# 내 <span class="token constant">MDX</span> 페이지
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="사용자-지정-요소" tabindex="-1"><a class="header-anchor" href="#사용자-지정-요소" aria-hidden="true">#</a> 사용자 지정 요소</h2>
<p>마크다운을 사용하는 즐거운 측면 중 하나는 네이티브 HTML 요소로 매핑된다는 것입니다. 이는 빠른 작성과 직관적인 작성을 가능하게 합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>마크다운 목록 예시입니다<span class="token operator">:</span>

<span class="token operator">-</span> 하나
<span class="token operator">-</span> 둘
<span class="token operator">-</span> 셋
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 내용은 다음과 같은 HTML을 생성합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>p<span class="token operator">></span>마크다운 목록 예시입니다<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>

<span class="token operator">&lt;</span>ul<span class="token operator">></span>
  <span class="token operator">&lt;</span>li<span class="token operator">></span>하나<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
  <span class="token operator">&lt;</span>li<span class="token operator">></span>둘<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
  <span class="token operator">&lt;</span>li<span class="token operator">></span>셋<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>사용자 정의 웹사이트나 애플리케이션을 위해 원하는 요소를 스타일링하려면 쇼트코드를 사용할 수 있습니다. 쇼트코드는 HTML 요소로 매핑되는 사용자 정의 구성 요소입니다.</p>
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
<p>이를 위해 애플리케이션의 루트(페이지/ 또는 src/ 폴더의 상위 폴더)에 mdx-components.tsx 파일을 만들고 사용자 지정 요소를 추가하십시오:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> MDXComponents <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"mdx/types"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Image<span class="token punctuation">,</span> <span class="token punctuation">{</span> ImageProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/image"</span><span class="token punctuation">;</span>

<span class="token comment">// 이 파일은 MDX 파일에서 사용할 수 있는 사용자 지정 React 구성 요소를 제공합니다. 원하는 모든 React 구성 요소를 가져오고 사용할 수 있으며, 인라인 스타일, 다른 라이브러리의 구성 요소 등도 사용할 수 있습니다.</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useMDXComponents</span><span class="token punctuation">(</span>components<span class="token operator">:</span> MDXComponents<span class="token punctuation">)</span><span class="token operator">:</span> MDXComponents <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token comment">// 내장된 구성 요소를 사용자 정의하는 것을 허용합니다. 예: 스타일을 추가할 수 있습니다.</span>
    <span class="token function-variable function">h1</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>h1 style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontSize<span class="token operator">:</span> <span class="token string">"100px"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">,</span>
    <span class="token function-variable function">img</span><span class="token operator">:</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>Image sizes<span class="token operator">=</span><span class="token string">"100vw"</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">"100%"</span><span class="token punctuation">,</span> height<span class="token operator">:</span> <span class="token string">"auto"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">(</span>props <span class="token keyword">as</span> ImageProps<span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
    <span class="token operator">...</span>components<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="심화-마크다운을-html로-어떻게-변환하나요" tabindex="-1"><a class="header-anchor" href="#심화-마크다운을-html로-어떻게-변환하나요" aria-hidden="true">#</a> 심화: 마크다운을 HTML로 어떻게 변환하나요?</h2>
<p>React는 마크다운을 원천적으로 이해하지 않습니다. 먼저 마크다운 일반 텍스트를 HTML로 변환해야 합니다. 이 작업은 remark와 rehype를 사용하여 수행할 수 있습니다.</p>
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
<p>remark은 마크다운 주변의 도구 생태계입니다. rehype는 HTML을 위한 동일한 것입니다. 예를 들어, 아래 코드 스니펫은 마크다운을 HTML로 변환합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> unified <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"unified"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> remarkParse <span class="token keyword">from</span> <span class="token string">"remark-parse"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> remarkRehype <span class="token keyword">from</span> <span class="token string">"remark-rehype"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> rehypeSanitize <span class="token keyword">from</span> <span class="token string">"rehype-sanitize"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> rehypeStringify <span class="token keyword">from</span> <span class="token string">"rehype-stringify"</span><span class="token punctuation">;</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> file <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">unified</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>remarkParse<span class="token punctuation">)</span> <span class="token comment">// 마크다운 AST로 변환</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>remarkRehype<span class="token punctuation">)</span> <span class="token comment">// HTML AST로 변환</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>rehypeSanitize<span class="token punctuation">)</span> <span class="token comment">// HTML 입력을 살균</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>rehypeStringify<span class="token punctuation">)</span> <span class="token comment">// AST를 직렬화된 HTML로 변환</span>
    <span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span><span class="token string">"Hello, Next.js!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;p>Hello, Next.js!&lt;/p></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>remark와 rehype 생태계에는 구문 강조 플러그인, 제목 링킹, 목차 생성 및 기타 기능이 포함되어 있습니다.</p>
<p>위에서 표시된대로 @next/mdx를 사용할 때는 직접 remark나 rehype를 사용할 필요가 없습니다. 그것들이 대신 처리되기 때문입니다. 여기서는 @next/mdx 패키지가 무슨 일을 하는지 더 깊게 이해하기 위해 설명하고 있습니다.</p>
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
<h2 id="rust-기반-mdx-컴파일러-사용-실험-중" tabindex="-1"><a class="header-anchor" href="#rust-기반-mdx-컴파일러-사용-실험-중" aria-hidden="true">#</a> Rust 기반 MDX 컴파일러 사용 (실험 중)</h2>
<p>Next.js는 Rust로 작성된 새로운 MDX 컴파일러를 지원합니다. 이 컴파일러는 여전히 실험적이며 프로덕션 환경에서는 권장되지 않습니다. 새 컴파일러를 사용하려면 next.config.js를 설정해야 합니다. 이 설정은 withMDX 함수에 전달될 때 필요합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">withMDX</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mdxRs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="도움이-되는-링크" tabindex="-1"><a class="header-anchor" href="#도움이-되는-링크" aria-hidden="true">#</a> 도움이 되는 링크</h2>
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
<li>MDX</li>
<li>@next/mdx</li>
<li>remark</li>
<li>rehype</li>
<li>Markdoc</li>
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
</div></template>
