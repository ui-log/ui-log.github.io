<template><div><p>플러터 앱에 구글 지도 추가에 대한 포괄적인 튜토리얼</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*ns7trWP7w7pHnLTk5WHPxw.gif" alt="Google Maps"></p>
<p>만약 위치 기반 서비스가 필요한 모바일 앱을 개발 중이라면, 플러터 앱에 Google Maps를 통합하는 것이 좋은 아이디어입니다. Google Maps는 맵, 위성 이미지, 거리뷰, 그리고 실시간 교통 업데이트를 포함한 다양한 기능을 제공하여 개발자들 사이에서 인기가 높습니다.</p>
<p>Google Maps는 플러터 앱의 사용자 경험을 향상시킬 수 있는 인기있는 매핑 플랫폼입니다. 이 기사에서는 구글 클라우드 플랫폼 계정 설정부터 앱에서 지도를 표시하는 방법까지 모두 다룰 것입니다.</p>
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
<p>준비 사항</p>
<p>시작하기 전에 필요한 몇 가지가 있습니다:</p>
<ul>
<li>Google Cloud Platform 계정</li>
<li>Flutter 프로젝트</li>
<li>Google Maps API 키</li>
</ul>
<p>단계 1: Google Cloud Platform 계정 만들기</p>
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
<p>Google 맵을 앱에서 사용하려면 Google Cloud Platform 계정을 만들어야 합니다. 이미 계정이 있는 경우 다음 단계로 건너뛰십시오.</p>
<ul>
<li>Google Cloud Platform 콘솔(https://console.cloud.google.com/)로 이동합니다.</li>
</ul>
<p><img src="https://miro.medium.com/v2/resize:fit:1200/1*Q3wHEv2mpEWO3nXtfAAXFg.gif" alt="image"></p>
<ul>
<li>Google 계정으로 로그인하거나, 아직 계정이 없는 경우 새로 만듭니다.</li>
<li>화면 상단의 &quot;프로젝트 선택&quot; 드롭다운을 클릭한 후 &quot;새 프로젝트&quot;를 선택하여 새 프로젝트를 생성합니다. 프로젝트 이름을 지정하고 &quot;만들기&quot;를 클릭합니다.</li>
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
<p><img src="https://miro.medium.com/v2/resize:fit:1200/1*b-jPloCJ90IcFlepXkNV6w.gif" alt="이미지"></p>
<p>단계 2: Google Maps 플랫폼 API 활성화하기</p>
<ul>
<li>Cloud Console에서 “APIs &amp; Services” &gt; “Library” 탭으로 이동합니다.</li>
<li>&quot;Maps SDK for Android&quot; 및 &quot;Maps SDK for iOS&quot;를 검색하여 두 API를 활성화합니다.</li>
</ul>
<p><img src="https://miro.medium.com/v2/resize:fit:1200/1*PmmwOAtr_j7QaHnLwyYPiw.gif" alt="이미지"></p>
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
<li>다음으로 &quot;자격 증명&quot; 탭으로 이동하여 &quot;자격 증명 생성&quot;을 클릭하세요. &quot;API 키&quot;를 선택합니다.</li>
<li>API 키를 복사하고 안전한 곳에 보관하세요. 나중에 사용할 것입니다.</li>
</ul>
<p><img src="https://miro.medium.com/v2/resize:fit:1200/1*BFFzPhuW_nLNESnrdTXGlA.gif" alt="이미지"></p>
<p>단계 3: Google Maps Flutter 플러그인 추가하기</p>
<ul>
<li>첫 번째 단계는 선호하는 IDE나 명령줄을 사용하여 새 Flutter 프로젝트를 만드는 것입니다. 프로젝트를 생성한 후 다음 단계를 진행할 수 있습니다.</li>
<li>Google Maps 패키지 추가하기</li>
<li>이제 Google Maps 패키지를 프로젝트에 추가해야 합니다. 이를 위해 pubspec.yaml 파일에 다음 종속성을 추가할 수 있습니다.</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">dependencies</span><span class="token operator">:</span>
  <span class="token literal-property property">flutter</span><span class="token operator">:</span>
    <span class="token literal-property property">sdk</span><span class="token operator">:</span> flutter
  <span class="token literal-property property">google_maps_flutter</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token number">1.2</span><span class="token number">.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>의존성을 추가한 후 터미널에서 다음 명령을 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>flutter pub <span class="token keyword">get</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이렇게 하면 Google Maps 패키지가 다운로드되고 설치됩니다.</p>
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
<p>단계 4: 지도 보기 설정하기</p>
<p>앱의 main.dart 파일을 열고 다음 코드를 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'package:flutter/material.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'package:google_maps_flutter/google_maps_flutter.dart'</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">runApp</span><span class="token punctuation">(</span><span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  @override
  Widget <span class="token function">build</span><span class="token punctuation">(</span><span class="token parameter">BuildContext context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">MaterialApp</span><span class="token punctuation">(</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Google Maps Demo'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">home</span><span class="token operator">:</span> <span class="token function">Scaffold</span><span class="token punctuation">(</span>
        <span class="token literal-property property">appBar</span><span class="token operator">:</span> <span class="token function">AppBar</span><span class="token punctuation">(</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">'Google Maps Demo'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token function">GoogleMap</span><span class="token punctuation">(</span>
          <span class="token literal-property property">initialCameraPosition</span><span class="token operator">:</span> <span class="token function">CameraPosition</span><span class="token punctuation">(</span>
            <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token function">LatLng</span><span class="token punctuation">(</span><span class="token number">23.0225</span><span class="token punctuation">,</span> <span class="token number">72.5714</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>LatLng(23.0225, 72.5714)를 지도에 표시하려는 위치의 위도와 경도로 대체하세요.</li>
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
<p><strong>단계 5: API 키 추가</strong></p>
<p>Google Cloud Platform 계정으로 돌아가서 2단계에서 생성한 API 키를 찾으세요.</p>
<p>API 키를 획득했다면 앱에서 설정해야 합니다. 이를 위해 AndroidManifest.xml 파일(안드로이드용) 또는 Info.plist 파일(iOS용)에 다음 코드를 추가하십시오:</p>
<p>Android:</p>
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
<p>앱에 이전 단계에서 생성한 API 키를 사용하여 Google 지도를 통합하려면 제공된 지침을 따라 필요한 코드를 복사하여 붙여넣어야 합니다.</p>
<p>먼저 플러터 프로젝트를 열고 다음 위치의 파일로 이동하십시오: android/app/src/main/AndroidManifest.xml.</p>
<p>다음으로 아래 코드를 붙여넣으십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>application<span class="token operator">></span>
  <span class="token operator">&lt;</span>meta<span class="token operator">-</span>data android<span class="token operator">:</span>name<span class="token operator">=</span><span class="token string">"com.google.android.geo.API_KEY"</span> <span class="token literal-property property">android</span><span class="token operator">:</span>value<span class="token operator">=</span><span class="token string">"여기에 API 키를 입력하세요"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>application<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p><img src="https://miro.medium.com/v2/resize:fit:1200/1*f1MCg_vimeuJa0nRuzdx7g.gif" alt="이미지"></p>
<p>iOS:
iOS 기기용 플러터 앱에서 Google 지도를 구현하는 과정은 안드로이드와 유사합니다.</p>
<p>첫 번째 단계는 애플리케이션 델리게이트 내에서 API 키를 정의하는 것입니다. ios/Runner/AppDelegate.swift</p>
<div class="language-swift ext-swift line-numbers-mode"><pre v-pre class="language-swift"><code><span class="token keyword">import</span> <span class="token class-name">UIKit</span>
<span class="token keyword">import</span> <span class="token class-name">Flutter</span>
<span class="token keyword">import</span> <span class="token class-name">GoogleMaps</span>

<span class="token attribute atrule">@UIApplicationMain</span>
<span class="token attribute atrule">@objc</span> <span class="token keyword">class</span> <span class="token class-name">AppDelegate</span><span class="token punctuation">:</span> <span class="token class-name">FlutterAppDelegate</span> <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">application</span><span class="token punctuation">(</span>
        <span class="token omit keyword">_</span> application<span class="token punctuation">:</span> <span class="token class-name">UIApplication</span><span class="token punctuation">,</span>
        didFinishLaunchingWithOptions launchOptions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">UIApplication</span><span class="token punctuation">.</span><span class="token class-name">LaunchOptionsKey</span><span class="token punctuation">:</span> <span class="token keyword">Any</span><span class="token punctuation">]</span><span class="token operator">?</span>
    <span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
        <span class="token class-name">GeneratedPluginRegistrant</span><span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>with<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">)</span>
        <span class="token class-name">GMSServices</span><span class="token punctuation">.</span><span class="token function">provideAPIKey</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"YOUR-KEY"</span></span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">application</span><span class="token punctuation">(</span>application<span class="token punctuation">,</span> didFinishLaunchingWithOptions<span class="token punctuation">:</span> launchOptions<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>API 키를 응용프로그램 델리게이트에서 지정한 후, 다음 단계는 Xcode를 열고 info.plist 파일에 위치 권한을 포함하는 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>key<span class="token operator">></span>io<span class="token punctuation">.</span>flutter<span class="token punctuation">.</span>embedded_views_preview<span class="token operator">&lt;</span><span class="token operator">/</span>key<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token boolean">true</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>key<span class="token operator">></span>NSLocationWhenInUseUsageDescription<span class="token operator">&lt;</span><span class="token operator">/</span>key<span class="token operator">></span>
<span class="token operator">&lt;</span>string<span class="token operator">></span>이 앱은 활성화될 때 위치에 대한 액세스가 필요합니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>string<span class="token operator">></span>
<span class="token operator">&lt;</span>key<span class="token operator">></span>NSLocationAlwaysAndWhenInUseUsageDescription<span class="token operator">&lt;</span><span class="token operator">/</span>key<span class="token operator">></span>
<span class="token operator">&lt;</span>string<span class="token operator">></span>이 앱은 백그라운드에서 위치에 대한 액세스가 필요합니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>string<span class="token operator">></span>
<span class="token operator">&lt;</span>key<span class="token operator">></span>NSLocationAlwaysUsageDescription<span class="token operator">&lt;</span><span class="token operator">/</span>key<span class="token operator">></span>
<span class="token operator">&lt;</span>string<span class="token operator">></span>이 앱은 백그라운드에서 위치에 대한 액세스가 필요합니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>string<span class="token operator">></span>
<span class="token operator">&lt;</span>key<span class="token operator">></span>NSContactsUsageDescription<span class="token operator">&lt;</span><span class="token operator">/</span>key<span class="token operator">></span>
<span class="token operator">&lt;</span>string<span class="token operator">></span>지도에 연락처를 표시하기 위해 이 앱은 연락처에 액세스해야 합니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>string<span class="token operator">></span>
<span class="token operator">&lt;</span>key<span class="token operator">></span>NSPhotoLibraryUsageDescription<span class="token operator">&lt;</span><span class="token operator">/</span>key<span class="token operator">></span>
<span class="token operator">&lt;</span>string<span class="token operator">></span>지도에 사진을 표시하기 위해 이 앱은 사진에 액세스해야 합니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>string<span class="token operator">></span>
<span class="token operator">&lt;</span>key<span class="token operator">></span>NSCameraUsageDescription<span class="token operator">&lt;</span><span class="token operator">/</span>key<span class="token operator">></span>
<span class="token operator">&lt;</span>string<span class="token operator">></span>지도에 사진을 표시하기 위해 이 앱은 카메라에 액세스해야 합니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>string<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 API 키를 구성했으므로 앱에서 지도를 표시할 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-03-22-IntegratingGoogleMapsinaFlutterAppAStep-by-StepGuide/img/Integrating-Google-Maps-in-a-Flutter-App:-A-Step-by-Step-Guide_6.png" alt="Google Maps를 플러터 앱에 통합하는 방법: 단계별 안내서"></p>
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
<h2 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h2>
<p>이 튜토리얼을 통해 Google Maps를 Flutter 앱에 통합하는 과정을 보여드리고, 지도의 모양을 개인화하고 조정하는 여러 방법을 강조해왔습니다. Maps API를 활성화하는 필수 단계, API 키를 생성하고 제어하는 방법, Flutter 애플리케이션에서 지도를 설정하고 사용자 정의하는 방법 등을 다루었습니다.</p>
<p>Google Maps를 앱에 통합하면 다양한 가능성을 높일 수 있습니다. 기초가 이제 당신의 도구로 사용 가능해져, 지도 기반 기능과 상호 작용하는 지도를 Flutter 애플리케이션에 구축하는 데 잘 준비되었습니다.</p>
<p>읽어 주셔서 감사합니다.</p>
</div></template>
