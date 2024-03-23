<template><div><p><img src="@source/docs/Tech/2024-03-23-CraftinganiOS-StyleSwitchButtonASimpleStep-by-StepGuide/img/Crafting-an-iOS-Style-Switch-Button:-A-Simple-Step-by-Step-Guide_0.png" alt="Switch Button Step 0"></p>
<h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h1>
<p>웹 앱을 위한 iOS 스타일의 스위치 버튼을 만들어보고 싶었던 적이 있나요? 전문가일 필요 없어요! 함께 HTML, CSS 및 JavaScript를 사용하여 하나 만들어봅시다.</p>
<p><img src="@source/docs/Tech/2024-03-23-CraftinganiOS-StyleSwitchButtonASimpleStep-by-StepGuide/img/Crafting-an-iOS-Style-Switch-Button:-A-Simple-Step-by-Step-Guide_1.png" alt="Switch Button Step 1"></p>
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
<h1 id="전제-조건" tabindex="-1"><a class="header-anchor" href="#전제-조건" aria-hidden="true">#</a> 전제 조건</h1>
<ul>
<li>HTML, CSS 및 JavaScript에 대한 기본 지식이 필요합니다.</li>
<li>자신이 선호하는 텍스트 편집기가 필요합니다.</li>
</ul>
<h1 id="코드-심층-탐구해-보기" tabindex="-1"><a class="header-anchor" href="#코드-심층-탐구해-보기" aria-hidden="true">#</a> 코드 심층 탐구해 보기</h1>
<p>폴더를 생성하고 코드 편집기에서 엽니다. 이 튜토리얼에서는 VS Code를 사용하고 있습니다.</p>
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
<h2 id="html-구조-설정하기" tabindex="-1"><a class="header-anchor" href="#html-구조-설정하기" aria-hidden="true">#</a> HTML 구조 설정하기</h2>
<p>프로젝트 폴더 내에 index.html이라는 새 파일을 만들고 다음과 같은 HTML 코드를 추가해주세요:</p>
<p>index.html</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span><span class="token constant">IOS</span> Button<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>

    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 스타일링을 위한 외부 <span class="token constant">CSS</span> 파일 링크 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"./styles.css"</span> <span class="token operator">/</span><span class="token operator">></span>

    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 기능을 위한 외부 JavaScript 파일 링크 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>script defer src<span class="token operator">=</span><span class="token string">"./main.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 스위치 버튼을 담는 컨테이너 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"switch-container"</span><span class="token operator">></span>

      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 이미지와 텍스트를 담고 있는 상자 <span class="token operator">--</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"pack-box"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 스위치 버튼을 위한 이미지 <span class="token operator">--</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>img id<span class="token operator">=</span><span class="token string">"svg-icon"</span> src<span class="token operator">=</span><span class="token string">"./active.svg"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 스위치 버튼을 위한 텍스트 <span class="token operator">--</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span>알림 통지<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 스위치 기능과 연결된 레이블 <span class="token operator">--</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"switch-1"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"switch"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 스위치 버튼 역할을 하는 체크박스 입력 <span class="token operator">--</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"checkbox"</span> id<span class="token operator">=</span><span class="token string">"switch-1"</span> onClick<span class="token operator">=</span><span class="token string">"handleChange()"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 슬라이더 버튼 모양을 만드는 span 요소 <span class="token operator">--</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"slider"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>

    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>저는 스위치 컨테이너를 포함하는 .switch-container 박스를 포함하는 .pack-box에 이미지 .svg-icon과 &quot;Notification Alert&quot; 텍스트가 들어가도록 콘텐츠를 구조화했습니다. 레이블 .switch는 체크박스 입력 .switch-1과 슬라이더 버튼 모양을 만들기 위한 span .slider와 연결됩니다.</p>
<p><img src="@source/docs/Tech/2024-03-23-CraftinganiOS-StyleSwitchButtonASimpleStep-by-StepGuide/img/Crafting-an-iOS-Style-Switch-Button:-A-Simple-Step-by-Step-Guide_2.png" alt="iOS 스타일 스위치 버튼 만들기: 간단한 단계별 가이드"></p>
<h2 id="css로-스위치-버튼-스타일링하기" tabindex="-1"><a class="header-anchor" href="#css로-스위치-버튼-스타일링하기" aria-hidden="true">#</a> CSS로 스위치 버튼 스타일링하기</h2>
<p>스위치 버튼을 스타일링하려면 styles.css라는 파일을 생성하여 HTML 파일에 연결하십시오. 요소들을 적절히 정렬하고 가운데 정렬하는 것으로 시작하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 본문 콘텐츠 가운데 정렬 */</span>
body <span class="token punctuation">{</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 100dvh<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 100dvw<span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
  align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 컨테이너 스타일링 */</span>
<span class="token punctuation">.</span>switch<span class="token operator">-</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 300px<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 150px<span class="token punctuation">;</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 3px solid #<span class="token number">636363</span><span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 25px <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> space<span class="token operator">-</span>around<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>switch<span class="token operator">-</span>container img <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 25px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 이미지와 텍스트가 함께 있는 상자 스타일링 */</span>
<span class="token punctuation">.</span>pack<span class="token operator">-</span>box <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  <span class="token literal-property property">gap</span><span class="token operator">:</span> 1rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>스위치 버튼 스타일링에 대한 주요 로직으로 이동하여, 해당 요소의 크기와 동작을 정의합니다. .switch 클래스는 레이블의 너비와 높이를 설정하고 상대적으로 위치를 조정합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 스위치 버튼 스타일링 */</span>
<span class="token punctuation">.</span>switch <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 60px<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 35px<span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token operator">-</span>block<span class="token punctuation">;</span>
  <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.slider 클래스는 슬라이더 요소를 컨테이너 내부에서 절대적으로 위치시키고, 완전한 위치 지정으로 전체 영역을 채우도록 합니다:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 슬라이더 버튼 스타일링 */</span>
<span class="token punctuation">.</span>switch <span class="token punctuation">.</span>slider <span class="token punctuation">{</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
  <span class="token literal-property property">inset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">145</span><span class="token punctuation">,</span> <span class="token number">145</span><span class="token punctuation">,</span> <span class="token number">145</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 25px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>체크박스를 숨기려면 display 속성을 none으로 설정하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 체크박스 입력 숨기기 */</span>
<span class="token punctuation">.</span>switch input <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::before 가상 클래스를 사용하여 슬라이더 앞에 빈 콘텐츠를 추가하여 토글 버튼을 가운데 정렬하고 외형을 원형으로 변경하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token comment">/* 슬라이더 모양 스타일 지정 */</span>
<span class="token punctuation">.</span>switch <span class="token punctuation">.</span>slider<span class="token operator">:</span><span class="token operator">:</span>before <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 27px<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 27px<span class="token punctuation">;</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> 5px<span class="token punctuation">;</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> 4px<span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> white<span class="token punctuation">;</span>
  <span class="token literal-property property">transition</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>5s all<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-03-23-CraftinganiOS-StyleSwitchButtonASimpleStep-by-StepGuide/img/Crafting-an-iOS-Style-Switch-Button:-A-Simple-Step-by-Step-Guide_3.png" />
<p>체크된 가상 클래스를 활용하여 스위치가 토글될 때 슬라이더의 배경색을 녹색으로 변경합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 체크된 상태 스타일 지정 */</span>
<span class="token punctuation">.</span>switch input<span class="token operator">:</span>checked <span class="token operator">+</span> <span class="token punctuation">.</span>slider <span class="token punctuation">{</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">235</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>마지막으로, 슬라이더 버튼을 토글할 때 움직이도록 하려면, 변환 속성을 사용하여 수평으로 이동하도록 설정하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token comment">/* 슬라이더 이동 스타일링 */</span>
<span class="token punctuation">.</span>switch input<span class="token operator">:</span>checked <span class="token operator">+</span> <span class="token punctuation">.</span>slider<span class="token operator">:</span><span class="token operator">:</span>before <span class="token punctuation">{</span>
  <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>23px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 CSS 규칙들은 스위치 버튼이 원활하게 작동하도록 합니다. 이를 통해 토글할 때 예상대로 모양이 변경되고 움직입니다.</p>
<img src="https://miro.medium.com/v2/resize:fit:612/1*fnc3gUFrouST3MueP2XmZQ.gif" />
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
<h2 id="상호-작용을-위한-javascript-추가하기" tabindex="-1"><a class="header-anchor" href="#상호-작용을-위한-javascript-추가하기" aria-hidden="true">#</a> 상호 작용을 위한 JavaScript 추가하기</h2>
<p>main.js라는 파일을 만들고 HTML 파일에 연결하세요. 다음 JavaScript 코드를 사용하여 아이콘을 토글할 때 변경하세요:</p>
<p>Main.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> svgIcon <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#svg-icon"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 스위치 상태에 따라 아이콘 토글</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"switch-1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>checked<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    svgIcon<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">"./active.svg"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    svgIcon<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">"./nonActive.svg"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>당신의 웹 애플리케이션에 iOS 스타일 스위치 버튼을 만드는 것은 HTML, CSS 및 JavaScript의 기본 지식으로 달성할 수 있습니다. 이 안내서에 설명된 간단한 단계를 따라보세요. 특정 요구 사항과 기호에 맞게 스타일 및 기능을 자유롭게 사용자 정의할 수 있습니다.</p>
<p>이 튜토리얼에서 사용된 전체 코드 및 리소스는 제 GitHub 저장소에서 찾을 수 있습니다: https://github.com/Bishal-Pahari/iOS-Button</p>
</div></template>
