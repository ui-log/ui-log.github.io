<template><div><h1 id="nextjs-14-사용자-빌드-디렉터리를-위한-distdir" tabindex="-1"><a class="header-anchor" href="#nextjs-14-사용자-빌드-디렉터리를-위한-distdir" aria-hidden="true">#</a> Nextjs 14 사용자 빌드 디렉터리를 위한 distDir</h1>
<p>기본적으로 .next 대신 사용할 사용자 정의 빌드 디렉터리의 이름을 지정할 수 있습니다.</p>
<p>next.config.js 파일을 열고 distDir 구성을 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">distDir</span><span class="token operator">:</span> <span class="token string">"build"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<p>이제 <code v-pre>next build</code>를 실행하면 Next.js는 기본 .next 폴더 대신 빌드를 사용할 것입니다.</p>
<blockquote>
<p><code v-pre>distDir</code>은 프로젝트 디렉토리를 벗어나서는 안 됩니다. 예를 들어, ../build는 잘못된 디렉토리입니다.</p>
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
</div></template>
