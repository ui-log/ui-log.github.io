<template><div><p><img src="@source/docs/Tech/2024-04-19-10lesserknownCSStrickspart2/img/10lesserknownCSStrickspart2_0.png" alt="이미지"></p>
<h1 id="_10가지-잘-알려지지-않은-css-트릭-파트-2" tabindex="-1"><a class="header-anchor" href="#_10가지-잘-알려지지-않은-css-트릭-파트-2" aria-hidden="true">#</a> 10가지 잘 알려지지 않은 CSS 트릭 파트 2</h1>
<p>아직 들어보지 못한 CSS 트릭은 10개 이상이 있습니다. 그래서 우리는 잘 알려지지 않은 CSS 트릭 시리즈의 두 번째 부분에 뛰어들어 봅니다. 즐겁게 즐기며 이러한 트릭이 웹 디자인 실력을 향상하는 데 도움이 될 것입니다. 그럼 무엇을 기다리고 있나요?</p>
<h2 id="_01-flexbox를-사용한-수직-중앙-정렬" tabindex="-1"><a class="header-anchor" href="#_01-flexbox를-사용한-수직-중앙-정렬" aria-hidden="true">#</a> 01. flexbox를 사용한 수직 중앙 정렬</h2>
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
<p>컨테이너 안에 컨텐츠를 가로 및 세로로 쉽게 가운데 정렬하려면 플렉스박스를 사용하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
   <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
   align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
   justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-선택-사항을-위한-사용자-정의-하이라이트-색상" tabindex="-1"><a class="header-anchor" href="#_02-선택-사항을-위한-사용자-정의-하이라이트-색상" aria-hidden="true">#</a> 02. 선택 사항을 위한 사용자 정의 하이라이트 색상</h2>
<p>웹페이지에서 텍스트를 선택할 때 하이라이트 색상을 사용자 정의하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">:</span><span class="token operator">:</span>selection <span class="token punctuation">{</span>
   background<span class="token operator">-</span>color<span class="token operator">:</span> #ffcc00<span class="token punctuation">;</span>
   <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">333</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-입력란-플레이스홀더-텍스트-스타일링" tabindex="-1"><a class="header-anchor" href="#_03-입력란-플레이스홀더-텍스트-스타일링" aria-hidden="true">#</a> 03. 입력란 플레이스홀더 텍스트 스타일링</h2>
<p>입력란 내부의 플레이스홀더 텍스트 스타일링.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">:</span><span class="token operator">:</span>placeholder <span class="token punctuation">{</span>
   <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">999</span><span class="token punctuation">;</span>
   font<span class="token operator">-</span>style<span class="token operator">:</span> italic<span class="token punctuation">;</span>
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
<h2 id="_04-그라데이션-테두리" tabindex="-1"><a class="header-anchor" href="#_04-그라데이션-테두리" aria-hidden="true">#</a> 04. 그라데이션 테두리</h2>
<p>테두리를 만들 때 background-clip 속성을 사용하여 그라데이션으로 테두리를 만들어보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>element <span class="token punctuation">{</span>
   <span class="token literal-property property">border</span><span class="token operator">:</span> 2px solid transparent<span class="token punctuation">;</span>
   background<span class="token operator">-</span>clip<span class="token operator">:</span> padding<span class="token operator">-</span>box<span class="token punctuation">;</span>
   background<span class="token operator">-</span>image<span class="token operator">:</span> linear<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> red<span class="token punctuation">,</span> blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_05-vw-단위를-사용한-변수-글꼴-크기" tabindex="-1"><a class="header-anchor" href="#_05-vw-단위를-사용한-변수-글꼴-크기" aria-hidden="true">#</a> 05. vw 단위를 사용한 변수 글꼴 크기</h2>
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
<p>화면 너비에 따라 글꼴 크기를 조정하여 민첩한 반응형 글꼴을 만들어보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>body <span class="token punctuation">{</span>
   font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>16px <span class="token operator">+</span> 1vw<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_06-다채로운-요소에-대한-원뿔-그라데이션" tabindex="-1"><a class="header-anchor" href="#_06-다채로운-요소에-대한-원뿔-그라데이션" aria-hidden="true">#</a> 06. 다채로운 요소에 대한 원뿔 그라데이션</h2>
<p>원뿔 그라데이션을 사용하여 다채롭고 동적인 배경을 만들어보세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>element <span class="token punctuation">{</span>
   <span class="token literal-property property">background</span><span class="token operator">:</span> conic<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>#ff5733<span class="token punctuation">,</span> #33ff57<span class="token punctuation">,</span> #5733ff<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_07-반응형-텍스트를-위한-clamp-함수" tabindex="-1"><a class="header-anchor" href="#_07-반응형-텍스트를-위한-clamp-함수" aria-hidden="true">#</a> 07. 반응형 텍스트를 위한 Clamp() 함수</h2>
<p>clamp() 함수를 사용하여 폰트 크기의 범위를 설정하여 다양한 화면 크기에서 가독성을 보장하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>text <span class="token punctuation">{</span>
   font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token function">clamp</span><span class="token punctuation">(</span>16px<span class="token punctuation">,</span> 4vw<span class="token punctuation">,</span> 24px<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<h2 id="_08-폰트-디스플레이-스왑을-통한-효율적인-폰트-로딩" tabindex="-1"><a class="header-anchor" href="#_08-폰트-디스플레이-스왑을-통한-효율적인-폰트-로딩" aria-hidden="true">#</a> 08. 폰트 디스플레이 스왑을 통한 효율적인 폰트 로딩</h2>
<p>폰트 디스플레이: 스왑; 속성을 사용하여 사용자 정의 폰트가 로딩되는 동안 대체 폰트를 표시하여 웹 폰트의 성능을 향상시킬 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@font<span class="token operator">-</span>face <span class="token punctuation">{</span>
   font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">'YourFont'</span><span class="token punctuation">;</span>
   <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token string">'your-font.woff2'</span><span class="token punctuation">)</span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'woff2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   font<span class="token operator">-</span>display<span class="token operator">:</span> swap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_09-커스텀-스크롤-스냅-포인트" tabindex="-1"><a class="header-anchor" href="#_09-커스텀-스크롤-스냅-포인트" aria-hidden="true">#</a> 09. 커스텀 스크롤 스냅 포인트</h2>
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
<p>다음과 같이 Markdown 형식의 표로 변경하십시오.</p>
<p>구현자 맞춤 스크롤 스냅 포인트를 사용하여 더 부드러운 스크롤 경험을 제공하십니다. 특히 이미지 갤러리나 슬라이더에 유용합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>scroll<span class="token operator">-</span>container <span class="token punctuation">{</span>
    scroll<span class="token operator">-</span>snap<span class="token operator">-</span>type<span class="token operator">:</span> y mandatory<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>scroll<span class="token operator">-</span>item <span class="token punctuation">{</span>
    scroll<span class="token operator">-</span>snap<span class="token operator">-</span>align<span class="token operator">:</span> start<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-폰트-변형-설정을-사용한-가변-폰트-스타일링" tabindex="-1"><a class="header-anchor" href="#_10-폰트-변형-설정을-사용한-가변-폰트-스타일링" aria-hidden="true">#</a> 10. 폰트 변형 설정을 사용한 가변 폰트 스타일링</h2>
<p>가변 폰트와 font-variation-settings 속성을 활용하여 글꼴 두께, 스타일 및 기타 변형에 대한 세밀한 제어를 얻을 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>text <span class="token punctuation">{</span>
   font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">'YourVariableFont'</span><span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
   font<span class="token operator">-</span>variation<span class="token operator">-</span>settings<span class="token operator">:</span> <span class="token string">'wght'</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token string">'ital'</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
