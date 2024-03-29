<template><div><img src="@source/docs/Tech/2024-03-28-18JavaScriptTipsYouShouldKnowforCleanandEfficientCode/img/18JavaScriptTipsYouShouldKnowforCleanandEfficientCode_0.png" />
<p>안녕하세요! 이 글에서는 깨끗하고 효율적인 코드를 작성하는 데 알아야 할 18가지 JavaScript 팁과 예제를 공유하겠습니다.</p>
<p>시작해봅시다!🚀</p>
<h1 id="화살표-함수" tabindex="-1"><a class="header-anchor" href="#화살표-함수" aria-hidden="true">#</a> 화살표 함수</h1>
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
<p>화살표 함수를 사용하여 함수 선언을 간단하게 할 수 있어요.</p>
<p>예를 들면:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 화살표 함수</span>
<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="array-from" tabindex="-1"><a class="header-anchor" href="#array-from" aria-hidden="true">#</a> Array.from()</h1>
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
<p>Array.from() 메서드는 모든 반복 가능한 객체를 배열로 변환하는 데 사용할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">"Hello!"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Output: ['H', 'e', 'l', 'l', 'o', '!']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="console-table-을-사용하여-데이터-표시" tabindex="-1"><a class="header-anchor" href="#console-table-을-사용하여-데이터-표시" aria-hidden="true">#</a> console.table()을 사용하여 데이터 표시</h1>
<p>콘솔에서 데이터를 조직화하거나 테이블 형식으로 표시하려면 console.table()을 사용할 수 있어요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
    <span class="token literal-property property">profession</span><span class="token operator">:</span> <span class="token string">'Programmer'</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>출력:</p>
<img src="@source/docs/Tech/2024-03-28-18JavaScriptTipsYouShouldKnowforCleanandEfficientCode/img/18JavaScriptTipsYouShouldKnowforCleanandEfficientCode_1.png" />
<h1 id="const-및-let을-효율적으로-사용하기" tabindex="-1"><a class="header-anchor" href="#const-및-let을-효율적으로-사용하기" aria-hidden="true">#</a> const 및 let을 효율적으로 사용하기</h1>
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
<p>변수를 더 잘 정리하려면 재할당되지 않을 변수에는 const를 사용하고, 재할당될 변수에는 let을 사용하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="구조-분해를-사용하여-객체-속성-추출하기" tabindex="-1"><a class="header-anchor" href="#구조-분해를-사용하여-객체-속성-추출하기" aria-hidden="true">#</a> 구조 분해를 사용하여 객체 속성 추출하기</h1>
<p>객체에서 속성을 추출할 때 구조 분해를 사용하면 코드의 가독성을 높일 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
    <span class="token literal-property property">profession</span><span class="token operator">:</span> <span class="token string">'Programmer'</span>
<span class="token punctuation">}</span>

<span class="token comment">//Instead of this 👇</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//Use this👇</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span> age<span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="논리-or-연산자를-사용하여-기본값-설정하기" tabindex="-1"><a class="header-anchor" href="#논리-or-연산자를-사용하여-기본값-설정하기" aria-hidden="true">#</a> 논리 OR 연산자를 사용하여 기본값 설정하기</h1>
<p>|| 연산자를 사용하여 기본값을 쉽게 설정할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  name <span class="token operator">=</span> name <span class="token operator">||</span> <span class="token string">'사람'</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">안녕하세요, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">님!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//출력: 안녕하세요, 사람님!</span>
<span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">"John"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//출력: 안녕하세요, John님!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="배열-손쉽게-비우기" tabindex="-1"><a class="header-anchor" href="#배열-손쉽게-비우기" aria-hidden="true">#</a> 배열 손쉽게 비우기</h1>
<p>배열을 간단히 비울 수 있어요. 그냥 length 속성을 사용하면 됩니다.</p>
<p>예를 들면:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
numbers<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//결과: []</span>
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
<h1 id="json-parse" tabindex="-1"><a class="header-anchor" href="#json-parse" aria-hidden="true">#</a> JSON.parse()</h1>
<p>JSON.parse()을 사용하면 JSON 문자열을 JavaScript 객체로 변환할 수 있어요. 이를 통해 데이터 조작이 원활해집니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> jsonStr <span class="token operator">=</span> <span class="token string">'{"name": "John", "age": 25}'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">//결과: {name: 'John', age: 25}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="map-함수" tabindex="-1"><a class="header-anchor" href="#map-함수" aria-hidden="true">#</a> Map() 함수</h1>
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
<p>새로운 배열에서 원본 배열을 수정하지 않고 요소를 변환하는 map() 함수를 사용해보세요.</p>
<p>예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> doubled <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">num</span> <span class="token operator">=></span> num <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//결과: [1, 2, 3, 4]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doubled<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//결과: [2, 4, 6, 8]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="object-seal" tabindex="-1"><a class="header-anchor" href="#object-seal" aria-hidden="true">#</a> Object.seal()</h1>
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
<p>개체에 속성을 추가하거나 제거하는 것을 방지하기 위해 Object.seal() 메서드를 사용할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
person<span class="token punctuation">.</span>profession <span class="token operator">=</span> <span class="token string">"Programmer"</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Output: {name: 'John', age: 25}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="object-freeze" tabindex="-1"><a class="header-anchor" href="#object-freeze" aria-hidden="true">#</a> Object.freeze()</h1>
<p>개체에 대한 변경을 방지하려면 추가, 수정 또는 삭제를 포함한 모든 변경을 방지하기 위해 Object.freeze() 메서드를 사용할 수 있어요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"Mark"</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Output: {name: 'John', age: 25}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="배열에서-중복-제거하기" tabindex="-1"><a class="header-anchor" href="#배열에서-중복-제거하기" aria-hidden="true">#</a> 배열에서 중복 제거하기</h1>
<p>Set을 사용하여 배열에서 중복된 요소를 제거할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arrWithDuplicates <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> arrWithoutDuplicates <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arrWithDuplicates<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrWithoutDuplicates<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">//Output: [1, 12, 2, 13, 4]</span>
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
<h1 id="디스트럭처링을-사용하여-값-교환하기" tabindex="-1"><a class="header-anchor" href="#디스트럭처링을-사용하여-값-교환하기" aria-hidden="true">#</a> 디스트럭처링을 사용하여 값 교환하기</h1>
<p>디스트럭처링을 사용하여 두 변수를 쉽게 교환할 수 있어요.</p>
<p>예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">13</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>y<span class="token punctuation">,</span> x<span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//13</span>
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
<h1 id="spread-operator" tabindex="-1"><a class="header-anchor" href="#spread-operator" aria-hidden="true">#</a> Spread Operator</h1>
<p>스프레드 연산자를 사용하여 배열을 효율적으로 복사하거나 병합할 수 있어요.</p>
<p>예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr2<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> mergedArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr1<span class="token punctuation">,</span> <span class="token operator">...</span>arr2<span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[9, 8, 7]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mergedArr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[1, 2, 3, 9, 8, 7]</span>
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
<h1 id="템플릿-삽입" tabindex="-1"><a class="header-anchor" href="#템플릿-삽입" aria-hidden="true">#</a> 템플릿 삽입</h1>
<p>템플릿 리터럴을 활용하여 문자열 삽입을 하고 코드의 가독성을 높여보세요.</p>
<p>예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'John'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
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
<h1 id="삼항-연산자" tabindex="-1"><a class="header-anchor" href="#삼항-연산자" aria-hidden="true">#</a> 삼항 연산자</h1>
<p>삼항 연산자를 사용하면 조건문을 간단하게 작성할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

<span class="token comment">//이렇게👇</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>age<span class="token operator">>=</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"운전할 수 있어요"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"운전할 수 없어요"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//이렇게 사용할 수 있어요👇</span>
age <span class="token operator">>=</span> <span class="token number">18</span> <span class="token operator">?</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"운전할 수 있어요"</span><span class="token punctuation">)</span> <span class="token operator">:</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"운전할 수 없어요"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="가-아닌-를-사용하세요" tabindex="-1"><a class="header-anchor" href="#가-아닌-를-사용하세요" aria-hidden="true">#</a> ==가 아닌 ===를 사용하세요</h1>
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
<p>느슨한 동등성(==) 대신 엄격한 동등성(===)을 사용하여 형 변환 문제를 방지하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> num1 <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> num2 <span class="token operator">=</span> <span class="token string">'5'</span><span class="token punctuation">;</span>

<span class="token comment">// == 대신에 사용</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>num1 <span class="token operator">==</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'True'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'False'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// === 사용</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>num1 <span class="token operator">===</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'True'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'False'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="의미-있는-변수-및-함수-이름-사용" tabindex="-1"><a class="header-anchor" href="#의미-있는-변수-및-함수-이름-사용" aria-hidden="true">#</a> 의미 있는 변수 및 함수 이름 사용</h1>
<p>의미 있는 변수 및 함수 이름을 사용하여 코드의 가독성과 유지보수성을 향상시키세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 이렇게 변수를 선언하지 마세요</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>

<span class="token comment">// 설명적인 이름을 사용하세요</span>
<span class="token keyword">const</span> numberOfTips <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>오늘은 여기까지 입니다.</p>
<p>도움이 되었길 바라요.</p>
<p>읽어주셔서 감사합니다.</p>
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
</div></template>
