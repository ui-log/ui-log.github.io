<template><div><h1 id="nextjs-14-exportpathmap-사용-방법-정리" tabindex="-1"><a class="header-anchor" href="#nextjs-14-exportpathmap-사용-방법-정리" aria-hidden="true">#</a> Nextjs 14 exportPathMap 사용 방법 정리</h1>
<blockquote>
<p>이 기능은 next export에만 적용되며 현재 페이지 또는 앱에 getStaticPaths 또는 generateStaticParams를 선호하는 방식으로 사용 중단되었습니다.</p>
</blockquote>
<p>exportPathMap을 사용하면 내보내기 중에 요청 경로를 페이지 대상에 매핑할 수 있습니다. exportPathMap에 정의된 경로는 next dev를 사용할 때도 사용할 수 있습니다.</p>
<p>예제를 통해 시작해 보겠습니다. 다음 페이지를 갖는 앱에 대해 사용자 정의 exportPathMap을 만들어 보겠습니다:</p>
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
<ul>
<li>pages/index.js</li>
<li>pages/about.js</li>
<li>pages/post.js</li>
</ul>
<p>다음과 같은 exportPathMap 구성을 next.config.js에 추가해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">exportPathMap</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">defaultPathMap<span class="token punctuation">,</span> <span class="token punctuation">{</span> dev<span class="token punctuation">,</span> dir<span class="token punctuation">,</span> outDir<span class="token punctuation">,</span> distDir<span class="token punctuation">,</span> buildId <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"/"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token string">"/"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">"/about"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token string">"/about"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">"/p/hello-nextjs"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token string">"/post"</span><span class="token punctuation">,</span> <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"hello-nextjs"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">"/p/learn-nextjs"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token string">"/post"</span><span class="token punctuation">,</span> <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"learn-nextjs"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">"/p/deploy-nextjs"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token string">"/post"</span><span class="token punctuation">,</span> <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"deploy-nextjs"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>정보: exportPathMap의 쿼리 필드는 next export 시 HTML 파일로 빌드될 때 자동으로 정적으로 최적화된 페이지나 getStaticProps 페이지와 함께 사용할 수 없습니다. 추가적인 쿼리 정보는 next export 중에 제공할 수 없습니다.</p>
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
<p>이 페이지들은 HTML 파일로 내보내질 것이고, 예를 들어, /about은 /about.html로 변환될 것입니다.</p>
<p>exportPathMap은 2개의 인자를 받는 비동기 함수입니다: 첫 번째는 Next.js에서 사용되는 기본 맵인 defaultPathMap이고, 두 번째는 다음과 같은 객체인 경우입니다:</p>
<ul>
<li>dev - 개발 중에 exportPathMap이 호출될 때는 true입니다. next export를 실행할 때는 false입니다. 개발 중에는 routes를 정의하는 데 사용됩니다.</li>
<li>dir - 프로젝트 디렉토리의 절대 경로</li>
<li>outDir - out/ 디렉토리의 절대 경로 (-o로 설정 가능). dev가 true일 때는 outDir의 값은 null일 것입니다.</li>
<li>distDir - .next/ 디렉토리의 절대 경로 (distDir 구성으로 설정 가능)</li>
<li>buildId - 생성된 빌드 ID</li>
</ul>
<p>반환된 객체는 페이지의 맵이며, 키는 pathname이고, 값은 다음 필드를 사용하는 객체입니다:</p>
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
<ul>
<li>page: 문자열 - 렌더링할 페이지(페이지 디렉토리 내에서)</li>
<li>query: 객체 - 프리랜더링 시 getInitialProps에 전달되는 쿼리 객체. 기본값은 {}</li>
</ul>
<blockquote>
<p>내보낸 경로 이름은 파일 이름이 될 수도 있습니다 (예: /readme.md), 그러나 해당 내용을 제공할 때 Content-Type 헤더를 text/html로 설정해야 할 수도 있습니다.</p>
</blockquote>
<h2 id="슬래시-추가하기" tabindex="-1"><a class="header-anchor" href="#슬래시-추가하기" aria-hidden="true">#</a> 슬래시 추가하기</h2>
<p>Next.js를 구성하여 페이지를 index.html 파일로 내보내고 뒤쪽 슬래시를 필요로하는 것도 가능합니다. /about은 /about/index.html로 변환되며 /about/을 통해 라우팅됩니다. 이것은 Next.js 9 이전의 기본 동작이었습니다.</p>
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
<p>위의 표를 Markdown 형식으로 변경하고 뒤에 슬래시를 추가하려면 next.config.js를 열고 trailingSlash 구성을 활성화하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">trailingSlash</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="출력-디렉토리-사용자-정의" tabindex="-1"><a class="header-anchor" href="#출력-디렉토리-사용자-정의" aria-hidden="true">#</a> 출력 디렉토리 사용자 정의</h2>
<p>next export는 기본 출력 디렉토리로 out을 사용합니다. -o 인수를 사용하여 이를 사용자 정의할 수 있습니다. 다음과 같이 사용하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>다음 <span class="token keyword">export</span> <span class="token operator">-</span>o outdir
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>경고: exportPathMap 사용은 더 이상 권장되지 않으며 pages 내의 getStaticPaths에 의해 무시됩니다. 함께 사용하는 것을 권장하지 않습니다.</p>
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
