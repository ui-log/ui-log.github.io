<template><div><p>Typeset 블록은 프로젝트 전반에 걸쳐 사용된 글꼴을 문서화하는 데 도움이 됩니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-Typeset/img/Typeset_0.png" alt="Typeset_0.png"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> Typeset <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Meta title<span class="token operator">=</span><span class="token string">"Typography"</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token keyword">export</span> <span class="token keyword">const</span> typography <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token string">'"누니토 산스", "헬베티카 뉴", 헬베티카, Arial, sans-serif'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">regular</span><span class="token operator">:</span> <span class="token string">'400'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bold</span><span class="token operator">:</span> <span class="token string">'700'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">extrabold</span><span class="token operator">:</span> <span class="token string">'800'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">black</span><span class="token operator">:</span> <span class="token string">'900'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">s1</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token literal-property property">s2</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
    <span class="token literal-property property">s3</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
    <span class="token literal-property property">m1</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">m2</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
    <span class="token literal-property property">m3</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
    <span class="token literal-property property">l1</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
    <span class="token literal-property property">l2</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
    <span class="token literal-property property">l3</span><span class="token operator">:</span> <span class="token number">48</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> SampleText <span class="token operator">=</span> <span class="token string">'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'</span><span class="token punctuation">;</span>

# Typography

<span class="token operator">**</span>글꼴<span class="token operator">:</span><span class="token operator">**</span> 누니토 산스

<span class="token operator">**</span>굵기<span class="token operator">:</span><span class="token operator">**</span> <span class="token number">400</span><span class="token punctuation">(</span>보통<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">700</span><span class="token punctuation">(</span>굵게<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">800</span><span class="token punctuation">(</span>엄격함<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">900</span><span class="token punctuation">(</span>진한검은색<span class="token punctuation">)</span>

<span class="token operator">&lt;</span>Typeset
  fontSizes<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
    <span class="token function">Number</span><span class="token punctuation">(</span>typography<span class="token punctuation">.</span>size<span class="token punctuation">.</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Number</span><span class="token punctuation">(</span>typography<span class="token punctuation">.</span>size<span class="token punctuation">.</span>s2<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Number</span><span class="token punctuation">(</span>typography<span class="token punctuation">.</span>size<span class="token punctuation">.</span>s3<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Number</span><span class="token punctuation">(</span>typography<span class="token punctuation">.</span>size<span class="token punctuation">.</span>m1<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Number</span><span class="token punctuation">(</span>typography<span class="token punctuation">.</span>size<span class="token punctuation">.</span>m2<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Number</span><span class="token punctuation">(</span>typography<span class="token punctuation">.</span>size<span class="token punctuation">.</span>m3<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Number</span><span class="token punctuation">(</span>typography<span class="token punctuation">.</span>size<span class="token punctuation">.</span>l1<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Number</span><span class="token punctuation">(</span>typography<span class="token punctuation">.</span>size<span class="token punctuation">.</span>l2<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Number</span><span class="token punctuation">(</span>typography<span class="token punctuation">.</span>size<span class="token punctuation">.</span>l3<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">}</span>
  fontWeight<span class="token operator">=</span><span class="token punctuation">{</span>typography<span class="token punctuation">.</span>weight<span class="token punctuation">.</span>black<span class="token punctuation">}</span>
  sampleText<span class="token operator">=</span><span class="token punctuation">{</span>SampleText<span class="token punctuation">}</span>
  fontFamily<span class="token operator">=</span><span class="token punctuation">{</span>typography<span class="token punctuation">.</span>type<span class="token punctuation">.</span>primary<span class="token punctuation">}</span>
<span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typeset" tabindex="-1"><a class="header-anchor" href="#typeset" aria-hidden="true">#</a> Typeset</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Typeset <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Typeset은 다음과 같은 프롭으로 구성되어 있어요:</p>
<h3 id="fontfamily" tabindex="-1"><a class="header-anchor" href="#fontfamily" aria-hidden="true">#</a> fontFamily</h3>
<p>타입: 문자열</p>
<p>표 태그를 마크다운 형식으로 변경해주세요.</p>
<h3 id="fontsizes" tabindex="-1"><a class="header-anchor" href="#fontsizes" aria-hidden="true">#</a> fontSizes</h3>
<p>유형: number[]</p>
<p>사용 가능한 글꼴 크기 목록(픽셀 단위)을 제공합니다.</p>
<h3 id="fontweight" tabindex="-1"><a class="header-anchor" href="#fontweight" aria-hidden="true">#</a> fontWeight</h3>
<p>유형: 숫자</p>
<p>표시할 글꼴의 두께를 지정합니다.</p>
<h3 id="sampletext" tabindex="-1"><a class="header-anchor" href="#sampletext" aria-hidden="true">#</a> sampleText</h3>
<p>유형: 문자열</p>
<p>표시할 텍스트를 설정합니다.</p>
</div></template>
