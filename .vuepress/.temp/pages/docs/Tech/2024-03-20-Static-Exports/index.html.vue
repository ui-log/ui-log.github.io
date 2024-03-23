<template><div><h1 id="nextjs-14-정적-사이트-export-하는-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14-정적-사이트-export-하는-방법" aria-hidden="true">#</a> Nextjs 14 정적 사이트 export 하는 방법</h1>
<p>Next.js를 사용하면 정적 사이트 또는 Single-Page Application (SPA)으로 시작한 다음 나중에 서버가 필요한 기능을 사용하기로 선택적 업그레이드할 수 있습니다.
<code v-pre>next build</code>를 실행하면 Next.js가 각 루트마다 HTML 파일을 생성합니다. 엄격한 SPA를 개별 HTML 파일로 분할함으로써 Next.js는 클라이언트 측에서 불필요한 JavaScript 코드를 로드하지 않아도 되어 번들 크기를 줄이고 페이지 로드 속도를 높일 수 있습니다.
Next.js는 이 정적 익스포트를 지원하기 때문에 HTML/CSS/JS 정적 에셋을 제공할 수 있는 웹 서버에 배포하고 호스팅할 수 있습니다.</p>
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
<h2 id="구성" tabindex="-1"><a class="header-anchor" href="#구성" aria-hidden="true">#</a> 구성</h2>
<p>정적 익스포트를 활성화하려면 next.config.js 내의 출력 모드를 변경하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'next'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>NextConfig<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> nextConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 선택 사항: 링크 `/me` -> `/me/`로 변경하고 `/me.html` -> `/me/index.html`로 출력</span>
  <span class="token comment">// trailingSlash: true,</span>
  <span class="token comment">// 선택 사항: 자동으로 `/me` -> `/me/`을 방지하고 대신 `href`를 유지합니다</span>
  <span class="token comment">// skipTrailingSlashRedirect: true,</span>
  <span class="token comment">// 선택 사항: 출력 디렉토리를 `dist`로 변경합니다</span>
  <span class="token comment">// distDir: 'dist',</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> nextConfig<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Next.js를 실행한 후, 어플리케이션을 위한 HTML/CSS/JS 자산을 포함하는 out 폴더가 생산됩니다.</p>
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
<h2 id="지원되는-기능" tabindex="-1"><a class="header-anchor" href="#지원되는-기능" aria-hidden="true">#</a> 지원되는 기능</h2>
<p>Next.js의 핵심은 정적 익스포트를 지원하도록 설계되었습니다.</p>
<h3 id="서버-구성-요소" tabindex="-1"><a class="header-anchor" href="#서버-구성-요소" aria-hidden="true">#</a> 서버 구성 요소</h3>
<p>next build를 실행하여 정적 익스포트를 생성할 때 앱 디렉토리 내에서 사용되는 서버 구성 요소(Server Components)는 빌드 중에 실행되며, 기존 정적 사이트 생성과 유사합니다.</p>
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
<p>결과 컴포넌트는 초기 페이지로드를 위해 정적 HTML로 렌더링되며 클라이언트가 라우트간에 이동할 때 정적 페이로드로 제공됩니다. 정적 익스포트를 사용할 때 서버 컴포넌트에 대한 변경 사항은 필요하지 않습니다. 단, 동적 서버 함수를 사용하는 경우에는 예외입니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 이 fetch는 `next build` 중에 서버에서 실행됩니다</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://api.example.com/..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>main<span class="token operator">></span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="클라이언트-컴포넌트" tabindex="-1"><a class="header-anchor" href="#클라이언트-컴포넌트" aria-hidden="true">#</a> 클라이언트 컴포넌트</h3>
<p>클라이언트에서 데이터를 가져오려면 SWR로 요청을 메모이즈하는 클라이언트 컴포넌트를 사용할 수 있습니다.</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"클라이언트 사용"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> useSWR <span class="token keyword">from</span> <span class="token string">"swr"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">fetcher</span> <span class="token operator">=</span> <span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token operator">=></span> r<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSWR</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://jsonplaceholder.typicode.com/posts/1</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> fetcher<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">"로드하는 데 실패했습니다"</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">"로딩 중..."</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> data<span class="token punctuation">.</span>title<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>경로 전환은 클라이언트 측에서 발생하기 때문에 이것은 전통적인 SPA처럼 동작합니다. 예를 들어, 다음 인덱스 경로를 통해 클라이언트에서 다른 게시물로 이동할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>인덱스 페이지<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>hr <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>ul<span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span>
          <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/post/1"</span><span class="token operator">></span>게시물 <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span>
          <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/post/2"</span><span class="token operator">></span>게시물 <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="이미지-최적화" tabindex="-1"><a class="header-anchor" href="#이미지-최적화" aria-hidden="true">#</a> 이미지 최적화</h3>
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
<p>next/image를 통해 이미지 최적화를 할 때는 next.config.js에서 사용자 정의 이미지 로더를 정의하여 정적 익스포트와 함께 사용할 수 있습니다. 예를 들어, Cloudinary와 같은 서비스로 이미지를 최적화할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'next'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>NextConfig<span class="token punctuation">}</span></span> */</span>
<span class="token keyword">const</span> nextConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token string">"export"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">images</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"custom"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">loaderFile</span><span class="token operator">:</span> <span class="token string">"./my-loader.ts"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> nextConfig<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 사용자 정의 로더는 원격 소스에서 이미지를 가져오는 방법을 정의할 것입니다. 아래 예시는 Cloudinary를 위한 URL을 구성하는 로더를 보여줍니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">cloudinaryLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span> src<span class="token punctuation">,</span> width<span class="token punctuation">,</span> quality <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> src<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> width<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> quality<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"f_auto"</span><span class="token punctuation">,</span> <span class="token string">"c_limit"</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">w_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>width<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">q_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>quality <span class="token operator">||</span> <span class="token string">"auto"</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://res.cloudinary.com/demo/image/upload/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">","</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>src<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이제 클라우드니어리 이미지의 상대 경로를 정의하여 애플리케이션에서 next/image를 사용할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> Image <span class="token keyword">from</span> <span class="token string">"next/image"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Image alt<span class="token operator">=</span><span class="token string">"turtles"</span> src<span class="token operator">=</span><span class="token string">"/turtles.jpg"</span> width<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">300</span><span class="token punctuation">}</span> height<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">300</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="라우트-핸들러" tabindex="-1"><a class="header-anchor" href="#라우트-핸들러" aria-hidden="true">#</a> 라우트 핸들러</h3>
<p>라우트 핸들러는 next build를 실행할 때 정적 응답을 렌더링합니다. GET HTTP 동사만 지원됩니다. 이를 사용하여 캐시된 또는 캐시되지 않은 데이터로부터 정적 HTML, JSON, TXT 또는 기타 파일을 생성할 수 있습니다. 예를 들어:</p>
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
<p>위의 파일인 app/data.json/route.ts은 다음 빌드 중에 정적 파일로 렌더링되어 data.json 파일을 생성합니다. 그 안에는 { name: 'Lee' }가 포함됩니다. 만약 들어오는 요청에서 동적 값들을 읽어야 한다면, 정적 익스포트를 사용할 수 없습니다.</p>
<h3 id="브라우저-api들" tabindex="-1"><a class="header-anchor" href="#브라우저-api들" aria-hidden="true">#</a> 브라우저 API들</h3>
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
<p>클라이언트 컴포넌트는 다음 빌드 중에 HTML로 사전 렌더링됩니다. 서버에서는 window, localStorage, navigator와 같은 웹 API가 사용할 수 없기 때문에 러닝 중에는 브라우저에서만 안전하게 이러한 API에 접근해야 합니다. 예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'use client'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ClientComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 이제 `window`에 접근할 수 있습니다.</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token operator">...</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="지원되지-않는-기능" tabindex="-1"><a class="header-anchor" href="#지원되지-않는-기능" aria-hidden="true">#</a> 지원되지 않는 기능</h2>
<p>Node.js 서버를 필요로 하는 기능이거나 빌드 프로세스 중에 계산할 수 없는 다이나믹한 로직은 지원되지 않습니다:</p>
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
<li>동적 매개변수를 사용하는 동적 경로 설정: true</li>
<li>generateStaticParams() 없이 동적 경로 설정</li>
<li>Request를 의존하는 Route Handlers</li>
<li>Cookies</li>
<li>다시 쓰기</li>
<li>리다이렉트</li>
<li>헤더</li>
<li>미들웨어</li>
<li>점진적 정적 재생성</li>
<li>기본 로더를 이용한 이미지 최적화</li>
<li>드래프트 모드
위 기능 중 어떤 것이라도 next dev를 사용하려고 하면, 루트 레이아웃에서 dynamic 옵션을 error로 설정한 것과 유사한 오류가 발생합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> dynamic <span class="token operator">=</span> <span class="token string">"error"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="배포" tabindex="-1"><a class="header-anchor" href="#배포" aria-hidden="true">#</a> 배포</h2>
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
<p>Next.js의 정적 익스포트를 통해, HTML/CSS/JS 정적 에셋을 제공할 수 있는 모든 웹 서버에 Next.js를 배포하고 호스팅할 수 있습니다.
<code v-pre>next build</code>를 실행하면, Next.js는 정적 익스포트를 <code v-pre>out</code> 폴더에 생성합니다. 예를 들어, 다음과 같은 루트가 있다고 가정해보겠습니다:</p>
<ul>
<li>/</li>
<li>/blog/[id]
<code v-pre>next build</code>를 실행하면, Next.js는 다음과 같은 파일을 생성합니다:</li>
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
<ul>
<li>/out/index.html</li>
<li>/out/404.html</li>
<li>/out/blog/post-1.html</li>
<li>/out/blog/post-2.html 이렇게 정적 호스트(Nginx 같은)를 사용하고 계신다면, 들어오는 요청을 올바른 파일로 재지정할 수 있어요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>server <span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
  server_name acme<span class="token punctuation">.</span>com<span class="token punctuation">;</span>

  root <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>www<span class="token operator">/</span>out<span class="token punctuation">;</span>

  location <span class="token operator">/</span> <span class="token punctuation">{</span>
      try_files $uri $uri<span class="token punctuation">.</span>html $uri<span class="token operator">/</span> <span class="token operator">=</span><span class="token number">404</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  # 이 부분은 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">trailingSlash: false</span><span class="token template-punctuation string">`</span></span>로 설정한 경우 필요해요<span class="token punctuation">.</span>
  # <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">trailingSlash: true</span><span class="token template-punctuation string">`</span></span>인 경우 생략할 수 있어요<span class="token punctuation">.</span>
  location <span class="token operator">/</span>blog<span class="token operator">/</span> <span class="token punctuation">{</span>
      rewrite <span class="token operator">^</span><span class="token operator">/</span>blog<span class="token operator">/</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span>$ <span class="token operator">/</span>blog<span class="token operator">/</span>$1<span class="token punctuation">.</span>html <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  error_page <span class="token number">404</span> <span class="token operator">/</span><span class="token number">404</span><span class="token punctuation">.</span>html<span class="token punctuation">;</span>
  location <span class="token operator">=</span> <span class="token operator">/</span><span class="token number">404</span><span class="token punctuation">.</span>html <span class="token punctuation">{</span>
      internal<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="버전-히스토리" tabindex="-1"><a class="header-anchor" href="#버전-히스토리" aria-hidden="true">#</a> 버전 히스토리</h2>
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
<table>
<thead>
<tr>
<th>Version</th>
<th>Changes</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v14.0.0</code></td>
<td><code v-pre>next export</code>가 <code>&quot;output&quot;: &quot;export&quot;</code>으로 대체되어 제거되었습니다.</td>
</tr>
<tr>
<td><code v-pre>v13.4.0</code></td>
<td>App Router (Stable)이 향상된 정적 내보내기 지원을 추가했습니다. React Server Components 및 Route Handlers 사용 가능.</td>
</tr>
<tr>
<td><code v-pre>v13.3.0</code></td>
<td><code v-pre>next export</code>가 폐기되고 <code>&quot;output&quot;: &quot;export&quot;</code>으로 대체되었습니다.</td>
</tr>
</tbody>
</table>
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
