<template><div><p><img src="@source/docs/Nextjs/2024-04-05-ExcitingReactFeaturesin2023ALookintotheFutureofWebDevelopment/img/ExcitingReactFeaturesin2023ALookintotheFutureofWebDevelopment_0.png" alt="ExcitingReactFeaturesin2023ALookintotheFutureofWebDevelopment_0"></p>
<p>웹 개발의 빠르게 변화하는 세계에서 React는 가장 인기 있는 JavaScript 라이브러리 중 하나로 등장했습니다. 시작 이후로 React는 개발자가 강력하고 상호작용적인 웹 애플리케이션을 만들 수 있는 방식을 혁신했습니다.</p>
<p>2023년을 맞아 React는 지속적으로 발전하며 생산성을 향상시키고 개발 프로세스를 단순화하는 새로운 기능과 개선 사항을 도입했습니다. 2023년에 React에 도입된 흥미로운 기능들과 사용 방법을 보여주는 코드 예제를 소개하겠습니다.</p>
<h1 id="동시-모드-concurrent-mode" tabindex="-1"><a class="header-anchor" href="#동시-모드-concurrent-mode" aria-hidden="true">#</a> 동시 모드(Concurrent Mode)</h1>
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
<p>2023년 발매 예정인 React의 Concurrent Mode는 복잡하고 연산이 많은 애플리케이션에서 특히 성능 향상을 약속합니다. 이 모드는 React가 여러 작업을 동시에 처리할 수 있게 하여 작업을 작은 단위로 나누거나 &quot;fibers&quot;로 분할합니다. 이 기능 세트는 비용이 많이 드는 계산, 네트워크 요청 또는 대규모 컴포넌트 트리 렌더링을 수행할 때에도 응답성을 유지할 수 있도록 합니다.</p>
<p>여러 예제를 통해 이 새로운 모드를 직접 보겠습니다:</p>
<ul>
<li>새로운 useTransition 훅을 사용하여 느린 렌더링 프로세스 중에 로딩 상태를 보여주는 예제.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useTransition <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ReactComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isPending<span class="token punctuation">,</span> startTransition<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useTransition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">startTransition</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 느린 작업을 수행합니다 (계산 또는 렌더링 또는 데이터 가져오기 등)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token punctuation">{</span>isPending <span class="token operator">?</span> <span class="token string">'로딩 중...'</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span><span class="token operator">></span>프로세스 시작<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<ol start="2">
<li>다음 예제에서는 응용 프로그램의 초기 로드 시간을 개선하는 데 사용되는 React.lazy 함수를 사용할 것입니다.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token comment">// 레이지로 렌더링될 컴포넌트 정의</span>
<span class="token keyword">const</span> LazyComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./LazyComponent'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 레이지로 로드되는 동안 표시될 대체 컴포넌트 정의</span>
<span class="token keyword">const</span> <span class="token function-variable function">LoadingFallback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>React Concurrent Mode 예제<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>LoadingFallback <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>LazyComponent <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서는 또한 React Concurrent Mode의 Suspense 컴포넌트를 사용하여 레이지 컴포넌트의 로딩을 처리합니다. LazyComponent는 React.lazy() 함수를 사용하여 가져오며, 필요할 때 컴포넌트를 레이지 로드할 수 있도록 합니다.</p>
<p>Suspense 컴포넌트는 레이지 컴포넌트가 로드되는 동안 렌더링될 컴포넌트를 나타내는 fallback 속성을 사용합니다. 이 경우 LoadingFallback 컴포넌트를 정의하여 간단한 로딩 메시지를 표시합니다.</p>
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
<p><strong>번들러나 번들 캐쉬 수정 및 사용자 지정 파일 확장자 지정 외에도 Vue CLI 3는 다양한 기능을 제공합니다. 다음은 몇 가지 추가 기능입니다:</strong></p>
<ol>
<li>
<p><strong>플러그인 기반 아키텍처:</strong> Vue CLI 3는 플러그인 시스템을 통해 사용자 정의 기능을 손쉽게 추가할 수 있습니다. 이러한 플러그인은 프로젝트 설정, 구성 및 빌드 과정 등을 수정할 수 있습니다. 이를 통해 프로젝트에 필요한 기능을 유연하게 확장할 수 있습니다.</p>
</li>
<li>
<p><strong>UI로 프로젝트 구성:</strong> Vue CLI UI는 GUI 방식으로 프로젝트를 관리할 수 있는 기능을 제공합니다. 이를 통해 사용자는 터미널 명령어를 사용하지 않고도 프로젝트를 관리하고 모니터링할 수 있습니다. 이는 시각적인 환경에서 개발을 원하는 개발자에게 유용할 수 있습니다.</p>
</li>
</ol>
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
<p>먼저, Concurrent Mode가 활성화된 React 애플리케이션 설정을 사용하도록 하겠습니다. Concurrent Mode를 사용하려면 React 버전 18 이상이 필요합니다. 아래는 애플리케이션의 기본 구조입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// App.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ChatContainer <span class="token keyword">from</span> <span class="token string">'./ChatContainer'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"App"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>ChatContainer <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ChatContainer.js</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect<span class="token punctuation">,</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createChatGPTSession<span class="token punctuation">,</span> generateChatGPTResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./api'</span><span class="token punctuation">;</span> <span class="token comment">// ChatGPT와 상호작용하기 위한 API 모듈이 있다고 가정합니다</span>

<span class="token keyword">const</span> ChatConversation <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./ChatConversation'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ChatInput <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./ChatInput'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ChatContainer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>conversation<span class="token punctuation">,</span> setConversation<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// ChatGPT 세션 초기화</span>
    <span class="token keyword">const</span> session <span class="token operator">=</span> <span class="token function">createChatGPTSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 미래 사용을 위해 세션 저장 또는 정리</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 세션 정리</span>
      <span class="token comment">// ChatGPT 세션과 관련된 자원 닫기 또는 해제</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleUserMessage</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 사용자 메시지를 대화에 추가</span>
    <span class="token function">setConversation</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prevConversation</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>prevConversation<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token string">'user'</span><span class="token punctuation">,</span> message <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// ChatGPT에서 응답 생성</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">generateChatGPTResponse</span><span class="token punctuation">(</span>session<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// generateChatGPTResponse 함수는 ChatGPT의 응답을 얻기 위해 API에 요청을 보내는 것으로 가정</span>

    <span class="token comment">// ChatGPT의 응답을 대화에 추가</span>
    <span class="token function">setConversation</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prevConversation</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>prevConversation<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token string">'chatbot'</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> response <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"ChatContainer"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>Chat <span class="token keyword">with</span> ChatGPT<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>ChatConversation conversation<span class="token operator">=</span><span class="token punctuation">{</span>conversation<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>ChatInput onMessage<span class="token operator">=</span><span class="token punctuation">{</span>handleUserMessage<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ChatContainer<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ChatConversation.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ChatConversation</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> conversation <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"ChatConversation"</span><span class="token operator">></span>
      <span class="token punctuation">{</span>conversation<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">message </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>message<span class="token punctuation">.</span>author<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token punctuation">{</span>message<span class="token punctuation">.</span>message<span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ChatConversation<span class="token punctuation">;</span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ChatInput.js</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ChatInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onMessage <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>message<span class="token punctuation">,</span> setMessage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">onMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">"ChatInput"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>input
        type<span class="token operator">=</span><span class="token string">"text"</span>
        placeholder<span class="token operator">=</span><span class="token string">"메시지를 입력해주세요..."</span>
        value<span class="token operator">=</span><span class="token punctuation">{</span>message<span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setMessage</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>보내기<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서 ChatContainer 컴포넌트는 useState 훅을 사용하여 대화 상태를 관리합니다. useEffect 훅은 컴포넌트가 마운트될 때 ChatGPT 세션을 초기화하는 데 사용됩니다. 사용자가 메시지를 보낼 때 handleUserMessage 함수가 호출되고 대화 상태를 사용자의 메시지로 업데이트하며 ChatGPT에서 응답을 생성하기 위해 generateChatGPTResponse 함수가 호출됩니다(백엔드 설정에 따라 구현해야 함).</p>
<p>그리고 ChatConversation 컴포넌트에서 대화가 렌더링되며 사용자 입력은 ChatInput 컴포넌트를 통해 캡처됩니다. React.lazy 함수를 사용하여 이러한 컴포넌트를 지연 로딩하여 Concurrent Mode의 성능을 향상시킬 수 있습니다.</p>
<p>이것은 단순화된 예제이므로 귀하의 구체적인 요구사항 및 ChatGPT API의 통합 세부 정보에 따라 코드를 수정해야 할 수도 있습니다.```</p>
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
<h1 id="리액트-서버-컴포넌트" tabindex="-1"><a class="header-anchor" href="#리액트-서버-컴포넌트" aria-hidden="true">#</a> 리액트 서버 컴포넌트</h1>
<p>리액트 서버 컴포넌트는 리액트의 컴포넌트 모델을 서버 측 렌더링에도 적용할 수 있는 실험적인 기능입니다. 서버 컴포넌트를 사용하면 서버 및 클라이언트 리소스를 활용한 상호 작용 UI를 구축할 수 있어서 보다 빠르고 효율적인 렌더링이 가능합니다. 서버 컴포넌트는 서버와 클라이언트 간의 코드 공유를 통해 유연성을 제공하며, 상호작용 시간을 줄이고 SEO를 개선할 수 있습니다.</p>
<ul>
<li>기본 예제</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> serverComponent<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-server-component'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Counter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
      클릭한 횟수<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">serverComponent</span><span class="token punctuation">(</span>Counter<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위 예제에서는 클릭할 때 count 상태가 증가하는 간단한 Counter 컴포넌트를 정의합니다. react-server-component에서 serverComponent를 사용하여이 컴포넌트를 서버 및 클라이언트에서 원활하게 렌더링하여 더 빠르고 더 인터랙티브 한 사용자 경험을 제공할 수 있습니다.</p>
<ol start="2">
<li>조금 더 복잡한 예제.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// serverComponent.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createSignal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> renderToStringAsync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-dom/server'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MyServerComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">createSignal</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>서버 컴포넌트 예제<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>Count<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>증가<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">renderServerComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">renderToStringAsync</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MyServerComponent <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> html<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> renderServerComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서는 react 패키지에서 createSignal 함수를 사용하여 count 변수의 상태를 관리합니다. 서버 컴포넌트는 제목을 렌더링하고 현재 카운트를 표시하는 단락 및 카운트를 증가시키는 버튼을 렌더링합니다. 버튼을 클릭할 때마다 setCount 함수를 사용하여 count 값이 업데이트됩니다.</p>
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
<p><code v-pre>renderServerComponent</code> 함수는 서버 컴포넌트를 문자열로 렌더링하기 위해 react-dom/server의 <code v-pre>renderToStringAsync</code>를 사용하는 비동기 함수입니다. 이 함수는 생성된 HTML을 반환합니다.</p>
<p>이 서버 컴포넌트를 서버 측 코드에서 사용하여 해당 컴포넌트를 렌더링하고 클라이언트 요청에 응답으로 보낼 수 있습니다.</p>
<p>서버 컴포넌트 API는 실험적인 기능이며 변경될 수 있습니다. 서버 컴포넌트와 함께 작업하기 위해 React 및 관련 패키지의 적절한 버전을 사용해야 합니다.</p>
<h1 id="react-query-통합" tabindex="-1"><a class="header-anchor" href="#react-query-통합" aria-hidden="true">#</a> React Query 통합</h1>
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
<p>리액트 쿼리는 리액트 애플리케이션에서 비동기 데이터 관리를 간단하게 해주는 강력한 데이터 가져오기 라이브러리입니다. 2023년 현재, 리액트 개발자들에게 필수적인 도구가 되었으며, 리액트와의 통합이 매우 원활합니다. 예시를 살펴봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-query'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">UserProfile</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> isLoading<span class="token punctuation">,</span> isError <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/api/user'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLoading<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>isError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Error fetching user data<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> UserProfile<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 코드 스니펫에서는 React Query의 useQuery 훅을 사용하여 API에서 사용자 데이터를 가져오고 있습니다. 이 훅은 로딩 상태, 에러 처리, 데이터 캐싱 등을 자동으로 처리하여 리액트 애플리케이션에서 데이터 가져오기를 보다 간편하고 효율적으로 만들어줍니다.</p>
<h1 id="리액트-개발자-도구-프로파일러-업그레이드" tabindex="-1"><a class="header-anchor" href="#리액트-개발자-도구-프로파일러-업그레이드" aria-hidden="true">#</a> 리액트 개발자 도구 프로파일러 업그레이드</h1>
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
<p>리액트 DevTools는 리액트 애플리케이션의 디버깅을 돕는 브라우저 확장 프로그램으로, 컴포넌트의 성능을 더 잘 이해할 수 있도록 지속적으로 발전하고 있어요. 2023년에는 향상된 프로파일링 기능이 추가되어, 애플리케이션의 렌더링 및 다시 렌더링 성능을 분석하고 최적화할 수 있는 기회를 제공했어요. 프로파일러를 통해 성능 병목 현상을 식별하고 해결하며, 불필요한 렌더링을 줄이고 원활한 사용자 경험을 보장할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> unstable_trace <span class="token keyword">as</span> trace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'scheduler/tracing'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ReactComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token punctuation">{</span><span class="token comment">/* 여러분의 컴포넌트 JSX */</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Profiler id<span class="token operator">=</span><span class="token string">"MyComponent"</span> onRender<span class="token operator">=</span><span class="token punctuation">{</span>callback<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>MyComponent <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>Profiler<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token parameter">id<span class="token punctuation">,</span> phase<span class="token punctuation">,</span> actualDuration<span class="token punctuation">,</span> baseDuration<span class="token punctuation">,</span> startTime<span class="token punctuation">,</span> commitTime</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 여기서 콜백 처리</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Render'</span><span class="token punctuation">,</span> id<span class="token punctuation">,</span> phase<span class="token punctuation">,</span> actualDuration<span class="token punctuation">,</span> baseDuration<span class="token punctuation">,</span> startTime<span class="token punctuation">,</span> commitTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="리액트-에러-바운더리와-서스펜스" tabindex="-1"><a class="header-anchor" href="#리액트-에러-바운더리와-서스펜스" aria-hidden="true">#</a> 리액트 에러 바운더리와 서스펜스</h1>
<p>리액트 에러 바운더리를 사용하면 렌더링 중 발생하는 오류를 잡아내고 처리할 수 있어요. 서스펜스와 함께 사용하면 데이터를 불러오는 동안 대체 UI를 만들 수 있어요. 아래는 예시에요:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ErrorBoundary <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ReactComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ErrorBoundary fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div<span class="token operator">></span>오류가 발생했습니다<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div<span class="token operator">></span>로딩 중<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token comment">/* 잠재적 오류 또는 비동기 로딩이 발생할 수 있는 컴포넌트들 */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ErrorBoundary<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="react-hooks-개선사항" tabindex="-1"><a class="header-anchor" href="#react-hooks-개선사항" aria-hidden="true">#</a> React Hooks 개선사항</h1>
<p>React Hooks는 새로운 기능과 개선 사항과 함께 계속 발전하고 있습니다. 2023년에는 새로운 내장 훅들을 활용할 수 있습니다. useContextSelector 훅의 예시를 살펴보겠습니다. 이 훅을 사용하면 context 값의 특정 부분에 구독할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useContextSelector <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> ReactContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ReactComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">useContextSelector</span><span class="token punctuation">(</span>MyContext<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">contextValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> contextValue<span class="token punctuation">.</span>someValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
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
<h2 id="jsx-변환" tabindex="-1"><a class="header-anchor" href="#jsx-변환" aria-hidden="true">#</a> JSX 변환</h2>
<p>React는 모든 파일에서 React import가 필요없는 새로운 JSX 변환을 소개했습니다. 이는 코드베이스를 간소화하고 성능을 향상시킵니다. 예시가 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// JSX 변환 이전</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Hello<span class="token punctuation">,</span> World<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MyComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// JSX 변환 이후</span>
<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Hello<span class="token punctuation">,</span> World<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MyComponent<span class="token punctuation">;</span>
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
<p>새 JSX 변환을 사용하면 각 JSX 코드 파일에서 React를 명시적으로 가져와야 하는 필요가 없어졌어요!</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>이게 전부에요! React는 계속 발전하며 개발자 생산성을 높이고 웹 애플리케이션의 전체 성능을 향상시키는 흥미로운 기능을 소개하고 있어요.</p>
<p>이 글에서는 2023년에 React에서 소개된 중요한 기능 중 일부를 살펴보았어요. 이 중에는 동시 모드, React 서버 구성 요소, React Query 통합, React DevTools 프로파일러 개선, Suspense와 함께 사용되는 React 에러 경계, React Hooks 개선, 그리고 JSX 변환 등이 있어요.</p>
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
<p>앞으로 나아가면서 React의 최신 개발 동향을 계속해서 따라가는 것이 중요합니다. 이를 통해 React의 모든 가능성을 활용하고 첨단 웹 애플리케이션을 개발할 수 있습니다.</p>
<p>또한, 흥미로운 웹 지오메트리와 Electron + ioHook 통합에 관한 다른 기사도 확인해보세요:</p>
<h2 id="즐겁게-코딩하세요" tabindex="-1"><a class="header-anchor" href="#즐겁게-코딩하세요" aria-hidden="true">#</a> 즐겁게 코딩하세요!</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>연락하고 싶으시면<span class="token operator">?</span>

소셜 네트워크에서 저를 찾아보세요<span class="token operator">:</span> Instagram<span class="token punctuation">,</span> Facebook<span class="token punctuation">,</span> Twitter<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
