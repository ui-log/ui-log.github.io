<template><div><h1 id="nextjs-static-html-사이트-배포하는-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-static-html-사이트-배포하는-방법" aria-hidden="true">#</a> Nextjs Static HTML 사이트 배포하는 방법</h1>
<div class="custom-container tip"><p class="custom-container-title">목표</p>
<p>웹사이트를 만들다보면 DB를 사용하지 않는 정적 웹 사이트를 만드는 경우가 있는데요.
Nextjs를 활용해 정적 웹사이트 배포하는 방법에 대해서 소개합니다.</p>
</div>
<h3 id="scripts-변경" tabindex="-1"><a class="header-anchor" href="#scripts-변경" aria-hidden="true">#</a> scripts 변경</h3>
<p>Nextjs 저장소의 package.json에 있는 build 명령어를 아래와 같이 바꿔줍니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"next build &amp;&amp; next export"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
