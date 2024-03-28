<template><div><h1 id="클라이언트-측-렌더링-csr" tabindex="-1"><a class="header-anchor" href="#클라이언트-측-렌더링-csr" aria-hidden="true">#</a> 클라이언트 측 렌더링 (CSR)</h1>
<p>리액트를 사용한 클라이언트 측 렌더링(CSR)에서는 브라우저가 최소한의 HTML 페이지와 페이지에 필요한 JavaScript를 다운로드합니다. 그런 다음 JavaScript를 사용하여 DOM을 업데이트하고 페이지를 렌더링합니다. 애플리케이션이 처음으로 로드될 때 사용자는 페이지가 완전히 렌더링될 때까지 약간의 지연을 느낄 수 있습니다. 이는 페이지가 JavaScript를 모두 다운로드하고 구문 분석하며 실행될 때까지 완전히 렌더링되지 않기 때문입니다.</p>
<p>페이지가 처음으로로드 된 후에는 동일한 웹 사이트의 다른 페이지로 이동하는 것이 일반적으로 더 빠릅니다. 필요한 데이터만 가져오면 되기 때문에 JavaScript가 전체 페이지 새로고침 없이 페이지 일부를 다시 렌더링할 수 있습니다.</p>
<p>Next.js에서는 클라이언트 측 렌더링을 구현하는 두 가지 방법이 있습니다:</p>
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
<li>서버 측 렌더링 방법인 getStaticProps 및 getServerSideProps 대신 페이지 내에서 React의 useEffect() 훅을 사용하세요.</li>
<li>데이터를 가져오는 라이브러리인 SWR 또는 TanStack Query를 사용하여 클라이언트에서 데이터를 가져오세요 (권장됨).</li>
</ul>
<p>다음은 Next.js 페이지 내에서 useEffect()를 사용하는 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">fetchData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://api.example.com/data"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">HTTP 오류! 상태: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>response<span class="token punctuation">.</span>status<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setData</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 필요에 따라 오류 처리</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"데이터를 가져오는 중 오류가 발생했습니다: "</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>data <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">당신의 데이터: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token operator">:</span> <span class="token string">"로딩 중..."</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 예시에서 컴포넌트는 처음에 Loading...을 렌더링합니다. 그런 다음 데이터를 가져오면 다시 렌더링되어 데이터를 표시합니다.</p>
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
<p>이전 React 애플리케이션에서 볼 수 있는 useEffect 내에서 데이터 가져오기는 일반적인 패턴이지만, 성능, 캐싱, 낙관적 업데이트 등을 위해 데이터 가져오기 라이브러리를 사용하는 것을 권장합니다. 여기 SWR을 사용해서 클라이언트에서 데이터를 가져오는 최소 예제가 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> useSWR <span class="token keyword">from</span> <span class="token string">"swr"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error<span class="token punctuation">,</span> isLoading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSWR</span><span class="token punctuation">(</span><span class="token string">"https://api.example.com/data"</span><span class="token punctuation">,</span> fetcher<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>로드 실패<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLoading<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>로딩 중<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>당신의 데이터<span class="token operator">:</span> <span class="token punctuation">{</span>data<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두면 좋은 점:
CSR이 SEO에 영향을 미칠 수 있다는 것을 염두에 두세요. 일부 검색 엔진 크롤러는 JavaScript를 실행하지 않을 수 있으며, 따라서 애플리케이션의 초기 빈 상태나 로딩 상태만 볼 수 있을 수 있습니다. 이는 또한 느린 인터넷 연결이나 장치를 사용하는 사용자에게 성능 문제를 야기할 수 있으며, 전체 페이지를 볼 수 있기 전에 모든 JavaScript를 로드하고 실행해야 합니다. Next.js는 애플리케이션의 각 페이지의 요구에 따라 서버사이드 렌더링, 정적 사이트 생성 및 클라이언트사이드 렌더링을 조합하여 사용할 수 있는 하이브리드 접근 방식을 촉진합니다. App Router에서는 페이지 렌더링 중 로딩 인디케이터를 표시하기 위해 Suspense를 사용할 수도 있습니다.</p>
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
</div></template>
