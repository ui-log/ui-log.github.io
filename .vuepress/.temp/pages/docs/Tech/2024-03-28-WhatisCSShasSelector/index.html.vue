<template><div><p>CSS는 지속적으로 발전하며, 개발자들이 더 효율적이고 시각적으로 놀라운 웹 경험을 만들 수 있도록 새로운 기능이 등장합니다. 그 중 하나인 최근에 추가된 CSS :has() 선택자는 자식 콘텐츠를 기반으로 요소를 대상으로 하는 데 큰 도움이 되는 혁신적인 기능입니다.</p>
<p><img src="@source/docs/Tech/2024-03-28-WhatisCSShasSelector/img/WhatisCSShasSelector_0.png" alt="What is CSS has Selector"></p>
<p>이 글에서는 CSS :has() 선택자의 기능, 장점 및 실용적인 응용에 대해 탐구합니다. 이 선택자가 스타일을 단순화하고 코드 유지 보수성을 향상시키며 동적 스타일의 가능성을 열어준다는 것을 배워보겠습니다.</p>
<h1 id="css-has-선택자란-무엇인가요" tabindex="-1"><a class="header-anchor" href="#css-has-선택자란-무엇인가요" aria-hidden="true">#</a> CSS :has() 선택자란 무엇인가요?</h1>
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
<p>CSS :has() 선택자는 CSS 선택자 레벨 4에 도입된 상대적으로 새로운 가상 클래스로, 특정 선택기와 일치하는 자식 요소의 존재에 따라 요소를 대상으로합니다.</p>
<p>2024년 3월 현재 브라우저 지원:</p>
<ul>
<li>잘 지원됨: Chrome 및 Safari는 CSS :has()를 완전히 지원합니다.</li>
<li>진화 중인 지원: Firefox와 같은 다른 브라우저도 실험적인 플래그 지원을 통해 따라잡고 있습니다.</li>
</ul>
<p>고려할 사항:</p>
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
<li>새로운 기능: 확산되는 동안, :has()는 오래된 브라우저에서 폴리필이나 해결책이 필요할 수 있습니다.</li>
<li>성능: 복잡한 선택자를 사용한 CSS :has()의 강도가 높은 사용은 성능에 약간 영향을 미칠 수 있습니다.</li>
<li>가독성: 복잡한 :has() 문은 읽고 이해하기 어려울 수 있습니다.</li>
</ul>
<h1 id="구문" tabindex="-1"><a class="header-anchor" href="#구문" aria-hidden="true">#</a> 구문</h1>
<p>CSS :has() 선택자의 구문은 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>parent<span class="token operator">:</span><span class="token function">has</span><span class="token punctuation">(</span> <span class="token parameter"><span class="token punctuation">.</span>child<span class="token operator">-</span>selector</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 부모 요소에 대한 스타일 */</span>
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
<p>이 코드에서:</p>
<ul>
<li>.parent: 이는 스타일을 적용하려는 부모 요소를 대상으로 하는 선택자입니다. 여기에는 ID나 클래스 이름과 같은 유효한 CSS 선택자를 사용할 수 있습니다.</li>
<li>:has(.child-selector): 이는 .child-selector와 일치하는 자식 요소가 있는지 확인하는 가상 클래스입니다. 콜론 (😃 다음에 &quot;has&quot; 키워드가 옵니다. 그 뒤에는 자식 요소의 선택자를 포함하는 괄호가 나옵니다.</li>
</ul>
<p>중괄호({ }) 안에 있는 스타일은 부모 요소가 .child-selector에 의해 지정된 조건을 충족하는 자식 요소를 가지고 있는 경우에만 적용됩니다.</p>
<p>참고:</p>
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
<p>CSS :has()에서 여러 자식 요소를 대상으로하려면 쉼표로 구분하여 지정할 수 있습니다. CSS :has() 선택자의 가상 클래스는 태그 이름, 속성 선택자 또는 기타 유효한 선택자를 사용하여 요소를 대상으로할 수도 있습니다.</p>
<h1 id="혜택-및-사용-사례" tabindex="-1"><a class="header-anchor" href="#혜택-및-사용-사례" aria-hidden="true">#</a> 혜택 및 사용 사례</h1>
<ul>
<li>개선된 명시성: CSS :has()는 내용에 기반하여 요소를 대상으로 함으로써 더 깨끗하고 구체적인 CSS를 촉진합니다. 중첩된 선택자나 스타일링 목적으로 부모 요소에 불필요한 클래스를 부여하는 필요성을 줄입니다.</li>
<li>동적 스타일링: 동적 스타일의 가능성을 개방합니다. 적용된 스타일은 HTML의 실제 내용 구조에 따라 적응하고 변경할 수 있습니다.</li>
<li>결합 감소: 자식 콘텐츠를 기반으로 부모 스타일을 적용함으로써 스타일을 구체적인 HTML 구조에서 분리합니다. 재사용 가능한 구성 요소나 HTML 구조가 향후 변경될 수있는 상황에서 유용할 수 있습니다.</li>
</ul>
<h1 id="기능성" tabindex="-1"><a class="header-anchor" href="#기능성" aria-hidden="true">#</a> 기능성:</h1>
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
<h1 id="_1-css의-자식-콘텐츠를-기반으로-하는-대상-선택-has" tabindex="-1"><a class="header-anchor" href="#_1-css의-자식-콘텐츠를-기반으로-하는-대상-선택-has" aria-hidden="true">#</a> 1. CSS의 자식 콘텐츠를 기반으로 하는 대상 선택 :has()</h1>
<p>과거에는 CSS가 자식 콘텐츠를 기반으로 한 요소를 선택하는 방법이 제한적이었습니다. 여기서 새로운 CSS :has() 선택자가 게임을 바꾸는 방법을 소개합니다:</p>
<p>기존 방법:</p>
<p>중첩 선택자: 부모 요소 내에서 자식 요소를 선택하기 위해 선택자를 중첩하는 것이었습니다. 기능적이지만 복잡하고 유지보수가 어려울 수 있으며, 특히 깊게 중첩된 구조에 대해서는 더욱 어려워질 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 클래스가 "content"인 섹션 내의 제목(h2) 선택 */</span> 
<span class="token punctuation">.</span>content h2 
<span class="token punctuation">{</span> 
 <span class="token comment">/* 해당 섹션 내의 h2 제목에 대한 스타일 */</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>인접 형제 선택자 (~): 이는 특정 시나리오에서 사용할 수 있습니다. 즉, 즉시 형제의 콘텐츠를 기반으로 요소를 스타일링하려는 경우입니다. 그러나 이는 직접적인 형제만을 대상으로 하며 더 깊게 중첩된 요소는 대상으로 하지 않습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 이미지(img) 뒤에 따르는 단락(p) 선택 */</span> 
img <span class="token operator">~</span> p 
<span class="token punctuation">{</span> 
 <span class="token comment">/* 이미지 뒤에 따르는 단락에 대한 스타일 */</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS :has() 선택자가 등장하는 곳입니다. 이를 사용하면 특정 자식 요소들의 선택기 목록과 일치하는 부모 요소들을 대상으로 할 수 있습니다.</p>
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
<p>Markdown 형식의 테이블(href 모드) 예제 :</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">figure:has(figcaption)</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 캡션(figcaption 자식 요소)이 있는 figure에 대한 스타일 */</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ddd<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">figure:not(:has(figcaption))</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 캡션이 없는 figure에 대한 스타일 */</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서 첫 번째 rule은 figcaption 선택자와 일치하는 자식 요소를 가진 모든 figure 요소를 대상으로 합니다. 이는 figure가 자식으로 <code v-pre>figcaption</code> 요소를 가지고 있을 때만 테두리와 여백으로 스타일이 지정됨을 의미합니다.</p>
<p>두 번째 rule은 CSS <code v-pre>:not(:has(figcaption))</code>를 사용하여 figcaption과 일치하는 자식 요소가 없는 figure를 대상으로 합니다. 이를 통해 캡션이 없는 figure를 다른 방식으로 스타일링할 수 있으며, 아마도 테두리를 완전히 제거할 수도 있습니다.</p>
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
<p>자녀 콘텐츠를 대상으로 하는 장점:</p>
<ul>
<li>향상된 명확성: CSS의 :has()를 사용하면 콘텐츠를 기반으로 한 요소를 대상으로하여 더 구체적인 CSS를 작성할 수 있습니다. 이는 복잡한 중첩 선택기(예: figure 안에 있는 figcaption 요소를 대상으로 하는 것)를 줄이고 스타일링 목적으로 부모 요소에 불필요한 클래스를 추가하는 것을 피할 수 있습니다.</li>
<li>깔끔한 코드: 자녀 콘텐츠를 기반으로 한 스타일 규칙을 분리함으로써 CSS가 유지하기 쉽고 이해하기 쉬운 코드가 됩니다.</li>
</ul>
<h2 id="_2-매개변수를-사용하는-기능-의사-클래스" tabindex="-1"><a class="header-anchor" href="#_2-매개변수를-사용하는-기능-의사-클래스" aria-hidden="true">#</a> 2. 매개변수를 사용하는 기능 의사 클래스</h2>
<p>CSS의 :has()는 가상 클래스의 성격을 가지고 있습니다. 일반 선택자가 직접 요소를 대상으로 하는 것과 달리, :has()는 기능적인 의사 클래스입니다. 이는 CSS 코드 내에서 함수처럼 작동하며 괄호 안의 선택자 목록을 취합니다. 이 목록은 부모가 가져야 할 자녀 요소를 지정합니다.</p>
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
<p>구문:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* (.child-selector)과 일치하는 자식 요소를 가지고 있는 (.parent)을 대상으로 함 */</span>
<span class="token punctuation">.</span>parent<span class="token operator">:</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">.</span>child<span class="token operator">-</span>selector</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 부모 요소에 대한 스타일 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>.parent: 스타일을 적용하려는 부모 요소를 대상으로하는 선택기입니다. 클래스 이름이나 요소 태그와 같은 유효한 CSS 선택기가 될 수 있습니다.</li>
<li>:has(.child-selector): 이것은 .child-selector과 일치하는 자식 요소를 확인하는 가상 클래스입니다. 콜론 (:)은 &quot;has&quot;라는 키워드 앞에 온 다음, 괄호 안에 자식 요소를 위한 선택기가 따릅니다.</li>
</ul>
<p>다양한 자식 선택기를 사용한 예시:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* "ul" 자식(순서 없는 목록)을 가진 네비게이션 타겟 */</span>
<span class="token literal-property property">nav</span><span class="token operator">:</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token parameter">ul</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #eee<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* "h2" 제목 자식을 가진 아티클 타겟 */</span>
<span class="token literal-property property">article</span><span class="token operator">:</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token parameter">h2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  border<span class="token operator">-</span>bottom<span class="token operator">:</span> 1px solid #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서, :has()는 괄호 안에 다른 자식 선택자를 받습니다. 클래스 이름, 엘리먼트 태그뿐만 아니라 쉼표를 사용하여 둘을 결합하는 것도 가능합니다.</p>
<p>기능 가상 클래스의 장점:</p>
<ul>
<li>유연성: CSS :has() 내에서 선택자 목록을 지정하는 기능으로, 다양한 자식 콘텐츠 조건에 따라 부모 요소를 타겟팅하는 데 매우 유연성을 부여합니다.</li>
<li>동적 스타일링: 이는 HTML의 실제 콘텐츠 구조에 따라 적응하는 동적 스타일을 만들 수 있게 합니다.</li>
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
<h1 id="css-의사-클래스-비교-css-has-vs-not" tabindex="-1"><a class="header-anchor" href="#css-의사-클래스-비교-css-has-vs-not" aria-hidden="true">#</a> CSS 의사 클래스 비교: CSS :has() vs :not()</h1>
<p>CSS의 :has()와 :not()은 각각 고유한 기능을 제공하는 CSS의 기능적 가상 클래스입니다. 이들의 차이점과 비교 방법을 살펴보겠습니다:</p>
<p><img src="@source/docs/Tech/2024-03-28-WhatisCSShasSelector/img/WhatisCSShasSelector_1.png" alt="이미지1"></p>
<p><img src="@source/docs/Tech/2024-03-28-WhatisCSShasSelector/img/WhatisCSShasSelector_2.png" alt="이미지2"></p>
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
<h1 id="css-has-을-사용할-때-주의할-점" tabindex="-1"><a class="header-anchor" href="#css-has-을-사용할-때-주의할-점" aria-hidden="true">#</a> CSS :has()을 사용할 때 주의할 점:</h1>
<ul>
<li>브라우저 지원: 앞서 언급했듯이 CSS :has()는 지속적으로 지원이 발전 중인 상대적으로 새로운 기능입니다. Chrome 및 Safari와 같은 주요 브라우저에서 지원하고 있지만, 다른 브라우저들은 오래된 버전에 대해 폴리필(polyfill)이나 우회 방법이 필요할 수 있습니다.</li>
<li>성능: CSS :has()는 일부 경우에 성능에 영향을 줄 수 있습니다. 특히 네스트된 선택자와 일반적으로 사용될 때 브라우저가 자식 요소를 확인해야 하므로 전통적인 선택자보다 약간 느릴 수 있습니다.</li>
<li>가독성: CSS :has()는 명확할 수 있지만, 네스트된 선택자가 복잡한 :has() 문이 다른 개발자들에게 이해하기 어려울 수 있습니다.</li>
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
<h2 id="여기-몇-가지-추가적으로-고려해야-할-사항이-있습니다" tabindex="-1"><a class="header-anchor" href="#여기-몇-가지-추가적으로-고려해야-할-사항이-있습니다" aria-hidden="true">#</a> 여기 몇 가지 추가적으로 고려해야 할 사항이 있습니다:</h2>
<ul>
<li>대안: 구체적인 상황에 따라 기존 선택기나 전처리 도구(예: SASS)를 사용하여 CSS :has() 선택기에 의존하지 않고 비슷한 결과를 얻을 수 있는 대안 솔루션이 있을 수 있습니다.</li>
<li>점진적 향상: 모던 브라우저에서 CSS :has()를 전략적으로 활용할 수 있으며, 이전 브라우저를 위해 대체 스타일을 포함하여 플랫폼 간의 좋은 사용자 경험을 보장할 수 있습니다.</li>
</ul>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>CSS :has() 선택기를 통해 콘텐츠에 따라 요소를 스타일링할 수 있습니다. 마치 더 깨끗하고 유연한 스타일을 위한 슈퍼파워를 가진 것처럼! 따라서 내부에 있는 내용에 따라 부모 요소를 대상으로 지정할 수 있으며, 복잡한 중첩된 선택기를 버릴 수 있습니다.</p>
</div></template>
