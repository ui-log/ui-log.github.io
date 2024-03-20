<template><div><h1 id="nextjs-14에서-middleware-js로-미들웨어-관리하는-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14에서-middleware-js로-미들웨어-관리하는-방법" aria-hidden="true">#</a> Nextjs 14에서 middleware.js로 미들웨어 관리하는 방법</h1>
<p>미들웨어.js|ts 파일은 미들웨어를 작성하고 요청이 완료되기 전에 서버에서 코드를 실행하는 데 사용됩니다. 그런 다음 수신된 요청을 기반으로 응답을 수정하여 다시 작성하거나 리디렉션하거나 요청 또는 응답 헤더를 수정하거나 직접 응답할 수 있습니다.</p>
<p>미들웨어는 경로가 렌더링되기 전에 실행됩니다. 인증, 로깅 또는 리디렉션 처리와 같은 사용자 정의 서버 측 로직을 구현하는 데 특히 유용합니다.</p>
<p>프로젝트의 루트에 middleware.ts (또는 .js) 파일을 사용하여 미들웨어를 정의하세요. 예를 들어, app이나 pages와 같은 수준이거나 해당하는 경우 src 내부에 위치시킬 수 있습니다.</p>
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

<span class="token comment">// `await`를 사용하는 경우 함수를 `async`로 표시할 수 있습니다.</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">"/home"</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  matcher<span class="token operator">:</span> <span class="token string">"/about/:path*"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="내보내기" tabindex="-1"><a class="header-anchor" href="#내보내기" aria-hidden="true">#</a> 내보내기</h2>
<h3 id="미들웨어-함수" tabindex="-1"><a class="header-anchor" href="#미들웨어-함수" aria-hidden="true">#</a> 미들웨어 함수</h3>
<p>파일은 기본 내보내기 또는 명명된 미들웨어로 단일 함수를 내보내야 합니다. 동일한 파일에서 여러 미들웨어를 지원하지 않는다는 점을 유의하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 기본 내보내기 예시</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 미들웨어 로직</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="설정-객체-선택사항" tabindex="-1"><a class="header-anchor" href="#설정-객체-선택사항" aria-hidden="true">#</a> 설정 객체 (선택사항)</h3>
<p>미들웨어 함수와 함께 내보낼 수 있는 설정 객체입니다. 이 객체에는 미들웨어가 적용되는 경로를 지정하는 매처가 포함됩니다.</p>
<h4 id="매처" tabindex="-1"><a class="header-anchor" href="#매처" aria-hidden="true">#</a> 매처</h4>
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
<p>매처 옵션은 미들웨어가 실행되는 특정 경로를 대상으로 지정할 수 있습니다. 이러한 경로를 지정하는 방법은 다음과 같습니다:</p>
<ul>
<li>하나의 경로에 대해: 경로를 정의하기 위해 문자열을 직접 사용하세요. 예: <code v-pre>/about</code>.</li>
<li>여러 경로에 대해: 여러 경로를 나열하기 위해 배열을 사용하세요. 예: matcher: [<code v-pre>/about</code>, <code v-pre>/contact</code>]는 /about과 /contact 둘 다에 미들웨어를 적용합니다.</li>
</ul>
<p>또한, 매처는 정규 표현식을 통해 복잡한 경로 명세를 지원합니다. 예: matcher: [<code v-pre>/((?!api|_next/static|_next/image|.*\.png$).*)</code>]는 포함할지 제외할지를 정확히 제어하는 정교한 경로를 활성화합니다.</p>
<p>매처 옵션은 다음 키를 가진 객체 배열도 허용합니다:</p>
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
<li>소스: 요청 경로와 일치시키기 위해 사용되는 경로 또는 패턴입니다. 직접 경로 일치를 위한 문자열 또는 더 복잡한 매칭을 위한 패턴일 수 있습니다.</li>
<li>regexp (선택 사항): 소스를 기반으로 매칭을 미세 조정하는 정규 표현식 문자열입니다. 특정 경로가 포함되거나 제외되는 추가 제어를 제공합니다.</li>
<li>locale (선택 사항): 경로 매칭에서 로캘 기반 라우팅을 무시하도록 설정하는 불리언입니다.</li>
<li>has (선택 사항): 헤더, 쿼리 매개변수 또는 쿠키와 같은 특정 요청 요소의 존재에 따라 조건을 지정합니다.</li>
<li>missing (선택 사항): 특정 요청 요소가 없는 조건에 중점을 둡니다. 누락된 헤더나 쿠키와 같은 요소를 다룹니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">matcher</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/api/*"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">regexp</span><span class="token operator">:</span> <span class="token string">"^/api/(.*)"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">has</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"header"</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"Authorization"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"Bearer Token"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"query"</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"userId"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"123"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">missing</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"cookie"</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"session"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"active"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="매개변수" tabindex="-1"><a class="header-anchor" href="#매개변수" aria-hidden="true">#</a> 매개변수</h2>
<h3 id="요청" tabindex="-1"><a class="header-anchor" href="#요청" aria-hidden="true">#</a> 요청</h3>
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
<p>미들웨어를 정의할 때, 기본 내보내기 함수는 request라는 단일 매개변수를 받습니다. 이 매개변수는 NextRequest의 인스턴스로, 들어오는 HTTP 요청을 나타냅니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 여기에 미들웨어 로직을 작성합니다</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두면 좋은 점:
NextRequest는 Next.js 미들웨어에서 들어오는 HTTP 요청을 나타내는 타입으로, NextResponse는 HTTP 응답을 조작하고 반환하는 데 사용되는 클래스입니다.</p>
</blockquote>
<h2 id="nextresponse" tabindex="-1"><a class="header-anchor" href="#nextresponse" aria-hidden="true">#</a> NextResponse</h2>
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
<p>미들웨어는 Web Response API를 확장하는 NextResponse 객체를 사용할 수 있어요. NextResponse 객체를 반환함으로써 쿠키를 직접 조작하고, 헤더를 설정하고, 리디렉트를 구현하며, 경로를 재작성할 수 있어요.</p>
</blockquote>
<blockquote>
<p>참고: 리디렉트를 위해 NextResponse.redirect 대신 Response.redirect도 사용할 수 있어요.</p>
</blockquote>
<h2 id="런타임" tabindex="-1"><a class="header-anchor" href="#런타임" aria-hidden="true">#</a> 런타임</h2>
<p>미들웨어는 Edge 런타임만 지원해요. Node.js 런타임은 사용할 수 없어요.</p>
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
<h2 id="버전-이력" tabindex="-1"><a class="header-anchor" href="#버전-이력" aria-hidden="true">#</a> 버전 이력</h2>
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
<td>고급 미들웨어 플래그 추가</td>
</tr>
<tr>
<td><code v-pre>v13.0.0</code></td>
<td>미들웨어가 요청 헤더, 응답 헤더를 수정하고 응답을 전송할 수 있음</td>
</tr>
<tr>
<td><code v-pre>v12.2.0</code></td>
<td>미들웨어가 안정화되었습니다. <a href="/docs/messages/middleware-upgrade-guide">업그레이드 가이드</a> 확인 부탁드립니다.</td>
</tr>
<tr>
<td><code v-pre>v12.0.9</code></td>
<td>Edge 런타임에서 절대 URL을 강제로 사용함 (<a href="https://github.com/vercel/next.js/pull/33410" rel="noopener noreferrer" target="_blank">PR<span class="inline-flex"><svg class="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" style="color:currentColor;width:14px;height:14px"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg></span></a>)</td>
</tr>
<tr>
<td><code v-pre>v12.0.0</code></td>
<td>미들웨어 (베타) 추가됨</td>
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
