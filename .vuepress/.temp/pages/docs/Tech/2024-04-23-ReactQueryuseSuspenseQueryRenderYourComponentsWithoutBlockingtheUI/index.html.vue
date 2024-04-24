<template><div><p>written by Vivek Malhan</p>
<p><img src="@source/docs/Tech/2024-04-23-ReactQueryuseSuspenseQueryRenderYourComponentsWithoutBlockingtheUI/img/ReactQueryuseSuspenseQueryRenderYourComponentsWithoutBlockingtheUI_0.png" alt="React Query useSuspenseQuery"></p>
<h2 id="usesuspensequery는-무엇인가요" tabindex="-1"><a class="header-anchor" href="#usesuspensequery는-무엇인가요" aria-hidden="true">#</a> useSuspenseQuery는 무엇인가요?</h2>
<p>useSuspenseQuery는 React Query v5에서 새롭게 도입된 훅으로, 데이터를 가져오는 동안 컴포넌트를 렌더링할 수 있는 Suspense 기능을 활용할 수 있게 해줍니다. 이를 활용하면 더 부드럽고 반응이 빠른 사용자 인터페이스를 만들 수 있습니다.</p>
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
<h1 id="usesuspensequery-사용-방법" tabindex="-1"><a class="header-anchor" href="#usesuspensequery-사용-방법" aria-hidden="true">#</a> useSuspenseQuery 사용 방법</h1>
<p>useSuspenseQuery를 사용하려면, 기존 useQuery 훅에 전달하는 매개변수와 동일한 매개변수를 전달하면 됩니다. useSuspenseQuery 훅은 쿼리 데이터로 해결되는 Promise를 반환합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useSuspenseQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-query'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSuspenseQuery</span><span class="token punctuation">(</span><span class="token string">'users'</span><span class="token punctuation">,</span> fetchUsers<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span>
      <span class="token punctuation">{</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>useSuspenseQuery가 Promise를 반환하기 때문에 컴포넌트를 <code v-pre>Suspense</code> 컴포넌트로 감쌀 수 있습니다. 이렇게 하면 React가 데이터를 가져올 동안 대체 컴포넌트를 렌더링하도록 만들 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Suspense<span class="token punctuation">,</span> useSuspenseQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-query'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSuspenseQuery</span><span class="token punctuation">(</span><span class="token string">'users'</span><span class="token punctuation">,</span> fetchUsers<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>ul<span class="token operator">></span>
        <span class="token punctuation">{</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="왜-usesuspensequery가-유용한가요" tabindex="-1"><a class="header-anchor" href="#왜-usesuspensequery가-유용한가요" aria-hidden="true">#</a> 왜 useSuspenseQuery가 유용한가요?</h1>
<p>useSuspenseQuery는 더 부드럽고 빠르게 반응하는 사용자 인터페이스를 만드는데 유용할 수 있어요. 예를 들어 사용자 목록을 렌더링하는 컴포넌트가 있다면, useSuspenseQuery를 사용하여 사용자 데이터를 백그라운드에서 미리 가져올 수 있어요. 이렇게 하면 컴포넌트가 즉시 렌더링되고, 사용자 데이터가 아직 준비되지 않았더라도 사용자에게는 즉각적인 렌더링 화면이 제공될 거예요.</p>
<p>사용자 데이터를 가져오면, 리액트가 업데이트된 데이터로 컴포넌트를 다시 렌더링할 거예요. 이를 통해 사용자에게 데이터가 아직 로딩 중이지만 반응성을 느끼게 해줄 거예요.```</p>
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
<h1 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices" aria-hidden="true">#</a> Best practices</h1>
<p>다음은 useSuspenseQuery를 사용하는 데 도움이 되는 몇 가지 최상의 방법입니다:</p>
<ul>
<li>useSuspenseQuery를 사용하여 컴포넌트가 렌더링되는 동안 데이터를 백그라운드에서 가져오세요. 이렇게 하면 더 부드럽고 반응이 빠른 사용자 경험을 만들 수 있습니다.</li>
<li>컴포넌트를 <code v-pre>Suspense</code> 컴포넌트로 감싸서 데이터를 가져오는 동안 대체 컴포넌트를 렌더링하도록 React에 지시하세요.</li>
<li>isLoading 및 isError 속성을 사용하여 쿼리의 로딩 및 오류 상태를 처리하세요.</li>
<li>애플리케이션이 즉시 렌더링해야 하는 중요한 데이터에 useSuspenseQuery를 사용하지 마세요. 중요한 쿼리의 데이터가 아직 사용 가능하지 않은 경우 애플리케이션은 올바르게 렌더링되지 않을 수 있습니다.</li>
</ul>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
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
<p>useSuspenseQuery은 React Query v5에서 사용할 수 있는 강력한 새로운 훅입니다. 이 훅을 사용하면 더 부드럽고 반응성 있는 사용자 인터페이스를 만들 수 있습니다. 위에서 소개한 최상의 실천 방법을 따라 사용하면 효율적이고 사용자 친화적인 코드를 작성할 수 있습니다.</p>
<p>다음은 useSuspenseQuery를 효과적으로 사용하는 몇 가지 추가 팁입니다:</p>
<ul>
<li>useSuspenseQuery를 사용하여 구성 요소의 초기 렌더링에 필수적이지 않은 데이터를 가져옵니다. 이렇게 함으로써 데이터를 가져오는 동안 사용자 인터페이스가 블로킹되지 않도록 할 수 있습니다.</li>
<li>useSuspenseQuery를 사용하여 자주 변경될 가능성이 있는 데이터를 가져옵니다. 이렇게 하면 업데이트된 데이터로 빠르게 다시 렌더링할 수 있습니다.</li>
<li>useSuspenseQuery를 사용하여 사용자 상호 작용에 필요한 데이터를 가져옵니다. 이렇게 하면 데이터를 여전히 가져오는 동안에도 구성 요소가 빠르게 사용자 상호 작용에 응답할 수 있습니다.</li>
</ul>
<p>이러한 팁을 따라 React 응용 프로그램의 성능과 사용자 경험을 향상시키기 위해 useSuspenseQuery를 사용할 수 있습니다.</p>
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
<p>감사합니다. 끝까지 오신 것을 축하드려요.</p>
<p>저랑 연락을 유지합시다. 아래 링크를 통해 더 많이 알아보세요.</p>
<p>다음 블로그를 게시하면 알림을 받으려면 구독해주세요. 다음에 또 만나요!</p>
</div></template>
