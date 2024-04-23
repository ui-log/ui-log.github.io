<template><div><p>Next.js에서 앱을 구축 중입니다. 예전 페이지 라우터에서 새로운 앱 라우터로 이전하고 html 스트리밍 및 서버 구성 요소를 활용하기로 결정했습니다. 이 글에서는 React 및 Next.js에서 Suspense 및 서버 구성 요소가 어떻게 작동하는지에 대해 자세히 다루지 않고, 대신 내 앱에서 경험한 실제 사용 사례에서 Suspense 및 서버 구성 요소를 사용하는 방법을 설명하고자 합니다.</p>
<h1 id="🧪-예제" tabindex="-1"><a class="header-anchor" href="#🧪-예제" aria-hidden="true">#</a> 🧪 예제</h1>
<p>내 애플리케이션에서 제품 목록을 렌더링하는 페이지가 있습니다. 이러한 제품은 SEO 및 성능 이유로 서버 측에서 렌더링되어야 합니다. 또한 페이지로의 클라이언트 측 탐색을 지원해야 합니다. 때로는 API가 느릴 수 있으므로 제품 목록에 대한 일부 로딩 상태가 필요합니다.</p>
<p>초기 로드 시 페이지는 모든 제품을 렌더링합니다:</p>
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
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*tZZB70LCPz1tEosJZ5KvOw.gif" alt="로딩 화면"></p>
<p>페이지가 로드되기 전에 빈 화면을 볼 수 있는데, 이 지연은 API에서 발생합니다. 대부분의 트래픽에 대해 CDN으로 캐싱되므로 프로덕션에서는 큰 문제가 되지 않습니다.</p>
<p>클라이언트 측 탐색 구성 요소에서 로딩 스켈레톤을 표시하세요:</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*BwCVlL9Xo5d7LTICOjsdzA.gif" alt="로딩 스켈레톤"></p>
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
<p>매우 간단한 시나리오입니다.</p>
<p>예시에서 코드는 다음과 같이 구성되어 있습니다:</p>
<p>2000초의 지연 시간으로 느린 API를 시뮬레이션하는 fetchProducts라는 간단한 함수가 있습니다.</p>
<p>다음과 같은 컴포넌트가 있습니다:</p>
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
<p>ProductCard은 제품을 렌더링합니다.</p>
<p>ProductList는 제품 목록을 속성으로 받아 수평 목록으로 ProductCard로 렌더링합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">ProductList</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> products <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">products</span><span class="token operator">:</span> Product<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>HStack width<span class="token operator">=</span><span class="token string">"full"</span> padding<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span> overflow<span class="token operator">=</span><span class="token string">"auto"</span> gap<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token punctuation">{</span>products<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">product</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>ProductCard key<span class="token operator">=</span><span class="token punctuation">{</span>product<span class="token punctuation">.</span>id<span class="token punctuation">}</span> product<span class="token operator">=</span><span class="token punctuation">{</span>product<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>HStack<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ProductListSkeleton 구성 요소는 로딩 상태의 ProductCard를 10개 렌더링합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">ProductListSkeleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>HStack width<span class="token operator">=</span><span class="token string">"full"</span> padding<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span> overflow<span class="token operator">=</span><span class="token string">"auto"</span> gap<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token punctuation">{</span>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>ProductCard key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>HStack<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ProductListWithEffect는 제품 목록을 허용하고 ProductList를 사용하여 렌더링할 수 있는 스마트 컴포넌트이며, 제품이 제공되지 않았을 경우 fetchProducts 함수를 사용하여 제품을 로드합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">ProductListWithEffect</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> products <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> products<span class="token operator">?</span><span class="token operator">:</span> Product<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>productsState<span class="token punctuation">,</span> setProductsState<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>Product<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">></span><span class="token punctuation">(</span>
    products
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>productsState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">fetchProducts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">products</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setProductsState</span><span class="token punctuation">(</span>products<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>productsState<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>productsState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>ProductListSkeleton <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ProductList products<span class="token operator">=</span><span class="token punctuation">{</span>productsState<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>페이지 라우터 코드와 데이터 로딩을 구현한 부분은 다음과 같습니다:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> products <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">products</span><span class="token operator">:</span> Product<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ChakraProvider<span class="token operator">></span>
      <span class="token operator">&lt;</span>Header <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Box width<span class="token operator">=</span><span class="token string">"full"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>ProductListWithEffect products<span class="token operator">=</span><span class="token punctuation">{</span>products<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Box<span class="token operator">></span>
      <span class="token operator">&lt;</span>Footer <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ChakraProvider<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getServerSideProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> products <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchProducts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      products<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="🥁-suspense를-활용한-데이터-로딩" tabindex="-1"><a class="header-anchor" href="#🥁-suspense를-활용한-데이터-로딩" aria-hidden="true">#</a> 🥁 Suspense를 활용한 데이터 로딩</h1>
<p>초안에서는 Suspense와 Next.js의 서버 컴포넌트를 사용하여 코드를 훨씬 간단한 방식으로 작성할 수 있습니다. 상태와 useEffect를 없애고 코드를 간소화할 수 있습니다.</p>
<p>앱 폴더에서는 페이지 로직을 간단히 작성할 수 있습니다:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> products <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchProducts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>ProductList products<span class="token operator">=</span><span class="token punctuation">{</span>products<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>하지만 이 접근 방식에 문제가 있습니다 🫤</p>
<p>이를 해결하기 위해 Suspense를 추가하거나 페이지를 위한 로딩 상태를 정의할 수 있습니다. 페이지의 로딩 상태를 작성하고 싶지 않아 컴포넌트가 로딩 중에 모양과 느낌을 제어하도록하려면 Suspense를 시도해 보겠습니다.</p>
<p>데이터를 로드하고 ProductList 컴포넌트와 함께 렌더링하는 새로운 컴포넌트 ProductListWithSuspense를 추가할 수 있습니다:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">ProductListWithSuspense</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> products <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchProducts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ProductList products<span class="token operator">=</span><span class="token punctuation">{</span>products<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 페이지에서 이 컴포넌트 주위에 Suspense를 사용하고 로딩 상태를 정의합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>ProductListSkeleton <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>ProductListWithSuspense <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>거의 완료되었습니다:</p>
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
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*pZFG5fgcpwbbmf1677H3Qw.gif" alt="이미지"></p>
<p>이 접근 방식에는 몇 가지 문제가 있어요:</p>
<ul>
<li>제품들은 정말 서버 측 렌더링이 아니에요! Html이 브라우저로 스트리밍되고 데이터가 빠르게 표시될 거예요 — 완전한 수화 이전에, 그래도 만약 페이지에서 자바스크립트를 비활성화하면 로딩 스켈레톤만 보이게 될 거예요. 사용 사례에 따라 문제가 될 수도 있고, 제 경우에는 페이지가 CDN에 의해 캐싱될 것을 알아요, 그럼 로딩 상태 없이 최종 결과물을 캐싱하는 게 어때요? 🤔</li>
<li>두 번째 문제는 페이지가 로딩 스켈레톤을 설정 중이라는 거에요, 이것은 웹 사이트의 다른 곳에서도 동일한 종류의 추가 작업을 해야 한다는 것을 의미해요.</li>
</ul>
<p>위 문제를 해결하기 위해 Suspense를 컴포넌트 트리 아래로 옮기고 조건부로 추가해보겠어요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">ProductListLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> products <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchProducts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ProductList products<span class="token operator">=</span><span class="token punctuation">{</span>products<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">ProductListWithSuspense</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
  products<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  products<span class="token operator">?</span><span class="token operator">:</span> Product<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>products<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>ProductList products<span class="token operator">=</span><span class="token punctuation">{</span>products<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>ProductListSkeleton <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>ProductListLoader <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>우리 페이지는 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> products <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchProducts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ProductListWithSuspense products<span class="token operator">=</span><span class="token punctuation">{</span>products<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 useEffect와 거의 동일한 로직을 가지고 있는 것을 볼 수 있습니다. 페이지에서 데이터를 미리 로드하고 ProductList를 렌더링하고 있지만, 페이지에서 데이터를 미리로드하지 않기로 결정한다면 컴포넌트 자체가 데이터를 로드할 수 있도록 충분히 똑똑합니다. 이 컴포넌트를 어떤 페이지에도 쉽게 삽입할 수 있고, 데이터를 로드하고 로딩 스켈레톤을 렌더링하는 부분을 담당할 것입니다.</p>
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
<p>근데, 하나 더 문제가 있어요. 페이지에 있는 코드는 초기 페이지 로드와 클라이언트 내비게이션 둘 다 실행돼요. 이것은 getServerSideProps와 비교했을 때 큰 차이점이에요. 이 문제가 왜 문제인지 아래에서 확인할 수 있어요:</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*_9TvDE9TRuiy773_S-VXEg.gif" alt="loading state"></p>
<p>클라이언트 측 내비게이션에서는 로딩 상태가 없어요 — 링크를 클릭하면 Next.js는 페이지가 렌더링될 때까지 기다렸다가 결과를 보여줘요. 물론 페이지에 로딩 상태를 추가해서 문제를 해결할 수 있겠지만, 처음에 말했듯이 페이지는 로딩 상태를 개별적으로 렌더링하도록 책임져야 하고 페이지 레이아웃을 두 번 구성하고 싶지 않아요.</p>
<p>페이지의 초기 로드와 클라이언트 측 내비게이션을 어떻게 처리해야 하는지 공식 문서를 찾을 수 없어서 시간이 걸렸어요.</p>
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
<p>서버 구성 요소에 대해 읽고 네트워크 트래픽을 검사하면서 클라이언트 측 탐색 중에 Next.js가 JSON 페이로드를 예상하고 서버에 요청을 하는 것을 깨달았어요 🥳</p>
<p>그래서 페이지 코드를 조건부로 데이터 사전로드를 업데이트하면 우리가 원하는 효과를 얻을 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token literal-property property">products</span><span class="token operator">:</span> Product<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>

  <span class="token comment">// 브라우저가 html을 요청하면 첫 페이지 로드라는 뜻</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"accept"</span><span class="token punctuation">)</span><span class="token operator">?.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">"text/html"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    products <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchProducts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ProductListWithSuspense products<span class="token operator">=</span><span class="token punctuation">{</span>products<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://miro.medium.com/v2/resize:fit:1400/1*cBschoCbpQzdKFTwA64KvA.gif" alt="이미지"></p>
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
<p>그래서, 이제 페이지 라우터와 useEffect와 같은 동작을 얻었어요 💪</p>
<h1 id="🤔-결론" tabindex="-1"><a class="header-anchor" href="#🤔-결론" aria-hidden="true">#</a> 🤔 결론</h1>
<p>사용자에게는 최종 결과가 동일하지만, Suspense와 서버 컴포넌트를 사용한 새로운 접근 방식에는 몇 가지 추가 이점이 있어요.</p>
<p>첫 번째 이점은 개발자에게 있어요. 이제 코드가 훨씬 간단하고 읽기 쉬워졌고 이해하기 쉽답니다.</p>
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
<p>두 번째 이점은 페이지 성능에 대한 것입니다. ProductList 컴포넌트에 클라이언트 측 상호 작용이 없기 때문에 서버 컴포넌트로 사용될 수 있습니다. 클라이언트 측으로 컴포넌트 코드를 전달할 필요가 없으며, 서버 측에서만 렌더링되기 때문에 성능이 좋아집니다! 현실 세계에서는 제품 케로셀에서 이러한 경우가 아닐 수 있지만, 앱마다 클라이언트 측 상호 작용 없이 정적으로 렌더링할 수 있는 컴포넌트가 있습니다. 특히 서버 컴포넌트와 서버 액션을 함께 사용하면 엔드 유저에 전달되는 코드 양을 줄일 수 있습니다.</p>
<p>서버 컴포넌트에 대해 더 자세히 알아보려면 여기를 클릭하세요. Suspense를 사용한 로딩에 대해 알아보려면 여기를 클릭하세요.</p>
<p>예제 코드는 여기에서 확인할 수 있습니다.</p>
<p>이 사용 사례를 다른 방식으로 구현할 수 있는 제안이 있으면 아래에 댓글을 남겨주세요 👇.</p>
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
<p>👋</p>
</div></template>
