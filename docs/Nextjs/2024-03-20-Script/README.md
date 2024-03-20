---
title: "Nextjs 14에서 스크립트 파일 로드하는 방법(next/script)"
description: ""
date: 2024-03-20 17:31
sidebarDepth: 0
tag: Tech
thumbnail:
---

# Nextjs 14에서 스크립트 파일 로드하는 방법(next/script)

이 API 참조는 스크립트 구성 요소에 사용 가능한 프롭을 이해하는 데 도움이 될 것입니다. 기능과 사용법은 "스크립트 최적화 페이지"를 참조해주세요.

```typescript
import Script from "next/script";

export default function Dashboard() {
  return (
    <>
      <Script src="https://example.com/script.js" />
    </>
  );
}
```

## 프롭

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

Script 구성 요소를 위한 사용 가능한 속성 요약입니다:

| Prop                    | Example                           | Type     | Required                                  |
| ----------------------- | --------------------------------- | -------- | ----------------------------------------- |
| [`src`](#src)           | `src="http://example.com/script"` | String   | 인라인 스크립트를 사용하지 않는 경우 필수 |
| [`strategy`](#strategy) | `strategy="lazyOnload"`           | String   | -                                         |
| [`onLoad`](#onload)     | `onLoad={onLoadFunc}`             | Function | -                                         |
| [`onReady`](#onready)   | `onReady={onReadyFunc}`           | Function | -                                         |
| [`onError`](#onerror)   | `onError={onErrorFunc}`           | Function | -                                         |

## 필수 속성

`Script` 구성 요소는 다음 속성이 필요합니다.

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

### src

외부 스크립트의 URL을 지정하는 경로 문자열입니다. 이는 절대 외부 URL이거나 내부 경로가 될 수 있습니다. 인라인 스크립트를 사용하는 경우를 제외하고는 src 속성이 필수입니다.

## 선택적 속성

`Script /` 컴포넌트는 필수 속성 이외에도 여러 추가 속성을 받습니다.

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

### 전략

스크립트의 로딩 전략입니다. 사용할 수 있는 네 가지 다른 전략이 있습니다:

- beforeInteractive: Next.js 코드 및 페이지 수분화가 발생하기 전에 로드됩니다.
- afterInteractive: (기본값) 일부 수분화가 페이지에 발생한 후 조기에 로드됩니다.
- lazyOnload: 브라우저가 유휴 상태일 때 로드됩니다.
- worker: (실험적) 웹 워커에서 로드됩니다.

### beforeInteractive

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

beforeInteractive 전략으로 로드되는 스크립트는 서버에서 초기 HTML에 삽입되며, 모든 Next.js 모듈보다 먼저 다운로드되어 페이지가 하이드레이션되기 전에 순서대로 실행됩니다.

이 전략으로 표시된 스크립트는 1차 코드 이전에 사전로드되어 검색되지만, 실행은 페이지 하이드레이션이 발생하는 것을 차단하지 않습니다.

beforeInteractive 스크립트는 루트 레이아웃(app/layout.tsx) 안에 위치해야 하며, 사이트 전체에서 필요한 스크립트를 로드하는 데 사용됩니다 (즉, 애플리케이션의 모든 페이지가 서버 측에서 로드된 후에 해당 스크립트가 로드될 것입니다).

이 전략은 페이지의 어떤 부분이 상호 작용 가능해지기 전에 검색되어야 하는 중요한 스크립트에만 사용해야 합니다.

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

```typescript
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script src="https://example.com/script.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
```

> 알아두면 좋은 점: beforeInteractive로 설정된 스크립트는 컴포넌트에 어디에 위치했든지 상관없이 항상 HTML 문서의 head 내에 삽입됩니다.

가능한 빨리 로드되어야 하는 몇 가지 스크립트 예시:

- 봇 감지기
- 쿠키 동의 관리자

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

### afterInteractive

afterInteractive 전략을 사용하는 스크립트는 HTML 클라이언트 측에 삽입되며 페이지에서 일부(또는 모두) 가수화가 발생한 후에 로드됩니다. 이는 Script 컴포넌트의 기본 전략이며 가능한 빨리 로드되어야 하지만 어떠한 첫 번째 파티 Next.js 코드도 실행되기 전에 데이터 목적에 사용해야 합니다.

afterInteractive 스크립트는 페이지나 레이아웃 어디에나 배치할 수 있으며 해당 페이지(또는 페이지 그룹)가 브라우저에서 열릴 때에만 로드 및 실행됩니다.

```js
import Script from "next/script";

export default function Page() {
  return (
    <>
      <Script src="https://example.com/script.js" strategy="afterInteractive" />
    </>
  );
}
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

afterInteractive에 적합한 스크립트 예시 몇 가지:

- 태그 관리자
- 분석 도구

### lazyOnload

lazyOnload 전략을 사용하는 스크립트는 브라우저가 유휴 상태일 때 HTML에 주입되며 페이지의 모든 리소스가 가져온 후에 로드됩니다. 이 전략은 일찍 로드할 필요가 없는 배경 또는 우선순위가 낮은 스크립트에 사용되어야 합니다.

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

lazyOnload 스크립트는 페이지나 레이아웃 내에 배치할 수 있으며 해당 페이지(또는 그룹 페이지)가 브라우저에서 열릴 때에만 로드되고 실행됩니다.

```js
import Script from "next/script";

export default function Page() {
  return (
    <>
      <Script src="https://example.com/script.js" strategy="lazyOnload" />
    </>
  );
}
```

즉시로드할 필요가 없는 스크립트 예시 및 lazyOnload로 가져올 수 있는 것들은 다음과 같습니다:

- 채팅 지원 플러그인
- 소셜 미디어 위젯

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

### worker

> 주의: worker 전략은 아직 안정화되지 않았으며 앱 디렉토리와 작동하지 않습니다. 주의하여 사용하세요.

worker 전략을 사용하는 스크립트들은 메인 스레드를 해제하고 중요한 일등 자원만을 처리하도록 웹 워커로 이동됩니다. 이 전략은 모든 스크립트에 사용할 수 있지만, 모든 서드파티 스크립트를 지원하는 것을 보장하지는 않는 고급 사용 사례입니다.

worker를 전략으로 사용하려면 next.config.js에서 nextScriptWorkers 플래그를 활성화해야 합니다:

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
module.exports = {
  experimental: {
    nextScriptWorkers: true,
  },
};
```

현재 worker 스크립트는 페이지/ 디렉토리에서만 사용할 수 있습니다:

```typescript
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script src="https://example.com/script.js" strategy="worker" />
    </>
  );
}
```

### onLoad

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

> 주의: onLoad는 아직 서버 구성 요소와 함께 작동하지 않으며 클라이언트 구성 요소에서만 사용할 수 있습니다. 더 나아가, beforeInteractive와 함께 onLoad를 사용할 수 없습니다. 대신 onReady를 사용하는 것을 고려해보세요.

일부 타사 스크립트는 사용자가 스크립트가 로드된 후 한 번 JavaScript 코드를 실행해야 할 수도 있습니다. 이 코드는 콘텐츠를 활성화하거나 함수를 호출하기 위해 필요할 수 있습니다. 스크립트를 afterInteractive 또는 lazyOnload로 로딩 전략으로 로드하고 있다면, onLoad 속성을 사용하여 로드 후에 코드를 실행할 수 있습니다.

다음은 라이브러리가 로드된 후에만 lodash 메소드를 실행하는 예제입니다.

```typescript
'use client'

import Script from 'next/script'

export default function Page() {
  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"
        onLoad={() => {
          console.log(_.sample([1, 2, 3, 4]))
        }
      />
    </>
  )
}
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

### onReady

> 경고: onReady은 아직 서버 구성 요소와 함께 작동하지 않으며 클라이언트 구성 요소에서만 사용할 수 있습니다.

세 번째 자바스크립트 스크립트의 경우 스크립트가로드를 완료 한 후에 JavaScript 코드를 실행해야하고 (예 : 라우트 탐색 후) 각 구성 요소가 마운트 될 때마다 실행해야하는 경우가 있습니다. onReady 속성을 사용하여 스크립트가 처음로드 될 때와 이후 모든 구성 요소 재마운트 후에 코드를 실행할 수 있습니다.

다음은 구성 요소가 재마운트 될 때마다 Google Maps JS 임베드를 다시 인스턴스화하는 예입니다:

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

```typescript
"use client";

import { useRef } from "react";
import Script from "next/script";

export default function Page() {
  const mapRef = useRef();

  return (
    <>
      <div ref={mapRef}></div>
      <Script
        id="google-maps"
        src="https://maps.googleapis.com/maps/api/js"
        onReady={() => {
          new google.maps.Map(mapRef.current, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
          });
        }}
      />
    </>
  );
}
```

### onError

> 경고: onError은 아직 Server Components와 함께 작동하지 않으며 Client Components에서만 사용할 수 있습니다. onError은 beforeInteractive 로딩 전략과 함께 사용할 수 없습니다.

때때로 스크립트 로드에 실패할 때를 감지하는 것이 도움이 될 수 있습니다. 이러한 오류는 onError 속성을 사용하여 처리할 수 있습니다:```

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

```typescript
'use client'

import Script from 'next/script'

export default function Page() {
  return (
    <>
      <Script
        src="https://example.com/script.js"
        onError={(e: Error) => {
          console.error('스크립트 로드 실패', e)
        }
      />
    </>
  )
}
```

## 버전 이력

| Version   | 변경 내용                                                                             |
| --------- | ------------------------------------------------------------------------------------- |
| `v13.0.0` | `beforeInteractive` 및 `afterInteractive`가 `app`을 지원하도록 수정됨.                |
| `v12.2.4` | `onReady` prop 추가됨.                                                                |
| `v12.2.2` | `beforeInteractive`을 사용하는 `next/script`이 `_document`에 배치될 수 있도록 허용됨. |
| `v11.0.0` | `next/script`이 소개됨.                                                               |

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
