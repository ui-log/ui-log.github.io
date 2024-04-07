<template><div><p>Storybook Vite 빌더는 빠른 ESM 번들러 인 Vite로 컴포넌트 및 스토리를 번들링합니다.</p>
<ul>
<li>Vite로 빌드된 애플리케이션의 경우: Storybook에서 기존 구성을 재사용할 수 있습니다.</li>
<li>Webpack으로 빌드된 애플리케이션의 경우: 시작 및 새로 고침 시간이 빨라지지만, 컴포넌트 실행 환경이 애플리케이션과 다르다는 단점이 있습니다.</li>
</ul>
<h2 id="설정" tabindex="-1"><a class="header-anchor" href="#설정" aria-hidden="true">#</a> 설정</h2>
<p>npx storybook@latest init 명령을 사용하여 Vite 애플리케이션에 Storybook을 포함시켰다면, 빌더가 이미 설치되어 구성되어 있습니다. 수동으로 선택할 수도 있습니다.</p>
<p>다음 명령어를 실행하여 빌더를 설치하세요.</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npm install @storybook/builder-vite --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Storybook 구성을 업데이트하세요 (.storybook/main.js|ts) 빌더를 포함시키기 위해.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  addons<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@storybook/addon-links'</span><span class="token punctuation">,</span> <span class="token string">'@storybook/addon-essentials'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  core<span class="token operator">:</span> <span class="token punctuation">{</span>
    builder<span class="token operator">:</span> <span class="token string">'@storybook/builder-vite'</span><span class="token punctuation">,</span> <span class="token comment">// 👈 여기서 빌더가 활성화됨.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="구성" tabindex="-1"><a class="header-anchor" href="#구성" aria-hidden="true">#</a> 구성</h2>
<p>기본적으로 Storybook의 Vite 빌더에는 지원되는 프레임워크를 위한 구성 기본값이 포함되어 있습니다. 이 값은 기존 구성 파일과 병합됩니다. Vite 빌더를 사용할 때 최상의 경험을 위해서는 Vite의 구성 파일 (즉, vite.config.js|ts) 내에서 구성을 직접 적용하는 것이 좋습니다.</p>
<p>Storybook이 로드될 때 구성이 자동으로 병합됩니다. 그러나 서로 다른 프로젝트가 특정 요구 사항을 가질 수 있기 때문에 Storybook을 위한 사용자 정의 구성을 제공해야 할 수도 있습니다. 이런 경우에는 구성 파일 (.storybook/main.js|ts)을 수정하고 다음과 같이 viteFinal 구성 함수를 추가할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  addons<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@storybook/addon-links'</span><span class="token punctuation">,</span> <span class="token string">'@storybook/addon-essentials'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  core<span class="token operator">:</span> <span class="token punctuation">{</span>
    builder<span class="token operator">:</span> <span class="token string">'@storybook/builder-vite'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token function">viteFinal</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 기본 구성에 사용자 정의 구성 병합</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> mergeConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'vite'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token function">mergeConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token comment">// 최적화 전 사전 종속성 추가</span>
      optimizeDeps<span class="token operator">:</span> <span class="token punctuation">{</span>
        include<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'storybook-dark-mode'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>비동기 함수 viteFinal은 기본 빌더 구성을 포함한 구성 객체를 받고 업데이트된 구성을 반환합니다.</p>
<h3 id="환경-기반-구성" tabindex="-1"><a class="header-anchor" href="#환경-기반-구성" aria-hidden="true">#</a> 환경 기반 구성</h3>
<p>만약 빌더 구성을 사용자 정의하고 환경에 따라 특정 옵션을 적용해야 한다면, viteFinal 함수를 확장해 아래와 같이 적용할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  core<span class="token operator">:</span> <span class="token punctuation">{</span>
    builder<span class="token operator">:</span> <span class="token string">'@storybook/builder-vite'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token function">viteFinal</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> <span class="token punctuation">{</span> configType <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> mergeConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'vite'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>configType <span class="token operator">===</span> <span class="token string">'DEVELOPMENT'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 여기에 개발 환경 구성을 추가하세요</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>configType <span class="token operator">===</span> <span class="token string">'PRODUCTION'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 여기에 프로덕션 환경 구성을 추가하세요</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">mergeConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token comment">// 여기에 환경별 구성을 추가하세요</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="기본-구성-덮어쓰기" tabindex="-1"><a class="header-anchor" href="#기본-구성-덮어쓰기" aria-hidden="true">#</a> 기본 구성 덮어쓰기</h3>
<p>기본적으로 Storybook의 Vite 빌더는 Storybook 프로젝트의 루트 디렉토리에서 Vite 구성 파일을 검색합니다. 그러나 다른 위치에서 구성 파일을 찾도록 사용자 정의할 수 있습니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  core<span class="token operator">:</span> <span class="token punctuation">{</span>
    builder<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">'@storybook/builder-vite'</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">{</span>
        viteConfigPath<span class="token operator">:</span> <span class="token string">'../customVite.config.js'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h3>
<p>만약 필요하다면 TypeScript를 사용하여 Storybook의 Vite 빌더를 구성할 수도 있어요. .storybook/main.js 파일을 .storybook/main.ts로 이름을 변경하고 다음과 같이 조정해주세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크에 맞게 (예: react-vite, vue3-vite) your-framework를 해당 프레임워크로 대체하세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token function">viteFinal</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 여기에 구성을 추가하세요</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="문제-해결" tabindex="-1"><a class="header-anchor" href="#문제-해결" aria-hidden="true">#</a> 문제 해결</h2>
<h3 id="작업-디렉토리-감지-안-될-때" tabindex="-1"><a class="header-anchor" href="#작업-디렉토리-감지-안-될-때" aria-hidden="true">#</a> 작업 디렉토리 감지 안 될 때</h3>
<p>기본 설정으로 Vite 빌더는 보안을 강화하기 위해 Vite의 server.fs.strict 옵션을 활성화하며, 프로젝트 루트를 Storybook의 구성 디렉토리로 정의합니다. 이를 재정의해야 하는 경우, viteFinal 함수를 사용하여 조정할 수 있습니다.</p>
<h3 id="argtypes는-자동으로-생성되지-않습니다" tabindex="-1"><a class="header-anchor" href="#argtypes는-자동으로-생성되지-않습니다" aria-hidden="true">#</a> ArgTypes는 자동으로 생성되지 않습니다</h3>
<p>현재, 자동 argType 추론은 React, Vue 3 및 Svelte (JSDocs만)에만 사용할 수 있습니다. React의 경우, Vite 빌더는 React 컴포넌트를 구문 분석하기 위한 빠른 대안인 react-docgen-typescript 대신 react-docgen을 기본으로 사용합니다. 문제가 발생하면 Storybook 구성 파일을 다음과 같이 업데이트하여 react-docgen-typescript로 되돌릴 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  addons<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@storybook/addon-links'</span><span class="token punctuation">,</span> <span class="token string">'@storybook/addon-essentials'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  core<span class="token operator">:</span> <span class="token punctuation">{</span>
    builder<span class="token operator">:</span> <span class="token string">'@storybook/builder-vite'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  typescript<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// `react-docgen-typescript` 파서를 활성화합니다.</span>
    <span class="token comment">// 이 옵션에 대한 자세한 내용은 https://storybook.js.org/docs/api/main-config-typescript를 참조하세요.</span>
    reactDocgen<span class="token operator">:</span> <span class="token string">'react-docgen-typescript'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="상호-작용-테스트가-예상대로-작동하지-않는-문제" tabindex="-1"><a class="header-anchor" href="#상호-작용-테스트가-예상대로-작동하지-않는-문제" aria-hidden="true">#</a> 상호 작용 테스트가 예상대로 작동하지 않는 문제</h3>
<p>만약 CRA와 같은 Webpack 기반 프로젝트에서 Vite로 마이그레이션하는 중이고, @storybook/addon-interactions 애드온을 사용하여 상호 작용 테스트를 활성화한 경우 window object가 정의되지 않았다는 알림으로 테스트가 실패할 수 있는 상황에 직면할 수 있습니다. 이 문제를 해결하기 위해 Storybook 구성 디렉토리에 preview-head.html 파일을 만들고 다음 내용을 포함시킬 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
  window<span class="token punctuation">.</span>global <span class="token operator">=</span> window<span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>더 많은 정보를 알고 싶다면 빌더를 살펴보세요.</p>
<ul>
<li>Vite 빌더로 번들링할 때 Vite 사용</li>
<li>Webpack 빌더로 번들링할 때 Webpack 사용</li>
<li>Storybook 빌더 빌드를 위한 빌더 API</li>
</ul>
</div></template>
