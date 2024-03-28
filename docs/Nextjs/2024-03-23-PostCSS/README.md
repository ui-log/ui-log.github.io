---
title: "Nextjs 13 에서 Post CSS 설정하는 방법"
description: ""
date: 2024-03-23 14:54
sidebarDepth: 0
tag: Tech
thumbnail:
originalTitle: Mardkdown으로 table 태그를 변경합니다.
link: undefined
---

# PostCSS

## 기본 동작

Next.js는 내장 CSS 지원을 위해 PostCSS를 사용하여 CSS를 컴파일합니다.

구성 없이 사용하면 Next.js가 다음 변환을 적용하여 CSS를 컴파일합니다:

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

- Autoprefixer는 CSS 규칙에 벤더 접두사를 자동으로 추가해줘서 IE11에서 작동합니다.
- 크로스 브라우저 Flexbox 버그가 규격대로 동작하도록 수정됩니다.
- 새로운 CSS 기능은 Internet Explorer 11 호환성을 위해 자동으로 컴파일됩니다:
  - 모든 속성
  - Break 속성
  - font-variant 속성
  - 갭 속성
  - 미디어 쿼리 범위
- 기본적으로 CSS 그리드와 사용자 정의 속성(CSS 변수)은 IE11 지원을 위해 컴파일되지 않습니다.

CSS 그리드 레이아웃을 IE11을 위해 컴파일하려면 CSS 파일 상단에 다음 주석을 추가하면 됩니다:

```js
/* autoprefixer grid: autoplace */
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

CSS 그리드 레이아웃의 IE11 지원을 전체 프로젝트에서 사용하려면 아래 구성을 사용하여 autoprefixer를 구성할 수도 있습니다. 자세한 내용은 아래의 "플러그인 사용자 정의"를 참조하세요.

CSS 변수는 안전하게 컴파일하기 어렵기 때문에 컴파일되지 않습니다. 변수를 사용해야 하는 경우 Sass 변수와 같은 것을 사용해보세요. 이러한 변수는 Sass에 의해 제거됩니다.

## 대상 브라우저 사용자 정의

Next.js를 통해 Autoprefixer 및 컴파일된 CSS 기능의 대상 브라우저(Browserslist를 통해)를 구성할 수 있습니다.

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

브라우저 목록을 사용자 정의하려면 package.json 파일에 다음과 같이 browserslist 키를 만들어 주세요:

```js
{
  "browserslist": [">0.3%", "not dead", "not op_mini all"]
}
```

browsersl.ist 도구를 사용하여 대상 브라우저를 시각화할 수 있어요.

## CSS 모듈

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

CSS 모듈을 지원하기 위해 구성을 변경할 필요가 없습니다. 파일에 CSS 모듈을 활성화하려면 파일의 확장자를 .module.css로 바꿉니다.

더 많은 정보를 알아보려면 Next.js의 CSS 모듈 지원 페이지를 참조하세요.

## 플러그인 사용자 정의

> 경고: 사용자 정의 PostCSS 구성 파일을 정의하면 Next.js에서 기본 동작을 완전히 비활성화합니다. 자동 접두어와 같은 필요한 기능을 수동으로 구성해야 합니다.
> 사용자 지정 구성에 포함된 플러그인은 수동으로 설치해야 합니다. 예: npm install postcss-flexbugs-fixes postcss-preset-env.

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

PostCSS 설정을 사용자 정의하려면 프로젝트의 루트에 postcss.config.json 파일을 생성하세요.

다음은 Next.js에서 사용하는 기본 구성입니다:

```js
{
  "plugins": [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        "autoprefixer": {
          "flexbox": "no-2009"
        },
        "stage": 3,
        "features": {
          "custom-properties": false
        }
      }
    ]
  ]
}
```

> 알아 두면 좋은 사항: Next.js는 파일의 이름을 .postcssrc.json으로 지정하거나 package.json의 postcss 키에서 읽을 수도 있습니다.

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

PostCSS를 postcss.config.js 파일로 구성하는 것도 가능합니다. 이 방법은 환경에 따라 플러그인을 조건부로 포함하고 싶을 때 유용합니다:

```js
module.exports = {
  plugins:
    process.env.NODE_ENV === "production"
      ? [
          "postcss-flexbugs-fixes",
          [
            "postcss-preset-env",
            {
              autoprefixer: {
                flexbox: "no-2009",
              },
              stage: 3,
              features: {
                "custom-properties": false,
              },
            },
          ],
        ]
      : [
          // 개발 환경에서는 변환이 없음
        ],
};
```

> 참고: Next.js에서 .postcssrc.js 파일명을 사용할 수도 있습니다.

PostCSS 플러그인을 가져오기 위해 require()을 사용하지 말아야 합니다. 플러그인은 문자열로 제공되어야 합니다.

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

> 알아 두면 좋은 정보: 만약 postcss.config.js가 동일한 프로젝트에서 Next.js 이외의 다른 도구를 지원해야 한다면, 상호 운용 가능한 객체 기반 형식을 사용해야 합니다:

```javascript
module.exports = {
  plugins: {
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
    },
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
