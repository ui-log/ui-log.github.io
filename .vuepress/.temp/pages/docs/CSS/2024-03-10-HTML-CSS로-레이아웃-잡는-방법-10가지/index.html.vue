<template><div><h1 id="html-css로-레이아웃-잡는-방법-10가지" tabindex="-1"><a class="header-anchor" href="#html-css로-레이아웃-잡는-방법-10가지" aria-hidden="true">#</a> HTML CSS로 레이아웃 잡는 방법 10가지</h1>
<p>10가지 한 줄들로 HTML CSS로 레이아웃을 잡는데 도움이 되는 속성들에 대해서 소개하려고 합니다.</p>
<img src="@source/docs/CSS/2024-03-10-HTML-CSS로-레이아웃-잡는-방법-10가지/img/10-Modern-CSS-Layouts-With-One-Line:-A-Concise-Guide🚀_0.png" />
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
<h2 id="목차" tabindex="-1"><a class="header-anchor" href="#목차" aria-hidden="true">#</a> 목차</h2>
<ul>
<li>Flexbox 가운데 정렬</li>
<li>Grid 가운데 정렬</li>
<li>전체 페이지 이미지 배경</li>
<li>반응형 정사각형</li>
<li>고정 푸터</li>
<li>동일한 너비의 열</li>
<li>원형 요소</li>
<li>유동적인 타이포그래피</li>
<li>다중 열 텍스트</li>
<li>반응형 정사각형 그리드</li>
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
<h2 id="_1-flexbox-가운데-정렬" tabindex="-1"><a class="header-anchor" href="#_1-flexbox-가운데-정렬" aria-hidden="true">#</a> 1) Flexbox 가운데 정렬:</h2>
<p>예시:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-grid-가운데-정렬" tabindex="-1"><a class="header-anchor" href="#_2-grid-가운데-정렬" aria-hidden="true">#</a> 2) Grid 가운데 정렬:</h2>
<p>예시:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">place-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-전체-페이지-이미지-배경" tabindex="-1"><a class="header-anchor" href="#_3-전체-페이지-이미지-배경" aria-hidden="true">#</a> 3) 전체 페이지 이미지 배경:</h2>
<p>예시:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"image.jpg"</span><span class="token punctuation">)</span></span> center/cover no-repeat<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<h2 id="_4-반응형-정사각형" tabindex="-1"><a class="header-anchor" href="#_4-반응형-정사각형" aria-hidden="true">#</a> 4) 반응형 정사각형:</h2>
<p>예시:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.square</span> <span class="token punctuation">{</span>
  <span class="token property">aspect-ratio</span><span class="token punctuation">:</span> 1/1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-고정-푸터" tabindex="-1"><a class="header-anchor" href="#_5-고정-푸터" aria-hidden="true">#</a> 5) 고정 푸터:</h2>
<p>예시:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.content</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
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
<h2 id="_6-동일한-너비의-열" tabindex="-1"><a class="header-anchor" href="#_6-동일한-너비의-열" aria-hidden="true">#</a> 6) 동일한 너비의 열:</h2>
<p>예시:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.column</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-원형-요소" tabindex="-1"><a class="header-anchor" href="#_7-원형-요소" aria-hidden="true">#</a> 7) 원형 요소:</h2>
<p>예시:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.circle</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-너비에-따라-변하는-폰트-사이즈" tabindex="-1"><a class="header-anchor" href="#_8-너비에-따라-변하는-폰트-사이즈" aria-hidden="true">#</a> 8) 너비에 따라 변하는 폰트 사이즈:</h2>
<p>예시:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>1rem + 1vw<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<h2 id="_9-다중-열-텍스트" tabindex="-1"><a class="header-anchor" href="#_9-다중-열-텍스트" aria-hidden="true">#</a> 9) 다중 열 텍스트:</h2>
<p>예시:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.text</span> <span class="token punctuation">{</span>
  <span class="token property">column-count</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
  <span class="token property">column-gap</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-반응형-정사각형-그리드" tabindex="-1"><a class="header-anchor" href="#_10-반응형-정사각형-그리드" aria-hidden="true">#</a> 10) 반응형 정사각형 그리드:</h2>
<p>예시:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.grid</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fit<span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론:</h1>
<p>CSS 레이아웃 기술을 마스터하는 것은 현대적이고 반응형 웹 디자인을 만드는 데 필수적입니다.
간단한 속성들이지만 실제 프론트엔드 개발할 때 사용하시면 많이 도움이 되실거에요!</p>
</div></template>
