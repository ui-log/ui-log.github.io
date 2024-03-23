---
title: "2024년에 사용해야 할 React 라이브러리 7가지"
description: ""
date: 2024-03-23 03:27
sidebarDepth: 0
tag: Tech
thumbnail:
originalTitle: 📚 React Libraries You Should Use In 2024
link: https://reedbarger.medium.com/react-libraries-you-should-use-in-2024-4a9fd422a1bd
---

<img src="./img/📚-React-Libraries-You-Should-Use-In-2024_0.png" />

React 애플리케이션을 만들려면 필요한 기능을 추가하는 데 필요한 올바른 라이브러리에 익숙해지는 것이 중요합니다.

예를 들어, 인증 또는 스타일링과 같은 특정 기능을 추가하려면 해당 기능을 처리할 좋은 서드파티 라이브러리를 찾아야 합니다.

이 포괄적인 안내서에서는 2024년에 React 앱을 쉽게 빌드하는 데 권장하는 모든 라이브러리를 보여드릴 예정입니다.

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

# 🛠️ React Framework

우선, 2024년에 어떻게 React 앱을 만들어야 할지 궁금하시죠?

클라이언트 렌더링 React 프로젝트를 원한다면, 폐기된 Create React App 도구의 자리를 차지한 Vite가 최선의 선택입니다.

서버 렌더링 또는 풀 스택 React 프로젝트를 만들고 싶다면, Next.js가 가장 완벽하고 인기 있는 풀 스택 React 프레임워크입니다. Next.js 버전 13에서는 앱 라우터를 도입하여 서버 컴포넌트 및 서버 액션과 같은 기능을 제공해줍니다. 이로써 데이터를 가져와 React 컴포넌트를 서버에서 렌더링할 수 있게 됩니다.

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

만약 Next.js의 일부 기능이 너무 어렵게 느껴진다면, 동적 및 정적 사이트를 만들기 위한 좋은 풀스택 대안은 Remix입니다.

어플리케이션을 빠르게 로드하고 주로 정적 콘텐츠를 제공하고 싶다면, 또 다른 좋은 선택은 Astro입니다. Astro를 사용하면 React를 다른 프레임워크인 Vue와 Svelte와 함께 사용할 수 있으며(즉, "프레임워크에 중립적"입니다), 클라이언트에게 필요한 최소한의 JavaScript를 전송하도록 설계되어 매우 빠른 로드 시간을 제공합니다.

# 📦 패키지 매니저

이 안내서에 나열된 모든 라이브러리를 설치하려면 패키지 매니저라고 하는 것이 필요합니다.

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

Node.js를 설치했다면, 컴퓨터에서 React 프로젝트를 로컬에서 실행하는 데 필요한 NPM을 간단히 사용할 수 있어요. 2024년에도 여전히 좋은 선택이에요. NPM 이외에도 Yarn과 PNPM 등 다른 대안들이 있었어요.

자바스크립트 세계에서 빠르게 인기를 얻고 있는 최신 대안은 Bun이에요. Bun은 Node와 같은 자바스크립트 런타임뿐만 아니라 패키지 관리자로, Node와 NPM에 대한 빠른 대안으로 마케팅되고 있어요.

# 🎨 CSS & UI 라이브러리

프로젝트를 설정하고 라이브러리를 설치했으니, React 프로젝트를 어떻게 스타일링할 건가요?

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

위에서 언급한 모든 프레임워크에는 기본적인 CSS 지원이 포함되어 있습니다. 2024년에 React 프로젝트를 평범한 CSS로 스타일링하는 것이 완전히 괜찮습니다.

CSS 스타일 시트나 CSS 모듈을 사용할 수 있지만 현재 순수 스타일링 측면에서 가장 인기 있는 선택은 Tailwind CSS를 사용하는 것입니다. Tailwind CSS를 사용하면 몇 가지 설정 단계가 필요하지만, 사전 제작된 클래스를 연결하여 컴포넌트 파일 내에서 스타일을 빠르게 추가할 수 있습니다.

ShadCN은 2024년에 매우 인기 있는 UI 라이브러리로, Tailwind CSS와 Radix UI라는 컴포넌트 라이브러리를 결합합니다. Radix와 같은 컴포넌트 라이브러리를 사용하면 직접 코딩하지 않고도 컴포넌트를 쉽게 추가할 수 있습니다. Tailwind CSS의 도움으로 컴포넌트가 보이는 방식에 대한 더 큰 제어력을 제공해 주어 ShadCN이 인기를 얻고 있습니다.

그 외에도 기능적인 컴포넌트 라이브러리가 많이 있습니다. 여전히 인기 있는 Material UI뿐만 아니라 Mantine, Chakra UI와 같은 다른 라이브러리도 있습니다. 어떤 것을 선택할지는 최종 앱이 어떻게 보일지에 따라 다릅니다. 여러 UI 라이브러리를 시도해보고 어떤 것이 가장 맘에 드는지 확인해 보는 것을 추천합니다.

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

# 💽 상태 관리

React에는 기본 애플리케이션에서 앱 상태를 관리하기 위한 useState와 useReducer와 같은 내장 도구가 있습니다. Next.js를 사용하는 경우 서버 컴포넌트와 함께 작업할 때 상태 관리는 URL로 이동했습니다. 이러한 옵션들을 가지고 있더라도 더 정확하게 상태를 관리할 필요가 있을 수 있습니다.

여러 개의 상태 조각을 가지고 상태 업데이트가 컴포넌트를 렌더링하는 방법을 더욱 강력하게 제어하고 싶을 수 있습니다. 그렇다면 전용 상태 관리 라이브러리를 사용할 수 있습니다.

Zustand, Recoil, Jotai와 같은 라이브러리는 객체에 프로퍼티와 메소드를 선언함으로써 상태를 간단히 관리할 수 있게 해줍니다. 이것이 최종적으로 앱의 컴포넌트 전반에 걸쳐 상태 관리를 처리하는 가장 간단한 방법입니다.

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

만약 내가 2024년에 내 모든 React 프로젝트를 위해 하나의 상태 관리 라이브러리를 선택해야 한다면, Zustand를 선택할 것이다. 이를 사용하는 방법을 배우는 데 거의 시간이 걸리지 않는다. 또한 응용 프로그램에 제공자 구성 요소를 추가할 필요가 없어 어떤 구성 요소에서든 편리하게 사용할 수 있게 만든다.

# 🐕 데이터 가져오기

상태 관리와 데이터 가져오기는 종종 함께 이루어진다. 클라이언트 렌더링된 React 앱을 구축한다면, 데이터 가져오기 라이브러리가 필요할 것이다.

2024년에 React 앱에서 서버로부터 데이터를 가져오는 가장 좋은 방법은 여전히 React Query 또는 지금은 TanStack Query로 불리는 것이다. TanStack Query는 데이터 가져오기, 언제 가져오고 다시 가져오고, 캐싱 등을 통해 편리한 사용자 지정 후크를 통해 데이터를 매우 쉽게 변경하거나 변이시키는 것 외에도 상세하고 세밀한 제어를 제공한다.

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

또 다른 좋은 대안은 SWR인데요. SWR은 쿼리와 뮤테이션을 처리하기 위한 커스텀 훅을 제공하지만, 제공하는 기능 면에서 훨씬 간단합니다. 두 가지 중 어느 것을 선택해도 잘못된 선택은 없습니다. fetch API를 사용하여 데이터를 가져오고 HTTP 요청을 수행할 수 있습니다.

# 🧭 라우팅

Next.js, Remix, 또는 Astro와 같은 프레임워크를 사용 중이라면 이미 라우팅이 처리되어 있습니다. 이 프레임워크들은 프로젝트에서 라우트나 페이지를 만드는 내장된 방법을 제공합니다.

Vite 또는 Create React App과 같은 클라이언트 렌더링 React 앱을 사용하고 있다면, 라우팅 라이브러리를 선택해야 합니다. React Router는 여전히 가장 인기 있는 선택지입니다. 모든 라우팅 요구 사항을 처리해줍니다. loader prop로 인해 데이터로딩 기능을 매우 발전시켰습니다. loader prop을 사용하면 React Query와 같은 외부 라이브러리를 사용하지 않고도 특정 경로에 대한 데이터를 가져올 수 있습니다.

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

입소문만큼이나 좋은 기능을 갖춘 새로운 라이브러리인 Tanstack Router가 있습니다. Tanstack Router는 완전히 타입 안정성을 갖추었으며 데이터 가져오기에 대한 좋은 기본 설정을 제공합니다. 마치 React Router 버전 6이 제공하는 것과 같이요.

Tanstack Router는 조금 더 최근에 나왔지만, 두 선택지 중 어느 것을 선택해도 잘못될 일은 거의 없습니다. 이미 Tanstack Query나 SWR을 사용 중이라면 이것들과 완벽히 어울립니다.

# 🔒 인증

인증은 프로젝트의 서버 측에서 처리되는 요소지만, React 프로젝트와 가장 잘 통합되는 라이브러리를 파악하는 것도 중요합니다. 이는 클라이언트와 서버 양쪽에서 모두 해당됩니다.

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

2024년에, Supabase가 매우 견고한 인증 솔루션으로 등장했으며 React 앱과 쉽게 통합할 수 있는 옵션을 제공합니다. 서버 쪽인 예를 들어 Next.js 프로젝트와 클라이언트 쪽에서 모두 사용할 수 있습니다. 지난 몇 년 동안 Firebase는 비슷한 이유로 선택되었지만 서버 측 통합은 어려웠습니다.

만약 Next.js를 사용 중이라면, NextAuth, Clerk, 그리고 신입사원 Lucia와 같은 다양한 옵션이 있습니다. 아쉽게도 현재 년도에는 Next.js를 위한 내장 인증 라이브러리가 없지만, 미래에는 나올 수도 있습니다.

한편 저는 현재 Supabase를 사용하고 있고, 여러분도 함께 문서를 통해 확인해보길 강력히 추천드립니다.

# 🥞 데이터베이스 및 ORM

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

인증과 마찬가지로 데이터베이스는 주로 서버 측 코드와 밀접하게 연관되어 있어요.

Supabase나 Firebase와 같은 데이터베이스는 별도의 서버가 필요하지 않아요. 클라이언트에서 직접 데이터를 가져오고 변경할 수 있으며, 대시보드에서 보안 규칙을 추가하여 사용자의 인증 상태와 역할에 따라 특정 유형의 요청이 허용되는지 여부를 확인할 수 있어요.

두 가지 옵션 이외에도, 전통적인 서버나 풀 스택 프레임워크를 사용한다면 무수한 옵션이 존재해요. 2024년에는 MySQL이나 PostgreSQL과 같은 SQL 데이터베이스가 MongoDB나 Firebase와 같은 NoSQL 데이터베이스보다 선호되는 경향이 있어요.

데이터베이스를 다룰 때, 일반 SQL 또는 사용자 정의 쿼리 언어를 사용할 수 있는 ORM을 사용할 수 있어요. Prisma나 Drizzle과 같은 인기있는 ORM 옵션이 있고, 이들을 사용하면 반환될 데이터를 알 수 있는 안전한 코드를 생성할 수 있으며, SQL 또는 NoSQL 데이터베이스와 매우 잘 통합될 수 있어요.

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

# 🕰️ 날짜 및 시간

자바스크립트를 다룰 때는 항상 날짜 라이브러리를 사용하는 것이 좋습니다. 자바스크립트의 날짜 생성자는 예측할 수 없으며 시간대와 같은 것들을 신뢰할 수 있게 다루기가 거의 불가능합니다.

다양한 옵션이 있지만, 저는 date-fns나 day.js를 선호합니다. 둘 다 매우 작고 포괄적인 라이브러리로, 브라우저나 백엔드에서 자바스크립트 날짜를 다룰 수 있게 해줍니다. 둘 중 어느 것을 선택해도 잘못된 선택은 없습니다.

# 📋 폼

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

대부분 간단한 가입 양식이 있는 앱을 만드는 경우, 입력 필드에 required 속성을 사용하는 것만으로도 대부분 충분할 수 있습니다.

더 복잡한 것을 만들거나 많은 양식이 있는 경우, React Hook Form은 양식 입력을 유효성 검사하고 매우 간단한 코드로 오류를 표시할 수 있게 해주는 완전한 기능을 갖춘 양식 라이브러리입니다.

Formik 및 React Final Form과 같은 다른 양식 라이브러리도 동일한 기능을 제공하지만, React Hook Form은 hooks를 기반으로 한 보다 현대적인 API를 갖추고 일반적으로 더 적은 코드를 필요로 하기 때문에 조금 더 나은 선택입니다.

# ☔️ 드래그 앤 드롭

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

애플리케이션에 드래그 앤 드롭을 추가하려면 거의 항상 써드파티 라이브러리가 필요해요. 과거에 가장 인기 있던 선택은 React Beautiful DnD였어요. 2024년 현재로는 더 이상 정기적인 업데이트를 받지 않고 있어요.

앞으로 드래그 앤 드롭에 대한 튼튼한 대안은 DnD Kit을 사용하는 거예요. 가벼우면서 매우 유연하며, 문서에는 드래그 앤 드롭을 구현할 때 필요한 모든 사용 사례를 다룬 매우 유용한 예제가 포함되어 있어요.

# 📱 모바일 앱

모바일 앱을 개발하려면 React 개발자들을 위한 대표적인 라이브러리는 항상 React Native였어요. React Native를 웹으로 확장하기 위해 경계를 넓히는 흥미로운 라이브러리들이 있어요.

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

앱 전시회는 모바일 React 앱을 만드는 데 사용되는 Vite와 비슷한 도구입니다. 빠른 새로 고침과 같은 멋진 기능을 갖추고 있으며, Expo Go를 사용하면 프로젝트를 개발하는 동안 손쉽게 자신의 기기에서 실행할 수 있습니다. Expo는 모바일 코드 기반을 가져와 웹에 배포하는 작업을 쉽게 만들어주고 있어요.

또한 안드로이드, iOS 및 웹에서 실행되는 진정한 네이티브 앱을 만들고 싶다면 Tamagui와 같은 다른 프로젝트의 최종 목표를 확인해보세요.

브라우저에서 실행되도록 이미 작성한 React 앱이 있다면, 네이티브 앱으로 실행하고 Apple 앱 스토어 또는 구글 플레이 스토어에 출시하는 가장 빠른 방법은 Capacitor.js를 사용하는 것입니다.

# 🚀 배포

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

요즘 React 앱을 배포하는 방법은 이전보다 더 다양합니다. Vercel은 클라이언트 렌더링 또는 서버 렌더링과 관계없이 React 앱을 배포하기 가장 쉬운 플랫폼 중 하나입니다. 거의 모든 프레임워크를 지원하며 자바스크립트 이외의 다른 언어도 지원합니다. 친절한 호비 플랜을 제공하며 Netlify나 Cloudflare Pages와 같은 유사한 공간에 경쟁사들이 있습니다.

Cloudflare Pages는 풀 스택 React 프로젝트를 갖고 있다면 설정하기가 조금 까다로울 수 있지만, 이 옵션 중 가장 가격이 매우 친절합니다. 서버에 대한 요금을 지불하는 것이 괜찮다면, Railway나 Render와 같은 서비스를 사용할 수 있습니다. 이 서비스는 React 앱과 별도인 서버를 보유하고 있을 때 배포하기에 훌륭합니다.

# 🏆 알아두면 좋은 라이브러리

마지막으로, 2024년에 React 개발자라면 반드시 알아야 할 필수 라이브러리는 TypeScript입니다. 언급한 모든 프레임워크는 TypeScript를 사용하여 React 앱을 구축할 수 있는 옵션을 제공합니다.

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

TypeScript은 JavaScript 코드에서 유형 오류를 감지하여 런타임 오류를 방지하는 데 도움을 주는 도구입니다. 당신은 모든 React 프로젝트를 JavaScript로만 구축할 수 있지만, 언젠가는 TypeScript의 장점을 직접 경험하거나 TypeScript가 사용된 코드베이스를 살펴볼 것입니다.

가능하다면 TypeScript를 배우는 데 시간을 내는 것을 강력히 추천드립니다. React 개발자로서 알아야 할 가장 중요하고 가장 요구되는 도구이며 전반적인 코드 품질을 크게 향상시킬 수 있습니다.

# 🏆 프로페셔널 React 개발자로 성장하세요

React를 처음부터 끝까지 배우는 최고의 자원을 찾고 계신가요?

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

✨ 소개합니다: React 부트캠프

이 부트캠프는 React로 성공하기 위한 모든 리소스를 제공합니다:

- 🎬 200개의 심층 비디오
- 🕹️ 100가지 실전 React 챌린지
- 🛠️ 5가지 인상적인 포트폴리오 프로젝트
- 📄 10가지 필수 React 치트시트
- 🥾 완벽한 Next.js 부트캠프
- 🖼️ 애니메이션 비디오로 이루어진 완벽한 시리즈

아래를 클릭하여 직접 React 부트캠프를 시도해보세요.

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

![React Libraries You Should Use In 2024](./img/📚-React-Libraries-You-Should-Use-In-2024_1.png)
