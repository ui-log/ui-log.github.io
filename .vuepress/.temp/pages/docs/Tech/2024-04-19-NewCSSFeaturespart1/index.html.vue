<template><div><h1 id="sass와-같은-css-중첩" tabindex="-1"><a class="header-anchor" href="#sass와-같은-css-중첩" aria-hidden="true">#</a> SASS와 같은 CSS 중첩</h1>
<h2 id="css-중첩이란" tabindex="-1"><a class="header-anchor" href="#css-중첩이란" aria-hidden="true">#</a> CSS 중첩이란?</h2>
<p>CSS 중첩은 하나의 요소의 스타일 규칙을 다른 요소 내부에서 정의할 수 있는 기능입니다. 특정 자식 요소나 가상 선택자에 스타일을 적용하기 위해 동일한 선택자를 반복해서 작성하는 대신, 단일 선택자 아래에 중첩시켜서 적용할 수 있습니다.</p>
<p>중첩을 사용하면 관련된 스타일을 그룹화하고 중첩 구조로 CSS를 작성할 수 있습니다.</p>
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
<p>예시:</p>
<h1 id="레이어-지시문을-사용하여-스타일-재정렬" tabindex="-1"><a class="header-anchor" href="#레이어-지시문을-사용하여-스타일-재정렬" aria-hidden="true">#</a> @ 레이어 지시문을 사용하여 스타일 재정렬.</h1>
<p>@layer CSS at-rule은 캐스케이드 레이어를 선언하는 데 사용되며 여러 캐스케이드 레이어가 있는 경우 우선 순위 순서를 정의하는 데도 사용할 수 있습니다.</p>
<h2 id="구문" tabindex="-1"><a class="header-anchor" href="#구문" aria-hidden="true">#</a> 구문</h2>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 스타일을 적용할 순서를 지정합니다 */</span>
@layer CardDetails<span class="token punctuation">,</span> card<span class="token punctuation">;</span>

<span class="token comment">/* 많은 스타일이 있다고 상상해보세요 */</span>
@layer card <span class="token punctuation">{</span>
  <span class="token punctuation">.</span>card <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
@layer CardDetails <span class="token punctuation">{</span>
  <span class="token punctuation">.</span>card <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> green<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>브라우저 지원: 94.36%</p>
<img src="@source/docs/Tech/2024-04-19-NewCSSFeaturespart1/img/NewCSSFeaturespart1_0.png" />
```
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
<h1 id="갭" tabindex="-1"><a class="header-anchor" href="#갭" aria-hidden="true">#</a> 갭</h1>
<p>갭 속성을 사용하면 요소들 사이에 수평 및 수직 간격을 추가할 수 있습니다. 물론 여태껏 우리는 마진을 사용해서 이를 할 수 있었습니다. 그러나 항상 간격을 두려는 아이템들이 한 줄에 걸쳐 나열될 때, 원치않는 마진이 생기는 불편한 경우가 있죠.</p>
<h2 id="구문-1" tabindex="-1"><a class="header-anchor" href="#구문-1" aria-hidden="true">#</a> 구문</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 하나의 &lt;length> 값 */</span>
<span class="token literal-property property">gap</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
<span class="token literal-property property">gap</span><span class="token operator">:</span> 1em<span class="token punctuation">;</span>
<span class="token literal-property property">gap</span><span class="token operator">:</span> 3vmin<span class="token punctuation">;</span>
<span class="token literal-property property">gap</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>5cm<span class="token punctuation">;</span>

<span class="token comment">/* 하나의 &lt;percentage> 값 */</span>
<span class="token literal-property property">gap</span><span class="token operator">:</span> <span class="token number">16</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token literal-property property">gap</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>

<span class="token comment">/* 두 개의 &lt;length> 값 */</span>
<span class="token literal-property property">gap</span><span class="token operator">:</span> 20px 10px<span class="token punctuation">;</span>
<span class="token literal-property property">gap</span><span class="token operator">:</span> 1em <span class="token number">0</span><span class="token punctuation">.</span>5em<span class="token punctuation">;</span>
<span class="token literal-property property">gap</span><span class="token operator">:</span> 3vmin 2vmax<span class="token punctuation">;</span>
<span class="token literal-property property">gap</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>5cm 2mm<span class="token punctuation">;</span>

<span class="token comment">/* 하나 또는 두 개의 &lt;percentage> 값 */</span>
<span class="token literal-property property">gap</span><span class="token operator">:</span> <span class="token number">16</span><span class="token operator">%</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token literal-property property">gap</span><span class="token operator">:</span> 21px <span class="token number">82</span><span class="token operator">%</span><span class="token punctuation">;</span>

<span class="token comment">/* calc() 값 */</span>
<span class="token literal-property property">gap</span><span class="token operator">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token operator">%</span> <span class="token operator">+</span> 20px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token literal-property property">gap</span><span class="token operator">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>20px <span class="token operator">+</span> <span class="token number">10</span><span class="token operator">%</span><span class="token punctuation">)</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token operator">%</span> <span class="token operator">-</span> 5px<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 전역 값 */</span>
<span class="token literal-property property">gap</span><span class="token operator">:</span> inherit<span class="token punctuation">;</span>
<span class="token literal-property property">gap</span><span class="token operator">:</span> initial<span class="token punctuation">;</span>
<span class="token literal-property property">gap</span><span class="token operator">:</span> revert<span class="token punctuation">;</span>
<span class="token literal-property property">gap</span><span class="token operator">:</span> revert<span class="token operator">-</span>layer<span class="token punctuation">;</span>
<span class="token literal-property property">gap</span><span class="token operator">:</span> unset<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>gap 프로퍼티는 두 가지 값을 취할 수 있어요: 행 값 (다시 말해, 요소들 사이의 행 간격)과 열 값 (요소들 사이의 열 간격): gap: <code v-pre>행 간격</code> <code v-pre>열 간격</code></p>
<p>예시:</p>
<p>여백을 포함한 갭</p>
<p>여백 없이 갭</p>
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
<p>브라우저 지원율: 96.39%</p>
<p><img src="@source/docs/Tech/2024-04-19-NewCSSFeaturespart1/img/NewCSSFeaturespart1_1.png" alt="이미지"></p>
<p>읽어 주셔서 감사합니다.</p>
</div></template>
