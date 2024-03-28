<template><div><h1 id="서버-측-렌더링-ssr" tabindex="-1"><a class="header-anchor" href="#서버-측-렌더링-ssr" aria-hidden="true">#</a> 서버 측 렌더링 (SSR)</h1>
<blockquote>
<p>&quot;SSR&quot; 또는 &quot;동적 렌더링&quot;이라고도 불립니다.</p>
</blockquote>
<p>페이지가 서버 측 렌더링을 사용하는 경우, 페이지 HTML은 각 요청마다 생성됩니다.</p>
<p>페이지에 서버 측 렌더링을 사용하려면 getServerSideProps라는 비동기 함수를 내보내야 합니다. 이 함수는 서버에서 각 요청마다 호출됩니다.</p>
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
<p>예를 들어, 페이지가 자주 업데이트되는 데이터(외부 API에서 가져옴)를 사전 렌더링해야 한다고 가정해봅시다. 이 데이터를 가져오고 이를 페이지로 전달하는 getServerSideProps 함수를 아래와 같이 작성할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> data <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 데이터 렌더링하기...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 이 함수는 모든 요청마다 호출됩니다</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getServerSideProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 외부 API에서 데이터 가져오기</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://.../data</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 데이터를 props를 통해 페이지로 전달하기</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>getServerSideProps는 getStaticProps와 유사하지만 다른 점은 build 시간이 아니라 모든 요청마다 실행된다는 것입니다.</p>
<p>getServerSideProps가 어떻게 작동하는지 더 알아보려면, Data Fetching 문서를 확인해보세요.</p>
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
