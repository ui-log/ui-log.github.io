<template><div><p>웹팩은 React 프로젝트에서 일반적으로 사용되는 인기 있는 Javascript 모듈 번들러입니다. 이는 프로젝트 자산을 관리하고 번들하는 데 도움이 됩니다. 코드, 자산 및 종속성을 구성하고 최적화하는 데 도움을 줍니다.</p>
<p>다음은 React 프로젝트에서 웹팩을 설치하고 구성하는 방법을 단계별 가이드입니다:</p>
<h3 id="단계-1-react-프로젝트-생성" tabindex="-1"><a class="header-anchor" href="#단계-1-react-프로젝트-생성" aria-hidden="true">#</a> 단계 1: React 프로젝트 생성</h3>
<p>아직 React 프로젝트를 생성하지 않았다면 <code v-pre>create-react-app</code>을 사용하여 빠르게 새 프로젝트를 설정할 수 있습니다. 터미널을 열고 다음 명령을 실행하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>react<span class="token operator">-</span>app my<span class="token operator">-</span>react<span class="token operator">-</span>app
cd my<span class="token operator">-</span>react<span class="token operator">-</span>app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="단계-2-웹팩-및-관련-패키지-설치" tabindex="-1"><a class="header-anchor" href="#단계-2-웹팩-및-관련-패키지-설치" aria-hidden="true">#</a> 단계 2: 웹팩 및 관련 패키지 설치</h3>
<p>npm (Node Package Manager)을 사용하여 웹팩과 관련 도구들을 설치해 보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install webpack webpack<span class="token operator">-</span>cli webpack<span class="token operator">-</span>dev<span class="token operator">-</span>server <span class="token operator">--</span>save<span class="token operator">-</span>dev
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
<ul>
<li>
<p><code v-pre>webpack</code>: 웹팩의 핵심 모듈입니다.</p>
</li>
<li>
<p><code v-pre>webpack-cli</code>: 웹팩의 명령줄 인터페이스입니다.</p>
</li>
<li>
<p><code v-pre>webpack-dev-server</code>: 실시간 새로고침을 제공하는 개발 서버입니다.</p>
</li>
</ul>
<h3 id="단계-3-웹팩-구성-파일-만들기" tabindex="-1"><a class="header-anchor" href="#단계-3-웹팩-구성-파일-만들기" aria-hidden="true">#</a> 단계 3: 웹팩 구성 파일 만들기</h3>
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
<p>프로젝트 루트에 <code v-pre>webpack.config.js</code>라는 이름의 Webpack 구성 파일을 생성해주세요. 아래 내용을 추가해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">"./src/index.js"</span><span class="token punctuation">,</span> <span class="token comment">// 애플리케이션의 진입점</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"bundle.js"</span><span class="token punctuation">,</span> <span class="token comment">// 출력 번들 파일명</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"dist"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 출력 디렉토리</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(js|jsx)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"babel-loader"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">".js"</span><span class="token punctuation">,</span> <span class="token string">".jsx"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"public"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 이 디렉토리에서 파일 제공</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span> <span class="token comment">// 개발 서버 포트</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 서버 시작 시 기본 웹 브라우저 열기</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 구성 파일은 애플리케이션의 진입점(<code v-pre>src</code> 디렉토리의 <code v-pre>index.js</code>)과 출력 번들 파일(<code v-pre>dist</code> 디렉토리의 <code v-pre>bundle.js</code>)을 지정합니다. 또한 JavaScript 및 JSX 파일을 변환하기 위해 Babel을 사용하는 규칙을 정의합니다.</p>
<h3 id="단계-4-package-json-업데이트" tabindex="-1"><a class="header-anchor" href="#단계-4-package-json-업데이트" aria-hidden="true">#</a> 단계 4: <code v-pre>package.json</code> 업데이트</h3>
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
<p><code v-pre>package.json</code> 파일을 열어서 Webpack 개발 서버를 실행하는 <code v-pre>”start”</code> 스크립트를 추가해보세요. 다음과 같이 <code v-pre>”scripts”</code> 섹션을 업데이트해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token string">"webpack serve --mode development --open"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"webpack --mode production"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><code v-pre>”start”</code> 스크립트는 개발 모드에서 Webpack 개발 서버를 실행합니다.</p>
</li>
<li>
<p><code v-pre>”build”</code> 스크립트는 애플리케이션을 프로덕션용으로 번들합니다.</p>
</li>
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
<h3 id="단계-5-public-디렉토리-생성하기" tabindex="-1"><a class="header-anchor" href="#단계-5-public-디렉토리-생성하기" aria-hidden="true">#</a> 단계 5: <code v-pre>public</code> 디렉토리 생성하기</h3>
<p>프로젝트의 루트에 <code v-pre>public</code> 디렉토리를 만듭니다. 이 디렉토리에는 번들된 JavaScript 파일을 로드하는 HTML 파일이 포함됩니다.</p>
<h3 id="단계-6-public-index-html-파일-생성하기" tabindex="-1"><a class="header-anchor" href="#단계-6-public-index-html-파일-생성하기" aria-hidden="true">#</a> 단계 6: <code v-pre>public/index.html</code> 파일 생성하기</h3>
<p>다음 내용을 가진 <code v-pre>public</code> 디렉토리 안에 <code v-pre>index.html</code> 파일을 생성하세요:</p>
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
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"utf-8"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>React App<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>

<span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"root"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="단계-7-개발-서버-실행하기" tabindex="-1"><a class="header-anchor" href="#단계-7-개발-서버-실행하기" aria-hidden="true">#</a> 단계 7: 개발 서버 실행하기</h3>
<p>이제 터미널에서 다음 명령어를 실행하여 개발 서버를 실행할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm start
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
<p>웹팩 개발 서버를 시작하면 React 앱이 <code v-pre>http://localhost:3000</code> 에서 사용 가능해집니다.</p>
<h3 id="추가-사항" tabindex="-1"><a class="header-anchor" href="#추가-사항" aria-hidden="true">#</a> 추가 사항:</h3>
<ul>
<li>
<p>이는 웹팩을 사용한 React 프로젝트의 기본 설정입니다. 프로젝트의 복잡성에 따라 추가적인 로더(loader) 및 플러그인(plugins)을 설치해야 할 수도 있습니다.</p>
</li>
<li>
<p>프로젝트 요구 사항에 따라 웹팩 구성이 더욱 복잡해질 수 있습니다. 제공된 구성은 시작점일 뿐이며, 사용자 지정할 수 있습니다.</p>
</li>
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
<ul>
<li>만약 Create React App을 사용하고 있다면, 자체 미리 구성된 Webpack 설정이 함께 제공되므로 일반적으로 Webpack을 수동으로 구성할 필요가 없습니다.</li>
</ul>
</div></template>
