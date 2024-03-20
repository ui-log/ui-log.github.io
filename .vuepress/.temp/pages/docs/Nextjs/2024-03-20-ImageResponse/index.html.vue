<template><div><h1 id="nextjs-14에서-imageresponse로-이미지-동적-생성하는-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14에서-imageresponse로-이미지-동적-생성하는-방법" aria-hidden="true">#</a> Nextjs 14에서 ImageResponse로 이미지 동적 생성하는 방법</h1>
<p>ImageResponse 생성자를 사용하면 JSX와 CSS를 사용하여 동적 이미지를 생성할 수 있습니다. 이는 Open Graph 이미지, Twitter 카드 등의 소셜 미디어 이미지를 생성하는 데 유용합니다.</p>
<p>다음은 ImageResponse에서 사용할 수 있는 옵션입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ImageResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/og'</span>

<span class="token keyword">new</span> <span class="token class-name">ImageResponse</span><span class="token punctuation">(</span>
  <span class="token literal-property property">element</span><span class="token operator">:</span> ReactElement<span class="token punctuation">,</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    width<span class="token operator">?</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">1200</span>
    height<span class="token operator">?</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">630</span>
    emoji<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">'twemoji'</span> <span class="token operator">|</span> <span class="token string">'blobmoji'</span> <span class="token operator">|</span> <span class="token string">'noto'</span> <span class="token operator">|</span> <span class="token string">'openmoji'</span> <span class="token operator">=</span> <span class="token string">'twemoji'</span><span class="token punctuation">,</span>
    fonts<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> ArrayBuffer<span class="token punctuation">,</span>
      <span class="token literal-property property">weight</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
      <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">'normal'</span> <span class="token operator">|</span> <span class="token string">'italic'</span>
    <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    debug<span class="token operator">?</span><span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">false</span>

    <span class="token comment">// HTTP 응답에 전달될 옵션</span>
    status<span class="token operator">?</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">200</span>
    statusText<span class="token operator">?</span><span class="token operator">:</span> string
    headers<span class="token operator">?</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> string<span class="token operator">></span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="지원되는-css-속성" tabindex="-1"><a class="header-anchor" href="#지원되는-css-속성" aria-hidden="true">#</a> 지원되는 CSS 속성</h2>
<p>지원되는 HTML 및 CSS 기능 목록은 Satori의 문서를 참조해주세요.</p>
<h2 id="버전-히스토리" tabindex="-1"><a class="header-anchor" href="#버전-히스토리" aria-hidden="true">#</a> 버전 히스토리</h2>
<table>
<thead>
<tr>
<th>버전</th>
<th>변경 내용</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v14.0.0</code></td>
<td><code v-pre>ImageResponse</code>이 <code v-pre>next/server</code>에서 <code v-pre>next/og</code>로 이동되었습니다.</td>
</tr>
<tr>
<td><code v-pre>v13.3.0</code></td>
<td><code v-pre>ImageResponse</code>는 <code v-pre>next/server</code>에서 가져올 수 있습니다.</td>
</tr>
<tr>
<td><code v-pre>v13.0.0</code></td>
<td><code v-pre>@vercel/og</code> 패키지를 통해 <code v-pre>ImageResponse</code>가 소개되었습니다.</td>
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
