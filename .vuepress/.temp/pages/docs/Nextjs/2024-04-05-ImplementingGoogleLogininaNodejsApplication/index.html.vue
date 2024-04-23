<template><div><img src="@source/docs/Nextjs/2024-04-05-ImplementingGoogleLogininaNodejsApplication/img/ImplementingGoogleLogininaNodejsApplication_0.png" />
<p>Google 로그인을 구현하기 위해서는 Google API 프로젝트를 설정해야 합니다. 아래 단계를 따라 주세요:</p>
<ul>
<li>Google 개발자 콘솔로 이동합니다 (https://console.developers.google.com/).</li>
<li>새 프로젝트를 생성하거나 기존 프로젝트를 선택합니다.</li>
<li>프로젝트에 &quot;Google+ API&quot;를 활성화합니다.</li>
<li>&quot;Credentials&quot; 섹션으로 이동하고 &quot;Credentials 생성&quot;을 클릭합니다.</li>
<li>자격 증명 유형으로 &quot;OAuth 클라이언트 ID&quot;를 선택합니다.</li>
<li>애플리케이션 유형으로 &quot;웹 애플리케이션&quot;을 선택합니다.</li>
<li>OAuth 클라이언트 ID에 이름을 입력합니다.</li>
<li>승인된 JavaScript 소스 (예: http://localhost:3000) 및 리디렉션 URI (예: http://localhost:3000/auth/google/callback)를 추가합니다.</li>
<li>클라이언트 ID 및 클라이언트 시크릿을 생성하려면 &quot;생성&quot;을 클릭합니다.</li>
</ul>
<p>단계 2: Node.js 프로젝트 설정</p>
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
<p>새로운 Node.js 프로젝트를 설정하세요. npm이나 yarn과 같은 패키지 관리자를 사용해 시작하세요. 터미널에서 다음 명령을 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>csharpCopy code
npm init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>이 명령은 프로젝트의 종속성을 관리하는 package.json 파일을 생성합니다.</p>
<p>단계 3: 필수 패키지 설치</p>
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
<p>Node.js에서 Google 로그인을 구현하려면 필요한 패키지를 설치해야 합니다. 터미널에서 다음 명령을 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>복사 코드
npm install express axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Express.js와 axios 패키지가 설치됩니다. Express.js는 인기있는 Node.js 웹 프레임워크이며, HTTP 요청을 만들기 위해 axios 패키지를 사용할 것입니다.</p>
<p>단계 4: 인증 라우트 구현</p>
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
<p>새 파일 authRoutes.js을 만들어 애플리케이션의 인증 라우트를 정의하세요. 이 파일에서 Google 로그인 플로우를 시작하고 콜백 URL을 처리하며 사용자 로그아웃을 담당하는 라우트를 구현하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>javascriptCopy code
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> axios <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'axios'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">CLIENT_ID</span> <span class="token operator">=</span> <span class="token string">'YOUR_CLIENT_ID'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">CLIENT_SECRET</span> <span class="token operator">=</span> <span class="token string">'YOUR_CLIENT_SECRET'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">REDIRECT_URI</span> <span class="token operator">=</span> <span class="token string">'&lt;http://localhost:3000/auth/google/callback>'</span><span class="token punctuation">;</span>

<span class="token comment">// Initiates the Google Login flow</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/auth/google'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://accounts.google.com/o/oauth2/v2/auth?client_id=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">CLIENT_ID</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;redirect_uri=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">REDIRECT_URI</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;response_type=code&amp;scope=profile email</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Callback URL for handling the Google Login response</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/auth/google/callback'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> code <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>query<span class="token punctuation">;</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// Exchange authorization code for access token</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'&lt;https://oauth2.googleapis.com/token>'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">client_id</span><span class="token operator">:</span> <span class="token constant">CLIENT_ID</span><span class="token punctuation">,</span>
      <span class="token literal-property property">client_secret</span><span class="token operator">:</span> <span class="token constant">CLIENT_SECRET</span><span class="token punctuation">,</span>
      code<span class="token punctuation">,</span>
      <span class="token literal-property property">redirect_uri</span><span class="token operator">:</span> <span class="token constant">REDIRECT_URI</span><span class="token punctuation">,</span>
      <span class="token literal-property property">grant_type</span><span class="token operator">:</span> <span class="token string">'authorization_code'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> access_token<span class="token punctuation">,</span> id_token <span class="token punctuation">}</span> <span class="token operator">=</span> data<span class="token punctuation">;</span>

    <span class="token comment">// Use access_token or id_token to fetch user profile</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> profile <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'&lt;https://www.googleapis.com/oauth2/v1/userinfo>'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">Authorization</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>access_token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Code to handle user authentication and retrieval using the profile data</span>

    res<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error:'</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Logout route</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/logout'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// Code to handle user logout</span>
  res<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>반드시 Google API 프로젝트에서 얻은 자신의 자격 증명인 <code v-pre>YOUR_CLIENT_ID</code>와 <code v-pre>YOUR_CLIENT_SECRET</code>를 대체하십시오.</p>
<p>Step 5: Express.js 서버 설정하기</p>
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
<p>메인 서버 파일(예: app.js)에서 필요한 패키지를 가져와 Express.js 서버를 구성하세요. authRoutes.js에 정의된 인증 라우트를 포함하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>javascriptCopy 코드
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> authRoutes <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./authRoutes'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> authRoutes<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 서버 시작</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'서버가 3000번 포트에서 시작되었습니다'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>궁금한 사항이나 제안이 있다면 언제든지 저의 인스타그램 또는 codeculturepro@gmail.com으로 연락주세요.</p>
</div></template>
