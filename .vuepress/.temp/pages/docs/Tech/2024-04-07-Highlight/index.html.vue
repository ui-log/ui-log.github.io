<template><div><p>스토리북의 하이라이트 애드온은 컴포넌트를 시각적으로 디버깅하는 데 도움이 되는 유용한 도구입니다. 이 애드온을 독립 애드온으로 사용하거나 접근성 애드온과 같은 다른 애드온을 향상시킬 때 특정 DOM 노드를 강조할 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-Highlight/img/Highlight_0.png" alt="하이라이트 예시"></p>
<h2 id="dom-요소-강조" tabindex="-1"><a class="header-anchor" href="#dom-요소-강조" aria-hidden="true">#</a> DOM 요소 강조</h2>
<p>애드온을 사용하여 DOM 요소를 강조하려면 스토리나 애드온 내에서 HIGHLIGHT 이벤트를 발생해야 합니다. 이벤트 페이로드는 강조할 요소와 매치되는 선택자 배열이 포함된 elements 속성을 할당해야 합니다. 예를 들면:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useChannel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/preview-api'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">HIGHLIGHT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/addon-highlight'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./MyComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Highlighted<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  decorators<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">(</span>storyFn<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">useChannel</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token constant">HIGHLIGHT</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        elements<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'h2'</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'.storybook-button'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token function">storyFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="강조가-표시된-요소-초기화" tabindex="-1"><a class="header-anchor" href="#강조가-표시된-요소-초기화" aria-hidden="true">#</a> 강조가 표시된 요소 초기화</h3>
<p>기본적으로 Storybook은 이야기 간 전환 시 자동으로 강조된 요소를 제거합니다. 그러나 수동으로 지우는 경우, 이야기나 애드온 내부에서 RESET_HIGHLIGHT 이벤트를 발생시킬 수 있습니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useChannel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/preview-api'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">HIGHLIGHT</span><span class="token punctuation">,</span> <span class="token constant">RESET_HIGHLIGHT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/addon-highlight'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./MyComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> ResetHighlight<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  decorators<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">(</span>storyFn<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">useChannel</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token constant">RESET_HIGHLIGHT</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//👈 이전에 강조된 요소 제거</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token constant">HIGHLIGHT</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        elements<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'header'</span><span class="token punctuation">,</span> <span class="token string">'section'</span><span class="token punctuation">,</span> <span class="token string">'footer'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token function">storyFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="스타일-사용자-정의" tabindex="-1"><a class="header-anchor" href="#스타일-사용자-정의" aria-hidden="true">#</a> 스타일 사용자 정의</h2>
<p>기본적으로 애드온은 이야기에 활성화된 강조된 요소에 표준 스타일을 적용합니다. 그러나 페이로드 객체를 확장하고 색상 및/또는 스타일 속성을 제공함으로써 사용자 지정 스타일을 활성화할 수 있습니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useChannel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/preview-api'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">HIGHLIGHT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/addon-highlight'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./MyComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> StyledHighlight<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  decorators<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">(</span>storyFn<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">useChannel</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token constant">HIGHLIGHT</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        elements<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'h2'</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'.storybook-button'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        color<span class="token operator">:</span> <span class="token string">'blue'</span><span class="token punctuation">,</span>
        style<span class="token operator">:</span> <span class="token string">'double'</span><span class="token punctuation">,</span> <span class="token comment">// 'dotted' | 'dashed' | 'solid' | 'double'</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token function">storyFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<h3 id="매개변수" tabindex="-1"><a class="header-anchor" href="#매개변수" aria-hidden="true">#</a> 매개변수</h3>
<p>이 애드온은 하이라이트 네임스페이스 하에 다음과 같은 매개변수를 Storybook에 추가합니다:</p>
<h4 id="disable" tabindex="-1"><a class="header-anchor" href="#disable" aria-hidden="true">#</a> disable</h4>
<p>유형: 불린(boolean)</p>
<p>이 애드온의 동작을 비활성화하세요. 전체 Storybook에서 이 애드온을 비활성화하려면 addon-essentials을 등록할 때 해야합니다. 더 많은 정보는 essential addon의 문서를 참조해주세요.</p>
<p>이 매개변수는 더 구체적인 수준에서 재정의를 허용하는 데 가장 유용합니다. 예를 들어, 이 매개변수를 프로젝트 수준에서 true로 설정하면, 메타(컴포넌트) 또는 스토리 수준에서 false로 설정하여 다시 활성화할 수 있습니다.</p>
<h3 id="내보내기" tabindex="-1"><a class="header-anchor" href="#내보내기" aria-hidden="true">#</a> 내보내기</h3>
<p>이 애드온은 Storybook에 다음과 같은 내보내기를 제공합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">HIGHLIGHT</span><span class="token punctuation">,</span> <span class="token constant">RESET_HIGHLIGHT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/addon-highlight'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="highlight" tabindex="-1"><a class="header-anchor" href="#highlight" aria-hidden="true">#</a> HIGHLIGHT</h4>
<p>타입: 문자열</p>
<p>DOM 요소를 강조하는 이벤트입니다. 이벤트 페이로드는 강조하려는 요소에 매칭되는 선택기 배열로 할당된 elements 속성을 포함해야 합니다. 사용 예시는 위에서 확인하세요.</p>
<h4 id="reset-highlight" tabindex="-1"><a class="header-anchor" href="#reset-highlight" aria-hidden="true">#</a> RESET_HIGHLIGHT</h4>
<p>유형: 문자열</p>
<p>하이라이트된 요소에서 모든 하이라이트를 지우는 이벤트입니다. 위의 사용 예시를 확인하세요.</p>
</div></template>
