<template><div><p>Storybook에는 스토리가 렌더링되는 뷰포트 및 백그라운드를 제어하는 툴바 애드온이 함께 제공됩니다. 또한 본문 렌더링을 제어하는 특수 “글로벌”을 제어하는 사용자 지정 툴바 항목을 만들 수도 있습니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-Toolbarsglobals/img/Toolbarsglobals_0.png" alt="Toolbarsglobals_0"></p>
<h2 id="글로벌" tabindex="-1"><a class="header-anchor" href="#글로벌" aria-hidden="true">#</a> 글로벌</h2>
<p>Storybook의 글로벌은 스토리 렌더링의 “글로벌”(스토리별이 아닌) 입력을 나타냅니다. 스토리와 관련이 없기 때문에 이러한 글로벌들은 스토리 함수에 args 인수로 전달되지 않습니다(그러나 context.globals로 접근할 수 있습니다). 일반적으로 모든 스토리에 적용되는 데코레이터에서 사용됩니다.</p>
<p>Global 값이 변경되면 이야기가 다시 렌더링되고 데코레이터가 새 값으로 다시 실행됩니다. Global 값을 변경하는 가장 쉬운 방법은 툴바 항목을 생성하는 것입니다.</p>
<h2 id="global-유형-및-툴바-주석" tabindex="-1"><a class="header-anchor" href="#global-유형-및-툴바-주석" aria-hidden="true">#</a> Global 유형 및 툴바 주석</h2>
<p>Storybook은 툴바 메뉴를 구성하는 간단한 선언적 구문을 가지고 있습니다. .storybook/preview.js|ts에서 <code v-pre>toolbar</code> 주석을 사용하여 자체 툴바를 추가할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크에 해당하는 your-framework을 지정해주세요 (예: react, vue3)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  globalTypes<span class="token operator">:</span> <span class="token punctuation">{</span>
    theme<span class="token operator">:</span> <span class="token punctuation">{</span>
      description<span class="token operator">:</span> <span class="token string">'컴포넌트 전역 테마'</span><span class="token punctuation">,</span>
      defaultValue<span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span>
      toolbar<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 이 툴바 항목을 위해 보여줄 라벨</span>
        title<span class="token operator">:</span> <span class="token string">'테마'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token string">'circlehollow'</span><span class="token punctuation">,</span>
        <span class="token comment">// 일반 문자열 값 또는 MenuItem 모양의 배열 (아래 참조)</span>
        items<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'light'</span><span class="token punctuation">,</span> <span class="token string">'dark'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 선택한 값에 따라 제목 변경</span>
        dynamicTitle<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook을 시작하면 툴바에 빛과 어두운 옵션이 있는 새 드롭다운이 표시됩니다.</p>
<h2 id="데코레이터-만들기" tabindex="-1"><a class="header-anchor" href="#데코레이터-만들기" aria-hidden="true">#</a> 데코레이터 만들기</h2>
<p>우리는 전역 구현을 가지고 있습니다. 이를 연결해 봅시다! context.globals.theme 값을 사용하여 데코레이터에서 새 테마 전역을 사용할 수 있습니다.</p>
<p>예를 들어, styled-components를 사용하는 경우 .storybook/preview.js|ts 구성에 테마 제공자 데코레이터를 추가할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> ThemeProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'styled-components'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyThemes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../my-theme-folder/my-theme-file'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  decorators<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">(</span>Story<span class="token punctuation">,</span> context<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> theme <span class="token operator">=</span> MyThemes<span class="token punctuation">[</span>context<span class="token punctuation">.</span>globals<span class="token punctuation">.</span>theme<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>ThemeProvider theme<span class="token operator">=</span><span class="token punctuation">{</span>theme<span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Story <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeProvider<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="고급-사용법" tabindex="-1"><a class="header-anchor" href="#고급-사용법" aria-hidden="true">#</a> 고급 사용법</h2>
<p>지금까지 Storybook에서 전역 객체를 생성하고 사용하는 방법을 살펴보았습니다.</p>
<p>이제 좀 더 복잡한 예제를 살펴봅시다. 국제화를 위한 locale이라는 새로운 전역 객체를 구현하고 툴바 오른쪽에 국기를 표시하고 싶다고 가정해 봅시다.</p>
<p>.storybook/preview.js 또는 .storybook/preview.ts 파일에 다음을 추가해 주세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크(예: react, vue3)로 your-framework를 교체하세요</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  globalTypes<span class="token operator">:</span> <span class="token punctuation">{</span>
    locale<span class="token operator">:</span> <span class="token punctuation">{</span>
      description<span class="token operator">:</span> <span class="token string">'국제화 로캘'</span><span class="token punctuation">,</span>
      defaultValue<span class="token operator">:</span> <span class="token string">'en'</span><span class="token punctuation">,</span>
      toolbar<span class="token operator">:</span> <span class="token punctuation">{</span>
        icon<span class="token operator">:</span> <span class="token string">'globe'</span><span class="token punctuation">,</span>
        items<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">'en'</span><span class="token punctuation">,</span> right<span class="token operator">:</span> <span class="token string">'🇺🇸'</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">'영어'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">'fr'</span><span class="token punctuation">,</span> right<span class="token operator">:</span> <span class="token string">'🇫🇷'</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">'프랑스어'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">'es'</span><span class="token punctuation">,</span> right<span class="token operator">:</span> <span class="token string">'🇪🇸'</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">'스페인어'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">'zh'</span><span class="token punctuation">,</span> right<span class="token operator">:</span> <span class="token string">'🇨🇳'</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">'중국어'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">'kr'</span><span class="token punctuation">,</span> right<span class="token operator">:</span> <span class="token string">'🇰🇷'</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">'한국어'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>설정 요소를 추가하면 데코레이터에 연결하면 텍스트가 툴바 메뉴 오른쪽에 표시됩니다.</p>
<p>아래는 가능한 구성 옵션 목록입니다.</p>
<h2 id="이야기-내에서-전역-속성-사용하기" tabindex="-1"><a class="header-anchor" href="#이야기-내에서-전역-속성-사용하기" aria-hidden="true">#</a> 이야기 내에서 전역 속성 사용하기</h2>
<p>우리는 모든 이야기에 대한 전역 설정을 정의하기 위해 데코레이터 내에서 전역을 사용하는 것을 권장합니다.</p>
<p>그러나 때로는 이야기별로 툴바 옵션을 사용하는 것이 더 유익할 수도 있음을 알고 있습니다.</p>
<p>위의 예제를 사용하여 이야기마다 Locale 전역을 이야기 컨텍스트에서 가져오도록 수정할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./MyComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> MyComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MyComponent<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">getCaptionForLocale</span> <span class="token operator">=</span> <span class="token punctuation">(</span>locale<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>locale<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">'es'</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">'Hola!'</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">'fr'</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">'Bonjour!'</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">'kr'</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">'안녕하세요!'</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">'zh'</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">'你好!'</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token string">'Hello!'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> StoryWithLocale <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span>args<span class="token punctuation">,</span> <span class="token punctuation">{</span> globals<span class="token operator">:</span> <span class="token punctuation">{</span> locale <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> caption <span class="token operator">=</span> <span class="token function">getCaptionForLocale</span><span class="token punctuation">(</span>locale<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>caption<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="애드온-내에서-글로벌-값-사용하기" tabindex="-1"><a class="header-anchor" href="#애드온-내에서-글로벌-값-사용하기" aria-hidden="true">#</a> 애드온 내에서 글로벌 값 사용하기</h2>
<p>만약 Storybook 애드온을 개발 중이고 글로벌 값을 가져와야 하는 경우가 있다면 @storybook/manager-api 패키지를 사용하면 가능합니다. 이 시나리오를 위한 훅이 제공됩니다. useGlobals() 훅을 사용하여 원하는 글로벌 값을 검색할 수 있습니다.</p>
<p>위의 ThemeProvider 예제를 사용하여, 어떤 테마가 활성화되어 있는지를 나타내는 패널을 확장할 수 있습니다.```</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useGlobals <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/manager-api'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> AddonPanel<span class="token punctuation">,</span> Placeholder<span class="token punctuation">,</span> Separator<span class="token punctuation">,</span> Source<span class="token punctuation">,</span> Spaced<span class="token punctuation">,</span> Title <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/components'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MyThemes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../my-theme-folder/my-theme-file'</span><span class="token punctuation">;</span>

<span class="token comment">// 특정 테마를 가져오는 함수</span>
<span class="token keyword">const</span> <span class="token function-variable function">getTheme</span> <span class="token operator">=</span> <span class="token punctuation">(</span>themeName<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> MyThemes<span class="token punctuation">[</span>themeName<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ThemePanel</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> theme<span class="token operator">:</span> themeName <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useGlobals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> selectedTheme <span class="token operator">=</span> <span class="token function">getTheme</span><span class="token punctuation">(</span>themeName<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>AddonPanel <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token punctuation">{</span>selectedTheme <span class="token operator">?</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>Spaced row<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span> outer<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Title<span class="token operator">></span><span class="token punctuation">{</span>selectedTheme<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Title<span class="token operator">></span>
          <span class="token operator">&lt;</span>p<span class="token operator">></span>전체 테마 객체<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
          <span class="token operator">&lt;</span>Source
            code<span class="token operator">=</span><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>selectedTheme<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
            language<span class="token operator">=</span><span class="token string">"js"</span>
            copyable
            padded
            showLineNumbers
          <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Spaced<span class="token operator">></span>
      <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>Placeholder<span class="token operator">></span>선택된 테마가 없습니다<span class="token operator">&lt;</span><span class="token operator">/</span>Placeholder<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>AddonPanel<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="애드온-내부에서-글로벌-값을-업데이트하는-방법" tabindex="-1"><a class="header-anchor" href="#애드온-내부에서-글로벌-값을-업데이트하는-방법" aria-hidden="true">#</a> 애드온 내부에서 글로벌 값을 업데이트하는 방법</h2>
<p>애드온에서 글로벌 값을 업데이트하고 UI를 새로 고칠 필요가 있는 경우가 있습니다. 이 경우를 위해 @storybook/manager-api 패키지에서 필요한 후크를 제공합니다. updateGlobals 함수를 사용하여 필요한 모든 글로벌 값을 업데이트할 수 있습니다.</p>
<p>예를 들어, 툴바 애드온을 작업 중이고 사용자가 버튼을 클릭했을 때 UI를 새로 고치고 글로벌을 업데이트하고 싶은 경우:```</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">FORCE_RE_RENDER</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/core-events'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useGlobals <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/manager-api'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> IconButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/components'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> OutlineIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/icons'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> addons <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/preview-api'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ExampleToolbar</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>globals<span class="token punctuation">,</span> updateGlobals<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useGlobals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> isActive <span class="token operator">=</span> globals<span class="token punctuation">[</span><span class="token string">'my-param-key'</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token comment">// Function that will update the global value and trigger a UI refresh.</span>
  <span class="token keyword">const</span> <span class="token function-variable function">refreshAndUpdateGlobal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// Updates Storybook global value</span>
    <span class="token function">updateGlobals</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token punctuation">[</span><span class="token string">'my-param-key'</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token operator">!</span>isActive<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// Invokes Storybook's addon API method (with the FORCE_RE_RENDER) event to trigger a UI refresh</span>
      addons<span class="token punctuation">.</span><span class="token function">getChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token constant">FORCE_RE_RENDER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> toggleOutline <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">refreshAndUpdateGlobal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>isActive<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>IconButton
      key<span class="token operator">=</span><span class="token string">"Example"</span>
      active<span class="token operator">=</span><span class="token punctuation">{</span>isActive<span class="token punctuation">}</span>
      title<span class="token operator">=</span><span class="token string">"Storybook 툴바 보이기"</span>
      onClick<span class="token operator">=</span><span class="token punctuation">{</span>toggleOutline<span class="token punctuation">}</span>
    <span class="token operator">></span>
      <span class="token operator">&lt;</span>OutlineIcon <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>IconButton<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
