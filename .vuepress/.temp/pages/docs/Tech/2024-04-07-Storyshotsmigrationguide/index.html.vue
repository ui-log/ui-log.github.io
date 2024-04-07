<template><div><p>이 안내서를 통해 스냅샷 테스트를 Storyshots 애드온에서 Storybook의 테스트 러너 또는 포터블 스토리로 마이그레이션하는 방법을 배울 수 있습니다. 또한 그들 간의 차이점을 이해하고 Storybook이 제공하는 도구를 사용하여 스냅샷 테스트를 설정, 구성 및 실행할 수 있게 될 것입니다.</p>
<h2 id="storyshots에서의-테스트-마이그레이션" tabindex="-1"><a class="header-anchor" href="#storyshots에서의-테스트-마이그레이션" aria-hidden="true">#</a> Storyshots에서의 테스트 마이그레이션</h2>
<h3 id="준비물" tabindex="-1"><a class="header-anchor" href="#준비물" aria-hidden="true">#</a> 준비물</h3>
<p>마이그레이션 프로세스를 시작하기 전에 다음 사항이 있는지 확인하세요:</p>
<ul>
<li>지원되는 프레임워크 중 하나로 설정된 완전히 기능적인 Storybook이 최신 안정 버전(즉, 7.6 이상)에서 실행 중입니다.</li>
<li>현재 Storybook 및 해당 테스트 설정에 대한 친숙함이 필요합니다.</li>
</ul>
<h3 id="테스트-러너와-함께" tabindex="-1"><a class="header-anchor" href="#테스트-러너와-함께" aria-hidden="true">#</a> 테스트 러너와 함께</h3>
<p>Storybook 테스트 러너는 모든 이야기를 실행 가능한 테스트로 변환합니다. Jest와 Playwright를 기반으로 합니다. 단독 실행이 가능한 프레임워크 중립적 유틸리티로 Storybook과 병렬로 실행됩니다. 이를 통해 play 함수를 사용한 상호 작용 테스트, DOM 스냅샷 및 접근성 테스트를 포함한 여러 테스트 패턴을 멀티 브라우저 환경에서 실행할 수 있습니다.</p>
<h4 id="설정" tabindex="-1"><a class="header-anchor" href="#설정" aria-hidden="true">#</a> 설정</h4>
<p>Storyshots 애드온에서 테스트 러너로의 이주 프로세스를 시작하려면, 프로젝트에서 Storyshots 애드온 및 유사한 패키지(예: storybook/addon-storyshots-puppeteer)를 제거하고 관련된 구성 파일을 모두 삭제하는 것을 권장합니다. 그런 다음, 테스트 러너의 설정 지침에 따라 설치, 구성 및 실행하는 것이 좋습니다.</p>
<h4 id="테스트-커버리지-확대하기" tabindex="-1"><a class="header-anchor" href="#테스트-커버리지-확대하기" aria-hidden="true">#</a> 테스트 커버리지 확대하기</h4>
<p>Storyshots 애드온은 매우 맞춤화된 테스트 솔루션을 제공하여 사용자가 다양한 방법으로 테스트 커버리지를 확장할 수 있도록 했습니다. 그러나 테스트 러너는 다른 API를 사용하면서 유사한 경험을 제공합니다. 아래에서는 Storyshots로 달성한 결과와 유사한 결과를 얻기 위해 테스트 러너를 사용하는 추가 예시를 찾을 수 있습니다.</p>
<h4 id="테스트-러너를-사용하여-dom-스냅샷-테스트-활성화하기" tabindex="-1"><a class="header-anchor" href="#테스트-러너를-사용하여-dom-스냅샷-테스트-활성화하기" aria-hidden="true">#</a> 테스트 러너를 사용하여 DOM 스냅샷 테스트 활성화하기</h4>
<p>DOM 스냅샷 테스트를 테스트 러너로 활성화하려면, 테스트 러너의 구성 파일을 확장하고 사용 가능한 훅을 활용하여 Playwright의 내장 API를 결합하여 프로젝트의 각 스토리에 대한 DOM 스냅샷을 생성할 수 있습니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> TestRunnerConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/test-runner'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> TestRunnerConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">postVisit</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// #storybook-root 요소는 스토리를 랩합니다. Storybook 6.x에서 선택기는 #root입니다.</span>
    <span class="token keyword">const</span> elementHandler <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#storybook-root'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> innerHTML <span class="token operator">=</span> <span class="token keyword">await</span> elementHandler<span class="token punctuation">.</span><span class="token function">innerHTML</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>innerHTML<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toMatchSnapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="테스트-러너로-이미지-스냅샷-테스트-실행" tabindex="-1"><a class="header-anchor" href="#테스트-러너로-이미지-스냅샷-테스트-실행" aria-hidden="true">#</a> 테스트 러너로 이미지 스냅샷 테스트 실행</h4>
<p>기본적으로 테스트 러너는 최소한의 구성으로 여러 테스팅 패턴(예: DOM 스냅샷 테스트, 접근성)을 실행할 수 있는 옵션을 제공합니다. 그러나 원한다면 다른 테스트와 함께 시각적 회귀 테스트를 실행하도록 확장하여 실행할 수도 있습니다. 예를 들어:```</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> TestRunnerConfig<span class="token punctuation">,</span> waitForPageReady <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/test-runner'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> toMatchImageSnapshot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'jest-image-snapshot'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> customSnapshotsDir <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/__snapshots__</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> TestRunnerConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    expect<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span> toMatchImageSnapshot <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token function">postVisit</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 페이지가 준비되기 전에 스크린샷을 찍기 위해 페이지가 준비될 때까지 기다립니다.</span>
    <span class="token keyword">await</span> <span class="token function">waitForPageReady</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 서로 다른 브라우저에 대해 스크린샷을 캡처하려면 파일 이름에 브라우저 이름을 접두어로 추가하려면 page.context().browser().browserType().name()를 추가하십시오</span>
    <span class="token keyword">const</span> image <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">screenshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toMatchImageSnapshot</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      customSnapshotsDir<span class="token punctuation">,</span>
      customSnapshotIdentifier<span class="token operator">:</span> context<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="with-portable-stories" tabindex="-1"><a class="header-anchor" href="#with-portable-stories" aria-hidden="true">#</a> With Portable Stories</h3>
<p>Storybook은 이야기 파일에서 스토리를 렌더링 가능한 요소로 변환하여 Node 테스트에서 JSDOM과 함께 재사용할 수 있는 composeStories 유틸리티를 제공합니다. 또한 프로젝트에서 활성화한 다른 Storybook 기능 (예: 데코레이터, args)을 적용할 수 있어 구성 요소가 올바르게 렌더링되도록 합니다. 이것이 바로 휴대용 스토리(portable stories)라고 알려진 것입니다.</p>
<h4 id="설정-1" tabindex="-1"><a class="header-anchor" href="#설정-1" aria-hidden="true">#</a> 설정</h4>
<p>현재의 스토리샷 테스트를 중지하고 이주 프로세스를 시작하는 것을 권장합니다. 이를 위해 설정 파일을 바꿔주세요 (예: storybook.test.ts|js 또는 유사한 파일)를 storybook.test.ts|js.old로 이름을 변경하십시오. 이렇게 하면 테스트가 감지되지 않을 것이며 동일한 이름으로 새로운 테스트 구성 파일을 만들 수 있을 것입니다. 이를 통해 기존 테스트를 보존하면서 프로젝트에서 Storyshots 애드온을 제거하기 전에 휴대용 스토리로 전환할 수 있게 됩니다.</p>
<h4 id="storybook에서-프로젝트-수준-주석-가져오기" tabindex="-1"><a class="header-anchor" href="#storybook에서-프로젝트-수준-주석-가져오기" aria-hidden="true">#</a> Storybook에서 프로젝트 수준 주석 가져오기</h4>
<p>만약 테스트에 포함된 ./storybook/preview.js|ts에서 프로젝트 수준 주석 (예: 데코레이터, args, 스타일 등)이 필요하다면, 테스트 설정 파일을 조정하여 주석을 다음과 같이 가져올 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 지원되는 프레임워크나 Storybook 테스트 라이브러리 (예: react, testing-vue3)에 따라 import를 조정합니다.</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> setProjectAnnotations <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token comment">// 최신 버전의 Storybook을 사용하는 경우 Storybook 프리뷰 파일의 기본 export로 이 export를 교체합니다.</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> projectAnnotations <span class="token keyword">from</span> <span class="token string">'./.storybook/preview'</span><span class="token punctuation">;</span>

<span class="token comment">// Storybook 프리뷰 파일에서 전역 주석을 적용합니다.</span>
<span class="token function">setProjectAnnotations</span><span class="token punctuation">(</span>projectAnnotations<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="이식-가능한-스토리를-위한-테스트-프레임워크-구성하기" tabindex="-1"><a class="header-anchor" href="#이식-가능한-스토리를-위한-테스트-프레임워크-구성하기" aria-hidden="true">#</a> 이식 가능한 스토리를 위한 테스트 프레임워크 구성하기</h4>
<p>Storyshots 애드온에서 Storybook의 composeStories 도우미 API를 사용한 이식 가능한 스토리로 마이그레이션하는 데 도움을 드리기 위해 시작할 때 도움이 되는 예제를 준비했습니다. 아래에는 두 가지 인기있는 테스트 프레임워크, Jest와 Vitest의 예제가 나와 있습니다. 우리는 코드를 새로 만든 storybook.test.ts|js 파일에 넣고 테스트 프레임워크에 따라 코드를 조정하는 것을 권장합니다. 아래 예제는 모두 다음을 수행할 것입니다:</p>
<ul>
<li>글로브 패턴을 기반으로 모든 스토리 파일을 가져옵니다.</li>
<li>이 파일을 반복하며 각 모듈에 composeStories를 사용하여 각 스토리에서 렌더링 가능한 컴포넌트 목록을 생성합니다.</li>
<li>스토리를 순환하며 렌더링하고 스냅샷을 찍습니다.</li>
</ul>
<h4 id="vitest" tabindex="-1"><a class="header-anchor" href="#vitest" aria-hidden="true">#</a> Vitest</h4>
<p>만약 Vitest를 테스트 프레임워크로 사용하고 있다면, 스냅샷 테스트를 Storybook의 이동 가능한 스토리로 마이그레이션할 수 있는 방법을 composeStories helper API를 사용해 알아볼 수 있어요. 아래 예시를 참고하여 storybook.test.ts|js 파일의 코드를 수정해야 합니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// @vitest-environment jsdom</span>

<span class="token comment">// 지원되는 Storybook 프레임워크 중 하나로 'your-framework'를 대체하세요 (react, vue3)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryFn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> describe<span class="token punctuation">,</span> expect<span class="token punctuation">,</span> test <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vitest'</span><span class="token punctuation">;</span>

<span class="token comment">// 지원되는 테스트 라이브러리 중 하나로 'your-testing-library'를 대체하세요 (예: react, vue)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@testing-library/your-testing-library'</span><span class="token punctuation">;</span>

<span class="token comment">// 사용 가능한 프레임워크 또는 Storybook의 테스트 라이브러리에 따라 import를 조정하세요 (예: react, testing-vue3)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> composeStories <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token comment">// 코드를 살펴보고 유사한 옵션을 Storyshots와 재구성해보세요. 설정을 아래에 넣으세요</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  suite<span class="token operator">:</span> <span class="token string">'Storybook Tests'</span><span class="token punctuation">,</span>
  storyKindRegex<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^.*?DontTest$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  storyNameRegex<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">UNSET</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  snapshotsDirName<span class="token operator">:</span> <span class="token string">'__snapshots__'</span><span class="token punctuation">,</span>
  snapshotExtension<span class="token operator">:</span> <span class="token string">'.storyshot'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>suite<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">getAllStoryFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> storyFile<span class="token punctuation">,</span> componentName<span class="token punctuation">,</span> storyDir <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> meta <span class="token operator">=</span> storyFile<span class="token punctuation">.</span>default<span class="token punctuation">;</span>
    <span class="token keyword">const</span> title <span class="token operator">=</span> meta<span class="token punctuation">.</span>title <span class="token operator">||</span> componentName<span class="token punctuation">;</span>

    <span class="token comment">// 이전 코드와 같이 계속 진행</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>테스트가 Vitest로 실행될 때, 프로젝트 내 모든 스토리를 포함한 단일 스냅샷 파일(i.e., storybook.test.ts|js.snap)이 생성될 거예요. 그러나 개별 스냅샷 파일을 생성하려면 Vitest의 toMatchFileSnapshot API를 사용할 수 있어요. 아래는 예시입니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// ...간략히 하기 위한 코드 생략</span>

<span class="token function">describe</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>suite<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">getAllStoryFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> filePath<span class="token punctuation">,</span> storyFile<span class="token punctuation">,</span> storyDir <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// ...이전에 있던 코드들</span>
    <span class="token function">describe</span><span class="token punctuation">(</span>title<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// ...이전에 있던 코드들</span>
      stories<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token punctuation">,</span> story <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// ...이전에 있던 코드들</span>
        <span class="token function">testFn</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token comment">// ...이전에 있던 코드들</span>

          <span class="token comment">// 스냅샷을 저장할 경로를 정의해요</span>
          <span class="token keyword">const</span> snapshotPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>
            storyDir<span class="token punctuation">,</span>
            options<span class="token punctuation">.</span>snapshotsDirName<span class="token punctuation">,</span>
            <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>componentName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>options<span class="token punctuation">.</span>snapshotExtension<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">expect</span><span class="token punctuation">(</span>mounted<span class="token punctuation">.</span>container<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toMatchFileSnapshot</span><span class="token punctuation">(</span>snapshotPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="jest" tabindex="-1"><a class="header-anchor" href="#jest" aria-hidden="true">#</a> Jest</h4>
<p>만약 Jest를 테스트 프레임워크로 사용하고 있다면, 아래 예시를 참고하여 Storybook의 이동성 있는 코딩 예시로 스냅샷 테스트를 마이그레이션할 수 있습니다. 코드를 수정해야 할 파일은 storybook.test.ts|js 파일입니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">'path'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> glob <span class="token keyword">from</span> <span class="token string">'glob'</span><span class="token punctuation">;</span>

<span class="token comment">// 지원하는 Storybook 프레임워크 중 하나로 'your-framework'을 교체하세요 (react, vue3)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryFn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> describe<span class="token punctuation">,</span> test<span class="token punctuation">,</span> expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@jest/globals'</span><span class="token punctuation">;</span>

<span class="token comment">// 지원하는 테스팅 라이브러리 중 하나로 'your-testing-library'를 교체하세요 (예: react, vue)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@testing-library/your-testing-library'</span><span class="token punctuation">;</span>

<span class="token comment">// 지원하는 프레임워크나 Storybook의 테스팅 라이브러리에 맞게 임포트를 조정하세요 (예: react, testing-vue3)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> composeStories <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">StoryFile</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">default</span><span class="token operator">:</span> Meta<span class="token punctuation">;</span>
  <span class="token punctuation">[</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> StoryFn <span class="token operator">|</span> Meta<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> compose <span class="token operator">=</span> <span class="token punctuation">(</span>entry<span class="token operator">:</span> StoryFile<span class="token punctuation">)</span><span class="token operator">:</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> composeStories<span class="token operator">&lt;</span>StoryFile<span class="token operator">>></span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">composeStories</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">There was an issue composing stories for the module: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>e<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getAllStoryFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 스토리 파일 매칭을 위해 일치해야 하는 glob을 설정하세요</span>
  <span class="token keyword">const</span> storyFiles <span class="token operator">=</span> glob<span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span>
    path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'stories/**/*.{stories,story}.{js,jsx,mjs,ts,tsx}'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> storyFiles<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> storyFile <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> filePath<span class="token punctuation">,</span> storyFile <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Storyshots와 유사한 옵션을 다시 생성하세요. 아래에 구성을 배치하세요</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  suite<span class="token operator">:</span> <span class="token string">'Storybook Tests'</span><span class="token punctuation">,</span>
  storyKindRegex<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^.*?DontTest$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  storyNameRegex<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">UNSET</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  snapshotsDirName<span class="token operator">:</span> <span class="token string">'__snapshots__'</span><span class="token punctuation">,</span>
  snapshotExtension<span class="token operator">:</span> <span class="token string">'.storyshot'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>suite<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">getAllStoryFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> storyFile<span class="token punctuation">,</span> componentName <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> meta <span class="token operator">=</span> storyFile<span class="token punctuation">.</span>default<span class="token punctuation">;</span>
    <span class="token keyword">const</span> title <span class="token operator">=</span> meta<span class="token punctuation">.</span>title <span class="token operator">||</span> componentName<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>storyKindRegex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span> <span class="token operator">||</span> meta<span class="token punctuation">.</span>parameters<span class="token operator">?.</span>storyshots<span class="token operator">?.</span>disable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 비활성화된 경우 컴포넌트 테스트를 건너뜁니다</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">describe</span><span class="token punctuation">(</span>title<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> stories <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token function">compose</span><span class="token punctuation">(</span>storyFile<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span>name<span class="token punctuation">,</span> story<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token punctuation">,</span> story <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token punctuation">,</span> story <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token comment">// 매개변수를 통해 비활성화되거나 특정 정규식과 일치하는 스토리를 실행하지 않도록 필터링 메커니즘을 구현합니다.</span>
          <span class="token keyword">return</span> <span class="token operator">!</span>options<span class="token punctuation">.</span>storyNameRegex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>story<span class="token punctuation">.</span>parameters<span class="token punctuation">.</span>storyshots<span class="token operator">?.</span>disable<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>stories<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
          <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">No stories found for this module: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">. Make sure there is at least one valid story for this module, without a disable parameter, or add parameters.storyshots.disable in the default export of this file.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      stories<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token punctuation">,</span> story <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 테스트를 실행하지 않는 대신, 결과에 해당하는 내용을 표시할 로직을 만들어 플래그를 지정합니다</span>
        <span class="token keyword">const</span> testFn <span class="token operator">=</span> story<span class="token punctuation">.</span>parameters<span class="token punctuation">.</span>storyshots<span class="token operator">?.</span>skip <span class="token operator">?</span> test<span class="token punctuation">.</span>skip <span class="token operator">:</span> test<span class="token punctuation">;</span>

        <span class="token function">testFn</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> mounted <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token function">story</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">// 컴포넌트를 렌더링할 수 있도록 일정한 스냅샷을 보장하기 위해 컴포넌트가 렌더링되기까지 1ms의 지연을 추가합니다</span>
          <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">expect</span><span class="token punctuation">(</span>mounted<span class="token punctuation">.</span>container<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toMatchSnapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Jest로 테스트를 실행하면 프로젝트에 있는 모든 스토리를 하나의 스냅샷 파일 (예: <strong>snapshots</strong>/storybook.test.ts|js.snap)로 생성합니다. 하지만 개별 스냅샷 파일을 생성하려면 jest-specific-snapshot 패키지를 사용할 수 있습니다. 아래 예시를 참고하세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 👇 jest-specific-snapshot을 사용하여 expect을 확장합니다.</span>
<span class="token keyword">import</span> <span class="token string">'jest-specific-snapshot'</span><span class="token punctuation">;</span>

<span class="token comment">// ...코드는 간략하게 생략합니다.</span>

<span class="token function">describe</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>suite<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">//👇 arguments 리스트에 storyDir를 추가합니다.</span>
  <span class="token function">getAllStoryFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> filePath<span class="token punctuation">,</span> storyFile<span class="token punctuation">,</span> storyDir <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// ...이전에 존재했던 코드</span>
    <span class="token function">describe</span><span class="token punctuation">(</span>title<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// ...이전에 존재했던 코드</span>
      stories<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token punctuation">,</span> story <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// ...이전에 존재했던 코드</span>
        <span class="token function">testFn</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token comment">// ...이전에 존재했던 코드</span>

          <span class="token comment">//👇 스냅샷을 저장할 경로를 정의합니다:</span>
          <span class="token keyword">const</span> snapshotPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>
            storyDir<span class="token punctuation">,</span>
            options<span class="token punctuation">.</span>snapshotsDirName<span class="token punctuation">,</span>
            <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>componentName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>options<span class="token punctuation">.</span>snapshotExtension<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">expect</span><span class="token punctuation">(</span>mounted<span class="token punctuation">.</span>container<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toMatchSpecificSnapshot</span><span class="token punctuation">(</span>snapshotPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="알려진-제한-사항" tabindex="-1"><a class="header-anchor" href="#알려진-제한-사항" aria-hidden="true">#</a> 알려진 제한 사항</h4>
<p>테스트에서 이동 가능한 story를 사용하는 경우 JSDOM 환경에서 실행되는 단일 테스트 파일이 있습니다. 모든 story를 렌더링하고 스냅샷을 찍습니다. 그러나 프로젝트가 커지면 이전 Storyshots에서 겪었던 제한 사항을 마주할 수 있습니다:</p>
<ul>
<li>실제 브라우저를 대상으로 테스트하지 않습니다.</li>
<li>많은 브라우저 유틸리티를 모의해야 합니다 (예: 캔버스, 창 API 등).</li>
<li>브라우저에 테스트의 일부로 액세스할 수 없으므로 디버깅 경험이 좋지 않습니다.```</li>
</ul>
<p>다른 사용 가능한 스냅샷 테스트 옵션으로 Storybook에 대한 테스트 러너를 마이그레이션하는 것을 고려해 볼 수도 있습니다: Playwright를 사용하여 실제 브라우저 환경에서 테스트를 실행하며 더 견고한 솔루션을 제공합니다.</p>
<h2 id="문제-해결" tabindex="-1"><a class="header-anchor" href="#문제-해결" aria-hidden="true">#</a> 문제 해결</h2>
<p>Storybook 및 테스트 러너를 사용하여 스냅샷 테스트를 실행하는 것은 설정이나 테스트를 성공적으로 실행되지 못하도록 방해하는 기술적 제약 사항으로 이어질 수 있으므로 발생할 수 있는 문제를 해결할 수 있도록 안내하는 일련의 지침을 준비했습니다.</p>
<h3 id="테스트-러넌이-스냅샷-테스트를-실행할-때-오류를-보고하는-경우" tabindex="-1"><a class="header-anchor" href="#테스트-러넌이-스냅샷-테스트를-실행할-때-오류를-보고하는-경우" aria-hidden="true">#</a> 테스트 러넌이 스냅샷 테스트를 실행할 때 오류를 보고하는 경우</h3>
<p>만약 테스트 러너로 간헐적인 테스트 실패를 겪고 있다면, 테스트가 브라우저에서 실행될 때 발생하는 uncaught 오류가 있을 수 있습니다. 이러한 오류는 이전에 Storyshots 애드온을 사용했었다면 잡히지 않았을 수도 있습니다. 테스트 러너는 기본적으로 이러한 uncaught 오류를 실패한 테스트로 간주합니다. 그러나 이러한 오류가 예상대로 발생한다면, 스토리와 테스트 러너 구성 파일에서 사용자 지정 스토리 태그를 활성화해서 무시할 수 있습니다. 더 자세한 정보는 테스트 러너 문서를 확인해주세요.</p>
<h3 id="테스트-러너가-예상-디렉토리에-스냅샷-파일을-생성하지-않음" tabindex="-1"><a class="header-anchor" href="#테스트-러너가-예상-디렉토리에-스냅샷-파일을-생성하지-않음" aria-hidden="true">#</a> 테스트 러너가 예상 디렉토리에 스냅샷 파일을 생성하지 않음</h3>
<p>테스트 러너를 스냅샷 테스트를 실행하도록 구성했다면, 이전에 Storyshots 애드온이 생성했던 스냅샷 파일의 경로와 이름이 다른 것을 알 수 있습니다. 이는 테스트 러너가 스냅샷 파일에 대해 다른 명명 규칙을 사용하기 때문입니다. 사용자 지정 스냅샷 리졸버를 사용하여 이전에 사용하던 명명 규칙과 동일하게 테스트 러너를 구성할 수 있습니다.</p>
<p>다음 명령을 실행하여 Jest를 구성하는 데 사용할 수 있는 테스트 러너용 사용자 정의 구성 파일을 생성하세요:</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npm run test-storybook -- --eject
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>파일을 업데이트하고 사용자 정의 스냅샷 리졸버를 사용하려면 snapshotResolver 옵션을 활성화하세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getJestConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/test-runner'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> defaultConfig <span class="token operator">=</span> <span class="token function">getJestConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 기본 Jest 구성은 @storybook/test-runner에서 제공됩니다</span>
  <span class="token operator">...</span>defaultConfig<span class="token punctuation">,</span>
  snapshotResolver<span class="token operator">:</span> <span class="token string">'./snapshot-resolver.js'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>마지막으로, 사용자 정의 스냅샷 리졸버를 구현하기 위해 snapshot-resolver.js 파일을 생성하세요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">'path'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">resolveSnapshotPath</span><span class="token operator">:</span> <span class="token punctuation">(</span>testPath<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> fileName <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>testPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> fileNameWithoutExtension <span class="token operator">=</span> fileName<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.[^/.]+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> modifiedFileName <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>fileNameWithoutExtension<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.storyshot</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

    <span class="token comment">// Configure Jest to generate snapshot files using the following naming convention (__snapshots__/Button.storyshot)</span>
    <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>testPath<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'__snapshots__'</span><span class="token punctuation">,</span> modifiedFileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">resolveTestPath</span><span class="token operator">:</span> <span class="token punctuation">(</span>snapshotFilePath<span class="token punctuation">,</span> snapshotExtension<span class="token punctuation">)</span> <span class="token operator">=></span>
    path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>snapshotFilePath<span class="token punctuation">,</span> snapshotExtension<span class="token punctuation">)</span><span class="token punctuation">,</span>
  testPathForConsistencyCheck<span class="token operator">:</span> <span class="token string">'example.storyshot'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="스냅샷-파일의-형식이-스토리샷-애드온에서-생성된-것과-다릅니다" tabindex="-1"><a class="header-anchor" href="#스냅샷-파일의-형식이-스토리샷-애드온에서-생성된-것과-다릅니다" aria-hidden="true">#</a> 스냅샷 파일의 형식이 스토리샷 애드온에서 생성된 것과 다릅니다.</h3>
<p>기본적으로 테스트 러너는 jest-serializer-html을 사용하여 HTML 스냅샷을 직렬화합니다. 이는 특정 CSS-in-JS 라이브러리(Emotion, Angular의 ng 속성 등)를 사용하더라도 기존 스냅샷과 비교했을 때 서식이 다를 수 있습니다. 그러나 각 테스트 실행 시 랜덤한 클래스 이름을 일관된 클래스 이름으로 변경하여 문제를 해결하기 위해 테스트 러너를 사용자 지정 스냅샷 직렬화 프로그램을 구성할 수 있습니다.</p>
<p>다음 명령을 실행하여 테스트 러너용 사용자 지정 구성 파일을 생성하고 추가 구성 옵션을 제공할 수 있습니다.</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npm run test-storybook -- --eject
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>파일을 업데이트하고 custom snapshot resolver를 사용하도록 snapshotSerializers 옵션을 활성화합니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getJestConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/test-runner'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> defaultConfig <span class="token operator">=</span> <span class="token function">getJestConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>defaultConfig<span class="token punctuation">,</span>
  snapshotSerializers<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// HTML을 테스트 러너에 전달하기 전에 전처리하는 커스텀 serializer를 설정합니다</span>
    <span class="token string">'./snapshot-serializer.js'</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>defaultConfig<span class="token punctuation">.</span>snapshotSerializers<span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>마지막으로 custom snapshot serializer를 구현하려면 snapshot-serializer.js 파일을 생성하세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// The jest-serializer-html package은 test runner의 종속성으로 사용할 수 있습니다.</span>
<span class="token keyword">const</span> jestSerializerHtml <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">'jest-serializer-html'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">DYNAMIC_ID_PATTERN</span> <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">"react-aria-\d+(\.\d+)?"</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/*
   * 테스트 실행기는 테스트가 expect(SomeHTMLElement).toMatchSnapshot()에 도달할 때 serialize 함수를 호출합니다.
   * 모든 동적 ID를 정적 ID로 대체하여 스냅샷이 일관성 있게 유지되도록 합니다.
   * 예를 들어 &lt;label id="react-aria970235672-:rl:" for="react-aria970235672-:rk:">Favorite color&lt;/label>에서 &lt;label id="react-mocked_id" for="react-mocked_id">Favorite color&lt;/label>로 변경됩니다.
   */</span>
  <span class="token function">serialize</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> withFixedIds <span class="token operator">=</span> val<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token constant">DYNAMIC_ID_PATTERN</span><span class="token punctuation">,</span> <span class="token string">'mocked_id'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> jestSerializerHtml<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>withFixedIds<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">test</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> jestSerializerHtml<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>테스트 실행기가 테스트를 실행하면 결과 HTML을 검토하여 스냅샷을 만들기 전에 정적 표현식이 제공하는 정적 속성으로 동적으로 생성된 속성을 교체합니다.</p>
</div></template>
