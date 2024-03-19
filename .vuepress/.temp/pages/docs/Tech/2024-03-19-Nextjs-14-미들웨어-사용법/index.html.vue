<template><div><h1 id="nextjs-14-미들웨어-사용법" tabindex="-1"><a class="header-anchor" href="#nextjs-14-미들웨어-사용법" aria-hidden="true">#</a> Nextjs 14 미들웨어 사용법</h1>
<h1 id="미들웨어" tabindex="-1"><a class="header-anchor" href="#미들웨어" aria-hidden="true">#</a> 미들웨어</h1>
<p>미들웨어를 사용하면 요청이 완료되기 전에 코드를 실행할 수 있습니다. 그런 다음 들어오는 요청에 기반하여 응답을 수정하거나 다시 작성, 리디렉션, 요청 또는 응답 헤더를 수정하거나 직접 응답할 수 있습니다.</p>
<p>미들웨어는 캐시된 콘텐츠와 라우트가 일치하기 전에 실행됩니다. 자세한 내용은 경로 일치를 참조하십시오.</p>
<h2 id="규칙" tabindex="-1"><a class="header-anchor" href="#규칙" aria-hidden="true">#</a> 규칙</h2>
<p>미들웨어를 정의하려면 프로젝트의 루트에 middleware.ts(또는 .js) 파일을 사용하십시오. 예를 들어, 페이지 또는 앱과 같은 수준에 있거나 해당하는 경우 src 내부에 있습니다.</p>
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
<h2 id="예제" tabindex="-1"><a class="header-anchor" href="#예제" aria-hidden="true">#</a> 예제</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>

<span class="token comment">// `await`을 사용하는 경우 이 함수를 `async`로 표시할 수 있습니다</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">"/home"</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 아래 "경로 일치" 섹션을 참조하여 자세히 알아보세요</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  matcher<span class="token operator">:</span> <span class="token string">"/about/:path*"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<h2 id="경로-일치" tabindex="-1"><a class="header-anchor" href="#경로-일치" aria-hidden="true">#</a> 경로 일치</h2>
<p>미들웨어는 프로젝트의 모든 라우트에 대해 호출됩니다. 실행 순서는 다음과 같습니다.</p>
<ul>
<li>next.config.js에서 헤더</li>
<li>next.config.js에서 리디렉션</li>
<li>미들웨어 (재작성, 리디렉션 등)</li>
<li>next.config.js에서 beforeFiles (재작성)</li>
<li>파일 시스템 경로 (public/, _next/static/, pages/, app/ 등)</li>
<li>next.config.js에서 afterFiles (재작성)</li>
<li>동적 라우트 (/blog/[slug])</li>
<li>next.config.js에서 fallback (재작성)</li>
</ul>
<p>미들웨어가 실행될 경로를 정의하는 방법에는 두 가지가 있습니다.</p>
<ul>
<li>사용자 지정 matcher 구성</li>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>단일 경로 또는 배열 구문을 사용하여 여러 경로를 일치시킬 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">matcher</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"/about/:path*"</span><span class="token punctuation">,</span> <span class="token string">"/dashboard/:path*"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>matcher 구성에서는 부정적인 전방 탐색 또는 문자 일치와 같은 모든 정규식을 지원합니다. 특정 경로를 제외한 모든 요청 경로를 일치시키려면 다음과 같이 부정적인 전방 탐색을 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">matcher</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">/*
     * 다음으로 시작하는 모든 요청 경로와 일치하지 않는 모든 요청 경로:
     * - api (API 라우트)
     * - _next/static (정적 파일)
     * - _next/image (이미지 최적화 파일)
     * - favicon.ico (파비콘 파일)
     */</span>
    <span class="token string">"/((?!api|_next/static|_next/image|favicon.ico).*)"</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<p>미들웨어가 다음/link에서 가져온 prefetch를 무시하고 Middleware를 통과하지 않아도 되는 경우 missing 배열을 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">matcher</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">/*
     * 다음으로 시작하는 모든 요청 경로와 일치하지 않는 모든 요청 경로:
     * - api (API 라우트)
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
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두세요: matcher 값은 상수여야 하므로 빌드 시간에 정적으로 분석될 수 있습니다. 변수와 같은 동적 값은 무시됩니다.</p>
</blockquote>
<p>구성된 matcher:</p>
<ul>
<li>반드시 /로 시작해야 합니다.</li>
<li>이름 있는 매개변수를 사용할 수 있습니다: /about/:path는 /about/a와 /about/b에 일치하지만 /about/a/c에는 일치하지 않습니다.</li>
<li>이름 있는 매개변수에 수정자를 사용할 수 있습니다 (시작이 :입니다): /about/:path*는 *이 0개 이상임을 나타냅니다. ?는 0개 또는 1개, +는 1개 이상입니다.</li>
<li>괄호로 둘러싼 정규식을 사용할 수 있습니다: /about/(.*)는 /about</li>
</ul>
<p>/:path*와 같습니다.</p>
<p>경로에 대한 자세한 내용은 path-to-regexp 문서를 참조하십시오.</p>
<blockquote>
<p>알아두세요: 하위 호환성을 위해 Next.js는 항상 /public을 /public/index로 간주합니다. 따라서 /public/:path matcher는 일치합니다.</p>
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
<p>NextResponse API를 사용하면 다음을 수행할 수 있습니다:</p>
<ul>
<li>들어오는 요청을 다른 URL로 리디렉션합니다.</li>
<li>주어진 URL을 표시하여 응답을 다시 작성합니다.</li>
<li>API Routes, getServerSideProps 및 리디렉션 대상에 대한 요청 헤더를 설정합니다.</li>
<li>응답 쿠키를 설정합니다.</li>
<li>응답 헤더를 설정합니다.</li>
</ul>
<p>미들웨어에서 응답을 생성하려면 다음을 수행할 수 있습니다:</p>
<ul>
<li>응답을 생성하는 라우트(Page 또는 Route Handler)로 리디렉션합니다.</li>
<li>직접 NextResponse를 반환합니다. 응답 생성 참조</li>
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
<h2 id="쿠키-사용" tabindex="-1"><a class="header-anchor" href="#쿠키-사용" aria-hidden="true">#</a> 쿠키 사용</h2>
<p>쿠키는 일반적인 헤더입니다. 요청에서는 쿠키가 Cookie 헤더에 저장됩니다. 응답에서는 Set-Cookie 헤더에 저장됩니다. Next.js는 NextRequest와 NextResponse의 cookies 확장을 통해 이러한 쿠키에 쉽게 액세스하고 조작할 수 있는 편리한 방법을 제공합니다.</p>
<ul>
<li>들어오는 요청에 대해 cookies는 다음 메서드를 가지고 있습니다: get, getAll, set 및 delete cookies. has를 사용하여 쿠키의 존재 여부를 확인하거나 clear를 사용하여 모든 쿠키를 제거할 수 있습니다.</li>
<li>나가는 응답에 대해 cookies는 다음 메서드를 가지고 있습니다: get, getAll, set 및 delete입니다.</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 들어오는 요청에서 "Cookie:nextjs=fast" 헤더가 있다고 가정합니다.</span>
  <span class="token comment">// RequestCookies API를 사용하여 요청에서 쿠키를 가져옵니다.</span>
  <span class="token keyword">let</span> cookie <span class="token operator">=</span> request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"nextjs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cookie<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => { name: 'nextjs', value: 'fast', Path: '/' }</span>
  <span class="token keyword">const</span> allCookies <span class="token operator">=</span> request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>allCookies<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => [{ name: 'nextjs', value: 'fast' }]</span>

  request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">"nextjs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => true</span>
  request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">"nextjs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">"nextjs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => false</span>

  <span class="token comment">// ResponseCookies API를 사용하여 응답에 쿠키를 설정합니다.</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"vercel"</span><span class="token punctuation">,</span> <span class="token string">"fast"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">"vercel"</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">"fast"</span><span class="token punctuation">,</span>
    path<span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  cookie <span class="token operator">=</span> response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"vercel"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cookie<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => { name: 'vercel', value: 'fast', Path: '/' }</span>
  <span class="token comment">// 나가는 응답에는 `Set-Cookie:vercel=fast;path=/` 헤더가 포함됩니다.</span>

  <span class="token keyword">return</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="헤더-설정" tabindex="-1"><a class="header-anchor" href="#헤더-설정" aria-hidden="true">#</a> 헤더 설정</h2>
<p>NextResponse API를 사용하여 요청 및 응답 헤더를 설정할 수 있습니다 (요청 헤더 설정은 Next.js v13.0.0부터 사용 가능합니다).</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두세요: 큰 헤더를 설정하는 것은 백엔드 웹 서버 구성에 따라 431 Request Header Fields Too Large 오류를 발생시킬 수 있으므로 피하시기 바랍니다.</p>
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
<h3 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> CORS</h3>
<p>미들웨어에서 CORS 헤더를 설정하여 단순 및 프리플라이트된 요청을 포함한 교차 출처 요청을 허용할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextRequest<span class="token punctuation">,</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> allowedOrigins <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"https://acme.com"</span><span class="token punctuation">,</span> <span class="token string">"https://my-app.org"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> corsOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">"Access-Control-Allow-Methods"</span><span class="token operator">:</span> <span class="token string">"GET, POST, PUT, DELETE, OPTIONS"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"Access-Control-Allow-Headers"</span><span class="token operator">:</span> <span class="token string">"Content-Type, Authorization"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 요청에서 origin을 확인합니다.</span>
  <span class="token keyword">const</span> origin <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"origin"</span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> isAllowedOrigin <span class="token operator">=</span> allowedOrigins<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>origin<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 프리플라이트된 요청을 처리합니다.</span>
  <span class="token keyword">const</span> isPreflight <span class="token operator">=</span> request<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">"OPTIONS"</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>isPreflight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> preflightHeaders <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span><span class="token punctuation">(</span>isAllowedOrigin <span class="token operator">&amp;&amp;</span> <span class="token punctuation">{</span> <span class="token string-property property">"Access-Control-Allow-Origin"</span><span class="token operator">:</span> origin <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token operator">...</span>corsOptions<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> headers<span class="token operator">:</span> preflightHeaders <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 단순 요청을 처리합니다.</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두세요: Route Handlers에서 개별 경로에 대한 CORS 헤더를 구성할 수 있습니다.</p>
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
<h2 id="응답-생성" tabindex="-1"><a class="header-anchor" href="#응답-생성" aria-hidden="true">#</a> 응답 생성</h2>
<p>미들웨어에서 직접 응답을 반환하여 처리할 수 있습니다. 이 기능은 Next.js v13.1.0부터 사용할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isAuthenticated <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@lib/auth"</span><span class="token punctuation">;</span>

<span class="token comment">// `/api/`로 시작하는 경로에 대해서만 미들웨어 적용</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  matcher<span class="token operator">:</span> <span class="token string">"/api/:function*"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 요청을 확인하기 위해 인증 함수 호출</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isAuthenticated</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 인증 실패를 나타내는 JSON으로 응답</span>
    <span class="token keyword">return</span> Response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> success<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">"authentication failed"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token number">401</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="waituntil과-nextfetchevent" tabindex="-1"><a class="header-anchor" href="#waituntil과-nextfetchevent" aria-hidden="true">#</a> waitUntil과 NextFetchEvent</h3>
<p>NextFetchEvent 객체는 네이티브 FetchEvent 객체를 확장하며, waitUntil() 메서드를 포함합니다.</p>
<p>waitUntil() 메서드는 프로미스를 인수로 사용하며, 프로미스가 settle될 때까지 미들웨어의 수명을 연장합니다. 이는 백그라운드에서 작업을 수행하는 데 유용합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextFetchEvent<span class="token punctuation">,</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>req<span class="token operator">:</span> NextRequest<span class="token punctuation">,</span> event<span class="token operator">:</span> NextFetchEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">waitUntil</span><span class="token punctuation">(</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://my-analytics-platform.com"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      method<span class="token operator">:</span> <span class="token string">"POST"</span><span class="token punctuation">,</span>
      body<span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> pathname<span class="token operator">:</span> req<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>pathname <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<h2 id="고급-미들웨어-플래그" tabindex="-1"><a class="header-anchor" href="#고급-미들웨어-플래그" aria-hidden="true">#</a> 고급 미들웨어 플래그</h2>
<p>Next.js v13.1에서 미들웨어에 대한 두 가지 추가 플래그인 skipMiddlewareUrlNormalize 및 skipTrailingSlashRedirect가 소개되었습니다. 이러한 플래그는 고급 사용 사례를 다루기 위해 도입되었습니다.</p>
<p>skipTrailingSlashRedirect는 Next.js 리다이렉트를 사용하여 슬래시를 추가하거나 제거하는 것을 비활성화합니다. 이를 통해 미들웨어 내에서 일부 경로에는 슬래시를 유지하고 다른 경로에는 유지하지 않을 수 있으므로 점진적인 마이그레이션을 쉽게 수행할 수 있습니다.</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>skipMiddlewareUrlNormalize은 Next.js에서 URL 정규화를 비활성화하여 직접 방문과 클라이언트 전환을 동일하게 처리할 수 있도록합니다. 일부 고급 케이스에서이 옵션을 사용하면 원래 URL을 사용하여 완전한 제어를 제공할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">skipMiddlewareUrlNormalize</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span><span class="token parameter">req</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> pathname <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>nextUrl<span class="token punctuation">;</span>

  <span class="token comment">// GET /_next/data/build-id/hello.json</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pathname<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 이 플래그를 사용하면 이제 /_next/data/build-id/hello.json입니다.</span>
  <span class="token comment">// 이 플래그를 사용하지 않으면 이는 /hello로 정규화됩니다.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게 함으로써, Next.js의 미들웨어를 사용하여 고급 사용 사례에 대한 처리를 더욱 유연하게 조정할 수 있습니다.</p>
<h2 id="런타임" tabindex="-1"><a class="header-anchor" href="#런타임" aria-hidden="true">#</a> 런타임</h2>
<p>현재 Middleware는 Edge 런타임만 지원합니다. Node.js 런타임은 사용할 수 없습니다.</p>
<table>
<thead>
<tr>
<th>Version</th>
<th>Changes</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v13.1.0</code></td>
<td>Advanced Middleware flags added</td>
</tr>
<tr>
<td><code v-pre>v13.0.0</code></td>
<td>Middleware can modify request headers, response headers, and send responses</td>
</tr>
<tr>
<td><code v-pre>v12.2.0</code></td>
<td>Middleware is stable, please see the <a href="/docs/messages/middleware-upgrade-guide">upgrade guide</a></td>
</tr>
<tr>
<td><code v-pre>v12.0.9</code></td>
<td>Enforce absolute URLs in Edge Runtime (<a href="https://github.com/vercel/next.js/pull/33410" target="_blank" rel="noopener noreferrer">PR<ExternalLinkIcon/></a>)</td>
</tr>
<tr>
<td><code v-pre>v12.0.0</code></td>
<td>Middleware (Beta) added</td>
</tr>
</tbody>
</table>
</div></template>
