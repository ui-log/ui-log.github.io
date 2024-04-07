<template><div><p>Storybook의 UI 레이아웃을 제어하려면 .storybook/manager.js 파일에서 addons.setConfig를 사용할 수 있습니다:</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음 표에서 API 값의 사용 방법에 대해 자세히 설명합니다:</p>
<p>다음 옵션은 sidebar 네임스페이스 하에 구성할 수 있습니다:</p>
<p>다음 옵션들은 툴바 네임스페이스 하에 구성할 수 있습니다:</p>
<h2 id="url-매개변수를-통해-구성하기" tabindex="-1"><a class="header-anchor" href="#url-매개변수를-통해-구성하기" aria-hidden="true">#</a> URL 매개변수를 통해 구성하기</h2>
<p>일부 기능을 구성하는 데 URL 매개변수를 사용할 수 있습니다:</p>
</div></template>
