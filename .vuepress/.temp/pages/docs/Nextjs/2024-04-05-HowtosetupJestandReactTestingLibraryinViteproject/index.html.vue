<template><div><p><img src="@source/docs/Nextjs/2024-04-05-HowtosetupJestandReactTestingLibraryinViteproject/img/HowtosetupJestandReactTestingLibraryinViteproject_0.png" alt="이미지"></p>
<p>Create Vite App으로 만든 React 프로젝트에는 기본적으로 테스트가 포함되어 있지 않으므로 제대로 구성해야 합니다. 이 단계들을 자세히 살펴보겠습니다.</p>
<p>시작하기 전에 아래 링크를 통해 변경 사항에 접근할 수 있습니다: <a href="https://github.com/ozcanzaferayan/vite-jest-integration/commit/68af95d37849d7cfc6fbd5b005b6e8481896e287" target="_blank" rel="noopener noreferrer">링크<ExternalLinkIcon/></a></p>
<h1 id="지시사항" tabindex="-1"><a class="header-anchor" href="#지시사항" aria-hidden="true">#</a> 지시사항</h1>
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
<p>1- 다소 복잡한 테스트를 위해 App.jsx를 아래와 같이 변경하세요</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// App.jsx</span>
<span class="token keyword">import</span> <span class="token string">"./App.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>todos<span class="token punctuation">,</span> setTodos<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://jsonplaceholder.typicode.com/todos"</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">json</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setTodos</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token punctuation">{</span>todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">todo</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
          <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>completed<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2- App.jsx 파일 옆에 App.test.js 및 App.snapshot.test.js 파일을 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// App.test.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> screen <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@testing-library/react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">"./App"</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"App"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> originalFetch<span class="token punctuation">;</span>

  <span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    originalFetch <span class="token operator">=</span> global<span class="token punctuation">.</span>fetch<span class="token punctuation">;</span>
    global<span class="token punctuation">.</span>fetch <span class="token operator">=</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
      Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token function-variable function">json</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
          Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Kaliteye hoşgeldiniz"</span><span class="token punctuation">,</span>
              <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    global<span class="token punctuation">.</span>fetch <span class="token operator">=</span> originalFetch<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"renders App component"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> linkElement <span class="token operator">=</span> <span class="token keyword">await</span> screen<span class="token punctuation">.</span><span class="token function">findByText</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Kaliteye hoşgeldiniz</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>linkElement<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// App.snapshot.test.js</span>
<span class="token keyword">import</span> renderer <span class="token keyword">from</span> <span class="token string">"react-test-renderer"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">"./App"</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"renders learn react link"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> tree <span class="token operator">=</span> renderer<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">expect</span><span class="token punctuation">(</span>tree<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toMatchInlineSnapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3- 다음과 같이 .eslintrc.cjs를 변경하십시오.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"react-app"</span><span class="token punctuation">,</span> <span class="token string">"react-app/jest"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4- package에 jest를 추가하고 package.json에 추가하십시오.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add <span class="token operator">-</span><span class="token constant">D</span> jest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"dev"</span><span class="token operator">:</span> <span class="token string">"vite"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"vite build"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"lint"</span><span class="token operator">:</span> <span class="token string">"eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"preview"</span><span class="token operator">:</span> <span class="token string">"vite preview"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"test"</span><span class="token operator">:</span> <span class="token string">"jest"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5- JSX 지원을 위해 babel 프리셋 추가하고 프로젝트에 .babelrc 파일을 추가하세요</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add <span class="token operator">-</span><span class="token constant">D</span> @babel<span class="token operator">/</span>preset<span class="token operator">-</span>env @babel<span class="token operator">/</span>preset<span class="token operator">-</span>react
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"@babel/preset-env"</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">"@babel/preset-react"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token property">"runtime"</span><span class="token operator">:</span> <span class="token string">"automatic"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6- React Testing Library 의존성 추가</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add <span class="token operator">-</span><span class="token constant">D</span> @testing<span class="token operator">-</span>library<span class="token operator">/</span>react @testing<span class="token operator">-</span>library<span class="token operator">/</span>jest<span class="token operator">-</span>dom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>8- SVG 및 CSS 파일 지원을 위해 jest-svg-transformer와 identity-obj-proxy를 추가하세요. 그런 다음 package.json의 jest 구성 내부에 moduleMapper를 추가하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add <span class="token operator">-</span><span class="token constant">D</span> jest<span class="token operator">-</span>svg<span class="token operator">-</span>transformer identity<span class="token operator">-</span>obj<span class="token operator">-</span>proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token string-property property">"jest"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"moduleNameMapper"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"^.+\\.svg$"</span><span class="token operator">:</span> <span class="token string">"jest-svg-transformer"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"^.+\\.(css|less|scss)$"</span><span class="token operator">:</span> <span class="token string">"identity-obj-proxy"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>9- 웹 환경 API를 지원하기 위해 jest-environment-jsdom을 jest 구성에 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add <span class="token operator">-</span><span class="token constant">D</span> jest<span class="token operator">-</span>environment<span class="token operator">-</span>jsdom
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"jest"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"testEnvironment"</span><span class="token operator">:</span> <span class="token string">"jsdom"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"moduleNameMapper"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"^.+\\.svg$"</span><span class="token operator">:</span> <span class="token string">"jest-svg-transformer"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"^.+\\.(css|less|scss)$"</span><span class="token operator">:</span> <span class="token string">"identity-obj-proxy"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">"setupFilesAfterEnv"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"&lt;rootDir>/setupTests.js"</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>10- 또한 @testing-library/jest-dom 패키지를 추가하고 setupTests.js를 구성하십시오.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add <span class="token operator">-</span><span class="token constant">D</span> jest<span class="token operator">-</span>environment<span class="token operator">-</span>jsdom
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// setupTests.js</span>
<span class="token keyword">import</span> <span class="token string">"@testing-library/jest-dom"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>11- 이제 스냅샷 테스트를 위해 react-test-renderer를 추가해주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add <span class="token operator">-</span><span class="token constant">D</span> react<span class="token operator">-</span>test<span class="token operator">-</span>renderer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>12- 이제 <code v-pre>yarn test</code>로 테스트를 시작할 수 있어요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>Jest와 React Testing Library를 추가하는 것은 때로는 어렵고 복잡할 수 있습니다. 그러나 이러한 단계를 따라 프로젝트에 추가할 수 있습니다.</p>
<p>이 글의 일부 내용이 누락되거나 잘못된 부분이 있다면 언제든지 연락해주세요. 다음 포스트에서 다시 만나요...</p>
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
<p><img src="https://miro.medium.com/v2/resize:fit:292/1*XgvN44MURD-eGdm00Yj03g.gif" alt="gif"></p>
</div></template>
