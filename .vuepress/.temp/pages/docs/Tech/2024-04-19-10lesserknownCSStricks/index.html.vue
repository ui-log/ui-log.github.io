<template><div><p><img src="@source/docs/Tech/2024-04-19-10lesserknownCSStricks/img/10lesserknownCSStricks_0.png" alt="이미지"></p>
<p>가끔 더 알지 못한 CSS 요소가 있는지 궁금했던 적이 있나요? 웹 디자인 스킬을 레벨업할 수 있는 10가지 잘 알려지지 않은 CSS 트릭으로 빠른 여행을 떠나보세요. 새로운 CSS 트릭을 배우기 위해 준비하세요.</p>
<h1 id="_01-웹사이트에서-스무스-스크롤링" tabindex="-1"><a class="header-anchor" href="#_01-웹사이트에서-스무스-스크롤링" aria-hidden="true">#</a> 01. 웹사이트에서 스무스 스크롤링</h1>
<p>전체 페이지에 스무스 스크롤링을 활성화하려면 <code v-pre>html</code> 요소에 scroll-behavior: smooth를 추가하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>html<span class="token punctuation">{</span>
    scroll<span class="token operator">-</span>behavior<span class="token operator">:</span> smooth<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_02-링크를-위한-속성-선택자" tabindex="-1"><a class="header-anchor" href="#_02-링크를-위한-속성-선택자" aria-hidden="true">#</a> 02. 링크를 위한 속성 선택자</h1>
<p>이 선택자는 „https.“로 시작하는 href 속성을 가진 링크를 대상으로 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>a<span class="token punctuation">[</span>href<span class="token operator">^=</span><span class="token string">"https"</span><span class="token punctuation">]</span><span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> blue<span class="token punctuation">;</span>
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
<h1 id="_03-형제를-결합하는-table-태그" tabindex="-1"><a class="header-anchor" href="#_03-형제를-결합하는-table-태그" aria-hidden="true">#</a> 03. ~ 형제를 결합하는 <code v-pre>table</code> 태그</h1>
<p><code v-pre>h2</code> 뒤에 나오는 모든 <code v-pre>p</code> 요소를 선택합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>h2 <span class="token operator">~</span> p <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_04-not-가상-클래스" tabindex="-1"><a class="header-anchor" href="#_04-not-가상-클래스" aria-hidden="true">#</a> 04. <code v-pre>:not()</code> 가상 클래스</h1>
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
<p>이 선택기는 특별한 클래스를 가지지 않은 리스트 항목에 스타일을 적용합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">li</span><span class="token operator">:</span><span class="token function">not</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">.</span>special</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        font<span class="token operator">-</span>stlye<span class="token operator">:</span> italic<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_05-반응형-텍스트에-대한-뷰포트-단위" tabindex="-1"><a class="header-anchor" href="#_05-반응형-텍스트에-대한-뷰포트-단위" aria-hidden="true">#</a> 05. 반응형 텍스트에 대한 뷰포트 단위</h1>
<p>뷰포트 단위(vw, vh, vmin, vmax)를 사용하면 폰트 크기를 뷰포트 크기에 반응하는 방식으로 조절할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>h1<span class="token punctuation">{</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 5vw<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_06-empty-for-empty-elements" tabindex="-1"><a class="header-anchor" href="#_06-empty-for-empty-elements" aria-hidden="true">#</a> 06. :empty for empty elements</h1>
<p>이 선택자는 비어있는 <code v-pre>p</code> 요소를 선택하여 숨깁니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">p</span><span class="token operator">:</span>empty<span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
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
<h1 id="_07-사용자-지정-속성-변수" tabindex="-1"><a class="header-anchor" href="#_07-사용자-지정-속성-변수" aria-hidden="true">#</a> 07. 사용자 지정 속성 (변수)</h1>
<p>더 쉬운 테마화와 유지 관리를 위해 사용자 지정 속성을 정의하고 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">:</span>root<span class="token punctuation">{</span>
    <span class="token operator">--</span>main<span class="token operator">-</span>color<span class="token operator">:</span> #3498db<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  h1<span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>main<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_08-이미지-제어를-위한-object-fit-속성" tabindex="-1"><a class="header-anchor" href="#_08-이미지-제어를-위한-object-fit-속성" aria-hidden="true">#</a> 08. 이미지 제어를 위한 object-fit 속성</h1>
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
<p>object-fit은 대체 요소의 내용(예: <code v-pre>img</code>)이 어떻게 조절되어야 하는지를 결정합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>img<span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span> 
    <span class="token literal-property property">height</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
    object<span class="token operator">-</span>fit<span class="token operator">:</span> cover<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_09-단순화된-레이아웃을-위한-그리드" tabindex="-1"><a class="header-anchor" href="#_09-단순화된-레이아웃을-위한-그리드" aria-hidden="true">#</a> 09. 단순화된 레이아웃을 위한 그리드</h1>
<p>CSS 그리드는 더 간편한 방식으로 레이아웃을 생성하는 강력한 도구를 제공합니다.</p>
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
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-tempalte-columns</span><span class="token punctuation">:</span> 1fr 2fr 1fr<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_10-focus-within-의사-클래스" tabindex="-1"><a class="header-anchor" href="#_10-focus-within-의사-클래스" aria-hidden="true">#</a> 10. :focus-within 의사 클래스</h1>
<p>:focus-within은 해당 요소의 자식 요소 중 :focus가 있는 경우 해당 요소를 선택합니다.</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">form:focus-within</span><span class="token punctuation">{</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 5px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
