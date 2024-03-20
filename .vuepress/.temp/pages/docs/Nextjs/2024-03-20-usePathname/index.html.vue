<template><div><h1 id="nextjs-14-클라이언트-컴포넌트에서-현재-url-가져오는-방법-usepathname" tabindex="-1"><a class="header-anchor" href="#nextjs-14-클라이언트-컴포넌트에서-현재-url-가져오는-방법-usepathname" aria-hidden="true">#</a> Nextjs 14 클라이언트 컴포넌트에서 현재 url 가져오는 방법(usePathname)</h1>
<p>usePathname은 현재 URL의 경로 이름을 읽을 수 있는 Client Component 훅입니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> usePathname <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ExampleClientComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> pathname <span class="token operator">=</span> <span class="token function">usePathname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>Current pathname<span class="token operator">:</span> <span class="token punctuation">{</span>pathname<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>usePathname은 의도적으로 Client Component를 사용해야 합니다. Client Components은 최적화가 아닌 Server Components 아키텍처의 중요한 부분입니다.</p>
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
<p>예를 들어, usePathname을 사용하는 클라이언트 컴포넌트는 초기 페이지로드 시 HTML로 렌더링됩니다. 새 경로로 이동할 때 이 컴포넌트는 다시 가져올 필요가 없습니다. 대신에, 컴포넌트는 한 번 다운로드되고(current state에 기반하여) 다시 렌더링 됩니다.</p>
<blockquote>
<p>알아두면 좋은 점:
서버 컴포넌트에서 현재 URL을 읽는 것은 지원되지 않습니다. 이 설계는 페이지 이동간 레이아웃 상태가 유지되도록 지원하기 위한 것입니다.
호환성 모드:
usePathname은 Next.js에서 자동으로 정적으로 최적화된 페이지 또는 라우터가 준비되지 않은 경우 대체 경로가 렌더링 될 때 null을 반환할 수 있습니다.
Next.js는 프로젝트에서 앱과 페이지 디렉토리 모두를 인식하면 자동으로 유형을 업데이트합니다.</p>
</blockquote>
<h2 id="매개변수" tabindex="-1"><a class="header-anchor" href="#매개변수" aria-hidden="true">#</a> 매개변수</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> pathname <span class="token operator">=</span> <span class="token function">usePathname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>usePathname은 어떤 매개변수도 받지 않습니다.</p>
<h2 id="반환값" tabindex="-1"><a class="header-anchor" href="#반환값" aria-hidden="true">#</a> 반환값</h2>
<p>usePathname은 현재 URL의 경로 이름을 나타내는 문자열을 반환합니다. 예를 들어:</p>
<table>
<thead>
<tr>
<th>URL</th>
<th>반환 값</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/</code></td>
<td><code v-pre>'/'</code></td>
</tr>
<tr>
<td><code v-pre>/dashboard</code></td>
<td><code v-pre>'/dashboard'</code></td>
</tr>
<tr>
<td><code v-pre>/dashboard?v=2</code></td>
<td><code v-pre>'/dashboard'</code></td>
</tr>
<tr>
<td><code v-pre>/blog/hello-world</code></td>
<td><code v-pre>'/blog/hello-world'</code></td>
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
<h2 id="예시" tabindex="-1"><a class="header-anchor" href="#예시" aria-hidden="true">#</a> 예시</h2>
<h3 id="경로-변경에-대한-응답으로-작업-수행하기" tabindex="-1"><a class="header-anchor" href="#경로-변경에-대한-응답으로-작업-수행하기" aria-hidden="true">#</a> 경로 변경에 대한 응답으로 작업 수행하기</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> usePathname<span class="token punctuation">,</span> useSearchParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ExampleClientComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> pathname <span class="token operator">=</span> <span class="token function">usePathname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> searchParams <span class="token operator">=</span> <span class="token function">useSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 여기서 작업을 수행하세요...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>pathname<span class="token punctuation">,</span> searchParams<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>버전</th>
<th>변경 내용</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v13.0.0</code></td>
<td><code v-pre>usePathname</code>이 추가됨.</td>
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
