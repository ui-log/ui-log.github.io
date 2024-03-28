<template><div><h1 id="번들-분석기" tabindex="-1"><a class="header-anchor" href="#번들-분석기" aria-hidden="true">#</a> 번들 분석기</h1>
<p>@next/bundle-analyzer는 Next.js용 플러그인으로서 자바스크립트 모듈의 크기를 관리하는 데 도움이 됩니다. 각 모듈과 해당 종속성의 크기에 대한 시각적 보고서를 생성합니다. 이 정보를 사용하여 큰 종속성을 제거하거나 코드를 분할하거나 필요할 때 일부 부분만 로드하도록 설정하여 클라이언트로 전송되는 데이터 양을 줄일 수 있습니다.</p>
<h2 id="설치" tabindex="-1"><a class="header-anchor" href="#설치" aria-hidden="true">#</a> 설치</h2>
<p>다음 명령을 실행하여 플러그인을 설치하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm i @next<span class="token operator">/</span>bundle<span class="token operator">-</span>analyzer
# 또는
yarn add @next<span class="token operator">/</span>bundle<span class="token operator">-</span>analyzer
# 또는
pnpm add @next<span class="token operator">/</span>bundle<span class="token operator">-</span>analyzer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음 bundle analyzer의 설정을 next.config.js에 추가하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> withBundleAnalyzer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@next/bundle-analyzer"</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">enabled</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">ANALYZE</span> <span class="token operator">===</span> <span class="token string">"true"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'next'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>NextConfig<span class="token punctuation">}</span></span> */</span>
<span class="token keyword">const</span> nextConfig <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">withBundleAnalyzer</span><span class="token punctuation">(</span>nextConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="번들-분석하기" tabindex="-1"><a class="header-anchor" href="#번들-분석하기" aria-hidden="true">#</a> 번들 분석하기</h2>
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
<p>아래 명령어를 실행하여 번들을 분석하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">ANALYZE</span><span class="token operator">=</span><span class="token boolean">true</span> npm run build
# 또는
<span class="token constant">ANALYZE</span><span class="token operator">=</span><span class="token boolean">true</span> yarn build
# 또는
<span class="token constant">ANALYZE</span><span class="token operator">=</span><span class="token boolean">true</span> pnpm build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 보고서는 브라우저에서 세 개의 새 탭을 열어 확인할 수 있습니다. 개발하면서 정기적으로 이를 수행하고 사이트를 배포하기 전에 확인하는 것은 큰 번들을 빨리 식별하고 응용 프로그램을 더 효율적으로 설계하는 데 도움이 될 수 있습니다.</p>
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
