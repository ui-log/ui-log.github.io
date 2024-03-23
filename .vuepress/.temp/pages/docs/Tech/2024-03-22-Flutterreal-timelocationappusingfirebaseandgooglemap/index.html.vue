<template><div><p><img src="@source/docs/Tech/2024-03-22-Flutterreal-timelocationappusingfirebaseandgooglemap/img/Flutter-real-time-location-app-using-firebase-and-google-map_0.png" alt="Flutter Real-Time Location App Using Firebase and Google Map"></p>
<p>모바일 앱 개발의 동적한 풍경 속에서 실시간 위치 추적 기능을 제공하는 애플리케이션을 만드는 것이 점점 더 중요해지고 있습니다. 실시간 위치를 친구들과 공유하거나 배달 서비스를 추적하거나 다양한 산업 분야에서 사용자 경험을 향상시키는 등, 실시간 위치를 추적하는 앱에 대한 수요가 계속해서 증가하고 있습니다. 이 기사에서는 Flutter, Firebase 및 Google Maps의 힘을 이용하여 강력한 실시간 위치 앱을 개발하는 흥미로운 여정을 살펴보겠습니다.</p>
<h1 id="준비물" tabindex="-1"><a class="header-anchor" href="#준비물" aria-hidden="true">#</a> 준비물</h1>
<p>본 기사에서는 Firebase 프로젝트를 생성하거나 Google API 키를 얻는 과정에 대해 다루지 않습니다. 이미 해당 단계에 익숙하다고 가정합니다 🤝. 익숙하지 않다면, 이전 기사에서 Firebase에 대해 다룬 적이 있고 Google API 키를 얻는 방법은 여기에서 찾을 수 있습니다. 이제 다음 단계로 이동합시다 🤸‍♂️:</p>
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
<h1 id="_1-프로젝트-설정" tabindex="-1"><a class="header-anchor" href="#_1-프로젝트-설정" aria-hidden="true">#</a> 1. 프로젝트 설정 :</h1>
<p>새로운 Flutter 프로젝트를 생성해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>flutter create location_streamer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이제 앱에 필요한 종속성을 통합해봅시다:</p>
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
<li>google_maps_flutter: 구글 맵 통합을 위해.</li>
<li>geolocator: 사용자의 실시간 위치를 얻기 위해.</li>
<li>firebase_core 및 cloud_firestore: Firebase를 사용한 실시간 데이터베이스 기능을 위해.</li>
<li>permission_handler: 앱에서 필요한 권한을 관리하기 위해.</li>
</ul>
<p>pubspec.yaml 파일을 열고 다음 라인을 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">dependencies</span><span class="token operator">:</span>
  <span class="token literal-property property">google_maps_flutter</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token operator">&lt;</span>latest_version<span class="token operator">></span>
  <span class="token literal-property property">geolocator</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token operator">&lt;</span>latest_version<span class="token operator">></span>
  <span class="token literal-property property">firebase_core</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token operator">&lt;</span>latest_version<span class="token operator">></span>
  <span class="token literal-property property">cloud_firestore</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token operator">&lt;</span>latest_version<span class="token operator">></span>
  <span class="token literal-property property">permission_handler</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token operator">&lt;</span>latest_version<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-1-구글-맵-구성하기" tabindex="-1"><a class="header-anchor" href="#_1-1-구글-맵-구성하기" aria-hidden="true">#</a> 1.1 구글 맵 구성하기:</h2>
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
<p>플러터 프로젝트를 설정하고 필요한 종속 항목을 설치한 후에는 Google Maps를 통합하는 방법에 대한 설명서를 참조하세요. 추가로 AndroidManifest.xml 파일에 다음 권한을 포함하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 애플리케이션이 인터넷에 액세스하는 것을 허용합니다 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>uses<span class="token operator">-</span>permission android<span class="token operator">:</span>name<span class="token operator">=</span><span class="token string">"android.permission.INTERNET"</span> <span class="token operator">/</span><span class="token operator">></span>

    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 애플리케이션이 포그라운드 서비스를 실행하는 것을 허용합니다 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>uses<span class="token operator">-</span>permission android<span class="token operator">:</span>name<span class="token operator">=</span><span class="token string">"android.permission.FOREGROUND_SERVICE"</span> <span class="token operator">/</span><span class="token operator">></span>

    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token constant">GPS</span>를 사용하여 정확한 위치에 액세스하는 것을 허용합니다 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>uses<span class="token operator">-</span>permission android<span class="token operator">:</span>name<span class="token operator">=</span><span class="token string">"android.permission.ACCESS_FINE_LOCATION"</span> <span class="token operator">/</span><span class="token operator">></span>

    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 네트워크 기반 방법을 사용하여 대략적인 위치에 액세스하는 것을 허용합니다 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>uses<span class="token operator">-</span>permission android<span class="token operator">:</span>name<span class="token operator">=</span><span class="token string">"android.permission.ACCESS_COARSE_LOCATION"</span> <span class="token operator">/</span><span class="token operator">></span>

    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 백그라운드에서 위치에 액세스하는 것을 허용합니다 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>uses<span class="token operator">-</span>permission android<span class="token operator">:</span>name<span class="token operator">=</span><span class="token string">"android.permission.ACCESS_BACKGROUND_LOCATION"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-2-firestore-데이터베이스-구성" tabindex="-1"><a class="header-anchor" href="#_1-2-firestore-데이터베이스-구성" aria-hidden="true">#</a> 1.2 Firestore 데이터베이스 구성:</h2>
<ul>
<li>Firebase 콘솔로 이동하여 프로젝트를 선택하거나 필요한 경우 새로운 프로젝트를 생성합니다.</li>
<li>프로젝트 내에서 데이터를 저장할 Firestore 인스턴스를 테스트 모드로 생성합니다.</li>
<li>google-services.json 파일을 다운로드하여 Flutter 앱 디렉토리, 특히 android/app/ 하위에 배치합니다. 또는 CLI 도구를 사용하여 Firebase 구성을 Flutter 앱과 동기화할 수도 있습니다.</li>
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
<p>Firestore에서 &quot;users&quot;라는 컬렉션을 만들고 다음 형식으로 데이터를 추가하십시오 :</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Location</span> <span class="token punctuation">{</span>
  final double lat<span class="token punctuation">;</span>
  final double lng<span class="token punctuation">;</span>

  <span class="token function">Location</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>lat<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>lng<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  final String name<span class="token punctuation">;</span>
  final Location location<span class="token punctuation">;</span>
  <span class="token function">User</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>location<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 위의 형식은 위도와 경도를 포함하는 Location 클래스와 이름 및 위치를 포함하는 User 클래스를 포함합니다. Firestore의 데이터가</span>
<span class="token comment">// 이 구조를 따르도록하여 플러터 앱과의 적절한 통합을 보장하십시오.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Tech/2024-03-22-Flutterreal-timelocationappusingfirebaseandgooglemap/img/Flutter-real-time-location-app-using-firebase-and-google-map_1.png" alt="Flutter 실시간 위치 추적 앱 구현"></p>
<p>위 좌표 주변의 위치 값을 LatLng(-18.9216855, 47.5725194)로 추가하면 동일한 카메라 뷰에서 모든 사용자를 볼 수 있습니다. 이것은 가짜 데이터일 뿐이지만 실제 애플리케이션에서는 코드에서 관리합니다.</p>
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
<h2 id="_1-3-firestore-구현하기" tabindex="-1"><a class="header-anchor" href="#_1-3-firestore-구현하기" aria-hidden="true">#</a> 1.3 Firestore 구현하기</h2>
<p>Firestore 데이터 관리를 위한 Firestore 서비스를 만들어봅시다. 여기서는 사용자 위치를 업데이트하는 메소드와 Firestore 데이터베이스에서 사용자 목록을 가져오는 스트림 메소드를 정의합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">FirestoreService</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> final _firestore <span class="token operator">=</span> FirebaseFirestore<span class="token punctuation">.</span>instance<span class="token punctuation">;</span>

  <span class="token keyword">static</span> Future<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span> <span class="token function">updateUserLocation</span><span class="token punctuation">(</span>String userId<span class="token punctuation">,</span> LatLng location<span class="token punctuation">)</span> async <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> _firestore<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">'users'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doc</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token string-property property">'location'</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">'lat'</span><span class="token operator">:</span> location<span class="token punctuation">.</span>latitude<span class="token punctuation">,</span> <span class="token string-property property">'lng'</span><span class="token operator">:</span> location<span class="token punctuation">.</span>longitude<span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> on FirebaseException <span class="token function">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">'파이어베이스 에러 발생 $e'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">'에러 발생 $err'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> Stream<span class="token operator">&lt;</span>List<span class="token operator">&lt;</span>User<span class="token operator">>></span> <span class="token function">userCollectionStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> _firestore<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">'users'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">snapshots</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">snapshot</span><span class="token punctuation">)</span> <span class="token operator">=></span>
        snapshot<span class="token punctuation">.</span>docs<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">doc</span><span class="token punctuation">)</span> <span class="token operator">=></span> User<span class="token punctuation">.</span><span class="token function">fromMap</span><span class="token punctuation">(</span>doc<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-4-지오로케이션-구현하기" tabindex="-1"><a class="header-anchor" href="#_1-4-지오로케이션-구현하기" aria-hidden="true">#</a> 1.4 지오로케이션 구현하기</h2>
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
<p>이제 사용자의 위치가 변경될 때 데이터베이스로 위치를 전송해 봅시다. 이를 위해 geolocator 플러그인을 활용할 것입니다. 그러나 사용자의 위치에 액세스하기 전에, permission_handler를 사용하여 필요한 권한을 얻는 것이 중요합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">StreamLocationService</span> <span class="token punctuation">{</span>

   <span class="token keyword">static</span> <span class="token keyword">const</span> LocationSettings _locationSettings <span class="token operator">=</span>
       <span class="token function">LocationSettings</span><span class="token punctuation">(</span>distanceFilter<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">static</span> bool _isLocationGranted <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

   <span class="token keyword">static</span>  Stream<span class="token operator">&lt;</span>Position<span class="token operator">></span><span class="token operator">?</span> <span class="token keyword">get</span> onLocationChanged  <span class="token punctuation">{</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>_isLocationGranted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> Geolocator<span class="token punctuation">.</span><span class="token function">getPositionStream</span><span class="token punctuation">(</span>locationSettings<span class="token operator">:</span> _locationSettings<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
     <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">static</span> Future<span class="token operator">&lt;</span>bool<span class="token operator">></span> <span class="token function">askLocationPermission</span><span class="token punctuation">(</span><span class="token punctuation">)</span> async <span class="token punctuation">{</span>
     _isLocationGranted <span class="token operator">=</span> <span class="token keyword">await</span> Permission<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>isGranted<span class="token punctuation">;</span>
     <span class="token keyword">return</span> _isLocationGranted<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-5-google-지도-화면에-실시간-사용자-위치-추가" tabindex="-1"><a class="header-anchor" href="#_1-5-google-지도-화면에-실시간-사용자-위치-추가" aria-hidden="true">#</a> 1.5 Google 지도 화면에 실시간 사용자 위치 추가:</h2>
<ul>
<li>StreamLocationService 및 FirestoreService를 사용하여 실시간 사용자 추적을 위한 위치 스트림 설정:</li>
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
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code>late <span class="token class-name">StreamSubscription</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Position</span><span class="token punctuation">></span></span><span class="token operator">?</span> locationStreamSubscription<span class="token punctuation">;</span>

<span class="token metadata function">@override</span>
<span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  locationStreamSubscription <span class="token operator">=</span>
      <span class="token class-name">StreamLocationService</span><span class="token punctuation">.</span>onLocationChanged<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span>position<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token class-name">FirestoreService</span><span class="token punctuation">.</span><span class="token function">updateUserLocation</span><span class="token punctuation">(</span>
        <span class="token string-literal"><span class="token string">'nA7DXYrq1hoKumg3q9fu'</span></span><span class="token punctuation">,</span> <span class="token comment">// 하드코딩된 uid이지만, 인증 서비스를 사용할 때 연결된 사용자의 uid입니다</span>
        <span class="token class-name">LatLng</span><span class="token punctuation">(</span>position<span class="token punctuation">.</span>latitude<span class="token punctuation">,</span> position<span class="token punctuation">.</span>longitude<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>구글맵 위젯을 StreamBuilder로 감싸고 스트림 데이터로 마커를 업데이트하십시오:</li>
</ul>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token class-name">StreamBuilder</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span><span class="token punctuation">></span></span><span class="token punctuation">(</span>
    stream<span class="token punctuation">:</span> <span class="token class-name">FirestoreService</span><span class="token punctuation">.</span><span class="token function">userCollectionStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    builder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> snapshot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>snapshot<span class="token punctuation">.</span>hasData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">const</span> <span class="token class-name">Center</span><span class="token punctuation">(</span>
          child<span class="token punctuation">:</span> <span class="token class-name">CircularProgressIndicator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">final</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Marker</span><span class="token punctuation">></span></span> markers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> snapshot<span class="token punctuation">.</span>data<span class="token operator">!</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> user <span class="token operator">=</span> snapshot<span class="token punctuation">.</span>data<span class="token operator">!</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        markers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
          <span class="token class-name">Marker</span><span class="token punctuation">(</span>
            markerId<span class="token punctuation">:</span> <span class="token class-name">MarkerId</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'</span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">user<span class="token punctuation">.</span>name</span><span class="token punctuation">}</span></span><span class="token string"> position </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">i</span></span><span class="token string">'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            icon<span class="token punctuation">:</span> user<span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string-literal"><span class="token string">'stephano'</span></span>
                <span class="token operator">?</span> <span class="token class-name">BitmapDescriptor</span><span class="token punctuation">.</span><span class="token function">defaultMarkerWithHue</span><span class="token punctuation">(</span>
                    <span class="token class-name">BitmapDescriptor</span><span class="token punctuation">.</span>hueRed<span class="token punctuation">,</span>
                  <span class="token punctuation">)</span>
                <span class="token punctuation">:</span> <span class="token class-name">BitmapDescriptor</span><span class="token punctuation">.</span><span class="token function">defaultMarkerWithHue</span><span class="token punctuation">(</span>
                    <span class="token class-name">BitmapDescriptor</span><span class="token punctuation">.</span>hueYellow<span class="token punctuation">,</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
            position<span class="token punctuation">:</span> <span class="token class-name">LatLng</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>location<span class="token punctuation">.</span>lat<span class="token punctuation">,</span> user<span class="token punctuation">.</span>location<span class="token punctuation">.</span>lng<span class="token punctuation">)</span><span class="token punctuation">,</span>
            onTap<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token class-name">GoogleMap</span><span class="token punctuation">(</span>
        initialCameraPosition<span class="token punctuation">:</span> _initialPosition<span class="token punctuation">,</span>
        markers<span class="token punctuation">:</span> markers<span class="token punctuation">,</span>
        onMapCreated<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">GoogleMapController</span> controller<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          _controller<span class="token punctuation">.</span><span class="token function">complete</span><span class="token punctuation">(</span>controller<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>스트림을 dispose하는 것을 잊지 마세요.```</p>
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
<p>md
클래스(MapScreen) 구현이 완료되었습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MapScreen</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function">MapScreen</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token keyword">super</span><span class="token punctuation">.</span>key<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  @override
  State<span class="token operator">&lt;</span>MapScreen<span class="token operator">></span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">MapScreenState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MapScreenState</span> <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token operator">&lt;</span>MapScreen<span class="token operator">></span> <span class="token punctuation">{</span>
  final Completer<span class="token operator">&lt;</span>GoogleMapController<span class="token operator">></span> _controller <span class="token operator">=</span>
      Completer<span class="token operator">&lt;</span>GoogleMapController<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token keyword">const</span> CameraPosition _initialPosition <span class="token operator">=</span> <span class="token function">CameraPosition</span><span class="token punctuation">(</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token function">LatLng</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">18.9216855</span><span class="token punctuation">,</span> <span class="token number">47.5725194</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">// 안타나나리보, 마다가스카르 LatLng 🇲🇬</span>
    <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">14.4746</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  late StreamSubscription<span class="token operator">&lt;</span>Position<span class="token operator">></span><span class="token operator">?</span> locationStreamSubscription<span class="token punctuation">;</span>

  @override
  <span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    locationStreamSubscription <span class="token operator">=</span>
        StreamLocationService<span class="token punctuation">.</span>onLocationChanged<span class="token operator">?.</span><span class="token function">listen</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span>position<span class="token punctuation">)</span> async <span class="token punctuation">{</span>
        <span class="token keyword">await</span> FirestoreService<span class="token punctuation">.</span><span class="token function">updateUserLocation</span><span class="token punctuation">(</span>
          <span class="token string">'nA7DXYrq1hoKumg3q9fu'</span><span class="token punctuation">,</span> <span class="token comment">//하드코딩된 uid이나 이는 인증 서비스를 사용할 때 연결된 사용자의 uid입니다</span>
          <span class="token function">LatLng</span><span class="token punctuation">(</span>position<span class="token punctuation">.</span>latitude<span class="token punctuation">,</span> position<span class="token punctuation">.</span>longitude<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  @override
  Widget <span class="token function">build</span><span class="token punctuation">(</span><span class="token parameter">BuildContext context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">Scaffold</span><span class="token punctuation">(</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> StreamBuilder<span class="token operator">&lt;</span>List<span class="token operator">&lt;</span>User<span class="token operator">>></span><span class="token punctuation">(</span>
        <span class="token literal-property property">stream</span><span class="token operator">:</span> FirestoreService<span class="token punctuation">.</span><span class="token function">userCollectionStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">builder</span><span class="token operator">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> snapshot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>snapshot<span class="token punctuation">.</span>hasData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">const</span> <span class="token function">Center</span><span class="token punctuation">(</span>
              <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">CircularProgressIndicator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          final Set<span class="token operator">&lt;</span>Marker<span class="token operator">></span> markers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
          <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> snapshot<span class="token punctuation">.</span>data<span class="token operator">!</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            final user <span class="token operator">=</span> snapshot<span class="token punctuation">.</span>data<span class="token operator">!</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            markers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
              <span class="token function">Marker</span><span class="token punctuation">(</span>
                <span class="token literal-property property">markerId</span><span class="token operator">:</span> <span class="token function">MarkerId</span><span class="token punctuation">(</span><span class="token string">'${user.name} position $i'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">icon</span><span class="token operator">:</span> user<span class="token punctuation">.</span>name <span class="token operator">==</span> <span class="token string">'stephano'</span>
                    <span class="token operator">?</span> BitmapDescriptor<span class="token punctuation">.</span><span class="token function">defaultMarkerWithHue</span><span class="token punctuation">(</span>
                        BitmapDescriptor<span class="token punctuation">.</span>hueRed<span class="token punctuation">,</span>
                      <span class="token punctuation">)</span>
                    <span class="token operator">:</span> BitmapDescriptor<span class="token punctuation">.</span><span class="token function">defaultMarkerWithHue</span><span class="token punctuation">(</span>
                        BitmapDescriptor<span class="token punctuation">.</span>hueYellow<span class="token punctuation">,</span>
                      <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token function">LatLng</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>location<span class="token punctuation">.</span>lat<span class="token punctuation">,</span> user<span class="token punctuation">.</span>location<span class="token punctuation">.</span>lng<span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token function-variable function">onTap</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">return</span> <span class="token function">GoogleMap</span><span class="token punctuation">(</span>
            <span class="token literal-property property">initialCameraPosition</span><span class="token operator">:</span> _initialPosition<span class="token punctuation">,</span>
            <span class="token literal-property property">markers</span><span class="token operator">:</span> markers<span class="token punctuation">,</span>
            <span class="token literal-property property">onMapCreated</span><span class="token operator">:</span> <span class="token punctuation">(</span>GoogleMapController controller<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              _controller<span class="token punctuation">.</span><span class="token function">complete</span><span class="token punctuation">(</span>controller<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  @override
  <span class="token keyword">void</span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    locationStreamSubscription<span class="token operator">?.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
