<template><div><h1 id="nextjs-14-로딩-화면을-위한-loading-js-사용-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14-로딩-화면을-위한-loading-js-사용-방법" aria-hidden="true">#</a> Nextjs 14 로딩 화면을 위한 loading.js 사용 방법</h1>
<p>로딩 파일은 Suspense를 기반으로 즉시 로딩 상태를 생성할 수 있습니다.</p>
<p>기본적으로 이 파일은 서버 컴포넌트입니다 - 그러나 &quot;use client&quot; 지시문을 통해 클라이언트 컴포넌트로도 사용할 수 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Loading</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 또는 사용자 정의 로딩 스켈레톤 컴포넌트</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<p>로딩 UI 컴포넌트는 어떤 매개변수도 받지 않습니다.</p>
<blockquote>
<p>참고사항
로딩 UI를 디자인할 때 React Developer Tools를 사용하여 수동으로 Suspense 경계를 전환하는 것이 도움이 될 수 있습니다.</p>
</blockquote>
<h2 id="버전-기록" tabindex="-1"><a class="header-anchor" href="#버전-기록" aria-hidden="true">#</a> 버전 기록</h2>
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
<td><code v-pre>loading</code>이 도입되었습니다.</td>
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
