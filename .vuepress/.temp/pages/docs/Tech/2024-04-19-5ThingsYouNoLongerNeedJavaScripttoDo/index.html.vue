<template><div><p><code v-pre>&lt;img src=&quot;./img/5ThingsYouNoLongerNeedJavaScripttoDo_0.png&quot; /&gt;</code></p>
<p>때로는 JavaScript(JS)에 지나치게 의존하는 것이 웹 개발에서 HTML과 CSS의 강력한 기능을 가리는 경우가 있습니다. 여기서 JS가 뒷전일 수 있는 다섯 가지 기능을 살펴보겠습니다:</p>
<h1 id="css로-제어되는-svg-애니메이션-🎆" tabindex="-1"><a class="header-anchor" href="#css로-제어되는-svg-애니메이션-🎆" aria-hidden="true">#</a> CSS로 제어되는 SVG 애니메이션 🎆</h1>
<p>JS에 의존하는 대신 CSS로 화려한 SVG 애니메이션을 만들 수 있습니다. 예를 들어, 아래 스니펫을 사용하여 폭죽을 시뮬레이션할 수 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>trail <span class="token punctuation">{</span>
  stroke<span class="token operator">-</span>width<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">;</span>
  stroke<span class="token operator">-</span>dasharray<span class="token operator">:</span> <span class="token number">1</span> <span class="token number">10</span> <span class="token number">5</span> <span class="token number">10</span> <span class="token number">10</span> <span class="token number">5</span> <span class="token number">30</span> <span class="token number">150</span><span class="token punctuation">;</span>
  animation<span class="token operator">-</span>name<span class="token operator">:</span> trail<span class="token punctuation">;</span>
  animation<span class="token operator">-</span>timing<span class="token operator">-</span><span class="token keyword">function</span><span class="token operator">:</span> ease<span class="token operator">-</span>out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

@keyframes trail <span class="token punctuation">{</span>
  from<span class="token punctuation">,</span>
  to <span class="token punctuation">{</span>
    stroke<span class="token operator">-</span>width<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">;</span>
    stroke<span class="token operator">-</span>dashoffset<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">{</span>
    stroke<span class="token operator">-</span>width<span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">;</span>
    stroke<span class="token operator">-</span>dashoffset<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">150</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SVG 경로에서 선 그리기 효과를 만들기 위해 stroke-dasharray와 animation이 어떻게 조화롭게 작용하는지 살펴보세요.</p>
<h1 id="css로-반응형-사이드바-만들기-📑" tabindex="-1"><a class="header-anchor" href="#css로-반응형-사이드바-만들기-📑" aria-hidden="true">#</a> CSS로 반응형 사이드바 만들기 📑</h1>
<p>순수 CSS를 사용하여 호버로 트리거되는 사이드바를 만들어보세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nav <span class="token punctuation">{</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
  <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">transition</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>2s transform<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token literal-property property">nav</span><span class="token operator">:</span>hover<span class="token punctuation">,</span>
<span class="token literal-property property">nav</span><span class="token operator">:</span>focus<span class="token operator">-</span>within <span class="token punctuation">{</span>
  <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>키포인트는 transform 속성으로, 해당 요소를 호버시 요소의 너비만큼 이동시킵니다. :focus-within 가상 클래스는 요소를 탭으로 이동할 때 사이드바 상태를 유지하는 데 도움이 됩니다.</p>
<h1 id="css-sticky를-활용하여-위치-지정하기-📍" tabindex="-1"><a class="header-anchor" href="#css-sticky를-활용하여-위치-지정하기-📍" aria-hidden="true">#</a> CSS sticky를 활용하여 위치 지정하기 📍</h1>
<p>요소들을 고정하는 데 position: sticky를 활용하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>square <span class="token punctuation">{</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> sticky<span class="token punctuation">;</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> 2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 CSS 접근 방식은 JS보다 부드럽습니다. 이는 흔들림을 방지하고 브라우저 렌더링과 일치시킵니다.</p>
<h1 id="간단한-아코디언-메뉴-🎶" tabindex="-1"><a class="header-anchor" href="#간단한-아코디언-메뉴-🎶" aria-hidden="true">#</a> 간단한 아코디언 메뉴 🎶</h1>
<p>아코디언 효과를 위해 HTML의 <code v-pre>details</code> 태그를 활용하세요.</p>
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
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>details</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span>Title Here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Content Line 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Content Line 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>details</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>기본적으로 <code v-pre>summary</code> 내용은 항상 표시되며, 나머지 세부 정보를 토글할 수 있게 해줍니다.</p>
<h1 id="css를-사용한-다크-모드-구현-🌗" tabindex="-1"><a class="header-anchor" href="#css를-사용한-다크-모드-구현-🌗" aria-hidden="true">#</a> CSS를 사용한 다크 모드 구현 🌗</h1>
<p>다크 테마의 광범위한 채택으로, prefers-color-scheme 미디어 피처를 사용하세요:```</p>
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
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">prefers-color-scheme</span><span class="token punctuation">:</span> light<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token comment">/* 밝은 테마 스타일 */</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">prefers-color-scheme</span><span class="token punctuation">:</span> dark<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token comment">/* 어두운 테마 스타일 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 CSS는 사용자의 시스템 설정을 존중하여 매끄러운 경험을 제공합니다.</p>
<h1 id="추가-정보-🔍" tabindex="-1"><a class="header-anchor" href="#추가-정보-🔍" aria-hidden="true">#</a> 추가 정보 🔍</h1>
<p>이 5가지 예시 이상으로, 전체 기사에서는 scroll snapping 및 네이티브 컬러 피커와 같은 다른 기능을 탐구합니다. 다양한 효과와 상호작용에 JS를 활용하는 것이 유혹적일 수 있지만, HTML의 의미론적 요소와 CSS의 스타일링 기능을 활용하면 더 효율적이고 우아한 코딩 솔루션을 찾을 수 있습니다.</p>
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
<p>작업에 적합한 도구를 선택하는 것은 숙련된 웹 개발의 특징입니다. JS에 손을 댈 때 앞서 HTML과 CSS를 고려하는 것을 잊지 마세요.</p>
</div></template>
