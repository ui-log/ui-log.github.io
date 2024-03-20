---
title: "Nextjs 14 사이트 배포시 체크해야하는 것들"
description: ""
date: 2024-03-20 16:13
sidebarDepth: 0
tag: Tech
thumbnail:
---

# Nextjs 14 사이트 배포시 체크해야하는 것들

Next.js 애플리케이션을 프로덕션 환경으로 이동하기 전에 사용자 경험, 성능 및 보안을 위해 고려해야 할 최적화 및 패턴이 있습니다.
이 페이지는 애플리케이션을 구축할 때 참고할 수 있는 모범 사례를 제공합니다. 배포 전과 배포 후에 고려해야 할 자동 Next.js 최적화도 함께 제공됩니다.

## 자동 최적화

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

이러한 Next.js 최적화 기능은 기본적으로 활성화되어 있으며 구성이 없이 사용할 수 있습니다:

- 서버 구성 요소: Next.js는 기본적으로 서버 구성 요소를 사용합니다. 서버 구성 요소는 서버에서 실행되며 클라이언트에서 렌더링하는 데 JavaScript가 필요하지 않습니다. 따라서 이러한 구성 요소는 클라이언트 측 JavaScript 번들의 크기에 영향을 미치지 않습니다. 이후 상호 작용성이 필요할 때 Client Components를 필요에 따라 사용할 수 있습니다.
- 코드 분할: 서버 구성 요소는 경로 세그먼트에 따라 자동으로 코드를 분할합니다. 필요한 경우 Client Components 및 적절한 써드파티 라이브러리를 지연로드할 수도 있습니다.
- 사전로드: 사용자의 뷰포트에 새로운 경로로 연결되는 링크가 들어오면 Next.js가 백그라운드에서 해당 경로를 사전로드합니다. 이를 통해 새로운 경로로의 이동이 거의 즉시 이루어집니다. 필요한 경우 사전로드를 비활성화할 수도 있습니다.
- 정적 렌더링: Next.js는 빌드 시 서버 및 클라이언트 구성 요소를 정적으로 렌더링하고 렌더링된 결과물을 캐싱하여 애플리케이션의 성능을 향상시킵니다. 필요한 경우 특정 경로에 대해 동적 렌더링을 선택할 수도 있습니다.
- 캐싱: Next.js는 데이터 요청, 서버 및 클라이언트 구성 요소의 렌더링 결과, 정적 자산 등을 캐싱하여 네트워크 요청 수를 줄이는 것을 지원합니다. 필요한 경우 캐싱을 비활성화할 수도 있습니다.
  기본 설정은 애플리케이션의 성능을 향상시키고 각 네트워크 요청에 전송되는 데이터 양과 비용을 줄이는 것을 목표로 하고 있습니다.

## 개발 중

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

당신의 애플리케이션을 구축하는 동안, 최상의 성능과 사용자 경험을 보장하기 위해 다음 기능들을 사용하는 것을 권장합니다:

### 라우팅 및 렌더링

- 레이아웃: 레이아웃을 사용하여 페이지 간 UI를 공유하고 탐색 시 부분적인 렌더링을 가능하게 합니다.
- `<Link>` 컴포넌트: 클라이언트 측 탐색 및 프리페칭을 위해 `<Link>` 컴포넌트를 사용해 보세요.
- 에러 처리: 사용자 정의 에러 페이지를 생성하여 404 에러와 일반적인 에러를 제대로 처리하세요.
- 합성 패턴: 서버 및 클라이언트 컴포넌트용 권장 합성 패턴을 따르고, "use client" 경계의 배치를 확인하여 클라이언트 측 자바스크립트 번들을 불필요하게 증가시키지 않도록하세요.
- 동적 함수: cookies()와 searchParams 프롭과 같은 동적 함수들이 전체 라우트를 동적 렌더링으로 전환이 되니 유념해야 합니다 (또는 Root 레이아웃에서 사용 시 전체 애플리케이션). 동적 함수 사용이 의도된 대로 이루어졌는지 확인하고, 적절한 곳에 `<Suspense>` 경계로 감싸세요.
  > 알아두면 좋은 사항: 부분 사전 렌더링 (실험적)을 통해 전체 라우트를 동적 렌더링으로 전환하지 않고도 라우트의 일부를 동적으로 할 수 있습니다.

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

### 데이터 가져오기와 캐싱

- 서버 컴포넌트: 서버 컴포넌트를 활용하여 서버에서 데이터를 가져오는 이점을 누리세요.
- 라우트 핸들러: 클라이언트 컴포넌트에서 백엔드 리소스에 액세스하기 위해 라우트 핸들러를 사용하세요. 그러나 추가 서버 요청을 피하렀로 Route Handlers를 서버 컴포넌트에서 호출하지 마세요.
- 스트리밍: 서버에서 클라이언트로 UI를 점진적으로 전송하고 데이터가 가져와지는 동안 전체 라우트가 차단되지 않도록 로딩 UI와 React Suspense를 사용하세요.
- 병렬 데이터 가져오기: 적절한 경우에 데이터를 병렬로 가져와 네트워크 폭포를 줄이세요. 또한 적절한 경우에 데이터를 사전로드하는 것을 고려하세요.
- 데이터 캐싱: 데이터 요청이 캐시되는지 확인하고 적절한 경우에 캐시에 참여하세요. Fetch를 사용하지 않는 요청이 캐시되도록 보장하세요.
- 정적 이미지: 공개 디렉토리를 사용하여 응용 프로그램의 정적 자산, 예를 들어 이미지,을 자동으로 캐시하세요.

### UI 및 접근성

- 양식 및 유효성 검사: 서버 액션을 사용하여 양식 제출, 서버 측 유효성 검사 및 오류 처리를 처리하세요.

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

- 폰트 모듈: 폰트 모듈을 사용하여 폰트 파일을 최적화하세요. 이 모듈은 자동으로 폰트 파일을 다른 정적 자산과 함께 호스팅하고 외부 네트워크 요청을 제거하여 레이아웃 이동을 줄입니다.
- `<Image>` 컴포넌트: 이미지 컴포넌트를 사용하여 이미지를 최적화하세요. 이 컴포넌트는 이미지를 자동으로 최적화하고 레이아웃 이동을 방지하며 WebP 또는 AVIF와 같은 현대적인 형식으로 제공합니다.
- `<Script>` 컴포넌트: Script 컴포넌트를 사용하여 타사 스크립트를 최적화하세요. 이 컴포넌트는 스크립트를 자동으로 지연시켜주고 주요 스레드를 차단하지 않습니다.
- ESLint: 접근성 문제를 조기에 발견하기 위해 내장된 eslint-plugin-jsx-a11y 플러그인을 사용하세요.

### 보안

- Tainting: 데이터 객체 및/또는 특정 값에 피해 끼치는 것을 방지하여 민감한 데이터가 클라이언트에 노출되지 않도록 합니다.
- 서버 작업: 사용자가 Server Actions을 호출할 권한이 있는지 확인하세요. 권장되는 보안 관행을 검토하세요.
- 환경 변수: .env.\* 파일을 .gitignore에 추가하고 공개 변수에는 NEXT*PUBLIC* 접두사가 붙도록 합니다.
- 컨텐츠 보안 정책: 다양한 보안 위협으로부터 응용 프로그램을 보호하기 위해 컨텐츠 보안 정책을 추가하는 것을 고려하세요. 이는 크로스 사이트 스크립팅, 클릭잭킹 및 기타 코드 삽입 공격과 같은 보안 위협으로부터 애플리케이션을 보호합니다.

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

### 메타데이터 및 SEO

- 메타데이터 API: 페이지 제목, 설명 등을 추가하여 응용 프로그램의 검색 엔진 최적화(SEO)를 개선하는 데 Metadata API를 사용할 수 있습니다.
- Open Graph (OG) 이미지: 소셜 공유를 위해 응용 프로그램에 대한 OG 이미지를 생성하세요.
- 사이트맵 및 로봇: 사이트맵 및 로봇 파일을 생성하여 검색 엔진이 페이지를 크롤링하고 색인화할 수 있도록 도와주세요.

### 유형 안전성

- TypeScript 및 TS 플러그인: TypeScript와 TypeScript 플러그인을 사용하여 더 나은 유형 안전성을 제공하고 오류를 빨리 잡을 수 있습니다.

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

## 프로덕션으로 이동하기 전에

프로덕션으로 이동하기 전에, 로컬에서 앱을 빌드하여 빌드 오류를 확인하고, 프로덕션과 유사한 환경에서 앱의 성능을 측정하기 위해 다음 빌드를 실행한 다음 다음 시작을 실행할 수 있습니다.

### 핵심 웹 핵심 지표

- 라이트하우스
  : 시크릿 모드에서 라이트하우스를 실행하여 사용자가 사이트를 어떻게 경험할지에 대한 이해를 높이고 개선할 수 있는 영역을 식별할 수 있습니다. 이는 시뮬레이션 테스트이며 필드 데이터(예: 핵심 웹 핵심 지표)를 확인하는 것과 함께 진행되어야 합니다.

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

- useReportWebVitals 훅: 이 훅을 사용하여 핵심 웹 핵심 데이터를 분석 도구에 전송하세요.

### 번들 분석

@next/bundle-analyzer 플러그인을 사용하여 JavaScript 번들의 크기를 분석하고 애플리케이션 성능에 영향을 줄 수 있는 큰 모듈 및 종속성을 식별하세요. 또한 새로운 종속성을 추가하는 것이 어떻게 영향을 미칠 수 있는지 이해할 수 있는 다음 도구들이 있습니다:

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

- 수입 비용
- 패키지 공포증
- 번들 공포증
- 번들js

## 배포 후

응용 프로그램을 배포하는 위치에 따라 응용 프로그램의 성능을 모니터링하고 향상시키는 데 도움이 되는 추가 도구 및 통합을 제공받을 수 있습니다.
Vercel 배포의 경우 다음을 권장합니다:

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

- 분석
  : 내장된 분석 대시보드로 애플리케이션 트래픽을 이해할 수 있도록 도와줍니다. 고유 방문자 수, 페이지 뷰 등을 포함한 트래픽을 확인할 수 있어요.
- 속도 인사이트
  : 방문자 데이터를 기반으로 한 현실 성능 인사이트를 제공하여, 웹사이트의 실제 성능을 실제 상황에서 확인할 수 있습니다.
- 로깅
  : 런타임 및 활동 로그를 제공하여, 문제를 디버깅하고 제품용 애플리케이션을 모니터링할 수 있습니다. 혹은 서드파티 도구 및 서비스 목록을 보고 싶다면 통합 페이지를 확인해 주세요.
  > 알아 두면 좋은 점:
  > Vercel에서 제품 서비스를 위한 최상의 실천 방법을 포함한 자세한 웹사이트 성능 향상 전략을 이해하려면 Vercel 제작 체크리스트를 참조해 주세요.
  > 이 권장 사항을 따르면 사용자를 위한 더 빠르고 신뢰할 수 있으며 안전한 애플리케이션을 개발할 수 있을 거에요.

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
