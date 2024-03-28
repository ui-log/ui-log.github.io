<template><div><h1 id="분석" tabindex="-1"><a class="header-anchor" href="#분석" aria-hidden="true">#</a> 분석</h1>
<p>Next.js에는 성능 지표를 측정하고 보고하는 데 내장 지원이 있습니다. useReportWebVitals 훅을 사용하여 직접 보고를 관리하거나 대안으로 Vercel이 제공하는 관리형 서비스를 사용하여 자동으로 지표를 수집하고 시각화할 수 있습니다.</p>
<h2 id="직접-만들기" tabindex="-1"><a class="header-anchor" href="#직접-만들기" aria-hidden="true">#</a> 직접 만들기</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useReportWebVitals <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/web-vitals"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">useReportWebVitals</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">metric</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>metric<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
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
<p>API 레퍼런스에서 더 많은 정보를 확인해보세요.</p>
<h2 id="웹-핵심-지표" tabindex="-1"><a class="header-anchor" href="#웹-핵심-지표" aria-hidden="true">#</a> 웹 핵심 지표</h2>
<p>웹 핵심 지표는 웹 페이지의 사용자 경험을 캡처하기 위해 만들어진 유용한 지표들입니다. 아래 웹 핵심 지표들이 모두 포함되어 있습니다:</p>
<ul>
<li>첫 번째 바이트까지의 시간 (TTFB)</li>
<li>첫 번째 콘텐츠가 그려지는 시점 (FCP)</li>
<li>가장 큰 콘텐츠가 그려지는 시점 (LCP)</li>
<li>첫 입력 지연 (FID)</li>
<li>누적 레이아웃 이동 (CLS)</li>
<li>다음 그리기까지의 상호작용 (INP)</li>
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
<p>이러한 메트릭의 모든 결과를 name 속성을 사용하여 처리할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useReportWebVitals <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/web-vitals"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">useReportWebVitals</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">metric</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
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

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="사용자-정의-메트릭" tabindex="-1"><a class="header-anchor" href="#사용자-정의-메트릭" aria-hidden="true">#</a> 사용자 정의 메트릭</h2>
<p>위에 나열된 핵심 메트릭 외에도, 페이지의 수분화 및 렌더링 속도를 측정하는 몇 가지 추가적인 사용자 정의 메트릭이 있습니다:</p>
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
<li>Next.js-수분화: 페이지가 수분화를 시작하고 완료하는 데 걸리는 시간(밀리초 단위)</li>
<li>Next.js-경로-변경-렌더: 경로 변경 후 페이지 렌더링을 시작하는 데 걸리는 시간(밀리초 단위)</li>
<li>Next.js-렌더: 경로 변경 후 페이지 렌더를 완료하는 데 걸리는 시간(밀리초 단위)</li>
</ul>
<p>이 지표들을 모두 따로 처리할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">reportWebVitals</span><span class="token punctuation">(</span><span class="token parameter">metric</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>metric<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">"Next.js-수분화"</span><span class="token operator">:</span>
      <span class="token comment">// 수분화 결과 처리</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">"Next.js-경로-변경-렌더"</span><span class="token operator">:</span>
      <span class="token comment">// 경로 변경 후 렌더 결과 처리</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">"Next.js-렌더"</span><span class="token operator">:</span>
      <span class="token comment">// 렌더 결과 처리</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이러한 지표들은 User Timing API를 지원하는 모든 브라우저에서 작동합니다.</p>
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
<h2 id="외부-시스템으로-결과-전송하기" tabindex="-1"><a class="header-anchor" href="#외부-시스템으로-결과-전송하기" aria-hidden="true">#</a> 외부 시스템으로 결과 전송하기</h2>
<p>당신은 사이트에서 실제 사용자 성능을 측정하고 추적하기 위해 결과를 어떤 엔드포인트로든 보낼 수 있습니다. 예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">useReportWebVitals</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">metric</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> body <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>metric<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">"https://example.com/analytics"</span><span class="token punctuation">;</span>

  <span class="token comment">// `navigator.sendBeacon()`를 사용할 수 있다면 해당 함수를 사용하고, 그렇지 않은 경우에는 `fetch()`를 사용합니다.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>sendBeacon<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    navigator<span class="token punctuation">.</span><span class="token function">sendBeacon</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> body<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span> body<span class="token punctuation">,</span> <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"POST"</span><span class="token punctuation">,</span> <span class="token literal-property property">keepalive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>참고: Google 애널리틱스를 사용하는 경우에는 id 값을 사용하여 수동으로 메트릭 분포를 구성할 수 있습니다(백분위수 등을 계산하기 위해).</p>
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
</div></template>
