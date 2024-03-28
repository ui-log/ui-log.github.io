<template><div><h1 id="미들웨어" tabindex="-1"><a class="header-anchor" href="#미들웨어" aria-hidden="true">#</a> 미들웨어</h1>
<p>미들웨어를 사용하면 요청이 완료되기 전에 코드를 실행할 수 있습니다. 그런 다음 들어오는 요청에 따라 응답을 수정하여 다시 쓰기, 리디렉팅, 요청 또는 응답 헤더 수정 또는 직접 응답하는 등의 작업을 수행할 수 있습니다.</p>
<p>미들웨어는 캐시된 콘텐츠 및 라우트가 일치하기 전에 실행됩니다. 자세한 내용은 일치하는 경로를 참조하세요.</p>
<h2 id="규칙" tabindex="-1"><a class="header-anchor" href="#규칙" aria-hidden="true">#</a> 규칙</h2>
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
<p>프로젝트 루트의 파일 미들웨어.ts(또는 .js)를 사용하여 미들웨어를 정의하세요. 예를 들어, 페이지 또는 앱과 동일한 수준에 있거나 해당하는 경우 src 내부에 있어야 합니다.</p>
<h2 id="예시" tabindex="-1"><a class="header-anchor" href="#예시" aria-hidden="true">#</a> 예시</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>

<span class="token comment">// `await`을 사용한다면 이 함수는 `async`로 표시할 수 있습니다</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">"/home"</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 더 알아보려면 아래의 "경로 일치"를 확인하세요</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  matcher<span class="token operator">:</span> <span class="token string">"/about/:path*"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="경로-일치" tabindex="-1"><a class="header-anchor" href="#경로-일치" aria-hidden="true">#</a> 경로 일치</h2>
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
<p>프로젝트의 모든 경로에 대해 미들웨어가 호출됩니다. 아래는 실행 순서입니다:</p>
<ul>
<li>next.config.js에서의 헤더</li>
<li>next.config.js에서의 리다이렉트</li>
<li>미들웨어 (리라이트, 리다이렉트 등)</li>
<li>next.config.js에서의 beforeFiles (리라이트)</li>
<li>파일 시스템 경로(public/, _next/static/, pages/, app/ 등)</li>
<li>next.config.js에서의 afterFiles (리라이트)</li>
<li>동적 라우트 (/blog/[slug])</li>
<li>next.config.js에서의 팔백 (리라이트)</li>
</ul>
<p>모든 미들웨어가 실행될 경로를 정의하는 두 가지 방법이 있습니다:</p>
<ul>
<li>사용자 정의 일치기준 구성</li>
<li>조건문</li>
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
<h3 id="matcher" tabindex="-1"><a class="header-anchor" href="#matcher" aria-hidden="true">#</a> Matcher</h3>
<p>matcher를 사용하면 특정 경로에서 실행할 미들웨어를 필터링할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">matcher</span><span class="token operator">:</span> <span class="token string">"/about/:path*"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>단일 경로 또는 배열 구문을 사용하여 여러 경로를 일치시킬 수 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">matcher</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"/about/:path*"</span><span class="token punctuation">,</span> <span class="token string">"/dashboard/:path*"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>matcher 구성은 전체 정규식을 허용하여 부정적 전방탐색이나 문자 매칭과 같은 일치를 지원합니다. 특정 경로를 제외한 모든 것들을 매칭하려면 부정적 전방탐색의 예시가 여기에 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">matcher</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">/*
     * api (API 경로)
     * _next/static (정적 파일)
     * _next/image (이미지 최적화 파일)
     * favicon.ico (파비콘 파일)
     * 시작하는 경로를 제외한 모든 요청 경로 일치
     */</span>
    <span class="token string">"/((?!api|_next/static|_next/image|favicon.ico).*)"</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또한 누락 또는 포함 배열 또는 두 가지의 조합을 사용하여 특정 요청에 대해 Middleware를 우회할 수도 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">matcher</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">/*
     * - api (API 경로)
     * - _next/static (정적 파일)
     * - _next/image (이미지 최적화 파일)
     * - favicon.ico (파비콘 파일)
     */</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/((?!api|_next/static|_next/image|favicon.ico).*)"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">missing</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"header"</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"next-router-prefetch"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"header"</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"purpose"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"prefetch"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">{</span>
      <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/((?!api|_next/static|_next/image|favicon.ico).*)"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">has</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"header"</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"next-router-prefetch"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"header"</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"purpose"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"prefetch"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">{</span>
      <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/((?!api|_next/static|_next/image|favicon.ico).*)"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">has</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"header"</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"x-present"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">missing</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"header"</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"x-missing"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"prefetch"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>참고: matcher 값은 상수이어야 하므로 빌드 시 정적으로 분석될 수 있습니다. 변수와 같은 동적 값은 무시됩니다.</p>
</blockquote>
<p>구성된 matchers:</p>
<ul>
<li>반드시 /로 시작해야 합니다.</li>
<li>Named parameters를 포함할 수 있습니다: /about/:path는 /about/a 및 /about/b와 일치하지만 /about/a/c와 일치하지 않습니다.</li>
<li>Named parameters에 수정자를 추가할 수 있습니다 (:로 시작): /about/:path*는 *가 0개 이상이므로 /about/a/b/c와 일치합니다. ?는 0 또는 1이고 +는 1 이상입니다.</li>
<li>괄호로 묶인 정규 표현식을 사용할 수 있습니다: /about/(.<em>)는 /about/:path</em>와 동일합니다.```</li>
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
<p>path-to-regexp에 대한 자세한 내용을 확인하려면 문서를 읽어보세요.</p>
<blockquote>
<p>알아두면 좋은 사실: 역호환성을 위해 Next.js는 항상 /public을 /public/index로 간주합니다. 따라서 /public/:path의 일치 항목은 일치합니다.</p>
</blockquote>
<h3 id="조건문" tabindex="-1"><a class="header-anchor" href="#조건문" aria-hidden="true">#</a> 조건문</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>pathname<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">"/about"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">rewrite</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">"/about-2"</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>pathname<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">"/dashboard"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">rewrite</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">"/dashboard/user"</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
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
<h2 id="nextresponse" tabindex="-1"><a class="header-anchor" href="#nextresponse" aria-hidden="true">#</a> NextResponse</h2>
<p>NextResponse API를 통해 다음을 수행할 수 있습니다:</p>
<ul>
<li>수신된 요청을 다른 URL로 리디렉션</li>
<li>특정 URL을 표시하여 응답을 다시 작성</li>
<li>API 라우트, getServerSideProps 및 다시 작성 대상에 대한 요청 헤더 설정</li>
<li>응답 쿠키 설정</li>
<li>응답 헤더 설정</li>
</ul>
<p>Middleware에서 응답을 생성하려면:</p>
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
<li>응담을 생성하는 라우트 (페이지 또는 Edge API 라우트)로 재작성하십시오</li>
<li>직접적으로 NextResponse를 반환하십시오. 응담 생성을 참조하십시오.</li>
</ul>
<h2 id="쿠키-사용" tabindex="-1"><a class="header-anchor" href="#쿠키-사용" aria-hidden="true">#</a> 쿠키 사용</h2>
<p>쿠키는 일반적인 헤더입니다. 요청에서는 Cookie 헤더에 저장되고 응답에서는 Set-Cookie 헤더에 저장됩니다. Next.js는 NextRequest와 NextResponse의 cookies 확장을 통해 이러한 쿠키에 쉽게 접근하고 조작할 수 있는 편리한 방법을 제공합니다.</p>
<ul>
<li>들어오는 요청의 경우, cookies는 다음 메소드들을 포함하고 있습니다: get, getAll, set, delete 쿠키. cookie의 존재 여부를 확인하거나 모든 쿠키를 제거할 수 있습니다.</li>
<li>나가는 응답의 경우, cookies는 다음 메소드들을 포함하고 있습니다: get, getAll, set, delete.</li>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 들어오는 요청에서 "Cookie: nextjs=빠른" 헤더가 있다고 가정합니다.</span>
  <span class="token comment">// RequestCookies API를 사용하여 요청에서 쿠키 가져오기</span>
  <span class="token keyword">let</span> cookie <span class="token operator">=</span> request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"nextjs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cookie<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => { name: 'nextjs', value: 'fast', Path: '/' }</span>
  <span class="token keyword">const</span> allCookies <span class="token operator">=</span> request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>allCookies<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => [{ name: 'nextjs', value: 'fast' }]</span>

  request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">"nextjs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => true</span>
  request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">"nextjs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">"nextjs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => false</span>

  <span class="token comment">// ResponseCookies API를 사용하여 응답에 쿠키 설정</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"vercel"</span><span class="token punctuation">,</span> <span class="token string">"fast"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">"vercel"</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">"fast"</span><span class="token punctuation">,</span>
    path<span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  cookie <span class="token operator">=</span> response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"vercel"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cookie<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => { name: 'vercel', value: 'fast', Path: '/' }</span>
  <span class="token comment">// 발신 응답에는 `Set-Cookie: vercel=빠른; path=/` 헤더가 포함됩니다.</span>

  <span class="token keyword">return</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="설정한-헤더" tabindex="-1"><a class="header-anchor" href="#설정한-헤더" aria-hidden="true">#</a> 설정한 헤더</h2>
<p>NextResponse API를 사용하여 요청 및 응답 헤더를 설정할 수 있습니다 (요청 헤더 설정은 Next.js v13.0.0부터 가능합니다).</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 요청 헤더를 복제하고 새로운 헤더 `x-hello-from-middleware1`를 설정합니다.</span>
  <span class="token keyword">const</span> requestHeaders <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
  requestHeaders<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"x-hello-from-middleware1"</span><span class="token punctuation">,</span> <span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// NextResponse.rewrite에서도 요청 헤더를 설정할 수 있습니다.</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    request<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 새로운 요청 헤더</span>
      headers<span class="token operator">:</span> requestHeaders<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 새로운 응답 헤더 `x-hello-from-middleware2`를 설정합니다.</span>
  response<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"x-hello-from-middleware2"</span><span class="token punctuation">,</span> <span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<p>좋은 정보: 큰 헤더를 설정하지 않는 것이 좋습니다. 백엔드 웹 서버 구성에 따라 431 Request Header Fields Too Large 오류가 발생할 수 있습니다.</p>
</blockquote>
<h3 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> CORS</h3>
<p>크로스 오리진 요청을 허용하기 위해 미들웨어에서 CORS 헤더를 설정할 수 있습니다. 이는 간단한 요청과 사전검사된 요청을 모두 포함합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextRequest<span class="token punctuation">,</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> allowedOrigins <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"https://acme.com"</span><span class="token punctuation">,</span> <span class="token string">"https://my-app.org"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> corsOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">"Access-Control-Allow-Methods"</span><span class="token operator">:</span> <span class="token string">"GET, POST, PUT, DELETE, OPTIONS"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"Access-Control-Allow-Headers"</span><span class="token operator">:</span> <span class="token string">"Content-Type, Authorization"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 요청에서 원본 확인</span>
  <span class="token keyword">const</span> origin <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"origin"</span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> isAllowedOrigin <span class="token operator">=</span> allowedOrigins<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>origin<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 사전검사된 요청 처리</span>
  <span class="token keyword">const</span> isPreflight <span class="token operator">=</span> request<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">"OPTIONS"</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>isPreflight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> preflightHeaders <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span><span class="token punctuation">(</span>isAllowedOrigin <span class="token operator">&amp;&amp;</span> <span class="token punctuation">{</span> <span class="token string-property property">"Access-Control-Allow-Origin"</span><span class="token operator">:</span> origin <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token operator">...</span>corsOptions<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> headers<span class="token operator">:</span> preflightHeaders <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 간단한 요청 처리</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>isAllowedOrigin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    response<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"Access-Control-Allow-Origin"</span><span class="token punctuation">,</span> origin<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>corsOptions<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    response<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  matcher<span class="token operator">:</span> <span class="token string">"/api/:path*"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="응답-생성" tabindex="-1"><a class="header-anchor" href="#응답-생성" aria-hidden="true">#</a> 응답 생성</h2>
<p>Next.js v13.1.0부터 Middleware에서 직접 Response 또는 NextResponse 인스턴스를 반환하여 응답할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isAuthenticated <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@lib/auth"</span><span class="token punctuation">;</span>

<span class="token comment">// 경로가 `/api/`로 시작되는 경우에만 미들웨어 적용</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  matcher<span class="token operator">:</span> <span class="token string">"/api/:function*"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 요청을 확인하기 위해 인증 함수 호출</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isAuthenticated</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 오류 메시지를 나타내는 JSON으로 응답</span>
    <span class="token keyword">return</span> Response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> success<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">"인증에 실패했습니다"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token number">401</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="waituntil과-nextfetchevent" tabindex="-1"><a class="header-anchor" href="#waituntil과-nextfetchevent" aria-hidden="true">#</a> waitUntil과 NextFetchEvent</h3>
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
<p>The NextFetchEvent 객체는 기본 FetchEvent 객체를 확장하며 waitUntil() 메소드를 포함합니다.</p>
<p>waitUntil() 메소드는 프로미스를 인자로 받고, 프로미스가 settle될 때까지 Middleware의 수명을 연장합니다. 이는 백그라운드에서 작업을 수행하는 데 유용합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> NextFetchEvent<span class="token punctuation">,</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">req</span><span class="token operator">:</span> NextRequest<span class="token punctuation">,</span> <span class="token literal-property property">event</span><span class="token operator">:</span> NextFetchEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">waitUntil</span><span class="token punctuation">(</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://my-analytics-platform.com"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"POST"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">pathname</span><span class="token operator">:</span> req<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>pathname <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="고급-middleware-플래그" tabindex="-1"><a class="header-anchor" href="#고급-middleware-플래그" aria-hidden="true">#</a> 고급 Middleware 플래그</h2>
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
<p>Next.js v13.1에서 미들웨어를 위한 두 가지 추가 플래그인이 소개되었습니다. skipMiddlewareUrlNormalize와 skipTrailingSlashRedirect은 고급 사용 사례를 처리하기 위해 도입되었습니다.</p>
<p>skipTrailingSlashRedirect는 추가되거나 제거되는 슬래시를 위한 Next.js 리디렉션을 비활성화합니다. 이를 통해 미들웨어 내에서 일부 경로에 대한 슬래시 유지를 유지할 수 있으며 다른 경로에 대해서는 그렇지 않도록 할 수 있어, 점진적인 이전이 보다 쉬워집니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">skipTrailingSlashRedirect</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> legacyPrefixes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"/docs"</span><span class="token punctuation">,</span> <span class="token string">"/blog"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span><span class="token parameter">req</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> pathname <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>nextUrl<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>legacyPrefixes<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prefix</span><span class="token punctuation">)</span> <span class="token operator">=></span> pathname<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span>prefix<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 슬래시 처리 적용</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pathname<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>pathname<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">((?!\.well-known(?:\/.*)?)(?:[^/]+\/)*[^/]+\.\w+)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    req<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>pathname <span class="token operator">+=</span> <span class="token string">"/"</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>nextUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
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
<p>skipMiddlewareUrlNormalize은 Next.js에서 URL 정규화를 비활성화하여 직접 방문과 클라이언트 전환을 동일하게 처리할 수 있게 합니다. 일부 고급 경우에는 이 옵션을 사용하여 원래 URL을 사용하여 완전한 제어를 제공할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">skipMiddlewareUrlNormalize</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span><span class="token parameter">req</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> pathname <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>nextUrl<span class="token punctuation">;</span>

  <span class="token comment">// GET /_next/data/build-id/hello.json</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pathname<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 이제 이 플래그와 함께 /_next/data/build-id/hello.json으로 표시됩니다.</span>
  <span class="token comment">// 이 플래그 없이는 정규화되어 /hello로 표시됩니다.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="runtime" tabindex="-1"><a class="header-anchor" href="#runtime" aria-hidden="true">#</a> Runtime</h2>
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
<p>현재 Middleware는 Edge 런타임만 지원합니다. Node.js 런타임은 사용할 수 없습니다.</p>
<h2 id="버전-기록" tabindex="-1"><a class="header-anchor" href="#버전-기록" aria-hidden="true">#</a> 버전 기록</h2>
<table>
<thead>
<tr>
<th>버전</th>
<th>변경 내역</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v13.1.0</code></td>
<td>고급 Middleware 플래그 추가</td>
</tr>
<tr>
<td><code v-pre>v13.0.0</code></td>
<td>Middleware가 요청 헤더, 응답 헤더 수정 및 응답 전송 가능</td>
</tr>
<tr>
<td><code v-pre>v12.2.0</code></td>
<td>Middleware가 안정화되었습니다, 업그레이드 안내서를 확인해주세요.</td>
</tr>
<tr>
<td><code v-pre>v12.0.9</code></td>
<td>Edge 런타임에서 절대 URL 적용 (<a href="https://github.com/vercel/next.js/pull/33410" rel="noopener noreferrer" target="_blank">PR</a>)</td>
</tr>
<tr>
<td><code v-pre>v12.0.0</code></td>
<td>Middleware (베타) 추가됨</td>
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
