<template><div><h1 id="nextjs-14에서-request-api를-편리하게-사용-하는-방법-nextrequest" tabindex="-1"><a class="header-anchor" href="#nextjs-14에서-request-api를-편리하게-사용-하는-방법-nextrequest" aria-hidden="true">#</a> Nextjs 14에서 request API를 편리하게 사용 하는 방법(NextRequest)</h1>
<ul>
<li>NextRequest는 Web Request API를 확장하여 추가적인 편리한 메소드를 제공합니다.</li>
</ul>
<h2 id="쿠키" tabindex="-1"><a class="header-anchor" href="#쿠키" aria-hidden="true">#</a> 쿠키</h2>
<ul>
<li>요청의 Set-Cookie 헤더를 읽거나 변경할 수 있습니다.</li>
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
<h3 id="set-name-value" tabindex="-1"><a class="header-anchor" href="#set-name-value" aria-hidden="true">#</a> set(name, value)</h3>
<p>주어진 이름으로 요청에 주어진 값의 쿠키를 설정합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 수신된 요청 /home</span>
<span class="token comment">// 배너를 숨기기 위한 쿠키 설정</span>
<span class="token comment">// 요청에 `Set-Cookie:show-banner=false;path=/home` 헤더가 포함됩니다.</span>
request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"show-banner"</span><span class="token punctuation">,</span> <span class="token string">"false"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-name" tabindex="-1"><a class="header-anchor" href="#get-name" aria-hidden="true">#</a> get(name)</h3>
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
<p>쿠키 이름을 입력하면 해당 쿠키의 값을 반환합니다. 찾을 수 없는 경우 undefined가 반환됩니다. 여러 개의 쿠키가 발견되면 첫 번째 쿠키가 반환됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 받은 요청 /home</span>
<span class="token comment">// { name: 'show-banner', value: 'false', Path: '/home' }</span>
request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"show-banner"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getall" tabindex="-1"><a class="header-anchor" href="#getall" aria-hidden="true">#</a> getAll()</h3>
<p>쿠키 이름을 입력하면 해당 쿠키의 값을 반환합니다. 이름이 지정되지 않은 경우 요청에 있는 모든 쿠키를 반환합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 수신된 요청 /home</span>
<span class="token comment">// [</span>
<span class="token comment">//   { name: 'experiments', value: 'new-pricing-page', Path: '/home' },</span>
<span class="token comment">//   { name: 'experiments', value: 'winter-launch', Path: '/home' },</span>
<span class="token comment">// ]</span>
request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span><span class="token string">"experiments"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 또는, 요청에 대한 모든 쿠키 가져오기</span>
request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete-name" tabindex="-1"><a class="header-anchor" href="#delete-name" aria-hidden="true">#</a> delete(name)</h3>
<p>쿠키 이름을 지정하여 요청에서 쿠키를 삭제합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 삭제된 경우 true 반환, 아무것도 삭제되지 않으면 false 반환</span>
request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">"experiments"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h3 id="has-name" tabindex="-1"><a class="header-anchor" href="#has-name" aria-hidden="true">#</a> has(name)</h3>
<p>쿠키 이름을 지정하면 해당 쿠키가 요청에 존재하는 경우 true를 반환합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 쿠키가 존재하는 경우 true를 반환하고, 존재하지 않는 경우 false를 반환합니다.</span>
request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">"experiments"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> clear()</h3>
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
<p>요청에서 Set-Cookie 헤더를 제거하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="nexturl" tabindex="-1"><a class="header-anchor" href="#nexturl" aria-hidden="true">#</a> nextUrl</h2>
<p>기본 URL API를 확장하여 Next.js 특정 속성을 포함한 추가적인 편리한 메소드를 제공합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 요청이 /home으로 들어오면, pathname은 /home이에요.</span>
request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>pathname<span class="token punctuation">;</span>
<span class="token comment">// /home?name=lee로 요청이 들어오면, searchParams는 { 'name': 'lee' }가 됩니다.</span>
request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>searchParams<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음 옵션들을 선택할 수 있어요:</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>basePath</code></td>
<td><code v-pre>string</code></td>
<td>URL의 <a href="/docs/app/api-reference/next-config-js/basePath">베이스 패스</a>.</td>
</tr>
<tr>
<td><code v-pre>buildId</code></td>
<td><code v-pre>string</code> | <code v-pre>undefined</code></td>
<td>Next.js 애플리케이션의 빌드 식별자. <a href="/docs/app/api-reference/next-config-js/generateBuildId">사용자 정의 설정</a> 가능합니다.</td>
</tr>
<tr>
<td><code v-pre>pathname</code></td>
<td><code v-pre>string</code></td>
<td>URL의 경로명입니다.</td>
</tr>
<tr>
<td><code v-pre>searchParams</code></td>
<td><code v-pre>Object</code></td>
<td>URL의 검색 매개변수입니다.</td>
</tr>
</tbody>
</table>
<blockquote>
<p>참고: 페이지 라우터에서의 국제화 속성은 앱 라우터에서 사용할 수 없어요. 앱 라우터와 함께 국제화에 대해 자세히 알아보세요.</p>
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
<h2 id="ip" tabindex="-1"><a class="header-anchor" href="#ip" aria-hidden="true">#</a> IP</h2>
<p>IP 프로퍼티는 요청의 IP 주소를 포함한 문자열입니다. 이 값은 호스팅 플랫폼에서 선택적으로 제공될 수 있습니다.</p>
<blockquote>
<p>알아 두면 좋아요: Vercel에서는
, 이 값이 기본적으로 제공됩니다. 다른 플랫폼에서는 X-Forwarded-For
헤더를 사용하여 IP 주소를 제공할 수 있습니다.</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Vercel에서 제공됨</span>
request<span class="token punctuation">.</span>ip<span class="token punctuation">;</span>
<span class="token comment">// 자체 호스팅</span>
request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"X-Forwarded-For"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<h2 id="지오" tabindex="-1"><a class="header-anchor" href="#지오" aria-hidden="true">#</a> 지오</h2>
<p>지오 속성은 요청의 지리적 정보를 포함하는 객체입니다. 이 값은 호스팅 플랫폼에서 선택적으로 제공될 수 있습니다.</p>
<blockquote>
<p>좋아 알아두기: Vercel
에서는 이 값이 기본 제공됩니다. 다른 플랫폼에서는 X-Forwarded-For
헤더를 사용하여 IP 주소를 제공한 다음, 제 3자 서비스를 사용하여 지리 정보를 조회할 수 있습니다.</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Vercel에서 제공</span>
request<span class="token punctuation">.</span>geo<span class="token punctuation">.</span>city<span class="token punctuation">;</span>
request<span class="token punctuation">.</span>geo<span class="token punctuation">.</span>country<span class="token punctuation">;</span>
request<span class="token punctuation">.</span>geo<span class="token punctuation">.</span>region<span class="token punctuation">;</span>
request<span class="token punctuation">.</span>geo<span class="token punctuation">.</span>latitude<span class="token punctuation">;</span>
request<span class="token punctuation">.</span>geo<span class="token punctuation">.</span>longitude<span class="token punctuation">;</span>

<span class="token comment">// Self-hosting</span>
<span class="token keyword">function</span> <span class="token function">getGeo</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> ip <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"X-Forwarded-For"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 제 3자 서비스를 사용하여 지리 정보 조회</span>
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
</div></template>
