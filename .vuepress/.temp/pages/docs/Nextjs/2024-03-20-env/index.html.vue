<template><div><h1 id="nextjs-14-환경변수-추가-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14-환경변수-추가-방법" aria-hidden="true">#</a> Nextjs 14 환경변수 추가 방법</h1>
<blockquote>
<p>Next.js 9.4버전부터
환경 변수를 추가하는 더 직관적이고 편리한 경험이 가능합니다. 한 번 시도해보세요!</p>
</blockquote>
<blockquote>
<p>알아두면 좋은 사실: 이 방법으로 지정된 환경 변수는 항상 JavaScript 번들에 포함됩니다. NEXT<em>PUBLIC</em> 접두사를 환경 변수 이름과 함께 지정하는 것은 .env 파일을 통해 지정할 때만 효과가 있습니다.</p>
</blockquote>
<p>JavaScript 번들에 환경 변수를 추가하려면 next.config.js를 열고 env 구성을 추가하세요:</p>
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
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">customKey</span><span class="token operator">:</span> <span class="token string">"my-value"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 코드에서 <code v-pre>process.env.customKey</code>에 접근할 수 있습니다. 예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>customKey의 값은<span class="token operator">:</span> <span class="token punctuation">{</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>customKey<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Page<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Next.js는 빌드 시 <code v-pre>process.env.customKey</code>를 <code v-pre>my-value</code>로 대체합니다. webpack DefinePlugin의 특성으로 인해 process.env 변수를 구조분해하려고 하면 작동하지 않습니다.</p>
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
<p>예를 들어, 다음 라인:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>customKey의 값은<span class="token operator">:</span> <span class="token punctuation">{</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>customKey<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>다음과 같이 바뀝니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>customKey의 값은<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string">"my-value"</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
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
</div></template>
