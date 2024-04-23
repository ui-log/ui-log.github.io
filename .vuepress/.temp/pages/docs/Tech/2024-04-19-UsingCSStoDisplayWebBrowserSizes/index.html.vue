<template><div><p>반응형 웹 디자인은 이제 모바일 디바이스 사용량이 증가함에 따라 중요합니다. 새 웹사이트를 만들거나 현재 웹사이트를 모바일 반응형으로 재설계하는 경우, 이 튜토리얼은 웹 브라우저 테스트에 도움이 될 것입니다. 이 튜토리얼에서는 CSS를 활용하여 작업 중인 웹 브라우저의 크기를 표시하는 방법을 보여줍니다. 웹 페이지 하단에 전체 너비의 바를 배치함으로써 이를 수행합니다. 이것은 웹사이트 디자인 반응성을 테스트하기 위해 실제로 다른 모바일 디바이스를 사용하는 경우 도움이 됩니다.</p>
<p>responsivetest.css라는 새 CSS 파일을 만들거나 현재 CSS 파일에 다음을 추가하세요.</p>
<p>우리는 각 웹 브라우저 크기에 대한 body HTML 요소를 타게팅하는 CSS를 만들 것이며, 이 튜토리얼에서 다루지 않는 웹 브라우저에 대한 사용자 정의 CSS를 만드는 방법도 보여드릴게요. 아주 작은 웹 브라우저부터 시작해보겠습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">body</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"320px 미만"</span><span class="token punctuation">;</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">200</span><span class="token operator">%</span><span class="token punctuation">;</span>
    line<span class="token operator">-</span>height<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
    font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> fixed<span class="token punctuation">;</span>
    <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 5px <span class="token number">0</span><span class="token punctuation">;</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #<span class="token number">000</span><span class="token punctuation">;</span> <span class="token comment">/* 후방 호환성 */</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">hsla</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token operator">%</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token operator">%</span><span class="token punctuation">,</span><span class="token number">0.7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
    z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">9999</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이제 모든 다른 웹 브라우저의 크기는 위의 코드 스니펫으로부터 값을 상속받을 것이며, content 값은 재설정할 것입니다.</p>
<p>이제 320px에서 480px 크기의 웹 브라우저를 대상으로합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@media only screen <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">min<span class="token operator">-</span>width<span class="token operator">:</span> 320px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"320 to 480px"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 480px에서 640px 크기의 웹 브라우저를 대상으로 합니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@media only screen <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">min<span class="token operator">-</span>width<span class="token operator">:</span> 480px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"480 to 640px"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 640px부터 800px 크기의 웹 브라우저를 대상으로합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@media only screen <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">min<span class="token operator">-</span>width<span class="token operator">:</span> 640px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"640 to 800px"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 800px부터 960px 크기의 웹 브라우저를 대상으로합니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@media only screen <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">min<span class="token operator">-</span>width<span class="token operator">:</span> 800px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"800 to 960px"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 960px부터 1120px 크기의 웹 브라우저를 대상으로합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@media only screen <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">min<span class="token operator">-</span>width<span class="token operator">:</span> 960px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"960 to 1120px"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 1120px부터 1280px 크기의 웹 브라우저를 대상으로합니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@media only screen <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">min<span class="token operator">-</span>width<span class="token operator">:</span> 1120px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"1120부터 1280픽셀"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 1280픽셀에서 1440픽셀 크기의 웹 브라우저에 대상을 지정합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@media only screen <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">min<span class="token operator">-</span>width<span class="token operator">:</span> 1280px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"1280부터 1440픽셀"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 1440픽셀 이상의 웹 브라우저에 대상을 지정합니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@media only screen <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">min<span class="token operator">-</span>width<span class="token operator">:</span> 1440px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"1440 and up"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>자신만의 것을 만들려면 우리가 위에서 한 것처럼 CSS 미디어 쿼리를 사용하고 콘텐츠를 정의하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@media <span class="token operator">&lt;</span>argument<span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 예제에서는 <code v-pre>argument</code>를 대상으로 하는 최소 및 / 또는 최대 웹 브라우저 크기로 바꿔주세요.</p>
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
<p>첫 번째 예제에서 모든 것의 배경색을 변경할 수도 있고, 각 웹 브라우저 크기에 대해 배경색을 재설정할 수도 있어요. 기본적으로 배경색은 검정의 70%, #000000, 입니다. 그리고 각각에 더 많은 CSS를 추가할 수도 있어요.</p>
</div></template>
