<template><div><p>Storybook은 수백 개의 재사용 가능한 애드온이 NPM 모듈로 패키지화된 상태입니다. Storybook을 확장하는 방법을 살펴보기 위해 애드온을 설치하고 등록하는 방법을 알아봅시다.</p>
<h2 id="자동-설치" tabindex="-1"><a class="header-anchor" href="#자동-설치" aria-hidden="true">#</a> 자동 설치</h2>
<p>Storybook에는 애드온 설정을 자동화하는 storybook@latest add 명령이 포함되어 있습니다. 이 명령을 사용하여 몇 가지 커뮤니티 주도의 애드온을 추가할 수 있지만, 프리셋 애드온은 제외됩니다. 애드온의 설치 프로세스에 대해 더 자세히 알아보기 위해 애드온 문서를 읽을 것을 권장합니다.</p>
<p>선호하는 패키지 매니저를 사용하여 storybook@latest add 명령을 실행하면 CLI가 Storybook 구성을 업데이트하여 애드온을 포함하고 필요한 종속성을 설치합니다.</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npx storybook@latest add @storybook/addon-a11y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="수동-설치" tabindex="-1"><a class="header-anchor" href="#수동-설치" aria-hidden="true">#</a> 수동 설치</h3>
<p>Storybook 애드온은 항상 .storybook/main.js|ts 파일의 addons 구성 배열을 통해 추가됩니다. 아래 예제는 Storybook에 수동으로 접근성 애드온을 추가하는 방법을 보여줍니다.</p>
<p>선호하는 패키지 매니저와 함께 다음 명령을 실행하여 애드온을 설치하세요.</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npm install @storybook/addon-a11y --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>다음으로, .storybook/main.js|ts을 다음과 같이 업데이트하십시오:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크 (예: react-webpack5, vue3-vite)로 your-framework을 대체하십시오</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  addons<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 다른 Storybook 애드온</span>
    <span class="token string">'@storybook/addon-a11y'</span><span class="token punctuation">,</span> <span class="token comment">//👈 여기에 a11y 애드온 추가</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook을 실행하면 접근성 테스트 애드온이 활성화됩니다.</p>
<img src="@source/docs/Tech/2024-04-07-Installaddons/img/Installaddons_0.png" />
<h3 id="애드온-제거" tabindex="-1"><a class="header-anchor" href="#애드온-제거" aria-hidden="true">#</a> 애드온 제거</h3>
<p>Storybook에서 애드온을 제거하려면 수동으로 제거하고 구성 파일(즉, .storybook/main.js|ts)에서 해당 애드온을 제거하거나 CLI를 통해 자동으로 제거할 수 있습니다. 예를 들어, CLI를 사용하여 Storybook에서 접근성 애드온을 제거하려면 다음 명령을 실행하세요:</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npx storybook@latest remove @storybook/addon-a11y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
