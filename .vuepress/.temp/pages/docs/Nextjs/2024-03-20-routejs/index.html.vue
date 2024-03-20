<template><div><h1 id="nextjs-14에서-route-js를-사용해-페이지별-요청-핸들러-만들기" tabindex="-1"><a class="header-anchor" href="#nextjs-14에서-route-js를-사용해-페이지별-요청-핸들러-만들기" aria-hidden="true">#</a> Nextjs 14에서 route.js를 사용해 페이지별 요청 핸들러 만들기</h1>
<p>Route Handlers를 사용하면 Web 요청 및 응답 API를 사용하여 주어진 경로에 대한 사용자 정의 요청 핸들러를 만들 수 있습니다.</p>
<h2 id="http-메소드" tabindex="-1"><a class="header-anchor" href="#http-메소드" aria-hidden="true">#</a> HTTP 메소드</h2>
<p>Route 파일을 사용하면 주어진 경로에 대한 사용자 정의 요청 핸들러를 만들 수 있습니다. 다음 HTTP 메소드를 지원합니다: GET, POST, PUT, PATCH, DELETE, HEAD 및 OPTIONS.</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">GET</span><span class="token punctuation">(</span>request<span class="token operator">:</span> Request<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">HEAD</span><span class="token punctuation">(</span>request<span class="token operator">:</span> Request<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">POST</span><span class="token punctuation">(</span>request<span class="token operator">:</span> Request<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">PUT</span><span class="token punctuation">(</span>request<span class="token operator">:</span> Request<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">DELETE</span><span class="token punctuation">(</span>request<span class="token operator">:</span> Request<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">PATCH</span><span class="token punctuation">(</span>request<span class="token operator">:</span> Request<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">OPTIONS</span><span class="token punctuation">(</span>request<span class="token operator">:</span> Request<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>유용한 정보: 라우트 핸들러(Route Handlers)는 앱 디렉토리 내에서만 사용할 수 있습니다. API 라우트(pages)와 라우트 핸들러(app)를 함께 사용할 필요가 없습니다. 라우트 핸들러는 라우트 핸들러 자체로 모든 사용 사례를 다룰 수 있어야 합니다.</p>
</blockquote>
<h2 id="매개변수" tabindex="-1"><a class="header-anchor" href="#매개변수" aria-hidden="true">#</a> 매개변수</h2>
<h3 id="request-옵션" tabindex="-1"><a class="header-anchor" href="#request-옵션" aria-hidden="true">#</a> request (옵션)</h3>
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
<p>요청 객체는 웹 요청 API의 확장인 NextRequest 객체입니다. NextRequest를 사용하면 들어오는 요청에 대한 더 많은 제어를 할 수 있게 되며, 쿠키에 쉽게 접근하고 확장된 파싱된 URL 객체인 nextUrl에 쉽게 접근할 수 있습니다.</p>
<h3 id="context-선택-사항" tabindex="-1"><a class="header-anchor" href="#context-선택-사항" aria-hidden="true">#</a> context (선택 사항)</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Params</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  team<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">GET</span><span class="token punctuation">(</span>request<span class="token operator">:</span> Request<span class="token punctuation">,</span> context<span class="token operator">:</span> <span class="token punctuation">{</span> params<span class="token operator">:</span> Params <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> team <span class="token operator">=</span> context<span class="token punctuation">.</span>params<span class="token punctuation">.</span>team<span class="token punctuation">;</span> <span class="token comment">// '1'</span>
<span class="token punctuation">}</span>

<span class="token comment">// 라우트 매개변수에 따라 params 유형을 정의합니다 (아래 표 참조)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>현재 context의 유일한 값은 현재 라우트의 동적 경로 매개변수를 포함하는 객체인 params입니다.</p>
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
<h1 id="표" tabindex="-1"><a class="header-anchor" href="#표" aria-hidden="true">#</a> 표</h1>
<table>
<thead>
<tr>
<th>예시</th>
<th>URL</th>
<th><code v-pre>params</code></th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>app/dashboard/[team]/route.js</code></td>
<td><code v-pre>/dashboard/1</code></td>
<td><code v-pre>{ team: '1' }</code></td>
</tr>
<tr>
<td><code v-pre>app/shop/[tag]/[item]/route.js</code></td>
<td><code v-pre>/shop/1/2</code></td>
<td><code v-pre>{ tag: '1', item: '2' }</code></td>
</tr>
<tr>
<td><code v-pre>app/blog/[...slug]/route.js</code></td>
<td><code v-pre>/blog/1/2</code></td>
<td><code v-pre>{ slug: ['1', '2'] }</code></td>
</tr>
</tbody>
</table>
<h2 id="nextresponse" tabindex="-1"><a class="header-anchor" href="#nextresponse" aria-hidden="true">#</a> NextResponse</h2>
<p>경로 핸들러는 NextResponse 객체를 반환함으로써 Web Response API를 확장할 수 있습니다. 이를 통해 쿠키 설정, 헤더 지정, 리디렉션 및 리라이트를 쉽게 처리할 수 있습니다. API 레퍼런스를 확인하세요.</p>
<h2 id="버전-기록" tabindex="-1"><a class="header-anchor" href="#버전-기록" aria-hidden="true">#</a> 버전 기록</h2>
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
<td><code v-pre>v13.2.0</code></td>
<td>Route handlers are introduced.</td>
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
