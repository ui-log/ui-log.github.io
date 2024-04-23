<template><div><p><img src="@source/docs/Tech/2024-04-19-HowtomakeabackgroundblurinCSSwithonelineofcode/img/HowtomakeabackgroundblurinCSSwithonelineofcode_0.png" alt="Background Blur"></p>
<p>백그라운드 블러는 멋지죠. 이건 당연한 사실입니다. 모든 사용자 인터페이스에는 적어도 열 개의 백그라운드 블러가 있어야 하며(가능하다면 서로 겹쳐져 있는 것이 좋습니다), 백그라운드 블러 없이 만들어진 모든 인터페이스는 월드 와이드 웹의 창시 이후로 고 우선순위 기술 부채로 표시되어야 합니다. 이게 진실입니다. 개발자들은 백그라운드 블러가 있는 디자인 증거를 보여주면 기뻐합니다. 이건 거짓입니다.</p>
<p>왜냐하면 백그라운드 블러를 웹 애플리케이션에 구현하는 게 기본적으로 불가능해 디자이너들은 무력하고 속고 쓰러지는 듯한 느낌을 받기 때문입니다. 하지만 이제 모든 것이 바뀝니다. 사실 2018년에 바뀌었고 나는 방금 MDN 페이지를 찾았지만, 본질은 비슷하죠.</p>
<p>그래서 이제 backdrop-filter CSS 속성을 사용하여 백그라운드 블러를 만드는 방법을 소개하겠습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>backdrop<span class="token operator">-</span>filter<span class="token operator">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>5px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>요게 전부에요.</p>
<p>계속 읽기를 원하신다면, 이 기사의 나머지 내용을 조금 더 설명해 드리겠습니다...</p>
<h1 id="배경-필터란-무엇인가요" tabindex="-1"><a class="header-anchor" href="#배경-필터란-무엇인가요" aria-hidden="true">#</a> 배경 필터란 무엇인가요?</h1>
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
<p>MDN에 따르면, &quot;배경 필터 CSS 속성을 사용하면 요소 뒤의 영역에 흐림 또는 색 이동과 같은 그래픽 효과를 적용할 수 있습니다. 요소 뒤에 적용되므로 효과를 보려면 요소 또는 해당 배경을 반투명으로 만들어야 합니다.&quot;</p>
<p>첫 번째 문장 절반에서 눈을 가위에 부딪혔다면, 기본적으로 MDN은 디자인 툴(Figma, Sketch, Adobe XD, Framer 또는 기사의 SEO에 도움을 줄 다른 모든 것)에서 작동하는 방식과 정확히 같이 개발 환경에서 작동한다고 설명하고 있습니다.</p>
<p>흐림 뒤에 있는 것은... 흐려집니다.</p>
<h1 id="간단한-예시를-만들어봅시다" tabindex="-1"><a class="header-anchor" href="#간단한-예시를-만들어봅시다" aria-hidden="true">#</a> 간단한 예시를 만들어봅시다</h1>
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
<p>우선 .background 클래스를 가진 div를 만들어보세요.</p>
<p>자, 이제 잘 먹은 커피와 바나나 넛 머핀 쉬는 시간을 가져봐요. 조금 먼지를 털고, 그런 다음 .background 클래스에 CSS를 추가해봅시다. 우리는 몇 개의 파인애플을 배경 이미지로 추가하고 페이지 전체를 덮도록 만들 거에요.</p>
<p>이제 블러를 추가해봅시다. .background 클래스를 가진 div 안으로 조용히 슬쩍 들어가서 .blur 클래스를 가진 div를 조용히 배치할 거에요.</p>
<p>이것은 45번째 라운드 Google 면접 스타일의 일이에요. 이제 마음과 마음을 바꾸는 작업을 완료해봐요.</p>
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
<p>우리는 .blur 클래스가 창의 전체 높이를 커버하되 너비의 절반만 커버하도록 만들겠습니다. 이렇게 하면 필터가 적용된 후 차이를 볼 수 있습니다.</p>
<p>만약 blur에 색상을 주고 싶다면 rgba 값으로 배경 속성을 추가해야 합니다. 알파(불투명도) 값이 1보다 작은지 확인하여 색상을 투과할 수 있도록 해야 합니다.</p>
<p>그런 다음 마법같은 backdrop-filter CSS 속성을 추가하고 blur(8px) 값을 부여해야 합니다. 힌트, 힌트... px를 증가/감소시켜 blur를 증가/감소시킬 수 있습니다.</p>
<p>이제 여러분은 인류 창의력과 발명의 정상을 직접 응시하고 있어야 합니다. 반쪽은 흐리게 처리된 네 개의 파인애플. 모든 진지성을 벗어놓고 말하자면, 정말 멋집니다.</p>
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
<h1 id="다중-필터-추가하기" tabindex="-1"><a class="header-anchor" href="#다중-필터-추가하기" aria-hidden="true">#</a> 다중 필터 추가하기</h1>
<p>한 요소에 여러 개의 backdrop-filter 속성을 추가하려면 각 속성을 공백으로 구분해서 작성하면 됩니다. 다만 주의하세요; 이러한 속성들이 함께 잘 작동하지 않을 수도 있습니다. 응, 나의 첫 번째 Medium 글에서 세미콜론을 떨어 뜨리고 있네. 뭐야.</p>
<p>여기 Codepen 예제가 있어요. 하찮은 애니메이션과 여러 backdrop-filter 속성이 포함된 클래스를 토글하는 버튼이 완벽하게 구현되어 있어요.</p>
<p>이를 통해 상당히 창의적으로 활용할 수 있습니다. 이 기능은 꽤 오랫동안 실험적이었으니, 브라우저 호환성 및 중요한 사항들을 반드시 확인하세요. 현재로서 이 글을 작성하는 시점에서 MDN에 따르면 인터넷 익스플로러, 안드로이드용 파이어폭스, 삼성 인터넷을 제외한 대부분의 주요 브라우저에서 지원하고 있다고 합니다. 따라서 그에 대한 대비책도 마련해 두세요.</p>
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
<p>이 이루어 낸 영웅들에게 진심으로 감사드립니다. 당신들 덕분에 우리의 Dribbble 샷들은 더 많은 가능성을 가질 수 있게 되었어요.</p>
<p>배경 흐리게 만들기(backdrop-filter 사용)에 대한 기본적인 소개가 적어도 한 분께 도움이 되었으면 좋겠네요. 생각, 제안 또는 편겱에 대한 의견은 언제든 자유롭게 남겨주세요. 향해 정녕 다시 한번 이런 글을 쓰기로 결심하면? 트위터, Dribbble에서도 만날 수 있습니다. 그리고 Medium에서 팔로우하면 더 좋아요!</p>
<p>읽어 주셔서 감사합니다. 행복한 시간 보내세요!</p>
</div></template>
