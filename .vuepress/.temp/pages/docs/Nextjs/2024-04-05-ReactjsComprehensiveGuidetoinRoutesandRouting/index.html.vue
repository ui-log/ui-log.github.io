<template><div><p>리액트.js는 사용자 인터페이스를 구축하는 강력한 라이브러리입니다. 그 중요한 기능 중 하나는 효율적으로 싱글 페이지 애플리케이션 (SPA)을 만들 수 있는 능력입니다. 루트 및 라우팅은 SPA를 구축할 때 중요한 구성 요소이며, 전체 페이지를 다시로드하지 않고 다양한 뷰 간을 이동할 수 있게 합니다.</p>
<p>이 안내서에서는 리액트.js에서 루트 및 라우팅에 대해 알아야 할 모든 것을 다룰 것입니다. 루트를 설정하는 방법, 루트 간을 이동하는 방법, 동적 라우팅을 처리하는 방법 등이 포함됩니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-ReactjsComprehensiveGuidetoinRoutesandRouting/img/ReactjsComprehensiveGuidetoinRoutesandRouting_0.png" alt="React Router"></p>
<h1 id="리액트-라우터를-사용하여-경로-설정하기" tabindex="-1"><a class="header-anchor" href="#리액트-라우터를-사용하여-경로-설정하기" aria-hidden="true">#</a> 리액트 라우터를 사용하여 경로 설정하기</h1>
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
<p>React.js 어플리케이션에서 라우트를 관리하기 위해 React Router라는 인기 있는 라이브러리를 사용합니다. React Router는 React 어플리케이션에서 라우팅을 정의하는 선언적인 방법을 제공합니다. 아래는 설정하는 방법입니다:</p>
<h2 id="단계-1-react-router-설치하기" tabindex="-1"><a class="header-anchor" href="#단계-1-react-router-설치하기" aria-hidden="true">#</a> 단계 1: React Router 설치하기</h2>
<p>React Router는 npm 또는 yarn을 통해 설치할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install react<span class="token operator">-</span>router<span class="token operator">-</span>dom
# 또는
yarn add react<span class="token operator">-</span>router<span class="token operator">-</span>dom
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
<h1 id="단계-2-라우트-정의하기" tabindex="-1"><a class="header-anchor" href="#단계-2-라우트-정의하기" aria-hidden="true">#</a> 단계 2: 라우트 정의하기</h1>
<p>설치가 완료되면 React Router에서 제공하는 BrowserRouter 및 Route 구성 요소를 사용하여 애플리케이션의 라우트를 정의할 수 있습니다. App.js 파일에서 라우트를 설정하는 방법의 예시입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token keyword">as</span> Router<span class="token punctuation">,</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">'./components/Home'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">'./components/About'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Contact <span class="token keyword">from</span> <span class="token string">'./components/Contact'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Router<span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/"</span> exact component<span class="token operator">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/about"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>About<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/contact"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Contact<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서 세 가지 다른 컴포넌트(Home, About, Contact)에 대한 라우트를 정의했습니다. 각 컴포넌트는 해당 경로에 일치할 때 렌더링됩니다.</p>
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
<h1 id="경로-간-이동" tabindex="-1"><a class="header-anchor" href="#경로-간-이동" aria-hidden="true">#</a> 경로 간 이동</h1>
<p>React Router는 경로 간 이동을 위한 다양한 컴포넌트와 훅을 제공합니다. 가장 일반적으로 사용되는 것은 Link와 useHistory입니다.</p>
<h2 id="link-컴포넌트-사용하기" tabindex="-1"><a class="header-anchor" href="#link-컴포넌트-사용하기" aria-hidden="true">#</a> Link 컴포넌트 사용하기</h2>
<p>Link 컴포넌트는 전체 페이지를 다시로드하지 않고도 경로 간 이동을 할 수 있게 해줍니다. 아래 예시를 통해 어떻게 사용하는지 살펴보겠습니다.</p>
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
<span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Navbar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>nav<span class="token operator">></span>
      <span class="token operator">&lt;</span>ul<span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>홈<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/about"</span><span class="token operator">></span>소개<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/contact"</span><span class="token operator">></span>연락처<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Navbar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="usehistory-훅-사용하기" tabindex="-1"><a class="header-anchor" href="#usehistory-훅-사용하기" aria-hidden="true">#</a> useHistory 훅 사용하기</h1>
<p>useHistory 훅을 사용하면 특정 이벤트나 사용자 조작에 반응하여 프로그래밍적으로 탐색할 수 있습니다. 다음은 예시입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> history <span class="token operator">=</span> <span class="token function">useHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    history<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'/about'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>홈<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span><span class="token operator">></span>소개로 이동<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Home<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="동적-라우트-처리하기" tabindex="-1"><a class="header-anchor" href="#동적-라우트-처리하기" aria-hidden="true">#</a> 동적 라우트 처리하기</h1>
<p>가끔은 URL의 일부가 변수인 동적 라우트를 처리해야 할 수도 있습니다. React Router를 사용하면 라우트 매개변수를 이용하여 이를 처리할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/user/:id"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>User<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 예시에서 :id는 라우트 매개변수로, useParams 훅을 사용하여 User 컴포넌트 내에서 접근할 수 있습니다.</p>
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
<span class="token keyword">import</span> <span class="token punctuation">{</span> useParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>User <span class="token constant">ID</span><span class="token operator">:</span> <span class="token punctuation">{</span>id<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> User<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>Routes 및 라우팅은 React.js 애플리케이션을 구축하는 데 필수적인 개념입니다. React Router를 사용하면 경로를 쉽게 관리할 수 있어 SPA를 쉽게 만들 수 있습니다. 이 가이드에서 설명한 단계를 따라가면 React.js 프로젝트에서 경로를 설정하고 이동하며 동적 라우팅을 효과적으로 처리할 수 있습니다.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div></div></template>
