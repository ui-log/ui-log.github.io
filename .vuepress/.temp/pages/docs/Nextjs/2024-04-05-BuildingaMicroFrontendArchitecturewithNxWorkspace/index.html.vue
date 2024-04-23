<template><div><img src="@source/docs/Nextjs/2024-04-05-BuildingaMicroFrontendArchitecturewithNxWorkspace/img/BuildingaMicroFrontendArchitecturewithNxWorkspace_0.png" />
<p>현재 개발 환경에서는 확장 가능하고 모듈식 애플리케이션을 구축하기 위한 인기 있는 접근 방식인 마이크로 프런트엔드 아키텍처를 만드는 것이 일반적입니다. Nx Workspace은 이러한 아키텍처를 효율적으로 구현할 수 있는 강력한 플랫폼을 제공합니다. 이 튜토리얼에서는 Nx Workspace를 사용하여 마이크로 프런트엔드 아키텍처를 구축하는 과정, 호스트 및 원격 응용 프로그램 생성, 그리고 그들 간에 코드 공유에 대해 안내합니다.</p>
<h1 id="최종-구현에-대한-링크" tabindex="-1"><a class="header-anchor" href="#최종-구현에-대한-링크" aria-hidden="true">#</a> 최종 구현에 대한 링크</h1>
<p>마이크로 프런트엔드 아키텍처의 최종 구현은 다음 저장소 커밋에서 확인할 수 있습니다:</p>
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
<li>마이크로 프런트 엔드 설정</li>
<li>Netlify에서 프로덕션을 위한 'info' 모듈의 원격 URL 업데이트</li>
<li>netlify.toml에 리디렉션 규칙 추가 및 Netlify에서 Cors 오류 수정</li>
</ul>
<h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h1>
<p>이 튜토리얼은 Nx Workspace를 사용하여 마이크로 프런트 엔드 아키텍처를 생성하는 과정을 안내합니다. Nx Workspace를 사용하여 호스트 및 원격 애플리케이션을 생성하고, 애플리케이션 간에 코드를 공유하기 위해 패키지를 사용할 것입니다. 이 튜토리얼을 완료하면 마이크로 프런트 엔드 아키텍처를 만드는 방법에 대한 sol이해를 얻을 것입니다.</p>
<h1 id="준비사항" tabindex="-1"><a class="header-anchor" href="#준비사항" aria-hidden="true">#</a> 준비사항</h1>
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
<p>시작하기 전에 다음 사항을 준비해 두세요:</p>
<ul>
<li>ESLint, Prettier, 그리고 Husky 구성이 포함된 Nx Workspace를 생성하기 위한 베이스 리포지토리.</li>
</ul>
<h2 id="워크스페이스-설정하기" tabindex="-1"><a class="header-anchor" href="#워크스페이스-설정하기" aria-hidden="true">#</a> 워크스페이스 설정하기</h2>
<ul>
<li>다음 명령어를 실행하여 apps 폴더에 있는 기존 애플리케이션을 모두 제거하세요:</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>rm <span class="token operator">-</span>rf apps<span class="token comment">/*
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>다음과 같이 package.json 파일이 구성되어 있는지 확인하세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"@mfe-tutorial/source"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"version"</span><span class="token operator">:</span> <span class="token string">"0.0.0"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"license"</span><span class="token operator">:</span> <span class="token string">"MIT"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"lint"</span><span class="token operator">:</span> <span class="token string">"pnpm exec nx run-many --target=lint --all"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"prepare"</span><span class="token operator">:</span> <span class="token string">"husky"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"private"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"react"</span><span class="token operator">:</span> <span class="token string">"18.2.0"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"react-dom"</span><span class="token operator">:</span> <span class="token string">"18.2.0"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"react-router-dom"</span><span class="token operator">:</span> <span class="token string">"6.11.2"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"tslib"</span><span class="token operator">:</span> <span class="token string">"^2.3.0"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"@babel/core"</span><span class="token operator">:</span> <span class="token string">"^7.14.5"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"@babel/preset-react"</span><span class="token operator">:</span> <span class="token string">"^7.14.5"</span><span class="token punctuation">,</span>
    <span class="token operator">...</span> <span class="token punctuation">(</span>중략<span class="token punctuation">)</span>
    <span class="token string-property property">"vitest"</span><span class="token operator">:</span> <span class="token string">"~0.32.0"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>다음 명령어를 실행하여 종속성을 설치하세요:</li>
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
<ul>
<li><code v-pre>package-lock.json</code>, <code v-pre>yarn.lock</code>, <code v-pre>pnpm-lock.yaml</code>, 그리고 <code v-pre>node_modules</code> 폴더를 삭제해야 해요. 아래 명령어를 사용해서 이 파일들과 폴더를 삭제할 수 있어요.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>rm <span class="token operator">-</span>rf <span class="token keyword">package</span><span class="token operator">-</span>lock<span class="token punctuation">.</span>json yarn<span class="token punctuation">.</span>lock pnpm<span class="token operator">-</span>lock<span class="token punctuation">.</span>yaml node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>이제 다음 명령어를 사용해서 의존성을 설치할 수 있어요.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code># pnpm을 사용하는 경우
pnpm install

# yarn을 사용하는 경우
yarn install

# npm을 사용하는 경우
npm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>축하합니다! 종속성을 성공적으로 설치했습니다.</p>
<h1 id="호스트-애플리케이션-생성" tabindex="-1"><a class="header-anchor" href="#호스트-애플리케이션-생성" aria-hidden="true">#</a> 호스트 애플리케이션 생성</h1>
<ul>
<li>다음 명령을 실행하여 호스트 및 원격 애플리케이션을 생성해보세요:</li>
</ul>
<p>호스트 애플리케이션은 container로, 원격 애플리케이션은 info로 지칭합니다. 이 스크립트를 따라갈 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm exec nx generate @nx<span class="token operator">/</span>react<span class="token operator">:</span>host <span class="token operator">--</span>name<span class="token operator">=</span>container <span class="token operator">--</span>devServerPort<span class="token operator">=</span><span class="token number">3000</span> <span class="token operator">--</span>directory<span class="token operator">=</span>apps<span class="token operator">/</span>container <span class="token operator">--</span>remotes<span class="token operator">=</span>info <span class="token operator">--</span>projectNameAndRootFormat<span class="token operator">=</span><span class="token keyword">as</span><span class="token operator">-</span>provided <span class="token operator">--</span>no<span class="token operator">-</span>interactive <span class="token operator">--</span>dry<span class="token operator">-</span>run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/Nextjs/2024-04-05-BuildingaMicroFrontendArchitecturewithNxWorkspace/img/BuildingaMicroFrontendArchitecturewithNxWorkspace_1.png" alt="Building a Micro Frontend Architecture with Nx Workspace"></p>
<ul>
<li>호스트 및 원격 애플리케이션을 생성한 후에는 다음 명령을 사용하여 린팅을 실행하십시오.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// package.json</span>
  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"lint"</span><span class="token operator">:</span> <span class="token string">"pnpm exec nx run-many --target=lint --all"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm run lint
# 또는
yarn lint
# 또는
npm run lint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm run lint <span class="token operator">--</span>fix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>축하드려요! 린트 오류와 경고를 성공적으로 수정했습니다.</p>
<h1 id="핫-리로드-및-개발" tabindex="-1"><a class="header-anchor" href="#핫-리로드-및-개발" aria-hidden="true">#</a> 핫 리로드 및 개발</h1>
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
<p>호스트 및 원격 애플리케이션을 실행하는 다음 단계입니다. package.json 파일에 다음 스크립트를 추가할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">"dev:container"</span><span class="token operator">:</span> <span class="token string">"pnpm exec nx run container:serve --configuration=development"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"dev:info"</span><span class="token operator">:</span> <span class="token string">"pnpm exec nx run info:serve --configuration=development"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>이제 다음 명령어를 사용하여 호스트 및 원격 애플리케이션을 실행할 수 있어요. 원격 애플리케이션에서 개발 작업을 할 수 있다면 먼저 dev:info를 실행한 다음 호스트 애플리케이션을 위해 dev:container를 실행하세요. 변경 사항에 대한 실시간 새로고침이 자동으로 연결됩니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm run dev<span class="token operator">:</span>info
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm run dev<span class="token operator">:</span>container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="프로덕션-빌드" tabindex="-1"><a class="header-anchor" href="#프로덕션-빌드" aria-hidden="true">#</a> 프로덕션 빌드</h1>
<p>호스트 및 원격 애플리케이션을 실행하는 마지막 단계입니다. package.json 파일에 다음 스크립트를 추가할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"serve:container"</span><span class="token operator">:</span> <span class="token string">"pnpm exec nx run container:serve-static --configuration=production"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"serve:info"</span><span class="token operator">:</span> <span class="token string">"pnpm exec nx run info:serve-static --configuration=production"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<li>이제 다음 명령어를 사용하여 호스트 및 원격 애플리케이션을 실행할 수 있어요.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm run serve<span class="token operator">:</span>info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm run serve<span class="token operator">:</span>container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/Nextjs/2024-04-05-BuildingaMicroFrontendArchitecturewithNxWorkspace/img/BuildingaMicroFrontendArchitecturewithNxWorkspace_2.png" alt="이미지"></p>
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
<p>🎉 축하합니다! React 애플리케이션을 성공적으로 만들었습니다.</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>이 튜토리얼에서는 Nx Workspace를 사용하여 마이크로 프론트엔드 아키텍처를 만드는 방법을 배웠습니다. Nx Workspace를 사용하여 호스트 및 원격 애플리케이션을 만들고 이들 사이에 코드를 공유했습니다. 이 튜토리얼에 나열된 단계를 따라서 응용 프로그램을 위한 확장 가능하고 모듈식 마이크로 프론트엔드 아키텍처를 만들 수 있습니다.</p>
<p>이 튜토리얼은 Nx Workspace를 사용한 마이크로 프론트엔드 아키텍처를 구축하는 데 견고한 기반을 제공했습니다. 이제 더 많은 고급 기능과 구성을 탐색하여 마이크로 프론트엔드 아키텍처를 더욱 강화할 수 있습니다.</p>
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
<p>감사합니다! 🚀</p>
<h1 id="참고-자료" tabindex="-1"><a class="header-anchor" href="#참고-자료" aria-hidden="true">#</a> 참고 자료</h1>
<ul>
<li>Nx 워크스페이스</li>
<li>Nx 모듈 연맹</li>
<li>Nx 콘솔</li>
<li>React</li>
<li>React Router</li>
<li>TypeScript</li>
<li>ESLint 규칙</li>
<li>Prettier 규칙</li>
<li>Netlify</li>
<li>Netlify Redirects</li>
<li>Netlify Headers</li>
<li>Netlify Functions</li>
</ul>
<h1 id="간단한-설명-🚀" tabindex="-1"><a class="header-anchor" href="#간단한-설명-🚀" aria-hidden="true">#</a> 간단한 설명 🚀</h1>
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
<p>인 플레인 영어 커뮤니티의 일원이 되어 주셔서 감사합니다! 떠나시기 전에:</p>
<ul>
<li>작가를 클랩(clap)하고 팔로우하세요 👏️️</li>
<li>팔로우하기: X | LinkedIn | YouTube | Discord | Newsletter</li>
<li>다른 플랫폼 방문하기: Stackademic | CoFeed | Venture | Cubed</li>
<li>PlainEnglish.io에서 더 많은 콘텐츠를 확인하세요</li>
</ul>
</div></template>
