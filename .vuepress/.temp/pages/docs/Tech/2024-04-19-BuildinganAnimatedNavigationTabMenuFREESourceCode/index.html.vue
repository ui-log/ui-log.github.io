<template><div><img src="https://miro.medium.com/v2/resize:fit:1400/1*YOfgHoUXj3bi9bzTRCMTOw.gif" />
<p>웹 사이트의 내비게이션을 화려한 애니메이션으로 꾸미고 싶나요? 이 블로그 포스트에서는 HTML, CSS 및 JavaScript를 사용하여 애니메이션 내비게이션 탭 메뉴를 만드는 과정을 안내합니다. 이 프로젝트는 매일 실습을 통해 코딩 스킬을 향상시키는 #100DaysOfCode Challenge의 6일차 일환입니다.</p>
<h1 id="단계-1-프로젝트-설정" tabindex="-1"><a class="header-anchor" href="#단계-1-프로젝트-설정" aria-hidden="true">#</a> 단계 1: 프로젝트 설정</h1>
<p>먼저, 시작하려면 여기에서 전체 소스 코드를 다운로드하세요. 파일을 다운로드한 후, 텍스트 편집기에서 새 HTML 파일을 만들어 index.html로 이름을 지정하세요.</p>
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
<h1 id="step-2-html-구조" tabindex="-1"><a class="header-anchor" href="#step-2-html-구조" aria-hidden="true">#</a> Step 2: HTML 구조</h1>
<p>index.html 파일에서 프로젝트를 위한 기본 구조를 설정하세요. 내비게이션 탭을 보유할 'ul' 목록을 정의하세요. 각 탭은 'a' 태그를 포함한 'li' 요소로 나타낼 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 문서 메타데이터 정의 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 외부 스타일시트 링크 설정 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"style.css"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 문서 제목 설정 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>title<span class="token operator">></span>Animated Navigation Tab Menu<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 내비게이션 메뉴 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>ul <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"navigation"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 홈 탭 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>li <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"active"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 홈 아이콘 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"icon"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>ion<span class="token operator">-</span>icon name<span class="token operator">=</span><span class="token string">"home-outline"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>ion<span class="token operator">-</span>icon<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 홈 텍스트 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"text"</span><span class="token operator">></span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 프로필 탭 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 프로필 아이콘 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"icon"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>ion<span class="token operator">-</span>icon name<span class="token operator">=</span><span class="token string">"person-outline"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>ion<span class="token operator">-</span>icon<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 프로필 텍스트 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"text"</span><span class="token operator">></span>Profile<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 메시지 탭 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 메시지 아이콘 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"icon"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>ion<span class="token operator">-</span>icon name<span class="token operator">=</span><span class="token string">"chatbubble-outline"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>ion<span class="token operator">-</span>icon<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 메시지 텍스트 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"text"</span><span class="token operator">></span>Messages<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 사진 탭 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 사진 아이콘 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"icon"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>ion<span class="token operator">-</span>icon name<span class="token operator">=</span><span class="token string">"camera-outline"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>ion<span class="token operator">-</span>icon<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 사진 텍스트 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"text"</span><span class="token operator">></span>Photos<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 설정 탭 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 설정 아이콘 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"icon"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>ion<span class="token operator">-</span>icon name<span class="token operator">=</span><span class="token string">"settings-outline"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>ion<span class="token operator">-</span>icon<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 설정 텍스트 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"text"</span><span class="token operator">></span>Settings<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> Ionicons 라이브러리 포함 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 사용자 정의 JavaScript 파일 포함 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"./script.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="step-3-css-스타일링" tabindex="-1"><a class="header-anchor" href="#step-3-css-스타일링" aria-hidden="true">#</a> Step 3: CSS 스타일링</h1>
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
<p>이제 시각적으로 매력적인 내비게이션 메뉴를 만들기 위해 스타일을 추가해봅시다. style.css 파일을 열어서 내비게이션 메뉴, 목록 항목, 아이콘 및 텍스트의 모양을 사용자 정의하는 CSS 규칙을 추가해주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* Google Fonts 가져오기 - Poppins */</span>
@<span class="token keyword">import</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token string">"https://fonts.googlesapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&amp;display=swap"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* CSS 스타일 */</span>
<span class="token comment">/* 기본 마진, 패딩 및 박스 모델 재설정 */</span>
<span class="token operator">*</span> <span class="token punctuation">{</span>
<span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">"Poppins"</span><span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Body 스타일링 */</span>
body <span class="token punctuation">{</span>
<span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
min<span class="token operator">-</span>height<span class="token operator">:</span> 100vh<span class="token punctuation">;</span>
<span class="token literal-property property">background</span><span class="token operator">:</span> #<span class="token number">262433</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 내비게이션 스타일링 */</span>
<span class="token punctuation">.</span>navigation <span class="token punctuation">{</span>
<span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
<span class="token literal-property property">width</span><span class="token operator">:</span> 540px<span class="token punctuation">;</span>
<span class="token literal-property property">height</span><span class="token operator">:</span> 120px<span class="token punctuation">;</span>
<span class="token literal-property property">background</span><span class="token operator">:</span> #<span class="token number">242433</span><span class="token punctuation">;</span>
box<span class="token operator">-</span>shadow<span class="token operator">:</span> inset 5px 5px 10px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
inset 5px 5px 20px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
inset <span class="token operator">-</span>5px <span class="token operator">-</span>5px 15px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.75</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
border<span class="token operator">-</span>radius<span class="token operator">:</span> 25px<span class="token punctuation">;</span>
<span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 목록 항목 스타일링 */</span>
<span class="token punctuation">.</span>navigation li <span class="token punctuation">{</span>
<span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
list<span class="token operator">-</span>style<span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token literal-property property">width</span><span class="token operator">:</span> 80px<span class="token punctuation">;</span>
<span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 목록 항목 점 스타일링 */</span>
<span class="token punctuation">.</span>navigation li<span class="token operator">:</span><span class="token operator">:</span>before <span class="token punctuation">{</span>
<span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
<span class="token literal-property property">top</span><span class="token operator">:</span> 35px<span class="token punctuation">;</span>
<span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token literal-property property">width</span><span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token literal-property property">height</span><span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token literal-property property">background</span><span class="token operator">:</span> #<span class="token number">222</span><span class="token punctuation">;</span>
border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token literal-property property">transition</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 활성 상태의 목록 항목 점 스타일링 */</span>
<span class="token punctuation">.</span>navigation li<span class="token punctuation">.</span>active<span class="token operator">:</span><span class="token operator">:</span>before <span class="token punctuation">{</span>
<span class="token literal-property property">background</span><span class="token operator">:</span> #0f0<span class="token punctuation">;</span>
box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> 5px #0f0<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token number">0</span> 10px #0f0<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token number">0</span> 20px #0f0<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token number">0</span> 30px #0f0<span class="token punctuation">,</span>
<span class="token number">0</span> <span class="token number">0</span> 40px #0f0<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token number">0</span> 50px #0f0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 링크 태그 스타일링 */</span>
<span class="token punctuation">.</span>navigation li a <span class="token punctuation">{</span>
<span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
text<span class="token operator">-</span>decoration<span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 아이콘 스타일링 */</span>
<span class="token punctuation">.</span>navigation li a <span class="token punctuation">.</span>icon <span class="token punctuation">{</span>
<span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>75em<span class="token punctuation">;</span>
<span class="token literal-property property">width</span><span class="token operator">:</span> 80px<span class="token punctuation">;</span>
<span class="token literal-property property">height</span><span class="token operator">:</span> 80px<span class="token punctuation">;</span>
<span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token literal-property property">color</span><span class="token operator">:</span> #aaa<span class="token punctuation">;</span>
border<span class="token operator">-</span>radius<span class="token operator">:</span> 50px<span class="token punctuation">;</span>
<span class="token literal-property property">transition</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>5s<span class="token punctuation">;</span>
transition<span class="token operator">-</span>delay<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>2s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 활성 상태의 아이콘 스타일링 */</span>
<span class="token punctuation">.</span>navigation li<span class="token punctuation">.</span>active a <span class="token punctuation">.</span>icon <span class="token punctuation">{</span>
<span class="token literal-property property">background</span><span class="token operator">:</span> #29fd53<span class="token punctuation">;</span>
<span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
<span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span><span class="token operator">-</span>55px<span class="token punctuation">)</span><span class="token punctuation">;</span>
box<span class="token operator">-</span>shadow<span class="token operator">:</span> 5px 5px 7px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
inset 2px 2px 3px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
inset <span class="token operator">-</span>3px <span class="token operator">-</span>3px 5px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
transition<span class="token operator">-</span>delay<span class="token operator">:</span> 0s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 아이콘 내부 원 스타일링 */</span>
<span class="token punctuation">.</span>navigation li a <span class="token punctuation">.</span>icon<span class="token operator">:</span><span class="token operator">:</span>before <span class="token punctuation">{</span>
<span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
<span class="token literal-property property">inset</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
<span class="token literal-property property">background</span><span class="token operator">:</span> #2f363e<span class="token punctuation">;</span>
border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
box<span class="token operator">-</span>shadow<span class="token operator">:</span> 5px 5px 5px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
inset 2px 2px 3px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
inset <span class="token operator">-</span>3px <span class="token operator">-</span>3px 5px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token literal-property property">transition</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 활성 상태의 아이콘 내부 원 스타일링 */</span>
<span class="token punctuation">.</span>navigation li<span class="token punctuation">.</span>active a <span class="token punctuation">.</span>icon<span class="token operator">:</span><span class="token operator">:</span>before <span class="token punctuation">{</span>
<span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 텍스트 스타일링 */</span>
<span class="token punctuation">.</span>navigation li a <span class="token punctuation">.</span>text <span class="token punctuation">{</span>
<span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>75em<span class="token punctuation">;</span>
<span class="token literal-property property">color</span><span class="token operator">:</span> #2f363e<span class="token punctuation">;</span>
<span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>20px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token literal-property property">padding</span><span class="token operator">:</span> 2px 10px<span class="token punctuation">;</span>
<span class="token literal-property property">background</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
border<span class="token operator">-</span>radius<span class="token operator">:</span> 15px<span class="token punctuation">;</span>
box<span class="token operator">-</span>shadow<span class="token operator">:</span> 5px 5px 7px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
inset <span class="token operator">-</span>3px <span class="token operator">-</span>3px 5px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token literal-property property">transition</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>5s<span class="token punctuation">;</span>
transition<span class="token operator">-</span>delay<span class="token operator">:</span> 0s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 활성 상태의 텍스트 스타일링 */</span>
<span class="token punctuation">.</span>navigation li<span class="token punctuation">.</span>active a <span class="token punctuation">.</span>text <span class="token punctuation">{</span>
<span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span><span class="token punctuation">;</span>
transition<span class="token operator">-</span>delay<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>2s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="스텝-4-javascript-기능" tabindex="-1"><a class="header-anchor" href="#스텝-4-javascript-기능" aria-hidden="true">#</a> 스텝 4: JavaScript 기능</h1>
<p>내비게이션 메뉴의 애니메이션 효과를 구현하기 위해 JavaScript를 사용할 것입니다. script.js 파일을 열고 내비게이션 탭의 클릭 이벤트를 처리하는 코드를 작성해주세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 내비게이션 메뉴 내 모든 목록 항목 선택</span>
<span class="token keyword">let</span> list <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">".navigation li"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 클릭된 링크 활성화하는 함수</span>
<span class="token keyword">function</span> <span class="token function">activeLink</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 모든 목록 항목에서 'active' 클래스 제거</span>
  list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">"active"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 클릭된 목록 항목에 'active' 클래스 추가</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"active"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 각 목록 항목에 클릭 이벤트 리스너 추가하여 링크 활성화</span>
list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> activeLink<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-5-테스트-및-개선" tabindex="-1"><a class="header-anchor" href="#단계-5-테스트-및-개선" aria-hidden="true">#</a> 단계 5: 테스트 및 개선</h1>
<p>구현을 완료하면 웹 브라우저에서 index.html 파일을 열어 내비게이션 메뉴를 테스트하세요. 탭을 클릭하여 애니메이션이 예상대로 작동하는지 확인하세요. 사용자 경험을 개선하기 위해 필요한 조정을 수행하세요.</p>
<h1 id="단계-6-결론" tabindex="-1"><a class="header-anchor" href="#단계-6-결론" aria-hidden="true">#</a> 단계 6: 결론</h1>
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
<p>축하합니다! 웹사이트를 위한 애니메이션 네비게이션 탭 메뉴를 성공적으로 구축했습니다. 디자인을 추가적으로 사용자 정의하거나 기존 프로젝트에 통합해보세요. 문제가 발생하거나 궁금한 점이 있으면 언제든지 도움을 요청해 주세요.</p>
<h1 id="연락처" tabindex="-1"><a class="header-anchor" href="#연락처" aria-hidden="true">#</a> 연락처</h1>
<p>이 프로젝트에 대해 궁금한 사항이 있거나 더 알고 싶다면 언제든지 Bento를 통해 연락해 주세요.</p>
<h1 id="마지막으로" tabindex="-1"><a class="header-anchor" href="#마지막으로" aria-hidden="true">#</a> 마지막으로</h1>
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
<p>이 프로젝트와 같은 것들을 만드는 것은 코딩 기술을 향상시키고 웹사이트에 멋진 기능을 추가하는 좋은 방법입니다. 계속해서 코딩 여정을 이어가면서 새로운 아이디어와 도전을 탐험해보세요. #100DaysOfCode 챌린지를 통해 진행되는 더욱 흥미로운 프로젝트와 자습서를 기대해 주세요!</p>
</div></template>
