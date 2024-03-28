<template><div><p>일반적으로 Figma 디자인을 사용하여 UI를 작업하면 대부분의 경우 width와 height 값이 이미 지정되어 있는데, 이 때 반응형으로 만들기 위해서 100%를 사용하고 다른 경우에는 width와 height 값을 모두 지정해 왔어요. 그러나 둘 중 하나만 지정하면, 기본값이 auto로 설정되어 컨텐츠의 비율에 맞게 자동으로 크기가 조정된다는 걸 알게 되었어요. (제가 독학 중이라서요...) 이 두 가지 방법의 장단점에 대해 정리해보았어요.</p>
<p><img src="@source/docs/Tech/2024-03-28-CSSwidthheight/img/CSSwidthheight_0.png" alt="CSSwidthheight_0.png"></p>
<h3 id="width와-height를-둘-다-지정할-때는" tabindex="-1"><a class="header-anchor" href="#width와-height를-둘-다-지정할-때는" aria-hidden="true">#</a> width와 height를 둘 다 지정할 때는</h3>
<p>레이아웃을 정확하게 제어할 수 있고, 레이아웃 계산에 용이해요. 크기가 고정되면서 렌더링 성능에도 도움이 될 수 있어요.</p>
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
<h1 id="width와-height-중-하나만-지정하면" tabindex="-1"><a class="header-anchor" href="#width와-height-중-하나만-지정하면" aria-hidden="true">#</a> width와 height 중 하나만 지정하면</h1>
<p>지정하지 않은 값은 기본값으로 auto가 되어 컨텐츠의 크기 비율이나 내용에 따라 유동적으로 조정되어 반응형 디자인을 구현하는 데 도움이 됩니다.</p>
<p>요소의 레이아웃을 조절할 때 값이 줄기 때문에 유지보수에도 도움이 됩니다.</p>
<p>UI를 구현하는 과정에서 반복 작업을 하다보면 지치지만, 새로운 것들을 배우면서 확실히 프론트엔드 개발에서 새로운 동기부여가 됩니다.</p>
</div></template>
