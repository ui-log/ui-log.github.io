<template><div><p><img src="@source/docs/Tech/2024-04-19-FlexItLikeaProABeginnersGuidetoCSSFlexbox/img/FlexItLikeaProABeginnersGuidetoCSSFlexbox_0.png" alt="Flexbox"></p>
<p>CSS Flexbox, &quot;CSS Flexible Box Layout&quot;로 줄여진 것은 CSS에서 요소들을 보다 효율적이고 유연하게 구성하고 정렬하기 위해 설계된 레이아웃 모델입니다.</p>
<p>기존 CSS 레이아웃과 달리 블록 및 인라인 방향에 의존하는 것 대신, Flexbox는 단일 방향(수평 또는 수직)에 기반하여 컨테이너 내 항목들 사이의 정렬과 여백 분배를 더 쉽게 제어할 수 있습니다.</p>
<h1 id="기본-용어" tabindex="-1"><a class="header-anchor" href="#기본-용어" aria-hidden="true">#</a> 기본 용어</h1>
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
<p>플렉스 레이아웃의 주요 아이디어를 설명하는 도표가 있어요:</p>
<p><img src="@source/docs/Tech/2024-04-19-FlexItLikeaProABeginnersGuidetoCSSFlexbox/img/FlexItLikeaProABeginnersGuidetoCSSFlexbox_1.png" alt="플렉스 레이아웃"></p>
<p>주축: 플렉스 항목이 컨테이너 내에서 정렬되는 주요 방향(왼쪽에서 오른쪽 또는 위에서 아래로).
주 축 시작 | 주 축 끝: 주 축의 시작점과 끝점.
교차 축: 주축과 수직인 방향.
교차 시작 | 교차 끝: 교차 축의 시작점과 끝점.
주 사이즈: 주 축에서의 플렉스 항목의 크기(너비 또는 높이).
교차 사이즈: 교차 축에서의 플렉스 항목의 크기(너비 또는 높이).</p>
<h1 id="플렉스박스-속성" tabindex="-1"><a class="header-anchor" href="#플렉스박스-속성" aria-hidden="true">#</a> 플렉스박스 속성</h1>
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
<p><img src="@source/docs/Tech/2024-04-19-FlexItLikeaProABeginnersGuidetoCSSFlexbox/img/FlexItLikeaProABeginnersGuidetoCSSFlexbox_2.png" alt="Flexbox Properties"></p>
<p>부모 요소에 대한 속성:</p>
<ol>
<li>display
Flexbox를 활성화하려면 컨테이너의 display 속성을 flex 또는 inline-flex로 설정하세요. flex 값을 사용하면 블록 수준의 플렉스 컨테이너가 생성되며, inline-flex를 사용하면 인라인 수준의 플렉스 컨테이너가 생성됩니다.</li>
</ol>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
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
<ol start="2">
<li>flex-direction
이 속성은 플렉스 아이템의 방향을 설정합니다.
가능한 값은 :</li>
</ol>
<ul>
<li>row (기본값)</li>
<li>row-reverse</li>
<li>column</li>
<li>column-reverse</li>
</ul>
<p><img src="@source/docs/Tech/2024-04-19-FlexItLikeaProABeginnersGuidetoCSSFlexbox/img/FlexItLikeaProABeginnersGuidetoCSSFlexbox_3.png" alt="FlexDirection"></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row | row-reverse | column | column-reverse<span class="token punctuation">;</span>
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
<ol start="3">
<li>flex-wrap<br>
flex-wrap 속성은 flex 아이템이 여러 줄로 랩핑되는지 여부를 결정합니다.<br>
가능한 값은:</li>
</ol>
<ul>
<li>nowrap (기본값)</li>
<li>wrap</li>
<li>wrap-reverse</li>
</ul>
<p><img src="@source/docs/Tech/2024-04-19-FlexItLikeaProABeginnersGuidetoCSSFlexbox/img/FlexItLikeaProABeginnersGuidetoCSSFlexbox_4.png" alt="FlexWrap"></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.div</span> <span class="token punctuation">{</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> nowrap | wrap | wrap-reverse<span class="token punctuation">;</span>
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
<ol start="4">
<li>내용 정렬
이 속성은 플렉스 항목을 주 축에 따라 정렬합니다.
가능한 값은 다음과 같습니다:</li>
</ol>
<ul>
<li>flex-start (기본값)</li>
<li>flex-end</li>
<li>center</li>
<li>space-between</li>
<li>space-around</li>
<li>space-evenly</li>
</ul>
<p><img src="@source/docs/Tech/2024-04-19-FlexItLikeaProABeginnersGuidetoCSSFlexbox/img/FlexItLikeaProABeginnersGuidetoCSSFlexbox_5.png" alt="이미지"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>div <span class="token punctuation">{</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> flex<span class="token operator">-</span>start <span class="token operator">|</span> flex<span class="token operator">-</span>end <span class="token operator">|</span> center <span class="token operator">|</span> space<span class="token operator">-</span>between <span class="token operator">|</span> space<span class="token operator">-</span>around <span class="token operator">|</span> space<span class="token operator">-</span>evenly <span class="token operator">|</span> start <span class="token operator">|</span> end <span class="token operator">|</span> left <span class="token operator">|</span> right <span class="token operator">...</span> <span class="token operator">+</span> safe <span class="token operator">|</span> unsafe<span class="token punctuation">;</span>
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
<ol start="5">
<li>align-items
이 속성은 플렉스 항목들을 교차 축을 따라 정렬합니다.
가능한 값은:</li>
</ol>
<ul>
<li>flex-start (기본값)</li>
<li>flex-end</li>
<li>center</li>
<li>baseline</li>
</ul>
<p><img src="@source/docs/Tech/2024-04-19-FlexItLikeaProABeginnersGuidetoCSSFlexbox/img/FlexItLikeaProABeginnersGuidetoCSSFlexbox_6.png" alt="Flexbox"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>div <span class="token punctuation">{</span>
  align<span class="token operator">-</span>items<span class="token operator">:</span> stretch <span class="token operator">|</span> flex<span class="token operator">-</span>start <span class="token operator">|</span> flex<span class="token operator">-</span>end <span class="token operator">|</span> center <span class="token operator">|</span> baseline <span class="token operator">|</span> first baseline <span class="token operator">|</span> last baseline <span class="token operator">|</span> start <span class="token operator">|</span> end <span class="token operator">|</span> self<span class="token operator">-</span>start <span class="token operator">|</span> self<span class="token operator">-</span>end <span class="token operator">+</span> <span class="token operator">...</span> safe <span class="token operator">|</span> unsafe<span class="token punctuation">;</span>
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
<ol start="6">
<li>align-content
축 방향에서 여분의 공간이 있을 때 플렉스 아이템의 라인을 정렬합니다.
가능한 값은:</li>
</ol>
<ul>
<li>flex-start (기본값)</li>
<li>flex-end</li>
<li>center</li>
<li>space-between</li>
<li>space-around</li>
<li>space-evenly</li>
</ul>
<p><img src="@source/docs/Tech/2024-04-19-FlexItLikeaProABeginnersGuidetoCSSFlexbox/img/FlexItLikeaProABeginnersGuidetoCSSFlexbox_7.png" alt="이미지"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>div <span class="token punctuation">{</span>
  align<span class="token operator">-</span>content<span class="token operator">:</span> flex<span class="token operator">-</span>start <span class="token operator">|</span> flex<span class="token operator">-</span>end <span class="token operator">|</span> center <span class="token operator">|</span> space<span class="token operator">-</span>between <span class="token operator">|</span> space<span class="token operator">-</span>around <span class="token operator">|</span> space<span class="token operator">-</span>evenly <span class="token operator">|</span> stretch <span class="token operator">|</span> start <span class="token operator">|</span> end <span class="token operator">|</span> baseline <span class="token operator">|</span> first baseline <span class="token operator">|</span> last baseline <span class="token operator">+</span> <span class="token operator">...</span> safe <span class="token operator">|</span> unsafe<span class="token punctuation">;</span>
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
<ol start="7">
<li>갭, 행 갭, 열 갭
플렉스 아이템 사이의 간격을 명시적으로 제어합니다.</li>
</ol>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.div</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  ...
  <span class="token property">gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 10px 20px<span class="token punctuation">;</span> <span class="token comment">/* 행 갭 열 갭 */</span>
  <span class="token property">row-gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">column-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Tech/2024-04-19-FlexItLikeaProABeginnersGuidetoCSSFlexbox/img/FlexItLikeaProABeginnersGuidetoCSSFlexbox_8.png" alt="Flexbox"></p>
<p>자식 속성 (플렉스 아이템)용 속성들:</p>
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
<ol>
<li>order
flex 항목의 순서를 설정합니다. 기본값은 0입니다.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>item1 <span class="token punctuation">{</span>
    <span class="token literal-property property">order</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Tech/2024-04-19-FlexItLikeaProABeginnersGuidetoCSSFlexbox/img/FlexItLikeaProABeginnersGuidetoCSSFlexbox_9.png" alt="FlexItLikeaProABeginnersGuidetoCSSFlexbox_9.png"></p>
<ol start="2">
<li>flex-grow
flex 항목이 형제 항목에 비해 얼마나 더 늘어날지를 제어합니다. 기본값은 0입니다.</li>
</ol>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>item2 <span class="token punctuation">{</span>
    flex<span class="token operator">-</span>grow<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Tech/2024-04-19-FlexItLikeaProABeginnersGuidetoCSSFlexbox/img/FlexItLikeaProABeginnersGuidetoCSSFlexbox_10.png" alt="Flexbox"></p>
<ol start="3">
<li>flex-shrink
다른 요소와 비교했을 때 flex 요소가 얼마나 축소될지를 제어합니다. 기본값은 1입니다.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>item2 <span class="token punctuation">{</span>
    flex<span class="token operator">-</span>shrink<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
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
<img src="@source/docs/Tech/2024-04-19-FlexItLikeaProABeginnersGuidetoCSSFlexbox/img/FlexItLikeaProABeginnersGuidetoCSSFlexbox_11.png" />
<ol start="4">
<li>align-self
컨테이너의 align-items 속성을 무시하고 flex 항목이 자체 정렬을 설정할 수 있습니다.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>item <span class="token punctuation">{</span>
    align<span class="token operator">-</span>self<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-04-19-FlexItLikeaProABeginnersGuidetoCSSFlexbox/img/FlexItLikeaProABeginnersGuidetoCSSFlexbox_12.png" />  
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
<ol start="5">
<li>flex-basis
선택한 flex 항목의 성장 또는 축소 전 초기 크기를 설정합니다.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>item2 <span class="token punctuation">{</span>
    flex<span class="token operator">-</span>basis<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="추가-정보" tabindex="-1"><a class="header-anchor" href="#추가-정보" aria-hidden="true">#</a> 추가 정보</h1>
<p>CSS 유연한 박스 레이아웃 모듈 레벨 1 (W3C): CSS Flexbox의 공식 명세서입니다.
CSS Flexbox Cheatsheet (DigitalOcean): 예제와 설명이 담긴 편리한 가이드입니다.
CSS Flexbox를 사용하여 요소 가운데 정렬하기 (DigitalOcean): 요소를 가운데 정렬하기 위한 Flexbox 사용 설명서입니다.</p>
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
<p>그게 전부야! 이제 CSS 플렉스박스에 대한 뛰어난 기초 지식을 가졌어. 궁금한 점이 있거나 추가 도움이 필요하면 언제든지 말해줘!</p>
<p>행복한 코딩하자! 😊</p>
</div></template>
