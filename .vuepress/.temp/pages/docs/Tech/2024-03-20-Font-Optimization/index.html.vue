<template><div><h1 id="폰트-최적화" tabindex="-1"><a class="header-anchor" href="#폰트-최적화" aria-hidden="true">#</a> 폰트 최적화</h1>
<p>next/font는 자동으로 폰트를 최적화하고 (사용자 정의 폰트 포함) 개인 정보 보호 및 성능 향상을 위해 외부 네트워크 요청을 제거합니다.</p>
<blockquote>
<p>🎥 시청: next/font 사용에 대해 자세히 알아보기 → YouTube (6 분)
.
next/font에는 모든 글꼴 파일에 대한 내장 자동 셀프 호스팅이 포함되어 있습니다. 이는 CSS 크기 조정 속성을 이용하여 웹 폰트를 최적으로 로드할 수 있게 해 줍니다.
이 새로운 폰트 시스템은 모든 Google Fonts를 효율적이고 개인 정보 보호를 고려하여 편리하게 사용할 수 있도록 합니다. CSS 및 글꼴 파일은 빌드 시 다운로드되어 정적 에셋과 함께 셀프 호스팅됩니다. 브라우저가 Google로 요청을 보내지 않습니다.</p>
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
<h2 id="구글-글꼴" tabindex="-1"><a class="header-anchor" href="#구글-글꼴" aria-hidden="true">#</a> 구글 글꼴</h2>
<p>구글 글꼴을 자동으로 자체 호스팅하세요. 글꼴은 배포에 포함되어 도메인과 동일한 곳에서 제공됩니다. 브라우저가 구글로 요청을 보내지 않습니다.
사용할 글꼴을 next/font/google에서 함수로 가져와서 가져오세요. 최상의 성능과 유연성을 위해 변수 글꼴을 사용하는 것을 권장합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Inter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/font/google"</span><span class="token punctuation">;</span>

<span class="token comment">// 변수 글꼴을 로드하는 경우, 글꼴 무게를 지정할 필요가 없습니다.</span>
<span class="token keyword">const</span> inter <span class="token operator">=</span> <span class="token function">Inter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  subsets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"latin"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  display<span class="token operator">:</span> <span class="token string">"swap"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span> className<span class="token operator">=</span><span class="token punctuation">{</span>inter<span class="token punctuation">.</span>className<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>body<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>만약 변수 글꼴을 사용할 수 없다면, 글꼴 무게를 지정해야 합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Roboto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/font/google"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> roboto <span class="token operator">=</span> <span class="token function">Roboto</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  weight<span class="token operator">:</span> <span class="token string">"400"</span><span class="token punctuation">,</span>
  subsets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"latin"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  display<span class="token operator">:</span> <span class="token string">"swap"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span> className<span class="token operator">=</span><span class="token punctuation">{</span>roboto<span class="token punctuation">.</span>className<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>body<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여러 가중치나 스타일을 배열을 사용하여 지정할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> roboto <span class="token operator">=</span> <span class="token function">Roboto</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"400"</span><span class="token punctuation">,</span> <span class="token string">"700"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"normal"</span><span class="token punctuation">,</span> <span class="token string">"italic"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">subsets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"latin"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">"swap"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<blockquote>
<p>알아두면 좋은 정보: 여러 단어로 된 글꼴 명은 밑줄 (_)을 사용하세요. 예: Roboto Mono의 경우 Roboto_Mono로 가져와야 합니다.</p>
</blockquote>
<h3 id="특정-서브셋-지정하기" tabindex="-1"><a class="header-anchor" href="#특정-서브셋-지정하기" aria-hidden="true">#</a> 특정 서브셋 지정하기</h3>
<p>Google Fonts는 자동으로 하위 집합(subset)으로 나뉘어집니다. 이는 글꼴 파일 크기를 줄이고 성능을 향상시킵니다. 미리 로드(preload)할 하위 집합을 정의해야 합니다. preload가 true일 때 어떤 하위 집합도 지정하지 않으면 경고가 발생합니다.
함수 호출에 추가하여 이를 수행할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> inter <span class="token operator">=</span> <span class="token function">Inter</span><span class="token punctuation">(</span><span class="token punctuation">{</span> subsets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"latin"</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>더 많은 정보를 보려면 Font API 참조 문서를 참조해주세요.</p>
<h3 id="여러-글꼴-사용하기" tabindex="-1"><a class="header-anchor" href="#여러-글꼴-사용하기" aria-hidden="true">#</a> 여러 글꼴 사용하기</h3>
<p>당신은 앱에서 여러 폰트를 가져와 사용할 수 있어요. 두 가지 방법이 있어요. 첫 번째 방법은 폰트를 내보내고 가져와서 필요한 곳에 className을 적용하는 유틸리티 함수를 만드는 거예요. 이렇게 하면 폰트가 렌더링될 때에만 사전로드되도록 할 수 있어요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Inter<span class="token punctuation">,</span> Roboto_Mono <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/font/google"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> inter <span class="token operator">=</span> <span class="token function">Inter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  subsets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"latin"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  display<span class="token operator">:</span> <span class="token string">"swap"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> roboto_mono <span class="token operator">=</span> <span class="token function">Roboto_Mono</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  subsets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"latin"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  display<span class="token operator">:</span> <span class="token string">"swap"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> inter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./fonts"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Layout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span> className<span class="token operator">=</span><span class="token punctuation">{</span>inter<span class="token punctuation">.</span>className<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>body<span class="token operator">></span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> roboto_mono <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./fonts"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token punctuation">{</span>roboto_mono<span class="token punctuation">.</span>className<span class="token punctuation">}</span><span class="token operator">></span>My page<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
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
<p>위의 예시에서 Inter는 전역적으로 적용되며, Roboto Mono는 필요할 때 가져와 적용할 수 있습니다.
또는 CSS 변수를 만들고 원하는 CSS 솔루션과 함께 사용할 수도 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Inter<span class="token punctuation">,</span> Roboto_Mono <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/font/google"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">"./global.css"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> inter <span class="token operator">=</span> <span class="token function">Inter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  subsets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"latin"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  variable<span class="token operator">:</span> <span class="token string">"--font-inter"</span><span class="token punctuation">,</span>
  display<span class="token operator">:</span> <span class="token string">"swap"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> roboto_mono <span class="token operator">=</span> <span class="token function">Roboto_Mono</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  subsets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"latin"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  variable<span class="token operator">:</span> <span class="token string">"--font-roboto-mono"</span><span class="token punctuation">,</span>
  display<span class="token operator">:</span> <span class="token string">"swap"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span> className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>inter<span class="token punctuation">.</span>variable<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>roboto_mono<span class="token punctuation">.</span>variable<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>body<span class="token operator">></span>
        <span class="token operator">&lt;</span>h1<span class="token operator">></span>My App<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>html <span class="token punctuation">{</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>font<span class="token operator">-</span>inter<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

h1 <span class="token punctuation">{</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>font<span class="token operator">-</span>roboto<span class="token operator">-</span>mono<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 예시에서 Inter는 전역적으로 적용되며, 모든 <code v-pre>&lt;h1&gt;</code> 태그는 Roboto Mono로 스타일이 적용됩니다.</p>
<blockquote>
<p>권장 사항: 클라이언트가 다운로드해야 하는 추가 리소스인 각 새로운 글꼴을 절약하려면 여러 글꼴을 삼가 사용하세요.</p>
</blockquote>
<h2 id="로컬-글꼴" tabindex="-1"><a class="header-anchor" href="#로컬-글꼴" aria-hidden="true">#</a> 로컬 글꼴</h2>
<p>다음/글꼴/로컬을 가져와서 로컬 글꼴 파일의 src를 지정하세요. 성능과 유연성을 위해 변수 글꼴을 사용하는 것을 권장합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> localFont <span class="token keyword">from</span> <span class="token string">"next/font/local"</span><span class="token punctuation">;</span>

<span class="token comment">// 글꼴 파일은 `app` 내부에 공존할 수 있습니다.</span>
<span class="token keyword">const</span> myFont <span class="token operator">=</span> <span class="token function">localFont</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  src<span class="token operator">:</span> <span class="token string">"./my-font.woff2"</span><span class="token punctuation">,</span>
  display<span class="token operator">:</span> <span class="token string">"swap"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span> className<span class="token operator">=</span><span class="token punctuation">{</span>myFont<span class="token punctuation">.</span>className<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>body<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>하나의 글꼴 패밀리에 여러 파일을 사용하려면 src를 배열로 할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> roboto <span class="token operator">=</span> <span class="token function">localFont</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"./Roboto-Regular.woff2"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token string">"400"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">"normal"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"./Roboto-Italic.woff2"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token string">"400"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">"italic"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"./Roboto-Bold.woff2"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token string">"700"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">"normal"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"./Roboto-BoldItalic.woff2"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token string">"700"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">"italic"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>폰트 API 참조를 더 보려면 이걸 확인해보세요.</p>
<h2 id="tailwind-css와-함께" tabindex="-1"><a class="header-anchor" href="#tailwind-css와-함께" aria-hidden="true">#</a> Tailwind CSS와 함께</h2>
<p>next/font는 Tailwind CSS와 함께 사용할 수 있습니다.
CSS 변수를 통해 사용 가능합니다.
아래 예제에서 우리는 next/font/google로부터 Inter 폰트를 사용합니다 (Google 또는 Local Fonts에서 폰트를 사용할 수 있습니다). 변수 옵션을 사용하여 CSS 변수 이름을 정의하고 inter로 할당하세요. 그런 다음, inter.variable을 사용하여 CSS 변수를 HTML 문서에 추가하세요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Inter<span class="token punctuation">,</span> Roboto_Mono <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/font/google"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> inter <span class="token operator">=</span> <span class="token function">Inter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  subsets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"latin"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  display<span class="token operator">:</span> <span class="token string">"swap"</span><span class="token punctuation">,</span>
  variable<span class="token operator">:</span> <span class="token string">"--font-inter"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> roboto_mono <span class="token operator">=</span> <span class="token function">Roboto_Mono</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  subsets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"latin"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  display<span class="token operator">:</span> <span class="token string">"swap"</span><span class="token punctuation">,</span>
  variable<span class="token operator">:</span> <span class="token string">"--font-roboto-mono"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span> className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>inter<span class="token punctuation">.</span>variable<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>roboto_mono<span class="token punctuation">.</span>variable<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>body<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>마지막으로 Tailwind CSS 구성에 CSS 변수를 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'tailwindcss'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span> */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./pages/**/*.{js,ts,jsx,tsx}"</span><span class="token punctuation">,</span> <span class="token string">"./components/**/*.{js,ts,jsx,tsx}"</span><span class="token punctuation">,</span> <span class="token string">"./app/**/*.{js,ts,jsx,tsx}"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">fontFamily</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">sans</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"var(--font-inter)"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">mono</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"var(--font-roboto-mono)"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 font-sans 및 font-mono 유틸리티 클래스를 사용하여 요소에 글꼴을 적용할 수 있습니다.</p>
<h2 id="사전로드-preloading" tabindex="-1"><a class="header-anchor" href="#사전로드-preloading" aria-hidden="true">#</a> 사전로드(preloading)</h2>
<p>페이지에서 글꼴 처리 함수를 호출하면 해당 글꼴은 전역적으로 사용 가능하거나 모든 경유지에 미리로드되지 않습니다. 대신 글꼴은 사용된 파일 유형에 따라 관련 경로에만 미리로드됩니다:</p>
<ul>
<li>고유한 페이지인 경우, 해당 페이지의 고유 경로에 미리로드됩니다.</li>
<li>레이아웃인 경우, 해당 레이아웃으로 둘러싸인 모든 경로에 미리로드됩니다.</li>
<li>루트 레이아웃이라면, 모든 경로에 미리로드됩니다.</li>
</ul>
<h2 id="글꼴-재사용" tabindex="-1"><a class="header-anchor" href="#글꼴-재사용" aria-hidden="true">#</a> 글꼴 재사용</h2>
<p>localFont 또는 Google 글꼴 함수를 호출할 때마다 해당 글꼴은 응용 프로그램에서 하나의 인스턴스로 호스팅됩니다. 따라서 여러 파일에서 동일한 글꼴 함수를 로드하면 동일한 글꼴의 다중 인스턴스가 호스팅됩니다. 이 상황에서는 다음을 권장합니다:</p>
<ul>
<li>글꼴 로더 함수를 하나의 공유 파일에 호출</li>
<li>상수로 내보내기</li>
<li>이 글꼴을 사용하려는 각 파일에서 해당 상수 가져오기</li>
</ul>
</div></template>
