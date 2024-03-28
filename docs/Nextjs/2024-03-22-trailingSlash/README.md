---
title: "Nextjs 13 trailingSlash 사용하기"
description: ""
date: 2024-03-22 14:31
sidebarDepth: 0
tag: Tech
thumbnail:
---

# trailingSlash

기본적으로 Next.js는 URL 끝에 슬래시가 붙은 URL을 슬래시 없이 연결된 버전으로 리디렉션합니다. 예를 들어 /about/은 /about으로 리디렉션됩니다. 이 동작을 반대로 설정하여 슬래시가 없는 URL을 슬래시가 있는 버전으로 리디렉션할 수도 있습니다.

next.config.js 파일을 열고 trailingSlash 구성을 추가하세요:

```js
module.exports = {
  trailingSlash: true,
};
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

이 옵션을 설정하면 /about과 같은 URL이 /about/로 리디렉션됩니다.

"export" 구성으로 사용할 때, /about 페이지는 기본 /about.html 대신 /about/index.html로 출력됩니다.

## 버전 히스토리

| Version  | Changes                |
| -------- | ---------------------- |
| `v9.5.0` | `trailingSlash` 추가됨 |

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
