<template><div><p><img src="@source/docs/Tech/2024-04-19-OldPhotoEffectwithCSS/img/OldPhotoEffectwithCSS_0.png" alt="Old Photo Effect with CSS"></p>
<p>안녕하세요! 이 글은 CSS만을 사용하여 어떤 사진에도 오래된 사진 효과를 만드는 방법에 대해 제시합니다. 포토샵이나 다른 이미지 편집기가 필요 없어요. 심지어 몇 줄의 코드로 모든 것을 완성할 수 있습니다!</p>
<p>우리는 서로 연결되는 세 가지 다른 방법을 살펴볼 거에요. 각각의 반복에서 오래된 사진 효과를 증가시켜 실제같고 멋진 모습으로 만들어보겠어요.</p>
<p>이 페이지의 예시에는 필립 로만옵스키의 사진을 사용할 거에요. 필립의 작품과 더불어 다른 많은 작가들의 놀라운 사진들도 Unsplash에서 만나볼 수 있습니다.</p>
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
<h1 id="이미지-태그-사용하기" tabindex="-1"><a class="header-anchor" href="#이미지-태그-사용하기" aria-hidden="true">#</a> 이미지 태그 사용하기</h1>
<p>오래된 사진 효과를 만드는 가장 기본적인 방법은 <code v-pre>img</code> 태그에 이미지에 필터를 직접 적용하는 것입니다. 이 방법은 빠르고 효과는 좋지만 결과물이 너무 기본적일 수 있습니다.</p>
<p>HTML에서 이미지로 시작해볼까요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"이미지-링크-입력.jpg"</span> alt<span class="token operator">=</span><span class="token string">"이미지 설명"</span> <span class="token operator">/</span><span class="token operator">></span>
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
<p>그럼 CSS에 몇 가지 필터를 적용하고 간단한 마스크를 만들어보겠습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>img <span class="token punctuation">{</span>
  <span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token function">blur</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">contrast</span><span class="token punctuation">(</span><span class="token number">1.2</span><span class="token punctuation">)</span> <span class="token function">sepia</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">-</span>webkit<span class="token operator">-</span>mask<span class="token operator">:</span> radial<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>#<span class="token number">000</span><span class="token punctuation">,</span> #<span class="token number">0009</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>하나씩 각 필터가 무엇을 하는지 살펴볼까요:</p>
<ul>
<li>grayscale(1): 이미지를 그레이 스케일로 변환합니다. 이렇게 하면 어떤 영역들을 유사한 회색톤으로 섞어서 일부 세부사항을 잃게 만듭니다.</li>
<li>blur(1px): 이미지에 가우시안 블러를 적용합니다. 이렇게 하면 색 영역을 결합시키고 더 많은 세부사항을 잃게 합니다.</li>
<li>contrast(1.2): 이미지의 대조를 강조합니다. 값을 조정하여 우리가 원하는 대로 조정하고 각 이미지에 맞게 개인화할 수 있습니다. 하지만 조절 값을 너무 높게 하거나 너무 낮게 하면 이상해 보일 수 있습니다.</li>
<li>sepia(1): 이미지의 색상을 올드 포토 세피아 톤으로 변환합니다.</li>
</ul>
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
<p>또 다른 라인을 웹킷 마스크에 추가할 수도 있습니다. 예전 사진은 중앙이 더 집중되어 있는 것처럼 보이지만, 이후 색상이 사라지고 가장자리가 조금 흐릿해지면서 저하됩니다. 이를 CSS에 마스크를 적용하여 구현할 수 있습니다. 불행히도 마스크는 모든 브라우저에서 지원되지 않지만... 다행히도 벤더 접두사는 있습니다! 따라서 -webkit-mask를 사용하여 동일한 효과를 적용할 수 있습니다.</p>
<p>-webkit-mask: radial-gradient(#000, #0009)으로 이미지의 가장자리를 반투명하게 만들어줍니다(중앙에 완전히 투명한 타원을 사용하여 외부로 향해 점점 사라지는 것), 그래서 사진이 배경과 어우러져 흐려지고 같아집니다. 배경의 색에 따라 다른 결과가 나타날 수 있음을 주목하세요!</p>
<p>이 네 줄의 CSS를 적용하면 오래된 사진 효과를 얻을 수 있습니다. 원본과 결과 사진을 비교한 것이 여기 있습니다:</p>
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
<p><img src="@source/docs/Tech/2024-04-19-OldPhotoEffectwithCSS/img/OldPhotoEffectwithCSS_1.png" alt="Old Photo Effect with CSS"></p>
<p>나쁘지 않네요, 하지만 한 단계 더 나아갈 수 있어요.</p>
<h1 id="가상-요소-추가" tabindex="-1"><a class="header-anchor" href="#가상-요소-추가" aria-hidden="true">#</a> 가상 요소 추가</h1>
<p>하나의 <code v-pre>img</code> 태그를 사용하는 경우 이미지에 ::before 또는 ::after와 같은 가상 요소가 없기 때문에 요소에 적용할 수 있는 효과가 제한됩니다. 대신 <code v-pre>div</code>를 사용하고 이미지를 배경으로 추가하면 가상 요소에 필터와 마스크를 적용하여 더 정확한 효과를 얻을 수 있습니다.</p>
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
<p><code v-pre>img /</code> 태그로 비슷한 결과를 얻는 것은 간단합니다. HTML은 다음과 같이 보일 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"old-style-photo demo-image"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>그런 다음 CSS에서 우리는 이 요소를 사용하여 이전 스타일의 사진을 표시할 것입니다. 이전 섹션과 마찬가지로 할 것이지만, 크기와 이미지를 배경으로 설정해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 데모 이미지에만 적용 */</span>
<span class="token punctuation">.</span>demo<span class="token operator">-</span>image <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 45vw<span class="token punctuation">;</span>
  aspect<span class="token operator">-</span>ratio<span class="token operator">:</span> <span class="token number">3</span><span class="token operator">/</span><span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token function">url</span><span class="token punctuation">(</span>link<span class="token operator">-</span>to<span class="token operator">-</span>image<span class="token punctuation">.</span>jpg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  background<span class="token operator">-</span>size<span class="token operator">:</span> cover<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 가상 요소와 오래된 사진 효과에 필요 */</span>
<span class="token punctuation">.</span>old<span class="token operator">-</span>style<span class="token operator">-</span>photo <span class="token punctuation">{</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
  <span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token function">blur</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span> <span class="token function">contrast</span><span class="token punctuation">(</span><span class="token number">1.2</span><span class="token punctuation">)</span> <span class="token function">sepia</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token function">blur</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">.</span>25px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">-</span>webkit<span class="token operator">-</span>mask<span class="token operator">:</span> radial<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>#<span class="token number">000</span><span class="token punctuation">,</span> #000a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그렇게 함으로써, 이전 섹션에서와 동일한 효과를 얻을 수 있습니다. 이미지의 가장자리를 흐리게 하는 것은 오래된 사진에서 흔한 현상입니다. 이를 위해 우리는 다시 마스크를 사용할 것입니다. 중심에서 가장자리 방향으로의 또 다른 원형 그라디언트인데, 이번에는 반대 방향으로 되겠습니다: 중앙에서 숨겨지고 끝에서 보이도록 설정됩니다. 이렇게 하면 이미지 자체에 백드롭 필터 효과를 적용할 수 있습니다.</p>
<p>백드롭 필터를 사용하면 요소 뒤의 영역에 필터를 적용할 수 있습니다. 중앙 부분이 마스크로 잘린 상태이기 때문에 필터는 이미지의 중앙 부분에는 적용되지 않고, 오직 가시 영역과 마스크에 따라 가시도가 조절됩니다. 예를 들어 blur() 백드롭 필터를 적용하면 가장자리가 완전히 가시적인 부분보다 중앙 부분이 덜 흐릿하게 처리됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>old<span class="token operator">-</span>style<span class="token operator">-</span>photo<span class="token operator">:</span><span class="token operator">:</span>before <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token operator">-</span>webkit<span class="token operator">-</span>mask<span class="token operator">:</span> radial<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>farthest<span class="token operator">-</span>side<span class="token punctuation">,</span> #<span class="token number">0000</span> <span class="token number">30</span><span class="token operator">%</span><span class="token punctuation">,</span> #<span class="token number">000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  backdrop<span class="token operator">-</span>filter<span class="token operator">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>5px<span class="token punctuation">)</span> <span class="token function">sepia</span><span class="token punctuation">(</span><span class="token number">90</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>결과 이미지는 가장자리 주변이 더 흐리게 처리되며, 더 많은 세피아가 추가되었습니다(따라서 색상이 더 조화롭게 결합됩니다):</p>
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
<img src="@source/docs/Tech/2024-04-19-OldPhotoEffectwithCSS/img/OldPhotoEffectwithCSS_2.png" />
<h1 id="인라인-svg-블렌딩" tabindex="-1"><a class="header-anchor" href="#인라인-svg-블렌딩" aria-hidden="true">#</a> 인라인 SVG 블렌딩</h1>
<p>언제나 몇몇 사람들이 이것이 &quot;순수한 CSS 솔루션이 아니다&quot;라고 말하는 경우가 있을 수 있습니다 (저는 그것이라고 주장한 적이 없습니다), 이 섹션을 부정하는 경우도 있습니다. 대신에, 우리는 &quot;CSS가 제공하는 모든 기능을 활용하는&quot; 것으로 보고 이것을 우리의 승리로 삼을 것입니다.</p>
<p>맞아요. 이 마지막 단계에는 약간의 SVG가 포함됩니다. 사실은 CSS에는 필터가 있지만, SVG의 필터가 그것보다 다양하고 고급스럽지는 않습니다. 우리에게 다행히도, 두 기술을 비교적 쉬운 방법으로 결합할 수 있습니다.</p>
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
<p>한 가지 방법은 HTML에 인라인 SVG를 추가하고 CSS에서 참조하는 것입니다. 또 다른 방법으로는 HTML 쪽에 아무것도 추가하지 않고 CSS에서 SVG를 직접 인라인하는 것입니다. 이는 데이터 URI와 url() 함수를 결합하여 배경으로 SVG를 추가함으로써 가능합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token operator">&lt;</span>mime 타입<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">;</span>charset<span class="token operator">=</span><span class="token operator">&lt;</span>문자셋<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">;</span>base64<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token operator">&lt;</span>인코딩된 데이터<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>우리의 경우, base64 인코딩을 할 필요조차 없습니다. 간단한 SVG이기 때문에 데이터 URI에 그냥 텍스트로 넣을 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>svg xmlns<span class="token operator">=</span><span class="token string">'http://www.w3.org/2000/svg'</span> width<span class="token operator">=</span><span class="token string">'100'</span> height<span class="token operator">=</span><span class="token string">'100'</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>filter id<span class="token operator">=</span><span class="token string">'noise'</span> x<span class="token operator">=</span><span class="token string">'0%'</span> y<span class="token operator">=</span><span class="token string">'0%'</span> width<span class="token operator">=</span><span class="token string">'100%'</span> height<span class="token operator">=</span><span class="token string">'100%'</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>feTurbulence baseFrequency<span class="token operator">=</span><span class="token string">'0.5'</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>filter<span class="token operator">></span>
  <span class="token operator">&lt;</span>rect x<span class="token operator">=</span><span class="token string">'0'</span> y<span class="token operator">=</span><span class="token string">'0'</span> width<span class="token operator">=</span><span class="token string">'100%'</span> height<span class="token operator">=</span><span class="token string">'100%'</span> filter<span class="token operator">=</span><span class="token string">'url(#noise)'</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>svg<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>필요한 건 #을 주의깊게 다루는 것 뿐입니다. #은 URL 인코딩되어 %23으로 대체되어야 합니다. 그런 다음 해당 속성을 ::after 의 가상 요소에 적용합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>old<span class="token operator">-</span>style<span class="token operator">-</span>photo<span class="token operator">:</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span>
    <span class="token function">url</span><span class="token punctuation">(</span><span class="token string">"data:image/svg+xml;utf8,&lt;svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'>&lt;filter id='noise' x='0%' y='0%' width='100%' height='100%'>&lt;feTurbulence baseFrequency='0.5' />&lt;/filter>&lt;rect x='0' y='0' width='100%' height='100%' filter='url(%23noise)' />&lt;/svg>"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> #f003<span class="token punctuation">;</span>
  <span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">)</span> <span class="token function">contrast</span><span class="token punctuation">(</span><span class="token number">150</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  mix<span class="token operator">-</span>blend<span class="token operator">-</span>mode<span class="token operator">:</span> darken<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>잡음 자체에는 다양한 색상이 있지만, 우리가 부모에 적용한 몇 가지 색상 필터로 인해 이제 단색입니다. 그럼에도 불구하고 추가 필터(필수 아님) 및 원본 사진과 더 잘 혼합되도록 블렌드 모드를 적용할 수 있습니다. mix-blend-mode의 다른 값들을 사용해보는 걸 적극 권장합니다. darken 및 multiply 값은 우리가 원하는 효과에 좋은 결과를 낳지만 다른 값들로도 시도해보는 걸 권합니다.</p>
<p>결과는 이전과 동일한 이미지지만, 이제 오래된 사진 이미지에 더 많은 현실감을 더해주는 골반/잡음 효과가 있습니다:</p>
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
<img src="@source/docs/Tech/2024-04-19-OldPhotoEffectwithCSS/img/OldPhotoEffectwithCSS_3.png" />
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>이 글에서는 외부 파일에 의존하지 않고 CSS(그리고 작은 인라인 SVG)만을 사용하여 단계별로 오래된 사진 효과를 만드는 방법을 살펴보았습니다. 모든 코드가 독립적이며 우리가 원하는 수준에서 원하는 효과를 달성하는 데 적용될 수 있습니다:</p>
<img src="@source/docs/Tech/2024-04-19-OldPhotoEffectwithCSS/img/OldPhotoEffectwithCSS_4.png" />
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
<p>필터 및 마스크값을 변경하면 완전히 다른 이미지가 생성됩니다. 코드를 다운로드하여 로컬에서 시도해보거나 CodePen에서 이 데모를 사용해보세요:</p>
<h1 id="더-많은-예시" tabindex="-1"><a class="header-anchor" href="#더-많은-예시" aria-hidden="true">#</a> 더 많은 예시</h1>
<p>이 효과가 일반적으로 작동하는 것을 보여주기 위해 데모 이미지에 특정한 것이 아니라는 것을 입증하기 위해 몇 가지 사진에도 적용해 보았습니다(Unsplash의 Filipp Romanovski가 찍은 모든 원본 이미지):</p>
<p><img src="@source/docs/Tech/2024-04-19-OldPhotoEffectwithCSS/img/OldPhotoEffectwithCSS_5.png" alt="old photo effect"></p>
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
<p><img src="@source/docs/Tech/2024-04-19-OldPhotoEffectwithCSS/img/OldPhotoEffectwithCSS_6.png" alt="OldPhotoEffectwithCSS_6"></p>
<p><img src="@source/docs/Tech/2024-04-19-OldPhotoEffectwithCSS/img/OldPhotoEffectwithCSS_7.png" alt="OldPhotoEffectwithCSS_7"></p>
<p>우리는 방사형 그라데이션의 중심을 더 중요하다고 생각하는 영역에 초점을 맞출 수 있습니다. 예를 들어, 이 사진에서는 그라데이션의 중심이 얼굴에 더 가까운 위치에 있습니다:</p>
<p><img src="@source/docs/Tech/2024-04-19-OldPhotoEffectwithCSS/img/OldPhotoEffectwithCSS_8.png" alt="OldPhotoEffectwithCSS_8"></p>
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
<p>사람들의 사진을 사용하면 효과가 더 좋아요. 그러나 사람이 없어도 작동합니다. 특히 사진의 주제가 옛날 물건인 경우 효과가 특히 좋아요:</p>
<p><img src="@source/docs/Tech/2024-04-19-OldPhotoEffectwithCSS/img/OldPhotoEffectwithCSS_9.png" alt="OldPhotoEffectwithCSS_9.png"></p>
</div></template>
