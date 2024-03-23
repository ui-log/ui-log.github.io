<template><div><p>목표: 네이티브 위젯을 만드는 방법을 배우고 위젯을 클릭하여 애플리케이션의 홈 화면을 열 때 리액트 네이티브 앱과 정보를 공유합니다.</p>
<p><img src="@source/docs/Tech/2024-03-22-HowToBuildaHomeScreenWidgetforiOSandAndroidinReactNative/img/How-To-Build-a-Home-Screen-Widget-for-iOS-and-Android-in-React-Native_0.png" alt="위젯 만들기"></p>
<p>위젯은 앱에 중요한 추가 요소이며 종종 요청이 많이 들어오는 기능입니다.</p>
<p>안타깝게도 React Native를 직접적으로 위젯을 만들 때 사용할 수 없습니다.</p>
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
<h1 id="안드로이드" tabindex="-1"><a class="header-anchor" href="#안드로이드" aria-hidden="true">#</a> 안드로이드</h1>
<h1 id="_1-위젯-파일-생성" tabindex="-1"><a class="header-anchor" href="#_1-위젯-파일-생성" aria-hidden="true">#</a> 1. 위젯 파일 생성</h1>
<p>안드로이드 스튜디오에서 안드로이드 폴더를 엽니다. 그런 다음 안드로이드 스튜디오에서 res에서 마우스 오른쪽 버튼을 클릭하고 새 위젯 '앱 위젯을 선택합니다:
위젯의 이름을 지정하고 구성하고, 끝을 클릭하세요.
다음 창에서 프로젝트에 추가될 파일 몇 개를 보여줍니다. Widget.java 파일은 위젯 동작을 코딩할 위치입니다. 나머지 파일은 위젯 UI 구성 요소를 구현하는 위치입니다. 추가를 클릭하세요.</p>
<p>이제 앱을 실행하면 위젯을 볼 수 있어야 합니다:</p>
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
<img src="@source/docs/Tech/2024-03-22-HowToBuildaHomeScreenWidgetforiOSandAndroidinReactNative/img/How-To-Build-a-Home-Screen-Widget-for-iOS-and-Android-in-React-Native_1.png" />
<p>Android Studio에서 애플리케이션을 실행하면 에뮬레이터에서 위젯을 볼 수 있습니다. 이제 위젯이 실행 중이니 조금 개인 설정해봅시다.</p>
<ol start="2">
<li>위젯 UI 개인 설정 하기 Android Studio에서 앱 폴더를 열고 res -<code v-pre> layout -</code> widget.xml 파일을 선택하세요:</li>
</ol>
<p>이렇게 위젯의 레이아웃이 열립니다. &quot;WIDGET&quot;이라고 쓰인 텍스트 뷰가 있는 것을 보실 수 있습니다. 클릭하면 더 많은 세부 정보를 보실 수 있습니다:</p>
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
<p><img src="@source/docs/Tech/2024-03-22-HowToBuildaHomeScreenWidgetforiOSandAndroidinReactNative/img/How-To-Build-a-Home-Screen-Widget-for-iOS-and-Android-in-React-Native_2.png" alt="위젯"></p>
<p>라벨 텍스트를 바꿔봅시다. 라벨 속성을 보시면 텍스트가 &quot;@string/appwidget_text&quot;로 되어 있는 걸 확인할 수 있어요. 이는 res <code v-pre>values</code> strings.xml에 위치해 있어요.
이 파일을 열어보시면 텍스트가 정의되어 있는 걸 볼 수 있을 거에요.
&quot;위젯&quot;이라는 텍스트를 &quot;안녕&quot;으로 바꾸고, 파일을 저장한 후 앱을 다시 실행하면 위젯에 반영되어 있을 거에요.</p>
<p><img src="@source/docs/Tech/2024-03-22-HowToBuildaHomeScreenWidgetforiOSandAndroidinReactNative/img/How-To-Build-a-Home-Screen-Widget-for-iOS-and-Android-in-React-Native_3.png" alt="위젯"></p>
<p>좋아요, 이제 위젯을 커스터마이징하는 방법을 알았네요. 그 다음은 React Native 앱을 통해 이를 구현하는 방법을 알아봅시다.</p>
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
<h1 id="_3-위젯과-react-native-앱-간의-통신-채널-생성하기" tabindex="-1"><a class="header-anchor" href="#_3-위젯과-react-native-앱-간의-통신-채널-생성하기" aria-hidden="true">#</a> 3. 위젯과 React Native 앱 간의 통신 채널 생성하기</h1>
<p>그럼 이제 다시 재미있는 부분으로 넘어가볼게요. 우리 React Native 앱이 위젯에 무엇을 보여줄지 제어하도록 해보겠습니다. 이를 위해서는 React Native 앱이 위젯과 통신할 수 있는 방법을 구현해야 합니다. 이를 위해 SharedPreferences Android-native 모듈을 사용하여 위젯과 React Native 앱 간에 공유 저장소를 만들 것입니다.</p>
<p>우리는 React Native 앱이 SharedPreferences에 쓰고, 그 값을 위젯이 읽을 수 있도록 할 것입니다. 첫 번째 문제는 공식적인 React Native 방법이 없다는 것이었고, 이를 위한 좋은 라이브러리를 찾지 못했습니다. 그래서 직접 구현해보도록 하겠습니다.</p>
<p>호출하기 위해서 React Native와 네이티브 Android 간의 브리지를 만들 것입니다.</p>
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
<p>프로젝트 내 MainActivity.java 파일 옆에 SharedStorage.java 및 SharedStoragePackager.java 파일을 두 개 추가해주세요:</p>
<p><img src="@source/docs/Tech/2024-03-22-HowToBuildaHomeScreenWidgetforiOSandAndroidinReactNative/img/How-To-Build-a-Home-Screen-Widget-for-iOS-and-Android-in-React-Native_4.png" alt="이미지"></p>
<p>다음 내용을 SharedStoragePackager.java 파일에 복사해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 패키지 이름을 여기에 넣어주세요. MainApplication.java 파일에 있는 패키지 이름과 같아야 합니다.</span>
<span class="token keyword">package</span> com<span class="token punctuation">.</span>reactnativecreatewidgettutorial<span class="token punctuation">;</span>

<span class="token keyword">import</span> com<span class="token punctuation">.</span>facebook<span class="token punctuation">.</span>react<span class="token punctuation">.</span>ReactPackage<span class="token punctuation">;</span>
<span class="token keyword">import</span> com<span class="token punctuation">.</span>facebook<span class="token punctuation">.</span>react<span class="token punctuation">.</span>bridge<span class="token punctuation">.</span>JavaScriptModule<span class="token punctuation">;</span>
<span class="token keyword">import</span> com<span class="token punctuation">.</span>facebook<span class="token punctuation">.</span>react<span class="token punctuation">.</span>bridge<span class="token punctuation">.</span>NativeModule<span class="token punctuation">;</span>
<span class="token keyword">import</span> com<span class="token punctuation">.</span>facebook<span class="token punctuation">.</span>react<span class="token punctuation">.</span>bridge<span class="token punctuation">.</span>ReactApplicationContext<span class="token punctuation">;</span>
<span class="token keyword">import</span> com<span class="token punctuation">.</span>facebook<span class="token punctuation">.</span>react<span class="token punctuation">.</span>uimanager<span class="token punctuation">.</span>ViewManager<span class="token punctuation">;</span>

<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>ArrayList<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Collections<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>List<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SharedStoragePackager</span> <span class="token keyword">implements</span> <span class="token class-name">ReactPackage</span> <span class="token punctuation">{</span>

 @Override
 <span class="token keyword">public</span> List<span class="token operator">&lt;</span>ViewManager<span class="token operator">></span> <span class="token function">createViewManagers</span><span class="token punctuation">(</span><span class="token parameter">ReactApplicationContext reactContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Collections<span class="token punctuation">.</span><span class="token function">emptyList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 @Override
 <span class="token keyword">public</span> List<span class="token operator">&lt;</span>NativeModule<span class="token operator">></span> <span class="token function">createNativeModules</span><span class="token punctuation">(</span><span class="token parameter">ReactApplicationContext reactContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  List<span class="token operator">&lt;</span>NativeModule<span class="token operator">></span> modules <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token operator">&lt;</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  modules<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SharedStorage</span><span class="token punctuation">(</span>reactContext<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> modules<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>중요한 점: 패키지 이름 com.reactnativecreatewidgettutorial을 자신의 것으로 변경해주세요. 그리고 Widget.class를 자신의 위젯 클래스 이름으로 바꿔주세요.</p>
<p>이제 React Native에서 SharedStorage를 호출할 수 있습니다. 코드에 나와 있는 것처럼, 이 기능은 JSON을 받아 SharedPreferences에 저장한 다음 위젯에게 업데이트하라고 알려줍니다.</p>
<p>Android가 모듈이 존재함을 알 수 있도록 MainApplication.java 파일의 패키지 목록에 추가하십시오.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">SharedStoragePackager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<h1 id="_4-react-native-앱에서-위젯-콘텐츠-제어하기" tabindex="-1"><a class="header-anchor" href="#_4-react-native-앱에서-위젯-콘텐츠-제어하기" aria-hidden="true">#</a> 4. React Native 앱에서 위젯 콘텐츠 제어하기</h1>
<p>React Native 측에서 모듈을 가져오겠습니다.</p>
<p>참고: 이미 React Native 코드를 수정했다면, 이 부분은 건너뛰세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NativeModules <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-native"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> SharedStorage <span class="token operator">=</span> NativeModules<span class="token punctuation">.</span>SharedStorage<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그럼 저장소로 데이터를 전송해 봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>SharedStorage<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"이것은 React Native 앱에서 가져온 데이터입니다"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>예를 들어 App.tsx 파일이나 React Native 코드에서 데이터를 설정하기에 적절한 위치에 이 작업을 할 수 있습니다:</p>
<img src="@source/docs/Tech/2024-03-22-HowToBuildaHomeScreenWidgetforiOSandAndroidinReactNative/img/How-To-Build-a-Home-Screen-Widget-for-iOS-and-Android-in-React-Native_5.png" />
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
<p>이제 남은 일은 위젯이 데이터를 읽고 UI에 삽입하는 것입니다. 위젯을, 데이터를 읽은 다음 &quot;HELLO&quot; 라벨에 데이터를 출력하기 위해 연결할 것입니다.</p>
<p>Widget 폴더의 Widget.java 파일로 이동하고 다음 모듈을 가져오세요:</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>content<span class="token punctuation">.</span></span><span class="token class-name">SharedPreferences</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>json<span class="token punctuation">.</span></span><span class="token class-name">JSONException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>json<span class="token punctuation">.</span></span><span class="token class-name">JSONObject</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 widget.java 파일의 updateAppWidget 함수를 다음처럼 수정하세요:</p>
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
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>reactnativecreatewidgettutorial</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>appwidget<span class="token punctuation">.</span></span><span class="token class-name">AppWidgetManager</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>appwidget<span class="token punctuation">.</span></span><span class="token class-name">AppWidgetProvider</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>content<span class="token punctuation">.</span></span><span class="token class-name">Context</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span></span><span class="token class-name">RemoteViews</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">android<span class="token punctuation">.</span>content<span class="token punctuation">.</span></span><span class="token class-name">SharedPreferences</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>json<span class="token punctuation">.</span></span><span class="token class-name">JSONException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>json<span class="token punctuation">.</span></span><span class="token class-name">JSONObject</span></span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * App 위젯 기능 구현.
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Widget</span> <span class="token keyword">extends</span> <span class="token class-name">AppWidgetProvider</span> <span class="token punctuation">{</span>

    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">updateAppWidget</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">,</span> <span class="token class-name">AppWidgetManager</span> appWidgetManager<span class="token punctuation">,</span>
                                <span class="token keyword">int</span> appWidgetId<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
   <span class="token class-name">SharedPreferences</span> sharedPref <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getSharedPreferences</span><span class="token punctuation">(</span><span class="token string">"DATA"</span><span class="token punctuation">,</span> <span class="token class-name">Context</span><span class="token punctuation">.</span>MODE_PRIVATE<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token class-name">String</span> appString <span class="token operator">=</span> sharedPref<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"appData"</span><span class="token punctuation">,</span> <span class="token string">"{\"text\":'no data'}"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token class-name">JSONObject</span> appData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSONObject</span><span class="token punctuation">(</span>appString<span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token comment">// RemoteViews 객체 생성</span>
   <span class="token class-name">RemoteViews</span> views <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RemoteViews</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">getPackageName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">R</span><span class="token punctuation">.</span>layout<span class="token punctuation">.</span>widget<span class="token punctuation">)</span><span class="token punctuation">;</span>
   views<span class="token punctuation">.</span><span class="token function">setTextViewText</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>appwidget_text<span class="token punctuation">,</span> appData<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"text"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 위젯을 업데이트하도록 위젯 관리자에 지시</span>
    appWidgetManager<span class="token punctuation">.</span><span class="token function">updateAppWidget</span><span class="token punctuation">(</span>appWidgetId<span class="token punctuation">,</span> views<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">JSONException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onUpdate</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">,</span> <span class="token class-name">AppWidgetManager</span> appWidgetManager<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> appWidgetIds<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 여러 위젯이 활성 상태일 수 있으므로 모두 업데이트</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> appWidgetId <span class="token operator">:</span> appWidgetIds<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">updateAppWidget</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> appWidgetManager<span class="token punctuation">,</span> appWidgetId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onEnabled</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 첫 번째 위젯이 생성될 때의 기능 수행</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onDisabled</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 마지막 위젯이 비활성화될 때의 기능 수행</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>updateAppWidget 함수를 수정하여 위젯 내용을 업데이트하는 역할인데, 이제 위젯은 SharedPreferences 데이터베이스에서 읽어와 텍스트 라벨에 데이터를 표시하도록 설정됩니다.</p>
<p>여기까지입니다. 이제 React Native 앱이 위젯 내용을 제어합니다. 앱을 실행하고 위젯을 확인해보세요 (앱을 실행하고 열어서 SharedStorage에 쓰도록 해야합니다):</p>
<img src="@source/docs/Tech/2024-03-22-HowToBuildaHomeScreenWidgetforiOSandAndroidinReactNative/img/How-To-Build-a-Home-Screen-Widget-for-iOS-and-Android-in-React-Native_6.png" />
```
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
<h1 id="ios" tabindex="-1"><a class="header-anchor" href="#ios" aria-hidden="true">#</a> iOS</h1>
<h1 id="_1-위젯-파일-만들기" tabindex="-1"><a class="header-anchor" href="#_1-위젯-파일-만들기" aria-hidden="true">#</a> 1. 위젯 파일 만들기</h1>
<p>위젯(이 iOS에서는 Today Extension이라고 불립니다)을 Xcode에서 워크스페이스 파일을 열고 File &gt; New &gt; Target를 클릭하여 생성하세요:</p>
<p>Today Extension을 선택하고 Next를 클릭하세요.</p>
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
<p><img src="@source/docs/Tech/2024-03-22-HowToBuildaHomeScreenWidgetforiOSandAndroidinReactNative/img/How-To-Build-a-Home-Screen-Widget-for-iOS-and-Android-in-React-Native_7.png" alt="img1"></p>
<p>Give it a name, and choose your preferred language. In this case, I’m going to choose Swift. Click Finish:</p>
<p><img src="@source/docs/Tech/2024-03-22-HowToBuildaHomeScreenWidgetforiOSandAndroidinReactNative/img/How-To-Build-a-Home-Screen-Widget-for-iOS-and-Android-in-React-Native_8.png" alt="img2"></p>
<p>You should see the Widget folder on your project:</p>
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
<p><img src="@source/docs/Tech/2024-03-22-HowToBuildaHomeScreenWidgetforiOSandAndroidinReactNative/img/How-To-Build-a-Home-Screen-Widget-for-iOS-and-Android-in-React-Native_9.png" alt="위젯 화면이 표시되어야 합니다. 화면 위젯을 이미 활성화할 수 있습니다:
위젯의 구조를 확인해 보겠습니다. 위젯 폴더로 이동하여 스토리보드 파일을 클릭하십시오. 화면 오른쪽 상단에 2개의 동그라미가 있는 도우미 편집기 버튼을 클릭하십시오:"></p>
<p><img src="@source/docs/Tech/2024-03-22-HowToBuildaHomeScreenWidgetforiOSandAndroidinReactNative/img/How-To-Build-a-Home-Screen-Widget-for-iOS-and-Android-in-React-Native_10.png" alt="위젯 화면을 확인한 후 위젯 폴더로 이동하고 스토리보드 파일을 클릭하십시오. 스크린 오른쪽 상단에 있는 도우미 편집기 버튼(2개의 동그라미가 그려진)을 클릭하십시오:"></p>
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
<p>두 가지 함수인 viewDidLoad와 widgetPerformUpdate가 있는 것을 볼 수 있어요. viewDidLoad 함수는 사용자가 위젯 화면으로 전환할 때마다 실행돼요. 그래서 이곳에서 변수, 레이블 또는 뷰를 초기화해야 해요. widgetPerformUpdate 함수는 위젯 콘텐츠를 업데이트해야 할 때 호출돼요.</p>
<ol start="2">
<li>위젯 UI를 사용자 정의하세요. 화면에서 &quot;Hello World&quot; 텍스트가 있는 레이블을 볼 수 있어요. 이 레이블을 코드로 드래그하여 사용자 정의할 수 있어요. 레이블을 마우스 오른쪽 버튼으로 클릭하고 새 참조 아웃렛을 클래스 내 코드로 직접 드래그하세요.</li>
</ol>
<p><img src="@source/docs/Tech/2024-03-22-HowToBuildaHomeScreenWidgetforiOSandAndroidinReactNative/img/How-To-Build-a-Home-Screen-Widget-for-iOS-and-Android-in-React-Native_11.png" alt="이미지"></p>
<h1 id="_3-위젯과-react-native-앱-간의-통신-채널을-생성하기" tabindex="-1"><a class="header-anchor" href="#_3-위젯과-react-native-앱-간의-통신-채널을-생성하기" aria-hidden="true">#</a> 3. 위젯과 React Native 앱 간의 통신 채널을 생성하기</h1>
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
<p>그럼 이제 즐거운 부분을 시작해봅시다. React Native 앱이 위젯이 표시하는 내용을 제어하도록 해 보겠습니다. 이를 위해 React Native 앱과 위젯 사이의 통신 방법을 구현해야 합니다. 이를 위해 UserDefaults iOS 네이티브 모듈을 사용하여 구현할 거에요.</p>
<p>React Native 앱이 UserDefaults에 작성하고 위젯이 그것을 읽도록 할 거예요. 첫 번째 문제는 공식적인 React Native 방법이 없다는 것을 발견했으며, 이를 수행할 수 있는 좋은 라이브러리를 찾지 못했습니다. 그래서 React Native와 네이티브 iOS 사이에 브릿지를 만들어 직접 구현해 봅시다.</p>
<p>먼저, 앱 내에 위젯과 앱 간 통신을 가능하게 하는 공간을 만들어야 해요. 이는 Capabilities 탭 아래에 위치한 App Groups를 사용하여 수행할 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-03-22-HowToBuildaHomeScreenWidgetforiOSandAndroidinReactNative/img/How-To-Build-a-Home-Screen-Widget-for-iOS-and-Android-in-React-Native_12.png" alt="이미지"></p>
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
<p>활성화한 다음 그룹을 선택하거나 추가하세요.</p>
<p><img src="@source/docs/Tech/2024-03-22-HowToBuildaHomeScreenWidgetforiOSandAndroidinReactNative/img/How-To-Build-a-Home-Screen-Widget-for-iOS-and-Android-in-React-Native_13.png" alt="image1"></p>
<p>프로젝트를 선택하고 새 파일을 추가하려면 마우스 오른쪽 버튼을 클릭하세요.</p>
<p><img src="@source/docs/Tech/2024-03-22-HowToBuildaHomeScreenWidgetforiOSandAndroidinReactNative/img/How-To-Build-a-Home-Screen-Widget-for-iOS-and-Android-in-React-Native_14.png" alt="image2"></p>
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
<p>Cocoa Touch Class를 선택하고 다음을 클릭하세요:</p>
<p><img src="@source/docs/Tech/2024-03-22-HowToBuildaHomeScreenWidgetforiOSandAndroidinReactNative/img/How-To-Build-a-Home-Screen-Widget-for-iOS-and-Android-in-React-Native_15.png" alt="image"></p>
<p>위젯과 React Native 앱에서 공유될 저장소이기 때문에 SharedStorage로 이름 짓겠습니다. Objective-C를 선택하고 다음을 클릭하세요:</p>
<p><img src="@source/docs/Tech/2024-03-22-HowToBuildaHomeScreenWidgetforiOSandAndroidinReactNative/img/How-To-Build-a-Home-Screen-Widget-for-iOS-and-Android-in-React-Native_16.png" alt="image"></p>
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
<p>이제 프로젝트에 새 파일이 나타났어요:
이 파일들을 편집합시다. 먼저 이 내용을 SharedStorage.h 파일에 복사해주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">//  SharedStorage.h</span>
<span class="token comment">//  hodl</span>
<span class="token comment">//</span>
<span class="token comment">//  Created by Andre Pimenta on 19/09/2018.</span>
<span class="token comment">//  Copyright © 2018 Facebook. All rights reserved.</span>
<span class="token comment">//</span>

#<span class="token keyword">import</span> <span class="token string">"React/RCTBridgeModule.h"</span>

@<span class="token keyword">interface</span> <span class="token class-name">SharedStorage</span> <span class="token operator">:</span> NSObject <span class="token operator">&lt;</span>RCTBridgeModule<span class="token operator">></span>

@end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 이 내용을 SharedStorage.m 파일에 붙여넣어주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">//  SharedStorage.m</span>
<span class="token comment">//  hodl</span>
<span class="token comment">//</span>
<span class="token comment">//  Created by Andre Pimenta on 19/09/2018.</span>
<span class="token comment">//  Copyright © 2018 Facebook. All rights reserved.</span>
<span class="token comment">//</span>

#<span class="token keyword">import</span> <span class="token string">"SharedStorage.h"</span>
#<span class="token keyword">import</span> <span class="token string">"React/RCTLog.h"</span>

@implementation SharedStorage

<span class="token constant">RCT_EXPORT_MODULE</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 우리 JavaScript 환경으로 promise를 전송할 수 있어요 :)</span>
<span class="token constant">RCT_EXPORT_METHOD</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">set</span><span class="token operator">:</span><span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>data
                  <span class="token literal-property property">resolver</span><span class="token operator">:</span><span class="token punctuation">(</span>RCTPromiseResolveBlock<span class="token punctuation">)</span>resolve
                  <span class="token literal-property property">rejecter</span><span class="token operator">:</span><span class="token punctuation">(</span>RCTPromiseRejectBlock<span class="token punctuation">)</span>reject</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  @<span class="token keyword">try</span><span class="token punctuation">{</span>
    <span class="token comment">// 여기서 그룹을 변경해주세요</span>
    NSUserDefaults <span class="token operator">*</span>shared <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>NSUserDefaults alloc<span class="token punctuation">]</span>initWithSuiteName<span class="token operator">:</span>@<span class="token string">"group.com.createwidget.pimenta"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>shared setObject<span class="token operator">:</span>data forKey<span class="token operator">:</span>@<span class="token string">"data"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>shared synchronize<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span>@<span class="token string">"true"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>@<span class="token function">catch</span><span class="token punctuation">(</span>NSException <span class="token operator">*</span>exception<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">reject</span><span class="token punctuation">(</span>@<span class="token string">"get_error"</span><span class="token punctuation">,</span>exception<span class="token punctuation">.</span>reason<span class="token punctuation">,</span> nil<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

@end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>중요: 그룹 이름 (group.com.createwidget.pimenta)을 App 그룹에서 생성한 이름으로 변경해주세요.</p>
<p>이제 React Native에서 SharedStorage를 호출할 수 있습니다. 코드에서 볼 수 있듯이, SharedStorage는 단순히 JSON을 받아 UserDefaults 저장소에 저장합니다.</p>
<h1 id="_4-react-native-앱으로-위젯-콘텐츠-제어하기" tabindex="-1"><a class="header-anchor" href="#_4-react-native-앱으로-위젯-콘텐츠-제어하기" aria-hidden="true">#</a> 4. React Native 앱으로 위젯 콘텐츠 제어하기</h1>
<p>React Native 측에서 모듈을 가져와봅시다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NativeModules <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-native"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> SharedStorage <span class="token operator">=</span> NativeModules<span class="token punctuation">.</span>SharedStorage<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음 저장소로 일부 데이터를 보내 봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>SharedStorage<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"리액트 네이티브 앱에서 온 데이터입니다"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>예를 들어 App.tsx 파일이나 데이터를 설정하는 것이 적절한 React Native 코드에서 이 작업을 수행할 수 있습니다:```</p>
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
<p>이제 해야 할 일은 위젯이 데이터를 읽어 UI에 삽입하도록 만드는 것뿐입니다. 위젯을 UserDefaults에 연결하고 데이터를 읽은 다음에 그 데이터를 &quot;Hello World&quot; 텍스트 레이블에 출력할 것입니다.</p>
<p>Widget 폴더의 TodayViewController.swift 파일로 이동하여 viewDidLoad 함수를 다음과 같이 편집하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">package</span> com<span class="token punctuation">.</span>reactnativecreatewidgettutorial<span class="token punctuation">;</span>

<span class="token keyword">import</span> android<span class="token punctuation">.</span>appwidget<span class="token punctuation">.</span>AppWidgetManager<span class="token punctuation">;</span>
<span class="token keyword">import</span> android<span class="token punctuation">.</span>appwidget<span class="token punctuation">.</span>AppWidgetProvider<span class="token punctuation">;</span>
<span class="token keyword">import</span> android<span class="token punctuation">.</span>content<span class="token punctuation">.</span>Context<span class="token punctuation">;</span>
<span class="token keyword">import</span> android<span class="token punctuation">.</span>widget<span class="token punctuation">.</span>RemoteViews<span class="token punctuation">;</span>
<span class="token keyword">import</span> android<span class="token punctuation">.</span>content<span class="token punctuation">.</span>SharedPreferences<span class="token punctuation">;</span>

<span class="token keyword">import</span> org<span class="token punctuation">.</span>json<span class="token punctuation">.</span>JSONException<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>json<span class="token punctuation">.</span>JSONObject<span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * App 위젯 기능 구현.
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Widget</span> <span class="token keyword">extends</span> <span class="token class-name">AppWidgetProvider</span> <span class="token punctuation">{</span>

    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">updateAppWidget</span><span class="token punctuation">(</span><span class="token parameter">Context context<span class="token punctuation">,</span> AppWidgetManager appWidgetManager<span class="token punctuation">,</span>
                                int appWidgetId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
   SharedPreferences sharedPref <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getSharedPreferences</span><span class="token punctuation">(</span><span class="token string">"DATA"</span><span class="token punctuation">,</span> Context<span class="token punctuation">.</span><span class="token constant">MODE_PRIVATE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   String appString <span class="token operator">=</span> sharedPref<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"appData"</span><span class="token punctuation">,</span> <span class="token string">"{\"text\":'no data'}"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   JSONObject appData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSONObject</span><span class="token punctuation">(</span>appString<span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token comment">// RemoteViews 객체 생성</span>
   RemoteViews views <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RemoteViews</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">getPackageName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token constant">R</span><span class="token punctuation">.</span>layout<span class="token punctuation">.</span>widget<span class="token punctuation">)</span><span class="token punctuation">;</span>
   views<span class="token punctuation">.</span><span class="token function">setTextViewText</span><span class="token punctuation">(</span><span class="token constant">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>appwidget_text<span class="token punctuation">,</span> appData<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">"text"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 위젯 매니저에 위젯 업데이트 지시</span>
    appWidgetManager<span class="token punctuation">.</span><span class="token function">updateAppWidget</span><span class="token punctuation">(</span>appWidgetId<span class="token punctuation">,</span> views<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span>JSONException e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    @Override
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onUpdate</span><span class="token punctuation">(</span><span class="token parameter">Context context<span class="token punctuation">,</span> AppWidgetManager appWidgetManager<span class="token punctuation">,</span> int<span class="token punctuation">[</span><span class="token punctuation">]</span> appWidgetIds</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 활성 상태인 여러 위젯이 있을 수 있으므로 모두 업데이트</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>int appWidgetId <span class="token operator">:</span> appWidgetIds<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">updateAppWidget</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> appWidgetManager<span class="token punctuation">,</span> appWidgetId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    @Override
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onEnabled</span><span class="token punctuation">(</span><span class="token parameter">Context context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 첫 번째 위젯이 생성될 때 필요한 기능 입력</span>
    <span class="token punctuation">}</span>

    @Override
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onDisabled</span><span class="token punctuation">(</span><span class="token parameter">Context context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 마지막 위젯이 비활성화될 때 필요한 기능 입력</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>중요: 그룹 이름 (group.com.createwidget.pimenta)을 App Groups에서 만든 그룹 이름으로 바꿔주세요.</p>
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
<p>어플리케이션을 실행해서 위젯을 확인해 보세요 (SharedStorage를 작성하기 위해 앱을 실행하고 열어야 합니다):</p>
<p><img src="@source/docs/Tech/2024-03-22-HowToBuildaHomeScreenWidgetforiOSandAndroidinReactNative/img/How-To-Build-a-Home-Screen-Widget-for-iOS-and-Android-in-React-Native_17.png" alt="이미지"></p>
<p>이로써 iOS에 대한 내용은 마무리되었습니다.</p>
<p>이 기사를 읽어 주셔서 감사합니다! 👏를 누르지 않으셨다면 잊지 마세요.</p>
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
</div></template>
