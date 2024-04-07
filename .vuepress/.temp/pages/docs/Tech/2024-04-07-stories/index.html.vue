<template><div><p>상위: main.js|ts 설정</p>
<p>타입:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">|</span> <span class="token punctuation">(</span>문자열 <span class="token operator">|</span> StoriesSpecifier<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token operator">|</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">목록</span><span class="token operator">:</span> <span class="token punctuation">(</span>문자열 <span class="token operator">|</span> StoriesSpecifier<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>문자열 <span class="token operator">|</span> StoriesSpecifier<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook을 지정된 위치에서 스토리를 로드하도록 구성합니다. 여기서 의도는 컴포넌트를 문서화하는 스토리 파일을 공존하도록 하는 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>•
└── components
    ├── Button<span class="token punctuation">.</span>ts
    └── Button<span class="token punctuation">.</span>stories<span class="token punctuation">.</span>ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크를 your-framework로 대체하세요 (예: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="배열로-글로브-사용하기" tabindex="-1"><a class="header-anchor" href="#배열로-글로브-사용하기" aria-hidden="true">#</a> 배열로 글로브 사용하기</h2>
<p>스토리북은 패턴 일치 문자열의 배열로 찾은 프로젝트의 스토리를 로드합니다.</p>
<p>스토리는 배열에 정의된 순서대로 로드됩니다. 이를 통해 사이드바에 표시되는 스토리의 순서를 제어할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크(예: react-webpack5, vue3-vite)로 교체</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="구성-객체로-함께" tabindex="-1"><a class="header-anchor" href="#구성-객체로-함께" aria-hidden="true">#</a> 구성 객체로 함께</h2>
<p>거기서 시작하실 수 있습니다.  함께 합니다.</p>
<h3 id="storiesspecifier" tabindex="-1"><a class="header-anchor" href="#storiesspecifier" aria-hidden="true">#</a> StoriesSpecifier</h3>
<p>유형:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">directory</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  files<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  titlePrefix<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="storiesspecifier-directory" tabindex="-1"><a class="header-anchor" href="#storiesspecifier-directory" aria-hidden="true">#</a> StoriesSpecifier.directory</h4>
<p>(필수)</p>
<p>유형: 문자열</p>
<p>스토리 파일을 찾기 시작할 위치로, 프로젝트 루트에 상대적인 위치입니다.</p>
<h4 id="storiesspecifier-files" tabindex="-1"><a class="header-anchor" href="#storiesspecifier-files" aria-hidden="true">#</a> StoriesSpecifier.files</h4>
<p>유형: 문자열</p>
<p>기본값: <code v-pre>**/*.@(mdx|stories.@(js|jsx|mjs|ts|tsx))</code></p>
<p>로드할 파일 이름과 일치하는 glob입니다. StoriesSpecifier.directory와 관련이 있습니다 (선행 ./ 없이).</p>
<h4 id="storiesspecifier-titleprefix" tabindex="-1"><a class="header-anchor" href="#storiesspecifier-titleprefix" aria-hidden="true">#</a> StoriesSpecifier.titlePrefix</h4>
<p>유형: 문자열</p>
<p>기본값: ``</p>
<p>자동 제목 생성 시 스토리 제목에 사용되는 접두사입니다.</p>
<h2 id="사용자-지정-구현과-함께" tabindex="-1"><a class="header-anchor" href="#사용자-지정-구현과-함께" aria-hidden="true">#</a> 사용자 지정 구현과 함께</h2>
<p>Storybook 구성을 조정하고 사용자 정의 로직을 구현할 수도 있어요. 예를 들어, 전통적인 방식으로는 해결할 수 없는 특정 패턴을 포함한 프로젝트를 작업 중이라고 가정해봅시다. 그런 경우에는 다음과 같이 구성을 조정할 수 있어요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크(예: react-webpack5, vue3-vite)로 your-framework을 대체하세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StoriesEntry <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/types'</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">findStories</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>StoriesEntry<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token comment">// 사용자 정의 로직이 파일 목록을 반환합니다</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">stories</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>list<span class="token operator">:</span> StoriesEntry<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>list<span class="token punctuation">,</span>
    <span class="token comment">// 👇 찾은 스토리를 기존 스토리 파일 목록에 추가해요</span>
    <span class="token operator">...</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">findStories</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
