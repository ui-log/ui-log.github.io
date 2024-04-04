<template><div><p>이야기에서는 버튼에 환상적인 네온 효과를 만들어볼 거에요.</p>
<p>시작해봅시다!</p>
<h2 id="기본-버튼-만들기" tabindex="-1"><a class="header-anchor" href="#기본-버튼-만들기" aria-hidden="true">#</a> 기본 버튼 만들기</h2>
<p>먼저 버튼을 준비해주세요. div나 button 요소 중 하나를 사용할 수 있어요. 버튼 요소를 선택한다면 기본 스타일을 재정의해야 합니다.</p>
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
<table>
<thead>
<tr>
<th>속성</th>
<th>값</th>
</tr>
</thead>
<tbody>
<tr>
<td>display</td>
<td>inline-block</td>
</tr>
<tr>
<td>padding</td>
<td>12px 12px</td>
</tr>
<tr>
<td>font-size</td>
<td>20px</td>
</tr>
<tr>
<td>width</td>
<td>fit-content</td>
</tr>
<tr>
<td>box-sizing</td>
<td>border-box</td>
</tr>
<tr>
<td>font-family</td>
<td>consolas</td>
</tr>
<tr>
<td>color</td>
<td>#03e9f4</td>
</tr>
<tr>
<td>text-transform</td>
<td>uppercase</td>
</tr>
<tr>
<td>background-color</td>
<td>transparent</td>
</tr>
<tr>
<td>transition</td>
<td>0.5s</td>
</tr>
<tr>
<td>letter-spacing</td>
<td>4px</td>
</tr>
<tr>
<td>border</td>
<td>none</td>
</tr>
</tbody>
</table>
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
<p>저희는 기본 투명 버튼을 정의했어요. 네온 효과는 사이버펑크 스타일을 떠올리게 할 거에요. 그래서 Consolas와 같이 현대적으로 보이는 폰트 패밀리가 선택되었어요.</p>
<p>HTML 및 CSS를 표준 HTML 파일에 복사하면 이미지와 유사한 버튼 — 일반적인 네온 버튼이 나타날 거에요.</p>
<h1 id="네온-효과-추가" tabindex="-1"><a class="header-anchor" href="#네온-효과-추가" aria-hidden="true">#</a> 네온 효과 추가</h1>
<p>이제 버튼에 호버 상태를 추가하여 box-shadow를 사용해 네온 효과를 만들어보세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>neonShimmerButton<span class="token operator">:</span>hover <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #17c47c<span class="token punctuation">;</span>
  color<span class="token operator">:</span> #<span class="token number">050801</span><span class="token punctuation">;</span>
  box<span class="token operator">-</span>shadow<span class="token operator">:</span>
    <span class="token number">0</span> <span class="token number">0</span> 5px #17c47c<span class="token punctuation">,</span>
    <span class="token number">0</span> <span class="token number">0</span> 25px #17c47c<span class="token punctuation">,</span>
    <span class="token number">0</span> <span class="token number">0</span> 50px #17c47c<span class="token punctuation">,</span>
    <span class="token number">0</span> <span class="token number">0</span> 200px #17c47c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 버튼에 커서를 올리면 네온 효과가 보입니다.</p>
<img src="@source/docs/Tech/2024-03-29-FantasticCSSeffectsbuttonNeonButtonusingbox-shadow/img/FantasticCSSeffectsbuttonNeonButtonusingbox-shadow_0.png" />
<p>여기에서 box-shadow 속성을 사용하여 버튼 주위에 광효과를 만듭니다. 이는 버튼을 뒤에서 조명을 받고 있는 것처럼 돋보이도록 만드는 빛의 후광 같은 효과입니다.</p>
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
<h1 id="사이버펑크-분위기" tabindex="-1"><a class="header-anchor" href="#사이버펑크-분위기" aria-hidden="true">#</a> 사이버펑크 분위기</h1>
<p>지금 네온 효과가 생겼지만, 진정한 사이버펑크 느낌을 내기 위해서는 충분히 기술적으로 보이지 않을 수 있습니다. 걱정하지 마세요. 깜박거리는 효과로 더 업그레이드할 것입니다. 색상을 여러 번 반복해서 선언하는 것을 피하기 위해 CSS 변수를 사용할 것입니다.</p>
<h1 id="깜박이는-애니메이션" tabindex="-1"><a class="header-anchor" href="#깜박이는-애니메이션" aria-hidden="true">#</a> 깜박이는 애니메이션</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>neonShimmerButton<span class="token operator">:</span>hover <span class="token punctuation">{</span>
    <span class="token operator">--</span>neon<span class="token operator">-</span>blink<span class="token operator">-</span>color <span class="token operator">:</span> #a4d3be<span class="token punctuation">;</span>
    <span class="token operator">--</span>neon<span class="token operator">-</span>color <span class="token operator">:</span> #17c47c<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>neon<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">050801</span><span class="token punctuation">;</span>
    <span class="token literal-property property">animation</span><span class="token operator">:</span> blink 2s infinite linear<span class="token punctuation">;</span>

    @keyframes blink <span class="token punctuation">{</span>
        <span class="token number">0</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">{</span>
            background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>neon<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">050801</span><span class="token punctuation">;</span>
            box<span class="token operator">-</span>shadow<span class="token operator">:</span>
                <span class="token number">0</span> <span class="token number">0</span> 5px <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>neon<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token number">0</span> <span class="token number">0</span> 25px <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>neon<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token number">0</span> <span class="token number">0</span> 50px <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>neon<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token number">0</span> <span class="token number">0</span> 200px <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>neon<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token number">50</span><span class="token operator">%</span> <span class="token punctuation">{</span>
            background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>neon<span class="token operator">-</span>blink<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">040701</span><span class="token punctuation">;</span>
            box<span class="token operator">-</span>shadow<span class="token operator">:</span>
                <span class="token number">0</span> <span class="token number">0</span> 5px <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>neon<span class="token operator">-</span>blink<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token number">0</span> <span class="token number">0</span> 25px <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>neon<span class="token operator">-</span>blink<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token number">0</span> <span class="token number">0</span> 50px <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>neon<span class="token operator">-</span>blink<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token number">0</span> <span class="token number">0</span> 200px <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>neon<span class="token operator">-</span>blink<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 추가로 버튼이 현재 네온 빛으로 깜박거리며 사이버펑크 영감을 받은 네온 깜박이 버튼을 완성했습니다.</p>
<p>그리고 바로 그렇게, 네온 효과가 완성되었습니다. 이 빛나는 버튼은 사이버펑크 스타일로 어떤 사용자 인터페이스도 화려하게 밝힐 것입니다.</p>
<p><img src="https://miro.medium.com/v2/resize:fit:720/1*RdRxyTBsPNWlVZByWxnAlg.gif" alt="Neon Blinking Button"></p>
<p>이 버튼 위에 디지털 눈부심을 한층 증폭시켰네요! box-shadow와 조금의 애니메이션 효과로 우리는 사이버펑크 우주 속에서 빛나는 네온 버튼을 만들었습니다. 여러분의 인터페이스에 이 기술적인 터치로 화사함을 불어넣을 준비가 되셨나요? 함께 코드로 만들어내어 그 네온 빛을 감상해봅시다!</p>
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
<h1 id="다음-효과" tabindex="-1"><a class="header-anchor" href="#다음-효과" aria-hidden="true">#</a> 다음 효과</h1>
<p>다음에는 일부 shimming 효과를 만들겠습니다. 지금은 피곤해서 이야기를 진행하지 않겠습니다. 아래에는 효과의 미리보기가 있습니다.</p>
<p><img src="https://miro.medium.com/v2/resize:fit:720/1*_U1vXNBCjLXam7uGlfhdwA.gif" alt="image"></p>
</div></template>
