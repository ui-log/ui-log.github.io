<template><div><h1 id="nextjs-14버전-next-image-사용-방법-정리" tabindex="-1"><a class="header-anchor" href="#nextjs-14버전-next-image-사용-방법-정리" aria-hidden="true">#</a> Nextjs 14버전 next/image 사용 방법 정리</h1>
<p>이 API 참조를 통해 이미지 구성 요소에 사용 가능한 속성 및 구성 옵션을 이해하는 데 도움이 될 것입니다. 기능 및 사용법은 이미지 구성 요소 페이지를 참조해주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Image <span class="token keyword">from</span> <span class="token string">"next/image"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Image src<span class="token operator">=</span><span class="token string">"/profile.png"</span> width<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">500</span><span class="token punctuation">}</span> height<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">500</span><span class="token punctuation">}</span> alt<span class="token operator">=</span><span class="token string">"저자의 사진"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="속성" tabindex="-1"><a class="header-anchor" href="#속성" aria-hidden="true">#</a> 속성</h2>
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
<p>이미지 컴포넌트를 위한 사용 가능한 프롭에 대한 요약입니다:</p>
<table>
<thead>
<tr>
<th>Prop</th>
<th>Example</th>
<th>Type</th>
<th>Status</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="#src">src</a></td>
<td><code v-pre>src=&quot;/profile.png&quot;</code></td>
<td>String</td>
<td>Required</td>
</tr>
<tr>
<td><a href="#width">width</a></td>
<td><code v-pre>width={500}</code></td>
<td>Integer (px)</td>
<td>Required</td>
</tr>
<tr>
<td><a href="#height">height</a></td>
<td><code v-pre>height={500}</code></td>
<td>Integer (px)</td>
<td>Required</td>
</tr>
<tr>
<td><a href="#alt">alt</a></td>
<td><code v-pre>alt=&quot;Picture of the author&quot;</code></td>
<td>String</td>
<td>Required</td>
</tr>
<tr>
<td><a href="#loader">loader</a></td>
<td><code v-pre>loader={imageLoader}</code></td>
<td>Function</td>
<td>-</td>
</tr>
<tr>
<td><a href="#fill">fill</a></td>
<td><code v-pre>fill={true}</code></td>
<td>Boolean</td>
<td>-</td>
</tr>
<tr>
<td><a href="#sizes">sizes</a></td>
<td><code v-pre>sizes=&quot;(max-width: 768px) 100vw, 33vw&quot;</code></td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td><a href="#quality">quality</a></td>
<td><code v-pre>quality={80}</code></td>
<td>Integer (1-100)</td>
<td>-</td>
</tr>
<tr>
<td><a href="#priority">priority</a></td>
<td><code v-pre>priority={true}</code></td>
<td>Boolean</td>
<td>-</td>
</tr>
<tr>
<td><a href="#placeholder">placeholder</a></td>
<td><code v-pre>placeholder=&quot;blur&quot;</code></td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td><a href="#style">style</a></td>
<td><code v-pre>style={{objectFit: &quot;contain&quot;}}</code></td>
<td>Object</td>
<td>-</td>
</tr>
<tr>
<td><a href="#onloadingcomplete">onLoadingComplete</a></td>
<td><code v-pre>onLoadingComplete={img =&gt; done())}</code></td>
<td>Function</td>
<td>Deprecated</td>
</tr>
<tr>
<td><a href="#onload">onLoad</a></td>
<td><code v-pre>onLoad={event =&gt; done())}</code></td>
<td>Function</td>
<td>-</td>
</tr>
<tr>
<td><a href="#onerror">onError</a></td>
<td><code v-pre>onError(event =&gt; fail())</code></td>
<td>Function</td>
<td>-</td>
</tr>
<tr>
<td><a href="#loading">loading</a></td>
<td><code v-pre>loading=&quot;lazy&quot;</code></td>
<td>String</td>
<td>-</td>
</tr>
<tr>
<td><a href="#blurdataurl">blurDataURL</a></td>
<td><code v-pre>blurDataURL=&quot;data:image/jpeg...&quot;</code></td>
<td>String</td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="필수-props" tabindex="-1"><a class="header-anchor" href="#필수-props" aria-hidden="true">#</a> 필수 Props</h2>
<p>이미지 컴포넌트에는 다음 속성이 필요합니다: src, width, height 및 alt.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Image <span class="token keyword">from</span> <span class="token string">"next/image"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>Image src<span class="token operator">=</span><span class="token string">"/profile.png"</span> width<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">500</span><span class="token punctuation">}</span> height<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">500</span><span class="token punctuation">}</span> alt<span class="token operator">=</span><span class="token string">"Picture of the author"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="src" tabindex="-1"><a class="header-anchor" href="#src" aria-hidden="true">#</a> src</h3>
<p>다음 중 하나여야 합니다:</p>
<ul>
<li>정적으로 import된 이미지 파일</li>
<li>경로 문자열. 이는 로더 프롭에 따라 절대 외부 URL이 될 수도 있고 내부 경로가 될 수도 있습니다.</li>
</ul>
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
<p>외부 URL을 사용할 때는 next.config.js의 remotePatterns에 해당 URL을 추가해야 합니다.</p>
<h3 id="너비" tabindex="-1"><a class="header-anchor" href="#너비" aria-hidden="true">#</a> 너비</h3>
<p>너비 속성은 렌더링된 이미지의 픽셀 단위 폭을 나타내므로, 이미지가 얼마나 크게 나타날지에 영향을 줍니다.</p>
<p>정적으로 가져온 이미지 또는 fill 속성을 가진 이미지를 제외하고는 필수 사항입니다.</p>
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
<h3 id="높이" tabindex="-1"><a class="header-anchor" href="#높이" aria-hidden="true">#</a> 높이</h3>
<p>높이 속성은 픽셀 단위로 렌더링된 높이를 나타내므로 이미지가 얼마나 크게 보이는지에 영향을 줍니다.</p>
<p>필수입니다. 정적으로 가져온 이미지나 fill 속성이 있는 이미지를 제외하고는요.</p>
<h3 id="대체-텍스트" tabindex="-1"><a class="header-anchor" href="#대체-텍스트" aria-hidden="true">#</a> 대체 텍스트</h3>
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
<p>alt 속성은 스크린 리더와 검색 엔진을 위해 이미지를 설명하는 데 사용됩니다. 또한 이미지가 비활성화되었거나 이미지를로드하는 동안 오류가 발생한 경우 대체 텍스트로 사용됩니다.</p>
<p>이 페이지의 의미를 바꾸지 않고 이미지를 대체할 수 있는 텍스트를 포함해야 합니다. 이미지를 보충하는 목적이 아니며 이미지 위나 아래의 캡션에서 이미 제공된 정보를 반복해서 제공해서는 안 됩니다.</p>
<p>만약 이미지가 순전히 장식적이거나 사용자를 위해 의도되지 않은 경우, alt 속성은 빈 문자열이어야 합니다 (alt=&quot;&quot;).</p>
<p>더 알아보기</p>
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
<h2 id="선택적인-속성" tabindex="-1"><a class="header-anchor" href="#선택적인-속성" aria-hidden="true">#</a> 선택적인 속성</h2>
<p><code v-pre>Image</code> 컴포넌트는 필수 속성 외에도 다양한 추가 속성을 받습니다. 이 섹션에서는 Image 컴포넌트의 가장 일반적으로 사용되는 속성에 대해 설명합니다. 더 드물게 사용되는 속성에 대한 자세한 내용은 고급 속성 섹션에서 확인할 수 있습니다.</p>
<h3 id="로더" tabindex="-1"><a class="header-anchor" href="#로더" aria-hidden="true">#</a> 로더</h3>
<p>이미지 URL을 해결하는 데 사용되는 사용자 정의 함수입니다.</p>
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
<p>로더는 다음 매개변수를 사용하여 이미지에 대한 URL 문자열을 반환하는 함수입니다:</p>
<ul>
<li>src</li>
<li>width</li>
<li>quality</li>
</ul>
<p>사용자 정의 로더를 사용하는 예시는 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> Image <span class="token keyword">from</span> <span class="token string">"next/image"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">imageLoader</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> src<span class="token punctuation">,</span> width<span class="token punctuation">,</span> quality <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://example.com/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>src<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?w=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>width<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;q=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>quality <span class="token operator">||</span> <span class="token number">75</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Image loader<span class="token operator">=</span><span class="token punctuation">{</span>imageLoader<span class="token punctuation">}</span> src<span class="token operator">=</span><span class="token string">"me.png"</span> alt<span class="token operator">=</span><span class="token string">"Picture of the author"</span> width<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">500</span><span class="token punctuation">}</span> height<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">500</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<blockquote>
<p>좋은 정보: 함수를 수락하는 loader와 같은 속성을 사용하는 경우, 제공된 함수를 직렬화하기 위해 클라이언트 컴포넌트를 사용해야합니다.</p>
</blockquote>
<p>또는 prop을 전달하지 않고 애플리케이션에서 next/image의 각 인스턴스를 구성하려면 next.config.js에서 loaderFile 구성을 사용할 수 있습니다.</p>
<h3 id="fill" tabindex="-1"><a class="header-anchor" href="#fill" aria-hidden="true">#</a> fill</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>fill<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span> <span class="token comment">// {true} | {false}</span>
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
<p>부모 요소가 position: &quot;relative&quot;, position: &quot;fixed&quot; 또는 position: &quot;absolute&quot; 스타일을 가져야 합니다.</p>
<p>이미지에 스타일이 적용되지 않으면 이미지는 컨테이너에 맞게 늘어납니다. 컨테이너에 맞게 편지 모양으로 작은 이미지를 보존하고 가로세로 비율을 유지하려면 object-fit: &quot;contain&quot;을 설정하는 것이 좋습니다.</p>
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
<p>대신, object-fit: &quot;cover&quot; 속성을 사용하면 이미지가 전체 컨테이너를 채우고 종횡비를 유지하기 위해 잘립니다. 올바르게 보이려면 부모 요소에 overflow: &quot;hidden&quot; 스타일을 지정해야 합니다.</p>
<p>자세한 정보는 다음을 참고하세요:</p>
<ul>
<li>position</li>
<li>object-fit</li>
<li>object-position</li>
</ul>
<h3 id="sizes" tabindex="-1"><a class="header-anchor" href="#sizes" aria-hidden="true">#</a> sizes</h3>
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
<p>미디어 쿼리와 비슷한 문자열을 사용하여, 다른 브레이크포인트에서 이미지의 너비 정보를 제공하는 속성입니다. fill을 사용하는 이미지나 반응형 크기를 가진 이미지의 성능에 큰 영향을 미칩니다.</p>
<p>sizes 속성은 이미지 성능과 관련된 두 가지 중요한 목적을 갖고 있습니다:</p>
<ul>
<li>우선, 브라우저가 next/image에서 자동으로 생성된 srcset으로부터 다운로드할 이미지 크기를 결정하는 데 sizes 값을 사용합니다. 브라우저는 이미지의 크기를 아직 페이지에서 알지 못하기 때문에 뷰포트보다 같거나 큰 이미지를 선택합니다. sizes 속성을 사용하면 브라우저에게 이미지가 실제로 전체 화면보다 작을 것임을 알려줄 수 있습니다. fill 속성이 있는 이미지에 sizes 값을 지정하지 않으면 기본값으로 100vw(전체 화면 너비)가 사용됩니다.</li>
<li>두번째로, sizes 속성은 자동으로 생성된 srcset 값을 변경합니다. 만약 sizes 값을 지정하지 않으면 고정 크기 이미지(1x/2x 등)에 적합한 작은 srcset이 생성됩니다. sizes가 정의되어 있다면, 반응형 이미지(640w/750w 등)에 적합한 큰 srcset이 생성됩니다. sizes 속성에 50vw와 같이 뷰포트 너비의 백분율을 나타내는 크기가 포함되어 있다면, srcset은 이보다 작아서 결코 필요하지 않은 값은 포함되지 않습니다.</li>
</ul>
<p>예를 들어, 스타일링이 모바일 기기에서는 전체 너비로, 태블릿에서는 2열 레이아웃으로, 데스크톱 디스플레이에서는 3열 레이아웃으로 이미지를 만들 것을 알고 있다면, 다음과 같은 sizes 속성을 포함해야 합니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Image <span class="token keyword">from</span> <span class="token string">"next/image"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"grid-element"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Image fill src<span class="token operator">=</span><span class="token string">"/example.png"</span> sizes<span class="token operator">=</span><span class="token string">"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시 크기 설정은 성능 지표에 극적인 영향을 줄 수 있습니다. 33vw 크기가 없으면, 서버에서 선택된 이미지는 필요한 것보다 3배 넓어질 수 있습니다. 파일 크기는 너비의 제곱에 비례하기 때문에, 크기가 없으면 사용자는 필요한 것보다 9배 큰 이미지를 다운로드 받게 됩니다.</p>
<p>srcset 및 sizes에 대해 더 알아보려면:</p>
<ul>
<li>web.dev</li>
<li>mdn</li>
</ul>
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
<h3 id="품질" tabindex="-1"><a class="header-anchor" href="#품질" aria-hidden="true">#</a> 품질</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>quality<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">75</span><span class="token punctuation">}</span> <span class="token comment">// {number 1-100}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>최적화된 이미지의 품질입니다. 1에서 100까지의 정수로, 100일수록 품질이 우수하며 파일 크기도 큽니다. 기본값은 75입니다.</p>
<h3 id="우선순위" tabindex="-1"><a class="header-anchor" href="#우선순위" aria-hidden="true">#</a> 우선순위</h3>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>우선순위<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span> <span class="token comment">// {false} | {true}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>참이면, 이미지는 높은 우선순위로 간주되어 프리로드됩니다. 우선순위를 사용하는 이미지에 대해 레이지 로딩은 자동으로 비활성화됩니다.</p>
<p>가장 큰 내용 요소 페인트(LCP)로 감지된 이미지에 우선순위 속성을 사용해야 합니다. 서로 다른 뷰포트 크기에 따라 다른 이미지가 LCP 요소가 될 수 있기 때문에 여러 우선순위 이미지를 가질 수 있습니다.</p>
<p>이미지가 폴드 위에 보이는 경우에만 사용해야 합니다. 기본값은 false입니다.</p>
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
<h3 id="placeholder" tabindex="-1"><a class="header-anchor" href="#placeholder" aria-hidden="true">#</a> placeholder</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>placeholder <span class="token operator">=</span> <span class="token string">"empty"</span><span class="token punctuation">;</span> <span class="token comment">// "empty" | "blur" | "data:image/..."</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이미지 로딩 중에 사용할 플레이스홀더입니다. 가능한 값은 blur, empty, 또는 data:image/.... 기본값은 empty입니다.</p>
<p>blur로 설정할 경우 blurDataURL 속성이 플레이스홀더로 사용됩니다. src가 정적 import에서 가져온 객체이고 가져온 이미지가 .jpg, .png, .webp 또는 .avif인 경우 이미지가 애니메이션이 아닌 것으로 감지되지 않는 한 blurDataURL이 자동으로 채워집니다.</p>
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
<p>동적 이미지의 경우 blurDataURL 속성을 제공해야 합니다. Plaiceholder와 같은 솔루션이 base64 생성에 도움을 줄 수 있습니다.</p>
<p>데이터:image/... 형식인 경우 Data URL이 이미지가 로드될 때 플레이스홀더로 사용됩니다.</p>
<p>비어 있는 경우 이미지가 로드될 때 플레이스홀더가 없으며, 빈 공간만 표시됩니다.</p>
<p>이 기능을 확인해보세요:</p>
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
<li>블러(Blur) 플레이스홀더(placeholder) 데모하기</li>
<li>데이터 URL 플레이스홀더(prop)로 쉼머(Shimmer) 효과 데모하기</li>
<li>blurDataURL prop을 사용하여 색상 효과 데모하기</li>
</ul>
<h2 id="고급-속성" tabindex="-1"><a class="header-anchor" href="#고급-속성" aria-hidden="true">#</a> 고급 속성</h2>
<p>일부 경우에는 좀 더 고급 사용이 필요할 수 있습니다. <code v-pre>Image /</code> 컴포넌트는 선택적으로 다음 고급 속성을 허용합니다.</p>
<h3 id="스타일-style" tabindex="-1"><a class="header-anchor" href="#스타일-style" aria-hidden="true">#</a> 스타일(style)</h3>
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
<p>CSS 스타일을 하위 이미지 요소로 전달할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> imageStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token string">"50%"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">"1px solid #fff"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ProfileImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Image src<span class="token operator">=</span><span class="token string">"..."</span> style<span class="token operator">=</span><span class="token punctuation">{</span>imageStyle<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>필수 너비 및 높이 속성이 스타일링과 상호 작용할 수 있음을 기억하세요. 이미지의 너비를 수정하려는 경우 높이도 자동으로 설정하여 본질적인 종횡 비율을 유지해야 합니다. 그렇지 않으면 이미지가 왜곡될 수 있습니다.</p>
<h3 id="로딩-완료-시" tabindex="-1"><a class="header-anchor" href="#로딩-완료-시" aria-hidden="true">#</a> 로딩 완료 시</h3>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'클라이언트 사용'</span>

<span class="token operator">&lt;</span>Image onLoadingComplete<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">img</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>img<span class="token punctuation">.</span>naturalWidth<span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>경고: Next.js 14부터는 <code v-pre>onLoad</code>을 권장합니다.</p>
</blockquote>
<p>이미지가 완전히로드되고 플레이스홀더가 제거된 후 호출되는 콜백 함수입니다.</p>
<p>콜백 함수는 하나의 인수와 함께 호출됩니다. 그것은 내부 <code v-pre>img</code> 요소에 대한 참조입니다.</p>
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
<blockquote>
<p>잘 알아 두세요: onLoadingComplete과 같은 함수를 받는 프롭을 사용하려면 클라이언트 컴포넌트를 사용하여 제공된 함수를 직렬화해야 합니다.</p>
</blockquote>
<h3 id="onload" tabindex="-1"><a class="header-anchor" href="#onload" aria-hidden="true">#</a> onLoad</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Image onLoad<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>naturalWidth<span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이미지가 완전히로드되고 플레이스홀더가 제거된 후에 호출되는 콜백 함수입니다.</p>
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
<p>콜백 함수는 하나의 인수인 Event와 함께 호출됩니다. Event는 백그라운드의 'img' 요소를 참조하는 target을 가지고 있습니다.</p>
<blockquote>
<p>참고: onLoad와 같은 함수를 받는 props를 사용하려면 제공된 함수를 직렬화하기 위해 Client Components를 사용해야 합니다.</p>
</blockquote>
<h3 id="onerror" tabindex="-1"><a class="header-anchor" href="#onerror" aria-hidden="true">#</a> onError</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Image onError<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
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
<p>이미지 로드에 실패한 경우 호출되는 콜백 함수입니다.</p>
<blockquote>
<p>유의사항: 함수를 인수로 받는 onError와 같은 props를 사용하려면 제공된 함수를 직렬화하기 위해 Client Components를 사용해야 합니다.</p>
</blockquote>
<h3 id="loading" tabindex="-1"><a class="header-anchor" href="#loading" aria-hidden="true">#</a> loading</h3>
<blockquote>
<p>권장사항: 이 속성은 고급 사용 사례를 위한 것으로, 이미지를 eager로 전환하면 일반적으로 성능이 저하됩니다. 대신 이미지를 선순위로 미리로드하도록 하는 priority 속성을 사용하는 것을 권장합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>loading <span class="token operator">=</span> <span class="token string">"lazy"</span><span class="token punctuation">;</span> <span class="token comment">// {lazy} | {eager}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이미지의 로딩 방식입니다. 기본값은 lazy입니다.</p>
<p>lazy로 설정하면 이미지를 뷰포트와의 계산된 거리에 도달할 때까지 로딩을 지연합니다.</p>
<p>eager로 설정하면 즉시 이미지를 로드합니다.</p>
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
<p>확인 더 많이 알아보기 &quot;loading&quot; 어트리뷰트에 대하여.</p>
<h3 id="blurdataurl" tabindex="-1"><a class="header-anchor" href="#blurdataurl" aria-hidden="true">#</a> blurDataURL</h3>
<p>src 이미지가 성공적으로 로드될 때까지 사용되는 플레이스홀더 이미지로 사용할 데이터 URL입니다. placeholder=&quot;blur&quot;와 결합해야만 효과가 있습니다.</p>
<p>반드시 base64로 인코딩된 이미지여야 합니다. 그림이 확대되고 흐릿해지므로 매우 작은 이미지(10px 이하)를 권장합니다. 큰 이미지를 플레이스홀더로 사용하는 것은 애플리케이션 성능에 해를 끼칠 수 있습니다.</p>
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
<p>다음과 같이 해 보세요:</p>
<ul>
<li>기본 blurDataURL 속성 데모</li>
<li>blurDataURL 속성을 사용하여 색상 효과 데모</li>
</ul>
<p>이미지와 일치하는 단색 Data URL을 생성할 수도 있습니다.</p>
<h3 id="최적화되지-않음" tabindex="-1"><a class="header-anchor" href="#최적화되지-않음" aria-hidden="true">#</a> 최적화되지 않음</h3>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>unoptimized <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span> <span class="token comment">// {false} | {true}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>만일 true이면, 소스 이미지는 품질, 크기 또는 형식을 변경하지 않고 그대로 제공됩니다. 기본값은 false입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Image <span class="token keyword">from</span> <span class="token string">"next/image"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">UnoptimizedImage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Image <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> unoptimized <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Next.js 12.3.0부터 이 속성은 다음 구성을 사용하여 next.config.js를 업데이트함으로써 모든 이미지에 할당할 수 있습니다:```</p>
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
  <span class="token literal-property property">images</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">unoptimized</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="기타-속성" tabindex="-1"><a class="header-anchor" href="#기타-속성" aria-hidden="true">#</a> 기타 속성</h3>
<p><code v-pre>Image /</code> 컴포넌트의 기타 속성은 다음을 제외하고 하위 img 요소에 전달됩니다:</p>
<ul>
<li>srcSet. 대신 Device Sizes를 사용하세요.</li>
<li>decoding. 항상 &quot;async&quot;입니다.</li>
</ul>
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
<h2 id="구성-옵션" tabindex="-1"><a class="header-anchor" href="#구성-옵션" aria-hidden="true">#</a> 구성 옵션</h2>
<p>props 외에도 next.config.js에서 Image 구성 요소를 구성할 수 있습니다. 다음 옵션을 사용할 수 있습니다:</p>
<h3 id="remotepatterns" tabindex="-1"><a class="header-anchor" href="#remotepatterns" aria-hidden="true">#</a> remotePatterns</h3>
<p>악의적인 사용자로부터 애플리케이션을 보호하려면 외부 이미지 사용을 위한 구성이 필요합니다. 이를 통해 Next.js 이미지 최적화 API에서는 귀하의 계정에서만 제공된 외부 이미지만 제공됩니다. 외부 이미지는 다음과 같이 next.config.js 파일의 remotePatterns 속성을 사용하여 구성할 수 있습니다:</p>
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
  <span class="token literal-property property">images</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">remotePatterns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">protocol</span><span class="token operator">:</span> <span class="token string">"https"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">hostname</span><span class="token operator">:</span> <span class="token string">"example.com"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">"/account123/**"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>이런 것을 알면 좋겠죠: 위의 예제는 next/image의 src 속성이 https://example.com/account123/로 시작해야 함을 보증합니다. 다른 프로토콜, 호스트명, 포트 또는 일치하지 않는 경로는 400 Bad Request로 응답합니다.</p>
</blockquote>
<p>다음은 next.config.js 파일에서 remotePatterns 속성의 또 다른 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">images</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">remotePatterns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">protocol</span><span class="token operator">:</span> <span class="token string">"https"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">hostname</span><span class="token operator">:</span> <span class="token string">"**.example.com"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<blockquote>
<p>유용한 정보: 위의 예제는 next/image의 src 속성이 https://img1.example.com 또는 https://me.avatar.example.com로 시작해야 함을 보장합니다. 다른 프로토콜, 포트 또는 일치하지 않는 호스트 이름은 400 Bad Request로 응답합니다.</p>
</blockquote>
<p>와일드카드 패턴은 경로명 및 호스트 이름 모두에 사용할 수 있으며 다음과 같은 구문을 가지고 있습니다:</p>
<ul>
<li>
<ul>
<li>하나의 경로 세그먼트 또는 서브도메인과 일치</li>
</ul>
</li>
<li>** 끝의 경로 세그먼트 또는 처음의 서브도메인의 모든 수와 일치</li>
</ul>
<p>** 구문은 패턴의 중간에 작동하지 않습니다.</p>
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
<blockquote>
<p>알아 두면 좋아요: 프로토콜, 포트 또는 경로를 생략할 경우, 와일드카드 **가 함의됩니다. 의도하지 않은 URL을 최적화할 가능성이 있기 때문에 권장되지 않습니다.</p>
</blockquote>
<h3 id="도메인" tabindex="-1"><a class="header-anchor" href="#도메인" aria-hidden="true">#</a> 도메인</h3>
<blockquote>
<p>경고: Next.js 14 이후에 사용이 중단되어 악의적 사용자로부터 애플리케이션을 보호하기 위해 엄격한 remotePatterns를 선호합니다. 도메인은 해당 도메인에서 제공되는 모든 콘텐츠를 소유하는 경우에만 사용하세요.</p>
</blockquote>
<p>remotePatterns와 유사하게, 도메인 구성은 외부 이미지의 허용된 호스트 이름 목록을 제공하는 데 사용될 수 있습니다.</p>
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
<p>그러나 도메인 구성은 와일드카드 패턴 일치를 지원하지 않으며 프로토콜, 포트 또는 경로 이름을 제한할 수 없습니다.</p>
<p>다음은 <code v-pre>next.config.js</code> 파일의 domains 속성 예제입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">images</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">domains</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"assets.acme.com"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="loaderfile" tabindex="-1"><a class="header-anchor" href="#loaderfile" aria-hidden="true">#</a> loaderFile</h3>
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
<p>만약 Next.js 내장 이미지 최적화 API를 사용하는 대신 클라우드 공급업체를 사용하여 이미지를 최적화하고 싶다면, 다음과 같이 next.config.js에서 loaderFile을 구성할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">images</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">"custom"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">loaderFile</span><span class="token operator">:</span> <span class="token string">"./my/image/loader.js"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이것은 당신의 Next.js 애플리케이션 루트에 상대적인 파일을 가리켜야 합니다. 파일은 문자열을 반환하는 default 함수를 내보내야 합니다. 예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">myImageLoader</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> src<span class="token punctuation">,</span> width<span class="token punctuation">,</span> quality <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://example.com/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>src<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?w=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>width<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;q=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>quality <span class="token operator">||</span> <span class="token number">75</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<p>대신, loader prop을 사용하여 각 next/image 인스턴스를 구성할 수도 있습니다.</p>
<p>예시:</p>
<ul>
<li>사용자 정의 이미지 로더 구성</li>
</ul>
<blockquote>
<p>알아두면 좋은 점: 함수를 허용하는 사용자 정의 이미지 로더 파일을 사용하려면, 제공된 함수를 직렬화하기 위해 클라이언트 구성 요소를 사용해야 합니다.</p>
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
<h2 id="고급" tabindex="-1"><a class="header-anchor" href="#고급" aria-hidden="true">#</a> 고급</h2>
<p>다음 구성은 고급 사용 사례를 위한 것으로 일반적으로 필요하지 않습니다. 아래 속성을 구성하려면 나중에 Next.js의 기본 설정에 대한 변경 사항이 재정의됩니다.</p>
<h3 id="devicesizes" tabindex="-1"><a class="header-anchor" href="#devicesizes" aria-hidden="true">#</a> deviceSizes</h3>
<p>사용자의 예상 기기 너비를 알고 있다면, next.config.js 파일에서 deviceSizes 속성을 사용하여 기기 너비 브레이크포인트 목록을 지정할 수 있습니다. 다음/image 컴포넌트가 sizes 속성을 사용할 때 이러한 너비는 사용자의 기기에 맞는 올바른 이미지가 제공되도록 합니다.</p>
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
<p>만약 설정이 제공되지 않으면, 아래의 기본 설정이 사용됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">images</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">deviceSizes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">640</span><span class="token punctuation">,</span> <span class="token number">750</span><span class="token punctuation">,</span> <span class="token number">828</span><span class="token punctuation">,</span> <span class="token number">1080</span><span class="token punctuation">,</span> <span class="token number">1200</span><span class="token punctuation">,</span> <span class="token number">1920</span><span class="token punctuation">,</span> <span class="token number">2048</span><span class="token punctuation">,</span> <span class="token number">3840</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="imagesizes" tabindex="-1"><a class="header-anchor" href="#imagesizes" aria-hidden="true">#</a> imageSizes</h3>
<p>다음 next.config.js 파일의 images.imageSizes 속성을 사용하여 이미지 폭 목록을 지정할 수 있습니다. 이러한 폭은 이미지 srcset을 생성하는 데 사용되는 크기 배열과 결합됩니다.</p>
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
<p>두 개의 별도 목록이 있는 이유는 imageSizes는 sizes 속성을 제공하는 이미지에만 사용되기 때문입니다. sizes 속성은 이미지가 화면의 전체 너비보다 작음을 나타내며, imageSizes의 크기는 deviceSizes의 가장 작은 크기보다 작아야 합니다.</p>
<p>구성이 제공되지 않으면 아래 기본값이 사용됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">images</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">imageSizes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">48</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">96</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">256</span><span class="token punctuation">,</span> <span class="token number">384</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="형식" tabindex="-1"><a class="header-anchor" href="#형식" aria-hidden="true">#</a> 형식</h3>
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
<p>기본 이미지 최적화 API는 요청의 Accept 헤더를 통해 브라우저가 지원하는 이미지 형식을 자동으로 감지합니다.</p>
<p>Accept 헤더가 설정된 형식 중 하나 이상과 일치하는 경우, 배열에서 첫 번째 일치 항목이 사용됩니다. 따라서 배열의 순서가 중요합니다. 일치하는 항목이 없는 경우(또는 소스 이미지가 애니메이션이면), 이미지 최적화 API는 원본 이미지의 형식으로 되돌아갑니다.</p>
<p>설정이 제공되지 않은 경우, 아래 기본값이 사용됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">images</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">formats</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"image/webp"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<p>다음 구성을 통해 AVIF 지원을 활성화할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">images</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">formats</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"image/avif"</span><span class="token punctuation">,</span> <span class="token string">"image/webp"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>참고:
AVIF는 일반적으로 WebP와 비교하여 20% 더 오래 인코딩되지만 20% 더 작게 압축됩니다. 이는 이미지가 요청될 때 일반적으로 더 느릴 것이고, 그 이후 캐시된 요청은 더 빨라질 것을 의미합니다.
만약 Next.js 앞에 프록시/CDN를 사용하여 자체 호스팅하는 경우, 프록시를 구성하여 Accept 헤더를 전달해야 합니다.</p>
</blockquote>
<h2 id="캐싱-동작" tabindex="-1"><a class="header-anchor" href="#캐싱-동작" aria-hidden="true">#</a> 캐싱 동작</h2>
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
<p>기본 로더의 캐싱 알고리즘은 다음과 같습니다. 다른 로더의 경우에는 클라우드 제공 업체의 문서를 참조해주세요.</p>
<p>이미지는 요청 시 동적으로 최적화되어 <code v-pre>distDir</code>/cache/images 디렉토리에 저장됩니다. 최적화된 이미지 파일은 만료 기간이 도달할 때까지 후속 요청에 대해 제공됩니다. 캐시된 만료된 파일과 일치하는 요청이 올 때 만료된 이미지가 즉시 제공되며, 이미지는 백그라운드에서 다시 최적화되어 새로운 만료 날짜로 캐시에 저장됩니다(재확인이라고도 함).</p>
<p>이미지의 캐시 상태는 x-nextjs-cache 응답 헤더의 값으로 확인할 수 있습니다. 가능한 값은 다음과 같습니다:</p>
<ul>
<li>MISS - 경로가 캐시에 없음 (최대 한 번 발생하며, 첫 방문 시에 발생)</li>
<li>STALE - 경로가 캐시에 있지만 다시 확인 시간을 초과하여 백그라운드에서 업데이트됩니다</li>
<li>HIT - 경로가 캐시에 있으며 다시 확인 시간을 초과하지 않음</li>
</ul>
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
<p>만료(혹은 정확히는 최대 유효 기간)은 minimumCacheTTL 설정이나 상위 이미지의 Cache-Control 헤더 중 더 큰 값을 기준으로 정의됩니다. 구체적으로는 Cache-Control 헤더의 max-age 값이 사용됩니다. 만약 s-maxage와 max-age 둘 다 발견된다면 s-maxage가 우선합니다. max-age는 CDNs와 브라우저를 포함한 하류 클라이언트로 전달됩니다.</p>
<ul>
<li>상위 이미지에 Cache-Control 헤더가 포함되지 않거나 값이 매우 낮을 때 캐시 기간을 늘리기 위해 minimumCacheTTL을 구성할 수 있습니다.</li>
<li>deviceSizes와 imageSizes를 구성하여 생성 가능한 이미지 수를 줄일 수 있습니다.</li>
<li>formats를 구성하여 여러 포맷을 사용하는 대신 단일 이미지 포맷을 선호하도록 설정할 수 있습니다.</li>
</ul>
<h3 id="minimumcachettl" tabindex="-1"><a class="header-anchor" href="#minimumcachettl" aria-hidden="true">#</a> minimumCacheTTL</h3>
<p>캐시된 최적화된 이미지의 TTL(유효 시간)을 초 단위로 구성할 수 있습니다. 많은 경우 파일 내용을 자동으로 해싱하고 immutable Cache-Control 헤더를 사용하여 이미지를 영구적으로 캐시하는 Static Image Import를 사용하는 것이 더 좋습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>모듈<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">이미지</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">minimumCacheTTL</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>최적화된 이미지의 만료(또는 최대 연령)는 minimumCacheTTL 또는 상위 이미지 Cache-Control 헤더 중 더 큰 값에 의해 정의됩니다.</p>
<p>이미지별로 캐싱 동작을 변경해야 하는 경우, 상위 이미지에 Cache-Control 헤더를 설정하기 위해 헤더를 구성할 수 있습니다(예: /some-asset.jpg, /_next/image 그 자체가 아닌).</p>
<p>현재 캐시를 무효화하는 메커니즘은 없으므로 minimumCacheTTL을 낮게 유지하는 것이 좋습니다. 그렇지 않으면 src 속성을 수동으로 변경하거나 <code v-pre>distDir</code>/cache/images를 수동으로 삭제해야 할 수 있습니다.</p>
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
<h3 id="disablestaticimages" tabindex="-1"><a class="header-anchor" href="#disablestaticimages" aria-hidden="true">#</a> disableStaticImages</h3>
<p>기본 동작은 <code v-pre>./icon.png</code>와 같은 정적 파일을 가져와서 그것을 src 속성에 전달할 수 있도록 합니다.</p>
<p>어떤 경우에는 import가 다르게 작동하기를 기대하는 다른 플러그인과 충돌한다면 이 기능을 비활성화하고 싶을 수 있습니다.</p>
<p>다음의 next.config.js 내에서 정적 이미지 import를 비활성화할 수 있습니다:</p>
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
  <span class="token literal-property property">images</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">disableStaticImages</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dangerouslyallowsvg" tabindex="-1"><a class="header-anchor" href="#dangerouslyallowsvg" aria-hidden="true">#</a> dangerouslyAllowSVG</h3>
<p>기본 로더는 몇 가지 이유로 SVG 이미지를 최적화하지 않습니다. 첫째, SVG는 벡터 형식이므로 손실 없이 크기를 조절할 수 있습니다. 둘째, SVG는 HTML/CSS와 많은 기능을 공유하여 올바른 콘텐츠 보안 정책 (CSP) 헤더가 없을 경우 취약점으로 이어질 수 있습니다.</p>
<p>따라서 src 프로퍼티가 SVG임을 알고 있는 경우 미최적화 prop을 사용하는 것이 좋습니다. src가 &quot;.svg&quot;로 끝나는 경우 이것은 자동으로 발생합니다.```</p>
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
<p>그러나, 기본 이미지 최적화 API를 사용하여 SVG 이미지를 제공해야 하는 경우, next.config.js 파일 내에서 dangerouslyAllowSVG를 설정할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">images</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">dangerouslyAllowSVG</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">contentDispositionType</span><span class="token operator">:</span> <span class="token string">"attachment"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">contentSecurityPolicy</span><span class="token operator">:</span> <span class="token string">"default-src 'self'; script-src 'none'; sandbox;"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또한, 이미지를 다운로드하도록 브라우저를 강제하는 contentDispositionType를 설정하고, 이미지에 포함된 스크립트의 실행을 방지하기 위해 contentSecurityPolicy를 설정하는 것이 강력히 권장되어집니다.</p>
<h2 id="애니메이션-이미지" tabindex="-1"><a class="header-anchor" href="#애니메이션-이미지" aria-hidden="true">#</a> 애니메이션 이미지</h2>
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
<p>기본 로더는 애니메이션 이미지에 대해 이미지 최적화를 자동으로 우회하고 이미지를 그대로 제공합니다.</p>
<p>애니메이션 파일의 자동 감지는 GIF, APNG 및 WebP를 지원하며 최선을 다하고 있습니다. 특정 애니메이션 이미지에 대해 이미지 최적화를 명시적으로 우회하려면 unoptimized prop을 사용하십시오.</p>
<h2 id="반응형-이미지" tabindex="-1"><a class="header-anchor" href="#반응형-이미지" aria-hidden="true">#</a> 반응형 이미지</h2>
<p>기본 생성된 srcset에는 다른 디바이스 화소 비율을 지원하기 위해 1x 및 2x 이미지가 포함되어 있습니다. 그러나 뷰포트와 함께 늘어나는 반응형 이미지를 렌더링하려면 sizes와 스타일(또는 className)을 설정해야 할 수 있습니다.</p>
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
<p>다음 방법 중 하나를 사용하여 반응형 이미지를 렌더링할 수 있어요.</p>
<h3 id="정적-가져오기를-사용한-반응형-이미지" tabindex="-1"><a class="header-anchor" href="#정적-가져오기를-사용한-반응형-이미지" aria-hidden="true">#</a> 정적 가져오기를 사용한 반응형 이미지</h3>
<p>소스 이미지가 동적이 아닌 경우 정적으로 가져와 반응형 이미지를 만들 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Image <span class="token keyword">from</span> <span class="token string">"next/image"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> me <span class="token keyword">from</span> <span class="token string">"../photos/me.jpg"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Author</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Image
      src<span class="token operator">=</span><span class="token punctuation">{</span>me<span class="token punctuation">}</span>
      alt<span class="token operator">=</span><span class="token string">"Picture of the author"</span>
      sizes<span class="token operator">=</span><span class="token string">"100vw"</span>
      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">"100%"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">"auto"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>해보세요:</p>
<ul>
<li>이미지가 뷰포트에 반응하는 데모</li>
</ul>
<h3 id="종횡비를-유지하는-반응형-이미지" tabindex="-1"><a class="header-anchor" href="#종횡비를-유지하는-반응형-이미지" aria-hidden="true">#</a> 종횡비를 유지하는 반응형 이미지</h3>
<p>소스 이미지가 동적이거나 원격 URL인 경우, 반응형 이미지의 올바른 종횡비를 설정하기 위해 너비와 높이를 제공해야 합니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Image <span class="token keyword">from</span> <span class="token string">"next/image"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> photoUrl <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Image
      src<span class="token operator">=</span><span class="token punctuation">{</span>photoUrl<span class="token punctuation">}</span>
      alt<span class="token operator">=</span><span class="token string">"Picture of the author"</span>
      sizes<span class="token operator">=</span><span class="token string">"100vw"</span>
      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">"100%"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">"auto"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span>
      width<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">500</span><span class="token punctuation">}</span>
      height<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">300</span><span class="token punctuation">}</span>
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>해보세요:</p>
<ul>
<li>뷰포트에 반응하는 이미지 데모</li>
</ul>
<h3 id="채움이-적용된-반응형-이미지" tabindex="-1"><a class="header-anchor" href="#채움이-적용된-반응형-이미지" aria-hidden="true">#</a> 채움이 적용된 반응형 이미지</h3>
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
<p>만약 비율을 모른다면, fill 속성을 설정하고 부모 요소에 position: relative를 설정해야 합니다. 원하는 스트레치 또는 크롭 동작에 따라 object-fit 스타일을 선택적으로 설정할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Image <span class="token keyword">from</span> <span class="token string">'next/image'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> photoUrl <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'relative'</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'500px'</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'300px'</span> <span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Image
        src<span class="token operator">=</span><span class="token punctuation">{</span>photoUrl<span class="token punctuation">}</span>
        alt<span class="token operator">=</span><span class="token string">"Picture of the author"</span>
        sizes<span class="token operator">=</span><span class="token string">"500px"</span>
        fill
        style<span class="token operator">=</span><span class="token punctuation">{</span>
          <span class="token literal-property property">objectFit</span><span class="token operator">:</span> <span class="token string">'contain'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>해보세요:</p>
<ul>
<li>fill 속성 데모하기</li>
</ul>
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
<h2 id="테마-감지-css" tabindex="-1"><a class="header-anchor" href="#테마-감지-css" aria-hidden="true">#</a> 테마 감지 CSS</h2>
<p>만약 당신이 밝은 모드와 어두운 모드를 위해 서로 다른 이미지를 보여주고 싶다면, CSS 미디어 쿼리를 기반으로 올바른 이미지를 드러내는 새로운 컴포넌트를 만들 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>imgDark <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

@<span class="token function">media</span> <span class="token punctuation">(</span><span class="token parameter">prefers<span class="token operator">-</span>color<span class="token operator">-</span>scheme<span class="token operator">:</span> dark</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span>imgLight <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">.</span>imgDark <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> unset<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">"./theme-image.module.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Image<span class="token punctuation">,</span> <span class="token punctuation">{</span> ImageProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/image"</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Props</span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span>ImageProps<span class="token punctuation">,</span> <span class="token string">"src"</span> <span class="token operator">|</span> <span class="token string">"priority"</span> <span class="token operator">|</span> <span class="token string">"loading"</span><span class="token operator">></span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  srcLight<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  srcDark<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ThemeImage</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token operator">:</span> Props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> srcLight<span class="token punctuation">,</span> srcDark<span class="token punctuation">,</span> <span class="token operator">...</span>rest <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Image <span class="token punctuation">{</span><span class="token operator">...</span>rest<span class="token punctuation">}</span> src<span class="token operator">=</span><span class="token punctuation">{</span>srcLight<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>imgLight<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Image <span class="token punctuation">{</span><span class="token operator">...</span>rest<span class="token punctuation">}</span> src<span class="token operator">=</span><span class="token punctuation">{</span>srcDark<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>imgDark<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<blockquote>
<p>좋은 정보: loading=&quot;lazy&quot;의 기본 동작은 올바른 이미지만 로드되도록 보장합니다. 우선순위나 loading=&quot;eager&quot;을 사용할 수 없습니다. 왜냐하면 두 이미지가 모두 로드되기 때문입니다. 대신 fetchPriority=&quot;high&quot;을 사용할 수 있습니다.</p>
</blockquote>
<p>해보세요:</p>
<ul>
<li>데모 라이트/다크 모드 테마 감지</li>
</ul>
<h2 id="getimageprops" tabindex="-1"><a class="header-anchor" href="#getimageprops" aria-hidden="true">#</a> getImageProps</h2>
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
<p>더 복잡한 사용 사례의 경우, getImageProps()를 호출하여 기본 'img' 요소에 전달될 속성을 가져올 수 있으며, 대신 다른 컴포넌트, 스타일, 캔버스 등으로 전달할 수 있습니다.</p>
<p>또한 React useState()를 호출하지 않기 때문에 성능이 향상될 수 있지만, placeholder 속성과 함께 사용할 수 없습니다. 왜냐하면 placeholder가 제거되지 않기 때문입니다.</p>
<h3 id="테마-감지-이미지" tabindex="-1"><a class="header-anchor" href="#테마-감지-이미지" aria-hidden="true">#</a> 테마 감지 이미지</h3>
<p>라이트 및 다크 모드에 대해 다른 이미지를 표시하려면 사용자 선호 색상 체계에 기반한 다른 이미지를 표시하려면 'picture' 요소를 사용할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getImageProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/image"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> common <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">alt</span><span class="token operator">:</span> <span class="token string">"테마 예제"</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">400</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">srcSet</span><span class="token operator">:</span> dark <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getImageProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>common<span class="token punctuation">,</span> <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">"/dark.png"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">srcSet</span><span class="token operator">:</span> light<span class="token punctuation">,</span> <span class="token operator">...</span>rest <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getImageProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>common<span class="token punctuation">,</span> <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">"/light.png"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>picture<span class="token operator">></span>
      <span class="token operator">&lt;</span>source media<span class="token operator">=</span><span class="token string">"(prefers-color-scheme: dark)"</span> srcSet<span class="token operator">=</span><span class="token punctuation">{</span>dark<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>source media<span class="token operator">=</span><span class="token string">"(prefers-color-scheme: light)"</span> srcSet<span class="token operator">=</span><span class="token punctuation">{</span>light<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>img <span class="token punctuation">{</span><span class="token operator">...</span>rest<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>picture<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="아트-디렉션" tabindex="-1"><a class="header-anchor" href="#아트-디렉션" aria-hidden="true">#</a> 아트 디렉션</h3>
<p>모바일과 데스크탑에 각각 다른 이미지를 표시하려면, 때로는 아트 디렉션이라고도 불리는 것이 있습니다. getImageProps()에 서로 다른 src, width, height, 그리고 quality 속성을 제공할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getImageProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/image"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> common <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">alt</span><span class="token operator">:</span> <span class="token string">"아트 디렉션 예제"</span><span class="token punctuation">,</span> <span class="token literal-property property">sizes</span><span class="token operator">:</span> <span class="token string">"100vw"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">srcSet</span><span class="token operator">:</span> desktop <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getImageProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>common<span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1440</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">875</span><span class="token punctuation">,</span>
    <span class="token literal-property property">quality</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
    <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">"/desktop.jpg"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">srcSet</span><span class="token operator">:</span> mobile<span class="token punctuation">,</span> <span class="token operator">...</span>rest <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getImageProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>common<span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">750</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1334</span><span class="token punctuation">,</span>
    <span class="token literal-property property">quality</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span>
    <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">"/mobile.jpg"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>picture<span class="token operator">></span>
      <span class="token operator">&lt;</span>source media<span class="token operator">=</span><span class="token string">"(min-width: 1000px)"</span> srcSet<span class="token operator">=</span><span class="token punctuation">{</span>desktop<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>source media<span class="token operator">=</span><span class="token string">"(min-width: 500px)"</span> srcSet<span class="token operator">=</span><span class="token punctuation">{</span>mobile<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>img <span class="token punctuation">{</span><span class="token operator">...</span>rest<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">"100%"</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">"auto"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>picture<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h3 id="배경-css" tabindex="-1"><a class="header-anchor" href="#배경-css" aria-hidden="true">#</a> 배경 CSS</h3>
<p>srcSet 문자열을 이미지 최적화를 위해 image-set() CSS 함수로 변환할 수도 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getImageProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/image"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getBackgroundImage</span><span class="token punctuation">(</span>srcSet <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> imageSet <span class="token operator">=</span> srcSet
    <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">", "</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">[</span>url<span class="token punctuation">,</span> dpi<span class="token punctuation">]</span> <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">url("</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">") </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>dpi<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">", "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">image-set(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>imageSet<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> srcSet <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getImageProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">alt</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">"/img.png"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> backgroundImage <span class="token operator">=</span> <span class="token function">getBackgroundImage</span><span class="token punctuation">(</span>srcSet<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">"100vh"</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">"100vw"</span><span class="token punctuation">,</span> backgroundImage <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>main style<span class="token operator">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="알려진-브라우저-버그" tabindex="-1"><a class="header-anchor" href="#알려진-브라우저-버그" aria-hidden="true">#</a> 알려진 브라우저 버그</h2>
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
<p>다음/이미지 컴포넌트는 브라우저 기본 지연 로딩을 사용합니다. 이는 Safari 15.4 이전의 구버전 브라우저에서 즉시 로딩으로 대체될 수 있습니다. 블러 업 플레이스홀더를 사용할 때, Safari 12 이전의 구버전 브라우저는 빈 플레이스홀더로 대체됩니다. 너비/높이가 자동으로 설정된 스타일을 사용할 때, 종횡비를 유지하지 않는 Safari 15 이전의 구버전 브라우저에서 레이아웃 변화가 발생할 수 있습니다. 자세한 내용은 이 MDN 비디오를 참조하세요.</p>
<ul>
<li>Safari 15 - 16.3은 로딩 중에 회색 테두리를 표시합니다. Safari 16.4에서 이 문제가 해결되었습니다. 가능한 해결책:
<ul>
<li>CSS @supports (font: -apple-system-body) and (-webkit-appearance: none) { img[loading=&quot;lazy&quot;] { clip-path: inset(0.6px) } }를 사용합니다.</li>
<li>이미지가 위에 있으면 우선순위를 사용합니다.</li>
<li>Firefox 67+는 로딩 중에 하얀 배경을 표시합니다. 가능한 해결책:</li>
<li>AVIF 형식 활성화</li>
<li>플레이스홀더를 사용합니다.</li>
</ul>
</li>
</ul>
<h2 id="버전-역사" tabindex="-1"><a class="header-anchor" href="#버전-역사" aria-hidden="true">#</a> 버전 역사</h2>
<table>
<thead>
<tr>
<th>Version</th>
<th>Changes</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v14.1.0</code></td>
<td><code v-pre>getImageProps()</code>이 안정화되었습니다.</td>
</tr>
<tr>
<td><code v-pre>v14.0.0</code></td>
<td><code v-pre>onLoadingComplete</code> 프로퍼티 및 <code v-pre>domains</code> 구성이 폐기되었습니다.</td>
</tr>
<tr>
<td><code v-pre>v13.4.14</code></td>
<td><code v-pre>placeholder</code> 프로퍼티가 <code v-pre>data:/image...</code>를 지원합니다.</td>
</tr>
<tr>
<td><code v-pre>v13.2.0</code></td>
<td><code v-pre>contentDispositionType</code> 구성이 추가되었습니다.</td>
</tr>
<tr>
<td><code v-pre>v13.0.6</code></td>
<td><code v-pre>ref</code> 프로퍼티가 추가되었습니다.</td>
</tr>
<tr>
<td><code v-pre>v13.0.0</code></td>
<td><code v-pre>next/image</code> 가져오기가 <code v-pre>next/legacy/image</code>로 이름이 변경되었습니다. <code v-pre>next/future/image</code> 가져오기가 <code v-pre>next/image</code>로 이름이 변경되었습니다. <code v-pre>codemod</code>를 사용하여 가져오기를 안전하고 자동으로 변경할 수 있습니다. <code v-pre>span</code> 래퍼가 제거되었습니다. <code v-pre>layout</code>, <code v-pre>objectFit</code>, <code v-pre>objectPosition</code>, <code v-pre>lazyBoundary</code>, <code v-pre>lazyRoot</code> 프로퍼티가 제거되었습니다. <code v-pre>alt</code>이 필요합니다. <code v-pre>onLoadingComplete</code>은 <code v-pre>img</code> 요소에 대한 참조를 수신합니다. 내장 로더 구성이 제거되었습니다.</td>
</tr>
<tr>
<td><code v-pre>v12.3.0</code></td>
<td><code v-pre>remotePatterns</code> 및 <code v-pre>unoptimized</code> 구성이 안정화되었습니다.</td>
</tr>
<tr>
<td><code v-pre>v12.2.0</code></td>
<td>실험적인 <code v-pre>remotePatterns</code> 및 실험적인 <code v-pre>unoptimized</code> 구성이 추가되었습니다. <code v-pre>layout=&quot;raw&quot;</code>가 제거되었습니다.</td>
</tr>
<tr>
<td><code v-pre>v12.1.1</code></td>
<td><code v-pre>style</code> 프로퍼티가 추가되었습니다. <code v-pre>layout=&quot;raw&quot;</code>에 대한 실험적인 지원이 추가되었습니다.</td>
</tr>
<tr>
<td><code v-pre>v12.1.0</code></td>
<td><code v-pre>dangerouslyAllowSVG</code> 및 <code v-pre>contentSecurityPolicy</code> 구성이 추가되었습니다.</td>
</tr>
<tr>
<td><code v-pre>v12.0.9</code></td>
<td><code v-pre>lazyRoot</code> 프로퍼티가 추가되었습니다.</td>
</tr>
<tr>
<td><code v-pre>v12.0.0</code></td>
<td><code v-pre>formats</code> 구성이 추가되었습니다. AVIF 지원이 추가되었습니다. 래퍼 <code v-pre>div</code>가 <code v-pre>span</code>으로 변경되었습니다.</td>
</tr>
<tr>
<td><code v-pre>v11.1.0</code></td>
<td><code v-pre>onLoadingComplete</code> 및 <code v-pre>lazyBoundary</code> 프로퍼티가 추가되었습니다.</td>
</tr>
<tr>
<td><code v-pre>v11.0.0</code></td>
<td>정적 가져오기를 위한 <code v-pre>src</code> 프로퍼티 지원. <code v-pre>placeholder</code> 프로퍼티 추가. <code v-pre>blurDataURL</code> 프로퍼티 추가.</td>
</tr>
<tr>
<td><code v-pre>v10.0.5</code></td>
<td><code v-pre>loader</code> 프로퍼티가 추가되었습니다.</td>
</tr>
<tr>
<td><code v-pre>v10.0.1</code></td>
<td><code v-pre>layout</code> 프로퍼티가 추가되었습니다.</td>
</tr>
<tr>
<td><code v-pre>v10.0.0</code></td>
<td><code v-pre>next/image</code>가 도입되었습니다.</td>
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
