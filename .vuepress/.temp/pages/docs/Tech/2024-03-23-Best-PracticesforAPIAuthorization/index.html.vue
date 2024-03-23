<template><div><h2 id="api-권한-부여를-위한-4가지-모범-사례" tabindex="-1"><a class="header-anchor" href="#api-권한-부여를-위한-4가지-모범-사례" aria-hidden="true">#</a> API 권한 부여를 위한 4가지 모범 사례</h2>
<p>API(Application Programming Interfaces)는 서로 다른 소프트웨어 프로그램끼리 대화할 수 있는 비밀 문들과 같습니다. 하지만 모든 사람이 모든 문의 열쇠를 가지고 있을 필요는 없죠, 마찬가지로 모든 소프트웨어가 모든 API에 제한 없이 액세스할 필요는 없습니다.</p>
<p>이러한 API는 은행의 모바일 앱에서부터 즐겨 사용하는 소셜 미디어 플랫폼에 이르기까지 모든 것을 연결하며, 민감한 데이터를 처리하고 중요한 기능을 수행합니다.</p>
<p>그래서 여기서 API 권한 부여가 필요한 것입니다.</p>
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
<p>API 권한 부여는 문을 열고 내부 자원을 활용할 수 있는 올바른 소프트웨어만이 그 문을 열 수 있도록 보증하는 '경비원' 역할을 합니다. 효과적인 API 권한 부여는 보안 이상의 역할을 합니다. 사용자 경험을 원활하게 유지하고 안전하게 보호합니다. 권한이 있는 응용프로그램만 개인 정보에 액세스하고 이러한 응용프로그램은 허용된 범위 내에서만 작업을 수행할 수 있도록 보장합니다.</p>
<h1 id="api-권한-부여-이해" tabindex="-1"><a class="header-anchor" href="#api-권한-부여-이해" aria-hidden="true">#</a> API 권한 부여 이해</h1>
<p><img src="@source/docs/Tech/2024-03-23-Best-PracticesforAPIAuthorization/img/Best-Practices-for-API-Authorization_0.png" alt="이미지"></p>
<p>API 권한 부여의 최선의 실천 방안을 논의하기 전에, '인증'과 '인가'라는 종종 혼동되는 두 개념 사이의 차이를 이해해야 합니다.</p>
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
<li>인증(Authentication)은 신원을 확인하는 것을 의미해요. 사용자의 신원을 아이디, 비밀번호 또는 생체 인식을 통해 확인하는 것과 같아요.</li>
<li>인가(Authorization)는 신원이 확인된 후에 자원 또는 기능에 대한 접근을 허용하는 것을 의미해요. 예를 들어, 인증이 건물의 앞문을 통과하는 것이라면, 인가는 그 사람이 건물 안에서 어떤 방과 서비스에 접근할 수 있는지를 결정하는 거예요.</li>
</ul>
<h1 id="api-인가-authorization-의-최상의-실천법" tabindex="-1"><a class="header-anchor" href="#api-인가-authorization-의-최상의-실천법" aria-hidden="true">#</a> API 인가(Authorization)의 최상의 실천법</h1>
<p>이제 API 인가의 중요성을 이해했으니, 이를 최대한 활용하기 위한 몇 가지 최상의 실천법에 대해 알아볼게요.</p>
<h2 id="_1-토큰-기반-인가-token-based-authorization-사용-jwt-oauth-토큰" tabindex="-1"><a class="header-anchor" href="#_1-토큰-기반-인가-token-based-authorization-사용-jwt-oauth-토큰" aria-hidden="true">#</a> 1. 토큰 기반 인가(Token-Based Authorization) 사용 (JWT, OAuth 토큰)</h2>
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
<p><img src="@source/docs/Tech/2024-03-23-Best-PracticesforAPIAuthorization/img/Best-Practices-for-API-Authorization_1.png" alt="이미지"></p>
<p>토큰 기반 인증, 특히 JWT (JSON Web Tokens) 및 OAuth 토큰을 사용하면 API 상호작용을 안전하고 효율적으로 관리할 수 있습니다. 예를 들어:</p>
<ul>
<li>토큰을 사용하면 무상태(stateless) 인증이 가능해져 서버가 각 사용자에 대한 세션 상태를 유지할 필요가 없어져 확장성이 향상됩니다.</li>
<li>토큰은 다양한 수단을 통해 안전하게 전송할 수 있으며, 기존 세션 기반 인증보다 CSRF 공격에 덜 취약합니다.</li>
<li>토큰은 도메인 간에 사용할 수 있어서, 마이크로서비스 아키텍처 및 단일 사인온(SSO) 애플리케이션에 이상적입니다.</li>
<li>특히 OAuth 토큰을 사용하면 스코프 및 권한을 포함하여 인증된 사용자의 동작을 정확하게 제어할 수 있습니다.</li>
</ul>
<h2 id="jwt를-사용한-토큰-기반-인가-구현-방법" tabindex="-1"><a class="header-anchor" href="#jwt를-사용한-토큰-기반-인가-구현-방법" aria-hidden="true">#</a> JWT를 사용한 토큰 기반 인가 구현 방법</h2>
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
<p>JWT는 사용자가 성공적으로 인증된 후에 일반적으로 생성됩니다. 이들은 사용자 정보와 필요에 따라 권한을 포함하는 페이로드를 포함합니다. JWT 인가를 구현하려면 Node.js에서는 jsonwebtoken 또는 Python에서 PyJWT와 같은 라이브러리를 사용할 수 있습니다.</p>
<p>먼저 JWT 토큰을 생성해야 합니다. 다음은 PyJWT를 사용하여 어떻게 할 수 있는지 보여줍니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> jwt
from datetime <span class="token keyword">import</span> datetime<span class="token punctuation">,</span> timedelta

secret_key <span class="token operator">=</span> <span class="token string">'YOUR_SECRET_KEY'</span>
payload <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'sub'</span><span class="token operator">:</span> user_id<span class="token punctuation">,</span>
    <span class="token string-property property">'iat'</span><span class="token operator">:</span> datetime<span class="token punctuation">.</span><span class="token function">utcnow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string-property property">'exp'</span><span class="token operator">:</span> datetime<span class="token punctuation">.</span><span class="token function">utcnow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">timedelta</span><span class="token punctuation">(</span>days<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

token <span class="token operator">=</span> jwt<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>payload<span class="token punctuation">,</span> secret_key<span class="token punctuation">,</span> algorithm<span class="token operator">=</span><span class="token string">'HS256'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음, 각 요청을 유효화하여 사용자가 요청을 수행할 수 있는지를 결정해야 합니다. 토큰은 일반적으로 각 요청의 Authorization 헤더에 전송됩니다. 서버는 비밀 키를 사용하여 JWT를 디코드하고 유효성을 확인할 수 있습니다. 유효하면 서버가 요청을 처리하고, 그렇지 않으면 오류를 반환합니다.</p>
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
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask<span class="token punctuation">,</span> request<span class="token punctuation">,</span> jsonify
<span class="token keyword">import</span> jwt
<span class="token keyword">import</span> datetime

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
SECRET_KEY <span class="token operator">=</span> <span class="token string">"your_secret_key"</span>  <span class="token comment"># Replace with your secret key</span>

<span class="token comment"># 샘플 루트: 토큰 기반 권한이 필요한 루트</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">'/protected'</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">'GET'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">protected</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    token <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">'Authorization'</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> token<span class="token punctuation">:</span>
        <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">'message'</span><span class="token punctuation">:</span> <span class="token string">'토큰이 누락되었습니다!'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">403</span>

    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token comment"># 토큰 해독</span>
        data <span class="token operator">=</span> jwt<span class="token punctuation">.</span>decode<span class="token punctuation">(</span>token<span class="token punctuation">,</span> SECRET_KEY<span class="token punctuation">,</span> algorithms<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">"HS256"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token comment"># 토큰 내의 데이터 사용 가능, 예를 들어:</span>
        <span class="token comment"># user_id = data['user_id']</span>

    <span class="token keyword">except</span> jwt<span class="token punctuation">.</span>ExpiredSignatureError<span class="token punctuation">:</span>
        <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">'message'</span><span class="token punctuation">:</span> <span class="token string">'토큰이 만료되었습니다!'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">403</span>
    <span class="token keyword">except</span> jwt<span class="token punctuation">.</span>InvalidTokenError<span class="token punctuation">:</span>
        <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">'message'</span><span class="token punctuation">:</span> <span class="token string">'잘못된 토큰입니다!'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">403</span>

    <span class="token comment"># 토큰이 유효하므로 요청 처리</span>
    <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">'message'</span><span class="token punctuation">:</span> <span class="token string">'토큰이 유효합니다! 보호된 루트에 액세스할 수 있습니다.'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-세밀한-접근-제어-구현" tabindex="-1"><a class="header-anchor" href="#_2-세밀한-접근-제어-구현" aria-hidden="true">#</a> 2. 세밀한 접근 제어 구현</h2>
<p><img src="@source/docs/Tech/2024-03-23-Best-PracticesforAPIAuthorization/img/Best-Practices-for-API-Authorization_2.png" alt="Best Practices for API Authorization"></p>
<p>세밀한 접근 제어는 응용 프로그램 권한과 액세스 권한에 대한 자세한 제어를 제공하는 보안 관리 접근 방식입니다. 해당 사용자나 서비스가 필요한 권한만 갖도록하여 최소한의 권한 원칙을 준수합니다.```</p>
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
<h2 id="세밀한-접근-제어-구현-방법" tabindex="-1"><a class="header-anchor" href="#세밀한-접근-제어-구현-방법" aria-hidden="true">#</a> 세밀한 접근 제어 구현 방법:</h2>
<p>세밀한 접근 제어를 구현하는 데는 몇 가지 단계가 필요합니다:</p>
<ul>
<li>역할 및 권한 정의: 시스템 내에서 다른 사용자 역할을 식별하고 각 역할의 특정 작업을 정의합니다.</li>
<li>역할 기반 접근 제어 (RBAC) 사용: 리소스 액세스 권한이 역할에 따라 부여되는 RBAC를 구현합니다. 각 역할에 특정 권한이 할당됩니다.</li>
<li>속성 기반 접근 제어 (ABAC) 고려: 더 복잡한 시나리오의 경우, 사용자, 리소스, 환경의 조합에 따라 액세스 결정을 내리는 ABAC를 사용할 수 있습니다.</li>
</ul>
<p>예를 들어, 관리자와 사용자 간에 액세스가 다른 API가 있다면, 애플리케이션 전반에 재사용할 수 있는 독립적 구성 요소를 사용하여 액세스 제어 메커니즘을 구현할 수 있습니다.</p>
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
<p>예를 들어, Bit와 같은 도구를 활용하여 API 요청을 인가하는 역할을 맡을 독립적인 authorizer 컴포넌트를 만들 수 있어요.</p>
<p>할 일은 다음과 같아요:</p>
<ol>
<li>다음 명령어를 사용하여 Node.js 컴포넌트인 &quot;authorizer&quot;를 생성하고 권한 로직을 구현할 수 있어요:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>bit create node util<span class="token operator">/</span>authorizer
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
<p>만약 제대로 진행한다면 아래 결과를 확인할 수 있을 것입니다:</p>
<p><img src="@source/docs/Tech/2024-03-23-Best-PracticesforAPIAuthorization/img/Best-Practices-for-API-Authorization_3.png" alt="API Authorization Best Practices"></p>
<p>이제 권한 부여 로직을 구현하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">authorizer</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">userId</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 사용자의 역할을 가져오는 로직을 구현하세요</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>userId <span class="token operator">===</span> <span class="token string">"U001"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"admin"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token string">"customer"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<p>다음으로, 다음 명령을 사용하여 Express 앱을 만듭니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>bit create express<span class="token operator">-</span>app api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>출력 결과는 다음과 같이 나타날 것입니다:</p>
<p><img src="@source/docs/Tech/2024-03-23-Best-PracticesforAPIAuthorization/img/Best-Practices-for-API-Authorization_4.png" alt="Best-Practices-for-API-Authorization_4"></p>
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
<p>그 다음으로, 앱에 권한 부여자를 연결하기 위해 mock-route.ts를 업데이트해 봅시다. 최초에는 다음과 같은 코드가 나타날 것입니다:</p>
<p><img src="@source/docs/Tech/2024-03-23-Best-PracticesforAPIAuthorization/img/Best-Practices-for-API-Authorization_5.png" alt="이미지"></p>
<p>새로운 미들웨어를 추가해 봅시다:</p>
<p><img src="@source/docs/Tech/2024-03-23-Best-PracticesforAPIAuthorization/img/Best-Practices-for-API-Authorization_6.png" alt="이미지"></p>
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
<p>이렇게 하면 실제 비즈니스 로직을 호출하기 전에 권한 부여 구성요소가 실행됩니다. API를 실행한 후 다음 출력을 확인해야 합니다:</p>
<p><img src="@source/docs/Tech/2024-03-23-Best-PracticesforAPIAuthorization/img/Best-Practices-for-API-Authorization_7.png" alt="Best Practices for API Authorization"></p>
<p>함수를 연결함으로써 역할 기반 액세스 제어를 강화했습니다. 데코레이터는 사용자 역할이 엔드포인트에 필요한 역할과 일치하는지 확인합니다. 그렇지 않으면 액세스 거부 메시지가 반환됩니다.</p>
<p>그리고 권한 부여 로직을 계속 업데이트하고 앱을 업데이트하는 동안, Bit의 CI 서버인 리플 CI가 자동으로 변경 사항을 트리 전체에 업데이트합니다.</p>
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
<h2 id="_3-안전한-api-게이트웨이-구성" tabindex="-1"><a class="header-anchor" href="#_3-안전한-api-게이트웨이-구성" aria-hidden="true">#</a> 3. 안전한 API 게이트웨이 구성</h2>
<p>API 게이트웨이는 모든 API 요청의 출입구 역할을 하며 보안 및 운영 정책을 강제하는 중앙 집중화된 장소 역할을 합니다. 예를 들어, API 게이트웨이는 다음과 같은 기능을 제공하여 도움을 줍니다:</p>
<ul>
<li>강화된 보안: DDoS 공격, 무단 액세스, API 남용과 같은 위협으로부터 보호하는 추가 보안층을 제공합니다.</li>
<li>요청 속도 제한 및 제어: API 과도한 사용을 방지하고 사용자 간 공정한 사용을 보장합니다.</li>
<li>데이터 변환 및 유효성 검사: 들어오는 데이터가 예상 형식과 표준을 준수하는지 확인합니다.</li>
</ul>
<h2 id="안전한-api-게이트웨이-구성-방법" tabindex="-1"><a class="header-anchor" href="#안전한-api-게이트웨이-구성-방법" aria-hidden="true">#</a> 안전한 API 게이트웨이 구성 방법:</h2>
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
<p>당신의 애플리케이션에 대한 여러 API 게이트웨이 제공업체가 있습니다. 예를 들어 Amazon API Gateway, Kong, 그리고 Google의 Apigee는 가장 인기 있는 API 게이트웨이 플랫폼 중 일부입니다.</p>
<p>AWS를 사용하려고 하는 경우, AWS 문서에 안내된 단계를 따라 API 게이트웨이를 쉽게 생성할 수 있습니다. 그러나 API 게이트웨이가 안전하고 효율적으로 작동하도록 하려면 몇 가지 추가 설정이 필요합니다.</p>
<ul>
<li>요율 제한 설정 — AWS 관리 콘솔에서 Amazon API Gateway로 이동한 다음 API를 선택하고 &quot;보호&quot; 탭 내의 Throttling 섹션으로 이동합니다. 거기에서 요율 및 폭주 제한을 설정할 수 있습니다.</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-23-Best-PracticesforAPIAuthorization/img/Best-Practices-for-API-Authorization_8.png" alt="이미지가 표시되지 않습니다."></p>
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
<li>SSL/TLS 활성화하기 - API 게이트웨이의 사용자 정의 도메인 이름이 AWS Certificate Manager에 등록된 SSL/TLS 인증서와 연결되어 있는지 확인하세요.</li>
<li>IP 제한 구현하기 - AWS Lambda 인가자를 사용하여 수신 요청의 IP 주소를 확인하세요. 함수를 배포한 후에는 API 게이트웨이의 권한 탭에서 새로운 인가자를 생성하여 함수를 선택할 수 있습니다. 다음은 IP를 제한하는 Python 샘플 Lambda 함수입니다:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> json

def <span class="token function">lambda_handler</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token operator">:</span>
    ip_address <span class="token operator">=</span> event<span class="token punctuation">[</span><span class="token string">'requestContext'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'identity'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'sourceIp'</span><span class="token punctuation">]</span>
    allowed_ips <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'192.168.1.1'</span><span class="token punctuation">]</span>  # 허용된 <span class="token constant">IP</span> 목록
    # 여기에 ip_address가 allowed_ips에 있는지 여부를 확인하는 논리를 추가하세요

    <span class="token keyword">if</span> ip_address not <span class="token keyword">in</span> <span class="token literal-property property">allowed_ips</span><span class="token operator">:</span>
        raise <span class="token function">Exception</span><span class="token punctuation">(</span><span class="token string">'Unauthorized'</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'principalId'</span><span class="token operator">:</span> <span class="token string">'user'</span><span class="token punctuation">,</span>
        <span class="token string-property property">'policyDocument'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">'Version'</span><span class="token operator">:</span> <span class="token string">'2012-10-17'</span><span class="token punctuation">,</span>
            <span class="token string-property property">'Statement'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
                <span class="token string-property property">'Action'</span><span class="token operator">:</span> <span class="token string">'execute-api:Invoke'</span><span class="token punctuation">,</span>
                <span class="token string-property property">'Effect'</span><span class="token operator">:</span> <span class="token string">'Allow'</span><span class="token punctuation">,</span>
                <span class="token string-property property">'Resource'</span><span class="token operator">:</span> event<span class="token punctuation">[</span><span class="token string">'methodArn'</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>CloudWatch 로그 활성화하기 - AWS Management Console에서 API Gateway의 설정으로 이동하세요. CloudWatch 설정 섹션에서 CloudWatch 로그 활성화 옵션을 확인하세요. 모든 요청 및 응답을 로깅하려면 로깅 레벨을 INFO로 설정하거나 오류 응답만 로깅하려면 ERROR로 설정하세요.</li>
</ul>
<h2 id="_4-이동하는-중요-데이터와-안정상태에서-보호하기" tabindex="-1"><a class="header-anchor" href="#_4-이동하는-중요-데이터와-안정상태에서-보호하기" aria-hidden="true">#</a> 4. 이동하는 중요 데이터와 안정상태에서 보호하기</h2>
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
<p>데이터를 트랜짓(전송 중) 및 데이터가 안정 상태에서 암호화 하는 것은 무단 접근과 침입으로부터 데이터를 보호하기 위한 기본적인 보안 관행입니다. 트랜짓에서의 암호화는 클라이언트와 서버 간 데이터 이동 시, 데이터를 안전하게 지킵니다. 반면 안정 상태에서의 암호화는 디스크나 데이터베이스에 저장된 데이터를 지킵니다.</p>
<h2 id="데이터-트랜짓-전송-중-암호화-구현-방법" tabindex="-1"><a class="header-anchor" href="#데이터-트랜짓-전송-중-암호화-구현-방법" aria-hidden="true">#</a> 데이터 트랜짓(전송 중) 암호화 구현 방법</h2>
<p>자체 웹서버를 사용하는 경우 SSL/TLS 인증서를 수동으로 설정하고 관리해야 합니다. 먼저 신뢰할 수 있는 인증 기관(CA)인 Let’s Encrypt, DigiCert, GoDaddy 등에서 인증서를 획득해야 합니다. 그런 다음 서버에서 CA를 사용하도록 구성해야 합니다. 예를 들어, Nginx에서 SSL을 구성하는 방법은 다음과 같습니다:</p>
<ul>
<li>Nginx 구성 파일 수정(일반적으로 /etc/nginx/nginx.conf 또는 /etc/nginx/sites-available/your_site에 위치).</li>
<li>서버 블록에 SSL 설정 추가:</li>
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
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span> ssl</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> yourdomain.com</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">ssl_certificate</span> /path/to/your/fullchain.pem</span><span class="token punctuation">;</span> <span class="token comment"># CA로부터 fullchain.pem의 경로</span>
    <span class="token directive"><span class="token keyword">ssl_certificate_key</span> /path/to/your/privkey.pem</span><span class="token punctuation">;</span> <span class="token comment"># CA로부터 개인 키의 경로</span>

    <span class="token comment"># 강력한 암호화 설정 (Mozilla의 SSL 구성 생성기의 권장 사항 사용을 고려해보세요)</span>
    <span class="token directive"><span class="token keyword">ssl_protocols</span> TLSv1.2 TLSv1.3</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_ciphers</span> <span class="token string">'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256...'</span></span><span class="token punctuation">;</span>

    <span class="token comment"># 다른 서버 구성...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>클라우드 서비스를 사용하면 SSL/TLS를 처리하는 완전 관리형 서비스를 제공합니다. 예를 들어, AWS에서 호스팅되는 서비스에 AWS Certificate Manager를 사용할 수 있습니다.</p>
<h2 id="data-enrcyption의-구현-방법" tabindex="-1"><a class="header-anchor" href="#data-enrcyption의-구현-방법" aria-hidden="true">#</a> Data Enrcyption의 구현 방법</h2>
<p>데이터 암호화를 데이터베이스 수준, 응용프로그램 수준 또는 클라우드 기반 도구를 사용하여 구현할 수 있습니다.</p>
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
<li>데이터베이스 수준 암호화: 많은 최신 데이터베이스들이 내장 암호화 기능을 제공합니다. 예를 들어:</li>
<li>SQL Server: Transparent Data Encryption.</li>
<li>MySQL: InnoDB tablespace encryption.</li>
<li>MongoDB: Encrypted Storage Engine.</li>
<li>응용 프로그램 수준 암호화: 민감한 데이터에 대해 데이터베이스에 저장하기 전에도 암호화해야 합니다. 이를 위해 cryptography와 같은 라이브러리를 사용할 수 있습니다:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>from cryptography<span class="token punctuation">.</span>fernet <span class="token keyword">import</span> Fernet

# 키 생성
key <span class="token operator">=</span> Fernet<span class="token punctuation">.</span><span class="token function">generate_key</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
cipher_suite <span class="token operator">=</span> <span class="token function">Fernet</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>

# 데이터 암호화
encrypted_data <span class="token operator">=</span> cipher_suite<span class="token punctuation">.</span><span class="token function">encrypt</span><span class="token punctuation">(</span>b<span class="token string">"민감한 데이터"</span><span class="token punctuation">)</span>
# 데이터 복호화
decrypted_data <span class="token operator">=</span> cipher_suite<span class="token punctuation">.</span><span class="token function">decrypt</span><span class="token punctuation">(</span>encrypted_data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="마지막으로" tabindex="-1"><a class="header-anchor" href="#마지막으로" aria-hidden="true">#</a> 마지막으로</h1>
<p>견고한 API 권한 부여는 디지털 자산을 안전하게 보호하고 사용자 신뢰를 유지하는 데 중요합니다.</p>
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
<p>여기서 논의된 최적의 방법을 도입함으로써 개발자들은 다양한 사이버 위협에 대한 컴플라이언스와 보호를 보장하면서 응용 프로그램의 API 보안을 크게 향상시킬 수 있습니다.</p>
<h1 id="더-알아보기" tabindex="-1"><a class="header-anchor" href="#더-알아보기" aria-hidden="true">#</a> 더 알아보기</h1>
</div></template>
