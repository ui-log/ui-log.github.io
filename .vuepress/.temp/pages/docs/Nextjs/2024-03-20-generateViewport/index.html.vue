<template><div><h1 id="nextjs-14에서-초기-뷰포트-생성하기-generateviewport" tabindex="-1"><a class="header-anchor" href="#nextjs-14에서-초기-뷰포트-생성하기-generateviewport" aria-hidden="true">#</a> Nextjs 14에서 초기 뷰포트 생성하기(generateViewport)</h1>
<p>페이지의 초기 뷰포트를 정적 뷰포트 객체 또는 동적 generateViewport 함수로 사용자 정의할 수 있습니다.</p>
<blockquote>
<p>참고:
뷰포트 객체와 generateViewport 함수는 서버 구성요소에서만 지원됩니다.
동일한 라우트 세그먼트에서 뷰포트 객체와 generateViewport 함수를 모두 내보낼 수 없습니다.
메타데이터 내보내기에서 온 경우 metadata-to-viewport-export codemod를 사용하여 변경 사항을 업데이트할 수 있습니다.</p>
</blockquote>
<h2 id="뷰포트-객체" tabindex="-1"><a class="header-anchor" href="#뷰포트-객체" aria-hidden="true">#</a> 뷰포트 객체</h2>
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
<p>뷰포트 옵션을 정의하려면 layout.jsx 또는 page.jsx 파일에서 viewport 객체를 내보내세요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Viewport <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> viewport<span class="token operator">:</span> Viewport <span class="token operator">=</span> <span class="token punctuation">{</span>
  themeColor<span class="token operator">:</span> <span class="token string">"black"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="generateviewport-함수" tabindex="-1"><a class="header-anchor" href="#generateviewport-함수" aria-hidden="true">#</a> generateViewport 함수</h2>
<p>generateViewport 함수는 하나 이상의 뷰포트 필드를 포함한 Viewport 객체를 반환해야 합니다.</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">generateViewport</span><span class="token punctuation">(</span><span class="token punctuation">{</span> params <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    themeColor<span class="token operator">:</span> <span class="token string">"..."</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>참고 사항:
Viewport가 런타임 정보에 의존하지 않는다면, generateMetadata 대신 정적 Viewport 객체를 사용하여 정의해야 합니다.</p>
</blockquote>
<h2 id="viewport-필드" tabindex="-1"><a class="header-anchor" href="#viewport-필드" aria-hidden="true">#</a> Viewport 필드</h2>
<h3 id="themecolor" tabindex="-1"><a class="header-anchor" href="#themecolor" aria-hidden="true">#</a> themeColor</h3>
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
<p>테마 색상에 대해 더 알아보세요.</p>
<p>간단한 테마 색상</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Viewport <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> viewport<span class="token operator">:</span> Viewport <span class="token operator">=</span> <span class="token punctuation">{</span>
  themeColor<span class="token operator">:</span> <span class="token string">"black"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"theme-color"</span> content<span class="token operator">=</span><span class="token string">"black"</span> <span class="token operator">/</span><span class="token operator">></span>
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
<p>미디어 속성이 있는 테이블</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Viewport <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> viewport<span class="token operator">:</span> Viewport <span class="token operator">=</span> <span class="token punctuation">{</span>
  themeColor<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> media<span class="token operator">:</span> <span class="token string">"(prefers-color-scheme: light)"</span><span class="token punctuation">,</span> color<span class="token operator">:</span> <span class="token string">"cyan"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> media<span class="token operator">:</span> <span class="token string">"(prefers-color-scheme: dark)"</span><span class="token punctuation">,</span> color<span class="token operator">:</span> <span class="token string">"black"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"theme-color"</span> media<span class="token operator">=</span><span class="token string">"(prefers-color-scheme: light)"</span> content<span class="token operator">=</span><span class="token string">"cyan"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"theme-color"</span> media<span class="token operator">=</span><span class="token string">"(prefers-color-scheme: dark)"</span> content<span class="token operator">=</span><span class="token string">"black"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="너비-초기-확대-최대-확대-및-사용자-확대-가능-여부" tabindex="-1"><a class="header-anchor" href="#너비-초기-확대-최대-확대-및-사용자-확대-가능-여부" aria-hidden="true">#</a> 너비, 초기 확대, 최대 확대 및 사용자 확대 가능 여부</h3>
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
<p>참고: 뷰포트 메타 태그는 자동으로 설정되며, 일반적으로 기본 설정이 충분하여 수동 구성이 필요하지 않습니다. 그러나 완전성을 위해 정보가 제공됩니다.</p>
</blockquote>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Viewport <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> viewport<span class="token operator">:</span> Viewport <span class="token operator">=</span> <span class="token punctuation">{</span>
  width<span class="token operator">:</span> <span class="token string">"device-width"</span><span class="token punctuation">,</span>
  initialScale<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  maximumScale<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  userScalable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// Less commonly used but supported</span>
  <span class="token comment">// interactiveWidget: 'resizes-visual',</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="colorscheme" tabindex="-1"><a class="header-anchor" href="#colorscheme" aria-hidden="true">#</a> colorScheme</h3>
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
<p>Learn more about color-scheme.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Viewport <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> viewport<span class="token operator">:</span> Viewport <span class="token operator">=</span> <span class="token punctuation">{</span>
  colorScheme<span class="token operator">:</span> <span class="token string">"dark"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"color-scheme"</span> content<span class="token operator">=</span><span class="token string">"dark"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="types" tabindex="-1"><a class="header-anchor" href="#types" aria-hidden="true">#</a> Types</h2>
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
<p>Viewport 객체에 타입 안전성을 추가할 수 있습니다. Viewport 타입을 사용하여 뷰포트 객체에 타입을 설정할 수 있어요. IDE에 기본으로 제공된 TypeScript 플러그인을 사용 중이라면 타입을 수동으로 추가할 필요가 없지만, 원한다면 명시적으로 추가할 수도 있어요.</p>
<h3 id="viewport-객체" tabindex="-1"><a class="header-anchor" href="#viewport-객체" aria-hidden="true">#</a> viewport 객체</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> Viewport <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">viewport</span><span class="token operator">:</span> Viewport <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeColor</span><span class="token operator">:</span> <span class="token string">"black"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="generateviewport-함수-1" tabindex="-1"><a class="header-anchor" href="#generateviewport-함수-1" aria-hidden="true">#</a> generateViewport 함수</h3>
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
<h4 id="보통-함수" tabindex="-1"><a class="header-anchor" href="#보통-함수" aria-hidden="true">#</a> 보통 함수</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> Viewport <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">generateViewport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Viewport <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">themeColor</span><span class="token operator">:</span> <span class="token string">"black"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="세그먼트-프로퍼티와-함께" tabindex="-1"><a class="header-anchor" href="#세그먼트-프로퍼티와-함께" aria-hidden="true">#</a> 세그먼트 프로퍼티와 함께</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> Viewport <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next'</span>

type Props <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> string <span class="token punctuation">}</span>
  <span class="token literal-property property">searchParams</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> string <span class="token operator">|</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">generateViewport</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params<span class="token punctuation">,</span> searchParams <span class="token punctuation">}</span><span class="token operator">:</span> Props</span><span class="token punctuation">)</span><span class="token operator">:</span> Viewport <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">themeColor</span><span class="token operator">:</span> <span class="token string">'black'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params<span class="token punctuation">,</span> searchParams <span class="token punctuation">}</span><span class="token operator">:</span> Props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h4 id="javascript-프로젝트" tabindex="-1"><a class="header-anchor" href="#javascript-프로젝트" aria-hidden="true">#</a> JavaScript 프로젝트</h4>
<p>JavaScript 프로젝트의 경우, 타입 안전성을 추가하기 위해 JSDoc을 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"next"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Viewport<span class="token punctuation">}</span></span> */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> viewport <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeColor</span><span class="token operator">:</span> <span class="token string">"black"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="버전-이력" tabindex="-1"><a class="header-anchor" href="#버전-이력" aria-hidden="true">#</a> 버전 이력</h2>
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
<table>
<thead>
<tr>
<th>Version</th>
<th>Changes</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v14.0.0</code></td>
<td><code v-pre>viewport</code> and <code v-pre>generateViewport</code> introduced.</td>
</tr>
</tbody>
</table>
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
