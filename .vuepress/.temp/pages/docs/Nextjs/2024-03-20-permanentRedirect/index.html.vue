<template><div><h1 id="nextjs-14에서-다른-url로-리디렉션-하는-방법-permanentredirect" tabindex="-1"><a class="header-anchor" href="#nextjs-14에서-다른-url로-리디렉션-하는-방법-permanentredirect" aria-hidden="true">#</a> Nextjs 14에서 다른 URL로 리디렉션 하는 방법(permanentRedirect)</h1>
<p>permanentRedirect 함수를 사용하면 사용자를 다른 URL로 리디렉션할 수 있습니다. permanentRedirect는 서버 구성 요소, 클라이언트 구성 요소, 라우트 핸들러 및 서버 액션에서 사용할 수 있습니다.</p>
<p>스트리밍 컨텍스트에서 사용될 때 클라이언트 측에서 리디렉션을 발생시키는 메타 태그를 삽입합니다. 서버 액션에서 사용되는 경우 호출자에게 303 HTTP 리디렉션 응답을 제공합니다. 그렇지 않으면 호출자에게 308 (영구) HTTP 리디렉션 응답을 제공할 것입니다.</p>
<p>리소스가 없는 경우 notFound 함수를 대신 사용할 수 있습니다.</p>
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
<p>유용한 정보: 영구적인 308 HTTP 리디렉션이 아닌 임시적인 307 HTTP 리디렉션을 선호하는 경우, 대신 리디렉션 함수를 사용할 수 있습니다.</p>
</blockquote>
<h2 id="매개변수" tabindex="-1"><a class="header-anchor" href="#매개변수" aria-hidden="true">#</a> 매개변수</h2>
<p>permanentRedirect 함수는 두 개의 인수를 받습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">permanentRedirect</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>표를 Markdown 형식으로 변경하겠습니다.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>| Parameter | Type              | Description                                       |
| --------- | ----------------- | ------------------------------------------------- |
| path      | `string`          | 리디렉트할 URL입니다. 상대 또는 절대 경로일 수 있습니다. |
| type      | `'replace'` (기본값) 또는 `'push'`(Server Actions의 기본값) | 수행할 리디렉트 유형입니다.                 |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>기본적으로 permanentRedirect는 Server Actions에서 push(브라우저 히스토리 스택에 새 항목 추가)를 사용하고, 다른 곳에서는 replace(브라우저 히스토리 스택에 현재 URL을 대체)를 사용합니다. 이 동작은 type 매개변수를 지정하여 재정의할 수 있습니다.</p>
<p>type 매개변수는 Server Components에서 사용할 때 아무 효과가 없습니다.</p>
<h2 id="반환값" tabindex="-1"><a class="header-anchor" href="#반환값" aria-hidden="true">#</a> 반환값</h2>
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
<p>permanentRedirect 함수는 어떤 값도 반환하지 않습니다.</p>
<h2 id="예시" tabindex="-1"><a class="header-anchor" href="#예시" aria-hidden="true">#</a> 예시</h2>
<p>permanentRedirect() 함수를 호출하면 NEXT_REDIRECT 오류가 발생하고 throw된 루트 세그먼트의 렌더링이 중단됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> permanentRedirect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchTeam</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Profile</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> team <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchTeam</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>team<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">permanentRedirect</span><span class="token punctuation">(</span><span class="token string">"/login"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ...</span>
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
<blockquote>
<p>좋은 정보: <code v-pre>permanentRedirect</code>를 사용할 때는 <code v-pre>return permanentRedirect()</code>를 사용할 필요가 없습니다. TypeScript <code v-pre>never</code> 타입을 사용합니다.</p>
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
