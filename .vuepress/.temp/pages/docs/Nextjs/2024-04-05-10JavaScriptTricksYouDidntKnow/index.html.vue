<template><div><img src="@source/docs/Nextjs/2024-04-05-10JavaScriptTricksYouDidntKnow/img/10JavaScriptTricksYouDidntKnow_0.png" />
<h1 id="_1-별칭을-사용한-구조-분해" tabindex="-1"><a class="header-anchor" href="#_1-별칭을-사용한-구조-분해" aria-hidden="true">#</a> 1. 별칭을 사용한 구조 분해</h1>
<p>구조분해 할당은 강력한 기능이에요. 할당 중에 변수의 별칭을 지정할 수 있다는 건 알고 계셨나요?</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">prop1</span><span class="token operator">:</span> newName1<span class="token punctuation">,</span> <span class="token literal-property property">prop2</span><span class="token operator">:</span> newName2 <span class="token punctuation">}</span> <span class="token operator">=</span> object<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>여기서는 prop1과 prop2를 newName1과 newName2로 이름을 변경하고 있습니다.</p>
<h2 id="_2-성능을-위한-메모이제이션" tabindex="-1"><a class="header-anchor" href="#_2-성능을-위한-메모이제이션" aria-hidden="true">#</a> 2. 성능을 위한 메모이제이션</h2>
<p>메모이제이션은 더 나은 성능을 위해 함수 결과를 캐시하는 기술입니다. 간단한 구현 방법은 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> memoizedFunction <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>args <span class="token keyword">in</span> cache<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cache<span class="token punctuation">[</span>args<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">computeResult</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> cache<span class="token punctuation">[</span>args<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>결과를 캐싱함으로써 중복된 계산을 피할 수 있어요.</p>
<h1 id="_3-함수-합성을-위한-커링" tabindex="-1"><a class="header-anchor" href="#_3-함수-합성을-위한-커링" aria-hidden="true">#</a> 3. 함수 합성을 위한 커링</h1>
<p>커링을 통해 재사용 가능하고 조합 가능한 함수를 만들 수 있어요. 아래 간결한 커링 함수를 확인해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">curry</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=></span>
  args<span class="token punctuation">.</span>length <span class="token operator">>=</span> fn<span class="token punctuation">.</span>length <span class="token operator">?</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>moreArgs</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">curry</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>moreArgs<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>이를 사용하면 부분적으로 적용된 함수를 쉽게 만들 수 있어요.</p>
<h2 id="_4-debouncing-and-throttling" tabindex="-1"><a class="header-anchor" href="#_4-debouncing-and-throttling" aria-hidden="true">#</a> 4. Debouncing and Throttling</h2>
<p>함수 실행 속도를 제어하는 것이 중요해요. 자주 발생하는 이벤트를 효율적으로 처리하기 위해 디바운싱과 스로틀링을 사용해보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">debounce</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timeoutId<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeoutId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    timeoutId <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">throttle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> interval</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> lastExecTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> timeoutId<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> currentTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentTime <span class="token operator">-</span> lastExecTime <span class="token operator">>=</span> interval<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
      lastExecTime <span class="token operator">=</span> currentTime<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeoutId<span class="token punctuation">)</span><span class="token punctuation">;</span>
      timeoutId <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        lastExecTime <span class="token operator">=</span> currentTime<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> interval <span class="token operator">-</span> <span class="token punctuation">(</span>currentTime <span class="token operator">-</span> lastExecTime<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위 기술들은 성능을 향상시키며 과도한 함수 호출을 방지합니다.</p>
<h2 id="_5-동적-객체-키" tabindex="-1"><a class="header-anchor" href="#_5-동적-객체-키" aria-hidden="true">#</a> 5. 동적 객체 키</h2>
<p>대괄호 표기법을 사용하여 동적으로 객체 키를 생성하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> dynamicKey <span class="token operator">=</span> <span class="token string">'key'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>dynamicKey<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">'value'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<p>이것은 런타임에 키가 결정될 때 유용합니다.</p>
<h1 id="_6-옵셔널-체이닝" tabindex="-1"><a class="header-anchor" href="#_6-옵셔널-체이닝" aria-hidden="true">#</a> 6. 옵셔널 체이닝</h1>
<p>옵셔널 체이닝은 많은 검사 과정 없이 중첩된 속성에 쉽게 접근할 수 있도록 도와줍니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 초보자:</span>
<span class="token keyword">let</span> nestedValue<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>object <span class="token operator">&amp;&amp;</span> object<span class="token punctuation">.</span>property <span class="token operator">&amp;&amp;</span> object<span class="token punctuation">.</span>property<span class="token punctuation">.</span>nested<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  nestedValue <span class="token operator">=</span> object<span class="token punctuation">.</span>property<span class="token punctuation">.</span>nested<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  nestedValue <span class="token operator">=</span> <span class="token string">'default'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 전문가:</span>
<span class="token keyword">let</span> nestedValue <span class="token operator">=</span> object<span class="token operator">?.</span>property<span class="token operator">?.</span>nested <span class="token operator">??</span> <span class="token string">'default'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이렇게 하면 &quot;cannot read property 'nested' of undefined&quot; 오류를 방지하고 코드를 더 간결하게 만들 수 있어요.</p>
<h1 id="_7-화살표-함수" tabindex="-1"><a class="header-anchor" href="#_7-화살표-함수" aria-hidden="true">#</a> 7. 화살표 함수</h1>
<p>화살표 함수는 함수를 정의하는 간결한 구문을 제공해줘요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 초보자:</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 전문가:</span>
<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
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
<p>화살표 함수는 짧고 익명의 함수에 특히 유용합니다.</p>
<h1 id="_8-배열-구조분해" tabindex="-1"><a class="header-anchor" href="#_8-배열-구조분해" aria-hidden="true">#</a> 8. 배열 구조분해</h1>
<p>구조 분해는 객체뿐만 아니라 배열에서도 작동합니다!</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 초보자:</span>
<span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> first <span class="token operator">=</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> second <span class="token operator">=</span> array<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 전문가:</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>first<span class="token punctuation">,</span> second<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
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
<p>이를 통해 배열 요소와 작업하기가 더 쉬워집니다.</p>
<h2 id="_9-객체-구조분해" tabindex="-1"><a class="header-anchor" href="#_9-객체-구조분해" aria-hidden="true">#</a> 9. 객체 구조분해</h2>
<p>배열 구조 분해와 유사하게, 이 기술은 객체에 사용됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 초보:</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> user<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> user<span class="token punctuation">.</span>age<span class="token punctuation">;</span>

<span class="token comment">// 전문가:</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<p>객체를 해체하여 간결하게 값을 추출하세요.</p>
<h1 id="_10-유효성-검사를-위한-프록시" tabindex="-1"><a class="header-anchor" href="#_10-유효성-검사를-위한-프록시" aria-hidden="true">#</a> 10. 유효성 검사를 위한 프록시</h1>
<p>Proxy 객체를 사용하여 입력 유효성 검사를 수행하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> validator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prop <span class="token operator">===</span> <span class="token string">'age'</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> value <span class="token operator">!==</span> <span class="token string">'number'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'나이는 숫자여야 합니다.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    target<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>프록시는 속성 할당을 가로챌 수 있고 검증할 수 있어 강력한 입력 제어를 제공합니다.</p>
</div></template>
