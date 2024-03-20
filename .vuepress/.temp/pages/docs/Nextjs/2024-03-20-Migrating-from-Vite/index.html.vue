<template><div><h1 id="vite에서-nextjs-14로-마이그레이션-하는-방법" tabindex="-1"><a class="header-anchor" href="#vite에서-nextjs-14로-마이그레이션-하는-방법" aria-hidden="true">#</a> Vite에서 Nextjs 14로 마이그레이션 하는 방법</h1>
<p>이 가이드는 기존의 Vite 애플리케이션을 Next.js로 이전하는 데 도움이 될 것입니다.</p>
<h2 id="왜-변경해야-하는가" tabindex="-1"><a class="header-anchor" href="#왜-변경해야-하는가" aria-hidden="true">#</a> 왜 변경해야 하는가?</h2>
<p>Vite에서 Next.js로 변경하고 싶은 여러 이유가 있습니다:</p>
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
<h3 id="페이지-초기-로딩-시간이-느립니다" tabindex="-1"><a class="header-anchor" href="#페이지-초기-로딩-시간이-느립니다" aria-hidden="true">#</a> 페이지 초기 로딩 시간이 느립니다</h3>
<p>만약 React용 기본 Vite 플러그인으로 애플리케이션을 개발했다면, 여러분의 애플리케이션은 순수 클라이언트 쪽 애플리케이션입니다. 클라이언트 쪽 애플리케이션 또는 싱글 페이지 애플리케이션(SPA)으로도 불리는 이 유형의 애플리케이션은 종종 초기 페이지 로딩 시간이 느릴 수 있습니다. 이는 주로 아래의 두 가지 이유로 발생합니다:</p>
<ul>
<li>브라우저는 데이터를 로드하는 요청을 보내기 전에 React 코드와 전체 애플리케이션 번들이 다운로드되고 실행될 때까지 기다려야 합니다.</li>
<li>새로운 기능이나 추가 종속성마다 애플리케이션 코드가 계속 커지게 됩니다.</li>
</ul>
<h3 id="자동-코드-분할이-없습니다" tabindex="-1"><a class="header-anchor" href="#자동-코드-분할이-없습니다" aria-hidden="true">#</a> 자동 코드 분할이 없습니다</h3>
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
<p>이전에 발생한 느린 로딩 시간 문제는 코드 분할로 어느 정도 관리할 수 있습니다. 그러나 수동으로 코드를 분할하려고 하면 성능이 더 나빠질 수 있습니다. 코드를 수동으로 분할할 때 실수로 네트워크 폭포를 도입하기 쉽습니다. Next.js는 라우터에 내장된 자동 코드 분할 기능을 제공합니다.</p>
<h3 id="네트워크-폭포" tabindex="-1"><a class="header-anchor" href="#네트워크-폭포" aria-hidden="true">#</a> 네트워크 폭포</h3>
<p>성능이 떨어지는 일반적인 원인은 응용 프로그램이 데이터를 가져오기 위해 순차적으로 클라이언트-서버 요청을 하는 경우입니다. SPA에서 데이터를 가져오는 일반적인 패턴은 먼저 자리 표시자를 렌더링한 후 컴포넌트가 마운트된 후 데이터를 가져오는 것입니다. 유감스럽게도, 이는 데이터를 가져오는 하위 컴포넌트가 상위 컴포넌트가 자신의 데이터를로드할 때까지 가져오지 못한다는 것을 의미합니다.</p>
<p>Next.js에서는 클라이언트에서 데이터를 가져오는 것이 지원되지만, 서버로 데이터 가져오기를 이동할 수도 있으며 이로써 클라이언트-서버 폭포를 제거할 수 있습니다.</p>
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
<h3 id="빠르고-의도적인-로딩-상태" tabindex="-1"><a class="header-anchor" href="#빠르고-의도적인-로딩-상태" aria-hidden="true">#</a> 빠르고 의도적인 로딩 상태</h3>
<p>React Suspense를 통한 스트리밍에 내장된 지원으로, 네트워크 폭포효과를 발생시키지 않고 어떤 부분을 먼저 로드하고 어떤 순서로 로드할지에 대해 더 의도적으로 설정할 수 있습니다.</p>
<p>이를 통해 더 빨리 로드되는 페이지를 구축하고 레이아웃 변화를 최소화할 수 있습니다.</p>
<h3 id="데이터-가져오기-전략-선택" tabindex="-1"><a class="header-anchor" href="#데이터-가져오기-전략-선택" aria-hidden="true">#</a> 데이터 가져오기 전략 선택</h3>
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
<p>귀하는 필요에 따라 Next.js에서 페이지 및 구성 요소별로 데이터 가져오기 전략을 선택할 수 있습니다. 빌드 시간에 가져오거나 서버의 요청 시간에 가져오거나 클라이언트에서 가져올지를 결정할 수 있습니다. 예를 들어 CMS에서 데이터를 가져와 블로그 게시물을 빌드 시간에 렌더링할 수 있으며, 이를 CDN에 효율적으로 캐시할 수 있습니다.</p>
<h3 id="미들웨어" tabindex="-1"><a class="header-anchor" href="#미들웨어" aria-hidden="true">#</a> 미들웨어</h3>
<p>Next.js 미들웨어를 사용하면 요청이 완료되기 전에 서버에서 코드를 실행할 수 있습니다. 이는 사용자가 인증된 페이지를 방문할 때 인증되지 않은 콘텐츠가 표시되는 것을 피하기 위해 특히 유용합니다. 사용자를 로그인 페이지로 리디렉션하는 데도 유용하며, 실험 및 국제화에도 유용합니다.</p>
<h3 id="내장-최적화" tabindex="-1"><a class="header-anchor" href="#내장-최적화" aria-hidden="true">#</a> 내장 최적화</h3>
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
<p>이미지, 폰트 및 타사 스크립트는 애플리케이션 성능에 상당한 영향을 미칠 수 있습니다. Next.js에는 자동으로 이러한 것들을 최적화해주는 내장 컴포넌트가 있습니다.</p>
<h2 id="이주-단계" tabindex="-1"><a class="header-anchor" href="#이주-단계" aria-hidden="true">#</a> 이주 단계</h2>
<p>우리의 이주 작업은 가능한 빨리 작동하는 Next.js 애플리케이션을 구축하는 데 있습니다. 그 후에는 점진적으로 Next.js 기능을 채택할 수 있습니다. 먼저 기존 라우터를 이주하지 않고 순수 클라이언트 측 애플리케이션(SPA)으로 유지하겠습니다. 이렇게 하면 이주 과정에서 문제를 최소화하고 병합 충돌을 줄일 수 있습니다.</p>
<h3 id="단계-1-next-js-종속성-설치하기" tabindex="-1"><a class="header-anchor" href="#단계-1-next-js-종속성-설치하기" aria-hidden="true">#</a> 단계 1: Next.js 종속성 설치하기</h3>
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
<p>가장 먼저 해야 할 일은 종속성으로 next를 설치하는 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install next@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="단계-2-next-js-구성-파일-만들기" tabindex="-1"><a class="header-anchor" href="#단계-2-next-js-구성-파일-만들기" aria-hidden="true">#</a> 단계 2: Next.js 구성 파일 만들기</h3>
<p>프로젝트의 루트에 <code v-pre>next.config.mjs</code>를 만듭니다. 이 파일은 Next.js 구성 옵션을 저장할 것입니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'next'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>NextConfig<span class="token punctuation">}</span></span> */</span>
<span class="token keyword">const</span> nextConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token string">"export"</span><span class="token punctuation">,</span> <span class="token comment">// 단일 페이지 애플리케이션(SPA)을 출력합니다.</span>
  <span class="token literal-property property">distDir</span><span class="token operator">:</span> <span class="token string">"./dist"</span><span class="token punctuation">,</span> <span class="token comment">// 빌드 출력 디렉토리를 `./dist/`로 변경합니다.</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> nextConfig<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>유용한 정보: Next.js 구성 파일에는 .js 또는 .mjs를 사용할 수 있습니다.</p>
</blockquote>
<h3 id="단계-3-typescript-구성-업데이트" tabindex="-1"><a class="header-anchor" href="#단계-3-typescript-구성-업데이트" aria-hidden="true">#</a> 단계 3: TypeScript 구성 업데이트</h3>
<p>TypeScript를 사용하는 경우, tsconfig.json 파일을 다음 변경사항과 함께 업데이트하여 Next.js와 호환되도록 해야 합니다. TypeScript를 사용하지 않는 경우, 이 단계는 건너뛸 수 있습니다.```</p>
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
<li>프로젝트 참조를 삭제하세요. tsconfig.node.json</li>
<li>include 배열에 ./dist/types/*<u>/</u>.ts 및 ./next-env.d.ts를 추가하세요.</li>
<li>exclude 배열에 ./node_modules를 추가하세요.</li>
<li>compilerOptions의 plugins 배열에 { &quot;name&quot;: &quot;next&quot; }를 추가하세요.
&quot;plugins&quot;: [{ &quot;name&quot;: &quot;next&quot; }]</li>
<li>esModuleInterop를 true로 설정하세요.
&quot;esModuleInterop&quot;: true</li>
<li>jsx를 preserve로 설정하세요.
&quot;jsx&quot;: &quot;preserve&quot;</li>
<li>allowJs를 true로 설정하세요.
&quot;allowJs&quot;: true</li>
<li>forceConsistentCasingInFileNames를 true로 설정하세요.
&quot;forceConsistentCasingInFileNames&quot;: true</li>
<li>incremental을 true로 설정하세요.
&quot;incremental&quot;: true</li>
</ul>
<p>위의 변경 사항이 반영된 작동하는 tsconfig.json 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"target"</span><span class="token operator">:</span> <span class="token string">"ES2020"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"useDefineForClassFields"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"lib"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"ES2020"</span><span class="token punctuation">,</span> <span class="token string">"DOM"</span><span class="token punctuation">,</span> <span class="token string">"DOM.Iterable"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"module"</span><span class="token operator">:</span> <span class="token string">"ESNext"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"esModuleInterop"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"skipLibCheck"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"moduleResolution"</span><span class="token operator">:</span> <span class="token string">"bundler"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"allowImportingTsExtensions"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"resolveJsonModule"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"isolatedModules"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"noEmit"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"jsx"</span><span class="token operator">:</span> <span class="token string">"preserve"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"strict"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"noUnusedLocals"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"noUnusedParameters"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"noFallthroughCasesInSwitch"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"allowJs"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"forceConsistentCasingInFileNames"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"incremental"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"next"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"include"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./src"</span><span class="token punctuation">,</span> <span class="token string">"./dist/types/**/*.ts"</span><span class="token punctuation">,</span> <span class="token string">"./next-env.d.ts"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">"exclude"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./node_modules"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TypeScript 구성에 대한 더 많은 정보는 Next.js 문서에서 확인할 수 있습니다.</p>
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
<h3 id="단계-4-루트-레이아웃-작성" tabindex="-1"><a class="header-anchor" href="#단계-4-루트-레이아웃-작성" aria-hidden="true">#</a> 단계 4: 루트 레이아웃 작성</h3>
<p>Next.js App Router 애플리케이션에는 모든 페이지를 래핑하는 React Server Component인 루트 레이아웃 파일이 포함되어 있어야 합니다. 이 파일은 앱 디렉토리의 최상위에서 정의됩니다.</p>
<p>Vite 애플리케이션에서 루트 레이아웃 파일에 가장 유사한 것은 index.html 파일입니다. 이 파일에는 <code v-pre>html</code>, <code v-pre>head</code>, <code v-pre>body</code> 태그가 포함되어 있습니다.</p>
<p>이 단계에서는 index.html 파일을 루트 레이아웃 파일로 변환하게 됩니다:</p>
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
<li>src 디렉토리 안에 새로운 app 디렉토리를 생성해주세요.</li>
<li>해당 app 디렉토리 안에 새로운 layout.tsx 파일을 만들어주세요:</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>참고: 레이아웃 파일에는 .js, .jsx 또는 .tsx 확장자를 사용할 수 있습니다.</p>
</blockquote>
<ul>
<li>기존 index.html 파일의 내용을 이전에 생성한 <code v-pre>RootLayout</code> 컴포넌트로 복사해오면서 body.div#root 및 body.script 태그를 <code v-pre>div id=&quot;root&quot;</code>{children}<code v-pre>/div</code>로 대체해주세요:</li>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>head<span class="token operator">></span>
        <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"icon"</span> type<span class="token operator">=</span><span class="token string">"image/svg+xml"</span> href<span class="token operator">=</span><span class="token string">"/icon.svg"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>title<span class="token operator">></span>My App<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
        <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"description"</span> content<span class="token operator">=</span><span class="token string">"My App is a..."</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
      <span class="token operator">&lt;</span>body<span class="token operator">></span>
        <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"root"</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Next.js에서는 이미 기본으로 meta charset 및 meta viewport 태그를 포함하고 있으므로 <code v-pre>head</code>에서 이들을 안전하게 삭제할 수 있습니다:</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>head<span class="token operator">></span>
        <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"icon"</span> type<span class="token operator">=</span><span class="token string">"image/svg+xml"</span> href<span class="token operator">=</span><span class="token string">"/icon.svg"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>title<span class="token operator">></span>My App<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
        <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"description"</span> content<span class="token operator">=</span><span class="token string">"My App is a..."</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
      <span class="token operator">&lt;</span>body<span class="token operator">></span>
        <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"root"</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>favicon.ico, icon.png, robots.txt와 같은 메타데이터 파일은 앱 디렉토리의 최상위에 배치되어 있다면 자동으로 애플리케이션 <code v-pre>head</code> 태그에 추가됩니다. 지원되는 모든 파일을 앱 디렉토리로 이동한 후 이들의 <code v-pre>link</code> 태그를 안전하게 삭제할 수 있습니다:```</li>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>head<span class="token operator">></span>
        <span class="token operator">&lt;</span>title<span class="token operator">></span>My App<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
        <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"description"</span> content<span class="token operator">=</span><span class="token string">"My App is a..."</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
      <span class="token operator">&lt;</span>body<span class="token operator">></span>
        <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"root"</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>마침내, Next.js는 Metadata API를 사용하여 마지막 <code v-pre>head</code> 태그를 관리할 수 있습니다. 마지막 메타데이터 정보를 내보낼 metadata 객체로 이동하세요:</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Metadata <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> metadata<span class="token operator">:</span> Metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">"My App"</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">"My App is a..."</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>body<span class="token operator">></span>
        <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"root"</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 변경 사항을 통해 index.html에서 모두 선언하는 방식에서 Next.js의 프레임워크 내장 (Metadata API) 규칙 기반 접근 방식으로 전환하였습니다. 이 접근 방법을 통해 페이지의 SEO 및 웹 공유 가능성을 보다 쉽게 향상시킬 수 있습니다.```</p>
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
<h3 id="단계-5-entrypoint-페이지-생성하기" tabindex="-1"><a class="header-anchor" href="#단계-5-entrypoint-페이지-생성하기" aria-hidden="true">#</a> 단계 5: Entrypoint 페이지 생성하기</h3>
<p>Next.js에서는 페이지.tsx 파일을 만들어 애플리케이션의 진입점을 선언합니다. Vite에서는 이 파일의 가장 유사한 것이 main.tsx 파일입니다. 이 단계에서 애플리케이션의 진입점을 설정하게 됩니다.</p>
<ul>
<li>앱 디렉터리에 [[...slug]] 디렉터리를 생성합니다.</li>
</ul>
<p>이 안내서에서는 먼저 Next.js를 SPA (Single Page Application)로 설정하기 위해 노력합니다. 따라서 앱 디렉터리에 새로운 [[...slug]] 디렉터리를 생성하여 애플리케이션의 모든 가능한 경로를 포착할 수 있도록 페이지 진입점을 설정해야 합니다.</p>
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
<p>이 디렉토리는 옵셔널 캐치올 라우트 세그먼트라고 부릅니다. Next.js는 파일 시스템 기반의 라우터를 사용하여 디렉토리를 라우트로 정의합니다. 이 특별한 디렉토리는 애플리케이션의 모든 라우트가 해당 페이지.tsx 파일로 이동하도록 보장합니다.</p>
<ul>
<li>다음 내용을 포함하는 app/[[...slug]] 디렉토리 내에 새로운 page.tsx 파일을 만드세요:</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token string">"../../index.css"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">generateStaticParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> slug<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">""</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">"..."</span><span class="token punctuation">;</span> <span class="token comment">// 이부분을 업데이트할 예정입니다</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>참고: .js, .jsx 또는 .tsx 확장자를 사용하여 페이지 파일을 작성할 수 있습니다.</p>
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
<p>이 파일은 서버 구성 요소입니다. 다음 빌드를 실행하면 파일이 정적 에셋으로 미리 렌더링됩니다. 동적 코드가 필요하지 않습니다.</p>
<p>이 파일은 전역 CSS를 가져오고 generateStaticParams에게 우리가 /에있는 인덱스 경로 하나만 생성할 것임을 알려줍니다.</p>
<p>이제 나머지 Vite 애플리케이션을 클라이언트 전용으로 실행하겠습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> dynamic <span class="token keyword">from</span> <span class="token string">"next/dynamic"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token function">dynamic</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"../../App"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> ssr<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">ClientOnly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
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
<p>이 파일은 <code v-pre>use client</code> 지시문으로 정의된 클라이언트 구성 요소입니다. 클라이언트 구성 요소는 클라이언트로 전송되기 전 서버에서 여전히 HTML로 사전 렌더링됩니다.</p>
<p>클라이언트 전용 응용 프로그램을 시작하려면 App 구성 요소 아래에서 사전 렌더링을 비활성화하도록 Next.js를 구성할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token function">dynamic</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"../../App"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">ssr</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이제 엔트리포인트 페이지를 새로운 구성 요소를 사용하도록 업데이트하세요.</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token string">"../../index.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ClientOnly <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./client"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">generateStaticParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> slug<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">""</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ClientOnly <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="단계-6-정적-이미지-가져오기-업데이트" tabindex="-1"><a class="header-anchor" href="#단계-6-정적-이미지-가져오기-업데이트" aria-hidden="true">#</a> 단계 6: 정적 이미지 가져오기 업데이트</h3>
<p>Next.js는 Vite와 다르게 정적 이미지 가져오기를 처리합니다. Vite에서 이미지 파일을 가져오면 해당 이미지의 공개 URL이 문자열로 반환됩니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> image <span class="token keyword">from</span> <span class="token string">"./img.png"</span><span class="token punctuation">;</span> <span class="token comment">// `image`는 프로덕션 환경에서 '/assets/img.2d8efhg.png'가 됩니다.</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token punctuation">{</span>image<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<p>Next.js에서 정적 이미지를 가져오면 객체가 반환됩니다. 그 객체는 Next.js <code v-pre>Image</code> 컴포넌트와 함께 직접 사용하거나 기존 <code v-pre>img</code> 태그와 함께 객체의 src 속성을 사용할 수 있습니다.</p>
<p><code v-pre>Image</code> 컴포넌트에는 자동 이미지 최적화의 추가 혜택이 있습니다. <code v-pre>Image</code> 컴포넌트는 이미지의 차원에 기반하여 결과 <code v-pre>img</code>의 너비와 높이 속성을 자동으로 설정합니다. 이미지가 로드될 때 레이아웃 변화를 방지합니다. 그러나 이는 앱에 한 차원만 스타일링된 이미지가 포함되어있는 경우 문제를 일으킬 수 있습니다. 이렇게 되면 차원이 '자동'으로 스타일링되지 않은 경우 <code v-pre>img</code> 차원 속성 값으로 기본 설정되어 이미지가 왜곡될 수 있습니다.</p>
<p><code v-pre>img</code> 태그를 유지하면 애플리케이션의 변경량을 줄이고 위에서 언급한 문제를 방지할 수 있습니다. 그런 다음 나중에 선택적으로 로더를 구성함으로써 이미지 최적화의 이점을 취하거나 자동 이미지 최적화가 되어있는 기본 Next.js 서버로 이동하여 나중에 <code v-pre>Image</code> 컴포넌트로 마이그레이션 할 수 있습니다.</p>
<ul>
<li><code v-pre>/public</code>에서 가져온 이미지에 대한 절대 import 경로를 상대 import로 변환하십시오:</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 이전</span>
<span class="token keyword">import</span> logo <span class="token keyword">from</span> <span class="token string">"/logo.png"</span><span class="token punctuation">;</span>

<span class="token comment">// 변경 후</span>
<span class="token keyword">import</span> logo <span class="token keyword">from</span> <span class="token string">"../public/logo.png"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>이미지 객체 전체가 아닌 이미지 src 속성을 <code v-pre>img</code> 태그에 전달하십시오:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 이전</span>
<span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token punctuation">{</span>logo<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token comment">// 변경 후</span>
<span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token punctuation">{</span>logo<span class="token punctuation">.</span>src<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또는 파일 이름을 기반으로 이미지 자산의 공개 URL을 참조할 수 있습니다. 예를 들어, public/logo.png는 애플리케이션에서 /logo.png에 있는 이미지를 제공하므로 해당 값이 src로 사용될 것입니다.```</p>
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
<blockquote>
<p>경고: TypeScript를 사용 중이라면 src 속성에 액세스할 때 형식 오류가 발생할 수 있습니다. 지금은 안심하고 무시해도됩니다. 이 가이드가 끝날 때까지 이 문제들은 해결될 것입니다.</p>
</blockquote>
<h3 id="단계-7-환경-변수-이전하기" tabindex="-1"><a class="header-anchor" href="#단계-7-환경-변수-이전하기" aria-hidden="true">#</a> 단계 7: 환경 변수 이전하기</h3>
<p>Next.js에는 Vite와 유사한 .env 환경 변수를 지원합니다. 주요 차이점은 클라이언트 측에서 환경 변수를 노출하는 데 사용되는 접두사입니다.</p>
<ul>
<li>VITE* 접두사를 사용하던 모든 환경 변수를 NEXT_PUBLIC*로 변경하세요.</li>
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
<p>Vite는 특별한 import.meta.env 객체에서 몇 가지 내장 환경 변수를 노출하며, Next.js에서는 지원되지 않습니다. 이를 다음과 같이 업데이트해야 합니다:</p>
<ul>
<li>import.meta.env.MODE ⇒ process.env.NODE_ENV</li>
<li>import.meta.env.PROD ⇒ process.env.NODE_ENV === <code v-pre>production</code></li>
<li>import.meta.env.DEV ⇒ process.env.NODE_ENV !== <code v-pre>production</code></li>
<li>import.meta.env.SSR ⇒ typeof window !== <code v-pre>undefined</code></li>
</ul>
<p>또한 Next.js에는 내장 BASE_URL 환경 변수가 제공되지 않습니다. 그러나 필요하다면 여전히 구성할 수 있습니다:</p>
<ul>
<li>.env 파일에 다음을 추가하세요:</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code># <span class="token operator">...</span>
<span class="token constant">NEXT_PUBLIC_BASE_PATH</span><span class="token operator">=</span><span class="token string">"/some-base-path"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>다음과 같이 next.config.mjs 파일에서 basePath를 process.env.NEXT_PUBLIC_BASE_PATH로 설정하세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'next'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>NextConfig<span class="token punctuation">}</span></span> */</span>
<span class="token keyword">const</span> nextConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token string">"export"</span><span class="token punctuation">,</span> <span class="token comment">// Outputs a Single-Page Application (SPA).</span>
  <span class="token literal-property property">distDir</span><span class="token operator">:</span> <span class="token string">"./dist"</span><span class="token punctuation">,</span> <span class="token comment">// Changes the build output directory to `./dist/`.</span>
  <span class="token literal-property property">basePath</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_BASE_PATH</span><span class="token punctuation">,</span> <span class="token comment">// Sets the base path to `/some-base-path`.</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> nextConfig<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>import.meta.env.BASE_URL 사용을 process.env.NEXT_PUBLIC_BASE_PATH로 업데이트하세요.</li>
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
<h3 id="단계-8-package-json-내-스크립트-업데이트하기" tabindex="-1"><a class="header-anchor" href="#단계-8-package-json-내-스크립트-업데이트하기" aria-hidden="true">#</a> 단계 8: package.json 내 스크립트 업데이트하기</h3>
<p>이제 Next.js로 잘 이관되었는지 확인하기 위해 애플리케이션을 실행할 수 있어야 합니다. 그러나 그 전에 package.json 내 스크립트를 Next.js 관련 명령어로 업데이트하고 .gitignore에 .next와 next-env.d.ts를 추가해야 합니다:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"next dev"</span><span class="token punctuation">,</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"next build"</span><span class="token punctuation">,</span>
    <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"next start"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-gitignore ext-gitignore line-numbers-mode"><pre v-pre class="language-gitignore"><code><span class="token comment"># ...</span>
<span class="token entry string">.next</span>
<span class="token entry string">next-env.d.ts</span>
<span class="token entry string">dist</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이제 npm run dev를 실행하고 http://localhost:3000을 열어보세요. 지금은 Next.js에서 실행 중인 애플리케이션을 볼 수 있어야 합니다.</p>
<blockquote>
<p>예시: Vite 애플리케이션을 Next.js로 이관한 작업 예시를 확인해보세요. 이 풀 리퀘스트를 확인해보세요.</p>
</blockquote>
<h3 id="단계-9-정리" tabindex="-1"><a class="header-anchor" href="#단계-9-정리" aria-hidden="true">#</a> 단계 9: 정리</h3>
<p>이제 Vite 관련 아티팩트들을 삭제할 수 있습니다.</p>
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
<li>main.tsx 파일을 삭제하세요.</li>
<li>index.html 파일을 삭제하세요.</li>
<li>vite-env.d.ts 파일을 삭제하세요.</li>
<li>tsconfig.node.json 파일을 삭제하세요.</li>
<li>vite.config.ts 파일을 삭제하세요.</li>
<li>Vite 종속성을 제거하세요.</li>
</ul>
<h2 id="다음-단계" tabindex="-1"><a class="header-anchor" href="#다음-단계" aria-hidden="true">#</a> 다음 단계</h2>
<p>모든 것이 계획대로 진행되었다면, 이제 단일 페이지 애플리케이션으로 실행되는 작동하는 Next.js 애플리케이션이 있을 것입니다. 그러나 아직 Next.js의 대부분 이점을 활용하지는 못했지만, 이제 모든 이점을 누릴 수 있도록 점진적인 변경을 시작할 수 있습니다. 다음에 할 수 있는 작업은 다음과 같습니다:</p>
<ul>
<li>React Router에서 Next.js App Router로 마이그레이션하여 다음을 얻을 수 있습니다:
<ul>
<li>자동 코드 분할</li>
<li>스트리밍 서버 렌더링</li>
<li>React 서버 구성 요소</li>
</ul>
</li>
<li>이미지를 <code v-pre>Image</code> 컴포넌트로 최적화하세요.</li>
<li>next/font를 사용하여 폰트를 최적화하세요.</li>
<li><code v-pre>Script</code> 컴포넌트로 서드파티 스크립트를 최적화하세요.</li>
<li>Next.js 규칙을 지원하도록 ESLint 구성을 업데이트하세요.</li>
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
