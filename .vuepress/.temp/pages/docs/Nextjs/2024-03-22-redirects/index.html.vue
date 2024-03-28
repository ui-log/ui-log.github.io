<template><div><h1 id="리디렉션" tabindex="-1"><a class="header-anchor" href="#리디렉션" aria-hidden="true">#</a> 리디렉션</h1>
<p>리디렉션은 들어오는 요청 경로를 다른 대상 경로로 리디렉션할 수 있게 해줍니다.</p>
<p>리디렉션을 사용하려면 next.config.js 파일에서 redirects 키를 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">redirects</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/about"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p><code v-pre>redirects</code>는 소스, 대상 및 영구 속성을 가진 객체가 포함된 배열이 반환되는 것을 기대하는 비동기 함수입니다:</p>
<ul>
<li>소스는 수신 요청 경로 패턴입니다.</li>
<li>대상은 라우팅하려는 경로입니다.</li>
<li>영구 true 또는 false - true인 경우 308 상태 코드를 사용하며 클라이언트/검색 엔진에게 리디렉트를 영구적으로 캐시할 것을 지시하고, false이면 307 상태 코드를 사용하며 일시적이며 캐시되지 않습니다.</li>
</ul>
<blockquote>
<p>Next.js가 307 및 308을 사용하는 이유는 무엇인가요? 기존에는 일시적 리디렉트에 302가 사용되고 영구적 리디렉트에 301이 사용되었습니다. 그러나 많은 브라우저가 리디렉트의 요청 방법을 GET으로 변경했습니다. 예를 들어, 브라우저가 POST /v1/users로 요청을 보낸 후 302 상태 코드와 위치 /v2/users를 반환하면, 예상한 POST /v2/users 대신 GET /v2/users로 이어지는 요청이 발생할 수 있습니다. Next.js는 요청 방법을 명시적으로 유지하기 위해 307 일시적 리디렉트와 308 영구 리디렉트 상태 코드를 사용합니다.</p>
</blockquote>
<ul>
<li>basePath: false 또는 undefined - false 경우 일치시 basePath는 포함되지 않으며 외부 리디렉트에만 사용될 수 있습니다.</li>
<li>locale: false 또는 undefined - 일치시 로캘이 포함되지 않아야 하는지 여부.</li>
<li>has는 type, key 및 value 속성을 가진 has 객체의 배열입니다.</li>
<li>missing는 type, key 및 value 속성을 가진 missing 객체의 배열입니다.</li>
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
<p>리다이렉트는 페이지 및 /public 파일을 포함하는 파일 시스템 이전에 확인됩니다.</p>
<p>페이지 라우터를 사용할 때, 미들웨어가 존재하고 경로와 일치하는 경우에만 클라이언트 측 라우팅(Link, router.push)에 리다이렉트가 적용되지 않습니다.</p>
<p>리다이렉트가 적용되면, 요청에 제공된 쿼리 값은 리다이렉트 대상으로 전달됩니다. 예를 들어 다음과 같은 리다이렉트 구성을 참조하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">'/old-blog/:path*'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">'/blog/:path*'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>/old-blog/post-1?hello=world가 요청되면, 클라이언트는 /blog/post-1?hello=world로 리디렉션됩니다.</p>
<h2 id="경로-일치" tabindex="-1"><a class="header-anchor" href="#경로-일치" aria-hidden="true">#</a> 경로 일치</h2>
<p>경로 일치는 허용됩니다. 예를 들어 /old-blog/:slug은 /old-blog/hello-world와 일치합니다 (중첩된 경로 없음):</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">redirects</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/old-blog/:slug"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/news/:slug"</span><span class="token punctuation">,</span> <span class="token comment">// 일치한 매개변수는 대상에서 사용할 수 있습니다</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h3 id="와일드카드-경로-매칭" tabindex="-1"><a class="header-anchor" href="#와일드카드-경로-매칭" aria-hidden="true">#</a> 와일드카드 경로 매칭</h3>
<p>와일드카드 경로를 매칭하기 위해 매개변수 뒤에 <em>을 사용할 수 있습니다. 예를 들어, /blog/:slug</em>은 /blog/a/b/c/d/hello-world와 매치됩니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">redirects</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/blog/:slug*"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/news/:slug*"</span><span class="token punctuation">,</span> <span class="token comment">// 일치하는 매개변수는 대상에서 사용할 수 있습니다</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="정규식-경로-매칭" tabindex="-1"><a class="header-anchor" href="#정규식-경로-매칭" aria-hidden="true">#</a> 정규식 경로 매칭</h3>
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
<p>정규식 경로와 일치시키려면 매개변수 뒤에 괄호 안에 정규식을 감싸면 됩니다. 예를 들어 /post/:slug(\d{1,})은 /post/123과 일치하지만 /post/abc와는 일치하지 않습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">redirects</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/post/:slug(\\d{1,})"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/news/:slug"</span><span class="token punctuation">,</span> <span class="token comment">// 일치하는 매개변수는 대상에서 사용할 수 있습니다</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음 문자들 (, ), {, }, :, *, +, ? 는 정규식 경로 일치에 사용되므로 소스에서 특별하지 않은 값으로 사용할 때는 그 앞에 \를 추가하여 이스케이프해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">redirects</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 이것은 요청된 `/english(default)/something`를 일치시킵니다</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/english\\(default\\)/:slug"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/en-us/:slug"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
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
<h2 id="헤더-쿠키-및-쿼리-일치" tabindex="-1"><a class="header-anchor" href="#헤더-쿠키-및-쿼리-일치" aria-hidden="true">#</a> 헤더, 쿠키 및 쿼리 일치</h2>
<p>리디렉션을 일치시키려면 has 필드도 일치해야 하거나 missing 필드는 일치하지 않아야 합니다. 리디렉션을 적용하려면 소스와 모든 has 아이템이 일치하고 모든 missing 아이템이 일치하지 않아야 합니다.</p>
<p>has 및 missing 아이템에는 다음 필드가 포함될 수 있습니다:</p>
<ul>
<li>type: String - 반드시 header, cookie, host 또는 query 중 하나여야 합니다.</li>
<li>key: String - 일치시킬 선택한 타입의 키입니다.</li>
<li>value: String 또는 undefined - 검사할 값입니다. undefined인 경우 모든 값이 일치합니다. 특정 값의 일부를 캡처하기 위해 정규식과 유사한 문자열을 사용할 수 있습니다. 예: 값이 first-(?<code v-pre>paramName</code>.*)인 경우 first-second라는 값의 경우 목적지에서 :paramName으로 second를 사용할 수 있습니다.</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">redirects</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token comment">// 만약 'x-redirect-me' 헤더가 있는 경우, 이 리디렉션을 적용합니다.</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/:path((?!another-page$).*)"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">has</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"header"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"x-redirect-me"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/another-page"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 만약 'x-do-not-redirect' 헤더가 있는 경우, 이 리디렉션을 적용하지 않습니다.</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/:path((?!another-page$).*)"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">missing</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"header"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"x-do-not-redirect"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/another-page"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 소스, 쿼리, 쿠키가 일치하는 경우 이 리디렉션을 적용합니다.</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/specific/:path*"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">has</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"query"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"page"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"home"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"cookie"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"authorized"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"true"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/another/:path*"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 'x-authorized' 헤더가 있고 일치하는 값이 포함되어 있는 경우 이 리디렉션을 적용합니다.</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">has</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"header"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"x-authorized"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"(?&lt;authorized>yes|true)"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/home?authorized=:authorized"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 호스트가 'example.com'인 경우 이 리디렉션을 적용합니다.</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/:path((?!another-page$).*)"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">has</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"host"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"example.com"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/another-page"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="basepath-지원하는-리디렉션" tabindex="-1"><a class="header-anchor" href="#basepath-지원하는-리디렉션" aria-hidden="true">#</a> basePath 지원하는 리디렉션</h3>
<p>basePath를 지원하면 source 및 destination이 각각 basePath로 자동으로 접두사가 붙습니다. 이 리다이렉트에 basePath: false를 추가하지 않는 한 리다이렉션에도 basePath가 자동으로 붙습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">basePath</span><span class="token operator">:</span> <span class="token string">"/docs"</span><span class="token punctuation">,</span>

  <span class="token keyword">async</span> <span class="token function">redirects</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/with-basePath"</span><span class="token punctuation">,</span> <span class="token comment">// 자동으로 /docs/with-basePath가 됩니다</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/another"</span><span class="token punctuation">,</span> <span class="token comment">// 자동으로 /docs/another가 됩니다</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// basePath: false가 설정되어 있으므로 /docs를 추가하지 않습니다.</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/without-basePath"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"https://example.com"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">basePath</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<h3 id="i18n-지원을-사용한-리다이렉트" tabindex="-1"><a class="header-anchor" href="#i18n-지원을-사용한-리다이렉트" aria-hidden="true">#</a> i18n 지원을 사용한 리다이렉트</h3>
<p>리다이렉트를 사용할 때 i18n 지원을 활용하면 각 출발지와 목적지는 설정된 로케일을 처리하기 위해 자동으로 접두사가 붙습니다. 그렇지 않고 리다이렉트에 locale: false를 추가하지 않는 한, 출발지와 목적지에 로케일을 직접 추가해야 올바르게 일치됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">i18n</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"en"</span><span class="token punctuation">,</span> <span class="token string">"fr"</span><span class="token punctuation">,</span> <span class="token string">"de"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">defaultLocale</span><span class="token operator">:</span> <span class="token string">"en"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token keyword">async</span> <span class="token function">redirects</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/with-locale"</span><span class="token punctuation">,</span> <span class="token comment">// 모든 로케일 자동 처리</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/another"</span><span class="token punctuation">,</span> <span class="token comment">// 로케일이 자동 전달됨</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// locale: false가 설정되어 있어 로케일을 자동 처리하지 않음</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/nl/with-locale-manual"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/nl/another"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 'en'이 defaultLocale이므로 '/'와 일치함</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/en"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/en/another"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// locale: false가 설정된 경우에도 모든 로케일을 일치시킬 수 있음</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/:locale/page"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/en/newpage"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// '(en|fr|de)'로 변환되어 최상위 레벨에 일치하지 않음</span>
        <span class="token comment">// `/` 또는 `/fr` 경로와 같이 `/path*`가 될 수 있음</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/(.*)"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/another"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>드물게, 낡은 HTTP 클라이언트에게 올바른 리다이렉트를 위해 사용자 정의 상태 코드를 할당해야 할 때가 있습니다. 이런 경우에는 permanent 속성 대신 statusCode 속성을 사용할 수 있지만 둘 다 사용할 수는 없습니다. 308 상태 코드를 위해 IE11 호환성을 보장하려면 Refresh 헤더가 자동으로 추가됩니다.</p>
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
<h2 id="다른-리다이렉트" tabindex="-1"><a class="header-anchor" href="#다른-리다이렉트" aria-hidden="true">#</a> 다른 리다이렉트</h2>
<ul>
<li>API Routes 및 Route Handlers 내에서는 수신 요청에 따라 리다이렉트 할 수 있습니다.</li>
<li>getStaticProps 및 getServerSideProps 내에서는 특정 페이지를 요청 시간에 리다이렉트 할 수 있습니다.</li>
</ul>
<h2 id="버전-이력" tabindex="-1"><a class="header-anchor" href="#버전-이력" aria-hidden="true">#</a> 버전 이력</h2>
<table>
<thead>
<tr>
<th>버전</th>
<th>변경 내용</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v13.3.0</code></td>
<td><code v-pre>missing</code> 추가됨.</td>
</tr>
<tr>
<td><code v-pre>v10.2.0</code></td>
<td><code v-pre>has</code> 추가됨.</td>
</tr>
<tr>
<td><code v-pre>v9.5.0</code></td>
<td><code v-pre>redirects</code> 추가됨.</td>
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
