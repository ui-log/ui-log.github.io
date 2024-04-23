<template><div><h2 id="nvm을-사용하여-여러-버전의-node-js를-설치하고-관리하세요" tabindex="-1"><a class="header-anchor" href="#nvm을-사용하여-여러-버전의-node-js를-설치하고-관리하세요" aria-hidden="true">#</a> nvm을 사용하여 여러 버전의 Node.js를 설치하고 관리하세요.</h2>
<p>가끔 GitHub를 탐험하다가 몇 가지 Node.js 프로젝트를 클론하면, 현재 설치된 Node.js와 호환되지 않는 경우가 있습니다. 이때 그 버전의 다른 Node.js를 설치해야 합니다. NVM을 사용하면 로컬 머신에서 여러 버전의 Node.js를 쉽게 설치하고 관리할 수 있습니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtoinstallNodejsbyNVM/img/HowtoinstallNodejsbyNVM_0.png" alt="이미지"></p>
<h1 id="ubuntu-및-mac-os에-nvm-설치하기" tabindex="-1"><a class="header-anchor" href="#ubuntu-및-mac-os에-nvm-설치하기" aria-hidden="true">#</a> Ubuntu 및 Mac OS에 nvm 설치하기</h1>
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
<p>기계에 nvm을 설치하거나 업데이트하는 방법은 여러 가지가 있지만, 저는 인스톨러 스크립트를 사용해서 nvm을 설치하는 것을 선호해요. 이 글을 작성할 당시 nvm 인스톨러의 최신 버전은 0.38.0이었어요. 그래서 터미널에서 아래의 명령어로 curl을 사용하여 다운로드한 다음 bash로 실행할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>curl <span class="token operator">-</span>o<span class="token operator">-</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>raw<span class="token punctuation">.</span>githubusercontent<span class="token punctuation">.</span>com<span class="token operator">/</span>nvm<span class="token operator">-</span>sh<span class="token operator">/</span>nvm<span class="token operator">/</span>v0<span class="token punctuation">.</span><span class="token number">38.0</span><span class="token operator">/</span>install<span class="token punctuation">.</span>sh <span class="token operator">|</span> bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>또는 wget을 사용하는 경우:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>wget <span class="token operator">-</span>qO<span class="token operator">-</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>raw<span class="token punctuation">.</span>githubusercontent<span class="token punctuation">.</span>com<span class="token operator">/</span>nvm<span class="token operator">-</span>sh<span class="token operator">/</span>nvm<span class="token operator">/</span>v0<span class="token punctuation">.</span><span class="token number">38.0</span><span class="token operator">/</span>install<span class="token punctuation">.</span>sh <span class="token operator">|</span> bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>앞으로 설치 프로그램은 nvm 저장소를 ~/.nvm/ 디렉토리에 복제하고, nvm을 로드하려면 ~/.bashrc 파일 끝에 아래 줄을 추가해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token constant">NVM_DIR</span><span class="token operator">=</span><span class="token string">"$HOME/.nvm"</span>
# 이 명령어가 nvm을 로드합니다
<span class="token punctuation">[</span> <span class="token operator">-</span>s <span class="token string">"$NVM_DIR/nvm.sh"</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> \<span class="token punctuation">.</span> <span class="token string">"$NVM_DIR/nvm.sh"</span>
# 이 명령어가 nvm bash_completion을 로드합니다
<span class="token punctuation">[</span> <span class="token operator">-</span>s <span class="token string">"$NVM_DIR/bash_completion"</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> \<span class="token punctuation">.</span> <span class="token string">"$NVM_DIR/bash_completion"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 nvm을 로드하려면 터미널을 닫고 다시 열어야 합니다. 그 후 설치가 제대로 되었는지 확인해보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nvm <span class="token operator">--</span>version
# <span class="token number">0.38</span><span class="token number">.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이제 nvm을 사용할 준비가 되었습니다.</p>
<h1 id="nvm으로-node-js-버전-관리하기" tabindex="-1"><a class="header-anchor" href="#nvm으로-node-js-버전-관리하기" aria-hidden="true">#</a> nvm으로 Node.js 버전 관리하기</h1>
<p>nvm에는 설치, 사용, 제거 등 많은 하위 명령이 있습니다. 우리는 몇 가지 필수 하위 명령을 선택하고 설명하고자 합니다.</p>
<h2 id="node-js-버전-설치" tabindex="-1"><a class="header-anchor" href="#node-js-버전-설치" aria-hidden="true">#</a> Node.js 버전 설치</h2>
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
<p>먼저, 사용 가능한 버전 목록을 list-remote 또는 ls-remote 하위 명령을 사용하여 확인할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nvm list<span class="token operator">-</span>remote # 또는 nvm ls<span class="token operator">-</span>remote
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>원하는 버전을 nvm install 하위 명령으로 설치할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nvm install <span class="token operator">&lt;</span>version<span class="token operator">></span> # 예시<span class="token operator">:</span> <span class="token number">14.17</span><span class="token number">.6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>LTS 버전을 설치하려면 버전 번호 대신 --lts를 사용할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nvm install <span class="token operator">--</span>lts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>또는 최신 버전을 설치하려면 버전 번호 대신 node를 사용할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nvm install node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="특정-버전의-node-js-로드하기" tabindex="-1"><a class="header-anchor" href="#특정-버전의-node-js-로드하기" aria-hidden="true">#</a> 특정 버전의 Node.js 로드하기</h2>
<p>이제 기계에 몇 가지 버전의 Node.js를 설치했어요; 따라서 설치된 버전의 목록을 list 또는 ls 하위 명령어로 볼 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nvm list # 또는 nvm ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>특정 버전을 로드하려면 use 하위 명령어를 사용하세요. 이 하위 명령어를 사용하면 버전 번호나 --lts 플래그로 Node.js를 로드할 수 있어요.</p>
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
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nvm 사용 <span class="token operator">&lt;</span>버전<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>또는 LTS 버전을 사용하려면</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nvm 사용 --lts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>또는 최신 버전을 사용하려면</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nvm use node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="node-js-버전을-제거하는-방법" tabindex="-1"><a class="header-anchor" href="#node-js-버전을-제거하는-방법" aria-hidden="true">#</a> Node.js 버전을 제거하는 방법</h2>
<p>마지막으로, Node.js 버전을 제거하고 싶다면 해당 버전을 제거하는 uninstall 서브커맨드를 사용할 수 있습니다.</p>
<p>먼저, use를 사용하여 다른 버전으로 전환한 다음에 제거할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nvm uninstall <span class="token operator">&lt;</span>version<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="nvmrc-파일은-무엇인가요" tabindex="-1"><a class="header-anchor" href="#nvmrc-파일은-무엇인가요" aria-hidden="true">#</a> .nvmrc 파일은 무엇인가요?</h1>
<p>Node.js 프로젝트에서 해당 버전과 호환되는 Node.js 버전을 파일에 저장할 수 있습니다. 이를 .nvmrc라고 부르며 프로젝트의 루트 디렉토리에 생성해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>node <span class="token operator">--</span>version <span class="token operator">></span> <span class="token operator">/</span>path<span class="token operator">/</span>to<span class="token operator">/</span>project<span class="token operator">/</span><span class="token punctuation">.</span>nvmrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그러면 팀원들의 다른 기기에서도 호환되는 버전을 사용할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nvm use
# <span class="token string">'/path/to/project/.nvmrc'</span>에서 <span class="token string">'&lt;v14.17.6> 버전을 발견했습니다.'</span>
# node v14<span class="token punctuation">.</span><span class="token number">17.6</span> <span class="token punctuation">(</span>npm v6<span class="token punctuation">.</span><span class="token number">14.15</span><span class="token punctuation">)</span><span class="token function">을</span><span class="token punctuation">(</span>를<span class="token punctuation">)</span> 현재 사용 중입니다<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="node-js에-패키지-설치하기" tabindex="-1"><a class="header-anchor" href="#node-js에-패키지-설치하기" aria-hidden="true">#</a> Node.js에 패키지 설치하기</h1>
<p>NVM으로 설치된 Node.js에 패키지를 설치하는 방법은 일반적인 node.js 설치와 동일하지만, 패키지 설치는 버전 번호를 기반으로 합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nvm use <span class="token number">14.17</span><span class="token number">.5</span>
npm install <span class="token operator">--</span>global yarn
which yarn
# <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>nvm<span class="token operator">/</span>versions<span class="token operator">/</span>node<span class="token operator">/</span>v14<span class="token punctuation">.</span><span class="token number">17.5</span><span class="token operator">/</span>bin<span class="token operator">/</span>yarn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>NVM을 사용하면 한 대의 컴퓨터에서 여러 가지 node.js 버전을 함께 사용할 수 있으며 해당 버전을 프로젝트에 사용하거나 개발 버전의 기능을 테스트할 때 시스템 또는 프로젝트에 부작용을 일으키지 않도록 할 수 있습니다.</p>
<p>따라서 Node.js를 설치하고 쉽게 관리하기 위해 NVM을 사용하는 것을 권장합니다.```</p>
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
<h1 id="자료" tabindex="-1"><a class="header-anchor" href="#자료" aria-hidden="true">#</a> 자료:</h1>
</div></template>
