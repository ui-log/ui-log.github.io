<template><div><p>플러터 앱에 구글 지도를 추가하고 지루한 마커를 멋진 것으로 바꿔 봅시다.</p>
<p><img src="@source/docs/Tech/2024-03-23-FlutterGoogleMapwithCustomMarker/img/Flutter-—-Google-Map-with-Custom-Marker📍_0.png" alt="Flutter-—-Google-Map-with-Custom-Marker"></p>
<h2 id="api-키-가져오기" tabindex="-1"><a class="header-anchor" href="#api-키-가져오기" aria-hidden="true">#</a> API 키 가져오기</h2>
<p>플러터 애플리케이션에서 구글 지도를 사용하려면 Google Maps 플랫폼과 API 프로젝트를 구성해야 합니다.</p>
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
<li>구글 맵스 플랫폼에 접속해 ` 새 프로젝트를 생성하거나 기존 프로젝트를 사용하세요.</li>
<li>라이브러리 페이지에서 ` &quot;Maps SDK&quot;를 검색하세요.</li>
<li>Maps SDK for iOS를 클릭하고 활성화를 선택하세요.</li>
<li>Maps SDK for Android를 클릭하고 활성화를 선택하세요.</li>
<li>자격 증명 페이지에서 자격 증명 생성을 선택하고 API 키를 생성하세요. (새로 생성된 API 키가 표시됩니다.)</li>
<li>API 키가 자격 증명 페이지의 API 키 아래에 나열됩니다. 이름을 바꾸려면 편집 아이콘을 클릭하세요. (팁: 제품에서 사용하기 전에 API 키를 제한하는 것이 좋습니다.)</li>
</ul>
<p>API 키를 가져오는 데 문제가 있다면, 여기 비디오를 확인해보세요👇</p>
<h2 id="google-maps-flutter-패키지를-종속성으로-추가하기" tabindex="-1"><a class="header-anchor" href="#google-maps-flutter-패키지를-종속성으로-추가하기" aria-hidden="true">#</a> Google Maps Flutter 패키지를 종속성으로 추가하기</h2>
<p>Flutter에서 패키지를 사용하면 추가 기능을 추가할 수 있습니다. 다음 명령을 실행하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>flutter pub add google_maps_flutter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>또는 의존성 아래 패키지를 추가하기</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">dependencies</span><span class="token operator">:</span>
  <span class="token literal-property property">google_maps_flutter</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token number">2.2</span><span class="token number">.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="안드로이드-앱에-api-키-추가하기" tabindex="-1"><a class="header-anchor" href="#안드로이드-앱에-api-키-추가하기" aria-hidden="true">#</a> 안드로이드 앱에 API 키 추가하기</h2>
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
<p>안드로이드 앱에 API 키를 추가하려면 android/app/src/main 내에서 AndroidManifest.xml 파일을 편집하세요. 이전 단계에서 생성된 API 키를 포함하는 단일 meta-data 항목을 application 노드 내에 추가하십시오.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>manifest <span class="token operator">...</span>
  <span class="token operator">&lt;</span>application <span class="token operator">...</span>
    <span class="token operator">&lt;</span>meta<span class="token operator">-</span>data android<span class="token operator">:</span>name<span class="token operator">=</span><span class="token string">"com.google.android.geo.API_KEY"</span>
               <span class="token literal-property property">android</span><span class="token operator">:</span>value<span class="token operator">=</span><span class="token string">"여기에 키 입력"</span><span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또한 android/app/build.gradle에서 minSdkVersion을 20으로 설정하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>android <span class="token punctuation">{</span>
    defaultConfig <span class="token punctuation">{</span>
        minSdkVersion <span class="token number">20</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="ios-앱에-api-키-추가하기" tabindex="-1"><a class="header-anchor" href="#ios-앱에-api-키-추가하기" aria-hidden="true">#</a> iOS 앱에 API 키 추가하기</h2>
<p>iOS 앱에 API 키를 추가하려면 ios/Runner 폴더의 AppDelegate.swift 파일을 편집하세요. 아래 코드로 전체 코드를 교체해주세요 👇</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> UIKit
<span class="token keyword">import</span> Flutter
<span class="token keyword">import</span> GoogleMaps  <span class="token comment">// 이 import 추가</span>

@UIApplicationMain
@objc <span class="token keyword">class</span> <span class="token class-name">AppDelegate</span><span class="token operator">:</span> FlutterAppDelegate <span class="token punctuation">{</span>
  override func <span class="token function">application</span><span class="token punctuation">(</span>
    _ application<span class="token operator">:</span> UIApplication<span class="token punctuation">,</span>
    didFinishLaunchingWithOptions launchOptions<span class="token operator">:</span> <span class="token punctuation">[</span>UIApplication<span class="token punctuation">.</span>LaunchOptionsKey<span class="token operator">:</span> Any<span class="token punctuation">]</span><span class="token operator">?</span>
  <span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> Bool <span class="token punctuation">{</span>
    GeneratedPluginRegistrant<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token keyword">with</span><span class="token operator">:</span> self<span class="token punctuation">)</span>

    <span class="token comment">// TODO: 여기에 Google Maps API 키를 추가하세요</span>
    GMSServices<span class="token punctuation">.</span><span class="token function">provideAPIKey</span><span class="token punctuation">(</span><span class="token string">"YOUR-API-KEY"</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">application</span><span class="token punctuation">(</span>application<span class="token punctuation">,</span> <span class="token literal-property property">didFinishLaunchingWithOptions</span><span class="token operator">:</span> launchOptions<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="google-지도-화면-생성" tabindex="-1"><a class="header-anchor" href="#google-지도-화면-생성" aria-hidden="true">#</a> Google 지도 화면 생성</h2>
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
<p>지금은 화면에 지도를 표시하는 시간입니다. 지도를 표시하기 위해 initialCameraPosition이 필요합니다. 사용자의 현재 위치가 될 수도 있지만, 단순화를 위해 강력한 값을 사용했습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'package:flutter/material.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'package:google_maps_flutter/google_maps_flutter.dart'</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MapScreen</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function">MapScreen</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token keyword">super</span><span class="token punctuation">.</span>key<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  @override
  State<span class="token operator">&lt;</span>MapScreen<span class="token operator">></span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">_MapScreenState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">_MapScreenState</span> <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token operator">&lt;</span>MapScreen<span class="token operator">></span> <span class="token punctuation">{</span>
  LatLng initialLocation <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token function">LatLng</span><span class="token punctuation">(</span><span class="token number">37.422131</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">122.084801</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 할 일: 사용자 정의 마커 추가</span>

  @override
  Widget <span class="token function">build</span><span class="token punctuation">(</span><span class="token parameter">BuildContext context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">Scaffold</span><span class="token punctuation">(</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token function">GoogleMap</span><span class="token punctuation">(</span>
        <span class="token literal-property property">initialCameraPosition</span><span class="token operator">:</span> <span class="token function">CameraPosition</span><span class="token punctuation">(</span>
          <span class="token literal-property property">target</span><span class="token operator">:</span> initialLocation<span class="token punctuation">,</span>
          <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// 할 일: 마커 추가</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Tech/2024-03-23-FlutterGoogleMapwithCustomMarker/img/Flutter-—-Google-Map-with-Custom-Marker📍_1.png" alt="Flutter-—-Google-Map-with-Custom-Marker📍_1.png"></p>
<h2 id="지도에-마커-추가" tabindex="-1"><a class="header-anchor" href="#지도에-마커-추가" aria-hidden="true">#</a> 지도에 마커 추가</h2>
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
<p>마커는 특정 위치를 식별하는 데 유용합니다. 지도에 여러 마커를 추가할 수 있어요. 'To DO: add markers'를 아래와 같이 바꿔주세요 👇</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">markers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">Marker</span><span class="token punctuation">(</span>
    <span class="token literal-property property">markerId</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">MarkerId</span><span class="token punctuation">(</span><span class="token string">"marker1"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">LatLng</span><span class="token punctuation">(</span><span class="token number">37.422131</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">122.084801</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">draggable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">onDragEnd</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 새 위치는 value에 저장돼요</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 할 일: 커스텀 마커 아이콘</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token function">Marker</span><span class="token punctuation">(</span>
    <span class="token literal-property property">markerId</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">MarkerId</span><span class="token punctuation">(</span><span class="token string">"marker2"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">LatLng</span><span class="token punctuation">(</span><span class="token number">37.415768808487435</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">122.08440050482749</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>사용자가 마커 위치를 변경할 수 있게 하려면 draggable를 true로 설정하세요. 기본값은 false입니다. onDragEnd는 새 위치 LatLng를 제공합니다.</p>
<img src="@source/docs/Tech/2024-03-23-FlutterGoogleMapwithCustomMarker/img/Flutter-—-Google-Map-with-Custom-Marker📍_2.png" />
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
<h2 id="맵에-사용자-정의-이미지-마커-설정하기" tabindex="-1"><a class="header-anchor" href="#맵에-사용자-정의-이미지-마커-설정하기" aria-hidden="true">#</a> 맵에 사용자 정의 이미지 마커 설정하기</h2>
<p>에셋에 마커 이미지를 추가하고, 마커 아이콘을 설정하는 메소드를 생성했어요. 아래 코드로 ToDo: 사용자 정의 마커 추가하세요 👇</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>BitmapDescriptor markerIcon <span class="token operator">=</span> BitmapDescriptor<span class="token punctuation">.</span>defaultMarker<span class="token punctuation">;</span>
@override
<span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">addCustomIcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">addCustomIcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  BitmapDescriptor<span class="token punctuation">.</span><span class="token function">fromAssetImage</span><span class="token punctuation">(</span>
          <span class="token keyword">const</span> <span class="token function">ImageConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"assets/Location_marker.png"</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span>icon<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        markerIcon <span class="token operator">=</span> icon<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>마커 아이디가 marker1인 첫 번째 마커로 돌아갑니다. 아이콘을 markerIcon으로 설정해주세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Marker</span><span class="token punctuation">(</span>
  <span class="token literal-property property">markerId</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">MarkerId</span><span class="token punctuation">(</span><span class="token string">"marker1"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">LatLng</span><span class="token punctuation">(</span><span class="token number">37.422131</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">122.084801</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">draggable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">onDragEnd</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// value is the new position</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">icon</span><span class="token operator">:</span> markerIcon<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-03-23-FlutterGoogleMapwithCustomMarker/img/Flutter-—-Google-Map-with-Custom-Marker📍_3.png" />
</div></template>
