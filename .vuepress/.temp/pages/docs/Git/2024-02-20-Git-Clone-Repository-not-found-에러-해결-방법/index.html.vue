<template><div><h1 id="git-clone-repository-not-found-에러-해결-방법" tabindex="-1"><a class="header-anchor" href="#git-clone-repository-not-found-에러-해결-방법" aria-hidden="true">#</a> Git Clone Repository not found 에러 해결 방법</h1>
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
<p>git clone 명령어를 통해서 클론을 할 때 에러가 발생하는 경우가 있다.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/*****
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>remote: Repository not found
fatal: repository ~~~~ not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>github 레포지토리 url도 맞게 입력했는데 이런 에러가 발생했을 때는 아래 처럼 <strong>username</strong>을 추가해주면 된다.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://<span class="token punctuation">{</span>username<span class="token punctuation">}</span>@github.com/*****

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>이렇게 하면 레포지토리 클론을 할 때 발생하는 repository not found 이슈를 해결할 수 있다.</p>
</div></template>
