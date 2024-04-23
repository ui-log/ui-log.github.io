<template><div><img src="@source/docs/Nextjs/2024-04-05-StoringTokensinCookieswithReact/img/StoringTokensinCookieswithReact_0.png" />
<h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h1>
<p>토큰 기반 인증은 웹 애플리케이션을 안전하게 보호하는 인기있는 방법입니다. 토큰 기반 인증에서 서버는 토큰(일반적으로 JSON Web Token 또는 JWT)을 생성하고 클라이언트에게 보내며, 클라이언트는 각 요청과 함께 토큰을 보내어 자신을 인증합니다. 토큰 기반 인증의 한 가지 어려움은 클라이언트 측에서 토큰을 안전하게 저장하는 것이며, 그것이 여러분이 이 문서를 지금 읽는 이유입니다.</p>
<p>이 문서에서는 Axios 라이브러리를 사용하여 React 애플리케이션에서 쿠키를 사용하여 토큰을 안전하게 저장하고 인증하는 방법을 살펴보겠습니다. 쿠키는 토큰을 저장하는 데 좋은 옵션입니다. 쿠키는 모든 요청과 함께 자동으로 전송되므로 토큰을 각 요청에 수동으로 포함시킬 필요 없이 쉽게 인증 요청을 수행할 수 있습니다.</p>
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
<h1 id="react에서-jwt-토큰을-쿠키에-저장하는-방법" tabindex="-1"><a class="header-anchor" href="#react에서-jwt-토큰을-쿠키에-저장하는-방법" aria-hidden="true">#</a> React에서 JWT 토큰을 쿠키에 저장하는 방법</h1>
<p>JWT 토큰은 자체 포함된 사용자 정보를 담을 수 있기 때문에 토큰 기반 인증의 인기 있는 형태입니다. React에서 JWT 토큰을 쿠키에 저장하기 위해 js-cookie 라이브러리를 사용할 수 있습니다. 먼저 npm install js-cookie 또는 yarn add js-cookie 명령을 사용하여 라이브러리를 설치해야 합니다. 설치가 완료되면 다음과 같이 Cookie 인스턴스를 import하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Cookies <span class="token keyword">from</span> <span class="token string">'js-cookie'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>그런 다음 Cookies.set() 메서드를 사용하여 쿠키의 이름과 값을 설정할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> token <span class="token operator">=</span> <span class="token string">'YOUR_JWT_TOKEN'</span><span class="token punctuation">;</span>
Cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'token'</span><span class="token punctuation">,</span> token<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">expires</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">secure</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 코드에서 우리는 쿠키 이름을 'token'으로 설정하고 값은 JWT 토큰으로 설정했습니다. expires 옵션은 쿠키의 만료 날짜를 설정하고, secure 옵션은 쿠키가 HTTPS를 통해서만 전송되도록 보장합니다. 쿠키를 처리하는 방법을 더 정교하게 설정할 수 있는 여러 다른 속성들이 있지만, 이 두 옵션이 가장 중요한 옵션입니다.</p>
<p>쿠키에서 JWT 토큰을 검색하려면 아래 코드를 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> token <span class="token operator">=</span> Cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'token'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>아래 코드를 통해 우리는 'token'이라는 쿠키에서 JWT 토큰을 가져옵니다.</p>
<h1 id="axios를-사용한-쿠키-기반-인증-구현" tabindex="-1"><a class="header-anchor" href="#axios를-사용한-쿠키-기반-인증-구현" aria-hidden="true">#</a> Axios를 사용한 쿠키 기반 인증 구현</h1>
<p>Axios를 사용하여 쿠키 기반 토큰을 사용하여 요청을 인증하려면 axios.defaults.withCredentials 속성을 true로 구성해야 합니다. 아래는 그 방법입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span>

axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>withCredentials <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/data'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>withCredentials 속성을 true로 설정하여 Axios가 요청에 쿠키를 포함하도록합니다. 그런 다음 <code v-pre>/api/data</code> 엔드포인트로 GET 요청을 보내고 응답 데이터를 콘솔에 로깅합니다.</p>
<h2 id="요청-프로세서-사용하기" tabindex="-1"><a class="header-anchor" href="#요청-프로세서-사용하기" aria-hidden="true">#</a> 요청 프로세서 사용하기</h2>
<p>업계에서 데이터를 검색한 후에는 데이터를 처리하고 변환하는 데 도움이 되는 요청 프로세서를 사용하는 것이 항상 더 좋은 방법입니다. 이를 통해 적절한 코드 분할을 수행하고 API 호출 엔드 포인트를 클래스 서비스로 분리하거나 단순한 함수로 사용할 수 있습니다. 자세한 내용은 여기에서 자체 사용자 정의된 요청 프로세서를 만드는 방법을 알아보세요.</p>
<h2 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h2>
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
<p>요즘 쿠키를 사용하여 Axios 라이브러리를 활용해 React 애플리케이션에서 토큰을 안전하게 저장하고 인증하는 방법에 대해 알아보았어요. 쿠키를 사용하여 토큰을 저장함으로써 웹 애플리케이션의 보안성과 성능을 향상시킬 수 있어요. 하지만 쿠키는 크로스 사이트 스크립팅(XSS) 및 크로스 사이트 요청 위조(CSRF)와 같은 일부 공격에 취약할 수 있음을 기억하는 것이 중요해요. 따라서 httpOnly 플래그를 설정하고 CSRF 보호를 구현하는 등 추가 조치를 취해 쿠키를 안전하게 유지해야 해요. 또한, 사용자에게 브라우저 쿠키에 특정 정보를 저장한다는 것을 알리는 팝업이나 모달을 통해 알림을 주는 것도 중요합니다.</p>
<p>쿠키를 사용한 토큰 기반 인증을 구현함으로써 사용자에게 안전하고 편리한 인증 경험을 제공할 수 있어요.</p>
</div></template>
