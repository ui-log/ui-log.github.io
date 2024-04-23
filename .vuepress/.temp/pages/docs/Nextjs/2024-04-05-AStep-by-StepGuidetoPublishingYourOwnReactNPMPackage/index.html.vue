<template><div><img src="@source/docs/Nextjs/2024-04-05-AStep-by-StepGuidetoPublishingYourOwnReactNPMPackage/img/AStep-by-StepGuidetoPublishingYourOwnReactNPMPackage_0.png" />
<h1 id="_1-리액트-앱-만들기" tabindex="-1"><a class="header-anchor" href="#_1-리액트-앱-만들기" aria-hidden="true">#</a> 1. 리액트 앱 만들기</h1>
<p>당신의 React npm 패키지를 위해 다음과 같은 파일 구조를 만드세요:</p>
<p>my-react-package/
├── src/
│ ├── components/
│ │ ├── MyComponent.js
│ ├── index.js
│ └── styles.css
├── package.json
├── README.md
└── .gitignore</p>
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
<h1 id="_2-다음-내용으로-package-json-파일을-만들어주세요" tabindex="-1"><a class="header-anchor" href="#_2-다음-내용으로-package-json-파일을-만들어주세요" aria-hidden="true">#</a> 2. 다음 내용으로 <code v-pre>package.json</code> 파일을 만들어주세요:</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"my-react-package"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"description"</span><span class="token operator">:</span> <span class="token string">"여러분의 React 패키지에 대한 설명"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"main"</span><span class="token operator">:</span> <span class="token string">"src/index.js"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"babel src -d dist"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"prepublishOnly"</span><span class="token operator">:</span> <span class="token string">"npm run build"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"react"</span><span class="token punctuation">,</span> <span class="token string">"component"</span><span class="token punctuation">,</span> <span class="token string">"npm"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">"author"</span><span class="token operator">:</span> <span class="token string">"여러분의 이름"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"license"</span><span class="token operator">:</span> <span class="token string">"MIT"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"peerDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"react"</span><span class="token operator">:</span> <span class="token string">"^16.0.0"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"react-dom"</span><span class="token operator">:</span> <span class="token string">"^16.0.0"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-컴포넌트-만들기" tabindex="-1"><a class="header-anchor" href="#_3-컴포넌트-만들기" aria-hidden="true">#</a> 3. 컴포넌트 만들기</h1>
<p>컴포넌트 디렉토리에 새 파일을 만들고 컴포넌트 코드를 작성해주세요. 여기에 간단한 함수 기반 컴포넌트의 예시가 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>label<span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>button<span class="token operator">></span><span class="token punctuation">{</span>label<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> MyComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-gitignore-파일-추가" tabindex="-1"><a class="header-anchor" href="#_4-gitignore-파일-추가" aria-hidden="true">#</a> 4. <code v-pre>.gitignore</code> 파일 추가</h2>
<p>루트 디렉토리에 <code v-pre>.gitignore</code> 파일을 추가하여 버전 관리에 커밋되지 말아야 할 파일 및 디렉토리를 지정합니다. <code v-pre>node_modules/</code> 및 <code v-pre>dist/</code> 같은 일반적인 항목을 포함할 수 있습니다.</p>
<h2 id="_5-babel-종속성-설치-및-babelrc-파일-생성" tabindex="-1"><a class="header-anchor" href="#_5-babel-종속성-설치-및-babelrc-파일-생성" aria-hidden="true">#</a> 5. babel 종속성 설치 및 <code v-pre>.babelrc</code> 파일 생성</h2>
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
<p>필요한 빌드 종속성이 설치되어 있는지 확인하세요. 다음 명령어를 실행하여 필요한 종속성을 설치할 수 있습니다: npm install — save-dev @babel/cli @babel/preset-env @babel/preset-react.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
 <span class="token string-property property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@babel/preset-react"</span><span class="token punctuation">,</span> <span class="token string">"@babel/preset-env"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.babelrc 파일에 preset을 추가하세요.</p>
<h1 id="_6-패키지-빌드하기" tabindex="-1"><a class="header-anchor" href="#_6-패키지-빌드하기" aria-hidden="true">#</a> 6. 패키지 빌드하기</h1>
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
<p>패키지를 빌드하려면 패키지의 루트 디렉토리에서 npm run build를 실행하세요. 이 작업은 Babel을 사용하여 React 컴포넌트를 변환하고 결과물을 <code v-pre>dist</code> 디렉토리에 배치할 것입니다.</p>
<h1 id="_7-패키지를-게시합니다" tabindex="-1"><a class="header-anchor" href="#_7-패키지를-게시합니다" aria-hidden="true">#</a> 7. 패키지를 게시합니다</h1>
<p>게시하려면 루트 디렉토리에서 npm publish를 실행하세요. npm 계정이 있고 로그인되어 있는지 확인해주세요.</p>
<h1 id="이를-react-프로젝트에서-사용하려면-다음-단계를-따르세요" tabindex="-1"><a class="header-anchor" href="#이를-react-프로젝트에서-사용하려면-다음-단계를-따르세요" aria-hidden="true">#</a> 이를 React 프로젝트에서 사용하려면 다음 단계를 따르세요:</h1>
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
<li>프로젝트 디렉토리에서 다음 명령어를 사용하여 npm에서 발행된 컴포넌트를 설치하세요.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install my<span class="token operator">-</span>react<span class="token operator">-</span><span class="token keyword">package</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>컴포넌트를 가져와 사용하세요.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'my-react-package'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
<span class="token keyword">return</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>
   <span class="token operator">&lt;</span>MyComponent label<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'제출하기'</span><span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
 <span class="token punctuation">)</span>
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
<ol start="3">
<li>파일을 저장하고 React 애플리케이션을 실행합니다. 이제 게시된 컴포넌트가 앱 내에서 렌더링되어야 합니다.</li>
</ol>
<p>계속 읽고 저와 제 팀을 팔로우하여 최신 기술 블로그를 업데이트 받아보세요.</p>
</div></template>
