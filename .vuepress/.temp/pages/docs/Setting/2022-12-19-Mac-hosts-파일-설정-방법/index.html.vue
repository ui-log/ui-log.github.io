<template><div><h1 id="mac-hosts-파일-설정-방법" tabindex="-1"><a class="header-anchor" href="#mac-hosts-파일-설정-방법" aria-hidden="true">#</a> Mac hosts 파일 설정 방법</h1>
<div class="custom-container tip"><p class="custom-container-title">💡이 포스팅을 읽으면</p>
<p>Mac 환경에서 hosts 파일을 설정할 수 있습니다.</p>
</div>
<component is="script" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686" crossorigin="anonymous" async></component>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="hosts-설정이-필요한-경우" tabindex="-1"><a class="header-anchor" href="#hosts-설정이-필요한-경우" aria-hidden="true">#</a> hosts 설정이 필요한 경우</h2>
<p>회사에서 작업을 하다보면 특정 IP와 Url을 연결해야하는 경우가 있는데요.
예를 들면 123.456.789.10 으로 접근한다면 abc.io 로 리다이렉션 해주는 거죠.
보통 <strong>개발환경이나 스테이지 단계 환경을 구축했을 때 로컬에서 접근하기 위한 방법</strong>으로 사용됩니다.</p>
<h2 id="hosts-설정-방법" tabindex="-1"><a class="header-anchor" href="#hosts-설정-방법" aria-hidden="true">#</a> hosts 설정 방법</h2>
<p>Mac 환경에서는 터미널에서 명령어로 hosts 파일에 접근해서 파일을 수정하는 방식으로 설정합니다.</p>
<h3 id="_1-hosts-파일-열기" tabindex="-1"><a class="header-anchor" href="#_1-hosts-파일-열기" aria-hidden="true">#</a> 1. hosts 파일 열기</h3>
<p>터미널 창을 열어서 아래 명령어를 입력해줍니다.</p>
<component is="script" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686" crossorigin="anonymous" async></component>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vi</span> /private/etc/hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>mac 비밀번호를 입력해줍니다.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Password:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>비밀번호를 입력하면 아래와 같이 나오는데요.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">##</span>
<span class="token comment"># Host Database</span>
<span class="token comment">#</span>
<span class="token comment"># localhost is used to configure the loopback interface</span>
<span class="token comment"># when the system is booting.  Do not change this entry.</span>
<span class="token comment">##</span>

~
~
~
<span class="token string">"/private/etc/hosts"</span> 21L, 473B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><component is="script" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686" crossorigin="anonymous" async></component>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>i를 키를 누르면 입력 가능한 상태가 됩니다.
그 상태로 아래 코드처럼 원하는 <strong>IP와 URL을 스페이스 혹은 탭을 기준으로 작성</strong>해주면됩니다.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">##</span>
<span class="token comment"># Host Database</span>
<span class="token comment">#</span>
<span class="token comment"># localhost is used to configure the loopback interface</span>
<span class="token comment"># when the system is booting.  Do not change this entry.</span>
<span class="token comment">##</span>

<span class="token comment">## 여기에 추가</span>
<span class="token number">123.456</span>.789.10 abc.io

~
~
~
<span class="token string">"/private/etc/hosts"</span> 21L, 473B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게 하면 abc.io로 브라우저에서 접근하면 123.456.789.10 으로 접근할 수 있습니다.</p>
</div></template>
