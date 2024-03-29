<template><div><p>당연히요! 여기에 숙련된 개발자에게 유용할 수 있는 20가지 고급 JavaScript 트릭과 기술이 있습니다:</p>
<ul>
<li><strong>기본 값으로 구조 분해 할당:</strong></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 출력: 10, 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<ol start="2">
<li><strong>해체 할당을 사용하여 값 교환하기:</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>b<span class="token punctuation">,</span> a<span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 출력: 2, 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li><strong>객체 병합에 Spread 구문 사용하기:</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> mergedObj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>obj1<span class="token punctuation">,</span> <span class="token operator">...</span>obj2 <span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mergedObj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 출력: { x: 1, y: 2, z: 3 }</span>
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
<ol start="4">
<li><strong>Array.flatMap()을 사용하여 배열 평탄화 및 매핑하기:</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 <span class="token keyword">const</span> flattenedArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>flattenedArr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 출력: [1, 2, 2, 4, 3, 6]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li><strong>옵셔널 체이닝 (?.) 연산자:</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span> <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">'New York'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token operator">?.</span>address<span class="token operator">?.</span>city<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 출력: New York</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<ol start="6">
<li><strong>널리시 연산자(??):</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name <span class="token operator">??</span> <span class="token string">'Anonymous'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 출력: Anonymous</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7">
<li><strong>캐싱 함수 결과를 위한 메모이제이션:</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">memoize</span> <span class="token operator">=</span> <span class="token parameter">fn</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">(</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<ol start="8">
<li><strong>부분 함수 응용을 위한 커링:</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">curry</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> arity <span class="token operator">=</span> fn<span class="token punctuation">.</span>length<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=></span>
  arity <span class="token operator">&lt;=</span> args<span class="token punctuation">.</span>length <span class="token operator">?</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">curry</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> fn<span class="token punctuation">,</span> arity<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9">
<li><strong>WeakMap으로 프라이빗 클래스 필드:</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> privateProps <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    privateProps<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> props <span class="token operator">=</span> privateProps<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    props<span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> props<span class="token punctuation">.</span>count<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
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
<ol start="10">
<li><strong>프락시를 사용하여 객체 작업 가로채기:</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> prop</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>prop <span class="token keyword">in</span> target <span class="token operator">?</span> target<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token string">'찾을 수 없음'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 출력: John</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 출력: 찾을 수 없음</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="11">
<li><strong>Promise.all()을 사용한 병렬 Async/Await:</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">fetchData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> <span class="token punctuation">[</span>result1<span class="token punctuation">,</span> result2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">fetchData1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">fetchData2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">// 결과 처리</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<ol start="12">
<li><strong>IIFE (즉시 호출 함수 표현):</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 <span class="token comment">// 코드 블록</span>
 <span class="token keyword">return</span> <span class="token string">'결과'</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="13">
<li><strong>부분 적용을 위한 Function.prototype.bind():</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
 <span class="token keyword">const</span> add5 <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add5</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 출력: 8</span>
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
<ol start="14">
<li><strong>메모이제이션 라이브러리를 사용한 메모이제이션 (예: lodash.memoize):</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">const</span> memoizedFn <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">memoize</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">*</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">memoizedFn</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 출력: 12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="15">
<li><strong>불변 객체를 위해 Object.freeze() 사용하기:</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'value'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
 Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<ol start="16">
<li><strong>키-값 데이터 구조를 위한 Map 사용:</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'key'</span><span class="token punctuation">,</span> <span class="token string">'value'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'key'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 결과: value</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="17">
<li><strong>Array.reduce()를 사용하여 값 집계:</strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 <span class="token keyword">const</span> sum <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> curr</span><span class="token punctuation">)</span> <span class="token operator">=></span> acc <span class="token operator">+</span> curr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 결과: 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
