<template><div><p>간단한 CSS만으로 정렬된 이미지 그리드</p>
<img src="@source/docs/Tech/2024-03-29-CSSGridGallery/img/CSSGridGallery_0.png" />
<p>HTML과 CSS만으로 반응형이며 정렬된 이미지 그리드 갤러리를 만들 수 있습니다. 이 글에서는 어떻게 하는지 배워보세요.</p>
<h1 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h1>
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
<p>먼저 HTML이 필요합니다. 이를 위해 <code v-pre>section</code> 태그를 사용하며 클래스는 justified-grid-gallery를 지정합니다. 이 섹션 요소 안에 이미지를 배치합니다. 다음 예제 코드에서는 7개의 이미지가 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>section <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"justified-grid-gallery"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>figure style<span class="token operator">=</span><span class="token string">"--width: 640; --height: 520; "</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"https://loremflickr.com/640/520/butterfly?random=1"</span> alt<span class="token operator">=</span><span class="token string">"a random image with a butterfly"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>figure<span class="token operator">></span>
  <span class="token operator">&lt;</span>figure style<span class="token operator">=</span><span class="token string">"--width: 500; --height: 420; "</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"https://loremflickr.com/500/420/butterfly?random=2"</span> alt<span class="token operator">=</span><span class="token string">"a random image with a butterfly"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>figure<span class="token operator">></span>
  <span class="token operator">&lt;</span>figure style<span class="token operator">=</span><span class="token string">"--width: 710; --height: 580; "</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"https://loremflickr.com/710/580/butterfly?random=3"</span> alt<span class="token operator">=</span><span class="token string">"a random image with a butterfly"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>figure<span class="token operator">></span>
  <span class="token operator">&lt;</span>figure style<span class="token operator">=</span><span class="token string">"--width: 760; --height: 540; "</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"https://loremflickr.com/760/540/butterfly?random=4"</span> alt<span class="token operator">=</span><span class="token string">"a random image with a butterfly"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>figure<span class="token operator">></span>
  <span class="token operator">&lt;</span>figure style<span class="token operator">=</span><span class="token string">"--width: 690; --height: 570; "</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"https://loremflickr.com/690/570/butterfly?random=5"</span> alt<span class="token operator">=</span><span class="token string">"a random image with a butterfly"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>figure<span class="token operator">></span>
  <span class="token operator">&lt;</span>figure style<span class="token operator">=</span><span class="token string">"--width: 540; --height: 340; "</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"https://loremflickr.com/540/340/butterfly?random=6"</span> alt<span class="token operator">=</span><span class="token string">"a random image with a butterfly"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>figure<span class="token operator">></span>
  <span class="token operator">&lt;</span>figure style<span class="token operator">=</span><span class="token string">"--width: 340; --height: 550; "</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"https://loremflickr.com/340/550/butterfly?random=7"</span> alt<span class="token operator">=</span><span class="token string">"a random image with a butterfly"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>figure<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 더 화려한 것이 필요하다면 https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>gridzy<span class="token punctuation">.</span>gallery<span class="token operator">/</span>를 확인해보세요<span class="token punctuation">.</span> <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>figure</code> 태그 모두에 style 속성이 있는 것을 보실 수 있습니다. 그리드가 작동하려면 이미지 크기를 명시적으로 지정해야 합니다.</p>
<p>따라서 이 스타일 속성에서 사용자 정의 속성 --width와 --height를 정의합니다. 사용자 정의 속성의 값은 단위 없이 숫자만 사용하므로 예를 들어 640px가 아닌 640을 사용합니다. 너비와 높이의 값은 이미지의 원래 너비와 높이에 해당합니다.</p>
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
<h1 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h1>
<p>CSS 부분은 꽤 간단합니다. 아래 CSS 코드 조각을 복사하여 자신의 프로젝트에 붙여넣기하면 됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 설정 시작 */</span>
<span class="token punctuation">.</span>justified<span class="token operator">-</span>grid<span class="token operator">-</span>gallery <span class="token punctuation">{</span>
  <span class="token operator">--</span>space<span class="token operator">:</span> 4px<span class="token punctuation">;</span>
  <span class="token operator">--</span>min<span class="token operator">-</span>height<span class="token operator">:</span> 190px<span class="token punctuation">;</span>
  <span class="token operator">--</span>last<span class="token operator">-</span>row<span class="token operator">-</span>background<span class="token operator">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">188</span> <span class="token number">234</span> <span class="token number">153</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 설정 끝 */</span>

<span class="token punctuation">.</span>justified<span class="token operator">-</span>grid<span class="token operator">-</span>gallery <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>wrap<span class="token operator">:</span> wrap<span class="token punctuation">;</span>
  grid<span class="token operator">-</span>gap<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>space<span class="token punctuation">)</span><span class="token punctuation">;</span>
  list<span class="token operator">-</span>style<span class="token operator">:</span> none<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token operator">!</span>important<span class="token punctuation">;</span> <span class="token comment">/* 어떤 환경에서 공백을 피하기 위해 !important를 사용합니다. */</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token operator">!</span>important<span class="token punctuation">;</span> <span class="token comment">/* 어떤 환경에서 공백을 피하기 위해 !important를 사용합니다. */</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>justified<span class="token operator">-</span>grid<span class="token operator">-</span>gallery <span class="token operator">></span> <span class="token operator">*</span> <span class="token punctuation">{</span>
  flex<span class="token operator">-</span>grow<span class="token operator">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>width<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">100000</span> <span class="token operator">/</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>height<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  flex<span class="token operator">-</span>basis<span class="token operator">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>min<span class="token operator">-</span>height<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>width<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>height<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  aspect<span class="token operator">-</span>ratio<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>width<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
  <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token operator">!</span>important<span class="token punctuation">;</span> <span class="token comment">/* 어떤 환경에서 공백을 피하기 위해 !important를 사용합니다. */</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token operator">!</span>important<span class="token punctuation">;</span> <span class="token comment">/* 어떤 환경에서 공백을 피하기 위해 !important를 사용합니다. */</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>justified<span class="token operator">-</span>grid<span class="token operator">-</span>gallery <span class="token operator">></span> <span class="token operator">*</span> <span class="token operator">></span> img <span class="token punctuation">{</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>justified<span class="token operator">-</span>grid<span class="token operator">-</span>gallery<span class="token operator">:</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">" "</span><span class="token punctuation">;</span>
  flex<span class="token operator">-</span>grow<span class="token operator">:</span> <span class="token number">1000000000</span><span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>last<span class="token operator">-</span>row<span class="token operator">-</span>background<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 더 화려한 효과를 원하시면 https://gridzy.gallery/ 을 확인해보세요 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 현재 상태에서 어떻게 보이는지 살펴보겠습니다:</p>
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
<p>보시는대로, 마지막 행의 나머지 부분은 녹색 영역으로 채워져 있습니다. 기술적인 이유로 항상 이 &quot;빈&quot; 영역이 마지막 행에 존재합니다.</p>
<p>그러나 이 영역에서 색상을 제거하거나 다른 CSS 배경으로 채우는 것도 가능합니다. 추가로 몇 가지 다른 항목들도 변경할 수 있습니다.</p>
<h1 id="설정" tabindex="-1"><a class="header-anchor" href="#설정" aria-hidden="true">#</a> 설정</h1>
<p>CSS 부분에 설정이 몇 가지 있음을 보았을 것입니다. 함께 살펴보도록 합시다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 설정 시작 */</span>
<span class="token punctuation">.</span>justified<span class="token operator">-</span>grid<span class="token operator">-</span>gallery <span class="token punctuation">{</span>
  <span class="token operator">--</span>space<span class="token operator">:</span> 4px<span class="token punctuation">;</span>
  <span class="token operator">--</span>min<span class="token operator">-</span>height<span class="token operator">:</span> 190px<span class="token punctuation">;</span>
  <span class="token operator">--</span>last<span class="token operator">-</span>row<span class="token operator">-</span>background<span class="token operator">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">188</span> <span class="token number">234</span> <span class="token number">153</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 설정 끝 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="간격" tabindex="-1"><a class="header-anchor" href="#간격" aria-hidden="true">#</a> 간격</h2>
<p>--space는 항목 간의 간격을 정의합니다. CSS 부분에서 값을 간단히 변경하거나 다음과 같이 HTML 부분에서 정의할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>ul <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"justified-grid-gallery"</span> style<span class="token operator">=</span><span class="token string">"--space: 1px; "</span><span class="token operator">></span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="최소-높이" tabindex="-1"><a class="header-anchor" href="#최소-높이" aria-hidden="true">#</a> 최소 높이</h2>
<p>--min-height은 이미지 라인의 최소 높이를 정의합니다. 이를 CSS 부분이나 다음과 같이 HTML 부분에서 변경할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>ul <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"justified-grid-gallery"</span> style<span class="token operator">=</span><span class="token string">"--min-height: 200px; "</span><span class="token operator">></span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="마지막-행-배경" tabindex="-1"><a class="header-anchor" href="#마지막-행-배경" aria-hidden="true">#</a> 마지막 행 배경</h2>
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
<p>--last-row-background는 마지막 행의 빈 공간의 배경을 정의합니다. 이는 CSS 색상 또는 다른 CSS 배경일 수 있습니다.</p>
<p>--last-row-background: none;을 사용하여 어떤 배경도 없이 공백을 남길 수 있습니다.</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>현대 CSS를 사용하면 아름답고 간단한 정렬된 이미지 그리드 갤러리를 만들 수 있으며 설정도 제공합니다. 그러나 더 쉬운 것이나 화려한 것이 필요하다면 Gridzy.Gallery를 선택할 수도 있습니다.</p>
</div></template>
