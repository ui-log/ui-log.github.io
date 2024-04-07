<template><div><p>스토리북은 React 및 Webpack용 프레임워크로, Webpack으로 구축된 React 애플리케이션에서 UI 구성 요소를 독립적으로 개발하고 테스트하기 쉽게 만들어줍니다.</p>
<h2 id="요구-사항" tabindex="-1"><a class="header-anchor" href="#요구-사항" aria-hidden="true">#</a> 요구 사항</h2>
<ul>
<li>React ≥ 16.8</li>
<li>Webpack ≥ 5.0</li>
<li>Storybook ≥ 8.0</li>
</ul>
<h2 id="시작하기" tabindex="-1"><a class="header-anchor" href="#시작하기" aria-hidden="true">#</a> 시작하기</h2>
<h3 id="스토리북이-없는-프로젝트의-경우" tabindex="-1"><a class="header-anchor" href="#스토리북이-없는-프로젝트의-경우" aria-hidden="true">#</a> 스토리북이 없는 프로젝트의 경우</h3>
<p>React 프로젝트의 루트 디렉토리에서 다음 명령어를 실행한 후 나오는 프롬프트를 따라 주세요:</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npx storybook@latest init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>스토리북 시작 방법에 대한 자세한 내용입니다.</p>
<h3 id="스토리북을-활용한-프로젝트" tabindex="-1"><a class="header-anchor" href="#스토리북을-활용한-프로젝트" aria-hidden="true">#</a> 스토리북을 활용한 프로젝트</h3>
<p>이 프레임워크는 스토리북 7+와 함께 작동하도록 설계되었습니다. 아직 v7을 사용하고 있지 않다면 다음 명령을 사용하여 업그레이드하세요:</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npx storybook@latest upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="자동-이전" tabindex="-1"><a class="header-anchor" href="#자동-이전" aria-hidden="true">#</a> 자동 이전</h4>
<p>위에 있는 업그레이드 명령을 실행할 때 @storybook/react-webpack5로 마이그레이션하라는 프롬프트가 표시됩니다. 이는 모든 작업을 대신 처리해줄 것입니다. 자동 마이그레이션이 프로젝트에서 작동하지 않으면 아래의 수동 마이그레이션을 참조하세요.</p>
<h4 id="수동-마이그레이션" tabindex="-1"><a class="header-anchor" href="#수동-마이그레이션" aria-hidden="true">#</a> 수동 마이그레이션</h4>
<p>먼저, 프레임워크를 설치하세요:</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npm install --save-dev @storybook/react-webpack5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>다음으로, 사용 중인 SWC(권장) 또는 Babel에 따라 적절한 컴파일러 애드온을 설치하고 등록하세요:</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npx storybook@latest add @storybook/addon-webpack5-compiler-swc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>또는</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npx storybook@latest add @storybook/addon-webpack5-compiler-babel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>더 많은 세부 정보는 웹팩 빌더 문서에서 확인할 수 있어요.</p>
<p>마지막으로, .storybook/main.js|ts 파일을 열어 framework 속성을 변경하세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react-webpack5'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/react-webpack5'</span><span class="token punctuation">,</span> <span class="token comment">// 👈 이 부분 추가</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="설정-마법사-실행" tabindex="-1"><a class="header-anchor" href="#설정-마법사-실행" aria-hidden="true">#</a> 설정 마법사 실행</h2>
<p>모든 것이 순조롭게 진행된다면, 시작하면서 주요 개념과 기능을 소개해주는 설정 마법사가 나타날 것입니다. 이를 통해 UI의 구성 방법, 첫 번째 스토리 작성 방법 및 구성 요소가 다양한 입력에 대해 어떻게 반응하는지 테스트하는 방법 등을 알 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-StorybookforReactWebpack/img/StorybookforReactWebpack_0.png" alt="StorybookforReactWebpack_0"></p>
<p>만약 위자드를 건너뛴 경우, 여전히 사용 가능한 예제 스토리가 있다면 Storybook 인스턴스 URL에 <code v-pre>?path=/onboarding</code> 쿼리 매개변수를 추가하여 언제든 다시 실행할 수 있습니다.</p>
<h2 id="create-react-app-cra" tabindex="-1"><a class="header-anchor" href="#create-react-app-cra" aria-hidden="true">#</a> Create React App (CRA)</h2>
<p>Create React App을 지원하는 것은 @storybook/preset-create-react-app에서 처리됩니다.</p>
<p>이 프리셋은 Sass/SCSS 및 TypeScript를 포함한 모든 CRA 기능을 지원합니다.</p>
<p>CRA를 사용하지 않고 수동으로 초기화된 앱을 작업 중이라면, 앱이 종속성으로 react-dom이 포함되어 있는지 확인하세요. 그렇지 않으면 Storybook 및 프로젝트에서 예상치 못한 문제가 발생할 수 있습니다.</p>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<h3 id="옵션" tabindex="-1"><a class="header-anchor" href="#옵션" aria-hidden="true">#</a> 옵션</h3>
<p>필요한 경우 추가 구성을 위해 옵션 객체를 전달할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> StorybookConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react-webpack5'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">config</span><span class="token operator">:</span> StorybookConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">framework</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'@storybook/react-webpack5'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="빌더" tabindex="-1"><a class="header-anchor" href="#빌더" aria-hidden="true">#</a> 빌더</h4>
<p>종류: 레코드 <code v-pre>문자열, 아무거나</code></p>
<p>이 프레임워크의 빌더를 구성하는 옵션을 설정하세요. 이 프레임워크에서 사용 가능한 옵션은 Webpack 빌더 문서에서 확인할 수 있습니다.</p>
</div></template>
