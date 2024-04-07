<template><div><p>Storybook은 다양한 구성 파일을 포함하는 .storybook이라는 폴더를 통해 구성됩니다.</p>
<h2 id="storybook-프로젝트-구성" tabindex="-1"><a class="header-anchor" href="#storybook-프로젝트-구성" aria-hidden="true">#</a> Storybook 프로젝트 구성</h2>
<p>Storybook의 주 구성 파일인 main.js 또는 main.ts는 스토리 위치, 사용하는 애드온, 기능 플래그 및 다른 프로젝트별 설정을 정의합니다. 이 파일은 프로젝트의 루트 디렉토리에 있는 .storybook 폴더에 있어야 합니다. 이 파일은 JavaScript 또는 TypeScript로 작성할 수 있습니다. 아래에 사용 가능한 옵션과 사용 방법 예시가 나와 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용중인 프레임워크로 your-framework을 대체하세요(예: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 필수</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 선택</span>
  addons<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@storybook/addon-essentials'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  docs<span class="token operator">:</span> <span class="token punctuation">{</span>
    autodocs<span class="token operator">:</span> <span class="token string">'tag'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  staticDirs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../public'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="스토리-로딩-구성" tabindex="-1"><a class="header-anchor" href="#스토리-로딩-구성" aria-hidden="true">#</a> 스토리 로딩 구성</h2>
<p>기본적으로 Storybook은 .storybook/main.js|ts의 글로브(패턴 일치 문자열)를 기반으로 프로젝트에서 스토리를 로드합니다. 이 때, 프로젝트의 확장자가 .stories.*인 모든 파일과 일치하는 것을 찾습니다. 이렇게 함으로써 컴포넌트를 설명하는 스토리 파일을 함께 두는 것을 의도하고 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>•
└── components
    ├── Button<span class="token punctuation">.</span>js
    └── Button<span class="token punctuation">.</span>stories<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다른 네이밍 규칙을 사용하려면, picomatch에서 지원하는 구문을 사용하여 글로브를 변경할 수 있습니다.</p>
<p>예를 들어, my-project/src/components 디렉토리에서 .md 및 .js 파일을 모두 가져오고 싶다면 다음과 같이 작성할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크에 맞게 your-framework을 해당 프레임워크로 교체하세요 (예: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../my-project/src/components/*.@(js|md)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="구성-객체로" tabindex="-1"><a class="header-anchor" href="#구성-객체로" aria-hidden="true">#</a> 구성 객체로</h3>
<p>또한 Storybook 구성을 구성 객체를 기반으로 스토리를 로드할 수 있습니다. 예를 들어, packages/components 디렉토리에서 스토리를 로드하고 싶다면 다음과 같이 설정 개체를 조정할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// your-framework을 사용하는 프레임워크로 변경하세요 (예: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// 👇 스토리가 있는 디렉토리를 설정합니다</span>
      directory<span class="token operator">:</span> <span class="token string">'../packages/components'</span><span class="token punctuation">,</span>
      <span class="token comment">// 👇 해당 패턴과 일치하는 파일을 모두 불러옵니다</span>
      files<span class="token operator">:</span> <span class="token string">'*.stories.*'</span><span class="token punctuation">,</span>
      <span class="token comment">// 👇 스토리 제목을 자동으로 생성할 때 사용됩니다</span>
      titlePrefix<span class="token operator">:</span> <span class="token string">'MyComponents'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook가 시작되면 packages/components 디렉토리 안에 stories 확장자를 포함한 모든 파일을 찾아서 스토리의 제목을 생성합니다.</p>
<h3 id="디렉토리와-함께" tabindex="-1"><a class="header-anchor" href="#디렉토리와-함께" aria-hidden="true">#</a> 디렉토리와 함께</h3>
<p>또한 디렉토리를 이용하여 Storybook 구성을 간단하게 할 수 있고 스토리를 불러올 수 있습니다. 예를 들어, packages/MyStories 안에 있는 모든 스토리를 불러오고 싶다면, 아래와 같이 구성을 조정할 수 있습니다:```</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크(예: react-webpack5, vue3-vite)로 table태그를 변경해주세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  <span class="token comment">// 👇 Storybook은 MyStories 폴더 내의 모든 기존 스토리를 로드합니다</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../packages/MyStories'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="사용자-정의-구현과-함께" tabindex="-1"><a class="header-anchor" href="#사용자-정의-구현과-함께" aria-hidden="true">#</a> 사용자 정의 구현과 함께</h3>
<p>Storybook 구성을 조정하고 사용자 정의 논리를 구현하여 스토리를로드할 수도 있습니다. 예를 들어, 스토리를로드하는 일반적인 방법으로 해결할 수 없는 특정 패턴이 포함된 프로젝트에서 작업 중인 경우 다음과 같이 구성을 조정할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크(예: react-webpack5, vue3-vite)로 table태그를 변경해주세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StoriesEntry <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/types'</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">findStories</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>StoriesEntry<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token comment">// 사용자 정의 논리는 파일 목록을 반환합니다</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">stories</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>list<span class="token operator">:</span> StoriesEntry<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>list<span class="token punctuation">,</span>
    <span class="token comment">// 👇 발견한 스토리를 기존 스토리 파일 목록에 추가합니다</span>
    <span class="token operator">...</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">findStories</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="알려진-제약-사항" tabindex="-1"><a class="header-anchor" href="#알려진-제약-사항" aria-hidden="true">#</a> 알려진 제약 사항</h3>
<p>현재 Storybook에서 이야기들이 색인화되는 방식 때문에, 현재 순간은 런타임에 이야기를 불러오는 것에는 약간의 제약 사항이 있습니다:</p>
<ul>
<li>버전 1부터 버전 3까지의 CSF 형식을 지원합니다.</li>
<li>제한된 API를 기반으로 사용자 정의 storySort 함수가 허용됩니다.</li>
</ul>
<h2 id="이야기-렌더링-구성하기" tabindex="-1"><a class="header-anchor" href="#이야기-렌더링-구성하기" aria-hidden="true">#</a> 이야기 렌더링 구성하기</h2>
<p>스토리를 렌더링하는 방식을 제어하고 전역 데코레이터와 매개변수를 추가하려면 .storybook/preview.js 파일을 생성하세요. 이 파일은 Canvas UI에 로드되며, 여러분의 컴포넌트를 분리되어 렌더링하는 &quot;preview&quot; iframe에 로드됩니다. 모든 스토리에 적용되는 글로벌 코드(예: CSS 임포트 또는 JavaScript 모의 객체)에는 preview.js를 사용하세요.</p>
<p>preview.js 파일은 ES 모듈이 될 수 있으며 다음 키를 내보낼 수 있습니다:</p>
<ul>
<li>decorators - 글로벌 데코레이터 배열</li>
<li>parameters - 글로벌 매개변수 객체</li>
<li>globalTypes - globalTypes 정의</li>
</ul>
<p>스토리의 순서를 변경하려면, '스토리 정렬'에 대해 읽어보세요.</p>
<h2 id="storybook-ui-구성하기" tabindex="-1"><a class="header-anchor" href="#storybook-ui-구성하기" aria-hidden="true">#</a> Storybook UI 구성하기</h2>
<p>Storybook의 UI(매니저)의 동작을 제어하려면 .storybook/manager.js 파일을 만들 수 있습니다.</p>
<p>이 파일에는 특정한 API가 없지만, UI 옵션을 설정하고 Storybook의 테마를 구성하는 곳입니다.</p>
</div></template>
