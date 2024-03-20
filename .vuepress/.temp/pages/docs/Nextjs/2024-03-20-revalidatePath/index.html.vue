<template><div><h1 id="nextjs-14에서-특정-페이지-캐시-날리는-방법-revalidatepath" tabindex="-1"><a class="header-anchor" href="#nextjs-14에서-특정-페이지-캐시-날리는-방법-revalidatepath" aria-hidden="true">#</a> Nextjs 14에서 특정 페이지 캐시 날리는 방법(revalidatePath)</h1>
<p>revalidatePath을 사용하면 지정된 경로에 대해 캐시된 데이터를 필요할 때 지울 수 있습니다.</p>
<blockquote>
<p>알아두면 좋은 사항:
revalidatePath은 Node.js 및 Edge 런타임에서 모두 사용할 수 있습니다.
revalidatePath은 포함된 경로가 다음에 방문될 때만 캐시를 무효화합니다. 이는 동적 경로 세그먼트와 함께 revalidatePath를 호출해도 즉시 많은 재검증을 트리거하지 않는다는 것을 의미합니다. 무효화는 해당 경로가 다음에 방문될 때에만 발생합니다.
현재 revalidatePath는 클라이언트 측 라우터 캐시의 모든 경로를 무효화합니다. 이 동작은 일시적이며 앞으로 특정 경로에만 적용되도록 업데이트될 예정입니다.
revalidatePath를 사용하면 서버 측 라우트 캐시에서만 특정 경로를 무효화합니다.</p>
</blockquote>
<h2 id="매개변수" tabindex="-1"><a class="header-anchor" href="#매개변수" aria-hidden="true">#</a> 매개변수</h2>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">revalidatePath</span><span class="token punctuation">(</span>path<span class="token operator">:</span> string<span class="token punctuation">,</span> type<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">'page'</span> <span class="token operator">|</span> <span class="token string">'layout'</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>path: 데이터를 재유효화하려는 파일 시스템 경로를 나타내는 문자열(예: /product/[slug]/page) 또는 리터럴 경로 세그먼트(예: /product/123) 중 하나입니다. 1024자보다 작아야 합니다. 이 값은 대소문자를 구분합니다.</li>
<li>type: (선택 사항) 경로 유형을 변경하는 데 사용되는 <code v-pre>page</code> 또는 <code v-pre>layout</code> 문자열입니다. 경로에 동적 세그먼트가 포함된 경우(예: /product/[slug]/page), 이 매개변수는 필수입니다.</li>
</ul>
<h2 id="반환값" tabindex="-1"><a class="header-anchor" href="#반환값" aria-hidden="true">#</a> 반환값</h2>
<p>revalidatePath 함수는 어떤 값도 반환하지 않습니다.</p>
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
<h2 id="예시" tabindex="-1"><a class="header-anchor" href="#예시" aria-hidden="true">#</a> 예시</h2>
<h3 id="특정-url-다시-유효성-검사하기" tabindex="-1"><a class="header-anchor" href="#특정-url-다시-유효성-검사하기" aria-hidden="true">#</a> 특정 URL 다시 유효성 검사하기</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> revalidatePath <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/cache"</span><span class="token punctuation">;</span>
<span class="token function">revalidatePath</span><span class="token punctuation">(</span><span class="token string">"/blog/post-1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>다음 페이지 방문 시 특정 URL을 다시 유효성 검사할 수 있습니다.</p>
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
<h3 id="페이지-경로-다시-유효성-검사하기" tabindex="-1"><a class="header-anchor" href="#페이지-경로-다시-유효성-검사하기" aria-hidden="true">#</a> 페이지 경로 다시 유효성 검사하기</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> revalidatePath <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/cache"</span><span class="token punctuation">;</span>
<span class="token function">revalidatePath</span><span class="token punctuation">(</span><span class="token string">"/blog/[slug]"</span><span class="token punctuation">,</span> <span class="token string">"page"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 또는 경로 그룹을 사용하는 경우</span>
<span class="token function">revalidatePath</span><span class="token punctuation">(</span><span class="token string">"/(main)/post/[slug]"</span><span class="token punctuation">,</span> <span class="token string">"page"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 코드는 다음 페이지 방문 시 제공된 페이지 파일과 일치하는 모든 URL을 다시 유효성 검사합니다. 이는 특정 페이지 아래에 있는 페이지는 무효화하지 않습니다. 예를 들어, /blog/[slug]는 /blog/[slug]/[author]을 무효화하지 않습니다.</p>
<h3 id="레이아웃-경로-다시-유효성-검사하기" tabindex="-1"><a class="header-anchor" href="#레이아웃-경로-다시-유효성-검사하기" aria-hidden="true">#</a> 레이아웃 경로 다시 유효성 검사하기</h3>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> revalidatePath <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/cache"</span><span class="token punctuation">;</span>
<span class="token function">revalidatePath</span><span class="token punctuation">(</span><span class="token string">"/blog/[slug]"</span><span class="token punctuation">,</span> <span class="token string">"layout"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 또는 라우트 그룹을 사용하여</span>
<span class="token function">revalidatePath</span><span class="token punctuation">(</span><span class="token string">"/(main)/post/[slug]"</span><span class="token punctuation">,</span> <span class="token string">"layout"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음 페이지 방문시 제공된 레이아웃 파일과 일치하는 URL을 재유효화합니다. 이는 동일한 레이아웃을 가진 하위 페이지가 다음 방문 시 재유효화되도록 합니다. 예를 들어, 위의 경우에는 /blog/[slug]/[another]도 다음 방문 시 재유효화됩니다.</p>
<h3 id="모든-데이터-재유효화" tabindex="-1"><a class="header-anchor" href="#모든-데이터-재유효화" aria-hidden="true">#</a> 모든 데이터 재유효화</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> revalidatePath <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/cache"</span><span class="token punctuation">;</span>

<span class="token function">revalidatePath</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token string">"layout"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>다음 페이지 방문 시 클라이언트 측 라우터 캐시를 퍼지하고 데이터 캐시를 재유효화합니다.</p>
<h3 id="서버-동작" tabindex="-1"><a class="header-anchor" href="#서버-동작" aria-hidden="true">#</a> 서버 동작</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"use server"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> revalidatePath <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/cache"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token function">submitForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">revalidatePath</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="라우트-핸들러" tabindex="-1"><a class="header-anchor" href="#라우트-핸들러" aria-hidden="true">#</a> 라우트 핸들러</h3>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> revalidatePath <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/cache"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">GET</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> path <span class="token operator">=</span> request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">revalidatePath</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> revalidated<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> now<span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> Response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    revalidated<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    now<span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    message<span class="token operator">:</span> <span class="token string">"재검증할 경로가 누락되었습니다"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
