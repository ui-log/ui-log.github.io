<template><div><h1 id="_1-css-grid-기본-개념-이해하기" tabindex="-1"><a class="header-anchor" href="#_1-css-grid-기본-개념-이해하기" aria-hidden="true">#</a> 1. CSS Grid 기본 개념 이해하기:</h1>
<h1 id="_2-그리드-컨테이너-설정하기" tabindex="-1"><a class="header-anchor" href="#_2-그리드-컨테이너-설정하기" aria-hidden="true">#</a> 2. 그리드 컨테이너 설정하기:</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> grid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-행과-열-정의하기" tabindex="-1"><a class="header-anchor" href="#_3-행과-열-정의하기" aria-hidden="true">#</a> 3. 행과 열 정의하기:</h1>
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
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px 200px<span class="token punctuation">;</span> <span class="token comment">/* 두 개의 행: 100px, 200px */</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 2fr<span class="token punctuation">;</span> <span class="token comment">/* 1:2 비율로 두 개의 열 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-그리드-아이템-배치" tabindex="-1"><a class="header-anchor" href="#_4-그리드-아이템-배치" aria-hidden="true">#</a> 4. 그리드 아이템 배치:</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 1 / 2<span class="token punctuation">;</span> <span class="token comment">/* 1행부터 2행까지 */</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 1 / 3<span class="token punctuation">;</span> <span class="token comment">/* 1열부터 3열까지 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-그리드-간격" tabindex="-1"><a class="header-anchor" href="#_5-그리드-간격" aria-hidden="true">#</a> 5. 그리드 간격:</h2>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> grid<span class="token punctuation">;</span>
  grid<span class="token operator">-</span>gap<span class="token operator">:</span> 20px<span class="token punctuation">;</span> <span class="token comment">/* 그리드 아이템 사이의 간격을 20px로 설정합니다 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-그리드-아이템-정렬하기" tabindex="-1"><a class="header-anchor" href="#_6-그리드-아이템-정렬하기" aria-hidden="true">#</a> 6. 그리드 아이템 정렬하기:</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> grid<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span> <span class="token comment">/* 트랙 내에서 항목을 수평으로 정렬합니다 */</span>
  align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span> <span class="token comment">/* 트랙 내에서 항목을 수직으로 정렬합니다 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7-반응형-그리드" tabindex="-1"><a class="header-anchor" href="#_7-반응형-그리드" aria-hidden="true">#</a> 7. 반응형 그리드:</h1>
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
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.container</span> <span class="token punctuation">{</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr<span class="token punctuation">;</span> <span class="token comment">/* 더 작은 화면에서는 단일 열 레이아웃 */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Tech/2024-04-19-MasteringCSSGridAComprehensiveGuide/img/MasteringCSSGridAComprehensiveGuide_0.png" alt="이미지"></p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론:</h1>
</div></template>
