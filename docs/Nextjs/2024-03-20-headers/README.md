---
title: "Nextjs 14 에서 headers 사용 방법"
description: ""
date: 2024-03-20 17:47
sidebarDepth: 0
tag: Tech
thumbnail:
---

# Nextjs 14 에서 headers 사용 방법

헤더 함수는 서버 구성 요소에서 HTTP 수신 요청 헤더를 읽을 수 있게 해줍니다.

## headers()

이 API는 Web 헤더 API를 확장합니다. 읽기 전용이며, 외부 요청 헤더를 설정/삭제할 수 없습니다.

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
import { headers } from "next/headers";

export default function Page() {
  const headersList = headers();
  const referer = headersList.get("referer");

  return <div>Referer: {referer}</div>;
}
```

> 참고 사항:
> headers()는 미리 알 수없는 반환 값이 있는 동적 함수입니다. 레이아웃이나 페이지에서 사용하면 요청 시 동적 렌더링이 필요한 경로를 선택합니다.

### API 참조

```js
const headersList = headers();
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

#### 파라미터

headers는 어떤 매개변수도 사용하지 않습니다.

#### 반환값

headers는 읽기 전용 Web Headers 객체를 반환합니다.

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

- Headers.entries()
  : **이 메소드는** 이 객체에 포함된 모든 키/값 쌍을 통해 걸어가도록 허용하는 반복자(iterator)를 반환합니다.
- Headers.forEach()
  : **이 메소드는** Headers 객체 내의 각 키/값 쌍에 대해 제공된 함수를 한 번씩 실행합니다.
- Headers.get()
  : **이 메소드는** 주어진 이름을 가진 Headers 객체 내의 헤더의 모든 값 시퀀스를 반환합니다.
- Headers.has()
  : **이 메소드는** Headers 객체가 특정 헤더를 포함하는지 여부를 나타내는 부울 값을 반환합니다.
- Headers.keys()
  : **이 메소드는** 이 객체에 포함된 키/값 쌍의 모든 키를 통해 걸어가도록 허용하는 반복자를 반환합니다.
- Headers.values()
  : **이 메소드는** 이 객체에 포함된 키/값 쌍의 모든 값에 대해 걸어가도록 허용하는 반복자를 반환합니다.

### 예시

#### 데이터 가져오기와 함께 사용하기

`headers()`는 데이터 가져오기를 위해 Suspense와 결합하여 사용할 수 있습니다.

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
import { Suspense } from "react";
import { headers } from "next/headers";

async function User() {
  const authorization = headers().get("authorization");
  const res = await fetch("...", {
    headers: { authorization }, // 인증 헤더를 전달합니다
  });
  const user = await res.json();

  return <h1>{user.name}</h1>;
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <User />
    </Suspense>
  );
}
```

#### IP 주소

headers()를 사용하여 클라이언트의 IP 주소를 얻을 수 있습니다.

```js
import { Suspense } from "react";
import { headers } from "next/headers";

function IP() {
  const FALLBACK_IP_ADDRESS = "0.0.0.0";
  const forwardedFor = headers().get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
  }

  return headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <IP />
    </Suspense>
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

다음은 x-forwarded-for 이외에 headers()가 읽을 수 있는 항목들입니다:

- x-real-ip
- x-forwarded-host
- x-forwarded-port
- x-forwarded-proto

## 버전 기록

| Version   | Changes                     |
| --------- | --------------------------- |
| `v13.0.0` | `headers`가 도입되었습니다. |

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
