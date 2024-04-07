<template><div><p>팀은 진행 중인 작업을 검토하고 협업하기 위해 Storybook을 온라인으로 게시합니다. 이를 통해 개발자, 디자이너, PM 및 기타 이해관계자들은 코드를 건드리지 않고 또는 로컬 개발 환경이 필요하지 않게 UI가 올바르게 보이는지 확인할 수 있습니다.</p>
<video autoplay playsinline loop>
  <source src="@source/docs/Tech/2024-04-07-PublishStorybook/img/PublishStorybook_0.mp4" type="video/mp4">
</video>
<h2 id="정적-웹-애플리케이션으로-storybook-빌드하기" tabindex="-1"><a class="header-anchor" href="#정적-웹-애플리케이션으로-storybook-빌드하기" aria-hidden="true">#</a> 정적 웹 애플리케이션으로 Storybook 빌드하기</h2>
<p>먼저, Storybook을 정적 웹 애플리케이션으로 빌드해야 합니다. 대부분의 지원되는 프레임워크에 대해 기능은 이미 내장되어 있고 사전 구성되어 있습니다. 다른 프레임워크들은 약간의 사용자 정의가 필요합니다(예: Angular). 프로젝트의 루트 디렉토리에서 다음 명령을 실행하십시오:</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npm run build-storybook
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Storybook은 어떤 웹 서버에도 제공될 수 있는 정적 웹 응용 프로그램을 만들어 줍니다. 다음 명령을 실행하여 로컬에서 미리보기할 수 있습니다:</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npx http-server ./path/to/build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="성능을-위한-빌드-사용자-정의" tabindex="-1"><a class="header-anchor" href="#성능을-위한-빌드-사용자-정의" aria-hidden="true">#</a> 성능을 위한 빌드 사용자 정의</h3>
<p>기본적으로 Storybook의 프로덕션 빌드는 모든 스토리와 문서를 프로덕션 번들에 캡슐화합니다. 이는 작은 프로젝트에 이상적이지만 더 큰 프로젝트이거나 빌드 시간을 단축해야 할 때(예: 테스트, CI/CD) 성능 문제를 초래할 수 있습니다. 필요한 경우 main.js|ts 구성 파일에서 test 옵션을 사용하여 프로덕션 빌드를 사용자 정의하고 빌드 스크립트를 수정하여 --test 플래그로 최적화를 활성화할 수 있습니다.</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npm run build-storybook -- --test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="chromatic을-사용하여-storybook-게시" tabindex="-1"><a class="header-anchor" href="#chromatic을-사용하여-storybook-게시" aria-hidden="true">#</a> Chromatic을 사용하여 Storybook 게시</h2>
<p>Storybook을 정적 웹 애플리케이션으로 빌드한 후에는 해당 애플리케이션을 웹 호스트에 게시할 수 있습니다. 저희는 Chromatic을 추천합니다. Chromatic은 Storybook을 위한 무료 게시 서비스로, UI 구성 요소를 안전하게 문서화, 버전 관리 및 클라우드에 인덱싱해줍니다.</p>
<p><strong>이미지</strong></p>
<p>시작하려면 GitHub, GitLab, Bitbucket 또는 이메일로 가입하고 프로젝트에 대한 고유한 프로젝트 토큰을 생성하세요.</p>
<p>다음으로 npm을 통해 Chromatic CLI 패키지를 설치하세요:</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npm install chromatic --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>다음 명령을 실행하십시오. 패키지 설치가 완료되면 명령을 실행하십시오. 반드시 <code v-pre>--project-token</code>을 귀하의 프로젝트 토큰으로 교체해주십시오.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx chromatic <span class="token operator">--</span>project<span class="token operator">-</span>token<span class="token operator">=</span><span class="token operator">&lt;</span>귀하의<span class="token operator">-</span>프로젝트<span class="token operator">-</span>토큰<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Chromatic가 작업을 완료하면 Storybook을 성공적으로 배포했을 것입니다. 제공된 링크(예: https://random-uuid.chromatic.com)를 클릭하여 미리보기해보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token number">1</span>번 빌드가 게시되었습니다<span class="token punctuation">.</span>

온라인에서 보려면 https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>chromatic<span class="token punctuation">.</span>com<span class="token operator">/</span>build<span class="token operator">?</span>appId<span class="token operator">=</span><span class="token operator">...</span><span class="token operator">&amp;</span>number<span class="token operator">=</span><span class="token number">1.</span> 을 클릭하세요<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>&lt;img src=&quot;./img/PublishStorybook_1.png&quot; /&gt;</code></p>
<h3 id="자동으로-게시-설정하기" tabindex="-1"><a class="header-anchor" href="#자동으로-게시-설정하기" aria-hidden="true">#</a> 자동으로 게시 설정하기</h3>
<p>CI 환경을 구성하여 코드를 리포지토리에 푸시할 때 Storybook을 게시하고 Chromatic을 실행하도록 설정합니다. GitHub Actions을 사용하여 설정하는 방법을 살펴봅시다.</p>
<p>프로젝트의 루트 디렉토리에서 <code v-pre>.github/workflows</code> 디렉토리 안에 <code v-pre>chromatic.yml</code>이라는 새 파일을 추가하세요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code># 워크플로 이름
이름<span class="token operator">:</span> <span class="token string">'Chromatic Publish'</span>

# 워크플로를 트리거할 이벤트
on<span class="token operator">:</span> push

# 작업 목록
jobs<span class="token operator">:</span>
  test<span class="token operator">:</span>
    # 운영 체제
    runs<span class="token operator">-</span>on<span class="token operator">:</span> ubuntu<span class="token operator">-</span>latest
    # 작업 단계
    steps<span class="token operator">:</span>
      <span class="token operator">-</span> uses<span class="token operator">:</span> actions<span class="token operator">/</span>checkout<span class="token decorator"><span class="token at operator">@</span><span class="token function">v3</span></span>
        <span class="token keyword">with</span><span class="token operator">:</span>
          fetch<span class="token operator">-</span>depth<span class="token operator">:</span> <span class="token number">0</span>
      <span class="token operator">-</span> uses<span class="token operator">:</span> actions<span class="token operator">/</span>setup<span class="token operator">-</span>node<span class="token decorator"><span class="token at operator">@</span><span class="token function">v3</span></span>
        <span class="token keyword">with</span><span class="token operator">:</span>
          node<span class="token operator">-</span>version<span class="token operator">:</span> <span class="token number">18</span>
          cache<span class="token operator">:</span> <span class="token string">'yarn'</span>
      <span class="token operator">-</span> run<span class="token operator">:</span> yarn
      #👇 워크플로에 Chromatic을 추가하는 단계
      <span class="token operator">-</span> uses<span class="token operator">:</span> chromaui<span class="token operator">/</span>action<span class="token decorator"><span class="token at operator">@</span><span class="token function">v1</span></span>
        # Chromatic의 GitHub Action에 필요한 옵션
        <span class="token keyword">with</span><span class="token operator">:</span>
          #👇 Chromatic 프로젝트 토큰<span class="token punctuation">,</span>
          projectToken<span class="token operator">:</span> $<span class="token punctuation">{</span> secrets<span class="token punctuation">.</span><span class="token constant">CHROMATIC_PROJECT_TOKEN</span> <span class="token punctuation">}</span>
          token<span class="token operator">:</span> $<span class="token punctuation">{</span> secrets<span class="token punctuation">.</span><span class="token constant">GITHUB_TOKEN</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>파일을 커밋하고 푸시하세요. 축하합니다! 이제 스토리북을 자동으로 게시하는 것을 성공했습니다. 이제 PR을 열 때마다 PR 체크에서 게시된 스토리북에 대한 편리한 링크를 받게 됩니다.</p>
<img src="@source/docs/Tech/2024-04-07-PublishStorybook/img/PublishStorybook_2.png" />
<h3 id="팀과-함께-검토하기" tabindex="-1"><a class="header-anchor" href="#팀과-함께-검토하기" aria-hidden="true">#</a> 팀과 함께 검토하기</h3>
<p>Storybook을 개발 프로세스의 일부로 게시하면 팀 피드백을 빠르고 쉽게 수집할 수 있습니다.</p>
<p>검토를 요청하는 일반적인 방법은 게시된 Storybook 링크를 풀 리퀘스트나 Slack에 붙여넣는 것입니다.</p>
<p>Storybook을 Chromatic에 게시하면 UI Review 기능을 사용하여 PR에 대해 새롭게 업데이트된 스토리를 자동으로 스캔할 수 있습니다. 이렇게 하면 변경 사항을 쉽게 파악하고 피드백을 제공할 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-PublishStorybook/img/PublishStorybook_3.png" alt="Storybook image"></p>
<h3 id="버전-및-기록" tabindex="-1"><a class="header-anchor" href="#버전-및-기록" aria-hidden="true">#</a> 버전 및 기록</h3>
<p>Storybook을 게시하면 커밋까지 컴포넌트 이력과 버전이 포함됩니다. 구현 리뷰 중에 브랜치/커밋 간 또는 이전 버전과 비교하기에 유용합니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-PublishStorybook/img/PublishStorybook_4.png" alt="게시"></p>
<h2 id="다른-서비스에-storybook-게시" tabindex="-1"><a class="header-anchor" href="#다른-서비스에-storybook-게시" aria-hidden="true">#</a> 다른 서비스에 Storybook 게시</h2>
<p>Storybook은 정적 웹 응용 프로그램으로 구축되어 있으므로 GitHub Pages, Netlify, AWS S3 및 기타 웹 호스트로도 게시할 수 있습니다. 그러나 구성, 스토리 내장, 히스토리, 버전 관리 및 자산과 같은 기능을 사용하려면 Storybook API 및 안전한 인증과 더 밀접하게 통합해야 할 수도 있습니다. 머리글에 대해 더 알고 싶다면 이전 가이드를 참조하실 수 있습니다. 또한, 컴포넌트 게시 프로토콜(CPP)에 대해 알아보고 싶다면 아래 정보를 확인하세요.</p>
<h3 id="github-pages" tabindex="-1"><a class="header-anchor" href="#github-pages" aria-hidden="true">#</a> GitHub Pages</h3>
<p>GitHub Pages에 Storybook을 배포하려면 커뮤니티에서 제공하는 GitHub Pages로 Storybook을 배포하는 작업을 사용하십시오. 이를 활성화하려면 다음 내용으로 .github/workflows 디렉토리 안에 새 워크플로 파일을 생성하십시오:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code># Workflow name
name<span class="token operator">:</span> Build and Publish Storybook to GitHub Pages

on<span class="token operator">:</span>
  # Event <span class="token keyword">for</span> the workflow to run on
  push<span class="token operator">:</span>
    branches<span class="token operator">:</span>
      <span class="token operator">-</span> <span class="token string">'your-branch-name'</span> # 배포할 브랜치로 대체

permissions<span class="token operator">:</span>
  contents<span class="token operator">:</span> read
  pages<span class="token operator">:</span> write
  id<span class="token operator">-</span>token<span class="token operator">:</span> write

# List <span class="token keyword">of</span> jobs
jobs<span class="token operator">:</span>
  deploy<span class="token operator">:</span>
    runs<span class="token operator">-</span>on<span class="token operator">:</span> ubuntu<span class="token operator">-</span>latest
    # Job steps
    steps<span class="token operator">:</span>
      # Manual Checkout
      <span class="token operator">-</span> uses<span class="token operator">:</span> actions<span class="token operator">/</span>checkout<span class="token decorator"><span class="token at operator">@</span><span class="token function">v3</span></span>

      # Set up Node
      <span class="token operator">-</span> uses<span class="token operator">:</span> actions<span class="token operator">/</span>setup<span class="token operator">-</span>node<span class="token decorator"><span class="token at operator">@</span><span class="token function">v3</span></span>
        <span class="token keyword">with</span><span class="token operator">:</span>
          node<span class="token operator">-</span>version<span class="token operator">:</span> <span class="token string">'16.x'</span>

      #👇 Add Storybook build and deploy to GitHub Pages <span class="token keyword">as</span> a step <span class="token keyword">in</span> the workflow
      <span class="token operator">-</span> uses<span class="token operator">:</span> bitovi<span class="token operator">/</span>github<span class="token operator">-</span>actions<span class="token operator">-</span>storybook<span class="token operator">-</span>to<span class="token operator">-</span>github<span class="token operator">-</span>pages<span class="token decorator"><span class="token at operator">@</span><span class="token function">v1</span></span><span class="token number">.0</span><span class="token number">.1</span>
        <span class="token keyword">with</span><span class="token operator">:</span>
          install_command<span class="token operator">:</span> yarn install # <span class="token keyword">default</span><span class="token operator">:</span> npm ci
          build_command<span class="token operator">:</span> yarn build<span class="token operator">-</span>storybook # <span class="token keyword">default</span><span class="token operator">:</span> npm run build<span class="token operator">-</span>storybook
          path<span class="token operator">:</span> storybook<span class="token operator">-</span><span class="token keyword">static</span> # <span class="token keyword">default</span><span class="token operator">:</span> dist<span class="token operator">/</span>storybook
          checkout<span class="token operator">:</span> <span class="token boolean">false</span> # <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="검색-엔진-최적화-seo" tabindex="-1"><a class="header-anchor" href="#검색-엔진-최적화-seo" aria-hidden="true">#</a> 검색 엔진 최적화 (SEO)</h2>
<p>만약 여러분의 Storybook이 공개적으로 볼 수 있는 상태라면, 검색 엔진 결과 페이지에서 어떻게 나타낼지 설정하고 싶을 겁니다.</p>
<h3 id="설명" tabindex="-1"><a class="header-anchor" href="#설명" aria-hidden="true">#</a> 설명</h3>
<p>검색 엔진이 결과 목록에 표시할 설명을 제공할 수 있습니다. 단순히 config 디렉토리의 manager-head.html 파일에 다음을 추가하면 됩니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"description"</span> content<span class="token operator">=</span><span class="token string">"내 멋진 프로젝트를 위한 구성 요소"</span> key<span class="token operator">=</span><span class="token string">"desc"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="스토리북이-크롤링되지-않게-하는-방법" tabindex="-1"><a class="header-anchor" href="#스토리북이-크롤링되지-않게-하는-방법" aria-hidden="true">#</a> 스토리북이 크롤링되지 않게 하는 방법</h3>
<p>검색 엔진 결과에 게시된 스토리북이 나타나지 않도록 하려면, config 디렉토리의 manager-head.html 파일에 다음 내용을 추가하여 noindex 메타 태그를 포함시킬 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"robots"</span> content<span class="token operator">=</span><span class="token string">"noindex"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
