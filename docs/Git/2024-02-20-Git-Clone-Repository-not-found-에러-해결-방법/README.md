---
title: Git Clone Repository not found 에러 해결 방법
description:
date: 2024-02-20 17:57
sidebarDepth: 0
tag: Git
thumbnail:
---

# Git Clone Repository not found 에러 해결 방법

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

git clone 명령어를 통해서 클론을 할 때 에러가 발생하는 경우가 있다.

```bash
git clone https://github.com/*****
```

```bash
remote: Repository not found
fatal: repository ~~~~ not found
```

github 레포지토리 url도 맞게 입력했는데 이런 에러가 발생했을 때는 아래 처럼 **username**을 추가해주면 된다.

```bash
git clone https://{username}@github.com/*****

```

이렇게 하면 레포지토리 클론을 할 때 발생하는 repository not found 이슈를 해결할 수 있다.
