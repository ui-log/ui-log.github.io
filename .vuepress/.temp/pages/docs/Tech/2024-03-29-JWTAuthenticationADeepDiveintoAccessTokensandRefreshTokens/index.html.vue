<template><div><img src="@source/docs/Tech/2024-03-29-JWTAuthenticationADeepDiveintoAccessTokensandRefreshTokens/img/JWTAuthenticationADeepDiveintoAccessTokensandRefreshTokens_0.png" />
<p>안녕하세요, 독자 여러분,</p>
<p>저희가 연결된 세상에서는 웹 애플리케이션 보안이 매우 중요합니다. 이 중요성은 세션 토큰을 어떻게 관리하고 새로 고칠지에 근본적으로 달려 있습니다. 이 글에서는 JWT 인증, Access Tokens와 Refresh Tokens 그리고 토큰 회전의 세부 사항에 대해 깊숙히 파헤쳐보겠습니다. 여정의 끝에는 백엔드(NestJS)와 프론트엔드(Angular) 구현에 모두 손을 대게 될 것입니다.</p>
<h1 id="refresh-tokens의-필수성" tabindex="-1"><a class="header-anchor" href="#refresh-tokens의-필수성" aria-hidden="true">#</a> Refresh Tokens의 필수성</h1>
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
<p>액세스 토큰은 짧은 수명을 가지며 사용자에게 응용 프로그램의 특정 부분에 대한 열쇠를 제공합니다. 그러나 이러한 키가 분실되거나, 더 나쁜 경우에는 도난당할 경우 어떻게 될까요? 짧은 수명이지만 피해는 오래 남을 수 있습니다. 이때 리프레시 토큰이 빛을 발합니다. 이들은 액세스 토큰을 갱신하는 메커니즘을 제공하여 사용자 세션을 안전하고 원활하게 유지합니다.</p>
<h1 id="액세스-및-리프레시-토큰-해독" tabindex="-1"><a class="header-anchor" href="#액세스-및-리프레시-토큰-해독" aria-hidden="true">#</a> 액세스 및 리프레시 토큰 해독</h1>
<ul>
<li>액세스 토큰: 일반적으로 15분에서 1시간까지의 짧은 수명을 가진 토큰으로, 특정 사용자 작업을 허용합니다. 일시적인 배지로 생각해보세요.</li>
<li>리프레시 토큰: 더 오래 지속되며, 주요 역할은 액세스 토큰 만료 후 액세스 토큰을 재발급하여 사용자의 접근을 끊임없이 보장합니다.</li>
</ul>
<p>액세스 토큰만 사용하면 안전망 없이 줄타기를 하고 있는 것과 마찬가지입니다. 토큰이 짧게라도 손상된다면 그 잠재적인 낙폭은 과하게 측정해서는 안 됩니다.</p>
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
<h1 id="nestjs와-함께-하는-백엔드-매직" tabindex="-1"><a class="header-anchor" href="#nestjs와-함께-하는-백엔드-매직" aria-hidden="true">#</a> NestJS와 함께 하는 백엔드 매직</h1>
<p>네스트지와 함께 백엔드 모험에 떠나봅시다:</p>
<h2 id="_1-jwt-모듈-설정" tabindex="-1"><a class="header-anchor" href="#_1-jwt-모듈-설정" aria-hidden="true">#</a> 1. JWT 모듈 설정:</h2>
<p>당신의 앱 모듈이나 별도의 인증 모듈에서:</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> JwtModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@nestjs/jwt'</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Module</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  imports<span class="token operator">:</span> <span class="token punctuation">[</span>
    JwtModule<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      secret<span class="token operator">:</span> <span class="token string">'yourSecretKey'</span><span class="token punctuation">,</span>  <span class="token comment">// 참고: 실제 응용 프로그램에서는 더 안전하고 환경별로 설정된 값을 사용하세요</span>
      signOptions<span class="token operator">:</span> <span class="token punctuation">{</span> expiresIn<span class="token operator">:</span> <span class="token string">'15m'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 유효 기간이 짧음</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AuthModule</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="b-토큰-생성" tabindex="-1"><a class="header-anchor" href="#b-토큰-생성" aria-hidden="true">#</a> b. 토큰 생성:</h2>
<p>JWT를 사용하여 간편한 토큰 생성 및 사용자 유효성 검사.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// authService.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> JwtService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@nestjs/jwt'</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Injectable</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AuthService</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> jwtService<span class="token operator">:</span> JwtService<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">createAccessToken</span><span class="token punctuation">(</span>userId<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>jwtService<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id<span class="token operator">:</span> userId <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> expiresIn<span class="token operator">:</span> <span class="token string">'15m'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">createRefreshToken</span><span class="token punctuation">(</span>userId<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> tokenId <span class="token operator">=</span> <span class="token function">uuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>jwtService<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id<span class="token operator">:</span> userId<span class="token punctuation">,</span> tokenId<span class="token operator">:</span> tokenId <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> expiresIn<span class="token operator">:</span> <span class="token string">'7d'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">validateUser</span><span class="token punctuation">(</span>payload<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token comment">// 사용자가 데이터베이스에 존재하는지 등을 확인</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> payload<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
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
<h2 id="c-로그인-및-새로고침-엔드포인트" tabindex="-1"><a class="header-anchor" href="#c-로그인-및-새로고침-엔드포인트" aria-hidden="true">#</a> c. 로그인 및 새로고침 엔드포인트:</h2>
<p>로그인 엔드포인트는 액세스 및 새로고침 토큰을 생성하며, 새로고침 엔드포인트는 이를 갱신하여 지속적인 안전한 액세스를 보장합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">Controller</span><span class="token punctuation">(</span><span class="token string">'auth'</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AuthController</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">private</span> readonly authService<span class="token operator">:</span> AuthService</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  @<span class="token function">Post</span><span class="token punctuation">(</span><span class="token string">'login'</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter">@<span class="token function">Res</span><span class="token punctuation">(</span><span class="token punctuation">)</span> res<span class="token operator">:</span> Response<span class="token punctuation">,</span> @<span class="token function">Body</span><span class="token punctuation">(</span><span class="token punctuation">)</span> body<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">userId</span><span class="token operator">:</span> string <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> accessToken <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>authService<span class="token punctuation">.</span><span class="token function">createAccessToken</span><span class="token punctuation">(</span>body<span class="token punctuation">.</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> refreshToken <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>authService<span class="token punctuation">.</span><span class="token function">createRefreshToken</span><span class="token punctuation">(</span>body<span class="token punctuation">.</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    res<span class="token punctuation">.</span><span class="token function">cookie</span><span class="token punctuation">(</span><span class="token string">'refreshToken'</span><span class="token punctuation">,</span> refreshToken<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">httpOnly</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">secure</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">sameSite</span><span class="token operator">:</span> <span class="token string">'strict'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> accessToken <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  @<span class="token function">Post</span><span class="token punctuation">(</span><span class="token string">'refresh'</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">refresh</span><span class="token punctuation">(</span><span class="token parameter">@<span class="token function">Res</span><span class="token punctuation">(</span><span class="token punctuation">)</span> res<span class="token operator">:</span> Response<span class="token punctuation">,</span> @<span class="token function">Req</span><span class="token punctuation">(</span><span class="token punctuation">)</span> req<span class="token operator">:</span> Request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> oldRefreshToken <span class="token operator">=</span> req<span class="token punctuation">.</span>cookies<span class="token punctuation">[</span><span class="token string">'refreshToken'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 이전 새로고침 토큰을 유효성 검사하고, 잘못된 경우 오류 발생.</span>
    
    <span class="token keyword">const</span> userId <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>authService<span class="token punctuation">.</span><span class="token function">decodeRefreshToken</span><span class="token punctuation">(</span>oldRefreshToken<span class="token punctuation">)</span><span class="token punctuation">.</span>id<span class="token punctuation">;</span>
    <span class="token keyword">const</span> newAccessToken <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>authService<span class="token punctuation">.</span><span class="token function">createAccessToken</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> newRefreshToken <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>authService<span class="token punctuation">.</span><span class="token function">createRefreshToken</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    res<span class="token punctuation">.</span><span class="token function">cookie</span><span class="token punctuation">(</span><span class="token string">'refreshToken'</span><span class="token punctuation">,</span> newRefreshToken<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">httpOnly</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">secure</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">sameSite</span><span class="token operator">:</span> <span class="token string">'strict'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">accessToken</span><span class="token operator">:</span> newAccessToken <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="angular-이를-어떻게-구현할까요" tabindex="-1"><a class="header-anchor" href="#angular-이를-어떻게-구현할까요" aria-hidden="true">#</a> Angular: 이를 어떻게 구현할까요?</h1>
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
<p>앵귤러, 리액트, 뷰 — 어떤 프론트엔드 프레임워크를 사용하든 핵심 개념은 일관적입니다. 이 예시에서는 앵귤러를 사용해보겠습니다:</p>
<h2 id="a-액세스-토큰-저장하기" tabindex="-1"><a class="header-anchor" href="#a-액세스-토큰-저장하기" aria-hidden="true">#</a> a. 액세스 토큰 저장하기:</h2>
<p>메모리에 보관하여 최적의 보안 유지</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// authService.ts</span>
<span class="token keyword">private</span> <span class="token literal-property property">accessToken</span><span class="token operator">:</span> string<span class="token punctuation">;</span>

<span class="token function">setAccessToken</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">token</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>accessToken <span class="token operator">=</span> token<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">getAccessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>accessToken<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="b-인터셉터에서-토큰-만료-및-갱신-처리" tabindex="-1"><a class="header-anchor" href="#b-인터셉터에서-토큰-만료-및-갱신-처리" aria-hidden="true">#</a> b. 인터셉터에서 토큰 만료 및 갱신 처리:</h2>
<p>인터셉터를 사용한 인증 갱신 관리</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// token.interceptor.ts</span>
<span class="token function">intercept</span><span class="token punctuation">(</span>req<span class="token operator">:</span> HttpRequest<span class="token operator">&lt;</span>any<span class="token operator">></span><span class="token punctuation">,</span> <span class="token literal-property property">next</span><span class="token operator">:</span> HttpHandler<span class="token punctuation">)</span><span class="token operator">:</span> Observable<span class="token operator">&lt;</span>HttpEvent<span class="token operator">&lt;</span>any<span class="token operator">>></span> <span class="token punctuation">{</span>
  <span class="token comment">// 요청 헤더에 액세스 토큰을 추가</span>
  <span class="token keyword">const</span> authorizedReq <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">headers</span><span class="token operator">:</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'Authorization'</span><span class="token punctuation">,</span> <span class="token string">'Bearer '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>authService<span class="token punctuation">.</span><span class="token function">getAccessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">return</span> next<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>authorizedReq<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>
    <span class="token function">catchError</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">error</span><span class="token operator">:</span> HttpErrorResponse</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">401</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 액세스 토큰이 만료되었으므로 갱신을 시도</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>authService<span class="token punctuation">.</span><span class="token function">refreshToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>
          <span class="token function">switchMap</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">newToken</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">// 인-메모리 저장소에 새 토큰 설정</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>authService<span class="token punctuation">.</span><span class="token function">setAccessToken</span><span class="token punctuation">(</span>newToken<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 재시도에 새 토큰 사용</span>
            <span class="token keyword">const</span> retriedReq <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">headers</span><span class="token operator">:</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'Authorization'</span><span class="token punctuation">,</span> <span class="token string">'Bearer '</span> <span class="token operator">+</span> newToken<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> next<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>retriedReq<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token function">throwError</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="토큰-로테이션-보안" tabindex="-1"><a class="header-anchor" href="#토큰-로테이션-보안" aria-hidden="true">#</a> 토큰 로테이션: 보안</h1>
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
<p>보안은 Access 토큰과 Refresh 토큰을 사용하여 원래 강력하지만, Refresh 토큰의 회전으로 추가적인 방어층이 더해집니다. 이 개념은 각 Refresh 토큰의 사용 시마다 새로운 것으로 대체되는 것을 규정합니다. 이는 Refresh 토큰이 노출되더라도 오용 기회가 심각하게 제한된다는 것을 보장합니다. 이러한 고급 개념을 자세히 살펴보겠습니다.</p>
<h2 id="왜-refresh-토큰을-회전시키나요" tabindex="-1"><a class="header-anchor" href="#왜-refresh-토큰을-회전시키나요" aria-hidden="true">#</a> 왜 Refresh 토큰을 회전시키나요?</h2>
<p>코드에 들어가기 전에, 이 전략의 &quot;왜&quot;에 대해 확인해 봅시다. 공격자가 Refresh 토큰을 소유하고 있는 경우 시스템이 회전을 구현하지 않으면, 그들은 Access 토큰을 계속 갱신하여 무단 액세스를 유지할 수 있습니다. 그러나 회전이 이루어지면, 합법적 사용자(또는 공격자)가 Refresh 토큰을 사용한 후에는 무효화되어 세션이 재설정됩니다. 이는 합법적 사용자가 예기치 않게 로그아웃되는 것을 발견하면 시스템에 잠재적인 오용을 알릴 수 있습니다.</p>
<h1 id="nestjs로-백엔드-회전-전략" tabindex="-1"><a class="header-anchor" href="#nestjs로-백엔드-회전-전략" aria-hidden="true">#</a> NestJS로 백엔드 회전 전략:</h1>
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
<h2 id="a-토큰-회전을-위한-authservice-확장" tabindex="-1"><a class="header-anchor" href="#a-토큰-회전을-위한-authservice-확장" aria-hidden="true">#</a> a. 토큰 회전을 위한 AuthService 확장:</h2>
<p>최신화된 AuthService에는 갱신 토큰을 안전하게 해독하고 회전시키는 기능이 추가되어 토큰 보안이 강화되었습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// authService.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> JwtService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@nestjs/jwt'</span><span class="token punctuation">;</span>

@<span class="token function">Injectable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AuthService</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... 이전 코드 ...</span>

  <span class="token function">decodeRefreshToken</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">token</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>jwtService<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnauthorizedException</span><span class="token punctuation">(</span><span class="token string">'유효하지 않은 갱신 토큰'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">replaceRefreshToken</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">userId</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">oldTokenId</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 예를 들어, 사용된 토큰 ID를 블랙리스트에 저장하여 이전 토큰을 무효화합니다.</span>
    <span class="token comment">// 여기서는 또한 이 사용자에 대해 이전에 발급된 토큰 목록을 확인할 수도 있습니다.</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createRefreshToken</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 앞서 설명한대로 새 토큰 생성</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="b-새로운-refresh-endpoint-업데이트" tabindex="-1"><a class="header-anchor" href="#b-새로운-refresh-endpoint-업데이트" aria-hidden="true">#</a> b. 새로운 Refresh Endpoint 업데이트:</h2>
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
<p>새로운 새로고침 메커니즘은 이제 이전 토큰을 처리하고 유효성을 검사한 후 교체해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// authController.ts</span>

@<span class="token function">Post</span><span class="token punctuation">(</span><span class="token string">'refresh'</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token function">rotateRefreshToken</span><span class="token punctuation">(</span><span class="token parameter">@<span class="token function">Res</span><span class="token punctuation">(</span><span class="token punctuation">)</span> res<span class="token operator">:</span> Response<span class="token punctuation">,</span> @<span class="token function">Req</span><span class="token punctuation">(</span><span class="token punctuation">)</span> req<span class="token operator">:</span> Request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> oldRefreshToken <span class="token operator">=</span> req<span class="token punctuation">.</span>cookies<span class="token punctuation">[</span><span class="token string">'refreshToken'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> decodedToken <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>authService<span class="token punctuation">.</span><span class="token function">decodeRefreshToken</span><span class="token punctuation">(</span>oldRefreshToken<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 이전 토큰 무효화 및 새 토큰 생성</span>
  <span class="token keyword">const</span> newRefreshToken <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>authService<span class="token punctuation">.</span><span class="token function">replaceRefreshToken</span><span class="token punctuation">(</span>decodedToken<span class="token punctuation">.</span>id<span class="token punctuation">,</span> decodedToken<span class="token punctuation">.</span>tokenId<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> newAccessToken <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>authService<span class="token punctuation">.</span><span class="token function">createAccessToken</span><span class="token punctuation">(</span>decodedToken<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  res<span class="token punctuation">.</span><span class="token function">cookie</span><span class="token punctuation">(</span><span class="token string">'refreshToken'</span><span class="token punctuation">,</span> newRefreshToken<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">httpOnly</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">secure</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sameSite</span><span class="token operator">:</span> <span class="token string">'strict'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">accessToken</span><span class="token operator">:</span> newAccessToken <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="c-토큰-새로고침" tabindex="-1"><a class="header-anchor" href="#c-토큰-새로고침" aria-hidden="true">#</a> c. 토큰 새로고침:</h2>
<p>Angular 서비스에서 토큰을 새로고침할 때, 메모리 내의 액세스 토큰도 업데이트합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// authService.ts</span>

<span class="token function">refreshToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Observable<span class="token operator">&lt;</span>string<span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>httpClient<span class="token punctuation">.</span>post<span class="token operator">&lt;</span><span class="token punctuation">{</span> <span class="token literal-property property">accessToken</span><span class="token operator">:</span> string <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'/auth/refresh'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>
    <span class="token function">tap</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setAccessToken</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>accessToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span>accessToken<span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="d-인터셉터-업그레이드" tabindex="-1"><a class="header-anchor" href="#d-인터셉터-업그레이드" aria-hidden="true">#</a> d. 인터셉터 업그레이드:</h2>
<p>저희 인터셉터는 계속해서 새로운 엑세스 토큰을 새로 고침하고 요청 다시 시도에 추가하는 프로세스가 그대로 유지됩니다.</p>
<h1 id="마무리-🎁" tabindex="-1"><a class="header-anchor" href="#마무리-🎁" aria-hidden="true">#</a> 마무리 🎁</h1>
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
<p>웹 보안에서 액세스 토큰과 리프레시 토큰은 기본적인 요소들입니다. 액세스 토큰만 사용하면 애플리케이션에 취약점이 발생할 수 있습니다. 리프레시 토큰을 활용하면, 특히 회전 메커니즘과 결합하여 우리의 방어를 강화하고 보안을 강화할 수 있습니다.</p>
<p>디지털 세계는 지속적인 변화 속에 있어 기회와 도전을 동시에 제공합니다. 개발자로서, 우리의 책임은 단순히 창작뿐만 아니라 잠재적인 위협에 대한 강력한 보호도 보장해야 합니다.</p>
<p>기억하세요, 안전한 애플리케이션은 신뢰할 수 있는 애플리케이션입니다.</p>
<p>웹 개발에 대한 더 많은 통찰과 토론을 위해서, 제 Medium 블로그를 방문해주시기 바랍니다.</p>
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
<p>행복한 코딩! 🚀</p>
<h1 id="스택아데믹" tabindex="-1"><a class="header-anchor" href="#스택아데믹" aria-hidden="true">#</a> 스택아데믹</h1>
<p>끝까지 읽어 주셔서 감사합니다. 떠나시기 전에:</p>
<ul>
<li>작가에게 박수를 보내고 팔로우해주세요! 👏</li>
<li>트위터(X), 링크드인, 유튜브에서 팔로우해주세요.</li>
<li>스택아데믹닷컴을 방문하여 전 세계에서 무료 프로그래밍 교육을 민주화하는 방법에 대해 자세히 알아보세요.</li>
</ul>
</div></template>
