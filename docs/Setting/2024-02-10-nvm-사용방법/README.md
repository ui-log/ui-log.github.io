---
title: nvm 사용해서 node 버전 쉽게 바꾸는 방법
description:
date: 2024-02-10 17:09
sidebarDepth: 2
tag: Setting
thumbnail:
---

# nvm 사용해서 node 버전 쉽게 바꾸는 방법

::: tip 💡이 포스팅을 읽으면

:::

## Node 버전 관리에 NVM을 사용해야 하는 이유

### 다중 버전 관리

개발자가 여러 프로젝트를 동시에 진행할 때, 각 프로젝트마다 요구하는 Node.js의 버전이 다를 수 있습니다. NVM을 사용하면, 한 컴퓨터 내에서 여러 버전의 Node.js를 쉽게 설치하고 관리할 수 있어, 각 프로젝트에 적합한 환경을 설정할 수 있습니다.

### 호환성 문제 해결

새로운 Node.js 버전들은 새로운 기능을 도입하고 오래된 기능들을 폐기할 수 있습니다. 이로 인해 호환성 문제가 발생할 수 있는데, NVM을 통해 특정 버전으로 쉽게 전환함으로써, 이러한 호환성 문제를 해결할 수 있습니다.

### 개발 및 테스트 환경 일관성

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

프로젝트를 개발하고 테스트하는 환경이 프로덕션 환경과 일치하지 않을 때 문제가 발생할 수 있습니다. NVM을 사용하면, 모든 환경에서 동일한 Node.js 버전을 사용하여 이러한 문제를 최소화할 수 있습니다.

### 쉬운 버전 업그레이드 및 다운그레이드

NVM을 사용하면, 새로운 Node.js 버전을 테스트하거나 이전 버전으로 쉽게 다운그레이드할 수 있습니다. 이는 특히 새 버전에서 발생할 수 있는 문제를 사전에 감지하고 대응하는 데 유용합니다.

### 글로벌 패키지 관리

NVM을 사용하면, Node.js 버전을 전환할 때 글로벌로 설치된 패키지를 유지할 수 있습니다. 이는 개발 환경을 일관되게 유지하는 데 도움이 됩니다.

NVM은 이러한 문제들을 해결함으로써, 개발자가 보다 유연하고 효율적으로 작업할 수 있는 환경을 제공합니다.

## NVM 설치하기

NVM을 사용하면 여러 버전의 Node.js를 쉽게 관리할 수 있습니다. 다음은 macOS, Linux 및 Windows에서 NVM을 설치하는 방법에 대한 지침입니다.

### macOS 및 Linux에서 NVM 설치

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

macOS와 Linux 사용자는 curl 또는 wget을 사용하여 NVM 설치 스크립트를 실행할 수 있습니다. 터미널을 열고 다음 중 하나의 명령어를 입력하세요.

**Curl을 사용하는 경우:**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

**Wget을 사용하는 경우:**

```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

설치 후, 터미널을 닫았다 다시 열거나, source ~/.bash_profile, source ~/.bashrc, source ~/.zshrc, 또는 해당 쉘 구성 파일을 실행하여 변경사항을 적용하세요.

### NVM 설치 확인

NVM이 성공적으로 설치되었는지 확인하려면, 터미널 또는 명령 프롬프트를 열고 다음 명령어를 입력하세요.

```bash
nvm --version
```

정상적으로 설치되었다면, 설치된 NVM의 버전 번호가 표시됩니다.

## 실용적인 NVM 명령어

NVM(Node Version Manager)을 사용하면 다양한 버전의 Node.js를 쉽게 설치, 관리 및 전환할 수 있습니다. 아래는 NVM을 사용할 때 유용한 몇 가지 기본 명령어들입니다:

### 버전 설치

새로운 Node.js 버전을 설치하려면 다음 명령어를 사용하세요:

```shell
nvm install <버전>
```

예시: Node.js 버전 14.17.0을 설치하려면

```shell
nvm install 14.17.0
```

### 버전 제거

설치된 Node.js 버전을 제거하려면 다음 명령어를 사용하세요:

```shell
nvm uninstall <버전>
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

예시: Node.js 버전 14.17.0을 제거하려면

```
nvm uninstall 14.17.0
```

### 버전 나열

시스템에 설치된 모든 Node.js 버전을 나열하려면 다음 명령어를 사용하세요:

```shell
nvm ls
```

설치 가능한 모든 Node.js 버전을 보려면:

```shell
nvm ls-remote
```

### 특정 버전 사용

특정 Node.js 버전을 사용하려면 다음 명령어를 사용하세요:

```shell
nvm use <버전>
```

예시: Node.js 버전 14.17.0을 사용하려면

```shell
nvm use 14.17.0
```

## 특정 프로젝트에 대한 Node.js 버전 지정

프로젝트의 특정 버전 요구사항에 맞추어 Node.js 버전을 지정하려면 프로젝트 루트에 .nvmrc 파일을 생성하고 원하는 버전 번호를 기입하세요. 그 후, 프로젝트 디렉토리에서 nvm use 명령을 실행하여 해당 버전을 활성화할 수 있습니다.
