<template><div><p>컴포넌트 스토리 포맷 (CSF)은 이야기를 작성하는 권장 방법입니다. 이것은 ES6 모듈을 기반으로 한 오픈 표준으로, 스토리북을 넘어서 사용할 수 있습니다.</p>
<p>CSF에서 이야기와 컴포넌트 메타데이터는 ES 모듈로 정의됩니다. 각 컴포넌트 스토리 파일은 필수적인 기본 내보내기(default export)와 하나 이상의 이름 있는 내보내기(named exports)로 구성됩니다.</p>
<h2 id="기본-내보내기" tabindex="-1"><a class="header-anchor" href="#기본-내보내기" aria-hidden="true">#</a> 기본 내보내기</h2>
<p>기본 내보내기는 컴포넌트에 대한 메타데이터를 정의합니다. 이는 컴포넌트 자체, 제목(UI 스토리 계층 구조에서 표시될 위치), 데코레이터 및 매개변수를 포함합니다.</p>
<p>컴포넌트 필드는 필수이며, 애드온들이 자동 프롭 테이블 생성 및 다른 컴포넌트 메타데이터 표시에 사용합니다. 제목 필드는 선택 사항이며 고유해야 합니다(즉, 파일 간에 재사용되지 않아야 합니다).</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 'your-framework'을 사용 중인 프레임워크의 이름으로 교체하십시오</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./MyComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 👇 제목 프롭은 선택 사항입니다.
   * 자동 제목 생성 방법에 대해 알아보려면 https://storybook.js.org/docs/configure/#configure-story-loading을 참조하세요
   */</span>
  title<span class="token operator">:</span> <span class="token string">'Path/To/MyComponent'</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
  decorators<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token operator">...</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>더 많은 예제를 보려면 스토리 작성을 참조하세요.</p>
<h2 id="이름-지정된-스토리-내보내기" tabindex="-1"><a class="header-anchor" href="#이름-지정된-스토리-내보내기" aria-hidden="true">#</a> 이름 지정된 스토리 내보내기</h2>
<p>CSF를 사용하면 파일의 각 이름이 지정된 내보내기는 기본적으로 스토리 객체를 나타냅니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./MyComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Basic<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> WithProp<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>MyComponent prop<span class="token operator">=</span><span class="token string">"value"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>내보낸 식별자들은 Lodash의 startCase 함수를 사용하여 &quot;start case&quot;로 변환됩니다. 예를 들어:</p>
<p>우리는 모든 내보내기 이름이 대문자로 시작하도록 권장합니다.</p>
<p>Story 객체는 이야기 수준의 장식자와 매개변수를 정의하기 위해 몇 가지 다른 필드로 주석 처리할 수 있습니다. 또한 이야기의 이름을 정의하기 위해 사용할 수도 있습니다.</p>
<p>Storybook의 이름 설정 요소는 특정 상황에서 유용합니다. 일반적으로 특수 문자나 JavaScript 제한 단어가 포함된 이름을 사용할 때 사용됩니다. 지정되지 않은 경우, Storybook은 이름으로 내보내기한 값을 기본값으로 사용합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 귀하의 프레임워크의 이름으로 대체</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./MyComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Simple<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  decorators<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">'너무 간단해요!'</span><span class="token punctuation">,</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="args-이야기-입력" tabindex="-1"><a class="header-anchor" href="#args-이야기-입력" aria-hidden="true">#</a> Args 이야기 입력</h2>
<p>SB 6.0부터는 스토리가 Args라고 불리는 명명된 입력을 받습니다. Args는 Storybook 및 해당 애드온에 제공되는(그리고 업데이트되는 경우도 있는) 동적 데이터입니다.</p>
<p>Storybook의 &quot;Button&quot; 예제를 고려해보세요. 클릭 이벤트를 로깅하는 텍스트 버튼의 Args를 사용하는 방법을 살펴봅시다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> action <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/addon-actions'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Basic<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  args<span class="token operator">:</span> <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'Hello'</span><span class="token punctuation">,</span>
    onClick<span class="token operator">:</span> <span class="token function">action</span><span class="token punctuation">(</span><span class="token string">'clicked'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 같은 예제를 args를 사용하여 다시 작성해 봅시다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> action <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/addon-actions'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Text <span class="token operator">=</span> <span class="token punctuation">{</span>
  args<span class="token operator">:</span> <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'안녕하세요'</span><span class="token punctuation">,</span>
    onClick<span class="token operator">:</span> <span class="token function">action</span><span class="token punctuation">(</span><span class="token string">'클릭됨'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> label<span class="token punctuation">,</span> onClick <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>Button label<span class="token operator">=</span><span class="token punctuation">{</span>label<span class="token punctuation">}</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>더 간단히:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Text<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  args<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 버전들은 no-args 버전보다 짧고 작성하기 쉬우며, actions 애드온에 특정하게 의존하지 않아서 더 이식성이 높습니다.</p>
<p>더 많은 정보를 원하시면 Docs와 Actions 설정과 관련된 문서를 참조해주세요.</p>
<h2 id="플레이-함수" tabindex="-1"><a class="header-anchor" href="#플레이-함수" aria-hidden="true">#</a> 플레이 함수</h2>
<p>Storybook의 플레이 함수는 이야기가 UI에 렌더링될 때 실행되는 작은 코드 조각들입니다. 이들은 그 외에는 불가능하거나 사용자 개입이 필요한 테스트 케이스를 도와주는 편리한 도우미 메서드입니다.</p>
<p>플레이 함수를 사용하는 좋은 예는 폼 컴포넌트입니다. 이전 Storybook 버전에서는 이야기 집합을 작성하고 구성 요소와 상호 작용하여 유효성을 검사해야 했습니다. Storybook의 플레이 함수를 사용하면 다음과 같은 이야기를 작성할 수 있습니다:</p>
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
 * 자세한 내용은 https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas 를 확인해보세요. canvasElement를 사용하여 DOM을 쿼리하는 방법에 대해 알아보세요.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> FilledForm<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">play</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> canvasElement <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token function">within</span><span class="token punctuation">(</span>canvasElement<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 👇 컴포넌트와 상호작용 모방</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>canvas<span class="token punctuation">.</span><span class="token function">getByTestId</span><span class="token punctuation">(</span><span class="token string">'email'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'email@provider.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>canvas<span class="token punctuation">.</span><span class="token function">getByTestId</span><span class="token punctuation">(</span><span class="token string">'password'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'a-random-password'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 자세한 내용은 https://storybook.js.org/docs/essentials/actions#automatically-matching-args 를 참고하여 Actions 패널에서 로깅 설정하는 방법을 익히세요.</span>
    <span class="token keyword">await</span> userEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>canvas<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">'button'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 👇 DOM 구조 확인</span>
    <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>
      canvas<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span>
        <span class="token string">'Everything is perfect. Your account is ready and we should probably get you started!'</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>스토리가 UI에 렌더링될 때, Storybook은 play 함수에 정의된 각 단계를 실행하고 사용자 상호작용 없이 단언문을 실행합니다.</p>
<h2 id="사용자-정의-렌더-함수" tabindex="-1"><a class="header-anchor" href="#사용자-정의-렌더-함수" aria-hidden="true">#</a> 사용자 정의 렌더 함수</h2>
<p>Storybook 6.4부터 자바스크립트 객체로 스토리를 작성할 수 있어서, 컴포넌트를 테스트하기 위해 생성해야 하는 보일러플레이트 코드를 줄이고 기능성과 사용성을 개선할 수 있습니다. 렌더 함수는 스토리가 렌더링되는 방식에 대한 추가적인 제어를 제공하는 유용한 방법입니다. 예를 들어, 객체로 스토리를 작성하고 컴포넌트를 어떻게 렌더링해야 하는지 지정하고 싶다면 다음과 같이 작성할 수 있습니다.```</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Layout'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./MyComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token comment">// This story uses a render function to fully control how the component renders.</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Example<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Layout<span class="token operator">></span>
      <span class="token operator">&lt;</span>header<span class="token operator">></span>
        <span class="token operator">&lt;</span>h1<span class="token operator">></span>Example<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">></span>
      <span class="token operator">&lt;</span>article<span class="token operator">></span>
        <span class="token operator">&lt;</span>MyComponent <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>article<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook이 이 스토리를로드 할 때 렌더링 함수의 존재를 감지하고 정의된 내용에 따라 컴포넌트 렌더링을 적절하게 조정합니다.</p>
<h2 id="storybook-내보내기-대-이름-처리" tabindex="-1"><a class="header-anchor" href="#storybook-내보내기-대-이름-처리" aria-hidden="true">#</a> Storybook 내보내기 대 이름 처리</h2>
<p>Storybook은 명명된 내보내기와 이름 옵션을 약간 다르게 처리합니다. 언제 어느 것을 사용해야 합니까?</p>
<p>Storybook은 항상 명명된 내보내기를 사용하여 이야기 ID와 URL을 결정합니다.</p>
<p>name 옵션을 지정하면 UI에서 이야기 표시 이름으로 사용됩니다. 그렇지 않으면 기본적으로 Storybook의 storyNameFromExport 및 lodash.startCase 함수를 통해 처리된 명명된 내보내기로 설정됩니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'should format CSF exports with sensible defaults'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> testCases <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'Name'</span><span class="token punctuation">,</span>
    someName<span class="token operator">:</span> <span class="token string">'Some Name'</span><span class="token punctuation">,</span>
    someNAME<span class="token operator">:</span> <span class="token string">'Some NAME'</span><span class="token punctuation">,</span>
    some_custom_NAME<span class="token operator">:</span> <span class="token string">'Some Custom NAME'</span><span class="token punctuation">,</span>
    someName1234<span class="token operator">:</span> <span class="token string">'Some Name 1234'</span><span class="token punctuation">,</span>
    someName1_2_3_4<span class="token operator">:</span> <span class="token string">'Some Name 1 2 3 4'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>testCases<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span>key<span class="token punctuation">,</span> val<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">storyNameFromExport</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이야기의 이름을 바꾸고 싶을 때는 CSF 내보내기를 이름을 바꾸세요. 그러면 이야기의 이름뿐만 아니라 이야기의 ID와 URL도 변경됩니다.</p>
<p>다음과 같은 경우에는 name 구성 요소를 사용하는 것이 가장 좋습니다:</p>
<ul>
<li>name이 Storybook UI에 나타나도록 하려면 named export로는 불가능한 방식으로 표시하고 싶을 때, 예를 들어 &quot;default&quot;와 같은 예약어, 이모지와 같은 특수 문자, storyNameFromExport가 제공하는 대문자/공백과 다른 경우.</li>
<li>Story ID를 표시 방식을 변경하지 않고 유지하고 싶을 때. 안정적인 Story ID를 유지하는 것은 제3자 도구와의 통합에 도움이 됩니다.</li>
</ul>
<h2 id="스토리가-아닌-내보내기" tabindex="-1"><a class="header-anchor" href="#스토리가-아닌-내보내기" aria-hidden="true">#</a> 스토리가 아닌 내보내기</h2>
<p>일부 경우에는 스토리와 스토리가 아닌 것(예: 모의 데이터)을 혼합하여 내보내고 싶을 수 있습니다.</p>
<p>기본 내보내기에 사용 가능한 옵션 구성 필드 includeStories 및 excludeStories를 사용하여 이를 가능하게 할 수 있습니다. 이를 문자열 또는 정규 표현식 배열로 정의할 수 있습니다.</p>
<p>다음과 같은 스토리 파일을 고려해보세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./MyComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> someData <span class="token keyword">from</span> <span class="token string">'./data.json'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
  includeStories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'SimpleStory'</span><span class="token punctuation">,</span> <span class="token string">'ComplexStory'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 👈 Storybook은 이러한 스토리를 로드합니다</span>
  excludeStories<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.*Data$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// 👈 Storybook은 Data를 포함하는 것을 무시합니다</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> simpleData <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> bar<span class="token operator">:</span> <span class="token string">'baz'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> complexData <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> foobar<span class="token operator">:</span> <span class="token punctuation">{</span> bar<span class="token operator">:</span> <span class="token string">'baz'</span><span class="token punctuation">,</span> baz<span class="token operator">:</span> someData <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> SimpleStory<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  args<span class="token operator">:</span> <span class="token punctuation">{</span>
    data<span class="token operator">:</span> simpleData<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> ComplexStory<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  args<span class="token operator">:</span> <span class="token punctuation">{</span>
    data<span class="token operator">:</span> complexData<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 파일이 Storybook에 렌더링될 때, Storybook은 ComplexStory와 SimpleStory를 스토리로 처리하고 데이터 이름으로 내보낸 것을 무시합니다.</p>
<p>이 특정 예제에서는 편리한 방법에 따라 동일한 결과를 얻을 수 있습니다:</p>
<ul>
<li>includeStories: /^[A-Z]/</li>
<li>includeStories: /.*Story$/</li>
<li>includeStories: [<code v-pre>SimpleStory</code>, <code v-pre>ComplexStory</code>]</li>
<li>excludeStories: /^[a-z]/</li>
<li>excludeStories: /.*Data$/</li>
<li>excludeStories: [<code v-pre>simpleData</code>, <code v-pre>complexData</code>]</li>
</ul>
<p>만약 대문자로 시작하는 스토리를 사용한다는 최상의 관례를 따른다면, 첫 번째 옵션이 권장되는 해결책입니다.</p>
<h2 id="csf-2에서-csf-3으로-업그레이드" tabindex="-1"><a class="header-anchor" href="#csf-2에서-csf-3으로-업그레이드" aria-hidden="true">#</a> CSF 2에서 CSF 3으로 업그레이드</h2>
<p>CSF 2에서는 named exports가 항상 구성 옵션으로 주석이 달린 컴포넌트를 생성하는 함수여야 합니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ComponentStory<span class="token punctuation">,</span> ComponentMeta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'Button'</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">as</span> ComponentMeta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Primary<span class="token operator">:</span> ComponentStory<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>Button <span class="token punctuation">{</span><span class="token operator">...</span>args<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
Primary<span class="token punctuation">.</span>args <span class="token operator">=</span> <span class="token punctuation">{</span> primary<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이는 Button을 렌더링하는 Primary story를 선언하는 것으로, 자기 자신을 나타내는 { primary: true }를 전개하여 컴포넌트에 렌더링합니다. default.title 메타데이터는 이야기를 내비게이션 계층 구조에 배치할 위치를 가리킵니다.</p>
<p>다음은 CSF 3의 등가물입니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span> component<span class="token operator">:</span> Button <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Primary<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span> args<span class="token operator">:</span> <span class="token punctuation">{</span> primary<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 변경 사항을 하나씩 살펴보면서 무슨 일이 일어나고 있는지 이해해 봅시다.</p>
<h3 id="퍼져블-스토리-객체" tabindex="-1"><a class="header-anchor" href="#퍼져블-스토리-객체" aria-hidden="true">#</a> 퍼져블 스토리 객체</h3>
<p>CSF 3에서는 Named Exports가 함수가 아닌 객체입니다. 이는 JS 스프레드 연산자를 사용하여 스토리를 더 효율적으로 재사용할 수 있게 합니다.</p>
<p>다음은 어두운 배경에 렌더링되는 PrimaryOnDark 스토리를 생성하는 소개 예제의 추가 내용입니다:</p>
<p>다음은 CSF 2 구현입니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> PrimaryOnDark <span class="token operator">=</span> <span class="token function">Primary</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
PrimaryOnDark<span class="token punctuation">.</span>args <span class="token operator">=</span> Primary<span class="token punctuation">.</span>args<span class="token punctuation">;</span>
PrimaryOnDark<span class="token punctuation">.</span>parameters <span class="token operator">=</span> <span class="token punctuation">{</span> background<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'dark'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Primary.bind({})는 스토리 함수를 복사하지만 함수에 붙은 주석을 복사하지 않기 때문에 args를 상속하기 위해 PrimaryOnDark.args = Primary.args를 추가해야 합니다.</p>
<p>CSF 3에서는 주요 객체를 전파하여 모든 주석을 가져올 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> PrimaryOnDark<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>Primary<span class="token punctuation">,</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span> background<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'dark'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이름이 지정된 스토리 내보내기에 대해 더 알아보세요.</p>
<h3 id="기본-렌더-함수" tabindex="-1"><a class="header-anchor" href="#기본-렌더-함수" aria-hidden="true">#</a> 기본 렌더 함수</h3>
<p>CSF 3에서는 이야기가 렌더링되는 방식을 render function을 통해 지정합니다. 다음 단계를 통해 CSF 2 예제를 CSF 3로 다시 작성할 수 있습니다.</p>
<p>간단한 CSF 2 이야기 함수부터 시작해봅시다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 다른 import 및 이야기 구현</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Default<span class="token operator">:</span> ComponentStory<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>Button <span class="token punctuation">{</span><span class="token operator">...</span>args<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 CSF 3에서 명시적 렌더 함수가 있는 이야기 객체로 다시 작성해 봅시다. 렌더 함수를 통해 이야기가 어떻게 렌더링되어야 하는지 명시적으로 알려주게 됩니다. CSF 2와 같이, 컴포넌트나 컴포넌트 집합을 어떻게 렌더링할지에 대한 완전한 제어권을 제공합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 다른 import 및 이야기 구현</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Default<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>Button <span class="token punctuation">{</span><span class="token operator">...</span>args<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>렌더 함수에 대해 더 알아보세요.</p>
<p>그러나 CSF 2에서는 많은 스토리 함수가 동일합니다: 기본 내보내기에 지정된 구성 요소를 가져와 args를 확장합니다. 이러한 스토리의 흥미로운 점은 함수가 아니라 함수로 전달된 args입니다.</p>
<p>CSF 3은 각 렌더러에 대한 기본 렌더 함수를 제공합니다. 구성 요소에 args를 전달하는 것이 일반적인 경우에는 렌더 함수를 명시할 필요가 없습니다:```</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> Default <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>더 자세한 정보는 사용자 정의 렌더 함수 섹션을 참조하세요.</p>
<h3 id="제목-자동-생성하기" tabindex="-1"><a class="header-anchor" href="#제목-자동-생성하기" aria-hidden="true">#</a> 제목 자동 생성하기</h3>
<p>마지막으로, CSF 3에서는 제목을 자동으로 생성할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'components/Button'</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> component<span class="token operator">:</span> Button <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>여전히 CSF 2처럼 title을 지정할 수 있지만, 지정하지 않으면 이야기의 디스크 경로에서 추론될 수 있습니다. 이야기 로딩 구성 섹션을 참조하여 자세한 내용을 확인하세요.</p>
</div></template>
