<template><div><img src="@source/docs/Tech/2024-04-19-5SimpleCodingWebsiteTricks/img/5SimpleCodingWebsiteTricks_0.png" />
<p>이전에 사용해 온 몇 가지 웹사이트 트릭을 공유하고 싶어요. 이 트릭들이 여러분에게 도움이 되기를 바래요.</p>
<h1 id="_1-div-가운데-정렬하는-방법" tabindex="-1"><a class="header-anchor" href="#_1-div-가운데-정렬하는-방법" aria-hidden="true">#</a> 1. Div 가운데 정렬하는 방법</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/*css-grid*/</span> 
  <span class="token punctuation">{</span> 
    display grid<span class="token punctuation">;</span> 
    place<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token comment">/*css-flexbox*/</span> 
  <span class="token punctuation">{</span> 
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span> 
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span> 
    justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token comment">/*css-position*/</span>  
  <span class="token punctuation">{</span> 
    <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span> 
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span> 
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span> 
    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="_2-간단한-라이트-다크-모드-버튼" tabindex="-1"><a class="header-anchor" href="#_2-간단한-라이트-다크-모드-버튼" aria-hidden="true">#</a> 2. 간단한 라이트/다크 모드 버튼</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* HTML : */</span> 
<span class="token operator">&lt;</span>Button onclick<span class="token operator">=</span><span class="token string">"myFunction()"</span><span class="token operator">></span>여기를 클릭해주세요<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

<span class="token comment">/* CSS: */</span> 
<span class="token punctuation">.</span>dark<span class="token operator">-</span>mode<span class="token punctuation">{</span> 
  background<span class="token operator">-</span>color<span class="token operator">:</span> black<span class="token punctuation">;</span>  
  <span class="token literal-property property">color</span><span class="token operator">:</span> white<span class="token punctuation">;</span>  
  font<span class="token operator">-</span>family<span class="token operator">:</span> montserrat<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* JS: */</span> 
<span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
  <span class="token keyword">var</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">;</span>  
  element<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token string">"dark-mode"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-자바스크립트-복사-붙여넣기" tabindex="-1"><a class="header-anchor" href="#_3-자바스크립트-복사-붙여넣기" aria-hidden="true">#</a> 3. 자바스크립트 복사 붙여넣기</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* HTML: */</span>
<span class="token operator">&lt;</span>button onclick<span class="token operator">=</span><span class="token string">"copy('여기에 텍스트')"</span><span class="token operator">></span>텍스트 복사<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

<span class="token comment">/* JS: */</span>
<span class="token keyword">function</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span><span class="token punctuation">{</span> navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span><span class="token function">writeText</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token function">copy</span><span class="token punctuation">(</span><span class="token string">'여기에 텍스트'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="_4-html-목록" tabindex="-1"><a class="header-anchor" href="#_4-html-목록" aria-hidden="true">#</a> 4. HTML 목록</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>h3<span class="token operator">></span>순서 있는 목록<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
<span class="token operator">&lt;</span>ol type<span class="token operator">=</span><span class="token string">"A"</span><span class="token operator">></span>
 <span class="token operator">&lt;</span>li<span class="token operator">></span>사과<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
 <span class="token operator">&lt;</span>li<span class="token operator">></span>망고<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
 <span class="token operator">&lt;</span>li<span class="token operator">></span>바나나<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span>ol<span class="token operator">></span>

<span class="token operator">&lt;</span>h3<span class="token operator">></span>순서 없는 목록<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
<span class="token operator">&lt;</span>ul type<span class="token operator">=</span><span class="token string">"circle"</span><span class="token operator">></span>
 <span class="token operator">&lt;</span>li<span class="token operator">></span>사과<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
 <span class="token operator">&lt;</span>li<span class="token operator">></span>망고<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
 <span class="token operator">&lt;</span>li<span class="token operator">></span>바나나<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>

<span class="token operator">&lt;</span>h3<span class="token operator">></span>설명 목록<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
<span class="token operator">&lt;</span>dl<span class="token operator">></span>
 <span class="token operator">&lt;</span>dt<span class="token operator">></span>사과<span class="token operator">&lt;</span><span class="token operator">/</span>dt<span class="token operator">></span>
 <span class="token operator">&lt;</span>dd<span class="token operator">></span><span class="token operator">-</span> 건강에 좋음<span class="token operator">&lt;</span><span class="token operator">/</span>dd<span class="token operator">></span>
 <span class="token operator">&lt;</span>dt<span class="token operator">></span>망고<span class="token operator">&lt;</span><span class="token operator">/</span>dt<span class="token operator">></span>
 <span class="token operator">&lt;</span>dd<span class="token operator">></span><span class="token operator">-</span> 좋아해요<span class="token operator">&lt;</span><span class="token operator">/</span>dd<span class="token operator">></span>
 <span class="token operator">&lt;</span>dt<span class="token operator">></span>바나나<span class="token operator">&lt;</span><span class="token operator">/</span>dt<span class="token operator">></span>
 <span class="token operator">&lt;</span>dd<span class="token operator">></span><span class="token operator">-</span> 체중 증가에 좋음<span class="token operator">&lt;</span><span class="token operator">/</span>dd<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dl<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-맨-위로-스크롤-이동-효과" tabindex="-1"><a class="header-anchor" href="#_5-맨-위로-스크롤-이동-효과" aria-hidden="true">#</a> 5. 맨 위로 스크롤 이동 효과</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/*HTML :*/</span> 
<span class="token operator">&lt;</span>button onclick<span class="token operator">=</span><span class="token string">"scrollToTop()"</span> id<span class="token operator">=</span><span class="token string">"myBtn"</span> title<span class="token operator">=</span><span class="token string">"맨 위로 이동"</span><span class="token operator">></span>위로<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

<span class="token comment">/*JS :*/</span>
<span class="token keyword">function</span> <span class="token function">scrollToTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   window<span class="token punctuation">.</span> <span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">'smooth'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
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
<p>P.S.: 저는 예전 노트에서 이 코드를 찾았어요. 정확히 설명드리진 못하지만 궁금한 점이 있으시면 댓글란에 남겨주세요.</p>
</div></template>
