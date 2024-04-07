<template><div><p>구성 요소는 종종 사용자가 기대하는 대로 렌더링되기 위해 이미지, 비디오, 글꼴 및 기타 에셋에 의존합니다. 이러한 에셋을 이야기 파일에서 사용하는 방법은 여러 가지가 있습니다.</p>
<h3 id="이야기에-에셋-가져오기" tabindex="-1"><a class="header-anchor" href="#이야기에-에셋-가져오기" aria-hidden="true">#</a> 이야기에 에셋 가져오기</h3>
<p>미디어 에셋을 가져오는 것은 간단합니다. 기본 설정으로 작동합니다. 그러나 사용자 정의 웹팩 구성을 사용하는 경우 필요한 파일을 처리하기 위해 파일 로더를 추가해야 합니다.</p>
<p>이후에는 이야기에서 어떤 에셋이든 사용할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> imageFile <span class="token keyword">from</span> <span class="token string">'./static/image.png'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./MyComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> image <span class="token operator">=</span> <span class="token punctuation">{</span>
  src<span class="token operator">:</span> imageFile<span class="token punctuation">,</span>
  alt<span class="token operator">:</span> <span class="token string">'my image'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> WithAnImage<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token punctuation">{</span>image<span class="token punctuation">.</span>src<span class="token punctuation">}</span> alt<span class="token operator">=</span><span class="token punctuation">{</span>image<span class="token punctuation">.</span>alt<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="storybook-configuration을-통해-정적-파일-제공" tabindex="-1"><a class="header-anchor" href="#storybook-configuration을-통해-정적-파일-제공" aria-hidden="true">#</a> Storybook Configuration을 통해 정적 파일 제공</h3>
<p>Storybook을 통해 정적 파일을 제공하는 것을 권장합니다. 이를 통해 컴포넌트가 로드에 필요한 자산을 항상 가지고 있을 수 있습니다. 로고, 글꼴 및 아이콘과 같이 컴포넌트가 자주 사용하는 자산에 대해 이 기술을 권장합니다.</p>
<p>Storybook을 시작할 때 정적 파일이 있는 디렉터리(또는 디렉터리 목록)를 구성하세요. 정적Dirs 구성 요소를 사용하여 주요 Storybook 구성 파일(.storybook/main.js|ts 등)에서 디렉터리를 지정하세요:```</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용중인 프레임워크 (예: react-webpack5, vue3-vite)로 table 태그를 Markdown 형식으로 변경하세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  staticDirs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../public'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//👈 Storybook에서 정적 자산 폴더를 구성합니다</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서 ../public은 정적 디렉토리입니다. 이제 컴포넌트 또는 스토리에서 이를 사용할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./MyComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token comment">// "public" 디렉토리에 image.png가 있는 것으로 가정합니다.</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> WithAnImage<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"/image.png"</span> alt<span class="token operator">=</span><span class="token string">"my image"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>하나의 디렉토리 대신 공백 없이 쉼표로 구분된 디렉토리 목록을 전달할 수도 있습니다.```</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용하는 프레임워크에 따라 framework를 react-webpack5, vue3-vite 등으로 바꾸세요.</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  staticDirs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../public'</span><span class="token punctuation">,</span> <span class="token string">'../static'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또는 디렉터리를 정의하는 구성 객체를 사용할 수도 있어요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용하는 프레임워크에 따라 framework를 react-webpack5, vue3-vite 등으로 바꾸세요.</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  staticDirs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> from<span class="token operator">:</span> <span class="token string">'../my-custom-assets/images'</span><span class="token punctuation">,</span> to<span class="token operator">:</span> <span class="token string">'/assets'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cdn에서-자산-참조하기" tabindex="-1"><a class="header-anchor" href="#cdn에서-자산-참조하기" aria-hidden="true">#</a> CDN에서 자산 참조하기</h3>
<p>온라인 CDN에 파일을 업로드하고 해당 파일을 참조해주세요. 이 예시에서는 플레이스홀더 이미지 서비스를 사용하고 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./MyComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> WithAnImage<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
    <span class="token operator">!</span><span class="token punctuation">[</span>My <span class="token constant">CDN</span> placeholder<span class="token punctuation">]</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>storybook<span class="token punctuation">.</span>js<span class="token punctuation">.</span>org<span class="token operator">/</span>images<span class="token operator">/</span>placeholders<span class="token operator">/</span>350x150<span class="token punctuation">.</span>png<span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="절대-경로와-상대-경로" tabindex="-1"><a class="header-anchor" href="#절대-경로와-상대-경로" aria-hidden="true">#</a> 절대 경로와 상대 경로</h3>
<p>가끔씩, Storybook을 https://example.com/storybook 과 같은 하위 경로에 배포하고 싶을 수도 있습니다.</p>
<p>이 경우에는 모든 이미지와 미디어 파일을 상대 경로로 가져야 합니다. 그렇지 않으면 브라우저가 해당 파일을 찾을 수 없습니다.</p>
<p>정적 콘텐츠를 가져와서 로드하는 경우에는 자동으로 처리되므로 따로 할 일이 없습니다.</p>
<p>Storybook과 함께 정적 디렉토리에 에셋을 제공하는 경우 이미지를 로드하기 위해 상대 경로를 사용하거나 base 요소를 사용해야 합니다.</p>
<h3 id="스토리에서-폰트-참조하기" tabindex="-1"><a class="header-anchor" href="#스토리에서-폰트-참조하기" aria-hidden="true">#</a> 스토리에서 폰트 참조하기</h3>
<p>Storybook을 정적 폴더에서 에셋을 제공하도록 구성한 후에 Storybook에서 해당 에셋을 참조할 수 있습니다. 예를 들어, 이야기에 사용자 정의 글꼴을 참조하고 적용할 수 있습니다. 이를 위해 구성 디렉토리 (예: .storybook) 내에 preview-head.html 파일을 생성하고 <code v-pre>link</code> 태그를 추가하여 글꼴을 참조하면 됩니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 정적 디렉토리 또는 인터넷에서 제공되는 정적 파일 가져오기 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 예<span class="token operator">:</span> <span class="token string">'main.js|ts'</span>는 staticDirs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../public'</span><span class="token punctuation">]</span>로 구성되어 있으며 글꼴은 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">public</span><span class="token template-punctuation string">`</span></span> 디렉토리 내의 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">fonts</span><span class="token template-punctuation string">`</span></span> 디렉토리에 있습니다<span class="token punctuation">.</span> <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"preload"</span> href<span class="token operator">=</span><span class="token string">"/fonts/my-font.woff2"</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 또는 사용자 정의 head<span class="token operator">-</span>tag JavaScript를 로드할 수도 있습니다<span class="token operator">:</span> <span class="token operator">--</span><span class="token operator">></span>

<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://use.typekit.net/xxxyyy.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    Typekit<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
