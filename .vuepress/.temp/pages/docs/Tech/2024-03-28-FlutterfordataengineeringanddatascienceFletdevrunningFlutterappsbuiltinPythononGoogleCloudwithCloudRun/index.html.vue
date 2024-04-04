<template><div><p>플러터(Flutter)는 구글의 SDK로, 모바일, 웹 및 데스크톱에서 아름답고 빠른 사용자 경험을 제작하기 위한 것이며, 하나의 코드베이스로 제작됩니다. 2021년 개발자 설문조사에 따르면, 플러터는 가장 인기 있는 크로스 플랫폼 프레임워크입니다.</p>
<p><img src="@source/docs/Tech/2024-03-28-FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun/img/FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun_0.png" alt="이미지"></p>
<p>이제 Flet.dev 덕분에 소프트웨어와 데이터 엔지니어링/과학 분야 사이를 연결하고 크로스 플랫폼 상호작용 멀티 유저 애플리케이션 및 데이터 제품 구축의 표준이 될 수 있는 잠재력이 있습니다!</p>
<p>Flet.dev 프로젝트는 데이터 엔지니어 및 데이터 과학자에게 플러터를 제공하여 사용자가 쉽게 자신이 선호하는 언어인 Python으로 실시간 웹, 모바일 및 데스크톱 앱을 구축할 수 있도록 합니다. 반면 소프트웨어 엔지니어는 일반적으로 Dart 언어로 플러터를 사용할 것입니다. 프론트엔드 경험이 없어도 됩니다. Flet.dev는 아파치 2.0 라이선스로 오픈 소스이며 사용할 수 있습니다.</p>
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
<p><img src="@source/docs/Tech/2024-03-28-FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun/img/FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun_1.png" alt="이미지"></p>
<p>짧은 소개 후에 이를 사용하여 다음과 같은 데이터 응용 프로그램을 구축할 수 있는 기회를 생각해보세요:</p>
<ul>
<li>Google GenAI 모델(PaLM2, Imagen, Chirp 등)을 활용한 AI 솔루션의 프로토타입</li>
<li>데이터 과학 what-if 시뮬레이션</li>
<li>최적화 what-if 시뮬레이션</li>
<li>GCP Vertex AI 플랫폼에서 구축된 머신러닝 모델 데모</li>
</ul>
<p>본 문서는 이러한 모든 사용 사례의 기초로, flet.dev로 구축된 데이터 응용 프로그램을 Google Cloud 플랫폼의 Cloud Run에서 배포 및 확장하는 방법을 보여줍니다. Cloud Run은 서버리스 HTTP 컨테이너를 배포하고 확장하기 위한 완전 관리형 컴퓨팅 환경을 제공합니다.</p>
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
<p>Flet 앱을 선택할 때 호스팅 플랫폼을 선택할 때 필요한 요구 사항 중 하나는 Flet 앱이 UI의 실시간 부분적 업데이트 및 이벤트를 프로그램으로 다시 전송하기 위해 이 메커니즘을 사용하는 WebSockets의 지원입니다. Cloud Run은 추가 구성 없이도이 요구 사항을 충족합니다.</p>
<p>자, 이제 손을 더럽게 해보고 hello-world Flet 애플리케이션을 만들어 보겠습니다.</p>
<p>개발 도구에 관해서는 Pycharm, Visual Studio Code와 같이 마음에 드는 IDE를 사용할 수 있고, 구글의 최신 IDE인 IDX를 확인할 수도 있습니다(https://idx.dev/). IDX는 최신 AI 기술을 사용하여 일상적인 코딩 작업에 도움을 주는데요. 개발 환경은 노트북에서 로컬로 실행하거나 보안에 민감한 기업의 요구 사항을 충족해야 할 때는 Google Cloud Workstations에서 사용 가능한 관리형 개발 환경을 사용할 수도 있습니다.</p>
<p>우리는 코드를 어디에서, 어떻게 작성하던지에 관계없이이 안내서를 쉽게 따를 수 있도록하고 싶습니다. 그래서 클라우드 기반 앱을 개발, 빌드, 디버깅 및 배포하도록 허용하는 통합 클라우드 코드 경험을 기반으로 내장 코드 편집기를 제공하는 Cloud Shell을 사용하겠습니다. Cloud Shell을 열어보세요:</p>
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
<p><img src="@source/docs/Tech/2024-03-28-FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun/img/FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun_2.png" alt=""></p>
<p>우리는 먼저 Flet.dev 문서에서 제공하는 Counter 앱 예제인 hello world Flet 앱을 빌드할 것입니다: https://flet.dev/docs/#flet-app-example</p>
<p>main.py라는 빈 파이썬 파일을 생성하고 다음 코드를 복사하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> flet <span class="token keyword">as</span> ft
<span class="token keyword">import</span> os
def <span class="token function">main</span><span class="token punctuation">(</span>page<span class="token operator">:</span> ft<span class="token punctuation">.</span>Page<span class="token punctuation">)</span><span class="token operator">:</span>
    page<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">"Flet counter example"</span>
    page<span class="token punctuation">.</span>vertical_alignment <span class="token operator">=</span> ft<span class="token punctuation">.</span>MainAxisAlignment<span class="token punctuation">.</span><span class="token constant">CENTER</span>

    txt_number <span class="token operator">=</span> ft<span class="token punctuation">.</span><span class="token function">TextField</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">"0"</span><span class="token punctuation">,</span> text_align<span class="token operator">=</span>ft<span class="token punctuation">.</span>TextAlign<span class="token punctuation">.</span><span class="token constant">RIGHT</span><span class="token punctuation">,</span> width<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">)</span>

    def <span class="token function">minus_click</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token operator">:</span>
        txt_number<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">str</span><span class="token punctuation">(</span><span class="token function">int</span><span class="token punctuation">(</span>txt_number<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        page<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    def <span class="token function">plus_click</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token operator">:</span>
        txt_number<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">str</span><span class="token punctuation">(</span><span class="token function">int</span><span class="token punctuation">(</span>txt_number<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
        page<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    page<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
        ft<span class="token punctuation">.</span><span class="token function">Row</span><span class="token punctuation">(</span>
            <span class="token punctuation">[</span>
                ft<span class="token punctuation">.</span><span class="token function">IconButton</span><span class="token punctuation">(</span>ft<span class="token punctuation">.</span>icons<span class="token punctuation">.</span><span class="token constant">REMOVE</span><span class="token punctuation">,</span> on_click<span class="token operator">=</span>minus_click<span class="token punctuation">)</span><span class="token punctuation">,</span>
                txt_number<span class="token punctuation">,</span>
                ft<span class="token punctuation">.</span><span class="token function">IconButton</span><span class="token punctuation">(</span>ft<span class="token punctuation">.</span>icons<span class="token punctuation">.</span><span class="token constant">ADD</span><span class="token punctuation">,</span> on_click<span class="token operator">=</span>plus_click<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            alignment<span class="token operator">=</span>ft<span class="token punctuation">.</span>MainAxisAlignment<span class="token punctuation">.</span><span class="token constant">CENTER</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">)</span>

ft<span class="token punctuation">.</span><span class="token function">app</span><span class="token punctuation">(</span>target<span class="token operator">=</span>main<span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token function">int</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>environ<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"PORT"</span><span class="token punctuation">,</span> <span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> view <span class="token operator">=</span> ft<span class="token punctuation">.</span>AppView<span class="token punctuation">.</span><span class="token constant">WEB_BROWSER</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>단일 입력 필드(ft.TextField)와 두 개의 버튼(ft.IconButton)이 생성됩니다. 각 버튼에는 사용자가 클릭할 때 실행해야 하는 로직을 지정할 수 있는 옵션이 있습니다(on_click). 우리의 경우 클릭할 때마다 클릭 횟수를 증가하거나 감소시킵니다(minus_click, plus_click 파이썬 함수).</p>
<p>앱을 실행하려면 flet 모듈을 설치하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pip install flet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>로컬에서 앱을 실행하는 것은 main.py 스크립트를 실행하는 것만큼 쉽습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>python main<span class="token punctuation">.</span>py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>마지막 줄에는 view = ft.AppView.WEB_BROWSER가 포함되어 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span><span class="token punctuation">.</span>
ft<span class="token punctuation">.</span><span class="token function">app</span><span class="token punctuation">(</span>target<span class="token operator">=</span>main<span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token function">int</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>environ<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"PORT"</span><span class="token punctuation">,</span> <span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
view <span class="token operator">=</span> ft<span class="token punctuation">.</span>AppView<span class="token punctuation">.</span><span class="token constant">WEB_BROWSER</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이것이 우리가 Flet에게 우리 애플리케이션의 웹 인터페이스를 준비하도록 지시하는 방법입니다.```</p>
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
<p>만일 노트북에서 같은 코드를 실행하지만 Flet에 다음과 같이 지시한다면:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>ft<span class="token punctuation">.</span><span class="token function">app</span><span class="token punctuation">(</span>target<span class="token operator">=</span>main<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>해당 앱은 네이티브 OS(데스크톱) 창에서 시작됩니다. 비슷하게, Flet에게 Android 또는 iOS에서 앱으로 실행할 수 있게 앱을 준비하도록 지시할 수도 있습니다(PWA로 실행). PWA(Progressive Web Apps)란 앱과 같은 웹사이트를 웹사이트와 같은 앱으로 변경하는 방법이며, 또는 iOS 및 Android용 Flet 앱을 통해 앱으로 실행할 수 있습니다.</p>
<p>이 문서에서는 웹 인터페이스에 초점을 맞춥니다. 코드를 실행할 때:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>python main<span class="token punctuation">.</span>py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>당신의 앱이 준비되었고 요청을 기다리고 있다는 확인을 받아야합니다:</p>
<img src="@source/docs/Tech/2024-03-28-FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun/img/FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun_3.png" />
<p>애플리케이션을 미리보려면 Web 미리보기 버튼을 클릭 한 다음 표시된 메뉴에서 [포트 8080에서 미리보기] 옵션을 선택하십시오 (여기서 Flet 앱을 다른 포트에서 시작했다면 포트를 변경할 수도 있습니다).</p>
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
<p><img src="@source/docs/Tech/2024-03-28-FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun/img/FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun_4.png" alt="FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun_4.png"></p>
<p>Cloud Shell은 새 브라우저 창에서 프록시 서비스를 통해 미리보기 URL을 엽니다.</p>
<p><img src="@source/docs/Tech/2024-03-28-FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun/img/FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun_5.png" alt="FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun_5.png"></p>
<p>지금까지 Flet 앱을 로컬에서 시뮬레이션 실행했습니다. 이제 Cloud Run에 앱을 배포할 것입니다.</p>
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
<p>이를 위해 두 가지 추가 파일이 필요합니다:</p>
<ul>
<li>requirements.txt - 코드를 실행하는 데 필요한 모든 종속 항목을 나열하는 파일입니다. 지금은 Flet만 사용하지만 다음 기사에서 BigQuery, Vertex AI 등과 함께 사용할 것입니다. &quot;Hello World&quot; 예제에서 requirements.txt 파일은 단순히 flet를 설치하는 요청을 포함할 것입니다:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>flet<span class="token operator">>=</span><span class="token number">0.2</span><span class="token number">.4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Dockerfile - Cloud Run은 컨테이너를 실행하기 위한 완전 관리형 컴퓨팅을 제공하며, Dockerfile은 우리의 응용 프로그램을 나타내는 Docker 이미지로 패키징해야 하는 내용에 대한 지시 사항이 담긴 레시피와 같습니다.</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">FROM</span> <span class="token literal-property property">python</span><span class="token operator">:</span><span class="token number">3</span><span class="token operator">-</span>alpine

<span class="token constant">WORKDIR</span> <span class="token operator">/</span>app

<span class="token constant">COPY</span> requirements<span class="token punctuation">.</span>txt <span class="token punctuation">.</span><span class="token operator">/</span>
<span class="token constant">RUN</span> pip install <span class="token operator">--</span>no<span class="token operator">-</span>cache<span class="token operator">-</span>dir <span class="token operator">-</span>r requirements<span class="token punctuation">.</span>txt

<span class="token constant">COPY</span> <span class="token punctuation">.</span> <span class="token punctuation">.</span>

<span class="token constant">EXPOSE</span> <span class="token number">8080</span>

<span class="token constant">CMD</span> <span class="token punctuation">[</span><span class="token string">"python"</span><span class="token punctuation">,</span> <span class="token string">"./main.py"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이게 다에요! 이제 Cloud Run에 애플리케이션을 배포할 준비가 되었습니다!</p>
<p>배포를 시작하려면 Cloud Shell로 이동하여 다음 명령어를 사용하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>gcloud run deploy <span class="token operator">&lt;</span>your_app_name<span class="token operator">></span> <span class="token operator">--</span>allow<span class="token operator">-</span>unauthenticated
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
<ul>
<li>allow-unauthenticated는 모두에게 앱을 사용할 수 있게 합니다.</li>
</ul>
<p>Google이 앱을 호스트하고 확장할 지역을 지정해야 합니다:</p>
<p><img src="@source/docs/Tech/2024-03-28-FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun/img/FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun_6.png" alt="이미지"></p>
<p>우리는 폴란드/바르샤바인 유럽-중부-2를 선택했습니다.</p>
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
<p>Dockerfile을 사용하여 Docker 이미지를 빌드하고, 결과 Docker 이미지를 Artifact Registry에 푸시한 다음 클라우드 런에 서비스로 배포하는 것은 모두 우리를 위해 백그라운드에서 처리됩니다:</p>
<p><img src="@source/docs/Tech/2024-03-28-FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun/img/FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun_7.png" alt="이미지"></p>
<p>모두 준비되면 애플리케이션용 클라우드 런 서비스에 대한 정보를 받게 됩니다.</p>
<p><img src="@source/docs/Tech/2024-03-28-FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun/img/FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun_8.png" alt="이미지"></p>
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
<p>요약에서 [서비스 URL]을 클릭하여 온라인으로 어플리케이션을 확인해보세요:</p>
<p><img src="@source/docs/Tech/2024-03-28-FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun/img/FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun_9.png" alt="서비스 URL"></p>
<p>Cloud Run을 사용하면 앱을 쉽게 설정하고 실행할 수 있습니다. 하지만 서비스의 인기도와 성능(요청 횟수, 응답시간 등)를 알아야 할 것입니다. 이러한 핵심 메트릭은 DevOps나 SRE 엔지니어에게 중요합니다. Cloud Run은 이러한 메트릭을 자동으로 수집하고 서비스 대시보드에 표시합니다:</p>
<p><img src="@source/docs/Tech/2024-03-28-FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun/img/FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun_10.png" alt="Cloud Run 메트릭"></p>
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
<p>컨테이너 인스턴스 수에 대한 주석이 필요합니다. 각 인스턴스당 최대 동시 요청 수를 구성할 수 있습니다. 기본적으로 각 인스턴스는 동시에 최대 80개의 요청을 받을 수 있으며, 이를 최대 1000개까지 늘릴 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-03-28-FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun/img/FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun_11.png" alt="이미지"></p>
<p>다음 다이어그램은 인스턴스당 최대 동시 요청 수 설정이 수신된 동시 요청을 처리하는 데 필요한 인스턴스 수에 어떻게 영향을 미치는지 보여줍니다:</p>
<p><img src="@source/docs/Tech/2024-03-28-FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun/img/FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun_12.png" alt="다이어그램"></p>
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
<p>동시성이 1로 설정되어 있으면 각 요청은 고유한 컨테이너 인스턴스에서 처리됩니다. 동시성을 80으로 설정하면 각 컨테이너 인스턴스당 최대 80개의 슬롯이 있어 들어오는 요청을 처리하는 데 사용될 수 있습니다. 만약 들어오는 요청의 수가 80을 초과하면 Cloud Run은 이 수요를 처리하기 위해 추가 컨테이너 인스턴스를 준비할 것입니다. 각 컨테이너 인스턴스는 최대 80개의 요청을 처리할 수 있습니다.</p>
<p>저희 Cloud Run 서비스는 트래픽의 100%를 받게 됩니다. 그러나 서비스 내에서 여러 개의 리비전 (버전으로 생각하십시오)을 정의하고 어떤 리비전으로 얼마나 트래픽을 리디렉션해야 하는지 관리할 수 있습니다. A/B 테스트나 카나리 배포에 매우 유용한 옵션입니다:</p>
<!-- ![화면 이미지](./img/FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun_13.png) -->
<p>앱이 트래픽을 제공할 준비가 되었고, Cloud Run이 확장할 준비가 되어 있습니다.</p>
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
<p>Cloud Run에 대해 더 알고 싶다면, Wietse Venema의 책인 &quot;Building Serverless Applications with Google Cloud Run: A Real-World Guide to Building Production-Ready Services&quot;를 시작으로 삼는 것을 강력히 추천합니다.</p>
<p><img src="@source/docs/Tech/2024-03-28-FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun/img/FlutterfordataengineeringanddatascienceFletdevrunningFlutterappsbuiltinPythononGoogleCloudwithCloudRun_14.png" alt="image"></p>
<p>Flet.dev은 넓은 개발자들에게 Flutter를 더 인기 있게 만들 수 있는 잠재력이 있습니다. 이를 통해 크로스 플랫폼 데이터 애플리케이션을 쉽게 구축할 수 있으며, 이는 데이터 엔지니어 및 데이터 과학자들에게 귀중한 기술입니다. Cloud Run은 이러한 데이터 애플리케이션을 배포하고 확장하는 것을 쉽게 만들어줍니다.</p>
<p>이 글을 읽는 동안 즐겁게 느꼈다면 박수쳐 주세요. 더 많은 구글 클라우드 기반 데이터 과학, 데이터 엔지니어링, AI/ML을 보고 싶다면 LinkedIn에서 팔로우해주세요.</p>
</div></template>
