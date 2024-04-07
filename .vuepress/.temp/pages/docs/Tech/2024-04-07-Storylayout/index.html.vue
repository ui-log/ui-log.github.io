<template><div><p>레이아웃 매개변수를 사용하면 Storybook의 캔버스 탭에 이야기가 배치되는 방식을 구성할 수 있습니다.</p>
<h2 id="전역-레이아웃" tabindex="-1"><a class="header-anchor" href="#전역-레이아웃" aria-hidden="true">#</a> 전역 레이아웃</h2>
<p>다음과 같이 ./storybook/preview.js에 매개변수를 추가할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크(예: react, vue3)로 your-framework를 대체해주세요</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    layout<span class="token operator">:</span> <span class="token string">'centered'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Tech/2024-04-07-Storylayout/img/Storylayout_0.png" alt="이미지"></p>
<p>위의 예시에서 Storybook은 UI에서 모든 스토리를 가운데 정렬합니다. 레이아웃은 아래 옵션들을 받습니다:</p>
<ul>
<li>centered: 컴포넌트를 캔버스의 수평 및 수직으로 가운데 정렬</li>
<li>fullscreen: 컴포넌트를 캔버스의 전체 너비와 높이로 확장</li>
<li>padded: (기본값) 컴포넌트 주변에 여분의 패딩 추가</li>
</ul>
<h2 id="컴포넌트-레이아웃" tabindex="-1"><a class="header-anchor" href="#컴포넌트-레이아웃" aria-hidden="true">#</a> 컴포넌트 레이아웃</h2>
<p>위와 같이 구성 요소 수준에서도 설정할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// your-framework을 사용하는 </span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">storybook</span></span><span class="token operator">/</span>your<span class="token operator">-</span>framework' 

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
  <span class="token comment">// 레이아웃 파라미터를 전체 구성 요소에 적용합니다.</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    layout<span class="token operator">:</span> <span class="token string">'centered'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="스토리-레이아웃" tabindex="-1"><a class="header-anchor" href="#스토리-레이아웃" aria-hidden="true">#</a> 스토리 레이아웃</h2>
<p>또는 다음과 같이 특정 스토리에도 적용할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 여러분이 사용하시는 프레임워크의 이름을 'your-framework' 자리에 넣어주세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> WithLayout<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    layout<span class="token operator">:</span> <span class="token string">'centered'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
