<template><div><h1 id="lazy-loading" tabindex="-1"><a class="header-anchor" href="#lazy-loading" aria-hidden="true">#</a> Lazy Loading</h1>
<p>레이지 로딩은 Next.js에서 경로를 렌더링하는 데 필요한 JavaScript 양을 줄여 애플리케이션의 초기 로딩 성능을 향상시켜주는 기능입니다.</p>
<p>클라이언트 컴포넌트와 가져온 라이브러리의 로딩을 지연시키고, 필요할 때에만 클라이언트 번들에 포함되도록 합니다. 예를 들어 사용자가 모달을 열 때까지 모달의 로딩을 지연시키고 싶을 수 있습니다.</p>
<p>Next.js에서 레이지 로딩을 구현하는 두 가지 방법이 있습니다:</p>
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
<ul>
<li>다이나믹 임포트를 next/dynamic로 사용하기</li>
<li>React.lazy() 및 Suspense를 사용하기</li>
</ul>
<p>기본적으로, 서버 컴포넌트는 자동으로 코드를 분할하며, 서버에서 클라이언트로 UI 조각들을 점진적으로 전송할 수 있는 스트리밍을 사용할 수 있습니다. Lazy loading은 클라이언트 컴포넌트에 적용됩니다.</p>
<h2 id="next-dynamic" tabindex="-1"><a class="header-anchor" href="#next-dynamic" aria-hidden="true">#</a> next/dynamic</h2>
<p>next/dynamic은 React.lazy()와 Suspense의 결합체입니다. 앱 및 페이지 디렉토리에서 동일한 방식으로 작동하여 점진적인 이주를 가능하게 합니다.</p>
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
<h2 id="예시" tabindex="-1"><a class="header-anchor" href="#예시" aria-hidden="true">#</a> 예시</h2>
<p>next/dynamic을 사용하면 헤더 컴포넌트가 페이지의 초기 JavaScript 번들에 포함되지 않습니다. 페이지는 Suspense 대기 상태를 먼저 렌더링한 다음, Suspense 경계가 해결되면 헤더 컴포넌트를 렌더링합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> dynamic <span class="token keyword">from</span> <span class="token string">"next/dynamic"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> DynamicHeader <span class="token operator">=</span> <span class="token function">dynamic</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"../components/header"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">loading</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>p<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>DynamicHeader <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두면 좋은 점: import(<code v-pre>경로/컴포넌트</code>)에서 경로는 명시적으로 작성되어야 합니다. 템플릿 문자열이나 변수로 사용할 수 없습니다. 또한 import()는 webpack 번들/모듈 ID를 specific dynamic() 호출에 일치시키고 렌더링 전에 프리로드하기 위해 dynamic() 호출 내부에서 이뤄져야 합니다. dynamic()는 React 렌더링 내부에 사용할 수 없으며, 프리로딩이 작동하려면 모듈의 최상위 수준에서 표시되어야 합니다. React.lazy와 유사합니다.</p>
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
<h2 id="이름이-지정된-내보내기" tabindex="-1"><a class="header-anchor" href="#이름이-지정된-내보내기" aria-hidden="true">#</a> 이름이 지정된 내보내기</h2>
<p>이름이 지정된 내보내기를 동적으로 가져오려면, import()에서 반환된 Promise로부터 해당 값을 반환할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>Hello<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// pages/index.js</span>
<span class="token keyword">import</span> dynamic <span class="token keyword">from</span> <span class="token string">"next/dynamic"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> DynamicComponent <span class="token operator">=</span> <span class="token function">dynamic</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"../components/hello"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">mod</span><span class="token punctuation">)</span> <span class="token operator">=></span> mod<span class="token punctuation">.</span>Hello<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ssr-없이" tabindex="-1"><a class="header-anchor" href="#ssr-없이" aria-hidden="true">#</a> SSR 없이</h2>
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
<p>클라이언트 측에서 컴포넌트를 동적으로 로드하려면 ssr 옵션을 사용하여 서버 렌더링을 비활성화할 수 있습니다. 이 기능은 외부 종속성이나 컴포넌트가 window와 같은 브라우저 API에 의존하는 경우 유용합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> dynamic <span class="token keyword">from</span> <span class="token string">"next/dynamic"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> DynamicHeader <span class="token operator">=</span> <span class="token function">dynamic</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"../components/header"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">ssr</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="외부-라이브러리-사용하기" tabindex="-1"><a class="header-anchor" href="#외부-라이브러리-사용하기" aria-hidden="true">#</a> 외부 라이브러리 사용하기</h2>
<p>이 예제는 퍼지 검색을 위해 외부 라이브러리인 fuse.js를 사용합니다. 사용자가 검색 입력란에 입력을 할 때에만 모듈이 브라우저에서 로드됩니다.</p>
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
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Tim"</span><span class="token punctuation">,</span> <span class="token string">"Joe"</span><span class="token punctuation">,</span> <span class="token string">"Bel"</span><span class="token punctuation">,</span> <span class="token string">"Lee"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>results<span class="token punctuation">,</span> setResults<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>검색<span class="token punctuation">"</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">;</span>
          <span class="token comment">// 동적으로 fuse.js를 로드합니다</span>
          <span class="token keyword">const</span> Fuse <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"fuse.js"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default<span class="token punctuation">;</span>
          <span class="token keyword">const</span> fuse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fuse</span><span class="token punctuation">(</span>names<span class="token punctuation">)</span><span class="token punctuation">;</span>

          <span class="token function">setResults</span><span class="token punctuation">(</span>fuse<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">></span></span><span class="token plain-text">결과: </span><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>results<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
