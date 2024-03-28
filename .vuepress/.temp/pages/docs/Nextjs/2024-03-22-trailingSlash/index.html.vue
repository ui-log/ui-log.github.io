<template><div><h1 id="trailingslash" tabindex="-1"><a class="header-anchor" href="#trailingslash" aria-hidden="true">#</a> trailingSlash</h1>
<p>기본적으로 Next.js는 URL 끝에 슬래시가 붙은 URL을 슬래시 없이 연결된 버전으로 리디렉션합니다. 예를 들어 /about/은 /about으로 리디렉션됩니다. 이 동작을 반대로 설정하여 슬래시가 없는 URL을 슬래시가 있는 버전으로 리디렉션할 수도 있습니다.</p>
<p>next.config.js 파일을 열고 trailingSlash 구성을 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">trailingSlash</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<p>이 옵션을 설정하면 /about과 같은 URL이 /about/로 리디렉션됩니다.</p>
<p>&quot;export&quot; 구성으로 사용할 때, /about 페이지는 기본 /about.html 대신 /about/index.html로 출력됩니다.</p>
<h2 id="버전-히스토리" tabindex="-1"><a class="header-anchor" href="#버전-히스토리" aria-hidden="true">#</a> 버전 히스토리</h2>
<table>
<thead>
<tr>
<th>Version</th>
<th>Changes</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v9.5.0</code></td>
<td><code v-pre>trailingSlash</code> 추가됨</td>
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
