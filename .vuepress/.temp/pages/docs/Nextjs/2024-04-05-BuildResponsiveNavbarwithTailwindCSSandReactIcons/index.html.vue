<template><div><h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h1>
<p>웹 개발의 동적 세계에서 우아하고 반응 형 네비게이션 바를 생성하는 것은 사용자 친화적 인터페이스를 디자인하는 기본 적인 측면입니다. 이 튜토리얼에서는 강력한 Tailwind CSS와 React Icons의 조합을 사용하여 세련되고 다재다능한 네비게이션 바를 구축하는 과정을 알아보겠습니다. 이 네비게이션 바는 귀하의 응용 프로그램의 시각적 매력을 향상시키는데 그치지 않고 다양한 화면 크기에 매끄럽게 적응하여 최적의 사용자 경험을 제공할 것입니다.</p>
<h1 id="시작하기" tabindex="-1"><a class="header-anchor" href="#시작하기" aria-hidden="true">#</a> 시작하기</h1>
<p>네비게이션 바 작성 여정을 시작하기 전에, 프로젝트가 필요한 도구로 장착되어 있는지 확인해 보겠습니다. 다음 명령어를 사용하여 Tailwind CSS와 React Icons를 설치해 주세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code># Tailwind <span class="token constant">CSS</span> 설치하기
npm install tailwindcss

# React Icons 설치하기
npm install react<span class="token operator">-</span>icons
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="네비게이션-바-컴포넌트-구성" tabindex="-1"><a class="header-anchor" href="#네비게이션-바-컴포넌트-구성" aria-hidden="true">#</a> 네비게이션 바 컴포넌트 구성</h1>
<p>자, 이제 튜토리얼 핵심인 네비게이션 바 컴포넌트를 살펴봅시다.</p>
<h1 id="네비게이션-바-컴포넌트-navbar-jsx" tabindex="-1"><a class="header-anchor" href="#네비게이션-바-컴포넌트-navbar-jsx" aria-hidden="true">#</a> 네비게이션 바 컴포넌트 (Navbar.jsx)</h1>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AiOutlineClose<span class="token punctuation">,</span> AiOutlineMenu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-icons/ai'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Navbar</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 상태를 관리하는 useState 훅</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>nav<span class="token punctuation">,</span> setNav<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 네비게이션 바 표시를 담당하는 토글 함수</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleNav</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setNav</span><span class="token punctuation">(</span><span class="token operator">!</span>nav<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 네비게이션 항목을 담은 배열</span>
  <span class="token keyword">const</span> navItems <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'홈'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'회사'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'자료'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'소개'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'문의'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">'bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'</span><span class="token operator">></span>
      <span class="token punctuation">{</span><span class="token comment">/* 로고 */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token string">'w-full text-3xl font-bold text-[#00df9a]'</span><span class="token operator">></span>리액트<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>

      <span class="token punctuation">{</span><span class="token comment">/* 데스크톱 네비게이션 */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>ul className<span class="token operator">=</span><span class="token string">'hidden md:flex'</span><span class="token operator">></span>
        <span class="token punctuation">{</span>navItems<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>li
            key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span>
            className<span class="token operator">=</span><span class="token string">'p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'</span>
          <span class="token operator">></span>
            <span class="token punctuation">{</span>item<span class="token punctuation">.</span>text<span class="token punctuation">}</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>

      <span class="token punctuation">{</span><span class="token comment">/* 모바일 네비게이션 아이콘 */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleNav<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">'block md:hidden'</span><span class="token operator">></span>
        <span class="token punctuation">{</span>nav <span class="token operator">?</span> <span class="token operator">&lt;</span>AiOutlineClose size<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">20</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span> <span class="token operator">:</span> <span class="token operator">&lt;</span>AiOutlineMenu size<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">20</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

      <span class="token punctuation">{</span><span class="token comment">/* 모바일 네비게이션 메뉴 */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>ul
        className<span class="token operator">=</span><span class="token punctuation">{</span>
          nav
            <span class="token operator">?</span> <span class="token string">'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'</span>
            <span class="token operator">:</span> <span class="token string">'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'</span>
        <span class="token punctuation">}</span>
      <span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token comment">/* 모바일 로고 */</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token string">'w-full text-3xl font-bold text-[#00df9a] m-4'</span><span class="token operator">></span>리액트<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>

        <span class="token punctuation">{</span><span class="token comment">/* 모바일 네비게이션 항목 */</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span>navItems<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>li
            key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span>
            className<span class="token operator">=</span><span class="token string">'p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'</span>
          <span class="token operator">></span>
            <span class="token punctuation">{</span>item<span class="token punctuation">.</span>text<span class="token punctuation">}</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Navbar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="네비게이션바를-앱에-통합하기" tabindex="-1"><a class="header-anchor" href="#네비게이션바를-앱에-통합하기" aria-hidden="true">#</a> 네비게이션바를 앱에 통합하기</h1>
<p>준비된 Navbar 컴포넌트를 주 앱 컴포넌트에 손쉽게 통합해봅시다.</p>
<h1 id="앱-컴포넌트-app-js" tabindex="-1"><a class="header-anchor" href="#앱-컴포넌트-app-js" aria-hidden="true">#</a> 앱 컴포넌트 (app.js)```</h1>
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
<span class="token keyword">import</span> Navbar <span class="token keyword">from</span> <span class="token string">'./components/Navbar'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>Navbar <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>이제 React 애플리케이션용 시각적으로 매력적이고 반응형 네비게이션 바를 만들었습니다. Tailwind CSS와 React Icons의 기능을 활용하여 다양한 기기에서 훌륭하게 보이며 매끄러운 사용자 경험을 제공하도록 보장했습니다. 프로젝트의 고유한 요구 사항에 맞게 스타일을 사용자 정의하고 기능을 확장하는 것은 자유롭게 진행해주세요. 즐거운 코딩하세요!</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div></div></template>
