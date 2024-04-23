<template><div><img src="@source/docs/Nextjs/2024-04-05-AddingESLintandPrettiertoaViteJSReactproject/img/AddingESLintandPrettiertoaViteJSReactproject_0.png" />
<p>요즘 ViteJS를 Create React App의 대안으로 시도해 보기로 결정했어요. ViteJS는 이미 React 애플리케이션을 위한 기본 템플릿을 제공하지만 ESLint와 Prettier가 포함되어 있지는 않아요. 이 포스트에서는 ViteJS로 생성된 React 프로젝트에서 이 두 패키지를 설치하고 구성하는 방법을 간단히 살펴볼 거에요.</p>
<h1 id="단계-1-종속성-설치" tabindex="-1"><a class="header-anchor" href="#단계-1-종속성-설치" aria-hidden="true">#</a> 단계 1: 종속성 설치</h1>
<p>ESLint와 Prettier 외에도 다음 종속성을 설치할 거에요:</p>
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
<ul>
<li>@typescript-eslint/eslint-plugin: TypeScript 프로젝트용 린트 규칙 모음입니다.</li>
<li>@typescript-eslint/parser: TypeScript용 코드 구문 분석기입니다.</li>
<li>eslint-config-prettier: ESLint와 Prettier 간의 충돌하는 규칙을 비활성화하기 위한 ESLint 구성입니다.</li>
<li>eslint-plugin-import: ES6+ import/export 구문을 처리하기 위해 ESLint를 활성화하는 플러그인입니다.</li>
<li>eslint-plugin-jsx-a11y: 몇 가지 접근성 규칙이 있는 플러그인입니다.</li>
<li>eslint-plugin-react: React 프로젝트를 위한 규칙이 있는 플러그인입니다.</li>
<li>eslint-plugin-react-hooks: React 훅을 함수 컴포넌트 외부에서 사용하지 않도록 하는 규칙이 있는 플러그인입니다.</li>
</ul>
<p>모든 종속성을 설치하려면 다음 명령을 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add <span class="token operator">-</span><span class="token constant">D</span> eslint prettier @typescript<span class="token operator">-</span>eslint<span class="token operator">/</span>eslint<span class="token operator">-</span>plugin @typescript<span class="token operator">-</span>eslint<span class="token operator">/</span>parser eslint<span class="token operator">-</span>config<span class="token operator">-</span>prettier eslint<span class="token operator">-</span>plugin<span class="token operator">-</span><span class="token keyword">import</span> eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>jsx<span class="token operator">-</span>a11y eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>react eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>react<span class="token operator">-</span>hooks
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>npm을 사용하는 경우 yarn add -D를 npm install --dev로 대체하세요.</p>
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
<h1 id="단계-2-eslint-구성" tabindex="-1"><a class="header-anchor" href="#단계-2-eslint-구성" aria-hidden="true">#</a> 단계 2: ESLint 구성</h1>
<p>의존성이 이미 설치되었으니, ESLint 구성 파일을 만드는 시간입니다. 먼저, ESLint 구성을 관리할 .eslintrc 파일을 만들겠습니다.</p>
<p>.eslintrc</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"eslint:recommended"</span><span class="token punctuation">,</span>
    <span class="token string">"plugin:react/recommended"</span><span class="token punctuation">,</span>
    <span class="token string">"plugin:react-hooks/recommended"</span><span class="token punctuation">,</span>
    <span class="token string">"plugin:import/recommended"</span><span class="token punctuation">,</span>
    <span class="token string">"plugin:jsx-a11y/recommended"</span><span class="token punctuation">,</span>
    <span class="token string">"plugin:@typescript-eslint/recommended"</span><span class="token punctuation">,</span>
    <span class="token string">"eslint-config-prettier"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">"settings"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"react"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"version"</span><span class="token operator">:</span> <span class="token string">"detect"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"import/resolver"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"node"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"paths"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">"src"</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">"extensions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">".js"</span><span class="token punctuation">,</span>
          <span class="token string">".jsx"</span><span class="token punctuation">,</span>
          <span class="token string">".ts"</span><span class="token punctuation">,</span>
          <span class="token string">".tsx"</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"rules"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"no-unused-vars"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"error"</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">"vars"</span><span class="token operator">:</span> <span class="token string">"all"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"args"</span><span class="token operator">:</span> <span class="token string">"after-used"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"ignoreRestSiblings"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token string-property property">"argsIgnorePattern"</span><span class="token operator">:</span> <span class="token string">"^_"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"react/react-in-jsx-scope"</span><span class="token operator">:</span> <span class="token string">"off"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>안녕하세요! 사용하지 않는 변수가 발생하면 에러가 발생하도록 no-unused-vars를 설정했어요. react/react-in-jsx-scope 규칙을 비활성화했기 때문에 ESLint에서 JSX 파일에서 React를 가져오도록 강제하지 않아요 (import React from <code v-pre>react</code>). React 17.0부터는 JSX 파일에서 React를 가져오는 것이 필수가 아니에요.</p>
<p>이제 .eslintignore 파일을 만들 거에요. 이 파일은 ESLint에게 어떤 파일을 린트하지 않아야 하는지 알려줄 거에요:</p>
<p>.eslintignore</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>node_modules<span class="token operator">/</span>
dist<span class="token operator">/</span>
env<span class="token punctuation">.</span>d<span class="token punctuation">.</span>ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>프로젝트 단추에서 시작하여 .ts 및 .tsx 파일 전체에 대해 eslint를 실행하도록 lint 스크립트를 package.json의 스크립트 섹션에 추가하는 것이 좋습니다. 그러면 yarn lint 또는 npm run lint을 실행하여 ESLint를 실행할 수 있습니다:</p>
<p>package.json</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token string-property property">"lint"</span><span class="token operator">:</span> <span class="token string">"eslint . --ext .ts,.tsx"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>lint 스크립트는 프로젝트 단추에서 시작하여 모든 .ts 및 .tsx 파일 위에 eslint를 실행할 것입니다.</p>
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
<h1 id="단계-3-prettier-구성" tabindex="-1"><a class="header-anchor" href="#단계-3-prettier-구성" aria-hidden="true">#</a> 단계 3: Prettier 구성</h1>
<p>ESLint를 구성할 때와 마찬가지로, 이제 Prettier 설정을 담은 .prettierrc 파일을 만들겠습니다. 사용 가능한 옵션에 대해 더 알아보려면 Prettier 문서를 확인해보세요.</p>
<p>.prettierrc</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"trailingComma"</span><span class="token operator">:</span> <span class="token string">"all"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"tabWidth"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token string-property property">"semi"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">"singleQuote"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">"printWidth"</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
  <span class="token string-property property">"bracketSpacing"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">"endOfLine"</span><span class="token operator">:</span> <span class="token string">"lf"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그리고, .prettierignore:</p>
<p>.prettierignore</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>node_modules<span class="token operator">/</span>
dist<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-4-vscode와-통합하기" tabindex="-1"><a class="header-anchor" href="#단계-4-vscode와-통합하기" aria-hidden="true">#</a> 단계 4: VSCode와 통합하기</h1>
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
<p>최종적으로, 우리는 VSCode를 구성하여 ESLint와 Prettier를 사용하여 각각 코드 문제를 찾고 형식을 정리할 것입니다. 아직 이 확장 프로그램을 설치하지 않으셨다면, 설치해주세요: Prettier — Code formatter와 ESLint.</p>
<p>이미 설치된 확장 프로그램이 있다면, VSCode를 구성하여 파일 저장 시 Prettier를 사용하여 형식을 정리해야 합니다. 현재 작업 영역에 유효한 구성 파일이 있으면 (.eslintrc), ESLint 확장 프로그램이 자동으로 작동해야 합니다.</p>
<p>아직 .vscode/settings.json 파일이 없다면, 다음 설정으로 파일을 만들어주세요:</p>
<p>.vscode/settings.json</p>
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
  <span class="token string-property property">"editor.formatOnSave"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>잘 했어요! 이제 ESLint가 코드 문제를 편집하는 동안 강조하고, Prettier는 저장 시에 가능한 경우 서식을 적용해줄 거예요.</p>
<img src="https://miro.medium.com/v2/resize:fit:1400/0*X47IZ1le2c5GwdDd.gif" />
</div></template>
