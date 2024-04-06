<template><div><p><img src="@source/docs/Nextjs/2024-04-04-SharedTailwindSetupForMicroFrontendApplicationwithNxWorkspace/img/SharedTailwindSetupForMicroFrontendApplicationwithNxWorkspace_0.png" alt="이미지"></p>
<p>이 튜토리얼에서는 Nx Workspace를 사용하여 마이크로 프론트엔드 애플리케이션에 Tailwind CSS를 설정하는 과정을 안내합니다. Nx Workspace를 사용하여 호스트 및 리모트 애플리케이션을 만들고 두 애플리케이션 모두를 위해 Tailwind CSS를 구성합니다. 이 튜토리얼을 완료하면 마이크로 프론트엔드 애플리케이션에 Tailwind CSS를 설정하는 방법을 확실하게 이해하게 될 것입니다.</p>
<h1 id="최종-구현-링크" tabindex="-1"><a class="header-anchor" href="#최종-구현-링크" aria-hidden="true">#</a> 최종 구현 링크</h1>
<p>마이크로 프론트엔드 아키텍처의 최종 구현은 다음 리포지토리 커밋에서 확인할 수 있습니다:</p>
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
<li>info와 container 애플리케이션에 Tailwind CSS 구성 추가</li>
</ul>
<h1 id="전제-조건" tabindex="-1"><a class="header-anchor" href="#전제-조건" aria-hidden="true">#</a> 전제 조건</h1>
<p>시작하기 전에 다음 사항이 설정되어 있는지 확인하십시오:</p>
<ul>
<li>ESLint, Prettier, Husky 구성과 함께 Nx Workspace를 만들기 위한 기본 레포지토리.</li>
<li>Nx Workspace를 사용하여 Micro Frontend 아키텍처 구축.</li>
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
<p>시작하기 전에이 자습서에서 사용할 도구 및 기술을 살펴 보겠습니다:</p>
<ul>
<li>Nx Workspace: Nx는 Google, Facebook 및 Microsoft와 같이 개발하는 데 도움이되는 모노레포용 확장 가능한 개발 도구 세트입니다.</li>
<li>React: 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리입니다.</li>
<li>Tailwind CSS: 사용자 정의 디자인을 신속하게 구축하기 위한 유틸리티 기반 CSS 프레임워크입니다.</li>
<li>ESLint: JavaScript의 패턴을 식별하고 보고하는 데 사용되는 플러그인 가능하고 구성 가능한 린터 도구입니다.</li>
<li>Prettier: 일관된 코드 스타일을 강제하는 의견이 분분한 코드 포매터입니다.</li>
<li>Netlify: 지속적인 배포, 서버리스 함수 등을 제공하는 플랫폼입니다.</li>
</ul>
<h1 id="목차" tabindex="-1"><a class="header-anchor" href="#목차" aria-hidden="true">#</a> 목차</h1>
<ul>
<li>최종 구현 링크</li>
<li>필수 조건</li>
<li>목차</li>
<li>Nx Workspace 생성</li>
<li>호스트 애플리케이션 생성</li>
<li>원격 애플리케이션 생성</li>
<li>Tailwind CSS 설치</li>
<li>컨테이너 애플리케이션용 Tailwind CSS 구성</li>
<li>정보 애플리케이션용 Tailwind CSS 구성</li>
<li>Tailwind CSS 모든 애플리케이션의 프로덕션 및 개발 모드 테스트</li>
<li>결론</li>
<li>참고문헌</li>
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
<h1 id="컨테이너-애플리케이션을-위해-tailwind-css-구성하기" tabindex="-1"><a class="header-anchor" href="#컨테이너-애플리케이션을-위해-tailwind-css-구성하기" aria-hidden="true">#</a> 컨테이너 애플리케이션을 위해 Tailwind CSS 구성하기</h1>
<ul>
<li>컨테이너 애플리케이션을 위해 Tailwind CSS를 구성하기 전에, tailwindcss 패키지와 @tailwindcss/forms 플러그인을 다운로드해야 합니다. 이미 이러한 패키지를 설치하지 않았다면 다음 명령을 실행하여 설치할 수 있습니다:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm add <span class="token operator">-</span><span class="token constant">D</span> @tailwindcss<span class="token operator">/</span>forms tailwindcss
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>컨테이너 애플리케이션을 위해 Tailwind CSS를 구성하려면 다음 단계를 따라야 합니다:</p>
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
<li>다음 명령을 실행하여 컨테이너 애플리케이션에 Tailwind CSS 플러그인을 추가하세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm exec nx generate @nx<span class="token operator">/</span>react<span class="token operator">:</span>setup<span class="token operator">-</span>tailwind <span class="token operator">--</span>project<span class="token operator">=</span>container <span class="token operator">--</span>no<span class="token operator">-</span>interactive <span class="token operator">--</span>dry<span class="token operator">-</span>run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="@source/docs/Nextjs/2024-04-04-SharedTailwindSetupForMicroFrontendApplicationwithNxWorkspace/img/SharedTailwindSetupForMicroFrontendApplicationwithNxWorkspace_1.png" />
<p>위 명령을 실행하거나 Nx 콘솔을 사용한 후에는 Nx가 컨테이너 애플리케이션을 위해 Tailwind CSS 플러그인을 자동으로 구성할 수 있습니다.</p>
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
<li>프로젝트의 루트 디렉토리에 기본 Tailwind 구성 파일을 생성하세요.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// tailwind.base.config.js</span>
<span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'tailwindcss'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span> */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'./apps/**/*.{js,ts,jsx,tsx}'</span><span class="token punctuation">,</span>
    <span class="token string">'./packages/**/*.{js,ts,jsx,tsx}'</span><span class="token punctuation">,</span>
    <span class="token string">'./{src,pages,components,app}/**/*.{ts,tsx,html}'</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token constant">DEFAULT</span><span class="token operator">:</span> <span class="token string">'#3366ff'</span><span class="token punctuation">,</span>
          <span class="token number">50</span><span class="token operator">:</span> <span class="token string">'#f0f4ff'</span><span class="token punctuation">,</span>
          <span class="token number">100</span><span class="token operator">:</span> <span class="token string">'#f0f4ff'</span><span class="token punctuation">,</span>
          <span class="token number">200</span><span class="token operator">:</span> <span class="token string">'#d9e2ff'</span><span class="token punctuation">,</span>
          <span class="token number">300</span><span class="token operator">:</span> <span class="token string">'#a6c1ff'</span><span class="token punctuation">,</span>
          <span class="token number">400</span><span class="token operator">:</span> <span class="token string">'#598bff'</span><span class="token punctuation">,</span>
          <span class="token number">500</span><span class="token operator">:</span> <span class="token string">'#3366ff'</span><span class="token punctuation">,</span>
          <span class="token number">600</span><span class="token operator">:</span> <span class="token string">'#274bdb'</span><span class="token punctuation">,</span>
          <span class="token number">700</span><span class="token operator">:</span> <span class="token string">'#1a34b8'</span><span class="token punctuation">,</span>
          <span class="token number">800</span><span class="token operator">:</span> <span class="token string">'#102694'</span><span class="token punctuation">,</span>
          <span class="token number">900</span><span class="token operator">:</span> <span class="token string">'#091c7a'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@tailwindcss/forms'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>컨테이너 응용 프로그램의 tailwind.config.js 파일을 다음 내용으로 업데이트하세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* eslint-disable @typescript-eslint/unbound-method */</span>
<span class="token comment">/* eslint-disable @typescript-eslint/no-var-requires */</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> createGlobPatternsForDependencies <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@nx/react/tailwind'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> join <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> baseConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'../../tailwind.base.config'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'tailwindcss'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span> */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span><span class="token punctuation">(</span>baseConfig<span class="token operator">?.</span>content <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">join</span><span class="token punctuation">(</span>
      __dirname<span class="token punctuation">,</span>
      <span class="token string">'{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token function">createGlobPatternsForDependencies</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// INFO : Add the following line to include the tailwind styles from the info application</span>
    <span class="token operator">...</span><span class="token function">createGlobPatternsForDependencies</span><span class="token punctuation">(</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'apps/info'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>baseConfig<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="정보-애플리케이션을-위한-tailwind-css-구성하기" tabindex="-1"><a class="header-anchor" href="#정보-애플리케이션을-위한-tailwind-css-구성하기" aria-hidden="true">#</a> 정보 애플리케이션을 위한 Tailwind CSS 구성하기</h1>
<p>Tailwind CSS를 정보 애플리케이션에 구성하기 위해서는 다음 단계를 따라야 합니다:</p>
<ul>
<li>다음 명령어를 실행하여 info 애플리케이션에 Tailwind CSS 플러그인을 추가합니다:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm exec nx generate @nx<span class="token operator">/</span>react<span class="token operator">:</span>setup<span class="token operator">-</span>tailwind <span class="token operator">--</span>project<span class="token operator">=</span>info <span class="token operator">--</span>no<span class="token operator">-</span>interactive <span class="token operator">--</span>dry<span class="token operator">-</span>run
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
<p><img src="@source/docs/Nextjs/2024-04-04-SharedTailwindSetupForMicroFrontendApplicationwithNxWorkspace/img/SharedTailwindSetupForMicroFrontendApplicationwithNxWorkspace_2.png" alt="Nx가 info 애플리케이션을위한 Tailwind CSS 플러그인을 자동으로 구성할 수 있습니다."></p>
<p>명령을 실행하거나 Nx 콘솔을 사용한 후, Nx는 info 애플리케이션을 위해 Tailwind CSS 플러그인을 자동으로 구성할 수 있습니다.</p>
<ul>
<li>info 애플리케이션의 tailwind.config.js 파일을 다음 내용으로 업데이트하십시오:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* eslint-disable @typescript-eslint/unbound-method */</span>
<span class="token comment">/* eslint-disable @typescript-eslint/no-var-requires */</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> createGlobPatternsForDependencies <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@nx/react/tailwind'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> join <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> baseConfig <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'../../tailwind.base.config'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'tailwindcss'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span> */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span><span class="token punctuation">(</span>baseConfig<span class="token operator">?.</span>content <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">join</span><span class="token punctuation">(</span>
      __dirname<span class="token punctuation">,</span>
      <span class="token string">'{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token function">createGlobPatternsForDependencies</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>baseConfig<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="테일윈드-css-전체-애플리케이션-프로덕션-및-개발-모드에-대한-테스트" tabindex="-1"><a class="header-anchor" href="#테일윈드-css-전체-애플리케이션-프로덕션-및-개발-모드에-대한-테스트" aria-hidden="true">#</a> 테일윈드 CSS 전체 애플리케이션 프로덕션 및 개발 모드에 대한 테스트</h1>
<p>컨테이너 및 정보 애플리케이션에 테일윈드 CSS를 구성한 후에는 애플리케이션을 프로덕션 및 개발 모드로 테스트할 수 있습니다.</p>
<ul>
<li>우선 정보 애플리케이션에서 사용자 지정 동적 테일윈드 스타일을 테스트할 수 있습니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// apps/info/src/app/app.tsx</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>main<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>Welcome to info<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>This is a remote app that is part <span class="token keyword">of</span> the Nx plugin <span class="token keyword">for</span> Webpack <span class="token number">5.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>section className<span class="token operator">=</span><span class="token string">"bg-gray-50 shadow-sm p-4 rounded-lg"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>h2 className<span class="token operator">=</span><span class="token string">"text-4xl font-bold text-center border-b-4 border-b-primary py-[41px]"</span><span class="token operator">></span>
          Info
        <span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"text-lg text-center my-[41px]"</span><span class="token operator">></span>
          This app is a remote app that is part <span class="token keyword">of</span> the Nx plugin <span class="token keyword">for</span> Webpack <span class="token number">5.</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<li>다음 단계에서는 Info 애플리케이션에서 사용자 정의 애니메이션 테일윈드 스타일을 테스트할 수 있습니다.</li>
</ul>
<p>아래 스타일을 tailwind.base.config.js 파일에 추가해보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'tailwindcss'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Config<span class="token punctuation">}</span></span> */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'./apps/**/*.{js,ts,jsx,tsx}'</span><span class="token punctuation">,</span>
    <span class="token string">'./packages/**/*.{js,ts,jsx,tsx}'</span><span class="token punctuation">,</span>
    <span class="token string">'./{src,pages,components,app}/**/*.{ts,tsx,html}'</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token constant">DEFAULT</span><span class="token operator">:</span> <span class="token string">'#3366ff'</span><span class="token punctuation">,</span>
          <span class="token number">50</span><span class="token operator">:</span> <span class="token string">'#f0f4ff'</span><span class="token punctuation">,</span>
          <span class="token number">100</span><span class="token operator">:</span> <span class="token string">'#f0f4ff'</span><span class="token punctuation">,</span>
          <span class="token number">200</span><span class="token operator">:</span> <span class="token string">'#d9e2ff'</span><span class="token punctuation">,</span>
          <span class="token number">300</span><span class="token operator">:</span> <span class="token string">'#a6c1ff'</span><span class="token punctuation">,</span>
          <span class="token number">400</span><span class="token operator">:</span> <span class="token string">'#598bff'</span><span class="token punctuation">,</span>
          <span class="token number">500</span><span class="token operator">:</span> <span class="token string">'#3366ff'</span><span class="token punctuation">,</span>
          <span class="token number">600</span><span class="token operator">:</span> <span class="token string">'#274bdb'</span><span class="token punctuation">,</span>
          <span class="token number">700</span><span class="token operator">:</span> <span class="token string">'#1a34b8'</span><span class="token punctuation">,</span>
          <span class="token number">800</span><span class="token operator">:</span> <span class="token string">'#102694'</span><span class="token punctuation">,</span>
          <span class="token number">900</span><span class="token operator">:</span> <span class="token string">'#091c7a'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// INFO : 다음 애니메이션 스타일을 추가합니다</span>
      <span class="token literal-property property">animation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">wiggle</span><span class="token operator">:</span> <span class="token string">'wiggle 1s ease-in-out infinite'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// INFO : 다음 키프레임 스타일을 추가합니다</span>
      <span class="token literal-property property">keyframes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">wiggle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">'0%, 100%'</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">'rotate(-3deg)'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string-property property">'50%'</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">'rotate(3deg)'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@tailwindcss/forms'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>이 애니메이션 스타일을 Info 애플리케이션에서 사용하세요. 이렇게 함으로써 Info 제목에 <code v-pre>wiggle</code> 애니메이션을 추가하고 <code v-pre>tailwind.base.config.js</code> 파일에서 프라이머리 색상을 사용합니다.</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// apps/info/src/app/app.tsx</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>main<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>Welcome to info<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>This is a remote app that is part <span class="token keyword">of</span> the Nx plugin <span class="token keyword">for</span> Webpack <span class="token number">5.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>section className<span class="token operator">=</span><span class="token string">"bg-gray-50 shadow-sm p-4 rounded-lg"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>h2 className<span class="token operator">=</span><span class="token string">"text-4xl font-bold text-center border-b-4 border-b-primary py-[40px]"</span><span class="token operator">></span>
          <span class="token punctuation">{</span><span class="token comment">/* INFO : 다음 줄 스타일이 추가되었습니다 */</span><span class="token punctuation">}</span>
          <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"animate-wiggle p-8 text-primary-700"</span><span class="token operator">></span>Info<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"text-lg text-center my-[40px]"</span><span class="token operator">></span>
          This app is a remote app that is part <span class="token keyword">of</span> the Nx plugin <span class="token keyword">for</span> Webpack <span class="token number">5.</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>컨테이너 애플리케이션 테일윈드 스타일을 테스트합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// apps/container/src/pages/home/index.tsx</span>
<span class="token keyword">import</span> SocialLinks <span class="token keyword">from</span> <span class="token string">'../../components/social-links'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">HomePage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"h-[90vh] flex flex-col justify-center items-center bg-gray-100 gap-y-4 w-full"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"text-[200px] animate-wiggle"</span><span class="token operator">></span>🌍<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token string">"text-primary text-4xl font-bold"</span><span class="token operator">></span>
        Welcome to the Container<span class="token operator">!</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"text-lg text-primary-400"</span><span class="token operator">></span>
        This is the container app that consumes the remote app info<span class="token punctuation">.</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"text-lg text-gray-400"</span><span class="token operator">></span>
        It was created <span class="token keyword">with</span> the Nx plugin <span class="token keyword">for</span> Webpack <span class="token number">5.</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>SocialLinks <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> socialLinks <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'🔗 LinkedIn'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://www.linkedin.com/in/serifcolakel/'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'🔗 Twitter'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://twitter.com/ColakelSerif'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">SocialLinks</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex flex-row divide-x-2 md:w-1/3 w-full divide-black justify-center items-center border py-4 rounded-lg bg-white"</span><span class="token operator">></span>
      <span class="token punctuation">{</span>socialLinks<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name<span class="token punctuation">,</span> url <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>a
          className<span class="token operator">=</span><span class="token string">"px-4 hover:underline text-primary-400 text-xl"</span>
          href<span class="token operator">=</span><span class="token punctuation">{</span>url<span class="token punctuation">}</span>
          key<span class="token operator">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span>
          rel<span class="token operator">=</span><span class="token string">"noreferrer"</span>
          target<span class="token operator">=</span><span class="token string">"_blank"</span>
        <span class="token operator">></span>
          <span class="token punctuation">{</span>name<span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<li>
<p>마지막 단계에서는 컨테이너 및 정보 애플리케이션의 동적 스타일과 애니메이션을 빌드에서 확인할 수 있습니다.</p>
</li>
<li>
<p>다음 명령을 실행하여 프로덕션 모드로 컨테이너 및 정보 애플리케이션을 빌드하세요:</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>rm <span class="token operator">-</span>rf dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm run serve<span class="token operator">:</span>info
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// apps/container/webpack.config.prod.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> withReact <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@nx/react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> withModuleFederation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@nx/react/module-federation'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> composePlugins<span class="token punctuation">,</span> ModuleFederationConfig<span class="token punctuation">,</span> withNx <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@nx/webpack'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> baseConfig <span class="token keyword">from</span> <span class="token string">'./module-federation.config'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token literal-property property">prodConfig</span><span class="token operator">:</span> ModuleFederationConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>baseConfig<span class="token punctuation">,</span>
  <span class="token comment">/*
   * 프로덕션용 원격 재정의.
   * 각 항목은 고유한 이름과 배포된 URL의 쌍입니다.
   *
   * 예:
   * remotes: [
   *   ['app1', 'http://app1.example.com'],
   *   ['app2', 'http://app2.example.com'],
   * ]
   *
   * 필요에 따라 원격 remoteEntry.js 파일의 전체 경로도 사용할 수 있습니다.
   *
   * remotes: [
   *   ['app1', 'http://example.com/path/to/app1/remoteEntry.js'],
   *   ['app2', 'http://example.com/path/to/app2/remoteEntry.js'],
   * ]
   */</span>
  <span class="token literal-property property">remotes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">'info'</span><span class="token punctuation">,</span> <span class="token string">'http://localhost:3001/'</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// INFO : 프로덕션을 위해 URL 변경 old: remotes: [['info', 'https://relaxed-mochi-7581fa.netlify.app/']],</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// Nx 옵션 및 컨텍스트에서 config 개체를 빌드하기 위한 webpack용 Nx 플러그인.</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">composePlugins</span><span class="token punctuation">(</span>
  <span class="token function">withNx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">withReact</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">withModuleFederation</span><span class="token punctuation">(</span>prodConfig<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm run serve<span class="token operator">:</span>container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>애플리케이션을 빌드한 후에는 dist 폴더에서 style.css 테일윈드 스타일 및 애니메이션을 볼 수 있습니다.</li>
</ul>
<img src="@source/docs/Nextjs/2024-04-04-SharedTailwindSetupForMicroFrontendApplicationwithNxWorkspace/img/SharedTailwindSetupForMicroFrontendApplicationwithNxWorkspace_3.png" />
```
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
<p>이 튜토리얼에서는 Nx Workspace를 사용하여 마이크로 프론트앤드 애플리케이션에 Tailwind CSS를 설정하는 방법을 배웠습니다. Nx Workspace를 사용하여 호스트 및 원격 애플리케이션을 만들고 두 애플리케이션 모두를 위해 Tailwind CSS를 구성했습니다. 또한 제품 및 개발 모드에서 애플리케이션을 테스트하여 Tailwind CSS 스타일이 올바르게 작동하는지 확인했습니다. 이 튜토리얼을 따르면 이제 마이크로 프론트앤드 애플리케이션을 위해 Tailwind CSS를 설정하는 방법에 대한 탄탄한 이해가 있어야 합니다.</p>
</div></template>
