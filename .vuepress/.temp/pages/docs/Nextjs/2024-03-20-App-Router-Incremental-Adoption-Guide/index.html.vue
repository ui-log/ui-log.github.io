<template><div><h1 id="nextjs-12에서-13으로-마이그레이션-하는-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-12에서-13으로-마이그레이션-하는-방법" aria-hidden="true">#</a> Nextjs 12에서 13으로 마이그레이션 하는 방법</h1>
<p>이 안내서는 다음을 도와줍니다:</p>
<ul>
<li>Next.js 애플리케이션을 12 버전에서 13 버전으로 업데이트합니다.</li>
<li>페이지 및 앱 디렉토리에서 작동하는 기능을 업그레이드합니다.</li>
<li>존재하는 응용 프로그램을 페이지에서 앱으로 점진적으로 이관합니다.</li>
</ul>
<h2 id="업그레이드하기" tabindex="-1"><a class="header-anchor" href="#업그레이드하기" aria-hidden="true">#</a> 업그레이드하기</h2>
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
<h3 id="node-js-버전" tabindex="-1"><a class="header-anchor" href="#node-js-버전" aria-hidden="true">#</a> Node.js 버전</h3>
<p>최소 Node.js 버전은 이제 v18.17입니다. 자세한 내용은 Node.js 문서를 참조하세요.</p>
<h3 id="next-js-버전" tabindex="-1"><a class="header-anchor" href="#next-js-버전" aria-hidden="true">#</a> Next.js 버전</h3>
<p>Next.js 버전 13으로 업데이트하려면 선호하는 패키지 관리자를 사용하여 다음 명령을 실행하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install next@latest react@latest react<span class="token operator">-</span>dom@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="eslint-버전" tabindex="-1"><a class="header-anchor" href="#eslint-버전" aria-hidden="true">#</a> ESLint 버전</h3>
<p>만약 ESLint를 사용 중이라면, ESLint 버전을 업그레이드해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">-</span><span class="token constant">D</span> eslint<span class="token operator">-</span>config<span class="token operator">-</span>next@latest
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
<blockquote>
<p>좋은 정보: ESLint 변경 사항이 적용되려면 VS Code에서 ESLint 서버를 다시 시작해야 할 수 있습니다. 명령 팔레트(맥: cmd+shift+p, 윈도우: ctrl+shift+p)를 열고 ESLint: 리스타트 ESLint 서버를 검색하세요.</p>
</blockquote>
<h2 id="다음-단계" tabindex="-1"><a class="header-anchor" href="#다음-단계" aria-hidden="true">#</a> 다음 단계</h2>
<p>업데이트한 후, 다음 단계를 보려면 다음 섹션을 참조하세요:</p>
<ul>
<li>새로운 기능 업그레이드: 개선된 이미지 및 링크 컴포넌트와 같은 새로운 기능으로 업그레이드하는 데 도움이 되는 가이드입니다.</li>
<li>페이지에서 앱 디렉터리로 마이그레이션: 페이지에서 앱 디렉터리로 단계별로 이동하는 데 도움이 되는 안내서입니다.</li>
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
<h2 id="새로운-기능-업그레이드" tabindex="-1"><a class="header-anchor" href="#새로운-기능-업그레이드" aria-hidden="true">#</a> 새로운 기능 업그레이드</h2>
<p>Next.js 13에서는 새로운 App 라우터가 새로운 기능과 관례와 함께 소개되었습니다. 새 라우터는 앱 디렉토리에 있으며 페이지 디렉토리와 공존합니다.</p>
<p>Next.js 13로 업그레이드하면 새 App 라우터를 사용해야 하는 것은 아닙니다. 페이지를 계속 사용할 수 있으며, 업데이트된 Image 컴포넌트, Link 컴포넌트, Script 컴포넌트 및 폰트 최적화와 같은 새로운 기능을 두 디렉토리에서 모두 사용할 수 있습니다.</p>
<h3 id="image-컴포넌트" tabindex="-1"><a class="header-anchor" href="#image-컴포넌트" aria-hidden="true">#</a> <code v-pre>Image/</code> 컴포넌트</h3>
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
<p>Next.js 12에서는 임시로 import된 next/future/image를 사용하여 Image Component에 새로운 개선 사항이 도입되었습니다. 이러한 개선 사항은 클라이언트 측 JavaScript가 줄어들었고, 이미지를 확장하고 스타일을 쉽게 적용할 수 있는 방법이 개선되었으며, 더 나은 접근성과 웹 브라우저의 네이티브 Lazy Loading을 포함하고 있습니다.</p>
<p>버전 13에서는 이러한 새로운 동작이 next/image의 기본 설정이 되었습니다.</p>
<p>새로운 Image Component로 마이그레이션을 돕기 위해 두 가지 Codemod가 있습니다:</p>
<ul>
<li>next-image-to-legacy-image codemod: next/image를 next/legacy/image로 안전하고 자동으로 이름을 변경합니다. 기존 구성 요소는 동일한 동작을 유지합니다.</li>
<li>next-image-experimental codemod: 인라인 스타일을 위험하게 추가하고 사용되지 않는 props를 제거합니다. 이를 통해 기존 구성 요소의 동작이 새로운 기본 설정과 일치하도록 변경됩니다. 이 Codemod를 사용하려면 먼저 next-image-to-legacy-image Codemod를 실행해야 합니다.</li>
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
<h3 id="link-컴포넌트" tabindex="-1"><a class="header-anchor" href="#link-컴포넌트" aria-hidden="true">#</a> <code v-pre>Link</code> 컴포넌트</h3>
<p><code v-pre>Link</code> 컴포넌트를 사용할 때 더 이상 수동으로 <code v-pre>a</code> 태그를 자식 요소로 추가할 필요가 없습니다. 이 동작은 12.2 버전에서 실험적 옵션으로 추가되었으며, 이제 기본값으로 변경되었습니다. Next.js 13에서 <code v-pre>Link</code>는 항상 <code v-pre>a</code>를 렌더링하고 하위 태그로 속성을 전달할 수 있도록 합니다.</p>
<p>예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">'next/link'</span>

<span class="token comment">// Next.js 12: `&lt;a>`는 반드시 중첩되어 있어야 합니다. 그렇지 않으면 제외됩니다.</span>
<span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/about"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>a<span class="token operator">></span>About<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>

<span class="token comment">// Next.js 13: `&lt;Link>`는 항상 내부에서 `&lt;a>`를 렌더링합니다.</span>
<span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/about"</span><span class="token operator">></span>
  About
<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
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
<p>Next.js 13로 링크를 업그레이드하려면 새 링크 코드 변환 도구를 사용할 수 있어요.</p>
<h3 id="script-컴포넌트" tabindex="-1"><a class="header-anchor" href="#script-컴포넌트" aria-hidden="true">#</a> <code v-pre>Script</code> 컴포넌트</h3>
<p>next/script의 동작이 업데이트되어 페이지와 앱을 모두 지원하게 되었지만, 원활한 이전을 보장하기 위해 몇 가지 변경이 필요합니다:</p>
<ul>
<li>이전에 _document.js에 포함했던 beforeInteractive 스크립트를 루트 레이아웃 파일(app/layout.tsx)로 이동하세요.</li>
<li>실험적인 worker 전략은 아직 앱에서 작동하지 않으며 이 전략으로 표시된 스크립트는 제거하거나 다른 전략(예: lazyOnload)을 사용하도록 수정해야 합니다.</li>
<li>Server Components에서는 onLoad, onReady 및 onError 핸들러가 작동하지 않으므로 이를 Client Component로 이동하거나 제거하세요.</li>
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
<h3 id="글꼴-최적화" tabindex="-1"><a class="header-anchor" href="#글꼴-최적화" aria-hidden="true">#</a> 글꼴 최적화</h3>
<p>이전에는 Next.js가 글꼴 CSS를 인라인으로 최적화하는 데 도움을 주었습니다. 버전 13에서는 새로운 <code v-pre>next/font</code> 모듈이 도입되었는데, 이를 통해 글꼴 로딩 경험을 사용자 정의할 수 있으면서도 훌륭한 성능과 개인 정보 보호를 보장합니다. <code v-pre>next/font</code>는 페이지 및 응용프로그램 디렉토리에서 모두 지원됩니다.</p>
<p>페이지에서는 CSS를 인라인으로 사용할 수 있지만, 응용프로그램에서는 작동하지 않습니다. 대신 <code v-pre>next/font</code>를 사용해야 합니다.</p>
<p><code v-pre>next/font</code> 사용 방법을 알아보려면 &quot;글꼴 최적화&quot; 페이지를 참조해주세요.</p>
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
<h2 id="페이지에서-앱으로-이주하기" tabindex="-1"><a class="header-anchor" href="#페이지에서-앱으로-이주하기" aria-hidden="true">#</a> 페이지에서 앱으로 이주하기</h2>
<blockquote>
<p>🎥 시청: 앱 라우터를 점진적으로 적용하는 방법 배우기 → YouTube (16 분)
.</p>
</blockquote>
<p>앱 라우터로 이동하는 것은 Next.js가 구축하는 Server Components, Suspense 등과 같은 React 기능을 처음 사용하는 일일 수 있습니다. 새로운 Next.js 기능인 특별 파일과 레이아웃과 결합하면, 이주는 새로운 개념, 정신적 모델 및 배우는 행동 변경을 의미합니다.</p>
<p>저희는 마이그레이션을 더 작은 단계로 나누어 복합 복잡성을 줄이는 것을 권장합니다. 앱 디렉터리는 페이지 디렉터리와 동시에 작동하도록 의도적으로 설계되었으며, 페이지별 이주를 점진적으로 할 수 있게 합니다.</p>
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
<li>앱 디렉터리는 중첩된 경로와 레이아웃을 지원합니다. 자세히 알아보세요.</li>
<li>루트를 정의하기 위해 중첩 폴더를 사용하고 route 세그먼트를 공개적으로 접근 가능하게 만들기 위해 특별한 page.js 파일을 사용하세요. 자세히 알아보세요.</li>
<li>각 route 세그먼트를 위한 UI를 생성하기 위해 특별한 파일 규칙이 사용됩니다. 가장 일반적인 특별 파일은 page.js와 layout.js입니다.
<ul>
<li>route에 고유한 UI를 정의하기 위해 page.js를 사용합니다.</li>
<li>여러 route에서 공유되는 UI를 정의하기 위해 layout.js를 사용합니다.</li>
<li>특별한 파일에는 .js, .jsx 또는 .tsx 파일 확장자가 사용될 수 있습니다.</li>
</ul>
</li>
<li>route에 고유한 UI를 정의하기 위해 page.js를 사용하세요.</li>
<li>여러 route에서 공유되는 UI를 정의하기 위해 layout.js를 사용하세요.</li>
<li>특별한 파일에는 .js, .jsx 또는 .tsx 파일 확장자가 사용될 수 있습니다.</li>
<li>컴포넌트, 스타일, 테스트 등의 다른 파일을 앱 디렉터리 안에 같이 위치시킬 수 있습니다. 자세히 알아보세요.</li>
<li>getServerSideProps와 getStaticProps와 같은 데이터 가져오기 함수는 app 안의 새 API로 대체되었습니다. getStaticPaths는 generateStaticParams로 대체되었습니다.</li>
<li>pages/_app.js와 pages/_document.js는 단일 app/layout.js 루트 레이아웃으로 대체되었습니다. 자세히 알아보세요.</li>
<li>pages/_error.js는 더 구체적인 error.js 특별 파일로 대체되었습니다. 자세히 알아보세요.</li>
<li>pages/404.js는 not-found.js 파일로 대체되었습니다.</li>
<li>pages/api/* API Routes는 route.js (Route Handler) 특별 파일로 대체되었습니다.</li>
</ul>
<h3 id="step-1-앱-디렉터리-생성하기" tabindex="-1"><a class="header-anchor" href="#step-1-앱-디렉터리-생성하기" aria-hidden="true">#</a> Step 1: 앱 디렉터리 생성하기</h3>
<p>최신 Next.js 버전으로 업데이트하세요 (버전 13.4 이상 필요):</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install next@latest
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
<p>루트 디렉토리 (또는 src/ 디렉토리)에 새 앱 디렉토리를 만드세요.</p>
<h3 id="단계-2-루트-레이아웃-생성" tabindex="-1"><a class="header-anchor" href="#단계-2-루트-레이아웃-생성" aria-hidden="true">#</a> 단계 2: 루트 레이아웃 생성</h3>
<p>앱 디렉토리 내에 새 파일 app/layout.tsx를 만드세요. 이 파일은 앱 내 모든 경로에 적용되는 루트 레이아웃입니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 레이아웃은 children 속성을 받아야 합니다.</span>
  <span class="token comment">// 이 속성은 중첩된 레이아웃이나 페이지로 채워집니다.</span>
  children<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>body<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
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
<ul>
<li>앱 디렉토리에는 루트 레이아웃이 포함되어 있어야 합니다.</li>
<li>루트 레이아웃은 <code v-pre>html</code> 및 <code v-pre>body</code> 태그를 정의해야 합니다. Next.js는 자동으로 생성하지 않기 때문입니다.</li>
<li>루트 레이아웃은 pages/_app.tsx 및 pages/_document.tsx 파일을 대체합니다.</li>
<li>레이아웃 파일에는 .js, .jsx 또는 .tsx 확장자를 사용할 수 있습니다.</li>
</ul>
<p><code v-pre>head</code> HTML 요소를 관리하기 위해 내장된 SEO 지원을 사용할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Metadata <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> metadata<span class="token operator">:</span> Metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">"Home"</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">"Welcome to Next.js"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="document-js-및-app-js로-마이그레이션하기" tabindex="-1"><a class="header-anchor" href="#document-js-및-app-js로-마이그레이션하기" aria-hidden="true">#</a> _document.js 및 _app.js로 마이그레이션하기</h4>
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
<p>기존에 _app 또는 _document 파일이 있으면 내용(예: 전역 스타일)을 루트 레이아웃(app/layout.tsx)으로 복사할 수 있습니다. app/layout.tsx의 스타일은 페이지들(*)에 적용되지 않습니다. 페이지들이 깨지지 않도록 마이그레이션하면서 _app/_document를 유지해야 합니다. 완전히 마이그레이션한 후에는 안전하게 삭제할 수 있습니다.</p>
<p>React Context 제공자를 사용 중이라면 클라이언트 컴포넌트로 이동해야 합니다.</p>
<h4 id="getlayout-패턴을-레이아웃으로-마이그레이션하기-선택-사항" tabindex="-1"><a class="header-anchor" href="#getlayout-패턴을-레이아웃으로-마이그레이션하기-선택-사항" aria-hidden="true">#</a> getLayout() 패턴을 레이아웃으로 마이그레이션하기 (선택 사항)</h4>
<p>Next.js는 페이지 디렉터리에서 페이지별 레이아웃을 얻기 위한 속성을 추가하는 것을 권장합니다. 이 패턴은 앱 디렉터리에서 중첩된 레이아웃을 네이티브로 지원하는 것으로 대체될 수 있습니다.</p>
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
<h3 id="단계-3-next-head-이동" tabindex="-1"><a class="header-anchor" href="#단계-3-next-head-이동" aria-hidden="true">#</a> 단계 3: next/head 이동</h3>
<p>페이지 디렉터리에서, next/head 리액트 컴포넌트는 <code v-pre>head</code> HTML 요소를 관리하는 데 사용됩니다. 즉, 제목과 메타 데이터를 설정합니다. 앱 디렉터리에서는 next/head가 새로운 내장 SEO 지원으로 교체됩니다.</p>
<p>이전:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> Head <span class="token keyword">from</span> <span class="token string">"next/head"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Head<span class="token operator">></span>
        <span class="token operator">&lt;</span>title<span class="token operator">></span>내 페이지 제목<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Head<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
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
<p>아래는 마크다운 형식으로 바꾼 코드다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Metadata <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> metadata<span class="token operator">:</span> Metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">"My Page Title"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">"..."</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>모든 메타데이터 옵션을 확인하세요.</p>
<h3 id="단계-4-페이지-이전" tabindex="-1"><a class="header-anchor" href="#단계-4-페이지-이전" aria-hidden="true">#</a> 단계 4: 페이지 이전</h3>
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
<li>앱 디렉토리의 페이지는 기본적으로 서버 컴포넌트입니다. 이는 페이지 디렉토리와는 다르며, 페이지는 클라이언트 컴포넌트입니다.</li>
<li>데이터 가져오기는 앱에서 변경되었습니다. getServerSideProps, getStaticProps 및 getInitialProps는 더 간단한 API로 대체되었습니다.</li>
<li>앱 디렉토리는 라우트를 정의하기 위해 중첩된 폴더를 사용하며, route 세그먼트를 공개적으로 액세스할 수 있도록하는 특별한 page.js 파일을 사용합니다.</li>
</ul>
<table>
<thead>
<tr>
<th>폴더명</th>
<th>페이지명</th>
<th>라우트</th>
</tr>
</thead>
<tbody>
<tr>
<td>index.js</td>
<td>page.js</td>
<td>/</td>
</tr>
<tr>
<td>about.js</td>
<td>about/page.js</td>
<td>/about</td>
</tr>
<tr>
<td>blog/[slug].js</td>
<td>blog/[slug]/page.js</td>
<td>/blog/post-1</td>
</tr>
</tbody>
</table>
<p>페이지의 이주를 두 단계로 나눠서 진행하는 것을 권장합니다:</p>
<ul>
<li>단계 1: 기본 내보내기된 페이지 컴포넌트를 새로운 클라이언트 컴포넌트로 이동합니다.</li>
<li>단계 2: 새로운 클라이언트 컴포넌트를 앱 디렉토리 내의 새로운 page.js 파일로 가져옵니다.</li>
</ul>
<blockquote>
<p>참고: 페이지 디렉토리와 가장 유사한 동작을 가지므로, 이 경로가 가장 쉬운 마이그레이션 경로입니다.</p>
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
<p>단계 1: 새 클라이언트 컴포넌트 만들기</p>
<ul>
<li>앱 디렉토리 내에서 새로운 별도 파일을 만들어주세요 (예: app/home-page.tsx 또는 유사한 이름). 해당 파일은 Client 컴포넌트를 내보냅니다. Client 컴포넌트를 정의하려면 파일 맨 위에 <code v-pre>use client</code> 지시문을 추가해주세요 (임포트보다 먼저).
페이지 라우터와 유사하게, 클라이언트 컴포넌트를 초기 페이지 로딩 시 정적 HTML로 사전 렌더링하는 최적화 단계가 있습니다.</li>
<li>페이지 라우터와 유사하게, 클라이언트 컴포넌트를 초기 페이지 로딩 시 정적 HTML로 사전 렌더링하는 최적화 단계가 있습니다.</li>
<li>페이지/index.js에서 기본 내보낸 페이지 컴포넌트를 app/home-page.tsx로 이동해주세요.</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token comment">// 이것은 클라이언트 컴포넌트입니다 (페이지 디렉토리의 컴포넌트와 동일)</span>
<span class="token comment">// 데이터를 프롭스로 받고, 상태 및 이펙트에 접근할 수 있으며</span>
<span class="token comment">// 초기 페이지 로드 중 서버에서 사전 렌더링됩니다.</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">HomePage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> recentPosts <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token punctuation">{</span>recentPosts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>post<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>단계 2: 새 페이지 만들기</p>
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
<li>앱 디렉토리 안에 새로운 앱/page.tsx 파일을 생성해주세요. 이 파일은 기본적으로 Server Component입니다.</li>
<li>페이지 안에 있는 home-page.tsx Client Component를 Import해주세요.</li>
<li>만약 이전에 pages/index.js에서 데이터를 가져오고 있었으면, 새로운 데이터 가져오기 API를 사용하여 데이터 가져오기 로직을 직접 Server Component로 옮기세요. 자세한 내용은 데이터 가져오기 업그레이드 가이드를 참조하세요.
app/page.tsx
TypeScript
// Client Component를 Import하세요
import HomePage from './home-page'</li>
</ul>
<p>async function getPosts() {
const res = await fetch('https://...')
const posts = await res.json()
return posts
}</p>
<p>export default async function Page() {
// Server Component에서 데이터를 직접 가져옵니다.
const recentPosts = await getPosts()
// 가져온 데이터를 Client Component로 전달합니다.
return <code v-pre>&lt;HomePage recentPosts={recentPosts} /&gt;</code>
}</p>
<ul>
<li>이전 페이지가 useRouter를 사용했다면, 새로운 라우팅 후크로 업데이트 해야 합니다. 자세한 내용을 확인하세요.</li>
<li>개발 서버를 실행하고 http://localhost:3000에 방문해주세요. 기존의 index route가 앱 디렉토리를 통해 제공되는 것을 확인할 수 있어야 합니다.</li>
</ul>
<h3 id="단계-5-라우팅-후크-이전하기" tabindex="-1"><a class="header-anchor" href="#단계-5-라우팅-후크-이전하기" aria-hidden="true">#</a> 단계 5: 라우팅 후크 이전하기</h3>
<p>앱 디렉토리에서 새로운 라우터가 추가되어 새로운 동작을 지원합니다.</p>
<p>앱 안에서는 next/navigation에서 Import한 세 가지 새로운 후크를 사용해야 합니다: useRouter(), usePathname(), useSearchParams().</p>
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
<li>새로운 useRouter 훅은 next/navigation에서 import되며, next/router에서 import되는 페이지의 useRouter 훅과는 다른 동작을 합니다.
next/router에서 import된 useRouter 훅은 앱 디렉토리에서 지원되지 않으나 페이지 디렉토리에서 계속 사용할 수 있습니다.</li>
<li>새로운 useRouter는 경로 이름 문자열을 반환하지 않습니다. 대신 별도의 usePathname 훅을 사용하십시오.</li>
<li>새로운 useRouter는 쿼리 객체를 반환하지 않습니다. 대신 별도의 useSearchParams 훅을 사용하십시오.</li>
<li>페이지 변경을 감시하려면 useSearchParams와 usePathname을 함께 사용할 수 있습니다. 더 자세한 내용은 라우터 이벤트 섹션을 참조하십시오.</li>
<li>이러한 새로운 훅은 클라이언트 컴포넌트에서만 지원됩니다. 서버 컴포넌트에서 사용할 수 없습니다.</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter<span class="token punctuation">,</span> usePathname<span class="token punctuation">,</span> useSearchParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ExampleClientComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> pathname <span class="token operator">=</span> <span class="token function">usePathname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> searchParams <span class="token operator">=</span> <span class="token function">useSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또한, 새로운 useRouter 훅에는 다음과 같은 변경 사항이 있습니다:</p>
<ul>
<li>fallback이 대체되었기 때문에 isFallback이 제거되었습니다.</li>
<li>앱 디렉토리에서는 더 이상 내장 i18n Next.js 기능이 필요하지 않기 때문에 로캘, 로케일, defaultLocales, domainLocales 값이 제거되었습니다. i18n에 대해 자세히 알아보세요.</li>
<li>basePath가 제거되었습니다. 대체 방법은 useRouter의 일부가 아닙니다. 아직 구현되지 않았습니다.</li>
<li>asPath가 제거되었습니다. 새로운 라우터에서 as 개념이 제거되었기 때문에.</li>
<li>isReady가 제거되었습니다. 이제 더 이상 필요하지 않습니다. 정적 렌더링 중 useSearchParams() 훅을 사용하는 모든 컴포넌트는 사전 렌더링 단계를 건너뛰고 대신 런타임에 클라이언트에서 렌더링됩니다.</li>
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
<p><code v-pre>useRouter()</code> API 레퍼런스를 확인해보세요.</p>
<h3 id="단계-6-데이터-가져오기-방법-이전" tabindex="-1"><a class="header-anchor" href="#단계-6-데이터-가져오기-방법-이전" aria-hidden="true">#</a> 단계 6: 데이터 가져오기 방법 이전</h3>
<p>페이지 디렉터리는 페이지의 데이터를 가져오기 위해 getServerSideProps와 getStaticProps를 사용합니다. 앱 디렉터리 안에서는 이전 데이터 가져오기 함수들을 더 간단한 fetch() 및 비동기 React Server Components를 기반으로 한 API로 대체합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 이 요청은 수동으로 무효화될 때까지 캐시되어야 합니다.</span>
  <span class="token comment">// `getStaticProps`와 유사합니다.</span>
  <span class="token comment">// `force-cache`는 기본값이며 생략할 수 있습니다.</span>
  <span class="token keyword">const</span> staticData <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://...</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span> cache<span class="token operator">:</span> <span class="token string">"force-cache"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 이 요청은 모든 요청마다 다시 가져와야 합니다.</span>
  <span class="token comment">// `getServerSideProps`와 유사합니다.</span>
  <span class="token keyword">const</span> dynamicData <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://...</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span> cache<span class="token operator">:</span> <span class="token string">"no-store"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 이 요청은 10초 동안 유지되는 캐시되어야 합니다.</span>
  <span class="token comment">// `revalidate` 옵션을 사용한 `getStaticProps`와 유사합니다.</span>
  <span class="token keyword">const</span> revalidatedData <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://...</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    next<span class="token operator">:</span> <span class="token punctuation">{</span> revalidate<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h4 id="서버-사이드-렌더링-getserversideprops" tabindex="-1"><a class="header-anchor" href="#서버-사이드-렌더링-getserversideprops" aria-hidden="true">#</a> 서버 사이드 렌더링 (getServerSideProps)</h4>
<p>페이지 디렉토리에서 getServerSideProps를 사용하여 서버에서 데이터를 가져와서 파일에서 기본으로 내보낸 리액트 컴포넌트에 props를 전달합니다. 페이지의 초기 HTML은 서버에서 사전 렌더링되며, 브라우저에서 페이지를 &quot;수화&quot;하여 (상호작용 가능하게) 만듭니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// `pages` 디렉토리</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getServerSideProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://...</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> projects <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> projects <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Dashboard</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> projects <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span>
      <span class="token punctuation">{</span>projects<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">project</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>project<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>project<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>앱 디렉토리에서는 서버 컴포넌트를 사용하여 리액트 컴포넌트 내에서 데이터를 가져올 수 있습니다. 이렇게 하면 렌더링된 HTML을 서버에서 유지하면서 클라이언트로 전송하는 JavaScript 양을 줄일 수 있습니다.</p>
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
<p>캐시 옵션을 no-store로 설정하여 가져온 데이터가 캐시되지 않도록 설정할 수 있어요. 이것은 페이지 디렉토리의 getServerSideProps와 비슷한 동작이에요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// `app` 디렉토리</span>

<span class="token comment">// 이 함수의 이름은 자유롭게 지을 수 있어요</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getProjects</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://...</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span> cache<span class="token operator">:</span> <span class="token string">"no-store"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> projects <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> projects<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Dashboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> projects <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getProjects</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span>
      <span class="token punctuation">{</span>projects<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>project<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>project<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>project<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="요청-객체-접근" tabindex="-1"><a class="header-anchor" href="#요청-객체-접근" aria-hidden="true">#</a> 요청 객체 접근</h4>
<p>페이지 디렉토리에서는 Node.js HTTP API를 기반으로 요청 기반 데이터에 액세스할 수 있어요.</p>
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
<p>예를 들어, getServerSideProps에서 req 객체를 가져와 요청의 쿠키와 헤더를 가져올 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// `pages` 디렉토리</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getServerSideProps</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> req<span class="token punctuation">,</span> query <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> authHeader <span class="token operator">=</span> req<span class="token punctuation">.</span><span class="token function">getHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'authorization'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> theme <span class="token operator">=</span> req<span class="token punctuation">.</span>cookies<span class="token punctuation">[</span><span class="token string">'theme'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>앱 디렉토리는 새로운 읽기 전용 함수를 노출하여 요청 데이터를 가져올 수 있습니다:</p>
<ul>
<li>headers(): Web Headers API를 기반으로 하며, 서버 컴포넌트 내에서 요청 헤더를 가져오는 데 사용될 수 있습니다.</li>
<li>cookies(): Web Cookies API를 기반으로 하며, 서버 컴포넌트 내에서 쿠키를 가져오는 데 사용될 수 있습니다.</li>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// `app` 디렉토리</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> cookies<span class="token punctuation">,</span> headers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/headers"</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> authHeader <span class="token operator">=</span> <span class="token function">headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"authorization"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token string">"..."</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 서버 컴포넌트 내부에서 `cookies()` 또는 `headers()`를 직접 사용하거나 데이터 가져오는 함수 안에서 사용할 수 있습니다.</span>
  <span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token function">cookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"theme"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token string">"..."</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="정적-사이트-생성-getstaticprops" tabindex="-1"><a class="header-anchor" href="#정적-사이트-생성-getstaticprops" aria-hidden="true">#</a> 정적 사이트 생성 (getStaticProps)</h4>
<p>페이지 디렉토리에서 getStaticProps 함수는 빌드 시간에 페이지를 사전 렌더링하는 데 사용됩니다. 이 함수는 외부 API에서 데이터를 가져오거나 직접 데이터베이스에서 데이터를 가져와 빌드 중에 생성되는 페이지 전체에 이 데이터를 전달할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// `pages` 디렉토리</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://...</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> projects <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> projects <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Index</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> projects <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> projects<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">project</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>project<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>앱 디렉터리에서 fetch()를 사용한 데이터 가져오기는 기본적으로 캐시: 'force-cache'를 사용하며, 이는 요청 데이터를 수동으로 무효화할 때까지 캐싱합니다. 이는 페이지 디렉터리의 getStaticProps와 유사합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// `app` directory</span>

<span class="token comment">// 이 함수의 이름은 무엇이든 될 수 있습니다</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getProjects</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://...</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> projects <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> projects<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> projects <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getProjects</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> projects<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">project</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>project<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="동적-경로-getstaticpaths" tabindex="-1"><a class="header-anchor" href="#동적-경로-getstaticpaths" aria-hidden="true">#</a> 동적 경로 (getStaticPaths)</h4>
<p>페이지 디렉터리에서 getStaticPaths 함수는 빌드 시 미리 렌더링할 동적 경로를 정의하는 데 사용됩니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// `pages` 디렉토리</span>
<span class="token keyword">import</span> PostLayout <span class="token keyword">from</span> <span class="token string">"@/components/post-layout"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticPaths</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">paths</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"1"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"2"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticProps</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://.../posts/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> post <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> post <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Post</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> post <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>PostLayout post<span class="token operator">=</span><span class="token punctuation">{</span>post<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>앱 디렉토리에서는 getStaticPaths가 generateStaticParams로 바뀌었습니다.</p>
<p>generateStaticParams는 getStaticPaths와 유사하게 작동하지만, 경로 매개변수를 반환하는 간단한 API를 가지며 레이아웃 내부에서 사용할 수 있습니다. generateStaticParams의 반환 모양은 중첩된 매개변수 객체의 배열이 아니라 세그먼트 배열입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// `app` 디렉토리</span>
<span class="token keyword">import</span> PostLayout <span class="token keyword">from</span> <span class="token string">"@/components/post-layout"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">generateStaticParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"1"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"2"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getPost</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://.../posts/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> post <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> post<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Post</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> post <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getPost</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>PostLayout post<span class="token operator">=</span><span class="token punctuation">{</span>post<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
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
<p>앱 디렉토리에 있는 새 모델에 대해 generateStaticParams라는 이름을 사용하는 것이 getStaticPaths보다 더 적합합니다. get 접두어가 더 구체적인 generate로 대체되었으며, getStaticProps와 getServerSideProps가 더 이상 필요하지 않기 때문에 이제 더 잘 어울립니다. Paths 접미사가 Params로 대체되었는데, 이는 여러 동적 세그먼트로 구성된 중첩된 라우팅에 더 적합합니다.</p>
<h4 id="fallback-대체" tabindex="-1"><a class="header-anchor" href="#fallback-대체" aria-hidden="true">#</a> fallback 대체</h4>
<p>페이지 디렉토리에서, getStaticPaths에서 반환된 fallback 속성은 빌드 시 미리 렌더링되지 않은 페이지의 동작을 정의하는 데 사용됩니다. 이 속성은 true로 설정하여 페이지가 생성되는 동안 대체 페이지를 표시하거나, false로 설정하여 404 페이지를 표시하거나, blocking으로 설정하여 요청 시간에 페이지를 생성할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// `pages` 디렉토리</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">generateStaticParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">paths</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token string">'blocking'</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticProps</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Post</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> post <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>앱 디렉토리에서 config.dynamicParams 속성은 generateStaticParams 외부의 params를 어떻게 처리할지를 제어합니다:</p>
<ul>
<li>true: (기본값) generateStaticParams에 포함되지 않은 동적 세그먼트는 요청 시 생성됩니다.</li>
<li>false: generateStaticParams에 포함되지 않은 동적 세그먼트는 404를 반환합니다.</li>
</ul>
<p>이것은 페이지 디렉토리의 getStaticPaths의 fallback: true | false | <code v-pre>blocking</code> 옵션을 대체합니다. 동적Params에는 <code v-pre>blocking</code> 옵션이 포함되어 있지 않습니다. <code v-pre>blocking</code>과 true의 차이는 스트리밍에서 무시할 만큼 미미합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// `app` 디렉토리</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> dynamicParams <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">generateStaticParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getPost</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Post</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> post <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getPost</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>dynamicParams가 True로 설정된 경우 (기본값), 생성되지 않은 경로 세그먼트를 요청하면 서버에서 렌더링되고 캐시됩니다.</p>
<h4 id="점진적-static-regeneration-revalidate를-사용한-getstaticprops" tabindex="-1"><a class="header-anchor" href="#점진적-static-regeneration-revalidate를-사용한-getstaticprops" aria-hidden="true">#</a> 점진적 Static Regeneration (revalidate를 사용한 getStaticProps)</h4>
<p>페이지 디렉토리에서 getStaticProps 함수를 사용하여 일정 시간이 지난 후 페이지를 자동으로 재생성하는 revalidate 필드를 추가할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// `pages` 디렉토리</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://.../posts</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> posts <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">revalidate</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Index</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> posts <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Layout<span class="token operator">></span>
      <span class="token operator">&lt;</span>PostList posts<span class="token operator">=</span><span class="token punctuation">{</span>posts<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">></span>
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
<p>앱 디렉토리에서 fetch()를 사용한 데이터 가져오기는 revalidate를 사용할 수 있습니다. revalidate는 지정된 초 단위로 요청을 캐시합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// `app` 디렉토리</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getPosts</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://.../posts</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">revalidate</span><span class="token operator">:</span> <span class="token number">60</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> data<span class="token punctuation">.</span>posts<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">PostList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getPosts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="api-routes" tabindex="-1"><a class="header-anchor" href="#api-routes" aria-hidden="true">#</a> API Routes</h4>
<p>API Routes는 pages/api 디렉토리에서 변경 없이 계속 사용할 수 있습니다. 그러나 앱 디렉토리에서는 Route Handlers로 대체되었습니다.</p>
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
<p>Route Handlers를 사용하면 웹 요청 및 응답 API를 이용하여 특정 경로에 대한 사용자 정의 요청 처리기를 만들 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">GET</span><span class="token punctuation">(</span>request<span class="token operator">:</span> Request<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>알고 계셔야 할 점: 이전에 클라이언트에서 외부 API를 호출하기 위해 API 경로를 사용했다면, 이제 안전하게 데이터를 가져오기 위해 Server Components를 대신 사용할 수 있습니다. 데이터 가져오기에 대해 더 알아보세요.</p>
</blockquote>
<h3 id="단계-7-스타일링" tabindex="-1"><a class="header-anchor" href="#단계-7-스타일링" aria-hidden="true">#</a> 단계 7: 스타일링</h3>
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
<p>페이지 디렉토리에서 전역 스타일시트는 페이지/_app.js로만 제한됩니다. 그러나 앱 디렉토리에서는 이 제한이 해제되었습니다. 전역 스타일은 레이아웃, 페이지 또는 컴포넌트에 추가할 수 있습니다.</p>
<ul>
<li>CSS 모듈</li>
<li>Tailwind CSS</li>
<li>전역 스타일</li>
<li>CSS-in-JS</li>
<li>외부 스타일시트</li>
<li>Sass</li>
</ul>
<h3 id="tailwind-css" tabindex="-1"><a class="header-anchor" href="#tailwind-css" aria-hidden="true">#</a> Tailwind CSS</h3>
<p>Tailwind CSS를 사용하는 경우, tailwind.config.js 파일에 앱 디렉토리를 추가해야 합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"./app/**/*.{js,ts,jsx,tsx,mdx}"</span><span class="token punctuation">,</span> <span class="token comment">// &lt;-- 이 줄 추가</span>
    <span class="token string">"./pages/**/*.{js,ts,jsx,tsx,mdx}"</span><span class="token punctuation">,</span>
    <span class="token string">"./components/**/*.{js,ts,jsx,tsx,mdx}"</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또한, global 스타일을 앱/layout.js 파일에서 import 해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">"../styles/globals.css"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>body<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Tailwind CSS로 스타일링에 대해 더 알아보기</p>
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
<h2 id="코더-모드" tabindex="-1"><a class="header-anchor" href="#코더-모드" aria-hidden="true">#</a> 코더 모드</h2>
<p>Next.js는 특정 기능이 폐기될 때 코드베이스를 업그레이드하는 데 도움이 되는 코더 모드 변환을 제공합니다. 자세한 정보는 코더 모드를 참조하십시오.</p>
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
