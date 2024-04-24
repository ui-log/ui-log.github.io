<template><div><p>몇 분 안에 JS 지식을 높이세요.</p>
<h2 id="_1-랜덤-문자열-생성" tabindex="-1"><a class="header-anchor" href="#_1-랜덤-문자열-생성" aria-hidden="true">#</a> 1. 랜덤 문자열 생성</h2>
<p>Math.random을 사용하여 랜덤 문자열을 생성할 수 있습니다. 고유한 ID가 필요할 때 매우 편리합니다.</p>
<p><img src="@source/docs/Tech/2024-04-23-18JavaScriptOne-LinersThatllMakeYouLookLikeaPro/img/18JavaScriptOne-LinersThatllMakeYouLookLikeaPro_0.png" alt="이미지"></p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">randomString</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">randomString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// gi1qtdego0b</span>
<span class="token function">randomString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// f3qixv40mot</span>
<span class="token function">randomString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// eeelv1pm3ja</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-html-특수-문자-escape하기" tabindex="-1"><a class="header-anchor" href="#_2-html-특수-문자-escape하기" aria-hidden="true">#</a> 2. HTML 특수 문자 escape하기</h1>
<p>XSS에 대해 알고 있다면, HTML 문자열을 escape할 수 있는 해결책 중 하나입니다.</p>
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
<p><img src="" alt="18JavaScriptOne-LinersThatllMakeYouLookLikeaPro_1.png"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">escape</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=></span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[&amp;&lt;>"']</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">m</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string-property property">'&amp;'</span><span class="token operator">:</span> <span class="token string">'&amp;amp;'</span><span class="token punctuation">,</span> <span class="token string-property property">'&lt;'</span><span class="token operator">:</span> <span class="token string">'&amp;lt;'</span><span class="token punctuation">,</span> <span class="token string-property property">'>'</span><span class="token operator">:</span> <span class="token string">'&amp;gt;'</span><span class="token punctuation">,</span> <span class="token string-property property">'"'</span><span class="token operator">:</span> <span class="token string">'&amp;quot;'</span><span class="token punctuation">,</span> <span class="token string-property property">"'"</span><span class="token operator">:</span> <span class="token string">'&amp;#39;'</span> <span class="token punctuation">}</span><span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">escape</span><span class="token punctuation">(</span><span class="token string">'&lt;div class="medium">Hi Medium.&lt;/div>'</span><span class="token punctuation">)</span> 
<span class="token comment">// &amp;lt;div class=&amp;quot;medium&amp;quot;&amp;gt;Hi Medium.&amp;lt;/div&amp;gt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="문자열-내-각-단어의-첫-글자를-대문자로-만들기" tabindex="-1"><a class="header-anchor" href="#문자열-내-각-단어의-첫-글자를-대문자로-만들기" aria-hidden="true">#</a> 문자열 내 각 단어의 첫 글자를 대문자로 만들기</h2>
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
<p>이 방법은 문자열 내 각 단어의 첫 글자를 대문자로 변경하는 데 사용됩니다.</p>
<p><img src="@source/docs/Tech/2024-04-23-18JavaScriptOne-LinersThatllMakeYouLookLikeaPro/img/18JavaScriptOne-LinersThatllMakeYouLookLikeaPro_2.png" alt="18 JavaScript One-Liners That'll Make You Look Like a Pro"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">uppercaseWords</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=></span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(.)|\s+(.)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token operator">=></span> c<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">uppercaseWords</span><span class="token punctuation">(</span><span class="token string">'hello world'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 'Hello World'</span>
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
<p>감사합니다, Christopher Strolia-Davis님. 이것이 그가 제공하는 더 쉬운 방법입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">uppercaseWords</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=></span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(.)|\s+(.)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token operator">=></span> c<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-문자열을-camelcase로-변환하기" tabindex="-1"><a class="header-anchor" href="#_4-문자열을-camelcase로-변환하기" aria-hidden="true">#</a> 4. 문자열을 camelCase로 변환하기</h3>
<p><img src="@source/docs/Tech/2024-04-23-18JavaScriptOne-LinersThatllMakeYouLookLikeaPro/img/18JavaScriptOne-LinersThatllMakeYouLookLikeaPro_3.png" alt="이미지"></p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">toCamelCase</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=></span> str<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[-_\s]+(.)?</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>c <span class="token operator">?</span> c<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">toCamelCase</span><span class="token punctuation">(</span><span class="token string">'background-color'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// backgroundColor</span>
<span class="token function">toCamelCase</span><span class="token punctuation">(</span><span class="token string">'-webkit-scrollbar-thumb'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// WebkitScrollbarThumb</span>
<span class="token function">toCamelCase</span><span class="token punctuation">(</span><span class="token string">'_hello_world'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// HelloWorld</span>
<span class="token function">toCamelCase</span><span class="token punctuation">(</span><span class="token string">'hello_world'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// helloWorld</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-배열에서-중복-값을-제거하기" tabindex="-1"><a class="header-anchor" href="#_5-배열에서-중복-값을-제거하기" aria-hidden="true">#</a> 5. 배열에서 중복 값을 제거하기</h2>
<p>배열에서 중복 값을 제거하는 것은 매우 중요합니다. &quot;Set&quot;을 사용하면 매우 간단해집니다.</p>
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
<img src="@source/docs/Tech/2024-04-23-18JavaScriptOne-LinersThatllMakeYouLookLikeaPro/img/18JavaScriptOne-LinersThatllMakeYouLookLikeaPro_4.png" />
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">removeDuplicates</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">removeDuplicates</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token comment">// [1, 2, 3, 4, 5, 6]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-배열-평탄화하기" tabindex="-1"><a class="header-anchor" href="#_6-배열-평탄화하기" aria-hidden="true">#</a> 6. 배열 평탄화하기</h1>
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
<p>인터뷰에서 자주 테스트되는 JavaScript 짧은 코드가 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">flat</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=></span>
    <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>
        <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">flat</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">:</span> a<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또는</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">flat</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token operator">...</span>a<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token function">flat</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>위 코드를 통해서 전문가처럼 보일 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'cat'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'lion'</span><span class="token punctuation">,</span> <span class="token string">'tiger'</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// ['cat', 'lion', 'tiger']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_7-배열에서-거짓-값-제거하기" tabindex="-1"><a class="header-anchor" href="#_7-배열에서-거짓-값-제거하기" aria-hidden="true">#</a> 7. 배열에서 거짓 값 제거하기</h1>
<p>이 방법을 사용하면 배열에서 모든 거짓 값들을 필터링할 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-04-23-18JavaScriptOne-LinersThatllMakeYouLookLikeaPro/img/18JavaScriptOne-LinersThatllMakeYouLookLikeaPro_6.png" alt="이미지"></p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">removeFalsy</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">removeFalsy</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'a string'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token number">NaN</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token string">'another string'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// ['a string', true, 5, 'another string']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_8-숫자가-짝수인지-홀수인지-확인하기" tabindex="-1"><a class="header-anchor" href="#_8-숫자가-짝수인지-홀수인지-확인하기" aria-hidden="true">#</a> 8. 숫자가 짝수인지 홀수인지 확인하기</h1>
<p>모듈로 연산자(%)를 사용하여 간단하게 해결할 수 있는 문제입니다.</p>
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
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">이미지</span>](<span class="token url">./img/18JavaScriptOne-LinersThatllMakeYouLookLikeaPro_7.png</span>)</span>

```js
const isEven = num => num % 2 === 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">isEven</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token function">isEven</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_9-두-숫자-사이의-랜덤-정수를-가져오기" tabindex="-1"><a class="header-anchor" href="#_9-두-숫자-사이의-랜덤-정수를-가져오기" aria-hidden="true">#</a> 9. 두 숫자 사이의 랜덤 정수를 가져오기</h1>
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
<p>이 방법은 두 숫자 사이의 임의의 정수를 얻는 데 사용됩니다.</p>
<p><img src="@source/docs/Tech/2024-04-23-18JavaScriptOne-LinersThatllMakeYouLookLikeaPro/img/18JavaScriptOne-LinersThatllMakeYouLookLikeaPro_8.png" alt="이미지"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">random</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">min<span class="token punctuation">,</span> max</span><span class="token punctuation">)</span> <span class="token operator">=></span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> min<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">random</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span> <span class="token comment">// 25</span>
<span class="token function">random</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span> <span class="token comment">// 34</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="_10-전달된-인수의-평균값을-구하기" tabindex="-1"><a class="header-anchor" href="#_10-전달된-인수의-평균값을-구하기" aria-hidden="true">#</a> 10#. 전달된 인수의 평균값을 구하기</h1>
<p>이 함수에서 제공하는 인수의 평균값을 얻기 위해 reduce 메서드를 사용할 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-04-23-18JavaScriptOne-LinersThatllMakeYouLookLikeaPro/img/18JavaScriptOne-LinersThatllMakeYouLookLikeaPro_9.png" alt="이미지"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">average</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=></span> args<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">/</span> args<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">average</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_11-숫자를-고정-소수점으로-잘라내기" tabindex="-1"><a class="header-anchor" href="#_11-숫자를-고정-소수점으로-잘라내기" aria-hidden="true">#</a> 11. 숫자를 고정 소수점으로 잘라내기</h1>
<p>Math.pow() 메서드를 사용하여 함수에 제공한 특정 소수점까지 숫자를 잘라낼 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-04-23-18JavaScriptOne-LinersThatllMakeYouLookLikeaPro/img/18JavaScriptOne-LinersThatllMakeYouLookLikeaPro_10.png" alt="image"></p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">round</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">Number</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token string">"e"</span> <span class="token operator">+</span> d<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"e-"</span> <span class="token operator">+</span> d<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">1.005</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">//1.01</span>
<span class="token function">round</span><span class="token punctuation">(</span><span class="token number">1.555</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">//1.56</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_12-두-날짜-사이의-차이-일-수-계산하기" tabindex="-1"><a class="header-anchor" href="#_12-두-날짜-사이의-차이-일-수-계산하기" aria-hidden="true">#</a> 12. 두 날짜 사이의 차이 일 수 계산하기</h1>
<p>가끔은 두 날짜 사이의 일 수를 계산해야 할 때가 있습니다. 한 줄의 코드로 수행할 수 있습니다.</p>
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
<img src="@source/docs/Tech/2024-04-23-18JavaScriptOne-LinersThatllMakeYouLookLikeaPro/img/18JavaScriptOne-LinersThatllMakeYouLookLikeaPro_11.png" />
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">diffDays</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">date<span class="token punctuation">,</span> otherDate</span><span class="token punctuation">)</span> <span class="token operator">=></span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>date <span class="token operator">-</span> otherDate<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">diffDays</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">"2021-11-3"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">"2022-2-1"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// 90</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_13-날짜로부터-연중의-날-수-구하기" tabindex="-1"><a class="header-anchor" href="#_13-날짜로부터-연중의-날-수-구하기" aria-hidden="true">#</a> 13. 날짜로부터 연중의 날 수 구하기</h1>
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
<p>특정 날짜가 몇 번째 해인지 궁금하세요?</p>
<p><img src="@source/docs/Tech/2024-04-23-18JavaScriptOne-LinersThatllMakeYouLookLikeaPro/img/18JavaScriptOne-LinersThatllMakeYouLookLikeaPro_12.png" alt="JavaScript 코드 이미지"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">dayOfYear</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">date</span><span class="token punctuation">)</span> <span class="token operator">=></span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>date <span class="token operator">-</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">dayOfYear</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 74</span>
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
<h1 id="_14-무작위-16진수-색상-생성하기" tabindex="-1"><a class="header-anchor" href="#_14-무작위-16진수-색상-생성하기" aria-hidden="true">#</a> 14. 무작위 16진수 색상 생성하기</h1>
<p>필요한 경우 무작위 색상 값을 생성할 수 있는 이 함수를 사용해보세요.</p>
<p><img src="@source/docs/Tech/2024-04-23-18JavaScriptOne-LinersThatllMakeYouLookLikeaPro/img/18JavaScriptOne-LinersThatllMakeYouLookLikeaPro_13.png" alt="image"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">randomColor</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">'0'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">randomColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// #9dae4f</span>
<span class="token function">randomColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// #6ef10e</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_15-rgb-색상을-16진수로-변환하기" tabindex="-1"><a class="header-anchor" href="#_15-rgb-색상을-16진수로-변환하기" aria-hidden="true">#</a> 15. RGB 색상을 16진수로 변환하기</h1>
<p><img src="@source/docs/Tech/2024-04-23-18JavaScriptOne-LinersThatllMakeYouLookLikeaPro/img/18JavaScriptOne-LinersThatllMakeYouLookLikeaPro_14.png" alt="image"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">rgbToHex</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">r<span class="token punctuation">,</span> g<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">"#"</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">24</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>r <span class="token operator">&lt;&lt;</span> <span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>g <span class="token operator">&lt;&lt;</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">rgbToHex</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>  <span class="token comment">// '#ffffff'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_16-모든-쿠키-제거하기" tabindex="-1"><a class="header-anchor" href="#_16-모든-쿠키-제거하기" aria-hidden="true">#</a> 16. 모든 쿠키 제거하기</h1>
<img src="@source/docs/Tech/2024-04-23-18JavaScriptOne-LinersThatllMakeYouLookLikeaPro/img/18JavaScriptOne-LinersThatllMakeYouLookLikeaPro_15.png" />
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">clearCookies</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> document<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">';'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^ +</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">=.*</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">=;expires=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUTCString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;path=/</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
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
<h1 id="_17-다크-모드-감지" tabindex="-1"><a class="header-anchor" href="#_17-다크-모드-감지" aria-hidden="true">#</a> 17. 다크 모드 감지</h1>
<p><img src="@source/docs/Tech/2024-04-23-18JavaScriptOne-LinersThatllMakeYouLookLikeaPro/img/18JavaScriptOne-LinersThatllMakeYouLookLikeaPro_16.png" alt="이미지"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> isDarkMode <span class="token operator">=</span> window<span class="token punctuation">.</span>matchMedia <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span><span class="token function">matchMedia</span><span class="token punctuation">(</span><span class="token string">'(prefers-color-scheme: dark)'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>matches
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_18-두-변수-교환" tabindex="-1"><a class="header-anchor" href="#_18-두-변수-교환" aria-hidden="true">#</a> 18. 두 변수 교환</h1>
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
<img src="@source/docs/Tech/2024-04-23-18JavaScriptOne-LinersThatllMakeYouLookLikeaPro/img/18JavaScriptOne-LinersThatllMakeYouLookLikeaPro_17.png" />
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span>foo<span class="token punctuation">,</span> bar<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>bar<span class="token punctuation">,</span> foo<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_19-잠깐-멈추세요" tabindex="-1"><a class="header-anchor" href="#_19-잠깐-멈추세요" aria-hidden="true">#</a> 19. 잠깐 멈추세요</h1>
<img src="@source/docs/Tech/2024-04-23-18JavaScriptOne-LinersThatllMakeYouLookLikeaPro/img/18JavaScriptOne-LinersThatllMakeYouLookLikeaPro_18.png" />
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">pause</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">millis</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> millis<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token function">pause</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fatfish'</span><span class="token punctuation">)</span> <span class="token comment">// 1초 후</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="마지막으로" tabindex="-1"><a class="header-anchor" href="#마지막으로" aria-hidden="true">#</a> 마지막으로</h1>
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
<p>여기 오늘 공유할 수 있는 모든 한 줄 코드 요령이 있어요. 읽어주셔서 감사합니다.</p>
<h1 id="평문으로-🚀" tabindex="-1"><a class="header-anchor" href="#평문으로-🚀" aria-hidden="true">#</a> 평문으로 🚀</h1>
<p>In Plain English 커뮤니티의 일원이 되어 주셔서 감사합니다! 떠나기 전에:</p>
<ul>
<li>글쓴이를 박수로 응원해주세요 👏</li>
<li>팔로우해주세요: X | LinkedIn | YouTube | Discord | 뉴스레터</li>
<li>다른 플랫폼 방문하기: Stackademic | CoFeed | Venture</li>
<li>PlainEnglish.io에서 더 많은 콘텐츠를 만나보세요</li>
</ul>
</div></template>
