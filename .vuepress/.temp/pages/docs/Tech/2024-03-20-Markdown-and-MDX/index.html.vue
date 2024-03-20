<template><div><h1 id="nextjs-14-마크다운과-mdx-사용-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14-마크다운과-mdx-사용-방법" aria-hidden="true">#</a> Nextjs 14 마크다운과 MDX 사용 방법</h1>
<p>마크다운은 텍스트를 서식 지정하는 데 사용되는 가벼운 마크업 언어입니다. 일반 텍스트 구문을 사용하여 작성하고 구조적으로 유효한 HTML로 변환할 수 있습니다. 웹사이트와 블로그에서 콘텐츠를 작성하는 데 일반적으로 사용됩니다.
당신이 작성한 내용은...</p>
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
  나는 <span class="token operator">&lt;</span>strong<span class="token operator">></span>Next<span class="token punctuation">.</span>js<span class="token operator">&lt;</span><span class="token operator">/</span>strong<span class="token operator">></span>를 사용하는 것을 좋아해요 <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"https://nextjs.org/"</span><span class="token operator">></span>Next<span class="token punctuation">.</span>js<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MDX는 마크다운의 상위 집합으로, 마크다운 파일에서 직접 JSX를 작성할 수 있게 합니다. 이는 동적 상호 작용성을 추가하고 React 컴포넌트를 콘텐츠 안에 임베드하는 강력한 방법입니다. Next.js는 애플리케이션 내부의 로컬 MDX 콘텐츠뿐만 아니라 서버에서 동적으로 가져오는 원격 MDX 파일도 지원할 수 있습니다. Next.js 플러그인은 마크다운과 React 컴포넌트를 HTML로 변환하며, 앱 라우터의 기본인 서버 컴포넌트에서 사용할 수 있도록 지원합니다.</p>
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
<p>@next/mdx 패키지는 Next.js를 구성하여 markdown 및 MDX 파일을 처리할 수 있도록 합니다. 이 패키지는 로컬 파일에서 데이터를 가져와서 /pages 또는 /app 디렉토리에서 .mdx 확장자를 가진 페이지를 직접 만들 수 있습니다. MDX를 Next.js와 함께 구성하고 사용하는 방법을 살펴보겠습니다.</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>애플리케이션의 루트에 mdx-components.tsx 파일을 생성하세요 (src/ 또는 app/의 상위 폴더):</p>
<blockquote>
<p>참고: App Router와 함께 MDX를 사용하려면 mdx-components.tsx 파일이 필요하며, 이 파일이 없으면 작동하지 않습니다.</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> MDXComponents <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"mdx/types"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useMDXComponents</span><span class="token punctuation">(</span>components<span class="token operator">:</span> MDXComponents<span class="token punctuation">)</span><span class="token operator">:</span> MDXComponents <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>components<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>프로젝트 루트의 next.config.js 파일을 업데이트하여 MDX를 사용하도록 구성하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> withMDX <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@next/mdx"</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'next'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>NextConfig<span class="token punctuation">}</span></span> */</span>
<span class="token keyword">const</span> nextConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// MDX 파일을 포함하도록 `pageExtensions`를 구성합니다</span>
  <span class="token literal-property property">pageExtensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"js"</span><span class="token punctuation">,</span> <span class="token string">"jsx"</span><span class="token punctuation">,</span> <span class="token string">"mdx"</span><span class="token punctuation">,</span> <span class="token string">"ts"</span><span class="token punctuation">,</span> <span class="token string">"tsx"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 원하는 경우, 다른 Next.js 구성을 추가할 수 있습니다</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">withMDX</span><span class="token punctuation">(</span>nextConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음, /app 디렉토리에 새로운 MDX 페이지를 만드십시오:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  your<span class="token operator">-</span>project
  ├── app
  │   └── my<span class="token operator">-</span>mdx<span class="token operator">-</span>page
  │       └── page<span class="token punctuation">.</span>mdx
  └── <span class="token keyword">package</span><span class="token punctuation">.</span>json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제는 Markdown을 사용하고 MDX 페이지 내에서 직접 React 컴포넌트를 가져올 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'my-components'</span>

# 내 <span class="token constant">MDX</span> 페이지에 오신 것을 환영합니다<span class="token operator">!</span>

이것은 <span class="token operator">**</span>굵은<span class="token operator">**</span> 및 _이탤릭_ 텍스트입니다<span class="token punctuation">.</span>

이것은 Markdown의 목록입니다<span class="token operator">:</span>

<span class="token operator">-</span> 하나
<span class="token operator">-</span> 둘
<span class="token operator">-</span> 셋

내 React 컴포넌트를 확인하세요<span class="token operator">:</span>

<span class="token operator">&lt;</span>MyComponent <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/my-mdx-page 경로로 이동하면 렌더링된 MDX가 표시됩니다.</p>
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
<h2 id="원격-mdx" tabindex="-1"><a class="header-anchor" href="#원격-mdx" aria-hidden="true">#</a> 원격 MDX</h2>
<p>만약 여러분의 마크다운 또는 MDX 파일 또는 내용이 다른 곳에 있다면, 서버에서 동적으로 가져올 수 있습니다. 이것은 별도의 로컬 폴더, CMS, 데이터베이스 또는 다른 곳에 저장된 콘텐츠에 유용합니다. 이 용도로 인기 있는 커뮤니티 패키지는 next-mdx-remote 입니다.</p>
<blockquote>
<p>알아 두면 좋은 점: 조심스럽게 진행하십시오. MDX는 JavaScript로 컴파일되며 서버에서 실행됩니다. 신뢰할 수 있는 출처에서만 MDX 콘텐츠를 가져와야 하며, 그렇지 않으면 원격 코드 실행(RCE)로 이어질 수 있습니다.
아래 예시는 next-mdx-remote를 사용한 예제입니다.</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> MDXRemote <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-mdx-remote/rsc"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">RemoteMdxPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// MDX 텍스트 - 로컬 파일, 데이터베이스, CMS, fetch 등 어디에서든 올 수 있습니다...</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> markdown <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>MDXRemote source<span class="token operator">=</span><span class="token punctuation">{</span>markdown<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/my-mdx-page-remote 경로로 이동하면 렌더링된 MDX가 표시됩니다.</p>
<h2 id="레이아웃" tabindex="-1"><a class="header-anchor" href="#레이아웃" aria-hidden="true">#</a> 레이아웃</h2>
<p>MDX 페이지 간에 레이아웃을 공유하려면 앱 라우터의 내장 레이아웃 지원을 사용할 수 있습니다.</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MdxLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 여기서 공유 레이아웃이나 스타일을 만들어보세요</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">'blue'</span> <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="remark-및-rehype-플러그인" tabindex="-1"><a class="header-anchor" href="#remark-및-rehype-플러그인" aria-hidden="true">#</a> Remark 및 Rehype 플러그인</h2>
<p>MDX 콘텐츠를 변환하기 위해 선택적으로 remark 및 rehype 플러그인을 제공할 수 있습니다.
예를 들어, GitHub Flavored Markdown을 지원하기 위해 remark-gfm을 사용할 수 있습니다.</p>
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
<p>remark과 rehype 에코시스템은 ESM(ES Modules)만 지원하기 때문에 구성 파일로 next.config.mjs를 사용해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> remarkGfm <span class="token keyword">from</span> <span class="token string">"remark-gfm"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> createMDX <span class="token keyword">from</span> <span class="token string">"@next/mdx"</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'next'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>NextConfig<span class="token punctuation">}</span></span> */</span>
<span class="token keyword">const</span> nextConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// MDX 파일을 포함하도록 `pageExtensions`을 구성</span>
  <span class="token literal-property property">pageExtensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"js"</span><span class="token punctuation">,</span> <span class="token string">"jsx"</span><span class="token punctuation">,</span> <span class="token string">"mdx"</span><span class="token punctuation">,</span> <span class="token string">"ts"</span><span class="token punctuation">,</span> <span class="token string">"tsx"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 원하는 경우, 다른 Next.js 구성 추가 가능</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> withMDX <span class="token operator">=</span> <span class="token function">createMDX</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 원하는 대로 여기에 마크다운 플러그인 추가</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">remarkPlugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>remarkGfm<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rehypePlugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// MDX 구성을 Next.js 구성과 병합</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">withMDX</span><span class="token punctuation">(</span>nextConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="프런트매터-frontmatter" tabindex="-1"><a class="header-anchor" href="#프런트매터-frontmatter" aria-hidden="true">#</a> 프런트매터(Frontmatter)</h2>
<p>프런트매터는 페이지에 대한 데이터를 저장하는 데 사용할 수 있는 YAML 형식의 키/값 쌍입니다. @next/mdx는 기본적으로 프런트매터를 지원하지 않지만, 프런트매터를 MDX 콘텐츠에 추가하는 여러 해결책이 있습니다.</p>
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
<li>remark-frontmatter</li>
<li>remark-mdx-frontmatter</li>
<li>gray-matter
.
@next/mdx를 사용해 페이지 metadata에 접근하려면 .mdx 파일 내부에서 메타데이터 객체를 내보내야 합니다:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token string">'John Doe'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

# 내 <span class="token constant">MDX</span> 페이지
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="사용자-정의-요소" tabindex="-1"><a class="header-anchor" href="#사용자-정의-요소" aria-hidden="true">#</a> 사용자 정의 요소</h2>
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
<p>마크다운을 사용하는 즐거운 점 중 하나는 네이티브 HTML 요소에 매핑된다는 것이며, 따라서 글을 빠르고 직관적으로 작성할 수 있다는 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>마크다운에서 목록 작성 예시<span class="token operator">:</span>

<span class="token operator">-</span> 하나
<span class="token operator">-</span> 둘
<span class="token operator">-</span> 셋
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 코드는 다음과 같은 HTML을 생성합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>p<span class="token operator">></span>마크다운에서 목록 작성 예시<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>

<span class="token operator">&lt;</span>ul<span class="token operator">></span>
  <span class="token operator">&lt;</span>li<span class="token operator">></span>하나<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
  <span class="token operator">&lt;</span>li<span class="token operator">></span>둘<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
  <span class="token operator">&lt;</span>li<span class="token operator">></span>셋<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
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
<p>사용자 정의 웹 사이트나 애플리케이션을 위해 요소를 스타일링하고 싶을 때는 쇼트코드를 전달할 수 있어요. 이것들은 HTML 요소로 매핑되는 사용자 정의 구성 요소입니다.<br>
이를 위해 애플리케이션 루트의 mdx-components.tsx 파일을 열고 사용자 정의 요소를 추가하세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> MDXComponents <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'mdx/types'</span>
<span class="token keyword">import</span> Image<span class="token punctuation">,</span> <span class="token punctuation">{</span> ImageProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/image'</span>

<span class="token comment">// 이 파일을 통해 사용자 정의 React 컴포넌트를 제공할 수 있습니다.</span>
<span class="token comment">// MDX 파일에서 사용할 수 있도록 합니다. 원하는 모든</span>
<span class="token comment">// React 컴포넌트를 가져와 사용할 수 있습니다. 옆에 스타일,</span>
<span class="token comment">// 다른 라이브러리의 컴포넌트 및 기타 컴포넌트도 사용 가능해요.</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useMDXComponents</span><span class="token punctuation">(</span>components<span class="token operator">:</span> MDXComponents<span class="token punctuation">)</span><span class="token operator">:</span> MDXComponents <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token comment">// 내장된 컴포넌트를 사용자 정의하는 데 도움을 주는 기능, 예를 들어 스타일을 추가할 수 있습니다.</span>
    <span class="token function-variable function">h1</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>h1 style<span class="token operator">=</span><span class="token punctuation">{</span> fontSize<span class="token operator">:</span> <span class="token string">'100px'</span> <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">,</span>
    <span class="token function-variable function">img</span><span class="token operator">:</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>Image
        sizes<span class="token operator">=</span><span class="token string">"100vw"</span>
        style<span class="token operator">=</span><span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span> height<span class="token operator">:</span> <span class="token string">'auto'</span> <span class="token punctuation">}</span>
        <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">(</span>props <span class="token keyword">as</span> ImageProps<span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>components<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="심층-분석-마크다운을-html로-어떻게-변환할까요" tabindex="-1"><a class="header-anchor" href="#심층-분석-마크다운을-html로-어떻게-변환할까요" aria-hidden="true">#</a> 심층 분석: 마크다운을 HTML로 어떻게 변환할까요?</h2>
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
<p>리액트는 마크다운을 기본적으로 이해하지 못합니다. 먼저 마크다운 텍스트를 HTML로 변환해야 합니다. 이 작업은 remark와 rehype로 수행할 수 있습니다.
remark는 마크다운 주변의 도구들이 모인 에코시스템입니다. rehype는 HTML에 대해 동일한 역할을 수행합니다. 예를 들어, 다음 코드 조각은 마크다운을 HTML로 변환합니다:</p>
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
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>rehypeSanitize<span class="token punctuation">)</span> <span class="token comment">// HTML 입력값 사전 처리</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>rehypeStringify<span class="token punctuation">)</span> <span class="token comment">// AST를 직렬화된 HTML로 변환</span>
    <span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span><span class="token string">"안녕, Next.js!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;p>안녕, Next.js!&lt;/p></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>remark와 rehype 에코시스템에는 문법 강조, 제목 링킹, 목차 생성 등을 위한 플러그인이 포함되어 있습니다.</p>
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
<p>위의 예시와 같이 @next/mdx를 사용할 때는 직접적으로 remark 또는 rehype을 사용할 필요가 없습니다. 이것들이 대신 처리되기 때문에 &quot;@next/mdx&quot; 패키지가 무슨 일을 하는지 더 깊이 이해하고자 이를 설명하고 있습니다.</p>
<h2 id="러스트-기반-mdx-컴파일러-사용-실험-기능" tabindex="-1"><a class="header-anchor" href="#러스트-기반-mdx-컴파일러-사용-실험-기능" aria-hidden="true">#</a> 러스트 기반 MDX 컴파일러 사용 (실험 기능)</h2>
<p>Next.js는 러스트로 작성된 새로운 MDX 컴파일러를 지원합니다. 이 컴파일러는 아직 실험 단계이며 프로덕션 환경에서 사용하는 것은 권장되지 않습니다. 새로운 컴파일러를 사용하려면 next.config.js를 구성해야 합니다. 그리고 이를 withMDX에 전달할 때 다음과 같이 설정하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">withMDX</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mdxRs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="도움이-되는-링크" tabindex="-1"><a class="header-anchor" href="#도움이-되는-링크" aria-hidden="true">#</a> 도움이 되는 링크</h2>
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
