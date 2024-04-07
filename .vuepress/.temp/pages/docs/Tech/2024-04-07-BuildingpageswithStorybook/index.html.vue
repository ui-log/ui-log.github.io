<template><div><p>Storybook을 사용하면 작은 &quot;원자&quot; 구성 요소부터 복합 페이지까지 모든 구성 요소를 만들 수 있어요. 하지만 구성 요소 계층 구조를 위로 올라갈수록 페이지 수준으로 이동하면 더 많은 복잡성을 다뤄야 해요.</p>
<p>Storybook에서 페이지를 만드는 여러 방법이 있어요. 여기에는 일반적인 패턴과 해결책이 있어요.</p>
<ul>
<li>순수 프레젠테이션 페이지</li>
<li>연결된 구성 요소 (예: 네트워크 요청, 컨텍스트, 브라우저 환경)</li>
</ul>
<h2 id="순수-프레젠테이션-페이지" tabindex="-1"><a class="header-anchor" href="#순수-프레젠테이션-페이지" aria-hidden="true">#</a> 순수 프레젠테이션 페이지</h2>
<p>BBC, The Guardian 및 Storybook 유지보수자 팀은 순수한 표현 페이지를 구축합니다. 이 방법을 채택하면 Storybook에서 페이지를 렌더링하기 위해 특별히 할 일이 없습니다.</p>
<p>화면 수준까지 완전히 표현적인 컴포넌트를 작성하는 것은 간단합니다. 그러면 Storybook에서 쉽게 표시할 수 있습니다. 아이디어는 Storybook 외부에서 앱의 단일 래퍼 컴포넌트에 &quot;연결된&quot; 로직을 처리하여 지저분한 작업을 모두 처리한다는 점입니다. Storybook 이용 방법은 Storybook 소개 자습서의 데이터 챕터에서 이 접근 방식의 예시를 확인할 수 있습니다.</p>
<p>이점:</p>
<ul>
<li>한 번 컴포넌트를 이 형식으로 만들면 스토리 작성이 쉬워집니다.</li>
<li>스토리의 모든 데이터는 스토리의 args에 인코딩되어 있어 Storybook의 다른 도구(예: 컨트롤)와 잘 작동합니다.</li>
</ul>
<p>단점:</p>
<ul>
<li>기존 앱이 이 방식으로 구성되어 있지 않을 수 있으며, 변경하기 어려울 수 있습니다.</li>
<li>데이터를 한 곳에서 가져오면 그것을 사용하는 컴포넌트로 자세히 들어가야 합니다. 이것은 하나의 대형 GraphQL 쿼리로 구성된 페이지에서 자연스러울 수 있지만, 다른 데이터 가져오기 접근 방식은 이것이 적합하지 않을 수 있습니다.</li>
<li>화면의 여러 위치에 데이터를 점진적으로 로드하려면 유연하지 않을 수 있습니다.</li>
</ul>
<h3 id="프리젠테이션-화면을-위한-args-구성" tabindex="-1"><a class="header-anchor" href="#프리젠테이션-화면을-위한-args-구성" aria-hidden="true">#</a> 프리젠테이션 화면을 위한 Args 구성</h3>
<p>이 방식으로 화면을 구축할 때, 복합 구성 요소의 입력은 일반적으로 렌더링하는 다양한 하위 컴포넌트의 입력의 조합입니다. 예를 들어, 화면이 현재 사용자의 세부 정보를 포함하는 페이지 레이아웃을 (현재 보고 있는 문서에 대한 설명을 포함하는) 헤더와 (하위 문서의) 목록을 렌더링하면 화면의 입력은 사용자, 문서 및 하위 문서로 구성될 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> PageLayout <span class="token keyword">from</span> <span class="token string">'./PageLayout'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Document <span class="token keyword">from</span> <span class="token string">'./Document'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> SubDocuments <span class="token keyword">from</span> <span class="token string">'./SubDocuments'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> DocumentHeader <span class="token keyword">from</span> <span class="token string">'./DocumentHeader'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> DocumentList <span class="token keyword">from</span> <span class="token string">'./DocumentList'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">DocumentScreenProps</span> <span class="token punctuation">{</span>
  user<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  document<span class="token operator">?</span><span class="token operator">:</span> Document<span class="token punctuation">;</span>
  subdocuments<span class="token operator">?</span><span class="token operator">:</span> SubDocuments<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">DocumentScreen</span><span class="token punctuation">(</span><span class="token punctuation">{</span> user<span class="token punctuation">,</span> document<span class="token punctuation">,</span> subdocuments <span class="token punctuation">}</span><span class="token operator">:</span> DocumentScreenProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>PageLayout user<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>DocumentHeader document<span class="token operator">=</span><span class="token punctuation">{</span>document<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>DocumentList documents<span class="token operator">=</span><span class="token punctuation">{</span>subdocuments<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>PageLayout<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이런 경우에는 서브 컴포넌트들의 스토리를 기반으로 페이지 스토리를 구성하기 위해 args 조합을 자연스럽게 사용하는 것이 좋습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 'your-framework'을 사용하는 프레임워크 이름으로 대체하세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> DocumentScreen <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./YourPage'</span><span class="token punctuation">;</span>

<span class="token comment">// 👇 필요한 스토리를 가져옵니다</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> PageLayout <span class="token keyword">from</span> <span class="token string">'./PageLayout.stories'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> DocumentHeader <span class="token keyword">from</span> <span class="token string">'./DocumentHeader.stories'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> DocumentList <span class="token keyword">from</span> <span class="token string">'./DocumentList.stories'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> DocumentScreen<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> DocumentScreen<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> DocumentScreen<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Simple<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  args<span class="token operator">:</span> <span class="token punctuation">{</span>
    user<span class="token operator">:</span> PageLayout<span class="token punctuation">.</span>Simple<span class="token punctuation">.</span>args<span class="token punctuation">.</span>user<span class="token punctuation">,</span>
    document<span class="token operator">:</span> DocumentHeader<span class="token punctuation">.</span>Simple<span class="token punctuation">.</span>args<span class="token punctuation">.</span>document<span class="token punctuation">,</span>
    subdocuments<span class="token operator">:</span> DocumentList<span class="token punctuation">.</span>Simple<span class="token punctuation">.</span>args<span class="token punctuation">.</span>documents<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다양한 서브컴포넌트가 다양한 스토리를 내보낼 때 이 방식은 유용합니다. 스크린 레벨 스토리를 위해 현실적인 시나리오를 구성하고 중복을 피하며 데이터 재사용과 DRY(반복하지 말 것) 철학을 가지고 최소한의 스토리 유지보수 부담을 느낄 수 있습니다.```</p>
<h2 id="연결된-컴포넌트-모의하기" tabindex="-1"><a class="header-anchor" href="#연결된-컴포넌트-모의하기" aria-hidden="true">#</a> 연결된 컴포넌트 모의하기</h2>
<p>Storybook에서 연결된 컴포넌트를 렌더링해야 할 때 해당 데이터를 가져오기 위한 네트워크 요청을 모의할 수 있습니다. 이를 수행할 수 있는 여러 가지 방법이 있습니다.</p>
<h3 id="프로바이더-모의하기" tabindex="-1"><a class="header-anchor" href="#프로바이더-모의하기" aria-hidden="true">#</a> 프로바이더 모의하기</h3>
<p>만약 컨텍스트를 통해 데이터를 제공하는 프로바이더를 사용 중이라면 해당 프로바이더의 모의 버전을 제공하는 데코레이터로 스토리를 감쌀 수 있습니다. 예를 들어, Storybook 입문 자습서의 Screens 챕터에서는 Redux 프로바이더를 모킹하여 모의 데이터를 사용합니다.</p>
<h3 id="api-시뮬레이션-서비스" tabindex="-1"><a class="header-anchor" href="#api-시뮬레이션-서비스" aria-hidden="true">#</a> API 시뮬레이션 서비스</h3>
<p>트위터, 인스타그램 등과 같이 연결된 애플리케이션들은 REST나 GraphQL 엔드포인트에서 데이터를 소비하는 곳곳에서 발견됩니다. 만약 당신이 이러한 데이터 제공자 중 하나에 의존하는 애플리케이션에서 작업 중이라면, Storybook의 MSW 애드온을 통해 Mock Service Worker(MSW)를 추가하여 앱과 이야기들 옆에 데이터를 시뮬레이트할 수 있습니다.</p>
<p>Mock Service Worker는 API 시뮬레이션 라이브러리입니다. 이는 서비스 워커를 활용하여 네트워크 요청을 캡처하고 응답으로 모의 데이터를 제공합니다. MSW 애드온은 이 기능을 Storybook에 추가하여 이야기에서 API 요청을 모의할 수 있게 합니다. 아래는 애드온을 설정하고 사용하는 방법에 대한 개요입니다.</p>
<p>다음 명령어를 실행하여 MSW, 애드온을 설치하고 모의 서비스 워커를 생성하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add <span class="token operator">--</span>dev msw msw<span class="token operator">-</span>storybook<span class="token operator">-</span>addon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>.storybook/preview.js 파일을 업데이트하고 전역 데코레이터를 통해 애드온을 활성화하세요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크를 (예: react, vue3)로 대체하세요</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> initialize<span class="token punctuation">,</span> mswDecorator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'msw-storybook-addon'</span><span class="token punctuation">;</span>

<span class="token comment">/*
 * MSW 초기화
 * 커스터마이징 방법은 https://github.com/mswjs/msw-storybook-addon#configuring-msw를 참고하세요
 */</span>
<span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  decorators<span class="token operator">:</span> <span class="token punctuation">[</span>mswDecorator<span class="token punctuation">]</span><span class="token punctuation">,</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    controls<span class="token operator">:</span> <span class="token punctuation">{</span>
      matchers<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(background|color)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        date<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Date$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>마지막으로, .storybook/main.js 또는 .storybook/main.ts 파일을 업데이트하여 Storybook이 생성된 모의 서비스 워커 파일을 로드할 수 있도록 허용하세요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// 사용 중인 프레임워크로 교체하세요 (예: react-webpack5, vue3-vite)</span>
  framework<span class="token operator">:</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">,</span>
  stories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../src/**/*.mdx'</span><span class="token punctuation">,</span> <span class="token string">'../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  staticDirs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'../public'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//👈 Storybook에서 정적 자산 폴더를 구성합니다</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="msw-애드온으로-rest-요청-가짜-처리하기" tabindex="-1"><a class="header-anchor" href="#msw-애드온으로-rest-요청-가짜-처리하기" aria-hidden="true">#</a> MSW 애드온으로 REST 요청 가짜 처리하기</h4>
<p>순수 프레젠테이션 스크린을 다루고 있다면, args composition을 통해 스토리를 추가하는 것이 좋습니다. 모든 데이터를 args를 통해 쉽게 인코딩하여 &quot;래퍼 컴포넌트&quot;를 처리할 필요성을 없앨 수 있습니다. 그러나 스크린 자체에서 RESTful 엔드포인트에서 데이터를 검색하는 경우 이 접근법은 그 유연성을 잃습니다. 예를 들어, 여러 문서 목록을 검색하는 유사한 구현을 가진 화면이 있다면:</p>
<p>모의 데이터로 화면을 테스트하려면 유사한 스토리 세트를 작성할 수 있습니다:```</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 여러분의 framework명으로 바꿔주세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> rest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'msw'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./MyComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> DocumentScreen<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token comment">// 👇 스토리에 사용될 모킹된 데이터입니다</span>
<span class="token keyword">const</span> TestData <span class="token operator">=</span> <span class="token punctuation">{</span>
  user<span class="token operator">:</span> <span class="token punctuation">{</span>
    userID<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">'Someone'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  document<span class="token operator">:</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    userID<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">'Something'</span><span class="token punctuation">,</span>
    brief<span class="token operator">:</span> <span class="token string">'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'</span><span class="token punctuation">,</span>
    status<span class="token operator">:</span> <span class="token string">'approved'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  subdocuments<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      userID<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">'Something'</span><span class="token punctuation">,</span>
      content<span class="token operator">:</span>
        <span class="token string">'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'</span><span class="token punctuation">,</span>
      status<span class="token operator">:</span> <span class="token string">'approved'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> MockedSuccess<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    msw<span class="token operator">:</span> <span class="token punctuation">[</span>
      rest<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'https://your-restful-endpoint/'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>_req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">res</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>TestData<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> MockedError<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    msw<span class="token operator">:</span> <span class="token punctuation">[</span>
      rest<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'https://your-restful-endpoint'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>_req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">res</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span><span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">800</span><span class="token punctuation">)</span><span class="token punctuation">,</span> ctx<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">403</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>모킹된 데이터인 TestData는 매개변수를 통해 주입됩니다. 이를 통해 각 스토리에 따라 구성할 수 있습니다.</p>
<h4 id="msw-애드온을-사용한-graphql-쿼리-모킹" tabindex="-1"><a class="header-anchor" href="#msw-애드온을-사용한-graphql-쿼리-모킹" aria-hidden="true">#</a> MSW 애드온을 사용한 GraphQL 쿼리 모킹</h4>
<p>RESTful 요청을 모킹하는 것 외에도, MSW 애드온의 또 다른 주요 기능은 주요 GraphQL 클라이언트(Apollo Client, URQL 또는 React Query 등)에서 수신된 데이터를 모킹할 수 있는 기능입니다. 예를 들어, 사용자 정보 및 쿼리 결과에 따라 문서 목록을 검색하는 경우, 비슷한 구현을 할 수 있습니다:```</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useQuery<span class="token punctuation">,</span> gql <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@apollo/client'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> PageLayout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./PageLayout'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DocumentHeader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./DocumentHeader'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DocumentList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./DocumentList'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> AllInfoQuery <span class="token operator">=</span> gql<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  query AllInfo {
    user {
      userID
      name
    }
    document {
      id
      userID
      title
      brief
      status
    }
    subdocuments {
      id
      userID
      title
      content
      status
    }
  }
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Data</span> <span class="token punctuation">{</span>
  AllInfo<span class="token operator">:</span> <span class="token punctuation">{</span>
    user<span class="token operator">:</span> <span class="token punctuation">{</span>
      userID<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
      name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
      opening_crawl<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    document<span class="token operator">:</span> <span class="token punctuation">{</span>
      id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
      userID<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
      title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
      brief<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
      status<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    subdocuments<span class="token operator">:</span> <span class="token punctuation">{</span>
      id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
      userID<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
      title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
      content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
      status<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">useFetchInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> loading<span class="token punctuation">,</span> error<span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useQuery</span><span class="token generic class-name"><span class="token operator">&lt;</span>Data<span class="token operator">></span></span></span><span class="token punctuation">(</span>AllInfoQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> loading<span class="token punctuation">,</span> error<span class="token punctuation">,</span> data <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">DocumentScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> loading<span class="token punctuation">,</span> error<span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFetchInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>loading<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>데이터를 불러오는 중 오류가 발생했습니다<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>PageLayout user<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>user<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>DocumentHeader document<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>document<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>DocumentList documents<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>subdocuments<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>PageLayout<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>스크린을 GraphQL로 목업된 데이터와 함께 테스트하려면 다음 스토리를 작성할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> ApolloClient<span class="token punctuation">,</span> ApolloProvider<span class="token punctuation">,</span> InMemoryCache <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@apollo/client'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> graphql <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'msw'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> DocumentScreen <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./YourPage'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> mockedClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ApolloClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  uri<span class="token operator">:</span> <span class="token string">'https://your-graphql-endpoint'</span><span class="token punctuation">,</span>
  cache<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">InMemoryCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  defaultOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
    watchQuery<span class="token operator">:</span> <span class="token punctuation">{</span>
      fetchPolicy<span class="token operator">:</span> <span class="token string">'no-cache'</span><span class="token punctuation">,</span>
      errorPolicy<span class="token operator">:</span> <span class="token string">'all'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    query<span class="token operator">:</span> <span class="token punctuation">{</span>
      fetchPolicy<span class="token operator">:</span> <span class="token string">'no-cache'</span><span class="token punctuation">,</span>
      errorPolicy<span class="token operator">:</span> <span class="token string">'all'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//👇The mocked data that will be used in the story</span>
<span class="token keyword">const</span> TestData <span class="token operator">=</span> <span class="token punctuation">{</span>
  user<span class="token operator">:</span> <span class="token punctuation">{</span>
    userID<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">'Someone'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  document<span class="token operator">:</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    userID<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">'Something'</span><span class="token punctuation">,</span>
    brief<span class="token operator">:</span> <span class="token string">'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'</span><span class="token punctuation">,</span>
    status<span class="token operator">:</span> <span class="token string">'approved'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  subdocuments<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      userID<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">'Something'</span><span class="token punctuation">,</span>
      content<span class="token operator">:</span>
        <span class="token string">'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'</span><span class="token punctuation">,</span>
      status<span class="token operator">:</span> <span class="token string">'approved'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> DocumentScreen<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> DocumentScreen<span class="token punctuation">,</span>
  decorators<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">(</span>Story<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>ApolloProvider client<span class="token operator">=</span><span class="token punctuation">{</span>mockedClient<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Story <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ApolloProvider<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> SampleComponent<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> MockedSuccess<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    msw<span class="token operator">:</span> <span class="token punctuation">[</span>
      graphql<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">'AllInfoQuery'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">res</span><span class="token punctuation">(</span>
          ctx<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            allFilms<span class="token operator">:</span> <span class="token punctuation">{</span>
              films<span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> MockedError<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    msw<span class="token operator">:</span> <span class="token punctuation">[</span>
      graphql<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">'AllInfoQuery'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">res</span><span class="token punctuation">(</span>
          ctx<span class="token punctuation">.</span><span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">800</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          ctx<span class="token punctuation">.</span><span class="token function">errors</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              message<span class="token operator">:</span> <span class="token string">'Access denied'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="import-가짜-처리하기" tabindex="-1"><a class="header-anchor" href="#import-가짜-처리하기" aria-hidden="true">#</a> Import 가짜 처리하기```</h3>
<table>
<thead>
<tr>
<th>Property</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>nextJson</td>
<td>Holds the JSON data to be returned by the mocked fetch</td>
</tr>
<tr>
<td>fetch</td>
<td>Async function to mock the fetch API</td>
</tr>
<tr>
<td>decorator</td>
<td>Decorator function to apply the fetch mock to stories</td>
</tr>
</tbody>
</table>
<p>위의 코드는 이야기 매개변수에서 이야기별 데이터를 읽는 데코레이터를 만듭니다. 이를 통해 이야기별로 목업을 구성할 수 있습니다.</p>
<p>실제 import 대신 목업을 사용하려면 Webpack 별칭을 사용합니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// 여러분의 Storybook 구성</span>

  <span class="token function-variable function">webpackFinal</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>resolve<span class="token punctuation">.</span>alias<span class="token punctuation">[</span><span class="token string">'isomorphic-fetch'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'../__mocks__/isomorphic-fetch.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>방금 구현한 데코레이터를 storybook/preview.js에 추가하세요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 귀하가 사용 중인 프레임워크(예: React, Vue3 등)로 테이블 태그를 변경합니다.</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> decorator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../__mocks__/isomorphic-fetch'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  decorators<span class="token operator">:</span> <span class="token punctuation">[</span>decorator<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>마지막으로, 특정 스토리에서 목값을 설정할 수 있습니다. 이 블로그 포스트의 예제를 참고해 보겠습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 귀하가 사용 중인 프레임워크의 이름으로 바꿔주세요.</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> App<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> App<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> App<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Success<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    fetch<span class="token operator">:</span> <span class="token punctuation">{</span>
      json<span class="token operator">:</span> <span class="token punctuation">{</span>
        JavaScript<span class="token operator">:</span> <span class="token number">3390991</span><span class="token punctuation">,</span>
        <span class="token string-property property">'C++'</span><span class="token operator">:</span> <span class="token number">44974</span><span class="token punctuation">,</span>
        TypeScript<span class="token operator">:</span> <span class="token number">15530</span><span class="token punctuation">,</span>
        CoffeeScript<span class="token operator">:</span> <span class="token number">12253</span><span class="token punctuation">,</span>
        Python<span class="token operator">:</span> <span class="token number">9383</span><span class="token punctuation">,</span>
        <span class="token constant">C</span><span class="token operator">:</span> <span class="token number">5341</span><span class="token punctuation">,</span>
        Shell<span class="token operator">:</span> <span class="token number">5115</span><span class="token punctuation">,</span>
        <span class="token constant">HTML</span><span class="token operator">:</span> <span class="token number">3420</span><span class="token punctuation">,</span>
        <span class="token constant">CSS</span><span class="token operator">:</span> <span class="token number">3171</span><span class="token punctuation">,</span>
        Makefile<span class="token operator">:</span> <span class="token number">189</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="특정-모의값" tabindex="-1"><a class="header-anchor" href="#특정-모의값" aria-hidden="true">#</a> 특정 모의값</h3>
<p>이외에도, 호출을 낮은 수준에서 가로채는 라이브러리를 사용하는 모의 접근 방법이 있습니다. 예를 들어, <code v-pre>fetch-mock</code>을 사용하여 특정 fetch 요청을 모의할 수 있습니다.</p>
<p>위의 import 모의와 마찬가지로 한 번 모의를 설정한 후에도, 여전히 모의의 반환 값을 스토리별로 설정해야 합니다. 이를 Storybook에서 스토리의 매개변수를 읽는 데코레이터를 사용하여 수행할 수 있습니다.</p>
<h3 id="모의-의존성-피하기" tabindex="-1"><a class="header-anchor" href="#모의-의존성-피하기" aria-hidden="true">#</a> 모의 의존성 피하기</h3>
<p>연결된 &quot;컨테이너&quot; 컴포넌트의 종속성을 완전히 모의하는 대신, props나 React 컨텍스트를 통해 이를 주고 받음으로써 모의할 수 있습니다. 그러나 컨테이너와 프레젠테이션 컴포넌트 로직을 엄격히 분리해야 합니다. 예를 들어, 데이터 가져오기 로직을 담당하고 DOM을 렌더링하는 컴포넌트가 있다면 이전에 설명한대로 모의로 처리해야 합니다.</p>
<p>컨테이너 컴포넌트를 프레젠테이션 컴포넌트 사이에 가져와서 임베드하는 것은 흔한 일입니다. 그러나 앞에서 발견한 대로, 이들을 Storybook 내에서 렌더링하기 위해 종속성을 모의하거나 임포트해야 할 가능성이 높습니다.</p>
<p>이 작업이 재미없는 작업으로 빠르게 커질 수도 있고, 로컬 상태를 사용하는 컨테이너 컴포넌트들을 모의하는 것이 어려울 수도 있습니다. 그래서 직접 컨테이너를 임포트하는 대신, 이 문제의 해결책은 컨테이너 컴포넌트를 제공하는 리액트 컨텍스트를 생성하는 것입니다. 이를 통해 컴포넌트 계층구조에서 자유롭게 컨테이너 컴포넌트를 평소처럼 어디서든 임베드할 수 있습니다. 그들의 종속성을 이어서 모의하는 것에 대해 걱정할 필요가 없습니다. 왜냐하면 우리는 실제 컨테이너 자체를 모의 프레젠테이션 대조물로 교체할 수 있기 때문입니다.</p>
<p>앱에서 특정 페이지나 뷰 위로 컨텍스트 컨테이너들을 분리하는 것을 권장합니다. 예를 들어, ProfilePage 컴포넌트가 있다면 다음과 같은 파일 구조를 설정할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>ProfilePage<span class="token punctuation">.</span>js
ProfilePage<span class="token punctuation">.</span>stories<span class="token punctuation">.</span>js
ProfilePageContainer<span class="token punctuation">.</span>js
ProfilePageContext<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 방법의 구현 예시를 살펴봅시다.</p>
<p>먼저 React 컨텍스트를 생성하고 ProfilePageContext라고 이름을 지정하세요. 단순히 React 컨텍스트를 내보내는 것 이상은 하지 않습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> ProfilePageContext <span class="token operator">=</span> <span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ProfilePageContext<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ProfilePage는 우리의 표현형 컴포넌트입니다. ProfilePageContext에서 컨테이너 컴포넌트를 가져오기 위해 useContext 훅을 사용할 것입니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> ProfilePageContext <span class="token keyword">from</span> <span class="token string">'./ProfilePageContext'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">ProfilePage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token punctuation">,</span> userId <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> UserPostsContainer<span class="token punctuation">,</span> UserFriendsContainer <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>ProfilePageContext<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>UserPostsContainer userId<span class="token operator">=</span><span class="token punctuation">{</span>userId<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>UserFriendsContainer userId<span class="token operator">=</span><span class="token punctuation">{</span>userId<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="storybook에서-containers를-모의하기" tabindex="-1"><a class="header-anchor" href="#storybook에서-containers를-모의하기" aria-hidden="true">#</a> Storybook에서 containers를 모의하기</h4>
<p>Storybook의 맥락에서는 컨테이너 컴포넌트를 context를 통해 제공하는 대신, 대신 모의로 만든 버전을 제공합니다. 대부분의 경우 이러한 컴포넌트들의 모의 버전은 해당 스토리와 직접적으로 관련이 있을 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> ProfilePage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./ProfilePage'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UserPosts <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./UserPosts'</span><span class="token punctuation">;</span>

<span class="token comment">//👇 스토리 파일에서 특정 스토리를 가져옵니다</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Normal <span class="token keyword">as</span> UserFriendsNormal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./UserFriends.stories'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> ProfilePage<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> ProfilePageProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'Jimi Hendrix'</span><span class="token punctuation">,</span>
  userId<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//👇 여기서 필요한 경우 `userId` prop에 접근할 수 있습니다:</span>
  <span class="token function">UserPostsContainer</span><span class="token punctuation">(</span><span class="token punctuation">{</span> userId <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>UserPosts <span class="token punctuation">{</span><span class="token operator">...</span>UserPostsProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 대부분의 경우 스토리를 그대로 전달할 수 있습니다.</span>
  <span class="token comment">// 이 경우에는 `UserFriends` 컴포넌트 스토리에서 `normal` 스토리 export를 전달합니다.</span>
  UserFriendsContainer<span class="token operator">:</span> UserFriendsNormal<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Normal <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ProfilePageContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span>context<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>ProfilePage <span class="token punctuation">{</span><span class="token operator">...</span>ProfilePageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ProfilePageContext<span class="token punctuation">.</span>Provider<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="애플리케이션에-컨테이너-제공하기" tabindex="-1"><a class="header-anchor" href="#애플리케이션에-컨테이너-제공하기" aria-hidden="true">#</a> 애플리케이션에 컨테이너 제공하기</h4>
<p>이제 애플리케이션의 맥락에서 ProfilePage에 필요한 모든 컨테이너 컴포넌트를 제공해야 합니다. ProfilePageContext.Provider로 감싸서 제공해야 합니다.</p>
<p>예를 들어, Next.js에서는 pages/profile.js 컴포넌트가 될 것입니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> ProfilePageContext <span class="token keyword">from</span> <span class="token string">'./ProfilePageContext'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ProfilePageContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./ProfilePageContainer'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UserPostsContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./UserPostsContainer'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UserFriendsContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./UserFriendsContainer'</span><span class="token punctuation">;</span>

<span class="token comment">//👇 각 렌더링 사이에서 컨텍스트 값이 참조적으로 동일하게 유지되도록 합니다.</span>
<span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token punctuation">{</span>
  UserPostsContainer<span class="token punctuation">,</span>
  UserFriendsContainer<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">AppProfilePage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ProfilePageContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span>context<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>ProfilePageContainer <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ProfilePageContext<span class="token punctuation">.</span>Provider<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="스토리북에서-전역-컨테이너-모의하기" tabindex="-1"><a class="header-anchor" href="#스토리북에서-전역-컨테이너-모의하기" aria-hidden="true">#</a> 스토리북에서 전역 컨테이너 모의하기</h4>
<p>만약 GlobalContainerContext를 설정했다면, 모든 스토리에 컨텍스트를 제공하기 위해 스토리북의 preview.js 내에 데코레이터를 설정해야 합니다. 예를 들면:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token comment">// 사용 중인 프레임워크(예: react, vue3)으로 your-framework를 교체하세요.</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> normal <span class="token keyword">as</span> NavigationNormal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../components/Navigation.stories'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> GlobalContainerContext <span class="token keyword">from</span> <span class="token string">'../components/lib/GlobalContainerContext'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token punctuation">{</span>
  NavigationContainer<span class="token operator">:</span> NavigationNormal<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">AppDecorator</span> <span class="token operator">=</span> <span class="token punctuation">(</span>storyFn<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>GlobalContainerContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span>context<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token function">storyFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>GlobalContainerContext<span class="token punctuation">.</span>Provider<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  decorators<span class="token operator">:</span> <span class="token punctuation">[</span>AppDecorator<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
