<template><div><h1 id="nextjs-14-클라이언트-컴포넌트에서-현재-라우트-정보-가져오는-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14-클라이언트-컴포넌트에서-현재-라우트-정보-가져오는-방법" aria-hidden="true">#</a> Nextjs 14 클라이언트 컴포넌트에서 현재 라우트 정보 가져오는 방법</h1>
<p>useSelectedLayoutSegment는 클라이언트 컴포넌트 후크로, 해당 컴포넌트에서 호출된 레이아웃 아래 레벨의 활성 라우트 세그먼트를 읽을 수 있게 해줍니다.</p>
<p>부모 레이아웃 내의 탭과 같은 내비게이션 UI에 유용하며, 활성 자식 세그먼트에 따라 스타일이 변경되는 경우에 사용할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useSelectedLayoutSegment <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ExampleClientComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> segment <span class="token operator">=</span> <span class="token function">useSelectedLayoutSegment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>활성 세그먼트<span class="token operator">:</span> <span class="token punctuation">{</span>segment<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<p>알아두면 좋은 사항:
useSelectedLayoutSegment은 클라이언트 컴포넌트 후크이며, 레이아웃은 기본적으로 서버 컴포넌트이므로 useSelectedLayoutSegment는 일반적으로 레이아웃으로 가져온 클라이언트 컴포넌트를 통해 호출됩니다.
useSelectedLayoutSegment는 한 수준 아래의 세그먼트만 반환합니다. 모든 활성 세그먼트를 반환하려면 useSelectedLayoutSegments를 참조하십시오.</p>
</blockquote>
<h2 id="매개변수" tabindex="-1"><a class="header-anchor" href="#매개변수" aria-hidden="true">#</a> 매개변수</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> segment <span class="token operator">=</span> <span class="token function">useSelectedLayoutSegment</span><span class="token punctuation">(</span>parallelRoutesKey<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>useSelectedLayoutSegment은 선택 사항으로 parallelRoutesKey를 허용하며, 해당 슬롯 내에서 활성 경로 세그먼트를 읽을 수 있습니다.</p>
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
<h2 id="반환값" tabindex="-1"><a class="header-anchor" href="#반환값" aria-hidden="true">#</a> 반환값</h2>
<p>useSelectedLayoutSegment 함수는 활성 세그먼트의 문자열을 반환하거나 세그먼트가 없는 경우 null을 반환합니다.</p>
<p>예를 들어, 아래 레이아웃과 URL이 주어졌을 때, 반환되는 세그먼트는 다음과 같습니다:</p>
<table>
<thead>
<tr>
<th>레이아웃</th>
<th>방문한 URL</th>
<th>반환된 세그먼트</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>app/layout.js</code></td>
<td><code v-pre>/</code></td>
<td><code v-pre>null</code></td>
</tr>
<tr>
<td><code v-pre>app/layout.js</code></td>
<td><code v-pre>/dashboard</code></td>
<td><code v-pre>'dashboard'</code></td>
</tr>
<tr>
<td><code v-pre>app/dashboard/layout.js</code></td>
<td><code v-pre>/dashboard</code></td>
<td><code v-pre>null</code></td>
</tr>
<tr>
<td><code v-pre>app/dashboard/layout.js</code></td>
<td><code v-pre>/dashboard/settings</code></td>
<td><code v-pre>'settings'</code></td>
</tr>
<tr>
<td><code v-pre>app/dashboard/layout.js</code></td>
<td><code v-pre>/dashboard/analytics</code></td>
<td><code v-pre>'analytics'</code></td>
</tr>
<tr>
<td><code v-pre>app/dashboard/layout.js</code></td>
<td><code v-pre>/dashboard/analytics/monthly</code></td>
<td><code v-pre>'analytics'</code></td>
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
<h2 id="예시" tabindex="-1"><a class="header-anchor" href="#예시" aria-hidden="true">#</a> 예시</h2>
<h3 id="활성-링크-컴포넌트-만들기" tabindex="-1"><a class="header-anchor" href="#활성-링크-컴포넌트-만들기" aria-hidden="true">#</a> 활성 링크 컴포넌트 만들기</h3>
<p>useSelectedLayoutSegment를 사용하여 활성 세그먼트에 따라 스타일이 변경되는 활성 링크 컴포넌트를 만들 수 있습니다. 예를 들어, 블로그의 사이드바에 특집 포스트 목록을 표시하는 경우:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useSelectedLayoutSegment <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>

<span class="token comment">// 이 *client* 컴포넌트는 블로그 레이아웃으로 가져올 수 있습니다</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">BlogNavLink</span><span class="token punctuation">(</span><span class="token punctuation">{</span> slug<span class="token punctuation">,</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> slug<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// `/blog/hello-world`로 이동시 'hello-world'를 선택된 레이아웃 세그먼트로 반환</span>
  <span class="token keyword">const</span> segment <span class="token operator">=</span> <span class="token function">useSelectedLayoutSegment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> isActive <span class="token operator">=</span> slug <span class="token operator">===</span> segment<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Link
      href<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/blog/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>slug<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span>
      <span class="token comment">// 링크가 활성 상태인지에 따라 스타일 변경</span>
      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontWeight<span class="token operator">:</span> isActive <span class="token operator">?</span> <span class="token string">"bold"</span> <span class="token operator">:</span> <span class="token string">"normal"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">></span>
      <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 클라이언트 컴포넌트를 부모 레이아웃(Server 컴포넌트)에 가져오기</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BlogNavLink <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./blog-nav-link"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> getFeaturedPosts <span class="token keyword">from</span> <span class="token string">"./get-featured-posts"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Layout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> featuredPosts <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getFeaturedPosts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token punctuation">{</span>featuredPosts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>post<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>BlogNavLink slug<span class="token operator">=</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>slug<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>BlogNavLink<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="버전-기록" tabindex="-1"><a class="header-anchor" href="#버전-기록" aria-hidden="true">#</a> 버전 기록</h2>
<table>
<thead>
<tr>
<th>버전</th>
<th>변경 내역</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v13.0.0</code></td>
<td><code v-pre>useSelectedLayoutSegment</code> 도입</td>
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
