---
title: "Nextjs 14에서 route.js를 사용해 페이지별 요청 핸들러 만들기"
description: ""
date: 2024-03-20 17:36
sidebarDepth: 0
tag: Tech
thumbnail:
---

# Nextjs 14에서 route.js를 사용해 페이지별 요청 핸들러 만들기

Route Handlers를 사용하면 Web 요청 및 응답 API를 사용하여 주어진 경로에 대한 사용자 정의 요청 핸들러를 만들 수 있습니다.

## HTTP 메소드

Route 파일을 사용하면 주어진 경로에 대한 사용자 정의 요청 핸들러를 만들 수 있습니다. 다음 HTTP 메소드를 지원합니다: GET, POST, PUT, PATCH, DELETE, HEAD 및 OPTIONS.

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
export async function GET(request: Request) {}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}
```

> 유용한 정보: 라우트 핸들러(Route Handlers)는 앱 디렉토리 내에서만 사용할 수 있습니다. API 라우트(pages)와 라우트 핸들러(app)를 함께 사용할 필요가 없습니다. 라우트 핸들러는 라우트 핸들러 자체로 모든 사용 사례를 다룰 수 있어야 합니다.

## 매개변수

### request (옵션)

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

요청 객체는 웹 요청 API의 확장인 NextRequest 객체입니다. NextRequest를 사용하면 들어오는 요청에 대한 더 많은 제어를 할 수 있게 되며, 쿠키에 쉽게 접근하고 확장된 파싱된 URL 객체인 nextUrl에 쉽게 접근할 수 있습니다.

### context (선택 사항)

```typescript
type Params = {
  team: string;
};

export async function GET(request: Request, context: { params: Params }) {
  const team = context.params.team; // '1'
}

// 라우트 매개변수에 따라 params 유형을 정의합니다 (아래 표 참조)
```

현재 context의 유일한 값은 현재 라우트의 동적 경로 매개변수를 포함하는 객체인 params입니다.

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

# 표

| 예시                             | URL            | `params`                  |
| -------------------------------- | -------------- | ------------------------- |
| `app/dashboard/[team]/route.js`  | `/dashboard/1` | `{ team: '1' }`           |
| `app/shop/[tag]/[item]/route.js` | `/shop/1/2`    | `{ tag: '1', item: '2' }` |
| `app/blog/[...slug]/route.js`    | `/blog/1/2`    | `{ slug: ['1', '2'] }`    |

## NextResponse

경로 핸들러는 NextResponse 객체를 반환함으로써 Web Response API를 확장할 수 있습니다. 이를 통해 쿠키 설정, 헤더 지정, 리디렉션 및 리라이트를 쉽게 처리할 수 있습니다. API 레퍼런스를 확인하세요.

## 버전 기록

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

| Version   | Changes                        |
| --------- | ------------------------------ |
| `v13.2.0` | Route handlers are introduced. |

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
