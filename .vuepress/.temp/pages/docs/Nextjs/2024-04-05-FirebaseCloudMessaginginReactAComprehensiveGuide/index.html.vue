<template><div><p>리액트 앱에 Firebase를 사용하여 쉽게 푸시 알림을 추가하는 방법을 배워보세요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-FirebaseCloudMessaginginReactAComprehensiveGuide/img/FirebaseCloudMessaginginReactAComprehensiveGuide_0.png" alt="Firebase Cloud Messaging in React: A Comprehensive Guide"></p>
<p>Firebase는 Google이 개발한 인기 있는 웹 및 모바일 애플리케이션 개발 플랫폼으로, 개발자들이 앱을 쉽게 구축, 관리 및 성장시킬 수 있도록 도와줍니다. Firebase는 신속한 앱 개발과 향상된 사용자 경험을 위한 다양한 서비스를 제공합니다. 다음은 몇 가지 중요한 Firebase 서비스입니다:</p>
<ul>
<li>Firebase 실시간 데이터베이스</li>
<li>Firebase 인증</li>
<li>Firebase 클라우드 메시징 (FCM)/ Firebase 푸시 알림</li>
<li>Firebase 호스팅</li>
<li>Firebase 클라우드 Firestore</li>
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
<p>이 글에서는 Firebase 푸시 알림의 개념을 자세히 살펴보고, 이 서비스를 React 앱에 배경 및 전경 알림을 위해 통합하는 방법을 알아볼 것입니다.</p>
<h1 id="fcm-firebase-푸시-알림이란" tabindex="-1"><a class="header-anchor" href="#fcm-firebase-푸시-알림이란" aria-hidden="true">#</a> FCM/Firebase 푸시 알림이란?</h1>
<p>푸시 알림은 React 애플리케이션과 사용자의 상호작용을 증가시키는 강력한 방법입니다. Firebase는 Firebase Cloud Messaging(FCM) 서비스를 제공합니다. 이는 모바일 기기와 웹 애플리케이션으로 알림을 보낼 수 있는 클라우드 기반 메시징 서비스입니다.</p>
<p>FCM을 활용하면 새로운 콘텐츠를 확인할 때 클라이언트 앱에 알림을 보낼 수 있습니다. 사용자들의 어깨를 두드리며 돌아오라고 상기시키는 것과 같이, 사용자들을 끌어들이고 기쁘게 만들어주는 역할을 합니다.</p>
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
<p>Benefits of FCM :</p>
<ul>
<li>Cross-Platform Support</li>
<li>Real-Time Engagement</li>
<li>Scalability and Reliability</li>
<li>User Segmentation</li>
<li>Easy Integration with Firebase Services</li>
<li>Free Tier Availability</li>
<li>Customization Options</li>
<li>Security Measures</li>
</ul>
<p>더 많은 정보는 여기를 클릭해주세요.</p>
<h1 id="리액트-앱-샘플-설정" tabindex="-1"><a class="header-anchor" href="#리액트-앱-샘플-설정" aria-hidden="true">#</a> 리액트 앱 샘플 설정</h1>
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
<li>Vite React 프로젝트 초기화: 아래 명령어를 실행하여 새 데모 React 앱을 만드세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm create vite@latest demo<span class="token operator">-</span>app <span class="token operator">--</span>template react
cd demo<span class="token operator">-</span>app
npm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>의존성 설치: firebase와 react-toastify를 설치할 것입니다. react-toastify를 사용하면 앱에 쉽게 알림을 추가할 수 있습니다.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm i firebase react<span class="token operator">-</span>toastify
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
<ol start="3">
<li>폴더 구조:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>
├── index<span class="token punctuation">.</span>html
├── <span class="token keyword">package</span><span class="token punctuation">.</span>json
├── <span class="token keyword">package</span><span class="token operator">-</span>lock<span class="token punctuation">.</span>json
├── <span class="token keyword">public</span>
│   ├── firebase<span class="token operator">-</span>messaging<span class="token operator">-</span>sw<span class="token punctuation">.</span>js
│   └── vite<span class="token punctuation">.</span>svg
├── <span class="token constant">README</span><span class="token punctuation">.</span>md
├── src
│   ├── App<span class="token punctuation">.</span>css
│   ├── App<span class="token punctuation">.</span>jsx
│   ├── assets
│   │   └── react<span class="token punctuation">.</span>svg
│   ├── components
│   │   └── Message<span class="token punctuation">.</span>jsx
│   ├── firebase
│   │   └── firebaseConfig<span class="token punctuation">.</span>js
│   ├── index<span class="token punctuation">.</span>css
│   └── main<span class="token punctuation">.</span>jsx
└── vite<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="firebase-프로젝트-설정" tabindex="-1"><a class="header-anchor" href="#firebase-프로젝트-설정" aria-hidden="true">#</a> Firebase 프로젝트 설정</h1>
<ol>
<li>새 Firebase 프로젝트를 초기화하세요:</li>
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
<p>Firebase 프로젝트를 추가하고 이름을 지정하세요. 원하는대로 분석을 활성화 또는 비활성화하세요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-FirebaseCloudMessaginginReactAComprehensiveGuide/img/FirebaseCloudMessaginginReactAComprehensiveGuide_1.png" alt="FirebaseCloudMessaginginReactAComprehensiveGuide_1.png"></p>
<ol start="2">
<li>Firebase 구성 생성:</li>
</ol>
<p>Firebase 프로젝트와 React 앱 간의 연결을 설정해야 합니다. 이를 위해 앱에 통합할 Firebase 구성이 필요합니다.</p>
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
<p>프로젝트 설정으로 이동해서 <code v-pre>일반</code> 탭으로 이동한 후 <code v-pre>내 앱</code>을 선택하세요. 웹 앱 옵션을 선택하세요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-FirebaseCloudMessaginginReactAComprehensiveGuide/img/FirebaseCloudMessaginginReactAComprehensiveGuide_2.png" alt="Firebase Cloud Messaging in React"></p>
<p>닉네임을 제공하고 앱을 등록하세요. 구성이 생성됩니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-FirebaseCloudMessaginginReactAComprehensiveGuide/img/FirebaseCloudMessaginginReactAComprehensiveGuide_3.png" alt="Firebase Cloud Messaging in React"></p>
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
<ol start="3">
<li>웹 푸시 인증서 키(VAPID 키) 생성:</li>
</ol>
<p>VAPID는 Voluntary Application Server Identity의 약자로, 웹 푸시 알림을 보내고 받는 새로운 방법입니다. VAPID 키를 사용하면 서버에서 브라우저로 직접 웹 푸시 알림을 보낼 수 있습니다.</p>
<p>프로젝트 설정 <code v-pre>Cloud Messaging</code> 웹 구성으로 이동하여 키 쌍을 생성하세요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-FirebaseCloudMessaginginReactAComprehensiveGuide/img/FirebaseCloudMessaginginReactAComprehensiveGuide_4.png" alt="FirebaseCloudMessaginginReactAComprehensiveGuide_4"></p>
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
<img src="@source/docs/Nextjs/2024-04-05-FirebaseCloudMessaginginReactAComprehensiveGuide/img/FirebaseCloudMessaginginReactAComprehensiveGuide_5.png" />
<h1 id="firebase-프로젝트와-react-애플리케이션-연결하기" tabindex="-1"><a class="header-anchor" href="#firebase-프로젝트와-react-애플리케이션-연결하기" aria-hidden="true">#</a> Firebase 프로젝트와 React 애플리케이션 연결하기</h1>
<ul>
<li>환경 변수 생성하기:</li>
</ul>
<p>루트 폴더에 .env 파일을 생성하고 Firebase 구성 값 및 vapid 키를 안전하게 저장하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">VITE_APP_API_KEY</span><span class="token operator">=</span>your<span class="token operator">-</span>api<span class="token operator">-</span>key
<span class="token constant">VITE_APP_AUTH_DOMAIN</span><span class="token operator">=</span>your<span class="token operator">-</span>auth<span class="token operator">-</span>domain
<span class="token constant">VITE_APP_PROJECT_ID</span><span class="token operator">=</span>your<span class="token operator">-</span>project<span class="token operator">-</span>id
<span class="token constant">VITE_APP_STORAGE_BUCKET</span><span class="token operator">=</span>your<span class="token operator">-</span>storage<span class="token operator">-</span>bucket
<span class="token constant">VITE_APP_MESSAGING_SENDER_ID</span><span class="token operator">=</span>your<span class="token operator">-</span>messaging<span class="token operator">-</span>sender<span class="token operator">-</span>id
<span class="token constant">VITE_APP_APP_ID</span><span class="token operator">=</span>your<span class="token operator">-</span>app<span class="token operator">-</span>id
<span class="token constant">VITE_APP_MEASUREMENT_ID</span><span class="token operator">=</span>your<span class="token operator">-</span>measurement<span class="token operator">-</span>id
<span class="token constant">VITE_APP_VAPID_KEY</span><span class="token operator">=</span>your<span class="token operator">-</span>vapid<span class="token operator">-</span>key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.env 파일에서 값을 가져오려면 다음을 사용할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token constant">VITE_APP_VARIABLE_NAME</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>firebaseConfig.js 파일을 생성하세요:</li>
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
<p>src/firebase/firebaseConfig.js 파일을 만들어 구성 파일을 생성하세요. 앱을 초기화하고 구성을 사용하여 Firebase 프로젝트와 연결하세요.</p>
<p>메시징 서비스를 활성화하려면 firebase/messaging에서 제공하는 getMessaging을 사용해야 합니다. 앱을 메시징 객체와 연결하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> initializeApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"firebase/app"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getMessaging <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"firebase/messaging"</span><span class="token punctuation">;</span>

<span class="token comment">// .env 파일에서 가져온 Firebase 구성 값</span>
<span class="token keyword">const</span> firebaseConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">apiKey</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_APP_API_KEY</span><span class="token punctuation">,</span>
  <span class="token literal-property property">authDomain</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_APP_AUTH_DOMAIN</span><span class="token punctuation">,</span>
  <span class="token literal-property property">projectId</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_APP_PROJECT_ID</span><span class="token punctuation">,</span>
  <span class="token literal-property property">storageBucket</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_APP_STORAGE_BUCKET</span><span class="token punctuation">,</span>
  <span class="token literal-property property">messagingSenderId</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_APP_MESSAGING_SENDER_ID</span><span class="token punctuation">,</span>
  <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_APP_APP_ID</span><span class="token punctuation">,</span>
  <span class="token literal-property property">measurementId</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_APP_MEASUREMENT_ID</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Firebase 초기화</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">initializeApp</span><span class="token punctuation">(</span>firebaseConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 메시징 서비스</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> messaging <span class="token operator">=</span> <span class="token function">getMessaging</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="알림-권한-및-등록-토큰" tabindex="-1"><a class="header-anchor" href="#알림-권한-및-등록-토큰" aria-hidden="true">#</a> 알림 권한 및 등록 토큰</h1>
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
<p>브라우저로 Push 알림을 보내려면 사용자의 허락이 필요합니다.</p>
<p>브라우저의 Notification API를 사용할 것입니다. 사용자의 허락을 요청하고, Firebase의 getToken 메서드와 메시징 객체를 사용하여 등록 토큰을 가져올 수 있습니다.</p>
<p>App.jsx에 다음 코드를 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getToken <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"firebase/messaging"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> messaging <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./firebase/firebaseConfig"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token constant">VITE_APP_VAPID_KEY</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">requestPermission</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Notification API를 사용하여 허가 요청</span>
  <span class="token keyword">const</span> permission <span class="token operator">=</span> <span class="token keyword">await</span> Notification<span class="token punctuation">.</span><span class="token function">requestPermission</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>permission <span class="token operator">===</span> <span class="token string">"granted"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> token <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getToken</span><span class="token punctuation">(</span>messaging<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">vapidKey</span><span class="token operator">:</span> <span class="token constant">VITE_APP_VAPID_KEY</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 토큰을 서버로 보낼 수 있습니다</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"생성된 토큰: "</span><span class="token punctuation">,</span> token<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>permission <span class="token operator">===</span> <span class="token string">"denied"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 알림이 차단됨</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"알림에 대해 거부하셨습니다"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">requestPermission</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 시나리오에서는 현재 콘솔에 토큰을 표시하고 있습니다. 그러나 이 토큰은 서버로 전송하여 Node.js나 다른 적절한 백엔드 라이브러리를 사용하여 백엔드를 구성하는 데 사용할 수도 있습니다.</p>
<h1 id="알림-수신-대기-설정" tabindex="-1"><a class="header-anchor" href="#알림-수신-대기-설정" aria-hidden="true">#</a> 알림 수신 대기 설정</h1>
<p>알림은 전경 알림과 배경 알림 두 가지 유형으로 나눌 수 있습니다.</p>
<p>모든 알림에는 제목과 본문이 있어야 하며, 이미지는 선택 사항입니다.</p>
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
<h2 id="포그라운드-알림-수신기" tabindex="-1"><a class="header-anchor" href="#포그라운드-알림-수신기" aria-hidden="true">#</a> 포그라운드 알림 수신기</h2>
<p>앱이 포그라운드에서 활성 상태인 경우를 다루기 위해 Firebase의 onMessage 이벤트 리스너를 사용하겠습니다.</p>
<p>이전에 언급한 대로, 알림 처리는 react-toastify를 활용하여 이루어집니다.</p>
<p>App.jsx 파일에 제공된 코드를 통합하여 원활한 사용자 경험을 보장하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> toast<span class="token punctuation">,</span> ToastContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-toastify"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Message <span class="token keyword">from</span> <span class="token string">"./components/Message"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"react-toastify/dist/ReactToastify.css"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

   <span class="token function">onMessage</span><span class="token punctuation">(</span>messaging<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">payload</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
     <span class="token function">toast</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Message notification<span class="token operator">=</span><span class="token punctuation">{</span>payload<span class="token punctuation">.</span>notification<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token comment">// ... 나머지 코드 ...</span>

   <span class="token keyword">return</span> <span class="token punctuation">(</span>
       <span class="token operator">&lt;</span><span class="token operator">></span>
          <span class="token comment">// ... 나머지 코드 ...</span>
          <span class="token operator">&lt;</span>ToastContainer <span class="token operator">/</span><span class="token operator">></span>
       <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>알림을 표시하려면 아래와 같이 Message.jsx 라는 별도의 컴포넌트를 만들었습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">Message</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> notification <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"notificationHeader"</span><span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token comment">/* 이미지는 선택 사항입니다 */</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span>notification<span class="token punctuation">.</span>image <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"imageContainer"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token punctuation">{</span>notification<span class="token punctuation">.</span>image<span class="token punctuation">}</span> width<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span>notification<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"notificationBody"</span><span class="token operator">></span><span class="token punctuation">{</span>notification<span class="token punctuation">.</span>body<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Message<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>스타일을 직접 구성하거나 아래 제공된 스타일을 사용할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>#notificationHeader <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> space<span class="token operator">-</span>around<span class="token punctuation">;</span>
  align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
  font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

#notificationBody <span class="token punctuation">{</span>
  margin<span class="token operator">-</span>top<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

#imageContainer <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
  object<span class="token operator">-</span>fit<span class="token operator">:</span> contain<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="배경-알림-수신기" tabindex="-1"><a class="header-anchor" href="#배경-알림-수신기" aria-hidden="true">#</a> 배경 알림 수신기</h2>
<p>앱이 비활성 상태인 경우에 대비해서, public 폴더에 서비스 워커 파일(firebase-messaging-sw.js)을 생성해야 합니다. 그 안에 messaging.onBackgroundMessage 이벤트 리스너를 사용할 것입니다.</p>
<p>이 이벤트 리스너는 웹 애플리케이션이 활성 상태가 아닐 때(백그라운드에 있거나 종료된 상태) 발신 메시지를 수신하는 데 사용됩니다. 백그라운드 메시지가 수신되면, 제공된 콜백 함수를 호출하여 메시지 페이로드를 기록하고 알림을 표시합니다.</p>
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
<p>self.registration.showNotification은 백그라운드 메시지를 받았을 때 사용자 브라우저에 알림을 표시하는 데 사용됩니다. FCM 페이로드에서 데이터를 활용하여 제목, 본문 및 아이콘을 가진 알림을 생성합니다.</p>
<p>firebase-messaging-sw.js의 코드는 아래와 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Scripts for firebase and firebase messaging</span>
<span class="token function">importScripts</span><span class="token punctuation">(</span><span class="token string">"https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">importScripts</span><span class="token punctuation">(</span>
  <span class="token string">"https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 서비스 워커에서 Firebase 앱 초기화</span>
<span class="token comment">// "Default" Firebase 구성 (오류 방지)</span>
<span class="token keyword">const</span> defaultConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">apiKey</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">projectId</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">messagingSenderId</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

firebase<span class="token punctuation">.</span><span class="token function">initializeApp</span><span class="token punctuation">(</span>firebaseConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Firebase 메시징 검색</span>
<span class="token keyword">const</span> messaging <span class="token operator">=</span> firebase<span class="token punctuation">.</span><span class="token function">messaging</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

messaging<span class="token punctuation">.</span><span class="token function">onBackgroundMessage</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">payload</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> notificationTitle <span class="token operator">=</span> payload<span class="token punctuation">.</span>notification<span class="token punctuation">.</span>title<span class="token punctuation">;</span>
  <span class="token keyword">const</span> notificationOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> payload<span class="token punctuation">.</span>notification<span class="token punctuation">.</span>body<span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> payload<span class="token punctuation">.</span>notification<span class="token punctuation">.</span>image<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  self<span class="token punctuation">.</span>registration<span class="token punctuation">.</span><span class="token function">showNotification</span><span class="token punctuation">(</span>notificationTitle<span class="token punctuation">,</span> notificationOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서, V8 호환 버전의 압축된 스크립트 <code v-pre>importScripts</code>를 사용했습니다.</p>
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
<h1 id="푸시-알림-테스트-중" tabindex="-1"><a class="header-anchor" href="#푸시-알림-테스트-중" aria-hidden="true">#</a> 푸시 알림 테스트 중</h1>
<p>지금 우리 알림 서비스가 잘 작동하는지 테스트할 수 있어요.</p>
<p>Firebase <code v-pre>Engage</code> Messaging으로 이동해서 첫 번째 캠페인을 만들어주세요. 메시지 유형을 Firebase 알림 메시지로 선택하고 제목, 본문, 이미지(옵션)를 제공하여 알림 메시지를 맞춤 설정해주세요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-FirebaseCloudMessaginginReactAComprehensiveGuide/img/FirebaseCloudMessaginginReactAComprehensiveGuide_6.png" alt="이미지"></p>
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
<p>&quot;Send&quot;을 클릭하고 등록 토큰을 여기에 붙여넣으세요. 토큰을 선택하고 &quot;테스트&quot;를 클릭하세요. 알림 메시지가 전송됩니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-FirebaseCloudMessaginginReactAComprehensiveGuide/img/FirebaseCloudMessaginginReactAComprehensiveGuide_7.png" alt="Firebase Cloud Messaging in React: A Comprehensive Guide"></p>
<h1 id="결과" tabindex="-1"><a class="header-anchor" href="#결과" aria-hidden="true">#</a> 결과</h1>
<h2 id="화면-알림" tabindex="-1"><a class="header-anchor" href="#화면-알림" aria-hidden="true">#</a> 화면 알림:</h2>
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
<p>어플이 활성화된 상태일 때 알림이 어떻게 표시될 지 확인해보세요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-FirebaseCloudMessaginginReactAComprehensiveGuide/img/FirebaseCloudMessaginginReactAComprehensiveGuide_8.png" alt="Foreground Notification"></p>
<h2 id="배경-알림" tabindex="-1"><a class="header-anchor" href="#배경-알림" aria-hidden="true">#</a> 배경 알림:</h2>
<p>어플이 백그라운드에 있거나 종료된 상태일 때 알림이 어떻게 표시될 지 확인해보세요.</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-FirebaseCloudMessaginginReactAComprehensiveGuide/img/FirebaseCloudMessaginginReactAComprehensiveGuide_9.png" alt="Firebase Cloud Messaging"></p>
<h1 id="알림-캠페인에서의-사용자-정의" tabindex="-1"><a class="header-anchor" href="#알림-캠페인에서의-사용자-정의" aria-hidden="true">#</a> 알림 캠페인에서의 사용자 정의</h1>
<p>알림 제목, 본문 및 이미지 외에 많은 다른 사항을 구성할 수 있습니다.</p>
<ul>
<li>대상 고객층: 알림을 위한 대상 고객층을 지정할 수 있습니다. 사용자 언어, 기기 범주, 국가/지역 등 다양한 기준에 따라 특정 사용자 세그먼트를 대상으로 설정할 수 있습니다.</li>
<li>일정: 알림을 보낼 때 일정을 설정할 수 있습니다. 즉시 보내거나, 특정 시간에 보내거나, 주기적으로 보낼 수 있습니다.</li>
<li>전환 이벤트: 전환 이벤트는 사용자가 알림을 받은 후 취할 행동으로, 이는 알림을 클릭하거나 구매를 완료하거나 서비스에 가입하거나 앱에 가치 있는 기타 사용자 참여 지표를 포함할 수 있습니다. 이러한 전환 이벤트를 추적하여 알림 캠페인의 효과를 측정할 수 있습니다.</li>
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
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>이 체계적인 안내서는 React 애플리케이션에 푸시 알림을 구현하는 단계별 안내를 제공했습니다. FCM은 개발자들이 알림을 보내는 데 도움을 주는 클라우드 기반 메시징 서비스입니다. 이는 크로스 플랫폼 지원을 제공하며 새로운 데이터 이용 가능성에 대해 클라이언트에게 실시간으로 알림을 보내는 것으로 사용자 참여를 높입니다. 제시된 과정을 따라 당신은 앱을 설정하여 전경과 배경 시나리오에서 실시간 사용자 참여와 재참여를 보장하는 알림을 전달할 수 있었을 것입니다.</p>
<p>FCM은 React 애플리케이션에서 사용자 참여와 알림 전달을 향상시키려는 개발자들에게 중요한 자원이 될 수 있습니다.</p>
</div></template>
