<template><div><h1 id="nextjs-14에서-코어-웹-바이탈-분석-서비스-이용-하는-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14에서-코어-웹-바이탈-분석-서비스-이용-하는-방법" aria-hidden="true">#</a> Nextjs 14에서 코어 웹 바이탈 분석 서비스 이용 하는 방법</h1>
<p>useReportWebVitals 훅을 사용하면 Core Web Vitals를 보고할 수 있으며, 분석 서비스와 함께 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useReportWebVitals <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/web-vitals"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">WebVitals</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">useReportWebVitals</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">metric</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>metric<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> WebVitals <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./_components/web-vitals"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Layout</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html<span class="token operator">></span>
      <span class="token operator">&lt;</span>body<span class="token operator">></span>
        <span class="token operator">&lt;</span>WebVitals <span class="token operator">/</span><span class="token operator">></span>
        <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<blockquote>
<p>&quot;useReportWebVitals&quot; 훅을 사용하려면 &quot;use client&quot; 지시문이 필요합니다. 성능을 최적화하기 위한 가장 좋은 방법은 루트 레이아웃에서 가져오는 별도의 컴포넌트를 만드는 것입니다. 이렇게 하면 클라이언트 경계가 WebVitals 컴포넌트에만 제한됩니다.</p>
</blockquote>
<h2 id="usereportwebvitals" tabindex="-1"><a class="header-anchor" href="#usereportwebvitals" aria-hidden="true">#</a> useReportWebVitals</h2>
<p>훅의 인수로 전달된 메트릭 객체는 여러 속성으로 구성됩니다:</p>
<ul>
<li>id: 현재 페이지 로드의 문맥에서 메트릭의 고유 식별자</li>
<li>name: 성능 메트릭의 이름. 가능한 값으로 Web Vitals 메트릭의 이름(TTFB, FCP, LCP, FID, CLS)이 포함됩니다.</li>
<li>delta: 현재 값과 이전 값 간의 차이. 값은 일반적으로 밀리초 단위이며 메트릭 값의 시간에 따른 변화를 나타냅니다.</li>
<li>entries: 메트릭과 관련된 성능 엔트리 배열. 이러한 엔트리는 메트릭과 관련된 성능 이벤트에 대한 세부 정보를 제공합니다.</li>
<li>navigationType: 메트릭 수집을 유도하는 탐색 유형을 나타냅니다. 가능한 값으로 &quot;navigate&quot;, &quot;reload&quot;, &quot;back_forward&quot;, &quot;prerender&quot;가 포함됩니다.</li>
<li>rating: 메트릭 값의 질적 등급으로 성능을 평가하는 값입니다. 가능한 값으로 &quot;good&quot;, &quot;needs-improvement&quot;, &quot;poor&quot;가 포함됩니다. 이 등급은 일반적으로 메트릭 값을 수용 가능하거나 최적화되지 않은 성능을 나타내는 미리 정의된 임계값과 비교하여 결정됩니다.</li>
<li>value: 성능 엔트리의 실제 값 또는 지속 시간. 값은 일반적으로 밀리초 단위이며 메트릭으로 추적되는 성능 측면의 양적 측정을 제공합니다. 값의 소스는 측정되는 특정 메트릭에 따라 다르며 다양한 성능 API에서 가져올 수 있습니다.</li>
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
<h2 id="웹-비탈스" tabindex="-1"><a class="header-anchor" href="#웹-비탈스" aria-hidden="true">#</a> 웹 비탈스</h2>
<p>웹 비탈스는 웹 페이지의 사용자 경험을 측정하기 위한 유용한 지표들입니다. 아래의 웹 비탈스가 모두 포함됩니다:</p>
<ul>
<li>Time to First Byte (TTFB)</li>
<li>First Contentful Paint (FCP)</li>
<li>Largest Contentful Paint (LCP)</li>
<li>First Input Delay (FID)</li>
<li>Cumulative Layout Shift (CLS)</li>
<li>Interaction to Next Paint (INP)</li>
</ul>
<p>이러한 지표들의 결과를 모두 name 속성을 사용하여 처리할 수 있습니다.</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useReportWebVitals <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/web-vitals"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">WebVitals</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">useReportWebVitals</span><span class="token punctuation">(</span><span class="token punctuation">(</span>metric<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>metric<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">"FCP"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// FCP 결과 처리</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">case</span> <span class="token string">"LCP"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// LCP 결과 처리</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vercel에서의-사용법" tabindex="-1"><a class="header-anchor" href="#vercel에서의-사용법" aria-hidden="true">#</a> Vercel에서의 사용법</h2>
<p>Vercel Speed Insights는 Vercel 배포에 자동으로 구성되며 useReportWebVitals를 사용하지 않습니다. 이 훅은 로컬 개발에 유용하거나 다른 분석 서비스를 사용하는 경우에 유용합니다.</p>
<h2 id="외부-시스템으로-결과-전송" tabindex="-1"><a class="header-anchor" href="#외부-시스템으로-결과-전송" aria-hidden="true">#</a> 외부 시스템으로 결과 전송</h2>
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
<p>사이트에서 실제 사용자 성능을 측정하고 추적하기 위해 어떤 엔드포인트로든 결과를 전송할 수 있습니다. 예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">useReportWebVitals</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">metric</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> body <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>metric<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">"https://example.com/analytics"</span><span class="token punctuation">;</span>

  <span class="token comment">// `navigator.sendBeacon()`을 사용할 수 있다면 사용하고, 그렇지 않으면 `fetch()`를 사용합니다.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>sendBeacon<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    navigator<span class="token punctuation">.</span><span class="token function">sendBeacon</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> body<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span> body<span class="token punctuation">,</span> <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"POST"</span><span class="token punctuation">,</span> <span class="token literal-property property">keepalive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>좋아 알아두기: Google Analytics를 사용하는 경우, id 값을 사용하여 지표 분포를 수동으로 작성할 수 있습니다(백분위수 등을 계산).</p>
</blockquote>
<blockquote>
<p>useReportWebVitals(metric) 함수를 사용하여:</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// Google Analytics가 초기화되었으면`window.gtag` 사용:</span>
  <span class="token comment">// 예시: https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_app.js</span>
  window<span class="token punctuation">.</span><span class="token function">gtag</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">event</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> metric<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>metric<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">CLS</span><span class="token template-punctuation string">`</span></span> <span class="token operator">?</span> metric<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">1000</span> <span class="token operator">:</span> metric<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 값은 정수여야 합니다</span>
    <span class="token literal-property property">event_label</span><span class="token operator">:</span> metric<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token comment">// 현재 페이지로드에 대한 고유 ID</span>
    <span class="token literal-property property">non_interaction</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 이벤트가 이탈률에 영향을 미치지 않도록 함</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
Google Analytics로 결과 전송에 대해 더 알아보기
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
</div></template>
