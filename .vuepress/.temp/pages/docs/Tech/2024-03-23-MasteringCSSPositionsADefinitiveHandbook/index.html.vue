<template><div><img src="@source/docs/Tech/2024-03-23-MasteringCSSPositionsADefinitiveHandbook/img/Mastering-CSS-Positions-:-A-Definitive-Handbook_0.png" />
<p>CSS (Cascading Style Sheets)는 웹 개발에서 강력한 스타일링 및 요소 위치 지정 도구를 제공하는 기본 기술입니다. CSS positions 중요한 역할을 하는 요소의 레이아웃을 제어하는 데 중요한 역할을 합니다. 본문에서는 CSS positions를 탐구하면서 다양한 유형을 알아보고 사용 예를 통해 설명합니다.</p>
<h1 id="css-positions-이해" tabindex="-1"><a class="header-anchor" href="#css-positions-이해" aria-hidden="true">#</a> CSS Positions 이해</h1>
<p>CSS positions는 요소가 포함 요소 내에 위치하는 방식을 결정합니다. CSS에는 static, relative, absolute, fixed, sticky. 다섯 가지 주요 position 값이 있습니다. 이제 이러한 positions을 자세히 살펴보겠습니다:</p>
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
<h2 id="_1-정적-위치-지정" tabindex="-1"><a class="header-anchor" href="#_1-정적-위치-지정" aria-hidden="true">#</a> 1- 정적 위치 지정</h2>
<ul>
<li>정적 위치 지정은 CSS에서 요소의 기본 동작입니다.</li>
<li>정적 위치 지정된 요소는 문서의 일반적인 흐름에 따라 위치가 지정됩니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>static<span class="token operator">-</span>example <span class="token punctuation">{</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token keyword">static</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-상대적-위치-지정" tabindex="-1"><a class="header-anchor" href="#_2-상대적-위치-지정" aria-hidden="true">#</a> 2- 상대적 위치 지정</h2>
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
<ul>
<li>상대 위치 지정은 요소를 일반 위치를 기준으로 배치할 수 있게 합니다.</li>
<li>요소가 상대적으로 위치지정되면 top, right, bottom 및 left 속성을 사용하여 이동할 수 있습니다.</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.relative-example</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-절대-위치-지정" tabindex="-1"><a class="header-anchor" href="#_3-절대-위치-지정" aria-hidden="true">#</a> 3- 절대 위치 지정</h2>
<ul>
<li>절대 위치 지정은 요소를 일반 문서 흐름에서 제거하고 가장 가까운 상대적으로 위치가 지정된 조상을 기준으로 배치합니다.</li>
<li>절대적으로 위치가 지정된 요소는 다른 요소에 영향을 받지 않고 겹칠 수 있습니다.</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>absolute<span class="token operator">-</span>example <span class="token punctuation">{</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-고정-위치" tabindex="-1"><a class="header-anchor" href="#_4-고정-위치" aria-hidden="true">#</a> 4- 고정 위치</h2>
<ul>
<li>고정 위치는 요소를 브라우저 창을 기준으로 배치합니다.</li>
<li>고정된 요소는 페이지를 스크롤해도 같은 위치에 유지됩니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>fixed<span class="token operator">-</span>example <span class="token punctuation">{</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> fixed<span class="token punctuation">;</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
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
<h2 id="_5-스티키-포지셔닝" tabindex="-1"><a class="header-anchor" href="#_5-스티키-포지셔닝" aria-hidden="true">#</a> 5- 스티키 포지셔닝</h2>
<ul>
<li>스티키 포지셔닝은 상대 포지셔닝과 고정 포지셔닝의 혼합입니다.</li>
<li>요소가 지정된 임계값에 도달할 때까지 상대적인 위치를 유지하다가 그 이후에 고정 포지션으로 변합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>sticky<span class="token operator">-</span>example <span class="token punctuation">{</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> sticky<span class="token punctuation">;</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="실용적인-예제" tabindex="-1"><a class="header-anchor" href="#실용적인-예제" aria-hidden="true">#</a> 실용적인 예제</h2>
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
<p>자 CSS 위치 지정을 사용하여 간단한 레이아웃을 만드는 실용적인 예시를 살펴봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>title<span class="token operator">></span><span class="token constant">CSS</span> Positions Example<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
  <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"style.css"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"box"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid #<span class="token number">000</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>box <span class="token punctuation">{</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h2>
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
<p>CSS positions을 마스터하는 것은 동적이고 시각적으로 매력적인 웹 레이아웃을 만드는 데 중요합니다. 다양한 position 값과 그 동작을 이해함으로써, 웹 개발자들은 웹페이지의 요소들의 위치를 효과적으로 제어할 수 있습니다. 다양한 position 값과 속성을 실험하면 웹 프로젝트를 위해 다재다능하고 반응형 레이아웃을 만들 수 있게 될 것입니다.</p>
</div></template>
