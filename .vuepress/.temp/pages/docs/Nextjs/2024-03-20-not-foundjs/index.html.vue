<template><div><h1 id="nextjs-14에서-not-found-페이지-처리하는-방법-not-found-js" tabindex="-1"><a class="header-anchor" href="#nextjs-14에서-not-found-페이지-처리하는-방법-not-found-js" aria-hidden="true">#</a> Nextjs 14에서 not found 페이지 처리하는 방법(not-found.js)</h1>
<p>not-found 파일은 루트 세그먼트 내에서 notFound 함수가 throw될 때 UI를 렌더링하는 데 사용됩니다. 커스텀 UI를 제공할 뿐만 아니라 Next.js는 스트림된 응답에 대해 200 HTTP 상태 코드를 반환하고, 스트림되지 않은 응답에 대해 404를 반환합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">NotFound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>Not Found<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>요청한 리소스를 찾을 수 없습니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>홈 화면으로 돌아가기<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>유용한 정보: 예상되는 notFound() 오류를 캐치하는 것 외에도, 루트 app/not-found.js 파일은 전체 애플리케이션의 일치하지 않는 URL을 처리합니다. 이는 앱이 처리하지 않는 URL을 방문한 사용자에게 app/not-found.js 파일에 의해 내보낸 UI가 표시된다는 것을 의미합니다.</p>
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
<h2 id="속성" tabindex="-1"><a class="header-anchor" href="#속성" aria-hidden="true">#</a> 속성</h2>
<p>not-found.js 컴포넌트는 어떤 속성도 받아들이지 않습니다.</p>
<h2 id="데이터-가져오기" tabindex="-1"><a class="header-anchor" href="#데이터-가져오기" aria-hidden="true">#</a> 데이터 가져오기</h2>
<p>기본적으로, not-found은 서버 컴포넌트입니다. 데이터를 가져와서 표시하려면 async로 표시할 수 있습니다:</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> headers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/headers"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">NotFound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> headersList <span class="token operator">=</span> <span class="token function">headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> domain <span class="token operator">=</span> headersList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"host"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getSiteData</span><span class="token punctuation">(</span>domain<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>찾을 수 없음<span class="token operator">:</span> <span class="token punctuation">{</span>data<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>요청한 리소스를 찾을 수 없습니다<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/blog"</span><span class="token operator">></span>모든 게시물<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>을 보실 수 있습니다
      <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>만약 usePathname과 같은 클라이언트 컴포넌트 후크를 사용하여 경로에 따라 콘텐츠를 표시해야 한다면, 클라이언트 측에서 데이터를 가져와야 합니다.</p>
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
<td><code v-pre>v13.3.0</code></td>
<td>Root <code v-pre>app/not-found</code>가 전역 일치하지 않는 URL을 처리합니다.</td>
</tr>
<tr>
<td><code v-pre>v13.0.0</code></td>
<td><code v-pre>not-found</code>가 도입되었습니다.</td>
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
