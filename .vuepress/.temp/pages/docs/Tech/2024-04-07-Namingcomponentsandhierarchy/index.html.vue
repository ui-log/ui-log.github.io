<template><div><p>Storybook은 이야기를 구성하고 필요한 도구를 제공하여 이야기를 분류하고 조직의 요구사항과 선호에 따라 이야기를 검색하고 필터링할 수 있는 강력한 방법을 제공합니다.</p>
<h2 id="구조와-계층" tabindex="-1"><a class="header-anchor" href="#구조와-계층" aria-hidden="true">#</a> 구조와 계층</h2>
<p>Storybook을 구성할 때 이야기를 구조화하는 두 가지 방법이 있습니다: 암시적 방법과 명시적 방법. 암시적 방법은 이야기의 물리적 위치에 의존하여 사이드바에 순서를 매기는 것을 의미하며, 명시적 방법은 제목 매개변수를 활용하여 이야기를 배치하는 것을 의미합니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-Namingcomponentsandhierarchy/img/Namingcomponentsandhierarchy_0.png" alt="Namingcomponentsandhierarchy_0.png"></p>
<p>Storybook을 구조화하는 방식에 따라 이야기 계층 구조가 다양한 부분으로 구성되어 있음을 확인할 수 있습니다:</p>
<ul>
<li>카테고리: Storybook에서 생성된 이야기와 문서 페이지를 상위 그룹화하는 단위</li>
<li>폴더: 사이드바에 구성 요소와 이야기를 그룹화하는 중간 단계의 조직 단위로, 애플리케이션의 기능이나 섹션을 나타냄</li>
<li>구성 요소: 스토리가 테스트하는 구성 요소를 나타내는 하위 조직 단위</li>
<li>문서: 구성 요소에 대해 자동으로 생성된 문서 페이지</li>
<li>이야기: 특정 구성 요소 상태를 테스트하는 개별 이야기</li>
</ul>
<h2 id="이야기-명명" tabindex="-1"><a class="header-anchor" href="#이야기-명명" aria-hidden="true">#</a> 이야기 명명</h2>
<p>이야기를 만들 때, 타이틀 매개변수를 명시적으로 사용하여 사이드바에서 이야기의 위치를 정의할 수 있습니다. 또한 관련된 구성 요소를 확장 가능한 인터페이스에서 그룹화하는 데 사용하여 Storybook 구성을 돕고 사용자에게 더 직관적인 경험을 제공할 수 있습니다. 예시:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 'your-framework'을 사용하는 framework 이름으로 변경하세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 👇 title 속성은 옵션입니다.
   * 자동 제목을 생성하는 방법은 https://storybook.js.org/docs/configure/#configure-story-loading
   * 에서 확인해보세요.
   */</span>
  title<span class="token operator">:</span> <span class="token string">'Button'</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>아래와 같이 나타납니다:</p>
<p><img src="@source/docs/Tech/2024-04-07-Namingcomponentsandhierarchy/img/Namingcomponentsandhierarchy_1.png" alt="Namingcomponentsandhierarchy_1.png"></p>
<h2 id="grouping" tabindex="-1"><a class="header-anchor" href="#grouping" aria-hidden="true">#</a> Grouping</h2>
<p>관련 컴포넌트를 확장 가능한 인터페이스로 묶어 Storybook 조직을 돕는 것도 가능합니다. 이를 위해서는 /를 구분자로 사용하세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// your-framework을 사용하는 framework의 이름으로 바꿔주세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 👇 title 속성은 선택 사항입니다.
   * 자동 제목 생성 방법은 https://storybook.js.org/docs/configure/#configure-story-loading
   * 에서 확인할 수 있습니다.
   */</span>
  title<span class="token operator">:</span> <span class="token string">'Design System/Atoms/Button'</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// your-framework을 사용하는 framework의 이름으로 바꿔주세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> CheckBox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./CheckBox'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> CheckBox<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 👇 title 속성은 선택 사항입니다.
   * 자동 제목 생성 방법은 https://storybook.js.org/docs/configure/#configure-story-loading
   * 에서 확인할 수 있습니다.
   */</span>
  title<span class="token operator">:</span> <span class="token string">'Design System/Atoms/Checkbox'</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> CheckBox<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게 나옵니다:</p>
<p><img src="@source/docs/Tech/2024-04-07-Namingcomponentsandhierarchy/img/Namingcomponentsandhierarchy_2.png" alt="Naming Components and Hierarchy Table"></p>
<h2 id="루트" tabindex="-1"><a class="header-anchor" href="#루트" aria-hidden="true">#</a> 루트</h2>
<p>기본적으로 상위 단계 그룹은 스토리북 UI에서 &quot;루트&quot;로 표시됩니다 (즉, 대문자로 표시된, 확장할 수 없는 항목입니다). 필요한 경우 Storybook을 구성하여이 동작을 비활성화 할 수 있습니다. 사용자에게 간소화된 경험을 제공해야하는 경우 유용합니다. 그러나 여러 컴포넌트 스토리로 구성된 큰 Storybook이 있는 경우 파일 계층 구조에 따라 컴포넌트의 이름을 지정하는 것이 좋습니다.</p>
<h2 id="단일-스토리-호이스팅" tabindex="-1"><a class="header-anchor" href="#단일-스토리-호이스팅" aria-hidden="true">#</a> 단일 스토리 호이스팅</h2>
<p>단일 스토리 컴포넌트(즉, 형제 없는 컴포넌트 스토리)는 표시 이름이 컴포넌트 이름(타이틀의 마지막 부분)과 정확히 일치하는 경우 UI에서 부모 컴포넌트를 대체하기 위해 자동으로 호이스팅됩니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 'your-framework'을 사용하고 있는 프레임워크의 이름으로 대체하세요</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token keyword">as</span> ButtonComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> ButtonComponent<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 👇 title 속성은 선택 사항입니다.
   * 자동 제목 생성 방법에 대해 알아보려면 https://storybook.js.org/docs/configure/#configure-story-loading 를 참조하세요
   */</span>
  title<span class="token operator">:</span> <span class="token string">'Design System/Atoms/Button'</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> ButtonComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> ButtonComponent<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token comment">// 이 파일에서 유일하게 명명된 내보내기가 있으며, 컴포넌트 이름과 일치합니다</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> Button<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Tech/2024-04-07-Namingcomponentsandhierarchy/img/Namingcomponentsandhierarchy_3.png" alt="Namingcomponentsandhierarchy_3"></p>
<p>스토리 내보내기는 자동으로 &quot;start cased&quot;로 변환됩니다(myStory는 &quot;My Story&quot;가 됨). 따라서 컴포넌트 이름은 해당 이름과 일치해야 합니다. 또는 컴포넌트 이름과 일치하도록 myStory.storyName = <code v-pre>...</code>을 사용하여 스토리 이름을 재정의할 수 있습니다.</p>
<h2 id="이야기-정렬" tabindex="-1"><a class="header-anchor" href="#이야기-정렬" aria-hidden="true">#</a> 이야기 정렬</h2>
<p>Storybook은 기본적으로 이야기를 가져온 순서대로 정렬합니다. 그러나 preview.js 파일의 options 매개변수에 storySort를 추가하여 이 패턴을 사용자 정의하여 더 직관적인 경험을 제공할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크에 맞게 ‘your-framework’를 해당 프레임워크로 바꿉니다 (예: react, vue3)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    options<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 이 함수의 ‘a’와 ‘b’ 매개변수의 타입은 ‘import('@storybook/types').IndexEntry’입니다. 이 함수가 JavaScript 환경에서 실행되므로 IntelliSense를 위해 JSDoc을 사용해야 합니다.</span>
      <span class="token function-variable function">storySort</span><span class="token operator">:</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=></span>
        a<span class="token punctuation">.</span>id <span class="token operator">===</span> b<span class="token punctuation">.</span>id <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> a<span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">localeCompare</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> numeric<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>storySort는 구성 객체도 수용할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크(예: react, vue3)로 변경하세요</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    options<span class="token operator">:</span> <span class="token punctuation">{</span>
      storySort<span class="token operator">:</span> <span class="token punctuation">{</span>
        method<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        order<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        locales<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이야기들을 알파벳 순으로 정렬하려면 method를 <code v-pre>alphabetical</code>로 설정하고 선택적으로 로케일 문자열을 설정하세요. 사용자 정의 목록을 사용하여 이야기들을 정렬하려면 order 배열을 사용하세요. order 목록에 포함되지 않는 이야기들은 목록 항목 뒤에 나타납니다.</p>
<p>order 배열은 중첩 배열을 허용하여 2단계 이야기 종류를 정렬할 수 있습니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크(예: react, vue3)로 변경하세요</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    options<span class="token operator">:</span> <span class="token punctuation">{</span>
      storySort<span class="token operator">:</span> <span class="token punctuation">{</span>
        order<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Intro'</span><span class="token punctuation">,</span> <span class="token string">'Pages'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'Home'</span><span class="token punctuation">,</span> <span class="token string">'Login'</span><span class="token punctuation">,</span> <span class="token string">'Admin'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'Components'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 이야기 정렬 순서가 다음과 같이 결정됩니다:</p>
<ul>
<li>소개 그리고 소개/ * 이야기</li>
<li>페이지 이야기</li>
<li>페이지/홈 및 페이지/홈/ * 이야기</li>
<li>페이지/로그인 및 페이지/로그인/ * 이야기</li>
<li>페이지/관리자 및 페이지/관리자/ * 이야기</li>
<li>페이지/ * 이야기</li>
<li>컴포넌트 및 컴포넌트/ * 이야기</li>
<li>그 외 모든 이야기</li>
</ul>
<p>특정 카테고리를 목록의 끝에 정렬하려면 * 를 순서 배열에 삽입하여 &quot;그 외 모든 이야기&quot;가 어디에 위치해야 하는지를 나타낼 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 'your-framework'은 사용 중인 프레임워크로 대체하세요 (예: react, vue3)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    options<span class="token operator">:</span> <span class="token punctuation">{</span>
      storySort<span class="token operator">:</span> <span class="token punctuation">{</span>
        order<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Intro'</span><span class="token punctuation">,</span> <span class="token string">'Pages'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'Home'</span><span class="token punctuation">,</span> <span class="token string">'Login'</span><span class="token punctuation">,</span> <span class="token string">'Admin'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'Components'</span><span class="token punctuation">,</span> <span class="token string">'*'</span><span class="token punctuation">,</span> <span class="token string">'WIP'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서 WIP 카테고리는 목록의 끝에 표시됩니다.</p>
<p>주문 옵션은 방법 옵션과 독립적입니다. 이야기는 먼저 주문 배열에 따라 정렬되며 그 다음에는 방법: <code v-pre>alphabetical</code> 또는 기본 configure() 가져오기 순서에 따라 정렬됩니다.</p>
</div></template>
