<template><div><img src="@source/docs/Nextjs/2024-04-05-UnderstandingwindowpostMessageandwindowparentpostMessageinJavaScript/img/UnderstandingwindowpostMessageandwindowparentpostMessageinJavaScript_0.png" />
<p>현대 웹 개발에서 교차 출처 통신은 서로 다른 도메인의 웹 페이지나 프레임이 안전하게 상호 작용할 수 있도록 하는 중요한 측면입니다. 이를 실현하는 인기 있는 메커니즘 중 하나는 JavaScript의 postMessage API를 사용하는 것입니다. 이 글에서는 window.postMessage와 window.parent.postMessage의 개념을 탐구하면서 웹 응용 프로그램 내에서 다른 컨텍스트 간 통신이 어떻게 가능해지는지 살펴볼 것입니다.</p>
<h1 id="_1-window-postmessage" tabindex="-1"><a class="header-anchor" href="#_1-window-postmessage" aria-hidden="true">#</a> 1. window.postMessage:</h1>
<p>window.postMessage 메서드는 서로 다른 출처(도메인)에 속하는 두 창 또는 탭 간 통신을 활성화하는 안전한 방법입니다. 이를 통해 한 창의 스크립트가 다른 창으로 안전하게 메시지를 전달할 수 있도록 하여, 서로 다른 도메인에서 발생한 경우에도 가능합니다. 이는 제3자 위젯, 아이프레임 또는 웹 응용 프로그램 내에서 교차 출처 통신을 포함하는 데 특히 유용합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>otherWindow<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> targetOrigin<span class="token punctuation">,</span> <span class="token punctuation">[</span>transfer<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>매개변수:</p>
<ul>
<li>message: 다른 창으로 전송할 데이터입니다. 문자열, 객체 또는 기타 JSON 직렬화할 수 있는 데이터가 될 수 있습니다.</li>
<li>targetOrigin: 대상 창의 출처를 지정합니다. 보안을 강화하기 위해 이 매개변수는 대상 창의 특정 출처로 설정되어야 합니다 (예: &quot;https://example.com&quot;). &quot;*&quot;를 사용하여 모든 출처와 통신을 허용할 수도 있지만, 이 방법은 보안에 취약합니다.</li>
<li>transfer (선택 사항): 다른 창으로 보내질 때 복제 대신 전달할 Transferable 객체들의 배열입니다 (예: ArrayBuffer, MessagePort). 이 매개변수는 대량 데이터를 처리할 때 성능을 향상시킬 때 유용합니다.</li>
</ul>
<p>예시: 서로 다른 출처의 두 HTML 파일을 고려해 보겠습니다 (예: https://origin1.com 및 https://origin2.com):</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>origin1<span class="token punctuation">.</span>html<span class="token operator">--</span><span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html<span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>title<span class="token operator">></span>Origin <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
  <span class="token operator">&lt;</span>button onclick<span class="token operator">=</span><span class="token string">"sendMessage()"</span><span class="token operator">></span>Send Message<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

  <span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">function</span> <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> otherWindow <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'https://origin2.com/origin2.html'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">'Hello from Origin 1!'</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> targetOrigin <span class="token operator">=</span> <span class="token string">'https://origin2.com'</span><span class="token punctuation">;</span>
      otherWindow<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> targetOrigin<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>origin2<span class="token punctuation">.</span>html<span class="token operator">--</span><span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html<span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>title<span class="token operator">></span>Origin <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
  <span class="token operator">&lt;</span>script<span class="token operator">></span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">,</span> receiveMessage<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">receiveMessage</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>origin <span class="token operator">===</span> <span class="token string">'https://origin1.com'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Received message: '</span> <span class="token operator">+</span> event<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서 origin1.html의 “Send Message” 버튼을 클릭하면, origin2.html을 연 다음 메시지 “Hello from Origin 1!”를 전송합니다. origin2.html 창은 메시지를 수신하고, 보안을 위해 오리진이 “https://origin1.com”과 일치할 경우에만 수신된 데이터와 함께 경고를 표시합니다.</p>
<h1 id="_1-window-parent-postmessage" tabindex="-1"><a class="header-anchor" href="#_1-window-parent-postmessage" aria-hidden="true">#</a> 1. window.parent.postMessage:</h1>
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
<p>window.parent.postMessage 방법은 window.postMessage와 유사하지만 임베디드된 iframe 내에서 부모 창과 통신하기 위해 특별히 사용됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>parent<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> targetOrigin<span class="token punctuation">,</span> <span class="token punctuation">[</span>transfer<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>매개변수:</p>
<ul>
<li>message: 부모 창으로 보내질 데이터입니다.</li>
<li>targetOrigin: 부모 창의 출처를 지정합니다.</li>
<li>transfer (선택사항): window.postMessage와 마찬가지로, 이 매개변수를 사용하면 전송될 때 복제 대신 데이터 전송이 가능합니다.</li>
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
<p>예시: 부모.html 파일이 다른 출처의 iframe(자식.html)를 내장하는 시나리오를 고려해 봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>부모<span class="token punctuation">.</span>html<span class="token operator">--</span><span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html<span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>title<span class="token operator">></span>부모 창<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
  <span class="token operator">&lt;</span>iframe src<span class="token operator">=</span><span class="token string">"https://origin2.com/child.html"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>iframe<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>자식<span class="token punctuation">.</span>html<span class="token operator">--</span><span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html<span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>title<span class="token operator">></span>자식 창<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
  <span class="token operator">&lt;</span>button onclick<span class="token operator">=</span><span class="token string">"sendMessage()"</span><span class="token operator">></span>부모에게 메시지 보내기<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

  <span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">function</span> <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">'자식 창에서 안녕하세요!'</span><span class="token punctuation">;</span>
      parent<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token string">'https://origin1.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서 자식.html의 &quot;부모에게 메시지 보내기&quot; 버튼을 클릭하면 &quot;자식 창에서 안녕하세요!&quot; 메시지를 부모 창(origin1.html)으로 보냅니다. 부모.html 창은 이 메시지를 받아서 적절하게 처리할 수 있습니다.</p>
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
<h1 id="window-parent-postmessage를-사용하여-객체-또는-배열과-같은-복잡한-데이터를-보낼-수-있나요" tabindex="-1"><a class="header-anchor" href="#window-parent-postmessage를-사용하여-객체-또는-배열과-같은-복잡한-데이터를-보낼-수-있나요" aria-hidden="true">#</a> window.parent.postMessage를 사용하여 객체 또는 배열과 같은 복잡한 데이터를 보낼 수 있나요?</h1>
<p>네, window.parent.postMessage를 사용하여 객체 또는 배열과 같은 복잡한 데이터를 보낼 수 있습니다. 이 방법은 JSON 직렬화 가능한 데이터를 지원하므로 JavaScript 객체와 배열을 메시지 콘텐츠로 전달할 수 있습니다. 데이터가 안전하게 직렬화되고 역직렬화되어야 하므로 iframe과 상위 창 간에 데이터가 정확히 변환될 수 있도록하세요.</p>
</div></template>
