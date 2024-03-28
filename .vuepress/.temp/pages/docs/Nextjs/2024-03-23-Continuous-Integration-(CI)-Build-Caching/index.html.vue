<template><div><h1 id="지속적-통합-ci-빌드-캐싱" tabindex="-1"><a class="header-anchor" href="#지속적-통합-ci-빌드-캐싱" aria-hidden="true">#</a> 지속적 통합 (CI) 빌드 캐싱</h1>
<p>빌드 성능을 향상시키기 위해 Next.js는 빌드 간에 공유되는 캐시를 .next/cache에 저장합니다.</p>
<p>지속적 통합 (CI) 환경에서 이 캐시를 활용하려면 CI 워크플로우를 올바르게 구성하여 빌드 간에 캐시를 올바르게 유지해야 합니다.</p>
<blockquote>
<p>.next/cache를 빌드 간에 올바르게 유지하도록 CI가 구성되지 않은 경우 No Cache Detected 오류가 발생할 수 있습니다.</p>
</blockquote>
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
<p>다음은 일반적인 CI 제공업체에 대한 예시 캐시 구성입니다:</p>
<h2 id="vercel" tabindex="-1"><a class="header-anchor" href="#vercel" aria-hidden="true">#</a> Vercel</h2>
<p>Next.js 캐싱은 자동으로 구성되어 있습니다. 여러분이 할 일은 없습니다.</p>
<h2 id="circleci" tabindex="-1"><a class="header-anchor" href="#circleci" aria-hidden="true">#</a> CircleCI</h2>
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
<p>답변 수정:</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>Change the table tag to Markdown format.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>한국어로 번역한 내용입니다. 혹시 더 궁금한 점이 있으시면 언제든지 물어봐 주세요.</p>
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
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">캐시를 추가하거나 .travis.yml 파일에 다음을 병합하세요</span><span class="token punctuation">:</span>

<span class="token key atrule">cache</span><span class="token punctuation">:</span>
  <span class="token key atrule">directories</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> $HOME/.cache/yarn
    <span class="token punctuation">-</span> node_modules
    <span class="token punctuation">-</span> .next/cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gitlab-ci" tabindex="-1"><a class="header-anchor" href="#gitlab-ci" aria-hidden="true">#</a> GitLab CI</h2>
<p>다음을 .gitlab-ci.yml 파일에 추가하거나 병합하세요:</p>
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
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">cache</span><span class="token punctuation">:</span>
  <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>CI_COMMIT_REF_SLUG<span class="token punctuation">}</span>
  <span class="token key atrule">paths</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> node_modules/
    <span class="token punctuation">-</span> .next/cache/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="netlify-ci" tabindex="-1"><a class="header-anchor" href="#netlify-ci" aria-hidden="true">#</a> Netlify CI</h2>
<p>넷리파이 플러그인을 사용해보세요
@netlify/plugin-nextjs와 함께
.</p>
<h2 id="aws-codebuild" tabindex="-1"><a class="header-anchor" href="#aws-codebuild" aria-hidden="true">#</a> AWS CodeBuild</h2>
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
<p>빌드 스펙 YAML에 다음 내용을 추가하거나 병합하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">cache</span><span class="token operator">:</span>
  <span class="token literal-property property">paths</span><span class="token operator">:</span>
    <span class="token operator">-</span> <span class="token string">'node_modules/**/*'</span> # <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">yarn</span><span class="token template-punctuation string">`</span></span> 또는 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">npm i</span><span class="token template-punctuation string">`</span></span>를 빠르게 실행하기 위해 <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">node_modules</span><span class="token template-punctuation string">`</span></span> 캐시
    <span class="token operator">-</span> <span class="token string">'.next/cache/**/*'</span> # 애플리케이션 재빌드를 더 빠르게하기 위해 Next<span class="token punctuation">.</span>js 캐시
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github-actions" tabindex="-1"><a class="header-anchor" href="#github-actions" aria-hidden="true">#</a> GitHub Actions</h2>
<p>GitHub의 actions/cache를 사용하여, 워크플로 파일에 다음 단계를 추가하세요:</p>
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
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v4
<span class="token key atrule">with</span><span class="token punctuation">:</span>
  <span class="token comment"># `yarn`을 사용하여 캐싱하는 방법은 여기를 참조하세요 https://github.com/actions/cache/blob/main/examples.md#node---yarn 또는 actions/setup-node를 사용하여 캐싱을 활용할 수 있습니다. https://github.com/actions/setup-node</span>
  <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    ~/.npm
    ${ github.workspace }/.next/cache</span>
  <span class="token comment"># 패키지나 소스 파일이 변경될 때마다 새 캐시를 생성합니다.</span>
  <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">-</span>nextjs<span class="token punctuation">-</span>$<span class="token punctuation">{</span> hashFiles('<span class="token important">**/package-lock.json')</span> <span class="token punctuation">}</span><span class="token punctuation">-</span>$<span class="token punctuation">{</span> hashFiles('<span class="token important">**/*.js'</span><span class="token punctuation">,</span> <span class="token string">'**/*.jsx'</span><span class="token punctuation">,</span> <span class="token string">'**/*.ts'</span><span class="token punctuation">,</span> '<span class="token important">**/*.tsx')</span> <span class="token punctuation">}</span>
  <span class="token comment"># 소스 파일이 변경되었지만 패키지가 변경되지 않은 경우 이전 캐시에서 다시 빌드합니다.</span>
  <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    ${ runner.os }-nextjs-${ hashFiles('**/package-lock.json') }-</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bitbucket-pipelines" tabindex="-1"><a class="header-anchor" href="#bitbucket-pipelines" aria-hidden="true">#</a> Bitbucket Pipelines</h2>
<p>다음 코드를 bitbucket-pipelines.yml 파일의 최상위 수준(pipelines와 동일한 수준)에 추가하거나 병합합니다:</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">definitions</span><span class="token punctuation">:</span>
  <span class="token key atrule">caches</span><span class="token punctuation">:</span>
    <span class="token key atrule">nextcache</span><span class="token punctuation">:</span> .next/cache
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
<p>그런 다음 파이프라인 단계의 캐시 섹션에서 그것을 참조하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">-</span> step<span class="token operator">:</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> your_step_name
    <span class="token literal-property property">caches</span><span class="token operator">:</span>
      <span class="token operator">-</span> node
      <span class="token operator">-</span> nextcache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="heroku" tabindex="-1"><a class="header-anchor" href="#heroku" aria-hidden="true">#</a> Heroku</h2>
<p>Heroku의 사용자 정의 캐시를 사용하려면, top-level package.json에 cacheDirectories 배열을 추가하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"cacheDirectories"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">".next/cache"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="azure-pipelines" tabindex="-1"><a class="header-anchor" href="#azure-pipelines" aria-hidden="true">#</a> Azure Pipelines</h2>
<p>Azure Pipelines의 캐시 작업을 사용하여, 다음 빌드를 실행하는 작업 이전 어딘가에 아래 작업을 파이프라인 yaml 파일에 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">-</span> task<span class="token operator">:</span> Cache@<span class="token number">2</span>
  <span class="token literal-property property">displayName</span><span class="token operator">:</span> <span class="token string">'Cache .next/cache'</span>
  <span class="token literal-property property">inputs</span><span class="token operator">:</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> next <span class="token operator">|</span> <span class="token function">$</span><span class="token punctuation">(</span>Agent<span class="token punctuation">.</span><span class="token constant">OS</span><span class="token punctuation">)</span> <span class="token operator">|</span> yarn<span class="token punctuation">.</span>lock
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'$(System.DefaultWorkingDirectory)/.next/cache'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="jenkins-파이프라인" tabindex="-1"><a class="header-anchor" href="#jenkins-파이프라인" aria-hidden="true">#</a> Jenkins (파이프라인)</h2>
<p>Jenkins의 Job Cacher 플러그인을 사용하여, 일반적으로 다음 빌드 또는 npm install을 실행하는 부분에 다음 빌드 단계를 Jenkinsfile에 추가해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">"npm 패키지 복원"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    steps <span class="token punctuation">{</span>
        <span class="token comment">// GIT_COMMIT 해시를 기반으로 캐시에 락 파일 작성</span>
        writeFile file<span class="token operator">:</span> <span class="token string">"next-lock.cache"</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"$GIT_COMMIT"</span>

        <span class="token function">cache</span><span class="token punctuation">(</span>caches<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token function">arbitraryFileCache</span><span class="token punctuation">(</span>
                <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"node_modules"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">includes</span><span class="token operator">:</span> <span class="token string">"**/*"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">cacheValidityDecidingFile</span><span class="token operator">:</span> <span class="token string">"package-lock.json"</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sh <span class="token string">"npm install"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">"빌드"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    steps <span class="token punctuation">{</span>
        <span class="token comment">// GIT_COMMIT 해시를 기반으로 캐시에 락 파일 작성</span>
        writeFile file<span class="token operator">:</span> <span class="token string">"next-lock.cache"</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"$GIT_COMMIT"</span>

        <span class="token function">cache</span><span class="token punctuation">(</span>caches<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token function">arbitraryFileCache</span><span class="token punctuation">(</span>
                <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">".next/cache"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">includes</span><span class="token operator">:</span> <span class="token string">"**/*"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">cacheValidityDecidingFile</span><span class="token operator">:</span> <span class="token string">"next-lock.cache"</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// aka `next build`</span>
            sh <span class="token string">"npm run build"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
</div></template>
