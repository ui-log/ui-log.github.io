<template><div><p>CSS 위치 속성은 이름 그대로 요소가 웹 페이지 상에 어떻게 위치하는지를 정의합니다.</p>
<p><img src="@source/docs/Tech/2024-03-28-CSSPositionabsolutevsrelativevsfixedandmore/img/CSSPositionabsolutevsrelativevsfixedandmore_0.png" alt="이미지"></p>
<p>더 많은 내용은 https://www.w3schools.com/css/css_positioning.asp 에서 참고할 수 있어요.</p>
<p>CSS 위치 속성은 웹 페이지 상 요소들의 배치와 레이아웃을 조절하는 데 기본적입니다. 이를 통해 개발자들은 요소들을 정확히 배치하고, 서로 겹쳐 놓고, 복잡한 반응형 레이아웃을 만들 수 있어요. CSS의 주요 위치 속성에는 static, relative, absolute, fixed, sticky가 포함되어 있어요. 각 속성은 고유한 목적을 가지고 있으며 문서 흐름과 위치 지정의 맥락에서 다르게 작동합니다.</p>
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
<p>웹 디자인에서 각 위치 지정 기술은 레이아웃 및 동작 제어를 위해 다양한 장점을 제공하며 개발자들이 더 동적이고 반응형이며 상호작용적인 웹 페이지를 만들 수 있게 합니다.</p>
<ul>
<li>
<p>Sticky:</p>
</li>
<li>
<p>동작: Sticky는 사용자의 스크롤 위치에 따라 상대적인 위치와 고정된 위치 사이를 토글합니다. 특정 지점을 넘어서면 상대적으로 위치한 채로 유지되다가 일정 지점에 고정됩니다.</p>
</li>
<li>
<p>사용 사례: 페이지와 함께 스크롤되어 사라져야 하지만 특정 지점에 도달하면 고정되어 있어야 하는 요소에 유용하며, 스티키 헤더와 같은 요소에 적합합니다.</p>
</li>
</ul>
<ol start="2">
<li>Fixed:</li>
</ol>
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
<li>행동: 고정 요소는 뷰포트에 대해 위치가 고정되어 있어 페이지를 스크롤해도 항상 같은 곳에 남아 있습니다. 요소를 배치하는 데 top, right, bottom 및 left 속성을 사용합니다.</li>
<li>사용 사례: 페이지를 스크롤하는 동안 화면에 계속 나타나는 네비게이션 바나 버튼을 만들기에 이상적입니다.</li>
</ul>
<ol start="3">
<li>Absolute:</li>
</ol>
<ul>
<li>행동: 절대 위치 지정된 요소는 문서 흐름에서 제거되어 가장 가까운 위치 지정된 조상(즉, static 이외의 위치를 가진 요소)에 대한 지정된 위치에 배치됩니다. 이러한 조상이 없는 경우에는 포함 블록이 초기 포함 블록입니다.</li>
<li>사용 사례: 다른 콘텐츠 위에 오버레이되어야 하는 드롭다운 메뉴나 모달을 만들기에 완벽합니다.</li>
</ul>
<ol start="4">
<li>Relative:</li>
</ol>
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
<li>동작: 상대적으로 위치 지정된 요소는 일단 일반 요소(정적 위치)처럼 배치됩니다. 그런 다음 상단, 오른쪽, 하단 및 왼쪽 값에 따라 자신에 대해 조정됩니다. 다른 콘텐츠는 요소가 남긴 빈 공간에 맞추어 조정되지 않습니다.</li>
<li>유스 케이스: 요소의 위치를 문서 흐름에서 일반적으로 있어야 하는 위치에서 약간 조정해야 할 때 또는 절대 위치 지정된 하위 요소에 대한 위치 설정 컨텍스트가 필요할 때 유용합니다.</li>
</ul>
<ol start="5">
<li>정적(static):</li>
</ol>
<ul>
<li>동작: 이것은 요소의 기본 위치입니다. 요소는 문서의 정상 흐름에 따라 위치가 지정됩니다. 상단, 오른쪽, 하단, 왼쪽 및 z-index 속성은 영향을 미치지 않습니다.</li>
<li>유스 케이스: 요소가 정적 문서 레이아웃 흐름을 따르도록 원할 때 사용합니다. 웹페이지의 대부분 요소들은 특별히 지정하지 않으면 정적입니다.</li>
</ul>
<p>아래는 표로 설명된 주요 차이점입니다.</p>
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
<p><img src="@source/docs/Tech/2024-03-28-CSSPositionabsolutevsrelativevsfixedandmore/img/CSSPositionabsolutevsrelativevsfixedandmore_1.png" alt="CSS Positioning"></p>
<h1 id="주요-차이점" tabindex="-1"><a class="header-anchor" href="#주요-차이점" aria-hidden="true">#</a> 주요 차이점</h1>
<ul>
<li>참조 지점:
<ul>
<li>Absolute: 가장 가까운 위치 지정된 조상 요소에 대해 배치됨.</li>
<li>Relative: 문서 내의 일반적인 위치에 대해 배치됨.</li>
<li>Fixed: 뷰포트에 대해 배치됨.</li>
</ul>
</li>
<li>문서 흐름 영향:
<ul>
<li>Absolute와 Fixed: 다른 요소의 레이아웃에 영향을 미치지 않음 (흐름에서 제외됨).</li>
<li>Relative: 시각적으로 이동되더라도 문서 흐름에 남아 있어 레이아웃에 영향을 줌.</li>
</ul>
</li>
<li>스크롤링 동작:
<ul>
<li>Absolute와 Relative: 스크롤 시 페이지와 함께 이동함.</li>
<li>Fixed: 스크롤될 때도 뷰포트 내에서 동일한 위치에 남아 있음.</li>
</ul>
</li>
</ul>
<p>더 많은 기사를 보려면
제게 팔로우해 주세요.
Jagan Jonnala
감사합니다.</p>
</div></template>
