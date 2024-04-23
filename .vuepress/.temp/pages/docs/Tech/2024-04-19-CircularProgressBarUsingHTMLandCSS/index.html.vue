<template><div><p>안녕하세요 코더님, Codewithrandom 블로그에 오신 것을 환영합니다. 오늘은 HTML과 CSS를 사용하여 원형 진행 막대를 만드는 방법에 대해 알아볼 것입니다. 어플리케이션에서의 프로세스 진행 상황은 진행 막대를 통해 표시됩니다. 완료된 작업의 양과 아직 미완료인 양이 진행 막대로 표시됩니다. HTML을 사용하여 진행 막대의 다양한 부분을 설계하고 CSS 속성을 사용하여 맞춤 설정할 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-04-19-CircularProgressBarUsingHTMLandCSS/img/CircularProgressBarUsingHTMLandCSS_0.png" alt="Circular Progress Bar"></p>
<p>이 자습서는 HTML과 CSS를 사용하여 원형 진행 막대를 만들고 싶은 경우 도움이 될 것입니다. 여기서는 간단한 CSS 원형 진행 막대를 만드는 방법을 보여드리겠습니다.</p>
<p>이 애니메이션은 페이지를 로드할 때 0부터 주어진 의미로 변경될 것입니다. 텍스트의 일부는 애니메이션되지만 이 텍스트는 그렇지 않습니다. 꽤 간단히 구성되어 있습니다.</p>
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
<p>이 튜토리얼은 원형 진행 막대를 만드는 데 사용한 각 단계를 안내할 것입니다. 그것을 만들기 위해 기본 HTML 및 CSS 개념에 익숙해야합니다.</p>
<h1 id="단계-1-스타일링이-있는-기본-구조-추가" tabindex="-1"><a class="header-anchor" href="#단계-1-스타일링이-있는-기본-구조-추가" aria-hidden="true">#</a> 단계 1: 스타일링이 있는 기본 구조 추가</h1>
<p>시작하기 위해 원형 진행 막대를 위한 컨테이너를 포함해야합니다. 이를 위해 가장 기본적인 HTML 아이디어를 사용할 것입니다. 원형 진행 막대의 컨테이너는 div 태그를 사용하여 만들어집니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
        
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
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
<p>우리의 원형 진행 막대에 이제 컨테이너가 생겼습니다. 이제 CSS 개념을 사용하여 컨테이너에 스타일을 추가할 것입니다.</p>
<p>우리는 전체 선택자를 사용하여 웹사이트에 일부 스타일링을 추가할 것입니다. box-sizing 속성을 사용하여 &quot;border-box&quot;를 포함시킬 것입니다. Padding과 margin은 둘 다 &quot;0&quot;의 값을 가지게 됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">*</span> <span class="token punctuation">{</span>
  box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> space<span class="token operator">-</span>around<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>wrap<span class="token operator">:</span> wrap<span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span>lightblue<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 100vh<span class="token punctuation">;</span>
  align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
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
<p>.container 클래스 선택기를 사용합니다. display 속성을 &quot;flex&quot;로 설정하고 justify-content 속성을 사용하여 각 프로그레스 바 주변 공간을 설정했습니다. 배경색 속성을 사용하여 프로젝트에 연한 파란색 배경색을 지정할 것입니다.</p>
<p><img src="@source/docs/Tech/2024-04-19-CircularProgressBarUsingHTMLandCSS/img/CircularProgressBarUsingHTMLandCSS_1.png" alt="Circular Progress Bar"></p>
<h1 id="단계-2-원-추가하기" tabindex="-1"><a class="header-anchor" href="#단계-2-원-추가하기" aria-hidden="true">#</a> 단계 2: 원 추가하기.</h1>
<p>원형 진행 막대를 만들기 위해 HTML과 CSS를 사용했습니다. 새 div를 만드는데 이 div는 container 내에 progress 클래스를 가지게 됩니다. CSS에서 클래스 선택기를 사용하여 프로젝트에 원이 표시됩니다.</p>
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
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"progress"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>progress <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 30px<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> #07070c<span class="token punctuation">;</span>
  text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
  line<span class="token operator">-</span>height<span class="token operator">:</span> 200px<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
  box<span class="token operator">-</span>shadow<span class="token operator">:</span> 2px 2px 2px 2px white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>progress<span class="token operator">:</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
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
<p>클래스 선택기가 사용되었습니다 (.progress). 폭과 높이는 둘 다 200px로 지정됩니다. 글꼴 크기 속성은 글꼴 크기를 30px로 설정하는 데 사용될 것입니다. 테두리 반경 기능을 활용하여 원 모양을 만들 것입니다. 원의 외형을 만들기 위해 테두리 반경을 50%로 설정할 것입니다. 현재 사용 중인 원은 검은 배경을 가지고 있습니다. 원에 3D 외형을 제공하기 위해 박스 그림자도 포함되어 있습니다.</p>
<img src="@source/docs/Tech/2024-04-19-CircularProgressBarUsingHTMLandCSS/img/CircularProgressBarUsingHTMLandCSS_2.png" />
<h1 id="단계2-원에-입력-추가하기" tabindex="-1"><a class="header-anchor" href="#단계2-원에-입력-추가하기" aria-hidden="true">#</a> 단계2: 원에 입력 추가하기.</h1>
<p>이제 span 태그를 사용하여 원에 숫자 입력을 추가하고 값의 범위를 0에서 85로 조절할 것입니다. 원형 진행 막대에 진행 상황을 추가하기 위해 진행 상황 div 내에서 3개의 div를 만들 것입니다. 먼저 클래스가 지정된 div를 만들 것입니다 (overlay).</p>
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
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"progress"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"title timer"</span> data<span class="token operator">-</span>from<span class="token operator">=</span><span class="token string">"0"</span> data<span class="token operator">-</span>to<span class="token operator">=</span><span class="token string">"85"</span> data<span class="token operator">-</span>speed<span class="token operator">=</span><span class="token string">"1800"</span><span class="token operator">></span><span class="token number">85</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"overlay"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"left"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"right"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 overlay를 사용하여 너비 50% 및 높이 100%를 추가할 것입니다. 위치는 &quot;absolute&quot; 설정을 가집니다. 원형 진행 막대의 반은 overlay에만 스타일을 적용받습니다. background-color 속성을 사용하여 우리의 overlay에 검은 색 배경을 추가했습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>progress <span class="token punctuation">.</span>overlay <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #07070c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-2-circle에-애니메이션-진행-막대-추가하기" tabindex="-1"><a class="header-anchor" href="#단계-2-circle에-애니메이션-진행-막대-추가하기" aria-hidden="true">#</a> 단계 2: Circle에 애니메이션 진행 막대 추가하기.</h1>
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
<p>저희가 컨테이너 태그에 지정한 div는 진행 상황을 추가하는 데 사용됩니다. &quot;left&quot;와 &quot;right&quot; 클래스가 지정된 두 개의 div가 만들어졌습니다. 이 두 div를 사용하여 원에 진행 표시줄을 추가할 예정입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"progress"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"title timer"</span> data<span class="token operator">-</span>from<span class="token operator">=</span><span class="token string">"0"</span> data<span class="token operator">-</span>to<span class="token operator">=</span><span class="token string">"85"</span> data<span class="token operator">-</span>speed<span class="token operator">=</span><span class="token string">"1800"</span><span class="token operator">></span><span class="token number">85</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"overlay"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"left"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"right"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 (.left &amp; .right) 두 가지 서로 다른 클래스를 활용한 진행 표시줄이 추가될 것입니다. 높이는 100%로, 너비는 50%로 설정되어 있습니다. border 속성을 사용하여 실선의 10px 두께 테두리를 추가할 것입니다. 테두리 반경을 사용하여 요소의 상단 및 오른쪽 모서리에 100px의 테두리 반경을 추가할 것입니다.</p>
<p>이제 프로젝트에 애니메이션을 추가하려면 CSS를 사용한 간단한 개념을 활용했습니다. 애니메이션을 통해 요소는 점진적으로 다른 스타일로 전환될 수 있습니다. 필요할 때마다 마음대로 CSS 변경을 가할 수 있습니다. CSS 애니메이션을 사용하려면 먼저 애니메이션의 키프레임을 정의해야 합니다. 특정 시점에서 요소가 가질 스타일은 키프레임에 저장됩니다.</p>
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
<p>여기서 우리는 0.5초 동안 로드로 애니메이션을 사용했고, 그런 다음 선형 전진을 사용하여 다른 애니메이션을 추가할 것입니다.</p>
<p>이제 우리는 키프레임을 사용할 것이며 키프레임만을 이용하여 서로 다른 시간 간격에 서로 다른 스타일을 적용할 것입니다.</p>
<p><img src="@source/docs/Tech/2024-04-19-CircularProgressBarUsingHTMLandCSS/img/CircularProgressBarUsingHTMLandCSS_3.png" alt="CircularProgressBarUsingHTMLandCSS_3"></p>
<p>값에 따라 프로그레스 바가 조정될 것이며, 서로 다른 세 개의 원형 프로그레스 바를 추가하여 각각 다른 값으로 설정할 것입니다. 한 프로그레스 바에 맞춰 단일 프로그레스 바를 만들 수 있다면 더 많은 원형 막대를 추가해 보세요. 결과적으로 더 잘 이해할 수 있을 것입니다.</p>
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
<p>이제 저희 프로젝트의 비디오 미리보기를 살펴보겠습니다.</p>
<h1 id="html-코드" tabindex="-1"><a class="header-anchor" href="#html-코드" aria-hidden="true">#</a> HTML 코드:</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"style.css"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>Circular Progress Bar<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"progress"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"title timer"</span> data<span class="token operator">-</span>from<span class="token operator">=</span><span class="token string">"0"</span> data<span class="token operator">-</span>to<span class="token operator">=</span><span class="token string">"85"</span> data<span class="token operator">-</span>speed<span class="token operator">=</span><span class="token string">"1800"</span><span class="token operator">></span><span class="token number">85</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"overlay"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"left"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"right"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"progress"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"title timer"</span> data<span class="token operator">-</span>from<span class="token operator">=</span><span class="token string">"0"</span> data<span class="token operator">-</span>to<span class="token operator">=</span><span class="token string">"70"</span> data<span class="token operator">-</span>speed<span class="token operator">=</span><span class="token string">"1500"</span><span class="token operator">></span><span class="token number">70</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"overlay"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"left"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"right"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"progress"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"title timer"</span> data<span class="token operator">-</span>from<span class="token operator">=</span><span class="token string">"0"</span> data<span class="token operator">-</span>to<span class="token operator">=</span><span class="token string">"70"</span> data<span class="token operator">-</span>speed<span class="token operator">=</span><span class="token string">"1500"</span><span class="token operator">></span><span class="token number">70</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"overlay"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"left"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"right"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"progress"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"title timer"</span> data<span class="token operator">-</span>from<span class="token operator">=</span><span class="token string">"0"</span> data<span class="token operator">-</span>to<span class="token operator">=</span><span class="token string">"85"</span> data<span class="token operator">-</span>speed<span class="token operator">=</span><span class="token string">"1800"</span><span class="token operator">></span><span class="token number">85</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"overlay"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"left"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"right"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="css-코드" tabindex="-1"><a class="header-anchor" href="#css-코드" aria-hidden="true">#</a> CSS 코드:</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">*</span> <span class="token punctuation">{</span>
  box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> space<span class="token operator">-</span>around<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>wrap<span class="token operator">:</span> wrap<span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> lightblue<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 100vh<span class="token punctuation">;</span>
  align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>progress <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 30px<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> #07070c<span class="token punctuation">;</span>
  text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
  line<span class="token operator">-</span>height<span class="token operator">:</span> 200px<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
  box<span class="token operator">-</span>shadow<span class="token operator">:</span> 2px 2px 2px 2px white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>progress<span class="token operator">:</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"%"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>progress <span class="token punctuation">.</span>title <span class="token punctuation">{</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
  z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>progress <span class="token punctuation">.</span>overlay <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #07070c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>progress <span class="token punctuation">.</span>left<span class="token punctuation">,</span>
<span class="token punctuation">.</span>progress <span class="token punctuation">.</span>right <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 10px solid gray<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 100px 0px 0px 100px<span class="token punctuation">;</span>
  border<span class="token operator">-</span>right<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  transform<span class="token operator">-</span>origin<span class="token operator">:</span> right<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>progress <span class="token punctuation">.</span>left <span class="token punctuation">{</span>
  <span class="token literal-property property">animation</span><span class="token operator">:</span> load1 1s linear forwards<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>progress<span class="token operator">:</span>nth<span class="token operator">-</span><span class="token keyword">of</span><span class="token operator">-</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">.</span>right<span class="token punctuation">,</span>
<span class="token punctuation">.</span>progress<span class="token operator">:</span>nth<span class="token operator">-</span><span class="token keyword">of</span><span class="token operator">-</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">.</span>right <span class="token punctuation">{</span>
  <span class="token literal-property property">animation</span><span class="token operator">:</span> load2 <span class="token number">0</span><span class="token punctuation">.</span>5s linear forwards 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>progress<span class="token operator">:</span>last<span class="token operator">-</span><span class="token keyword">of</span><span class="token operator">-</span>type <span class="token punctuation">.</span>right<span class="token punctuation">,</span>
<span class="token punctuation">.</span>progress<span class="token operator">:</span>first<span class="token operator">-</span><span class="token keyword">of</span><span class="token operator">-</span>type <span class="token punctuation">.</span>right <span class="token punctuation">{</span>
  <span class="token literal-property property">animation</span><span class="token operator">:</span> load3 <span class="token number">0</span><span class="token punctuation">.</span>8s linear forwards 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
@keyframes load1 <span class="token punctuation">{</span>
  <span class="token number">0</span><span class="token operator">%</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
@keyframes load2 <span class="token punctuation">{</span>
  <span class="token number">0</span><span class="token operator">%</span> <span class="token punctuation">{</span>
    z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">{</span>
    z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>270deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
@keyframes load3 <span class="token punctuation">{</span>
  <span class="token number">0</span><span class="token operator">%</span> <span class="token punctuation">{</span>
    z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">{</span>
    z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>315deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 HTML 및 CSS를 사용하여 원형 진행 막대를 성공적으로 만들었습니다. 이 프로젝트를 IDE에 직접 복사하여 사용할 수 있습니다. 이 프로젝트를 이해하셨으면, 궁금한 점이 있으면 언제든지 댓글을 남겨주세요!</p>
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
<p>만약 이 블로그가 도움이 되었다면, 프론트 엔드 프로젝트의 소스 코드를 얻기 위해 구글에서 'code with random'으로 검색해보세요. 그리고 'Code with Random'의 인스타그램 페이지를 팔로우하는 걸 잊지 마세요.</p>
<p>팔로우: codewithrandom</p>
<p>작성자: arun</p>
<p>코드 작성자: Arun</p>
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
<h1 id="이-원형-진행률-표시줄에-사용하는-코드-편집기는-무엇인가요" tabindex="-1"><a class="header-anchor" href="#이-원형-진행률-표시줄에-사용하는-코드-편집기는-무엇인가요" aria-hidden="true">#</a> 이 원형 진행률 표시줄에 사용하는 코드 편집기는 무엇인가요?</h1>
<p>저는 사용하기 간편하고 쉬운 VS Code 스튜디오를 추천합니다.</p>
<h1 id="이-프로젝트가-반응형인가요" tabindex="-1"><a class="header-anchor" href="#이-프로젝트가-반응형인가요" aria-hidden="true">#</a> 이 프로젝트가 반응형인가요?</h1>
<p>네! 이 원형 진행률 표시줄은 반응형입니다.</p>
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
<h1 id="이-프로젝트를-만들-때-외부-링크를-사용하고-있나요" tabindex="-1"><a class="header-anchor" href="#이-프로젝트를-만들-때-외부-링크를-사용하고-있나요" aria-hidden="true">#</a> 이 프로젝트를 만들 때 외부 링크를 사용하고 있나요?</h1>
<p>아니요, 순수한 HTML과 CSS를 사용하여 Circular Progress Bar를 만들었어요.</p>
</div></template>
