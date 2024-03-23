<template><div><p>웹 개발의 계속 변화하는 풍경에서 반응형 웹사이트를 만드는 것이 중요해졌어요. 오늘날 다양한 기기와 화면 크기로 인해 웹사이트가 모든 플랫폼에서 완벽하게 보이고 작동되도록 하는 것이 중요합니다. Cascading Style Sheets (CSS)는 유연하고 적응 가능한 레이아웃을 만들 수 있는 수단을 제공함으로써 이 목표를 달성하는 데 중요한 역할을 합니다. 이 튜토리얼에서는 CSS를 사용하여 반응형 웹 디자인의 기본을 살펴볼 거예요.</p>
<p>반응형 웹 디자인 이해하기</p>
<p>반응형 웹 디자인은 데스크톱, 랩톱부터 태블릿과 스마트폰까지 다양한 기기에서 최적의 화면 표시 및 상호작용 경험을 보장하는 웹사이트를 구축하는 접근 방식입니다. 반응형 디자인의 주요 원칙에는 유연한 그리드, 유연한 이미지 및 미디어 쿼리가 포함됩니다.</p>
<p>HTML 구조 설정하기</p>
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
<p>CSS에 빠지기 전에 웹페이지를 위한 기본 HTML 구조를 설정해 보죠:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>반응형 웹 디자인 튜토리얼<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
    <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"styles.css"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>header<span class="token operator">></span>
        <span class="token operator">&lt;</span>h1<span class="token operator">></span>반응형 웹 디자인<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">></span>
    <span class="token operator">&lt;</span>nav<span class="token operator">></span>
        <span class="token operator">&lt;</span>ul<span class="token operator">></span>
            <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>홈<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>소개<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>서비스<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>문의<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">></span>
    <span class="token operator">&lt;</span>section<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>우리 웹사이트에 오신 걸 환영합니다<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span>이것은 샘플 텍스트입니다<span class="token punctuation">.</span> 교체하세요<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>
    <span class="token operator">&lt;</span>footer<span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token operator">&amp;</span>copy<span class="token punctuation">;</span> <span class="token number">2024</span> 귀하의 웹사이트<span class="token punctuation">.</span> 판권 소유<span class="token punctuation">.</span> <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>footer<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS를 사용하여 스타일을 만들어 보죠.</p>
<p>이제 웹사이트를 반응형으로 만들기 위해 CSS를 추가해 보겠습니다. <code v-pre>styles.css</code>라는 이름의 파일을 만들고 HTML 파일에 연결해 주세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* styles.css */</span>

<span class="token comment">/* 기본 여백과 패딩 재설정 */</span>
<span class="token operator">*</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 기본 스타일 설정 */</span>
body <span class="token punctuation">{</span>
    font<span class="token operator">-</span>family<span class="token operator">:</span> Arial<span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
    line<span class="token operator">-</span>height<span class="token operator">:</span> <span class="token number">1.6</span><span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #f2f2f2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

header <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #<span class="token number">333</span><span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 20px <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

nav <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #<span class="token number">666</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

nav ul <span class="token punctuation">{</span>
    list<span class="token operator">-</span>style<span class="token operator">-</span>type<span class="token operator">:</span> none<span class="token punctuation">;</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

nav ul li <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

nav ul li a <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
    text<span class="token operator">-</span>decoration<span class="token operator">:</span> none<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px 20px<span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token operator">-</span>block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

section <span class="token punctuation">{</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

footer <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #<span class="token number">333</span><span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>반영 미디어 쿼리</p>
<p>미디어 쿼리를 이용하면 기기의 특성에 따라 다른 스타일을 적용할 수 있습니다. 웹사이트를 반응형으로 만들기 위해 미디어 쿼리를 추가해봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 반응형을 위한 미디어 쿼리 */</span>
@media only screen <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">max<span class="token operator">-</span>width<span class="token operator">:</span> 768px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 작은 화면에 맞춰 네비게이션 조정 */</span>
    nav ul li <span class="token punctuation">{</span>
        <span class="token literal-property property">display</span><span class="token operator">:</span> block<span class="token punctuation">;</span>
        margin<span class="token operator">-</span>bottom<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

@media only screen <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">max<span class="token operator">-</span>width<span class="token operator">:</span> 600px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 작은 화면에 맞춰 헤더와 푸터 조정 */</span>
    header h1 <span class="token punctuation">{</span>
        font<span class="token operator">-</span>size<span class="token operator">:</span> 24px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    footer p <span class="token punctuation">{</span>
        font<span class="token operator">-</span>size<span class="token operator">:</span> 14px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>결론</p>
<p>이번 튜토리얼에서는 CSS를 사용하여 반응형 웹 디자인을 만드는 기본 사항에 대해 다뤘습니다. 유연한 그리드, 가변 이미지, 미디어 쿼리를 활용하여 웹사이트가 다양한 기기에서 멋지게 보이고 매끄럽게 작동하도록 할 수 있습니다. 다양한 기기에서 디자인을 테스트하고 다양한 기술을 실험하여 반응형 웹 개발 기술을 향상시키고 개선해 보세요. 즐거운 코딩되세요!</p>
</div></template>
