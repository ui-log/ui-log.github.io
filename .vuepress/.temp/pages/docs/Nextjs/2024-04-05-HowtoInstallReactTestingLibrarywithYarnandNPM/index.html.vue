<template><div><img src="@source/docs/Nextjs/2024-04-05-HowtoInstallReactTestingLibrarywithYarnandNPM/img/HowtoInstallReactTestingLibrarywithYarnandNPM_0.png" />
<p>React Testing Library은 리액트 컴포넌트를 테스트하는 인기있는 도구입니다. 구현 세부 정보 대신 사용자 상호 작용을 테스트하는 데 중점을 둬서 더 견고하고 유지보수가 쉬운 테스트를 만들 수 있습니다. 새 프로젝트를 시작하거나 기존 프로젝트에 React Testing Library를 통합하려면 Yarn 또는 NPM을 사용하는 방법을 알려드리겠습니다.</p>
<p>새 프로젝트를 초기화하세요 (필요한 경우): 이미 프로젝트를 설정하지 않았다면 다음 명령을 실행하여 새 프로젝트를 생성할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn init
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
<p>React Testing Library를 설치하려면 다음 명령어를 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add @testing<span class="token operator">-</span>library<span class="token operator">/</span>react @testing<span class="token operator">-</span>library<span class="token operator">/</span>dom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>설치 확인: 설치가 완료되면 package.json 파일을 확인하거나 다음을 실행하여 React Testing Library가 제대로 설치되었는지 확인할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn list <span class="token operator">--</span>depth<span class="token operator">=</span><span class="token number">0</span>
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
<p>위에서 나열된 패키지 목록에 @testing-library/react와 @testing-library/dom이 표시되어야 합니다.</p>
<h1 id="npm으로-설치하는-방법" tabindex="-1"><a class="header-anchor" href="#npm으로-설치하는-방법" aria-hidden="true">#</a> npm으로 설치하는 방법</h1>
<p>만약 npm을 사용하는 것을 선호한다면, 다음 단계를 따라 React Testing Library를 설치할 수 있습니다:</p>
<ul>
<li>새 프로젝트 초기화 (필요시): 이미 프로젝트를 설정하지 않았다면, 다음 명령어를 실행하여 새 프로젝트를 생성할 수 있습니다:</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>React Testing Library 설치: 프로젝트에 React Testing Library를 추가하려면 다음 명령을 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev @testing<span class="token operator">-</span>library<span class="token operator">/</span>react @testing<span class="token operator">-</span>library<span class="token operator">/</span>dom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>설치 확인: 설치가 완료되면 package.json 파일을 확인하거나 다음을 실행하여 React Testing Library가 올바르게 설치되었는지 확인할 수 있습니다:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm ls <span class="token operator">--</span>depth<span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>설치된 패키지 목록에서 @testing-library/react와 @testing-library/dom을 볼 수 있어야 합니다.</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>Yarn이든 NPM이든 상관없이 React Testing Library를 프로젝트에 통합하는 것은 간단합니다. 한 번 설치하면 React Testing Library가 제공하는 직관적이고 개발자 친화적인 API를 사용하여 React 컴포넌트에 대한 테스트 작성을 시작할 수 있습니다. 즐거운 테스팅하세요!</p>
</div></template>
