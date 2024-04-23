<template><div><h2 id="인기-있는-testing-library와-nightwatch를-살펴보기-그리고-더-많이" tabindex="-1"><a class="header-anchor" href="#인기-있는-testing-library와-nightwatch를-살펴보기-그리고-더-많이" aria-hidden="true">#</a> 인기 있는 Testing Library와 Nightwatch를 살펴보기 - 그리고 더 많이</h2>
<p><img src="@source/docs/Nextjs/2024-04-05-TestyourReactComponentswithNightwatchandTestingLibrary/img/TestyourReactComponentswithNightwatchandTestingLibrary_0.png" alt="TestyourReactComponentswithNightwatchandTestingLibrary_0.png"></p>
<p>우리는 Vite를 사용하여 React 프로젝트의 자세한 예제를 만들고 Nightwatch와 Testing Library를 사용하여 컴포넌트를 테스트할 것입니다. 우리는 Jest로 작성된 React Testing Library 문서에 있는 복잡한 예제를 사용할 것입니다.</p>
<p>이 튜토리얼에서는 다음을 다룰 예정입니다:</p>
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
<li>안녕하세요! Vite를 사용하여 새로운 React 프로젝트를 설정해보겠습니다. Nightwatch가 컴포넌트 테스트에 내부적으로 사용하는 것이기도 합니다.</li>
<li>Nightwatch와 Testing Library를 설치하고 구성해주세요.</li>
<li>@nightwatch/api-testing 플러그인을 사용하여 API 요청을 가상화해보세요.</li>
<li>Nightwatch와 Testing Library를 이용하여 복잡한 React 컴포넌트 테스트를 작성해보세요.</li>
</ul>
<h1 id="단계-0-새로운-프로젝트-만들기" tabindex="-1"><a class="header-anchor" href="#단계-0-새로운-프로젝트-만들기" aria-hidden="true">#</a> 단계 0. 새로운 프로젝트 만들기</h1>
<p>시작하기 위해 Vite로 새 프로젝트를 만들어보겠습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm init vite@latest
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
<p>React 및 JavaScript를 선택해 주세요. 이렇게 하면 React와 JavaScript로 구성된 새 프로젝트가 생성됩니다.</p>
<h1 id="단계-1-nightwatch-및-testing-library-설치하기" tabindex="-1"><a class="header-anchor" href="#단계-1-nightwatch-및-testing-library-설치하기" aria-hidden="true">#</a> 단계 1. Nightwatch 및 Testing Library 설치하기</h1>
<p>React용 Testing Library는 @testing-library/react 패키지를 사용하여 설치할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm i @testing<span class="token operator">-</span>library<span class="token operator">/</span>react <span class="token operator">--</span>save<span class="token operator">-</span>dev
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
<p>Nightwatch를 설치하려면 init 명령어를 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm init nightwatch@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>메시지에서 컴포넌트 테스팅과 React를 선택하세요. 이렇게 하면 Nightwatch와 @nightwatch/react 플러그인이 설치됩니다. 드라이버를 위해 브라우저를 선택하세요. 이 예시에서는 Chrome을 사용할 것입니다.</p>
<h2 id="_1-1-nightwatch-testing-library-플러그인-설치" tabindex="-1"><a class="header-anchor" href="#_1-1-nightwatch-testing-library-플러그인-설치" aria-hidden="true">#</a> 1.1. @nightwatch/testing-library 플러그인 설치</h2>
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
<p>Nightwatch는 v2.6부터 Testing Library 쿼리를 직접 명령어로 사용할 수 있는 플러그인을 제공하고 있어요. 나중에 테스트를 작성할 때 필요하니, 지금 바로 설치해봐요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm i @nightwatch<span class="token operator">/</span>testing<span class="token operator">-</span>library <span class="token operator">--</span>save<span class="token operator">-</span>dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-2-nightwatch-apitesting-플러그인-설치" tabindex="-1"><a class="header-anchor" href="#_1-2-nightwatch-apitesting-플러그인-설치" aria-hidden="true">#</a> 1.2 @nightwatch/apitesting 플러그인 설치</h2>
<p>예제에는 컴포넌트를 테스트하기 위해 필요한 모의 서버가 포함되어 있어요. @nightwatch/apitesting 플러그인과 함께 제공되는 통합된 모의 서버를 사용할 거예요. 아래 명령어로 설치해주세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm i @nightwatch<span class="token operator">/</span>apitesting <span class="token operator">--</span>save<span class="token operator">-</span>dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="단계-2-로그인-컴포넌트-생성하기" tabindex="-1"><a class="header-anchor" href="#단계-2-로그인-컴포넌트-생성하기" aria-hidden="true">#</a> 단계 2. 로그인 컴포넌트 생성하기</h1>
<p>React Testing Library 문서에서 사용한 것과 동일한 컴포넌트를 사용할 것입니다. src/Login.jsx 파일을 생성하고 다음 코드를 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// login.jsx</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">function</span> <span class="token function">Login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useReducer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> a</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span>s<span class="token punctuation">,</span> <span class="token operator">...</span>a<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">resolved</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">handleSubmit</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>usernameInput<span class="token punctuation">,</span> passwordInput<span class="token punctuation">}</span> <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>elements

    <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">resolved</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    window
      <span class="token punctuation">.</span><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/api/login'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">username</span><span class="token operator">:</span> usernameInput<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
          <span class="token literal-property property">password</span><span class="token operator">:</span> passwordInput<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">r</span> <span class="token operator">=></span> r<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">(</span>r<span class="token punctuation">.</span>ok <span class="token operator">?</span> data <span class="token operator">:</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
        <span class="token parameter">user</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">resolved</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
          window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'token'</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span>token<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">resolved</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">error</span><span class="token operator">:</span> error<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"usernameInput"</span><span class="token operator">></span>아이디<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
          <span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">"usernameInput"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"passwordInput"</span><span class="token operator">></span>비밀번호<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
          <span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">"passwordInput"</span> type<span class="token operator">=</span><span class="token string">"password"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>제출하기<span class="token punctuation">{</span>state<span class="token punctuation">.</span>loading <span class="token operator">?</span> <span class="token string">'...'</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
      <span class="token punctuation">{</span>state<span class="token punctuation">.</span>error <span class="token operator">?</span> <span class="token operator">&lt;</span>div role<span class="token operator">=</span><span class="token string">"alert"</span><span class="token operator">></span><span class="token punctuation">{</span>state<span class="token punctuation">.</span>error<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span>
      <span class="token punctuation">{</span>state<span class="token punctuation">.</span>resolved <span class="token operator">?</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div role<span class="token operator">=</span><span class="token string">"alert"</span><span class="token operator">></span>축하합니다<span class="token operator">!</span> 로그인되었습니다<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="단계-3-컴포넌트-테스트-작성하기" tabindex="-1"><a class="header-anchor" href="#단계-3-컴포넌트-테스트-작성하기" aria-hidden="true">#</a> 단계 3. 컴포넌트 테스트 작성하기</h1>
<p>Testing Library의 창시 원칙 중 하나는 테스트가 가능한 한 사용자가 애플리케이션과 상호작용하는 방식과 유사해야 한다는 것입니다. Nightwatch를 사용하여 JSX로 컴포넌트 테스트를 작성할 때, Storybook에서 소개된 선언적 형식인 컴포넌트 스토리 형식을 사용하여 테스트를 컴포넌트 스토리로 작성해야 합니다.</p>
<p>이를 통해 컴포넌트가 구현되는 방식이 아닌 사용 방식에 초점을 맞춘 테스트를 작성할 수 있으며, 이는 Testing Library 철학과 일치합니다. Nightwatch 문서에서 더 많은 정보를 확인할 수 있습니다.</p>
<p>이 형식을 사용하여 테스트를 작성하는 데 큰 장점은 이 코드를 사용하여 컴포넌트에 대한 스토리를 작성할 수 있어, Storybook에서 문서화하고 쇼케이스하는 데 사용할 수 있다는 것입니다.</p>
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
<h1 id="_3-1-유효한-자격-증명으로-로그인하기-테스트" tabindex="-1"><a class="header-anchor" href="#_3-1-유효한-자격-증명으로-로그인하기-테스트" aria-hidden="true">#</a> 3.1 유효한 자격 증명으로 로그인하기 테스트</h1>
<p>새 파일 src/Login.spec.jsx를 만들고 Jest로 작성된 복잡한 예제와 동일한 작업을 수행하는 다음 코드를 추가하십시오:</p>
<p>Nightwatch에서 JSX를 사용하여 구성 요소를 렌더링하려면 렌더링된 구성 요소를 내보내는 옵션과 함께 새로운 export를 만듭니다. play 및 test 함수는 구성 요소와 상호 작용하고 결과를 확인하는 데 사용됩니다.</p>
<ul>
<li>play 함수는 구성 요소와 상호 작용하는 데 사용됩니다. 브라우저 환경에서 실행되므로 Testing Library의 screen 객체를 사용하여 DOM을 쿼리하고 이벤트를 발생시킬 수 있습니다.</li>
<li>test 함수는 결과를 확인하는 데 사용됩니다. Node.js 컨텍스트에서 실행되므로 Nightwatch 브라우저 객체를 사용하여 DOM을 쿼리하고 결과를 확인할 수 있습니다.</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// login.spec.jsx</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>render<span class="token punctuation">,</span> fireEvent<span class="token punctuation">,</span> screen<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@testing-library/react'</span>
<span class="token keyword">import</span> Login <span class="token keyword">from</span> <span class="token string">'../src/login'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Login'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> Login
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">LoginWithValidCredentials</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>Login <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
LoginWithValidCredentials<span class="token punctuation">.</span><span class="token function-variable function">play</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>canvasElement<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">//fill out the form</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

LoginWithValidCredentials<span class="token punctuation">.</span><span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">browser</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// verify the results</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="목-서버-추가" tabindex="-1"><a class="header-anchor" href="#목-서버-추가" aria-hidden="true">#</a> 목 서버 추가</h2>
<p>예제에서는 로그인 요청을 시뮬레이션하기 위해 목 서버를 사용합니다. @nightwatch/apitesting 플러그인에 함께 제공되는 통합 목 서버를 사용할 것입니다.</p>
<p>이를 위해 테스트 파일에 직접 작성할 수 있는 설정 및 해제 훅을 사용할 것입니다. 이 두 훅은 Node.js 컨텍스트에서 실행됩니다.```</p>
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
<p>테이블 태그를 마크다운 형식으로 변경해주시면 됩니다.</p>
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
<h2 id="디버깅" tabindex="-1"><a class="header-anchor" href="#디버깅" aria-hidden="true">#</a> 디버깅</h2>
<p>Nightwatch를 컴포넌트 테스트에 사용하는 주요 이점 중 하나는 엔드 투 엔드 테스트에 사용 가능한 동일한 API가 제공되는 것 외에도 JSDOM과 같은 가상 DOM 환경이 아닌 실제 브라우저에서 테스트를 실행할 수 있다는 것입니다.</p>
<p>이를 통해 Chrome 개발자 도구를 사용하여 테스트를 디버깅할 수 있습니다.</p>
<p>예를 들어, LoginWithValidCredentials.play 함수에 디버거 문을 추가해 봅시다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>LoginWithValidCredentials<span class="token punctuation">.</span><span class="token function-variable function">play</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>canvasElement<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 폼 작성</span>
  fireEvent<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByLabelText</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">username</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'chuck'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  fireEvent<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByLabelText</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">password</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'norris'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">debugger</span><span class="token punctuation">;</span>
  
  fireEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">submit</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 --debug 및 --devtools 플래그를 사용하여 테스트를 실행합시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx nightwatch test<span class="token operator">/</span>login<span class="token punctuation">.</span>spec<span class="token punctuation">.</span>jsx <span class="token operator">--</span>debug <span class="token operator">--</span>devtools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이것은 Dev Tools가 열린 새로운 Chrome 창을 엽니다. 이제 Dev Tools에서 중단점을 설정하고 코드를 단계별로 실행할 수 있습니다.```</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-TestyourReactComponentswithNightwatchandTestingLibrary/img/TestyourReactComponentswithNightwatchandTestingLibrary_1.png" alt="Test Image"></p>
<h1 id="_3-2-서버-예외로-로그인-테스트" tabindex="-1"><a class="header-anchor" href="#_3-2-서버-예외로-로그인-테스트" aria-hidden="true">#</a> 3.2 서버 예외로 로그인 테스트</h1>
<p>Testing Library 문서의 원본 예제에는 서버에서 예외가 발생하는 경우를 테스트하는 부분도 포함되어 있습니다.</p>
<p>Nightwatch에서 같은 테스트를 작성해 봅시다. 이번에는 컴포넌트와 상호작용할 수 있기 때문에 테스트 함수만 사용할 것입니다. 이전에 언급했듯이, 테스트 함수는 Node.js 컨텍스트에서 실행되며 Nightwatch 브라우저 객체를 인수로 받습니다.</p>
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
<p>우리는 또한 목 서버 응답을 업데이트하여 500 상태 코드와 오류 메시지를 반환해야 합니다. 이 작업은 LoginWithServerException 컴포넌트 스토리에서 preRender 테스트 훅을 작성하여 쉽게 수행할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">LoginWithServerException</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>Login <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
LoginWithServerException<span class="token punctuation">.</span><span class="token function-variable function">preRender</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">browser</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  serverResponse <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Internal server error'</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

LoginWithServerException<span class="token punctuation">.</span><span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">browser</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> username <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">getByLabelText</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">username</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> username<span class="token punctuation">.</span><span class="token function">sendKeys</span><span class="token punctuation">(</span><span class="token string">'chuck'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> password <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">getByLabelText</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">password</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> password<span class="token punctuation">.</span><span class="token function">sendKeys</span><span class="token punctuation">(</span><span class="token string">'norris'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> submit <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">submit</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> submit<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> alert <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">'alert'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>alert<span class="token punctuation">)</span><span class="token punctuation">.</span>text<span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">internal server error</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> localStorage <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'token'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-테스트-실행" tabindex="-1"><a class="header-anchor" href="#_4-테스트-실행" aria-hidden="true">#</a> 4. 테스트 실행</h1>
<p>마지막으로, 테스트를 실행해 봅시다. 이렇게 하면 Chrome에서 LoginWithValidCredentials 및 LoginWithServerException 컴포넌트 스토리가 실행됩니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx nightwatch test<span class="token operator">/</span>login<span class="token punctuation">.</span>spec<span class="token punctuation">.</span>jsx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>브라우저를 열지 않고 테스트를 실행하려면 --headless 플래그를 전달할 수 있어요. 모두 잘 진행되면 다음 출력이 표시될 거에요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span>Login<span class="token punctuation">]</span> Test Suite
────────────────────────────────────
ℹ ChromeDriver에 <span class="token number">9515</span> <span class="token function">포트</span><span class="token punctuation">(</span>1134ms<span class="token punctuation">)</span>로 연결되었습니다<span class="token punctuation">.</span>
  사용중인 환경<span class="token operator">:</span> <span class="token constant">MAC</span> <span class="token constant">OS</span> <span class="token constant">X</span>에서 <span class="token function">chrome</span> <span class="token punctuation">(</span><span class="token number">108.0</span><span class="token number">.5359</span><span class="token number">.124</span><span class="token punctuation">)</span><span class="token punctuation">.</span>

<span class="token number">3000</span> 포트에서 대기하는 Mock 서버

  <span class="token operator">&lt;</span>LoginWithValidCredentials<span class="token operator">></span> 컴포넌트 실행 중<span class="token operator">:</span>
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<span class="token punctuation">[</span>브라우저<span class="token punctuation">]</span> <span class="token punctuation">[</span>vite<span class="token punctuation">]</span> 연결 중<span class="token operator">...</span>
<span class="token punctuation">[</span>브라우저<span class="token punctuation">]</span> <span class="token punctuation">[</span>vite<span class="token punctuation">]</span> 연결됨<span class="token punctuation">.</span>
  ✔ 예상 요소 <span class="token operator">&lt;</span>LoginWithValidCredentials<span class="token operator">></span> 가 표시되기를 <span class="token function">기대함</span> <span class="token punctuation">(</span>15ms<span class="token punctuation">)</span>
  ✔ 예상 <span class="token string">'DIV[id='</span>app<span class="token string">'] > DIV > DIV'</span> 요소의 텍스트가 <span class="token string">"/congrats/i"</span>와 일치하기를 <span class="token function">기대함</span> <span class="token punctuation">(</span>14ms<span class="token punctuation">)</span>
  ✔ <span class="token string">'fake_user_token'</span> 가 <span class="token string">'fake_user_token'</span>과 같기를 기대함<span class="token operator">:</span> 

  ✨ 통과했습니다<span class="token punctuation">.</span> <span class="token number">3</span>개의 어설션<span class="token punctuation">.</span> <span class="token punctuation">(</span><span class="token number">1.495</span>초<span class="token punctuation">)</span>

  <span class="token operator">&lt;</span>LoginWithServerException<span class="token operator">></span> 컴포넌트 실행 중<span class="token operator">:</span>
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
<span class="token punctuation">[</span>브라우저<span class="token punctuation">]</span> <span class="token punctuation">[</span>vite<span class="token punctuation">]</span> 연결 중<span class="token operator">...</span>
<span class="token punctuation">[</span>브라우저<span class="token punctuation">]</span> <span class="token punctuation">[</span>vite<span class="token punctuation">]</span> 연결됨<span class="token punctuation">.</span>
  ✔ 예상 요소 <span class="token operator">&lt;</span>LoginWithServerException<span class="token operator">></span> 가 표시되기를 <span class="token function">기대함</span> <span class="token punctuation">(</span>8ms<span class="token punctuation">)</span>
  ✔ 예상 <span class="token string">'DIV[id='</span>app<span class="token string">'] > DIV > DIV'</span> 요소의 텍스트가 <span class="token string">"/internal server error/i"</span>와 일치하기를 <span class="token function">기대함</span> <span class="token punctuation">(</span>8ms<span class="token punctuation">)</span>
  ✔ <span class="token string">'fake_user_token'</span> 가 <span class="token string">'fake_user_token'</span>과 같기를 기대함<span class="token operator">:</span> 

  ✨ 통과했습니다<span class="token punctuation">.</span> <span class="token number">3</span>개의 어설션<span class="token punctuation">.</span> <span class="token punctuation">(</span><span class="token number">1.267</span>초<span class="token punctuation">)</span>

  ✨ 총 <span class="token number">6</span>개의 어설션 중 <span class="token number">6</span>개가 통과되었습니다<span class="token punctuation">.</span> <span class="token punctuation">(</span><span class="token number">4.673</span>초<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
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
<p>여기까지입니다! 이 예제의 완전한 코드는 GitHub 저장소에서 찾으실 수 있어요. PRs는 환영합니다.</p>
<p>궁금한 점이나 피드백이 있으시면 언제든 Nightwatch Discord로 들러주세요.</p>
</div></template>
