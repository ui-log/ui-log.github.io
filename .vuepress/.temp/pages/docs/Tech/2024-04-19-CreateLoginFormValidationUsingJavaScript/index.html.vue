<template><div><p>안녕, 코더! codewithrandom 블로그에 오신 것을 환영합니다. 이 글에서는 JavaScript를 사용하여 로그인 폼 유효성 검사를 하는 방법을 보여드리겠습니다. 이 블로그를 통해 HTML, CSS, 그리고 JavaScript를 사용하여 간단한 로그인 폼과 유효성 검사를 개발하는 방법에 대한 아이디어를 얻을 수 있을 거예요.</p>
<p><img src="@source/docs/Tech/2024-04-19-CreateLoginFormValidationUsingJavaScript/img/CreateLoginFormValidationUsingJavaScript_0.png" alt="JavaScript를 사용한 로그인 폼 유효성 검사"></p>
<p>로그인 폼 유효성 검사를 이해하고 나서 디자인을 시작해보세요.</p>
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
<h1 id="자바스크립트를-사용하여-로그인-폼-유효성-검사하는-방법" tabindex="-1"><a class="header-anchor" href="#자바스크립트를-사용하여-로그인-폼-유효성-검사하는-방법" aria-hidden="true">#</a> 자바스크립트를 사용하여 로그인 폼 유효성 검사하는 방법</h1>
<p>HTML 폼의 유효성 검사는 사용자의 이메일 주소, 사용자 이름 및 비밀번호가 올바른지 확인하는 과정을 포함합니다. 사용자가 예약된 페이지에 액세스하기 전에 유효한 사용자 이름과 비밀번호를 입력해야 합니다.</p>
<p>사용자는 로그인 폼을 사용하여 자신을 식별하고 인증함으로써 특정 시스템에 액세스할 수 있습니다. 이 로그인 폼을 만드는 과정을 단계별로 살펴보겠습니다.</p>
<h1 id="단계1-로그인-폼-구조" tabindex="-1"><a class="header-anchor" href="#단계1-로그인-폼-구조" aria-hidden="true">#</a> 단계1: 로그인 폼 구조</h1>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"style.css"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>로그인 양식<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"login-page"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"form"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>form <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"login-form"</span> action<span class="token operator">=</span><span class="token string">"https://www.instagram.com/codewith_random/"</span> target<span class="token operator">=</span><span class="token string">"_blank"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>h2<span class="token operator">></span>계정에 로그인<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
                <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> required placeholder<span class="token operator">=</span><span class="token string">"사용자 이름"</span> id<span class="token operator">=</span><span class="token string">"user"</span> autocomplete<span class="token operator">=</span><span class="token string">"off"</span> <span class="token operator">/</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>input oninput<span class="token operator">=</span><span class="token string">"return formvalid()"</span> type<span class="token operator">=</span><span class="token string">"password"</span> required placeholder<span class="token operator">=</span><span class="token string">"비밀번호"</span> id<span class="token operator">=</span><span class="token string">"pass"</span>
                    autocomplete<span class="token operator">=</span><span class="token string">"off"</span> <span class="token operator">/</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png"</span>
                    onclick<span class="token operator">=</span><span class="token string">"show()"</span> id<span class="token operator">=</span><span class="token string">"showimg"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>span id<span class="token operator">=</span><span class="token string">"vaild-pass"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
                <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>로그인<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
                <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"message"</span><span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>비밀번호를 잊으셨나요<span class="token operator">?</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"index.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>좋은 코드 관리를 위해 HTML, CSS 및 Javascript용 세 개의 별도 파일을 코드 편집기에 생성할 거에요. 저희 로그인 양식은 HTML, CSS 및 Javascript로 구성될 거에요. 이제 웹 사이트에 CSS와 JavaScript 기능을 추가해보죠. JavaScript 및 CSS 링크를 HTML에 포함해야 해요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"style.css"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"index.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
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
<p>이제 양식의 구조를 추가할 차례입니다. 우리는 클래스가 있는 div를 생성해야 합니다(login-page), 이것이 우리의 로그인을 위한 주요 컨테이너가 될 것입니다. 이제 양식을 만들기 위해 <code v-pre>form</code> 태그를 사용해야 합니다. 이제 로그인 양식에 대한 제목을 추가할 것인데, 이때 <code v-pre>h2</code> 태그를 사용할 겁니다. 로그인 양식은 주로 세 개의 <code v-pre>input</code> 요소로 이루어져 있습니다: 사용자 이름을 위한 텍스트 필드, 비밀번호를 위한 비밀번호 필드, 그리고 로그인 버튼을 생성하는 'submit' 타입의 버튼입니다.</p>
<p>비밀번호에 숨기기/보이기 기능을 추가하려면 눈 이미지를 사용할 겁니다. 모든 사람이 비밀번호를 기억하는 것의 가치를 이해하지만 다른 사람이 로그인 비밀번호를 잊어버린다면 어떻게 될까요? 그래서 <code v-pre>a</code> 태그를 사용하여 비밀번호를 잊을 때의 링크를 추가할 겁니다.</p>
<p>Output:</p>
<img src="@source/docs/Tech/2024-04-19-CreateLoginFormValidationUsingJavaScript/img/CreateLoginFormValidationUsingJavaScript_1.png" />
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
<h1 id="단계2-로그인-폼-스타일링하기" tabindex="-1"><a class="header-anchor" href="#단계2-로그인-폼-스타일링하기" aria-hidden="true">#</a> 단계2: 로그인 폼 스타일링하기</h1>
<p>우리 웹사이트는 CSS를 활용하여 더 다채롭게 만들 수 있어요. 스타일 시트는 세 가지 다른 방법으로 삽입할 수 있어요. CSS 속성과 스타일 속성을 적절한 요소에 포함시켜 인라인 CSS를 사용할 수도 있어요. 그렇지 않으면, 스타일 요소와 헤드 섹션에 사용되는 내부 CSS를 활용할 수 있어요. 또 다른 옵션은 .css 확장자가 붙은 외부 CSS 파일을 만들고 이를 HTML 파일의 헤드 섹션에 링크하는 것이에요. 웹 페이지를 만들 때 외부 CSS 파일을 사용하는 것이 좋은 실천 방법이에요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token keyword">import</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token string">"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,500;0,600;0,700;1,100;1,200;1,300&amp;display=swap"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">*</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">"Poppins"</span><span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
body <span class="token punctuation">{</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> #6a62d2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>login<span class="token operator">-</span>page <span class="token punctuation">{</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>form <span class="token punctuation">{</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
  <span class="token literal-property property">filter</span><span class="token operator">:</span> drop<span class="token operator">-</span><span class="token function">shadow</span><span class="token punctuation">(</span><span class="token number">0</span> <span class="token number">0</span> 2px #<span class="token number">000000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 360px<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 420px<span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #ffffff<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>form img <span class="token punctuation">{</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> 230px<span class="token punctuation">;</span>
  <span class="token literal-property property">right</span><span class="token operator">:</span> 60px<span class="token punctuation">;</span>
  <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>form input <span class="token punctuation">{</span>
  <span class="token literal-property property">outline</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> #f2f2f2<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 4px<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> 15px <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 15px<span class="token punctuation">;</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 14px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>form input<span class="token operator">:</span>focus <span class="token punctuation">{</span>
  box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> 5px <span class="token number">0</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">106</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
span <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> red<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> 10px <span class="token number">0</span><span class="token punctuation">;</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 14px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>form button <span class="token punctuation">{</span>
  <span class="token literal-property property">outline</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> #6a62d2<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  margin<span class="token operator">-</span>top<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 3px<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 15px<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #ffffff<span class="token punctuation">;</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 15px<span class="token punctuation">;</span>
  <span class="token operator">-</span>webkit<span class="token operator">-</span>transition<span class="token operator">:</span> all <span class="token number">0.3</span> ease<span class="token punctuation">;</span>
  <span class="token literal-property property">transition</span><span class="token operator">:</span> all <span class="token number">0</span><span class="token punctuation">.</span>4s ease<span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">-</span>out<span class="token punctuation">;</span>
  <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>form button<span class="token operator">:</span>hover<span class="token punctuation">,</span>
<span class="token punctuation">.</span>form button<span class="token operator">:</span>active<span class="token punctuation">,</span>
<span class="token punctuation">.</span>form button<span class="token operator">:</span>focus <span class="token punctuation">{</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> black<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>message <span class="token punctuation">{</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> 15px <span class="token number">0</span><span class="token punctuation">;</span>
  text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>form <span class="token punctuation">.</span>message a <span class="token punctuation">{</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 14px<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #6a62d2<span class="token punctuation">;</span>
  text<span class="token operator">-</span>decoration<span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>웹페이지에 기본 스타일링을 추가해봅시다:</p>
<p>먼저, CSS에 Poppins 글꼴을 추가하기 위해 import 링크를 사용할 거에요. 저희 로그인 폼에서 이 글꼴을 사용하죠. 일반 선택자를 사용하여 패딩과 마진을 &quot;0&quot;으로 설정했고, 상자 크기를 &quot;border-box&quot;로 변경했어요. 폰트 패밀리 속성을 사용하여 전체 웹페이지에 &quot;Poppins&quot; 글꼴을 설정할 거에요.</p>
<p>웹페이지의 본문에 배경을 추가할 수 있습니다. 웹페이지의 배경 색상은 직접 명칭을 사용하거나, 16진 코드 등을 사용하여 다양하게 설정할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token keyword">import</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token string">"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,500;0,600;0,700;1,100;1,200;1,300&amp;display=swap"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">*</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">"Poppins"</span><span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
body <span class="token punctuation">{</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> #6a62d2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<p><img src="@source/docs/Tech/2024-04-19-CreateLoginFormValidationUsingJavaScript/img/CreateLoginFormValidationUsingJavaScript_2.png" alt="이미지"></p>
<p>로그인 페이지 컨테이너 스타일링:</p>
<p>우리는 클래스 선택자 (.login-page)를 추가하여 로그인 페이지를 스타일링할 것입니다. 너비와 높이는 각각 100% 및 100vh로 설정됩니다. align-item 속성을 사용하여 모든 객체를 가운데 정렬합니다. display 속성을 flex로 설정하여 모든 항목을 쉽게 배치할 수 있습니다.</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.login-page</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<img src="@source/docs/Tech/2024-04-19-CreateLoginFormValidationUsingJavaScript/img/CreateLoginFormValidationUsingJavaScript_3.png" />
<p>로그인 폼 스타일링:</p>
<p>폼 컨테이너의 위치는 클래스 선택자(.form)를 사용하여 상대적으로 설정됩니다. 로그인 페이지 컨테이너를 기준으로 상대적으로 설정됩니다. border-radius 속성을 사용하여 폼에 약간의 곡선을 줄 것입니다. width와 height 속성을 사용하여 폭은 &quot;360px&quot;, 높이는 &quot;420px&quot;로 설정할 것입니다. 배경 속성을 사용하여 배경을 흰색으로 설정합니다.</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.form</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>0 0 2px #000000<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 360px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 420px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p><img src="@source/docs/Tech/2024-04-19-CreateLoginFormValidationUsingJavaScript/img/CreateLoginFormValidationUsingJavaScript_4.png" alt="CreateLoginFormValidationUsingJavaScript_4.png"></p>
<p>양식 요소 (입력 &amp; 버튼) 스타일링:</p>
<p>먼저 양식에 추가한 이미지를 스타일링할 것입니다. img 태그를 사용하여 이미지를 사용자 정의할 수 있습니다. 이미지의 위치는 &quot;absolute&quot;로 설정되었습니다. 높이는 20픽셀입니다. top 속성을 사용하여 눈 아이콘이 이제 상단에서 230픽셀, 오른쪽에서 36픽셀 떨어진 위치에 배치됩니다.</p>
<p>input 태그를 사용하여 입력 필드를 스타일링할 수 있습니다. 배경 색상은 오프화이트입니다. 입력 상자의 너비는 100%로 설정되었습니다. 추가로 input 태그에는 15픽셀의 안쪽 여백과 마진이 지정되었습니다. 입력 영역 사이의 텍스트는 14픽셀의 글꼴 크기를 갖습니다.</p>
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
<p>입력란에 포커스가 설정되면 입력란 주위에 상자 그림자가 형성됩니다.</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.form img</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 230px<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.form input</span> <span class="token punctuation">{</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #f2f2f2<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 15px 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.form input:focus</span> <span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 5px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>106<span class="token punctuation">,</span> 98<span class="token punctuation">,</span> 210<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 비밀번호 잊음에 대한 버튼과 하이퍼링크를 스타일링할 것입니다. 버튼의 파란 배경을 설정하기 위해 배경 속성을 사용합니다. 버튼의 너비는 100%로 설정됩니다. margin-top 속성을 사용하여 상단 여백을 &quot;10px&quot;로 지정합니다. 글꼴 크기와 글꼴 색상은 15px이며 글꼴 색상은 흰색입니다.</p>
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
<p>우리가 '비밀번호 재설정' 메시지에 클래스 선택자(.message)를 사용하여 15px의 마진을 줬어요. 텍스트를 가운데 정렬하기 위해 text-align 속성을 사용할 거에요.</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.form button</span> <span class="token punctuation">{</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #6a62d2<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">-webkit-transition</span><span class="token punctuation">:</span> all 0.3 ease<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.4s ease-in-out<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.form button:hover,
.form button:active,
.form button:focus</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.message</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 15px 0<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.form .message a</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #6a62d2<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-04-19-CreateLoginFormValidationUsingJavaScript/img/CreateLoginFormValidationUsingJavaScript_5.png" />
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
<p>로그인 폼 유효성 검사 JavaScript 사용하기[/caption]</p>
<h1 id="step3-유저-이름과-비밀번호가-있는-로그인-페이지에-대한-javascript-코드" tabindex="-1"><a class="header-anchor" href="#step3-유저-이름과-비밀번호가-있는-로그인-페이지에-대한-javascript-코드" aria-hidden="true">#</a> Step3: 유저 이름과 비밀번호가 있는 로그인 페이지에 대한 JavaScript 코드:-</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//TODO : 완료된 코드입니다</span>
<span class="token keyword">function</span> <span class="token function">formvalid</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> vaildpass <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"pass"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">if</span> <span class="token punctuation">(</span>vaildpass<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">8</span> <span class="token operator">||</span> vaildpass<span class="token punctuation">.</span>length <span class="token operator">>=</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"vaild-pass"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"최소 8자여야 합니다"</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"vaild-pass"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
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
<p>폼 유효성 검사 기능을 포함하려면, formvalid라는 함수를 생성할 것입니다. 우리 코드 안에 validpass 변수를 정의할 것이며, document의 getelementById 함수를 사용하여 비밀번호 입력란을 선택할 것입니다.</p>
<p>만약 길이가 8자 미만이거나 20자를 초과하는 경우, 조건문을 사용하여 비밀번호의 길이가 8자 미만임을 안내하는 알림을 표시할 것입니다.</p>
<h2 id="단계4-표시-숨기기-기능" tabindex="-1"><a class="header-anchor" href="#단계4-표시-숨기기-기능" aria-hidden="true">#</a> 단계4: 표시/숨기기 기능</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> x <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"pass"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">"password"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">"text"</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"showimg"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>src <span class="token operator">=</span>
      <span class="token string">"https://static.thenounproject.com/png/777494-200.png"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">"password"</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"showimg"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>src <span class="token operator">=</span>
      <span class="token string">"https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
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
<p>우리는 display()라는 절차 안에서 문서를 이용해 비밀번호 입력 설정을 할 것입니다. getElementById()를 이용해서 변수 값이 &quot;password&quot; 문자열과 같은지 조건과 문서를 통해 확인할 것입니다. 우리의 비밀번호 타입 입력의 값은 이미지를 열린 눈으로 변환하는 src 메소드를 사용할 때 텍스트 타입으로 변경될 것입니다. 그 반대로 x.type = password을 설정할 경우 이미지는 닫힌 눈에서 열린 눈으로 전환될 것입니다.</p>
<p>프로젝트는 이제 완료되었습니다. HTML, CSS 및 Javascript를 사용하여 폼 유효성 검사를 완료했습니다. 이제 라이브 미리보기를 확인해보세요.</p>
<p>이제 HTML, CSS 및 Javascript를 사용한 로그인 폼 유효성 검사가 완료되었습니다. IDE로 복사하여 이 프로젝트를 직접 사용할 수 있습니다. 프로젝트를 이해하셨다면 궁금한 점이 있으면 언제든지 댓글을 달아주시기 바랍니다!</p>
<p>만약 이 블로그가 도움이 되었다면 Codewithrandom을 구글에서 검색하여 소스 코드와 함께 프론트 엔드 프로젝트를 찾아보시고, Code with Random 인스타그램 페이지를 팔로우해주시기를 권장드립니다.</p>
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
<p>표를 Markdown 형식으로 변경해주세요.</p>
<table>
<thead>
<tr>
<th>follow</th>
<th>codewithrandom</th>
</tr>
</thead>
<tbody>
<tr>
<td>Written By</td>
<td>arun</td>
</tr>
<tr>
<td>Code by</td>
<td>Nikhil</td>
</tr>
</tbody>
</table>
<h1 id="이-로그인-폼-유효성-검사에-어떤-코드-편집기를-사용하고-있나요" tabindex="-1"><a class="header-anchor" href="#이-로그인-폼-유효성-검사에-어떤-코드-편집기를-사용하고-있나요" aria-hidden="true">#</a> 이 로그인 폼 유효성 검사에 어떤 코드 편집기를 사용하고 있나요?</h1>
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
<p>저는 VS Code Studio를 사용하기를 개인적으로 추천해요. 직관적이고 사용하기 쉬워요.</p>
<p>이 프로젝트는 반응형인가요?</p>
<p>네, 로그인 폼은 반응형 프로젝트에요.</p>
<p>이 프로젝트를 만들기 위해 외부 링크를 사용했나요?</p>
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
<p>아니요, 로그인 폼 유효성 검사에 순수 JavaScript 코드를 사용합니다.</p>
</div></template>
