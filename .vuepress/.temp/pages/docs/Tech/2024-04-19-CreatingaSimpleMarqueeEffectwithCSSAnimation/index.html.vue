<template><div><h2 id="화려한-마키-효과를-만들어-사용자들을-매료시키세요-지금-웹-디자인을-업그레이드하세요-😍🌟-cssanimation-webdesign-✨🎉" tabindex="-1"><a class="header-anchor" href="#화려한-마키-효과를-만들어-사용자들을-매료시키세요-지금-웹-디자인을-업그레이드하세요-😍🌟-cssanimation-webdesign-✨🎉" aria-hidden="true">#</a> 화려한 마키 효과를 만들어 사용자들을 매료시키세요. 지금 웹 디자인을 업그레이드하세요! 😍🌟 #CSSAnimation #WebDesign ✨🎉</h2>
<p>웹 디자인에서 동적이고 화려한 요소를 추가하면 사용자 경험을 크게 향상시킬 수 있습니다. 인기 있는 효과 중 하나는 마키인데, 마키는 텍스트가 화면을 가로로 스크롤하는 것을 의미합니다. 이 글에서는 CSS 애니메이션을 사용하여 간단한 마키 효과를 만드는 방법에 대해 알아볼 것입니다. 코드를 한 단계씩 살펴보고 핵심 CSS 속성과 사용된 애니메이션 기술을 설명할 것입니다.</p>
<p><img src="@source/docs/Tech/2024-04-19-CreatingaSimpleMarqueeEffectwithCSSAnimation/img/CreatingaSimpleMarqueeEffectwithCSSAnimation_0.png" alt="Simple Marquee Effect with CSS Animation"></p>
<p>HTML 구조:</p>
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
<p>먼저, 마퀴의 HTML 구조를 살펴봅시다. &quot;marquee&quot; 클래스를 가진 <code v-pre>div</code> 요소가 포함된 <code v-pre>span</code> 요소가 있습니다. <code v-pre>span</code> 안의 텍스트가 화면을 가로지르는 내용이 됩니다.</p>
<h2 id="css-스타일링" tabindex="-1"><a class="header-anchor" href="#css-스타일링" aria-hidden="true">#</a> CSS 스타일링:</h2>
<p>CSS 스타일은 마퀴의 모양과 동작을 정의합니다. &quot;marquee&quot; 클래스는 너비를 100%로 설정하고 가시성을 위해 빨간 테두리를 적용합니다. white-space: nowrap; 속성은 텍스트가 줄 바꿈되지 않고 한 줄에 유지되도록 합니다. overflow: hidden; 속성은 오버플로우된 내용을 숨기며, position: relative;은 위치 지정에 사용됩니다.</p>
<h2 id="css-애니메이션" tabindex="-1"><a class="header-anchor" href="#css-애니메이션" aria-hidden="true">#</a> CSS 애니메이션:</h2>
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
<p>노출 보호를 위해 <code v-pre>span</code> 요소에 애니메이션 속성이 적용되어 있습니다. 애니메이션은 &quot;marquee&quot;로 명명되었으며 지속 시간은 10초입니다. 이를 선형으로 실행되고 무한히 반복하도록 설정했습니다.</p>
<h2 id="keyframes-animation" tabindex="-1"><a class="header-anchor" href="#keyframes-animation" aria-hidden="true">#</a> Keyframes Animation:</h2>
<p>@keyframes 규칙은 애니메이션의 중간 상태를 정의합니다. 이 경우, 0%와 100% 두 개의 키프레임이 있습니다. 0%에서 텍스트는 뷰포트의 너비(100vw)만큼 오른쪽으로 변환됩니다. 이로써 텍스트는 화면 밖에 위치합니다. 100%에서는 텍스트가 자체 너비의 -100%만큼 왼쪽으로 이동하여(100%) 화면에 다시 표시됩니다.</p>
<h2 id="코드-스니펫" tabindex="-1"><a class="header-anchor" href="#코드-스니펫" aria-hidden="true">#</a> 코드 스니펫:</h2>
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
<span class="token operator">&lt;</span>html<span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>style<span class="token operator">></span>
    <span class="token punctuation">.</span>marquee <span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
      <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid red<span class="token punctuation">;</span>
      white<span class="token operator">-</span>space<span class="token operator">:</span> nowrap<span class="token punctuation">;</span>
      <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">.</span>marquee span <span class="token punctuation">{</span>
      <span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token operator">-</span>block<span class="token punctuation">;</span>
      <span class="token literal-property property">animation</span><span class="token operator">:</span> marquee 10s linear infinite<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    @keyframes marquee <span class="token punctuation">{</span>
      <span class="token number">0</span><span class="token operator">%</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>100vw<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"marquee"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>span<span class="token operator">></span>This is a marquee text<span class="token punctuation">.</span> <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="요약" tabindex="-1"><a class="header-anchor" href="#요약" aria-hidden="true">#</a> 요약:</h2>
<p>CSS 애니메이션과 keyframes를 결합하여 간단하지만 효과적인 마퀴 효과를 만들었습니다. 텍스트가 화면을 부드럽게 스크롤하여 웹페이지에 시각적 흥미를 더했습니다. 지속 시간이나 타이밍 함수를 조정하거나 다양한 효과를 위해 추가 keyframes를 추가함으로써 애니메이션을 사용자 정의할 수 있습니다.</p>
<p>CSS 애니메이션을 통해 다양한 웹 요소에 적용할 수 있는 이 마퀴 효과는 웹사이트의 헤드라인, 공지사항 또는 주요 콘텐츠와 같이 다양한 부분에 적용할 수 있습니다. CSS 애니메이션은 매혹적이고 상호작용적인 웹 경험을 만들 수 있는 강력한 도구 세트를 제공합니다.```</p>
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
<p>희망 했던 기사가 더 나은 이해를 돕기를 바랍니다. 이 기사에서 논의한 내용이나 개선할 부분에 대한 질문이 있다면 주저하지 말고 아래에 댓글을 남겨주세요.</p>
</div></template>
