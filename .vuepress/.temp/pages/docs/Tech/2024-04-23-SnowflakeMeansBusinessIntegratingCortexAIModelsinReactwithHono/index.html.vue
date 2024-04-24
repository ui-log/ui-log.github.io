<template><div><p>Snowflake Cortex는 Snowflake의 AI에 대한 큰 기반으로, 응용 프로그램에 통합할 수 있는 다양한 LLM 모델 및 기능을 제공하여 새로운 가능성을 탐험할 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-04-23-SnowflakeMeansBusinessIntegratingCortexAIModelsinReactwithHono/img/SnowflakeMeansBusinessIntegratingCortexAIModelsinReactwithHono_0.png" alt="Snowflake Cortex"></p>
<p>이 튜토리얼에서는 Snowflake Cortex 기능과 모델을 React 프론트엔드에서 Hono와 함께 사용하는 방법을 살펴보겠습니다.</p>
<p>웹 사이트로 바로 이동하려면 — <a href="https://ohno-1sq.pages.dev" target="_blank" rel="noopener noreferrer">https://ohno-1sq.pages.dev<ExternalLinkIcon/></a></p>
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
<p>그리고 코드는 https://github.com/kaarthik108/ohno</p>
<h2 id="hono란-무엇인가요" tabindex="-1"><a class="header-anchor" href="#hono란-무엇인가요" aria-hidden="true">#</a> hono란 무엇인가요?</h2>
<p>HonoX는 전체 스택 웹 사이트 또는 웹 API를 만드는 데 사용할 수 있는 간단하고 빠른 메타 프레임워크입니다. 이를 통해 백엔드 API를 만들고 프런트엔드 응용 프로그램과 연결하는 과정을 간소화할 수 있습니다.</p>
<h2 id="왜-snowflake-cortex를-선택해야-하나요" tabindex="-1"><a class="header-anchor" href="#왜-snowflake-cortex를-선택해야-하나요" aria-hidden="true">#</a> 왜 snowflake Cortex를 선택해야 하나요?</h2>
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
<p>Snowflake Cortex는 기존 데이터 웨어하우스 내에서 언어 모델을 활용할 수 있는 안전하고 원활한 방법을 제공합니다. Snowflake Cortex 기능은 Snowflake 환경 내에서 직접 실행되므로 추가 인프라를 관리할 필요가 없으며, 서버리스 및 개인 정보 보호에 초점을 맞춘 솔루션을 제공합니다.</p>
<h2 id="오늘은-무엇을-만들까요" tabindex="-1"><a class="header-anchor" href="#오늘은-무엇을-만들까요" aria-hidden="true">#</a> 오늘은 무엇을 만들까요 ?</h2>
<p>우리는 chatgpt와 비슷한 간단한 AI 챗봇을 구축할 것이며, 이를 위해 snowflake의 Cortex에서 AI 모델을 사용할 예정입니다.</p>
<p>백엔드 API를 설정하고 이를 localhost에 배포하는 방법을 살펴볼 것입니다 😜 (맞아, 제대로 읽으셨어요).</p>
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
<p>그리고 이제 우리는 백엔드에서 결과를 가져와 표시하기 위한 프론트엔드 채팅 인터페이스를 만들 것입니다.</p>
<p>기술 스택:</p>
<ul>
<li>React를 사용한 Honox</li>
<li>Shadcn-ui와 Tailwind CSS</li>
<li>Mixtral 8x7B Snowflake Cortex</li>
<li>호스팅은 Cloudflare Pages</li>
<li>선택 사항으로 Cloudflare Tunnel 또는 AWS Lambda</li>
</ul>
<h2 id="백엔드-api-설정하기" tabindex="-1"><a class="header-anchor" href="#백엔드-api-설정하기" aria-hidden="true">#</a> 백엔드 API 설정하기</h2>
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
<p>우리 API는 인증을 처리하고 Snowflake 연결을 설정하며 쿼리를 실행할 것입니다. Cortex 플랫폼과 상호 작용하기 위해 Snowflake Node.js SDK를 사용할 것입니다.</p>
<ul>
<li>hono를 사용하여 라우트를 만들고 요청 본문을 구문 분석하십시오</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">--</span> api<span class="token operator">/</span>snow<span class="token punctuation">.</span>ts
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">POST</span> <span class="token operator">=</span> <span class="token function">createRoute</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> requestBody <span class="token operator">=</span> <span class="token keyword">await</span> c<span class="token punctuation">.</span>req<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>npm을 통해 snowflake-sdk를 설치한 다음 아래 코드를 사용하여 연결을 만드십시오. wrangler.toml 또는 .env.local에 env를 추가해야 합니다 (다른 위치에 배포하는 경우)</li>
</ol>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">--</span> snowflake 연결 생성
<span class="token keyword">import</span> snowflake <span class="token keyword">from</span> <span class="token string">"snowflake-sdk"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">POST</span> <span class="token operator">=</span> <span class="token function">createRoute</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> requestBody <span class="token operator">=</span> <span class="token keyword">await</span> c<span class="token punctuation">.</span>req<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> config <span class="token operator">=</span> env<span class="token operator">&lt;</span><span class="token punctuation">{</span>
    <span class="token constant">ACCOUNT</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token constant">USER_NAME</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token constant">PASSWORD</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token constant">ROLE</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token constant">WAREHOUSE</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token constant">DATABASE</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token constant">SCHEMA</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token keyword">const</span> snowConnect <span class="token operator">=</span> snowflake<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">account</span><span class="token operator">:</span> config<span class="token punctuation">.</span><span class="token constant">ACCOUNT</span><span class="token punctuation">,</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> config<span class="token punctuation">.</span><span class="token constant">USER_NAME</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> config<span class="token punctuation">.</span><span class="token constant">PASSWORD</span><span class="token punctuation">,</span>
    <span class="token literal-property property">role</span><span class="token operator">:</span> config<span class="token punctuation">.</span><span class="token constant">ROLE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">warehouse</span><span class="token operator">:</span> config<span class="token punctuation">.</span><span class="token constant">WAREHOUSE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">database</span><span class="token operator">:</span> config<span class="token punctuation">.</span><span class="token constant">DATABASE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">schema</span><span class="token operator">:</span> config<span class="token punctuation">.</span><span class="token constant">SCHEMA</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  snowflake<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">ocspFailOpen</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>SQL 쿼리(쿼리)를 실행하고 결과를 Promise를 사용하여 기다립니다. 쿼리 실행에 성공하면 반환된 행과 함께 Promise를 해결하고, 그렇지 않으면 오류와 함께 Promise를 거부합니다.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token operator">&lt;</span>any<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      snowConnect<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> conn</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"연결할 수 없음: "</span> <span class="token operator">+</span> err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          snowConnect<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">sqlText</span><span class="token operator">:</span> query<span class="token punctuation">,</span>
            <span class="token function-variable function">complete</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> stmt<span class="token punctuation">,</span> rows</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>
                  <span class="token string">"다음 오류로 인해 명령문 실행에 실패했습니다: "</span> <span class="token operator">+</span>
                    err<span class="token punctuation">.</span>message
                <span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span>rows <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">"Content-Type"</span><span class="token operator">:</span> <span class="token string">"application/json"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 AWS Lambda 또는 Vercel과 같은 nodejs 런타임에서 배포할 수 있습니다.</p>
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
<p>하지만 여기서는 간단함을 위해 로컬호스트에 배포하고 클라우드플레어 터널을 사용하여 인터넷에 노출시킬 것입니다 (일부 차가운 시작을 줄이기 위해서)</p>
<p>두 가지 간단한 단계:</p>
<ul>
<li>클라우드플레어에 도메인이 있는지 확인하세요 — 제로 트러스트 섹션으로 이동하여 터널을 클릭하고 도메인을 사용하여 터널을 생성하고 화면에 나타나는 단계를 따라 로컬 머신에 터널을 설치하세요.</li>
<li>도메인을 로컬 서비스로 지정하세요 — &quot;http://localhost:5100&quot;</li>
</ul>
<p>이제 여러분이 API를 호스팅했고(네, 호스팅했지만 호스팅하지 않았습니다) 준비가 끝났습니다 🚀</p>
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
<p>거의 다 왔어요. 백엔드는 준비됐어요.</p>
<h2 id="이제-프론트엔드를-만들어요" tabindex="-1"><a class="header-anchor" href="#이제-프론트엔드를-만들어요" aria-hidden="true">#</a> 이제 프론트엔드를 만들어요</h2>
<p>프론트엔드에서는 React와 Hono를 사용해서 Snowflake Cortex 모델과 상호작용하는 채팅 인터페이스를 만들 거에요. 클라이언트 측 설정을 만들어 백엔드 API로 쿼리를 보내고 응답을 처리할 거에요.</p>
<p>다음은 백엔드 API로 쿼리를 보내는 방법을 보여주는 코드 조각이에요:</p>
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
<li>API에서 결과를 가져 오는 도우미 함수를 만들어 보세요.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">executeSnowflakeQuery</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">sqlText</span><span class="token operator">:</span> string</span>
<span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span>SnowflakeResponse<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> baseUrl <span class="token operator">=</span> <span class="token string">"http://localhost:5173"</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>baseUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/api/snow</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"POST"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"Content-Type"</span><span class="token operator">:</span> <span class="token string">"application/json"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">query</span><span class="token operator">:</span> sqlText <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"쿼리 실행에 실패했습니다"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token literal-property property">data</span><span class="token operator">:</span> unknown <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> data <span class="token keyword">as</span> SnowflakeResponse<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>클라이언트에서 결과를 사용해 봅시다: sumbit 함수는 기본적으로 cortex 함수가 예상하는 메시지 배열을 형식화하고 메시지 상태를 설정하여 표시할 수 있도록합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handleSnowflakeSubmit</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">inputMessage</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>inputMessage<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> newMessages <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>messages<span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>messages<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">role</span><span class="token operator">:</span> <span class="token string">"user"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> inputMessage<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token function">setMessages</span><span class="token punctuation">(</span>newMessages<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">setInput</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> formattedMessages <span class="token operator">=</span> newMessages
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token parameter">m</span><span class="token punctuation">)</span> <span class="token operator">=></span>
        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">{'role': '</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>m<span class="token punctuation">.</span>role<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">', 'content': '</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>m<span class="token punctuation">.</span>content<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">'</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">"''"</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">'}</span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">", "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> query <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">SELECT SNOWFLAKE.CORTEX.COMPLETE('mixtral-8x7b', [</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>formattedMessages<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">], {'temperature': 1.7, 'max_tokens': 90});</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">executeSnowflakeQuery</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">as</span> any<span class="token punctuation">;</span>

    <span class="token keyword">const</span> responseKey <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>responseKey<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> assistantMessage <span class="token operator">=</span> response<span class="token punctuation">.</span>choices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>messages<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">setMessages</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token operator">...</span>newMessages<span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>newMessages<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">role</span><span class="token operator">:</span> <span class="token string">"assistant"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> assistantMessage<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"쿼리 실행 중 오류 발생:"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      error <span class="token keyword">instanceof</span> <span class="token class-name">Error</span> <span class="token operator">&amp;&amp;</span>
      error<span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">"You are rate limited"</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setIsRateLimited</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setMessages</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token operator">...</span>newMessages<span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>newMessages<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">role</span><span class="token operator">:</span> <span class="token string">"assistant"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">content</span><span class="token operator">:</span> error<span class="token punctuation">.</span>message<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<li>폼 요소: 버튼을 클릭했을 때 위에서 생성한 submit 함수를 호출하는 곳입니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"fixed bottom-10 md:bottom-12 left-0 right-0 flex flex-col justify-center items-center mx-auto bg-transparent w-full z-10 border-none"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>form
            onSubmit<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

             <span class="token keyword">if</span> <span class="token punctuation">(</span>selectedModel <span class="token operator">===</span> <span class="token string">"snowflake"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>input<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  <span class="token function">handleSnowflakeSubmit</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
              
            <span class="token punctuation">}</span><span class="token punctuation">}</span>
            className<span class="token operator">=</span><span class="token string">"bg-stone-900 dark:bg-gray-100 rounded-xl shadow-lg h-12 flex flex-row px-2 items-center w-full max-w-2xl"</span>
          <span class="token operator">></span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"relative flex items-center w-full"</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>input
                name<span class="token operator">=</span><span class="token string">"message"</span>
                value<span class="token operator">=</span><span class="token punctuation">{</span>input<span class="token punctuation">}</span>
                onChange<span class="token operator">=</span><span class="token punctuation">{</span>
                  handleInputChange
                <span class="token punctuation">}</span>
                maxLength<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">150</span><span class="token punctuation">}</span>
                autoFocus
                autoComplete<span class="token operator">=</span><span class="token string">"off"</span>
                disabled<span class="token operator">=</span><span class="token punctuation">{</span>isRateLimited<span class="token punctuation">}</span>
                placeholder<span class="token operator">=</span><span class="token string">"질문을 입력하세요..."</span>
                className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">cn</span><span class="token punctuation">(</span>
                  <span class="token string">"bg-transparent text-white dark:text-black placeholder:text-gray-400 ring-0 outline-none resize-none py-2.5 px-2 font-mono text-sm h-10 w-full transition-all duration-300"</span><span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                    <span class="token string-property property">"cursor-not-allowed"</span><span class="token operator">:</span> isRateLimited<span class="token punctuation">,</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">)</span><span class="token punctuation">}</span>
              <span class="token operator">/</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex items-center"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>button
                  type<span class="token operator">=</span><span class="token string">"submit"</span>
                  disabled<span class="token operator">=</span><span class="token punctuation">{</span>isLoading <span class="token operator">||</span> isRateLimited<span class="token punctuation">}</span>
                  className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">cn</span><span class="token punctuation">(</span>
                    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">text-white dark:text-black dark:bg-gray-100 rounded-lg hover:bg-white/25 focus:bg-white/25 w-8 h-8 aspect-square flex items-center justify-center ring-0 outline-0</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                      <span class="token string-property property">"cursor-not-allowed"</span><span class="token operator">:</span> isRateLimited<span class="token punctuation">,</span>
                    <span class="token punctuation">}</span>
                  <span class="token punctuation">)</span><span class="token punctuation">}</span>
                  aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token string">"메시지 전송"</span>
                <span class="token operator">></span>
                  <span class="token punctuation">{</span>isLoading <span class="token operator">?</span> <span class="token punctuation">(</span>
                    <span class="token operator">&lt;</span>Loader2 className<span class="token operator">=</span><span class="token string">"animate-spin"</span> <span class="token operator">/</span><span class="token operator">></span>
                  <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
                    <span class="token operator">&lt;</span>CornerDownLeft size<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">16</span><span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">"-ml-px"</span> <span class="token operator">/</span><span class="token operator">></span>
                  <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token string">" "</span><span class="token punctuation">}</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>메시지 표시: 메시지 배열을 매핑하고 사용자 또는 도우미 메시지에 따라 스타일을 지정합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> messages<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">m</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
              <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>m<span class="token punctuation">.</span>id<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">""</span><span class="token operator">></span>
                <span class="token punctuation">{</span>m<span class="token punctuation">.</span>role <span class="token operator">===</span> <span class="token string">"user"</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>UserMessage content<span class="token operator">=</span><span class="token punctuation">{</span>m<span class="token punctuation">.</span>content<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>
                <span class="token punctuation">{</span>m<span class="token punctuation">.</span>role <span class="token operator">===</span> <span class="token string">"assistant"</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
                  <span class="token operator">&lt;</span>BotMessage content<span class="token operator">=</span><span class="token punctuation">{</span>m<span class="token punctuation">.</span>content<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">"antialiased"</span> <span class="token operator">/</span><span class="token operator">></span>
                <span class="token punctuation">)</span><span class="token punctuation">}</span>
                <span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token punctuation">{</span>messagesEndRef<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>우리는 Snowflake의 Cortex 위에 구축된 ChatGPT와 비슷한 웹사이트를 갖고 있어요.</p>
<h2 id="전체-배포된-코드를-확인하세요" tabindex="-1"><a class="header-anchor" href="#전체-배포된-코드를-확인하세요" aria-hidden="true">#</a> 전체 배포된 코드를 확인하세요</h2>
<ul>
<li>Github: <a href="https://github.com/kaarthik108/ohno" target="_blank" rel="noopener noreferrer">https://github.com/kaarthik108/ohno<ExternalLinkIcon/></a></li>
<li>웹사이트: <a href="https://ohno-1sq.pages.dev/" target="_blank" rel="noopener noreferrer">https://ohno-1sq.pages.dev/<ExternalLinkIcon/></a></li>
</ul>
<p>더 많은 통찰력 있는 콘텐츠를 위해 팔로우하고 저와 함께 오픈소스 세계를 탐험해보세요!</p>
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
<li>k01.dev</li>
<li>Medium: Kaarthikandavar</li>
<li>X: Kaarthikcodes</li>
<li>LinkedIn: Kaarthik</li>
</ul>
</div></template>
