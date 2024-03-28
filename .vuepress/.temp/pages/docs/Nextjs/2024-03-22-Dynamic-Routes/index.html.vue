<template><div><h1 id="다이내믹-라우트" tabindex="-1"><a class="header-anchor" href="#다이내믹-라우트" aria-hidden="true">#</a> 다이내믹 라우트</h1>
<p>당신이 정확한 세그먼트 이름을 미리 알 수 없고 동적 데이터에서 라우트를 생성하고 싶을 때, 요청 시 채워지는 동적 세그먼트나 빌드 시 미리 렌더링되는 동적 세그먼트를 사용할 수 있습니다.</p>
<h2 id="규칙" tabindex="-1"><a class="header-anchor" href="#규칙" aria-hidden="true">#</a> 규칙</h2>
<p>동적 세그먼트는 파일이나 폴더 이름을 대괄호로 감싸서 생성할 수 있습니다: [세그먼트명]. 예를 들면 [id]나 [slug]와 같이 사용할 수 있습니다.</p>
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
<p><code v-pre>useRouter</code>를 통해 동적 세그먼트에 접근할 수 있습니다.</p>
<h2 id="예시" tabindex="-1"><a class="header-anchor" href="#예시" aria-hidden="true">#</a> 예시</h2>
<p>예를 들어, 블로그는 다음과 같은 route <code v-pre>pages/blog/[slug].js</code>를 포함할 수 있으며 여기서 <code v-pre>[slug]</code>는 블로그 포스트를 위한 동적 세그먼트입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/router"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>Post<span class="token operator">:</span> <span class="token punctuation">{</span>router<span class="token punctuation">.</span>query<span class="token punctuation">.</span>slug<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<th>Route</th>
<th>Example URL</th>
<th><code v-pre>params</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>pages/blog/[slug].js</td>
<td>/blog/a</td>
<td>{ slug: 'a' }</td>
</tr>
<tr>
<td>pages/blog/[slug].js</td>
<td>/blog/b</td>
<td>{ slug: 'b' }</td>
</tr>
<tr>
<td>pages/blog/[slug].js</td>
<td>/blog/c</td>
<td>{ slug: 'c' }</td>
</tr>
</tbody>
</table>
<h2 id="catch-all-segments" tabindex="-1"><a class="header-anchor" href="#catch-all-segments" aria-hidden="true">#</a> Catch-all Segments</h2>
<p>동적 세그먼트는 대괄호 내부에 ellipsis를 추가하여 이후 모든 세그먼트를 포함할 수 있습니다. ([...segmentName]).</p>
<p>예를 들어, pages/shop/[...slug].js는 /shop/clothes와 /shop/clothes/tops, /shop/clothes/tops/t-shirts 등과 일치합니다.</p>
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
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>| Route                  | Example URL           | `params`            |
|------------------------|-----------------------|---------------------|
| `pages/shop/[...slug].js` | `/shop/a`              | `{ slug: ['a'] }`   |
| `pages/shop/[...slug].js` | `/shop/a/b`            | `{ slug: ['a', 'b'] }` |
| `pages/shop/[...slug].js` | `/shop/a/b/c`          | `{ slug: ['a', 'b', 'c'] }` |

## Optional Catch-all Segments

Catch-all Segments can be made optional by including the parameter in double square brackets: [[...segmentName]].

For example, `pages/shop/[[...slug]].js` will also match `/shop`, in addition to `/shop/clothes`, `/shop/clothes/tops`, `/shop/clothes/tops/t-shirts`.
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
<p>catch-all과 optional catch-all 세그먼트의 차이점은 옵션으로, 매개 변수 없이 라우트도 일치합니다(위 예제의 경우 /shop).</p>
<table>
<thead>
<tr>
<th>Route</th>
<th>Example URL</th>
<th><code v-pre>params</code></th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>pages/shop/[[...slug]].js</code></td>
<td><code v-pre>/shop</code></td>
<td><code v-pre>{ slug: [] }</code></td>
</tr>
<tr>
<td><code v-pre>pages/shop/[[...slug]].js</code></td>
<td><code v-pre>/shop/a</code></td>
<td><code v-pre>{ slug: ['a'] }</code></td>
</tr>
<tr>
<td><code v-pre>pages/shop/[[...slug]].js</code></td>
<td><code v-pre>/shop/a/b</code></td>
<td><code v-pre>{ slug: ['a', 'b'] }</code></td>
</tr>
<tr>
<td><code v-pre>pages/shop/[[...slug]].js</code></td>
<td><code v-pre>/shop/a/b/c</code></td>
<td><code v-pre>{ slug: ['a', 'b', 'c'] }</code></td>
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
