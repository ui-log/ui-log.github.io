<template><div><ul>
<li>패딩: 상자의 테두리부터 내부까지의 공간입니다.</li>
</ul>
<p>패딩 없이,</p>
<p><img src="@source/docs/Tech/2024-03-29-CSS5BlockPaddingIDs/img/CSS5BlockPadding-IDs_0.png" alt="이미지"></p>
<p>그리고 패딩을 적용하면: 위아래 및 좌우 각각 20px</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>body <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> antiquewhite<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> 0px<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 20px 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-03-29-CSS5BlockPaddingIDs/img/CSS5BlockPadding-IDs_1.png" />
<p>다른 활동을 해보겠습니다!</p>
<p>각기 다른 색으로 4개의 div 상자를 만들어보세요. 이 상자들은 div 상자 안에 div 상자가 있는 형태로 배치되어야 합니다. 어떻게? id 속성을 사용하세요!</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"firstDiv"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"secondDiv"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"thirdDiv"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"fourthDiv"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그럼. 그들을 컬러하는 CSS 코드를 어떻게 적용할 수 있나요? 이렇게 해요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>#firstDiv <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> aqua<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“#”는 id를 나타내요. #이 없으면 firstDiv는 html에 존재하지 않는 타그 요소일 뿐 이에요.</p>
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
<p>하지만 위의 코드를 따라하면 두 개의 div 상자가 겹쳐서 하나만 보입니다. 그래서 전체 div 상자에 10px의 패딩을 주고 각 상자의 크기를 변경해봅시다:</p>
<p><img src="@source/docs/Tech/2024-03-29-CSS5BlockPaddingIDs/img/CSS5BlockPadding-IDs_2.png" alt="image"></p>
</div></template>
