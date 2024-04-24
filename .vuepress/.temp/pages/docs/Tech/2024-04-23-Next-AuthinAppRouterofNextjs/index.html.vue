<template><div><p>Next.js가 최근 안정 버전의 App Router를 출시했습니다. 이 버전에는 레이아웃, 템플릿, 라우팅, 로딩 및 에러 처리를 내장 지원합니다.</p>
<p>현재 Next-Auth 문서의 버전은 Next.js의 페이지 라우터 예제와 함께 게시되었습니다. 이 문서는 Next-Auth App Router를 설정하는 방법을 공유합니다.</p>
<h1 id="이-문서에서-다루는-내용은-무엇인가요" tabindex="-1"><a class="header-anchor" href="#이-문서에서-다루는-내용은-무엇인가요" aria-hidden="true">#</a> 이 문서에서 다루는 내용은 무엇인가요?</h1>
<ul>
<li>앱 라우터를 사용한 Next.js 앱 설정.</li>
<li>Next-Auth 설치.</li>
<li>Github 제공 업체 구성.</li>
<li>Next-Auth를 위한 핸들러 추가.</li>
<li>Next-Auth를 사용한 로그인 및 로그아웃.</li>
<li>서버 컴포넌트에서 세션 사용.</li>
<li>클라이언트 컴포넌트에서 세션 사용.</li>
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
<h1 id="앱-라우터와-함께-next-js-앱-설정하기" tabindex="-1"><a class="header-anchor" href="#앱-라우터와-함께-next-js-앱-설정하기" aria-hidden="true">#</a> 앱 라우터와 함께 Next.js 앱 설정하기</h1>
<p>기본 Next.js 앱을 앱 라우터와 함께 생성하려면 이 문서를 따르세요.</p>
<p><img src="@source/docs/Tech/2024-04-23-Next-AuthinAppRouterofNextjs/img/Next-AuthinAppRouterofNextjs_0.png" alt="Next-AuthinAppRouterofNextjs_0"></p>
<h1 id="next-auth-설치" tabindex="-1"><a class="header-anchor" href="#next-auth-설치" aria-hidden="true">#</a> Next-Auth 설치</h1>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install next<span class="token operator">-</span>auth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="github-공급자-구성" tabindex="-1"><a class="header-anchor" href="#github-공급자-구성" aria-hidden="true">#</a> Github 공급자 구성</h1>
<p>우선 GitHub 앱을 만들어서 클라이언트 ID 및 비밀을 제공받으세요. lib 폴더에 auth.js 파일을 추가하세요.</p>
<p>참고: NEXTAUTH_SECRET로 추가할 비밀을 생성해야 합니다. auth 옵션에 반드시 추가해야 합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>openssl rand <span class="token operator">-</span>base64 <span class="token number">32</span>

<span class="token comment">// 결과</span>
<span class="token comment">// mQ46qpFwfE1BHuqMC+qlm19qBAD9fVPgh28werwe3ASFlAfnKjM=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음은 config.js 파일입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'next'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>NextConfig<span class="token punctuation">}</span></span> */</span>
<span class="token keyword">const</span> nextConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">images</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">remotePatterns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">protocol</span><span class="token operator">:</span> <span class="token string">'https'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">hostname</span><span class="token operator">:</span> <span class="token string">'i.imgur.com'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token constant">GITHUB_APP_CLIENT_ID</span><span class="token operator">:</span> <span class="token string">'919b87qa4sdfs1qdc44f53baf9'</span><span class="token punctuation">,</span>
    <span class="token constant">GITHUB_APP_CLIENT_SECRET</span><span class="token operator">:</span> <span class="token string">'2aeq98df3f8cwqerc2d03a8360e993c115ba8d5f71de9'</span><span class="token punctuation">,</span>
    <span class="token constant">NEXTAUTH_SECRET</span><span class="token operator">:</span> <span class="token string">'mQ46qpFwfE1BHuqMC+qlm19qBAD9fVPgh28werwe3ASFlAfnKjM='</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> nextConfig<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextAuthOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next-auth'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> GithubProvider <span class="token keyword">from</span> <span class="token string">'next-auth/providers/github'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">authOptions</span><span class="token operator">:</span> NextAuthOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// Next-auth를 위한 비밀키, 이 값이 없으면 JWT 암호화/해독이 작동하지 않습니다</span>
  <span class="token literal-property property">secret</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXTAUTH_SECRET</span><span class="token punctuation">,</span>
  
  <span class="token comment">// 하나 이상의 인증 공급자 구성</span>
  <span class="token literal-property property">providers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">GithubProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">clientId</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">GITHUB_APP_CLIENT_ID</span> <span class="token keyword">as</span> string<span class="token punctuation">,</span>
      <span class="token literal-property property">clientSecret</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">GITHUB_APP_CLIENT_SECRET</span> <span class="token keyword">as</span> string<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<h1 id="next-auth-핸들러-추가하기" tabindex="-1"><a class="header-anchor" href="#next-auth-핸들러-추가하기" aria-hidden="true">#</a> Next-Auth 핸들러 추가하기</h1>
<p><code v-pre>/app/auth/[...nextauth]</code> 폴더 안에 <code v-pre>route.js</code> 파일을 생성하세요.</p>
<p><img src="@source/docs/Tech/2024-04-23-Next-AuthinAppRouterofNextjs/img/Next-AuthinAppRouterofNextjs_1.png" alt="Next-Auth in App Router of Next.js"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> NextAuth <span class="token keyword">from</span> <span class="token string">'next-auth'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> authOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/app/lib/auth'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token function">NextAuth</span><span class="token punctuation">(</span>authOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> handler <span class="token keyword">as</span> <span class="token constant">GET</span><span class="token punctuation">,</span> handler <span class="token keyword">as</span> <span class="token constant">POST</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="next-auth를-사용한-로그인-및-로그아웃" tabindex="-1"><a class="header-anchor" href="#next-auth를-사용한-로그인-및-로그아웃" aria-hidden="true">#</a> Next-auth를 사용한 로그인 및 로그아웃</h1>
<p>위의 경로/api/auth/* (signIn, callback, signOut 등)로의 모든 요청은 NextAuth.js에서 처리됩니다.</p>
<p>버튼을 클릭하여 로그인하고 앱을 승인하면 세션에 쿠키가 저장됩니다.</p>
<p><img src="@source/docs/Tech/2024-04-23-Next-AuthinAppRouterofNextjs/img/Next-AuthinAppRouterofNextjs_2.png" alt="이미지"></p>
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
<p>로그인에 성공한 후에</p>
<p><img src="@source/docs/Tech/2024-04-23-Next-AuthinAppRouterofNextjs/img/Next-AuthinAppRouterofNextjs_3.png" alt="이미지"></p>
<h1 id="로그아웃" tabindex="-1"><a class="header-anchor" href="#로그아웃" aria-hidden="true">#</a> 로그아웃</h1>
<p>로그아웃하려면 <code v-pre>/api/auth/signout</code> 링크를 사용하세요.</p>
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
<h1 id="api-라우트에서-세션" tabindex="-1"><a class="header-anchor" href="#api-라우트에서-세션" aria-hidden="true">#</a> API 라우트에서 세션.</h1>
<p>API 라우트 핸들러는 서버 구성 요소로 간주됩니다. 정적 또는 동적 핸들러가 될 수 있지만 항상 서버 측에 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> authOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/app/lib/auth'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getServerSession <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next-auth'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/server'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">GET</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">request</span><span class="token operator">:</span> Request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> session <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getServerSession</span><span class="token punctuation">(</span>authOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>session<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  user<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> 'Rohit Kumar Khatri'<span class="token punctuation">,</span>
    email<span class="token operator">:</span> 'er.rohitkumar@outlook.com'<span class="token punctuation">,</span>
    image<span class="token operator">:</span> 'https<span class="token operator">:</span><span class="token comment">//avatars.githubusercontent.com/u/34018015?v=4'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="서버-구성요소에서의-세션" tabindex="-1"><a class="header-anchor" href="#서버-구성요소에서의-세션" aria-hidden="true">#</a> 서버 구성요소에서의 세션</h1>
<p>서버 구성요소 모두에서도 비슷합니다. 위에서 언급한 함수를 사용하십시오.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">await</span> <span class="token function">getServerSession</span><span class="token punctuation">(</span>authOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<h1 id="클라이언트-컴포넌트에서-세션" tabindex="-1"><a class="header-anchor" href="#클라이언트-컴포넌트에서-세션" aria-hidden="true">#</a> 클라이언트 컴포넌트에서 세션</h1>
<p>먼저, 루트 레이아웃에 세션 제공자를 추가해주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'use client'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> SessionProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next-auth/react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ReactNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">NextAuthProvider</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
  children<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> ReactNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>SessionProvider<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>SessionProvider<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useSelectedLayoutSegments <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/navigation'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./globals.css'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Inter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/font/google'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Footer <span class="token keyword">from</span> <span class="token string">'@/app/components/Footer'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Navbar <span class="token keyword">from</span> <span class="token string">'@/app/components/Navbar'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> NextAuthProvider <span class="token keyword">from</span> <span class="token string">'@/app/context/NextAuthProvider'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ReactNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> inter <span class="token operator">=</span> <span class="token function">Inter</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">subsets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'latin'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">children</span><span class="token operator">:</span> ReactNode <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>body className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">inter.className</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>NextAuthProvider<span class="token operator">></span>
          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"w-10/12 m-auto text-center bg-white flex flex-col min-h-screen"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>
              <span class="token operator">&lt;</span>Navbar <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"grow"</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>Footer <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>NextAuthProvider<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이제 클라이언트 구성 요소에서 세션을 사용해 보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'use client'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useSession <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next-auth/react'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ClientComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> session<span class="token punctuation">,</span> status <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      클라이언트 구성 요소 <span class="token punctuation">{</span>status<span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span>
      <span class="token punctuation">{</span>status <span class="token operator">===</span> <span class="token string">'authenticated'</span> <span class="token operator">&amp;&amp;</span> session<span class="token punctuation">.</span>user<span class="token operator">?.</span>name<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-04-23-Next-AuthinAppRouterofNextjs/img/Next-AuthinAppRouterofNextjs_4.png" /></div></template>
