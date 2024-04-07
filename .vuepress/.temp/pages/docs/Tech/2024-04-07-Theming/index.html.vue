<template><div><p>스토리북은 가볍게 테마를 설정할 수 있는 테마 API를 활용할 수 있어요.</p>
<h2 id="전역-테마" tabindex="-1"><a class="header-anchor" href="#전역-테마" aria-hidden="true">#</a> 전역 테마</h2>
<p>스토리북을 전역적으로 테마를 설정할 수 있어요.</p>
<p>스토리북에는 기본적으로 &quot;라이트(light)&quot;와 &quot;다크(dark)&quot; 두 가지 테마를 포함하고 있어요. 사용자가 선호하는 색상 테마를 &quot;다크&quot;로 설정한 경우를 제외하고는 기본적으로 &quot;라이트&quot; 테마를 사용할 거에요.</p>
<p>@storybook/manager-api과 @storybook/theming 패키지가 설치되어 있는지 확인해주세요.</p>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npm install --save-dev @storybook/manager-api @storybook/theming
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>예를 들어, &quot;dark&quot; 테마를 사용하도록 Storybook에 지시할 수 있습니다. 이를 위해 .storybook/manager.js를 수정하세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> addons <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/manager-api'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> themes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/theming'</span><span class="token punctuation">;</span>

addons<span class="token punctuation">.</span><span class="token function">setConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token operator">:</span> themes<span class="token punctuation">.</span>dark<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>테마를 설정할 때 완전한 테마 객체를 설정하세요. 테마는 추가되는 것이 아니라 교체됩니다.</p>
<h2 id="테마-설정-문서" tabindex="-1"><a class="header-anchor" href="#테마-설정-문서" aria-hidden="true">#</a> 테마 설정 문서</h2>
<p>Storybook Docs는 Storybook의 UI와 동일한 테마 시스템을 사용하지만 메인 UI와는 독립적으로 테마가 지정됩니다.</p>
<p>main UI를 위해 .storybook/manager.js에 정의된 Storybook 테마가 있는 경우를 상정해보겠습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> addons <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/manager-api'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> themes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/theming'</span><span class="token punctuation">;</span>

addons<span class="token punctuation">.</span><span class="token function">setConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token operator">:</span> themes<span class="token punctuation">.</span>dark<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 .storybook/preview.js에서 동일한 테마를 문서에 지정하는 방법을 보여 드리겠습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 프레임워크(예: react, vue3)로 your-framework를 교체하십시오</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> themes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/theming'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    docs<span class="token operator">:</span> <span class="token punctuation">{</span>
      theme<span class="token operator">:</span> themes<span class="token punctuation">.</span>dark<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>자신만의 테마를 만드는 방법을 알고 싶다면 계속 읽어보세요.</p>
<h2 id="테마-퀵-스타트-만들기" tabindex="-1"><a class="header-anchor" href="#테마-퀵-스타트-만들기" aria-hidden="true">#</a> 테마 퀵 스타트 만들기</h2>
<p>Storybook을 사용자 정의하는 가장 쉬운 방법은 storybook/theming에서 create() 함수를 사용하여 새 테마를 생성하는 것입니다. 이 함수에는 가장 일반적인 테마 변수에 대한 단축키가 포함되어 있습니다. 다음은 그 사용 방법입니다:</p>
<p>.storybook 디렉토리 내에서 YourTheme.js라는 새 파일을 만들고 다음을 추가하세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> create <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/theming/create'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  base<span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span>
  brandTitle<span class="token operator">:</span> <span class="token string">'나만의 Storybook'</span><span class="token punctuation">,</span>
  brandUrl<span class="token operator">:</span> <span class="token string">'https://example.com'</span><span class="token punctuation">,</span>
  brandImage<span class="token operator">:</span> <span class="token string">'https://storybook.js.org/images/placeholders/350x150.png'</span><span class="token punctuation">,</span>
  brandTarget<span class="token operator">:</span> <span class="token string">'_self'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위에서는 다음과 같은 새 테마를 만들고 있습니다:</p>
<ul>
<li>Storybook의 라이트 테마를 기본으로 사용할 것입니다.</li>
<li>사이드바에 Storybook 로고를 우리 자체 로고로 바꿀 것입니다(brandImage 변수에 정의됨).</li>
<li>사용자 정의 브랜딩 정보를 추가할 것입니다.</li>
<li>브랜드 링크를 새 창이 아닌 동일한 창에서 여는 것으로 설정할 것입니다.</li>
</ul>
<p>마지막으로, 이 테마를 Storybook에 가져와야 합니다. .storybook 디렉토리에 manager.js라는 새 파일을 만들고 다음을 추가하세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> addons <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/manager-api'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> yourTheme <span class="token keyword">from</span> <span class="token string">'./YourTheme'</span><span class="token punctuation">;</span>

addons<span class="token punctuation">.</span><span class="token function">setConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token operator">:</span> yourTheme<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 사용자 정의 테마가 Storybook의 기본 테마를 대체하고, UI에서 비슷한 변경 사항을 볼 수 있을 거예요.</p>
<p><img src="@source/docs/Tech/2024-04-07-Theming/img/Theming_0.png" alt="테마 이미지"></p>
<p>더 복잡한 예제를 살펴봐요. 아래 코드를 복사해서 .storybook/YourTheme.js에 붙여넣기하세요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> create <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/theming/create'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  base<span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span>
  <span class="token comment">// Typography</span>
  fontBase<span class="token operator">:</span> <span class="token string">'"Open Sans", sans-serif'</span><span class="token punctuation">,</span>
  fontCode<span class="token operator">:</span> <span class="token string">'monospace'</span><span class="token punctuation">,</span>

  brandTitle<span class="token operator">:</span> <span class="token string">'내 맞춤 Storybook'</span><span class="token punctuation">,</span>
  brandUrl<span class="token operator">:</span> <span class="token string">'https://example.com'</span><span class="token punctuation">,</span>
  brandImage<span class="token operator">:</span> <span class="token string">'https://storybook.js.org/images/placeholders/350x150.png'</span><span class="token punctuation">,</span>
  brandTarget<span class="token operator">:</span> <span class="token string">'_self'</span><span class="token punctuation">,</span>

  <span class="token comment">//</span>
  colorPrimary<span class="token operator">:</span> <span class="token string">'#3A10E5'</span><span class="token punctuation">,</span>
  colorSecondary<span class="token operator">:</span> <span class="token string">'#585C6D'</span><span class="token punctuation">,</span>

  <span class="token comment">// UI</span>
  appBg<span class="token operator">:</span> <span class="token string">'#ffffff'</span><span class="token punctuation">,</span>
  appContentBg<span class="token operator">:</span> <span class="token string">'#ffffff'</span><span class="token punctuation">,</span>
  appPreviewBg<span class="token operator">:</span> <span class="token string">'#ffffff'</span><span class="token punctuation">,</span>
  appBorderColor<span class="token operator">:</span> <span class="token string">'#585C6D'</span><span class="token punctuation">,</span>
  appBorderRadius<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>

  <span class="token comment">// Text colors</span>
  textColor<span class="token operator">:</span> <span class="token string">'#10162F'</span><span class="token punctuation">,</span>
  textInverseColor<span class="token operator">:</span> <span class="token string">'#ffffff'</span><span class="token punctuation">,</span>

  <span class="token comment">// Toolbar default and active colors</span>
  barTextColor<span class="token operator">:</span> <span class="token string">'#9E9E9E'</span><span class="token punctuation">,</span>
  barSelectedColor<span class="token operator">:</span> <span class="token string">'#585C6D'</span><span class="token punctuation">,</span>
  barHoverColor<span class="token operator">:</span> <span class="token string">'#585C6D'</span><span class="token punctuation">,</span>
  barBg<span class="token operator">:</span> <span class="token string">'#ffffff'</span><span class="token punctuation">,</span>

  <span class="token comment">// Form colors</span>
  inputBg<span class="token operator">:</span> <span class="token string">'#ffffff'</span><span class="token punctuation">,</span>
  inputBorder<span class="token operator">:</span> <span class="token string">'#10162F'</span><span class="token punctuation">,</span>
  inputTextColor<span class="token operator">:</span> <span class="token string">'#10162F'</span><span class="token punctuation">,</span>
  inputBorderRadius<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위에서 우리는 다음 변경 사항으로 테마를 업데이트하고 있습니다:</p>
<ul>
<li>앱 및 색상 변수에서 정의된 사용자 정의 색상 팔레트.</li>
<li>폰트 및 텍스트 변수에서 정의된 사용자 정의 글꼴.</li>
</ul>
<p>새 변경 사항을 도입하면 사용자 정의 테마가 유사한 결과를 내야합니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-Theming/img/Theming_1.png" alt="테마 이미지"></p>
<p>@storybook/theming 패키지는 TypeScript를 사용하여 구축되었으며, TypeScript 사용자를 위한 유효한 테마를 생성하는 데 도움이 될 것입니다. 타입은 해당 패키지의 일부입니다.</p>
<h2 id="css-이스케이프-헤칭" tabindex="-1"><a class="header-anchor" href="#css-이스케이프-헤칭" aria-hidden="true">#</a> CSS 이스케이프 헤칭</h2>
<p>Storybook 테마 API는 의도적으로 좁게 설계되어 있습니다. CSS에 세부적인 제어를 원한다면, 모든 UI 및 문서 구성 요소에는 이를 가능하게 하는 클래스 이름이 태그가 달려 있습니다. 이 기능은 고급 기능이므로 주의해서 사용하세요.</p>
<p>이러한 요소에 스타일을 지정하려면 다음에 스타일 태그를 삽입하세요:</p>
<ul>
<li>Storybook UI에는 .storybook/manager-head.html을 사용하세요.</li>
<li>Storybook Docs에는 .storybook/preview-head.html을 사용하세요.</li>
</ul>
<h2 id="mdx-컴포넌트-재정의" tabindex="-1"><a class="header-anchor" href="#mdx-컴포넌트-재정의" aria-hidden="true">#</a> MDX 컴포넌트 재정의</h2>
<p>만약 문서 작성을 위해 MDX를 사용한다면, &quot;테마 설정&quot;에 관한 한 가지 더 있습니다. MDX를 사용하면 Markdown에서 렌더링된 컴포넌트를 완전히 재정의할 수 있습니다. components 매개변수를 사용하면 됩니다. 이것은 공식적으로 Storybook에서 지원되지는 않지만, 필요할 때 강력한 구조입니다.</p>
<p>다음은 페이지의 코드 블록을 위해 사용자 지정 코드 렌더러를 삽입하는 방법입니다. .storybook/preview.js에서:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용중인 프레임워크(예: 리액트, 뷰3)로 교체하세요</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> 미리보기 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> 코드블록 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./CodeBlock'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> 미리보기<span class="token operator">:</span> 미리보기 <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    docs<span class="token operator">:</span> <span class="token punctuation">{</span>
      components<span class="token operator">:</span> <span class="token punctuation">{</span>
        code<span class="token operator">:</span> 코드블록<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> 미리보기<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Storybook 블록 컴포넌트를 재정의할 수도 있습니다.</p>
<p>다음은 사용자 지정 <code v-pre>Canvas</code> 블록을 삽입하는 방법입니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용중인 프레임워크(예: 리액트, 뷰3)로 교체하세요</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> 미리보기 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-framework'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> 내캔버스 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./MyCanvas'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> 미리보기<span class="token operator">:</span> 미리보기 <span class="token operator">=</span> <span class="token punctuation">{</span>
  parameters<span class="token operator">:</span> <span class="token punctuation">{</span>
    docs<span class="token operator">:</span> <span class="token punctuation">{</span>
      components<span class="token operator">:</span> <span class="token punctuation">{</span>
        Canvas<span class="token operator">:</span> 내캔버스<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> 미리보기<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="애드온-및-테마-생성" tabindex="-1"><a class="header-anchor" href="#애드온-및-테마-생성" aria-hidden="true">#</a> 애드온 및 테마 생성</h2>
<p>일부 애드온은 Storybook 사용자가 추가해야 하는 특정 테마 변수가 필요합니다. 커뮤니티와 테마를 공유할 때는 공식 API와 인기 있는 애드온을 지원하여 사용자가 일관된 경험을 할 수 있도록 해주세요.</p>
<p>예를 들어, 인기 있는 Actions 애드온은 react-inspector를 사용하는데, 그 자체의 테마를 가지고 있습니다. 아래와 같이 스타일을 지정하기 위해 추가 테마 변수를 제공할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>addonActionsTheme<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>chromeLight<span class="token punctuation">,</span>
  <span class="token constant">BASE_FONT_FAMILY</span><span class="token operator">:</span> typography<span class="token punctuation">.</span>fonts<span class="token punctuation">.</span>mono<span class="token punctuation">,</span>
  <span class="token constant">BASE_BACKGROUND_COLOR</span><span class="token operator">:</span> <span class="token string">'transparent'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="애드온-작성자를-위한-테마-사용" tabindex="-1"><a class="header-anchor" href="#애드온-작성자를-위한-테마-사용" aria-hidden="true">#</a> 애드온 작성자를 위한 테마 사용</h2>
<p>위의 테마 변수를 사용하여 네이티브 Storybook 개발자 경험을 재사용하세요. 테마 엔진은 CSS-in-JS 라이브러리인 emotion에 의존합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> styled <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/theming'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>객체 표기법으로 테마 변수를 사용하세요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> Component <span class="token operator">=</span> styled<span class="token punctuation">.</span><span class="token function">div</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 테마 <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  배경<span class="token operator">:</span> 테마<span class="token punctuation">.</span>background<span class="token punctuation">.</span>app<span class="token punctuation">,</span>
  너비<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또는 템플릿 리터럴을 사용하면:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> Component <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  background: </span><span class="token template-punctuation string">`</span></span>$<span class="token punctuation">{</span>props <span class="token operator">=></span> props<span class="token punctuation">.</span>theme<span class="token punctuation">.</span>background<span class="token punctuation">.</span>app<span class="token punctuation">}</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  width: 0;
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
