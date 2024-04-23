<template><div><p><img src="@source/docs/Nextjs/2024-04-05-ReactNativeInfinitescrollwithReactQuery/img/ReactNativeInfinitescrollwithReactQuery_0.png" alt="React Native Infinite Scroll with React Query"></p>
<p>안녕하세요, 개발자 여러분! 오늘은 React Query를 사용하여 React Native에서 무한 스크롤이 적용된 flatlist를 개발하는 방법에 대해 이야기해보려고 합니다.</p>
<p>무한 스크롤은 많은 응용 프로그램의 개발에서 중요한 부분이며, 부드러운 사용자 경험을 제공하고 페이지별로 서버 호출을 실행하여 성능을 최적화할 수 있도록 도와줍니다.</p>
<p>저희는 무한 스크롤이 적용된 간단한 항목 목록을 만들고, 목록을 필터링할 수 있는 검색 필드를 추가할 예정입니다. 함께 만들어보시죠.</p>
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
<p>하나 이상의 필터와 상호 작용함으로써 목록이 첫 번째 페이지로 재설정되고 그 후 전통적인 방법으로 계속됩니다.</p>
<p>우선, React Native 애플리케이션에 필요한 라이브러리를 설치해 보겠습니다.</p>
<p>yarn add @tanstack/react-query</p>
<p>예제에서는 React Query 버전 5를 사용하여 시작해 봅시다. 다른 버전을 사용하는 경우 구현 방법은 동일하지만 React Query에서 무한 스크롤을 구현하기 위해 사용되는 옵션이 약간 다를 수 있습니다.</p>
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
<p>먼저 쿼리 클라이언트를 만들어봅시다. 코드를 깔끔하게 유지하기 위해 React Query 프로바이더를 인스턴스화하고 오프라인 쿼리/뮤테이션 상태 처리와 관련된 로직을 추가할 QueryProvider 파일을 사용할 거에요.</p>
<p>다음은 어떻게 하는지 보여드릴게요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// QueryProvider.tsx</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> PropsWithChildren <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> QueryClient<span class="token punctuation">,</span> QueryClientProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@tanstack/react-query'</span><span class="token punctuation">;</span>

<span class="token comment">// 새로운 QueryClient를 인스턴스화</span>
<span class="token keyword">const</span> queryClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">defaultOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">queries</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">staleTime</span><span class="token operator">:</span> <span class="token number">300000</span><span class="token punctuation">,</span> <span class="token comment">// 5분</span>
      <span class="token literal-property property">retry</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token literal-property property">refetchOnWindowFocus</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 생성한 queryClient로 QueryClientProvider를 내보냄</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">QueryProvider</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> PropsWithChildren</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>QueryClientProvider client<span class="token operator">=</span><span class="token punctuation">{</span>queryClient<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>QueryClientProvider<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// App.tsx</span>

<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> QueryProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./QueryProvider'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> InfiniteScrollScreen <span class="token keyword">from</span> <span class="token string">'./InfiniteScrollScreen'</span><span class="token punctuation">;</span> <span class="token comment">// 여기에 메인 컴포넌트를 넣어주세요</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>QueryProvider<span class="token operator">></span>
      <span class="token operator">&lt;</span>InfiniteScrollScreen <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>QueryProvider<span class="token operator">></span>
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
<p>이 설정을 통해 React Query가 초기화되고 애플리케이션에서 사용할 수 있게 됩니다. 이제 React Query를 사용하여 무한 스크롤이 있는 flatlist를 구현할 수 있습니다.</p>
<p>무한 스크롤을 구현하기 위한 필요한 로직을 삽입할 main 파일 useInfiniteScroll을 만들어 봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useInfiniteQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@tanstack/react-query'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useCallback<span class="token punctuation">,</span> useMemo<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">'lodash'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span>

type Params<span class="token operator">&lt;</span><span class="token constant">F</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  limit<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  filters<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">F</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useInfiniteScroll <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> unknown<span class="token punctuation">,</span> <span class="token constant">F</span> <span class="token operator">=</span> object<span class="token operator">></span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
  key<span class="token punctuation">,</span>
  url<span class="token punctuation">,</span>
  limit <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span>
  filters<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> Params<span class="token operator">&lt;</span><span class="token constant">F</span><span class="token operator">></span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> queryKey <span class="token operator">=</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> <span class="token operator">...</span>_<span class="token punctuation">.</span>values<span class="token operator">&lt;</span>string <span class="token operator">|</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">omitBy</span><span class="token punctuation">(</span>filters <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> _<span class="token punctuation">.</span>isEmpty<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>
    <span class="token parameter">c</span> <span class="token operator">=></span> <span class="token function">Boolean</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>_<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isRefreshing<span class="token punctuation">,</span> setIsRefreshing<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">queryFn</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> pageParam <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span>get<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">page</span><span class="token operator">:</span> pageParam<span class="token punctuation">,</span>
        limit<span class="token punctuation">,</span>
        <span class="token operator">...</span>filters<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> data<span class="token punctuation">,</span>
      <span class="token literal-property property">nextPage</span><span class="token operator">:</span> pageParam <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> hasNextPage<span class="token punctuation">,</span> fetchNextPage<span class="token punctuation">,</span> isFetchingNextPage<span class="token punctuation">,</span> refetch <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useInfiniteQuery</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    queryKey<span class="token punctuation">,</span>
    queryFn<span class="token punctuation">,</span>
    <span class="token literal-property property">initialPageParam</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token function-variable function">getNextPageParam</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">lastPage<span class="token punctuation">,</span> __<span class="token punctuation">,</span> lastPageParam</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>lastPage<span class="token punctuation">.</span>data<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> limit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> lastPageParam <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">getPreviousPageParam</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> __<span class="token punctuation">,</span> firstPageParam</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>firstPageParam <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> firstPageParam <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> loadNext <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    hasNextPage <span class="token operator">&amp;&amp;</span> <span class="token function">fetchNextPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>fetchNextPage<span class="token punctuation">,</span> hasNextPage<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> onRefresh <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isRefreshing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setIsRefreshing</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">refetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setIsRefreshing</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setIsRefreshing</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>isRefreshing<span class="token punctuation">,</span> refetch<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> flattenData <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> data<span class="token operator">?.</span>pages<span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span><span class="token parameter">page</span> <span class="token operator">=></span> page<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>data<span class="token operator">?.</span>pages<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> flattenData<span class="token punctuation">,</span>
    <span class="token literal-property property">onEndReached</span><span class="token operator">:</span> loadNext<span class="token punctuation">,</span>
    isRefreshing<span class="token punctuation">,</span>
    onRefresh<span class="token punctuation">,</span>
    isFetchingNextPage
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>아래에서 이 후크가 받는 매개변수를 나타냅니다:</p>
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
<li>key: 데이터를 캐싱하는 기본 키를 나타냅니다. 캐싱 부분은 완전히 React Query 라이브러리에 의해 처리됩니다. 모든 필터 값을 포함한 주요 키를 설정하여 필터가 변경될 때마다 새로운 API 호출이 발생하여 무한 스크롤을 다시 트리거합니다.</li>
<li>url: API 호출에 사용되는 URL을 나타냅니다. 예를 들어, JSON Placeholder API를 사용하여 포스트 목록을 가져오려면 URL은 https://jsonplaceholder.typicode.com/posts 가 됩니다.</li>
<li>limit: 각 호출에서 반환되는 요소 수를 나타냅니다. 제한이 10이면 각 호출에서 10개의 요소가 반환됩니다. 이 방법은 조회 중인 API 서비스에 따라 다를 수 있음에 유의해야 합니다. 이 경우, 페이지 네비게이션을 위해 두 개의 매개변수가 필요한데, 이는 페이지와 제한입니다. 페이지는 페이지 번호를 나타내며, 제한은 반환될 요소 수를 나타냅니다.</li>
<li>filters: 호출에 전달된 필터를 나타냅니다. 이러한 필터가 객체로 처리될 것으로 예상합니다. 아래에서 예시를 살펴볼 것입니다.</li>
</ul>
<p>훅이 TypeScript로 작성되었으므로 위에서 언급한 매개변수 외에도 두 가지 일반화(제네릭) T 및 F를 허용합니다:</p>
<ul>
<li>T: 반환해야 하는 데이터의 유형을 나타냅니다. 예를 들어, UserInterface와 같습니다.</li>
<li>F: 필터를 나타내는 유형입니다. 예를 들어, 필터 유형은 다음과 같습니다: { search: string, userId: string }</li>
</ul>
<p>무한 스크롤을 사용하는 예제는 다음과 같습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FlatList<span class="token punctuation">,</span> Text<span class="token punctuation">,</span> View<span class="token punctuation">,</span> RefreshControl<span class="token punctuation">,</span> StyleSheet<span class="token punctuation">,</span> ActivityIndicator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-native'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useInfiniteScroll <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../hooks/useInfiniteScroll'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useTranslation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-i18next'</span><span class="token punctuation">;</span>

type TFilters <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">search</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

type TData <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">surname</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">email</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">InfiniteScrollScreen</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useTranslation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>filters<span class="token punctuation">,</span> setFilters<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>TFilters<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> isRefreshing<span class="token punctuation">,</span> onRefresh<span class="token punctuation">,</span> onEndReached<span class="token punctuation">,</span> isFetchingNextPage <span class="token punctuation">}</span> <span class="token operator">=</span> useInfiniteScroll<span class="token operator">&lt;</span>
    TData<span class="token punctuation">,</span>
    TFilters
  <span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'users'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filters</span><span class="token operator">:</span> filters<span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'users'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>FlatList
      contentContainerStyle<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>contentContainerStyle<span class="token punctuation">}</span>
      keyExtractor<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">item</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>id<span class="token punctuation">}</span>
      initialNumToRender<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span>
      data<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span>
      onEndReached<span class="token operator">=</span><span class="token punctuation">{</span>onEndReached<span class="token punctuation">}</span>
      removeClippedSubviews<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>
      refreshControl<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>RefreshControl refreshing<span class="token operator">=</span><span class="token punctuation">{</span>isRefreshing<span class="token punctuation">}</span> onRefresh<span class="token operator">=</span><span class="token punctuation">{</span>onRefresh<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>
      renderItem<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> item <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>item<span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Text<span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span>
      ListEmptyComponent<span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>listEmptyComponent<span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Text<span class="token operator">></span><span class="token punctuation">{</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'noResult'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
      <span class="token punctuation">}</span>
      ListFooterComponent<span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>listFooterComponent<span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token punctuation">{</span>isFetchingNextPage <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>ActivityIndicator <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">></span>
      <span class="token punctuation">}</span>
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">listEmptyComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">flexDirection</span><span class="token operator">:</span> <span class="token string">'row'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">listFooterComponent</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">flexDirection</span><span class="token operator">:</span> <span class="token string">'row'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">item</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">contentContainerStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>마무리하며, React Native에서 React Query를 사용하여 무한 스크롤을 구현하면 대용량 데이터를 다루는 애플리케이션에서 매끄러운 사용자 경험과 최적화된 성능을 제공합니다. React Query의 캐싱 및 페이지네이션 기능을 활용하여 개발자들은 데이터 가져오기와 페이지네이션 로직을 쉽게 관리할 수 있습니다. 소셜 미디어 피드, 제품 카탈로그 또는 다른 동적 목록 기반 인터페이스를 구축하고 있다면, React Query를 활용하여 무한 스크롤을 습득함으로써 더욱 반응적이고 효율적인 모바일 애플리케이션을 만들 수 있는 다양한 가능성이 열립니다. 그래서 지금 더 멀리 뛰어들어 무한 스크롤의 심층을 탐험하고 React Native 프로젝트를 새로운 상호작용성과 성능의 높은 수준으로 끌어올려보세요. 즐거운 코딩되세요!```</p>
</div></template>
