<template><div><h1 id="nextjs-14-프로젝트-sitemap-xml-만드는-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14-프로젝트-sitemap-xml-만드는-방법" aria-hidden="true">#</a> Nextjs 14 프로젝트 sitemap.xml 만드는 방법</h1>
<p>사이트맵(.xml|js|ts)은 검색 엔진 크롤러가 귀하의 사이트를 더 효율적으로 인덱싱할 수 있도록 돕기 위해 Sitemaps XML 형식에 일치하는 특별한 파일입니다.</p>
<h3 id="사이트맵-파일-xml" tabindex="-1"><a class="header-anchor" href="#사이트맵-파일-xml" aria-hidden="true">#</a> 사이트맵 파일 (.xml)</h3>
<p>작은 애플리케이션의 경우, 사이트맵.xml 파일을 생성하여 앱 디렉터리의 루트에 배치할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>urlset xmlns<span class="token operator">=</span><span class="token string">"http://www.sitemaps.org/schemas/sitemap/0.9"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>url<span class="token operator">></span>
    <span class="token operator">&lt;</span>loc<span class="token operator">></span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>acme<span class="token punctuation">.</span>com<span class="token operator">&lt;</span><span class="token operator">/</span>loc<span class="token operator">></span>
    <span class="token operator">&lt;</span>lastmod<span class="token operator">></span><span class="token number">2023</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span>06T15<span class="token operator">:</span><span class="token number">02</span><span class="token operator">:</span><span class="token number">24</span><span class="token punctuation">.</span>021Z<span class="token operator">&lt;</span><span class="token operator">/</span>lastmod<span class="token operator">></span>
    <span class="token operator">&lt;</span>changefreq<span class="token operator">></span>yearly<span class="token operator">&lt;</span><span class="token operator">/</span>changefreq<span class="token operator">></span>
    <span class="token operator">&lt;</span>priority<span class="token operator">></span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>priority<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>url<span class="token operator">></span>
  <span class="token operator">&lt;</span>url<span class="token operator">></span>
    <span class="token operator">&lt;</span>loc<span class="token operator">></span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>acme<span class="token punctuation">.</span>com<span class="token operator">/</span>about<span class="token operator">&lt;</span><span class="token operator">/</span>loc<span class="token operator">></span>
    <span class="token operator">&lt;</span>lastmod<span class="token operator">></span><span class="token number">2023</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span>06T15<span class="token operator">:</span><span class="token number">02</span><span class="token operator">:</span><span class="token number">24</span><span class="token punctuation">.</span>021Z<span class="token operator">&lt;</span><span class="token operator">/</span>lastmod<span class="token operator">></span>
    <span class="token operator">&lt;</span>changefreq<span class="token operator">></span>monthly<span class="token operator">&lt;</span><span class="token operator">/</span>changefreq<span class="token operator">></span>
    <span class="token operator">&lt;</span>priority<span class="token operator">></span><span class="token number">0.8</span><span class="token operator">&lt;</span><span class="token operator">/</span>priority<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>url<span class="token operator">></span>
  <span class="token operator">&lt;</span>url<span class="token operator">></span>
    <span class="token operator">&lt;</span>loc<span class="token operator">></span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>acme<span class="token punctuation">.</span>com<span class="token operator">/</span>blog<span class="token operator">&lt;</span><span class="token operator">/</span>loc<span class="token operator">></span>
    <span class="token operator">&lt;</span>lastmod<span class="token operator">></span><span class="token number">2023</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span>06T15<span class="token operator">:</span><span class="token number">02</span><span class="token operator">:</span><span class="token number">24</span><span class="token punctuation">.</span>021Z<span class="token operator">&lt;</span><span class="token operator">/</span>lastmod<span class="token operator">></span>
    <span class="token operator">&lt;</span>changefreq<span class="token operator">></span>weekly<span class="token operator">&lt;</span><span class="token operator">/</span>changefreq<span class="token operator">></span>
    <span class="token operator">&lt;</span>priority<span class="token operator">></span><span class="token number">0.5</span><span class="token operator">&lt;</span><span class="token operator">/</span>priority<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>url<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>urlset<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="코드를-사용하여-사이트맵-생성하기-js-ts" tabindex="-1"><a class="header-anchor" href="#코드를-사용하여-사이트맵-생성하기-js-ts" aria-hidden="true">#</a> 코드를 사용하여 사이트맵 생성하기 (.js, .ts)</h3>
<p>sitemap.(js|ts) 파일 컨벤션을 사용하여 프로그래밍적으로 사이트맵을 생성할 수 있습니다. 기본 함수를 내보내어 URL 배열을 반환합니다. TypeScript를 사용하는 경우 Sitemap 유형을사용할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> MetadataRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">sitemap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> MetadataRoute<span class="token punctuation">.</span>Sitemap <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      url<span class="token operator">:</span> <span class="token string">"https://acme.com"</span><span class="token punctuation">,</span>
      lastModified<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      changeFrequency<span class="token operator">:</span> <span class="token string">"yearly"</span><span class="token punctuation">,</span>
      priority<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      url<span class="token operator">:</span> <span class="token string">"https://acme.com/about"</span><span class="token punctuation">,</span>
      lastModified<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      changeFrequency<span class="token operator">:</span> <span class="token string">"monthly"</span><span class="token punctuation">,</span>
      priority<span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      url<span class="token operator">:</span> <span class="token string">"https://acme.com/blog"</span><span class="token punctuation">,</span>
      lastModified<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      changeFrequency<span class="token operator">:</span> <span class="token string">"weekly"</span><span class="token punctuation">,</span>
      priority<span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>urlset xmlns<span class="token operator">=</span><span class="token string">"http://www.sitemaps.org/schemas/sitemap/0.9"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>url<span class="token operator">></span>
    <span class="token operator">&lt;</span>loc<span class="token operator">></span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>acme<span class="token punctuation">.</span>com<span class="token operator">&lt;</span><span class="token operator">/</span>loc<span class="token operator">></span>
    <span class="token operator">&lt;</span>lastmod<span class="token operator">></span><span class="token number">2023</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span>06T15<span class="token operator">:</span><span class="token number">02</span><span class="token operator">:</span><span class="token number">24</span><span class="token punctuation">.</span>021Z<span class="token operator">&lt;</span><span class="token operator">/</span>lastmod<span class="token operator">></span>
    <span class="token operator">&lt;</span>changefreq<span class="token operator">></span>yearly<span class="token operator">&lt;</span><span class="token operator">/</span>changefreq<span class="token operator">></span>
    <span class="token operator">&lt;</span>priority<span class="token operator">></span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>priority<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>url<span class="token operator">></span>
  <span class="token operator">&lt;</span>url<span class="token operator">></span>
    <span class="token operator">&lt;</span>loc<span class="token operator">></span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>acme<span class="token punctuation">.</span>com<span class="token operator">/</span>about<span class="token operator">&lt;</span><span class="token operator">/</span>loc<span class="token operator">></span>
    <span class="token operator">&lt;</span>lastmod<span class="token operator">></span><span class="token number">2023</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span>06T15<span class="token operator">:</span><span class="token number">02</span><span class="token operator">:</span><span class="token number">24</span><span class="token punctuation">.</span>021Z<span class="token operator">&lt;</span><span class="token operator">/</span>lastmod<span class="token operator">></span>
    <span class="token operator">&lt;</span>changefreq<span class="token operator">></span>monthly<span class="token operator">&lt;</span><span class="token operator">/</span>changefreq<span class="token operator">></span>
    <span class="token operator">&lt;</span>priority<span class="token operator">></span><span class="token number">0.8</span><span class="token operator">&lt;</span><span class="token operator">/</span>priority<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>url<span class="token operator">></span>
  <span class="token operator">&lt;</span>url<span class="token operator">></span>
    <span class="token operator">&lt;</span>loc<span class="token operator">></span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>acme<span class="token punctuation">.</span>com<span class="token operator">/</span>blog<span class="token operator">&lt;</span><span class="token operator">/</span>loc<span class="token operator">></span>
    <span class="token operator">&lt;</span>lastmod<span class="token operator">></span><span class="token number">2023</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span>06T15<span class="token operator">:</span><span class="token number">02</span><span class="token operator">:</span><span class="token number">24</span><span class="token punctuation">.</span>021Z<span class="token operator">&lt;</span><span class="token operator">/</span>lastmod<span class="token operator">></span>
    <span class="token operator">&lt;</span>changefreq<span class="token operator">></span>weekly<span class="token operator">&lt;</span><span class="token operator">/</span>changefreq<span class="token operator">></span>
    <span class="token operator">&lt;</span>priority<span class="token operator">></span><span class="token number">0.5</span><span class="token operator">&lt;</span><span class="token operator">/</span>priority<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>url<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>urlset<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="다중-사이트맵-생성" tabindex="-1"><a class="header-anchor" href="#다중-사이트맵-생성" aria-hidden="true">#</a> 다중 사이트맵 생성</h3>
<p>대부분의 애플리케이션에는 단일 사이트맵이 작동합니다. 그러나 대규모 웹 애플리케이션의 경우 사이트맵을 여러 파일로 분할해야 할 수도 있습니다.</p>
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
<p>여러 개의 사이트맵을 만드는 두 가지 방법이 있습니다:</p>
<ul>
<li>다음과 같이 여러 경로 세그먼트 안에 사이트맵.(xml|js|ts)을 중첩해서 만들기 (예: app/sitemap.xml 및 app/products/sitemap.xml).</li>
<li>generateSitemaps 함수를 사용하는 방법.</li>
</ul>
<p>예를 들어, generateSitemaps를 사용하여 사이트맵을 분할하려면, 사이트맵 ID가 있는 객체 배열을 반환한 다음 해당 ID를 사용하여 고유한 사이트맵을 생성하세요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">BASE_URL</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/app/lib/constants"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">generateSitemaps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 총 제품 수를 가져와 필요한 사이트맵 수를 계산합니다.</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">sitemap</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>MetadataRoute<span class="token punctuation">.</span>Sitemap<span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token comment">// 구글의 제한은 사이트맵 당 50,000개의 URL입니다.</span>
  <span class="token keyword">const</span> start <span class="token operator">=</span> id <span class="token operator">*</span> <span class="token number">50000</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> end <span class="token operator">=</span> start <span class="token operator">+</span> <span class="token number">50000</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> products <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getProducts</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">SELECT id, date FROM products WHERE id BETWEEN </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>start<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> AND </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>end<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> products<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>product<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">BASE_URL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/product/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
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
<p>프로덕션 환경에서 생성된 사이트맵은 /.../sitemap/[id].xml 경로에서 확인할 수 있습니다. 예를 들어, /product/sitemap/1.xml입니다.</p>
<p>개발 환경에서는 생성된 사이트맵을 /.../sitemap.xml/[id] 경로에서 확인할 수 있습니다. 예를 들어, /product/sitemap.xml/1 입니다. 이 차이는 일시적이며 프로덕션 형식을 따를 것입니다.</p>
<p>자세한 정보는 generateSitemaps API 레퍼런스를 참조하세요.</p>
<h2 id="반환-결과" tabindex="-1"><a class="header-anchor" href="#반환-결과" aria-hidden="true">#</a> 반환 결과</h2>
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
<p>디폴트 함수는 sitemap.(xml|ts|js)에서 다음과 같은 속성을 가진 객체 배열을 반환해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>type Sitemap <span class="token operator">=</span> Array<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> string
  lastModified<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> Date
  changeFrequency<span class="token operator">?</span><span class="token operator">:</span>
    <span class="token operator">|</span> <span class="token string">'always'</span>
    <span class="token operator">|</span> <span class="token string">'hourly'</span>
    <span class="token operator">|</span> <span class="token string">'daily'</span>
    <span class="token operator">|</span> <span class="token string">'weekly'</span>
    <span class="token operator">|</span> <span class="token string">'monthly'</span>
    <span class="token operator">|</span> <span class="token string">'yearly'</span>
    <span class="token operator">|</span> <span class="token string">'never'</span>
  priority<span class="token operator">?</span><span class="token operator">:</span> number
<span class="token punctuation">}</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="버전-히스토리" tabindex="-1"><a class="header-anchor" href="#버전-히스토리" aria-hidden="true">#</a> 버전 히스토리</h2>
<table>
<thead>
<tr>
<th>Version</th>
<th>Changes</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v13.4.5</code></td>
<td><code v-pre>changeFrequency</code> 및 <code v-pre>priority</code> 속성을 sitemap에 추가.</td>
</tr>
<tr>
<td><code v-pre>v13.3.0</code></td>
<td><code v-pre>sitemap</code> 도입.</td>
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
