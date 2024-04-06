<template><div><p><img src="@source/docs/Nextjs/2024-04-05-CSSFlexboxKullanm/img/CSSFlexboxKullanm_0.png" alt="CSS Flexbox"></p>
<h1 id="flexbox란-무엇이며-어떻게-사용하나요" tabindex="-1"><a class="header-anchor" href="#flexbox란-무엇이며-어떻게-사용하나요" aria-hidden="true">#</a> Flexbox란 무엇이며 어떻게 사용하나요?</h1>
<p>Flexbox (Flexible Box)는 웹 페이지의 HTML 요소를 정렬하는 데 사용되는 구조입니다.</p>
<p>Flexbox를 사용하면 요소들을 수평 및 수직으로 정렬할 수 있으며 간격을 조절할 수 있습니다.</p>
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
<p>Flexbox 속성을 사용하려면 정렬하려는 요소가 포함된 컨테이너가 필요합니다. 이 컨테이너에 CSS 속성으로 &quot;display: flex;&quot; 또는 &quot;display: inline-flex;&quot; 코드를 작성해야 합니다.</p>
<h1 id="flex-direction" tabindex="-1"><a class="header-anchor" href="#flex-direction" aria-hidden="true">#</a> Flex-direction</h1>
<p>Flex-direction은 요소를 가로 또는 세로로 정렬하는 데 사용되는 속성입니다. &quot;flex-direction:row&quot;를 사용하면 행 방향으로, &quot;flex-direction:column&quot;을 사용하면 열 방향으로 정렬할 수 있습니다. 기본적으로 행이라고 간주됩니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-CSSFlexboxKullanm/img/CSSFlexboxKullanm_1.png" alt="CSSFlexboxKullanm_0"></p>
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
<p>&quot;row-reverse&quot;와 &quot;column-reverse&quot; 속성은 순서를 거꾸로 시작하도록합니다.</p>
<h1 id="flex-wrap" tabindex="-1"><a class="header-anchor" href="#flex-wrap" aria-hidden="true">#</a> Flex-wrap</h1>
<p>Flex-wrap은 요소들이 현재 화면에 완전히 맞지 않을 때 다음 줄로 넘어가거나 그것을 방지하는 속성입니다.</p>
<p>&quot;flex-wrap: nowrap&quot;은 기본 값으로, 요소들/컨테이너가 화면에 맞지 않을 때 넘침을 허용하고 다음 줄/줄들로 넘어가지 않도록합니다.</p>
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
<p>“flex-wrap: wrap” 값은 요소들이 화면에 맞지 않을 때 줄 바꿈을 허용합니다.</p>
<p>“flex-wrap: wrap-reverse” 값은 요소들이 화면에 맞지 않을 때, &quot;row-reverse&quot;와 같이 역순으로 정렬합니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-CSSFlexboxKullanm/img/CSSFlexboxKullanm_2.png" alt="CSSFlexbox 사용 예시"></p>
<h1 id="justify-content" tabindex="-1"><a class="header-anchor" href="#justify-content" aria-hidden="true">#</a> Justify-content</h1>
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
<p>Contents를 정의하는 것은 요소들 사이 및 주위의 간격을 조정하고 정렬하는 데 사용되는 속성입니다.</p>
<p>“justify-content: flex-start”는 기본값이며 모든 플렉스 요소를 시작 부분에 정렬합니다.</p>
<p>“justify-content: flex-end”는 flex-start의 오른쪽 정렬된 버전입니다.</p>
<p>“justify-content: center”는 모든 요소를 컨테이너 가운데에 배치하고 좌우로 동일한 간격을 유지합니다.</p>
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
<p>&quot;justify-content: space-around&quot; 속성은 요소들을 좌우에 동일한 간격으로 정렬합니다. 오른쪽과 왼쪽 끝은 각각 1x의 간격을 가지며 요소들 사이의 간격은 2x로 설정됩니다.</p>
<p>&quot;justify-content: space-between&quot; 속성은 첫 번째 요소와 마지막 요소를 모서리에 정렬하고 다른 요소들 사이에 동일한 간격을 둡니다.</p>
<p>&quot;justify-content: space-evenly&quot; 속성은 컨테이너와 요소들 사이에 동일한 간격을 둡니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-CSSFlexboxKullanm/img/CSSFlexboxKullanm_3.png" alt="CSSFlexboxKullanm_3.png"></p>
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
<h1 id="align-items" tabindex="-1"><a class="header-anchor" href="#align-items" aria-hidden="true">#</a> Align-items</h1>
<p>Align items은 아이템들을 수직으로 정렬하는 데 사용됩니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-CSSFlexboxKullanm/img/CSSFlexboxKullanm_4.png" alt="CSS Flexbox"></p>
<p>References:</p>
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
<p>1- <a href="https://community.kodular.io/t/flexbox-css-flexible-box-layout-module-for-kodular/132608" target="_blank" rel="noopener noreferrer">여기를 클릭하세요!<ExternalLinkIcon/></a></p>
<p>2,3,4,5 - <a href="https://byteiota.com/flexbox-conatiner/" target="_blank" rel="noopener noreferrer">여기를 클릭하세요!<ExternalLinkIcon/></a></p>
</div></template>
