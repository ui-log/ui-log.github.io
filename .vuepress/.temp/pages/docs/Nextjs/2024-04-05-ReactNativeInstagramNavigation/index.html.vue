<template><div><p>리액트 네이티브는 여러 플랫폼에서 동작하는 모바일 애플리케이션을 만드는 데 개발자들 사이에서 점점 더 인기를 얻고 있어요. 모바일 앱을 구축할 때 가장 중요한 요소 중 하나는 사용자에게 부드럽고 직관적인 내비게이션 경험을 제공하는 것이에요. 인스타그램은 세련되고 사용하기 편한 내비게이션으로 유명한데, 이를 참고하여 리액트 네이티브 앱을 개발할 때 영감을 받을 수 있어요.</p>
<p>인스타그램의 내비게이션은 간단하면서도 효과적인 구조를 따르는데, 피드, 검색, 카메라, 알림, 프로필 등 앱의 다양한 섹션 사이를 이동하기 위한 하단 탭이 있어요. 내비게이션 바는 화면 하단에 고정되어 있어 앱의 모든 주요 기능에 쉽게 접근할 수 있어요.</p>
<p>리액트 네이티브 앱에서 비슷한 내비게이션 경험을 제공하기 위해, 개발자들은 React Navigation과 같은 라이브러리를 활용할 수 있어요. React Navigation은 스택, 탭, 드로어 내비게이션을 포함한 다양한 내비게이션 옵션을 제공해요. 인스타그램과 유사한 내비게이션을 구현하기 위해서는 탭 내비게이션이 가장 적합한 선택일 거예요.</p>
<p>탭 내비게이션 외에도, 인스타그램은 새로운 사진이나 비디오를 게시하는 기능과 같은 모달 화면을 활용해요. 이는 현재 화면 위에 겹쳐지는 모달 컴포넌트를 사용하여 리액트 네이티브에서 구현할 수 있어요. 이렇게하면 새로운 포스트를 만드는 등 특정 작업을 위해 집중된 화면을 제공할 수 있어요.</p>
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
<p>목차</p>
<ul>
<li>재료</li>
<li>React Navigation 초기화 및 통합</li>
<li>UI 구성</li>
<li>react-native-reanimated를 사용한 애니메이션 설정</li>
</ul>
<h1 id="재료" tabindex="-1"><a class="header-anchor" href="#재료" aria-hidden="true">#</a> 재료</h1>
<p>여기에 제 설치에 대한 간단한 요약이 있습니다:</p>
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
<li>안드로이드 스튜디오 (이구아나)</li>
<li>Xcode (v15.2)</li>
<li>iTerm</li>
<li>Nvim (나의 설정, 타쿠야와 레이지 빔에 의해 사용자 정의된 설정)</li>
<li>Node.js (v18.19.0)</li>
<li>Yarn (v1.22.21)</li>
<li>Npm (v10.2.3)</li>
<li>Ruby (v2.7.6)</li>
<li>Cocoapods (v1.15.2)</li>
</ul>
<h1 id="react-navigation-초기-설정-및-통합" tabindex="-1"><a class="header-anchor" href="#react-navigation-초기-설정-및-통합" aria-hidden="true">#</a> React Navigation 초기 설정 및 통합</h1>
<p>오늘은 그들을 하는 방법에 대해 안내해 드리겠습니다.</p>
<p>먼저, 리액트 네이티브 프로젝트를 초기화해야 합니다.</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-ReactNativeInstagramNavigation/img/ReactNativeInstagramNavigation_0.png" alt="이미지"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx react<span class="token operator">-</span>native init ReactNavigationInstagram
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>처음으로 성공했을 때,</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cd ReactNavigationInstagram
yarn ios
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
<p>우선 실행하십시오,</p>
<p><img src="@source/docs/Nextjs/2024-04-05-ReactNativeInstagramNavigation/img/ReactNativeInstagramNavigation_1.png" alt="React Native Navigation"></p>
<p>이제 React Native에서 화면간에 이동하기 위해 react-navigation을 설치해야 합니다.
저는 react-navigation 버전 6.x를 사용하고 있어요.
react-navigation 가이드를 따라해보세요.
제가 통합한 react-navigation 버전은 다음과 같아요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"@react-navigation/native"</span><span class="token operator">:</span> <span class="token string">"^6.1.17"</span><span class="token punctuation">,</span>
<span class="token string-property property">"@react-navigation/native-stack"</span><span class="token operator">:</span> <span class="token string">"^6.9.26"</span><span class="token punctuation">,</span>
<span class="token string-property property">"react-native-safe-area-context"</span><span class="token operator">:</span> <span class="token string">"^4.9.0"</span><span class="token punctuation">,</span>
<span class="token string-property property">"react-native-screens"</span><span class="token operator">:</span> <span class="token string">"^3.30.1"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add @react<span class="token operator">-</span>navigation<span class="token operator">/</span>native

yarn add react<span class="token operator">-</span>native<span class="token operator">-</span>screens react<span class="token operator">-</span>native<span class="token operator">-</span>safe<span class="token operator">-</span>area<span class="token operator">-</span>context

yarn add @react<span class="token operator">-</span>navigation<span class="token operator">/</span>native<span class="token operator">-</span>stack

<span class="token comment">// 그런 다음 @react-navigation을 성공적으로 설치한 후 IOS에 설치하십시오</span>

cd ios <span class="token operator">&amp;&amp;</span> pod install <span class="token operator">&amp;&amp;</span> cd <span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음 App.tsx 파일을 업데이트해야 합니다.</p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token comment">/**
 * 샘플 React Native 앱
 * https://github.com/facebook/react-native
 *
 * @format
 */</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>NavigationContainer<span class="token punctuation">,</span> useNavigation<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@react-navigation/native'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  NativeStackNavigationProp<span class="token punctuation">,</span>
  createNativeStackNavigator<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@react-navigation/native-stack'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>StyleSheet<span class="token punctuation">,</span> Text<span class="token punctuation">,</span> TouchableOpacity<span class="token punctuation">,</span> View<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-native'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">DetailsScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>sectionContainer<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Text</span></span><span class="token punctuation">></span></span><span class="token plain-text">세부 화면</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Text</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">HomeScreenNavigationProp</span> <span class="token operator">=</span> NativeStackNavigationProp<span class="token operator">&lt;</span>
  RootStackParamList<span class="token punctuation">,</span>
  <span class="token string">'Home'</span>
<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">HomeScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> navigation <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useNavigation</span><span class="token generic class-name"><span class="token operator">&lt;</span>HomeScreenNavigationProp<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">View</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>sectionContainer<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Text</span></span><span class="token punctuation">></span></span><span class="token plain-text">홈 화면</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Text</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TouchableOpacity</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>button<span class="token punctuation">}</span></span>
        <span class="token attr-name">onPress</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> navigation<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">'Detail'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Text</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>titleButton<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">상세 화면 열기</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Text</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">TouchableOpacity</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">View</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">RootStackParamList</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  Home<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  Detail<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Stack <span class="token operator">=</span> <span class="token generic-function"><span class="token function">createNativeStackNavigator</span><span class="token generic class-name"><span class="token operator">&lt;</span>RootStackParamList<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">JSX</span><span class="token punctuation">.</span>Element <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NavigationContainer</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stack.Navigator</span></span> <span class="token attr-name">initialRouteName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Home<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stack.Screen</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Home<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>HomeScreen<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Stack.Screen</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Detail<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>DetailsScreen<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Stack.Navigator</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NavigationContainer</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  sectionContainer<span class="token operator">:</span> <span class="token punctuation">{</span>
    flex<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    alignItems<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
    justifyContent<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  button<span class="token operator">:</span> <span class="token punctuation">{</span>
    padding<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
    marginTop<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    backgroundColor<span class="token operator">:</span> <span class="token string">'#f5c1f5'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  titleButton<span class="token operator">:</span> <span class="token punctuation">{</span>
    fontSize<span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
    color<span class="token operator">:</span> <span class="token string">'black'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이것은 react-navigation 통합 결과입니다.</p>
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
<p><img src="https://miro.medium.com/v2/resize:fit:592/1*WNFdz06x-fj6JBu7eocIHA.gif" alt="이미지"></p>
<h1 id="ui-구축" tabindex="-1"><a class="header-anchor" href="#ui-구축" aria-hidden="true">#</a> UI 구축</h1>
<p>홈, 포스트, 상세 3개의 화면을 만들어야 합니다.
홈 화면에는 여러 이미지를 포함한 포스트 목록이 있을 것입니다. 이미지를 클릭하면 해당 이미지의 세부 정보인 상세 화면이 표시됩니다. 또한 사용자는 작성자의 프로필 세부 정보를 보기 위해 아바타를 클릭하여 포스트 화면으로 이동할 수 있습니다.</p>
<p>홈 화면에서는 포스트 컴포넌트를 만들어 포스트 목록을 렌더링할 것입니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>NativeStackNavigationProp<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@react-navigation/native-stack'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>useState<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  View<span class="token punctuation">,</span>
  Text<span class="token punctuation">,</span>
  StyleSheet<span class="token punctuation">,</span>
  Image<span class="token punctuation">,</span>
  Dimensions<span class="token punctuation">,</span>
  NativeSyntheticEvent<span class="token punctuation">,</span>
  NativeScrollEvent<span class="token punctuation">,</span>
  TouchableOpacity<span class="token punctuation">,</span>
  FlatList<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-native'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>RootStackParamList<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../App'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>useNavigation<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@react-navigation/native'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">IPost</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">avatar</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">images</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span> image<span class="token operator">:</span> string<span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token constant">WIDTH_SCREEN</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token constant">HEIGHT_SCREEN</span><span class="token punctuation">}</span> <span class="token operator">=</span> Dimensions<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'window'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

type PostScreenNavigationProp <span class="token operator">=</span> NativeStackNavigationProp<span class="token operator">&lt;</span>
  RootStackParamList<span class="token punctuation">,</span>
  <span class="token string">'Post'</span>
<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">Post</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>IPost<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>id<span class="token punctuation">,</span> images<span class="token punctuation">,</span> avatar<span class="token punctuation">,</span> name<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> navigation <span class="token operator">=</span> useNavigation<span class="token operator">&lt;</span>PostScreenNavigationProp<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>currentImageIndex<span class="token punctuation">,</span> setCurrentImageIndex<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>number<span class="token operator">></span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleScroll</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> NativeSyntheticEvent<span class="token operator">&lt;</span>NativeScrollEvent<span class="token operator">></span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> contentOffsetX <span class="token operator">=</span> event<span class="token punctuation">.</span>nativeEvent<span class="token punctuation">.</span>contentOffset<span class="token punctuation">.</span>x<span class="token punctuation">;</span>
    <span class="token keyword">const</span> imageIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>contentOffsetX <span class="token operator">/</span> <span class="token constant">WIDTH_SCREEN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setCurrentImageIndex</span><span class="token punctuation">(</span>imageIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> bullets <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> images<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    bullets<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>Text
        key<span class="token operator">=</span><span class="token punctuation">{</span>i<span class="token punctuation">}</span>
        style<span class="token operator">=</span><span class="token punctuation">{</span>
          <span class="token operator">...</span>styles<span class="token punctuation">.</span>bullet<span class="token punctuation">,</span>
          <span class="token literal-property property">opacity</span><span class="token operator">:</span> currentImageIndex <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">===</span> i <span class="token operator">?</span> <span class="token number">0.5</span> <span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&amp;</span>bull<span class="token punctuation">;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>TouchableOpacity
        onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          event<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          navigation<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">'Post'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              id<span class="token punctuation">,</span>
              images<span class="token punctuation">,</span>
              avatar<span class="token punctuation">,</span>
              name<span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
        style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>header<span class="token punctuation">}</span>
      <span class="token operator">></span>
        <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>headerContent<span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Image src<span class="token operator">=</span><span class="token punctuation">{</span>avatar<span class="token punctuation">}</span> resizeMode<span class="token operator">=</span><span class="token string">"center"</span> style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>avatar<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Text<span class="token operator">></span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>TouchableOpacity<span class="token operator">></span>
      <span class="token operator">&lt;</span>FlatList
        horizontal
        decelerationRate<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>
        snapToInterval<span class="token operator">=</span><span class="token punctuation">{</span><span class="token constant">WIDTH_SCREEN</span><span class="token punctuation">}</span>
        onScroll<span class="token operator">=</span><span class="token punctuation">{</span>handleScroll<span class="token punctuation">}</span>
        snapToAlignment<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'center'</span><span class="token punctuation">}</span>
        pagingEnabled
        scrollEventThrottle<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span>
        contentContainerStyle<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token constant">WIDTH_SCREEN</span> <span class="token operator">*</span> images<span class="token punctuation">.</span>length <span class="token punctuation">}</span><span class="token punctuation">}</span>
        showsHorizontalScrollIndicator<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>
        data<span class="token operator">=</span><span class="token punctuation">{</span>images<span class="token punctuation">}</span>
        renderItem<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> item <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>TouchableOpacity
            key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
            activeOpacity<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0.9</span><span class="token punctuation">}</span>
            onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> navigation<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">'Detail'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> item <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">></span>
            <span class="token operator">&lt;</span>Image src<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>image<span class="token punctuation">}</span> resizeMode<span class="token operator">=</span><span class="token string">"cover"</span> style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>img<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>TouchableOpacity<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>bullets<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>bullets<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token constant">HEIGHT_SCREEN</span> <span class="token operator">*</span> <span class="token number">0.7</span><span class="token punctuation">,</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'relative'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">img</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token constant">WIDTH_SCREEN</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headerContent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">flexDirection</span><span class="token operator">:</span> <span class="token string">'row'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'absolute'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
    <span class="token literal-property property">zIndex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bullets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'absolute'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">'flex'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">'flex-start'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">'auto'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alignSelf</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">flexDirection</span><span class="token operator">:</span> <span class="token string">'row'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">paddingHorizontal</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token literal-property property">paddingTop</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bullet</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">paddingHorizontal</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">avatar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    <span class="token literal-property property">marginRight</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Post<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이후, Post 컴포넌트를 기반으로 한 게시물 목록을 생성하여 홈 화면을 형성하겠습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>StyleSheet<span class="token punctuation">,</span> View<span class="token punctuation">,</span> FlatList<span class="token punctuation">,</span> Dimensions<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-native'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Post<span class="token punctuation">,</span> <span class="token punctuation">{</span>IPost<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../components/Post'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span><span class="token constant">HOME_DATA</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../data/home-data'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>SafeAreaView<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-native-safe-area-context'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token constant">HEIGHT_SCREEN</span><span class="token punctuation">}</span> <span class="token operator">=</span> Dimensions<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'window'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">HomeScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">renderItem</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> item <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">item</span><span class="token operator">:</span> IPost <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>Post <span class="token punctuation">{</span><span class="token operator">...</span>item<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>SafeAreaView style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>FlatList
          data<span class="token operator">=</span><span class="token punctuation">{</span>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token operator">...</span><span class="token constant">HOME_DATA</span><span class="token punctuation">,</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          showsVerticalScrollIndicator<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>
          renderItem<span class="token operator">=</span><span class="token punctuation">{</span>renderItem<span class="token punctuation">}</span>
          getItemLayout<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token constant">HEIGHT_SCREEN</span> <span class="token operator">*</span> <span class="token number">0.7</span><span class="token punctuation">,</span>
            <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token constant">HEIGHT_SCREEN</span> <span class="token operator">*</span> <span class="token number">0.7</span> <span class="token operator">*</span> index<span class="token punctuation">,</span>
            index<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          keyExtractor<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">item</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>SafeAreaView<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'#262626'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> HomeScreen<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 여기가 홈 화면의 UI 결과입니다.</p>
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
<img src="@source/docs/Nextjs/2024-04-05-ReactNativeInstagramNavigation/img/ReactNativeInstagramNavigation_3.png" />
<p>다음 단계로는 디테일 화면과 포스트 화면을 위한 UI를 생성할 예정이에요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>useNavigation<span class="token punctuation">,</span> useRoute<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@react-navigation/native'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>useLayoutEffect<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  View<span class="token punctuation">,</span>
  StyleSheet<span class="token punctuation">,</span>
  Image<span class="token punctuation">,</span>
  FlatList<span class="token punctuation">,</span>
  Dimensions<span class="token punctuation">,</span>
  TouchableOpacity<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-native'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>NativeStackNavigationProp<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@react-navigation/native-stack'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>RootStackParamList<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../App'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token constant">WIDTH_SCREEN</span><span class="token punctuation">}</span> <span class="token operator">=</span> Dimensions<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'window'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

type DetailScreenNavigationProp <span class="token operator">=</span> NativeStackNavigationProp<span class="token operator">&lt;</span>
  RootStackParamList<span class="token punctuation">,</span>
  <span class="token string">'Detail'</span>
<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">PostScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> navigation <span class="token operator">=</span> useNavigation<span class="token operator">&lt;</span>DetailScreenNavigationProp<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>data<span class="token punctuation">}</span> <span class="token operator">=</span> router<span class="token punctuation">.</span>params<span class="token punctuation">;</span>
  <span class="token function">useLayoutEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    navigation<span class="token punctuation">.</span><span class="token function">setOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">headerTitle</span><span class="token operator">:</span> data<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
      <span class="token literal-property property">headerTitleStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#000000'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">headerBackTitleVisible</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">headerTintColor</span><span class="token operator">:</span> <span class="token string">'#000000'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>navigation<span class="token punctuation">,</span> data<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Image src<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>avatar<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>avatar<span class="token punctuation">}</span> resizeMode<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'center'</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>content<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>FlatList
          numColumns<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span>
          data<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>images<span class="token punctuation">}</span>
          keyExtractor<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> index<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          renderItem<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>
              <span class="token operator">&lt;</span>TouchableOpacity
                onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> navigation<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">'Detail'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">data</span><span class="token operator">:</span> item<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                activeOpacity<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0.9</span><span class="token punctuation">}</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>Image src<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>image<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>image<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>TouchableOpacity<span class="token operator">></span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'#262626'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">avatar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alignSelf</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token constant">WIDTH_SCREEN</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token constant">WIDTH_SCREEN</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1.5</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> PostScreen<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Nextjs/2024-04-05-ReactNativeInstagramNavigation/img/ReactNativeInstagramNavigation_4.png" />
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>useRoute<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@react-navigation/native'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>View<span class="token punctuation">,</span> StyleSheet<span class="token punctuation">,</span> Text<span class="token punctuation">,</span> Image<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-native'</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">IProps</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token literal-property property">DetailScreen</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>IProps<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>data<span class="token punctuation">}</span> <span class="token operator">=</span> route<span class="token punctuation">.</span>params<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Image src<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>image<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>image<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'#262626'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">aspectRatio</span><span class="token operator">:</span> <span class="token string">'1/1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> DetailScreen<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Nextjs/2024-04-05-ReactNativeInstagramNavigation/img/ReactNativeInstagramNavigation_5.png" alt="ReactNativeInstagramNavigation_5"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * <span class="token keyword">@format</span>
 */</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>NavigationContainer<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@react-navigation/native'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>createNativeStackNavigator<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@react-navigation/native-stack'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> HomeScreen <span class="token keyword">from</span> <span class="token string">'./screens/HomeScreen'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> PostScreen <span class="token keyword">from</span> <span class="token string">'./screens/PostScreen'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>IPost<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./components/Post'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> DetailScreen <span class="token keyword">from</span> <span class="token string">'./screens/DetailScreen'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'react-native-gesture-handler'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> type RootStackParamList <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">Home</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token literal-property property">Detail</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span> image<span class="token operator">:</span> string<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token literal-property property">Post</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">data</span><span class="token operator">:</span> IPost<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Stack <span class="token operator">=</span> createNativeStackNavigator<span class="token operator">&lt;</span>RootStackParamList<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">JSX</span><span class="token punctuation">.</span>Element <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>NavigationContainer<span class="token operator">></span>
      <span class="token operator">&lt;</span>Stack<span class="token punctuation">.</span>Navigator initialRouteName<span class="token operator">=</span><span class="token string">"Home"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Stack<span class="token punctuation">.</span>Screen
          name<span class="token operator">=</span><span class="token string">"Home"</span>
          screenOptions<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">presentation</span><span class="token operator">:</span> <span class="token string">'transparentModal'</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
          component<span class="token operator">=</span><span class="token punctuation">{</span>HomeScreen<span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Stack<span class="token punctuation">.</span>Screen
          name<span class="token operator">=</span><span class="token string">"Detail"</span>
          options<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">headerStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'#262626'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
          component<span class="token operator">=</span><span class="token punctuation">{</span>DetailScreen<span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Stack<span class="token punctuation">.</span>Screen
          name<span class="token operator">=</span><span class="token string">"Post"</span>
          options<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">headerStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'#262626'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">headerBackTitle</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
          component<span class="token operator">=</span><span class="token punctuation">{</span>PostScreen<span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Stack<span class="token punctuation">.</span>Navigator<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>NavigationContainer<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://miro.medium.com/v2/resize:fit:592/1*o59tGOoBQT6SBCkA8HX9DA.gif" alt="Animated GIF"></p>
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
<h1 id="react-native-reanimated을-사용하여-애니메이션-설정하기" tabindex="-1"><a class="header-anchor" href="#react-native-reanimated을-사용하여-애니메이션-설정하기" aria-hidden="true">#</a> react-native-reanimated을 사용하여 애니메이션 설정하기</h1>
<p>먼저, react-native-reanimated 및 react-native-gesture-handler 라이브러리를 설치하고 설정해야 합니다.</p>
<h2 id="_1-react-native-reanimated" tabindex="-1"><a class="header-anchor" href="#_1-react-native-reanimated" aria-hidden="true">#</a> 1. react-native-reanimated</h2>
<h1 id="설치" tabindex="-1"><a class="header-anchor" href="#설치" aria-hidden="true">#</a> 설치</h1>
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
<p>프로젝트에 Reanimated를 추가하는 데 세 가지 단계가 필요합니다:</p>
<h1 id="단계-1-패키지-설치" tabindex="-1"><a class="header-anchor" href="#단계-1-패키지-설치" aria-hidden="true">#</a> 단계 1: 패키지 설치</h1>
<p>yarn을 통해 react-native-reanimated 패키지를 설치합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add react<span class="token operator">-</span>native<span class="token operator">-</span>reanimated
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
<h1 id="단계-2-reanimated의-babel-플러그인-추가" tabindex="-1"><a class="header-anchor" href="#단계-2-reanimated의-babel-플러그인-추가" aria-hidden="true">#</a> 단계 2: Reanimated의 babel 플러그인 추가</h1>
<p>babel.config.js에 react-native-reanimated/plugin 플러그인을 추가해주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token operator">...</span> <span class="token comment">// 여기에 추가하지 마세요 :)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token operator">...</span>
      <span class="token string">'react-native-reanimated/plugin'</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-3-metro-번들러-캐시-지우기-권장-사항" tabindex="-1"><a class="header-anchor" href="#단계-3-metro-번들러-캐시-지우기-권장-사항" aria-hidden="true">#</a> 단계 3: Metro 번들러 캐시 지우기 (권장 사항)</h1>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn start <span class="token operator">--</span>reset<span class="token operator">-</span>cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="플랫폼별-설정" tabindex="-1"><a class="header-anchor" href="#플랫폼별-설정" aria-hidden="true">#</a> 플랫폼별 설정</h1>
<h2 id="안드로이드" tabindex="-1"><a class="header-anchor" href="#안드로이드" aria-hidden="true">#</a> 안드로이드</h2>
<p>추가 단계는 필요하지 않습니다.</p>
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
<h2 id="ios" tabindex="-1"><a class="header-anchor" href="#ios" aria-hidden="true">#</a> iOS</h2>
<p>iOS 개발 시, 앱을 실행하기 전에 먼저 pods를 설치해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cd ios <span class="token operator">&amp;&amp;</span> pod install <span class="token operator">&amp;&amp;</span> cd <span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-react-native-gesture-handler" tabindex="-1"><a class="header-anchor" href="#_2-react-native-gesture-handler" aria-hidden="true">#</a> 2. react-native-gesture-handler</h2>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add react<span class="token operator">-</span>native<span class="token operator">-</span>gesture<span class="token operator">-</span>handler

<span class="token comment">// 그리고 @react-navigation을 성공적으로 설치한 후에 IOS에서 다음을 설치하세요</span>

cd ios <span class="token operator">&amp;&amp;</span> pod install <span class="token operator">&amp;&amp;</span> cd <span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>우리가 해야 할 첫 번째 일은 애니메이션과 함께 작동할 수 있도록 만드는 것입니다. 네비게이션 효과를 전환하는 것.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 샘플 React Native 앱
 * https://github.com/facebook/react-native
 *
 * <span class="token keyword">@format</span>
 */</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>NavigationContainer<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@react-navigation/native'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>createNativeStackNavigator<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@react-navigation/native-stack'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>LogBox<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-native'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> HomeScreen <span class="token keyword">from</span> <span class="token string">'./screens/HomeScreen'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> PostScreen <span class="token keyword">from</span> <span class="token string">'./screens/PostScreen'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>IPost<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./components/Post'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> DetailScreen <span class="token keyword">from</span> <span class="token string">'./screens/DetailScreen'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'react-native-gesture-handler'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>GestureHandlerRootView<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-native-gesture-handler'</span><span class="token punctuation">;</span>

LogBox<span class="token punctuation">.</span><span class="token function">ignoreLogs</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string">'Non-serializable values were found in the navigation state'</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> type RootStackParamList <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">Home</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token literal-property property">Detail</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span> image<span class="token operator">:</span> string<span class="token punctuation">}</span><span class="token punctuation">;</span>
    from<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
    parentId<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    callback<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token literal-property property">Post</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">data</span><span class="token operator">:</span> IPost<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Stack <span class="token operator">=</span> createNativeStackNavigator<span class="token operator">&lt;</span>RootStackParamList<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">JSX</span><span class="token punctuation">.</span>Element <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>GestureHandlerRootView style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>NavigationContainer<span class="token operator">></span>
        <span class="token operator">&lt;</span>Stack<span class="token punctuation">.</span>Navigator initialRouteName<span class="token operator">=</span><span class="token string">"Home"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Stack<span class="token punctuation">.</span>Screen
            options<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">headerShown</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
            name<span class="token operator">=</span><span class="token string">"Home"</span>
            component<span class="token operator">=</span><span class="token punctuation">{</span>HomeScreen<span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Stack<span class="token punctuation">.</span>Screen
            options<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">headerShown</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">presentation</span><span class="token operator">:</span> <span class="token string">'transparentModal'</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
            name<span class="token operator">=</span><span class="token string">"Detail"</span>
            component<span class="token operator">=</span><span class="token punctuation">{</span>DetailScreen<span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Stack<span class="token punctuation">.</span>Screen
            name<span class="token operator">=</span><span class="token string">"Post"</span>
            options<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
              <span class="token literal-property property">headerStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'#262626'</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token literal-property property">headerBackTitle</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span>
            component<span class="token operator">=</span><span class="token punctuation">{</span>PostScreen<span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Stack<span class="token punctuation">.</span>Navigator<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>NavigationContainer<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>GestureHandlerRootView<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음으로, Post 구성 요소에 일부 속성을 추가해야하며, 목록에서 고유한 키를 가져야 합니다. 여기서 중요한 속성은 sharedTransitionTag이며, 다음 네비게이션을 식별하는 데 사용됩니다. Reanimated가 sharedTransitionTag가있는 구성 요소가 마운트되거나 언마운트되고 있는 것을 감지하면, 동일한 sharedTransitionTag를 가진 마지막 등록된 뷰를 찾으려고 합니다.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 포스트 컴포넌트에서</span>

<span class="token keyword">const</span> <span class="token literal-property property">Post</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>IPost<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>id<span class="token punctuation">,</span> images<span class="token punctuation">,</span> avatar<span class="token punctuation">,</span> name<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> navigation <span class="token operator">=</span> useNavigation<span class="token operator">&lt;</span>PostScreenNavigationProp<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>currentImageIndex<span class="token punctuation">,</span> setCurrentImageIndex<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>number<span class="token operator">></span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> avatarOpacity <span class="token operator">=</span> <span class="token function">useSharedValue</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleScroll</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> NativeSyntheticEvent<span class="token operator">&lt;</span>NativeScrollEvent<span class="token operator">></span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> contentOffsetX <span class="token operator">=</span> event<span class="token punctuation">.</span>nativeEvent<span class="token punctuation">.</span>contentOffset<span class="token punctuation">.</span>x<span class="token punctuation">;</span>
    <span class="token keyword">const</span> imageIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>contentOffsetX <span class="token operator">/</span> <span class="token constant">WIDTH_SCREEN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setCurrentImageIndex</span><span class="token punctuation">(</span>imageIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> bullets <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> images<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    bullets<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>Text
        key<span class="token operator">=</span><span class="token punctuation">{</span>i<span class="token punctuation">}</span>
        style<span class="token operator">=</span><span class="token punctuation">{</span>
          <span class="token operator">...</span>styles<span class="token punctuation">.</span>bullet<span class="token punctuation">,</span>
          <span class="token literal-property property">opacity</span><span class="token operator">:</span> currentImageIndex <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">===</span> i <span class="token operator">?</span> <span class="token number">0.5</span> <span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&amp;</span>bull<span class="token punctuation">;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> avatarAnimated <span class="token operator">=</span> <span class="token function">useAnimatedStyle</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> avatarOpacity<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> onBackCallback <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    avatarOpacity<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">withTiming</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>avatarOpacity<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> onNavigatePost <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> GestureResponderEvent</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      event<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      navigation<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">'Post'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          id<span class="token punctuation">,</span>
          images<span class="token punctuation">,</span>
          avatar<span class="token punctuation">,</span>
          name<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>navigation<span class="token punctuation">,</span> id<span class="token punctuation">,</span> images<span class="token punctuation">,</span> avatar<span class="token punctuation">,</span> name<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> onNavigateDetail <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span> image<span class="token operator">:</span> string<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      avatarOpacity<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">withTiming</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      navigation<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">'Detail'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        data<span class="token punctuation">,</span>
        <span class="token literal-property property">parentId</span><span class="token operator">:</span> id<span class="token punctuation">,</span>
        <span class="token literal-property property">callback</span><span class="token operator">:</span> onBackCallback<span class="token punctuation">,</span>
        <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">'List'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>avatarOpacity<span class="token punctuation">,</span> id<span class="token punctuation">,</span> navigation<span class="token punctuation">,</span> onBackCallback<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>TouchableOpacity onPress<span class="token operator">=</span><span class="token punctuation">{</span>onNavigatePost<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>header<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Animated<span class="token punctuation">.</span>View style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>styles<span class="token punctuation">.</span>headerContent<span class="token punctuation">,</span> avatarAnimated<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Image src<span class="token operator">=</span><span class="token punctuation">{</span>avatar<span class="token punctuation">}</span> resizeMode<span class="token operator">=</span><span class="token string">"center"</span> style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>avatar<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Text<span class="token operator">></span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Animated<span class="token punctuation">.</span>View<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>TouchableOpacity<span class="token operator">></span>
      <span class="token operator">&lt;</span>FlatList
        horizontal
        decelerationRate<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>
        snapToInterval<span class="token operator">=</span><span class="token punctuation">{</span><span class="token constant">WIDTH_SCREEN</span><span class="token punctuation">}</span>
        onScroll<span class="token operator">=</span><span class="token punctuation">{</span>handleScroll<span class="token punctuation">}</span>
        snapToAlignment<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'center'</span><span class="token punctuation">}</span>
        pagingEnabled
        scrollEventThrottle<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span>
        keyExtractor<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">data</span> <span class="token operator">=></span> data<span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        contentContainerStyle<span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token constant">WIDTH_SCREEN</span> <span class="token operator">*</span> images<span class="token punctuation">.</span>length<span class="token punctuation">}</span>
        showsHorizontalScrollIndicator<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>
        data<span class="token operator">=</span><span class="token punctuation">{</span>images<span class="token punctuation">}</span>
        renderItem<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>TouchableOpacity
            key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
            activeOpacity<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0.9</span><span class="token punctuation">}</span>
            onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">onNavigateDetail</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>Animated<span class="token punctuation">.</span>View sharedTransitionTag<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'List'</span> <span class="token operator">+</span> item<span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>Animated<span class="token punctuation">.</span>Image
                src<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>image<span class="token punctuation">}</span>
                resizeMode<span class="token operator">=</span><span class="token string">"cover"</span>
                style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>img<span class="token punctuation">}</span>
                sharedTransitionTag<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'List'</span> <span class="token operator">+</span> item<span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> id<span class="token punctuation">}</span>
              <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>Animated<span class="token punctuation">.</span>View<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>TouchableOpacity<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>bullets<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>bullets<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>상세 화면에서 애니메이션을 수행하려면 일부 조정이 필요합니다. sharedTransitionTag가 동일해야한다는 것에 유의하세요.
어느 화면에서 탐색되었는지 구별하기 위해 params를 사용하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">DetailScreen</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>IProps<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>data<span class="token punctuation">,</span> parentId<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> from<span class="token punctuation">}</span> <span class="token operator">=</span> route<span class="token punctuation">.</span>params<span class="token punctuation">;</span>
  <span class="token keyword">const</span> navigation <span class="token operator">=</span> useNavigation<span class="token operator">&lt;</span>DetailScreenNavigationProp<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> translateX <span class="token operator">=</span> <span class="token function">useSharedValue</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> translateY <span class="token operator">=</span> <span class="token function">useSharedValue</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> opacity <span class="token operator">=</span> <span class="token function">useSharedValue</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> scale <span class="token operator">=</span> <span class="token function">useSharedValue</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> gesture <span class="token operator">=</span> Gesture<span class="token punctuation">.</span><span class="token function">Pan</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">onUpdate</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      translateX<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">.</span>translationX <span class="token operator">*</span> <span class="token number">0.8</span><span class="token punctuation">;</span>
      translateY<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">.</span>translationY <span class="token operator">*</span> <span class="token number">0.8</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> distance <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>
        value<span class="token punctuation">.</span>translationX <span class="token operator">*</span> value<span class="token punctuation">.</span>translationX <span class="token operator">+</span>
          value<span class="token punctuation">.</span>translationY <span class="token operator">*</span> value<span class="token punctuation">.</span>translationY<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> scaleValue <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>distance <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0.9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      scale<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">withTiming</span><span class="token punctuation">(</span>scaleValue<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">onEnd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>translateY<span class="token punctuation">.</span>value <span class="token operator">></span> <span class="token number">50</span> <span class="token operator">||</span> translateX<span class="token punctuation">.</span>value <span class="token operator">></span> <span class="token number">90</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        opacity<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        callback <span class="token operator">&amp;&amp;</span> <span class="token function">runOnJS</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">runOnJS</span><span class="token punctuation">(</span>navigation<span class="token punctuation">.</span>goBack<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        translateX<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">withTiming</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        translateY<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">withTiming</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        scale<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">withTiming</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        opacity<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">withTiming</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> animatedStyle <span class="token operator">=</span> <span class="token function">useAnimatedStyle</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span><span class="token literal-property property">translateX</span><span class="token operator">:</span> translateX<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token literal-property property">translateY</span><span class="token operator">:</span> translateY<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token literal-property property">scale</span><span class="token operator">:</span> scale<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token function">interpolateColor</span><span class="token punctuation">(</span>
      opacity<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token string">'transparent'</span><span class="token punctuation">,</span> <span class="token string">'#262626'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">overflow</span><span class="token operator">:</span> <span class="token string">'hidden'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> parentTransitionTag <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>from<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> from <span class="token operator">+</span> data<span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> data<span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>data<span class="token punctuation">.</span>id<span class="token punctuation">,</span> from<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> childrenTransitionTag <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>from<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> from <span class="token operator">+</span> data<span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> parentId<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> data<span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> parentId<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>data<span class="token punctuation">.</span>id<span class="token punctuation">,</span> parentId<span class="token punctuation">,</span> from<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>GestureDetector gesture<span class="token operator">=</span><span class="token punctuation">{</span>gesture<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Animated<span class="token punctuation">.</span>View
        style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">,</span> animatedStyle<span class="token punctuation">]</span><span class="token punctuation">}</span>
        sharedTransitionTag<span class="token operator">=</span><span class="token punctuation">{</span>parentTransitionTag<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Animated<span class="token punctuation">.</span>Image
          sharedTransitionTag<span class="token operator">=</span><span class="token punctuation">{</span>childrenTransitionTag<span class="token punctuation">}</span>
          src<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>image<span class="token punctuation">}</span>
          style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>image<span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Animated<span class="token punctuation">.</span>View<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>GestureDetector<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://miro.medium.com/v2/resize:fit:1200/1*zdwPocG-Nij61NtxOW_e9w.gif" /> ```</p>
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
<p>다음 단계는 포스트 화면에서 상세 화면으로의 전환 효과를 만드는 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">PostScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> navigation <span class="token operator">=</span> useNavigation<span class="token operator">&lt;</span>DetailScreenNavigationProp<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>data<span class="token punctuation">}</span> <span class="token operator">=</span> router<span class="token punctuation">.</span>params<span class="token punctuation">;</span>
  <span class="token keyword">const</span> avatarOpacity <span class="token operator">=</span> <span class="token function">useSharedValue</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">useLayoutEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    navigation<span class="token punctuation">.</span><span class="token function">setOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">headerTitle</span><span class="token operator">:</span> data<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
      <span class="token literal-property property">headerTitleStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#000000'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">headerBackTitleVisible</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">headerTintColor</span><span class="token operator">:</span> <span class="token string">'#000000'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>navigation<span class="token punctuation">,</span> data<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> avatarAnimated <span class="token operator">=</span> <span class="token function">useAnimatedStyle</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> avatarOpacity<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> onBackCallback <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    avatarOpacity<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">withTiming</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>avatarOpacity<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> onNavigateDetail <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">currentData</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span> image<span class="token operator">:</span> string<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      avatarOpacity<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">withTiming</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      navigation<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">'Detail'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> currentData<span class="token punctuation">,</span>
        <span class="token literal-property property">parentId</span><span class="token operator">:</span> data<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
        <span class="token literal-property property">callback</span><span class="token operator">:</span> onBackCallback<span class="token punctuation">,</span>
        <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">'Post'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>avatarOpacity<span class="token punctuation">,</span> data<span class="token punctuation">.</span>id<span class="token punctuation">,</span> navigation<span class="token punctuation">,</span> onBackCallback<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span> key<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'PostDetail'</span> <span class="token operator">+</span> data<span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Animated<span class="token punctuation">.</span>Image
        src<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>avatar<span class="token punctuation">}</span>
        style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>styles<span class="token punctuation">.</span>avatar<span class="token punctuation">,</span> avatarAnimated<span class="token punctuation">]</span><span class="token punctuation">}</span>
        resizeMode<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'center'</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>content<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>FlatList
          numColumns<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span>
          data<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>images<span class="token punctuation">}</span>
          extraData<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>images<span class="token punctuation">}</span>
          keyExtractor<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">_data</span> <span class="token operator">=></span> _data<span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          renderItem<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>
              <span class="token operator">&lt;</span>TouchableOpacity
                key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">onNavigateDetail</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">}</span>
                activeOpacity<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0.9</span><span class="token punctuation">}</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>Animated<span class="token punctuation">.</span>View
                  sharedTransitionTag<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'Post'</span> <span class="token operator">+</span> item<span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
                  <span class="token operator">&lt;</span>Animated<span class="token punctuation">.</span>Image
                    src<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>image<span class="token punctuation">}</span>
                    style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>image<span class="token punctuation">}</span>
                    sharedTransitionTag<span class="token operator">=</span><span class="token punctuation">{</span>
                      <span class="token string">'Post'</span> <span class="token operator">+</span> item<span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> data<span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                  <span class="token operator">/</span><span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>Animated<span class="token punctuation">.</span>View<span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>TouchableOpacity<span class="token operator">></span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://miro.medium.com/v2/resize:fit:1200/1*8jp748Kppa12IE88cNr04A.gif" />
<p>이 글은 Instagram과 유사한 React Native 앱에서 아름다운 내비게이션을 만드는 방법에 대해 설명합니다. 탭 내비게이션, 모달 화면, 스와이프 제스처의 중요성을 이야기하며 사용자 친화적인 경험을 제공합니다. react-navigation 설정, 서로 다른 화면을 위한 UI 구성 요소 작성, 애니메이션을 위해 react-native-reanimated 사용하는 과정을 다룹니다. Instagram의 부드러운 내비게이션을 복제하고 사용자를 효과적으로 동원하는 것이 목표입니다.```</p>
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
<h2 id="관련-포스트" tabindex="-1"><a class="header-anchor" href="#관련-포스트" aria-hidden="true">#</a> 관련 포스트:</h2>
<ul>
<li>React Navigation: <a href="https://navigation.org/docs/getting-started" target="_blank" rel="noopener noreferrer">getting-started 문서<ExternalLinkIcon/></a></li>
<li>React Native Reanimated: <a href="https://docs.swmansion.com/react-native-reanimated/docs/shared-element-transitions/overview/" target="_blank" rel="noopener noreferrer">공유 요소 전환 문서<ExternalLinkIcon/></a></li>
<li>소스 코드: <a href="https://github.com/votrai123/react-native-navigation-instagram" target="_blank" rel="noopener noreferrer">react-native-navigation-instagram<ExternalLinkIcon/></a></li>
<li>React Native Gesture Handler: <a href="https://docs.swmansion.com/react-native-gesture-handler/docs/" target="_blank" rel="noopener noreferrer">문서<ExternalLinkIcon/></a></li>
<li>이메일: trainguyen1199@gmail.com</li>
</ul>
</div></template>
