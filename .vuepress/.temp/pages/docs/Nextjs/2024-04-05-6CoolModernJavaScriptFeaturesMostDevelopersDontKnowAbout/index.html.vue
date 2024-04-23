<template><div><img src="@source/docs/Nextjs/2024-04-05-6CoolModernJavaScriptFeaturesMostDevelopersDontKnowAbout/img/6CoolModernJavaScriptFeaturesMostDevelopersDontKnowAbout_0.png" />
<h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h1>
<p>JavaScript는 지속적으로 발전하고 업그레이드되며, 점점 더 많은 새로운 기능이 코드를 간결하게 만듭니다. 본 문서에서는 새로운 JavaScript 기능 중 여섯 가지를 소개하겠습니다. 함께 공부해보세요.</p>
<h1 id="_1-in-연산자-대신-object-hasown-사용하기" tabindex="-1"><a class="header-anchor" href="#_1-in-연산자-대신-object-hasown-사용하기" aria-hidden="true">#</a> 1. “in” 연산자 대신 “Object.hasOwn” 사용하기</h1>
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
<p>가끔은 객체에 속성이 존재하는지 확인하고 싶을 때 &quot;in&quot; 연산자나 &quot;obj.hasOwnProperty&quot;를 사용합니다. 그러나 두 가지 모두 일부 단점이 있습니다. 함께 살펴보겠습니다.</p>
<p>&quot;in&quot; 연산자</p>
<p>&quot;&quot;in&quot;&quot; 연산자는 지정된 속성이 지정된 객체나 해당 프로토 타입 체인에 있는 경우 true를 반환합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">Person</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"fatfish"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"age"</span> <span class="token keyword">in</span> p1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"name"</span> <span class="token keyword">in</span> p1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true  주의해 주세요</span>
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
<p>obj.hasOwnProperty</p>
<p>해당 메서드는 객체가 지정된 속성을 자체 속성으로 가지고 있는지를 나타내는 부울 값을 반환합니다(상속받은 속성은 제외).</p>
<p>위의 예시를 사용하여:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">Person</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"fatfish"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// fasle  pay attention here</span>
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
<p>&quot;obj.hasOwnProperty&quot;은 프로토타입 체인의 속성을 이미 필터링할 수 있지만, 경우에 따라 안전하지 않고 프로그램에 실패를 일으킬 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Uncaught TypeError: Object.create(...).hasOwnProperty is not a function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Object.hasOwn</p>
<p>걱정 마세요, 이 두 문제를 피하기 위해 &quot;Object.hasOwn&quot;을 사용할 수 있습니다. 이 방법은 &quot;obj.hasOwnProperty&quot; 방법보다 훨씬 편리하고 안전합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> object <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> <span class="token string">'age'</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token keyword">let</span> object2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
Object<span class="token punctuation">.</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>object2<span class="token punctuation">,</span> <span class="token string">'age'</span><span class="token punctuation">)</span> <span class="token comment">// false  'age' 속성은 프로토타입에서 상속됩니다.</span>
<span class="token keyword">let</span> object3 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
Object<span class="token punctuation">.</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>object3<span class="token punctuation">,</span> <span class="token string">'age'</span><span class="token punctuation">)</span> <span class="token comment">// false  "Object.prototype"에서 상속되지 않은 객체</span>

# <span class="token number">2.</span> “#”를 사용하여 비공개 속성을 선언합니다<span class="token punctuation">.</span>

과거에는 <span class="token string">"_"</span>를 사용하여 비공개 속성을 나타냈지만<span class="token punctuation">,</span> 이는 안전하지 않으며 외부에서 여전히 수정될 수 있습니다<span class="token punctuation">.</span>

<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token template-punctuation string">`</span></span>`js
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_money <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
  <span class="token keyword">get</span> <span class="token function">money</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_money
  <span class="token punctuation">}</span>
  <span class="token keyword">set</span> <span class="token function">money</span> <span class="token punctuation">(</span><span class="token parameter">money</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_money <span class="token operator">=</span> money
  <span class="token punctuation">}</span>
  <span class="token function">showMoney</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_money<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'fatfish'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>money<span class="token punctuation">)</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>_money<span class="token punctuation">)</span> <span class="token comment">// 1</span>
p1<span class="token punctuation">.</span>_money <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment">// 외부에서 비공개 속성 _money를 수정합니다.</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>money<span class="token punctuation">)</span> <span class="token comment">// 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>_money<span class="token punctuation">)</span> <span class="token comment">// 2</span>
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
<p>우리는 “#”을 사용하여 진정한 안전한 비공개 속성을 구현할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  #money <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">get</span> <span class="token function">money</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#money<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">set</span> <span class="token function">money</span><span class="token punctuation">(</span><span class="token parameter">money</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#money <span class="token operator">=</span> money<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">showMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>#money<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"fatfish"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>money<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token comment">// p1.#money = 2 // 우리는 이 방법으로 #money를 수정할 수 없습니다</span>
p1<span class="token punctuation">.</span>money <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>money<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>#money<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Private field '#money' must be declared in an enclosing class 에러 발생</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-유용한-숫자-구분자" tabindex="-1"><a class="header-anchor" href="#_3-유용한-숫자-구분자" aria-hidden="true">#</a> 3. 유용한 숫자 구분자</h1>
<p>숫자를 더 읽기 쉽게 만들기 위해 “_”를 사용할 수 있습니다. 멋지죠.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> sixBillion <span class="token operator">=</span> <span class="token number">6000000000</span><span class="token punctuation">;</span>
<span class="token comment">// 이건 읽기가 매우 어렵다</span>
<span class="token keyword">const</span> sixBillion2 <span class="token operator">=</span> <span class="token number">6000_000_000</span><span class="token punctuation">;</span>
<span class="token comment">// 멋지고 읽기 쉽다</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sixBillion2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6000000000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>물론, 실제 계산에도 “_”를 사용할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> sum <span class="token operator">=</span> <span class="token number">1000</span> <span class="token operator">+</span> <span class="token number">6000_000_000</span><span class="token punctuation">;</span> <span class="token comment">// 6000001000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_4-와-삼항-연산자-ternary-operators-를-단순화하기-위해-를-사용하세요" tabindex="-1"><a class="header-anchor" href="#_4-와-삼항-연산자-ternary-operators-를-단순화하기-위해-를-사용하세요" aria-hidden="true">#</a> 4. “&amp;&amp;”와 삼항 연산자(Ternary operators)를 단순화하기 위해 “?.”를 사용하세요.</h1>
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
<p>당신이 아래 예제에 익숙할거라고 생각돼, 우리는 이를 간단하게 할 수 있을까요?</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token operator">?.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> $title <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".title"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> title <span class="token operator">=</span> $title<span class="token operator">?.</span>innerText<span class="token punctuation">;</span>
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
<p>팁</p>
<p>Common spelling of “?.”</p>
<ul>
<li>obj?.prop object properties</li>
<li>obj?.[expr] object properties</li>
<li>func?.(...args) call of function or object method</li>
</ul>
<h1 id="_5-use-instead-of" tabindex="-1"><a class="header-anchor" href="#_5-use-instead-of" aria-hidden="true">#</a> 5. Use “??” instead of “||”</h1>
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
<p>&quot;??“ 대신에 &quot;||&quot;를 사용해도 됩니다. 왼쪽의 값이 null 또는 정의되지 않은 경우 오른쪽의 값이 반환됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"fatfish"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">nullValue</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">zero</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">emptyString</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token literal-property property">falseValue</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>age <span class="token operator">??</span> <span class="token string">"some other default"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// some other default</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>age <span class="token operator">||</span> <span class="token string">"some other default"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// some other default</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>nullValue <span class="token operator">??</span> <span class="token string">"some other default"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// some other default</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>nullValue <span class="token operator">||</span> <span class="token string">"some other default"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// some other default</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>zero <span class="token operator">??</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>zero <span class="token operator">||</span> <span class="token string">"some other default"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// some other default</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>emptyString <span class="token operator">??</span> <span class="token string">"emptyString"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ''</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>emptyString <span class="token operator">||</span> <span class="token string">"some other default"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// some other default</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>falseValue <span class="token operator">??</span> <span class="token string">"falseValue"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>falseValue <span class="token operator">||</span> <span class="token string">"some other default"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// some other default</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-큰-정수-계산-문제-대응으로-bigint-를-사용해-보세요" tabindex="-1"><a class="header-anchor" href="#_6-큰-정수-계산-문제-대응으로-bigint-를-사용해-보세요" aria-hidden="true">#</a> 6. 큰 정수 계산 문제 대응으로 &quot;BigInt&quot;를 사용해 보세요</h1>
<p>JS에서 Number.MAX_SAFE_INTEGER를 초과하는 숫자 계산은 정확하지 않을 수 있습니다.</p>
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
<p>예시:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">53</span><span class="token punctuation">)</span> <span class="token operator">===</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">53</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token comment">// Math.pow(2, 53) => 9007199254740992</span>
<span class="token comment">// Math.pow(2, 53) + 1 => 9007199254740992</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>큰 숫자들을 계산할 때, 계산 오류를 피하기 위해 &quot;BigInt&quot;를 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">BigInt</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">53</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token function">BigInt</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">53</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
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
<h1 id="마지막으로" tabindex="-1"><a class="header-anchor" href="#마지막으로" aria-hidden="true">#</a> 마지막으로</h1>
<p>읽어 주셔서 감사합니다. 귀하의 팔로우를 기대하며 더 많은 고품질 글을 읽을 수 있기를 바랍니다.</p>
<h1 id="솔직히-이야기하자면-🚀" tabindex="-1"><a class="header-anchor" href="#솔직히-이야기하자면-🚀" aria-hidden="true">#</a> 솔직히 이야기하자면 🚀</h1>
<p>In Plain English 커뮤니티의 일원이 되어 주셔서 감사합니다! 떠나시기 전에:</p>
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
<li>작가를 박수하고 팔로우해주세요! 👏️️</li>
<li>팔로우하기: X | LinkedIn | YouTube | Discord | Newsletter</li>
<li>다른 플랫폼 방문하기: Stackademic | CoFeed | Venture | Cubed</li>
<li>더 많은 컨텐츠는 PlainEnglish.io에서 확인하세요</li>
</ul>
</div></template>
