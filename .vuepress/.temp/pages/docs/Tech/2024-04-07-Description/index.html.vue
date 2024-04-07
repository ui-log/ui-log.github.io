<template><div><p>Description 블록은 해당하는 JSDoc 주석에서 가져온 컴포넌트, 스토리 또는 메타의 설명을 표시합니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-Description/img/Description_0.png" alt="Description Image"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> Description <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ButtonStories <span class="token keyword">from</span> <span class="token string">'./Button.stories'</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Meta <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token operator">&lt;</span>Description <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">.</span>Primary<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Description <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Description 컴포넌트는 다음과 같은 props으로 구성됩니다:</p>
<h3 id="of" tabindex="-1"><a class="header-anchor" href="#of" aria-hidden="true">#</a> of</h3>
<p>타입: 스토리 내보내기 또는 CSF 파일 내보내기</p>
<p>설명을 가져올 위치를 지정합니다. 표시할 설명에 따라 이야기 또는 메타를 가리킬 수 있습니다.</p>
<p>설명은 JSDoc 주석이나 매개변수에서 가져오며, 마크다운으로 렌더링됩니다. 자세한 내용은 설명 작성을 참조하세요.</p>
<h2 id="설명-작성" tabindex="-1"><a class="header-anchor" href="#설명-작성" aria-hidden="true">#</a> 설명 작성</h2>
<p>원하는 내용에 따라 컴포넌트/이야기의 설명을 작성할 수 있는 여러 위치가 있습니다. 설명은 컴포넌트의 각 이야기를 설명한다고 하면 이야기 수준에서 작성할 수 있고, 컴포넌트를 일반적으로 설명하려면 메타나 컴포넌트 수준에서 작성할 수 있습니다.</p>
<p>JSDoc 주석 위에 이야기, 메타 또는 컴포넌트에 대한 설명을 작성할 수 있습니다. 또한 매개변수에도 지정할 수 있습니다. 주석 대신 매개변수를 통해 이야기를 설명하려면 parameters.docs.description.story에 추가하고, 메타/컴포넌트를 설명하려면 parameters.docs.description.component에 추가하십시오.</p>
<p>설명에 대해선 주석을 사용하는 것을 권장합니다. only use the parameters.docs.description.X properties in situations where comments are not possible to write for some reason, 혹은 Storybook에 표시되는 설명을 주석과 다르게 원할 때에만 매개변수.docs.description.X 속성을 사용하세요. 주석을 사용하면 들여쓰기를 걱정할 필요가 없으며, 다른 개발자들이 이야기/컴포넌트 소스를 탐색하는 데 더 쉽게 발견할 수 있습니다.</p>
<p>이야기를 문서화할 때는 of prop(아래 참조)에서 이야기 내보내기를 참조하고 Description 블록은 다음 순서로 설명을 찾습니다:</p>
<ul>
<li>이야기에서 parameters.docs.description.story 찾기</li>
<li>이야기 위의 JSDoc 주석</li>
</ul>
<p>컴포넌트를 문서화할 때, prop의 meta 내에 있는 meta 내보내기를 참조하고 Description 블록은 다음 순서로 설명을 찾습니다:</p>
<ul>
<li>meta에서 parameters.docs.description.component</li>
<li>meta 위의 JSDoc 주석</li>
<li>컴포넌트 위의 JSDoc 주석</li>
</ul>
<p>이 흐름을 통해 각 시나리오별 설명을 재정의하는 강력한 방법을 제공합니다. 다음 예시를 살펴보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * # 버튼 컴포넌트
 * 버튼을 보여줍니다
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Button</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>button<span class="token operator">></span>Click me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// Replace your-framework with the name of your framework</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * # Button stories
 * These stories showcase the button
 */</span>
<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    docs<span class="token operator">:</span> <span class="token punctuation">{</span>
      description<span class="token operator">:</span> <span class="token punctuation">{</span>
        component<span class="token operator">:</span> <span class="token string">'Another description, overriding the comments'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * # Primary Button
 * This is the primary button
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Primary<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    docs<span class="token operator">:</span> <span class="token punctuation">{</span>
      description<span class="token operator">:</span> <span class="token punctuation">{</span>
        story<span class="token operator">:</span> <span class="token string">'Another description on the story, overriding the comments'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> Description <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/blocks'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ButtonStories <span class="token keyword">from</span> <span class="token string">'./Button.stories'</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Meta <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token punctuation">{</span><span class="token comment">/* Shows the description for the default export (the meta).
    If that didn't have any comments, it would show the 
    comments from the component instead */</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>Description <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token punctuation">{</span><span class="token comment">/* Shows the description for the Primary export */</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>Description <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>ButtonStories<span class="token punctuation">.</span>Primary<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
