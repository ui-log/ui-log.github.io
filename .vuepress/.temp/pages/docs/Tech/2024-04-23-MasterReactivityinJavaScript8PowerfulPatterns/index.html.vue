<template><div><p>웹 개발 영역에서 반응성은 중요한 역할을 합니다. 시스템이 데이터 변경에 동적으로 응답하는 방식을 나타냅니다. 이 게시물에서는 반응성을 효과적으로 활용할 수 있는 여덟 가지 주요 JavaScript 패턴에 대해 다뤄보겠습니다.</p>
<p><img src="@source/docs/Tech/2024-04-23-MasterReactivityinJavaScript8PowerfulPatterns/img/MasterReactivityinJavaScript8PowerfulPatterns_0.png" alt="MasterReactivityinJavaScript8PowerfulPatterns_0.png"></p>
<p>왜 반응성을 채택해야 하는가?</p>
<p>프론트엔드 개발자로서, 브라우저 내에서 비동기 환경과 끊임없이 씨름합니다. 현대적인 웹 인터페이스는 사용자 상호작용에 신속하게 반응해야 합니다. 이는 UI 업데이트, 네트워크 요청 보내기, 탐색 관리 등 여러 작업을 포함합니다.</p>
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
<p>프레임워크는 종종 반응성과 동일시되지만, 순수 JavaScript에서 이러한 패턴을 구현함으로써 심층적인 이해를 얻을 수 있습니다. 우리는 이러한 패턴을 직접 개발하는 것뿐만 아니라, 반응성의 기초 위에 구축된 핵심 브라우저 API를 탐험할 것입니다.</p>
<p>목차:</p>
<ul>
<li>Pub/Sub: 간편한 데이터 흐름 관리</li>
<li>Custom Events: 쉬운 반응성을 위한 브라우저 내장 Pub/Sub</li>
<li>Custom Event Targets: 집중된 반응성 제어</li>
<li>Observer Pattern: 독립된 코드를 위한 유연한 업데이트</li>
<li>Proxy를 사용한 반응 속성: 실시간 변경 추적</li>
<li>개별 속성 반응성: 세밀한 객체 추적</li>
<li>MutationObserver로 반응하는 HTML 속성: DOM 변경으로 작용하는 트리거</li>
<li>IntersectionObserver로 반응하는 스크롤: 가시성 기반 상호작용</li>
</ul>
<h2 id="_1-pub-sub-간편한-데이터-흐름-관리" tabindex="-1"><a class="header-anchor" href="#_1-pub-sub-간편한-데이터-흐름-관리" aria-hidden="true">#</a> 1. Pub/Sub: 간편한 데이터 흐름 관리</h2>
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
<p>PubSub은 가장 일반적으로 사용되는 기본적인 반응성 패턴 중 하나입니다. 이는 데이터 업데이트를 전파하는 발행자(데이터 업데이트에 반응하는 엔티티)와 해당 업데이트에 반응하는 구독자(반응하는 엔티티) 간의 커뮤니케이션 채널을 설정합니다.</p>
<p>예시:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">PubSub</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>topics <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 이벤트 이름을 구독자 배열에 매핑</span>
  <span class="token punctuation">}</span>
  <span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">topic<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>topics<span class="token punctuation">[</span>topic<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>topics<span class="token punctuation">[</span>topic<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>topics<span class="token punctuation">[</span>topic<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">publish</span><span class="token punctuation">(</span><span class="token parameter">topic<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>topics<span class="token punctuation">[</span>topic<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>topics<span class="token punctuation">[</span>topic<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> pubsub <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PubSub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pubsub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">'news'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">받은 뉴스: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pubsub<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">'news'</span><span class="token punctuation">,</span> <span class="token string">'신선한 헤드라인 도착!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그 중요한 사용 예시 중 하나는 Redux입니다. 이 인기 있는 상태 관리 라이브러리는 이 패턴(나아가 Flux 아키텍처)을 기반으로 합니다. Redux의 컨텍스트에서 작업은 매우 간단합니다:</p>
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
<li>Publisher: 상점은 발행자 역할을 합니다. 행동이 발생하면 상점은 모든 구독한 구성 요소들에게 상태 변경에 대해 알립니다.</li>
<li>Subscriber: 응용 프로그램의 UI 구성 요소는 구독자입니다. Redux 상점을 구독하고 상태가 변경될 때마다 업데이트를받습니다.</li>
</ul>
<h2 id="_2-사용자-지정-이벤트-간편한-반응성을-위한-브라우저-내장-pub-sub" tabindex="-1"><a class="header-anchor" href="#_2-사용자-지정-이벤트-간편한-반응성을-위한-브라우저-내장-pub-sub" aria-hidden="true">#</a> 2. 사용자 지정 이벤트: 간편한 반응성을 위한 브라우저 내장 Pub/Sub</h2>
<p>브라우저는 CustomEvent 클래스 및 dispatchEvent 메서드를 통해 사용자 지정 이벤트를 트리거하고 구독하는 API를 제공합니다. 후자는 이벤트를 트리거하는 뿐만 아니라 원하는 데이터를 첨부할 수 있는 기능을 제공합니다.</p>
<p>예시:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> customEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CustomEvent</span><span class="token punctuation">(</span><span class="token string">'customEvent'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">detail</span><span class="token operator">:</span> <span class="token string">'사용자 지정 이벤트 데이터'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'custom-event-target-element'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'customEvent'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">사용자 정의 이벤트를 수신함: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>event<span class="token punctuation">.</span>detail<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
element<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>customEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-사용자-정의-이벤트-타깃-집중적인-반응성-제어" tabindex="-1"><a class="header-anchor" href="#_3-사용자-정의-이벤트-타깃-집중적인-반응성-제어" aria-hidden="true">#</a> 3. 사용자 정의 이벤트 타깃: 집중적인 반응성 제어</h2>
<p>만약 전역적으로 window 객체에 이벤트를 발행하고 싶지 않다면, 직접 이벤트 타깃을 만들 수 있습니다.</p>
<p>원시 EventTarget 클래스를 확장하여 새 인스턴스로 이벤트를 발행할 수 있습니다. 이렇게 하면 이벤트가 새 클래스 자체에서만 트리거되어 전역 전파가 방지됩니다. 게다가, 이 특정 인스턴스에 직접 핸들러를 추가할 수 있는 유연성을 가질 수 있습니다.</p>
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
<p>예시:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">CustomEventTarget</span> <span class="token keyword">extends</span> <span class="token class-name">EventTarget</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">triggerCustomEvent</span><span class="token punctuation">(</span><span class="token parameter">eventName<span class="token punctuation">,</span> eventData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CustomEvent</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">detail</span><span class="token operator">:</span> eventData <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> customTarget <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CustomEventTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
customTarget<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'customEvent'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Custom event received with data: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>event<span class="token punctuation">.</span>detail<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
customTarget<span class="token punctuation">.</span><span class="token function">triggerCustomEvent</span><span class="token punctuation">(</span><span class="token string">'customEvent'</span><span class="token punctuation">,</span> <span class="token string">'Hello, This is a custom event!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-observer-pattern-decoupled-code에-유연한-업데이트" tabindex="-1"><a class="header-anchor" href="#_4-observer-pattern-decoupled-code에-유연한-업데이트" aria-hidden="true">#</a> 4. Observer Pattern: Decoupled Code에 유연한 업데이트</h2>
<p>옵서버 패턴은 PubSub과 매우 유사합니다. Subject에 구독하고 Subject는 구독자(Observer)에게 변경 사항을 알리고, 그에 따라 반응할 수 있도록 합니다. 이 패턴은 Decoupled 및 유연한 아키텍처 구축에서 중요한 역할을 합니다.</p>
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
<p>예시:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Subject</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>observers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token parameter">observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">notify</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">observer</span><span class="token punctuation">)</span> <span class="token operator">=></span> observer<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> received an update: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> subject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Subject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> observer1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span><span class="token string">'Observer 1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> observer2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span><span class="token string">'Observer 2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 주제에 관찰자 추가</span>
subject<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span>observer1<span class="token punctuation">)</span><span class="token punctuation">;</span>
subject<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span>observer2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 변경 사항에 대해 관찰자에게 알림</span>
subject<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 콘솔 로그:</span>
<span class="token comment">// Observer 1이 업데이트를 받았습니다.</span>
<span class="token comment">// Observer 2가 업데이트를 받았습니다.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-proxy를-사용한-반응적인-속성-실시간-변경-추적" tabindex="-1"><a class="header-anchor" href="#_5-proxy를-사용한-반응적인-속성-실시간-변경-추적" aria-hidden="true">#</a> 5. Proxy를 사용한 반응적인 속성: 실시간 변경 추적</h2>
<p>Proxy 객체는 객체 내의 속성 액세스 작업(get 및 set)을 가로채는 기능을 제공합니다. 이를 통해 속성 값이 검색되거나 수정될 때마다 리액티브(반응형)를 구현하고 코드를 실행할 수 있습니다.</p>
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
<p>안녕하세요! 표 태그를 Markdown 형식으로 변경해보겠습니다.</p>
<p>예시:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Lokesh'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> reactiveData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> property<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Property "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>property<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" has been read, current value: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>target<span class="token punctuation">[</span>property<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> target<span class="token punctuation">[</span>property<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> property<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">!==</span> target<span class="token punctuation">[</span>property<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 변경 사항 로깅 전 실제 변경 여부 확인</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Property "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>property<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" changed from </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>target<span class="token punctuation">[</span>property<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      target<span class="token punctuation">[</span>property<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
      <span class="token comment">// 여기서 UI 업데이트와 같은 추가 작업을 트리거할 수 있음</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Updated property "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>property<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 속성이 성공적으로 설정되었음을 나타냄</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 반응형 데이터와 상호작용하는 예시 함수</span>
<span class="token keyword">function</span> <span class="token function">updateName</span><span class="token punctuation">(</span><span class="token parameter">newName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  reactiveData<span class="token punctuation">.</span>name <span class="token operator">=</span> newName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">readName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">The name is: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>reactiveData<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 속성 업데이트와 조회 시뮬레이션</span>
<span class="token function">updateName</span><span class="token punctuation">(</span><span class="token string">'Rajesh'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">readName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-개별-속성-반응성-세밀한-객체-추적" tabindex="-1"><a class="header-anchor" href="#_6-개별-속성-반응성-세밀한-객체-추적" aria-hidden="true">#</a> 6. 개별 속성 반응성: 세밀한 객체 추적</h2>
<p>객체의 모든 필드를 추적할 필요가 없는 경우 Object.defineProperty를 사용하여 특정 속성을 선택하거나 Object.defineProperties를 사용하여 그룹화할 수 있습니다.</p>
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
<h2 id="_7-mutationobserver를-사용하여-반응형-html-속성-dom-변경으로-인한-동작-트리거" tabindex="-1"><a class="header-anchor" href="#_7-mutationobserver를-사용하여-반응형-html-속성-dom-변경으로-인한-동작-트리거" aria-hidden="true">#</a> 7. <code v-pre>MutationObserver</code>를 사용하여 반응형 HTML 속성: DOM 변경으로 인한 동작 트리거</h2>
<p><code v-pre>MutationObserver</code>는 DOM(Document Object Model)의 변경 사항, 속성 변경, 요소의 추가 또는 제거 등을 관찰할 수 있게 해주는 JavaScript API입니다. 이를 통해 DOM 수정에 대응하는 코드를 수동으로 추적하지 않고도 코드를 실행할 때 특히 유용합니다.</p>
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
<p>예제:</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>observed-element<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>내 변경 사항을 주시하세요!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">toggleClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>클래스 전환<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 관찰할 요소 선택</span>
<span class="token keyword">const</span> observedElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'observed-element'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 클래스를 전환하는 함수 정의</span>
<span class="token keyword">function</span> <span class="token function">toggleClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  observedElement<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token string">'highlight'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 변이를 관찰할 때 실행할 콜백 함수</span>
<span class="token keyword">const</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">mutationsList<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> mutation <span class="token keyword">of</span> mutationsList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>mutation<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'attributes'</span> <span class="token operator">&amp;&amp;</span> mutation<span class="token punctuation">.</span>attributeName <span class="token operator">===</span> <span class="token string">'class'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">클래스 속성이 변경되었습니다!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 여기에 더 많은 동작 추가 가능 (예: 스타일 변경, 자세한 내용 로깅 등)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>observedElement<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">'highlight'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        observedElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">'yellow'</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        observedElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 콜백 함수를 전달하여 새 MutationObserver 생성</span>
<span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 구성 설정: 속성 변경 관찰</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">attributes</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 지정된 요소 관찰 시작</span>
observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>observedElement<span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-intersectionobserver를-활용한-적응형-스크롤링-가시성-기반-상호작용" tabindex="-1"><a class="header-anchor" href="#_8-intersectionobserver를-활용한-적응형-스크롤링-가시성-기반-상호작용" aria-hidden="true">#</a> 8. IntersectionObserver를 활용한 적응형 스크롤링: 가시성 기반 상호작용</h2>
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
<p>IntersectionObserver은 대상 요소와 상위 요소 또는 최상위 문서 뷰포트의 교차점에서 발생하는 변화를 비동기적으로 관찰하는 방법을 제공하는 API입니다. 이는 요소가 뷰포트에 들어오거나 나갈 때 또는 다른 특정 요소와 교차할 때 코드를 실행할 수 있음을 의미합니다.</p>
<p>이는 이미지의 지연로딩, 무한 스크롤, 스크롤 위치에 기반한 애니메이션 등에 특히 유용합니다.</p>
<p>예시:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"special-element"</span> style<span class="token operator">=</span><span class="token string">"height: 500px; background-color: grey; margin-top: 1000px;"</span><span class="token operator">></span>
  화면에 보이면 색상이 변경됩니다<span class="token operator">!</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 관찰 대상 요소와 교차하는 경우 호출할 함수</span>
<span class="token keyword">function</span> <span class="token function">handleIntersection</span><span class="token punctuation">(</span><span class="token parameter">entries<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">entry</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>entry<span class="token punctuation">.</span>isIntersecting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      entry<span class="token punctuation">.</span>target<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">'lightgreen'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      entry<span class="token punctuation">.</span>target<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">'grey'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 콜백 함수를 사용하여 IntersectionObserver 생성</span>
<span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>handleIntersection<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 요소를 관찰 시작</span>
<span class="token keyword">const</span> specialElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'special-element'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>specialElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="읽어-주셔서-감사합니다" tabindex="-1"><a class="header-anchor" href="#읽어-주셔서-감사합니다" aria-hidden="true">#</a> 읽어 주셔서 감사합니다!</h2>
<p>이 글이 유용했으면 좋겠어요. 궁금한 점이나 제안 사항이 있으면 댓글을 남겨주세요. 여러분의 피드백이 저에게 도움이 됩니다.</p>
<p>구독하지 않을래요⭐```</p>
</div></template>
