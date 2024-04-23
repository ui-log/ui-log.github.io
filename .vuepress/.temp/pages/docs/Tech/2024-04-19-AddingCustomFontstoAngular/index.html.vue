<template><div><p>간혹 개인 프로젝트, 학술 프로젝트 또는 고객을 위한 프로젝트를 진행할 때, 최종 목표에 따라 선택한 글꼴은 사이트 전반적인 느낌과 조화를 이루어야 합니다. 오펜하이머 영화에 바비 영화 글꼴을 사용하지 않겠죠?</p>
<p>처음에는 이를 어떻게 해야 할지 몰랐어요. 그래서 구글에서 조금 검색해보니 해결책을 찾았어요. 다만 마음에 들지 않았던 건, 다른 사이트를 왔다 갔다 하며 어떻게 하는지 맞추려고 노력해야 했던 점이었어요. 이 글에서는 처음부터 끝까지 전체 과정을 설명하고 있어요 — 여러분들이 선호하는 글꼴을 적용할 수 있게 될 거예요.</p>
<p>그럼 시작해봅시다.</p>
<p>단계 1: 글꼴 다운로드</p>
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
<p>Google Fonts에 방문해보세요. 거기서 여러 폰트들을 스크롤하며 선택할 수 있어요. 필터 기능은 원하는 것이 무엇인지 아는 경우 유용하게 사용할 수 있어요.</p>
<p><img src="@source/docs/Tech/2024-04-19-AddingCustomFontstoAngular/img/AddingCustomFontstoAngular_0.png" alt="이미지"></p>
<p>관심 있는 폰트를 선택하고 '패밀리 다운로드' 버튼을 사용해 다운로드하세요.</p>
<p><img src="@source/docs/Tech/2024-04-19-AddingCustomFontstoAngular/img/AddingCustomFontstoAngular_1.png" alt="이미지"></p>
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
<p>단계 2: 파일 추출 및 프로젝트로 가져오기</p>
<p>압축 파일로 다운로드되며 해제해야 합니다.</p>
<p><img src="@source/docs/Tech/2024-04-19-AddingCustomFontstoAngular/img/AddingCustomFontstoAngular_2.png" alt="이미지"></p>
<p>추출 후에는 해당 파일을 assets 폴더에 복사해야 합니다. 여기서 모든 폰트를 fonts 폴더에 넣거나 단순히 assets 하위에 배치할 수 있는 선택권이 있습니다. 프로젝트를 정리하기 위해 제 경우 fonts 폴더에 넣었습니다.</p>
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
<p>단계 3: CSS 파일에 추가하기</p>
<p><img src="@source/docs/Tech/2024-04-19-AddingCustomFontstoAngular/img/AddingCustomFontstoAngular_3.png" alt="Adding Custom Fonts to Angular"></p>
<p>이제 프로젝트 내에 폰트가 준비되었으니, styles.css 파일로 이동해봅시다.</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'Mynerve'</span><span class="token punctuation">;</span>
    <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'assets/fonts/Mynerve/Mynerve-Regular.ttf'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'truetype'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
    <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
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
<p><img src="@source/docs/Tech/2024-04-19-AddingCustomFontstoAngular/img/AddingCustomFontstoAngular_4.png" alt="이미지"></p>
<h3 id="단계-4-폰트-적용" tabindex="-1"><a class="header-anchor" href="#단계-4-폰트-적용" aria-hidden="true">#</a> 단계 4: 폰트 적용</h3>
<p>폰트를 적용하려면 아래와 같이 font-family를 참조하고 따옴표(단일 또는 이중 - 상관없음)를 사용해야합니다.</p>
<p><img src="@source/docs/Tech/2024-04-19-AddingCustomFontstoAngular/img/AddingCustomFontstoAngular_5.png" alt="이미지"></p>
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
<p>마크다운 포맷으로 표를 변경해주세요.</p>
<p><img src="@source/docs/Tech/2024-04-19-AddingCustomFontstoAngular/img/AddingCustomFontstoAngular_6.png" alt="AddingCustomFontstoAngular_6.png"></p>
<p>여기 있습니다, Angular 프로젝트에 사용자 정의 글꼴을 추가하는 전체 과정이 있습니다. 이 정보가 도움이 되기를 바랍니다.</p>
<p>코딩 즐기세요, 개발자 여러분!!</p>
</div></template>
