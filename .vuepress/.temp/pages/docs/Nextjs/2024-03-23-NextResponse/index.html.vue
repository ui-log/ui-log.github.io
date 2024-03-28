<template><div><h1 id="nextresponse" tabindex="-1"><a class="header-anchor" href="#nextresponse" aria-hidden="true">#</a> NextResponse</h1>
<p>NextResponse는 웹 응답 API를 확장하여 추가적인 편리한 메소드를 제공합니다.</p>
<h2 id="cookies" tabindex="-1"><a class="header-anchor" href="#cookies" aria-hidden="true">#</a> cookies</h2>
<p>응답의 Set-Cookie 헤더를 읽거나 수정할 수 있습니다.</p>
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
<p>주어진 이름으로 응답에 주어진 값을 갖는 쿠키를 설정합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 수신된 요청인 /home이 주어졌을 때</span>
<span class="token keyword">let</span> response <span class="token operator">=</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 배너를 숨기기 위한 쿠키 설정</span>
response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"show-banner"</span><span class="token punctuation">,</span> <span class="token string">"false"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 응답은 `Set-Cookie:show-banner=false;path=/home` 헤더를 갖게 됩니다</span>
<span class="token keyword">return</span> response<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-name" tabindex="-1"><a class="header-anchor" href="#get-name" aria-hidden="true">#</a> get(name)</h3>
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
<p>쿠키 이름을 제공하면 해당 쿠키의 값이 반환됩니다. 쿠키를 찾을 수 없는 경우 undefined가 반환됩니다. 여러 개의 쿠키가 발견되면 첫 번째 쿠키가 반환됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 들어오는 요청 /home을 기준으로</span>
<span class="token keyword">let</span> response <span class="token operator">=</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// { name: 'show-banner', value: 'false', Path: '/home' }</span>
response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"show-banner"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getall" tabindex="-1"><a class="header-anchor" href="#getall" aria-hidden="true">#</a> getAll()</h3>
<p>쿠키 이름을 제공하면 해당 쿠키의 값이 반환됩니다. 이름이 제공되지 않은 경우 응답에서 모든 쿠키가 반환됩니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 수신된 요청 /home 일 때</span>
<span class="token keyword">let</span> response <span class="token operator">=</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [</span>
<span class="token comment">//   { name: 'experiments', value: 'new-pricing-page', Path: '/home' },</span>
<span class="token comment">//   { name: 'experiments', value: 'winter-launch', Path: '/home' },</span>
<span class="token comment">// ]</span>
response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span><span class="token string">"experiments"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 또는, 응답에 대한 모든 쿠키를 가져옵니다</span>
response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete-name" tabindex="-1"><a class="header-anchor" href="#delete-name" aria-hidden="true">#</a> delete(name)</h3>
<p>쿠키 이름을 지정하여 응답에서 쿠키를 삭제합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 수신된 요청 /home 일 때</span>
<span class="token keyword">let</span> response <span class="token operator">=</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 삭제된 경우 true를 반환하고, 삭제된 것이 없으면 false를 반환합니다</span>
response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">"experiments"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<h2 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> json()</h2>
<p>주어진 JSON 본문을 포함하는 응답을 생성합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">GET</span><span class="token punctuation">(</span>request<span class="token operator">:</span> Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> error<span class="token operator">:</span> <span class="token string">"내부 서버 오류"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token number">500</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redirect" tabindex="-1"><a class="header-anchor" href="#redirect" aria-hidden="true">#</a> redirect()</h2>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">"/new"</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 코드는 URL로 리디렉션하는 응답을 생성합니다.</p>
<p>리디렉션할 URL은 NextResponse.redirect() 메서드에서 사용되기 전에 생성 및 수정할 수 있습니다. 예를 들어, 현재 URL을 가져오기 위해 request.nextUrl 속성을 사용하여 현재 URL을 가져온 다음 다른 URL로 리디렉션하도록 수정할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>

<span class="token comment">// 받은 요청을 기반으로...</span>
<span class="token keyword">const</span> loginUrl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">"/login"</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// /login URL에 ?from=/incoming-url 추가</span>
loginUrl<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"from"</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>pathname<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 새 URL로 리디렉션</span>
<span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span>loginUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="rewrite" tabindex="-1"><a class="header-anchor" href="#rewrite" aria-hidden="true">#</a> rewrite()</h2>
<p>지정된 URL을 유지하면서 URL을 다시 작성(프락시)하는 응답을 생성합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>

<span class="token comment">// 수신된 요청: /about, 브라우저에 표시되는 URL: /about</span>
<span class="token comment">// 다시 작성된 요청: /proxy, 브라우저에 표시되는 URL: /about</span>
<span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">rewrite</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">"/proxy"</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="next" tabindex="-1"><a class="header-anchor" href="#next" aria-hidden="true">#</a> next()</h2>
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
<p>next() 메소드는 미들웨어에서 유용합니다. 이 메소드를 사용하면 일찍 반환하고 라우팅을 계속할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>응답 생성 시 헤더를 전달할 수도 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>

<span class="token comment">// 수신된 요청이 있다면...</span>
<span class="token keyword">const</span> newHeaders <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 새 헤더 추가</span>
newHeaders<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"x-version"</span><span class="token punctuation">,</span> <span class="token string">"123"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 새 헤더로 응답 생성</span>
<span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">request</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 새 요청 헤더</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> newHeaders<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
&lt;!-- ui-log 수평형 -->

&lt;ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true">&lt;/ins>
&lt;component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
&lt;/component>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
