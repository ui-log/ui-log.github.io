<template><div><p><img src="@source/docs/Tech/2024-03-23-Micro-front-endwithReactJS/img/Micro-front-end-with-React-JS_0.png" alt="Micro-front-end-with-React-JS_0"></p>
<p>마이크로 프론트엔드는 모놀리식 프론트엔드를 작은 관리 가능한 조각으로 분해하는 웹 응용 프로그램을 구축하는 아키텍처 접근 방식입니다. 이러한 작은 조각인 마이크로 프론트엔드는 독립적으로 개발, 테스트 및 배포할 수 있습니다. 이 방식은 크고 복잡한 응용 프로그램에 특히 유용하며, 서로 간섭하지 않고 프론트엔드의 다른 부분에 대해 다른 팀이 작업할 수 있도록 합니다.</p>
<p>React.js로 마이크로 프론트엔드를 구현하려면 다음 기본 단계를 따를 수 있습니다:</p>
<ul>
<li>마이크로 프론트엔드 구조 설계: 응용 프로그램을 마이크로 프론트엔드로 어떻게 분할할지 결정하세요. 기능별로, 특징별로 또는 프로젝트에 맞는 다른 논리적 그룹화 방식으로 분할할 수 있습니다.</li>
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
<li>
<p>모듈 페더레이션 라이브러리 선택: 웹팩 5에서는 모듈 페더레이션 기능이 도입되었습니다. 이 기능을 통해 서로 다른 애플리케이션 간에 JavaScript 모듈을 로드하고 공유할 수 있습니다. 이것은 마이크로 프론트엔드를 만드는 데 매우 중요합니다. React.js 애플리케이션에서 이를 구성하기 위해 &quot;module-federation&quot; 플러그인을 사용할 수 있습니다.</p>
</li>
<li>
<p>개별 마이크로 프론트엔드 생성: 각 마이크로 프론트엔드는 별도의 React 애플리케이션입니다. create-react-app 또는 선호하는 다른 방법을 사용하여 이를 생성할 수 있습니다.</p>
</li>
<li>
<p>공유 의존성 정의: 마이크로 프론트엔드에서 사용할 공유 의존성을 식별하세요. React, React Router 또는 기타 라이브러리가 이에 포함될 수 있습니다. 모듈 페더레이션을 사용하여 이러한 의존성이 마이크로 프론트엔드 간에 공유되도록 보장하세요.</p>
</li>
<li>
<p>라우팅 구현: 마이크로 프론트엔드 아키텍처에서 라우팅을 어떻게 처리할지 결정하세요. URL을 기반으로 적절한 마이크로 프론트엔드를 로드하고 표시하는 중앙 라우팅 애플리케이션을 사용하거나 각 마이크로 프론트엔드 내에서 라우팅을 구현할 수 있습니다.</p>
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
<ol>
<li>
<p>마이크로 프론트엔드 통합: 주요 셸 애플리케이션에 사용자 상호작용이나 라우팅에 따라 마이크로 프론트엔드를 동적으로 통합하고 로드합니다. 보통 import() 함수를 사용하여 필요한 마이크로 프론트엔드를 로드합니다.</p>
</li>
<li>
<p>마이크로 프론트엔드 간 통신: 마이크로 프론트엔드 간의 통신 방법을 고려해보세요. 사용자 요구 사항에 따라 사용자 정의 이벤트, Redux와 같은 전역 상태 관리자 또는 기타 통신 방법을 사용할 수 있습니다.</p>
</li>
<li>
<p>테스트 및 배포: 각 마이크로 프론트엔드를 독립적으로 테스트하고 배포할 수 있습니다. 컨테이너화나 서버리스 배포와 같은 배포 전략을 사용하여 제품 환경에서 마이크로 프론트엔드를 관리하세요.</p>
</li>
<li>
<p>오류 처리 및 모니터링: 마이크로 프론트엔드 아키텍처 내에서 문제를 추적하기 위한 오류 처리와 모니터링을 구현하세요. 중앙 집중식 로깅 및 모니터링 도구를 사용하여 문제를 식별하고 해결하는 데 더욱 효과적으로 도움을 받을 수 있습니다.</p>
</li>
</ol>
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
<p>. 확장과 유지보수: 애플리케이션이 발전함에 따라, 마이크로 프론트엔드를 지속적으로 모니터링하고 유지보수하세요. 필요한 대로 인프라를 확장하고 아키텍처를 조정할 준비를 해두세요.</p>
<p>마이크로 프론트엔드를 구현하는 것은 복잡성을 도입할 수 있으므로 프로젝트 요구 사항에 적합한 해결책인지 신중히 고려하세요. 대규모 복잡한 애플리케이션의 경우 여러 개발팀이 있는 경우 강력한 접근 방식일 수 있지만 독자적인 일련의 도전 과제를 야기할 수도 있습니다.</p>
<h2 id="마이크로-프론트엔드-기반-애플리케이션의-전형적인-트리-구조" tabindex="-1"><a class="header-anchor" href="#마이크로-프론트엔드-기반-애플리케이션의-전형적인-트리-구조" aria-hidden="true">#</a> 마이크로 프론트엔드 기반 애플리케이션의 전형적인 트리 구조:</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>my<span class="token operator">-</span>microfrontend<span class="token operator">-</span>app<span class="token operator">/</span>
│
├── shell<span class="token operator">/</span> <span class="token punctuation">(</span>메인 쉘<span class="token punctuation">)</span>
│   ├── src<span class="token operator">/</span>
│   │   ├── components<span class="token operator">/</span>
│   │   │   ├── Header<span class="token punctuation">.</span>js
│   │   │   ├── Footer<span class="token punctuation">.</span>js
│   │   ├── App<span class="token punctuation">.</span>js
│   │   ├── index<span class="token punctuation">.</span>js
│   ├── <span class="token keyword">package</span><span class="token punctuation">.</span>json
│   ├── webpack<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
│
├── microfrontend1<span class="token operator">/</span> <span class="token punctuation">(</span>마이크로 프론트엔드 <span class="token number">1</span><span class="token punctuation">)</span>
│   ├── src<span class="token operator">/</span>
│   │   ├── components<span class="token operator">/</span>
│   │   │   ├── Microfrontend1Component<span class="token punctuation">.</span>js
│   │   ├── App<span class="token punctuation">.</span>js
│   │   ├── index<span class="token punctuation">.</span>js
│   ├── <span class="token keyword">package</span><span class="token punctuation">.</span>json
│   ├── webpack<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
│
├── microfrontend2<span class="token operator">/</span> <span class="token punctuation">(</span>마이크로 프론트엔드 <span class="token number">2</span><span class="token punctuation">)</span>
│   ├── src<span class="token operator">/</span>
│   │   ├── components<span class="token operator">/</span>
│   │   │   ├── Microfrontend2Component<span class="token punctuation">.</span>js
│   │   ├── App<span class="token punctuation">.</span>js
│   │   ├── index<span class="token punctuation">.</span>js
│   ├── <span class="token keyword">package</span><span class="token punctuation">.</span>json
│   ├── webpack<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
│
├── shared<span class="token operator">/</span> <span class="token punctuation">(</span>마이크로 프론트엔드 및 메인 쉘 간의 공유 코드<span class="token punctuation">)</span>
│   ├── components<span class="token operator">/</span>
│   │   ├── SharedComponent<span class="token punctuation">.</span>js
│   ├── utils<span class="token operator">/</span>
│   │   ├── api<span class="token punctuation">.</span>js
│
├── node_modules<span class="token operator">/</span>
├── <span class="token keyword">package</span><span class="token punctuation">.</span>json
├── webpack<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
├── <span class="token punctuation">.</span>gitignore
├── <span class="token constant">README</span><span class="token punctuation">.</span>md
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
<p>이 구조는 간단화된 예제입니다. 각 디렉토리(shell, microfrontend1, microfrontend2, shared)는 자체 소스 파일, 자체 package.json 및 자체 Webpack 구성을 가진 별도의 React 애플리케이션을 나타냅니다. &quot;shared&quot; 디렉토리에는 각 마이크로 프론트엔드 및 주 쉘 간에 공유되는 코드가 들어 있습니다.</p>
<p>리얼 마이크로 프론트엔드 기반 애플리케이션에서는 특정 요구사항과 의존성에 따라 구조가 더 복잡해질 수 있음을 유념해야 합니다. 각 마이크로 프론트엔드는 독립적으로 개발 및 배포될 수 있어 애플리케이션의 개발 및 유지 관리에 큰 유연성을 제공합니다.</p>
<p>코드를 작성해 봅시다..</p>
<p>이 예제에서는 두 개의 별도 마이크로 프론트엔드를 로드하고 메인 페이지의 다른 섹션에 해당 컴포넌트를 표시하는 주 애플리케이션이 있습니다.
세 개의 별도 React 프로젝트 &quot;MainApp&quot;, &quot;Microfrontend1&quot;, &quot;Microfrontend2&quot;가 있다고 가정해 보겠습니다. 이것이 어떻게 구성될 수 있는지 살펴봅시다:</p>
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
<p>MainApp: 미니 프론트엔드를 로드하는 주 애플리케이션입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// MainApp.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">"react-dom"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MainApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>Application Principale<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"microfrontend1"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"microfrontend2"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MainApp <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Microfrontend1: 첫 번째 미니 프론트엔드입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Microfrontend1.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">"react-dom"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Microfrontend1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h2<span class="token operator">></span>Microfrontend <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Microfrontend1 <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"microfrontend1"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<h1 id="microfrontend2-두-번째-마이크로프론트엔드" tabindex="-1"><a class="header-anchor" href="#microfrontend2-두-번째-마이크로프론트엔드" aria-hidden="true">#</a> Microfrontend2: 두 번째 마이크로프론트엔드.</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Microfrontend2.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">"react-dom"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Microfrontend2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h2<span class="token operator">></span>Microfrontend <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Microfrontend2 <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"microfrontend2"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="웹팩-설정" tabindex="-1"><a class="header-anchor" href="#웹팩-설정" aria-hidden="true">#</a> 웹팩 설정:</h2>
<p>마이크로프론트엔드 환경에서 가져오기와 종속성을 처리하기 위해 웹팩과 바벨을 구성하는 방법은 다음과 같습니다.</p>
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
<p>마이크로 프론트엔드 프로젝트(예: &quot;마이크로프론트엔드1&quot; 및 &quot;마이크로프론트엔드2&quot;)마다 사용자 지정 Webpack 구성이 필요합니다. Webpack에 대한 예시 구성은 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">"./src/index.js"</span><span class="token punctuation">,</span> <span class="token comment">// 애플리케이션 진입점</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"dist"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">"bundle.js"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(js|jsx)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"babel-loader"</span><span class="token punctuation">,</span> <span class="token comment">// 코드 변환을 위해 Babel 사용</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">".js"</span><span class="token punctuation">,</span> <span class="token string">".jsx"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// .js 및 .jsx 파일을 확장자를 지정하지 않고 가져올 수 있게 함</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>각 마이크로 프론트엔드 프로젝트에 webpack, webpack-cli 및 babel-loader를 포함한 필요한 종속성을 설치해야 합니다.</p>
<h2 id="babel-설정" tabindex="-1"><a class="header-anchor" href="#babel-설정" aria-hidden="true">#</a> Babel 설정:</h2>
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
<p>마이크로 프론트엔드 프로젝트마다 필요한 변환을 정의하는 바벨 구성 파일도 있어야 합니다. 아래는 .babelrc 파일의 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@babel/preset-env"</span><span class="token punctuation">,</span> <span class="token string">"@babel/preset-react"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 필요한 경우 다른 바벨 플러그인을 추가할 수 있습니다</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>각 마이크로 프론트엔드 프로젝트에 @babel/preset-env 및 @babel/preset-react와 같은 필요한 바벨 종속성을 설치해야 합니다.</p>
<h2 id="웹팩-별칭-구성하기" tabindex="-1"><a class="header-anchor" href="#웹팩-별칭-구성하기" aria-hidden="true">#</a> 웹팩 별칭 구성하기:</h2>
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
<p>마이크로 프론트엔드와 메인 쉘 간의 가져오기를 간편하게 하려면 웹팩 별명을 사용할 수 있어요. 메인 쉘 웹팩 구성에서 각 마이크로 프론트엔드를 위한 별명을 정의하여 가져오기를 간소화할 수 있어요. 여기에 예시가 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// webpack.config.js de la coquille principale</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>export <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">microfrontend1</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"path/to/microfrontend1"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">microfrontend2</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"path/to/microfrontend2"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// 필요한 경우 다른 마이크로 프론트엔드를 위한 별명을 정의해 주세요</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">".js"</span><span class="token punctuation">,</span> <span class="token string">".jsx"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이를 통해 마이크로 프론트엔드에서 메인 쉘로 컴포넌트를 가져오는 방법으로 다음과 같이 사용할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Microfrontend1Component <span class="token keyword">from</span> <span class="token string">"microfrontend1/components/Microfrontend1Component"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Microfrontend2Component <span class="token keyword">from</span> <span class="token string">"microfrontend2/components/Microfrontend2Component"</span><span class="token punctuation">;</span>
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
<h2 id="종속성-관리" tabindex="-1"><a class="header-anchor" href="#종속성-관리" aria-hidden="true">#</a> 종속성 관리:</h2>
<p>각 미크로 프론트엔드의 종속성을 적절한 패키지 관리 도구인 npm 또는 Yarn을 사용하여 독립적으로 관리해야 합니다. 각 미크로 프론트엔드는 종속성을 지정하는 자체 package.json 파일을 가져야 합니다. 또한 각 미크로 프론트엔드와 메인 셸은 각각의 종속성을 지정하는 자체 package.json을 가져야 합니다.</p>
<p>충돌을 피하기 위해 종속성을 버전별로 관리하는 것도 중요합니다.</p>
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
<p>위의 구성을 사용하면 마이크로 프론트엔드 환경에서 가져오기 및 종속성을 효과적으로 관리할 수 있습니다. 귀하의 특정 요구 사항과 응용 프로그램 구조에 따라 이러한 구성을 사용자 정의하십시오.</p>
<p>&quot;이 기사를 읽어 주셔서 감사합니다. 곧 뵙겠습니다!&quot;</p>
</div></template>
