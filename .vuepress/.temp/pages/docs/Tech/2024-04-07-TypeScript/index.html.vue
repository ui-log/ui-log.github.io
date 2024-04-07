<template><div><p>Storybook은 통합된 TypeScript 환경을 제공합니다. API, 애드온 및 스토리용 내장 타입을 포함한 제로 구성 설정을 제공합니다.</p>
<h2 id="typescript로-storybook-구성하기" tabindex="-1"><a class="header-anchor" href="#typescript로-storybook-구성하기" aria-hidden="true">#</a> TypeScript로 Storybook 구성하기</h2>
<p>Storybook의 구성 파일(main.ts)은 TypeScript로 작성된 ESM 모듈로 정의되어 있습니다. 기존 프레임워크를 지원하면서 엄격한 타입 체크 및 편집기에서의 자동 완성을 가능하게 하는 기본 구성을 제공합니다. 아래는 간략한 구성 파일입니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크로 your-framework을 대체하세요 (예: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 필수 사항</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 기본 구성 API 참조에서 자세한 내용 및 추가 속성을 확인할 수 있습니다.</p>
<h3 id="기본-구성-확장하기" tabindex="-1"><a class="header-anchor" href="#기본-구성-확장하기" aria-hidden="true">#</a> 기본 구성 확장하기</h3>
<p>Storybook은 기본적으로 다양한 써드파티 라이브러리와 함께 작동하도록 설계되어 있어 컴포넌트의 메타데이터(예: props)에 안전하게 액세스하고 문서화할 수 있게 해줍니다. 추가 구성 없이 컴포넌트의 메타데이터를 추론하고 성능 및 유형 안정성을 향상시키기 위해 타입을 자동으로 생성하는 빠르고 매우 유연한 react-docgen 파서를 사용합니다. 특정 사용 사례 시나리오에 대한 기본 구성을 사용자 정의해야 하는 경우 Storybook 구성 파일을 조정하고 필요한 옵션을 제공할 수 있습니다. 아래에 사용 가능한 옵션과 사용 방법 예시가 나와 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크로 교체하세요 (예: react-webpack5, react-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  typescript<span class="token operator">:</span> <span class="token punctuation">{</span>
    check<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    checkOptions<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    reactDocgen<span class="token operator">:</span> <span class="token string">'react-docgen'</span><span class="token punctuation">,</span>
    reactDocgenTypescriptOptions<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// reactDocgen이 'react-docgen-typescript'로 설정된 경우에만 사용 가능</span>
    skipCompiler<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typescript으로-이야기-쓰기" tabindex="-1"><a class="header-anchor" href="#typescript으로-이야기-쓰기" aria-hidden="true">#</a> TypeScript으로 이야기 쓰기</h2>
<p>Storybook은 추가 구성 없이 TypeScript를 지원하여 이 언어를 사용하여 이야기를 쓸 수 있도록 합니다. 개선된 타입 안전성과 코드 완성을 위해 이 형식을 사용할 수 있습니다. 예를 들어 Button 컴포넌트를 테스트하는 경우, 다음과 같이 스토리 파일에서 작업할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// your-framework를 귀하의 프레임워크 이름으로 대체</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token comment">//👇 args가 컴포넌트 속성과 일치하지 않으면 타입 오류 발생</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Primary<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  args<span class="token operator">:</span> <span class="token punctuation">{</span>
    primary<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 예시는 TypeScript의 기능을 사용하여 내보낸 제네릭 유형(Meta 및 StoryObj)을 조합함으로써 컴포넌트의 메타데이터 및 입력(예: props) 유형을 Storybook에게 어떻게 추론해야 하는지 알려줍니다. 이를 통해 개발자 경험을 크게 향상시켜 IDE가 Storybook에서 주입하는 속성을 보여줄 수 있습니다.</p>
<h3 id="typescript-4-9-지원" tabindex="-1"><a class="header-anchor" href="#typescript-4-9-지원" aria-hidden="true">#</a> TypeScript 4.9 지원</h3>
<p>TypeScript 4.9+를 사용하는 프로젝트에 작업 중이라고 가정하면, 새로운 <code v-pre>satisfies</code> 연산자를 사용하여 컴포넌트 스토리의 유형 검사를 보다 엄격하게 할 수 있습니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 프레임워크 이름으로 바꿔주세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/&lt;your-framework>'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span> satisfies Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span><span class="token punctuation">;</span> <span class="token comment">// 👈 더 엄격한 유형 검사를 위해 `satisfies` 연산자 사용.</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 스토리를 정의하거나 기존 스토리를 업데이트할 때 필수 인수가 빠진 것을 자동으로 알림 받을 수 있습니다. 그러나 컴포넌트 수준에서 <code v-pre>satisfies</code> 연산자를 사용하는 것에 제한이 없습니다. 필요할 경우 스토리 수준에서도 사용할 수 있습니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// your-framework을 사용하는 프레임워크의 이름으로 바꿔주세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span> satisfies Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> meta<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Example <span class="token operator">=</span> <span class="token punctuation">{</span>
  args<span class="token operator">:</span> <span class="token punctuation">{</span>
    primary<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'Button'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> satisfies Story<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="문제-해결" tabindex="-1"><a class="header-anchor" href="#문제-해결" aria-hidden="true">#</a> 문제 해결</h2>
<h3 id="제대로-작동하지-않는-satisfies-연산자" tabindex="-1"><a class="header-anchor" href="#제대로-작동하지-않는-satisfies-연산자" aria-hidden="true">#</a> 제대로 작동하지 않는 satisfies 연산자</h3>
<p>기본적으로 Storybook은 TypeScript 버전 4.9 이상을 사용하는 대부분의 프레임워크에 대해 satisfies 연산자를 지원합니다. 그러나 Angular 및 Web Components 프레임워크의 제약으로 인해, 이 연산자를 추가 유형 안정성을 가져오기 위해 적용하는 동안 문제가 발생할 수 있습니다. 이는 현재 두 프레임워크가 구현된 방식 때문에 주로 발생하며, Storybook이 컴포넌트 속성이 필요한지 여부를 결정하기가 거의 불가능합니다. 이 문제를 만나면 GitHub 토론 페이지에서 지원 요청을 올려주시기 바랍니다.```</p>
<h3 id="storybook은-외부-패키지에-필요한-유형을-생성하지-않습니다" tabindex="-1"><a class="header-anchor" href="#storybook은-외부-패키지에-필요한-유형을-생성하지-않습니다" aria-hidden="true">#</a> Storybook은 외부 패키지에 필요한 유형을 생성하지 않습니다</h3>
<p>만약 귀하의 프로젝트가 제3자 라이브러리에 의존하고 예상된 유형이 생성되지 않아 구성 요소를 정확하게 문서화할 수 없는 경우, Storybook 구성 파일에서 reactDocgen 옵션을 조정하여 react-docgen-typescript를 사용하고 필요한 옵션을 포함할 수 있습니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크로 your-framework를 대체하세요. (예: react-webpack5, react-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  typescript<span class="token operator">:</span> <span class="token punctuation">{</span>
    reactDocgen<span class="token operator">:</span> <span class="token string">'react-docgen-typescript'</span><span class="token punctuation">,</span>
    reactDocgenTypescriptOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      compilerOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
        allowSyntheticDefaultImports<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        esModuleInterop<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// @mui 패키지를 제외한 node_modules의 제3자 속성을 필터링합니다.</span>
      <span class="token function-variable function">propFilter</span><span class="token operator">:</span> <span class="token punctuation">(</span>prop<span class="token punctuation">)</span> <span class="token operator">=></span>
        prop<span class="token punctuation">.</span>parent <span class="token operator">?</span> <span class="token operator">!</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules\/(?!@mui)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>prop<span class="token punctuation">.</span>parent<span class="token punctuation">.</span>fileName<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="내-구성-요소에-대한-유형이-생성되지-않습니다" tabindex="-1"><a class="header-anchor" href="#내-구성-요소에-대한-유형이-생성되지-않습니다" aria-hidden="true">#</a> 내 구성 요소에 대한 유형이 생성되지 않습니다</h3>
<p>만약 React 프로젝트를 다루고 있다면, react-docgen 라이브러리를 사용하여 컴포넌트에 대한 타입 추론이 자동으로 활성화되어 빌드 시간 및 타입 안전성이 향상됩니다. 그러나 때로는 일부 옵션이 예상대로 작동하지 않을 수 있는 상황에 직면할 수 있습니다 (예: Enums, React의 forwardRef 등). 이는 주로 react-docgen 패키지의 구현 방식 때문에 발생하며, 이로 인해 Storybook이 컴포넌트의 메타데이터를 추론하고 자동으로 타입을 생성하기 어려워집니다. 이를 해결하기 위해서는 Storybook 구성 파일에서 typescript 구성 옵션을 업데이트하여 react-docgen-typescript을 사용하면 됩니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크에 따라 your-framework를 교체하세요 (예: react-webpack5, react-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  typescript<span class="token operator">:</span> <span class="token punctuation">{</span>
    reactDocgen<span class="token operator">:</span> <span class="token string">'react-docgen-typescript'</span><span class="token punctuation">,</span>
    <span class="token comment">// 필요한 경우 옵션을 제공하세요.</span>
    <span class="token comment">// 자세한 내용은 https://storybook.js.org/docs/configure/typescript 에서 확인할 수 있습니다.</span>
    reactDocgenTypescriptOptions<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여전히 문제가 발생한다면, 기본 커뮤니케이션 채널 (예: GitHub discussions)을 통해 커뮤니티에 문의하는 것을 권장합니다.</p>
</div></template>
