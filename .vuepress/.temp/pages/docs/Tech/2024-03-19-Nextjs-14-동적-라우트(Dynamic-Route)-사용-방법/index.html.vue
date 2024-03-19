<template><div><h1 id="nextjs-14-동적-라우트-dynamic-route-사용-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14-동적-라우트-dynamic-route-사용-방법" aria-hidden="true">#</a> Nextjs 14 동적 라우트(Dynamic Route) 사용 방법</h1>
<h1 id="동적-라우트" tabindex="-1"><a class="header-anchor" href="#동적-라우트" aria-hidden="true">#</a> 동적 라우트</h1>
<p>정확한 세그먼트 이름을 미리 알 수 없고 동적 데이터에서 라우트를 생성하려면 요청 시간에 채워지는 동적 세그먼트나 빌드 시간에 사전 렌더링되는 동적 세그먼트를 사용할 수 있습니다.</p>
<h2 id="규칙" tabindex="-1"><a class="header-anchor" href="#규칙" aria-hidden="true">#</a> 규칙</h2>
<p>폴더 이름을 대괄호로 감싸면 동적 세그먼트를 만들 수 있습니다: [폴더이름]. 예를 들어, [id] 또는 [slug]입니다.</p>
<p>동적 세그먼트는 레이아웃(layout), 페이지(page), 라우트(route), generateMetadata 함수의 params 속성으로 전달됩니다.</p>
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
<h2 id="예시" tabindex="-1"><a class="header-anchor" href="#예시" aria-hidden="true">#</a> 예시</h2>
<p>예를 들어, 블로그는 다음과 같은 라우트를 포함할 수 있습니다: app/blog/[slug]/page.js 여기서 [slug]는 블로그 포스트의 동적 세그먼트입니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span> params <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> params<span class="token operator">:</span> <span class="token punctuation">{</span> slug<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>내 글<span class="token operator">:</span> <span class="token punctuation">{</span>params<span class="token punctuation">.</span>slug<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>라우트</th>
<th>예시 URL</th>
<th>params</th>
</tr>
</thead>
<tbody>
<tr>
<td>app/blog/[slug]/page.js</td>
<td>/blog/a</td>
<td>{ slug: 'a' }</td>
</tr>
<tr>
<td>app/blog/[slug]/page.js</td>
<td>/blog/b</td>
<td>{ slug: 'b' }</td>
</tr>
<tr>
<td>app/blog/[slug]/page.js</td>
<td>/blog/c</td>
<td>{ slug: 'c' }</td>
</tr>
</tbody>
</table>
<p>세그먼트의 params를 생성하는 방법을 알아보려면 generateStaticParams() 페이지를 참조하세요.</p>
<blockquote>
<p>참고: 동적 세그먼트는 페이지 디렉터리의 동적 라우트와 동일합니다.</p>
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
<h2 id="정적-params-생성" tabindex="-1"><a class="header-anchor" href="#정적-params-생성" aria-hidden="true">#</a> 정적 params 생성</h2>
<p>generateStaticParams 함수는 동적 라우트 세그먼트와 함께 사용하여 요청 시간이 아닌 빌드 시간에 정적으로 라우트를 생성할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">generateStaticParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://.../posts"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>post<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    slug<span class="token operator">:</span> post<span class="token punctuation">.</span>slug<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>generateStaticParams 함수의 주요 장점은 데이터를 스마트하게 검색할 수 있다는 것입니다. generateStaticParams 함수 내에서 fetch 요청을 사용하여 콘텐츠를 가져오면 요청은 자동으로 메모이제이션됩니다. 이는 동일한 인수를 가진 여러 generateStaticParams, 레이아웃(layout), 페이지(page)에서의 fetch 요청은 한 번만 이루어지므로 빌드 시간이 감소합니다.</p>
<p>페이지 디렉터리에서 마이그레이션하는 경우 마이그레이션 가이드를 참조하세요.</p>
<p>더 많은 정보와 고급 사용 사례에 대한 generateStaticParams 서버 함수 문서를 참조하세요.</p>
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
<h2 id="catch-all-세그먼트" tabindex="-1"><a class="header-anchor" href="#catch-all-세그먼트" aria-hidden="true">#</a> Catch-all 세그먼트</h2>
<p>동적 세그먼트는 대괄호 안에 마침표를 추가하여 이후 모든 세그먼트를 캐치할 수 있습니다: [...폴더이름].</p>
<p>예를 들어, app/shop/[...slug]/page.js는 /shop/clothes와 일치하지만 /shop/clothes/tops, /shop/clothes/tops/t-shirts 등도 일치합니다.</p>
<table>
<thead>
<tr>
<th>라우트</th>
<th>예시 URL</th>
<th>params</th>
</tr>
</thead>
<tbody>
<tr>
<td>app/shop/[...slug]/page.js</td>
<td>/shop/a</td>
<td>{ slug: ['a'] }</td>
</tr>
<tr>
<td>app/shop/[...slug]/page.js</td>
<td>/shop/a/b</td>
<td>{ slug: ['a', 'b'] }</td>
</tr>
<tr>
<td>app/shop/[...slug]/page.js</td>
<td>/shop/a/b/c</td>
<td>{ slug: ['a', 'b', 'c'] }</td>
</tr>
</tbody>
</table>
<h2 id="선택적-catch-all-세그먼트" tabindex="-1"><a class="header-anchor" href="#선택적-catch-all-세그먼트" aria-hidden="true">#</a> 선택적 Catch-all 세그먼트</h2>
<p>Catch-all 세그먼트는 이중 대괄호에 매개변수를 포함하여 선택적으로 만들 수 있습니다: [[...폴더이름]].</p>
<p>예를 들어, app/shop/[[...slug]]/page.js는 /shop 뿐만 아니라 /shop/clothes, /shop/clothes/tops, /shop/clothes/tops/t-shirts와도 일치합니다.</p>
<p>Catch-all과 선택적 catch-all 세그먼트의 차이점은 선택적으로 라우트에 매개변수가 포함되어 있어도 (/shop의 경우) 해당 라우트도 일치된다는 것입니다.</p>
<table>
<thead>
<tr>
<th>라우트</th>
<th>예시 URL</th>
<th>params</th>
</tr>
</thead>
<tbody>
<tr>
<td>app/shop/[[...slug]]/page.js</td>
<td>/shop</td>
<td>{}</td>
</tr>
<tr>
<td>app/shop/[[...slug]]/page.js</td>
<td>/shop/a</td>
<td>{ slug: ['a'] }</td>
</tr>
<tr>
<td>app/shop/[[...slug]]/page.js</td>
<td>/shop/a/b</td>
<td>{ slug: ['a', 'b'] }</td>
</tr>
<tr>
<td>app/shop/[[...slug]]/page.js</td>
<td>/shop/a/b/c</td>
<td>{ slug: ['a', 'b', 'c'] }</td>
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
<h2 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h2>
<p>TypeScript를 사용할 때, 구성된 라우트 세그먼트에 맞게 params에 대한 타입을 추가할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span> params <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> params<span class="token operator">:</span> <span class="token punctuation">{</span> slug<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>내 페이지<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>라우트</th>
<th>params 타입 정의</th>
</tr>
</thead>
<tbody>
<tr>
<td>app/blog/[slug]/page.js</td>
<td>{ slug: string }</td>
</tr>
<tr>
<td>app/shop/[...slug]/page.js</td>
<td>{ slug: string[] }</td>
</tr>
<tr>
<td>app/shop/[[...slug]]/page.js</td>
<td>{ slug?: string[] }</td>
</tr>
<tr>
<td>app/[categoryId]/[itemId]/page.js</td>
<td>{ categoryId: string, itemId: string }</td>
</tr>
</tbody>
</table>
<blockquote>
<p>참고: 이러한 작업은 향후 TypeScript 플러그인에서 자동으로 수행될 수 있습니다.</p>
</blockquote>
</div></template>
