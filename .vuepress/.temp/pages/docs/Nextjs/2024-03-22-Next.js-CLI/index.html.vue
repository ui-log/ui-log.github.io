<template><div><h1 id="next-js-cli" tabindex="-1"><a class="header-anchor" href="#next-js-cli" aria-hidden="true">#</a> Next.js CLI</h1>
<p>Next.js CLI는 애플리케이션을 개발하고 빌드하고 시작하며 다양한 작업을 수행할 수 있게 해줍니다.</p>
<p>사용 가능한 CLI 명령어 목록을 얻으려면 프로젝트 디렉토리 안에서 다음 명령어를 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>next <span class="token operator">-</span> h<span class="token punctuation">;</span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Usage next <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>command<span class="token punctuation">]</span>

Next<span class="token punctuation">.</span>js <span class="token constant">CLI</span>는 응용 프로그램을 개발<span class="token punctuation">,</span> 빌드<span class="token punctuation">,</span> 시작하고 더 많은 기능을 할 수 있게 해줍니다<span class="token punctuation">.</span>

<span class="token literal-property property">Options</span><span class="token operator">:</span>
  <span class="token operator">-</span>v<span class="token punctuation">,</span> <span class="token operator">--</span>version                Next<span class="token punctuation">.</span>js 버전을 출력합니다<span class="token punctuation">.</span>
  <span class="token operator">-</span>h<span class="token punctuation">,</span> <span class="token operator">--</span>help                   이 메시지를 표시합니다<span class="token punctuation">.</span>

<span class="token literal-property property">Commands</span><span class="token operator">:</span>
  build <span class="token punctuation">[</span>directory<span class="token punctuation">]</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>  응용 프로그램의 최적화된 프로덕션 빌드를 생성합니다<span class="token punctuation">.</span>
                               각 라우트에 대한 정보를 표시합니다<span class="token punctuation">.</span>
  dev <span class="token punctuation">[</span>directory<span class="token punctuation">]</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>    핫 코드 리로딩<span class="token punctuation">,</span> 에러 보고 등이 포함된 개발 모드에서 Next<span class="token punctuation">.</span>js를 시작합니다<span class="token punctuation">.</span>
  info <span class="token punctuation">[</span>options<span class="token punctuation">]</span>               현재 시스템에 관한 관련 세부 정보를 출력하여 Next<span class="token punctuation">.</span>js 버그를 보고할 수 있습니다<span class="token punctuation">.</span>
  lint <span class="token punctuation">[</span>directory<span class="token punctuation">]</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>   <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/src</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/app</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/pages</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/components</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/lib</span><span class="token template-punctuation string">`</span></span> 디렉터리의 모든 파일에 대해 ESLint를 실행합니다<span class="token punctuation">.</span>
                               이미 응용 프로그램에서 ESLint가 구성되어 있지 않은 경우 필요한 종속성을 설치하는 가이드 설정을 제공합니다<span class="token punctuation">.</span>
  start <span class="token punctuation">[</span>directory<span class="token punctuation">]</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>  프로덕션 모드에서 Next<span class="token punctuation">.</span>js를 시작합니다<span class="token punctuation">.</span> 응용 프로그램은 먼저 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">next build</span><span class="token template-punctuation string">`</span></span>로 컴파일해야 합니다<span class="token punctuation">.</span>
  telemetry <span class="token punctuation">[</span>options<span class="token punctuation">]</span>          Next<span class="token punctuation">.</span>js의 완전히 익명화된 텔레메트리 수집을 활성화하거나 비활성화할 수 있습니다<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음 명령에는 노드 인수를 전달할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">NODE_OPTIONS</span><span class="token operator">=</span><span class="token string">'--throw-deprecation'</span> next
<span class="token constant">NODE_OPTIONS</span><span class="token operator">=</span><span class="token string">'-r esm'</span> next
<span class="token constant">NODE_OPTIONS</span><span class="token operator">=</span><span class="token string">'--inspect'</span> next
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
<blockquote>
<p>알아두면 좋은 점: 명령어 없이 next를 실행하면 next dev를 실행하는 것과 동일합니다</p>
</blockquote>
<h2 id="개발" tabindex="-1"><a class="header-anchor" href="#개발" aria-hidden="true">#</a> 개발</h2>
<p>next dev는 핫 코드 리로딩, 오류 보고 등이 포함된 개발 모드에서 애플리케이션을 시작합니다.</p>
<p>next dev로 사용 가능한 옵션 목록을 얻으려면 프로젝트 디렉토리 내에서 다음 명령어를 실행하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>다음 명령어를 사용하여 개발 서버를 실행할 수 있어요<span class="token operator">:</span> next dev <span class="token operator">-</span>h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>아래는 예상되는 결과입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">사용법</span><span class="token operator">:</span> next dev <span class="token punctuation">[</span>디렉토리<span class="token punctuation">]</span> <span class="token punctuation">[</span>옵션<span class="token punctuation">]</span>

핫 코드 리로딩<span class="token punctuation">,</span> 에러 보고 및 기타 기능을 제공하는 개발 모드에서 Next<span class="token punctuation">.</span>js를 시작합니다<span class="token punctuation">.</span>

<span class="token literal-property property">인수</span><span class="token operator">:</span>
  <span class="token punctuation">[</span>디렉토리<span class="token punctuation">]</span>                           애플리케이션을 빌드할 디렉토리입니다<span class="token punctuation">.</span>
                                      디렉토리가 제공되지 않으면 현재 디렉토리가 사용됩니다<span class="token punctuation">.</span>

<span class="token literal-property property">옵션</span><span class="token operator">:</span>
  <span class="token operator">--</span>turbo                           <span class="token function">Turbopack</span><span class="token punctuation">(</span>베타<span class="token punctuation">)</span>을 사용하여 개발 모드를 시작합니다<span class="token punctuation">.</span>
  <span class="token operator">-</span>p<span class="token punctuation">,</span> <span class="token operator">--</span>port <span class="token operator">&lt;</span>포트<span class="token operator">></span>                 애플리케이션을 시작할 포트 번호를 지정합니다<span class="token punctuation">.</span>
                                   <span class="token punctuation">(</span>기본값<span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span> <span class="token literal-property property">환경변수</span><span class="token operator">:</span> <span class="token constant">PORT</span><span class="token punctuation">)</span>
  <span class="token operator">-</span><span class="token constant">H</span><span class="token punctuation">,</span> <span class="token operator">--</span>hostname <span class="token operator">&lt;</span>호스트명<span class="token operator">></span>         애플리케이션을 시작할 호스트명을 지정합니다<span class="token punctuation">.</span> <span class="token punctuation">(</span>기본값<span class="token operator">:</span> <span class="token number">0.0</span><span class="token number">.0</span><span class="token number">.0</span><span class="token punctuation">)</span>
  <span class="token operator">--</span>experimental<span class="token operator">-</span>https              <span class="token constant">HTTPS</span>를 사용하여 서버를 시작하고 자체 서명된 인증서를 생성합니다<span class="token punctuation">.</span>
  <span class="token operator">--</span>experimental<span class="token operator">-</span>https<span class="token operator">-</span>key<span class="token punctuation">,</span> <span class="token operator">&lt;</span>경로<span class="token operator">></span> <span class="token constant">HTTPS</span> 키 파일의 경로입니다<span class="token punctuation">.</span>
  <span class="token operator">--</span>experimental<span class="token operator">-</span>https<span class="token operator">-</span>cert<span class="token punctuation">,</span> <span class="token operator">&lt;</span>경로<span class="token operator">></span> <span class="token constant">HTTPS</span> 인증서 파일의 경로입니다<span class="token punctuation">.</span>
  <span class="token operator">--</span>experimental<span class="token operator">-</span>https<span class="token operator">-</span>ca<span class="token punctuation">,</span> <span class="token operator">&lt;</span>경로<span class="token operator">></span>   <span class="token constant">HTTPS</span> 인증 기관 파일의 경로입니다<span class="token punctuation">.</span>
  <span class="token operator">--</span>experimental<span class="token operator">-</span>upload<span class="token operator">-</span>trace<span class="token punctuation">,</span> <span class="token operator">&lt;</span>추적<span class="token constant">URL</span><span class="token operator">></span> 일부 디버깅 추적을 원격 <span class="token constant">HTTP</span> <span class="token constant">URL</span>로 보고합니다<span class="token punctuation">.</span> 민감한 데이터를 포함합니다<span class="token punctuation">.</span>
  <span class="token operator">-</span>h<span class="token punctuation">,</span> <span class="token operator">--</span>help                        이 메시지를 표시합니다<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>기본적으로 응용 프로그램은 http://localhost:3000에서 시작됩니다. 기본 포트는 -p를 사용하여 변경할 수 있습니다. 예를들어,요:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>next dev <span class="token operator">-</span>p <span class="token number">4000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>또는 PORT 환경 변수를 사용하여:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">PORT</span><span class="token operator">=</span><span class="token number">4000</span> next dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>참고:
PORT는 .env에 설정할 수 없습니다. HTTP 서버를 부팅하는 시점은 다른 코드가 초기화되기 전에 일어나기 때문입니다.<br>
만약 CLI 옵션 --port나 PORT 환경 변수로 포트를 지정하지 않았다면, Next.js는 자동으로 다른 포트로 재시도하여 사용 가능한 포트를 찾습니다.</p>
</blockquote>
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
<p>기본값인 0.0.0.0과 다른 호스트 이름을 설정할 수도 있어요. 이렇게 하면 네트워크상의 다른 기기에서 애플리케이션을 이용할 수 있어요. 기본 호스트 이름은 다음과 같이 -H로 변경할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>next dev <span class="token operator">-</span><span class="token constant">H</span> <span class="token number">192.168</span><span class="token number">.1</span><span class="token number">.2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="turbopack" tabindex="-1"><a class="header-anchor" href="#turbopack" aria-hidden="true">#</a> Turbopack</h3>
<p>Turbopack(beta)는 우리의 새 번들러로, Next.js에서 테스트되고 안정화되고 있습니다. 이 도구를 사용하면 애플리케이션 작업 중 로컬 반복 작업을 빠르게 할 수 있어요.</p>
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
<p>개발 모드에서 Turbopack을 사용하려면 --turbo 옵션을 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>next dev <span class="token operator">--</span>turbo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="로컬-개발을-위한-https" tabindex="-1"><a class="header-anchor" href="#로컬-개발을-위한-https" aria-hidden="true">#</a> 로컬 개발을 위한 HTTPS</h3>
<p>웹훅이나 인증과 같은 특정 사용 사례의 경우, 로컬호스트에서 안전한 환경을 갖기 위해 HTTPS를 사용해야 할 수도 있습니다. Next.js는 다음과 같이 next dev로 자체 서명된 인증서를 생성할 수 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>next dev <span class="token operator">--</span>experimental<span class="token operator">-</span>https
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>--experimental-https-key 및 --experimental-https-cert를 사용하여 사용자 지정 인증서 및 키를 제공할 수도 있습니다. 선택적으로 --experimental-https-ca를 사용하여 사용자 지정 CA 인증서를 제공할 수도 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>next dev <span class="token operator">--</span>experimental<span class="token operator">-</span>https <span class="token operator">--</span>experimental<span class="token operator">-</span>https<span class="token operator">-</span>key <span class="token punctuation">.</span><span class="token operator">/</span>certificates<span class="token operator">/</span>localhost<span class="token operator">-</span>key<span class="token punctuation">.</span>pem <span class="token operator">--</span>experimental<span class="token operator">-</span>https<span class="token operator">-</span>cert <span class="token punctuation">.</span><span class="token operator">/</span>certificates<span class="token operator">/</span>localhost<span class="token punctuation">.</span>pem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>next dev --experimental-https는 개발 전용이며 mkcert를 사용하여 로컬에서 신뢰할 수 있는 인증서를 생성합니다. 운영 환경에서는 신뢰할 수 있는 기관에서 발급된 인증서를 사용하십시오. Vercel로 배포할 때는 Next.js 애플리케이션의 HTTPS가 자동으로 구성됩니다.```</p>
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
<h2 id="빌드" tabindex="-1"><a class="header-anchor" href="#빌드" aria-hidden="true">#</a> 빌드</h2>
<p>next build는 애플리케이션의 최적화된 프로덕션 빌드를 생성합니다. 출력에는 각 경로에 대한 정보가 표시됩니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Route</span> <span class="token punctuation">(</span>app<span class="token punctuation">)</span>                               Size     First Load <span class="token constant">JS</span>
┌ ○ <span class="token operator">/</span>                                     <span class="token number">5.3</span> kB         <span class="token number">89.5</span> kB
├ ○ <span class="token operator">/</span>_not<span class="token operator">-</span>found                           <span class="token number">885</span> <span class="token constant">B</span>          <span class="token number">85.1</span> kB
└ ○ <span class="token operator">/</span>about                                <span class="token number">137</span> <span class="token constant">B</span>          <span class="token number">84.4</span> kB
<span class="token operator">+</span> First Load <span class="token constant">JS</span> shared by all             <span class="token number">84.2</span> kB
  ├ chunks<span class="token operator">/</span><span class="token number">184</span><span class="token operator">-</span>d3bb186aac44da98<span class="token punctuation">.</span>js        <span class="token number">28.9</span> kB
  ├ chunks<span class="token operator">/</span>30b509c0<span class="token operator">-</span>f3503c24f98f3936<span class="token punctuation">.</span>js   <span class="token number">53.4</span> kB
  └ other shared <span class="token function">chunks</span> <span class="token punctuation">(</span>total<span class="token punctuation">)</span>


<span class="token function">○</span>  <span class="token punctuation">(</span>정적<span class="token punctuation">)</span>  정적 콘텐츠로 사전 렌더링됨
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Size: 클라이언트 측에서 페이지로 이동할 때 다운로드되는 에셋의 수입니다. 각 경로의 크기에는 해당 종속성만 포함됩니다.</li>
<li>First Load JS: 서버에서 페이지를 방문할 때 다운로드된 에셋의 수입니다. 모든 사용자에 의해 공유되는 JS 양은 별도의 측정 지표로 표시됩니다.</li>
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
<p>이 두 값은 gzip으로 압축되어 있습니다. 첫 번째 로드는 녹색, 노랑 또는 빨강으로 표시됩니다. 성능이 뛰어난 애플리케이션을 위해 녹색을 목표로 합니다.</p>
<p>다음 빌드로 사용 가능한 옵션 목록을 얻으려면 프로젝트 디렉터리에서 다음 명령을 실행하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>next build <span class="token operator">-</span>h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>결과는 다음과 같아야 합니다:</p>
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
<p>사용법: next build [디렉토리] [옵션]</p>
<p>애플리케이션의 최적화된 프로덕션 빌드를 생성합니다. 각 라우트에 대한 정보가 표시됩니다.</p>
<p>인수:
[디렉토리] 애플리케이션을 빌드할 디렉토리입니다. 제공되지 않은 경우,
현재 디렉토리가 사용됩니다.</p>
<p>옵션:
-d, --debug 더 자세한 빌드 출력을 활성화합니다.
--profile React에 대한 프로덕션 프로파일링을 활성화합니다.
--no-lint 린트를 해제합니다.
--no-mangling 맹글링을 비활성화합니다.
--experimental-app-only App Router 라우트만 빌드합니다.
--experimental-build-mode [mode] 실험적인 빌드 모드를 사용합니다. (선택: &quot;compile&quot;
&quot;generate&quot;, 기본값: &quot;default&quot;)
-h, --help 이 메시지를 표시합니다.</p>
<h3 id="프로파일링" tabindex="-1"><a class="header-anchor" href="#프로파일링" aria-hidden="true">#</a> 프로파일링</h3>
<p><code v-pre>next build --profile</code>과 같이 --profile 플래그로 React에 대한 프로덕션 프로파일링을 활성화할 수 있습니다.</p>
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
<p>그 이후에는 개발할 때와 같은 방식으로 프로파일러를 사용할 수 있어요.</p>
<h3 id="디버그" tabindex="-1"><a class="header-anchor" href="#디버그" aria-hidden="true">#</a> 디버그</h3>
<p>다음 빌드에서 --debug 플래그를 사용하여 더 자세한 빌드 출력을 활성화할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>next build <span class="token operator">--</span>debug
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
<p>이 플래그를 활성화하면 다음과 같은 추가 빌드 출력물이 표시됩니다: 리다이렉트, 리다이렉션 및 헤더.</p>
<h3 id="린팅" tabindex="-1"><a class="header-anchor" href="#린팅" aria-hidden="true">#</a> 린팅</h3>
<p>빌드에서 린팅을 비활성화할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>next build <span class="token operator">--</span>no<span class="token operator">-</span>lint
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
<h3 id="mangling" tabindex="-1"><a class="header-anchor" href="#mangling" aria-hidden="true">#</a> Mangling</h3>
<p>빌드 시 맹글링을 비활성화하려면 다음과 같이 입력하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>next build <span class="token operator">--</span>no<span class="token operator">-</span>mangling
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>알아 두면 좋아요: 이것이 성능에 영향을 미칠 수 있으며 디버깅 목적으로만 사용해야 합니다.</p>
</blockquote>
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
<h2 id="제품" tabindex="-1"><a class="header-anchor" href="#제품" aria-hidden="true">#</a> 제품</h2>
<p><code v-pre>next start</code> 명령어를 사용하여 애플리케이션을 제품 모드로 시작할 수 있습니다. 애플리케이션을 시작하기 전에 <code v-pre>next build</code>로 먼저 컴파일해야 합니다.</p>
<p><code v-pre>next start</code>와 관련된 옵션 목록을 확인하려면 프로젝트 디렉토리에서 다음 명령어를 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>next start <span class="token operator">-</span>h
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">사용법</span><span class="token operator">:</span> next start <span class="token punctuation">[</span>디렉토리<span class="token punctuation">]</span> <span class="token punctuation">[</span>옵션<span class="token punctuation">]</span>

Next<span class="token punctuation">.</span>js를 프로덕션 모드로 시작합니다<span class="token punctuation">.</span> 어플리케이션은 먼저 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">next build</span><span class="token template-punctuation string">`</span></span>로 컴파일해야 합니다<span class="token punctuation">.</span>

<span class="token literal-property property">인수</span><span class="token operator">:</span>
  <span class="token punctuation">[</span>디렉토리<span class="token punctuation">]</span>                           어플리케이션을 시작할 디렉토리입니다<span class="token punctuation">.</span>
                                        디렉토리가 제공되지 않는 경우 현재
                                        디렉토리가 사용됩니다<span class="token punctuation">.</span>

<span class="token literal-property property">옵션</span><span class="token operator">:</span>
  <span class="token operator">-</span>p<span class="token punctuation">,</span> <span class="token operator">--</span>port <span class="token operator">&lt;</span>포트<span class="token operator">></span>                     어플리케이션을 시작할 포트 번호를 지정합니다<span class="token punctuation">.</span>
                                        <span class="token punctuation">(</span>기본값<span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span> <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token constant">PORT</span><span class="token punctuation">)</span>
  <span class="token operator">-</span><span class="token constant">H</span><span class="token punctuation">,</span> <span class="token operator">--</span>hostname <span class="token operator">&lt;</span>호스트명<span class="token operator">></span>              어플리케이션을 시작할 호스트명을 <span class="token function">지정합니다</span>
                                        <span class="token punctuation">(</span>기본값<span class="token operator">:</span> <span class="token number">0.0</span><span class="token number">.0</span><span class="token number">.0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token operator">--</span>keepAliveTimeout <span class="token operator">&lt;</span>keepAliveTimeout<span class="token operator">></span> 비활성 연결을 닫기 전에 기다릴 최대 밀리초 수를 지정합니다<span class="token punctuation">.</span>
  <span class="token operator">-</span>h<span class="token punctuation">,</span> <span class="token operator">--</span>help                            이 메시지를 표시합니다<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>기본적으로 어플리케이션이 http://localhost:3000에서 시작됩니다. 포트를 변경하려면 -p를 사용하여 변경할 수 있습니다. 예시:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>next start <span class="token operator">-</span>p <span class="token number">4000</span>
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
<p>또는 PORT 환경 변수를 사용하는 방법:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">PORT</span><span class="token operator">=</span><span class="token number">4000</span> next start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>참고사항:
PORT는 .env에 설정할 수 없습니다. HTTP 서버 부팅이 다른 코드를 초기화하기 전에 발생하기 때문입니다.
<code v-pre>standalone</code> 또는 <code v-pre>export</code> 출력과 함께 next start를 사용할 수 없습니다.</p>
</blockquote>
<h3 id="keep-alive-timeout" tabindex="-1"><a class="header-anchor" href="#keep-alive-timeout" aria-hidden="true">#</a> Keep Alive Timeout</h3>
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
<p>다음과 같은 상황에서 Next.js를 다운스트림 프록시(예: AWS ELB/ALB와 같은 로드 밸런서) 뒤에 배포할 때, Next.js의 기본 HTTP 서버를 keep-alive 타임아웃 값으로 구성하는 것이 중요합니다. 이 때, 다운스트림 프록시의 타임아웃 값보다 큰 값을 설정해야 합니다. 그렇지 않으면 keep-alive 타임아웃이 특정 TCP 연결에 도달하면, Node.js가 해당 연결을 즉시 종료하고 다운스트림 프록시에 알리지 않습니다. Node.js가 이미 종료한 연결을 재사용하려고 할 때 이로 인해 프록시 오류가 발생합니다.</p>
<p>프로덕션 Next.js 서버의 타임아웃 값을 구성하려면, 다음과 같이 next start에 --keepAliveTimeout(밀리초 단위)를 전달하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>next start <span class="token operator">--</span>keepAliveTimeout <span class="token number">70000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="정보" tabindex="-1"><a class="header-anchor" href="#정보" aria-hidden="true">#</a> 정보</h2>
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
<p>현재 시스템에 관련된 세부 정보를 인쇄하여 Next.js 버그를 보고하는 데 사용할 수 있습니다. 해당 정보에는 운영 체제 플랫폼/아키텍처/버전, 이진 파일(Node.js, npm, Yarn, pnpm) 및 npm 패키지 버전(next, react, react-dom)이 포함됩니다.</p>
<p>다음 명령어를 프로젝트 디렉토리 내에서 실행하면 next info로 사용 가능한 옵션 목록을 얻을 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>next info <span class="token operator">-</span>h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>결과는 다음과 같이 보여야 합니다:</p>
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
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>사용법: next info [옵션]

Next.js 버그를 보고할 때 사용할 수 있는 현재 시스템에 관한 관련 세부 정보를 인쇄합니다.

옵션:
--verbose 디버깅을 위한 추가 정보 수집.
-h, --help 이 메시지 표시.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>next info 명령을 실행하면 다음과 같은 정보를 제공합니다:</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>운영 체제:
플랫폼: linux
아키텍처: x64
버전: #22-Ubuntu SMP Fri Nov 5 13:21:36 UTC 2021
사용 가능한 메모리 (MB): 31795
사용 가능한 CPU 코어: 16
바이너리:
Node: 16.13.0
npm: 8.1.0
Yarn: 1.22.17
pnpm: 6.24.2
관련 패키지:
next: 14.1.1-canary.61 // 사용 가능한 최신 버전(14.1.1-canary.61)이 감지되었습니다.
react: 18.2.0
react-dom: 18.2.0
Next.js 구성:
출력: N/A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 정보를 GitHub 이슈에 붙여넣어주세요.</p>
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
<p>넥스트 패키지에 관련된 시스템 및 패키지 설치에 대한 추가 정보를 출력하는 --verbose를 실행할 수도 있어요.</p>
<h2 id="린트" tabindex="-1"><a class="header-anchor" href="#린트" aria-hidden="true">#</a> 린트</h2>
<p>next lint 명령어는 pages/, app/, components/, lib/, src/ 디렉토리에 있는 모든 파일에 대해 ESLint를 실행해요. 또한 어플리케이션에 이미 ESLint가 구성되어 있지 않은 경우 필요한 종속성을 설치하는 안내 설정을 제공해줘요.</p>
<p>next lint 명령으로 사용 가능한 옵션 목록을 얻으려면 프로젝트 디렉토리 안에서 다음 명령을 실행해보세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>next lint <span class="token operator">-</span>h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>아래는 결과 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">사용법</span><span class="token operator">:</span> next lint <span class="token punctuation">[</span>디렉토리<span class="token punctuation">]</span> <span class="token punctuation">[</span>옵션<span class="token punctuation">]</span>

<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/src</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/app</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/pages</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/components</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/lib</span><span class="token template-punctuation string">`</span></span> 디렉토리의 모든 파일에 대해 ESLint를 실행합니다<span class="token punctuation">.</span> 또한 이미 설정되어 있지 않은 경우 ESLint를 위해 필요한 종속성을 설치하는 안내형 설정도 제공합니다<span class="token punctuation">.</span>

<span class="token literal-property property">인수</span><span class="token operator">:</span>
  <span class="token punctuation">[</span>디렉토리<span class="token punctuation">]</span>                            응용 프로그램을 린트할 기본 디렉토리입니다<span class="token punctuation">.</span>
                                         디렉토리를 지정하지 않으면 현재 디렉토리가 사용됩니다<span class="token punctuation">.</span>

<span class="token literal-property property">옵션</span><span class="token operator">:</span>
  <span class="token operator">-</span>d<span class="token punctuation">,</span> <span class="token operator">--</span>dir<span class="token punctuation">,</span> <span class="token operator">&lt;</span>dirs<span class="token operator">...</span><span class="token operator">></span>                   ESLint를 실행할 디렉토리 또는 디렉토리를 포함합니다<span class="token punctuation">.</span>
  <span class="token operator">--</span>file<span class="token punctuation">,</span> <span class="token operator">&lt;</span>files<span class="token operator">...</span><span class="token operator">></span>                     ESLint를 실행할 파일 또는 파일을 포함합니다<span class="token punctuation">.</span>
  <span class="token operator">--</span>ext<span class="token punctuation">,</span> <span class="token punctuation">[</span>exts<span class="token operator">...</span><span class="token punctuation">]</span>                       JavaScript 파일 확장자를 지정합니다<span class="token punctuation">.</span> <span class="token punctuation">(</span>기본<span class="token operator">:</span>
                                         <span class="token punctuation">[</span><span class="token string">".js"</span><span class="token punctuation">,</span> <span class="token string">".mjs"</span><span class="token punctuation">,</span> <span class="token string">".cjs"</span><span class="token punctuation">,</span> <span class="token string">".jsx"</span><span class="token punctuation">,</span> <span class="token string">".ts"</span><span class="token punctuation">,</span> <span class="token string">".mts"</span><span class="token punctuation">,</span> <span class="token string">".cts"</span><span class="token punctuation">,</span> <span class="token string">".tsx"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token operator">-</span>c<span class="token punctuation">,</span> <span class="token operator">--</span>config<span class="token punctuation">,</span> <span class="token operator">&lt;</span>config<span class="token operator">></span>                 이 구성 파일을 사용하여 다른 모든 구성 옵션을 재정의합니다<span class="token punctuation">.</span>
  <span class="token operator">--</span>resolve<span class="token operator">-</span>plugins<span class="token operator">-</span>relative<span class="token operator">-</span>to<span class="token punctuation">,</span> <span class="token operator">&lt;</span>rprt<span class="token operator">></span>  플러그인이 해결되어야 하는 디렉토리를 지정합니다<span class="token punctuation">.</span>
  <span class="token operator">--</span>strict                               Next<span class="token punctuation">.</span>js 엄격 구성을 사용하여 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">.eslintrc.json</span><span class="token template-punctuation string">`</span></span> 파일을 생성합니다<span class="token punctuation">.</span>
  <span class="token operator">--</span>rulesdir<span class="token punctuation">,</span> <span class="token operator">&lt;</span>rulesdir<span class="token operator">...</span><span class="token operator">></span>              이 디렉토리에서 추가 규칙을 사용합니다<span class="token punctuation">.</span>
  <span class="token operator">--</span>fix                                  린팅 문제를 자동으로 수정합니다<span class="token punctuation">.</span>
  <span class="token operator">--</span>fix<span class="token operator">-</span>type <span class="token operator">&lt;</span>fixType<span class="token operator">></span>                   적용할 수정의 유형을 <span class="token function">지정합니다</span><span class="token punctuation">(</span>예<span class="token operator">:</span> 문제<span class="token punctuation">,</span> 제안<span class="token punctuation">,</span> 레이아웃<span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token operator">--</span>ignore<span class="token operator">-</span>path <span class="token operator">&lt;</span>path<span class="token operator">></span>                   무시할 파일을 지정합니다<span class="token punctuation">.</span>
  <span class="token operator">--</span>no<span class="token operator">-</span>ignore <span class="token operator">&lt;</span>path<span class="token operator">></span>                     <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">--ignore-path</span><span class="token template-punctuation string">`</span></span> 옵션을 사용하지 않습니다<span class="token punctuation">.</span>
  <span class="token operator">--</span>quiet                                오류만 보고합니다<span class="token punctuation">.</span>
  <span class="token operator">--</span>max<span class="token operator">-</span>warnings <span class="token punctuation">[</span>maxWarnings<span class="token punctuation">]</span>           <span class="token number">0</span> 이 아닌 종료 코드를 트리거하기 전에 경고의 수를 지정합니다<span class="token punctuation">.</span> <span class="token punctuation">(</span>기본<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token operator">-</span>o<span class="token punctuation">,</span> <span class="token operator">--</span>output<span class="token operator">-</span>file<span class="token punctuation">,</span> <span class="token operator">&lt;</span>outputFile<span class="token operator">></span>        보고서를 작성할 파일을 지정합니다<span class="token punctuation">.</span>
  <span class="token operator">-</span>f<span class="token punctuation">,</span> <span class="token operator">--</span>format<span class="token punctuation">,</span> <span class="token operator">&lt;</span>format<span class="token operator">></span>                 특정 출력 형식을 사용합니다<span class="token punctuation">.</span>
  <span class="token operator">--</span>no<span class="token operator">-</span>inline<span class="token operator">-</span>config                     주석이 구성 또는 규칙을 변경하지 못하게 합니다<span class="token punctuation">.</span>
  <span class="token operator">--</span>report<span class="token operator">-</span>unused<span class="token operator">-</span>disable<span class="token operator">-</span>directives     사용되지 않은 eslint<span class="token operator">-</span>disable 지시문에 대한 보고된 오류를 추가합니다<span class="token punctuation">.</span>
  <span class="token operator">--</span>no<span class="token operator">-</span>cache                             캐싱을 사용하지 않습니다<span class="token punctuation">.</span>
  <span class="token operator">--</span>cache<span class="token operator">-</span>location<span class="token punctuation">,</span> <span class="token operator">&lt;</span>cacheLocation<span class="token operator">></span>      캐시 위치를 지정합니다<span class="token punctuation">.</span>
  <span class="token operator">--</span>cache<span class="token operator">-</span>strategy<span class="token punctuation">,</span> <span class="token punctuation">[</span>cacheStrategy<span class="token punctuation">]</span>      캐시에서 변경된 파일을 감지하는 데 사용할 전략을 지정합니다<span class="token punctuation">.</span> <span class="token punctuation">(</span>기본<span class="token operator">:</span> <span class="token string">"metadata"</span><span class="token punctuation">)</span>
  <span class="token operator">--</span>error<span class="token operator">-</span>on<span class="token operator">-</span>unmatched<span class="token operator">-</span>pattern           파일 패턴이 일치하지 않을 때 오류를 보고합니다<span class="token punctuation">.</span>
  <span class="token operator">-</span>h<span class="token punctuation">,</span> <span class="token operator">--</span>help                             이 메시지를 표시합니다<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>린트를 수행하고 싶은 다른 디렉토리가 있다면 --dir 플래그를 사용하여 지정할 수 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>next lint <span class="token operator">--</span>dir utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>다른 옵션에 대한 자세한 정보는 ESLint 구성 문서를 참조해주세요.</p>
<h2 id="텔레메트리" tabindex="-1"><a class="header-anchor" href="#텔레메트리" aria-hidden="true">#</a> 텔레메트리</h2>
<p>Next.js는 일반적인 사용에 대한 완전히 익명의 텔레메트리 데이터를 수집합니다. 이 익명 프로그램에 참여는 선택 사항이며, 정보를 공유하고 싶지 않다면 거부할 수 있습니다.</p>
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
<p>다음 텔레메트리 사용 가능한 옵션 목록을 얻으려면 프로젝트 디렉토리에서 다음 명령을 실행하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>next telemetry <span class="token operator">-</span>h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>출력은 다음과 같이 나타날 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">Usage</span><span class="token operator">:</span> next telemetry <span class="token punctuation">[</span>options<span class="token punctuation">]</span>

Next<span class="token punctuation">.</span>js의 완전히 익명의 텔레메트리 수집을 활성화하거나 비활성화할 수 있습니다<span class="token punctuation">.</span>

<span class="token literal-property property">Options</span><span class="token operator">:</span>
  <span class="token operator">--</span>enable    Next<span class="token punctuation">.</span>js의 텔레메트리 수집을 활성화합니다<span class="token punctuation">.</span>
  <span class="token operator">--</span>disable   Next<span class="token punctuation">.</span>js의 텔레메트리 수집을 비활성화합니다<span class="token punctuation">.</span>
  <span class="token operator">-</span>h<span class="token punctuation">,</span> <span class="token operator">--</span>help  이 메시지를 표시합니다<span class="token punctuation">.</span>

더 알아보기<span class="token operator">:</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>nextjs<span class="token punctuation">.</span>org<span class="token operator">/</span>telemetry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>텔레메트리에 대해 더 자세히 알아보세요.</p>
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
