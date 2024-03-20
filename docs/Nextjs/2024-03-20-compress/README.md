---
title: "Nextjs 14 프로젝트 압축 최적화 방법"
description: ""
date: 2024-03-20 17:56
sidebarDepth: 0
tag: Tech
thumbnail:
---

# Nextjs 14 프로젝트 압축 최적화 방법

기본적으로 Next.js는 next start 또는 사용자 지정 서버를 사용할 때 렌더링된 콘텐츠와 정적 파일을 압축하기 위해 gzip을 사용합니다. 이것은 압축이 구성되지 않은 애플리케이션에 대한 최적화입니다. 애플리케이션에서 이미 사용자 지정 서버로 압축이 구성되어 있는 경우에는 Next.js가 압축을 추가하지 않습니다.

> 알아두면 좋은 사항:
> Vercel에 애플리케이션을 호스팅할 때, 압축은 먼저 brotli를 사용한 후 gzip를 사용합니다.
> 압축이 활성화되어 있는지와 사용 중인 알고리즘은 응답의 Accept-Encoding
> (브라우저가 수락하는 옵션) 및 Content-Encoding
> (현재 사용 중) 헤더를 확인하여 알 수 있습니다.

## 압축 비활성화

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

압축을 비활성화하려면 압축 구성 옵션을 false로 설정하십시오:

```js
module.exports = {
  compress: false,
};
```

압축을 꺼 두는 것은 서버에 압축이 구성되어 있는 경우 또는 대역폭 사용을 줄이고 응용 프로그램의 성능을 향상시키는 경우를 제외하고 권장하지 않습니다.

## 압축 알고리즘 변경

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

압축 알고리즘을 변경하려면 사용자 정의 서버를 구성하고 next.config.js 파일에서 compress 옵션을 false로 설정해야 합니다.

예를 들어 nginx를 사용 중이고 brotli로 전환하려면 nginx가 압축을 처리하도록 compress 옵션을 false로 설정하세요.

> 참고:
> Vercel에서 Next.js 애플리케이션을 사용하는 경우 압축은 Vercel의 Edge Network가 처리하며 Next.js가 아닙니다. 더 많은 정보는 Vercel 문서를 참조하세요.

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
