<template><div><img src="@source/docs/Nextjs/2024-04-05-PushNotificationinReactandNextjsappusingNodejs/img/PushNotificationinReactandNextjsappusingNodejs_0.png" />
<p>푸시 알림은 앱 사용자들과 소통하는 좋은 방법입니다. 클라이언트가 활성화되어 있지 않을 때에도 서버가 클라이언트에게 푸시 알림을 보낼 수 있습니다.</p>
<p>그렇다면, 리액트와 넥스트.js 앱에서 노드.js를 사용하여 푸시 알림을 구현하는 방법에 대해 알아봅시다.</p>
<h1 id="웹-앱에서-푸시-알림이-작동하는-방식은" tabindex="-1"><a class="header-anchor" href="#웹-앱에서-푸시-알림이-작동하는-방식은" aria-hidden="true">#</a> 웹 앱에서 푸시 알림이 작동하는 방식은?</h1>
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
<p>웹 앱의 푸시 알림은 브라우저 API, 서비스 워커, 그리고 푸시 메시지를 전송할 수 있는 서버의 조합이 필요합니다.</p>
<p>브라우저가 오프라인 상태인 경우 메시지는 브라우저가 온라인 상태가 될 때까지 대기 상태가 됩니다. 사용자는 웹사이트로부터 이러한 푸시 알림을 수신하도록 선택할 수 있습니다. 구독자들은 이후 휴대폰 및 데스크톱 브라우저에서 알림을 받게 됩니다. 이것이 바로 웹 푸시 알림이 브라우저 알림이라고도 불리는 이유입니다.</p>
<h1 id="서비스-워커란-무엇인가요" tabindex="-1"><a class="header-anchor" href="#서비스-워커란-무엇인가요" aria-hidden="true">#</a> 서비스 워커란 무엇인가요?</h1>
<p>서비스 워커는 웹 페이지와 별도로 백그라운드에서 실행되는 스크립트입니다. 백그라운드 동기화, 푸시 알림, 캐싱과 같은 기능을 가능하게 합니다.</p>
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
<p>서비스 워커는 푸시 알림을 받아서 사용자에게 보여주는 역할을 하는데, 그만큼 중요한 요소입니다.</p>
<p>서비스 워커를 등록하려면 Next.js나 React 앱의 퍼블릭 폴더에 sw.js 파일을 만들어야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// public/sw.js</span>

self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"push"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> event<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> title <span class="token operator">=</span> data<span class="token punctuation">.</span>title<span class="token punctuation">;</span>
  <span class="token keyword">const</span> body <span class="token operator">=</span> data<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
  <span class="token keyword">const</span> icon <span class="token operator">=</span> data<span class="token punctuation">.</span>icon<span class="token punctuation">;</span>
  <span class="token keyword">const</span> url <span class="token operator">=</span> data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>url<span class="token punctuation">;</span>

  <span class="token keyword">const</span> notificationOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> body<span class="token punctuation">,</span>
    <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">"unique-tag"</span><span class="token punctuation">,</span> <span class="token comment">// 고유한 태그를 사용하여 중복 알림 방지</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> icon<span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> url<span class="token punctuation">,</span> <span class="token comment">// 사용자를 원하는 페이지로 리디렉션할 URL로 대체</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  self<span class="token punctuation">.</span>registration<span class="token punctuation">.</span><span class="token function">showNotification</span><span class="token punctuation">(</span>title<span class="token punctuation">,</span> notificationOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>서비스 워커에 푸시 이벤트 리스너를 구현했습니다. 이벤트는 서버에서 클라이언트로 푸시 알림을 보낼 때 발생합니다.</p>
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
<h1 id="react-및-next-js에서-서비스-워커-등록하기" tabindex="-1"><a class="header-anchor" href="#react-및-next-js에서-서비스-워커-등록하기" aria-hidden="true">#</a> React 및 Next.js에서 서비스 워커 등록하기</h1>
<p>우리 React 및 Next.js 앱에 서비스 워커를 등록해야 합니다. useEffect 훅을 사용하여 서비스 워커를 등록할 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// app/page.js -> Next.js</span>
<span class="token comment">// src/index.js -> React</span>

<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">"serviceWorker"</span> <span class="token keyword">in</span> navigator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    navigator<span class="token punctuation">.</span>serviceWorker
      <span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">"/sw.js"</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">registration</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"등록 성공"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"서비스 워커 등록 실패"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>우리는 useEffect 훅에서 서비스 워커를 등록하고 있습니다. navigator 객체에서 serviceWorker의 가용성을 확인하고 있습니다. 가용하다면 서비스 워커를 등록하고 있습니다.</p>
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
<h1 id="서버에서-푸시-알림-보내기" tabindex="-1"><a class="header-anchor" href="#서버에서-푸시-알림-보내기" aria-hidden="true">#</a> 서버에서 푸시 알림 보내기</h1>
<p>우리는 Node.js 서버에서 푸시 알림을 보내기 위해 web-push 라이브러리를 사용할 것입니다.</p>
<p>web-push를 사용하여 푸시 알림을 보내려면 VAPID 키페어를 생성해야 합니다. web-push 라이브러리를 사용하여 VAPID 키페어를 생성할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install web<span class="token operator">-</span>push <span class="token operator">-</span>g

web<span class="token operator">-</span>push generate<span class="token operator">-</span>vapid<span class="token operator">-</span>keys
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
<p>퍼블릭과 프라이빗 키를 받게 됩니다. 우리는 이 키들을 환경 변수에 저장할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// server.js</span>

<span class="token keyword">import</span> express <span class="token keyword">from</span> <span class="token string">"express"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> webpush <span class="token keyword">from</span> <span class="token string">"web-push"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> dotenv <span class="token keyword">from</span> <span class="token string">"dotenv"</span><span class="token punctuation">;</span>
dotenv<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> vapidKeys <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">publicKey</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VAPID_PUBLIC_KEY</span><span class="token punctuation">,</span>
  <span class="token literal-property property">privateKey</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VAPID_PRIVATE_KEY</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


webpush<span class="token punctuation">.</span><span class="token function">setVapidDetails</span><span class="token punctuation">(</span>
  <span class="token string">"test@gmail.com"</span><span class="token punctuation">,</span>
  vapidKeys<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>
  vapidKeys<span class="token punctuation">.</span>privateKey
<span class="token punctuation">)</span>

<span class="token keyword">let</span> subscriptions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">"/subscribe"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> subscription <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
  subscriptions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>subscription<span class="token punctuation">)</span><span class="token punctuation">;</span>

  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">201</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">"/send-notification"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> notificationPayload <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"New Notification"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">"This is a new notification"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"https://some-image-url.jpg"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://example.com"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>
    subscriptions<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">subscription</span><span class="token punctuation">)</span> <span class="token operator">=></span>
      webpush<span class="token punctuation">.</span><span class="token function">sendNotification</span><span class="token punctuation">(</span>subscription<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>notificationPayload<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"Notification sent successfully."</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"Error sending notification"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      res<span class="token punctuation">.</span><span class="token function">sendStatus</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">4000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Server started on port 4000"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Express.js를 사용하여 서버를 설정했어요. /subscribe와 /send-notification 두 개의 라우트를 만들었어요.</p>
<p>/subscribe 라우트에서는 구독 객체를 subscriptions 배열에 저장합니다. 이 배열을 사용하여 구독자에게 푸시 알림을 보낼 거예요. 구독 객체를 데이터베이스에 저장할 수도 있어요.</p>
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
<p>/send-notification 루트에서는 모든 구독자에게 푸시 알림을 보내고 있습니다. 푸시 알림을 보내기 위해 webpush.sendNotification 메서드를 사용하고 있습니다.</p>
<p>우리는 Promise.all 메서드를 사용하여 모든 구독자에게 푸시 알림을 보내고 있습니다. 특정 사용자에게 푸시 알림을 보내려면 구독 배열을 필터링하여 보낼 수 있습니다.</p>
<h1 id="푸시-알림-구독" tabindex="-1"><a class="header-anchor" href="#푸시-알림-구독" aria-hidden="true">#</a> 푸시 알림 구독</h1>
<p>푸시 알림을 받으려면 푸시 알림에 가입해야 합니다. serviceWorker 객체를 사용하여 푸시 알림을 받기 위해 가입할 것입니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// app/page.js -> Next.js</span>
<span class="token comment">// src/index.js -> React</span>

<span class="token comment">// useEffect 훅을 수정하여 푸시 알림을 구독하도록 변경했습니다.</span>

<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">"serviceWorker"</span> <span class="token keyword">in</span> navigator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleServiceWorker</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> register <span class="token operator">=</span> <span class="token keyword">await</span> navigator<span class="token punctuation">.</span>serviceWorker<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">"/sw.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> subscription <span class="token operator">=</span> <span class="token keyword">await</span> register<span class="token punctuation">.</span>pushManager<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">userVisibleOnly</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">applicationServerKey</span><span class="token operator">:</span> <span class="token string">"VAPID_PUBLIC_KEY"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"http://localhost:4000/subscribe"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"POST"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>subscription<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">"content-type"</span><span class="token operator">:</span> <span class="token string">"application/json"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> data<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">handleServiceWorker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>useEffect 훅을 사용하여 푸시 알림을 구독하고 있어요. pushManager.subscribe 메서드를 사용해서 푸시 알림에 구독하고 있어요. 사용자가 푸시 알림을 구독하면 구독 객체를 서버로 보내고 있어요.</p>
<h1 id="서버에서-푸시-알림-전송하기" tabindex="-1"><a class="header-anchor" href="#서버에서-푸시-알림-전송하기" aria-hidden="true">#</a> 서버에서 푸시 알림 전송하기</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// server.js 실행</span>

node server<span class="token punctuation">.</span>js
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
<p>이제 Postman을 열고 http://localhost:4000/send-notification 경로로 POST 요청을 보내세요. 그러면 브라우저에서 푸시 알림을 받을 수 있습니다.</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>이 글에서는 React와 Next.js 앱에서 Node.js를 사용하여 푸시 알림을 구현하는 방법을 배웠습니다. 우리는 기본 푸시 알림 시스템을 구현했습니다. 이 시스템을 확장하여 특정 사용자나 그룹에게 푸시 알림을 보낼 수 있습니다.</p>
<p>여기까지 입니다. 유용하게 활용하셨기를 바랍니다. 질문이나 피드백이 있으시면 제게 트위터에서 공유해주세요.</p>
</div></template>
