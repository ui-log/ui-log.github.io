<template><div><img src="@source/docs/Tech/2024-04-19-WhatisthedifferencebetweenREMandemandpx/img/WhatisthedifferencebetweenREMandemandpx_0.png" />
<p>CSS에서는 크기를 조절하는 데 사용되는 세 가지 일반적인 단위가 있습니다: rem, em 및 px. 각 단위에 대한 간단한 설명을 함께 예시로 살펴보겠습니다:</p>
<ul>
<li>Rem (Root em): 이 단위는 루트 요소(보통 <code v-pre>html</code> 태그)에 대해 상대적이며 반응형 디자인을 만드는 데 유용합니다. 한 rem은 루트 요소의 글ꔷ씪과 동일합니다. 따라서 루트 요소의 글ꔷ씪이 16px로 설정된 경우, 1rem은 16px과 동일합니다. 예를 들어:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>html <span class="token punctuation">{</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

h1 <span class="token punctuation">{</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 2rem<span class="token punctuation">;</span> <span class="token comment">/* 2 * 16px = 32px */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<li>Em: 이 단위는 부모 요소의 글꼴 크기와 관련이 있고 확장 가능한 디자인을 만드는 데 유용할 수 있습니다. 예를 들어:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>parent <span class="token punctuation">{</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>child <span class="token punctuation">{</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>8em<span class="token punctuation">;</span> <span class="token comment">/* 0.8 * 16px = 12.8px */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서 자식 요소의 글꼴 크기는 부모 요소의 글꼴 크기의 0.8배입니다.</p>
<ol start="3">
<li>Px (픽셀): 이 단위는 다른 것과 관련이 없는 절대적인 측정 단위이며 고정 크기 요소나 정확한 측정이 필요한 요소에 일반적으로 사용됩니다. 예를 들어:</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>element <span class="token punctuation">{</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 14px<span class="token punctuation">;</span>
  margin<span class="token operator">-</span>top<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서 요소의 글꼴 크기는 14픽셀로 설정되고 위쪽 여백은 20픽셀로 설정됩니다.</p>
<p>마무리로, 단위 선택은 프로젝트의 특정 요구에 따라 다릅니다. Rem은 확장 가능한 디자인을 만들 때 유용하며, em은 반응형 디자인을 만들 때 유용하며, px는 고정 크기 요소를 만들 때 유용합니다.</p>
<p>이 유형의 주제에 대해 더 알고 싶으시다면 저를 팔로우해주세요.</p>
</div></template>
