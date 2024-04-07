<template><div><p>Storybook은 완전히 익명의 데이터를 수집하여 사용자 경험을 개선하는 데 도움을 줍니다. 이 익명 프로그램에 참여하는 것은 선택 사항이며, 어떤 정보도 공유하고 싶지 않다면 선택 사항에서 제외할 수 있습니다.</p>
<h2 id="왜-telemetry가-수집되나요" tabindex="-1"><a class="header-anchor" href="#왜-telemetry가-수집되나요" aria-hidden="true">#</a> 왜 Telemetry가 수집되나요?</h2>
<p>수십만 명의 개발자들이 일상적으로 Storybook을 사용하여 컴포넌트를 빌드, 테스트 및 문서화합니다. Storybook은 프레임워크에 중립적이며 다음과 같은 프런트엔드 생태계와 통합됩니다:</p>
<ul>
<li>JavaScript 프레임워크: React, Vue 3, Svelte 및 Solid</li>
<li>라이브러리: Styled-Components, Tailwind, Redux</li>
<li>디자인 도구: Figma, Sketch, Zeplin 및 InVision</li>
<li>Workflow 도구: Notion, Confluence 및 Jira</li>
</ul>
<p>과거에는 개선 프로세스가 수동적인 피드백 수집에 의존했습니다. 그러나 점점 더 많은 사용자들과 다양한 통합을 지원해야 하는 상황에서, Storybook 사용량 및 문제점을 정확히 측정하기 위한 방법이 필요합니다.</p>
<p>이 텔레메트리 데이터는 우리(유지보수자들)가 가장 큰 영향력을 가진 프로젝트를 우선 순위로 지정할 수 있게 도와줍니다. 이를 통해, 프론트엔드 생태계의 트렌드를 따라가고, 우리 커뮤니티의 노력이 의도한 결과를 달성하는지 확인할 수 있습니다.</p>
<h2 id="어떤-정보가-수집되고-있나요" tabindex="-1"><a class="header-anchor" href="#어떤-정보가-수집되고-있나요" aria-hidden="true">#</a> 어떤 정보가 수집되고 있나요?</h2>
<p>우리는 명령어 호출, Storybook 버전, 애드온, 그리고 뷰 레이어를 포함한 일반적인 사용 정보를 수집합니다.</p>
<p>우리는 특히 텔레미트리 이벤트에서 다음 정보를 추적합니다:</p>
<ul>
<li>발생 시각.</li>
<li>실행된 명령 (예: init, upgrade, dev, build).</li>
<li>Storybook 고유 식별자: Storybook 설치 과정 중에 생성된 단방향 해시.</li>
<li>이벤트 발생 지점의 IP 주소의 단방향 해시 (스팸 탐지용).</li>
<li>스토리 수.</li>
<li>Storybook 버전.</li>
<li>Storybook 메타데이터:
언어 (예: TypeScript, JavaScript).
지원되는 뷰 레이어 (예: React, Vue 3, Angular, Svelte).
빌더 (예: Webpack5, Vite).
메타 프레임워크 (예: Next, Gatsby, CRA).
애드온 (예: Essentials, Accessibility).</li>
<li>언어 (예: TypeScript, JavaScript).</li>
<li>지원되는 뷰 레이어 (예: React, Vue 3, Angular, Svelte).</li>
<li>빌더 (예: Webpack5, Vite).</li>
<li>메타 프레임워크 (예: Next, Gatsby, CRA).</li>
<li>애드온 (예: Essentials, Accessibility).</li>
<li>패키지 매니저 정보 (예: npm, yarn).</li>
<li>Monorepo 정보 (예: NX, Turborepo).</li>
<li>앱 내 이벤트 (예: Storybook 가이드 투어).</li>
</ul>
<p>원시 데이터 접근은 매우 제한되어 있으며, 텔레미트리를 유지하는 Storybook 핵심 팀의 일부 멤버에게만 허용됩니다. 데이터 세트에서 개별 사용자를 식별할 수 없습니다. 데이터는 익명화되어 사용자에게 역추적될 수 없습니다.</p>
<h2 id="민감한-정보는-어떤가요" tabindex="-1"><a class="header-anchor" href="#민감한-정보는-어떤가요" aria-hidden="true">#</a> 민감한 정보는 어떤가요?</h2>
<p>우리는 당신의 개인 정보와 보안을 매우 중요하게 생각합니다. 우리는 추가 조치를 취하여 안전한 데이터(예: 환경 변수 또는 다른 형태의 민감한 데이터)가 분석에 유출되지 않도록 합니다. STORYBOOK_TELEMETRY_DEBUG를 1로 설정하여 수집한 정보를 출력하면 수집된 정보를 확인할 수 있습니다. 예를 들어:</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>STORYBOOK_TELEMETRY_DEBUG=1 npm run storybook
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>다음 출력이 생성됩니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"anonymousId"</span><span class="token operator">:</span> <span class="token string">"8bcfdfd5f9616a1923dd92adf89714331b2d18693c722e05152a47f8093392bb"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"eventType"</span><span class="token operator">:</span> <span class="token string">"dev"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"payload"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"versionStatus"</span><span class="token operator">:</span> <span class="token string">"cached"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"storyIndex"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"storyCount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string-property property">"componentCount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string-property property">"pageStoryCount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string-property property">"playStoryCount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string-property property">"autodocsCount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string-property property">"storiesMdxCount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string-property property">"mdxCount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string-property property">"exampleStoryCount"</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
      <span class="token string-property property">"exampleDocsCount"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token string-property property">"onboardingStoryCount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string-property property">"onboardingDocsCount"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string-property property">"version"</span><span class="token operator">:</span> <span class="token number">4</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"metadata"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"generatedAt"</span><span class="token operator">:</span> <span class="token number">1689007841223</span><span class="token punctuation">,</span>
    <span class="token string-property property">"hasCustomBabel"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
    <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook의 안내 투어가 활성화되어 있는 경우, 다음과 같은 출력이 생성됩니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"eventType"</span><span class="token operator">:</span> <span class="token string">"addon-onboarding"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"payload"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"step"</span><span class="token operator">:</span> <span class="token string">"1:Welcome"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"addonVersion"</span><span class="token operator">:</span> <span class="token string">"1.0.6"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"metadata"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 위에서 수집된 메타데이터 참조.</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="이-데이터는-공유되나요" tabindex="-1"><a class="header-anchor" href="#이-데이터는-공유되나요" aria-hidden="true">#</a> 이 데이터는 공유되나요?</h2>
<p>수집하는 데이터는 익명이며 원천을 추적할 수 없으며, 집계 형태로만 의미가 있습니다. 수집하는 데이터는 개인 식별이 불가능합니다. 앞으로 커뮤니티와 관련 데이터를 공개 대시보드(또는 유사한 데이터 표현 형식)를 통해 공유할 계획입니다.</p>
<h2 id="거부하는-방법" tabindex="-1"><a class="header-anchor" href="#거부하는-방법" aria-hidden="true">#</a> 거부하는 방법</h2>
<p>Storybook의 구성 요소인 disableTelemetry를 true로 설정하거나 --disable-telemetry 플래그를 사용하거나 STORYBOOK_DISABLE_TELEMETRY 환경 변수를 1로 설정하여 텔레메트리를 거부할 수 있습니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// 사용 중인 프레임워크로 교체하세요 (예: react-webpack5, vue3-vite)</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  core<span class="token operator">:</span> <span class="token punctuation">{</span>
    disableTelemetry<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 👈 텔레메트리 비활성화</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="크래시-보고서-기본적으로-비활성화됨" tabindex="-1"><a class="header-anchor" href="#크래시-보고서-기본적으로-비활성화됨" aria-hidden="true">#</a> 크래시 보고서 (기본적으로 비활성화됨)</h2>
<p>일반 사용 텔레메트리 외에도, 충돌 보고서를 공유할 수도 있습니다. Storybook에서는 오류 객체를 살펴본 후(모든 사용자 경로를 제거), 해당 정보를 텔레메트리 이벤트에 추가합니다. 충돌 보고를 활성화하려면 --enable-crash-reports 플래그를 사용하여 enableCrashReports 구성 요소를 true로 설정하거나, STORYBOOK_ENABLE_CRASH_REPORTS 환경 변수를 1로 설정하면 됩니다. 예를 들면:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// 사용 중인 프레임워크를 기입합니다(예: react-webpack5, vue3-vite)</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  core<span class="token operator">:</span> <span class="token punctuation">{</span>
    enableCrashReports<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 👈 충돌 보고서를 텔레메트리 이벤트에 추가합니다</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>텔레메트리 이벤트에 다음과 같은 항목이 생성됩니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token punctuation">{</span>
  stack<span class="token operator">:</span> <span class="token string">'Error: Your button is not working\n'</span> <span class="token operator">+</span>
    <span class="token string">'    at Object.&lt;anonymous> ($SNIP/test.js:39:27)\n'</span> <span class="token operator">+</span>
    <span class="token string">'    at Module._compile (node:internal/modules/cjs/loader:1103:14)\n'</span> <span class="token operator">+</span>
    <span class="token string">'    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)\n'</span> <span class="token operator">+</span>
    <span class="token string">'    at Module.load (node:internal/modules/cjs/loader:981:32)\n'</span> <span class="token operator">+</span>
    <span class="token string">'    at Function.Module._load (node:internal/modules/cjs/loader:822:12)\n'</span> <span class="token operator">+</span>
    <span class="token string">'    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)\n'</span> <span class="token operator">+</span>
    <span class="token string">'    at node:internal/main/run_main_module:17:47'</span><span class="token punctuation">,</span>
  message<span class="token operator">:</span> <span class="token string">'Your button is not working'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
