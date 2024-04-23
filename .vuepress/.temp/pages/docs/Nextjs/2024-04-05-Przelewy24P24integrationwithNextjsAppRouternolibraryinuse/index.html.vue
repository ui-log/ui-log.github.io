<template><div><p><img src="@source/docs/Nextjs/2024-04-05-Przelewy24P24integrationwithNextjsAppRouternolibraryinuse/img/Przelewy24P24integrationwithNextjsAppRouternolibraryinuse_0.png" alt="Przelewy24 Payment Integration without External Libraries"></p>
<p>외부 결제 라이브러리를 의존하지 않고 Przelewy24 결제 요청을 생성하는 것은 흥미로운 도전으로, 결제 프로세스에 대한 깊은 통찰력과 통합에 대한 더 큰 제어력을 제공할 수 있습니다. 여기에서는 Next.js 14 및 웹 애플리케이션을 구축하는 인기 있는 React 프레임워크로 API를 구축하는 과정을 안내해 드리겠습니다.</p>
<p>저장소를 확인하고 싶으시면 여기를 참고해주세요.</p>
<p>P24 - Przelewy24는 폴란드에서 국내 결제 기관으로 인정받으며, 승인 및 정산 메커니즘을 포함한 다양한 결제 서비스를 제공합니다. Przelewy24 API를 활용하기 위해 상인은 먼저 P24 관리 패널에서 계정을 설정해야 합니다. 이 등록 프로세스를 통해 상인은 계정 잔액을 감시하고, 클라이언트 결제를 모니터링하고, 환불을 처리하는 등 다양한 도구를 활용할 수 있습니다.</p>
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
<p>1단계: Next.js 애플리케이션 설정</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>next<span class="token operator">-</span>app@latest my<span class="token operator">-</span>p24<span class="token operator">-</span>app
cd my<span class="token operator">-</span>p24<span class="token operator">-</span>app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2단계: 결제 API 구현</p>
<p>Next.js 애플리케이션에서 P24 거래를 생성하는 요청을 처리해야합니다. 필요한 모듈을 가져와주세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/server'</span>
<span class="token keyword">import</span> crypto <span class="token keyword">from</span> <span class="token string">'crypto'</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 import 구문에는 응답을 보내기 위한 &quot;NextResponse&quot;, 안전한 해시를 생성하기 위한 &quot;crypto&quot;, 그리고 HTTP 요청을 만들기 위한 &quot;axios&quot;가 포함되어 있습니다.</p>
<p>CORS 헤더를 정의합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> corsHeaders <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">'Access-Control-Allow-Origin'</span><span class="token operator">:</span> <span class="token string">'*'</span><span class="token punctuation">,</span>
  <span class="token string-property property">'Access-Control-Allow-Methods'</span><span class="token operator">:</span> <span class="token string">'POST, GET, PUT, DELETE, OPTIONS'</span><span class="token punctuation">,</span>
  <span class="token string-property property">'Access-Control-Allow-Headers'</span><span class="token operator">:</span> <span class="token string">'Content-Type, Authorization'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 헤더들은 Cross-Origin Resource Sharing(CORS)를 활성화하여 다른 도메인에서 API를 호출할 수 있도록 합니다.</p>
<p>P24에서 요구하는 SHA-384 해시를 위한 유틸리티 함수 만들기</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">calculateSHA384</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> hash <span class="token operator">=</span> crypto<span class="token punctuation">.</span><span class="token function">createHash</span><span class="token punctuation">(</span><span class="token string">'sha384'</span><span class="token punctuation">)</span>
  hash<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token keyword">return</span> hash<span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">'hex'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 함수는 주어진 데이터 문자열의 SHA-384 해시를 계산합니다. 이는 P24에 요청을 서명하기 위해 필요합니다.</p>
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
<p>P24 클래스 정의</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 라이브러리 동작을 모방하기 위한 P24 클래스 정의</span>
<span class="token keyword">class</span> <span class="token class-name">P24</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">posId<span class="token punctuation">,</span> apiKey<span class="token punctuation">,</span> crcKey<span class="token punctuation">,</span> merchantId<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">sandbox</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>posId <span class="token operator">=</span> posId
    <span class="token keyword">this</span><span class="token punctuation">.</span>apiKey <span class="token operator">=</span> apiKey
    <span class="token keyword">this</span><span class="token punctuation">.</span>crcKey <span class="token operator">=</span> crcKey
    <span class="token keyword">this</span><span class="token punctuation">.</span>merchantId <span class="token operator">=</span> merchantId
    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options
    <span class="token keyword">this</span><span class="token punctuation">.</span>client <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">'https://sandbox.przelewy24.pl/api/v1'</span><span class="token punctuation">,</span> <span class="token comment">// 적절한 베이스 URL로 업데이트</span>
      <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">username</span><span class="token operator">:</span> posId<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">password</span><span class="token operator">:</span> apiKey<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 거래 생성 메소드</span>
  <span class="token keyword">async</span> <span class="token function">createTransaction</span><span class="token punctuation">(</span><span class="token parameter">order</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> hashData <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">sessionId</span><span class="token operator">:</span> order<span class="token punctuation">.</span>sessionId<span class="token punctuation">,</span>
        <span class="token literal-property property">merchantId</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>merchantId<span class="token punctuation">,</span>
        <span class="token literal-property property">amount</span><span class="token operator">:</span> order<span class="token punctuation">.</span>amount<span class="token punctuation">,</span>
        <span class="token literal-property property">currency</span><span class="token operator">:</span> order<span class="token punctuation">.</span>currency<span class="token punctuation">,</span>
        <span class="token literal-property property">crc</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>crcKey<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> sign <span class="token operator">=</span> <span class="token function">calculateSHA384</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>hashData<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> orderData <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>order<span class="token punctuation">,</span>
        <span class="token literal-property property">posId</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>posId<span class="token punctuation">,</span>
        <span class="token literal-property property">sign</span><span class="token operator">:</span> sign<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>client<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>
        <span class="token string">'/transaction/register'</span><span class="token punctuation">,</span>
        orderData<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>token<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">token</span><span class="token operator">:</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>token<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'Failed to create transaction'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>P24 클래스는 API 자격 증명으로 초기화하고 P24와 거래 등록을 위한 메소드를 포함하는 거래 생성 기능을 캡슐화합니다.</p>
<p>옵션과 POST 요청 처리</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">OPTIONS</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">headers</span><span class="token operator">:</span> corsHeaders <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">POST</span><span class="token punctuation">(</span><span class="token parameter">req</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// POST 요청 처리를 통해 거래 생성</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 함수들은 HTTP OPTIONS 및 POST 요청을 처리하여 CORS를 활성화하고 결제 거래를 처리합니다.</p>
<p>단계 3: 결제 요청 처리</p>
<p>POST 메서드에서 요청 본문에서 필요한 매개변수를 추출하고, P24 자격 증명으로 P24 클래스를 인스턴스화하고 주문 세부 정보로 createTransaction을 호출합니다. 오류를 적절하게 처리하고 거래 결과를 클라이언트에 반환합니다.</p>
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
<p>이 설정의 중요한 측면 중 하나는 sessionID 생성입니다. 이 sessionID는 거래 추적, 유효성 검사 및 환불 처리에 중요합니다. 상인 자체 논리에 따라 고유하게 만들어져야 합니다.</p>
<p>POST 방법의 예시 코드는 다음과 같습니다: /api/p24/route.ts</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">POST</span><span class="token punctuation">(</span><span class="token parameter">req</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> body <span class="token operator">=</span> <span class="token keyword">await</span> req<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> randomSessionId<span class="token punctuation">,</span> amount <span class="token punctuation">}</span> <span class="token operator">=</span> body
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>randomSessionId<span class="token punctuation">,</span> amount<span class="token punctuation">)</span>

  <span class="token keyword">const</span> merchantId <span class="token operator">=</span> <span class="token number">213883</span>
  <span class="token keyword">const</span> posId <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PRZELEWY24_POS_ID</span>
  <span class="token keyword">const</span> crcKey <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PRZELEWY24_CRC_KEY</span>
  <span class="token keyword">const</span> apiKey <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PRZELEWY24_CRC_API_KEY</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">'POST'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> p24 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">P24</span><span class="token punctuation">(</span>posId<span class="token punctuation">,</span> apiKey<span class="token punctuation">,</span> crcKey<span class="token punctuation">,</span> merchantId<span class="token punctuation">)</span> <span class="token comment">// P24 클래스의 인스턴스 생성</span>

      <span class="token comment">// 주문 개체 생성</span>
      <span class="token keyword">const</span> order <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">merchantId</span><span class="token operator">:</span> merchantId<span class="token punctuation">,</span>
        <span class="token literal-property property">sessionId</span><span class="token operator">:</span> <span class="token string">'xxx12124'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">amount</span><span class="token operator">:</span> amount <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token literal-property property">currency</span><span class="token operator">:</span> <span class="token string">'PLN'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'테스트 주문'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">'john.doe@example.com'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">channel</span><span class="token operator">:</span> <span class="token number">8192</span><span class="token punctuation">,</span>
        <span class="token literal-property property">country</span><span class="token operator">:</span> <span class="token string">'PL'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">language</span><span class="token operator">:</span> <span class="token string">'pl'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">urlReturn</span><span class="token operator">:</span> <span class="token string">'http://localhost:3000'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">urlStatus</span><span class="token operator">:</span> <span class="token string">'http://localhost:3000'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">timeLimit</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token literal-property property">encoding</span><span class="token operator">:</span> <span class="token string">'UTF-8'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 라이브러리 메소드를 사용하여 거래 생성</span>
      <span class="token keyword">const</span> transactionResult <span class="token operator">=</span> <span class="token keyword">await</span> p24<span class="token punctuation">.</span><span class="token function">createTransaction</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span>

      <span class="token comment">// 클라이언트에 응답 전송</span>
      <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>transactionResult<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">headers</span><span class="token operator">:</span> corsHeaders <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
      <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">'내부 서버 오류'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">headers</span><span class="token operator">:</span> corsHeaders<span class="token punctuation">,</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">500</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">'허용되지 않는 메소드'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">headers</span><span class="token operator">:</span> corsHeaders<span class="token punctuation">,</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">405</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>/api/p24/route.ts 파일의 전체 코드:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/server'</span>
<span class="token keyword">import</span> crypto <span class="token keyword">from</span> <span class="token string">'crypto'</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span>

<span class="token keyword">const</span> corsHeaders <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">'Access-Control-Allow-Origin'</span><span class="token operator">:</span> <span class="token string">'*'</span><span class="token punctuation">,</span>
  <span class="token string-property property">'Access-Control-Allow-Methods'</span><span class="token operator">:</span> <span class="token string">'POST, GET, PUT, DELETE, OPTIONS'</span><span class="token punctuation">,</span>
  <span class="token string-property property">'Access-Control-Allow-Headers'</span><span class="token operator">:</span> <span class="token string">'Content-Type, Authorization'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// SHA-384 해시를 계산하는 함수</span>
<span class="token keyword">function</span> <span class="token function">calculateSHA384</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> hash <span class="token operator">=</span> crypto<span class="token punctuation">.</span><span class="token function">createHash</span><span class="token punctuation">(</span><span class="token string">'sha384'</span><span class="token punctuation">)</span>
  hash<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token keyword">return</span> hash<span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">'hex'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 라이브러리의 동작을 모방하기 위한 P24 클래스 정의</span>
<span class="token keyword">class</span> <span class="token class-name">P24</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">posId<span class="token punctuation">,</span> apiKey<span class="token punctuation">,</span> crcKey<span class="token punctuation">,</span> merchantId<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">sandbox</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>posId <span class="token operator">=</span> posId
    <span class="token keyword">this</span><span class="token punctuation">.</span>apiKey <span class="token operator">=</span> apiKey
    <span class="token keyword">this</span><span class="token punctuation">.</span>crcKey <span class="token operator">=</span> crcKey
    <span class="token keyword">this</span><span class="token punctuation">.</span>merchantId <span class="token operator">=</span> merchantId
    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options
    <span class="token keyword">this</span><span class="token punctuation">.</span>client <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">'https://sandbox.przelewy24.pl/api/v1'</span><span class="token punctuation">,</span> <span class="token comment">// 적절한 기본 URL로 업데이트</span>
      <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">username</span><span class="token operator">:</span> posId<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">password</span><span class="token operator">:</span> apiKey<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 거래 생성 메소드</span>
  <span class="token keyword">async</span> <span class="token function">createTransaction</span><span class="token punctuation">(</span><span class="token parameter">order</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> hashData <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">sessionId</span><span class="token operator">:</span> order<span class="token punctuation">.</span>sessionId<span class="token punctuation">,</span>
        <span class="token literal-property property">merchantId</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>merchantId<span class="token punctuation">,</span>
        <span class="token literal-property property">amount</span><span class="token operator">:</span> order<span class="token punctuation">.</span>amount<span class="token punctuation">,</span>
        <span class="token literal-property property">currency</span><span class="token operator">:</span> order<span class="token punctuation">.</span>currency<span class="token punctuation">,</span>
        <span class="token literal-property property">crc</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>crcKey<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> sign <span class="token operator">=</span> <span class="token function">calculateSHA384</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>hashData<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> orderData <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>order<span class="token punctuation">,</span>
        <span class="token literal-property property">posId</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>posId<span class="token punctuation">,</span>
        <span class="token literal-property property">sign</span><span class="token operator">:</span> sign<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>client<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>
        <span class="token string">'/transaction/register'</span><span class="token punctuation">,</span>
        orderData<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>token<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">token</span><span class="token operator">:</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>token<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'거래 생성에 실패했습니다'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">OPTIONS</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">headers</span><span class="token operator">:</span> corsHeaders <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">POST</span><span class="token punctuation">(</span><span class="token parameter">req</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> body <span class="token operator">=</span> <span class="token keyword">await</span> req<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> randomSessionId<span class="token punctuation">,</span> amount <span class="token punctuation">}</span> <span class="token operator">=</span> body
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>randomSessionId<span class="token punctuation">,</span> amount<span class="token punctuation">)</span>

  <span class="token keyword">const</span> merchantId <span class="token operator">=</span> <span class="token number">213883</span>
  <span class="token keyword">const</span> posId <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PRZELEWY24_POS_ID</span>
  <span class="token keyword">const</span> crcKey <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PRZELEWY24_CRC_KEY</span>
  <span class="token keyword">const</span> apiKey <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PRZELEWY24_CRC_API_KEY</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">'POST'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> p24 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">P24</span><span class="token punctuation">(</span>posId<span class="token punctuation">,</span> apiKey<span class="token punctuation">,</span> crcKey<span class="token punctuation">,</span> merchantId<span class="token punctuation">)</span> <span class="token comment">// P24 클래스의 인스턴스 생성</span>

      <span class="token comment">// 주문 객체 생성</span>
      <span class="token keyword">const</span> order <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">merchantId</span><span class="token operator">:</span> merchantId<span class="token punctuation">,</span>
        <span class="token literal-property property">sessionId</span><span class="token operator">:</span> <span class="token string">'xxx12124'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">amount</span><span class="token operator">:</span> amount <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token literal-property property">currency</span><span class="token operator">:</span> <span class="token string">'PLN'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'테스트 주문'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">'john.doe@example.com'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">channel</span><span class="token operator">:</span> <span class="token number">8192</span><span class="token punctuation">,</span>
        <span class="token literal-property property">country</span><span class="token operator">:</span> <span class="token string">'PL'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">language</span><span class="token operator">:</span> <span class="token string">'pl'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">urlReturn</span><span class="token operator">:</span> <span class="token string">'http://localhost:3000'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">urlStatus</span><span class="token operator">:</span> <span class="token string">'http://localhost:3000'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">timeLimit</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token literal-property property">encoding</span><span class="token operator">:</span> <span class="token string">'UTF-8'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 라이브러리 방법을 사용하여 거래 생성</span>
      <span class="token keyword">const</span> transactionResult <span class="token operator">=</span> <span class="token keyword">await</span> p24<span class="token punctuation">.</span><span class="token function">createTransaction</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span>

      <span class="token comment">// 클라이언트에 응답 보내기</span>
      <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>transactionResult<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">headers</span><span class="token operator">:</span> corsHeaders <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
      <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">'내부 서버 오류'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">headers</span><span class="token operator">:</span> corsHeaders<span class="token punctuation">,</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">500</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">'허용되지 않은 방법'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">headers</span><span class="token operator">:</span> corsHeaders<span class="token punctuation">,</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">405</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 클라이언트 측의 onClick 트리거 예제를 확인해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">onP24Checkout</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/api/p24checkout'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">amount</span><span class="token operator">:</span> fundsInAmount<span class="token punctuation">,</span>
        <span class="token literal-property property">randomSessionId</span><span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1000000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">/* 주문 세부 정보 입력 */</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 사용자를 지불 URL로 리다이렉트</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>paymentUrl<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> data<span class="token punctuation">.</span>paymentUrl
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'지불 URL을 받지 못했습니다'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'에러:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span>
        <span class="token comment">// 에러 처리</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>단계 4: 통합 테스트하기</p>
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
<p>라이브로 전환하기 전에 P24 샌드박스 환경을 사용하여 통합을 철저히 테스트하세요. 거래가 성공적으로 생성되고 결제 프로세스가 예상대로 작동하는지 확인하세요.</p>
<p>단계 5: 결제 방법 검색</p>
<p>다음은 P24 API에서 사용 가능한 결제 방법을 가져오는 '서버 액션'으로 사용할 수 있는 Next.js 14의 코드 조각입니다:</p>
<p>/lib/actions/getPMethods.action.js</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'server'</span>를 사용합니다

<span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/server'</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getPaymentMethods</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> posId <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PRZELEWY24_POS_ID</span>
  <span class="token keyword">const</span> apiKey <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PRZELEWY24_CRC_API_KEY</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>
      <span class="token string">'https://sandbox.przelewy24.pl/api/v1/payment/methods/pl?amount=150&amp;currency=PLN'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">username</span><span class="token operator">:</span> posId<span class="token punctuation">,</span>
          <span class="token literal-property property">password</span><span class="token operator">:</span> apiKey<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>

    <span class="token keyword">return</span> response
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>

    <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">'내부 서버 오류'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>결론</p>
<p>지불 라이브러리를 사용하지 않고 Next.js 애플리케이션에 P24 지불 요청을 직접 통합하면 유연성이 높아지고 지불 프로세스에 대한 깊은 이해가 가능해집니다. 이 접근 방식은 자격 증명의 주의 깊은 처리, 안전한 서명 생성 및 원활한 사용자 결제 경험을 보장하기 위한 적절한 오류 처리를 필요로 합니다.</p>
<p>금융 거래를 다룰 때는 보안과 신뢰성이 중요합니다. 항상 민감한 정보를 암호화하고 입력 데이터를 유효성 검사하며, 안전하고 효율적인 결제 프로세스를 보장하기 위해 통합을 철저히 검사하십시오.</p>
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
<p>즐거운 코딩하세요 😃</p>
<p>피오티르</p>
</div></template>
