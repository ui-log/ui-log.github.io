<template><div><p>이 레슨을 통해 플러터에서 Google 지도를 사용하는 방법과 사용자 정의 이미지 마커 설정 및 경로 방향 폴리선을 그리는 방법을 배우게 될 거에요. 지도에 실시간 위치 업데이트를 추가하세요.</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1280/1*033cnsS3JIBh_Z847oqFSw.gif" alt="Google Maps in Flutter"></p>
<h2 id="초기-설정-⚙️" tabindex="-1"><a class="header-anchor" href="#초기-설정-⚙️" aria-hidden="true">#</a> 초기 설정 ⚙️</h2>
<p>안드로이드 및 iOS 모두에서 위치 추적을 가능하게 하려면, 패키지의 README에서 안드로이드 매니페스트 파일과 iOS Info.plist에 대한 단계를 따라 환경을 적절히 준비하세요.</p>
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
<p>설정이 완료되면 의존성은 아래와 같이 보입니다 👇</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">dependencies</span><span class="token operator">:</span>
  <span class="token literal-property property">flutter</span><span class="token operator">:</span>
    <span class="token literal-property property">sdk</span><span class="token operator">:</span> flutter
  <span class="token literal-property property">cupertino_icons</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token number">1.0</span><span class="token number">.2</span>
  <span class="token literal-property property">flutter_polyline_points</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token number">1.0</span><span class="token number">.0</span>
  <span class="token literal-property property">google_maps_flutter</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token number">2.1</span><span class="token number">.7</span>
  <span class="token literal-property property">location</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token number">4.4</span><span class="token number">.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="구글-지도-🗺" tabindex="-1"><a class="header-anchor" href="#구글-지도-🗺" aria-hidden="true">#</a> 구글 지도 🗺</h2>
<p>OrderTrackingPage라는 StatefulWidget을 만들어 해당 State 클래스를 생성하세요. 필요한 패키지를 가져오고 이 튜토리얼을 위해 하드코딩된 출발지 및 목적지 위치 정보도 추가해주세요.</p>
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
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'dart:async'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:flutter/material.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:google_maps_flutter/google_maps_flutter.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">OrderTrackingPage</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">OrderTrackingPage</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OrderTrackingPage</span><span class="token punctuation">></span></span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token class-name">OrderTrackingPageState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">OrderTrackingPageState</span> <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OrderTrackingPage</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">Completer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">GoogleMapController</span><span class="token punctuation">></span></span> _controller <span class="token operator">=</span> <span class="token class-name">Completer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token keyword">const</span> <span class="token class-name">LatLng</span> sourceLocation <span class="token operator">=</span> <span class="token class-name">LatLng</span><span class="token punctuation">(</span><span class="token number">37.33500926</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">122.03272188</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token keyword">const</span> <span class="token class-name">LatLng</span> destination <span class="token operator">=</span> <span class="token class-name">LatLng</span><span class="token punctuation">(</span><span class="token number">37.33429383</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">122.06600055</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
      body<span class="token punctuation">:</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>
        child<span class="token punctuation">:</span> <span class="token class-name">GoogleMap</span><span class="token punctuation">(</span>
          initialCameraPosition<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">CameraPosition</span><span class="token punctuation">(</span>
            target<span class="token punctuation">:</span> sourceLocation<span class="token punctuation">,</span>
            zoom<span class="token punctuation">:</span> <span class="token number">13.5</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          markers<span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token class-name">Marker</span><span class="token punctuation">(</span>
              markerId<span class="token punctuation">:</span> <span class="token class-name">MarkerId</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"source"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              position<span class="token punctuation">:</span> sourceLocation<span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">Marker</span><span class="token punctuation">(</span>
              markerId<span class="token punctuation">:</span> <span class="token class-name">MarkerId</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"destination"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              position<span class="token punctuation">:</span> destination<span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          onMapCreated<span class="token punctuation">:</span> <span class="token punctuation">(</span>mapController<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            _controller<span class="token punctuation">.</span><span class="token function">complete</span><span class="token punctuation">(</span>mapController<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<img src="@source/docs/Tech/2024-03-23-FlutterGoogleMapWithLiveLocationTrackingUberStyle/img/Flutter-Google-Map-With-Live-Location-Tracking-—-Uber-Style_1.png" />
<h2 id="경로-방향-그리기-〰" tabindex="-1"><a class="header-anchor" href="#경로-방향-그리기-〰" aria-hidden="true">#</a> 경로 방향 그리기 〰</h2>
<p>다음으로 할 일은 목적지에서 출발지로 선을 그리는 것이에요. polylineCoordinates라는 빈 목록을 만들고 PolylinePoints의 인스턴스를 만들어 getPolyPoints라고 불리는 비동기 함수를 생성해보세요. getRouteBetweenCoordinates 메소드는 폴리라인 포인트 목록을 반환해요. Google API 키, 출발지 및 목적지 위치가 필요해요. 포인트가 비어 있지 않다면, 그것들을 polylineCoordinates에 저장해볼게요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>List<span class="token operator">&lt;</span>LatLng<span class="token operator">></span> polylineCoordinates <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">getPolyPoints</span><span class="token punctuation">(</span><span class="token punctuation">)</span> async <span class="token punctuation">{</span>
  PolylinePoints polylinePoints <span class="token operator">=</span> <span class="token function">PolylinePoints</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  PolylineResult result <span class="token operator">=</span> <span class="token keyword">await</span> polylinePoints<span class="token punctuation">.</span><span class="token function">getRouteBetweenCoordinates</span><span class="token punctuation">(</span>
    google_api_key<span class="token punctuation">,</span> <span class="token comment">// 여러분의 구글 지도 키</span>
    <span class="token function">PointLatLng</span><span class="token punctuation">(</span>sourceLocation<span class="token punctuation">.</span>latitude<span class="token punctuation">,</span> sourceLocation<span class="token punctuation">.</span>longitude<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">PointLatLng</span><span class="token punctuation">(</span>destination<span class="token punctuation">.</span>latitude<span class="token punctuation">,</span> destination<span class="token punctuation">.</span>longitude<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>points<span class="token punctuation">.</span>isNotEmpty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result<span class="token punctuation">.</span>points<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token parameter">PointLatLng point</span><span class="token punctuation">)</span> <span class="token operator">=></span> polylineCoordinates<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
        <span class="token function">LatLng</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>latitude<span class="token punctuation">,</span> point<span class="token punctuation">.</span>longitude<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@override
<span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">getPolyPoints</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GoogleMap 위젯으로 돌아가서 폴리라인을 정의하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">GoogleMap</span><span class="token punctuation">(</span>
<span class="token operator">...</span>
  <span class="token literal-property property">polylines</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">Polyline</span><span class="token punctuation">(</span>
      <span class="token literal-property property">polylineId</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">PolylineId</span><span class="token punctuation">(</span><span class="token string">"route"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">points</span><span class="token operator">:</span> polylineCoordinates<span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">Color</span><span class="token punctuation">(</span><span class="token number">0xFF7B61FF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-03-23-FlutterGoogleMapWithLiveLocationTrackingUberStyle/img/Flutter-Google-Map-With-Live-Location-Tracking-—-Uber-Style_2.png" />
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
<h2 id="지도에서-실시간-위치-업데이트-🔴" tabindex="-1"><a class="header-anchor" href="#지도에서-실시간-위치-업데이트-🔴" aria-hidden="true">#</a> 지도에서 실시간 위치 업데이트 🔴</h2>
<p>이제 가장 흥미로운 부분에 왔어요. 기기의 위치가 필요해요. currentLocation이라는 널 가능한 변수를 만들고 getCurrentLocation이라는 함수를 작성해주세요. 함수 안에서 Location의 인스턴스를 생성하세요. 위치를 받으면 현재 위치를 해당 위치로 설정하세요. 위치 변경 시에는 현재 위치를 업데이트하세요. 지도에 보이게 하려면 setState를 호출하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>LocationData<span class="token operator">?</span> currentLocation<span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">getCurrentLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> async <span class="token punctuation">{</span>
    Location location <span class="token operator">=</span> <span class="token function">Location</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    location<span class="token punctuation">.</span><span class="token function">getLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span>location<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            currentLocation <span class="token operator">=</span> location<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    GoogleMapController googleMapController <span class="token operator">=</span> <span class="token keyword">await</span> _controller<span class="token punctuation">.</span>future<span class="token punctuation">;</span>
    location<span class="token punctuation">.</span>onLocationChanged<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span>newLoc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            currentLocation <span class="token operator">=</span> newLoc<span class="token punctuation">;</span>
            googleMapController<span class="token punctuation">.</span><span class="token function">animateCamera</span><span class="token punctuation">(</span>
                CameraUpdate<span class="token punctuation">.</span><span class="token function">newCameraPosition</span><span class="token punctuation">(</span>
                    <span class="token function">CameraPosition</span><span class="token punctuation">(</span>
                        <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">13.5</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token function">LatLng</span><span class="token punctuation">(</span>
                            newLoc<span class="token punctuation">.</span>latitude<span class="token operator">!</span><span class="token punctuation">,</span>
                            newLoc<span class="token punctuation">.</span>longitude<span class="token operator">!</span><span class="token punctuation">,</span>
                        <span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>반드시 initState에서 getCurrentLocation을 호출해주세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">getPolyPoints</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">getCurrentLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>만약 currentLocation이 null이면 로딩 텍스트가 표시됩니다. 또한, currentLocation을 위한 다른 마커/핀을 추가하고 초기 카메라 위치를 현재 위치로 변경합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">body</span><span class="token operator">:</span> currentLocation <span class="token operator">==</span> <span class="token keyword">null</span>
  <span class="token operator">?</span> <span class="token keyword">const</span> <span class="token function">Center</span><span class="token punctuation">(</span>child<span class="token operator">:</span> <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">"로딩 중"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token operator">:</span> <span class="token function">GoogleMap</span><span class="token punctuation">(</span>
      <span class="token literal-property property">initialCameraPosition</span><span class="token operator">:</span> <span class="token function">CameraPosition</span><span class="token punctuation">(</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token function">LatLng</span><span class="token punctuation">(</span>
            currentLocation<span class="token operator">!</span><span class="token punctuation">.</span>latitude<span class="token operator">!</span><span class="token punctuation">,</span> currentLocation<span class="token operator">!</span><span class="token punctuation">.</span>longitude<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">13.5</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">markers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">Marker</span><span class="token punctuation">(</span>
          <span class="token literal-property property">markerId</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">MarkerId</span><span class="token punctuation">(</span><span class="token string">"currentLocation"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token function">LatLng</span><span class="token punctuation">(</span>
              currentLocation<span class="token operator">!</span><span class="token punctuation">.</span>latitude<span class="token operator">!</span><span class="token punctuation">,</span> currentLocation<span class="token operator">!</span><span class="token punctuation">.</span>longitude<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">const</span> <span class="token function">Marker</span><span class="token punctuation">(</span>
          <span class="token literal-property property">markerId</span><span class="token operator">:</span> <span class="token function">MarkerId</span><span class="token punctuation">(</span><span class="token string">"source"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> sourceLocation<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">const</span> <span class="token function">Marker</span><span class="token punctuation">(</span>
          <span class="token literal-property property">markerId</span><span class="token operator">:</span> <span class="token function">MarkerId</span><span class="token punctuation">(</span><span class="token string">"destination"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> destination<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">onMapCreated</span><span class="token operator">:</span> <span class="token punctuation">(</span>mapController<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        _controller<span class="token punctuation">.</span><span class="token function">complete</span><span class="token punctuation">(</span>mapController<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">polylines</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">Polyline</span><span class="token punctuation">(</span>
          <span class="token literal-property property">polylineId</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">PolylineId</span><span class="token punctuation">(</span><span class="token string">"route"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">points</span><span class="token operator">:</span> polylineCoordinates<span class="token punctuation">,</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">Color</span><span class="token punctuation">(</span><span class="token number">0xFF7B61FF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://miro.medium.com/v2/resize:fit:1280/1*lq4JEPj6y4N7RTP1wNMjdg.gif" />
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
<p>기능으로 이동한 다음 위치를 가리킬 때 &quot;고속도로 주행&quot;을 선택하세요. 나는 이 고속도로 주행에 따라 출발지 및 도착지 위치를 사용하고 있어.</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*RgGLPkJW8CYo6DjHfY-VYw.gif" alt="이미지"></p>
<p>만약 윈도우를 사용하거나 안드로이드 시뮬레이터를 사용 중이라면, 아래 세 점을 클릭하고 위치에 있다는 것을 확인하세요. 출발지가 Google Plex인 것으로 가정해보죠. sourceLocation을 이 좌표로 변경하고 도착지가 Microsoft 실리콘 밸리 캠퍼스인 경우 이 위치로 변경하세요. 이제 &quot;routes&quot; 탭을 클릭하고 시작점으로 Microsoft 실리콘 밸리와 Google Plex를 검색하세요. 경로를 저장하고, 재생 속도를 설정하고 경로 재생을 클릭하세요. 현재 위치가 이동 중이군요, 이것이 우리가 원하는 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">static</span> <span class="token keyword">const</span> LatLng sourceLocation <span class="token operator">=</span> 여러분이 선택한 위치
<span class="token keyword">static</span> <span class="token keyword">const</span> LatLng destination <span class="token operator">=</span> 여러분이 선택한 위치
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
<h2 id="커스텀-마커-핀-추가하기-📍" tabindex="-1"><a class="header-anchor" href="#커스텀-마커-핀-추가하기-📍" aria-hidden="true">#</a> 커스텀 마커/핀 추가하기 📍</h2>
<p>출발지, 목적지, 현재 위치 아이콘이 동일합니다. 이제 커스텤 마커/핀을 사용해봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>BitmapDescriptor sourceIcon <span class="token operator">=</span> BitmapDescriptor<span class="token punctuation">.</span>defaultMarker<span class="token punctuation">;</span>
BitmapDescriptor destinationIcon <span class="token operator">=</span> BitmapDescriptor<span class="token punctuation">.</span>defaultMarker<span class="token punctuation">;</span>
BitmapDescriptor currentLocationIcon <span class="token operator">=</span> BitmapDescriptor<span class="token punctuation">.</span>defaultMarker<span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">setCustomMarkerIcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  BitmapDescriptor<span class="token punctuation">.</span><span class="token function">fromAssetImage</span><span class="token punctuation">(</span>
          ImageConfiguration<span class="token punctuation">.</span>empty<span class="token punctuation">,</span> <span class="token string">"assets/Pin_source.png"</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span>icon<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      sourceIcon <span class="token operator">=</span> icon<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  BitmapDescriptor<span class="token punctuation">.</span><span class="token function">fromAssetImage</span><span class="token punctuation">(</span>
          ImageConfiguration<span class="token punctuation">.</span>empty<span class="token punctuation">,</span> <span class="token string">"assets/Pin_destination.png"</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span>icon<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      destinationIcon <span class="token operator">=</span> icon<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  BitmapDescriptor<span class="token punctuation">.</span><span class="token function">fromAssetImage</span><span class="token punctuation">(</span>
          ImageConfiguration<span class="token punctuation">.</span>empty<span class="token punctuation">,</span> <span class="token string">"assets/Badge.png"</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span>icon<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currentLocationIcon <span class="token operator">=</span> icon<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>initState에서 setCustomMarkerIcon을 호출하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token function">getPolyPoints</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">getCurrentLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setCustomMarkerIcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>마지막으로, 마커 아이콘을 설정합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">GoogleMap</span><span class="token punctuation">(</span>
<span class="token operator">...</span><span class="token punctuation">.</span>
<span class="token literal-property property">markers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token function">Marker</span><span class="token punctuation">(</span>
<span class="token literal-property property">markerId</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">MarkerId</span><span class="token punctuation">(</span><span class="token string">"currentLocation"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token literal-property property">icon</span><span class="token operator">:</span> currentLocationIcon<span class="token punctuation">,</span>
<span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token function">LatLng</span><span class="token punctuation">(</span>
currentLocation<span class="token operator">!</span><span class="token punctuation">.</span>latitude<span class="token operator">!</span><span class="token punctuation">,</span> currentLocation<span class="token operator">!</span><span class="token punctuation">.</span>longitude<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token function">Marker</span><span class="token punctuation">(</span>
<span class="token literal-property property">markerId</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">MarkerId</span><span class="token punctuation">(</span><span class="token string">"source"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token literal-property property">icon</span><span class="token operator">:</span> sourceIcon<span class="token punctuation">,</span>
<span class="token literal-property property">position</span><span class="token operator">:</span> sourceLocation<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token function">Marker</span><span class="token punctuation">(</span>
<span class="token literal-property property">markerId</span><span class="token operator">:</span> <span class="token function">MarkerId</span><span class="token punctuation">(</span><span class="token string">"destination"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token literal-property property">icon</span><span class="token operator">:</span> destinationIcon<span class="token punctuation">,</span>
<span class="token literal-property property">position</span><span class="token operator">:</span> destination<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://miro.medium.com/v2/resize:fit:1280/1*033cnsS3JIBh_Z847oqFSw.gif" />
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
</div></template>
