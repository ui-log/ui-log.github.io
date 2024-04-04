<template><div><img src="@source/docs/Tech/2024-03-28-UploadingFilesPhotoandGettingBase64RepresentationinFlutter/img/UploadingFilesPhotoandGettingBase64RepresentationinFlutter_0.png" />
<h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개:</h1>
<p>플러터(Flutter)에서 파일 및 사진을 업로드하고 해당 파일들의 base64 표현을 얻는 방법에 대한 가이드에 오신 것을 환영합니다. 이 문서에서는 프로세스를 단계별로 안내해 드립니다.</p>
<h1 id="개요" tabindex="-1"><a class="header-anchor" href="#개요" aria-hidden="true">#</a> 개요:</h1>
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
<p>파일을 업로드하고 사진을 base64 문자열로 변환하는 것은 모바일 앱 개발에서 흔한 작업입니다. 이미지, 문서 또는 다른 파일 유형을 다룰 때 Flutter는 파일 작업을 효율적으로 처리하기 위한 편리한 라이브러리를 제공합니다.</p>
<h1 id="사전-준비-사항" tabindex="-1"><a class="header-anchor" href="#사전-준비-사항" aria-hidden="true">#</a> 사전 준비 사항:</h1>
<p>시작하기 전에 개발 컴퓨터에 Flutter가 설치되어 있는지 확인하세요. Flutter 개발에 대한 기본 지식과 Getx State management에 대한 이해가 있는 것도 좋습니다.</p>
<h1 id="단계별-안내" tabindex="-1"><a class="header-anchor" href="#단계별-안내" aria-hidden="true">#</a> 단계별 안내:</h1>
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
<h2 id="단계-1-종속-항목-추가" tabindex="-1"><a class="header-anchor" href="#단계-1-종속-항목-추가" aria-hidden="true">#</a> 단계 1: 종속 항목 추가</h2>
<p>먼저, pubspec.yaml 파일에 필요한 종속 항목을 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">dependencies</span><span class="token operator">:</span>
  <span class="token literal-property property">cupertino_icons</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token number">1.0</span><span class="token number">.6</span>
  <span class="token literal-property property">get</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token number">4.6</span><span class="token number">.6</span>
  <span class="token literal-property property">gap</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token number">3.0</span><span class="token number">.1</span>
  <span class="token literal-property property">flutter_svg</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token number">2.0</span><span class="token number">.10</span><span class="token operator">+</span><span class="token number">1</span>
  <span class="token literal-property property">text_scroll</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token number">0.2</span><span class="token number">.0</span>
  <span class="token literal-property property">intl</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token number">0.19</span><span class="token number">.0</span>
  <span class="token literal-property property">file_picker</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token number">8.0</span><span class="token number">.0</span><span class="token operator">+</span><span class="token number">1</span>
  <span class="token literal-property property">permission_handler</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token number">11.3</span><span class="token number">.0</span>
  <span class="token literal-property property">mime</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token number">1.0</span><span class="token number">.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="단계-2-파일-선택" tabindex="-1"><a class="header-anchor" href="#단계-2-파일-선택" aria-hidden="true">#</a> 단계 2: 파일 선택</h2>
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
<p>당신을 위해 테이블 태그를 마크다운 형식으로 변경해 드릴게요.</p>
<table>
<thead>
<tr>
<th>Key</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>NSPhotoLibraryUsageDescription</td>
<td>We need access to your photo library to allow you to select photos for upload.</td>
</tr>
<tr>
<td>NSCameraUsageDescription</td>
<td>This app requires access to the camera and this lets you do things like scan QR code.</td>
</tr>
</tbody>
</table>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code># 프로젝트에 전역 플랫폼을 정의하려면 이 줄의 주석을 해제하세요
# platform <span class="token operator">:</span>ios<span class="token punctuation">,</span> <span class="token string">'12.0'</span>

# CocoaPods 분석은 Flutter 빌드 대기 시간에 동기적으로 네트워크 통계를 보냅니다<span class="token punctuation">.</span>
<span class="token constant">ENV</span><span class="token punctuation">[</span><span class="token string">'COCOAPODS_DISABLE_STATS'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'true'</span>

project <span class="token string">'Runner'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token string">'Debug'</span> <span class="token operator">=></span> <span class="token operator">:</span>debug<span class="token punctuation">,</span>
  <span class="token string">'Profile'</span> <span class="token operator">=></span> <span class="token operator">:</span>release<span class="token punctuation">,</span>
  <span class="token string">'Release'</span> <span class="token operator">=></span> <span class="token operator">:</span>release<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

def flutter_root
  generated_xcode_build_settings_path <span class="token operator">=</span> File<span class="token punctuation">.</span><span class="token function">expand_path</span><span class="token punctuation">(</span>File<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'..'</span><span class="token punctuation">,</span> <span class="token string">'Flutter'</span><span class="token punctuation">,</span> <span class="token string">'Generated.xcconfig'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> __FILE__<span class="token punctuation">)</span>
  unless File<span class="token punctuation">.</span>exist<span class="token operator">?</span><span class="token punctuation">(</span>generated_xcode_build_settings_path<span class="token punctuation">)</span>
    raise <span class="token string">"#{generated_xcode_build_settings_path} must exist. If you're running pod install manually, make sure flutter pub get is executed first"</span>
  end

  File<span class="token punctuation">.</span><span class="token function">foreach</span><span class="token punctuation">(</span>generated_xcode_build_settings_path<span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token operator">|</span>line<span class="token operator">|</span>
    matches <span class="token operator">=</span> line<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">FLUTTER_ROOT\=(.*)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> matches<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>strip <span class="token keyword">if</span> matches
  end
  raise <span class="token string">"FLUTTER_ROOT not found in #{generated_xcode_build_settings_path}. Try deleting Generated.xcconfig, then run flutter pub get"</span>
end

require File<span class="token punctuation">.</span><span class="token function">expand_path</span><span class="token punctuation">(</span>File<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'packages'</span><span class="token punctuation">,</span> <span class="token string">'flutter_tools'</span><span class="token punctuation">,</span> <span class="token string">'bin'</span><span class="token punctuation">,</span> <span class="token string">'podhelper'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> flutter_root<span class="token punctuation">)</span>

flutter_ios_podfile_setup

target <span class="token string">'Runner'</span> <span class="token keyword">do</span>
  use_frameworks<span class="token operator">!</span>
  use_modular_headers<span class="token operator">!</span>

  flutter_install_all_ios_pods File<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>File<span class="token punctuation">.</span><span class="token function">realpath</span><span class="token punctuation">(</span>__FILE__<span class="token punctuation">)</span><span class="token punctuation">)</span>
  target <span class="token string">'RunnerTests'</span> <span class="token keyword">do</span>
    inherit<span class="token operator">!</span> <span class="token operator">:</span>search_paths
  end
end

post_install <span class="token keyword">do</span> <span class="token operator">|</span>installer<span class="token operator">|</span>
  installer<span class="token punctuation">.</span>pods_project<span class="token punctuation">.</span>targets<span class="token punctuation">.</span>each <span class="token keyword">do</span> <span class="token operator">|</span>target<span class="token operator">|</span>
    <span class="token function">flutter_additional_ios_build_settings</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
      target<span class="token punctuation">.</span>build_configurations<span class="token punctuation">.</span>each <span class="token keyword">do</span> <span class="token operator">|</span>config<span class="token operator">|</span>
        config<span class="token punctuation">.</span>build_settings<span class="token punctuation">[</span><span class="token string">'ENABLE_BITCODE'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'NO'</span>
          config<span class="token punctuation">.</span>build_settings<span class="token punctuation">[</span><span class="token string">'IPHONEOS_DEPLOYMENT_TARGET'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'13.0'</span>
            config<span class="token punctuation">.</span>build_settings<span class="token punctuation">[</span><span class="token string">'GCC_PREPROCESSOR_DEFINITIONS'</span><span class="token punctuation">]</span> <span class="token operator">||=</span> <span class="token punctuation">[</span>
            <span class="token string">'$(inherited)'</span><span class="token punctuation">,</span>

            ## dart<span class="token operator">:</span> PermissionGroup<span class="token punctuation">.</span>photos
            <span class="token string">'PERMISSION_PHOTOS=1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span>

    end  
  end
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>GetXController 생성: 파일 선택 로직을 처리할 GetXController 클래스를 만드세요.</li>
<li>FilePicker 사용: GetXController 내에서 사용자가 파일을 선택할 수 있도록 FilePicker 패키지를 사용하세요.</li>
</ul>
<p>home_controller.dart</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">HomeController</span> <span class="token keyword">extends</span> <span class="token class-name">GetxController</span><span class="token punctuation">{</span>
 List<span class="token operator">&lt;</span>File<span class="token operator">></span> filesList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 FilePickerResult<span class="token operator">?</span> result<span class="token punctuation">;</span>

  <span class="token comment">// 파일 업로드</span>
  Future<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span> <span class="token function">uploadFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> async <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>filesList<span class="token punctuation">.</span>length <span class="token operator">>=</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">debugPrint</span><span class="token punctuation">(</span><span class="token string">"최대 파일 제한에 도달했습니다"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      result <span class="token operator">=</span> <span class="token keyword">await</span> FilePicker<span class="token punctuation">.</span>platform<span class="token punctuation">.</span><span class="token function">pickFiles</span><span class="token punctuation">(</span>
        <span class="token literal-property property">allowMultiple</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> FileType<span class="token punctuation">.</span>custom<span class="token punctuation">,</span>
        <span class="token literal-property property">allowCompression</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">allowedExtensions</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">'pdf'</span><span class="token punctuation">,</span>
          <span class="token string">'xls'</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
  
      <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> listTemp <span class="token operator">=</span> result<span class="token operator">!</span><span class="token punctuation">.</span>paths<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">File</span><span class="token punctuation">(</span>path<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        filesList<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>
            listTemp<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">-</span> filesList<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 남은 슬롯만 가져옴</span>
        <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'home'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">debugPrint</span><span class="token punctuation">(</span><span class="token string">"-----List $filesList"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">debugPrint</span><span class="token punctuation">(</span><span class="token string">"파일을 선택하지 않았습니다"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'home'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'home'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

  <span class="token comment">// 사진 업로드</span>
  Future<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span> <span class="token function">uploadPhoto</span><span class="token punctuation">(</span><span class="token punctuation">)</span> async <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>filesList<span class="token punctuation">.</span>length <span class="token operator">>=</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">debugPrint</span><span class="token punctuation">(</span><span class="token string">"최대 파일 제한에 도달했습니다"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">var</span> status <span class="token operator">=</span> <span class="token keyword">await</span> Permission<span class="token punctuation">.</span>photos<span class="token punctuation">.</span>status<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>status<span class="token punctuation">.</span>isGranted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">await</span> Permission<span class="token punctuation">.</span>photos<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        status <span class="token operator">=</span> <span class="token keyword">await</span> Permission<span class="token punctuation">.</span>photos<span class="token punctuation">.</span>status<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>status<span class="token punctuation">.</span>isGranted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">debugPrint</span><span class="token punctuation">(</span><span class="token string">'사진 액세스 권한이 거부되었습니다'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      result <span class="token operator">=</span> <span class="token keyword">await</span> FilePicker<span class="token punctuation">.</span>platform<span class="token punctuation">.</span><span class="token function">pickFiles</span><span class="token punctuation">(</span>
        <span class="token literal-property property">allowMultiple</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> FileType<span class="token punctuation">.</span>image<span class="token punctuation">,</span>
        <span class="token literal-property property">allowCompression</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> result<span class="token operator">!</span><span class="token punctuation">.</span>files<span class="token punctuation">.</span>isNotEmpty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        final List<span class="token operator">&lt;</span>File<span class="token operator">></span> listTemp <span class="token operator">=</span>
            result<span class="token operator">!</span><span class="token punctuation">.</span>paths<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">File</span><span class="token punctuation">(</span>path<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        filesList<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>listTemp<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">-</span> filesList<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'home'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">debugPrint</span><span class="token punctuation">(</span><span class="token string">"-----Photo List $filesList"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">debugPrint</span><span class="token punctuation">(</span><span class="token string">"사진을 선택하지 않았습니다"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'home'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="단계-3-화면에서-파일-내용-읽기" tabindex="-1"><a class="header-anchor" href="#단계-3-화면에서-파일-내용-읽기" aria-hidden="true">#</a> 단계 3: 화면에서 파일 내용 읽기</h2>
<p>선택한 파일의 내용을 File 클래스의 메소드를 사용하여 읽습니다:
home_screen.dart</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>ListView<span class="token punctuation">.</span><span class="token function">separated</span><span class="token punctuation">(</span>
                  <span class="token literal-property property">physics</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">NeverScrollableScrollPhysics</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">shrinkWrap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">itemCount</span><span class="token operator">:</span> homeController<span class="token punctuation">.</span>filesList<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
                  <span class="token literal-property property">itemBuilder</span><span class="token operator">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> idx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token function">CustomCardUploadFile</span><span class="token punctuation">(</span>
                      <span class="token function-variable function">onTap</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> homeController<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">,</span>
                      <span class="token literal-property property">index</span><span class="token operator">:</span> idx<span class="token punctuation">,</span>
                      <span class="token literal-property property">name</span><span class="token operator">:</span> homeController<span class="token punctuation">.</span><span class="token function">getFileName</span><span class="token punctuation">(</span>
                        homeController<span class="token punctuation">.</span>filesList<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">,</span>
                      <span class="token punctuation">)</span><span class="token punctuation">,</span>
                      <span class="token literal-property property">icon</span><span class="token operator">:</span> homeController<span class="token punctuation">.</span><span class="token function">checkTypeFile</span><span class="token punctuation">(</span>
                        homeController<span class="token punctuation">.</span>filesList<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">,</span>
                      <span class="token punctuation">)</span><span class="token punctuation">,</span>
                      <span class="token literal-property property">size</span><span class="token operator">:</span> homeController<span class="token punctuation">.</span><span class="token function">getFileSize</span><span class="token punctuation">(</span>
                        homeController<span class="token punctuation">.</span>filesList<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">,</span>
                      <span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token punctuation">)</span><span class="token punctuation">;</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">separatorBuilder</span><span class="token operator">:</span> <span class="token punctuation">(</span>BuildContext context<span class="token punctuation">,</span> int index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token keyword">const</span> <span class="token function">SizedBox</span><span class="token punctuation">(</span>
                      <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token punctuation">)</span><span class="token punctuation">;</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="단계-4-base64로-변환" tabindex="-1"><a class="header-anchor" href="#단계-4-base64로-변환" aria-hidden="true">#</a> 단계 4: Base64로 변환</h2>
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
<p>Dart의 내장 라이브러리를 사용하여 파일 내용을 base64 문자열로 변환하십시오:</p>
<p>home_controller.dart</p>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code>  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token function">getBase64</span><span class="token punctuation">(</span><span class="token class-name">File</span> file<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span><span class="token operator">?</span> base64<span class="token punctuation">;</span>
    <span class="token class-name">String</span><span class="token operator">?</span> contentType <span class="token operator">=</span> <span class="token function">getContentType</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>contentType <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>contentType<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"image"</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> uInt8List <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">readAsBytesSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        base64 <span class="token operator">=</span> <span class="token function">base64Encode</span><span class="token punctuation">(</span>uInt8List<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> uInt8List <span class="token operator">=</span> <span class="token keyword">await</span> file<span class="token punctuation">.</span><span class="token function">readAsBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        base64 <span class="token operator">=</span> <span class="token function">base64Encode</span><span class="token punctuation">(</span>uInt8List<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"contentType: </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">contentType</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> base64 <span class="token operator">?</span><span class="token operator">?</span> <span class="token string-literal"><span class="token string">""</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="단계-5-도우미-함수-처리" tabindex="-1"><a class="header-anchor" href="#단계-5-도우미-함수-처리" aria-hidden="true">#</a> 단계 5: 도우미 함수 처리</h2>
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
<p>Handling helper function은 파일 선택이나 base64 변환 과정 중에 발생할 수 있는 함수를 처리하기 위해 구현되었습니다:</p>
<p>getContentType</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>String<span class="token operator">?</span> <span class="token function">getContentType</span><span class="token punctuation">(</span><span class="token parameter">String filePath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 파일 확장자 결정</span>
    String extension <span class="token operator">=</span> filePath<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'.'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>last<span class="token punctuation">;</span>
    <span class="token comment">// 파일 확장자를 기반으로 MIME 유형 조회</span>
    String<span class="token operator">?</span> mimeType <span class="token operator">=</span> <span class="token function">lookupMimeType</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> mimeType<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>getFileName</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  String <span class="token function">getFileName</span><span class="token punctuation">(</span><span class="token parameter">File file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> filename <span class="token operator">=</span> file<span class="token punctuation">.</span>path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> filename<span class="token punctuation">[</span>filename<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>getFileSize</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  String <span class="token function">getFileSize</span><span class="token punctuation">(</span><span class="token parameter">File file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> fileSizeInBytes <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">lengthSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Convert bytes to kilobytes</span>
    <span class="token keyword">var</span> fileSizeInKB <span class="token operator">=</span> fileSizeInBytes <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>fileSizeInKB <span class="token operator">></span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Convert kilobytes to megabytes and return as a string</span>
      <span class="token keyword">var</span> fileSizeInMB <span class="token operator">=</span> fileSizeInKB <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token string">'${fileSizeInMB.toStringAsFixed(2)} MB'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">'${fileSizeInKB.toStringAsFixed(2)} KB'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>checkTypeFile</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">checkTypeFile</span><span class="token punctuation">(</span><span class="token parameter">File file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> filename <span class="token operator">=</span> file<span class="token punctuation">.</span>path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>filename<span class="token punctuation">[</span>filename<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">'pdf'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">"assets/svg/pdf.svg"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>filename<span class="token punctuation">[</span>filename<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">'png'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">"assets/svg/png.svg"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>filename<span class="token punctuation">[</span>filename<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">'jpg'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">"assets/svg/jpg.svg"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>filename<span class="token punctuation">[</span>filename<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">'xls'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">"assets/svg/xls.svg"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>filename<span class="token punctuation">[</span>filename<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">'jpeg'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">"assets/svg/jpg.svg"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>removeItems</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">void</span> <span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token parameter">int index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    filesList<span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'home'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="전체-코드-예시" tabindex="-1"><a class="header-anchor" href="#전체-코드-예시" aria-hidden="true">#</a> 전체 코드 예시:</h1>
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
<p>home_controller.dart</p>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'dart:convert'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'dart:io'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'dart:math'</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:file_picker/file_picker.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:flutter/cupertino.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:flutter/material.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:get/get_state_manager/get_state_manager.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:mime/mime.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:permission_handler/permission_handler.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'../model/file_model/file_model.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">HomeController</span> <span class="token keyword">extends</span> <span class="token class-name">GetxController</span> <span class="token punctuation">{</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">File</span><span class="token punctuation">></span></span> filesList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token class-name">FilePickerResult</span><span class="token operator">?</span> result<span class="token punctuation">;</span>

  <span class="token function">handleSubmit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> fileList <span class="token operator">=</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">FilesModel</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">debugPrint</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"--------File Before Convert </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">filesList</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token class-name">Future</span><span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span>filesList<span class="token punctuation">.</span><span class="token function">asMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>entries<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> base64String <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getBase64</span><span class="token punctuation">(</span>element<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      fileList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
        <span class="token class-name">FilesModel</span><span class="token punctuation">(</span>
          filename<span class="token punctuation">:</span> <span class="token function">getFileName</span><span class="token punctuation">(</span>element<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span>
          fileContent<span class="token punctuation">:</span> base64String<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Here is FileList base64</span>
    <span class="token function">debugPrint</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"--------After  Convert </span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">fileList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> e<span class="token punctuation">.</span>fileContent<span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//Now you can submit list of base64 to api</span>
  <span class="token punctuation">}</span>

  <span class="token function">handleUpload</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">showCupertinoModalPopup</span><span class="token punctuation">(</span>
      context<span class="token punctuation">:</span> context<span class="token punctuation">,</span>
      builder<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">CupertinoActionSheet</span><span class="token punctuation">(</span>
          title<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Option"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          actions<span class="token punctuation">:</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Widget</span><span class="token punctuation">></span></span><span class="token punctuation">[</span>
            <span class="token class-name">CupertinoActionSheetAction</span><span class="token punctuation">(</span>
              child<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Upload File"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">uploadFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">Navigator</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token class-name">CupertinoActionSheetAction</span><span class="token punctuation">(</span>
              child<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Gallery"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">uploadPhoto</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">Navigator</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          cancelButton<span class="token punctuation">:</span> <span class="token class-name">CupertinoActionSheetAction</span><span class="token punctuation">(</span>
            child<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Cancel"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token class-name">Navigator</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">void</span> <span class="token function">removeItem</span><span class="token punctuation">(</span>int index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    filesList<span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'home'</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token class-name">String</span> <span class="token function">getFileName</span><span class="token punctuation">(</span><span class="token class-name">File</span> file<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> filename <span class="token operator">=</span> file<span class="token punctuation">.</span>path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"/"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> filename<span class="token punctuation">[</span>filename<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token class-name">String</span> <span class="token function">getFileSize</span><span class="token punctuation">(</span><span class="token class-name">File</span> file<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> fileSizeInBytes <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">lengthSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Convert bytes to kilobytes</span>
    <span class="token keyword">var</span> fileSizeInKB <span class="token operator">=</span> fileSizeInBytes <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>fileSizeInKB <span class="token operator">></span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Convert kilobytes to megabytes and return as a string</span>
      <span class="token keyword">var</span> fileSizeInMB <span class="token operator">=</span> fileSizeInKB <span class="token operator">/</span> <span class="token number">1024</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">'</span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">fileSizeInMB<span class="token punctuation">.</span><span class="token function">toStringAsFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string"> MB'</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">'</span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">fileSizeInKB<span class="token punctuation">.</span><span class="token function">toStringAsFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span></span><span class="token string"> KB'</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token class-name">String</span><span class="token operator">?</span> <span class="token function">getContentType</span><span class="token punctuation">(</span><span class="token class-name">String</span> filePath<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Determine file extension</span>
    <span class="token class-name">String</span> <span class="token keyword">extension</span> <span class="token operator">=</span> filePath<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'.'</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span>last<span class="token punctuation">;</span>
    <span class="token comment">// Lookup MIME type based on file extension</span>
    <span class="token class-name">String</span><span class="token operator">?</span> mimeType <span class="token operator">=</span> <span class="token function">lookupMimeType</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> mimeType<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token function">getBase64</span><span class="token punctuation">(</span><span class="token class-name">File</span> file<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span><span class="token operator">?</span> base64<span class="token punctuation">;</span>
    <span class="token class-name">String</span><span class="token operator">?</span> contentType <span class="token operator">=</span> <span class="token function">getContentType</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>contentType <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>contentType<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"image"</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> uInt8List <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">readAsBytesSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        base64 <span class="token operator">=</span> <span class="token function">base64Encode</span><span class="token punctuation">(</span>uInt8List<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> uInt8List <span class="token operator">=</span> <span class="token keyword">await</span> file<span class="token punctuation">.</span><span class="token function">readAsBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        base64 <span class="token operator">=</span> <span class="token function">base64Encode</span><span class="token punctuation">(</span>uInt8List<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"contentType: </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">contentType</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> base64 <span class="token operator">?</span><span class="token operator">?</span> <span class="token string-literal"><span class="token string">""</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">checkTypeFile</span><span class="token punctuation">(</span><span class="token class-name">File</span> file<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> filename <span class="token operator">=</span> file<span class="token punctuation">.</span>path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"."</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>filename<span class="token punctuation">[</span>filename<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string-literal"><span class="token string">'pdf'</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">"assets/svg/pdf.svg"</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>filename<span class="token punctuation">[</span>filename<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string-literal"><span class="token string">'png'</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">"assets/svg/png.svg"</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>filename<span class="token punctuation">[</span>filename<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string-literal"><span class="token string">'jpg'</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">"assets/svg/jpg.svg"</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>filename<span class="token punctuation">[</span>filename<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string-literal"><span class="token string">'xls'</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">"assets/svg/xls.svg"</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>filename<span class="token punctuation">[</span>filename<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string-literal"><span class="token string">'jpeg'</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">"assets/svg/jpg.svg"</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">''</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">uploadFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>filesList<span class="token punctuation">.</span>length <span class="token operator">>=</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">debugPrint</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Maximum file limit reached"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token class-name">FilePicker</span><span class="token punctuation">.</span>platform<span class="token punctuation">.</span><span class="token function">pickFiles</span><span class="token punctuation">(</span>
      allowMultiple<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      type<span class="token punctuation">:</span> <span class="token class-name">FileType</span><span class="token punctuation">.</span>custom<span class="token punctuation">,</span>
      allowCompression<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      allowedExtensions<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token string-literal"><span class="token string">'pdf'</span></span><span class="token punctuation">,</span>
        <span class="token string-literal"><span class="token string">'xls'</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> listTemp <span class="token operator">=</span> result<span class="token operator">!</span><span class="token punctuation">.</span>paths<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token class-name">File</span><span class="token punctuation">(</span>path<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      filesList<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>
          listTemp<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">-</span> filesList<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Take only remaining slots</span>
      <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'home'</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">debugPrint</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"-----List </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">filesList</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">debugPrint</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"No file selected"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'home'</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'home'</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token function">uploadPhoto</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>filesList<span class="token punctuation">.</span>length <span class="token operator">>=</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">debugPrint</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Maximum file limit reached"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> status <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token class-name">Permission</span><span class="token punctuation">.</span>photos<span class="token punctuation">.</span>status<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>status<span class="token punctuation">.</span>isGranted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token class-name">Permission</span><span class="token punctuation">.</span>photos<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      status <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token class-name">Permission</span><span class="token punctuation">.</span>photos<span class="token punctuation">.</span>status<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>status<span class="token punctuation">.</span>isGranted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">debugPrint</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'Permission denied for accessing photos'</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token class-name">FilePicker</span><span class="token punctuation">.</span>platform<span class="token punctuation">.</span><span class="token function">pickFiles</span><span class="token punctuation">(</span>
      allowMultiple<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      type<span class="token punctuation">:</span> <span class="token class-name">FileType</span><span class="token punctuation">.</span>image<span class="token punctuation">,</span>
      allowCompression<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> result<span class="token operator">!</span><span class="token punctuation">.</span>files<span class="token punctuation">.</span>isNotEmpty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">File</span><span class="token punctuation">></span></span> listTemp <span class="token operator">=</span>
          result<span class="token operator">!</span><span class="token punctuation">.</span>paths<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token class-name">File</span><span class="token punctuation">(</span>path<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      filesList<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>listTemp<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">-</span> filesList<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'home'</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">debugPrint</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"-----Photo List </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">filesList</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">debugPrint</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"No photo selected"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'home'</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>home_screen.dart</p>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:flutter/material.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:get/get.dart'</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:uploadfile_base64_fltter/controller/home_controller.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'../widgets/custom_upload_card.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">HomeScreen</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">HomeScreen</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token keyword">super</span><span class="token punctuation">.</span>key<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> homeController <span class="token operator">=</span> <span class="token class-name">Get</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">HomeController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
      appBar<span class="token punctuation">:</span> <span class="token class-name">AppBar</span><span class="token punctuation">(</span>
        elevation<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        title<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>
          <span class="token string-literal"><span class="token string">'Upload File and Photo'</span></span><span class="token punctuation">,</span>
          style<span class="token punctuation">:</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>fontSize<span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      body<span class="token punctuation">:</span> <span class="token class-name">GetBuilder</span><span class="token punctuation">(</span>
        init<span class="token punctuation">:</span> homeController<span class="token punctuation">,</span>
        id<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"home"</span></span><span class="token punctuation">,</span>
        builder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token class-name">Padding</span><span class="token punctuation">(</span>
            padding<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">symmetric</span><span class="token punctuation">(</span>horizontal<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            child<span class="token punctuation">:</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
              children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
                <span class="token keyword">const</span> <span class="token class-name">SizedBox</span><span class="token punctuation">(</span>
                  height<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name">TextButton</span><span class="token punctuation">(</span>
                  onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> homeController<span class="token punctuation">.</span><span class="token function">handleUpload</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">,</span>
                  child<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Upload File"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name">ListView</span><span class="token punctuation">.</span><span class="token function">separated</span><span class="token punctuation">(</span>
                  physics<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">NeverScrollableScrollPhysics</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                  shrinkWrap<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                  itemCount<span class="token punctuation">:</span> homeController<span class="token punctuation">.</span>filesList<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
                  itemBuilder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> idx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token class-name">CustomCardUploadFile</span><span class="token punctuation">(</span>
                      onTap<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> homeController<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">,</span>
                      index<span class="token punctuation">:</span> idx<span class="token punctuation">,</span>
                      name<span class="token punctuation">:</span> homeController<span class="token punctuation">.</span><span class="token function">getFileName</span><span class="token punctuation">(</span>
                        homeController<span class="token punctuation">.</span>filesList<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">,</span>
                      <span class="token punctuation">)</span><span class="token punctuation">,</span>
                      icon<span class="token punctuation">:</span> homeController<span class="token punctuation">.</span><span class="token function">checkTypeFile</span><span class="token punctuation">(</span>
                        homeController<span class="token punctuation">.</span>filesList<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">,</span>
                      <span class="token punctuation">)</span><span class="token punctuation">,</span>
                      size<span class="token punctuation">:</span> homeController<span class="token punctuation">.</span><span class="token function">getFileSize</span><span class="token punctuation">(</span>
                        homeController<span class="token punctuation">.</span>filesList<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">,</span>
                      <span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token punctuation">)</span><span class="token punctuation">;</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  separatorBuilder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token keyword">const</span> <span class="token class-name">SizedBox</span><span class="token punctuation">(</span>
                      height<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                    <span class="token punctuation">)</span><span class="token punctuation">;</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      bottomNavigationBar<span class="token punctuation">:</span> <span class="token class-name">SafeArea</span><span class="token punctuation">(</span>
        child<span class="token punctuation">:</span> <span class="token class-name">Padding</span><span class="token punctuation">(</span>
          padding<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">symmetric</span><span class="token punctuation">(</span>horizontal<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          child<span class="token punctuation">:</span> <span class="token class-name">ElevatedButton</span><span class="token punctuation">(</span>
            onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> homeController<span class="token punctuation">.</span><span class="token function">handleSubmit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            style<span class="token punctuation">:</span> <span class="token class-name">ButtonStyle</span><span class="token punctuation">(</span>
              shape<span class="token punctuation">:</span> <span class="token class-name">MaterialStateProperty</span><span class="token punctuation">.</span>all<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">RoundedRectangleBorder</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>
                <span class="token class-name">RoundedRectangleBorder</span><span class="token punctuation">(</span>
                  borderRadius<span class="token punctuation">:</span> <span class="token class-name">BorderRadius</span><span class="token punctuation">.</span><span class="token function">circular</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
              backgroundColor<span class="token punctuation">:</span>
                  <span class="token class-name">MaterialStateProperty</span><span class="token punctuation">.</span>all<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Color</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token class-name">Colors</span><span class="token punctuation">.</span>transparent<span class="token punctuation">)</span><span class="token punctuation">,</span>
              padding<span class="token punctuation">:</span> <span class="token class-name">MaterialStateProperty</span><span class="token punctuation">.</span>all<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">EdgeInsetsGeometry</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>
                <span class="token keyword">const</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            child<span class="token punctuation">:</span> <span class="token class-name">Ink</span><span class="token punctuation">(</span>
              decoration<span class="token punctuation">:</span> <span class="token class-name">BoxDecoration</span><span class="token punctuation">(</span>
                gradient<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">LinearGradient</span><span class="token punctuation">(</span>
                  colors<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Colors</span><span class="token punctuation">.</span>blue<span class="token punctuation">,</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>green<span class="token punctuation">]</span><span class="token punctuation">,</span>
                  begin<span class="token punctuation">:</span> <span class="token class-name">Alignment</span><span class="token punctuation">.</span>centerLeft<span class="token punctuation">,</span>
                  end<span class="token punctuation">:</span> <span class="token class-name">Alignment</span><span class="token punctuation">.</span>centerRight<span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
                borderRadius<span class="token punctuation">:</span> <span class="token class-name">BorderRadius</span><span class="token punctuation">.</span><span class="token function">circular</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
              child<span class="token punctuation">:</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>
                height<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                constraints<span class="token punctuation">:</span>
                    <span class="token keyword">const</span> <span class="token class-name">BoxConstraints</span><span class="token punctuation">(</span>minWidth<span class="token punctuation">:</span> <span class="token number">88.0</span><span class="token punctuation">,</span> minHeight<span class="token punctuation">:</span> <span class="token number">36.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                alignment<span class="token punctuation">:</span> <span class="token class-name">Alignment</span><span class="token punctuation">.</span>center<span class="token punctuation">,</span>
                child<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>
                  <span class="token string-literal"><span class="token string">"Submit"</span></span><span class="token punctuation">,</span>
                  textAlign<span class="token punctuation">:</span> <span class="token class-name">TextAlign</span><span class="token punctuation">.</span>center<span class="token punctuation">,</span>
                  style<span class="token punctuation">:</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>white<span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="ui-데모" tabindex="-1"><a class="header-anchor" href="#ui-데모" aria-hidden="true">#</a> UI 데모:</h1>
<p><img src="@source/docs/Tech/2024-03-28-UploadingFilesPhotoandGettingBase64RepresentationinFlutter/img/UploadingFilesPhotoandGettingBase64RepresentationinFlutter_1.png" alt="이미지"></p>
<p><img src="@source/docs/Tech/2024-03-28-UploadingFilesPhotoandGettingBase64RepresentationinFlutter/img/UploadingFilesPhotoandGettingBase64RepresentationinFlutter_2.png" alt="이미지"></p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론:</h1>
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
<p>축하합니다! 플러터에서 파일을 업로드하고 해당 파일의 base64 표현을 얻는 방법을 배웠어요. 제공된 코드 조각들로 자유롭게 실험해보고 자신의 플러터 프로젝트에 통합해보세요 🚀</p>
</div></template>
