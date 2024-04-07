<template><div><p>부모: main.js|ts 구성</p>
<p>유형: (헤드: 문자열) =` 문자열</p>
<p>Storybook의 관리자 <code v-pre>head</code>를 프로그래밍적으로 조정합니다. 예를 들어 사용자 정의 글꼴을 로드하거나 스크립트를 추가할 수 있습니다. 대부분의 경우 애드온 작성자에 의해 가장 자주 사용됩니다.</p>
<p>예를 들어, 환경에 따라 스크립트나 스타일을 조건부로 추가할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// "your-framework"을 사용 중인 프레임워크로 교체하세요 (예: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">managerHead</span><span class="token operator">:</span> <span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>head<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
    &lt;link rel="preload" href="/fonts/my-custom-manager-font.woff2" />
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
