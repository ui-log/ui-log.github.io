---
title: "Nextjs 14 쿠키 사용 방법"
description: ""
date: 2024-03-20 17:41
sidebarDepth: 0
tag: Tech
thumbnail:
---

# Nextjs 14 쿠키 사용 방법

쿠키 함수를 사용하면 서버 구성 요소에서 HTTP 수신 요청 쿠키를 읽거나 서버 액션 또는 라우트 핸들러에서 발신 요청 쿠키를 작성할 수 있습니다.

> 알아두면 좋은 사실: cookies()는 미리 알 수없는 값이 반환되는 동적 함수이며, 레이아웃이나 페이지에서 사용하면 요청 시 동적 렌더링으로 라우트를 선택합니다.

## cookies().get(name)

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

쿠키 이름을 가져와 이름과 값을 포함한 객체를 반환하는 메서드입니다. 이름이 포함된 쿠키를 찾을 수 없는 경우에는 undefined를 반환합니다. 여러 개의 쿠키가 일치하는 경우, 첫 번째 일치하는 항목만 반환합니다.

```js
import { cookies } from "next/headers";

export default function Page() {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  return "...";
}
```

## cookies().getAll()

이 메서드는 get과 유사하지만 일치하는 이름을 가진 모든 쿠키의 목록을 반환합니다. 이름이 지정되지 않은 경우, 사용 가능한 모든 쿠키를 반환합니다.

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
import { cookies } from "next/headers";

export default function Page() {
  const cookieStore = cookies();
  return cookieStore.getAll().map((cookie) => (
    <div key={cookie.name}>
      <p>Name: {cookie.name}</p>
      <p>Value: {cookie.value}</p>
    </div>
  ));
}
```

## cookies().has(name)

특정 쿠키 이름을 가져와 해당 쿠키가 존재하는지 여부를 기반으로 true(존재함) 또는 false(존재하지 않음)를 반환합니다.

```js
import { cookies } from "next/headers";

export default function Page() {
  const cookieStore = cookies();
  const hasCookie = cookieStore.has("theme");
  return "...";
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

## cookies().set(name, value, options)

이 메서드는 쿠키 이름, 값 및 옵션을 가져와서 나가는 요청 쿠키를 설정합니다.

> 알아두면 좋은 사실: HTTP는 스트리밍이 시작된 후에 쿠키를 설정하는 것을 허용하지 않습니다. 그래서 서버 액션이나 라우트 핸들러에서 .set()을 사용해야 합니다.

```js
"use server";

import { cookies } from "next/headers";

async function create(data) {
  cookies().set("name", "lee");
  // 또는
  cookies().set("name", "lee", { secure: true });
  // 또는
  cookies().set({
    name: "name",
    value: "lee",
    httpOnly: true,
    path: "/",
  });
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

## 쿠키 삭제하기

> 유용한 정보: 서버 액션 또는 라우트 핸들러에서만 쿠키를 삭제할 수 있습니다.

쿠키를 삭제하는 여러 옵션이 있습니다:

### cookies().delete(name)

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

특정 이름을 가진 쿠키를 명시적으로 삭제할 수 있어요.

```js
'use server'

import { cookies } from 'next/headers'

async function delete(data) {
  cookies().delete('name')
}
```

### cookies().set(name, ``)

또는 동일한 이름과 빈 값을 가진 새로운 쿠키를 설정할 수도 있어요.

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
'use server'

import { cookies } from 'next/headers'

async function delete(data) {
  cookies().set('name', '')
}
```

> 알아두면 좋아요: .set()은 서버 액션이나 라우트 핸들러에서만 사용할 수 있습니다.

### cookies().set(name, value, { maxAge: 0 })

maxAge를 0으로 설정하면 쿠키를 즉시 만료시킬 수 있습니다.

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
'use server'

import { cookies } from 'next/headers'

async function delete(data) {
  cookies().set('name', 'value', { maxAge: 0 })
}
```

### cookies().set(name, value, { expires: timestamp })

Setting expires to any value in the past will immediately expire a cookie.

```js
'use server'

import { cookies } from 'next/headers'

async function delete(data) {
  const oneDay = 24 * 60 * 60 * 1000
  cookies().set('name', 'value', { expires: Date.now() - oneDay })
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

> 좋은 정보: .set()이 호출된 동일한 도메인에 속한 쿠키만 삭제할 수 있습니다. 또한 삭제하려는 쿠키와 동일한 프로토콜(HTTP 또는 HTTPS)에서 코드를 실행해야 합니다.

## 버전 역사

```

| Version | Changes         |
| ------- | --------------- |
| v13.0.0 | cookies 도입됨. |

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
