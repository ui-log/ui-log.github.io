<template><div><p>Storybook의 주요 장점 중 하나는 Storybook의 UI 및 동작을 확장하는 애드온들입니다. Storybook은 기본적으로 &quot;필수&quot; 애드온 세트를 함께 제공하여 초기 사용자 경험을 향상시킵니다. Storybook 코어 팀에 의해 개발된 &quot;공식&quot; 애드온뿐만 아니라 많은 서드 파티 애드온이 있습니다.</p>
<ul>
<li>Actions</li>
<li>Backgrounds</li>
<li>Controls</li>
<li>Docs</li>
<li>Highlight</li>
<li>Measure &amp; outline</li>
<li>Toolbars &amp; globals</li>
<li>Viewport</li>
</ul>
<h3 id="설치" tabindex="-1"><a class="header-anchor" href="#설치" aria-hidden="true">#</a> 설치</h3>
<p>프로젝트에 Storybook을 포함시키기 위해 npx storybook@latest init을 실행했다면, 최신 버전의 Essentials 애드온(@storybook/addon-essentials)이 이미 설치되어 구성되어 있습니다. 그러므로 나머지 섹션을 건너뛰고 진행하셔도 됩니다.</p>
<p>그러나 기존 Storybook 인스턴스에 에셜셜 애드온을 수동으로 설치하려는 경우, 터미널에서 다음 명령을 실행하여 설치할 수 있어요:</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npm install @storybook/addon-essentials --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Storybook 구성 (<code v-pre>.storybook/main.js|ts</code>)을 업데이트하여 에셜셜 애드온을 포함시켜 주세요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크로 (예: react-webpack5, vue3-vite) 대체해주세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  addons<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@storybook/addon-essentials'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 👈 애드온 essentials 등록</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="설정" tabindex="-1"><a class="header-anchor" href="#설정" aria-hidden="true">#</a> 설정</h3>
<p>Essentials는 &quot;제로 설정&quot;입니다. 권장 구성이 기본적으로 제공됩니다.</p>
<p>개별 Essentials 애드온을 재구성해야 하는 경우, 설치 지침을 따라 수동으로 설치하고 선택한 방법에 따라 Storybook 구성 파일(i.e., .storybook/main.js|ts)에 등록하고 필요에 맞게 구성을 조정하세요. 예를 들면:</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npm install @storybook/addon-actions --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>아래는 모든 애드온에 대한 사용 가능한 옵션을 갖춘 구성 및 표로 줄인 설정 내용입니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크로 your-framework를 대체하세요 (예: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  addons<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'@storybook/addon-links'</span><span class="token punctuation">,</span>
    <span class="token string">'@storybook/addon-actions'</span><span class="token punctuation">,</span>
    <span class="token string">'@storybook/addon-viewport'</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">'@storybook/addon-docs'</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">{</span>
        csfPluginOptions<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        mdxPluginOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
          mdxCompileOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
            remarkPlugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">'@storybook/addon-controls'</span><span class="token punctuation">,</span>
    <span class="token string">'@storybook/addon-backgrounds'</span><span class="token punctuation">,</span>
    <span class="token string">'@storybook/addon-toolbars'</span><span class="token punctuation">,</span>
    <span class="token string">'@storybook/addon-measure'</span><span class="token punctuation">,</span>
    <span class="token string">'@storybook/addon-outline'</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook를 시작하면 사용자 정의 구성이 기본 구성을 덮어쓸 것입니다.</p>
<h3 id="애드온-비활성화" tabindex="-1"><a class="header-anchor" href="#애드온-비활성화" aria-hidden="true">#</a> 애드온 비활성화</h3>
<p>근본 애드온 중 일부를 비활성화해야 한다면 .storybook/main.js 파일을 수정하여 수행할 수 있습니다.</p>
<p>예를 들어, 배경 애드온을 비활성화하려면 Storybook 구성에 다음 변경을 적용하면 됩니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용하는 프레임워크에 맞게 your-framework을(예: react-webpack5, vue3-vite) 대체하세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  addons<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">'@storybook/addon-essentials'</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">{</span>
        backgrounds<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 👈 배경 애드온 비활성화</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
