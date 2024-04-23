<template><div><h2 id="javascript가-필요-없어요" tabindex="-1"><a class="header-anchor" href="#javascript가-필요-없어요" aria-hidden="true">#</a> JavaScript가 필요 없어요...</h2>
<p><img src="@source/docs/Tech/2024-04-19-CreateyourownInstagrambyusingthismindblowingCSSfeature/img/CreateyourownInstagrambyusingthismindblowingCSSfeature_0.png" alt="CreateyourownInstagrambyusingthismindblowingCSSfeature_0.png"></p>
<p>제목을 읽으시면 아마 두 가지 반응 중 하나를 보일 것 같아요... &quot;멋있다!&quot; 또는 &quot;지루해, 이미 알고 있어서...&quot;</p>
<p>하지만 제가 무슨 말인지 모르시는 분들을 위해 CSS 마법을 발견해보러 가볼까요?</p>
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
<p>제가 얘기하려는 것은 CSS Scroll Snap에 대한 것입니다. Scroll Snap은 웹 페이지의 스크롤 동작을 정밀하게 제어할 수 있게 해주는 CSS 기능으로, 스크롤 중에 콘텐츠가 이미지가 될 때 사전에 설정된 위치에서 자동으로 정렬될 수 있도록 합니다.</p>
<p>이 기능은 특히 인스타그램과 같이 긴 내용이나 이미지가 다수 포함된 웹사이트에서 자연스럽고 직관적인 탐색 경험을 제공합니다.</p>
<h1 id="scroll-snap의-주요-구성-요소" tabindex="-1"><a class="header-anchor" href="#scroll-snap의-주요-구성-요소" aria-hidden="true">#</a> Scroll Snap의 주요 구성 요소</h1>
<p>먼저, 모든 것이 발생하는 스크롤 컨테이너가 필요합니다. 이것은 전체 웹사이트일 수도 있고 그 중 일부분일 수도 있습니다.</p>
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
<p>다음 단계는 스크롤 스냅 포인트라고 알려진 앵커 포인트를 정의하는 것입니다. 이 포인트에서 스크롤이 멈추고 어느 정도 자석처럼 고정됩니다.</p>
<p>마지막으로, 스크롤 스냅핑의 행동을 정의해야 합니다. 다음과 같은 여러 값들이 있습니다: none, mandatory 또는 proximity.</p>
<ul>
<li>none: 스크롤 스냅핑을 비활성화합니다.</li>
<li>mandatory: 콘텐츠가 스크롤한 후 가장 가까운 스냅 포인트에 맞춰집니다.</li>
<li>proximity: 콘텐츠가 일정 임계값 내에 있을 경우 가장 가까운 스냅 포인트에 맞춰집니다.</li>
</ul>
<p>마지막으로, 스크롤 스냅 정렬입니다. 이 속성은 스냅할 때 스크롤 컨테이너 내에서 컨텐츠가 어떻게 정렬되는지를 지정합니다. start, center, end, none으로 설정할 수 있어 컨텐츠 표시에 유연성을 제공합니다.</p>
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
<h1 id="css-스크롤-스냅-구현" tabindex="-1"><a class="header-anchor" href="#css-스크롤-스냅-구현" aria-hidden="true">#</a> CSS 스크롤 스냅 구현</h1>
<h2 id="스크롤-스냅-지점-정의" tabindex="-1"><a class="header-anchor" href="#스크롤-스냅-지점-정의" aria-hidden="true">#</a> 스크롤 스냅 지점 정의</h2>
<p>스냅 기능을 발생시키고 싶은 스크롤 컨테이너 내의 위치를 결정하세요. 이를 위해 scroll-snap-type 및 scroll-snap-align 속성을 사용합니다.</p>
<p>스크롤이 발생하는 컨테이너에 이를 적용하세요.</p>
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
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.scroll-wrapper</span><span class="token punctuation">{</span>
  <span class="token property">scroll-snap-type</span><span class="token punctuation">:</span> y mandatory<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The &quot;y&quot; property indicates that the snapping occurs vertically. If you replace it with &quot;x&quot;, the snapping will occur horizontally.</p>
<p>Next, apply the following property to your containers that will snap:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.scroll-wrapper .content</span><span class="token punctuation">{</span>
  <span class="token property">scroll-snap-align</span><span class="token punctuation">:</span> start<span class="token punctuation">;</span>
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
<h1 id="세부-조정" tabindex="-1"><a class="header-anchor" href="#세부-조정" aria-hidden="true">#</a> 세부 조정</h1>
<p>다양한 스크롤 스냅 구성을 실험하여 원하는 효과를 얻어보세요. 스냅 포인트와 정렬을 조정하여 다양한 장치 및 화면 크기에서 최적의 사용자 경험을 확보하세요.</p>
<p>영감이 필요하다면 이 웹사이트에서 멋진 예제들을 확인해보세요: <a href="https://webflow.com/made-in-webflow/scroll-snap" target="_blank" rel="noopener noreferrer">Webflow - Scroll Snap 제작 예시<ExternalLinkIcon/></a></p>
<p><img src="@source/docs/Tech/2024-04-19-CreateyourownInstagrambyusingthismindblowingCSSfeature/img/CreateyourownInstagrambyusingthismindblowingCSSfeature_1.png" alt="Instagram을 만들고 CSS 기능을 사용하여 창의적인 디자인을 만들어 보세요"></p>
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
<p>저의 멋진 CSS 기능을 읽고 시도해본 것을 즐겼으면 좋겠어요. 만약 즐겼다면 댓글로 알려주세요. 클랩하고 구독하는 것을 잊지 마세요!</p>
<p>코딩 즐기세요!</p>
</div></template>
