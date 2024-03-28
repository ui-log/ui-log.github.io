<template><div><p><img src="@source/docs/Tech/2024-03-28-DevelopingAccessibleandResponsiveTableswithCSSandJavaScript/img/DevelopingAccessibleandResponsiveTableswithCSSandJavaScript_0.png" alt="개발"></p>
<p>웹 개발 영역에서 데이터 테이블의 접근성과 반응성을 보장하는 것은 콘텐츠를 모두에게 읽기 쉽고 넓은 디바이스 범위에서 기능적으로 사용할 수 있게 하는 데 중요합니다. 테이블은 구조화된 데이터를 표시하는 데 기본적인 요소이지만, 작은 화면과 접근성 장치에서는 문제가 발생할 수 있습니다. 이 기사에서는 CSS와 JavaScript를 활용한 기술을 탐색하여 데이터 테이블을 접근성 있는 반응형으로 만드는 방법을 살펴보며, 모든 사용자가 디바이스나 능력에 관계없이 데이터를 효과적으로 상호작용할 수 있도록 합니다.</p>
<h1 id="테이블에서-접근성-사로-잡기" tabindex="-1"><a class="header-anchor" href="#테이블에서-접근성-사로-잡기" aria-hidden="true">#</a> 테이블에서 접근성 사로 잡기</h1>
<p>웹 디자인에서의 접근성은 장애를 가진 사용자가 웹사이트와 도구를 인식하고 이해하며 탐색하고 상호작용할 수 있도록 하는 것을 보장합니다. 테이블의 경우, 이는 스크린 리더 및 기타 보조 기술이 정확하게 해석하고 전달할 수 있도록 테이블 내부의 정보를 활성화하는 것을 의미합니다.</p>
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
<h1 id="스크린-리더를-위한-시멘틱-html" tabindex="-1"><a class="header-anchor" href="#스크린-리더를-위한-시멘틱-html" aria-hidden="true">#</a> 스크린 리더를 위한 시멘틱 HTML</h1>
<p>테이블을 접근 가능하게 만들기 위해 시멘틱 HTML을 사용해보세요. <code v-pre>table</code>, <code v-pre>th</code>, 및 <code v-pre>caption</code> 요소를 적절하게 사용하여 테이블 구조, 헤딩, 그리고 해당 설명을 정의하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">|</span> Product <span class="token operator">|</span> Quantity <span class="token operator">|</span> Sales   <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">|</span>
<span class="token operator">|</span> Widgets <span class="token operator">|</span> <span class="token number">50</span>       <span class="token operator">|</span> $1<span class="token punctuation">,</span><span class="token number">000</span>  <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">|</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">|</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="aria-역할-및-속성" tabindex="-1"><a class="header-anchor" href="#aria-역할-및-속성" aria-hidden="true">#</a> ARIA 역할 및 속성</h1>
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
<p>웹 요소의 역할과 상태에 대한 보조 기술의 추가 세부 정보를 제공하는 도구인 Accessible Rich Internet Applications (ARIA) 역할 및 속성은 표의 경우 role=&quot;table&quot; 또는 role=&quot;grid&quot;을 사용하여 스크린 리더가 데이터를 해석하는 방식을 향상시킬 수 있습니다.</p>
<p>자세한 내용은 Flexbox를 활용한 반응형 웹 디자인 만들기를 읽어보세요.</p>
<h1 id="css를-활용한-응답성-향상" tabindex="-1"><a class="header-anchor" href="#css를-활용한-응답성-향상" aria-hidden="true">#</a> CSS를 활용한 응답성 향상</h1>
<p>접근성의 기초가 마련된 후, 다음 과제는 테이블이 어떤 화면 크기에서도 멋지게 보이고 기능이 유지되도록 보장하는 것입니다.</p>
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
<h1 id="오버플로우-컨테이너" tabindex="-1"><a class="header-anchor" href="#오버플로우-컨테이너" aria-hidden="true">#</a> 오버플로우 컨테이너</h1>
<p>한 가지 간단한 기술은 테이블을 overflow-x: auto;가 있는 div로 감싸는 것입니다. 이 방법을 사용하면 테이블은 자연스러운 레이아웃을 유지하면서 작은 화면용 가로 스크롤바를 제공할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>table<span class="token operator">-</span>container <span class="token punctuation">{</span>
  overflow<span class="token operator">-</span>x<span class="token operator">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="반응형-그리드-레이아웃" tabindex="-1"><a class="header-anchor" href="#반응형-그리드-레이아웃" aria-hidden="true">#</a> 반응형 그리드 레이아웃</h1>
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
<p>더 발전된 솔루션으로, CSS Grid를 사용하여 테이블을 더 반응 형 형식으로 변환할 수 있습니다. 이는 테이블 헤더를 숨기고 각 행을 그리드로 표시하여 작은 화면에서 데이터가 가독성 있게 표시되도록 하는 것을 포함합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">media</span> <span class="token punctuation">(</span><span class="token parameter">max<span class="token operator">-</span>width<span class="token operator">:</span> 600px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  table<span class="token punctuation">,</span> thead<span class="token punctuation">,</span> tbody<span class="token punctuation">,</span> th<span class="token punctuation">,</span> td<span class="token punctuation">,</span> tr <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> block<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  thead tr <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token operator">-</span>9999px<span class="token punctuation">;</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token operator">-</span>9999px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  tr <span class="token punctuation">{</span> <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid #ccc<span class="token punctuation">;</span> <span class="token punctuation">}</span>
  td <span class="token punctuation">{</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
    padding<span class="token operator">-</span>left<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> right<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token literal-property property">td</span><span class="token operator">:</span>before <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> 6px<span class="token punctuation">;</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> 6px<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">45</span><span class="token operator">%</span><span class="token punctuation">;</span>
    padding<span class="token operator">-</span>right<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
    white<span class="token operator">-</span>space<span class="token operator">:</span> nowrap<span class="token punctuation">;</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> left<span class="token punctuation">;</span>
    font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/* 데이터 레이블링 */</span>
  <span class="token literal-property property">td</span><span class="token operator">:</span>nth<span class="token operator">-</span><span class="token keyword">of</span><span class="token operator">-</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">:</span>before <span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"제품"</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token literal-property property">td</span><span class="token operator">:</span>nth<span class="token operator">-</span><span class="token keyword">of</span><span class="token operator">-</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">:</span>before <span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"수량"</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token literal-property property">td</span><span class="token operator">:</span>nth<span class="token operator">-</span><span class="token keyword">of</span><span class="token operator">-</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token operator">:</span>before <span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"매출"</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="상호-작용을-위한-javascript-활용" tabindex="-1"><a class="header-anchor" href="#상호-작용을-위한-javascript-활용" aria-hidden="true">#</a> 상호 작용을 위한 JavaScript 활용</h1>
<p>사용자 경험을 더 향상시키기 위해 JavaScript를 사용하여 사용자 상호 작용이나 화면 크기에 따라 테이블을 동적으로 조절할 수 있습니다.</p>
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
<h1 id="정렬-및-필터링" tabindex="-1"><a class="header-anchor" href="#정렬-및-필터링" aria-hidden="true">#</a> 정렬 및 필터링</h1>
<p>정렬 및 필터링 기능을 구현하면 사용자가 대형 테이블을 효율적으로 탐색할 수 있습니다. 테이블 헤더에 이벤트 리스너를 추가하여 정렬 기능을 트리거할 수 있으며, 입력 필드는 사용자 쿼리에 기반하여 관련 행을 숨기거나 표시하는 필터로 사용할 수 있습니다.</p>
<h1 id="축소-가능한-섹션" tabindex="-1"><a class="header-anchor" href="#축소-가능한-섹션" aria-hidden="true">#</a> 축소 가능한 섹션</h1>
<p>매우 큰 테이블의 경우 JavaScript를 사용하여 축소 가능한 섹션을 생성할 수 있습니다. 이를 통해 사용자는 가장 관련 있는 정보에 집중하고 필요에 따라 섹션을 확장할 수 있습니다.</p>
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
<h1 id="워드프레스-사이트를-위한-편리한-호스팅" tabindex="-1"><a class="header-anchor" href="#워드프레스-사이트를-위한-편리한-호스팅" aria-hidden="true">#</a> 워드프레스 사이트를 위한 편리한 호스팅</h1>
<p>워드프레스 사이트를 위한 좋은 호스팅을 찾고 계신가요? Host4Biz에 주목해보세요. 유럽에 현대적인 서버와 우크라이나 팀을 보유한 신뢰할 수 있는 호스팅 서비스입니다.</p>
<p>그리고 MYHOST10 프로모션 코드를 사용하면 첫 결제 시 10% 할인 혜택을 받을 수 있습니다. 이를 위해 여기에서 등록하고 결제 전에 코드를 입력해주세요.</p>
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
<p>CSS와 JavaScript를 사용하여 접근 가능하고 반응 형 테이블을 개발하는 것은 포괄적이고 사용자 친화적인 웹 경험을 만들기 위해 중요합니다. 개발자는 시멘틱 HTML의 견고한 기반으로 시작하고 CSS와 JavaScript를 사용하여 기능과 레이아웃을 향상시킴으로써, 데이터 테이블이 장애를 가진 사용자에게 접근 가능하며 모든 화면 크기나 장치에 적응할 수 있도록 보장할 수 있습니다. 이 접근 가능성과 반응 형성에 대한 이중 초점은 사용자 경험을 향상시킬 뿐만 아니라 웹 개발의 최고의 실천 방법과도 일치하여, 웹사이트를 보다 넓은 관객에게 매력적으로 만듭니다.</p>
</div></template>
