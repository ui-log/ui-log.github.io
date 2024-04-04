<template><div><p>축하드려요!! 🥳 플러터 앱을 완성하셨군요! 이제 구글 플레이 스토어에 앱을 게시하여 세계와 나눠보세요.</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_0.png" alt="PublishFlutterApptoPlayStore2024_0.png"></p>
<p>이 안내서에서는 앱을 게시 준비하는 단계별 과정과 Google Play 콘솔을 탐색하여 수백만 사용자에게 앱을 제공하는 방법을 안내해 드릴 거예요.</p>
<h1 id="앱을-게시할-준비하기" tabindex="-1"><a class="header-anchor" href="#앱을-게시할-준비하기" aria-hidden="true">#</a> 앱을 게시할 준비하기</h1>
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
<p>Google Play Store에 앱을 게시하기 전에 출시 준비가 되어 있는지 확인해야 합니다. 여기에는 Flutter 앱을 준비하는 중요한 단계들이 있습니다:</p>
<h2 id="단계-01-앱-런처-아이콘-설정" tabindex="-1"><a class="header-anchor" href="#단계-01-앱-런처-아이콘-설정" aria-hidden="true">#</a> 단계 01: 앱 런처 아이콘 설정</h2>
<p>Google Play Store에 게시하기 전에 앱에 고유 식별을 위한 아이콘이 있어야 합니다. 런처 아이콘은 다음과 같습니다:</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_1.png" alt="앱 런처 아이콘"></p>
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
<p>Gmail 앱 아이콘이 어떤 모습인지 본 적 있나요? 플러터 앱에도 아이콘이 있어야 한다구요. 그런데 어떻게 만들 수 있을까요? 🤔 만약 앱 로고가 있고 그 로고를 앱 아이콘으로 사용하고 싶다면 이런 단계를 따라해보세요:</p>
<p>우선, 여기 이 웹사이트로 가서 안드로이드 및 iOS 기기에 로고가 어떻게 보일지 확인해볼 수 있어요.</p>
<p>https://icon.kitchen/i/H4sIAAAAAAAAA6tWKkvMKU0tVrKqVkpJLMoOyUjNTVWySkvMKU6t1VHKzU8pzQHJRisl5qUU5WemKOkoZeYXA8ny1CSl2FoApT8%2BHkAAAAA%3D</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_2.png" alt="PublishFlutterApptoPlayStore2024_2.png"></p>
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
<p>만약 앱 로고를 가지고 계시다면, 이미지를 선택하고 앱 로고를 업로드해서 어떻게 보이는지 확인할 수 있어요.</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_3.png" alt="Upload App Logo"></p>
<p>이후 다운로드할 수 있어요. Zip 파일을 다운로드하게 될 거예요. 그냥 zip 파일을 열어서 android 폴더로 이동한 후 아래와 같이 폴더를 복사하세요:</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_4.png" alt="Copy Folder"></p>
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
<p>이제 이 폴더를 플러터 프로젝트에 붙여넣어야 해요. 플러터 프로젝트를 열고 android 폴더로 이동해서 res 폴더 안에 붙여넣으세요:</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_5.png" alt="이미지"></p>
<p>이제 앱 아이콘이 변경되었어요. 플러터 프로젝트를 실행하여 테스트할 수 있어요.</p>
<h2 id="단계-02-앱-이름-설정" tabindex="-1"><a class="header-anchor" href="#단계-02-앱-이름-설정" aria-hidden="true">#</a> 단계 02: 앱 이름 설정</h2>
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
<p>당신의 앱 이름은 사용자가 쉽게 식별할 수 있는 것이 좋아요. 이 앱의 이름은 다음과 같이 보일 거에요:</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_6.png" alt="이미지"></p>
<p>Gmail처럼 이 앱을 위한 이름을 바꾸고 싶다면 어떻게 하면 될까요? 🤔 Flutter 프로젝트로 이동해 AndroidManifest.xml 파일을 다음과 같이 변경해보세요:</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_7.png" alt="이미지"></p>
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
<p>앱 이름이 변경되었습니다. 앱을 재시작하여 테스트할 수 있어요.</p>
<h2 id="단계-03-앱-빌드-릴리스" tabindex="-1"><a class="header-anchor" href="#단계-03-앱-빌드-릴리스" aria-hidden="true">#</a> 단계 03: 앱 빌드 &amp; 릴리스</h2>
<p>이제 앱을 릴리스하기 위해 서명해야 합니다. 플레이 스토어에 릴리스하기 위해 다음 단계를 따라주세요:</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_8.png" alt="이미지"></p>
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
<p>이제 이 코드를 key.properties 파일 안에 붙여넣으세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>storePassword<span class="token operator">=</span><span class="token operator">&lt;</span>이전 단계에서 얻은 비밀번호<span class="token operator">></span>
keyPassword<span class="token operator">=</span><span class="token operator">&lt;</span>이전 단계에서 얻은 비밀번호<span class="token operator">></span>
keyAlias<span class="token operator">=</span>upload
storeFile<span class="token operator">=</span><span class="token operator">&lt;</span>키스토어 파일의 위치<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 원하는 비밀번호를 정의할 수 있지만 다른 사람과 공유하지 않도록 주의하세요. 이제 이렇게 보일 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>storePassword<span class="token operator">=</span>MyFlutterApp
keyPassword<span class="token operator">=</span>MyFlutterApp
keyAlias<span class="token operator">=</span>upload
storeFile<span class="token operator">=</span><span class="token operator">&lt;</span>키스토어 파일의 위치<span class="token operator">></span>
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
<p>다음 단계는 업로드 키스토어를 생성하는 것입니다.</p>
<p>만약 Mac이나 Linux를 사용 중이라면 아래 명령어를 복사해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>keytool <span class="token operator">-</span>genkey <span class="token operator">-</span>v <span class="token operator">-</span>keystore <span class="token operator">~</span><span class="token operator">/</span>upload<span class="token operator">-</span>keystore<span class="token punctuation">.</span>jks <span class="token operator">-</span>keyalg <span class="token constant">RSA</span> <span class="token operator">-</span>keysize <span class="token number">2048</span> <span class="token operator">-</span>validity <span class="token number">10000</span> <span class="token operator">-</span>alias upload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>만약 Windows를 사용 중이라면 아래 명령어를 복사해주세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>keytool <span class="token operator">-</span>genkey <span class="token operator">-</span>v <span class="token operator">-</span>keystore <span class="token operator">%</span>userprofile<span class="token operator">%</span>\upload<span class="token operator">-</span>keystore<span class="token punctuation">.</span>jks <span class="token operator">-</span>storetype <span class="token constant">JKS</span> <span class="token operator">-</span>keyalg <span class="token constant">RSA</span> <span class="token operator">-</span>keysize <span class="token number">2048</span> <span class="token operator">-</span>validity <span class="token number">10000</span> <span class="token operator">-</span>alias upload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>%userprofile%에는 이 파일을 저장할 경로를 제공해야 합니다. 제 경우에는 C:\Users\AFFAN MINHAS를 제공했고, 따옴표로 감싸야 합니다.</p>
<p>Windows용 업데이트된 명령어는 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>keytool <span class="token operator">-</span>genkey <span class="token operator">-</span>v <span class="token operator">-</span>keystore <span class="token string">"C:\Users\AFFAN MINHAS\upload-keystore.jks"</span> <span class="token operator">-</span>storetype <span class="token constant">JKS</span> <span class="token operator">-</span>keyalg <span class="token constant">RSA</span> <span class="token operator">-</span>keysize <span class="token number">2048</span> <span class="token operator">-</span>validity <span class="token number">10000</span> <span class="token operator">-</span>alias upload
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
<p>적절한 명령어를 붙여넣어 에러가 발생하지 않도록 주의하세요. 그런 다음 keystore 비밀번호를 입력하라는 메시지가 표시될 것입니다. 이때 key.properties 파일에서 설정한 동일한 비밀번호를 입력해주세요. 이후에는 이 과정을 완료하기 위해 몇 가지 기본 정보가 필요합니다. 아래에 참고용으로 이미 작성해놓은 것이 있습니다.</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_9.png" alt="이미지"></p>
<p>여기 제공된 정보는 임시적이므로 귀하의 정보에 맞는 올바른 정보를 제공해주시기 바랍니다. 모두 괜찮게 진행했다면 upload-keystore.jks가 지정된 위치에 다운로드될 것입니다.</p>
<p>이제 upload-keystore.jks 파일을 android/app 폴더로 복사하여 넣고, 또한 아래의 key.properties 파일에 올바른 경로를 업데이트해주세요:</p>
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
<img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_10.png" />
<p>이제 플러터 프로젝트의 Gradle에서 서명 구성해야 합니다.</p>
<p>프로젝트의 [project]/android/app/build.gradle 파일로 이동하신 후 다음 코드를 android 태그 위에 붙여넣어주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> def keystoreProperties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   def keystorePropertiesFile <span class="token operator">=</span> rootProject<span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span><span class="token string">'key.properties'</span><span class="token punctuation">)</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>keystorePropertiesFile<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       keystoreProperties<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>keystorePropertiesFile<span class="token punctuation">)</span><span class="token punctuation">)</span>
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
<p>아래 코드를 추가한 후에 gradle 파일이 이렇게 보여야 합니다:</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_11.png" alt="PublishFlutterApptoPlayStore2024_11"></p>
<p>그런 다음 이 코드를 복사하고 다시 가장 아래로 이동하여 gradle 파일에 붙여넣기하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>   signingConfigs <span class="token punctuation">{</span>
       release <span class="token punctuation">{</span>
           keyAlias keystoreProperties<span class="token punctuation">[</span><span class="token string">'keyAlias'</span><span class="token punctuation">]</span>
           keyPassword keystoreProperties<span class="token punctuation">[</span><span class="token string">'keyPassword'</span><span class="token punctuation">]</span>
           storeFile keystoreProperties<span class="token punctuation">[</span><span class="token string">'storeFile'</span><span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token function">file</span><span class="token punctuation">(</span>keystoreProperties<span class="token punctuation">[</span><span class="token string">'storeFile'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span>
           storePassword keystoreProperties<span class="token punctuation">[</span><span class="token string">'storePassword'</span><span class="token punctuation">]</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
   buildTypes <span class="token punctuation">{</span>
       release <span class="token punctuation">{</span>
           signingConfig signingConfigs<span class="token punctuation">.</span>release
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이전에 작성된 buildTypes 태그를 찾으시고 완전히 덮어쓰기하고 아래 코드를 붙여넣어주세요.</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_12.png" alt="PublishFlutterApptoPlayStore2024_12"></p>
<p>이제 설정이 완료되었으니 다음 명령을 실행하여 앱 번들을 빌드할 시간입니다. 먼저 터미널을 열고 다음과 같이 루트 프로젝트로 이동하세요:</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_13.png" alt="PublishFlutterApptoPlayStore2024_13"></p>
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
<p>위 작업을 완료한 후 다음 명령어를 한 줄씩 실행해주세요:</p>
<ul>
<li>flutter clean</li>
<li>flutter pub get</li>
<li>flutter build appbundle</li>
</ul>
<p>성공적으로 실행되면 프로젝트의 build\app\outputs\bundle\release\ 디렉토리에 .aab 파일이 생성됩니다.</p>
<p>이제 보안을 위해 key.properties와 upload-keystore.jks 파일은 깃허브에 업로드하지 않습니다. 이를 위해서는 .gitignore 파일에 추가하여 업로드하지 않도록 설정해주세요.</p>
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
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_14.png" alt="이미지"></p>
<p>이 단계는 매우 중요합니다. 키 또는 키스토어에 접근할 수 있는 사람이 있다면 새 앱 버전을 Play 스토어에 업로드하고 업로드한 앱 버전을 덮어쓸 수 있습니다.</p>
<h2 id="단계-04-play-스토어에-게시" tabindex="-1"><a class="header-anchor" href="#단계-04-play-스토어에-게시" aria-hidden="true">#</a> 단계 04: Play 스토어에 게시</h2>
<p>이제 앱 번들이 준비되었으므로 Play 스토어에 게시하는 마지막 단계입니다. 이를 위해서는 Google Play 콘솔의 개발자 계정이 있어야 합니다. 우선 여기에서 개발자 계정을 만들어주세요:</p>
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
<p>이후에는 일회성 수수료를 지불해야 합니다:</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_15.png" alt="이미지"></p>
<p>성공적인 등록 후에는 앱을 업로드할 수 있는 개발자 계정이 생깁니다.</p>
<p>콘솔로 이동: <a href="https://play.google.com/console" target="_blank" rel="noopener noreferrer">https://play.google.com/console<ExternalLinkIcon/></a></p>
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
<p>이제 앱을 발행해봅시다. 먼저 아래와 같이 앱을 생성하세요:</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_16.png" alt="PublishFlutterApptoPlayStore2024_16.png"></p>
<p>이후 앱 정보를 제공하세요. 데이터를 입력하는 예시를 제공하겠습니다.</p>
<ul>
<li>앱 이름은 마음대로 지으세요.</li>
<li>앱의 기본 언어를 선택하세요.</li>
<li>앱인지 게임 앱인지 선택하세요.</li>
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
<img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_17.png" />
<ul>
<li>이번에 앱을 무료로 제작하신다면, 앞으로 가격을 변경하지 않을 거라고 확신하셨을 때에 그에 맞추어 선택하세요.</li>
<li>또한, 당연히 선언사항을 확인해야 합니다.</li>
</ul>
<img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_18.png" />
<p>위 작업으로 앱이 성공적으로 생성되었습니다. 이제 앱 세부정보를 제공하여 구성 작업을 시작해야 합니다.</p>
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
<li>상점 설정 탭으로 이동하세요.</li>
<li>앱인지 게임인지 제공하세요.</li>
<li>앱의 올바른 카테고리를 선택하세요.</li>
<li>그런 다음 해당하는 태그를 선택하세요. 최대 5개의 태그를 선택할 수 있습니다.</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_19.png" alt="이미지"></p>
<ul>
<li>그런 다음 앱과 관련된 모든 알림을 수신할 연락처 세부 정보를 제공하세요. 앱 발표 세부사항 또는 기타 사항이 포함됩니다.</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_20.png" alt="이미지"></p>
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
<li>그 후에 필요한 앱 세부 정보를 제공하세요</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_21.png" alt="이미지"></p>
<ul>
<li>이제 아래로 스크롤하고 앱 아이콘을 제공하고 여기 나열된 차원과 크기와 일치하는지 확인하세요:</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_22.png" alt="이미지"></p>
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
<li>이제 앱의 특징 그래픽을 제공해야 합니다. 이 그래픽은 상점 목록의 커버 사진으로 나타납니다.</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_23.png" alt="App Feature Graphics"></p>
<ul>
<li>이제 핸드폰 화면의 스크린샷을 제공해야 합니다. 최소 2장, 최대 8장까지 가능합니다.</li>
<li>앱을 소개하는 비디오 링크도 제공할 수 있습니다.</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_24.png" alt="Phone Screen Keywords"></p>
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
<li>7인치 태블릿과 10인치 태블릿의 스크린샷을 제공해야합니다. 특별히 가지고 있지 않다면 동일한 스크린샷을 제공할 수 있습니다.</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_25.png" alt="7인치 태블릿"></p>
<p>이제 앱을 업로드할 수 있는 트랙 목록이 있습니다. 다음과 같습니다:</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_26.png" alt="앱을 업로드할 수 있는 트랙 목록"></p>
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
<p>우리가 공개 평가용으로 업로드하는 것으로 가정해봅시다. 그래서 우리는 제품 트랙을 선택합니다.</p>
<ul>
<li>제품 탭으로 이동한 다음 새 릴리스를 생성하십시오.</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_27.png" alt="이미지"></p>
<ul>
<li>이제 서명 키를 선택해야 합니다.</li>
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
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_28.png" alt="이미지"></p>
<ul>
<li>그런 다음 Google이 생성한 키를 선택하십시오.</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_29.png" alt="이미지"></p>
<ul>
<li>이제 시작할 때 만들었던 앱 번들을 업로드해야 합니다. 프로젝트 위치에서 번들을 찾을 수 있습니다.</li>
<li>저의 경우 경로는 다음과 같습니다:</li>
<li>D:\FlutterProjects[프로젝트_이름]\build\app\outputs\bundle</li>
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
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_30.png" alt="./img/PublishFlutterApptoPlayStore2024_30.png"></p>
<ul>
<li>이후에는 새로운 업데이트나 기능이 있을 경우 메시지를 입력할 수 있습니다.</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_31.png" alt="./img/PublishFlutterApptoPlayStore2024_31.png"></p>
<ul>
<li>이제 표시된 것처럼 오류가 발생할 것입니다.</li>
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
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_32.png" alt="이미지"></p>
<ul>
<li>이 앱을 마침내 롤아웃하도록 해보죠.</li>
<li>프로덕션 탭으로 돌아가서 앱을 제공할 국가 및 지역을 선택하세요. 원하는 국가를 선택하거나 선택 제왌할 수 있습니다.</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_33.png" alt="이미지"></p>
<ul>
<li>이제 국가를 선택해야 합니다. 모든 것을 선택하려면 그냥 모두 선택하고 저장하세요.</li>
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
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_34.png" alt="이미지"></p>
<ul>
<li>그 다음으로 내려가서 작업 탭을 클릭하고 앱 콘텐츠 탭을 찾아서 이 앱에 대한 추가 선언을 제공해야 합니다.</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_35.png" alt="이미지"></p>
<ul>
<li>여기에는 앱의 개인정보 보호 정책을 표시하는 경우 어디에서 호스트된 URL을 제공해야 합니다.</li>
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
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_36.png" alt="이미지"></p>
<ul>
<li>
<p>간단히 말해서, 우리는 GitHub 저장소를 만들고 여기에 간단한 파일을 만들어 URL을 제공할 수 있습니다. 그 방법을 보겠습니다.</p>
</li>
<li>
<p>다음 URL을 따라가서 개인정보 보호 정책의 더미 템플릿을 찾아 복사하세요:</p>
</li>
<li>
<p>여기서 템플릿을 복사하세요:</p>
</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_37.png" alt="이미지"></p>
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
<li>다음으로 GitHub 계정에 저장소를 만들어야 합니다. 이를 위해 https://github.com 으로 이동하여 저장소를 만들어주세요.</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_38.png" alt="이미지"></p>
<ul>
<li>저장소에 이름을 지정하고 반드시 해당 저장소를 공개로 설정하여 누구나 볼 수 있도록 하세요.</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_39.png" alt="이미지"></p>
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
<p>이후에는 그냥 거기서 새 파일을 만드세요:</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_40.png" alt="이미지"></p>
<ul>
<li>그런 다음 내용을 붙여 넣고 편집한 후에 저장하세요.</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_41.png" alt="이미지"></p>
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
<li>이후에는 리포지토리 경로를 복사하고 개인정보 보호 정책 URL이 필요한 곳에 붙여 넣으세요.</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_42.png" alt="이미지"></p>
<p>이제 이 단계를 완료하고 화살표를 클릭하여 돌아가세요.</p>
<ul>
<li>앱에 광고가 포함되어 있는지 여부를 알려야 합니다. 광고 선언으로 이동하여 시작 버튼을 눌러주세요. 시작 선언:</li>
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
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>![PublishFlutterApptoPlayStore2024_43](./img/PublishFlutterApptoPlayStore2024_43.png)

그 다음으로 앱에 광고가 포함되어 있는지 여부에 따라 선택하세요.

![PublishFlutterApptoPlayStore2024_44](./img/PublishFlutterApptoPlayStore2024_44.png)

이제 이 단계를 완료하고 위쪽에 있는 화살표로 되돌아갑니다.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<li>이제 앱이 완전히 접근 가능한지 또는 일부 부분에 특별한 접근 권한이 필요한지 알아야 합니다.</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_45.png" alt="이미지"></p>
<p>앱에 따라 모든 기능이 제한 없이 접근 가능한지 여부를 확인하십시오.</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_46.png" alt="이미지"></p>
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
<p>이제 이 단계를 마무리하고 위쪽의 화살표로 돌아가세요.</p>
<ul>
<li>이제 콘텐츠 등급을 알려주고 설문조사를 시작해야 합니다</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_47.png" alt="이미지"></p>
<p>이메일 주소와 카테고리를 입력해야 합니다:</p>
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
<img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_48.png" />
<p>그러고 난 후에 앱에 따라 이 질문에 답하고 다음 단계로 넘어가주세요:</p>
<img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_49.png" />
<p>이후에 선택한 내용을 요약한 정보가 나오며, 확인 후 저장해주세요.</p>
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
<p>아래는 타깃 대상에게 전달해야 할 내용입니다:</p>
<img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_51.png" />
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
<p>당신의 앱에 따라 선택한 후 저장하세요.</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_52.png" alt="이미지"></p>
<p>그런 다음 앱에 개인 데이터가 있는지 없는지 알려주셔야 합니다. 저장하세요.</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_53.png" alt="이미지"></p>
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
<p>당신의 앱을 선생님들에 의해 테스트를 받아 신청할 수 있도록 하려면 저장 버튼을 눌러주세요.</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_54.png" alt="image"></p>
<p>그런 다음 마지막으로 저장하고이 단계를 지워서 위의 화살표로 돌아갈 수 있습니다.</p>
<ul>
<li>이제 당신의 앱이 뉴스 앱인지 여부를 알려야 합니다.</li>
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
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_55.png" alt="PublishFlutterApptoPlayStore2024_55"></p>
<p>앱 목적에 맞게 선택하세요.</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_56.png" alt="PublishFlutterApptoPlayStore2024_56"></p>
<p>이제 이 단계를 완료하고 위쪽 화살표로 돌아가세요.</p>
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
<li>그 후에 앱이 COVID-19 접촉 추적이거나 상태 앱인지 또는 다른 앱인지 알려주어야 합니다.</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_57.png" alt="Image"></p>
<p>당신의 앱에 따라 선택하십시오.</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_58.png" alt="Image"></p>
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
<p>지금 저장을 해서이 단계를 완료하고 위쪽의 화살표로 돌아갈 수 있습니다.</p>
<ul>
<li>그 후 앱의 개인 정보 처리 방침 및 보안 관행에 대해 설명해야합니다.</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_59.png" alt="이미지"></p>
<p>이러한 세부 정보를 제공하고 다음을 클릭하세요.</p>
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
<img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_60.png" />
<p>그런 다음 마침내 저장하고이 단계를 지우고 위의 화살표로 돌아갑니다.</p>
<ul>
<li>그 후에 앱이 광고 ID를 사용하는지 여부를 알려야합니다.</li>
</ul>
<img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_61.png" />
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
<p>당신의 앱에 따라 선택하십시오.</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_62.png" alt="이미지"></p>
<p>이제 이 단계를 완료하고 위쪽 화살표로 돌아가세요.</p>
<ul>
<li>그 후에는 앱이 정부 소유인지 여부를 알려주어야 합니다.</li>
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
<p>아래 표를 참고하여 앱을 선택해주세요.</p>
<p>이제 이 단계를 완료하고 위쪽 화살표로 되돌아갈 수 있습니다.</p>
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
<li>그 다음에는 앱의 금융 기능을 알려주어야 해요</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_65.png" alt="이미지"></p>
<p>당신의 앱에 따라 선택하세요.</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_66.png" alt="이미지"></p>
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
<p>이제 저장하여이 단계를 완료하고 위의 화살표로 돌아가세요.</p>
<p>이 모든 선언을 완료한 후 프로덕션 탭으로 돌아가서 릴리스 편집으로 이동하세요.</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_67.png" alt="이미지"></p>
<p>그런 다음 모든 세부 정보를 확인하고 다음을 클릭하세요.</p>
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
<img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_68.png" />
<p>이후에 저장하고 개요로 이동하세요.</p>
<img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_69.png" />
<p>그리고 이제 이 변경 사항을 Google에 검토 요청하세요.</p>
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
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_70.png" alt="이미지"></p>
<p>이제 모든 앱 섹션으로 이동하시면 리뷰를 위해 보낸 앱을 볼 수 있어요 😍</p>
<p><img src="@source/docs/Tech/2024-03-28-PublishFlutterApptoPlayStore2024/img/PublishFlutterApptoPlayStore2024_71.png" alt="이미지"></p>
<p>드디어 성공했네요! 🥴 앱이 리뷰를 위해 보내졌고, 약 48시간이 걸려 답변을 받게 될 거에요. 앱이 사용자의 현재 위치나 이와 유사한 기능을 사용한다면 구글에서 액세스할 유효한 세부 정보를 제공하라고 요청할 수 있으니 주의하세요.</p>
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
