<template><div><p><img src="@source/docs/Tech/2024-04-19-HTMLHacks10TipstoBuildBetterWebsites/img/HTMLHacks10TipstoBuildBetterWebsites_0.png" alt="HTMLHacks10TipstoBuildBetterWebsites"></p>
<p>웹 개발의 끊임없이 변화하는 환경 속에서 HTML(Hypertext Markup Language)은 인터넷 상 모든 웹페이지의 기본 구성 요소로 남아 있습니다. HTML은 구조와 기반을 제공하고, 그 고급 기술을 숙달하는 것은 현재 경쟁력 있는 디지털 세계에서 돋보이는 탁월한 웹사이트를 만드는 데 필수적입니다. 이 포괄적인 가이드에서는 웹 개발 기술을 향상시키고 사용자를 매혹시키며 탁월한 경험을 제공하는 웹사이트를 만들 수 있도록 도와주는 10가지 고급 HTML 팁과 전략을 살펴보겠습니다.</p>
<h1 id="_1-의미-있는-html-접근성과-seo-향상" tabindex="-1"><a class="header-anchor" href="#_1-의미-있는-html-접근성과-seo-향상" aria-hidden="true">#</a> 1- 의미 있는 HTML: 접근성과 SEO 향상</h1>
<p>의미 있는 HTML은 현대 웹 개발의 기초로, 웹 페이지의 콘텐츠를 구조화하고 의미 있는 방식으로 정리하는 방법을 제공합니다. 의미 있는 HTML은 모든 사용자(장애를 가진 사용자 포함)의 접근성을 향상시키는데 그치지 않고, 검색 엔진 최적화(SEO)를 개선하여 검색 엔진이 웹페이지의 콘텐츠와 구조에 대한 명확한 정보를 제공합니다. 의미 있는 HTML 요소가 접근성과 SEO를 어떻게 향상시키는지, 코드 예제와 함께 알아보겠습니다.</p>
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
<h1 id="시멘틱-html을-통한-접근성-향상" tabindex="-1"><a class="header-anchor" href="#시멘틱-html을-통한-접근성-향상" aria-hidden="true">#</a> 시멘틱 HTML을 통한 접근성 향상:</h1>
<p>시멘틱 HTML 요소는 콘텐츠의 의미와 구조를 전달하여 스크린 리더와 같은 보조 기술이 장애를 가진 사용자에게 정보를 해석하고 제공하기 쉽게 만듭니다. 여기에는 주요 시맨틱 HTML 요소와 접근성 이점이 포함되어 있습니다:</p>
<ul>
<li>헤더 (<code v-pre>header</code>): 문서나 섹션의 헤더를 정의하며 일반적으로 소개 콘텐츠나 내비게이션 링크를 포함합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>header<span class="token operator">></span>
    <span class="token operator">&lt;</span>h1<span class="token operator">></span>웹사이트 제목<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
    <span class="token operator">&lt;</span>nav<span class="token operator">></span>
        <span class="token operator">&lt;</span>ul<span class="token operator">></span>
            <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>홈<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>소개<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>연락처<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">></span>
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
<ul>
<li>네비게이션 (<code v-pre>nav</code>): 네비게이션 링크 섹션을 정의합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>nav<span class="token operator">></span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>홈<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>소개<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>문의<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>주요 콘텐츠 (<code v-pre>main</code>): 헤더, 푸터 또는 네비게이션 링크를 제외한 문서의 주요 콘텐츠를 정의합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>main<span class="token operator">></span>
    <span class="token operator">&lt;</span>h2<span class="token operator">></span>주요 콘텐츠 제목<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>이것은 웹페이지의 주요 콘텐츠입니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
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
<ul>
<li>기사 (<code v-pre>article</code>): 블로그 게시물, 기사 또는 뉴스 이야기와 같은 독립적이고 자체 완결된 콘텐츠를 정의합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>article<span class="token operator">></span>
    <span class="token operator">&lt;</span>h2<span class="token operator">></span>기사 제목<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>이곳에 기사 내용이 들어갑니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>article<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>바닥글 (<code v-pre>footer</code>): 문서나 섹션의 바닥글을 정의하며 보통 저작권 정보, 연락처, 추가 탐색 링크를 포함합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>footer<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token operator">&amp;</span>copy<span class="token punctuation">;</span> <span class="token number">2024</span> 당신의 웹사이트<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>footer<span class="token operator">></span>
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
<p>의미있는 HTML 요소를 적절하게 사용하여 웹 콘텐츠에 명확한 구조와 의미를 부여하여 스크린 리더와 같은 보조 기술을 사용하는 모든 사용자에게 콘텐츠에 액세스할 수 있게 합니다.</p>
<h1 id="시멘틱-html을-활용한-seo-향상" tabindex="-1"><a class="header-anchor" href="#시멘틱-html을-활용한-seo-향상" aria-hidden="true">#</a> 시멘틱 HTML을 활용한 SEO 향상:</h1>
<p>시맨틱 HTML은 접근성을 향상시킬 뿐만 아니라 검색 엔진에게 웹사이트의 콘텐츠와 구조에 대한 가치 있는 정보를 제공함으로써 SEO를 개선합니다. 시맨틱 HTML 요소가 SEO를 향상시키는 방법은 다음과 같습니다:</p>
<ul>
<li>헤딩 레벨: 콘텐츠의 계층 및 구조를 정의하기 위해 헤딩 요소(<code v-pre>h1</code>에서 <code v-pre>h6</code>)를 사용하십시오. 검색 엔진은 헤딩을 사용하여 웹 페이지의 주요 주제와 하위 주제를 이해합니다.</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>h1<span class="token operator">></span>Main Heading<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
<span class="token operator">&lt;</span>h2<span class="token operator">></span>하위 제목 <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
<span class="token operator">&lt;</span>p<span class="token operator">></span>내용<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span>h2<span class="token operator">></span>하위 제목 <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
<span class="token operator">&lt;</span>p<span class="token operator">></span>내용<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>구조화된 데이터 표시: 특정 콘텐츠 유형에 대한 추가 컨텍스트를 제공하기 위해 의미 있는 HTML을 구조화된 데이터 마크업(JSON-LD, Microdata 등)과 결합하여 사용하세요. 이를 통해 검색 엔진이 기사, 이벤트, 제품, 리뷰 등 특정 콘텐츠 유형에 대해 추가 정보를 제공받을 수 있습니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>article itemscope itemtype<span class="token operator">=</span><span class="token string">"http://schema.org/Article"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>h2 itemprop<span class="token operator">=</span><span class="token string">"headline"</span><span class="token operator">></span>기사 제목<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
    <span class="token operator">&lt;</span>p itemprop<span class="token operator">=</span><span class="token string">"description"</span><span class="token operator">></span>기사 설명<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>span itemprop<span class="token operator">=</span><span class="token string">"author"</span><span class="token operator">></span>저자 이름<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
    <span class="token operator">&lt;</span>span itemprop<span class="token operator">=</span><span class="token string">"datePublished"</span><span class="token operator">></span>게시 날짜<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>article<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>탐색 링크: 의미 있는 탐색 요소인 <code v-pre>nav</code>를 사용해 탐색 메뉴를 정의하여 웹사이트 구조를 이해하고 중요 페이지로 쉽게 이동할 수 있도록 해보세요.</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>nav<span class="token operator">></span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>홈<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"/about"</span><span class="token operator">></span>소개<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"/contact"</span><span class="token operator">></span>연락처<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>푸터 정보: 웹 페이지의 푸터에 저작권 고지, 연락처 정보 및 추가 탐색 링크와 같은 관련 정보를 포함하세요. 이는 검색 엔진에게 웹사이트에 대한 유용한 맥락을 제공할 수 있습니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>footer<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token operator">&amp;</span>copy<span class="token punctuation">;</span> <span class="token number">2024</span> 당신의 웹사이트<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"/privacy-policy"</span><span class="token operator">></span>개인정보 처리방침<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"/terms-of-service"</span><span class="token operator">></span>서비스 이용약관<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>footer<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>시멘틱 HTML 요소를 사용하여 웹 콘텐츠를 구조화하고 검색 엔진에 유용한 맥락을 제공하여, 검색 엔진 결과 페이지(SERPs)에서 웹사이트의 가시성과 순위를 향상시킬 수 있습니다. 이는 궁극적으로 당신의 사이트로 더 많은 유기적 트래픽을 유도할 수 있습니다.```</p>
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
<p>결론적으로 시멘틱 HTML은 접근성과 SEO를 높이는 데 강력한 도구입니다. 적절하게 시맨틱 요소를 사용하고 웹 콘텐츠에 명확한 구조와 문맥을 제공함으로써, 모든 사용자에게 더 접근 가능하고 검색 엔진 결과에서 더 활발하고 눈에 띄는 웹사이트를 만들 수 있습니다.</p>
<h1 id="_2-반응형-디자인-다양한-기기-호환성-보장하기" tabindex="-1"><a class="header-anchor" href="#_2-반응형-디자인-다양한-기기-호환성-보장하기" aria-hidden="true">#</a> 2- 반응형 디자인: 다양한 기기 호환성 보장하기</h1>
<p>반응형 디자인은 웹사이트가 다양한 기기와 화면 크기에서 완벽하게 보이고 기능하도록 보장하는 데 중요합니다. CSS 미디어 쿼리와 유연한 레이아웃 기술을 활용하여 개발자는 사용자의 기기에 적응하는 반응형 디자인을 만들 수 있습니다. 반응형 디자인을 통해 다양한 기기 호환성을 보장하는 방법과 코드 예제를 살펴보겠습니다:</p>
<h1 id="css-미디어-쿼리-사용하기" tabindex="-1"><a class="header-anchor" href="#css-미디어-쿼리-사용하기" aria-hidden="true">#</a> CSS 미디어 쿼리 사용하기:</h1>
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
<p>CSS 미디어 쿼리를 활용하면 사용자 장치의 특성에 따라 스타일을 적용할 수 있습니다. 화면 너비, 높이, 방향 및 해상도와 같은 특징을 기반으로 다양한 스타일을 정의할 수 있어요. 서로 다른 화면 크기에 대한 다른 스타일 세트를 정의함으로써, 사용자 장치에 맞게 동적으로 조정되는 반응형 레이아웃을 만들 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 모든 화면 크기에 대한 기본 스타일 */</span>
<span class="token punctuation">.</span>container <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 767px 이하 화면 크기에 대한 스타일 (예: 스마트폰) */</span>
@media screen <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">max<span class="token operator">-</span>width<span class="token operator">:</span> 767px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span>container <span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 768px에서 1023px 사이의 화면 크기에 대한 스타일 (예: 태블릿) */</span>
@media screen <span class="token function">and</span> <span class="token punctuation">(</span>min<span class="token operator">-</span>width<span class="token operator">:</span> 768px<span class="token punctuation">)</span> <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">max<span class="token operator">-</span>width<span class="token operator">:</span> 1023px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span>container <span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">80</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 1024px 이상 화면 크기에 대한 스타일 (예: 데스크톱) */</span>
@media screen <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">min<span class="token operator">-</span>width<span class="token operator">:</span> 1024px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span>container <span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">70</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서 .container 요소는 미디어 쿼리를 사용하여 화면 크기에 따라 너비를 조정합니다. 화면 크기가 커질수록 레이아웃이 더 유연해지며, 모든 크기의 장치에서 더 나은 사용자 경험을 제공해요.</p>
<h1 id="백분율-너비를-활용한-유연한-레이아웃" tabindex="-1"><a class="header-anchor" href="#백분율-너비를-활용한-유연한-레이아웃" aria-hidden="true">#</a> 백분율 너비를 활용한 유연한 레이아웃:</h1>
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
<p>요소들에 대해 백분율 기반 폭을 사용하면 컨테이너의 크기에 비례하여 조정됩니다. 이 방식을 사용하면 화면 크기에 따라 고정 픽셀 값을 필요로하지 않고 콘텐츠가 접근 가능하고 가독성이 좋게 유지됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 반응형 디자인용 유동 레이아웃 */</span>
<span class="token punctuation">.</span>container <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">90</span><span class="token operator">%</span><span class="token punctuation">;</span> <span class="token comment">/* 부모 요소의 90%로 컨테이너 폭 설정 */</span>
    max<span class="token operator">-</span>width<span class="token operator">:</span> 1200px<span class="token punctuation">;</span> <span class="token comment">/* 컨테이너 폭을 1200px로 제한 */</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> auto<span class="token punctuation">;</span> <span class="token comment">/* 컨테이너를 수평 가운데 정렬 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.container 요소의 너비를 백분율 값으로 설정하고 큰 화면에서 너무 넓어지는 것을 방지하기 위해 max-width 속성을 추가하면 다양한 뷰포트 크기에 매끄럽게 적응하는 유동 레이아웃이 생성됩니다.</p>
<h1 id="유연한-레이아웃을-위한-플렉스박스와-그리드" tabindex="-1"><a class="header-anchor" href="#유연한-레이아웃을-위한-플렉스박스와-그리드" aria-hidden="true">#</a> 유연한 레이아웃을 위한 플렉스박스와 그리드:</h1>
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
<p>CSS Flexbox 및 Grid 레이아웃 기술은 최소한의 코드로 유연하고 반응형 레이아웃을 만들 수 있는 강력한 도구를 제공합니다. 이러한 레이아웃 시스템을 사용하면 요소를 동적으로 정렬하고 분배하여 다양한 화면 크기에 맞게 복잡한 디자인을 만드는 것이 더 쉬워집니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 반응형 디자인을 위한 Flexbox 레이아웃 */</span>
<span class="token punctuation">.</span>container <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    flex<span class="token operator">-</span>wrap<span class="token operator">:</span> wrap<span class="token punctuation">;</span>
    justify<span class="token operator">-</span>content<span class="token operator">:</span> space<span class="token operator">-</span>between<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>item <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">33.33</span><span class="token operator">%</span> <span class="token operator">-</span> 20px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 각 항목의 너비를 컨테이너 너비의 1/3으로 설정 */</span>
    margin<span class="token operator">-</span>bottom<span class="token operator">:</span> 20px<span class="token punctuation">;</span> <span class="token comment">/* 항목 사이에 여백 추가 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서 .container 요소는 flexbox를 사용하여 자식 .item 요소를 가로로 배열하고 사이에 공간을 두고 있습니다. 각 항목의 너비는 컨테이너 너비의 1/3로 설정되어 사용 가능한 공간에 따라 동적으로 조정됩니다.</p>
<p>반응형 디자인은 다양한 화면 크기에서 일관된 사용자 경험을 제공하고 다양한 디바이스 간의 호환성을 보장하기 위해 중요합니다. CSS 미디어 쿼리, 유동형 레이아웃, Flexbox, Grid와 같은 유연한 레이아웃 기술을 활용함으로써 개발자들은 사용자의 디바이스에 우아하게 대응하는 반응형 디자인을 만들 수 있습니다. 반응형 디자인 원칙을 준수함으로써 접근성이 좋고 사용자 친화적이며 시각적으로 매력적인 웹사이트를 다양한 디바이스와 화면 크기에 걸쳐 구현할 수 있습니다.</p>
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
<h1 id="_3-접근-가능한-양식-모두를-위한-사용-편의성-향상" tabindex="-1"><a class="header-anchor" href="#_3-접근-가능한-양식-모두를-위한-사용-편의성-향상" aria-hidden="true">#</a> 3- 접근 가능한 양식: 모두를 위한 사용 편의성 향상</h1>
<p>접근 가능한 양식을 만드는 것은 모든 사용자가 장애를 가진 사람을 포함하여 웹사이트에서 정보를 상호 작용하고 제출할 수 있는지를 보장하기 위해 중요합니다. 레이블, 입력 유형 및 ARIA 속성과 같은 HTML 기능을 활용하여 최상의 방법을 따르면 양식의 사용 편의성과 접근성을 향상시킬 수 있습니다. 코드 예제를 사용하여 어떻게 접근 가능한 양식을 만드는지 살펴보겠습니다:</p>
<h1 id="_1-의미-있는-html-사용" tabindex="-1"><a class="header-anchor" href="#_1-의미-있는-html-사용" aria-hidden="true">#</a> 1. 의미 있는 HTML 사용:</h1>
<p>의미 있는 HTML 요소는 스크린 리더와 같은 보조 기술이 보다 접근 가능한 형식으로 양식에 의미 있는 구조를 제공합니다. 'form', 'label' 및 'input' 요소를 적절하게 사용하여 잘 구조화되고 접근 가능한 양식을 만들어보세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>form<span class="token operator">></span>
    <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"name"</span><span class="token operator">></span>이름<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> id<span class="token operator">=</span><span class="token string">"name"</span> name<span class="token operator">=</span><span class="token string">"name"</span> required<span class="token operator">></span>
    <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"email"</span><span class="token operator">></span>이메일<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"email"</span> id<span class="token operator">=</span><span class="token string">"email"</span> name<span class="token operator">=</span><span class="token string">"email"</span> required<span class="token operator">></span>
    <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>제출<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-설명적인-레이블-제공" tabindex="-1"><a class="header-anchor" href="#_2-설명적인-레이블-제공" aria-hidden="true">#</a> 2. 설명적인 레이블 제공:</h1>
<p>항상 <code v-pre>label</code> 요소의 <code v-pre>for</code> 속성을 사용하여 설명적인 레이블과 양식 컨트롤을 연결해야 합니다. 이를 통해 사용자가 보조 기술을 사용할 때 각 양식 필드의 목적을 이해할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"name"</span><span class="token operator">></span>이름<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> id<span class="token operator">=</span><span class="token string">"name"</span> name<span class="token operator">=</span><span class="token string">"name"</span> required<span class="token operator">></span>
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
<h1 id="_3-적합한-입력-유형-활용하기" tabindex="-1"><a class="header-anchor" href="#_3-적합한-입력-유형-활용하기" aria-hidden="true">#</a> 3. 적합한 입력 유형 활용하기:</h1>
<p>사용자의 요구에 가장 적합한 입력 컨트롤을 제공하기 위해 HTML5 입력 유형을 활용하세요. 예를 들어, 이메일 주소에는 <code v-pre>input type=&quot;email&quot;</code>을 사용하고 전화번호에는 <code v-pre>input type=&quot;tel&quot;</code>을 사용하여 모바일 장치에서 정확한 가상 키보드를 활성화할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span>\"email\"<span class="token operator">></span>이메일<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
<span class="token operator">&lt;</span>input type<span class="token operator">=</span>\"email\" id<span class="token operator">=</span>\"email\" name<span class="token operator">=</span>\"email\" required<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-플레이스홀더-텍스트-포함하기" tabindex="-1"><a class="header-anchor" href="#_4-플레이스홀더-텍스트-포함하기" aria-hidden="true">#</a> 4. 플레이스홀더 텍스트 포함하기:</h1>
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
<p>플레이스홀더 텍스트를 사용하면 폼 필드에 대한 추가적인 정보를 제공할 수 있지만 레이블을 대체해서는 안 됩니다. 플레이스홀더는 보조 정보로 사용되어야 하며 사용자가 입력을 시작할 때 사라지지 않도록 해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> id<span class="token operator">=</span><span class="token string">"name"</span> name<span class="token operator">=</span><span class="token string">"name"</span> required placeholder<span class="token operator">=</span><span class="token string">"이름을 입력하세요"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_5-aria-속성-추가" tabindex="-1"><a class="header-anchor" href="#_5-aria-속성-추가" aria-hidden="true">#</a> 5. ARIA 속성 추가:</h1>
<p>ARIA(접근 가능한 리치 인터넷 응용 프로그램) 속성을 사용하여 사용자 정의 또는 대화형 요소를 사용할 때 특히 양식의 접근성을 향상시키세요. 예를 들어, &quot;aria-required=&quot;true&quot;&quot;를 사용하여 필수 필드를 나타내고 form controls을 설명적 텍스트와 관련시키려면 aria-describedby를 사용하세요.</p>
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
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>이름:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">required</span> <span class="token attr-name">aria-required</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">aria-describedby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name-description<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name-description<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>성함을 입력해주세요.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-키보드-접근성-확인하기" tabindex="-1"><a class="header-anchor" href="#_6-키보드-접근성-확인하기" aria-hidden="true">#</a> 6. 키보드 접근성 확인하기:</h1>
<p>폼에 있는 요소들을 키보드만을 이용하여 탐색하고 상호작용할 수 있도록 해주세요. 마우스에 특화된 이벤트나 상호작용에 의존하지 말고, 폼 컨트롤이 논리적인 순서로 포커스를 받도록 해주세요.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>이름:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">required</span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>이메일:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">required</span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>제출<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
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
<h1 id="_7-명확한-오류-메시지-제공하기" tabindex="-1"><a class="header-anchor" href="#_7-명확한-오류-메시지-제공하기" aria-hidden="true">#</a> 7. 명확한 오류 메시지 제공하기:</h1>
<p>오류 메시지가 해당 양식 필드와 명확하게 연관되어 있고, 화면 판독기를 사용하는 사용자를 포함한 모든 사용자가 접근할 수 있는 방식으로 제공될 수 있도록 보장하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"email"</span> id<span class="token operator">=</span><span class="token string">"email"</span> name<span class="token operator">=</span><span class="token string">"email"</span> required<span class="token operator">></span>
<span class="token operator">&lt;</span>div role<span class="token operator">=</span><span class="token string">"alert"</span> id<span class="token operator">=</span><span class="token string">"email-error"</span><span class="token operator">></span>유효한 이메일 주소를 입력해주세요<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>이러한 모범 사례를 준수하고 접근 가능한 디자인 원칙을 양식에 통합함으로써, 웹사이트에서 정보를 효과적으로 상호작용하고 제출할 수 있는 모든 사용자를 보장할 수 있습니다. 접근 가능한 양식을 만드는 것은 모든 사용자의 사용성을 향상시키는 데 도움이 되는데 그치지 않고 디지털 공간에서 포용력과 다양성을 촉진하는 데도 도움이 됩니다.</p>
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
<h1 id="_4-이미지-최적화-품질과-성능의-균형-맞추기" tabindex="-1"><a class="header-anchor" href="#_4-이미지-최적화-품질과-성능의-균형-맞추기" aria-hidden="true">#</a> 4- 이미지 최적화: 품질과 성능의 균형 맞추기</h1>
<p>이미지 최적화는 시각적 품질과 웹사이트 성능 사이의 균형을 이루는 데 중요합니다. 이미지 파일 크기를 줄이면서도 품질을 포기하지 않고 최적화함으로써, 웹 페이지가 빠르게 로드되고 사용자에게 원활한 경험을 제공할 수 있습니다. 코드 예제를 통해 이미지를 최적화하는 몇 가지 기술을 살펴보겠습니다:</p>
<h1 id="_1-적절한-이미지-형식-선택" tabindex="-1"><a class="header-anchor" href="#_1-적절한-이미지-형식-선택" aria-hidden="true">#</a> 1. 적절한 이미지 형식 선택:</h1>
<p>다른 이미지 형식은 서로 다른 유형의 콘텐츠에 적합합니다. 이미지의 특성에 따라 가장 적합한 형식을 선택하세요:</p>
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
<li>JPEG (Joint Photographic Experts Group): 사진이나 복잡한 색상 또는 그라데이션을 가진 이미지에 이상적입니다.</li>
<li>PNG (Portable Network Graphics): 투명도가 있는 이미지나 색상이 적은 간단한 그래픽에 적합합니다.</li>
<li>SVG (Scalable Vector Graphics): 로고, 아이콘 및 확장 가능한 품질 손실 없이 조절 가능한 그래픽에 가장 적합합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token constant">JPEG</span> 예시 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"photo.jpg"</span> alt<span class="token operator">=</span><span class="token string">"사진"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token constant">PNG</span> 예시 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"logo.png"</span> alt<span class="token operator">=</span><span class="token string">"로고"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token constant">SVG</span> 예시 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>svg width<span class="token operator">=</span><span class="token string">"100"</span> height<span class="token operator">=</span><span class="token string">"100"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>circle cx<span class="token operator">=</span><span class="token string">"50"</span> cy<span class="token operator">=</span><span class="token string">"50"</span> r<span class="token operator">=</span><span class="token string">"40"</span> fill<span class="token operator">=</span><span class="token string">"red"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>svg<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-이미지-압축" tabindex="-1"><a class="header-anchor" href="#_2-이미지-압축" aria-hidden="true">#</a> 2. 이미지 압축:</h1>
<p>시각적 품질을 유지하면서 파일 크기를 줄이기 위해 이미지 압축 기술을 사용하세요. 이미지 편집 도구나 온라인 압축 서비스를 사용하여 이 작업을 수행할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 원본 이미지 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"original.jpg"</span> alt<span class="token operator">=</span><span class="token string">"원본 이미지"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 압축된 이미지 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"compressed.jpg"</span> alt<span class="token operator">=</span><span class="token string">"압축된 이미지"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-이미지-크기-지정하기" tabindex="-1"><a class="header-anchor" href="#_3-이미지-크기-지정하기" aria-hidden="true">#</a> 3. 이미지 크기 지정하기:</h1>
<p>레이아웃 변화를 방지하고 페이지 로딩 성능을 향상시키기 위해 이미지의 너비와 높이 속성을 항상 지정해 주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"photo.jpg"</span> alt<span class="token operator">=</span><span class="token string">"사진"</span> width<span class="token operator">=</span><span class="token string">"800"</span> height<span class="token operator">=</span><span class="token string">"600"</span> <span class="token operator">/</span><span class="token operator">></span>
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
<h1 id="_4-반응형-이미지-사용하기" tabindex="-1"><a class="header-anchor" href="#_4-반응형-이미지-사용하기" aria-hidden="true">#</a> 4. 반응형 이미지 사용하기:</h1>
<p><code v-pre>picture</code> 요소를 사용하여 여러 이미지 소스를 제공하여 사용자의 기기와 화면 크기에 따라 가장 적합한 이미지를 제공하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>picture<span class="token operator">></span>
  <span class="token operator">&lt;</span>source srcset<span class="token operator">=</span><span class="token string">"small.jpg"</span> media<span class="token operator">=</span><span class="token string">"(max-width: 600px)"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>source srcset<span class="token operator">=</span><span class="token string">"medium.jpg"</span> media<span class="token operator">=</span><span class="token string">"(max-width: 1200px)"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"large.jpg"</span> alt<span class="token operator">=</span><span class="token string">"반응형 이미지"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>picture<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-lazy-loading" tabindex="-1"><a class="header-anchor" href="#_5-lazy-loading" aria-hidden="true">#</a> 5. Lazy Loading:</h1>
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
<p>이미지 로딩을 지연시켜 필요할 때까지 이미지를 불러오지 않고, 초기 페이지 로드 시간을 줄일 수 있는 lazy loading을 구현해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"placeholder.jpg"</span> data<span class="token operator">-</span>src<span class="token operator">=</span><span class="token string">"image.jpg"</span> alt<span class="token operator">=</span><span class="token string">"Lazy Loaded Image"</span> loading<span class="token operator">=</span><span class="token string">"lazy"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-이미지-cdn-사용" tabindex="-1"><a class="header-anchor" href="#_6-이미지-cdn-사용" aria-hidden="true">#</a> 6. 이미지 CDN 사용:</h2>
<p>이미지 콘텐츠 전달 네트워크(CDN)를 활용하여 사용자에게 더 가까운 위치에 있는 서버에서 이미지를 제공함으로써 대기 시간을 줄이고 로드 시간을 개선하세요:</p>
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
<img src="https://cdn.example.com/image.jpg" alt="CDN Image" />
<h1 id="_7-svg-최적화하기" tabindex="-1"><a class="header-anchor" href="#_7-svg-최적화하기" aria-hidden="true">#</a> 7. SVG 최적화하기:</h1>
<p>SVG를 사용할 때 불필요한 코드를 제거하고 SVG 파일을 최소화하여 최적화하세요:</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0 0 24 24<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>M0 0h24v24H0V0z<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>M12 2L2 20h20z<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
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
<p>이미지 최적화 기술을 적용하여 시각적 품질과 웹 사이트 성능 사이의 균형을 유지하면, 웹 페이지가 빠르게 로드되고 다양한 기기와 네트워크 환경에서 매끄러운 사용자 경험을 제공할 수 있습니다. 웹 사이트가 발전함에 따라 최적의 성능을 유지하려면 이미지를 정기적으로 검토하고 최적화하는 것을 기억하세요.</p>
<h1 id="_5-사용자-정의-요소-사용자-인터페이스-맞춤-설정" tabindex="-1"><a class="header-anchor" href="#_5-사용자-정의-요소-사용자-인터페이스-맞춤-설정" aria-hidden="true">#</a> 5- 사용자 정의 요소: 사용자 인터페이스 맞춤 설정</h1>
<p>사용자 정의 요소는 현대 웹 개발의 강력한 기능으로, 자신만의 HTML 요소를 정의하고 기능을 캡슐화하여 프로젝트 전반에 걸쳐 재사용할 수 있게 해줍니다. 사용자 정의 요소를 생성하면 사용자 인터페이스를 특정 디자인 요구 사항에 맞게 맞춤 설정할 수 있고, 코드의 모듈성과 재사용성을 향상시킬 수 있습니다. 사용자 정의 요소를 생성하는 방법과 코드 예제를 확인해보세요:</p>
<h1 id="_1-사용자-정의-요소-클래스-정의" tabindex="-1"><a class="header-anchor" href="#_1-사용자-정의-요소-클래스-정의" aria-hidden="true">#</a> 1. 사용자 정의 요소 클래스 정의:</h1>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">CustomElement</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 여기에 초기화 코드를 넣어주세요</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 사용자 정의 메서드와 속성 정의</span>
<span class="token punctuation">}</span>
<span class="token comment">// 사용자 정의 요소 정의</span>
customElements<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">'custom-element'</span><span class="token punctuation">,</span> CustomElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-사용자-정의-요소-라이프사이클-콜백-구현" tabindex="-1"><a class="header-anchor" href="#_2-사용자-정의-요소-라이프사이클-콜백-구현" aria-hidden="true">#</a> 2. 사용자 정의 요소 라이프사이클 콜백 구현:</h1>
<p>사용자 정의 요소에는 라이프사이클 콜백이 있어서 요소의 라이프사이클 여러 단계에 훅을 걸 수 있습니다. 이러한 콜백은 connectedCallback, disconnectedCallback, attributeChangedCallback, 그리고 adoptedCallback이 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">CustomElement</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 여기에 초기화 코드를 넣어주세요</span>
  <span class="token punctuation">}</span>
  <span class="token function">connectedCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 요소가 DOM에 삽입될 때 호출됩니다</span>
  <span class="token punctuation">}</span>
  <span class="token function">disconnectedCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 요소가 DOM에서 제거될 때 호출됩니다</span>
  <span class="token punctuation">}</span>
  <span class="token function">attributeChangedCallback</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> newValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 요소의 속성 중 하나가 추가되거나 제거되거나 변경될 때 호출됩니다</span>
  <span class="token punctuation">}</span>
  <span class="token function">adoptedCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 요소가 새 문서로 이동할 때 호출됩니다</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
customElements<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">'custom-element'</span><span class="token punctuation">,</span> CustomElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="_3-캡슐화를-위해-shadow-dom-활용하기" tabindex="-1"><a class="header-anchor" href="#_3-캡슐화를-위해-shadow-dom-활용하기" aria-hidden="true">#</a> 3. 캡슐화를 위해 Shadow DOM 활용하기:</h1>
<p>Shadow DOM을 사용하면 사용자 정의 요소의 내부를 캡슐화하여 외부 세계로부터 구현 세부 정보를 숨기고 CSS 및 JavaScript 충돌을 방지할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">CustomElement</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> shadow <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">attachShadow</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'open'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Shadow DOM 콘텐츠 생성</span>
    shadow<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
      &lt;style>
        /* Shadow DOM 스타일 */
      &lt;/style>
      &lt;div class="container">
        &lt;!-- Shadow DOM 콘텐츠 -->
      &lt;/div>
    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
customElements<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">'custom-element'</span><span class="token punctuation">,</span> CustomElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-기능-추가" tabindex="-1"><a class="header-anchor" href="#_4-기능-추가" aria-hidden="true">#</a> 4. 기능 추가:</h1>
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
<p>당신이 만든 사용자 정의 요소에 기능을 추가하려면 클래스 내에서 메서드와 속성을 정의하면 됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">CustomElement</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> shadow <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">attachShadow</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'open'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    shadow<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
      &lt;button id="increment">증가&lt;/button>
      &lt;span>카운터: &lt;span id="count"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>counter<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>&lt;/span>
    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    shadow<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'increment'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>counter<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>shadowRoot<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'count'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>counter<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
customElements<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">'custom-element'</span><span class="token punctuation">,</span> CustomElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="사용-예시" tabindex="-1"><a class="header-anchor" href="#사용-예시" aria-hidden="true">#</a> 사용 예시:</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>custom<span class="token operator">-</span>element<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>custom<span class="token operator">-</span>element<span class="token operator">></span>
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
<p>이는 사용자 정의 요소가 있는 테이블이고 카운터를 증가시키는 버튼이 있습니다.</p>
<p>사용자 정의 요소는 재사용 가능한 구성 요소를 만들고 웹 응용 프로그램의 유지 보수성과 확장성을 향상시키는 견고한 방법을 제공합니다. 캡슐화, 라이프사이클 콜백 및 추가 기능을 통해 사용자 인터페이스를 효과적으로 조정하여 특정 요구 사항을 충족시킬 수 있습니다.</p>
<h1 id="_6-구조화된-데이터-검색-가시성-최대화" tabindex="-1"><a class="header-anchor" href="#_6-구조화된-데이터-검색-가시성-최대화" aria-hidden="true">#</a> 6- 구조화된 데이터: 검색 가시성 최대화</h1>
<p>구조화된 데이터 또는 스키마 마크업이라고도 하는 구조화된 데이터는 웹 콘텐츠에 주석을 달아 검색 엔진이 해당 콘텐츠의 컨텍스트와 의미를 더 잘 이해하도록 돕는 방법입니다. HTML에 구조화된 데이터를 추가하여 풍부한 결과, 지식 그래프 패널 및 기타 향상된 검색 기능을 활성화하여 검색 가시성을 극대화할 수 있습니다. 아래는 코드 예제와 함께 구조화된 데이터를 구현하는 방법입니다:</p>
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
<h1 id="_1-json-ld-구현" tabindex="-1"><a class="header-anchor" href="#_1-json-ld-구현" aria-hidden="true">#</a> 1. JSON-LD 구현:</h1>
<p>JSON-LD (JavaScript Object Notation for Linked Data)은 Google에서 권장하는 구조화된 데이터 형식입니다. 이는 HTML 문서의 <code v-pre>head</code> 부분에 스크립트 태그로 추가됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"application/ld+json"</span><span class="token operator">></span>
<span class="token punctuation">{</span>
  <span class="token string-property property">"@context"</span><span class="token operator">:</span> <span class="token string">"http://schema.org"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"@type"</span><span class="token operator">:</span> <span class="token string">"Organization"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"귀하의 조직명"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"url"</span><span class="token operator">:</span> <span class="token string">"http://www.example.com"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"logo"</span><span class="token operator">:</span> <span class="token string">"http://www.example.com/logo.png"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"contactPoint"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"@type"</span><span class="token operator">:</span> <span class="token string">"ContactPoint"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"telephone"</span><span class="token operator">:</span> <span class="token string">"+1-xxx-xxx-xxxx"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"contactType"</span><span class="token operator">:</span> <span class="token string">"고객 서비스"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-제품을-위한-구조화된-데이터-추가" tabindex="-1"><a class="header-anchor" href="#_2-제품을-위한-구조화된-데이터-추가" aria-hidden="true">#</a> 2. 제품을 위한 구조화된 데이터 추가:</h1>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"application/ld+json"</span><span class="token operator">></span>
<span class="token punctuation">{</span>
  <span class="token string-property property">"@context"</span><span class="token operator">:</span> <span class="token string">"http://schema.org"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"@type"</span><span class="token operator">:</span> <span class="token string">"LocalBusiness"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Your Business Name"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"image"</span><span class="token operator">:</span> <span class="token string">"http://www.example.com/business-image.jpg"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"address"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"@type"</span><span class="token operator">:</span> <span class="token string">"PostalAddress"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"streetAddress"</span><span class="token operator">:</span> <span class="token string">"123 Main Street"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"addressLocality"</span><span class="token operator">:</span> <span class="token string">"City"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"addressRegion"</span><span class="token operator">:</span> <span class="token string">"State"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"postalCode"</span><span class="token operator">:</span> <span class="token string">"12345"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"addressCountry"</span><span class="token operator">:</span> <span class="token string">"Country"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"telephone"</span><span class="token operator">:</span> <span class="token string">"+1234567890"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"openingHours"</span><span class="token operator">:</span> <span class="token string">"Mo, Tu, We, Th, Fr 09:00-17:00"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"priceRange"</span><span class="token operator">:</span> <span class="token string">"$$"</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"@context"</span><span class="token operator">:</span> <span class="token string">"http://schema.org"</span><span class="token punctuation">,</span>
  <span class="token property">"@type"</span><span class="token operator">:</span> <span class="token string">"LocalBusiness"</span><span class="token punctuation">,</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Your Business Name"</span><span class="token punctuation">,</span>
  <span class="token property">"image"</span><span class="token operator">:</span> <span class="token string">"http://www.example.com/business-image.jpg"</span><span class="token punctuation">,</span>
  <span class="token property">"address"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"@type"</span><span class="token operator">:</span> <span class="token string">"PostalAddress"</span><span class="token punctuation">,</span>
    <span class="token property">"streetAddress"</span><span class="token operator">:</span> <span class="token string">"123 Main St"</span><span class="token punctuation">,</span>
    <span class="token property">"addressLocality"</span><span class="token operator">:</span> <span class="token string">"City"</span><span class="token punctuation">,</span>
    <span class="token property">"addressRegion"</span><span class="token operator">:</span> <span class="token string">"State"</span><span class="token punctuation">,</span>
    <span class="token property">"postalCode"</span><span class="token operator">:</span> <span class="token string">"12345"</span><span class="token punctuation">,</span>
    <span class="token property">"addressCountry"</span><span class="token operator">:</span> <span class="token string">"Country"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"telephone"</span><span class="token operator">:</span> <span class="token string">"+1-xxx-xxx-xxxx"</span><span class="token punctuation">,</span>
  <span class="token property">"openingHours"</span><span class="token operator">:</span> <span class="token string">"Mo-Fr 09:00-17:00"</span><span class="token punctuation">,</span>
  <span class="token property">"priceRange"</span><span class="token operator">:</span> <span class="token string">"$$"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="사용-예시-1" tabindex="-1"><a class="header-anchor" href="#사용-예시-1" aria-hidden="true">#</a> 사용 예시:</h1>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>구조화된 데이터 예제<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 여기에 구조화된 데이터 스크립트 포함 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 여기에 HTML 콘텐츠를 추가하세요 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>웹 페이지에 구조화된 데이터를 추가함으로써 검색 엔진에 내용에 대한 추가적인 컨텍스트를 제공하게 되어 검색 가시성을 향상시키고 웹 사이트 정보를 검색 결과에서 더 나은 방식으로 표시할 수 있습니다.```</p>
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
<h1 id="_7-css-grid-및-flexbox-레이아웃-마스터하기" tabindex="-1"><a class="header-anchor" href="#_7-css-grid-및-flexbox-레이아웃-마스터하기" aria-hidden="true">#</a> 7- CSS Grid 및 Flexbox: 레이아웃 마스터하기</h1>
<p>물론! CSS Grid와 Flexbox는 현대 웹 개발에서 강력한 레이아웃 도구로, 복잡하고 반응형 레이아웃을 쉽게 만들 수 있게 해줍니다. CSS Grid와 Flexbox를 사용하여 레이아웃을 마스터하는 방법에 대한 코드 예제를 제공합니다:</p>
<h1 id="_1-css-grid-레이아웃" tabindex="-1"><a class="header-anchor" href="#_1-css-grid-레이아웃" aria-hidden="true">#</a> 1. CSS Grid 레이아웃:</h1>
<p>CSS Grid 레이아웃은 행과 열을 가진 그리드 기반 레이아웃을 만들 수 있게 합니다.</p>
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
<h2 id="기본-그리드-예시" tabindex="-1"><a class="header-anchor" href="#기본-그리드-예시" aria-hidden="true">#</a> 기본 그리드 예시:</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>grid<span class="token operator">-</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> grid<span class="token punctuation">;</span>
  grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token operator">:</span> 1fr 1fr 1fr<span class="token punctuation">;</span> <span class="token comment">/* 세 개의 동일한 너비의 열 */</span>
  grid<span class="token operator">-</span>gap<span class="token operator">:</span> 20px<span class="token punctuation">;</span> <span class="token comment">/* 그리드 아이템 사이의 간격 */</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>grid<span class="token operator">-</span>item <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #ccc<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="grid-container">
  <div class="grid-item">아이템 1</div>
  <div class="grid-item">아이템 2</div>
  <div class="grid-item">아이템 3</div>
</div>
<h2 id="반응형-그리드-예시" tabindex="-1"><a class="header-anchor" href="#반응형-그리드-예시" aria-hidden="true">#</a> 반응형 그리드 예시:</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>grid<span class="token operator">-</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> grid<span class="token punctuation">;</span>
  grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token operator">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto<span class="token operator">-</span>fill<span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span>200px<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 반응형 열 */</span>
  grid<span class="token operator">-</span>gap<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
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
<h1 id="_2-플렉스박스-레이아웃" tabindex="-1"><a class="header-anchor" href="#_2-플렉스박스-레이아웃" aria-hidden="true">#</a> 2. 플렉스박스 레이아웃:</h1>
<p>플렉스박스는 컨테이너 내 항목들을 배치, 정렬 및 간격 분배하는 더 효율적인 방법을 제공합니다.</p>
<h2 id="수평-가운데-정렬" tabindex="-1"><a class="header-anchor" href="#수평-가운데-정렬" aria-hidden="true">#</a> 수평 가운데 정렬:</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span> <span class="token comment">/* 항목을 수평으로 가운데 정렬합니다 */</span>
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
<h2 id="수직-가운데-정렬" tabindex="-1"><a class="header-anchor" href="#수직-가운데-정렬" aria-hidden="true">#</a> 수직 가운데 정렬:</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span> <span class="token comment">/* 항목을 수직으로 가운데 정렬합니다 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="동일한-높이의-열" tabindex="-1"><a class="header-anchor" href="#동일한-높이의-열" aria-hidden="true">#</a> 동일한 높이의 열:</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>column <span class="token punctuation">{</span>
  <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">/* 각 열이 동일한 공간을 차지합니다 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="_3-그리드-grid-와-플렉스박스-flexbox-를-결합하기" tabindex="-1"><a class="header-anchor" href="#_3-그리드-grid-와-플렉스박스-flexbox-를-결합하기" aria-hidden="true">#</a> 3. 그리드(Grid)와 플렉스박스(Flexbox)를 결합하기:</h1>
<p>복잡한 레이아웃을 만들기 위해 CSS 그리드(Grid)와 플렉스박스(Flexbox)를 결합할 수도 있어요.</p>
<h2 id="헤더-header-사이드바-sidebar-콘텐츠-content-푸터-footer-레이아웃" tabindex="-1"><a class="header-anchor" href="#헤더-header-사이드바-sidebar-콘텐츠-content-푸터-footer-레이아웃" aria-hidden="true">#</a> 헤더(Header), 사이드바(Sidebar), 콘텐츠(Content), 푸터(Footer) 레이아웃:</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> grid<span class="token punctuation">;</span>
  grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token operator">:</span> 200px 1fr<span class="token punctuation">;</span> <span class="token comment">/* 사이드바(Sidebar)와 콘텐츠(Content) */</span>
  grid<span class="token operator">-</span>template<span class="token operator">-</span>rows<span class="token operator">:</span> auto 1fr auto<span class="token punctuation">;</span> <span class="token comment">/* 헤더(Header), 콘텐츠(Content), 푸터(Footer) */</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>sidebar <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>footer <span class="token punctuation">{</span>
  grid<span class="token operator">-</span>column<span class="token operator">:</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">/* 모든 열에 걸쳐있어요 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>CSS Grid과 Flexbox는 강력한 레이아웃 기능을 제공하여 노력을 최소화하면서 반응형이고 복잡한 레이아웃을 만들 수 있습니다. 이 레이아웃 기술을 숙달하면 현대적이고 시각적으로 매력적인 웹 디자인을 효율적으로 구축할 수 있습니다.</p>
<p>이 예시들을 자유롭게 혼합하고 일치시키며 특정 레이아웃 요구에 맞게 조정해보세요. 연습을 통해 CSS Grid와 Flexbox를 사용하여 다양하고 반응형 레이아웃을 만드는 데 능숙해질 것입니다.</p>
<h1 id="_8-프로그레시브-웹-앱-pwas-네이티브와-유사한-경험-제공" tabindex="-1"><a class="header-anchor" href="#_8-프로그레시브-웹-앱-pwas-네이티브와-유사한-경험-제공" aria-hidden="true">#</a> 8- 프로그레시브 웹 앱 (PWAs): 네이티브와 유사한 경험 제공</h1>
<p>프로그레시브 웹 앱(PWAs)은 웹과 네이티브 모바일 애플리케이션의 장점을 결합하여 사용자에게 빠르고 안정적이며 매력적인 경험을 다양한 장치와 플랫폼에서 제공합니다. 아래는 PWAs를 구축하는 방법에 대한 코드 예시가 포함된 가이드입니다.</p>
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
<h1 id="_1-서비스-워커" tabindex="-1"><a class="header-anchor" href="#_1-서비스-워커" aria-hidden="true">#</a> 1. 서비스 워커:</h1>
<p>서비스 워커를 통해 PWA가 오프라인 상태에서 작동하고 푸시 알림 및 백그라운드 동기화와 같은 고급 기능을 제공할 수 있습니다.</p>
<h2 id="서비스-워커-등록" tabindex="-1"><a class="header-anchor" href="#서비스-워커-등록" aria-hidden="true">#</a> 서비스 워커 등록:</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 당신의 주 JavaScript 파일에서</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">'serviceWorker'</span> <span class="token keyword">in</span> navigator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'load'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    navigator<span class="token punctuation">.</span>serviceWorker<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">'/service-worker.js'</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">registration</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'서비스 워커가 등록되었습니다:'</span><span class="token punctuation">,</span> registration<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'서비스 워커 등록 실패:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="서비스-워커-만들기" tabindex="-1"><a class="header-anchor" href="#서비스-워커-만들기" aria-hidden="true">#</a> 서비스 워커 만들기:</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// service-worker.js</span>
self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'install'</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">waitUntil</span><span class="token punctuation">(</span>
    caches<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'app-cache'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">cache</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> cache<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string">'/'</span><span class="token punctuation">,</span>
        <span class="token string">'/index.html'</span><span class="token punctuation">,</span>
        <span class="token string">'/styles.css'</span><span class="token punctuation">,</span>
        <span class="token string">'/script.js'</span><span class="token punctuation">,</span>
        <span class="token string">'/images/icon.png'</span>
        <span class="token comment">// 필요에 따라 더 많은 파일을 캐시에 추가</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'fetch'</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span>
    caches<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> response <span class="token operator">||</span> <span class="token function">fetch</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-웹-앱-manifest" tabindex="-1"><a class="header-anchor" href="#_2-웹-앱-manifest" aria-hidden="true">#</a> 2. 웹 앱 Manifest:</h1>
<p>웹 앱 manifest는 PWA에 대한 메타데이터를 제공하는 JSON 파일로, 사용자의 홈 화면에 추가되고 독립적인 애플리케이션으로 시작될 수 있도록 합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// manifest.json</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"내 PWA"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"short_name"</span><span class="token operator">:</span> <span class="token string">"PWA"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"start_url"</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"display"</span><span class="token operator">:</span> <span class="token string">"standalone"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"background_color"</span><span class="token operator">:</span> <span class="token string">"#ffffff"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"theme_color"</span><span class="token operator">:</span> <span class="token string">"#000000"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"icons"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">"src"</span><span class="token operator">:</span> <span class="token string">"/images/icon.png"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"sizes"</span><span class="token operator">:</span> <span class="token string">"192x192"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"image/png"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-반응형-디자인" tabindex="-1"><a class="header-anchor" href="#_3-반응형-디자인" aria-hidden="true">#</a> 3. 반응형 디자인:</h1>
<p>PWA가 다양한 기기와 화면 크기에서 잘 보이도록 반응형으로 만들어주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> index<span class="token punctuation">.</span>html <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1"</span><span class="token operator">></span>
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
<h1 id="_4-홈-화면에-추가하기" tabindex="-1"><a class="header-anchor" href="#_4-홈-화면에-추가하기" aria-hidden="true">#</a> 4. 홈 화면에 추가하기:</h1>
<p>사용자들에게 PWA를 홈 화면에 추가하여 빠르게 접근할 수 있도록 권장하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> index<span class="token punctuation">.</span>html <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"manifest"</span> href<span class="token operator">=</span><span class="token string">"/manifest.json"</span><span class="token operator">></span>
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
<p>PWA는 응용 프로그램과 사용자의 안전 및 무결성을 보장하기 위해 안전한 원본이 필요합니다.</p>
<p>서비스 워커, 웹 앱 매니페스트, 반응형 디자인 및 기타 모베스트 프랙티스를 활용하여 PWA를 만들면 사용자에게 빠르고 안정적이며 매혹적인 경험을 제공할 수 있습니다. PWA가 계속 발전함에 따라 웹 개발자들은 다양한 기기와 플랫폼에서 접근 가능한 고품질 애플리케이션을 만들 수 있는 흥미로운 기회를 제공합니다.</p>
<h1 id="_9-최적화된-글꼴-적절한-균형-찾기" tabindex="-1"><a class="header-anchor" href="#_9-최적화된-글꼴-적절한-균형-찾기" aria-hidden="true">#</a> 9- 최적화된 글꼴: 적절한 균형 찾기</h1>
<p>웹 사이트의 글꼴을 최적화하는 것은 시각적 매력, 가독성 및 성능 사이의 적절한 균형을 찾는 것을 의미합니다. 효과적으로 글꼴을 최적화하는 방법에 대한 코드 예제가 포함된 안내서를 확인해보세요:</p>
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
<h1 id="_1-폰트-로딩-전략" tabindex="-1"><a class="header-anchor" href="#_1-폰트-로딩-전략" aria-hidden="true">#</a> 1. 폰트 로딩 전략:</h1>
<h2 id="표준-폰트-로딩" tabindex="-1"><a class="header-anchor" href="#표준-폰트-로딩" aria-hidden="true">#</a> 표준 폰트 로딩:</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"https://fonts.googleapis.com/css?family=Roboto"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="font-display를-이용한-비동기-폰트-로딩" tabindex="-1"><a class="header-anchor" href="#font-display를-이용한-비동기-폰트-로딩" aria-hidden="true">#</a> font-display를 이용한 비동기 폰트 로딩:</h2>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"https://fonts.googleapis.com/css?family=Roboto&amp;display=swap"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_2-글꼴-스택" tabindex="-1"><a class="header-anchor" href="#_2-글꼴-스택" aria-hidden="true">#</a> 2. 글꼴 스택:</h1>
<p>선호하는 글꼴을 불러오지 못할 경우에도 콘텐츠가 읽기 가능하게 유지되도록 대체 글꼴을 제공해주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>body <span class="token punctuation">{</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">'Roboto'</span><span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
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
<h1 id="_3-글꼴-두권과-스타일" tabindex="-1"><a class="header-anchor" href="#_3-글꼴-두권과-스타일" aria-hidden="true">#</a> 3. 글꼴 두권과 스타일:</h1>
<p>파일 크기를 최소화하고 성능을 향상시키기 위해 필요한 글꼴 두권과 스타일만 로드하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"https://fonts.googleapis.com/css?family=Roboto:400,700&amp;display=swap"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_4-글꼴-부분-집합화" tabindex="-1"><a class="header-anchor" href="#_4-글꼴-부분-집합화" aria-hidden="true">#</a> 4. 글꼴 부분 집합화:</h1>
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
<p>웹사이트에 필요한 문자만 포함하도록 폰트를 부분적으로 선택하여 파일 크기를 줄이고 로드 시간을 개선하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"https://fonts.googleapis.com/css?family=Roboto:400,700&amp;text=Hello&amp;display=swap"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-폰트-압축" tabindex="-1"><a class="header-anchor" href="#_5-폰트-압축" aria-hidden="true">#</a> 5. 폰트 압축:</h2>
<p>품질을 희생하지 않고 폰트 파일의 크기를 줄이기 위해 폰트 파일을 압축하세요.</p>
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
<h1 id="_6-폰트-로딩-최적화" tabindex="-1"><a class="header-anchor" href="#_6-폰트-로딩-최적화" aria-hidden="true">#</a> 6. 폰트 로딩 최적화:</h1>
<p>필수적인 렌더링 경로를 우선순위로 두기 위해 폰트 파일을 미리로딩하거나 비동기적으로 로딩하여 로딩을 최적화하세요.</p>
<h2 id="폰트-사전로딩" tabindex="-1"><a class="header-anchor" href="#폰트-사전로딩" aria-hidden="true">#</a> 폰트 사전로딩:</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"preload"</span> href<span class="token operator">=</span><span class="token string">"/path/to/font.woff2"</span> <span class="token keyword">as</span><span class="token operator">=</span><span class="token string">"font"</span> type<span class="token operator">=</span><span class="token string">"font/woff2"</span> crossorigin<span class="token operator">></span>
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
<h2 id="비동기-폰트-로딩" tabindex="-1"><a class="header-anchor" href="#비동기-폰트-로딩" aria-hidden="true">#</a> 비동기 폰트 로딩:</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
  <span class="token comment">// 폰트 비동기로 로드</span>
  <span class="token keyword">var</span> font <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FontFaceObserver</span><span class="token punctuation">(</span><span class="token string">'Roboto'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  font<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'fonts-loaded'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-성능-모니터링" tabindex="-1"><a class="header-anchor" href="#_7-성능-모니터링" aria-hidden="true">#</a> 7. 성능 모니터링:</h2>
<p>Google PageSpeed Insights나 WebPageTest 같은 도구를 사용하여 폰트 로딩 성능을 모니터링하고, 그에 맞게 최적화하세요.</p>
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
<p>당신의 웹사이트에서 글꼴을 최적화하는 것은 글꼴로딩 전략, 글꼴 스택, 글꼴 두께와 스타일, 글꼴 서브셋, 글꼴 압축, 그리고 글꼴 로딩 최적화 기술에 대해 신중한 고려를 필요로합니다. 시각적 매력, 가독성 및 성능 사이의 적절한 균형을 맞추면 웹사이트의 글꼴이 전체 사용자 경험을 향상시키면서 성능을 저해하지 않음을 보장할 수 있습니다.</p>
<h1 id="_10-메타-태그-매력적인-미리보기-작성" tabindex="-1"><a class="header-anchor" href="#_10-메타-태그-매력적인-미리보기-작성" aria-hidden="true">#</a> 10- 메타 태그: 매력적인 미리보기 작성</h1>
<p>당신의 웹사이트의 매력적인 미리보기를 만드는 것은 메타 태그를 효과적으로 사용하여 검색 엔진 결과와 소셜 미디어 플랫폼에서 사이트가 나타나는 방식을 제어하는 것을 의미합니다. 더 나은 미리보기를 위해 메타 태그를 최적화하는 방법에 대한 코드 예제로 된 지침서가 아래에 있습니다:</p>
<h1 id="_1-제목-태그" tabindex="-1"><a class="header-anchor" href="#_1-제목-태그" aria-hidden="true">#</a> 1. 제목 태그:</h1>
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
<p>페이지 태그는 웹 페이지의 제목을 정의하며, 검색 엔진 결과물에서 주요 헤드라인으로 표시됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>title<span class="token operator">></span>당신의 페이지 제목<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-메타-설명" tabindex="-1"><a class="header-anchor" href="#_2-메타-설명" aria-hidden="true">#</a> 2. 메타 설명:</h1>
<p>메타 설명은 웹 페이지의 내용에 대한 간단한 요약을 제공하며, 검색 결과에서 제목 태그 아래에 표시됩니다.</p>
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
  <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"description"</span> content<span class="token operator">=</span><span class="token string">"여기에 페이지 설명을 입력하세요. 간결하고 매력적으로 유지해주세요."</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-오픈-그래프-태그" tabindex="-1"><a class="header-anchor" href="#_3-오픈-그래프-태그" aria-hidden="true">#</a> 3. 오픈 그래프 태그:</h1>
<p>오픈 그래프 태그는 웹사이트가 Facebook이나 Twitter와 같은 소셜 미디어 플랫폼에서 공유될 때 표시되는 방식을 제어합니다.</p>
<h2 id="오픈-그래프-제목" tabindex="-1"><a class="header-anchor" href="#오픈-그래프-제목" aria-hidden="true">#</a> 오픈 그래프 제목:</h2>
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
  <span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"og:title"</span> content<span class="token operator">=</span><span class="token string">"Your Page Title"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="오픈-그래프-설명" tabindex="-1"><a class="header-anchor" href="#오픈-그래프-설명" aria-hidden="true">#</a> 오픈 그래프 설명:</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"og:description"</span> content<span class="token operator">=</span><span class="token string">"여기에 페이지 설명을 입력하세요."</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="오픈-그래프-이미지" tabindex="-1"><a class="header-anchor" href="#오픈-그래프-이미지" aria-hidden="true">#</a> 오픈 그래프 이미지:</h2>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code># <span class="token number">4.</span> Open Graph 이미지<span class="token operator">:</span>

<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token template-punctuation string">`</span></span>`js
<span class="token operator">&lt;</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"og:image"</span> content<span class="token operator">=</span><span class="token string">"https://example.com/image.jpg"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="open-graph-url" tabindex="-1"><a class="header-anchor" href="#open-graph-url" aria-hidden="true">#</a> Open Graph URL:</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>meta property<span class="token operator">=</span><span class="token string">"og:url"</span> content<span class="token operator">=</span><span class="token string">"https://example.com/page"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-twitter-cards" tabindex="-1"><a class="header-anchor" href="#_4-twitter-cards" aria-hidden="true">#</a> 4. Twitter Cards:</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
&lt;!-- ui-log 수평형 -->
&lt;ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true">&lt;/ins>
&lt;component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
&lt;/component>

Twitter 카드는 Open Graph 태그와 유사하지만 Twitter에 특화되어 있어서 웹사이트가 Twitter에서 공유될 때 외관을 사용자 정의할 수 있습니다.

## Twitter 카드 제목:

```js
&lt;head>
  &lt;meta name="twitter:title" content="Your Page Title">
&lt;/head>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="twitter-카드-설명" tabindex="-1"><a class="header-anchor" href="#twitter-카드-설명" aria-hidden="true">#</a> Twitter 카드 설명:</h2>
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
  <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"twitter:description"</span> content<span class="token operator">=</span><span class="token string">"여기에 페이지 설명을 입력하세요."</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="트위터-카드-이미지" tabindex="-1"><a class="header-anchor" href="#트위터-카드-이미지" aria-hidden="true">#</a> 트위터 카드 이미지:</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"twitter:image"</span> content<span class="token operator">=</span><span class="token string">"https://example.com/image.jpg"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="트위터-카드-url" tabindex="-1"><a class="header-anchor" href="#트위터-카드-url" aria-hidden="true">#</a> 트위터 카드 URL:</h2>
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
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 5. 파비콘:</span>

파비콘은 웹사이트를 나타내는 작은 아이콘이며 브라우저 탭과 즐겨찾기에 표시됩니다.

```js
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://example.com/favicon.ico<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image/x-icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
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
<p>당신이 웹 사이트의 메타 태그를 최적화하면 사용자의 주의를 끄는 매력적인 미리보기를 만들어 검색 엔진 결과와 소셜 미디어 플랫폼에서 사용자가 사이트로 클릭하도록 유도할 수 있어요. 제목과 설명을 간결하고 매력적으로 유지하고, 오픈 그래프 태그와 트위터 카드를 사용하여 다양한 플랫폼에 대한 미리보기를 사용자 정의할 수 있어요. 추가로, 웹 사이트의 브랜딩과 시각적 식별력을 강화하기 위해 파비콘을 포함하세요.</p>
<p>https://www.nilebits.com/blog/2024/04/html-hacks-10-tips-better-websites/</p>
</div></template>
