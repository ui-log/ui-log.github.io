<template><div><img src="@source/docs/Tech/2024-04-23-CreatingaReactandTypescriptappwithWebpack/img/CreatingaReactandTypescriptappwithWebpack_0.png" />
<p>이 글은 간단한 React + Webpack 프로젝트에 Typescript 지원을 추가하는 방법을 안내합니다.</p>
<h1 id="단계-1-typescript-및-타입-정의-설치하기" tabindex="-1"><a class="header-anchor" href="#단계-1-typescript-및-타입-정의-설치하기" aria-hidden="true">#</a> 단계 1: Typescript 및 타입 정의 설치하기</h1>
<p>첫 번째 단계는 간단히 Typescript를 설치하는 것입니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install typescript <span class="token operator">--</span>save<span class="token operator">-</span>dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>그런 다음, 이미 사용 중인 모든 라이브러리에 대한 유형 정의를 설치해야 합니다. 일반적으로 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install @types<span class="token operator">/</span>node @types<span class="token operator">/</span>react @types<span class="token operator">/</span>react<span class="token operator">-</span>dom @types<span class="token operator">/</span>jest <span class="token operator">--</span>save<span class="token operator">-</span>dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="단계-2-웹팩-구성하기" tabindex="-1"><a class="header-anchor" href="#단계-2-웹팩-구성하기" aria-hidden="true">#</a> 단계 2: 웹팩 구성하기</h1>
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
<p>다양한 옵션이 있지만 저희는 설정에 ts-loader를 사용할 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install ts<span class="token operator">-</span>loader <span class="token operator">--</span>save<span class="token operator">-</span>dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>그 다음으로 웹팩에 TS 파일을 처리하도록 지시해야 합니다. 이를 위해 webpack.config.js 파일을 업데이트하여 ts 및 tsx 확장자도 지원하도록 설정할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>

<span class="token punctuation">{</span>
  <span class="token comment">// ...,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// `js` 및 `jsx` 파일은 `babel-loader`를 사용하여 구문 분석됩니다</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(js|jsx)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"babel-loader"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// `ts` 및 `tsx` 파일은 `ts-loader`를 사용하여 구문 분석됩니다</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(ts|tsx)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"ts-loader"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"*"</span><span class="token punctuation">,</span> <span class="token string">".js"</span><span class="token punctuation">,</span> <span class="token string">".jsx"</span><span class="token punctuation">,</span> <span class="token string">".ts"</span><span class="token punctuation">,</span> <span class="token string">".tsx"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="단계-3-typescript-구성하기" tabindex="-1"><a class="header-anchor" href="#단계-3-typescript-구성하기" aria-hidden="true">#</a> 단계 3: TypeScript 구성하기</h1>
<p>이 프로젝트를 위한 TypeScript 설정 파일을 생성해 봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"jsx"</span><span class="token operator">:</span> <span class="token string">"react"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"noImplicitAny"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"module"</span><span class="token operator">:</span> <span class="token string">"ES6"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"target"</span><span class="token operator">:</span> <span class="token string">"ES5"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"outDir"</span><span class="token operator">:</span> <span class="token string">"./build/"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"preserveConstEnums"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"removeComments"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"sourceMap"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 튜토리얼을 위해 React + TS + Webpack 통합에 필요한 최소한의 설정만 추가했지만, 모든 옵션에 대해 자세히 알아보고 싶다면 공식 문서에서 확인할 수 있습니다.</p>
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
<h1 id="단계-4-typescript-사용-시작하기" tabindex="-1"><a class="header-anchor" href="#단계-4-typescript-사용-시작하기" aria-hidden="true">#</a> 단계 4: Typescript 사용 시작하기</h1>
<p>이미 프로젝트에 일부 JS 파일이 있다면, 지금이 바로 그 확장자를 js에서 ts로, jsx에서 tsx로 변경하는 좋은 시기입니다!</p>
<p>그런 다음, 앱을 다시 시작하면 모든 것이 여전히 작동하는 것을 보게 될 거에요 ✨</p>
<h1 id="여기까지입니다" tabindex="-1"><a class="header-anchor" href="#여기까지입니다" aria-hidden="true">#</a> 여기까지입니다!</h1>
</div></template>
