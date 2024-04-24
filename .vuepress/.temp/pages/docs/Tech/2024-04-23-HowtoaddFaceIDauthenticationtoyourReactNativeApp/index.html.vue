<template><div><p>이 게시물에서는 React Native 앱에서 Face ID 통합, RSA 2048 키페어 생성, RSA-SHA256 서명 생성, 그리고 Face ID 서명 및 공개 키를 확인하는 NodeJS 서버를 구축하는 내용을 다룰 것입니다.</p>
<p>Face ID는 iOS 및 Android 애플리케이션에서 널리 사용되는 보안 기능이 되었습니다. 이 기능을 통해 사용자들은 앱을 사용할 때 매끄럽고 안전한 인증 프로세스를 경험할 수 있습니다.</p>
<p>우리는 react-native-biometrics 패키지를 사용하여 React Native 애플리케이션에 Face ID 인증을 통합할 것입니다.</p>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>
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
<p>글을 따라가려면 다음 명령을 사용하여 손쉽게 만들 수있는 React Native 애플리케이션이 필요합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx react<span class="token operator">-</span>native init RealApp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/Tech/2024-04-23-HowtoaddFaceIDauthenticationtoyourReactNativeApp/img/HowtoaddFaceIDauthenticationtoyourReactNativeApp_0.png" alt="이미지"></p>
<p>이 예제에서는 WithFrame의 미리 제작 된 로그인 화면 중 하나를 사용하여 Face ID 액션을 실행할 것입니다.</p>
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
<h2 id="설치" tabindex="-1"><a class="header-anchor" href="#설치" aria-hidden="true">#</a> 설치</h2>
<p>만약 yarn을 사용하고 있다면, 아래 명령어를 실행해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add react<span class="token operator">-</span>native<span class="token operator">-</span>biometrics
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>만약 NPM을 사용하고 있다면, 아래 명령어를 실행해주세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install react<span class="token operator">-</span>native<span class="token operator">-</span>biometrics <span class="token operator">--</span>save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>그리고 반드시 네이티브 패키지를 링크해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx pod<span class="token operator">-</span>install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>React Native 0.60 이상에서는 CLI 자동 링크 기능이 앱을 빌드하는 동안 모듈을 자동으로 링크합니다.```</p>
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
<h2 id="권한" tabindex="-1"><a class="header-anchor" href="#권한" aria-hidden="true">#</a> 권한</h2>
<p>설치가 완료된 후, iOS와 안드로이드 모두에 대한 권한 문자열을 추가해야 합니다.</p>
<p>안드로이드의 경우, 아래 내용을 AndroidManifest.xml 파일에 추가해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>uses<span class="token operator">-</span>permission android<span class="token operator">:</span>name<span class="token operator">=</span><span class="token string">"android.permission.USE_BIOMETRIC"</span> <span class="token operator">/</span><span class="token operator">></span>
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
<p>iOS용으로는, Info.plist 파일에 다음을 추가해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>key<span class="token operator">></span>NSFaceIDUsageDescription<span class="token operator">&lt;</span><span class="token operator">/</span>key<span class="token operator">></span>
<span class="token operator">&lt;</span>string<span class="token operator">></span>Face <span class="token constant">ID</span>를 활성화하면 RealApp에 빠른 액세스가 가능합니다<span class="token operator">&lt;</span><span class="token operator">/</span>string<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="단계-1-생체-인증-키-쌍-만들기" tabindex="-1"><a class="header-anchor" href="#단계-1-생체-인증-키-쌍-만들기" aria-hidden="true">#</a> 단계 1: 생체 인증 키 쌍 만들기</h2>
<p>저희의 로그인 화면에는 &quot;로그인&quot;과 &quot;Face ID&quot; 두 개의 버튼이 있습니다. 사용자의 자격 증명이 확인된 후, 다음에 어떤 Face ID 기능을 사용할지 물어보겠습니다.</p>
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
<p>물론, 먼저 <code v-pre>isSensorAvailable()</code> 메서드를 사용하여 기기에서 Face ID를 사용할 수 있는지 확인해야 합니다.</p>
<p><code v-pre>createKeys()</code> 메서드를 사용하여 publicKey를 획득하자마자, 서버에 전송하여 사용자 엔터티에 저장해야 합니다. 나중에 서명을 확인하는 데 사용할 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> ReactNativeBiometrics<span class="token punctuation">,</span> <span class="token punctuation">{</span> BiometryTypes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-native-biometrics'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>TouchableOpacity
  onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 사용자 자격 증명을 확인한 후에 사용자에게 Face ID를 활성화할 것을 요청하기 전에 유저 아이디를 확인합니다.</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>userId<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">verifyUserCredentials</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> rnBiometrics <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReactNativeBiometrics</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> available<span class="token punctuation">,</span> biometryType <span class="token punctuation">}</span> <span class="token operator">=</span>
      <span class="token keyword">await</span> rnBiometrics<span class="token punctuation">.</span><span class="token function">isSensorAvailable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span>available <span class="token operator">&amp;&amp;</span> biometryType <span class="token operator">===</span> BiometryTypes<span class="token punctuation">.</span>FaceID<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Alert<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span>
        <span class="token string">'Face ID'</span><span class="token punctuation">,</span>
        <span class="token string">'다음에 인증할 때 Face ID를 활성화하시겠습니까?'</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'네'</span><span class="token punctuation">,</span>
            <span class="token function-variable function">onPress</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">const</span> <span class="token punctuation">{</span> publicKey <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> rnBiometrics<span class="token punctuation">.</span><span class="token function">createKeys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

              <span class="token comment">// `publicKey`를 데이터베이스에서 사용자 엔터티에 저장해야 합니다.</span>
              <span class="token keyword">await</span> <span class="token function">sendPublicKeyToServer</span><span class="token punctuation">(</span><span class="token punctuation">{</span> userId<span class="token punctuation">,</span> publicKey <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

              <span class="token comment">// 로컬 스토리지에 `userId`를 저장하여 Face ID 인증 중에 사용합니다.</span>
              <span class="token keyword">await</span> AsyncStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'userId'</span><span class="token punctuation">,</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'취소'</span><span class="token punctuation">,</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">'cancel'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>btn<span class="token punctuation">}</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>btnText<span class="token punctuation">}</span><span class="token operator">></span>로그인<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>TouchableOpacity<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="단계-2-생체-인식-서명-확인" tabindex="-1"><a class="header-anchor" href="#단계-2-생체-인식-서명-확인" aria-hidden="true">#</a> 단계 2: 생체 인식 서명 확인</h2>
<p>이제 사용자 엔티티에 저장된 공개 키를 사용하여 사용자 인증을 확인할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>TouchableOpacity
  onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> rnBiometrics <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReactNativeBiometrics</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> available<span class="token punctuation">,</span> biometryType <span class="token punctuation">}</span> <span class="token operator">=</span>
      <span class="token keyword">await</span> rnBiometrics<span class="token punctuation">.</span><span class="token function">isSensorAvailable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>available <span class="token operator">||</span> biometryType <span class="token operator">!==</span> BiometryTypes<span class="token punctuation">.</span>FaceID<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Alert<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span>
        <span class="token string">'이런!'</span><span class="token punctuation">,</span>
        <span class="token string">'이 기기에서 Face ID를 사용할 수 없습니다.'</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token keyword">const</span> userId <span class="token operator">=</span> <span class="token keyword">await</span> AsyncStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'userId'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Alert<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span>
        <span class="token string">'이런!'</span><span class="token punctuation">,</span>
        <span class="token string">'Face ID를 활성화하려면 먼저 자격 증명을 사용하여 로그인해야 합니다.'</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token keyword">const</span> timestamp <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>
      <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> payload <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>userId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">__</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>timestamp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  
    <span class="token keyword">const</span> <span class="token punctuation">{</span> success<span class="token punctuation">,</span> signature <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> rnBiometrics<span class="token punctuation">.</span><span class="token function">createSignature</span><span class="token punctuation">(</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">promptMessage</span><span class="token operator">:</span> <span class="token string">'로그인'</span><span class="token punctuation">,</span>
        payload<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Alert<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span>
        <span class="token string">'이런!'</span><span class="token punctuation">,</span>
        <span class="token string">'Face ID로 인증 중에 문제가 발생했습니다. 다시 시도해주세요.'</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token keyword">const</span> <span class="token punctuation">{</span> status<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">verifySignatureWithServer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      signature<span class="token punctuation">,</span>
      payload<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
    <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">!==</span> <span class="token string">'success'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Alert<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'이런!'</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    Alert<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'성공!'</span><span class="token punctuation">,</span> <span class="token string">'성공적으로 인증되었습니다!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>btnSecondary<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>MaterialCommunityIcons
        color<span class="token operator">=</span><span class="token string">"#000"</span>
        name<span class="token operator">=</span><span class="token string">"face-recognition"</span>
        size<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">22</span><span class="token punctuation">}</span>
        style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginRight</span><span class="token operator">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    
      <span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>btnSecondaryText<span class="token punctuation">}</span><span class="token operator">></span>Face <span class="token constant">ID</span><span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span>
    
      <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">34</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>TouchableOpacity<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="단계-3-nodejs에서-공개-키로-서명-확인하기" tabindex="-1"><a class="header-anchor" href="#단계-3-nodejs에서-공개-키로-서명-확인하기" aria-hidden="true">#</a> 단계 3: NodeJS에서 공개 키로 서명 확인하기</h2>
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
<p>사용자가 자신의 Face ID 인증을 받게 되면, Apple은 키 저장소에서 개인 키를 검색한 후, RSA PKCS#1v1.5 SHA 256 서명을 생성하는 데 사용합니다.</p>
<p>이전에 사용자 엔티티에 공개 키를 저장해 두었기 때문에, 이제 해당 서명이 동일한 공개/개인 키 쌍에서 생성된 개인 키를 사용하여 서명되었는지 확인할 수 있습니다. NodeJS에서는 이를 암호 모듈을 사용하여 수행할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> bodyParser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'body-parser'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> crypto <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'crypto'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>bodyParser<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'application/json'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> signature<span class="token punctuation">,</span> payload <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span>

  <span class="token keyword">const</span> userId <span class="token operator">=</span> payload<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'__'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getUserFromDatabaseByUserId</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'Face ID 인증 중에 문제가 발생했습니다.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 이전에 저장되었던 공개 키입니다.</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> publicKey <span class="token punctuation">}</span> <span class="token operator">=</span> user<span class="token punctuation">;</span>

  <span class="token keyword">const</span> verifier <span class="token operator">=</span> crypto<span class="token punctuation">.</span><span class="token function">createVerify</span><span class="token punctuation">(</span><span class="token string">'RSA-SHA256'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  verifier<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> isVerified <span class="token operator">=</span> verifier<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">-----BEGIN PUBLIC KEY-----\n</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>publicKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\n-----END PUBLIC KEY-----</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
    signature<span class="token punctuation">,</span>
    <span class="token string">'base64'</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isVerified<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'failed'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'안타깝지만, Face ID 인증을 확인할 수 없습니다.'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 게시물을 즐겁게 읽으셨기를 바라며, 이제 React Native 애플리케이션에 Face ID를 통합하는 방법에 대한 이해가 더 깊어졌으면 좋겠습니다.</p>
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
<p>Final React Native 애플리케이션 코드는 저희의 GitHub 저장소에서 확인하실 수 있어요.</p>
<p>이 로그인 화면과 다른 많은 화면들은 저희 웹사이트에 있어요: WithFrame React Native Components</p>
</div></template>
