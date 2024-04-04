<template><div><p>NEXTAUTH 및 ZOD 소개</p>
<p>NextAuth.js는 Next.js 애플리케이션에 맞게 제작된 견고한 오픈 소스 인증 솔루션으로, Next.js 및 서버리스 환경과 완벽하게 통합됩니다. 이는 이메일 및 무암호 로그인을 포함한 다양한 인증 옵션을 지원하여 개발자에게 다재다능한 선택지를 제공합니다. Clerk와 같은 솔루션에 비해 구성에 조금 더 노력이 필요하지만, 데이터 관리에 대한 탁월한 제어와 비교할 수 없는 유연성을 제공하며 추가 비용이 발생하지 않는 장점이 있습니다.</p>
<p>백엔드 시스템(예: Active Directory, LDAP)과 호환되는 NextAuth.js의 종합적 인증 기능 외에도, JSON Web Tokens 및 데이터베이스 세션과 호환됩니다.</p>
<p>그것의 폼 처리 능력을 향상시키는 주목할만한 기능 중 하나는 TypeScript-first 스키마 선언 및 유효성 검사 라이브러리인 Zod과의 통합입니다. Zod를 react-hook-form과 함께 사용하여, 개발자는 폼 데이터에 강력한 유형 지정 및 유효성 검사를 손쉽게 적용할 수 있습니다. 이 조합은 개발 프로세스를 간소화하고 Zod의 스키마 유효성 검사를 활용하여 오류를 조기에 감지하고 유효한 데이터만 처리되도록 보장함으로써 데이터 무결성을 크게 향상시키고 사용자 경험을 향상시킵니다.</p>
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
<p>NextAuth.js를 현대적인 Full Stack Next.js 앱 구성과 함께 구성하는 방법을 안내해 드릴게요. (앱 라우터 사용, TailwindCSS 및 shadcn으로 구동)</p>
<p>여기에 저장소를 확인해보세요.</p>
<p><img src="@source/docs/Tech/2024-03-29-NextAuthCredentialseasysignuploginwithemailpasswordNextjs14ApprouterandZodresolver/img/NextAuthCredentialseasysignup-loginwithemail-passwordNextjs14ApprouterandZodresolver_0.png" alt="이미지"></p>
<p>소개</p>
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
<p>이미 Next.js 프로젝트를 초기화하고 GitHub에 푸시했다고 가정하고, 다음 단계는 Vercel에서 PostgreSQL 데이터베이스를 직접 설정하는 방법을 안내합니다.</p>
<p>1 — Storage를 클릭한 다음 데이터벤스 생성 버튼을 클릭하세요.</p>
<p><img src="@source/docs/Tech/2024-03-29-NextAuthCredentialseasysignuploginwithemailpasswordNextjs14ApprouterandZodresolver/img/NextAuthCredentialseasysignup-loginwithemail-passwordNextjs14ApprouterandZodresolver_1.png" alt="이미지"></p>
<p>2- 그런 다음 Postgres Serverless SQL을 선택할 수 있습니다.</p>
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
<p><img src="@source/docs/Tech/2024-03-29-NextAuthCredentialseasysignuploginwithemailpasswordNextjs14ApprouterandZodresolver/img/NextAuthCredentialseasysignup-loginwithemail-passwordNextjs14ApprouterandZodresolver_2.png" alt="이미지"></p>
<p>3 — 데이터베이스 이름을 추가하고 만들기를 클릭합니다.</p>
<p><img src="@source/docs/Tech/2024-03-29-NextAuthCredentialseasysignuploginwithemailpasswordNextjs14ApprouterandZodresolver/img/NextAuthCredentialseasysignup-loginwithemail-passwordNextjs14ApprouterandZodresolver_3.png" alt="이미지"></p>
<p>4 — 그리고 새로 만든 데이터베이스를 프로젝트에 연결합니다.</p>
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
<img src="@source/docs/Tech/2024-03-29-NextAuthCredentialseasysignuploginwithemailpasswordNextjs14ApprouterandZodresolver/img/NextAuthCredentialseasysignup-loginwithemail-passwordNextjs14ApprouterandZodresolver_4.png" />
<p>베르첼 CLI를 설치했는지 확인하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm i <span class="token operator">-</span>g vercel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5 - 그런 다음 프로젝트를 환경의 포스트그레스 데이터베이스와 연결하세요(3가지 질문이 나올 것입니다):</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>vercel link
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6 — 이제 Vercel에서 Postgres를 설정하는 동안 만든 모든 환경 변수를 복제하려고 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>vercel env pull <span class="token punctuation">.</span>env<span class="token punctuation">.</span>development<span class="token punctuation">.</span>local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>.env.development.local 파일이 필요한 모든 자격 증명으로 생성되었음을 확인할 수 있을 거에요.🚀</p>
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
<p>화면 샷을 참고해서 &quot;VERCEL=&quot;1&quot;&quot; 를 주석 처리하는 걸 제안드립니다. 우리가 로컬 호스트에서 작업할 때 https를 강제로 사용할 수도 있어서요.</p>
<p><img src="@source/docs/Tech/2024-03-29-NextAuthCredentialseasysignuploginwithemailpasswordNextjs14ApprouterandZodresolver/img/NextAuthCredentialseasysignup-loginwithemail-passwordNextjs14ApprouterandZodresolver_5.png" alt="화면 샷"></p>
<p>필요한 모듈 설정</p>
<p>컴포넌트 빌드 속도를 빠르게 하기 위해 Shadcn을 사용하고 있어요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm i bcrypt next<span class="token operator">-</span>auth
npm i <span class="token operator">--</span>save<span class="token operator">-</span>dev @types<span class="token operator">/</span>bcrypt
npm i @vercel<span class="token operator">/</span>postgres
npx shadcn<span class="token operator">-</span>ui@latest init
npx shadcn<span class="token operator">-</span>ui@latest add form
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>앱 디렉토리 설정과 로직 설정하기</p>
<p>회원가입 및 로그인 페이지를 준비해봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">></span>app
 <span class="token operator">></span>login
   form<span class="token punctuation">.</span>tsx
   page<span class="token punctuation">.</span>tsx
 <span class="token operator">></span>register
   form<span class="token punctuation">.</span>tsx
   page<span class="token punctuation">.</span>tsx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그리고 NextAuth를 위한 API 폴더 구조</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">></span>app
  <span class="token operator">></span>api
    <span class="token operator">></span>auth
      <span class="token operator">></span><span class="token punctuation">[</span><span class="token operator">...</span>nextauth<span class="token punctuation">]</span>
        route<span class="token punctuation">.</span>ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>NEXT AUTH 문서 자세히 살펴보기</p>
<p>Credentials 제공자를 사용하면 사용자 이름 및 암호, 도메인 또는 이중 인증 또는 하드웨어 장치(예: Yubikey U2F/FIDO)와 같은 임의 자격 증명으로 로그인을 처리할 수 있습니다.</p>
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
<p>1 — 문서에 따라 api/auth/[...nextauth] 내의 route.ts를 준비해 보겠습니다. 지금은 권한 부여 로직을 제거했어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// app>api>auth>[...nextauth]>route.ts</span>

<span class="token keyword">import</span> NextAuth <span class="token keyword">from</span> <span class="token string">"next-auth/next"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> CredentialsProvider <span class="token keyword">from</span> <span class="token string">"next-auth/providers/credentials"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> sql <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@vercel/postgres"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> compare <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"bcrypt"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token function">NextAuth</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">session</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">strategy</span><span class="token operator">:</span> <span class="token string">"jwt"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">pages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">signIn</span><span class="token operator">:</span> <span class="token string">"/login"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">providers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">CredentialsProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// The name to display on the sign in form (e.g. 'Sign in with...')</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Credentials"</span><span class="token punctuation">,</span>
      <span class="token comment">// The credentials is used to generate a suitable form on the sign in page.</span>
      <span class="token comment">// You can specify whatever fields you are expecting to be submitted.</span>
      <span class="token comment">// e.g. domain, username, password, 2FA token, etc.</span>
      <span class="token comment">// You can pass any HTML attribute to the &lt;input> tag through the object.</span>
      <span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token keyword">async</span> <span class="token function">authorize</span><span class="token punctuation">(</span><span class="token parameter">credentials<span class="token punctuation">,</span> req</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> handler <span class="token keyword">as</span> <span class="token constant">GET</span><span class="token punctuation">,</span> handler <span class="token keyword">as</span> <span class="token constant">POST</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 — 또한, Zod로 유효성 검사된 양식에서 값이 올바르게 전달되는지 확인하도록 api/auth/register/route.ts를 준비해 보겠습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// app>api>auth>register>route.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">POST</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">request</span><span class="token operator">:</span> Request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> request<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 여기에 유효성 검사를 추가하면 좋을 수 있어요</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span> e <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"success"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>3 — 먼저 등록용 프론트엔드를 준비해 봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getServerSession <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-auth"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> redirect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> FormPage <span class="token keyword">from</span> <span class="token string">"./form"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">RegisterPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> session <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getServerSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>section className<span class="token operator">=</span><span class="token string">"bg-black h-screen flex items-center justify-center"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"w-[600px]"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>FormPage <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4 — 그리고 FormPage 자체 (react-hook-form 및 zod 검증을 사용하여)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> zodResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@hookform/resolvers/zod"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-hook-form"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> z <span class="token keyword">from</span> <span class="token string">"zod"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/components/ui/button"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Form<span class="token punctuation">,</span>
  FormControl<span class="token punctuation">,</span>
  FormDescription<span class="token punctuation">,</span>
  FormField<span class="token punctuation">,</span>
  FormItem<span class="token punctuation">,</span>
  FormLabel<span class="token punctuation">,</span>
  FormMessage<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/components/ui/form"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/components/ui/input"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/components/ui/use-toast"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> FormSchema <span class="token operator">=</span> z<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> z<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"사용자 이름은 적어도 2자여야 합니다."</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> z<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"비밀번호는 적어도 6자여야 합니다."</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

type FormData <span class="token operator">=</span> z<span class="token punctuation">.</span>infer<span class="token operator">&lt;</span><span class="token keyword">typeof</span> FormSchema<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">FormPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> form <span class="token operator">=</span> <span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">resolver</span><span class="token operator">:</span> <span class="token function">zodResolver</span><span class="token punctuation">(</span>FormSchema<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">defaultValues</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onSubmit</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">data</span><span class="token operator">:</span> FormData</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"양식 제출 중"</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">username</span><span class="token operator">:</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> data<span class="token punctuation">;</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"/api/auth/register"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"POST"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">"Content-Type"</span><span class="token operator">:</span> <span class="token string">"application/json"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"네트워크 응답이 올바르지 않습니다"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 여기서 응답 처리</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"등록 성공"</span><span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">toast</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"등록 성공"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token operator">:</span> any<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"등록 실패:"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">toast</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"등록 실패"</span><span class="token punctuation">,</span> <span class="token literal-property property">description</span><span class="token operator">:</span> error<span class="token punctuation">.</span>message <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Form <span class="token punctuation">{</span><span class="token operator">...</span>form<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">"w-2/3 space-y-6"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>form<span class="token punctuation">.</span><span class="token function">handleSubmit</span><span class="token punctuation">(</span>onSubmit<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>FormField
          control<span class="token operator">=</span><span class="token punctuation">{</span>form<span class="token punctuation">.</span>control<span class="token punctuation">}</span>
          name<span class="token operator">=</span><span class="token string">"username"</span>
          render<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> field <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>FormItem<span class="token operator">></span>
              <span class="token operator">&lt;</span>FormLabel<span class="token operator">></span>사용자 이름<span class="token operator">&lt;</span><span class="token operator">/</span>FormLabel<span class="token operator">></span>
              <span class="token operator">&lt;</span>FormControl<span class="token operator">></span>
                <span class="token operator">&lt;</span>Input placeholder<span class="token operator">=</span><span class="token string">"사용자 이름"</span> <span class="token punctuation">{</span><span class="token operator">...</span>field<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>FormControl<span class="token operator">></span>
              <span class="token operator">&lt;</span>FormDescription<span class="token operator">></span>
                이것은 공개적으로 표시되는 이름입니다<span class="token punctuation">.</span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>FormDescription<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>FormItem<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>FormField
          control<span class="token operator">=</span><span class="token punctuation">{</span>form<span class="token punctuation">.</span>control<span class="token punctuation">}</span>
          name<span class="token operator">=</span><span class="token string">"password"</span>
          render<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> field <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>FormItem<span class="token operator">></span>
              <span class="token operator">&lt;</span>FormLabel<span class="token operator">></span>비밀번호<span class="token operator">&lt;</span><span class="token operator">/</span>FormLabel<span class="token operator">></span>
              <span class="token operator">&lt;</span>FormControl<span class="token operator">></span>
                <span class="token operator">&lt;</span>Input placeholder<span class="token operator">=</span><span class="token string">"비밀번호"</span> <span class="token punctuation">{</span><span class="token operator">...</span>field<span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token string">"password"</span> <span class="token operator">/</span><span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>FormControl<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>FormItem<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Button type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>제출<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>FormPage의 상호 작용성 때문에, &quot;use client&quot; 지시문이 위에 있어야 합니다.</p>
<p>onSubmit async 함수에 주목해주세요. 여기서는 폼 데이터 (이메일, 비밀번호)를 /api/auth/register로 전달합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">onSubmit</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">data</span><span class="token operator">:</span> FormData</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"폼 제출 중"</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">username</span><span class="token operator">:</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> data<span class="token punctuation">;</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"/api/auth/register"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"POST"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">"Content-Type"</span><span class="token operator">:</span> <span class="token string">"application/json"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"네트워크 응답이 올바르지 않습니다"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 여기서 응답 처리</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"등록 성공"</span><span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">toast</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"등록 성공"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token operator">:</span> any<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"등록 실패:"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">toast</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"등록 실패"</span><span class="token punctuation">,</span> <span class="token literal-property property">description</span><span class="token operator">:</span> error<span class="token punctuation">.</span>message <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>따라서 이 단계에서 /register 페이지를 방문하면 아래와 같이 표시되어야 합니다:</p>
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
<p><img src="@source/docs/Tech/2024-03-29-NextAuthCredentialseasysignuploginwithemailpasswordNextjs14ApprouterandZodresolver/img/NextAuthCredentialseasysignup-loginwithemail-passwordNextjs14ApprouterandZodresolver_6.png" alt="이미지"></p>
<p>그리고, 콘솔에서 삽입된 데이터를 확인할 수 있어야 합니다:</p>
<p><img src="@source/docs/Tech/2024-03-29-NextAuthCredentialseasysignuploginwithemailpasswordNextjs14ApprouterandZodresolver/img/NextAuthCredentialseasysignup-loginwithemail-passwordNextjs14ApprouterandZodresolver_7.png" alt="이미지"></p>
<p>데이터베이스 준비</p>
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
<p>저희는 이 단계에서 데이터베이스에 사용자 테이블이 필요합니다.</p>
<p><img src="@source/docs/Tech/2024-03-29-NextAuthCredentialseasysignuploginwithemailpasswordNextjs14ApprouterandZodresolver/img/NextAuthCredentialseasysignup-loginwithemail-passwordNextjs14ApprouterandZodresolver_8.png" alt="이미지"></p>
<p>이제 <code v-pre>api/auth/register/route.ts</code> 내에서 비밀번호 해싱을 포함한 등록 로직을 통합해 보겠습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hash <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"bcrypt"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> sql <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@vercel/postgres"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">POST</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">request</span><span class="token operator">:</span> Request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> request<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 여기에 일부 유효성 검사를 추가하는 것이 좋습니다</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> hashedPassword <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">hash</span><span class="token punctuation">(</span>password<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> response <span class="token operator">=</span>
      <span class="token keyword">await</span> sql<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">INSERT INTO users (email, password) VALUES (</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>email<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>hashedPassword<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span> e <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"success"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>이제, 등록을 처리한 후에는 Postgres db에 등록된 고객을 볼 수 있어야합니다:</p>
<p><img src="@source/docs/Tech/2024-03-29-NextAuthCredentialseasysignuploginwithemailpasswordNextjs14ApprouterandZodresolver/img/NextAuthCredentialseasysignup-loginwithemail-passwordNextjs14ApprouterandZodresolver_9.png" alt="image"></p>
<p>큰 성과 — NEXT.JS 프론트엔드에서 POSTGRES DB로의 등록이 예상대로 작동 중입니다 😃</p>
<p>로그인 기능이 이제 가능합니다.</p>
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
<p>로그인 페이지에 대한 나의 코드입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// >app>login>page.tsx</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> getServerSession <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-auth"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> redirect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> LoginForm <span class="token keyword">from</span> <span class="token string">"./form"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">LoginPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> session <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getServerSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span> session <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>session<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>section className<span class="token operator">=</span><span class="token string">"bg-black h-screen flex items-center justify-center"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"w-[600px]"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>LoginForm <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고, LoginForm 컴포넌트:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> signIn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-auth/react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> zodResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@hookform/resolvers/zod"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-hook-form"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> z <span class="token keyword">from</span> <span class="token string">"zod"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/components/ui/button"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Form<span class="token punctuation">,</span>
  FormControl<span class="token punctuation">,</span>
  FormDescription<span class="token punctuation">,</span>
  FormField<span class="token punctuation">,</span>
  FormItem<span class="token punctuation">,</span>
  FormLabel<span class="token punctuation">,</span>
  FormMessage<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/components/ui/form"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/components/ui/input"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/components/ui/use-toast"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> FormSchema <span class="token operator">=</span> z<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">email</span><span class="token operator">:</span> z<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">email</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"유효하지 않은 이메일 주소입니다."</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> z<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"비밀번호는 최소 6자 이상이어야 합니다."</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

type FormData <span class="token operator">=</span> z<span class="token punctuation">.</span>infer<span class="token operator">&lt;</span><span class="token keyword">typeof</span> FormSchema<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">LoginForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> form <span class="token operator">=</span> <span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">resolver</span><span class="token operator">:</span> <span class="token function">zodResolver</span><span class="token punctuation">(</span>FormSchema<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">defaultValues</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onSubmit</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">data</span><span class="token operator">:</span> FormData</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"양식 제출 중"</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> data<span class="token punctuation">;</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token literal-property property">response</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">signIn</span><span class="token punctuation">(</span><span class="token string">"credentials"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        email<span class="token punctuation">,</span>
        password<span class="token punctuation">,</span>
        <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span> response <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>response<span class="token operator">?.</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        router<span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"네트워크 응답이 올바르지 않습니다."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 여기서 응답 처리</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"로그인 성공"</span><span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">toast</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"로그인 성공"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token operator">:</span> any<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"로그인 실패:"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">toast</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"로그인 실패"</span><span class="token punctuation">,</span> <span class="token literal-property property">description</span><span class="token operator">:</span> error<span class="token punctuation">.</span>message <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Form <span class="token punctuation">{</span><span class="token operator">...</span>form<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">"w-2/3 space-y-6"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>form
        onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>form<span class="token punctuation">.</span><span class="token function">handleSubmit</span><span class="token punctuation">(</span>onSubmit<span class="token punctuation">)</span><span class="token punctuation">}</span>
        className<span class="token operator">=</span><span class="token string">"text-white p-4 md:p-16 border-[1.5px] rounded-lg border-gray-300 flex flex-col items-center justify-center gap-y-6"</span>
      <span class="token operator">></span>
        <span class="token operator">&lt;</span>FormField
          control<span class="token operator">=</span><span class="token punctuation">{</span>form<span class="token punctuation">.</span>control<span class="token punctuation">}</span>
          name<span class="token operator">=</span><span class="token string">"email"</span>
          render<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> field <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>FormItem<span class="token operator">></span>
              <span class="token operator">&lt;</span>FormLabel<span class="token operator">></span>이메일 입력<span class="token operator">&lt;</span><span class="token operator">/</span>FormLabel<span class="token operator">></span>
              <span class="token operator">&lt;</span>FormControl<span class="token operator">></span>
                <span class="token operator">&lt;</span>Input
                  className<span class="token operator">=</span><span class="token string">"text-black"</span>
                  placeholder<span class="token operator">=</span><span class="token string">"이메일 입력"</span>
                  <span class="token punctuation">{</span><span class="token operator">...</span>field<span class="token punctuation">}</span>
                  type<span class="token operator">=</span><span class="token string">"text"</span>
                <span class="token operator">/</span><span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>FormControl<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>FormItem<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>FormField
          control<span class="token operator">=</span><span class="token punctuation">{</span>form<span class="token punctuation">.</span>control<span class="token punctuation">}</span>
          name<span class="token operator">=</span><span class="token string">"password"</span>
          render<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> field <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>FormItem<span class="token operator">></span>
              <span class="token operator">&lt;</span>FormLabel<span class="token operator">></span>비밀번호 입력<span class="token operator">&lt;</span><span class="token operator">/</span>FormLabel<span class="token operator">></span>
              <span class="token operator">&lt;</span>FormControl<span class="token operator">></span>
                <span class="token operator">&lt;</span>Input
                  className<span class="token operator">=</span><span class="token string">"text-black"</span>
                  placeholder<span class="token operator">=</span><span class="token string">"비밀번호 입력"</span>
                  <span class="token punctuation">{</span><span class="token operator">...</span>field<span class="token punctuation">}</span>
                  type<span class="token operator">=</span><span class="token string">"password"</span>
                <span class="token operator">/</span><span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>FormControl<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>FormItem<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Button
          type<span class="token operator">=</span><span class="token string">"submit"</span>
          className<span class="token operator">=</span><span class="token string">"hover:scale-110 hover:bg-cyan-700"</span>
          disabled<span class="token operator">=</span><span class="token punctuation">{</span>form<span class="token punctuation">.</span>formState<span class="token punctuation">.</span>isSubmitting<span class="token punctuation">}</span>
        <span class="token operator">></span>
          <span class="token punctuation">{</span>form<span class="token punctuation">.</span>formState<span class="token punctuation">.</span>isSubmitting <span class="token operator">?</span> <span class="token string">"열고 있습니다...."</span> <span class="token operator">:</span> <span class="token string">"안녕하세요!"</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위에 제공된 코드를 콘솔에 정확히 표시하려면 다음과 같이 표시해야 합니다:</p>
<p><img src="@source/docs/Tech/2024-03-29-NextAuthCredentialseasysignuploginwithemailpasswordNextjs14ApprouterandZodresolver/img/NextAuthCredentialseasysignup-loginwithemail-passwordNextjs14ApprouterandZodresolver_10.png" alt="email and password"></p>
<p>이제 권한 부여 논리를 구현할 차례입니다. 이는 데이터베이스에서 사용자를 가져와서 비밀번호의 해시값을 비교해 제공된 자격 증명과 비교하는 것을 포함합니다. 이 튜토리얼에서는 일반 SQL 쿼리를 사용할 것이지만, 이 접근 방식과 관련된 다양한 이점과 단점을 인지하고 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> NextAuth <span class="token keyword">from</span> <span class="token string">"next-auth/next"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> CredentialsProvider <span class="token keyword">from</span> <span class="token string">"next-auth/providers/credentials"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> sql <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@vercel/postgres"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> compare <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"bcrypt"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token function">NextAuth</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">session</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">strategy</span><span class="token operator">:</span> <span class="token string">"jwt"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">pages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">signIn</span><span class="token operator">:</span> <span class="token string">"/login"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">providers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">CredentialsProvider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// The name to display on the sign in form (e.g. 'Sign in with...')</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Credentials"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token keyword">async</span> <span class="token function">authorize</span><span class="token punctuation">(</span><span class="token parameter">credentials<span class="token punctuation">,</span> req</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> sql<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
          SELECT * FROM users WHERE email=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>credentials<span class="token operator">?.</span>email<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
        </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> user <span class="token operator">=</span> response<span class="token punctuation">.</span>rows<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">const</span> passwordCorrect <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">compare</span><span class="token punctuation">(</span>
          credentials<span class="token operator">?.</span>password <span class="token operator">||</span> <span class="token string">""</span><span class="token punctuation">,</span>
          user<span class="token punctuation">.</span>password
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>passwordCorrect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> user<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
            <span class="token literal-property property">email</span><span class="token operator">:</span> user<span class="token punctuation">.</span>email<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"credentials"</span><span class="token punctuation">,</span> credentials<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> handler <span class="token keyword">as</span> <span class="token constant">GET</span><span class="token punctuation">,</span> handler <span class="token keyword">as</span> <span class="token constant">POST</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>또한 .env 파일에 NEXTAUTH_URL과 NEXTAUTH_SECRET을 포함해야 합니다. 터미널에서 openssl rand -base64 32를 실행하여 안전한 NEXTAUTH_SECRET 값을 생성할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">NEXTAUTH_URL</span><span class="token operator">=</span><span class="token string">"http://localhost:3000"</span>
<span class="token constant">NEXTAUTH_SECRET</span><span class="token operator">=</span>password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>제한된 페이지 구성</p>
<p>페이지에 대한 액세스 제어를 강화하려면 Next.js 프로젝트의 루트 디렉토리에 middleware.ts 파일을 생성하십시오.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-auth/middleware"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 원하는 경로를 지정합니다.</span>
  <span class="token literal-property property">matcher</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"/"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 설정으로 귀하의 애플리케이션이 특정 페이지에 대한 액세스를 제한하도록 구성되었습니다. 그리고 이는 [...nextauth].ts 구성에서 정의된 JWT 전략과 리디렉션 정책과 매끄럽게 작동합니다.</p>
<p>코딩 즐기세요 😃</p>
<p>Piotr</p>
</div></template>
