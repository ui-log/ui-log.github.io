<template><div><p>만약 웹사이트를 스타일링하고 싶다면, CSS 속성과 그에 해당하는 값들을 이해하는 것이 중요합니다.</p>
<h2 id="css-속성이란" tabindex="-1"><a class="header-anchor" href="#css-속성이란" aria-hidden="true">#</a> CSS 속성이란?</h2>
<p>CSS 속성은 HTML 요소를 스타일링하는 다양한 방법들과 스타일을 입히고자 하는 특성들을 가리킵니다. CSS 속성은 단독으로 동작할 수 없고, 원하는 결과물을 얻기 위해서는 해당하는 값이 함께 필요합니다.</p>
<h2 id="css-속성-값이란" tabindex="-1"><a class="header-anchor" href="#css-속성-값이란" aria-hidden="true">#</a> CSS 속성 값이란?</h2>
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
<p>CSS Property Value는 스타일링하려는 속성의 여러 가능한 외관 중 하나를 선택할 수 있게 합니다.</p>
<p>본 글에서는 CSS 속성의 네 가지 카테고리에 대해 이야기할 것이며, 각각 2개씩 소개할 것입니다. 해당 카테고리는 다음과 같습니다:</p>
<ul>
<li>텍스트 속성</li>
<li>글꼴 속성</li>
<li>간격 속성</li>
<li>크기 조정 속성</li>
</ul>
<h1 id="텍스트-속성" tabindex="-1"><a class="header-anchor" href="#텍스트-속성" aria-hidden="true">#</a> 텍스트 속성</h1>
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
<p>이 속성은 HTML 문서에서 텍스트를 스타일링하는 데 사용됩니다.</p>
<p>텍스트 속성의 예시는 다음과 같습니다:</p>
<ul>
<li>Color: 이 속성은 텍스트의 색상을 설정합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>h1<span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>여기서 h1은 선택자로 작용하고, 색은 속성으로 작용하며, red는 속성 값으로 작용합니다. 이 문맥에서 값은 파란색, 녹색 또는 다른 색일 수 있습니다.</p>
<ol start="2">
<li>Text-align: 이는 문서 내 텍스트를 정렬합니다.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>h1<span class="token punctuation">{</span>
  text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 문맥에서 값은 end, left, right 또는 다른 위치일 수 있습니다.</p>
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
<h1 id="폰트-속성" tabindex="-1"><a class="header-anchor" href="#폰트-속성" aria-hidden="true">#</a> 폰트 속성</h1>
<p>이 속성은 당신의 취향에 맞게 글꼴을 디자인하는 데 사용됩니다.</p>
<p>폰트 속성의 예시로는:</p>
<ul>
<li>폰트 패밀리 (Font-family): 이는 문서 내 텍스트의 글꼴 패밀리를 지정합니다.</li>
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
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">h1</span><span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'Courier New'</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 문맥에서 값은 Lexend Deca, Playfair Display 또는 다른 글꼴 패밀리일 수 있습니다. 글꼴 패밀리에 대체 글꼴을 추가하는 것이 중요합니다. 대체 글꼴은 선택한 글꼴을 사용할 수 없을 때 사용되는 글꼴입니다. 일반적으로 쉼표(,)로 구분됩니다.</p>
<ol start="2">
<li>글꼴 크기: 문서의 텍스트의 글꼴 크기를 지정합니다.</li>
</ol>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">h1</span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>가로 갭: 20px<br>
세로 갭: 10px</p>
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
<li>마진: 이것은 테두리 바깥에 공간을 만들 때 사용됩니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>h1<span class="token punctuation">{</span>
  margin<span class="token operator">-</span>top<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
  margin<span class="token operator">-</span>bottom<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
  margin<span class="token operator">-</span>left<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
  margin<span class="token operator">-</span>right<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>margin-top, margin-bottom, margin-left, margin-right을 사용하는 대신 마진 속성을 사용하여 모든 방향에 동일한 속성을 지정합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>h1<span class="token punctuation">{</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위치를 지정할 때 위쪽과 아래쪽에는 특정 값을 가져야 하지만, 왼쪽과 오른쪽에는 다른 값을 가지는 경우가 있습니다. 이렇게 해요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>h1<span class="token punctuation">{</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> 10px 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 맥락에서 위쪽과 아래쪽은 10px이고, 왼쪽과 오른쪽은 30px입니다. 모든 면에 대해 각각 다른 값을 원하는 경우엔 아래와 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>h1<span class="token punctuation">{</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> 10px 15px 20px 25px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>여기서 첫 번째는 위, 두 번째는 오른쪽, 세 번째는 아래, 네 번째는 왼쪽입니다.</p>
<ol start="2">
<li>Padding: 이는 콘텐츠 주변/테두리 내부에 공간을 만드는 데 사용됩니다.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>h1 <span class="token punctuation">{</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기에는 마진에 적용된 규칙이 적용됩니다.</p>
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
<h1 id="크기-조정-속성" tabindex="-1"><a class="header-anchor" href="#크기-조정-속성" aria-hidden="true">#</a> 크기 조정 속성</h1>
<p>이것은 HTML 문서의 콘텐츠 크기를 변경하는 데 사용됩니다.</p>
<p>크기 조정 속성의 예시:</p>
<ul>
<li>높이: 이는 콘텐츠의 높이를 늘리거나 줄이는 데 사용됩니다.</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>img<span class="token punctuation">{</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>만일 텍스트에 사용된다면, 텍스트 아래에 공백만 생성됩니다. 원하신다면 글꼴 크기를 늘리는 데 사용됩니다.</p>
<ol start="2">
<li>너비: 이는 콘텐츠의 너비를 늘리거나 줄이는 데 사용됩니다.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>img<span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이는 텍스트 크기를 증가하거나 감소시키는 데 사용할 수 없으며, 텍스트를 줄였을 때 다음 줄로 줄바꿈됩니다.</p>
</div></template>
