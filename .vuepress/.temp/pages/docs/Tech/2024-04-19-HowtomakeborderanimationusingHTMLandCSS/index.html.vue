<template><div><p>웹 디자인에서 애니메이션은 웹 사이트를 생동감 있게 만들어주고 개성을 더해주어 더 매력적으로 만들어줄 수 있습니다.</p>
<p>보통 애니메이션의 중요한 부분으로 무시되는 것이 경계선입니다. 경계선은 보통 정적이지만, CSS를 사용하면 애니메이션을 통해 경계선을 생동감 있게 만들 수 있습니다. 이 블로그에서는 경계선에 부드러운 애니메이션 효과를 만드는 방법을 다룰 것입니다. 이 효과는 매우 인기가 있고 각 사이트에서 일반적으로 사용됩니다.</p>
<p><img src="@source/docs/Tech/2024-04-19-HowtomakeborderanimationusingHTMLandCSS/img/HowtomakeborderanimationusingHTMLandCSS_0.png" alt="How to make border animation using HTML and CSS"></p>
<h2 id="시작해봐요" tabindex="-1"><a class="header-anchor" href="#시작해봐요" aria-hidden="true">#</a> 시작해봐요.</h2>
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
<p>먼저, HTML 구조를 설정해봅시다. <code v-pre>div</code> 요소를 만들고 클래스가 container인 요소를 생성합니다. 이는 상대적인 부모로 사용될 겁니다. (CSS 스타일에서 overflow: hidden;을 통해 모든 오버플로우를 숨기고 패딩은 테두리 너비가 될 것입니다.) 그리고 animated-border 클래스를 가진 또 다른 <code v-pre>div</code> 요소를 만들어 CSS 스타일을 적용할 겁니다. 모든 다른 내용은 container 안에 추가해주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>

<span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>Border Animation<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>

<span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"animated-border"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">"followBtn"</span><span class="token operator">></span>Follow me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그 다음, CSS로 들어가서 애니메이션 효과를 만들어보겠습니다. 애니메이션 동작을 정의하기 위해 키프레임을 활용할 겁니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>animated<span class="token operator">-</span>border <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">250</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">350</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
    z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> conic<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>transparent<span class="token punctuation">,</span> transparent<span class="token punctuation">,</span> transparent<span class="token punctuation">,</span> red<span class="token punctuation">,</span> orange<span class="token punctuation">,</span> transparent<span class="token punctuation">,</span> transparent<span class="token punctuation">,</span> transparent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">animation</span><span class="token operator">:</span> rotate 5s infinite linear<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

@keyframes rotate <span class="token punctuation">{</span>
    <span class="token number">0</span><span class="token operator">%</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>여기 전체 CSS입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>body <span class="token punctuation">{</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #2d2d2d<span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
    justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 100vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

#container <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
    <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 5px<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 6px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

#followBtn <span class="token punctuation">{</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 32px<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 15px 40px<span class="token punctuation">;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 6px<span class="token punctuation">;</span>
    font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">'Franklin Gothic Medium'</span><span class="token punctuation">,</span> <span class="token string">'Arial Narrow'</span><span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> white<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #2d2d2d<span class="token punctuation">;</span>
    <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>animated<span class="token operator">-</span>border <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">250</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">350</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
    z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> conic<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>transparent<span class="token punctuation">,</span> transparent<span class="token punctuation">,</span> transparent<span class="token punctuation">,</span> red<span class="token punctuation">,</span> orange<span class="token punctuation">,</span> transparent<span class="token punctuation">,</span> transparent<span class="token punctuation">,</span> transparent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">animation</span><span class="token operator">:</span> rotate 5s infinite linear<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

@keyframes rotate <span class="token punctuation">{</span>
    <span class="token number">0</span><span class="token operator">%</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="결과" tabindex="-1"><a class="header-anchor" href="#결과" aria-hidden="true">#</a> 결과:</h2>
<p>여기서 애니메이션의 최종 결과를 확인하세요. 테두리가 버튼 주위를 돌고 있습니다. <code v-pre>button</code> 또는 <code v-pre>div</code> 등 모든 요소 주위에 테두리를 추가할 수 있습니다.</p>
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
<img src="https://miro.medium.com/v2/resize:fit:1200/1*hshvfvuBzcHYjGAOnoPLnw.gif" />
<h2 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론:</h2>
<p>CSS로 테두리를 애니메이션하는 것은 당신의 웹사이트의 시각적 매력을 향상시키는 무한한 가능성을 제공합니다. CSS 애니메이션과 키프레임을 활용하여 동적이고 눈길을 사로잡는 테두리 효과를 만들어내어 대중을 매혹시킬 수 있습니다. 서로 다른 속성과 값을 실험하여 원하는 테두리 룩앤필을 이룰 수 있도록 해보세요. 즐거운 코딩 되세요!</p>
<p>질문 있으시면 언제든지 물어보세요. 저에게 이곳이나 직접 https://tajammalmaqbool.com 에서 문의할 수 있습니다.</p>
</div></template>
