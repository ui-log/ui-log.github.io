<template><div><h2 id="_110-더-멋진-웹사이트를-만드는-법" tabindex="-1"><a class="header-anchor" href="#_110-더-멋진-웹사이트를-만드는-법" aria-hidden="true">#</a> 110% 더 멋진 웹사이트를 만드는 법</h2>
<p><img src="@source/docs/Tech/2024-04-19-MyFavouriteCSSOneLiners/img/MyFavouriteCSSOneLiners_0.png" alt="이미지"></p>
<p>오늘은 웹사이트 제작에 큰 도움이 된 몇 가지 유용하고 간단한 CSS 원라이너들을 공유하고 싶어요.</p>
<p>다음과 같은 트릭을 사용하면 복잡한 기능을 프로그래밍하는 일에 많은 작업을 절약할 수 있어요.</p>
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
<p>그러니 더 이상 말을 하지 말고 시작해 봅시다!</p>
<h1 id="부드러운-페이지-스크롤링" tabindex="-1"><a class="header-anchor" href="#부드러운-페이지-스크롤링" aria-hidden="true">#</a> 부드러운 페이지 스크롤링</h1>
<p>페이지의 다른 섹션으로 스크롤하고 앵커 링크를 사용하려면 기본적으로 보기가 좋지 않습니다. 어떤 스크롤링도 없이 갑자기 이동하고 사용자는 페이지의 다른 부분으로 스크롤했다는 것을 인지하지 못할 수도 있습니다.</p>
<p>이 문제를 해결하려면 다음 속성을 HTML 태그에 적용하십시오:</p>
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
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">html</span><span class="token punctuation">{</span>
  <span class="token property">scroll-behavior</span><span class="token punctuation">:</span> smooth<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 앵커로 매끄럽게 스크롤되고 더욱 만족스럽고 사용자 친화적으로 보입니다.</p>
<h1 id="자바스크립트-없이-상자-크기-조정하기" tabindex="-1"><a class="header-anchor" href="#자바스크립트-없이-상자-크기-조정하기" aria-hidden="true">#</a> 자바스크립트 없이 상자 크기 조정하기</h1>
<p>네, 들으신 대로입니다. 상자와 컨테이너의 크기를 조정하기 위해 어떤 프로그래밍 언어의 복잡한 계산도 필요하지 않습니다.</p>
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
<p>다음 간단한 CSS 코드로 사용자가 마우스로 요소의 크기를 조정할 수 있도록 할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>box<span class="token punctuation">{</span>
  <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
  <span class="token literal-property property">resize</span><span class="token operator">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&quot;both&quot;를 &quot;horizontal&quot; 또는 &quot;vertical&quot;로 바꿈으로써 크기 조정 방향을 사용자 정의할 수도 있어요.</p>
<h1 id="텍스트-배경-그라데이션" tabindex="-1"><a class="header-anchor" href="#텍스트-배경-그라데이션" aria-hidden="true">#</a> 텍스트 배경 그라데이션</h1>
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
<p>당신의 웹사이트에서 멋진 기능 중 하나는 헤드라인이나 제목에 배경 그라데이션을 넣는 것입니다. 다행히 CSS를 사용하면 쉽게 할 수 있어요.</p>
<p>먼저 텍스트 요소에 배경 그라데이션을 적용해야 해요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>h1<span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> fit<span class="token operator">-</span>content<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #4158D0<span class="token punctuation">;</span>
  background<span class="token operator">-</span>image<span class="token operator">:</span> linear<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>43deg<span class="token punctuation">,</span> #4158D0 <span class="token number">0</span><span class="token operator">%</span><span class="token punctuation">,</span> #<span class="token constant">C850C0</span> <span class="token number">46</span><span class="token operator">%</span><span class="token punctuation">,</span> #<span class="token constant">FFCC70</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게 하고 나면 이런 결과를 볼 수 있을 거예요:</p>
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
<p><img src="@source/docs/Tech/2024-04-19-MyFavouriteCSSOneLiners/img/MyFavouriteCSSOneLiners_1.png" alt="My Favourite CSS One Liners"></p>
<p>이제 다음 두 개의 속성을 적용하면 끝납니다!</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">h1</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> fit-content<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #4158D0<span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>43deg<span class="token punctuation">,</span> #4158D0 0%<span class="token punctuation">,</span> #C850C0 46%<span class="token punctuation">,</span> #FFCC70 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-webkit-background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
  <span class="token property">-webkit-text-fill-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&quot;-webkit-text-fill-color: transparent;&quot;를 사용하면 배경 색상이 보입니다. 그렇지 않으면 텍스트는 검은색으로 유지됩니다.</p>
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
<p>아래와 같이 변경해 보세요:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>![MyFavouriteCSSOneLiners_2](./img/MyFavouriteCSSOneLiners_2.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>참고: 현재 이 기능은 Chrome과 Safari에서만 작동합니다. 문제를 피하려면 대비책을 마련해두시는 것이 좋습니다.</p>
<p>본문이 여러분의 문제를 해결해주고 즐겁게 읽어주셨기를 바라며! 댓글에서 여러분이 좋아하는 CSS 원라이너가 무엇인지 알려주세요.</p>
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
<p>최신 콘텐츠 구독도 잊지마시고 박수 남기는 거 잊지 마세요!</p>
<p>코딩 즐기세요!</p>
</div></template>
