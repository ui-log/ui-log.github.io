<template><div><p><img src="@source/docs/Nextjs/2024-03-29-3UsefulHTMLCSSTricksForDevelopersandNon-DevelopersOfAllLevels/img/3UsefulHTMLCSSTricksForDevelopersandNon-DevelopersOfAllLevels_0.png" alt="이미지"></p>
<p>막 시작한 사람이거나 저와 같이 중간에 있는 사람이거나 숙련된 개발자이거나 블로그/사이트를 더욱 맞춤화하려는 누군가이던, 이 세 가지 요령은 여러분의 코딩 도구 상자에 가치를 더할 수 있습니다.</p>
<p>Flexbox를 활용한 쉬운 가운데 정렬</p>
<p><img src="@source/docs/Nextjs/2024-03-29-3UsefulHTMLCSSTricksForDevelopersandNon-DevelopersOfAllLevels/img/3UsefulHTMLCSSTricksForDevelopersandNon-DevelopersOfAllLevels_1.png" alt="이미지"></p>
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
<p>요소를 가운데 정렬하는 것은 복잡할 수 있지만 매우 흔한 작업입니다. Flexbox는 몇 줄의 코드로 이 작업을 간단하게 만들어줍니다. 부모 요소 내에서 div를 가운데 정렬하려면 아래 스타일을 적용하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>centered<span class="token operator">-</span>div <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
  align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 100vh<span class="token punctuation">;</span> <span class="token comment">/* 이는 전체 뷰포트 높이를 보장합니다 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게 하면 화면 크기에 관계없이 내용물이 완벽하게 가운데 정렬됩니다.</p>
<p>체크박스 및 라디오 버튼을 원하는 방식으로 스타일링하기</p>
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
<img src="@source/docs/Nextjs/2024-03-29-3UsefulHTMLCSSTricksForDevelopersandNon-DevelopersOfAllLevels/img/3UsefulHTMLCSSTricksForDevelopersandNon-DevelopersOfAllLevels_2.png" />
<p>모던 웹 디자인에 필요한 멋진 요소가 기본 폼 요소에는 부족할 수 있어요. 기본 입력란을 숨기고 가상 요소를 사용하여 돋보이는 사용자 지정 디자인을 만들 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>custom<span class="token operator">-</span>checkbox <span class="token punctuation">{</span>
  <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>custom<span class="token operator">-</span>checkbox <span class="token operator">+</span> label<span class="token operator">:</span>before <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">' '</span><span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token operator">-</span>block<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 15px<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 15px<span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #f0f0f0<span class="token punctuation">;</span>
  <span class="token comment">/* 추가적인 사용자 정의 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 방법을 사용하면 폼 요소의 외관을 완전히 제어할 수 있어요.</p>
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
<p>자바스크립트 없이 반응형 내비게이션</p>
<p><img src="@source/docs/Nextjs/2024-03-29-3UsefulHTMLCSSTricksForDevelopersandNon-DevelopersOfAllLevels/img/3UsefulHTMLCSSTricksForDevelopersandNon-DevelopersOfAllLevels_3.png" alt="Responsive Navigation"></p>
<p>오늘날의 모바일 중심 세상에서는 반응형 내비게이션 메뉴가 필수입니다. 이를 숨겨진 체크박스를 사용하여 숨김/표시하면서 순수 CSS로 구현할 수 있습니다:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">#nav-toggle</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#nav-toggle:checked + .menu</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
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
<p>이 기술을 활용하면 자바스크립트에 의존하지 않고 다양한 기기에 적응하는 내비게이션이 가능합니다.</p>
<p>공유하고 싶은 간단하지만 유용한 코딩 팁 있나요? 댓글로 공유해주세요!</p>
<p>면책 조항 및 출처:</p>
<p>이런 팁을 구현할 때 브라우저 호환성을 고려해야 합니다. 일관된 사용자 경험을 보장하려면 항상 다양한 브라우저와 기기로 테스트해야 합니다.</p>
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
</div></template>
