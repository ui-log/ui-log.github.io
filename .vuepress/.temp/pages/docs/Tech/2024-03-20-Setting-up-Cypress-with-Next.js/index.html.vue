<template><div><h1 id="next-js에서-cypress-설정하기" tabindex="-1"><a class="header-anchor" href="#next-js에서-cypress-설정하기" aria-hidden="true">#</a> Next.js에서 Cypress 설정하기</h1>
<p>Cypress는 엔드 투 엔드(E2E) 및 컴포넌트 테스트에 사용되는 테스트 러너입니다. 이 페이지에서는 Next.js와 함께 Cypress를 설정하고 첫 번째 테스트를 작성하는 방법을 안내합니다.</p>
<blockquote>
<p>경고:
현재 Cypress는 Next.js 버전 14와 비동기 서버 컴포넌트를 지원하지 않습니다. 이 문제들은 추적 중입니다. 현재는 Next.js 버전 13에서 컴포넌트 테스트가 작동하며, 비동기 서버 컴포넌트에 대해서는 E2E 테스트를 권장합니다.
Cypress는 현재 TypeScript 버전 5와 moduleResolution: &quot;bundler&quot;를 지원하지 않습니다. 이 문제는 추적 중입니다.</p>
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
<p>create-next-app을 with-cypress 예제와 함께 사용하여 빠르게 시작할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>next<span class="token operator">-</span>app@latest <span class="token operator">--</span>example <span class="token keyword">with</span><span class="token operator">-</span>cypress <span class="token keyword">with</span><span class="token operator">-</span>cypress<span class="token operator">-</span>app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="수동-설정" tabindex="-1"><a class="header-anchor" href="#수동-설정" aria-hidden="true">#</a> 수동 설정</h2>
<p>수동으로 Cypress를 설정하려면 Cypress를 개발 의존성으로 설치하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">-</span><span class="token constant">D</span> cypress
# 또는
yarn add <span class="token operator">-</span><span class="token constant">D</span> cypress
# 또는
pnpm install <span class="token operator">-</span><span class="token constant">D</span> cypress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>package.json 스크립트 필드에 Cypress 실행 명령어를 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"dev"</span><span class="token operator">:</span> <span class="token string">"next dev"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"next build"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token string">"next start"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"lint"</span><span class="token operator">:</span> <span class="token string">"next lint"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"cypress:open"</span><span class="token operator">:</span> <span class="token string">"cypress open"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>처음으로 Cypress를 실행하여 Cypress 테스트 스위트를 엽니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm run cypress<span class="token operator">:</span>open
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>E2E 테스트 및/또는 구성 요소 테스트를 구성할 수 있습니다. 이러한 옵션 중 하나를 선택하면 자동으로 프로젝트에 cypress.config.js 파일과 cypress 폴더가 생성됩니다.</p>
<h2 id="첫-번째-cypress-e2e-테스트-만들기" tabindex="-1"><a class="header-anchor" href="#첫-번째-cypress-e2e-테스트-만들기" aria-hidden="true">#</a> 첫 번째 Cypress E2E 테스트 만들기</h2>
<p>cypress.config.js 파일이 다음 구성을 가지고 있는지 확인하십시오:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"cypress"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">e2e</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">setupNodeEvents</span><span class="token punctuation">(</span><span class="token parameter">on<span class="token punctuation">,</span> config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"cypress"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">e2e</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">setupNodeEvents</span><span class="token punctuation">(</span><span class="token parameter">on<span class="token punctuation">,</span> config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음, 두 개의 새로운 Next.js 파일을 생성하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/about"</span><span class="token operator">></span>About<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>About<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>홈<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>네비게이션이 제대로 작동하는지 확인하는 테스트를 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"Navigation"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"어바웃 페이지로 이동해야 함"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 인덱스 페이지에서 시작</span>
    cy<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token string">"http://localhost:3000/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// "about"을 포함한 href 속성을 가진 링크를 찾아 클릭</span>
    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'a[href*="about"]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 새로운 URL은 "/about"을 포함해야 함</span>
    cy<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">"include"</span><span class="token punctuation">,</span> <span class="token string">"/about"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 새 페이지에는 "About"이라는 h1이 있어야 함</span>
    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"h1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">"About"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="e2e-테스트-실행하기" tabindex="-1"><a class="header-anchor" href="#e2e-테스트-실행하기" aria-hidden="true">#</a> E2E 테스트 실행하기</h3>
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
<p>싸이프레스는 사용자가 귀하의 애플리케이션을 탐색하는 것을 시뮬레이션합니다. 이를 위해서는 Next.js 서버가 실행 중이어야 합니다. 귀하의 테스트를 제품 코드에 대해 실행하여 귀하의 애플리케이션이 어떻게 동작할지 보다 정확하게 모사할 것을 권장합니다.
다음 명령어를 실행하여 Next.js 애플리케이션을 빌드하고 시작하세요 npm run build &amp;&amp; npm run start. 그런 다음 또 다른 터미널 창에서 npm run cypress:open을 실행하여 Cypress를 시작하고 E2E 테스트 스위트를 실행하세요.</p>
<blockquote>
<p>참고 사항:
cypress.config.js 구성 파일에 baseUrl: 'http://localhost:3000'을 추가하여 cy.visit(&quot;/&quot;) 대신 cy.visit(&quot;http://localhost:3000/&quot;)을 사용할 수 있습니다.
또는 start-server-and-test 패키지를 설치하여 Next.js 프로덕션 서버를 Cypress와 함께 실행할 수 있습니다. 설치 후에 package.json 스크립트 필드에 &quot;test&quot;: &quot;start-server-and-test start http://localhost:3000 cypress&quot;를 추가하세요. 새 변경 사항 이후에는 귀하의 애플리케이션을 다시 빌드하는 것을 기억해 주세요.</p>
</blockquote>
<h2 id="처음으로-cypress-컴포넌트-테스트를-만들어-보세요" tabindex="-1"><a class="header-anchor" href="#처음으로-cypress-컴포넌트-테스트를-만들어-보세요" aria-hidden="true">#</a> 처음으로 Cypress 컴포넌트 테스트를 만들어 보세요</h2>
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
<p>컴포넌트 테스트는 전체 애플리케이션을 번들링하거나 서버를 시작하지 않고도 특정 컴포넌트를 빌드하고 마운트하는 것을 말해요.
Cypress 앱에서 컴포넌트 테스팅을 선택한 다음, 프론트엔드 프레임워크로 Next.js를 선택하세요. 프로젝트에 cypress/component 폴더가 생성되며 cypress.config.js 파일이 업데이트되어 컴포넌트 테스트를 활성화합니다.
cypress.config.js 파일이 다음 구성을 가지고 있는지 확인하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"cypress"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">framework</span><span class="token operator">:</span> <span class="token string">"next"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bundler</span><span class="token operator">:</span> <span class="token string">"webpack"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"cypress"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">framework</span><span class="token operator">:</span> <span class="token string">"next"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bundler</span><span class="token operator">:</span> <span class="token string">"webpack"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이전 섹션의 같은 구성 요소를 가정하고, 구성 요소가 예상 출력을 렌더링하는지 확인하는 테스트를 추가합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Page <span class="token keyword">from</span> <span class="token string">"../../app/page"</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">"&lt;Page />"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">"should render and display expected content"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 홈 페이지의 React 구성 요소를 마운트합니다</span>
    cy<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Page <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 새 페이지에 "Home"이라는 h1이 포함되어야 합니다</span>
    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"h1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">"Home"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 예상 URL을 가진 링크가 존재하는지 확인합니다</span>
    <span class="token comment">// 링크를 따라가는 것은 E2E 테스트에 더 적합합니다</span>
    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'a[href="/about"]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">"be.visible"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두면 좋아요:
Cypress는 현재 비동기 서버 구성 요소에 대한 구성 요소 테스트를 지원하지 않습니다. E2E 테스트를 사용하는 것을 권장합니다.
구성 요소 테스트는 Next.js 서버를 필요로하지 않으므로 서버가 필요한 <code v-pre>&lt;Image /&gt;</code>와 같은 기능은 기본적으로 작동하지 않을 수 있습니다.</p>
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
<h3 id="컴포넌트-테스트-실행하기" tabindex="-1"><a class="header-anchor" href="#컴포넌트-테스트-실행하기" aria-hidden="true">#</a> 컴포넌트 테스트 실행하기</h3>
<p>터미널에서 npm run cypress:open을 실행하여 Cypress를 시작하고 컴포넌트 테스트 스위트를 실행하세요.</p>
<h2 id="지속적-통합-ci" tabindex="-1"><a class="header-anchor" href="#지속적-통합-ci" aria-hidden="true">#</a> 지속적 통합 (CI)</h2>
<p>대화형 테스트 외에도 cypress run 명령을 사용하여 Cypress를 헤드리스 모드로 실행하여 CI 환경에 더 적합하게 사용할 수 있습니다.</p>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
    <span class="token property">"e2e"</span><span class="token operator">:</span> <span class="token string">"start-server-and-test dev http://localhost:3000 \"cypress open --e2e\""</span><span class="token punctuation">,</span>
    <span class="token property">"e2e:headless"</span><span class="token operator">:</span> <span class="token string">"start-server-and-test dev http://localhost:3000 \"cypress run --e2e\""</span><span class="token punctuation">,</span>
    <span class="token property">"component"</span><span class="token operator">:</span> <span class="token string">"cypress open --component"</span><span class="token punctuation">,</span>
    <span class="token property">"component:headless"</span><span class="token operator">:</span> <span class="token string">"cypress run --component"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 리소스들을 통해 Cypress와 지속적 통합에 대해 더 알아보세요:</p>
<ul>
<li>Next.js와 Cypress 예제</li>
<li>Cypress 지속적 통합 문서</li>
<li>Cypress GitHub Actions 가이드</li>
<li>공식 Cypress GitHub Action</li>
<li>Cypress Discord</li>
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
