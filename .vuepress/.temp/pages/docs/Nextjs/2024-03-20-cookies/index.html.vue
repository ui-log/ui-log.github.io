<template><div><h1 id="nextjs-14-쿠키-사용-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14-쿠키-사용-방법" aria-hidden="true">#</a> Nextjs 14 쿠키 사용 방법</h1>
<p>쿠키 함수를 사용하면 서버 구성 요소에서 HTTP 수신 요청 쿠키를 읽거나 서버 액션 또는 라우트 핸들러에서 발신 요청 쿠키를 작성할 수 있습니다.</p>
<blockquote>
<p>알아두면 좋은 사실: cookies()는 미리 알 수없는 값이 반환되는 동적 함수이며, 레이아웃이나 페이지에서 사용하면 요청 시 동적 렌더링으로 라우트를 선택합니다.</p>
</blockquote>
<h2 id="cookies-get-name" tabindex="-1"><a class="header-anchor" href="#cookies-get-name" aria-hidden="true">#</a> cookies().get(name)</h2>
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
<p>쿠키 이름을 가져와 이름과 값을 포함한 객체를 반환하는 메서드입니다. 이름이 포함된 쿠키를 찾을 수 없는 경우에는 undefined를 반환합니다. 여러 개의 쿠키가 일치하는 경우, 첫 번째 일치하는 항목만 반환합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> cookies <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/headers"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cookieStore <span class="token operator">=</span> <span class="token function">cookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> theme <span class="token operator">=</span> cookieStore<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"theme"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token string">"..."</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cookies-getall" tabindex="-1"><a class="header-anchor" href="#cookies-getall" aria-hidden="true">#</a> cookies().getAll()</h2>
<p>이 메서드는 get과 유사하지만 일치하는 이름을 가진 모든 쿠키의 목록을 반환합니다. 이름이 지정되지 않은 경우, 사용 가능한 모든 쿠키를 반환합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> cookies <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/headers"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cookieStore <span class="token operator">=</span> <span class="token function">cookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> cookieStore<span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">cookie</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>cookie<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>Name<span class="token operator">:</span> <span class="token punctuation">{</span>cookie<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>Value<span class="token operator">:</span> <span class="token punctuation">{</span>cookie<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cookies-has-name" tabindex="-1"><a class="header-anchor" href="#cookies-has-name" aria-hidden="true">#</a> cookies().has(name)</h2>
<p>특정 쿠키 이름을 가져와 해당 쿠키가 존재하는지 여부를 기반으로 true(존재함) 또는 false(존재하지 않음)를 반환합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> cookies <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/headers"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cookieStore <span class="token operator">=</span> <span class="token function">cookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> hasCookie <span class="token operator">=</span> cookieStore<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">"theme"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token string">"..."</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="cookies-set-name-value-options" tabindex="-1"><a class="header-anchor" href="#cookies-set-name-value-options" aria-hidden="true">#</a> cookies().set(name, value, options)</h2>
<p>이 메서드는 쿠키 이름, 값 및 옵션을 가져와서 나가는 요청 쿠키를 설정합니다.</p>
<blockquote>
<p>알아두면 좋은 사실: HTTP는 스트리밍이 시작된 후에 쿠키를 설정하는 것을 허용하지 않습니다. 그래서 서버 액션이나 라우트 핸들러에서 .set()을 사용해야 합니다.</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"use server"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> cookies <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/headers"</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">cookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"lee"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 또는</span>
  <span class="token function">cookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"lee"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">secure</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 또는</span>
  <span class="token function">cookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"name"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"lee"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">httpOnly</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="쿠키-삭제하기" tabindex="-1"><a class="header-anchor" href="#쿠키-삭제하기" aria-hidden="true">#</a> 쿠키 삭제하기</h2>
<blockquote>
<p>유용한 정보: 서버 액션 또는 라우트 핸들러에서만 쿠키를 삭제할 수 있습니다.</p>
</blockquote>
<p>쿠키를 삭제하는 여러 옵션이 있습니다:</p>
<h3 id="cookies-delete-name" tabindex="-1"><a class="header-anchor" href="#cookies-delete-name" aria-hidden="true">#</a> cookies().delete(name)</h3>
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
<p>특정 이름을 가진 쿠키를 명시적으로 삭제할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'use server'</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> cookies <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/headers'</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token keyword">delete</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">cookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cookies-set-name" tabindex="-1"><a class="header-anchor" href="#cookies-set-name" aria-hidden="true">#</a> cookies().set(name, ``)</h3>
<p>또는 동일한 이름과 빈 값을 가진 새로운 쿠키를 설정할 수도 있어요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'use server'</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> cookies <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/headers'</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token keyword">delete</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">cookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두면 좋아요: .set()은 서버 액션이나 라우트 핸들러에서만 사용할 수 있습니다.</p>
</blockquote>
<h3 id="cookies-set-name-value-maxage-0" tabindex="-1"><a class="header-anchor" href="#cookies-set-name-value-maxage-0" aria-hidden="true">#</a> cookies().set(name, value, { maxAge: 0 })</h3>
<p>maxAge를 0으로 설정하면 쿠키를 즉시 만료시킬 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'use server'</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> cookies <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/headers'</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token keyword">delete</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">cookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'value'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">maxAge</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cookies-set-name-value-expires-timestamp" tabindex="-1"><a class="header-anchor" href="#cookies-set-name-value-expires-timestamp" aria-hidden="true">#</a> cookies().set(name, value, { expires: timestamp })</h3>
<p>Setting expires to any value in the past will immediately expire a cookie.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'use server'</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> cookies <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/headers'</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token keyword">delete</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> oneDay <span class="token operator">=</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span>
  <span class="token function">cookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'value'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">expires</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> oneDay <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
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
<blockquote>
<p>좋은 정보: .set()이 호출된 동일한 도메인에 속한 쿠키만 삭제할 수 있습니다. 또한 삭제하려는 쿠키와 동일한 프로토콜(HTTP 또는 HTTPS)에서 코드를 실행해야 합니다.</p>
</blockquote>
<h2 id="버전-역사" tabindex="-1"><a class="header-anchor" href="#버전-역사" aria-hidden="true">#</a> 버전 역사</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
| Version | Changes         |
| ------- | --------------- |
| v13.0.0 | cookies 도입됨. |

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
</div></template>
