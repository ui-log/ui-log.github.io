<template><div><p>판타스틱한 React 애플리케이션을 만들었네요! 이제 이를 세계와 공유할 때입니다. Nginx 웹 서버에 앱을 배포하는 것은 이를 효율적이고 견고하게 할 수 있는 방법 중 하나입니다. 이 안내서에서는 React 앱을 Nginx 서버에 배포하는 과정을 안내해 드리겠습니다.</p>
<h1 id="준비-사항" tabindex="-1"><a class="header-anchor" href="#준비-사항" aria-hidden="true">#</a> 준비 사항</h1>
<p>시작하기 전에 다음 사항들을 확인하세요:</p>
<ul>
<li>배포를 위해 준비된 프로덕션용 React 애플리케이션이 필요합니다 (npm run build를 사용하여 프로덕션 빌드를 생성할 수 있습니다).</li>
<li>Nginx가 설치되고 구성된 서버에 액세스할 수 있어야 합니다.</li>
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
<h1 id="단계-1-react-앱을-배포할-준비하기" tabindex="-1"><a class="header-anchor" href="#단계-1-react-앱을-배포할-준비하기" aria-hidden="true">#</a> 단계 1: React 앱을 배포할 준비하기</h1>
<p>먼저, React 앱이 프로덕션 환경에 최적화되었는지 확인하세요. 앱의 루트 디렉토리에서 다음 명령을 실행해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm run build
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Save to grepper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 명령을 사용하면 프로젝트 디렉토리 내의 새 빌드 폴더에 앱의 제품용 빌드가 생성됩니다.</p>
<h1 id="단계-2-파일-서버로-전송" tabindex="-1"><a class="header-anchor" href="#단계-2-파일-서버로-전송" aria-hidden="true">#</a> 단계 2: 파일 서버로 전송</h1>
<p>다음으로, 앱의 빌드 파일을 서버로 전송해야 합니다. 이 작업을 수행하기 위해 scp, rsync 또는 심지어 FTP와 같은 도구를 사용할 수 있습니다. 예를 들어 scp를 사용하는 방법:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>bashCopy 코드
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>scp <span class="token operator">-</span>r <span class="token operator">/</span>path<span class="token operator">/</span>to<span class="token operator">/</span>your<span class="token operator">/</span>react<span class="token operator">/</span>app<span class="token operator">/</span>build<span class="token comment">/* user@your-server-ip:/var/www/html/
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Grepper에 저장
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 명령은 앱의 빌드 폴더 내용을 Nginx 웹 루트 디렉토리로 전송합니다 (이 예시에서는 /var/www/html/). 설정에 맞게 경로와 서버 대상을 수정해주세요.</p>
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
<h1 id="단계-3-nginx-구성하기" tabindex="-1"><a class="header-anchor" href="#단계-3-nginx-구성하기" aria-hidden="true">#</a> 단계 3: Nginx 구성하기</h1>
<p>이제 Nginx를 구성하여 React 앱을 제공할 시간입니다. 앱을 위한 Nginx 서버 블록(가상 호스트로도 알려짐)을 만들어보세요. /etc/nginx/sites-available/ 디렉터리에 새 구성 파일을 만드세요 (예: your-app.conf):</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nginxCopy code
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>server <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    server_name your<span class="token operator">-</span>domain<span class="token punctuation">.</span>com www<span class="token punctuation">.</span>your<span class="token operator">-</span>domain<span class="token punctuation">.</span>com<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    root <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>www<span class="token operator">/</span>html<span class="token punctuation">;</span>  # 빌드 파일이 저장된 위치로 이 경로를 변경해주세요
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        try_files $uri <span class="token operator">/</span>index<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    location <span class="token operator">/</span><span class="token keyword">static</span><span class="token operator">/</span> <span class="token punctuation">{</span>
        # 정적 파일이 저장된 경로
        alias <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>www<span class="token operator">/</span>html<span class="token operator">/</span><span class="token keyword">static</span><span class="token operator">/</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    location <span class="token operator">/</span>media<span class="token operator">/</span> <span class="token punctuation">{</span>
        # 미디어 파일이 저장된 <span class="token function">경로</span> <span class="token punctuation">(</span>해당되는 경우<span class="token punctuation">)</span>
        alias <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>www<span class="token operator">/</span>html<span class="token operator">/</span>media<span class="token operator">/</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    # 추가적인 Nginx <span class="token function">구성</span> <span class="token punctuation">(</span>예<span class="token operator">:</span> <span class="token constant">SSL</span><span class="token punctuation">,</span> 캐싱 등<span class="token punctuation">)</span>은 여기에 작성해주세요
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>grepper에 저장
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>실제 도메인 이름으로 your-domain.com을 대체하고 빌드 파일의 경로를 일치시킵니다. 파일을 전송할 때 사용한 경로와 일치하는지 확인해주세요.</p>
<h1 id="단계-4-nginx-구성-활성화" tabindex="-1"><a class="header-anchor" href="#단계-4-nginx-구성-활성화" aria-hidden="true">#</a> 단계 4: Nginx 구성 활성화</h1>
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
<p>Nginx 설정을 활성화하기 위한 심볼릭 링크를 생성하세요:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">ln</span> -s /etc/nginx/sites-available/your-app.conf /etc/nginx/sites-enabled/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Grepper에 저장하기</p>
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
<p>위의 텍스트를 친근한 톤으로 한국어로 번역해드리겠습니다.</p>
<p>그런 다음, 구성을 테스트하여 구문 오류가 없는지 확인하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>bashCopy 코드
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>sudo nginx <span class="token operator">-</span>t
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>grepper에 저장
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
<p>모든 것이 잘 되었다면 변경 내용을 적용하려면 Nginx를 다시로드하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>bash 코드를 복사하세요
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>sudo systemctl reload nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Grepper에 저장하세요
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
<h1 id="단계-5-도메인-설정-구성" tabindex="-1"><a class="header-anchor" href="#단계-5-도메인-설정-구성" aria-hidden="true">#</a> 단계 5: 도메인 설정 구성</h1>
<p>마지막으로, 도메인의 DNS 설정을 서버의 IP 주소로 지정하도록 구성하세요. 일반적으로이 단계는 도메인 등록기의 제어판을 통해 수행됩니다.</p>
<h1 id="단계-6-react-앱에-액세스" tabindex="-1"><a class="header-anchor" href="#단계-6-react-앱에-액세스" aria-hidden="true">#</a> 단계 6: React 앱에 액세스</h1>
<p>모든 것이 준비되었으므로, 웹 브라우저에서 도메인을 방문하여 React 앱에 액세스 할 수 있어야합니다.</p>
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
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>처음에는 React 앱을 Nginx 서버에 배포하는 것이 어려워 보일 수 있지만, 이러한 단계를 따라하면 앱을 전 세계 사용자에게 액세스할 수 있게됩니다. Nginx는 탁월한 성능과 신뢰성을 제공하여 웹 응용 프로그램을 제공하는 인기 있는 선택지입니다. 이제 여러분의 React 앱이 웹에서 빛을 발할 준비가 되었습니다!</p>
</div></template>
