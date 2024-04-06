<template><div><p><img src="@source/docs/Nextjs/2024-04-05-MasteringFlexboxLayoutsEssentialTipsandTricks/img/MasteringFlexboxLayoutsEssentialTipsandTricks_0.png" alt="Flexbox Layouts"></p>
<p>Flexbox는 강력한 CSS 레이아웃 모델로 웹 레이아웃을 설계하고 구성하는 방식을 혁신적으로 바꿨어요. 유연하고 반응형 디자인을 만드는 직관적인 방법을 제공하며, Flexbox에는 일반적인 레이아웃 작업을 간단히 하는 다양한 팁과 트릭이 있어요. 이 글에서는 Flexbox 레이아웃을 숙달하기 위한 필수 기술에 대해 다뤄볼 거예요. 행과 열을 만들기, 콘텐츠 가운데 정렬, 반응형 최적화 등이요.</p>
<h1 id="행과-열-레이아웃-만들기" tabindex="-1"><a class="header-anchor" href="#행과-열-레이아웃-만들기" aria-hidden="true">#</a> 행과 열 레이아웃 만들기</h1>
<p>Flexbox의 근본적인 측면 중 하나는 행과 열 레이아웃을 손쉽게 만들 수 있다는 점이에요. flex 컨테이너와 그 자식에 몇 가지 주요 속성을 적용하여 다목적이고 동적인 구조를 만들 수 있어요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 행 레이아웃 정의 */</span>
<span class="token punctuation">.</span>row <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>wrap<span class="token operator">:</span> wrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 열 레이아웃 정의 */</span>
<span class="token punctuation">.</span>col <span class="token punctuation">{</span>
  <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="콘텐츠-수평-및-수직-가운데-정렬" tabindex="-1"><a class="header-anchor" href="#콘텐츠-수평-및-수직-가운데-정렬" aria-hidden="true">#</a> 콘텐츠 수평 및 수직 가운데 정렬</h1>
<p>플렉스박스는 콘텐츠를 컨테이너 내에서 수평 및 수직으로 중앙에 정렬하는 작업을 간단하게 해줍니다. 이러한 기술들은 콘텐츠의 크기나 차원에 관계없이 완벽하게 정렬되도록 보장합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 콘텐츠를 수평으로 가운데 정렬 */</span>
<span class="token punctuation">.</span>center<span class="token operator">-</span>horizontally <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 콘텐츠를 수직으로 가운데 정렬 */</span>
<span class="token punctuation">.</span>center<span class="token operator">-</span>vertically <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 콘텐츠를 수평 및 수직으로 동시에 가운데 정렬 */</span>
<span class="token punctuation">.</span>center <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
  align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="동일-너비-칼럼" tabindex="-1"><a class="header-anchor" href="#동일-너비-칼럼" aria-hidden="true">#</a> 동일 너비 칼럼</h1>
<p>Flexbox를 사용하면 동일한 너비를 가진 칼럼을 손쉽게 만들 수 있어요. 행 레이아웃 내 각 칼럼에 flex: 1; 속성을 적용하면 사용 가능한 공간을 균등하게 공유하도록 할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 동일한 너비 칼럼 */</span>
<span class="token punctuation">.</span>row <span class="token operator">></span> <span class="token punctuation">.</span>col <span class="token punctuation">{</span>
  <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="반응형-flexbox-그리드" tabindex="-1"><a class="header-anchor" href="#반응형-flexbox-그리드" aria-hidden="true">#</a> 반응형 Flexbox 그리드</h1>
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
<p>Flexbox의 유연성은 반응형 그리드 레이아웃을 구축할 때 돋보입니다. 행(row) 및 열(column) 클래스를 미디어 쿼리와 결합하여, 다양한 화면 크기에 매끄럽게 적응하는 디자인을 만들 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">media</span> <span class="token punctuation">(</span><span class="token parameter">min<span class="token operator">-</span>width<span class="token operator">:</span> 768px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span>row <span class="token punctuation">{</span>
    flex<span class="token operator">-</span>wrap<span class="token operator">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">.</span>col <span class="token punctuation">{</span>
    <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> auto<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="플렉스-컨테이너-중첩" tabindex="-1"><a class="header-anchor" href="#플렉스-컨테이너-중첩" aria-hidden="true">#</a> 플렉스 컨테이너 중첩</h1>
<p>더 복잡한 레이아웃을 위해, Flexbox를 사용하면 서로 중첩된 플렉스 컨테이너를 생성할 수 있습니다. 이 기술을 사용하면 각기 다른 수준에서 행과 열이 포함된 계층 구조를 만들 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"parent-container"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"row"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"col"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 내용 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"col"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 내용 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="스크롤-가능한-콘텐츠와-고정-헤더" tabindex="-1"><a class="header-anchor" href="#스크롤-가능한-콘텐츠와-고정-헤더" aria-hidden="true">#</a> 스크롤 가능한 콘텐츠와 고정 헤더</h1>
<p>Flexbox를 사용하여 고정 헤더 레이아웃과 스크롤 가능한 콘텐츠 영역을 구현합니다. 이는 헤더에 계속 액세스해야 하는 긴 콘텐츠를 가진 애플리케이션에 특히 유용합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 고정 헤더 레이아웃 */</span>
<span class="token punctuation">.</span>fixed<span class="token operator">-</span>header<span class="token operator">-</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 100vh<span class="token punctuation">;</span> <span class="token comment">/* 필요에 맞게 조절 */</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>header <span class="token punctuation">{</span>
  <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>content <span class="token punctuation">{</span>
  <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
  overflow<span class="token operator">-</span>y<span class="token operator">:</span> auto<span class="token punctuation">;</span>
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
<h1 id="고정-푸터" tabindex="-1"><a class="header-anchor" href="#고정-푸터" aria-hidden="true">#</a> 고정 푸터</h1>
<p>콘텐츠의 높이에 관계없이 화면 하단에 고정 푸터를 구현하세요. 이 레이아웃은 콘텐츠가 적을 때에도 푸터가 항상 하단에 고정되도록 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* Sticky footer */</span>
<span class="token punctuation">.</span>sticky<span class="token operator">-</span>footer<span class="token operator">-</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
  min<span class="token operator">-</span>height<span class="token operator">:</span> 100vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>content <span class="token punctuation">{</span>
  <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>footer <span class="token punctuation">{</span>
  <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="메이슨리-그리드-레이아웃" tabindex="-1"><a class="header-anchor" href="#메이슨리-그리드-레이아웃" aria-hidden="true">#</a> 메이슨리 그리드 레이아웃</h1>
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
<p>가로 공간에 따라 아이템이 배치되어 시각적으로 매력적인 배열이 생성되는 메이슨리 스타일의 그리드 레이아웃을 만들어보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 메이슨리 그리드 레이아웃 */</span>
<span class="token punctuation">.</span>masonry<span class="token operator">-</span>grid <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>wrap<span class="token operator">:</span> wrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>masonry<span class="token operator">-</span>item <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">33.33</span><span class="token operator">%</span> <span class="token operator">-</span> 10px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 필요에 따라 조정 */</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="신축성-있는-사이드바와-본문-콘텐츠" tabindex="-1"><a class="header-anchor" href="#신축성-있는-사이드바와-본문-콘텐츠" aria-hidden="true">#</a> 신축성 있는 사이드바와 본문 콘텐츠</h1>
<p>사용자 상호작용에 따라 사이드바가 확장 또는 축소되는 신축성 있는 레이아웃을 디자인해보세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 유연한 사이드바와 본문 콘텐츠 */</span>
<span class="token punctuation">.</span>flexible<span class="token operator">-</span>layout <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>sidebar <span class="token punctuation">{</span>
  <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> 250px<span class="token punctuation">;</span> <span class="token comment">/* 필요에 따라 너비 조절 */</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>main<span class="token operator">-</span>content <span class="token punctuation">{</span>
  <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="홀리-그레일-레이아웃" tabindex="-1"><a class="header-anchor" href="#홀리-그레일-레이아웃" aria-hidden="true">#</a> 홀리 그레일 레이아웃</h1>
<p>헤더, 푸터 및 세 개의 열(왼쪽 사이드바, 본문 콘텐츠, 오른쪽 사이드바)가 모두 다양한 화면 크기에 반응적으로 적응하는 고전적인 홀리 그레일 레이아웃을 구현합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 홀리 그레일 레이아웃 */</span>
<span class="token punctuation">.</span>holy<span class="token operator">-</span>grail<span class="token operator">-</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  min<span class="token operator">-</span>height<span class="token operator">:</span> 100vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>header<span class="token punctuation">,</span>
<span class="token punctuation">.</span>footer <span class="token punctuation">{</span>
  <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>left<span class="token operator">-</span>sidebar<span class="token punctuation">,</span>
<span class="token punctuation">.</span>right<span class="token operator">-</span>sidebar <span class="token punctuation">{</span>
  <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> 200px<span class="token punctuation">;</span> <span class="token comment">/* 필요에 따라 너비 조절 */</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>main<span class="token operator">-</span>content <span class="token punctuation">{</span>
  <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
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
<h1 id="유연한-타일을-가진-이미지-갤러리" tabindex="-1"><a class="header-anchor" href="#유연한-타일을-가진-이미지-갤러리" aria-hidden="true">#</a> 유연한 타일을 가진 이미지 갤러리</h1>
<p>가용 공간에 따라 크기가 조절되는 유연한 타일을 가진 이미지 갤러리 레이아웃을 생성하여 이미지를 시각적으로 균형 잡힌 방식으로 제시합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 유연한 타일을 가진 이미지 갤러리 */</span>
<span class="token punctuation">.</span>image<span class="token operator">-</span>gallery <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>wrap<span class="token operator">:</span> wrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>image<span class="token operator">-</span>tile <span class="token punctuation">{</span>
  <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token number">1</span> 200px<span class="token punctuation">;</span> <span class="token comment">/* 필요에 따라 너비 조정 */</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="반응형-카드-그리드" tabindex="-1"><a class="header-anchor" href="#반응형-카드-그리드" aria-hidden="true">#</a> 반응형 카드 그리드</h1>
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
<p>다양한 화면 크기에 맞게 카드가 동적으로 위치와 크기를 조정하여 최적의 뷰잉 경험을 제공하는 반응형 카드 그리드 레이아웃을 만들어보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 반응형 카드 그리드 */</span>
<span class="token punctuation">.</span>card<span class="token operator">-</span>grid <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>wrap<span class="token operator">:</span> wrap<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> space<span class="token operator">-</span>between<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>card <span class="token punctuation">{</span>
  <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">33.33</span><span class="token operator">%</span> <span class="token operator">-</span> 20px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 필요에 따라 너비와 여백 조정 */</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 필수 팁과 트릭을 숙달하면 Flexbox의 전체 잠재력을 활용하여 웹 프로젝트에 멋진 반응형 레이아웃을 만들 수 있습니다. 간단한 랜딩 페이지 또는 복잡한 웹 애플리케이션을 구축하든, Flexbox를 통해 자신감과 효율성을 갖고 디자인할 수 있습니다. 오늘부터 이러한 기술을 업무 프로세스에 통합하고 웹 디자인 기술을 새로운 레벨로 끌어올려보세요!```</p>
</div></template>
