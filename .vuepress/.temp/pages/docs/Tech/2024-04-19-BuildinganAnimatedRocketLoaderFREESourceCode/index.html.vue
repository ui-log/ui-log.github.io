<template><div><img src="https://miro.medium.com/v2/resize:fit:1400/1*7ZmbAQ3KO-vYEaFiol1_tQ.gif" />
<p>어서오세요! #100DaysOfCode 챌린지 6일차에 오신 것을 환영합니다! 오늘은 HTML과 CSS를 사용하여 흥미로운 프로젝트를 만들어볼 거에요: 로켓 애니메이션 로더입니다. 이 로더는 여러분의 웹페이지를 보다 흥미롭게 만들 뿐만 아니라 사용자들에게 재미를 더해줄 거예요. 함께 시작해봅시다!</p>
<h1 id="단계-1-프로젝트-설정하기" tabindex="-1"><a class="header-anchor" href="#단계-1-프로젝트-설정하기" aria-hidden="true">#</a> 단계 1: 프로젝트 설정하기</h1>
<p>먼저, Visual Studio Code 또는 Sublime Text와 같은 텍스트 편집기가 준비되어 있는지 확인해주세요. 프로젝트를 위한 새 폴더를 만들고 선호하는 텍스트 편집기에서 해당 폴더를 열어주세요.</p>
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
<h1 id="단계-2-html-구조" tabindex="-1"><a class="header-anchor" href="#단계-2-html-구조" aria-hidden="true">#</a> 단계 2: HTML 구조</h1>
<p>텍스트 편집기를 열고 새 HTML 파일을 만들어보세요. 파일 이름은 index.html로 지정합시다. 이 파일 안에 웹페이지의 기본 구조를 설정할 거에요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"style.css"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>Animated Rocket Loader<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"loader"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"rocket"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 로켓과 구름 아이콘이 여기에 들어갈 거에요 <span class="token operator">--</span><span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>span<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 다른 로켓 아이콘이 여기에 들어갈 거에요 <span class="token operator">--</span><span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-3-css로-스타일링하기" tabindex="-1"><a class="header-anchor" href="#단계-3-css로-스타일링하기" aria-hidden="true">#</a> 단계 3: CSS로 스타일링하기</h1>
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
<p>이제 로켓 로더를 멋지게 보이도록 몇 가지 스타일을 추가해 봅시다. style.css라는 새 파일을 만들고 HTML 파일에 링크하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 모든 요소에 대한 리셋 스타일 */</span>
<span class="token operator">*</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 컨테이너의 스타일 */</span>
<span class="token punctuation">.</span>container <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
    min<span class="token operator">-</span>height<span class="token operator">:</span> 100vh<span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #eaeef0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 여기에 더 많은 CSS 스타일을 추가합니다 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-4-로켓-및-구름-아이콘-추가" tabindex="-1"><a class="header-anchor" href="#단계-4-로켓-및-구름-아이콘-추가" aria-hidden="true">#</a> 단계 4: 로켓 및 구름 아이콘 추가</h1>
<p>우리는 로켓 및 구름 아이콘에 Font Awesome를 사용할 것입니다. HTML 파일에 Font Awesome가 연결되어 있는지 확인해 주세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 이전 메타 태그 및 스타일시트 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"</span>
    integrity<span class="token operator">=</span><span class="token string">"sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="</span>
    crossorigin<span class="token operator">=</span><span class="token string">"anonymous"</span> referrerpolicy<span class="token operator">=</span><span class="token string">"no-referrer"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 자체 스타일시트에 대한 링크 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"style.css"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 웹페이지 제목 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>Animated Rocket Loader<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 이전의 <span class="token constant">HTML</span> 구조 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"rocket"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fas fa-rocket"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
        <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fas fa-cloud"</span> style<span class="token operator">=</span><span class="token string">"--i:0"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
        <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fas fa-cloud"</span> style<span class="token operator">=</span><span class="token string">"--i:1"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
        <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fas fa-cloud"</span> style<span class="token operator">=</span><span class="token string">"--i:2"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
        <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fas fa-cloud"</span> style<span class="token operator">=</span><span class="token string">"--i:3"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa-solid fa-rocket"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 여기에 더 많은 <span class="token constant">HTML</span> 요소가 추가될 것입니다 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-5-로켓과-구름-애니메이션" tabindex="-1"><a class="header-anchor" href="#단계-5-로켓과-구름-애니메이션" aria-hidden="true">#</a> 단계 5: 로켓과 구름 애니메이션</h1>
<p>로켓과 구름이 움직이도록 애니메이션을 추가해 봅시다. 이를 위해 CSS 애니메이션을 사용할 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 로더 회전을 위한 애니메이션 */</span>
@keyframes animateLoader <span class="token punctuation">{</span>
    <span class="token number">0</span><span class="token operator">%</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 로켓 이동을 위한 애니메이션 */</span>
@keyframes animateRocket <span class="token punctuation">{</span>
    <span class="token number">0</span><span class="token operator">%</span><span class="token punctuation">,</span>
    <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token operator">-</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token number">50</span><span class="token operator">%</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> 3px<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token operator">-</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 구름 이동을 위한 애니메이션 */</span>
@keyframes animateCloud <span class="token punctuation">{</span>
    <span class="token number">0</span><span class="token operator">%</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span><span class="token function">calc</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">35</span> <span class="token operator">*</span> 5px<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">35</span> <span class="token operator">*</span> 5px<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
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
<h1 id="단계-6-마지막-손질과-테스트" tabindex="-1"><a class="header-anchor" href="#단계-6-마지막-손질과-테스트" aria-hidden="true">#</a> 단계 6: 마지막 손질과 테스트</h1>
<p>결과에 만족할 때까지 스타일과 애니메이션을 조정하세요. 작업을 마치면 파일을 저장하고 웹 브라우저에서 index.html을 열어 애니메이트된 로켓 로더가 작동하는 것을 확인해보세요!</p>
<p>여기까지입니다! 성공적으로 애니메이트된 로켓 로더를 만들었습니다. 계속해서 사용자 정의하고 다른 사람들과 공유해보세요.</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
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
<p>오늘은 HTML과 CSS를 사용하여 애니메이션 로켓 로더를 만드는 방법을 배웠어요. 이 프로젝트는 사용자 경험을 향상시키는데 도움이 되며, 당신의 웹페이지에 창의성을 더해줍니다. 계속해서 새로운 기술을 실험하고 탐험해보세요. 즐거운 코딩되세요!</p>
<p>이 프로젝트는 #100DaysOfCode 도전의 6일차입니다. 여기에서 전체 소스 코드를 다운로드할 수 있어요. 궁금한 점이나 피드백이 있으면 언제든지 Bento를 통해 저에게 연락할 수 있어요.</p>
</div></template>
