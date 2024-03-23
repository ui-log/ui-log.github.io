<template><div><p><img src="@source/docs/Tech/2024-03-23-ThefanciestCSSborderyouwillevermake/img/The-fanciest-CSS-border-you-will-ever-make_0.png" alt="이미지"></p>
<p>우리 모두가 CSS로 간단한 테두리를 만드는 방법을 알고 있지만, 여러분이 웹사이트를 빛낼 수 있는 추가적인 단계를 밟고 싶다면 어떻게 해야 할까요? 여러 방법이 있습니다.</p>
<h2 id="_1-🔖-그라데이션-테두리" tabindex="-1"><a class="header-anchor" href="#_1-🔖-그라데이션-테두리" aria-hidden="true">#</a> 1. 🔖 그라데이션 테두리</h2>
<p>간단하지만 효과적입니다. 그라데이션 테두리는 JavaScript 없이도 사이트에 스타일을 추가할 수 있습니다. 이것을 만드는 여러 방법이 있습니다. 생소한 border-image 속성을 사용하거나 더 쉽게는 단순한 <code v-pre>background</code>를 사용할 수 있습니다.</p>
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
<p>유일한 주의점은 두 개의 컨테이너를 서로 중첩해야 한다는 것입니다.</p>
<p><img src="@source/docs/Tech/2024-03-23-ThefanciestCSSborderyouwillevermake/img/The-fanciest-CSS-border-you-will-ever-make_1.png" alt="이미지"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>wrapper <span class="token punctuation">{</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 300px<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 300px<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 3px<span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> linear<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> lightskyblue<span class="token punctuation">,</span> blueviolet<span class="token punctuation">)</span><span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>content <span class="token punctuation">{</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> white<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 18px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="_2-🔥-border-with-reactive-glow" tabindex="-1"><a class="header-anchor" href="#_2-🔥-border-with-reactive-glow" aria-hidden="true">#</a> 2. 🔥 Border with reactive glow</h1>
<p>더 나아가고 싶다면, 테두리가 사용자의 마우스 커서에 반응하는 것이 좋습니다. 불행하게도, 여기서는 HTML과 CSS만으로는 사용할 수 없어서 조금 더 복잡해집니다.</p>
<p>자바스크립트가 필요합니다. 두 개의 컨테이너를 중첩시킨 다음 각각에 마우스 커서를 따르는 블롭을 추가하면 시작할 수 있습니다.</p>
<h1 id="_3-🎉-카드를-투명하게-만들기" tabindex="-1"><a class="header-anchor" href="#_3-🎉-카드를-투명하게-만들기" aria-hidden="true">#</a> 3. 🎉 카드를 투명하게 만들기</h1>
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
<p>만약 우리가 진짜로 게임을 업하고 멋진 배경 위에 테두리 컨테이너를 표시하고 싶다면 어떻게 될까요?</p>
<p>그러나 여기서 문제가 발생합니다. 우리가 배경을 테두리로 사용하기 때문에 이를 제거하거나 투명하게 만들 수 없습니다. 따라서 우리의 배경 이미지가 보일 수밖에 없습니다. 그런데 우리는 어떻게 할까요?</p>
<p><img src="@source/docs/Tech/2024-03-23-ThefanciestCSSborderyouwillevermake/img/The-fanciest-CSS-border-you-will-ever-make_2.png" alt="이미지"></p>
<h2 id="✏️-만약-svg로-직접-테두리를-만들면-어떨까요" tabindex="-1"><a class="header-anchor" href="#✏️-만약-svg로-직접-테두리를-만들면-어떨까요" aria-hidden="true">#</a> ✏️ 만약 SVG로 직접 테두리를 만들면 어떨까요?</h2>
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
<p>배경 요소와 컨테이너 중첩을 버리고 원하는 요소 주변에 SVG를 만들어보는 건 어때요?</p>
<p>처음에는 좀 복잡해 보일 수 있지만, 결과는 가치가 있어요. 이렇게 간단화된 코드를 확인해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"relative"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 콘텐츠 크기를 기반으로 하고 테두리 너비로 오프셋을 조정합니다 <span class="token operator">--</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>svg
      viewBox<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">0 0 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>dimensions<span class="token punctuation">.</span>width <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>dimensions<span class="token punctuation">.</span>height <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span>
      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">pointerEvents</span><span class="token operator">:</span> <span class="token string">"none"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">"absolute"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> dimensions<span class="token punctuation">.</span>width<span class="token punctuation">,</span>
          <span class="token literal-property property">height</span><span class="token operator">:</span> dimensions<span class="token punctuation">.</span>height<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token operator">></span>
      <span class="token operator">&lt;</span>defs<span class="token operator">></span>
          <span class="token operator">&lt;</span>linearGradient
              id<span class="token operator">=</span><span class="token string">"borderGradient"</span>
              x1<span class="token operator">=</span><span class="token string">"100%"</span>
              y1<span class="token operator">=</span><span class="token string">"80%"</span>
              x2<span class="token operator">=</span><span class="token string">"0%"</span>
              y2<span class="token operator">=</span><span class="token string">"0%"</span>
          <span class="token operator">></span>
              <span class="token operator">&lt;</span>stop
                  offset<span class="token operator">=</span><span class="token string">"0%"</span>
                  style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
                      <span class="token literal-property property">stopColor</span><span class="token operator">:</span> <span class="token string">"#FFFFFF"</span><span class="token punctuation">,</span>
                      <span class="token literal-property property">stopOpacity</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">}</span>
              <span class="token operator">/</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>stop
                  offset<span class="token operator">=</span><span class="token string">"100%"</span>
                  style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
                      <span class="token literal-property property">stopColor</span><span class="token operator">:</span> <span class="token string">"#B0B0B0"</span><span class="token punctuation">,</span>
                      <span class="token literal-property property">stopOpacity</span><span class="token operator">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">}</span>
              <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>linearGradient<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>defs<span class="token operator">></span>
      <span class="token operator">&lt;</span>rect
          x<span class="token operator">=</span><span class="token string">"1"</span>
          y<span class="token operator">=</span><span class="token string">"1"</span>
          width<span class="token operator">=</span><span class="token punctuation">{</span>dimensions<span class="token punctuation">.</span>width <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">}</span>
          height<span class="token operator">=</span><span class="token punctuation">{</span>dimensions<span class="token punctuation">.</span>height <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">}</span>
          fill<span class="token operator">=</span><span class="token string">"none"</span>
          strokeWidth<span class="token operator">=</span><span class="token string">"1"</span>
          stroke<span class="token operator">=</span><span class="token string">"borderGradient"</span>
      <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>svg<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"content"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🖱️-마우스-효과-추가하기" tabindex="-1"><a class="header-anchor" href="#🖱️-마우스-효과-추가하기" aria-hidden="true">#</a> 🖱️ 마우스 효과 추가하기</h2>
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
<p>여기서 상황이 더 복잡해져서 현재로서는 깊게 파고들지 않겠습니다.</p>
<p>본질적으로 SVG에 다른 그래디언트를 추가하고 이를 마우스에 따라 움직이도록 만들어야 합니다 - 두 번째 예제와 같은 원리입니다.</p>
<p>그래디언트는 다음과 같이 보일 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>radialGradient
    id<span class="token operator">=</span><span class="token string">"radialGradient"</span>
    cx<span class="token operator">=</span><span class="token string">"50%"</span>
    cy<span class="token operator">=</span><span class="token string">"50%"</span>
    r<span class="token operator">=</span><span class="token string">"80%"</span>
    fx<span class="token operator">=</span><span class="token string">"50%"</span>
    fy<span class="token operator">=</span><span class="token string">"50%"</span>
<span class="token operator">></span>
    <span class="token operator">&lt;</span>stop
        offset<span class="token operator">=</span><span class="token string">"0%"</span>
        style<span class="token operator">=</span><span class="token punctuation">{</span>
            <span class="token literal-property property">stopColor</span><span class="token operator">:</span> <span class="token string">"#fff"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">stopOpacity</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">transition</span><span class="token operator">:</span> <span class="token string">"stop-opacity 1s"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>stop
        offset<span class="token operator">=</span><span class="token string">"100%"</span>
        style<span class="token operator">=</span><span class="token punctuation">{</span>
            <span class="token literal-property property">stopColor</span><span class="token operator">:</span> <span class="token string">"#fff"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">stopOpacity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token literal-property property">transition</span><span class="token operator">:</span> <span class="token string">"stop-opacity 1s"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>radialGradient<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
</div></template>
