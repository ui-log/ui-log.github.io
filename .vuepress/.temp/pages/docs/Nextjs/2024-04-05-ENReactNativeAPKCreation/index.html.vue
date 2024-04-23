<template><div><img src="@source/docs/Nextjs/2024-04-05-ENReactNativeAPKCreation/img/ENReactNativeAPKCreation_0.png" />
<h1 id="apk이-뭔가요" tabindex="-1"><a class="header-anchor" href="#apk이-뭔가요" aria-hidden="true">#</a> APK이 뭔가요?</h1>
<p>APK 파일(Android Package Kit 파일 형식)은 안드로이드 운영 체제(OS)에서 사용되는 응용 프로그램의 파일 형식입니다. APK 파일은 소프트웨어 프로그램의 모든 코드, 자산 및 리소스를 포함하여 앱이 필요한 모든 데이터를 담고 있습니다.</p>
<h1 id="apk가-왜-필요한가요" tabindex="-1"><a class="header-anchor" href="#apk가-왜-필요한가요" aria-hidden="true">#</a> APK가 왜 필요한가요?</h1>
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
<p>예를 들어, 우리가 앱을 개발했고 이를 다른 사람(고객 등)에게 테스트하거나 릴리스 전 최종 테스트를 수행하려고 할 때 APK 파일이 필요합니다.</p>
<p>그러나 APK 파일을 설치할 때 주의해야 합니다.
신뢰할 만한 소스에서 다운로드하지 않았거나 악의적으로 수정된 경우 보안 위험이 발생할 수 있습니다. 따라서 APK 파일을 설치할 때는 신뢰할 만한 소스에서 다운로드하고 기기를 최신 상태로 유지하는 것이 중요합니다.</p>
<h1 id="apk-생성" tabindex="-1"><a class="header-anchor" href="#apk-생성" aria-hidden="true">#</a> APK 생성:</h1>
<p><img src="@source/docs/Nextjs/2024-04-05-ENReactNativeAPKCreation/img/ENReactNativeAPKCreation_1.png" alt="image"></p>
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
<li>C:\Program Files\Java\jdk-X.X.X.X.X\bin 경로로 로그인한 후 Powershell 또는 터미널을 열어봅시다.</li>
</ul>
<ol start="2">
<li>터미널에 키스토어를 생성하는 코드를 작성해 봅시다.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>keytool <span class="token operator">-</span>genkeypair <span class="token operator">-</span>v <span class="token operator">-</span>keystore my<span class="token operator">-</span>upload<span class="token operator">-</span>key<span class="token punctuation">.</span>keystore <span class="token operator">-</span>alias 
my<span class="token operator">-</span>key<span class="token operator">-</span>alias <span class="token operator">-</span>keyalg <span class="token constant">RSA</span> <span class="token operator">-</span>keysize <span class="token number">2048</span> <span class="token operator">-</span>validity <span class="token number">10000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>맥 컴퓨터의 파일 경로는 다음과 같습니다:
/Library/Java/JavaVirtualMachines/jdkX.X.X.jdk/Contents/Home</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>sudo keytool <span class="token operator">-</span>genkey <span class="token operator">-</span>v <span class="token operator">-</span>keystore my<span class="token operator">-</span>upload<span class="token operator">-</span>key<span class="token punctuation">.</span>keystore <span class="token operator">-</span>alias my<span class="token operator">-</span>key<span class="token operator">-</span>alias <span class="token operator">-</span>keyalg <span class="token constant">RSA</span> <span class="token operator">-</span>keysize <span class="token number">2048</span> <span class="token operator">-</span>validity <span class="token number">10000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>설명:
3. 생성한 Keystore 파일은 C:\Program Files\Java\jdk-X.X.X.X.X\bin 에 my-upload-key로 생성되었습니다.</p>
<ol start="4">
<li>Keystore 파일을 우리 프로젝트의 android/app 파일로 복사하여 붙여넣으세요.</li>
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
<ol start="5">
<li>안드로이드/gradle.properties 파일로 가서 (환경 변수) 정의를 작성해봅시다. 여기에 있는 정보는 우리가 키스토어를 생성할 때 작성한 정보와 동일해야 합니다.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">MYAPP_UPLOAD_STORE_FILE</span><span class="token operator">=</span>my<span class="token operator">-</span>upload<span class="token operator">-</span>key<span class="token punctuation">.</span>keystore
<span class="token constant">MYAPP_UPLOAD_KEY_ALIAS</span><span class="token operator">=</span>my<span class="token operator">-</span>key<span class="token operator">-</span>alias
<span class="token constant">MYAPP_UPLOAD_STORE_PASSWORD</span><span class="token operator">=</span><span class="token operator">**</span><span class="token operator">**</span><span class="token operator">*</span>
<span class="token constant">MYAPP_UPLOAD_KEY_PASSWORD</span><span class="token operator">=</span><span class="token operator">**</span><span class="token operator">**</span><span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>서명 키와 키스토어 파일을 정의하기 위해 android/app/build.gradle 파일에 코드를 작성해야 합니다.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>signingConfigs <span class="token punctuation">{</span>
    debug <span class="token punctuation">{</span>
        storeFile <span class="token function">file</span><span class="token punctuation">(</span><span class="token string">'debug.keystore'</span><span class="token punctuation">)</span>
        storePassword <span class="token string">'android'</span>
        keyAlias <span class="token string">'androiddebugkey'</span>
        keyPassword <span class="token string">'android'</span>
    <span class="token punctuation">}</span>
    release <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>project<span class="token punctuation">.</span><span class="token function">hasProperty</span><span class="token punctuation">(</span><span class="token string">'MYAPP_UPLOAD_STORE_FILE'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            storeFile <span class="token function">file</span><span class="token punctuation">(</span><span class="token constant">MYAPP_UPLOAD_STORE_FILE</span><span class="token punctuation">)</span>
            storePassword <span class="token constant">MYAPP_UPLOAD_STORE_PASSWORD</span>
            keyAlias <span class="token constant">MYAPP_UPLOAD_KEY_ALIAS</span>
            keyPassword <span class="token constant">MYAPP_UPLOAD_KEY_PASSWORD</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<ol start="7">
<li>마지막으로 터미널에서 cd .\projectName\android 폴더로 이동하여 ./gradlew bundleRelease 명령어를 사용하여 릴리스 번들을 생성할 수 있습니다.</li>
</ol>
<p><img src="@source/docs/Nextjs/2024-04-05-ENReactNativeAPKCreation/img/ENReactNativeAPKCreation_2.png" alt="이미지"></p>
<p>⭐이전 포스트</p>
</div></template>
