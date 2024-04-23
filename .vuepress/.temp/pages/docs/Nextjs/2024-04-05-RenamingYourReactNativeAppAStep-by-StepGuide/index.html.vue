<template><div><img src="@source/docs/Nextjs/2024-04-05-RenamingYourReactNativeAppAStep-by-StepGuide/img/RenamingYourReactNativeAppAStep-by-StepGuide_0.png" />
<p>만약 React Native 앱의 이름을 바꿔야 할 필요가 있다면, 브랜드 변경이나 프로젝트 초점 변경으로 인한 경우든 상황은 다를지 모릅니다. 기존의 React Native 앱의 이름을 변경하는 것은 몇 단계를 거쳐 이루어지며, 본 안내서에서는 이를 수동으로 진행해 보겠습니다. 이 단계를 따라가면 외부 패키지에 의존하지 않고도 원활한 전환을 보장할 수 있습니다.</p>
<h1 id="단계-1-package-json-업데이트" tabindex="-1"><a class="header-anchor" href="#단계-1-package-json-업데이트" aria-hidden="true">#</a> 단계 1: package.json 업데이트</h1>
<p>첫 번째 단계는 package.json 파일을 열고 name 필드를 찾는 것입니다. 이 필드는 앱의 고유 식별자로 작동합니다. 현재의 이름을 원하는 새 이름으로 바꾸어 주십시오.</p>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"newAppName"</span><span class="token punctuation">,</span>
  <span class="token comment">// other fields...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="단계-2-app-json-파일에서-앱-표시-이름-업데이트" tabindex="-1"><a class="header-anchor" href="#단계-2-app-json-파일에서-앱-표시-이름-업데이트" aria-hidden="true">#</a> 단계 2: app.json 파일에서 앱 표시 이름 업데이트</h2>
<p>app.json 파일에서 displayName 필드를 찾으세요. 이 필드는 기기에 설치된 앱의 표시 이름을 나타냅니다. 새 앱 이름으로 업데이트하십시오.</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"newAppName"</span><span class="token punctuation">,</span>
  <span class="token property">"displayName"</span><span class="token operator">:</span> <span class="token string">"새 앱 이름"</span>
<span class="token punctuation">}</span>
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
<h1 id="단계-3-androidmanifest-xml-업데이트" tabindex="-1"><a class="header-anchor" href="#단계-3-androidmanifest-xml-업데이트" aria-hidden="true">#</a> 단계 3: AndroidManifest.xml 업데이트</h1>
<p>Android를 위해서는 android/app/src/main/AndroidManifest.xml을 열고 패키지 속성을 찾으세요. 새 앱 이름과 일치하도록 업데이트해주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>manifest xmlns<span class="token operator">:</span>android<span class="token operator">=</span><span class="token string">"http://schemas.android.com/apk/res/android"</span>
  <span class="token keyword">package</span><span class="token operator">=</span><span class="token string">"com.newAppName"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-4-info-plist에서-ios-번들-식별자-업데이트" tabindex="-1"><a class="header-anchor" href="#단계-4-info-plist에서-ios-번들-식별자-업데이트" aria-hidden="true">#</a> 단계 4: Info.plist에서 iOS 번들 식별자 업데이트</h1>
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
<p>iOS의 경우, ios/<code v-pre>newAppName</code>/Info.plist 파일로 이동하여 CFBundleIdentifier를 찾으세요. 새 앱 이름과 일치하도록 업데이트하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>key<span class="token operator">></span>CFBundleIdentifier<span class="token operator">&lt;</span><span class="token operator">/</span>key<span class="token operator">></span>
<span class="token operator">&lt;</span>string<span class="token operator">></span>com<span class="token punctuation">.</span>newAppName<span class="token operator">&lt;</span><span class="token operator">/</span>string<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-5-정리-및-재빌드" tabindex="-1"><a class="header-anchor" href="#단계-5-정리-및-재빌드" aria-hidden="true">#</a> 단계 5: 정리 및 재빌드</h1>
<p>프로젝트를 정리하는 것은 변경 사항을 효과적으로 적용하는 데 중요합니다. 안드로이드의 경우 다음 명령을 실행하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cd android <span class="token operator">&amp;&amp;</span> <span class="token punctuation">.</span><span class="token operator">/</span>gradlew clean
cd <span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>iOS 경우, Xcode에서 ios 디렉토리를 열고 프로젝트를 정리하세요.</p>
<h1 id="단계-6-앱-참조-업데이트" tabindex="-1"><a class="header-anchor" href="#단계-6-앱-참조-업데이트" aria-hidden="true">#</a> 단계 6: 앱 참조 업데이트</h1>
<p>코드베이스에서 이전 앱 이름을 새로운 이름으로 수동으로 검색하고 대체하세요. 이 단계는 런타임 문제를 방지하기 위해 중요합니다.</p>
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
<h1 id="단계-7-변경-내용-확인" tabindex="-1"><a class="header-anchor" href="#단계-7-변경-내용-확인" aria-hidden="true">#</a> 단계 7: 변경 내용 확인</h1>
<p>마지막으로 앱을 실행하여 모든 것이 올바르게 작동하는지 확인하십시오. 다음 명령어를 사용하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx react<span class="token operator">-</span>native run<span class="token operator">-</span>android
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx react<span class="token operator">-</span>native run<span class="token operator">-</span>ios
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
<p>이 단계를 따라서 React Native 앱의 이름을 성공적으로 바꾸셨군요. 수동으로 진행하는 이 방법은 프로젝트에 가한 변경 사항을 제어하고 이해할 수 있도록 도와줍니다. 이름을 변경하는 과정을 추적하기 위해 버전 관리에 변경 사항을 커밋하는 것을 기억해 주세요.</p>
<p>제가 제시한 이 가이드가 React Native 앱의 이름을 수동으로 변경하는 과정을 탐험하는 데 도움이 되었으면 좋겠어요. 궁금한 점이나 문제가 발생하면 언제든지 문의해 주세요. 즐거운 코딩하세요!</p>
<ul>
<li>👏 스토리에 박수를 보내고 저자를 팔로우하세요</li>
<li>저자의 통찰력 있는 컨텐츠에 감사의 표시를 해주세요.</li>
<li>Abhishek Kumar를 팔로우하세요.</li>
<li>📰 Abhishek Kumar 발행물을 더 살펴보세요</li>
<li>🔔 소셜 미디어로 연결유지하세요</li>
<li>Level Up Coding을 트위터에서 팔로우하고 LinkedIn에서 연결하여 최신 토론과 콘텐츠를 업데이트하세요.</li>
</ul>
<h1 id="stackademic" tabindex="-1"><a class="header-anchor" href="#stackademic" aria-hidden="true">#</a> Stackademic</h1>
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
<p>마지막까지 읽어 주셔서 감사합니다. 이렇게 줄 글 남겨주셔서 감사합니다!</p>
<ul>
<li>작가를 클랩하고 팔로우할 것을 고려해 주세요! 👏</li>
<li>트위터(X), 링크드인, 유튜브에서 팔로우해주세요.</li>
<li>전세계에서 무료 프로그래밍 교육을 민주화하는 방법에 대해 더 알아보려면 Stackademic.com을 방문해 주세요.</li>
</ul>
</div></template>
