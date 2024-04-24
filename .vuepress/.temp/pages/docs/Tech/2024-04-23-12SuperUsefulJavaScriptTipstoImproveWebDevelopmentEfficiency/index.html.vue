<template><div><p><img src="@source/docs/Tech/2024-04-23-12SuperUsefulJavaScriptTipstoImproveWebDevelopmentEfficiency/img/12SuperUsefulJavaScriptTipstoImproveWebDevelopmentEfficiency_0.png" alt="이미지"></p>
<p>JavaScript은 매우 유연한 프로그래밍 언어로, 실용적인 방법을 쉽게 구현할 수 있습니다.
본 문서는 프로그래밍 기술을 향상시키고 프로젝트 연구 및 개발 효율성을 향상시킬 수 있는 12가지 매우 유용한 JavaScript 팁을 소개합니다.</p>
<p>🔄1. 대문자 낙타 표기법</p>
<p>&quot;대문자 낙타 표기법&quot;은 프로그래밍에서 사용되는 용어로, 각 단어가 소문자로 시작하는 첫 번째 단어를 제외한 모든 단어가 대문자로 시작하는 복합 단어나 구를 작성하는 방법을 말합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>기능 <span class="token function">camelize</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  리턴 str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">([a-z]+)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">match<span class="token punctuation">,</span> group</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    리턴 group <span class="token operator">?</span> group<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> match<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">''</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">camelize</span><span class="token punctuation">(</span><span class="token string">'hello world'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//결과: Hello World</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🔢2. 세 자리 숫자 구분 방법</p>
<p>세 자리 숫자 구분 방법은 숫자 표현식에서 콤마나 공백으로 구분된 세 자리 숫자를 말합니다. 특히 금액을 표현할 때 사용됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">numFormat</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?!^)(?=(\d{3})+$)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">','</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">numFormat</span><span class="token punctuation">(</span><span class="token string">'123456789'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//결과: 123,456,789</span>
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
<p>🎈3. a&amp;a.b&amp;a.b.c</p>
<p>a&amp;a.b&amp;a.b.c은 객체 속성 값을 안전하게 가져오고 &quot;정의되지 않은 속성을 읽을 수 없습니다&quot; 오류를 피하는 방법입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">//프록시 객체 생성</span>
<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propKey<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propKey<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxy<span class="token punctuation">.</span>b<span class="token punctuation">.</span>c<span class="token punctuation">)</span><span class="token comment">//결과: undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>📱4. 모바일 전화기 유형</p>
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
<p>안녕하세요! 안드로이드 폰, 아이폰 또는 아이패드 종류를 확인하는 데 사용할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getBrowserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> userAgent <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">isAndroid</span><span class="token operator">:</span> <span class="token function">Boolean</span><span class="token punctuation">(</span>userAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">android</span><span class="token regex-delimiter">/</span><span class="token regex-flags">ig</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isIphone</span><span class="token operator">:</span> <span class="token function">Boolean</span><span class="token punctuation">(</span>userAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">iphone|ipod</span><span class="token regex-delimiter">/</span><span class="token regex-flags">ig</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isIpad</span><span class="token operator">:</span> <span class="token function">Boolean</span><span class="token punctuation">(</span>userAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">ipad</span><span class="token regex-delimiter">/</span><span class="token regex-flags">ig</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🐵5. 폼 요청 시뮬레이션</p>
<p>파일 내보내기 기능을 구현해야 할 때, 폼 제출 방법을 시뮬레이션할 수 있어요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">url</span> 파일 경로
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">params</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">exportFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> form <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'form'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  form<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">'none'</span><span class="token punctuation">;</span>
  form<span class="token punctuation">.</span>action <span class="token operator">=</span> url<span class="token punctuation">;</span>
  form<span class="token punctuation">.</span>method <span class="token operator">=</span> <span class="token string">'post'</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>form<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    input<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">'hidden'</span><span class="token punctuation">;</span>
    input<span class="token punctuation">.</span>name <span class="token operator">=</span> key<span class="token punctuation">;</span>
    input<span class="token punctuation">.</span>value <span class="token operator">=</span> params<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    form<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  form<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  form<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 폼 요소 제거</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🔈6. 모든 브라우저에서 이벤트 바인딩 일관성 유지</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">customEventBind</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span> eventType<span class="token punctuation">,</span> callBack</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>ele<span class="token punctuation">.</span>addEventListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ele<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>eventType<span class="token punctuation">,</span> callBack<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>attachEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ele<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">'on'</span> <span class="token operator">+</span> eventType<span class="token punctuation">,</span> callBack<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    ele<span class="token punctuation">[</span><span class="token string">'on'</span> <span class="token operator">+</span> eventType<span class="token punctuation">]</span> <span class="token operator">=</span> callBack<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">customEventBind</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> <span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'요소가 클릭되었습니다'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 브라우저 페이지를 클릭하면 '요소가 클릭되었습니다'가 출력됩니다.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🌟7. 쿠키 설정하기
특정 사이트의 요구 사항에 따라 쿠키를 설정하는 방법을 파악하고 구현해보세요.</p>
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
<p>쿠키는 이름과 해당 값으로 구성되어 있으며, 이름, 값, 도메인 이름, 경로, 만료 시간 및 보안 플래그를 포함합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> expires<span class="token punctuation">,</span> path<span class="token punctuation">,</span> domain<span class="token punctuation">,</span> secure <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cookieString <span class="token operator">=</span> key <span class="token operator">+</span> <span class="token string">"="</span> <span class="token operator">+</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>expires<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> expirationDate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        expirationDate<span class="token punctuation">.</span><span class="token function">setTime</span><span class="token punctuation">(</span>expirationDate<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> expires <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cookieString <span class="token operator">+=</span> <span class="token string">"; expires="</span> <span class="token operator">+</span> expirationDate<span class="token punctuation">.</span><span class="token function">toUTCString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">)</span> cookieString <span class="token operator">+=</span> <span class="token string">"; path="</span> <span class="token operator">+</span> path<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>domain<span class="token punctuation">)</span> cookieString <span class="token operator">+=</span> <span class="token string">"; domain="</span> <span class="token operator">+</span> domain<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>secure<span class="token punctuation">)</span> cookieString <span class="token operator">+=</span> <span class="token string">"; secure"</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> cookieString<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🌇8. 주요 브라우저 정보 가져오기</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getBrowserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> browserRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(Chrome|Firefox|Safari|Opera|Edge|Trident)[\/ ]?([0-9a-zA-Z.]*)</span><span class="token regex-delimiter">/</span></span>
  <span class="token keyword">const</span> browserMatch <span class="token operator">=</span> userAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>browserRegex<span class="token punctuation">)</span>

  <span class="token keyword">let</span> browserName <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">let</span> browserVersion <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>browserMatch <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    browserName <span class="token operator">=</span> browserMatch<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    browserVersion <span class="token operator">=</span> browserMatch<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> browserName<span class="token punctuation">,</span>browserVersion <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getBrowserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">//UserAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'</span>
<span class="token comment">//결과: { browserName: 'Chrome', browserVersion: '120.0.0.0'}</span>
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
<p>🚀9. 운영 체제 정보 가져오기</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getUserOsInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> userAgent <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">;</span>
  <span class="token keyword">const</span> osRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">((Windows NT)|(Mac OS X))\s*([\d._]+)</span><span class="token regex-delimiter">/</span></span>
  <span class="token keyword">const</span> osMatch <span class="token operator">=</span> userAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>osRegex<span class="token punctuation">)</span>

  <span class="token keyword">let</span> osName <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> osVersion <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>osMatch <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    osName <span class="token operator">=</span> osMatch<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    osVersion <span class="token operator">=</span> osMatch<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    osName<span class="token punctuation">,</span>
    osVersion
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getUserOsInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">//UserAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'</span>
<span class="token comment">//Output: { osName: 'Mac OS X', osVersion: '10_15_7'}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>👍10. 날짜 크기 판단</p>
<p>날짜 형식을 사용할 때 사용자가 선택한 ⏪ 시작 날짜가 ⏩ 종료 날짜보다 이전인지 확인해야 합니다.</p>
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
<p>10월 10일의 시작 날짜는 2023년 12월 9일의 종료 날짜보다 빠릅니다.</p>
<ol start="11">
<li>URL 매개변수</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getQueryStringRegExp</span><span class="token punctuation">(</span><span class="token parameter">queryName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> url <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'?'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">''</span>
  <span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">'(^|&amp;)'</span> <span class="token operator">+</span> queryName <span class="token operator">+</span> <span class="token string">'=([^&amp;]*)(&amp;|$)'</span><span class="token punctuation">,</span> <span class="token string">'i'</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> r <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>r <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">unescape</span><span class="token punctuation">(</span><span class="token function">decodeURI</span><span class="token punctuation">(</span>r<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
<span class="token comment">//https://medium.com?name=amelia</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getQueryStringRegExp</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 출력: amelia</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>⛺12. 엑셀 파일 내보내기</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token constant">XLSX</span> <span class="token keyword">from</span> <span class="token string">'xlsx'</span>

<span class="token doc-comment comment">/**
 * headers: 테이블 헤더 정의
 */</span>
<span class="token keyword">function</span> <span class="token function">exportExcel</span><span class="token punctuation">(</span>headers<span class="token punctuation">,</span> data<span class="token punctuation">,</span> fileName <span class="token operator">=</span> <span class="token string">'export.xlsx'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> _headers <span class="token operator">=</span> headers
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span>
      Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> item<span class="token punctuation">.</span>key<span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> item<span class="token punctuation">.</span>title<span class="token punctuation">,</span> <span class="token literal-property property">position</span><span class="token operator">:</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span><span class="token number">65</span> <span class="token operator">+</span> i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> prev<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>next<span class="token punctuation">.</span>position<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> next<span class="token punctuation">.</span>key<span class="token punctuation">,</span> <span class="token literal-property property">v</span><span class="token operator">:</span> next<span class="token punctuation">.</span>title <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> _data <span class="token operator">=</span> data
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span>
      headers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token operator">=></span>
        Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> item<span class="token punctuation">[</span>key<span class="token punctuation">.</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">position</span><span class="token operator">:</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span><span class="token number">65</span> <span class="token operator">+</span> j<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> prev<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// 워크시트 구조로 변환</span>
    <span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> prev<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>next<span class="token punctuation">.</span>position<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">v</span><span class="token operator">:</span> next<span class="token punctuation">.</span>content <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 헤더와 데이터 병합</span>
  <span class="token keyword">const</span> output <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> _headers<span class="token punctuation">,</span> _data<span class="token punctuation">)</span>
  <span class="token comment">// 모든 셀의 위치 가져오기</span>
  <span class="token keyword">const</span> outputPos <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>output<span class="token punctuation">)</span>
  <span class="token comment">// 범위 계산,["A1",..., "H2"]</span>
  <span class="token keyword">const</span> ref <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>outputPos<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>outputPos<span class="token punctuation">[</span>outputPos<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
  <span class="token comment">// 워크북 객체 생성</span>
  <span class="token keyword">const</span> wb <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">SheetNames</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'mySheet'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">Sheets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">mySheet</span><span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> output<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'!ref'</span><span class="token operator">:</span> ref<span class="token punctuation">,</span>
        <span class="token string-property property">'!cols'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">wpx</span><span class="token operator">:</span> <span class="token number">45</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">wpx</span><span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">wpx</span><span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">wpx</span><span class="token operator">:</span> <span class="token number">80</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">wpx</span><span class="token operator">:</span> <span class="token number">150</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">wpx</span><span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">wpx</span><span class="token operator">:</span> <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">wpx</span><span class="token operator">:</span> <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 엑셀 내보내기</span>
  <span class="token constant">XLSX</span><span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>wb<span class="token punctuation">,</span> fileName<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> exportExcel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="마지막으로" tabindex="-1"><a class="header-anchor" href="#마지막으로" aria-hidden="true">#</a> 마지막으로</h1>
<p>위에 소개된 12가지 팁은 프로젝트 개발에서 매우 실용적이고 유용합니다. 자주 활용하시는 저로서 여러분의 프로젝트 개발 과정에 도움이 되기를 바라며, 여러분의 툴 라이브러리 🛠️를 개선하고, 프로그래밍 기술 🚀을 확장하고, 효율성 ⏱️을 향상시켜서 큰 성과를 이루시길 바랍니다.</p>
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
<h1 id="친절한-한국어-번역-🚀" tabindex="-1"><a class="header-anchor" href="#친절한-한국어-번역-🚀" aria-hidden="true">#</a> 친절한 한국어 번역 🚀</h1>
<p>In Plain English 커뮤니티의 일원이 되어 주셔서 감사합니다! 떠나시기 전에:</p>
<ul>
<li>작가를 칭찬하고 팔로우 해주세요 ️👏️️</li>
<li>팔로우하기: X | LinkedIn | YouTube | Discord | 뉴스레터</li>
<li>다른 플랫폼 방문하기: Stackademic | CoFeed | Venture</li>
<li>PlainEnglish.io에서 더 많은 콘텐츠 확인하기</li>
</ul>
</div></template>
