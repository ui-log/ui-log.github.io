---
title: "Nextjs 14 에러 화면을 위한 error.js 파일"
description: ""
date: 2024-03-20 17:33
sidebarDepth: 0
tag: Tech
thumbnail:
---

# Nextjs 14 에러 화면을 위한 error.js 파일

에러 파일은 라우트 세그먼트를 위한 에러 UI 경계를 정의합니다.

서버 컴포넌트와 클라이언트 컴포넌트에서 발생하는 예기치 않은 에러를 잡고 대체 UI를 표시하는 데 유용합니다.

```typescript
"use client"; // 에러 컴포넌트는 클라이언트 컴포넌트여야 합니다

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // 에러를 에러 보고 서비스에 기록
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>문제가 발생했습니다!</h2>
      <button
        onClick={
          // 세그먼트를 다시 렌더링해 시도하여 복구 시도
          () => reset()
        }
      >
        다시 시도
      </button>
    </div>
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

## 속성

### error

에러 인스턴스
에러.js 클라이언트 컴포넌트로 전달된 객체입니다.

#### error.message

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

에러 메시지입니다.

- 클라이언트 컴포넌트에서 전달된 오류의 경우, 이것은 원래 오류 메시지입니다.
- 서버 컴포넌트에서 전달된 오류의 경우, 민감한 세부 정보 노출을 피하기 위해 일반적인 에러 메시지가 됩니다. 에러.다이제스트는 서버 측 로그에서 해당 오류를 식별하는 데 사용할 수 있습니다.

#### 에러.다이제스트

서버 컴포넌트에서 발생한 오류의 자동 생성된 해시값입니다. 서버 측 로그에서 해당 오류를 식별하는 데 사용할 수 있습니다.

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

### 리셋

에러 바운더리를 재설정하는 함수입니다. 실행되면 함수는 에러 바운더리의 내용을 다시 렌더링하려고 시도합니다. 성공하면, 대체할 에러 컴포넌트가 다시 렌더링된 결과로 교체됩니다.

에러에서 회복을 시도하도록 사용할 수 있습니다.

> 좋은 정보:
> 에러.js 바운더리는 클라이언트 컴포넌트 여야 합니다.
> 운영 빌드에서 서버 컴포넌트에서 전달된 오류는 민감한 정보가 노출되지 않도록 특정 오류 정보가 제거됩니다.
> 동일 세그먼트에서 레이아웃.js 컴포넌트에서 발생한 오류는 에러 바운더리가 해당 레이아웃 컴포넌트 내부에 중첩되어 있기 때문에 처리되지 않습니다.
> 특정 레이아웃의 오류를 처리하려면, 레이아웃의 상위 세그먼트에 에러.js 파일을 배치하십시오.
> 루트 레이아웃이나 템플릿 내에서 오류를 처리하려면 app/global-error.js라고 불리는 error.js의 변형을 사용하십시오.

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

## global-error.js

루트 레이아웃.js에서 발생한 오류를 전용으로 처리하려면 루트 앱 디렉토리에 위치한 error.js의 변형인 app/global-error.js를 사용하십시오.

```typescript
"use client";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body>
        <h2>문제가 발생했습니다!</h2>
        <button onClick={() => reset()}>다시 시도</button>
      </body>
    </html>
  );
}
```

> 알아두면 좋은 사항:
> global-error.js는 활성화될 때 루트 layout.js를 대체하므로 자체적으로 `html` 및 `body` 태그를 정의해야 합니다.
> 오류 UI를 디자인하는 동안 React 개발자 도구를 사용하여 오류 경계를 수동으로 토글하는 것이 도움이 될 수 있습니다.

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

## not-found.js

`not-found` 파일은 라우트 세그먼트 내에서 `notFound()` 함수가 throw될 때 UI를 렌더링하는 데 사용됩니다.

## 버전 기록

| 버전      | 변경 내용           |
| --------- | ------------------- |
| `v13.1.0` | `global-error` 도입 |
| `v13.0.0` | `error` 도입        |

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
