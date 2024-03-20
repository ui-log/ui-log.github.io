---
title: "Nextjs 14 환경변수 추가 방법"
description: ""
date: 2024-03-20 17:57
sidebarDepth: 0
tag: Tech
thumbnail:
---

# Nextjs 14 환경변수 추가 방법

> Next.js 9.4버전부터
> 환경 변수를 추가하는 더 직관적이고 편리한 경험이 가능합니다. 한 번 시도해보세요!

> 알아두면 좋은 사실: 이 방법으로 지정된 환경 변수는 항상 JavaScript 번들에 포함됩니다. NEXT*PUBLIC* 접두사를 환경 변수 이름과 함께 지정하는 것은 .env 파일을 통해 지정할 때만 효과가 있습니다.

JavaScript 번들에 환경 변수를 추가하려면 next.config.js를 열고 env 구성을 추가하세요:

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
  env: {
    customKey: "my-value",
  },
};
```

이제 코드에서 `process.env.customKey`에 접근할 수 있습니다. 예를 들어:

```js
function Page() {
  return <h1>customKey의 값은: {process.env.customKey}</h1>;
}

export default Page;
```

Next.js는 빌드 시 `process.env.customKey`를 `my-value`로 대체합니다. webpack DefinePlugin의 특성으로 인해 process.env 변수를 구조분해하려고 하면 작동하지 않습니다.

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

예를 들어, 다음 라인:

```js
return <h1>customKey의 값은: {process.env.customKey}</h1>;
```

다음과 같이 바뀝니다:

```js
return <h1>customKey의 값은: {"my-value"}</h1>;
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
