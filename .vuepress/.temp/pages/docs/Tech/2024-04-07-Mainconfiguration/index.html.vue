<template><div><p>메인 구성은 스토리북 프로젝트의 동작을 정의합니다. 스토리의 위치, 사용할 애드온, 기능 플래그 및 기타 프로젝트별 설정을 포함합니다.</p>
<h2 id="main-js-또는-main-ts" tabindex="-1"><a class="header-anchor" href="#main-js-또는-main-ts" aria-hidden="true">#</a> main.js 또는 main.ts</h2>
<p>이 구성은 .storybook/main.js|ts에서 정의되며 프로젝트의 루트 위치를 기준으로 합니다.</p>
<p>전형적인 스토리북 구성 파일은 다음과 같습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용하는 프레임워크로 your-framework을(를) 교체하십시오 (예: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 필수</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 선택 사항</span>
  addons<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@storybook/addon-essentials'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  docs<span class="token operator">:</span> <span class="token punctuation">{</span>
    autodocs<span class="token operator">:</span> <span class="token string">'tag'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  staticDirs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../public'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h2>
<p>Storybook을 구성하는 데 사용되는 객체로, 다음 속성을 포함합니다:</p>
<ul>
<li>framework (필수)</li>
<li>stories (필수)</li>
<li>addons</li>
<li>babel</li>
<li>babelDefault</li>
<li>build</li>
<li>core</li>
<li>docs</li>
<li>env</li>
<li>features</li>
<li>indexers (⚠️ 실험적)</li>
<li>logLevel</li>
<li>managerHead</li>
<li>previewAnnotations</li>
<li>previewBody</li>
<li>previewHead</li>
<li>refs</li>
<li>staticDirs</li>
<li>swc</li>
<li>typescript</li>
<li>viteFinal</li>
<li>webpackFinal</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div></div></template>
