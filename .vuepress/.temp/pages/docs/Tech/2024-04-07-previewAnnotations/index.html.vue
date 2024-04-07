<template><div><p>부모: main.js|ts 설정</p>
<p>유형: string[] | ((config: string[], options: Options) =&gt; string[] | Promise&lt;string[]&gt;)</p>
<p>스토리 미리보기에서 실행할 추가 스크립트를 추가합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./types'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">previewAnnotations</span><span class="token operator">:</span> StorybookConfig<span class="token punctuation">[</span><span class="token string">'previewAnnotations'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">entry <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
  <span class="token operator">...</span>entry<span class="token punctuation">,</span>
  require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'@storybook/nextjs/preview.js'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
