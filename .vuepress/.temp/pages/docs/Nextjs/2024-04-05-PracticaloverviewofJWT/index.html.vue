<template><div><h2 id="react와-node로-구축한-인증-웹-앱-소개" tabindex="-1"><a class="header-anchor" href="#react와-node로-구축한-인증-웹-앱-소개" aria-hidden="true">#</a> React와 Node로 구축한 인증 웹 앱 소개</h2>
<p>요즘 프로젝트를 진행하면서 JWT의 개념이 적절하게 문서화되지 않고 프런트엔드와 백엔드를 특징으로 하는 프로젝트에서 어떻게 사용해야 하는지에 대해 명확하게 정리된 자료를 찾지 못했습니다. 그래서 기본 JWT 사용 방법과 관련된 링크 및 기사들을 구체적으로 정리한 내 작업 내용을 문서화해보았습니다.</p>
<p>간단한 요약: 프로젝트 소개</p>
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
<p>회원가입 프로세스:</p>
<ul>
<li>사용자가 가입을 완료하면, 클라이언트가 이메일과 비밀번호를 서버로 보냅니다.</li>
<li>서버는 이메일과 비밀번호를 받은 후, 비밀번호를 해싱하고 데이터베이스에 저장합니다.</li>
<li>사용자는 로그인 페이지로 리디렉션됩니다.</li>
</ul>
<p>로그인 프로세스 (시스템의 핵심):</p>
<ul>
<li>사용자는 동일한 이메일과 비밀번호로 로그인합니다.</li>
<li>서버는 이메일과 비밀번호를 받은 후, 데이터베이스에서 해시된 비밀번호를 가져와 사용자가 보낸 비밀번호와 비교합니다. 그리고 jwt:access-token과 jwt:refresh-token을 생성합니다 (jwt:refresh-token은 항상 jwt:access-token보다 오래 지속되어야 합니다).</li>
<li>jwt:refresh-token은 사용자가 가입할 때 사용한 사용자 정보와 함께 데이터베이스에 저장됩니다.</li>
<li>서버는 그런 다음, jwt:access-token과 jwt:refresh-token을 &quot;Set-cookie&quot; 헤더나 express를 위해 res.cookies(token, { httpOnly: true }) 내부에 설정하고 응답을 클라이언트로 다시 보냅니다 (응답에는 사용자 정보와 jwt:access-token이 포함됨).</li>
<li>클라이언트는 서버로부터 응답을 받은 후, 사용자가 '환영' 페이지로 리디렉션됩니다.</li>
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
<p>보호된 라우트에 액세스하는 방법:</p>
<ul>
<li>사용자가 다음에 보호된 라우트에 액세스하려면 클라이언트는 유효성을 검사하기 위해 서버에 요청과 함께 jwt:액세스 토큰이 포함된 쿠키를 포함해야 합니다.</li>
<li>한 번 유효성이 검사되면 &quot;성공&quot; 응답이 전송되고 사용자가 보호된 라우트에 액세스할 수 있습니다.</li>
</ul>
<p>주요 사항:</p>
<ul>
<li>refresh-token은 access-token보다 오래 지속되어야 합니다.</li>
<li>쿠키는 서버에 의해서만 조작될 수 있습니다.</li>
<li>토큰(jwt:액세스 토큰, jwt:리프레시 토큰)은 절대 클라이언트가 액세스할 수 있는 위치에 저장되어서는 안 됩니다. 즉, 로컬 스토리지, 세션 스토리지.</li>
<li>&quot;Set-cookie&quot; 응답 헤더는 보안 문제로 인해 클라이언트에서 액세스할 수 없으며 금지된 헤더의 일부입니다(쿠키는 서버에 의해서만 조작될 수 있습니다).
추가 정보: https://fetch.spec.whatwg.org/#forbidden-response-header-name</li>
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
<h1 id="인증-앱" tabindex="-1"><a class="header-anchor" href="#인증-앱" aria-hidden="true">#</a> 인증 앱</h1>
<p>기본 설정을 할 수 있다는 가정하에 진행합니다.</p>
<p>먼저 회원가입 및 로그인 컨트롤러를 생성합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 서버</span>
<span class="token comment">// 회원가입 컨트롤러</span>
<span class="token comment">// ./auth.controller.ts</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">signUpUser</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">req</span><span class="token operator">:</span> Request<span class="token punctuation">,</span> <span class="token literal-property property">res</span><span class="token operator">:</span> Response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> <span class="token punctuation">{</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span>

 <span class="token keyword">const</span> emailExists <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">checkIfEmailExists</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>emailExists<span class="token punctuation">)</span>
  <span class="token keyword">return</span> res
   <span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"이미 존재하는 이메일입니다. 로그인하러 이동"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token keyword">const</span> hashedPassword <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">hash</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>hashedPassword <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token function">createNewUser</span><span class="token punctuation">(</span>email<span class="token punctuation">,</span> hashedPassword<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">201</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"사용자가 성공적으로 생성되었습니다"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<p>로그인 컨트롤러와 액세스 토큰 생성기</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 서버</span>
<span class="token comment">// ./auth.controller.ts</span>
<span class="token comment">// 액세스 및 리프레시 토큰 생성</span>
<span class="token keyword">const</span> <span class="token function-variable function">generateAccessAndRefreshToken</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>
 <span class="token parameter"><span class="token literal-property property">email</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
 <span class="token literal-property property">password</span><span class="token operator">:</span> string</span>
<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 <span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> accessToken <span class="token operator">=</span> jwt<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span>
   <span class="token punctuation">{</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span><span class="token punctuation">,</span>
   process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">ACCESS_TOKEN_SECRET</span><span class="token operator">!</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token literal-property property">expiresIn</span><span class="token operator">:</span> <span class="token string">"10s"</span> <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> refreshToken <span class="token operator">=</span> jwt<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span>
   <span class="token punctuation">{</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span><span class="token punctuation">,</span>
   process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">REFRESH_TOKEN_SECRET</span><span class="token operator">!</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token literal-property property">expiresIn</span><span class="token operator">:</span> <span class="token string">"1d"</span> <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> accessToken<span class="token punctuation">,</span> refreshToken <span class="token punctuation">}</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
   <span class="token string">"토큰 생성 중에 문제가 발생했습니다"</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// ./auth.controller.ts</span>
<span class="token comment">// 로그인 컨트롤러</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">loginUser</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">req</span><span class="token operator">:</span> Request<span class="token punctuation">,</span> <span class="token literal-property property">res</span><span class="token operator">:</span> Response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> <span class="token punctuation">{</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span>

 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"email:"</span><span class="token punctuation">,</span> email<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">const</span> emailExists <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">checkIfEmailExists</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>emailExists<span class="token punctuation">)</span>
  <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"먼저 가입하세요!"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token keyword">const</span> passFromDb <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getPasswordFromDb</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>passFromDb<span class="token punctuation">)</span>
  <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"잘못된 자격 증명!"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> bcrypt<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>password<span class="token punctuation">,</span> passFromDb<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>result<span class="token punctuation">)</span>
  <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"유효하지 않은 자격 증명"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token keyword">const</span> <span class="token punctuation">{</span> accessToken<span class="token punctuation">,</span> refreshToken <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">generateAccessAndRefreshToken</span><span class="token punctuation">(</span>
  email<span class="token punctuation">,</span>
  password
 <span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token function">saveRefreshTokenToDb</span><span class="token punctuation">(</span>email<span class="token punctuation">,</span> refreshToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">201</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">cookie</span><span class="token punctuation">(</span><span class="token string">"accesstoken"</span><span class="token punctuation">,</span> accessToken<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">httpOnly</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">cookie</span><span class="token punctuation">(</span><span class="token string">"refreshtoken"</span><span class="token punctuation">,</span> refreshToken<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">httpOnly</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"로그인 성공!! 로딩 중..."</span><span class="token punctuation">,</span> accessToken <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"문제가 발생했습니다"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>프론트엔드에서 컨트롤러 호출</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 클라이언트</span>
<span class="token comment">// ./SignUp.tsx</span>
<span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>
  <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_BACKEND</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/auth/signup</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
   <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"POST"</span><span class="token punctuation">,</span>
   <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"Content-type"</span><span class="token operator">:</span> <span class="token string">"application/json"</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>formData<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ./Login.tsx</span>
<span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>
  <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_BACKEND</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/auth/login</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
   <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"POST"</span><span class="token punctuation">,</span>
   <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"Content-type"</span><span class="token operator">:</span> <span class="token string">"application/json"</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token string">"include"</span><span class="token punctuation">,</span>
   <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>formData<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>프론트엔드에서 쿠키를 받으려면 cors를 허용해야 해요</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 서버</span>
<span class="token comment">// ./server.ts</span>
<span class="token keyword">import</span> cookieParser <span class="token keyword">from</span> <span class="token string">"cookie-parser"</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
 <span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">origin</span><span class="token operator">:</span> <span class="token string">"http://localhost:5173"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cookieParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>백엔드로부터 응답을 받은 후, 로그인 시 인증 컨텍스트 상태를 설정하고 accesstoken을 설정합니다</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 클라이언트</span>
<span class="token comment">// ./Login.tsx</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> message<span class="token punctuation">,</span> accessToken <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"성공"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">setUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   accessToken<span class="token punctuation">,</span>
   <span class="token literal-property property">email</span><span class="token operator">:</span> formData<span class="token punctuation">.</span>email<span class="token punctuation">,</span>
   <span class="token literal-property property">password</span><span class="token operator">:</span> formData<span class="token punctuation">.</span>password<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">"/welcome"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"응답에 오류가 있어요"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<p>사용자가 성공적으로 로그인되었으며 쿠키가 브라우저에 설정되었습니다.</p>
<p>보호된 경로에 사용자가 액세스하려면 브라우저 쿠키에 jwt:accesstoken이 있어야 합니다. 이 예제에서는 middleware로 authenticateToken이 정의된 route check이 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 서버</span>
<span class="token comment">// ./routes/check.ts</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/check"</span><span class="token punctuation">,</span> authenticateToken<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token string">"success"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ./auth.middleware.ts</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">authenticateToken</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
 <span class="token parameter"><span class="token literal-property property">req</span><span class="token operator">:</span> Request<span class="token punctuation">,</span>
 <span class="token literal-property property">res</span><span class="token operator">:</span> Response<span class="token punctuation">,</span>
 <span class="token literal-property property">next</span><span class="token operator">:</span> NextFunction</span>
<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> token <span class="token operator">=</span>
  req<span class="token punctuation">.</span>cookies<span class="token operator">?.</span>accesstoken <span class="token operator">||</span>
  req<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">"Authorization"</span><span class="token punctuation">)</span><span class="token operator">?.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">"Bearer "</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">verifyToken</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"user:"</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"인증 오류"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"인가되지 않았습니다!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 사용자가 보호된 경로에 액세스하려고 할 때마다 클라이언트는 요청과 함께 jwt:accesstoken 쿠키를 보내야 합니다.</p>
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
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>이것은 JWT 토큰이 기본 인증에 어떻게 사용되는지에 대한 기본 개요였습니다. 아직 jwt:refreshtokens의 사용을 보지 못했는데, 이것은 사용자의 인증 상태를 유지하고 사용자를 로그아웃하는 데 유용합니다. 이에 대해 저는 다가올 블로그에서 다룰 예정입니다.</p>
<p>그때까지는 전체 소스 코드를 확인할 수 있습니다 (jwt:refreshtoken 및 jwt:accesstoken 사용법 및 사용자 인증 내용을 frontend에 유지하는 방법 포함).</p>
<p>읽어 주셔서 감사합니다! 만약 이 이야기를 즐겼다면, 👏 버튼을 클릭하고 공유하여 다른 사람이 찾을 수 있도록 도와주세요! 아래에 댓글을 남겨도 괜찮습니다.</p>
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
<p>별도로 말씀드리지만, 저는 현재 주 브랜치에서 프로젝트를 진행 중이에요. 생산성에 집착하시거나 시간을 철저히 관리하시는 분들과 연결하고 싶으시다면 LinkedIn이나 Twitter로 연락해 주세요.</p>
</div></template>
