<template><div><h1 id="리다이렉팅" tabindex="-1"><a class="header-anchor" href="#리다이렉팅" aria-hidden="true">#</a> 리다이렉팅</h1>
<p>Next.js에서 리다이렉트하는 여러 가지 방법이 있습니다. 이 페이지에서는 사용 가능한 각 옵션, 사용 사례 및 많은 리다이렉트를 관리하는 방법을 설명합니다.</p>
<table>
<thead>
<tr>
<th>API</th>
<th>목적</th>
<th>위치</th>
<th>상태 코드</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="#userouter-hook">useRouter</a></td>
<td>클라이언트 사이드 네비게이션 실행</td>
<td>구성요소</td>
<td>N/A</td>
</tr>
<tr>
<td><a href="#redirects-in-nextconfigjs">next.config.js</a></td>
<td>경로를 기반으로 들어오는 요청을 리디렉트</td>
<td><code v-pre>next.config.js</code> 파일</td>
<td>307 (임시) 또는 308 (영구)</td>
</tr>
<tr>
<td><a href="#nextresponseredirect-in-middleware">NextResponse.redirect</a></td>
<td>조건에 따라 들어오는 요청을 리디렉트</td>
<td>미들웨어</td>
<td>아무거나</td>
</tr>
</tbody>
</table>
<h2 id="userouter-훅" tabindex="-1"><a class="header-anchor" href="#userouter-훅" aria-hidden="true">#</a> useRouter() 훅</h2>
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
<p>컴포넌트 내에서 리디렉션해야 하는 경우 useRouter 훅의 push 메서드를 사용할 수 있어요. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/router"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"button"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"/dashboard"</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
      Dashboard
    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두면 좋아요:
사용자를 프로그래밍적으로 이동시킬 필요가 없는 경우 <code v-pre>Link</code> 컴포넌트를 사용하는 것이 좋아요.</p>
</blockquote>
<p>추가 정보는 useRouter API 레퍼런스를 확인해보세요.</p>
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
<h2 id="next-config-js에서의-리다이렉트" tabindex="-1"><a class="header-anchor" href="#next-config-js에서의-리다이렉트" aria-hidden="true">#</a> next.config.js에서의 리다이렉트</h2>
<p>next.config.js 파일의 리다이렉트 옵션을 사용하면 들어오는 요청 경로를 다른 목적지 경로로 리다이렉트할 수 있습니다. 이는 페이지의 URL 구조를 변경하거나 미리 알고 있는 리다이렉트 목록이 있는 경우 유용합니다.</p>
<p>리다이렉트는 경로(path), 헤더(header), 쿠키(cookie), 쿼리(query) 매칭을 지원하여 들어오는 요청에 기반해 사용자를 리다이렉트할 수 있는 유연성을 제공합니다.</p>
<p>리다이렉트를 사용하려면 next.config.js 파일에 옵션을 추가하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">redirects</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token comment">// 기본 리디렉션</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/about"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 와일드카드 경로 일치</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/blog/:slug"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/news/:slug"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>추가 정보를 위해 리디렉션 API 참조를 확인해보세요.</p>
<blockquote>
<p>알아두면 좋은 점:
리디렉션은 permanent 옵션과 함께 307 (임시 리디렉션) 또는 308 (영구적 리디렉션) 상태 코드를 반환할 수 있습니다.
리디렉션은 플랫폼에 제한이 있을 수 있습니다. 예를 들어, Vercel의 경우 1,024개의 리디렉션 제한이 있습니다. 많은 수의 리디렉션(1000개 이상)을 관리하려면 Middleware를 사용하여 커스텀 솔루션을 만들어 보세요. 추가 정보는 대규모 리디렉션 관리를 확인하세요.
리디렉션은 Middleware보다 먼저 실행됩니다.</p>
</blockquote>
<h2 id="middleware에서의-nextresponse-redirect" tabindex="-1"><a class="header-anchor" href="#middleware에서의-nextresponse-redirect" aria-hidden="true">#</a> Middleware에서의 NextResponse.redirect</h2>
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
<p>미들웨어는 요청이 완료되기 전에 코드를 실행할 수 있게 해줍니다. 그런 다음 수신된 요청을 기반으로 NextResponse.redirect를 사용하여 다른 URL로 리다이렉트할 수 있습니다. 이것은 조건에 따라 사용자를 리디렉션하거나(예: 인증, 세션 관리 등) 또는 많은 수의 리디렉션을 가지고 있는 경우 유용합니다.</p>
<p>예를 들어, 사용자가 인증되어 있지 않은 경우 /login 페이지로 리디렉트하려면 다음과 같이 하면 됩니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse<span class="token punctuation">,</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> authenticate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"auth-provider"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isAuthenticated <span class="token operator">=</span> <span class="token function">authenticate</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 사용자가 인증되어 있을 경우 정상적으로 계속 진행</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isAuthenticated<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 인증되어 있지 않은 경우 로그인 페이지로 리디렉트</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">"/login"</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  matcher<span class="token operator">:</span> <span class="token string">"/dashboard/:path*"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두면 좋은 사항:
미들웨어는 next.config.js에서 리디렉트 후에 실행되며 렌더링 전에 실행됩니다.</p>
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
<p>미들웨어 문서에서 더 많은 정보를 확인해보세요.</p>
<h3 id="대규모-리디렉션-관리하기-고급" tabindex="-1"><a class="header-anchor" href="#대규모-리디렉션-관리하기-고급" aria-hidden="true">#</a> 대규모 리디렉션 관리하기 (고급)</h3>
<p>대량의 리디렉션(1000개 이상)을 관리하려면, 미들웨어를 사용하여 사용자 정의 솔루션을 만들어보는 것이 좋습니다. 이를 통해 애플리케이션을 다시 배포할 필요 없이 프로그래밍 방식으로 리디렉션을 처리할 수 있습니다.</p>
<p>이를 수행하려면, 다음을 고려해야 합니다:</p>
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
<li>리디렉트 맵을 만들고 저장하기.</li>
<li>데이터 조회 성능 최적화.</li>
</ul>
<blockquote>
<p>Next.js 예시: 블룸 필터와 함께 미들웨어를
사용하여 아래 추천 사항을 구현한 예제를 보십시오.</p>
</blockquote>
<h3 id="_1-리디렉트-맵-만들고-저장하기" tabindex="-1"><a class="header-anchor" href="#_1-리디렉트-맵-만들고-저장하기" aria-hidden="true">#</a> 1. 리디렉트 맵 만들고 저장하기</h3>
<p>리디렉트 맵은 보통 데이터베이스(일반적으로 키-값 저장소)나 JSON 파일에 저장할 수 있는 리디렉트 목록입니다.</p>
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
<p>다음 데이터 구조를 고려해보세요:</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Middleware에서는 Vercel의 Edge Config나 Redis와 같은 데이터베이스에서 데이터를 읽어오고,
들어오는 요청을 기반으로 사용자를 리디렉션할 수 있습니다.</p>
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

  <span class="token comment">// 리다이렉션이 없는 경우, 리다이렉션 없이 계속 진행</span>
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
<p>매번 들어오는 요청마다 대량의 데이터셋을 읽는 것은 느리고 비싸다. 데이터 조회 성능을 최적화하는 두 가지 방법이 있습니다:</p>
<ul>
<li>빠른 조회를 위해 최적화된 데이터베이스를 사용하거나 Redis와 같은 것을 활용합니다.</li>
<li>더 큰 리디렉션 파일이나 데이터베이스를 읽기 전에 리디렉션이 있는지 효율적으로 확인하기 위해 블룸 필터와 같은 데이터 조회 전략을 사용합니다.</li>
</ul>
<p>이전 예제를 고려해보면, Middleware에 생성된 블룸 필터 파일을 가져와 들어오는 요청 경로명이 블룸 필터에 있는지 확인할 수 있습니다.</p>
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
<p>그렇다면, 사용자에게 적절한 URL로 리디렉션해주기 위해 실제 파일을 확인하고 API Routes로 요청을 전달합니다. 이렇게 함으로써 Middleware에 큰 리디렉션 파일을 가져오는 것을 피할 수 있어서 모든 요청을 늦출 수 있는 문제를 방지할 수 있어요.</p>
<p>Markdown 형식으로 표를 변경해보겠습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse<span class="token punctuation">,</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ScalableBloomFilter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"bloom-filters"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> GeneratedBloomFilter <span class="token keyword">from</span> <span class="token string">"./redirects/bloom-filter.json"</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">RedirectEntry</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  destination<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  permanent<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Initialize bloom filter from a generated JSON file</span>
<span class="token keyword">const</span> bloomFilter <span class="token operator">=</span> ScalableBloomFilter<span class="token punctuation">.</span><span class="token function">fromJSON</span><span class="token punctuation">(</span>GeneratedBloomFilter <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Get the path for the incoming request</span>
  <span class="token keyword">const</span> pathname <span class="token operator">=</span> request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>pathname<span class="token punctuation">;</span>

  <span class="token comment">// Check if the path is in the bloom filter</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>bloomFilter<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>pathname<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Forward the pathname to the Route Handler</span>
    <span class="token keyword">const</span> api <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/api/redirects?pathname=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>pathname<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>origin<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// Fetch redirect data from the Route Handler</span>
      <span class="token keyword">const</span> redirectData <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>api<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>redirectData<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> redirectEntry<span class="token operator">:</span> RedirectEntry <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">await</span> redirectData<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>redirectEntry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// Determine the status code</span>
          <span class="token keyword">const</span> statusCode <span class="token operator">=</span> redirectEntry<span class="token punctuation">.</span>permanent <span class="token operator">?</span> <span class="token number">308</span> <span class="token operator">:</span> <span class="token number">307</span><span class="token punctuation">;</span>

          <span class="token comment">// Redirect to the destination</span>
          <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span>redirectEntry<span class="token punctuation">.</span>destination<span class="token punctuation">,</span> statusCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// No redirect found, continue the request without redirecting</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 API Route에서는 다음과 같습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextApiRequest<span class="token punctuation">,</span> NextApiResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> redirects <span class="token keyword">from</span> <span class="token string">"@/app/redirects/redirects.json"</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">RedirectEntry</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  destination<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  permanent<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span>req<span class="token operator">:</span> NextApiRequest<span class="token punctuation">,</span> res<span class="token operator">:</span> NextApiResponse<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> pathname <span class="token operator">=</span> req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>pathname<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pathname<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">"Bad Request"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Get the redirect entry from the redirects.json file</span>
  <span class="token keyword">const</span> redirect <span class="token operator">=</span> <span class="token punctuation">(</span>redirects <span class="token keyword">as</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> RedirectEntry<span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">[</span>pathname<span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// Account for bloom filter false positives</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>redirect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">"No redirect"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Return the redirect entry</span>
  <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>redirect<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<p>좋은 정보:
블룸 필터를 생성하려면 bloom-filters와 같은 라이브러리를 사용할 수 있어요.
Route Handler에 요청을 유효성 검사하여 악의적인 요청을 방지해야 해요.</p>
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
</div></template>
