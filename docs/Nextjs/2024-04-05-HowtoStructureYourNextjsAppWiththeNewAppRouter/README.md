---
title: "새로운 앱 라우터를 활용하여 Next.js 사이트 만들기"
description: ""
date: 2024-04-05 18:55
sidebarDepth: 0
tag: Tech
thumbnail: 
originalTitle: "How to Structure Your Next.js App With the New App Router"
link: "https://medium.com/better-programming/how-to-structure-your-next-js-app-with-the-new-app-router-61bf2bf5a20d"
---


## 새 App Router를 활용한 피쳐-드리븐 구조로 Next.js 프로젝트를 조직하는 방법을 배워보세요. 이를 통해 개발에서 보다 큰 유연성과 효율성을 누릴 수 있습니다.

![How to Structure Your Next.js App With the New App Router](./img/HowtoStructureYourNextjsAppWiththeNewAppRouter_0.png)

# 목차

- App Router
- 전략 설명
- 피쳐란 무엇인가
- 라우트 구조화
- 공통 파일 조직
- 피쳐 구성
- 종합하기
- 최종 권고사항
- 마무리

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

# 앱 라우터

최근에 Next.js 13.4가 출시되어 중요한 이정표를 찍었습니다. 새로운 앱 라우터가 이제 제품으로 출시되었습니다. 이 기능은 프로젝트 구조 측면에서 훨씬 더 유연성을 제공합니다. 이제 모든 JavaScript 파일이 경로로 전환되는 '페이지 전용' 디렉토리를 갖는 것이 필수가 아닙니다. 해당 디렉토리에 다른 파일을 저장해야만 하는 강한 제약이 없어졌습니다. 대신, 페이지뿐만 아니라 관련 파일을 함께 구성할 수 있는 단일 "앱" 폴더가 있습니다. 이를 '동일위치(colocation)'라고 하며, 더 효율적인 개발을 가능케 합니다.

# 전략 설명

이 기사에서는 Next.js 프로젝트를 구성하는 가장 유연하고 확장 가능한 방법을 안내하겠습니다. 이 기사는 Next.js의 앱 라우터를 위한 것이지만, 많은 기본 사항은 React 프로젝트에도 적용할 수 있습니다.

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

대부분의 프로젝트 구조는 역할 중심이지만, 이 안내서에서는 특징 중심 접근 방식을 취할 것입니다. 정확히 무엇이 특징인지 이해하려면 다음 섹션을 읽어주세요.

## 특징이란 무엇인가

특징은 서로 관련된 파일 그룹으로, 전반적으로 프로젝트의 한 영역이나 주제를 나타냅니다. 나중에 설명할 것처럼, 특징을 만드는 것은 코드베이스의 유지보수 및 탐색을 개선할 수 있습니다.

프로젝트를 여러 특징으로 나누면 관심사 분리 디자인 원칙에 대해 생각하게 될 것입니다.

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

기능을 만드는 데 일정한 규칙은 없지만 만들기 전에 스스로에게 이 질문들을 해볼 수 있습니다:

- 적어도 연관된 두 개의 파일이 있는가?
- 이 파일들을 그룹화하면 코드베이스의 유지 보수가 향상될까?
- 이 파일들이 나의 프로젝트에서 공통 영역 또는 주제를 공유하는가?
- 이 파일들이 나의 프로젝트에서 공통 책임을 공유하는가?
- 프로젝트의 기존 기능 중에서 일을 처리할 수 없는 것이 있는가?

참고로, 기능은 라우트 폴더에 해당할 수도 있고 그렇지 않을 수도 있습니다.

기능을 언제든지 만들 수 있는 자유가 있습니다. 사실 코딩을 먼저 해보고, 새로이 마음껏 해보는 것이 좋은 생각일 때도 있습니다. 왜냐하면 그 순간에는 전체 그림을 볼 수 있고, 이후에 최적화하는 것이 더 쉬워지기 때문이죠.

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

피처 중심 구조가 가져다주는 혜택은 무엇일까요? Next Right Now 문서에 따르면 다음과 같습니다:

다음은 위에서 설명한 내용을 보여주는 예시입니다:

```js
.
├── components/
│   ├── 다른 컴포넌트...
│   ├── 다른 컴포넌트...
│   ├── 다른 컴포넌트...
│   ├── 다른 컴포넌트...
│   ├── NewTweetForm.tsx
│   ├── 다른 컴포넌트...
│   ├── 다른 컴포넌트...
│   ├── 다른 컴포넌트...
│   ├── RecommendedTopics.tsx
│   ├── 다른 컴포넌트...
│   ├── 다른 컴포넌트...
│   ├── 다른 컴포넌트...
│   ├── 다른 컴포넌트...
│   ├── Sidebar.tsx
│   ├── 다른 컴포넌트...
│   ├── 다른 컴포넌트...
│   ├── 다른 컴포넌트...
│   └── TweetsList.tsx
├── hooks/
│   ├── 다른 훅...
│   ├── 다른 훅...
│   ├── 다른 훅...
│   ├── 다른 훅...
│   ├── 다른 훅...
│   ├── 다른 훅...
│   ├── 다른 훅...
│   ├── useNewTweet.ts
│   ├── 다른 훅...
│   ├── 다른 훅...
│   ├── useRecommendedTopics.ts
│   ├── 다른 훅...
│   ├── 다른 훅...
│   ├── 다른 훅...
│   ├── useTweets.ts
│   ├── 다른 훅...
│   └── 다른 훅...
└── pages/
    ├── 다른 페이지...
    ├── 다른 페이지...
    ├── 다른 페이지...
    ├── 다른 페이지...
    ├── 다른 페이지...
    ├── 다른 페이지...
    ├── 다른 페이지...
    ├── 다른 페이지...
    ├── Home.tsx
    ├── 다른 페이지...
    ├── 다른 페이지...
    ├── 다른 페이지...
    ├── 다른 페이지...
    ├── 다른 페이지...
    └── 다른 페이지...
```

```js
.
├── home/
│   ├── Home.tsx
│   ├── NewTweetForm.tsx
│   ├── RecommendedTopics.tsx
│   ├── Sidebar.tsx
│   ├── TweetsList.tsx
│   ├── useNewTweet.ts
│   ├── useRecommendedTopics.ts
│   └── useTweets.ts
├── profile/
│   ├── ...
│   ├── ...
│   ├── ...
│   └── ...
├── search/
│   ├── ...
│   ├── ...
│   ├── ...
│   └── ...
└── settings/
    ├── ...
    ├── ...
    ├── ...
    └── ...
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

만약 심사숙고를 해본다면, 차이는 모든 파일을 기계적으로 분류하는 것이 아니라 논리적 추론을 기반으로 프로젝트를 그룹화하는 데 있다.

이 구조가 개발자들이 코드베이스를 탐색하는 방식과 더 호환성이 있는 것 같아요. 그러나 이 방식은 특히 처음 시도하는 초보자에게는 더 어려울 수 있다는 단점이 있어요.

위의 비교를 살펴보면, 홈페이지 작업을 해야 한다고 가정해 보죠. 어떤 구조가 당신의 삶을 더 쉽게 만들어주고보다 빨리 올바른 방향을 제시할까요? 제 주장에 동의하시나요?

# 라우트 구조화

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

웹 앱을 구조화할 때 가장 먼저 고려해야 하는 것은 루트 및 관련 페이지입니다. 응용프로그램 라우터를 통해 이를 어떻게 구조화할 수 있는지 살펴봅시다:

```js
.
└── app/
    ├── home
    ├── landing
    └── page.tsx
```

인증 상태에 따라 랜딩 페이지 또는 홈 페이지를 렌더링하려고 가정해보겠습니다. 조건부 렌더링 로직을 page.tsx 내에 작성하는 것이 좋은 시작 방법입니다. 그런 다음 각 경우에 해당하는 기능 폴더를 갖게 됩니다. 이를 통해 각 기능과 관련된 모든 것을 깔끔하게 그룹화할 수 있습니다. 폴더가 페이지.tsx를 포함하지 않으면 그냥 폴더에 불과합니다. 페이지.tsx가 포함되어야 비로소 라우트가 됩니다.

근본과 관련된 다른 파일들을 어디에 놓아야 할 필요가 있다면, 예시를 살펴보겠습니다:

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

```
.
└── app/
    ├── home
    ├── landing
    └── (root)/
        ├── page.tsx
        └── useAuth.ts
```

루트 폴더에서만 사용되는 파일을 저장해야 할 경우, 해당 파일들을 루트 폴더 안에 그룹화할 수 있습니다. 이 경우에는 괄호 안에 폴더 이름을 감싸서 라우트 그룹을 만들고 있습니다. 이는 URL 경로에 영향을 주지 않도록하는 것입니다.

또 다른 방법으로, 프로젝트 전체에서 공통적으로 사용되는 파일을 저장해야 할 경우 다음 섹션을 참고해주세요.

# 공통 파일 정리하기

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

프로젝트에서 기본 버튼 컴포넌트와 같은 전역 파일이 필요할 때가 많습니다. 이러한 공통 파일은 최상위 레벨에 배치됩니다. 특정한 경우에 대해서만 말씀드리면, 이러한 파일은 어떤 기능과도 관련이 없는 것으로 정의되기 때문에 역할 기반 그룹화가 채택됩니다. 다음은 그 모습을 예로 보여드립니다:

```js
.
└── app/
    ├── ...
    ├── components
    ├── hooks
    ├── models
    └── utilities
```

이는 단순히 예시일 뿐이니, 여러분에게 의미 있는 방식으로 항목을 그룹화하셔도 됩니다.

공통 파일에 대한 정해진 규칙은 없지만, 공통 폴더에 파일을 배치하기 전에 스스로에게 물어볼 몇 가지 질문이 있습니다:

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

-이 파일은 일반적으로 전체 프로젝트에서 사용됩니까?
-이 파일은 특정 기능에 특화되지 않습니까?
-프로젝트가이 파일에 대한 전역 액세스로 이점을 얻을 수 있습니까?

# 기능 작성

기능 폴더 내에 해당 기능에 대한 모든 관련 파일을 포함할 수 있습니다. 예를 들어 컴포넌트, 이미지, 상수, 훅 등이 있습니다. 이 수준의 동일 위치 설정은 모든 것이 즉시 사용 가능하기 때문에 기능 작업이 쉽습니다. 해당 기능에 해당하는 경로가 필요한 경우 page.tsx 파일도 포함할 수 있습니다.

기능 폴더 내에서 혼란스러워지면 파일을 더 그룹화할 수도 있습니다. 다음은 예시입니다:

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
.
└── app/
    ├── ...
    └── (auth)/
        ├── LogoutModal/
        │   ├── LogoutModal.tsx
        │   ├── LogoutModal.test.tsx
        │   ├── LogoutModal.stories.tsx
        │   └── LogoutModal.module.css
        ├── useAuth.ts
        ├── User.ts
        ├── sign-up/
        │   └── page.tsx
        └── login/
            └── page.tsx
```

우리가 보고 있는 내용을 설명해보겠습니다:

- 먼저, auth 기능이 있습니다. 이 앱의 인증과 관련된 모든 내용을 포함합니다.
- 가입 페이지입니다.
- 로그인 페이지입니다.
- LogoutModal 컴포넌트입니다. 해당 컴포넌트를 자체 폴더에 그룹화하면 관련된 모든 것을 한 곳에 두고 유지할 수 있습니다.
- 사용자 모델(User).
- useAuth 훅입니다.

# 모두를 모아보기```

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

우리는 몇 가지 주제를 단계별로 다뤘습니다. 이제 모든 것을 함께 정리해봅시다:

```js
.
└── app/
    ├── components/
    │   └── Button/
    │       └── Button.tsx
    ├── home/
    │   ├── TweetsList/
    │   │   └── TweetsList.tsx
    │   ├── Sidebar/
    │   │   └── Sidebar.tsx
    │   ├── page.tsx
    │   └── useTweets.ts
    ├── (auth)/
    │   ├── useAuth.ts
    │   ├── User.ts
    │   ├── sign-up/
    │   │   └── page.tsx
    │   └── login/
    │       └── page.tsx
    ├── hooks/
    │   └── useSomething.ts
    └── utils/
        └── makeThings.ts
```

위의 내용을 요약해봅시다:
- 전역 폴더: components, hooks, 그리고 utils.
- 기능 폴더: home 그리고 auth.
- 페이지: /home, /sign-up, 그리고 /login.

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

# 최종 권장 사항

- 각 구성 요소를 처음부터 폴더로 감싸는 것을 추천합니다. 추가로 스타일이나 테스트와 같은 파일이 필요할 수 있으므로, 미리 준비해 두는 것이 좋습니다.
- 복잡성을 줄이기 위해, 깊게 중첩된 구조는 피하는 것이 좋습니다. 일반적으로, 경로나 하위 경로 폴더에서 시작하는 한 단계의 중첩이 충분합니다.
- 모델을 식별하는 데 어려움이 있다면, User.model.ts와 같은 이름을 지정할 수 있습니다.
- URL 경로에 영향을 주지 않는 경로 그룹을 활용할 수 있다는 것을 기억해주세요.

# 마무리하며

이 기사가 여러분이 프로젝트를 확장 가능하면서도 여러분의 요구에 맞게 구조화하는 데 도움이 되고 영감을 줬으면 좋겠습니다. 빠뜨린 부분이 있거나 의문이 있으시면, 댓글을 남겨주시면 기꺼이 돌아가며 도와드리겠습니다!

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

만약 Next.js 13.4에 대해 더 알고 싶다면 여기를 확인해보세요. 또한, App Router에 대한 문서를 여기에서 찾을 수 있어요.

읽어 주셔서 감사합니다.