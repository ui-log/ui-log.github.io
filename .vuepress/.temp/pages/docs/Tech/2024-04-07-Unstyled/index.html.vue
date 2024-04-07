<template><div><p>Unstyled 블록은 MDX 문서에서 Storybook의 기본 스타일을 비활성화하는 특수 블록입니다.</p>
<p>기본적으로 문서의 대부분의 요소 (예: h1, p 등)에는 문서가 잘 보이도록 몇 가지 기본 스타일이 적용됩니다. 그러나 때로는 내용 중 일부에 이러한 스타일을 적용하고 싶지 않을 수도 있습니다. 이런 경우에는 내용을 Unstyled 블록으로 감싸서 기본 스타일을 제거할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> Unstyled <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@storybook/blocks"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Header <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./Header.tsx"</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Meta title<span class="token operator">=</span><span class="token string">"Unstyled"</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token operator">></span> 이 블록 인용문은 스타일이 입혀집니다

<span class="token operator">...</span> 그리고 이 단락도 스타일이 적용됩니다<span class="token punctuation">.</span>

<span class="token operator">&lt;</span>Unstyled<span class="token operator">></span>
  <span class="token operator">></span> 이 블록 인용문은 스타일이 적용되지 않습니다

  <span class="token operator">...</span> 그리고 이 단락도<span class="token punctuation">,</span> 다음 구성 <span class="token function">요소</span> <span class="token punctuation">(</span>h1을 포함하는 구성 요소<span class="token punctuation">)</span>도 스타일이 적용되지 않습니다<span class="token punctuation">.</span>

  <span class="token operator">&lt;</span>Header <span class="token operator">/</span><span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>Unstyled<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>결과:</p>
<img src="@source/docs/Tech/2024-04-07-Unstyled/img/Unstyled_0.png" />
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>Unstyled<span class="token operator">></span>
    <span class="token operator">&lt;</span>CustomComponent<span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Unstyled<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="unstyled" tabindex="-1"><a class="header-anchor" href="#unstyled" aria-hidden="true">#</a> Unstyled</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Unstyled <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Unstyled은 다음과 같은 props로 구성됩니다:</p>
<h3 id="children" tabindex="-1"><a class="header-anchor" href="#children" aria-hidden="true">#</a> children</h3>
<p>유형: React.ReactNode</p>
<p>기본 문서 스타일을 적용하고 싶지 않은 콘텐츠를 제공합니다.</p>
</div></template>
