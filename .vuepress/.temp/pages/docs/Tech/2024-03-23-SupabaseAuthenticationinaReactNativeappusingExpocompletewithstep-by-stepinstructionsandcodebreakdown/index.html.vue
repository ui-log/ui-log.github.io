<template><div><p><img src="@source/docs/Tech/2024-03-23-SupabaseAuthenticationinaReactNativeappusingExpocompletewithstep-by-stepinstructionsandcodebreakdown/img/Supabase-Authentication-in-a-React-Native-app-using-Expo-complete-with-step-by-step-instructions-and-code-breakdown._0.png" alt="이미지"></p>
<h1 id="마무리" tabindex="-1"><a class="header-anchor" href="#마무리" aria-hidden="true">#</a> 마무리</h1>
<p>이 글에서는 Expo를 사용하여 React Native 앱에 Supabase 인증을 통합하는 과정을 살펴보겠습니다. 제공된 단계별 지침을 따르면 모바일 애플리케이션에 인증 기능을 쉽게 추가하여 보안 및 사용자 경험을 향상시킬 수 있습니다.</p>
<h1 id="왜-supabase가-좋은-선택인가" tabindex="-1"><a class="header-anchor" href="#왜-supabase가-좋은-선택인가" aria-hidden="true">#</a> 왜 Supabase가 좋은 선택인가?</h1>
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
<p>Supabase는 여러 가지 이유로 개발자들에게 강력한 도구로 두드러지는데요:</p>
<ul>
<li>사용 편의성: Supabase는 사용자 친화적인 인터페이스와 간단한 설정 프로세스를 제공하여 초보자들에게도 쉽게 접근할 수 있습니다.</li>
<li>확장성: 어플리케이션이 성장함에 따라 Supabase는 성능을 희생하지 않고도 요구사항을 충족시키기 위해 손쉽게 확장될 수 있습니다.</li>
<li>실시간 기능: Supabase는 실시간 기능을 기본으로 제공하여 동적이고 인터랙티브한 어플리케이션을 구축할 수 있습니다.</li>
<li>오픈 소스: 오픈 소스인 Supabase는 투명성과 유연성을 제공하여 플랫폼을 사용자 정의하고 기여할 수 있도록 합니다.</li>
<li>포괄적인 문서: Supabase는 포괄적인 문서와 커뮤니티 지원을 제공하여 성공을 위해 필요한 모든 리소스를 확보할 수 있습니다.</li>
</ul>
<p>Supabase를 인증 수단으로 선택함으로써 당신의 React Native 앱을 크게 향상시킬 수 있는 강력하고 확장 가능하며 개발자 친화적인 솔루션을 선택하게 됩니다.</p>
<p>먼저 이 인증 플로우를 복제하려면 Supabase 계정과 프로젝트가 필요합니다.</p>
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
<p>React Native Expo 애플리케이션을 설정하려면 터미널(맥 또는 리눅스 사용자)이나 명령 프롬프트(윈도우 사용자)에서 다음 명령을 실행하세요.</p>
<p>참고: Node.js가 필요합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>expo<span class="token operator">-</span>app <span class="token operator">-</span>t expo<span class="token operator">-</span>template<span class="token operator">-</span>blank<span class="token operator">-</span>typescriptbash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이제 React Native Expo 애플리케이션이 준비되었습니다. 실행하려면 터미널에서 다음 명령을 실행하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cd yourApplicationName <span class="token operator">&amp;&amp;</span> npx expo start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이제 애플리케이션이 실행 중입니다. 동일한 터미널에서 QR 코드를 스캔하여 전화기에서 테스트할 수 있습니다 (기기와 전화기가 동일한 네트워크에 연결된 경우에만 작동합니다). 또는 현재 사용 중인 OS에 따라 iOS 또는 Android 에뮬레이터에서 애플리케이션을 실행할 수도 있습니다.</p>
<p>이제 Supabase에서 필요한 종속성을 설치해 봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx expo install @supabase<span class="token operator">/</span>supabase<span class="token operator">-</span>js @react<span class="token operator">-</span>native<span class="token operator">-</span>async<span class="token operator">-</span>storage<span class="token operator">/</span>async<span class="token operator">-</span>storage react<span class="token operator">-</span>native<span class="token operator">-</span>elements react<span class="token operator">-</span>native<span class="token operator">-</span>url<span class="token operator">-</span>polyfill
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">"react-native-url-polyfill/auto"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> AsyncStorage <span class="token keyword">from</span> <span class="token string">"@react-native-async-storage/async-storage"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@supabase/supabase-js"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> supabaseUrl <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> supabaseAnonKey <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> supabase <span class="token operator">=</span> <span class="token function">createClient</span><span class="token punctuation">(</span>supabaseUrl<span class="token punctuation">,</span> supabaseAnonKey<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">storage</span><span class="token operator">:</span> AsyncStorage<span class="token punctuation">,</span>
    <span class="token literal-property property">autoRefreshToken</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">persistSession</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">detectSessionInUrl</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>screens/Authentication.tsx</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert<span class="token punctuation">,</span> StyleSheet<span class="token punctuation">,</span> View<span class="token punctuation">,</span> AppState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-native"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-native-elements"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> supabase <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../utils/supabase"</span><span class="token punctuation">;</span>

<span class="token comment">// Supabase Auth에서 세션을 자동으로 지속적으로 새로고침하도록 지시합니다.</span>
<span class="token comment">// 앱이 활성 상태인 경우, 사용자의 세션이 종료되면 'onAuthStateChange' 이벤트를 계속</span>
<span class="token comment">// 받게됩니다. 'TOKEN_REFRESHED' 또는 'SIGNED_OUT' 이벤트가 발생합니다.</span>
<span class="token comment">// 이는 한 번만 등록해야 합니다.</span>
AppState<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"change"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>state <span class="token operator">===</span> <span class="token string">"active"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    supabase<span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">startAutoRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    supabase<span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">stopAutoRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Authentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>email<span class="token punctuation">,</span> setEmail<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>password<span class="token punctuation">,</span> setPassword<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">signInWithEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> supabase<span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">signInWithPassword</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">email</span><span class="token operator">:</span> email<span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> password<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"에러"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> Alert<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">signUpWithEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> session <span class="token punctuation">}</span><span class="token punctuation">,</span>
      error<span class="token punctuation">,</span>
    <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> supabase<span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">signUp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">email</span><span class="token operator">:</span> email<span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> password<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> Alert<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>session<span class="token punctuation">)</span> Alert<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"이메일 인증을 위해 받은 메일함을 확인해주세요!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>styles<span class="token punctuation">.</span>verticallySpaced<span class="token punctuation">,</span> styles<span class="token punctuation">.</span>mt20<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Input label<span class="token operator">=</span><span class="token string">"이메일"</span> leftIcon<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"font-awesome"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"envelope"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> onChangeText<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setEmail</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">}</span> value<span class="token operator">=</span><span class="token punctuation">{</span>email<span class="token punctuation">}</span> placeholder<span class="token operator">=</span><span class="token string">"email@address.com"</span> autoCapitalize<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"none"</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
      <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>verticallySpaced<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Input
          label<span class="token operator">=</span><span class="token string">"비밀번호"</span>
          leftIcon<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"font-awesome"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"lock"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          onChangeText<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setPassword</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">}</span>
          value<span class="token operator">=</span><span class="token punctuation">{</span>password<span class="token punctuation">}</span>
          secureTextEntry<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>
          placeholder<span class="token operator">=</span><span class="token string">"비밀번호"</span>
          autoCapitalize<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"none"</span><span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
      <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>styles<span class="token punctuation">.</span>verticallySpaced<span class="token punctuation">,</span> styles<span class="token punctuation">.</span>mt20<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Button title<span class="token operator">=</span><span class="token string">"로그인"</span> disabled<span class="token operator">=</span><span class="token punctuation">{</span>loading<span class="token punctuation">}</span> onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">signInWithEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
      <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>verticallySpaced<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Button title<span class="token operator">=</span><span class="token string">"가입하기"</span> disabled<span class="token operator">=</span><span class="token punctuation">{</span>loading<span class="token punctuation">}</span> onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">signUpWithEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">verticallySpaced</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">paddingTop</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token literal-property property">paddingBottom</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alignSelf</span><span class="token operator">:</span> <span class="token string">"stretch"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mt20</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>App.tsx</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> StatusBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"expo-status-bar"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Pressable<span class="token punctuation">,</span> StyleSheet<span class="token punctuation">,</span> Text<span class="token punctuation">,</span> View <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-native"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">"./screens/Authentication"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> supabase <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./utils/supabase"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Session <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@supabase/supabase-js"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Authentication <span class="token keyword">from</span> <span class="token string">"./screens/Authentication"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>session<span class="token punctuation">,</span> setSession<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>useState <span class="token operator">&lt;</span> Session<span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">></span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    supabase<span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> session <span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setSession</span><span class="token punctuation">(</span>session<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    supabase<span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">onAuthStateChange</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_event<span class="token punctuation">,</span> session</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setSession</span><span class="token punctuation">(</span>session<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token punctuation">{</span>session <span class="token operator">&amp;&amp;</span> session<span class="token punctuation">.</span>user <span class="token operator">?</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>View
          style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">"100%"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">"flex"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">"#222"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">></span>
          <span class="token operator">&lt;</span>Text
            style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
              <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#FFF"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token operator">></span>
            Hey<span class="token punctuation">,</span> <span class="token punctuation">{</span>session<span class="token punctuation">.</span>user<span class="token punctuation">.</span>email<span class="token punctuation">}</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span>
          <span class="token operator">&lt;</span>Pressable
            onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              supabase<span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">signOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span>
            style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
              <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
              <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">"flex"</span><span class="token punctuation">,</span>
              <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
              <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
              <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
              <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
              <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">"#FFF"</span><span class="token punctuation">,</span>
              <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token operator">></span>
            <span class="token operator">&lt;</span>Text
              style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#333"</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token operator">></span>
              Sign Out
            <span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Pressable<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
      <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>Authentication <span class="token operator">/</span><span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>StatusBar style<span class="token operator">=</span><span class="token string">"light"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">"#fff"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>초기 React Native Expo 앱에서 Supabase Authentication을 시작하는 데 도움이 되었기를 바래요! 코딩을 즐기세요! 칭찬해 주세요!</p>
</div></template>
