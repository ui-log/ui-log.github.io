<template><div><p><img src="@source/docs/Tech/2024-04-19-DiscoverCleverWaystoUseCSSforWebDesign/img/DiscoverCleverWaystoUseCSSforWebDesign_0.png" alt="이미지"></p>
<p>웹 디자인 기술을 향상시키기 위한 몇 가지 똑똑한 CSS 기술을 발견하고 싶으신가요? 아래에는 이를 위한 13가지 쉬운 팁이 있습니다!</p>
<h2 id="_1-부유-이미지-주변에-텍스트-곡선-처리하기" tabindex="-1"><a class="header-anchor" href="#_1-부유-이미지-주변에-텍스트-곡선-처리하기" aria-hidden="true">#</a> 1. 부유 이미지 주변에 텍스트 곡선 처리하기</h2>
<p>shape-outside는 기하학적 모양을 설정하여 주변에 텍스트가 부유할 수 있는 텍스트 영역을 생성할 수 있는 CSS 속성입니다. 웹 페이지에서 기하학적 모양을 사용하며 텍스트가 해당 모양 주변에 동적으로 감싸지도록 하려는 경우 도움이 될 수 있습니다. 아래는 샘플 코드 스니펫과 출력물입니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>circle<span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
  <span class="token literal-property property">float</span><span class="token operator">:</span> left<span class="token punctuation">;</span>
  shape<span class="token operator">-</span>outside<span class="token operator">:</span> <span class="token function">circle</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Tech/2024-04-19-DiscoverCleverWaystoUseCSSforWebDesign/img/DiscoverCleverWaystoUseCSSforWebDesign_1.png" alt="Image"></p>
<h2 id="_2-이미지-크기-조정하기" tabindex="-1"><a class="header-anchor" href="#_2-이미지-크기-조정하기" aria-hidden="true">#</a> 2. 이미지 크기 조정하기</h2>
<p>가끔 이미지가 주어진 너비에 맞게 비례적으로 크기를 조정해야 할 때가 있습니다. 이를 쉽게 구현하는 방법 중 하나는 최대 너비를 사용하는 것입니다. 아래는 이를 처리하는 간단한 코드 스니펫입니다.</p>
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
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">img</span> <span class="token punctuation">{</span>
    <span class="token property">max-width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-절대-위치-지정" tabindex="-1"><a class="header-anchor" href="#_3-절대-위치-지정" aria-hidden="true">#</a> 3. 절대 위치 지정</h2>
<p>특정 위치에 웹 페이지의 객체를 정적으로 배치하려면 아래 예시와 같이 절대 위치 지정을 사용할 수 있습니다.</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">position</span><span class="token punctuation">:</span>absolute
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
<img src="@source/docs/Tech/2024-04-19-DiscoverCleverWaystoUseCSSforWebDesign/img/DiscoverCleverWaystoUseCSSforWebDesign_2.png" />
<h2 id="_4-아이콘-및-로고에-svg-사용하기" tabindex="-1"><a class="header-anchor" href="#_4-아이콘-및-로고에-svg-사용하기" aria-hidden="true">#</a> 4. 아이콘 및 로고에 SVG 사용하기</h2>
<p>웹 페이지에 JPG, PNG 또는 GIF 이미지를 사용하면 크기를 조정하면 때로는 픽셀화될 수 있습니다. 이 문제를 해결하기 위해 로고를 픽셀화시키지 않은 모든 해상도 스타일로 지원하는 SVG 이미지를 사용할 수 있습니다. 아래 코드는 웹사이트 로고를 표시하는 CSS 코드입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>#로고 <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> block<span class="token punctuation">;</span>
  text<span class="token operator">-</span>indent<span class="token operator">:</span> <span class="token operator">-</span>9999px<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 80px<span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token function">url</span><span class="token punctuation">(</span>logo<span class="token punctuation">.</span>svg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  background<span class="token operator">-</span>size<span class="token operator">:</span> 100px 80px<span class="token punctuation">;</span>
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
<h2 id="_5-모든-스타일-덮어씌우기" tabindex="-1"><a class="header-anchor" href="#_5-모든-스타일-덮어씌우기" aria-hidden="true">#</a> 5. 모든 스타일 덮어씌우기</h2>
<p>특정 요소에 대해 다른 CSS 스타일을 덮어쓰고 싶다면 CSS 테마에서 !important를 사용하세요. 아래 예시에서는 H2 제목의 색상을 파란색 대신 빨간색으로 덮어씁니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>section h2 <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span>red <span class="token operator">!</span>important<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-수직-정렬" tabindex="-1"><a class="header-anchor" href="#_6-수직-정렬" aria-hidden="true">#</a> 6. 수직 정렬</h2>
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
<p>여기서 중요한 점은 메뉴 높이와 텍스트 행 높이를 동일하게 유지하는 것입니다. 아래는 코드 스니펫입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>nav li<span class="token punctuation">{</span>
    line<span class="token operator">-</span>height<span class="token operator">:</span>40px<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span>40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-호버-시-강조-표시" tabindex="-1"><a class="header-anchor" href="#_7-호버-시-강조-표시" aria-hidden="true">#</a> 7. 호버 시 강조 표시</h2>
<p>이 기술은 누군가 해당 요소 위로 마우스를 올릴 때 버튼, 텍스트 링크, 사이트 블록, 아이콘 등의 색상을 변경할 수 있는 강조 표시 기술입니다. 아래는 샘플 코드 스니펫과 결과물입니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>a h2<span class="token punctuation">{</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span>42px<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span>#<span class="token number">000</span><span class="token punctuation">;</span>
    font<span class="token operator">-</span>weight<span class="token operator">:</span><span class="token number">600</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>a h2<span class="token operator">:</span>hover<span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span>#f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Tech/2024-04-19-DiscoverCleverWaystoUseCSSforWebDesign/img/DiscoverCleverWaystoUseCSSforWebDesign_3.png" alt="DiscoverCleverWaystoUseCSSforWebDesign_3.png"></p>
<h2 id="_8-여러-클래스-또는-셀렉터에-css-적용하기" tabindex="-1"><a class="header-anchor" href="#_8-여러-클래스-또는-셀렉터에-css-적용하기" aria-hidden="true">#</a> 8. 여러 클래스 또는 셀렉터에 CSS 적용하기</h2>
<p>모든 사진, 블로그 및 사이드바에 동일한 경계를 설정하려면 정확히 동일한 CSS를 세 번 쓸 필요가 없고 쉼표로 구분된 항목을 나열할 수 있습니다. 아래는 예시입니다.```</p>
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
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.blog, img, .sidebar</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="이전-9" tabindex="-1"><a class="header-anchor" href="#이전-9" aria-hidden="true">#</a> 이전 9.</h2>
<p>이 CSS는 특정 클래스의 각 발생 앞에 컨텐츠를 삽입하도록 선택자입니다. 아래 예제에서는 H2 태그 앞에 추가적인 섹션이 추가되었습니다.</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">h2:before</span> <span class="token punctuation">{</span> 
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"계속: "</span><span class="token punctuation">;</span>
    &lt;span class=<span class="token string">"Apple-converted-space"</span>> <span class="token property">color</span><span class="token punctuation">:</span> #F00<span class="token punctuation">;</span>&lt;/span>
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
<h2 id="_10-이후" tabindex="-1"><a class="header-anchor" href="#_10-이후" aria-hidden="true">#</a> 10. 이후</h2>
<p>선택한 섹션 뒤에 콘텐츠를 삽입하는 이전 것과 유사합니다. 아래는 예시입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">p</span><span class="token operator">:</span>after<span class="token punctuation">{</span> 
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">" -Read more… "</span><span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span>#f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-드롭-캡" tabindex="-1"><a class="header-anchor" href="#_11-드롭-캡" aria-hidden="true">#</a> 11. 드롭 캡</h2>
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
<p>기사 안에서 첫 번째 큰 글자는 정말 눈에 띕니다, 그렇죠? CSS로도 가상 요소 :first-letter를 사용하여 같은 효과를 낼 수 있어요. 아래는 샘플 코드 스니펫과 출력 결과입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">a</span><span class="token operator">:</span>first<span class="token operator">-</span>letter<span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span>block<span class="token punctuation">;</span>
    <span class="token literal-property property">float</span><span class="token operator">:</span>left<span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span>5px<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span>#f00<span class="token punctuation">;</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span><span class="token number">500</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-04-19-DiscoverCleverWaystoUseCSSforWebDesign/img/DiscoverCleverWaystoUseCSSforWebDesign_4.png" />
<h2 id="_12-텍스트를-모두-대문자-모두-소문자로-또는-대문자로-강제로-변경하기" tabindex="-1"><a class="header-anchor" href="#_12-텍스트를-모두-대문자-모두-소문자로-또는-대문자로-강제로-변경하기" aria-hidden="true">#</a> 12. 텍스트를 모두 대문자, 모두 소문자로 또는 대문자로 강제로 변경하기</h2>
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
<p>이 CSS 트릭을 사용하면 특정 유형의 텍스트를 특정 케이스로 강제할 수 있어요. 대문자, 소문자 또는 대문자로 변환하는 예제가 아래에 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>h2 <span class="token punctuation">{</span> 
   text<span class="token operator">-</span>transform<span class="token operator">:</span> uppercase<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>h2 <span class="token punctuation">{</span> 
  text<span class="token operator">-</span>transform<span class="token operator">:</span> lowercase<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>h2 <span class="token punctuation">{</span> 
  text<span class="token operator">-</span>transform<span class="token operator">:</span> capitalize<span class="token punctuation">;</span> 
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
<h2 id="_13-링크" tabindex="-1"><a class="header-anchor" href="#_13-링크" aria-hidden="true">#</a> 13. 링크</h2>
<p>이 CSS 코드 스니펫은 이미 방문한 링크를 다른 색상으로 강조하여 방문자가 어떤 링크를 이미 방문했는지 파악할 수 있도록 도와줍니다. 아래 예시는 이미 방문한 링크가 파란색 대신 보라색으로 강조되는 것을 보여줍니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">a</span><span class="token operator">:</span>link <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> blue<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token literal-property property">a</span><span class="token operator">:</span>visited <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> purple<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
