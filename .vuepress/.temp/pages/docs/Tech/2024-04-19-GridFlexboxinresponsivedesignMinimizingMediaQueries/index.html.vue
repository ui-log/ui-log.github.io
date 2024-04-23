<template><div><img src="@source/docs/Tech/2024-04-19-GridFlexboxinresponsivedesignMinimizingMediaQueries/img/Grid-FlexboxinresponsivedesignMinimizingMediaQueries_0.png" />
<p>반응형 웹사이트를 처음 만들 때 CSS Grid와 Flexbox에 익숙하지 않았고, 불필요한 미디어 쿼리를 작성하고 있다는 것을 알고 있었어요. 코딩에 아직 많이 익숙하지 않지만, CSS의 Grid와 Flexbox 기능을 사용하여 미디어 쿼리를 간소화하는 데 도움이 되는 몇 가지 요소를 공유하고자 합니다.</p>
<p>먼저 Grid 기반 레이아웃으로 시작하는 것이 도움이 되었어요. 이는 확장성 있는 프레임워크를 생성하여 다양한 화면 크기에 적응할 수 있도록 해줍니다. 이러한 점으로 인해 포괄적인 미디어 쿼리 없이도 작업할 수 있게 되었죠.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span><span class="token constant">CSS</span><span class="token operator">:</span> Using media queries and grid <span class="token constant">CSS</span> to reflow columns<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
    <span class="token operator">&lt;</span>style<span class="token operator">></span>

    <span class="token comment">/* Reflow Styling */</span>
    header<span class="token punctuation">[</span>role<span class="token operator">=</span><span class="token string">"banner"</span><span class="token punctuation">]</span>       <span class="token punctuation">{</span> grid<span class="token operator">-</span>area<span class="token operator">:</span> header<span class="token punctuation">;</span> <span class="token punctuation">}</span>
    main<span class="token punctuation">[</span>role<span class="token operator">=</span><span class="token string">"main"</span><span class="token punctuation">]</span>           <span class="token punctuation">{</span> grid<span class="token operator">-</span>area<span class="token operator">:</span> main<span class="token punctuation">;</span> <span class="token punctuation">}</span>
    aside<span class="token punctuation">[</span>role<span class="token operator">=</span><span class="token string">"complementary"</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> grid<span class="token operator">-</span>area<span class="token operator">:</span> aside<span class="token punctuation">;</span> <span class="token punctuation">}</span>
    footer<span class="token punctuation">[</span>role<span class="token operator">=</span><span class="token string">"contentinfo"</span><span class="token punctuation">]</span>  <span class="token punctuation">{</span> grid<span class="token operator">-</span>area<span class="token operator">:</span> footer<span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token punctuation">.</span>grid<span class="token punctuation">,</span>
    <span class="token punctuation">.</span>subgrid <span class="token punctuation">{</span>
      <span class="token literal-property property">display</span><span class="token operator">:</span> grid<span class="token punctuation">;</span>
      grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token operator">:</span> <span class="token function">minmax</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">.</span>grid <span class="token punctuation">{</span>
      grid<span class="token operator">-</span>template<span class="token operator">-</span>areas<span class="token operator">:</span>
      <span class="token string">'header'</span>
      <span class="token string">'main'</span>
      <span class="token string">'aside'</span>
      <span class="token string">'footer'</span><span class="token punctuation">;</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">.</span>subgrid <span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">%</span> <span class="token operator">+</span> 2rem<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token operator">-</span>1rem<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">.</span>grid<span class="token operator">-</span>item<span class="token punctuation">,</span>
    <span class="token punctuation">.</span>subgrid<span class="token operator">-</span>item <span class="token punctuation">{</span>
      <span class="token literal-property property">padding</span><span class="token operator">:</span> 1rem<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    @media all <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">min<span class="token operator">-</span>width<span class="token operator">:</span> 576px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">.</span>subgrid <span class="token punctuation">{</span>
        grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token operator">:</span> <span class="token function">minmax</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span> <span class="token function">minmax</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        margin<span class="token operator">-</span>bottom<span class="token operator">:</span> 1rem<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">.</span>subgrid<span class="token operator">-</span>item <span class="token punctuation">{</span>
        padding<span class="token operator">-</span>bottom<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>25rem<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    @media all <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">min<span class="token operator">-</span>width<span class="token operator">:</span> 992px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      <span class="token punctuation">.</span>grid <span class="token punctuation">{</span>
        grid<span class="token operator">-</span>template<span class="token operator">-</span>areas<span class="token operator">:</span>
          <span class="token string">'header header header'</span>
          <span class="token string">'main main aside'</span>
          <span class="token string">'footer footer footer'</span><span class="token punctuation">;</span>
        grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token operator">:</span> <span class="token function">minmax</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span> <span class="token function">minmax</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span> <span class="token function">minmax</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>

  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>

  <span class="token operator">&lt;</span>body <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"grid"</span><span class="token operator">></span>

    <span class="token operator">&lt;</span>header role<span class="token operator">=</span><span class="token string">"banner"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"grid-item"</span><span class="token operator">></span>
      <span class="token operator">...</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">></span>

    <span class="token operator">&lt;</span>main role<span class="token operator">=</span><span class="token string">"main"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"grid-item"</span><span class="token operator">></span>        
      <span class="token operator">...</span>
      <span class="token operator">...</span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"subgrid"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"subgrid-item"</span><span class="token operator">></span>
          <span class="token operator">...</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"subgrid-item"</span><span class="token operator">></span>
          <span class="token operator">...</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>

    <span class="token operator">&lt;</span>aside role<span class="token operator">=</span><span class="token string">"complementary"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"grid-item"</span><span class="token operator">></span>
      <span class="token operator">...</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>aside<span class="token operator">></span>

    <span class="token operator">&lt;</span>footer role<span class="token operator">=</span><span class="token string">"contentinfo"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"grid-item"</span><span class="token operator">></span>
      <span class="token operator">...</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>footer<span class="token operator">></span>

  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그리드의 내재된 반응성을 통해 그리드 항목의 유동적인 크기 조정과 재배치가 가능해지며, 이는 미디어 쿼리에서 빈번한 조정이 필요한 고정 너비 레이아웃의 양을 줄여줍니다.</p>
<p>반면에 플렉스박스는 컨테이너 내 항목의 정렬 및 분배를 가로 또는 세로로 효과적으로 제어할 수 있습니다. 그리드 셀이나 영역 내에서 플렉스박스를 사용하면 추가 미디어 쿼리를 사용하지 않고도 개별 요소의 위치를 미세 조정할 수 있습니다. 이를 통해 뷰포트 크기에 자동으로 반응하는 유연한 레이아웃을 만들 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>title<span class="token operator">></span>최소 미디어 쿼리로 구성된 그리드 기반 레이아웃<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
<span class="token operator">&lt;</span>style<span class="token operator">></span>
    <span class="token punctuation">.</span>grid<span class="token operator">-</span>container <span class="token punctuation">{</span>
        <span class="token literal-property property">display</span><span class="token operator">:</span> grid<span class="token punctuation">;</span>
        grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token operator">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto<span class="token operator">-</span>fill<span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span>200px<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 최소 200px 폭의 반응형 그리드 */</span>
        grid<span class="token operator">-</span>gap<span class="token operator">:</span> 20px<span class="token punctuation">;</span> <span class="token comment">/* 그리드 항목 사이의 간격 */</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>grid<span class="token operator">-</span>item <span class="token punctuation">{</span>
        <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
        background<span class="token operator">-</span>color<span class="token operator">:</span> #f0f0f0<span class="token punctuation">;</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
        text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>

<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"grid-container"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"grid-item"</span><span class="token operator">></span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"grid-item"</span><span class="token operator">></span><span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"grid-item"</span><span class="token operator">></span><span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"grid-item"</span><span class="token operator">></span><span class="token number">4</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"grid-item"</span><span class="token operator">></span><span class="token number">5</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"grid-item"</span><span class="token operator">></span><span class="token number">6</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"grid-item"</span><span class="token operator">></span><span class="token number">7</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"grid-item"</span><span class="token operator">></span><span class="token number">8</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"grid-item"</span><span class="token operator">></span><span class="token number">9</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리드와 플렉스박스를 결합함으로써 미디어 쿼리에서의 코드 수정을 최소화하면서도 높은 수준의 반응성과 유연성을 유지할 수 있습니다. 이 협업적인 접근법을 통해 현재의 디지털 랜드스케이프에서 다양한 디바이스와 화면 해상도에 적응하는 반응형 디자인을 쉽게 구축할 수 있습니다.</p>
</div></template>
