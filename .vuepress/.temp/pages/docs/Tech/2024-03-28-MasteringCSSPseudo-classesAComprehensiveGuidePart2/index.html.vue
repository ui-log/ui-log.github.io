<template><div><p><img src="@source/docs/Tech/2024-03-28-MasteringCSSPseudo-classesAComprehensiveGuidePart2/img/MasteringCSSPseudo-classesAComprehensiveGuidePart2_0.png" alt="MasteringCSSPseudo-classesAComprehensiveGuidePart2_0"></p>
<p>CSS(가상 클래스)는 웹 디자인의 기본을 이루며, 개발자들에게 웹 페이지의 모양과 레이아웃을 제어하는 능력을 제공합니다. CSS가 제공하는 여러 기능 중에서, 가상 클래스는 다양한 조건과 상태에 따라 요소를 대상으로 하는 강력한 도구로 높게 평가됩니다.</p>
<p>이 안내서에서는 몇 가지 더 많은 CSS 가상 클래스에 대해 깊이 파헤치며, 그 문법, 응용 및 사용법을 마스터할 수 있도록 실용적인 예제를 제공할 것입니다.</p>
<h1 id="사용된-css-가상-클래스" tabindex="-1"><a class="header-anchor" href="#사용된-css-가상-클래스" aria-hidden="true">#</a> 사용된 CSS 가상 클래스:</h1>
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
<li>:checked</li>
<li>:disabled</li>
<li>:enabled</li>
<li>:lang(language)</li>
<li>:not(selector)</li>
<li>:empty</li>
<li>:placeholder-shown</li>
<li>:required</li>
<li>:optional</li>
<li>:root</li>
<li>:valid</li>
<li>:invalid</li>
</ul>
<h2 id="_1-checked" tabindex="-1"><a class="header-anchor" href="#_1-checked" aria-hidden="true">#</a> 1. :checked</h2>
<p>CSS에서의 :checked 의사 클래스는 현재 선택되거나 확인된 체크박스, 라디오 버튼 또는 선택 드롭다운의 옵션과 같은 폼 요소에 스타일을 적용하는 데 사용됩니다.</p>
<p>이 의사 클래스를 사용하면 요소의 확인된 상태에 따라 스타일을 적용할 수 있습니다.</p>
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
<p>사용자가 선택한 경우, 체크박스, 라디오 버튼 또는 선택 드롭다운의 옵션과 같은 입력 요소에 스타일을 적용합니다.</p>
<hr>
<p>체크박스가 있는 간단한 HTML 구조를 고려해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"checkbox"</span> id<span class="token operator">=</span><span class="token string">"checkbox1"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"checkbox1"</span><span class="token operator">></span>Checkbox <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
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
<p>지금 사용자가 체크박스를 선택했을 때 해당 체크박스를 스타일링하고 싶다면, :checked를 사용할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 사용자가 체크박스를 선택했을 때 스타일을 지정합니다 */</span>
input<span class="token punctuation">[</span>type<span class="token operator">=</span><span class="token string">"checkbox"</span><span class="token punctuation">]</span><span class="token operator">:</span>checked <span class="token operator">+</span> label <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #007bff<span class="token punctuation">;</span> <span class="token comment">/* 라벨 텍스트 색상을 파란색으로 변경합니다 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서, 체크박스가 선택되면 인접한 라벨의 텍스트 색상이 파란색으로 변경됩니다.</p>
<p>— — —</p>
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
<p>:checked 가상 클래스는 셀렉트 드롭다운에서 라디오 버튼 옵션과 함께 사용할 수도 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"radio"</span> id<span class="token operator">=</span><span class="token string">"radio1"</span> name<span class="token operator">=</span><span class="token string">"group"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"radio1"</span><span class="token operator">></span>옵션 <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>

<span class="token operator">&lt;</span>select<span class="token operator">></span>
  <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token string">"option1"</span> id<span class="token operator">=</span><span class="token string">"option1"</span><span class="token operator">></span>옵션 <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>
  <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token string">"option2"</span> id<span class="token operator">=</span><span class="token string">"option2"</span><span class="token operator">></span>옵션 <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>select<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 라디오 버튼을 선택했을 때 스타일 적용 */</span>
input<span class="token punctuation">[</span>type<span class="token operator">=</span><span class="token string">"radio"</span><span class="token punctuation">]</span><span class="token operator">:</span>checked <span class="token operator">+</span> label <span class="token punctuation">{</span>
  font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span> <span class="token comment">/* 라벨 텍스트를 볼드체로 변경 */</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 셀렉트 옵션을 선택했을 때 스타일 적용 */</span>
<span class="token literal-property property">option</span><span class="token operator">:</span>checked <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #f0f0f0<span class="token punctuation">;</span> <span class="token comment">/* 배경색을 연한 회색으로 변경 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서는 선택된 라디오 버튼의 라벨 텍스트가 굵어지고, 셀렉트 드롭다운에서 선택된 옵션의 배경색이 연한 회색으로 변경됩니다.</p>
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
<p>:checked을 사용하면 사용자가 선택한 옵션을 나타내는 시각적 피드백을 제공하여 사용성과 전반적인 사용자 경험을 향상시킬 수 있습니다.</p>
<h2 id="_2-disabled" tabindex="-1"><a class="header-anchor" href="#_2-disabled" aria-hidden="true">#</a> 2. :disabled</h2>
<p>CSS의 :disabled 가상 클래스는 비활성화된 폼 요소에 스타일을 적용하는 데 사용됩니다.</p>
<p>이 가상 클래스를 사용하면 개발자들이 활성 상태인 폼 요소와 비활성 상태인 요소를 시각적으로 구별할 수 있습니다.</p>
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
<p>입력 요소, 버튼, 선택 드롭다운 및 기타 폼 컨트롤에 스타일을 적용합니다. 이들은 disabled 속성이 설정된 경우에 해당합니다.</p>
<hr>
<p>비활성화된 입력 필드와 비활성화된 버튼이 있는 간단한 HTML 양식을 고려해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> value<span class="token operator">=</span><span class="token string">"비활성화된 입력"</span> disabled<span class="token operator">></span>
<span class="token operator">&lt;</span>button disabled<span class="token operator">></span>비활성화된 버튼<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
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
<p>이제 만약 비활성화된 입력 필드와 버튼의 스타일을 변경하고 싶다면, :disabled를 사용할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 비활성화된 폼 요소 스타일 지정 */</span>
<span class="token literal-property property">input</span><span class="token operator">:</span>disabled <span class="token punctuation">{</span>
  <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">;</span> <span class="token comment">/* 투명도 감소 */</span>
  <span class="token literal-property property">cursor</span><span class="token operator">:</span> not<span class="token operator">-</span>allowed<span class="token punctuation">;</span> <span class="token comment">/* 커서를 'not-allowed'로 변경 */</span>
<span class="token punctuation">}</span>

<span class="token literal-property property">button</span><span class="token operator">:</span>disabled <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #dddddd<span class="token punctuation">;</span> <span class="token comment">/* 배경색을 연한 회색으로 변경 */</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">999999</span><span class="token punctuation">;</span> <span class="token comment">/* 텍스트 색상을 회색으로 변경 */</span>
  <span class="token literal-property property">cursor</span><span class="token operator">:</span> not<span class="token operator">-</span>allowed<span class="token punctuation">;</span> <span class="token comment">/* 커서를 'not-allowed'로 변경 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서는 비활성화된 입력 필드는 투명도가 감소되고 'not-allowed' 커서를 가지며, 비활성화된 버튼은 연한 회색 배경색, 회색 텍스트 색상 및 'not-allowed' 커서를 가질 거에요.</p>
<p>— — —</p>
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
<p>:disabled 가상 클래스는 셀렉트 드롭다운과 체크박스와 같은 다른 비활성화된 폼 요소에도 스타일을 적용하는 데 사용할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>select disabled<span class="token operator">></span>
  <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token string">"1"</span><span class="token operator">></span>옵션 <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>
  <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token string">"2"</span><span class="token operator">></span>옵션 <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>select<span class="token operator">></span>

<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"checkbox"</span> disabled<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 비활성화된 셀렉트 드롭다운 스타일 지정 */</span>
<span class="token literal-property property">select</span><span class="token operator">:</span>disabled <span class="token punctuation">{</span>
  <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">;</span> <span class="token comment">/* 투명도 조절 */</span>
  <span class="token literal-property property">cursor</span><span class="token operator">:</span> not<span class="token operator">-</span>allowed<span class="token punctuation">;</span> <span class="token comment">/* 커서를 'not-allowed'로 변경 */</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 비활성화된 체크박스 스타일 지정 */</span>
input<span class="token punctuation">[</span>type<span class="token operator">=</span><span class="token string">"checkbox"</span><span class="token punctuation">]</span><span class="token operator">:</span>disabled <span class="token punctuation">{</span>
  <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">;</span> <span class="token comment">/* 투명도 조절 */</span>
  <span class="token literal-property property">cursor</span><span class="token operator">:</span> not<span class="token operator">-</span>allowed<span class="token punctuation">;</span> <span class="token comment">/* 커서를 'not-allowed'로 변경 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서 비활성화된 셀렉트 드롭다운과 체크박스는 투명도가 줄어들고 'not-allowed' 커서가 됩니다.</p>
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
<p><code v-pre>&lt;table&gt;</code> 태그를 Markdown 형식으로 변경하면, 표를 더 읽기 쉽게 만들 수 있어요.</p>
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
<p>비활성화되지 않은 입력 요소, 버튼 또는 기타 양식 컨트롤에 스타일을 적용합니다.</p>
<p>— — —</p>
<p>간단한 HTML 양식을 고려해보세요. 입력 필드와 버튼이 있는 양식:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> placeholder<span class="token operator">=</span><span class="token string">"텍스트를 입력하세요"</span> disabled<span class="token operator">></span>
<span class="token operator">&lt;</span>button<span class="token operator">></span>클릭하세요<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
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
<p>이 예시에서는 disabled 속성을 사용하여 입력 필드를 비활성화하고 버튼은 활성화된 상태를 유지합니다.</p>
<hr>
<p>이제, 비활성화된 입력 필드와 스타일을 다르게 적용하고 싶다면 :enabled를 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 활성화된 버튼에 스타일 적용 */</span>
<span class="token literal-property property">button</span><span class="token operator">:</span>enabled <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #007bff<span class="token punctuation">;</span> <span class="token comment">/* 배경색을 파란색으로 변경 */</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #ffffff<span class="token punctuation">;</span> <span class="token comment">/* 텍스트 색상을 흰색으로 변경 */</span>
  <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span> <span class="token comment">/* 커서를 포인터로 변경 */</span>
<span class="token punctuation">}</span>
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
<p>이 예시에서 버튼은 활성화되었을 때 파란 배경색, 흰색 텍스트 색 및 포인터 커서가 표시됩니다.</p>
<p>— — —</p>
<p>:enabled 으로 유사 클래스를 사용하여 다른 활성화된 폼 요소를 스타일링할 수도 있습니다. 이는 입력 필드나 선택 드롭다운과 같은 요소에 대한 스타일을 지정할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 활성화된 입력 필드에 스타일 지정 */</span>
<span class="token literal-property property">input</span><span class="token operator">:</span>enabled <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid #007bff<span class="token punctuation">;</span> <span class="token comment">/* 파란 테두리 추가 */</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 활성화된 선택 드롭다운에 스타일 지정 */</span>
<span class="token literal-property property">select</span><span class="token operator">:</span>enabled <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #f2f2f2<span class="token punctuation">;</span> <span class="token comment">/* 배경색을 연한 회색으로 변경 */</span>
<span class="token punctuation">}</span>
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
<p>이러한 예에서 활성화된 입력 필드는 파란 테두리가 있고, 활성화된 드롭다운은 연한 회색 배경색이 있습니다.</p>
<p>:enabled를 사용하여 현재 상호작용 가능한 폼 요소를 시각적으로 표시함으로써 사용성을 향상시키고 전체 사용자 경험을 개선할 수 있습니다.</p>
<h2 id="_4-lang-language" tabindex="-1"><a class="header-anchor" href="#_4-lang-language" aria-hidden="true">#</a> 4. :lang(language)</h2>
<p>CSS의 :lang 가상 클래스는 부모 또는 조상 요소의 lang 속성에서 지정된 언어를 기반으로 요소를 스타일링하는 데 사용됩니다.</p>
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
<p>이 pseudo-class는 요소에 특정 언어를 기반으로 한 스타일을 적용할 수 있게 해줍니다.</p>
<p>이는 서로 다른 언어로 된 텍스트를 서로 다르게 스타일링하거나, 다국어 웹사이트에 특정 스타일을 제공하는 데 자주 사용됩니다.</p>
<p>— — —</p>
<p>다음은 영어 텍스트가 포함된 단락 (<code v-pre>p</code>) 요소와 프랑스어 텍스트가 포함된 다른 단락이 있는 간단한 HTML 구조를 고려해보세요:</p>
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
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>This is a paragraph in English.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fr<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Ceci est un paragraphe en français.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>이제, 언어에 따라 단락을 스타일링하려면 :lang:을 사용할 수 있습니다.</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* 영어로 작성된 단락에 스타일 적용 */</span>
<span class="token selector">p:lang(en)</span> <span class="token punctuation">{</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span> <span class="token comment">/* 영어 텍스트를 이탤릭체로 설정 */</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 프랑스어로 작성된 단락에 스타일 적용 */</span>
<span class="token selector">p:lang(fr)</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span> <span class="token comment">/* 프랑스어 텍스트를 굵게 설정 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서, 영어로 작성된 단락은 이탤릭체로 설정되고, 프랑스어로 작성된 단락은 굵게 표시됩니다.</p>
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
<hr>
<p>:lang 가상 클래스는 특정 언어 변형 또는 방언을 타겟팅하는 데에도 사용될 수 있어요.</p>
<p>예를 들어, 캐나다 프랑스어 (fr-CA)로 작성된 단락을 스타일링하려면 다음을 사용할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 캐나다 프랑스어로 작성된 단락 스타일링하기 */</span>
<span class="token literal-property property">p</span><span class="token operator">:</span><span class="token function">lang</span><span class="token punctuation">(</span><span class="token parameter">fr<span class="token operator">-</span><span class="token constant">CA</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #ff0000<span class="token punctuation">;</span> <span class="token comment">/* 텍스트 색상을 빨강으로 변경 */</span>
<span class="token punctuation">}</span>
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
<p>이 예시에서 캐나다 불어로 쓰인 단락은 빨간 글자색으로 표시됩니다.</p>
<p>:lang을 사용하면 웹 사이트 콘텐츠의 스타일링을 다른 언어에 맞게 조정할 수 있어서, 다른 언어를 구사하는 사용자들에게 더 나은 경험을 제공할 수 있습니다.</p>
<h2 id="_5-not-selector" tabindex="-1"><a class="header-anchor" href="#_5-not-selector" aria-hidden="true">#</a> 5. :not(selector)</h2>
<p>CSS의 :not 가상 클래스는 지정된 선택기와 일치하지 않는 요소를 선택하는 데 사용됩니다.</p>
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
<p>개발자들이 특정 기준을 충족하지 않는 요소에 스타일을 적용할 수 있도록 해주어 더 정확한 스타일링 제어를 제공합니다.</p>
<p>이는 클래스, ID 또는 유형에 따라 요소를 대상으로하고, 그들을 스타일링에서 제외할 수 있도록 사용할 수 있습니다.</p>
<p>— — —</p>
<p>항목 목록이 포함된 간단한 HTML 구조를 고려해보세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>ul<span class="token operator">></span>
  <span class="token operator">&lt;</span>li <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"item"</span><span class="token operator">></span>항목 <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
  <span class="token operator">&lt;</span>li<span class="token operator">></span>항목 <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
  <span class="token operator">&lt;</span>li <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"item"</span><span class="token operator">></span>항목 <span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
  <span class="token operator">&lt;</span>li<span class="token operator">></span>항목 <span class="token number">4</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 &quot;item&quot; 클래스가 없는 리스트 항목만 스타일링하려면 :not:을 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* "item" 클래스가 없는 리스트 항목에 스타일 적용 */</span>
<span class="token literal-property property">li</span><span class="token operator">:</span><span class="token function">not</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">.</span>item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">999999</span><span class="token punctuation">;</span> <span class="token comment">/* 텍스트 색상을 회색으로 변경 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서 &quot;item&quot; 클래스가 없는 리스트 항목의 텍스트 색상이 회색으로 변경됩니다.</p>
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
<hr>
<p>:not 가상 클래스는 타입이나 다른 속성에 따라 특정 요소를 제외할 때도 사용될 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* "submit" 타입을 갖지 않는 input 필드에 스타일 적용하기 */</span>
<span class="token literal-property property">input</span><span class="token operator">:</span><span class="token function">not</span><span class="token punctuation">(</span><span class="token punctuation">[</span>type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid #cccccc<span class="token punctuation">;</span> <span class="token comment">/* 테두리 추가 */</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 5px<span class="token punctuation">;</span> <span class="token comment">/* 패딩 추가 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서는 &quot;submit&quot; 타입을 갖지 않는 모든 input 필드에는 테두리와 패딩이 적용됩니다.</p>
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
<p><strong>:not</strong>을 사용하면 특정 요소를 대상으로 지정하면서 다른 요소는 제외할 수 있어 CSS 스타일링에서 더 유연성을 제공하고 웹 페이지 전반에 일관된 디자인을 보장할 수 있습니다.</p>
<h2 id="_6-empty" tabindex="-1"><a class="header-anchor" href="#_6-empty" aria-hidden="true">#</a> 6. :empty</h2>
<p>CSS의 <strong>:empty</strong> 가상 클래스는 자식 요소가 없는 요소, 텍스트 노드 및 공백을 포함한 요소를 선택하고 스타일을 적용하는 데 사용됩니다.</p>
<p>이 가상 클래스를 사용하면 내용이 전혀 포함되지 않은 요소에 스타일을 적용할 수 있습니다.</p>
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
<p>그것은 열림 태그와 닫힘 태그 사이에 콘텐츠가 포함되어 있지 않은 요소를 대상으로합니다. 텍스트 노드, 공백 또는 다른 요소를 포함합니다.</p>
<p>— — —</p>
<p>div 요소가 포함된 간단한 HTML 구조를 고려해 보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
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
<p>이제 div 요소를 empty 일 때 스타일링하고 싶다면, :empty 를 사용할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 빈 div 요소에 스타일을 적용합니다 */</span>
<span class="token literal-property property">div</span><span class="token operator">:</span>empty <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #f2f2f2<span class="token punctuation">;</span> <span class="token comment">/* 배경색을 연한 회색으로 변경 */</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 1px dashed #<span class="token number">999999</span><span class="token punctuation">;</span> <span class="token comment">/* 대시로 테두리 추가 */</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span> <span class="token comment">/* 여백 추가 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서 div 요소는 empty 상태일 때 연한 회색 배경색, 대시로 된 테두리, 그리고 패딩이 적용됩니다.</p>
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
<p>:empty 가상 클래스는 비어있는 컨테이너나 동적 콘텐츠의 자리 표시자와 같은 플레이스홀더를 스타일링하는 데 유용할 수 있습니다.</p>
<p>예를 들어, 빈 <code v-pre>div</code>를 드래그 앤 드롭 기능의 드롭 존으로 스타일링하거나 동적으로 로드된 콘텐츠의 자리 표시자로 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"drop-zone"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 빈 드롭 존에 스타일 추가 */</span>
<span class="token punctuation">.</span>drop<span class="token operator">-</span>zone<span class="token operator">:</span>empty <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 2px dashed #007bff<span class="token punctuation">;</span> <span class="token comment">/* 테두리 색을 파란색으로 변경 */</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span> <span class="token comment">/* 높이 설정 */</span>
<span class="token punctuation">}</span>
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
<p>이 예시에서 빈 드롭 영역은 파란 점선 테두리와 지정된 높이를 가지고 있어 사용자가 상호 작용할 수 있도록 시각적 신호를 제공합니다.</p>
<p>:empty를 사용하여 빈 요소를 스타일링하여 사용자 경험을 향상시킬 수 있으며, 시각적으로 더 매력적으로 만들거나 사용자에게 추가적인 맥락을 제공할 수 있습니다.</p>
<h2 id="_7-placeholder-shown" tabindex="-1"><a class="header-anchor" href="#_7-placeholder-shown" aria-hidden="true">#</a> 7. :placeholder-shown</h2>
<p>CSS의 :placeholder-shown 가상 클래스는 입력 요소가 현재 플레이스홀더 텍스트를 표시할 때 스타일을 지정하는 데 사용됩니다.</p>
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
<p>이 의사 클래스는 입력 요소에 스타일을 적용할 수 있게 해줍니다. 이것은 자리 표시자 텍스트가 표시되는지 여부에 따라서 스타일을 적용합니다.</p>
<p>사용자 입력에 의해 덮어씌워지지 않으면 입력 요소에 스타일을 적용합니다.</p>
<hr>
<p>간단한 HTML 입력 필드를 고려해 보세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> placeholder<span class="token operator">=</span><span class="token string">"이름을 입력해주세요"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이제, 입력 필드의 플레이스홀더 텍스트가 표시될 때 해당 필드의 스타일을 변경하려면 :placeholder-shown을 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* placeholder 텍스트가 표시될 때 입력 필드를 스타일링합니다 */</span>
<span class="token literal-property property">input</span><span class="token operator">:</span>placeholder<span class="token operator">-</span>shown <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token comment">/* 테두리 추가 */</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">999</span><span class="token punctuation">;</span> <span class="token comment">/* 텍스트 색상을 회색으로 변경 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서는 입력 필드가 플레이스홀더 텍스트가 표시될 때 회색 테두리와 텍스트 색상을 가지게 됩니다.</p>
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
<hr>
<p>:placeholder-shown 으사족 클래스는 placeholder 텍스트가 표시될 때 사용자에게 데이터를 입력하는 위치를 시각적으로 알려주기 위한 입력 필드를 스타일링하는 데 유용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 입력 필드를 placeholder 텍스트가 표시될 때 스타일링합니다 */</span>
<span class="token literal-property property">input</span><span class="token operator">:</span>placeholder<span class="token operator">-</span>shown <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #f2f2f2<span class="token punctuation">;</span> <span class="token comment">/* 배경색을 연한 회색으로 변경 */</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span> <span class="token comment">/* 패딩 추가 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서는 placeholder 텍스트가 표시될 때 입력 필드의 배경색이 연한 회색이되고 패딩이 추가됩니다.</p>
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
<p><code v-pre>:placeholder-shown</code>을 사용하면 사용자가 입력 데이터를 어디에 넣어야 하는지 시각적으로 알려주는 방법으로 사용자 경험을 향상시킬 수 있어요.</p>
<h2 id="_8-required" tabindex="-1"><a class="header-anchor" href="#_8-required" aria-hidden="true">#</a> 8. :required</h2>
<p>CSS의 <code v-pre>:required</code> 의사 클래스는 필수 속성이 설정된 폼 요소를 스타일링하는 데 사용됩니다.</p>
<p>이 의사 클래스를 사용하면 필수 폼 요소에 대해 특정 스타일을 적용하여 양식의 필수 필드에 대한 사용자에게 시각적인 힌트를 제공할 수 있습니다.</p>
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
<p>사용자가 양식을 제출하기 전에 입력해야 하는 텍스트 필드, 체크박스 및 라디오 버튼과 같은 입력 요소에 스타일을 적용합니다.</p>
<p>— — —</p>
<p>필수 입력 필드가 있는 간단한 HTML 양식을 고려해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>form<span class="token operator">></span>
  <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"username"</span><span class="token operator">></span>사용자 이름<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
  <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> id<span class="token operator">=</span><span class="token string">"username"</span> name<span class="token operator">=</span><span class="token string">"username"</span> required<span class="token operator">></span>
  <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>제출<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
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
<p>이제 사용자에게 시각적 피드백을 제공하기 위해 필수 입력 필드를 스타일링하고 싶다면, :required를 사용할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 필수 입력 필드를 스타일링합니다 */</span>
<span class="token literal-property property">input</span><span class="token operator">:</span>required <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 2px solid #007bff<span class="token punctuation">;</span> <span class="token comment">/* 파란 테두리 추가 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서는 사용자에게 필수 필드임을 표시하기 위해 입력 필드에 파란 테두리가 표시됩니다.</p>
<p>— — —</p>
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
<p>:required 가상 클래스는 체크박스와 라디오 버튼과 같은 다른 필수 양식 요소에도 스타일을 적용하는 데 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>form<span class="token operator">></span>
  <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"checkbox"</span> id<span class="token operator">=</span><span class="token string">"agree"</span> name<span class="token operator">=</span><span class="token string">"agree"</span> required<span class="token operator">></span>
  <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"agree"</span><span class="token operator">></span>약관에 동의합니다<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
  <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>제출<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 필수 체크박스를 스타일링합니다 */</span>
input<span class="token punctuation">[</span>type<span class="token operator">=</span><span class="token string">"checkbox"</span><span class="token punctuation">]</span><span class="token operator">:</span>required <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 2px solid #007bff<span class="token punctuation">;</span> <span class="token comment">/* 파란 테두리 추가 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서는 사용자에게 필수 필드임을 나타내기 위해 체크박스에 파란색 테두리가 생깁니다.</p>
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
<p>폼에서 필수 필드를 나타내는 시각적 단서를 제공하여 사용성과 전반적인 사용자 경험을 향상시킬 수 있는 :required를 사용할 수 있어요.</p>
<h2 id="_9-optional" tabindex="-1"><a class="header-anchor" href="#_9-optional" aria-hidden="true">#</a> 9. :optional</h2>
<p>CSS의 :optional 가짜 클래스는 필수 속성이 설정되지 않은 폼 요소의 스타일을 지정하는 데 사용됩니다.</p>
<p>이 가상 클래스를 사용하면 개발자가 선택적인 폼 요소에 스타일을 적용하여 필수 필드와 선택적 필드를 사용자에게 시각적으로 알려줄 수 있어요.</p>
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
<p><code v-pre>입력</code>, <code v-pre>텍스트 에어리어</code> 및 <code v-pre>다른 양식 컨트롤</code>에 스타일을 적용합니다. 이 중 필수로 표시되지 않은 요소에 대해서 적용됩니다.</p>
<hr>
<p>필수로 표시된 입력란들을 포함하는 간단한 HTML 양식을 고려해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>form<span class="token operator">></span>
  <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"name"</span><span class="token operator">></span>이름<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
  <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> id<span class="token operator">=</span><span class="token string">"name"</span> name<span class="token operator">=</span><span class="token string">"name"</span> required<span class="token operator">></span>

  <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"email"</span><span class="token operator">></span>이메일<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
  <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"email"</span> id<span class="token operator">=</span><span class="token string">"email"</span> name<span class="token operator">=</span><span class="token string">"email"</span><span class="token operator">></span>

  <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"message"</span><span class="token operator">></span>메시지<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
  <span class="token operator">&lt;</span>textarea id<span class="token operator">=</span><span class="token string">"message"</span> name<span class="token operator">=</span><span class="token string">"message"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>textarea<span class="token operator">></span>

  <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>제출<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
			style="display:block"
			data-ad-client="ca-pub-4877378276818686"
			data-ad-slot="9743150776"
			data-ad-format="auto"
			data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이제 선택 사항인 입력 필드의 스타일을 필수 입력 필드와 다르게 지정하고 싶다면 &quot;:optional&quot;을 사용할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 선택 사항인 입력 필드에 스타일 적용 */</span>
<span class="token literal-property property">input</span><span class="token operator">:</span>optional<span class="token punctuation">,</span>
<span class="token literal-property property">textarea</span><span class="token operator">:</span>optional <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token comment">/* 테두리 추가 */</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 선택 사항인 입력 필드에 스타일 적용 */</span>
<span class="token literal-property property">input</span><span class="token operator">:</span>optional <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #f9f9f9<span class="token punctuation">;</span> <span class="token comment">/* 배경색 변경 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서 필수 속성이 설정되지 않은 입력 필드와 텍스트 영역은 연한 회색 테두리와 조금 다른 배경색을 가지게 됩니다.</p>
<p>&quot;:optional&quot; 가상 클래스는 양식 내에서 선택 사항인 필드를 시각적으로 강조하는 데 특히 유용하며, 사용성과 전반적인 사용자 경험을 향상시킬 수 있어요.</p>
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
<h2 id="_10-root" tabindex="-1"><a class="header-anchor" href="#_10-root" aria-hidden="true">#</a> 10. :root</h2>
<p>CSS에서의 :root 가상 클래스는 문서의 루트 요소인 일반적으로 <code v-pre>html</code> 요소를 선택하는 데 사용됩니다.</p>
<p>개발자는 문서 전체에 적용되는 전역 스타일과 변수를 정의할 수 있습니다.</p>
<p>일반적으로 문서 내의 모든 요소에 적용되는 전역 스타일 및 CSS 변수(사용자 정의 속성)를 정의하는 데 사용됩니다.</p>
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
<hr>
<p>간단한 HTML 문서를 살펴보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>title<span class="token operator">></span>Document<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
  <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"style.css"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
  <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello<span class="token punctuation">,</span> World<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
  <span class="token operator">&lt;</span>p<span class="token operator">></span>This is a paragraph<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 전역 스타일 및 변수 정의 */</span>
<span class="token operator">:</span>root <span class="token punctuation">{</span>
  <span class="token operator">--</span>primary<span class="token operator">-</span>color<span class="token operator">:</span> #007bff<span class="token punctuation">;</span>
  <span class="token operator">--</span>secondary<span class="token operator">-</span>color<span class="token operator">:</span> #6c757d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 전역 스타일 적용 */</span>
body <span class="token punctuation">{</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> Arial<span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #f8f9fa<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>secondary<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* CSS 변수 사용 */</span>
h1 <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>primary<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
			style="display:block"
			data-ad-client="ca-pub-4877378276818686"
			data-ad-slot="9743150776"
			data-ad-format="auto"
			data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 예에서는 :root 가상 클래스를 사용하여 두 가지 CSS 변수 : --primary-color와 --secondary-color을 정의합니다. 이 변수들은 각각 주요 색상과 보조 색상을 나타냅니다. 그런 다음 이러한 변수를 사용하여 전체 문서의 색상 구성표를 정의합니다.</p>
<p>또한 :root를 사용하여 글로벌 스타일인 font-family, background-color 및 color와 같은 스타일을 body 요소에 적용합니다.</p>
<p>:root를 사용함으로써 개발자는 전체 문서에 적용되는 글로벌 스타일과 변수를 쉽게 정의하고 관리할 수 있어 웹 사이트의 스타일링을 유지하고 업데이트하는 것이 더욱 쉬워집니다.</p>
<h2 id="_11-valid" tabindex="-1"><a class="header-anchor" href="#_11-valid" aria-hidden="true">#</a> 11. :valid</h2>
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
<p>CSS에서의 :valid 가상 클래스는 정의된 제약 조건이나 요구 사항에 따라 유효한 입력을 포함하는 폼 요소에 스타일을 적용하는 데 사용됩니다.</p>
<p>이 가상 클래스를 사용하면 입력이 지정된 유효성 검사 기준을 충족했을 때 사용자에게 시각적으로 표시할 수 있습니다.</p>
<p>이 가상 클래스는 현재 값이 유효한 경우 텍스트 필드 또는 확인란과 같은 입력 요소에 스타일을 적용합니다.</p>
<hr>
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
<p>간단한 이메일 주소를 요구하는 입력 필드가 있는 HTML 폼을 고려해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>form<span class="token operator">></span>
  <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"email"</span><span class="token operator">></span>이메일<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
  <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"email"</span> id<span class="token operator">=</span><span class="token string">"email"</span> name<span class="token operator">=</span><span class="token string">"email"</span> required<span class="token operator">></span>
  <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>제출<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>만약 입력 필드에 유효한 이메일 주소가 들어있을 때 스타일을 변경하고 싶다면, :valid를 사용할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 입력 필드에 유효한 이메일 주소가 들어있을 때 스타일 지정 */</span>
<span class="token literal-property property">input</span><span class="token operator">:</span>valid <span class="token punctuation">{</span>
  border<span class="token operator">-</span>color<span class="token operator">:</span> green<span class="token punctuation">;</span> <span class="token comment">/* 테두리 색상을 초록색으로 변경 */</span>
<span class="token punctuation">}</span>
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
<p>이 예제에서는 브라우저의 내장 이메일 유효성 검사에 따라 유효한 이메일 주소가 포함된 경우 입력 필드에 녹색 테두리가 생깁니다.</p>
<hr>
<p>:valid 가상 클래스는 체크박스나 텍스트 영역과 같은 다른 폼 요소에도 적용될 수 있습니다. 이들의 입력이 제약 조건에 따라 유효한 경우에 스타일을 지정하는 데 사용됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"checkbox"</span> id<span class="token operator">=</span><span class="token string">"agree"</span> required<span class="token operator">></span>
<span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"agree"</span><span class="token operator">></span>약관에 동의합니다<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 체크박스가 체크되었고 유효할 때 스타일을 지정합니다. */</span>
input<span class="token punctuation">[</span>type<span class="token operator">=</span><span class="token string">"checkbox"</span><span class="token punctuation">]</span><span class="token operator">:</span>valid <span class="token punctuation">{</span>
  outline<span class="token operator">-</span>color<span class="token operator">:</span> green<span class="token punctuation">;</span> <span class="token comment">/* 외곽선 색을 초록색으로 변경합니다. */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서는 체크박스가 필수 속성에 따라 체크되어 유효할 때 초록색 외곽선을 가질 것입니다.</p>
<p><code v-pre>:valid</code>을 사용하면 사용자에게 입력이 지정된 유효성 기준을 충족했음을 바로 시각적으로 알려줌으로써 사용자 경험을 향상시키고 양식 제출 시의 오류를 줄일 수 있습니다.</p>
<h2 id="_12-invalid" tabindex="-1"><a class="header-anchor" href="#_12-invalid" aria-hidden="true">#</a> 12. :invalid</h2>
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
<p>CSS에서 :invalid 가상 클래스는 지정된 제약 조건에 따라 유효하지 않은 값이나 형식을 갖는 양식 요소를 스타일링하는 데 사용됩니다.</p>
<p>이 가상 클래스를 사용하면 개발자들이 사용자에게 입력이 필요한 기준을 충족하지 못했음을 시각적으로 표시할 수 있습니다.</p>
<hr>
<p>유효한 이메일 주소가 필요한 입력 필드가 있는 간단한 HTML 양식을 고려해보세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>form<span class="token operator">></span>
  <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"email"</span><span class="token operator">></span>이메일<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
  <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"email"</span> id<span class="token operator">=</span><span class="token string">"email"</span> name<span class="token operator">=</span><span class="token string">"email"</span> required<span class="token operator">></span>
  <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>제출<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제, 값이 유효하지 않을 때 (즉, 유효한 이메일 주소가 아닐 때) 입력 필드를 스타일링하려면 :invalid을 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 값이 유효하지 않을 때 입력 필드 스타일 지정 */</span>
<span class="token literal-property property">input</span><span class="token operator">:</span>invalid <span class="token punctuation">{</span>
  border<span class="token operator">-</span>color<span class="token operator">:</span> #ff0000<span class="token punctuation">;</span> <span class="token comment">/* 테두리 색상을 빨간색으로 변경 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서 유효하지 않은 이메일 주소(예: &quot;@ &quot; 기호가 없는 경우)로 양식을 제출하려고하면, 입력 필드는 값이 유효하지 않다는 것을 나타내기 위해 빨간 테두리가 생깁니다.</p>
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
<hr>
<p><code v-pre>:invalid</code> 으사례유사사클래스는 지정된 제약조건에 따라 해당 값이 유효하지 않은 상태를 가진 숫자 입력, 텍스트영역 및 선택 드롭다운과 같은 다른 유형의 양식 요소에 적용할 수도 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 값이 유효하지 않을 때 숫자 입력 스타일 지정 */</span>
input<span class="token punctuation">[</span>type<span class="token operator">=</span><span class="token string">"number"</span><span class="token punctuation">]</span><span class="token operator">:</span>invalid <span class="token punctuation">{</span>
  border<span class="token operator">-</span>color<span class="token operator">:</span> #ff0000<span class="token punctuation">;</span> <span class="token comment">/* 테두리 색상을 빨간색으로 변경 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서 숫자 입력은 값이 유효하지 않은 경우(예: 지정된 범위를 벗어날 때) 빨간 테두리가 지정됩니다.</p>
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
<p>:invalid를 사용하여 사용자에게 입력 내용이 필요한 기준을 충족시키지 못했다는 시각적 단서를 제공하여 사용성과 전반적인 사용자 경험을 향상시킬 수 있습니다.</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론:</h1>
<p>CSS 가상 클래스는 개발자가 동적이고 인터랙티브한 웹 경험을 만들 수 있는 강력한 도구입니다. 문법과 적용을 이해함으로써 웹 프로젝트의 시각적 매력과 사용성을 향상시킬 수 있습니다.</p>
<p>이러한 가상 클래스를 실험해보고 CSS 아카데미에 통합해 웹 디자인 기술을 한 단계 끌어올릴 수 있습니다. 연습과 창의성으로 무궁무진한 가능성을 탐색해보세요.</p>
</div></template>
