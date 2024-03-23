---
title: "Nextjs14 에서 다른 페이지로 리다이렉트 시키는 방법"
description: ""
date: 2024-03-20 17:49
sidebarDepth: 0
tag: Tech
thumbnail:
---

# Nextjs14 에서 다른 페이지로 리다이렉트 시키는 방법

리다이렉트 함수를 사용하면 사용자를 다른 URL로 리다이렉트할 수 있습니다. 리다이렉트는 서버 컴포넌트, 라우트 핸들러 및 서버 액션에서 사용할 수 있습니다.

스트리밍 컨텍스트에서 사용할 때, 이 함수는 클라이언트 측에서 리다이렉트를 발생시키기 위한 메타 태그를 삽입합니다. 서버 액션에서 사용할 때, 호출자에게 303 HTTP 리다이렉트 응답을 제공합니다. 그렇지 않은 경우, 호출자에게 307 HTTP 리다이렉트 응답을 제공합니다.

리소스가 존재하지 않을 때는 notFound 함수를 대신 사용할 수 있습니다.

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

> 좋은 정보:
> 서버 작업 및 라우트 핸들러에서는 try/catch 블록 이후에 리디렉션을 호출해야 합니다.
> 307 (임시)이 아닌 308 (영구) HTTP 리디렉션을 선호하는 경우, permanentRedirect 함수를 사용할 수 있습니다.

## 매개변수

리디렉션 함수는 두 개의 인수를 받습니다:

```js
redirect(path, type);
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

| Parameter | Type                                                      | Description                                                 |
| --------- | --------------------------------------------------------- | ----------------------------------------------------------- |
| path      | string                                                    | The URL to redirect to. Can be a relative or absolute path. |
| type      | 'replace' (default) or 'push' (default in Server Actions) | The type of redirect to perform.                            |

기본적으로, 리디렉트는 서버 액션에서 push(브라우저 히스토리 스택에 새 항목 추가)를 사용하고, 다른 곳에서는 replace(브라우저 히스토리 스택의 현재 URL을 대체)을 사용합니다. 이 동작은 type 매개변수를 지정하여 재정의할 수 있습니다.

type 매개변수는 서버 컴포넌트에서 사용될 때 효과가 없습니다.

## 반환값

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

표는 Markdown 형식으로 변경되어 있습니다.

## 예시

### 서버 구성 요소

redirect() 함수를 호출하면 NEXT_REDIRECT 오류가 발생하여 해당 오류가 발생한 라우트 세그먼트의 렌더링이 중단됩니다.

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
import { redirect } from "next/navigation";

async function fetchTeam(id) {
  const res = await fetch("https://...");
  if (!res.ok) return undefined;
  return res.json();
}

export default async function Profile({ params }) {
  const team = await fetchTeam(params.id);
  if (!team) {
    redirect("/login");
  }

  // ...
}
```

> 알아두면 좋은 사실: TypeScript never 유형을 사용하기 때문에 return redirect()를 사용할 필요가 없습니다.

### 클라이언트 구성 요소

redirect는 클라이언트 구성 요소내 Server Action을 통해 사용할 수 있습니다. 사용자를 리디렉트하기 위해 이벤트 핸들러를 사용해야 하는 경우 useRouter 훅을 사용할 수 있습니다.

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
"클라이언트 사용";

import { navigate } from "./actions";

export function ClientRedirect() {
  return (
    <form action={navigate}>
      <input type="text" name="id" />
      <button>제출</button>
    </form>
  );
}
```

```typescript
"서버 사용";

import { redirect } from "next/navigation";

export async function navigate(data: FormData) {
  redirect(`/posts/${data.get("id")}`);
}
```

## 자주 묻는 질문

### 왜 리다이렉트가 307과 308을 사용할까요?

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

redirect()를 사용할 때 임시 리디렉트에 307 상태 코드, 영구 리디렉트에 308 상태 코드를 사용한다는 점을 알 수 있을 겁니다. 기존에는 302가 임시 리디렉트에 사용되고 301이 영구 리디렉트에 사용되었지만, 많은 브라우저에서 302를 사용할 때 리디렉트의 요청 방법을 변경하여 POST 요청을 GET 요청으로 바꾸는 경우가 있습니다.

"/users"에서 "/people"으로의 리디렉트 예시를 들어보겠습니다. "/users"로 새 사용자를 생성하는 POST 요청을 보낸다고 가정할 때, 302 임시 리디렉트를 준수한다면 POST 요청이 GET 요청으로 변경됩니다. 이는 새 사용자를 생성할 때 "/people"으로 POST 요청을 보내야 하는데 GET 요청을 보내는 것은 이치에 맞지 않습니다.

307 상태 코드의 도입을 통해 요청 방법이 유지되는 POST를 보낼 수 있습니다.

- 302 - 임시 리디렉트, 요청 방법이 POST에서 GET으로 변경됨
- 307 - 임시 리디렉트, 요청 방법이 POST로 유지됨

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

리다이렉트() 메서드는 기본적으로 302 임시 리다이렉트 대신에 307을 사용하여 요청이 항상 POST 요청으로 유지됩니다.

HTTP 리다이렉트에 대해 더 알아보기.

## 버전 히스토리

| 버전      | 변경 내용            |
| --------- | -------------------- |
| `v13.0.0` | `redirect`가 도입됨. |

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
