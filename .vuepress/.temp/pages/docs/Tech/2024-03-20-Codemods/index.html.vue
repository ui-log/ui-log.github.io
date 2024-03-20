<template><div><h1 id="nextjs-14-codemod-사용-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14-codemod-사용-방법" aria-hidden="true">#</a> Nextjs 14 codemod 사용 방법</h1>
<p>코드모드는 코드베이스에 프로그래밍적으로 실행되는 변환을 의미합니다. 이를 통해 많은 변경 사항을 수작업으로 모든 파일을 일일이 훑지 않고도 프로그래밍적으로 적용할 수 있습니다.</p>
<p>Next.js는 API가 업데이트되거나 사용이 중단된 경우 Next.js 코드베이스를 업그레이드하는 데 도움이 되는 코드모드 변환을 제공합니다.</p>
<h2 id="사용법" tabindex="-1"><a class="header-anchor" href="#사용법" aria-hidden="true">#</a> 사용법</h2>
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
<p>터미널에서 프로젝트 폴더로 이동한 후 다음 명령을 실행해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx @next<span class="token operator">/</span>codemod <span class="token operator">&lt;</span>transform<span class="token operator">></span> <span class="token operator">&lt;</span>path<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>transform</code>과 <code v-pre>path</code>를 적절한 값으로 바꿔주세요.</p>
<ul>
<li>transform - 변환의 이름</li>
<li>path - 변환할 파일 또는 디렉터리</li>
<li>--dry - dry-run을 실행하여 코드를 편집하지 않음</li>
<li>--print - 변경된 출력물을 비교를 위해 출력함</li>
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
<h2 id="next-js-codemods" tabindex="-1"><a class="header-anchor" href="#next-js-codemods" aria-hidden="true">#</a> Next.js Codemods</h2>
<h3 id="_14-0" tabindex="-1"><a class="header-anchor" href="#_14-0" aria-hidden="true">#</a> 14.0</h3>
<h4 id="imageresponse-imports-이주하기" tabindex="-1"><a class="header-anchor" href="#imageresponse-imports-이주하기" aria-hidden="true">#</a> ImageResponse Imports 이주하기</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx @next<span class="token operator">/</span>codemod@latest next<span class="token operator">-</span>og<span class="token operator">-</span><span class="token keyword">import</span> <span class="token punctuation">.</span>
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
<p>이 코드 변형은 다이나믹 OG 이미지 생성을 위해 next/server에서 next/og로 import를 변환합니다.</p>
<p>예시:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ImageResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>다음과 같이 변환됩니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ImageResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/og"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="viewport-내보내기-사용" tabindex="-1"><a class="header-anchor" href="#viewport-내보내기-사용" aria-hidden="true">#</a> viewport 내보내기 사용</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx @next<span class="token operator">/</span>codemod@latest metadata<span class="token operator">-</span>to<span class="token operator">-</span>viewport<span class="token operator">-</span><span class="token keyword">export</span> <span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 코드 모드는 일부 viewport 메타데이터를 viewport 내보내기로 이전합니다.</p>
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
<p>예시로서:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"My App"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">themeColor</span><span class="token operator">:</span> <span class="token string">"dark"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">viewport</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음과 같이 변환됩니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"My App"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> viewport <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">themeColor</span><span class="token operator">:</span> <span class="token string">"dark"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h3 id="_13-2" tabindex="-1"><a class="header-anchor" href="#_13-2" aria-hidden="true">#</a> 13.2</h3>
<h4 id="내장-폰트-사용하기" tabindex="-1"><a class="header-anchor" href="#내장-폰트-사용하기" aria-hidden="true">#</a> 내장 폰트 사용하기</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx @next<span class="token operator">/</span>codemod@latest built<span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">-</span>next<span class="token operator">-</span>font <span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 코드 모드는 @next/font 패키지를 제거하고 @next/font import를 내장된 next/font로 변환합니다.</p>
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
<p>예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Inter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/font/google"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이렇게 바뀝니다.</p>
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
<h3 id="_13-0" tabindex="-1"><a class="header-anchor" href="#_13-0" aria-hidden="true">#</a> 13.0</h3>
<h4 id="다음-이미지-가져오기-이름-변경" tabindex="-1"><a class="header-anchor" href="#다음-이미지-가져오기-이름-변경" aria-hidden="true">#</a> 다음 이미지 가져오기 이름 변경</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx @next<span class="token operator">/</span>codemod@latest next<span class="token operator">-</span>image<span class="token operator">-</span>to<span class="token operator">-</span>legacy<span class="token operator">-</span>image <span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>기존 Next.js 10, 11 또는 12 애플리케이션에서 next/image 가져오기를 안전하게 Next.js 13의 next/legacy/image로 이름을 변경합니다. 또한 next/future/image를 next/image로 바꿉니다.</p>
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
<p>예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 'next/image' becomes 'next/legacy/image'</span>
<span class="token keyword">import</span> Image1 <span class="token keyword">from</span> <span class="token string">"next/legacy/image"</span><span class="token punctuation">;</span>
<span class="token comment">// 'next/future/image' becomes 'next/image'</span>
<span class="token keyword">import</span> Image2 <span class="token keyword">from</span> <span class="token string">"next/image"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>Image1 src<span class="token operator">=</span><span class="token string">"/test.jpg"</span> width<span class="token operator">=</span><span class="token string">"200"</span> height<span class="token operator">=</span><span class="token string">"300"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Image2 src<span class="token operator">=</span><span class="token string">"/test.png"</span> width<span class="token operator">=</span><span class="token string">"500"</span> height<span class="token operator">=</span><span class="token string">"400"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
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
<h4 id="새-이미지-구성-요소로-이전하기" tabindex="-1"><a class="header-anchor" href="#새-이미지-구성-요소로-이전하기" aria-hidden="true">#</a> 새 이미지 구성 요소로 이전하기</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx @next<span class="token operator">/</span>codemod@latest next<span class="token operator">-</span>image<span class="token operator">-</span>experimental <span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>next/legacy/image에서 새로운 next/image로 안전하게 이전하려면 인라인 스타일을 추가하고 사용되지 않는 프롭을 제거해야 합니다.</p>
<ul>
<li>layout 프롭을 제거하고 스타일을 추가합니다.</li>
<li>objectFit 프롭을 제거하고 스타일을 추가합니다.</li>
<li>objectPosition 프롭을 제거하고 스타일을 추가합니다.</li>
<li>lazyBoundary 프롭을 제거합니다.</li>
<li>lazyRoot 프롭을 제거합니다.</li>
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
<h4 id="링크-구성-요소에서-a-태그-제거하기" tabindex="-1"><a class="header-anchor" href="#링크-구성-요소에서-a-태그-제거하기" aria-hidden="true">#</a> 링크 구성 요소에서 <code v-pre>a</code> 태그 제거하기</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx @next<span class="token operator">/</span>codemod@latest <span class="token keyword">new</span><span class="token operator">-</span>link <span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>링크 구성 요소 내에서 <code v-pre>a</code> 태그를 제거하거나 자동으로 수정할 수 없는 링크에는 legacyBehavior 속성을 추가하세요.</p>
<p>예시:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/about"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>a<span class="token operator">></span>About<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
<span class="token comment">// 다음과 같이 변환됩니다</span>
<span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/about"</span><span class="token operator">></span>
  About
<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>

<span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/about"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>a onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'clicked'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>About<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
<span class="token comment">// 다음과 같이 변환됩니다</span>
<span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/about"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'clicked'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
  About
<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>자동 수정이 적용되지 않는 경우, legacyBehavior prop이 추가됩니다. 이를 통해 특정 링크에 대해 이전 동작을 유지하면서 앱이 계속 작동할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">Component</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>a<span class="token operator">></span>About<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>

<span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/about"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>Component <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
<span class="token comment">// 다음과 같이 변환됩니다</span>
<span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/about"</span> legacyBehavior<span class="token operator">></span>
  <span class="token operator">&lt;</span>Component <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11" tabindex="-1"><a class="header-anchor" href="#_11" aria-hidden="true">#</a> 11</h3>
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
<h4 id="cra에서-이전하기" tabindex="-1"><a class="header-anchor" href="#cra에서-이전하기" aria-hidden="true">#</a> CRA에서 이전하기</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx @next<span class="token operator">/</span>codemod cra<span class="token operator">-</span>to<span class="token operator">-</span>next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 명령어를 실행하면 Create React App 프로젝트를 Next.js로 이전할 수 있습니다. 페이지 라우터를 만들고 동작을 일치시키기 위한 필요한 구성을 생성합니다. 초기에는 클라이언트 측 렌더링만을 이용하여 SSR 중 창(window) 사용으로 인한 호환성 문제를 방지하며, Next.js의 특정 기능을 점진적으로 도입할 수 있도록 매끄럽게 활성화할 수 있습니다.</p>
<p>이 트랜스폼과 관련된 피드백이 있으시면 토론란에 공유해주세요.</p>
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
<h3 id="_10" tabindex="-1"><a class="header-anchor" href="#_10" aria-hidden="true">#</a> 10</h3>
<h4 id="react-imports-추가" tabindex="-1"><a class="header-anchor" href="#react-imports-추가" aria-hidden="true">#</a> React Imports 추가</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx @next<span class="token operator">/</span>codemod add<span class="token operator">-</span>missing<span class="token operator">-</span>react<span class="token operator">-</span><span class="token keyword">import</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>React를 가져오지 않는 파일을 변환하여 React JSX 변환을 사용할 수 있도록 import를 포함시킵니다.</p>
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
<p>예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음과 같이 변환됩니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h3 id="_9" tabindex="-1"><a class="header-anchor" href="#_9" aria-hidden="true">#</a> 9</h3>
<h4 id="익명-컴포넌트를-명명된-컴포넌트로-변환하기" tabindex="-1"><a class="header-anchor" href="#익명-컴포넌트를-명명된-컴포넌트로-변환하기" aria-hidden="true">#</a> 익명 컴포넌트를 명명된 컴포넌트로 변환하기</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx @next<span class="token operator">/</span>codemod name<span class="token operator">-</span><span class="token keyword">default</span><span class="token operator">-</span>component
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>버전 9 이상에서 사용 가능합니다.</p>
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
<p>익명 컴포넌트를 구분할 수 있는 이름 있는 컴포넌트로 변경하여 Fast Refresh와 함께 작동하도록 합니다.</p>
<p>예시:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">내컴포넌트</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>안녕<span class="token punctuation">,</span> 세상<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 컴포넌트는 파일 이름을 기준으로 카멜 케이스로 명명되며, 화살표 함수와 함께 작동합니다.</p>
<h3 id="_8" tabindex="-1"><a class="header-anchor" href="#_8" aria-hidden="true">#</a> 8</h3>
<h4 id="amp-hoc를-페이지-구성으로-변환하기" tabindex="-1"><a class="header-anchor" href="#amp-hoc를-페이지-구성으로-변환하기" aria-hidden="true">#</a> AMP HOC를 페이지 구성으로 변환하기</h4>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx @next<span class="token operator">/</span>codemod withamp<span class="token operator">-</span>to<span class="token operator">-</span>config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>withAmp HOC를 Next.js 9 페이지 구성으로 변환합니다.</p>
<p>예시:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 이전</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> withAmp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/amp"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>내 <span class="token constant">AMP</span> 페이지<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">withAmp</span><span class="token punctuation">(</span>Home<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 이후</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>내 <span class="token constant">AMP</span> 페이지<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">amp</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6" tabindex="-1"><a class="header-anchor" href="#_6" aria-hidden="true">#</a> 6</h3>
<h4 id="withrouter-사용하기" tabindex="-1"><a class="header-anchor" href="#withrouter-사용하기" aria-hidden="true">#</a> withRouter 사용하기</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx @next<span class="token operator">/</span>codemod url<span class="token operator">-</span>to<span class="token operator">-</span>withrouter
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
<p>전의 페이지 자동 주입 url 속성을 사용하여 withRouter 및 주입되는 router 속성을 사용하도록 변경되었습니다. 자세한 내용은 여기를 읽어보세요: <a href="https://nextjs.org/docs/messages/url-deprecated" target="_blank" rel="noopener noreferrer">여기를 클릭하세요<ExternalLinkIcon/></a>.</p>
<p>예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> React<span class="token punctuation">.</span>Component <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> pathname <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>url<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>현재 경로<span class="token operator">:</span> <span class="token punctuation">{</span>pathname<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> withRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/router"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">withRouter</span><span class="token punctuation">(</span>
  <span class="token keyword">class</span> <span class="token class-name">extends</span> React<span class="token punctuation">.</span>Component <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> pathname <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>router<span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>현재 경로<span class="token operator">:</span> <span class="token punctuation">{</span>pathname<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>이것은 한 가지 경우입니다. 변환된(그리고 테스트된) 모든 경우들은 <strong>testfixtures</strong> 디렉토리에서 찾을 수 있어요.</p>
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
