<template><div><img src="@source/docs/Nextjs/2024-04-05-BuildMicroFrontendsInReactIn3EasySteps/img/BuildMicroFrontendsInReactIn3EasySteps_0.png" />
<p>마이크로프론트엔드는 응용 프로그램을 구축하는 접근 방식으로, 프론트 엔드가 작고 독립적인 부분으로 나뉘어 각각이 자체 사용자 인터페이스와 기능을 갖도록 되어 있습니다. 이 독립적인 부분은 결합되어 완전한 응용 프로그램을 형성합니다.</p>
<p>이 블로그는 웹팩 모듈 페더레이션을 사용하여 React MFE 아키텍처를 구현하는 단계를 설명합니다. 컴포넌트 기반의 MFE와 전통적인 방식의 두 가지 대안을 나열합니다.</p>
<h1 id="컴포넌트-기반의-mfe-접근-방식" tabindex="-1"><a class="header-anchor" href="#컴포넌트-기반의-mfe-접근-방식" aria-hidden="true">#</a> 컴포넌트 기반의 MFE 접근 방식</h1>
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
<p>MFEs 아키텍처는 구성 요소 중심 개발에서 자연스럽게 발전하며, 두 가지 모두 자율적인 팀이 느슨하게 결합되고 유지 관리하기 쉬운 코드베이스를 개발하고 기능을 빠르고 독립적으로 제공할 수 있도록 하는 것을 목표로 합니다.</p>
<p>이 섹션에서는 React MFEs 솔루션을 생성하기 위해 Bit 스타터를 사용합니다 (Module Federation을 사용하여 구현됨).</p>
<p>다음을 실행하여 Bit을 설치합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx @teambit<span class="token operator">/</span>bvm install
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
<p>다음을 실행하여 Module Federation을 사용한 React MFE에 대한 완전한 컴포넌트 기반 솔루션을 갖춘 Bit 워크스페이스를 생성하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>bit <span class="token keyword">new</span> <span class="token class-name">module</span><span class="token operator">-</span>federation<span class="token operator">-</span>react my<span class="token operator">-</span>mf<span class="token operator">-</span>workspace <span class="token operator">--</span>env learnbit<span class="token punctuation">.</span>module<span class="token operator">-</span>federation<span class="token operator">/</span>mf<span class="token operator">-</span>react<span class="token operator">-</span>env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>🎊 축하합니다! Bit를 사용하여 컴포넌트 기반 Micro Frontend (MFE) 솔루션을 성공적으로 설정했습니다. 🎊</p>
<p>이 컴포넌트 기반 솔루션은 독립적인 Bit 컴포넌트의 구성으로 구현되어 있습니다. 호스트 앱, 원격 앱, UI 컴포넌트, 심지어 웹팩 구성도 — 모두 git 저장소나 프로젝트 빌드 설정과는 독립적으로 유지 및 전달할 수 있는 Bit 컴포넌트입니다.</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-BuildMicroFrontendsInReactIn3EasySteps/img/BuildMicroFrontendsInReactIn3EasySteps_1.png" alt="이미지"></p>
<p>프로젝트를 구성하고 추가 구성 요소 및 앱 구성 요소를 확장하는 방법에 대해 알아보려면 이 블로그를 읽어보세요:</p>
<h2 id="컴포넌트-기반-접근-방식을-사용하는-이유" tabindex="-1"><a class="header-anchor" href="#컴포넌트-기반-접근-방식을-사용하는-이유" aria-hidden="true">#</a> 컴포넌트 기반 접근 방식을 사용하는 이유</h2>
<p>MFE(Micro Frontends)는 종종 동일한 Bit 구성 요소를 사용하여 모든 앱에서 동일한 &quot;룩 앤 필&quot;을 유지합니다. 이러한 구성 요소에 대한 변경 사항은 모든 MFE에 자동으로 전파되며 쉽게 테스트하고 확인할 수 있습니다.</p>
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
<p>Bit 구성 요소는 개발, 빌드 및 배달을 위해 재사용 가능한 개발 환경을 사용합니다. 공유 환경을 사용하면 개발 및 빌드 프로세스가 모든 구성 요소 및 모든 MFE에 걸쳐 일관성 있게 유지됩니다. 공유 환경을 통해 동등한 수준의 품질과 일관성을 유지하면서 독립적으로 개발할 수 있습니다.</p>
<h1 id="mfe에-대한-전통적-접근-방식" tabindex="-1"><a class="header-anchor" href="#mfe에-대한-전통적-접근-방식" aria-hidden="true">#</a> MFE에 대한 전통적 접근 방식</h1>
<h2 id="_1-react-마이크로프런트엔드-프로젝트-설정" tabindex="-1"><a class="header-anchor" href="#_1-react-마이크로프런트엔드-프로젝트-설정" aria-hidden="true">#</a> 1. React 마이크로프런트엔드 프로젝트 설정</h2>
<p>첫 번째 마이크로프런트엔드를 구축하기 위해 React와 웹팩 모듈 연합을 사용하겠습니다.</p>
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
<li>마이크로프론트엔드 프로젝트 디렉토리를 생성하세요. 이름은 micro-host로 지어주세요.</li>
<li>아래 명령어를 실행하여 프로젝트를 시작하고 모든 종속 항목을 설치하세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm init <span class="token operator">-</span>y
npm install react react<span class="token operator">-</span>dom <span class="token operator">--</span>save
npm install @babel<span class="token operator">/</span>core @babel<span class="token operator">/</span>preset<span class="token operator">-</span>env @babel<span class="token operator">/</span>preset<span class="token operator">-</span>react babel<span class="token operator">-</span>loader css<span class="token operator">-</span>loader html<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin sass sass<span class="token operator">-</span>loader style<span class="token operator">-</span>loader webpack webpack<span class="token operator">-</span>cli webpack<span class="token operator">-</span>dev<span class="token operator">-</span>server <span class="token operator">--</span>save<span class="token operator">-</span>dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>package.json 파일을 열고 아래 npm 스크립트를 복사하여 붙여넣으세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"webpack"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token string">"webpack serve --watch-files ./src"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<li>아래 구성을 붙여넣어 babel.config.json 파일을 생성하세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"@babel/preset-env"</span><span class="token punctuation">,</span>
    <span class="token string">"@babel/preset-react"</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>아래 구성을 붙여넣어 webpack.config.js 파일을 생성하세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"html-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ModuleFederationPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"webpack/lib/container/ModuleFederationPlugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> deps <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./package.json"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>dependencies<span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"development"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">".css"</span><span class="token punctuation">,</span> <span class="token string">".scss"</span><span class="token punctuation">,</span> <span class="token string">".js"</span><span class="token punctuation">,</span> <span class="token string">".jsx"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.s?css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">"style-loader"</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"css-loader"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function-variable function">filter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                  <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">"data:"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                  <span class="token punctuation">}</span>
                  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">"sass-loader"</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.jsx?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"babel-loader"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(png|svg|jpg|jpeg|gif)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"asset/resource"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"public"</span><span class="token punctuation">,</span> <span class="token string">"index.html"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">ModuleFederationPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"FIRST_APP"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"remoteEntry.js"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">exposes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"./app"</span><span class="token operator">:</span> <span class="token string">"./src/components/App"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위의 구성에서 우리는 마이크로프론트엔드를 FIRST_APP이라고 이름 짓었습니다. App 컴포넌트를 공개하여 원격 URL을 통해 직접 통합할 수 있습니다.</p>
<ul>
<li>public 디렉토리를 생성하고 public/index.html 파일을 만들어 아래 코드를 붙여넣으세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>Micro App<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 파일은 React 웹 애플리케이션의 구조를 만듭니다. 다른 React 애플리케이션을 사용하는 것처럼 앱은 &quot;container&quot; div 내에 렌더링됩니다.</p>
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
<li><code v-pre>src</code> 디렉터리를 생성하고 <code v-pre>src/index.js</code> 파일을 만들어 아래 코드를 붙여넣으세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StrictMode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createRoot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-dom/client"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MainApp <span class="token keyword">from</span> <span class="token string">'./components/Main'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> rootElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"container"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function">createRoot</span><span class="token punctuation">(</span>rootElement<span class="token punctuation">)</span><span class="token punctuation">;</span>

root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>StrictMode<span class="token operator">></span>
    <span class="token operator">&lt;</span>MainApp <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>StrictMode<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서는 React 18을 사용하며, MainApp 컴포넌트는 웹 브라우저에서 애플리케이션을 바로 사용할 수 있도록 만들어졌습니다.</p>
<ul>
<li><code v-pre>src/components</code> 디렉터리를 생성하고 <code v-pre>App.js</code> 파일을 만들어 아래 코드를 붙여넣으세요:</li>
</ul>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./styles.css"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onChange <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"MicroApp"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>Micro App<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>input onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token string">"text"</span> placeholder<span class="token operator">=</span><span class="token string">"Enter your name"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 App 컴포넌트는 프로젝트에서 노출할 주요 마이크로프론트엔드입니다. 비슷하게 더 많은 컴포넌트를 작성하고 webpack.config.js를 사용하여 노출할 수 있습니다.</p>
<ul>
<li>src/components/Main.js 파일을 생성하고 아래 코드를 붙여넣기하세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./styles.css"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MainApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h3 style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">'center'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>name <span class="token operator">?</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>Your name is<span class="token operator">:</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
      <span class="token operator">&lt;</span>App onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setName</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<p>MainApp 컴포넌트는 앱을 다른 React 앱처럼 사용할 수 있도록 하는 용도로만 사용됩니다.</p>
<ul>
<li>src/components/styles.css 파일을 생성하고 아래 코드를 붙여넣기하세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>MicroApp <span class="token punctuation">{</span>
    box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>
    margin<span class="token operator">-</span>top<span class="token operator">:</span> 100px<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 30px<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">95</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> 2px solid black<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 12px<span class="token punctuation">;</span>
    font<span class="token operator">-</span>family<span class="token operator">:</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>MicroApp input <span class="token punctuation">{</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 32px<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 8px<span class="token punctuation">;</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 2px solid gray<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 350px<span class="token punctuation">;</span>
  padding<span class="token operator">-</span>left<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  padding<span class="token operator">-</span>right<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-첫-번째-마이크로프론트앱-부팅하기" tabindex="-1"><a class="header-anchor" href="#_2-첫-번째-마이크로프론트앱-부팅하기" aria-hidden="true">#</a> 2. 첫 번째 마이크로프론트앱 부팅하기</h2>
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
<p>당신의 마이크로프론트엔드 앱 서버를 시작하려면 아래 명령을 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>앱 서버는 8080 포트에서 시작됩니다. 마이크로프론트엔드 앱을 열어보려면 http://localhost:8080/을 방문하세요.</p>
<img src="https://miro.medium.com/v2/resize:fit:1400/0*-jAvO7TLcyASkefO.gif" />
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
<h2 id="_3-react에서-microfrontend-통합하기" tabindex="-1"><a class="header-anchor" href="#_3-react에서-microfrontend-통합하기" aria-hidden="true">#</a> 3. React에서 MicroFrontend 통합하기</h2>
<p>리액트에서 다른 마이크로프론트앤드 앱을 통합하는 것은 매우 간단합니다. 마이크로프론트앤드 앱은 포트 8080에서 호스팅되며 두 번째 앱은 웹팩을 통해 노출된 원격 URL을 통합합니다.</p>
<ul>
<li>프로젝트 디렉토리를 생성하세요. 예를 들어: micro-client.</li>
<li>아래 명령어를 실행하여 프로젝트를 초기화하고 의존성을 모두 설치하세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm init <span class="token operator">-</span>y
npm install react react<span class="token operator">-</span>dom <span class="token operator">--</span>save
npm install @babel<span class="token operator">/</span>core @babel<span class="token operator">/</span>preset<span class="token operator">-</span>env @babel<span class="token operator">/</span>preset<span class="token operator">-</span>react babel<span class="token operator">-</span>loader css<span class="token operator">-</span>loader html<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin sass sass<span class="token operator">-</span>loader style<span class="token operator">-</span>loader webpack webpack<span class="token operator">-</span>cli webpack<span class="token operator">-</span>dev<span class="token operator">-</span>server <span class="token operator">--</span>save<span class="token operator">-</span>dev
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
<ul>
<li>package.json 파일을 열고 아래 npm 스크립트를 복사하여 붙여넣기하세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"webpack"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token string">"webpack serve --watch-files ./src"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>babel.config.json 파일을 생성하고 아래 구성을 붙여넣기하세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"@babel/preset-env"</span><span class="token punctuation">,</span>
    <span class="token string">"@babel/preset-react"</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<li><code v-pre>webpack.config.js</code> 파일을 생성하고 아래 구성을 붙여넣으세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"html-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ModuleFederationPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"webpack/lib/container/ModuleFederationPlugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> deps <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./package.json"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>dependencies<span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"development"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">".css"</span><span class="token punctuation">,</span> <span class="token string">".scss"</span><span class="token punctuation">,</span> <span class="token string">".js"</span><span class="token punctuation">,</span> <span class="token string">".jsx"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.s?css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">"style-loader"</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"css-loader"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function-variable function">filter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                  <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">"data:"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                  <span class="token punctuation">}</span>
                  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">"sass-loader"</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.jsx?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"babel-loader"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"public"</span><span class="token punctuation">,</span> <span class="token string">"index.html"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">ModuleFederationPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"MICRO"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">remotes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token constant">FIRST_APP</span><span class="token operator">:</span> <span class="token string">"FIRST_APP@http://localhost:8080/remoteEntry.js"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 구성에서는 우리의 마이크로프론트앱의 원격 FIRST_APP을 설정하고 있습니다.</p>
<ul>
<li><code v-pre>public</code> 디렉토리를 생성하고 <code v-pre>public/index.html</code> 파일을 생성하고 아래 코드를 붙여넣으세요:</li>
</ul>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>Micro App<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>body style<span class="token operator">=</span><span class="token string">"width: 100%; height: 100%"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>src 디렉토리를 만들고 src/index.js 파일을 생성하여 아래 코드를 붙여넣어주세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StrictMode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createRoot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-dom/client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">"./App"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> rootElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"container"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function">createRoot</span><span class="token punctuation">(</span>rootElement<span class="token punctuation">)</span><span class="token punctuation">;</span>

root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>StrictMode<span class="token operator">></span>
    <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>StrictMode<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>src 디렉토리를 만들고 src/App.js 파일을 생성하여 아래 코드를 붙여넣어주세요:```</li>
</ul>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> lazy<span class="token punctuation">,</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./styles.css"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> FirstApp <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"FIRST_APP/app"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"App"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>두 번째 앱입니다<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>마이크로 호스트 앱이 여기에 통합되어 있습니다<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token punctuation">{</span> name <span class="token operator">?</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>당신의 이름은<span class="token operator">:</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span> <span class="token operator">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>span<span class="token operator">></span>로딩 중<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>FirstApp onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setName</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>src/components/styles.css 파일을 생성하고 아래 코드를 붙여넣으세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>App <span class="token punctuation">{</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
  text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>아래 명령어로 두 번째 앱을 시작하세요:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> start
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 명령어를 입력하면 앱이 8081 포트에서 시작됩니다. 애플리케이션을 열어서 확인하려면 http://localhost:8081/을 방문하세요.</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/0*X2mpkT8H7Rs0sCQM.gif" alt="이미지"></p>
<p>두 번째 React 앱에서는 원격 URL을 사용하여 마이크로프론트엔드 앱을 로드합니다.</p>
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
<p>이 자습서의 코드는 여기에서 찾을 수 있습니다.</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>요약하면, 재사용 가능하고 미래 지향적인 애플리케이션을 구축하는 것은 선행하는 어떠한 비즈니스나 조직에게 필수적입니다. React 및 Webpack Module Federation을 사용하여 마이크로 프론트엔드를 구축하는 것은 이 목표를 달성하는 훌륭한 방법입니다.</p>
<p>프론트엔드를 더 작고 독립적인 구성 요소로 분해함으로써, 보다 유연하고 모듈식 애플리케이션을 만들 수 있습니다. 이를 통해 애플리케이션을 유지보수하고 업데이트하기가 더 쉬워지며, 또한 작성해야 하는 중복 코드의 양을 줄일 수도 있습니다.</p>
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
<h2 id="더-알아보기" tabindex="-1"><a class="header-anchor" href="#더-알아보기" aria-hidden="true">#</a> 더 알아보기:</h2>
</div></template>
