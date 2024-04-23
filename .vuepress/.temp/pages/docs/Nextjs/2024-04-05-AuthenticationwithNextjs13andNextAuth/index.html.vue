<template><div><p><img src="@source/docs/Nextjs/2024-04-05-AuthenticationwithNextjs13andNextAuth/img/AuthenticationwithNextjs13andNextAuth_0.png" alt="AuthenticationwithNextjs13andNextAuth_0.png"></p>
<p>Next.js는 강력한 SSR 프레임워크로, 서버 측 렌더링과 정적 사이트 생성을 제공하여 성능을 향상시킵니다. Next Auth와 결합하면 다양한 인증 솔루션을 제공하여 안전한 사용자 인증을 위한 강력한 동반자를 갖게 됩니다.</p>
<p>오늘은 사용자를 외부 API에 인증하는 로그인 흐름을 생성하는 방법을 살펴보겠습니다. 사용자는 이메일 주소와 비밀번호를 사용하여 로그인하고 JWT가 생성됩니다. JWT는 쿠키로 저장되어 모든 다음 요청과 함께 전송됩니다 (말 그대로 다음 요청과 함께). Next Auth를 사용하여 권한 부여 및 인증을 정책으로 적용하는 방법은 여러 가지가 있습니다. 미들웨어 수준에서 적용하거나 Next AuthgetServerSession을 사용하여 서버 구성 요소에서 적용하거나 심지어 Next Auth의 useSession을 사용하여 클라이언트 측에서 적용할 수도 있습니다.</p>
<p>Next Auth는 Next.js 13 앱 라우터 구조와 페이지 라우터를 모두 지원합니다. 이 게시물에서는 앱 라우터 경로를 사용할 것입니다. 응용 프로그램 구조는 다음과 같습니다.</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-AuthenticationwithNextjs13andNextAuth/img/AuthenticationwithNextjs13andNextAuth_1.png" alt="사진"></p>
<p>이 기사에서는 사용자 정의 외부 API를 사용한 비교적 구체적인 사용 사례만 탐구할 것입니다. 하지만 Next Auth는 FusionAuth, Google Sign-in, OAuth 등과 같은 다양한 인증 기술을 지원합니다.</p>
<h2 id="외부-api-구조" tabindex="-1"><a class="header-anchor" href="#외부-api-구조" aria-hidden="true">#</a> 외부 API 구조</h2>
<p>외부 API에는 사용자 이름과 비밀번호 쌍을 요청 본문에서 받아들이는 인증 엔드포인트인 POST /api/auth/login이 있습니다. 인증이 성공하면 외부 API에 대한 요청이 200 상태 응답을 보내고, 그렇지 않으면 4xx 응답을 보냅니다.</p>
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
<p>성공적인 인증 요청의 JSON 응답 본문에는 다음과 같이 사용자 객체와 토큰 객체가 포함됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">"user"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"john.doe@mailinator.com"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"john.doe@mailinator.com"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"fullname"</span><span class="token operator">:</span> <span class="token string">"John Doe"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"role"</span><span class="token operator">:</span> <span class="token string">"SUPER"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"createdAt"</span><span class="token operator">:</span> <span class="token string">"2021-05-30T06:45:19.000Z"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"John Doe"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"token"</span><span class="token operator">:</span> <span class="token string">"ey..."</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>외부 API로의 모든 후속 응답은 Authorization 헤더에 Bearer 토큰으로 토큰을 포함해야 합니다.</p>
<p>이제 충분한 컨텍스트가 마련되었으니, 코드로 넘어갑시다!(드디어!)</p>
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
<h1 id="next-auth-설치하기" tabindex="-1"><a class="header-anchor" href="#next-auth-설치하기" aria-hidden="true">#</a> Next Auth 설치하기</h1>
<p>첫 번째 단계는 Next Auth NPM 패키지를 프로젝트에 추가하는 것입니다. yarn add next-auth 또는 npm install next-auth 를 실행할 수 있습니다.</p>
<p>다음으로는 환경 파일에 비밀 값을 추가해야 합니다. 개발 중에는 비어 둘 수 있지만, 프로덕션 단계에서는 오류가 발생할 수 있습니다. 이 값을 추가하는 방법에 대한 자세한 정보는 공식 Next Auth 문서에서 확인할 수 있습니다.</p>
<h1 id="자격-증명-공급자" tabindex="-1"><a class="header-anchor" href="#자격-증명-공급자" aria-hidden="true">#</a> 자격 증명 공급자</h1>
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
<p>Next Auth를 사용하면 사용자에게 자격 증명 로그인 및 소셜 로그인 등 하나 이상의 로그인 옵션을 제공할 수 있어요. 각 로그인 방법은 해당 제공자를 사용하여 활성화되어요. 우리는 자격 증명 제공자를 사용할 거에요. 이 제공자는 이미 사용자를 인증할 외부 API가 있는 경우 유용해요.</p>
<p>Next Auth를 사용하여 인증 플로우를 구현하는 것은 정말 쉬워요. /app/api/auth/[...nextauth]/route.ts 파일을 생성하세요. [...nextauth]는 /api/auth/*로 시작하는 요청에 대한 일종의 캐치올 루트에요. 내용은 다음과 같아야 해요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> authenticate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/services/authService"</span>
<span class="token keyword">import</span> NextAuth <span class="token keyword">from</span> <span class="token string">"next-auth"</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> AuthOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-auth"</span>
<span class="token keyword">import</span> CredentialsProvider <span class="token keyword">from</span> <span class="token string">"next-auth/providers/credentials"</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">authOptions</span><span class="token operator">:</span> AuthOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">providers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">CredentialsProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Credentials'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"이메일"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"text"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"비밀번호"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"password"</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token keyword">async</span> <span class="token function">authorize</span> <span class="token punctuation">(</span><span class="token parameter">credentials<span class="token punctuation">,</span> req</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> credentials <span class="token operator">!==</span> <span class="token string">"undefined"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">authenticate</span><span class="token punctuation">(</span>credentials<span class="token punctuation">.</span>email<span class="token punctuation">,</span> credentials<span class="token punctuation">.</span>password<span class="token punctuation">)</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> res <span class="token operator">!==</span> <span class="token string">"undefined"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>res<span class="token punctuation">.</span>user<span class="token punctuation">,</span> <span class="token literal-property property">apiToken</span><span class="token operator">:</span> res<span class="token punctuation">.</span>token <span class="token punctuation">}</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">session</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">strategy</span><span class="token operator">:</span> <span class="token string">"jwt"</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token function">NextAuth</span><span class="token punctuation">(</span>authOptions<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> handler <span class="token keyword">as</span> <span class="token constant">GET</span><span class="token punctuation">,</span> handler <span class="token keyword">as</span> <span class="token constant">POST</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>우리는 providers: [] 배열에 필요한 경우 다수의 로그인 방법을 추가할 수 있지만, 여기에는 몇 가지 구성만 한 자격 증명 제공자만 추가했어요. credentials 객체는 로그인 화면에 표시되는 필드를 결정해요. 그리고 네, Next Auth는 <code v-pre>당신의 Next.js 서버</code>/api/auth/signin에서 접근 가능한 간단한 기본 로그인 화면이 내장되어 있어요.</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-AuthenticationwithNextjs13andNextAuth/img/AuthenticationwithNextjs13andNextAuth_2.png" alt="AuthenticationwithNextjs13andNextAuth_2.png"></p>
<p>크리덴셜 객체 내의 키는 입력 필드의 이름으로 사용됩니다. 다른 HTML 속성(ex: label 및 type)도 필드별로 제공할 수 있습니다. 완전히 사용자 정의 페이지를 만들어야 하는 경우에도 걱정하지 마세요. Next Auth 문서에서 설명된대로 자신의 페이지를 정의할 수 있습니다.</p>
<p>다음으로 주목해야 할 점은 authorize(credentials, req) 콜백입니다. 크리덴셜 객체는 제출된 폼의 키-값 매핑을 포함할 것입니다(이 경우 credentials.email 및 credentials.password를 통해 접근 가능합니다). req 객체에는 요청에 대한 세부 정보가 포함되므로 승인 프로세스 중에 IP 주소 또는 사용자 에이전트를 확인할 수도 있습니다. 인증 프로세스가 외부 API에 요청을 보내고 실패했을 경우 undefined를 반환하거나 성공 응답(이전에 제공된 것)을 반환합니다. authorize() 메서드가 null을 반환하면 Next Auth는 인증이 실패했다고 해석하고 로그인 폼에 메시지를 표시합니다.</p>
<p>크리덴셜 프로바이더를 사용하려면 세션 전략을 jwt로 설정해야 합니다. 어쨌든 세션 메커니즘으로 JWT가 필요하므로 모든 것이 잘 작동합니다!</p>
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
<h1 id="다음-auth-미들웨어" tabindex="-1"><a class="header-anchor" href="#다음-auth-미들웨어" aria-hidden="true">#</a> 다음 Auth 미들웨어</h1>
<p>지금 로그인 페이지가 준비되었으니, 우리는 로그인 흐름을 테스트하기 위한 보호된 경로를 만들 것입니다. 우리는 이것을 미들웨어 수준에서 어떻게 강제할 수 있는지 먼저 살펴볼 것입니다.</p>
<p>다음 Auth에 내장된 withAuth 미들웨어가 있습니다. 이를 사용하려면 루트에 middleware.ts라는 새 파일을 만들고 아래 내용을 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> withAuth <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-auth/middleware"</span>

<span class="token comment">// 미들웨어는 모든 경로에 적용되며, 선택을 위해 조건문을 사용하세요</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">withAuth</span><span class="token punctuation">(</span>
  <span class="token keyword">function</span> <span class="token function">middleware</span> <span class="token punctuation">(</span><span class="token parameter">req</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">callbacks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">authorized</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> req<span class="token punctuation">,</span> token <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>
          req<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>pathname<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">'/protected'</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
          token <span class="token operator">===</span> <span class="token keyword">null</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
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
<p>권한 부여된 콜백은 사용자가 인가되었는지를 확인하기 위해 호출됩니다 (당연하지!). 이는 req 및 token 정보를 기반으로 우리만의 규칙을 추가할 수 있음을 의미합니다. 이 사용 사례에서 사용자는 인증되었을 때에만 (/protected로 시작하는 경로에만) 접근할 수 있습니다 (구체적으로는 토큰이 있는 경우). 우리가 false를 반환하면 미들웨어가 로그인 페이지로 리디렉션을 수행할 것이며 (특히 이전에 <code v-pre>your Next.js server</code>/api/auth/signin 경로로 이동할 것입니다. 사용자가 사용자 정의 경로를 정의하지 않은 경우), 나중에 우리는 어떻게 사용자 객체를 외부 API에서 토큰에 첨부하여 역할 기반의 접근 제어를 수행할 수 있는지 알아볼 것입니다!</p>
<h1 id="서버-측-컴포넌트에서-세션에-액세스하기" tabindex="-1"><a class="header-anchor" href="#서버-측-컴포넌트에서-세션에-액세스하기" aria-hidden="true">#</a> 서버 측 컴포넌트에서 세션에 액세스하기</h1>
<p>만약 페이지에 로그인 버튼을 표시하고 싶다면 어떻게 해야할까요? 컴포넌트 수준 (서버 컴포넌트 수준)에서 인증 상태를 얻을 수 있어야 합니다. 다음 코드와 함께 /app/public/page.tsx 페이지를 만들 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getServerSession <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-auth/next"</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> authOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/app/api/auth/[...nextauth]/route"</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Protected</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">req</span><span class="token operator">:</span> NextRequest</span><span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span>any<span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> session <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getServerSession</span><span class="token punctuation">(</span>authOptions<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">'grid grid-cols-2 text-white p-4'</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token punctuation">{</span>
          session <span class="token operator">!==</span> <span class="token keyword">null</span>
            <span class="token operator">?</span> <span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token string">'leading-loose text-[15rem] font-extrabold text-accent'</span><span class="token operator">></span>
                안녕 <span class="token punctuation">{</span>session<span class="token operator">?.</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span>님<span class="token operator">!</span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
            <span class="token operator">:</span> <span class="token operator">&lt;</span>a className<span class="token operator">=</span><span class="token string">'btn btn-primary'</span> href<span class="token operator">=</span><span class="token string">'/api/auth/signin'</span><span class="token operator">></span>로그인<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
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
<p>이 URL은 <code v-pre>/protected</code>로 시작하지 않기 때문에, 이전에 사용한 Next Auth 미들웨어에 영향을 받지 않습니다. getServerSession을 사용하면 현재 세션을 가져올 수 있습니다 (사용자가 로그인하지 않은 경우 null을 반환합니다). 이렇게 하면, 사용자가 로그인하지 않았을 때 '로그인' 버튼을 표시하거나 사용자가 로그인한 경우 사용자의 이름으로 인사말을 표시할 수 있습니다.</p>
<h1 id="클라이언트-측-컴포넌트에서-세션에-액세스하기" tabindex="-1"><a class="header-anchor" href="#클라이언트-측-컴포넌트에서-세션에-액세스하기" aria-hidden="true">#</a> 클라이언트 측 컴포넌트에서 세션에 액세스하기</h1>
<p>Next Auth는 클라이언트 측에서 세션 데이터와 인증 상태를 가져오는 useSession 훅을 제공합니다. 이 훅을 사용하기 전에 컴포넌트를 SessionProvider로 래핑해야 합니다. 내부적으로 React Context를 사용하기 때문입니다.</p>
<p>다음 내용을 갖는 <code v-pre>/app/context/client-provider.tsx</code> 파일을 생성할 수 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'사용자 클라이언트'</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> SessionProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-auth/react"</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Provider</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
  children<span class="token punctuation">,</span>
  session
<span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode
  <span class="token literal-property property">session</span><span class="token operator">:</span> any
<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>SessionProvider session<span class="token operator">=</span><span class="token punctuation">{</span>session<span class="token punctuation">}</span><span class="token operator">></span>
    <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>SessionProvider<span class="token operator">></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>우리는 이제 서버 측 구성 요소(아마도 루트 layout.tsx)에서 이를 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'@/app/globals.css'</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Montserrat <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/font/google'</span>
<span class="token keyword">import</span> Provider <span class="token keyword">from</span> <span class="token string">"@/app/context/client-provider"</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getServerSession <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-auth/next"</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> authOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/app/api/auth/[...nextauth]/route"</span>

<span class="token keyword">const</span> montserrat <span class="token operator">=</span> <span class="token function">Montserrat</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">subsets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'latin'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Create Next App'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'Generated by create next app'</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
  children
<span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode
<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">{</span>
  <span class="token keyword">const</span> session <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getServerSession</span><span class="token punctuation">(</span>authOptions<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>body className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>montserrat<span class="token punctuation">.</span>className<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> bg-primary min-h-screen min-w-screen</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Provider session<span class="token operator">=</span><span class="token punctuation">{</span>session<span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>왜 layout.tsx 안에 SessionProvider 자체를 감쌀 수 없는 걸까요? SessionProvider는 React Context를 사용하기 때문에(&quot;use client&quot;를 사용하여 경계를 정의하지 않았기 때문에) 서버 측 구성 요소로 가져올 수 없습니다. 그러면 왜 클라이언트 구성 요소에서 사용하지 않을까요? SessionProvider에는 오로지 getServerSession을 통해서만 얻을 수 있는 세션 객체이어야 합니다. 이것도 모르는게 아닙니다. getServerSession()을 통해 가져온 세션을 session prop으로 전달해야 합니다. 이런 상황에서 따를 수 있는 패턴은 이렇습니다. 이 경우에서는 서버 측 객체가 전달될 새로운 클라이언트 측 구성 요소(client-provider.tsx)를 만들어서 prop으로 전달합니다. 그 후, 이 새로운 구성 요소를 서버 측인 layout.tsx로 가져와서 getServerSession()에서 얻은 세션을 session prop으로 전달해주세요!</p>
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
<p>이제 모두 처리되었으니 클라이언트 컴포넌트 내에서 useSession을 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'use client'</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useSession <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-auth/react"</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ClientSideRoot</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> any <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> session <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>shown<span class="token punctuation">,</span> setShown<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> clickHandler <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setShown</span><span class="token punctuation">(</span><span class="token operator">!</span>shown<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">'grid grid-cols-2 text-white p-4'</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token string">'leading-loose text-[15rem] font-extrabold text-accent'</span><span class="token operator">></span>
          안녕 <span class="token punctuation">{</span>session<span class="token operator">?.</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span>님<span class="token operator">!</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span>보호된 클라이언트 페이지<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token string">"btn btn-primary"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>clickHandler<span class="token punctuation">}</span><span class="token operator">></span>전환<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token punctuation">{</span>shown
          <span class="token operator">?</span> <span class="token operator">&lt;</span>pre<span class="token operator">></span><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>session<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>pre<span class="token operator">></span>
          <span class="token operator">:</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="세션-토큰-콘텐츠-사용자-정의" tabindex="-1"><a class="header-anchor" href="#세션-토큰-콘텐츠-사용자-정의" aria-hidden="true">#</a> 세션 토큰 콘텐츠 사용자 정의</h1>
<p>기본적으로 세션 토큰에는 기본적인 이름과 이메일이 포함됩니다. 그러나 우리의 경우엔 세션에 지속되어야 하는 다른 데이터(역할 및 외부 API 토큰 같은)가 있습니다. Next Auth는 커스터마이즈 가능하며 세션 콘텐츠를 수정하기 위한 콜백을 제공합니다. /app/api/auth/[...nextauth]/route.ts의 Next Auth 구성을 편집할 수 있습니다.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token comment">// ... </span>
  <span class="token literal-property property">session</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">strategy</span><span class="token operator">:</span> <span class="token string">"jwt"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">callbacks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">session</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> session<span class="token punctuation">,</span> token<span class="token punctuation">,</span> user <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> sanitizedToken <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">p<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 불필요한 속성 제거</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>
          c <span class="token operator">!==</span> <span class="token string">"iat"</span> <span class="token operator">&amp;&amp;</span>
          c <span class="token operator">!==</span> <span class="token string">"exp"</span> <span class="token operator">&amp;&amp;</span>
          c <span class="token operator">!==</span> <span class="token string">"jti"</span> <span class="token operator">&amp;&amp;</span>
          c <span class="token operator">!==</span> <span class="token string">"apiToken"</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>p<span class="token punctuation">,</span> <span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token operator">:</span> token<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> p
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>session<span class="token punctuation">,</span> <span class="token literal-property property">user</span><span class="token operator">:</span> sanitizedToken<span class="token punctuation">,</span> <span class="token literal-property property">apiToken</span><span class="token operator">:</span> token<span class="token punctuation">.</span>apiToken <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">async</span> <span class="token function">jwt</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> token<span class="token punctuation">,</span> user<span class="token punctuation">,</span> account<span class="token punctuation">,</span> profile <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> user <span class="token operator">!==</span> <span class="token string">"undefined"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 사용자가 처음으로 로그인했으므로 사용자 객체가 채워짐</span>
        <span class="token keyword">return</span> user <span class="token keyword">as</span> <span class="token constant">JWT</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> token
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>jwt() 콜백은 사용자가 처음으로 로그인할 때 사용자와 함께 호출됩니다. 사용자 객체는 authorize 함수에서 반환된 객체로 채워집니다. jwt 콜백에서 반환된 객체가 세션 쿠키에 저장됩니다.</p>
<p>session() 콜백은 세션 쿠키 콘텐츠를 token 매개변수로 받습니다. 이 콜백에서 반환하는 내용이 useSession 또는 getServerSession을 호출할 때 제공됩니다.</p>
<p>이렇게 하면 토큰 콘텐츠를 사용자 정의할 수 있습니다. 이제 서버 측과 클라이언트 측에서 모두 apiToken에 액세스할 수 있으므로 양쪽 컨텍스트에서 인증된 fetch 요청을 시작할 유연성이 제공됩니다.</p>
</div></template>
