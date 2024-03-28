<template><div><img src="@source/docs/Tech/2024-03-28-ImplementingPushNotificationsinWordPresswithJavaScript/img/ImplementingPushNotificationsinWordPresswithJavaScript_0.png" />
<p>안녕하세요! 사용자들과 효과적으로 소통하는 것은 온라인 존재감을 유지하고 확장하는 중요한 측면입니다. 이를 실현하는 가장 직접적이고 영향적인 방법 중 하나는 푸시 알림을 통한 것입니다. 푸시 알림을 통해 사용자들에게 업데이트, 공지사항 또는 새로운 콘텐츠에 대한 알림을 제공할 수 있습니다. 이를 위해 JavaScript를 사용하여 WordPress 사이트에 푸시 알림을 구현하면 사용자 참여도를 크게 향상시킬 수 있습니다. 이 기사에서는 해당 프로세스를 안내하고 시작하는 데 필요한 코드 예제를 제공할 것입니다.</p>
<h1 id="푸시-알림-이해하기" tabindex="-1"><a class="header-anchor" href="#푸시-알림-이해하기" aria-hidden="true">#</a> 푸시 알림 이해하기</h1>
<p>푸시 알림은 브라우저나 웹 애플리케이션이 닫혀 있을 때에도 사용자의 데스크톱이나 모바일 기기로 전송될 수 있는 메시지입니다. 이러한 알림은 사용자들과 다시 소통하거나 콘텐츠를 홍보하거나 새 글이나 댓글을 알리는 데 강력한 도구가 될 수 있습니다.</p>
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
<h1 id="서비스-워커-설정하기" tabindex="-1"><a class="header-anchor" href="#서비스-워커-설정하기" aria-hidden="true">#</a> 서비스 워커 설정하기</h1>
<p>푸시 알림을 구현하기 전에, 워드프레스 사이트에 서비스 워커를 설정해야 합니다. 서비스 워커는 브라우저에서 웹 페이지와 별도로 백그라운드에서 실행되는 스크립트로, 웹 페이지나 사용자 상호작용이 필요하지 않은 기능을 제공할 수 있는 문을 엽니다.</p>
<p>더 읽어보기: 워드프레스에서 ARIA와 CSS로 접근성 향상하기</p>
<h1 id="서비스-워커-생성하기" tabindex="-1"><a class="header-anchor" href="#서비스-워커-생성하기" aria-hidden="true">#</a> 서비스 워커 생성하기</h1>
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
<p>워드프레스 테마 디렉토리에 sw.js라는 이름의 새 JavaScript 파일을 생성하세요. 이 파일은 서비스 워커로 사용될 것입니다.</p>
<p>sw.js:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'push'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token string">'Get Notified'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">'Stay updated with our latest news and updates.'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'/path/to/icon.png'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">badge</span><span class="token operator">:</span> <span class="token string">'/path/to/badge.png'</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  
  event<span class="token punctuation">.</span><span class="token function">waitUntil</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>registration<span class="token punctuation">.</span><span class="token function">showNotification</span><span class="token punctuation">(</span>title<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="서비스-워커-등록하기" tabindex="-1"><a class="header-anchor" href="#서비스-워커-등록하기" aria-hidden="true">#</a> 서비스 워커 등록하기</h1>
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
<p>서비스 워커를 등록하려면 WordPress 테마의 푸터(예: footer.php)에 다음 JavaScript 코드를 추가하십시오. 닫히는 <code v-pre>/body</code> 태그 앞에 넣어주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">'serviceWorker'</span> <span class="token keyword">in</span> navigator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'load'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      navigator<span class="token punctuation">.</span>serviceWorker<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'/sw.js'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">registration</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 등록에 성공한 경우</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'ServiceWorker 등록 성공. 범위: '</span><span class="token punctuation">,</span> registration<span class="token punctuation">.</span>scope<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 등록 실패 :(</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'ServiceWorker 등록 실패: '</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="푸시-알림-통합" tabindex="-1"><a class="header-anchor" href="#푸시-알림-통합" aria-hidden="true">#</a> 푸시 알림 통합</h1>
<p>서비스 워커를 설정한 후, 다음 단계는 푸시 알림을 통합하는 것입니다. 이에는 사용자에게 알림 수신 권한을 요청하고 알림 서비스에 구독하는 과정이 포함됩니다.</p>
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
<h1 id="알림-권한-요청" tabindex="-1"><a class="header-anchor" href="#알림-권한-요청" aria-hidden="true">#</a> 알림 권한 요청</h1>
<p>사용자에게 알림을 수신할 수 있는 권한을 요청하는 스크립트를 작성해보세요. 이 스크립트는 테마에 직접 추가하거나 사용자 정의 플러그인을 통해 추가할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
  Notification<span class="token punctuation">.</span><span class="token function">requestPermission</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">===</span> <span class="token string">'granted'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      navigator<span class="token punctuation">.</span>serviceWorker<span class="token punctuation">.</span>ready<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">registration</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 등록을 사용하여 푸시 알림 구독</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'사용자가 알림 수락함'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고, CSS 및 JavaScript로 워드프레스에서 애니메이션 효과가 있는 진행 표시막을 만드는 방법을 알아보세요. https://medium.com/@volodymyrzh/creating-animated-progress-bars-in-wordpress-with-css-and-javascript-c22f7118c4a5</p>
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
<h1 id="알림-보내기" tabindex="-1"><a class="header-anchor" href="#알림-보내기" aria-hidden="true">#</a> 알림 보내기</h1>
<p>알림을 보내는 것은 일반적으로 특정 이벤트(예: 새 블로그 글 게시)에 기반하여 알림을 트리거하는 백엔드 서비스를 포함합니다. WordPress는 서버 측 PHP 코드를 사용하여 서비스 워커를 통해 푸시 알림을 보낼 수 있습니다.</p>
<p>알림을 트리거하는 예시 PHP 코드 (간단 버전):</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 푸시 알림을 보내는 PHP 코드</span>
<span class="token keyword">function</span> <span class="token function">send_push_notification</span><span class="token punctuation">(</span><span class="token parameter">$subscriber_id<span class="token punctuation">,</span> $message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  $subscriber <span class="token operator">=</span> <span class="token function">get_subscriber_data</span><span class="token punctuation">(</span>$subscriber_id<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 이 함수가 구독자 정보를 가져온다고 가정</span>
  $endpoint <span class="token operator">=</span> $subscriber<span class="token punctuation">[</span><span class="token string">'endpoint'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  $key <span class="token operator">=</span> $subscriber<span class="token punctuation">[</span><span class="token string">'key'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  $token <span class="token operator">=</span> $subscriber<span class="token punctuation">[</span><span class="token string">'token'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  $headers <span class="token operator">=</span> <span class="token function">array</span><span class="token punctuation">(</span>
    <span class="token string">'Authorization: key='</span> <span class="token punctuation">.</span> $key<span class="token punctuation">,</span>
    <span class="token string">'Content-Type: application/json'</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  $postdata <span class="token operator">=</span> <span class="token function">json_encode</span><span class="token punctuation">(</span><span class="token function">array</span><span class="token punctuation">(</span>
    <span class="token string">'notification'</span> <span class="token operator">=></span> <span class="token function">array</span><span class="token punctuation">(</span>
      <span class="token string">'title'</span> <span class="token operator">=></span> <span class="token string">'새 업데이트'</span><span class="token punctuation">,</span>
      <span class="token string">'body'</span> <span class="token operator">=></span> $message<span class="token punctuation">,</span>
      <span class="token string">'icon'</span> <span class="token operator">=></span> <span class="token string">'/icon.png 경로'</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">'to'</span> <span class="token operator">=></span> $endpoint
  <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  $ch <span class="token operator">=</span> <span class="token function">curl_init</span><span class="token punctuation">(</span><span class="token string">'https://fcm.googleapis.com/fcm/send'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">curl_setopt</span><span class="token punctuation">(</span>$ch<span class="token punctuation">,</span> <span class="token constant">CURLOPT_HTTPHEADER</span><span class="token punctuation">,</span> $headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">curl_setopt</span><span class="token punctuation">(</span>$ch<span class="token punctuation">,</span> <span class="token constant">CURLOPT_POST</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">curl_setopt</span><span class="token punctuation">(</span>$ch<span class="token punctuation">,</span> <span class="token constant">CURLOPT_POSTFIELDS</span><span class="token punctuation">,</span> $postdata<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">curl_setopt</span><span class="token punctuation">(</span>$ch<span class="token punctuation">,</span> <span class="token constant">CURLOPT_RETURNTRANSFER</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  $result <span class="token operator">=</span> <span class="token function">curl_exec</span><span class="token punctuation">(</span>$ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">curl_close</span><span class="token punctuation">(</span>$ch<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> $result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
