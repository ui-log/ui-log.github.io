<template><div><img src="@source/docs/Tech/2024-04-19-LoginPagewithPasswordEyeIconHTMLCSSJavascript/img/LoginPagewithPasswordEyeIconHTMLCSSJavascript_0.png" />
<p>요즘 디지털 시대에는 대부분의 웹 사이트와 애플리케이션이 서비스에 액세스하기 전에 사용자가 로그인해야 합니다. 로그인 페이지는 사용자 인증이 필요한 모든 웹 사이트나 애플리케이션의 기본 구성 요소입니다. 사용자는 일반적으로 계정에 액세스하기 위해 이메일 주소, 사용자 이름 및 비밀번호 조합을 입력합니다.</p>
<p>그러나 비밀번호 입력은 불편하고 오타가 발생하기 쉽습니다. 이 프로세스를 간소화하기 위해 개발자들은 비밀번호 가시성을 토글하는 눈 아이콘을 도입했습니다. 이 기사에서는 HTML, CSS 및 JavaScript를 사용하여 비밀번호 눈 아이콘이 있는 로그인 페이지를 구현하는 방법에 대해 논의할 것입니다.</p>
<h2 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML:</h2>
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
<p>HTML 또는 Hypertext Markup Language은 어떤 웹 페이지의 기본 구조입니다. 웹 페이지의 구조와 내용을 만드는 데 사용됩니다. 암호 눈 아이콘이 있는 로그인 페이지를 만들려면 HTML 폼을 만들어야 합니다. 암호 입력 필드와 아이콘이 있는 HTML 폼을 만들어야합니다. 암호 입력 필드에는 JavaScript 코드에서 참조할 수 있는 ID가 있어야 합니다.</p>
<h2 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS:</h2>
<p>CSS 또는 Cascading Style Sheets는 HTML 페이지를 스타일링하고 레이아웃을 설정합니다. 암호 눈 아이콘을 추가하려면 아이콘을 스타일링하고 암호 입력 필드에 추가하는 CSS 클래스를 만들어야 합니다. 사용자가 클릭할 때 아이콘의 모양을 변경하는 클래스를 만들어야 합니다. 이를 통해 사용자가 클릭할 때 암호를 표시하거나 숨길 수 있습니다.</p>
<h2 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript:</h2>
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
<p>자바스크립트는 웹 페이지를 인터랙티브하게 만드는 프로그래밍 언어입니다. 로그인 페이지에서는 사용자가 눈 아이콘을 클릭했을 때 비밀번호 표시 여부를 전환하기 위해 JavaScript를 사용할 것입니다. 또한 아이콘에 클릭 이벤트를 감지하는 이벤트 리스너를 추가할 것입니다.</p>
<h2 id="구현-방법" tabindex="-1"><a class="header-anchor" href="#구현-방법" aria-hidden="true">#</a> 구현 방법:</h2>
<ul>
<li>비밀번호 입력 필드와 눈 아이콘이 있는 HTML 폼을 생성합니다.</li>
<li>CSS를 사용하여 비밀번호 입력 필드와 눈 아이콘을 스타일링합니다.</li>
<li>사용자가 눈 아이콘을 클릭했을 때 비밀번호 표시 여부를 전환하는 JavaScript를 사용합니다.</li>
<li>클릭 이벤트를 감지하는 이벤트 리스너를 아이콘에 추가합니다.</li>
</ul>
<h2 id="html-코드" tabindex="-1"><a class="header-anchor" href="#html-코드" aria-hidden="true">#</a> HTML 코드:</h2>
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
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">"X-UA-Compatible"</span> content<span class="token operator">=</span><span class="token string">"ie=edge"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>Login Page<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
    <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"style.css"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"</span> integrity<span class="token operator">=</span><span class="token string">"sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="</span> crossorigin<span class="token operator">=</span><span class="token string">"anonymous"</span> referrerpolicy<span class="token operator">=</span><span class="token string">"no-referrer"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"login-box"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>Login<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token string">""</span> method<span class="token operator">=</span><span class="token string">"post"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"user-box"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">""</span> required<span class="token operator">=</span><span class="token string">""</span> <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>label<span class="token operator">></span>사용자 이름<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"user-box"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"password"</span> name<span class="token operator">=</span><span class="token string">""</span> id<span class="token operator">=</span><span class="token string">"password"</span> required<span class="token operator">=</span><span class="token string">""</span> <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>label<span class="token operator">></span>비밀번호<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
            <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"password-toggle-icon"</span><span class="token operator">></span><span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fas fa-eye"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
            <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
            <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
            <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
            제출
          <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"script.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-코드" tabindex="-1"><a class="header-anchor" href="#css-코드" aria-hidden="true">#</a> Css 코드:</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"https://fonts.googleapis.com/css?family=Poppins:400,500&amp;display=swap"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>

<span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"Poppins"</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f1f1f1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.login-box</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 10px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.login-box h2</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 0 15px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.user-box</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.user-box input</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px 0<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 2px solid #333<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.user-box label</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px 0<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.user-box input:focus ~ label,
.user-box input:valid ~ label</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-20px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px 20px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
  <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">a:hover</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">a span</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">a span:nth-child(1)</span> <span class="token punctuation">{</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> -100%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> animate1 1s linear infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> animate1</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">left</span><span class="token punctuation">:</span> -100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">50%,
  100%</span> <span class="token punctuation">{</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">a span:nth-child(2)</span> <span class="token punctuation">{</span>
  <span class="token property">top</span><span class="token punctuation">:</span> -100%<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> animate2 1s linear infinite<span class="token punctuation">;</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> 0.25s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> animate2</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">top</span><span class="token punctuation">:</span> -100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">50%,
  100%</span> <span class="token punctuation">{</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">a span:nth-child(3)</span> <span class="token punctuation">{</span>
  bottom…
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javascript-코드" tabindex="-1"><a class="header-anchor" href="#javascript-코드" aria-hidden="true">#</a> Javascript 코드:</h2>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> passwordField <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> togglePassword <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".password-toggle-icon i"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

togglePassword<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>passwordField<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">"password"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    passwordField<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">"text"</span><span class="token punctuation">;</span>
    togglePassword<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">"fa-eye"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    togglePassword<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"fa-eye-slash"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    passwordField<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">"password"</span><span class="token punctuation">;</span>
    togglePassword<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">"fa-eye-slash"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    togglePassword<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"fa-eye"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>요약하면, 비밀번호 눈 모양 아이콘이 있는 로그인 페이지는 사용자가 비밀번호 가시성을 쉽게 전환할 수 있어 사용자 경험을 향상시킬 수 있습니다. 이 글에서 설명된 구현 단계를 따라 HTML, CSS 및 JavaScript를 사용하여 원홀 소스 코드를 깃허브 저장소에서 다운로드할 수 있습니다.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div></div></template>
