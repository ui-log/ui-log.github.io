---
title: "프론트엔드 기초부터 공부하는 방법"
description: ""
date: 2024-03-28 18:03
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "We Forgot Frontend Basics"
link: "https://medium.com/stackademic/we-forgot-frontend-basics-2f9a1c4dabaa"
---


## 최신 트렌드와 끝없는 패러다임 속에서, 우리는 프론트엔드 개발의 기본을 잊어버린 것 같아요.

보통은 능숙한 손길이라면 거의 모든 것을 해낼 수 있다고 말하지만, 최근에는 산업에 대한 나의 견해를 바꾸게 된 몇 가지 사실을 알아차렸어요. 끝없는 트렌드, 패러다임, 그리고 새로움 속에서 우리는 프론트엔드 개발의 기본을 잊어버린 것 같아요.

이 글에서는 최근 프로젝트에서 코드 일부를 공유하고 그에 대한 생각을 설명해보려고 해요. 더 이상 말을 늘리지 말고, 시작해볼까요?

![이미지](./img/WeForgotFrontendBasics_0.png)

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

차례

- 지루한 과도화
- 1993년부터의 실수
- 모든 악의 근원
- 몇 가지 중요한 팁

# 지루한 과도화

여기에서는 가장 기본적인 Cardcomponent를 보여드립니다. 선택적인 header 속성이 있습니다. 이 속성이 있는 경우에는 특정 클래스로 감싼 div 내에 렌더링됩니다.

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
const Card = ({ children, header }) => {
  return (
    <div className="card">
      {header && <div className="card__header">{header}</div>}
      {children}
    </div>
  );
};
```

간단한 형태로는 모든 것이 잘 작동합니다. 그 경우에는 `Card /` 헤더가 렌더링되지 않습니다. 여기서 `Card header={"I am header"} /` 와 같이 헤더 내용이 동적이고 실제 콘텐츠나 null을 반환할 수 있는 경우 문제가 발생하기 시작합니다. `Card header={`CardHeader /`} /`. 우리의 조건 {header && `div /`} 는 이를 감지하지 못하여 빈 div가 렌더링됩니다.

한 개발자가 이 문제를 해결하려고 시도했습니다. 그는 생각했습니다. "잠시만, 우리는 div의 콘텐츠를 확인하고 콘텐츠가 비어 있으면 숨길 수 있습니다!". 그가 작성한 대략적인 코드는 다음과 같습니다.

```js
const Card = ({ children, header }) => {
  const headerRef = useRef();

  useEffect(() => {
    const hasContent = headerRef.current?.childNodes.length > 0;
    headerRef.current.style.display = hasContent ? "block" : "none";
  });

  return (
    <div className="card">
      {header && (
        <div ref={headerRef} className="card__header">
          {header}
        </div>
      )}
      {children}
    </div>
  );
};
```

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

다른 분이 코드 리뷰 중에 발견한 점은 이 코드가 초기 렌더링 시에만 작동한다는 것이었습니다. 푸터가 비동기적으로 업데이트되면 useEffect가 호출되지 않을 것입니다. 긴 토론 끝에 개발자들은 MutationObserver에 주목하기로 결정했어요.

토론 중에 개발자들은 제게도 조언을 구했답니다. 솔직히 말하자면, 제 변형을 보여준 것이 정말 즐거웠어요) 문제를 해결하기 위해 보통의 CSS만 사용했을 뿐이었거든.

```css
.card__header:empty {
  display: none;
}
```

개발자들은 자신들의 작업을 과도하게 복잡하게 만드는 데 익숙해져 있어서, 기본적인 CSS의 기능조차 확인하지 않았다는 게 놀랍더라고요.

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

# 1993년의 실수들

이전 프로젝트에서 저희는 사이드 패널 위젯을 받았는데, 이 위젯은 전체 높이로 늘어나야 했지만 헤더와 푸터를 겹치지 않고 표시되어야 했습니다. 대략적인 공식은 다음과 같습니다: 100% - 헤더높이 - 푸터높이.

이 해결책은 모든 페이지에서 원활하게 작동했지만, 한 페이지에서는 제대로 작동하지 않았습니다. 해당 페이지에서 푸터 높이가 어떤 이유로 0이 되었습니다. 이 버그를 발견한 개발자는 더 깊게 파헤쳐서 document.querySelector(`footer`)가 null을 반환했지만 푸터는 여전히 페이지에서 렌더링되고 있음을 이해했습니다. 그가 했던 일이 뭘까요? 네, MutationObserver가 다시 사용되었습니다.

그것은 내게 이상하게 보였고, 대체 해법을 찾기로 결심했습니다. 그리고 찾았습니다. 내가 해야 했던 일은 코드 몇 줄을 바꾸는 것뿐이었습니다...

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
<html>
<head></head>
<body>
  <header></header>
  <main id="root"></main>
  <script src="index.js"></script>
  <footer></footer>
</body>
</html>
```

어떻게 스크립트/가 푸터 전에 페이지에 있게 되었는지 모르겠습니다. 스크립트/는 동기식으로 호출되며 그 순간에는 푸터가 존재하지 않기 때문에 높이를 측정할 수 없습니다.

저는 그냥 이 두 줄의 위치를 바꿨더니 모든 것이 올바르게 작동하기 시작했습니다.

요즘 개발자들은 웹팩 플러그인 등의 현대적인 도구에 많이 의존합니다. 그들이 직접 HTML을 작성해야 할 때 바로 건너뛰는데, 그게 왜 그렇게 어려운 건지요?```

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

# 악의 근원

리액트 훅은 리액트에서 가장 좋은 것과 가장 나쁜 것이 동시에 일어납니다. 한편으로는 유연성을 더하고 상태를 처리하는 우아한 방법을 제공합니다. 그러나 다른 한편으로는 코드 복잡성을 극적으로 증가시키고 실수를 더 쉽게 만듭니다.

문서를 주의 깊게 읽고 어떻게 올바르게 사용해야 하는 지 이해하는 것은 어렵지 않아 보입니다. 그러나 몇몇 개발자들은 이 명백한 단계를 빼먹고 훅을 완전히 이해하지 못한 채 사용하기 시작합니다. 특히, 최적화와 악명 높은 useMemo와 useCallback이 관련되었을 때 더 그렇습니다. 이제 모든 개발자가 명시적인 이유 없이 전체 앱을 최적화하려고 하고 있습니다.

우리가 이 "핵심적인" 최적화를 함께 살펴봅시다. 이것은 이 기사를 위해 작성한 가상의 코드가 아닙니다. 이것은 실제로 제 프로젝트 중 하나에서 발췌한 코드입니다.

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
const loaded = useMemo(() => {
    return submitted && !loading && !error;
  }, [submitted, error, loading]);
}
```

이 최적화 후 앱 성능이 폭발적으로 개선되었어요! 정말 쓸모 없는 부분은 심지어 앱의 처음 로드에 약간 해를 끼친달까요. 솔직히 말해서, 이게 진짜 왜 쓰였는지 아직도 이해하지 못하겠어요.

뭔가를 당연하게 받아들이고 다른 생각을 하지 않는 게 항상 훨씬 쉬운 것 같지만, 스스로 약간의 연구를 하는 게 정말 어렵지는 않아요.

# 몇 가지 중요한 팁들

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

이 상황은 정말 슬픈 일 같아요. 개발자들은 새로운 기술과 방법들 사이에 기본 기술을 잊어버리고 비판적 사고력을 잃어가고 있는 것 같아요.

하지만 제 의견으로는, 이 문제를 해결하는 것은 그리 어렵지 않아요. 위에 언급한 모든 것을 종합하여, 간단히 보여드릴게요. (제안해주신 의견에 대한 피드백을 주시면 감사하겠어요!)

- 약간의 시간을 투자하고 순수한 JavaScript를 이해해 보세요. 탄탄한 기반은 버그의 진짜 원인을 더 쉽게 파악하고 그에 맞게 수정할 수 있게 도와줘요.
- HTML과 CSS를 깊게 학습해보세요. 많은 유용한 속성, 셀렉터 및 기타 것들을 발견할 수 있어요. JavaScript 코드 대신 사용할 수 있는 것들이 많아요. :empty 셀렉터 예시를 상기해보세요.
- 비판적 사고력을 발전시키세요. 물론, 팀 리더가 여러 좋은 실천법과 원칙을 가르쳐주었을 거예요. 그러나 그것들을 맹목적으로 따르면 잘못된 방향으로 이끌리기만 할 거에요. 대신, 왜 어떤 것이 이렇게 되어 있는지 이해하려 노력해 보세요.
- SOLID, YAGNI, KISS 등의 원칙을 기억하세요. 간단한 작업이 혼란스러운 해결책으로 변하는 경우 — 단순히 멈추고 다른 각도에서 다시 생각해보세요. 아마도 한 가지 해결책에 너무 깊이 파고들어서 명백한 것을 잊어버린 것일지도 몰라요.

읽어 주셔서 감사해요!

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

저희 글을 유용하게 활용하셨기를 바랍니다. 궁금한 사항이나 제안 사항이 있으시면 언제든 댓글을 남겨주세요. 여러분의 피드백은 제가 더 나아질 수 있도록 돕습니다.


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
