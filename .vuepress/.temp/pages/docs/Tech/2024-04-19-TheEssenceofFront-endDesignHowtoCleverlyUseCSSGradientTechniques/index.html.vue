<template><div><p><img src="@source/docs/Tech/2024-04-19-TheEssenceofFront-endDesignHowtoCleverlyUseCSSGradientTechniques/img/TheEssenceofFront-endDesignHowtoCleverlyUseCSSGradientTechniques_0.png" alt="CSS Gradient"></p>
<p>CSS 그라데이션은 프론트엔드 디자인에서 강력하고 섬세한 도구로, 웹사이트에 풍부한 시각적 효과와 심도를 불러올 수 있습니다. 이 기사에서는 CSS 그라데이션 기술을 총망라하여 사용자 인터페이스의 매력을 높이는 방법을 자세히 알아볼 것입니다. 단순한 선형 그라데이션부터 복잡한 방사형 그라데이션까지, CSS는 시각적으로 인상적인 디자인을 만들기 위한 다양한 가능성을 제공합니다. 구체적인 예시와 단계를 통해 이러한 효과를 어떻게 구현하는지를 보여주고, 또한 현대 웹 디자인에서 그라데이션의 응용과 모범 사례에 대해 이야기할 것입니다. 초보자든 경험 있는 개발자든, 이 기사는 프론트엔드 프로젝트에서 CSS 그라데이션을 더 잘 활용할 수 있도록 필요한 지식과 영감을 제공할 것입니다.</p>
<p>프론트엔드 개발자로써 그라데이션을 생각해 볼 때, 먼저 떠오르는 것은 CSS 그라데이션입니다. 그러나 저는 거의 직접 쓰지 않습니다. 일반적으로 페이지를 자르는 경우에는 그런 효과가 거의 없습니다. 있더라도 대부분은 Sketch로부터 내보낸 CSS를 직접 복사해온 것입니다 🤪.</p>
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
<p>CSS에는 선형, 원형 및 원뿔형의 세 가지 그라데이션 유형이 있습니다. 바로 구문과 데모를 던지는 것은 조금 혼란스러울 수 있습니다. 먼저 위키피디아에서 제공한 그라데이션 정의를 살펴보겠습니다:</p>
<p>개념적으로 그라데이션은 주로 다음으로 구성됩니다:</p>
<ul>
<li>위치에 따라 변하는 색상, 색상 중지로도 알려집니다. 색상 중지는 두 부분으로 구성되어 있습니다: 색상 및 색상 위치. 예를 들어 파란색 20% 또는 파란색 20px입니다.</li>
<li>그라데이션 색상으로 영역을 채우려면 그라디언트의 시작점과 끝점을 결정해야 합니다. 이것은 색상 중지가 진행되는 방향을 나타냅니다.</li>
</ul>
<p>어떤 종류의 그라데이션이든 위에서 언급한 두 부분으로 구성됩니다. 전형적인 구문은 xx-gradient(방향, 색상 중지, 색상 중지 ...)입니다. 다양한 그라데이션 색상 중지는 일관성이 있으므로 그라디언트 방향을 결정하는 매개 변수를 구분하면 됩니다.</p>
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
<h2 id="선형-그라데이션" tabindex="-1"><a class="header-anchor" href="#선형-그라데이션" aria-hidden="true">#</a> 선형 그라데이션</h2>
<p>예를 들어, 선형 그라데이션의 경우 이름에서 알 수 있듯이 색깔이 직선으로 진행됩니다. 그라데이션 방향은 직선이므로 각도에 따라 그라데이션 방향을 직접 결정할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>linear <span class="token punctuation">{</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> linear<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>90deg<span class="token punctuation">,</span> blue <span class="token number">0</span><span class="token punctuation">,</span> pink <span class="token number">20</span><span class="token operator">%</span><span class="token punctuation">,</span> green <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 코드는 색상이 90도 방향(왼쪽에서 오른쪽)으로 진행되는 선형 그라데이션을 정의하며, 파란색부터 핑크, 그리고 초록색까지 서서히 변화하며 각 색상의 위치를 정의합니다.</p>
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
<p>이펙트는 사진에 나와 있는 대로입니다:</p>
<p>더 많은 정보를 얻으려면 MDN에 방문해보세요.</p>
<h2 id="광원-그라데이션" tabindex="-1"><a class="header-anchor" href="#광원-그라데이션" aria-hidden="true">#</a> 광원 그라데이션</h2>
<p>원형 그라데이션은 색상 중지점이 원 또는 타원을 따라 앞으로 이동합니다. 그라이언트의 방향을 결정하려면 그냥 원 또는 타원의 중심을 식별하면 됩니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>radial <span class="token punctuation">{</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> radial<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>circle at <span class="token number">50</span><span class="token operator">%</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">,</span> blue <span class="token number">0</span><span class="token punctuation">,</span> pink <span class="token number">40</span><span class="token operator">%</span><span class="token punctuation">,</span> green <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 코드는 요소의 중심에 원형 그라디언트를 정의합니다.</p>
<p>라디얼 그라디언트에 대해 더 알아보려면 MDN을 방문해보세요.</p>
<h2 id="원뿔-그라디언트" tabindex="-1"><a class="header-anchor" href="#원뿔-그라디언트" aria-hidden="true">#</a> 원뿔 그라디언트</h2>
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
<p>원뿔 그라데이션에서는 색 중지점이 중심점을 기준으로 회전하며, 각 색 중지점은 sector 모양의 영역을 형성합니다. 방사형 그라데이션과 유사하게 중심점을 찾아야 합니다. 또한 중심점을 중심으로 회전하므로 초기 회전 각도도 결정해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>conic <span class="token punctuation">{</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> conic<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>
    from 45deg at <span class="token number">50</span><span class="token operator">%</span> <span class="token number">30</span><span class="token operator">%</span><span class="token punctuation">,</span>
    blue <span class="token number">0</span><span class="token punctuation">,</span>
    pink <span class="token number">40</span><span class="token operator">%</span><span class="token punctuation">,</span>
    green <span class="token number">100</span><span class="token operator">%</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 코드는 중심이 요소의 50% 30%에 있는 원뿔 그라데이션을 정의하며, 45도에서 회전을 시작합니다.</p>
<p>더 많은 정보를 원하시면 MDN을 방문해보세요.</p>
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
<h2 id="더-알아보기" tabindex="-1"><a class="header-anchor" href="#더-알아보기" aria-hidden="true">#</a> 더 알아보기</h2>
<p>단일 그라데이션을 설정하는 것 외에도 CSS 그라데이션은 여러 개의 그라데이션을 함께 쌓는 것과 같은 고급 그라데이션 설정을 지원합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>stacked<span class="token operator">-</span>linear <span class="token punctuation">{</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> linear<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>
      217deg<span class="token punctuation">,</span>
      <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">70.71</span><span class="token operator">%</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span> linear<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>127deg<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">70.71</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    linear<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>336deg<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">70.71</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>더 많은 효과에 대한 정보는 MDN에서 확인할 수 있습니다.</p>
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
<p>CSS 그라데이션의 능력은 매우 강력합니다. 모든 것은 창의력에 달려 있어요. 🤔</p>
<h1 id="캔버스-그라데이션" tabindex="-1"><a class="header-anchor" href="#캔버스-그라데이션" aria-hidden="true">#</a> 캔버스 그라데이션</h1>
<p>캔버스는 선형 그라데이션과 원형 그라데이션을 비롯한 그라데이션도 지원합니다.</p>
<h2 id="캔버스" tabindex="-1"><a class="header-anchor" href="#캔버스" aria-hidden="true">#</a> 캔버스</h2>
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
<p>선형 그라데이션은 createLinearGradient(x1, y1, x2, y2)을 사용하며, 방향을 결정하기 위해 각도를 사용하는 CSS 선형 그라데이션과는 다릅니다. 네 개의 매개변수는 그라데이션의 시작점(x1, y1)과 끝점(x2, y2)을 나타냅니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> lineargradient <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createLinearGradient</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>반경 그라데이션은 createRadialGradient(x1, y1, r1, x2, y2, r2)를 사용하며, 여섯 개의 매개변수는 각각 내부 원 좌표(x1, y1), 내부 원 반지름(r1), 외부 원 좌표(x2, y2), 외부 원 반지름(r2)을 결정합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> radialgradient <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createRadialGradient</span><span class="token punctuation">(</span><span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>희석 영역과 방향을 결정한 후에는 그라디언트에 색상 중지점을 추가할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>lineargradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"white"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
lineargradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"black"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="fabric-js" tabindex="-1"><a class="header-anchor" href="#fabric-js" aria-hidden="true">#</a> fabric.js</h1>
<p>파브릭터 내의 그라디언트는 fabric.js를 기반으로 구현되어요.</p>
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
<p>파브릭.js의 그라데이션은 Canvas 그라데이션 API를 캡슐화하며, 소스 코드 위치는 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 코드 조각</span>
<span class="token keyword">var</span> gradient<span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'linear'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  gradient <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createLinearGradient</span><span class="token punctuation">(</span>
    coords<span class="token punctuation">.</span>x1<span class="token punctuation">,</span> coords<span class="token punctuation">.</span>y1<span class="token punctuation">,</span> coords<span class="token punctuation">.</span>x2<span class="token punctuation">,</span> coords<span class="token punctuation">.</span>y2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'radial'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  gradient <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createRadialGradient</span><span class="token punctuation">(</span>
    coords<span class="token punctuation">.</span>x1<span class="token punctuation">,</span> coords<span class="token punctuation">.</span>y1<span class="token punctuation">,</span> coords<span class="token punctuation">.</span>r1<span class="token punctuation">,</span> coords<span class="token punctuation">.</span>x2<span class="token punctuation">,</span> coords<span class="token punctuation">.</span>y2<span class="token punctuation">,</span> coords<span class="token punctuation">.</span>r2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>colorStops<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> color <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>colorStops<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>color<span class="token punctuation">,</span>
      opacity <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>colorStops<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>opacity<span class="token punctuation">,</span>
      offset <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>colorStops<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>offset<span class="token punctuation">;</span>
  
  gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span>offset<span class="token punctuation">,</span> color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">return</span> gradient<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>캔버스의 그라데이션 색상은 동시에 스트로크 및 필 동작을 할당할 수 있습니다:</p>
<h1 id="css-텍스트-그라데이션" tabindex="-1"><a class="header-anchor" href="#css-텍스트-그라데이션" aria-hidden="true">#</a> CSS 텍스트 그라데이션</h1>
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
<p>Canvas에서 fill 속성이 채우기에 사용된다는 것을 알았는지 궁금해요. 따라서 모든 모양과 텍스트에 그라데이션 색상을 적용할 수 있어요. CSS에서 그라데이션은 일반적으로 배경 또는 background-image 속성 내에서 사용되며, 일반적으로 배경에 사용되어요. 텍스트 색상은 color 속성을 사용하여 설정해요. 저는 color 속성에 그라데이션을 설정해 보았지만 작동하지 않았어요.</p>
<p>그렇다면 CSS에서 텍스트에 그라데이션 색상을 어떻게 적용할 수 있을까요?</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>background<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
background<span class="token operator">-</span>repeat<span class="token operator">:</span> repeat<span class="token punctuation">;</span>
background<span class="token operator">-</span>clip<span class="token operator">:</span> text<span class="token punctuation">;</span>
<span class="token literal-property property">color</span><span class="token operator">:</span> transparent<span class="token punctuation">;</span>
background<span class="token operator">-</span>image<span class="token operator">:</span> linear<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>45deg<span class="token punctuation">,</span> #f3ec78<span class="token punctuation">,</span> #af4261<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>background-clip 속성을 text로 설정하여 배경을 텍스트의 전경 색상으로 클리핑하는 것이 중요해요. 여기서 텍스트를 투명하게 설정하면 텍스트가 그라데이션 색상으로 표시될 거에요.</p>
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
<h1 id="svg-그라데이션" tabindex="-1"><a class="header-anchor" href="#svg-그라데이션" aria-hidden="true">#</a> SVG 그라데이션</h1>
<p>SVG는 점점 더 많이 사용되고 있으며 대부분의 아이콘 라이브러리에서는 직접적으로 SVG 아이콘을 제공합니다. 그래서 SVG에서 그라데이션을 어떻게 구현할까요? 먼저 떠오르는 것은 SVG에는 fill 속성이 있지만 CSS 그라데이션을 fill 속성에 직접적으로 설정하는 것은 작동하지 않습니다. SVG에는 자체 그라데이션 문법이 있습니다.</p>
<p>SVG에서 그라데이션을 설정하려면 먼저 그라데이션 SVG가 필요합니다.😂:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>svg style<span class="token operator">=</span><span class="token string">"width:0;height:0;position:absolute;"</span> aria<span class="token operator">-</span>hidden<span class="token operator">=</span><span class="token string">"true"</span> focusable<span class="token operator">=</span><span class="token string">"false"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>linearGradient id<span class="token operator">=</span><span class="token string">"my-cool-gradient"</span> x1<span class="token operator">=</span><span class="token string">"0"</span> y1<span class="token operator">=</span><span class="token string">"0"</span> x2<span class="token operator">=</span><span class="token string">"1"</span> y2<span class="token operator">=</span><span class="token string">"1"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>stop offset<span class="token operator">=</span><span class="token string">"0%"</span> stop<span class="token operator">-</span>color<span class="token operator">=</span><span class="token string">"#447799"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>stop offset<span class="token operator">=</span><span class="token string">"50%"</span> stop<span class="token operator">-</span>color<span class="token operator">=</span><span class="token string">"#224488"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>stop offset<span class="token operator">=</span><span class="token string">"100%"</span> stop<span class="token operator">-</span>color<span class="token operator">=</span><span class="token string">"#112266"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>linearGradient<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>svg<span class="token operator">></span>
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
<p>당신은 문법에 차이가 있음을 제외하고 캔버스에 있는 것과 일대일 대응한다는 것을 알게 될 거에요.</p>
<p>이 시점에서 linearGradient 태그에 해당하는 ID를 svg fill 속성에 할당하세요.</p>
<p>CSS 설정은 다음과 같을 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>icon<span class="token operator">-</span>sprite<span class="token operator">-</span>gradient <span class="token punctuation">{</span>
  <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token function">url</span><span class="token punctuation">(</span>sprite<span class="token punctuation">.</span>svg#my<span class="token operator">-</span>cool<span class="token operator">-</span>gradient<span class="token punctuation">)</span> red<span class="token punctuation">;</span>
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
<p>포함 속성은 인라인으로 직접 설정할 수도 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>svg <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"icon"</span> fill<span class="token operator">=</span><span class="token string">"url(#my-cool-gradient) #447799;"</span> aria<span class="token operator">-</span>hidden<span class="token operator">=</span><span class="token string">"true"</span> focusable<span class="token operator">=</span><span class="token string">"false"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>use xlink<span class="token operator">:</span>href<span class="token operator">=</span><span class="token string">"#symbol-id"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>use<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>svg<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>원형 그라데이션 구문은 캔버스와 일관성이 있어요. 이 부분은 여기서 더 자세히 다루지 않겠어요. MDN에서 확인할 수 있어요.</p>
<p>파브리터를 경험했다면, 텍스트를 그라데이션 색상으로 설정한 후에 툴바에 있는 아이콘도 그라데이션 색상으로 표시되는 것을 발견할 거에요. 이것은 위의 방법을 사용해서 달성되었어요.</p>
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
<p>또한 fabric.js에는 캔버스 그라데이션을 SVG 그라데이션으로 변환하는 toSVG 메서드가 있는데, gradient 클래스를 사용합니다.</p>
<p>프로젝트에 그라데이션 색상 선택 도구가 필요하다면 한 번 시도해보세요!</p>
</div></template>
