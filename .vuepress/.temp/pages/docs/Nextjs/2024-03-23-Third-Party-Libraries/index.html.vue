<template><div><h1 id="써드-파티-라이브러리" tabindex="-1"><a class="header-anchor" href="#써드-파티-라이브러리" aria-hidden="true">#</a> 써드 파티 라이브러리</h1>
<p>@next/third-parties는 Next.js 애플리케이션에서 인기 있는 써드 파티 라이브러리를로드하는 성능을 향상시키고 개발자 경험을 향상시키는 컴포넌트 및 유틸리티 모음을 제공하는 라이브러리입니다.</p>
<p>@next/third-parties에서 제공하는 모든 써드 파티 통합은 성능과 사용 편의성을 최적화되어 있습니다.</p>
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
<p>시작하려면 @next/third-parties 라이브러리를 설치해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install @next<span class="token operator">/</span>third<span class="token operator">-</span>parties@latest next@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>@next/third-parties는 현재 개발 중인 실험적인 라이브러리입니다. 더 많은 서드 파티 통합을 추가하는 작업 중이니 최신 버전이나 캐너리 플래그와 함께 설치하는 것을 권장합니다.</p>
<h2 id="google-third-parties" tabindex="-1"><a class="header-anchor" href="#google-third-parties" aria-hidden="true">#</a> Google Third-Parties</h2>
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
<p>Google에서 지원하는 모든 서드파티 라이브러리는 @next/third-parties/google에서 가져올 수 있습니다.</p>
<h3 id="google-태그-매니저" tabindex="-1"><a class="header-anchor" href="#google-태그-매니저" aria-hidden="true">#</a> Google 태그 매니저</h3>
<p>GoogleTagManager 컴포넌트를 사용하여 페이지에 Google 태그 매니저 컨테이너를 인스턴스화할 수 있습니다. 기본 설정으로 페이지에서 하이드레이션이 발생한 후에 원본 인라인 스크립트를 가져옵니다.</p>
<p>모든 경로에 대해 Google 태그 매니저를 로드하려면 사용자 정의 _app에 직접 컴포넌트를 포함하고 GTM 컨테이너 ID를 전달하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> GoogleTagManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@next/third-parties/google"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>GoogleTagManager gtmId<span class="token operator">=</span><span class="token string">"GTM-XYZ"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>단일 경로에 Google Tag Manager를 로드하려면 페이지 파일에 컴포넌트를 포함하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> GoogleTagManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@next/third-parties/google"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>GoogleTagManager gtmId<span class="token operator">=</span><span class="token string">"GTM-XYZ"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="이벤트-전송하기" tabindex="-1"><a class="header-anchor" href="#이벤트-전송하기" aria-hidden="true">#</a> 이벤트 전송하기</h4>
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
<p>sendGTMEvent 함수는 데이터 레이어 객체를 사용하여 이벤트를 보내어 페이지에서 사용자 상호작용을 추적하는 데 사용할 수 있습니다. 이 함수가 작동하려면 <code v-pre>GoogleTagManager</code> 컴포넌트가 부모 레이아웃, 페이지 또는 컴포넌트 중 하나에 포함되어 있거나 동일한 파일에 직접 포함되어 있어야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> sendGTMEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@next/third-parties/google"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">EventButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">sendGTMEvent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token string">"buttonClicked"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"xyz"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>Send Event<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>함수에 전달할 수 있는 다양한 변수 및 이벤트에 대해 알아보려면 관련 개발자 문서를 확인해주세요.</p>
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
<p>구글 태그 매니저로 전달할 옵션들이 있어요. 온전한 옵션 목록을 원한다면, 구글 태그 매니저 문서를 읽어보세요.</p>
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
<td>필수</td>
<td>GTM 컨테이너 ID입니다. 보통 <code v-pre>&lt;code&gt;GTM-&lt;/code&gt;</code>로 시작합니다.</td>
</tr>
<tr>
<td><code v-pre>dataLayer</code></td>
<td>선택 사항</td>
<td>컨테이너를 초기화하는 데이터 레이어 배열입니다. 기본값은 빈 배열입니다.</td>
</tr>
<tr>
<td><code v-pre>dataLayerName</code></td>
<td>선택 사항</td>
<td>데이터 레이어의 이름입니다. 기본값은 <code v-pre>&lt;code&gt;dataLayer&lt;/code&gt;</code>입니다.</td>
</tr>
<tr>
<td><code v-pre>auth</code></td>
<td>선택 사항</td>
<td>환경 스니펫을 위한 인증 매개변수(<code>gtm_auth</code>)의 값입니다.</td>
</tr>
<tr>
<td><code v-pre>preview</code></td>
<td>선택 사항</td>
<td>환경 스니펫을 위한 미리보기 매개변수(<code>gtm_preview</code>)의 값입니다.</td>
</tr>
</tbody>
</table>
<h3 id="구글-애널리틱스" tabindex="-1"><a class="header-anchor" href="#구글-애널리틱스" aria-hidden="true">#</a> 구글 애널리틱스</h3>
<p>GoogleAnalytics 컴포넌트를 사용하면 Google 애널리틱스 4를 페이지에 Google 태그(gtag.js)를 통해 포함시킬 수 있어요. 기본적으로 페이지에서 수분이 발생한 후에 원본 스크립트를 불러올 거에요.</p>
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
<p>권장 사항: 이미 Google Tag Manager가 애플리케이션에 포함되어 있는 경우 Google Analytics를 별도 구성하는 대신 Google Tag Manager를 통해 Google Analytics를 직접 구성할 수 있습니다. Tag Manager와 gtag.js 간의 차이에 대해 자세히 알아보려면 문서를 참조하십시오.</p>
</blockquote>
<p>모든 루트에 Google Analytics를 로드하려면 사용자 정의 _app에 구성 요소를 직접 포함하고 측정 ID를 전달하십시오.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> GoogleAnalytics <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@next/third-parties/google"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>GoogleAnalytics gaId<span class="token operator">=</span><span class="token string">"G-XYZ"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>단일 경로에 대해 Google Analytics를 로드하려면 페이지 파일에 구성 요소를 포함하십시오.</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="이벤트-전송" tabindex="-1"><a class="header-anchor" href="#이벤트-전송" aria-hidden="true">#</a> 이벤트 전송</h4>
<p>sendGAEvent 함수를 사용하여 데이터 레이어 객체를 이용해 페이지에서 사용자 상호작용을 측정할 수 있습니다. 이 함수가 작동하려면 <code v-pre>GoogleAnalytics /</code> 컴포넌트가 부모 레이아웃, 페이지, 또는 컴포넌트를 포함하거나 동일한 파일에 직접 포함되어 있어야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> sendGAEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@next/third-parties/google"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">EventButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">sendGAEvent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token string">"buttonClicked"</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"xyz"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>Send Event<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>Google Analytics 개발자 문서를 참조하여 이벤트 매개변수에 대해 더 알아보세요.</p>
<h4 id="페이지뷰-추적" tabindex="-1"><a class="header-anchor" href="#페이지뷰-추적" aria-hidden="true">#</a> 페이지뷰 추적</h4>
<p>Google Analytics는 브라우저 히스토리 상태가 변경될 때 자동으로 페이지뷰를 추적합니다. 이는 Next.js 라우트 간 클라이언트 측 탐색이 구성없이 페이지뷰 데이터를 보내게 됨을 의미합니다.</p>
<p>클라이언트 측 탐색이 올바르게 측정되고 있는지 확인하려면 &quot;향상된 측정&quot; 속성이 관리 패널에서 활성화되어 있는지 및 &quot;브라우저 히스토리 이벤트에 따라 페이지 변경&quot; 확인란이 선택되어 있는지 확인하세요.</p>
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
<p>참고: 페이지뷰 이벤트를 수동으로 보내기로 결정한 경우, 중복 데이터가 생기지 않도록 하기 위해 기본 페이지뷰 측정을 비활성화해야 합니다. 더 많은 정보를 원하시면 Google Analytics 개발자 문서를 참조해 주세요.</p>
</blockquote>
<h4 id="옵션-1" tabindex="-1"><a class="header-anchor" href="#옵션-1" aria-hidden="true">#</a> 옵션</h4>
<p><code v-pre>GoogleAnalytics</code> 컴포넌트에 전달할 옵션들입니다.</p>
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
<td><code v-pre>gaId</code></td>
<td>필수</td>
<td>귀하의 <a href="https://support.google.com/analytics/answer/12270356" rel="noopener noreferrer nofollow" target="_blank">측정 ID<span class="inline-flex"><svg class="with-icon_icon__MHUeb" data-testid="geist-icon" fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" style="color:currentColor;width:14px;height:14px"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg></span></a>입니다. 일반적으로 <code>G-</code>로 시작합니다.</td>
</tr>
<tr>
<td><code v-pre>dataLayerName</code></td>
<td>선택적</td>
<td>데이터 레이어의 이름입니다. 기본값은 <code>dataLayer</code>입니다.</td>
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
<p>GoogleMapsEmbed 구성 요소를 사용하여 페이지에 Google 지도 삽입이 가능합니다. 기본적으로 아래 접힌 상태에서 삽입을 지연로드하기 위해 loading 속성을 사용합니다.</p>
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
<p>Google Maps Embed에 전달할 옵션들입니다. 전체 옵션 목록을 보려면 Google Maps Embed 문서를 읽어보세요.</p>
<h3 id="youtube-임베드" tabindex="-1"><a class="header-anchor" href="#youtube-임베드" aria-hidden="true">#</a> YouTube 임베드</h3>
<p>YouTube 임베드에서 사용할 수 있는 옵션들입니다. 이 컴포넌트는 내부적으로 lite-youtube-embed를 사용하여 더 빠르게 로드됩니다.</p>
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
<td>YouTube video id.</td>
</tr>
<tr>
<td><code v-pre>width</code></td>
<td>Optional</td>
<td>Width of the video container. Defaults to <code v-pre>auto</code>.</td>
</tr>
<tr>
<td><code v-pre>height</code></td>
<td>Optional</td>
<td>Height of the video container. Defaults to <code v-pre>auto</code>.</td>
</tr>
<tr>
<td><code v-pre>playlabel</code></td>
<td>Optional</td>
<td>A visually hidden label for the play button for accessibility.</td>
</tr>
<tr>
<td><code v-pre>params</code></td>
<td>Optional</td>
<td>The video player params defined <a href="https://developers.google.com/youtube/player_parameters#Parameters" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a>. <br> Params are passed as a query param string. <br> Eg: <code v-pre>params=&quot;controls=0&amp;amp;start=10&amp;amp;end=30&quot;</code>.</td>
</tr>
<tr>
<td><code v-pre>style</code></td>
<td>Optional</td>
<td>Used to apply styles to the video container.</td>
</tr>
</tbody>
</table>
</div></template>
