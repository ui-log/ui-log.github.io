<template><div><h1 id="에러-처리" tabindex="-1"><a class="header-anchor" href="#에러-처리" aria-hidden="true">#</a> 에러 처리</h1>
<p>이 문서에서는 개발, 서버 측, 그리고 클라이언트 측 오류를 어떻게 처리할 수 있는지 설명합니다.</p>
<h2 id="개발-중-오류-처리" tabindex="-1"><a class="header-anchor" href="#개발-중-오류-처리" aria-hidden="true">#</a> 개발 중 오류 처리</h2>
<p>Next.js 애플리케이션의 개발 단계에서 실행 오류가 발생하면 웹페이지를 덮는 모달이 표시됩니다. 이 모달은 overlay라고도 합니다. 이 overlay는 next dev를 사용하여 개발 서버를 실행할 때에만 표시되며 pnpm dev, npm run dev, yarn dev 또는 bun dev를 통해 실행됩니다. 오류를 해결하면 overlay가 자동으로 사라집니다.</p>
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
<p>여기 오버레이의 예시가 있어요:</p>
<h2 id="서버-오류-처리" tabindex="-1"><a class="header-anchor" href="#서버-오류-처리" aria-hidden="true">#</a> 서버 오류 처리</h2>
<p>Next.js는 애플리케이션 내에서 발생한 서버 측 오류를 처리하기 위해 기본적으로 정적 500 페이지를 제공합니다. 또한 pages/500.js 파일을 생성하여 이 페이지를 사용자 정의할 수도 있습니다.</p>
<p>애플리케이션에 500 페이지를 가지고 있어도 특정 오류를 앱 사용자에게 표시하지 않습니다.</p>
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
<p>404 페이지를 사용하여 파일을 찾을 수 없는 특정 런타임 오류를 처리할 수도 있습니다.</p>
<h2 id="클라이언트-오류-처리" tabindex="-1"><a class="header-anchor" href="#클라이언트-오류-처리" aria-hidden="true">#</a> 클라이언트 오류 처리</h2>
<p>React 에러 바운더리는 클라이언트에서 발생하는 JavaScript 오류를 우아하게 처리할 수 있는 방법입니다. 이를 통해 애플리케이션의 다른 부분이 계속 작동하는 것을 가능케 합니다. 페이지가 충돌하는 것을 방지하는 것뿐만 아니라 사용자 정의 폴백 컴포넌트를 제공하고 심지어 오류 정보를 기록할 수도 있습니다.</p>
<p>Next.js 애플리케이션에 에러 바운더리를 사용하려면 pages/_app.js 파일에서 Component prop를 감싸는 클래스 컴포넌트 에러 바운더리를 만들어야 합니다. 이 컴포넌트는 다음을 담당합니다:</p>
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
<li>에러가 발생한 후 대체 UI를 렌더링합니다.</li>
<li>애플리케이션 상태를 초기화하는 방법을 제공합니다.</li>
<li>에러 정보를 기록합니다.</li>
</ul>
<p>ErrorBoundary 클래스 컴포넌트를 만들어 React.Component를 확장할 수 있습니다. 예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">ErrorBoundary</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 에러 여부를 추적하는 상태 변수 정의</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">hasError</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">static</span> <span class="token function">getDerivedStateFromError</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 다음 렌더 시 대체 UI를 표시하도록 상태 업데이트</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">hasError</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">componentDidCatch</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> errorInfo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 여기서 자체 에러 로깅 서비스를 사용할 수 있습니다</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span> error<span class="token punctuation">,</span> errorInfo <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 에러가 발생했는지 확인</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>hasError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 사용자 정의 대체 UI를 렌더링할 수 있습니다.</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>h2<span class="token operator">></span>앗<span class="token punctuation">,</span> 에러가 발생했습니다<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
          <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"button"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">hasError</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
            다시 시도해보기
          <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 에러가 없는 경우 자식 컴포넌트를 반환합니다.</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ErrorBoundary<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ErrorBoundary 컴포넌트는 hasError 상태를 추적합니다. 이 상태 변수의 값은 불리언입니다. hasError 값이 true인 경우 ErrorBoundary 컴포넌트는 대체 UI를 렌더링하고, 그렇지 않으면 자식 컴포넌트를 렌더링합니다.</p>
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
<p>에러 경계(ErrorBoundary) 컴포넌트를 만든 후, Next.js 애플리케이션의 pages/_app.js 파일에서 Component prop을 감싸기 위해 이를 import하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ErrorBoundary 컴포넌트를 import 합니다</span>
<span class="token keyword">import</span> ErrorBoundary <span class="token keyword">from</span> <span class="token string">"../components/ErrorBoundary"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token comment">// ErrorBoundary 컴포넌트로 Component prop을 감쌉니다</span>
    <span class="token operator">&lt;</span>ErrorBoundary<span class="token operator">></span>
      <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ErrorBoundary<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MyApp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>React 문서에서 에러 경계(Error Boundaries)에 대해 더 자세히 알아볼 수 있습니다.</p>
<h3 id="에러-보고하기" tabindex="-1"><a class="header-anchor" href="#에러-보고하기" aria-hidden="true">#</a> 에러 보고하기</h3>
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
<p>클라이언트 오류를 모니터링하려면 Sentry, Bugsnag 또는 Datadog와 같은 서비스를 사용하십시오.</p>
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
