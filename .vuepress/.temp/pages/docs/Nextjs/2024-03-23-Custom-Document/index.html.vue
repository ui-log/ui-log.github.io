<template><div><h1 id="사용자-정의-문서" tabindex="-1"><a class="header-anchor" href="#사용자-정의-문서" aria-hidden="true">#</a> 사용자 정의 문서</h1>
<p>사용자 정의 문서는 페이지를 렌더링하는 데 사용되는 <code v-pre>html</code> 및 <code v-pre>body</code> 태그를 업데이트할 수 있습니다.</p>
<p>기본 문서를 재정의하려면 아래와 같이 페이지/_document 파일을 생성하세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Html<span class="token punctuation">,</span> Head<span class="token punctuation">,</span> Main<span class="token punctuation">,</span> NextScript <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/document"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Document</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Head <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>body<span class="token operator">></span>
        <span class="token operator">&lt;</span>Main <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>NextScript <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<blockquote>
<p>유용한 정보
_document 파일은 서버에서만 렌더링되므로 onClick 같은 이벤트 핸들러를 사용할 수 없습니다.
<code v-pre>Html</code>, <code v-pre>Head /</code>, <code v-pre>Main /</code> 및 <code v-pre>NextScript /</code>는 페이지가 올바르게 렌더링되도록 필요합니다.</p>
</blockquote>
<h2 id="주의-사항" tabindex="-1"><a class="header-anchor" href="#주의-사항" aria-hidden="true">#</a> 주의 사항</h2>
<ul>
<li>_document에 사용된 <code v-pre>Head /</code> 컴포넌트는 next/head와 같은 것이 아닙니다. 여기서 사용된 <code v-pre>Head /</code> 컴포넌트는 모든 페이지에 공통인 <code v-pre>head</code> 코드에만 사용해야 합니다. 다른 경우, 예를 들어 <code v-pre>title</code> 태그 같은 경우에는 페이지나 컴포넌트에서 next/head를 사용하는 것을 권장합니다.</li>
<li><code v-pre>Main /</code> 바깥에 있는 React 컴포넌트는 브라우저에서 초기화되지 않습니다. 여기에 애플리케이션 논리나 사용자 정의 CSS(예: styled-jsx)를 추가하지 마세요. 모든 페이지에 공유되는 컴포넌트(예: 메뉴 또는 툴바)가 필요한 경우에는 레이아웃을 참조하세요.</li>
<li>Document는 현재 Next.js 데이터 가져오기 메서드인 getStaticProps 또는 getServerSideProps를 지원하지 않습니다.</li>
</ul>
<h2 id="renderpage-사용자-정의하기" tabindex="-1"><a class="header-anchor" href="#renderpage-사용자-정의하기" aria-hidden="true">#</a> renderPage 사용자 정의하기</h2>
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
<p>렌더페이지를 사용자 정의하는 것은 고급 기능이며 서버 사이드 렌더링을 지원하기 위해 CSS-in-JS와 같은 라이브러리에 필요합니다. 이것은 내장 styled-jsx 지원에는 필요하지 않습니다.</p>
<p>이런 패턴 사용을 추천하지는 않습니다. 대신에 App Router를 점진적으로 도입하여 페이지와 레이아웃에 데이터를 더 쉽게 가져올 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> Document<span class="token punctuation">,</span> <span class="token punctuation">{</span> Html<span class="token punctuation">,</span> Head<span class="token punctuation">,</span> Main<span class="token punctuation">,</span> NextScript<span class="token punctuation">,</span> DocumentContext<span class="token punctuation">,</span> DocumentInitialProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/document"</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MyDocument</span> <span class="token keyword">extends</span> <span class="token class-name">Document</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">getInitialProps</span><span class="token punctuation">(</span>ctx<span class="token operator">:</span> DocumentContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>DocumentInitialProps<span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> originalRenderPage <span class="token operator">=</span> ctx<span class="token punctuation">.</span>renderPage<span class="token punctuation">;</span>

    <span class="token comment">// React 렌더링 로직을 동기적으로 실행</span>
    ctx<span class="token punctuation">.</span><span class="token function-variable function">renderPage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
      <span class="token function">originalRenderPage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// 전체 React 트리 감싸는 데 유용</span>
        <span class="token function-variable function">enhanceApp</span><span class="token operator">:</span> <span class="token punctuation">(</span>App<span class="token punctuation">)</span> <span class="token operator">=></span> App<span class="token punctuation">,</span>
        <span class="token comment">// 페이지별로 감싸는 데 유용</span>
        <span class="token function-variable function">enhanceComponent</span><span class="token operator">:</span> <span class="token punctuation">(</span>Component<span class="token punctuation">)</span> <span class="token operator">=></span> Component<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 부모의 `getInitialProps` 실행, 이제 사용자 지정 `renderPage`를 포함합니다</span>
    <span class="token keyword">const</span> initialProps <span class="token operator">=</span> <span class="token keyword">await</span> Document<span class="token punctuation">.</span><span class="token function">getInitialProps</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> initialProps<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>Html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Head <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>body<span class="token operator">></span>
          <span class="token operator">&lt;</span>Main <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>NextScript <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Html<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MyDocument<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두면 좋은 점
_document의 getInitialProps는 클라이언트 측 전환 중에 호출되지 않습니다.
_document에 대한 ctx 객체는 getInitialProps에서 받는 것과 동일하며, renderPage가 추가된 것이 차이점입니다.</p>
</blockquote>
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
</div></template>
