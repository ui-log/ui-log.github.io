<template><div><p>안녕하세요! 이 게시물에서는 AWS 인프라를 생성하고 React 앱을 Amazon EC2에 배포하는 방법을 살펴볼 것입니다. 아래 아키텍처 다이어그램을 확인해보세요.</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*c1RycnnHAjBeHOzLkcQjwg.gif" alt="Architecture Diagram"></p>
<h1 id="사전-요구-사항" tabindex="-1"><a class="header-anchor" href="#사전-요구-사항" aria-hidden="true">#</a> 사전 요구 사항:</h1>
<ul>
<li>AWS 계정</li>
<li>GitHub 계정</li>
<li>로컬 컴퓨터에 Node와 React가 설치되어 있어야 합니다.</li>
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
<h1 id="_1-git-저장소-만들고-react-앱-설정하기" tabindex="-1"><a class="header-anchor" href="#_1-git-저장소-만들고-react-앱-설정하기" aria-hidden="true">#</a> 1. GIT 저장소 만들고 React 앱 설정하기</h1>
<p>우리의 React 앱에 사용할 새로운 저장소를 만들어 시작해봐요. 선호하는 저장소 이름을 선택해주세요. 그리고 저장소 가시성 옵션으로 &quot;비공개&quot;를 선택할 수 있어요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-Step-by-StepGuideDeployingaReactApponAWSEC2/img/Step-by-StepGuideDeployingaReactApponAWSEC2_1.png" alt="이미지"></p>
<p>작성을 마치면 &quot;저장소 생성&quot; 버튼을 클릭해주세요.</p>
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
<p>저장소가 만들어지면, HTTPS 탭에서 저장소 URL을 복사해주세요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-Step-by-StepGuideDeployingaReactApponAWSEC2/img/Step-by-StepGuideDeployingaReactApponAWSEC2_2.png" alt="이미지"></p>
<p>다음 명령어를 사용하여 해당 URL을 복사해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>git clone <span class="token operator">&lt;</span>당신의<span class="token operator">-</span>저장소<span class="token operator">-</span><span class="token constant">URL</span><span class="token operator">></span>
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
<p><img src="@source/docs/Nextjs/2024-04-05-Step-by-StepGuideDeployingaReactApponAWSEC2/img/Step-by-StepGuideDeployingaReactApponAWSEC2_3.png" alt="이미지"></p>
<p>Git 저장소를 성공적으로 복제한 후에는 Visual Studio Code를 열고 복제된 저장소 폴더로 이동하세요. 그런 다음 다음 명령을 사용하여 React 앱을 생성하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>react<span class="token operator">-</span>app <span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>다음으로 App.js 파일을 편집하여 &quot;Hello, world.&quot;라는 기본 페이지를 표시하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>안녕<span class="token punctuation">,</span> 세상아<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Nextjs/2024-04-05-Step-by-StepGuideDeployingaReactApponAWSEC2/img/Step-by-StepGuideDeployingaReactApponAWSEC2_4.png" alt="Step-by-StepGuideDeployingaReactApponAWSEC2_4.png"></p>
<p>프로세스가 완료되면 먼저 로컬에서 실행해 보겠습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm start
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
<img src="@source/docs/Nextjs/2024-04-05-Step-by-StepGuideDeployingaReactApponAWSEC2/img/Step-by-StepGuideDeployingaReactApponAWSEC2_5.png" />
<p>React 앱이 준비되었다면, 코드를 GitHub 저장소에 푸시하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>git add <span class="token punctuation">.</span>
git commit <span class="token operator">-</span>am “create react app”
git push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-ec2-생성" tabindex="-1"><a class="header-anchor" href="#_2-ec2-생성" aria-hidden="true">#</a> 2. EC2 생성</h1>
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
<p>AWS 계정에 로그인한 후 EC2를 검색해보세요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-Step-by-StepGuideDeployingaReactApponAWSEC2/img/Step-by-StepGuideDeployingaReactApponAWSEC2_6.png" alt="이미지"></p>
<p>EC2 콘솔 대시보드에서 &quot;인스턴스 시작&quot; 상자에서 &quot;인스턴스 시작&quot;을 선택하세요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-Step-by-StepGuideDeployingaReactApponAWSEC2/img/Step-by-StepGuideDeployingaReactApponAWSEC2_7.png" alt="이미지"></p>
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
<p>EC2 인스턴스의 선호 이름을 입력하고 OS 섹션에서 Ubuntu 20.04를 선택하세요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-Step-by-StepGuideDeployingaReactApponAWSEC2/img/Step-by-StepGuideDeployingaReactApponAWSEC2_8.png" alt="이미지"></p>
<p>t3.micro 인스턴스 유형을 선택하고 &quot;새 키페어 생성&quot;을 클릭하세요. 이 키페어를 사용하여 생성 중인 EC2 인스턴스에 SSH할 것입니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-Step-by-StepGuideDeployingaReactApponAWSEC2/img/Step-by-StepGuideDeployingaReactApponAWSEC2_9.png" alt="이미지"></p>
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
<img src="@source/docs/Nextjs/2024-04-05-Step-by-StepGuideDeployingaReactApponAWSEC2/img/Step-by-StepGuideDeployingaReactApponAWSEC2_10.png" />
<p>가상 사설망(VPC)과 서브넷은 기본 설정으로 둡니다. 공용 IP 자동 할당을 위해 &quot;활성화&quot;를 선택하세요. &quot;보안 그룹 생성&quot;을 클릭하고 이름을 지정해주세요.</p>
<img src="@source/docs/Nextjs/2024-04-05-Step-by-StepGuideDeployingaReactApponAWSEC2/img/Step-by-StepGuideDeployingaReactApponAWSEC2_11.png" />
<img src="@source/docs/Nextjs/2024-04-05-Step-by-StepGuideDeployingaReactApponAWSEC2/img/Step-by-StepGuideDeployingaReactApponAWSEC2_12.png" />
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
<p>나머지 설정은 기본값으로 두고 &quot;인스턴스 시작&quot;을 클릭하세요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-Step-by-StepGuideDeployingaReactApponAWSEC2/img/Step-by-StepGuideDeployingaReactApponAWSEC2_13.png" alt="image"></p>
<p>인스턴스 상태가 &quot;실행 중&quot;이 될 때까지 기다린 후 웹 애플리케이션을 위한 리액트 종속성을 설치하기 위해 EC2 인스턴스에 SSH로 접속할 수 있습니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-Step-by-StepGuideDeployingaReactApponAWSEC2/img/Step-by-StepGuideDeployingaReactApponAWSEC2_14.png" alt="image"></p>
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
<h1 id="_3-리액트-앱을-위한-종속성-설치" tabindex="-1"><a class="header-anchor" href="#_3-리액트-앱을-위한-종속성-설치" aria-hidden="true">#</a> 3. 리액트 앱을 위한 종속성 설치</h1>
<ul>
<li>EC2 서버에 액세스하려면 https://mobaxterm.mobatek.net/에서 다운로드할 수 있는 무료 소프트웨어인 MobaXterm을 사용할 수 있습니다.</li>
<li>.ppk 형식의 키페어를 선택한 경우 https://www.putty.org/에서 다운로드할 수 있는 PuTTY를 사용해야 합니다.</li>
<li>MobaXterm을 열고 &quot;Session&quot;을 선택합니다.</li>
</ul>
<p><img src="@source/docs/Nextjs/2024-04-05-Step-by-StepGuideDeployingaReactApponAWSEC2/img/Step-by-StepGuideDeployingaReactApponAWSEC2_15.png" alt="이미지"></p>
<ul>
<li>EC2의 공개 IP 주소를 입력하고 사용자 이름으로 &quot;ubuntu&quot;를 사용합니다. &quot;개인 키 사용&quot; 옵션을 선택하고 AWS에서 생성한 키페어를 선택합니다.</li>
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
<img src="@source/docs/Nextjs/2024-04-05-Step-by-StepGuideDeployingaReactApponAWSEC2/img/Step-by-StepGuideDeployingaReactApponAWSEC2_16.png" />
<ul>
<li>패키지 업데이트하기</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>sudo apt<span class="token operator">-</span><span class="token keyword">get</span> update <span class="token operator">-</span>y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>npm 설치하기</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>sudo apt install npm <span class="token operator">-</span>y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="@source/docs/Nextjs/2024-04-05-Step-by-StepGuideDeployingaReactApponAWSEC2/img/Step-by-StepGuideDeployingaReactApponAWSEC2_17.png" />
<ul>
<li>노드 버전 20을 설치하세요.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>curl <span class="token operator">-</span>fsSL https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>deb<span class="token punctuation">.</span>nodesource<span class="token punctuation">.</span>com<span class="token operator">/</span>setup_20<span class="token punctuation">.</span>x <span class="token operator">|</span> sudo <span class="token operator">-</span><span class="token constant">E</span> bash <span class="token operator">-</span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>sudo apt install <span class="token operator">-</span>y nodejs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>리액트를 실행하기 위해 Nginx 웹 서버 설치</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>sudo apt install nginx <span class="token operator">-</span>y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>리액트를 위한 디렉토리 생성</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>sudo mkdir <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>www<span class="token operator">/</span>html<span class="token operator">/</span>my<span class="token operator">-</span>react<span class="token operator">-</span>app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Nginx 설정하기</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>sudo vi <span class="token operator">/</span>etc<span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token punctuation">.</span>d<span class="token operator">/</span>react<span class="token punctuation">.</span>conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>서버 블록 업데이트하기</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>server <span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
  listen <span class="token punctuation">[</span><span class="token operator">:</span><span class="token operator">:</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token number">80</span><span class="token punctuation">;</span>
  root <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>www<span class="token operator">/</span>html<span class="token operator">/</span>my<span class="token operator">-</span>react<span class="token operator">-</span>app<span class="token operator">/</span>build<span class="token punctuation">;</span>
  
  #react app
  location <span class="token operator">/</span> <span class="token punctuation">{</span>
    try_files $uri <span class="token operator">/</span>index<span class="token punctuation">.</span>html<span class="token punctuation">;</span>  
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Nextjs/2024-04-05-Step-by-StepGuideDeployingaReactApponAWSEC2/img/Step-by-StepGuideDeployingaReactApponAWSEC2_18.png" />
<ul>
<li>리액트 앱 프로젝트를 넣을 “my-app”이라는 이름의 폴더를 만듭니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cd <span class="token operator">/</span>home<span class="token operator">/</span>ubuntu
mkdir my<span class="token operator">-</span>app
cd my<span class="token operator">-</span>app
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
<ul>
<li>리액트 앱 복제</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>git clone <span class="token operator">&lt;</span>리포지토리<span class="token operator">-</span><span class="token constant">URL</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/Nextjs/2024-04-05-Step-by-StepGuideDeployingaReactApponAWSEC2/img/Step-by-StepGuideDeployingaReactApponAWSEC2_19.png" alt="화면 캡처"></p>
<p>비밀번호를 요청받았다면, 이 링크를 따라 가셔서 개인 액세스 토큰(PAT)을 생성해주세요.</p>
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
<li>React 프로젝트 의존성 설치하기</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cd <span class="token operator">&lt;</span>프로젝트<span class="token operator">-</span>폴더<span class="token operator">></span>
npm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>React 앱을 먼저 테스트하여 정상 작동하는지 확인하세요.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm start
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
<li>브라우저에서 공용 IP를 입력하여 <code v-pre>ip-public</code>:3000에 붙여넣기</li>
<li>React 앱 빌드</li>
</ul>
<p><img src="@source/docs/Nextjs/2024-04-05-Step-by-StepGuideDeployingaReactApponAWSEC2/img/Step-by-StepGuideDeployingaReactApponAWSEC2_20.png" alt="Step-by-Step Guide Deploying a React App on AWS EC2 - Image 20"></p>
<p><img src="@source/docs/Nextjs/2024-04-05-Step-by-StepGuideDeployingaReactApponAWSEC2/img/Step-by-StepGuideDeployingaReactApponAWSEC2_21.png" alt="Step-by-Step Guide Deploying a React App on AWS EC2 - Image 21"></p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>&quot;build&quot; 폴더를 &quot;/var/www/html&quot; 디렉토리로 복사하여 Nginx가 이 폴더에서 읽을 수 있도록 합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>sudo cp <span class="token operator">-</span><span class="token constant">R</span> build<span class="token operator">/</span> <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>www<span class="token operator">/</span>html<span class="token operator">/</span>my<span class="token operator">-</span>react<span class="token operator">-</span>app<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Nginx 기본 설정을 비활성화합니다.</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>sudo vi <span class="token operator">/</span>etc<span class="token operator">/</span>nginx<span class="token operator">/</span>nginx<span class="token punctuation">.</span>conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>아래 줄을 &quot;#&quot;을 사용하여 주석 처리하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>#include <span class="token operator">/</span>etc<span class="token operator">/</span>nginx<span class="token operator">/</span>sites<span class="token operator">-</span>enabled<span class="token comment">/*;
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="@source/docs/Nextjs/2024-04-05-Step-by-StepGuideDeployingaReactApponAWSEC2/img/Step-by-StepGuideDeployingaReactApponAWSEC2_22.png" />
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
<li>nginx 구성을 확인하고 nginx를 다시 로드하십시오.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>sudo nginx <span class="token operator">-</span>t <span class="token operator">&amp;&amp;</span> sudo systemctl reload nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/Nextjs/2024-04-05-Step-by-StepGuideDeployingaReactApponAWSEC2/img/Step-by-StepGuideDeployingaReactApponAWSEC2_23.png" alt="Step-by-StepGuideDeployingaReactApponAWSEC2_23.png"></p>
<ul>
<li>EC2 인스턴스의 공용 IP를 복사하여 브라우저에 붙여넣으세요. 우리는 Nginx 웹 서버를 사용하고 있으므로 이제 포트 80에서 React 앱에 액세스할 수 있어야 합니다.</li>
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
<p><img src="@source/docs/Nextjs/2024-04-05-Step-by-StepGuideDeployingaReactApponAWSEC2/img/Step-by-StepGuideDeployingaReactApponAWSEC2_24.png" alt="이미지"></p>
<p>축하합니다! React 앱을 EC2에 성공적으로 배포했고 모든 사용자가 액세스할 수 있도록 만들었습니다.</p>
<p>그러나 구축한 인프라는 보안과 고가용성 측면에서 몇 가지 이유로 부족합니다:</p>
<ul>
<li>웹 서버를 공용 서브넷에 배치하면 인터넷에 직접 노출되어 잠재적인 보안 취약점이 발생할 수 있습니다.</li>
<li>웹 서버에 대한 단일 인스턴스에 의존하는 것은 원하는 수준의 고가용성을 제공하지 않습니다.</li>
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
<h1 id="다음-단계는-무엇인가요" tabindex="-1"><a class="header-anchor" href="#다음-단계는-무엇인가요" aria-hidden="true">#</a> 다음 단계는 무엇인가요?</h1>
<ul>
<li>Terraform 튜토리얼: Terraform을 사용하여 AWS에서 기본 EC2 인스턴스 시작하기</li>
</ul>
</div></template>
