<template><div><h2 id="사용자-정의-스크립트-및-verdaccio를-활용하여-nx-환경에서-업무-자동화하기" tabindex="-1"><a class="header-anchor" href="#사용자-정의-스크립트-및-verdaccio를-활용하여-nx-환경에서-업무-자동화하기" aria-hidden="true">#</a> 사용자 정의 스크립트 및 Verdaccio를 활용하여 Nx 환경에서 업무 자동화하기</h2>
<p><img src="@source/docs/Nextjs/2024-04-05-LocalLibraryDevelopmentwithNxReleaseandVerdaccio/img/LocalLibraryDevelopmentwithNxReleaseandVerdaccio_0.png" alt="이미지"></p>
<p>Nx는 NPM 패키지를 효율적으로 개발하고 배포할 수 있는 모든 기능을 제공합니다. 지역 출판을 위한 Verdaccio와 혁신적인 Nx 릴리스 시스템을 포함한 구조화된 환경과 필수 도구를 제공합니다.</p>
<p>이전에 쓴 글인 🍒 Cherry-Picked Nx v18.1 Updates에서는 사용자 정의 publish.mjs가 이제 발행 가능 라이브러리를 관리하는 Nx Release로 대체된다는 것을 강조했습니다.</p>
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
<p>Nx 릴리즈는 주로 세 가지 주요 단계를 이루고 있어요:</p>
<p><img src="@source/docs/Nextjs/2024-04-05-LocalLibraryDevelopmentwithNxReleaseandVerdaccio/img/LocalLibraryDevelopmentwithNxReleaseandVerdaccio_1.png" alt="이미지"></p>
<p>Nx 릴리즈에 익숙하지 않은 분들께 추천드리는 것은:</p>
<ul>
<li>Juri Strumpflohner의 글: 모노레포에서의 버전 관리 및 패키지 릴리스를 읽어보세요.</li>
<li>Nx 문서를 확인하세요: 기능, 레시피 및 API</li>
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
<p>그 짧은 기사에서는 지역 개발을 위해 새 시스템을 Verdaccio와 함께 활용하는 통찰을 공유하고자 했습니다.</p>
<h1 id="실용적인-사용-사례" tabindex="-1"><a class="header-anchor" href="#실용적인-사용-사례" aria-hidden="true">#</a> 실용적인 사용 사례</h1>
<p>먼저 다음 명령을 사용하여 빈 Nx Workspace를 생성하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>nx<span class="token operator">-</span>workspace@latest myorg <span class="token operator">--</span>preset empty <span class="token operator">--</span>workspaceType integrated <span class="token operator">--</span>nxCloud skip <span class="token operator">&amp;&amp;</span> cd myorg
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
<p>다음으로 @nx/js 플러그인 기능을 추가해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nx add @nx<span class="token operator">/</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>마지막으로 개발하고자 하는 공개 가능한 라이브러리를 생성해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nx g @nx<span class="token operator">/</span>js<span class="token operator">:</span>lib my<span class="token operator">-</span>lib <span class="token operator">--</span>publishable <span class="token operator">--</span>importPath<span class="token operator">=</span>@myorg<span class="token operator">/</span>my<span class="token operator">-</span>lib
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
<h1 id="무슨-일이-있었나요" tabindex="-1"><a class="header-anchor" href="#무슨-일이-있었나요" aria-hidden="true">#</a> 무슨 일이 있었나요?</h1>
<p>게시 가능한 라이브러리를 생성하면 Nx가 작업 공간을 게시 준비하기 위해 필요한 모든 도구를 설치하고 구성합니다.</p>
<h2 id="verdaccio-설정" tabindex="-1"><a class="header-anchor" href="#verdaccio-설정" aria-hidden="true">#</a> Verdaccio 설정</h2>
<p>Nx는 @nx/js:setup-verdaccio를 사용하여 작업 공간에 Verdaccio를 자동으로 구성하며 다음 구성을 포함하는 루트 project.json이 결과로 생성됩니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"@my-org/source"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"$schema"</span><span class="token operator">:</span> <span class="token string">"node_modules/nx/schemas/project-schema.json"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"targets"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"local-registry"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"executor"</span><span class="token operator">:</span> <span class="token string">"@nx/js:verdaccio"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"port"</span><span class="token operator">:</span> <span class="token number">4873</span><span class="token punctuation">,</span>
        <span class="token string-property property">"config"</span><span class="token operator">:</span> <span class="token string">".verdaccio/config.yml"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"storage"</span><span class="token operator">:</span> <span class="token string">"tmp/local-registry/storage"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 구성은 로컬 Verdaccio 레지스트리가 지정된 스토리지 및 구성 경로를 사용하여 포트 4873에서 실행되도록 합니다. 다음 명령어를 사용하여 Verdaccio를 시작할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nx run local<span class="token operator">-</span>registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="nx-글로벌-구성" tabindex="-1"><a class="header-anchor" href="#nx-글로벌-구성" aria-hidden="true">#</a> Nx 글로벌 구성</h2>
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
<p>Nx는 nx.json 파일에서 전역적으로 Nx 릴리스를 설정합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"release"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"version"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"preVersionCommand"</span><span class="token operator">:</span> <span class="token string">"npx nx run-many -t build"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>preVersionCommand는 버전 업데이트 전에 빌드나 다른 작업이 완료되도록 보장합니다.</p>
<h2 id="프로젝트-구성" tabindex="-1"><a class="header-anchor" href="#프로젝트-구성" aria-hidden="true">#</a> 프로젝트 구성</h2>
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
<p>마지막으로, 라이브러리 프로젝트 구성에는 Nx 릴리스에 특화된 설정 및 릴리스를 실행하는 대상인 nx-release-publish가 포함될 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"my-lib"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"targets"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"nx-release-publish"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"packageRoot"</span><span class="token operator">:</span> <span class="token string">"dist/{projectRoot}"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"release"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"version"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"generatorOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"packageRoot"</span><span class="token operator">:</span> <span class="token string">"dist/{projectRoot}"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"currentVersionResolver"</span><span class="token operator">:</span> <span class="token string">"git-tag"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 다음을 사용하여 라이브러리를 쉽게 발행할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nx release
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
<h1 id="로컬-개발-플로우" tabindex="-1"><a class="header-anchor" href="#로컬-개발-플로우" aria-hidden="true">#</a> 로컬 개발 플로우</h1>
<p>만약 여러분이 라이브러리를 로컬에서 다른 로컬 저장소에서 테스트하고 싶다면, 아래 단계를 따라야 합니다:</p>
<ul>
<li>Verdaccio 시작하기: nx run local-registry</li>
<li>라이브러리 빌드하기: nx.json 파일의 preVersionCommand를 사용하여 Nx Release에 의해 자동화됩니다.</li>
<li>출력물 버전 업데이트: Nx Release에 의해 @nx/js:release-version 생성기를 사용하여 자동화됩니다.</li>
<li>Verdaccio에 라이브러리 발행하기: Nx Release에 의해 @nx/js:release-publish 및 생성된 목표 nx-release-publish를 사용하여 자동화됩니다.</li>
<li>라이브러리 설치하기: npm install @my-org/my-lib@latest</li>
</ul>
<p>로컬에서 작업하는 일은 반복적이고 지루할 수 있습니다, 특히 매번 고유한 버전을 생성해야 하는 경우. 그렇지 않으면 Nx Release는 동일한 버전을 다시 발행하지 않습니다. 또한, 저는 발행취소 단계를 추가하지 않고 업무 흐름을 복잡하게 하는 것을 선호합니다.</p>
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
<p>Nx 문서에서 특히 흥미로운 두 가지 예시가 강조되었습니다: Nx 릴리스를 위한 프로그래밍 API 사용과 로컬 레지스트리 업데이트. 이러한 예시는 표준 Nx 릴리스 프로세스를 향상시키기 위해 사용자 정의 스크립트를 작성하는 방법을 보여줍니다.</p>
<p>위에서 언급된 전체 프로세스를 다루기 위해, 제가 tools/scripts/publish-local.ts에 사용자 정의 스크립트를 구현하였습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 루트 project.json에서 생성된 대상과 관련</span>
<span class="token keyword">const</span> localRegistryTarget <span class="token operator">=</span> <span class="token string">'@myorg/source:local-registry'</span><span class="token punctuation">;</span>

<span class="token comment">// Verdaccio 프로세스를 중지하는 데 사용되는 콜백</span>
<span class="token keyword">let</span> <span class="token function-variable function">stopLocalRegistry</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 실행 옵션 가져오기</span>
  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token keyword">await</span> yargs
    <span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// yargs에서 기본 버전 의미 사용 안 함</span>
    <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">'version'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span>
        <span class="token string">'일반 커밋을 재정의하는 경우 사용할 명시적 버전 지정자'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'string'</span><span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">0.0.0-local.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token comment">// 버전은 항상 고유할 것임</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">'targetPath'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span>
        <span class="token string">'게시된 라이브러리를 설치할 리포지토리의 상대 경로'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'string'</span><span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">parseAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 단계 1: Verdaccio 시작
   */</span>
  stopLocalRegistry <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">startLocalRegistry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    localRegistryTarget<span class="token punctuation">,</span>
    <span class="token literal-property property">verbose</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 단계 2: 라이브러리 빌드
   * 단계 3: 출력물 버전 업데이트
   */</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> projectsVersionData <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">releaseVersion</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">specifier</span><span class="token operator">:</span> options<span class="token punctuation">.</span>version<span class="token punctuation">,</span>
    <span class="token literal-property property">stageChanges</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">gitCommit</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">gitTag</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">firstRelease</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">generatorOptionsOverrides</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">skipLockFileUpdate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 단계 4: Verdaccio에 라이브러리 게시
   */</span>
  <span class="token keyword">const</span> publishStatus <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">releasePublish</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">firstRelease</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 단계 5: 라이브러리 설치
   */</span>
  <span class="token comment">// 설치해야 하는 모든 게시된 Npm 패키지 얻기</span>
  <span class="token keyword">const</span> packagesToInstall <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>projectsVersionData<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>projectName<span class="token punctuation">,</span> <span class="token punctuation">{</span> newVersion <span class="token punctuation">}</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> project <span class="token operator">=</span> <span class="token function">readCachedProjectGraph</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>nodes<span class="token punctuation">[</span>projectName<span class="token punctuation">]</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> packageJson <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>
        <span class="token function">readFileSync</span><span class="token punctuation">(</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> project<span class="token punctuation">.</span>data<span class="token punctuation">.</span>root<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">package.json</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>packageJson<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">@</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>newVersion<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 설치 명령 준비</span>
  <span class="token keyword">const</span> targetPath <span class="token operator">=</span> <span class="token function">resolve</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>targetPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> installCommand <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">getInstallCommand</span><span class="token punctuation">(</span>
    targetPath
  <span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>packagesToInstall<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> --registry=http://localhost:4873</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>installCommand<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 대상 디렉토리로 이동하여 설치 명령 실행</span>
  process<span class="token punctuation">.</span><span class="token function">chdir</span><span class="token punctuation">(</span>targetPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">execSync</span><span class="token punctuation">(</span>installCommand<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 마지막: 설치가 완료되면 Verdaccio가 더 이상 필요하지 않음
   */</span>
  <span class="token function">stopLocalRegistry</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span>publishStatus<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 문제 발생 시 Verdaccio 중지</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">stopLocalRegistry</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 대상 경로에서 사용할 설치 명령 정의</span>
<span class="token keyword">function</span> <span class="token function">getInstallCommand</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">targetPath</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span><span class="token operator">:</span> string <span class="token punctuation">{</span>
  <span class="token keyword">const</span> siblingFiles <span class="token operator">=</span> <span class="token function">readdirSync</span><span class="token punctuation">(</span>targetPath<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>siblingFiles<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'yarn.lock'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'yarn add'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>siblingFiles<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'package-lock.json'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'npm install'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>siblingFiles<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'pnpm-lock.yaml'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'pnpm add'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">타겟 리포지토리에 대한 패키지 관리자를 찾을 수 없음: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>targetPath<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 단순히 실행하여 로컬로 패키지를 게시할 수 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx ts<span class="token operator">-</span>node <span class="token punctuation">.</span><span class="token operator">/</span>tools<span class="token operator">/</span>scripts<span class="token operator">/</span>publish<span class="token operator">-</span>local<span class="token punctuation">.</span>ts <span class="token operator">--</span>targetPath <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">/</span>app<span class="token operator">-</span>using<span class="token operator">-</span>my<span class="token operator">-</span>lib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="마지막으로" tabindex="-1"><a class="header-anchor" href="#마지막으로" aria-hidden="true">#</a> 마지막으로</h1>
<p>로컬에서 게시할 수 있는 라이브러리를 테스트하고 싶을 때 언제나 어려운 일입니다. Nx는 이 과정을 지원하기 위해 필요한 모든 도구를 제공합니다.</p>
<p>그러나 이 도구를 수동으로 사용할지 아니면 사용자 지정 스크립트를 활용하여 자동화할지는 각자의 결정에 달려 있습니다.</p>
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
<p>이 글에서 한 가지 방법을 제안하고 있지만, 여러분만의 방법을 만들어보시는 걸 강력히 권장합니다.</p>
<p>🚀 기대해주세요!</p>
<h1 id="관련-정보" tabindex="-1"><a class="header-anchor" href="#관련-정보" aria-hidden="true">#</a> 관련 정보</h1>
</div></template>
