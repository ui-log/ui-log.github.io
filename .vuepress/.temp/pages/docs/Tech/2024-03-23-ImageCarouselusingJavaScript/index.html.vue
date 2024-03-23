<template><div><p><img src="@source/docs/Tech/2024-03-23-ImageCarouselusingJavaScript/img/Image-Carousel-using-JavaScript_0.png" alt="이미지"></p>
<p>안녕하세요!!</p>
<p>우리는 많은 웹 사이트에서 이미 캐러셀을 본 적이 있을 거예요. 여러분도 부트스트랩과 같은 프레임워크를 사용하여 웹 프로젝트에서 사용해봤을 겁니다.</p>
<p>하지만 오늘은 HTML, CSS 및 JavaScript를 사용하여 직접 구현해보겠습니다. 그리고 몇몇 기계 코딩 면접에서 여러분에게 물어볼 수도 있습니다.</p>
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
<p>코딩 부분에 들어가기 전에 캐러셀의 구조를 이해해 봅시다.</p>
<ul>
<li>메인 div가 있습니다. 이를 컨테이너(div#container)라고 부를 수 있고 일정한 너비와 높이를 가지고 있습니다.</li>
<li>메인 div 안에 이미지를 포함하는 4개의 div가 있다고 가정해 봅시다 (div.image__container).</li>
<li>각 내부 div에는 부모 요소의 전체 너비와 높이를 차지하는 이미지와 object-fit : cover 속성이 포함되어 있습니다. 이렇게 하면 각 이미지가 전체 div를 덮습니다.</li>
<li>이제 메인 div에는 내부 div가 행으로 배치되도록 display : flex 속성이 있어야 하지만 한 번에 하나의 이미지만 표시해야 하므로 overflow : hidden 속성을 적용해야 합니다.</li>
<li>다음 이미지로 이동하는 버튼 하나와 이전 이미지로 돌아가는 버튼 하나가 필요합니다.</li>
</ul>
<h1 id="이-5단계를-거치면-출력물은-아래와-같이-됩니다" tabindex="-1"><a class="header-anchor" href="#이-5단계를-거치면-출력물은-아래와-같이-됩니다" aria-hidden="true">#</a> 이 5단계를 거치면 출력물은 아래와 같이 됩니다.</h1>
<img src="@source/docs/Tech/2024-03-23-ImageCarouselusingJavaScript/img/Image-Carousel-using-JavaScript_1.png" />
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
<ol start="6">
<li>이제 한 가지 노트할 사항이 있습니다. 기본적으로 flex 속성에는 자식 요소인 flex-shrink : 1이 설정되어 있기 때문에 이미지가 축소되는 것입니다. 그러나 우리의 사용 사례에서는 div가 메인 컨테이너의 전체 너비를 차지하기를 원합니다. 이를 달성하기 위해 내부 div에 flex-shrink : 0을 넣어주어야 합니다.</li>
</ol>
<h1 id="그리고-6-단계-이후에-우리의-출력물은-다음과-같이-될-것입니다" tabindex="-1"><a class="header-anchor" href="#그리고-6-단계-이후에-우리의-출력물은-다음과-같이-될-것입니다" aria-hidden="true">#</a> 그리고 6 단계 이후에 우리의 출력물은 다음과 같이 될 것입니다.</h1>
<p><img src="@source/docs/Tech/2024-03-23-ImageCarouselusingJavaScript/img/Image-Carousel-using-JavaScript_2.png" alt="이미지"></p>
<p>이제 코딩에 대해 알아봅시다!!</p>
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
<li>HTML</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>link href<span class="token operator">=</span><span class="token string">"carousel.css"</span> rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"carousel__container"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"img__container"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>img <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"carousel__img"</span> src<span class="token operator">=</span><span class="token string">"https://i.ibb.co/K2KkmJx/florian-olivo-4hb-J-eym-Z1o-unsplash.jpg"</span>
                alt<span class="token operator">=</span><span class="token string">"carousel-img"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"img__container"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>img <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"carousel__img"</span> src<span class="token operator">=</span><span class="token string">"https://i.ibb.co/3Nmfpsm/jackson-sophat-t-l5-FFH8-VA-unsplash.jpg"</span>
                alt<span class="token operator">=</span><span class="token string">"carousel-img"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"img__container"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>img <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"carousel__img"</span> src<span class="token operator">=</span><span class="token string">"https://i.ibb.co/sVXbVdr/nathan-da-silva-k-r-Kfq-Sm4-L4-unsplash.jpg"</span>
                alt<span class="token operator">=</span><span class="token string">"carousel-img"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"img__container"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>img <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"carousel__img"</span> src<span class="token operator">=</span><span class="token string">"https://i.ibb.co/fMf7S4k/kobu-agency-ip-ARHax-ETRk-unsplash.jpg"</span>
                alt<span class="token operator">=</span><span class="token string">"carousel-img"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">"prev-btn"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"btn"</span><span class="token operator">></span><span class="token constant">P</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">"next-btn"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"btn"</span><span class="token operator">></span><span class="token constant">N</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"carousel.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>CSS</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>#carousel__container <span class="token punctuation">{</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 600px<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 300px<span class="token punctuation">;</span>
  <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid red<span class="token punctuation">;</span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>img__container <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  flex<span class="token operator">-</span>shrink<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>img__container <span class="token operator">></span> img <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  object<span class="token operator">-</span>fit<span class="token operator">:</span> cover<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>btn <span class="token punctuation">{</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> black<span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> white<span class="token punctuation">;</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
  <span class="token literal-property property">outline</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 5px 7px<span class="token punctuation">;</span>
  <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
#prev<span class="token operator">-</span>btn <span class="token punctuation">{</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
#next<span class="token operator">-</span>btn <span class="token punctuation">{</span>
  <span class="token literal-property property">right</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>자바스크립트: 이곳에서 마법이 일어납니다.</li>
</ol>
<p>이 코드 블록을 이해하는 데 어려움이 없습니다. 버튼에 이벤트 리스너를 추가하여 해당 기능을 호출합니다.</p>
<p>이미지를 DOM에서 가져와 배열에 저장합니다.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> nextBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"next-btn"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> prevBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"prev-btn"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nextBtn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> showNextImage<span class="token punctuation">)</span><span class="token punctuation">;</span>
prevBtn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> showPrevImage<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//document.getElementsByClassName는 HTML 컬렉션을 반환하기 때문에</span>
<span class="token comment">//"Array.from" 메소드를 사용하여 이를 반복 가능한 형태로 변환합니다</span>
<span class="token keyword">const</span> images <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">"carousel__img"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> totalImages <span class="token operator">=</span> images<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token keyword">let</span> currentImageIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 화면에 표시되고 있는 이미지의 인덱스</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>카루셀에서 이미지가 부드럽게 슬라이딩되는 것을 보셨을 겁니다. 동일한 효과를 추가하기 위해, 이미지에 CSS 스타일을 추가하는 함수를 만들고</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">addTransitionEffectToImages</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  images<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">img</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    img<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transition <span class="token operator">=</span> <span class="token string">"transform 0.8s ease"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>자, 이제 사용자가 다음 버튼을 클릭했을 때 어떤 일이 일어나는지 이해해 봅시다.</p>
<ul>
<li>먼저, 이미지에 전환 효과를 추가하여 이미지들이 부드럽게 슬라이딩되어 슬라이딩 효과가 나타나게 합니다.</li>
<li>CSS에서는 HTML 요소를 다양한 방법으로 애니메이션화할 수 있는 transform 속성이 있습니다. 그러나 우리의 사용 사례에서는 특정 픽셀 또는 퍼센트로 내부 div를 X(수평) 방향으로 이동하고 싶습니다. 이를 위해 translateX 함수를 사용합니다. 요소를 오른쪽으로 이동시키려면 전달되는 값은 양수여야 하고 그 반대의 경우도 마찬가지입니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>50px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 50픽셀만큼 오른쪽으로 요소를 이동합니다</span>
<span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span><span class="token operator">-</span>30px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 30픽셀만큼 왼쪽으로 요소를 이동합니다</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 길이만큼 요소를 오른쪽으로 이동합니다</span>
<span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 길이만큼 요소를 왼쪽으로 이동합니다</span>
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
<ol start="3">
<li>
<p>이제 다음 버튼을 클릭할 때마다 각 이미지는 현재 위치에 따라 왼쪽으로 이동하고 인덱스가 1씩 업데이트됩니다.</p>
</li>
<li>
<p>마지막 이미지에 도달하면 resetCarousel() 함수를 사용하여 캐러셀을 재설정합니다.</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">showNextImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 만약 마지막 이미지에 있다면 캐러셀을 재설정합니다</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>currentImageIndex <span class="token operator">==</span> totalImages <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">resetCarousel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>currentImageIndex <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token function">addTransitionEffectToImages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 다음 이미지로 이동할 때마다 모든 이미지를 (-100%)만큼 이동합니다</span>
  images<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">img</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    img<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">translate(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span>currentImageIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token operator">-</span><span class="token number">100</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  currentImageIndex<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">resetCarousel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  images<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">img</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 모든 이미지가 처음 위치로 돌아오면 슬라이딩 효과를 보여주고 싶지 않기 때문에 "none"을 설정합니다.</span>
    img<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transition <span class="token operator">=</span> <span class="token string">"none"</span><span class="token punctuation">;</span>
    img<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">translate(0)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span> <span class="token comment">// 모든 이미지가 처음 위치로 돌아갑니다.</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  currentImageIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 이전 버튼을 작동하는 방법에 대해 마지막으로 남은 작업이 있습니다.</p>
<ul>
<li>만약 1번째 이미지에 있을 때는 단순히 반환합니다.</li>
<li>이 부분의 로직은 다음 버튼의 기능과 반대입니다. 우리는 이미지를 -100%로 translateX하고 인덱스를 1씩 감소시킵니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">showPrevImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>currentImageIndex <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// 만약 첫 번째 이미지에 있으면 단순히 반환합니다.</span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// showNextImage에서 한 것과 반대로 로직을 변경</span>
images<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">img</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  img<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">translateX(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span>currentImageIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token operator">-</span><span class="token number">100</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
currentImageIndex<span class="token operator">--</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>코딩 즐기세요!!</p>
<p>읽어 주셔서 감사합니다… 좋아요와 댓글도 부탁드려요!!</p>
</div></template>
