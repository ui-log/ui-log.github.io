<template><div><h1 id="nextjs-14-프로젝트-파비콘-애플-아이콘-설정-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14-프로젝트-파비콘-애플-아이콘-설정-방법" aria-hidden="true">#</a> Nextjs 14 프로젝트 파비콘, 애플 아이콘 설정 방법</h1>
<p>파비콘, 아이콘 또는 애플 아이콘 파일 관례를 사용하면 애플리케이션에 아이콘을 설정할 수 있습니다.</p>
<p>웹 브라우저 탭, 휴대폰 홈 화면 및 검색 엔진 결과와 같은 위치에 나타나는 앱 아이콘을 추가하는 데 유용합니다.</p>
<p>앱 아이콘을 설정하는 두 가지 방법이 있습니다:</p>
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
<li>이미지 파일 사용하기 (.ico, .jpg, .png)</li>
<li>아이콘 생성을 위한 코드 사용하기 (.js, .ts, .tsx)</li>
</ul>
<h2 id="이미지-파일-ico-jpg-png" tabindex="-1"><a class="header-anchor" href="#이미지-파일-ico-jpg-png" aria-hidden="true">#</a> 이미지 파일 (.ico, .jpg, .png)</h2>
<p>앱 아이콘을 설정하기 위해 이미지 파일을 사용하세요. 파일명을 favicon, icon, 또는 apple-icon으로 설정하고 이를 /app 디렉토리 안에 넣어두세요. favicon 이미지는 app/ 디렉토리의 최상위에만 위치해야 합니다.</p>
<p>Next.js는 파일을 평가하여 앱의 <code v-pre>head</code> 요소에 적절한 태그를 자동으로 추가할 것입니다.</p>
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
<th>Valid locations</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="#favicon">favicon</a></td>
<td><code v-pre>.ico</code></td>
<td><code v-pre>app/</code></td>
</tr>
<tr>
<td><a href="#icon">icon</a></td>
<td><code v-pre>.ico</code>, <code v-pre>.jpg</code>, <code v-pre>.jpeg</code>, <code v-pre>.png</code>, <code v-pre>.svg</code></td>
<td><code v-pre>app/**/*</code></td>
</tr>
<tr>
<td><a href="#apple-icon">apple-icon</a></td>
<td><code v-pre>.jpg</code>, <code v-pre>.jpeg</code>, <code v-pre>.png</code></td>
<td><code v-pre>app/**/*</code></td>
</tr>
</tbody>
</table>
<h3 id="favicon" tabindex="-1"><a class="header-anchor" href="#favicon" aria-hidden="true">#</a> favicon</h3>
<p><code v-pre>/app</code> 경로 세그먼트에 favicon.ico 이미지 파일을 추가합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"icon"</span> href<span class="token operator">=</span><span class="token string">"/favicon.ico"</span> sizes<span class="token operator">=</span><span class="token string">"any"</span> <span class="token operator">/</span><span class="token operator">></span>
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
<h3 id="아이콘" tabindex="-1"><a class="header-anchor" href="#아이콘" aria-hidden="true">#</a> 아이콘</h3>
<p>아이콘을 추가합니다. (ico|jpg|jpeg|png|svg) 이미지 파일.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"icon"</span> href<span class="token operator">=</span><span class="token string">"/icon?&lt;generated>"</span> type<span class="token operator">=</span><span class="token string">"image/&lt;generated>"</span> sizes<span class="token operator">=</span><span class="token string">"&lt;generated>"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="애플-아이콘" tabindex="-1"><a class="header-anchor" href="#애플-아이콘" aria-hidden="true">#</a> 애플 아이콘</h3>
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
<p>아래는 Markdown 형식으로 table tag를 변경한 내용입니다.</p>
<table>
<thead>
<tr>
<th>Good to know</th>
</tr>
</thead>
<tbody>
<tr>
<td>You can set multiple icons by adding a number suffix to the file name. For example, icon1.png, icon2.png, etc. Numbered files will sort lexically.</td>
</tr>
<tr>
<td>Favicons can only be set in the root /app segment. If you need more granularity, you can use icon.</td>
</tr>
<tr>
<td>The appropriate <code v-pre>link</code> tags and attributes such as rel, href, type, and sizes are determined by the icon type and metadata of the evaluated file. For example, a 32 by 32px .png file will have type=&quot;image/png&quot; and sizes=&quot;32x32&quot; attributes.</td>
</tr>
<tr>
<td>sizes=&quot;any&quot; is added to favicon.ico output to avoid a browser bug where an .ico icon is favored over .svg.</td>
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
<p>이미지 파일을 직접 사용하는 것 외에도 코드를 사용하여 프로그래밍적으로 아이콘을 생성할 수 있습니다.</p>
<p>기본적으로 함수를 내보내는 아이콘 또는 apple-icon 경로를 만들어서 앱 아이콘을 생성해보세요.</p>
<table>
<thead>
<tr>
<th>파일 규칙</th>
<th>지원하는 파일 유형</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>icon</code></td>
<td><code v-pre>.js</code>, <code v-pre>.ts</code>, <code v-pre>.tsx</code></td>
</tr>
<tr>
<td><code v-pre>apple-icon</code></td>
<td><code v-pre>.js</code>, <code v-pre>.ts</code>, <code v-pre>.tsx</code></td>
</tr>
</tbody>
</table>
<p>아이콘을 생성하는 가장 쉬운 방법은 next/og에서 ImageResponse API를 사용하는 것입니다.</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ImageResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/og"</span><span class="token punctuation">;</span>

<span class="token comment">// 라우트 세그먼트 구성</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> runtime <span class="token operator">=</span> <span class="token string">"edge"</span><span class="token punctuation">;</span>

<span class="token comment">// 이미지 메타데이터</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> size <span class="token operator">=</span> <span class="token punctuation">{</span>
  width<span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> contentType <span class="token operator">=</span> <span class="token string">"image/png"</span><span class="token punctuation">;</span>

<span class="token comment">// 이미지 생성</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Icon</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ImageResponse</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span>
      <span class="token comment">// ImageResponse JSX 요소</span>
      <span class="token operator">&lt;</span>div
        style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          fontSize<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
          background<span class="token operator">:</span> <span class="token string">"black"</span><span class="token punctuation">,</span>
          width<span class="token operator">:</span> <span class="token string">"100%"</span><span class="token punctuation">,</span>
          height<span class="token operator">:</span> <span class="token string">"100%"</span><span class="token punctuation">,</span>
          display<span class="token operator">:</span> <span class="token string">"flex"</span><span class="token punctuation">,</span>
          alignItems<span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
          justifyContent<span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
          color<span class="token operator">:</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">></span>
        <span class="token constant">A</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// ImageResponse 옵션</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// 편의를 위해 내보낸 아이콘 크기 메타데이터를 이미지 응답의 너비와 높이로 설정할 수 있습니다.</span>
      <span class="token operator">...</span>size<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"icon"</span> href<span class="token operator">=</span><span class="token string">"/icon?&lt;generated>"</span> type<span class="token operator">=</span><span class="token string">"image/png"</span> sizes<span class="token operator">=</span><span class="token string">"32x32"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>잘 알아두세요
기본적으로 생성된 아이콘은 정적으로 최적화됩니다(빌드 시 생성되고 캐시됨), 동적 함수나 캐시되지 않은 데이터를 사용하지 않는 이상.
generateImageMetadata를 사용하여 동일한 파일에서 여러 아이콘을 생성할 수 있습니다.
파비콘 아이콘을 생성할 수 없습니다. 대신 아이콘이나 favicon.ico 파일을 사용하세요.</p>
</blockquote>
<h3 id="속성들" tabindex="-1"><a class="header-anchor" href="#속성들" aria-hidden="true">#</a> 속성들</h3>
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
<p>기본 내보내기 함수는 다음과 같은 프롭을 받습니다:</p>
<h4 id="params-옵션" tabindex="-1"><a class="header-anchor" href="#params-옵션" aria-hidden="true">#</a> params (옵션)</h4>
<p>루트 세그먼트부터 세그먼트 아이콘 또는 apple-icon까지의 동적 라우트 매개변수 객체를 포함하는 객체입니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Icon</span><span class="token punctuation">(</span><span class="token punctuation">{</span> params <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> params<span class="token operator">:</span> <span class="token punctuation">{</span> slug<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
<h2 id="테이블" tabindex="-1"><a class="header-anchor" href="#테이블" aria-hidden="true">#</a> 테이블</h2>
<table>
<thead>
<tr>
<th>Route</th>
<th>URL</th>
<th><code v-pre>params</code></th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>app/shop/icon.js</code></td>
<td><code v-pre>/shop</code></td>
<td><code v-pre>undefined</code></td>
</tr>
<tr>
<td><code v-pre>app/shop/[slug]/icon.js</code></td>
<td><code v-pre>/shop/1</code></td>
<td><code v-pre>{ slug: '1' }</code></td>
</tr>
<tr>
<td><code v-pre>app/shop/[tag]/[item]/icon.js</code></td>
<td><code v-pre>/shop/1/2</code></td>
<td><code v-pre>{ tag: '1', item: '2' }</code></td>
</tr>
<tr>
<td><code v-pre>app/shop/[...slug]/icon.js</code></td>
<td><code v-pre>/shop/1/2</code></td>
<td><code v-pre>{ slug: ['1', '2'] }</code></td>
</tr>
</tbody>
</table>
<h3 id="반환값" tabindex="-1"><a class="header-anchor" href="#반환값" aria-hidden="true">#</a> 반환값</h3>
<p>기본 내보내기 함수는 Blob | ArrayBuffer | TypedArray | DataView | ReadableStream | Response 중 하나를 반환해야 합니다.</p>
<blockquote>
<p>참고: ImageResponse는 이 반환 유형을 충족합니다.</p>
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
<h3 id="config-exports" tabindex="-1"><a class="header-anchor" href="#config-exports" aria-hidden="true">#</a> Config exports</h3>
<p>아이콘 또는 애플 아이콘 루트에서 size 및 contentType 변수를 내보내어 아이콘의 메타데이터를 선택적으로 구성할 수 있습니다.</p>
<table>
<thead>
<tr>
<th>Option</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="#size">size</a></td>
<td><code v-pre>{ width: number; height: number }</code></td>
</tr>
<tr>
<td><a href="#contenttype">contentType</a></td>
<td><code v-pre>string</code> - <a href="https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/MIME_types#image_types" target="_blank" rel="noopener noreferrer">image MIME type<ExternalLinkIcon/></a> <span><svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" style="width:14px;height:14px"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg></span></td>
</tr>
</tbody>
</table>
<h4 id="size" tabindex="-1"><a class="header-anchor" href="#size" aria-hidden="true">#</a> size</h4>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> size <span class="token operator">=</span> <span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span> height<span class="token operator">:</span> <span class="token number">32</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Icon</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"icon"</span> sizes<span class="token operator">=</span><span class="token string">"32x32"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="contenttype" tabindex="-1"><a class="header-anchor" href="#contenttype" aria-hidden="true">#</a> contentType</h4>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> contentType <span class="token operator">=</span> <span class="token string">"image/png"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Icon</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"icon"</span> type<span class="token operator">=</span><span class="token string">"image/png"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="라우트-세그먼트-구성" tabindex="-1"><a class="header-anchor" href="#라우트-세그먼트-구성" aria-hidden="true">#</a> 라우트 세그먼트 구성</h4>
<p>아이콘 및 애플 아이콘은 페이지 및 레이아웃과 동일한 라우트 세그먼트 구성 옵션을 사용할 수 있는 특수화된 라우트 핸들러입니다.</p>
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
<td><a href="/docs/app/api-reference/file-conventions/route-segment-config#dynamic">dynamic</a></td>
<td><code v-pre>'auto'   | 'force-dynamic' | 'error'    | 'force-static'</code></td>
<td><code v-pre>'auto'</code></td>
</tr>
<tr>
<td><a href="/docs/app/api-reference/file-conventions/route-segment-config#revalidate">revalidate</a></td>
<td><code v-pre>false    | 'force-cache'   | 0          | number</code></td>
<td><code v-pre>false</code></td>
</tr>
<tr>
<td><a href="/docs/app/api-reference/file-conventions/route-segment-config#runtime">runtime</a></td>
<td><code v-pre>'nodejs' | 'edge'</code></td>
<td><code v-pre>'nodejs'</code></td>
</tr>
<tr>
<td><a href="/docs/app/api-reference/file-conventions/route-segment-config#preferredregion">preferredRegion</a></td>
<td><code v-pre>'auto'   | 'global'        | 'home'     | string          | string[]</code></td>
<td><code v-pre>'auto'</code></td>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> runtime <span class="token operator">=</span> <span class="token string">"edge"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Icon</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="version-history" tabindex="-1"><a class="header-anchor" href="#version-history" aria-hidden="true">#</a> Version History</h2>
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
<td><code v-pre>favicon</code>, <code v-pre>icon</code>, and <code v-pre>apple-icon</code> introduced</td>
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
