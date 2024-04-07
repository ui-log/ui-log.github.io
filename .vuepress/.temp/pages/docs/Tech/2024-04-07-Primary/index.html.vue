<template><div><p>기본 블록은 스토리 파일에서 정의된 첫 번째 스토리를 Story 블록으로 표시합니다. 일반적으로 문서 항목의 제목 바로 아래에 바로 렌더링됩니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-Primary/img/Primary_0.png" alt="Primary_0 이미지"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> Primary <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ButtonStories <span class="token keyword">from</span> <span class="token string">'./Button.stories'</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Meta <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token operator">&lt;</span>Primary <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="primary" tabindex="-1"><a class="header-anchor" href="#primary" aria-hidden="true">#</a> Primary</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Primary <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>다음과 같은 prop으로 구성된 Primary:</p>
<h3 id="of" tabindex="-1"><a class="header-anchor" href="#of" aria-hidden="true">#</a> of</h3>
<p>유형: CSF 파일 익스포트</p>
<p>첫 번째 이야기를 찾기 위해 사용되는 CSF 파일을 지정하며, 해당 블록에서 렌더링됩니다. CSF 파일에서 모든 익스포트를 전달하세요 (기본 익스포트가 아님!).</p>
</div></template>
