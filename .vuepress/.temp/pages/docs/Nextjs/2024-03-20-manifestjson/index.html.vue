<template><div><h1 id="nextjs-14-사이트-정보를-담은-manifest-json-작성-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14-사이트-정보를-담은-manifest-json-작성-방법" aria-hidden="true">#</a> Nextjs 14 사이트 정보를 담은 manifest.json 작성 방법</h1>
<p>웹 어플리케이션에 관한 정보를 브라우저에 제공하기 위해 앱 디렉토리 루트에 Web Manifest Specification과 일치하는 manifest.(json|webmanifest) 파일을 추가하거나 생성해 주세요.</p>
<h2 id="정적-manifest-파일" tabindex="-1"><a class="header-anchor" href="#정적-manifest-파일" aria-hidden="true">#</a> 정적 Manifest 파일</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"나의 Next.js 어플리케이션"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"short_name"</span><span class="token operator">:</span> <span class="token string">"Next.js 어플"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"description"</span><span class="token operator">:</span> <span class="token string">"Next.js로 만들어진 어플리케이션"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"start_url"</span><span class="token operator">:</span> <span class="token string">"/"</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="manifest-파일-생성하기" tabindex="-1"><a class="header-anchor" href="#manifest-파일-생성하기" aria-hidden="true">#</a> Manifest 파일 생성하기</h2>
<p>Manifest 객체를 반환하는 manifest.js 또는 manifest.ts 파일을 추가해주세요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> MetadataRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">manifest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> MetadataRoute<span class="token punctuation">.</span>Manifest <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">"Next.js 앱"</span><span class="token punctuation">,</span>
    short_name<span class="token operator">:</span> <span class="token string">"Next.js 앱"</span><span class="token punctuation">,</span>
    description<span class="token operator">:</span> <span class="token string">"Next.js 앱"</span><span class="token punctuation">,</span>
    start_url<span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
    display<span class="token operator">:</span> <span class="token string">"standalone"</span><span class="token punctuation">,</span>
    background_color<span class="token operator">:</span> <span class="token string">"#fff"</span><span class="token punctuation">,</span>
    theme_color<span class="token operator">:</span> <span class="token string">"#fff"</span><span class="token punctuation">,</span>
    icons<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        src<span class="token operator">:</span> <span class="token string">"/favicon.ico"</span><span class="token punctuation">,</span>
        sizes<span class="token operator">:</span> <span class="token string">"any"</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">"image/x-icon"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="manifest-객체" tabindex="-1"><a class="header-anchor" href="#manifest-객체" aria-hidden="true">#</a> Manifest 객체</h3>
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
<p>manifest 오브젝트에는 새로운 웹 표준에 따라 업데이트 될 수 있는 많은 옵션 목록이 포함되어 있습니다. 현재 옵션에 대한 모든 정보는 TypeScript를 사용하는 경우 코드 편집기에서 <code v-pre>MetadataRoute.Manifest</code> 타입을 참조하거나 MDN 문서를 확인해주세요.</p>
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
