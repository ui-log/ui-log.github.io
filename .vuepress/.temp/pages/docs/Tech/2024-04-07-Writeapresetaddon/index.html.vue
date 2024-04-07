<template><div><p>스토리북 프리셋은 개발자가 빠르게 환경을 설정하고 특정 기능, 기능 또는 통합을 사용자 정의할 수 있도록 미리 구성된 설정이거나 구성입니다.</p>
<h2 id="프리셋-작동-방식" tabindex="-1"><a class="header-anchor" href="#프리셋-작동-방식" aria-hidden="true">#</a> 프리셋 작동 방식</h2>
<p>프리셋 애드온은 API를 통해 다양한 구성 옵션 및 플러그인을 조합하여 스토리북과 통합하고 동작 및 기능을 사용자 정의할 수 있게 합니다. 일반적으로, 프리셋은 두 개의 파일로 분리되어 있으며 각각 특정 역할을 갖습니다.</p>
<h3 id="로컬-프리셋" tabindex="-1"><a class="header-anchor" href="#로컬-프리셋" aria-hidden="true">#</a> 로컬 프리셋</h3>
<p>이 유형의 프리셋은 애드온에 대한 구성을 캡슐화하고 구성을 정리할 수 있도록 허용합니다. 빌더 지원, Babel 또는 타사 통합을 포함합니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> webpackFinal <span class="token keyword">as</span> webpack <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./webpack/webpackFinal'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> viteFinal <span class="token keyword">as</span> vite <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./vite/viteFinal'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> babelDefault <span class="token keyword">as</span> babel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./babel/babelDefault'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> webpackFinal <span class="token operator">=</span> webpack <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> viteFinal <span class="token operator">=</span> vite <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> babelDefault <span class="token operator">=</span> babel <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="루트-레벨-프리셋" tabindex="-1"><a class="header-anchor" href="#루트-레벨-프리셋" aria-hidden="true">#</a> 루트-레벨 프리셋</h3>
<p>이 유형의 프리셋은 사용자에게 직접 노출되며, 애드온을 추가적인 사용자 구성 없이 Storybook 관련 기능 (예: 매개변수)을 묶어서 미리보기 어노테이션과 UI 관련 기능 (예: 애드온)을 managerEntries API를 통해 등록하는 역할을 담당합니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> previewAnnotations <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">require</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'./dist/preview'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> managerEntries <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">require</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'./dist/manager'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">'./dist/preset'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="사전-설정-api" tabindex="-1"><a class="header-anchor" href="#사전-설정-api" aria-hidden="true">#</a> 사전 설정 API</h2>
<p>프리셋을 작성할 때, Storybook 환경과 상호작용하기 위한 일부 API에 액세스할 수 있습니다. 이 API에는 지원되는 빌더(예: Webpack, Vite), Storybook 구성 및 UI가 포함됩니다. 아래는 프리셋 애드온을 작성할 때 사용할 수 있는 사용 가능한 API 목록입니다.</p>
<h3 id="babel" tabindex="-1"><a class="header-anchor" href="#babel" aria-hidden="true">#</a> Babel</h3>
<p>Storybook의 Babel 구성을 사용자 정의하고 추가 기능을 지원하려면 babelDefault API를 사용할 수 있습니다. 사용자 프리셋보다 먼저 제공된 구성을 적용하며 babel 구성 옵션을 통해 최종 사용자가 더 맞춤화할 수 있습니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> TransformOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@babel/core'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">babelDefault</span><span class="token punctuation">(</span>config<span class="token operator">:</span> TransformOptions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>config<span class="token punctuation">,</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token operator">...</span>config<span class="token punctuation">.</span>plugins<span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token keyword">require</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'@babel/plugin-transform-react-jsx'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'preset'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="빌더" tabindex="-1"><a class="header-anchor" href="#빌더" aria-hidden="true">#</a> 빌더</h3>
<p>기본적으로 Storybook은 Webpack 및 Vite를 포함한 주요 산업 빌더를 지원합니다. 이러한 빌더 중 어느 것이든 추가 기능이 필요하면 특정 요구 사항에 따라 빌더 구성을 확장하기 위해 API를 사용할 수 있습니다.</p>
<h4 id="vite" tabindex="-1"><a class="header-anchor" href="#vite" aria-hidden="true">#</a> Vite</h4>
<p>프리셋을 만들고 Vite 지원을 포함하려면 viteFinal API를 사용하여 기본 구성을 수정하고 추가 기능을 활성화할 수 있습니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">ViteFinal</span><span class="token punctuation">(</span>config<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> options<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  config<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
    <span class="token keyword">new</span> <span class="token class-name">MyCustomPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      someOption<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> config<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> Webpack</h4>
<p>웹팩 구성을 Storybook에서 사용자 정의하려면 추가 파일 유형을 지원하거나 특정 로더를 적용하거나 플러그인을 구성하거나 필요한 다른 수정 사항을 추가할 수 있습니다. 이를 위해 webpackFinal API를 사용할 수 있습니다. 이를 호출하면 제공된 구성으로 기본 웹팩 구성이 확장됩니다. 이를 구현하는 예시는 다음과 같습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Configuration <span class="token keyword">as</span> WebpackConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'webpack'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">webpackFinal</span><span class="token punctuation">(</span>config<span class="token operator">:</span> WebpackConfig<span class="token punctuation">,</span> options<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> rules <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>module<span class="token operator">?.</span>rules <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.custom-file$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      loader<span class="token operator">:</span> <span class="token keyword">require</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'custom-loader'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  config<span class="token punctuation">.</span>module<span class="token punctuation">.</span>rules <span class="token operator">=</span> rules<span class="token punctuation">;</span>

  <span class="token keyword">return</span> config<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="managerentries" tabindex="-1"><a class="header-anchor" href="#managerentries" aria-hidden="true">#</a> ManagerEntries</h3>
<p>만약 제어할 수 없는 서드파티 애드온을 로드하는 프리셋을 작성 중이고 특정 기능이나 추가 구성에 액세스가 필요한 경우 managerEntries API를 사용할 수 있습니다. 예를 들면:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">managerEntries</span> <span class="token operator">=</span> <span class="token punctuation">(</span>entry <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>entry<span class="token punctuation">,</span> <span class="token keyword">require</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'path-to-third-party-addon'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="미리보기-주석" tabindex="-1"><a class="header-anchor" href="#미리보기-주석" aria-hidden="true">#</a> 미리보기 주석</h3>
<p>프리셋의 스토리를 렌더링하기 위해 추가적인 설정이 필요한 경우, 데코레이터나 파라미터와 같은 것을 사용하려면 previewAnnotations API를 사용할 수 있습니다. 모든 스토리에 데코레이터를 적용하려면 데코레이터를 포함하는 미리보기 파일을 만들고 다음과 같이 프리셋에서 사용할 수 있도록 만드세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Renderer<span class="token punctuation">,</span> ProjectAnnotations <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/types'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">PARAM_KEY</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./constants'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CustomDecorator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./decorators'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> ProjectAnnotations<span class="token operator">&lt;</span>Renderer<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  decorators<span class="token operator">:</span> <span class="token punctuation">[</span>CustomDecorator<span class="token punctuation">]</span><span class="token punctuation">,</span>
  globals<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token constant">PARAM_KEY</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="고급-구성" tabindex="-1"><a class="header-anchor" href="#고급-구성" aria-hidden="true">#</a> 고급 구성</h2>
<p>프리셋 API는 유연성을 갖추어 Storybook을 필요에 맞게 사용자 정의할 수 있도록 설계되었습니다. 고급 사용 사례에 대한 프리셋을 사용하면 이를 게시하지 않고도 Storybook을 사용자 정의할 수 있습니다. 이런 경우에는 비공개 프리셋에 의존할 수 있습니다. 비공개 프리셋에는 개발 목적을 위한 구성 옵션이 포함되어 있으며 최종 사용자가 사용하는 것이 아닙니다. .storybook/main.js|ts 파일은 Storybook의 동작과 기능을 수정할 수 있는 비공개 프리셋의 예입니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크로 your-framework을(를) 자신의 프레임워크(e.g., react-webpack5, vue3-vite)로 바꿉니다.</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">viteFinal</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>config<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 여기에서 구성 업데이트</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">webpackFinal</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>config<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 웹팩 구성 변경</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">babel</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>config<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="애드온" tabindex="-1"><a class="header-anchor" href="#애드온" aria-hidden="true">#</a> 애드온</h3>
<p>애드온 사용자를 위해 managerEntries API는 너무 기술적이어서 사용하기 어려울 수 있습니다. Storybook에 애드온을 쉽게 추가하도록 하기 위해 preset API는 애드온 API를 제공합니다. 이 API는 애드온 이름의 배열을 수락하고 자동으로 해당 애드온을 로드해 줍니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크에 맞춰 your-framework를 해당 프레임워크로 바꿉니다 (예: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  addons<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 다른 Storybook 애드온</span>
    <span class="token string">'@storybook/addon-a11y'</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>값의 배열은 매니저에 포함되어야 하는 추가 프리셋 및 애드온에 대한 참조를 지원합니다. Storybook는 제공된 값이 프리셋인지 애드온인지 자동으로 감지하고 해당 값에 따라 로드합니다.</p>
<h3 id="entries" tabindex="-1"><a class="header-anchor" href="#entries" aria-hidden="true">#</a> Entries</h3>
<p>Entries는 미리보기를 위한 진입점을 등록하는 장소입니다. 이 기능을 활용하면 자동으로 모든 *.stories.js 파일을 Storybook에 로드하는 configure-storybook 프리셋을 생성할 수 있어서 사용자가 같은 구성을 반복해서 복사-붙여넣기할 필요가 없습니다.</p>
<h3 id="ui-구성" tabindex="-1"><a class="header-anchor" href="#ui-구성" aria-hidden="true">#</a> UI 구성</h3>
<p>Storybook 프리셋 API는 미리보기의 헤드와 본문 HTML 요소에 액세스할 수 있는 UI 구성에 대한 기능도 제공합니다. previewHead 및 previewBody API에 의해 구성된 미리보기 설정을 허용합니다. 이 두 가지 방법은 문자열을 받아들이고 수정된 버전을 리턴하여 제공된 콘텐츠를 HTML 요소에 삽입합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크(예: react-webpack5, vue3-vite)에 맞게 your-framework를 교체하세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">previewHead</span><span class="token operator">:</span> <span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>head<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
    &lt;style>
      html, body {
        background: #827979;
      }
    &lt;/style>
 </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또한, 매니저를 사용자 정의해야 하는 경우(예: Storybook의 검색, 탐색, 도구 모음, 애드온이 렌더링되는 위치), managerHead를 사용하여 UI를 수정할 수 있습니다. 이는 manager-head.html 파일을 수정하는 방식과 유사합니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 framework에 맞게 your-framework을(예: react-webpack5, vue3-vite) 교체합니다.</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">managerHead</span><span class="token operator">:</span> <span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>head<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
    &lt;link rel="icon" type="image/png" href="/logo192.png" sizes="192x192" />
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그러나 만일 필요하다면 Storybook이 UI를 렌더링하는 데 사용하는 템플릿도 사용자 정의할 수 있습니다. 이를 위해 previewMainTemplate API를 사용하여 ejs 파일로 생성된 사용자 정의 템플릿에 대한 참조를 제공할 수 있습니다. 이를 수행하는 방법에 대한 예시로, 웹팩 5 빌더에서 사용되는 템플릿을 참조하세요.</p>
<h2 id="문제-해결" tabindex="-1"><a class="header-anchor" href="#문제-해결" aria-hidden="true">#</a> 문제 해결</h2>
<h3 id="스토리북이-내-프리셋-파일을-로드하지-않아요" tabindex="-1"><a class="header-anchor" href="#스토리북이-내-프리셋-파일을-로드하지-않아요" aria-hidden="true">#</a> 스토리북이 내 프리셋 파일을 로드하지 않아요</h3>
<p>스토리북은 UI를 빌드하기 위해 웹팩 대신 esbuild를 사용하기 때문에, CSS나 이미지 외에 다른 파일을 로드하거나 매니저를 구성하는 데 managerWebpack API에 의존하는 프리셋은 더 이상 작동하지 않습니다. 이를 프리셋에서 제거하고 추가 파일을 JavaScript로 변환하는 방식으로 설정을 조정하는 것을 권장합니다.</p>
<p>스토리북 애드온 생태계에 대해 자세히 알아보세요.</p>
<ul>
<li>다른 유형의 애드온을 위한 애드온의 유형</li>
<li>애드온 개발의 기본을 위한 애드온 작성</li>
<li>프리셋 개발을 위한 프리셋</li>
<li>요구사항 및 사용 가능한 레시피에 대한 통합 카탈로그</li>
<li>사용 가능한 API에 대해 학습할 수 있는 API 레퍼런스</li>
</ul>
</div></template>
