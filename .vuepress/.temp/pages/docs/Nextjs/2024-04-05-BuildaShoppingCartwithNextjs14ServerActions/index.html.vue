<template><div><p><img src="@source/docs/Nextjs/2024-04-05-BuildaShoppingCartwithNextjs14ServerActions/img/BuildaShoppingCartwithNextjs14ServerActions_0.png" alt="이미지"></p>
<p>우리는 모두 웹 애플리케이션에 장바구니 기능을 추가하는 것이 보다 어렵다는 것을 알고 있습니다. 이를 수행하는 여러 가지 방법이 있지만, 사용자와 연결된 장바구니를 저장할 수 있는 가장 빠르고 효율적인 방법이 하나 있습니다. 이제 그 방법을 보여드릴게요.</p>
<p>Vercel KV와 Next-Auth를 이용해 서버 액션을 사용하여 사용자와 연결된 쇼핑 카트를 생성할 것입니다.</p>
<p>이 기능을 복잡한 프로젝트에 구현한 전자 상거래 사이트를 확인하고 그 빠른 처리 속도를 확인해보세요.</p>
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
<p>저는 일자리를 찾고 있어요! 제 포트폴리오를 확인하고 연락주세요.</p>
<p>이 문서의 코드:</p>
<h2 id="_0-프로젝트-설정-및-종속성-설치" tabindex="-1"><a class="header-anchor" href="#_0-프로젝트-설정-및-종속성-설치" aria-hidden="true">#</a> 0. 프로젝트 설정 및 종속성 설치</h2>
<p>Next.js 프로젝트를 설정하는 방법을 시작해봅시다. 다음 단계를 따라 폴더 구조를 만들어주세요.</p>
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
<p>터미널을 열고 다음 명령어를 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>next<span class="token operator">-</span>app@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>프로젝트 이름을 입력하고 다음 질문에 답해주세요:</p>
<ul>
<li>TypeScript를 사용하시겠습니까? (예)</li>
<li>ESLint를 사용하시겠습니까? (예)</li>
<li>Tailwind CSS를 사용하시겠습니까? (예)</li>
<li>src/ 디렉토리를 사용하시겠습니까? (예)</li>
<li>App Router를 사용하시겠습니까? (예, 권장)</li>
<li>기본 import 별칭(@/*)을 사용자 정의하시겠습니까? (예)</li>
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
<p>계속하기 전에 애플리케이션을 위한 몇 가지 종속성을 설치해보겠습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install @vercel<span class="token operator">/</span>kv next<span class="token operator">-</span>auth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_1-사용자-인증-설정" tabindex="-1"><a class="header-anchor" href="#_1-사용자-인증-설정" aria-hidden="true">#</a> 1. 사용자 인증 설정</h1>
<p>이 섹션에서는 Next-Auth를 사용하여 사용자와 사용자의 쇼핑 카트를 연결할 것입니다. 이미 이 라이브러리를 사용하는 방법에 대해 더 깊이 알아볼 수 있는 기사가 있습니다. 그러나 이제는 구글 로그인만 허용할 것입니다.</p>
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
<h2 id="_1-1-환경-변수-설정" tabindex="-1"><a class="header-anchor" href="#_1-1-환경-변수-설정" aria-hidden="true">#</a> 1.1 환경 변수 설정</h2>
<p>이 섹션에 필요한 환경 변수를 추가합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">GOOGLE_CLIENT_ID</span><span class="token operator">=</span><span class="token string">"당신의_클라이언트_ID"</span>
<span class="token constant">GOOGLE_CLIENT_SECRET</span><span class="token operator">=</span><span class="token string">"당신의_시크릿_ID"</span>
<span class="token constant">NEXTAUTH_SECRET</span><span class="token operator">=</span><span class="token string">"NEXTAUTH_시크릿"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Google 인증 키를 어떻게 얻을지 모르겠다면 여기를 클릭하세요.</p>
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
<p>Next-Auth 시크릿 키를 얻으려면 터미널에서 다음을 실행하면 무작위 키가 생성됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx auth secret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-2-인증-로직-구현" tabindex="-1"><a class="header-anchor" href="#_1-2-인증-로직-구현" aria-hidden="true">#</a> 1.2 인증 로직 구현</h2>
<p>다음으로 필요한 폴더와 파일을 생성하여 인증 로직을 설정하겠습니다.</p>
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
<h2 id="_1-2-1-nextauth-설정-구성하기" tabindex="-1"><a class="header-anchor" href="#_1-2-1-nextauth-설정-구성하기" aria-hidden="true">#</a> 1.2.1 NextAuth 설정 구성하기</h2>
<p>app/api/auth/[...nextauth] 폴더 내에 route.ts라는 파일을 생성하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> NextAuth <span class="token keyword">from</span> <span class="token string">"next-auth"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> NextApiRequest<span class="token punctuation">,</span> NextApiResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NextAuthOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-auth"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> GoogleProvider <span class="token keyword">from</span> <span class="token string">"next-auth/providers/google"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">options</span><span class="token operator">:</span> NextAuthOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// Google을 인증 제공자로 구성</span>
  <span class="token literal-property property">providers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">GoogleProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 환경 변수에서 얻은 Google OAuth 클라이언트 ID 설정</span>
      <span class="token literal-property property">clientId</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">GOOGLE_CLIENT_ID</span> <span class="token keyword">as</span> string<span class="token punctuation">,</span>
      <span class="token comment">// 환경 변수에서 얻은 Google OAuth 클라이언트 비밀 설정</span>
      <span class="token literal-property property">clientSecret</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">GOOGLE_CLIENT_SECRET</span> <span class="token keyword">as</span> string
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 로그인 페이지와 같은 인증 페이지를 사용자 정의</span>
  <span class="token literal-property property">pages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">signIn</span><span class="token operator">:</span> <span class="token string">"/login"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 인증 요청을 처리하는 핸들러 함수 정의</span>
<span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">req</span><span class="token operator">:</span> NextApiRequest<span class="token punctuation">,</span> <span class="token literal-property property">res</span><span class="token operator">:</span> NextApiResponse</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">NextAuth</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// GET 및 POST 요청을 모두 처리하기 위해 핸들러 함수 내보내기</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> handler <span class="token keyword">as</span> <span class="token constant">GET</span><span class="token punctuation">,</span> handler <span class="token keyword">as</span> <span class="token constant">POST</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-2-2-로그인-페이지-생성하기" tabindex="-1"><a class="header-anchor" href="#_1-2-2-로그인-페이지-생성하기" aria-hidden="true">#</a> 1.2.2 로그인 페이지 생성하기</h2>
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
<p>앱/login 폴더 안에 page.tsx라는 파일을 만들어주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getServerSession <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-auth/next"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> authOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/libs/auth"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Session <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-auth"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> redirect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/navigation'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Signin <span class="token keyword">from</span> <span class="token string">'@/components/Signin'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Login</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 서버에서 사용자 세션 정보를 가져옵니다</span>
  <span class="token keyword">const</span> <span class="token literal-property property">session</span><span class="token operator">:</span> Session <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getServerSession</span><span class="token punctuation">(</span>authOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 이미 로그인한 사용자는 add-to-cart 페이지로 리디렉션하고, 아닌 경우에는 Signin 컴포넌트를 표시합니다</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'/add-to-cart'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>Signin <span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Login<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src/components 폴더 안에 Signin이라는 컴포넌트를 만들어주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span> <span class="token comment">// 클라이언트 컴포넌트</span>

<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span> 
<span class="token keyword">import</span> <span class="token punctuation">{</span> signIn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-auth/react"</span><span class="token punctuation">;</span> 
<span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span> 
<span class="token keyword">import</span> <span class="token punctuation">{</span> useSession <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next-auth/react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Signin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// useSession 훅을 사용하여 사용자 세션 정보를 가져옵니다</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> session <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// useEffect 훅을 사용하여 사용자 세션이 감지되면 페이지를 다시로드합니다</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>session<span class="token operator">?.</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>session<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>section className<span class="token operator">=</span><span class="token string">"flex items-center justify-center w-full h-screen px-4"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>form
        className<span class="token operator">=</span><span class="token string">"p-6 xs:p-10 w-full max-w-[350px] flex flex-col justify-between items-center gap-2.5 bg-white rounded text-black"</span>
      <span class="token operator">></span>
        <span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token string">"w-full my-5 text-2xl font-bold"</span><span class="token operator">></span>Welcome back<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
        
        <span class="token punctuation">{</span><span class="token comment">/* 구글로 로그인하는 버튼 */</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>button
          className<span class="token operator">=</span><span class="token string">"w-full h-10 justify-center flex py-1.5 px-4 text-sm align-middle items-center rounded text-999 bg-[#F4F4F5] transition duration-150 ease hover:bg-gray-200 gap-3"</span>
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">signIn</span><span class="token punctuation">(</span><span class="token string">"google"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "google" 제공자로 signIn 함수 호출</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>svg
            data<span class="token operator">-</span>testid<span class="token operator">=</span><span class="token string">"geist-icon"</span>
            height<span class="token operator">=</span><span class="token string">"24"</span>
            strokeLinejoin<span class="token operator">=</span><span class="token string">"round"</span>
            viewBox<span class="token operator">=</span><span class="token string">"0 0 16 16"</span>
            width<span class="token operator">=</span><span class="token string">"24"</span>
            style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'currentColor'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token operator">></span>
            <span class="token operator">&lt;</span>path
              d<span class="token operator">=</span><span class="token string">"M8.15991 6.54543V9.64362H12.4654C12.2763 10.64 11.709 11.4837 10.8581 12.0509L13.4544 14.0655C14.9671 12.6692 15.8399 10.6182 15.8399 8.18188C15.8399 7.61461 15.789 7.06911 15.6944 6.54552L8.15991 6.54543Z"</span>
              fill<span class="token operator">=</span><span class="token string">"#4285F4"</span>
            <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>path<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 나머지 <span class="token constant">SVG</span> path 생략 <span class="token operator">--</span><span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>svg<span class="token operator">></span>
          구글로 로그인
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/register"</span> className<span class="token operator">=</span><span class="token string">"text-sm text-gray-500 transition duration-150 ease hover:text-black"</span><span class="token operator">></span>
          아직 계정이 없으신가요<span class="token operator">?</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Signin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 섹션에서는 NextAuth를 사용하여 Google 로그인을 통한 사용자 인증 인프라를 설정했습니다.</p>
<h1 id="_2-사용자-링크된-쇼핑-카트-통합" tabindex="-1"><a class="header-anchor" href="#_2-사용자-링크된-쇼핑-카트-통합" aria-hidden="true">#</a> 2. 사용자 링크된 쇼핑 카트 통합</h1>
<p>이 섹션에서는 쇼핑 카트 기능을 사용자 인증과 연결합니다. 필요한 환경 변수를 구성하는 것부터 시작해봅시다.</p>
<h2 id="_2-1-환경-변수-설정" tabindex="-1"><a class="header-anchor" href="#_2-1-환경-변수-설정" aria-hidden="true">#</a> 2.1 환경 변수 설정</h2>
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
<p><code v-pre>.env.local</code> 파일을 만들고 다음 변수를 추가해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">KV_URL</span><span class="token operator">=</span><span class="token string">"YOUR_KV_URL"</span>
<span class="token constant">KV_REST_API_URL</span><span class="token operator">=</span><span class="token string">"YOUR_KV_API_URL"</span>
<span class="token constant">KV_REST_API_TOKEN</span><span class="token operator">=</span><span class="token string">"YOUR_API_TOKEN"</span>
<span class="token constant">KV_REST_API_READ_ONLY_TOKEN</span><span class="token operator">=</span><span class="token string">"YOUR_READ_ONLY_TOKEN"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>환경 변수를 어떻게 얻을지에 대해 의문이 있으면 여기를 클릭해주세요.</p>
<h2 id="_2-2-1-장바구니-페이지-설정" tabindex="-1"><a class="header-anchor" href="#_2-2-1-장바구니-페이지-설정" aria-hidden="true">#</a> 2.2.1 장바구니 페이지 설정</h2>
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
<p>로직 사용자 인증이 완료되면 장바구니 로직을 시작해 보겠습니다. add-to-cart라는 경로를 생성하고 이 미완료 코드를 넣을 page.tsx 파일을 만들 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getServerSession <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-auth/next"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> authOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/libs/auth"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Session <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-auth"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> redirect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>

<span class="token comment">// Product 객체에 대한 유형 정의</span>
<span class="token keyword">export</span> type Product <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token literal-property property">price</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>

<span class="token comment">// 제품 배열</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">products</span><span class="token operator">:</span> Product<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"아메리카노"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">40</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"에스프레소"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">20</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"아라비카"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">10</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">AddToCart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 서버 세션 가져오기</span>
    <span class="token keyword">const</span> <span class="token literal-property property">session</span><span class="token operator">:</span> Session <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getServerSession</span><span class="token punctuation">(</span>authOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 세션이 없으면 로그인 페이지로 리다이렉트</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>main className<span class="token operator">=</span><span class="token string">"flex flex-col items-center min-h-screen p-24"</span><span class="token operator">></span>
   
        <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-2-쇼핑-카트-액션-로직" tabindex="-1"><a class="header-anchor" href="#_2-2-2-쇼핑-카트-액션-로직" aria-hidden="true">#</a> 2.2.2 쇼핑 카트 액션 로직</h2>
<p>add-to-cart 폴더 내에 action.ts라는 파일을 생성할 것입니다. 여기에는 모든 쇼핑 카트 로직이 위치합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'start server'</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> kv <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@vercel/kv"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> revalidatePath <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/cache"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> products<span class="token punctuation">,</span> type Product <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./page"</span><span class="token punctuation">;</span>

<span class="token comment">// 카트 객체 유형 정의</span>
<span class="token keyword">export</span> type Cart <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">userId</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">items</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span><span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
        <span class="token literal-property property">price</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
        <span class="token literal-property property">quantity</span><span class="token operator">:</span> number
    <span class="token punctuation">}</span><span class="token operator">></span>
<span class="token punctuation">}</span>

<span class="token comment">// 카트에 아이템 추가하는 함수</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">addItem</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">userId</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">productId</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 사용자 ID를 기반으로 카트 검색</span>
    <span class="token keyword">let</span> <span class="token literal-property property">cart</span><span class="token operator">:</span> Cart <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">await</span> kv<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">testcart-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>userId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 제품 배열에서 선택한 제품 찾기</span>
    <span class="token keyword">const</span> <span class="token literal-property property">selectedProduct</span><span class="token operator">:</span> Product <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> products<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">product</span> <span class="token operator">=></span> product<span class="token punctuation">.</span>id <span class="token operator">===</span> productId<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 선택한 제품이 없는 경우 처리</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>selectedProduct<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">ID가 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>productId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">인 제품을 찾을 수 없습니다.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 카트가 비어있거나 존재하지 않는 경우 새로운 카트 객체 생성</span>
    <span class="token keyword">let</span> myCart <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> Cart<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cart <span class="token operator">||</span> <span class="token operator">!</span>cart<span class="token punctuation">.</span>items<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        myCart <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">userId</span><span class="token operator">:</span> userId<span class="token punctuation">,</span>
            <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token operator">...</span>selectedProduct<span class="token punctuation">,</span>
                    <span class="token literal-property property">quantity</span><span class="token operator">:</span> <span class="token number">1</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 아이템이 이미 카트에 있는지 확인</span>
        <span class="token keyword">let</span> itemFound <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

        <span class="token comment">// 기존 아이템의 수량을 업데이트하거나 새로운 아이템을 카트에 추가</span>
        myCart<span class="token punctuation">.</span>items <span class="token operator">=</span> cart<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>id <span class="token operator">===</span> productId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                itemFound <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                item<span class="token punctuation">.</span>quantity <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> item<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">as</span> Cart<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>itemFound<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'새로운 아이템을 카트에 추가합니다.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            myCart<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token operator">...</span>selectedProduct<span class="token punctuation">,</span>
                <span class="token literal-property property">quantity</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 업데이트된 카트 기록</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'업데이트된 카트:'</span><span class="token punctuation">,</span> myCart<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 업데이트된 카트를 KV 저장소에 저장</span>
    <span class="token keyword">await</span> kv<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">testcart-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>userId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> myCart<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// '/add-to-cart' 페이지를 재검증</span>
    <span class="token function">revalidatePath</span><span class="token punctuation">(</span><span class="token string">'/add-to-cart'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 카트에서 아이템 삭제하는 함수</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">delItem</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">userId</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">productId</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 사용자 ID를 기반으로 카트 검색</span>
    <span class="token keyword">let</span> <span class="token literal-property property">cart</span><span class="token operator">:</span> Cart <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">await</span> kv<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">testcart-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>userId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 카트와 아이템이 있는지 확인</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cart <span class="token operator">&amp;&amp;</span> cart<span class="token punctuation">.</span>items<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 삭제할 아이템을 카트에서 필터링</span>
        <span class="token keyword">const</span> updatedCart <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">userId</span><span class="token operator">:</span> userId<span class="token punctuation">,</span>
            <span class="token literal-property property">items</span><span class="token operator">:</span> cart<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>id <span class="token operator">!==</span> productId<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token comment">// 업데이트된 카트를 KV 저장소에 저장</span>
        <span class="token keyword">await</span> kv<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">testcart-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>userId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> updatedCart<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// '/add-to-cart' 페이지를 재검증</span>
        <span class="token function">revalidatePath</span><span class="token punctuation">(</span><span class="token string">'/add-to-cart'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 카트에서 아이템 하나 삭제하는 함수</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">delOneItem</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">userId</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">productId</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 사용자 ID를 기반으로 카트 검색</span>
    <span class="token keyword">let</span> <span class="token literal-property property">cart</span><span class="token operator">:</span> Cart <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">await</span> kv<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">testcart-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>userId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 카트와 아이템이 있는지 확인</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cart <span class="token operator">&amp;&amp;</span> cart<span class="token punctuation">.</span>items<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 아이템의 수량을 업데이트하거나 수량이 0이 되면 제거</span>
        <span class="token keyword">const</span> updatedCart <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">userId</span><span class="token operator">:</span> userId<span class="token punctuation">,</span>
            <span class="token literal-property property">items</span><span class="token operator">:</span> cart<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>id <span class="token operator">===</span> productId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>quantity <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        item<span class="token punctuation">.</span>quantity <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> item<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span> <span class="token keyword">as</span> Cart<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token comment">// 업데이트된 카트를 KV 저장소에 저장</span>
        <span class="token keyword">await</span> kv<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">testcart-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>userId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> updatedCart<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// '/add-to-cart' 페이지를 재검증</span>
        <span class="token function">revalidatePath</span><span class="token punctuation">(</span><span class="token string">'/add-to-cart'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"use client"</span> <span class="token comment">// 클라이언트 컴포넌트</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> formatNumber <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/utils/format"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useTransition <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> delItem<span class="token punctuation">,</span> delOneItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/app/add-to-cart/action"</span><span class="token punctuation">;</span>

<span class="token comment">// CartItem 컴포넌트에 전달되는 props에 대한 유형 정의</span>
type CartItemProps <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">no</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
    <span class="token literal-property property">userId</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token literal-property property">quantity</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
    <span class="token literal-property property">price</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">CartItem</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
    no<span class="token punctuation">,</span> id<span class="token punctuation">,</span> userId<span class="token punctuation">,</span> name<span class="token punctuation">,</span> quantity<span class="token punctuation">,</span> price
<span class="token punctuation">}</span><span class="token operator">:</span> CartItemProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 보류 중인 전환을 위한 상태 선언</span>
    <span class="token keyword">let</span> <span class="token punctuation">[</span>isPending<span class="token punctuation">,</span> startTransition<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useTransition</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex justify-between text-slate-900"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"w-[40%] flex gap-2 items-center"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">"text-sm text-slate-600"</span><span class="token operator">></span><span class="token punctuation">{</span>no<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
            <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"w-[30%] text-center"</span><span class="token operator">></span><span class="token punctuation">{</span>quantity<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"w-[30%] text-right"</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token function">formatNumber</span><span class="token punctuation">(</span>quantity <span class="token operator">*</span> price<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>button
            className<span class="token operator">=</span><span class="token string">"text-sm font-semibold hover:text-slate-600"</span>
            onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token comment">// 이 유형의 모든 항목을 장바구니에서 삭제하기 위한 전환 시작</span>
                <span class="token function">startTransition</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">delItem</span><span class="token punctuation">(</span>userId<span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token operator">></span>
            모든 항목 삭제
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span>button
            className<span class="token operator">=</span><span class="token string">"text-sm font-semibold hover:text-slate-600"</span>
            onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token comment">// 이 유형의 한 항목을 장바구니에서 삭제하기 위한 전환 시작</span>
                <span class="token function">startTransition</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">delOneItem</span><span class="token punctuation">(</span>userId<span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token operator">></span>
            항목 삭제
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>애플리케이션을 완성하기 위해 add-to-cart 내의 page.tsx 파일을 수정하여 애플리케이션의 제품 및 등록된 사용자의 장바구니를 전달할 두 개의 새 컴포넌트를 추가하겠습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> ProductCard <span class="token keyword">from</span> <span class="token string">"@/components/ProductCard"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> CartItem <span class="token keyword">from</span> <span class="token string">"@/components/CartItem"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> type Cart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./action"</span><span class="token punctuation">;</span> <span class="token comment">// 장바구니에 대한 유형 가져오기</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> kv <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@vercel/kv"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getServerSession <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-auth/next"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> authOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/libs/auth"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Session <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-auth"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> redirect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> type Product <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token literal-property property">price</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">products</span><span class="token operator">:</span> Product<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"아메리카노"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">40</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"에스프레소"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">20</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"아라비카"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">10</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">AddToCart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token literal-property property">session</span><span class="token operator">:</span> Session <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getServerSession</span><span class="token punctuation">(</span>authOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 세션에서 사용자 ID 추출</span>
    <span class="token keyword">const</span> userId <span class="token operator">=</span> session<span class="token punctuation">.</span>user<span class="token punctuation">.</span>_id<span class="token punctuation">;</span>

    <span class="token comment">// KV 저장소에서 사용자의 장바구니 검색</span>
    <span class="token keyword">const</span> <span class="token literal-property property">cart</span><span class="token operator">:</span> Cart <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">await</span> kv<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">testcart-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>userId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 장바구니에 있는 항목의 총 수량 계산</span>
    <span class="token keyword">const</span> total <span class="token operator">=</span> cart<span class="token operator">?.</span>items<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">sum<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=></span> sum <span class="token operator">+</span> item<span class="token punctuation">.</span>quantity<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>main className<span class="token operator">=</span><span class="token string">"flex flex-col items-center min-h-screen p-24"</span><span class="token operator">></span>
            <span class="token punctuation">{</span><span class="token comment">/* 제품 표시를 위한 섹션 */</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"w-full"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token string">"mb-6 text-xl font-semibold text-left text-slate-900"</span><span class="token operator">></span>제품<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
                <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex gap-6"</span><span class="token operator">></span>
                    <span class="token punctuation">{</span><span class="token comment">/* 제품 배열을 매핑하고 각 제품에 대해 ProductCard 컴포넌트 렌더링 */</span><span class="token punctuation">}</span>
                    <span class="token punctuation">{</span>products<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">product</span> <span class="token operator">=></span>
                        <span class="token operator">&lt;</span>ProductCard key<span class="token operator">=</span><span class="token punctuation">{</span>product<span class="token punctuation">.</span>id<span class="token punctuation">}</span>
                            id<span class="token operator">=</span><span class="token punctuation">{</span>product<span class="token punctuation">.</span>id<span class="token punctuation">}</span>
                            userId<span class="token operator">=</span><span class="token punctuation">{</span>userId<span class="token punctuation">}</span>
                            name<span class="token operator">=</span><span class="token punctuation">{</span>product<span class="token punctuation">.</span>name<span class="token punctuation">}</span>
                            price<span class="token operator">=</span><span class="token punctuation">{</span>product<span class="token punctuation">.</span>price<span class="token punctuation">}</span>
                        <span class="token operator">/</span><span class="token operator">></span>
                    <span class="token punctuation">)</span><span class="token punctuation">}</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

            <span class="token punctuation">{</span><span class="token comment">/* 장바구니 표시를 위한 섹션 */</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"w-full mt-6"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token string">"text-xl font-semibold text-slate-900"</span><span class="token operator">></span>장바구니<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
                <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex flex-col gap-2 px-6 py-4 mt-2 border rounded-xl border-slate-700"</span><span class="token operator">></span>
                    <span class="token punctuation">{</span><span class="token comment">/* 카트 내의 각 항목에 대해 CartItem 컴포넌트 렌더링 */</span><span class="token punctuation">}</span>
                    <span class="token punctuation">{</span>cart<span class="token operator">?.</span>items <span class="token operator">?</span> cart<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span>
                        <span class="token operator">&lt;</span>CartItem key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span>
                            no<span class="token operator">=</span><span class="token punctuation">{</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span>
                            id<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span>
                            userId<span class="token operator">=</span><span class="token punctuation">{</span>userId<span class="token punctuation">}</span>
                            name<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span>
                            price<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>price<span class="token punctuation">}</span>
                            quantity<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>quantity<span class="token punctuation">}</span>
                        <span class="token operator">/</span><span class="token operator">></span>
                    <span class="token punctuation">)</span> <span class="token operator">:</span>
                        <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">"text-sm text-slate-600"</span><span class="token operator">></span>아이템 없음<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
                    <span class="token punctuation">}</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

                <span class="token punctuation">{</span><span class="token comment">/* 장바구니에 있는 항목의 총 수량을 표시하는 섹션 */</span><span class="token punctuation">}</span>
                <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex justify-between px-6 mt-4 font-semibold text-slate-900"</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>div<span class="token operator">></span>총 수량<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                    <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>total<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="마무리-및-결론" tabindex="-1"><a class="header-anchor" href="#마무리-및-결론" aria-hidden="true">#</a> 마무리 및 결론```</h2>
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
<p>다음은 Next.js 14에서 Vercel KV와 Next-Auth를 사용하여 사용자와 연결된 쇼핑 카트를 만드는 방법입니다. 꽤 쉽죠?</p>
<p>지금까지 따라오셔서 정말 감사합니다. 유용하게 찾으셨다면 GitHub에서 박수와 스타를 남겨주세요 ❤.</p>
<h1 id="간단하게-설명-🚀" tabindex="-1"><a class="header-anchor" href="#간단하게-설명-🚀" aria-hidden="true">#</a> 간단하게 설명 🚀</h1>
<p>In Plain English 커뮤니티에 참여해 주셔서 감사합니다! 계속 진행하기 전에:</p>
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
<li>작가를 칭찬하고 팔로우하는 것을 잊지 마세요! 👏️</li>
<li>팔로우하기: X | LinkedIn | YouTube | Discord | 뉴스레터</li>
<li>다른 플랫폼 방문하기: Stackademic | CoFeed | Venture | Cubed</li>
<li>더 많은 콘텐츠: PlainEnglish.io</li>
</ul>
</div></template>
