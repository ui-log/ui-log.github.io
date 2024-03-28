<template><div><h1 id="nextrequest" tabindex="-1"><a class="header-anchor" href="#nextrequest" aria-hidden="true">#</a> NextRequest</h1>
<p>NextRequest는 Web Request API를 확장하여 추가적인 편의 기능을 제공합니다.</p>
<h2 id="쿠키" tabindex="-1"><a class="header-anchor" href="#쿠키" aria-hidden="true">#</a> 쿠키</h2>
<p>요청의 Set-Cookie 헤더를 읽거나 변이시킵니다.</p>
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
<p>주어진 이름으로 요청에 해당 값의 쿠키를 설정합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 수신된 요청 /home</span>
<span class="token comment">// 배너를 숨기기 위한 쿠키 설정</span>
<span class="token comment">// 요청은 `Set-Cookie:show-banner=false;path=/home` 헤더를 가집니다</span>
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
<p>쿠키 이름이 주어지면 해당 쿠키의 값을 반환합니다. 쿠키를 찾을 수 없으면 정의되지 않은(undefined) 값이 반환됩니다. 여러 개의 쿠키가 발견되면 첫 번째 쿠키가 반환됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 수신된 요청이 /home인 경우</span>
<span class="token comment">// { name: 'show-banner', value: 'false', Path: '/home' }</span>
request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"show-banner"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getall" tabindex="-1"><a class="header-anchor" href="#getall" aria-hidden="true">#</a> getAll()</h3>
<p>쿠키 이름이 주어지면 해당 쿠키의 값을 반환합니다. 이름이 지정되지 않으면 요청에 있는 모든 쿠키를 반환합니다.</p>
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
<p>쿠키 이름을 제공하면 해당 쿠키를 요청에서 삭제합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 삭제되면 true를 반환하고, 아무 것도 삭제되지 않으면 false를 반환합니다</span>
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
<p>쿠키 이름이 주어졌을 때, 해당 쿠키가 요청에 존재하면 true를 반환합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 쿠키가 존재하면 true를 반환하고, 그렇지 않으면 false를 반환합니다</span>
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
<p>기본 URL API를 확장하여 Next.js 특정 속성을 포함한 추가적인 편의 기능을 제공합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// /home에 대한 요청을 받았을 때, pathname은 /home입니다.</span>
request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>pathname<span class="token punctuation">;</span>
<span class="token comment">// /home?name=lee에 대한 요청을 받았을 때, searchParams는 { 'name': 'lee' }입니다.</span>
request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>searchParams<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음 옵션이 가능합니다:</p>
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
<td>URL의 <a href="/docs/pages/api-reference/next-config-js/basePath">base path</a>입니다.</td>
</tr>
<tr>
<td><code v-pre>buildId</code></td>
<td><code v-pre>string</code> | <code v-pre>undefined</code></td>
<td>Next.js 어플리케이션의 빌드 식별자입니다. <a href="/docs/pages/api-reference/next-config-js/generateBuildId">사용자 정의</a> 가능합니다.</td>
</tr>
<tr>
<td><code v-pre>defaultLocale</code></td>
<td><code v-pre>string</code> | <code v-pre>undefined</code></td>
<td><a href="/docs/pages/building-your-application/routing/internationalization">다국어화</a>를 위한 기본 로케일입니다.</td>
</tr>
<tr>
<td><code v-pre>domainLocale</code></td>
<td></td>
<td></td>
</tr>
<tr>
<td>- <code v-pre>defaultLocale</code></td>
<td><code v-pre>string</code></td>
<td>도메인 내의 기본 로케일입니다.</td>
</tr>
<tr>
<td>- <code v-pre>domain</code></td>
<td><code v-pre>string</code></td>
<td>특정 로케일과 연결된 도메인입니다.</td>
</tr>
<tr>
<td>- <code v-pre>http</code></td>
<td><code v-pre>boolean</code> | <code v-pre>undefined</code></td>
<td>도메인이 HTTP를 사용하는지 여부를 나타냅니다.</td>
</tr>
<tr>
<td><code v-pre>locales</code></td>
<td><code v-pre>string[]</code> | <code v-pre>undefined</code></td>
<td>사용 가능한 로케일 배열입니다.</td>
</tr>
<tr>
<td><code v-pre>locale</code></td>
<td><code v-pre>string</code> | <code v-pre>undefined</code></td>
<td>현재 활성화된 로케일입니다.</td>
</tr>
<tr>
<td><code v-pre>url</code></td>
<td><code v-pre>URL</code></td>
<td>URL 객체입니다.</td>
</tr>
</tbody>
</table>
<h2 id="ip" tabindex="-1"><a class="header-anchor" href="#ip" aria-hidden="true">#</a> ip</h2>
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
<p><code v-pre>table</code> 태그는 Markdown 형식으로 변경하세요.</p>
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
<p>geo 속성은 요청의 지리적 정보를 포함하는 객체입니다. 이 값은 호스팅 플랫폼에서 선택적으로 제공될 수 있습니다.</p>
<blockquote>
<p>알아 두면 좋아요: Vercel에서는
기본적으로 이 값이 제공됩니다. 다른 플랫폼에서는 X-Forwarded-For
헤더를 사용하여 IP 주소를 제공한 다음, 제 3자 서비스를 사용하여
지리적 정보를 조회할 수 있습니다.</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Vercel에서 제공되는 경우</span>
request<span class="token punctuation">.</span>geo<span class="token punctuation">.</span>city<span class="token punctuation">;</span>
request<span class="token punctuation">.</span>geo<span class="token punctuation">.</span>country<span class="token punctuation">;</span>
request<span class="token punctuation">.</span>geo<span class="token punctuation">.</span>region<span class="token punctuation">;</span>
request<span class="token punctuation">.</span>geo<span class="token punctuation">.</span>latitude<span class="token punctuation">;</span>
request<span class="token punctuation">.</span>geo<span class="token punctuation">.</span>longitude<span class="token punctuation">;</span>

<span class="token comment">// 자체 호스팅의 경우</span>
<span class="token keyword">function</span> <span class="token function">getGeo</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> ip <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"X-Forwarded-For"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 제 3자 서비스를 사용하여 지리적 정보 조회</span>
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
