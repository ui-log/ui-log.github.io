<template><div><h1 id="오픈텔레미트" tabindex="-1"><a class="header-anchor" href="#오픈텔레미트" aria-hidden="true">#</a> 오픈텔레미트</h1>
<blockquote>
<p>알아두면 좋은 점: 이 기능은 실험적이며, 다음과 같이 experimental.instrumentationHook = true;를 제공하여 명시적으로 참여해야 합니다.</p>
</blockquote>
<p>옵저버빌리티는 Next.js 앱의 동작과 성능을 이해하고 최적화하는 데 중요합니다.</p>
<p>응용 프로그램이 점점 더 복잡해지면 발생할 수 있는 문제를 식별하고 진단하는 것이 점점 어려워집니다. 로깅 및 메트릭과 같은 옵저버빌리티 도구를 활용하여 개발자는 응용 프로그램의 동작에 대한 통찰을 얻고 최적화할 수 있는 영역을 식별할 수 있습니다. 옵저버빌리티를 통해 개발자는 심각한 문제가 되기 전에 문제에 대처하고 더 나은 사용자 경험을 제공할 수 있습니다. 따라서 Next.js 응용 프로그램에서 옵저버빌리티를 사용하여 성능을 향상시키고 리소스를 최적화하며 사용자 경험을 향상시키는 것이 매우 권장됩니다.</p>
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
<p>우리는 당신이 앱을 계측하는 데 OpenTelemetry를 사용하는 것을 권장합니다. 이것은 당신의 코드를 변경하지 않고도 관찰성 제공업체를 변경할 수 있는 플랫폼에 무방한 방식으로 앱을 계측할 수 있게 해줍니다. OpenTelemetry 및 작동 방식에 대한 자세한 내용을 확인하려면 공식 OpenTelemetry 문서를 읽어보세요.</p>
<p>이 문서에서는 Span, Trace 또는 Exporter와 같은 용어를 사용합니다. 이러한 모든 용어는 OpenTelemetry 관측성 기초에서 찾을 수 있습니다.</p>
<p>Next.js는 OpenTelemetry 계측을 기본으로 지원하며, 따라서 이미 Next.js 자체가 계측되어 있습니다. OpenTelemetry를 활성화하면 getStaticProps와 같은 코드를 자동으로 감싸서 유용한 속성이 있는 span에 포함시킬 것입니다.</p>
<h2 id="시작하기" tabindex="-1"><a class="header-anchor" href="#시작하기" aria-hidden="true">#</a> 시작하기</h2>
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
<p>OpenTelemetry은 확장 가능하지만 제대로 설정하려면 상당히 많은 내용을 작성해야 합니다. 그래서 저희는 빠르게 시작할 수 있도록 도와주는 @vercel/otel 패키지를 준비했어요.</p>
<h3 id="vercel-otel-사용하기" tabindex="-1"><a class="header-anchor" href="#vercel-otel-사용하기" aria-hidden="true">#</a> @vercel/otel 사용하기</h3>
<p>시작하려면 먼저 @vercel/otel을 설치해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install @vercel<span class="token operator">/</span>otel
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
<p>다음으로, project의 root 디렉토리에 (또는 사용 중인 경우 src 폴더 안에) <code v-pre>instrumentation.ts</code> (또는 .js) 파일을 만들어주세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> registerOTel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@vercel/otel"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">registerOTel</span><span class="token punctuation">(</span><span class="token punctuation">{</span> serviceName<span class="token operator">:</span> <span class="token string">"next-app"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>추가적인 구성 옵션에 대한 정보는 @vercel/otel 문서를 참조해주세요.</p>
<blockquote>
<p>알아두면 좋은 점</p>
</blockquote>
<ul>
<li>instrumentation 파일은 프로젝트의 root에 있어야하며, 앱이나 페이지 디렉토리 안에 있으면 안 됩니다. src 폴더를 사용하는 경우에는, 파일을 페이지와 앱과 같이 src 안에 넣어야 합니다.</li>
<li>pageExtensions 구성 옵션을 사용하여 접미사를 추가한 경우, instrumentation 파일 이름도 일치하도록 업데이트해야 합니다.</li>
<li>우리는 사용할 수 있는 기본적인 with-opentelemetry 예제를 만들어 두었습니다.</li>
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
<h3 id="수동-opentelemetry-구성" tabindex="-1"><a class="header-anchor" href="#수동-opentelemetry-구성" aria-hidden="true">#</a> 수동 OpenTelemetry 구성</h3>
<p>@vercel/otel 패키지는 많은 구성 옵션을 제공하며 대부분의 일반적인 사용 사례를 해결할 수 있습니다. 하지만 사용자의 요구에 맞지 않는 경우 OpenTelemetry를 수동으로 구성할 수 있습니다.</p>
<p>먼저 OpenTelemetry 패키지를 설치해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install @opentelemetry<span class="token operator">/</span>sdk<span class="token operator">-</span>node @opentelemetry<span class="token operator">/</span>resources @opentelemetry<span class="token operator">/</span>semantic<span class="token operator">-</span>conventions @opentelemetry<span class="token operator">/</span>sdk<span class="token operator">-</span>trace<span class="token operator">-</span>node @opentelemetry<span class="token operator">/</span>exporter<span class="token operator">-</span>trace<span class="token operator">-</span>otlp<span class="token operator">-</span>http
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
<p>이제 instrumentation.ts에서 NodeSDK를 초기화할 수 있습니다. @vercel/otel과 달리 NodeSDK는 엣지 런타임과 호환되지 않으므로 process.env.NEXT_RUNTIME === <code v-pre>nodejs</code> 일 때에만 임포트하는지 확인해야 합니다. Node를 사용할 때만 조건부로 임포트하는 새 파일인 instrumentation.node.ts를 만드는 것을 권장합니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_RUNTIME</span> <span class="token operator">===</span> <span class="token string">"nodejs"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"./instrumentation.node.ts"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NodeSDK <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@opentelemetry/sdk-node"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> OTLPTraceExporter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@opentelemetry/exporter-trace-otlp-http"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Resource <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@opentelemetry/resources"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">SEMRESATTRS_SERVICE_NAME</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@opentelemetry/semantic-conventions"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> SimpleSpanProcessor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@opentelemetry/sdk-trace-node"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> sdk <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NodeSDK</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  resource<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Resource</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token constant">SEMRESATTRS_SERVICE_NAME</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">"next-app"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  spanProcessor<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SimpleSpanProcessor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OTLPTraceExporter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sdk<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게 함으로써 @vercel/otel을 사용하는 것과 같은 효과를 얻을 수 있지만, @vercel/otel에서 노출되지 않는 기능을 수정하고 확장할 수 있습니다. 엣지 런타임 지원이 필요한 경우, @vercel/otel을 사용해야 합니다.</p>
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
<h2 id="opentelemetry-기기의-테스트" tabindex="-1"><a class="header-anchor" href="#opentelemetry-기기의-테스트" aria-hidden="true">#</a> OpenTelemetry 기기의 테스트</h2>
<p>로컬에서 OpenTelemetry 추적을 테스트하려면 호환되는 백엔드를 가진 OpenTelemetry 수집기가 필요합니다. 저희 OpenTelemetry 개발 환경을 사용하는 것을 추천합니다.</p>
<p>모든 것이 잘 작동하면 루트 서버 스패닝이 GET /requested/pathname로 레이블이 지정된 것을 볼 수 있습니다. 해당 추적에서 생성된 다른 모든 스팬은 이 하위에 중첩될 것입니다.</p>
<p>Next.js는 기본적으로 발생하는 스팬보다 더 많은 스팬을 추적합니다. 더 많은 스팬을 보려면 NEXT_OTEL_VERBOSE=1을 설정해야 합니다.</p>
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
<h2 id="배포" tabindex="-1"><a class="header-anchor" href="#배포" aria-hidden="true">#</a> 배포</h2>
<h3 id="오픈텔레메트리-컬렉터-사용" tabindex="-1"><a class="header-anchor" href="#오픈텔레메트리-컬렉터-사용" aria-hidden="true">#</a> 오픈텔레메트리 컬렉터 사용</h3>
<p>오픈텔레메트리 컬렉터를 사용하여 배포할 때는 @vercel/otel을 사용할 수 있습니다. Vercel 또는 자체 호스트에서 모두 작동할 것입니다.</p>
<h4 id="vercel에-배포하기" tabindex="-1"><a class="header-anchor" href="#vercel에-배포하기" aria-hidden="true">#</a> Vercel에 배포하기</h4>
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
<p>오픈텔레멘트리가 Vercel에서 기본 설정으로 작동하도록 확인했습니다.</p>
<p><a href="https://vercel.com/docs" target="_blank" rel="noopener noreferrer">Vercel 문서<ExternalLinkIcon/></a>
를 따라 프로젝트를 관측성 제공 업체에 연결하세요.</p>
<h4 id="셀프-호스팅" tabindex="-1"><a class="header-anchor" href="#셀프-호스팅" aria-hidden="true">#</a> 셀프 호스팅</h4>
<p>다른 플랫폼으로 배포하는 것도 간단합니다. 여러분은 Next.js 앱에서 유래되고 처리된 텔레메트리 데이터를 받기 위해 직접 오픈텔레멘트리 수집기를 실행해야 합니다.</p>
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
<p>위 작업을 하려면 OpenTelemetry Collector 시작 가이드를 따르세요. 이 가이드는 수집기를 설정하고 Next.js 앱에서 데이터를 수신하도록 구성하는 방법을 안내해 줍니다.</p>
<p>수집기가 작동하면 선택한 플랫폼에 Next.js 앱을 배포할 수 있습니다. 각각의 배포 가이드를 따르세요.</p>
<h3 id="사용자-지정-내보내기자" tabindex="-1"><a class="header-anchor" href="#사용자-지정-내보내기자" aria-hidden="true">#</a> 사용자 지정 내보내기자</h3>
<p>OpenTelemetry Collector는 필수가 아닙니다. @vercel/otel 또는 수동 OpenTelemetry 구성을 사용하여 사용자 지정 OpenTelemetry 내보내기자를 사용할 수 있습니다.</p>
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
<h2 id="사용자-지정-span" tabindex="-1"><a class="header-anchor" href="#사용자-지정-span" aria-hidden="true">#</a> 사용자 지정 Span</h2>
<p>OpenTelemetry API를 사용하여 사용자 정의 Span을 추가할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install @opentelemetry<span class="token operator">/</span>api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>다음 예시는 GitHub 스타 수를 가져오는 함수를 보여줍니다. 이 함수는 fetch 요청 결과를 추적하기 위해 사용자 정의 fetchGithubStars span을 추가해요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> trace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@opentelemetry/api"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchGithubStars</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">await</span> trace<span class="token punctuation">.</span><span class="token function">getTracer</span><span class="token punctuation">(</span><span class="token string">"nextjs-example"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">startActiveSpan</span><span class="token punctuation">(</span><span class="token string">"fetchGithubStars"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">span</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
      span<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>register 함수는 새로운 환경에서 코드가 실행되기 전에 실행됩니다. 새로운 스팬을 만들고 시작하면 내보낸 추적에 정확히 추가되어야 합니다.</p>
<h2 id="next-js의-기본-스팬" tabindex="-1"><a class="header-anchor" href="#next-js의-기본-스팬" aria-hidden="true">#</a> Next.js의 기본 스팬</h2>
<p>Next.js는 여러분의 응용프로그램 성능에 유용한 통찰을 제공하기 위해 여러 스팬을 자동으로 측정합니다.</p>
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
<p><code v-pre>&lt;span&gt;</code> 요소의 속성은 OpenTelemetry 시맨틱 규칙을 따릅니다. 또한 다음 네임스페이스의 사용자 정의 속성을 추가합니다:</p>
<ul>
<li>next.span_name - 스팬 이름 복제</li>
<li>next.span_type - 각 스팬 유형에는 고유 식별자가 있음</li>
<li>next.route - 요청의 route 패턴 (예: /[param]/user).</li>
<li>next.rsc (true/false) - 요청이 RSC 요청인지 여부, 예를 들면 prefetch.</li>
<li>next.page
앱 라우터에서 사용하는 내부 값입니다. 이것은 특별한 파일로의 route로 생각할 수 있습니다 (예: page.ts, layout.ts, loading.ts 등). 이 것은 next.route와만 짝지어서 사용될 때만 고유 식별자로 사용할 수 있습니다. 예를 들어 /layout은 /(groupA)/layout.ts와 /(groupB)/layout.ts를 모두 식별할 수 있습니다.</li>
</ul>
<h3 id="http-method-next-route" tabindex="-1"><a class="header-anchor" href="#http-method-next-route" aria-hidden="true">#</a> [http.method] [next.route]</h3>
<ul>
<li>next.span_type: BaseServer.handleRequest</li>
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
<p>이 span은 Next.js 애플리케이션으로 들어오는 각 요청의 루트 span을 나타냅니다. 요청의 HTTP 메서드, 라우트, 대상 및 상태 코드를 추적합니다.</p>
<p>속성:</p>
<ul>
<li>일반적인 HTTP 속성
http.method
http.status_code</li>
<li>http.method</li>
<li>http.status_code</li>
<li>서버 HTTP 속성
http.route
http.target</li>
<li>http.route</li>
<li>http.target</li>
<li>next.span_name</li>
<li>next.span_type</li>
<li>next.route</li>
</ul>
<h3 id="렌더-라우트-앱-next-route" tabindex="-1"><a class="header-anchor" href="#렌더-라우트-앱-next-route" aria-hidden="true">#</a> 렌더 라우트(앱) [next.route]</h3>
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
<li>next.span_type: AppRender.getBodyResult.</li>
</ul>
<p>이 span은 앱 라우터에서 라우트를 렌더링하는 과정을 나타냅니다.</p>
<p>속성:</p>
<ul>
<li>next.span_name</li>
<li>next.span_type</li>
<li>next.route</li>
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
<h3 id="fetch-http-method-http-url" tabindex="-1"><a class="header-anchor" href="#fetch-http-method-http-url" aria-hidden="true">#</a> fetch [http.method] [http.url]</h3>
<ul>
<li>next.span_type: AppRender.fetch</li>
</ul>
<p>이 span은 코드에서 실행된 fetch 요청을 나타냅니다.</p>
<p>속성:</p>
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
<li>Common HTTP attributes<br>
http.method</li>
<li>http.method</li>
<li>Client HTTP attributes<br>
http.url<br>
net.peer.name<br>
net.peer.port (only if specified)</li>
<li>http.url</li>
<li>net.peer.name</li>
<li>net.peer.port (only if specified)</li>
<li>next.span_name</li>
<li>next.span_type</li>
</ul>
<p>이 span을 사용하지 않도록 설정하려면 환경 변수에 NEXT_OTEL_FETCH_DISABLED=1을 설정하면 됩니다. 사용자 정의 fetch instrumentation 라이브러리를 사용하고 싶을 때 유용합니다.</p>
<h3 id="실행-중인-api-route-app-next-route" tabindex="-1"><a class="header-anchor" href="#실행-중인-api-route-app-next-route" aria-hidden="true">#</a> 실행 중인 api route (app) [next.route]</h3>
<ul>
<li>next.span_type: AppRouteRouteHandlers.runHandler.</li>
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
<p>이 span은 앱 라우터에서 API 라우트 핸들러를 실행하는 것을 나타냅니다.</p>
<p>속성:</p>
<ul>
<li>next.span_name</li>
<li>next.span_type</li>
<li>next.route</li>
</ul>
<h3 id="getserversideprops-next-route" tabindex="-1"><a class="header-anchor" href="#getserversideprops-next-route" aria-hidden="true">#</a> getServerSideProps [next.route]</h3>
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
<li>다음.span_type: Render.getServerSideProps.</li>
</ul>
<p>이 span은 특정 경로에 대한 getServerSideProps의 실행을 나타냅니다.</p>
<p>속성:</p>
<ul>
<li>next.span_name</li>
<li>next.span_type</li>
<li>next.route</li>
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
<h3 id="getstaticprops-next-route" tabindex="-1"><a class="header-anchor" href="#getstaticprops-next-route" aria-hidden="true">#</a> getStaticProps [next.route]</h3>
<ul>
<li>next.span_type: Render.getStaticProps.</li>
</ul>
<p>이 span은 특정 경로에 대한 getStaticProps 실행을 나타냅니다.</p>
<p>속성:</p>
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
<li>next.span_name</li>
<li>next.span_type</li>
<li>next.route</li>
</ul>
<h3 id="render-route-pages-next-route" tabindex="-1"><a class="header-anchor" href="#render-route-pages-next-route" aria-hidden="true">#</a> render route (pages) [next.route]</h3>
<ul>
<li>next.span_type: Render.renderDocument.</li>
</ul>
<p>이 span은 특정 경로에 대한 문서 렌더링 프로세스를 나타냅니다.</p>
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
<p>특성:</p>
<ul>
<li>next.span_name</li>
<li>next.span_type</li>
<li>next.route</li>
</ul>
<h3 id="generatemetadata-next-page" tabindex="-1"><a class="header-anchor" href="#generatemetadata-next-page" aria-hidden="true">#</a> generateMetadata [next.page]</h3>
<ul>
<li>next.span_type: ResolveMetadata.generateMetadata.</li>
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
<p>이 span은 특정 페이지에 대한 메타데이터를 생성하는 과정을 나타냅니다 (단일 루트에는 여러 개의 이러한 span이 있을 수 있습니다).</p>
<p>속성:</p>
<ul>
<li>next.span_name</li>
<li>next.span_type</li>
<li>next.page</li>
</ul>
<h3 id="페이지-구성-해결" tabindex="-1"><a class="header-anchor" href="#페이지-구성-해결" aria-hidden="true">#</a> 페이지 구성 해결</h3>
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
<li>다음.span_type: NextNodeServer.findPageComponents.</li>
</ul>
<p>이 span은 특정 페이지의 페이지 구성 요소를 해결하는 프로세스를 나타냅니다.</p>
<p>속성:</p>
<ul>
<li>next.span_name</li>
<li>next.span_type</li>
<li>next.route</li>
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
<h3 id="세그먼트-모듈-해결" tabindex="-1"><a class="header-anchor" href="#세그먼트-모듈-해결" aria-hidden="true">#</a> 세그먼트 모듈 해결</h3>
<ul>
<li>next.span_type: NextNodeServer.getLayoutOrPageModule.</li>
</ul>
<p>이 span은 레이아웃 또는 페이지에 대한 코드 모듈을 로드하는 것을 나타냅니다.</p>
<p>속성:</p>
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
<li>next.span_name</li>
<li>next.span_type</li>
<li>next.segment</li>
</ul>
<h3 id="시작-응답" tabindex="-1"><a class="header-anchor" href="#시작-응답" aria-hidden="true">#</a> 시작 응답</h3>
<ul>
<li>next.span_type: NextNodeServer.startResponse.</li>
</ul>
<p>이 zero-length span은 응답에서 첫 번째 바이트가 전송된 시간을 나타냅니다.</p>
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
</div></template>
