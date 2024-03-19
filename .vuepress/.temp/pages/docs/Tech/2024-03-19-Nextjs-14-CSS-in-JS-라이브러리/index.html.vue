<template><div><h1 id="nextjs-14-css-in-js-라이브러리" tabindex="-1"><a class="header-anchor" href="#nextjs-14-css-in-js-라이브러리" aria-hidden="true">#</a> Nextjs 14 CSS in JS 라이브러리</h1>
<h1 id="css-in-js" tabindex="-1"><a class="header-anchor" href="#css-in-js" aria-hidden="true">#</a> CSS-in-JS</h1>
<blockquote>
<p>경고: 서버 컴포넌트에서 런타임 JavaScript를 필요로 하는 CSS-in-JS 라이브러리는 현재 지원되지 않습니다. CSS-in-JS를 사용하는 것은 React Server Components와 Streaming을 포함한 최신 React 버전을 지원하는 라이브러리 저자에게 필요합니다.
우리는 React 팀과 협업하여 React Server Components와 스트리밍 아키텍처를 지원하는 CSS 및 JavaScript 자산을 처리하기 위한 상류 API에 대해 작업 중입니다.</p>
</blockquote>
<p>다음 라이브러리는 앱 디렉토리의 클라이언트 컴포넌트에서 지원됩니다(알파벳순):</p>
<ul>
<li>chakra-ui</li>
<li>kuma-ui</li>
<li>@mui/material</li>
<li>@mui/joy</li>
<li>pandacss</li>
<li>styled-jsx</li>
<li>styled-components</li>
<li>stylex</li>
<li>tamagui</li>
<li>tss-react</li>
<li>vanilla-extract</li>
</ul>
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
<p>현재 지원 작업 중인 라이브러리는 다음과 같습니다:</p>
<ul>
<li>emotion</li>
</ul>
<blockquote>
<p>알아두면 좋은 점: 우리는 다양한 CSS-in-JS 라이브러리를 테스트하고 React 18 기능이나 앱 디렉토리를 지원하는 라이브러리에 대한 더 많은 예제를 추가할 예정입니다.</p>
</blockquote>
<p>서버 컴포넌트를 스타일링하려면 CSS 모듈이나 PostCSS 또는 Tailwind CSS와 같은 CSS 파일을 출력하는 다른 솔루션을 사용하는 것을 권장합니다.</p>
<h2 id="앱에서-css-in-js-구성" tabindex="-1"><a class="header-anchor" href="#앱에서-css-in-js-구성" aria-hidden="true">#</a> 앱에서 CSS-in-JS 구성</h2>
<p>CSS-in-JS를 구성하는 것은 세 단계의 선택 프로세스로 이루어집니다:</p>
<ul>
<li>모든 CSS 규칙을 모아 놓는 스타일 레지스트리</li>
<li>사용하기 전에 스타일 레지스트리에 규칙을 주입하는 새로운 useServerInsertedHTML 훅</li>
<li>초기 서버 측 렌더링 중에 앱을 스타일 레지스트리로 래핑하는 클라이언트 컴포넌트</li>
</ul>
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
<h3 id="styled-jsx" tabindex="-1"><a class="header-anchor" href="#styled-jsx" aria-hidden="true">#</a> styled-jsx</h3>
<p>styled-jsx를 클라이언트 컴포넌트에서 사용하려면 v5.1.0을 사용해야 합니다. 먼저 새로운 레지스트리를 만들어 보세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useServerInsertedHTML <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> StyleRegistry<span class="token punctuation">,</span> createStyleRegistry <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"styled-jsx"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">StyledJsxRegistry</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 초기 상태로 스타일시트를 한 번만 생성합니다</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>jsxStyleRegistry<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">createStyleRegistry</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useServerInsertedHTML</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> styles <span class="token operator">=</span> jsxStyleRegistry<span class="token punctuation">.</span><span class="token function">styles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    jsxStyleRegistry<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span><span class="token operator">></span><span class="token punctuation">{</span>styles<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>StyleRegistry registry<span class="token operator">=</span><span class="token punctuation">{</span>jsxStyleRegistry<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>StyleRegistry<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음 루트 레이아웃을 레지스트리로 래핑하세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> StyledJsxRegistry <span class="token keyword">from</span> <span class="token string">"./registry"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html<span class="token operator">></span>
      <span class="token operator">&lt;</span>body<span class="token operator">></span>
        <span class="token operator">&lt;</span>StyledJsxRegistry<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>StyledJsxRegistry<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>예제는 여기에서 확인할 수 있습니다.</p>
<h3 id="styled-components" tabindex="-1"><a class="header-anchor" href="#styled-components" aria-hidden="true">#</a> Styled Components</h3>
<p>styled-components@6 이상을 구성하는 방법에 대한 예시입니다:</p>
<p>먼저 next.config.js에서 styled-components를 활성화하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">compiler</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">styledComponents</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음 styled-components API를 사용하여 렌더링 중에 생성된 모든 CSS 스타일 규칙을 수집하는 전역 레지스트리 컴포넌트와 해당 규칙을 반환하는 함수를 만들어 보세요. 그런 다음 useServerInsertedHTML 훅을 사용하여 레지스트리에서 수집된 스타일을 루트 레이아웃의 <code v-pre>&lt;head&gt;</code> HTML 태그에 주입하세요.</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useServerInsertedHTML <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ServerStyleSheet<span class="token punctuation">,</span> StyleSheetManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"styled-components"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">StyledComponentsRegistry</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 초기 상태로 스타일시트를 한 번만 생성합니다</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>styledComponentsStyleSheet<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">ServerStyleSheet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useServerInsertedHTML</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> styles <span class="token operator">=</span> styledComponentsStyleSheet<span class="token punctuation">.</span><span class="token function">getStyleElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    styledComponentsStyleSheet<span class="token punctuation">.</span>instance<span class="token punctuation">.</span><span class="token function">clearTag</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span><span class="token operator">></span><span class="token punctuation">{</span>styles<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">"undefined"</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>StyleSheetManager sheet<span class="token operator">=</span><span class="token punctuation">{</span>styledComponentsStyleSheet<span class="token punctuation">.</span>instance<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>StyleSheetManager<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>루트 레이아웃의 children을 스타일 레지스트리 컴포넌트로 래핑하세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> StyledComponentsRegistry <span class="token keyword">from</span> <span class="token string">"./lib/registry"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html<span class="token operator">></span>
      <span class="token operator">&lt;</span>body<span class="token operator">></span>
        <span class="token operator">&lt;</span>StyledComponentsRegistry<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>StyledComponentsRegistry<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>예제는 여기에서 확인할 수 있습니다.</p>
<blockquote>
<p>알아두면 좋은 점:
서버 렌더링 중에 스타일은 전역 레지스트리로 추출되어 HTML의 <code v-pre>&lt;head&gt;</code>에 플러시됩니다. 이렇게 하면 스타일 규칙이 사용되는 모든 내용 앞에 배치됩니다. 향후에는 스타일을 주입할 위치를 결정하기 위해 향상된 React 기능을 사용할 수 있을 것입니다.
스트리밍 중에는 각 청크에서 스타일이 수집되고 기존 스타일에 추가됩니다. 클라이언트 측 하이드레이션이 완료된 후에는 styled-components가 일반적으로 이어지고 추가적인 동적 스타일을 주입합니다.
스타일 레지스트리의 최상위 레벨에 클라이언트 컴포넌트를 사용하는 이유는 CSS 규칙을 이 방식으로 추출하는 것이 더 효율적이기 때문입니다. 이렇게 하면 후속 서버 렌더링에서 스타일을 다시 생성하는 것을 피하고 서버 컴포넌트 페이로드로 보내지 않습니다.
styled-components 컴파일링의 개별 속성을 구성해야 하는 고급 사용 사례에 대해서는 Next.js styled-components API 참조를 참고하세요.</p>
</blockquote>
</div></template>
