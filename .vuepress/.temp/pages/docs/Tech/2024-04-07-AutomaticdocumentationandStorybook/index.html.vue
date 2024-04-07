<template><div><p>Storybook Autodocs는 UI 컴포넌트에 대한 포괄적인 문서를 빠르게 생성하는 데 도움이 되는 강력한 도구입니다. Autodocs를 활용하면 이야기를 생생한 문서로 변환하여 MDX와 Doc Blocks를 추가로 확장하여 컴포넌트 기능에 대한 명확하고 간결한 이해를 제공할 수 있습니다.</p>
<h2 id="자동화된-문서-설정" tabindex="-1"><a class="header-anchor" href="#자동화된-문서-설정" aria-hidden="true">#</a> 자동화된 문서 설정</h2>
<p>이야기에 대한 자동 생성 문서를 활성화하려면 이야기의 기본 내보내기에 태그 구성 속성을 추가해야 합니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
  <span class="token comment">//👇 컴포넌트 이야기에 대한 자동 생성 문서 활성화</span>
  tags<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'autodocs'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  argTypes<span class="token operator">:</span> <span class="token punctuation">{</span>
    backgroundColor<span class="token operator">:</span> <span class="token punctuation">{</span> control<span class="token operator">:</span> <span class="token string">'color'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Primary<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  args<span class="token operator">:</span> <span class="token punctuation">{</span>
    primary<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'Button'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Secondary<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  args<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>Primary<span class="token punctuation">.</span>args<span class="token punctuation">,</span>
    primary<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-04-07-AutomaticdocumentationandStorybook/img/AutomaticdocumentationandStorybook_0.png" />
<p>이야기가로드된 후, Storybook은 관련 메타데이터(예: args, argTypes, parameters)를 추론하고 이 정보로 구성 요소 트리의 루트 수준에 문서화 페이지를 자동으로 생성합니다.</p>
<h3 id="구성" tabindex="-1"><a class="header-anchor" href="#구성" aria-hidden="true">#</a> 구성</h3>
<p>기본적으로 Storybook은 문서화 지원을 위한 구성이 없으며 태그 구성 속성을 통해 활성화된 각 이야기를 위한 문서화 페이지를 자동으로 설정합니다. 그러나 Storybook 구성 파일(.storybook/main.js|ts|cjs)을 확장하여 문서 작성 방식을 제어하는 추가 옵션을 제공할 수 있습니다. 아래에 사용할 수 있는 옵션과 사용 방법 예시가 나와 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 원하는 프레임워크 (예: react-webpack5, vue3-vite)로 대체하세요.</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  addons<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@storybook/addon-essentials'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  docs<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//👇 아래 표를 참조하여 지원되는 옵션 목록을 확인하세요</span>
    autodocs<span class="token operator">:</span> <span class="token string">'tag'</span><span class="token punctuation">,</span>
    defaultName<span class="token operator">:</span> <span class="token string">'Documentation'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="사용자-정의-템플릿-작성" tabindex="-1"><a class="header-anchor" href="#사용자-정의-템플릿-작성" aria-hidden="true">#</a> 사용자 정의 템플릿 작성</h3>
<p>Storybook에서 사용하는 기본 문서 템플릿을 변경하려면 UI 구성 파일(.storybook/preview.js|ts)을 확장하고 docs 매개변수를 도입하세요. 이 매개변수는 리액트 컴포넌트를 반환하는 페이지 함수를 허용하며, 이를 사용하여 필요한 템플릿을 생성할 수 있습니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 원하는 프레임워크 (예: react, vue3)로 대체하세요.</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Title<span class="token punctuation">,</span> Subtitle<span class="token punctuation">,</span> Description<span class="token punctuation">,</span> Primary<span class="token punctuation">,</span> Controls<span class="token punctuation">,</span> Stories <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    controls<span class="token operator">:</span> <span class="token punctuation">{</span>
      matchers<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(background|color)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        date<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Date$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    docs<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">page</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Title <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Subtitle <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Description <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Primary <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Controls <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Stories <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>코드 스니펫을 더 자세히 살펴봅시다. 스토리북이 시작되면 기본 템플릿을 다음으로 구성된 사용자 정의 템플릿으로 대체합니다:</p>
<ul>
<li>제목, 부제 및 설명 문서 블록에서 검색한 구성 요소의 메타데이터로 구성된 헤더.</li>
<li>Primary Doc 블록을 통해 파일에서 정의된 첫 번째 스토리로 컴포넌트 확대 및 축소를위한 편리한 UI 컨트롤 세트.</li>
<li>Controls Doc 블록을 통해 이야기에서 정의된 모든 관련 args 및 argTypes로 대화식 테이블.</li>
<li>Stories Doc 블록을 통해 남은 스토리의 개요.</li>
</ul>
<h4 id="mdx로" tabindex="-1"><a class="header-anchor" href="#mdx로" aria-hidden="true">#</a> MDX로</h4>
<p>MDX를 사용하여 문서 템플릿을 생성할 수도 있습니다. 이것은 JSX 처리가 설정되어 있지 않은 비-React 프로젝트에서 유용합니다. 프로젝트에 MDX 파일을 만들면 일반 문서로 간주됩니다. MDX 파일이 문서 템플릿임을 나타내려면 해당 메타 Doc 블록에 isTemplate 속성을 제공하면 됩니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> Title<span class="token punctuation">,</span> Primary<span class="token punctuation">,</span> Controls<span class="token punctuation">,</span> Stories <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>

<span class="token punctuation">{</span><span class="token comment">/* 
  * 👇 isTemplate 속성은 이것이 템플릿임을 Storybook에 알려주기 위해 필요합니다.
  * 사용 방법은 https://storybook.js.org/docs/api/doc-block-meta
  * 참고하여 배워보세요
*/</span><span class="token punctuation">}</span>

<span class="token operator">&lt;</span>Meta isTemplate <span class="token operator">/</span><span class="token operator">></span>

<span class="token operator">&lt;</span>Title <span class="token operator">/</span><span class="token operator">></span>

# 기본 구현

<span class="token operator">&lt;</span>Primary <span class="token operator">/</span><span class="token operator">></span>

## 입력값

컴포넌트는 다음 <span class="token function">입력값</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>을 받습니다<span class="token operator">:</span>

<span class="token operator">&lt;</span>Controls <span class="token operator">/</span><span class="token operator">></span>

<span class="token operator">--</span><span class="token operator">-</span>

## 추가 변형

아래에 컴포넌트의 추가 변형이 나열되어 있습니다<span class="token punctuation">.</span>

<span class="token operator">&lt;</span>Stories <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음 .storybook/preview.js 또는 개별 스토리 파일에서 가져와서 사용할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> DocumentationTemplate <span class="token keyword">from</span> <span class="token string">'./DocumentationTemplate.mdx'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    docs<span class="token operator">:</span> <span class="token punctuation">{</span>
      page<span class="token operator">:</span> DocumentationTemplate<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="목차-생성" tabindex="-1"><a class="header-anchor" href="#목차-생성" aria-hidden="true">#</a> 목차 생성```</h3>
<p>Storybook이 자동 생성한 문서 페이지는 상당히 길고 탐색이 어려울 수 있습니다. 이를 돕기 위해 목차 기능을 활성화하여 문서 페이지의 빠른 개요를 제공하고 사용자가 특정 섹션으로 이동할 수 있도록 할 수 있습니다. 이를 활성화하려면 Storybook UI 구성 파일(예: .storybook/preview.js)을 확장하고 toc 속성이 있는 docs 매개변수를 제공하세요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크에 맞춰 your-framework를 교체하세요 (예: react, vue3)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    docs<span class="token operator">:</span> <span class="token punctuation">{</span>
      toc<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 👈 목차 활성화</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="목차-구성" tabindex="-1"><a class="header-anchor" href="#목차-구성" aria-hidden="true">#</a> 목차 구성</h3>
<p>기본적으로 문서 페이지의 목차는 자동으로 생성된 h3 제목만 표시됩니다. 그러나 목차를 사용자 정의하려면 toc 속성에 더 많은 매개변수를 추가할 수 있습니다. 다음은 사용 가능한 옵션 및 그 사용법 예시입니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용하는 프레임워크로 교체하세요 (예: react, vue3)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    docs<span class="token operator">:</span> <span class="token punctuation">{</span>
      toc<span class="token operator">:</span> <span class="token punctuation">{</span>
        contentsSelector<span class="token operator">:</span> <span class="token string">'.sbdocs-content'</span><span class="token punctuation">,</span>
        headingSelector<span class="token operator">:</span> <span class="token string">'h1, h2, h3'</span><span class="token punctuation">,</span>
        ignoreSelector<span class="token operator">:</span> <span class="token string">'#primary'</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">'Table of Contents'</span><span class="token punctuation">,</span>
        disable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        unsafeTocbotOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
          orderedList<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="구성-요소-수준의-설정" tabindex="-1"><a class="header-anchor" href="#구성-요소-수준의-설정" aria-hidden="true">#</a> 구성 요소 수준의 설정</h4>
<p>특정 스토리에 대한 목차를 사용자 정의하려면 스토리의 기본 내보내기에 toc 속성을 포함하고 필요한 구성을 제공하면 됩니다. 예를 들어, 특정 스토리에서 목차를 숨기려면 다음과 같이 스토리를 조정하세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용하는 프레임워크의 이름으로 교체</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./MyComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
  tags<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'autodocs'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    docs<span class="token operator">:</span> <span class="token punctuation">{</span>
      toc<span class="token operator">:</span> <span class="token punctuation">{</span>
        disable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 👈 목차 비활성화</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="컴포넌트-문서화-사용자-정의" tabindex="-1"><a class="header-anchor" href="#컴포넌트-문서화-사용자-정의" aria-hidden="true">#</a> 컴포넌트 문서화 사용자 정의</h3>
<p>Storybook의 Autodocs를 사용하여 자동화된 문서를 작성하면 지속 가능한 문서 양식을 구축하는 데 출발점을 제공받을 수 있습니다. 그럼에도 불구하고 모든 경우에 적합하지는 않을 수 있으며, 확장하고 추가 정보를 제공하고 싶을 수 있습니다. 이러한 경우를 위해 MDX와 Storybook의 Doc Blocks를 결합하여 문서를 작성하는 것을 권장합니다.</p>
<h2 id="고급-설정" tabindex="-1"><a class="header-anchor" href="#고급-설정" aria-hidden="true">#</a> 고급 설정</h2>
<h3 id="여러-컴포넌트-문서화" tabindex="-1"><a class="header-anchor" href="#여러-컴포넌트-문서화" aria-hidden="true">#</a> 여러 컴포넌트 문서화</h3>
<p>가끔은 여러 구성 요소를 함께 문서화하는 것이 도움이 될 때가 있어요. 예를 들어, 구성 요소 라이브러리의 ButtonGroup과 Button 구성 요소는 함께 없이는 의미가 없을 수 있어요.</p>
<p>Autodocs를 사용하면 &quot;main&quot; 구성 요소를 document 할 수 있고, 이와 관련된 하나 이상의 하위 구성 요소도 함께 document 할 수 있어요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> List <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./List'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ListItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./ListItem'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> List<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> List<span class="token punctuation">,</span>
  subcomponents<span class="token operator">:</span> <span class="token punctuation">{</span> ListItem <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//👈 ListItem 구성 요소를 하위 구성 요소로 추가</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> List<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Empty<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> OneItem<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>List <span class="token punctuation">{</span><span class="token operator">...</span>args<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>ListItem <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>List<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-04-07-AutomaticdocumentationandStorybook/img/AutomaticdocumentationandStorybook_1.png" />
```
<p>주요 구성 요소와 해당 하위 구성 요소는 ArgTypes 문서 블록의 탭 형식으로 표시됩니다. 탭 제목은 하위 구성 요소 객체의 키에 해당합니다.</p>
<p>구성 요소 그룹에 대해 문서를 다르게 정리하려면 MDX를 사용하는 것이 좋습니다. MDX를 사용하면 구성 요소가 표시되는 방식을 완전히 제어할 수 있고 모든 구성을 지원합니다.</p>
<h3 id="문서-컨테이너-사용자-정의" tabindex="-1"><a class="header-anchor" href="#문서-컨테이너-사용자-정의" aria-hidden="true">#</a> 문서 컨테이너 사용자 정의</h3>
<p>문서 컨테이너는 문서 페이지를 감싸는 구성 요소입니다. Storybook의 UI에서 문서 페이지를 렌더링하는 것을 담당합니다. 자체 구성 요소를 생성하고 Storybook UI 구성 파일(예: .storybook/preview.js)을 업데이트하여 참조함으로써 사용자 정의할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token comment">// 사용 중인 프레임워크로 your-framework를 대체하세요 (예: react, vue3)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> DocsContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ExampleContainer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> children<span class="token punctuation">,</span> <span class="token operator">...</span>props <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>DocsContainer <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>DocsContainer<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    controls<span class="token operator">:</span> <span class="token punctuation">{</span>
      matchers<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(background|color)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        date<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Date$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    docs<span class="token operator">:</span> <span class="token punctuation">{</span>
      container<span class="token operator">:</span> ExampleContainer<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="기본-테마-재정의" tabindex="-1"><a class="header-anchor" href="#기본-테마-재정의" aria-hidden="true">#</a> 기본 테마 재정의</h3>
<p>기본적으로 Storybook은 UI에 대한 두 가지 테마(light 및 dark)를 제공합니다. 문서에서 사용되는 테마를 기존 테마와 일치하도록 맞춰야 하는 경우, Storybook UI 구성 파일(.storybook/preview.js)을 업데이트하고 적용할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크로 your-framework를 대체하세요 (예: react, vue3)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> themes<span class="token punctuation">,</span> ensure <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/theming'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    controls<span class="token operator">:</span> <span class="token punctuation">{</span>
      matchers<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(background|color)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        date<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Date$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    docs<span class="token operator">:</span> <span class="token punctuation">{</span>
      theme<span class="token operator">:</span> <span class="token function">ensure</span><span class="token punctuation">(</span>themes<span class="token punctuation">.</span>dark<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 사용할 대체 테마</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="사용자-정의-mdx-컴포넌트-사용하기" tabindex="-1"><a class="header-anchor" href="#사용자-정의-mdx-컴포넌트-사용하기" aria-hidden="true">#</a> 사용자 정의 MDX 컴포넌트 사용하기</h3>
<p>Storybook을 기본적으로 제공되는 컴포넌트들을 사용하여 문서 페이지를 사용자 정의할 수 있습니다. 디자인 시스템이나 컴포넌트 라이브러리를 사용하고 있고 해당 컴포넌트들을 문서 페이지에 추가하고 싶다면, @mdx-js/react에서 상속된 MDXProvider 컴포넌트를 자체적인 것으로 대체할 수 있습니다. 그러나 이에는 주의해야 할 점이 있습니다. 컴포넌트를 대체할 때 Markdown 구문(예: #로 표시하는 제목)을 사용하여 문서를 작성한 경우에만 영향을 미칩니다. <code v-pre>h1</code>과 같은 네이티브 HTML 요소는 사용자 정의 구현으로 대체되지 않습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크(예: react, vue3)에 맞게 your-framework를 해당 프레임워크로 바꿔주세요.</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MDXProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mdx-js/react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> DocsContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> DesignSystem <span class="token keyword">from</span> <span class="token string">'your-design-system'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">MyDocsContainer</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>MDXProvider
    components<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      h1<span class="token operator">:</span> DesignSystem<span class="token punctuation">.</span><span class="token constant">H1</span><span class="token punctuation">,</span>
      h2<span class="token operator">:</span> DesignSystem<span class="token punctuation">.</span><span class="token constant">H2</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token operator">></span>
    <span class="token operator">&lt;</span>DocsContainer <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>MDXProvider<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    controls<span class="token operator">:</span> <span class="token punctuation">{</span>
      matchers<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(background|color)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        date<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Date$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    docs<span class="token operator">:</span> <span class="token punctuation">{</span>
      container<span class="token operator">:</span> MyDocsContainer<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="문제-해결" tabindex="-1"><a class="header-anchor" href="#문제-해결" aria-hidden="true">#</a> 문제 해결</h2>
<h3 id="목차가-예상대로-표시되지-않는-경우" tabindex="-1"><a class="header-anchor" href="#목차가-예상대로-표시되지-않는-경우" aria-hidden="true">#</a> 목차가 예상대로 표시되지 않는 경우</h3>
<p><strong>Autodocs</strong>의 목차를 사용할 때 예상과 다르게 나타나는 경우가 발생할 수 있습니다. 이러한 문제를 해결하기 위해 발생할 수 있는 상황들을 모아봤습니다.</p>
<h4 id="간단한-문서-페이지의-경우" tabindex="-1"><a class="header-anchor" href="#간단한-문서-페이지의-경우" aria-hidden="true">#</a> 간단한 문서 페이지의 경우</h4>
<p>하나의 일치하는 제목만 있는 문서 페이지에 목차를 만들면 목차가 기본적으로 숨겨지지 않습니다. 이 문제에 대한 해결책으로 두 번째 제목을 추가하거나 완전히 끄는 것이 있을 수 있습니다.</p>
<h4 id="작은-화면에서" tabindex="-1"><a class="header-anchor" href="#작은-화면에서" aria-hidden="true">#</a> 작은 화면에서</h4>
<p>화면 너비가 1200px 미만인 경우 목차는 기본적으로 숨겨집니다. 현재 이 문제에 영향을 미치지 않는 내장 솔루션이 없습니다. 그 외의 방법으로 문서 페이지의 스타일 호환성을 유지할 수 있는 것은 없습니다.</p>
<h4 id="mdx로-작성된-문서" tabindex="-1"><a class="header-anchor" href="#mdx로-작성된-문서" aria-hidden="true">#</a> MDX로 작성된 문서</h4>
<p>MDX를 사용하여 비접속형 문서를 작성하는 경우, 현재 구현에 따라 매개변수 정의를 지원하지 않음으로 인해 목차를 사용자 정의할 수 없습니다. 결과적으로 전역적으로 제공된 기본 구성으로 목차가 항상 되돌아갑니다.</p>
<h3 id="자동-생성된-문서가-모노리포-설정에서-나타나지-않아요" tabindex="-1"><a class="header-anchor" href="#자동-생성된-문서가-모노리포-설정에서-나타나지-않아요" aria-hidden="true">#</a> 자동 생성된 문서가 모노리포 설정에서 나타나지 않아요</h3>
<p>기본적으로 Storybook의 Autodocs 기능은 이야기에 대한 문서를 자동으로 생성하는 데 사용됩니다. 그런데 모노리포 설정(예: Yarn Workspaces, pnpm Workspaces)로 작업하는 경우 문서의 일부가 자동으로 생성되지 않을 수 있는 문제가 발생할 수 있어요. 이러한 문제를 해결하는 데 도움이 되도록 몇 가지 권고안을 준비했어요.</p>
<p>import 문을 업데이트하여 패키지의 루트 대신 컴포넌트를 직접 참조하도록 수정해주세요. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 당신의 프레임워크 이름으로 교체하세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token comment">// ❌ 패키지의 인덱스 파일을 사용하여 컴포넌트를 가져오지 마세요.</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@component-package'</span><span class="token punctuation">;</span>

<span class="token comment">// ✅ 컴포넌트의 내보내기를 사용하여 직접 가져오세요.</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@component-package/src/MyComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 👇 title 속성은 선택 사항입니다.
   * 자동 제목을 생성하는 방법에 대해 알아보려면 https://storybook.js.org/docs/configure/#configure-story-loading 를 참조하세요
   */</span>
  title<span class="token operator">:</span> <span class="token string">'MyComponent'</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또한 TypeScript를 사용하여 개발 중이라면 이를 업데이트해야 할 수도 있습니다. Storybook의 구성 파일(i.e., .storybook/main.js|ts)을 다음과 같이 포함해야 합니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크로 your-framework를 대체하세요 (예: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  typescript<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 오토독을 통해 다중 패키지 컴포넌트를 문서화할 수 있도록 기본 TypeScript 구성을 재정의합니다.</span>
    reactDocgen<span class="token operator">:</span> <span class="token string">'react-docgen'</span><span class="token punctuation">,</span>
    check<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>문제가 계속되는 경우, GitHub 토론 등의 기본 커뮤니케이션 채널을 통해 커뮤니티에 문의해보시기를 권장합니다.</p>
<h3 id="컨트롤들이-자동-생성된-문서-내에서-스토리를-업데이트하지-않음" tabindex="-1"><a class="header-anchor" href="#컨트롤들이-자동-생성된-문서-내에서-스토리를-업데이트하지-않음" aria-hidden="true">#</a> 컨트롤들이 자동 생성된 문서 내에서 스토리를 업데이트하지 않음</h3>
<p>스토리북을 통해 이야기의 인라인 렌더링을 해제한 경우, 문서 페이지 내에서 연결된 컨트롤이 이야기를 업데이트하지 않는 상황에 직면할 수 있습니다. 이것은 현재 구현의 알려진 한계이며 향후 릴리스에서 해결될 예정입니다.</p>
<p>스토리북 문서에 대해 더 알아보기</p>
<ul>
<li>이야기에 대한 문서 작성을 위한 오토독</li>
<li>문서를 사용자 정의하기 위한 MDX</li>
<li>문서 작성을 위한 독 블록</li>
<li>문서 게시를 자동화하여 문서를 게시하는 프로세스 automation</li>
</ul>
</div></template>
