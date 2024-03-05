<template><div><h1 id="nextjs에서-서버-클라이언트-컴포넌트-redirect-처리하는-방법" tabindex="-1"><a class="header-anchor" href="#nextjs에서-서버-클라이언트-컴포넌트-redirect-처리하는-방법" aria-hidden="true">#</a> Nextjs에서 서버, 클라이언트 컴포넌트 redirect 처리하는 방법</h1>
<p>이 문서에서는 Nextjs 에서 서버 컴포넌트와 클라이언트 컴포넌트에서 Redirect를 하는 방법에 대해서 정리했습니다.</p>
<h1 id="리다이렉팅" tabindex="-1"><a class="header-anchor" href="#리다이렉팅" aria-hidden="true">#</a> 리다이렉팅</h1>
<p>Next.js에서 리다이렉트를 처리하는 몇 가지 방법이 있습니다. 이 페이지에서는 각 옵션과 사용 사례, 그리고 대규모 리다이렉트 관리 방법을 살펴보겠습니다.</p>
<table>
<thead>
<tr>
<th>API</th>
<th>Purpose</th>
<th>Where</th>
<th>Status Code</th>
</tr>
</thead>
<tbody>
<tr>
<td>redirect</td>
<td>Redirect user after a mutation or event</td>
<td>Server Components, Server Actions, Route Handlers</td>
<td>307 (Temporary) or 303 (Server Action)</td>
</tr>
<tr>
<td>permanentRedirect</td>
<td>Redirect user after a mutation or event</td>
<td>Server Components, Server Actions, Route Handlers</td>
<td>308 (Permanent)</td>
</tr>
<tr>
<td>useRouter</td>
<td>Perform a client-side navigation</td>
<td>Event Handlers in Client Components</td>
<td>N/A</td>
</tr>
<tr>
<td>redirects in next.config.js</td>
<td>Redirect an incoming request based on a path</td>
<td>next.config.js file</td>
<td>307 (Temporary) or 308 (Permanent)</td>
</tr>
<tr>
<td>NextResponse.redirect</td>
<td>Redirect an incoming request based on a condition</td>
<td>Middleware</td>
<td>Any</td>
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
<h2 id="redirect-함수" tabindex="-1"><a class="header-anchor" href="#redirect-함수" aria-hidden="true">#</a> redirect 함수</h2>
<p>redirect 함수를 사용하면 사용자를 다른 URL로 리다이렉트할 수 있습니다. redirect를 Server Components, Route Handlers 및 Server Actions에서 호출할 수 있습니다.</p>
<p>redirect는 mutation, 이벤트 이후에 자주 사용됩니다. 예를 들어, 게시물 생성 후:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"use server"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> redirect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> revalidatePath <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/cache"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">createPost</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// 데이터베이스 호출</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 오류 처리</span>
  <span class="token punctuation">}</span>

  <span class="token function">revalidatePath</span><span class="token punctuation">(</span><span class="token string">"/posts"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 캐시된 게시물 업데이트</span>
  <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/post/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 새 게시물 페이지로 이동</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ul>
<li>redirect는 기본적으로 307 (임시 리다이렉트) 상태 코드를 반환합니다. Server Action에서 사용할 때는 일반적으로 POST 요청 결과로 성공 페이지로 리다이렉트할 때 사용되는 303 (다른 곳 보기) 상태 코드를 반환합니다.</li>
<li>redirect는 내부적으로 오류를 throw하므로 try/catch 블록 외부에서 호출해야 합니다.</li>
<li>redirect는 렌더링 프로세스 중에 Client Components에서 호출할 수 있지만 이벤트 핸들러에서는 호출할 수 없습니다. 이 경우 useRouter 훅을 사용할 수 있습니다.</li>
<li>redirect는 절대 URL도 허용하며 외부 링크로 리다이렉트하는 데 사용할 수 있습니다.</li>
<li>렌더링 프로세스 전에 리다이렉트를 하려면 next.config.js 또는 Middleware를 사용하세요.</li>
</ul>
</div>
<p>더 많은 정보는 redirect API 참조를 참고하세요.</p>
<h2 id="permanentredirect-함수" tabindex="-1"><a class="header-anchor" href="#permanentredirect-함수" aria-hidden="true">#</a> permanentRedirect 함수</h2>
<p>permanentRedirect 함수를 사용하면 사용자를 영구적으로 다른 URL로 리다이렉트할 수 있습니다. permanentRedirect를 Server Components, Route Handlers 및 Server Actions에서 호출할 수 있습니다.</p>
<p>permanentRedirect는 엔터티의 근본적인 URL을 변경하는 mutation, 이벤트 후에 자주 사용됩니다. 예를 들어, 사용자 이름을 변경한 후에 사용자의 프로필 URL을 업데이트하는 경우:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"use server"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> permanentRedirect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> revalidateTag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/cache"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">updateUsername</span><span class="token punctuation">(</span>username<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> formData<span class="token operator">:</span> FormData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// 데이터베이스 호출</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 오류 처리</span>
  <span class="token punctuation">}</span>

  <span class="token function">revalidateTag</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 사용자 이름에 대한 모든 참조 업데이트</span>
  <span class="token function">permanentRedirect</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/profile/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>username<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 새 사용자 프로필로 이동</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ul>
<li>permanentRedirect는 기본적으로 308 (영구적 리다이렉트) 상태 코드를 반환합니다.</li>
<li>permanentRedirect는 절대 URL도 허용하며 외부 링크로 리다이렉트하는 데 사용할 수 있습니다.</li>
<li>렌더링 프로세스 전에 리다이렉트를 하려면 next.config.js 또는 Middleware를 사용하세요.</li>
</ul>
</div>
<p>더 많은 정보는 permanentRedirect API 참조를 참고하세요.</p>
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
<h2 id="userouter-훅" tabindex="-1"><a class="header-anchor" href="#userouter-훅" aria-hidden="true">#</a> useRouter() 훅</h2>
<p>Client Components의 이벤트 핸들러 내에서 리다이렉트해야 하는 경우 useRouter 훅의 push 메서드를 사용할 수 있습니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"button"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"/dashboard"</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
      대시보드
    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ul>
<li>사용자를 프로그래밍 방식으로 이동시키지 않아도 된다면 <code v-pre>&lt;Link&gt;</code> 컴포넌트를 사용해야 합니다.</li>
</ul>
</div>
<p>더 많은 정보는 useRouter API 참조를 참고하세요.</p>
<h2 id="next-config-js의-리다이렉트" tabindex="-1"><a class="header-anchor" href="#next-config-js의-리다이렉트" aria-hidden="true">#</a> next.config.js의 리다이렉트</h2>
<p>next.config.js 파일의 redirects 옵션을 사용하면 들어오는 요청 경로를 다른 대상 경로로 리다이렉트할 수 있습니다. 이것은 페이지의 URL 구조를 변경하거나 알려진 리다이렉트 목록이 있는 경우 유용합니다.</p>
<p>redirects는 경로, 헤더, 쿠키 및 쿼리 매칭을 지원하여 들어오는 요청을 기반으로 사용자를 리다이렉트할 수 있도록 합니다.</p>
<p>리다이렉트를 사용하려면 next.config.js 파일에 옵션을 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">redirects</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token comment">// 기본 리다이렉트</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/about"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 와일드카드 경로 매칭</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/blog/:slug"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/news/:slug"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>더 많은 정보는 redirects API 참조를 참고하세요.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ul>
<li>redirects는 permanent 옵션을 사용하여 307 (임시 리다이렉트) 또는 308 (영구적 리다이렉트) 상태 코드를 반환할 수 있습니다.</li>
<li>플랫폼에 따라 redirects에 제한이 있을 수 있습니다. 예를 들어 Vercel에서는 1,024개의 리다이렉트 제한이 있습니다. 대규모 리다이렉트(1000개 이상)를 관리하려면 Middleware를 사용하여 사용자 지정 솔루션을 만드는 것이 좋습니다.</li>
</ul>
</div>
<h2 id="미들웨어의-nextresponse-redirect" tabindex="-1"><a class="header-anchor" href="#미들웨어의-nextresponse-redirect" aria-hidden="true">#</a> 미들웨어의 NextResponse.redirect</h2>
<p>미들웨어를 사용하면 요청이 완료되기 전에 코드를 실행한 다음 NextResponse.redirect를 사용하여 다른 URL로 리다이렉트할 수 있습니다. 이는 조건(예: 인증, 세션 관리 등)에 따라 사용자를 리다이렉트하거나 대규모 리다이렉트를 가지고 있는 경우 유용합니다.</p>
<p>예를 들어, 사용자가 인증되지 않은 경우 /login 페이지로 리다이렉트하려면 다음과 같이 할 수 있습니다:</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse<span class="token punctuation">,</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> authenticate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"auth-provider"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isAuthenticated <span class="token operator">=</span> <span class="token function">authenticate</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 사용자가 인증된 경우 계속 진행</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isAuthenticated<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 인증되지 않은 경우 로그인 페이지로 리다이렉트</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">"/login"</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  matcher<span class="token operator">:</span> <span class="token string">"/dashboard/:path*"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ul>
<li>미들웨어는 next.config.js의 리다이렉트 이후에 실행되고 렌더링 전에 실행됩니다.</li>
</ul>
</div>
<p>더 많은 정보는 미들웨어 문서를 참고하세요.</p>
<h2 id="대규모-리다이렉트-관리-고급" tabindex="-1"><a class="header-anchor" href="#대규모-리다이렉트-관리-고급" aria-hidden="true">#</a> 대규모 리다이렉트 관리 (고급)</h2>
<p>대규모 리다이렉트(1000개 이상)를 관리하려면 미들웨어를 사용하여 사용자 지정 솔루션을 만들 수 있습니다. 이를 통해 응용 프로그램을 다시 배포하지 않고도 프로그래밍 방식으로 리다이렉트를 처리할 수 있습니다.</p>
<p>이를 위해 고려해야 할 사항은 다음과 같습니다:</p>
<ul>
<li>리다이렉트 맵 생성 및 저장.</li>
<li>데이터 조회 성능 최적화.</li>
</ul>
<blockquote>
<p>Next.js 예제: 아래 추천 사항의 구현 예제는 블룸 필터를 사용한 미들웨어를 포함합니다.</p>
</blockquote>
<h3 id="_1-리다이렉트-맵-생성-및-저장" tabindex="-1"><a class="header-anchor" href="#_1-리다이렉트-맵-생성-및-저장" aria-hidden="true">#</a> 1. 리다이렉트 맵 생성 및 저장</h3>
<p>리다이렉트 맵은 데이터베이스(일반적으로 키-값 저장소) 또는 JSON 파일에 저장할 수 있는 리다이렉트 목록입니다.</p>
<p>다음과 같은 데이터 구조를 고려해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"/old"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"destination"</span><span class="token operator">:</span> <span class="token string">"/new"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"permanent"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"/blog/post-old"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"destination"</span><span class="token operator">:</span> <span class="token string">"/blog/post-new"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"permanent"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>미들웨어에서는 Vercel의 Edge Config나 Redis와 같은 데이터베이스에서 읽어 들여 들어오는 요청을 기반으로 사용자를 리다이렉트할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse<span class="token punctuation">,</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> get <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@vercel/edge-config"</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">RedirectEntry</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  destination<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  permanent<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> pathname <span class="token operator">=</span> request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>pathname<span class="token punctuation">;</span>
  <span class="token keyword">const</span> redirectData <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">get</span><span class="token punctuation">(</span>pathname<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>redirectData <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> redirectData <span class="token operator">===</span> <span class="token string">"string"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> redirectEntry<span class="token operator">:</span> RedirectEntry <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>redirectData<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> statusCode <span class="token operator">=</span> redirectEntry<span class="token punctuation">.</span>permanent <span class="token operator">?</span> <span class="token number">308</span> <span class="token operator">:</span> <span class="token number">307</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span>redirectEntry<span class="token punctuation">.</span>destination<span class="token punctuation">,</span> statusCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 리다이렉트를 찾을 수 없으면 리다이렉트하지 않고 계속 진행</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h3 id="_2-데이터-조회-성능-최적화" tabindex="-1"><a class="header-anchor" href="#_2-데이터-조회-성능-최적화" aria-hidden="true">#</a> 2. 데이터 조회 성능 최적화</h3>
<p>들어오는 모든 요청에 대한 대규모 데이터 세트를 읽는 것은 느리고 비용이 많이 들 수 있습니다. 데이터 조회 성능을 최적화하는 두 가지 방법이 있습니다:</p>
<ul>
<li>Vercel Edge Config나 Redis와 같은 빠른 읽기에 최적화된 데이터베이스 사용.</li>
<li>효율적인 데이터 조회 전략 사용, 예를 들어 블룸 필터를 사용하여 대규모 리다이렉트 파일이나 데이터베이스를 읽기 전에 요청이 있는지 효율적으로 확인합니다.</li>
</ul>
<p>이전 예제를 고려하면 Middleware에서 생성된 블룸 필터 파일을 가져와서 들어오는 요청 경로가 블룸 필터에 있는지 확인할 수 있습니다.</p>
<p>이 경우 해당 경로를 확인하고 적절한 URL로 사용자를 리다이렉트하기 위해 Route Handler로 요청을 전달합니다. 이렇게 하면 모든 들어오는 요청에 대해 대규모 리다이렉트 파일을 미들웨어에 가져오는 것을 피할 수 있어요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse<span class="token punctuation">,</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ScalableBloomFilter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"bloom-filters"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> GeneratedBloomFilter <span class="token keyword">from</span> <span class="token string">"./redirects/bloom-filter.json"</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">RedirectEntry</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  destination<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  permanent<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 생성된 JSON 파일에서 블룸 필터 초기화</span>
<span class="token keyword">const</span> bloomFilter <span class="token operator">=</span> ScalableBloomFilter<span class="token punctuation">.</span><span class="token function">fromJSON</span><span class="token punctuation">(</span>GeneratedBloomFilter <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 들어오는 요청의 경로 가져오기</span>
  <span class="token keyword">const</span> pathname <span class="token operator">=</span> request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>pathname<span class="token punctuation">;</span>

  <span class="token comment">// 경로가 블룸 필터에 있는지 확인</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>bloomFilter<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>pathname<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 경로를 Route Handler로 전달</span>
    <span class="token keyword">const</span> api <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/api/redirects?pathname=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>pathname<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>origin<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// Route Handler에서 리다이렉트 데이터 가져오기</span>
      <span class="token keyword">const</span> redirectData <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>api<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>redirectData<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> redirectEntry<span class="token operator">:</span> RedirectEntry <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">await</span> redirectData<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>redirectEntry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 상태 코드 결정</span>

          <span class="token keyword">const</span> statusCode <span class="token operator">=</span> redirectEntry<span class="token punctuation">.</span>permanent <span class="token operator">?</span> <span class="token number">308</span> <span class="token operator">:</span> <span class="token number">307</span><span class="token punctuation">;</span>

          <span class="token comment">// 대상으로 리다이렉트</span>
          <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span>redirectEntry<span class="token punctuation">.</span>destination<span class="token punctuation">,</span> statusCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 리다이렉트를 찾을 수 없으면 리다이렉트하지 않고 계속 진행</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음 Route Handler에서:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextRequest<span class="token punctuation">,</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> redirects <span class="token keyword">from</span> <span class="token string">"@/app/redirects/redirects.json"</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">RedirectEntry</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  destination<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  permanent<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token constant">GET</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> pathname <span class="token operator">=</span> request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"pathname"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pathname<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">"잘못된 요청"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token number">400</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// redirects.json 파일에서 리다이렉트 엔트리 가져오기</span>
  <span class="token keyword">const</span> redirect <span class="token operator">=</span> <span class="token punctuation">(</span>redirects <span class="token keyword">as</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> RedirectEntry<span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">[</span>pathname<span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// 블룸 필터 false positive 고려</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>redirect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">"리다이렉트 없음"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token number">400</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 리다이렉트 엔트리 반환</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>redirect<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ul>
<li>블룸 필터를 생성하려면 bloom-filters와 같은 라이브러리를 사용할 수 있습니다.</li>
<li>악의적인 요청을 방지하기 위해 Route Handler로의 요청을 유효성 검사해야 합니다.</li>
</ul>
</div>
</div></template>
