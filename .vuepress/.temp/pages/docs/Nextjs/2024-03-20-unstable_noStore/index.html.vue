<template><div><h1 id="nextjs-에서-특정-페이지-캐싱하지-않는-방법-unstable-nostore" tabindex="-1"><a class="header-anchor" href="#nextjs-에서-특정-페이지-캐싱하지-않는-방법-unstable-nostore" aria-hidden="true">#</a> Nextjs 에서 특정 페이지 캐싱하지 않는 방법(unstable_noStore)</h1>
<p>unstable_noStore 는 정적 렌더링을 거부하고 특정 컴포넌트가 캐시되지 않아야 함을 선언적으로 나타내는 데 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> unstable_noStore <span class="token keyword">as</span> noStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/cache'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">noStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>유의할 점:
unstable_noStore 는 fetch에서 사용되는 cache: <code v-pre>no-store</code> 와 동일합니다.
unstable_noStore 는 export const dynamic = <code v-pre>force-dynamic</code> 보다 세밀하며 컴포넌트별로 사용할 수 있기 때문에 선호됩니다.</p>
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
<ul>
<li>unstable_cache 내부에서 unstable_noStore를 사용하는 경우 정적 생성을 선택하지 않습니다. 대신, 결과를 캐시할지 여부를 결정하는 데 캐시 구성을 따를 것입니다.</li>
</ul>
<h2 id="사용법" tabindex="-1"><a class="header-anchor" href="#사용법" aria-hidden="true">#</a> 사용법</h2>
<p>fetch에 추가 옵션을 전달하는 것을 선호하지 않는 경우(예: cache: <code v-pre>no-store</code> 또는 next: { revalidate: 0 }와 같은), 이러한 모든 경우의 대체로 noStore()를 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> unstable_noStore <span class="token keyword">as</span> noStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/cache'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">noStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">...</span>
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
<h2 id="버전-내역" tabindex="-1"><a class="header-anchor" href="#버전-내역" aria-hidden="true">#</a> 버전 내역</h2>
<table>
<thead>
<tr>
<th>버전</th>
<th>변경 사항</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v14.0.0</code></td>
<td><code v-pre>unstable_noStore</code>이 도입되었습니다.</td>
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
