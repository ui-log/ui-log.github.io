<template><div><p><img src="@source/docs/Nextjs/2024-04-05-GoogleAuthenticationMadeEasyStep-by-StepIntegrationwithSupabaseinSSRNextjsReact/img/GoogleAuthenticationMadeEasyStep-by-StepIntegrationwithSupabaseinSSRNextjsReact_0.png" alt="SupabaseNecessity"></p>
<p>수파베이스 문서는 좋지만, 서버 측 렌더링에서 Google 인증을 구현하거나 Next.js 프로젝트 내에서 서버 컴포넌트 내에서 작업할 때 몇 가지 어려움을 겪었습니다. 몇 시간 동안의 연구 끝에 해결책을 찾았고, 여러분도 같은 문제를 겪지 않기를 바랍니다.</p>
<p>여기 계시니까, 이미 Next.js 또는 React 프로젝트를 설정하고 Google 인증에 대한 난제를 극복하는 방법을 알고 싶어하는 것으로 가정하겠습니다. 시작합시다. 프로젝트를 시작하지 않았다면, 여기 Next.js 프로젝트를 설정하는 링크가 있습니다.</p>
<h1 id="next-js-설정하기" tabindex="-1"><a class="header-anchor" href="#next-js-설정하기" aria-hidden="true">#</a> Next.js 설정하기</h1>
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
<h1 id="supabase를-이용한-next-js를-위한-서버-측-인증-설정하기" tabindex="-1"><a class="header-anchor" href="#supabase를-이용한-next-js를-위한-서버-측-인증-설정하기" aria-hidden="true">#</a> Supabase를 이용한 Next.js를 위한 서버 측 인증 설정하기</h1>
<p>먼저, Supabase를 사용하여 Next.js에 대한 서버 측 인증 설정하는 방법에 익숙해져야 합니다:</p>
<p>이제 실행 세부 정보로 들어가 봅시다:</p>
<h2 id="단계-1-콜백-라우트-구성" tabindex="-1"><a class="header-anchor" href="#단계-1-콜백-라우트-구성" aria-hidden="true">#</a> 단계 1: 콜백 라우트 구성</h2>
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
<p>/app/auth/callback/route.ts 파일에 다음 코드를 추가해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>app<span class="token operator">/</span>auth<span class="token operator">/</span>callback<span class="token operator">/</span>route<span class="token punctuation">.</span>ts

<span class="token keyword">import</span> <span class="token punctuation">{</span> cookies <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/headers"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> type CookieOptions<span class="token punctuation">,</span> createServerClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@supabase/ssr"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">GET</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">request</span><span class="token operator">:</span> Request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> searchParams<span class="token punctuation">,</span> origin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> code <span class="token operator">=</span> searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"code"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// "next" 값이 있는 경우 리디렉션 URL로 사용</span>
  <span class="token keyword">const</span> next <span class="token operator">=</span> searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"next"</span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token string">"/"</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>code<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> cookieStore <span class="token operator">=</span> <span class="token function">cookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> supabase <span class="token operator">=</span> <span class="token function">createServerClient</span><span class="token punctuation">(</span>
      process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SUPABASE_URL</span><span class="token operator">!</span><span class="token punctuation">,</span>
      process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_SUPABASE_ANON_KEY</span><span class="token operator">!</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">cookies</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token function">get</span><span class="token punctuation">(</span>name<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> cookieStore<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token operator">?.</span>value<span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token function">set</span><span class="token punctuation">(</span>name<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">options</span><span class="token operator">:</span> CookieOptions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cookieStore<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token operator">...</span>options <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">options</span><span class="token operator">:</span> CookieOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cookieStore<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token punctuation">,</span> <span class="token operator">...</span>options <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> supabase<span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">exchangeCodeForSession</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>origin<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>next<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 사용자를 오류 페이지로 이동시킵니다.</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>origin<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/auth/auth-code-error</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="단계-2-google-인증-동작-구현" tabindex="-1"><a class="header-anchor" href="#단계-2-google-인증-동작-구현" aria-hidden="true">#</a> 단계 2: Google 인증 동작 구현</h2>
<p>action.ts 파일에 다음 코드를 추가하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"use server"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> createClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/utils/supabase/server"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">signInWithGoogle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> supabase <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> supabase<span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">signInWithOAuth</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">provider</span><span class="token operator">:</span> <span class="token string">"google"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 배포된 애플리케이션으로 이동시에 "http://localhost:3000"을 대체해주세요</span>
      <span class="token literal-property property">redirectTo</span><span class="token operator">:</span> <span class="token string">"http://localhost:3000/auth/callback"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token operator">?.</span>url<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">redirect</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="단계-3-로그인-양식-업데이트" tabindex="-1"><a class="header-anchor" href="#단계-3-로그인-양식-업데이트" aria-hidden="true">#</a> 단계 3: 로그인 양식 업데이트</h2>
<p>로그인 양식 컴포넌트에서 Google 로그인을 포함하도록 업데이트하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//참고: 이것은 서버 컴포넌트로 내보낼 수 있는 클라이언트 컴포넌트입니다</span>

<span class="token string">"use client"</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> signInWithGoogle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/app/lib/actions"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useFormStatus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-dom"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FcGoogle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-icons/fc"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> toast <span class="token keyword">from</span> <span class="token string">"react-hot-toast"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span>


<span class="token keyword">function</span> <span class="token function">GoogleSignInButton</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> pending <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFormStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handleSignInGoogle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token function">signInWithGoogle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      toast<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">"Google로 로그인 중"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      toast<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"Google 로그인 중 오류 발생"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div
      formAction<span class="token operator">=</span><span class="token punctuation">{</span>handleSignInGoogle<span class="token punctuation">}</span>
      className<span class="token operator">=</span><span class="token string">"flex cursor-pointer items-center justify-center gap-2"</span>
     <span class="token operator">></span>
      <span class="token operator">&lt;</span>FcGoogle className<span class="token operator">=</span><span class="token string">"text-2xl"</span> <span class="token operator">/</span><span class="token operator">></span>
       <span class="token punctuation">{</span>pending <span class="token operator">?</span> <span class="token string">"로딩 중 ...."</span> <span class="token operator">:</span> <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"text-center text-green-500"</span><span class="token operator">></span>Google로 로그인<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">LoginForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"mt-10 flex flex-col rounded-lg bg-white p-5 shadow-xl w-[30rem] md:p-10"</span><span class="token operator">></span>
      <span class="token comment">//다른 로그인 옵션</span>
      <span class="token operator">...</span>

      <span class="token operator">&lt;</span>GoogleSignInButton <span class="token operator">/</span><span class="token operator">></span>
      
     <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
   
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>축하합니다! 당신은 Next.js와 함께 Supabase 구글 인증을 성공적으로 설정했습니다. 다음에 만날 때까지 즐거운 코딩 하시고 즐거운 삶 되세요!</p>
</div></template>
