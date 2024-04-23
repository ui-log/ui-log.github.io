<template><div><p><img src="@source/docs/Nextjs/2024-04-05-ReactRouterAstep-by-stepguide/img/ReactRouterAstep-by-stepguide_0.png" alt="React Router"></p>
<h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h1>
<p>React Router는 React에서 동적인 싱글페이지 앱을 구축하는 데 필수적인 도구입니다. 웹 애플리케이션 내에서 네비게이션, 라우팅 및 사용자 상호 작용을 원활하게 관리할 수 있는 방법을 제공합니다. 이 글에서는 React Router의 기본 원리, 핵심 기능 및 React 애플리케이션에서 라우팅을 구현하는 방법을 살펴보겠습니다.</p>
<h1 id="react-router란-무엇인가요" tabindex="-1"><a class="header-anchor" href="#react-router란-무엇인가요" aria-hidden="true">#</a> React Router란 무엇인가요?</h1>
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
<p>React Router은 React 애플리케이션에서 클라이언트 측 라우팅을 관리하는 인기 있는 라이브러리입니다. 이를 사용하면 기존 웹사이트처럼 느껴지는 복잡한 다중 페이지 웹 애플리케이션을 만들 수 있지만 내부적으로는 싱글 페이지 애플리케이션(SPAs)입니다. React Router를 사용하면 라우트를 정의하고 관리하여 사용자가 서버로부터 새 HTML 페이지를 요청하지 않고 애플리케이션의 다른 보기를 탐색할 수 있게 됩니다.</p>
<h1 id="주요-개념" tabindex="-1"><a class="header-anchor" href="#주요-개념" aria-hidden="true">#</a> 주요 개념</h1>
<p>구현에 들어가기 전에 몇 가지 핵심 개념을 이해해 봅시다.</p>
<ul>
<li>라우트(Route): 라우트는 URL과 컴포넌트 간의 매핑입니다. 사용자가 특정 URL을 방문할 때, React Router는 해당 컴포넌트를 렌더링합니다.</li>
<li>라우터(Router): 라우터는 라우팅 인프라를 제공하는 최상위 컴포넌트입니다. React Router에서 웹 애플리케이션에는 일반적으로 BrowserRouter를 사용하고 정적 사이트에는 HashRouter를 사용합니다.</li>
<li>중첩 라우트(Nested Routes): React Router를 사용하면 라우트를 중첩하여 컴포넌트의 계층 구조를 만들 수 있습니다. 이는 레이아웃 구조에 특히 유용합니다.</li>
<li>링크(Link): 링크 컴포넌트를 사용하면 애플리케이션의 상태를 유지하는 앵커와 유사한 요소를 생성하여 탐색을 가능하게 합니다.</li>
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
<h1 id="구현" tabindex="-1"><a class="header-anchor" href="#구현" aria-hidden="true">#</a> 구현</h1>
<p>프로젝트에서 React Router를 사용하려면 다음 단계를 따라야 합니다:</p>
<ul>
<li>설치: npm이나 yarn을 이용하여 React Router를 설치해주세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install react<span class="token operator">-</span>router<span class="token operator">-</span>dom
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
<h3 id="_2-설정-index-js-파일을-열고-내용을-다음과-같이-수정해주세요" tabindex="-1"><a class="header-anchor" href="#_2-설정-index-js-파일을-열고-내용을-다음과-같이-수정해주세요" aria-hidden="true">#</a> 2. 설정: index.js 파일을 열고 내용을 다음과 같이 수정해주세요:</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom/client'</span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token string">'./index.css'</span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App'</span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> reportWebVitals <span class="token keyword">from</span> <span class="token string">'./reportWebVitals'</span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span>

 <span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
   <span class="token operator">&lt;</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">></span>
     <span class="token operator">&lt;</span>BrowserRouter<span class="token operator">></span>
     <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>BrowserRouter<span class="token operator">></span>
   <span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">></span>
 <span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token comment">// 앱에서 성능을 측정하려면 함수를 전달하여 결과를 기록하거나</span>
 <span class="token comment">// 또는 분석 엔드포인트로 보내세요. 더 알아보기: https://bit.ly/CRA-vitals</span>
 <span class="token function">reportWebVitals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-네비게이션-바-만들기-src-폴더에-navbar-js-파일을-만들고-다음-코드를-추가해주세요" tabindex="-1"><a class="header-anchor" href="#_3-네비게이션-바-만들기-src-폴더에-navbar-js-파일을-만들고-다음-코드를-추가해주세요" aria-hidden="true">#</a> 3. 네비게이션 바 만들기: src 폴더에 Navbar.js 파일을 만들고 다음 코드를 추가해주세요:</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>

 <span class="token keyword">const</span> <span class="token function-variable function">Navbar</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token operator">&lt;</span>nav<span class="token operator">></span>
       <span class="token operator">&lt;</span>ul<span class="token operator">></span>
         <span class="token operator">&lt;</span>li<span class="token operator">></span>
           <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
         <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
         <span class="token operator">&lt;</span>li<span class="token operator">></span>
           <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/about"</span><span class="token operator">></span>About<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
         <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
         <span class="token operator">&lt;</span>li<span class="token operator">></span>
           <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/contact"</span><span class="token operator">></span>Contact<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
         <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
       <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">></span>
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">export</span> <span class="token keyword">default</span> Navbar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위 코드에서는 react-router-dom에서 Link를 가져와 웹 응용 프로그램의 다른 섹션으로 이동할 수 있도록 했습니다.</p>
<ol start="4">
<li>페이지 만들기: 이제 Home, About 및 Contact 파일을 생성하세요. 파일 내에서 react 구성 요소를 만들고 각 파일에서 Navbar 구성 요소를 가져옵니다.</li>
</ol>
<p>i. Home.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token comment">//Home.js</span>
 <span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
 <span class="token keyword">import</span> Navbar <span class="token keyword">from</span> <span class="token string">'./Navbar'</span>

 <span class="token keyword">const</span> <span class="token function-variable function">Home</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token operator">&lt;</span>div<span class="token operator">></span>
         <span class="token operator">&lt;</span>Navbar <span class="token operator">/</span><span class="token operator">></span>
         <span class="token operator">&lt;</span>h1<span class="token operator">></span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
   <span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">export</span> <span class="token keyword">default</span> Home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>ii. About.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token comment">//About.js</span>
 <span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
 <span class="token keyword">import</span> Navbar <span class="token keyword">from</span> <span class="token string">'./Navbar'</span>

 <span class="token keyword">const</span> <span class="token function-variable function">About</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token operator">&lt;</span>div<span class="token operator">></span>
         <span class="token operator">&lt;</span>Navbar <span class="token operator">/</span><span class="token operator">></span>
         <span class="token operator">&lt;</span>h1<span class="token operator">></span>About<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
   <span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">export</span> <span class="token keyword">default</span> About
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>iii. Contact.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token comment">//Contact.js</span>
 <span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
 <span class="token keyword">import</span> Navbar <span class="token keyword">from</span> <span class="token string">'./Navbar'</span>

 <span class="token keyword">const</span> <span class="token function-variable function">Contact</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token operator">&lt;</span>div<span class="token operator">></span>
         <span class="token operator">&lt;</span>Navbar <span class="token operator">/</span><span class="token operator">></span>
         <span class="token operator">&lt;</span>h1<span class="token operator">></span>Contact<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
   <span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">export</span> <span class="token keyword">default</span> Contact
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<ol start="5">
<li>App.js에서 라우트 생성하기: App.js를 열고 react-router-dom에서 Routes, Route를 import하세요. 또한 Home, About, Contact 컴포넌트도 import하세요.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token comment">//App.js</span>
 <span class="token keyword">import</span> <span class="token punctuation">{</span> Route<span class="token punctuation">,</span> Routes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token string">'./App.css'</span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">'./Home'</span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">'./About'</span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> Contact <span class="token keyword">from</span> <span class="token string">'./Contact'</span><span class="token punctuation">;</span>

 <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"App"</span><span class="token operator">></span>

     <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>div 요소 안에 다음을 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"App"</span><span class="token operator">></span>
       <span class="token operator">&lt;</span>Routes<span class="token operator">></span>
         <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">'/'</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Home<span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
         <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">'/about'</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>About<span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
         <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">'/contact'</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Contact<span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
       <span class="token operator">&lt;</span><span class="token operator">/</span>Routes<span class="token operator">></span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<li>Route 요소는 Routes로 묶여 있습니다.</li>
<li>path는 해당 컴포넌트에 대한 URL 경로를 나타냅니다.</li>
<li>element는 경로가 가리키는 컴포넌트를 설명합니다.</li>
</ul>
<ol start="7">
<li>애플리케이션 실행: 앱을 실행하면 네비게이션 링크가 동적으로 해당 페이지로 이동합니다.</li>
</ol>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>React Router는 React 애플리케이션의 클라이언트 측 라우팅을 관리하는 강력한 도구입니다. 이를 통해 네비게이션, 경로 매개변수, 중첩 경로 등을 다루어 심미적이고 동적인 사용자 경험을 만들 수 있습니다. 이 기사에서 안내된 단계를 따라 React Router를 시작하고, 매우 상호작용적이고 사용자 친화적인 싱글 페이지 애플리케이션을 구축할 수 있습니다.</p>
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
<p>GitHub 저장소</p>
<p>커뮤니티에 참여하려면 뉴스레터를 구독하여 정기 업데이트, 신선한 통찰, 그리고 독점 컨텐츠를 받아보세요.</p>
<p>소통해요:</p>
<ul>
<li>LinkedIn</li>
<li>Twitter</li>
<li>Instagram</li>
<li>Facebook</li>
<li>웹사이트</li>
</ul>
</div></template>
