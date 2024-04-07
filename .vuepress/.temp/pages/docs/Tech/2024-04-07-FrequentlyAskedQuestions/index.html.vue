<template><div><p>자주 묻는 질문에 대한 답변이 여기 있습니다. 궁금한 점이 있으시면 GitHub 토론에서 질문해 주세요.</p>
<h3 id="에러-angular-json-파일을-찾을-수-없음" tabindex="-1"><a class="header-anchor" href="#에러-angular-json-파일을-찾을-수-없음" aria-hidden="true">#</a> 에러: angular.json 파일을 찾을 수 없음</h3>
<p>Storybook은 단일 프로젝트와 다중 프로젝트 Angular 작업 환경 모두에 설정할 수 있습니다. 프로젝트용 Storybook을 설정하려면 angular.json 파일이 있는 워크스페이스의 루트에서 npx storybook@latest init 명령을 실행하세요. 초기화 중에 .storybook 폴더가 생성되고 선택한 프로젝트에 대한 Storybook 구성이 추가된 angular.json 파일이 편집됩니다. 모든 프로젝트를 올바르게 감지하려면 반드시 루트 레벨에서 명령을 실행해야 합니다.</p>
<h2 id="angular-ivy를-사용하지-않으려면-어떻게-해야-하나요" tabindex="-1"><a class="header-anchor" href="#angular-ivy를-사용하지-않으려면-어떻게-해야-하나요" aria-hidden="true">#</a> Angular Ivy를 사용하지 않으려면 어떻게 해야 하나요?</h2>
<p>만약 Angular Ivy에 문제가 발생한다면 main.js에서 비활성화할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">stories</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">/* ... */</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">addons</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">/* ... */</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">framework</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'@storybook/angular'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">enableIvy</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="angular-ngcc에서-탈퇴하는-방법은-무엇인가요" tabindex="-1"><a class="header-anchor" href="#angular-ngcc에서-탈퇴하는-방법은-무엇인가요" aria-hidden="true">#</a> Angular ngcc에서 탈퇴하는 방법은 무엇인가요?</h2>
<p>만약 ngcc를 설치 후에 탈퇴하고자 한다면 다음과 같이 비활성화할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">stories</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">/* ... */</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">addons</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">/* ... */</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">framework</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'@storybook/angular'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">enableNgcc</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>아이비(Ivy)와 관련된 문제가 있다면, Angular의 미래 릴리스에서 뷰 엔진(View Engine) 지원이 중단될 예정이므로 GitHub 이슈 트래커에서 문제를 보고해주세요.</p>
<h2 id="create-react-app로-커버리지-테스트를-실행하고-스토리를-제외하려면-어떻게-해야-하나요" tabindex="-1"><a class="header-anchor" href="#create-react-app로-커버리지-테스트를-실행하고-스토리를-제외하려면-어떻게-해야-하나요" aria-hidden="true">#</a> Create React App로 커버리지 테스트를 실행하고 스토리를 제외하려면 어떻게 해야 하나요?</h2>
<p>Create React App은 패키지.json에 Jest 옵션을 지정하는 것을 허용하지 않지만, 명령행 인수와 함께 jest를 실행할 수 있습니다:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>


```js
npm test -- --coverage --collectCoverageFrom='["src/**/*.{js,jsx}","!src/**/stories/*"]'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="storybook을-설정하여-next-js와-webpack-구성을-공유하는-방법은-무엇인가요" tabindex="-1"><a class="header-anchor" href="#storybook을-설정하여-next-js와-webpack-구성을-공유하는-방법은-무엇인가요" aria-hidden="true">#</a> Storybook을 설정하여 Next.js와 Webpack 구성을 공유하는 방법은 무엇인가요?</h2>
<p>보통 Webpack 규칙을 next.config.js 및 .storybook/main.js 파일에서 모두 require()하는 파일에 배치하여 재사용할 수 있습니다. 예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">webpackFinal</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">baseConfig</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> nextConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'/path/to/next.config.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// nextConfig에서 webpack 설정을 storybook이 사용할 것에 병합</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>baseConfig<span class="token punctuation">,</span> <span class="token operator">...</span>nextConfig <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="특별한-환경에서-모듈-해상도-문제를-어떻게-수정하나요" tabindex="-1"><a class="header-anchor" href="#특별한-환경에서-모듈-해상도-문제를-어떻게-수정하나요" aria-hidden="true">#</a> 특별한 환경에서 모듈 해상도 문제를 어떻게 수정하나요?</h2>
<p>Yarn Plug-n-Play를 사용하거나 프로젝트가 모노 저장소 환경에서 설정된 경우, Storybook을 실행할 때 다음과 유사한 모듈 해상도 문제에 직면할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">WARN</span>   Failed to load preset<span class="token operator">:</span> <span class="token string">"@storybook/react-webpack5/preset"</span>`
Required <span class="token keyword">package</span><span class="token operator">:</span> @storybook<span class="token operator">/</span>react<span class="token operator">-</span><span class="token function">webpack5</span> <span class="token punctuation">(</span>via "@storybook<span class="token operator">/</span>react<span class="token operator">-</span>webpack5<span class="token operator">/</span>preset<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>이를 해결하기 위해 Storybook 구성 파일인(.storybook/main.js|ts) 내에서 패키지 이름을 다음과 같이 감싸주면 됩니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 당신이 사용하는 프레임워크로 대체하십시오 (예: react-webpack5, vue3-vite)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">'path'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> getAbsolutePath <span class="token operator">=</span> <span class="token punctuation">(</span>packageName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=></span>
  path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span><span class="token keyword">require</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>packageName<span class="token punctuation">,</span> <span class="token string">'package.json'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  framework<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 위에서 가져온 것과 동일한 것으로 대체하십시오.</span>
    name<span class="token operator">:</span> <span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token string">'@storybook/your-framework'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    options<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  addons<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//👇 Storybook의 애드온과 프레임워크를 참조할 때 getAbsolutePath 사용</span>
    <span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token string">'@storybook/addon-essentials'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="스토리북에서-새로운-react-context-root-api를-설정하는-방법" tabindex="-1"><a class="header-anchor" href="#스토리북에서-새로운-react-context-root-api를-설정하는-방법" aria-hidden="true">#</a> 스토리북에서 새로운 React Context Root API를 설정하는 방법</h2>
<p>만약 설치된 React 버전이 18.0.0 이상이라면, 새로운 React Root API가 자동으로 사용되며 최신 React 동시성 기능을 사용할 수 있습니다.</p>
<p>다음 속성을 .storybook/main.js 파일에 설정하여 새로운 React Root API를 비활성화할 수 있습니다:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>


```js
export default {
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      legacyRootApi: true,
    },
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="왜-애드온-채널이-없을까요" tabindex="-1"><a class="header-anchor" href="#왜-애드온-채널이-없을까요" aria-hidden="true">#</a> 왜 애드온 채널이 없을까요?</h2>
<p>애드온이 &quot;채널&quot;에 액세스하려고 시도하지만 채널이 설정되지 않은 경우가 일반적인 오류입니다. 몇 가지 다른 경우에 발생할 수 있습니다:</p>
<ul>
<li>Jest와 같은 브라우저 환경이 아닌 곳에서(예: setOptions를 호출하는 등) 애드온 채널에 액세스하려고 할 때입니다. 채널 모의 객체를 추가해야 합니다:
import { addons, mockChannel } from <code v-pre>@storybook/preview-api</code>;</li>
</ul>
<p>addons.setChannel(mockChannel());</p>
<ul>
<li>React Native에서는 #1192에 문서화된 특별한 경우입니다.</li>
</ul>
<h2 id="캔버스-패널에서-컨트롤이-보이지-않는-이유는-무엇인가요-그리고-문서에서는-왜-보이는-거죠" tabindex="-1"><a class="header-anchor" href="#캔버스-패널에서-컨트롤이-보이지-않는-이유는-무엇인가요-그리고-문서에서는-왜-보이는-거죠" aria-hidden="true">#</a> 캔버스 패널에서 컨트롤이 보이지 않는 이유는 무엇인가요? 그리고 문서에서는 왜 보이는 거죠?</h2>
<p>Storybook의 종속성을 수동으로 추가하고 있다면, 프로젝트에 @storybook/addon-controls 종속성을 포함하고 .storybook/main.js에서 다음과 같이 참조해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">addons</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@storybook/addon-controls'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="컴포지트-storybook에서-애드온이-작동하지-않는-이유는-무엇인가요" tabindex="-1"><a class="header-anchor" href="#컴포지트-storybook에서-애드온이-작동하지-않는-이유는-무엇인가요" aria-hidden="true">#</a> 컴포지트 Storybook에서 애드온이 작동하지 않는 이유는 무엇인가요?</h2>
<p>새로운 기능인 composition은 버전 6.0에서 출시되었고, 아직 몇 가지 제한 사항이 있습니다.</p>
<p>지금은 합성 Storybook에서 사용 중인 애드온이 작동하지 않습니다.</p>
<p>이 제한을 극복하기 위해 노력하고 있으며, 곧 합성되지 않은 Storybook을 다루는 것처럼 그들을 사용할 수 있게 될 것입니다.</p>
<h2 id="로컬-스토리가-없는-스토리북을-가질-수-있나요" tabindex="-1"><a class="header-anchor" href="#로컬-스토리가-없는-스토리북을-가질-수-있나요" aria-hidden="true">#</a> 로컬 스토리가 없는 스토리북을 가질 수 있나요?</h2>
<p>Storybook은 프로젝트에 정의된 적어도 하나의 로컬 스토리(또는 문서 페이지)가 있어야 작동합니다. 여기서 로컬이란 프로젝트의 .storybook/main.js 구성에 참조된 .stories.* 또는 .mdx 파일을 의미합니다.</p>
<p>여러 개의 Storybook이 있는 Storybook 구성 시나리오에서 여분의 스토리가 없는 별도의 Storybook을 가져야 하며, 이는 프로젝트의 모든 다른 Storybook에 대한 데모/문서 목적의 &quot;접착제&quot; 역할을 합니다. 이를 위해 다음 단계를 수행할 수 있습니다:</p>
<p>Introduce a single .mdx docs page (addon-essentials or addon-docs required), that serves as an Introduction page, like so:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code># Welcome

Some description here
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음 이를 활용하여 Storybook 설정 파일을 만들어 주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 적어도 한 로컬 스토리/페이지를 여기에서 정의하세요</span>
  <span class="token literal-property property">stories</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../Introduction.mdx'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 조합된 Storybooks를 여기에서 정의하세요</span>
  <span class="token literal-property property">refs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">firstProject</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'첫 번째'</span><span class="token punctuation">,</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'some-url'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">secondProject</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'두 번째'</span><span class="token punctuation">,</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'other-url'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="최신-버전의-storybook과-호환되는-커뮤니티-애드온은-무엇입니까" tabindex="-1"><a class="header-anchor" href="#최신-버전의-storybook과-호환되는-커뮤니티-애드온은-무엇입니까" aria-hidden="true">#</a> 최신 버전의 Storybook과 호환되는 커뮤니티 애드온은 무엇입니까?</h2>
<p>Storybook 버전 6.0부터, 개발 워크플로우를 간소화하는 멋진 기능들이 도입되었습니다.</p>
<p>안녕하세요! 위 내용에 따르면, 저희 커뮤니티에서 만든 애드온을 사용하려고 계획 중이시라면, 해당 애드온 중 일부가 Storybook의 구버전과 호환되는 경우가 있을 수 있다는 점을 고려해야 합니다.</p>
<p>이 문제에 대해 더 나은 대응 방안을 제공하고자 노력하고 있지만, 그 동안에는 예기치 않은 문제가 발생하지 않도록 조심해 주시기 바랍니다. 최신 버전의 Storybook과 함께 작동하도록 업데이트해야 할 애드온 목록을 확장하기 위해 여러분의 참여를 부탁드립니다. 아래 GitHub 이슈에 의견을 남겨 주시면 저희가 정보를 수집할 수 있습니다.</p>
<h2 id="이전-버전의-storybook-문서를-찾을-수-있을까요" tabindex="-1"><a class="header-anchor" href="#이전-버전의-storybook-문서를-찾을-수-있을까요" aria-hidden="true">#</a> 이전 버전의 Storybook 문서를 찾을 수 있을까요?</h2>
<p>6.0 버전이 출시되면서 문서도 업데이트되었습니다. 그러나 이전 문서가 삭제된 것은 아닙니다. Storybook 이주 프로세스를 도와주기 위해 이 표의 내용을 저희 이주 안내서와 함께 사용하시면 됩니다.</p>
<p>우리는 Storybook에 중요한 이정표였던 버전 5.3과 5.0만 다루고 있어요. 더 과거로 돌아가고 싶으시면, monorepo에서 특정 릴리스를 확인해보셔야 해요.</p>
<h2 id="내-툴바나-애드온에-사용할-아이콘은-무엇이-있나요" tabindex="-1"><a class="header-anchor" href="#내-툴바나-애드온에-사용할-아이콘은-무엇이-있나요" aria-hidden="true">#</a> 내 툴바나 애드온에 사용할 아이콘은 무엇이 있나요?</h2>
<p>@storybook/components 패키지를 통해 UI를 사용자 정의할 수 있는 아이콘 세트를 얻을 수 있어요. 아래 표를 참고하여 애드온을 작성하거나 Storybook 글로벌 타입을 정의할 때 사용해보세요. 이 스토리를 통해 각 아이콘의 모습을 확인해보세요.</p>
<h2 id="storybook-프로덕션-빌드에서-미리보기-없음-오류가-나타나요" tabindex="-1"><a class="header-anchor" href="#storybook-프로덕션-빌드에서-미리보기-없음-오류가-나타나요" aria-hidden="true">#</a> Storybook 프로덕션 빌드에서 &quot;미리보기 없음&quot; 오류가 나타나요</h2>
<p>만약 production build of Storybook을 확인하기 위해 serve 패키지를 사용 중이라면, 해당 오류가 발생할 수 있습니다. 이는 serve가 리라이트를 처리하는 방식과 관련이 있습니다. 예를 들어, /iframe.html은 /iframe으로 다시 작성되고 해당 오류가 발생할 수 있습니다.</p>
<p>대신 http-server를 사용하고 다음 명령어를 사용하여 Storybook을 미리보기하는 것을 권장합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx http<span class="token operator">-</span>server storybook<span class="token operator">-</span><span class="token keyword">static</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="vue-2와-함께-storybook을-사용할-수-있을까요" tabindex="-1"><a class="header-anchor" href="#vue-2와-함께-storybook을-사용할-수-있을까요" aria-hidden="true">#</a> Vue 2와 함께 Storybook을 사용할 수 있을까요?</h2>
<p>Vue 2는 2023년 12월 31일부로 End of Life(EOL) 상태로 전환되었으며 Vue 팀에서 더 이상 지원되지 않습니다. 이에 따라, Storybook 8 이상에서 Vue 2를 지원하는 것을 중단했으며 해당 버전을 지원하는 새로운 버전을 릴리스하지 않을 것입니다. Vue 3로 프로젝트를 업그레이드하는 것을 권장하며, Storybook이 완전히 지원합니다. 그렇지 않은 경우, 다음 명령어를 사용하여 Storybook 7의 최신 버전을 설치하여 Vue 2에서 Storybook을 계속 사용할 수 있습니다:</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npx storybook@^7 init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="왜-나의-코드-블록이-storybook-mdx에서-강조되지-않을까요" tabindex="-1"><a class="header-anchor" href="#왜-나의-코드-블록이-storybook-mdx에서-강조되지-않을까요" aria-hidden="true">#</a> 왜 나의 코드 블록이 Storybook MDX에서 강조되지 않을까요</h2>
<p>기본 설정으로 Storybook은 일부 언어(Javascript, Markdown, CSS, HTML, Typescript, GraphQL)에 대한 구문 강조 기능을 제공합니다. 현재, 사용자 정의 언어를 등록하여 구문 강조를 받으려고 할 때 알려진 제한이 있습니다. 이 문제에 대한 해결책을 개발 중이며 가능한 경우 이 섹션을 업데이트하겠습니다.</p>
<h2 id="storybook에서-mdx-이야기가-작동하지-않는-이유는-무엇인가요" tabindex="-1"><a class="header-anchor" href="#storybook에서-mdx-이야기가-작동하지-않는-이유는-무엇인가요" aria-hidden="true">#</a> Storybook에서 MDX 이야기가 작동하지 않는 이유는 무엇인가요?</h2>
<p>MDX는 코드의 형식이 줄 바꿈과 관련하여 까다로운 경향이 있습니다. 특히 코드 블록에서 이는 특히 그렇습니다. 예를 들어, 다음은 작동하지 않을 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>style<span class="token operator">></span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  .class1 {
    ...
  }

  .class2 {
    ...
  }
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>하지만 이것은 작동합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>style<span class="token operator">></span>
  <span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    .class1 {
      ...
    }

    .class2 {
      ...
    }
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>더 많은 정보를 보려면 다음 문제를 참조하세요.</p>
<h2 id="storybook의-msw-애드온으로-목업된-graphql-쿼리들이-왜-실패하는-걸까요" tabindex="-1"><a class="header-anchor" href="#storybook의-msw-애드온으로-목업된-graphql-쿼리들이-왜-실패하는-걸까요" aria-hidden="true">#</a> Storybook의 MSW 애드온으로 목업된 GraphQL 쿼리들이 왜 실패하는 걸까요?</h2>
<p>Vue 3를 사용 중이라면 @vue/apollo-composable를 설치해야 합니다. Svelte를 사용 중이라면 @rollup/plugin-replace를 설치하고 rollup.config 파일을 다음과 같이 업데이트해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 보일러플레이트 임포트</span>

<span class="token keyword">import</span> replace <span class="token keyword">from</span> <span class="token string">'@rollup/plugin-replace'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> production <span class="token operator">=</span> <span class="token operator">!</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">ROLLUP_WATCH</span><span class="token punctuation">;</span>

<span class="token comment">// 나머지 rollup.config 구현</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">'src/main.js'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">sourcemap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">'iife'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'app'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">'public/build/bundle.js'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 다른 플러그인들</span>

    <span class="token comment">// replace 플러그인을 설정하여 GraphQL 쿼리가 제대로 작동하도록 함</span>
    <span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token string-property property">'process.env.NODE_ENV'</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">'development'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Angular에서 가장 일반적인 문제는 mockServiceWorker.js 파일의 위치입니다. 이 예제를 참고해보세요.</p>
<h2 id="storybook의-msw-애드온을-사용하여-다른-graphql-제공-업체를-사용할-수-있나요" tabindex="-1"><a class="header-anchor" href="#storybook의-msw-애드온을-사용하여-다른-graphql-제공-업체를-사용할-수-있나요" aria-hidden="true">#</a> Storybook의 MSW 애드온을 사용하여 다른 GraphQL 제공 업체를 사용할 수 있나요?</h2>
<p>네, 애드온의 예시를 확인하여 다양한 제공 업체를 통합하는 방법을 배울 수 있습니다.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>


## Storybook의 MSW 애드온을 사용하여 GraphQL 뮤테이션을 가짜로 만들 수 있나요?

아니요, 현재 MSW 애드온은 GraphQL 쿼리만 지원하고 있습니다. 만약 이 기능을 추가하길 원한다면, MSW 애드온 저장소에 이슈를 열어 유지 관리자와 함께 진행해보세요.

## 코드에서 Storybook에서 실행 중인지 어떻게 감지할 수 있나요?

Storybook에서 실행 중인지 확인하려면 IS_STORYBOOK 전역 변수를 확인하면 됩니다. 이 변수는 Storybook에서 실행 중에 true가 됩니다. 환경 변수인 process.env.STORYBOOK도 true로 설정됩니다.



## 특정 문자를 사용할 때 내 이야기가 제대로 표시되지 않는 이유는 무엇인가요?

Storybook을 사용하면 이야기를 명명할 때 대부분의 문자를 사용할 수 있습니다. 그럼에도 불구하고 특정 문자(예: #)는 Storybook이 이야기에 대한 내부 식별자를 생성할 때 문제를 일으킬 수 있으며 충돌을 일으키거나 올바른 이야기를 잘못 출력할 수 있습니다. 이러한 문자를 가능한 한 삼가하는 것이 좋습니다.

## Storybook의 소스 로더가 커링 함수와 함께 정의되지 않은 값을 반환하는 이유는 무엇인가요?

이것은 Storybook의 알려진 문제입니다. 이를 해결하고자 한다면 작동하는 복제본을 함께 제출하여 이후 릴리스에서 문제를 진단하고 해결할 수 있도록 이슈를 오픈해주세요.



## 왜 내 args의 기본값이 더 이상 표시되지 않을까요?

버전 6.3 이전에는 설정되지 않은 args가 argTypes.defaultValue로 설정되었으며 구성 요소의 속성에서 추론되었거나 지정된 경우 (예: React의 prop types, Angular inputs, Vue props)였습니다. 그러나 버전 6.3부터 스토리북은 더는 기본값을 추론하지 않고 대신 unset되었을 때 arg의 값을 정의하여 프레임워크가 기본값을 제공할 수 있도록 합니다.

위 문제를 해결하기 위해 argTypes.defaultValue를 사용 중이라면 더 이상 필요하지 않으며 스토리에서 안전하게 제거할 수 있습니다.

또한, 만약 arg에 기본값을 설정하기 위해 argTypes.defaultValue를 사용하거나 추론에 의존하고 있다면, 해당 arg의 값을 구성 요소 수준에서 정의해야 합니다:



```js
export default {
  component: MyComponent,
  args: {
    //👇 컴포넌트 레벨에서 인자의 값을 정의합니다.
    text: 'Something',
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook의 Docs를 위해 table.defaultValue 설정을 구성하여 표시되는 값을 수동으로 설정할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
  <span class="token literal-property property">argTypes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//👇 문서에서 표시되는 인자의 값 정의.</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">table</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">summary</span><span class="token operator">:</span> <span class="token string">'SomeType&lt;T>'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="왜-storybook의-테스트-실행기가-작동하지-않을까요" tabindex="-1"><a class="header-anchor" href="#왜-storybook의-테스트-실행기가-작동하지-않을까요" aria-hidden="true">#</a> 왜 Storybook의 테스트 실행기가 작동하지 않을까요?</h2>
<p>Storybook의 테스트 러너와 최신 버전인 Jest 28 사이에 문제가 있어요. 그래서 효율적으로 실행되지 않아요. 해결책으로 이전 안정 버전인 Jest 27로 다운그레이드할 수 있어요. 이슈를 확인하려면 다음 링크를 참고해주세요.</p>
<h2 id="storybook이-환경-변수를-다루는-방법" tabindex="-1"><a class="header-anchor" href="#storybook이-환경-변수를-다루는-방법" aria-hidden="true">#</a> Storybook이 환경 변수를 다루는 방법</h2>
<p>Storybook은 환경 변수를 내장하고 있어요. 기본적으로 환경 변수는 Node.js 코드에서만 사용할 수 있고 브라우저에서는 사용할 수 없어요. 일부 변수는 비밀로 유지해야 하므로(예: API 키) 발행된 Storybook을 방문하는 사람에게 노출되어서는 안 돼요.</p>
<p>변수를 브라우저에서 사용하려면 변수 이름 앞에 STORYBOOK_을 붙여야 해요. 즉, STORYBOOK_API_URL은 브라우저 코드에서 사용할 수 있지만 API_KEY는 사용할 수 없어요. 또한 .storybook/main.js 파일의 env 필드를 설정하여 노출할 변수를 사용자 정의할 수도 있어요.</p>
<p>JavaScript가 컴파일될 때 변수가 설정됩니다. 따라서 개발 서버를 시작하거나 Storybook을 빌드할 때 변수가 설정됩니다. 환경 변수 파일은 Git에 커밋해서는 안 됩니다. 왜냐하면 Git에 추가하기 안전하지 않은 비밀 정보가 자주 포함되어 있기 때문입니다. 대신 .gitignore 파일에 .env.*를 추가하고 호스팅 제공업체(예: GitHub)에서 환경 변수를 수동으로 설정하세요.</p>
</div></template>
