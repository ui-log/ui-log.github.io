---
title: Mac hosts 파일 설정 방법
description: Mac 환경에서 hosts 파일 설정하는 방법에 대해서 정리합니다.
date: 2022-12-19 15:33
sidebarDepth: 2
tag: Setting
thumbnail: https://user-images.githubusercontent.com/46010705/208364167-ee4ad94a-3182-4091-a3f4-b897677afe56.png
---

# Mac hosts 파일 설정 방법

::: tip 💡이 포스팅을 읽으면
Mac 환경에서 hosts 파일을 설정할 수 있습니다.
:::

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

## hosts 설정이 필요한 경우

회사에서 작업을 하다보면 특정 IP와 Url을 연결해야하는 경우가 있는데요.
예를 들면 123.456.789.10 으로 접근한다면 abc.io 로 리다이렉션 해주는 거죠.
보통 **개발환경이나 스테이지 단계 환경을 구축했을 때 로컬에서 접근하기 위한 방법**으로 사용됩니다.

## hosts 설정 방법

Mac 환경에서는 터미널에서 명령어로 hosts 파일에 접근해서 파일을 수정하는 방식으로 설정합니다.

### 1. hosts 파일 열기

터미널 창을 열어서 아래 명령어를 입력해줍니다.

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

```bash
sudo vi /private/etc/hosts
```

mac 비밀번호를 입력해줍니다.

```bash
Password:
```

비밀번호를 입력하면 아래와 같이 나오는데요.

```bash
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##

~
~
~
"/private/etc/hosts" 21L, 473B
```

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

i를 키를 누르면 입력 가능한 상태가 됩니다.
그 상태로 아래 코드처럼 원하는 **IP와 URL을 스페이스 혹은 탭을 기준으로 작성**해주면됩니다.

```bash
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##

## 여기에 추가
123.456.789.10 abc.io

~
~
~
"/private/etc/hosts" 21L, 473B
```

이렇게 하면 abc.io로 브라우저에서 접근하면 123.456.789.10 으로 접근할 수 있습니다.
