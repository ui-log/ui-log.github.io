<template><div><img src="@source/docs/Tech/2024-04-19-CSSDisplayFLEXvsBlockInlineandInline-BlockExplained/img/CSSDisplayFLEXvsBlockInlineandInline-BlockExplained_0.png" />
<p>디스플레이 속성은 HTML 요소를 표시, 숨기거나 배치하는 데 사용됩니다. 모든 HTML 요소에는 기본 디스플레이 동작이 있으며 이해하지 않으면 CSS 작업 중에 어려움을 겪을 수 있습니다.</p>
<p>또한 Flexbox 레이아웃을 구축하는 데 사용되는 디스플레이 속성의 새로운 옵션이 있습니다. Flex는 요소를 쉽게 배치하는 데 더 간단한 방법을 제공합니다. 그래서 이 게시물에서는 다음을 배울 수 있습니다:</p>
<ul>
<li>블록 및 인라인 수준 요소란 무엇인가</li>
<li>왜 inline-block을 사용하는 것이 좋은가</li>
<li>대안으로서의 flex 속성</li>
<li>Flex vs Inline-Flex</li>
<li>Flex를 사용하여 쉽게 가운데 정렬하는 방법</li>
</ul>
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
<h1 id="블록-수준-요소" tabindex="-1"><a class="header-anchor" href="#블록-수준-요소" aria-hidden="true">#</a> 블록 수준 요소</h1>
<p>모든 HTML 요소에는 기본적으로 설정된 디스플레이 동작이 있습니다. 일부 HTML 요소(예: <code v-pre>div</code>, <code v-pre>p</code>, <code v-pre>ul</code> 등)는 블록 수준이라고 알려진 기본 디스플레이 동작을 가지고 있습니다.</p>
<p>블록 수준은 템플릿에 배치된 후, 완전한 행의 전체 너비를 차지한다는 것을 의미합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"box blue"</span><span class="token operator">></span> <span class="token number">1</span> <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"box red"</span><span class="token operator">></span> <span class="token number">2</span> <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"box purple"</span><span class="token operator">></span> <span class="token number">3</span> <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"box orange"</span><span class="token operator">></span> <span class="token number">4</span> <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token comment">// 스타일링</span>
<span class="token punctuation">.</span>box <span class="token punctuation">{</span>
  border<span class="token operator">-</span>bottom<span class="token operator">:</span> 2px solid black<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 50px<span class="token punctuation">;</span>
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
<p>예제에서 위에 있는 이 4개의 div 요소(박스)들은 너비 속성을 할당하지 않았음에도 불구하고 각각의 행의 100% 공간을 차지하고 있습니다.</p>
<img src="@source/docs/Tech/2024-04-19-CSSDisplayFLEXvsBlockInlineandInline-BlockExplained/img/CSSDisplayFLEXvsBlockInlineandInline-BlockExplained_1.png" />
<h2 id="이들을-옆으로-나란히-놓는-방법은" tabindex="-1"><a class="header-anchor" href="#이들을-옆으로-나란히-놓는-방법은" aria-hidden="true">#</a> 이들을 옆으로 나란히 놓는 방법은?</h2>
<p>이제 아마 생각하실 수 있겠죠, 만약 그들이 100%의 너비를 차지한다면, 만약 작은 너비를 할당한다면 어떻게 될까요, 예를 들어 20%라고 하면:</p>
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
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그러면 그들은 옆으로 배치되어야 할거야. 음, 사실은 그렇지 않아...</p>
<p><img src="@source/docs/Tech/2024-04-19-CSSDisplayFLEXvsBlockInlineandInline-BlockExplained/img/CSSDisplayFLEXvsBlockInlineandInline-BlockExplained_2.png" alt="이미지"></p>
<p>이것은 많은 사람들이 하는 일반적인 실수야. 작은 너비를 지정하더라도 지정된 (작은) 너비 여부와 관계없이 여전히 블록 수준의 표시 동작을 유지해.```</p>
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
<p>그러니까 두 가지를 옆으로 배치하고 싶다면, 그들의 표시 방식(display behavior)을 변경해야 해. inline으로 바꿔보자:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="인라인-요소" tabindex="-1"><a class="header-anchor" href="#인라인-요소" aria-hidden="true">#</a> 인라인 요소</h1>
<p>그럼, 인라인(inline)이란 뭘까?</p>
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
<p>위에서 블록 수준 요소의 예시를 보았어요. 반면에 기본적으로 일반 수준 요소들도 있어요 (<code v-pre>span</code>이나 <code v-pre>a</code> 태그 같은). 이들은 직접적으로 옆에 놓을 수 있어요:</p>
<img src="@source/docs/Tech/2024-04-19-CSSDisplayFLEXvsBlockInlineandInline-BlockExplained/img/CSSDisplayFLEXvsBlockInlineandInline-BlockExplained_3.png" />
<p><code v-pre>div</code> 대신에 <code v-pre>span</code>을 사용하거나 <code v-pre>box</code> 클래스에 인라인 값을 할당할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>box <span class="token punctuation">{</span>
  border<span class="token operator">-</span>bottom<span class="token operator">:</span> 2px solid black<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 50px<span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token punctuation">;</span>
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
<p>하지만 인라인 요소의 단점은 너비나 높이 속성을 적용할 수 없다는 것입니다. 이러한 속성은 인라인 요소와 함께 작동하지 않습니다. 이 정보를 알지 못하면 CSS 작업이 정말 짜즯할 수 있어요.</p>
<h1 id="좋은-해결책-인라인-블록" tabindex="-1"><a class="header-anchor" href="#좋은-해결책-인라인-블록" aria-hidden="true">#</a> 좋은 해결책: 인라인-블록</h1>
<p>세 번째 옵션도 있습니다: 인라인-블록. 이 속성은 블록 및 인라인 수준 요소의 이점을 모두 취할 수 있어요.</p>
<p>그래서 <code v-pre>display: inline-block</code>을 사용한다면:</p>
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
<li>인라인 요소로는 할 수 없는 너비 및 높이 속성을 적용할 수 있습니다.</li>
<li>블록 레벨 요소로는 할 수 없는 요소를 옆으로 배치할 수 있습니다.</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Tech/2024-04-19-CSSDisplayFLEXvsBlockInlineandInline-BlockExplained/img/CSSDisplayFLEXvsBlockInlineandInline-BlockExplained_4.png" alt="CSSDisplayFLEXvsBlockInlineandInline-BlockExplained_4"></p>
<p>이 접근법은 요소의 위치 지정이나 표시 동작 변경을 위해 CSS에서 오랫동안 사용되어왔습니다.</p>
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
<h1 id="플렉스-디스플레이는-무엇인가요" tabindex="-1"><a class="header-anchor" href="#플렉스-디스플레이는-무엇인가요" aria-hidden="true">#</a> 플렉스 디스플레이는 무엇인가요?</h1>
<p>웹페이지의 레이아웃을 설계하거나 정렬하는 데 사용할 수 있는 최신 방법인 플렉스 속성이 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>가장 중요한 것은 &quot;플렉스(flex)&quot;가 &quot;블록(block)&quot;이나 &quot;인라인(inline)&quot;과 같은 단순한 속성이 아니라 다양한 하위 속성을 가진 더 큰 CSS 모듈임을 알아야 합니다.</p>
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
<p>저희는 앞으로 더 자세한 내용으로 이야기할 예정이에요. (지금 당장은, 이 글의 튜토리얼 비디오를 여기서 확인해보실 수도 있어요.)</p>
<h2 id="컨테이너에는-flex만-사용하세요" tabindex="-1"><a class="header-anchor" href="#컨테이너에는-flex만-사용하세요" aria-hidden="true">#</a> 컨테이너에는 Flex만 사용하세요</h2>
<p>flex 속성을 사용하려면 부모(또는 컨테이너) 요소가 필요해요.</p>
<p>flex의 이점은 해당 컨테이너 내의 요소에만 적용될 수 있고, 컨테이너 외부에서는 작동하지 않아요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span> <span class="token number">1</span> <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span> <span class="token number">2</span> <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span> <span class="token number">3</span> <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span> <span class="token number">4</span> <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 'container' div에 display flex 속성을 할당해 봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> gray<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게 하면 이 상자들이 모두 옆으로 자동으로 배치되어 표시되며, 표시 동작을 변경하지 않아도 됩니다:```</p>
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
<img src="@source/docs/Tech/2024-04-19-CSSDisplayFLEXvsBlockInlineandInline-BlockExplained/img/CSSDisplayFLEXvsBlockInlineandInline-BlockExplained_5.png" />
<p>게다가, 컨테이너(div)는 여전히 행의 전체 너비를 차지하고 블록 수준의 요소처럼 동작하지만 실제로는 이제 플렉스 컨테이너입니다.</p>
<h2 id="flex-vs-inline-flex" tabindex="-1"><a class="header-anchor" href="#flex-vs-inline-flex" aria-hidden="true">#</a> Flex vs Inline-Flex</h2>
<p>반면에 플렉스 컨테이너를 인라인 수준의 플렉스 요소로 만들고 싶다면, 코드를 인라인-플렉스로 변경하면 됩니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token operator">-</span>flex<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>따라서 컨테이너는 자식 요소만큼 필요한 공간을 차지합니다. 보다 시각적으로 만들기 위해 패딩도 추가해보겠습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token operator">-</span>flex<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> gray<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-04-19-CSSDisplayFLEXvsBlockInlineandInline-BlockExplained/img/CSSDisplayFLEXvsBlockInlineandInline-BlockExplained_6.png" />
```  
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
<h1 id="flex를-사용하여-요소-가운데-정렬하기" tabindex="-1"><a class="header-anchor" href="#flex를-사용하여-요소-가운데-정렬하기" aria-hidden="true">#</a> Flex를 사용하여 요소 가운데 정렬하기</h1>
<p>Flex를 사용하면 정말 많은 일을 할 수 있어요. 예를 들어, justify-content라는 단 한 가지 속성으로 상자를 쉽게 가운데 정렬할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> gray<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-04-19-CSSDisplayFLEXvsBlockInlineandInline-BlockExplained/img/CSSDisplayFLEXvsBlockInlineandInline-BlockExplained_7.png" />
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
<p>이제 모든 자식 요소가 매우 쉽게 중앙에 배치되었습니다. justify-content 속성은 플렉스 요소에 대해서만 작동합니다. 나는 다음 게시물에서 더 많은 플렉스 기능에 대해 설명할 예정이에요.</p>
<p>글이 마음에 드셨나요? Medium은 광고를 보여주지 않으면서 수천 개의 훌륭한 기사를 호스팅하는 좋은 플랫폼이에요. Medium이 광고 없이 운영되기 때문에 이 플랫폼을 좋아하는 독자들은 회원이 되어 지원할 수 있어요.</p>
<p>여기에서 Medium 회원이 되어 Medium의 모든 이야기에 무제한 액세스할 수 있어요. 위의 링크를 사용하면 나를 지원해줄 뿐만 아니라 작은 수수료도 얻을 수 있기 때문에 작가로서 그 정도의 지원은 정말 감사합니다. 고마워요!</p>
</div></template>
