<template><div><h1 id="nextjs-14에서-오픈-그래프-트위터에-보냈을-때-이미지-추가-하는-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14에서-오픈-그래프-트위터에-보냈을-때-이미지-추가-하는-방법" aria-hidden="true">#</a> Nextjs 14에서 오픈 그래프, 트위터에 보냈을 때 이미지 추가 하는 방법</h1>
<p>opengraph-image와 twitter-image 파일 규칙을 사용하면 라우트 세그먼트에 대해 Open Graph 및 Twitter 이미지를 설정할 수 있습니다.</p>
<p>사용자가 사이트 링크를 공유할 때 소셜 네트워크와 메시징 앱에 나타나는 이미지를 설정하는 데 유용합니다.</p>
<p>Open Graph 및 Twitter 이미지 설정하는 두 가지 방법이 있습니다:</p>
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
<li>이미지 파일 (.jpg, .png, .gif)</li>
<li>이미지 생성을 위한 코드 (.js, .ts, .tsx)</li>
</ul>
<h2 id="이미지-파일-jpg-png-gif" tabindex="-1"><a class="header-anchor" href="#이미지-파일-jpg-png-gif" aria-hidden="true">#</a> 이미지 파일 (.jpg, .png, .gif)</h2>
<p>세그먼트의 공유 이미지를 설정하기 위해 opengraph-image 또는 twitter-image 이미지 파일을 해당 세그먼트에 배치합니다.</p>
<p>Next.js는 파일을 평가하고 해당 앱의 <code v-pre>head</code> 요소에 적절한 태그를 자동으로 추가합니다.</p>
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
<table>
<thead>
<tr>
<th>File convention</th>
<th>Supported file types</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="#opengraph-image">opengraph-image</a></td>
<td><code v-pre>.jpg</code>, <code v-pre>.jpeg</code>, <code v-pre>.png</code>, <code v-pre>.gif</code></td>
</tr>
<tr>
<td><a href="#twitter-image">twitter-image</a></td>
<td><code v-pre>.jpg</code>, <code v-pre>.jpeg</code>, <code v-pre>.png</code>, <code v-pre>.gif</code></td>
</tr>
<tr>
<td><a href="#opengraph-imagealttxt">opengraph-image.alt</a></td>
<td><code v-pre>.txt</code></td>
</tr>
<tr>
<td><a href="#twitter-imagealttxt">twitter-image.alt</a></td>
<td><code v-pre>.txt</code></td>
</tr>
</tbody>
</table>
<h3 id="opengraph-image" tabindex="-1"><a class="header-anchor" href="#opengraph-image" aria-hidden="true">#</a> opengraph-image</h3>
<p>Add an opengraph-image.(jpg|jpeg|png|gif) image file to any route segment.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"og:image"</span> content<span class="token operator">=</span><span class="token string">"&lt;generated>"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"og:image:type"</span> content<span class="token operator">=</span><span class="token string">"&lt;generated>"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"og:image:width"</span> content<span class="token operator">=</span><span class="token string">"&lt;generated>"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"og:image:height"</span> content<span class="token operator">=</span><span class="token string">"&lt;generated>"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h3 id="twitter-image" tabindex="-1"><a class="header-anchor" href="#twitter-image" aria-hidden="true">#</a> twitter-image</h3>
<p>어떤 경로 세그먼트에 twitter-image.(jpg|jpeg|png|gif) 이미지 파일을 추가하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"twitter:image"</span> content<span class="token operator">=</span><span class="token string">"&lt;generated>"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"twitter:image:type"</span> content<span class="token operator">=</span><span class="token string">"&lt;generated>"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"twitter:image:width"</span> content<span class="token operator">=</span><span class="token string">"&lt;generated>"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"twitter:image:height"</span> content<span class="token operator">=</span><span class="token string">"&lt;generated>"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="opengraph-image-alt-txt" tabindex="-1"><a class="header-anchor" href="#opengraph-image-alt-txt" aria-hidden="true">#</a> opengraph-image.alt.txt</h3>
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
<p>같은 경로 세그먼트에 opengraph-image.(jpg|jpeg|png|gif) 이미지와 함께 opengraph-image.alt.txt 파일을 추가하세요. 해당 이미지의 alt 텍스트를 작성해 주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>About Acme
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"og:image:alt"</span> content<span class="token operator">=</span><span class="token string">"About Acme"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="twitter-image-alt-txt" tabindex="-1"><a class="header-anchor" href="#twitter-image-alt-txt" aria-hidden="true">#</a> twitter-image.alt.txt</h3>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">동양산업</span><span class="token punctuation">(</span><span class="token constant">ACME</span><span class="token punctuation">)</span> 소개
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"twitter:image:alt"</span> content<span class="token operator">=</span><span class="token string">"동양산업 소개"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="코드를-사용하여-이미지-생성-js-ts-tsx" tabindex="-1"><a class="header-anchor" href="#코드를-사용하여-이미지-생성-js-ts-tsx" aria-hidden="true">#</a> 코드를 사용하여 이미지 생성 (.js, .ts, .tsx)</h2>
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
<p>이미지 파일을 직접 사용하는 것 외에도 코드를 사용하여 이미지를 프로그래밍 방식으로 생성할 수 있습니다.</p>
<p>기본 내보내기 함수를 사용하여 opengraph-image 또는 twitter-image 경로를 생성하여 라우트 세그먼트의 공유 이미지를 생성합니다.</p>
<p><strong>File convention | Supported file types</strong></p>
<ul>
<li><code v-pre>opengraph-image</code> | <code v-pre>.js</code>, <code v-pre>.ts</code>, <code v-pre>.tsx</code></li>
<li><code v-pre>twitter-image</code> | <code v-pre>.js</code>, <code v-pre>.ts</code>, <code v-pre>.tsx</code></li>
</ul>
<blockquote>
<p>알아두면 좋은 사항
기본적으로 생성된 이미지는 정적으로 최적화됩니다(빌드 시간에 생성되고 캐시됨), 동적 함수나 캐시되지 않은 데이터를 사용하지 않는 경우입니다.
<code v-pre>generateImageMetadata</code>를 사용하여 동일한 파일에서 여러 이미지를 생성할 수 있습니다.</p>
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
<p>가장 쉬운 방법은 next/og의 ImageResponse API를 사용하여 이미지를 생성하는 것입니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ImageResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/og'</span>

<span class="token comment">// 라우트 세그먼트 설정</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> runtime <span class="token operator">=</span> <span class="token string">'edge'</span>

<span class="token comment">// 이미지 메타데이터</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> alt <span class="token operator">=</span> <span class="token string">'에이크미 소개'</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> size <span class="token operator">=</span> <span class="token punctuation">{</span>
  width<span class="token operator">:</span> <span class="token number">1200</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">630</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> contentType <span class="token operator">=</span> <span class="token string">'image/png'</span>

<span class="token comment">// 이미지 생성</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 폰트</span>
  <span class="token keyword">const</span> interSemiBold <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span>
    <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">'./Inter-SemiBold.ttf'</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">arrayBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ImageResponse</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span>
      <span class="token comment">// ImageResponse JSX 요소</span>
      <span class="token operator">&lt;</span>div
        style<span class="token operator">=</span><span class="token punctuation">{</span>
          fontSize<span class="token operator">:</span> <span class="token number">128</span><span class="token punctuation">,</span>
          background<span class="token operator">:</span> <span class="token string">'white'</span><span class="token punctuation">,</span>
          width<span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
          height<span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
          display<span class="token operator">:</span> <span class="token string">'flex'</span><span class="token punctuation">,</span>
          alignItems<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
          justifyContent<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token operator">></span>
        에이크미 소개
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// ImageResponse 옵션</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// 편의를 위해 opengraph-image로 내보낸 크기 설정을 이미지 응답의 너비와 높이로 재활용할 수 있습니다.</span>
      <span class="token operator">...</span>size<span class="token punctuation">,</span>
      fonts<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">'Inter'</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> <span class="token keyword">await</span> interSemiBold<span class="token punctuation">,</span>
          style<span class="token operator">:</span> <span class="token string">'normal'</span><span class="token punctuation">,</span>
          weight<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"og:image"</span> content<span class="token operator">=</span><span class="token string">"&lt;생성된 이미지 경로>"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"og:image:alt"</span> content<span class="token operator">=</span><span class="token string">"에이크미 소개"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"og:image:type"</span> content<span class="token operator">=</span><span class="token string">"image/png"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"og:image:width"</span> content<span class="token operator">=</span><span class="token string">"1200"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"og:image:height"</span> content<span class="token operator">=</span><span class="token string">"630"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>
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
<p>기본 내보내기 함수는 다음과 같은 props를 받습니다:</p>
<h4 id="params-선택-사항" tabindex="-1"><a class="header-anchor" href="#params-선택-사항" aria-hidden="true">#</a> params (선택 사항)</h4>
<p>루트 세그먼트에서 opengraph-image 또는 twitter-image 세그먼트까지의 동적 경로 매개변수 객체를 포함하는 객체가 혼재되어 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Image</span><span class="token punctuation">(</span><span class="token punctuation">{</span> params <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> params<span class="token operator">:</span> <span class="token punctuation">{</span> slug<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
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
<p>Markdown 형식으로 변경한 테이블입니다.</p>
<h3 id="결과" tabindex="-1"><a class="header-anchor" href="#결과" aria-hidden="true">#</a> 결과</h3>
<p>기본 내보내기 함수는 Blob | ArrayBuffer | TypedArray | DataView | ReadableStream | Response를 반환해야 합니다.</p>
<blockquote>
<p>알아두면 좋은 사실: ImageResponse는 이 반환 유형을 충족합니다.</p>
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
<h3 id="설정-내보내기" tabindex="-1"><a class="header-anchor" href="#설정-내보내기" aria-hidden="true">#</a> 설정 내보내기</h3>
<p>이미지의 메타데이터를 구성할 수 있습니다. opengraph-image 또는 twitter-image 경로에서 alt, size 및 contentType 변수를 내보내는 방식으로 설정할 수 있습니다.</p>
<table>
<thead>
<tr>
<th>Option</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="#alt">alt</a></td>
<td><code v-pre>string</code></td>
</tr>
<tr>
<td><a href="#size">size</a></td>
<td><code v-pre>{ width: number; height: number }</code></td>
</tr>
<tr>
<td><a href="#contenttype">contentType</a></td>
<td><code v-pre>string</code> - <a href="https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/MIME_types#image_types" target="_blank" rel="noopener noreferrer">이미지 MIME 타입<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<h4 id="alt" tabindex="-1"><a class="header-anchor" href="#alt" aria-hidden="true">#</a> alt</h4>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> alt <span class="token operator">=</span> <span class="token string">"나의 이미지 대체 텍스트"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"og:image:alt"</span> content<span class="token operator">=</span><span class="token string">"나의 이미지 대체 텍스트"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="크기" tabindex="-1"><a class="header-anchor" href="#크기" aria-hidden="true">#</a> 크기</h4>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> size <span class="token operator">=</span> <span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">1200</span><span class="token punctuation">,</span> height<span class="token operator">:</span> <span class="token number">630</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"og:image:width"</span> content<span class="token operator">=</span><span class="token string">"1200"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"og:image:height"</span> content<span class="token operator">=</span><span class="token string">"630"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="contenttype" tabindex="-1"><a class="header-anchor" href="#contenttype" aria-hidden="true">#</a> contentType</h4>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> contentType <span class="token operator">=</span> <span class="token string">"image/png"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"og:image:type"</span> content<span class="token operator">=</span><span class="token string">"image/png"</span> <span class="token operator">/</span><span class="token operator">></span>
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
<h4 id="라우트-세그먼트-구성" tabindex="-1"><a class="header-anchor" href="#라우트-세그먼트-구성" aria-hidden="true">#</a> 라우트 세그먼트 구성</h4>
<p>opengraph-image와 twitter-image는 페이지 및 레이아웃과 같은 라우트 세그먼트 구성 옵션을 사용할 수 있는 특수화된 Route Handlers입니다.</p>
<table>
<thead>
<tr>
<th>Option</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>dynamic</td>
<td><code v-pre>'auto' | 'force-dynamic' | 'error' | 'force-static'</code></td>
<td><code v-pre>'auto'</code></td>
</tr>
<tr>
<td>revalidate</td>
<td><code v-pre>false | 'force-cache' | 0 | number</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td>runtime</td>
<td><code v-pre>'nodejs' | 'edge'</code></td>
<td><code v-pre>'nodejs'</code></td>
</tr>
<tr>
<td>preferredRegion</td>
<td><code v-pre>'auto' | 'global' | 'home' | string | string[]</code></td>
<td><code v-pre>'auto'</code></td>
</tr>
</tbody>
</table>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> runtime <span class="token operator">=</span> <span class="token string">"edge"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
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
<h3 id="예시" tabindex="-1"><a class="header-anchor" href="#예시" aria-hidden="true">#</a> 예시</h3>
<h4 id="외부-데이터-사용하기" tabindex="-1"><a class="header-anchor" href="#외부-데이터-사용하기" aria-hidden="true">#</a> 외부 데이터 사용하기</h4>
<p>이 예시는 params 객체와 외부 데이터를 사용하여 이미지를 생성합니다.</p>
<blockquote>
<p>참고: 기본적으로 이 생성된 이미지는 정적으로 최적화됩니다. 개별 fetch 옵션이나 route 세그먼트 옵션을 구성하여 이 동작을 변경할 수 있습니다.</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ImageResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/og'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> runtime <span class="token operator">=</span> <span class="token string">'edge'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> alt <span class="token operator">=</span> <span class="token string">'Acme에 대해'</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> size <span class="token operator">=</span> <span class="token punctuation">{</span>
  width<span class="token operator">:</span> <span class="token number">1200</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">630</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> contentType <span class="token operator">=</span> <span class="token string">'image/png'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Image</span><span class="token punctuation">(</span><span class="token punctuation">{</span> params <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> params<span class="token operator">:</span> <span class="token punctuation">{</span> slug<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> post <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://.../posts/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">.</span>slug<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span>
    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ImageResponse</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div
        style<span class="token operator">=</span><span class="token punctuation">{</span>
          fontSize<span class="token operator">:</span> <span class="token number">48</span><span class="token punctuation">,</span>
          background<span class="token operator">:</span> <span class="token string">'white'</span><span class="token punctuation">,</span>
          width<span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
          height<span class="token operator">:</span> <span class="token string">'100%'</span><span class="token punctuation">,</span>
          display<span class="token operator">:</span> <span class="token string">'flex'</span><span class="token punctuation">,</span>
          alignItems<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
          justifyContent<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token operator">></span>
        <span class="token punctuation">{</span>post<span class="token punctuation">.</span>title<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token operator">...</span>size<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="버전-히스토리" tabindex="-1"><a class="header-anchor" href="#버전-히스토리" aria-hidden="true">#</a> 버전 히스토리</h2>
<table>
<thead>
<tr>
<th>Version</th>
<th>변경 사항</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v13.3.0</code></td>
<td><code v-pre>opengraph-image</code> 및 <code v-pre>twitter-image</code> 도입.</td>
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
