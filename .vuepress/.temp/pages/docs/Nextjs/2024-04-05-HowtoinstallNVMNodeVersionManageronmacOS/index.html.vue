<template><div><p><img src="@source/docs/Nextjs/2024-04-05-HowtoinstallNVMNodeVersionManageronmacOS/img/HowtoinstallNVMNodeVersionManageronmacOS_0.png" alt="How to install NVM (Node Version Manager) on macOS"></p>
<p>안녕하세요, 저는 프론트엔드 개발자인 Suki에요. 제 개인 프로젝트를 작업 중에, 프로젝트가 노드 버전 18을 요구하는 상황에 직면했는데, 제 컴퓨터는 기본 노드 버전 21을 사용하고 있었어요. 특정 노드 버전을 설정하기 위해 NVM을 사용한 해결책을 구현했고, 이 블로그에서 그 방법을 공유하고 싶어요.</p>
<p>macOS에 NVM(Node Version Manager)을 설치하려면 다음 단계를 따를 수 있어요:</p>
<ul>
<li>Homebrew 설치:</li>
</ul>
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
<p>만약 Homebrew를 설치하지 않은 경우에는 터미널을 열고 다음 명령어를 실행하여 설치할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>bin<span class="token operator">/</span>bash <span class="token operator">-</span>c <span class="token string">"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>Homebrew를 사용하여 NVM 설치하기:</li>
</ol>
<p>Homebrew를 통해 NVM을 설치하세요. Homebrew가 설치되면 터미널에서 다음 명령어를 실행하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>brew install nvm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>셸 프로필에서 NVM 소스화하기</li>
</ol>
<p>셸 프로필 파일(예: ~/.bashrc, ~/.zshrc 또는 ~/.bash_profile)에 다음 라인을 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token constant">NVM_DIR</span><span class="token operator">=</span><span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>nvm
<span class="token punctuation">[</span> <span class="token operator">-</span>s <span class="token string">"$NVM_DIR/nvm.sh"</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> \<span class="token punctuation">.</span> <span class="token string">"$NVM_DIR/nvm.sh"</span>  # 이 명령어는 nvm을 로드합니다
<span class="token punctuation">[</span> <span class="token operator">-</span>s <span class="token string">"$NVM_DIR/bash_completion"</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> \<span class="token punctuation">.</span> <span class="token string">"$NVM_DIR/bash_completion"</span>  # 이 명령어는 nvm bash_completion을 로드합니다
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그런 다음 터미널을 다시 시작하거나 변경 사항을 적용하려면 source ~/.your_shell_profile을 실행하세요.</p>
<ol start="4">
<li>설치 확인</li>
</ol>
<p>NVM이 설치되었는지 확인하려면 다음을 실행합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nvm <span class="token operator">--</span>version
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
<ol start="5">
<li>NVM을 사용하여 Node.js 설치하기</li>
</ol>
<p>이제 NVM을 사용하여 Node.js를 설치할 수 있습니다. 예를 들어, 최신 LTS 버전을 설치하려면 다음을 실행하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nvm install <span class="token operator">--</span>lts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>특정 Node 버전을 설치하려면 다음을 실행하십시오:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nvm install <span class="token number">18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>다음으로, 설치된 버전을 구현하려면 다음을 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nvm use <span class="token number">18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>셸 프로필을 변경한 후 변경 사항을 적용하려면 터미널을 다시 시작해야 합니다. 설치 후 NVM을 사용하여 Node.js 버전을 쉽게 전환할 수 있습니다.</p>
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
<p>이 문서가 도움이 되길 바라요! 읽어 주셔서 감사합니다. 코딩을 즐기세요. ❤️😊</p>
</div></template>
