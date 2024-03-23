<template><div><img src="@source/docs/Tech/2024-03-22-HowtouploadReactNativebuildswithGithubActions/img/How-to-upload-React-Native-builds-with-Github-Actions_0.png" />
<h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h1>
<p>이전 글에서 Github Actions를 사용하여 Android 및 iOS 앱을 빌드하는 방법에 대해 설명했습니다. 아래 링크에서 확인할 수 있어요: <a href="https://medium.com/scaleuptech/how-to-make-react-native-builds-with-github-actions-8d0203801eff" target="_blank" rel="noopener noreferrer">링크<ExternalLinkIcon/></a></p>
<p>본 글에서는 이 빌드를 Firebase App Distribution에 테스트 용으로 업로드하는 방법과 Play 스토어 및 App 스토어에 제품으로 업로드하는 방법에 대해 설명하겠습니다.</p>
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
<h1 id="firebase-app-distribution에-업로드하기" tabindex="-1"><a class="header-anchor" href="#firebase-app-distribution에-업로드하기" aria-hidden="true">#</a> Firebase App Distribution에 업로드하기</h1>
<p>'스테이징' 브랜치를 사용하여 Firebase App Distribution에 업로드하면 테스트 프로세스를 간소화할 수 있습니다. 이를 통해 테스터들이 다양한 기기에서 앱의 성능을 철저히 평가할 수 있는 제어된 환경을 제공합니다. 이 접근 방식을 통해 제품 단계에서 앱이 더 넓은 관객에게 도달하기 전에 잠재적인 문제점을 식별하고 해결할 수 있습니다.</p>
<p>실제 워크플로로 넘어가기 전에 몇 가지 작업을 해야하고 Github 시크릿을 추가해야 합니다.</p>
<h2 id="앱-id" tabindex="-1"><a class="header-anchor" href="#앱-id" aria-hidden="true">#</a> 앱 ID</h2>
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
<p>Firebase 프로젝트로 이동하여 일반 설정 페이지로 이동하세요. iOS appId와 Android appId를 찾을 수 있어요.</p>
<p>찾으셨다면, 이제 그것들을 저장소 시크릿에 추가해야 해요. 이를 위해 Github 프로젝트로 이동한 다음, 설정을 누르고, 시크릿과 변수, 그리고 액션으로 이동하세요. 거기에서 '새 저장소 시크릿' 버튼을 볼 수 있어요. 두 개의 저장소 시크릿이 필요할 거예요. 여기 있어요:</p>
<p>FIREBASE_ANDROID_APP_ID
Android appId를 'Secret'로 표시된 텍스트 상자에 붙여넣으세요.</p>
<p>FIREBASE_IOS_APP_ID
iOS appId를 'Secret'로 표시된 텍스트 상자에 붙여넣으세요.</p>
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
<h2 id="servicecredentialsfilecontent" tabindex="-1"><a class="header-anchor" href="#servicecredentialsfilecontent" aria-hidden="true">#</a> serviceCredentialsFileContent</h2>
<p>서비스 자격 증명 파일 내용을 가져오려면 다음 단계를 따르세요:</p>
<ul>
<li>Google Cloud Console을 엽니다</li>
<li>프로젝트를 선택합니다</li>
<li>서비스 계정 생성을 클릭합니다</li>
<li>계정 이름을 입력하고 생성 및 계속하기를 누릅니다</li>
<li>역할 입력란에서 Firebase App Distribution Admin을 선택하고 완료를 클릭합니다</li>
<li>그런 다음 계정 목록에서 새로 생성된 서비스 계정을 찾습니다. 3점 메뉴를 클릭하고 키 관리를 클릭합니다</li>
<li>키 추가를 클릭하고 새 키를 생성하십시오</li>
<li>유형을 JSON으로 선택하고 만들기를 클릭합니다</li>
<li>이후에 파일이 디스크로 다운로드되어야 합니다. 파일을 열고 해당 내용을 복사합니다</li>
<li>새 비밀을 생성합니다. CREDENTIAL_FILE_CONTENT로 이름을 지정합니다. 비밀 값은 9번에서 복사한 파일 내용입니다</li>
</ul>
<p>이제 모든 준비가 완료되어 실제 워크플로로 이동할 수 있습니다.</p>
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
<h2 id="ios-앱을-app-distribution에-업로드하기" tabindex="-1"><a class="header-anchor" href="#ios-앱을-app-distribution에-업로드하기" aria-hidden="true">#</a> iOS 앱을 App Distribution에 업로드하기</h2>
<p>여기에는 ipa 파일을 App Distribution에 업로드하는 yaml 파일 부분이 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token literal-property property">distribute_on_linux</span><span class="token operator">:</span>
    runs<span class="token operator">-</span>on<span class="token operator">:</span> ubuntu<span class="token operator">-</span>latest
    <span class="token literal-property property">needs</span><span class="token operator">:</span> <span class="token punctuation">[</span>build_with_signing<span class="token punctuation">]</span>
    <span class="token literal-property property">steps</span><span class="token operator">:</span>
      <span class="token operator">-</span> name<span class="token operator">:</span> 코드 체크아웃
        <span class="token literal-property property">uses</span><span class="token operator">:</span> actions<span class="token operator">/</span>checkout@v2

      <span class="token operator">-</span> name<span class="token operator">:</span> 아티팩트 다운로드
        <span class="token literal-property property">uses</span><span class="token operator">:</span> actions<span class="token operator">/</span>download<span class="token operator">-</span>artifact@v2
        <span class="token keyword">with</span><span class="token operator">:</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> your_app<span class="token punctuation">.</span>ipa

      <span class="token operator">-</span> name<span class="token operator">:</span> Firebase App Distribution으로 아티팩트 업로드
        <span class="token literal-property property">uses</span><span class="token operator">:</span> wzieba<span class="token operator">/</span>Firebase<span class="token operator">-</span>Distribution<span class="token operator">-</span>Github<span class="token operator">-</span>Action@v1
        <span class="token keyword">with</span><span class="token operator">:</span>
          <span class="token literal-property property">appId</span><span class="token operator">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets<span class="token punctuation">.</span><span class="token constant">FIREBASE_IOS_APP_ID</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token literal-property property">serviceCredentialsFileContent</span><span class="token operator">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets<span class="token punctuation">.</span><span class="token constant">FIREBASE_CREDENTIAL_FILE_CONTENT</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token literal-property property">testers</span><span class="token operator">:</span> <span class="token operator">|</span>
            example1@gmail<span class="token punctuation">.</span>com
            example2@gmail<span class="token punctuation">.</span>com
          <span class="token literal-property property">file</span><span class="token operator">:</span> your_app<span class="token punctuation">.</span>ipa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 전체 yaml 파일은 다음과 같습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"iOS 스테이징 앱 빌드"</span>

<span class="token literal-property property">on</span><span class="token operator">:</span>
  <span class="token literal-property property">push</span><span class="token operator">:</span>
    <span class="token literal-property property">branches</span><span class="token operator">:</span>
      <span class="token operator">-</span> staging

<span class="token literal-property property">jobs</span><span class="token operator">:</span>
  <span class="token literal-property property">build_with_signing</span><span class="token operator">:</span>
    runs<span class="token operator">-</span>on<span class="token operator">:</span> macos<span class="token operator">-</span>latest
    <span class="token literal-property property">steps</span><span class="token operator">:</span>
      <span class="token operator">-</span> name<span class="token operator">:</span> Xcode 버전 확인
        <span class="token literal-property property">run</span><span class="token operator">:</span> <span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>xcodebuild <span class="token operator">-</span>version
      <span class="token operator">-</span> name<span class="token operator">:</span> 저장소 체크아웃
        <span class="token literal-property property">uses</span><span class="token operator">:</span> actions<span class="token operator">/</span>checkout@v3
      <span class="token operator">-</span> name<span class="token operator">:</span> 디버그 워크플로 변수
        <span class="token literal-property property">run</span><span class="token operator">:</span> <span class="token operator">|</span>
          echo <span class="token string">"CERTIFICATE_PATH: $CERTIFICATE_PATH"</span>
          echo <span class="token string">"PP_PATH: $PP_PATH"</span>
          echo <span class="token string">"KEYCHAIN_PATH: $KEYCHAIN_PATH"</span>
          echo <span class="token string">"P12_PASSWORD: $P12_PASSWORD"</span>
      <span class="token operator">-</span> name<span class="token operator">:</span> Apple 인증서 및 프로비저닝 프로파일 설치
        <span class="token literal-property property">env</span><span class="token operator">:</span>
          <span class="token constant">BUILD_CERTIFICATE_BASE64</span><span class="token operator">:</span> $<span class="token punctuation">{</span>secrets<span class="token punctuation">.</span><span class="token constant">BUILD_CERTIFICATE_BASE64</span><span class="token punctuation">}</span>
          <span class="token constant">P12_PASSWORD</span><span class="token operator">:</span> $<span class="token punctuation">{</span>secrets<span class="token punctuation">.</span><span class="token constant">P12_PASSWORD</span><span class="token punctuation">}</span>
          <span class="token constant">PROVISION_PROFILES_BASE64</span><span class="token operator">:</span> $<span class="token punctuation">{</span>secrets<span class="token punctuation">.</span><span class="token constant">PROVISION_PROFILES_BASE64</span><span class="token punctuation">}</span>
          <span class="token constant">KEYCHAIN_PASSWORD</span><span class="token operator">:</span> $<span class="token punctuation">{</span>secrets<span class="token punctuation">.</span><span class="token constant">KEYCHAIN_PASSWORD</span><span class="token punctuation">}</span>
        <span class="token literal-property property">run</span><span class="token operator">:</span> <span class="token operator">|</span>
          <span class="token constant">CERTIFICATE_PATH</span><span class="token operator">=</span>$<span class="token constant">RUNNER_TEMP</span><span class="token operator">/</span>build_certificate<span class="token punctuation">.</span>p12
          <span class="token constant">PP_ARCHIVE</span><span class="token operator">=</span>$<span class="token constant">RUNNER_TEMP</span><span class="token operator">/</span>mobile_pp<span class="token punctuation">.</span>tgz
          <span class="token constant">KEYCHAIN_PATH</span><span class="token operator">=</span>$<span class="token constant">RUNNER_TEMP</span><span class="token operator">/</span>app<span class="token operator">-</span>signing<span class="token punctuation">.</span>keychain<span class="token operator">-</span>db

          echo <span class="token operator">-</span>n <span class="token string">"$BUILD_CERTIFICATE_BASE64"</span> <span class="token operator">|</span> base64 <span class="token operator">--</span>decode <span class="token operator">-</span>o $<span class="token constant">CERTIFICATE_PATH</span>
          echo <span class="token operator">-</span>n <span class="token string">"$PROVISION_PROFILES_BASE64"</span> <span class="token operator">|</span> base64 <span class="token operator">--</span>decode <span class="token operator">-</span>o $<span class="token constant">PP_ARCHIVE</span>

          security create<span class="token operator">-</span>keychain <span class="token operator">-</span>p <span class="token string">"$KEYCHAIN_PASSWORD"</span> $<span class="token constant">KEYCHAIN_PATH</span>
          security set<span class="token operator">-</span>keychain<span class="token operator">-</span>settings <span class="token operator">-</span>lut <span class="token number">21600</span> $<span class="token constant">KEYCHAIN_PATH</span>
          security unlock<span class="token operator">-</span>keychain <span class="token operator">-</span>p <span class="token string">"$KEYCHAIN_PASSWORD"</span> $<span class="token constant">KEYCHAIN_PATH</span>

          echo <span class="token string">"P12_PASSWORD: $P12_PASSWORD"</span>
          security <span class="token keyword">import</span> $<span class="token constant">CERTIFICATE_PATH</span> <span class="token operator">-</span><span class="token constant">P</span> <span class="token string">"$P12_PASSWORD"</span> <span class="token operator">-</span><span class="token constant">A</span> <span class="token operator">-</span>t cert <span class="token operator">-</span>f pkcs12 <span class="token operator">-</span>k $<span class="token constant">KEYCHAIN_PATH</span>
          security list<span class="token operator">-</span>keychain <span class="token operator">-</span>d user <span class="token operator">-</span>s $<span class="token constant">KEYCHAIN_PATH</span>

          mkdir <span class="token operator">-</span>p <span class="token operator">~</span><span class="token operator">/</span>Library<span class="token operator">/</span>MobileDevice<span class="token operator">/</span>Provisioning\ Profiles
          tar xzvf $<span class="token constant">PP_ARCHIVE</span> <span class="token operator">-</span><span class="token constant">C</span> $<span class="token constant">RUNNER_TEMP</span>
          <span class="token keyword">for</span> <span class="token constant">PROVISION</span> <span class="token keyword">in</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">ls $RUNNER_TEMP/*.mobileprovision</span><span class="token template-punctuation string">`</span></span>
          <span class="token keyword">do</span>
            <span class="token constant">UUID</span><span class="token operator">=</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/usr/libexec/PlistBuddy -c 'Print :UUID' /dev/stdin &lt;&lt;&lt; $(security cms -D -i $PROVISION)</span><span class="token template-punctuation string">`</span></span>
            cp $<span class="token constant">PROVISION</span> <span class="token operator">~</span><span class="token operator">/</span>Library<span class="token operator">/</span>MobileDevice<span class="token operator">/</span>Provisioning\ Profiles<span class="token operator">/</span>$<span class="token constant">UUID</span><span class="token punctuation">.</span>mobileprovision
          done

          security find<span class="token operator">-</span>identity <span class="token operator">-</span>v <span class="token operator">-</span>p codesigning
          ls <span class="token operator">-</span>l <span class="token operator">~</span><span class="token operator">/</span>Library<span class="token operator">/</span>MobileDevice<span class="token operator">/</span>Provisioning\ Profiles

      <span class="token operator">-</span> uses<span class="token operator">:</span> actions<span class="token operator">/</span>setup<span class="token operator">-</span>node@v3
        <span class="token keyword">with</span><span class="token operator">:</span>
          node<span class="token operator">-</span>version<span class="token operator">:</span> <span class="token string">'18'</span>
          <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token string">'yarn'</span>

      <span class="token operator">-</span> name<span class="token operator">:</span> 작업공간 정리
        <span class="token literal-property property">run</span><span class="token operator">:</span> <span class="token operator">|</span>
          git clean <span class="token operator">-</span>ffdx
          npm cache clean <span class="token operator">--</span>force

      <span class="token operator">-</span> name<span class="token operator">:</span> Xcode 빌드 정리
        <span class="token literal-property property">run</span><span class="token operator">:</span> <span class="token operator">|</span>
          cd ios
          xcodebuild clean <span class="token operator">-</span>workspace your_app<span class="token punctuation">.</span>xcworkspace <span class="token operator">-</span>scheme your_app

      <span class="token operator">-</span> name<span class="token operator">:</span> yarn 종속성 설치
        <span class="token literal-property property">run</span><span class="token operator">:</span> <span class="token operator">|</span>
          cd ios
          yarn install

      <span class="token operator">-</span> name<span class="token operator">:</span> Cocoapod 종속성 설치
        <span class="token literal-property property">run</span><span class="token operator">:</span> <span class="token operator">|</span>
          cd ios
          pod repo update
          pod install

      <span class="token operator">-</span> name<span class="token operator">:</span> 아카이브 빌드
        <span class="token literal-property property">run</span><span class="token operator">:</span> <span class="token operator">|</span>
          cd ios
          xcodebuild <span class="token operator">-</span>workspace your_app<span class="token punctuation">.</span>xcworkspace \
          <span class="token operator">-</span>scheme <span class="token string">"your_app"</span> \
          <span class="token operator">-</span>sdk iphoneos \
          <span class="token operator">-</span>configuration Debug \
          <span class="token operator">-</span>destination generic<span class="token operator">/</span>platform<span class="token operator">=</span>iOS \
          <span class="token operator">-</span>archivePath $<span class="token constant">RUNNER_TEMP</span><span class="token operator">/</span>your_app<span class="token punctuation">.</span>xcarchive \
          archive

      <span class="token operator">-</span> name<span class="token operator">:</span> ipa 내보내기
        <span class="token literal-property property">env</span><span class="token operator">:</span>
          <span class="token constant">EXPORT_OPTIONS_PLIST</span><span class="token operator">:</span> $<span class="token punctuation">{</span>secrets<span class="token punctuation">.</span><span class="token constant">EXPORT_OPTIONS_PLIST</span><span class="token punctuation">}</span>
        <span class="token literal-property property">run</span><span class="token operator">:</span> <span class="token operator">|</span>
          <span class="token constant">EXPORT_OPTS_PATH</span><span class="token operator">=</span>$<span class="token constant">RUNNER_TEMP</span><span class="token operator">/</span>ExportOptions<span class="token punctuation">.</span>plist
          echo <span class="token operator">-</span>n <span class="token string">"$EXPORT_OPTIONS_PLIST"</span> <span class="token operator">|</span> base64 <span class="token operator">--</span>decode <span class="token operator">-</span>o $<span class="token constant">EXPORT_OPTS_PATH</span>
          xcodebuild <span class="token operator">-</span>exportArchive <span class="token operator">-</span>archivePath $<span class="token constant">RUNNER_TEMP</span><span class="token operator">/</span>your_app<span class="token punctuation">.</span>xcarchive <span class="token operator">-</span>exportOptionsPlist $<span class="token constant">EXPORT_OPTS_PATH</span> <span class="token operator">-</span>exportPath $<span class="token constant">RUNNER_TEMP</span><span class="token operator">/</span>build

      <span class="token operator">-</span> name<span class="token operator">:</span> 애플리케이션 업로드
        <span class="token literal-property property">uses</span><span class="token operator">:</span> actions<span class="token operator">/</span>upload<span class="token operator">-</span>artifact@v3
        <span class="token keyword">with</span><span class="token operator">:</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> your_app<span class="token punctuation">.</span>ipa
          <span class="token literal-property property">path</span><span class="token operator">:</span> $<span class="token punctuation">{</span>runner<span class="token punctuation">.</span>temp<span class="token punctuation">}</span><span class="token operator">/</span>build<span class="token operator">/</span>Apps<span class="token operator">/</span>your_app<span class="token punctuation">.</span>ipa

  <span class="token literal-property property">distribute_on_linux</span><span class="token operator">:</span>
    runs<span class="token operator">-</span>on<span class="token operator">:</span> ubuntu<span class="token operator">-</span>latest
    <span class="token literal-property property">needs</span><span class="token operator">:</span> <span class="token punctuation">[</span>build_with_signing<span class="token punctuation">]</span>
    <span class="token literal-property property">steps</span><span class="token operator">:</span>
      <span class="token operator">-</span> name<span class="token operator">:</span> 코드 체크아웃
        <span class="token literal-property property">uses</span><span class="token operator">:</span> actions<span class="token operator">/</span>checkout@v2

      <span class="token operator">-</span> name<span class="token operator">:</span> 아티팩트 다운로드
        <span class="token literal-property property">uses</span><span class="token operator">:</span> actions<span class="token operator">/</span>download<span class="token operator">-</span>artifact@v2
        <span class="token keyword">with</span><span class="token operator">:</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> your_app<span class="token punctuation">.</span>ipa

      <span class="token operator">-</span> name<span class="token operator">:</span> Firebase 앱 배포에 아티팩트 업로드
        <span class="token literal-property property">uses</span><span class="token operator">:</span> wzieba<span class="token operator">/</span>Firebase<span class="token operator">-</span>Distribution<span class="token operator">-</span>Github<span class="token operator">-</span>Action@v1
        <span class="token keyword">with</span><span class="token operator">:</span>
          <span class="token literal-property property">appId</span><span class="token operator">:</span> $<span class="token punctuation">{</span>secrets<span class="token punctuation">.</span><span class="token constant">FIREBASE_IOS_APP_ID</span><span class="token punctuation">}</span>
          <span class="token literal-property property">serviceCredentialsFileContent</span><span class="token operator">:</span> $<span class="token punctuation">{</span>secrets<span class="token punctuation">.</span><span class="token constant">FIREBASE_CREDENTIAL_FILE_CONTENT</span><span class="token punctuation">}</span>
          <span class="token literal-property property">testers</span><span class="token operator">:</span> <span class="token operator">|</span>
            example1@gmail<span class="token punctuation">.</span>com
            example2@gmail<span class="token punctuation">.</span>com
          <span class="token literal-property property">file</span><span class="token operator">:</span> your_app<span class="token punctuation">.</span>ipa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>중요한 점은 이 작업을 위해 두 개의 작업을 가지고 있어야 한다는 것입니다. 첫 번째는 macOS에서 실행되는 ipa 파일을 빌드하고 내보내는 작업이고, 두 번째는 해당 ipa 파일을 다운로드하고 ubuntu에서 앱 배포에 업로드하는 작업입니다. 두 번째 작업에서는 다음 라인을 추가해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">needs</span><span class="token operator">:</span> <span class="token punctuation">[</span>build_with_signing<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이는 업로드를 하기 위해 먼저 ipa 파일을 얻어야 하기 때문에 필요합니다.```</p>
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
<h2 id="android-앱을-app-distribution에-업로드하는-방법" tabindex="-1"><a class="header-anchor" href="#android-앱을-app-distribution에-업로드하는-방법" aria-hidden="true">#</a> Android 앱을 App Distribution에 업로드하는 방법</h2>
<p>이곳은 apk 파일을 App Distribution에 업로드하는 부분을 처리하는 yaml 파일의 일부입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>      <span class="token operator">-</span> name<span class="token operator">:</span> Firebase App Distribution에 아티팩트 업로드
        <span class="token literal-property property">uses</span><span class="token operator">:</span> wzieba<span class="token operator">/</span>Firebase<span class="token operator">-</span>Distribution<span class="token operator">-</span>Github<span class="token operator">-</span>Action@v1
        <span class="token keyword">with</span><span class="token operator">:</span>
          <span class="token literal-property property">appId</span><span class="token operator">:</span> $<span class="token punctuation">{</span> secrets<span class="token punctuation">.</span><span class="token constant">FIREBASE_ANDROID_APP_ID</span> <span class="token punctuation">}</span>
          <span class="token literal-property property">serviceCredentialsFileContent</span><span class="token operator">:</span> $<span class="token punctuation">{</span> secrets<span class="token punctuation">.</span><span class="token constant">FIREBASE_CREDENTIAL_FILE_CONTENT</span> <span class="token punctuation">}</span>
          <span class="token literal-property property">testers</span><span class="token operator">:</span> <span class="token operator">|</span>
            examle1@gmail<span class="token punctuation">.</span>com
            example2@gmail<span class="token punctuation">.</span>com
          <span class="token literal-property property">file</span><span class="token operator">:</span> android<span class="token operator">/</span>app<span class="token operator">/</span>build<span class="token operator">/</span>outputs<span class="token operator">/</span>apk<span class="token operator">/</span>release<span class="token operator">/</span>app<span class="token operator">-</span>release<span class="token punctuation">.</span>apk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기에 전체 yaml 파일이 있습니다:</p>
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
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">이름</span><span class="token punctuation">:</span> <span class="token string">"Android 스테이징 앱 빌드"</span>

<span class="token key atrule">작업</span><span class="token punctuation">:</span>
  <span class="token key atrule">푸시</span><span class="token punctuation">:</span>
    <span class="token key atrule">브랜치</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> staging

<span class="token key atrule">작업</span><span class="token punctuation">:</span>
  <span class="token key atrule">빌드</span><span class="token punctuation">:</span>
    <span class="token key atrule">동작 환경</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">작업</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">이름</span><span class="token punctuation">:</span> 리포지토리 체크아웃
        <span class="token key atrule">사용</span><span class="token punctuation">:</span> actions/checkout@v2

      <span class="token punctuation">-</span> <span class="token key atrule">이름</span><span class="token punctuation">:</span> Java 설치
        <span class="token key atrule">사용</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>java@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">java-version</span><span class="token punctuation">:</span> <span class="token number">17</span>
          <span class="token key atrule">distribution</span><span class="token punctuation">:</span> adopt
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> gradle

      <span class="token punctuation">-</span> <span class="token key atrule">이름</span><span class="token punctuation">:</span> Gradle 래퍼 유효성 검사
        <span class="token key atrule">사용</span><span class="token punctuation">:</span> gradle/wrapper<span class="token punctuation">-</span>validation<span class="token punctuation">-</span>action@v1

      <span class="token punctuation">-</span> <span class="token key atrule">이름</span><span class="token punctuation">:</span> Node 설정
        <span class="token key atrule">사용</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">'18'</span>
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> <span class="token string">'yarn'</span>

      <span class="token punctuation">-</span> <span class="token key atrule">이름</span><span class="token punctuation">:</span> Yarn 설치 실행
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
             npm i -g corepack
             yarn install</span>

      <span class="token punctuation">-</span> <span class="token key atrule">이름</span><span class="token punctuation">:</span> 애플리케이션 빌드
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
             cd android
             ./gradlew assembleRelease</span>

      <span class="token punctuation">-</span> <span class="token key atrule">이름</span><span class="token punctuation">:</span> 애플리케이션 업로드
        <span class="token key atrule">사용</span><span class="token punctuation">:</span> actions/upload<span class="token punctuation">-</span>artifact@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> app
          <span class="token key atrule">path</span><span class="token punctuation">:</span> android/app/build/outputs/apk/release/app<span class="token punctuation">-</span>release.apk
          <span class="token key atrule">retention-days</span><span class="token punctuation">:</span> <span class="token number">3</span>

      <span class="token punctuation">-</span> <span class="token key atrule">이름</span><span class="token punctuation">:</span> Firebase 앱 배포에 아티팩트 업로드
        <span class="token key atrule">사용</span><span class="token punctuation">:</span> wzieba/Firebase<span class="token punctuation">-</span>Distribution<span class="token punctuation">-</span>Github<span class="token punctuation">-</span>Action@v1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">appId</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.FIREBASE_ANDROID_APP_ID <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">serviceCredentialsFileContent</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.FIREBASE_CREDENTIAL_FILE_CONTENT <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">testers</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            examle1@gmail.com
            examle2@gmail.com</span>
          <span class="token key atrule">file</span><span class="token punctuation">:</span> android/app/build/outputs/apk/release/app<span class="token punctuation">-</span>release.apk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="앱-스토어-및-플레이-스토어-업로드" tabindex="-1"><a class="header-anchor" href="#앱-스토어-및-플레이-스토어-업로드" aria-hidden="true">#</a> 앱 스토어 및 플레이 스토어 업로드</h1>
<p>당신의 앱이 프로덕션에 적합해지면, 다음 단계는 'main' 브랜치에서 각 스토어에 업로드하는 것입니다.</p>
<h2 id="app-store-testflight로-ios-앱-업로드" tabindex="-1"><a class="header-anchor" href="#app-store-testflight로-ios-앱-업로드" aria-hidden="true">#</a> App store Testflight로 iOS 앱 업로드</h2>
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
<p>실제 워크플로우로 이동하기 전에 몇 가지 작업을 수행하고 몇 가지 Github 비밀을 추가해야 합니다.</p>
<p>새 비밀을 생성하세요. 이름을 APPLE_DEVELOPER_USERNAME으로 지정하세요. 비밀 값은 App Store Connect 사용자 이름으로 지정한 사용자 이름입니다.</p>
<p>하나 더 비밀을 생성하세요. 이름을 APPLE_DEVELOPER_PASSWORD로 지정하세요. 여기로 이동해 새 App별 비밀번호를 생성해야 합니다: https://appleid.apple.com/account/manage. 이 비밀번호를 이 비밀의 값으로 입력하세요.</p>
<p>다음은 ipa 파일을 Testflight로 업로드하는 yaml 파일 부분입니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>   <span class="token operator">-</span> name<span class="token operator">:</span> TestFlight에 발행하기
     <span class="token literal-property property">env</span><span class="token operator">:</span>
        <span class="token constant">USERNAME</span><span class="token operator">:</span> $<span class="token punctuation">{</span> secrets<span class="token punctuation">.</span><span class="token constant">APPLE_DEVELOPER_USERNAME</span> <span class="token punctuation">}</span>
        <span class="token constant">PASSWORD</span><span class="token operator">:</span> $<span class="token punctuation">{</span> secrets<span class="token punctuation">.</span><span class="token constant">APPLE_DEVELOPER_PASSWORD</span> <span class="token punctuation">}</span>
     <span class="token literal-property property">run</span><span class="token operator">:</span> <span class="token operator">|</span>
        cd ios <span class="token operator">&amp;&amp;</span> xcrun altool <span class="token operator">--</span>upload<span class="token operator">-</span>app <span class="token operator">-</span>f $<span class="token constant">RUNNER_TEMP</span><span class="token operator">/</span>build<span class="token operator">/</span>Apps<span class="token operator">/</span>your_app<span class="token punctuation">.</span>ipa <span class="token operator">-</span>t ios <span class="token operator">-</span>u $<span class="token constant">USERNAME</span> <span class="token operator">-</span>p $<span class="token constant">PASSWORD</span>


그리고 전체 <span class="token constant">YAML</span> 파일은 다음과 같습니다<span class="token operator">:</span>

<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token template-punctuation string">`</span></span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">js
name: "iOS 제품 앱 빌드"

on:
  push:
    branches:
      - main

jobs:
  build_with_signing:
    runs-on: macos-latest
    steps:
        - name: Xcode 버전 확인
          run: /usr/bin/xcodebuild -version
        - name: 저장소 체크아웃
          uses: actions/checkout@v3
        - name: 디버그 워크플로 변수
          run: |
            echo "CERTIFICATE_PATH: $CERTIFICATE_PATH"
            echo "PP_PATH: $PP_PATH"
            echo "KEYCHAIN_PATH: $KEYCHAIN_PATH"
            echo "P12_PASSWORD: $P12_PASSWORD"
        - name: Apple 인증서 및 프로비전 프로필 설치
          env:
            BUILD_CERTIFICATE_BASE64: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> secrets<span class="token punctuation">.</span><span class="token constant">BUILD_CERTIFICATE_BASE64</span> <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
            P12_PASSWORD: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> secrets<span class="token punctuation">.</span><span class="token constant">P12_PASSWORD</span> <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
            PROVISION_PROFILES_BASE64: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> secrets<span class="token punctuation">.</span><span class="token constant">PROVISION_PROFILES_BASE64</span> <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
            KEYCHAIN_PASSWORD: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> secrets<span class="token punctuation">.</span><span class="token constant">KEYCHAIN_PASSWORD</span> <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
          run: |
            CERTIFICATE_PATH=$RUNNER_TEMP/build_certificate.p12
            PP_ARCHIVE=$RUNNER_TEMP/mobile_pp.tgz
            KEYCHAIN_PATH=$RUNNER_TEMP/app-signing.keychain-db

            echo -n "$BUILD_CERTIFICATE_BASE64" | base64 --decode -o $CERTIFICATE_PATH
            echo -n "$PROVISION_PROFILES_BASE64" | base64 --decode -o $PP_ARCHIVE

            security create-keychain -p "$KEYCHAIN_PASSWORD" $KEYCHAIN_PATH
            security set-keychain-settings -lut 21600 $KEYCHAIN_PATH
            security unlock-keychain -p "$KEYCHAIN_PASSWORD" $KEYCHAIN_PATH

            echo "P12_PASSWORD: $P12_PASSWORD"
            security import $CERTIFICATE_PATH -P "$P12_PASSWORD" -A -t cert -f pkcs12 -k $KEYCHAIN_PATH
            security list-keychain -d user -s $KEYCHAIN_PATH

            mkdir -p ~/Library/MobileDevice/Provisioning\ Profiles
            tar xzvf $PP_ARCHIVE -C $RUNNER_TEMP
            for PROVISION in </span><span class="token template-punctuation string">`</span></span>ls $<span class="token constant">RUNNER_TEMP</span><span class="token comment">/*.mobileprovision`
            do
              UUID=`/usr/libexec/PlistBuddy -c 'Print :UUID' /dev/stdin &lt;&lt;&lt; $(security cms -D -i $PROVISION)`
              cp $PROVISION ~/Library/MobileDevice/Provisioning\ Profiles/$UUID.mobileprovision
            done

            security find-identity -v -p codesigning
            ls -l ~/Library/MobileDevice/Provisioning\ Profiles

        - uses: actions/setup-node@v3
          with:
            node-version: '18'
            cache: 'yarn'

        - name: 작업 공간 정리
          run: |
            git clean -ffdx
            npm cache clean --force

        - name: Xcode 빌드 정리
          run: |
            cd ios
            xcodebuild clean -workspace your_app.xcworkspace -scheme your_app

        - name: yarn 종속성 설치
          run: |
            cd ios
            yarn install

        - name: CocoaPod 종속성 설치
          run: |
            cd ios
            pod repo update
            pod install

        - name: 아카이브 빌드
          run: |
            cd ios
            xcodebuild -workspace your_app.xcworkspace \
            -scheme "your_app" \
            -sdk iphoneos \
            -configuration Debug \
            -destination generic/platform=iOS \
            -archivePath $RUNNER_TEMP/your_app.xcarchive \
            archive

        - name: ipa 내보내기
          env:
            EXPORT_OPTIONS_PLIST: ${ secrets.EXPORT_OPTIONS_PLIST }
          run: |
            EXPORT_OPTS_PATH=$RUNNER_TEMP/ExportOptions.plist
            echo -n "$EXPORT_OPTIONS_PLIST" | base64 --decode -o $EXPORT_OPTS_PATH
            xcodebuild -exportArchive -archivePath $RUNNER_TEMP/your_app.xcarchive -exportOptionsPlist $EXPORT_OPTS_PATH -exportPath $RUNNER_TEMP/build

        - name: 애플리케이션 업로드
          uses: actions/upload-artifact@v3
          with:
            name: app
            path: ${ runner.temp }/build
            retention-days: 3

        - name: TestFlight에 발행하기
          env:
            USERNAME: ${ secrets.APPLE_DEVELOPER_USERNAME }
            PASSWORD: ${ secrets.APPLE_DEVELOPER_PASSWORD }
          run: |
            cd ios &amp;&amp; xcrun altool --upload-app -f $RUNNER_TEMP/build/Apps/your_app.ipa -t ios -u $USERNAME -p $PASSWORD
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="안드로이드-앱-play-스토어-내부-테스트로-업로드하기" tabindex="-1"><a class="header-anchor" href="#안드로이드-앱-play-스토어-내부-테스트로-업로드하기" aria-hidden="true">#</a> 안드로이드 앱 Play 스토어 내부 테스트로 업로드하기```</h2>
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
<p>새로운 비밀 키를 생성하고 SERVICE_ACCOUNT_JSON이라는 이름을 지정해야 합니다. 다음 단계를 따라 서비스 계정 JSON을 얻을 수 있습니다:</p>
<ul>
<li>Google Cloud Console을 엽니다</li>
<li>프로젝트를 선택합니다</li>
<li>서비스 계정 만들기를 클릭합니다</li>
<li>이름을 선택하고 적절한 권한을 추가합니다 (예: '소유자')</li>
<li>새로 만든 서비스 계정을 열고 키 탭을 클릭하고 새 키를 추가합니다. 유형은 JSON입니다.</li>
<li>성공적으로 완료되면 JSON 파일이 자동으로 다운로드됩니다.</li>
<li>이 파일의 내용을 SERVICE_ACCOUNT_JSON Github 비밀로 저장합니다.</li>
</ul>
<p>이제 Google Play 콘솔에 사용자를 추가해야 합니다. 다음을 수행하세요:</p>
<ul>
<li>Google Play 콘솔을 열고 개발자 계정을 선택합니다</li>
<li>사용자 및 권한을 엽니다</li>
<li>새 사용자 초대를 클릭하고 이전 단계에서 생성한 서비스 계정의 이메일을 추가합니다</li>
<li>서비스 계정이 앱에 배포할 권한을 부여합니다.</li>
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
<p>여기는 내부 테스트를 위해 aab 파일을 업로드하는 부분입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>      <span class="token operator">-</span> name<span class="token operator">:</span> Play Store에 애플리케이션 업로드
        <span class="token literal-property property">uses</span><span class="token operator">:</span> r0adkll<span class="token operator">/</span>upload<span class="token operator">-</span>google<span class="token operator">-</span>play@v1
        <span class="token keyword">with</span><span class="token operator">:</span>
            <span class="token literal-property property">serviceAccountJsonPlainText</span><span class="token operator">:</span> $<span class="token punctuation">{</span> secrets<span class="token punctuation">.</span><span class="token constant">SERVICE_ACCOUNT_JSON</span> <span class="token punctuation">}</span>
            <span class="token literal-property property">packageName</span><span class="token operator">:</span> com<span class="token punctuation">.</span>your_app
            <span class="token literal-property property">releaseFiles</span><span class="token operator">:</span> android<span class="token operator">/</span>app<span class="token operator">/</span>build<span class="token operator">/</span>outputs<span class="token operator">/</span>bundle<span class="token operator">/</span>release<span class="token operator">/</span>app<span class="token operator">-</span>release<span class="token punctuation">.</span>aab
            <span class="token literal-property property">track</span><span class="token operator">:</span> internal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 구성에서 ‘track’의 값을 변경함으로써 AAB 파일 업로드의 대상을 결정할 수 있습니다. ‘production’을 사용하면 앱이 자동으로 검토를 받도록 제출됩니다. 그러나 릴리스 프로세스를 더 잘 제어하기 위해 여기서는 ‘internal’을 사용했습니다. 이 track으로 앱을 내부 테스트용으로 업로드하면 나중에 수동으로 프로덕션으로 승격시킬 수 있어 릴리스 주기를 더 잘 제어하고 감독할 수 있게 됩니다.</p>
<p>그리고 여기가 전체 yaml 파일입니다:</p>
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
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">"안드로이드 프로덕션 앱 빌드"</span>

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 저장소 체크아웃
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Java 설치
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>java@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">java-version</span><span class="token punctuation">:</span> <span class="token number">17</span>
          <span class="token key atrule">distribution</span><span class="token punctuation">:</span> adopt
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> gradle

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Gradle 래퍼 유효성 검사
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> gradle/wrapper<span class="token punctuation">-</span>validation<span class="token punctuation">-</span>action@v1

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Node 설정
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">"18"</span>
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> <span class="token string">"yarn"</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Yarn 설치 실행
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          npm i -g corepack
          yarn install</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 애플리케이션 빌드
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          cd android
          ./gradlew bundleRelease</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 애플리케이션 업로드
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/upload<span class="token punctuation">-</span>artifact@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> app
          <span class="token key atrule">path</span><span class="token punctuation">:</span> android/app/build/outputs/bundle/release/app<span class="token punctuation">-</span>release.aab
          <span class="token key atrule">retention-days</span><span class="token punctuation">:</span> <span class="token number">3</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Play 스토어에 애플리케이션 업로드
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> r0adkll/upload<span class="token punctuation">-</span>google<span class="token punctuation">-</span>play@v1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">serviceAccountJsonPlainText</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SERVICE_ACCOUNT_JSON <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">packageName</span><span class="token punctuation">:</span> com.your_app
          <span class="token key atrule">releaseFiles</span><span class="token punctuation">:</span> android/app/build/outputs/bundle/release/app<span class="token punctuation">-</span>release.aab
          <span class="token key atrule">track</span><span class="token punctuation">:</span> internal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>이 종합 가이드에서는 iOS 및 안드로이드 앱의 빌드 및 배포 프로세스를 자동화하는 GitHub Actions의 강력함을 탐색했습니다. 이러한 워크플로우를 구현함으로써 개발자들은 앱 배포를 크게 간소화하고 테스트를 단순화하며 제품으로의 원활한 전환을 보장할 수 있습니다.</p>
<p>GitHub Actions를 앱 개발 파이프라인에 신속하게 통합할 수 있는 능력은 시간을 절약할 뿐만 아니라 수동 오류를 최소화하여 팀이 혁신에 더 많은 시간을 투자하고 반복적인 작업을 줄일 수 있도록 도와줍니다.```</p>
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
