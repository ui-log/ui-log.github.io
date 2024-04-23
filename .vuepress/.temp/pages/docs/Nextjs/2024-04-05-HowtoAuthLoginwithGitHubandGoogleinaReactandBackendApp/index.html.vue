<template><div><p><img src="@source/docs/Nextjs/2024-04-05-HowtoAuthLoginwithGitHubandGoogleinaReactandBackendApp/img/HowtoAuthLoginwithGitHubandGoogleinaReactandBackendApp_0.png" alt="HowtoAuthLoginwithGitHubandGoogleinaReactandBackendApp_0"></p>
<p>프로그래머로서, 우리는 언젠가는 소셜 미디어 로그인을 구현해야 한 적이 있을 것입니다. 오늘날의 애플리케이션 및 웹사이트에서 이 기능은 점점 더 흔해지고 있습니다.</p>
<p>소셜 로그인을 통해 사용자는 Facebook, Google, Twitter 등의 계정을 사용하여 애플리케이션이나 웹사이트에 로그인할 수 있습니다. 이를 통해 사용자는 추가 계정 및 비밀번호를 생성하지 않아도 되며 소셜 네트워크의 보안 조치를 활용할 수 있어 시간을 절약할 수 있습니다.</p>
<p>예를 들어, 사용자가 Google 계정에 두 단계 인증을 활성화했다면, 해당 보안 조치는 사용 중인 애플리케이션이나 웹사이트에도 적용됩니다.</p>
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
<p>이 튜토리얼에서는 TypeScript로 React 애플리케이션에서 Github 및 Google 로그인을 구현할 것입니다. 우리는 애플리케이션을 만들기 위해 Vite를 사용하고 패키지 관리자로 pnpm을 사용할 것입니다.</p>
<h1 id="rrss와-함께하는-로그인-첫-단계" tabindex="-1"><a class="header-anchor" href="#rrss와-함께하는-로그인-첫-단계" aria-hidden="true">#</a> RRSS와 함께하는 로그인 첫 단계</h1>
<p>우선, 어떤 플랫폼의 인증 서비스를 사용하려면 OAuth 애플리케이션을 생성하고 필요한 키를 얻어야 합니다.</p>
<p>Github의 경우 다음 단계를 따르세요.</p>
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
<p>구글을 사용하려면 다음 단계를 따라주세요.</p>
<p>키를 안전한 장소에 보관하는 것이 중요합니다.</p>
<p>이제 우리 애플리케이션 개발을 시작할 차례입니다. 이 애플리케이션에서는 클라이언트 시크릿 키와 같은 민감하고 개인적인 데이터를 사용할 예정이므로, 보안상의 이유로 백엔드를 생성하고 서버 측에서 사용하는 것이 필요합니다.</p>
<p>아래 게시물에서 이에 대해 좀 더 설명하고 있습니다:</p>
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
<p>두 개의 애플리케이션, 백엔드와 클라이언트를 디렉토리마다 나눠서 준비할 거예요.</p>
<h1 id="백엔드-설정하기" tabindex="-1"><a class="header-anchor" href="#백엔드-설정하기" aria-hidden="true">#</a> 백엔드 설정하기</h1>
<p>다음 명령어로 애플리케이션을 생성해요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm init <span class="token operator">-</span>y
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
<p>프로젝트에 필요한 종속성을 설치해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm install express axios cors dotenv tsc ts<span class="token operator">-</span>node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm install @types<span class="token operator">/</span>cors @types<span class="token operator">/</span>express @types<span class="token operator">/</span>node ts<span class="token operator">-</span>node<span class="token operator">-</span>dev typescript <span class="token operator">-</span><span class="token constant">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이후에는 다음과 같은 구조로 프로젝트를 생성하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>├── src<span class="token operator">/</span>
│   ├── routes<span class="token operator">/</span>
│   │   ├── github<span class="token operator">-</span>routes<span class="token punctuation">.</span>ts
│   │   └── google<span class="token operator">-</span>routes<span class="token punctuation">.</span>ts
│   ├── controllers<span class="token operator">/</span>
│   │   ├── github<span class="token operator">-</span>controller<span class="token punctuation">.</span>ts
│   │   └── google<span class="token operator">-</span>controller<span class="token punctuation">.</span>ts
│   └── server<span class="token punctuation">.</span>ts
├── <span class="token punctuation">.</span>env
├── <span class="token punctuation">.</span>env<span class="token operator">-</span>example
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="클라이언트-설정하기" tabindex="-1"><a class="header-anchor" href="#클라이언트-설정하기" aria-hidden="true">#</a> 클라이언트 설정하기</h1>
<p>프로젝트에 필요한 종속성을 설치합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm install @octokit<span class="token operator">/</span>auth @react<span class="token operator">-</span>oauth<span class="token operator">/</span>google @nextui<span class="token operator">-</span>org<span class="token operator">/</span>react axios react<span class="token operator">-</span>router<span class="token operator">-</span>dom
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
<p>그 후, 프로젝트를 위한 다음 구조를 만들었습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>├── src<span class="token operator">/</span>
│   ├── assets<span class="token operator">/</span>
│   │   ├── icons<span class="token operator">/</span>
│   │   │   ├── Github<span class="token punctuation">.</span>tsx
│   │   │   ├── Google<span class="token punctuation">.</span>tsx
│   │   │   ├── Logout<span class="token punctuation">.</span>tsx
│   │   │   └── index<span class="token punctuation">.</span>ts
│   ├── pages<span class="token operator">/</span>
│   │   ├── home<span class="token operator">/</span>
│   │   │   ├── services<span class="token operator">/</span>
│   │   │   │   └── home<span class="token operator">-</span>services<span class="token punctuation">.</span>ts
│   │   │   └── HomePage<span class="token punctuation">.</span>tsx
│   │   └── login<span class="token operator">/</span>
│   │       └── LoginPage<span class="token punctuation">.</span>tsx
│   ├── index<span class="token punctuation">.</span>tsx
│   ├── App<span class="token punctuation">.</span>tsx
│   └── main<span class="token punctuation">.</span>tsx
├── <span class="token punctuation">.</span>env
├── <span class="token punctuation">.</span>env<span class="token operator">-</span>example
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="github-로그인" tabindex="-1"><a class="header-anchor" href="#github-로그인" aria-hidden="true">#</a> GitHub 로그인</h1>
<h2 id="백엔드" tabindex="-1"><a class="header-anchor" href="#백엔드" aria-hidden="true">#</a> 백엔드</h2>
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
<li>파일 server.ts:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> express <span class="token keyword">from</span> <span class="token string">'express'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> cors <span class="token keyword">from</span> <span class="token string">'cors'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> githubRoutes <span class="token keyword">from</span> <span class="token string">'./routes/github-routes'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> googleRoutes <span class="token keyword">from</span> <span class="token string">'./routes/google-routes'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PORT</span> <span class="token operator">||</span> <span class="token number">3001</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">origin</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'http://localhost:5173'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token string">'GET,POST'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/api/github'</span><span class="token punctuation">,</span> githubRoutes<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/api/google'</span><span class="token punctuation">,</span> googleRoutes<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Server on port'</span><span class="token punctuation">,</span> <span class="token constant">PORT</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 코드는 Express로 서버 애플리케이션을 만듭니다. 이 애플리케이션은 CORS(교차 출처 리소스 공유)를 활성화하기 위해 cors 라이브러리를 사용하고 출처와 허용된 메서드를 설정합니다.</p>
<p>또한 이 애플리케이션은 요청에서 JSON 사용을 가능하게 하고 GitHub 서비스 및 Google 서비스에 대한 라우트를 정의하기 위해 app.use() 함수를 사용합니다.</p>
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
<p>마지막으로, 응용 프로그램은 PORT 상수에 지정된 포트에서 청취하거나 포트가 지정되지 않은 경우 3001 포트에서 청취합니다.</p>
<ul>
<li>파일 github-routes.ts:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> express<span class="token punctuation">,</span> <span class="token punctuation">{</span> Request<span class="token punctuation">,</span> Response<span class="token punctuation">,</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'express'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getAccessToken<span class="token punctuation">,</span> getUserData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../controllers/github-controller'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">router</span><span class="token operator">:</span> Router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/accessToken'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">req</span><span class="token operator">:</span> Request<span class="token punctuation">,</span> <span class="token literal-property property">res</span><span class="token operator">:</span> Response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> code <span class="token operator">=</span> req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>code<span class="token punctuation">;</span>
  <span class="token function">getAccessToken</span><span class="token punctuation">(</span>code <span class="token keyword">as</span> string<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resp</span><span class="token punctuation">)</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/userData'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">req</span><span class="token operator">:</span> Request<span class="token punctuation">,</span> <span class="token literal-property property">res</span><span class="token operator">:</span> Response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> accessToken <span class="token operator">=</span> req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>accessToken<span class="token punctuation">;</span>
  <span class="token function">getUserData</span><span class="token punctuation">(</span>accessToken <span class="token keyword">as</span> string<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resp</span><span class="token punctuation">)</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 코드는 /accessToken과 /userData 두 경로를 정의하는 Express 라우터를 생성합니다.</p>
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
<p>/accessToken 경로는 쿼리에서 code 매개변수를 가져와 GitHub 서비스의 getAccessToken 함수를 호출하는 GET 경로입니다.</p>
<p>/userData 경로는 쿼리에서 accessToken 매개변수를 가져와 GitHub 서비스의 getUserData 함수를 호출하는 GET 경로입니다.</p>
<ul>
<li>파일 google-routes.ts:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> express<span class="token punctuation">,</span> <span class="token punctuation">{</span> Request<span class="token punctuation">,</span> Response<span class="token punctuation">,</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'express'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getUserData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../controllers/google-controller'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">router</span><span class="token operator">:</span> Router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/userData'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">req</span><span class="token operator">:</span> Request<span class="token punctuation">,</span> <span class="token literal-property property">res</span><span class="token operator">:</span> Response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> accessToken <span class="token operator">=</span> req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>accessToken<span class="token punctuation">;</span>
  <span class="token function">getUserData</span><span class="token punctuation">(</span>accessToken <span class="token keyword">as</span> string<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resp</span><span class="token punctuation">)</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
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
<p>이 코드는 Express 라우터를 생성하여 /userData라는 GET 경로를 정의합니다. 이 경로는 쿼리에서 accessToken 매개변수를 받아와 Google 서비스의 getUserData 함수를 호출합니다.</p>
<ul>
<li>파일 github-controller.ts:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> dotenv <span class="token keyword">from</span> <span class="token string">'dotenv'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span>

dotenv<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

type AccessTokenData <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">access_token</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">token_type</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">scope</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> getAccessToken <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>
  <span class="token literal-property property">code</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span>AccessTokenData<span class="token operator">></span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">?client_id=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">GITHUB_CLIENT_ID</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;client_secret=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">GITHUB_CLIENT_SECRET</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;code=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>code<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://github.com/login/oauth/access_token</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">Accept</span><span class="token operator">:</span> <span class="token string">'application/json'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getUserData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">accessToken</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'https://api.github.com/user'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">Authorization</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>accessToken<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>getAccessToken 함수는 code 매개변수를 받아와 GitHub API에 POST 요청을 보내어 제공된 client_id, client_secret 및 code를 사용하여 액세스 토큰을 얻습니다.</p>
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
<p>getUserData 함수는 accessToken 매개변수를 받아들이고 요청에서 제공된 액세스 토큰을 사용하여 GitHub API에서 사용자 정보를 반환합니다.</p>
<ul>
<li>File google-controller.ts:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getUserData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">accessToken</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>
    <span class="token string">'https://www.googleapis.com/oauth2/v3/userinfo'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">Authorization</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>accessToken<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>getUserData 함수는 accessToken 매개변수를 받아들이고, 요청의 권한 헤더에 제공된 액세스 토큰을 사용하여 Google OAuth 사용자 정보 API로 GET 요청을 수행하고 사용자 정보를 반환합니다.</p>
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
<p>이제 이미 필요한 최소한의 백엔드가 생성되었습니다. 이제 프론트엔드로 진행해 봅시다.</p>
<h2 id="클라이언트" tabindex="-1"><a class="header-anchor" href="#클라이언트" aria-hidden="true">#</a> 클라이언트</h2>
<ul>
<li>파일 main.tsx:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> GoogleOAuthProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@react-oauth/google"</span>

<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">"react-dom/client"</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> NextUIProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@nextui-org/react"</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> darkTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./themes/darktheme"</span>

<span class="token keyword">const</span> <span class="token constant">GOOGLE_CLIENT_ID</span> <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_GOOGLE_CLIENT_ID</span>

<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">"./App"</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLElement<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
 <span class="token operator">&lt;</span>NextUIProvider theme<span class="token operator">=</span><span class="token punctuation">{</span>darkTheme<span class="token punctuation">}</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>GoogleOAuthProvider clientId<span class="token operator">=</span><span class="token punctuation">{</span><span class="token constant">GOOGLE_CLIENT_ID</span><span class="token punctuation">}</span><span class="token operator">></span>
   <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>GoogleOAuthProvider<span class="token operator">></span>
 <span class="token operator">&lt;</span><span class="token operator">/</span>NextUIProvider<span class="token operator">></span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 애플리케이션에서는 Next UI를 사용하여 스타일을 적용할 것입니다. 사용하고 싶은 UI 라이브러리를 자유롭게 선택할 수 있어요.</p>
<p>TheNextUIProvider 컴포넌트는 애플리케이션의 모든 컴포넌트에 다크 테마를 제공합니다. GoogleOAuthProvider 컴포넌트는 제공된 클라이언트 ID를 사용하여 애플리케이션에 Google 로그인을 제공합니다.</p>
<ul>
<li>Component App.tsx:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token keyword">as</span> Router<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> Routes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> LoginPage<span class="token punctuation">,</span> HomePage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./pages'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Router<span class="token operator">></span>
      <span class="token operator">&lt;</span>Routes<span class="token operator">></span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/home"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>HomePage <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">></span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>LoginPage <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Routes<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>App 컴포넌트에서는 사용할 페이지의 라우트를 생성하고 해당 컴포넌트를 할당할 것입니다.</p>
<ul>
<li>Component LoginPage.tsx</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useGoogleLogin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@react-oauth/google"</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useNavigate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Card<span class="token punctuation">,</span> Spacer<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Text<span class="token punctuation">,</span> Container <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@nextui-org/react"</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> IconGitHub<span class="token punctuation">,</span> IconGoogle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../../assets/icons"</span>

<span class="token keyword">const</span> <span class="token constant">GITHUB_CLIENT_ID</span> <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_GITHUB_CLIENT_ID</span>

<span class="token keyword">const</span> <span class="token function-variable function">LoginPage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> navigate <span class="token operator">=</span> <span class="token function">useNavigate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token keyword">const</span> <span class="token function-variable function">loginToGithub</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">"loginWith"</span><span class="token punctuation">,</span> <span class="token string">"GitHub"</span><span class="token punctuation">)</span>
  window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://github.com/login/oauth/authorize?client_id=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">GITHUB_CLIENT_ID</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">const</span> loginToGoogle <span class="token operator">=</span> <span class="token function">useGoogleLogin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">onSuccess</span><span class="token operator">:</span> <span class="token parameter">tokenResponse</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">"loginWith"</span><span class="token punctuation">,</span> <span class="token string">"Google"</span><span class="token punctuation">)</span>
   localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">"accessToken"</span><span class="token punctuation">,</span> tokenResponse<span class="token punctuation">.</span>access_token<span class="token punctuation">)</span>
   <span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">"/home"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>

 <span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Container display<span class="token operator">=</span><span class="token string">'flex'</span> alignItems<span class="token operator">=</span><span class="token string">'center'</span> justify<span class="token operator">=</span><span class="token string">'center'</span> css<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token literal-property property">minHeight</span><span class="token operator">:</span> <span class="token string">"100vh"</span> <span class="token punctuation">}</span><span class="token operator">></span>
   <span class="token operator">&lt;</span>Card css<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token literal-property property">mw</span><span class="token operator">:</span> <span class="token string">"420px"</span><span class="token punctuation">,</span> <span class="token literal-property property">p</span><span class="token operator">:</span> <span class="token string">"20px"</span> <span class="token punctuation">}</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Text
     size<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">24</span><span class="token punctuation">}</span>
     weight<span class="token operator">=</span><span class="token string">'bold'</span>
     css<span class="token operator">=</span><span class="token punctuation">{</span>
      <span class="token keyword">as</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">mb</span><span class="token operator">:</span> <span class="token string">"20px"</span><span class="token punctuation">,</span>
     <span class="token punctuation">}</span>
    <span class="token operator">></span>
     로그인하기
    <span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span>
    <span class="token operator">&lt;</span>Spacer y<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Button color<span class="token operator">=</span><span class="token string">'gradient'</span> auto ghost onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">loginToGithub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
     <span class="token operator">&lt;</span>IconGitHub <span class="token operator">/</span><span class="token operator">></span>
     <span class="token operator">&lt;</span>Spacer x<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0.5</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
     GitHub
    <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span>Spacer y<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

    <span class="token operator">&lt;</span>Button color<span class="token operator">=</span><span class="token string">'gradient'</span> auto ghost onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">loginToGoogle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
     <span class="token operator">&lt;</span>IconGoogle <span class="token operator">/</span><span class="token operator">></span>
     <span class="token operator">&lt;</span>Spacer x<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0.5</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
     Google
    <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
   <span class="token operator">&lt;</span><span class="token operator">/</span>Card<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Container<span class="token operator">></span>
 <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> LoginPage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>사용자가 GitHub 로그인 버튼을 클릭하면 사용자는 GitHub 로그인 페이지로 리디렉트되며 브라우저의 로컬 저장소에 사용자가 GitHub로 로그인 중임을 나타내는 키가 저장됩니다.</p>
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
<p>사용자가 Google 로그인 버튼을 클릭하면 @react-oauth/google의 useGoogleLogin 기능을 사용하여 Google로 로그인합니다. 로그인이 성공하면 사용자가 Google로 로그인하고 있다는 것을 나타내는 키가 브라우저의 로컬 저장소에 저장됩니다.</p>
<ul>
<li>Component HomePage.tsx</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useRef<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useNavigate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Col<span class="token punctuation">,</span> Container<span class="token punctuation">,</span> Navbar<span class="token punctuation">,</span> Row<span class="token punctuation">,</span> Text<span class="token punctuation">,</span> User <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@nextui-org/react"</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> getAccessTokenGithub<span class="token punctuation">,</span> getUserDataGithub<span class="token punctuation">,</span> getUserDataGoogle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./services/home-services"</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> LogOutIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../../assets/icons"</span>

<span class="token keyword">interface</span> <span class="token class-name">UserDataGithub</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">avatar_url</span><span class="token operator">:</span> string
  <span class="token literal-property property">login</span><span class="token operator">:</span> string
  <span class="token literal-property property">bio</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">UserdataGoogle</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string
  <span class="token literal-property property">picture</span><span class="token operator">:</span> string
  <span class="token literal-property property">email</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">HomePage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>userDataGithub<span class="token punctuation">,</span> setUserDataGithub<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span><span class="token keyword">null</span> <span class="token operator">|</span> UserDataGithub<span class="token operator">></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>userDataGoogle<span class="token punctuation">,</span> setUserDataGoogle<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span><span class="token keyword">null</span> <span class="token operator">|</span> UserdataGoogle<span class="token operator">></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> loginWith <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">"loginWith"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> navigate <span class="token operator">=</span> <span class="token function">useNavigate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> queryString <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>search
    <span class="token keyword">const</span> urlParams <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span>queryString<span class="token punctuation">)</span>
    <span class="token keyword">const</span> codeParam <span class="token operator">=</span> urlParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"code"</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> accessToken <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">"accessToken"</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>codeParam <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>accessToken <span class="token operator">&amp;&amp;</span> loginWith<span class="token punctuation">.</span>current <span class="token operator">===</span> <span class="token string">"GitHub"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">getAccessTokenGithub</span><span class="token punctuation">(</span>codeParam<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">resp</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">"accessToken"</span><span class="token punctuation">,</span> resp<span class="token punctuation">.</span>access_token<span class="token punctuation">)</span>
        <span class="token function">getUserDataGithub</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>access_token<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">resp</span><span class="token operator">:</span> UserDataGithub</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">setUserDataGithub</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>codeParam <span class="token operator">&amp;&amp;</span> accessToken <span class="token operator">&amp;&amp;</span> loginWith<span class="token punctuation">.</span>current <span class="token operator">===</span> <span class="token string">"GitHub"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">getUserDataGithub</span><span class="token punctuation">(</span>accessToken<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">resp</span><span class="token operator">:</span> UserDataGithub</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">"accessToken"</span><span class="token punctuation">,</span> accessToken<span class="token punctuation">)</span>
        <span class="token function">setUserDataGithub</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>loginWith<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> accessToken <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">"accessToken"</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>accessToken <span class="token operator">&amp;&amp;</span> loginWith<span class="token punctuation">.</span>current <span class="token operator">===</span> <span class="token string">"Google"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">getUserDataGoogle</span><span class="token punctuation">(</span>accessToken<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">resp</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setUserDataGoogle</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>loginWith<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">setLogOut</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">"accessToken"</span><span class="token punctuation">)</span>
    localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">"loginWith"</span><span class="token punctuation">)</span>
    <span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>userDataGithub <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>userDataGoogle<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Navbar isBordered variant<span class="token operator">=</span><span class="token string">'sticky'</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Navbar<span class="token punctuation">.</span>Brand<span class="token operator">></span>
          <span class="token operator">&lt;</span>User
            bordered
            color<span class="token operator">=</span><span class="token string">'primary'</span>
            size<span class="token operator">=</span><span class="token string">'lg'</span>
            src<span class="token operator">=</span><span class="token punctuation">{</span>loginWith<span class="token punctuation">.</span>current <span class="token operator">===</span> <span class="token string">"GitHub"</span> <span class="token operator">?</span> userDataGithub<span class="token operator">?.</span>avatar_url <span class="token operator">:</span> userDataGoogle<span class="token operator">?.</span>picture<span class="token punctuation">}</span>
            name<span class="token operator">=</span><span class="token punctuation">{</span>loginWith<span class="token punctuation">.</span>current <span class="token operator">===</span> <span class="token string">"GitHub"</span> <span class="token operator">?</span> userDataGithub<span class="token operator">?.</span>login <span class="token operator">:</span> userDataGoogle<span class="token operator">?.</span>name<span class="token punctuation">}</span>
            description<span class="token operator">=</span><span class="token punctuation">{</span>loginWith<span class="token punctuation">.</span>current <span class="token operator">===</span> <span class="token string">"GitHub"</span> <span class="token operator">?</span> userDataGithub<span class="token operator">?.</span>bio <span class="token operator">:</span> userDataGoogle<span class="token operator">?.</span>email<span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Navbar<span class="token punctuation">.</span>Brand<span class="token operator">></span>
        <span class="token operator">&lt;</span>Navbar<span class="token punctuation">.</span>Content<span class="token operator">></span>
          <span class="token operator">&lt;</span>Navbar<span class="token punctuation">.</span>Item<span class="token operator">></span>
            <span class="token operator">&lt;</span>Button
              auto
              flat
              size<span class="token operator">=</span><span class="token string">'sm'</span>
              icon<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>LogOutIcon fill<span class="token operator">=</span><span class="token string">'currentColor'</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>
              color<span class="token operator">=</span><span class="token string">'primary'</span>
              onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setLogOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
            <span class="token operator">></span>
              로그아웃
            <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Navbar<span class="token punctuation">.</span>Item<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Navbar<span class="token punctuation">.</span>Content<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Navbar<span class="token operator">></span>
      <span class="token operator">&lt;</span>Container gap<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Row gap<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Col<span class="token operator">></span>
            <span class="token operator">&lt;</span>Text h2<span class="token operator">></span><span class="token punctuation">{</span>loginWith<span class="token punctuation">.</span>current<span class="token punctuation">}</span>로 로그인<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Col<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Row<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Container<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> HomePage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>사용자가 로그인하고 홈페이지로 리디렉션되면 useEffect 훅을 사용하여 페이지가 로드될 때 일련의 작업을 수행합니다.</p>
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
<p>먼저 페이지 URL에서 권한 코드를 받아 사용자가 GitHub으로 로그인한 경우 액세스 토큰을 받고 그런 다음 GitHub에서 사용자 데이터를 가져옵니다. 사용자가 Google로 로그인 한 경우에는 Google 사용자 데이터를 간단히 가져옵니다.</p>
<p>게다가 &quot;로그아웃&quot; 버튼을 클릭하면 액세스 토큰을 제거하고 로컬 저장소에서 로그인 정보를 삭제한 후 사용자를 애플리케이션의 홈페이지로 리디렉션합니다.</p>
<p>그게 다에요!</p>
<p>이제 GitHub 또는 Google로 로그인할 수 있습니다. 다음 단계는 사용자를 등록하고 사용자 정보를 데이터베이스에 저장하거나 원하는 대로 처리하는 것입니다.</p>
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
<p>애플리케이션은 다음과 같이 보입니다:</p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtoAuthLoginwithGitHubandGoogleinaReactandBackendApp/img/HowtoAuthLoginwithGitHubandGoogleinaReactandBackendApp_1.png" alt="이미지1"></p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtoAuthLoginwithGitHubandGoogleinaReactandBackendApp/img/HowtoAuthLoginwithGitHubandGoogleinaReactandBackendApp_2.png" alt="이미지2"></p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtoAuthLoginwithGitHubandGoogleinaReactandBackendApp/img/HowtoAuthLoginwithGitHubandGoogleinaReactandBackendApp_3.png" alt="이미지3"></p>
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
<p>🧑‍💻 위 저장소에서 확인하세요.</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>소셜 로그인은 사용자와 개발자 모두에게 많은 이점을 제공하는 기능입니다. 통합하기 간단하고 응용 프로그램 또는 웹 사이트의 사용자 경험과 보안을 개선할 수 있습니다. 따라서 프로젝트에서 이를 사용하는 것을 고려하는 것이 좋습니다.</p>
<p>더 읽기:</p>
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
<p>작가와 소통하고 싶으신가요?
세계의 친구들과 트위터를 통해 소통하는 것을 즐기시나요.</p>
</div></template>
