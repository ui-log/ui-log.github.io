<template><div><p>&quot;Viewport&quot; 툴바 항목을 사용하여 이야기가 렌더링되는 iframe의 크기를 조정할 수 있습니다. 이를 통해 반응형 UI를 쉽게 개발할 수 있습니다.</p>
<video autoplay playsinline loop>
  <source src="@source/docs/Tech/2024-04-07-Viewport/img/Viewport_0.mp4" type="video/mp4">
</video>
<h2 id="설정" tabindex="-1"><a class="header-anchor" href="#설정" aria-hidden="true">#</a> 설정</h2>
<p>&quot;Viewport&quot; 애드온은 기본적으로 사용할 수 있는 일련의 표준 뷰포트를 제공합니다. 기본 뷰포트를 변경하려면 .storybook/preview.js 파일에서 global parameters.viewport 매개변수를 설정할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// your-framework을 사용하는 프레임워크로 바꿔주세요 (예: react, vue3)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    viewport<span class="token operator">:</span> <span class="token punctuation">{</span>
      viewports<span class="token operator">:</span> newViewports<span class="token punctuation">,</span> <span class="token comment">// newViewports는 ViewportMap이어야 합니다. (아래 예제 참조)</span>
      defaultViewport<span class="token operator">:</span> <span class="token string">'someDefault'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>viewport 전역 변수는 다음과 같은 키를 가진 객체를 받을 수 있습니다:</p>
<p>viewports 객체에는 다음과 같은 키가 필요합니다:</p>
<h3 id="자세한-디바이스-설정-사용하기" tabindex="-1"><a class="header-anchor" href="#자세한-디바이스-설정-사용하기" aria-hidden="true">#</a> 자세한 디바이스 설정 사용하기</h3>
<p>뷰포트 애드온에는 구성 요소를 테스트할 때 사용할 수 있는 디바이스들이 포함되어 있습니다. 아래에는 사용 가능한 디바이스와 그들을 사용하는 예시가 나와 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크에 따라 your-framework을 해당 프레임워크로 대체하세요 (예: react, vue3)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">INITIAL_VIEWPORTS</span><span class="token punctuation">,</span> <span class="token constant">MINIMAL_VIEWPORTS</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/addon-viewport'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    viewport<span class="token operator">:</span> <span class="token punctuation">{</span>
      viewports<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token constant">INITIAL_VIEWPORTS</span><span class="token punctuation">,</span>
        <span class="token operator">...</span><span class="token constant">MINIMAL_VIEWPORTS</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      defaultViewport<span class="token operator">:</span> <span class="token string">'iphone14promax'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="새로운-디바이스-추가하기" tabindex="-1"><a class="header-anchor" href="#새로운-디바이스-추가하기" aria-hidden="true">#</a> 새로운 디바이스 추가하기</h3>
<p>특정 뷰포트나 사용해야 하는 뷰포트 목록이 있는 경우, .storybook/preview.js 파일을 수정하여 그들을 포함시킬 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> customViewports <span class="token operator">=</span> <span class="token punctuation">{</span>
  kindleFire2<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'Kindle Fire 2'</span><span class="token punctuation">,</span>
    styles<span class="token operator">:</span> <span class="token punctuation">{</span>
      width<span class="token operator">:</span> <span class="token string">'600px'</span><span class="token punctuation">,</span>
      height<span class="token operator">:</span> <span class="token string">'963px'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  kindleFireHD<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'Kindle Fire HD'</span><span class="token punctuation">,</span>
    styles<span class="token operator">:</span> <span class="token punctuation">{</span>
      width<span class="token operator">:</span> <span class="token string">'533px'</span><span class="token punctuation">,</span>
      height<span class="token operator">:</span> <span class="token string">'801px'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음 변경 사항을 적용하여 스토리북에서 사용하세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 프레임워크 이름으로 your-framework을 원하는 프레임워크로 변경하세요 (예: react, vue3)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    viewport<span class="token operator">:</span> <span class="token punctuation">{</span> viewports<span class="token operator">:</span> customViewports <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>스토리북을 시작하면 새로운 뷰포트와 기기가 표시됩니다.</p>
<p>필요한 경우 이 두 가지를 다른 viewport 목록에 추가할 수 있어요.</p>
<p>예를 들어, 이 두 가지를 최소한의 viewport 목록과 함께 사용하려면 다음과 같이 할 수 있어요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크에 맞게 your-framework을(예: react, vue3) 대체하세요</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">MINIMAL_VIEWPORTS</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/addon-viewport'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> customViewports <span class="token operator">=</span> <span class="token punctuation">{</span>
  kindleFire2<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'Kindle Fire 2'</span><span class="token punctuation">,</span>
    styles<span class="token operator">:</span> <span class="token punctuation">{</span>
      width<span class="token operator">:</span> <span class="token string">'600px'</span><span class="token punctuation">,</span>
      height<span class="token operator">:</span> <span class="token string">'963px'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  kindleFireHD<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'Kindle Fire HD'</span><span class="token punctuation">,</span>
    styles<span class="token operator">:</span> <span class="token punctuation">{</span>
      width<span class="token operator">:</span> <span class="token string">'533px'</span><span class="token punctuation">,</span>
      height<span class="token operator">:</span> <span class="token string">'801px'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    viewport<span class="token operator">:</span> <span class="token punctuation">{</span>
      viewports<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token constant">MINIMAL_VIEWPORTS</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>customViewports<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Kindle Fire 2와 Kindle Fire HD 두 개의 viewport(보기 화면)가 MINIMAL_VIEWPORTS에 병합되어 디바이스 목록에 포함됩니다.</p>
<h3 id="컴포넌트-또는-스토리별-구성" tabindex="-1"><a class="header-anchor" href="#컴포넌트-또는-스토리별-구성" aria-hidden="true">#</a> 컴포넌트 또는 스토리별 구성</h3>
<p>특정 시나리오에서는 전역적으로 특정 시각적 뷰포트를 사용하는 것이 실용적이지 않을 수 있으며, 해당 뷰포트를 개별 스토리에 맞게 조정해야 할 수도 있습니다.</p>
<p>컴포넌트 수준이나 특정 스토리에 뷰포트를 포함하기 위해 매개변수를 통해 스토리를 업데이트하세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">INITIAL_VIEWPORTS</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/addon-viewport'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./MyComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//👇 Essentials 애드온의 viewports 객체</span>
    viewport<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">//👇 사용하고 싶은 뷰포트</span>
      viewports<span class="token operator">:</span> <span class="token constant">INITIAL_VIEWPORTS</span><span class="token punctuation">,</span>
      <span class="token comment">//👇 자체 기본 뷰포트</span>
      defaultViewport<span class="token operator">:</span> <span class="token string">'iphone6'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> MyStory<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    viewport<span class="token operator">:</span> <span class="token punctuation">{</span>
      defaultViewport<span class="token operator">:</span> <span class="token string">'iphonex'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="키보드-단축키" tabindex="-1"><a class="header-anchor" href="#키보드-단축키" aria-hidden="true">#</a> 키보드 단축키</h3>
<ul>
<li>이전 뷰포트: alt + shift + v</li>
<li>다음 뷰포트: alt + v</li>
<li>뷰포트 재설정: alt + control + v</li>
</ul>
<p>필요하다면, 단축키 페이지에서 수정할 수 있어요.</p>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<h3 id="파라미터" tabindex="-1"><a class="header-anchor" href="#파라미터" aria-hidden="true">#</a> 파라미터</h3>
<p>이 애드온은 viewport 네임스페이스 아래 Storybook에 다음과 같은 파라미터를 제공합니다:</p>
<h4 id="defaultorientation" tabindex="-1"><a class="header-anchor" href="#defaultorientation" aria-hidden="true">#</a> defaultOrientation</h4>
<p>유형: <code v-pre>portrait</code> | <code v-pre>landscape</code></p>
<p>기본적으로 <code v-pre>portrait</code>로 설정됩니다. 이는 이야기를 볼 때 사용되는 기본 방향을 지정합니다.</p>
<h4 id="defaultviewport" tabindex="-1"><a class="header-anchor" href="#defaultviewport" aria-hidden="true">#</a> defaultViewport</h4>
<p>타입: 문자열</p>
<p>이 스토리를 볼 때 사용하는 기본 뷰포트를 지정합니다. 뷰포트 오브젝트의 키와 일치해야 합니다.</p>
<h4 id="disable" tabindex="-1"><a class="header-anchor" href="#disable" aria-hidden="true">#</a> disable</h4>
<p>타입: boolean</p>
<p>이 애드온의 동작을 비활성화합니다. 스토리북 전체에서 이 애드온을 비활성화하려면 애드온-업계 표준 등록 시 이렇게 해야 합니다. 자세한 정보는 업계 표준 애드온 문서를 참조하세요.</p>
<p>이 매개변수는 더 구체적인 수준에서 재정의를 허용하는 데 가장 유용합니다. 예를 들어, 이 매개변수가 프로젝트 수준에서 true로 설정되어 있다면, 메타(컴포넌트) 또는 스토리 수준에서 false로 설정하여 다시 활성화할 수 있습니다.</p>
<h4 id="뷰포트" tabindex="-1"><a class="header-anchor" href="#뷰포트" aria-hidden="true">#</a> 뷰포트</h4>
<p>유형:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token literal-property property">styles</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">height</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> string <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'desktop'</span> <span class="token operator">|</span> <span class="token string">'mobile'</span> <span class="token operator">|</span> <span class="token string">'tablet'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>사용 가능한 뷰포트를 지정하세요. 키는 뷰포트를 참조하는 데 사용되며 값은 해당 뷰포트를 정의하는 객체입니다. 위의 사용 예제를 참조하세요. 너비(width)와 높이(height) 값은 단위를 포함해야 합니다. 예: <code v-pre>320px</code>.</p>
<h3 id="익스포트" tabindex="-1"><a class="header-anchor" href="#익스포트" aria-hidden="true">#</a> 익스포트</h3>
<p>이 애드온은 Storybook에 다음과 같은 익스포트를 제공합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">INITIAL_VIEWPORTS</span><span class="token punctuation">,</span> <span class="token constant">MINIMAL_VIEWPORTS</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/addon-viewport'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="초기-뷰포트" tabindex="-1"><a class="header-anchor" href="#초기-뷰포트" aria-hidden="true">#</a> 초기 뷰포트</h4>
<p>타입: 오브젝트</p>
<p>위의 목록에 나열된 뷰포트 애드온에서 제공하는 기본 뷰포트 세트입니다.</p>
<h4 id="최소-뷰포트" tabindex="-1"><a class="header-anchor" href="#최소-뷰포트" aria-hidden="true">#</a> 최소 뷰포트</h4>
<p>종류: 객체</p>
<p>뷰포트 애드온에서 제공하는 최소한의 뷰포트 세트는 아래와 같이 나열됩니다:</p>
</div></template>
