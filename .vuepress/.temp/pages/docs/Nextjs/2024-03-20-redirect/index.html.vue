<template><div><h1 id="nextjs14-에서-다른-페이지로-리다이렉트-시키는-방법" tabindex="-1"><a class="header-anchor" href="#nextjs14-에서-다른-페이지로-리다이렉트-시키는-방법" aria-hidden="true">#</a> Nextjs14 에서 다른 페이지로 리다이렉트 시키는 방법</h1>
<p>리다이렉트 함수를 사용하면 사용자를 다른 URL로 리다이렉트할 수 있습니다. 리다이렉트는 서버 컴포넌트, 라우트 핸들러 및 서버 액션에서 사용할 수 있습니다.</p>
<p>스트리밍 컨텍스트에서 사용할 때, 이 함수는 클라이언트 측에서 리다이렉트를 발생시키기 위한 메타 태그를 삽입합니다. 서버 액션에서 사용할 때, 호출자에게 303 HTTP 리다이렉트 응답을 제공합니다. 그렇지 않은 경우, 호출자에게 307 HTTP 리다이렉트 응답을 제공합니다.</p>
<p>리소스가 존재하지 않을 때는 notFound 함수를 대신 사용할 수 있습니다.</p>
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
<p>좋은 정보:
서버 작업 및 라우트 핸들러에서는 try/catch 블록 이후에 리디렉션을 호출해야 합니다.
307 (임시)이 아닌 308 (영구) HTTP 리디렉션을 선호하는 경우, permanentRedirect 함수를 사용할 수 있습니다.</p>
</blockquote>
<h2 id="매개변수" tabindex="-1"><a class="header-anchor" href="#매개변수" aria-hidden="true">#</a> 매개변수</h2>
<p>리디렉션 함수는 두 개의 인수를 받습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">redirect</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> Parameter </span><span class="token punctuation">|</span><span class="token table-header important"> Type                                                      </span><span class="token punctuation">|</span><span class="token table-header important"> Description                                                 </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">---------</span> <span class="token punctuation">|</span> <span class="token punctuation">---------------------------------------------------------</span> <span class="token punctuation">|</span> <span class="token punctuation">-----------------------------------------------------------</span> <span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> path      </span><span class="token punctuation">|</span><span class="token table-data"> string                                                    </span><span class="token punctuation">|</span><span class="token table-data"> The URL to redirect to. Can be a relative or absolute path. </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> type      </span><span class="token punctuation">|</span><span class="token table-data"> 'replace' (default) or 'push' (default in Server Actions) </span><span class="token punctuation">|</span><span class="token table-data"> The type of redirect to perform.                            </span><span class="token punctuation">|</span>
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>기본적으로, 리디렉트는 서버 액션에서 push(브라우저 히스토리 스택에 새 항목 추가)를 사용하고, 다른 곳에서는 replace(브라우저 히스토리 스택의 현재 URL을 대체)을 사용합니다. 이 동작은 type 매개변수를 지정하여 재정의할 수 있습니다.</p>
<p>type 매개변수는 서버 컴포넌트에서 사용될 때 효과가 없습니다.</p>
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
<p>표는 Markdown 형식으로 변경되어 있습니다.</p>
<h2 id="예시" tabindex="-1"><a class="header-anchor" href="#예시" aria-hidden="true">#</a> 예시</h2>
<h3 id="서버-구성-요소" tabindex="-1"><a class="header-anchor" href="#서버-구성-요소" aria-hidden="true">#</a> 서버 구성 요소</h3>
<p>redirect() 함수를 호출하면 NEXT_REDIRECT 오류가 발생하여 해당 오류가 발생한 라우트 세그먼트의 렌더링이 중단됩니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> redirect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchTeam</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Profile</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> team <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchTeam</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>team<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">"/login"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두면 좋은 사실: TypeScript never 유형을 사용하기 때문에 return redirect()를 사용할 필요가 없습니다.</p>
</blockquote>
<h3 id="클라이언트-구성-요소" tabindex="-1"><a class="header-anchor" href="#클라이언트-구성-요소" aria-hidden="true">#</a> 클라이언트 구성 요소</h3>
<p>redirect는 클라이언트 구성 요소내 Server Action을 통해 사용할 수 있습니다. 사용자를 리디렉트하기 위해 이벤트 핸들러를 사용해야 하는 경우 useRouter 훅을 사용할 수 있습니다.</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"클라이언트 사용"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> navigate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./actions"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">ClientRedirect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token punctuation">{</span>navigate<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"id"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>button<span class="token operator">></span>제출<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"서버 사용"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> redirect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">navigate</span><span class="token punctuation">(</span>data<span class="token operator">:</span> FormData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/posts/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="자주-묻는-질문" tabindex="-1"><a class="header-anchor" href="#자주-묻는-질문" aria-hidden="true">#</a> 자주 묻는 질문</h2>
<h3 id="왜-리다이렉트가-307과-308을-사용할까요" tabindex="-1"><a class="header-anchor" href="#왜-리다이렉트가-307과-308을-사용할까요" aria-hidden="true">#</a> 왜 리다이렉트가 307과 308을 사용할까요?</h3>
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
<p>redirect()를 사용할 때 임시 리디렉트에 307 상태 코드, 영구 리디렉트에 308 상태 코드를 사용한다는 점을 알 수 있을 겁니다. 기존에는 302가 임시 리디렉트에 사용되고 301이 영구 리디렉트에 사용되었지만, 많은 브라우저에서 302를 사용할 때 리디렉트의 요청 방법을 변경하여 POST 요청을 GET 요청으로 바꾸는 경우가 있습니다.</p>
<p>&quot;/users&quot;에서 &quot;/people&quot;으로의 리디렉트 예시를 들어보겠습니다. &quot;/users&quot;로 새 사용자를 생성하는 POST 요청을 보낸다고 가정할 때, 302 임시 리디렉트를 준수한다면 POST 요청이 GET 요청으로 변경됩니다. 이는 새 사용자를 생성할 때 &quot;/people&quot;으로 POST 요청을 보내야 하는데 GET 요청을 보내는 것은 이치에 맞지 않습니다.</p>
<p>307 상태 코드의 도입을 통해 요청 방법이 유지되는 POST를 보낼 수 있습니다.</p>
<ul>
<li>302 - 임시 리디렉트, 요청 방법이 POST에서 GET으로 변경됨</li>
<li>307 - 임시 리디렉트, 요청 방법이 POST로 유지됨</li>
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
<p>리다이렉트() 메서드는 기본적으로 302 임시 리다이렉트 대신에 307을 사용하여 요청이 항상 POST 요청으로 유지됩니다.</p>
<p>HTTP 리다이렉트에 대해 더 알아보기.</p>
<h2 id="버전-히스토리" tabindex="-1"><a class="header-anchor" href="#버전-히스토리" aria-hidden="true">#</a> 버전 히스토리</h2>
<table>
<thead>
<tr>
<th>버전</th>
<th>변경 내용</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v13.0.0</code></td>
<td><code v-pre>redirect</code>가 도입됨.</td>
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
