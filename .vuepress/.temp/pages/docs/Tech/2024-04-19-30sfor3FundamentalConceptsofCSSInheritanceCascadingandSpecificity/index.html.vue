<template><div><p>CSS (Cascading Style Sheets)은 웹 페이지를 스타일링하는 데 필수적인 언어입니다. 핵심 개념을 이해하면 잘 구조화되고 유지보수가 용이한 스타일시트를 만들 수 있습니다. 이 블로그 포스트에서는 Cascading, Inheritance 및 Specificity라는 세 가지 주요 개념을 살펴볼 것입니다. 이러한 개념을 숙지함으로써 엔지니어들은 CSS 기술을 향상시키고 UI에 더 일관된 스타일을 작성할 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-04-19-30sfor3FundamentalConceptsofCSSInheritanceCascadingandSpecificity/img/30sfor3FundamentalConceptsofCSSInheritanceCascadingandSpecificity_0.png" alt="Image"></p>
<h2 id="상속" tabindex="-1"><a class="header-anchor" href="#상속" aria-hidden="true">#</a> 상속</h2>
<p>CSS 속성은 부모 요소에서 자식 요소로 상속될 수 있습니다. 이는 부모 요소에 스타일이 적용된 경우, 자식 요소들은 그 스타일을 상속받을 것을 의미합니다. 그렇지 않은 경우에는 특별히 지정하지 않는 한 자식 요소가 그 스타일을 상속합니다. 예를 들어 설명해보겠습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 상속 예시 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>p<span class="token operator">></span>컨테이너 내부의 단락입니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

<span class="token operator">&lt;</span>style<span class="token operator">></span>
  <span class="token comment">/* 부모 스타일 */</span>
  <span class="token punctuation">.</span>container <span class="token punctuation">{</span>
    font<span class="token operator">-</span>family<span class="token operator">:</span> Arial<span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서는 클래스가 &quot;container&quot;인 <code v-pre>div</code> 안에 있는 <code v-pre>p</code> 요소가 부모로부터 font-family 속성을 상속받아 컨테이너와 동일한 글꼴 스타일을 갖게 됩니다.</p>
<h1 id="카스케이딩" tabindex="-1"><a class="header-anchor" href="#카스케이딩" aria-hidden="true">#</a> 카스케이딩</h1>
<p>카스케이딩은 HTML 요소에 스타일이 적용되는 방식을 스타일 규칙과의 관계에 기반으로 합니다. CSS는 스타일이 부모 요소로부터 상속받아 더 구체적인 규칙에 의해 재정의될 수 있는 카스케이딩 순서를 따릅니다. 간단한 예시로 이 작동 방식을 살펴봅시다.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> Cascading 예시 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>p<span class="token operator">></span>이것은 문단입니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"special"</span><span class="token operator">></span>이것은 특별한 문단입니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>

<span class="token operator">&lt;</span>style<span class="token operator">></span>
  <span class="token comment">/* 전역 스타일 */</span>
  p <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> blue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">/* 특정 스타일 */</span>
  <span class="token punctuation">.</span>special <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서 첫 번째 <code v-pre>p</code> 요소는 전역 스타일에서 상속받은 색 속성으로 파란색 텍스트 색상을 가질 것입니다. 그러나 &quot;special&quot; 클래스를 가진 두 번째 <code v-pre>p</code> 요소는 해당 클래스에 정의된 더 구체적인 스타일 규칙을 적용하여 빨간색 텍스트 색상을 가질 것입니다.</p>
<h1 id="특이성" tabindex="-1"><a class="header-anchor" href="#특이성" aria-hidden="true">#</a> 특이성</h1>
<p>특이성은 CSS가 요소에 적용할 스타일이 충돌하는 규칙이 있을 때 결정하는 메커니즘입니다. 의도한 대로 스타일이 적용되도록 보장하려면 특이성이 작동하는 방식을 이해하는 것이 중요합니다. 특이성은 네 가지 카테고리를 기반으로 하며, 각각이 고유한 가중치를 가지고 있습니다:```</p>
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
<ol>
<li>인라인 스타일: 이 스타일은 style 속성을 사용하여 HTML 요소에 직접 적용됩니다. 요소에 직접 부착되어 있기 때문에 가장 높은 우선 순위를 갖습니다.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 인라인 스타일 예시 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>h1 style<span class="token operator">=</span><span class="token string">"color: pink;"</span><span class="token operator">></span>인라인 스타일이 적용된 제목<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>아이디(ID): ID 선택자를 사용하여 적용된 스타일은 클래스, 가상 클래스 및 속성 선택자보다 더 높은 특이성을 가집니다. ID 선택자는 해시(#) 기호와 ID 이름이 붙여진 형식으로 표시됩니다.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 아이디(ID) 선택자 예시 */</span>
#navbar <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #<span class="token number">333</span><span class="token punctuation">;</span>
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
<ol start="3">
<li>클래스, 가상 클래스, 속성 선택자: 이 선택자들은 클래스, 상태 또는 속성에 기반한 요소를 대상으로 합니다. 중간 수준의 특이성을 갖습니다.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 클래스 선택자 예시 */</span>
<span class="token punctuation">.</span>test <span class="token punctuation">{</span>
    font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 가상 클래스 선택자 예시 */</span>
<span class="token operator">:</span>hover <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 속성 선택자 예시 */</span>
<span class="token punctuation">[</span>href<span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>요소 및 가상 요소: 이 선택자들은 HTML 요소나 요소 부분을 대상으로 합니다. 가장 낮은 특이성 수준을 갖습니다.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 요소 선택자 예시 */</span>
h1 <span class="token punctuation">{</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 24px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 가상 요소 선택자 예시 */</span>
<span class="token operator">:</span><span class="token operator">:</span>before <span class="token punctuation">{</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"앞에 있는 내용"</span><span class="token punctuation">;</span>
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
<h2 id="특이성-계산하기" tabindex="-1"><a class="header-anchor" href="#특이성-계산하기" aria-hidden="true">#</a> 특이성 계산하기</h2>
<p>특이성을 계산하는 것은 무서운 일이 아니에요. 이 간단한 단계를 따르세요:</p>
<ul>
<li>0의 특이성 값을 가지고 시작하세요.</li>
<li>선택기에 ID 값이 있는 경우마다 100을 더하세요.</li>
<li>클래스 값, 가상 클래스 또는 속성 선택자마다 10을 더하세요.</li>
<li>엘리먼트 선택자 또는 가상 엘리먼트마다 1을 더하세요.</li>
</ul>
<p>예시:</p>
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
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>CSS의 상속, 캐스캐이딩 및 특이도를 더 잘 이해하시고 버그와 머리털 뽑는 순간을 줄이시기를 바랍니다. 더 원활한 코딩을 위하여 건배해요!```</p>
</div></template>
