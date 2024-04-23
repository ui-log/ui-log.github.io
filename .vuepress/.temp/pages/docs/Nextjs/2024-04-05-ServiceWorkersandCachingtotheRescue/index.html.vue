<template><div><p><img src="@source/docs/Nextjs/2024-04-05-ServiceWorkersandCachingtotheRescue/img/ServiceWorkersandCachingtotheRescue_0.png" alt="서비스 워커와 캐싱이 도와줍니다"></p>
<p>당신의 웹사이트를 레스토랑이라고 생각해보세요. 손님들이 빨리 음식을 받고 즐겁게 식사할 수 있도록 하고 싶으시죠. 서비스 워커와 캐싱은 효율적인 대기원과 잘 갖춰진 식료품실처럼 함께 작동하는 것과 같습니다.</p>
<p>슈퍼 대기원: 서비스 워커</p>
<ul>
<li>이 특별한 대기원(서비스 워커)은 메인 웹사이트와 별도로 백그라운드에서 실행됩니다.</li>
<li>이는 고객(브라우저)로부터 주문(요청)을 가로챌 수 있습니다.</li>
<li>심지어 내용을 기억하여 다음에 더 빠르게 제공할 수도 있습니다.</li>
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
<p>풍부한 식량 저장실: 캐싱</p>
<ul>
<li>식량 저장실(캐시)은 고객이 자주 주문하는 인기 요리(웹사이트 자원)를 저장합니다.</li>
<li>이렇게 하면 웨이터(서비스 작업자)가 요리를 다시 요리하지 않고도 즉시 가져올 수 있습니다(서버에서 가져오지 않아도 됨).</li>
<li>식량 저장실은 엄청 크지 않아서 웨이터가 기존 요리를 버리고(오래된 자원을) 새로운 것(신선한 콘텐츠)을 위해 자리를 만듭니다.</li>
</ul>
<p>어떻게 함께 작동하는지</p>
<ul>
<li>처음 방문: 고객(브라우저)이 음식점(웹사이트)을 처음 방문합니다. 웨이터(서비스 작업자)가 주문을 받고, 주방(서버)에서 모든 것을 가져옵니다.</li>
<li>스마트한 웨이터: 웨이터는 인기 요리(자원)를 인식하고, 다음에 사용할 것을 위해 식량 저장실(캐시)에 저장합니다.</li>
<li>빠른 서비스: 고객이 다시 방문! 이번에는 웨이터가 먼저 식량 저장실(캐시)을 확인합니다. 요리(자원)가 거기에 있고 신선하면, 즉시 제공됩니다 - 훨씬 빨라집니다!</li>
<li>신선함 유지: 웨이터는 메뉴(콘텐츠)가 변할 수 있다는 것을 알기 때문에 가끔 주방(서버)에 새로운 것이 있는지 확인합니다.</li>
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
<p>당신의 웹사이트(식당)를 위한 혜택:</p>
<ul>
<li>빠른 로딩 시간: 고객들이 음식(웹사이트)을 빨리 받아볼 수 있어서 반복해서 방문해도 더 빨리 주문하실 수 있습니다.</li>
<li>더 행복한 고객들: 더 오래 기다릴 필요가 없어 더 나은 경험을 할 수 있습니다.</li>
<li>오프라인 즐거움: 주방(서버)이 닫혀 있어도(인터넷이 연결되지 않았어도), 웨이터는 식료품 저장실에서 몇 가지 요리(캐시된 콘텐츠)를 제공할 수 있습니다.</li>
</ul>
<p>예시를 작성해보겠습니다:</p>
<p>우선, ServiceWorker.js 파일을 생성해야 합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> cacheName <span class="token operator">=</span> <span class="token string">'my-static-cache'</span><span class="token punctuation">;</span> <span class="token comment">// 캐시에 이름을 지정해주세요</span>

<span class="token comment">// 설치 이벤트: 서비스 워커가 처음 등록될 때 발생합니다</span>
self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'install'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">waitUntil</span><span class="token punctuation">(</span>
    caches<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>cacheName<span class="token punctuation">)</span> <span class="token comment">// 지정된 이름으로 캐시 열기</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">cache</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 캐시할 URL 배열 추가</span>
        <span class="token keyword">return</span> cache<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
          <span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token comment">// 웹 사이트 루트를 캐시합니다</span>
          <span class="token string">'/index.html'</span><span class="token punctuation">,</span> <span class="token comment">// 주 HTML 파일을 캐시합니다</span>
          <span class="token string">'/styles.css'</span><span class="token punctuation">,</span> <span class="token comment">// 스타일시트를 캐시합니다</span>
          <span class="token string">'/script.js'</span><span class="token punctuation">,</span> <span class="token comment">// 자바스크립트 파일을 캐시합니다</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 가져오기 이벤트: 브라우저가 리소스를 가져오려고 할 때 발생합니다</span>
self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'fetch'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span>
    caches<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span> <span class="token comment">// 캐시에서 요청된 리소스를 찾아봅니다</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 캐시에서 찾았다면 캐시된 응답을 반환합니다</span>
          <span class="token keyword">return</span> response<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 찾지 못했다면 네트워크에서 가져와 캐시를 업데이트합니다</span>
        <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> caches<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>cacheName<span class="token punctuation">)</span>
              <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">cache</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 가져온 응답을 캐시에 저장하여 나중에 사용합니다</span>
                cache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">,</span> response<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> response<span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>따라서, 파일을 서비스워커 API에 추가해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">"serviceWorker"</span> <span class="token keyword">in</span> navigator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"load"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          navigator<span class="token punctuation">.</span>serviceWorker
            <span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">"./serviceWorker.js"</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">registration</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
                <span class="token string">"Service Worker registered with scope:"</span><span class="token punctuation">,</span>
                registration<span class="token punctuation">.</span>scope
              <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Service Worker registration failed:"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 저녁식사를 더 효율적으로 제공할 수 있습니다.```</p>
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
<p>알아두세요:</p>
<ul>
<li>모든 브라우저가 아직 슈퍼 웨이터(서비스 워커)를 지원하는 것은 아니지만, 점점 더 흔해지고 있어요.</li>
<li>웨이터는 오래된 음식(캐시 무효화)을 버리는 시점을 알아야 해요. 그래야 사이트가 신선하게 유지될 수 있어요.</li>
<li>이 시스템을 추가한 후 웹사이트의 작동을 주시해 보세요. 최상의 결과를 얻기 위해 조금씩 조정해야 할 수도 있어요.</li>
</ul>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론:</h1>
<p>서비스 워커와 캐싱을 이용하면 웹사이트가 더 부드럽게 실행되고 방문자들이 만족할 수 있어요. 마치 슈퍼-효율적인 웨이터가 있는 멋진 음식점과 같이 말이에요!</p>
</div></template>
