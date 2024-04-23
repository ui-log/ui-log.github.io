<template><div><img src="@source/docs/Nextjs/2024-04-05-PushDataMaybeYouDontNeedWebSocket/img/PushDataMaybeYouDontNeedWebSocket_0.png" />
<p>데이터를 푸시하는 경우, 사람들은 먼저 WebSocket을 떠올릴 수 있습니다.</p>
<p>실제로 WebSocket은 양방향 통신을 가능하게 하며 서버에서 브라우저로 메시지를 자연스럽게 푸시할 수 있습니다.</p>
<p>그러나 단방향 메시지 푸시만 필요한 경우에는 HTTP도 Server-Sent Events를 통해 이 기능을 제공합니다.</p>
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
<p>웹소켓의 통신 과정은 다음과 같습니다:</p>
<p><img src="@source/docs/Nextjs/2024-04-05-PushDataMaybeYouDontNeedWebSocket/img/PushDataMaybeYouDontNeedWebSocket_1.png" alt="WebSocket 통신 과정"></p>
<p>우선 HTTP를 통해 프로토콜을 전환합니다. 서버가 상태 코드 101을 반환하면 프로토콜 전환이 성공적입니다.</p>
<p>이후, 웹소켓 형식의 데이터 통신이 시작되며 한 쪽은 언제든지 다른 쪽으로 메시지를 푸시할 수 있습니다.</p>
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
<p>HTTP에서 Server-Sent 이벤트에 대해 설명드리겠습니다:</p>
<p><img src="@source/docs/Nextjs/2024-04-05-PushDataMaybeYouDontNeedWebSocket/img/PushDataMaybeYouDontNeedWebSocket_2.png" alt="Server-Sent 이벤트"></p>
<p>서버에서 반환된 Content-Type은 text/event-stream이며, 여러 번 콘텐츠를 반환할 수 있는 스트림입니다.</p>
<p>Server-sent 이벤트는 언제든지 데이터를 이 타입의 메시지로 전송합니다.</p>
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
<p>SSE에 대해 처음 들어보신 분도 있겠지만, 이를 기반으로 한 애플리케이션을 사용해 본 적이 있을 거에요.</p>
<p>예를 들어, 사용하시는 CICD 플랫폼은 실시간으로 로그를 출력합니다.</p>
<p>그렇다면 빌드 로그를 실시간으로 어떻게 전송할까요?</p>
<p>데이터를 조각조각 전송해야 하는데, 일반적으로 SSE가 이런 방식으로 데이터를 푸시하는 데 사용됩니다.</p>
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
<p>다른 예로 ChatGPT가 있습니다. 질문에 답변할 때 한꺼번에 모든 답변을 제공하지 않고, 대신 부분적으로 점진적으로 로드합니다.</p>
<p>이것 또한 SSE에 기반을 두고 있습니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-PushDataMaybeYouDontNeedWebSocket/img/PushDataMaybeYouDontNeedWebSocket_3.png" alt="image"></p>
<p>이제 SSE가 무엇이며 어떻게 적용되는지 알았으니, 직접 구현해 봅시다.</p>
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
<p>이중 프로젝트를 만들어보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx nest <span class="token keyword">new</span> <span class="token class-name">sse</span><span class="token operator">-</span>test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/Nextjs/2024-04-05-PushDataMaybeYouDontNeedWebSocket/img/PushDataMaybeYouDontNeedWebSocket_4.png" alt="이미지"></p>
<p>실행해보세요:</p>
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
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>![./img/PushDataMaybeYouDontNeedWebSocket_5.png](./img/PushDataMaybeYouDontNeedWebSocket_5.png)

로컬호스트(http://localhost:3000)를 방문하면 서버가 성공적으로 실행 중임을 나타내는 "Hello World"가 표시됩니다.

![./img/PushDataMaybeYouDontNeedWebSocket_6.png](./img/PushDataMaybeYouDontNeedWebSocket_6.png)

그런 다음 AppController에 스트림 인터페이스를 추가하세요.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p><img src="@source/docs/Nextjs/2024-04-05-PushDataMaybeYouDontNeedWebSocket/img/PushDataMaybeYouDontNeedWebSocket_7.png" alt="PushDataMaybeYouDontNeedWebSocket"></p>
<p>여기서는 @Get, @Post 등의 데코레이터로 식별되지 않지만 @Sse 데코레이터는 이것이 이벤트 스트림 유형의 인터페이스임을 나타냅니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">Sse</span><span class="token punctuation">(</span><span class="token string">'stream'</span><span class="token punctuation">)</span>
<span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Observable</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">observer</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      observer<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'aaa'</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        observer<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'bbb'</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        observer<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'ccc'</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>반환된 것은 Observable 객체이며, 내부적으로 observer.next를 사용하여 메시지를 반환합니다. 어떤 JSON 데이터도 반환할 수 있습니다. 먼저 aaa를 반환하고, 2초 후에는 bbb를 반환하고, 5초 후에는 ccc를 반환합니다. 그런 다음 Frontend 페이지를 만듭시다: React 프로젝트를 만듭니다.</p>
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
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx create-react-app --template<span class="token operator">=</span>typescript sse-test-frontend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/Nextjs/2024-04-05-PushDataMaybeYouDontNeedWebSocket/img/PushDataMaybeYouDontNeedWebSocket_8.png" alt="PushDataMaybeYouDontNeedWebSocket_8"></p>
<p>App.tsx에 다음 코드를 작성해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> eventSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventSource</span><span class="token punctuation">(</span><span class="token string">'http://localhost:3000/stream'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    eventSource<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> data <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'새 메시지'</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>안녕하세요<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 EventSource는 SSE 인터페이스에서 응닑을 얻는 데 사용되는 브라우저 기본 API입니다. 각 메시지를 콜백 함수 onmessage로 전달합니다.</p>
<p>우리는 Nest 서비스에서 교차 출처 지원을 활성화합니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-PushDataMaybeYouDontNeedWebSocket/img/PushDataMaybeYouDontNeedWebSocket_9.png" alt="이미지"></p>
<p>그런 다음 React 프로젝트의 index.tsx 파일에서 이 코드 라인을 삭제하세요. 이는 추가적인 렌더링을 발생시킬 수 있습니다:</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-PushDataMaybeYouDontNeedWebSocket/img/PushDataMaybeYouDontNeedWebSocket_10.png" alt="이미지"></p>
<p>npm run start를 실행하세요.</p>
<p>포트 3000이 이미 사용 중이므로, 3001에서 실행될 것입니다:</p>
<p><img src="@source/docs/Nextjs/2024-04-05-PushDataMaybeYouDontNeedWebSocket/img/PushDataMaybeYouDontNeedWebSocket_11.png" alt="이미지"></p>
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
<p>브라우저에 접근해주세요:</p>
<p><img src="@source/docs/Nextjs/2024-04-05-PushDataMaybeYouDontNeedWebSocket/img/PushDataMaybeYouDontNeedWebSocket_12.png" alt="이미지"></p>
<p>응답을 보셨나요?</p>
<p>이것이 Server-Sent Events(서버 보낸 이벤트) 입니다.</p>
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
<p>개발 도구에서 응답의 Content-Type이 text/event-stream으로 설정되어 있음을 확인할 수 있어요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-PushDataMaybeYouDontNeedWebSocket/img/PushDataMaybeYouDontNeedWebSocket_13.png" alt="PushDataMaybeYouDontNeedWebSocket_13"></p>
<p>그리고 EventStream에서는 수신된 각 메시지를 확인할 수 있어요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-PushDataMaybeYouDontNeedWebSocket/img/PushDataMaybeYouDontNeedWebSocket_14.png" alt="PushDataMaybeYouDontNeedWebSocket_14"></p>
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
<p>서버는 언제든지 웹페이지로 메시지를 푸시할 수 있습니다.</p>
<p>호환성은 어떤가요?</p>
<p>MDN에서 확인할 수 있습니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-PushDataMaybeYouDontNeedWebSocket/img/PushDataMaybeYouDontNeedWebSocket_15.png" alt="이미지"></p>
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
<p>IE나 Edge를 제외하고 다른 브라우저와의 호환성 문제가 없습니다.</p>
<p>일반적으로 안전하게 사용할 수 있습니다.</p>
<p>어디에 사용할 수 있나요?</p>
<p>서버 전송 이벤트(Server-Sent Events)는 서버 쪽 푸시만 필요한 시나리오에 특히 적합합니다.</p>
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
<p>예를 들어, 로그의 실시간 푸시가 있습니다.</p>
<p>테스트해 봅시다:</p>
<p>&quot;tail -f&quot; 명령어를 사용하면 파일의 최신 내용을 실시간으로 볼 수 있습니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-PushDataMaybeYouDontNeedWebSocket/img/PushDataMaybeYouDontNeedWebSocket_16.png" alt="이미지"></p>
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
<p>우리는 child_process 모듈의 exec 함수를 사용하여 이 명령을 실행하고, 그 결과물을 stdout 출력을 듣습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> exec <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"child_process"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> childProcess <span class="token operator">=</span> <span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">'tail -f ./log'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

childProcess<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Node로 실행하세요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-PushDataMaybeYouDontNeedWebSocket/img/PushDataMaybeYouDontNeedWebSocket_17.png" alt="이미지"></p>
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
<p>다음으로 SSE 인터페이스를 추가해주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">Sse</span><span class="token punctuation">(</span><span class="token string">'stream2'</span><span class="token punctuation">)</span>
<span class="token function">stream2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> childProcess <span class="token operator">=</span> <span class="token function">exec</span><span class="token punctuation">(</span><span class="token string">'tail -f ./log'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Observable</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">observer</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    childProcess<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      observer<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> msg<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>새 데이터를 감지한 후 브라우저로 반환합니다.</p>
<p>브라우저는 다음과 같이 새 인터페이스에 연결합니다:</p>
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
<p>아래는 테스트 내용입니다:</p>
<p><img src="@source/docs/Nextjs/2024-04-05-PushDataMaybeYouDontNeedWebSocket/img/PushDataMaybeYouDontNeedWebSocket_19.png" alt="이미지"></p>
<p>브라우저가 실시간 로그를 수신한 것을 확인할 수 있습니다.</p>
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
<p>많은 빌드 로그들이 SSE를 통해 실시간으로 전송됩니다.</p>
<p>로그와 비슷한 것들은 그냥 텍스트일 뿐이지만, 만약 이진 데이터라면 어떨까요?</p>
<p>Node.js에서는 바이너리 데이터를 버퍼를 사용해서 저장합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> readFileSync <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> buffer <span class="token operator">=</span> <span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">'./package.json'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 테이블 태그를 마크다운 형식으로 변경하세요.</p>
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
<p>여기 한번 시도해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">Sse</span><span class="token punctuation">(</span><span class="token string">'stream3'</span><span class="token punctuation">)</span>
<span class="token function">stream3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Observable</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">observer</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">'./package.json'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        observer<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> json <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Nextjs/2024-04-05-PushDataMaybeYouDontNeedWebSocket/img/PushDataMaybeYouDontNeedWebSocket_22.png" alt=""></p>
<p><img src="@source/docs/Nextjs/2024-04-05-PushDataMaybeYouDontNeedWebSocket/img/PushDataMaybeYouDontNeedWebSocket_23.png" alt=""></p>
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
<p>그렇습니다.</p>
<p>다른 말로 말하면, SSE를 기반으로 하면 텍스트를 밀어 넣을 수 있는 것 뿐만 아니라 어떤 이진 데이터든 밀어 넣을 수 있습니다.</p>
<h2 id="요약" tabindex="-1"><a class="header-anchor" href="#요약" aria-hidden="true">#</a> 요약</h2>
<p>WebSocket이나 HTTP의 Server-Sent Events (SSE)를 사용하여 실시간 데이터를 서버에서 푸시할 수 있습니다.</p>
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
<p>Content-Type을 text/event-stream으로 설정한 헤더를 반환함으로써 HTTP 응답에서 메시지를 스트리밍을 통해 여러 번 보낼 수 있습니다.</p>
<p>전송된 내용은 JSON 형식으로 전송되며 텍스트 또는 바이너리 내용을 전송하는 데 사용할 수 있습니다.</p>
<p>저희는 Nest를 사용하여 SSE 인터페이스를 구현했습니다. 메소드는 @Sse 장식자를 사용하고 Observable 개체를 반환합니다. observer.next를 사용하여 언제든지 데이터를 반환할 수 있습니다.</p>
<p>프론트 엔드에서 EventSource의 onmessage를 사용하여 메시지를 수신합니다.</p>
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
<p>이 API는 IE를 제외하고 안전하게 사용할 수 있는 높은 호환성을 가지고 있어요.</p>
<p>내부 메시징, 빌드 로그의 실시간 표시, chatgpt 메시지 응답과 같이 다양한 용도로 활용할 수 있어요.</p>
<p>메시지 푸시가 필요한 시나리오를 직면할 때는 WebSocket 대신 Server-Sent Events를 고려해 보세요.</p>
</div></template>
