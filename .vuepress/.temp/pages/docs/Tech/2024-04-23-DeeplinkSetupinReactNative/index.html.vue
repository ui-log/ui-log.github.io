<template><div><p>이 블로그에서는 React Native 앱에서 안드로이드 및 iOS 플랫폼 모두에 대한 딥 링킹 설정하는 방법에 대해 논의할 예정입니다. 이것은 모바일 앱에서 제품 개발 관점에서 종종 요구되는 사항입니다.</p>
<p><img src="@source/docs/Tech/2024-04-23-DeeplinkSetupinReactNative/img/DeeplinkSetupinReactNative_0.png" alt="이미지"></p>
<h1 id="딥-링크-요구-사항" tabindex="-1"><a class="header-anchor" href="#딥-링크-요구-사항" aria-hidden="true">#</a> 딥 링크 요구 사항:</h1>
<p>웹페이지에서 모바일 앱의 특정 화면을 열고 싶다는 특정 요구 사항이 있을 때, 딥 링킹을 통해 구성해야 합니다. 이렇게 하면 사용자에게 더 나은 사용자 인터페이스를 제공할 뿐만 아니라 사용자 참여도도 증가할 수 있습니다.</p>
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
<p>Deep linking은 모바일 애플리케이션 내에서 특정 화면으로 사용자를 리디렉션하는 간단한 URI입니다. 모바일 애플리케이션의 기본적인 딥 링크 형태는 사용자 지정 URI scheme과 유사합니다. 사용자 지정 URI scheme은 앱 내에서 정의되며 아래 예시처럼 내장 URI scheme도 제공됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//사용자 지정 URI scheme 예시</span>
<span class="token operator">&lt;</span>data android<span class="token operator">:</span>scheme<span class="token operator">=</span><span class="token string">"fb"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>data android<span class="token operator">:</span>scheme<span class="token operator">=</span><span class="token string">"slack"</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>data android<span class="token operator">:</span>scheme<span class="token operator">=</span><span class="token string">"twitter"</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token comment">//내장 URI scheme 예시</span>
<span class="token operator">&lt;</span>data android<span class="token operator">:</span>scheme<span class="token operator">=</span><span class="token string">"http"</span> <span class="token literal-property property">android</span><span class="token operator">:</span>host<span class="token operator">=</span><span class="token string">"domain_name.com"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>data android<span class="token operator">:</span>scheme<span class="token operator">=</span><span class="token string">"https"</span> <span class="token literal-property property">android</span><span class="token operator">:</span>host<span class="token operator">=</span><span class="token string">"domain_name.com"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 React Native 애플리케이션에서 딥 링크 설정하는 기본적인 단계를 살펴봅시다.</p>
<h1 id="딥링크-설정" tabindex="-1"><a class="header-anchor" href="#딥링크-설정" aria-hidden="true">#</a> 딥링크 설정:</h1>
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
<p>단계 1:
Android 플랫폼:
안드로이드에서 딥 링킹을 설정하려면 android/app/src/main/AndroidManifest.xml 파일을 수정해야 합니다. 저의 경우 이곳에 아래 스크린샷에 제공된대로 인텐트 필터 태그 안에 데모앱 커스텀 스킴을 추가했습니다.</p>
<p><img src="@source/docs/Tech/2024-04-23-DeeplinkSetupinReactNative/img/DeeplinkSetupinReactNative_1.png" alt="이미지"></p>
<p>iOS 플랫폼:
iOS에서 사용자 정의 URI 스킴을 설정하려면 Xcode를 열고 아래 경로를 따라 스킴을 설정해야 합니다.</p>
<p><img src="@source/docs/Tech/2024-04-23-DeeplinkSetupinReactNative/img/DeeplinkSetupinReactNative_2.png" alt="이미지"></p>
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
<p>단계 2:
Xcode에서 AppDelegate 파일을 열고 아래 스크린샷에 나와 있는 것처럼 iOS 기기에서 딥 링킹을 처리하기 위해 필요한 다음 코드가 있는지 확인해주세요.</p>
<p><img src="@source/docs/Tech/2024-04-23-DeeplinkSetupinReactNative/img/DeeplinkSetupinReactNative_3.png" alt="이미지 파일"></p>
<p>단계 3:
이미 언급된 변경 사항을 적용한 후 프로젝트를 다시 빌드하고 시뮬레이터에서 앱을 다시 실행하세요. 이제 내부의 모바일 앱에서 열리는 URL을 추적해야 하는데, React Native가 제공하는 Linking API를 통해 해결할 수 있습니다.</p>
<p>React Native는 Linking을 통해 수신 링크를 통지할 수 있습니다. 이제 Linking API를 사용하고 앱에서 링크와 함께 제공된 매개변수나 데이터에 따라 내비게이션을 처리할 것입니다.</p>
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
<p>4단계:
위의 예시에서 우리가 다루어야 하는 깊은 링크 처리에 대한 두 가지 시나리오가 있습니다. 함께 살펴보겠습니다.</p>
<ol>
<li>앱이 닫힌 상태일 때는 Linking getInitialURL() 함수를 사용하여 처리해야 합니다. 아래와 같이 사용할 수 있어요.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">const</span> <span class="token function-variable function">fetchDeepLinkingUrl</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 앱이 닫힌 상태일 때 호출됩니다.</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token keyword">await</span> Linking<span class="token operator">?.</span><span class="token function">getInitialURL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'앱이 닫힌 상태---'</span><span class="token punctuation">,</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
 
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">fetchDeepLinkingUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>앱이 열린 상태일 때는 Linking addEventListener() 이벤트 리스너를 사용하여 처리해야 합니다.</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 앱이 열린 상태에서 호출됩니다.</span>
    <span class="token keyword">const</span> linking <span class="token operator">=</span> Linking<span class="token operator">?.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'url'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>url<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'앱이 열린 상태---'</span><span class="token punctuation">,</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      linking<span class="token operator">?.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>단계 5: 위 설정을 마친 후 이제 아래 명령어를 사용하여 위에서 언급한 시나리오 두 가지를 모두 시도해 보겠습니다. 딥 링크가 작동하는지 확인할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// iOS용</span>
npx uri<span class="token operator">-</span>scheme open <span class="token string">"demoapp://domain/sub_domain"</span> <span class="token operator">--</span>ios

<span class="token comment">// Android용</span>
npx uri<span class="token operator">-</span>scheme open <span class="token string">"demoapp://domain/sub_domain"</span> <span class="token operator">--</span>android
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>아래는 앱의 닫힘 및 열린 상태에 대한 딥 링크 처리 최종 코드이며 결과는 다음과 같습니다.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"react-native-gesture-handler"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Linking<span class="token punctuation">,</span> Text<span class="token punctuation">,</span> View<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-native"</span><span class="token punctuation">;</span>


<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>currentState<span class="token punctuation">,</span> setCurrentState<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">resolveDeeplink</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'resolve deep link'</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setCurrentState</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">앱이 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>state<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 상태로 열렸습니다.\n\n데이터: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">fetchDeepLinkingUrl</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 앱이 닫힌 상태일 때 호출됩니다.</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token keyword">await</span> Linking<span class="token operator">?.</span><span class="token function">getInitialURL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'앱이 닫힌 상태일 때---'</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">resolveDeeplink</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token string">'닫힌'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
 
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">fetchDeepLinkingUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 앱이 열린 상태일 때 호출됩니다.</span>
    <span class="token keyword">const</span> linking <span class="token operator">=</span> Linking<span class="token operator">?.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'url'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>url<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'앱이 열린 상태일 때---'</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">resolveDeeplink</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token string">'열린'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      linking<span class="token operator">?.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View 
      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'white'</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'black'</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>이중 링킹 테스트<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span>
      <span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'black'</span><span class="token punctuation">,</span> <span class="token literal-property property">marginHorizontal</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>currentState<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://miro.medium.com/v2/resize:fit:1400/1*e-0wwtEFDuXri8WaJqKC0Q.gif" alt="이중 링킹 테스트"></p>
<p>사용자가 앱을 설치하지 않은 경우 사용자 정의 scheme은 어떤 대체 방법도 처리하지 않습니다. 간단히 작동하지 않습니다. 이러한 상황을 피하려면 iOS의 Universal Links와 Android의 App Links를 사용하여 딥 링크를 더 효과적으로 처리할 수 있습니다.</p>
<p>먼저, 링크가 리디렉션되는 도메인을 소유해야 하므로 더 안전합니다. 또한 사용자가 앱을 설치하지 않은 경우 프로세스를 처리합니다. 그냥 웹 사이트를 브라우저에서 엽니다.</p>
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
<p>요약</p>
<p>이제 모바일 앱을 위한 사용자 정의 scheme 딥 링킹 설정하는 방법과 앱이 닫혀있는 상태 또는 열려있는 상태일 때 딥 링크를 처리하는 방법에 대해 배웠습니다.</p>
<p>이 글이 유용하셨으면 다른 개발자와 공유하는 걸 잊지 마세요.</p>
<p>즐거운 학습 되세요! 👨🏼‍💻👨🏼‍💻</p>
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
<h1 id="stackademic" tabindex="-1"><a class="header-anchor" href="#stackademic" aria-hidden="true">#</a> Stackademic</h1>
<p>끝까지 읽어 주셔서 감사합니다. 떠나시기 전에:</p>
<ul>
<li>작가를 칭찬하고 팔로우해 주시면 감사하겠습니다! 👏</li>
<li>저희 X 팔로우하기 | LinkedIn | YouTube | Discord</li>
<li>다른 플랫폼에서도 만나보세요: In Plain English | CoFeed | Venture</li>
</ul>
</div></template>
