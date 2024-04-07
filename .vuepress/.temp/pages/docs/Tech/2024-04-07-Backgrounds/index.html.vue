<template><div><p>백그라운드 툴바 애드온을 통해 스토리가 UI에서 랜더되는 배경색을 설정할 수 있습니다:</p>
<video autoplay playsinline loop>
  <source src="@source/docs/Tech/2024-04-07-Backgrounds/img/Backgrounds_0.mp4" type="video/mp4">
</video>
<h2 id="설정" tabindex="-1"><a class="header-anchor" href="#설정" aria-hidden="true">#</a> 설정</h2>
<p>기본적으로 백그라운드 툴바에는 밝은 배경과 어두운 배경이 포함되어 있습니다.</p>
<p>하지만 여기서 제공하는 배경색에 국한되지 않습니다. .storybook/preview.js 파일의 parameters.backgrounds 매개변수를 사용하여 자체 색상 세트를 구성할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크에 맞게 your-framework을(를) 해당 프레임워크 (예: react, vue3)로 대체하세요</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    backgrounds<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'twitter'</span><span class="token punctuation">,</span>
      values<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">'twitter'</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> <span class="token string">'#00aced'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">'facebook'</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> <span class="token string">'#3b5998'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>default 속성을 정의하면 애드온이 모든 스토리에 적용합니다. 그렇지 않으면 해당 색상이 사용 가능한 색상으로만 표시됩니다.</p>
<h3 id="구성-확장하기" tabindex="-1"><a class="header-anchor" href="#구성-확장하기" aria-hidden="true">#</a> 구성 확장하기</h3>
<p>파라미터 상속을 통해 각 컴포넌트 또는 스토리마다 배경을 정의할 수도 있어요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// your-framework를 사용하는 프레임워크 이름으로 바꿔주세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token comment">// Button 모든 스토리에 일괄적으로 배경을 적용하려면:</span>
<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    backgrounds<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'twitter'</span><span class="token punctuation">,</span>
      values<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'twitter'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'#00aced'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'facebook'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'#3b5998'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>특정 스토리에 대해 다른 기본값을 설정하려면 배경 파라미터 중 하나를 덮어쓸 수도 있어요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// Replace your-framework with the name of your framework</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Large<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    backgrounds<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'facebook'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="배경-비활성화" tabindex="-1"><a class="header-anchor" href="#배경-비활성화" aria-hidden="true">#</a> 배경 비활성화</h3>
<p>이야기에서 배경을 비활성화하고 싶다면 배경 매개변수를 다음과 같이 설정하여 수행할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 여러분의 프레임워크 이름으로 대체하세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Large<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    backgrounds<span class="token operator">:</span> <span class="token punctuation">{</span> disable<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="그리드" tabindex="-1"><a class="header-anchor" href="#그리드" aria-hidden="true">#</a> 그리드</h2>
<p>배경 툴바에는 그리드 선택기도 포함되어 있어요. 이렇게 하면 구성 요소가 정렬되었는지 빠르게 확인할 수 있어요.</p>
<p>시작하기 위해 추가 구성이 필요하지 않아요. 하지만 이 속성들은 완전히 사용자 정의할 수 있어요. 속성 중 어떤 것에도 값을 제공하지 않으면 다음과 같은 기본값을 사용해요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 'your-framework'을 사용하는 프레임워크의 이름으로 바꾸세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token comment">// Button 스토리에 모든 배경을 적용하려면:</span>
<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    backgrounds<span class="token operator">:</span> <span class="token punctuation">{</span>
      grid<span class="token operator">:</span> <span class="token punctuation">{</span>
        cellSize<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        opacity<span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
        cellAmount<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        offsetX<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token comment">// 스토리가 'fullscreen' 레이아웃인 경우 기본값은 0이고, 'padded' 레이아웃인 경우 16</span>
        offsetY<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token comment">// 스토리가 'fullscreen' 레이아웃인 경우 기본값은 0이고, 'padded' 레이아웃인 경우 16</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="그리드-비활성화" tabindex="-1"><a class="header-anchor" href="#그리드-비활성화" aria-hidden="true">#</a> 그리드 비활성화</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// your-framework을 사용하시는 framework 이름으로 변경해주세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Large<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    backgrounds<span class="token operator">:</span> <span class="token punctuation">{</span>
      grid<span class="token operator">:</span> <span class="token punctuation">{</span>
        disable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3>
<p>이 애드온은 '배경' 네임스페이스 아래 다음 매개변수를 Storybook에 추가합니다:</p>
<h4 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> default</h4>
<p>유형: 문자열</p>
<p>기본 배경색입니다. 사용 가능한 색상 중 name 속성과 일치해야 합니다.</p>
<h4 id="비활성화" tabindex="-1"><a class="header-anchor" href="#비활성화" aria-hidden="true">#</a> 비활성화</h4>
<p>유형: 부울</p>
<p>이 애드온의 동작을 비활성화합니다. 전체 스토리북에서이 애드온을 비활성화하려는 경우, addon-essentials를 등록할 때 그렇게해야합니다. 자세한 정보는 essential 애드온의 문서를 참조하십시오.</p>
<p>이 매개 변수는 더 구체적인 수준에서 재정의를 허용하는 데 가장 유용합니다. 예를 들어, 프로젝트 수준에서이 매개 변수가 true로 설정된 경우 메타(컴포넌트) 또는 스토리 수준에서 false로 설정하여 다시 활성화 할 수 있습니다.</p>
<h4 id="격자" tabindex="-1"><a class="header-anchor" href="#격자" aria-hidden="true">#</a> 격자</h4>
<p>유형:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  cellAmount<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  cellSize<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  disable<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">offsetX</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">offsetY</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  opacity<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>유형: 숫자</p>
<p>기본값: 5</p>
<p>소 그리드 라인의 크기를 지정하세요.</p>
<p>유형: 숫자</p>
<p>기본값: 20</p>
<p>주요 그리드 선의 크기를 지정하실 수 있습니다.</p>
<p>유형: 부울</p>
<p>그리드를 비활성화합니다.</p>
<p>유형: 숫자</p>
<p>기본값: 스토리 레이아웃이 <code v-pre>fullscreen</code>이면 0, <code v-pre>padded</code>이면 16</p>
<p>그리드의 가로 오프셋.</p>
<p>타입: 숫자</p>
<p>기본값: 스토리 레이아웃이 <code v-pre>fullscreen</code>이면 0, <code v-pre>padded</code>이면 16</p>
<p>그리드의 수직 오프셋.</p>
<p>유형: 숫자</p>
<p>기본값: 0.5</p>
<p>그리드 선의 투명도.</p>
<h4 id="값" tabindex="-1"><a class="header-anchor" href="#값" aria-hidden="true">#</a> 값</h4>
<p>유형: { 이름: 문자열; 값: 문자열 }[]</p>
<p>사용 가능한 배경색. 사용 예시는 위를 참조하세요.</p>
</div></template>
