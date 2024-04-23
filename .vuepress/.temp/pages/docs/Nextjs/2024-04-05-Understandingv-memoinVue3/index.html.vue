<template><div><img src="@source/docs/Nextjs/2024-04-05-Understandingv-memoinVue3/img/Understandingv-memoinVue3_0.png" />
<h1 id="vue-시리즈-기사" tabindex="-1"><a class="header-anchor" href="#vue-시리즈-기사" aria-hidden="true">#</a> Vue 시리즈 기사</h1>
<ul>
<li>Vue3에서 v-memo 이해하기</li>
<li>Vue3에서 Suspense 이해하기</li>
<li>Vue3에서 reactive, isReactive 및 shallowReactive 이해하기</li>
<li>Vue3에서 defineModel 이해하기</li>
<li>Vue3에서 Fragment 이해하기</li>
<li>Vue3에서 Teleport 이해하기</li>
<li>Vue3에서 비동기 컴포넌트 이해하기</li>
<li>Vue3에서 v-model 이해하기</li>
<li>Vue3에서 watch 및 watchEffect 이해하기</li>
<li>Vue3 구성 API의 이해 및 실습</li>
<li>Vue3에서 Hooks 이해하기 (Hooks 사용하는 이유)</li>
<li>Vue3에서 사용하는 커스텀 Hooks 함수의 사용 및 캡슐화 개념</li>
<li>Vue3의 다양한 ref 이해하기: toRef, toRefs, isRef, unref 등</li>
<li>Vue3 개발 솔루션(Ⅰ)</li>
<li>Vue3 개발 솔루션(Ⅱ)</li>
<li>알지 못했던 Vue3의 세부 정보</li>
<li>Vue3 개발 문서</li>
<li>자세한 설명이 포함된 28가지 Vue 인터뷰 질문</li>
</ul>
<h1 id="개요" tabindex="-1"><a class="header-anchor" href="#개요" aria-hidden="true">#</a> 개요</h1>
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
<p>v-memo의 공식 정의는 다음과 같습니다:</p>
<p>템플릿의 하위 트리를 메모이즈합니다. 요소와 컴포넌트 모두에 사용할 수 있습니다. 이 디렉티브는 메모이제이션을 위해 비교할 고정 길이의 의존 값 배열을 예상합니다. 배열의 모든 값이 마지막 렌더링과 동일하다면 전체 하위 트리에 대한 업데이트는 건너뜁니다.</p>
<p>간단히 말하면, v-memo가 하는 일은 기존의 계산된 속성과 유사하지만, v-memo의 대상은 DOM입니다.</p>
<p>이 새로운 디렉티브는 제어하는 DOM 세그먼트를 캐싱하며, 특정 값이 변경되면 업데이트와 다시 랜더링만 실행합니다. 이러한 값은 수동으로 설정됩니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token operator">&lt;</span>div v<span class="token operator">-</span>memo<span class="token operator">=</span><span class="token string">"[valueA, valueB]"</span><span class="token operator">></span>
    <span class="token operator">...</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="사용법" tabindex="-1"><a class="header-anchor" href="#사용법" aria-hidden="true">#</a> 사용법</h1>
<p>v-memo은 종속성 배열을 받습니다. 배열이 변경되면 v-memo에 해당하는 DOM과 해당 자식 요소가 다시 렌더링됩니다. 반대로, 종속성 배열이 변경되지 않으면 전체 컴포넌트가 재렌더링되더라도 v-memo에 해당하는 DOM 및 해당 자식 요소의 업데이트가 건너뛰어집니다.</p>
<p>또한, 종속성 배열은 v-memo=&quot;valueOne, valueTwo&quot;와 같이 하나 이상의 값 또는 표현식(예: v-memo=&quot;myValue === true&quot;)을 받을 수 있습니다.</p>
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
<h2 id="예시-1-빈-배열" tabindex="-1"><a class="header-anchor" href="#예시-1-빈-배열" aria-hidden="true">#</a> 예시 1: 빈 배열</h2>
<p>만약 빈 배열이 전달되면, 항상 처음 렌더링 시에 캐시된 결과를 사용하므로 다시 렌더링되지 않습니다. 마치 v-once와 유사합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>  
    <span class="token operator">&lt;</span>div v<span class="token operator">-</span>memo<span class="token operator">=</span><span class="token string">"[]"</span><span class="token operator">></span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> equal to <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div v<span class="token operator">-</span>once<span class="token operator">></span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="예시-2-변수" tabindex="-1"><a class="header-anchor" href="#예시-2-변수" aria-hidden="true">#</a> 예시 2: 변수</h2>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div v<span class="token operator">-</span>memo<span class="token operator">=</span><span class="token string">"[name]"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span> age <span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span> message <span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"handleBtnClick"</span><span class="token operator">></span>change<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script setup<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'loftyamb'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">24</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleBtnClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  age<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token comment">// Changes to the age value will not be updated on the page unless the name changes.</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>특정 시나리오에서는 비즈니스 로직이 복잡할 때 전반적인 업데이트를 수동으로 제어함으로써 성능을 향상시킬 수 있습니다. 이것은 큰 컴포넌트가 다시 렌더링될 때 정확한 제어가 필요한 경우에 매우 유용합니다.</p>
<h2 id="예제-3-v-for와-함께-사용하기" tabindex="-1"><a class="header-anchor" href="#예제-3-v-for와-함께-사용하기" aria-hidden="true">#</a> 예제 3: v-for와 함께 사용하기</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"item in list"</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"item.id"</span> v<span class="token operator">-</span>memo<span class="token operator">=</span><span class="token string">"[item.id === selected]"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token constant">ID</span><span class="token operator">:</span> <span class="token punctuation">{</span> item<span class="token punctuation">.</span>id <span class="token punctuation">}</span> <span class="token operator">-</span> selected<span class="token operator">:</span> <span class="token punctuation">{</span> item<span class="token punctuation">.</span>id <span class="token operator">===</span> selected <span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
  <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token operator">...</span>더 많은 자식 노드<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위의 코드에서 v-memo가 사용되지 않으면 선택한 변수를 변경할 때마다 목록 전체가 완전히 다시 렌더링됩니다. 새 지시문이 제공하는 캐싱 기능은 표현식 item.id === selected이 변경되는 로우만 업데이트되도록 허용하며, 즉, 항목을 선택하거나 선택 취소할 때만 업데이트됩니다.</p>
<h1 id="요약" tabindex="-1"><a class="header-anchor" href="#요약" aria-hidden="true">#</a> 요약</h1>
<p>v-memo의 사용은 다음과 같이 요약할 수 있습니다:</p>
<ul>
<li>비어있는 목록에 의존하는 경우 v-memo를 사용하는 것이 권장되지 않습니다.</li>
<li>비즈니스 로직이 복잡할 때 일부 시나리오에서 전반적인 업데이트를 수동으로 제어하면 성능이 향상될 수 있습니다.</li>
<li>대규모 구성 요소의 다시 렌더링 시간을 제어해야 할 때 매우 유용합니다.</li>
<li>대규모 목록을 렌더링하는 최적화입니다.</li>
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
<h1 id="stackademic-🎓" tabindex="-1"><a class="header-anchor" href="#stackademic-🎓" aria-hidden="true">#</a> Stackademic 🎓</h1>
<p>끝까지 읽어 주셔서 감사합니다. 떠나시기 전에:</p>
<ul>
<li>작가를 추종하고 박수 치는 것을 고려해주세요! 👏</li>
<li>우리를 팔로우해주세요 X | LinkedIn | YouTube | Discord</li>
<li>다른 플랫폼에 방문해주세요: In Plain English | CoFeed | Venture | Cubed</li>
<li>더 많은 콘텐츠는 Stackademic.com에서 확인해주세요.</li>
</ul>
</div></template>
