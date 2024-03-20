<template><div><h1 id="nextjs-14에서-generatesitemaps로-사이트맵-생성하기" tabindex="-1"><a class="header-anchor" href="#nextjs-14에서-generatesitemaps로-사이트맵-생성하기" aria-hidden="true">#</a> Nextjs 14에서 generateSitemaps로 사이트맵 생성하기</h1>
<p>generateSitemaps 함수를 사용하여 애플리케이션에 대한 여러 사이트맵을 생성할 수 있습니다.</p>
<h2 id="반환값" tabindex="-1"><a class="header-anchor" href="#반환값" aria-hidden="true">#</a> 반환값</h2>
<p>generateSitemaps 함수는 id 속성을 가진 객체 배열을 반환합니다.</p>
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
<h2 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> URL</h2>
<p>프로덕션 환경에서 생성된 사이트맵은 /.../sitemap/[id].xml에서 확인할 수 있습니다. 예를 들어, /product/sitemap/1.xml.</p>
<p>개발 환경에서 생성된 사이트맵은 /.../sitemap.xml/[id]에서 확인 가능합니다. 예를 들어, /product/sitemap.xml/1. 이 차이는 임시적이며, 프로덕션 형식을 따를 것입니다.</p>
<h2 id="예시" tabindex="-1"><a class="header-anchor" href="#예시" aria-hidden="true">#</a> 예시</h2>
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
<p>예를 들어, generateSitemaps를 사용하여 사이트맵을 분할하려면 sitemap id를 포함한 객체 배열을 반환하세요. 그런 다음 해당 id를 사용하여 고유한 사이트맵을 생성하세요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">BASE_URL</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/app/lib/constants"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">generateSitemaps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 총 제품 수를 가져와 필요한 사이트맵 수를 계산합니다</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">sitemap</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>MetadataRoute<span class="token punctuation">.</span>Sitemap<span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token comment">// Google의 제한은 사이트맵 당 50,000개의 URL입니다</span>
  <span class="token keyword">const</span> start <span class="token operator">=</span> id <span class="token operator">*</span> <span class="token number">50000</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> end <span class="token operator">=</span> start <span class="token operator">+</span> <span class="token number">50000</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> products <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getProducts</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">SELECT id, date FROM products WHERE id BETWEEN </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>start<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> AND </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>end<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> products<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>product<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">BASE_URL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/product/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>product<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
    lastModified<span class="token operator">:</span> product<span class="token punctuation">.</span>date<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
