<template><div><p><img src="@source/docs/Nextjs/2024-04-05-AuthenticationinNextjs14AppRouterusingNextAuthwithCredentialprovider/img/AuthenticationinNextjs14AppRouterusingNextAuthwithCredentialprovider_0.png" alt="이미지"></p>
<p>NextAuth.js가 뭔가요?</p>
<p>NextAuth는 Next.js를 위한 인기 있는 인증 라이브러리입니다. 간단하고 유연하며 안전합니다. 이 튜토리얼에서는 NextAuth를 사용하여 사용자 이름과 비밀번호 인증을 설정하는 방법을 보여드리겠습니다.</p>
<p>의존성 설치</p>
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
<p>시작하기 전에 이 튜토리얼을 위해 몇 가지 종속성을 설치해 봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install next<span class="token operator">-</span>auth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>유저를 인증하기 위한 서버 서비스 생성하기</p>
<p>유저를 인증하는 서버 함수를 생성하겠습니다. 유저를 찾았을 때에는 유저의 상세정보를 반환할 것입니다. 유저를 찾지 못했거나 비밀번호가 일치하지 않을 때에는 null을 반환할 것입니다. 왜 에러 메시지 대신에 일치하지 않는 비밀번호라고 null을 반환하는지 궁금하실 수도 있습니다. 사용자가 비밀번호를 추측하는 것을 방지하기 위해서입니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// /src/server/services/userService.ts</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> userService <span class="token operator">=</span> <span class="token punctuation">{</span>
  authenticate<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">authenticate</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">username</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">password</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>username <span class="token operator">!==</span> <span class="token string">"admin"</span> <span class="token operator">&amp;&amp;</span> password <span class="token operator">!==</span> <span class="token string">"admin"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//(1)</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">//(2)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span> 
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"9001"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Web Admin"</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">"admin@example.com"</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">//(3)</span>

  <span class="token keyword">return</span> user<span class="token punctuation">;</span> <span class="token comment">//(4) </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>설명:</p>
<ul>
<li>이 간단한 튜토리얼을 위해 사용자 이름과 비밀번호를 'admin'으로 하드코딩했습니다. 나중에는 데이터베이스에서 조회하거나 외부 API에서 가져오도록 변경해야 합니다.</li>
<li>사용자가 인증되지 않았을 경우 null을 반환하며, UI에 오류를 표시하고 사용자에게 어떤 정보가 잘못되었는지 알려주지 않고 세부 정보를 확인할 수 있도록 합니다.</li>
<li>사용자가 인증되었다고 가정하고, 사용자 객체를 생성하고 세부 정보를 채워서 반환합니다.</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//src/server/auth.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  getServerSession<span class="token punctuation">,</span>
  type NextAuthOptions<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-auth"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Credentials <span class="token keyword">from</span> <span class="token string">"node_modules/next-auth/providers/credentials"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> userService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./services/userService"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">authOptions</span><span class="token operator">:</span> NextAuthOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">session</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">strategy</span><span class="token operator">:</span> <span class="token string">"jwt"</span><span class="token punctuation">,</span> <span class="token comment">//(1)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">callbacks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">jwt</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> token<span class="token punctuation">,</span> account<span class="token punctuation">,</span> profile <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      <span class="token keyword">if</span><span class="token punctuation">(</span>account <span class="token operator">&amp;&amp;</span> account<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">"credentials"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//(2)</span>
        token<span class="token punctuation">.</span>userId <span class="token operator">=</span> account<span class="token punctuation">.</span>providerAccountId<span class="token punctuation">;</span> <span class="token comment">// this is Id that coming from authorize() callback </span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> token<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">async</span> <span class="token function">session</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> session<span class="token punctuation">,</span> token<span class="token punctuation">,</span> user <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      session<span class="token punctuation">.</span>user<span class="token punctuation">.</span>id <span class="token operator">=</span> token<span class="token punctuation">.</span>userId<span class="token punctuation">;</span> <span class="token comment">//(3)</span>
      <span class="token keyword">return</span> session<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">signIn</span><span class="token operator">:</span> <span class="token string">'/login'</span><span class="token punctuation">,</span> <span class="token comment">//(4) custom signin page path</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">providers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">Credentials</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Credentials"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Username"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"text"</span><span class="token punctuation">,</span> <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">"username"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"Password"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"password"</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token keyword">async</span> <span class="token function">authorize</span><span class="token punctuation">(</span><span class="token parameter">credentials<span class="token punctuation">,</span> req</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">const</span> <span class="token punctuation">{</span> username<span class="token punctuation">,</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> credentials <span class="token keyword">as</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">username</span><span class="token operator">:</span> string
          <span class="token literal-property property">password</span><span class="token operator">:</span> string
         <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> userService<span class="token punctuation">.</span><span class="token function">authenticate</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//(5) </span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getServerAuthSession</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">getServerSession</span><span class="token punctuation">(</span>authOptions<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//(6) </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Credentials 프로바이더는 JSON Web Tokens이 활성화된 상태에서만 사용할 수 있습니다.</li>
<li>여기서는 사용자 Id를 User 객체에 저장하고 싶습니다. Id는 &quot;credentials&quot; 타입일 때 authorize 콜백에서 제공되며 account 매개변수에 사용 가능합니다. 이 섹션에서는 토큰에 데이터베이스나 외부 API에서 추가 정보를 추가할 수도 있습니다.</li>
<li>jwt 콜백에서 토큰이 생성된 후, userId를 user.id로 전달하여 UI에서 사용할 수 있도록 설정해야 합니다. User 타입은 name, email 및 image만 포함되어 있으므로 나중에 User 객체에 id를 추가하도록 타입 정의를 만들 것입니다.</li>
<li>우리는 사용자 정의 로그인 페이지도 생성했으므로 해당 페이지가 위치한 경로를 정의해야 합니다.</li>
<li>여기서는 이전에 생성한 서비스를 사용하여 사용자 이름과 비밀번호를 인증합니다.</li>
<li>세션을 가져올 때 authOptions를 다시 가져오지 않아도 되도록 하는 도우미 기능을 만들었습니다.</li>
</ul>
<p>타입 생성</p>
<p>Typescript 인텔리센스가 User 타입에 id 속성이 있다는 것을 알 수 있도록 next-auth 모듈 변경을 추가하십시오.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//src/types/next-auth.d.ts</span>

<span class="token keyword">import</span> NextAuth<span class="token punctuation">,</span> <span class="token punctuation">{</span> DefaultSession<span class="token punctuation">,</span> DefaultJWT <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-auth"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">JWT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-auth/jwt"</span><span class="token punctuation">;</span>

declare module <span class="token string">"next-auth"</span> <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">Session</span> <span class="token keyword">extends</span> <span class="token class-name">DefaultSession</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token operator">&amp;</span> DefaultSession<span class="token punctuation">[</span><span class="token string">"user"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

declare module <span class="token string">"next-auth/jwt"</span> <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">JWT</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">userId</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// /src/types/user.ts</span>

<span class="token keyword">export</span> type User <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  name<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  email<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>NextAuth.js api 핸들러를 만들기</p>
<p>NextAuth.js가 모든 요청을 /api/auth/*로 처리할 수 있도록 동적 라우트 핸들러를 만듭니다</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// /src/app/api/auth/[...nextauth]/route.ts</span>

<span class="token keyword">import</span> NextAuth <span class="token keyword">from</span> <span class="token string">"next-auth"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> authOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/server/auth"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token function">NextAuth</span><span class="token punctuation">(</span>authOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> handler <span class="token keyword">as</span> <span class="token constant">GET</span><span class="token punctuation">,</span> handler <span class="token keyword">as</span> <span class="token constant">POST</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>페이지 생성하기</p>
<p>이제 루트 페이지에 현재 사용자 세션 및 로그인 및 로그아웃 버튼을 표시하는 간단한 페이지를 만들 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//src/app/page.tsx</span>

<span class="token keyword">import</span> UserInfo <span class="token keyword">from</span> <span class="token string">"@/components/UserInfo"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getServerAuthSession <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/server/auth"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">HomePage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> authSession <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getServerAuthSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//(1) </span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>  
  <span class="token operator">&lt;</span>main className<span class="token operator">=</span><span class="token string">"flex items-center justify-center h-screen"</span><span class="token operator">></span>
    <span class="token punctuation">{</span>authSession<span class="token operator">?.</span>user <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>UserInfo user<span class="token operator">=</span><span class="token punctuation">{</span>authSession<span class="token operator">?.</span>user<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token comment">//(2) </span>
    <span class="token punctuation">{</span><span class="token operator">!</span>authSession<span class="token operator">?.</span>user <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span> <span class="token comment">//(3) </span>
      <span class="token operator">&lt;</span>Link className<span class="token operator">=</span><span class="token string">"font-medium mt-2 text-blue-600 hover:underline"</span> href<span class="token operator">=</span><span class="token string">"/login"</span><span class="token operator">></span>
        로그인
      <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<li>기본적으로 이는 서버 구성 요소이기 때문에 이 서버 함수를 직접 사용할 수 있습니다. 이 함수는 서버에서 세션 객체를 가져오는 데 사용됩니다.</li>
<li>세션의 사용자 객체가 있는 경우 UserInfo 컴포넌트를 렌더링합니다.</li>
<li>세션에 사용자 객체가 없는 경우 (로그인되지 않은 경우) 로그인 페이지로의 링크를 렌더링합니다.</li>
</ul>
<p>그 다음으로 클라이언트용 UserInfo 컴포넌트를 만들어 사용자 정보와 로그아웃 버튼을 렌더링합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// /src/components/UserInfo.tsx</span>

<span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> User <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/types/user"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> signOut <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-auth/react"</span><span class="token punctuation">;</span>

type UserInfoProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">user</span><span class="token operator">:</span> User<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">UserInfo</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> user <span class="token punctuation">}</span><span class="token operator">:</span> UserInfoProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleLogout</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">signOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span><span class="token punctuation">(</span>
   <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"rounded-lg border shadow-lg p-10"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token literal-property property">Id</span> <span class="token operator">:</span> <span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token literal-property property">Name</span> <span class="token operator">:</span> <span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token literal-property property">Email</span> <span class="token operator">:</span> <span class="token punctuation">{</span>user<span class="token punctuation">.</span>email<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token string">"font-medium mt-2 text-blue-600 hover:underline"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleLogout<span class="token punctuation">}</span><span class="token operator">></span>
        Log out
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>마지막으로 로그인 페이지를 생성합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// /src/app/login/page.tsx  </span>

<span class="token string">"use client"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> signIn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-auth/react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ChangeEvent<span class="token punctuation">,</span> FormEvent<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

type LoginInput <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

type PageProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">searchParams</span><span class="token operator">:</span> <span class="token punctuation">{</span> error<span class="token operator">?</span><span class="token operator">:</span> string <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">LoginPage</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>searchParams<span class="token punctuation">}</span><span class="token operator">:</span> PageProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>inputs<span class="token punctuation">,</span> setInputs<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>LoginInput<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">""</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> ChangeEvent<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">></span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> name <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token function">setInputs</span><span class="token punctuation">(</span><span class="token parameter">values</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span>values<span class="token punctuation">,</span> <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">:</span> value<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span>FormEvent</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">signIn</span><span class="token punctuation">(</span><span class="token string">"credentials"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> 
      <span class="token literal-property property">username</span><span class="token operator">:</span> inputs<span class="token punctuation">.</span>username<span class="token punctuation">,</span> 
      <span class="token literal-property property">password</span><span class="token operator">:</span> inputs<span class="token punctuation">.</span>password<span class="token punctuation">,</span> 
      <span class="token literal-property property">callbackUrl</span><span class="token operator">:</span> <span class="token string">'/'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"mt-10 sm:mx-auto sm:w-full sm:max-w-sm"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>form className<span class="token operator">=</span><span class="token string">"space-y-6"</span> onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>
              <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"username"</span> className<span class="token operator">=</span><span class="token string">"block text-sm font-medium leading-6 text-gray-900"</span><span class="token operator">></span>
                Username
              <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
              <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"mt-2"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>input
                  id<span class="token operator">=</span><span class="token string">"username"</span>
                  name<span class="token operator">=</span><span class="token string">"username"</span>
                  type<span class="token operator">=</span><span class="token string">"text"</span>
                  autoComplete<span class="token operator">=</span><span class="token string">"off"</span>
                  required
                  value<span class="token operator">=</span><span class="token punctuation">{</span>inputs<span class="token punctuation">.</span>username <span class="token operator">||</span> <span class="token string">""</span><span class="token punctuation">}</span>
                  onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span>
                  className<span class="token operator">=</span><span class="token string">"block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"</span>
                <span class="token operator">/</span><span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

            <span class="token operator">&lt;</span>div<span class="token operator">></span>
              <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex items-center justify-between"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"password"</span> className<span class="token operator">=</span><span class="token string">"block text-sm font-medium leading-6 text-gray-900"</span><span class="token operator">></span>
                  Password
                <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
              <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"mt-2"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>input
                  id<span class="token operator">=</span><span class="token string">"password"</span>
                  name<span class="token operator">=</span><span class="token string">"password"</span>
                  type<span class="token operator">=</span><span class="token string">"password"</span>
                  autoComplete<span class="token operator">=</span><span class="token string">"off"</span>
                  required
                  value<span class="token operator">=</span><span class="token punctuation">{</span>inputs<span class="token punctuation">.</span>password <span class="token operator">||</span> <span class="token string">""</span><span class="token punctuation">}</span>
                  onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span>
                  className<span class="token operator">=</span><span class="token string">"block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"</span>
                <span class="token operator">/</span><span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

            <span class="token operator">&lt;</span>div<span class="token operator">></span>
              <span class="token operator">&lt;</span>button
                type<span class="token operator">=</span><span class="token string">"submit"</span>
                className<span class="token operator">=</span><span class="token string">"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"</span>
              <span class="token operator">></span>
                Sign <span class="token keyword">in</span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token punctuation">{</span> searchParams<span class="token punctuation">.</span>error <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
              <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"text-red-600 text-center capitalize"</span><span class="token operator">></span>
                Login failed<span class="token punctuation">.</span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
            <span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>

        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그것이 모두입니다. 이제 Next.js 14 (앱 라우터)에서 NextAuth.js 라이브러리를 사용하여 자격 증명 제공자를 사용한 인증을 만들었습니다. 도움이 되었으면 좋겠네요. 감사합니다.</p>
<p>소스 코드를 확인하세요.</p>
<p>참고 자료 :
https://github.com/nextauthjs/next-auth-example/tree/main
https://create.t3.gg/en/usage/next-auth
https://next-auth.js.org/configuration/providers/credentials
https://orm.drizzle.team/kit-docs/overview</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div></div></template>
