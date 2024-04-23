<template><div><p><img src="@source/docs/Nextjs/2024-04-05-CreatingaChromeExtensionwithReactAStep-by-StepGuide/img/CreatingaChromeExtensionwithReactAStep-by-StepGuide_0.png" alt="Creating a Chrome extension with a React app built using TypeScript and bundled with Webpack"></p>
<p>크롬 익스텐션을 TypeScript를 사용하여 빌드하고 Webpack으로 번들링된 React 앱으로 만드는 것은 현대적인 브라우저 익스텐션을 만드는 좋은 방법입니다. 이 블로그에서는 npx create-react-app 템플릿을 사용하여 TypeScript로 크롬 익스텐션을 만드는 과정을 안내하고 Webpack을 사용하여 앱을 번들링하는 방법을 설명하겠습니다. 또한 Manifest V3의 최신 버전을 사용할 것입니다.</p>
<p>GitHub 저장소</p>
<p>다소 조급한 기분인가요? 바로 GitHub 저장소로 이동하세요. 도움이 되었다면 꼭 별표를 남겨 주세요.</p>
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
<li>https://github.com/Harshita-mindfire/react-chrome-extension</li>
</ul>
<p>준비물</p>
<p>개발 프로세스에 착수하기 전에 React 및 해당 핵심 개념에 대한 기본적인 이해가 필요합니다. 또한 JavaScript와 HTML에 대한 기본적인 이해도 필요합니다.</p>
<p>게다가, 다음 도구가 필요합니다:</p>
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
<li>구글 크롬</li>
<li>Visual Studio Code 또는 다른 코드 편집기</li>
<li>Node.js 및 npm (Node Package Manager)</li>
</ul>
<h1 id="단계-1-react-앱-만들기" tabindex="-1"><a class="header-anchor" href="#단계-1-react-앱-만들기" aria-hidden="true">#</a> 단계 1: React 앱 만들기</h1>
<p>시작하려면 새로운 TypeScript React 프로젝트를 생성해야 합니다. 터미널이나 명령 프롬프트를 열고 다음 명령을 실행합니다. 이렇게 하면 필요한 모든 종속 항목이 있는 새로운 React 프로젝트가 만들어집니다. 새로 생성된 프로젝트 폴더로 이동합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>react<span class="token operator">-</span>app react<span class="token operator">-</span>chrome<span class="token operator">-</span>ext <span class="token operator">--</span>template typescript
cd react<span class="token operator">-</span>chrome<span class="token operator">-</span>ext
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
<p>지금 필요하지 않은 파일을 삭제해 봅시다. 삭제 후에 폴더 구조가 이렇게 되도록 해보세요:</p>
<p><img src="@source/docs/Nextjs/2024-04-05-CreatingaChromeExtensionwithReactAStep-by-StepGuide/img/CreatingaChromeExtensionwithReactAStep-by-StepGuide_1.png" alt="폴더 구조 이미지"></p>
<p>App.tsx를 간단한 Hello World 컴포넌트로 업데이트해 봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"App"</span><span class="token operator">></span>
      Hello World
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
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
<p>이제 index.tsx를 수정하여 DOM에서 루트 요소를 생성하고 앱을 추가해봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom/client'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span>
root<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">"container"</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
<span class="token keyword">const</span> rootDiv <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
rootDiv<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">></span>
    <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 App.css에 매우 간단한 CSS를 추가해봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>App <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> white<span class="token punctuation">;</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>container <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 15rem<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 15rem<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> green<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="단계-2-웹팩-추가" tabindex="-1"><a class="header-anchor" href="#단계-2-웹팩-추가" aria-hidden="true">#</a> 단계 2: 웹팩 추가</h1>
<p>다음으로, React 앱을 번들링하기 위해 필요한 종속성을 설치해야 합니다. 터미널에서 다음 명령어를 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev webpack webpack<span class="token operator">-</span>cli copy<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin css<span class="token operator">-</span>loader ts<span class="token operator">-</span>loader html<span class="token operator">-</span>webpack<span class="token operator">-</span>plugin ts<span class="token operator">-</span>node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>웹팩 구성 업데이트</p>
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
<p>기본적으로 create-react-app 템플릿은 Webpack 구성 파일을 제공하지 않기 때문에 직접 만들어야 합니다. 프로젝트의 루트 디렉토리에 webpack.config.js라는 새 파일을 생성하고 다음 코드를 추가해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HTMLPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"html-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> CopyPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"copy-webpack-plugin"</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">"./src/index.tsx"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"production"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.tsx?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
               <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                 <span class="token punctuation">{</span>
                  <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"ts-loader"</span><span class="token punctuation">,</span>
                   <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                     <span class="token literal-property property">compilerOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">noEmit</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span>
                  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
               <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
              <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.css$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
               <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token string">"style-loader"</span><span class="token punctuation">,</span>
                  <span class="token string">"css-loader"</span>
               <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">CopyPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">patterns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">"manifest.json"</span><span class="token punctuation">,</span> <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token string">"../manifest.json"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token operator">...</span><span class="token function">getHtmlPlugins</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"index"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">".tsx"</span><span class="token punctuation">,</span> <span class="token string">".ts"</span><span class="token punctuation">,</span> <span class="token string">".js"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"dist/js"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"[name].js"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getHtmlPlugins</span><span class="token punctuation">(</span><span class="token parameter">chunks</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> chunks<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span> <span class="token operator">=></span>
            <span class="token keyword">new</span> <span class="token class-name">HTMLPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"React extension"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>chunk<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.html</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span>chunk<span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 구성 파일은 앱의 진입점(즉, index.tsx 파일), 출력 파일 이름, TypeScript로더, 스타일 로더 및 출력 디렉토리를 정의합니다.
이제 webpack을 구성했으니, package.json 파일을 업데이트하여 다음 스크립트를 추가해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"webpack --config webpack.config.js"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"watch"</span><span class="token operator">:</span> <span class="token string">"webpack -w --config webpack.config.js"</span>
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
<p>이 스크립트를 사용하면 npm run build 명령어를 사용하여 확장 프로그램을 빌드하거나 npm run watch 명령어를 사용하여 웹팩을 감시 모드로 실행할 수 있습니다.</p>
<h1 id="단계-3-manifest-파일-추가하기" tabindex="-1"><a class="header-anchor" href="#단계-3-manifest-파일-추가하기" aria-hidden="true">#</a> 단계 3: Manifest 파일 추가하기</h1>
<p>Manifest 파일은 Chrome 확장 프로그램의 메타데이터와 권한을 정의하는 데 사용됩니다. 프로젝트의 루트 디렉토리에 manifest.json이라는 새 파일을 만들고 다음 코드를 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"manifest_version"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"React Chrome Extension"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"description"</span><span class="token operator">:</span> <span class="token string">"React와 TypeScript로 만든 Chrome 확장 프로그램입니다."</span><span class="token punctuation">,</span>
    <span class="token string-property property">"action"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"default_popup"</span><span class="token operator">:</span> <span class="token string">"js/index.html"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"default_title"</span><span class="token operator">:</span> <span class="token string">"React Chrome Extension"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
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
<p>이 매니페스트 파일은 확장 프로그램의 이름, 버전, 설명을 지정합니다. 또한 팝업 창을 정의합니다.</p>
<h1 id="단계-4-앱-빌드하기" tabindex="-1"><a class="header-anchor" href="#단계-4-앱-빌드하기" aria-hidden="true">#</a> 단계 4: 앱 빌드하기</h1>
<p>마지막으로 터미널에서 <code v-pre>npm run build</code> 명령을 실행하여 확장 프로그램을 빌드하세요. 스크립트가 완료되면 새로운 <code v-pre>/dist</code> 폴더가 앱의 루트에 생성됩니다:</p>
<p><img src="@source/docs/Nextjs/2024-04-05-CreatingaChromeExtensionwithReactAStep-by-StepGuide/img/CreatingaChromeExtensionwithReactAStep-by-StepGuide_2.png" alt="이미지"></p>
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
<h1 id="단계-5-확장-프로그램-로드" tabindex="-1"><a class="header-anchor" href="#단계-5-확장-프로그램-로드" aria-hidden="true">#</a> 단계 5: 확장 프로그램 로드</h1>
<ul>
<li>Chrome에서 확장 프로그램을 로드하려면 Chrome을 열고 주소 표시줄에 chrome://extensions를 입력하여 확장 프로그램 페이지로 이동하십시오. 그런 다음 &quot;압축 해제된 확장 프로그램을 로드&quot; 버튼을 클릭하고 프로젝트의 dist 디렉토리를 선택하십시오.</li>
<li>확장 프로그램을 테스트하려면 확장 프로그램 페이지를 다시로드하고 확장 프로그램 아이콘을 클릭하십시오.</li>
</ul>
<p><img src="@source/docs/Nextjs/2024-04-05-CreatingaChromeExtensionwithReactAStep-by-StepGuide/img/CreatingaChromeExtensionwithReactAStep-by-StepGuide_3.png" alt="이미지"></p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
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
<p>그게 다야! TypeScript와 Webpack을 사용하여 간단한 &quot;Hello World&quot; 크롬 확장 프로그램을 만들었어요. 여기서부터는 크롬 확장 프로그램 API를 탐험하고 더 복잡한 확장 프로그램을 만들어 볼 수 있어요. 제 블로그가 React로 크롬 확장 프로그램을 만들기를 시작하는 데 도움이 되었으면 좋겠어요.</p>
</div></template>
