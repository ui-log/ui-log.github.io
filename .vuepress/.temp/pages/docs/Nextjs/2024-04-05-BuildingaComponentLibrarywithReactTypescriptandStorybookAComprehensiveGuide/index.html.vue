<template><div><p>GitHub 및 npm 저장소를 통해 프로젝트 간에 React 컴포넌트 라이브러리를 만들고 공유하는 방법에 대한 포괄적인 안내서.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide/img/BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide_0.png" alt="BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide_0.png"></p>
<p>React는 확장 가능한 웹 애플리케이션을 만드는 데 가장 유명한 라이브러리 중 하나입니다. React 생태계에는 Ant Design, Material UI, Chakra UI와 같은 많은 컴포넌트 라이브러리가 있어 재사용 가능한 UI 컴포넌트를 제공합니다.</p>
<p>React의 유연성을 통해 고유한 요구 사항에 맞는 사용자 정의 컴포넌트 라이브러리를 빌드할 수도 있습니다. 이 글에서는 React, TypeScript, Storybook 및 몇 가지 유용한 도구를 사용하여 자체 컴포넌트 라이브러리를 만드는 방법에 대해 알아보겠습니다.</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="eslint-및-prettier-설정-프로젝트" tabindex="-1"><a class="header-anchor" href="#eslint-및-prettier-설정-프로젝트" aria-hidden="true">#</a> ESLint 및 Prettier 설정 프로젝트</h1>
<p>git을 사용하여 React 및 TypeScript로 프로젝트를 초기화하려면 다음 명령을 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>git init
npm init <span class="token operator">-</span>y
npm install <span class="token operator">-</span><span class="token constant">D</span> react @types<span class="token operator">/</span>react typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서, 라이브러리 패키지에서 일반적으로 피어 종속성으로 사용되기 때문에 React를 peerDependencies로 이동해야 합니다. 이렇게 하면 사용자가 충돌없이 React의 하나의 버전을 사용할 수 있습니다. 이를 위해 package.json에 다음 줄을 추가하고 React를 devDependencies에서 제거하세요:</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"peerDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"react"</span><span class="token operator">:</span> <span class="token string">"^18.2.0"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="prettier" tabindex="-1"><a class="header-anchor" href="#prettier" aria-hidden="true">#</a> Prettier</h2>
<p>Prettier는 의견이 강한 코드 형식 지정 도구입니다. 코드를 구문 분석하고 자체 규칙으로 다시 인쇄하여 일관된 스타일을 적용합니다.</p>
<p>Prettier를 설치하려면 다음 명령을 실행하세요:```</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">-</span><span class="token constant">D</span> prettier
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>프로젝트 루트에 .prettierrc 파일을 생성하고 다음과 같은 규칙을 설정하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"printWidth"</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
  <span class="token string-property property">"tabWidth"</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>프로젝트를 포맷하려면 package.json에 다음 스크립트를 추가하세요:</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  ...
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token property">"format"</span><span class="token operator">:</span> <span class="token string">"prettier --write --parser typescript '**/*.{ts,tsx}'"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> ESLint</h2>
<p>ESLint는 JavaScript 코드를 분석하여 일반적인 문제를 확인하는 정적 코드 분석 도구입니다. 문법 오류, 형식 문제, 코드 스타일 위반 및 잠재적 버그와 같은 일반적인 문제를 확인할 수 있습니다.</p>
<p>ESLint 및 해당 플러그인을 설치하려면 다음 명령을 실행하세요:</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">-</span><span class="token constant">D</span> eslint @typescript<span class="token operator">-</span>eslint<span class="token operator">/</span>parser eslint<span class="token operator">-</span>config<span class="token operator">-</span>prettier eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>prettier eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>react eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>react<span class="token operator">-</span>hooks eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>storybook @typescript<span class="token operator">-</span>eslint<span class="token operator">/</span>eslint<span class="token operator">-</span>plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이제 프로젝트의 루트 디렉토리에 .eslintrc라는 ESLint를 위한 구성 파일을 만들고 다음 구성을 붙여넣으세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// 코드가 실행될 환경을 지정합니다</span>
  <span class="token string-property property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"jest"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>       <span class="token comment">// Jest 테스트를 위해 활성화</span>
    <span class="token string-property property">"browser"</span><span class="token operator">:</span> <span class="token boolean">true</span>     <span class="token comment">// 브라우저 환경을 활성화</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// ESLint가 상위 폴더에서 구성을 검색하지 않도록 합니다</span>
  <span class="token string-property property">"root"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// TypeScript를 위한 파서를 지정합니다 (@typescript-eslint/parser 사용)</span>
  <span class="token string-property property">"parser"</span><span class="token operator">:</span> <span class="token string">"@typescript-eslint/parser"</span><span class="token punctuation">,</span> <span class="token comment">// TS ESTree를 사용하여 TypeScript를 lint하는 데 활용</span>

  <span class="token comment">// 추가적인 규칙과 구성 옵션을 추가합니다</span>
  <span class="token string-property property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@typescript-eslint"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// 다양한 ESLint 구성 및 플러그인을 확장합니다</span>
  <span class="token string-property property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"eslint:recommended"</span><span class="token punctuation">,</span>                   <span class="token comment">// ESLint의 권장 규칙</span>
    <span class="token string">"plugin:react/recommended"</span><span class="token punctuation">,</span>             <span class="token comment">// React의 권장 규칙</span>
    <span class="token string">"plugin:@typescript-eslint/recommended"</span><span class="token punctuation">,</span> <span class="token comment">// TypeScript의 권장 규칙</span>
    <span class="token string">"plugin:@typescript-eslint/eslint-recommended"</span><span class="token punctuation">,</span> <span class="token comment">// TypeScript에 대한 ESLint 재정의</span>
    <span class="token string">"prettier"</span><span class="token punctuation">,</span>                             <span class="token comment">// Prettier 규칙</span>
    <span class="token string">"plugin:prettier/recommended"</span><span class="token punctuation">,</span>          <span class="token comment">// Prettier 플러그인 통합</span>
    <span class="token string">"plugin:react-hooks/recommended"</span><span class="token punctuation">,</span>       <span class="token comment">// React 훅을 위한 권장 규칙</span>
    <span class="token string">"plugin:storybook/recommended"</span>          <span class="token comment">// Storybook을 위한 권장 규칙</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">"rules"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"react/react-in-jsx-scope"</span><span class="token operator">:</span> <span class="token string">"off"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>루트 디렉토리에 .gitignore 파일을 만들고 리포지토리에 포함되지 않아야 하는 디렉터리를 추가하세요.```</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>node_modules
dist

# 스토리북 빌드 디렉토리
storybook<span class="token operator">-</span><span class="token keyword">static</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>프로젝트를 린팅하기 위해 package.json에 다음 스크립트를 추가하세요 :</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"lint"</span><span class="token operator">:</span> <span class="token string">"eslint . --ext .ts,.tsx --ignore-path .gitignore --fix"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="typescript-및-vite-구성" tabindex="-1"><a class="header-anchor" href="#typescript-및-vite-구성" aria-hidden="true">#</a> Typescript 및 Vite 구성</h1>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>Vite는 최근 몇 년간 인기를 얻어온 현대적인 프론트엔드 도구입니다. Vite는 프로덕션 빌드에 Rollup을 사용하면서 두 도구의 장점을 결합하여 훌륭한 개발 경험과 효율적인 프로덕션 빌드를 제공합니다.</p>
<p>아래 구성을 가진 tsconfig.json 파일을 만들어주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"target"</span><span class="token operator">:</span> <span class="token string">"ES5"</span><span class="token punctuation">,</span> <span class="token comment">// 코드를 변환할 때 대상이 되는 JavaScript 버전을 지정합니다.</span>
    <span class="token string-property property">"useDefineForClassFields"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 클래스 필드에 'define' 사용을 허용합니다.</span>
    <span class="token string-property property">"lib"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"ES2020"</span><span class="token punctuation">,</span> <span class="token string">"DOM"</span><span class="token punctuation">,</span> <span class="token string">"DOM.Iterable"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 코드에서 사용 가능한 라이브러리를 지정합니다.</span>
    <span class="token string-property property">"module"</span><span class="token operator">:</span> <span class="token string">"ESNext"</span><span class="token punctuation">,</span> <span class="token comment">// 코드 생성에 사용할 모듈 시스템을 정의합니다.</span>
    <span class="token string-property property">"skipLibCheck"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 선언 파일의 타입 검사를 건너뜁니다.</span>

    <span class="token comment">/* 번들러 모드 */</span>
    <span class="token string-property property">"moduleResolution"</span><span class="token operator">:</span> <span class="token string">"bundler"</span><span class="token punctuation">,</span> <span class="token comment">// 번들링할 때 모듈이 어떻게 해석되는지 지정합니다.</span>
    <span class="token string-property property">"allowImportingTsExtensions"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 확장자가 있는 TypeScript 파일을 가져오도록 허용합니다.</span>
    <span class="token string-property property">"resolveJsonModule"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// JSON 모듈을 가져오도록 설정합니다.</span>
    <span class="token string-property property">"isolatedModules"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 각 파일을 별도의 모듈로 취급합니다.</span>
    <span class="token string-property property">"noEmit"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// TypeScript가 출력 파일을 생성하지 못하도록 합니다.</span>
    <span class="token string-property property">"jsx"</span><span class="token operator">:</span> <span class="token string">"react-jsx"</span><span class="token punctuation">,</span> <span class="token comment">// React용 JSX 지원을 구성합니다.</span>

    <span class="token comment">/* 린팅 */</span>
    <span class="token string-property property">"strict"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 엄격한 타입 확인을 활성화합니다.</span>
    <span class="token string-property property">"noUnusedLocals"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 사용되지 않는 지역 변수를 신호로 표시합니다.</span>
    <span class="token string-property property">"noUnusedParameters"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 사용되지 않는 함수 매개변수를 신호로 표시합니다.</span>
    <span class="token string-property property">"noFallthroughCasesInSwitch"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// switch 문의 모든 경우를 처리해야 합니다.</span>
    <span class="token string-property property">"declaration"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// TypeScript를 위한 선언 파일을 생성합니다.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"include"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"src"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// TypeScript 파일을 검색할 때 포함할 디렉토리를 지정합니다.</span>
  <span class="token string-property property">"exclude"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"src/**/__docs__"</span><span class="token punctuation">,</span><span class="token string">"src/**/__test__"</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>하나의 선언 파일을 생성하는 플러그인이 포함된 Vite를 설치하려면 다음 명령을 실행하세요:</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">-</span><span class="token constant">D</span> vite vite<span class="token operator">-</span>plugin<span class="token operator">-</span>dts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>루트 디렉토리에 vite.config.ts라는 파일을 생성하고 다음 구성을 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vite"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> dts <span class="token keyword">from</span> <span class="token string">"vite-plugin-dts"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> peerDependencies <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./package.json"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lib</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">"./src/index.ts"</span><span class="token punctuation">,</span> <span class="token comment">// 라이브러리 빌드의 진입점을 지정합니다.</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"vite-react-ts-button"</span><span class="token punctuation">,</span> <span class="token comment">// 생성된 라이브러리의 이름을 설정합니다.</span>
      <span class="token function-variable function">fileName</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">format</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">index.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>format<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.js</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token comment">// 형식에 따라 출력 파일 이름을 생성합니다.</span>
      <span class="token literal-property property">formats</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"cjs"</span><span class="token punctuation">,</span> <span class="token string">"es"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 출력 형식 (CommonJS 및 ES 모듈)을 지정합니다.</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">external</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>peerDependencies<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Rollup 번들링을 위한 외부 종속성을 정의합니다.</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourcemap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 디버깅을 위해 소스 맵을 생성합니다.</span>
    <span class="token literal-property property">emptyOutDir</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 빌드하기 전에 출력 디렉터리를 지웁니다.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">dts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// TypeScript 선언 파일(d.ts)을 생성하기 위해 'vite-plugin-dts' 플러그인을 사용합니다.</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 구성을 package.json에 추가해서 빌드 스크립트와 진입점 및 유형 정의를 정의하세요.</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"module"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"main"</span><span class="token operator">:</span> <span class="token string">"dist/index.cjs.js"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"module"</span><span class="token operator">:</span> <span class="token string">"dist/index.es.js"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"types"</span><span class="token operator">:</span> <span class="token string">"dist/index.d.ts"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"files"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"/dist"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">"scripts"</span><span class="token operator">:</span><span class="token punctuation">{</span>
   <span class="token operator">...</span>
   <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"tsc &amp;&amp; vite build"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서 &quot;main&quot;과 &quot;module&quot;은 JavaScript의 다른 모듈 시스템을 위한 진입 점을 지정하는 데 사용됩니다.</p>
<ul>
<li>&quot;main&quot; 필드는 CommonJS 모듈을 위한 진입 점을 지정하는 데 사용됩니다. 일반적으로 .cjs.js 또는 .js 확장자를 가진 파일을 가리킵니다. Node.js에서 require()를 사용하여 패키지를 필요로하거나 Webpack 또는 Vite와 같은 도구로 번들링할 때 &quot;main&quot; 진입 지점이 사용됩니다.</li>
<li>&quot;module&quot; 필드는 ES 모듈을 위한 진입 점을 지정하는 데 사용됩니다. 일반적으로 .es.js 또는 .mjs 확장자를 가진 파일을 가리킵니다. ES 모듈을 지원하는 현대적인 JavaScript 환경에서 import를 사용하여 패키지를 가져올 때 &quot;module&quot; 진입 지점이 사용됩니다.</li>
</ul>
<p>package.json에 &quot;main&quot; 및 &quot;module&quot; 필드를 모두 지정함으로써 CommonJS 및 ES 모듈 시스템 모두에 대한 호환성을 제공할 수 있습니다.</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="컴포넌트-생성" tabindex="-1"><a class="header-anchor" href="#컴포넌트-생성" aria-hidden="true">#</a> 컴포넌트 생성</h1>
<p>간단한 CSS 대신에 styled-components를 사용해 스타일링할 거에요. component-based styling, dynamic styling, css-in-js와 같은 기능들을 활용할 수 있어요.</p>
<p>styled-components를 추가하려면 다음 명령을 실행하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">-</span><span class="token constant">D</span> styled<span class="token operator">-</span>components
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>루트 디렉토리에 src 폴더를 만들고, 버튼 컴포넌트를 위한 button 폴더를 생성해주세요. 이 폴더 안에 Button.tsx와 index.ts 파일을 추가하고, 아래 코드를 붙여넣어주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// components/button/button.tsx</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> MouseEventHandler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">"styled-components"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> type ButtonProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  text<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  primary<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  size<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">"small"</span> <span class="token operator">|</span> <span class="token string">"medium"</span> <span class="token operator">|</span> <span class="token string">"large"</span><span class="token punctuation">;</span>
  onClick<span class="token operator">?</span><span class="token operator">:</span> MouseEventHandler<span class="token operator">&lt;</span>HTMLButtonElement<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> StyledButton <span class="token operator">=</span> styled<span class="token punctuation">.</span>button<span class="token operator">&lt;</span>ButtonProps<span class="token operator">></span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 10px;
  display: inline-block;
  color: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>primary <span class="token operator">?</span> <span class="token string">"#fff"</span> <span class="token operator">:</span> <span class="token string">"#000"</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;
  background-color: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>primary <span class="token operator">?</span> <span class="token string">"#FF5655"</span> <span class="token operator">:</span> <span class="token string">"#f4c4c4"</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;
  padding: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span>
    props<span class="token punctuation">.</span>size <span class="token operator">===</span> <span class="token string">"small"</span>
      <span class="token operator">?</span> <span class="token string">"7px 25px 8px"</span>
      <span class="token operator">:</span> props<span class="token punctuation">.</span>size <span class="token operator">===</span> <span class="token string">"medium"</span>
      <span class="token operator">?</span> <span class="token string">"9px 30px 11px"</span>
      <span class="token operator">:</span> <span class="token string">"14px 30px 16px"</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">Button</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>ButtonProps<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
  size<span class="token punctuation">,</span>
  primary<span class="token punctuation">,</span>
  disabled<span class="token punctuation">,</span>
  text<span class="token punctuation">,</span>
  onClick<span class="token punctuation">,</span>
  <span class="token operator">...</span>props
<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>StyledButton
      type<span class="token operator">=</span><span class="token string">"button"</span>
      onClick<span class="token operator">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span>
      primary<span class="token operator">=</span><span class="token punctuation">{</span>primary<span class="token punctuation">}</span>
      disabled<span class="token operator">=</span><span class="token punctuation">{</span>disabled<span class="token punctuation">}</span>
      size<span class="token operator">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span>
      <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span>
    <span class="token operator">></span>
      <span class="token punctuation">{</span>text<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>StyledButton<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Button<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// components/button/index.ts</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음 components 폴더에 index.ts 파일을 추가해주세요. 이 파일을 통해 components 폴더의 모든 컴포넌트를 내보낼 수 있습니다.</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// components/index.ts</span>
<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">'./button'</span><span class="token punctuation">;</span> <span class="token comment">// 필요에 따라 다른 컴포넌트의 더 많은 내보내기 추가</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>'index.ts' 파일을 src 폴더에 추가하십시오. 이 파일은 라이브러리 전체의 진입점으로 작용합니다. 여기서 컴포넌트와 그들의 타입 및 유틸리티를 내보낼 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/index.ts</span>
<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">'./components'</span><span class="token punctuation">;</span> <span class="token comment">// 이 명령은 'components' 폴더에서 모든 컴포넌트를 내보냅니다</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>컴포넌트를 추가한 후 아래 명령을 실행하십시오. 이것은 'dist' 폴더를 생성합니다.</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>dist 폴더 안에는 라이브러리의 출력 코드가 있습니다.</p>
<h1 id="vitest-및-react-testing-library로-테스트하기" tabindex="-1"><a class="header-anchor" href="#vitest-및-react-testing-library로-테스트하기" aria-hidden="true">#</a> Vitest 및 React-Testing-Library로 테스트하기</h1>
<p>Vitest는 Vite 기반의 유닛 테스트 프레임워크이며, 많은 현대적인 기능을 갖춘 훌륭한 유닛 테스트 프레임워크입니다.</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>Vitest를 설치하려면 다음 명령을 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">-</span><span class="token constant">D</span> vitest @testing<span class="token operator">-</span>library<span class="token operator">/</span>react jsdom @testing<span class="token operator">-</span>library<span class="token operator">/</span>jest<span class="token operator">-</span>dom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이제 package.json 파일에 다음 스크립트를 추가해주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">"test"</span><span class="token operator">:</span> <span class="token string">"vitest run"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"test-watch"</span><span class="token operator">:</span> <span class="token string">"vitest"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"test:ui"</span><span class="token operator">:</span> <span class="token string">"vitest --ui"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>vite.config.ts 파일의 맨 위에 다음 줄을 추가해 주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/// &lt;reference types="vitest" /></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>루트 디렉토리에 setupTests.ts라는 파일을 만들고, 해당 파일에 아래 코드를 추가해 주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vitest"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> matchers <span class="token keyword">from</span> <span class="token string">"@testing-library/jest-dom/matchers"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TestingLibraryMatchers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@testing-library/jest-dom/matchers"</span><span class="token punctuation">;</span>
declare module <span class="token string">"vitest"</span> <span class="token punctuation">{</span>
  <span class="token comment">// eslint-disable-next-line @typescript-eslint/no-explicit-any</span>
  <span class="token keyword">interface</span> <span class="token class-name">Assertion</span><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> any<span class="token operator">></span>
    <span class="token keyword">extends</span> <span class="token class-name">jest<span class="token punctuation">.</span>Matchers</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">,</span>
      TestingLibraryMatchers<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token keyword">void</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
expect<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>matchers<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이제 defineConfig 아래의 vite.config.ts 파일에 다음 구성을 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">environment</span><span class="token operator">:</span> <span class="token string">"jsdom"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">setupFiles</span><span class="token operator">:</span> <span class="token string">"./setupTests.ts"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>버튼 폴더 내에 <strong>test</strong> 디렉토리를 만들고 Button.test.tsx라는 파일을 추가하여 다음 코드로 버튼 컴포넌트를 테스트해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//Button/__test__/Button.test.tsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> describe<span class="token punctuation">,</span> expect<span class="token punctuation">,</span> it <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vitest"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> screen <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@testing-library/react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">"../Button"</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"Button component"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"Button should render correctly"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Button <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> button <span class="token operator">=</span> screen<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="스토리북과-허스키-추가하기" tabindex="-1"><a class="header-anchor" href="#스토리북과-허스키-추가하기" aria-hidden="true">#</a> 스토리북과 허스키 추가하기</h1>
<h2 id="스토리북" tabindex="-1"><a class="header-anchor" href="#스토리북" aria-hidden="true">#</a> 스토리북</h2>
<p>스토리북은 UI 컴포넌트를 디자인, 테스트 및 독립적으로 쇼케이스하는 오픈 소스 개발 환경입니다.</p>
<p>다음 명령을 실행하여 새 스토리북 프로젝트를 초기화하세요:</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx storybook@latest init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이미 Vite가 설치되어 있기 때문에 Storybook에서는 러너로 감지될 것입니다. 또한 .storybook 폴더와 package.json 파일에 필요한 스크립트도 추가될 것입니다.</p>
<p>src 폴더 안에 stories 폴더가 생성될 것이지만, 이를 삭제할 예정입니다.</p>
<p>각 구성 요소는 <strong>docs</strong> 디렉토리를 가지고 있으며, 그 안에 우리의 stories를 추가할 것입니다. 이를 위해 .stroybook/main.ts 파일의 stories 필드를 업데이트해야 합니다.```</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">stories</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"../src/**/__docs__/*.stories.tsx"</span><span class="token punctuation">,</span> <span class="token string">"../src/**/__docs__/*.mdx"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>src/button/__docs__</code> 디렉토리에 세 개의 파일을 생성하세요:</p>
<ul>
<li>Button.stories.tsx</li>
<li>Example.tsx</li>
<li>Button.mdx</li>
</ul>
<p>Button.mdx 파일에 다음 내용을 추가하세요:</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Canvas<span class="token punctuation">,</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@storybook/blocks"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Example <span class="token keyword">from</span> <span class="token string">"./Example.tsx"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Button <span class="token keyword">from</span> <span class="token string">"./Button.stories.tsx"</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Meta <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>Button<span class="token punctuation">}</span> title<span class="token operator">=</span><span class="token string">"Button"</span> <span class="token operator">/</span><span class="token operator">></span>

# Button

다양한 프롭을 가진 Button 컴포넌트입니다<span class="token punctuation">.</span>

#### 예시

<span class="token operator">&lt;</span>Canvas <span class="token keyword">of</span><span class="token operator">=</span><span class="token punctuation">{</span>Button<span class="token punctuation">.</span>Primary<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

## 사용법

<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token template-punctuation string">`</span></span>`ts
<span class="token keyword">import</span> <span class="token punctuation">{</span>Button<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"sld-ui"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Example</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>Button
        size<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"small"</span><span class="token punctuation">}</span>
        text<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"Button"</span><span class="token punctuation">}</span>
        onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Clicked"</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        primary
      <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Example<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="인수" tabindex="-1"><a class="header-anchor" href="#인수" aria-hidden="true">#</a> 인수</h4>
<ul>
<li><strong>text</strong> <u><code v-pre>() =&gt; void</code></u> - 버튼의 텍스트 내용을 나타내는 문자열입니다.</li>
<li><strong>primary</strong> - 버튼에 기본적인 스타일이 적용되어야 하는지를 나타내는 부울값입니다. 일반적으로, 기본 버튼은 사용자 인터페이스에서 주요 작업으로 강조됩니다.</li>
<li><strong>disabled</strong> - 버튼을 비활성 상태로 만들어야 하는지를 나타내는 부울값입니다. 비활성 상태인 버튼은 클릭하거나 상호작용할 수 없습니다.</li>
<li><strong>size</strong> - &quot;small&quot;, &quot;medium&quot;, &quot;large&quot; 중 하나의 값이 포함된 문자열입니다. 버튼의 사이즈나 크기를 정의합니다.</li>
<li><strong>onClick</strong> - 버튼을 클릭했을 때 호출되는 함수입니다. 버튼 요소에서 클릭 이벤트를 처리하기 위해 MouseEventHandler를 받습니다.</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
Example.tsx 파일에 다음 코드를 삽입하세요:

```js
import React, { FC } from "react";
import Button, { ButtonProps } from "../Button";

const Example: FC&lt;ButtonProps> = ({
  disabled = false,
  onClick = () => {},
  primary = true,
  size = "small",
  text = "Button",
}) => {
  return (
    &lt;div
      style={
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }
    >
      &lt;Button
        size={size}
        text={text}
        disabled={disabled}
        onClick={onClick}
        primary={primary}
      />
    &lt;/div>
  );
};

export default Example;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Button.stories.tsx 파일에 다음 코드를 삽입하세요:```</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@storybook/react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Example <span class="token keyword">from</span> <span class="token string">"./Example"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">meta</span><span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Example<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Button"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> Example<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
type Story <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Example<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">Primary</span><span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">args</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"Button"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">"small"</span><span class="token punctuation">,</span>
    <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Button"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">Secondary</span><span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">args</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"Button"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">"small"</span><span class="token punctuation">,</span>
    <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Button"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 변경 사항을 반영한 후 Storybook를 시작하려면 다음 명령을 실행하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm run storybook
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Storybook에서 모든 Button UI 변형을 확인할 수 있어야 합니다.```</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<img src="@source/docs/Nextjs/2024-04-05-BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide/img/BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide_1.png" />
<h2 id="husky" tabindex="-1"><a class="header-anchor" href="#husky" aria-hidden="true">#</a> Husky</h2>
<p>Husky는 Git 리포지토리에서 미리 커밋 후크를 강제로 적용하도록 주로 설계되었으며, 코드 포맷팅, 테스트 실행, 린트 등과 같은 특정 작업이 허용되기 전에 수행되도록 보장합니다.</p>
<p>Husky를 프리 커밋 후크와 함께 구성하려면 다음 명령어를 실행하세요:</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">-</span><span class="token constant">D</span> husky lint<span class="token operator">-</span>staged
npx husky install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 .husky 폴더 안에 pre-commit 훅이라는 파일을 생성하고 다음 내용을 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token hashbang comment">#!/bin/sh</span>
<span class="token punctuation">.</span> <span class="token string">"$(dirname "</span>$0<span class="token string">")/_/husky.sh"</span>

npx lint<span class="token operator">-</span>staged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음 구성을 package.json 파일에 추가하세요:</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"lint-staged"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">"*.{ts,tsx}"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"npm run format"</span><span class="token punctuation">,</span>
    <span class="token string">"npm run lint"</span><span class="token punctuation">,</span>
    <span class="token string">"npm run test"</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 우리가 git commit을 사용하여 변경 사항을 커밋할 때, Husky가 자동으로 lint-staged를 실행하고, 이에 테하여 스테이징된 파일에서 우리가 지정한 서식 지정 및 린팅 스크립트를 실행할 것입니다.</p>
<h1 id="npm-및-github-레지스트리에-라이브러리-발행하기" tabindex="-1"><a class="header-anchor" href="#npm-및-github-레지스트리에-라이브러리-발행하기" aria-hidden="true">#</a> NPM 및 GitHub 레지스트리에 라이브러리 발행하기</h1>
<h2 id="github에-게시하기" tabindex="-1"><a class="header-anchor" href="#github에-게시하기" aria-hidden="true">#</a> GitHub에 게시하기</h2>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>프로젝트의 package.json에 GitHub 패키지 레지스트리를 레지스트리로 지정하는 publishConfig 섹션을 추가해주세요. {USER_NAME}과 {repo-name}을 귀하의 실제 GitHub 사용자 이름과 저장소 이름으로 바꿔주세요. 아래는 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"publishConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">"registry"</span><span class="token operator">:</span> <span class="token string">"https://npm.pkg.github.com/@{USER_NAME}"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"@{user_name}/{repo-name}"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GITHUB_TOKEN의 권한을 수정하는 방법: GitHub 저장소로 이동하여 설정을 클릭한 후 Actions로 이동해주세요. 일반 섹션에서 읽기 및 쓰기 권한이 허용되었는지 확인한 후 저장을 클릭해주세요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide/img/BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide_2.png" alt="이미지"></p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>프로젝트 루트 디렉터리에 .github/workflows 폴더가 이미 존재하지 않는 경우 생성해주세요.</p>
<p>해당 폴더 안에 publish-package.yml이라는 파일을 생성하세요. 아래 내용을 파일 안에 추가해주세요. 여기서 USER_NAME 자리에 자신의 사용자 이름을 넣어주세요.</p>
<p>여기서 GITHUB_TOKEN은 GitHub Actions에서 자동으로 제공되며, 패키지를 게시할 때 인증에 사용됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">name</span><span class="token operator">:</span> publish on github

<span class="token literal-property property">on</span><span class="token operator">:</span>
  <span class="token literal-property property">push</span><span class="token operator">:</span>
    <span class="token literal-property property">branches</span><span class="token operator">:</span>
      <span class="token operator">-</span> master

<span class="token literal-property property">jobs</span><span class="token operator">:</span>
  publish<span class="token operator">-</span>gpr<span class="token operator">:</span>
    runs<span class="token operator">-</span>on<span class="token operator">:</span> ubuntu<span class="token operator">-</span>latest
    <span class="token literal-property property">steps</span><span class="token operator">:</span>
      <span class="token operator">-</span> uses<span class="token operator">:</span> actions<span class="token operator">/</span>checkout@v2
      <span class="token operator">-</span> uses<span class="token operator">:</span> actions<span class="token operator">/</span>setup<span class="token operator">-</span>node@v1
        <span class="token keyword">with</span><span class="token operator">:</span>
          node<span class="token operator">-</span>version<span class="token operator">:</span> <span class="token number">18</span>
          registry<span class="token operator">-</span>url<span class="token operator">:</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">npm.pkg.github.com</span><span class="token regex-delimiter">/</span></span>
          <span class="token literal-property property">scope</span><span class="token operator">:</span> <span class="token string">"@{USER_NAME}"</span>
      <span class="token operator">-</span> run<span class="token operator">:</span> npm install
      <span class="token operator">-</span> run<span class="token operator">:</span> npm run test
      <span class="token operator">-</span> run<span class="token operator">:</span> npm run build
      <span class="token operator">-</span> run<span class="token operator">:</span> npm publish
        <span class="token literal-property property">env</span><span class="token operator">:</span>
          <span class="token constant">NODE_AUTH_TOKEN</span><span class="token operator">:</span> $<span class="token punctuation">{</span>secrets<span class="token punctuation">.</span><span class="token constant">GITHUB_TOKEN</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그래서 한 번 master 브랜치로 푸시하면, 이 워크플로우가 자동으로 실행되고 패키지가 게시됩니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide/img/BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide_3.png" alt="image"></p>
<p>GitHub 저장소의 Packages 섹션에서 라이브러리를 찾을 수 있습니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide/img/BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide_4.png" alt="image"></p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>만약 에러가 발생하면 제 깃허브를 참고해주세요.</p>
<h2 id="npm에-발행하기" tabindex="-1"><a class="header-anchor" href="#npm에-발행하기" aria-hidden="true">#</a> NPM에 발행하기</h2>
<p>먼저 npmjs.com에서 계정을 만든 다음 프로필 설정으로 이동하여 Access Tokens을 클릭합니다.</p>
<p>이제 Generate Token을 클릭하고 Classic Token을 선택하세요.</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<img src="@source/docs/Nextjs/2024-04-05-BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide/img/BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide_5.png" />
<p>이제 토큰의 이름을 제공하고 유형을 자동화로 선택하면 토큰이 생성됩니다.</p>
<p>다음으로 깃허브 저장소의 설정으로 이동하고, 시크릿과 변수 섹션 내에서 Actions로 이동합니다. 새 저장소 시크릿을 클릭한 후 시크릿의 이름을 제공하세요 (이 이름은 워크플로 내에서 토큰에 액세스하는 데 사용됩니다) 그리고 추가 시크릿을 클릭하세요.</p>
<img src="@source/docs/Nextjs/2024-04-05-BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide/img/BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide_6.png" />
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>package.json에 준비 스크립트를 추가하여 패키지를 게시 준비할 때 실행되는 명령을 지정해야 해요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token string-property property">"prepare"</span><span class="token operator">:</span> <span class="token string">"npm run build"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>프로젝트의 루트 디렉토리에서 .github/workflows 폴더를 생성해 주세요. 이미 존재한다면 무시하세요. 그 폴더 안에 npm-publish.yml이라는 파일을 생성하고 아래 내용을 입력해 주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">name</span><span class="token operator">:</span> publish npm

<span class="token literal-property property">on</span><span class="token operator">:</span>
  <span class="token literal-property property">push</span><span class="token operator">:</span>
    <span class="token literal-property property">branches</span><span class="token operator">:</span>
      <span class="token operator">-</span> main

<span class="token literal-property property">jobs</span><span class="token operator">:</span>
  <span class="token literal-property property">publish</span><span class="token operator">:</span>
    runs<span class="token operator">-</span>on<span class="token operator">:</span> ubuntu<span class="token operator">-</span>latest
    <span class="token literal-property property">steps</span><span class="token operator">:</span>
      <span class="token operator">-</span> name<span class="token operator">:</span> Checkout code
        <span class="token literal-property property">uses</span><span class="token operator">:</span> actions<span class="token operator">/</span>checkout@v2

      <span class="token operator">-</span> name<span class="token operator">:</span> Setup Node<span class="token punctuation">.</span>js
        <span class="token literal-property property">uses</span><span class="token operator">:</span> actions<span class="token operator">/</span>setup<span class="token operator">-</span>node@v2
        <span class="token keyword">with</span><span class="token operator">:</span>
          node<span class="token operator">-</span>version<span class="token operator">:</span> <span class="token number">18</span>
          registry<span class="token operator">-</span>url<span class="token operator">:</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.npmjs.org</span><span class="token regex-delimiter">/</span></span>

      <span class="token operator">-</span> name<span class="token operator">:</span> Install dependencies
        <span class="token literal-property property">run</span><span class="token operator">:</span> npm install

      <span class="token operator">-</span> name<span class="token operator">:</span> Publish to npm
        <span class="token literal-property property">run</span><span class="token operator">:</span> npm publish <span class="token operator">--</span>access <span class="token keyword">public</span>
        <span class="token literal-property property">env</span><span class="token operator">:</span>
          <span class="token constant">NODE_AUTH_TOKEN</span><span class="token operator">:</span> $<span class="token punctuation">{</span>secrets<span class="token punctuation">.</span><span class="token constant">NPM_AUTH_TOKEN</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>메인 브랜치에 푸시하면이 워크플로우가 자동으로 실행되어 패키지가 게시됩니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide/img/BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide_7.png" alt="이미지1"></p>
<p>계정의 패키지 섹션을 확인하면 패키지가 표시됩니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide/img/BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide_8.png" alt="이미지2"></p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>어려움을 겪는 경우 도움을 위해 내 저장소를 참고할 수 있어요.</p>
<h1 id="다른-프로젝트에서-테스트를-위해-로컬-라이브러리-사용하기" tabindex="-1"><a class="header-anchor" href="#다른-프로젝트에서-테스트를-위해-로컬-라이브러리-사용하기" aria-hidden="true">#</a> 다른 프로젝트에서 테스트를 위해 로컬 라이브러리 사용하기</h1>
<p>로컬에서 라이브러리를 테스트하려면 example이라는 디렉토리를 만들고 해당 디렉토리에서 다음 명령을 실행하여 React 앱을 초기화합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm create vite@latest <span class="token punctuation">.</span> <span class="token operator">--</span> <span class="token operator">--</span>template react<span class="token operator">-</span>ts
npm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>지금 루트 디렉터리로 이동해서 다음 명령어로 npm 패키지를 빌드해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>예제 앱과 동일한 React 버전을 사용하고 있는지 확인하기 위해 루트 디렉터리에서 다음 명령어를 실행해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm link <span class="token string">"./example/node_modules/react"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위 예시 앱의 디렉토리로 돌아가서 npm 패키지를 예시 앱에 연결하세요. 이때 package.json에 지정한 패키지 이름을 사용하시면 됩니다. {package-name} 부분은 패키지의 이름으로 대체해주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm link <span class="token punctuation">{</span><span class="token keyword">package</span><span class="token operator">-</span>name<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>아래 명령어를 사용하여 패키지가 연결되었는지 확인할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm ls <span class="token operator">--</span>location<span class="token operator">=</span>global <span class="token operator">--</span>depth<span class="token operator">=</span><span class="token number">0</span> <span class="token operator">--</span>link<span class="token operator">=</span><span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이제 라이브러리에서 UI 컴포넌트를 가져와 로컬에서 쉽게 테스트해보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//App.tsx</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"sld-ui-lib"</span><span class="token punctuation">;</span> <span class="token comment">//라이브러리 이름으로 변경하기</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Button text<span class="token operator">=</span><span class="token string">"버튼"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>npm run dev 명령을 실행한 후에 로컬로 배포된 패키지를 테스트할 수 있습니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide/img/BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide_9.png" alt="이미지"></p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="다른-프로젝트에서-published-라이브러리-사용하기" tabindex="-1"><a class="header-anchor" href="#다른-프로젝트에서-published-라이브러리-사용하기" aria-hidden="true">#</a> 다른 프로젝트에서 Published 라이브러리 사용하기</h1>
<p>예제라는 디렉토리를 만들고 다음 명령어를 실행하여 React 앱을 초기화하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm create vite@latest <span class="token punctuation">.</span> <span class="token operator">--</span> <span class="token operator">--</span>template react<span class="token operator">-</span>ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="npm-레지스트리-사용하기" tabindex="-1"><a class="header-anchor" href="#npm-레지스트리-사용하기" aria-hidden="true">#</a> Npm 레지스트리 사용하기</h2>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>npm 레지스트리에서 패키지를 설치하려면 다음 명령을 사용할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install sld<span class="token operator">-</span>ui<span class="token operator">-</span>lib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 명령은 npm 레지스트리에서 sld-ui-lib라는 패키지를 설치합니다.</p>
<h2 id="github-레지스트리-사용하기" tabindex="-1"><a class="header-anchor" href="#github-레지스트리-사용하기" aria-hidden="true">#</a> Github 레지스트리 사용하기</h2>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>GitHub 패키지 레지스트리에서 패키지에 액세스하기 위해 GitHub에서 개인 액세스 토큰을 얻으려면 다음 단계를 따르세요:</p>
<ul>
<li>GitHub에 로그인하고 계정에 서명합니다.</li>
<li>오른쪽 상단 모서리에서 프로필 사진을 클릭하고 설정을 선택합니다.</li>
<li>왼쪽 사이드바에서 개발자 설정을 클릭합니다.</li>
<li>액세스 토큰 아래에 있는 개인 액세스 토큰을 클릭합니다.</li>
<li>다음으로, &quot;새 토큰 생성&quot; 버튼을 클릭합니다.</li>
<li>토큰 이름 필드에 토큰 이름을 제공합니다.</li>
<li>선택한 스코프에서 사용 사례에 필요한 권한을 선택합니다. GitHub 패키지 레지스트리의 패키지에 액세스하려면 일반적으로 read:packages 권한이 필요합니다.</li>
<li>설정 구성 후 페이지 하단의 &quot;토큰 생성&quot; 버튼을 클릭합니다.</li>
<li>GitHub이 개인 액세스 토큰을 생성해줍니다.</li>
</ul>
<p>이 개인 액세스 토큰을 사용하여 GitHub 패키지 레지스트리와 인증할 때 npm 또는 yarn 구성에서 사용할 수 있습니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide/img/BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide_10.png" alt="이미지"></p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>GitHub 패키지 레지스트리에서 패키지를 설치하려면 프로젝트에 .npmrc 파일을 만들고 아래 구성을 추가하세요. 여기서 GITHUB_USER_NAME을(를) 여러분의 GitHub 사용자명으로 바꿔주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token constant">GITHUB_USER_NAME</span><span class="token operator">:</span>registry<span class="token operator">=</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>npm<span class="token punctuation">.</span>pkg<span class="token punctuation">.</span>github<span class="token punctuation">.</span>com
<span class="token comment">//npm.pkg.github.com/:_authToken=${NPM_TOKEN}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>이 파일에 액세스 토큰을 직접 포함시키지 않아야 합니다. 왜냐하면 Git으로 추적될 수 있기 때문입니다. 대신 터미널을 열고 npm 토큰을 위한 환경 변수를 설정하세요. 실제 토큰을 사용하여 다음 명령을 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token constant">NPM_TOKEN</span><span class="token operator">=</span><span class="token constant">YOUR_TOKEN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 내용을 친절한 한국어로 번역해 드리겠습니다.</p>
<p>셸 프로필 (예: .bashrc, .zshrc)에 이 내보내기 명령을 추가하는 것이 좋습니다. 그러면 npm 명령을 실행할 때 ${NPM_TOKEN}을 환경 변수에서 실제 토큰으로 자동으로 대체할 수 있습니다.</p>
<p>GitHub 사용자 이름인 your-username과 라이브러리 이름인 package-name을 사용하여 해당 명령을 실행해 보세요. 레지스트리에서 패키지를 설치할 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install @your<span class="token operator">-</span>username<span class="token operator">/</span><span class="token keyword">package</span><span class="token operator">-</span>name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide/img/BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide_11.png" alt="이미지"></p>
<h1 id="팀-액세스용-storybook-배포하기" tabindex="-1"><a class="header-anchor" href="#팀-액세스용-storybook-배포하기" aria-hidden="true">#</a> 팀 액세스용 Storybook 배포하기</h1>
<p>우리는 Storybook을 배포하기 위해 Netlify를 사용할 것입니다.</p>
<p>먼저 GitHub을 통해 Netlify에 계정을 만들고 저장소를 선택하세요. 이제 아래 이미지와 같이 구성을 추가하세요.</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<img src="@source/docs/Nextjs/2024-04-05-BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide/img/BuildingaComponentLibrarywithReactTypescriptandStorybookAComprehensiveGuide_12.png" />
<p>여기서 우리는 Storybook을 위한 정적 파일을 생성하기 위해 npm run build-storybook을 실행하고, 이 파일들은 storybook-static 디렉토리에 배치될 것입니다.</p>
<p>‘deploy’를 클릭하면, Storybook이 Netlify에 성공적으로 배포됩니다.</p>
<h1 id="마무리" tabindex="-1"><a class="header-anchor" href="#마무리" aria-hidden="true">#</a> 마무리</h1>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 포괄적인 가이드에서는 프로젝트 설정, 테스팅, 게시, 배포 및 로컬 테스트에 필요한 중요한 도구와 최상의 실천 방법에 대해 다루었습니다. 이러한 단계를 따르면 여러 프로젝트와 팀에서 사용할 수 있는 재사용 가능하고 견고한 React 컴포넌트를 만들 수 있습니다. 오픈 소스 라이브러리를 만드는 경우든 내부 UI 툴킷을 구축하는 경우든, 이제 공유 가능한 React 컴포넌트를 개발하기 위한 탄탄한 기반을 갖게 되었습니다.</p>
<p>이 컴포넌트 라이브러리 프로젝트의 특정 요구 사항에 맞게 이러한 방법을 적응하고 확장하는 것은 자유롭게 하세요. 즐거운 코딩되세요!</p>
</div></template>
