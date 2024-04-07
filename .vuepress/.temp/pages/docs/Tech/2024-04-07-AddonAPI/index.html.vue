<template><div><p>Storybook의 API를 통해 개발자들은 Storybook과 프로그래밍적으로 상호작용할 수 있습니다. 이 API를 사용하여 개발자들은 Storybook 기능을 향상시키는 사용자 정의 애드온 및 다른 도구를 빌드하고 배포할 수 있습니다.</p>
<h2 id="핵심-애드온-api" tabindex="-1"><a class="header-anchor" href="#핵심-애드온-api" aria-hidden="true">#</a> 핵심 애드온 API</h2>
<p>저희 API는 두 가지 다른 목적을 가진 두 개의 패키지를 통해 노출됩니다:</p>
<ul>
<li>@storybook/manager-api는 Storybook 매니저 UI와 Storybook API에 상호작용하거나 접근하는 데 사용됩니다.</li>
<li>@storybook/preview-api는 애드온의 동작을 제어하고 구성하는 데 사용됩니다.</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> addons <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/preview-api'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useStorybookApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/manager-api'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="addons-add" tabindex="-1"><a class="header-anchor" href="#addons-add" aria-hidden="true">#</a> addons.add()</h3>
<p>add 메서드를 사용하면 애드온과 관련된 UI 컴포넌트 유형 (예: 패널, 툴바, 탭)을 등록할 수 있습니다. 최소한의 기능을 갖춘 Storybook 애드온을 만들려면 다음 인수를 제공해야 합니다:</p>
<ul>
<li>type: 등록할 UI 컴포넌트의 유형.</li>
<li>title: 애드온 패널에 표시할 제목.</li>
<li>render: 애드온 UI 컴포넌트를 렌더링하는 함수.</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> addons<span class="token punctuation">,</span> types <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/manager-api'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> AddonPanel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/components'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">ADDON_ID</span> <span class="token operator">=</span> <span class="token string">'myaddon'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">PANEL_ID</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">ADDON_ID</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/panel</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

addons<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token constant">ADDON_ID</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>api<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  addons<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token constant">PANEL_ID</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> types<span class="token punctuation">.</span><span class="token constant">PANEL</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">'My Addon'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> active <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>AddonPanel active<span class="token operator">=</span><span class="token punctuation">{</span>active<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span> Storybook addon panel <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>AddonPanel<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="addons-register" tabindex="-1"><a class="header-anchor" href="#addons-register" aria-hidden="true">#</a> addons.register()</h3>
<p>모든 애드온의 진입점 역할을 합니다. 애드온을 등록하고 Storybook API에 액세스할 수 있게 해줍니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> addons <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/preview-api'</span><span class="token punctuation">;</span>

<span class="token comment">// 고유한 이름으로 애드온을 등록합니다.</span>
addons<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'my-organisation/my-addon'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>api<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 StorybookAPI 인스턴스를 받게 될 거에요. 그 인스턴스를 사용하는 방법에 대한 Storybook API의 API 문서를 확인해보세요.</p>
<h3 id="addons-getchannel" tabindex="-1"><a class="header-anchor" href="#addons-getchannel" aria-hidden="true">#</a> addons.getChannel()</h3>
<p>매니저 및 미리보기와 통신하기 위한 채널 인스턴스를 받아요. 이 인스턴스는 애드온 등록 코드와 애드온의 래퍼 컴포넌트(스토리 안에서 사용될 때) 양쪽에서 찾을 수 있어요.</p>
<p>NodeJS EventEmitter와 호환되는 API를 갖고 있어요. 그래서 이를 사용하여 이벤트를 발생시키고 이벤트를 수신할 수 있어요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">FORCE_RE_RENDER</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/core-events'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> addons <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/preview-api'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useGlobals <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/manager-api'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IconButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/components'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> OutlineIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/icons'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ExampleToolbar</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>globals<span class="token punctuation">,</span> updateGlobals<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useGlobals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> isActive <span class="token operator">=</span> globals<span class="token punctuation">[</span><span class="token string">'my-param-key'</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token comment">// 글로벌 값을 업데이트하고 UI를 갱신할 함수입니다.</span>
  <span class="token keyword">const</span> <span class="token function-variable function">refreshAndUpdateGlobal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">updateGlobals</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token punctuation">[</span><span class="token string">'my-param-key'</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token operator">!</span>isActive<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// UI를 새로고침하기 위해 Storybook의 애드온 API 메서드를 추가하며 FORCE_RE_RENDER 이벤트를 내보냅니다.</span>
    addons<span class="token punctuation">.</span><span class="token function">getChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token constant">FORCE_RE_RENDER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> toggleToolbarAddon <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">refreshAndUpdateGlobal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>isActive<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>IconButton
      key<span class="token operator">=</span><span class="token string">"Example"</span>
      active<span class="token operator">=</span><span class="token punctuation">{</span>isActive<span class="token punctuation">}</span>
      title<span class="token operator">=</span><span class="token string">"툴바 애드온 보기"</span>
      onClick<span class="token operator">=</span><span class="token punctuation">{</span>toggleToolbarAddon<span class="token punctuation">}</span>
    <span class="token operator">></span>
      <span class="token operator">&lt;</span>OutlineIcon <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>IconButton<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="makedecorator" tabindex="-1"><a class="header-anchor" href="#makedecorator" aria-hidden="true">#</a> makeDecorator</h3>
<p>공식 애드온과 같은 스타일로 데코레이터를 만들기 위해 makeDecorator API를 사용하세요. 다음과 같이 작성할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> makeDecorator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/preview-api'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> withAddonDecorator <span class="token operator">=</span> <span class="token function">makeDecorator</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'withSomething'</span><span class="token punctuation">,</span>
  parameterName<span class="token operator">:</span> <span class="token string">'CustomParameter'</span><span class="token punctuation">,</span>
  skipIfNoParametersOrOptions<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">wrapper</span><span class="token operator">:</span> <span class="token punctuation">(</span>getStory<span class="token punctuation">,</span> context<span class="token punctuation">,</span> <span class="token punctuation">{</span> parameters <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">/*
    * Storybook 스토리에 전달된 매개변수를 기반으로 여기에 사용자 정의 로직을 작성하세요.
    * 권장되지는 않지만 매개변수에 따라 스토리 출력을 변경할 수도 있습니다.
    */</span>
    <span class="token keyword">return</span> <span class="token function">getStory</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>makeDecorator API에는 다음과 같은 인수가 필요합니다:</p>
<ul>
<li>name: 사용자 정의 애드온 데코레이터를 식별하는 고유한 이름입니다.</li>
<li>parameterName: 애드온에서 사용할 고유한 매개변수를 설정합니다.</li>
<li>skipIfNoParametersOrOptions: (옵션) 사용자가 데코레이터나 매개변수를 통해 옵션을 설정하지 않았을 경우 데코레이터를 실행하지 않습니다.</li>
<li>wrapper: 데코레이터 함수입니다. getStory, context 및 위에 나온 skipIfNoParametersOrOptions에 정의된 옵션과 매개변수를 모두 가져옵니다.</li>
</ul>
<h2 id="storybook-api" tabindex="-1"><a class="header-anchor" href="#storybook-api" aria-hidden="true">#</a> Storybook API</h2>
<p>Storybook의 API를 통해 Storybook UI의 다양한 기능에 액세스할 수 있습니다.</p>
<h3 id="api-selectstory" tabindex="-1"><a class="header-anchor" href="#api-selectstory" aria-hidden="true">#</a> api.selectStory()</h3>
<p><strong>selectStory</strong> API 메서드를 사용하면 단일 스토리를 선택할 수 있습니다. 두 가지 매개변수를 받습니다; 스토리 종류 이름과 선택 사항인 스토리 이름입니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 👇 title 속성은 선택 사항입니다.
   * 자동 제목을 생성하는 방법은
   * https://storybook.js.org/docs/configure/#configure-story-loading
   * 를 참조하세요.
   */</span>
  title<span class="token operator">:</span> <span class="token string">'Button'</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
  <span class="token comment">//👇 스토리를 위한 특정 매개변수를 생성합니다.</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    myAddon<span class="token operator">:</span> <span class="token punctuation">{</span>
      data<span class="token operator">:</span> <span class="token string">'This data is passed to the addon'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token comment">/*
 *👇 렌더 함수는 컴포넌트의 렌더링을 제어하는 프레임워크별 기능으로,
 * 렌더 함수를 사용하는 방법은
 * https://storybook.js.org/docs/api/csf
 * 를 참조하세요.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Basic<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>Button<span class="token operator">></span>Hello<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 스토리를 선택하는 방법입니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>addons<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'my-organisation/my-addon'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>api<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  api<span class="token punctuation">.</span><span class="token function">selectStory</span><span class="token punctuation">(</span><span class="token string">'Button'</span><span class="token punctuation">,</span> <span class="token string">'Default'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="api-selectincurrentkind" tabindex="-1"><a class="header-anchor" href="#api-selectincurrentkind" aria-hidden="true">#</a> api.selectInCurrentKind()</h3>
<p><code v-pre>selectInCurrentKind</code> 메서드는 <code v-pre>selectStory</code> API 메서드와 유사하지만, 스토리를 유일한 매개변수로만 사용합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>addons<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'my-organisation/my-addon'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>api<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  api<span class="token punctuation">.</span><span class="token function">selectInCurrentKind</span><span class="token punctuation">(</span><span class="token string">'Default'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="api-setqueryparams" tabindex="-1"><a class="header-anchor" href="#api-setqueryparams" aria-hidden="true">#</a> api.setQueryParams()</h3>
<p>이 메서드를 사용하면 쿼리 문자열 매개변수를 설정할 수 있습니다. 애드온에 대한 임시 저장소로 사용할 수 있습니다. 쿼리 매개변수를 정의하는 방법은 다음과 같습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>addons<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'my-organisation/my-addon'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>api<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  api<span class="token punctuation">.</span><span class="token function">setQueryParams</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    exampleParameter<span class="token operator">:</span> <span class="token string">'예시 매개변수 값을 설정합니다'</span><span class="token punctuation">,</span>
    anotherParameter<span class="token operator">:</span> <span class="token string">'다른 매개변수 값을 설정합니다'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>게다가, 쿼리 매개변수를 제거해야 할 경우, 해당 매개변수를 애드온에서 제거하는 대신 null로 설정하십시오. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>addons<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'my-organisation/my-addon'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>api<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  api<span class="token punctuation">.</span><span class="token function">setQueryParams</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    exampleParameter<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="api-getqueryparam" tabindex="-1"><a class="header-anchor" href="#api-getqueryparam" aria-hidden="true">#</a> api.getQueryParam()</h3>
<p>setQueryParams API 메서드를 통해 활성화된 쿼리 매개변수를 검색할 수 있습니다. 다음은 예시입니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>addons<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'my-organisation/my-addon'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>api<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  api<span class="token punctuation">.</span><span class="token function">getQueryParam</span><span class="token punctuation">(</span><span class="token string">'exampleParameter'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="api-geturlstate-overrideparams" tabindex="-1"><a class="header-anchor" href="#api-geturlstate-overrideparams" aria-hidden="true">#</a> api.getUrlState(overrideParams)</h3>
<p>이 메서드를 사용하면 응용 프로그램 URL 상태를 가져올 수 있으며, 오버라이드된 또는 사용자 정의 매개변수 값도 포함됩니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>addons<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'my-organisation/my-addon'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>api<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> href <span class="token operator">=</span> api<span class="token punctuation">.</span><span class="token function">getUrlState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    selectedKind<span class="token operator">:</span> <span class="token string">'kind'</span><span class="token punctuation">,</span>
    selectedStory<span class="token operator">:</span> <span class="token string">'story'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>url<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="api-on-eventname-fn" tabindex="-1"><a class="header-anchor" href="#api-on-eventname-fn" aria-hidden="true">#</a> api.on(eventName, fn)</h3>
<p>이 방법은 사용자가 이야기 간을 이동할 때마다 호출되는 핸들러 함수를 등록할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>addons<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'my-organisation/my-addon'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>api<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 특정 이벤트가 발생할 때 브라우저 콘솔에 이벤트 데이터를 기록합니다.</span>
  api<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'custom-addon-event'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>eventData<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>eventData<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="addons-setconfig-config" tabindex="-1"><a class="header-anchor" href="#addons-setconfig-config" aria-hidden="true">#</a> addons.setConfig(config)</h3>
<p>이 방법을 사용하면 기본 Storybook UI 구성(예: 테마 설정 또는 UI 요소 숨김)을 재정의할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> addons <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/manager-api'</span><span class="token punctuation">;</span>

addons<span class="token punctuation">.</span><span class="token function">setConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  navSize<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  bottomPanelHeight<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  rightPanelWidth<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  panelPosition<span class="token operator">:</span> <span class="token string">'bottom'</span><span class="token punctuation">,</span>
  enableShortcuts<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  showToolbar<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  theme<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  selectedPanel<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  initialActive<span class="token operator">:</span> <span class="token string">'sidebar'</span><span class="token punctuation">,</span>
  sidebar<span class="token operator">:</span> <span class="token punctuation">{</span>
    showRoots<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    collapsedRoots<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'other'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  toolbar<span class="token operator">:</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token punctuation">{</span> hidden<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    zoom<span class="token operator">:</span> <span class="token punctuation">{</span> hidden<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    eject<span class="token operator">:</span> <span class="token punctuation">{</span> hidden<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    copy<span class="token operator">:</span> <span class="token punctuation">{</span> hidden<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    fullscreen<span class="token operator">:</span> <span class="token punctuation">{</span> hidden<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>아래 표는 API값 사용 방법을 자세히 설명합니다:</p>
<p>사이드바 네임스페이스 아래에서 구성 가능한 옵션들은 다음과 같습니다:</p>
<p>툴바 네임스페이스 아래에서 구성 가능한 옵션들은 다음과 같습니다:</p>
<h2 id="스토리북-훅" tabindex="-1"><a class="header-anchor" href="#스토리북-훅" aria-hidden="true">#</a> 스토리북 훅</h2>
<p>애드온 개발을 간소화하고 보일러플레이트 코드를 줄이기 위해 API는 스토리북의 내부에 액세스할 수 있는 일련의 훅을 노출합니다. 이러한 훅은 @storybook/manager-api 패키지의 확장입니다.</p>
<h3 id="usestorybookstate" tabindex="-1"><a class="header-anchor" href="#usestorybookstate" aria-hidden="true">#</a> useStorybookState</h3>
<p>이것은 스토리북의 내부 상태에 액세스할 수 있도록 합니다. useGlobals 훅과 유사하게, React.memo에 의존하는 애드온을 최적화하는 것을 권장합니다. 또는 다음 훅인 useMemo, useCallback을 사용하여 렌더링 사이클의 높은 양을 방지할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> AddonPanel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/components'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useStorybookState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/manager-api'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Panel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">useStorybookState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>AddonPanel <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token punctuation">{</span>state<span class="token punctuation">.</span>viewMode <span class="token operator">!==</span> <span class="token string">'docs'</span> <span class="token operator">?</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>문서와 관련된 작업을 수행하세요<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>이야기를 볼 때 패널을 표시하세요<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>AddonPanel<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usestorybookapi" tabindex="-1"><a class="header-anchor" href="#usestorybookapi" aria-hidden="true">#</a> useStorybookApi</h3>
<p>useStorybookApi 훅은 Storybook API 메소드에 완전한 액세스 권한을 제공하기 위한 편리한 도우미입니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useStorybookApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/manager-api'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IconButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/components'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ChevronDownIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/icons'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Panel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> api <span class="token operator">=</span> <span class="token function">useStorybookApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> toggleMyTool <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 여기에서 애드온을 토글하는 사용자 정의 로직</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    api<span class="token punctuation">.</span><span class="token function">setAddonShortcut</span><span class="token punctuation">(</span><span class="token string">'custom-toolbar-addon'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      label<span class="token operator">:</span> <span class="token string">'툴바 애드온 활성화'</span><span class="token punctuation">,</span>
      defaultShortcut<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'G'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      actionName<span class="token operator">:</span> <span class="token string">'토글'</span><span class="token punctuation">,</span>
      showInMenu<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      action<span class="token operator">:</span> toggleAddon<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>api<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>IconButton key<span class="token operator">=</span><span class="token string">"custom-toolbar"</span> active<span class="token operator">=</span><span class="token string">"true"</span> title<span class="token operator">=</span><span class="token string">"툴바 애드온 표시"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>ChevronDownIcon <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>IconButton<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usechannel" tabindex="-1"><a class="header-anchor" href="#usechannel" aria-hidden="true">#</a> useChannel</h3>
<p>이벤트에 대한 구독을 설정하고 채널에 사용자 정의 이벤트를 발생시킬 때 사용합니다.</p>
<p>메시지는 iframe 및 매니저에서 모두 청취할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> AddonPanel<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/components'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">STORY_CHANGED</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/core-events'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useChannel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/manager-api'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Panel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// Story_CHANGED 이벤트를 구독하는 Storybook API 채널 생성</span>
  <span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">useChannel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">STORY_CHANGED</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>AddonPanel key<span class="token operator">=</span><span class="token string">"custom-panel"</span> active<span class="token operator">=</span><span class="token string">"true"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'my-event-type'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> sampleData<span class="token operator">:</span> <span class="token string">'example'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
        사용자 정의 데이터로 Storybook <span class="token constant">API</span> 이벤트 발생
      <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>AddonPanel<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="useaddonstate" tabindex="-1"><a class="header-anchor" href="#useaddonstate" aria-hidden="true">#</a> useAddonState</h3>
<p>useAddonState은 Storybook의 UI 수명주기 또는 더 복잡한 애드온(예: 툴바, 패널 등)에 데이터 지속성이 필요한 경우 유용한 후크입니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useAddonState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/manager-api'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AddonPanel<span class="token punctuation">,</span> IconButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/components'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> LightningIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/icons'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Panel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useAddonState</span><span class="token punctuation">(</span><span class="token string">'addon-unique-identifier'</span><span class="token punctuation">,</span> <span class="token string">'initial state'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>AddonPanel key<span class="token operator">=</span><span class="token string">"custom-panel"</span> active<span class="token operator">=</span><span class="token string">"true"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setState</span><span class="token punctuation">(</span><span class="token string">'예시'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
        Storybook의 내부 상태를 업데이트하려면 클릭하세요<span class="token punctuation">.</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>AddonPanel<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Tool</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useAddonState</span><span class="token punctuation">(</span><span class="token string">'addon-unique-identifier'</span><span class="token punctuation">,</span> <span class="token string">'initial state'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>IconButton key<span class="token operator">=</span><span class="token string">"custom-toolbar"</span> active<span class="token operator">=</span><span class="token string">"true"</span> title<span class="token operator">=</span><span class="token string">"내 애드온 활성화"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setState</span><span class="token punctuation">(</span><span class="token string">'예시'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>LightningIcon <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>IconButton<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="useparameter" tabindex="-1"><a class="header-anchor" href="#useparameter" aria-hidden="true">#</a> useParameter</h3>
<p>useParameter은 현재 스토리의 매개변수를 가져옵니다. 매개변수 값이 정의되어 있지 않으면 자동으로 두 번째로 정의된 값을 기본값으로 사용합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> AddonPanel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/components'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useParameter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/manager-api'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Panel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// Storybook의 API에 연결하고 현재 스토리의 사용자 정의 매개변수 값 가져오기</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">useParameter</span><span class="token punctuation">(</span><span class="token string">'custom-parameter'</span><span class="token punctuation">,</span> <span class="token string">'initial value'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>AddonPanel key<span class="token operator">=</span><span class="token string">"custom-panel"</span> active<span class="token operator">=</span><span class="token string">"true"</span><span class="token operator">></span>
      <span class="token punctuation">{</span>value <span class="token operator">===</span> <span class="token string">'initial value'</span> <span class="token operator">?</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>이 스토리에는 사용자 정의 매개변수가 포함되어 있지 않습니다<span class="token punctuation">.</span> 초기값으로 전환됩니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>매개변수로 <span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token function">을</span><span class="token punctuation">(</span>를<span class="token punctuation">)</span> 설정했습니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>AddonPanel<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="useglobals" tabindex="-1"><a class="header-anchor" href="#useglobals" aria-hidden="true">#</a> useGlobals</h3>
<p>Storybook 글로벌을 의존하는 애드온에 매우 유용한 후크입니다. 글로벌 값을 가져오고 업데이트할 수 있도록 합니다. 또한 React.memo에 의존하도록 애드온을 최적화하고, 다음 후크인 useMemo, useCallback을 사용하여 렌더링 주기를 최적화하여 렌더링 주기가 높아지는 것을 방지하는 것을 권장합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> AddonPanel<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/components'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useGlobals <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/manager-api'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Panel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>globals<span class="token punctuation">,</span> updateGlobals<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useGlobals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> isActive <span class="token operator">=</span> globals<span class="token punctuation">[</span><span class="token string">'my-param-key'</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 👈 전역 값에 기반해 가시성 설정.</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>AddonPanel key<span class="token operator">=</span><span class="token string">"custom-panel"</span> active<span class="token operator">=</span><span class="token punctuation">{</span>isActive<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">updateGlobals</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token string">'my-param-key'</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token operator">!</span>isActive <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token punctuation">{</span>isActive <span class="token operator">?</span> <span class="token string">'애드온 패널 숨기기'</span> <span class="token operator">:</span> <span class="token string">'패널 보이기'</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>AddonPanel<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="useargs" tabindex="-1"><a class="header-anchor" href="#useargs" aria-hidden="true">#</a> useArgs</h3>
<p>스토리의 args를 검색하거나 업데이트할 수 있는 훅입니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useArgs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/manager-api'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>args<span class="token punctuation">,</span> updateArgs<span class="token punctuation">,</span> resetArgs<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useArgs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 하나 이상의 인자를 업데이트:</span>
<span class="token function">updateArgs</span><span class="token punctuation">(</span><span class="token punctuation">{</span> key<span class="token operator">:</span> <span class="token string">'value'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 하나 이상의 인자를 초기화:</span>
<span class="token function">resetArgs</span><span class="token punctuation">(</span><span class="token punctuation">(</span>argNames<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'key'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 모든 인자를 초기화</span>
<span class="token function">resetArgs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>자세한 내용은 Storybook 애드온 생태계에 대해 알아보세요.</p>
<ul>
<li>다른 종류의 애드온을 위한 애드온 종류</li>
<li>애드온 개발의 기본을 위한 애드온 작성</li>
<li>프리셋 개발을 위한 프리셋</li>
<li>요구 사항 및 사용 가능한 레시피에 대한 통합 카탈로그</li>
<li>사용 가능한 API에 대해 알아보기 위한 API 참조</li>
</ul>
</div></template>
