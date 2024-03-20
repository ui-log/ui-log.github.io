<template><div><h1 id="nextjs-14-unstable-cache-사용-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14-unstable-cache-사용-방법" aria-hidden="true">#</a> Nextjs 14 unstable_cache 사용 방법</h1>
<p>unstable_cache를 사용하면 데이터베이스 쿼리와 같은 비용이 많이 드는 작업의 결과를 캐시하고 여러 요청에서 재사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getUser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./data'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> unstable_cache <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/cache'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> getCachedUser <span class="token operator">=</span> <span class="token function">unstable_cache</span><span class="token punctuation">(</span>
  <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">getUser</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">'my-app-user'</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Component</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> userID <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getCachedUser</span><span class="token punctuation">(</span>userID<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두면 좋아요: 캐시 범위 내에서 헤더 또는 쿠키와 같은 동적 데이터 원본에 액세스하는 것은 지원되지 않습니다. 캐시된 함수 내에서 이 데이터가 필요한 경우, 캐시된 함수 외부에서 헤더를 사용하고 필요한 동적 데이터를 인수로 전달하십시오.</p>
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
<blockquote>
<p>경고: 이 API는 불안정하며 향후 변경될 수 있습니다. API가 안정화되면 필요한 경우 이주 문서 및 코드 수정을 제공할 것입니다.</p>
</blockquote>
<h2 id="매개변수" tabindex="-1"><a class="header-anchor" href="#매개변수" aria-hidden="true">#</a> 매개변수</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">unstable_cache</span><span class="token punctuation">(</span>fetchData<span class="token punctuation">,</span> keyParts<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>fetchData: 캐시하려는 데이터를 가져오는 비동기 함수입니다. Promise를 반환해야 하는 함수여야 합니다.</li>
<li>keyParts: 캐시된 키를 식별하는 배열입니다. 전역적으로 고유한 값을 포함해야 하며, 함께 캐시되는 데이터의 키를 식별합니다. 캐시 키에는 함수에 전달된 인수도 포함됩니다.</li>
<li>options: 캐시 동작을 제어하는 객체입니다. 다음 속성들을 포함할 수 있습니다:
<ul>
<li>tags: 캐시 무효화를 제어하는 데 사용할 수있는 태그의 배열입니다.</li>
<li>revalidate: 캐시를 재지정해야 하는 시간(초)입니다. 영구적으로 캐시하려면 건너뛰거나 false를 전달하거나, revalidateTag() 또는 revalidatePath() 메소드와 일치하는 경우까지 캐시를 유지합니다.</li>
<li>tags: 캐시 무효화를 제어하는 데 사용할 수있는 태그의 배열입니다.</li>
<li>revalidate: 캐시를 재지정해야 하는 시간(초)입니다. 영구적으로 캐시하려면 건너뛰거나 false를 전달하거나, revalidateTag() 또는 revalidatePath() 메소드와 일치하는 경우까지 캐시를 유지합니다.</li>
</ul>
</li>
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
<h2 id="반환값" tabindex="-1"><a class="header-anchor" href="#반환값" aria-hidden="true">#</a> 반환값</h2>
<p>unstable_cache은 호출될 때 캐시된 데이터로 해결되는 Promise를 반환하는 함수를 반환합니다. 데이터가 캐시에 없는 경우 제공된 함수가 호출되어 그 결과가 캐시되고 반환됩니다.</p>
<h2 id="버전-히스토리" tabindex="-1"><a class="header-anchor" href="#버전-히스토리" aria-hidden="true">#</a> 버전 히스토리</h2>
<table>
<thead>
<tr>
<th>Version</th>
<th>Changes</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v14.0.0</code></td>
<td><code v-pre>unstable_cache</code> 도입됨.</td>
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
