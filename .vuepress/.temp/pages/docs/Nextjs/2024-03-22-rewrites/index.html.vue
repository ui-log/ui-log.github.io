<template><div><h1 id="다시-쓰기" tabindex="-1"><a class="header-anchor" href="#다시-쓰기" aria-hidden="true">#</a> 다시 쓰기</h1>
<p>다시 쓰기를 사용하면 들어오는 요청 경로를 다른 대상 경로로 매핑할 수 있습니다.</p>
<p>다시 쓰기는 URL 프록시 역할을 하며 대상 경로를 가리고 있어 사용자가 사이트에서 위치를 변경하지 않은 것처럼 보입니다. 이와는 대조적으로 리다이렉트는 새 페이지로 리디렉션하고 URL 변경을 표시합니다.</p>
<p>다시 쓰기를 사용하려면 next.config.js 파일에서 다시 쓰기 키를 사용할 수 있습니다.</p>
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
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/about"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>리라이트는 클라이언트 측 라우팅에 적용됩니다. 위 예시에서 <code v-pre>Link href=&quot;/about&quot;</code>은 리라이트가 적용됩니다.</p>
<p>리라이트는 source와 destination 속성을 가진 객체를 포함하는 배열 또는 객체의 배열을 반환할 것으로 예상되는 비동기 함수입니다:</p>
<ul>
<li>source: String - 들어오는 요청 경로 패턴입니다.</li>
<li>destination: String - 라우팅할 경로입니다.</li>
<li>basePath: false 또는 undefined - false면 일치하는 경우 basePath가 포함되지 않습니다. 외부 리라이트에만 사용할 수 있습니다.</li>
<li>locale: false 또는 undefined - 일치하는 경우 로케일을 포함시키지 말아야 하는지입니다.</li>
<li>has는 type, key, value 속성을 갖는 has 객체의 배열입니다.</li>
<li>missing는 type, key, value 속성을 갖는 missing 객체의 배열입니다.</li>
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
<p>리라이트 함수가 배열을 반환할 때, 리라이트는 파일 시스템(페이지 및 /public 파일)을 확인한 후에 적용되고 동적 경로보다 먼저 적용됩니다. 리라이트 함수가 특정 형태의 배열 객체를 반환할 때는 이 동작을 변경하고 더 세밀하게 제어할 수 있습니다. 이 기능은 Next.js의 v10.1에서 추가되었습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">beforeFiles</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// 이 리라이트는 헤더/리다이렉션 이후, _next/public 파일을 포함한 모든 파일 이전에 확인됩니다.</span>
        <span class="token comment">// 즉, 페이지 파일을 덮어쓸 수 있습니다.</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/some-page"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/somewhere-else"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">has</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"query"</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"overrideMe"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">afterFiles</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// 이 리라이트는 페이지/퍼블릭 파일 이후, 동적 경로 이전에 확인됩니다.</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/non-existent"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/somewhere-else"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// 이 리라이트는 페이지/퍼블릭 파일과 동적 경로 이후에 확인됩니다.</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/:path*"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://my-old-site.com/:path*</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>참고: beforeFiles에서의 리라이트는 소스와 일치한 후에 즉시 파일 시스템/동적 경로를 확인하지 않고, 모든 beforeFiles가 확인될 때까지 계속됩니다.</p>
</blockquote>
<p>Next.js에서 라우트가 확인되는 순서는 다음과 같습니다:</p>
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
<li>헤더가 확인/적용되었습니다</li>
<li>리디렉션이 확인/적용되었습니다</li>
<li>beforeFiles 리라이트가 확인/적용되었습니다</li>
<li>public 디렉토리의 정적 파일, _next/static 파일 및 비동적 페이지가 확인/제공되었습니다</li>
<li>afterFiles 리라이트가 확인/적용되었습니다. 이들 중 하나의 리라이트가 일치하면 각 일치 후 동적 경로/정적 파일을 확인합니다</li>
<li>fallback 리라이트가 확인/적용되었습니다. 이들은 404 페이지를 렌더링하기 전과 동적 경로/모든 정적 에셋을 확인한 후에 적용됩니다. getStaticPaths에서 fallback: true/<code v-pre>blocking</code>를 사용하는 경우, next.config.js에서 정의된 fallback 리라이트는 실행되지 않습니다.</li>
</ul>
<h2 id="리라이트-매개변수" tabindex="-1"><a class="header-anchor" href="#리라이트-매개변수" aria-hidden="true">#</a> 리라이트 매개변수</h2>
<p>리라이트에 매개변수를 사용할 때, 대상에 매개변수 중 하나도 사용되지 않으면 기본적으로 쿼리에 매개변수가 전달됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/old-about/:path*"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/about"</span><span class="token punctuation">,</span> <span class="token comment">// 여기에는 :path 매개변수가 사용되지 않으므로 자동적으로 쿼리에 전달됩니다</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>목적지에 매개변수가 사용되면 쿼리에 매개변수가 자동으로 전달되지 않습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/docs/:path*"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/:path*"</span><span class="token punctuation">,</span> <span class="token comment">// 여기서 :path 매개변수를 사용하므로 자동으로 쿼리로 전달되지 않습니다</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이미 목적지에서 사용 중인 매개변수가 있을 경우, 목적지에 쿼리를 명시하여 수동으로 매개변수를 전달할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/:first/:second"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/:first?second=:second"</span><span class="token punctuation">,</span>
        <span class="token comment">// :first 매개변수가 목적지에서 사용되기 때문에 :second 매개변수가 자동으로 쿼리에 추가되지 않지만</span>
        <span class="token comment">// 위와 같이 수동으로 추가할 수 있습니다</span>
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
<blockquote>
<p>좋은 정보: 자동 정적 최적화 또는 리라이트에서 프리렌더링 매개변수로 가져온 정적 페이지는 수분화 후에 클라이언트에서 구문 분석되어 쿼리로 제공됩니다.</p>
</blockquote>
<h2 id="경로-일치" tabindex="-1"><a class="header-anchor" href="#경로-일치" aria-hidden="true">#</a> 경로 일치</h2>
<p>경로 일치는 허용됩니다. 예를 들어 /blog/:slug는 /blog/hello-world와 일치합니다 (중첩된 경로 없음):</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/blog/:slug"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/news/:slug"</span><span class="token punctuation">,</span> <span class="token comment">// 일치하는 매개변수는 대상에서 사용할 수 있음</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<p>와일드카드 경로 매칭을 위해 매개변수 뒤에 <em>을 사용할 수 있습니다. 예를 들어 /blog/:slug</em>는 /blog/a/b/c/d/hello-world를 매칭합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/blog/:slug*"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/news/:slug*"</span><span class="token punctuation">,</span> <span class="token comment">// 일치하는 매개변수는 대상(destination)에서 사용할 수 있습니다</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="정규-표현식-경로-매칭" tabindex="-1"><a class="header-anchor" href="#정규-표현식-경로-매칭" aria-hidden="true">#</a> 정규 표현식 경로 매칭</h3>
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
<p>정규식 경로를 일치시키려면 매개변수 뒤에 괄호 안에 정규식을 넣어야 합니다. 예를 들어 /blog/:slug(\d{1,})는 /blog/123은 일치하지만 /blog/abc는 일치하지 않습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/old-blog/:post(\\d{1,})"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/blog/:post"</span><span class="token punctuation">,</span> <span class="token comment">//일치하는 매개변수를 대상(destinatio)에서 사용할 수 있습니다.</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>아래 문자들 (, ), {, }, [, ], |, , ^, ., :, *, +, -, ?, $은 정규식 경로 일치에 사용되므로 소스에서 비특수 값으로 사용될 때는 \를 추가하여 이스케이프 처리해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// 요청된 `/english(default)/something`와 일치할 것입니다</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/english\\(default\\)/:slug"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/en-us/:slug"</span><span class="token punctuation">,</span>
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
<h2 id="헤더-쿠키-및-쿼리-일치" tabindex="-1"><a class="header-anchor" href="#헤더-쿠키-및-쿼리-일치" aria-hidden="true">#</a> 헤더, 쿠키 및 쿼리 일치</h2>
<p>헤더, 쿠키 또는 쿼리 값이 일치하는 경우 리다이렉션을 일치시키기 위해 has 필드를 사용하거나 missing 필드를 사용할 수 있습니다. 소스와 모든 has 아이템이 일치하고 모든 missing 아이템이 일치하지 않아야 리다이렉션이 적용됩니다.</p>
<p>has 및 missing 아이템에는 다음과 같은 필드가 포함될 수 있습니다:</p>
<ul>
<li>type: String - header, cookie, host 또는 query 중 하나여야 합니다.</li>
<li>key: String - 해당 유형을 선택한 키여야 합니다.</li>
<li>value: String 또는 undefined - 확인할 값을 나타내며 undefined인 경우 모든 값이 일치합니다. 특정 값의 일부를 캡처하는 데 정규식과 같은 문자열을 사용할 수 있습니다. 예: 값이 first-(?<code v-pre>paramName</code>.*) 인 경우 first-second이면 대상에서 :paramName으로 second를 사용할 수 있습니다.</li>
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
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token comment">// 만약 헤더 `x-rewrite-me`가 존재한다면,</span>
      <span class="token comment">// 이 리라이트가 적용됩니다</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/:path*"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">has</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"header"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"x-rewrite-me"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/another-page"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 만약 헤더 `x-rewrite-me`가 존재하지 않는다면,</span>
      <span class="token comment">// 이 리라이트가 적용됩니다</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/:path*"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">missing</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"header"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"x-rewrite-me"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/another-page"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 만약 소스, 쿼리, 쿠키가 일치한다면,</span>
      <span class="token comment">// 이 리라이트가 적용됩니다</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/specific/:path*"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">has</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"query"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"page"</span><span class="token punctuation">,</span>
            <span class="token comment">// 페이지 값은 명명된 캡처 그룹인 (?&lt;page>home)을 사용하지 않으므로</span>
            <span class="token comment">// 대상에서 페이지 값은 사용할 수 없습니다</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"home"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"cookie"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"authorized"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"true"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/:path*/home"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 헤더 `x-authorized`가 존재하고</span>
      <span class="token comment">// 일치하는 값이 포함된 경우, 이 리라이트가 적용됩니다</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/:path*"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">has</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"header"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"x-authorized"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"(?&lt;authorized>yes|true)"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/home?authorized=:authorized"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 호스트가 `example.com`인 경우,</span>
      <span class="token comment">// 이 리라이트가 적용됩니다</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/:path*"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">has</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"host"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"example.com"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/another-page"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="외부-url로-리다이렉트" tabindex="-1"><a class="header-anchor" href="#외부-url로-리다이렉트" aria-hidden="true">#</a> 외부 URL로 리다이렉트</h2>
<p>리라이트를 사용하면 외부 URL로 리다이렉트할 수 있습니다. 이것은 Next.js를 점진적으로 도입하는 데 특히 유용합니다. 다음은 메인 앱의 /blog 경로를 외부 사이트로 리다이렉팅하는 예제 리라이트입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/blog"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"https://example.com/blog"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/blog/:slug"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"https://example.com/blog/:slug"</span><span class="token punctuation">,</span> <span class="token comment">// 일치하는 매개변수는 대상에서 사용할 수 있습니다</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>만약 trailingSlash: true를 사용 중이라면 소스 파라미터에 trailing slash를 추가해야 합니다. 대상 서버가 trailing slash를 예상한다면 대상 파라미터에도 포함되어야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">trailingSlash</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/blog/"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"https://example.com/blog/"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/blog/:path*/"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"https://example.com/blog/:path*/"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="next-js의-점진적-적용" tabindex="-1"><a class="header-anchor" href="#next-js의-점진적-적용" aria-hidden="true">#</a> Next.js의 점진적 적용</h3>
<p>모든 Next.js 경로 확인 후에도 기존 웹사이트로 프록시를 포용할 수 있습니다.</p>
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
<p>다음과 같이 변경하면 더 많은 페이지를 Next.js로 이동할 때 다시 작성 구성을 변경할 필요가 없습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/:path*"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://custom-routes-proxying-endpoint.vercel.app/:path*</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="basepath-지원하는-리라이트" tabindex="-1"><a class="header-anchor" href="#basepath-지원하는-리라이트" aria-hidden="true">#</a> basePath 지원하는 리라이트</h3>
<p>basePath 지원을 활용하여 리라이트하는 경우 모든 소스 및 대상은 basePath로 자동으로 접두사가 붙습니다. 또한 rewrite에 basePath: false를 추가하지 않는 한 basePath가 자동으로 추가됩니다.</p>
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
  <span class="token literal-property property">basePath</span><span class="token operator">:</span> <span class="token string">"/docs"</span><span class="token punctuation">,</span>

  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/with-basePath"</span><span class="token punctuation">,</span> <span class="token comment">// 자동으로 /docs/with-basePath로 변경됩니다</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/another"</span><span class="token punctuation">,</span> <span class="token comment">// 자동으로 /docs/another로 변경됩니다</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// basePath: false가 설정되어 있으므로 /without-basePath를 /docs에 추가하지 않습니다</span>
        <span class="token comment">// 참고: 이는 `destination: '/another'`와 같은 내부 리다이렉트에는 사용할 수 없습니다</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/without-basePath"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"https://example.com"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">basePath</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="i18n-지원하는-리다이렉션" tabindex="-1"><a class="header-anchor" href="#i18n-지원하는-리다이렉션" aria-hidden="true">#</a> i18n 지원하는 리다이렉션</h3>
<p>리다이렉션에서 i18n 지원을 활용할 때, 각 source와 destination은 설정된 로케일을 처리하기 위해 자동으로 접두어가 붙습니다. 단, 리다이렉트에 locale: false를 추가하지 않으면 올바르게 일치시키려면 source와 destination에 로케일을 접두어로 붙여야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">i18n</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"en"</span><span class="token punctuation">,</span> <span class="token string">"fr"</span><span class="token punctuation">,</span> <span class="token string">"de"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">defaultLocale</span><span class="token operator">:</span> <span class="token string">"en"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/with-locale"</span><span class="token punctuation">,</span> <span class="token comment">// 모든 로케일을 자동으로 처리합니다</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/another"</span><span class="token punctuation">,</span> <span class="token comment">// 로케일을 자동으로 전달합니다</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// locale: false가 설정되어 있으므로 로케일을 자동으로 처리하지 않습니다</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/nl/with-locale-manual"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/nl/another"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// `en`이 defaultLocale이므로 '/'에 일치합니다</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/en"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/en/another"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// locale: false가 설정되어 있어도 모든 로케일에 일치할 수 있습니다</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/:locale/api-alias/:path*"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/api/:path*"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// /(en|fr|de)/(.*)로 변환되어 최상위 수준의 `/` 또는 `/fr` 경로와는 일치하지 않습니다</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/(.*)"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">"/another"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="버전-기록" tabindex="-1"><a class="header-anchor" href="#버전-기록" aria-hidden="true">#</a> 버전 기록</h2>
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
<td>헤더 추가됨.</td>
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
