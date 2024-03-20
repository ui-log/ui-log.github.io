<template><div><h1 id="nextjs-14에서-검색엔진에-걸리기-위해-robots-txt-추가하는-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14에서-검색엔진에-걸리기-위해-robots-txt-추가하는-방법" aria-hidden="true">#</a> Nextjs 14에서 검색엔진에 걸리기 위해 robots.txt 추가하는 방법</h1>
<p>사이트에서 어떤 URL에 접근할 수 있는지 검색 엔진 크롤러에게 알려주기 위해 앱 디렉토리 루트에 Robots Exclusion Standard와 일치하는 robots.txt 파일을 추가하거나 생성하세요.</p>
<h2 id="정적-robots-txt" tabindex="-1"><a class="header-anchor" href="#정적-robots-txt" aria-hidden="true">#</a> 정적 robots.txt</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>User<span class="token operator">-</span>Agent<span class="token operator">:</span> <span class="token operator">*</span>
<span class="token literal-property property">Allow</span><span class="token operator">:</span> <span class="token operator">/</span>
<span class="token literal-property property">Disallow</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">private</span><span class="token regex-delimiter">/</span></span>

<span class="token literal-property property">Sitemap</span><span class="token operator">:</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>acme<span class="token punctuation">.</span>com<span class="token operator">/</span>sitemap<span class="token punctuation">.</span>xml
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
<h2 id="로봇-파일-생성하기" tabindex="-1"><a class="header-anchor" href="#로봇-파일-생성하기" aria-hidden="true">#</a> 로봇 파일 생성하기</h2>
<p>로봇 객체를 반환하는 robots.js 또는 robots.ts 파일을 추가하세요.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> MetadataRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">robots</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> MetadataRoute<span class="token punctuation">.</span>Robots <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">{</span>
      userAgent<span class="token operator">:</span> <span class="token string">"*"</span><span class="token punctuation">,</span>
      allow<span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
      disallow<span class="token operator">:</span> <span class="token string">"/private/"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    sitemap<span class="token operator">:</span> <span class="token string">"https://acme.com/sitemap.xml"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>결과:</p>
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
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>User-Agent: \*
Allow: /
Disallow: /private/

Sitemap: https://acme.com/sitemap.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="특정-사용자-에이전트-사용자-정의" tabindex="-1"><a class="header-anchor" href="#특정-사용자-에이전트-사용자-정의" aria-hidden="true">#</a> 특정 사용자 에이전트 사용자 정의</h3>
<p>개별 검색 엔진 봇이 사이트를 크롤하는 방법을 배열 형태의 사용자 에이전트를 rules 속성에 전달하여 사용자 정의할 수 있습니다. 예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> MetadataRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">robots</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> MetadataRoute<span class="token punctuation">.</span>Robots <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        userAgent<span class="token operator">:</span> <span class="token string">"Googlebot"</span><span class="token punctuation">,</span>
        allow<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"/"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        disallow<span class="token operator">:</span> <span class="token string">"/private/"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        userAgent<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Applebot"</span><span class="token punctuation">,</span> <span class="token string">"Bingbot"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        disallow<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"/"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    sitemap<span class="token operator">:</span> <span class="token string">"https://acme.com/sitemap.xml"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>사용자 에이전트: Googlebot
허용: /
거부: /private/

사용자 에이전트: Applebot
거부: /

사용자 에이전트: Bingbot
거부: /

사이트맵: https://acme.com/sitemap.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="로봇-객체" tabindex="-1"><a class="header-anchor" href="#로봇-객체" aria-hidden="true">#</a> 로봇 객체</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>type Robots <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span>
    <span class="token operator">|</span> <span class="token punctuation">{</span>
        userAgent<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>
        allow<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>
        disallow<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>
        crawlDelay<span class="token operator">?</span><span class="token operator">:</span> number
      <span class="token punctuation">}</span>
    <span class="token operator">|</span> Array<span class="token operator">&lt;</span><span class="token punctuation">{</span>
        <span class="token literal-property property">userAgent</span><span class="token operator">:</span> string <span class="token operator">|</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>
        allow<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>
        disallow<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>
        crawlDelay<span class="token operator">?</span><span class="token operator">:</span> number
      <span class="token punctuation">}</span><span class="token operator">></span>
  sitemap<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>
  host<span class="token operator">?</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="버전-이력" tabindex="-1"><a class="header-anchor" href="#버전-이력" aria-hidden="true">#</a> 버전 이력</h2>
<table>
<thead>
<tr>
<th>Version</th>
<th>Changes</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v13.3.0</code></td>
<td><code v-pre>robots</code>이 추가되었습니다.</td>
</tr>
</tbody>
</table>
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
