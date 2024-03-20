<template><div><h1 id="nextjs-14-사이트-통계-측정-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14-사이트-통계-측정-방법" aria-hidden="true">#</a> Nextjs 14 사이트 통계 측정 방법</h1>
<p>Next.js에는 성능 지표를 측정하고 보고하는 내장 지원이 있습니다. useReportWebVitals 훅을 사용하여 직접 보고를 관리하거나 Vercel은 대신 성능 지표를 자동으로 수집하고 시각화하는 관리 서비스를 제공합니다.</p>
<h2 id="직접-만들기" tabindex="-1"><a class="header-anchor" href="#직접-만들기" aria-hidden="true">#</a> 직접 만들기</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useReportWebVitals <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/web-vitals"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">WebVitals</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">useReportWebVitals</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">metric</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>metric<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> WebVitals <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./_components/web-vitals"</span><span class="token punctuation">;</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&quot;useReportWebVitals&quot; 훅을 사용하려면 &quot;use client&quot; 지시문이 필요합니다. 성능 면에서 가장 우수한 방법은 루트 레이아웃이 가져오는 별도의 컴포넌트를 생성하는 것입니다. 이렇게 하면 클라이언트 경계가 WebVitals 컴포넌트로 특화됩니다.
더 많은 정보를 보려면 API 참조를 확인해주세요.</p>
<h2 id="web-vitals" tabindex="-1"><a class="header-anchor" href="#web-vitals" aria-hidden="true">#</a> Web Vitals</h2>
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
<p>웹 Vitals은 사용자 경험을 포착하기 위한 유용한 지표의 세트입니다. 다음과 같은 웹 Vitals이 모두 포함되어 있습니다:</p>
<ul>
<li>Time to First Byte (TTFB)</li>
<li>First Contentful Paint (FCP)</li>
<li>Largest Contentful Paint (LCP)</li>
<li>First Input Delay (FID)</li>
<li>Cumulative Layout Shift (CLS)</li>
<li>Interaction to Next Paint (INP)</li>
</ul>
<p>metric의 이름 속성을 사용하여 이러한 지표의 모든 결과를 처리할 수 있습니다.</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="외부-시스템으로-결과-전송하기" tabindex="-1"><a class="header-anchor" href="#외부-시스템으로-결과-전송하기" aria-hidden="true">#</a> 외부 시스템으로 결과 전송하기</h2>
<p>귀하는 귀하의 사이트에서 실제 사용자 퍼포먼스를 측정하고 추적하기 위해 모든 엔드포인트로 결과를 전송할 수 있습니다. 예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">useReportWebVitals</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">metric</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> body <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>metric<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">"https://example.com/analytics"</span><span class="token punctuation">;</span>

  <span class="token comment">// `navigator.sendBeacon()`를 사용할 수 있으면 그것을 사용하고, 그렇지 않으면 `fetch()`를 사용합니다.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>sendBeacon<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    navigator<span class="token punctuation">.</span><span class="token function">sendBeacon</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> body<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span> body<span class="token punctuation">,</span> <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"POST"</span><span class="token punctuation">,</span> <span class="token literal-property property">keepalive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>참고: Google Analytics를 사용하고 있으면
, id 값을 사용하여 수동으로 메트릭 분포를 구성할 수 있어서 백분위 등을 계산할 수 있습니다.</p>
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
<blockquote>
<p>useReportWebVitals((metric) =&gt; {
// 만약 Google Analytics를 초기화한 경우에는 <code v-pre>window.gtag</code>를 사용하세요. 예시는 다음과 같습니다:
// https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_app.js</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">gtag</span><span class="token punctuation">(</span><span class="token string">'event'</span><span class="token punctuation">,</span> metric<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">value</span><span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>
      metric<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">'CLS'</span> <span class="token operator">?</span> metric<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">1000</span> <span class="token operator">:</span> metric<span class="token punctuation">.</span>value
    <span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 값은 정수이어야 합니다</span>
    <span class="token literal-property property">event_label</span><span class="token operator">:</span> metric<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token comment">// 현재 페이지 로드에 고유한 ID</span>
    <span class="token literal-property property">non_interaction</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 이벤트가 이탈률에 영향을 미치지 않도록 합니다</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Google Analytics로 결과를 전송하는 방법에 대해 더 알아보기.</p>
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
