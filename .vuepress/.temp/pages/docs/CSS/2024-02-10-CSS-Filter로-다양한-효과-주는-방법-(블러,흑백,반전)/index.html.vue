<template><div><h1 id="css-filter로-다양한-효과-주는-방법-블러-흑백-반전" tabindex="-1"><a class="header-anchor" href="#css-filter로-다양한-효과-주는-방법-블러-흑백-반전" aria-hidden="true">#</a> CSS Filter로 다양한 효과 주는 방법 (블러,흑백,반전)</h1>
<div class="custom-container tip"><p class="custom-container-title">💡이 포스팅을 읽으면</p>
</div>
<h2 id="css-필터-웹-요소에-시각적-효과-추가하기" tabindex="-1"><a class="header-anchor" href="#css-필터-웹-요소에-시각적-효과-추가하기" aria-hidden="true">#</a> CSS 필터: 웹 요소에 시각적 효과 추가하기</h2>
<p>CSS 필터는 웹 개발자들이 이미지와 그래픽 요소에 다양한 시각적 효과를 적용할 수 있게 해주는 강력한 도구입니다. 이를 통해 그림자, 흐림, 색상 변형 등 다양한 효과를 손쉽게 적용할 수 있습니다.</p>
<h2 id="필터-속성" tabindex="-1"><a class="header-anchor" href="#필터-속성" aria-hidden="true">#</a> 필터 속성</h2>
<p>CSS 필터는 filter 속성을 통해 적용됩니다. 이 속성에는 다양한 필터 함수가 존재하며, 각 함수는 특정한 시각적 효과를 나타냅니다. 주요 필터 함수에 대한 설명은 다음과 같습니다:</p>
<ul>
<li>blur(): 요소에 블러 효과를 적용합니다. 이 함수는 blur() 함수의 매개변수로 흐리게 하고자 하는 정도를 지정합니다.</li>
<li>brightness(): 요소의 밝기를 조절합니다. brightness() 함수의 매개변수는 0부터 1 사이의 값으로 지정하며, 1보다 큰 값으로 밝기를 높일 수 있습니다.</li>
<li>contrast(): 요소의 대비를 조절합니다. contrast() 함수의 매개변수는 대비를 조절하는 비율을 나타냅니다.</li>
<li>drop-shadow(): 요소에 그림자 효과를 추가합니다. 이 함수는 그림자의 위치, 흐림 정도, 색상 등을 설정할 수 있습니다.</li>
<li>grayscale(): 요소를 흑백으로 변환합니다. grayscale() 함수의 매개변수는 흑백으로 변환할 정도를 나타냅니다.</li>
<li>hue-rotate(): 요소의 색상을 회전시킵니다. hue-rotate() 함수의 매개변수는 각도로 지정되며, 색상을 회전시킴으로써 다양한 색상 효과를 만들 수 있습니다.</li>
<li>invert(): 요소의 색상을 반전시킵니다. invert() 함수의 매개변수는 반전시킬 정도를 나타냅니다.</li>
<li>opacity(): 요소의 투명도를 조절합니다. opacity() 함수의 매개변수는 0부터 1 사이의 값으로 지정하며, 요소의 투명도를 조절합니다.</li>
<li>saturate(): 요소의 채도를 조절합니다. saturate() 함수의 매개변수는 채도를 조절하는 비율을 나타냅니다.</li>
<li>sepia(): 요소에 세피아 효과를 적용합니다. sepia() 함수의 매개변수는 세피아 효과를 적용하는 정도를 나타냅니다.</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* 이미지에 블러 효과 적용 */</span>
<span class="token selector">.blur</span> <span class="token punctuation">{</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>5px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/CSS/2024-02-10-CSS-Filter로-다양한-효과-주는-방법-(블러,흑백,반전)/img/6.png" width="500" />
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* 이미지의 채도를 감소시킴 */</span>
<span class="token selector">.desaturate</span> <span class="token punctuation">{</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">saturate</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/CSS/2024-02-10-CSS-Filter로-다양한-효과-주는-방법-(블러,흑백,반전)/img/7.png" width="500" />
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* 그림자 효과 추가 */</span>
<span class="token selector">.shadow</span> <span class="token punctuation">{</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>8px 8px 10px #000<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/CSS/2024-02-10-CSS-Filter로-다양한-효과-주는-방법-(블러,흑백,반전)/img/1.png" width="500" />
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* 이미지에 그림자와 회전 효과를 적용 */</span>
<span class="token selector">.image-effect</span> <span class="token punctuation">{</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>5px 5px 5px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token function">hue-rotate</span><span class="token punctuation">(</span>90deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/CSS/2024-02-10-CSS-Filter로-다양한-효과-주는-방법-(블러,흑백,반전)/img/2.png" width="500" />
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* 이미지에 세피아 효과와 채도 조절 효과를 적용 */</span>
<span class="token selector">.sepia-effect</span> <span class="token punctuation">{</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">sepia</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span> <span class="token function">saturate</span><span class="token punctuation">(</span>150%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/CSS/2024-02-10-CSS-Filter로-다양한-효과-주는-방법-(블러,흑백,반전)/img/3.png" width="500" />
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* 배경 이미지에 흑백 필터와 밝기 조절 효과를 적용 */</span>
<span class="token selector">.background-effect</span> <span class="token punctuation">{</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span> <span class="token function">brightness</span><span class="token punctuation">(</span>80%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/CSS/2024-02-10-CSS-Filter로-다양한-효과-주는-방법-(블러,흑백,반전)/img/4.png" width="500" />
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* 텍스트에 그림자와 색상 반전 효과를 적용 */</span>
<span class="token selector">.text-effect</span> <span class="token punctuation">{</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>2px 2px 4px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token function">invert</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/CSS/2024-02-10-CSS-Filter로-다양한-효과-주는-방법-(블러,흑백,반전)/img/5.png" width="500" />
<h2 id="브라우저-호환성" tabindex="-1"><a class="header-anchor" href="#브라우저-호환성" aria-hidden="true">#</a> 브라우저 호환성</h2>
<p>대부분의 최신 브라우저에서 CSS 필터가 지원되지만, 모든 필터가 모든 브라우저에서 완벽하게 작동하지는 않을 수 있습니다. 특히 오래된 브라우저나 모바일 기기에서는 일부 필터가 제대로 지원되지 않을 수 있으니 이 점을 유의해야 합니다.</p>
</div></template>
