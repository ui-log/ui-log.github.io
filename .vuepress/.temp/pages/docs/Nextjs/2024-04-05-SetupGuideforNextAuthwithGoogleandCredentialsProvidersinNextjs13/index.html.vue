<template><div><p>이 가이드는 Next.js 13 (앱 디렉토리) 애플리케이션에 NextAuth를 통합하기 위한 간결한 단계를 제공합니다. 구글 및 자격 증명 제공자를 사용하여 인증을 수행합니다. 목표는 Next.js 프로젝트에서 구글 로그인과 전통적인 이메일/비밀번호 인증을 모두 활성화하는 것입니다. 설정 프로세스에 대해 알아보고, 구현 및 코드 예제에 초점을 맞춥니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-SetupGuideforNextAuthwithGoogleandCredentialsProvidersinNextjs13/img/SetupGuideforNextAuthwithGoogleandCredentialsProvidersinNextjs13_0.png" alt="이미지"></p>
<h1 id="전제-조건" tabindex="-1"><a class="header-anchor" href="#전제-조건" aria-hidden="true">#</a> 전제 조건</h1>
<p>시작하기 전에 다음 사항이 있는지 확인하세요:</p>
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
<li>App 디렉터리가 활성화된 Next.js 13 프로젝트 설정.</li>
<li>OAuth 자격 증명을 얻기 위한 Google Cloud 계정.</li>
</ul>
<p>Google OAuth 자격 증명을 얻으려면:</p>
<ul>
<li>Google Cloud 콘솔로 이동합니다.</li>
<li>새 프로젝트를 만들거나 기존 프로젝트를 선택합니다.</li>
<li>'API 및 서비스' &gt; '자격 증명'으로 이동합니다.</li>
<li>'자격 증명 생성'을 클릭하고 'OAuth 클라이언트 ID'를 선택합니다.</li>
<li>동의 화면을 설정하고 애플리케이션 유형으로 '웹 애플리케이션'을 선택합니다.</li>
<li>로컬 개발 환경을 위해 일반적으로 http://localhost:3000/api/auth/callback/google을 '인증된 리디렉션 URI'에 추가합니다.</li>
<li>생성되면 클라이언트 ID 및 클라이언트 비밀번호를 얻게 됩니다.</li>
</ul>
<h1 id="nextauth-설치" tabindex="-1"><a class="header-anchor" href="#nextauth-설치" aria-hidden="true">#</a> NextAuth 설치</h1>
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
<p>먼저, Next.js 프로젝트에 NextAuth를 설치해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install next<span class="token operator">-</span>auth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>다음으로, authOptions 파일에서 기본 구조를 구성해주세요. 아래 코드를 사용하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> NextAuth <span class="token keyword">from</span> <span class="token string">'next-auth'</span>
<span class="token keyword">import</span> GoogleProvider <span class="token keyword">from</span> <span class="token string">'next-auth/providers/google'</span>
<span class="token keyword">import</span> CredentialsProvider <span class="token keyword">from</span> <span class="token string">'next-auth/providers/credentials'</span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> authOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 다음 단계에서 공급자 배열을 구성할 것입니다</span>
  <span class="token literal-property property">providers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">session</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">strategy</span><span class="token operator">:</span> <span class="token string">'jwt'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 여기에 추가 구성이 추가될 것입니다</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getAuth</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">getServerSession</span><span class="token punctuation">(</span>authOptions<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 코드는 providers에 빈 배열을 설정하여 NextAuth를 구성하며, 해당 배열은 다음 단계에서 채워지고 세션 관리에 JWT를 지정합니다. getAuth 함수는 서버 측 세션 검색을 위한 것입니다.</p>
<h1 id="google-공급자-구성" tabindex="-1"><a class="header-anchor" href="#google-공급자-구성" aria-hidden="true">#</a> Google 공급자 구성</h1>
<p>Google 인증을 통합하려면 authOptions의 providers 배열을 업데이트하세요:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> GoogleProvider <span class="token keyword">from</span> <span class="token string">'next-auth/providers/google'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ... 다른 import문</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> authOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">providers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">GoogleProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">clientId</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">GOOGLE_CLIENT_ID</span><span class="token punctuation">,</span>
      <span class="token literal-property property">clientSecret</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">GOOGLE_CLIENT_SECRET</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// ... 다른 프로바이더</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// ... 다른 설정</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 설정에서:</p>
<ul>
<li>clientId와 clientSecret는 Google Cloud Console에서 얻은 OAuth 자격 증명입니다.</li>
<li>보안을 위해 이러한 자격 증명을 환경 변수(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET)에 저장하세요.</li>
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
<h1 id="_5-자격-증명-제공자-설정하기" tabindex="-1"><a class="header-anchor" href="#_5-자격-증명-제공자-설정하기" aria-hidden="true">#</a> 5. 자격 증명 제공자 설정하기</h1>
<p>이메일/비밀번호 인증을 위해 자격 증명 제공자를 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> CredentialsProvider <span class="token keyword">from</span> <span class="token string">'next-auth/providers/credentials'</span>
<span class="token keyword">import</span> bcrypt <span class="token keyword">from</span> <span class="token string">'bcrypt'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ... 다른 import들</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> authOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">providers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// ... GoogleProvider 설정</span>
    <span class="token function">CredentialsProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Credentials'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'이메일'</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'email'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'비밀번호'</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'password'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token keyword">async</span> <span class="token function">authorize</span><span class="token punctuation">(</span><span class="token parameter">credentials</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 여기서 자격 증명을 확인하는 로직 추가</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>credentials<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> credentials
        <span class="token comment">// 사용자와 비밀번호 해시를 데이터베이스에서 가져옴</span>
        <span class="token comment">// 예: const user = await getUserByEmail(email)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>user <span class="token operator">&amp;&amp;</span> bcrypt<span class="token punctuation">.</span><span class="token function">compareSync</span><span class="token punctuation">(</span>password<span class="token punctuation">,</span> user<span class="token punctuation">.</span>passwordHash<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> user<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> user<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token literal-property property">email</span><span class="token operator">:</span> user<span class="token punctuation">.</span>email <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'유효하지 않은 자격 증명'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// ... 다른 설정들</span>
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
<p>주요 사항:</p>
<ul>
<li>이메일과 비밀번호 필드로 자격 증명을 정의합니다.</li>
<li>사용자 자격 증명을 확인하는 authorize 함수를 구현합니다.</li>
<li>데이터베이스에서 사용자의 해시화된 비밀번호를 가져옵니다.</li>
<li>제공된 비밀번호를 저장된 해시와 비교하기 위해 bcrypt를 사용합니다.</li>
<li>유효한 경우 사용자 객체를 반환하고, 그렇지 않으면 오류를 throw합니다.</li>
</ul>
<p>이 설정을 통해 사용자들이 이메일과 비밀번호로 로그인할 수 있게 되며, Google 프로바이더를 통해 Google 계정으로 로그인할 수 있습니다. 다음 섹션에서는 이것들을 Next.js 애플리케이션 라우트에 통합하고 사용자 세션을 관리하는 방법에 대해 다룰 것입니다.</p>
<h1 id="nextauth의-authoptions-상세-분석" tabindex="-1"><a class="header-anchor" href="#nextauth의-authoptions-상세-분석" aria-hidden="true">#</a> NextAuth의 authOptions 상세 분석</h1>
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
<p>이authOptions 구조와 그 구성 요소를 자세히 살펴보겠습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">authOptions</span><span class="token operator">:</span> NextAuthOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">providers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// GoogleProvider 및 CredentialsProvider 구성</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">session</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">strategy</span><span class="token operator">:</span> <span class="token string">'jwt'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">maxAge</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token comment">// 1일</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">jwt</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// JWT 인코딩 및 디코딩 구성</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">callbacks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// signIn, 세션 콜백</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">signIn</span><span class="token operator">:</span> <span class="token string">'/signIn'</span><span class="token punctuation">,</span> <span class="token comment">// 사용자 정의 로그인 페이지</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 설정에서:</p>
<ul>
<li>providers 배열은 Google 및 Credentials 공급자를 포함합니다.</li>
<li>session은 JWT 세션 관리를 구성합니다.</li>
<li>jwt는 JWT 토큰의 인코딩 및 디코딩을 처리합니다.</li>
<li>callbacks는 signIn 및 세션 이벤트의 사용자 정의 처리를 허용합니다.</li>
<li>pages는 로그인을 위한 사용자 정의 페이지를 지정할 수 있습니다.</li>
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
<h1 id="인증-루트" tabindex="-1"><a class="header-anchor" href="#인증-루트" aria-hidden="true">#</a> 인증 루트</h1>
<p>다음으로, Next.js 애플리케이션에서 인증 루트를 설정하세요. 이는 인증 요청을 처리하는 API 루트를 생성하는 것을 포함합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/app/api/auth/[...nextauth]/route.ts</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> authOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@foundation/common/src/authOptions'</span>
<span class="token keyword">import</span> NextAuth <span class="token keyword">from</span> <span class="token string">'next-auth'</span>
<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token function">NextAuth</span><span class="token punctuation">(</span>authOptions<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> handler <span class="token keyword">as</span> <span class="token constant">GET</span><span class="token punctuation">,</span> handler <span class="token keyword">as</span> <span class="token constant">POST</span> <span class="token punctuation">}</span>
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
<p>위 코드에서:</p>
<ul>
<li>NextAuth 및 authOptions를 가져옵니다.</li>
<li>NextAuth(authOptions)를 사용하여 핸들러를 만듭니다.</li>
<li>/api/auth/*에서 GET 및 POST 요청을 처리하기 위해 핸들러를 기본 내보내기로 내보냅니다.</li>
</ul>
<p>이러한 경로들은 authOptions 설정과 함께 작동하여 사용자 인증을 처리합니다. 사용자가 로그인을 시도하거나 인증 시스템과 상호 작용하려고 할 때, 이러한 API 경로는 설정에 따라 요청을 처리합니다.</p>
<p>인증된 사용자에게 생성된 토큰을 반환하는 경로를 가질 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/app/api/auth/token/route.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> NextRequest<span class="token punctuation">,</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/server'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> cookies <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/headers'</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">GET</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">req</span><span class="token operator">:</span> NextRequest<span class="token punctuation">,</span> <span class="token literal-property property">res</span><span class="token operator">:</span> NextResponse</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> getCookies <span class="token operator">=</span> <span class="token function">cookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> nextAuthSession <span class="token operator">=</span> getCookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'next-auth.session-token'</span><span class="token punctuation">)</span><span class="token operator">?.</span>value <span class="token operator">||</span> <span class="token string">''</span>

  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>nextAuthSession<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="플로우" tabindex="-1"><a class="header-anchor" href="#플로우" aria-hidden="true">#</a> 플로우</h1>
<p>사용자는 Google 또는 이메일/비밀번호 인증 중 선택으로 시작됩니다. Google 인증을 선택한 경우 사용자는 Google로 이동한 후 다시 돌아오고, 이메일/비밀번호를 선택한 경우 자격 증명은 권한 부여 함수를 통해 확인됩니다. 이 프로세스는 유효한 자격 증명만 액세스를 부여하도록 보장하며, 성공적인 인증 후 사용자의 세션은 생성되어 이후 애플리케이션 사용을 위해 관리됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">|</span>
<span class="token operator">|</span><span class="token operator">--</span> 사용자가 인증 시작
<span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> Google 제공업체를 통해
<span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">-- Google로 리다이렉션 -> 사용자 인증 -> 애플리케이션으로 리다이렉션
|   |
|   </span><span class="token template-punctuation string">`</span></span><span class="token operator">--</span> 자격 증명 제공자를 통해
<span class="token operator">|</span>       <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">-- 사용자가 이메일 및 비밀번호 입력
|           </span><span class="token template-punctuation string">`</span></span><span class="token operator">--</span> 권한 부여 함수
<span class="token operator">|</span>               <span class="token operator">|</span><span class="token operator">--</span> 유효한 경우<span class="token operator">:</span> 사용자 인증됨
<span class="token operator">|</span>               <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">-- 부적절한 경우: 오류 반환
|
|-- 인증 후
|   </span><span class="token template-punctuation string">`</span></span><span class="token operator">--</span> signIn 콜백 실행
<span class="token operator">|</span>
<span class="token operator">|</span><span class="token operator">--</span> 세션 생성 및 관리
<span class="token operator">|</span>   <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">-- 세션 콜백이 세션 정보를 업데이트
|
</span><span class="token template-punctuation string">`</span></span><span class="token operator">--</span> 사용자 액세스
    `<span class="token operator">--</span> 사용자가 완전히 인증되어 애플리케이션에 액세스
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
<h1 id="ui-구성-요소" tabindex="-1"><a class="header-anchor" href="#ui-구성-요소" aria-hidden="true">#</a> UI 구성 요소</h1>
<p>SignIn 컴포넌트는 사용자가 인증 시스템과 상호 작용하는 주요 인터페이스 요소입니다. 이 컴포넌트는 사용자의 이메일과 비밀번호를 다루기 위해 폼 관리를 사용하며 Google로 로그인할 수 있는 옵션을 제공합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// signIn.tsx</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">SignIn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> register<span class="token punctuation">,</span> handleSubmit <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFormSignin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>AuthLayout title<span class="token operator">=</span><span class="token string">"로그인"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">handleSubmit</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">signIn</span><span class="token punctuation">(</span><span class="token string">'credentials'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Label title<span class="token operator">=</span><span class="token string">"이메일"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Input <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'email'</span><span class="token punctuation">)</span><span class="token punctuation">}</span> placeholder<span class="token operator">=</span><span class="token string">"이메일"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Label<span class="token operator">></span>
        <span class="token operator">&lt;</span>Label title<span class="token operator">=</span><span class="token string">"비밀번호"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Input <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'password'</span><span class="token punctuation">)</span><span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token string">"password"</span> placeholder<span class="token operator">=</span><span class="token string">"비밀번호"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Label<span class="token operator">></span>
        <span class="token operator">&lt;</span>Button type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>제출<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>

      <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/register"</span><span class="token operator">></span>회원 가입<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
      
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">signIn</span><span class="token punctuation">(</span><span class="token string">'google'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>Google로 로그인<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>AuthLayout<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// register.tsx</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Register</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> register<span class="token punctuation">,</span> handleSubmit <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFormRegister</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>AuthLayout title<span class="token operator">=</span><span class="token string">"회원 가입"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>form
        onSubmit<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">handleSubmit</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> email<span class="token punctuation">,</span> password<span class="token punctuation">,</span> name <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token comment">// 백엔드 회원 가입 호출</span>
          <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchGraphQL</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">document</span><span class="token operator">:</span> CreateUserWithCredentialsDocument<span class="token punctuation">,</span>
            <span class="token literal-property property">variables</span><span class="token operator">:</span> <span class="token punctuation">{</span> email<span class="token punctuation">,</span> password<span class="token punctuation">,</span> name <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>

          <span class="token comment">// 회원 가입 응답 처리</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">toast</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> user<span class="token punctuation">.</span>error <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">toast</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">사용자가 생성되었습니다. 🎉</span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token function">signIn</span><span class="token punctuation">(</span><span class="token string">'credentials'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> email<span class="token punctuation">,</span> password<span class="token punctuation">,</span> <span class="token literal-property property">callbackUrl</span><span class="token operator">:</span> <span class="token string">'/'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">></span>
        <span class="token operator">&lt;</span>Input <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'email'</span><span class="token punctuation">)</span><span class="token punctuation">}</span> placeholder<span class="token operator">=</span><span class="token string">"이메일"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Input <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'password'</span><span class="token punctuation">)</span><span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token string">"password"</span> placeholder<span class="token operator">=</span><span class="token string">"••••••"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Input <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">}</span> placeholder<span class="token operator">=</span><span class="token string">"이름"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Button type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>제출<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
      
      <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/signIn"</span><span class="token operator">></span>이미 계정이 있으신가요<span class="token operator">?</span> 로그인<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">signIn</span><span class="token punctuation">(</span><span class="token string">'google'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>Google로 로그인<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>AuthLayout<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>회원 가입 페이지에서는 다음을 수행합니다.</p>
<ul>
<li>이메일, 비밀번호 및 이름을 입력합니다.</li>
<li>등록을 위해 자체 백엔드와 상호 작용하는 제출 처리.</li>
<li>등록 과정 중 성공 또는 오류에 대한 피드백.</li>
<li>대체 로그인 방법을 위한 링크 및 옵션.</li>
</ul>
<h2 id="이-안내서의-범위-이해" tabindex="-1"><a class="header-anchor" href="#이-안내서의-범위-이해" aria-hidden="true">#</a> 이 안내서의 범위 이해</h2>
<p>NextAuth를 사용하여 Next.js에서 인증을 설정하는 세부 정보에 대해 살펴보기 전에, 이 가이드는 특히 인증 메커니즘의 프론트엔드 구성에 중점을 둔 것을 기억해주시기 바랍니다. 이 안내서에서 다루지 않는 주요 구성 요소는 다음과 같습니다:</p>
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
<li>데이터베이스 스키마: 사용자 자격 증명을 저장하는 백엔드 설정, 특히 자격 증명 제공자에 관한 부분이 다루지 않았습니다. 완벽한 구현에는 암호화된 암호와 사용자 세부 정보를 저장하는 데이터베이스가 필요합니다.</li>
<li>백엔드 등록 라우트: 사용자 등록 및 관리에 필요한 백엔드 라우트가 가이드에 포함되어 있지 않으며, 이는 완전히 기능적인 인증 시스템에 필수적입니다.</li>
<li>완전한 백엔드 통합: 인증의 프론트엔드 측면을 논의하면서도, 이를 백엔드 서비스와 통합하는 것은 이 글의 범위를 벗어납니다.</li>
</ul>
<p>이 안내서는 더 큰 설정의 일부로, Next.js 애플리케이션에서 인증을 통합하는 데 출발점을 제공하고 있습니다. 포괄적인 구현을 위해 추가적인 백엔드 개발과 데이터베이스 설정이 필요합니다.</p>
<p>저장소 링크: https://github.com/karthickthankyou/foundationX</p>
<p>읽어주셔서 감사합니다. 제 작품에 관심을 가져주셔서 감사합니다. 더 많은 완성도 있는 오픈소스 제품을 원하시면 Github나 LinkedIn에서 팔로우해주세요.</p>
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
<p>행복한 코딩하세요. 🎉</p>
</div></template>
