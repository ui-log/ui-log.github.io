<template><div><p>Storybook 테스트 실행기는 모든 이야기를 실행 가능한 테스트로 변환합니다. Jest와 Playwright로 구동됩니다.</p>
<ul>
<li>play 함수가 없는 경우: 이야기가 오류 없이 렌더링되는지 확인합니다.</li>
<li>play 함수가 있는 경우: play 함수의 오류와 모든 단언이 통과되었는지도 확인합니다.</li>
</ul>
<p>이러한 테스트는 실제 브라우저에서 실행되며 명령줄이나 CI 서버를 통해 실행할 수 있습니다.</p>
<h2 id="설정" tabindex="-1"><a class="header-anchor" href="#설정" aria-hidden="true">#</a> 설정</h2>
<p>테스트 러너는 독립적이고 프레임워크에 중립적인 유틸리티로, Storybook과 병렬로 실행됩니다. 올바르게 설정하려면 몇 가지 추가 단계가 필요합니다. 아래에는 구성하고 실행하는 데 권장되는 방법이 자세히 나와 있습니다.</p>
<p>다음 명령을 실행하여 설치하세요.</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npm install @storybook/test-runner --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>package.json 스크립트를 업데이트하고 테스트 러너를 활성화하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"test-storybook"</span><span class="token operator">:</span> <span class="token string">"test-storybook"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음을 사용하여 Storybook를 시작하십시오:</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npm run storybook
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>마지막으로, 새로운 터미널 창을 열고 테스트 러너를 실행하십시오:</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npm run test-storybook
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="설정-1" tabindex="-1"><a class="header-anchor" href="#설정-1" aria-hidden="true">#</a> 설정</h2>
<p>테스트 러너는 Storybook에 대한 제로 구성 지원을 제공합니다. 그러나 더 세밀한 제어를 위해 test-storybook --eject을 실행할 수 있습니다. 이 명령은 프로젝트 루트에 test-runner-jest.config.js 파일을 생성하며 수정할 수 있습니다. 또한 jest-playwright를 사용하기 때문에 생성된 구성 파일을 확장하고 testEnvironmentOptions를 제공할 수 있습니다.</p>
<h3 id="cli-옵션" tabindex="-1"><a class="header-anchor" href="#cli-옵션" aria-hidden="true">#</a> CLI 옵션</h3>
<p>테스트 러너는 Jest로 구동되며 Jest CLI 옵션의 일부를 허용합니다(예: --watch, --maxWorkers). 이미 프로젝트에서 해당 플래그 중 하나를 사용 중이라면 문제없이 Storybook의 테스트 러너로 이동할 수 있어야 합니다. 아래에 모든 사용 가능한 플래그와 사용 예제가 나와 있습니다.</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npm run test-storybook -- --watch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="배포된-storybook에-대한-테스트-실행" tabindex="-1"><a class="header-anchor" href="#배포된-storybook에-대한-테스트-실행" aria-hidden="true">#</a> 배포된 Storybook에 대한 테스트 실행</h3>
<p>기본적으로 테스트 러너는 포트 6006에서 로컬로 실행 중인 Storybook에 대해 실행된다고 가정합니다. 배포된 Storybooks에 대해 실행할 대상 URL을 정의하고 싶을 경우, --url 플래그를 사용하거나 TARGET_URL 환경 변수를 설정할 수 있습니다. 예:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn test<span class="token operator">-</span>storybook <span class="token operator">--</span>url https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>the<span class="token operator">-</span>storybook<span class="token operator">-</span>url<span class="token operator">-</span>here<span class="token punctuation">.</span>com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="테스트-실행-환경-설정" tabindex="-1"><a class="header-anchor" href="#테스트-실행-환경-설정" aria-hidden="true">#</a> 테스트 실행 환경 설정</h2>
<p>테스트 러너를 구성하여 CI 환경에서 테스트를 실행할 수도 있습니다. 아래에는 시작하는 데 도움이 되는 몇 가지 레시피가 문서화되어 있습니다.</p>
<h3 id="github-actions-배포를-통해-배포된-storybooks에서-실행하기" tabindex="-1"><a class="header-anchor" href="#github-actions-배포를-통해-배포된-storybooks에서-실행하기" aria-hidden="true">#</a> Github Actions 배포를 통해 배포된 Storybooks에서 실행하기</h3>
<p>만약 Vercel이나 Netlify와 같은 서비스를 통해 Storybook을 게시하는 경우, 그들은 GitHub Actions에서 deployment_status 이벤트를 발생시킵니다. 이를 사용하여 deployment_status.target_url을 TARGET_URL 환경 변수로 설정할 수 있습니다. 다음은 방법입니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>name<span class="token operator">:</span> Storybook Tests
on<span class="token operator">:</span> deployment_status
jobs<span class="token operator">:</span>
  test<span class="token operator">:</span>
    timeout<span class="token operator">-</span>minutes<span class="token operator">:</span> <span class="token number">60</span>
    runs<span class="token operator">-</span>on<span class="token operator">:</span> ubuntu<span class="token operator">-</span>latest
    <span class="token keyword">if</span><span class="token operator">:</span> github<span class="token punctuation">.</span>event<span class="token punctuation">.</span>deployment_status<span class="token punctuation">.</span>state <span class="token operator">==</span> <span class="token string">'success'</span>
    steps<span class="token operator">:</span>
      <span class="token operator">-</span> uses<span class="token operator">:</span> actions<span class="token operator">/</span>checkout<span class="token decorator"><span class="token at operator">@</span><span class="token function">v3</span></span>
      <span class="token operator">-</span> uses<span class="token operator">:</span> actions<span class="token operator">/</span>setup<span class="token operator">-</span>node<span class="token decorator"><span class="token at operator">@</span><span class="token function">v3</span></span>
        <span class="token keyword">with</span><span class="token operator">:</span>
          node<span class="token operator">-</span>version<span class="token operator">-</span>file<span class="token operator">:</span> <span class="token string">'.nvmrc'</span>
      <span class="token operator">-</span> name<span class="token operator">:</span> Install dependencies
        run<span class="token operator">:</span> yarn
      <span class="token operator">-</span> name<span class="token operator">:</span> Install Playwright
        run<span class="token operator">:</span> npx playwright install <span class="token operator">--</span><span class="token keyword">with</span><span class="token operator">-</span>deps
      <span class="token operator">-</span> name<span class="token operator">:</span> Run Storybook tests
        run<span class="token operator">:</span> yarn test<span class="token operator">-</span>storybook
        env<span class="token operator">:</span>
          <span class="token constant">TARGET_URL</span><span class="token operator">:</span> <span class="token string">'${github.event.deployment_status.target_url}'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="배포되지-않은-storybook에-대해-실행하기" tabindex="-1"><a class="header-anchor" href="#배포되지-않은-storybook에-대해-실행하기" aria-hidden="true">#</a> 배포되지 않은 Storybook에 대해 실행하기</h3>
<p>CI 공급업체(예: GitHub Actions, GitLab Pipelines, CircleCI)를 사용하여 빌드하고 테스트 실행기를 구성하여 생성된 Storybook에 대해 테스트를 실행할 수 있습니다. 다음은 third-party 라이브러리(concurrently, http-server, wait-on)에 의존하는 방법입니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>name<span class="token operator">:</span> <span class="token string">'Storybook Tests'</span>
on<span class="token operator">:</span> push
jobs<span class="token operator">:</span>
  test<span class="token operator">:</span>
    timeout<span class="token operator">-</span>minutes<span class="token operator">:</span> <span class="token number">60</span>
    runs<span class="token operator">-</span>on<span class="token operator">:</span> ubuntu<span class="token operator">-</span>latest
    steps<span class="token operator">:</span>
      <span class="token operator">-</span> uses<span class="token operator">:</span> actions<span class="token operator">/</span>checkout<span class="token decorator"><span class="token at operator">@</span><span class="token function">v3</span></span>
      <span class="token operator">-</span> uses<span class="token operator">:</span> actions<span class="token operator">/</span>setup<span class="token operator">-</span>node<span class="token decorator"><span class="token at operator">@</span><span class="token function">v3</span></span>
        <span class="token keyword">with</span><span class="token operator">:</span>
          node<span class="token operator">-</span>version<span class="token operator">-</span>file<span class="token operator">:</span> <span class="token string">'.nvmrc'</span>
      <span class="token operator">-</span> name<span class="token operator">:</span> Install dependencies
        run<span class="token operator">:</span> yarn
      <span class="token operator">-</span> name<span class="token operator">:</span> Install Playwright
        run<span class="token operator">:</span> npx playwright install <span class="token operator">--</span><span class="token keyword">with</span><span class="token operator">-</span>deps
      <span class="token operator">-</span> name<span class="token operator">:</span> Build Storybook
        run<span class="token operator">:</span> yarn build<span class="token operator">-</span>storybook <span class="token operator">--</span>quiet
      <span class="token operator">-</span> name<span class="token operator">:</span> Serve Storybook and run tests
        run<span class="token operator">:</span> <span class="token operator">|</span>
          npx concurrently <span class="token operator">-</span>k <span class="token operator">-</span>s first <span class="token operator">-</span>n <span class="token string">"SB,TEST"</span> <span class="token operator">-</span>c <span class="token string">"magenta,blue"</span> \
            <span class="token string">"npx http-server storybook-static --port 6006 --silent"</span> \
            <span class="token string">"npx wait-on tcp:6006 &amp;&amp; yarn test-storybook"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="chromatic과-test-runner의-차이점은-무엇인가요" tabindex="-1"><a class="header-anchor" href="#chromatic과-test-runner의-차이점은-무엇인가요" aria-hidden="true">#</a> Chromatic과 Test runner의 차이점은 무엇인가요?</h3>
<p>Test runner은 로컬 또는 CI에서 실행할 수 있는 일반적인 테스트 도구로, 모든 종류의 테스트를 실행할 수 있도록 구성하거나 확장할 수 있습니다.</p>
<p>Chromatic은 시각 및 상호 작용 테스트(그리고 곧 접근성 테스트)를 실행하는 클라우드 기반 서비스로, 테스트 러너를 설정하지 않고 실행합니다. 또한 귀하의 git 공급자와 동기화하고 비공개 프로젝트의 액세스 제어를 관리합니다.</p>
<p>그러나 경우에 따라 테스트 실행기와 Chromatic을 함께 사용하고 싶을 수도 있어요.</p>
<ul>
<li>로컬에서 사용하고 CI에서 Chromatic을 사용하세요.</li>
<li>시각 및 상호작용 테스트에는 Chromatic을 사용하고 테스트 실행기를 사용하여 다른 사용자 정의 테스트를 실행하세요.</li>
</ul>
<h2 id="고급-구성" tabindex="-1"><a class="header-anchor" href="#고급-구성" aria-hidden="true">#</a> 고급 구성</h2>
<h3 id="테스트-후크-api" tabindex="-1"><a class="header-anchor" href="#테스트-후크-api" aria-hidden="true">#</a> 테스트 후크 API</h3>
<p>테스트 러너는 이야기를 렌더링하고 play 함수가 있는 경우 실행합니다. 그러나 브라우저에서 실행되는 play 함수를 통해 달성할 수 없는 특정 동작이 있습니다. 예를 들어, 테스트 러너가 시각적 스냅샷을 찍도록 원한다면 Playwright/Jest를 통해 가능하지만 Node에서 실행해야 합니다.</p>
<p>테스트 러너는 전역적으로 오버라이드할 수 있는 테스트 훅을 내보내어 시각적 또는 DOM 스냅샷과 같은 사용 사례를 활성화할 수 있습니다. 이러한 훅을 사용하면 이야기가 렌더링되기 전에 테스트 라이프사이클에 액세스할 수 있습니다. 이에 대한 사용 방법과 사용 가능한 훅의 개요는 아래에 나와 있습니다.</p>
<p>훅 API를 활성화하려면 Storybook 디렉토리 내에 새 구성 파일을 추가하고 다음과 같이 설정해야 합니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> TestRunnerConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/test-runner'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> TestRunnerConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 테스트 러너가 테스트를 실행하기 전에 실행되는 훅</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 여기에 구성을 추가하세요.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">/* 이야기가 브라우저에 렌더링되기 전에 방문되는 초기 훅.
   * page는 이야기의 Playwright 페이지 객체입니다.
   * context는 이야기의 id, 제목, 이름을 포함하는 Storybook 객체입니다.
   */</span>
  <span class="token keyword">async</span> <span class="token function">preVisit</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 여기에 구성을 추가하세요.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">/* 이야기가 방문되고 완전히 렌더링된 후에 실행되는 훅.
   * page는 이야기의 Playwright 페이지 객체입니다.
   * context는 이야기의 id, 제목, 이름을 포함하는 Storybook 객체입니다.
   */</span>
  <span class="token keyword">async</span> <span class="token function">postVisit</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 여기에 구성을 추가하세요.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>테스트 러너가 실행되면 기존 테스트가 다음 수명주기를 거칩니다:</p>
<ul>
<li>모든 테스트 실행 전에 설정 함수가 실행됩니다.</li>
<li>필요한 정보를 포함하는 컨텍스트 객체가 생성됩니다.</li>
<li>Playwright가 스토리 페이지로 이동합니다.</li>
<li>preVisit 함수가 실행됩니다.</li>
<li>스토리가 렌더링되고 기존 플레이 함수가 실행됩니다.</li>
<li>postVisit 함수가 실행됩니다.</li>
</ul>
<h3 id="실험-중-테스트-필터링" tabindex="-1"><a class="header-anchor" href="#실험-중-테스트-필터링" aria-hidden="true">#</a> (실험 중) 테스트 필터링</h3>
<p>Storybook에서 테스트 러너를 실행하면 기본적으로 모든 스토리를 테스트합니다. 그러나 테스트를 필터링하려면 태그 구성 옵션을 사용할 수 있습니다. Storybook은 원래 스토리에 대한 자동 문서화를 생성하기 위해 이 기능을 도입했습니다. 그러나 최신 안정 버전(0.15 이상)에서만 사용할 수 있는 태그 구성 옵션 또는 CLI 플래그(예: --includeTags, --excludeTags, --skipTags)을 사용하여 제공된 태그에 따라 테스트 러너를 구성할 수도 있습니다. 사용 가능한 옵션과 이를 사용하는 방법에 대한 개요가 아래에 설명되어 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> TestRunnerConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/test-runner'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> TestRunnerConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  tags<span class="token operator">:</span> <span class="token punctuation">{</span>
    include<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'test-only'</span><span class="token punctuation">,</span> <span class="token string">'pages'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    exclude<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'no-tests'</span><span class="token punctuation">,</span> <span class="token string">'tokens'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    skip<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'skip-test'</span><span class="token punctuation">,</span> <span class="token string">'layout'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="테스트-비활성화" tabindex="-1"><a class="header-anchor" href="#테스트-비활성화" aria-hidden="true">#</a> 테스트 비활성화</h4>
<p>만약에 특정 이야기들이 테스트 러너에 의해 테스트되지 않도록 하고 싶다면, 이야기를 사용자 정의 태그와 함께 구성하거나 테스트 러너 구성 파일에 활성화하거나 --excludeTags CLI 플래그를 사용하여 제거하여 해당 이야기들을 테스트에서 제외시킬 수 있습니다. 이것은 아직 테스트 준비가 되지 않은 이야기들이나 테스트에 무관한 이야기를 제외하고 싶을 때 유용합니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 여러분의 프레임워크 이름으로 대체하세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./MyComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
  tags<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'no-tests'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 👈 이 파일의 모든 이야기에 `no-tests` 태그를 제공합니다</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> ExcludeStory<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//👇 이 이야기에 `no-tests` 태그를 추가하여 테스트 러너 구성에서 활성화시킬 때 테스트에서 제외됩니다</span>
  tags<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'no-tests'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="일부-이야기에-대한-테스트-실행하기" tabindex="-1"><a class="header-anchor" href="#일부-이야기에-대한-테스트-실행하기" aria-hidden="true">#</a> 일부 이야기에 대한 테스트 실행하기</h4>
<p>테스트 실행기가 특정 이야기나 일부 이야기에 대해서만 테스트를 실행할 수 있도록 하려면, 해당 이야기에 사용자 정의 태그를 구성하거나 테스트 실행기 구성 파일에서 활성화하거나 --includeTags CLI 플래그를 사용하여 테스트에 포함시킬 수 있습니다. 예를 들어, 'test-only' 태그를 기반으로 테스트를 실행하려면 다음과 같이 구성을 조정할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 'your-framework'을 사용 중인 프레임워크 이름으로 교체하세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./MyComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
  tags<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'test-only'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 👈 이 파일의 모든 이야기에 'test-only' 태그를 제공합니다</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> IncludeStory<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//👇 이 이야기에 'test-only' 태그를 추가하여 테스트 실행기 구성에서 활성화된 경우 테스트에 포함됩니다</span>
  tags<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'test-only'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="테스트-건너뛰기" tabindex="-1"><a class="header-anchor" href="#테스트-건너뛰기" aria-hidden="true">#</a> 테스트 건너뛰기</h4>
<p>만약에 어떤 스토리나 스토리 집합에서 테스트를 건너뛰고 싶다면, 해당 스토리에 사용자 정의 태그를 설정하거나 테스트 러너 구성 파일에서 활성화하거나, --skipTags CLI 플래그를 사용하여 테스트 러너를 실행할 수 있습니다. 이 옵션으로 테스트를 실행하면, 테스트 러너가 그것들을 무시하고 테스트 결과에서 적절히 플래그 표시하여 해당 테스트가 일시적으로 비활성화되었음을 나타냅니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 여러분의 프레임워크 이름으로 변경</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./MyComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
  tags<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'skip-test'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 👈 이 파일의 모든 스토리에 'skip-test' 태그 제공</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> SkipStory<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//👇 이 스토리에 'skip-test' 태그를 추가하여 테스트 러너 구성에서 활성화된 경우 테스트를 건너뛸 수 있게 함</span>
  tags<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'skip-test'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="배포된-storybook의-인증" tabindex="-1"><a class="header-anchor" href="#배포된-storybook의-인증" aria-hidden="true">#</a> 배포된 Storybook의 인증</h3>
<p>Storybook을 호스팅하기 위해 인증이 필요한 안전한 호스팅 제공 업체를 사용하는 경우, HTTP 헤더를 설정해야 할 수 있습니다. 이는 테스트 러너가 인스턴스의 상태와 이야기 인덱스를 fetch 요청과 Playwright를 통해 확인하는 방식 때문입니다. 이 작업을 위해 테스트 러너 구성 파일을 수정하여 getHttpHeaders 함수를 포함시킬 수 있습니다. 이 함수는 fetch 호출과 페이지 방문의 URL을 입력으로 받아 설정해야 하는 헤더를 포함한 객체를 반환합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> TestRunnerConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/test-runner'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> TestRunnerConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">getHttpHeaders</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> token <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'prod'</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">'prod-token'</span> <span class="token operator">:</span> <span class="token string">'dev-token'</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      Authorization<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="도우미" tabindex="-1"><a class="header-anchor" href="#도우미" aria-hidden="true">#</a> 도우미</h3>
<p>테스트 러너는 몇 가지 도우미를 내보내며 이를 사용하여 테스트를 더 가독성 있고 유지보수 가능하게 만들 수 있습니다. Storybook의 내부(예: args, parameters)에 액세스하여 아래 나열된 사용 가능한 도우미 및 사용 방법에 대한 개요를 제공합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> TestRunnerConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/test-runner'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getStoryContext<span class="token punctuation">,</span> waitForPageReady <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/test-runner'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> TestRunnerConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 테스트 러너가 테스트를 실행하기 전에 실행되는 후크</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 여기에 구성을 추가하세요.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">/* 스토리가 처음 방문되기 전에 렌더링되기 전에 실행되는 후크
   * page 인수는 스토리의 Playwright 페이지 객체입니다.
   * context 인수는 스토리의 ID, 제목 및 이름을 포함하는 Storybook 객체입니다.
   */</span>
  <span class="token keyword">async</span> <span class="token function">preVisit</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 여기에 구성을 추가하세요.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">/* 스토리가 방문되고 완전히 렌더링된 후에 실행되는 후크
   * page 인수는 스토리의 Playwright 페이지 객체입니다.
   * context 인수는 스토리의 ID, 제목 및 이름을 포함하는 Storybook 객체입니다.
   */</span>
  <span class="token keyword">async</span> <span class="token function">postVisit</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 매개변수, args, argTypes 등을 포함한 스토리의 전체 컨텍스트 가져오기</span>
    <span class="token keyword">const</span> storyContext <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getStoryContext</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 이 유틸리티 함수는 이미지 스냅샷 테스트를 위해 설계되었습니다. 페이지가 모든 async 항목(예: 이미지, 폰트 등)을 포함하여 완전히로드 될 때까지 기다립니다.</span>
    <span class="token keyword">await</span> <span class="token function">waitForPageReady</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 여기에 구성을 추가하세요.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="테스트-러너로-이야기-정보에-액세스하기" tabindex="-1"><a class="header-anchor" href="#테스트-러너로-이야기-정보에-액세스하기" aria-hidden="true">#</a> 테스트 러너로 이야기 정보에 액세스하기</h4>
<p>이야기에 관한 정보, 예를 들어 매개변수 등을 얻어야 하는 경우, 테스트 러너에는 getStoryContext라는 도우미 함수가 포함되어 있습니다. 이를 사용하여 해당 정보를 검색할 수 있습니다. 그런 다음 필요에 따라 테스트를 자세히 사용자 정의할 수 있습니다. 예를 들어, 이야기의 매개변수에서 정의된 뷰포트 크기를 사용하여 Playwright의 페이지 뷰포트 크기를 구성해야 하는 경우 다음과 같이 할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> TestRunnerConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/test-runner'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getStoryContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/test-runner'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token constant">MINIMAL_VIEWPORTS</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">'@storybook/addon-viewport'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">DEFAULT_VIEWPORT_SIZE</span> <span class="token operator">=</span> <span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">1280</span><span class="token punctuation">,</span> height<span class="token operator">:</span> <span class="token number">720</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> TestRunnerConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">preVisit</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> story<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 이야기의 매개변수에 액세스하여 그것을 렌더링하는 데 사용된 뷰포트를 검색합니다</span>
    <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getStoryContext</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> story<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> viewportName <span class="token operator">=</span> context<span class="token punctuation">.</span>parameters<span class="token operator">?.</span>viewport<span class="token operator">?.</span>defaultViewport<span class="token punctuation">;</span>
    <span class="token keyword">const</span> viewportParameter <span class="token operator">=</span> <span class="token constant">MINIMAL_VIEWPORTS</span><span class="token punctuation">[</span>viewportName<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>viewportParameter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> viewportSize <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>viewportParameter<span class="token punctuation">.</span>styles<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span>acc<span class="token punctuation">,</span> <span class="token punctuation">[</span>screen<span class="token punctuation">,</span> size<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token operator">...</span>acc<span class="token punctuation">,</span>
          <span class="token comment">// 뷰포트 크기를 퍼센트에서 숫자로 변환합니다</span>
          <span class="token punctuation">[</span>screen<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// Playwright 페이지를 뷰포트 크기에 맞게 구성합니다</span>
      page<span class="token punctuation">.</span><span class="token function">setViewportSize</span><span class="token punctuation">(</span>viewportSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      page<span class="token punctuation">.</span><span class="token function">setViewportSize</span><span class="token punctuation">(</span><span class="token constant">DEFAULT_VIEWPORT_SIZE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="에셋-사용하기" tabindex="-1"><a class="header-anchor" href="#에셋-사용하기" aria-hidden="true">#</a> 에셋 사용하기</h4>
<p>만약 특정 세트의 테스트(예: 이미지 스냅샷 테스트)를 실행 중이라면, 테스트 러너에서는 페이지가 완전히 로드되고 준비가 되었는지를 확인하기 위해 사용할 수 있는 waitForPageReady라는 도우미 함수를 제공합니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> TestRunnerConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/test-runner'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> waitForPageReady <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/test-runner'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> toMatchImageSnapshot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'jest-image-snapshot'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> customSnapshotsDir <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/__snapshots__</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> TestRunnerConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    expect<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span> toMatchImageSnapshot <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token function">postVisit</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 페이지가 로드되고 사용 가능해질 때까지(예: 글꼴 등) 대기합니다</span>
    <span class="token keyword">await</span> <span class="token function">waitForPageReady</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 스토리 식별자를 기반으로 스냅샷 파일을 생성합니다</span>
    <span class="token keyword">const</span> image <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">screenshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toMatchImageSnapshot</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      customSnapshotsDir<span class="token punctuation">,</span>
      customSnapshotIdentifier<span class="token operator">:</span> context<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="index-json-모드" tabindex="-1"><a class="header-anchor" href="#index-json-모드" aria-hidden="true">#</a> Index.json 모드</h3>
<p>로컬 Storybook을 테스트할 때, 테스트 러너는 각각의 스토리 파일을 테스트로 변환합니다. 원격 Storybook의 경우, Storybook은 테스트를 실행하기 위해 스토리북의 index.json(이전에는 stories.json) 파일(모든 스토리의 정적 색인)을 사용합니다.</p>
<h4 id="왜" tabindex="-1"><a class="header-anchor" href="#왜" aria-hidden="true">#</a> 왜?</h4>
<p>혹시 로컬과 원격 Storybook이 동기화되지 않은 상황에 직면하거나 코드에 액세스할 수 없는 경우가 있을 수 있습니다. 이때 index.json 파일은 테스트 중인 배포된 Storybook의 가장 정확한 표현임이 보장됩니다. 이 기능을 사용하여 로컬 Storybook을 테스트하려면 다음과 같이 --index-json 플래그를 사용하십시오:</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npm run test-storybook -- --index-json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>비활성화해야 하는 경우 --no-index-json 플래그를 사용하십시오:</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npm run test-storybook -- --no-index-json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="storybook에-index-json-파일이-있는지-확인하는-방법은-무엇인가요" tabindex="-1"><a class="header-anchor" href="#storybook에-index-json-파일이-있는지-확인하는-방법은-무엇인가요" aria-hidden="true">#</a> Storybook에 index.json 파일이 있는지 확인하는 방법은 무엇인가요?</h4>
<p>Index.json 모드를 사용하려면 index.json 파일이 필요합니다. 브라우저 창을 열고 배포된 Storybook 인스턴스로 이동합니다 (예: https://your-storybook-url-here.com/index.json). &quot;v&quot;: 3 키로 시작하는 JSON 파일이 표시되어야 하며, 즉시 &quot;stories&quot;라는 다른 키가 나와야합니다. 해당 경우라면, Storybook이 index.json 모드를 지원합니다.</p>
<h2 id="문제-해결법" tabindex="-1"><a class="header-anchor" href="#문제-해결법" aria-hidden="true">#</a> 문제 해결법</h2>
<h3 id="테스트-실행기가-불안정하며-시간-초과가-계속-발생하는-것-같아요" tabindex="-1"><a class="header-anchor" href="#테스트-실행기가-불안정하며-시간-초과가-계속-발생하는-것-같아요" aria-hidden="true">#</a> 테스트 실행기가 불안정하며 시간 초과가 계속 발생하는 것 같아요</h3>
<p>만약 다음과 같은 메시지로 테스트가 시간 초과되면:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Timeout <span class="token operator">-</span> Async callback was not invoked within the <span class="token number">15000</span> ms timeout specified by jest<span class="token punctuation">.</span>setTimeout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Playwright가 당신의 프로젝트에 있는 스토리 수를 처리하지 못하는 경우일 수도 있습니다. 아마도 많은 수의 스토리가 있거나 CI 환경이 매우 낮은 RAM 구성을 갖고 있을 수도 있습니다. 이러한 경우에는 다음과 같이 명령어를 조정하여 병렬로 실행되는 워커 수를 제한해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"test-storybook:ci"</span><span class="token operator">:</span> <span class="token string">"yarn test-storybook --maxWorkers=2"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cli에-표시된-오류-메시지가-너무-짧아요" tabindex="-1"><a class="header-anchor" href="#cli에-표시된-오류-메시지가-너무-짧아요" aria-hidden="true">#</a> CLI에 표시된 오류 메시지가 너무 짧아요</h3>
<p>기본적으로 테스트 러너는 오류 메시지를 1000자로 자릅니다. 전체 출력은 브라우저의 Storybook에서 직접 확인할 수 있어요. 하지만 이 한계를 변경하고 싶다면 DEBUG_PRINT_LIMIT 환경 변수를 설정하여 변경할 수 있어요. 예를 들어, DEBUG_PRINT_LIMIT=5000 yarn test-storybook를 실행하면 오류 메시지 길이 제한을 변경할 수 있어요.</p>
<h3 id="다른-ci-환경에서-테스트-러너-실행하기" tabindex="-1"><a class="header-anchor" href="#다른-ci-환경에서-테스트-러너-실행하기" aria-hidden="true">#</a> 다른 CI 환경에서 테스트 러너 실행하기</h3>
<p>Playwright를 기반으로 한 테스트 러너를 사용하기 때문에 CI 설정에 따라 특정한 도커 이미지나 다른 구성을 사용해야 할 수 있습니다. 그런 경우에는 더 많은 정보를 얻기 위해 Playwright CI 문서를 참조할 수 있습니다.</p>
<h3 id="태그로-필터링된-테스트가-잘못-실행됨" tabindex="-1"><a class="header-anchor" href="#태그로-필터링된-테스트가-잘못-실행됨" aria-hidden="true">#</a> 태그로 필터링된 테스트가 잘못 실행됨</h3>
<p>태그로 테스트를 필터링하는 기능을 활성화하고 포함 및 제외 목록에 유사한 태그를 제공한 경우, 테스트 러너는 제외 목록을 기준으로 테스트를 실행하고 포함 목록은 무시합니다. 이를 방지하려면 포함 및 제외 목록에 제공된 태그가 서로 다른지 확인하세요.</p>
<h3 id="테스트-러너에서-yarn-pnp를-기본적으로-지원하지-않음" tabindex="-1"><a class="header-anchor" href="#테스트-러너에서-yarn-pnp를-기본적으로-지원하지-않음" aria-hidden="true">#</a> 테스트 러너에서 Yarn PnP를 기본적으로 지원하지 않음</h3>
<p>프로젝트에서 Plug<code v-pre>n</code>Play(PnP)를 활성화한 Yarn의 최신 버전에서 테스트 러너를 실행했다면, 테스트 러너가 예상대로 작동하지 않고 테스트를 실행할 때 다음 오류가 발생할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">PlaywrightError</span><span class="token operator">:</span> jest<span class="token operator">-</span>playwright<span class="token operator">-</span>preset<span class="token operator">:</span> Cannot find playwright <span class="token keyword">package</span> to use chromium
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 문제는 커뮤니티에서 유지보수하는 jest-playwright-preset 패키지를 사용하는 테스트 러너가 이 기능을 지원해야 하는데 아직 이를 지원하지 못하기 때문입니다. 이 문제를 해결하기 위해 nodeLinker 설정을 node-modules로 전환하거나 프로젝트에 Playwright를 직접 종속성으로 설치한 후 install 명령어를 통해 브라우저 이진 파일을 추가할 수 있습니다.</p>
<p>다른 UI 테스트에 대해 알아보기</p>
<ul>
<li>테스트 실행을 자동화하는 테스트 실행기</li>
<li>외관을 위한 시각적 테스트</li>
<li>접근성을 위한 접근성 테스트</li>
<li>사용자 행동 시뮬레이션을 위한 상호 작용 테스트</li>
<li>코드 커버리지 측정을 위한 커버리지 테스트</li>
<li>렌더링 오류 및 경고를 위한 스냅샷 테스트</li>
<li>실제 사용자 시나리오를 시뮬레이션하기 위한 end-to-end 테스트</li>
<li>기능을 위한 단위 테스트</li>
</ul>
</div></template>
