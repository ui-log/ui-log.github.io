---
title: "Nextjs 14버전 next/image 사용 방법 정리"
description: ""
date: 2024-03-20 17:26
sidebarDepth: 0
tag: Tech
thumbnail:
---

# Nextjs 14버전 next/image 사용 방법 정리

이 API 참조를 통해 이미지 구성 요소에 사용 가능한 속성 및 구성 옵션을 이해하는 데 도움이 될 것입니다. 기능 및 사용법은 이미지 구성 요소 페이지를 참조해주세요.

```js
import Image from "next/image";

export default function Page() {
  return <Image src="/profile.png" width={500} height={500} alt="저자의 사진" />;
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

이미지 컴포넌트를 위한 사용 가능한 프롭에 대한 요약입니다:

| Prop                                    | Example                                  | Type            | Status     |
| --------------------------------------- | ---------------------------------------- | --------------- | ---------- |
| [src](#src)                             | `src="/profile.png"`                     | String          | Required   |
| [width](#width)                         | `width={500}`                            | Integer (px)    | Required   |
| [height](#height)                       | `height={500}`                           | Integer (px)    | Required   |
| [alt](#alt)                             | `alt="Picture of the author"`            | String          | Required   |
| [loader](#loader)                       | `loader={imageLoader}`                   | Function        | -          |
| [fill](#fill)                           | `fill={true}`                            | Boolean         | -          |
| [sizes](#sizes)                         | `sizes="(max-width: 768px) 100vw, 33vw"` | String          | -          |
| [quality](#quality)                     | `quality={80}`                           | Integer (1-100) | -          |
| [priority](#priority)                   | `priority={true}`                        | Boolean         | -          |
| [placeholder](#placeholder)             | `placeholder="blur"`                     | String          | -          |
| [style](#style)                         | `style={{objectFit: "contain"}}`         | Object          | -          |
| [onLoadingComplete](#onloadingcomplete) | `onLoadingComplete={img => done())}`     | Function        | Deprecated |
| [onLoad](#onload)                       | `onLoad={event => done())}`              | Function        | -          |
| [onError](#onerror)                     | `onError(event => fail())`               | Function        | -          |
| [loading](#loading)                     | `loading="lazy"`                         | String          | -          |
| [blurDataURL](#blurdataurl)             | `blurDataURL="data:image/jpeg..."`       | String          | -          |

## 필수 Props

이미지 컴포넌트에는 다음 속성이 필요합니다: src, width, height 및 alt.

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
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image src="/profile.png" width={500} height={500} alt="Picture of the author" />
    </div>
  );
}
```

### src

다음 중 하나여야 합니다:

- 정적으로 import된 이미지 파일
- 경로 문자열. 이는 로더 프롭에 따라 절대 외부 URL이 될 수도 있고 내부 경로가 될 수도 있습니다.

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

외부 URL을 사용할 때는 next.config.js의 remotePatterns에 해당 URL을 추가해야 합니다.

### 너비

너비 속성은 렌더링된 이미지의 픽셀 단위 폭을 나타내므로, 이미지가 얼마나 크게 나타날지에 영향을 줍니다.

정적으로 가져온 이미지 또는 fill 속성을 가진 이미지를 제외하고는 필수 사항입니다.

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

### 높이

높이 속성은 픽셀 단위로 렌더링된 높이를 나타내므로 이미지가 얼마나 크게 보이는지에 영향을 줍니다.

필수입니다. 정적으로 가져온 이미지나 fill 속성이 있는 이미지를 제외하고는요.

### 대체 텍스트

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

alt 속성은 스크린 리더와 검색 엔진을 위해 이미지를 설명하는 데 사용됩니다. 또한 이미지가 비활성화되었거나 이미지를로드하는 동안 오류가 발생한 경우 대체 텍스트로 사용됩니다.

이 페이지의 의미를 바꾸지 않고 이미지를 대체할 수 있는 텍스트를 포함해야 합니다. 이미지를 보충하는 목적이 아니며 이미지 위나 아래의 캡션에서 이미 제공된 정보를 반복해서 제공해서는 안 됩니다.

만약 이미지가 순전히 장식적이거나 사용자를 위해 의도되지 않은 경우, alt 속성은 빈 문자열이어야 합니다 (alt="").

더 알아보기

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

## 선택적인 속성

`Image` 컴포넌트는 필수 속성 외에도 다양한 추가 속성을 받습니다. 이 섹션에서는 Image 컴포넌트의 가장 일반적으로 사용되는 속성에 대해 설명합니다. 더 드물게 사용되는 속성에 대한 자세한 내용은 고급 속성 섹션에서 확인할 수 있습니다.

### 로더

이미지 URL을 해결하는 데 사용되는 사용자 정의 함수입니다.

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

로더는 다음 매개변수를 사용하여 이미지에 대한 URL 문자열을 반환하는 함수입니다:

- src
- width
- quality

사용자 정의 로더를 사용하는 예시는 다음과 같습니다:

```js
"use client";

import Image from "next/image";

const imageLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

export default function Page() {
  return <Image loader={imageLoader} src="me.png" alt="Picture of the author" width={500} height={500} />;
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

> 좋은 정보: 함수를 수락하는 loader와 같은 속성을 사용하는 경우, 제공된 함수를 직렬화하기 위해 클라이언트 컴포넌트를 사용해야합니다.

또는 prop을 전달하지 않고 애플리케이션에서 next/image의 각 인스턴스를 구성하려면 next.config.js에서 loaderFile 구성을 사용할 수 있습니다.

### fill

```js
fill={true} // {true} | {false}
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

부모 요소가 position: "relative", position: "fixed" 또는 position: "absolute" 스타일을 가져야 합니다.

이미지에 스타일이 적용되지 않으면 이미지는 컨테이너에 맞게 늘어납니다. 컨테이너에 맞게 편지 모양으로 작은 이미지를 보존하고 가로세로 비율을 유지하려면 object-fit: "contain"을 설정하는 것이 좋습니다.

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

대신, object-fit: "cover" 속성을 사용하면 이미지가 전체 컨테이너를 채우고 종횡비를 유지하기 위해 잘립니다. 올바르게 보이려면 부모 요소에 overflow: "hidden" 스타일을 지정해야 합니다.

자세한 정보는 다음을 참고하세요:

- position
- object-fit
- object-position

### sizes

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

미디어 쿼리와 비슷한 문자열을 사용하여, 다른 브레이크포인트에서 이미지의 너비 정보를 제공하는 속성입니다. fill을 사용하는 이미지나 반응형 크기를 가진 이미지의 성능에 큰 영향을 미칩니다.

sizes 속성은 이미지 성능과 관련된 두 가지 중요한 목적을 갖고 있습니다:

- 우선, 브라우저가 next/image에서 자동으로 생성된 srcset으로부터 다운로드할 이미지 크기를 결정하는 데 sizes 값을 사용합니다. 브라우저는 이미지의 크기를 아직 페이지에서 알지 못하기 때문에 뷰포트보다 같거나 큰 이미지를 선택합니다. sizes 속성을 사용하면 브라우저에게 이미지가 실제로 전체 화면보다 작을 것임을 알려줄 수 있습니다. fill 속성이 있는 이미지에 sizes 값을 지정하지 않으면 기본값으로 100vw(전체 화면 너비)가 사용됩니다.
- 두번째로, sizes 속성은 자동으로 생성된 srcset 값을 변경합니다. 만약 sizes 값을 지정하지 않으면 고정 크기 이미지(1x/2x 등)에 적합한 작은 srcset이 생성됩니다. sizes가 정의되어 있다면, 반응형 이미지(640w/750w 등)에 적합한 큰 srcset이 생성됩니다. sizes 속성에 50vw와 같이 뷰포트 너비의 백분율을 나타내는 크기가 포함되어 있다면, srcset은 이보다 작아서 결코 필요하지 않은 값은 포함되지 않습니다.

예를 들어, 스타일링이 모바일 기기에서는 전체 너비로, 태블릿에서는 2열 레이아웃으로, 데스크톱 디스플레이에서는 3열 레이아웃으로 이미지를 만들 것을 알고 있다면, 다음과 같은 sizes 속성을 포함해야 합니다:

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
import Image from "next/image";

export default function Page() {
  return (
    <div className="grid-element">
      <Image fill src="/example.png" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
    </div>
  );
}
```

이 예시 크기 설정은 성능 지표에 극적인 영향을 줄 수 있습니다. 33vw 크기가 없으면, 서버에서 선택된 이미지는 필요한 것보다 3배 넓어질 수 있습니다. 파일 크기는 너비의 제곱에 비례하기 때문에, 크기가 없으면 사용자는 필요한 것보다 9배 큰 이미지를 다운로드 받게 됩니다.

srcset 및 sizes에 대해 더 알아보려면:

- web.dev
- mdn

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

### 품질

```js
quality={75} // {number 1-100}
```

최적화된 이미지의 품질입니다. 1에서 100까지의 정수로, 100일수록 품질이 우수하며 파일 크기도 큽니다. 기본값은 75입니다.

### 우선순위

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
우선순위={false} // {false} | {true}
```

참이면, 이미지는 높은 우선순위로 간주되어 프리로드됩니다. 우선순위를 사용하는 이미지에 대해 레이지 로딩은 자동으로 비활성화됩니다.

가장 큰 내용 요소 페인트(LCP)로 감지된 이미지에 우선순위 속성을 사용해야 합니다. 서로 다른 뷰포트 크기에 따라 다른 이미지가 LCP 요소가 될 수 있기 때문에 여러 우선순위 이미지를 가질 수 있습니다.

이미지가 폴드 위에 보이는 경우에만 사용해야 합니다. 기본값은 false입니다.

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

### placeholder

```js
placeholder = "empty"; // "empty" | "blur" | "data:image/..."
```

이미지 로딩 중에 사용할 플레이스홀더입니다. 가능한 값은 blur, empty, 또는 data:image/.... 기본값은 empty입니다.

blur로 설정할 경우 blurDataURL 속성이 플레이스홀더로 사용됩니다. src가 정적 import에서 가져온 객체이고 가져온 이미지가 .jpg, .png, .webp 또는 .avif인 경우 이미지가 애니메이션이 아닌 것으로 감지되지 않는 한 blurDataURL이 자동으로 채워집니다.

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

동적 이미지의 경우 blurDataURL 속성을 제공해야 합니다. Plaiceholder와 같은 솔루션이 base64 생성에 도움을 줄 수 있습니다.

데이터:image/... 형식인 경우 Data URL이 이미지가 로드될 때 플레이스홀더로 사용됩니다.

비어 있는 경우 이미지가 로드될 때 플레이스홀더가 없으며, 빈 공간만 표시됩니다.

이 기능을 확인해보세요:

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

- 블러(Blur) 플레이스홀더(placeholder) 데모하기
- 데이터 URL 플레이스홀더(prop)로 쉼머(Shimmer) 효과 데모하기
- blurDataURL prop을 사용하여 색상 효과 데모하기

## 고급 속성

일부 경우에는 좀 더 고급 사용이 필요할 수 있습니다. `Image /` 컴포넌트는 선택적으로 다음 고급 속성을 허용합니다.

### 스타일(style)

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

CSS 스타일을 하위 이미지 요소로 전달할 수 있습니다.

```js
const imageStyle = {
  borderRadius: "50%",
  border: "1px solid #fff",
};

export default function ProfileImage() {
  return <Image src="..." style={imageStyle} />;
}
```

필수 너비 및 높이 속성이 스타일링과 상호 작용할 수 있음을 기억하세요. 이미지의 너비를 수정하려는 경우 높이도 자동으로 설정하여 본질적인 종횡 비율을 유지해야 합니다. 그렇지 않으면 이미지가 왜곡될 수 있습니다.

### 로딩 완료 시

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
'클라이언트 사용'

<Image onLoadingComplete={(img) => console.log(img.naturalWidth)} />
```

> 경고: Next.js 14부터는 `onLoad`을 권장합니다.

이미지가 완전히로드되고 플레이스홀더가 제거된 후 호출되는 콜백 함수입니다.

콜백 함수는 하나의 인수와 함께 호출됩니다. 그것은 내부 `img` 요소에 대한 참조입니다.

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

> 잘 알아 두세요: onLoadingComplete과 같은 함수를 받는 프롭을 사용하려면 클라이언트 컴포넌트를 사용하여 제공된 함수를 직렬화해야 합니다.

### onLoad

```js
<Image onLoad={(e) => console.log(e.target.naturalWidth)} />
```

이미지가 완전히로드되고 플레이스홀더가 제거된 후에 호출되는 콜백 함수입니다.

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

콜백 함수는 하나의 인수인 Event와 함께 호출됩니다. Event는 백그라운드의 'img' 요소를 참조하는 target을 가지고 있습니다.

> 참고: onLoad와 같은 함수를 받는 props를 사용하려면 제공된 함수를 직렬화하기 위해 Client Components를 사용해야 합니다.

### onError

```js
<Image onError={(e) => console.error(e.target.id)} />
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

이미지 로드에 실패한 경우 호출되는 콜백 함수입니다.

> 유의사항: 함수를 인수로 받는 onError와 같은 props를 사용하려면 제공된 함수를 직렬화하기 위해 Client Components를 사용해야 합니다.

### loading

> 권장사항: 이 속성은 고급 사용 사례를 위한 것으로, 이미지를 eager로 전환하면 일반적으로 성능이 저하됩니다. 대신 이미지를 선순위로 미리로드하도록 하는 priority 속성을 사용하는 것을 권장합니다.

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
loading = "lazy"; // {lazy} | {eager}
```

이미지의 로딩 방식입니다. 기본값은 lazy입니다.

lazy로 설정하면 이미지를 뷰포트와의 계산된 거리에 도달할 때까지 로딩을 지연합니다.

eager로 설정하면 즉시 이미지를 로드합니다.

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

확인 더 많이 알아보기 "loading" 어트리뷰트에 대하여.

### blurDataURL

src 이미지가 성공적으로 로드될 때까지 사용되는 플레이스홀더 이미지로 사용할 데이터 URL입니다. placeholder="blur"와 결합해야만 효과가 있습니다.

반드시 base64로 인코딩된 이미지여야 합니다. 그림이 확대되고 흐릿해지므로 매우 작은 이미지(10px 이하)를 권장합니다. 큰 이미지를 플레이스홀더로 사용하는 것은 애플리케이션 성능에 해를 끼칠 수 있습니다.

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

다음과 같이 해 보세요:

- 기본 blurDataURL 속성 데모
- blurDataURL 속성을 사용하여 색상 효과 데모

이미지와 일치하는 단색 Data URL을 생성할 수도 있습니다.

### 최적화되지 않음

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
unoptimized = {false} // {false} | {true}
```

만일 true이면, 소스 이미지는 품질, 크기 또는 형식을 변경하지 않고 그대로 제공됩니다. 기본값은 false입니다.

```js
import Image from "next/image";

const UnoptimizedImage = (props) => {
  return <Image {...props} unoptimized />;
};
```

Next.js 12.3.0부터 이 속성은 다음 구성을 사용하여 next.config.js를 업데이트함으로써 모든 이미지에 할당할 수 있습니다:```

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
  images: {
    unoptimized: true,
  },
};
```

### 기타 속성

`Image /` 컴포넌트의 기타 속성은 다음을 제외하고 하위 img 요소에 전달됩니다:

- srcSet. 대신 Device Sizes를 사용하세요.
- decoding. 항상 "async"입니다.

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

## 구성 옵션

props 외에도 next.config.js에서 Image 구성 요소를 구성할 수 있습니다. 다음 옵션을 사용할 수 있습니다:

### remotePatterns

악의적인 사용자로부터 애플리케이션을 보호하려면 외부 이미지 사용을 위한 구성이 필요합니다. 이를 통해 Next.js 이미지 최적화 API에서는 귀하의 계정에서만 제공된 외부 이미지만 제공됩니다. 외부 이미지는 다음과 같이 next.config.js 파일의 remotePatterns 속성을 사용하여 구성할 수 있습니다:

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
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};
```

> 이런 것을 알면 좋겠죠: 위의 예제는 next/image의 src 속성이 https://example.com/account123/로 시작해야 함을 보증합니다. 다른 프로토콜, 호스트명, 포트 또는 일치하지 않는 경로는 400 Bad Request로 응답합니다.

다음은 next.config.js 파일에서 remotePatterns 속성의 또 다른 예시입니다:

```js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.example.com",
        port: "",
      },
    ],
  },
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

> 유용한 정보: 위의 예제는 next/image의 src 속성이 https://img1.example.com 또는 https://me.avatar.example.com로 시작해야 함을 보장합니다. 다른 프로토콜, 포트 또는 일치하지 않는 호스트 이름은 400 Bad Request로 응답합니다.

와일드카드 패턴은 경로명 및 호스트 이름 모두에 사용할 수 있으며 다음과 같은 구문을 가지고 있습니다:

- - 하나의 경로 세그먼트 또는 서브도메인과 일치
- \*\* 끝의 경로 세그먼트 또는 처음의 서브도메인의 모든 수와 일치

\*\* 구문은 패턴의 중간에 작동하지 않습니다.

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

> 알아 두면 좋아요: 프로토콜, 포트 또는 경로를 생략할 경우, 와일드카드 \*\*가 함의됩니다. 의도하지 않은 URL을 최적화할 가능성이 있기 때문에 권장되지 않습니다.

### 도메인

> 경고: Next.js 14 이후에 사용이 중단되어 악의적 사용자로부터 애플리케이션을 보호하기 위해 엄격한 remotePatterns를 선호합니다. 도메인은 해당 도메인에서 제공되는 모든 콘텐츠를 소유하는 경우에만 사용하세요.

remotePatterns와 유사하게, 도메인 구성은 외부 이미지의 허용된 호스트 이름 목록을 제공하는 데 사용될 수 있습니다.

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

그러나 도메인 구성은 와일드카드 패턴 일치를 지원하지 않으며 프로토콜, 포트 또는 경로 이름을 제한할 수 없습니다.

다음은 `next.config.js` 파일의 domains 속성 예제입니다:

```js
module.exports = {
  images: {
    domains: ["assets.acme.com"],
  },
};
```

### loaderFile

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

만약 Next.js 내장 이미지 최적화 API를 사용하는 대신 클라우드 공급업체를 사용하여 이미지를 최적화하고 싶다면, 다음과 같이 next.config.js에서 loaderFile을 구성할 수 있습니다:

```js
module.exports = {
  images: {
    loader: "custom",
    loaderFile: "./my/image/loader.js",
  },
};
```

이것은 당신의 Next.js 애플리케이션 루트에 상대적인 파일을 가리켜야 합니다. 파일은 문자열을 반환하는 default 함수를 내보내야 합니다. 예를 들어:

```js
"use client";

export default function myImageLoader({ src, width, quality }) {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
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

대신, loader prop을 사용하여 각 next/image 인스턴스를 구성할 수도 있습니다.

예시:

- 사용자 정의 이미지 로더 구성

> 알아두면 좋은 점: 함수를 허용하는 사용자 정의 이미지 로더 파일을 사용하려면, 제공된 함수를 직렬화하기 위해 클라이언트 구성 요소를 사용해야 합니다.

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

## 고급

다음 구성은 고급 사용 사례를 위한 것으로 일반적으로 필요하지 않습니다. 아래 속성을 구성하려면 나중에 Next.js의 기본 설정에 대한 변경 사항이 재정의됩니다.

### deviceSizes

사용자의 예상 기기 너비를 알고 있다면, next.config.js 파일에서 deviceSizes 속성을 사용하여 기기 너비 브레이크포인트 목록을 지정할 수 있습니다. 다음/image 컴포넌트가 sizes 속성을 사용할 때 이러한 너비는 사용자의 기기에 맞는 올바른 이미지가 제공되도록 합니다.

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

만약 설정이 제공되지 않으면, 아래의 기본 설정이 사용됩니다.

```js
module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};
```

### imageSizes

다음 next.config.js 파일의 images.imageSizes 속성을 사용하여 이미지 폭 목록을 지정할 수 있습니다. 이러한 폭은 이미지 srcset을 생성하는 데 사용되는 크기 배열과 결합됩니다.

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

두 개의 별도 목록이 있는 이유는 imageSizes는 sizes 속성을 제공하는 이미지에만 사용되기 때문입니다. sizes 속성은 이미지가 화면의 전체 너비보다 작음을 나타내며, imageSizes의 크기는 deviceSizes의 가장 작은 크기보다 작아야 합니다.

구성이 제공되지 않으면 아래 기본값이 사용됩니다.

```js
module.exports = {
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
```

### 형식

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

기본 이미지 최적화 API는 요청의 Accept 헤더를 통해 브라우저가 지원하는 이미지 형식을 자동으로 감지합니다.

Accept 헤더가 설정된 형식 중 하나 이상과 일치하는 경우, 배열에서 첫 번째 일치 항목이 사용됩니다. 따라서 배열의 순서가 중요합니다. 일치하는 항목이 없는 경우(또는 소스 이미지가 애니메이션이면), 이미지 최적화 API는 원본 이미지의 형식으로 되돌아갑니다.

설정이 제공되지 않은 경우, 아래 기본값이 사용됩니다.

```js
module.exports = {
  images: {
    formats: ["image/webp"],
  },
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

다음 구성을 통해 AVIF 지원을 활성화할 수 있습니다.

```js
module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};
```

> 참고:
> AVIF는 일반적으로 WebP와 비교하여 20% 더 오래 인코딩되지만 20% 더 작게 압축됩니다. 이는 이미지가 요청될 때 일반적으로 더 느릴 것이고, 그 이후 캐시된 요청은 더 빨라질 것을 의미합니다.
> 만약 Next.js 앞에 프록시/CDN를 사용하여 자체 호스팅하는 경우, 프록시를 구성하여 Accept 헤더를 전달해야 합니다.

## 캐싱 동작

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

기본 로더의 캐싱 알고리즘은 다음과 같습니다. 다른 로더의 경우에는 클라우드 제공 업체의 문서를 참조해주세요.

이미지는 요청 시 동적으로 최적화되어 `distDir`/cache/images 디렉토리에 저장됩니다. 최적화된 이미지 파일은 만료 기간이 도달할 때까지 후속 요청에 대해 제공됩니다. 캐시된 만료된 파일과 일치하는 요청이 올 때 만료된 이미지가 즉시 제공되며, 이미지는 백그라운드에서 다시 최적화되어 새로운 만료 날짜로 캐시에 저장됩니다(재확인이라고도 함).

이미지의 캐시 상태는 x-nextjs-cache 응답 헤더의 값으로 확인할 수 있습니다. 가능한 값은 다음과 같습니다:

- MISS - 경로가 캐시에 없음 (최대 한 번 발생하며, 첫 방문 시에 발생)
- STALE - 경로가 캐시에 있지만 다시 확인 시간을 초과하여 백그라운드에서 업데이트됩니다
- HIT - 경로가 캐시에 있으며 다시 확인 시간을 초과하지 않음

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

만료(혹은 정확히는 최대 유효 기간)은 minimumCacheTTL 설정이나 상위 이미지의 Cache-Control 헤더 중 더 큰 값을 기준으로 정의됩니다. 구체적으로는 Cache-Control 헤더의 max-age 값이 사용됩니다. 만약 s-maxage와 max-age 둘 다 발견된다면 s-maxage가 우선합니다. max-age는 CDNs와 브라우저를 포함한 하류 클라이언트로 전달됩니다.

- 상위 이미지에 Cache-Control 헤더가 포함되지 않거나 값이 매우 낮을 때 캐시 기간을 늘리기 위해 minimumCacheTTL을 구성할 수 있습니다.
- deviceSizes와 imageSizes를 구성하여 생성 가능한 이미지 수를 줄일 수 있습니다.
- formats를 구성하여 여러 포맷을 사용하는 대신 단일 이미지 포맷을 선호하도록 설정할 수 있습니다.

### minimumCacheTTL

캐시된 최적화된 이미지의 TTL(유효 시간)을 초 단위로 구성할 수 있습니다. 많은 경우 파일 내용을 자동으로 해싱하고 immutable Cache-Control 헤더를 사용하여 이미지를 영구적으로 캐시하는 Static Image Import를 사용하는 것이 더 좋습니다.

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
모듈.exports = {
  이미지: {
    minimumCacheTTL: 60,
  },
};
```

최적화된 이미지의 만료(또는 최대 연령)는 minimumCacheTTL 또는 상위 이미지 Cache-Control 헤더 중 더 큰 값에 의해 정의됩니다.

이미지별로 캐싱 동작을 변경해야 하는 경우, 상위 이미지에 Cache-Control 헤더를 설정하기 위해 헤더를 구성할 수 있습니다(예: /some-asset.jpg, /\_next/image 그 자체가 아닌).

현재 캐시를 무효화하는 메커니즘은 없으므로 minimumCacheTTL을 낮게 유지하는 것이 좋습니다. 그렇지 않으면 src 속성을 수동으로 변경하거나 `distDir`/cache/images를 수동으로 삭제해야 할 수 있습니다.

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

### disableStaticImages

기본 동작은 `./icon.png`와 같은 정적 파일을 가져와서 그것을 src 속성에 전달할 수 있도록 합니다.

어떤 경우에는 import가 다르게 작동하기를 기대하는 다른 플러그인과 충돌한다면 이 기능을 비활성화하고 싶을 수 있습니다.

다음의 next.config.js 내에서 정적 이미지 import를 비활성화할 수 있습니다:

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
  images: {
    disableStaticImages: true,
  },
};
```

### dangerouslyAllowSVG

기본 로더는 몇 가지 이유로 SVG 이미지를 최적화하지 않습니다. 첫째, SVG는 벡터 형식이므로 손실 없이 크기를 조절할 수 있습니다. 둘째, SVG는 HTML/CSS와 많은 기능을 공유하여 올바른 콘텐츠 보안 정책 (CSP) 헤더가 없을 경우 취약점으로 이어질 수 있습니다.

따라서 src 프로퍼티가 SVG임을 알고 있는 경우 미최적화 prop을 사용하는 것이 좋습니다. src가 ".svg"로 끝나는 경우 이것은 자동으로 발생합니다.```

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

그러나, 기본 이미지 최적화 API를 사용하여 SVG 이미지를 제공해야 하는 경우, next.config.js 파일 내에서 dangerouslyAllowSVG를 설정할 수 있습니다:

```js
module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};
```

또한, 이미지를 다운로드하도록 브라우저를 강제하는 contentDispositionType를 설정하고, 이미지에 포함된 스크립트의 실행을 방지하기 위해 contentSecurityPolicy를 설정하는 것이 강력히 권장되어집니다.

## 애니메이션 이미지

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

기본 로더는 애니메이션 이미지에 대해 이미지 최적화를 자동으로 우회하고 이미지를 그대로 제공합니다.

애니메이션 파일의 자동 감지는 GIF, APNG 및 WebP를 지원하며 최선을 다하고 있습니다. 특정 애니메이션 이미지에 대해 이미지 최적화를 명시적으로 우회하려면 unoptimized prop을 사용하십시오.

## 반응형 이미지

기본 생성된 srcset에는 다른 디바이스 화소 비율을 지원하기 위해 1x 및 2x 이미지가 포함되어 있습니다. 그러나 뷰포트와 함께 늘어나는 반응형 이미지를 렌더링하려면 sizes와 스타일(또는 className)을 설정해야 할 수 있습니다.

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

다음 방법 중 하나를 사용하여 반응형 이미지를 렌더링할 수 있어요.

### 정적 가져오기를 사용한 반응형 이미지

소스 이미지가 동적이 아닌 경우 정적으로 가져와 반응형 이미지를 만들 수 있어요:

```js
import Image from "next/image";
import me from "../photos/me.jpg";

export default function Author() {
  return (
    <Image
      src={me}
      alt="Picture of the author"
      sizes="100vw"
      style={{
        width: "100%",
        height: "auto",
      }}
    />
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

해보세요:

- 이미지가 뷰포트에 반응하는 데모

### 종횡비를 유지하는 반응형 이미지

소스 이미지가 동적이거나 원격 URL인 경우, 반응형 이미지의 올바른 종횡비를 설정하기 위해 너비와 높이를 제공해야 합니다:

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
import Image from "next/image";

export default function Page({ photoUrl }) {
  return (
    <Image
      src={photoUrl}
      alt="Picture of the author"
      sizes="100vw"
      style={{
        width: "100%",
        height: "auto",
      }}
      width={500}
      height={300}
    />
  );
}
```

해보세요:

- 뷰포트에 반응하는 이미지 데모

### 채움이 적용된 반응형 이미지

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

만약 비율을 모른다면, fill 속성을 설정하고 부모 요소에 position: relative를 설정해야 합니다. 원하는 스트레치 또는 크롭 동작에 따라 object-fit 스타일을 선택적으로 설정할 수 있습니다:

```js
import Image from 'next/image'

export default function Page({ photoUrl }) {
  return (
    <div style={ position: 'relative', width: '500px', height: '300px' }>
      <Image
        src={photoUrl}
        alt="Picture of the author"
        sizes="500px"
        fill
        style={
          objectFit: 'contain',
        }
      />
    </div>
  )
}
```

해보세요:

- fill 속성 데모하기

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

## 테마 감지 CSS

만약 당신이 밝은 모드와 어두운 모드를 위해 서로 다른 이미지를 보여주고 싶다면, CSS 미디어 쿼리를 기반으로 올바른 이미지를 드러내는 새로운 컴포넌트를 만들 수 있습니다.

```js
.imgDark {
  display: none;
}

@media (prefers-color-scheme: dark) {
  .imgLight {
    display: none;
  }
  .imgDark {
    display: unset;
  }
}
```

```typescript
import styles from "./theme-image.module.css";
import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "src" | "priority" | "loading"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className={styles.imgLight} />
      <Image {...rest} src={srcDark} className={styles.imgDark} />
    </>
  );
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

> 좋은 정보: loading="lazy"의 기본 동작은 올바른 이미지만 로드되도록 보장합니다. 우선순위나 loading="eager"을 사용할 수 없습니다. 왜냐하면 두 이미지가 모두 로드되기 때문입니다. 대신 fetchPriority="high"을 사용할 수 있습니다.

해보세요:

- 데모 라이트/다크 모드 테마 감지

## getImageProps

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

더 복잡한 사용 사례의 경우, getImageProps()를 호출하여 기본 'img' 요소에 전달될 속성을 가져올 수 있으며, 대신 다른 컴포넌트, 스타일, 캔버스 등으로 전달할 수 있습니다.

또한 React useState()를 호출하지 않기 때문에 성능이 향상될 수 있지만, placeholder 속성과 함께 사용할 수 없습니다. 왜냐하면 placeholder가 제거되지 않기 때문입니다.

### 테마 감지 이미지

라이트 및 다크 모드에 대해 다른 이미지를 표시하려면 사용자 선호 색상 체계에 기반한 다른 이미지를 표시하려면 'picture' 요소를 사용할 수 있습니다.

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
import { getImageProps } from "next/image";

export default function Page() {
  const common = { alt: "테마 예제", width: 800, height: 400 };
  const {
    props: { srcSet: dark },
  } = getImageProps({ ...common, src: "/dark.png" });
  const {
    props: { srcSet: light, ...rest },
  } = getImageProps({ ...common, src: "/light.png" });

  return (
    <picture>
      <source media="(prefers-color-scheme: dark)" srcSet={dark} />
      <source media="(prefers-color-scheme: light)" srcSet={light} />
      <img {...rest} />
    </picture>
  );
}
```

### 아트 디렉션

모바일과 데스크탑에 각각 다른 이미지를 표시하려면, 때로는 아트 디렉션이라고도 불리는 것이 있습니다. getImageProps()에 서로 다른 src, width, height, 그리고 quality 속성을 제공할 수 있습니다.

```js
import { getImageProps } from "next/image";

export default function Home() {
  const common = { alt: "아트 디렉션 예제", sizes: "100vw" };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 1440,
    height: 875,
    quality: 80,
    src: "/desktop.jpg",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 750,
    height: 1334,
    quality: 70,
    src: "/mobile.jpg",
  });

  return (
    <picture>
      <source media="(min-width: 1000px)" srcSet={desktop} />
      <source media="(min-width: 500px)" srcSet={mobile} />
      <img {...rest} style={{ width: "100%", height: "auto" }} />
    </picture>
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

### 배경 CSS

srcSet 문자열을 이미지 최적화를 위해 image-set() CSS 함수로 변환할 수도 있어요.

```js
import { getImageProps } from "next/image";

function getBackgroundImage(srcSet = "") {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
}

export default function Home() {
  const {
    props: { srcSet },
  } = getImageProps({ alt: "", width: 128, height: 128, src: "/img.png" });
  const backgroundImage = getBackgroundImage(srcSet);
  const style = { height: "100vh", width: "100vw", backgroundImage };

  return (
    <main style={style}>
      <h1>Hello World</h1>
    </main>
  );
}
```

## 알려진 브라우저 버그

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

다음/이미지 컴포넌트는 브라우저 기본 지연 로딩을 사용합니다. 이는 Safari 15.4 이전의 구버전 브라우저에서 즉시 로딩으로 대체될 수 있습니다. 블러 업 플레이스홀더를 사용할 때, Safari 12 이전의 구버전 브라우저는 빈 플레이스홀더로 대체됩니다. 너비/높이가 자동으로 설정된 스타일을 사용할 때, 종횡비를 유지하지 않는 Safari 15 이전의 구버전 브라우저에서 레이아웃 변화가 발생할 수 있습니다. 자세한 내용은 이 MDN 비디오를 참조하세요.

- Safari 15 - 16.3은 로딩 중에 회색 테두리를 표시합니다. Safari 16.4에서 이 문제가 해결되었습니다. 가능한 해결책:
  - CSS @supports (font: -apple-system-body) and (-webkit-appearance: none) { img[loading="lazy"] { clip-path: inset(0.6px) } }를 사용합니다.
  - 이미지가 위에 있으면 우선순위를 사용합니다.
  - Firefox 67+는 로딩 중에 하얀 배경을 표시합니다. 가능한 해결책:
  - AVIF 형식 활성화
  - 플레이스홀더를 사용합니다.

## 버전 역사

| Version    | Changes                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `v14.1.0`  | `getImageProps()`이 안정화되었습니다.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `v14.0.0`  | `onLoadingComplete` 프로퍼티 및 `domains` 구성이 폐기되었습니다.                                                                                                                                                                                                                                                                                                                                                                                             |
| `v13.4.14` | `placeholder` 프로퍼티가 `data:/image...`를 지원합니다.                                                                                                                                                                                                                                                                                                                                                                                                      |
| `v13.2.0`  | `contentDispositionType` 구성이 추가되었습니다.                                                                                                                                                                                                                                                                                                                                                                                                              |
| `v13.0.6`  | `ref` 프로퍼티가 추가되었습니다.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `v13.0.0`  | `next/image` 가져오기가 `next/legacy/image`로 이름이 변경되었습니다. `next/future/image` 가져오기가 `next/image`로 이름이 변경되었습니다. `codemod`를 사용하여 가져오기를 안전하고 자동으로 변경할 수 있습니다. `span` 래퍼가 제거되었습니다. `layout`, `objectFit`, `objectPosition`, `lazyBoundary`, `lazyRoot` 프로퍼티가 제거되었습니다. `alt`이 필요합니다. `onLoadingComplete`은 `img` 요소에 대한 참조를 수신합니다. 내장 로더 구성이 제거되었습니다. |
| `v12.3.0`  | `remotePatterns` 및 `unoptimized` 구성이 안정화되었습니다.                                                                                                                                                                                                                                                                                                                                                                                                   |
| `v12.2.0`  | 실험적인 `remotePatterns` 및 실험적인 `unoptimized` 구성이 추가되었습니다. `layout="raw"`가 제거되었습니다.                                                                                                                                                                                                                                                                                                                                                  |
| `v12.1.1`  | `style` 프로퍼티가 추가되었습니다. `layout="raw"`에 대한 실험적인 지원이 추가되었습니다.                                                                                                                                                                                                                                                                                                                                                                     |
| `v12.1.0`  | `dangerouslyAllowSVG` 및 `contentSecurityPolicy` 구성이 추가되었습니다.                                                                                                                                                                                                                                                                                                                                                                                      |
| `v12.0.9`  | `lazyRoot` 프로퍼티가 추가되었습니다.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `v12.0.0`  | `formats` 구성이 추가되었습니다. AVIF 지원이 추가되었습니다. 래퍼 `div`가 `span`으로 변경되었습니다.                                                                                                                                                                                                                                                                                                                                                         |
| `v11.1.0`  | `onLoadingComplete` 및 `lazyBoundary` 프로퍼티가 추가되었습니다.                                                                                                                                                                                                                                                                                                                                                                                             |
| `v11.0.0`  | 정적 가져오기를 위한 `src` 프로퍼티 지원. `placeholder` 프로퍼티 추가. `blurDataURL` 프로퍼티 추가.                                                                                                                                                                                                                                                                                                                                                          |
| `v10.0.5`  | `loader` 프로퍼티가 추가되었습니다.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `v10.0.1`  | `layout` 프로퍼티가 추가되었습니다.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `v10.0.0`  | `next/image`가 도입되었습니다.                                                                                                                                                                                                                                                                                                                                                                                                                               |

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
