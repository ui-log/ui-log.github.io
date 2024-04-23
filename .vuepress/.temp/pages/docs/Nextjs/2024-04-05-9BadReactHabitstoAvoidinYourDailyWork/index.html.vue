<template><div><img src="https://miro.medium.com/v2/resize:fit:1200/0*tJn1_UxyRe9tN0Q5.gif" />
<h1 id="서문" tabindex="-1"><a class="header-anchor" href="#서문" aria-hidden="true">#</a> 서문</h1>
<p>React는 프론트엔드 개발 세계에서 가장 인기 있는 JavaScript 라이브러리 중 하나입니다. 하지만 때로는 React를 사용하면서 애플리케이션을 작성하는 동안 일부 나쁜 습관과 잘못된 관행에 빠질 수 있습니다. 이러한 부정적인 습관은 성능 저하, 유지보수가 어려운 코드 및 기타 문제로 이어질 수 있습니다. 이 글에서는 일상적인 업무에서 피해야 할 9가지 나쁜 습관을 살펴보고, 이러한 문제를 설명하고 이를 피하는 방법을 보여주는 관련 샘플 코드를 제시할 것입니다.</p>
<ol>
<li>속성 전달 문제 (Prop Drilling)</li>
</ol>
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
<p>부모 구성 요소에 불필요하게 네스트된 하위 구성 요소로 속성을 전달하는 것은 일반적인 나쁜 버릇입니다. 이는 성능 문제와 코드 가독성 저하로 이어질 수 있습니다. 이상적으로, 2단계 이상으로 속성을 전달하는 것은 피해야 합니다. 아래는 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 부모 구성 요소</span>
<span class="token keyword">function</span> <span class="token function">ParentComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token string">'일부 데이터'</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token operator">&lt;</span>ChildComponent data<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 하위 구성 요소</span>
<span class="token keyword">function</span> <span class="token function">ChildComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> data <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token operator">&lt;</span>GrandchildComponent data<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 손자 구성 요소</span>
<span class="token keyword">function</span> <span class="token function">GrandchildComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> data <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 데이터 사용</span>
   <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>data<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 예시에서 데이터 속성이 여러 중첩 수준을 통해 전달되며, 이는 성능 문제와 가독성 문제를 일으킬 수 있습니다. 이 문제를 해결하는 한 가지 방법은 React context(컨텍스트)를 사용하여 데이터를 공유하거나 구성 요소 구조를 재조정하는 것입니다.</p>
<ol start="2">
<li>필요한 컨텐츠를 지나치게 가져오는 경우</li>
</ol>
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
<p>React 어플리케이션에서 너무 많은 종속성을 가져오면 패키지가 무거워져서 로드 시간이 길어질 수 있습니다. 일상적인 작업에서 필요한 종속성만 가져오도록 하세요. 예를 들어 전체 라이브러리를 가져오지 말고 필요한 기능만 가져오는 것이 좋습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 안좋은 예 - 전체 라이브러리 가져오기</span>
<span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">'lodash'</span><span class="token punctuation">;</span>

<span class="token comment">// 좋은 예 - 필요한 함수만 가져오기</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> someFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'lodash'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게 하면 데이터 크기가 줄어들고 애플리케이션 성능이 향상됩니다.</p>
<ol start="3">
<li>비즈니스 로직과 컴포넌트 로직 분리하지 않기</li>
</ol>
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
<p>리액트에서는 코드의 가독성과 유지 관리성을 향상시키기 위해 비즈니스 로직과 UI 컴포넌트 로직을 분리하려고 노력해보세요. 컴포넌트를 간단하게 유지하기 위해 비즈니스 로직을 별도의 서비스 파일이나 모듈로 추출하세요. 다음은 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 나쁜 예 - 비즈니스 로직이 컴포넌트에 섞여 있는 경우</span>
<span class="token keyword">function</span> <span class="token function">UserProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">getUserData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// API에서 사용자 데이터 가져오기</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token operator">&lt;</span>div<span class="token operator">></span>
       <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
       <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>email<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 좋은 예 - 비즈니스 로직 분리</span>
<span class="token keyword">function</span> <span class="token function">UserProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">useUserData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 독립적인 서비스에서 사용자 데이터 가져오기</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token operator">&lt;</span>div<span class="token operator">></span>
       <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
       <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>email<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>각 렌더링마다 작업을 반복하지 않기</li>
</ol>
<p>리액트 컴포넌트는 다양한 시기에 다시 렌더링될 수 있으며, 신중하지 않다면 일부 작업이 각 렌더링마다 반복되어 성능이 저하될 수 있습니다. 이를 피하기 위해 useMemo와 useCallback을 사용하여 작업을 메모이제이션하여 각 렌더링마다 재계산되지 않도록 할 수 있습니다. 다음은 예시입니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">List</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> items <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// useMemo를 사용하지 않으면 필터링이 매 렌더링마다 다시 필터링됩니다</span>
   <span class="token keyword">const</span> filteredItems <span class="token operator">=</span> items<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>active<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// useMemo를 사용할 때는 items가 변경될 때만 다시 필터링됩니다</span>
   <span class="token keyword">const</span> filteredItems <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> items<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>active<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>items<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>useEffect 훅의 부적절한 사용</li>
</ol>
<p>useEffect 훅은 사이드 이펙트를 처리하는 데 사용됩니다. 그러나 부적절하게 사용하면 여러 이벤트 리스너가 생성되어 문제를 일으킬 수 있습니다. 올바른 useEffect 방법에는 클린업 함수를 반환하여 구독 해지 및 한 번만 실행되도록 빈 의존성 배열을 사용하는 방법이 포함됩니다. 예시는 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 잘못된 예 - 매 렌더링마다 새 이벤트 리스너가 생성됩니다</span>
<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'resize'</span><span class="token punctuation">,</span> handleResize<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
     window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'resize'</span><span class="token punctuation">,</span> handleResize<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 좋은 예 - 컴포넌트가 마운트될 때만 이벤트 리스너가 생성됩니다</span>
<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'resize'</span><span class="token punctuation">,</span> handleResize<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
       window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'resize'</span><span class="token punctuation">,</span> handleResize<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 빈 의존성 배열</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>빈 종속성 배열을 사용하여 컴포넌트가 마운트될 때 이벤트 리스너가 한 번만 만들어진다는 것을 보장합니다.</p>
<ol start="6">
<li>부정확한 불리언 연산자의 사용</li>
</ol>
<p>React 컴포넌트에서는 종종 조건에 따라 다른 콘텐츠를 렌더링해야 할 필요가 있습니다. 그러나 잘못된 불리언 연산자의 사용은 예기치 않은 문제를 일으킬 수 있습니다. 예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 나쁜 예 - &amp;&amp; 연산자 사용</span>
<span class="token keyword">function</span> <span class="token function">ShoppingCart</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> items <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token operator">&lt;</span>div<span class="token operator">></span>
       <span class="token punctuation">{</span>items<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>장바구니에 있는 항목 수<span class="token operator">:</span> <span class="token punctuation">{</span>items<span class="token punctuation">.</span>length<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">}</span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위 예제에서는 요소가 렌더링 되지 않습니다. 이 상황은 원하는 결과가 아닐 수 있습니다. 이를 피하기 위해서는 조건을 불리언 값으로 변환하는 것이 더 좋습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 좋은 예 - 조건을 불리언 값으로 변환하기</span>
<span class="token keyword">function</span> <span class="token function">ShoppingCart</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> items <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token operator">&lt;</span>div<span class="token operator">></span>
       <span class="token punctuation">{</span><span class="token function">Boolean</span><span class="token punctuation">(</span>items<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>장바구니에 담긴 상품 수<span class="token operator">:</span> <span class="token punctuation">{</span>items<span class="token punctuation">.</span>length<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">}</span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>조건을 불리언 값으로 변환함으로써 요소가 원하는 대로 렌더링될 수 있습니다.</p>
<ol start="7">
<li>조건부 렌더링을 위해 삼항 표현식을 어디서든 사용하기</li>
</ol>
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
<p>삼항 표현식은 강력한 조건부 렌더링 도구이지만 오용할 경우 코드가 읽기 어려워질 수 있습니다. 특히 여러 삼항 표현식이 중첩되어 있는 경우 코드가 복잡해집니다. 다음 예시를 살펴보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 나쁜 예시 - 다수의 중첩된 삼항 표현식</span>
<span class="token keyword">function</span> <span class="token function">UserProfile</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> user<span class="token punctuation">,</span> isAdmin<span class="token punctuation">,</span> isOwner <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token operator">&lt;</span>div<span class="token operator">></span>
       <span class="token punctuation">{</span>isAdmin <span class="token operator">?</span> <span class="token punctuation">(</span>
         <span class="token operator">&lt;</span>p<span class="token operator">></span>Admin<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
       <span class="token punctuation">)</span> <span class="token operator">:</span> isOwner <span class="token operator">?</span> <span class="token punctuation">(</span>
         <span class="token operator">&lt;</span>p<span class="token operator">></span>Owner<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
       <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
         <span class="token operator">&lt;</span>p<span class="token operator">></span>User<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
       <span class="token punctuation">)</span><span class="token punctuation">}</span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 예시에서는 다수의 삼항 표현식이 중첩되어 있어 코드를 이해하기 어렵습니다. 가독성을 높이기 위해 삼항 표현식 대신 함수 또는 컴포넌트를 사용하는 것을 고려해보세요. 다음은 개선된 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 좋은 예시 - 삼항 표현식 대신 함수 사용</span>
<span class="token keyword">function</span> <span class="token function">UserProfile</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> user<span class="token punctuation">,</span> isAdmin<span class="token punctuation">,</span> isOwner <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">function</span> <span class="token function">getUserRole</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>isAdmin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> <span class="token string">'Admin'</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>isOwner<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> <span class="token string">'Owner'</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> <span class="token string">'User'</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token operator">&lt;</span>div<span class="token operator">></span>
       <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span><span class="token function">getUserRole</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>함수를 사용하여 코드를 더 읽기 쉽고 유지 관리하기 쉽게 만들 수 있어요.</p>
<ol start="8">
<li>속성 유형을 정의하지 않거나 속성을 비구조화하지 않은 경우</li>
</ol>
<p>컴포넌트의 속성에 대한 유형을 정의하고 속성을 비구조화하는 것은 좋은 실천 방법이며 코드의 유지 관리 및 안정성을 향상시킵니다. 일상적인 작업에서는 PropTypes 또는 TypeScript와 같은 도구를 사용하여 속성에 유형 정의를 추가하고 속성을 비구조화하여 더욱 명확하게 만들어야 합니다. 다음은 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 나쁜 예 - 정의하지 않은 속성 유형 및 비구조화되지 않은 속성</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token operator">&lt;</span>div<span class="token operator">></span>
       <span class="token operator">&lt;</span>p<span class="token operator">></span>Name<span class="token operator">:</span> <span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
       <span class="token operator">&lt;</span>p<span class="token operator">></span>Age<span class="token operator">:</span> <span class="token punctuation">{</span>props<span class="token punctuation">.</span>age<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 좋은 예 - 속성 유형 정의 및 속성 비구조화</span>
<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">'prop-types'</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token operator">&lt;</span>div<span class="token operator">></span>
       <span class="token operator">&lt;</span>p<span class="token operator">></span>Name<span class="token operator">:</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
       <span class="token operator">&lt;</span>p<span class="token operator">></span>Age<span class="token operator">:</span> <span class="token punctuation">{</span>age<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
Person<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">name</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>
   <span class="token literal-property property">age</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>부동산 유형을 정의하고 속성을 해체함으로써 코드의 가독성을 높이고 잘못된 유형의 속성을 사용할 때 경고를 받을 수 있습니다.</p>
<ol start="9">
<li>대규모 애플리케이션에는 코드 분할을 사용하지 마세요</li>
</ol>
<p>대규모 React 애플리케이션에 대해 초기 로드 성능을 향상시키기 위해 코드 분할(코드 분할)을 고려해야 합니다. 코드 분할을 사용하면 코드가 필요할 때로 나눠져 더 작은 청크로 로드되어 초기 번들 크기가 줄어듭니다. 다음은 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Loadable <span class="token keyword">from</span> <span class="token string">'react-loadable'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> AsyncComponent <span class="token operator">=</span> <span class="token function">Loadable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">loader</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./AsyncComponent'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function-variable function">loading</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>AsyncComponent <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
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
<p>표를 Markdown 형식으로 변경하면 더 보기 편한데요.</p>
<p>코드 분할을 이용하면 특히 대규모 애플리케이션의 로딩 속도를 개선할 수 있어요.</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>React 개발에서 이 아홉 가지 나쁜 습관을 피함으로써 코드 품질, 성능, 유지보수성을 향상시킬 수 있어요. React는 문제를 설명하고 그것들을 피하는 방법에 대한 샘플 코드를 사용하여 일상적인 작업에서 더 높은 품질의 애플리케이션을 만들 수 있도록 도와줄 거예요.</p>
<h1 id="쉽게-이해하기-🚀" tabindex="-1"><a class="header-anchor" href="#쉽게-이해하기-🚀" aria-hidden="true">#</a> 쉽게 이해하기 🚀</h1>
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
<p>각각의 In Plain English 커뮤니티의 일원이 되어 주셔서 감사합니다! 떠나시기 전에:</p>
<ul>
<li>필자를 갈켜주고 팔로우해주세요 👏️️</li>
<li>팔로우하기: X | LinkedIn | YouTube | Discord | Newsletter</li>
<li>다른 플랫폼 방문: Stackademic | CoFeed | Venture | Cubed</li>
<li>PlainEnglish.io에서 더 많은 콘텐츠를 확인하세요</li>
</ul>
</div></template>
