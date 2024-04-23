<template><div><div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">오류 메시지</span>](<span class="token url">./img/Resolvingerror0308010CdigitalenveloperoutinesunsupportedinNodejsv1990_0.png</span>)</span>

아래는 오류 메시지의 내용입니다:

```js
Error: error:0308010C:digital envelope routines::unsupported
 at new Hash (node:internal/crypto/hash:71:19)
 at Object.createHash (node:crypto:140:10)
 at module.exports (D:\Projects\Mini Project\Frontend\node_modules\webpack\lib\util\createHash.js:135:53)
 at NormalModule._initBuildHash (D:\Projects\Mini Project\Frontend\node_modules\webpack\lib\NormalModule.js:417:16)
 at D:\Projects\Mini Project\Frontend\node_modules\webpack\lib\NormalModule.js:452:10
 at D:\Projects\Mini Project\Frontend\node_modules\webpack\lib\NormalModule.js:323:13
 at D:\Projects\Mini Project\Frontend\node_modules\loader-runner\lib\LoaderRunner.js:367:11
 at D:\Projects\Mini Project\Frontend\node_modules\loader-runner\lib\LoaderRunner.js:233:18
 at context.callback (D:\Projects\Mini Project\Frontend\node_modules\loader-runner\lib\LoaderRunner.js:111:13)
 at D:\Projects\Mini Project\Frontend\node_modules\babel-loader\lib\index.js:59:103 {
 opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
 library: 'digital envelope routines',
 reason: 'unsupported',
 code: 'ERR_OSSL_EVP_UNSUPPORTED'
}
Node.js v19.9.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">Error</span><span class="token operator">:</span> error<span class="token operator">:</span>0308010C<span class="token operator">:</span>digital envelope routines<span class="token operator">:</span><span class="token operator">:</span>unsupported
    at <span class="token keyword">new</span> <span class="token class-name">Hash</span> <span class="token punctuation">(</span>node<span class="token operator">:</span>internal<span class="token operator">/</span>crypto<span class="token operator">/</span>hash<span class="token operator">:</span><span class="token number">71</span><span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">)</span>
    at Object<span class="token punctuation">.</span><span class="token function">createHash</span> <span class="token punctuation">(</span>node<span class="token operator">:</span>crypto<span class="token operator">:</span><span class="token number">140</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">)</span>
    at module<span class="token punctuation">.</span><span class="token function">exports</span> <span class="token punctuation">(</span><span class="token constant">D</span><span class="token operator">:</span>\Projects\Mini Project\Frontend\node_modules\webpack\lib\util\createHash<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">135</span><span class="token operator">:</span><span class="token number">53</span><span class="token punctuation">)</span>       
    at NormalModule<span class="token punctuation">.</span><span class="token function">_initBuildHash</span> <span class="token punctuation">(</span><span class="token constant">D</span><span class="token operator">:</span>\Projects\Mini Project\Frontend\node_modules\webpack\lib\NormalModule<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">417</span><span class="token operator">:</span><span class="token number">16</span><span class="token punctuation">)</span>
    at <span class="token function">handleParseError</span> <span class="token punctuation">(</span><span class="token constant">D</span><span class="token operator">:</span>\Projects\Mini Project\Frontend\node_modules\webpack\lib\NormalModule<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">471</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">)</span>        
    at <span class="token constant">D</span><span class="token operator">:</span>\Projects\Mini Project\Frontend\node_modules\webpack\lib\NormalModule<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">503</span><span class="token operator">:</span><span class="token number">5</span>
    at <span class="token constant">D</span><span class="token operator">:</span>\Projects\Mini Project\Frontend\node_modules\webpack\lib\NormalModule<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">358</span><span class="token operator">:</span><span class="token number">12</span>
    at <span class="token constant">D</span><span class="token operator">:</span>\Projects\Mini Project\Frontend\node_modules\loader<span class="token operator">-</span>runner\lib\LoaderRunner<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">373</span><span class="token operator">:</span><span class="token number">3</span>
    at <span class="token function">iterateNormalLoaders</span> <span class="token punctuation">(</span><span class="token constant">D</span><span class="token operator">:</span>\Projects\Mini Project\Frontend\node_modules\loader<span class="token operator">-</span>runner\lib\LoaderRunner<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">214</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">)</span>
    at <span class="token function">iterateNormalLoaders</span> <span class="token punctuation">(</span><span class="token constant">D</span><span class="token operator">:</span>\Projects\Mini Project\Frontend\node_modules\loader<span class="token operator">-</span>runner\lib\LoaderRunner<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">221</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token constant">D</span><span class="token operator">:</span>\Projects\Mini Project\Frontend\node_modules\react<span class="token operator">-</span>scripts\scripts\start<span class="token punctuation">.</span>js<span class="token operator">:</span><span class="token number">19</span>
  <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  <span class="token operator">^</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="원인" tabindex="-1"><a class="header-anchor" href="#원인" aria-hidden="true">#</a> 원인:</h1>
<p>에러 메시지는 OpenSSL 라이브러리의 디지털 봉투 루틴 초기화에 문제가 있다고 합니다. 이는 종속성의 호환되지 않는 버전, 잘못된 구성 또는 Angular 프로젝트에서 사용되는 암호화 함수에 문제가 있는 등 다양한 요소에 의해 발생할 수 있습니다.</p>
<h1 id="해결-방법" tabindex="-1"><a class="header-anchor" href="#해결-방법" aria-hidden="true">#</a> 해결 방법:</h1>
<p>단계 1: “package.json” 파일을 엽니다.</p>
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
<p>Step2: &quot;Script&quot;을 검색합니다:</p>
<p><img src="@source/docs/Nextjs/2024-04-05-Resolvingerror0308010CdigitalenveloperoutinesunsupportedinNodejsv1990/img/Resolvingerror0308010CdigitalenveloperoutinesunsupportedinNodejsv1990_1.png" alt="이미지"></p>
<p>Step3: 다음과 같이 &quot;start&quot; 및 &quot;build&quot;를 업데이트하고 저장하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token string">"set NODE_OPTIONS=--openssl-legacy-provider &amp;&amp; react-scripts start"</span><span class="token punctuation">,</span>
 <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"set NODE_OPTIONS=--openssl-legacy-provider &amp;&amp; react-scripts build"</span><span class="token punctuation">,</span>
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
<p>아래는 Markdown 형식으로 테이블 태그를 변경하세요.</p>
</div></template>
