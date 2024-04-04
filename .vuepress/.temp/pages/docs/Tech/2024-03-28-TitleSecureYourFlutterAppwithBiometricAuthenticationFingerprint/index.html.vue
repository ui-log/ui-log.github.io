<template><div><p>요즘의 디지턈 세계에서는 보안이 매우 중요합니다, 특히 민감한 정보를 다루는 모바일 애플리케이션에서는 더욱 그렇습니다. 지문 인식과 같은 생체 인증은 사용자를 인증하는 편리하고 안전한 방법을 제공합니다. 이 기사에서는 Flutter 앱에 생체 인증(지문)을 통합하는 방법을 알아보겠습니다.</p>
<p><img src="@source/docs/Tech/2024-03-28-TitleSecureYourFlutterAppwithBiometricAuthenticationFingerprint/img/TitleSecureYourFlutterAppwithBiometricAuthenticationFingerprint_0.png" alt="이미지"></p>
<p>소개</p>
<p>생체 인증은 사용 편의성과 높은 수준의 보안 때문에 점점 인기가 높아지고 있습니다. Flutter는 Google의 UI 툴킷으로, 단일 코드베이스에서 모바일, 웹, 데스크톱용으로 네이티브로 컴파일된 애플리케이션을 개발하기 위한 훌륭한 지원을 제공합니다. 앱에 생체 인증을 통합하는 데 탁월한 지원을 제공합니다.</p>
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
<p>전제 조건</p>
<p>시작하기 전에 다음 사항을 준비하세요:</p>
<ul>
<li>플러터 SDK가 기기에 설치되어 있어야 합니다.</li>
<li>플러터와 다트 프로그래밍 언어에 대한 기본적인 이해가 필요합니다.</li>
<li>지문 센서가 탑재된 기기(테스트용)가 필요합니다.</li>
</ul>
<p>플러터 프로젝트 설정하기</p>
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
<p>먼저 새로운 Flutter 프로젝트를 생성하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>flutter create biometric_authentication
cd biometric_authentication          
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>다음으로, pubspec.yaml 파일에 local_auth 패키지를 추가해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">dependencies</span><span class="token operator">:</span>
  <span class="token literal-property property">flutter</span><span class="token operator">:</span>
    <span class="token literal-property property">sdk</span><span class="token operator">:</span> flutter
  <span class="token literal-property property">local_auth</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token number">2.0</span><span class="token number">.1</span>
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
<p>그럼, flutter pub get을 실행하여 패키지를 설치하십시오.</p>
<p>바이오메트릭 인증 구현하기</p>
<p>main.dart 파일을 열고 필요한 라이브러리를 import하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'package:flutter/material.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'package:local_auth/local_auth.dart'</span><span class="token punctuation">;</span>
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
<p>생체 인증을 처리하는 새로운 클래스를 만들어 보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">BiometricAuth</span> <span class="token punctuation">{</span>
  final LocalAuthentication _localAuthentication <span class="token operator">=</span> <span class="token function">LocalAuthentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  Future<span class="token operator">&lt;</span>bool<span class="token operator">></span> <span class="token function">authenticate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> async <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">await</span> _localAuthentication<span class="token punctuation">.</span><span class="token function">authenticate</span><span class="token punctuation">(</span>
        <span class="token literal-property property">localizedReason</span><span class="token operator">:</span> <span class="token string">'계정에 액세스하려면 인증하세요'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">biometricOnly</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">useErrorDialogs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">stickyAuth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">'에러: $e'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  Future<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span> <span class="token function">cancelAuthentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span> async <span class="token punctuation">{</span>
    <span class="token keyword">await</span> _localAuthentication<span class="token punctuation">.</span><span class="token function">stopAuthentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>생체 인증 사용하기</p>
<p>앱의 UI에서 authenticate() 메소드를 호출하여 사용자를 인증할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  final BiometricAuth _biometricAuth <span class="token operator">=</span> <span class="token function">BiometricAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  @override
  Widget <span class="token function">build</span><span class="token punctuation">(</span><span class="token parameter">BuildContext context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">MaterialApp</span><span class="token punctuation">(</span>
      <span class="token literal-property property">home</span><span class="token operator">:</span> <span class="token function">Scaffold</span><span class="token punctuation">(</span>
        <span class="token literal-property property">appBar</span><span class="token operator">:</span> <span class="token function">AppBar</span><span class="token punctuation">(</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">'생체 인증'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token function">Center</span><span class="token punctuation">(</span>
          <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">ElevatedButton</span><span class="token punctuation">(</span>
            <span class="token literal-property property">onPressed</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> async <span class="token punctuation">{</span>
              bool isAuthenticated <span class="token operator">=</span> <span class="token keyword">await</span> _biometricAuth<span class="token punctuation">.</span><span class="token function">authenticate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>isAuthenticated<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 인증 성공</span>
                <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">'인증 성공'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// 인증 실패</span>
                <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">'인증 실패'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">'인증하기'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>결론</p>
<p>이번 튜토리얼에서는 local_auth 패키지를 사용하여 Flutter 앱에 생체 인증(지문)을 통합하는 방법을 배웠습니다. 생체 인증은 사용자를 안전하고 편리하게 인증하는 방법을 제공하여 Flutter 애플리케이션의 전체 보안성을 향상시킵니다.</p>
<p>Github 링크: https://github.com/SalimZ04/bio_auth_local.git</p>
</div></template>
