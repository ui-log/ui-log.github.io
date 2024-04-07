<template><div><p>각 Storybook 애드온은 UI 기반 또는 프리셋 두 가지 일반 범주로 분류됩니다. 각 종류의 애드온 기능이 여기에 문서화되어 있습니다. 애드온을 만들 때 참고하세요.</p>
<h2 id="ui-기반-애드온" tabindex="-1"><a class="header-anchor" href="#ui-기반-애드온" aria-hidden="true">#</a> UI 기반 애드온</h2>
<p>UI 기반 애드온은 다음 요소로 Storybook의 UI를 사용자 정의할 수 있습니다.</p>
<h3 id="패널" tabindex="-1"><a class="header-anchor" href="#패널" aria-hidden="true">#</a> 패널</h3>
<p>패널 애드온을 사용하면 Storybook의 애드온 패널에 자체 UI를 추가할 수 있어요. 이것은 생태계에서 가장 일반적인 애드온 유형입니다. 예를 들어, 공식 @storybook/actions 및 @storybook/a11y가 이 패턴을 사용합니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-Typesofaddons/img/Typesofaddons_0.png" alt="Typesofaddons_0.png"></p>
<p>다음 보일러플레이트 코드를 사용하여 Storybook의 UI에 새로운 패널을 추가하세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> AddonPanel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/components'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useGlobals<span class="token punctuation">,</span> addons<span class="token punctuation">,</span> types <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/manager-api'</span><span class="token punctuation">;</span>

addons<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'my/panel'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  addons<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'my-panel-addon/panel'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'Example Storybook panel'</span><span class="token punctuation">,</span>
    <span class="token comment">//👇 Storybook에서 UI 요소의 유형을 설정합니다</span>
    type<span class="token operator">:</span> types<span class="token punctuation">.</span><span class="token constant">PANEL</span><span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> active <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>AddonPanel active<span class="token operator">=</span><span class="token punctuation">{</span>active<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>Storybook의 패널 애드온입니다<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>AddonPanel<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="툴바" tabindex="-1"><a class="header-anchor" href="#툴바" aria-hidden="true">#</a> 툴바</h3>
<p>툴바 애드온을 사용하면 Storybook의 툴바에 사용자 지정 도구를 추가할 수 있습니다. 예를 들어, 공식 @storybook/backgrounds 및 @storybook/addon-outline이 이 패턴을 사용합니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-Typesofaddons/img/Typesofaddons_1.png" alt="Types of addons"></p>
<p>다음 보일러플레이트 코드를 사용하여 Storybook의 툴바에 새 버튼을 추가할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> addons<span class="token punctuation">,</span> types <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/manager-api'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IconButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/components'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> OutlineIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/icons'</span><span class="token punctuation">;</span>

addons<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'my-addon'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  addons<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'my-addon/toolbar'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'Example Storybook toolbar'</span><span class="token punctuation">,</span>
    <span class="token comment">//👇 스토리북에서 UI 요소의 유형을 설정합니다.</span>
    type<span class="token operator">:</span> types<span class="token punctuation">.</span><span class="token constant">TOOL</span><span class="token punctuation">,</span>
    <span class="token comment">//👇 이야기 캔버스를 보고 있는 경우 툴바 UI 요소를 표시합니다.</span>
    <span class="token function-variable function">match</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> tabId<span class="token punctuation">,</span> viewMode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span>tabId <span class="token operator">&amp;&amp;</span> viewMode <span class="token operator">===</span> <span class="token string">'story'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> active <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>IconButton active<span class="token operator">=</span><span class="token punctuation">{</span>active<span class="token punctuation">}</span> title<span class="token operator">=</span><span class="token string">"스토리북 툴바 보이기"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>OutlineIcon <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>IconButton<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="탭" tabindex="-1"><a class="header-anchor" href="#탭" aria-hidden="true">#</a> 탭</h3>
<p>탭 애드온을 사용하면 스토리북에서 사용자 지정 탭을 만들 수 있습니다. 예를 들어, 공식 @storybook/addon-docs는 이러한 패턴을 사용합니다.</p>
<img src="@source/docs/Tech/2024-04-07-Typesofaddons/img/Typesofaddons_2.png" />
```
<p>이 보일러플레이트 코드를 사용하여 Storybook의 UI에 새로운 탭을 추가하세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> addons<span class="token punctuation">,</span> types <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/manager-api'</span><span class="token punctuation">;</span>

addons<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'my-addon'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  addons<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'my-addon/tab'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> types<span class="token punctuation">.</span><span class="token constant">TAB</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">'Example Storybook tab'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>Storybook에서 탭 형식의 애드온입니다<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="프리셋-애드온" tabindex="-1"><a class="header-anchor" href="#프리셋-애드온" aria-hidden="true">#</a> 프리셋 애드온</h2>
<p>Storybook 프리셋 애드온은 babel, webpack 및 애드온 구성의 그룹화된 컬렉션으로, Storybook과 다른 기술을 통합하는 데 사용됩니다. 예를 들어 공식 프리셋-create-react-app이 있습니다.</p>
<p>이 보일러플레이트 코드를 사용하여 나만의 프리셋 애드온을 작성할 때 참고하세요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">managerWebpack</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>config<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 여기서 config 업데이트</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">webpackFinal</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>config<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">babel</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>config<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook 애드온 생태계에 대해 더 알아보세요.</p>
<ul>
<li>다른 종류의 애드온 유형</li>
<li>애드온 개발의 기본을 위한 애드온 작성</li>
<li>프리셋 개발을 위한 프리셋</li>
<li>요구 사항 및 사용 가능한 레시피에 대한 통합 카탈로그</li>
<li>사용 가능한 API에 대해 알아보는 API 참조 페이지</li>
</ul>
</div></template>
