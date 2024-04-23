<template><div><p>웹 개발의 세계에서 CSS(계단식 스타일 시트)는 개발자가 웹 페이지의 레이아웃과 표현을 제어할 수 있는 강력한 도구입니다. CSS의 가장 기본적인 측면 중 하나인 위치 지정은 요소가 페이지에 배치되는 방식을 결정합니다. CSS에서 위치 지정의 네 가지 주요 유형은 static, relative, absolute, 그리고 fixed입니다. 각 유형의 동작 방식은 다음과 같습니다:</p>
<p>Static Positioning:</p>
<p>이것은 모든 HTML 요소의 기본 위치 지정입니다. static 위치 지정을 갖는 요소는 문서의 정상적인 흐름에 따라 배치됩니다. 다시 말해, HTML에서 나타나는 순서대로 특별한 위치 지정 없이 배치됩니다. static 위치 지정을 보여주는 간단한 예시:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html<span class="token operator">></span>
  <span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>style<span class="token operator">></span>
      div<span class="token punctuation">.</span>static <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token keyword">static</span><span class="token punctuation">;</span>
        <span class="token literal-property property">border</span><span class="token operator">:</span> 3px solid #73AD21<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>h2<span class="token operator">></span>Position<span class="token operator">:</span> Static<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>position<span class="token operator">:</span> <span class="token keyword">static</span><span class="token punctuation">;</span> 속성을 갖는 엘리먼트는 특별한 위치에 배치되지 않고 항상 페이지의 일반적인 흐름에 따라 배치됩니다<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"static"</span><span class="token operator">></span>
    이 div 엘리먼트는 position<span class="token operator">:</span> <span class="token keyword">static</span><span class="token punctuation">;</span> 속성을 갖습니다<span class="token punctuation">.</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>상대적인 위치 지정을 통한 유연성과 적응성:</p>
<p>요소를 상대 위치로 설정하면 문서 흐름에서 일반적인 위치를 기준으로 배치됩니다. 이는 <code v-pre>top</code>, <code v-pre>right</code>, <code v-pre>bottom</code>, <code v-pre>left</code> 등의 속성을 사용하여 해당 요소를 이동시킬 수 있고 다른 요소의 위치에 영향을 주지 않습니다. 상대 위치 지정을 보여주는 예시:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html<span class="token operator">></span>
  <span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>style<span class="token operator">></span>
      div<span class="token punctuation">.</span>relative <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
        <span class="token literal-property property">left</span><span class="token operator">:</span> 30px<span class="token punctuation">;</span>
        <span class="token literal-property property">border</span><span class="token operator">:</span> 3px solid #73AD21<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>h2<span class="token operator">></span>Position<span class="token operator">:</span> Relative<span class="token punctuation">;</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>position<span class="token operator">:</span> relative<span class="token punctuation">;</span> 속성을 갖는 엘리먼트는 일반적인 위치를 기준으로 상대적으로 배치됩니다<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"relative"</span><span class="token operator">></span>
    이 div 엘리먼트는 position<span class="token operator">:</span> relative<span class="token punctuation">;</span> 속성을 갖습니다<span class="token punctuation">.</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>절대 위치 지정을 통한 정확한 배치:</p>
<p>절대 위치 지정을 사용하면 요소가 가장 가까운 상위 위치 지정된 조상에 대해 위치가 지정됩니다. 위치 지정된 조상이 없는 경우 요소는 초기 포함 블록(보통 <code v-pre>html</code> 요소)을 기준으로 위치가 지정됩니다. 절대 위치 지정은 요소를 일반 문서 흐름에서 제거하여 다른 요소의 위치에 영향을 주지 않습니다. 아래에 절대 위치 지정을 보여주는 간단한 예제가 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html<span class="token operator">></span>
  <span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>style<span class="token operator">></span>
      div<span class="token punctuation">.</span>relative <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> 400px<span class="token punctuation">;</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
        <span class="token literal-property property">border</span><span class="token operator">:</span> 3px solid #73AD21<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> 
      div<span class="token punctuation">.</span>absolute <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
        <span class="token literal-property property">top</span><span class="token operator">:</span> 80px<span class="token punctuation">;</span>
        <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
        <span class="token literal-property property">border</span><span class="token operator">:</span> 3px solid #73AD21<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>h2<span class="token operator">></span>Position<span class="token operator">:</span> Absolute<span class="token punctuation">;</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>position<span class="token operator">:</span> absolute<span class="token punctuation">;</span>을 가진 요소는 가장 가까운 위치 지정된 조상에 상대적으로 위치가 <span class="token function">지정됩니다</span> <span class="token punctuation">(</span>고정된 위치인 뷰포트에 대해 상대적으로 위치가 지정되지 않습니다<span class="token punctuation">)</span><span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"relative"</span><span class="token operator">></span>이 div 요소는 position<span class="token operator">:</span> relative<span class="token punctuation">;</span>를 가지고 있습니다<span class="token punctuation">.</span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"absolute"</span><span class="token operator">></span>이 div 요소는 position<span class="token operator">:</span> absolute<span class="token punctuation">;</span>를 가지고 있습니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>고정 위치 지정을 통한 쉬운 정렬:</p>
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
<p>고정 위치 요소는 브라우저 창을 기준으로 위치가 결정되어 페이지를 스크롤해도 항상 같은 위치에 유지됩니다. 항상 보이기를 원하는 헤더, 푸터 또는 네비게이션 바와 같은 요소를 만들기에 유용합니다. 고정 위치를 보여주는 간단한 예시는 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html<span class="token operator">></span>
  <span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>style<span class="token operator">></span>
      div<span class="token punctuation">.</span>fixed <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> fixed<span class="token punctuation">;</span>
        <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> 300px<span class="token punctuation">;</span>
        <span class="token literal-property property">border</span><span class="token operator">:</span> 3px solid #73AD21<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>h2<span class="token operator">></span>Position<span class="token operator">:</span> Fixed<span class="token punctuation">;</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>position<span class="token operator">:</span> fixed<span class="token punctuation">;</span>이 적용된 요소는 뷰포트를 기준으로 위치가 지정되어 페이지를 스크롤해도 계속 같은 위치에 유지됩니다<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fixed"</span><span class="token operator">></span>
    이 div 요소는 position<span class="token operator">:</span> fixed<span class="token punctuation">;</span>를 가지고 있습니다<span class="token punctuation">.</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>상대 및 절대 위치 지정을 결합하면 최소한의 노력으로 정교한 레이아웃을 만들 수 있습니다. 뷰포트를 기준으로 부모 요소를 위치시키고 해당 부모 요소 내에서 절대 위치로 자식 요소를 배치함으로써 화면 크기나 방향 변경에 우아하게 대응하는 복잡한 요소 배치를 만들 수 있습니다. 이 방법을 사용하면 기존의 레이아웃 기법(예: 플로팅 또는 테이블)에 비해 훨씬 더 깔끔하고 유지보수가 쉬운 코드 작성이 가능합니다.</p>
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
<p>Z-Index로 창의적인 디자인 향상하기:</p>
<p>CSS의 z-index 속성은 페이지의 요소 쌓는 순서를 제어하여 요소를 층으로 나누고 디자인에 깊이를 부여할 수 있습니다. 제공된 코드 스니펫에서 이미지는 position: absolute;로 절대 위치로 지정되어 해당 블록의 왼쪽 위 모서리에 고정됩니다. 그 이미지는 z-index가 -1로 할당되어 다른 요소들보다 뒤에 배치될 것을 나타냅니다. 이 경우 이미지는 제목과 단락 텍스트 뒤에 위치하여 층으로 나누어진 효과를 만듭니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html<span class="token operator">></span>
  <span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>style<span class="token operator">></span>
      <span class="token punctuation">.</span>container <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      
      <span class="token punctuation">.</span>img<span class="token operator">-</span>behind <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
        <span class="token literal-property property">left</span><span class="token operator">:</span> 0px<span class="token punctuation">;</span>
        <span class="token literal-property property">top</span><span class="token operator">:</span> 0px<span class="token punctuation">;</span>
        z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>This is a heading<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>img <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"img-behind"</span> src<span class="token operator">=</span><span class="token string">"background-image.jpg"</span> alt<span class="token operator">=</span><span class="token string">"Image behind heading"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>이미지가 z<span class="token operator">-</span>index가 <span class="token operator">-</span><span class="token number">1</span>이기 때문에 텍스트 뒤에 배치됩니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 z-index와 CSS의 fixed positioning 사이의 관계를 살펴보겠습니다.</p>
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
<p>z-인덱스 기본 사항:</p>
<p>z-인덱스는 CSS 속성으로, 오버랩되는 HTML 요소의 순서를 정의합니다. 더 높은 인덱스를 가진 요소는 낮은 인덱스를 가진 요소 위에 배치됩니다. z-인덱스는 position: absolute, position: relative 또는 position: fixed와 같이 위치 속성이 지정된 요소에만 작동한다는 점이 중요합니다.</p>
<p>고정 위치와 z-인덱스:</p>
<p>요소가 고정 위치를 가지면 문서의 일반적인 흐름에서 제거되어 해당 요소가 포함된 요소가 아닌 브라우저 창과의 관계에 따라 배치됩니다. 결과적으로 고정 위치 요소는 다른 위치 지정된 요소와는 다르게 자신을 포함하는 요소들의 쌓임 맥락과 상호작용하지 않습니다. z-인덱스 속성은 고정 위치와 함께 작동하지만, 알아두어야 할 몇 가지 세심함이 있습니다:</p>
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
<p>고정된 위치를 가진 요소는 z-index 값과 상관없이 항상 동일한 쌓임 컨텍스트 내의 다른 요소들 위에 표시됩니다. 즉, 하나의 요소가 다른 고정된 위치를 가진 요소보다 낮은 z-index를 가지더라도 여전히 그 위에 표시될 것입니다.</p>
<p>만약 z-index가 지정되지 않은 두 개의 위치를 가진 요소가 겹친다면, HTML 코드에서 마지막에 위치한 요소가 맨 위에 표시됩니다.</p>
<p>오류 수정:</p>
<p>올바른 레이어링을 보장하고 예상치 못한 동작을 피하려면 다음 단계를 따르세요:</p>
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
<li>HTML 구조를 확인하세요: 쌓이기를 원하는 요소가 올바르게 중첩되어 있는지 확인해보세요.</li>
<li>명시적인 z-index 값 설정: 위치가 지정된 요소들에게 (고정 위치 요소도 포함하여) 명시적으로 z-index 값을 할당하여 그들의 쌓이는 순서를 제어하세요.</li>
<li>테스트하고 조정하세요: 원하는 시각적 계층 구조를 달성하기 위해 다양한 z-index 값에 대한 실험을 해보고 조정해 보세요.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html<span class="token operator">></span>
  <span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>style<span class="token operator">></span>
      <span class="token punctuation">.</span>container <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      
      <span class="token punctuation">.</span>img<span class="token operator">-</span>behind <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> fixed<span class="token punctuation">;</span>
        <span class="token literal-property property">left</span><span class="token operator">:</span> 0px<span class="token punctuation">;</span>
        <span class="token literal-property property">top</span><span class="token operator">:</span> 0px<span class="token punctuation">;</span>
        z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      
      <span class="token punctuation">.</span>img<span class="token operator">-</span>front <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> fixed<span class="token punctuation">;</span>
        <span class="token literal-property property">left</span><span class="token operator">:</span> 50px<span class="token punctuation">;</span>
        <span class="token literal-property property">top</span><span class="token operator">:</span> 50px<span class="token punctuation">;</span>
        z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>This is a heading<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>img <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"img-behind"</span> src<span class="token operator">=</span><span class="token string">"background-image.jpg"</span> alt<span class="token operator">=</span><span class="token string">"Image behind heading"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>img <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"img-front"</span> src<span class="token operator">=</span><span class="token string">"foreground-image.jpg"</span> alt<span class="token operator">=</span><span class="token string">"Image in front of heading"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>더 높은 z<span class="token operator">-</span>index를 갖는 이미지가 앞에 위치하므로<span class="token punctuation">,</span> 낮은 z<span class="token operator">-</span>index를 갖는 이미지 위에 덮어씌워집니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>불러오면, z-index와 위치 지정을 이해하는 것이 웹 프로젝트에서 잘 구성되고 시각적으로 매력적인 레이아웃을 작성하는 데 중요함을 기억하세요!</p>
<p>마무리</p>
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
<p>CSS 위치 지정은 웹 개발 작업을 간편하게 만들어주고 시각적으로 멋진 사용자 친화적인 웹사이트를 만들 수 있는 강력한 도구입니다. CSS에서 제공되는 다양한 위치 지정 기술을 숙달함으로써 정확한 레이아웃, 유연한 디자인, 그리고 매력적인 사용자 경험을 쉽게 달성할 수 있습니다. 개인 블로그, 전자 상거래 사이트 또는 웹 애플리케이션을 개발하고 있다면 CSS 위치 지정을 통해 개발자로서의 삶을 더욱 쉽게 만들고 프로젝트를 성공적으로 수행할 수 있습니다. 그러니 무엇을 기다리고 있나요? 오늘부터 CSS 위치 지정의 세계에 뛰어들어 웹 개발 능력의 모든 잠재력을 펼쳐보세요.</p>
</div></template>
