<template><div><p>무료 호스팅 플랫폼을 찾고 계신가요? 귀하의 Vite 앱을 배포하려면 GitHub Pages를 사용해보세요!</p>
<p>GitHub Pages에 Vite 앱을 배포하는 방법을 5가지 간단한 단계로 알려드릴게요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-DeployingViteDeployingViteApptoGitHubPages/img/DeployingViteDeployingViteApptoGitHubPages_0.png" alt="이미지"></p>
<h1 id="단계-1-git-저장소-초기화" tabindex="-1"><a class="header-anchor" href="#단계-1-git-저장소-초기화" aria-hidden="true">#</a> 단계 1: Git 저장소 초기화</h1>
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
<p>친구야, Vite 앱에서 깃 레포지토리를 초기화하고 기존 코드를 GitHub의 원격 레포지토리로 푸시하는 명령을 실행해보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$ git init
$ git add <span class="token punctuation">.</span>
$ git commit <span class="token operator">-</span>m <span class="token string">"initial-commit"</span>
$ git branch <span class="token operator">-</span><span class="token constant">M</span> main
$ git remote add origin http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token punctuation">{</span>username<span class="token punctuation">}</span><span class="token operator">/</span><span class="token punctuation">{</span>repo<span class="token operator">-</span>name<span class="token punctuation">}</span><span class="token punctuation">.</span>git
$ git push <span class="token operator">-</span>u origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-2-vite-config-js-업데이트" tabindex="-1"><a class="header-anchor" href="#단계-2-vite-config-js-업데이트" aria-hidden="true">#</a> 단계 2: vite.config.js 업데이트</h1>
<p>이 파일에 baseURL을 추가하려면 base를 &quot;/{repo-name}/&quot;로 설정하세요. 예를 들어, 레포지토리의 이름이 book-landing-page인 경우, baseURL을 이렇게 설정하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span>
<span class="token keyword">import</span> react <span class="token keyword">from</span> <span class="token string">'@vitejs/plugin-react'</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">react</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">"/book-landing-page/"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-3-gh-pages-설치" tabindex="-1"><a class="header-anchor" href="#단계-3-gh-pages-설치" aria-hidden="true">#</a> 단계 3: gh-pages 설치</h1>
<p>gh-pages 패키지를 개발 의존성으로 설치합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install gh<span class="token operator">-</span>pages <span class="token operator">--</span>save<span class="token operator">-</span>dev
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
<h1 id="단계-4-package-json-업데이트하기" tabindex="-1"><a class="header-anchor" href="#단계-4-package-json-업데이트하기" aria-hidden="true">#</a> 단계 4: package.json 업데이트하기</h1>
<p>다음과 같이 predeploy 및 deploy 스크립트를 사용하여 package.json을 업데이트하십시오.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"predeploy"</span> <span class="token operator">:</span> <span class="token string">"npm run build"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"deploy"</span> <span class="token operator">:</span> <span class="token string">"gh-pages -d dist"</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>package.json에서 homepage을 설정하여 완전한 웹사이트 URL을 추가하십시오.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"homepage"</span><span class="token operator">:</span> <span class="token string">"https://{username}.github.io/{repo-name}/"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>따라서, 업데이트된 package.json은 다음과 같이 보일 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"book-product"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"private"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">"version"</span><span class="token operator">:</span> <span class="token string">"0.0.0"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"homepage"</span><span class="token operator">:</span> <span class="token string">"https://aishwaryaparab.github.io/book-landing-page/"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"module"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"predeploy"</span> <span class="token operator">:</span> <span class="token string">"npm run build"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"deploy"</span> <span class="token operator">:</span> <span class="token string">"gh-pages -d dist"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"dev"</span><span class="token operator">:</span> <span class="token string">"vite"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"vite build"</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-5-배포-실행" tabindex="-1"><a class="header-anchor" href="#단계-5-배포-실행" aria-hidden="true">#</a> 단계 5: 배포 실행```</h1>
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
<p>여기까지 오셨네요! 거의 다 왔어요. 마지막 명령어를 실행해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm run deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>그러면 끝이에요!</p>
<p>하지만 마지막 한 가지만 더 해야 해요!</p>
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
<p>깃허브의 원격 저장소로 이동하여 <code v-pre>Settings -&gt; Pages</code> 메뉴로 이동하세요. 소스를 &quot;브랜치에서 배포&quot;로 선택하고 브랜치를 &quot;gh-pages&quot;로 설정하세요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-DeployingViteDeployingViteApptoGitHubPages/img/DeployingViteDeployingViteApptoGitHubPages_1.png" alt="이미지"></p>
<p>깃허브 페이지를 통해 사용자 정의 도메인을 설정할 수도 있어요. 🙌</p>
<p>조금 기다려 주시고 몇 분 후에 https://{사용자이름}.github.io/{저장소 이름}/ 에서 사이트를 확인할 수 있을 거예요.</p>
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
<p>축하합니다!! 귀하의 사이트가 인터넷에서 볼 준비가 되었습니다. 모든 개발 노력이 보람 있었군요. 🤩</p>
<p>도움이 되었기를 바랍니다. 다음에 만나요! 👋</p>
<p>즐거운 학습되세요! ✨</p>
</div></template>
