<template><div><p>인덱스 시그니처는 우리가 익숙하지 않은 속성을 포함하는 객체를 다루는 데 적합한 방법을 제공합니다. 그 구문은 일반적인 속성을 설명하지만, 표준 속성 이름 대신 키의 유형과 속성을 정의합니다.</p>
<p><img src="@source/docs/Tech/2024-04-23-IndexSignaturesinTypeScript/img/IndexSignaturesinTypeScript_0.png" alt="인덱스 시그니처"></p>
<p>에너지 회사가 고객에게 보낼 수 있는 몇 가지 유틸리티 청구서 예제를 살펴봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> utilityBill1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">electricty</span><span class="token operator">:</span> <span class="token number">80.50</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gas</span><span class="token operator">:</span> <span class="token number">65.05</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> utilityBill2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">electricty</span><span class="token operator">:</span> <span class="token number">102.34</span><span class="token punctuation">,</span>
  <span class="token literal-property property">water</span><span class="token operator">:</span> <span class="token number">91.00</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> utilityBill3 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">electricty</span><span class="token operator">:</span> <span class="token number">89.15</span><span class="token punctuation">,</span>
  <span class="token literal-property property">hotWater</span><span class="token operator">:</span> <span class="token number">44.67</span><span class="token punctuation">,</span>
  <span class="token literal-property property">water</span><span class="token operator">:</span> <span class="token number">97.78</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<p>해당 합계를 계산하는 함수를 만들어보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">calculateBillTotal</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">utilityBill</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> number <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> utilityBill<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  total <span class="token operator">+=</span> utilityBill<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token keyword">return</span> total<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 함수를 올바르게 타입 지정하고 싶습니다. any를 사용하는 대신 number 값을 가진 모든 객체를 받을 수 있도록 하고 싶습니다.</p>
<p>문제를 해결하기 위해 인덱스 시그니처를 사용할 수 있습니다. 다음과 같은 형태를 가지고 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token punctuation">[</span>키<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> number <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이는 객체의 모든 멤버가 문자열 인덱스 시그너처를 준수해야 함을 나타냅니다.</p>
<p>어디에나 'any' 대신 인덱스 시그너처를 추가할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">calculateBillTotal</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">utilityBill</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>키<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> number <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> utilityBill<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    total <span class="token operator">+=</span> utilityBill<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span> 
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> total<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<p>TypeScript에게 utilityBill이 문자열 유형인 키와 숫자 유형인 값으로 구성된 객체여야 한다고 알려줍니다. 이렇게 함으로써 calculateBillTotal 함수에 utilityBill1, utilityBill2 및 utilityBill3 중 어느 것이라도 함수의 인수로 전달될 수 있습니다.</p>
<p>그러나 문자열을 값으로 갖는 객체를 전달하려고 하면 TypeScript가 오류 메시지를 throw할 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> utilityBill <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">electricty</span><span class="token operator">:</span> <span class="token string">'89.15'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">hotWater</span><span class="token operator">:</span> <span class="token number">44.67</span><span class="token punctuation">,</span>
  <span class="token literal-property property">water</span><span class="token operator">:</span> <span class="token number">97.78</span> 
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">calculateBillTotal</span><span class="token punctuation">(</span>utilityBill<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*                 ~~~~~~~~~~~~ '{ electricity: string; }' 유형의 인수는 
    '{ [key: string]: number; }' 유형의 매개변수에 할당할 수 없습니다.
    속성 'electricity'이(가) 인덱스 시그니처와 호환되지 않습니다.
    'string' 유형은 'number' 유형에 할당할 수 없습니다.ts(2345)
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>💡 인덱스 시그니처는 키 유형으로 문자열, 숫자 또는 심볼만을 허용합니다.</p>
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
<h1 id="존재하지-않는-속성" tabindex="-1"><a class="header-anchor" href="#존재하지-않는-속성" aria-hidden="true">#</a> 존재하지 않는 속성</h1>
<p>인덱스 시그니처를 사용할 때 주의해야 할 점 중 하나는 존재하지 않는 속성에 액세스하는 것입니다. ****</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>type UtilityBill <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>key<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">utilityBill</span><span class="token operator">:</span> UtilityBill <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">electricty</span><span class="token operator">:</span> <span class="token number">89.15</span><span class="token punctuation">,</span>
 <span class="token literal-property property">hotWater</span><span class="token operator">:</span> <span class="token number">44.67</span><span class="token punctuation">,</span>
 <span class="token literal-property property">water</span><span class="token operator">:</span> <span class="token number">97.78</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> phoneBill <span class="token operator">=</span> utilityBill<span class="token punctuation">[</span><span class="token string">'phone'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
phoneBill<span class="token punctuation">;</span> <span class="token comment">// 👉🏻 undefined 💥</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예에서 TypeScript는 경고를 표시하지 않습니다. 인덱스 시그니처는 단순히 키 유형을 값 유형에 매핑하기 때문입니다. 따라서 UtilityBill 유형을 올바르게 주석 처리해야 합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>type UtilityBill <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> number <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚨 만약 문자열, 숫자 또는 심볼 이외의 타입으로 인덱스 시그니처를 주석 처리하려고 하면 TypeScript에서 허용되지 않습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>type Utilities <span class="token operator">=</span> <span class="token string">"전기"</span> <span class="token operator">|</span> <span class="token string">"가스"</span> <span class="token operator">|</span> <span class="token string">"온수"</span> <span class="token operator">|</span> <span class="token string">"물"</span><span class="token punctuation">;</span>
type UtilityBill <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> Utilities <span class="token punctuation">]</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token comment">// ~~~ 인덱스 시그니처의 매개변수 타입은 유니언 타입이 될 수 없습니다.</span>
<span class="token comment">// 대신 mapped object type을 사용해 보세요 💥</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="mapped-types" tabindex="-1"><a class="header-anchor" href="#mapped-types" aria-hidden="true">#</a> Mapped Types</h1>
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
<p>Mapped Types은 인덱스 시그니처를 사용하여 리터럴 문자열의 유니언에 속하는 인덱스 문자열을 강제로 지정할 수 있게 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>type Utilities <span class="token operator">=</span> <span class="token string">"전기"</span> <span class="token operator">|</span> <span class="token string">"가스"</span> <span class="token operator">|</span> <span class="token string">"온수"</span> <span class="token operator">|</span> <span class="token string">"물"</span><span class="token punctuation">;</span>

type UtilityBill <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>k <span class="token keyword">in</span> Utilities<span class="token punctuation">]</span><span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="record-keys-type" tabindex="-1"><a class="header-anchor" href="#record-keys-type" aria-hidden="true">#</a> Record&lt;Keys, Type&gt;</h1>
<p>인덱스 시그니처와 유사하게, TypeScript에는 레코드를 주석 처리하는 유틸리티 타입 Record&lt;Keys, Type&gt;이 있습니다. 우리는 더 정확한 유형으로 UtilityBill 타입을 주석 처리하기 위해 Record&lt;Keys, Type&gt;을 사용할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>유틸리티 타입을 정의하고 필요한 값을 할당할 수 있는 유틸리티 빌 객체가 있어요<span class="token punctuation">.</span> 

유틸리티 빌 객체에는 전기세<span class="token punctuation">,</span> 가스요금<span class="token punctuation">,</span> 온수요금<span class="token punctuation">,</span> 수도요금이 포함되어 있어요<span class="token punctuation">.</span>

# 요약

인덱스 시그니처는 속성의 세부 정보가 익숙하지 않은 객체를 관리하는 적합한 방법을 제공해요<span class="token punctuation">.</span> 문법은 일반 속성을 설명하지만 일반적인 속성 이름을 작성하는 대신 키의 유형과 속성을 정의해요<span class="token punctuation">.</span>

인덱스 시그니처를 사용하여 일반적인 개체를 주석 처리할 수 있지만<span class="token punctuation">,</span> 키가 문자열 유형인 객체를 주석 처리하는 경우 Mapped Types 또는 Record<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Keys, Type</span><span class="token template-punctuation string">`</span></span> 유틸리티 타입을 사용하여 키로 사용된 문자열 리터럴의 유니언을 포함하는 객체를 주석 처리할 수 있어요<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
