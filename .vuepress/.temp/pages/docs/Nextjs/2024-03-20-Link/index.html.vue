<template><div><h1 id="nextjs-14의-link-태그-사용-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14의-link-태그-사용-방법" aria-hidden="true">#</a> Nextjs 14의 Link 태그 사용 방법</h1>
<p><code v-pre>Link</code>는 HTML <code v-pre>a</code> 요소를 확장하여 라우트 간 사전 로드 및 클라이언트 측 탐색을 제공하는 React 구성 요소입니다. Next.js에서 라우트 간 이동하는 주요 방법입니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/dashboard"</span><span class="token operator">></span>대시보드<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="속성" tabindex="-1"><a class="header-anchor" href="#속성" aria-hidden="true">#</a> 속성</h2>
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
<p>여기 Link 컴포넌트에 사용할 수 있는 속성 요약이 있어요:</p>
<table>
<thead>
<tr>
<th>속성</th>
<th>예시</th>
<th>타입</th>
<th>필수</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="#href-required">href</a></td>
<td><code v-pre>href=&quot;/dashboard&quot;</code></td>
<td>문자열 또는 객체</td>
<td>네</td>
</tr>
<tr>
<td><a href="#replace">replace</a></td>
<td><code v-pre>replace={false}</code></td>
<td>불린</td>
<td>-</td>
</tr>
<tr>
<td><a href="#scroll">scroll</a></td>
<td><code v-pre>scroll={false}</code></td>
<td>불린</td>
<td>-</td>
</tr>
<tr>
<td><a href="#prefetch">prefetch</a></td>
<td><code v-pre>prefetch={false}</code></td>
<td>불린 또는 널</td>
<td>-</td>
</tr>
</tbody>
</table>
<blockquote>
<p>참고: <code v-pre>a</code> 태그 속성인 className이나 target=&quot;_blank&quot;와 같은 것들은 <code v-pre>Link</code> 속성으로 추가할 수 있으며, <code v-pre>a</code> 요소로 전달될 거예요.</p>
</blockquote>
<h3 id="href-필수" tabindex="-1"><a class="header-anchor" href="#href-필수" aria-hidden="true">#</a> href (필수)</h3>
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
<p>페이지로 이동할 경로 또는 URL입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/대시보드"</span><span class="token operator">></span>대시보드<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>href는 객체를 허용하기도 합니다. 예를 들어 다음과 같이 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// /about?name=test로 이동</span>
<span class="token operator">&lt;</span>Link
  href<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
    <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">"/about"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"test"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">></span>
  소개
<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h3 id="변경" tabindex="-1"><a class="header-anchor" href="#변경" aria-hidden="true">#</a> 변경</h3>
<p>기본값은 false입니다. true로 설정하면 next/link가 브라우저의 히스토리 스택에 새 URL을 추가하는 대신 현재 히스토리 상태를 대체합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/dashboard"</span> replace<span class="token operator">></span>
      Dashboard
    <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="스크롤" tabindex="-1"><a class="header-anchor" href="#스크롤" aria-hidden="true">#</a> 스크롤</h3>
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
<p>기본값은 true입니다. <code v-pre>Link</code>의 기본 동작은 새 경로의 맨 위로 스크롤하거나 뒤로, 앞으로 이동할 때 스크롤 위치를 유지하는 것입니다. scroll={false}로 설정하면 next/link가 탐색 후 페이지 맨 위로 스크롤하지 않습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/dashboard"</span> scroll<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token operator">></span>
      Dashboard
    <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두면 좋은 사항:
콘텐츠가 화면에 보이지 않으면 Next.js는 탐색할 때 페이지로 스크롤합니다.</p>
</blockquote>
<h3 id="미리-가져오기-prefetch" tabindex="-1"><a class="header-anchor" href="#미리-가져오기-prefetch" aria-hidden="true">#</a> 미리 가져오기(prefetch)</h3>
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
<p>프리패칭은 <code v-pre>Link</code> 컴포넌트가 사용자의 뷰포트에 들어오면 발생합니다(초기에든 스크롤을 통해든). Next.js는 프리패치를 통해 링크된 라우트(링크된 href에 의해 표시됨)와 해당 데이터를 백그라운드에서로드하여 클라이언트 측 네비게이션의 성능을 향상시킵니다. 프리패칭은 프로덕션 환경에서만 활성화됩니다.</p>
<ul>
<li>null (기본값): 프리패치 동작은 라우트가 정적인지 동적인지에 따라 달라집니다. 정적 라우트의 경우 완전한 라우트가 프리패치됩니다(모든 데이터 포함). 동적 라우트의 경우로딩.js 경계를 갖는 가장 가까운 세그먼트까지의 부분 라우트가 프리패치됩니다.</li>
<li>true: 정적 및 동적 라우트 모두 완전한 라우트가 프리패치됩니다.</li>
<li>false: 프리패칭은 뷰포트에 진입하거나 호버 시 모두 발생하지 않습니다.</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">'next/link'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token punctuation">[</span>Dashboard<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">/</span>dashboard<span class="token punctuation">)</span>에 해당하는 Markdown 파일
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="예제" tabindex="-1"><a class="header-anchor" href="#예제" aria-hidden="true">#</a> 예제</h2>
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
<h3 id="동적-경로에-링크-걸기" tabindex="-1"><a class="header-anchor" href="#동적-경로에-링크-걸기" aria-hidden="true">#</a> 동적 경로에 링크 걸기</h3>
<p>동적 경로의 경우, 템플릿 리터럴을 사용하여 링크 경로를 생성하는 것이 편리할 수 있습니다.</p>
<p>예를 들어, 동적 경로 app/blog/[slug]/page.js에 대한 링크 목록을 생성할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> posts <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span>
      <span class="token punctuation">{</span>posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/blog/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>post<span class="token punctuation">.</span>slug<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
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
<h3 id="만약에-자식-요소가-a-태그를-감싼-사용자-지정-컴포넌트인-경우" tabindex="-1"><a class="header-anchor" href="#만약에-자식-요소가-a-태그를-감싼-사용자-지정-컴포넌트인-경우" aria-hidden="true">#</a> 만약에 자식 요소가 <code v-pre>a</code> 태그를 감싼 사용자 지정 컴포넌트인 경우</h3>
<p>Link의 자식 요소가 <code v-pre>a</code> 태그를 감싼 사용자 지정 컴포넌트일 때, Link에 passHref를 추가해야 합니다. styled-components와 같은 라이브러리를 사용할 때 필요합니다. 이 기능을 사용하지 않으면 <code v-pre>a</code> 태그에 href 속성이 없어 사이트의 접근성에 영향을 미칠 수 있고 SEO에도 영향을 미칠 수 있습니다. ESLint를 사용 중이라면 next/link-passhref 빌트인 규칙을 사용하여 passHref의 올바른 사용을 보장할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">"styled-components"</span><span class="token punctuation">;</span>

<span class="token comment">// &lt;a> 태그를 감싼 사용자 지정 컴포넌트를 생성합니다.</span>
<span class="token keyword">const</span> RedLink <span class="token operator">=</span> styled<span class="token punctuation">.</span>a<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  color: red;
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">NavLink</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> href<span class="token punctuation">,</span> name <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token punctuation">{</span>href<span class="token punctuation">}</span> passHref legacyBehavior<span class="token operator">></span>
      <span class="token operator">&lt;</span>RedLink<span class="token operator">></span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>RedLink<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> NavLink<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>만약 emotion의 JSX pragma 기능 (@jsx jsx)를 사용 중이라면, <code v-pre>a</code> 태그를 직접 사용하더라도 passHref를 사용해야 합니다.</li>
<li>컴포넌트는 navigation을 올바르게 트리거하기 위해 onClick 프로퍼티를 지원해야 합니다.</li>
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
<h3 id="자식이-함수-컴포넌트인-경우" tabindex="-1"><a class="header-anchor" href="#자식이-함수-컴포넌트인-경우" aria-hidden="true">#</a> 자식이 함수 컴포넌트인 경우</h3>
<p>만약 Link의 자식이 함수 컴포넌트라면, passHref와 legacyBehavior를 사용하는 것 외에도 컴포넌트를 React.forwardRef로 감싸주어야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span>

<span class="token comment">// `onClick`, `href`, 그리고 `ref`는 적절한 처리를 위해 DOM 요소로 전달되어야 합니다</span>
<span class="token keyword">const</span> MyButton <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onClick<span class="token punctuation">,</span> href <span class="token punctuation">}</span><span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token punctuation">{</span>href<span class="token punctuation">}</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span> ref<span class="token operator">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span><span class="token operator">></span>
      Click Me
    <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/about"</span> passHref legacyBehavior<span class="token operator">></span>
      <span class="token operator">&lt;</span>MyButton <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Home<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="url-객체-사용하기" tabindex="-1"><a class="header-anchor" href="#url-객체-사용하기" aria-hidden="true">#</a> URL 객체 사용하기</h3>
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
<p>링크는 URL 객체도 받을 수 있고 자동으로 URL 문자열을 생성하여 형식화할 수 있습니다. 아래는 그 방법입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span>
      <span class="token operator">&lt;</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">"/about"</span><span class="token punctuation">,</span> <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"test"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>About us<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
      <span class="token operator">&lt;</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">"/blog/[slug]"</span><span class="token punctuation">,</span> <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">slug</span><span class="token operator">:</span> <span class="token string">"my-post"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>Blog Post<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Home<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 예제에서 링크는 다음을 연결합니다:</p>
<ul>
<li>미리 정의된 경로: /about?name=test</li>
<li>동적 경로: /blog/my-post</li>
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
<p>Node.js URL 모듈 문서에서 정의된 모든 속성을 사용할 수 있어요.</p>
<h3 id="push-대신-url-교체" tabindex="-1"><a class="header-anchor" href="#push-대신-url-교체" aria-hidden="true">#</a> push 대신 URL 교체</h3>
<p>Link 컴포넌트의 기본 동작은 새 URL을 history 스택에 추가하는 것이에요. 다음 예시처럼 교체 속성을 사용하여 새 항목을 추가하지 않도록 할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/about"</span> replace<span class="token operator">></span>
  회사 소개
<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
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
<h3 id="페이지-상단으로-스크롤되는-것을-비활성화" tabindex="-1"><a class="header-anchor" href="#페이지-상단으로-스크롤되는-것을-비활성화" aria-hidden="true">#</a> 페이지 상단으로 스크롤되는 것을 비활성화</h3>
<p>링크의 기본 동작은 페이지 상단으로 스크롤하는 것입니다. 해시가 정의된 경우 특정 ID로 스크롤됩니다. 일반 <code v-pre>a</code> 태그와 같이요. 페이지 상단으로 스크롤되는 것을 방지하려면 Link에 다음을 추가할 수 있습니다: /#hashid` scroll={false}:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"/#hashid"</span> scroll<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token operator">></span>
  페이지 상단으로 스크롤 비활성화
<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="미들웨어" tabindex="-1"><a class="header-anchor" href="#미들웨어" aria-hidden="true">#</a> 미들웨어</h3>
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
<p>미들웨어를 사용하여 인증이나 사용자를 다른 페이지로 재작성하는 경우가 많습니다. 미들웨어를 통해 리다이렉트된 링크를 제대로 미리 가져오기 위해 Next.js에게 표시할 URL과 미리 가져올 URL을 모두 알려주어야 합니다. 이는 올바른 경로를 사전에 가져오기 위해 미들웨어에 불필요한 요청을 보내지 않도록 하기 위해서 필요합니다.</p>
<p>예를 들어, 인증 및 방문자 뷰가 있는 /dashboard 경로를 제공하고 싶다면, 미들웨어에 다음과 유사한 내용을 추가하여 사용자를 올바른 페이지로 리디렉션할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span><span class="token parameter">req</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nextUrl <span class="token operator">=</span> req<span class="token punctuation">.</span>nextUrl<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>nextUrl<span class="token punctuation">.</span>pathname <span class="token operator">===</span> <span class="token string">"/dashboard"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span>authToken<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">rewrite</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">"/auth/dashboard"</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">rewrite</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">"/public/dashboard"</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 경우, <code v-pre>Link /</code> 컴포넌트에서 다음 코드를 사용하고 싶을 것입니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> useIsAuthed <span class="token keyword">from</span> <span class="token string">"./hooks/useIsAuthed"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isAuthed <span class="token operator">=</span> <span class="token function">useIsAuthed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> path <span class="token operator">=</span> isAuthed <span class="token operator">?</span> <span class="token string">"/auth/dashboard"</span> <span class="token operator">:</span> <span class="token string">"/public/dashboard"</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Link <span class="token keyword">as</span><span class="token operator">=</span><span class="token string">"/dashboard"</span> href<span class="token operator">=</span><span class="token punctuation">{</span>path<span class="token punctuation">}</span><span class="token operator">></span>
      Dashboard
    <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="버전-히스토리" tabindex="-1"><a class="header-anchor" href="#버전-히스토리" aria-hidden="true">#</a> 버전 히스토리</h2>
<table>
<thead>
<tr>
<th>Version</th>
<th>Changes</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v13.0.0</code></td>
<td>자식 <code v-pre>&lt;a&gt;</code> 태그가 더 이상 필요하지 않습니다. 자동으로 코드베이스를 업데이트하기 위한 <a href="/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components">codemod</a>가 제공됩니다.</td>
</tr>
<tr>
<td><code v-pre>v10.0.0</code></td>
<td>동적 경로를 가리키는 <code v-pre>href</code> props는 자동으로 해결되어 더 이상 <code v-pre>as</code> prop이 필요하지 않습니다.</td>
</tr>
<tr>
<td><code v-pre>v8.0.0</code></td>
<td>개선된 프리패칭 성능.</td>
</tr>
<tr>
<td><code v-pre>v1.0.0</code></td>
<td><code v-pre>next/link</code> 도입.</td>
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
