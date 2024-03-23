<template><div><p>안녕하세요 여러분. 좋은 하루 되시길 바랍니다. 이번에는 리액트 네이티브 앱에서 안드로이드 및 iOS용 스플래시 화면을 설정하는 경험을 공유하려고 해요. 함께 알아보겠습니다..</p>
<p><img src="@source/docs/Tech/2024-03-22-SetupSplashscreeninReactNativeforiOSandAndroid2024/img/Set-up-Splash-screen-in-React-Native-for-iOS-and-Android-2024_0.png" alt="스플래시 화면 설정"></p>
<p>이를 위해 라이브러리가 필요합니다. https://www.npmjs.com/package/react-native-splash-screen 가 널리 사용되는 라이브러리입니다. 그래서 인기도와 활발한 업데이트로 인해 이것을 선택할 거에요.</p>
<p>스플래시 화면은 사용자가 앱의 기능을 이용하기 전에 나타나는 첫 화면입니다. 스플래시 화면은 모바일 애플리케이션의 브랜드 이름과 아이콘을 사용자에게 기억되게 하는 가장 좋은 방법 중 하나라고 할 수 있어요. 더 많은 내용은 여기에서 확인해보세요: https://docs.expo.dev/develop/user-interface/splash-screen/</p>
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
<p>React Native에서 스플래시 화면을 만드는 것에는 많은 이점이 있어요. 예를 들어 API에서 데이터를 로드하는 시나리오를 생각해보세요. 사용자가 기다리는 동안 로더를 보여주는 것은 좋은 사용자 경험입니다. 같은 원리가 스플래시 화면에도 적용됩니다. 앱이 시작되자마자 로더를 보여주면 사용자가 앱을 기다리는 동안 깔끔하고 잘 디자인된 화면을 제공할 수 있어요.</p>
<p>이 React Native 스플래시 화면 데모에서 Android와 iOS용 스플래시 화면을 만들어볼 거에요. 이 튜토리얼은 올바른 이미지 크기를 준비하고 필요한 파일을 업데이트하며 앱을 로드할 때 스플래시 화면을 숨기는 방법을 안내할 거예요. 완성된 앱은 아래 스크린샷처럼 보일 거에요:</p>
<p><img src="@source/docs/Tech/2024-03-22-SetupSplashscreeninReactNativeforiOSandAndroid2024/img/Set-up-Splash-screen-in-React-Native-for-iOS-and-Android-2024_1.png" alt="iOS와 Android용 React Native에서 스플래시 화면 설정하기"></p>
<p><img src="@source/docs/Tech/2024-03-22-SetupSplashscreeninReactNativeforiOSandAndroid2024/img/Set-up-Splash-screen-in-React-Native-for-iOS-and-Android-2024_2.png" alt="iOS와 Android용 React Native에서 스플래시 화면 설정하기"></p>
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
<p>모바일 애플리케이션을 위한 스플래시 화면을 만드는 것은 조심스러울 수 있습니다. 스플래시 화면 해상도의 불일치로 인해 일부 기기에서 표시 문제가 발생하지 않도록 조심해야 합니다. 예를 들어, 안드로이드 기기의 요구 사항은 iOS와는 전혀 다릅니다. 대부분의 숙련된 디자이너들은 두 기기 모두에 필요한 스플래시 화면 해상도를 처음부터 만들어낼 수 있습니다.</p>
<p>그러나 안드로이드와 iOS용 스플래시 화면을 만들어주는 많은 제3자 도구들이 있습니다. 이 튜토리얼에서는 안드로이드 및 iOS 앱용 아이콘 및 이미지를 만들 수 있는 온라인 플랫폼인 '앱 아이콘 생성기'를 사용하겠습니다.</p>
<p>먼저, Appicon에 들어가세요. 이미지를 상자에 끌어다 놓고, 기본 크기로 4배를 선택해주세요. iOS와 Android 모두에 체크하고 '생성'을 클릭하십시오.</p>
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
<p>그럼, 이제 다운로드한 파일을 추출해서 iOS 및 Android 폴더를 클론한 스타터 프로젝트의 assets 디렉토리에 위치한 assets 폴더로 복사해주세요:</p>
<p><img src="@source/docs/Tech/2024-03-22-SetupSplashscreeninReactNativeforiOSandAndroid2024/img/Set-up-Splash-screen-in-React-Native-for-iOS-and-Android-2024_4.png" alt="이미지"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 의존성 패키지를 설치하려면 다음 명령을 실행하세요</span>
<span class="token comment">/* npm */</span>
npm i react<span class="token operator">-</span>native<span class="token operator">-</span>splash<span class="token operator">-</span>screen <span class="token operator">--</span>save

<span class="token comment">/* yarn */</span>
yarn add react<span class="token operator">-</span>native<span class="token operator">-</span>splash<span class="token operator">-</span>screen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="ios용-스플래시-화면-구축" tabindex="-1"><a class="header-anchor" href="#ios용-스플래시-화면-구축" aria-hidden="true">#</a> iOS용 스플래시 화면 구축</h1>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cd ios <span class="token comment">// IOS 디렉터리로 이동하세요</span>
pod install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>다음으로, AppDelegate.mm 파일로 이동하여 다음 코드를 업데이트하세요. 코드 #import &quot;RNSplashScreen&quot;을 추가하고 기본적으로 스플래시 화면을 표시하도록 설정하세요 [RNSplashScreen show]</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>#<span class="token keyword">import</span> <span class="token string">"AppDelegate.h"</span>
#<span class="token keyword">import</span> <span class="token string">"RNSplashScreen.h"</span>

#<span class="token keyword">import</span> <span class="token operator">&lt;</span>React<span class="token operator">/</span>RCTBundleURLProvider<span class="token punctuation">.</span>h<span class="token operator">></span>

@implementation AppDelegate
<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token constant">BOOL</span><span class="token punctuation">)</span>application<span class="token operator">:</span><span class="token punctuation">(</span>UIApplication <span class="token operator">*</span><span class="token punctuation">)</span>application didFinishLaunchingWithOptions<span class="token operator">:</span><span class="token punctuation">(</span>NSDictionary <span class="token operator">*</span><span class="token punctuation">)</span>launchOptions
<span class="token punctuation">{</span>
  self<span class="token punctuation">.</span>moduleName <span class="token operator">=</span> @<span class="token string">"Aptster"</span><span class="token punctuation">;</span>
  <span class="token comment">// 아래 사전에 사용자 정의 초기 속성을 추가할 수 있습니다.</span>
  <span class="token comment">// React Native에서 사용하는 ViewController로 전달됩니다.</span>
  self<span class="token punctuation">.</span>initialProps <span class="token operator">=</span> @<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token constant">BOOL</span> ret <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">super</span> <span class="token literal-property property">application</span><span class="token operator">:</span>application didFinishLaunchingWithOptions<span class="token operator">:</span>launchOptions<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>ret <span class="token operator">==</span> <span class="token constant">YES</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>RNSplashScreen show<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span>
<span class="token operator">...</span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 Xcode에서 프로젝트 워크스페이스를 열고 Images를 클릭한 다음 Appicon 아래 아무 곳이나 마우스 오른쪽 버튼을 클릭하고 새 이미지 세트를 선택하세요. 이미지 이름을 &quot;splash&quot;로 설정하고 assets 폴더를 열어 iOS 폴더로 이동하세요. iOS의 세 가지 이미지를 Xcode의 1x, 2x 및 3x란에 각각 드래그하세요:```</p>
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
<p><img src="@source/docs/Tech/2024-03-22-SetupSplashscreeninReactNativeforiOSandAndroid2024/img/Set-up-Splash-screen-in-React-Native-for-iOS-and-Android-2024_5.png" alt="이미지"></p>
<p>다음으로, LaunchScreen.storyboard를 선택하세요. View Controller Scene <code v-pre>View Controller</code> View를 선택하고, SplashScreen과 Powered by React Native 라벨을 클릭한 후 키보드에서 Delete를 눌러주세요.</p>
<p>다음으로, View를 선택하고 Xcode 오른쪽 상단의 줄자 아이콘을 클릭하세요. Safe Area Layout Guide 옵션을 해제하고, 더하기 아이콘 +를 클릭하고 객체 검색란에 &quot;이미지 뷰&quot;를 입력한 다음 &quot;이미지 뷰&quot;를 View 캔버스로 끌어다가주세요:</p>
<p><img src="@source/docs/Tech/2024-03-22-SetupSplashscreeninReactNativeforiOSandAndroid2024/img/Set-up-Splash-screen-in-React-Native-for-iOS-and-Android-2024_6.png" alt="이미지"></p>
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
<p>이미지 뷰를 설정했으니 이미지 속성 아이콘을 클릭하고 이미지를 &quot;splash&quot;로 변경하세요. 콘텐츠 모드를 &quot;aspect fit&quot;으로 설정하세요. 아래와 같이 설정해주세요:</p>
<img src="@source/docs/Tech/2024-03-22-SetupSplashscreeninReactNativeforiOSandAndroid2024/img/Set-up-Splash-screen-in-React-Native-for-iOS-and-Android-2024_7.png" />
<h1 id="android용-스플래시-화면-만들기" tabindex="-1"><a class="header-anchor" href="#android용-스플래시-화면-만들기" aria-hidden="true">#</a> Android용 스플래시 화면 만들기</h1>
<p>MainActivity.kt 파일에 다음 라인을 추가하세요:-</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">package</span> com<span class="token punctuation">.</span>techoedgecorp<span class="token punctuation">.</span>aptster
<span class="token keyword">import</span> android<span class="token punctuation">.</span>os<span class="token punctuation">.</span>Bundle<span class="token punctuation">;</span> <span class="token comment">// 이 줄 추가</span>
<span class="token keyword">import</span> com<span class="token punctuation">.</span>facebook<span class="token punctuation">.</span>react<span class="token punctuation">.</span>ReactActivity
<span class="token keyword">import</span> com<span class="token punctuation">.</span>facebook<span class="token punctuation">.</span>react<span class="token punctuation">.</span>ReactActivityDelegate
<span class="token keyword">import</span> com<span class="token punctuation">.</span>facebook<span class="token punctuation">.</span>react<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>DefaultNewArchitectureEntryPoint<span class="token punctuation">.</span>fabricEnabled
<span class="token keyword">import</span> com<span class="token punctuation">.</span>facebook<span class="token punctuation">.</span>react<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>DefaultReactActivityDelegate
<span class="token keyword">import</span> org<span class="token punctuation">.</span>devio<span class="token punctuation">.</span>rn<span class="token punctuation">.</span>splashscreen<span class="token punctuation">.</span>SplashScreen<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MainActivity</span> <span class="token operator">:</span> <span class="token function">ReactActivity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

   override fun <span class="token function">onCreate</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">savedInstanceState</span><span class="token operator">:</span> Bundle<span class="token operator">?</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    SplashScreen<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 이 줄 추가</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onCreate</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음으로, app/src/main/res/layout에 launch_screen.xml이라는 파일을 만드세요. 또한, layout 폴더를 만들어야 하는 경우도 있습니다:</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- launch_screen.xml --></span>

<span class="token prolog">&lt;?xml version="1.0" encoding="utf-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RelativeLayout</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.android.com/apk/res/android<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">android:</span>orientation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>match_parent<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>match_parent<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImageView</span> <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>match_parent<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>match_parent<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">android:</span>src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@drawable/launch_screen<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">android:</span>scaleType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>centerCrop<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RelativeLayout</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Tech/2024-03-22-SetupSplashscreeninReactNativeforiOSandAndroid2024/img/Set-up-Splash-screen-in-React-Native-for-iOS-and-Android-2024_8.png" />```</p>
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
<p>위 이미지에 표시된 대로, 적절한 폴더에 만들어둔 스플래시 화면용 launch_screen.png 이미지를 추가하세요.</p>
<p>메인 <code v-pre>styles.xml</code>에 다음 줄을 추가하여 안드로이드 시스템에서 제공하는 기본 스플래시 화면을 투명하게 만드세요. 안드로이드 12부터는 사용자가 앱 아이콘을 클릭할 때마다 안드로이드 시스템 앱 런처가 기본 스플래시 화면을 제공합니다. 그렇지 않으면 먼저 안드로이드 기본 스플래시 화면을 본 후에 우리의 스플래시 화면을 볼 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>resources<span class="token operator">></span>

    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> Base application theme<span class="token punctuation">.</span> <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>style name<span class="token operator">=</span><span class="token string">"AppTheme"</span> parent<span class="token operator">=</span><span class="token string">"Theme.AppCompat.DayNight.NoActionBar"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> Customize your theme here<span class="token punctuation">.</span> <span class="token operator">--</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>item name<span class="token operator">=</span><span class="token string">"android:editTextBackground"</span><span class="token operator">></span>@drawable<span class="token operator">/</span>rn_edit_text_material<span class="token operator">&lt;</span><span class="token operator">/</span>item<span class="token operator">></span>
        <span class="token operator">&lt;</span>item name<span class="token operator">=</span><span class="token string">"android:windowIsTranslucent"</span><span class="token operator">></span><span class="token boolean">true</span><span class="token operator">&lt;</span><span class="token operator">/</span>item<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 위 줄 추가<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>resources<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="앱이-로드된-후-스플래시-화면-숨기기" tabindex="-1"><a class="header-anchor" href="#앱이-로드된-후-스플래시-화면-숨기기" aria-hidden="true">#</a> 앱이 로드된 후 스플래시 화면 숨기기</h1>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> SplashScreen <span class="token keyword">from</span> <span class="token string">'react-native-splash-screen'</span><span class="token punctuation">;</span>
<span class="token operator">...</span>
<span class="token operator">...</span>

<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    SplashScreen<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2023년 6월 23일 문제 해결 — React Native &quot;0.72.0&quot; 스플래시 화면이 AppDelegate.mm에 숨겨지지 않는 문제입니다. 이에 우리는 iOS에서 다음 코드를 작성했습니다. 그렇지 않으면 단순히 [RNSplashScreen show]; 이면 충분했을 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">BOOL</span> ret <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">super</span> <span class="token literal-property property">application</span><span class="token operator">:</span>application didFinishLaunchingWithOptions<span class="token operator">:</span>launchOptions<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>ret <span class="token operator">==</span> <span class="token constant">YES</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token punctuation">[</span>RNSplashScreen show<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> ret<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
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
<p>그거야. 우리는 iOS와 Android용 스플래시 에셋으로 스플래시 화면을 만들었어. 고마워.</p>
</div></template>
