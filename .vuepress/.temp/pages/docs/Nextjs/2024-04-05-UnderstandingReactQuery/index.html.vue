<template><div><h2 id="리액트-애플리케이션에서-데이터-가져오기-간소화" tabindex="-1"><a class="header-anchor" href="#리액트-애플리케이션에서-데이터-가져오기-간소화" aria-hidden="true">#</a> 리액트 애플리케이션에서 데이터 가져오기 간소화</h2>
<p><img src="@source/docs/Nextjs/2024-04-05-UnderstandingReactQuery/img/UnderstandingReactQuery_0.png" alt="이미지"></p>
<p>React Query는 TanStack에서 개발한 강력한 라이브러리로, 리액트 애플리케이션에서 데이터 가져오기와 상태 관리를 간단하게 만들어줍니다. 원격 데이터를 쉽게 관리하고 UI와 동기화하는 간단한 방법을 제공합니다. 이 글에서는 리액트 애플리케이션에서 React Query와 주요 기능, 그리고 시작하는 방법을 소개하겠습니다.</p>
<h1 id="react-query란-무엇인가요" tabindex="-1"><a class="header-anchor" href="#react-query란-무엇인가요" aria-hidden="true">#</a> React Query란 무엇인가요?</h1>
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
<p>React Query는 React 애플리케이션에서 데이터 가져오기와 캐싱을 간단하게 처리하도록 설계된 JavaScript 라이브러리입니다. 이는 useQuery 및 useMutation과 같은 훅을 사용하여 REST API, GraphQL 또는 심지어 로컬 상태와 같은 다양한 소스에서 데이터를 관리할 수 있도록 도와줍니다.</p>
<h1 id="주요-기능" tabindex="-1"><a class="header-anchor" href="#주요-기능" aria-hidden="true">#</a> 주요 기능</h1>
<ul>
<li>선언적 데이터 가져오기: React Query는 데이터 가져오기에 선언적 접근을 장려합니다. useQuery 및 useMutation과 같은 훅을 사용하여 쿼리와 뮤테이션을 정의할 수 있습니다. 이로 인해 더 깔끔하고 조직화된 코드를 작성할 수 있습니다.</li>
<li>자동 캐싱: React Query에는 쿼리 결과를 저장하는 내장 캐시가 포함되어 있습니다. 뮤테이션이 발생할 때 자동으로 데이터를 업데이트하여 UI가 일관성을 유지합니다.</li>
<li>백그라운드 데이터 동기화: React Query는 수동 개입 없이 데이터를 자동으로 다시 가져와서 데이터를 신선하게 유지하는 데 도움을 줍니다.</li>
<li>페이지네이션 및 무한 스크롤: React Query는 페이지네이션 및 무한 스크롤을 쉽게 처리할 수 있는 유틸리티를 제공합니다.</li>
<li>낙관적 업데이트: 낙관적 업데이트를 쉽게 구현할 수 있어 앱이 더 반응적으로 느껴집니다.</li>
</ul>
<h1 id="react-query로-시작하기" tabindex="-1"><a class="header-anchor" href="#react-query로-시작하기" aria-hidden="true">#</a> React Query로 시작하기</h1>
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
<p>React Query를 시작하는 것이 얼마나 간단한지 기본 예제를 살펴보겠습니다. 먼저 해야 할 일은 @tanstack/react-query 라이브러리를 설치하는 것입니다. 실행에는 npm을 사용하겠습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install @tanstack<span class="token operator">/</span>react<span class="token operator">-</span>query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>우리 애플리케이션에 라이브러리가 설치되면 React Query를 사용하기 위해 프로바이더와 클라이언트를 생성하세요. src 폴더의 index.tsx 파일에 만들 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">'react-dom/client'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./index.css'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> QueryClientProvider<span class="token punctuation">,</span> QueryClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@tanstack/react-query'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLElement
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> queryClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

root<span class="token punctuation">.</span>render
  <span class="token operator">&lt;</span>QueryClientProvider client<span class="token operator">=</span><span class="token punctuation">{</span>queryClient<span class="token punctuation">}</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>QueryClientProvider<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그 후에 React Query Hooks를 바로 사용할 수 있습니다. App.tsx스크립트에 적용해 봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> logo <span class="token keyword">from</span> <span class="token string">'./logo.svg'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./App.css'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@tanstack/react-query'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> userData <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span>
    <span class="token punctuation">[</span><span class="token string">'users'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://jsonplaceholder.typicode.com/users'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> userData<span class="token punctuation">.</span><span class="token function">refetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>유저 가져오기<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span>
          <span class="token punctuation">{</span>userData<span class="token punctuation">.</span>isFetching <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>데이터 가져오는 중<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token punctuation">{</span>userData<span class="token punctuation">.</span>isError <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">데이터 가져오기 오류!!!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token punctuation">{</span>userData<span class="token punctuation">.</span>data <span class="token operator">&amp;&amp;</span> userData<span class="token punctuation">.</span>data<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> userData<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">user</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서는 useQuery를 사용하여 사용자 목록을 가져옵니다. React Query는 내부적으로 데이터 가져오는 상태, 오류 처리, 캐싱을 처리합니다.</p>
<img src="https://miro.medium.com/v2/resize:fit:576/1*VMVis07NyntygP6-WrYLRg.gif" />
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
<p>Get Users버튼을 클릭하면 API에서 데이터를 가져옵니다. 데이터 양이 적기 때문에 데이터를 가져오는 프로세스가 너무 빨라서 거의 눈에 띄지 않을 수 있어요.</p>
<p>useQuery 이외에도 데이터를 변이하는 데 사용되는 useMutation이 있어요. 두 훅 모두 거의 비슷한 기능을 가지고 있지만 데이터를 변이하는 데 사용됩니다. 아래에 사용 예제를 보여드리겠습니다. 아래 코드를 추가해 보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> logo <span class="token keyword">from</span> <span class="token string">'./logo.svg'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./App.css'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useQuery<span class="token punctuation">,</span> useMutation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@tanstack/react-query'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> userData <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span>
    <span class="token punctuation">[</span><span class="token string">'users'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://jsonplaceholder.typicode.com/users'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> mutatePost <span class="token operator">=</span> <span class="token function">useMutation</span><span class="token punctuation">(</span>
    <span class="token punctuation">[</span><span class="token string">'posts'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">newPost</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://jsonplaceholder.typicode.com/posts'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>newPost<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">'Content-type'</span><span class="token operator">:</span> <span class="token string">'application/json; charset=UTF-8'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> userData<span class="token punctuation">.</span><span class="token function">refetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>Get Users<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span>
          <span class="token punctuation">{</span>userData<span class="token punctuation">.</span>isFetching <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>사용자 데이터 가져오는 중<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token punctuation">{</span>userData<span class="token punctuation">.</span>isError <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">데이터 가져오는 중 에러 발생!!!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token punctuation">{</span>userData<span class="token punctuation">.</span>data <span class="token operator">&amp;&amp;</span> userData<span class="token punctuation">.</span>data<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> userData<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">user</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>hr <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> mutatePost<span class="token punctuation">.</span><span class="token function">mutate</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'First Post'</span><span class="token punctuation">,</span> <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">'First Post Body'</span><span class="token punctuation">,</span> <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>Add New Post<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span>
          <span class="token punctuation">{</span>mutatePost<span class="token punctuation">.</span>isLoading <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>새로운 포스트 추가 중<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token punctuation">{</span>mutatePost<span class="token punctuation">.</span>isError <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">새로운 포스트 추가하는 중 에러 발생!!!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token punctuation">{</span>mutatePost<span class="token punctuation">.</span>data <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">성공적으로 새로운 포스트 추가 : '</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>mutatePost<span class="token punctuation">.</span>data<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">'</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 예제에서 새로운 포스트를 추가하는 데 useMutation을 사용했습니다.</p>
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
<img src="https://miro.medium.com/v2/resize:fit:820/1*8PXYBNVu3ySVOCbBytoD4Q.gif" />
<h1 id="usequery과-usemutation의-차이점" tabindex="-1"><a class="header-anchor" href="#usequery과-usemutation의-차이점" aria-hidden="true">#</a> useQuery과 useMutation의 차이점</h1>
<ul>
<li>목적: useQuery는 데이터를 읽는 데 사용되고, useMutation은 데이터를 수정하는 데 사용됩니다.</li>
<li>전형적인 사용 사례: useQuery는 데이터를 가져와 표시할 때 사용되며, useMutation은 해당 데이터를 변경하고 싶을 때 사용됩니다.</li>
<li>반환 값: useQuery는 { data, error, isLoading, isFetching }를 반환하고, useMutation은 { mutate, data, error, isError, isLoading, isSuccess }를 반환합니다.</li>
<li>에러 처리: 두 훅 모두 에러를 처리하지만, useMutation은 낙관적 업데이트 및 뮤테이션 중 에러 발생 시 롤백 처리를 위한 추가 기능을 제공합니다.</li>
</ul>
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
<p>리액트 쿼리는 리액트 생태계에 귀중한 추가 요소로, 데이터 가져오기와 동기화를 이전보다 쉽게 만들어줍니다. 작은 애플리케이션을 개발하거나 대규모 프로젝트를 구축하든 상관없이, 리액트 쿼리의 간결함과 강력한 기능을 통해 데이터를 효과적으로 관리할 수 있습니다.</p>
<p>데이터 관리를 간소화함으로써, 리액트 쿼리는 애플리케이션 기능 구축에 집중하고 더 나은 사용자 경험을 제공할 수 있게 해줍니다. 다음 리액트 프로젝트에서 한번 시도해보세요. 아마도 리액트 쿼리 없이 데이터를 어떻게 관리했는지 궁금해질지도 모릅니다.</p>
<h1 id="참고-자료" tabindex="-1"><a class="header-anchor" href="#참고-자료" aria-hidden="true">#</a> 참고 자료</h1>
<ul>
<li>https://tanstack.com/query/latest/docs/react/overview</li>
<li>https://github.com/TanStack/query</li>
<li>https://blog.logrocket.com/deep-dive-mutations-tanstack-query/</li>
<li>https://thesyntaxdiaries.com/what-is-react-query-how-to-use-usemutation-usequery-prefetch-devtools/</li>
</ul>
</div></template>
