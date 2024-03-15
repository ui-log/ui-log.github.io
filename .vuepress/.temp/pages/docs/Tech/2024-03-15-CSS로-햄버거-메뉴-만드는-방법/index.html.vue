<template><div><h1 id="css로-햄버거-메뉴-만드는-방법" tabindex="-1"><a class="header-anchor" href="#css로-햄버거-메뉴-만드는-방법" aria-hidden="true">#</a> CSS로 햄버거 메뉴 만드는 방법</h1>
<p>최근에 사이트를 약간 수정하고 있는 중에, 내가 만든 햄버거 메뉴를 다시 발견했다. 이것은 매우 특별한 것은 아니고, 작은 해상도로 들어가면 숨겨진 수직 메뉴로 압축되어 버튼을 눌러 보여주거나 숨길 수 있는 메뉴일 뿐이다. 흥미로운 점은 이것이 HTML과 CSS만을 사용하여 만들어졌다는 것이다.</p>
<p>내가 만들 때 인터넷에서 이를 수행하는 방법에 대한 완전한 예제를 찾을 수 없었고, 원하는 결과를 얻기 위해 많은 시행착오가 필요했다는 것을 기억한다. 그래서, 메뉴의 코드를 추출하여 간소화된 예제로 만들었다.</p>
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
<h2 id="요구-사항" tabindex="-1"><a class="header-anchor" href="#요구-사항" aria-hidden="true">#</a> 요구 사항</h2>
<p>이 프로젝트를 시작할 때, 충족해야 할 몇 가지 요구 사항이 있었다:</p>
<ul>
<li>상호작용을 포함하여 HTML과 CSS만을 사용해야 한다.</li>
<li>두 개의 다른 메뉴가 아닌 동일한 메뉴이어야 한다.</li>
<li>CSS가 로드되지 않은 경우에도 최소한 기능해야 한다.</li>
</ul>
<h2 id="과정" tabindex="-1"><a class="header-anchor" href="#과정" aria-hidden="true">#</a> 과정</h2>
<p>프로젝트에는 다음 단계가 있다:</p>
<ul>
<li>링크 목록 만들기.</li>
<li>큰 화면에서 링크 목록 보기 좋게 만들기.</li>
<li>작은 화면에서 링크 목록 보기 좋게 만들기.</li>
<li>작은 화면의 링크 목록 축소 가능하게 만들기.</li>
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
<h2 id="시작점-링크-목록" tabindex="-1"><a class="header-anchor" href="#시작점-링크-목록" aria-hidden="true">#</a> 시작점, 링크 목록</h2>
<p>메뉴는 결국 탐색에 사용되는 링크 목록이므로, 그것으로 시작한다:</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 항상 표시되는 항목 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://threkk.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>threkk.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 축소 가능한 메뉴 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://mastodon.social/@threkk<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Mastodon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://twitter.com/threkk<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Twitter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://github.com/threkk<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Github<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 목록은 전체 메뉴에 사용할 HTML이며, 나머지는 CSS 마법일 뿐이다.</p>
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
<h2 id="큰-화면에서-링크-목록-보기-좋게-만들기" tabindex="-1"><a class="header-anchor" href="#큰-화면에서-링크-목록-보기-좋게-만들기" aria-hidden="true">#</a> 큰 화면에서 링크 목록 보기 좋게 만들기</h2>
<p>이 부분은 간단하며, 약간의 CSS만 있으면 된다. 좋아보이는 것은 당신이 결정하는 대로:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">nav</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> SeaGreen<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> snow<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">nav ul</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 마커를 사라지게 만듭니다. */</span>
  <span class="token property">list-style-type</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">nav ul li</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 요소를 한 줄에 배치합니다. */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0.3em 1em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 부분은 완료되었고, 이 부분에서는 더 이상 변경하지 않을 것이다.</p>
<h2 id="작은-화면에서-링크-목록-보기-좋게-만들기" tabindex="-1"><a class="header-anchor" href="#작은-화면에서-링크-목록-보기-좋게-만들기" aria-hidden="true">#</a> 작은 화면에서 링크 목록 보기 좋게 만들기</h2>
<p>미디어 쿼리를 사용하여 다음 규칙을 작은 해상도에만 적용합니다. 예를 들어, 태블릿을 &quot;작은 장치&quot;로 고려할지 여부에 따라 값을 조정할 수 있습니다.</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 576px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">nav</span> <span class="token punctuation">{</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>
    <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/* 모바일 모드에서는 수직 목록으로 표시합니다. */</span>
  <span class="token selector">nav ul</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/* 두 개의 목록이 있습니다. 첫 번째는 항상 메뉴 바에 표시되는 항목입니다.
       두 번째는 숨겨질 목록입니다. */</span>
  <span class="token selector">nav ul:last-child</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">flex-basis</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">nav ul li</span> <span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0.5em<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
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
<img src="@source/docs/Tech/2024-03-15-CSS로-햄버거-메뉴-만드는-방법/img/How-to-make-a-CSS-only-hamburger-menu_0.png" />
<h2 id="작은-화면의-링크-목록-축소-가능하게-만들기" tabindex="-1"><a class="header-anchor" href="#작은-화면의-링크-목록-축소-가능하게-만들기" aria-hidden="true">#</a> 작은 화면의 링크 목록 축소 가능하게 만들기</h2>
<p>마지막으로, 흥미로운 부분입니다. 모든 마법이 여기에 있습니다: 체크박스가 주어지면, 체크되지 않은 경우 인접한 목록은 표시되지 않습니다.</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">input[type="checkbox"]:not(:checked) + ul</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>먼저, HTML에 체크박스와 레이블을 추가합니다.</p>
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
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 항상 표시되는 항목 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://threkk.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>threkk.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 햄버거 메뉴 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu<span class="token punctuation">"</span></span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 🍔 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token comment">&lt;!-- 축소 가능한 메뉴 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://mastodon.social/@threkk<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Mastodon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://twitter.com/threkk<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Twitter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://github.com/threkk<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Github<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>체크박스와 레이블은 큰 화면에서 숨겨지고,</p>
<p>그 값은 무시됩니다.</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">nav input[type="checkbox"],
nav label</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그러나 작은 해상도에서는 체크박스를 숨기고 레이블을 표시합니다.</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* 메뉴 아이콘 스타일링, 체크박스는 숨겨진 채로 유지 */</span>
<span class="token selector">nav label</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0.5em<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.6em<span class="token punctuation">;</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<img src="https://miro.medium.com/v2/resize:fit:640/1*yRRvaU-uG1aNW7M9OvzZdg.gif" />
<p>이렇게하면 끝이 납니다!</p>
</div></template>
