<template><div><p>최근에 나는 아래 이미지에서 볼 수 있는 것과 같은 특정 현대적 형식을 따르는 이력서를 가지고 싶었습니다. 이 기사에서는 몇 가지 기술적인 과제를 해결한 방법과 세부 정보를 추가하는 단계별 프로세스를 공유하겠습니다.</p>
<p>내 개인적인 목표는 몇 가지 변수가 있는 간단한 템플릿을 가지고 있어서, 글꼴 패밀리나 글꼴 크기를 조정함으로써 큰 변화의 느낌을 갖고 싶을 때 쉽게 할 수 있도록 하는 것이었습니다.</p>
<p>내가 위대한 디자이너이거나 간결하고 확장 가능한 HTML 및 CSS 코드를 작성한 것은 아니기 때문에 이 프로젝트에서 개선해야 할 부분이 많을 것으로 예상합니다. 그러나 내 필요에는 충분했고, 다른 사람들에게도 도움이 될 수 있기를 희망합니다.</p>
<p>글꼴과 이력서 레이아웃을 선택하기 전에 디자인에 관한 몇 가지 기사를 읽는 것이 유용할 수 있다고 제안하고 싶습니다. 나는 특히 99design.com의 이 기사가 매우 유용하다고 생각했습니다.</p>
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
<p><img src="@source/docs/Tech/2024-04-19-CreatingaresumeusingHTMLandCSSandsavingitasaPDF/img/CreatingaresumeusingHTMLandCSSandsavingitasaPDF_0.png" alt="Creating a resume using HTML and CSS and saving it as a PDF"></p>
<p>지금까지 난 더 간단한 형식을 선호해 왔고, 기업에 보낸 이력서 대부분은 LaTeX로 작성한 것이었습니다. 그러나 이제 스타일을 변경할 좋은 기회라고 생각했어요.</p>
<h1 id="코드-단계별로" tabindex="-1"><a class="header-anchor" href="#코드-단계별로" aria-hidden="true">#</a> 코드 단계별로</h1>
<p>이제 어떻게 시작했는지 공유하겠어요. 첫 번째로 다중 페이지 이력서를 작성할 수 있도록 기본적인 설정을 구성하는 것이었습니다.</p>
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
<h2 id="레이아웃" tabindex="-1"><a class="header-anchor" href="#레이아웃" aria-hidden="true">#</a> 레이아웃</h2>
<p>대부분의 렌더링 문제를 피할 수 있게 한 주요한 요소는 CSS 단위로 어디서나 센티미터를 사용한 것입니다. 브라우저에서 나에게 충분히 좋아 보이고 PDF로 변환해도 큰 문제가 없습니다.</p>
<p>그리고 여기 결과가 있습니다. 그다지 인상적이지는 않지만, 마우스 오른쪽 버튼을 클릭하고 인쇄하면 PDF에서 동일한 형식을 얻을 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-04-19-CreatingaresumeusingHTMLandCSSandsavingitasaPDF/img/CreatingaresumeusingHTMLandCSSandsavingitasaPDF_1.png" alt="이미지"></p>
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
<p>다음에는 일부 div를 만들고 CSS를 추가하려고 했어요.</p>
<p>이제부터 CSS와 HTML 코드 일부를 추가할 거예요. 각 HTML 코드 스니펫은 이전 것과 연결돼 있는 것 같은 조각이 있어요. 예를 들어 <code v-pre>div</code>나 다른 요소 같은 거죠. 이렇게 하면 혼란스러워 질 걱정은 하지 않겠죠.</p>
<p>index.css</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>direction<span class="token operator">:</span> row<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>leftPanel <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">27</span><span class="token operator">%</span><span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #<span class="token number">484444</span><span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>7cm<span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
  align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>rightPanel <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">73</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>7cm<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>index.html</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><p>페이지 사이즈를 'A4'로 설정:</p>
<div class="container">
<div class="leftPanel">
</div>
<div class="rightPanel">
</div>
</div> 
<p>장면이 조금씩 모양을 잡기 시작했다.</p>
<p>이미지를 참고하실래요:
<img src="@source/docs/Tech/2024-04-19-CreatingaresumeusingHTMLandCSSandsavingitasaPDF/img/CreatingaresumeusingHTMLandCSSandsavingitasaPDF_2.png" /></p>
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
<h2 id="왼쪽-패널" tabindex="-1"><a class="header-anchor" href="#왼쪽-패널" aria-hidden="true">#</a> 왼쪽 패널</h2>
<p>여기에 HTML과 CSS와 함께 Google 폰트 링크를 조금 추가하여 좀 더 멋있게 만들어 보았어요.</p>
<p>index.css</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>item <span class="token punctuation">{</span>
  padding<span class="token operator">-</span>bottom<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>7cm<span class="token punctuation">;</span>
  padding<span class="token operator">-</span>top<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>7cm<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>item h2 <span class="token punctuation">{</span>
  margin<span class="token operator">-</span>top<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>bottomLineSeparator <span class="token punctuation">{</span>
  border<span class="token operator">-</span>bottom<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>05cm solid white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
h2 <span class="token punctuation">{</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">'Archivo Narrow'</span><span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>leftPanel h2 <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
img <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 4cm<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 4cm<span class="token punctuation">;</span>
  margin<span class="token operator">-</span>bottom<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>7cm<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>15cm solid white<span class="token punctuation">;</span>
  object<span class="token operator">-</span>fit<span class="token operator">:</span> cover<span class="token punctuation">;</span>
  object<span class="token operator">-</span>position<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>details <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<p>index.html</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"preconnect"</span> href<span class="token operator">=</span><span class="token string">"https://fonts.googleapis.com"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"preconnect"</span> href<span class="token operator">=</span><span class="token string">"https://fonts.gstatic.com"</span> crossorigin
<span class="token operator">&lt;</span>link href<span class="token operator">=</span><span class="token string">"https://fonts.googleapis.com/css2?family=Archivo+Narrow&amp;family=Julius+Sans+One&amp;family=Open+Sans&amp;family=Source+Sans+Pro&amp;display=swap"</span> rel<span class="token operator">=</span><span class="token string">"stylesheet"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"leftPanel"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"avatar.png"</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"details"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"item bottomLineSeparator"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>
        연락처
      <span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"item bottomLineSeparator"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>
        기술
      <span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"item"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>
        학력
      <span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-04-19-CreatingaresumeusingHTMLandCSSandsavingitasaPDF/img/CreatingaresumeusingHTMLandCSSandsavingitasaPDF_3.png" />
<h2 id="font-awesome-사용하기" tabindex="-1"><a class="header-anchor" href="#font-awesome-사용하기" aria-hidden="true">#</a> Font Awesome 사용하기</h2>
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
<p>다음으로, 예쁘고 쉽게 설정할 수 있는 아이콘을 추가하기 위해 Font Awesome를 사용했습니다.</p>
<p>index.css</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>leftPanel <span class="token punctuation">.</span>smallText<span class="token punctuation">,</span> 
<span class="token punctuation">.</span>leftPanel <span class="token punctuation">.</span>smallText<span class="token punctuation">,</span> 
<span class="token punctuation">.</span>leftPanel <span class="token punctuation">.</span>smallText span<span class="token punctuation">,</span> 
<span class="token punctuation">.</span>leftPanel <span class="token punctuation">.</span>smallText p<span class="token punctuation">,</span> 
<span class="token punctuation">.</span>smallText a <span class="token punctuation">{</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>45cm<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>smallText<span class="token punctuation">,</span> 
<span class="token punctuation">.</span>smallText span<span class="token punctuation">,</span> 
<span class="token punctuation">.</span>smallText p<span class="token punctuation">,</span> 
<span class="token punctuation">.</span>smallText a <span class="token punctuation">{</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">'Source Sans Pro'</span><span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
  text<span class="token operator">-</span>align<span class="token operator">:</span> justify<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>contactIcon <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>5cm<span class="token punctuation">;</span>
  text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>leftPanel<span class="token punctuation">,</span> 
<span class="token punctuation">.</span>leftPanel a <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #bebebe<span class="token punctuation">;</span>
  text<span class="token operator">-</span>decoration<span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.html</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link href<span class="token operator">=</span><span class="token string">"https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"</span> rel<span class="token operator">=</span><span class="token string">"stylesheet"</span><span class="token operator">></span>

<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"item bottomLineSeparator"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>h2<span class="token operator">></span>
    연락처
  <span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"smallText"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-phone contactIcon"</span> aria<span class="token operator">-</span>hidden<span class="token operator">=</span><span class="token string">"true"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
      <span class="token punctuation">(</span><span class="token operator">+</span><span class="token number">33</span><span class="token punctuation">)</span> <span class="token number">777</span> <span class="token number">777</span> <span class="token number">77</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-envelope contactIcon"</span> aria<span class="token operator">-</span>hidden<span class="token operator">=</span><span class="token string">"true"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
      <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"lorem@ipsum.com@gmail.com"</span><span class="token operator">></span>
        lorem@ipsum<span class="token punctuation">.</span>com
      <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-map-marker contactIcon"</span> aria<span class="token operator">-</span>hidden<span class="token operator">=</span><span class="token string">"true"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
      미국 뉴욕
    <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-linkedin-square contactIcon"</span> aria<span class="token operator">-</span>hidden<span class="token operator">=</span><span class="token string">"true"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
      <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>
        <span class="token keyword">in</span><span class="token operator">/</span>loremipsum
      <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"lastParagrafNoMarginBottom"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-skype contactIcon"</span> aria<span class="token operator">-</span>hidden<span class="token operator">=</span><span class="token string">"true"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
      <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>
        loremipsum
      <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Tech/2024-04-19-CreatingaresumeusingHTMLandCSSandsavingitasaPDF/img/CreatingaresumeusingHTMLandCSSandsavingitasaPDF_4.png" alt="Creating a resume using HTML and CSS and saving it as a PDF"></p>
<h2 id="숫자와-단어를-정렬해보세요" tabindex="-1"><a class="header-anchor" href="#숫자와-단어를-정렬해보세요" aria-hidden="true">#</a> 숫자와 단어를 정렬해보세요</h2>
<p>다음으로 하고 싶은 작은 디테일은 경력의 년수를 정렬하고 &quot;year&quot; 단어의 단수와 복수를 맞추는 것이었습니다.</p>
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
<p>index.css</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>skill <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>direction<span class="token operator">:</span> row<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> space<span class="token operator">-</span>between<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>yearsOfExperience <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>6cm<span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>direction<span class="token operator">:</span> row<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>alignleft <span class="token punctuation">{</span>
  text<span class="token operator">-</span>align<span class="token operator">:</span> left <span class="token operator">!</span>important<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 1cm<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>alignright <span class="token punctuation">{</span>
  text<span class="token operator">-</span>align<span class="token operator">:</span> right <span class="token operator">!</span>important<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>6cm<span class="token punctuation">;</span>
  margin<span class="token operator">-</span>right<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>1cm<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.html</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"item bottomLineSeparator"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>h2<span class="token operator">></span>
    기술
  <span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"smallText"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"skill"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>span<span class="token operator">></span>회계<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"yearsOfExperience"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"alignright"</span><span class="token operator">></span><span class="token number">14</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"alignleft"</span><span class="token operator">></span>년<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"skill"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>span<span class="token operator">></span>워드<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"yearsOfExperience"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"alignright"</span><span class="token operator">></span><span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"alignleft"</span><span class="token operator">></span>년<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"skill"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>span<span class="token operator">></span>파워포인트<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"yearsOfExperience"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"alignright"</span><span class="token operator">></span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"alignleft"</span><span class="token operator">></span>년<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p><img src="@source/docs/Tech/2024-04-19-CreatingaresumeusingHTMLandCSSandsavingitasaPDF/img/CreatingaresumeusingHTMLandCSSandsavingitasaPDF_5.png" alt="이미지"></p>
<h2 id="filler-section" tabindex="-1"><a class="header-anchor" href="#filler-section" aria-hidden="true">#</a> Filler section</h2>
<p>다음 섹션은 기술적인 도전이 없지만 이력서의 매우 중요한 부분입니다.</p>
<p>index.css</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>bolded <span class="token punctuation">{</span>
  font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>white <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.html</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>
    교육
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>smallText<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bolded white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      경제학 학사
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
      시드니 대학교
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
      2010 - 2014
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-04-19-CreatingaresumeusingHTMLandCSSandsavingitasaPDF/img/CreatingaresumeusingHTMLandCSSandsavingitasaPDF_6.png" />
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
<h2 id="오른쪽-패널" tabindex="-1"><a class="header-anchor" href="#오른쪽-패널" aria-hidden="true">#</a> 오른쪽 패널</h2>
<p>다음 부분에서 제가 분석한 다른 이력서 모델들에서 조금 더 길게 된 사람의 이름을 발견했어요. 그래서 h1 CSS에 transform을 추가하여 똑같이 해보았습니다. 더 쉽게 이루어질 수 있었는지 또는 더 나은 아이디어가 있었는지 확신할 수는 없지만, 제게는 도움이 되었어요.</p>
<p>index.css</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>h1 <span class="token punctuation">{</span> 
  font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">'Julius Sans One'</span><span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
h1 <span class="token punctuation">{</span> 
  font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">;</span> 
  font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>2cm<span class="token punctuation">;</span>
  <span class="token literal-property property">transform</span><span class="token operator">:</span><span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1.15</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  margin<span class="token operator">-</span>bottom<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>2cm<span class="token punctuation">;</span>
  margin<span class="token operator">-</span>top<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>2cm<span class="token punctuation">;</span>
  text<span class="token operator">-</span>transform<span class="token operator">:</span> uppercase<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
h3 <span class="token punctuation">{</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">'Open Sans'</span><span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<p>index.html</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>```js
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rightPanel<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>
      Jhon Doe
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>smallText<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>
        Accountant
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
![CreatingaresumeusingHTMLandCSSandsavingitasaPDF_7](./img/CreatingaresumeusingHTMLandCSSandsavingitasaPDF_7.png)

index.html
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>h2<span class="token operator">></span>
    나에 대해
  <span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"smallText"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>
      Lorem ipsum dolor sit amet<span class="token punctuation">,</span> consectetur adipiscing elit<span class="token punctuation">.</span> Mauris venenatis<span class="token punctuation">,</span> justo sed feugiat pulvinar<span class="token punctuation">.</span><span class="token punctuation">,</span> quam ipsum tincidunt enim<span class="token punctuation">,</span> ac gravida est metus sit amet neque<span class="token punctuation">.</span> Curabitur ut arcu ut nunc finibus accumsan id id elit<span class="token punctuation">.</span> 
    <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>
      Vivamus non magna quis neque viverra finibus quis a tortor<span class="token punctuation">.</span> 
    <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-04-19-CreatingaresumeusingHTMLandCSSandsavingitasaPDF/img/CreatingaresumeusingHTMLandCSSandsavingitasaPDF_8.png" />
<h2 id="연결된-글머리-기호" tabindex="-1"><a class="header-anchor" href="#연결된-글머리-기호" aria-hidden="true">#</a> 연결된 글머리 기호</h2>
<p>아래 마지막 도전 과제는 작업 경험 섹션 항목의 글머리 기호를 연결하는 예쁜 선을 추가하는 것이었습니다. 이를 구현하기 위해 이 좋은 기사를 참고했습니다.```</p>
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
<p>index.css</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>workExperience<span class="token operator">></span>ul<span class="token operator">></span>li ul <span class="token punctuation">{</span>
  padding<span class="token operator">-</span>left<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>5cm<span class="token punctuation">;</span>
  list<span class="token operator">-</span>style<span class="token operator">-</span>type<span class="token operator">:</span> disc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>workExperience<span class="token operator">></span>ul <span class="token punctuation">{</span>
  list<span class="token operator">-</span>style<span class="token operator">-</span>type<span class="token operator">:</span> none<span class="token punctuation">;</span>
  padding<span class="token operator">-</span>left<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>workExperience<span class="token operator">></span>ul<span class="token operator">></span>li <span class="token punctuation">{</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  padding<span class="token operator">-</span>bottom<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>5cm<span class="token punctuation">;</span>
  padding<span class="token operator">-</span>left<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>5cm<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>workExperience<span class="token operator">></span>ul<span class="token operator">></span>li<span class="token operator">:</span>before <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #b8abab<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>05cm<span class="token punctuation">;</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>1cm<span class="token punctuation">;</span>
  <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">.</span>2cm<span class="token punctuation">;</span> <span class="token comment">/* 테두리 제거 후 수정 */</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>05cm<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>workExperience<span class="token operator">></span>ul<span class="token operator">></span>li<span class="token operator">:</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
  background<span class="token operator">-</span>image<span class="token operator">:</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token string">"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' viewBox='0 0 32 32' focusable='false'%3E%3Ccircle stroke='none' fill='%23484444' cx='16' cy='16' r='10'%3E%3C/circle%3E%3C/svg%3E"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  background<span class="token operator">-</span>repeat<span class="token operator">:</span> no<span class="token operator">-</span>repeat<span class="token punctuation">;</span>
  background<span class="token operator">-</span>size<span class="token operator">:</span> contain<span class="token punctuation">;</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">.</span>09cm<span class="token punctuation">;</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>35cm<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>35cm<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>jobPosition <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>direction<span class="token operator">:</span> row<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> space<span class="token operator">-</span>between<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>jobPosition span<span class="token punctuation">,</span> 
<span class="token punctuation">.</span>projectName span <span class="token punctuation">{</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">'Source Sans Pro'</span><span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.html</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"workExperience"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>h2<span class="token operator">></span>
    Work experience
  <span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
  <span class="token operator">&lt;</span>ul<span class="token operator">></span>
    <span class="token operator">&lt;</span>li<span class="token operator">></span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"jobPosition"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bolded"</span><span class="token operator">></span>
          회계사
        <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span>span<span class="token operator">></span>
          <span class="token number">2014</span>년 <span class="token number">6</span>월 <span class="token operator">-</span> <span class="token number">2015</span>년 <span class="token number">9</span>월
        <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"projectName bolded"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>span<span class="token operator">></span>
          회계 프로젝트명 <span class="token operator">|</span> 회사명
        <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token operator">&lt;</span>li<span class="token operator">></span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"jobPosition"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bolded"</span><span class="token operator">></span>
          디지털 마케팅 전문가
        <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span>span<span class="token operator">></span>
          <span class="token number">2020</span>년 <span class="token number">11</span>월 <span class="token operator">-</span> <span class="token number">2021</span>년 <span class="token number">9</span>월
        <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"projectName bolded"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>span<span class="token operator">></span>
          프로젝트명 <span class="token operator">|</span> 회사명
        <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span> 
    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token operator">&lt;</span>li<span class="token operator">></span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"jobPosition"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bolded"</span><span class="token operator">></span>
          회계사
        <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span>span<span class="token operator">></span>
          <span class="token number">2017</span>년 <span class="token number">6</span>월 <span class="token operator">-</span> <span class="token number">2020</span>년 <span class="token number">5</span>월
        <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"projectName bolded"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>span<span class="token operator">></span>
          프로젝트명 <span class="token operator">|</span> 회사명
        <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p><img src="@source/docs/Tech/2024-04-19-CreatingaresumeusingHTMLandCSSandsavingitasaPDF/img/CreatingaresumeusingHTMLandCSSandsavingitasaPDF_9.png" alt="이미지"></p>
<p>이 기사에서는 작업 경험의 세부 정보를 건너 뜀으로써 가치를 추가하지 않았습니다. 프로젝트의 핵심 작업이 이전 단계에서 완료되었기 때문입니다.</p>
<h2 id="스타일-빠르게-변경하기" tabindex="-1"><a class="header-anchor" href="#스타일-빠르게-변경하기" aria-hidden="true">#</a> 스타일 빠르게 변경하기</h2>
<p>마지막 부분에서는 CSS 섹션을 기능별로 정렬하여 글꼴 패밀리, 색상 및 크기에 대한 하위 섹션을 만들었습니다. 이제 몇 가지 수정만으로 완전히 새로운 스타일 느낌을 줄 수 있습니다.</p>
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
<p>아래 이미지에서 등간 고정폭 글꼴을 사용했어요. 글꼴 크기 조정하는 데 약 2분 정도 걸렸어요. 가독성이 좋지 않기 때문에 이 글꼴을 사용해서 이력서를 어떤 채용 담당자에게도 보내지 않겠죠.</p>
<p><img src="@source/docs/Tech/2024-04-19-CreatingaresumeusingHTMLandCSSandsavingitasaPDF/img/CreatingaresumeusingHTMLandCSSandsavingitasaPDF_10.png" alt="이미지"></p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>인쇄용 문서를 HTML과 CSS를 사용해 작성하는 것은 확실히 가능하지만, 나쁜 결과물을 만들지 않도록 각 변경 사항을 주의깊게 살펴봐야 해요.</p>
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
<p>저는 디자인 스킬을 향상시키는 데 도움이 된 재미있는 연습이었고, 이 글도 작성할 수 있어서 기쁩니다. HTML과 CSS로 이력서를 작성하는 것이 오랫동안 제 해야할 일 목록에 있었는데, 이번 도전은 목록에서 또 다른 항목을 해결할 수 있는 완벽한 기회였습니다.</p>
</div></template>
