<template><div><p><img src="@source/docs/Nextjs/2024-04-05-Its2024andNativeCSSNestingIsComing/img/Its2024andNativeCSSNestingIsComing_0.png" alt="이미지"></p>
<p>이것은 브라우저에 대한 흥미로운 기능입니다. 곧 CSS에서 중첩 구문을 사용할 수 있게 되어 더 아름답고 깔끔하며 유지보수가 쉬운 코드를 작성할 수 있게 될 겁니다.</p>
<h1 id="css-중첩이란" tabindex="-1"><a class="header-anchor" href="#css-중첩이란" aria-hidden="true">#</a> CSS 중첩이란?</h1>
<p>프론트엔드 개발자로서, 당신은 분명히 이 CSS 코드에 익숙할 것입니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"box"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>p<span class="token operator">></span>안녕 중간사이즈<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>안녕 파트피쉬<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>box<span class="token punctuation">{</span>
  <span class="token literal-property property">배경색</span><span class="token operator">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>box p<span class="token punctuation">{</span>
  <span class="token literal-property property">색</span><span class="token operator">:</span> 녹색<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>box div<span class="token punctuation">{</span>
  <span class="token literal-property property">색</span><span class="token operator">:</span> 빨강<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Nextjs/2024-04-05-Its2024andNativeCSSNestingIsComing/img/Its2024andNativeCSSNestingIsComing_1.png" alt="그림"></p>
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
<p>네, SCSS 또는 Less를 작성해야 된다면 더 쉽게할 수 있어요.</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">.box </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token selector">p </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">div </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS 중첩을 사용하면 모듈화되고 유지보수가 쉬운 CSS 코드를 작성할 수 있어요.</p>
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
<h1 id="_2-css에서-선택자를-중첩하는-방법" tabindex="-1"><a class="header-anchor" href="#_2-css에서-선택자를-중첩하는-방법" aria-hidden="true">#</a> 2. CSS에서 선택자를 중첩하는 방법</h1>
<p>한 번도 CSS에서 중첩 코드를 직접 작성할 수 있다고 생각하지 않았어요. 위 예제는 어떻게 작성되어야 할까요?</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>box<span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token operator">&amp;</span> p<span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> green<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token operator">&amp;</span> div<span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>네, 중첩을 구현하려면 &amp;만 사용하면 됩니다!</p>
<h2 id="_3-크롬-브라우저에서-css-중첩-기능을-경험하는-방법" tabindex="-1"><a class="header-anchor" href="#_3-크롬-브라우저에서-css-중첩-기능을-경험하는-방법" aria-hidden="true">#</a> 3. 크롬 브라우저에서 CSS 중첩 기능을 경험하는 방법</h2>
<p>CSS 중첩 기능은 아직 실험 단계에 있는 기능입니다. 위의 코드가 작동하도록 하려면 다음 두 단계를 거쳐야 합니다.</p>
<ul>
<li>크롬 브라우저의 주소 창에 chrome://flags/를 입력합니다.</li>
<li>실험 중인 웹 플랫폼 기능을 찾아서 &quot;Enabled&quot;로 설정합니다.</li>
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
<p><img src="@source/docs/Nextjs/2024-04-05-Its2024andNativeCSSNestingIsComing/img/Its2024andNativeCSSNestingIsComing_2.png" alt="이미지"></p>
<h1 id="간단한-영어로-🚀" tabindex="-1"><a class="header-anchor" href="#간단한-영어로-🚀" aria-hidden="true">#</a> 간단한 영어로 🚀</h1>
<p>In Plain English 커뮤니티에 참여해 주셔서 감사합니다! 떠나시기 전에:</p>
<ul>
<li>작가를 칭찬하고 팔로우해주세요 ️👏️️</li>
<li>팔로우하기: X | LinkedIn | YouTube | Discord | Newsletter</li>
<li>다른 플랫폼 방문하기: Stackademic | CoFeed | Venture | Cubed</li>
<li>PlainEnglish.io에서 더 많은 콘텐츠 확인하기</li>
</ul>
</div></template>
