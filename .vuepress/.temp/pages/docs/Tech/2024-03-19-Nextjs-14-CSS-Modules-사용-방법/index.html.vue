<template><div><h1 id="nextjs-14-css-modules-사용-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14-css-modules-사용-방법" aria-hidden="true">#</a> Nextjs 14 CSS Modules 사용 방법</h1>
<h1 id="css-모듈" tabindex="-1"><a class="header-anchor" href="#css-모듈" aria-hidden="true">#</a> CSS 모듈</h1>
<p>Next.js에는 .module.css 확장자를 사용하여 CSS 모듈을 내장 지원합니다.</p>
<p>CSS 모듈은 자동으로 고유한 클래스 이름을 생성하여 CSS를 지역적으로 스코프화합니다. 이를 통해 서로 다른 파일에서 동일한 클래스 이름을 사용하더라도 충돌에 대해 걱정할 필요가 없습니다. 이 동작은 CSS 모듈을 구성 요소 수준의 CSS를 포함하기에 이상적인 방법으로 만듭니다.</p>
<h2 id="예시" tabindex="-1"><a class="header-anchor" href="#예시" aria-hidden="true">#</a> 예시</h2>
<p>CSS 모듈은 앱 디렉토리 내의 모든 파일에 가져올 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">"./styles.module.css"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">DashboardLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>section className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>dashboard<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.dashboard</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS 모듈은 선택적 기능이며 .module.css 확장자를 가진 파일에 대해서만 활성화됩니다. 일반 <link> 스타일 시트와 전역 CSS 파일은 여전히 지원됩니다.</p>
<p>생산 환경에서는 모든 CSS 모듈 파일이 자동으로 여러 개의 압축되고 코드가 분할된 .css 파일로 연결됩니다. 이 .css 파일은 응용 프로그램에서 핫 실행 경로를 나타내며 응용 프로그램이 페인트되는 데 필요한 최소한의 CSS만 로드되도록 보장합니다.</p>
<h2 id="전역-스타일" tabindex="-1"><a class="header-anchor" href="#전역-스타일" aria-hidden="true">#</a> 전역 스타일</h2>
<p>전역 스타일은 앱 디렉토리 내의 레이아웃, 페이지 또는 컴포넌트에서 가져올 수 있습니다.</p>
<blockquote>
<p>알아두면 좋은 점: 이것은 페이지 디렉토리와 다르며 전역 스타일은 _app.js 파일 내에서만 가져올 수 있습니다.</p>
</blockquote>
<p>예를 들어, app/global.css라는 스타일 시트가 있다고 가정해 보겠습니다:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px 20px 60px<span class="token punctuation">;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 680px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>루트 레이아웃(app/layout.js) 내에서 global.css 스타일 시트를 가져와서 응용 프로그램의 모든 경로에 스타일을 적용합니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 이 스타일은 응용 프로그램의 모든 경로에 적용됩니다</span>
<span class="token keyword">import</span> <span class="token string">"./global.css"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>body<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="외부-스타일시트" tabindex="-1"><a class="header-anchor" href="#외부-스타일시트" aria-hidden="true">#</a> 외부 스타일시트</h2>
<p>외부 패키지에서 발행한 스타일시트는 앱 디렉토리 내의 모든 곳, 즉 동일한 위치에 있는 컴포넌트와 같은 곳에서 가져올 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token string">"bootstrap/dist/css/bootstrap.css"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>body className<span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두면 좋은 점: 외부 스타일시트는 npm 패키지에서 직접 가져오거나 코드베이스와 함께 다운로드하여 동일한 위치에 둬야 합니다. <link rel="stylesheet" />를 사용할 수 없습니다.</p>
</blockquote>
<h2 id="추가-기능" tabindex="-1"><a class="header-anchor" href="#추가-기능" aria-hidden="true">#</a> 추가 기능</h2>
<p>Next.js에는 스타일 추가 작성 경험을 개선하는 추가 기능이 포함되어 있습니다:</p>
<ul>
<li>next dev로 로컬로 실행할 때 로컬 스타일시트(전역 또는 CSS 모듈)은 Fast Refresh를 활용하여 편집이 저장될 때 즉시 변경 사항을 반영합니다.</li>
<li>next build로 프로덕션용으로 빌드할 때 CSS 파일은 스타일을 검색하는 데 필요한 네트워크 요청의 수를 줄이기 위해 더 적은 수의 압축된 .css 파일로 번들됩니다.</li>
<li>JavaScript를 비활성화하면 프로덕션 빌드(next start)에서도 스타일이 로드됩니다. 그러나 Fast Refresh를 활성화하려면 여전히 JavaScript가 필요합니다.</li>
</ul>
</div></template>
