<template><div><h1 id="nextjs-14-메타데이터-설정하는-방법-정리" tabindex="-1"><a class="header-anchor" href="#nextjs-14-메타데이터-설정하는-방법-정리" aria-hidden="true">#</a> Nextjs 14 메타데이터 설정하는 방법 정리</h1>
<p>이 페이지는 generateMetadata와 정적 메타데이터 객체와 함께 사용되는 모든 Config 기반 메타데이터 옵션을 다룹니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Metadata <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token comment">// 정적 메타데이터</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> metadata<span class="token operator">:</span> Metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">"..."</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 동적 메타데이터</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">generateMetadata</span><span class="token punctuation">(</span><span class="token punctuation">{</span> params <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">"..."</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두면 좋은 사실:
메타데이터 객체와 generateMetadata 함수는 서버 컴포넌트에서만 지원됩니다.
동일한 라우트 세그먼트에서 메타데이터 객체와 generateMetadata 함수를 모두 내보낼 수 없습니다.</p>
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
<h2 id="메타데이터-객체" tabindex="-1"><a class="header-anchor" href="#메타데이터-객체" aria-hidden="true">#</a> 메타데이터 객체</h2>
<p>정적 메타데이터를 정의하려면 layout.js 또는 page.js 파일에서 Metadata 객체를 내보내세요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Metadata <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> metadata<span class="token operator">:</span> Metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">"..."</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">"..."</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>지원되는 옵션의 전체 목록을 보려면 메타데이터 필드를 참조하세요.</p>
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
<h2 id="generatemetadata-함수" tabindex="-1"><a class="header-anchor" href="#generatemetadata-함수" aria-hidden="true">#</a> generateMetadata 함수</h2>
<p>동적 메타데이터는 현재 라우트 매개변수, 외부 데이터 또는 상위 세그먼트에 있는 메타데이터와 같은 동적 정보에 따라 달라집니다. generateMetadata 함수를 내보내는 것으로 Metadata 객체를 반환할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Metadata<span class="token punctuation">,</span> ResolvingMetadata <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Props</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  searchParams<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">generateMetadata</span><span class="token punctuation">(</span><span class="token punctuation">{</span> params<span class="token punctuation">,</span> searchParams <span class="token punctuation">}</span><span class="token operator">:</span> Props<span class="token punctuation">,</span> parent<span class="token operator">:</span> ResolvingMetadata<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Metadata<span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token comment">// 라우트 매개변수 읽기</span>
  <span class="token keyword">const</span> id <span class="token operator">=</span> params<span class="token punctuation">.</span>id<span class="token punctuation">;</span>

  <span class="token comment">// 데이터 가져오기</span>
  <span class="token keyword">const</span> product <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://.../</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 선택적으로 상위 메타데이터에 접근 및 확장(대체 대신)</span>
  <span class="token keyword">const</span> previousImages <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">await</span> parent<span class="token punctuation">)</span><span class="token punctuation">.</span>openGraph<span class="token operator">?.</span>images <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> product<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
    openGraph<span class="token operator">:</span> <span class="token punctuation">{</span>
      images<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"/some-specific-page-image.jpg"</span><span class="token punctuation">,</span> <span class="token operator">...</span>previousImages<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span> params<span class="token punctuation">,</span> searchParams <span class="token punctuation">}</span><span class="token operator">:</span> Props<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="매개변수" tabindex="-1"><a class="header-anchor" href="#매개변수" aria-hidden="true">#</a> 매개변수</h3>
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
<p>generateMetadata 함수는 다음과 같은 매개변수를 받습니다:</p>
<ul>
<li>props - 현재 라우트의 매개변수를 포함한 객체:
params - root 세그먼트에서부터 generateMetadata가 호출된 세그먼트까지의 동적 라우트 매개변수 객체를 포함합니다. 예시:
라우트 URL params
app/shop/[slug]/page.js /shop/1 { slug: <code v-pre>1</code> }
app/shop/[tag]/[item]/page.js /shop/1/2 { tag: <code v-pre>1</code>, item: <code v-pre>2</code> }
app/shop/[...slug]/page.js /shop/1/2 { slug: [<code v-pre>1</code>, <code v-pre>2</code>] }
searchParams - 현재 URL의 검색 매개변수를 포함한 객체입니다. 예시:
URL searchParams
/shop?a=1 { a: <code v-pre>1</code> }
/shop?a=1&amp;b=2 { a: <code v-pre>1</code>, b: <code v-pre>2</code> }
/shop?a=1&amp;a=2 { a: [<code v-pre>1</code>, <code v-pre>2</code>] }</li>
<li>params - root 세그먼트에서부터 generateMetadata가 호출된 세그먼트까지의 동적 라우트 매개변수 객체를 포함합니다. 예시:
라우트 URL params
app/shop/[slug]/page.js /shop/1 { slug: <code v-pre>1</code> }
app/shop/[tag]/[item]/page.js /shop/1/2 { tag: <code v-pre>1</code>, item: <code v-pre>2</code> }
app/shop/[...slug]/page.js /shop/1/2 { slug: [<code v-pre>1</code>, <code v-pre>2</code>] }</li>
<li>searchParams - 현재 URL의 검색 매개변수를 포함한 객체입니다. 예시:
URL searchParams
/shop?a=1 { a: <code v-pre>1</code> }
/shop?a=1&amp;b=2 { a: <code v-pre>1</code>, b: <code v-pre>2</code> }
/shop?a=1&amp;a=2 { a: [<code v-pre>1</code>, <code v-pre>2</code>] }</li>
<li>parent - 상위 루트 세그먼트에서 해결된 메타데이터의 Promise입니다.</li>
</ul>
<h3 id="반환값" tabindex="-1"><a class="header-anchor" href="#반환값" aria-hidden="true">#</a> 반환값</h3>
<p>generateMetadata 함수는 하나 이상의 메타데이터 필드를 포함한 Metadata 객체를 반환해야 합니다.</p>
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
<p>좋아 알아두기:
만약 메타데이터가 런타임 정보에 의존하지 않는다면, generateMetadata 대신 정적 메타데이터 객체를 사용하여 정의해야 합니다.
generateMetadata를 통해 같은 데이터에 대한 fetch 요청은 generateStaticParams, 레이아웃, 페이지, 서버 컴포넌트 간에 자동으로 메모이제이션됩니다. fetch를 사용할 수 없는 경우 React 캐시를 사용할 수 있습니다.
searchParams는 page.js 세그먼트에서만 사용할 수 있습니다.
redirect() 및 notFound() Next.js 메서드를 generateMetadata 내에서도 사용할 수 있습니다.</p>
</blockquote>
<h2 id="메타데이터-필드" tabindex="-1"><a class="header-anchor" href="#메타데이터-필드" aria-hidden="true">#</a> 메타데이터 필드</h2>
<h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3>
<p>title 속성은 문서의 제목을 설정하는데 사용됩니다. 간단한 문자열 또는 선택적 템플릿 객체로 정의할 수 있습니다.</p>
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
<h4 id="문자열" tabindex="-1"><a class="header-anchor" href="#문자열" aria-hidden="true">#</a> 문자열</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Next.js"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>title<span class="token operator">></span>Next<span class="token punctuation">.</span>js<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="템플릿-객체" tabindex="-1"><a class="header-anchor" href="#템플릿-객체" aria-hidden="true">#</a> 템플릿 객체</h4>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Metadata <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> metadata<span class="token operator">:</span> Metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token punctuation">{</span>
    template<span class="token operator">:</span> <span class="token string">"..."</span><span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">"..."</span><span class="token punctuation">,</span>
    absolute<span class="token operator">:</span> <span class="token string">"..."</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>title.default은 제목을 정의하지 않은 하위 라우트 세그먼트에 대한 대체 제목을 제공하는 데 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> Metadata <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">metadata</span><span class="token operator">:</span> Metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">"Acme"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> Metadata <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">metadata</span><span class="token operator">:</span> Metadata <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 출력: &lt;title>Acme&lt;/title></span>
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
<p><code v-pre>title.template</code>은 자식 라우트 세그먼트에서 정의된 제목에 접두사 또는 접미사를 추가하는 데 사용할 수 있어요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Metadata <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> metadata<span class="token operator">:</span> Metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token punctuation">{</span>
    template<span class="token operator">:</span> <span class="token string">"%s | Acme"</span><span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">"Acme"</span><span class="token punctuation">,</span> <span class="token comment">// 템플릿을 생성할 때 기본 값이 필요해요</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Metadata <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> metadata<span class="token operator">:</span> Metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">"About"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 결과: &lt;title>About | Acme&lt;/title></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두면 좋아요:</p>
</blockquote>
<ul>
<li><code v-pre>title.template</code>은 자식 라우트 세그먼트에 적용되며, 선언하는 세그먼트에는 적용되지 않아요.</li>
<li><code v-pre>title.template</code>을 추가할 때는 반드시 <code v-pre>title.default</code>가 필요해요.</li>
<li>layout.js에 정의된 <code v-pre>title.template</code>은 같은 라우트 세그먼트의 page.js에 정의된 제목에는 적용되지 않아요.</li>
<li>page.js에 정의된 <code v-pre>title.template</code>은 페이지가 항상 종단 세그먼트이기 때문에 효과가 없어요(자식 라우트 세그먼트가 없어요).</li>
<li>라우트가 제목 또는 <code v-pre>title.default</code>를 정의하지 않은 경우 <code v-pre>title.template</code>은 효과가 없어요.</li>
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
<p>title.absolute은 부모 세그먼트에서 설정한 title.template을 무시하는 제목을 제공하는 데 사용할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Metadata <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> metadata<span class="token operator">:</span> Metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token punctuation">{</span>
    template<span class="token operator">:</span> <span class="token string">"%s | Acme"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Metadata <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> metadata<span class="token operator">:</span> Metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token punctuation">{</span>
    absolute<span class="token operator">:</span> <span class="token string">"About"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 출력: &lt;title>About&lt;/title></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두면 좋은 사항:
layout.js
title (문자열)과 title.default는 자체 제목을 정의하지 않는 하위 세그먼트에 대한 기본 제목을 정의합니다. 가장 가까운 부모 세그먼트의 title.template을 새롭게 보완합니다.
title.absolute는 하위 세그먼트를 위해 기본 제목을 정의합니다. 부모 세그먼트의 title.template을 무시합니다.
title.template은 자식 세그먼트를 위한 새로운 제목 템플릿을 정의합니다.
page.js
페이지가 자체 제목을 정의하지 않는 경우, 가장 가까운 부모가 해결한 제목이 사용됩니다.
title (문자열)은 경로의 제목을 정의합니다. 가장 가까운 부모 세그먼트의 title.template을 새롭게 보완합니다.
title.absolute는 경로의 제목을 정의합니다. 부모 세그먼트의 title.template을 무시합니다.
title.template은 페이지가 항상 경로의 종단 세그먼트이기 때문에 page.js에서 효과가 없습니다.</p>
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
<h3 id="설명" tabindex="-1"><a class="header-anchor" href="#설명" aria-hidden="true">#</a> 설명</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"웹을 위한 리액트 프레임워크"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"description"</span> content<span class="token operator">=</span><span class="token string">"웹을 위한 리액트 프레임워크"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="기본-필드" tabindex="-1"><a class="header-anchor" href="#기본-필드" aria-hidden="true">#</a> 기본 필드</h3>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>수출 대상 metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token string">'Next.js'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">applicationName</span><span class="token operator">:</span> <span class="token string">'Next.js'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">referrer</span><span class="token operator">:</span> <span class="token string">'origin-when-cross-origin'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">keywords</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Next.js'</span><span class="token punctuation">,</span> <span class="token string">'React'</span><span class="token punctuation">,</span> <span class="token string">'JavaScript'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">authors</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Seb'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Josh'</span><span class="token punctuation">,</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://nextjs.org'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">creator</span><span class="token operator">:</span> <span class="token string">'Jiachi Liu'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">publisher</span><span class="token operator">:</span> <span class="token string">'Sebastian Markbåge'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">formatDetection</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">telephone</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"application-name"</span> content<span class="token operator">=</span><span class="token string">"Next.js"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"author"</span> content<span class="token operator">=</span><span class="token string">"Seb"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"author"</span> href<span class="token operator">=</span><span class="token string">"https://nextjs.org"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"author"</span> content<span class="token operator">=</span><span class="token string">"Josh"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"generator"</span> content<span class="token operator">=</span><span class="token string">"Next.js"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"keywords"</span> content<span class="token operator">=</span><span class="token string">"Next.js,React,JavaScript"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"referrer"</span> content<span class="token operator">=</span><span class="token string">"origin-when-cross-origin"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"color-scheme"</span> content<span class="token operator">=</span><span class="token string">"dark"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"creator"</span> content<span class="token operator">=</span><span class="token string">"Jiachi Liu"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"publisher"</span> content<span class="token operator">=</span><span class="token string">"Sebastian Markbåge"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"format-detection"</span> content<span class="token operator">=</span><span class="token string">"telephone=no, address=no, email=no"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="metadatabase" tabindex="-1"><a class="header-anchor" href="#metadatabase" aria-hidden="true">#</a> metadataBase</h3>
<p>metadataBase은 완전히 정규화된 URL이 필요한 metadata 필드를 위한 기본 URL 접두어를 설정하는 편의 옵션입니다.</p>
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
<li>metadataBase는 현재 route 세그먼트 및 그 아래에서 정의된 URL 기반 메타데이터 필드를, 필수적인 절대 URL 대신 상대 경로를 사용할 수 있도록 합니다.</li>
<li>필드의 상대 경로는 metadataBase와 결합되어 완전한 URL을 형성합니다.</li>
<li>구성되지 않은 경우, metadataBase는 자동으로 기본값으로 채워집니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">metadataBase</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">"https://acme.com"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">alternates</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">canonical</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">languages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"en-US"</span><span class="token operator">:</span> <span class="token string">"/en-US"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"de-DE"</span><span class="token operator">:</span> <span class="token string">"/de-DE"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">openGraph</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">images</span><span class="token operator">:</span> <span class="token string">"/og-image.png"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"canonical"</span> href<span class="token operator">=</span><span class="token string">"https://acme.com"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"alternate"</span> hreflang<span class="token operator">=</span><span class="token string">"en-US"</span> href<span class="token operator">=</span><span class="token string">"https://acme.com/en-US"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"alternate"</span> hreflang<span class="token operator">=</span><span class="token string">"de-DE"</span> href<span class="token operator">=</span><span class="token string">"https://acme.com/de-DE"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"og:image"</span> content<span class="token operator">=</span><span class="token string">"https://acme.com/og-image.png"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아 두면 좋은 사항:
metadataBase는 일반적으로 루트 앱/layout.js에서 설정되어 모든 route에 걸쳐 URL 기반 메타데이터 필드에 적용됩니다.
절대 URL이 필요한 모든 URL 기반 메타데이터 필드는 metadataBase 옵션으로 구성할 수 있습니다.
metadataBase에는 서브도메인(예: https://app.acme.com) 또는 베이스 경로(예: https://acme.com/start/from/here)를 포함시킬 수 있습니다.
메타데이터 필드가 절대 URL을 제공하는 경우, metadataBase는 무시됩니다.
metadataBase를 구성하지 않고 URL 기반 메타데이터 필드에서 상대 경로를 사용하는 경우 빌드 오류가 발생할 수 있습니다.
Next.js는 metadataBase(예: https://acme.com/)와 상대 필드(예: /path) 사이의 중복 슬래시를 단일 슬래시(예: https://acme.com/path)로 정규화합니다.</p>
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
<h4 id="기본값" tabindex="-1"><a class="header-anchor" href="#기본값" aria-hidden="true">#</a> 기본값</h4>
<p>만약 설정이 되어있지 않다면, metadataBase에는 기본값이 있습니다.</p>
<ul>
<li>만약 VERCEL_URL이 감지된다면: https://${process.env.VERCEL_URL} 그렇지 않으면 http://localhost:${process.env.PORT || 3000}로 떨어집니다.</li>
<li>기본값을 무시할 때는, URL을 계산하기 위해 환경 변수를 사용하는 것을 권장합니다. 이는 로컬 개발, 스테이징, 그리고 프로덕션 환경에 대한 URL을 구성할 수 있도록 합니다.</li>
</ul>
<h4 id="url-구성" tabindex="-1"><a class="header-anchor" href="#url-구성" aria-hidden="true">#</a> URL 구성</h4>
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
<p>URL 구성은 기본 디렉터리 이동 의미보다 개발자 의도를 우선합니다.</p>
<ul>
<li>metadataBase와 metadata 필드 사이에 슬래시가 있는 경우 정규화됩니다.</li>
<li>metadata 필드에서 &quot;절대&quot; 경로(일반적으로 전체 URL 경로를 대체하는 위치)는 &quot;상대&quot; 경로(메타데이터베이스 끝에서 시작)로 처리됩니다.</li>
</ul>
<p>예를 들어, 다음 metadataBase가 제공된 경우:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Metadata <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> metadata<span class="token operator">:</span> Metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  metadataBase<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">"https://acme.com"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<p>위의 metadataBase를 상속하고 자체 값을 설정하는 모든 메타데이터 필드는 다음과 같이 해결됩니다:</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> metadata 필드                     </span><span class="token punctuation">|</span><span class="token table-header important"> 해결된 URL                       </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">---------------------------------</span> <span class="token punctuation">|</span> <span class="token punctuation">--------------------------------</span> <span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> <span class="token code-snippet code keyword">`/`</span>                               </span><span class="token punctuation">|</span><span class="token table-data"> <span class="token code-snippet code keyword">`https://acme.com`</span>               </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> <span class="token code-snippet code keyword">`./`</span>                              </span><span class="token punctuation">|</span><span class="token table-data"> <span class="token code-snippet code keyword">`https://acme.com`</span>               </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> <span class="token code-snippet code keyword">`payments`</span>                        </span><span class="token punctuation">|</span><span class="token table-data"> <span class="token code-snippet code keyword">`https://acme.com/payments`</span>      </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> <span class="token code-snippet code keyword">`/payments`</span>                       </span><span class="token punctuation">|</span><span class="token table-data"> <span class="token code-snippet code keyword">`https://acme.com/payments`</span>      </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> <span class="token code-snippet code keyword">`./payments`</span>                      </span><span class="token punctuation">|</span><span class="token table-data"> <span class="token code-snippet code keyword">`https://acme.com/payments`</span>      </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> <span class="token code-snippet code keyword">`../payments`</span>                     </span><span class="token punctuation">|</span><span class="token table-data"> <span class="token code-snippet code keyword">`https://acme.com/payments`</span>      </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> <span class="token code-snippet code keyword">`https://beata.acme.com/payments`</span> </span><span class="token punctuation">|</span><span class="token table-data"> <span class="token code-snippet code keyword">`https://beta.acme.com/payments`</span> </span><span class="token punctuation">|</span>
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="opengraph" tabindex="-1"><a class="header-anchor" href="#opengraph" aria-hidden="true">#</a> openGraph</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">openGraph</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Next.js"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"웹을 위한 리액트 프레임워크"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://nextjs.org"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">siteName</span><span class="token operator">:</span> <span class="token string">"Next.js"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">images</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://nextjs.org/og.png"</span><span class="token punctuation">,</span> <span class="token comment">// 반드시 절대 URL이어야 함</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://nextjs.org/og-alt.png"</span><span class="token punctuation">,</span> <span class="token comment">// 반드시 절대 URL이어야 함</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1800</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1600</span><span class="token punctuation">,</span>
        <span class="token literal-property property">alt</span><span class="token operator">:</span> <span class="token string">"내 맞춤 alt"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token string">"en_US"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"웹사이트"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">--</span><span class="token operator">-</span>
<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Next.js"</span>
<span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"웹을 위한 React 프레임워크"</span>
<span class="token operator">--</span><span class="token operator">-</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">openGraph</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Next.js"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"웹을 위한 React 프레임워크"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"article"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">publishedTime</span><span class="token operator">:</span> <span class="token string">"2023-01-01T00:00:00.000Z"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">authors</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Seb"</span><span class="token punctuation">,</span> <span class="token string">"Josh"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"og:title"</span> content<span class="token operator">=</span><span class="token string">"Next.js"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"og:description"</span> content<span class="token operator">=</span><span class="token string">"웹을 위한 React 프레임워크"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"og:type"</span> content<span class="token operator">=</span><span class="token string">"article"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"article:published_time"</span> content<span class="token operator">=</span><span class="token string">"2023-01-01T00:00:00.000Z"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"article:author"</span> content<span class="token operator">=</span><span class="token string">"Seb"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"article:author"</span> content<span class="token operator">=</span><span class="token string">"Josh"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두면 좋아요:<br>
Open Graph 이미지를 위한 파일 기반 메타데이터 API를 사용하는 것이 더 편리할 수 있습니다. 설정 내보내기와 실제 파일을 동기화하는 대신 파일 기반 API를 사용하면 자동으로 올바른 메타데이터가 생성됩니다.</p>
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
<h3 id="로봇" tabindex="-1"><a class="header-anchor" href="#로봇" aria-hidden="true">#</a> 로봇</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> Metadata <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">metadata</span><span class="token operator">:</span> Metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">robots</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">follow</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">nocache</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">googleBot</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">follow</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">noimageindex</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">"max-video-preview"</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token string-property property">"max-image-preview"</span><span class="token operator">:</span> <span class="token string">"large"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"max-snippet"</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"robots"</span> content<span class="token operator">=</span><span class="token string">"noindex, follow, nocache"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta
  name<span class="token operator">=</span><span class="token string">"googlebot"</span>
  content<span class="token operator">=</span><span class="token string">"index, nofollow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1"</span>
<span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="아이콘" tabindex="-1"><a class="header-anchor" href="#아이콘" aria-hidden="true">#</a> 아이콘</h3>
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
<p>참고로: 가능한 경우 아이콘에 대한 파일 기반 Metadata API를 사용하는 것을 권장합니다. 실제 파일을 구성 내보내기와 동기화해야 하는 부담을 덜기 위해 파일 기반 API는 자동으로 올바른 메타데이터를 생성해 줍니다.</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">icons</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"/icon.png"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">shortcut</span><span class="token operator">:</span> <span class="token string">"/shortcut-icon.png"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">apple</span><span class="token operator">:</span> <span class="token string">"/apple-icon.png"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">other</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">"apple-touch-icon-precomposed"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"/apple-touch-icon-precomposed.png"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"shortcut icon"</span> href<span class="token operator">=</span><span class="token string">"/shortcut-icon.png"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"icon"</span> href<span class="token operator">=</span><span class="token string">"/icon.png"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"apple-touch-icon"</span> href<span class="token operator">=</span><span class="token string">"/apple-icon.png"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link
  rel<span class="token operator">=</span><span class="token string">"apple-touch-icon-precomposed"</span>
  href<span class="token operator">=</span><span class="token string">"/apple-touch-icon-precomposed.png"</span>
<span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">icons</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"/icon.png"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">"/icon.png"</span><span class="token punctuation">,</span> <span class="token string">"https://example.com"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"/icon-dark.png"</span><span class="token punctuation">,</span> <span class="token literal-property property">media</span><span class="token operator">:</span> <span class="token string">"(prefers-color-scheme: dark)"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">shortcut</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"/shortcut-icon.png"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">apple</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"/apple-icon.png"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"/apple-icon-x3.png"</span><span class="token punctuation">,</span> <span class="token literal-property property">sizes</span><span class="token operator">:</span> <span class="token string">"180x180"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"image/png"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">other</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">"apple-touch-icon-precomposed"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"/apple-touch-icon-precomposed.png"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"shortcut icon"</span> href<span class="token operator">=</span><span class="token string">"/shortcut-icon.png"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"icon"</span> href<span class="token operator">=</span><span class="token string">"/icon.png"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"icon"</span> href<span class="token operator">=</span><span class="token string">"https://example.com/icon.png"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"icon"</span> href<span class="token operator">=</span><span class="token string">"/icon-dark.png"</span> media<span class="token operator">=</span><span class="token string">"(prefers-color-scheme: dark)"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"apple-touch-icon"</span> href<span class="token operator">=</span><span class="token string">"/apple-icon.png"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link
  rel<span class="token operator">=</span><span class="token string">"apple-touch-icon-precomposed"</span>
  href<span class="token operator">=</span><span class="token string">"/apple-touch-icon-precomposed.png"</span>
<span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link
  rel<span class="token operator">=</span><span class="token string">"apple-touch-icon"</span>
  href<span class="token operator">=</span><span class="token string">"/apple-icon-x3.png"</span>
  sizes<span class="token operator">=</span><span class="token string">"180x180"</span>
  type<span class="token operator">=</span><span class="token string">"image/png"</span>
<span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>좋은 정보: Microsoft Edge의 Chromium 빌드에서는 더 이상 msapplication-* 메타 태그가 지원되지 않으며 더 이상 필요하지 않습니다.</p>
</blockquote>
<h3 id="테마-색상" tabindex="-1"><a class="header-anchor" href="#테마-색상" aria-hidden="true">#</a> 테마 색상</h3>
<blockquote>
<p>사용 중단: Next.js 14에서 메타데이터의 themeColor 옵션은 사용 중단되었습니다. 대신 viewport 구성을 사용하십시오.```</p>
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
<h3 id="manifest" tabindex="-1"><a class="header-anchor" href="#manifest" aria-hidden="true">#</a> manifest</h3>
<p>Web Application Manifest는 Web Application Manifest 사양에서 정의됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">manifest</span><span class="token operator">:</span> <span class="token string">"https://nextjs.org/manifest.json"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"manifest"</span> href<span class="token operator">=</span><span class="token string">"https://nextjs.org/manifest.json"</span> <span class="token operator">/</span><span class="token operator">></span>
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
<h3 id="트위터" tabindex="-1"><a class="header-anchor" href="#트위터" aria-hidden="true">#</a> 트위터</h3>
<p>트위터 사양은 (놀랍게도) X(이전에는 트위터로 알려졌음) 이외의 것에도 사용됩니다.</p>
<p>트위터 카드 마크업 참조에 대해 자세히 알아보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">twitter</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">card</span><span class="token operator">:</span> <span class="token string">"summary_large_image"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Next.js"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"웹을 위한 리액트 프레임워크"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">siteId</span><span class="token operator">:</span> <span class="token string">"1467726470533754880"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">creator</span><span class="token operator">:</span> <span class="token string">"@nextjs"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">creatorId</span><span class="token operator">:</span> <span class="token string">"1467726470533754880"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">images</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"https://nextjs.org/og.png"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 반드시 절대 URL이어야 합니다</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter:card<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>summary_large_image<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter:site:id<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1467726470533754880<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter:creator<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@nextjs<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter:creator:id<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1467726470533754880<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter:title<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Next.js<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter:description<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>The React Framework for the Web<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter:image<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://nextjs.org/og.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>export const metadata = {
twitter: {
card: 'app',
title: 'Next.js',
description: 'The React Framework for the Web',
siteId: '1467726470533754880',
creator: '@nextjs',
creatorId: '1467726470533754880',
images: {
url: 'https://nextjs.org/og.png',
alt: 'Next.js Logo',
},
app: {
name: 'twitter_app',
id: {
iphone: 'twitter_app://iphone',
ipad: 'twitter_app://ipad',
googleplay: 'twitter_app://googleplay',
},
url: {
iphone: 'https://iphone_url',
ipad: 'https://ipad_url',
},
},
},
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter:site:id<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1467726470533754880<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter:creator<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@nextjs<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter:creator:id<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1467726470533754880<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter:title<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Next.js<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter:description<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>The React Framework for the Web<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter:card<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter:image<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://nextjs.org/og.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter:image:alt<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Next.js Logo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter:app:name:iphone<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter_app<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter:app:id:iphone<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter_app://iphone<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter:app:id:ipad<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter_app://ipad<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter:app:id:googleplay<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter_app://googleplay<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter:app:url:iphone<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://iphone_url<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter:app:url:ipad<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://ipad_url<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter:app:name:ipad<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter_app<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter:app:name:googleplay<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>twitter_app<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="viewport" tabindex="-1"><a class="header-anchor" href="#viewport" aria-hidden="true">#</a> viewport</h3>
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
<p><strong>Deprecated:</strong> Next.js 14부터 metadata의 viewport 옵션이 사용되지 않습니다. 대신 viewport 구성을 사용해주세요.</p>
</blockquote>
<h3 id="검증" tabindex="-1"><a class="header-anchor" href="#검증" aria-hidden="true">#</a> 검증</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">verification</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">google</span><span class="token operator">:</span> <span class="token string">"google"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">yandex</span><span class="token operator">:</span> <span class="token string">"yandex"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">yahoo</span><span class="token operator">:</span> <span class="token string">"yahoo"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">other</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">me</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"my-email"</span><span class="token punctuation">,</span> <span class="token string">"my-link"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"google-site-verification"</span> content<span class="token operator">=</span><span class="token string">"google"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"y_key"</span> content<span class="token operator">=</span><span class="token string">"yahoo"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"yandex-verification"</span> content<span class="token operator">=</span><span class="token string">"yandex"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"me"</span> content<span class="token operator">=</span><span class="token string">"my-email"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"me"</span> content<span class="token operator">=</span><span class="token string">"my-link"</span> <span class="token operator">/</span><span class="token operator">></span>
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
<h3 id="applewebapp" tabindex="-1"><a class="header-anchor" href="#applewebapp" aria-hidden="true">#</a> appleWebApp</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">itunes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">"myAppStoreID"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">appArgument</span><span class="token operator">:</span> <span class="token string">"myAppArgument"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">appleWebApp</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Apple 웹 앱"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">statusBarStyle</span><span class="token operator">:</span> <span class="token string">"black-translucent"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">startupImage</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"/assets/startup/apple-touch-startup-image-768x1004.png"</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"/assets/startup/apple-touch-startup-image-1536x2008.png"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">media</span><span class="token operator">:</span> <span class="token string">"(device-width: 768px) and (device-height: 1024px)"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>meta
  name<span class="token operator">=</span><span class="token string">"apple-itunes-app"</span>
  content<span class="token operator">=</span><span class="token string">"app-id=myAppStoreID, app-argument=myAppArgument"</span>
<span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"apple-mobile-web-app-capable"</span> content<span class="token operator">=</span><span class="token string">"yes"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"apple-mobile-web-app-title"</span> content<span class="token operator">=</span><span class="token string">"Apple 웹 앱"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link
  href<span class="token operator">=</span><span class="token string">"/assets/startup/apple-touch-startup-image-768x1004.png"</span>
  rel<span class="token operator">=</span><span class="token string">"apple-touch-startup-image"</span>
<span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link
  href<span class="token operator">=</span><span class="token string">"/assets/startup/apple-touch-startup-image-1536x2008.png"</span>
  media<span class="token operator">=</span><span class="token string">"(device-width: 768px) and (device-height: 1024px)"</span>
  rel<span class="token operator">=</span><span class="token string">"apple-touch-startup-image"</span>
<span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta
  name<span class="token operator">=</span><span class="token string">"apple-mobile-web-app-status-bar-style"</span>
  content<span class="token operator">=</span><span class="token string">"black-translucent"</span>
<span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="alternates" tabindex="-1"><a class="header-anchor" href="#alternates" aria-hidden="true">#</a> alternates</h3>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">alternates</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">canonical</span><span class="token operator">:</span> <span class="token string">"https://nextjs.org"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">languages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"en-US"</span><span class="token operator">:</span> <span class="token string">"https://nextjs.org/en-US"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"de-DE"</span><span class="token operator">:</span> <span class="token string">"https://nextjs.org/de-DE"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">media</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"only screen and (max-width: 600px)"</span><span class="token operator">:</span> <span class="token string">"https://nextjs.org/mobile"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">types</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"application/rss+xml"</span><span class="token operator">:</span> <span class="token string">"https://nextjs.org/rss"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"canonical"</span> href<span class="token operator">=</span><span class="token string">"https://nextjs.org"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"alternate"</span> hreflang<span class="token operator">=</span><span class="token string">"en-US"</span> href<span class="token operator">=</span><span class="token string">"https://nextjs.org/en-US"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"alternate"</span> hreflang<span class="token operator">=</span><span class="token string">"de-DE"</span> href<span class="token operator">=</span><span class="token string">"https://nextjs.org/de-DE"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link
  rel<span class="token operator">=</span><span class="token string">"alternate"</span>
  media<span class="token operator">=</span><span class="token string">"only screen and (max-width: 600px)"</span>
  href<span class="token operator">=</span><span class="token string">"https://nextjs.org/mobile"</span>
<span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link
  rel<span class="token operator">=</span><span class="token string">"alternate"</span>
  type<span class="token operator">=</span><span class="token string">"application/rss+xml"</span>
  href<span class="token operator">=</span><span class="token string">"https://nextjs.org/rss"</span>
<span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="앱-링크" tabindex="-1"><a class="header-anchor" href="#앱-링크" aria-hidden="true">#</a> 앱 링크</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">appLinks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ios</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://nextjs.org/ios"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">app_store_id</span><span class="token operator">:</span> <span class="token string">"app_store_id"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">android</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">package</span><span class="token operator">:</span> <span class="token string">"com.example.android/package"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">app_name</span><span class="token operator">:</span> <span class="token string">"app_name_android"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">web</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://nextjs.org/web"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">should_fallback</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">###</span> 아카이브</span>

아카이브는 역사적 흥미를 끌 수 있는 레코드, 문서 또는 다른 자료의 모음을 설명합니다.

<span class="token code"><span class="token punctuation">```</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">archives</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"https://nextjs.org/13"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="token punctuation">```</span></span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"archives"</span> href<span class="token operator">=</span><span class="token string">"https://nextjs.org/13"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="자산" tabindex="-1"><a class="header-anchor" href="#자산" aria-hidden="true">#</a> 자산</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">assets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"https://nextjs.org/assets"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"assets"</span> href<span class="token operator">=</span><span class="token string">"https://nextjs.org/assets"</span> <span class="token operator">/</span><span class="token operator">></span>
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
<h3 id="북마크" tabindex="-1"><a class="header-anchor" href="#북마크" aria-hidden="true">#</a> 북마크</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">bookmarks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"https://nextjs.org/13"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"bookmarks"</span> href<span class="token operator">=</span><span class="token string">"https://nextjs.org/13"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="카테고리" tabindex="-1"><a class="header-anchor" href="#카테고리" aria-hidden="true">#</a> 카테고리</h3>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">"technology"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"category"</span> content<span class="token operator">=</span><span class="token string">"technology"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="기타" tabindex="-1"><a class="header-anchor" href="#기타" aria-hidden="true">#</a> 기타</h3>
<p>내장 지원을 사용하여 모든 메타데이터 옵션을 다루어야 합니다. 그러나 사이트에 특정한 사용자 정의 메타데이터 태그나 새로 출시된 브랜드 메타데이터 태그가 있을 수 있습니다. 다른 옵션을 사용하여 사용자 정의 메타데이터 태그를 렌더링할 수 있습니다.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">other</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">custom</span><span class="token operator">:</span> <span class="token string">"meta"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"custom"</span> content<span class="token operator">=</span><span class="token string">"meta"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>동일한 키 메타 태그를 여러 개 생성하려면 배열 값을 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">other</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">custom</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"meta1"</span><span class="token punctuation">,</span> <span class="token string">"meta2"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"custom"</span> content<span class="token operator">=</span><span class="token string">"meta1"</span> <span class="token operator">/</span><span class="token operator">></span> <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"custom"</span> content<span class="token operator">=</span><span class="token string">"meta2"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="지원되지-않는-메타데이터" tabindex="-1"><a class="header-anchor" href="#지원되지-않는-메타데이터" aria-hidden="true">#</a> 지원되지 않는 메타데이터</h2>
<p>다음 메타데이터 유형은 현재 내장 지원이 없습니다. 그러나 레이아웃이나 페이지 자체에서 렌더링할 수 있습니다.</p>
<table>
<thead>
<tr>
<th>Metadata</th>
<th>Recommendation</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>&lt;meta http-equiv=&quot;...&quot;&gt;</code></td>
<td><a href="/docs/app/api-reference/functions/redirect"><code v-pre>redirect()</code></a>, <a href="/docs/app/building-your-application/routing/middleware#nextresponse"><code v-pre>Middleware</code></a>, <a href="/docs/app/api-reference/next-config-js/headers"><code v-pre>Security Headers</code></a></td>
</tr>
<tr>
<td><code v-pre>&lt;base&gt;</code></td>
<td>레이아웃이나 페이지 자체에 태그를 렌더링하세요.</td>
</tr>
<tr>
<td><code v-pre>&lt;noscript&gt;</code></td>
<td>레이아웃이나 페이지 자체에 태그를 렌더링하세요.</td>
</tr>
<tr>
<td><code v-pre>&lt;style&gt;</code></td>
<td>자세한 내용은 <a href="/docs/app/building-your-application/styling/css-modules"><code v-pre>Next.js에서 스타일링하는 방법</code></a>을 확인하세요.</td>
</tr>
<tr>
<td><code v-pre>&lt;script&gt;</code></td>
<td>자세한 내용은 <a href="/docs/app/building-your-application/optimizing/scripts"><code v-pre>스크립트 사용 방법</code></a>을 확인하세요.</td>
</tr>
<tr>
<td><code v-pre>&lt;link rel=&quot;stylesheet&quot; /&gt;</code></td>
<td>스타일시트를 직접 레이아웃이나 페이지에 <code v-pre>import</code>하세요.</td>
</tr>
<tr>
<td><code v-pre>&lt;link rel=&quot;preload /&gt;</code></td>
<td><a href="#link-relpreload"><code v-pre>ReactDOM preload method</code></a>을 사용하세요.</td>
</tr>
<tr>
<td><code v-pre>&lt;link rel=&quot;preconnect&quot; /&gt;</code></td>
<td><a href="#link-relpreconnect"><code v-pre>ReactDOM preconnect method</code></a>을 사용하세요.</td>
</tr>
<tr>
<td><code v-pre>&lt;link rel=&quot;dns-prefetch&quot; /&gt;</code></td>
<td><a href="#link-reldns-prefetch"><code v-pre>ReactDOM prefetchDNS method</code></a>을 사용하세요.</td>
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
<h3 id="리소스-힌트" tabindex="-1"><a class="header-anchor" href="#리소스-힌트" aria-hidden="true">#</a> 리소스 힌트</h3>
<p><code v-pre>link</code> 요소에는 브라우저에게 외부 리소스가 필요할 가능성이 있다는 힌트를 제공하는 데 사용할 수 있는 여러 가지 rel 키워드가 있습니다. 브라우저는 이 정보를 사용하여 키워드에 따라 사전로드 최적화를 적용합니다.</p>
<p>Metadata API는 이러한 힌트를 직접 지원하지 않지만, 새로운 ReactDOM 메서드를 사용하여 이러한 힌트를 안전하게 문서의 <code v-pre>head</code>에 삽입할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">"react-dom"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">PreloadResources</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ReactDOM<span class="token punctuation">.</span><span class="token function">preload</span><span class="token punctuation">(</span><span class="token string">"..."</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">as</span><span class="token operator">:</span> <span class="token string">"..."</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ReactDOM<span class="token punctuation">.</span><span class="token function">preconnect</span><span class="token punctuation">(</span><span class="token string">"..."</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> crossOrigin<span class="token operator">:</span> <span class="token string">"..."</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ReactDOM<span class="token punctuation">.</span><span class="token function">prefetchDNS</span><span class="token punctuation">(</span><span class="token string">"..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
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
<p>페이지 렌더링(브라우저) 라이프사이클 중에 리소스를 미리 로드하기 시작하세요. MDN 문서</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">preload</span><span class="token punctuation">(</span>href<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">as</span><span class="token operator">:</span> string <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"preload"</span> href<span class="token operator">=</span><span class="token string">"..."</span> <span class="token keyword">as</span><span class="token operator">=</span><span class="token string">"..."</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>사전에 출발점으로의 연결을 초기화하세요. MDN 문서</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">preconnect</span><span class="token punctuation">(</span>href<span class="token operator">:</span> string<span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> crossOrigin<span class="token operator">?</span><span class="token operator">:</span> string <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"preconnect"</span> href<span class="token operator">=</span><span class="token string">"..."</span> crossorigin <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>리소스를 요청하기 전에 도메인 이름을 먼저 해결하려는 시도입니다. MDN 문서</p>
<p>.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">prefetchDNS</span><span class="token punctuation">(</span>href<span class="token operator">:</span> string<span class="token punctuation">)</span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"dns-prefetch"</span> href<span class="token operator">=</span><span class="token string">"..."</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>좋은 정보:
현재 이러한 방법은 초기 페이지 로드시 서버 측 렌더링된 클라이언트 구성 요소에서만 지원됩니다.
Next.js의 내장 기능인 next/font, next/image 및 next/script는 관련 리소스 힌트를 자동으로 처리합니다.
React 18.3에는 아직 ReactDOM.preload, ReactDOM.preconnect 및 ReactDOM.preconnectDNS에 대한 유형 정의가 포함되어 있지 않습니다. 임시적인 해결책으로 타입 오류를 피하기 위해 // @ts-ignore를 사용할 수 있습니다.</p>
</blockquote>
<h2 id="유형" tabindex="-1"><a class="header-anchor" href="#유형" aria-hidden="true">#</a> 유형</h2>
<p>메타데이터에 유형 안전성을 추가할 수 있습니다. IDE에 내장된 TypeScript 플러그인을 사용하는 경우 유형을 수동으로 추가할 필요가 없지만 원하는 경우 여전히 명시적으로 추가할 수 있습니다.</p>
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
<h3 id="metadata-object" tabindex="-1"><a class="header-anchor" href="#metadata-object" aria-hidden="true">#</a> metadata object</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> Metadata <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">metadata</span><span class="token operator">:</span> Metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Next.js"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="generatemetadata-function" tabindex="-1"><a class="header-anchor" href="#generatemetadata-function" aria-hidden="true">#</a> generateMetadata function</h3>
<h4 id="regular-function" tabindex="-1"><a class="header-anchor" href="#regular-function" aria-hidden="true">#</a> Regular function</h4>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> Metadata <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token comment">// Metadata 생성 함수</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">generateMetadata</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Metadata <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Next.js"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="비동기-함수" tabindex="-1"><a class="header-anchor" href="#비동기-함수" aria-hidden="true">#</a> 비동기 함수</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> Metadata <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token comment">// 비동기로 Metadata 생성하는 함수</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">generateMetadata</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span>Metadata<span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Next.js"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="세그먼트-속성과-함께" tabindex="-1"><a class="header-anchor" href="#세그먼트-속성과-함께" aria-hidden="true">#</a> 세그먼트 속성과 함께</h4>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> Metadata <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next'</span>

type Props <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> string <span class="token punctuation">}</span>
  <span class="token literal-property property">searchParams</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> string <span class="token operator">|</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">generateMetadata</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params<span class="token punctuation">,</span> searchParams <span class="token punctuation">}</span><span class="token operator">:</span> Props</span><span class="token punctuation">)</span><span class="token operator">:</span> Metadata <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Next.js'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params<span class="token punctuation">,</span> searchParams <span class="token punctuation">}</span><span class="token operator">:</span> Props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="부모-메타데이터를-사용하는-경우" tabindex="-1"><a class="header-anchor" href="#부모-메타데이터를-사용하는-경우" aria-hidden="true">#</a> 부모 메타데이터를 사용하는 경우</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> Metadata<span class="token punctuation">,</span> ResolvingMetadata <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">generateMetadata</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params<span class="token punctuation">,</span> searchParams <span class="token punctuation">}</span><span class="token operator">:</span> Props<span class="token punctuation">,</span> <span class="token literal-property property">parent</span><span class="token operator">:</span> ResolvingMetadata</span><span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span>Metadata<span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Next.js"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="javascript-프로젝트들" tabindex="-1"><a class="header-anchor" href="#javascript-프로젝트들" aria-hidden="true">#</a> JavaScript 프로젝트들```</h4>
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
<p>JavaScript 프로젝트에서는 JSDoc을 사용하여 타입 안전성을 추가할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"next"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Metadata<span class="token punctuation">}</span></span> */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Next.js"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="버전-내역" tabindex="-1"><a class="header-anchor" href="#버전-내역" aria-hidden="true">#</a> 버전 내역</h2>
<table>
<thead>
<tr>
<th>Version</th>
<th>변경 내용</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v13.2.0</code></td>
<td><code v-pre>viewport</code>, <code v-pre>themeColor</code>, 그리고 <code v-pre>colorScheme</code>이 <code v-pre>&lt;code&gt;viewport&lt;/code&gt; 구성</code>을 위해 폐기되었습니다.</td>
</tr>
<tr>
<td><code v-pre>v13.2.0</code></td>
<td><code v-pre>metadata</code>와 <code v-pre>generateMetadata</code>가 도입되었습니다.</td>
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
