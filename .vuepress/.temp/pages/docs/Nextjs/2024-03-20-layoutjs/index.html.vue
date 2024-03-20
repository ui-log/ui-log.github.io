<template><div><h1 id="nextjs-14-레이아웃-공유를-위한-layout-js-정리" tabindex="-1"><a class="header-anchor" href="#nextjs-14-레이아웃-공유를-위한-layout-js-정리" aria-hidden="true">#</a> Nextjs 14 - 레이아웃 공유를 위한 layout.js 정리</h1>
<p>레이아웃은 경로 간에 공유되는 UI입니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">DashboardLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>section<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>루트 레이아웃은 루트 앱 디렉터리에서 가장 상위에 있는 레이아웃입니다. 이것은 <code v-pre>html</code> 및 <code v-pre>body</code> 태그 및 전역적으로 공유되는 다른 UI를 정의하는 데 사용됩니다.</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>body<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="프롭스" tabindex="-1"><a class="header-anchor" href="#프롭스" aria-hidden="true">#</a> 프롭스</h2>
<h3 id="children-필수" tabindex="-1"><a class="header-anchor" href="#children-필수" aria-hidden="true">#</a> children (필수)</h3>
<p>레이아웃 컴포넌트는 children 프롭을 받아들이고 사용해야 합니다. 렌더링 중에 children은 레이아웃이 감싸는 경로 세그먼트로 채워집니다. 이들은 주로 자식 레이아웃 (있는 경우) 또는 페이지의 컴포넌트일 것입니다만, 해당 시에는 로딩 또는 오류와 같은 다른 특별한 파일인 경우도 있습니다.</p>
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
<h3 id="params-optional" tabindex="-1"><a class="header-anchor" href="#params-optional" aria-hidden="true">#</a> params (optional)</h3>
<p>루트 세그먼트에서 레이아웃까지의 동적 경로 매개변수 객체입니다.</p>
<table>
<thead>
<tr>
<th>예시</th>
<th>URL</th>
<th><code v-pre>params</code></th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>app/dashboard/[team]/layout.js</code></td>
<td><code v-pre>/dashboard/1</code></td>
<td><code v-pre>{ team: '1' }</code></td>
</tr>
<tr>
<td><code v-pre>app/shop/[tag]/[item]/layout.js</code></td>
<td><code v-pre>/shop/1/2</code></td>
<td><code v-pre>{ tag: '1', item: '2' }</code></td>
</tr>
<tr>
<td><code v-pre>app/blog/[...slug]/layout.js</code></td>
<td><code v-pre>/blog/1/2</code></td>
<td><code v-pre>{ slug: ['1', '2'] }</code></td>
</tr>
</tbody>
</table>
<p>예시:</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ShopLayout</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  children<span class="token punctuation">,</span>
  params<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">;</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    item<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// URL -> /shop/shoes/nike-air-max-97</span>
  <span class="token comment">// `params` -> { tag: 'shoes', item: 'nike-air-max-97' }</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>section<span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="유용한-정보" tabindex="-1"><a class="header-anchor" href="#유용한-정보" aria-hidden="true">#</a> 유용한 정보</h2>
<h3 id="레이아웃이-searchparams를-받지-않습니다" tabindex="-1"><a class="header-anchor" href="#레이아웃이-searchparams를-받지-않습니다" aria-hidden="true">#</a> 레이아웃이 searchParams를 받지 않습니다</h3>
<p>페이지와 달리 레이아웃 컴포넌트는 searchParams prop을 받지 않습니다. 이는 공유 레이아웃이 탐색 중에 다시 렌더링되지 않기 때문에 탐색 사이에 갱신되지 않은 searchParams가 발생할 수 있기 때문입니다.```</p>
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
<p>클라이언트 측 내비게이션을 사용할 때 Next.js는 두 경로 간에 공통 레이아웃 아래의 페이지 부분만 자동으로 렌더링합니다.</p>
<p>예를 들어, 다음 디렉토리 구조에서 dashboard/layout.tsx는 /dashboard/settings와 /dashboard/analytics 모두에 대한 공통 레이아웃입니다:</p>
<p><img src="@source/docs/Nextjs/2024-03-20-layoutjs/img/layout.js_0.png" alt="이미지"></p>
<p>/dashboard/settings에서 /dashboard/analytics로 이동할 때, /dashboard/analytics의 page.tsx는 서버에서 다시 렌더링되지만, 두 경로 사이에서 공유되는 대시보드/layout.tsx는 다시 렌더링되지 않습니다.</p>
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
<p>이 성능 최적화를 통해 레이아웃을 공유하는 페이지 간의 탐색이 빨라지며, 페이지의 데이터 가져오기와 렌더링만 실행되므로 자체 데이터를 가져오는 공유 레이아웃을 포함할 수 있는 전체 경로 대신입니다.</p>
<p>대시보드/layout.tsx가 다시 렌더링되지 않기 때문에 레이아웃 서버 컴포넌트의 searchParams 속성은 탐색 후에 낡아질 수 있습니다.</p>
<ul>
<li>대신 클라이언트 컴포넌트에서 Page searchParams 속성이나 최신 searchParams으로 클라이언트에서 다시 렌더링되는 useSearchParams 훅을 사용하세요.</li>
</ul>
<h3 id="루트-레이아웃" tabindex="-1"><a class="header-anchor" href="#루트-레이아웃" aria-hidden="true">#</a> 루트 레이아웃</h3>
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
<li>앱 디렉토리에는 루트 앱/layout.js 파일이 포함되어 있어야 합니다.</li>
<li>루트 레이아웃은 <code v-pre>html</code> 및 <code v-pre>body</code> 태그를 정의해야 합니다.
루트 레이아웃에는 수동으로 <code v-pre>head</code> 태그를 추가해서는 안 됩니다. 대신 Metadata API를 사용해야 합니다. Metadata API는 <code v-pre>head</code> 요소의 스트리밍 및 중복 처리와 같은 고급 요구 사항을 자동으로 처리합니다.</li>
<li>루트 레이아웃에는 수동으로 <code v-pre>head</code> 태그를 추가해서는 안 됩니다. 대신 Metadata API를 사용해야 합니다. Metadata API는 <code v-pre>head</code> 요소의 스트리밍 및 중복 처리와 같은 고급 요구 사항을 자동으로 처리합니다.</li>
<li>루트 레이아웃을 여러 개 생성하기 위해 route 그룹을 사용할 수 있습니다. 여러 개의 루트 레이아웃 간을 이동하면 전체 페이지 새로 고침이 발생합니다(클라이언트 측 탐색과는 달리). 예를 들어, app/(shop)/layout.js를 사용하는 /cart에서 app/(marketing)/layout.js를 사용하는 /blog로 이동하는 경우 전체 페이지 새로 고침이 발생합니다. 이는 여러 개의 루트 레이아웃에만 해당됩니다.</li>
<li>루트 레이아웃을 여러 개 생성하기 위해 route 그룹을 사용할 수 있습니다. 여러 개의 루트 레이아웃 간을 이동하면 전체 페이지 새로 고침이 발생합니다(클라이언트 측 탐색과는 달리). 예를 들어, app/(shop)/layout.js를 사용하는 /cart에서 app/(marketing)/layout.js를 사용하는 /blog로 이동하는 경우 전체 페이지 새로 고침이 발생합니다. 이는 여러 개의 루트 레이아웃에만 해당됩니다.</li>
</ul>
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
<td><code v-pre>v13.0.0</code></td>
<td><code v-pre>layout</code>가 도입됨.</td>
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
