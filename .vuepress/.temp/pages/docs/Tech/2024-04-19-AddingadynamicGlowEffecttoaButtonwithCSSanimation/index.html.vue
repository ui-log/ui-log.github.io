<template><div><p>HTML과 CSS를 사용하여 반짝이는 버튼 애니메이션 만들기</p>
<p>버튼은 웹 디자인에서 필수적인 요소이며, 그들에 애니메이션을 추가함으로써 사용자 상호작용을 향상시키고 사용자 경험을 더 매력적으로 만들 수 있습니다. 이 튜토리얼에서는 HTML과 CSS를 사용하여 반짝이는 버튼 애니메이션을 만드는 방법을 안내합니다.</p>
<p>HTML 구조:</p>
<p>우선 HTML 구조부터 시작해봅시다. 간단한 버튼을 만들고 내부에 일부 텍스트를 넣겠습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"style.css"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>title<span class="token operator">></span>Button Animation by Ashish<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
  <span class="token operator">&lt;</span>a <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"box__link button-animation"</span> href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>
    Submit
    <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
    <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
    <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
    <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서 &quot;button-animation&quot; 클래스를 가진 <code v-pre>a</code> 태그가 있습니다. 그 안에 &quot;Submit&quot; 텍스트와 네 개의 빈 <code v-pre>span</code> 태그가 있습니다. 이러한 <code v-pre>span</code> 태그들은 빛나는 효과를 만들기 위해 사용될 것입니다.</p>
<p>CSS 스타일링:</p>
<p>이제 CSS 부분으로 이동하여 버튼에 스타일과 애니메이션을 추가해 봅시다.</p>
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
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/*=============== GOOGLE FONTS ===============*/</span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token function">url</span><span class="token punctuation">(</span>"<span class="token property">https</span><span class="token punctuation">:</span>//fonts.googleapis.com/css2?family=<span class="token property">Montserrat</span><span class="token punctuation">:</span>wght<span class="token atrule"><span class="token rule">@400</span><span class="token punctuation">;</span></span></span>600&amp;display=swap"<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*=============== VARIABLES CSS ===============*/</span>
<span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token comment">/*========== Colors ==========*/</span>
  <span class="token comment">/*Color mode HSL(hue, saturation, lightness)*/</span>
  <span class="token property">--body-color</span><span class="token punctuation">:</span> #393937<span class="token punctuation">;</span>
  <span class="token property">--accent-color</span><span class="token punctuation">:</span> #03e9f4<span class="token punctuation">;</span>
  <span class="token property">--white-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--box-shadow</span><span class="token punctuation">:</span> 0 0 5px #03e9f4<span class="token punctuation">,</span> 0 0 25px #03e9f4<span class="token punctuation">,</span> 0 0 50px #03e9f4<span class="token punctuation">,</span> 0 0 100px #03e9f4<span class="token punctuation">;</span>

  <span class="token comment">/*========== Font and typography ==========*/</span>
  <span class="token comment">/*.5rem = 8px | 1rem = 16px ...*/</span>
  <span class="token property">--body-font</span><span class="token punctuation">:</span> <span class="token string">"Montserrat"</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
  <span class="token property">--normal-font-size</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>

  <span class="token comment">/*========== Font weight ==========*/</span>
  <span class="token property">--font-regular</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
  <span class="token property">--font-semi-bold</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>

  <span class="token comment">/*========== z index ==========*/</span>
  <span class="token property">--z-tooltip</span><span class="token punctuation">:</span> 10<span class="token punctuation">;</span>
  <span class="token property">--z-fixed</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*=============== BASE ===============*/</span>
<span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--body-font<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--normal-font-size<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--body-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">ul</span> <span class="token punctuation">{</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.button-animation</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px 30px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--accent-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.button-animation span</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.button-animation span:nth-child(1)</span> <span class="token punctuation">{</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> -100%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>90deg<span class="token punctuation">,</span> transparent<span class="token punctuation">,</span> <span class="token function">var</span><span class="token punctuation">(</span>--accent-color<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> btn-anim1 1s linear infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> btn-anim1</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">left</span><span class="token punctuation">:</span> -100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">50%,
  100%</span> <span class="token punctuation">{</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Similar animations for other 3 spans */</span>

<span class="token selector">.button-animation:hover</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--accent-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--white-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--box-shadow<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>HTML 구조와 CSS 스타일 및 애니메이션을 조합하여 시각적으로 매력적인 빛나는 버튼 애니메이션을 만들었습니다. 색상, 글꼴 및 애니메이션 지속 시간을 사용자 정의하여 디자인 취향에 맞게 조정할 수 있습니다.</p>
</div></template>
