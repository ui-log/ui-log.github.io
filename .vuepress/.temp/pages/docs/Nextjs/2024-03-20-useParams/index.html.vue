<template><div><h1 id="nextjs-14-클라이언트-컴포넌트에서-route-동적-params-가져오는-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14-클라이언트-컴포넌트에서-route-동적-params-가져오는-방법" aria-hidden="true">#</a> Nextjs 14 클라이언트 컴포넌트에서 route 동적 params 가져오는 방법</h1>
<p>useParams는 현재 URL에 의해 채워진 route의 동적 매개변수를 읽을 수 있게 해주는 클라이언트 컴포넌트 후크입니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ExampleClientComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useParams</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span> tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> item<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Route -> /shop/[tag]/[item]</span>
  <span class="token comment">// URL -> /shop/shoes/nike-air-max-97</span>
  <span class="token comment">// `params` -> { tag: 'shoes', item: 'nike-air-max-97' }</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="매개변수" tabindex="-1"><a class="header-anchor" href="#매개변수" aria-hidden="true">#</a> 매개변수</h2>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token function">useParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>useParams 함수는 어떤 매개변수도 받지 않습니다.</p>
<h2 id="반환값" tabindex="-1"><a class="header-anchor" href="#반환값" aria-hidden="true">#</a> 반환값</h2>
<p>useParams 함수는 현재 라우트의 동적 매개변수가 채워진 객체를 반환합니다.</p>
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
<li>각 객체의 프로퍼티는 활성 동적 세그먼트입니다.</li>
<li>프로퍼티의 이름은 세그먼트의 이름이며, 프로퍼티의 값은 세그먼트가 채워지는 내용입니다.</li>
<li>프로퍼티의 값은 동적 세그먼트의 유형에 따라 문자열 또는 문자열 배열이 될 수 있습니다.</li>
<li>라우트에 동적 매개변수가 없으면 useParams는 빈 객체를 반환합니다.</li>
<li>페이지 라우터에서 사용할 경우, useParams는 초기 렌더링 시 null을 반환하고 라우터가 준비되면 위의 규칙을 따라 프로퍼티를 업데이트합니다.</li>
</ul>
<p>예시:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>| Route                     | URL         | useParams()            |
|---------------------------|-------------|----------------------- |
| app/shop/page.js          | /shop       | {}                     |
| app/shop/[slug]/page.js    | /shop/1     | { slug: '1' }          |
| app/shop/[tag]/[item]/page.js | /shop/1/2 | { tag: '1', item: '2' } |
| app/shop/[...slug]/page.js | /shop/1/2   | { slug: ['1', '2'] }    |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="버전-기록" tabindex="-1"><a class="header-anchor" href="#버전-기록" aria-hidden="true">#</a> 버전 기록</h2>
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
<th>Version</th>
<th>Changes</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v13.3.0</code></td>
<td><code v-pre>useParams</code> introduced</td>
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
