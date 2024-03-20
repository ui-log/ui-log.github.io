<template><div><h1 id="nextjs-14-현재-경로-세그먼트들-전부-가져오는-방법-useselectedlayoutsegments" tabindex="-1"><a class="header-anchor" href="#nextjs-14-현재-경로-세그먼트들-전부-가져오는-방법-useselectedlayoutsegments" aria-hidden="true">#</a> Nextjs 14 현재 경로 세그먼트들 전부 가져오는 방법(useSelectedLayoutSegments)</h1>
<p>useSelectedLayoutSegments는 클라이언트 컴포넌트 훅으로, 호출된 레이아웃 아래의 활성 경로 세그먼트를 읽을 수 있게 해줍니다.</p>
<p>브레드크럼과 같은 활성 자식 세그먼트의 정보가 필요한 부모 레이아웃에서 UI를 생성하는 데 유용합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useSelectedLayoutSegments <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ExampleClientComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> segments <span class="token operator">=</span> <span class="token function">useSelectedLayoutSegments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span>
      <span class="token punctuation">{</span>segments<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>segment<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>segment<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<p>알고 계셔야 할 사항:
useSelectedLayoutSegments는 클라이언트 컴포넌트 후크이며, 레이아웃은 기본적으로 서버 컴포넌트이므로 useSelectedLayoutSegments는 일반적으로 레이아웃으로 가져온 클라이언트 컴포넌트를 통해 호출됩니다.
반환된 세그먼트에는 루트 그룹이 포함되어 있으며, UI에 포함하고 싶지 않을 수도 있습니다. 대괄호로 시작하는 항목을 제거하려면 filter() 배열 메서드를 사용할 수 있습니다.</p>
</blockquote>
<h2 id="매개변수" tabindex="-1"><a class="header-anchor" href="#매개변수" aria-hidden="true">#</a> 매개변수</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> segments <span class="token operator">=</span> <span class="token function">useSelectedLayoutSegments</span><span class="token punctuation">(</span>parallelRoutesKey<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>useSelectedLayoutSegments는 선택적으로 parallelRoutesKey를 허용하며, 해당 슬롯 내에서 활성 루트 세그먼트를 읽을 수 있습니다.</p>
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
<h2 id="반환값" tabindex="-1"><a class="header-anchor" href="#반환값" aria-hidden="true">#</a> 반환값</h2>
<p>useSelectedLayoutSegments 함수는 호출된 레이아웃에서 한 수준 낮은 수준의 활성 세그먼트를 포함하는 문자열 배열을 반환합니다. 해당하는 세그먼트가 없는 경우 빈 배열을 반환합니다.</p>
<p>예를 들어, 다음과 같은 레이아웃 및 URL이 주어졌을 때 반환되는 세그먼트는 다음과 같습니다:</p>
<table>
<thead>
<tr>
<th>레이아웃</th>
<th>방문한 URL</th>
<th>반환되는 세그먼트</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>app/layout.js</code></td>
<td><code v-pre>/</code></td>
<td><code v-pre>[]</code></td>
</tr>
<tr>
<td><code v-pre>app/layout.js</code></td>
<td><code v-pre>/dashboard</code></td>
<td><code v-pre>['dashboard']</code></td>
</tr>
<tr>
<td><code v-pre>app/layout.js</code></td>
<td><code v-pre>/dashboard/settings</code></td>
<td><code v-pre>['dashboard', 'settings']</code></td>
</tr>
<tr>
<td><code v-pre>app/dashboard/layout.js</code></td>
<td><code v-pre>/dashboard</code></td>
<td><code v-pre>[]</code></td>
</tr>
<tr>
<td><code v-pre>app/dashboard/layout.js</code></td>
<td><code v-pre>/dashboard/settings</code></td>
<td><code v-pre>['settings']</code></td>
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
<h2 id="버전-기록" tabindex="-1"><a class="header-anchor" href="#버전-기록" aria-hidden="true">#</a> 버전 기록</h2>
<table>
<thead>
<tr>
<th>버전</th>
<th>변경 내용</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v13.0.0</code></td>
<td><code v-pre>useSelectedLayoutSegments</code> 도입</td>
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
