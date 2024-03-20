<template><div><h1 id="nextjs-14-페이지-컴포넌트-작성-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14-페이지-컴포넌트-작성-방법" aria-hidden="true">#</a> Nextjs 14 페이지 컴포넌트 작성 방법</h1>
<p>페이지는 경로별로 고유한 UI입니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span> params<span class="token punctuation">,</span> searchParams <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> params<span class="token operator">:</span> <span class="token punctuation">{</span> slug<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> searchParams<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>My Page<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="속성" tabindex="-1"><a class="header-anchor" href="#속성" aria-hidden="true">#</a> 속성</h2>
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
<h3 id="매개변수-선택-사항" tabindex="-1"><a class="header-anchor" href="#매개변수-선택-사항" aria-hidden="true">#</a> 매개변수 (선택 사항)</h3>
<p>해당 페이지로 이어지는 루트 세그먼트에서 동적 경로 매개변수가 포함된 객체입니다. 예를 들어:</p>
<table>
<thead>
<tr>
<th>예시</th>
<th>URL</th>
<th><code v-pre>params</code></th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>app/shop/[slug]/page.js</code></td>
<td><code v-pre>/shop/1</code></td>
<td><code v-pre>{ slug: '1' }</code></td>
</tr>
<tr>
<td><code v-pre>app/shop/[category]/[item]/page.js</code></td>
<td><code v-pre>/shop/1/2</code></td>
<td><code v-pre>{ category: '1', item: '2' }</code></td>
</tr>
<tr>
<td><code v-pre>app/shop/[...slug]/page.js</code></td>
<td><code v-pre>/shop/1/2</code></td>
<td><code v-pre>{ slug: ['1', '2'] }</code></td>
</tr>
</tbody>
</table>
<h3 id="searchparams-선택-사항" tabindex="-1"><a class="header-anchor" href="#searchparams-선택-사항" aria-hidden="true">#</a> searchParams (선택 사항)</h3>
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
<p>현재 URL의 검색 매개변수를 포함한 객체입니다. 예를 들어:</p>
<table>
<thead>
<tr>
<th>URL</th>
<th>searchParams</th>
</tr>
</thead>
<tbody>
<tr>
<td>/shop?a=1</td>
<td>{ a: '1' }</td>
</tr>
<tr>
<td>/shop?a=1&amp;b=2</td>
<td>{ a: '1', b: '2' }</td>
</tr>
<tr>
<td>/shop?a=1&amp;a=2</td>
<td>{ a: ['1', '2'] }</td>
</tr>
</tbody>
</table>
<blockquote>
<p>알아두면 좋아요:
searchParams는 사전에 알 수없는 값이므로 동적 API입니다. 이를 사용하면 페이지가 요청 시 동적 렌더링으로 전환됩니다.
searchParams는 URLSearchParams 인스턴스가 아닌 일반 JavaScript 객체를 반환합니다.</p>
</blockquote>
<h2 id="버전-이력" tabindex="-1"><a class="header-anchor" href="#버전-이력" aria-hidden="true">#</a> 버전 이력</h2>
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
<table>
<thead>
<tr>
<th>Version</th>
<th>Changes</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v13.0.0</code></td>
<td><code v-pre>page</code> introduced.</td>
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
