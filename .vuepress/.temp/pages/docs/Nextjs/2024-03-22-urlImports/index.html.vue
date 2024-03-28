<template><div><h1 id="urlimports" tabindex="-1"><a class="header-anchor" href="#urlimports" aria-hidden="true">#</a> urlImports</h1>
<p>URL imports는 실험적인 기능으로, 외부 서버에서 모듈을 직접 가져올 수 있게 해줍니다 (로컬 디스크가 아닌).</p>
<blockquote>
<p>주의: 이 기능은 실험적입니다. 기곤하신 도메인만 사용하여 다운로드하고 기계에서 실행하십시오. 기능이 안정적으로 플래그 지정되기 전까지 주의하고 신중하게 사용하십시오.</p>
</blockquote>
<p>참여하려면 다음의 허용된 URL 접두사를 next.config.js 안에 추가하십시오:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">urlImports</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"https://example.com/assets/"</span><span class="token punctuation">,</span> <span class="token string">"https://cdn.skypack.dev"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 다음과 같이 URL에서 모듈을 직접 가져올 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"https://example.com/assets/some/module.js"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>URL Imports는 일반적인 패키지 가져오기가 가능한 곳이라면 어디에서든 사용할 수 있습니다.</p>
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
<h2 id="보안-모델" tabindex="-1"><a class="header-anchor" href="#보안-모델" aria-hidden="true">#</a> 보안 모델</h2>
<p>이 기능은 보안을 최우선으로 고려하여 설계되고 있습니다. 먼저, URL 가져오기를 명시적으로 허용해야 하는 실험적인 플래그가 추가되었습니다. 이 기능을 보다 나아가, Edge Runtime을 사용하여 브라우저 샌드박스에서 URL 가져오기를 제한하는 작업을 진행 중에 있습니다.</p>
<h2 id="잠금-파일" tabindex="-1"><a class="header-anchor" href="#잠금-파일" aria-hidden="true">#</a> 잠금 파일</h2>
<p>URL 가져오기를 사용할 때, Next.js는 lockfile과 가져온 에셋이 포함된 next.lock 디렉토리를 생성합니다. 이 디렉토리는 .gitignore에 무시되지 않고 Git에 커밋되어야 합니다.</p>
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
<li>Next.js에서 next dev를 실행하면 새로 발견된 모든 URL Imports이 lockfile에 추가되는 동시에 다운로드됩니다.</li>
<li>Next.js에서 next build를 실행하면 애플리케이션을 프로덕션용으로 빌드할 때 lockfile만 사용됩니다.</li>
</ul>
<p>일반적으로 네트워크 요청이 필요하지 않으며 오래된 lockfile은 빌드를 실패하게 만들 수 있습니다. 예외는 Cache-Control: no-cache로 응답하는 리소스입니다. 이러한 리소스는 lockfile에 no-cache 항목이 포함되어 있으며 각 빌드마다 네트워크에서 항상 가져올 것입니다.</p>
<h2 id="예시" tabindex="-1"><a class="header-anchor" href="#예시" aria-hidden="true">#</a> 예시</h2>
<h3 id="skypack" tabindex="-1"><a class="header-anchor" href="#skypack" aria-hidden="true">#</a> Skypack</h3>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> confetti <span class="token keyword">from</span> <span class="token string">"https://cdn.skypack.dev/canvas-confetti"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">confetti</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>Hello<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="정적-이미지-가져오기" tabindex="-1"><a class="header-anchor" href="#정적-이미지-가져오기" aria-hidden="true">#</a> 정적 이미지 가져오기</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Image <span class="token keyword">from</span> <span class="token string">"next/image"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> logo <span class="token keyword">from</span> <span class="token string">"https://example.com/assets/logo.png"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>Image src<span class="token operator">=</span><span class="token punctuation">{</span>logo<span class="token punctuation">}</span> placeholder<span class="token operator">=</span><span class="token string">"blur"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css에서의-url" tabindex="-1"><a class="header-anchor" href="#css에서의-url" aria-hidden="true">#</a> CSS에서의 URL</h3>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>className <span class="token punctuation">{</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token string">'https://example.com/assets/hero.jpg'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="자산-가져오기" tabindex="-1"><a class="header-anchor" href="#자산-가져오기" aria-hidden="true">#</a> 자산 가져오기</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> logo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">"https://example.com/assets/file.txt"</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>logo<span class="token punctuation">.</span>pathname<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 출력: "/_next/static/media/file.a9727b5d.txt"</span>
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
</div></template>
