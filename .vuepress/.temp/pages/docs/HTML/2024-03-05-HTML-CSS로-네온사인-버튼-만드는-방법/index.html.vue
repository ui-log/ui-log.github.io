<template><div><h1 id="html-css로-네온사인-버튼-만드는-방법" tabindex="-1"><a class="header-anchor" href="#html-css로-네온사인-버튼-만드는-방법" aria-hidden="true">#</a> HTML CSS로 네온사인 버튼 만드는 방법</h1>
<div class="custom-container tip"><p class="custom-container-title">💡이 포스팅을 읽으면</p>
</div>
<p>이 스토리에서는 환상적인 네온 효과를 가진 버튼을 만들어 보겠습니다.</p>
<p>시작해 봅시다!</p>
<h1 id="기본-버튼-만들기" tabindex="-1"><a class="header-anchor" href="#기본-버튼-만들기" aria-hidden="true">#</a> 기본 버튼 만들기</h1>
<p>먼저 버튼을 준비합니다. 버튼은 div나 button 요소 모두 가능합니다. 다만, button 요소를 선택하면 기본 스타일을 재정의해야 합니다.</p>
<p>HTML 구조:</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>neonButton<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>neonButton-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>네온<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.neonButton</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 12px 12px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> fit-content<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> consolas<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #03e9f4<span class="token punctuation">;</span>
  <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
  <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>기본적으로 투명한 버튼을 정의했습니다. 네온 효과는 사이버펑크 스타일을 떠올리므로 Consolas와 같은 현대적인 폰트가 선택되었습니다.</p>
<p>HTML 및 CSS를 표준 HTML 파일로 복사하면 이미지와 비슷한 버튼이 나타납니다. 일반적인 네온 버튼입니다.</p>
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
<h1 id="네온-효과-추가하기" tabindex="-1"><a class="header-anchor" href="#네온-효과-추가하기" aria-hidden="true">#</a> 네온 효과 추가하기</h1>
<p>이제 버튼에 네온 효과를 얻기 위해 버튼에 호버 상태를 추가합니다.</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.neonShimmerButton:hover</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #17c47c<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #050801<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 5px #17c47c<span class="token punctuation">,</span> 0 0 25px #17c47c<span class="token punctuation">,</span> 0 0 50px #17c47c<span class="token punctuation">,</span> 0 0 200px #17c47c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 이 버튼에 호버하면 네온 효과를 볼 수 있어야 합니다.</p>
<img src="@source/docs/HTML/2024-03-05-HTML-CSS로-네온사인-버튼-만드는-방법/img/Fantastic-CSS-effects-—-button-—-Neon-Button-using-box-shadow_0.png" />
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
<p>이곳에서는 box-shadow를 사용하여 버튼 주변에 빛나는 효과를 만듭니다. 이는 버튼이 뒤에서 밝아지는 것처럼 버튼을 돋보이게 합니다.</p>
<h1 id="사이버펑크-분위기" tabindex="-1"><a class="header-anchor" href="#사이버펑크-분위기" aria-hidden="true">#</a> 사이버펑크 분위기</h1>
<p>이제 네온 효과가 있지만 진정한 사이버펑크 느낌을 주기 위해 충분히 기술적으로 보이지 않을 수도 있습니다. 걱정하지 마세요. 저희는 깜박이는 효과로 더 선명하게 만들 것입니다. 색상 선언을 반복하지 않도록 CSS 변수를 사용할 것입니다.</p>
<h1 id="깜박임-애니메이션" tabindex="-1"><a class="header-anchor" href="#깜박임-애니메이션" aria-hidden="true">#</a> 깜박임 애니메이션</h1>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.neonShimmerButton:hover</span> <span class="token punctuation">{</span>
  <span class="token property">--neon-blink-color</span><span class="token punctuation">:</span> #a4d3be<span class="token punctuation">;</span>
  <span class="token property">--neon-color</span><span class="token punctuation">:</span> #17c47c<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--neon-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #050801<span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> blink 2s infinite linear<span class="token punctuation">;</span>

  <span class="token atrule"><span class="token rule">@keyframes</span> blink</span> <span class="token punctuation">{</span>
    <span class="token selector">0%,
    100%</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--neon-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #050801<span class="token punctuation">;</span>
      <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 5px <span class="token function">var</span><span class="token punctuation">(</span>--neon-color<span class="token punctuation">)</span><span class="token punctuation">,</span> 0 0 25px <span class="token function">var</span><span class="token punctuation">(</span>--neon-color<span class="token punctuation">)</span><span class="token punctuation">,</span> 0 0 50px <span class="token function">var</span><span class="token punctuation">(</span>--neon-color<span class="token punctuation">)</span><span class="token punctuation">,</span> 0 0 200px <span class="token function">var</span><span class="token punctuation">(</span>--neon-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--neon-blink-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #040701<span class="token punctuation">;</span>
      <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 5px <span class="token function">var</span><span class="token punctuation">(</span>--neon-blink-color<span class="token punctuation">)</span><span class="token punctuation">,</span> 0 0 25px <span class="token function">var</span><span class="token punctuation">(</span>--neon-blink-color<span class="token punctuation">)</span><span class="token punctuation">,</span> 0 0 50px <span class="token function">var</span><span class="token punctuation">(</span>--neon-blink-color<span class="token punctuation">)</span><span class="token punctuation">,</span> 0 0 200px <span class="token function">var</span><span class="token punctuation">(</span>--neon-blink-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
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
<p>이 추가로 버튼은 네온 빛</p>
<p>으로 깜박이면서 사이버펑크 영감을 받은 네온 깜박이는 버튼이 됩니다.</p>
<p>이렇게하면 네온 효과가 완료됩니다. 이 반짝이는 버튼은 사용자 인터페이스를 빛나게 만들어주어 사이버펑크 분위기를 더할 것입니다.</p>
<img src="https://miro.medium.com/v2/resize:fit:720/1*RdRxyTBsPNWlVZByWxnAlg.gif" />
<p>위와 같이 디지털 효과를 적용하여 버튼이 화려해졌습니다! box-shadow와 애니메이션 기술을 사용하여 사이버펑크 우주에 어울리는 네온 버튼을 만들었습니다. 이 테크노 로직을 사용하여 사용자 인터페이스를 화려하게 만들 준비가 되셨나요? 코드로 구현하고 그 빛나는 네온을 감상해 보세요!</p>
<h1 id="다음-효과" tabindex="-1"><a class="header-anchor" href="#다음-효과" aria-hidden="true">#</a> 다음 효과</h1>
<p>다음에는 반짝이는 효과를 만들어보겠습니다. 현재는 피곤해서 못하겠네요. 하지만 아래는 효과의 미리보기입니다.</p>
<img src="https://miro.medium.com/v2/resize:fit:720/1*_U1vXNBCjLXam7uGlfhdwA.gif" />
</div></template>
