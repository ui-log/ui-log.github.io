<template><div><p>(필수)</p>
<p>상위: main.js|ts 구성</p>
<p>유형: FrameworkName | { name: FrameworkName; options?: FrameworkOptions }</p>
<p>일련의 프레임워크별 설정에 기반하여 Storybook을 구성합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크로 react-vite를 대체하세요 (예: react-webpack5)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react-vite'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'@storybook/react-vite'</span><span class="token punctuation">,</span>
    options<span class="token operator">:</span> <span class="token punctuation">{</span>
      legacyRootApi<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h2>
<p>유형: 문자열</p>
<p>사용 가능한 프레임워크 및 해당 옵션에 대해서는 해당 문서를 참조하세요.</p>
<h2 id="옵션" tabindex="-1"><a class="header-anchor" href="#옵션" aria-hidden="true">#</a> 옵션</h2>
<p>타입: 레코드<code v-pre>문자열, 모든</code></p>
<p>많은 옵션들이 특정 프레임워크에 특화되어 있지만, 일부 옵션은 일부 프레임워크에서 공유되는 것이 있습니다. 예를 들어, Storybook 빌더를 구성하는 옵션과 같은 경우입니다.</p>
<h3 id="options-builder" tabindex="-1"><a class="header-anchor" href="#options-builder" aria-hidden="true">#</a> options.builder</h3>
<p>표: 레코드<code v-pre>문자열, 아무거나</code></p>
<p>Storybook의 빌더인 Vite 또는 Webpack을 구성합니다.</p>
</div></template>
