<template><div><p>IconGallery 블록은 프로젝트와 관련된 React 아이콘 컴포넌트를 깔끔한 그리드로 표시하여 쉽게 문서화할 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-IconGallery/img/IconGallery_0.png" alt="Icon Gallery Image"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> Title<span class="token punctuation">,</span> IconGallery<span class="token punctuation">,</span> IconItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Icon <span class="token keyword">as</span> IconExample <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Icon'</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Meta title<span class="token operator">=</span><span class="token string">"Iconography"</span> <span class="token operator">/</span><span class="token operator">></span>

# 아이콘 그래피

<span class="token operator">&lt;</span>IconGallery<span class="token operator">></span>
  <span class="token operator">&lt;</span>IconItem name<span class="token operator">=</span><span class="token string">"mobile"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>IconExample name<span class="token operator">=</span><span class="token string">"mobile"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>IconItem<span class="token operator">></span>
  <span class="token operator">&lt;</span>IconItem name<span class="token operator">=</span><span class="token string">"user"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>IconExample name<span class="token operator">=</span><span class="token string">"user"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>IconItem<span class="token operator">></span>
  <span class="token operator">&lt;</span>IconItem name<span class="token operator">=</span><span class="token string">"browser"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>IconExample name<span class="token operator">=</span><span class="token string">"browser"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>IconItem<span class="token operator">></span>
  <span class="token operator">&lt;</span>IconItem name<span class="token operator">=</span><span class="token string">"component"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>IconExample name<span class="token operator">=</span><span class="token string">"component"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>IconItem<span class="token operator">></span>
  <span class="token operator">&lt;</span>IconItem name<span class="token operator">=</span><span class="token string">"calendar"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>IconExample name<span class="token operator">=</span><span class="token string">"calendar"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>IconItem<span class="token operator">></span>
   <span class="token operator">&lt;</span>IconItem name<span class="token operator">=</span><span class="token string">"paintbrush"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>IconExample name<span class="token operator">=</span><span class="token string">"paintbrush"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>IconItem<span class="token operator">></span>
   <span class="token operator">&lt;</span>IconItem name<span class="token operator">=</span><span class="token string">"add"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>IconExample name<span class="token operator">=</span><span class="token string">"add"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>IconItem<span class="token operator">></span>
  <span class="token operator">&lt;</span>IconItem name<span class="token operator">=</span><span class="token string">"subtract"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>IconExample name<span class="token operator">=</span><span class="token string">"subtract"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>IconItem<span class="token operator">></span>
   <span class="token operator">&lt;</span>IconItem name<span class="token operator">=</span><span class="token string">"document"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>IconExample name<span class="token operator">=</span><span class="token string">"document"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>IconItem<span class="token operator">></span>
  <span class="token operator">&lt;</span>IconItem name<span class="token operator">=</span><span class="token string">"graphline"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>IconExample name<span class="token operator">=</span><span class="token string">"graphline"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>IconItem<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>IconGallery<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="아이콘-갤러리" tabindex="-1"><a class="header-anchor" href="#아이콘-갤러리" aria-hidden="true">#</a> 아이콘 갤러리</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> IconGallery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>IconGallery는 다음과 같은 props로 구성되어 있습니다:</p>
<h3 id="children" tabindex="-1"><a class="header-anchor" href="#children" aria-hidden="true">#</a> children</h3>
<p>타입: React.ReactNode</p>
<p>아이콘 갤러리는 오직 아이콘 아이템 자식 요소만을 예상합니다.</p>
<h2 id="아이콘-아이템" tabindex="-1"><a class="header-anchor" href="#아이콘-아이템" aria-hidden="true">#</a> 아이콘 아이템</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> IconItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>아이콘 아이템은 다음과 같은 속성으로 구성됩니다:</p>
<h3 id="이름" tabindex="-1"><a class="header-anchor" href="#이름" aria-hidden="true">#</a> 이름</h3>
<p>(필수)</p>
<p>유형: 문자열</p>
<p>아이콘의 이름을 설정합니다.</p>
<h3 id="children-1" tabindex="-1"><a class="header-anchor" href="#children-1" aria-hidden="true">#</a> children</h3>
<p>유형: React.ReactNode</p>
<p>표시할 아이콘을 제공합니다.</p>
</div></template>
