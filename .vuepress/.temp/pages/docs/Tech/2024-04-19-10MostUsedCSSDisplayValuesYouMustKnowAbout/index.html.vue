<template><div><img src="@source/docs/Tech/2024-04-19-10MostUsedCSSDisplayValuesYouMustKnowAbout/img/10MostUsedCSSDisplayValuesYouMustKnowAbout_0.png" />
<h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h1>
<p>CSS에서 display는 브라우저에서 웹 페이지의 HTML 요소가 어떻게 표시되어야 하는지 정의하는 중요한 속성입니다. 이 글에서는 CSS display 속성과 그 다양한 값에 대해 알아볼 거에요.</p>
<p>바로 시작해 볼까요? 🚀</p>
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
<h1 id="display-속성이란-무엇인가요" tabindex="-1"><a class="header-anchor" href="#display-속성이란-무엇인가요" aria-hidden="true">#</a> display 속성이란 무엇인가요?</h1>
<p>display 속성은 HTML 요소가 웹 페이지에서 어떻게 표시되어야 하는지를 정의합니다. 주요 역할은 요소의 레이아웃과 위치를 제어하는 것입니다.</p>
<p>기본 구문:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>element <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> value<span class="token punctuation">;</span>
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
<p>가장 일반적인 표시 값으로 들어가 봅시다.</p>
<h2 id="display-block" tabindex="-1"><a class="header-anchor" href="#display-block" aria-hidden="true">#</a> display: block;</h2>
<p>요소의 display 속성을 'block'으로 설정하면 새로운 줄에서 시작하고 부모 컨테이너의 전체 너비를 차지합니다.</p>
<p>해당 요소에 너비와 높이 속성을 설정할 수 있습니다.</p>
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
<p>기본 블록 레벨 요소의 예시로는 'div', 'p', 'h1'~'h6', 'header', 'footer'가 있습니다.</p>
<p>HTML:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div<span class="token operator">></span>이것은 블록 레벨 요소입니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>span<span class="token operator">></span>이것은 span입니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>div <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 2px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
span <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 2px solid green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>결과:</p>
<img src="@source/docs/Tech/2024-04-19-10MostUsedCSSDisplayValuesYouMustKnowAbout/img/10MostUsedCSSDisplayValuesYouMustKnowAbout_1.png" />
<p>여기서 <code v-pre>div</code>는 기본적으로 블록 수준 요소로 설정되어 있어 컨테이너의 전체 너비를 차지합니다. 반면에 <code v-pre>span</code>은 기본 블록 수준 동작을 가지지 않고 내용에 필요한 너비만 차지합니다.</p>
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
<p><code v-pre>span</code> 요소를 블록 수준 요소로 변환하려면 display 속성을 'block'으로 설정하면 됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>span <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 2px solid green<span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>결과:</p>
<img src="@source/docs/Tech/2024-04-19-10MostUsedCSSDisplayValuesYouMustKnowAbout/img/10MostUsedCSSDisplayValuesYouMustKnowAbout_2.png" />
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
<p>이제 <code v-pre>span</code>은 블록 수준 요소로, 컨테이너의 전체 너비를 차지합니다.</p>
<h2 id="display-inline" tabindex="-1"><a class="header-anchor" href="#display-inline" aria-hidden="true">#</a> display: inline;</h2>
<p>요소의 display 속성을 'inline'으로 설정하면 새로운 줄에서 시작하지 않고 콘텐츠에 필요한 너비를 차지합니다.</p>
<p>해당 요소의 너비와 높이 속성을 설정할 수 없습니다.</p>
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
<p>기본 인라인 요소 예시에는 <code v-pre>span</code>, <code v-pre>a</code>, <code v-pre>img</code> 등이 포함됩니다.</p>
<p>HTML:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>span<span class="token operator">></span>This is a span inline element<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
<span class="token operator">&lt;</span>a<span class="token operator">></span>This is a hyperlink inline element<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
<span class="token operator">&lt;</span>section<span class="token operator">></span>This is not a <span class="token keyword">default</span> inline element<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS:</p>
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
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">span</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">section</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p>
<img src="@source/docs/Tech/2024-04-19-10MostUsedCSSDisplayValuesYouMustKnowAbout/img/10MostUsedCSSDisplayValuesYouMustKnowAbout_3.png" />
<p>여기서 <code v-pre>span</code>과 <code v-pre>a</code>는 기본적으로 인라인 요소이며, 새로운 줄을 시작하거나 콘텐츠에 필요한 너비를 차지하지 않습니다. 반면에 <code v-pre>section</code>은 기본적으로 인라인 요소가 아니기 때문에 새로운 줄에서 시작합니다.</p>
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
<p><code v-pre>section</code> 요소를 인라인 요소로 변환하려면 display 속성을 'inline'으로 설정하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>section <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 2px solid blue<span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>결과:</p>
<img src="@source/docs/Tech/2024-04-19-10MostUsedCSSDisplayValuesYouMustKnowAbout/img/10MostUsedCSSDisplayValuesYouMustKnowAbout_4.png" />
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
<p>지금 <code v-pre>section</code>은 인라인 요소로 설정되어 있어요.</p>
<h1 id="display-inline-block" tabindex="-1"><a class="header-anchor" href="#display-inline-block" aria-hidden="true">#</a> display: inline-block;</h1>
<p>요소의 display 속성을 'inline-block'으로 설정하면 블록 요소와 인라인 요소의 기능을 모두 가질 수 있어요. 필요한 만큼의 너비만 차지하지만 높이와 너비 속성을 설정할 수 있어요.</p>
<p>HTML:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div<span class="token operator">></span>이것은 기본 블록 수준 요소입니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>span<span class="token operator">></span>이것은 기본 인라인 요소입니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>div <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 2px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
span <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 2px solid green<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>출력:</p>
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
<img src="@source/docs/Tech/2024-04-19-10MostUsedCSSDisplayValuesYouMustKnowAbout/img/10MostUsedCSSDisplayValuesYouMustKnowAbout_5.png" />
<p>여기서 <code v-pre>span</code> 요소에 높이 속성을 할당하려고 시도했지만, 인라인 속성 때문에 영향을 미치지 못하는 것 같아요.</p>
<p><code v-pre>display</code> 속성을 'inline-block'으로 변경함으로써 <code v-pre>span</code> 요소에 높이 속성을 성공적으로 적용할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>span <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 2px solid green<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token operator">-</span>block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>결과:</p>
<img src="@source/docs/Tech/2024-04-19-10MostUsedCSSDisplayValuesYouMustKnowAbout/img/10MostUsedCSSDisplayValuesYouMustKnowAbout_6.png" />
<h1 id="display-flex" tabindex="-1"><a class="header-anchor" href="#display-flex" aria-hidden="true">#</a> display: flex;</h1>
<p>display: flex; 속성은 유연한 레이아웃을 만들기 위해 사용할 수 있는 플랙스 컨테이너를 생성합니다.</p>
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
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Item 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Item 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Item 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid green<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>출력:</p>
<img src="@source/docs/Tech/2024-04-19-10MostUsedCSSDisplayValuesYouMustKnowAbout/img/10MostUsedCSSDisplayValuesYouMustKnowAbout_7.png" />
<h1 id="display-inline-flex" tabindex="-1"><a class="header-anchor" href="#display-inline-flex" aria-hidden="true">#</a> display: inline-flex;</h1>
<p>display: inline-flex; 속성은 display: flex;와 유사하지만 display: inline-flex;가 적용된 컨테이너는 인라인 요소처럼 동작합니다.</p>
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
<p>Markdown:</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Item 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Item 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Item 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid green<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>출력:</p>
<img src="@source/docs/Tech/2024-04-19-10MostUsedCSSDisplayValuesYouMustKnowAbout/img/10MostUsedCSSDisplayValuesYouMustKnowAbout_8.png" />
<h1 id="display-grid" tabindex="-1"><a class="header-anchor" href="#display-grid" aria-hidden="true">#</a> display: grid;</h1>
<p>display: grid; 속성은 컨테이너를 그리드 컨테이너로 변환하고 자식 요소를 그리드 항목으로 변환합니다. 그리드 레이아웃을 사용하면 행과 열에 대해 정밀한 제어가 가능합니다.</p>
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
<p>Markdown:</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token list punctuation">-</span> div.container {
  <span class="token list punctuation">-</span> display: grid;
  <span class="token list punctuation">-</span> border: 2px solid black;
<span class="token list punctuation">-</span> }
<span class="token list punctuation">-</span> div.item {
  <span class="token list punctuation">-</span> border: 1px solid green;
  <span class="token list punctuation">-</span> margin: 10px;
  <span class="token list punctuation">-</span> padding: 10px;
<span class="token list punctuation">-</span> }
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
<p>출력:</p>
<img src="@source/docs/Tech/2024-04-19-10MostUsedCSSDisplayValuesYouMustKnowAbout/img/10MostUsedCSSDisplayValuesYouMustKnowAbout_9.png" />
<h1 id="display-inline-grid" tabindex="-1"><a class="header-anchor" href="#display-inline-grid" aria-hidden="true">#</a> display: inline-grid;</h1>
<p>display: inline-grid; 속성은 display: grid;와 비슷하지만 display: inline-grid;가 적용된 컨테이너는 인라인 요소처럼 동작합니다.</p>
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
<p>Markdown:</p>
<table>
<thead>
<tr>
<th>HTML</th>
<th>CSS</th>
</tr>
</thead>
<tbody>
<tr>
<td><div class="container"> <br> <div class="item">Item 1</div> <br> <div class="item">Item 2</div> <br> <div class="item">Item 3</div> <br> </div></td>
<td>.container { <br> display: inline-grid; <br> border: 2px solid black; <br> } <br> .item { <br> border: 1px solid green; <br> margin: 10px; <br> padding: 10px; <br> }</td>
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
<p>아래 이미지를 확인해주세요.</p>
<p><img src="@source/docs/Tech/2024-04-19-10MostUsedCSSDisplayValuesYouMustKnowAbout/img/10MostUsedCSSDisplayValuesYouMustKnowAbout_10.png" alt="display: none;"></p>
<p>만약 요소의 display 속성을 'none'으로 설정하면, 해당 요소는 완전히 보이지 않고 문서 내에서 공간을 차지하지 않습니다.</p>
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
<p>CSS:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid green<span class="token punctuation">;</span>
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
<p>변경된 표를 마크다운 형식으로 보여드리겠습니다.</p>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>visibility: hidden;</td>
<td>보이지 않게 요소를 숨김. hidden으로 설정된 요소는 공간을 계속 차지함.</td>
</tr>
<tr>
<td>display: none;</td>
<td>요소를 화면에서 숨김. hidden과 달리 공간을 차지하지 않음.</td>
</tr>
</tbody>
</table>
<p>위의 코드를 복사하여 사용하시면 됩니다!</p>
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
<p>출력:</p>
<img src="@source/docs/Tech/2024-04-19-10MostUsedCSSDisplayValuesYouMustKnowAbout/img/10MostUsedCSSDisplayValuesYouMustKnowAbout_12.png" />
<h1 id="display-inherit" tabindex="-1"><a class="header-anchor" href="#display-inherit" aria-hidden="true">#</a> display: inherit;</h1>
<p>요소의 display 속성을 'inherit'로 설정하면 해당 요소가 부모 요소로부터 display 값을 상속받습니다.</p>
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
<p>Markdown:</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>This will inherit the display value from its parent.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>span <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> inherit<span class="token punctuation">;</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 2px solid green<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>span</code> 요소의 display 속성은 'inherit'로 설정되어 있으므로, 부모 요소인 <code v-pre>div</code>로부터 display 값을 상속받아 블록 수준 요소처럼 작동합니다.</p>
<p>결과:</p>
<img src="@source/docs/Tech/2024-04-19-10MostUsedCSSDisplayValuesYouMustKnowAbout/img/10MostUsedCSSDisplayValuesYouMustKnowAbout_13.png" />
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
<h1 id="display-initial" tabindex="-1"><a class="header-anchor" href="#display-initial" aria-hidden="true">#</a> display: initial;</h1>
<p>display: initial; 속성은 요소의 display 속성을 일반적으로 대부분의 요소에 대해 인라인으로 설정하는 초기 값으로 설정합니다.</p>
<p>HTML:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div<span class="token operator">></span>Lorem ipsum dolor sit<span class="token punctuation">,</span> amet consectetur adipisicing elit<span class="token punctuation">.</span> Saepe<span class="token punctuation">,</span> a<span class="token operator">?</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>CSS:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>div <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> initial<span class="token punctuation">;</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p>
<p><img src="@source/docs/Tech/2024-04-19-10MostUsedCSSDisplayValuesYouMustKnowAbout/img/10MostUsedCSSDisplayValuesYouMustKnowAbout_14.png" alt="CSS Display Values"></p>
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
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>이러한 표시 속성을 이해하면 잘 구조화되고 응답성 있는 웹 레이아웃을 만들 수 있습니다. HTML 요소에 적절한 표시 값을 선택하여 웹 페이지에서 그들의 동작과 시각적 표현에 대해 정밀한 제어를 할 수 있게 됩니다.</p>
<p>읽어 주셔서 감사합니다.</p>
<p>자세한 내용은 <a href="%EB%A7%81%ED%81%AC">여기를 클릭</a>하세요.</p>
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
<p>위의 내용은 다음과 같이 번역할 수 있습니다.</p>
<p>친구야, 웹 개발에 대한 매일 팁을 받으려면 X(트위터)에서도 저를 팔로우할 수 있어.</p>
<p>코딩을 계속 해보세요!!</p>
<p><img src="@source/docs/Tech/2024-04-19-10MostUsedCSSDisplayValuesYouMustKnowAbout/img/10MostUsedCSSDisplayValuesYouMustKnowAbout_15.png" alt="이미지"></p>
<h1 id="스택데미닉" tabindex="-1"><a class="header-anchor" href="#스택데미닉" aria-hidden="true">#</a> 스택데미닉</h1>
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
<p>끝까지 읽어주셔서 감사합니다. 떠나시기 전에:</p>
<ul>
<li>저자를 클로닝하고 팔로우해주세요! 👏</li>
<li>트위터(X), 링크드인, 유튜브에서 팔로우하기</li>
<li>Stackademic.com 방문하여 전세계에서 무료 프로그래밍 교육을 민주화하는 방법에 대해 더 알아보기</li>
</ul>
</div></template>
