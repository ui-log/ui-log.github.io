<template><div><p>2024년에는 Stylex, Styled Components, Sass, Tailwind 또는 Emotion과 같은 라이브러리로 React 앱의 스타일을 지정하세요!</p>
<p>년도에 따라 React 컴포넌트에 스타일을 지정하는 것이 더 쉬워졌습니다. 이제는 스타일을 직접 작성할 필요가 없으며, 보통 소규모 프로젝트에는 충분한 보일러플레이트 스타일시트에서 작업할 수 있습니다.</p>
<p>그러나 2024년에 올바른 CSS 라이브러리를 선택하여 앱을 스타일링하는 것이 중요합니다. 적절한 프레임워크를 선택하면 처음부터 많은 시간을 절약할 수 있습니다.</p>
<p>그래서 2024년에 React 앱의 스타일을 지정하는 데 사용할 수 있는 상위 5개 라이브러리를 알아보겠습니다.</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>간편하게 Bit 작업 공간을 초기화하려면 다음 명령을 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>bit <span class="token keyword">new</span> <span class="token class-name">basic</span> css<span class="token operator">-</span>workspace <span class="token operator">--</span><span class="token keyword">default</span><span class="token operator">-</span>scope <span class="token operator">&lt;&lt;</span><span class="token constant">YOUR_BIT_USERNAME</span><span class="token operator">>></span><span class="token punctuation">.</span><span class="token operator">&lt;&lt;</span><span class="token constant">SCOPE_NAME</span><span class="token operator">>></span> <span class="token operator">&amp;&amp;</span> cd css<span class="token operator">-</span>workspace <span class="token operator">&amp;&amp;</span> bit start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="접근-방식-01-stylex" tabindex="-1"><a class="header-anchor" href="#접근-방식-01-stylex" aria-hidden="true">#</a> 접근 방식 01: StyleX</h1>
<p>StyleX는 Meta 팀이 개발한 웹 앱의 스타일을 위한 JavaScript 구문 및 컴파일러입니다. 이는 표준 CSS-in-JS 솔루션의 이점을 소개하면서(그 이상도 가능합니다) 성능 부하 없이 웹 앱 스타일링을 할 수 있도록 합니다.</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>StyleX를 사용하면 CSS의 전역 범위를 제거하고 더 많은 구성 요소별 CSS 설정을 만들어 디버깅, 확장 및 유지 관리를 쉽게 할 수 있습니다. 게다가 JavaScript에서 CSS를 안전하게 작성하여 빌드 시 정규 CSS로 변환되는 방식도 제공합니다.</p>
<p>StyleX를 React 컴포넌트에 Bit를 사용하여 통합하는 방법은 몇 단계로 간단합니다:</p>
<p>먼저 워크스페이스에서 StyleX 컴포넌트를 생성할 수 있는지 확인해야합니다.</p>
<p>다음 명령을 사용하여 스타일링에 StyleX를 사용하는 React 컴포넌트를 만들어보세요:</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>bit create stylex stlyex<span class="token operator">/</span>button <span class="token operator">--</span>env learnbit<span class="token operator">-</span>react<span class="token punctuation">.</span>stylex<span class="token operator">/</span>envs<span class="token operator">/</span>react<span class="token operator">-</span>stylex
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>위 명령을 실행한 후에는 다음과 같은 출력이 표시됩니다:</p>
<img src="@source/docs/Tech/2024-04-19-Top5WaystoStyleYourReactAppsin2024/img/Top5WaystoStyleYourReactAppsin2024_0.png" />
<p>다음으로, button.tsx 파일을 열어서 아래와 같이 StyleX를 사용할 수 있습니다:</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> type ReactNode<span class="token punctuation">,</span> type HTMLAttributes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> stylex <span class="token keyword">from</span> <span class="token string">'@stylexjs/stylex'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> StyleXStyles <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stylexjs/stylex'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> stylex<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#eeeaee'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'#720b72'</span><span class="token punctuation">,</span>
      <span class="token string-property property">':hover'</span><span class="token operator">:</span> <span class="token string">'#a93da9'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
    <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">'unset'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> type ButtonProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  children<span class="token operator">?</span><span class="token operator">:</span> ReactNode<span class="token punctuation">;</span>
  style<span class="token operator">?</span><span class="token operator">:</span> StyleXStyles<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token operator">&amp;</span> Omit<span class="token operator">&lt;</span>HTMLAttributes<span class="token operator">&lt;</span>HTMLButtonElement<span class="token operator">></span><span class="token punctuation">,</span> <span class="token string">'style'</span><span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children<span class="token punctuation">,</span> style <span class="token punctuation">}</span><span class="token operator">:</span> ButtonProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"button"</span> <span class="token punctuation">{</span><span class="token operator">...</span>stylex<span class="token punctuation">.</span><span class="token function">props</span><span class="token punctuation">(</span>styles<span class="token punctuation">.</span>base<span class="token punctuation">,</span> style<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>컴포넌트의 시각적 출력을 제공하고 버튼.composition.tsx를 업데이트하여 구성 요소를 업데이트할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./button'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">BasicButton</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Button<span class="token operator">></span>Hello World<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">StyledButton</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Button
      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'blue'</span> <span class="token keyword">as</span> any
      <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">></span>Blue Text Button<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서 다양한 변형이 제공됩니다.</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>다음으로, Bit 서버를 열어서 아래의 StyleX 컴포넌트를 확인할 수 있습니다:</p>
<p>컴포넌트의 전체 구현을 찾고 싶다면, 제가 작성한 React + StyleX 컴포넌트를 확인해보세요.</p>
<h1 id="접근-방법-02-styled-components" tabindex="-1"><a class="header-anchor" href="#접근-방법-02-styled-components" aria-hidden="true">#</a> 접근 방법 02: Styled Components</h1>
<p>Styled Components를 사용하면 React.js에서 사용자 정의 컴포넌트를 구축하면서 JS 내에서 CSS를 작성할 수 있습니다. 이를 통해 CSS 코드를 JavaScript 파일 안에서 유지하고 유지보수 가능한 CSS를 작성할 수 있습니다.</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>Styled-Components를 사용하는 React 컴포넌트를 만들기 위해 사용할 수 있는 환경을 만들었습니다. 간단한 React 컴포넌트를 만들기 위해 아래 명령어를 실행해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>bit create react styled<span class="token operator">/</span>button <span class="token operator">--</span>env dummyorg<span class="token punctuation">.</span>react<span class="token operator">-</span>css<span class="token operator">/</span>envs<span class="token operator">/</span>react<span class="token operator">-</span>styled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>위 명령어를 실행하면 출력 결과를 확인할 수 있을 거에요:</p>
<img src="@source/docs/Tech/2024-04-19-Top5WaystoStyleYourReactAppsin2024/img/Top5WaystoStyleYourReactAppsin2024_1.png" />
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>컴포넌트에 사용자 정의 CSS 스타일을 직접 추가하거나 Bit에서 테마 구성을 보관하는 유틸리티 컴포넌트를 더 생성할 수 있습니다. 이에 대한 자세한 설명은 여기를 참조해보세요:</p>
<p>그러나 시작을 도와줄 간단한 구현을 위해 styled 디렉토리의 button.tsx 파일을 열고 다음 코드를 추가해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> ReactNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">'styled-components'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> css <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'styled-components'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> type ButtonProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  children<span class="token operator">?</span><span class="token operator">:</span> ReactNode<span class="token punctuation">;</span>
  isPrimary<span class="token operator">?</span><span class="token operator">:</span> boolean
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> StyledButton <span class="token operator">=</span> styled<span class="token punctuation">.</span>a<span class="token operator">&lt;</span><span class="token punctuation">{</span> primary<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token operator">></span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  --accent-color: blue;

  background: transparent;
  border-radius: 3px;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  display: inline-block;
  margin: 1rem;
  padding: 1rem 0;
  transition: all 200ms ease-in-out;
  width: 11rem;

  &amp;:hover {
    filter: brightness(0.85);
  }

  &amp;:active {
    filter: brightness(1);
  }

  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token parameter">props</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>primary <span class="token operator">&amp;&amp;</span> css<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    background: var(--accent-color);
    color: white;
  </span><span class="token template-punctuation string">`</span></span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
</span><span class="token template-punctuation string">`</span></span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children<span class="token punctuation">,</span> isPrimary <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token operator">:</span> ButtonProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>StyledButton
      primary<span class="token operator">=</span><span class="token punctuation">{</span>isPrimary<span class="token punctuation">}</span>
    <span class="token operator">></span>
      <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>StyledButton<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서 보듯이, 우리는 Styled-Components를 활용하여 StyledButton을 만들고 그 구현을 사용자 정의 Button 컴포넌트로 덮었습니다.</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그런 다음, 다양한 변형을 보여주기 위해 구성 요소를 사용자 정의할 수 있어요 — 주요/보조:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./button'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">BasicButton</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Button<span class="token operator">></span>기본 버튼<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">PrimaryButton</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Button
      isPrimary
    <span class="token operator">></span>
      주요 버튼
    <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이후에는 Styled-Component 버튼을 보기 위해 Bit 서버로 이동해주세요.</p>
<p>전체 구현을 확인하려면 내 데모 구성 요소를 확인해주세요.</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="방법-03-sass" tabindex="-1"><a class="header-anchor" href="#방법-03-sass" aria-hidden="true">#</a> 방법 03: Sass</h1>
<p>Sass/SCSS는 제공하는 고급 기능으로 CSS를 대체해 왔습니다. SCSS를 사용하면 CSS를 중첩하고 변수를 도입하며 믹스인을 활용할 수 있습니다.</p>
<p>이러한 기능을 활용하여 노력을 최소화하면서도 강력한 CSS 코드를 작성할 수 있습니다.</p>
<p>일반적으로 .scss 파일을 읽을 수 있도록 컴파일러를 지원하는 방식으로 SCSS를 구성해야 합니다. 그러나 Bit를 사용하면 SCSS/Sass로 쉽게 빌드할 수 있으며 기본 제공됩니다.</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>다음과 같이 간단한 React 컴포넌트를 Bit를 사용하여 만들어보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>bit create react scss<span class="token operator">/</span>button
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>아래와 같은 출력이 나올 것입니다:</p>
<p>그다음, scss/button 디렉토리를 확장하고 <code v-pre>component-name</code>.scss 라는 파일을 수정하세요. 여기서는 button.scss일 것입니다. 그런 다음, 다음과 같은 결과를 볼 수 있을 거예요:</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<img src="@source/docs/Tech/2024-04-19-Top5WaystoStyleYourReactAppsin2024/img/Top5WaystoStyleYourReactAppsin2024_2.png" />
<p>다음으로, button.scss 파일을 열고 구성 요소별 SCSS 구성을 작업하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>button <span class="token punctuation">{</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 18px<span class="token punctuation">;</span>
  border<span class="token operator">-</span>color<span class="token operator">:</span> unset<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>purple <span class="token punctuation">{</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> #8d2ee6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이후 button.tsx 파일을 열어 SCSS 파일을 사용하세요:</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> ReactNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./button.scss'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> type ButtonProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  children<span class="token operator">?</span><span class="token operator">:</span> ReactNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> ButtonProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">'button purple'</span><span class="token operator">></span>
      <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음으로 Bit 서버를 열어서 SCSS 스타일을 버튼에 적용된 것을 볼 수 있어요:</p>
<p>자세한 구현 내용을 보려면 이 <a href="%EB%A7%81%ED%81%AC">Button</a>을 확인해보세요.</p>
<h1 id="접근-방식-04-tailwind" tabindex="-1"><a class="header-anchor" href="#접근-방식-04-tailwind" aria-hidden="true">#</a> 접근 방식 04: Tailwind</h1>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>테일윈드(Tailwind)는 순수 CSS로 구동되는 UI 라이브러리입니다. 부트스트랩과 비슷하지만 더 발전된 기능을 제공해요! 몇 가지 CSS 클래스로 테이블, 그리드, 카드, 아바타와 같은 복잡한 UI 구성 요소를 만들 수 있답니다.</p>
<p>하지만, 테일윈드를 설정하는 것은 쉽지 않아요. 테일윈드 컴파일러를 만들고 빌드 프로세스를 업데이트하여 테일윈드 CSS를 컴파일해야 해요. 다행히도, Bit 팀이 테일윈드 컴포넌트를 구축하는 데 활용할 수 있는 테일윈드 환경을 만들었어요.</p>
<p>이를 위해 아래 명령어를 실행해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>bit create react tailwind<span class="token operator">/</span>button <span class="token operator">--</span>env learnbit<span class="token operator">-</span>react<span class="token punctuation">.</span>tailwind<span class="token operator">/</span>tailwind<span class="token operator">-</span>env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그런 다음 다음 출력을 확인해야 합니다:</p>
<p><img src="@source/docs/Tech/2024-04-19-Top5WaystoStyleYourReactAppsin2024/img/Top5WaystoStyleYourReactAppsin2024_3.png" alt="이미지"></p>
<p>그런 다음 button.tsx 파일을 열고 Tailwind를 작성해 봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> ButtonHTMLAttributes<span class="token punctuation">,</span> ReactNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> twMerge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'tailwind-merge'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> type ButtonProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  children<span class="token operator">?</span><span class="token operator">:</span> ReactNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token operator">&amp;</span> ButtonHTMLAttributes<span class="token operator">&lt;</span>HTMLButtonElement<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children<span class="token punctuation">,</span> className<span class="token punctuation">,</span> <span class="token operator">...</span>rest <span class="token punctuation">}</span><span class="token operator">:</span> ButtonProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> classes <span class="token operator">=</span> <span class="token function">twMerge</span><span class="token punctuation">(</span>
    <span class="token string">'inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'</span><span class="token punctuation">,</span>
    className
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token punctuation">{</span>classes<span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token string">"button"</span> <span class="token punctuation">{</span><span class="token operator">...</span>rest<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그 다음으로, 결과를 정의하는 구성을 추가해봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./button'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'@learnbit/styling.config.tailwind/globals.tailwind.css'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">BasicButton</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Button type<span class="token operator">=</span><span class="token string">"button"</span><span class="token operator">></span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이후에 Bit 개발 서버로 돌아가면 아래와 같은 결과를 볼 수 있을 거에요:</p>
<p>완전한 구현을 보려면 Bit Cloud에서 이 컴포넌트를 확인해보세요.</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="방법-05-emotion" tabindex="-1"><a class="header-anchor" href="#방법-05-emotion" aria-hidden="true">#</a> 방법 05: Emotion</h1>
<p>마침내, Emotion을 얻었습니다. Emotion은 styled-components와 매우 유사합니다. 사용자 정의 CSS로 스타일이 지정된 구성 요소를 만들 수 있거나 제공하는 CSS 함수에 대해 자동으로 className을 생성할 수 있습니다. 이 내용은 그들의 문서에 명확하게 나와 있습니다:</p>
<p>Emotion을 사용하는 것은 정말 간단합니다. Emotion CSS를 직접 사용하여 작업을 시작할 수 있도록 dev 환경을 만들었습니다. 이를 위해 다음 명령어를 사용하여 React 컴포넌트를 만들어보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>bit create react emotion<span class="token operator">/</span>button <span class="token operator">--</span>env dummyorg<span class="token punctuation">.</span>react<span class="token operator">-</span>css<span class="token operator">/</span>envs<span class="token operator">/</span>react<span class="token operator">-</span>emotion
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위의 내용을 아래와 같이 Markdown 형식으로 변경하세요:</p>
<p><img src="@source/docs/Tech/2024-04-19-Top5WaystoStyleYourReactAppsin2024/img/Top5WaystoStyleYourReactAppsin2024_4.png" alt="이미지"></p>
<p>다음으로, 파일을 열고 React 컴포넌트를 Emotion을 사용하여 아래와 같이 구성해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> ReactNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> css <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@emotion/css'</span>

<span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token string">'white'</span>
<span class="token keyword">export</span> type ButtonProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  children<span class="token operator">?</span><span class="token operator">:</span> ReactNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> ButtonProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div
      className<span class="token operator">=</span><span class="token punctuation">{</span>css<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &amp;:hover {
        color: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>color<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;
      }
    </span><span class="token template-punctuation string">`</span></span> <span class="token keyword">as</span> any<span class="token punctuation">}</span>
    <span class="token operator">></span>
      <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>다음으로, 개발 서버로 돌아가서 버튼의 출력이 핫핑크로 나타나는 것을 확인할 수 있을 거예요.</p>
<p>자세한 구현 방법이 궁금하시다면 전체 컴포넌트를 확인해보세요.</p>
<h1 id="마무리" tabindex="-1"><a class="header-anchor" href="#마무리" aria-hidden="true">#</a> 마무리</h1>
<p>그게 다예요! 이런 라이브러리들은 혼자 설정하기 꽤 어려울 수 있어요. 하지만 Bit와 같은 도구로 빌드하는 경우에는 작업 흐름에서 활용할 수 있는 많은 재사용 가능한 컴포넌트와 환경이 준비되어 있어서 쉽게 만들 수 있어요.</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 라이브러리들을 이해하고 2024년 여러분의 다음 주요 React 프로젝트를 위해 올바른 라이브러리를 선택하는 데 도움이 되었으면 좋겠어요!</p>
<p>전체 코드를 살펴보려면 제 Bit Scope를 확인해주세요.</p>
<p>읽어주셔서 감사합니다.</p>
<h1 id="더-알아보기" tabindex="-1"><a class="header-anchor" href="#더-알아보기" aria-hidden="true">#</a> 더 알아보기</h1>
</div></template>
