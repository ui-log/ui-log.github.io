<template><div><p><img src="@source/docs/Nextjs/2024-04-05-DockerizeReactapplicationswithNginx/img/DockerizeReactapplicationswithNginx_0.png" alt="Dockerize React applications with Nginx"></p>
<p>Nginx를 사용하여 React 애플리케이션을 Docker화하는 것은 컨테이너 환경에서 웹 애플리케이션을 배포하는 일반적인 방법입니다. 아래에서 React 애플리케이션을 Nginx와 함께 Docker화하는 단계별 가이드를 제공해 드리겠습니다.</p>
<p>단계 1: React 앱 설정하기</p>
<p>이미 React 애플리케이션이 있을 것으로 가정하고, 구조화되어 있고 정상적으로 작동하는지 확인하세요.</p>
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
<h2 id="단계-2-dockerfile-만들기" tabindex="-1"><a class="header-anchor" href="#단계-2-dockerfile-만들기" aria-hidden="true">#</a> 단계 2: Dockerfile 만들기</h2>
<p>React 앱의 루트 디렉토리에 Dockerfile을 생성하세요. 이 파일은 어떻게 애플리케이션이 Docker 컨테이너 내에서 빌드되고 실행될지 정의합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code># 공식 Node<span class="token punctuation">.</span>js 런타임을 베이스 이미지로 사용
<span class="token constant">FROM</span> <span class="token literal-property property">node</span><span class="token operator">:</span><span class="token number">18</span> <span class="token keyword">as</span> build

# 컨테이너 내의 작업 디렉토리 설정
<span class="token constant">WORKDIR</span> <span class="token operator">/</span>app

# <span class="token keyword">package</span><span class="token punctuation">.</span>json 및 <span class="token keyword">package</span><span class="token operator">-</span>lock<span class="token punctuation">.</span>json을 작업 디렉토리로 복사
<span class="token constant">COPY</span> <span class="token keyword">package</span><span class="token operator">*</span><span class="token punctuation">.</span>json <span class="token punctuation">.</span><span class="token operator">/</span>

# 의존성 설치
<span class="token constant">RUN</span> npm install

# 전체 애플리케이션 코드를 컨테이너로 복사
<span class="token constant">COPY</span> <span class="token punctuation">.</span> <span class="token punctuation">.</span>

# 프로덕션용으로 React 앱 빌드
<span class="token constant">RUN</span> npm run build

# 프로덕션 서버로 Nginx 사용
<span class="token constant">FROM</span> <span class="token literal-property property">nginx</span><span class="token operator">:</span>alpine

# 빌드된 React 앱을 Nginx의 웹 서버 디렉터리로 복사
<span class="token constant">COPY</span> <span class="token operator">--</span>from<span class="token operator">=</span>build <span class="token operator">/</span>app<span class="token operator">/</span>build <span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html

# Nginx 서버를 위해 포트 <span class="token number">80</span> 노출
<span class="token constant">EXPOSE</span> <span class="token number">80</span>

# 컨테이너 실행 시 Nginx 시작
<span class="token constant">CMD</span> <span class="token punctuation">[</span><span class="token string">"nginx"</span><span class="token punctuation">,</span> <span class="token string">"-g"</span><span class="token punctuation">,</span> <span class="token string">"daemon off;"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="단계-3-dockerignore-파일-만들기" tabindex="-1"><a class="header-anchor" href="#단계-3-dockerignore-파일-만들기" aria-hidden="true">#</a> 단계 3: .dockerignore 파일 만들기</h2>
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
<p>동일한 디렉토리에 .dockerignore 파일을 생성하여 Docker 이미지로 복사되지 않도록 불필요한 파일과 디렉토리를 제외해주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>node_modules
build
npm<span class="token operator">-</span>debug<span class="token punctuation">.</span>log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>단계 4: Docker 이미지 빌드하기</p>
<p>터미널을 열고 React 앱의 루트 디렉토리(여기에 Dockerfile이 있는 곳)로 이동한 다음 Docker 이미지를 빌드해주세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>docker build <span class="token operator">-</span>t react<span class="token operator">-</span>nginx<span class="token operator">-</span>app <span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 명령은 react-nginx-app이라는 Docker 이미지를 생성합니다. 빌드 컨텍스트를 지정하기 위해 명령 끝에 점을 포함해야 합니다.</p>
<p>단계 5: Docker 컨테이너 실행</p>
<p>Docker 이미지를 빌드한 후에 컨테이너를 실행할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>도커 run <span class="token operator">--</span>name react<span class="token operator">-</span>nginx<span class="token operator">-</span>app <span class="token operator">-</span>p <span class="token number">8080</span><span class="token operator">:</span><span class="token number">80</span> <span class="token operator">-</span>d react<span class="token operator">-</span>nginx<span class="token operator">-</span>app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 명령은 컨테이너를 분리된 모드(-d)로 실행하고 호스트 머신의 포트 8080을 컨테이너 내부의 포트 80에 매핑합니다.</p>
<p>스텝 6: React 앱에 접속하기</p>
<p>이제 웹 브라우저를 열고 http://localhost:8080 또는 지정한 호스트와 포트로 이동하여 React 애플리케이션에 접속할 수 있습니다.</p>
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
<p>결론</p>
<p>Nginx를 사용하여 React 애플리케이션을 도커화하면 다양한 환경에 앱을 배포하는 신뢰할 수 있는 방법을 제공합니다. 이 방법을 통해 배포가 간소화되고 다양한 플랫폼 간에 일관성을 보장할 수 있습니다.</p>
<p>코딩을 즐기세요!</p>
</div></template>
