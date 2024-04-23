<template><div><p><img src="@source/docs/Tech/2024-04-19-BuildingaSimplePeopleCounterAppwithHTMLCSSandJavaScriptAStep-by-StepGuide/img/BuildingaSimplePeopleCounterAppwithHTMLCSSandJavaScriptAStep-by-StepGuide_0.png" alt="Building a Simple People Counter App with HTML, CSS, and JavaScript: A Step-by-Step Guide"></p>
<ul>
<li>소개</li>
<li>프로젝트 개요</li>
<li>사전 준비 사항</li>
<li>People Counter 애플리케이션의 기능</li>
<li>코드 구조
<ul>
<li>단계 1. HTML 구조:</li>
<li>단계 2. CSS 스타일링:</li>
<li>단계 3. JavaScript 로직:</li>
</ul>
</li>
<li>테스트와 디버깅</li>
<li>배운 점</li>
<li>배포</li>
<li>향후 개선 사항</li>
<li>결론</li>
</ul>
<h2 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h2>
<p>People Counter 앱은 HTML, CSS 및 JavaScript를 사용하여 개발된 웹 애플리케이션으로, 특정 영역(예: 상점이나 이벤트 장소)으로 들어오는 사람 수를 세는 데 사용됩니다. 이 People Counter 애플리케이션 프로젝트 안내를 끝까지 따라가면 프론트엔드 개발 기술이 향상될 것입니다.</p>
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
<h1 id="프로젝트-개요" tabindex="-1"><a class="header-anchor" href="#프로젝트-개요" aria-hidden="true">#</a> 프로젝트 개요</h1>
<p>People Counter 앱은 지정된 영역으로 들어오고 나가는 사람 수를 세는 간단하고 효과적인 방법을 제공하도록 설계되었습니다. 이 앱은 수동으로 세는 방법을 디지털 솔루션으로 대체하여 정확하고 신뢰할 수 있으며 사용하기 쉬운 솔루션을 제공합니다.</p>
<h1 id="전제-조건" tabindex="-1"><a class="header-anchor" href="#전제-조건" aria-hidden="true">#</a> 전제 조건</h1>
<p>이 People Counter 애플리케이션을 구축하려면 HTML, CSS 및 JavaScript에 대한 기본적인 이해가 필요합니다. 구조화를 위해 HTML, 스타일링을 위해 CSS, 그리고 애플리케이션의 논리를 구현하기 위해 JavaScript에 익숙해야 합니다.</p>
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
<p>코드를 작성하려면 텍스트 편집기 또는 IDE(예: Visual Studio Code)가 필요하며 테스트를 위해 웹 브라우저가 필요합니다. 선택 사항으로는 애플리케이션을 호스팅하기 위한 GitHub 계정이 필요합니다.</p>
<h1 id="사람-수-세는-애플리케이션-기능" tabindex="-1"><a class="header-anchor" href="#사람-수-세는-애플리케이션-기능" aria-hidden="true">#</a> 사람 수 세는 애플리케이션 기능</h1>
<p>이 프로젝트에서는 다음과 같은 기능을 갖춘 사람 수 세는 애플리케이션을 만들게 됩니다:</p>
<ul>
<li>실시간 계산: 앱은 사람들이 들어오고 나가는 대로 현재 수를 실시간으로 업데이트합니다.</li>
<li>재설정 기능: 사용자는 언제든지 수를 제로로 재설정할 수 있습니다.</li>
<li>간단한 인터페이스: 앱은 깨끗하고 직관적인 인터페이스를 갖추어 사용자가 손쉽게 작동할 수 있도록 합니다.</li>
<li>반응형 디자인: 애플리케이션이 반응형이 되고 다양한 기기에서 잘 작동하도록 합니다.</li>
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
<h1 id="코드-구조" tabindex="-1"><a class="header-anchor" href="#코드-구조" aria-hidden="true">#</a> 코드 구조</h1>
<p>프로젝트를 위한 새 폴더를 만들어주시고, 폴더 이름은 원하시는 대로 지어주시고, 그 안에 index.html, style.css, 그리고 script.js 세 개의 파일을 만들어주세요. 이 파일들은 프로젝트의 기반이 될 것입니다. 이제 텍스트 편집기나 IDE(예: 비주얼 스튜디오 코드)에서 폴더를 열고 아래 단계를 따라주세요:</p>
<h2 id="단계-1-html-구조" tabindex="-1"><a class="header-anchor" href="#단계-1-html-구조" aria-hidden="true">#</a> 단계 1. HTML 구조:</h2>
<p>index.html 파일을 열어 'People Counter' 어플리케이션을 위한 다음 HTML 코드를 붙여넣어주세요:</p>
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
 <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">"X-UA-Compatible"</span> content<span class="token operator">=</span><span class="token string">"IE=edge"</span><span class="token operator">></span>
 <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span><span class="token operator">></span>
 <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"./style.css"</span><span class="token operator">></span>
 <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"preconnect"</span> href<span class="token operator">=</span><span class="token string">"https://fonts.googleapis.com"</span><span class="token operator">></span>
 <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"preconnect"</span> href<span class="token operator">=</span><span class="token string">"https://fonts.gstatic.com"</span> crossorigin<span class="token operator">></span>
 <span class="token operator">&lt;</span>link href<span class="token operator">=</span><span class="token string">"https://fonts.googleapis.com/css2?family=Acme&amp;family=Carter+One&amp;family=Cookie&amp;family=Island+Moments&amp;family=PT+Serif+Caption&amp;family=Playfair+Display+SC:wght@400;700;900&amp;family=Red+Hat+Display:wght@700;900&amp;display=swap"</span> rel<span class="token operator">=</span><span class="token string">"stylesheet"</span><span class="token operator">></span>
 <span class="token operator">&lt;</span>title<span class="token operator">></span>People Counter Application<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
 <span class="token operator">&lt;</span>h1 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"main-header"</span><span class="token operator">></span>People Counter Application<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>

 <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>h1<span class="token operator">></span>People Entered<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>

  <span class="token operator">&lt;</span>h2 id<span class="token operator">=</span><span class="token string">"count-el"</span><span class="token operator">></span><span class="token number">0</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>

  <span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">"increment-btn"</span><span class="token operator">></span>Increment<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

  <span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">"decrement-btn"</span><span class="token operator">></span>Decrement<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

  <span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">"save-btn"</span><span class="token operator">></span>Save<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

  <span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">"reset-btn"</span><span class="token operator">></span>Reset<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

  <span class="token operator">&lt;</span>p<span class="token operator">></span>Saved Counts<span class="token operator">:</span> <span class="token operator">&lt;</span>span id<span class="token operator">=</span><span class="token string">"save-el"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>

 <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

 <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"script.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>style.css 파일을 열고 다음 CSS 코드를 붙여넣어 People Counter 애플리케이션을 스타일링하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token keyword">import</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token string">'https://fonts.googleapis.com/css2?family=Acme&amp;family=Carter+One&amp;family=Cookie&amp;family=Island+Moments&amp;family=PT+Serif+Caption&amp;family=Playfair+Display+SC:wght@400;700;900&amp;family=Red+Hat+Display:wght@700;900&amp;display=swap'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 모든 요소에 대한 스타일링 시작 */</span>
<span class="token operator">*</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
 box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 바디 스타일링 시작 */</span>
body <span class="token punctuation">{</span>
 <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
 align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
 justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
 background<span class="token operator">-</span>image<span class="token operator">:</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token string">"https://source.unsplash.com/1600x900/?people"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">'Trebuchet MS'</span><span class="token punctuation">,</span> <span class="token string">'Lucida Sans Unicode'</span><span class="token punctuation">,</span> <span class="token string">'Lucida Grande'</span><span class="token punctuation">,</span> <span class="token string">'Lucida Sans'</span><span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
 font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span>
 <span class="token literal-property property">color</span><span class="token operator">:</span> white<span class="token punctuation">;</span>
 text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
 <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
 min<span class="token operator">-</span>height<span class="token operator">:</span> 100vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>main<span class="token operator">-</span>header <span class="token punctuation">{</span>
 <span class="token literal-property property">display</span><span class="token operator">:</span> block<span class="token punctuation">;</span>
 <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
 <span class="token literal-property property">top</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
 font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span>
 text<span class="token operator">-</span>transform<span class="token operator">:</span> uppercase<span class="token punctuation">;</span>
 font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">.</span>2em<span class="token punctuation">;</span>
 background<span class="token operator">-</span>color<span class="token operator">:</span> black<span class="token punctuation">;</span>
 <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 컨테이너 스타일링 시작 */</span>
<span class="token punctuation">.</span>container <span class="token punctuation">{</span>
 background<span class="token operator">-</span>color<span class="token operator">:</span> black<span class="token punctuation">;</span>
 <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
 max<span class="token operator">-</span>width<span class="token operator">:</span> 500px<span class="token punctuation">;</span>
 <span class="token literal-property property">padding</span><span class="token operator">:</span> 2em 4em<span class="token punctuation">;</span>
 <span class="token literal-property property">color</span><span class="token operator">:</span> white<span class="token punctuation">;</span>
 border<span class="token operator">-</span>radius<span class="token operator">:</span> 35px<span class="token punctuation">;</span>
 <span class="token literal-property property">margin</span><span class="token operator">:</span> 6em 2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>container h1 <span class="token punctuation">{</span>
 margin<span class="token operator">-</span>top<span class="token operator">:</span> 2px<span class="token punctuation">;</span>
 margin<span class="token operator">-</span>bottom<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
 text<span class="token operator">-</span>transform<span class="token operator">:</span> uppercase<span class="token punctuation">;</span>
 font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span>
 letter<span class="token operator">-</span>spacing<span class="token operator">:</span> 1px<span class="token punctuation">;</span>
 font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">.</span>2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

container h2 <span class="token punctuation">{</span>
 font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">.</span>2em<span class="token punctuation">;</span>
 margin<span class="token operator">-</span>top<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
 margin<span class="token operator">-</span>bottom<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>container button <span class="token punctuation">{</span>
 <span class="token literal-property property">border</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
 padding<span class="token operator">-</span>top<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
 padding<span class="token operator">-</span>bottom<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
 background<span class="token operator">-</span>color<span class="token operator">:</span> goldenrod<span class="token punctuation">;</span>
 <span class="token literal-property property">color</span><span class="token operator">:</span> white<span class="token punctuation">;</span>
 text<span class="token operator">-</span>transform<span class="token operator">:</span> uppercase<span class="token punctuation">;</span>
 <span class="token literal-property property">width</span><span class="token operator">:</span> 250px<span class="token punctuation">;</span>
 <span class="token literal-property property">margin</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>
 <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
 justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
 margin<span class="token operator">-</span>bottom<span class="token operator">:</span> 6px<span class="token punctuation">;</span>
 margin<span class="token operator">-</span>top<span class="token operator">:</span> 6px<span class="token punctuation">;</span>
 border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
 font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span>
 letter<span class="token operator">-</span>spacing<span class="token operator">:</span> 1px<span class="token punctuation">;</span>
 font<span class="token operator">-</span>size<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 호버 버튼 스타일링 시작 */</span>
<span class="token punctuation">.</span>container button<span class="token operator">:</span>hover <span class="token punctuation">{</span>
 background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">126</span><span class="token punctuation">,</span> <span class="token number">91</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token literal-property property">color</span><span class="token operator">:</span> white<span class="token punctuation">;</span>
 <span class="token literal-property property">transition</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>3s ease<span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">-</span>out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 문단 스타일링 시작 */</span>
<span class="token punctuation">.</span>container p <span class="token punctuation">{</span>
 <span class="token literal-property property">color</span><span class="token operator">:</span> white<span class="token punctuation">;</span>
 font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>2em<span class="token punctuation">;</span>
 letter<span class="token operator">-</span>spacing<span class="token operator">:</span> 1px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 미디어 쿼리 스타일링 시작 */</span>
@media screen <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">max<span class="token operator">-</span>width<span class="token operator">:</span> 660px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token punctuation">.</span>main<span class="token operator">-</span>header <span class="token punctuation">{</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 2em<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

@media screen <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">max<span class="token operator">-</span>width<span class="token operator">:</span> 580px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token punctuation">.</span>main<span class="token operator">-</span>header <span class="token punctuation">{</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 22px<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token punctuation">.</span>container h1 <span class="token punctuation">{</span>
  letter<span class="token operator">-</span>spacing<span class="token operator">:</span> 2px<span class="token punctuation">;</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 30px<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token punctuation">.</span>container h2 <span class="token punctuation">{</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 30px<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token punctuation">.</span>container button <span class="token punctuation">{</span>
  padding<span class="token operator">-</span>top<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  padding<span class="token operator">-</span>bottom<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> goldenrod<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token punctuation">.</span>container p <span class="token punctuation">{</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

@media screen <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">max<span class="token operator">-</span>width<span class="token operator">:</span> 360px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token punctuation">.</span>main<span class="token operator">-</span>header <span class="token punctuation">{</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>5em<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token punctuation">.</span>container h1 <span class="token punctuation">{</span>
  letter<span class="token operator">-</span>spacing<span class="token operator">:</span> 1px<span class="token punctuation">;</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 22px<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token punctuation">.</span>container h2 <span class="token punctuation">{</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token punctuation">.</span>container button <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 120px<span class="token punctuation">;</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 13px<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token punctuation">.</span>container p <span class="token punctuation">{</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 CSS 코드는 People Counter 애플리케이션을 스타일링합니다. 바디, 메인 헤더, 컨테이너, 헤딩, 버튼, 문단 및 미디어 쿼리를 사용한 반응형 디자인까지 포함됩니다.</p>
<p>이 코드는 페이지의 요소의 배경, 글꼴 스타일, 색상, 레이아웃 및 반응성을 설정하여 People Counter 애플리케이션에 시각적으로 매력적이고 기능적인 사용자 인터페이스를 만드는 데 도움을 줍니다.</p>
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
<h2 id="단계-3-javascript-로직" tabindex="-1"><a class="header-anchor" href="#단계-3-javascript-로직" aria-hidden="true">#</a> 단계 3. JavaScript 로직:</h2>
<p>script.js 파일을 열고 다음 JavaScript 코드를 사용하여 People Counter 애플리케이션에 기능을 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> countEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#count-el'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> incrementEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#increment-btn'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> decrementEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#decrement-btn'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> saveBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"save-btn"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> resetEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#reset-btn'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> saveEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"save-el"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> count <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'count'</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'count'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>

countEl<span class="token punctuation">.</span>innerText <span class="token operator">=</span> count<span class="token punctuation">;</span>

incrementEl<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    countEl<span class="token punctuation">.</span>innerText <span class="token operator">=</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

decrementEl<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    count <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    countEl<span class="token punctuation">.</span>innerText <span class="token operator">=</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

resetEl<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    countEl<span class="token punctuation">.</span>innerText <span class="token operator">=</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

saveBtn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> countStr <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> - </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    saveEl<span class="token punctuation">.</span>textContent <span class="token operator">+=</span> countStr<span class="token punctuation">;</span>
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'count'</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    countEl<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 JavaScript 코드는 People Counter 애플리케이션의 기능을 정의합니다. HTML 문서에서 다양한 요소를 선택하고, count 변수를 초기화하며, 증가, 감소, 재설정 및 저장 버튼을 위한 이벤트 리스너를 설정합니다.</p>
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
<p>위 코드는 버튼 클릭에 따라 카운트를 증가시키거나 감소시키고, 카운트를 로컬 저장소에 저장하며, 필요할 때 카운트를 재설정하고 디스플레이를 업데이트합니다. 이 애플리케이션을 통해 사용자는 카운터와 상호 작용하고 카운트를 저장하며 카운트를 다시 0으로 재설정할 수 있습니다.</p>
<h1 id="테스트-및-디버깅" tabindex="-1"><a class="header-anchor" href="#테스트-및-디버깅" aria-hidden="true">#</a> 테스트 및 디버깅</h1>
<p>웹 브라우저에서 애플리케이션을 테스트하려면 아래 단계를 따르세요:</p>
<ul>
<li>HTML 파일 열기: HTML, CSS 및 JavaScript 파일을 이전에 명시된 폴더에 모두 저장했는지 확인한 후 HTML 파일을 더블 클릭하여 웹 브라우저에서 엽니다. 이렇게 하면 파일이 기본 웹 브라우저에서 열립니다.</li>
<li>요소 검사: 브라우저에 앱이 로드된 후 페이지를 마우스 오른쪽 버튼으로 클릭하고 &quot;요소 검사&quot;를 선택하거나 &quot;Ctrl+Shift+I&quot;를 눌러 개발자 도구를 엽니다. 이를 통해 콘솔의 오류를 확인하고 페이지의 요소를 검사할 수 있습니다.</li>
<li>기능 테스트: 앱과 상호 작용하여 기능을 테스트합니다. 이를 통해 코드에서 발생하는 버그나 문제를 식별할 수 있습니다.</li>
<li>디버깅: 오류나 문제가 발생하면 개발자 도구의 콘솔을 사용하여 JavaScript 코드를 디버깅합니다. 오류 메시지와 라인 번호를 찾아 문제가 발생하는 위치를 확인합니다.</li>
<li>변경 사항 적용: 코드를 변경해야 하는 경우 코드 편집기로 돌아가 필요한 조정을 수행한 후 파일을 저장하고 브라우저를 새로 고침하여 앱에 반영된 변경 사항을 확인하세요.</li>
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
<h1 id="배운-점" tabindex="-1"><a class="header-anchor" href="#배운-점" aria-hidden="true">#</a> 배운 점</h1>
<p>이 프로젝트를 통해 코딩하기 전에 애플리케이션 논리를 계획하고 설계하는 중요성을 깨달았습니다. 또한 상호작용 웹 애플리케이션을 만드는 데 중요한 CSS 스타일링, JavaScript 이벤트 및 DOM 조작에 대한 이해력을 향상시켰습니다.</p>
<h1 id="배포" tabindex="-1"><a class="header-anchor" href="#배포" aria-hidden="true">#</a> 배포</h1>
<p>People Counter 애플리케이션 프로젝트는 GitHub Pages에서 사용할 수 있으며 아래 링크를 클릭하면 온라인으로 액세스할 수 있습니다:</p>
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
<p>애플리케이션을 테스트해보세요: https://wasiu-akindoyin.github.io/People-Counter-Web-Application/</p>
<p>GitHub 저장소에 방문하여 소스 코드를 확인하거나 기여할 수 있습니다.</p>
<h1 id="향후-개선-사항" tabindex="-1"><a class="header-anchor" href="#향후-개선-사항" aria-hidden="true">#</a> 향후 개선 사항</h1>
<p>앞으로 추가할 기능들을 계획 중이에요:</p>
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
<li>향상된 사용자 인터페이스: 애플리케이션 디자인을 개선하여 시각적으로 더 매력적이고 사용자 친화적으로 만듭니다.</li>
<li>다중 카운터: 여러 카운터를 지원하여 사용자가 동시에 다른 영역이나 목적에 대한 카운트를 추적할 수 있도록 합니다.</li>
<li>모바일 반응성: 앱이 완전히 반응하고 모바일 기기에서 잘 작동하도록 합니다.</li>
</ul>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>사람 카운터 애플리케이션은 특정 영역에 들어오는 사람 수를 추적하는 간단하면서도 효과적인 도구입니다. 사용자 친화적 인터페이스와 쉬운 사용자 정의 옵션을 통해 다양한 사용 사례에 맞게 적응할 수 있습니다. 사람 카운터 애플리케이션은 이벤트 관리에서 게임 체인저가 될 수 있으며, 주최자에게 운영을 최적화하고 참가자 경험을 최적화하며 성공을 이루도록 도와주는 강력한 도구를 제공합니다.</p>
<p>이 프로젝트 안내서가 도움이 되었다면 박수를 치고 공유하고 저를 팔로우하여 프런트엔드 개발, 블록체인 네트워크, 그리고 더 많은 정보를 얻어보세요. 끝까지 함께해 주셔서 감사합니다. 다음에 또 만나요.</p>
</div></template>
