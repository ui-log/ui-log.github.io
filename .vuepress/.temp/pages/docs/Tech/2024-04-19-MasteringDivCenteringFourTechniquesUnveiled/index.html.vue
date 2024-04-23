<template><div><p><img src="@source/docs/Tech/2024-04-19-MasteringDivCenteringFourTechniquesUnveiled/img/MasteringDivCenteringFourTechniquesUnveiled_0.png" alt="MasteringDivCenteringFourTechniquesUnveiled_0"></p>
<h2 id="시니어-개발자처럼-div를-가운데-정렬하는-4가지-방법" tabindex="-1"><a class="header-anchor" href="#시니어-개발자처럼-div를-가운데-정렬하는-4가지-방법" aria-hidden="true">#</a> 시니어 개발자처럼 div를 가운데 정렬하는 4가지 방법</h2>
<p><img src="@source/docs/Tech/2024-04-19-MasteringDivCenteringFourTechniquesUnveiled/img/MasteringDivCenteringFourTechniquesUnveiled_1.png" alt="MasteringDivCenteringFourTechniquesUnveiled_1"></p>
<p>플렉스박스와 그리드와 같은 클래식한 방법부터, 절대 위치 지정과 마진 트릭과 같은 변칙적인 접근법까지 알아보세요. 당신이 프론트엔드 전문가이든 백엔드 마스터이든, 이러한 기술을 숙달하면 웹 개발 능력이 향상될 것입니다. 지금 시작해서 당신의 div 가운데 정렬 잠재력을 발견해보세요.</p>
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
<p>아래 예시에서는 HTML과 CSS 보일러플레이트를 사용할 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> index<span class="token punctuation">.</span>html <span class="token operator">--</span><span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>Center 'em all<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
    <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"style.css"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>

<span class="token operator">&lt;</span>body<span class="token operator">></span>
    
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"content"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* style.css */</span>

<span class="token punctuation">.</span>container<span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 400px<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 400px<span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #<span class="token constant">E9E3D5</span><span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
    <span class="token comment">/* the methods start from here */</span>
    
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>content<span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #0A7273<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 10px<span class="token punctuation">;</span>    
    <span class="token comment">/* the methods start from here */</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="방법-1-flex-박스-사용하기" tabindex="-1"><a class="header-anchor" href="#방법-1-flex-박스-사용하기" aria-hidden="true">#</a> 방법 1. flex 박스 사용하기:</h1>
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
<p>이는 div 또는 어떤 요소를 가운데 정렬하는 더 일반적이고 효율적인 방법입니다. 이 방법을 많이 볼 수 있을 것입니다.</p>
<p>이 방법을 사용하려면 컨테이너의 display 속성을 flex로 설정해야 합니다. 기본 스타일 때문에 content div는 top-left 모퉁이에 위치하게 됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>그런 다음 justify-content 속성을 center로 설정하면 (기본값은 &quot;start&quot;입니다), x축 또는 수평으로 content를 가운데 위치시킵니다. 이후 수직으로 가운데 정렬하려면 align-item 속성을 center로 설정하면 됩니다. (기본값은 &quot;stretch&quot;입니다) 그러면 content가 아주 잘 가운데 정렬될 것입니다.</p>
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
<p>최종 CSS는 다음과 같을 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>container<span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 400px<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 400px<span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #<span class="token constant">E9E3D5</span><span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 20px<span class="token punctuation">;</span>

    <span class="token comment">/* 여기부터 메소드 시작 */</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>content<span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #0A7273<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 10px<span class="token punctuation">;</span>    
    <span class="token comment">/* 여기부터 메소드 시작 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="메소드-2-그리드-사용하기" tabindex="-1"><a class="header-anchor" href="#메소드-2-그리드-사용하기" aria-hidden="true">#</a> 메소드 2. 그리드 사용하기:</h1>
<p>그리드 역시 효과적입니다. 주로 콘텐츠를 그리드 형식으로 구조화해야 할 때 사용됩니다. 해당 메소드를 달성하려면 container의 표시(display) 속성을 그리드로 설정해야 합니다. 이렇게 하면 기본 스타일 때문에 콘텐츠가 왼쪽 상단에 배치됩니다.</p>
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
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이제 내용을 가운데로 정렬하려면 place-items 속성을 center로 설정하면 됩니다.
(CSS Grid에서 place-content 속성의 기본값은 normal입니다. normal 값은 align-content를 stretch로, justify-content를 start로 설정하는 shorthand 속성입니다). 그럼 이제 다 끝났어요.</p>
<p>최종 CSS는 다음과 같을 것입니다:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #E9E3D5<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>

    <span class="token comment">/* 여기부터 메소드가 시작됩니다 */</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">place-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #0A7273<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token comment">/* 여기부터 메소드가 시작됩니다 */</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="방법-3-절대-위치-사용하기" tabindex="-1"><a class="header-anchor" href="#방법-3-절대-위치-사용하기" aria-hidden="true">#</a> 방법 3. 절대 위치 사용하기:</h1>
<p>절대 위치 지정은 유용한 속성이지만 div나 다른 요소를 가운데 정렬하는 데 사용하는 것은 좋은 습관이 아닙니다. 그래도 알아두는 것이 좋습니다.</p>
<p>따라서 이 방법을 사용하려면 먼저 컨테이너 div의 position 속성을 relative로 설정해야 합니다. 이렇게 하면 레이아웃에 변경이 없습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
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
<p>이제 컨텐츠의 위치 속성을 절대 위치로 설정해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이제 이 속성(top, right, left, bottom)을 사용하여 컨텐츠의 위치를 조절할 수 있습니다.</p>
<p>이제 컨텐츠 클래스 내부에 top을 50%, left를 50%로 설정하면 요소가 중간에 위치하지만 정확히 중앙에는 위치하지 않습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
<span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>따라서 우리는 변환 속성을 사용하여 x축은 -50%, y축은 -50%로 변환하여 해결할 수 있습니다.</p>
<p>최종 CSS는 다음과 같습니다:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>container<span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 400px<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 400px<span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #<span class="token constant">E9E3D5</span><span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 20px<span class="token punctuation">;</span>

    <span class="token comment">/* 여기부터 메소드 시작 */</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>content<span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #0A7273<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 10px<span class="token punctuation">;</span>   

    <span class="token comment">/* 여기부터 메소드 시작 */</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="메소드-4-마진-사용" tabindex="-1"><a class="header-anchor" href="#메소드-4-마진-사용" aria-hidden="true">#</a> 메소드 4. 마진 사용:</h1>
<p>마진을 사용하여 가운데 정렬하는 방법은 요소를 가운데 정렬하는 데 사용하는 것이 최후의 선택이어야 합니다. 이 방법은 수평으로만 가운데로 정렬하며, 요소를 가운데로 정렬하기 위해 사용하는 것은 좋지 않은 방법입니다. 메소드 1과 2를 사용하는 것을 추천합니다. 하지만 지식을 쌓는 차원에서 어떻게 하는지 알려드리겠습니다:</p>
<p>컨텐츠의 마진 왼쪽과 오른쪽을 모두 자동으로 설정하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>margin<span class="token operator">-</span>left<span class="token operator">:</span> auto<span class="token punctuation">;</span>
margin<span class="token operator">-</span>right<span class="token operator">:</span> auto<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>최종 CSS는 다음과 같을 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>container<span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 400px<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 400px<span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #<span class="token constant">E9E3D5</span><span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 20px<span class="token punctuation">;</span>

    <span class="token comment">/* 여기에서 메서드 시작 */</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>content<span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #0A7273<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 10px<span class="token punctuation">;</span>   

    <span class="token comment">/* 여기에서 메서드 시작 */</span>
    margin<span class="token operator">-</span>left<span class="token operator">:</span> auto<span class="token punctuation">;</span>
    margin<span class="token operator">-</span>right<span class="token operator">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>축하합니다! 이제 div를 가운데 정렬하는 좋은 3가지 방법을 마스터했습니다. 이제 백엔드 개발자 친구들에게 여러분의 기술을 자랑할 수 있어요.```</p>
</div></template>
