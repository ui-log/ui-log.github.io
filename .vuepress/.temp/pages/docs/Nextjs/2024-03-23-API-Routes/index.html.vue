<template><div><h1 id="api-경로" tabindex="-1"><a class="header-anchor" href="#api-경로" aria-hidden="true">#</a> API 경로</h1>
<blockquote>
<p>좋아 알아두세요: App Router를 사용 중이라면 API 경로 대신 Server Components 또는 Route Handlers를 사용할 수 있습니다.</p>
</blockquote>
<p>API 경로는 Next.js로 공개 API를 구축하는 솔루션을 제공합니다.</p>
<p>폴더 pages/api 안의 모든 파일은 /api/*에 매핑되어 페이지가 아닌 API 엔드포인트로 처리됩니다. 이들은 서버 측 번들이며 클라이언트 측 번들 크기를 늘리지 않습니다.</p>
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
<p>예를 들어, 다음 API 경로는 상태 코드 200을 가진 JSON 응답을 반환합니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextApiRequest<span class="token punctuation">,</span> NextApiResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">ResponseData</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span>req<span class="token operator">:</span> NextApiRequest<span class="token punctuation">,</span> res<span class="token operator">:</span> NextApiResponse<span class="token operator">&lt;</span>ResponseData<span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">"Hello from Next.js!"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아 두면 좋은 사항:
API Routes는 CORS 헤더를 지정하지 않습니다. 이는 기본적으로 동일 출처만 가능합니다. CORS 요청 도우미로 요청 핸들러를 래핑하여 이러한 동작을 사용자 정의할 수 있습니다.</p>
</blockquote>
<ul>
<li>API Routes는 정적 익스포트와 함께 사용할 수 없습니다. 그러나 App Router의 Route Handlers는 사용할 수 있습니다.</li>
<li>API Routes는 next.config.js의 pageExtensions 구성에 의해 영향을 받을 것입니다.</li>
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
<h2 id="매개변수" tabindex="-1"><a class="header-anchor" href="#매개변수" aria-hidden="true">#</a> 매개변수</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">req</span><span class="token operator">:</span> NextApiRequest<span class="token punctuation">,</span> <span class="token literal-property property">res</span><span class="token operator">:</span> NextApiResponse</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token operator">/</span> <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>req: http.IncomingMessage의 인스턴스</li>
<li>res: http.ServerResponse의 인스턴스</li>
</ul>
<h2 id="http-메소드" tabindex="-1"><a class="header-anchor" href="#http-메소드" aria-hidden="true">#</a> HTTP 메소드</h2>
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
<p>API 라우트에서 다양한 HTTP 메소드를 처리하려면 요청 핸들러에서 req.method를 사용할 수 있어요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextApiRequest<span class="token punctuation">,</span> NextApiResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span>req<span class="token operator">:</span> NextApiRequest<span class="token punctuation">,</span> res<span class="token operator">:</span> NextApiResponse<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">"POST"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// POST 요청 처리</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 다른 모든 HTTP 메소드 처리</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="요청-도우미" tabindex="-1"><a class="header-anchor" href="#요청-도우미" aria-hidden="true">#</a> 요청 도우미</h2>
<p>API 라우트는 수신된 요청(req)을 구문 분석하는 내장된 요청 도우미를 제공합니다:</p>
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
<li>req.cookies - 요청으로 받은 쿠키를 포함하는 객체입니다. 기본값은 {}</li>
<li>req.query - 쿼리 문자열을 포함하는 객체입니다. 기본값은 {}</li>
<li>req.body - content-type으로 구문 분석된 본문을 포함하는 객체이거나 본문이 전송되지 않았을 경우 null입니다</li>
</ul>
<h3 id="사용자-정의-구성" tabindex="-1"><a class="header-anchor" href="#사용자-정의-구성" aria-hidden="true">#</a> 사용자 정의 구성</h3>
<p>각 API 라우트는 다음과 같은 기본 구성을 변경하는 구성 객체를 내보낼 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">api</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">bodyParser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">sizeLimit</span><span class="token operator">:</span> <span class="token string">"1mb"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 함수 실행에 허용되는 최대 시간(초)을 지정합니다</span>
  <span class="token literal-property property">maxDuration</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>bodyParser가 자동으로 활성화되어 있습니다. 본문을 스트림으로 또는 raw-body로 사용하려면 false로 설정할 수 있습니다.</p>
<p>자동 bodyParsing을 비활성화하는 한 가지 사용 사례는 GitHub에서 웹훅 요청의 본문을 확인할 수 있도록 하는 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">api</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">bodyParser</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>bodyParser.sizeLimit은 파싱된 본문의 최대 허용 크기입니다. 바이트와 같은 형식으로 지원되는 어떤 형식도 포함됩니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">api</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">bodyParser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">sizeLimit</span><span class="token operator">:</span> <span class="token string">"500kb"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>externalResolver은 express 또는 connect와 같은 외부 리졸버에 의해 처리되는 이 루트를 서버에 알려주는 명시적인 플래그입니다. 이 옵션을 활성화하면 미해결된 요청에 대한 경고가 비활성화됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">api</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">externalResolver</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>responseLimit는 API Routes의 응답 본문이 4MB를 초과하는 경우 경고가 자동으로 활성화됩니다.</p>
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
<p>만약 서버리스 환경에서 Next.js를 사용하지 않고 CDN 또는 전용 미디어 호스트를 사용하지 않는 것의 성능 영향을 이해한다면, 이 제한을 false로 설정할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">api</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">responseLimit</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>responseLimit는 바이트 수나 bytes에서 지원하는 문자열 형식 중 하나를 취할 수도 있습니다. 예를 들어 1000, <code v-pre>500kb</code>, 또는 <code v-pre>3mb</code>와 같이 지정할 수 있습니다. 이 값은 경고가 표시되기 전 응답의 최대 크기가 됩니다. 기본 값은 4MB입니다. (위 참조)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">api</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">responseLimit</span><span class="token operator">:</span> <span class="token string">"8mb"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<h2 id="응답-도우미" tabindex="-1"><a class="header-anchor" href="#응답-도우미" aria-hidden="true">#</a> 응답 도우미</h2>
<p>서버 응답 객체인 (보통 res로 약칭함)에는 개발자 경험을 향상시키고 새로운 API 엔드포인트를 빠르게 만들도록 돕는 Express.js와 유사한 도우미 메서드 세트가 포함되어 있습니다.</p>
<p>포함된 도우미들은 다음과 같습니다:</p>
<ul>
<li>res.status(code) - 상태 코드를 설정하는 함수입니다. code는 유효한 HTTP 상태 코드여야 합니다.</li>
<li>res.json(body) - JSON 응답을 보냅니다. body는 직렬화 가능한 객체여야 합니다.</li>
<li>res.send(body) - HTTP 응답을 보냅니다. body는 문자열, 객체 또는 버퍼일 수 있습니다.</li>
<li>res.redirect([status,] path) - 지정된 경로나 URL로 리디렉션합니다. status는 유효한 HTTP 상태 코드여야 합니다. 지정되지 않을 경우, status는 &quot;307&quot; &quot;임시 리디렉트&quot;로 기본값이 설정됩니다.</li>
<li>res.revalidate(urlPath) - getStaticProps를 사용하여 필요에 따라 페이지를 다시 유효화합니다. urlPath는 문자열이어야 합니다.</li>
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
<h3 id="응답의-상태-코드-설정하기" tabindex="-1"><a class="header-anchor" href="#응답의-상태-코드-설정하기" aria-hidden="true">#</a> 응답의 상태 코드 설정하기</h3>
<p>클라이언트로 응답을 보낼 때, 응답의 상태 코드를 설정할 수 있어요.</p>
<p>다음 예시는 응답의 상태 코드를 200 (OK)로 설정하고 값이 'Hello from Next.js!'인 message 속성을 가진 JSON 응답을 반환해요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextApiRequest<span class="token punctuation">,</span> NextApiResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">ResponseData</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span>req<span class="token operator">:</span> NextApiRequest<span class="token punctuation">,</span> res<span class="token operator">:</span> NextApiResponse<span class="token operator">&lt;</span>ResponseData<span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">"Hello from Next.js!"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h3 id="json-응답-전송" tabindex="-1"><a class="header-anchor" href="#json-응답-전송" aria-hidden="true">#</a> JSON 응답 전송</h3>
<p>클라이언트에 응답을 보낼 때 JSON 응답을 보낼 수 있습니다. 이는 직렬화 가능한 객체여야 합니다. 실제 응용 프로그램에서는 요청된 엔드포인트의 결과에 따라 요청의 상태를 클라이언트에게 알려주고 싶을 수 있습니다.</p>
<p>다음 예시는 상태 코드 200 (OK)와 비동기 작업의 결과를 포함한 JSON 응답을 보냅니다. try catch 블록에 포함되어 있어 발생할 수 있는 모든 오류를 처리하고, 적절한 상태 코드와 오류 메시지가 클라이언트로 보내집니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextApiRequest<span class="token punctuation">,</span> NextApiResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span>req<span class="token operator">:</span> NextApiRequest<span class="token punctuation">,</span> res<span class="token operator">:</span> NextApiResponse<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">someAsyncOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> result <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> error<span class="token operator">:</span> <span class="token string">"데이터 로드에 실패했습니다."</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
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
<h3 id="http-응답-보내기" tabindex="-1"><a class="header-anchor" href="#http-응답-보내기" aria-hidden="true">#</a> HTTP 응답 보내기</h3>
<p>HTTP 응답을 보내는 방법은 JSON 응답을 보내는 것과 동일합니다. 유일한 차이점은 응답 본문이 문자열, 객체 또는 버퍼일 수 있다는 것입니다.</p>
<p>다음 예시는 상태 코드가 200(OK)인 HTTP 응답을 보내고 비동기 작업의 결과를 포함합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextApiRequest<span class="token punctuation">,</span> NextApiResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span>req<span class="token operator">:</span> NextApiRequest<span class="token punctuation">,</span> res<span class="token operator">:</span> NextApiResponse<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">someAsyncOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> result <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> error<span class="token operator">:</span> <span class="token string">"데이터를 가져오는 데 실패했습니다"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
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
<h3 id="지정된-경로-또는-url로-리디렉션" tabindex="-1"><a class="header-anchor" href="#지정된-경로-또는-url로-리디렉션" aria-hidden="true">#</a> 지정된 경로 또는 URL로 리디렉션</h3>
<p>예를 들어 양식을 제출한 후에 클라이언트를 지정된 경로나 URL로 리디렉션하고 싶을 수 있습니다.</p>
<p>다음 예시는 양식이 성공적으로 제출된 경우 클라이언트를 / 경로로 리디렉션합니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextApiRequest<span class="token punctuation">,</span> NextApiResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span>req<span class="token operator">:</span> NextApiRequest<span class="token punctuation">,</span> res<span class="token operator">:</span> NextApiResponse<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">handleFormInputAsync</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token punctuation">,</span> message <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token number">307</span><span class="token punctuation">,</span> <span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> error<span class="token operator">:</span> <span class="token string">"데이터 검색 실패"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h3 id="typescript-타입-추가하기" tabindex="-1"><a class="header-anchor" href="#typescript-타입-추가하기" aria-hidden="true">#</a> TypeScript 타입 추가하기</h3>
<p>Next 모듈에서 NextApiRequest와 NextApiResponse 타입을 가져와서 API Routes를 더 안전하게 만들 수 있어요. 더불어 응답 데이터에도 타입을 지정할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> NextApiRequest<span class="token punctuation">,</span> NextApiResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

type ResponseData <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">req</span><span class="token operator">:</span> NextApiRequest<span class="token punctuation">,</span> <span class="token literal-property property">res</span><span class="token operator">:</span> NextApiResponse<span class="token operator">&lt;</span>ResponseData<span class="token operator">></span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"안녕, Next.js!"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>참고: NextApiRequest의 body는 어떤 형태의 데이터라도 포함될 수 있기 때문에 any로 지정됩니다. 데이터를 사용하기 전에 런타임에서 body의 타입/구조를 검증해야 해요.</p>
</blockquote>
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
<h2 id="동적-api-라우트" tabindex="-1"><a class="header-anchor" href="#동적-api-라우트" aria-hidden="true">#</a> 동적 API 라우트</h2>
<p>API 라우트는 동적 라우트를 지원하며, pages/에 사용되는 파일 이름 규칙을 따릅니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextApiRequest<span class="token punctuation">,</span> NextApiResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span>req<span class="token operator">:</span> NextApiRequest<span class="token punctuation">,</span> res<span class="token operator">:</span> NextApiResponse<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> pid <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>query<span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Post: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>pid<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 /api/post/abc로 요청하면 텍스트 &quot;Post: abc&quot;로 응답합니다.</p>
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
<h3 id="모든-api-경로-포착하기" tabindex="-1"><a class="header-anchor" href="#모든-api-경로-포착하기" aria-hidden="true">#</a> 모든 API 경로 포착하기</h3>
<p>API 경로는 괄호 안에 세 개의 점(...)을 추가하여 모든 경로를 캐치할 수 있습니다. 예를 들어:</p>
<ul>
<li>pages/api/post/[...slug].js 는 /api/post/a에 일치하지만 /api/post/a/b, /api/post/a/b/c 등에도 일치합니다.</li>
</ul>
<blockquote>
<p>참고: slug 대신 [...param]과 같이 다른 이름을 사용할 수 있습니다.</p>
</blockquote>
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
<p>매칭된 매개변수는 쿼리 매개변수로 페이지로 전송됩니다. (예시에서는 슬러그) 이는 항상 배열 형태로 전달될 것이며, 따라서 경로 /api/post/a는 다음과 같은 쿼리 객체를 가지게 될 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token string-property property">"slug"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"a"</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>/api/post/a/b와 같은 경우, 그리고 다른 매칭된 경로의 경우, 새로운 매개변수가 배열에 추가됩니다. 아래와 같이:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token string-property property">"slug"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
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
<p>예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextApiRequest<span class="token punctuation">,</span> NextApiResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span>req<span class="token operator">:</span> NextApiRequest<span class="token punctuation">,</span> res<span class="token operator">:</span> NextApiResponse<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> slug <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>query<span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Post: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>slug<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">", "</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 /api/post/a/b/c로의 요청에는 다음 텍스트가 응답됩니다: Post: a, b, c.</p>
<h3 id="선택적-캐치-올-api-경로" tabindex="-1"><a class="header-anchor" href="#선택적-캐치-올-api-경로" aria-hidden="true">#</a> 선택적 캐치 올 API 경로</h3>
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
<p>모든 경로를 선택적으로 만들려면 매개변수를 이중 대괄호로 포함시키면 됩니다 ([[...slug]]).</p>
<p>예를 들어, pages/api/post/[[...slug]].js는 /api/post, /api/post/a, /api/post/a/b 등과 매치됩니다.</p>
<p>모든 경로와 선택적인 모든 경로의 주요 차이점은 선택적인 경우, 매개변수 없이도 라우트가 일치한다는 것입니다 (위 예시에서는 /api/post도 일치함).</p>
<p>쿼리 객체는 다음과 같습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token punctuation">}</span> <span class="token comment">// GET `/api/post` (빈 객체)</span>
<span class="token punctuation">{</span> <span class="token string-property property">"slug"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"a"</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token comment">// `GET /api/post/a` (단일 요소 배열)</span>
<span class="token punctuation">{</span> <span class="token string-property property">"slug"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token comment">// `GET /api/post/a/b` (다중 요소 배열)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="주의사항" tabindex="-1"><a class="header-anchor" href="#주의사항" aria-hidden="true">#</a> 주의사항</h3>
<ul>
<li>미리 정의된 API 경로가 동적 API 경로보다 우선하며, 동적 API 경로가 캐치올 API 경로보다 우선합니다. 다음 예제를 살펴보세요:
pages/api/post/create.js - /api/post/create와 일치합니다
pages/api/post/[pid].js - /api/post/1, /api/post/abc 등과 일치하지만 /api/post/create와는 일치하지 않습니다
pages/api/post/[...slug].js - /api/post/1/2, /api/post/a/b/c 등과 일치하지만 /api/post/create, /api/post/abc와는 일치하지 않습니다</li>
<li>pages/api/post/create.js - /api/post/create와 일치합니다</li>
<li>pages/api/post/[pid].js - /api/post/1, /api/post/abc 등과 일치하지만 /api/post/create와는 일치하지 않습니다</li>
<li>pages/api/post/[...slug].js - /api/post/1/2, /api/post/a/b/c 등과 일치하지만 /api/post/create, /api/post/abc와는 일치하지 않습니다</li>
</ul>
<h2 id="edge-api-경로" tabindex="-1"><a class="header-anchor" href="#edge-api-경로" aria-hidden="true">#</a> Edge API 경로</h2>
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
<p>API Routes를 Edge 런타임과 함께 사용하려면 App Router를 점진적으로 도입하고 Route Handlers를 사용하는 것을 권장합니다.</p>
<p>Route Handlers 함수 시그니처는 이성적이며, 동일한 함수를 Edge와 Node.js 런타임 모두에 사용할 수 있습니다.</p>
</div></template>
