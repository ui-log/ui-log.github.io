<template><div><p><img src="https://miro.medium.com/v2/resize:fit:1200/1*h8jwJu8Ccrcv7Q_hpjipPw.gif" alt="이미지"></p>
<p>환영합니다! #100DaysOfCode 챌린지 8일차에 오신 것을 환영합니다! 오늘은 HTML과 CSS를 사용하여 애니메이션 로더를 만들어볼 것입니다. 이 로더는 웹 프로젝트에 멋진 요소를 추가하고 사용자들이 콘텐츠를 로드할 때 기다릴 동안 사용자들을 끌어들일 것입니다. 이제 단계별로 살펴봅시다!</p>
<h1 id="단계-1-프로젝트-설정하기" tabindex="-1"><a class="header-anchor" href="#단계-1-프로젝트-설정하기" aria-hidden="true">#</a> 단계 1: 프로젝트 설정하기</h1>
<p>먼저 HTML 파일과 CSS 파일을 만들어 프로젝트를 설정해봅시다.</p>
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
<p>index.html:</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>style.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Animated Loader<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loader<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>style.css:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* 여기에 CSS 스타일을 작성하세요 */</span>
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
<h1 id="단계-2-로더-만들기" tabindex="-1"><a class="header-anchor" href="#단계-2-로더-만들기" aria-hidden="true">#</a> 단계 2: 로더 만들기</h1>
<p>이제 HTML을 사용하여 로더를 만들고 CSS를 사용하여 스타일을 지정해 봅시다.</p>
<p>index.html:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"ko"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"style.css"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>애니메이션 로더<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"loader"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>스타일<span class="token punctuation">.</span>css<span class="token operator">:</span>

<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token template-punctuation string">`</span></span>`js
<span class="token punctuation">.</span>loader <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 8px solid #f3f3f3<span class="token punctuation">;</span>
  border<span class="token operator">-</span>top<span class="token operator">:</span> 8px solid #3498db<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 50px<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 50px<span class="token punctuation">;</span>
  <span class="token literal-property property">animation</span><span class="token operator">:</span> spin 2s linear infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@keyframes spin <span class="token punctuation">{</span>
  <span class="token number">0</span><span class="token operator">%</span> <span class="token punctuation">{</span> <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">{</span> <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-3-로더-사용자-정의하기" tabindex="-1"><a class="header-anchor" href="#단계-3-로더-사용자-정의하기" aria-hidden="true">#</a> 단계 3: 로더 사용자 정의하기</h1>
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
<p>로더의 모양을 원하는 대로 조정하여 색상, 크기 및 애니메이션 속도를 변경할 수 있습니다.</p>
<p>style.css:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>loader <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 8px solid #f3f3f3<span class="token punctuation">;</span> <span class="token comment">/* 바깥 테두리 색상 */</span>
  border<span class="token operator">-</span>top<span class="token operator">:</span> 8px solid #3498db<span class="token punctuation">;</span> <span class="token comment">/* 로더 색상 */</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 50px<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 50px<span class="token punctuation">;</span>
  <span class="token literal-property property">animation</span><span class="token operator">:</span> spin 2s linear infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@keyframes spin <span class="token punctuation">{</span>
  <span class="token number">0</span><span class="token operator">%</span> <span class="token punctuation">{</span> <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">{</span> <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
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
<h1 id="단계-4-개성을-담아보세요" tabindex="-1"><a class="header-anchor" href="#단계-4-개성을-담아보세요" aria-hidden="true">#</a> 단계 4: 개성을 담아보세요</h1>
<p>로더에 개인적인 터치를 더해보는 건 어떨까요? 색상을 변경하거나 그라데이션을 추가하거나, 로고를 넣는 것도 좋은 아이디어입니다.</p>
<p>style.css:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>loader <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 8px solid #f3f3f3<span class="token punctuation">;</span> <span class="token comment">/* 바깥 테두리 색상 */</span>
  border<span class="token operator">-</span>top<span class="token operator">:</span> 8px solid #ff6347<span class="token punctuation">;</span> <span class="token comment">/* 로더 색상 */</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 50px<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 50px<span class="token punctuation">;</span>
  <span class="token literal-property property">animation</span><span class="token operator">:</span> spin 2s linear infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@keyframes spin <span class="token punctuation">{</span>
  <span class="token number">0</span><span class="token operator">%</span> <span class="token punctuation">{</span> <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">{</span> <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-5-마무리-작업" tabindex="-1"><a class="header-anchor" href="#단계-5-마무리-작업" aria-hidden="true">#</a> 단계 5: 마무리 작업</h1>
<p>추가적인 효과를 위해 트랜지션을 추가하거나 애니메이션 속도를 조절하여 로더를 더욱 향상시킬 수 있습니다.</p>
<p>style.css:</p>
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
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.loader</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 8px solid #f3f3f3<span class="token punctuation">;</span> <span class="token comment">/* 외곽 테두리 색상 */</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 8px solid #ff6347<span class="token punctuation">;</span> <span class="token comment">/* 로더 색상 */</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> spin 1s linear infinite<span class="token punctuation">;</span> <span class="token comment">/* 빠른 애니메이션 */</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> border-color 0.3s ease<span class="token punctuation">;</span> <span class="token comment">/* 부드러운 전환 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> spin</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span> <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span> <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-6-결론" tabindex="-1"><a class="header-anchor" href="#단계-6-결론" aria-hidden="true">#</a> 단계 6: 결론</h1>
<p>축하합니다! HTML과 CSS를 사용하여 세련된 애니메이션 로더를 성공적으로 만들었습니다. 이 로더를 웹 프로젝트에 통합하여 사용자 경험을 향상시키세요.```</p>
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
<p>여기서 전체 소스 코드를 다운로드하고 트위터에서 제 코딩 여정을 따라와주세요. 도움이 필요하거나 피드백이 있으면 Bento에서 저에게 연락할 수 있어요.</p>
<p>즐거운 코딩하세요! 🚀</p>
</div></template>
