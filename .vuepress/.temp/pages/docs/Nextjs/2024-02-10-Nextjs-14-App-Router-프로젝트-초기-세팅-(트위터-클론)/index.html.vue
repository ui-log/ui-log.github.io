<template><div><h1 id="nextjs-14-app-router-프로젝트-초기-세팅-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14-app-router-프로젝트-초기-세팅-방법" aria-hidden="true">#</a> Nextjs 14 App Router 프로젝트 초기 세팅 방법</h1>
<div class="custom-container tip"><p class="custom-container-title">💡이 포스팅을 읽으면</p>
</div>
<p>Nextjs 14 버전이 안정화 버전으로 자리잡으면서 Page Router 대신 App Router를 보다 적극적으로 쓸 수 있을 것 같아서 App Router를 이용한 클론 코딩을 해보려고 합니다.</p>
<p>기술 스택으로는 Nextjs(App Router) + React Query + React Context + MSW를 사용할 예정입니다.</p>
<p>MSW는 백엔드 까지 만들 수는 없으니 가짜 목업 데이터를 위해서 사용하려고 합니다.</p>
<p>저는 Nextjs의 App Router 를 사용할 예정이기 때문에 <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">Nextjs 공식 문서<ExternalLinkIcon/></a>에서 아래 사진처럼 App Router 기반으로 작업을 하겠습니다.</p>
<img src="@source/docs/Nextjs/2024-02-10-Nextjs-14-App-Router-프로젝트-초기-세팅-(트위터-클론)/img/1.png" width="500" />
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
<h2 id="저장소-셋팅" tabindex="-1"><a class="header-anchor" href="#저장소-셋팅" aria-hidden="true">#</a> 저장소 셋팅</h2>
<p>Nextjs 의 앱라우터를 사용하기 위해서는 node 버전이 18.170 이상이어야 합니다.</p>
<p>node 버전을 손쉽게 변경하는 방법에 대해서는 제가 정리한 <a href="https://ui-log.github.io/docs/Setting/2024-02-10-nvm-%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A2%E1%84%89%E1%85%A5-node-%E1%84%87%E1%85%A5%E1%84%8C%E1%85%A5%E1%86%AB-%E1%84%89%E1%85%B1%E1%86%B8%E1%84%80%E1%85%A6-%E1%84%87%E1%85%A1%E1%84%81%E1%85%AE%E1%84%82%E1%85%B3%E1%86%AB-%E1%84%87%E1%85%A1%E1%86%BC%E1%84%87%E1%85%A5%E1%86%B8/" target="_blank" rel="noopener noreferrer">이글<ExternalLinkIcon/></a>에서 확인해보세요!</p>
<p>아래 명령어를 입력하면 기본 셋팅이 완료된 nextjs 프로젝트를 만들 수 있습니다.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx create-next-app@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>초기 셋팅을 직접 하고싶으시다면 비어있는 프로젝트에 아래 명령어들로 직접 next를 설치하실 수도 있습니다.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>// <span class="token function">yarn</span> 사용시
<span class="token function">yarn</span> <span class="token function">add</span> next@latest react@latest react-dom@latest

// <span class="token function">npm</span> 사용시
<span class="token function">npm</span> <span class="token function">install</span> next@latest react@latest react-dom@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>저는 nextjs 셋팅이 완료된 상태에서 시작할거기 때문에 npx 를 이용한 명령어로 설치하겠습니다.</p>
<p>설치하면 아래와 같이 nextjs 프로젝트 기본 정보들을 입력해주어야 하는데요.</p>
<img src="@source/docs/Nextjs/2024-02-10-Nextjs-14-App-Router-프로젝트-초기-세팅-(트위터-클론)/img/2.png" width="500" />
<p>저 항목들은 다 그대로 놔둬도 되지만 저는 src/ 디렉토리 하위에 개발 코드들을 작성하기 위해 <code v-pre>src/</code> 디렉토리 생성 메뉴만 제가 yes로 변경했습니다.</p>
<p>저장소 설치가 완료되면 에디터를 켜서 yarn 명령어로 필요한 패키지들 설치를 완료해줍니다.</p>
<img src="@source/docs/Nextjs/2024-02-10-Nextjs-14-App-Router-프로젝트-초기-세팅-(트위터-클론)/img/3.png" width="500" />
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
<h2 id="프로젝트-실행" tabindex="-1"><a class="header-anchor" href="#프로젝트-실행" aria-hidden="true">#</a> 프로젝트 실행</h2>
<p>yarn 명령어로 패키지 설치까지 완료했다면 아래 명령어를 통해서 프로젝트를 실행할 수 있습니다.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="@source/docs/Nextjs/2024-02-10-Nextjs-14-App-Router-프로젝트-초기-세팅-(트위터-클론)/img/4.png" width="500" />
<p>실행한 후에는 http://localhost:3000/ 에서 확인할 수 있습니다.</p>
<p><img src="@source/docs/Nextjs/2024-02-10-Nextjs-14-App-Router-프로젝트-초기-세팅-(트위터-클론)/img/5.png" alt="Alt text"></p>
<p>npx로 프로젝트를 생성했기 때문에 저희가 원치 않은 내용들이 들어가 있는데요. 이제 Nextjs 에서 기본적으로 작성해준 내용들은 제거하고 제가 원하는 코드를 작성하면 됩니다.</p>
<p>다음 글에서는 nextjs App Router에서 라우팅을 하는 기본적인 방법에 대해서 알아보도록 하겠습니다.</p>
</div></template>
