<template><div><h1 id="next-js에서-vitest-설정하기" tabindex="-1"><a class="header-anchor" href="#next-js에서-vitest-설정하기" aria-hidden="true">#</a> Next.js에서 Vitest 설정하기</h1>
<p>Vite와 React Testing Library는 Unit Testing을 위해 자주 함께 사용됩니다. 이 안내서는 Next.js와 함께 Vitest를 설정하고 첫 번째 테스트를 작성하는 방법을 보여줍니다.</p>
<blockquote>
<p>알아두면 좋은 정보: 비동기 Server Components가 React 생태계에 새롭게 추가되었기 때문에, Vitest는 현재 이를 지원하지 않습니다. 동기적인 Server 및 Client Components에 대한 단위 테스트는 여전히 실행할 수 있지만, 비동기 구성 요소에 대해서는 E2E 테스트를 권장합니다.</p>
</blockquote>
<h2 id="빠른-시작" tabindex="-1"><a class="header-anchor" href="#빠른-시작" aria-hidden="true">#</a> 빠른 시작</h2>
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
<p>빠르게 시작하려면 Next.js with-vitest 예제를 사용하여 create-next-app을 실행할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>next<span class="token operator">-</span>app@latest <span class="token operator">--</span>example <span class="token keyword">with</span><span class="token operator">-</span>vitest <span class="token keyword">with</span><span class="token operator">-</span>vitest<span class="token operator">-</span>app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="수동-설정" tabindex="-1"><a class="header-anchor" href="#수동-설정" aria-hidden="true">#</a> 수동 설정</h2>
<p>Vitest를 수동으로 설정하려면 vitest 및 다음 패키지들을 개발 종속성으로 설치하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">-</span><span class="token constant">D</span> vitest @vitejs<span class="token operator">/</span>plugin<span class="token operator">-</span>react jsdom @testing<span class="token operator">-</span>library<span class="token operator">/</span>react
# 또는
yarn add <span class="token operator">-</span><span class="token constant">D</span> vitest @vitejs<span class="token operator">/</span>plugin<span class="token operator">-</span>react jsdom @testing<span class="token operator">-</span>library<span class="token operator">/</span>react
# 또는
pnpm install <span class="token operator">-</span><span class="token constant">D</span> vitest @vitejs<span class="token operator">/</span>plugin<span class="token operator">-</span>react jsdom @testing<span class="token operator">-</span>library<span class="token operator">/</span>react
# 또는
bun add <span class="token operator">-</span><span class="token constant">D</span> vitest @vitejs<span class="token operator">/</span>plugin<span class="token operator">-</span>react jsdom @testing<span class="token operator">-</span>library<span class="token operator">/</span>react
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>프로젝트 루트에 vitest.config.ts|js 파일을 생성하고 다음 옵션을 추가하세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vitest/config"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> react <span class="token keyword">from</span> <span class="token string">"@vitejs/plugin-react"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">react</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  test<span class="token operator">:</span> <span class="token punctuation">{</span>
    environment<span class="token operator">:</span> <span class="token string">"jsdom"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vitest 구성에 대한 자세한 정보는 Vitest 구성 문서를 참조해주세요.</p>
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
<p>그럼, package.json에 테스트 스크립트를 추가해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"dev"</span><span class="token operator">:</span> <span class="token string">"next dev"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"next build"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token string">"next start"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"test"</span><span class="token operator">:</span> <span class="token string">"vitest"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>npm run test을 실행하면 Vitest가 기본적으로 프로젝트의 변경 사항을 감시합니다.</p>
<h2 id="첫-번째-vitest-단위-테스트-생성하기" tabindex="-1"><a class="header-anchor" href="#첫-번째-vitest-단위-테스트-생성하기" aria-hidden="true">#</a> 첫 번째 Vitest 단위 테스트 생성하기</h2>
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
<p>모든 것이 제대로 작동하는지 확인하기 위해 <code v-pre>&lt;Page /&gt;</code> 컴포넌트가 제목을 성공적으로 렌더링하는지 확인하는 테스트를 만들어 보세요:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/about"</span><span class="token operator">></span>About<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> expect<span class="token punctuation">,</span> test <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vitest"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> screen <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@testing-library/react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Page <span class="token keyword">from</span> <span class="token string">"../app/page"</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"Page"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Page <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">expect</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span><span class="token function">getByRole</span><span class="token punctuation">(</span><span class="token string">"heading"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> level<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">"Home"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeDefined</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>참고: 위 예시는 일반적인 <code v-pre>__tests__</code> 관례를 사용하고 있지만, 테스트 파일은 앱 라우터 내에도 위치할 수 있습니다.</p>
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
<h2 id="테스트-실행하기" tabindex="-1"><a class="header-anchor" href="#테스트-실행하기" aria-hidden="true">#</a> 테스트 실행하기</h2>
<p>그런 다음 다음 명령어를 실행하여 테스트를 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm run test
# 또는
yarn test
# 또는
pnpm test
# 또는
bun test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="추가-리소스" tabindex="-1"><a class="header-anchor" href="#추가-리소스" aria-hidden="true">#</a> 추가 리소스</h2>
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
<p>이 리소스들이 도움이 될 수 있어요:</p>
<ul>
<li>Next.js with Vitest 예제</li>
<li>Vitest 문서</li>
<li>React Testing Library 문서</li>
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
</div></template>
