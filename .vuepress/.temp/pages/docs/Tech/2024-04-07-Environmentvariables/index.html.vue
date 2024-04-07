<template><div><p>Storybook에서 환경 변수를 사용하여 다른 &quot;모드&quot;에서의 동작을 변경할 수 있습니다. STORYBOOK_로 접두어가 있는 환경 변수를 제공하면 Webpack을 사용할 때 process.env 또는 Vite 빌더를 사용할 때 import.meta.env에서 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">STORYBOOK_THEME</span><span class="token operator">=</span>red <span class="token constant">STORYBOOK_DATA_KEY</span><span class="token operator">=</span><span class="token number">12345</span> npm run storybook
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>그런 다음 우리는 아래와 같이 미리보기 JavaScript 코드 어디에서든 이 환경 변수에 액세스할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">STORYBOOK_THEME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">STORYBOOK_DATA_KEY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>단순히 테이블 태그를 마크다운 형식으로 바꿔주시면 감사하겠습니다.</p>
<p>그럼 이 환경 변수를 이야기 내에서도 어디에서든 액세스할 수 있어요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// "your-framework"을(를) 사용하는 프레임워크의 이름으로 바꾸세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./MyComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> ExampleStory<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  args<span class="token operator">:</span> <span class="token punctuation">{</span>
    propertyA<span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">STORYBOOK_DATA_KEY</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vite로" tabindex="-1"><a class="header-anchor" href="#vite로" aria-hidden="true">#</a> Vite로</h4>
<p>기본적으로 Storybook은 Node.js 글로벌 객체인 process.env와 같은 것을 출력하지 않는 Vite 빌더를 제공해요. Storybook에서 환경 변수에 액세스하려면(import.meta.env를 사용해야 해요. 예를 들어:```</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 'your-framework'를 사용하는 프레임워크의 이름으로 바꿔주세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./MyComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> ExampleStory<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  args<span class="token operator">:</span> <span class="token punctuation">{</span>
    propertyA<span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">STORYBOOK_DATA_KEY</span><span class="token punctuation">,</span>
    propertyB<span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_CUSTOM_VAR</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>build-storybook로 Storybook을 빌드할 때 이 환경 변수들을 전달할 수도 있습니다.</p>
<p>그렇게 하면 이들은 Storybook의 정적 버전에 하드코딩됩니다.</p>
<h3 id="storybook-구성-사용하기" tabindex="-1"><a class="header-anchor" href="#storybook-구성-사용하기" aria-hidden="true">#</a> Storybook 구성 사용하기```</h3>
<p>추가로 Storybook 구성 파일(.storybook/main.js|.ts)을 확장하여 특정 변수(예: API URL 등)를 정의할 수 있는 구성 필드를 제공할 수도 있습니다. 아래는 예시입니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크에 맞게 your-framework 부분을 해당 프레임워크로 변경하세요 (예: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/*
   * 👇 `config` 인자에는 이미 존재하는 다른 환경 변수가 모두 포함됩니다.
   * `.env` 파일에 구성되었든, 명령줄에서 구성되었든 모두 해당됩니다.
   */</span>
  <span class="token function-variable function">env</span><span class="token operator">:</span> <span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>config<span class="token punctuation">,</span>
    <span class="token constant">EXAMPLE_VAR</span><span class="token operator">:</span> <span class="token string">'Storybook에서 구성한 환경 변수'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook가 로드될 때, 환경 변수들에 접근할 수 있는 기능이 활성화되며, 이를 활용하여 스토리에서 환경 파일을 다루는 것과 유사하게 작업할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크의 이름으로 your-framework 부분을 해당 프레임워크의 이름으로 변경하세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./MyComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Default<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  args<span class="token operator">:</span> <span class="token punctuation">{</span>
    exampleProp<span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">EXAMPLE_VAR</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="환경-변수를-사용하여-브라우저-선택하기" tabindex="-1"><a class="header-anchor" href="#환경-변수를-사용하여-브라우저-선택하기" aria-hidden="true">#</a> 환경 변수를 사용하여 브라우저 선택하기</h3>
<p>Storybook을 사용하면 이야기를 미리 보려는 브라우저를 선택할 수 있습니다. .env 파일 항목을 통해 또는 직접 storybook 스크립트에서 선택할 수 있습니다.</p>
<p>아래 표는 사용 가능한 옵션을 나열합니다:</p>
<h2 id="문제-해결" tabindex="-1"><a class="header-anchor" href="#문제-해결" aria-hidden="true">#</a> 문제 해결</h2>
<h3 id="환경-변수가-작동하지-않습니다" tabindex="-1"><a class="header-anchor" href="#환경-변수가-작동하지-않습니다" aria-hidden="true">#</a> 환경 변수가 작동하지 않습니다</h3>
<p>만약 프레임워크별 환경 변수(예: VUE_APP_)를 사용하려고 시도하고 계시다면, Storybook과 당신의 프레임워크가 특정 구성을 가지고 있어 해당 환경 변수를 인식하고 사용하지 못하게 될 수 있다는 점에 대해 문제가 발생할 수 있습니다. 이와 유사한 상황에 직면한다면, 프레임워크 구성을 조정하여 해당 환경 변수를 인식하고 사용할 수 있도록 해야 할 수도 있습니다. 예를 들어, Vite 기반 프레임워크를 사용하고 있다면, 구성 파일을 확장하여 envPrefix 옵션을 활성화할 수 있습니다. 다른 프레임워크들도 유사한 방식을 요구할 수 있습니다.</p>
</div></template>
