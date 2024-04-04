<template><div><p><img src="@source/docs/Tech/2024-03-23-HowShouldclassNamingBeinHTMLCleanCode/img/How-Should-class-Naming-Be-in-HTML0.png" alt="How-Should-class-Naming-Be-in-HTML?"></p>
<p>많은 개발자들이 개발 단계 중에 네이밍에 상당한 시간을 할애할 수 있습니다. 사실, 어떤 사람들에게는 네이밍에 코딩보다 더 많은 시간을 쓸 수도 있습니다. 클래스, 아이디, 함수, 변수, 파일 등을 네이밍할 때는 프로젝트 내에서의 목적을 정확히 반영하는 서술적이고 의미 있는, 간결하고 일관된 이름을 사용하는 것이 중요합니다.</p>
<p>하지만 왜 이런 방식으로 명명해야 할까요?</p>
<ul>
<li>작성된 코드가 더 가독성이 높아지며 이해하기 쉬워집니다. 우리 팀원이나 다른 팀의 개발자들이 코드 블록을 쉽게 이해할 수 있어 협업과 유지보수 과정이 개선됩니다.</li>
<li>적절한 네이밍은 프로젝트에서 일관성을 유지하며 프로젝트가 성장할수록 네이밍 프로세스를 쉽게 만듭니다.</li>
<li>CSS 파일이 더욱 조직화됩니다. 의미 있는 이름이 붙은 클래스를 관리하고 찾는 것이 항상 더 편리해집니다.</li>
<li>외부 라이브러리를 사용할 때 네이밍 충돌을 방지합니다.</li>
<li>SEO(검색 엔진 최적화)와 접근성에 도움이 됩니다.</li>
<li>DRY(Don't repeat yourself: 중복을 피하라) 원칙을 준수하여 코드 반복을 방지합니다.</li>
<li>대규모 프로젝트에서는 새로운 영역, 기능 및 디자인 수정이 계속해서 추가됩니다. 적절한 네이밍은 이러한 변경에 대한 더 나은 적응을 용이하게 하여 코드 업데이트의 원할한 진행을 보장합니다.</li>
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
<p>소프트웨어 개발에서 Clean Code라는 중요한 개념이 있습니다. Clean Code는 코드의 가독성, 이해도, 유지보수성, 그리고 조직화를 강조합니다. 적절한 명명은 Clean Code의 중요한 요소이며, Clean Code 원칙을 준수하는 것은 정확한 명명부터 시작합니다.</p>
<p>그래서, 웹사이트의 프레임워크를 구축하는 데 HTML 클래스를 어떻게 명명해야 할까요?</p>
<ul>
<li>클래스 이름은 소문자로 작성하고 하이픈 (-) 또는 밑줄 (_)로 구분되어야 합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span>”header<span class="token operator">-</span>block”<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"header_block"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token function">하이픈</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token punctuation">)</span>으로 구분되지 않는 경우<span class="token punctuation">,</span> 두 개의 별개의 클래스 이름으로 정의됩니다<span class="token punctuation">.</span> <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"header block"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 이 세 개의 div는 완전히 다른 요소들입니다<span class="token punctuation">.</span> <span class="token operator">--</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>영어 이외의 언어는 사용하지 않으며, 카멜케이스 명명 규칙을 피해야 합니다. 카멜케이스는 단어의 첫 글자가 소문자이고, 그 다음 단어의 첫 글자는 대문자로 표기하는 명명 규칙입니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span>”başlık<span class="token operator">-</span>alanı”<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"headerBlock"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"başlıkAlanı"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 이런 예시처럼 사용해서는 절대 안 됩니다<span class="token punctuation">.</span> <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 올바르게 사용하는 방법은 다음과 같습니다<span class="token operator">:</span> <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"header-block"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
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
<ul>
<li>HTML 요소에 할당하는 ID에는 CamelCase 네이밍 규칙이 사용됩니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"sendButton"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>적합하고 구체적인 ID를 사용해야 합니다. 적용되는 영역의 목적을 명확히 정의해야 합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>article <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"article-content"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>article<span class="token operator">></span>
<span class="token operator">&lt;</span>nav <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"menu-block"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"post-date"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
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
<ul>
<li>가능하면 짧고 간결하게 유지하며 지나친 긴 이름을 피해야 합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span>”authentication<span class="token operator">-</span>block<span class="token operator">-</span>container<span class="token operator">-</span>area”<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"frequently-asked-questions-area"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 다음과 같이 사용하는 것이 더 적절합니다<span class="token punctuation">.</span> <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"authentication-block"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"auth-block"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"faq-area"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>다른 컨텍스트의 개발자들이 이해하기 어려울 정도로 너무 짧은 네이밍 규칙을 피하세요.</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span>”lg<span class="token operator">-</span>cn”<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"ar-co"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 다음 형식에서 사용할 수 있습니다<span class="token operator">:</span> <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"login-content"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"article-content"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>여러 곳에서 사용할 수 있는 일반적인 이름은 혼자 사용되어서는 안 됩니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span>”blue”<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"right"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"back"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 다음과 같은 방식으로 사용하는 것이 더 적절합니다<span class="token operator">:</span> <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"blue-btn"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"content-right"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"back-item"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그래서 이러한 권장 사항의 근간은 무엇일까요? 왜 우리는 이러한 방식으로 요소의 이름을 지어야 할까요?</p>
<ul>
<li>일부 브라우저나 플랫폼에서 대소문자를 구별하는 차이가 있을 수 있습니다. 따라서 클래스 이름에 일관되게 소문자를 사용하면 잠재적인 예상치 못한 문제를 방지할 수 있습니다.</li>
<li>소프트웨어의 언어는 보편적이고 영어입니다. 터키헤 이름을 사용하지 않는 이유는 다른 언어 사용시 언어 및 대소문자에 따른 문자 차이로 인한 문제가 발생할 수 있기 때문입니다.</li>
<li>CamelCase는 널리 받아들여지는 명명 규칙이며, 클래스 이름 뿐만 아니라 ID, 변수 및 함수 이름에서도 선호됩니다.</li>
<li>큰 프로젝트에서 CSS와 함께 사용될 때 특히 긴 명명 규칙은 파일 크기를 증가시켜 성능에 부정적인 영향을 미칠 수 있습니다. 또한 긴 이름은 코드를 이해하기 어렵게 만들어 개발 프로세스를 늦춥니다.</li>
<li>매우 짧은 이름은 혼란을 초래할 수 있으며 문자 수가 적어 사용성이 제한적이라 개발 프로세스에서 일관된 사용이 어려울 수 있습니다.</li>
<li>&quot;.left .red&quot;와 같은 명명 규칙은 단독으로 사용할 때 명확성이 부족하며, 의미가 명확하지 않습니다. 더욱이 이러한 규칙은 다양한 맥락에서 사용될 수 있으며 CSS 코드를 복잡하게 만들 수 있습니다.</li>
</ul>
<p>위에서 언급된 모든 상황은 웹 개발 커뮤니티의 습관, 특정 라이브러리 기대치 및 HTML 및 CSS 표준을 준수하여 설정된 규칙입니다. 일반적인 사용은 이러한 규칙에 따라 정렬되지만 필수적인 것은 아닙니다.</p>
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
<p>네이밍 표준은 코드 가독성을 높이고 프로젝트의 일관성을 유지하며 조직을 제공하며 오류 가능성을 줄이며 팀 내의 효과적인 협업을 촉진하기 위해 정립됩니다.</p>
<p>HTML 관련 W3C 문서에 액세스할 수 있습니다. 이 문서는 웹 세계의 표준을 정의합니다.</p>
<p>이 모든 것을 설명한 후에 우리의 기사를 간단한 예제 코드 블록으로 마무리해 보겠습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>header <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"header-container"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"logo-block"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>h1<span class="token operator">></span>World <span class="token keyword">of</span> the Web<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>nav <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"menu-block"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>ul<span class="token operator">></span>
            <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>Subscribe<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>My<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"youtube.com/@worldoftheweb"</span><span class="token operator">></span>Youtube<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>Channel<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"login-btn"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>span<span class="token operator">></span>Subscribe<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">></span>


<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> ui<span class="token operator">-</span>log 수평형 <span class="token operator">--</span><span class="token operator">></span>

<span class="token operator">&lt;</span>ins <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"adsbygoogle"</span>
      style<span class="token operator">=</span><span class="token string">"display:block"</span>
      data<span class="token operator">-</span>ad<span class="token operator">-</span>client<span class="token operator">=</span><span class="token string">"ca-pub-4877378276818686"</span>
      data<span class="token operator">-</span>ad<span class="token operator">-</span>slot<span class="token operator">=</span><span class="token string">"9743150776"</span>
      data<span class="token operator">-</span>ad<span class="token operator">-</span>format<span class="token operator">=</span><span class="token string">"auto"</span>
      data<span class="token operator">-</span>full<span class="token operator">-</span>width<span class="token operator">-</span>responsive<span class="token operator">=</span><span class="token string">"true"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>ins<span class="token operator">></span>
<span class="token operator">&lt;</span>component is<span class="token operator">=</span><span class="token string">"script"</span><span class="token operator">></span>
<span class="token punctuation">(</span>adsbygoogle <span class="token operator">=</span> window<span class="token punctuation">.</span>adsbygoogle <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>component<span class="token operator">></span>

이번 주제는 여기까지입니다<span class="token punctuation">.</span> 읽어 주셔서 감사합니다<span class="token operator">!</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
