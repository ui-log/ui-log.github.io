<template><div><p>Storybook 애드온은 Storybook의 기능을 확장하고 개발 경험을 맞춤화하는 강력한 방법입니다. 새로운 기능을 추가하거나 UI를 맞춤화하거나 제3자 도구와 통합하는 데 사용할 수 있습니다.</p>
<h2 id="무엇을-만들-것인가요" tabindex="-1"><a class="header-anchor" href="#무엇을-만들-것인가요" aria-hidden="true">#</a> 무엇을 만들 것인가요?</h2>
<p>이 참조 가이드는 인기 있는 Outline 애드온을 기반으로 한 간단한 애드온을 만들면서 Storybook 애드온이 어떻게 작동하는지에 대한 개념 모델을 개발하는 데 도움을 주는 것입니다. 이 가이드에서는 애드온의 구조, Storybook의 API, 로컬에서 애드온을 테스트하는 방법 및 발행하는 방법에 대해 배울 수 있습니다.</p>
<video autoplay playsinline loop>
  <source src="@source/docs/Tech/2024-04-07-Writeanaddon/img/Writeanaddon_0.mp4" type="video/mp4">
</video>
<h2 id="애드온-구성" tabindex="-1"><a class="header-anchor" href="#애드온-구성" aria-hidden="true">#</a> 애드온 구성</h2>
<p>애드온에는 각각의 역할을 가진 두 가지 주요 범주가 있습니다:</p>
<ul>
<li>UI 기반: UI 기반 애드온은 인터페이스를 사용자 정의하거나 일반 작업에 바로 가기를 제공하거나 UI에 추가 정보를 표시하는 것을 담당합니다.</li>
<li>프리셋: 이들은 미리 구성된 설정 또는 구성으로, 개발자가 특정 기능, 기능 또는 기술 집합으로 환경을 빠르게 설정하고 사용자 정의할 수 있도록 합니다.</li>
</ul>
<h3 id="ui-기반-애드온" tabindex="-1"><a class="header-anchor" href="#ui-기반-애드온" aria-hidden="true">#</a> UI 기반 애드온</h3>
<p>위 가이드에 포함된 애드온은 UI 기반의 애드온으로, 구체적으로는 툴바 애드온으로, 사용자가 단축키를 누르거나 버튼을 클릭하여 이야기의 각 요소 주위에 외곽선을 그릴 수 있게 해줍니다. UI 애드온은 패널과 탭처럼 다른 종류의 UI 요소를 생성할 수 있으며, 각각의 기능에 따라 사용자가 UI와 상호 작용할 수 있는 다양한 방법을 제공합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> memo<span class="token punctuation">,</span> useCallback<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useGlobals<span class="token punctuation">,</span> useStorybookApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/manager-api'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IconButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/components'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> LightningIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/icons'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ADDON_ID</span><span class="token punctuation">,</span> <span class="token constant">PARAM_KEY</span><span class="token punctuation">,</span> <span class="token constant">TOOL_ID</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./constants'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Tool <span class="token operator">=</span> <span class="token function">memo</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">MyAddonSelector</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>globals<span class="token punctuation">,</span> updateGlobals<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useGlobals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> api <span class="token operator">=</span> <span class="token function">useStorybookApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> isActive <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">'true'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>globals<span class="token punctuation">[</span><span class="token constant">PARAM_KEY</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> toggleMyTool <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">updateGlobals</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token punctuation">[</span><span class="token constant">PARAM_KEY</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token operator">!</span>isActive<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>isActive<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    api<span class="token punctuation">.</span><span class="token function">setAddonShortcut</span><span class="token punctuation">(</span><span class="token constant">ADDON_ID</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      label<span class="token operator">:</span> <span class="token string">'Toggle Measure [O]'</span><span class="token punctuation">,</span>
      defaultShortcut<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'O'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      actionName<span class="token operator">:</span> <span class="token string">'outline'</span><span class="token punctuation">,</span>
      showInMenu<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      action<span class="token operator">:</span> toggleMyTool<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>toggleMyTool<span class="token punctuation">,</span> api<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>IconButton key<span class="token operator">=</span><span class="token punctuation">{</span><span class="token constant">TOOL_ID</span><span class="token punctuation">}</span> active<span class="token operator">=</span><span class="token punctuation">{</span>isActive<span class="token punctuation">}</span> title<span class="token operator">=</span><span class="token string">"내 애드온 활성화"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>toggleMyTool<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>LightningIcon <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>IconButton<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="설정" tabindex="-1"><a class="header-anchor" href="#설정" aria-hidden="true">#</a> 설정</h2>
<p>첫 번째 애드온을 만들기 위해 Addon Kit을 사용할 예정입니다. Addon Kit은 필요한 모든 구성 요소, 종속성 및 구성 요소를 갖춘 준비된 템플릿으로, 애드온 제작을 시작하는 데 도움이 되는 코드가 준비되어 있습니다. Addon Kit 리포지토리에서 &quot;이 템플릿 사용&quot; 버튼을 클릭하여 Addon Kit 코드를 기반으로 새 리포지토리를 생성하세요.```</p>
<video autoplay playsinline loop>
  <source src="@source/docs/Tech/2024-04-07-Writeanaddon/img/Writeanaddon_1.mp4" type="video/mp4">
</video>
<p>방금 생성한 저장소를 복제하고 필요한 종속 항목을 설치하세요. 설치 과정이 완료되면 애드온을 구성하는 질문이 나옵니다. 이에 대답하고 애드온 개발을 시작할 준비가 되면 다음 명령어를 실행하여 스토리북을 개발 모드로 시작하고 애드온을 감시 모드로 개발하세요:</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npm run start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="빌드-시스템-이해" tabindex="-1"><a class="header-anchor" href="#빌드-시스템-이해" aria-hidden="true">#</a> 빌드 시스템 이해</h3>
<p>Storybook 생태계에 내장된 애드온은 브라우저에서 실행할 수 있는 모던 JavaScript로 애드온 코드를 변환하기 위해 esbuild를 기반으로 한 빠르고 구성이 필요하지 않은 번들러인 tsup에 의존합니다. Addon Kit에는 미리 구성된 tsup 구성 파일이 함께 제공되며, 이를 사용하여 애드온의 빌드 프로세스를 사용자 정의할 수 있습니다.</p>
<p>빌드 스크립트가 실행될 때, 구성 파일을 찾아 제공된 구성에 따라 애드온 코드를 미리 번들링합니다. 애드온은 Storybook과 다양한 방식으로 상호작용할 수 있습니다. 구성을 수정하기 위해 프리셋을 정의하거나 매니저 UI에 행동을 추가하거나 미리보기 iframe에 행동을 추가할 수 있습니다. 이러한 다른 사용 사례들은 다른 런타임과 환경을 대상으로 하기 때문에 다른 번들 출력이 필요합니다. 프리셋은 Node 환경에서 실행됩니다. Storybook의 매니저 및 미리보기 환경은 전역 범위에서 특정 패키지를 제공하므로 애드온은 이를 번들링하거나 package.json 파일의 의존성으로 포함할 필요가 없습니다.</p>
<p>tsup 구성은 기본적으로 이러한 복잡성을 처리하지만 요구 사항에 맞게 사용자 지정할 수 있습니다. 사용된 번들링 기술에 대한 자세한 설명은 애드온 킷의 README를 참조하고 여기에서 기본 tsup 구성을 확인하세요.</p>
<h2 id="애드온-등록" tabindex="-1"><a class="header-anchor" href="#애드온-등록" aria-hidden="true">#</a> 애드온 등록</h2>
<p>기본적으로 UI 기반 애드온의 코드는 다음과 같은 파일 중 하나에 위치합니다. 빌드한 애드온의 종류에 따라 달라집니다: src/Tool.tsx, src/Panel.tsx 또는 src/Tab.tsx. 우리는 툴바 애드온을 구축하고 있으므로 Panel 및 Tab 파일을 안전하게 삭제하고 남아 있는 파일을 다음과 같이 업데이트할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> memo<span class="token punctuation">,</span> useCallback<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useGlobals<span class="token punctuation">,</span> useStorybookApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/manager-api'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IconButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/components'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> LightningIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/icons'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ADDON_ID</span><span class="token punctuation">,</span> <span class="token constant">PARAM_KEY</span><span class="token punctuation">,</span> <span class="token constant">TOOL_ID</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./constants'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Tool <span class="token operator">=</span> <span class="token function">memo</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">MyAddonSelector</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>globals<span class="token punctuation">,</span> updateGlobals<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useGlobals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> api <span class="token operator">=</span> <span class="token function">useStorybookApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> isActive <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">'true'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>globals<span class="token punctuation">[</span><span class="token constant">PARAM_KEY</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> toggleMyTool <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">updateGlobals</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token punctuation">[</span><span class="token constant">PARAM_KEY</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token operator">!</span>isActive<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>isActive<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    api<span class="token punctuation">.</span><span class="token function">setAddonShortcut</span><span class="token punctuation">(</span><span class="token constant">ADDON_ID</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      label<span class="token operator">:</span> <span class="token string">'Toggle Addon [8]'</span><span class="token punctuation">,</span>
      defaultShortcut<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'8'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      actionName<span class="token operator">:</span> <span class="token string">'myaddon'</span><span class="token punctuation">,</span>
      showInMenu<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      action<span class="token operator">:</span> toggleMyTool<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>toggleMyTool<span class="token punctuation">,</span> api<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>IconButton key<span class="token operator">=</span><span class="token punctuation">{</span><span class="token constant">TOOL_ID</span><span class="token punctuation">}</span> active<span class="token operator">=</span><span class="token punctuation">{</span>isActive<span class="token punctuation">}</span> title<span class="token operator">=</span><span class="token string">"내 애드온 활성화"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>toggleMyTool<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>LightningIcon <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>IconButton<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>시퀀스에 있는 코드 블록을 따라 갑니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useGlobals<span class="token punctuation">,</span> useStorybookApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/manager-api'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IconButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/components'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> LightningIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/icons'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>manager-api 패키지에서 사용하는 useGlobals 및 useStorybookApi 훅은 Storybook의 API에 액세스하는 데 사용됩니다. 이를 통해 사용자는 애드온과 상호 작용할 수 있으며 활성화 또는 비활성화할 수 있습니다.</p>
<p>@storybook/components 패키지의 IconButton 또는 Button 컴포넌트를 사용하여 툴바에 버튼을 렌더링할 수 있습니다. @storybook/icons 패키지는 적절한 크기와 스타일의 아이콘을 다양하게 제공합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> Tool <span class="token operator">=</span> <span class="token function">memo</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">MyAddonSelector</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>globals<span class="token punctuation">,</span> updateGlobals<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useGlobals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> api <span class="token operator">=</span> <span class="token function">useStorybookApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> isActive <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">'true'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>globals<span class="token punctuation">[</span><span class="token constant">PARAM_KEY</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> toggleMyTool <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">updateGlobals</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token punctuation">[</span><span class="token constant">PARAM_KEY</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token operator">!</span>isActive<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>isActive<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    api<span class="token punctuation">.</span><span class="token function">setAddonShortcut</span><span class="token punctuation">(</span><span class="token constant">ADDON_ID</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Toggle Addon [8]'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">defaultShortcut</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'8'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">actionName</span><span class="token operator">:</span> <span class="token string">'myaddon'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">showInMenu</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">action</span><span class="token operator">:</span> toggleMyTool<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>toggleMyTool<span class="token punctuation">,</span> api<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>IconButton key<span class="token operator">=</span><span class="token punctuation">{</span><span class="token constant">TOOL_ID</span><span class="token punctuation">}</span> active<span class="token operator">=</span><span class="token punctuation">{</span>isActive<span class="token punctuation">}</span> title<span class="token operator">=</span><span class="token string">"Enable my addon"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>toggleMyTool<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>LightningIcon <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>IconButton<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Tool 컴포넌트는 애드온의 진입점입니다. 툴바에 UI 요소를 렌더링하고 키보드 단축키를 등록하며 애드온을 활성화 또는 비활성화하는 논리를 처리합니다.</p>
<p>매니저로 넘어가면, Storybook을 고유한 이름과 식별자를 사용하여 애드온에 등록합니다. Panel과 Tab 파일을 제거했기 때문에, 빌드 중인 애드온만을 참조하도록 파일을 조정해야 합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> addons<span class="token punctuation">,</span> types <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/manager-api'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ADDON_ID</span><span class="token punctuation">,</span> <span class="token constant">TOOL_ID</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./constants'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Tool <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Tool'</span><span class="token punctuation">;</span>

<span class="token comment">// 애드온 등록</span>
addons<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token constant">ADDON_ID</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 툴 등록</span>
  addons<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token constant">TOOL_ID</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> types<span class="token punctuation">.</span><span class="token constant">TOOL</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">'내 애드온'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">match</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> tabId<span class="token punctuation">,</span> viewMode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span>tabId <span class="token operator">&amp;&amp;</span> viewMode <span class="token operator">===</span> <span class="token string">'story'</span><span class="token punctuation">,</span>
    render<span class="token operator">:</span> Tool<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="애드온을-조건부로-렌더링하기" tabindex="-1"><a class="header-anchor" href="#애드온을-조건부로-렌더링하기" aria-hidden="true">#</a> 애드온을 조건부로 렌더링하기</h3>
<p>match 속성에 주목하세요. 이를 통해 툴바 애드온이 표시되는 뷰 모드(스토리 또는 문서) 및 탭(스토리 캔버스 또는 사용자 정의 탭)을 제어할 수 있습니다. 예를 들어:</p>
<ul>
<li>({ tabId }) =<code v-pre>tabId ===</code>my-addon/tab` 이면 ID가 my-addon/tab인 탭을 볼 때 애드온이 표시됩니다.</li>
<li>({ viewMode }) =<code v-pre>viewMode ===</code>story` 이면 캔버스에서 이야기를 볼 때 애드온이 표시됩니다.</li>
<li>({ viewMode }) =<code v-pre>viewMode ===</code>docs` 이면 구성 요소 설명서를 볼 때 애드온이 표시됩니다.</li>
<li>({ tabId, viewMode }) =<code v-pre>!tabId &amp;&amp; viewMode ===</code>story` 이면 캔버스에서 이야기를 보고 사용자 정의 탭이 아닌 경우(즉, tabId === undefined일 때) 애드온이 표시됩니다.</li>
</ul>
<p>시작 스크립트를 실행하여 Storybook을 빌드하고 시작한 후 애드온이 올바르게 등록되어 UI에 표시되는지 확인하세요.</p>
<img src="@source/docs/Tech/2024-04-07-Writeanaddon/img/Writeanaddon_0.png" />
<h3 id="애드온-스타일링" tabindex="-1"><a class="header-anchor" href="#애드온-스타일링" aria-hidden="true">#</a> 애드온 스타일링</h3>
<p>Storybook에서 애드온에 스타일을 적용하는 것은 부작용으로 간주됩니다. 따라서 애드온이 활성화될 때 스타일을 사용하고 비활성화될 때는 제거할 수 있도록 애드온을 수정해야 합니다. 이를 처리하기 위해 두 가지 Storybook 기능인 데코레이터(decorators)와 전역 변수(globals)을 활용할 것입니다. CSS 로직을 처리하기 위해 DOM에서 스타일시트를 주입하고 제거할 수 있는 도우미 함수를 포함해야 합니다. 먼저 다음과 같은 내용으로 도우미 파일을 생성해 보세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> global <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/global'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">clearStyles</span> <span class="token operator">=</span> <span class="token punctuation">(</span>selector<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> selectors <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span> <span class="token operator">?</span> selector <span class="token operator">:</span> <span class="token punctuation">[</span>selector<span class="token punctuation">]</span><span class="token punctuation">;</span>
  selectors<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>clearStyle<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">clearStyle</span> <span class="token operator">=</span> <span class="token punctuation">(</span>input<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> selector <span class="token operator">=</span> <span class="token keyword">typeof</span> input <span class="token operator">===</span> <span class="token string">'string'</span> <span class="token operator">?</span> input <span class="token operator">:</span> input<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> element <span class="token operator">=</span> global<span class="token punctuation">.</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>element <span class="token operator">&amp;&amp;</span> element<span class="token punctuation">.</span>parentElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    element<span class="token punctuation">.</span>parentElement<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">addOutlineStyles</span> <span class="token operator">=</span> <span class="token punctuation">(</span>selector<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> css<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> existingStyle <span class="token operator">=</span> global<span class="token punctuation">.</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>existingStyle<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>existingStyle<span class="token punctuation">.</span>innerHTML <span class="token operator">!==</span> css<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      existingStyle<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> css<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> style <span class="token operator">=</span> global<span class="token punctuation">.</span>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'style'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    style<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">,</span> selector<span class="token punctuation">)</span><span class="token punctuation">;</span>
    style<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> css<span class="token punctuation">;</span>
    global<span class="token punctuation">.</span>document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그 다음, 다음 내용으로 주입할 스타일을 포함하는 파일을 생성하세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> dedent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'ts-dedent'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">outlineCSS</span><span class="token punctuation">(</span>selector<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> dedent<span class="token comment">/* css */</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>selector<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> table {
      outline: 1px solid #00cc99 !important;
    }

    </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>selector<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> caption {
      outline: 1px solid #37ffc4 !important;
    }

    </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>selector<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> thead {
      outline: 1px solid #98daca !important;
    }

    ... (이하 계속)
    
    </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>selector<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> rp {
      outline: 1px solid #803e49 !important;
    }

    </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>selector<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> span {
      outline: 1px solid #cc2643 !important;
    }

    </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>selector<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> br {
      outline: 1px solid #db687d !important;
    }

    </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>selector<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> wbr {
      outline: 1px solid #db175b !important;
    }</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>애드온은 스토리와 문서 모드에서 활성화될 수 있기 때문에, Storybook의 미리보기 iframe의 DOM 노드는 이 두 모드에서 다릅니다. 실제로 Storybook은 문서 모드에서 여러 이야기 미리보기를 한 페이지에 렌더링합니다. 따라서 우리는 스타일이 주입될 DOM 노드에 대한 올바른 셀렉터를 선택하고 해당 셀렉터에 스코프가 적용된 CSS를 보장해야 합니다. 이 메커니즘은 src/withGlobals.ts 파일 내에서 예제로 제공되며, 이를 사용하여 스타일링 및 헬퍼 함수를 애드온 로직에 연결할 것입니다. 파일을 다음과 같이 업데이트하세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Renderer<span class="token punctuation">,</span> PartialStoryFn <span class="token keyword">as</span> StoryFunction<span class="token punctuation">,</span> StoryContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/types'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useMemo<span class="token punctuation">,</span> useGlobals <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/preview-api'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">PARAM_KEY</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./constants'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> clearStyles<span class="token punctuation">,</span> addOutlineStyles <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./helpers'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> outlineCSS <span class="token keyword">from</span> <span class="token string">'./outlineCSS'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">withGlobals</span> <span class="token operator">=</span> <span class="token punctuation">(</span>StoryFn<span class="token operator">:</span> StoryFunction<span class="token operator">&lt;</span>Renderer<span class="token operator">></span><span class="token punctuation">,</span> context<span class="token operator">:</span> StoryContext<span class="token operator">&lt;</span>Renderer<span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>globals<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useGlobals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> isActive <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">'true'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>globals<span class="token punctuation">[</span><span class="token constant">PARAM_KEY</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 문서 패널에서 애드온을 사용 중인지 확인</span>
  <span class="token keyword">const</span> isInDocs <span class="token operator">=</span> context<span class="token punctuation">.</span>viewMode <span class="token operator">===</span> <span class="token string">'docs'</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> outlineStyles <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> selector <span class="token operator">=</span> isInDocs <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">#anchor--</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>context<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> .docs-story</span><span class="token template-punctuation string">`</span></span> <span class="token operator">:</span> <span class="token string">'.sb-show-main'</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token function">outlineCSS</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>context<span class="token punctuation">.</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> selectorId <span class="token operator">=</span> isInDocs <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">my-addon-docs-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>context<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">my-addon</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isActive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearStyles</span><span class="token punctuation">(</span>selectorId<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">addOutlineStyles</span><span class="token punctuation">(</span>selectorId<span class="token punctuation">,</span> outlineStyles<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">clearStyles</span><span class="token punctuation">(</span>selectorId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>isActive<span class="token punctuation">,</span> outlineStyles<span class="token punctuation">,</span> context<span class="token punctuation">.</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token function">StoryFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="패키징과-게시" tabindex="-1"><a class="header-anchor" href="#패키징과-게시" aria-hidden="true">#</a> 패키징과 게시</h2>
<p>Storybook 애드온은 자바스크립트 생태계의 대부분 패키지와 유사하게 NPM 패키지로 배포됩니다. 그러나 NPM에 발행되고 통합 카탈로그에서 검색될 수 있도록 충족시켜야 하는 특정 기준이 있습니다:```</p>
<ul>
<li>transpiled 코드를 포함하는 dist 폴더를 가지고 있습니다.</li>
<li>패키지.json 파일에는 다음을 선언합니다:
<ul>
<li>모듈 관련 정보</li>
<li>통합 카탈로그 메타데이터</li>
</ul>
</li>
<li>모듈 관련 정보</li>
<li>통합 카탈로그 메타데이터</li>
</ul>
<h3 id="모듈-메타데이터" tabindex="-1"><a class="header-anchor" href="#모듈-메타데이터" aria-hidden="true">#</a> 모듈 메타데이터</h3>
<p>메타데이터의 첫 번째 카테고리는 애드온 자체와 관련된 것입니다. 이에는 모듈에 대한 entry, 애드온이 발행될 때 포함할 파일 및 Storybook과 통합할 때 필요한 구성이 포함됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"exports"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"."</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"types"</span><span class="token operator">:</span> <span class="token string">"./dist/index.d.ts"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"node"</span><span class="token operator">:</span> <span class="token string">"./dist/index.js"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"require"</span><span class="token operator">:</span> <span class="token string">"./dist/index.js"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"import"</span><span class="token operator">:</span> <span class="token string">"./dist/index.mjs"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"./manager"</span><span class="token operator">:</span> <span class="token string">"./dist/manager.mjs"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"./preview"</span><span class="token operator">:</span> <span class="token string">"./dist/preview.mjs"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"./package.json"</span><span class="token operator">:</span> <span class="token string">"./package.json"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"main"</span><span class="token operator">:</span> <span class="token string">"dist/index.js"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"module"</span><span class="token operator">:</span> <span class="token string">"dist/index.mjs"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"types"</span><span class="token operator">:</span> <span class="token string">"dist/index.d.ts"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"files"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"dist/**/*"</span><span class="token punctuation">,</span> <span class="token string">"README.md"</span><span class="token punctuation">,</span> <span class="token string">"*.js"</span><span class="token punctuation">,</span> <span class="token string">"*.d.ts"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"@storybook/blocks"</span><span class="token operator">:</span> <span class="token string">"^7.0.0"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"@storybook/components"</span><span class="token operator">:</span> <span class="token string">"^7.0.0"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"@storybook/core-events"</span><span class="token operator">:</span> <span class="token string">"^7.0.0"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"@storybook/manager-api"</span><span class="token operator">:</span> <span class="token string">"^7.0.0"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"@storybook/preview-api"</span><span class="token operator">:</span> <span class="token string">"^7.0.0"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"@storybook/theming"</span><span class="token operator">:</span> <span class="token string">"^7.0.0"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"@storybook/types"</span><span class="token operator">:</span> <span class="token string">"^7.0.0"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"bundler"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"exportEntries"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"src/index.ts"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"managerEntries"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"src/manager.ts"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"previewEntries"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"src/preview.ts"</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="통합-카탈로그-메타데이터" tabindex="-1"><a class="header-anchor" href="#통합-카탈로그-메타데이터" aria-hidden="true">#</a> 통합 카탈로그 메타데이터</h3>
<p>두 번째 메타데이터 카테고리는 통합 카탈로그와 관련이 있습니다. 이 정보의 대부분은 이미 애드온 킷에 의해 미리 구성되어 있습니다. 그러나 디스플레이 이름, 아이콘 및 프레임워크와 같은 항목들은 카탈로그에 표시되기 위해 스토리북 속성을 통해 구성되어야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"my-storybook-addon"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"description"</span><span class="token operator">:</span> <span class="token string">"나의 첫 스토리북 애드온"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"author"</span><span class="token operator">:</span> <span class="token string">"당신의 이름"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"storybook"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"displayName"</span><span class="token operator">:</span> <span class="token string">"나의 스토리북 애드온"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"unsupportedFrameworks"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"react-native"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"icon"</span><span class="token operator">:</span> <span class="token string">"https://yoursite.com/link-to-your-icon.png"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"storybook-addons"</span><span class="token punctuation">,</span> <span class="token string">"외형"</span><span class="token punctuation">,</span> <span class="token string">"스타일"</span><span class="token punctuation">,</span> <span class="token string">"CSS"</span><span class="token punctuation">,</span> <span class="token string">"레이아웃"</span><span class="token punctuation">,</span> <span class="token string">"디버그"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>주목해야 할 중요한 항목은 키워드 속성으로, 카탈로그의 태그 시스템에 매핑됩니다. storybook-addons를 추가하면 애드온이 카탈로그에서 애드온을 검색할 때 발견되도록 보장합니다. 나머지 키워드들은 애드온의 검색 및 분류에 도움을 줍니다.</p>
<h3 id="npm에-발행하기" tabindex="-1"><a class="header-anchor" href="#npm에-발행하기" aria-hidden="true">#</a> NPM에 발행하기</h3>
<p>애드온을 NPM에 발행할 준비가 되었다면, Addon Kit은 릴리즈 관리를 위한 Auto 패키지로 미리 구성되어 있습니다. 이 패키지는 자동으로 변경 로그를 생성하고 패키지를 NPM과 GitHub에 업로드합니다. 따라서 두 곳에 액세스를 구성해야 합니다.</p>
<ul>
<li>npm adduser를 사용하여 인증</li>
<li>읽기 및 게시 권한이 있는 액세스 토큰 생성</li>
<li>repo 및 workflow 범위 권한이 있는 개인 액세스 토큰 생성</li>
<li>프로젝트 루트에 .env 파일을 만들어 다음을 추가합니다:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">GH_TOKEN</span><span class="token operator">=</span>깃허브에서 얻은 값
<span class="token constant">NPM_TOKEN</span><span class="token operator">=</span>npm에서 얻은 값
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>다음으로, GitHub에서 레이블을 만들기 위해 다음 명령을 실행해보세요. 이러한 레이블을 사용하여 패키지 변경 사항을 분류할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx auto create<span class="token operator">-</span>labels
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>마지막으로, 애드온을 위한 릴리즈를 만들기 위해 다음 명령을 실행해주세요. 이 명령은 애드온 코드를 빌드하고 패키징하며, 버전을 업데이트하고, 릴리즈를 GitHub 및 npm에 푸시하고 변경 사항 로그를 생성합니다.</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npm run release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="ci-자동화" tabindex="-1"><a class="header-anchor" href="#ci-자동화" aria-hidden="true">#</a> CI 자동화</h3>
<p>기본적으로 Addon Kit은 GitHub Actions workflow로 미리 구성되어 있어 릴리즈 관리 프로세스를 자동화할 수 있습니다. 이를 통해 패키지가 항상 최신 변경 사항에 맞추어 업데이트되고 변경 로그가 적절히 업데이트됩니다. 그러나 NPM 및 GitHub 토큰을 사용하여 패키지를 성공적으로 게시하려면 추가 구성이 필요합니다. 귀하의 저장소에서 설정 탭을 클릭한 다음 시크릿 및 변수 드롭다운을 클릭한 후 Actions 항목을 클릭하세요. 다음과 같은 화면이 표시됩니다:</p>
<img src="@source/docs/Tech/2024-04-07-Writeanaddon/img/Writeanaddon_1.png" />
<p>그런 다음 New repository secret를 클릭하여 NPM_TOKEN이라고 명명하고 이전에 생성한 토큰을 붙여넣으세요. 기본 브랜치로 풀 리퀘스트를 병합할 때마다 workflow가 실행되어 새 릴리스를 게시하며, 버전 번호를 자동으로 증가시키고 변경 로그를 업데이트합니다.</p>
<p>Storybook 애드온 생태계에 대해 더 알아보세요</p>
<ul>
<li>다른 유형의 애드온을 위한 애드온 유형</li>
<li>애드온 개발 기초를 위한 애드온 작성</li>
<li>프리셋 개발을 위한 프리셋</li>
<li>요구 사항 및 사용 가능한 레시피에 대한 통합 카탈로그</li>
<li>사용 가능한 API에 대해 배울 수 있는 API 참조</li>
</ul>
</div></template>
