<template><div><h1 id="next-js와-함께-playwright-설정하기" tabindex="-1"><a class="header-anchor" href="#next-js와-함께-playwright-설정하기" aria-hidden="true">#</a> Next.js와 함께 Playwright 설정하기</h1>
<p>Playwright는 Chromium, Firefox 및 WebKit을 단일 API로 자동화할 수 있는 테스팅 프레임워크입니다. Playwright를 사용하면 End-to-End(E2E) 테스트를 작성할 수 있습니다. 이 안내서는 Next.js와 함께 Playwright를 설정하고 첫 번째 테스트를 작성하는 방법을 안내합니다.</p>
<h2 id="빠른-시작" tabindex="-1"><a class="header-anchor" href="#빠른-시작" aria-hidden="true">#</a> 빠른 시작</h2>
<p>가장 빠르게 시작하는 방법은 with-playwright 예제를 사용하여 create-next-app을 사용하는 것입니다. 이렇게 하면 Playwright가 구성된 Next.js 프로젝트가 생성됩니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>next<span class="token operator">-</span>app@latest <span class="token operator">--</span>example <span class="token keyword">with</span><span class="token operator">-</span>playwright <span class="token keyword">with</span><span class="token operator">-</span>playwright<span class="token operator">-</span>app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="수동-설정" tabindex="-1"><a class="header-anchor" href="#수동-설정" aria-hidden="true">#</a> 수동 설정</h2>
<p>Playwright를 설치하려면 다음 명령을 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm init playwright
# 또는
yarn create playwright
# 또는
pnpm create playwright
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 과정을 통해 Playwright를 설정하고 프로젝트에 추가하기 위한 일련의 프롬프트를 진행하게 됩니다. 이 과정에는 playwright.config.ts 파일도 추가됩니다. Playwright 설치 가이드에서 단계별 안내를 참조해주세요.</p>
<h2 id="첫-번째-playwright-e2e-테스트-만들기" tabindex="-1"><a class="header-anchor" href="#첫-번째-playwright-e2e-테스트-만들기" aria-hidden="true">#</a> 첫 번째 Playwright E2E 테스트 만들기</h2>
<p>두 개의 새로운 Next.js 페이지를 만들어보세요:</p>
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
      <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이후, 네비게이션이 제대로 작동하는지 확인하는 테스트를 추가하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> test<span class="token punctuation">,</span> expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@playwright/test'</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'about 페이지로 이동해야 함'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> page <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 인덱스 페이지에서 시작 (baseUrl은 playwright.config.ts에서 webServer를 통해 설정됨)</span>
  <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">goto</span><span class="token punctuation">(</span><span class="token string">'http://localhost:3000/'</span><span class="token punctuation">)</span>
  <span class="token comment">// 'About'이라는 텍스트가 포함된 요소를 찾아 클릭</span>
  <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token string">'text=About'</span><span class="token punctuation">)</span>
  <span class="token comment">// 새 URL은 "/about"이어야 함 (baseUrl을 사용함)</span>
  <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveURL</span><span class="token punctuation">(</span><span class="token string">'http://localhost:3000/about'</span><span class="token punctuation">)</span>
  <span class="token comment">// 새 페이지에 "About"이라는 h1 요소가 있어야 함</span>
  <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">locator</span><span class="token punctuation">(</span><span class="token string">'h1'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toContainText</span><span class="token punctuation">(</span><span class="token string">'About'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두면 좋은 점:
&quot;baseURL&quot;: &quot;http://localhost:3000&quot;을 playwright.config.ts 구성 파일에 추가하면 page.goto(&quot;/&quot;) 대신 page.goto(&quot;http://localhost:3000/&quot;)를 사용할 수 있습니다.</p>
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
<h3 id="playwright-테스트-실행하기" tabindex="-1"><a class="header-anchor" href="#playwright-테스트-실행하기" aria-hidden="true">#</a> Playwright 테스트 실행하기</h3>
<p>Playwright는 사용자가 Chromium, Firefox 및 Webkit 세 브라우저를 사용하여 애플리케이션을 탐색하는 것을 시뮬레이트합니다. 이를 위해 Next.js 서버가 실행 중이어야 합니다. 운영 코드에 대해 테스트를 실행하여 애플리케이션이 어떻게 동작할지를 더 정확하게 확인하는 것을 권장합니다.
npm run build 및 npm run start를 실행한 후 다른 터미널 창에서 npx playwright test를 실행하여 Playwright 테스트를 실행하세요.</p>
<blockquote>
<p>팁: 대신, Playwright가 개발 서버를 시작하고 완전히 사용 가능할 때까지 기다리도록 하는 webServer 기능을 사용할 수도 있습니다.</p>
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
<h3 id="continuous-integration-ci-에서-playwright-실행하기" tabindex="-1"><a class="header-anchor" href="#continuous-integration-ci-에서-playwright-실행하기" aria-hidden="true">#</a> Continuous Integration (CI)에서 Playwright 실행하기</h3>
<p>기본적으로 Playwright는 헤드리스 모드에서 테스트를 실행합니다. Playwright 종속성을 모두 설치하려면 npx playwright install-deps를 실행하세요. 이러한 리소스에서 Playwright와 Continuous Integration에 대해 더 알아볼 수 있습니다:</p>
<ul>
<li>Next.js와 Playwright 예제</li>
<li>본인의 CI 제공업체에서 Playwright 사용하기</li>
<li>Playwright Discord</li>
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
