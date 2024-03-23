<template><div><p>프로젝트에 Firebase 🔥을 어떻게 추가하는지 궁금할 수도 있고, 이미 알고 계실 수도 있습니다. 확실한 한 가지는 100초보다 더 걸린다는 것입니다. 하지만, 만약에 새로운 🆕 또는 기존 플러터 프로젝트에 Firebase를 💯초 이내에 추가할 수 있다고 말해주면 어떨까요? 😱 너무 좋은 소리일 것 같지만, 함께 하면 제가 증명해 줄게요!</p>
<p><img src="@source/docs/Tech/2024-03-23-AddFirebaseintoYourFlutterAppWithin100Seconds/img/Add-Firebase-into-Your-Flutter-App-—-Within-100-Seconds_0.png" alt="Add-Firebase-into-Your-Flutter-App-—-Within-100-Seconds_0.png"></p>
<h2 id="단계-1-firebase-cli-설치" tabindex="-1"><a class="header-anchor" href="#단계-1-firebase-cli-설치" aria-hidden="true">#</a> 단계 1: Firebase CLI 설치</h2>
<p>시작하기 전에, 컴퓨터에 Firebase CLI가 설치되어 있는지 확인해주세요. 그렇지 않다면, 다음 명령어를 실행하여 전역적으로 설치하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">-</span>g firebase<span class="token operator">-</span>tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>curl <span class="token operator">-</span>sL https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>firebase<span class="token punctuation">.</span>tools <span class="token operator">|</span> bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>다음 명령어를 실행하여 Firebase 계정에 로그인하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>firebase login
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
<p>아래 명령어를 사용하여 Firebase 계정에 연결된 모든 프로젝트를 표시해 보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>firebase projects<span class="token operator">:</span>list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>다음으로, 아래 명령어를 실행하여 FlutterFire CLI를 활성화해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>dart pub global activate flutterfire_cli
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
<p>만약 Mac을 사용 중이라면 경고가 표시될 수 있어요 👇</p>
<p><img src="@source/docs/Tech/2024-03-23-AddFirebaseintoYourFlutterAppWithin100Seconds/img/Add-Firebase-into-Your-Flutter-App-—-Within-100-Seconds_1.png" alt="이미지"></p>
<p>이 경고를 해결하려면 먼저 사용 중인 쉘을 확인해야 해요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>echo $<span class="token constant">SHELL</span>
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
<p>현재 사용 중인 셸의 경로를 나타내는 명령입니다. 예를 들어, /bin/bash, /bin/zsh 또는 다른 셸과 같습니다.</p>
<p>사용 중인 셸에 따라 구성 파일이 달라집니다:</p>
<ul>
<li>Bash의 경우, 구성 파일은 일반적으로 ~/.bashrc 또는 ~/.bash_profile입니다.</li>
<li>Zsh의 경우, 구성 파일은 ~/.zshrc입니다.</li>
</ul>
<p>이제 경로를 알게 되었으니 nano 또는 vim과 같은 텍스트 편집기를 사용할 수 있습니다. 예를 들어, Zsh를 사용하고 ~/.zshrc를 편집하려는 경우 다음 명령을 실행하십시오:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nano <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>해당 경로를 추가하고 저장하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token constant">PATH</span><span class="token operator">=</span><span class="token string">"$PATH"</span><span class="token operator">:</span><span class="token string">"$HOME/.pub-cache/bin"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="단계-2-새로운-또는-기존-플러터-앱에-firebase-추가하기" tabindex="-1"><a class="header-anchor" href="#단계-2-새로운-또는-기존-플러터-앱에-firebase-추가하기" aria-hidden="true">#</a> 단계 2: 새로운 또는 기존 플러터 앱에 Firebase 추가하기</h2>
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
<p>새로운 Flutter 프로젝트 또는 기존 프로젝트에 Firebase를 통합할 수 있는 옵션이 있습니다. 이 튜토리얼에서는 FlutterShop UI 키트에 Firebase를 추가하는 방법을 보여드릴 거에요. 이 UI 키트에는 100개 이상의 사전 빌드된 스크린이 함께 제공되어, Flutter를 사용하여 어떤 유형의 전자 상거래 앱도 만들 수 있어요. FlutterShop을 사용하면 앱이 전문적으로 보이게 되며 개발 시간을 최대 70% 절약할 수 있어요. 소스 코드를 무료로 다운로드하거나 라이브 데모를 확인할 수 있어요.</p>
<p>프로젝트를 다운로드한 후, 선호하는 IDE에서 열어주세요. 그런 다음, firebase_core 패키지를 프로젝트에 추가하세요. 또는 Flutter 프로젝트 디렉토리에서 다음 명령을 실행하여 패키지를 설치할 수도 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>flutter pub add firebase_core
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>거의 다 왔어요! Flutter 프로젝트를 Firebase에 연결하려면 간단히 Flutter 프로젝트 디렉토리에서 이 단일 명령을 실행하면 돼요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>플러터파이어 구성
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>기존 프로젝트를 사용하거나 새 프로젝트를 생성할 수 있습니다. 🔄 이 데모에서는 새 프로젝트를 만들어 'FlutterShop-100s-challenge'라고 이름을 지으려고 합니다. 프로젝트를 생성하는 동안 사용하려는 플랫폼을 선택할 수 있습니다. 작업을 완료하면 lib 디렉터리를 확인해 보면 플러터파이어 CLI에 의해 생성된 'firebase_options.dart'라는 새 파일이 있는 것을 발견할 수 있습니다. 📂 인상적이죠? 이제 main.dart 파일로 돌아가 봅시다. main 함수를 비동기 함수로 변환하고 DefaultFirebaseOptions를 사용하여 Firebase를 초기화할 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">await</span> Firebase<span class="token punctuation">.</span><span class="token function">initializeApp</span><span class="token punctuation">(</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> DefaultFirebaseOptions<span class="token punctuation">.</span>currentPlatform<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Firebase 통합이 완료되었습니다 🔥. 이제 다른 프로젝트에 Firebase를 통합하고 싶을 때는 해당 프로젝트 디렉터리에서 'flutterfire configure' 명령을 실행하기만 하면 됩니다</p>
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
<p>이 튜토리얼에 대한 여러분의 의견을 듣고 싶어요. 도움이 되었던 점이 무엇인지 궁금해요. 즐겁고 유용하게 느꼈다면 👏 박수를 부탁드려요. 여러분의 피드백은 저에게 중요하며, 여러분에게 가치 있고 유용한 콘텐츠를 만들 수 있도록 돕아줘요. 이 튜토리얼을 읽어주셔서 감사해요.</p>
</div></template>
