<template><div><h1 id="nextjs-14-crossorigin-사용-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14-crossorigin-사용-방법" aria-hidden="true">#</a> Nextjs 14 crossOrigin 사용 방법</h1>
<p><code v-pre>next/script</code> 컴포넌트에서 생성된 모든 <code v-pre>script</code> 태그에 크로스오리진 속성을 추가하고, 크로스 도메인 요청을 처리하는 방법을 정의하기 위해 crossOrigin 옵션을 사용하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">crossOrigin</span><span class="token operator">:</span> <span class="token string">"anonymous"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="옵션" tabindex="-1"><a class="header-anchor" href="#옵션" aria-hidden="true">#</a> 옵션</h2>
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
<li><code v-pre>anonymous</code>: crossOrigin=&quot;anonymous&quot; 속성을 추가합니다.</li>
<li><code v-pre>use-credentials</code>: crossOrigin=&quot;use-credentials&quot; 속성을 추가합니다.</li>
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
</div></template>
