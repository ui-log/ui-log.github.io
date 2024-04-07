<template><div><p>Storybook은 React, Vue, Angular, Web Components, Svelte 및 더 많은 웹 프레임워크를 지원하기 위해 설계되었습니다. 이 안내서는 Storybook에 새로운 프레임워크 지원을 추가하는 방법을 안내합니다.</p>
<h2 id="새로운-프레임워크-구조-설정" tabindex="-1"><a class="header-anchor" href="#새로운-프레임워크-구조-설정" aria-hidden="true">#</a> 새로운 프레임워크 구조 설정</h2>
<p>첫 번째로 해야 할 일은 프레임워크 지원을 위한 구조를 별도의 저장소에 만드는 것입니다.</p>
<p>저희는 Storybook 모노레포와 동일한 프로젝트 구조를 채택하는 것을 권장합니다. 해당 구조에는 프레임워크 패키지(app/<code v-pre>framework</code>)와 예제 앱(examples/<code v-pre>framework</code>-kitchen-sink)과 필요한 다른 문서 및 설정이 포함됩니다.</p>
<p>약간 필요 이상의 계층 구조를 가지고 있는 것처럼 보일 수 있습니다. 그러나 이 구조는 Storybook의 모노레포가 구성된 방식을 반영하므로 Storybook의 도구를 재사용할 수 있습니다. 또한 원한다면 나줘도 Storybook 모노레포로 프레임워크를 이동하는 것을 더 쉽게 만들어줍니다.</p>
<p>Storybook의 도구를 재사용할 수 있다. 여기에서 시작할 수 있는 보일러플레이트가 있습니다.</p>
<h2 id="프레임워크-아키텍처" tabindex="-1"><a class="header-anchor" href="#프레임워크-아키텍처" aria-hidden="true">#</a> 프레임워크 아키텍처</h2>
<p>일반적으로 Storybook에서 새로운 프레임워크를 지원하는 것은 주로 두 가지 측면으로 구성됩니다:</p>
<ul>
<li>서버 구성하기. 스토리북에서 서버는 storybook dev 또는 storybook build를 실행할 때 실행되는 노드 프로세스입니다. 서버를 구성하는 것은 일반적으로 프레임워크별로 babel 및 웹팩을 구성하는 것을 의미합니다.</li>
<li>클라이언트 구성하기. 클라이언트는 브라우저에서 실행되는 코드이며, 이를 구성하는 것은 프레임워크별로 스토리 렌더링 함수를 제공하는 것을 의미합니다.</li>
</ul>
<h2 id="서버-구성하기" tabindex="-1"><a class="header-anchor" href="#서버-구성하기" aria-hidden="true">#</a> 서버 구성하기</h2>
<p>스토리북에는 일반적으로 파일 로딩을 위한 babel/웹팩 구성인 프리셋이라는 개념이 있습니다. 프레임워크가 자체 파일 형식(예: &quot;.vue&quot;)을 가지고 있는 경우, 로드 시에 JavaScript 파일로 변환해야 할 수도 있습니다. 모든 프레임워크 사용자가 이를 필요로 한다고 가정한다면, 해당 기능을 프레임워크에 추가해야 합니다. 지금까지 스토리북에 추가된 모든 프레임워크는 Storybook의 핵심 구성이 매우 최소화되어 있기 때문에 이 작업을 수행했습니다.</p>
<h3 id="패키지-구조" tabindex="-1"><a class="header-anchor" href="#패키지-구조" aria-hidden="true">#</a> 패키지 구조</h3>
<p>Storybook의 framework preset을 추가하기 전에 Storybook의 패키지 구조를 이해하는 것이 도움이 됩니다. 일반적으로 각 framework는 package.json에서 두 가지 실행 파일을 노출합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"bin"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"storybook"</span><span class="token operator">:</span> <span class="token string">"./bin/index.js"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"build-storybook"</span><span class="token operator">:</span> <span class="token string">"./bin/build.js"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이러한 스크립트는 @storybook/core/server에 옵션 객체를 전달하며, 이 라이브러리는 Storybook의 framework-independent 코드를 추상화합니다.</p>
<p>예를 들어, storybook dev로 개발 서버를 시작하는 보일러플레이트는 다음과 같습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> buildDev <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/core/server'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> options <span class="token keyword">from</span> <span class="token string">'./options'</span><span class="token punctuation">;</span>

<span class="token function">buildDev</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>따라서 프레임워크 프리셋을 추가하는 본질은 그 옵션 객체를 채우는 것뿐입니다.</p>
<h3 id="서버-옵션" tabindex="-1"><a class="header-anchor" href="#서버-옵션" aria-hidden="true">#</a> 서버 옵션</h3>
<p>위에서 설명한 대로, 서버 옵션 객체는 서버를 구성하는 중요한 작업을 합니다.</p>
<p>@storybook/vue의 옵션 정의를 살펴봅시다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> sync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'read-pkg-up'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  packageJson<span class="token operator">:</span> <span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">{</span> cwd<span class="token operator">:</span> __dirname <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>packageJson<span class="token punctuation">,</span>
  framework<span class="token operator">:</span> <span class="token string">'vue'</span><span class="token punctuation">,</span>
  frameworkPresets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">require</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'./framework-preset-vue.js'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>framework 옵션의 값(즉, 'vue')은 애드온에 전달되어 특정 작업을 수행할 수 있게 합니다.</p>
<p>이 파일의 본질은 framework 프리셋인데, 이는 표준 Storybook 프리셋입니다. Storybook 모노 레포지토리에서 framework 패키지들을 확인할 수 있습니다(예: React, Vue, Web Components). 이곳에서 framework별 사용자 정의 내용을 확인할 수 있습니다.</p>
<p>당신의 사용자 정의 프레임워크를 개발하는 동안 Storybook에서 유지 관리되지 않는 경우 frameworkPath 키를 사용하여 위치 파일의 경로를 지정할 수 있어요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> sync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'read-pkg-up'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  packageJson<span class="token operator">:</span> <span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">{</span> cwd<span class="token operator">:</span> __dirname <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>packageJson<span class="token punctuation">,</span>
  framework<span class="token operator">:</span> <span class="token string">'my-framework'</span><span class="token punctuation">,</span>
  frameworkPath<span class="token operator">:</span> <span class="token string">'@my-framework/storybook'</span><span class="token punctuation">,</span>
  frameworkPresets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">require</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'./framework-preset-my-framework.js'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>frameworkPath에 상대 경로를 추가할 수 있어요. 단, 이들은 기본적으로 Storybook 구성 디렉토리(즉, .storybook)에서 해결됨을 잊지 마세요.</p>
<p>frameworkPath가 당신의 프레임워크 앱 내의 dist/client/index.js 파일로 끝나도록 해주세요.</p>
<h2 id="클라이언트-구성" tabindex="-1"><a class="header-anchor" href="#클라이언트-구성" aria-hidden="true">#</a> 클라이언트 구성</h2>
<p>클라이언트를 구성하려면 프레임워크별 렌더 함수를 제공해야 합니다. 자세한 내용에 들어가기 전에 사용자가 작성한 스토리가 화면에 렌더되는 방식을 이해하는 것이 중요합니다.</p>
<h3 id="렌더-가능한-객체" tabindex="-1"><a class="header-anchor" href="#렌더-가능한-객체" aria-hidden="true">#</a> 렌더 가능한 객체</h3>
<p>Storybook 스토리는 &quot;렌더 가능한 객체&quot;를 반환하는 ES6 객체입니다.</p>
<p>다음의 React 스토리를 살펴보세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Sample <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>Button label<span class="token operator">=</span><span class="token string">"hello button"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 경우, 렌더링 가능한 객체는 React element인 <code v-pre>Button .../</code> 입니다.</p>
<p>대부분의 다른 프레임워크에서는 렌더링 가능한 객체가 사실 일반 JavaScript 객체인 것이 일반적입니다.</p>
<p>다음의 가상 예시를 살펴보세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// your-framework 이름으로 해당하는 프레임워크의 이름과 변경하세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Sample<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    template<span class="token operator">:</span> <span class="token string">'&lt;button :label=label />'</span><span class="token punctuation">,</span>
    data<span class="token operator">:</span> <span class="token punctuation">{</span>
      label<span class="token operator">:</span> <span class="token string">'hello button'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 &quot;렌더링 가능한 객체&quot;의 디자인은 프레임워크별이며, 이 이디엄과 최대한 일치하는 것이 이상적이다.</p>
<h3 id="렌더-함수" tabindex="-1"><a class="header-anchor" href="#렌더-함수" aria-hidden="true">#</a> 렌더 함수</h3>
<p>프레임워크의 렌더 기능은 렌더링 가능한 객체를 DOM 노드로 변환하는 역할을 맡습니다. 일반적으로 다음과 같은 형태입니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> rootElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">renderMain</span><span class="token punctuation">(</span><span class="token punctuation">{</span> storyFn <span class="token punctuation">}</span><span class="token operator">:</span> RenderMainArgs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> storyObj <span class="token operator">=</span> <span class="token function">storyFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span>storyObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  rootElement<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> html<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="패키지-구조-1" tabindex="-1"><a class="header-anchor" href="#패키지-구조-1" aria-hidden="true">#</a> 패키지 구조</h3>
<p>클라이언트 측에서 중요한 파일은 src/client/preview.js 입니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> start <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/preview-api'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">'./globals'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> render <span class="token keyword">from</span> <span class="token string">'./render'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> api <span class="token operator">=</span> <span class="token function">start</span><span class="token punctuation">(</span>render<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// the boilerplate code</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>일반적으로 globals 파일은 클라이언트 측 코드(예: 애드온에서 제공하는 데코레이터)가 어떤 프레임워크에서 실행 중인지 이해할 필요가 있을 때 참조할 수 있는 단일 전역 변수를 설정합니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> global <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/global'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> window<span class="token operator">:</span> globalWindow <span class="token punctuation">}</span> <span class="token operator">=</span> global<span class="token punctuation">;</span>

globalWindow<span class="token punctuation">.</span><span class="token constant">STORYBOOK_ENV</span> <span class="token operator">=</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>start 함수는 Storybook의 프레임워크에 독립적인 클라이언트 측(브라우저) 코드를 추상화하며 위에서 정의한 render 함수를 취합니다. render 함수의 예는 Storybook 모노 저장소의 React, Vue, Angular, Web Components를 참조하십시오.</p>
</div></template>
