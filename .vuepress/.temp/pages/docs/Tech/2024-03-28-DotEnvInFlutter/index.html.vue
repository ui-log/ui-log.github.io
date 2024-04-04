<template><div><p><img src="@source/docs/Tech/2024-03-28-DotEnvInFlutter/img/DotEnvInFlutter_0.png" alt="DotEnvInFlutter_0"></p>
<p>flutter_dotenv은 플러터 애플리케이션에서 .env 파일로부터 환경 변수를 로드할 수 있게 해주는 플러터 패키지입니다. 환경 변수는 API 키, 데이터베이스 자격 증명 또는 기타 민감한 데이터와 같은 구성 정보를 보유하는 키-값 쌍입니다. .env 파일을 사용하면 민감한 정보를 코드베이스와 분리하여 서로 다른 환경(개발, 스테이징, 프로덕션 등)에 대한 다양한 구성을 쉽게 관리할 수 있습니다.</p>
<p>flutter_dotenv를 사용하는 방법에 대한 간단한 소개입니다:</p>
<ul>
<li>pubspec.yaml 파일에 flutter_dotenv 패키지를 추가하세요:</li>
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
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">dependencies</span><span class="token punctuation">:</span>
  <span class="token key atrule">flutter_dotenv</span><span class="token punctuation">:</span> ^3.1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>
<p>해당 패키지를 가져오려면 flutter pub get을 실행합니다.</p>
</li>
<li>
<p>Flutter 프로젝트의 루트 디렉토리에 .env 파일을 생성합니다. 이 파일에 환경 변수를 KEY=VALUE 형식으로 저장하시면 됩니다. 예를 들면:</p>
</li>
</ol>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code>API_KEY=여기에_당신의_앱_키를_입력하세요
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
<ol start="4">
<li>pubspec.yaml 파일에 .env 파일을 assets에 추가해주세요:</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>assets:
    - .env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>Dart 파일에서 flutter_dotenv 패키지를 import 해주세요:</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">import</span> <span class="token string">'package:flutter_dotenv/flutter_dotenv.dart'</span><span class="token punctuation">;</span>
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
<ol start="6">
<li>.env 파일에서 환경 변수를 로드하세요:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> async <span class="token punctuation">{</span>
  <span class="token keyword">await</span> dotenv<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">runApp</span><span class="token punctuation">(</span><span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>dotenv.load() 함수는 .env 파일에서 환경 변수를 로드하고 dotenv.env 객체를 통해 이들에 접근할 수 있게 합니다.</p>
<ol start="7">
<li>dotenv.env 객체를 사용하여 코드에서 환경 변수에 액세스하세요:</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>String apiKey <span class="token operator">=</span> dotenv<span class="token punctuation">.</span>env<span class="token punctuation">[</span><span class="token string">'API_KEY'</span><span class="token punctuation">]</span><span class="token operator">!</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>.env 파일에 제공된 키를 사용하여 환경 변수의 값을 액세스할 수 있습니다. 환경 변수를 찾을 수 없거나 비어있는 경우 기본값을 제공하거나 적절히 처리할 수 있습니다.</p>
<p>flutter_dotenv을 사용하면 민감한 정보를 코드베이스와 분리하고 다양한 구성을 쉽게 관리하며 민감한 데이터가 버전 제어 시스템에서 노출되지 않도록 할 수 있습니다.</p>
</div></template>
