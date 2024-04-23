<template><div><p><img src="https://miro.medium.com/v2/resize:fit:1400/1*8CRNlJ-0OirG-3vxkTs_-g.gif" alt="이미지"></p>
<p>코딩 모험을 떠날 준비가 되셨나요? 오늘은 #100DaysOfCode 챌린지의 일환으로 HTML, CSS 및 JavaScript를 사용하여 인터랙티브 섬 팝업을 만드는 흥미로운 프로젝트에 착수하게 될 거에요. 이 프로젝트는 코딩 기술을 향상시킬 뿐만 아니라 포트폴리오에 창의성을 더할 수 있습니다. 그러니 시작해봐요!</p>
<h1 id="day-8-기반-구축" tabindex="-1"><a class="header-anchor" href="#day-8-기반-구축" aria-hidden="true">#</a> Day 8: 기반 구축</h1>
<p>단계 1: HTML 구조 설정먼저, 프로젝트용 기본 HTML 구조를 만들어봅시다. 컨테이너 상자, 섬 팝업 및 탐색 버튼과 같은 필요한 요소를 포함할 거에요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>

<span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 외부 스타일시트 링크 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"style.css"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>Dynamic Island <span class="token keyword">of</span> iPhone<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>

<span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 컨테이너 상자 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"box"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"inner"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 아일랜드 팝업 <span class="token operator">--</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"island_popup"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"content"</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 세부 정보 섹션 <span class="token operator">--</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"details"</span><span class="token operator">></span>
                        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 이미지 상자 <span class="token operator">--</span><span class="token operator">></span>
                        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"imgBx"</span><span class="token operator">></span>
                            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 이미지 소스 <span class="token operator">--</span><span class="token operator">></span>
                            <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"img.jpg"</span><span class="token operator">></span>
                        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 설명 <span class="token operator">--</span><span class="token operator">></span>
                        <span class="token operator">&lt;</span>p<span class="token operator">></span>Alexa Calling<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 동작 섹션 <span class="token operator">--</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"action"</span><span class="token operator">></span>
                        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 전화 아이콘 <span class="token operator">--</span><span class="token operator">></span>
                        <span class="token operator">&lt;</span>ion<span class="token operator">-</span>icon name<span class="token operator">=</span><span class="token string">"call"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"red"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>ion<span class="token operator">-</span>icon<span class="token operator">></span>
                        <span class="token operator">&lt;</span>ion<span class="token operator">-</span>icon name<span class="token operator">=</span><span class="token string">"call"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"green"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>ion<span class="token operator">-</span>icon<span class="token operator">></span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 내비게이션 버튼 <span class="token operator">--</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"btn btn1"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
        <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"btn btn2"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
        <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"btn btn3"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
        <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"rightSide"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> Ionicons 스크립트 로드 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"module"</span> src<span class="token operator">=</span><span class="token string">"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
    <span class="token operator">&lt;</span>script nomodule src<span class="token operator">=</span><span class="token string">"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 사용자 지정 스크립트 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"script.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>단계 2: CSS로 스타일 지정을 통해 프로젝트를 꾸며 보겠습니다. 레이아웃, 색상 및 애니메이션을 정의하여 아일랜드 팝업을 생동감 있게 만들어 봅시다.</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token function">url</span><span class="token punctuation">(</span>'<span class="token property">https</span><span class="token punctuation">:</span>//fonts.googleapis.com/css2?family=<span class="token property">Poppins</span><span class="token punctuation">:</span>wght<span class="token atrule"><span class="token rule">@300</span><span class="token punctuation">;</span></span></span>400<span class="token punctuation">;</span>500<span class="token punctuation">;</span>600<span class="token punctuation">;</span>700<span class="token punctuation">;</span>800<span class="token punctuation">;</span>900&amp;display=swap'<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 기본 스타일 재설정 */</span>
<span class="token selector">*</span>
<span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'Poppins'</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* body 스타일 지정 */</span>
<span class="token selector">body</span> 
<span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">min-height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 컨테이너 상자 스타일 지정 */</span>
<span class="token selector">.box</span>
<span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 상자 앞의 가상 요소 스타일 지정 */</span>
<span class="token selector">.box::before</span> 
<span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">inset</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 48px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 내부 컨테이너 스타일 지정 */</span>
<span class="token selector">.inner</span> 
<span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">inset</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>bg.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
    <span class="token property">background-position</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 48px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 10px solid #000<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 호버 시 내부 컨테이너 공개 */</span>
<span class="token selector">.box:hover .inner</span> 
<span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 내비게이션 버튼 스타일 지정 */</span>
<span class="token selector">.btn</span> 
<span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> -2px<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 110px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 26px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>#ccc<span class="token punctuation">,</span>#666<span class="token punctuation">,</span>#222<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 10<span class="token punctuation">;</span>
    <span class="token property">border-top-left-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token property">border-bottom-left-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.btn.btn2</span>
<span class="token punctuation">{</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 160px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.btn.btn3</span>
<span class="token punctuation">{</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 220px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 오른쪽 쪽 요소 스타일 지정 */</span>
<span class="token selector">.rightSide</span>
<span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> -2px<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 170px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 70px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>#ccc<span class="token punctuation">,</span>#666<span class="token punctuation">,</span>#222<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 10<span class="token punctuation">;</span>
    <span class="token property">border-top-right-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token property">border-bottom-right-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 아일랜드 팝업 스타일 지정 */</span>
<span class="token selector">.island_popup</span> 
<span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 90px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> 0.5s ease-in-out<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token comment">/* width: 200px; */</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 호버 시 아일랜드 팝업 확대 */</span>
<span class="token selector">.island_popup:hover</span> 
<span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 활성화된 아일랜드 팝업 스타일 지정 */</span>
<span class="token selector">.island_popup.active</span>
<span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 섬 팝업 요소 선택</span>
<span class="token keyword">let</span> popup <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".island_popup"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 클릭 이벤트 리스너 추가해서 섬 팝업에 활성 클래스를 전환합니다</span>
popup<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  popup<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token string">"active"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>축하합니다! HTML, CSS, 그리고 JavaScript를 사용하여 상호작용하는 섬 팝업을 만들어 #100DaysOfCode 도전의 제 8일을 성공적으로 완료했습니다. 이 프로젝트를 통해 웹 개발에서 소중한 기술을 배우고 창의적인 프로젝트를 포트폴리오에 추가했습니다. 훌륭한 작업을 이어가고 앞으로 더 많은 코딩 모험을 기대해주세요!</p>
<p>이 프로젝트의 전체 소스 코드는 여기서 다운로드할 수 있습니다. 질문이나 제안이 있으면 Bento에서 언제든지 연락해주세요. 즐거운 코딩하세요! 🚀</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div></div></template>
