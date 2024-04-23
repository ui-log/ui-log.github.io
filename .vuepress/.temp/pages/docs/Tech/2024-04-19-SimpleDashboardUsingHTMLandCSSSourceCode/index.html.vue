<template><div><p>안녕하세요 학습자 여러분……. Codewithrandom 블로그에 오신 것을 환영합니다… 오늘 이 블로그에서는 HTML과 CSS 코드만을 사용하여 대시보드 디자인을 어떻게 만드는지 배우게 될 거에요. 이 대시보드 디자인 프로젝트에서 많은 것을 배울 거예요.</p>
<p>그리고 이 블로그를 읽은 후에는 HTML과 CSS를 사용해 자신만의 대시보드를 만들 수 있을 거라고 명백히 확신합니다.</p>
<p>대시보드란 무엇인가요?</p>
<p>대시보드는 시간 내에 시각적 데이터를 의미 있게 표시하고 쉽게 참조하고 빠르게 추론할 수 있도록 도와주는 차트를 제공하는 짧은 보고서입니다.</p>
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
<p>대시보드는 모든 데이터를 시각적으로 표시하는 것입니다. 여러 가지 방식으로 사용될 수 있지만, 주요 목적은 주요 성과 지표(KPI)와 같은 정보를 한 눈에 제공하는 것입니다.</p>
<p>대시보드는 일반적으로 페이지에서 정보를 받아 연결된 데이터베이스로부터 정보를 받습니다. 많은 경우 구성 가능하며, 어떤 데이터를 보고 싶은지 선택하고 숫자를 시각화하기 위해 차트나 그래프를 포함할지 여부를 선택할 수 있습니다.</p>
<h1 id="대시보드-html-코드" tabindex="-1"><a class="header-anchor" href="#대시보드-html-코드" aria-hidden="true">#</a> 대시보드 HTML 코드:-</h1>
<p>여기서 sidebar div 클래스가 white label인 섹션 id를 추가하려고 합니다. 그런 다음 대시보드를 하나씩 나열하려 합니다.</p>
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
<p>여기 우리가 사용 중인 기본적인 스타일링이 있어요. CSS를 사용하고 있고 아이콘은 Font Awesome를 사용하고 있어요. 그리고 그들의 cdn(콘텐츠 전송 네트워크)을 HTML 파일의 제목 태그에 삽입하고 있어요.</p>
<p>자세한 내용과 사용 방법은 font-awesome 웹사이트를 참조해볼 수 있어요 Link</p>
<p>사이드바 내비게이션을 위한 한 가지, 메인 내용을 위한 다른 한 가지 주요 섹션을 만들고 있어요. 그래서 우리는 의미 있는 태그인 section 태그를 사용하여 두 개의 섹션을 만들었어요.</p>
<p>의미 있는 요소 = 의미를 갖는 요소들이에요.</p>
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
<h1 id="시멘틱-요소란-무엇인가요" tabindex="-1"><a class="header-anchor" href="#시멘틱-요소란-무엇인가요" aria-hidden="true">#</a> 시멘틱 요소란 무엇인가요?</h1>
<p>시멘틱 요소는 브라우저와 개발자 모두에게 그 의미를 명확히 전달하는 요소입니다.</p>
<p>비-시멘틱 요소의 예: <code v-pre>div</code>와 <code v-pre>span</code> - 내용에 대해 아무 정보도 전달하지 않습니다.</p>
<p>시멘틱 요소의 예: <code v-pre>form</code>, <code v-pre>table</code>, <code v-pre>article</code> - 내용을 명확히 정의합니다.</p>
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
<p>HTML에서 의미론적 요소많은 웹사이트에는 네비게이션, 헤더 및 푸터를 나타내는 HTML 코드가 포함되어 있습니다.
HTML에서는 웹 페이지의 다른 부분을 정의하는 데 사용할 수 있는 의미론적 요소가 있습니다:</p>
<ul>
<li><code v-pre>article</code></li>
<li><code v-pre>aside</code></li>
<li><code v-pre>details</code></li>
<li><code v-pre>figure</code></li>
<li><code v-pre>footer</code></li>
<li><code v-pre>header</code></li>
<li><code v-pre>main</code></li>
<li><code v-pre>mark</code></li>
<li><code v-pre>nav</code></li>
<li><code v-pre>section</code></li>
<li><code v-pre>summary</code></li>
</ul>
<p>섹션 태그가 무엇인지 확실히 이해했으면 당신의 내용을 진행해보세요. 먼저 div 태그, span 태그, image 태그, 의미론적 태그, 클래스 및 아이디와 같은 HTML의 기본 개념을 익혀보세요.</p>
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
<p>위 코드에서는 Amazon AWS에 업로드된 일부 사진도 사용하고 있어. 걱정 마. 기본 정보를 위해 Amazon AWS 서비스에 대해 알 필요는 없어. AWS 서비스는 아마존에서 제공하는 클라우드 서비스야.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>section id<span class="token operator">=</span><span class="token string">"sidebar"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"white-label"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"sidebar-nav"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>ul<span class="token operator">></span>
<span class="token operator">&lt;</span>li <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"active"</span><span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span><span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-dashboard"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span> 대시보드<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span><span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-desktop"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span> 내 웹사이트<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span><span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-usd"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span> 전자상거래<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span><span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-pencil-square-o"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span> 내 블로그<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span><span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-sitemap"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span> <span class="token constant">SEO</span> 도구<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span><span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-line-chart"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span> 보고서<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span><span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-comments-o"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span> 소셜 마케팅<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span><span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-map-marker"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span> 트래픽 얻기<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span><span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-users"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span> 직원<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span><span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-calendar-o"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span> 예약<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span><span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-calendar"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span> 캘린더<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>먼저 <code v-pre>section</code> 태그를 사용하여 id가 &quot;sidebar&quot;인 대시보드 구조용 섹션을 만들 거야.</li>
<li>이제 섹션 태그 안에 대시보드의 사이드바에 대한 다른 리스트 아이템을 생성할 거야. 순서 없는 목록 태그를 사용하여 사이드바 메뉴 항목 목록을 만들 거야. 사이드바의 메뉴 리스트 아이템을 만들기 위해 아이콘 클래스와 일부 항목을 추가할 거야.</li>
<li>사이드바의 메뉴 항목은 <code v-pre>a</code> 태그 내에 위치해 있어서 대시보드 텍스트에 하이퍼링크를 추가할 거야.</li>
</ul>
<p>대시보드 디자인을 위한 더 많은 HTML 코드</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>section id<span class="token operator">=</span><span class="token string">"content"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"header"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"header-nav"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"menu-button"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span><span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-navicon"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span><span class="token operator">--</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"nav"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>ul<span class="token operator">></span>
                    <span class="token operator">&lt;</span>li <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"nav-settings"</span><span class="token operator">></span>
                        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"font-icon"</span><span class="token operator">></span><span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-tasks"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
                    <span class="token operator">&lt;</span>li <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"nav-mail"</span><span class="token operator">></span>
                        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"font-icon"</span><span class="token operator">></span>
                            <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-envelope-o"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
                        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
                    <span class="token operator">&lt;</span>li <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"nav-calendar"</span><span class="token operator">></span>
                        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"font-icon"</span><span class="token operator">></span>
                            <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-calendar"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
                        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
                    <span class="token operator">&lt;</span>li <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"nav-chat"</span><span class="token operator">></span>
                        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"font-icon"</span><span class="token operator">></span>
                            <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-comments-o"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
                        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
                    <span class="token operator">&lt;</span>li <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"nav-profile"</span><span class="token operator">></span>
                        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"nav-profile-image"</span><span class="token operator">></span>
                            <span class="token operator">&lt;</span>img
                                src<span class="token operator">=</span><span class="token string">"https://skynet.marketecture.com/user_avatars/258800/Hayley-Helsten.jpg"</span>
                                alt<span class="token operator">=</span><span class="token string">"profile-img"</span>
                                alt<span class="token operator">=</span><span class="token string">"profile image"</span>
                            <span class="token operator">/</span><span class="token operator">></span>
                            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"nav-profile-name"</span><span class="token operator">></span>
                                Jane Smith<span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-caret-down"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
                            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"content"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"content-header"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>h1<span class="token operator">></span>대시보드<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
            <span class="token operator">&lt;</span>p<span class="token operator">></span>Lorem ipsum dolor sit amet<span class="token punctuation">,</span> consectetur adipiscing elit<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"widget-box sample-widget"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"widget-header"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>h2<span class="token operator">></span>위젯 헤더<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
                <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-cog"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"widget-content"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>img
                    src<span class="token operator">=</span><span class="token string">"https://s3-us-west-2.amazonaws.com/s.cdpn.io/87118/sample-data-1.png"</span>
                <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"widget-box sample-widget"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"widget-header"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>h2<span class="token operator">></span>위젯 헤더<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
                <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-cog"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"widget-content"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>img
                    src<span class="token operator">=</span><span class="token string">"https://s3-us-west-2.amazonaws.com/s.cdpn.io/87118/sample-data-1.png"</span>
                <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"widget-box sample-widget"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"widget-header"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>h2<span class="token operator">></span>위젯 헤더<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
                <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-cog"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"widget-content"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>img
                    src<span class="token operator">=</span><span class="token string">"https://s3-us-west-2.amazonaws.com/s.cdpn.io/87118/sample-data-1.png"</span>
                <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"widget-box sample-widget"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"widget-header"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>h2<span class="token operator">></span>위젯 헤더<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
                <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-cog"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"widget-content"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>img
                    src<span class="token operator">=</span><span class="token string">"https://s3-us-west-2.amazonaws.com/s.cdpn.io/87118/sample-data-1.png"</span>
                <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>이제 콘텐츠 영역의 프레임워크를 구축하기 시작할 것입니다. section 태그를 사용하여 id가 &quot;content&quot;인 새 섹션을 만들 것입니다.</li>
<li>먼저 대시보드의 헤더를 만들기 위해 섹션 내부에 navbar 태그를 사용할 것입니다. 그다음 대시보드의 navbar를 디자인할 것입니다.</li>
<li>font-awesome 클래스를 활용하여 목록 안에 아이콘을 추가할 것입니다.</li>
<li>이제 대시보드 내용에 다양한 그래프를 추가하기 위해 div와 image 태그를 사용할 것입니다.</li>
</ul>
<p>HTML 코드 출력 :-</p>
<h1 id="대시보드-css-코드" tabindex="-1"><a class="header-anchor" href="#대시보드-css-코드" aria-hidden="true">#</a> 대시보드 CSS 코드:-```</h1>
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
<p>페이지 대시보드의 기본 레이아웃은 완료되었지만 여전히 지루하고 노골적입니다. 그래서 이제 어떻게 해야할까요?</p>
<p>만약 몇 가지 색상과 정렬을 추가한다면 어떨까요? 아래를 확인해 보세요:-</p>
<p>우리는 HTML 콘텐츠를 스타일링하기 위해 기본적인 CSS 개념을 사용할 것입니다. 클래스와 아이디 그리고 선택자에 대한 개념을 제대로 이해하고 있다면 CSS 코드로 나아가세요. 우리는 Border-Box 모델, Flex-box를 사용하여 스타일을 적용하고, 여백(padding), 외부 여백(margin), 플로트(float)와 같은 기본적인 개념을 사용할 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>여기에 <span class="token constant">CSS</span> 코드가 입력됩니다<span class="token punctuation">.</span>
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
<p>Step1: body 태그 선택기(body)를 사용하여 대시보드의 글꼴을 &quot;Open Sans&quot;로, 높이 속성을 본문 높이를 &quot;100%&quot;로, 배경 속성을 배경 색상을 &quot;연한 파랑&quot;으로 설정하여 대시보드에 기본 스타일을 추가할 수 있습니다.</p>
<p>이미지의 최대 너비는 (img) 태그 선택기를 사용하여 100%로 설정되며, 목록 스타일은 (ul) 태그 선택기를 사용하여 &quot;없음&quot;으로 설정됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>body <span class="token punctuation">{</span>
    font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">"Open Sans"</span><span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #<span class="token constant">FFFFFF</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
img <span class="token punctuation">{</span>
    max<span class="token operator">-</span>width<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
ul <span class="token punctuation">{</span>
    list<span class="token operator">-</span>style<span class="token operator">:</span> none<span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
a <span class="token punctuation">{</span>
    text<span class="token operator">-</span>decoration<span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Step2: 이제 (#header)를 사용하여 요소와 대시보드 헤더를 스타일링할 것입니다. 헤더의 왼쪽과 오른쪽을 왼쪽으로 정렬하고 너비를 100%로 설정할 것입니다. 자식 구성 요소와 메뉴 목록 항목에도 스타일이 적용됩니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>#header <span class="token punctuation">{</span>
    <span class="token literal-property property">float</span><span class="token operator">:</span> left<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #ffffff<span class="token punctuation">;</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>white<span class="token operator">-</span>label <span class="token punctuation">{</span>
    <span class="token literal-property property">float</span><span class="token operator">:</span> left<span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #33373B<span class="token punctuation">;</span>
    max<span class="token operator">-</span>width<span class="token operator">:</span> 210px<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
    min<span class="token operator">-</span>height<span class="token operator">:</span> 44px<span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #279BE4<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    max<span class="token operator">-</span>height<span class="token operator">:</span> 44px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>white<span class="token operator">-</span>label img <span class="token punctuation">{</span>
    max<span class="token operator">-</span>height<span class="token operator">:</span> 43px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>header<span class="token operator">-</span>nav <span class="token punctuation">{</span>
    min<span class="token operator">-</span>height<span class="token operator">:</span> 64px<span class="token punctuation">;</span>
    <span class="token operator">-</span>webkit<span class="token operator">-</span>box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
    <span class="token operator">-</span>moz<span class="token operator">-</span>box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
    box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #279BE4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>menu<span class="token operator">-</span>button <span class="token punctuation">{</span>
    <span class="token literal-property property">float</span><span class="token operator">:</span> left<span class="token punctuation">;</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 29px<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 12px 19px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>nav ul <span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 64px<span class="token punctuation">;</span>
    <span class="token literal-property property">float</span><span class="token operator">:</span> right<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>nav ul li <span class="token punctuation">{</span>
    <span class="token literal-property property">float</span><span class="token operator">:</span> left<span class="token punctuation">;</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 11px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>nav <span class="token operator">></span> ul <span class="token operator">></span> li<span class="token operator">:</span>first<span class="token operator">-</span>child <span class="token punctuation">{</span>
    border<span class="token operator">-</span>left<span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>nav ul li a <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 1px<span class="token punctuation">;</span>
    <span class="token literal-property property">float</span><span class="token operator">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>nav ul li i <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>nav ul li<span class="token operator">:</span>hover <span class="token punctuation">{</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #01A9F0<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>user<span class="token operator">-</span>profile <span class="token punctuation">{</span>
    <span class="token literal-property property">float</span><span class="token operator">:</span> right<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>user<span class="token operator">-</span>profile <span class="token operator">></span> div <span class="token punctuation">{</span>
    <span class="token literal-property property">float</span><span class="token operator">:</span> left<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 20px 8px<span class="token punctuation">;</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>user<span class="token operator">-</span>profile i <span class="token punctuation">{</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>2em<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #5F6F86<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>user<span class="token operator">-</span>profile i<span class="token operator">:</span>hover <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #397AC5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>font<span class="token operator">-</span>icon i<span class="token operator">:</span>after <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"3"</span><span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #<span class="token constant">E74C3C</span><span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 12px<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 3px 4px 4px 3px<span class="token punctuation">;</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> 12px<span class="token punctuation">;</span>
    <span class="token literal-property property">right</span><span class="token operator">:</span> 11px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>font<span class="token operator">-</span>icon <span class="token punctuation">{</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 8px 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>font<span class="token operator">-</span>icon i <span class="token punctuation">{</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 24px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>nav<span class="token operator">-</span>mail <span class="token punctuation">.</span>font<span class="token operator">-</span>icon i<span class="token operator">:</span>after <span class="token punctuation">{</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #2ECC71<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
div<span class="token punctuation">.</span>user<span class="token operator">-</span>image <span class="token punctuation">{</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 9px 5px<span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> 5px<span class="token punctuation">;</span>
    border<span class="token operator">-</span>left<span class="token operator">:</span> 1px solid #ccc<span class="token punctuation">;</span>
    border<span class="token operator">-</span>right<span class="token operator">:</span> 1px solid #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>nav<span class="token operator">-</span>profile <span class="token punctuation">{</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #0274BD<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>nav<span class="token operator">-</span>profile<span class="token operator">-</span>image img <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 39px<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 41px<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">float</span><span class="token operator">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>nav<span class="token operator">-</span>profile<span class="token operator">-</span>name <span class="token punctuation">{</span>
    <span class="token literal-property property">float</span><span class="token operator">:</span> right<span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> 11px 7px 8px 14px<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>nav<span class="token operator">-</span>profile<span class="token operator">-</span>name i <span class="token punctuation">{</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> 11px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>nav<span class="token operator">-</span>chat i<span class="token operator">:</span>after <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&lt;&lt;&lt;&lt;&lt;&lt;&lt;./img/SimpleDashboardUsingHTMLandCSSSourceCode_0.png</p>
<p>Step3: 사이드바에 스타일이 적용됩니다. overflow 속성을 사용하여 overflow를 &quot;hidden&quot;으로 설정합니다. 사이드바는 float 속성을 사용하여 왼쪽으로 떠 있으며 다음과 같은 설정이 있습니다: 너비 210px，높이 100%，기타. 우리의 사이드바 요소는 이제 스타일링을 받고 글꼴 색상이 회색으로 변경됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>#sidebar <span class="token punctuation">{</span>
    <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 210px<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">float</span><span class="token operator">:</span> left<span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #2A2D33<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
#sidebar<span class="token operator">-</span>nav <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">106</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">%</span> <span class="token operator">-</span> 95px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #2A2D33<span class="token punctuation">;</span>
    border<span class="token operator">-</span>right<span class="token operator">:</span> 1px solid #<span class="token constant">E0E0E0</span><span class="token punctuation">;</span>
    overflow<span class="token operator">-</span>y<span class="token operator">:</span> scroll<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
#sidebar<span class="token operator">-</span>nav h2 <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #60636B<span class="token punctuation">;</span>
    <span class="token literal-property property">float</span><span class="token operator">:</span> left<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>8em<span class="token punctuation">;</span>
    font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">"Open Sans"</span><span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
    font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">;</span>
    text<span class="token operator">-</span>transform<span class="token operator">:</span> uppercase<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 3px <span class="token number">0</span> 2px 20px<span class="token punctuation">;</span>
    border<span class="token operator">-</span>top<span class="token operator">:</span> 1px solid #4D4C4C<span class="token punctuation">;</span>
    box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> 10px <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
#sidebar<span class="token operator">-</span>nav ul <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
#sidebar<span class="token operator">-</span>nav ul li <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
#sidebar<span class="token operator">-</span>nav ul li a <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token constant">C2C2C2</span><span class="token punctuation">;</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>95em<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 15px 20px<span class="token punctuation">;</span>
    <span class="token literal-property property">float</span><span class="token operator">:</span> left<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">;</span>
    <span class="token operator">-</span>webkit<span class="token operator">-</span>box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
    <span class="token operator">-</span>moz<span class="token operator">-</span>box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
    box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
#sidebar<span class="token operator">-</span>nav ul li<span class="token operator">:</span>hover a<span class="token punctuation">,</span>
#sidebar<span class="token operator">-</span>nav ul li<span class="token operator">:</span>hover a i<span class="token punctuation">,</span>
#sidebar<span class="token operator">-</span>nav li<span class="token punctuation">.</span>active a<span class="token punctuation">,</span>
#sidebar<span class="token operator">-</span>nav li<span class="token punctuation">.</span>active a i <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">333</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
#sidebar<span class="token operator">-</span>nav ul li<span class="token operator">:</span>hover a <span class="token punctuation">{</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">333</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
#sidebar<span class="token operator">-</span>nav ul li<span class="token punctuation">.</span>active a <span class="token punctuation">{</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">333</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
#sidebar<span class="token operator">-</span>nav ul li<span class="token punctuation">.</span>active a i <span class="token punctuation">{</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
#sidebar<span class="token operator">-</span>nav i <span class="token punctuation">{</span>
    padding<span class="token operator">-</span>right<span class="token operator">:</span> 8px<span class="token punctuation">;</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>3em<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #60636B<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 25px<span class="token punctuation">;</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>단계4: 이제 남은 일은 콘텐츠를 스타일링하고 왼쪽으로 플로트 속성을 설정하는 것입니다. 저희 콘텐츠는 높이를 100%로 설정했습니다. 웹 사이트의 다양한 요소에 클래스 셀렉터를 사용하여 스타일링을 적용할 것입니다. 선택한 위젯 헤더의 배경색은 &quot;파란색&quot;입니다. 스타일링에 익숙해지면 코드를 읽는 것이 좋습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>content <span class="token punctuation">{</span>
    <span class="token literal-property property">float</span><span class="token operator">:</span> left<span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #<span class="token constant">E9EEF4</span><span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">%</span> <span class="token operator">-</span> 64px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">-</span>webkit<span class="token operator">-</span>box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
    <span class="token operator">-</span>moz<span class="token operator">-</span>box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
    box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>content<span class="token operator">-</span>header <span class="token punctuation">{</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
    <span class="token literal-property property">float</span><span class="token operator">:</span> left<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    margin<span class="token operator">-</span>bottom<span class="token operator">:</span> 15px<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 15px<span class="token punctuation">;</span>
    <span class="token operator">-</span>webkit<span class="token operator">-</span>box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
    <span class="token operator">-</span>moz<span class="token operator">-</span>box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
    box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
    border<span class="token operator">-</span>bottom<span class="token operator">:</span> 1px solid #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>content<span class="token operator">-</span>header h1 <span class="token punctuation">{</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    font<span class="token operator">-</span>weight<span class="token operator">:</span> normal<span class="token punctuation">;</span>
    padding<span class="token operator">-</span>bottom<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>content<span class="token operator">-</span>header p <span class="token punctuation">{</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    padding<span class="token operator">-</span>left<span class="token operator">:</span> 2px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>widget<span class="token operator">-</span>box <span class="token punctuation">{</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid #<span class="token constant">E0E0E0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">float</span><span class="token operator">:</span> left<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> 15px 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>widget<span class="token operator">-</span>header <span class="token punctuation">{</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #279BE4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>widget<span class="token operator">-</span>header h2 <span class="token punctuation">{</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 15px<span class="token punctuation">;</span>
    font<span class="token operator">-</span>weight<span class="token operator">:</span> normal<span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 11px 15px<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token constant">F9F9F9</span><span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token operator">-</span>block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>sample<span class="token operator">-</span>widget <span class="token punctuation">{</span>
    max<span class="token operator">-</span>width<span class="token operator">:</span> <span class="token number">47</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>widget<span class="token operator">-</span>box <span class="token punctuation">.</span>fa<span class="token operator">-</span>cog <span class="token punctuation">{</span>
    <span class="token literal-property property">float</span><span class="token operator">:</span> right<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> 11px 11px <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">;</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="html-및-css를-사용한-대시보드-최종-출력" tabindex="-1"><a class="header-anchor" href="#html-및-css를-사용한-대시보드-최종-출력" aria-hidden="true">#</a> Html 및 Css를 사용한 대시보드 최종 출력:-</h1>
<img src="@source/docs/Tech/2024-04-19-SimpleDashboardUsingHTMLandCSSSourceCode/img/SimpleDashboardUsingHTMLandCSSSourceCode_1.png" />
```
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
<p>간단한 대시보드 디자인 코드를 HTML 및 CSS로 제공했어요.</p>
<p>이 튜토리얼이 마음에 들었으면 좋겠고, HTML 및 CSS를 사용하여 대시보드 디자인을 할 수 있어서 프론트엔드 개발 효율을 향상시킬 수 있기를 바라요.</p>
<p>문제가 발생하면 언제든지 연락해주시거나 문제에 대해 댓글을 남겨주세요.</p>
<p>또한, 감사의 댓글을 아래에 남겨주셔도 좋아요. 이렇게 하면 더 많은 유용한 콘텐츠를 제작할 동기부여가 될 거예요.</p>
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
<p>감사합니다.....</p>
<h2 id="이-대시보드를-위해-어떤-코드-편집기를-사용하시나요" tabindex="-1"><a class="header-anchor" href="#이-대시보드를-위해-어떤-코드-편집기를-사용하시나요" aria-hidden="true">#</a> 이 대시보드를 위해 어떤 코드 편집기를 사용하시나요?</h2>
<p>이 대시보드를 만들 때는 VS Code Studio를 사용하는 것을 추천합니다. 사용하기 쉽고 간편합니다.</p>
<h2 id="이-프로젝트는-반응형인가요" tabindex="-1"><a class="header-anchor" href="#이-프로젝트는-반응형인가요" aria-hidden="true">#</a> 이 프로젝트는 반응형인가요?</h2>
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
<p>네, 이 대시보드 디자인 프로젝트는 반응형으로 제작되었어요.</p>
<p><strong>이 프로젝트를 만들기 위해 외부 링크를 사용하나요?</strong></p>
<p>네, 대시보드 디자인에서 아이콘을 보여주기 위해 폰트 어썸 아이콘 CDN 링크를 사용했어요.</p>
</div></template>
