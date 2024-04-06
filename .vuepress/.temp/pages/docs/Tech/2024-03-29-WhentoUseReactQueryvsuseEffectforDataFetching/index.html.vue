<template><div><p>React 앱을 개발할 때 API에서 데이터를 가져와야 할 때가 있습니다.</p>
<p>이를 수행하는 두 가지 주요 방법이 있습니다 — useEffect 훅 또는 React Query를 사용하는 것입니다.</p>
<p>하지만 각각 언제 사용해야 할까요?</p>
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
<p>이 포스트에서는 데이터 가져오기에 대한 React Query와 useEffect를 비교하고 각각 언제 사용해야 하는지에 대한 권장 사항을 제시하겠습니다.</p>
<h2 id="데이터-가져오기를-위한-useeffect-hook" tabindex="-1"><a class="header-anchor" href="#데이터-가져오기를-위한-useeffect-hook" aria-hidden="true">#</a> 데이터 가져오기를 위한 useEffect Hook</h2>
<p>오랫동안 React에서 데이터를 가져오는 방법으로 사용된 것이 바로 useEffect 훅입니다.</p>
<p>다음은 간단한 예시입니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/api/data'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setData</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 비어 있는 배열은 한 번만 실행</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>data<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>기본적인 케이스에 대해 잘 동작합니다. 마운트 시 데이터를 가져와 컴포넌트의 상태에 저장합니다.</p>
<p>그러나 useEffect에는 몇 가지 단점이 있습니다:</p>
<ul>
<li>캐싱 X — 모든 렌더링마다 다시 가져옴</li>
<li>내장된 에러 처리 X</li>
<li>로딩 상태와 에러 상태를 수동으로 추적해야 함</li>
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
<p>여기가 React Query가 등장하는 곳이에요…</p>
<h2 id="스마트-데이터-가져오기를-위한-react-query" tabindex="-1"><a class="header-anchor" href="#스마트-데이터-가져오기를-위한-react-query" aria-hidden="true">#</a> 스마트 데이터 가져오기를 위한 React Query</h2>
<p>React Query는 데이터 가져오기, 캐싱, 동기화 및 서버 상태 업데이트와 같은 까다로운 부분을 처리하는 라이브러리에요.</p>
<p>그것은 raw useEffect 접근 방식보다 여러 가지면에서 개선되어 있어요:</p>
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
<li>캐싱 - 쿼리 결과가 변경되지 않는 한 캐시되고 재사용됨</li>
<li>중복 제거 - 중복된 요청이 없음</li>
<li>오류 처리 - 오류가 잡히고 공손하게 처리됨</li>
<li>로딩 상태 - 데이터 가져올 때 내장된 로딩 인디케이터 표시</li>
<li>데이터가 변경될 때 자동으로 다시 가져오기</li>
<li>SSR 지원</li>
</ul>
<p>다음은 React Query 접근의 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-query'</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error<span class="token punctuation">,</span> isLoading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/api/data'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isLoading<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">'로딩 중...'</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">'오류가 발생했습니다'</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>data<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>훨씬 깔끔해 보이죠!</p>
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
<p>React Query는 캐싱, 로딩 상태, 에러 처리 등을 기본적으로 처리해줘요.</p>
<h2 id="각각을-언제-사용해야-하나요" tabindex="-1"><a class="header-anchor" href="#각각을-언제-사용해야-하나요" aria-hidden="true">#</a> 각각을 언제 사용해야 하나요?</h2>
<p>그래서 언제 각 방법을 사용해야 할까요?</p>
<p>여기 제 개인적인 지침이 있어요:</p>
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
<li>한 번만 데이터가 필요한 경우나 간단한 작업(예: 폼)에는 useEffect를 사용합니다.</li>
<li>여러 컴포넌트 간에 데이터를 재사용하거나 오류 처리가 복잡한 경우에는 React Query를 사용합니다.</li>
</ul>
<p>React Query를 사용하지 않는 주된 이유는 간결함과 핵심 기능 집합 외의 사용자 정의 동작이 필요한 경우입니다.</p>
<p>하지만 대부분의 실제 상황에서는 특히 컴포넌트 간 데이터를 공유하고 다시 가져와야 할 때 React Query를 사용하면 시간과 머리 아픈 문제를 해결할 수 있습니다.</p>
<p>다음 프로젝트에서 한번 시도해보세요!</p>
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
<p>이 개요가 React Query와 useEffect가 가장 적합한 시나리오를 설명하는 데 도움이 되기를 바랍니다.</p>
<p>도움이 되었기를 바랍니다!</p>
</div></template>
