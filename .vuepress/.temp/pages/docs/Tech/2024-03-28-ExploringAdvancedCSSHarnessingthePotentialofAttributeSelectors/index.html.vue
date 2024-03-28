<template><div><img src="@source/docs/Tech/2024-03-28-ExploringAdvancedCSSHarnessingthePotentialofAttributeSelectors/img/ExploringAdvancedCSSHarnessingthePotentialofAttributeSelectors_0.png" />
<p>CSS(Cascading Style Sheets)는 웹 페이지의 요소를 정확하게 대상으로 삼아 스타일을 적용할 수 있는 다양한 선택자와 연산자를 제공합니다. 이 중에서 속성 연산자는 HTML 속성과 그 값에 따라 스타일을 적용할 수 있는 다재다능한 도구로, 개발자들이 웹 프로젝트에서 그들의 전체 가능성을 활용할 수 있도록 도와주는 가이드입니다.</p>
<h1 id="css-속성-연산자-이해하기" tabindex="-1"><a class="header-anchor" href="#css-속성-연산자-이해하기" aria-hidden="true">#</a> CSS 속성 연산자 이해하기:</h1>
<p>CSS 속성 연산자는 HTML 속성의 존재 또는 값에 따라 요소를 대상으로 삼는 방법을 제공합니다. 폼 입력, 링크 또는 사용자 지정 데이터 속성을 스타일링할 때 이러한 연산자들은 유연하고 효율적인 스타일 적용 방법을 제공합니다.</p>
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
<h1 id="css-속성-연산자-유형" tabindex="-1"><a class="header-anchor" href="#css-속성-연산자-유형" aria-hidden="true">#</a> CSS 속성 연산자 유형:</h1>
<ul>
<li>존재하는 속성 선택자 ([attr])</li>
<li>정확한 속성 선택자 ([attr=value])</li>
<li>공백으로 구분된 속성 선택자 ([attr~=value])</li>
<li>접두사 속성 선택자 ([attr^=value])</li>
<li>접미사 속성 선택자 ([attr$=value])</li>
<li>부분 문자열 속성 선택자 ([attr*=value])</li>
</ul>
<h2 id="_1-존재하는-속성-선택자-attr" tabindex="-1"><a class="header-anchor" href="#_1-존재하는-속성-선택자-attr" aria-hidden="true">#</a> 1- 존재하는 속성 선택자 ([attr]):</h2>
<p>CSS의 존재하는 속성 선택자인 [attr]은 속성 값 여부에 관계없이 특정 속성을 가진 요소를 선택하는 데 사용됩니다. 이 선택자는 속성 값이 할당되어 있는지 여부와 관계없이 지정된 속성을 가진 요소를 대상으로 합니다.</p>
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
<p>간단한 HTML 구조가 있는 상황을 고려해보세요. 여러 개의 앵커(<code v-pre>a</code>) 요소가 있습니다. 일부는 &quot;target&quot; 속성이 정의되어 있고 일부는 그렇지 않습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>링크 <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
<span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span> target<span class="token operator">=</span><span class="token string">"_blank"</span><span class="token operator">></span>링크 <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
<span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span> target<span class="token operator">=</span><span class="token string">"_self"</span><span class="token operator">></span>링크 <span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
<span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>링크 <span class="token number">4</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 &quot;target&quot; 속성이 정의된 모든 앵커 요소에 스타일을 적용하고 싶다면, 존재 속성 선택자 [target]를 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* "target" 속성이 있는 앵커 요소에 스타일 적용 */</span>
a<span class="token punctuation">[</span>target<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> blue<span class="token punctuation">;</span> <span class="token comment">/* 텍스트 색상을 파란색으로 변경 */</span>
  font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span> <span class="token comment">/* 텍스트 굵게 만들기 */</span>
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
<p>이 예제에서 &quot;target&quot; 속성이 정의된 앵커 엘리먼트(“target=<code v-pre>_blank</code>” 및 “target=<code v-pre>_self</code>”으로 정의된 <code v-pre>a</code> 태그)는 텍스트 색상이 파란색으로 변경되며 볼드체로 표시됩니다.</p>
<p>[attr] 선택자는 특정 속성에 국한되지 않으며 모든 속성과 함께 사용할 수 있습니다. 예를 들어, &quot;data-&quot; 속성이 있는 모든 엘리먼트를 선택하려면:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* "data-" 속성이 있는 엘리먼트에 스타일 적용 */</span>
<span class="token punctuation">[</span>data<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token comment">/* 테두리 추가 */</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 5px<span class="token punctuation">;</span> <span class="token comment">/* 안간격 추가 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서 &quot;data-&quot; 속성이 있는 모든 엘리먼트에는 테두리와 안간격이 적용됩니다.</p>
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
<p>The table tag in Markdown format:</p>
<p>By using the Presence Attribute Selector [attr], you can easily target and style elements based on the presence of specific attributes in your HTML markup, providing flexibility and control over your CSS styling.</p>
<h2 id="_2-exact-attribute-selector-attr-value" tabindex="-1"><a class="header-anchor" href="#_2-exact-attribute-selector-attr-value" aria-hidden="true">#</a> 2- Exact Attribute Selector ([attr=value]):</h2>
<p>The Exact Attribute Selector ([attr=value]) in CSS is used to select elements that have a specific attribute with an exact value. This selector allows developers to target elements precisely based on the value of their attributes.c</p>
<p>Consider a simple HTML structure with multiple <code v-pre>button</code> elements, each with a type attribute:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>제출<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"reset"</span><span class="token operator">></span>재설정<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"button"</span><span class="token operator">></span>버튼<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 &quot;제출&quot;이라는 타입 속성을 가진 버튼만 스타일을 지정하고 싶다면 정확한 속성 선택자 [type=&quot;submit&quot;]을 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* type="submit" 속성을 가진 버튼 스타일 지정 */</span>
button<span class="token punctuation">[</span>type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #007bff<span class="token punctuation">;</span> <span class="token comment">/* 배경색을 파란색으로 변경 */</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #ffffff<span class="token punctuation">;</span> <span class="token comment">/* 텍스트 색상을 흰색으로 변경 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예에서는 type=&quot;submit&quot;인 버튼만 배경색이 파란색으로 변경되고 텍스트 색상이 흰색으로 변경됩니다. 다른 버튼은 영향을 받지 않습니다.</p>
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
<p>정확한 속성 선택기는 id, class 또는 사용자 지정 속성과 같은 모든 HTML 속성과 함께 사용되어 특정 속성 값이있는 요소를 정확하게 대상으로합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>span data<span class="token operator">-</span>type<span class="token operator">=</span><span class="token string">"info"</span><span class="token operator">></span>정보<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
  <span class="token operator">&lt;</span>span data<span class="token operator">-</span>type<span class="token operator">=</span><span class="token string">"warning"</span><span class="token operator">></span>주의<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
  <span class="token operator">&lt;</span>span data<span class="token operator">-</span>type<span class="token operator">=</span><span class="token string">"error"</span><span class="token operator">></span>에러<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 데이터 유형이 "경고"인 span 요소의 스타일 */</span>
span<span class="token punctuation">[</span>data<span class="token operator">-</span>type<span class="token operator">=</span><span class="token string">"warning"</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #ff0000<span class="token punctuation">;</span> <span class="token comment">/* 텍스트 색상을 빨간색으로 변경 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예에서는 데이터 유형이 &quot;경고&quot;인 <code v-pre>span</code> 요소만 텍스트 색상이 빨간색으로 변경되고 다른 <code v-pre>span</code> 요소는 기본 스타일을 유지합니다.</p>
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
<p>&quot;정확한 속성 선택자 [attr=value]를 사용하면 속성 값에 따라 특정 요소를 정확하게 대상으로 삼아 웹 프로젝트에서 스타일링 유연성과 사용자 정의 기능을 향상시킬 수 있어요.</p>
<h2 id="_3-공백으로-구분된-속성-선택자-attr-value" tabindex="-1"><a class="header-anchor" href="#_3-공백으로-구분된-속성-선택자-attr-value" aria-hidden="true">#</a> 3- 공백으로 구분된 속성 선택자 ([attr~=value]):</h2>
<p>CSS의 공백으로 구분된 속성 선택자 ([attr~=value])는 특정 속성에 특정 값이 포함된 요소를 선택하는 데 사용됩니다. 이 선택자는 특히 여러 개의 공백으로 구분된 값을 포함하는 속성을 가진 요소(예: 클래스 또는 키워드 목록)를 다룰 때 유용해요.</p>
<p>여러 가지 항목이 있는 단순한 HTML 구조를 고려해보세요. 각 항목에는 데이터 태그 속성이 포함된 태그로 구성된 목록이 있어요.&quot;</p>
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
  <span class="token operator">&lt;</span>li data<span class="token operator">-</span>tags<span class="token operator">=</span><span class="token string">"red"</span><span class="token operator">></span>빨간 항목<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
  <span class="token operator">&lt;</span>li data<span class="token operator">-</span>tags<span class="token operator">=</span><span class="token string">"blue"</span><span class="token operator">></span>파란 항목<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
  <span class="token operator">&lt;</span>li data<span class="token operator">-</span>tags<span class="token operator">=</span><span class="token string">"red blue"</span><span class="token operator">></span>빨간색과 파란색 항목<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
  <span class="token operator">&lt;</span>li data<span class="token operator">-</span>tags<span class="token operator">=</span><span class="token string">"green blue"</span><span class="token operator">></span>초록색과 파란색 항목<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 태그에 따라 항목을 스타일링하고 싶다면, 공백으로 구분된 속성 선택자 [data-tags~=값]을 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 'red' 태그를 가진 항목 스타일링 */</span>
li<span class="token punctuation">[</span>data<span class="token operator">-</span>tags<span class="token operator">~</span><span class="token operator">=</span><span class="token string">"red"</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 'blue' 태그를 가진 항목 스타일링 */</span>
li<span class="token punctuation">[</span>data<span class="token operator">-</span>tags<span class="token operator">~</span><span class="token operator">=</span><span class="token string">"blue"</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 'red'와 'blue' 태그를 가진 항목 스타일링 */</span>
li<span class="token punctuation">[</span>data<span class="token operator">-</span>tags<span class="token operator">~</span><span class="token operator">=</span><span class="token string">"red"</span><span class="token punctuation">]</span><span class="token punctuation">[</span>data<span class="token operator">-</span>tags<span class="token operator">~</span><span class="token operator">=</span><span class="token string">"blue"</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서:</p>
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
<li>첫 번째 CSS 규칙은 값이 &quot;red&quot;를 포함하는 data-tags 속성을 가진 <code v-pre>li</code> 요소를 선택하고 텍스트에 빨간색을 적용합니다.</li>
<li>두 번째 CSS 규칙은 값이 &quot;blue&quot;를 포함하는 data-tags 속성을 가진 <code v-pre>li</code> 요소를 선택하고 텍스트에 파란색을 적용합니다.</li>
<li>세 번째 CSS 규칙은 &quot;red&quot;와 &quot;blue&quot; 태그를 모두 포함하는 <code v-pre>li</code> 요소를 선택하고 텍스트에 굵은 글꼴을 적용합니다.</li>
</ul>
<p>띄어쓰기로 구분된 속성 선택자를 사용하면 요소의 속성 내 특정 값에 기반하여 스타일을 지정할 수 있어 속성 값에 기반한 스타일링에 유연성과 제어력을 제공합니다.</p>
<h2 id="_4-접두사-속성-선택자-attr-value" tabindex="-1"><a class="header-anchor" href="#_4-접두사-속성-선택자-attr-value" aria-hidden="true">#</a> 4- 접두사 속성 선택자 ([attr^=value]):</h2>
<p>CSS의 접두사 속성 선택자 ([attr^=value])는 지정된 속성을 가지고 있고 해당 속성 값이 특정 값으로 시작하는 요소를 선택하는 데 사용됩니다. 이 선택자를 사용하면 요소의 속성 값의 시작 문자에 기반하여 요소를 대상으로 할 수 있습니다.</p>
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
<p>&quot;item-&quot;로 시작하는 클래스 이름을 가진 요소 목록이 있는 시나리오를 고려해보겠습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>ul<span class="token operator">></span>
  <span class="token operator">&lt;</span>li <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"item-1"</span><span class="token operator">></span>Item <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
  <span class="token operator">&lt;</span>li <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"item-2"</span><span class="token operator">></span>Item <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
  <span class="token operator">&lt;</span>li <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"item-3"</span><span class="token operator">></span>Item <span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 &quot;item-&quot;로 시작하는 클래스 이름을 가진 모든 목록 항목에 스타일을 적용하려면 prefix 속성 선택기를 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* "item-"로 시작하는 클래스 이름을 가진 목록 항목에 스타일 적용 */</span>
li<span class="token punctuation">[</span><span class="token keyword">class</span><span class="token operator">^=</span><span class="token string">"item-"</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span>
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
<p>이 예시에서는 클래스 이름이 &quot;item-&quot;으로 시작하는 모든 목록 항목의 글꼴 두께를 굵게 설정합니다.</p>
<p>접두어 속성 선택기는 클래스 이름에 국한되지 않으며, ID, 데이터 속성 또는 사용자 정의 속성과 같이 값이 허용되는 모든 HTML 속성과 함께 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">"btn-primary"</span><span class="token operator">></span>Primary Button<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">"btn-secondary"</span><span class="token operator">></span>Secondary Button<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">"btn-tertiary"</span><span class="token operator">></span>Tertiary Button<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* "btn-"로 시작하는 ID를 가진 버튼에 스타일 적용 */</span>
button<span class="token punctuation">[</span>id<span class="token operator">^=</span><span class="token string">"btn-"</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #007bff<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #ffffff<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 5px 10px<span class="token punctuation">;</span>
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
<p>이 예제에서는 &quot;btn-&quot;로 시작하는 모든 버튼에 파란 배경색, 흰색 텍스트 색상 및 패딩이 적용됩니다.</p>
<p>접두어 속성 선택자를 사용하면 속성 값 내에서 특정 패턴을 기반으로 요소를 대상으로 지정하고 스타일을 적용하여 CSS 스타일링에서 유연성과 제어를 제공할 수 있습니다.</p>
<h2 id="_5-접미사-속성-선택자-attr-value" tabindex="-1"><a class="header-anchor" href="#_5-접미사-속성-선택자-attr-value" aria-hidden="true">#</a> 5- 접미사 속성 선택자 ([attr$=value]):</h2>
<p>CSS의 접미사 속성 선택자([attr$=value])는 특정 값으로 끝나는 속성을 가진 요소를 선택하는 데 사용됩니다. 이 선택자는 특정 문자열이나 값으로 끝나는 속성을 가진 요소를 대상으로 지정하고자 할 때 유용합니다.</p>
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
<p>여러 가지 href 속성을 가진 링크 목록이 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>ul<span class="token operator">></span>
  <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"https://example.com"</span><span class="token operator">></span>예시<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
  <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"https://openai.com"</span><span class="token operator">></span>OpenAI<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
  <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"https://apple.com"</span><span class="token operator">></span>Apple<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 &quot;.com&quot;으로 끝나는 href 속성을 가진 링크의 스타일을 지정하고 싶다면, 접미사 속성 선택자를 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>a<span class="token punctuation">[</span>href$<span class="token operator">=</span><span class="token string">".com"</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> blue<span class="token punctuation">;</span> <span class="token comment">/* 텍스트 색상을 파란색으로 변경 */</span>
<span class="token punctuation">}</span>
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
<p>이 예에서 href 속성이 &quot;.com&quot;으로 끝나는 모든 링크의 텍스트 색상이 파란색으로 변경됩니다.</p>
<p>접미사 속성 선택기는 특정 URL 확장자를 가진 링크에 스타일을 적용하거나, 특정 파일 확장자를 가진 요소를 대상으로 삼거나, 특정 데이터 속성 값이 있는 요소를 선택하는 등 다양한 시나리오에 유용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>button data<span class="token operator">-</span>action<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>제출<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span>button data<span class="token operator">-</span>action<span class="token operator">=</span><span class="token string">"cancel"</span><span class="token operator">></span>취소<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* data-action 속성이 "mit"으로 끝나는 버튼의 스타일을 적용합니다 */</span>
button<span class="token punctuation">[</span>data<span class="token operator">-</span>action$<span class="token operator">=</span><span class="token string">"mit"</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> green<span class="token punctuation">;</span> <span class="token comment">/* 배경색을 녹색으로 변경합니다 */</span>
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
<p>이 예시에서는 &quot;Submit&quot; 버튼만 배경색이 초록색으로 변경됩니다. 왜냐하면 해당 버튼의 data-action 속성이 &quot;mit&quot;으로 끝나기 때문입니다.</p>
<p>접미사 속성 선택자를 사용하여 CSS에서 특정 속성 끝에 따라 요소를 대상으로 할 수 있어서 더 정확하고 유연한 스타일링이 가능합니다.</p>
<h2 id="_6-substring-attribute-selector-attr-value" tabindex="-1"><a class="header-anchor" href="#_6-substring-attribute-selector-attr-value" aria-hidden="true">#</a> 6- Substring Attribute Selector ([attr*=value]):</h2>
<p>CSS의 Substring Attribute Selector ([attr*=value])는 지정된 부분 문자열 값을 포함하는 속성을 가진 요소를 선택하는 데 사용됩니다. 이 선택자를 사용하면 속성 값 내에서 일치하는 부분을 기준으로 요소를 대상으로 할 수 있습니다.</p>
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
<p>간단한 HTML 구조가 있는 앵커 링크가 있는 고려해 봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">-</span> <span class="token punctuation">[</span>Section <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">(</span>#section1<span class="token punctuation">)</span>
<span class="token operator">-</span> <span class="token punctuation">[</span>Section <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">(</span>#section2<span class="token punctuation">)</span>
<span class="token operator">-</span> <span class="token punctuation">[</span>Section <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">(</span>#section3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 href 속성에 하위 문자열 &quot;section&quot;이 포함된 앵커 링크를 선택하려면 하위 문자열 속성 선택기 [href*=&quot;section&quot;]을 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* "section"이 포함된 href를 갖는 앵커 링크에 스타일 적용 */</span>
a<span class="token punctuation">[</span>href<span class="token operator">*=</span><span class="token string">"section"</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #007bff<span class="token punctuation">;</span> <span class="token comment">/* 텍스트 색상을 파란색으로 변경 */</span>
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
<p>이 예에서 &quot;section&quot;이라는 부분 문자열을 포함하는 href 속성을 가진 모든 앵커 링크의 텍스트 색상이 파란색으로 변경됩니다.</p>
<p>부분 문자열 속성 선택기는 속성 값 내의 부분 일치에 따라 요소를 스타일링하는 데 유용합니다. 이는 CSS의 스타일링 기능을 향상시키고 특정 속성 패턴을 가진 요소를 대상으로 하는 데 유연성을 제공합니다.</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론:</h1>
<p>CSS 속성 연산자는 개발자에게 강력한 도구를 제공하여 속성 및 속성 값에 따라 요소를 선택적으로 대상으로 스타일을 적용할 수 있습니다. 이러한 연산자를 숙달함으로써 CSS 스타일 시트를 보다 견고하고 유연하게 만들어 웹 프로젝트의 시각적 매력과 사용성을 향상시킬 수 있습니다. 다양한 속성 연산자를 실험해보고 그 기능을 탐험하여 CSS 스타일링에서 새로운 가능성을 발견해보세요.</p>
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
<p>폼, 내비게이션 메뉴 또는 동적 컴포넌트를 개발 중이든, 속성 연산자는 맞춤형 및 반응형 디자인을 만들기 위한 가치 있는 도구입니다. 이러한 기술을 CSS 작업 흐름에 통합하여 웹 개발 기술을 향상시키고 사용자 경험을 높일 수 있습니다.</p>
</div></template>
