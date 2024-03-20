---
title: "Nextjs 14의  Link 태그 사용 방법"
description: ""
date: 2024-03-20 17:30
sidebarDepth: 0
tag: Tech
thumbnail:
---

# Nextjs 14의 Link 태그 사용 방법

`Link`는 HTML `a` 요소를 확장하여 라우트 간 사전 로드 및 클라이언트 측 탐색을 제공하는 React 구성 요소입니다. Next.js에서 라우트 간 이동하는 주요 방법입니다.

```typescript
import Link from "next/link";

export default function Page() {
  return <Link href="/dashboard">대시보드</Link>;
}
```

## 속성

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

여기 Link 컴포넌트에 사용할 수 있는 속성 요약이 있어요:

| 속성                   | 예시                | 타입             | 필수 |
| ---------------------- | ------------------- | ---------------- | ---- |
| [href](#href-required) | `href="/dashboard"` | 문자열 또는 객체 | 네   |
| [replace](#replace)    | `replace={false}`   | 불린             | -    |
| [scroll](#scroll)      | `scroll={false}`    | 불린             | -    |
| [prefetch](#prefetch)  | `prefetch={false}`  | 불린 또는 널     | -    |

> 참고: `a` 태그 속성인 className이나 target="\_blank"와 같은 것들은 `Link` 속성으로 추가할 수 있으며, `a` 요소로 전달될 거예요.

### href (필수)

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

페이지로 이동할 경로 또는 URL입니다.

```js
<Link href="/대시보드">대시보드</Link>
```

href는 객체를 허용하기도 합니다. 예를 들어 다음과 같이 사용할 수 있습니다:

```js
// /about?name=test로 이동
<Link
  href={{
    pathname: "/about",
    query: { name: "test" },
  }}
>
  소개
</Link>
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

### 변경

기본값은 false입니다. true로 설정하면 next/link가 브라우저의 히스토리 스택에 새 URL을 추가하는 대신 현재 히스토리 상태를 대체합니다.

```typescript
import Link from "next/link";

export default function Page() {
  return (
    <Link href="/dashboard" replace>
      Dashboard
    </Link>
  );
}
```

### 스크롤

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

기본값은 true입니다. `Link`의 기본 동작은 새 경로의 맨 위로 스크롤하거나 뒤로, 앞으로 이동할 때 스크롤 위치를 유지하는 것입니다. scroll={false}로 설정하면 next/link가 탐색 후 페이지 맨 위로 스크롤하지 않습니다.

```typescript
import Link from "next/link";

export default function Page() {
  return (
    <Link href="/dashboard" scroll={false}>
      Dashboard
    </Link>
  );
}
```

> 알아두면 좋은 사항:
> 콘텐츠가 화면에 보이지 않으면 Next.js는 탐색할 때 페이지로 스크롤합니다.

### 미리 가져오기(prefetch)

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

프리패칭은 `Link` 컴포넌트가 사용자의 뷰포트에 들어오면 발생합니다(초기에든 스크롤을 통해든). Next.js는 프리패치를 통해 링크된 라우트(링크된 href에 의해 표시됨)와 해당 데이터를 백그라운드에서로드하여 클라이언트 측 네비게이션의 성능을 향상시킵니다. 프리패칭은 프로덕션 환경에서만 활성화됩니다.

- null (기본값): 프리패치 동작은 라우트가 정적인지 동적인지에 따라 달라집니다. 정적 라우트의 경우 완전한 라우트가 프리패치됩니다(모든 데이터 포함). 동적 라우트의 경우로딩.js 경계를 갖는 가장 가까운 세그먼트까지의 부분 라우트가 프리패치됩니다.
- true: 정적 및 동적 라우트 모두 완전한 라우트가 프리패치됩니다.
- false: 프리패칭은 뷰포트에 진입하거나 호버 시 모두 발생하지 않습니다.

```typescript
import Link from 'next/link'

export default function Page() {
  return (
    [Dashboard](/dashboard)에 해당하는 Markdown 파일
  )
}
```

## 예제

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

### 동적 경로에 링크 걸기

동적 경로의 경우, 템플릿 리터럴을 사용하여 링크 경로를 생성하는 것이 편리할 수 있습니다.

예를 들어, 동적 경로 app/blog/[slug]/page.js에 대한 링크 목록을 생성할 수 있습니다:

```js
import Link from "next/link";

function Page({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
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

### 만약에 자식 요소가 `a` 태그를 감싼 사용자 지정 컴포넌트인 경우

Link의 자식 요소가 `a` 태그를 감싼 사용자 지정 컴포넌트일 때, Link에 passHref를 추가해야 합니다. styled-components와 같은 라이브러리를 사용할 때 필요합니다. 이 기능을 사용하지 않으면 `a` 태그에 href 속성이 없어 사이트의 접근성에 영향을 미칠 수 있고 SEO에도 영향을 미칠 수 있습니다. ESLint를 사용 중이라면 next/link-passhref 빌트인 규칙을 사용하여 passHref의 올바른 사용을 보장할 수 있습니다.

```js
import Link from "next/link";
import styled from "styled-components";

// <a> 태그를 감싼 사용자 지정 컴포넌트를 생성합니다.
const RedLink = styled.a`
  color: red;
`;

function NavLink({ href, name }) {
  return (
    <Link href={href} passHref legacyBehavior>
      <RedLink>{name}</RedLink>
    </Link>
  );
}

export default NavLink;
```

- 만약 emotion의 JSX pragma 기능 (@jsx jsx)를 사용 중이라면, `a` 태그를 직접 사용하더라도 passHref를 사용해야 합니다.
- 컴포넌트는 navigation을 올바르게 트리거하기 위해 onClick 프로퍼티를 지원해야 합니다.

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

### 자식이 함수 컴포넌트인 경우

만약 Link의 자식이 함수 컴포넌트라면, passHref와 legacyBehavior를 사용하는 것 외에도 컴포넌트를 React.forwardRef로 감싸주어야 합니다:

```js
import Link from "next/link";

// `onClick`, `href`, 그리고 `ref`는 적절한 처리를 위해 DOM 요소로 전달되어야 합니다
const MyButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      Click Me
    </a>
  );
});

function Home() {
  return (
    <Link href="/about" passHref legacyBehavior>
      <MyButton />
    </Link>
  );
}

export default Home;
```

### URL 객체 사용하기

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

링크는 URL 객체도 받을 수 있고 자동으로 URL 문자열을 생성하여 형식화할 수 있습니다. 아래는 그 방법입니다:

```js
import Link from "next/link";

function Home() {
  return (
    <ul>
      <li>
        <Link href={{ pathname: "/about", query: { name: "test" } }}>About us</Link>
      </li>
      <li>
        <Link href={{ pathname: "/blog/[slug]", query: { slug: "my-post" } }}>Blog Post</Link>
      </li>
    </ul>
  );
}

export default Home;
```

위 예제에서 링크는 다음을 연결합니다:

- 미리 정의된 경로: /about?name=test
- 동적 경로: /blog/my-post

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

Node.js URL 모듈 문서에서 정의된 모든 속성을 사용할 수 있어요.

### push 대신 URL 교체

Link 컴포넌트의 기본 동작은 새 URL을 history 스택에 추가하는 것이에요. 다음 예시처럼 교체 속성을 사용하여 새 항목을 추가하지 않도록 할 수 있어요:

```js
<Link href="/about" replace>
  회사 소개
</Link>
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

### 페이지 상단으로 스크롤되는 것을 비활성화

링크의 기본 동작은 페이지 상단으로 스크롤하는 것입니다. 해시가 정의된 경우 특정 ID로 스크롤됩니다. 일반 `a` 태그와 같이요. 페이지 상단으로 스크롤되는 것을 방지하려면 Link에 다음을 추가할 수 있습니다: /#hashid` scroll={false}:

```js
<Link href="/#hashid" scroll={false}>
  페이지 상단으로 스크롤 비활성화
</Link>
```

### 미들웨어

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

미들웨어를 사용하여 인증이나 사용자를 다른 페이지로 재작성하는 경우가 많습니다. 미들웨어를 통해 리다이렉트된 링크를 제대로 미리 가져오기 위해 Next.js에게 표시할 URL과 미리 가져올 URL을 모두 알려주어야 합니다. 이는 올바른 경로를 사전에 가져오기 위해 미들웨어에 불필요한 요청을 보내지 않도록 하기 위해서 필요합니다.

예를 들어, 인증 및 방문자 뷰가 있는 /dashboard 경로를 제공하고 싶다면, 미들웨어에 다음과 유사한 내용을 추가하여 사용자를 올바른 페이지로 리디렉션할 수 있습니다:

```js
export function middleware(req) {
  const nextUrl = req.nextUrl;
  if (nextUrl.pathname === "/dashboard") {
    if (req.cookies.authToken) {
      return NextResponse.rewrite(new URL("/auth/dashboard", req.url));
    } else {
      return NextResponse.rewrite(new URL("/public/dashboard", req.url));
    }
  }
}
```

이 경우, `Link /` 컴포넌트에서 다음 코드를 사용하고 싶을 것입니다:

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
import Link from "next/link";
import useIsAuthed from "./hooks/useIsAuthed";

export default function Page() {
  const isAuthed = useIsAuthed();
  const path = isAuthed ? "/auth/dashboard" : "/public/dashboard";
  return (
    <Link as="/dashboard" href={path}>
      Dashboard
    </Link>
  );
}
```

## 버전 히스토리

| Version   | Changes                                                                                                                                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `v13.0.0` | 자식 `<a>` 태그가 더 이상 필요하지 않습니다. 자동으로 코드베이스를 업데이트하기 위한 <a href="/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components">codemod</a>가 제공됩니다. |
| `v10.0.0` | 동적 경로를 가리키는 `href` props는 자동으로 해결되어 더 이상 `as` prop이 필요하지 않습니다.                                                                                                                       |
| `v8.0.0`  | 개선된 프리패칭 성능.                                                                                                                                                                                              |
| `v1.0.0`  | `next/link` 도입.                                                                                                                                                                                                  |

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
