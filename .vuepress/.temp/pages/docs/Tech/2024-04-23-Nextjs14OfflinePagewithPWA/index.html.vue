<template><div><p>흥미진진한 업데이트 시간이에요! 이번 세션에서는 인터넷에 연결되지 않은 상태에서 앱을 사용하는 사용자들이 보는 '오프라인' 페이지를 사용자 정의하는 방법을 살펴볼 거예요. 브라우저가 제공하는 기본 오프라인 페이지에 의존하는 대신, next-pwa라는 패키지의 기능을 활용할 거예요. 이 튜토리얼의 독특한 점은 해당 패키지를 구현하는 것뿐만 아니라 이 패키지의 하부 작동 메커니즘을 자세하게 살펴보면서 보다 심층적인 이해를 얻을 거라는 거에요. 그러니 더 이상 말이 필요 없죠, 이 프로세스의 복잡성에 뛰어들어 봅시다!</p>
<img src="@source/docs/Tech/2024-04-23-Nextjs14OfflinePagewithPWA/img/Nextjs14OfflinePagewithPWA_0.png" />
<h1 id="pwa란" tabindex="-1"><a class="header-anchor" href="#pwa란" aria-hidden="true">#</a> PWA란</h1>
<p>PWA는 &quot;Progressive Web App&quot;의 약자에요. PWA는 HTML, CSS, JavaScript 등의 일반적인 웹 기술을 사용하여 만들어진 소프트웨어 응용 프로그램 유형이에요. PWA의 주요 기능은 오프라인 작업, 푸시 알림 및 네이티브 앱처럼 사용자의 장치에 설치될 수 있는 능력을 포함하고 있어요. PWA는 다양한 장치와 네트워크 환경에서 원활하고 매력적인 사용자 경험을 제공하기 위한 목표를 가지고 있어요. 자세한 정보를 보시려면 여기를 확인해 주세요: Progressive Web Apps</p>
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
<h1 id="다음-pwa" tabindex="-1"><a class="header-anchor" href="#다음-pwa" aria-hidden="true">#</a> 다음 PWA</h1>
<p>저수준에서 &quot;next-pwa&quot; 패키지는 Service Workers를 활용합니다. 이 글에서는 Service Workers에 대해 다루지 않겠습니다 (제가 잘 몰라서요 ㅋㅋ). 이 기본 기술을 통해 Progressive Web App (PWA) 기능을 Next.js 애플리케이션에 매끄럽게 통합할 수 있습니다. 이 패키지의 다양성은 앱을 위한 다양한 설정 옵션으로 나타납니다. 그러나 이 글에서는 &quot;오프라인&quot; 페이지 기능의 상세 구현에 중점을 둘 것입니다.</p>
<h1 id="앱-설정하기" tabindex="-1"><a class="header-anchor" href="#앱-설정하기" aria-hidden="true">#</a> 앱 설정하기</h1>
<p>먼저, 패키지를 설치해보겠습니다!</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm i @ducanh2912<span class="token operator">/</span>next<span class="token operator">-</span>pwa
또는
pnpm i @ducanh2912<span class="token operator">/</span>next<span class="token operator">-</span>pwa
또는
bun add @ducanh2912<span class="token operator">/</span>next<span class="token operator">-</span>pwa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>public 폴더 아래에 manifest.json 파일을 생성해야 해요. 이 manifest.json은 여기서 생성할 수 있어요. (또는 단순히 manifest.json 생성기를 검색하셔도 돼요, 다 똑같아요, 아마.)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token string-property property">"short_name"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token string-property property">"theme_color"</span><span class="token operator">:</span> <span class="token string">"#00ff00"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"background_color"</span><span class="token operator">:</span> <span class="token string">"#ffffff"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"display"</span><span class="token operator">:</span> <span class="token string">"browser"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"orientation"</span><span class="token operator">:</span> <span class="token string">"any"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"scope"</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"start_url"</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"icons"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">"src"</span><span class="token operator">:</span> <span class="token string">"/icons-192.png"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"image/png"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"sizes"</span><span class="token operator">:</span> <span class="token string">"192x192"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">"src"</span><span class="token operator">:</span> <span class="token string">"/icons-256.png"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"image/png"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"sizes"</span><span class="token operator">:</span> <span class="token string">"256x256"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이것이 manifest.json 파일이어야 하는 예시에요.</p>
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
<p>그 후에 오프라인 페이지 설정을 위해 먼저 라우트를 생성해야 해요.
앱 라우터에 &quot;offline&quot; 폴더를 만들었어요. 이렇게 생겼어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>└── app<span class="token operator">/</span> 
   ├── offline<span class="token operator">/</span> 
   │     └── page<span class="token punctuation">.</span>tsx 
   ├── page<span class="token punctuation">.</span>tsx 
   ├── layout<span class="token punctuation">.</span>tsx 
   └── favicon<span class="token punctuation">.</span>ico
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>마지막으로, next.config 파일에서 폴백 라우트를 지정해 줘야 해요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> withPWA <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@ducanh2912/next-pwa"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">cacheOnFrontEndNav</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">aggressiveFrontEndNavCaching</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">reloadOnOnline</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">swcMinify</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token string">"public"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fallbacks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//image: "/static/images/fallback.png",</span>
    <span class="token literal-property property">document</span><span class="token operator">:</span> <span class="token string">"/offline"</span><span class="token punctuation">,</span> <span class="token comment">// 만약 /_offline 대신 사용자 정의 페이지로 폴백하려면</span>
    <span class="token comment">// font: '/static/font/fallback.woff2',</span>
    <span class="token comment">// audio: ...,</span>
    <span class="token comment">// video: ...,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">workboxOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">disableDevLogs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ... 여러분이 좋아하는 다른 옵션들</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'next'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>NextConfig<span class="token punctuation">}</span></span> */</span>
<span class="token keyword">const</span> nextConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... 여러분이 좋아하는 다른 옵션들</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">withPWA</span><span class="token punctuation">(</span>nextConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그게 전부에요. 개발 서버 상태에서는 동작하지 않을 수 있으니, npm run build를 실행한 뒤에 npm run start를 시도해보세요.</p>
<p>이 구성을 통해 사용자가 연결 문제를 만났을 때 다른 경로를 클릭하면 브라우저의 기본 &quot;연결 없음&quot; 페이지가 아니라 사용자 정의 오프라인 페이지가 표시됩니다. 이 개선으로 네트워크 장애 발생 시 더욱 순조로운 사용자 경험을 보장할 수 있습니다.</p>
<h1 id="어떻게-테스트하나요" tabindex="-1"><a class="header-anchor" href="#어떻게-테스트하나요" aria-hidden="true">#</a> 어떻게 테스트하나요?</h1>
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
<img src="@source/docs/Tech/2024-04-23-Nextjs14OfflinePagewithPWA/img/Nextjs14OfflinePagewithPWA_1.png" />
<p>개발자 콘솔에서 &quot;네트워크&quot; 탭으로 이동하여 드롭다운 메뉴를 찾을 수 있습니다. 테스트 목적으로이 메뉴를 &quot;오프라인&quot;으로 설정하면 사용자 정의 오프라인 페이지가 표시되는 조건을 모방할 수 있습니다. 이 단계를 통해 오프라인 페이지의 작동을 확인하고 세부 조정할 수 있습니다. 이는 제어된 테스트 환경에서 오프라인 페이지의 동작을 확인하는 데 도움이 됩니다.</p>
<img src="@source/docs/Tech/2024-04-23-Nextjs14OfflinePagewithPWA/img/Nextjs14OfflinePagewithPWA_2.png" />
<p>이 글에서 다룬 예제 NextJS 앱이 여기 있습니다:</p>
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
<p>라이브 링크: 🔗 https://next-pwa-offline-gamma.vercel.app/
저장소 링크: 🔗 https://github.com/mertthesamael/next-pwa-offline/tree/master</p>
<p>내 웹사이트: https://merto.dev</p>
<p>다음 시간까지, 안녕!</p>
<p>하루에 최소 2리터의 물을 마시는 걸 잊지 마세요!</p>
</div></template>
