<template><div><h2 id="눈에-띄는-잔치" tabindex="-1"><a class="header-anchor" href="#눈에-띄는-잔치" aria-hidden="true">#</a> 눈에 띄는 잔치</h2>
<p>당신의 웹사이트는 정보 이상의 것입니다 - 그것은 경험입니다. 그리고 이 경험을 형성하는 주요 요소 중 하나는 타이포그래피입니다. 폰트와 색상은 단순히 장식 이상의 강력한 디자인 요소입니다 - 이들은 웹상에서 효과적인 커뮤니케이션, 브랜드 정체성 및 사용자 경험을 확립합니다. 신중하게 선택하고 심사숙고하게 적용함으로써 웹 디자이너는 시각적으로 멋진, 감정적으로 공감되며 사용자 친화적인 웹사이트를 만들어 방문자에게 오랫동안 지속되는 인상을 남길 수 있습니다. 이 블로그에서는 CSS 폰트와 색상을 자세히 살펴보고 웹 디자인의 기술을 습득하는 데 도움이 되도록 하겠습니다.</p>
<p><img src="@source/docs/Tech/2024-03-28-ACloserLookatCSSFontsandColors/img/ACloserLookatCSSFontsandColors_0.png" alt="이미지"></p>
<h1 id="폰트" tabindex="-1"><a class="header-anchor" href="#폰트" aria-hidden="true">#</a> 폰트:</h1>
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
<p>폰트는 웹사이트의 분위기와 개성을 결정하는 데 중요한 역할을 합니다. 웹 페이지의 쓰여진 내용의 가독성, 개성, 시각적 매력을 결정하는 데 중요한 항목 중 하나입니다.</p>
<h2 id="폰트-패밀리" tabindex="-1"><a class="header-anchor" href="#폰트-패밀리" aria-hidden="true">#</a> 폰트 패밀리:</h2>
<p>CSS를 사용하여 텍스트의 폰트 패밀리를 지정할 수 있습니다. 세리프(serif) 및 산세리프(sans-serif) 두 종류의 폰트 패밀리가 있습니다. 세리프 폰트는 문자 끝에 작은 선이나 장식이 있지만, 산세리프 폰트는 그렇지 않습니다. Arial, Times New Roman 같은 흔한 옵션을 선택하거나 Google Fonts와 같이 더 독특한 폰트를 선택할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>body <span class="token punctuation">{</span>
    font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">"Helvetica"</span><span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
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
<p>여기서 전체 웹페이지의 글꼴을 Helvetica로 설정했습니다. 만약 Helvetica를 사용할 수 없는 경우 일반적인 산세리프 글꼴로 대체됩니다.</p>
<p>CSS에는 여러 글꼴을 정의하는 방법이 있습니다:</p>
<h2 id="일반-글꼴-패밀리" tabindex="-1"><a class="header-anchor" href="#일반-글꼴-패밀리" aria-hidden="true">#</a> 일반 글꼴 패밀리:</h2>
<p>CSS는 &quot;serif,&quot; &quot;sans-serif,&quot; &quot;monospace&quot; 등과 같은 일반적인 글꼴 패밀리를 제공합니다. 이러한 패밀리는 특정 글꼴이 사용자의 기기에 없는 경우 대체 옵션으로 작용합니다.</p>
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
<h2 id="특정-글꼴" tabindex="-1"><a class="header-anchor" href="#특정-글꼴" aria-hidden="true">#</a> 특정 글꼴:</h2>
<p>이름으로 특정 글꼴을 지정할 수도 있어요. 더 넓은 호환성을 위해 대체 옵션을 포함하는 것이 중요합니다.</p>
<h2 id="구글-글꼴" tabindex="-1"><a class="header-anchor" href="#구글-글꼴" aria-hidden="true">#</a> 구글 글꼴:</h2>
<p>Google Fonts는 무료 글꼴의 방대한 컬렉션을 제공합니다. 웹사이트에 쉽게 통합할 수 있는 글꼴을 선택하여 HTML 파일의 head 섹션에 링크를 추가하고 CSS에서 사용하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link href<span class="token operator">=</span><span class="token string">"https://fonts.googleapis.com/css?family=Roboto"</span> rel<span class="token operator">=</span><span class="token string">"stylesheet"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>body <span class="token punctuation">{</span>
    font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">'Roboto'</span><span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="글꼴-크기" tabindex="-1"><a class="header-anchor" href="#글꼴-크기" aria-hidden="true">#</a> 글꼴 크기:</h2>
<p>CSS를 사용하면 텍스트의 크기를 제어할 수 있습니다. 픽셀(px), ems(em), 백분율(%)과 같은 다양한 단위를 사용할 수 있습니다.```</p>
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
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 코드는 문단의 글꼴 크기를 16픽셀로 설정합니다.</p>
<h2 id="글꼴-스타일" tabindex="-1"><a class="header-anchor" href="#글꼴-스타일" aria-hidden="true">#</a> 글꼴 스타일:</h2>
<p>CSS 속성인 <code v-pre>font-style</code>을 사용하여 글꼴 스타일을 조절할 수 있습니다. 글꼴 스타일은 텍스트가 이탤릭체인지 일반체인지를 지정합니다.</p>
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
<h2 id="글꼴-두께" tabindex="-1"><a class="header-anchor" href="#글꼴-두께" aria-hidden="true">#</a> 글꼴 두께:</h2>
<p>글꼴 두께는 텍스트의 문자가 얼마나 두꺼운지 또는 가늘지를 결정합니다. 100(가늘게)에서 900(굵게)까지의 두께를 지정할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>p <span class="token punctuation">{</span>
    font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">;</span>
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
<p>페이지의 모든 단락을 글자 두께를 조금 높게 만들게 됩니다.</p>
<h2 id="줄-간격" tabindex="-1"><a class="header-anchor" href="#줄-간격" aria-hidden="true">#</a> 줄 간격:</h2>
<p>줄 간격은 텍스트 줄 사이의 수직 간격을 나타냅니다. 적절한 줄 간격을 설정하면 가독성이 향상됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>p <span class="token punctuation">{</span>
    line<span class="token operator">-</span>height<span class="token operator">:</span> <span class="token number">1.5</span><span class="token punctuation">;</span>
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
<p>이는 단락의 줄 간격을 글꼴 크기의 1.5배로 설정합니다.</p>
<h2 id="텍스트-정렬" tabindex="-1"><a class="header-anchor" href="#텍스트-정렬" aria-hidden="true">#</a> 텍스트 정렬:</h2>
<p>text-align과 같은 CSS 속성을 사용하여 텍스트를 정렬할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>h3 <span class="token punctuation">{</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
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
<h2 id="텍스트-꾸미기" tabindex="-1"><a class="header-anchor" href="#텍스트-꾸미기" aria-hidden="true">#</a> 텍스트 꾸미기:</h2>
<p>텍스트 꾸미기 속성을 사용하면 밑줄, 윗줄, 가로줄 및 없음과 같은 효과를 추가할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>a <span class="token punctuation">{</span>
    text<span class="token operator">-</span>decoration<span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="색상" tabindex="-1"><a class="header-anchor" href="#색상" aria-hidden="true">#</a> 색상:</h1>
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
<p>색은 웹사이트에 활기와 시각적 매력을 더해줍니다. 색은 정보 전달, 감정 유발, 그리고 시각적 계층 구조 설정에 중요한 역할을 합니다.</p>
<h2 id="텍스트-색상" tabindex="-1"><a class="header-anchor" href="#텍스트-색상" aria-hidden="true">#</a> 텍스트 색상:</h2>
<p>색 속성은 텍스트의 색상을 설정할 수 있습니다. 미리 정의된 색 이름, 16진수 코드, RGB 또는 HSL 값 등을 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>p <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">333333</span><span class="token punctuation">;</span>
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
<p>페이지의 모든 문단을 어두운 회색으로 만들 수 있어요.</p>
<h3 id="배경-색상" tabindex="-1"><a class="header-anchor" href="#배경-색상" aria-hidden="true">#</a> 배경 색상:</h3>
<p>요소의 배경 색상을 변경하려면 background-color 속성을 사용하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>body <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #f0f0f0<span class="token punctuation">;</span>
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
<p>웹 페이지 전체에 연한 회색 배경을 설정해줄거예요.</p>
<h2 id="호버-효과" tabindex="-1"><a class="header-anchor" href="#호버-효과" aria-hidden="true">#</a> 호버 효과:</h2>
<p>사용자가 요소 위에 마우스를 올렸을 때 색상을 변경할 수 있어요. 이때 :hover 가상 클래스를 사용해요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">a</span><span class="token operator">:</span>hover <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #ff0000<span class="token punctuation">;</span>
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
<p>CSS는 &quot;red,&quot; &quot;blue,&quot; &quot;green&quot; 등과 같은 이름이 지정된 색상 세트를 지원합니다. 이들은 사용하기 쉽지만 옵션이 제한적입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>h2 <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> blue<span class="token punctuation">;</span>
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
<h2 id="_16진수-색상" tabindex="-1"><a class="header-anchor" href="#_16진수-색상" aria-hidden="true">#</a> 16진수 색상:</h2>
<p>16진수 표기법은 RGB 값들을 지정하여 더 정확한 색상 조절을 가능하게 합니다. CSS에서 색상을 정의하는 가장 일반적으로 사용되는 방법입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>p <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token constant">FFA500</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rgb와-rgba" tabindex="-1"><a class="header-anchor" href="#rgb와-rgba" aria-hidden="true">#</a> RGB와 RGBA:</h2>
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
<p>RGB 표기법은 빨강, 초록, 파랑 값의 조합을 사용하여 색상을 정의합니다. RGBA에는 투명도를 지정하기 위한 추가적인 알파 매개변수가 포함되어 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>p <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 흑색의 투명도 50% */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hsl-및-hsla" tabindex="-1"><a class="header-anchor" href="#hsl-및-hsla" aria-hidden="true">#</a> HSL 및 HSLA:</h2>
<p>HSL(Hue, Saturation, Lightness) 표기법은 색상을 색조, 채도 및 명도에 기초하여 직관적으로 지정하는 방법을 제공합니다. HSLA에는 투명도를 위한 알파 매개변수가 포함되어 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>p <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">hsla</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token number">0.3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS로 글꼴과 색상을 다루는 방법을 이해하면 귀하의 브랜드 정체성을 효과적으로 전달하고 전체 사용자 경험을 향상시킬 수 있습니다. 다양한 글꼴과 색상을 실험하여 웹 사이트 스타일과 잘 어울리는 완벽한 조합을 찾아보세요. 사이트 전체에서 간단하고 가독성 있으며 일관된 스타일을 유지하는 것이 중요합니다.</p>
<p>웹 개발의 멋진 세계에서 더 많은 통찰력을 기대해 주세요. 즐거운 코딩되세요!```</p>
</div></template>
