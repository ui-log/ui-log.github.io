<template><div><img src="@source/docs/Tech/2024-04-19-5Next-levelCSSTrickstoEnhanceYourWebDesign/img/5Next-levelCSSTrickstoEnhanceYourWebDesign_0.png" />
<p>CSS(Cascading Style Sheets)은 개발자들이 멋진 웹 페이지를 디자인할 수 있도록 해주는 강력한 도구입니다. 이 기사에서는 웹 디자인 기술을 한 단계 더 발전시킬 수 있는 5가지 CSS 트릭을 살펴보겠습니다.</p>
<h1 id="_1-css를-사용하여-html-속성-값-가져오기" tabindex="-1"><a class="header-anchor" href="#_1-css를-사용하여-html-속성-값-가져오기" aria-hidden="true">#</a> 1. CSS를 사용하여 HTML 속성 값 가져오기</h1>
<p>CSS의 attr() 함수를 사용하면 스타일 시트 내에서 HTML 속성의 값을 검색할 수 있습니다. 다음 예제에서 나는 attr() 함수를 사용하여 ::after 의 가상 클래스의 span HTML 요소의 데이터-값 속성을 이용하여 텍스트 내용을 나타냅니다.</p>
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
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>counter<span class="token punctuation">"</span></span> <span class="token attr-name">data-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">#counter::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">attr</span><span class="token punctuation">(</span>data-value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 CSS 속성을 사용하면 JS가 HTML 요소의 텍스트 내용을 직접 조작하지 않고 값 변경을 쉽게 할 수 있습니다. 이 코드를 실제로 확인하려면 이 CodePen 예시를 살펴보세요.</p>
<h1 id="_2-css를-사용하여-크기-조정하기" tabindex="-1"><a class="header-anchor" href="#_2-css를-사용하여-크기-조정하기" aria-hidden="true">#</a> 2. CSS를 사용하여 크기 조정하기</h1>
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
<p>CSS의 resize 속성을 사용하면 사용자가 텍스트 영역 HTML 요소와 같은 크기 조절 컨트롤을 사용하여 요소의 너비와 높이를 동적으로 조정할 수 있습니다. 수평, 수직 또는 양쪽으로 조절할 수 있습니다.</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.resize</span><span class="token punctuation">{</span>
  <span class="token property">resize</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>빠른 데모를 확인하려면 아래 CodePen을 확인해보세요.</p>
<h1 id="_3-css를-사용한-증가" tabindex="-1"><a class="header-anchor" href="#_3-css를-사용한-증가" aria-hidden="true">#</a> 3. CSS를 사용한 증가</h1>
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
<p>CSS 카운터 기능은 숫자 값을 자동으로 생성하고 표시하여 개발자가 명시적으로 제공해야 하는 필요성을 제거합니다. 이를 위해 counter-reset, counter-increment 및 counter() 함수라는 3가지 CSS 속성이 필요합니다.</p>
<ul>
<li>counter-reset — 새로운 카운터를 만들거나 현재 카운터를 재설정하는 데 사용됩니다. 기본적으로 0으로 할당됩니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>counter<span class="token operator">-</span>reset<span class="token operator">:</span> item<span class="token operator">-</span>counter<span class="token punctuation">;</span> <span class="token comment">/* 변수 이름처럼 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>카운터의 시작 번호를 설정하려면 다음과 같이 할 수 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>counter<span class="token operator">-</span>reset<span class="token operator">:</span> item<span class="token operator">-</span>counter <span class="token number">5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>counter-increment — 현재 카운터를 증가시킵니다. 기본적으로 1씩 증가합니다.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>counter<span class="token operator">-</span>increment<span class="token operator">:</span> item<span class="token operator">-</span>counter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>현재 카운터를 특정 숫자만큼 증가시키고 싶다면 다음과 같이 할 수 있습니다.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> counter<span class="token operator">-</span>increment<span class="token operator">:</span> item<span class="token operator">-</span>counter <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>counter(): 현재 카운터의 값을 검색합니다</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"Item "</span> <span class="token function">counter</span><span class="token punctuation">(</span>item<span class="token operator">-</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 CodePen은 아래 div에 자동으로 h1 요소를 추가하는 방법을 보여줍니다. CSS는 각 h1 태그 앞에 숫자를 자동으로 추가하여 수동으로 개발자 입력이나 JS 사용이 필요하지 않습니다. 이는 훨씬 깔끔한 코드를 제공합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
 <span class="token operator">&lt;</span>h1<span class="token operator">></span>토피<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Tech/2024-04-19-5Next-levelCSSTrickstoEnhanceYourWebDesign/img/5Next-levelCSSTrickstoEnhanceYourWebDesign_1.png" alt="다음 수준 CSS 기술로 웹 디자인 향상시키기"></p>
<p>아래 CodePen을 확인해보세요.</p>
<h1 id="_4-css만-사용하여-이미지의-배경-제거하기" tabindex="-1"><a class="header-anchor" href="#_4-css만-사용하여-이미지의-배경-제거하기" aria-hidden="true">#</a> 4. CSS만 사용하여 이미지의 배경 제거하기</h1>
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
<p>이를 위해 mix-blend-mode CSS 속성을 사용할 수 있습니다. 이를 이용하여 요소의 콘텐츠가 부모 요소와 배경과 어떻게 혼합되어야 하는지 설정할 수 있습니다. 이 경우 img 요소입니다.</p>
<p>여기서 두 개의 이미지를 사용했습니다: 하나는 색이 칠해진 이미지이고, 다른 하나는 검은 색인 이미지이며, 두 이미지 모두 흰 배경을 가지고 있습니다. CSS를 사용하여 이미지의 배경을 제거하려고 합니다. 어떤 이미지 편집 소프트웨어도 사용하지 않고요.</p>
<p><img src="@source/docs/Tech/2024-04-19-5Next-levelCSSTrickstoEnhanceYourWebDesign/img/5Next-levelCSSTrickstoEnhanceYourWebDesign_2.png" alt="image"></p>
<p>색이 칠해진 이미지로부터 흰 배경을 제거하려면 mix-blend-mode CSS 속성을 multiply 값을 사용하여 적용할 수 있습니다. 두 레이어의 색이 값을 곱해서 혼합되어 더 어둡고 혼합된 모습으로 표시됩니다. 이는 색이 칠해진 이미지에서 흰 배경을 제거할 때 유용하며, 흰 부분이 투명해져서 기존 배경이 나타납니다. 이렇게 하면 이미지가 약간 어두워지는 효과가 있을 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>blend<span class="token operator">-</span>multiply<span class="token punctuation">{</span>
  mix<span class="token operator">-</span>blend<span class="token operator">-</span>mode<span class="token operator">:</span>multiply<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>흰색 배경을 검은 이미지에서 제거하려면 mix-blend-mode CSS 속성을 사용할 수 있습니다. 값으로 color-burn을 사용합니다. 이 속성은 요소의 색상을 배경과 혼합하여 어둡게 만드는 효과를 적용합니다. 이 방법은 어두운 영역을 강조하여 화상 또는 그림자 모양을 만듭니다. 이러한 경우에 사용하기에 완벽합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>burn<span class="token operator">-</span>color<span class="token punctuation">{</span>
  mix<span class="token operator">-</span>blend<span class="token operator">-</span>mode<span class="token operator">:</span>color<span class="token operator">-</span>burn<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS를 적용한 후 최종 결과는 다음과 같습니다.</p>
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
<p><img src="@source/docs/Tech/2024-04-19-5Next-levelCSSTrickstoEnhanceYourWebDesign/img/5Next-levelCSSTrickstoEnhanceYourWebDesign_3.png" alt="이미지"></p>
<p>아래 CodePen을 확인해보세요.</p>
<h2 id="_5-필요한-곳에만-그림자-추가하기" tabindex="-1"><a class="header-anchor" href="#_5-필요한-곳에만-그림자-추가하기" aria-hidden="true">#</a> 5. 필요한 곳에만 그림자 추가하기</h2>
<p>요소에 그림자를 추가하려면 일반적으로 CSS 속성 box-shadow를 사용합니다. 이 속성은 요소 주변에 그림자를 추가합니다. 투명 배경을 가진 PNG 이미지에 box-shadow 속성을 추가하면 여전히 이미지 주변에 정사각형 모양의 배경이 나타납니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>img <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 250px<span class="token punctuation">;</span>
  box<span class="token operator">-</span>shadow<span class="token operator">:</span> 15px 15px 15px #<span class="token number">555</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-04-19-5Next-levelCSSTrickstoEnhanceYourWebDesign/img/5Next-levelCSSTrickstoEnhanceYourWebDesign_4.png" />
<p>하지만 box-shadow 대신 drop-shadow() CSS 함수를 사용하여 filter CSS 속성을 사용하면 PNG의 투명 배경을 포함하지 않고 실제 이미지 부분에만 그림자를 추가할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>img <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 250px<span class="token punctuation">;</span>
  <span class="token literal-property property">filter</span><span class="token operator">:</span> drop<span class="token operator">-</span><span class="token function">shadow</span><span class="token punctuation">(</span>15px 15px 15px #<span class="token number">555</span><span class="token punctuation">)</span>
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
<p>최종 결과는 이렇게 보입니다.</p>
<img src="@source/docs/Tech/2024-04-19-5Next-levelCSSTrickstoEnhanceYourWebDesign/img/5Next-levelCSSTrickstoEnhanceYourWebDesign_5.png" />
<p>아래 CodePen도 꼭 확인하지 않도록해요!</p>
<p>그래서 여기에 5가지의 최상위 CSS 요령이 있어요. 각 요령은 독특한 터치를 더해주기 때문에, 자유롭게 결합하여 멋진 웹 디자인을 만들어보세요.</p>
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
<p>만약 여러분이 멋진 웹 디자인을 만들기 위한 더 많은 CSS 요령을 원하신다면, 이 기사의 후속편을 놓치지 마세요!</p>
<p>즐거운 코딩하세요!!!</p>
</div></template>
