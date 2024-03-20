<template><div><h1 id="nextjs-14-스크립트-최적화하는-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14-스크립트-최적화하는-방법" aria-hidden="true">#</a> Nextjs 14 스크립트 최적화하는 방법</h1>
<h3 id="레이아웃-스크립트" tabindex="-1"><a class="header-anchor" href="#레이아웃-스크립트" aria-hidden="true">#</a> 레이아웃 스크립트</h3>
<p>여러 루트에 대해 제3 자 스크립트를로드하려면 next/script를 가져와 레이아웃 구성 요소에 직접 스크립트를 포함하십시오:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> Script <span class="token keyword">from</span> <span class="token string">"next/script"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">DashboardLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>section<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>
      <span class="token operator">&lt;</span>Script src<span class="token operator">=</span><span class="token string">"https://example.com/script.js"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>세 번째자 스크립트는 사용자가 폴더 경로 (예: dashboard/page.js) 또는 중첩 경로 (예: dashboard/settings/page.js)에 액세스할 때 가져옵니다. Next.js는 사용자가 동일한 레이아웃에서 여러 경로 사이를 이동하더라도 스크립트가 한 번만 로드되도록 보장합니다.</p>
<h3 id="애플리케이션-스크립트" tabindex="-1"><a class="header-anchor" href="#애플리케이션-스크립트" aria-hidden="true">#</a> 애플리케이션 스크립트</h3>
<p>모든 경로에 대해 서드파티 스크립트를로드하려면 next/script를 가져와 루트 레이아웃에 직접 스크립트를 포함하십시오:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> Script <span class="token keyword">from</span> <span class="token string">"next/script"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>body<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
      <span class="token operator">&lt;</span>Script src<span class="token operator">=</span><span class="token string">"https://example.com/script.js"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>이 스크립트는 애플리케이션의 모든 경로에 액세스할 때로드되고 실행됩니다. Next.js는 사용자가 여러 페이지를 넘나들어도 해당 스크립트가 한 번만로드되도록 보장합니다.</p>
<blockquote>
<p>권장 사항: 성능에 불필요한 영향을 최소화하기 위해 특정 페이지나 레이아웃에만 서드 파티 스크립트를 포함하는 것이 좋습니다.</p>
</blockquote>
<h3 id="전략" tabindex="-1"><a class="header-anchor" href="#전략" aria-hidden="true">#</a> 전략</h3>
<p>Next/script의 기본 동작은 모든 페이지나 레이아웃에서 서드 파티 스크립트를로드할 수 있도록 허용하지만, 전략 속성을 사용하여로드 동작을 미세 조정할 수 있습니다:</p>
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
<li>beforeInteractive: 모든 Next.js 코드 및 페이지 수화가 발생하기 전에 스크립트를 로드합니다.</li>
<li>afterInteractive: (기본값) 페이지 수화가 약간 발생한 후에 스크립트를 조기에로드합니다.</li>
<li>lazyOnload: 브라우저 유휴 시간 동안에 스크립트를 나중에 로드합니다.</li>
<li>worker: (실험적) 웹 워커에서 스크립트를 로드합니다.
더 자세한 내용 및 각 전략 및 사용 사례에 대해 자세히 알아보려면 next/script API 참조 문서를 참조하십시오.</li>
</ul>
<h3 id="웹-워커로-스크립트-오프로드-실험적" tabindex="-1"><a class="header-anchor" href="#웹-워커로-스크립트-오프로드-실험적" aria-hidden="true">#</a> 웹 워커로 스크립트 오프로드 (실험적)</h3>
<blockquote>
<p>경고: 워커 전략은 아직 안정화되지 않았으며 앱 디렉터리와 아직 작동하지 않습니다. 주의해서 사용하십시오.</p>
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
<p>Partytown을 사용하는 워커 전략은 스크립트를 오프로드하고 실행하여 성능을 향상시킬 수 있습니다. 메인 스레드를 응용 프로그램 코드의 나머지에 전념함으로써 사이트의 성능을 향상시킬 수 있습니다.
이 전략은 아직 실험적이며 next.config.js에서 nextScriptWorkers 플래그가 활성화된 경우에만 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">nextScriptWorkers</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음, next를 실행하세요 (보통 npm run dev 또는 yarn dev) 그러면 Next.js가 필요한 패키지를 설치하기 위한 안내를 제공합니다:</p>
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
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span><span class="token code-language">js</span>
<span class="token code-block language-js">npm run dev</span>
<span class="token punctuation">```</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게 명령어가 나올 것입니다: npm install @builder.io/partytown을 실행하여 Partytown을 설치하세요.
설정이 완료되면 strategy=&quot;worker&quot;를 정의하면 Partytown이 자동으로 앱에 인스턴스화되고 스크립트가 웹 워커로 오프로드됩니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> Script <span class="token keyword">from</span> <span class="token string">"next/script"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Script src<span class="token operator">=</span><span class="token string">"https://example.com/script.js"</span> strategy<span class="token operator">=</span><span class="token string">"worker"</span> <span class="token operator">/</span><span class="token operator">></span>
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
<p>웹 워커에 써드 파티 스크립트를 로드할 때 고려해야 할 여러 가지 트레이드오프가 있습니다. 더 많은 정보는 Partytown의 트레이드오프 문서를 확인해주세요.</p>
<h3 id="인라인-스크립트" tabindex="-1"><a class="header-anchor" href="#인라인-스크립트" aria-hidden="true">#</a> 인라인 스크립트</h3>
<p>인라인 스크립트, 즉 외부 파일에서 로드되지 않은 스크립트는 스크립트 컴포넌트에서도 지원됩니다. 중괄호 안에 JavaScript를 작성하여 다음과 같이 작성할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Script id<span class="token operator">=</span><span class="token string">"show-banner"</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">document.getElementById('banner').classList.remove('hidden')</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Script<span class="token operator">></span>
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
<p>또는 dangerouslySetInnerHTML 속성을 사용하여:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Script
  id<span class="token operator">=</span><span class="token string">"show-banner"</span>
  dangerouslySetInnerHTML<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
    <span class="token literal-property property">__html</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">document.getElementById('banner').classList.remove('hidden')</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>경고: Next.js에서 인라인 스크립트를 추적하고 최적화하려면 id 속성이 할당되어 있어야 합니다.</p>
</blockquote>
<h3 id="추가-코드-실행하기" tabindex="-1"><a class="header-anchor" href="#추가-코드-실행하기" aria-hidden="true">#</a> 추가 코드 실행하기</h3>
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
<p>스크립트 구성 요소와 함께 이벤트 핸들러를 사용하여 특정 이벤트가 발생한 후 추가 코드를 실행할 수 있습니다:</p>
<ul>
<li>onLoad: 스크립트가 로드를 완료한 후 코드를 실행합니다.</li>
<li>onReady: 스크립트가 로드를 완료하고 컴포넌트가 마운트될 때마다 코드를 실행합니다.</li>
<li>onError: 스크립트가 로드에 실패했을 때 코드를 실행합니다.
이러한 핸들러는 next/script가 가져와져서 &quot;use client&quot;가 코드의 첫 줄로 정의된 클라이언트 컴포넌트 내에서만 작동합니다:</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">'use client'</span>

<span class="token keyword">import</span> Script <span class="token keyword">from</span> <span class="token string">'next/script'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Script
        src<span class="token operator">=</span><span class="token string">"https://example.com/script.js"</span>
        onLoad<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'스크립트가 로드되었습니다'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>다음/script API 참조를 참고하여 각 이벤트 핸들러에 대해 자세히 알아보고 예제를 확인해 보세요.</p>
<h3 id="추가-속성" tabindex="-1"><a class="header-anchor" href="#추가-속성" aria-hidden="true">#</a> 추가 속성</h3>
<p>Script 구성 요소에서 사용되지 않는 nonce나 사용자 정의 데이터 속성과 같이 <code v-pre>&lt;script&gt;</code> 요소에 할당할 수 있는 여러 DOM 속성이 있습니다. 추가 속성을 포함하면 HTML에 포함된 최종 최적화된 <code v-pre>&lt;script&gt;</code> 요소로 자동으로 전달됩니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> Script <span class="token keyword">from</span> <span class="token string">"next/script"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Script src<span class="token operator">=</span><span class="token string">"https://example.com/script.js"</span> id<span class="token operator">=</span><span class="token string">"example-script"</span> nonce<span class="token operator">=</span><span class="token string">"XUENAJFW"</span> data<span class="token operator">-</span>test<span class="token operator">=</span><span class="token string">"script"</span> <span class="token operator">/</span><span class="token operator">></span>
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
</div></template>
