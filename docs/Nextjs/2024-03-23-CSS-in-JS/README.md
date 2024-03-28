---
title: "Nextjs 13에서 CSS in JS 사용 방법"
description: ""
date: 2024-03-23 14:43
sidebarDepth: 0
tag: Tech
thumbnail:
originalTitle: CSS-in-JS
link: undefined
---

# CSS-in-JS

어떤 CSS-in-JS 솔루션을 사용해도 괜찮아요. 가장 간단한 방법은 인라인 스타일을 이용하는 것이에요:

```js
function HiThere() {
  return <p style={ color: 'red' }>hi there</p>
}

export default HiThere
```

우리는 styled-jsx를 번들하여 격리된 범위의 CSS를 지원해요. 목표는 웹 구성 요소와 비슷한 "그림자 CSS"를 지원하는 것이에요. 서버 렌더링을 지원하지 않는 JS만으로 이뤄진 웹 구성 요소와 유사한 기술이라고 할 수 있죠.

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

위의 예제를 참고하여 스타일드 컴포넌트와 같은 인기있는 CSS-in-JS 솔루션을 확인할 수 있습니다.

styled-jsx를 사용한 컴포넌트는 다음과 같이 보입니다:

```js
function HelloWorld() {
  return (
    <div>
      Hello world
      <p>scoped!</p>
      <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
      <style global jsx>{`
        body {
          background: black;
        }
      `}</style>
    </div>
  );
}

export default HelloWorld;
```

더 많은 예제를 보려면 styled-jsx 문서를 참고해주세요.

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

### 자바스크립트 비활성화

네, 자바스크립트를 비활성화하면 CSS는 여전히 프로덕션 빌드(next start)에서 로드됩니다. 개발 중에는 최상의 개발자 경험을 제공하기 위해 자바스크립트를 활성화해야 합니다. Fast Refresh를 사용하려면 JavaScript가 필요합니다.

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
