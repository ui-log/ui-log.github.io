---
title: "동적 웹 개발에 필요한 CSS 애니메이션 소개"
description: ""
date: 2024-04-19 20:57
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "Intro to CSS animations: a tutorial for dynamic web designs"
link: "https://medium.com/pixelmatters/intro-to-css-animations-a-tutorial-for-dynamic-web-designs-3052cbdbf8c7"
---


웹은 HTML의 처음 바이트가 컴퓨터 브라우저에 표시된 이후 엄청난 변화를 겪었습니다. 예술적인 시각 효과를 갖춘 풍부한 사용자 경험은 Macromedia Flash가 등장한 이후 계속해서 추구되어 왔습니다. 아이폰이 등장한 직후부터 Flash 지원이 줄어들기 시작했고, 개발자들과 디자이너들은 멋진 경험을 만들기 위해 기본 웹 기술을 채택하기 시작했습니다.

오늘날, 웹사이트와 웹 앱에 애니메이션을 도입하는 것은 재미있는 도전입니다. Awwwards와 같은 사이트에서 매일 보는 멋진 웹사이트의 양은 애니메이션 콘텐츠를 만들고자 하는 프런트엔드 및 크리에이티브 개발자들에게 큰 영감의 원천으로 작용합니다.

그리고 Awwwards 언급이 나왔으니, 우리의 10주년 웹사이트를 확인해보세요 — Awwwards 명예 언급을 받았습니다!

# 튜토리얼

<!-- ui-log 수평형 -->
<ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>

이번 튜토리얼에서는 10주년 웹사이트에서의 애니메이션 요소를 살펴보고 어떻게 만들어 졌는지 자세히 살펴볼 거에요.

다음 내용을 다룰 거에요:

- 정적 일러스트를 애니메이션하는 방법 이해하기;
- 에셋을 분해하고 복잡한 요소를 작은 조각으로 나누기;
- 퍼포먼스 좋은 CSS 코드를 사용해 요소 변형 및 페이드 효과 주기;
- 타이밍을 조정하고 애니메이션을 조화롭게 연출하기;
- 요소를 추가하고 지연을 이용해 씬을 구성하기;
- 필터와 색조 회전으로 시각적 흥미 더하기;
- 운동장애나 다른 상태를 가진 사용자를 위한 모션에 대한 최상의 관행 적용하기.

# Mise-en-place

<!-- ui-log 수평형 -->
<ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>

셰프들은 놀라운 요리를 만들어내는 동안 깨끗하고 조직적인 주방에서 일합니다. 재료는 청소되고 손질되어 주방 카운터 주변의 컨테이너에 배치되어야 하므로 요리는 성실하고 엄격해야 합니다.

웹을 위한 애니메이션은 창의적인 노력이지만, 동일한 원리입니다. 우리는 생 재료(이후 "자산"이라 칭함)가 올바르게 내보내져 애니메이션에 준비되어 있는지 확인해야 합니다.

우리가 만드는 애니메이션은 구름 핵심과 두 광선으로 구성되어 있습니다.

이 요소들을 애니메이션화하려면, 요소들이 어떻게 상호 작용하는지를 생각해보세요. 어떤 부분이 독립적으로 움직이나요? 무엇이 그룹화되어 있나요? 물건은 어디로 가고 무엇을 하고 있나요?

<!-- ui-log 수평형 -->
<ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>

이 예제에서는 코어 클라우드 요소에 대해 교대로 움직이는 부드러운 회전과 함께, 빛줄기가 코어 주변을 회전하는 것처럼 회전하는 것을 원합니다, 마치 등대처럼요.

## 애니메이션용 에셋 준비

디자이너들과 긴밀히 협력하여 개발자는 애니메이션용 에셋을 준비하는 데 도움을 줍니다. 이 경우, 모든 시각적 요소를 내보낼 수 있는 에셋으로 분해하는 것이 유용합니다.

에셋의 경계 상자, 크기 및 상자 안에서의 에셋 정렬과 같이 최적화할 수 있는 요소들을 주목하세요. 현재 단계에서 에셋을 정규화할 수 있는 작업은 모두 수행하는 것이 좋으며, 이를 통해 코드가 무거운 작업을 덜 하도록하고 나중에 쉽게 처리할 수 있도록 합니다.

<!-- ui-log 수평형 -->
<ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>

이 경우에는 항목 주변에 빛을 돌려보내려고 하므로, 같은 방향과 구성으로 내보내는 것이 가장 좋습니다.

## 에셋을 배치하세요

이 내보내기가 완료되었으면 (@2x 이미지로 내보내어 Retina 및 HiDPI 디스플레이에서 멋지게 보이도록 했습니다 😉), 애니메이션을 조립하기 시작할 수 있습니다.

이 튜토리얼에서는 CodePen을 사용합니다. 이 무료 플랫폼은 구성 요소, UI 요소 및 기타 간단한 기능에 대해 반복하고 빠르게 실험을 할 수 있는 훌륭한 도구입니다. 기술을 테스트하고 더 어려운 구성 요소와 애니메이션에 대한 컨셉 프로토 타입을 만드는 데 사용하세요.

<!-- ui-log 수평형 -->
<ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>

우리의 재료는 접시 위에 올라와 있고 이제 Michelin 별을 향해 노력할 준비가 되었어요.

좋아요, 요리 비유는 여기까지. 또 만날 때까지 😂

# 요소 변형

CSS 변형과 불투명도의 힘을 이용해서 각 요소를 개별적으로 애니메이션화하고 부드러운 애니메이션과 우수한 성능을 제공할 거예요.

<!-- ui-log 수평형 -->
<ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>

이전에 사용한 분해 논리에 따라 자산을 내보내는 것을 시작하기로 합시다. 핵심 클라우드 요소부터 시작하죠. 이 요소에 약간의 회전 효과를 추가하고 싶습니다. 이를 위해 animation 및 @keyframes 속성을 활용할 수 있습니다:

```js
.core-cloud {
 /* ...이 요소에 대한 CSS 스타일 */

 animation: 2초 선형 무한 회전-core;
}

@keyframes rotate-core {
 0% {
  transform: rotate(0deg);
 }
 100% {
  transform: rotate(180deg);
 }
}
```

animation 속성은 여러 애니메이션 속성에 대한 CSS 축약형입니다. 더 자세한 정보는 MDN 웹 문서 페이지를 참조하는 것을 추천합니다. 웹 개발자에게 꼭 필요한 값진 자료입니다.

이 예시에서는 애니메이션이 3초 동안 지속되고 일정한 속도로 진행되며 영원히 반복되길 원한다는 것을 명시하고 있습니다.

<!-- ui-log 수평형 -->
<ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>

@keyframes 속성은 타임라인의 총 기간을 정의하기 위해 백분율을 사용합니다. 이 백분율을 비디오나 오디오 편집 소프트웨어 스위트에서의 키프레임으로 생각해 보세요. 0%는 타임라인의 맨 처음 (0초)을 나타내고, 100%는 끝 (예를 들어 3초)을 나타냅니다. 그 사이에 있는 것은 해당 시점에 해당하는 또 다른 키프레임입니다.

작동합니다! 그러나 약간 부자연스러워 보입니다. 🥲

이 작품이 부드럽게 전환되도록 하려면, 더 나은 타이밍을 도입하고, 이징 함수를 다듬어서 일관된 것으로 만들어 보겠습니다.

## 타이밍 함수를 통한 표현력

<!-- ui-log 수평형 -->
<ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>

이 애니메이션에 풍미와 흥미를 더하는 빠른 방법은 타이밍 함수를 사용하는 것입니다. 위 예제의 linear 키워드는 애니메이션이 시작부터 끝까지 일정한 속도로 진행된다는 것을 의미합니다. 이를 ease나 ease-in-out으로 변경하면 애니메이션이 천천히 시작하여 타임라인 중간에서 속도를 높이고 마지막에 다시 느려지게 됩니다.

심지어 이를 더 확장하여 cubic-bezier를 사용할 수도 있습니다. 이 기법을 사용하면 네 개의 개별 제어점을 제공합니다:

```js
animation: 3s cubic-bezier(.44,.28,.33,.95) infinite rotate-core;
```

cubic-bezier가 어떻게 작동하는지 더 잘 이해하려면 Lea Verou가 만든 훌륭한 인터랙티브 Cubic Bezier playground를 확인해보세요. 가속도와 감속도 곡선에 대한 기본 값만 필요하다면 매우 유용한 Easing Functions Cheat Sheet를 살펴보세요. 이러한 값들을 사용하면 많은 흥미로운 애니메이션을 만들 수 있습니다.

<!-- ui-log 수평형 -->
<ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>

지금은 타이밍을 조정해야 합니다. 현재 약간 너무 빨리 실행되고 있어요. 또한 애니메이션이 시작 지점으로 갑자기 "휙" 돌아가는 것은 이 경우에 원하는 효과가 아닙니다. (보다 빠르고 더 신나는 작품을 만들고 있다면 적합할 수도 있어요 — 언제든 실험해보세요!)

타이밍을 조정하고, 타임라인이 완료되면 반대로 재생되도록 "alternate" 키워드를 사용하세요. 이제 더 침착한 핵심 클라우드 요소가 생겼어요:

# 구성

이제 애니메이션을 더 부드럽게(또는 더 표현력이 뛰어나도록) 만드는 방법을 이해했으니, 층매김 기술을 활용하여 애니메이션 항목을 시각적으로 더 매력적으로 만들 수 있어요. 이번에는 빛줄기에 이 기술을 적용해보겠습니다.

<!-- ui-log 수평형 -->
<ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>

하나의 광선에 비슷한 회전 애니메이션을 추가해 봅시다. 하지만 뭔가 이상하다는 것이 분명합니다 — 애니메이션이 중앙이 아니에요.

요소의 transform-origin 속성을 수정하여 바닥 오른쪽 모퉁이에 고정함으로써 이를 수정할 수 있어요. 멋진 미제앚 아이템이 우리를 후에 여러모로 도울 수 있답니다! 💁‍♀️

아래 CodePen에서 옵션을 토글하여 시도해보세요:

빠른 팁: 요소의 가장자리에 있는 테두리 속성이 변형 작업 시 이해하기 쉽게 만들어줍니다. 애니메이션을 위해 요소를 정렬하려고 노력할 때 실제로 시간을 절약할 수 있는 방법이에요.

<!-- ui-log 수평형 -->
<ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>

## 하나의 요소에 여러 타임라인 실행하기

요소에서 빛줄기가 간헐적으로 사라졌다 나타는 듯한 효과를 만들어 봅시다. 나무 그늘 아래 은빛 빛줄기가 반사되는 모습을 상상해 보세요. 아름다운 광경이죠?

이 효과를 재현하기 위해 다른 타임라인을 조작하여 요소들이 사라지고 나타는 것을 독립적으로 제어하는 또 다른 명령문을 애니메이션 속성에 연결할 수 있습니다:

이 구현에 대해 두 가지 세부 사항을 주의깊게 살펴보세요:

<!-- ui-log 수평형 -->
<ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>

- 두 번째 페이드 타임라인은 타이밍을 위한 다른 값들을 가지고 있어요. 두 번째 값은 딜레이 값인데, 이것은 애니메이션 재생을 지연시켜줍니다. 이렇게 함으로써 효과를 쉽게 레이어링할 수 있어요.
- 빛 빔의 두 인스턴스는 타이밍을 위한 약간 다른 값을 갖고 있어요. 이는 그들의 타임라인이 서로 다른 순서로 재생됨을 의미해요. 이 기술을 사용해 요소들에 좀 더 유기적인 느낌을 줄 때, 더 많은 @keyframes를 생성하지 않고도 사용할 수 있어요.

만약 여기까지 왔다면, 축하해요! 🥳

가장 어려운 부분은 끝났어요. 이제 잘 작동하고 괜찮아 보이는 애니메이션이 생겼어요.

# 수정하기

<!-- ui-log 수평형 -->
<ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>

관심이 있다면 조금 더 개선해보세요. 이전에 보신 것처럼, 섬세하고 조정된 값들은 훌륭한 느낌의 애니메이션을 만들기 위해 매우 중요합니다. 코드 자체는 간결하고 명확합니다. 타이밍 함수와 이징들을 검토하는 데 시간을 투자하면 여러분의 작업이 더 다듬어진 모습으로 보일 것입니다.

여기에 좋을 것 같은 추가 효과는 약간의 색조 변화 효과입니다. 우리가 방금 본 기술을 재사용하여 다음과 같이 필터 속성에 대한 추가 타임라인을 만들어 추가할 수 있습니다:

```js
@keyframes color-shift {
 from {
  filter: hue-rotate(0deg);
 }
 to {
  filter: hue-rotate(80deg);
 }
}
```

재미를 위해 이 효과를 더욱 강력하게 만들어보겠습니다. 아래의 토글을 활성화하여 색상이 정말로 두드러지게 만들어보세요. 🤩

<!-- ui-log 수평형 -->
<ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>

이것이 과장된 것처럼 보일 수 있지만, 값들을 세밀하게 조정하는 것이 정확한 룩을 얻기 위해 굉장히 중요하다는 것을 보여줍니다.

한 구절의 민간 지혜: "케첩을 너무 많이 뿌리면 감자 튀김이 망친다." 🍟

## 사용자에 대한 사려 깊음

애니메이션을 하는 중요한 부분은 애니메이션을 보고 싶지 않은 사용자와 모션을 줄이길 원하는 사용자를 존중하는 것입니다. 이를 달성하는 한 가지 방법은 미디어 쿼리(media queries)를 사용하는 것입니다. 사용자의 기기 접근성 설정을 고려하는 방법이 이에 해당합니다.

<!-- ui-log 수평형 -->
<ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>

```js
@media (prefers-reduced-motion: no-preference) {
 /* 여기에 애니메이션 코드를 추가하세요 */
}
```

사용자들이 기기에서 축소된 모션 설정을 활성화했을 경우, 이 미디어 쿼리 안의 스타일이 적용되지 않습니다. 이는 사용자들을 산만하게 만들거나 의도하지 않은 부작용을 일으킬 수 있는 선택적인 애니메이션에 이상적입니다.

# 결론

지금은 애니메이션을 쉽게 만드는 방법에 대한 아이디어를 가지고 있기를 바랍니다.

<!-- ui-log 수평형 -->
<ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>

여기 표시된 모든 기술은 네이티브 CSS이며 다양한 브라우저와 장치에서 작동합니다. 이것은 웹에 액세스할 수 있는 거의 모든 곳에서 이 애니메이션을 사용할 수 있다는 것을 의미합니다. 이 새롭게 발견한 특별 능력을 사용하여 웹 경험에 산뜻함을 더해보세요! 🦸

주요 포인트:

- 큰 일러스트레이션을 작은 항목으로 나누어 애니메이션에 적합하게 준비하세요;
- 간단한 변형과 불투명도가 큰 도움이 됩니다;
- 타이밍과 이징을 사용하여 멋과 표현력을 더하세요;
- 딜레이를 사용하여 타임라인과 요소를 구성하여 작품을 재미있게 만드세요;
- 실험하고 즐기세요!