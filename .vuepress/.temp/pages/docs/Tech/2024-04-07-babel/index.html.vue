<template><div><p>부모: main.js|ts 설정</p>
<p>유형: (config: Babel.Config, options: Options) =<code v-pre> Babel.Config | Promise</code>Babel.Config`</p>
<p>Storybook의 Babel 설정을 사용자 정의하세요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크로 your-framework을 교체하세요 (예: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token function">babel</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> <span class="token punctuation">{</span> configType <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>configType <span class="token operator">===</span> <span class="token string">'DEVELOPMENT'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 여기에 개발 구성을 넣으세요</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>configType <span class="token operator">===</span> <span class="token string">'PRODUCTION'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 여기에 프로덕션 구성을 넣으세요</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="babel-config" tabindex="-1"><a class="header-anchor" href="#babel-config" aria-hidden="true">#</a> Babel.Config</h2>
<p>Babel이 제공하는 옵션은 @storybook/addon-webpack5-compiler-babel 애드온을 활성화한 경우에만 적용됩니다.</p>
<h2 id="옵션" tabindex="-1"><a class="header-anchor" href="#옵션" aria-hidden="true">#</a> 옵션</h2>
<p>유형: { configType?: <code v-pre>DEVELOPMENT</code> | <code v-pre>PRODUCTION</code> }</p>
<p>테이블 태그를 Markdown 형식으로 변경해주세요.</p>
</div></template>
