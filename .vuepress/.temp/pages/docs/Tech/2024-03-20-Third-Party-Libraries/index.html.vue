<template><div><h1 id="써드파티-라이브러리" tabindex="-1"><a class="header-anchor" href="#써드파티-라이브러리" aria-hidden="true">#</a> 써드파티 라이브러리</h1>
<p><code v-pre>@next/third-parties</code>는 Next.js 애플리케이션에서 인기 있는 써드파티 라이브러리를 더 빠르게 로드하고 개발자 경험을 향상시키는 컴포넌트 및 유틸리티 모음을 제공하는 라이브러리입니다.
<code v-pre>@next/third-parties</code>에 의해 제공되는 모든 써드파티 통합은 성능과 사용 편의성을 최적화했습니다.</p>
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
<p>시작하려면 @next/third-parties 라이브러리를 설치하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install @next<span class="token operator">/</span>third<span class="token operator">-</span>parties@latest next@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>@next/third-parties는 현재 개발 중인 실험적 라이브러리입니다. 더 많은 타사 통합을 추가하는 작업 중에는 최신 또는 캐너리 플래그와 함께 설치하는 것을 권장합니다.</p>
<h2 id="google-타사" tabindex="-1"><a class="header-anchor" href="#google-타사" aria-hidden="true">#</a> Google 타사</h2>
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
<p>Google에서 지원하는 모든 외부 라이브러리는 @next/third-parties/google에서 가져올 수 있습니다.</p>
<h3 id="google-tag-manager" tabindex="-1"><a class="header-anchor" href="#google-tag-manager" aria-hidden="true">#</a> Google Tag Manager</h3>
<p>GoogleTagManager 컴포넌트를 사용하여 Google Tag Manager 컨테이너를 페이지에 인스턴스화할 수 있습니다. 기본적으로 페이지에서 수분화가 발생한 후에 원본 인라인 스크립트를 가져옵니다.
모든 경로에 Google Tag Manager를로드하려면 루트 레이아웃에 직접 컴포넌트를 포함하고 GTM 컨테이너 ID를 전달하십시오:</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> GoogleTagManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@next/third-parties/google"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>GoogleTagManager gtmId<span class="token operator">=</span><span class="token string">"GTM-XYZ"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>body<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>개별 경로에 Google Tag Manager를 로드하려면 페이지 파일에 컴포넌트를 포함하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> GoogleTagManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@next/third-parties/google"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>GoogleTagManager gtmId<span class="token operator">=</span><span class="token string">"GTM-XYZ"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="이벤트-전송" tabindex="-1"><a class="header-anchor" href="#이벤트-전송" aria-hidden="true">#</a> 이벤트 전송</h4>
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
<p><code v-pre>sendGTMEvent</code> 함수는 데이터 레이어 객체를 사용하여 이벤트를 전송하여 페이지에서 사용자 상호작용을 추적하는 데 사용할 수 있습니다. 이 함수가 작동하려면 부모 레이아웃, 페이지 또는 컴포넌트 중 하나에 <code v-pre>&lt;GoogleTagManager /&gt;</code> 컴포넌트가 포함되어 있거나 동일한 파일에 직접 포함되어 있어야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> sendGTMEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@next/third-parties/google"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">EventButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">sendGTMEvent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token string">"buttonClicked"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"xyz"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>Send Event<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>펑션을 통해 전달할 수 있는 다양한 변수와 이벤트에 대해 알아보려면 태그 관리자 개발자 문서를 참조하십시오.</p>
<h4 id="옵션" tabindex="-1"><a class="header-anchor" href="#옵션" aria-hidden="true">#</a> 옵션</h4>
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
<p>Google Tag Manager에 전달할 옵션입니다. 전체 옵션 목록은 Google Tag Manager 문서를 참조하세요.</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>gtmId</code></td>
<td>Required</td>
<td>사용자의 GTM 컨테이너 ID. 일반적으로 <code v-pre>GTM-</code>으로 시작합니다.</td>
</tr>
<tr>
<td><code v-pre>dataLayer</code></td>
<td>Optional</td>
<td>컨테이너 초기화에 사용할 데이터 레이어 배열. 기본값은 빈 배열입니다.</td>
</tr>
<tr>
<td><code v-pre>dataLayerName</code></td>
<td>Optional</td>
<td>데이터 레이어의 이름. 기본값은 <code v-pre>dataLayer</code>입니다.</td>
</tr>
<tr>
<td><code v-pre>auth</code></td>
<td>Optional</td>
<td>환경 스니펫에 대한 인증 매개변수(<code>gtm_auth</code>)의 값.</td>
</tr>
<tr>
<td><code v-pre>preview</code></td>
<td>Optional</td>
<td>환경 스니펫에 대한 미리보기 매개변수(<code>gtm_preview</code>)의 값.</td>
</tr>
</tbody>
</table>
<h3 id="google-analytics" tabindex="-1"><a class="header-anchor" href="#google-analytics" aria-hidden="true">#</a> Google Analytics</h3>
<p>GoogleAnalytics 컴포넌트를 사용하면 Google Analytics 4를 Google 태그(gtag.js)를 통해 페이지에 포함시킬 수 있습니다. 기본적으로 페이지에서 수분화가 발생한 후에 원본 스크립트를 가져옵니다.</p>
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
<p>권장 사항: 이미 응용 프로그램에 Google Tag Manager가 포함되어 있다면 Google Analytics를 별도 구성하는 대신 Google Tag Manager를 사용하여 Google Analytics를 직접 구성할 수 있습니다. Tag Manager와 gtag.js 간의 차이에 대해 자세히 알아 보려면 문서를 참조하십시오.
모든 경로에 Google Analytics를 로드하려면 루트 레이아웃에 구성 요소를 직접 포함하고 측정 ID를 전달하십시오:</p>
</blockquote>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> GoogleAnalytics <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@next/third-parties/google"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>body<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
      <span class="token operator">&lt;</span>GoogleAnalytics gaId<span class="token operator">=</span><span class="token string">"G-XYZ"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>단일 경로에 Google Analytics를 로드하려면 페이지 파일에 구성 요소를 포함하십시오:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> GoogleAnalytics <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@next/third-parties/google"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>GoogleAnalytics gaId<span class="token operator">=</span><span class="token string">"G-XYZ"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="이벤트-전송-1" tabindex="-1"><a class="header-anchor" href="#이벤트-전송-1" aria-hidden="true">#</a> 이벤트 전송</h4>
<p>sendGAEvent 함수를 사용하여 dataLayer 객체를 사용하여 이벤트를 전송함으로써 페이지에서 사용자 상호작용을 측정할 수 있습니다. 이 함수가 작동하려면 <code v-pre>&lt;GoogleAnalytics /&gt;</code> 컴포넌트가 부모 레이아웃, 페이지 또는 컴포넌트에서 직접 포함되어야 합니다. 또는 동일한 파일에서 직접적으로 포함해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> sendGAEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@next/third-parties/google"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">EventButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">sendGAEvent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token string">"buttonClicked"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"xyz"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>Send Event<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<p>Google Analytics 개발자 문서를 참조해서 이벤트 매개변수에 대해 더 알아보세요.</p>
<h4 id="페이지뷰-추적" tabindex="-1"><a class="header-anchor" href="#페이지뷰-추적" aria-hidden="true">#</a> 페이지뷰 추적</h4>
<p>Google Analytics는 브라우저 히스토리 상태가 변경될 때 자동으로 페이지뷰를 추적합니다. 이는 Next.js 경로간의 클라이언트 측 이동이 어떤 구성 없이도 페이지뷰 데이터를 전송한다는 것을 의미합니다.
클라이언트 측 이동이 올바르게 측정되고 있는지 확인하려면 '향상된 측정' 속성이 관리자 패널에서 활성화되어 있고 '브라우저 히스토리 이벤트에 기반한 페이지 변경' 확인란이 선택되어 있는지 확인하세요.</p>
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
<p>참고: 페이지뷰 이벤트를 수동으로 전송하기로 결정한다면, 중복 데이터가 발생하지 않도록 기본 페이지뷰 측정을 비활성화해야 합니다. 더 자세한 내용은 Google Analytics 개발자 문서를 참조해주세요.</p>
</blockquote>
<h4 id="옵션-1" tabindex="-1"><a class="header-anchor" href="#옵션-1" aria-hidden="true">#</a> 옵션</h4>
<p><code v-pre>&lt;GoogleAnalytics&gt;</code> 컴포넌트에 전달할 옵션들입니다.</p>
<table>
<thead>
<tr>
<th>이름</th>
<th>타입</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>gaId</code></td>
<td>필수</td>
<td>귀하의 <a href="https://support.google.com/analytics/answer/12270356" target="_blank" rel="noopener noreferrer">측정 ID<ExternalLinkIcon/></a>입니다. 일반적으로 <code v-pre>&lt;code&gt;G-&lt;/code&gt;</code>로 시작합니다.</td>
</tr>
<tr>
<td><code v-pre>dataLayerName</code></td>
<td>선택 사항</td>
<td>데이터 레이어의 이름입니다. 기본값은 <code v-pre>&lt;code&gt;dataLayer&lt;/code&gt;</code>입니다.</td>
</tr>
</tbody>
</table>
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
<h3 id="google-지도-삽입" tabindex="-1"><a class="header-anchor" href="#google-지도-삽입" aria-hidden="true">#</a> Google 지도 삽입</h3>
<p>GoogleMapsEmbed 컴포넌트를 사용하면 페이지에 Google 지도를 삽입할 수 있습니다. 기본적으로 lazy-load를 사용하여 아래쪽에 삽입됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> GoogleMapsEmbed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@next/third-parties/google"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>GoogleMapsEmbed apiKey<span class="token operator">=</span><span class="token string">"XYZ"</span> height<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span> width<span class="token operator">=</span><span class="token string">"100%"</span> mode<span class="token operator">=</span><span class="token string">"place"</span> q<span class="token operator">=</span><span class="token string">"Brooklyn+Bridge,New+York,NY"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="옵션-2" tabindex="-1"><a class="header-anchor" href="#옵션-2" aria-hidden="true">#</a> 옵션</h4>
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
<p>Google Maps Embed에 전달할 옵션입니다. 전체 옵션 목록을 보려면 Google Map Embed 문서를 참조하세요
.</p>
<h3 id="youtube-임베드" tabindex="-1"><a class="header-anchor" href="#youtube-임베드" aria-hidden="true">#</a> YouTube 임베드</h3>
<p>YouTubeEmbed 컴포넌트를 사용하여 YouTube 임베드를 로드하고 표시할 수 있습니다. 이 컴포넌트는 lite-youtube-embed를 사용하여 빠르게 로드됩니다.</p>
<table>
<thead>
<tr>
<th>이름</th>
<th>유형</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>apiKey</code></td>
<td>필수</td>
<td>사용자의 API 키입니다.</td>
</tr>
<tr>
<td><code v-pre>mode</code></td>
<td>필수</td>
<td><a href="https://developers.google.com/maps/documentation/embed/embedding-map#choosing_map_modes" target="_blank" rel="noopener noreferrer">지도 모드<ExternalLinkIcon/></a>를 선택합니다.</td>
</tr>
<tr>
<td><code v-pre>height</code></td>
<td>선택 사항</td>
<td>임베드의 높이입니다. 기본값은 <code v-pre>auto</code>입니다.</td>
</tr>
<tr>
<td><code v-pre>width</code></td>
<td>선택 사항</td>
<td>임베드의 너비입니다. 기본값은 <code v-pre>auto</code>입니다.</td>
</tr>
<tr>
<td><code v-pre>style</code></td>
<td>선택 사항</td>
<td>iframe에 스타일을 전달합니다.</td>
</tr>
<tr>
<td><code v-pre>allowfullscreen</code></td>
<td>선택 사항</td>
<td>일부 지도 부분을 전체 화면으로 표시할 수 있는 속성입니다.</td>
</tr>
<tr>
<td><code v-pre>loading</code></td>
<td>선택 사항</td>
<td>기본값은 <code v-pre>lazy</code>입니다. 임베드가 화면 위에 있을 것으로 예상되면 변경을 고려해보세요.</td>
</tr>
<tr>
<td><code v-pre>q</code></td>
<td>선택 사항</td>
<td>맵 마커 위치를 정의합니다. <em>지도 모드에 따라 필요할 수 있습니다.</em></td>
</tr>
<tr>
<td><code v-pre>center</code></td>
<td>선택 사항</td>
<td>맵 뷰어의 중심을 정의합니다.</td>
</tr>
<tr>
<td><code v-pre>zoom</code></td>
<td>선택 사항</td>
<td>맵의 초기 확대 수준을 설정합니다.</td>
</tr>
<tr>
<td><code v-pre>maptype</code></td>
<td>선택 사항</td>
<td>로드할 지도 타일의 유형을 정의합니다.</td>
</tr>
<tr>
<td><code v-pre>language</code></td>
<td>선택 사항</td>
<td>UI 요소 및 맵 타일 레이블의 표시에 사용할 언어를 정의합니다.</td>
</tr>
<tr>
<td><code v-pre>region</code></td>
<td>선택 사항</td>
<td>지리적 민감성에 따라 표시할 적절한 경계 및 레이블을 정의합니다.</td>
</tr>
</tbody>
</table>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> YouTubeEmbed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@next/third-parties/google"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>YouTubeEmbed videoid<span class="token operator">=</span><span class="token string">"ogfYd705cRs"</span> height<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">400</span><span class="token punctuation">}</span> params<span class="token operator">=</span><span class="token string">"controls=0"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h4>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>videoid</code></td>
<td>Required</td>
<td>YouTube 영상의 ID입니다.</td>
</tr>
<tr>
<td><code v-pre>width</code></td>
<td>Optional</td>
<td>영상 컨테이너의 너비입니다. 기본값은 <code v-pre>auto</code> 입니다.</td>
</tr>
<tr>
<td><code v-pre>height</code></td>
<td>Optional</td>
<td>영상 컨테이너의 높이입니다. 기본값은 <code v-pre>auto</code> 입니다.</td>
</tr>
<tr>
<td><code v-pre>playlabel</code></td>
<td>Optional</td>
<td>접근성을 위해 플레이 버튼의 시각적으로 숨긴 레이블입니다.</td>
</tr>
<tr>
<td><code v-pre>params</code></td>
<td>Optional</td>
<td><a href="https://developers.google.com/youtube/player_parameters#Parameters" rel="noopener noreferrer nofollow" target="_blank">여기</a>에서 정의된 비디오 플레이어 매개변수입니다. <br> 매개변수는 쿼리 매개변수 문자열로 전달됩니다. <br> 예: <code>params=&quot;controls=0&amp;start=10&amp;end=30&quot;</code></td>
</tr>
<tr>
<td><code v-pre>style</code></td>
<td>Optional</td>
<td>영상 컨테이너에 스타일을 적용하는 데 사용됩니다.</td>
</tr>
</tbody>
</table>
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
