<template><div><h1 id="react-native에서-lazy-loading으로-성능-개선하는-방법" tabindex="-1"><a class="header-anchor" href="#react-native에서-lazy-loading으로-성능-개선하는-방법" aria-hidden="true">#</a> React Native에서 lazy loading으로 성능 개선하는 방법</h1>
<img src="@source/docs/Tech/2024-03-15-React-Native에서-lazy-loading으로-성능-개선하는-방법/img/Boosting-React-Native-Performance-with-Lazy-Loading-and-Code-Splitting_0.png" />
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
<h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개:</h1>
<p>모바일 앱 개발에서 사용자 경험은 매우 중요합니다. 사용자는 플랫폼에 상관없이 앱이 빠르고 반응적이기를 기대합니다. React Native는 크로스 플랫폼 모바일 애플리케이션을 개발하기 위한 인기 있는 프레임워크인데, 성능 최적화는 개발의 중요한 측면입니다. Lazy loading 및 코드 분할은 React Native 앱의 성능을 signficantly 향상시킬 수 있는 두 가지 강력한 기술입니다.</p>
<h1 id="lazy-loading-및-코드-분할이란-무엇인가요" tabindex="-1"><a class="header-anchor" href="#lazy-loading-및-코드-분할이란-무엇인가요" aria-hidden="true">#</a> Lazy Loading 및 코드 분할이란 무엇인가요?</h1>
<p>React Native에서 이러한 기술을 어떻게 구현하는지 알아보기 전에, lazy loading과 코드 분할이 무엇인지 명확히 이해해야 합니다.</p>
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
<h1 id="lazy-loading" tabindex="-1"><a class="header-anchor" href="#lazy-loading" aria-hidden="true">#</a> Lazy Loading:</h1>
<p>Lazy loading은 필요할 때까지 특정 리소스(예: 컴포넌트, 모듈 또는 이미지)의 로드를 지연시키는 전략입니다. 이 접근 방식은 초기 앱 시작 시 필수 구성 요소만 로드하기 때문에 앱의 초기 로드 시간을 줄입니다. 추가 구성 요소는 사용자가 앱과 상호 작용하는 동안 로드됩니다.</p>
<h1 id="코드-분할" tabindex="-1"><a class="header-anchor" href="#코드-분할" aria-hidden="true">#</a> 코드 분할:</h1>
<p>코드 분할은 JavaScript 코드를 더 작고 관리하기 쉬운 청크로 분할할 수 있는 기술입니다. 앱 전체를 단일 JavaScript 파일로 번들하는 대신에 여러 작은 파일 또는 청크로 나눕니다. 이러한 청크는 필요할 때 로드되어 앱의 초기 로드 시간과 전반적인 성능을 향상시킵니다.</p>
<p>이제 개념을 이해했으니, React Native 애플리케이션에서 lazy loading과 코드 분할을 어떻게 구현하는지 살펴보겠습니다.</p>
<h1 id="react-native에서-lazy-loading-및-코드-분할-구현" tabindex="-1"><a class="header-anchor" href="#react-native에서-lazy-loading-및-코드-분할-구현" aria-hidden="true">#</a> React Native에서 Lazy Loading 및 코드 분할 구현</h1>
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
<h2 id="단계-1-react-native-프로젝트-설정" tabindex="-1"><a class="header-anchor" href="#단계-1-react-native-프로젝트-설정" aria-hidden="true">#</a> 단계 1: React Native 프로젝트 설정</h2>
<p>Expo 또는 React Native CLI를 사용하여 새 React Native 프로젝트를 설정합니다. 이 예제에서는 React Native CLI를 사용한다고 가정합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx react<span class="token operator">-</span>native init CodeSplittingExample
cd CodeSplittingExample
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="단계-2-react-navigation-설치" tabindex="-1"><a class="header-anchor" href="#단계-2-react-navigation-설치" aria-hidden="true">#</a> 단계 2: React Navigation 설치</h2>
<p>React Navigation을 사용하여 네비게이션 및 lazy loading을 구현합니다. 다음 명령어로 설치합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install react<span class="token operator">-</span>navigation react<span class="token operator">-</span>navigation<span class="token operator">-</span>stack
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
<h2 id="단계-3-스크린-생성" tabindex="-1"><a class="header-anchor" href="#단계-3-스크린-생성" aria-hidden="true">#</a> 단계 3: 스크린 생성</h2>
<p>이 예에서는 홈 화면과 프로필 화면 두 개의 스크린을 생성합니다. 프로필 화면은 사용자가 해당 화면으로 이동할 때만 로드되도록 lazy loading을 사용합니다.</p>
<p>HomeScreen.js와 ProfileScreen.js 두 개의 파일을 생성합니다.</p>
<h2 id="homescreen-js" tabindex="-1"><a class="header-anchor" href="#homescreen-js" aria-hidden="true">#</a> HomeScreen.js:</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> View<span class="token punctuation">,</span> Text<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-native"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">HomeScreen</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> navigation <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View<span class="token operator">></span>
      <span class="token operator">&lt;</span>Text<span class="token operator">></span>홈 화면<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button title<span class="token operator">=</span><span class="token string">"프로필로 이동"</span> onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> navigation<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">"Profile"</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> HomeScreen<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="profilescreen-js" tabindex="-1"><a class="header-anchor" href="#profilescreen-js" aria-hidden="true">#</a> ProfileScreen.js:</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> View<span class="token punctuation">,</span> Text <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-native"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ProfileScreen</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View<span class="token operator">></span>
      <span class="token operator">&lt;</span>Text<span class="token operator">></span>프로필 화면<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ProfileScreen<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="단계-4-lazy-loading으로-네비게이션-설정" tabindex="-1"><a class="header-anchor" href="#단계-4-lazy-loading으로-네비게이션-설정" aria-hidden="true">#</a> 단계 4: Lazy Loading으로 네비게이션 설정</h2>
<p>App.js(또는 네비게이션을 구성하는 위치)에서 React.lazy()를 사용하여 lazy loading으로 네비게이션을 설정합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createAppContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-navigation"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStackNavigator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-navigation-stack"</span><span class="token punctuation">;</span>

<span class="token comment">// 스크린들을 lazy load합니다.</span>
<span class="token keyword">const</span> HomeScreen <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"./HomeScreen"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ProfileScreen <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"./ProfileScreen"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> AppNavigator <span class="token operator">=</span> <span class="token function">createStackNavigator</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">Home</span><span class="token operator">:</span> HomeScreen<span class="token punctuation">,</span>
    <span class="token literal-property property">Profile</span><span class="token operator">:</span> ProfileScreen<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">initialRouteName</span><span class="token operator">:</span> <span class="token string">"Home"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> AppContainer <span class="token operator">=</span> <span class="token function">createAppContainer</span><span class="token punctuation">(</span>AppNavigator<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Text<span class="token operator">></span>로딩 중<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>AppContainer <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>Suspense<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 코드에서는 React.lazy()를 사용하여 HomeScreen과 ProfileScreen 컴포넌트를 lazy loading으로 로드합니다. 컴포넌트가 로드되는 동안 로딩 메시지를 표시하기 위해 AppContainer를 React.Suspense로 감쌉니다.</p>
<p>이제 React Native 앱에서 lazy loading 및 코드 분할을 구현하여 초기 로드 시간을 개선하고 더 나은 사용자 경험을 제공할 수 있습니다.</p>
</div></template>
