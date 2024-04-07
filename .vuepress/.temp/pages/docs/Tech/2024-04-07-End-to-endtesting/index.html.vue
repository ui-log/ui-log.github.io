<template><div><p>Storybook은 Cypress 및 Playwright와 같은 추가 테스트 프레임워크와 신속하게 통합되어 종합적인 테스트 솔루션을 제공합니다. Component Story Format (CSF)을 활용하여 개발자는 Storybook 환경 내에서 개별 구성 요소의 동작을 검증하는 사용자 상호작용을 시뮬레이션하는 테스트 케이스를 작성할 수 있습니다. 이 접근 방식을 통해 개발자는 서로 다른 시나리오에서 구성 요소의 기능, 반응성 및 시각적 모습을 철저히 테스트하여 더 견고하고 신뢰할 수 있는 애플리케이션을 만들 수 있습니다.</p>
<h3 id="cypress와-함께" tabindex="-1"><a class="header-anchor" href="#cypress와-함께" aria-hidden="true">#</a> Cypress와 함께</h3>
<p>Cypress는 엔드 투 엔드 테스트 프레임워크입니다. 사용자 동작을 시뮬레이션하여 애플리케이션의 완전한 인스턴스를 테스트할 수 있습니다. Component Story Format을 활용하면 Cypress에서 스토리를 재사용할 수 있습니다. 각 명명된 내보내기(다시 말해, 스토리)는 테스트 설정 내에서 렌더링될 수 있습니다.</p>
<p>Cypress와 Storybook을 사용한 엔드 투 엔드 테스트의 예시로는 로그인 구성 요소를 올바른 입력값으로 테스트하는 것이 있습니다. 예를 들어, 다음과 같은 스토리가 있다면:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> userEvent<span class="token punctuation">,</span> within<span class="token punctuation">,</span> expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/test'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> LoginForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./LoginForm'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> LoginForm<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> LoginForm<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> LoginForm<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> EmptyForm<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/*
 * 자세한 내용은 https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * 를 참조하여 canvasElement를 사용하여 DOM을 쿼리하는 방법에 대해 알아보세요
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> FilledForm<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">play</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> canvasElement <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token function">within</span><span class="token punctuation">(</span>canvasElement<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 👇 컴포넌트와 상호작용 모방</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>canvas<span class="token punctuation">.</span><span class="token function">getByTestId</span><span class="token punctuation">(</span><span class="token string">'email'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'email@provider.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>canvas<span class="token punctuation">.</span><span class="token function">getByTestId</span><span class="token punctuation">(</span><span class="token string">'password'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'a-random-password'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 자세한 내용은 https://storybook.js.org/docs/essentials/actions#automatically-matching-args 를 참조하여 Actions 패널에서 로깅 설정하는 방법 알아보세요</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>canvas<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">'button'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 👇 DOM 구조 확인</span>
    <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>
      canvas<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span>
        <span class="token string">'모든 것이 완벽합니다. 계정이 준비되었으니 시작할 준비가 되었네요!'</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>싸이프레스를 사용하면 다음과 같은 테스트를 작성할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">/// &lt;reference types="cypress" /></span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">'로그인 양식'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'올바른 로그인 정보를 포함해야 합니다.'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    cy<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token string">'/iframe.html?id=components-login-form--example'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'#login-form'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">within</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      cy<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'**이메일 입력**'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'#email'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">'have.value'</span><span class="token punctuation">,</span> <span class="token string">'email@provider.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      cy<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'**비밀번호 입력**'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'#password'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">'have.value'</span><span class="token punctuation">,</span> <span class="token string">'a-random-password'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>싸이프레스가 테스트를 실행할 때 Storybook의 격리된 iframe을 로드하고 입력 값이 테스트 값과 일치하는지 확인합니다.```</p>
<p><img src="@source/docs/Tech/2024-04-07-End-to-endtesting/img/End-to-endtesting_0.png" alt="이미지"></p>
<h3 id="playwright로" tabindex="-1"><a class="header-anchor" href="#playwright로" aria-hidden="true">#</a> Playwright로</h3>
<p>Playwright는 Microsoft에서 나온 브라우저 자동화 도구이자 엔드 투 엔드 테스팅 프레임워크입니다. 크로스 브라우저 자동화, 장치 에뮬레이션을 통한 모바일 테스팅 및 헤드리스 테스팅을 제공합니다. Component Story Format을 이용하면 Playwright로 스토리를 재사용할 수 있습니다. 각각의 이름 있는 내보내기(다시 말해, 스토리)는 테스트 설정 내에서 렌더링됩니다.</p>
<p>Playwright를 사용하여 사용자 흐름 테스트를 하는 실제 시나리오는 로그인 양식을 유효성 검사하는 방법입니다. 예를 들어, 이미 다음과 같은 스토리가 만들어져 있다면:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> userEvent<span class="token punctuation">,</span> within<span class="token punctuation">,</span> expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/test'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> LoginForm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./LoginForm'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> LoginForm<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    component<span class="token operator">:</span> LoginForm<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> LoginForm<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> EmptyForm<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/*
 * 자세히 알아보려면 https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas 를 참조하세요.
 * 캔버스 엘리먼트를 사용하여 DOM을 쿼리하는 방법에 대해 자세히 알아보세요.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> FilledForm<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">play</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> canvasElement <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token function">within</span><span class="token punctuation">(</span>canvasElement<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 👇 컴포넌트와 상호작용 시뮬레이션</span>
        <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>canvas<span class="token punctuation">.</span><span class="token function">getByTestId</span><span class="token punctuation">(</span><span class="token string">'email'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'email@provider.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>canvas<span class="token punctuation">.</span><span class="token function">getByTestId</span><span class="token punctuation">(</span><span class="token string">'password'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'a-random-password'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// https://storybook.js.org/docs/essentials/actions#automatically-matching-args 여기를 참조하여 Actions 패널에서 로깅 설정 방법을 확인하세요.</span>
        <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>canvas<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">'button'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 👇 DOM 구조 확인</span>
        <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>
            canvas<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span>
                <span class="token string">'Everything is perfect. Your account is ready and we should probably get you started!'</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Playwright를 사용하면 입력값이 채워지고 스토리와 일치하는지 확인하는 테스트를 작성할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> test<span class="token punctuation">,</span> expect <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">'@playwright/test'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'Login Form inputs'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> page <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">goto</span><span class="token punctuation">(</span><span class="token string">'http://localhost:6006/iframe.html?id=components-login-form--example'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> email <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">inputValue</span><span class="token punctuation">(</span><span class="token string">'#email'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> password <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">inputValue</span><span class="token punctuation">(</span><span class="token string">'#password'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">'email@provider.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">'a-random-password'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Playwright를 실행하면 새 브라우저 창이 열리고 Storybook의 격리된 iframe을로드하여 입력값이 지정된 값들을 포함하는지 확인하고 터미널에서 테스트 결과를 표시합니다.```</p>
<h4 id="다른-ui-테스트에-대해-알아보세요" tabindex="-1"><a class="header-anchor" href="#다른-ui-테스트에-대해-알아보세요" aria-hidden="true">#</a> 다른 UI 테스트에 대해 알아보세요</h4>
<ul>
<li>테스트 실행을 자동화하는 테스트 러너</li>
<li>외관을 위한 시각적 테스트</li>
<li>사용성을 위한 접근성 테스트</li>
<li>사용자 동작 시뮬레이션을 위한 상호 작용 테스트</li>
<li>코드 커버리지를 측정하기 위한 커버리지 테스트</li>
<li>렌더링 오류 및 경고를 위한 스냅샷 테스트</li>
<li>실제 사용자 시나리오를 시뮬레이션하기 위한 엔드-투-엔드 테스트</li>
<li>기능성을 위한 유닛 테스트</li>
</ul>
</div></template>
