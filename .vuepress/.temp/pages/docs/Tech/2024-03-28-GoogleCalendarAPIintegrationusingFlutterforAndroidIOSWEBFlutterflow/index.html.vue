<template><div><p><img src="@source/docs/Tech/2024-03-28-GoogleCalendarAPIintegrationusingFlutterforAndroidIOSWEBFlutterflow/img/GoogleCalendarAPIintegrationusingFlutterforAndroidIOSWEB-Flutterflow_0.png" alt="사진"></p>
<p>Google Calendar API를 사용하기 위한 Google Cloud 계정 설정에는 OAuth 2.0 클라이언트 ID, 서비스 계정 및 OAuth 동의 화면 구성을 포함한 여러 단계가 필요합니다.</p>
<p>아래는 Web, Android 및 iOS 플랫폼용으로 이러한 구성 요소를 설정하는 상세 가이드입니다:</p>
<ol>
<li>Google Cloud 프로젝트 생성:</li>
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
<p>• Google Cloud Console로 이동하세요.</p>
<p>새 프로젝트를 생성하거나 기존 프로젝트를 선택하세요.</p>
<p><img src="@source/docs/Tech/2024-03-28-GoogleCalendarAPIintegrationusingFlutterforAndroidIOSWEBFlutterflow/img/GoogleCalendarAPIintegrationusingFlutterforAndroidIOSWEB-Flutterflow_1.png" alt="이미지"></p>
<ol start="2">
<li>OAuth 동의 화면 설정:</li>
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
<p>Web용 (OAuth 2.0 클라이언트 ID):</p>
<p>OAuth 동의 화면:</p>
<p>Google Cloud 콘솔의 &quot;OAuth 동의 화면&quot; 섹션으로 이동하고 &quot;외부&quot;를 선택해주세요.</p>
<p><img src="@source/docs/Tech/2024-03-28-GoogleCalendarAPIintegrationusingFlutterforAndroidIOSWEBFlutterflow/img/GoogleCalendarAPIintegrationusingFlutterforAndroidIOSWEB-Flutterflow_2.png" alt="이미지"></p>
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
<p>• 앱 이름, 사용자 지원 이메일, 개발자 연락처 정보 등과 같은 필수 세부 정보를 구성해 주세요.</p>
<ul>
<li>그런 다음 동의 화면에 테스트 사용자를 추가해 주세요.</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-GoogleCalendarAPIintegrationusingFlutterforAndroidIOSWEBFlutterflow/img/GoogleCalendarAPIintegrationusingFlutterforAndroidIOSWEB-Flutterflow_3.png" alt="이미지"></p>
<p>참고: 테스트 중인 사용자는 테스트 중에 추가한 테스트 사용자 목록에 나열된 이메일만 사용할 수 있습니다.</p>
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
<p>OAuth 2.0 클라이언트 ID를 생성하세요:</p>
<p>• &quot;자격 증명(Credentials)&quot; 섹션으로 이동하세요.</p>
<p>• &quot;자격 증명 생성(Create credentials)&quot;을 클릭하고 &quot;OAuth 클라이언트 ID(OAuth client ID)&quot;를 선택하세요.</p>
<p>&quot;웹 응용 프로그램(Web application)&quot;을 선택하세요.</p>
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
<img src="@source/docs/Tech/2024-03-28-GoogleCalendarAPIintegrationusingFlutterforAndroidIOSWEBFlutterflow/img/GoogleCalendarAPIintegrationusingFlutterforAndroidIOSWEB-Flutterflow_4.png" />
<ul>
<li>권한이 부여된 JavaScript 원본 및 리디렉션 URI(앱이 실행될 위치)를 추가하세요.</li>
</ul>
<img src="@source/docs/Tech/2024-03-28-GoogleCalendarAPIintegrationusingFlutterforAndroidIOSWEBFlutterflow/img/GoogleCalendarAPIintegrationusingFlutterforAndroidIOSWEB-Flutterflow_5.png" />
<p>참고: 웹 브라우저에서 플러터 기반 웹 앱 통합을 테스트하려면 URL을 다음과 같이 설정하세요: &quot;http://localhost&quot;</p>
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
<li>웹 애플리케이션 통합을 위해 생성된 클라이언트 ID 및 클라이언트 시크릿을 가져옵니다.</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-GoogleCalendarAPIintegrationusingFlutterforAndroidIOSWEBFlutterflow/img/GoogleCalendarAPIintegrationusingFlutterforAndroidIOSWEB-Flutterflow_6.png" alt="이미지"></p>
<p>Android/iOS용 (OAuth 2.0 클라이언트 ID):</p>
<p>OAuth 동의 화면:</p>
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
<p>• &quot;Web Setup&quot;에서 &quot;OAuth 동의 화면&quot; 섹션으로 이동해주세요.</p>
<p>• 동의 화면 세부 정보를 설정하세요(아래 단계에서 설명한 대로). 이미 Web-애플리케이션을 위해 동의 화면을 구성한 경우는 이 부분을 무시해도 됩니다.</p>
<p>OAuth 2.0 클라이언트 ID 생성:</p>
<p>• &quot;자격 증명&quot; 섹션에서 &quot;자격 증명 만들기&quot;를 클릭하고 &quot;OAuth 클라이언트 ID&quot;를 선택하세요.</p>
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
<p>• &quot;Android&quot; 또는 &quot;iOS&quot;를 선택하세요.</p>
<p>앱의 패키지 이름(Android용) 또는 번들 ID(iOS용)를 추가하세요.</p>
<p><img src="@source/docs/Tech/2024-03-28-GoogleCalendarAPIintegrationusingFlutterforAndroidIOSWEBFlutterflow/img/GoogleCalendarAPIintegrationusingFlutterforAndroidIOSWEB-Flutterflow_7.png" alt="이미지"></p>
<p>참고: 다음 명령을 사용하여 키스토어 구성에 따라 SHA-1 인증서를 얻으세요:</p>
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
<p>keytool -list -v \</p>
<p>-alias androiddebugkey -keystore %USERPROFILE%.android\debug.keystore</p>
<p>• 모바일 애플리케이션 통합을 위해 생성된 클라이언트 ID 및 클라이언트 시크릿을 얻으세요.</p>
<ol start="3">
<li>서비스 계정 (백엔드 서버):</li>
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
<p>참고: 백엔드 서버 설정이 없는 경우 이 구성을 무시하십시오.</p>
<ul>
<li>
<p>서버 측 액세스(백엔드 작업과 같은):</p>
</li>
<li>
<p>서비스 계정 만들기:</p>
</li>
<li>
<p>구글 클라우드 콘솔의 &quot;IAM 및 관리자&quot; &gt; &quot;서비스 계정&quot; 섹션으로 이동하십시오.</p>
</li>
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
<p>• &quot;서비스 계정 만들기&quot;를 클릭하고 안내에 따라 진행해주세요.</p>
<p>• 서비스 계정에 필요한 권한을 부여해주세요(예: 캘린더 읽기/쓰기 권한).</p>
<p>• JSON 형식으로 서비스 계정을 위한 개인 키를 생성해주세요. 이 키는 서버 측 코드에서 인증에 사용됩니다.</p>
<ol start="4">
<li>캘린더 API 활성화:</li>
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
<p>• 클라우드 콘솔의 &quot;라이브러리&quot; 섹션으로 이동해주세요.</p>
<ul>
<li>&quot;Google Calendar API&quot;를 검색하고 프로젝트에 활성화해주세요.</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-GoogleCalendarAPIintegrationusingFlutterforAndroidIOSWEBFlutterflow/img/GoogleCalendarAPIintegrationusingFlutterforAndroidIOSWEB-Flutterflow_8.png" alt="이미지"></p>
<p>중요 사항:</p>
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
<li>플러터 코드의 GoogleCalendarServiceFactory 내부의 클라이언트 ID를 업데이트했는지 확인하세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">GoogleCalendarServiceFactory</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> GoogleCalendarService <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>kIsWeb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 여기에 웹 OAuth 클라이언트 ID를 입력하세요</span>
      <span class="token keyword">return</span> <span class="token function">GoogleCalendarService</span><span class="token punctuation">(</span>
        <span class="token literal-property property">googleSignInCredentials</span><span class="token operator">:</span> <span class="token function">GoogleSignIn</span><span class="token punctuation">(</span>
          <span class="token literal-property property">clientId</span><span class="token operator">:</span>
              <span class="token string">'당신의 안드로이드 ID'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">scopes</span><span class="token operator">:</span> <span class="token operator">&lt;</span>String<span class="token operator">></span><span class="token punctuation">[</span>CalendarApi<span class="token punctuation">.</span>calendarScope<span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Platform<span class="token punctuation">.</span>isAndroid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 안드로이드는 OAuth 클라이언트 ID가 필요하지 않습니다. 참고: 안드로이드용으로 SHA-1 키 생성 후 콘솔에 제출하는 것을 잊지 마세요.</span>
        <span class="token keyword">return</span> <span class="token function">GoogleCalendarService</span><span class="token punctuation">(</span>
          <span class="token literal-property property">googleSignInCredentials</span><span class="token operator">:</span> <span class="token function">GoogleSignIn</span><span class="token punctuation">(</span>
            <span class="token literal-property property">scopes</span><span class="token operator">:</span> <span class="token operator">&lt;</span>String<span class="token operator">></span><span class="token punctuation">[</span>
              CalendarApi<span class="token punctuation">.</span>calendarScope
            <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 모든 메서드에 액세스하려면 scope가 캘린더여야 합니다</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Platform<span class="token punctuation">.</span>isIOS<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 여기에 IOS 클라이언트 ID를 입력하세요</span>
        <span class="token keyword">return</span> <span class="token function">GoogleCalendarService</span><span class="token punctuation">(</span>
          <span class="token literal-property property">googleSignInCredentials</span><span class="token operator">:</span> <span class="token function">GoogleSignIn</span><span class="token punctuation">(</span>
            <span class="token literal-property property">clientId</span><span class="token operator">:</span> <span class="token string">'당신의 IOS 클라이언트 ID'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">scopes</span><span class="token operator">:</span> <span class="token operator">&lt;</span>String<span class="token operator">></span><span class="token punctuation">[</span>CalendarApi<span class="token punctuation">.</span>calendarScope<span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token function">Exception</span><span class="token punctuation">(</span><span class="token string">'지원되지 않는 플랫폼입니다'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OAuth 2.0 클라이언트 ID와 서비스 계정 키를 안전하게 보관하는 것을 확인하세요.</p>
<p>Flutterflow 사용자를 위한:</p>
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
<li>FlutterFlow 프로젝트에서 웹 플랫폼을 활성화하는 것을 잊지 마세요.</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-GoogleCalendarAPIintegrationusingFlutterforAndroidIOSWEBFlutterflow/img/GoogleCalendarAPIintegrationusingFlutterforAndroidIOSWEB-Flutterflow_9.png" alt="이미지"></p>
</div></template>
