<template><div><p>당신의 동료들이 알기 전에 지금 당장 알아야 할 10가지 JavaScript 해킹 방법!</p>
<p><img src="@source/docs/Tech/2024-03-28-10AdvancedJavaScriptTricksforExperiencedDevelopers/img/10AdvancedJavaScriptTricksforExperiencedDevelopers_0.png" alt="이미지"></p>
<p>JavaScript는 웹 개발에 꼭 필요한 강력하고 다재다능한 프로그래밍 언어입니다. 숙련된 개발자들은 종종 코드를 최적화하고 성능을 향상시키는 고급 기술을 습득하는 데 어려움을 겪습니다. 이 글에서는 프로그래밍 스킬을 한 단계 끌어올려줄 10가지 고급 JavaScript 트릭을 살펴보겠습니다.</p>
<h1 id="_1-구조-분해-할당" tabindex="-1"><a class="header-anchor" href="#_1-구조-분해-할당" aria-hidden="true">#</a> 1. 구조 분해 할당</h1>
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
<p>할당 해체는 배열이나 객체에서 값을 추출하여 변수에 할당하는 간편한 방법입니다. 코드를 간소화하고 가독성을 향상시킵니다. 배열의 경우 대괄호 표기법을 사용하고, 객체의 경우 중괄호를 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 배열 해체</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>firstItem<span class="token punctuation">,</span> secondItem<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 객체 해체</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> <span class="token operator">...</span>details <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Lokesh'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token literal-property property">occupation</span><span class="token operator">:</span> <span class="token string">'Developer'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-전개-구문" tabindex="-1"><a class="header-anchor" href="#_2-전개-구문" aria-hidden="true">#</a> 2. 전개 구문</h1>
<p>전개 구문을 사용하여 배열의 요소나 객체의 속성을 다른 배열이나 객체로 확장할 수 있습니다. 이는 복사본을 만들거나 객체를 병합하고 함수에 여러 인수를 전달하는 데 유용합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 배열 복사하기</span>
<span class="token keyword">const</span> originalArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> newArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>originalArray<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 객체 병합하기</span>
<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> mergedObj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>obj1<span class="token punctuation">,</span> <span class="token operator">...</span>obj2 <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-커링" tabindex="-1"><a class="header-anchor" href="#_3-커링" aria-hidden="true">#</a> 3. 커링</h1>
<p>커링은 여러 인수를 전달받는 함수를 각각 하나의 인수를 받는 함수로 변환하는 함수형 프로그래밍 기술입니다. 이를 통해 코드의 재사용성과 조립이 용이해집니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">multiply</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token parameter">b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">*</span> b<span class="token punctuation">;</span>
<span class="token keyword">const</span> multiplyByTwo <span class="token operator">=</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">multiplyByTwo</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 출력: 10</span>
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
<h1 id="_4-메모이제이션" tabindex="-1"><a class="header-anchor" href="#_4-메모이제이션" aria-hidden="true">#</a> 4. 메모이제이션</h1>
<p>메모이제이션은 비싼 함수 호출의 결과를 저장하고 불필요한 계산을 피하는 캐싱 기술입니다. 재귀적이거나 많은 시간이 소요되는 함수의 경우 성능을 크게 향상시킬 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> memoizedFibonacci <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token keyword">in</span> cache<span class="token punctuation">)</span> <span class="token keyword">return</span> cache<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> n<span class="token punctuation">;</span>

    cache<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">fib</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fib</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> cache<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-프로미스와-async-await" tabindex="-1"><a class="header-anchor" href="#_5-프로미스와-async-await" aria-hidden="true">#</a> 5. 프로미스와 Async/Await</h1>
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
<p>약속(Promises)과 Async/Await은 비동기 작업을 더 우아하게 처리하고 코드를 더 가독성 있고 유지보수하기 쉽도록 만드는 데 중요합니다. 이들은 콜백 지옥을 피하고 오류 처리를 개선하는 데 도움을 줍니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Promises 사용</span>
<span class="token keyword">function</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 비동기 작업, 예: API에서 데이터 가져오기</span>
    <span class="token comment">// 작업 결과에 따라 resolve(data) 또는 reject(error)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Async/Await 사용</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://api.example.com/data'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'데이터를 가져오는 중 오류 발생:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">throw</span> error<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-클로저-closures" tabindex="-1"><a class="header-anchor" href="#_6-클로저-closures" aria-hidden="true">#</a> 6. 클로저(Closures)</h1>
<p>클로저는 생성된 환경을 기억하는 함수로, 해당 환경에 더 이상 접근할 수 없어도 기억합니다. 클로저는 비공개 변수를 만드는 데 유용하며 동작 캡슐화에 사용됩니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">++</span>count<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token function">createCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 결과: 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 결과: 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7-함수-합성" tabindex="-1"><a class="header-anchor" href="#_7-함수-합성" aria-hidden="true">#</a> 7. 함수 합성</h1>
<p>함수 합성은 두 개 이상의 함수를 결합하여 새로운 함수를 만드는 과정을 말합니다. 이는 코드 재사용을 촉진하고 복잡한 변환을 단계적으로 만들 수 있도록 돕습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">multiplyByTwo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">compose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>fns</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=></span> fns<span class="token punctuation">.</span><span class="token function">reduceRight</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fn</span><span class="token punctuation">(</span>acc<span class="token punctuation">)</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> addAndMultiply <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span>multiplyByTwo<span class="token punctuation">,</span> add<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">addAndMultiply</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 출력: 8</span>
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
<h1 id="_8-프록시" tabindex="-1"><a class="header-anchor" href="#_8-프록시" aria-hidden="true">#</a> 8. 프록시</h1>
<p>프록시 객체를 사용하면 기본 객체 작업에 대한 사용자 정의 동작을 만들 수 있습니다. 객체 작업을 가로채고 수정할 수 있습니다. 속성에 액세스하거나 메서드를 호출하는 것과 같은 객체 작업을 가로챌 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> prop</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">속성에 액세스 중: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>prop<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> target<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> targetObj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Lokesh'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> proxyObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>targetObj<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxyObj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 출력: 속성에 액세스 중: name \n Lokesh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_9-이벤트-위임" tabindex="-1"><a class="header-anchor" href="#_9-이벤트-위임" aria-hidden="true">#</a> 9. 이벤트 위임</h1>
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
<p>이벤트 위임은 여러 개의 자식에 각각 리스너를 부착하는 대신 부모에 단일 이벤트 리스너를 부착하는 기술입니다. 메모리 사용량을 줄이고 특히 대규모 목록이나 동적으로 생성된 콘텐츠의 성능을 향상시킵니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'parent'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token string">'li'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'li 요소를 클릭했습니다!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_10-웹-워커" tabindex="-1"><a class="header-anchor" href="#_10-웹-워커" aria-hidden="true">#</a> 10. 웹 워커</h1>
<p>웹 워커는 주 스레드와 병행하여 JavaScript 코드를 백그라운드에서 실행할 수 있는 기능입니다. CPU 집약적 작업을 처리하고 UI 멈춤을 방지하며 성능을 향상시키는 데 유용합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 주 스레드에서</span>
<span class="token keyword">const</span> worker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token string">'worker.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
worker<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">'일부 데이터'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// worker.js 파일에서</span>
self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> event<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token comment">// 데이터를 사용하여 무거운 계산을 수행</span>
  <span class="token comment">// 결과를 주 스레드로 다시 전송</span>
  self<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">result</span><span class="token operator">:</span> 계산된결과 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이러한 고급 JavaScript 트릭을 숙달함으로써, 숙련된 개발자들은 더 효율적이고 유지보수가 쉬우며 성능이 우수한 솔루션을 만들 수 있습니다. 이러한 기술은 JavaScript 지식을 입증할 뿐만 아니라, 여러분이 우아하고 섬세하게 복잡한 문제를 해결할 수 있도록 도와줍니다. 언어를 계속 탐험하면서, 능숙한 JavaScript 개발자가 되기 위해서는 실습과 실험이 중요하다는 것을 기억하세요. 즐겁게 코딩하세요!```</p>
</div></template>
