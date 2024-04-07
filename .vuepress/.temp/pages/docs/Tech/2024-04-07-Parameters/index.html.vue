<template><div><p>파라미터는 일반적으로 Storybook의 기능 및 애드온을 제어하는 데 사용되는 정적인 이름이 있는 이야기에 관한 메타데이터 세트입니다.</p>
<p>예를 들어, 배경 애드온을 파라미터를 통해 사용자 정의할 수 있습니다. parameters.backgrounds를 사용하여 이야기가 선택될 때 배경 툴바에 나타나는 배경을 정의할 수 있습니다.</p>
<h2 id="이야기-파라미터" tabindex="-1"><a class="header-anchor" href="#이야기-파라미터" aria-hidden="true">#</a> 이야기 파라미터</h2>
<p>우리는 CSF 내보내기에서 parameters 키를 사용하여 각각의 이야기에 대한 파라미터를 설정할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용하고있는 프레임워크에 맞춰 your-framework을 변경하세요 (예: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> OnDark<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 👇 스토리 레벨 파라미터</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    backgrounds<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'dark'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="컴포넌트-파라미터" tabindex="-1"><a class="header-anchor" href="#컴포넌트-파라미터" aria-hidden="true">#</a> 컴포넌트 파라미터</h2>
<p>default CSF 내보내기의 parameters 키를 사용하여 컴포넌트의 모든 스토리에 대한 파라미터를 설정할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용하고있는 프레임워크에 맞춰 your-framework을 변경하세요 (예: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
  <span class="token comment">// 👇 메타 레벨 파라미터</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    backgrounds<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'dark'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Basic<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="전역-매개변수" tabindex="-1"><a class="header-anchor" href="#전역-매개변수" aria-hidden="true">#</a> 전역 매개변수</h2>
<p>모든 이야기의 매개변수도 설정할 수 있습니다. .storybook/preview.js 파일의 매개변수 내보내기를 통해 가능합니다 (이 파일은 모든 이야기를 구성하는 파일입니다):</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 렌더러로 your-renderer를 바꿉니다 (예: react, vue3)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-renderer'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    backgrounds<span class="token operator">:</span> <span class="token punctuation">{</span>
      values<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'#fff'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'dark'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'#333'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>전역 매개변수 설정은 애드온을 구성하는 일반적인 방법입니다. Backgrounds를 통해 모든 이야기가 렌더링할 수 있는 배경 목록을 구성할 수 있습니다.</p>
<h2 id="매개변수-상속-규칙" tabindex="-1"><a class="header-anchor" href="#매개변수-상속-규칙" aria-hidden="true">#</a> 매개변수 상속 규칙</h2>
<p>전역, 구성 요소 및 스토리 매개변수가 결합되는 방식은 다음과 같습니다:</p>
<ul>
<li>더 구체적인 매개변수가 우선 순위를 갖습니다 (즉, 스토리 매개변수가 구성 요소 매개변수를 덮어쓰고, 전역 매개변수를 덮어쓰게 됩니다).</li>
<li>키만 덮어쓰고 삭제되는 일은 없습니다.</li>
</ul>
<p>매개변수 병합은 중요합니다. 이것은 스토리별로 단일 구체적 하위 매개변수를 덮어쓰지만 전역으로 정의된 대부분의 매개변수를 유지할 수 있음을 의미합니다.</p>
<p>만약 매개변수(예: 애드온)를 의존하는 API를 정의하고 있다면, 이 동작을 고려하는 것이 좋은 아이디어입니다.</p>
</div></template>
