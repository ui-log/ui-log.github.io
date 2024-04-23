<template><div><p>리액트에서 useQuery 훅은 리액트 자체에 내장된 훅이 아닙니다. 대신에 일반적으로 React Query와 같은 상태 관리 라이브러리와 연관되어 사용됩니다.</p>
<p>React Query는 리액트 애플리케이션에서 데이터 가져오기를 관리하고 캐시하며 동기화하는 데 도움이 되는 라이브러리입니다.</p>
<p>다음은 React Query와 useQuery 훅을 사용하는 예제입니다:</p>
<h2 id="사용하기-전에-프로젝트에-react-query를-설치해야-합니다" tabindex="-1"><a class="header-anchor" href="#사용하기-전에-프로젝트에-react-query를-설치해야-합니다" aria-hidden="true">#</a> 사용하기 전에 프로젝트에 React Query를 설치해야 합니다:</h2>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install react<span class="token operator">-</span>query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-query"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">"axios"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Prodcuts</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> apiUrl <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">REACT_APP_API_URL</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">fetchProducts</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>apiUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> response<span class="token operator">?.</span>data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> isLoading<span class="token punctuation">,</span> error<span class="token punctuation">,</span> refetch <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token string">'productData'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fetchProducts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>isLoading<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>로딩 중<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"error"</span><span class="token operator">></span><span class="token punctuation">{</span>error<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>ul<span class="token operator">></span>
                <span class="token punctuation">{</span>data<span class="token operator">?.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">product</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>product<span class="token operator">?.</span>id<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>product<span class="token operator">?.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
                <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>refetch<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">"btn btn-primary btn-md"</span><span class="token operator">></span>새로고침<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Prodcuts<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="이-예시에서" tabindex="-1"><a class="header-anchor" href="#이-예시에서" aria-hidden="true">#</a> 이 예시에서</h2>
<ul>
<li>useQuery를 사용하여 'productData' 라는 키로 데이터를 가져오고 관리합니다.</li>
<li>fetchProducts 함수는 데이터를 가져오는 역할을 합니다 (원하는 데이터 가져오기 로직으로 대체해야 합니다).</li>
<li>이 훅은 데이터, 에러, 로딩중 여부 속성을 가진 객체를 반환하며, 데이터 가져오는 과정의 다른 상태를 처리하는 데 사용할 수 있습니다.</li>
<li>컴포넌트는 쿼리의 상태에 따라 로딩, 에러 또는 데이터 컨텐츠를 렌더링합니다.</li>
<li>React Query를 프로젝트에 설치한 후 사용하기 바랍니다.```</li>
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
<h2 id="react-query의-usequery-훅에서-refetch란-무엇인가요" tabindex="-1"><a class="header-anchor" href="#react-query의-usequery-훅에서-refetch란-무엇인가요" aria-hidden="true">#</a> React Query의 useQuery 훅에서 refetch란 무엇인가요?</h2>
<p>React Query의 useQuery 훅에서, refetch 함수는 데이터를 수동으로 다시 불러올 수 있는 기능을 제공합니다. 이는 특히 사용자 조치나 이벤트로 인해 데이터를 다시 불러와야 할 때 유용합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-query'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">fetchData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://api.example.com/data'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> data<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> isLoading<span class="token punctuation">,</span> isError<span class="token punctuation">,</span> refetch <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token string">'myData'</span><span class="token punctuation">,</span> fetchData<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleRefresh</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 데이터를 수동으로 다시 불러옵니다</span>
    <span class="token function">refetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLoading<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>isError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>Error fetching data<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>Data<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleRefresh<span class="token punctuation">}</span><span class="token operator">></span>Refresh<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span>pre<span class="token operator">></span><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>pre<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MyComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="이-예시에서-1" tabindex="-1"><a class="header-anchor" href="#이-예시에서-1" aria-hidden="true">#</a> 이 예시에서:</h2>
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
<li>refetch 함수는 useQuery 훅에서 얻어지며, 수동 데이터 재검색을 트리거할 수 있습니다.</li>
<li>사용자가 &quot;새로고침&quot; 버튼을 클릭했을 때 refetch를 호출하는 handleRefresh 함수가 생성됩니다.</li>
<li>refetch()를 호출하면 useQuery에 제공된 fetchData 함수를 다시 실행하여 데이터를 다시 소스에서 가져옵니다.</li>
</ul>
<p>이 수동 재검색 기능은 React Query의 자동 재검색에 의존하지 않고 사용자에게 데이터를 새로 고칠 수 있는 능력을 제공하고 싶을 때 유용합니다.</p>
</div></template>
