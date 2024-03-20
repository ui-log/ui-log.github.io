<template><div><h1 id="nextjs-14-저장소-src-디렉토리-특징" tabindex="-1"><a class="header-anchor" href="#nextjs-14-저장소-src-디렉토리-특징" aria-hidden="true">#</a> Nextjs 14 저장소 src 디렉토리 특징</h1>
<p>당신의 프로젝트 루트에 특별한 Next.js 앱 또는 페이지 디렉토리를 갖는 대신, Next.js는 또한 src 디렉토리 아래에 애플리케이션 코드를 배치하는 일반적인 패턴을 지원합니다.
이는 대부분 프로젝트 루트에 위치하는 프로젝트 구성 파일과 애플리케이션 코드를 분리하며, 일부 개인 및 팀에서 선호하는 방식입니다.</p>
<p>src 디렉토리를 사용하려면, 앱 라우터 폴더 또는 페이지 라우터 폴더를 각각 src/app 또는 src/pages로 이동시키세요.</p>
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
<img src="@source/docs/Tech/2024-03-20-src-Directory/img/src-Directory_0.png" />
<blockquote>
<p>중요 정보</p>
</blockquote>
<ul>
<li>/public 디렉토리는 프로젝트의 루트에 유지되어야 합니다.</li>
<li>package.json, next.config.js 및 tsconfig.json과 같은 구성 파일은 프로젝트의 루트에 유지되어야 합니다.</li>
<li>.env.* 파일들은 프로젝트의 루트에 유지되어야 합니다.</li>
<li>루트 디렉토리에 app 또는 pages가 있는 경우 src/app 또는 src/pages은 무시됩니다.</li>
<li>src를 사용하는 경우, /components 또는 /lib와 같은 다른 응용프로그램 폴더를 이동해야 합니다.</li>
<li>Middleware를 사용하는 경우, 해당 Middleware를 src 디렉토리 안에 배치해야 합니다.</li>
<li>Tailwind CSS를 사용하는 경우, tailwind.config.js 파일의 내용 섹션에 /src 접두사를 추가해야 합니다.</li>
<li>TypeScript 경로를 사용하여 @/*와 같이 가져오는 경우, tsconfig.json의 경로 객체를 업데이트하여 src/을 포함해야 합니다.</li>
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
</div></template>
