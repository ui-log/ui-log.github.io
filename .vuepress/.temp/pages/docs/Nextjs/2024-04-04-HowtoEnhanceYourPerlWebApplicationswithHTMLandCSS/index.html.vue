<template><div><img src="@source/docs/Nextjs/2024-04-04-HowtoEnhanceYourPerlWebApplicationswithHTMLandCSS/img/HowtoEnhanceYourPerlWebApplicationswithHTMLandCSS_0.png" />
<h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h1>
<p>Perl은 오랫동안 웹 개발을 위한 선호되는 스크립팅 언어로, 강력한 텍스트 처리 기능과 다양한 작업을 수행하기 쉽게 만드는 모듈들의 방대한 컬렉션을 제공합니다. Perl은 웹 애플리케이션의 백엔드 로직을 처리하는 한편, HTML과 CSS는 웹 페이지의 구조와 스타일을 제공하여 프론트엔드를 디자인하는 데 필수적입니다. 본 문서는 Perl 웹 애플리케이션에 HTML과 CSS를 통합하여 동적이고 시각적으로 매력적인 웹 콘텐츠를 만드는 방법을 안내합니다.</p>
<h1 id="perl로-무대를-준비하기" tabindex="-1"><a class="header-anchor" href="#perl로-무대를-준비하기" aria-hidden="true">#</a> Perl로 무대를 준비하기</h1>
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
<p>퍼플의 CGI (공통 게이트웨이 인터페이스) 모듈은 웹 콘텐츠를 동적으로 생성하는 인기 있는 방법입니다. CGI 스크립트는 웹 양식에서 사용자 입력을 처리하고 데이터베이스와 상호 작용하여 서버 측 데이터에 기반한 HTML 콘텐츠를 동적으로 생성할 수 있습니다. 이것은 시작할 수 있는 간단한 Perl CGI 스크립트입니다:</p>
<div class="language-perl ext-perl line-numbers-mode"><pre v-pre class="language-perl"><code><span class="token keyword">use</span> CGI<span class="token punctuation">;</span>
<span class="token keyword">my</span> <span class="token variable">$query</span> <span class="token operator">=</span> CGI<span class="token operator">-></span>new<span class="token punctuation">;</span>

<span class="token keyword">print</span> <span class="token variable">$query</span><span class="token operator">-></span>header<span class="token punctuation">(</span><span class="token string">'text/html'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">print</span> <span class="token variable">$query</span><span class="token operator">-></span>start_html<span class="token punctuation">(</span><span class="token string">'My Web Page'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">print</span> <span class="token variable">$query</span><span class="token operator">-></span>h1<span class="token punctuation">(</span><span class="token string">'Hello, world!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">print</span> <span class="token variable">$query</span><span class="token operator">-></span>end_html<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 스크립트는 헤더가 있는 기본 HTML 페이지를 생성합니다. CGI 모듈의 메서드인 header, start_html, h1 및 end_html은 해당 HTML 태그를 생성하는 데 도움이 됩니다.</p>
<h1 id="html-통합" tabindex="-1"><a class="header-anchor" href="#html-통합" aria-hidden="true">#</a> HTML 통합</h1>
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
<p>펄은 HTML 콘텐츠를 생성할 수 있지만, 펄 스크립트 내에서 대량의 HTML 코드를 유지하는 것은 번거로울 수 있습니다. 더 나은 방법은 HTML 템플릿을 사용하는 것입니다. 템플릿 툴킷은 비즈니스 로직과 프레젠테이션을 분리하여 응용 프로그램을 관리하고 확장하기 쉽게 만드는 강력한 펄 템플릿 시스템입니다.</p>
<p>템플릿 툴킷을 사용하려면 먼저 CPAN에서 모듈을 설치하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cpan Template
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>그런 다음, HTML 템플릿을 생성하세요 (여기서는 page.html이라고 해봅시다):</p>
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
    <span class="token operator">&lt;</span>title<span class="token operator">></span><span class="token punctuation">[</span><span class="token operator">%</span> title <span class="token operator">%</span><span class="token punctuation">]</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token punctuation">[</span><span class="token operator">%</span> heading <span class="token operator">%</span><span class="token punctuation">]</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">[</span><span class="token operator">%</span> content <span class="token operator">%</span><span class="token punctuation">]</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 Perl 스크립트에서는 Template 모듈을 사용하여 이 템플릿을 처리합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>use Template<span class="token punctuation">;</span>

my $vars <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token parameter">title</span> <span class="token operator">=></span> <span class="token string">'나의 웹 페이지'</span><span class="token punctuation">,</span>
    <span class="token parameter">heading</span> <span class="token operator">=></span> <span class="token string">'안녕, 세상아!'</span><span class="token punctuation">,</span>
    <span class="token parameter">content</span> <span class="token operator">=></span> <span class="token string">'이것은 Perl로 생성된 웹 페이지입니다.'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
my $template <span class="token operator">=</span> Template<span class="token operator">-</span><span class="token operator">></span><span class="token keyword">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
$template<span class="token operator">-</span><span class="token operator">></span><span class="token function">process</span><span class="token punctuation">(</span><span class="token string">'page.html'</span><span class="token punctuation">,</span> $vars<span class="token punctuation">)</span> <span class="token operator">||</span> die $template<span class="token operator">-</span><span class="token operator">></span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="css로-스타일-추가하기" tabindex="-1"><a class="header-anchor" href="#css로-스타일-추가하기" aria-hidden="true">#</a> CSS로 스타일 추가하기</h1>
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
<p>CSS는 HTML 콘텐츠의 시각적 표현을 향상시킵니다. CSS는 HTML 템플릿에 직접 포함하거나 외부 CSS 파일에 링크할 수 있습니다. 페이지.html 템플릿에 내부 CSS를 추가하는 방법은 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span><span class="token punctuation">[</span><span class="token operator">%</span> title <span class="token operator">%</span><span class="token punctuation">]</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
    <span class="token operator">&lt;</span>style<span class="token operator">></span>
        body <span class="token punctuation">{</span>
            font<span class="token operator">-</span>family<span class="token operator">:</span> Arial<span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
            <span class="token literal-property property">margin</span><span class="token operator">:</span> 40px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        h1 <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">333366</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        p <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">666666</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>외부 CSS의 경우, .css 파일을 만들고 HTML 템플릿에서 링크합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span><span class="token punctuation">[</span><span class="token operator">%</span> title <span class="token operator">%</span><span class="token punctuation">]</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
    <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"style.css"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
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
<p>그리고 style.css 파일에는 다음과 같은 내용이 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>body <span class="token punctuation">{</span>
    font<span class="token operator">-</span>family<span class="token operator">:</span> Arial<span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> 40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

h1 <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">333366</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

p <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">666666</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
