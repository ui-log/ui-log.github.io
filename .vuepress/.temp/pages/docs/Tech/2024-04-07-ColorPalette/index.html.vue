<template><div><p>ColorPalette 블록을 사용하면 프로젝트 전체에서 사용되는 색상 관련 항목(예: 색 견본)을 문서화할 수 있어요.</p>
<p><img src="@source/docs/Tech/2024-04-07-ColorPalette/img/ColorPalette_0.png" alt="ColorPalette_0.png"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> ColorPalette<span class="token punctuation">,</span> ColorItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Meta title<span class="token operator">=</span><span class="token string">"Colors"</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token operator">&lt;</span>ColorPalette<span class="token operator">></span>
  <span class="token operator">&lt;</span>ColorItem
    title<span class="token operator">=</span><span class="token string">"theme.color.greyscale"</span>
    subtitle<span class="token operator">=</span><span class="token string">"Some of the greys"</span>
    colors<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token literal-property property">White</span><span class="token operator">:</span> <span class="token string">'#FFFFFF'</span><span class="token punctuation">,</span> <span class="token literal-property property">Alabaster</span><span class="token operator">:</span> <span class="token string">'#F8F8F8'</span><span class="token punctuation">,</span> <span class="token literal-property property">Concrete</span><span class="token operator">:</span> <span class="token string">'#F3F3F3'</span> <span class="token punctuation">}</span>
  <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>ColorItem 
    title<span class="token operator">=</span><span class="token string">"theme.color.primary"</span> 
    subtitle<span class="token operator">=</span><span class="token string">"Coral"</span> 
    colors<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token literal-property property">WildWatermelon</span><span class="token operator">:</span> <span class="token string">'#FF4785'</span> <span class="token punctuation">}</span> 
  <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>ColorItem 
    title<span class="token operator">=</span><span class="token string">"theme.color.secondary"</span> 
    subtitle<span class="token operator">=</span><span class="token string">"Ocean"</span> 
    colors<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token literal-property property">DodgerBlue</span><span class="token operator">:</span> <span class="token string">'#1EA7FD'</span> <span class="token punctuation">}</span> 
  <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>ColorItem
    title<span class="token operator">=</span><span class="token string">"theme.color.positive"</span>
    subtitle<span class="token operator">=</span><span class="token string">"Green"</span>
    colors<span class="token operator">=</span><span class="token punctuation">{</span>
      <span class="token literal-property property">Apple</span><span class="token operator">:</span> <span class="token string">'rgba(102,191,60,1)'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">Apple80</span><span class="token operator">:</span> <span class="token string">'rgba(102,191,60,.8)'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">Apple60</span><span class="token operator">:</span> <span class="token string">'rgba(102,191,60,.6)'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">Apple30</span><span class="token operator">:</span> <span class="token string">'rgba(102,191,60,.3)'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ColorPalette<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ColorPalette <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ColorPalette은 다음과 같은 속성으로 구성되어 있어요:</p>
<h3 id="children" tabindex="-1"><a class="header-anchor" href="#children" aria-hidden="true">#</a> children</h3>
<p>타입: React.ReactNode</p>
<p>ColorPalette는 ColorItem 자식만 허용합니다.</p>
<h2 id="coloritem" tabindex="-1"><a class="header-anchor" href="#coloritem" aria-hidden="true">#</a> ColorItem</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ColorItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ColorItem은 다음과 같은 props로 구성됩니다:</p>
<h3 id="색상" tabindex="-1"><a class="header-anchor" href="#색상" aria-hidden="true">#</a> 색상</h3>
<p>(필수)</p>
<p>유형: string[] | { [key: string]: string }</p>
<p>표시할 색상 목록을 제공합니다. 유효한 CSS 색상 형식(16진수, RGB, HSL 등)을 수용합니다. 객체를 제공할 경우 키는 값 위에 표시됩니다.</p>
<h3 id="부제" tabindex="-1"><a class="header-anchor" href="#부제" aria-hidden="true">#</a> 부제</h3>
<p>(필수)</p>
<p>유형: 문자열</p>
<p>색상에 대한 추가 설명을 제공합니다.</p>
<h3 id="제목" tabindex="-1"><a class="header-anchor" href="#제목" aria-hidden="true">#</a> 제목</h3>
<p>(필수)</p>
<p>유형: 문자열</p>
<p>표시할 색상의 이름을 설정합니다.</p>
</div></template>
