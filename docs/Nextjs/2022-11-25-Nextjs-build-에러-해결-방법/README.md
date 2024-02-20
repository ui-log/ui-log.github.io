---
title: Nextjs build 에러 해결 방법 (Only set one of children or props.dangerouslySetInnerHTML react/no-danger-with-children)
description: Only set one of children or props.dangerouslySetInnerHTML react/no-danger-with-children 에러 해결 방법에 대해서 정리합니다.
date: 2022-11-25 16:00
sidebarDepth: 2
tag: Nextjs
thumbnail: https://user-images.githubusercontent.com/46010705/203999759-375a62ba-4b30-4504-9239-972453015742.png
---

# Nextjs build 에러 해결 방법 (Only set one of children or props.dangerouslySetInnerHTML react/no-danger-with-children)

::: tip 목표

:::

```bash
yarn  build
```

위 명령어로 빌드를 했을 때 아래와 같이 빌드 에러가 발생하는 경우가 있는데요.

![](./img/1.png)

<component is="script" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686" crossorigin="anonymous" async></component>

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

Only set one of children or props.dangerouslySetInnerHTML react/no-danger-with-children 이 에러는 dangerouslySetInnerHTML을 사용하는 요소는 한개의 children만 가져야된다는 에러입니다.

저는 아래와 같이 작성했었는데 이렇게 작성할 경우 `{}` 를 다른 자식으로 인식하기 때문에 발생했던 에러였습니다.

```tsx
<span dangerouslySetInnerHTML={{ __html: titleText }}>{}</span>
```

## 해결방법

<component is="script" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686" crossorigin="anonymous" async></component>

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

아래와 같이 `{}`를 제거하고 다시 빌드를 하게 되면 에러가 해결됩니다.
`{}`외에도 ` `같은 공백으로도 빌들에러가 발생하게 되니 참고하시기 바랍니다.

```tsx
<span dangerouslySetInnerHTML={{ __html: titleText }}></span>
```
