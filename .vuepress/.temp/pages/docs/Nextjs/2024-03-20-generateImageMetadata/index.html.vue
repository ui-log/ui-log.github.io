<template><div><h1 id="nextjs14-에서-generateimagemetadata로-이미지-메타데이터-생성하는-방법" tabindex="-1"><a class="header-anchor" href="#nextjs14-에서-generateimagemetadata로-이미지-메타데이터-생성하는-방법" aria-hidden="true">#</a> Nextjs14 에서 generateImageMetadata로 이미지 메타데이터 생성하는 방법</h1>
<p>generateImageMetadata를 사용하여 이미지의 여러 버전을 생성하거나 하나의 경로 세그먼트에 대해 여러 이미지를 반환할 수 있습니다. 이 기능은 아이콘과 같은 하드 코딩된 메타데이터 값을 피하고 싶을 때 유용합니다.</p>
<h2 id="매개변수" tabindex="-1"><a class="header-anchor" href="#매개변수" aria-hidden="true">#</a> 매개변수</h2>
<p>generateImageMetadata 함수는 다음 매개변수를 받습니다:</p>
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
<h4 id="params-선택-사항" tabindex="-1"><a class="header-anchor" href="#params-선택-사항" aria-hidden="true">#</a> params (선택 사항)</h4>
<p>generateImageMetadata 세그먼트에서 루트 세그먼트까지가 필요한 동적 라우트 매개 변수 객체를 포함하는 객체.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">generateImageMetadata</span><span class="token punctuation">(</span><span class="token punctuation">{</span> params <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> params<span class="token operator">:</span> <span class="token punctuation">{</span> slug<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>Route</th>
<th>URL</th>
<th>params</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>app/shop/icon.js</code></td>
<td><code v-pre>/shop</code></td>
<td><code v-pre>undefined</code></td>
</tr>
<tr>
<td><code v-pre>app/shop/[slug]/icon.js</code></td>
<td><code v-pre>/shop/1</code></td>
<td><code v-pre>{ slug: '1' }</code></td>
</tr>
<tr>
<td><code v-pre>app/shop/[tag]/[item]/icon.js</code></td>
<td><code v-pre>/shop/1/2</code></td>
<td><code v-pre>{ tag: '1', item: '2' }</code></td>
</tr>
<tr>
<td><code v-pre>app/shop/[...slug]/icon.js</code></td>
<td><code v-pre>/shop/1/2</code></td>
<td><code v-pre>{ slug: ['1', '2'] }</code></td>
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
<h2 id="반환값" tabindex="-1"><a class="header-anchor" href="#반환값" aria-hidden="true">#</a> 반환값</h2>
<p><code v-pre>generateImageMetadata</code> 함수는 이미지의 메타데이터인 alt와 크기 등을 포함한 객체 배열을 반환해야 합니다. 또한 각 항목은 이미지 생성 함수의 속성으로 전달될 id 값을 포함해야 합니다.</p>
<p>표 형식을 Markdown 형식으로 변경합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ImageResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/og'</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">generateImageMetadata</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      contentType<span class="token operator">:</span> <span class="token string">'image/png'</span><span class="token punctuation">,</span>
      size<span class="token operator">:</span> <span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">48</span><span class="token punctuation">,</span> height<span class="token operator">:</span> <span class="token number">48</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      id<span class="token operator">:</span> <span class="token string">'small'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      contentType<span class="token operator">:</span> <span class="token string">'image/png'</span><span class="token punctuation">,</span>
      size<span class="token operator">:</span> <span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">72</span><span class="token punctuation">,</span> height<span class="token operator">:</span> <span class="token number">72</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      id<span class="token operator">:</span> <span class="token string">'medium'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Icon</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ImageResponse</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div
        style<span class="token operator">=</span><span class="token punctuation">{</span>
          width<span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
          height<span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
          display<span class="token operator">:</span> <span class="token string">'flex'</span><span class="token punctuation">,</span>
          alignItems<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
          justifyContent<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
          fontSize<span class="token operator">:</span> <span class="token number">88</span><span class="token punctuation">,</span>
          background<span class="token operator">:</span> <span class="token string">'#000'</span><span class="token punctuation">,</span>
          color<span class="token operator">:</span> <span class="token string">'#fafafa'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token operator">></span>
        Icon <span class="token punctuation">{</span>id<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h3 id="예시" tabindex="-1"><a class="header-anchor" href="#예시" aria-hidden="true">#</a> 예시</h3>
<h4 id="외부-데이터-사용" tabindex="-1"><a class="header-anchor" href="#외부-데이터-사용" aria-hidden="true">#</a> 외부 데이터 사용</h4>
<p>이 예시는 params 객체와 외부 데이터를 사용하여 경로 세그먼트를 위한 여러 개의 오픈 그래프 이미지를 생성합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ImageResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/og"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCaptionForImage<span class="token punctuation">,</span> getOGImages <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/app/utils/images"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">generateImageMetadata</span><span class="token punctuation">(</span><span class="token punctuation">{</span> params <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> params<span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> images <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getOGImages</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> images<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> idx<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    id<span class="token operator">:</span> idx<span class="token punctuation">,</span>
    size<span class="token operator">:</span> <span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">1200</span><span class="token punctuation">,</span> height<span class="token operator">:</span> <span class="token number">600</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    alt<span class="token operator">:</span> image<span class="token punctuation">.</span>text<span class="token punctuation">,</span>
    contentType<span class="token operator">:</span> <span class="token string">"image/png"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Image</span><span class="token punctuation">(</span><span class="token punctuation">{</span> params<span class="token punctuation">,</span> id <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> params<span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> id<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> productId <span class="token operator">=</span> params<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
  <span class="token keyword">const</span> imageId <span class="token operator">=</span> id<span class="token punctuation">;</span>
  <span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getCaptionForImage</span><span class="token punctuation">(</span>productId<span class="token punctuation">,</span> imageId<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ImageResponse</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div
        style<span class="token operator">=</span><span class="token punctuation">{</span>
          <span class="token punctuation">{</span>
            <span class="token comment">// ...</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token operator">></span>
        <span class="token punctuation">{</span>text<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
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
<td><code v-pre>generateImageMetadata</code> 도입됨.</td>
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
