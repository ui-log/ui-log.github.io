<template><div><p>싱글 사인 온(SSO)은 현대 웹 개발에서 중요한 구성 요소로, 사용자 경험을 향상시키는 역할을 합니다. 하나의 자격 증명 집합으로 여러 애플리케이션 간에 원활한 인증을 가능하게 함으로써 사용자에게 많은 혜택을 제공합니다. React를 사용하여 인기있는 OAuth 2.0과 같은 인증 프로토콜을 활용하여 기본 SSO 애플리케이션을 만들어 봅시다.</p>
<h1 id="sso란" tabindex="-1"><a class="header-anchor" href="#sso란" aria-hidden="true">#</a> SSO란?</h1>
<p>싱글 사인 온(SSO)은 사용자가 하나의 로그인 자격 증명으로 여러 애플리케이션이나 서비스에 액세스할 수 있도록 하는 인증 프로세스입니다. 기존의 인증 모델에서는 사용자가 각각의 애플리케이션에 별도로 로그인해야 했고, 각 애플리케이션마다 사용자 이름과 암호를 제공해야 했습니다. SSO는 사용자가 한 번 인증하고 반복 로그인 없이 여러 서비스에 액세스할 수 있도록 하는 방식으로 이 프로세스를 간소화합니다.</p>
<p>SSO의 주요 구성 요소:</p>
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
<li>Identity Provider (IdP): 사용자를 인증하고 신원 정보를 제공하는 주체입니다. IdP는 사용자의 신원을 증명하는 데 사용할 수있는 토큰이나 주장을 발행합니다.</li>
<li>Service Provider (SP): 인증을 위해 IdP에 의존하는 응용 프로그램이나 서비스입니다. SP는 IdP가 제공한 신원 정보를 신뢰하고 해당 신뢰에 기초하여 액세스를 부여합니다.</li>
<li>User: 서비스에 액세스하려는 개인입니다. 사용자는 IdP와 인증을 수행하고, IdP는 그들의 신원을 SP에 대해 보증합니다.</li>
</ul>
<p>SSO를 구현하는 이유:</p>
<ul>
<li>암호 부담 감소</li>
<li>효율적인 액세스</li>
<li>중앙화 된 인증</li>
<li>암호 공유 감소</li>
<li>사용자 관리 간소화</li>
<li>간소화 된 온보딩 및 오프보딩</li>
<li>중앙 집중식 감사</li>
<li>규정 요구 사항</li>
<li>빠른 액세스</li>
<li>다운타임 감소</li>
</ul>
<p>SSO없이</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingaSingleSign-OnSSOApplicationwithReactAStep-by-StepGuide/img/BuildingaSingleSign-OnSSOApplicationwithReactAStep-by-StepGuide_0.png" alt="이미지"></p>
<h1 id="전제-조건" tabindex="-1"><a class="header-anchor" href="#전제-조건" aria-hidden="true">#</a> 전제 조건:</h1>
<p>시작하기 전에 다음 도구 및 기술이 설치되어 있는지 확인하십시오:</p>
<ul>
<li>Node.js 및 npm</li>
<li>React.js</li>
<li>텍스트 편집기(예: Visual Studio Code)</li>
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
<h1 id="react-앱-설정하기" tabindex="-1"><a class="header-anchor" href="#react-앱-설정하기" aria-hidden="true">#</a> React 앱 설정하기</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>react<span class="token operator">-</span>app sso<span class="token operator">-</span>app
cd sso<span class="token operator">-</span>app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="종속성-설치하기" tabindex="-1"><a class="header-anchor" href="#종속성-설치하기" aria-hidden="true">#</a> 종속성 설치하기</h1>
<p>인증 및 라우팅을 처리하기 위한 필요한 종속성을 설치하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install react<span class="token operator">-</span>router<span class="token operator">-</span>dom axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="인증-서비스-생성하기" tabindex="-1"><a class="header-anchor" href="#인증-서비스-생성하기" aria-hidden="true">#</a> 인증 서비스 생성하기:</h1>
<p>인증을 처리할 AuthService.js 파일을 만드세요. 이 서비스는 인증 서버와 상호 작용하고 사용자 세션을 관리할 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// AuthService.js</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">API_URL</span> <span class="token operator">=</span> <span class="token string">'https://your-auth-server.com'</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">AuthService</span> <span class="token punctuation">{</span>
  <span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter">username<span class="token punctuation">,</span> password</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">API_URL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/login</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span> username<span class="token punctuation">,</span> password <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>accessToken<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getCurrentUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">AuthService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p><code v-pre>https://your-auth-server.com</code> 을 귀하의 인증 서버의 실제 URL로 대체하여 주세요.</p>
<h1 id="로그인-컴포넌트-구현" tabindex="-1"><a class="header-anchor" href="#로그인-컴포넌트-구현" aria-hidden="true">#</a> 로그인 컴포넌트 구현</h1>
<p>사용자 로그인을 처리하는 로그인 컴포넌트를 만들어보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Login.js</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> AuthService <span class="token keyword">from</span> <span class="token string">'./AuthService'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Login</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> history <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>username<span class="token punctuation">,</span> setUsername<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>password<span class="token punctuation">,</span> setPassword<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleLogin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    AuthService<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        history<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'로그인 실패:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>로그인<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span>form<span class="token operator">></span>
        <span class="token operator">&lt;</span>label<span class="token operator">></span>사용자명<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
        <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> value<span class="token operator">=</span><span class="token punctuation">{</span>username<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setUsername</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

        <span class="token operator">&lt;</span>label<span class="token operator">></span>비밀번호<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
        <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"password"</span> value<span class="token operator">=</span><span class="token punctuation">{</span>password<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setPassword</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

        <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"button"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleLogin<span class="token punctuation">}</span><span class="token operator">></span>로그인<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Login<span class="token punctuation">;</span>
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
<h1 id="보호-구성-요소-구현하기" tabindex="-1"><a class="header-anchor" href="#보호-구성-요소-구현하기" aria-hidden="true">#</a> 보호 구성 요소 구현하기</h1>
<p>인증이 필요한 보호된 경로를 나타내는 'Protected' 컴포넌트를 생성해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Protected.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> AuthService <span class="token keyword">from</span> <span class="token string">'./AuthService'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Protected</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> user <span class="token operator">=</span> AuthService<span class="token punctuation">.</span><span class="token function">getCurrentUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>접근 거부<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span>이 페이지에 액세스하려면 로그인해주세요<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>환영합니다<span class="token punctuation">,</span> <span class="token punctuation">{</span>user<span class="token punctuation">.</span>username<span class="token punctuation">}</span>님<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>AuthService<span class="token punctuation">.</span>logout<span class="token punctuation">}</span><span class="token operator">></span>로그아웃<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Protected<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="경로-구성하기" tabindex="-1"><a class="header-anchor" href="#경로-구성하기" aria-hidden="true">#</a> 경로 구성하기</h1>
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
<p>App.js 파일을 수정하여 라우팅을 포함하도록 변경하였습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// App.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token keyword">as</span> Router<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> Redirect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Login <span class="token keyword">from</span> <span class="token string">'./Login'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Protected <span class="token keyword">from</span> <span class="token string">'./Protected'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Router<span class="token operator">></span>
      <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">"/login"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Login<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">"/protected"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Protected<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Redirect from<span class="token operator">=</span><span class="token string">"/"</span> to<span class="token operator">=</span><span class="token string">"/login"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 단계를 통해 OAuth 2.0을 사용한 기본 React SSO 애플리케이션을 만들었습니다. 이 응용 프로그램에는 로그인 페이지, 보호된 경로 및 로그아웃 기능이 포함되어 있습니다. 인증 서버의 실제 엔드포인트로 플레이스홀더 URL을 교체해주시기 바랍니다.</p>
<h1 id="sso-작동-방식" tabindex="-1"><a class="header-anchor" href="#sso-작동-방식" aria-hidden="true">#</a> SSO 작동 방식:</h1>
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
<p>인증:</p>
<ul>
<li>사용자는 보호된 리소스 또는 애플리케이션에 액세스를 시도합니다.</li>
<li>IdP는 사용자에게 인증을 요청합니다(예: 사용자 이름과 비밀번호).</li>
<li>성공적으로 인증된 후에, IdP는 사용자의 식별을 나타내는 토큰 또는 주장을 생성합니다.</li>
</ul>
<h2 id="액세스-요청" tabindex="-1"><a class="header-anchor" href="#액세스-요청" aria-hidden="true">#</a> 액세스 요청:</h2>
<ul>
<li>사용자는 서비스나 애플리케이션에 액세스를 시도합니다.</li>
<li>SP는 인증이 필요하다는 것을 인식하고 사용자를 IdP로 리디렉션시킵니다.</li>
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
<h2 id="토큰-교환" tabindex="-1"><a class="header-anchor" href="#토큰-교환" aria-hidden="true">#</a> 토큰 교환:</h2>
<ul>
<li>SP가 사용자 토큰과 함께 IdP에 요청을 보냅니다.</li>
<li>IdP는 토큰을 유효성 검사하고 SP를 위해 새로운 토큰을 발급합니다.</li>
</ul>
<h2 id="접근-승인" tabindex="-1"><a class="header-anchor" href="#접근-승인" aria-hidden="true">#</a> 접근 승인:</h2>
<ul>
<li>SP는 IdP로부터 받은 토큰을 기반으로 사용자에게 접근을 허용합니다.</li>
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
<p>SSO를 이용하여</p>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingaSingleSign-OnSSOApplicationwithReactAStep-by-StepGuide/img/BuildingaSingleSign-OnSSOApplicationwithReactAStep-by-StepGuide_1.png" alt="SSO Application"></p>
<p>이 예제는 토큰 갱신, 역할 기반 접근 제어, 인기 있는 인증 제공업체와 통합 등과 같은 고급 기능에 대한 기초를 제공합니다. 특정 요구 사항과 보안 고려 사항에 따라 더 맞춤화해 보세요.</p>
</div></template>
