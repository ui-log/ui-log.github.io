<template><div><h1 id="계측" tabindex="-1"><a class="header-anchor" href="#계측" aria-hidden="true">#</a> 계측</h1>
<p>계측은 코드를 사용하여 모니터링 및 로깅 도구를 응용 프로그램에 통합하는 프로세스입니다. 이를 통해 응용 프로그램의 성능과 동작을 추적하고 프로덕션 환경에서 문제를 해결할 수 있습니다.</p>
<h2 id="규칙" tabindex="-1"><a class="header-anchor" href="#규칙" aria-hidden="true">#</a> 규칙</h2>
<p>계측을 설정하려면 프로젝트의 루트 디렉토리에 instrumentation.ts|js 파일을 만드세요 (또는 사용 중인 경우 src 폴더 안에).</p>
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
<p>파일에서 등록 함수를 내보내세요. 이 함수는 새로운 Next.js 서버 인스턴스가 시작될 때 한 번 호출됩니다.
예를 들어, Next.js를 OpenTelemetry와 @vercel/otel로 사용하려면:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> registerOTel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@vercel/otel"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">registerOTel</span><span class="token punctuation">(</span><span class="token string">"next-app"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>전체 구현 예제인 Next.js with OpenTelemetry를 참조하세요.</p>
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
<p>유용한 정보
이 기능은 실험적입니다. 사용하려면 next.config.js에서 experimental.instrumentationHook = true;를 명시적으로 정의해야 합니다.
계측 파일은 프로젝트의 루트에 있어야 하며 응용 프로그램이나 페이지 디렉토리 내부에 위치해서는 안됩니다. src 폴더를 사용하는 경우 파일을 pages와 app과 함께 src 내부에 배치해야 합니다.
파일 확장자 config 옵션을 사용하여 접미사를 추가하는 경우 계측 파일 이름도 일치하도록 업데이트해야 합니다.</p>
</blockquote>
<h2 id="예시" tabindex="-1"><a class="header-anchor" href="#예시" aria-hidden="true">#</a> 예시</h2>
<h3 id="사이드-이펙트가-있는-파일-가져오기" tabindex="-1"><a class="header-anchor" href="#사이드-이펙트가-있는-파일-가져오기" aria-hidden="true">#</a> 사이드 이펙트가 있는 파일 가져오기</h3>
<p>가끔 코드에서 파일을 가져와야 하는 경우가 있습니다. 이는 파일이 일으키는 사이드 이펙트 때문일 수 있습니다. 예를 들어, 전역 변수 집합을 정의하는 파일을 가져올 수 있지만 코드에서 해당 가져온 파일을 명시적으로 사용하지 않을 수 있습니다. 그래도 이렇게 한다면 패키지에서 선언한 전역 변수에 액세스할 수 있습니다.</p>
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
<p>제안드리는 대로, 등록 함수 내에서 JavaScript import 구문을 사용하여 파일을 가져오는 것이 좋습니다. 아래 예시는 등록 함수에서 import의 기본적인 사용법을 보여줍니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"package-with-side-effect"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아 두면 좋은 점:
파일을 파일 상단이 아닌 등록 함수 내부에서 가져오는 것을 권장합니다. 이렇게 함으로써 코드 내에서 사이드 이펙트를 한 곳에 함께 배치하고 파일 상단에서 전역으로 가져오는 것으로 인한 의도치 않은 결과를 피할 수 있습니다.</p>
</blockquote>
<h3 id="런타임-특정-코드-가져오기" tabindex="-1"><a class="header-anchor" href="#런타임-특정-코드-가져오기" aria-hidden="true">#</a> 런타임 특정 코드 가져오기</h3>
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
<p>Next.js에서는 모든 환경에서 레지스터를 호출하므로 특정 런타임(예: Edge 또는 Node.js)을 지원하지 않는 코드를 조건부로 가져와야 합니다. 현재 환경을 얻으려면 NEXT_RUNTIME 환경 변수를 사용할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_RUNTIME</span> <span class="token operator">===</span> <span class="token string">"nodejs"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"./instrumentation-node"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_RUNTIME</span> <span class="token operator">===</span> <span class="token string">"edge"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"./instrumentation-edge"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
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
</div></template>
