<template><div><p>프로그래머 여러분 안녕하세요!! 이 튜토리얼에서는 HTML 및 CSS로 로그인 및 등록 양식을 만드는 방법을 소개하겠습니다.</p>
<p>이 초보자 수준의 프로젝트를 위해서는 HTML 양식에 대한 기본적인 이해만 필요합니다. 아직 개념이 없어도 걱정하지 마세요. 프로젝트를 단계별로 설명할 것이며, 이 프로젝트에서 같은 양식에서 등록 및 로그인할 수 있습니다. 두 가지 다른 버튼으로 제어됩니다. 로그인 버튼을 클릭하면 로그인 양식이 표시됩니다.</p>
<p>회원가입 양식은 등록 버튼을 클릭하여 엽니다. 이 기능은 HTML 체크박스 덕분에 활성화됩니다. 이름, 성, 이메일, 비밀번호 및 기타 정보를 등록 양식에 입력해야 합니다. 로그인 페이지에는 이메일 주소와 비밀번호만 필수 입력 사항입니다.</p>
<p>우리 프로젝트를 빠르게 살펴보겠습니다.</p>
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
<p><img src="@source/docs/Tech/2024-04-19-LoginandRegistrationForminHTMLandCSSWithSourceCode/img/LoginandRegistrationForminHTMLandCSSWithSourceCode_0.png" alt="이미지"></p>
<p>로그인 및 회원가입 양식</p>
<p>만약 우리가 배운 팝업 로그인 양식을 아직 보지 않은 경우 아래 링크를 클릭해보세요.</p>
<p>프로젝트에 대한 아이디어를 얻었을 거라고 생각합니다. 그럼, 회원가입 및 로그인 양식 프로젝트 소스 코드로 넘어가봅시다. 먼저, 우리는 HTML 코드를 사용할 것입니다.</p>
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
<h1 id="단계1-html-코드에서-로그인-및-등록-양식" tabindex="-1"><a class="header-anchor" href="#단계1-html-코드에서-로그인-및-등록-양식" aria-hidden="true">#</a> 단계1: HTML 코드에서 로그인 및 등록 양식</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"style.css"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>title<span class="token operator">></span>양식<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"login-wrap"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"login-html"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">"tab-1"</span> type<span class="token operator">=</span><span class="token string">"radio"</span> name<span class="token operator">=</span><span class="token string">"tab"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"sign-in"</span> checked<span class="token operator">></span><span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"tab-1"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"tab"</span><span class="token operator">></span>로그인<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
      <span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">"tab-2"</span> type<span class="token operator">=</span><span class="token string">"radio"</span> name<span class="token operator">=</span><span class="token string">"tab"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"sign-up"</span><span class="token operator">></span><span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"tab-2"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"tab"</span><span class="token operator">></span>가입<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"login-form"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"sign-in-htm"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"group"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"user"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"label"</span><span class="token operator">></span>사용자 이름<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
            <span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">"user"</span> type<span class="token operator">=</span><span class="token string">"text"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"input"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"group"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"pass"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"label"</span><span class="token operator">></span>비밀번호<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
            <span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">"pass"</span> type<span class="token operator">=</span><span class="token string">"password"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"input"</span> data<span class="token operator">-</span>type<span class="token operator">=</span><span class="token string">"password"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"group"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">"check"</span> type<span class="token operator">=</span><span class="token string">"checkbox"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"check"</span> checked<span class="token operator">></span>
            <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"check"</span><span class="token operator">></span><span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"icon"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span> 로그인 유지<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"group"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"submit"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"button"</span> value<span class="token operator">=</span><span class="token string">"로그인"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"hr"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"foot-lnk"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#forgot"</span><span class="token operator">></span>비밀번호 찾기<span class="token operator">?</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"sign-up-htm"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"group"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"user"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"label"</span><span class="token operator">></span>사용자 이름<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
            <span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">"user"</span> type<span class="token operator">=</span><span class="token string">"text"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"input"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"group"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"pass"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"label"</span><span class="token operator">></span>비밀번호<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
            <span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">"pass"</span> type<span class="token operator">=</span><span class="token string">"password"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"input"</span> data<span class="token operator">-</span>type<span class="token operator">=</span><span class="token string">"password"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"group"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"pass"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"label"</span><span class="token operator">></span>비밀번호 재입력<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
            <span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">"pass"</span> type<span class="token operator">=</span><span class="token string">"password"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"input"</span> data<span class="token operator">-</span>type<span class="token operator">=</span><span class="token string">"password"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"group"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"pass"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"label"</span><span class="token operator">></span>이메일 주소<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
            <span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">"pass"</span> type<span class="token operator">=</span><span class="token string">"text"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"input"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"group"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"submit"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"button"</span> value<span class="token operator">=</span><span class="token string">"가입"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"hr"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"foot-lnk"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"tab-1"</span><span class="token operator">></span>이미 회원이신가요<span class="token operator">?</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>등록 및 로그인 양식에 대한 정보가 아래 섹션의 HTML 코드로 추가되었습니다. 아래 나열된 코드는 복사하여 직접 HTML 파일에 추가됩니다.</p>
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
<li>시작하기 위해 'login-wrap' 클래스를 div 태그에 추가할 거예요. 이 태그는 회원가입 및 로그인 폼을 감싸게 될 거에요.</li>
<li>이제 'radio' 타입의 입력 상자를 만들었으니, 이 라디오 버튼을 사용하여 회원가입 및 로그인 양식 사이를 전환할 수 있어요.</li>
<li>이제 로그인 폼을 만들 차례에요. 그것을 위해 사용자 이름을 요청하는 레이블을 디자인하고, 그 아래에 사용자 이름을 입력할 수 있는 텍스트 입력 상자를 만들 거예요.</li>
<li>이제 '패스워드' 입력 상자와 '로그인 유지'라고 적힌 '체크박스' 입력 상자를 만들 거에요.</li>
<li>이제 <code v-pre>hr</code> 태그를 사용하여 폼을 나누기 위한 수평 줄을 만들 거에요.</li>
<li>이제 앵커 태그를 사용하여 비밀번호를 잊어버렸을 때 사용할 링크를 만들 거에요.</li>
</ul>
<p>우리가 만든 로그인 폼을 한번 살펴봐요.</p>
<p><img src="@source/docs/Tech/2024-04-19-LoginandRegistrationForminHTMLandCSSWithSourceCode/img/LoginandRegistrationForminHTMLandCSSWithSourceCode_1.png" alt="이미지 설명"></p>
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
<li>이제 회원가입 양식의 구조를 만들겠습니다. div 태그를 사용하여 회원가입 양식의 컨테이너를 만들 것입니다.</li>
<li>먼저, 사용자 이름을 위한 레이블과 &quot;text&quot;로 된 사용자 이름을 입력하는 입력란을 만들 것입니다. 그런 다음, 두 개의 &quot;password&quot; 유형의 입력란을 생성할 것입니다.</li>
<li>사용자의 이메일 주소를 요청하는 레이블을 만들고, &quot;email&quot; 주소 유형의 입력 상자를 함께 만들 것입니다.</li>
<li>사용자를 가입시키는 버튼 역할을 하는 입력란을 만들 것입니다. 사용자가 다른 웹사이트에서 이미 등록한 경우, 로그인 페이지로 가는 링크도 만들 것입니다.</li>
</ul>
<p>이제 우리가 만든 SignUp 양식을 살펴보겠습니다.</p>
<p><img src="@source/docs/Tech/2024-04-19-LoginandRegistrationForminHTMLandCSSWithSourceCode/img/LoginandRegistrationForminHTMLandCSSWithSourceCode_2.png" alt="HTML 및 CSS를 사용한 로그인 및 회원가입 양식"></p>
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
<p>우리는 HTML 태그와 그 내용을 추가했습니다. 이제 CSS 코드를 추가하여 페이지를 더 멋지게 만들어 봅시다. 페이지를 스타일링하기 전에 HTML의 head 섹션에 외부 스타일링 링크를 추가해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"styles.css"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="단계2-css-코드를-사용하여-로그인-및-등록-양식-스타일링하기" tabindex="-1"><a class="header-anchor" href="#단계2-css-코드를-사용하여-로그인-및-등록-양식-스타일링하기" aria-hidden="true">#</a> 단계2: CSS 코드를 사용하여 로그인 및 등록 양식 스타일링하기</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>body <span class="token punctuation">{</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #6a6f8c<span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> #c8c8c8<span class="token punctuation">;</span>
  <span class="token literal-property property">font</span><span class="token operator">:</span> <span class="token number">600</span> 16px<span class="token operator">/</span>18px <span class="token string">"Open Sans"</span><span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">}</span>
<span class="token operator">*</span><span class="token punctuation">,</span>
<span class="token operator">:</span>after<span class="token punctuation">,</span>
<span class="token operator">:</span>before <span class="token punctuation">{</span>
  box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>clearfix<span class="token operator">:</span>after<span class="token punctuation">,</span>
<span class="token punctuation">.</span>clearfix<span class="token operator">:</span>before <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> table<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>clearfix<span class="token operator">:</span>after <span class="token punctuation">{</span>
  <span class="token literal-property property">clear</span><span class="token operator">:</span> both<span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
a <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> inherit<span class="token punctuation">;</span>
  text<span class="token operator">-</span>decoration<span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>wrap <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>
  max<span class="token operator">-</span>width<span class="token operator">:</span> 525px<span class="token punctuation">;</span>
  min<span class="token operator">-</span>height<span class="token operator">:</span> 670px<span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token function">url</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>raw<span class="token punctuation">.</span>githubusercontent<span class="token punctuation">.</span>com<span class="token operator">/</span>khadkamhn<span class="token operator">/</span>day<span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span>login<span class="token operator">-</span>form<span class="token operator">/</span>master<span class="token operator">/</span>img<span class="token operator">/</span>bg<span class="token punctuation">.</span>jpg<span class="token punctuation">)</span>
    no<span class="token operator">-</span>repeat center<span class="token punctuation">;</span>
  box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> 12px 15px <span class="token number">0</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.24</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">0</span> 17px 50px <span class="token number">0</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.19</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>html <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 90px 70px 50px 70px<span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">57</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">0.9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>html <span class="token punctuation">.</span>sign<span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">-</span>htm<span class="token punctuation">,</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>html <span class="token punctuation">.</span>sign<span class="token operator">-</span>up<span class="token operator">-</span>htm <span class="token punctuation">{</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
  <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  backface<span class="token operator">-</span>visibility<span class="token operator">:</span> hidden<span class="token punctuation">;</span>
  <span class="token literal-property property">transition</span><span class="token operator">:</span> all <span class="token number">0</span><span class="token punctuation">.</span>4s linear<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>html <span class="token punctuation">.</span>sign<span class="token operator">-</span><span class="token keyword">in</span><span class="token punctuation">,</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>html <span class="token punctuation">.</span>sign<span class="token operator">-</span>up<span class="token punctuation">,</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group <span class="token punctuation">.</span>check <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>html <span class="token punctuation">.</span>tab<span class="token punctuation">,</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group <span class="token punctuation">.</span>label<span class="token punctuation">,</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group <span class="token punctuation">.</span>button <span class="token punctuation">{</span>
  text<span class="token operator">-</span>transform<span class="token operator">:</span> uppercase<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>html <span class="token punctuation">.</span>tab <span class="token punctuation">{</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 22px<span class="token punctuation">;</span>
  margin<span class="token operator">-</span>right<span class="token operator">:</span> 15px<span class="token punctuation">;</span>
  <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
  padding<span class="token operator">-</span>bottom<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> 15px 10px <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token operator">-</span>block<span class="token punctuation">;</span>
  border<span class="token operator">-</span>bottom<span class="token operator">:</span> 2px solid transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>html <span class="token punctuation">.</span>sign<span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">:</span>checked <span class="token operator">+</span> <span class="token punctuation">.</span>tab<span class="token punctuation">,</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>html <span class="token punctuation">.</span>sign<span class="token operator">-</span>up<span class="token operator">:</span>checked <span class="token operator">+</span> <span class="token punctuation">.</span>tab <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
  border<span class="token operator">-</span>color<span class="token operator">:</span> #1161ee<span class="token punctuation">;</span>
  <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">{</span>
  min<span class="token operator">-</span>height<span class="token operator">:</span> 345px<span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
  <span class="token literal-property property">perspective</span><span class="token operator">:</span> 1000px<span class="token punctuation">;</span>
  transform<span class="token operator">-</span>style<span class="token operator">:</span> preserve<span class="token operator">-</span>3d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group <span class="token punctuation">{</span>
  margin<span class="token operator">-</span>bottom<span class="token operator">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group <span class="token punctuation">.</span>label<span class="token punctuation">,</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group <span class="token punctuation">.</span>input<span class="token punctuation">,</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group <span class="token punctuation">.</span>button <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group <span class="token punctuation">.</span>input<span class="token punctuation">,</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group <span class="token punctuation">.</span>button <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 15px 20px<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 25px<span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
login<span class="token operator">-</span>form <span class="token punctuation">.</span>group input<span class="token punctuation">[</span>data<span class="token operator">-</span>type<span class="token operator">=</span><span class="token string">"password"</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token operator">-</span>webkit<span class="token operator">-</span>text<span class="token operator">-</span>security<span class="token operator">:</span> circle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* The rest of the CSS code has been omitted for brevity. */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 CSS 코드를 글에 포함했으니 단계별로 살펴보겠습니다. Step1: body 태그를 사용하여 웹페이지의 margin과 padding을 &quot;제로&quot;로 설정했습니다. &quot;Open Sans&quot;는 글꼴 패밀리입니다. &quot;Light Grey&quot;는 배경 색상 설정입니다. 또한 글꼴 크기를 &quot;dark-grey&quot;로 변경했습니다.</p>
<p>별표(*)를 사용하여 웹페이지의 box-sizing을 &quot;border-box&quot;로 설정합니다. 특정 항목이 넘치면 clearfix 속성이 자동으로 높이로 설정됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>body <span class="token punctuation">{</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #6a6f8c<span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> #c8c8c8<span class="token punctuation">;</span>
  <span class="token literal-property property">font</span><span class="token operator">:</span> <span class="token number">600</span> 16px<span class="token operator">/</span>18px <span class="token string">"Open Sans"</span><span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">}</span>
<span class="token operator">*</span><span class="token punctuation">,</span>
<span class="token operator">:</span>after<span class="token punctuation">,</span>
<span class="token operator">:</span>before <span class="token punctuation">{</span>
  box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>clearfix<span class="token operator">:</span>after<span class="token punctuation">,</span>
<span class="token punctuation">.</span>clearfix<span class="token operator">:</span>before <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> table<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>clearfix<span class="token operator">:</span>after <span class="token punctuation">{</span>
  <span class="token literal-property property">clear</span><span class="token operator">:</span> both<span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음 단계는 (.login-wrap) 클래스를 사용하여 너비를 &quot;100%&quot;로 설정하는 것입니다. 여백은 auto로 설정되어 내용에 따라 변경됩니다. 또한 최대 너비로 &quot;525px&quot;와 최소 높이로 &quot;670px&quot;를 지정했습니다. 로그인 폼에 약간의 특별한 매력을 더하기 위해 배경 이미지도 추가했습니다.</p>
<p>로그인 폼을 스타일링하기 위해 &quot;login-html&quot; 클래스를 사용할 것입니다. 너비를 &quot;100%&quot;로 설정하고 position을 absolute로 설정했습니다. 추가적인 공간을 추가하고 로그인 폼의 배경을 짙은 파란색으로 만들었습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>login<span class="token operator">-</span>wrap <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>
  max<span class="token operator">-</span>width<span class="token operator">:</span> 525px<span class="token punctuation">;</span>
  min<span class="token operator">-</span>height<span class="token operator">:</span> 670px<span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token function">url</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>raw<span class="token punctuation">.</span>githubusercontent<span class="token punctuation">.</span>com<span class="token operator">/</span>khadkamhn<span class="token operator">/</span>day<span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span>login<span class="token operator">-</span>form<span class="token operator">/</span>master<span class="token operator">/</span>img<span class="token operator">/</span>bg<span class="token punctuation">.</span>jpg<span class="token punctuation">)</span>
    no<span class="token operator">-</span>repeat center<span class="token punctuation">;</span>
  box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> 12px 15px <span class="token number">0</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.24</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">0</span> 17px 50px <span class="token number">0</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.19</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>html <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 90px 70px 50px 70px<span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">57</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">0.9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>Step3: (.sign-in-htm와 .sign-up-htm) 파일을 사용하여 상단, 왼쪽, 오른쪽 및 하단 간격을 &quot;zero&quot;로 설정하고 위치를 &quot;absolute&quot;로 설정합니다. 우리의 로그인 및 회원 가입 양식을 몇 가지 변환 속성을 추가하여 180도 회전시킬 것입니다. 이제 로그인 버튼을 스타일링할 것입니다. 글꼴 크기는 &quot;22 px&quot;로 설정되었고 오른쪽 여백은 &quot;15 px&quot;로 설정되었으며, 커서는 &quot;pointer&quot;로 설정되었고 아래 여백은 &quot;5 px&quot;로 설정되었습니다. 추가적으로, 버튼에 2px의 하단 테두리를 부여했습니다. 비슷한 방식으로 회원 가입 양식을 스타일링할 것입니다. 당신은 우리의 CSS 코드를 한 번 훑어보기만 하면 코드를 쉽게 이해할 수 있을 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>login<span class="token operator">-</span>html <span class="token punctuation">.</span>tab <span class="token punctuation">{</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 22px<span class="token punctuation">;</span>
  margin<span class="token operator">-</span>right<span class="token operator">:</span> 15px<span class="token punctuation">;</span>
  <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
  padding<span class="token operator">-</span>bottom<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> 15px 10px <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token operator">-</span>block<span class="token punctuation">;</span>
  border<span class="token operator">-</span>bottom<span class="token operator">:</span> 2px solid transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>html <span class="token punctuation">.</span>sign<span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">:</span>checked <span class="token operator">+</span> <span class="token punctuation">.</span>tab<span class="token punctuation">,</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>html <span class="token punctuation">.</span>sign<span class="token operator">-</span>up<span class="token operator">:</span>checked <span class="token operator">+</span> <span class="token punctuation">.</span>tab <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
  border<span class="token operator">-</span>color<span class="token operator">:</span> #1161ee<span class="token punctuation">;</span>
  <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">{</span>
  min<span class="token operator">-</span>height<span class="token operator">:</span> 345px<span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
  <span class="token literal-property property">perspective</span><span class="token operator">:</span> 1000px<span class="token punctuation">;</span>
  transform<span class="token operator">-</span>style<span class="token operator">:</span> preserve<span class="token operator">-</span>3d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group <span class="token punctuation">{</span>
  margin<span class="token operator">-</span>bottom<span class="token operator">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group <span class="token punctuation">.</span>label<span class="token punctuation">,</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group <span class="token punctuation">.</span>input<span class="token punctuation">,</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group <span class="token punctuation">.</span>button <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group <span class="token punctuation">.</span>input<span class="token punctuation">,</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group <span class="token punctuation">.</span>button <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 15px 20px<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 25px<span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group input<span class="token punctuation">[</span>data<span class="token operator">-</span>type<span class="token operator">=</span><span class="token string">"password"</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token operator">-</span>webkit<span class="token operator">-</span>text<span class="token operator">-</span>security<span class="token operator">:</span> circle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
login<span class="token operator">-</span>form <span class="token punctuation">.</span>group <span class="token punctuation">.</span>label <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #aaa<span class="token punctuation">;</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group <span class="token punctuation">.</span>button <span class="token punctuation">{</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> #1161ee<span class="token punctuation">;</span>
  <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group <span class="token punctuation">.</span>button<span class="token operator">:</span>hover <span class="token punctuation">{</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span>#1454c4<span class="token punctuation">;</span>
    <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group label <span class="token punctuation">.</span>icon <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 15px<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 15px<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 2px<span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token operator">-</span>block<span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group label <span class="token punctuation">.</span>icon<span class="token operator">:</span>before<span class="token punctuation">,</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group label <span class="token punctuation">.</span>icon<span class="token operator">:</span>after <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 2px<span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
  <span class="token literal-property property">transition</span><span class="token operator">:</span> all <span class="token number">0</span><span class="token punctuation">.</span>2s ease<span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">-</span>out 0s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group label <span class="token punctuation">.</span>icon<span class="token operator">:</span>before <span class="token punctuation">{</span>
  <span class="token literal-property property">left</span><span class="token operator">:</span> 3px<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 5px<span class="token punctuation">;</span>
  <span class="token literal-property property">bottom</span><span class="token operator">:</span> 6px<span class="token punctuation">;</span>
  <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group label <span class="token punctuation">.</span>icon<span class="token operator">:</span>after <span class="token punctuation">{</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> 6px<span class="token punctuation">;</span>
  <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Step4: 이제 checked 속성을 활용하여 로그인 및 회원 가입 양식 간을 전환할 것입니다. 이제 checked 프로퍼티를 사용하여, 회원 가입 버튼을 선택하면 하단에 파란색 테두리가 표시되고 로그인을 선택하면 로그인 양식의 checked 속성이 나타납니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group <span class="token punctuation">.</span>check<span class="token operator">:</span>checked <span class="token operator">+</span> label <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group <span class="token punctuation">.</span>check<span class="token operator">:</span>checked <span class="token operator">+</span> label <span class="token punctuation">.</span>icon <span class="token punctuation">{</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> #1161ee<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group <span class="token punctuation">.</span>check<span class="token operator">:</span>checked <span class="token operator">+</span> label <span class="token punctuation">.</span>icon<span class="token operator">:</span>before <span class="token punctuation">{</span>
  <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>group <span class="token punctuation">.</span>check<span class="token operator">:</span>checked <span class="token operator">+</span> label <span class="token punctuation">.</span>icon<span class="token operator">:</span>after <span class="token punctuation">{</span>
  <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token operator">-</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>html <span class="token punctuation">.</span>sign<span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">:</span>checked <span class="token operator">+</span> <span class="token punctuation">.</span>tab <span class="token operator">+</span> <span class="token punctuation">.</span>sign<span class="token operator">-</span>up <span class="token operator">+</span> <span class="token punctuation">.</span>tab <span class="token operator">+</span> <span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>sign<span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">-</span>htm <span class="token punctuation">{</span>
  <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>login<span class="token operator">-</span>html <span class="token punctuation">.</span>sign<span class="token operator">-</span>up<span class="token operator">:</span>checked <span class="token operator">+</span> <span class="token punctuation">.</span>tab <span class="token operator">+</span> <span class="token punctuation">.</span>login<span class="token operator">-</span>form <span class="token punctuation">.</span>sign<span class="token operator">-</span>up<span class="token operator">-</span>htm <span class="token punctuation">{</span>
  <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>팝업 로그인 폼을 스타일링했으니 이제 최종 결과를 확인해 보겠습니다. 결과물:</p>
<h1 id="html과-css로-스타일링한-최종-결과-로그인-및-등록-폼" tabindex="-1"><a class="header-anchor" href="#html과-css로-스타일링한-최종-결과-로그인-및-등록-폼" aria-hidden="true">#</a> HTML과 CSS로 스타일링한 최종 결과 로그인 및 등록 폼:</h1>
<p><img src="@source/docs/Tech/2024-04-19-LoginandRegistrationForminHTMLandCSSWithSourceCode/img/LoginandRegistrationForminHTMLandCSSWithSourceCode_3.png" alt="Login and Registration Form Using HTML &amp; CSS"></p>
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
<p>프로젝트가 완료되었습니다. HTML 및 CSS를 사용하여 로그인 및 등록 양식이 완성되었습니다.</p>
<p>우리는 이제 HTML과 CSS를 사용하여 로그인 및 등록 양식을 성공적으로 만들었습니다. IDE로 복사하여 이 프로젝트를 직접 사용할 수 있습니다. 프로젝트를 이해하셨으면 댓글로 자유롭게 질문하세요! 이 블로그가 도움이 되셨다면 Front End Projects with Source codes에 대한 코드를 Google에서 랜덤하게 찾아보고, Code with Random Instagram 페이지를 팔로우하는 것을 잊지 마세요.</p>
<p>팔로우: codewithrandom</p>
<p>작성자: arun</p>
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
<p>코드 작성자: Arun</p>
<h2 id="이-로그인-및-등록-양식에-어떤-코드-편집기를-사용하시나요" tabindex="-1"><a class="header-anchor" href="#이-로그인-및-등록-양식에-어떤-코드-편집기를-사용하시나요" aria-hidden="true">#</a> 이 로그인 및 등록 양식에 어떤 코드 편집기를 사용하시나요?</h2>
<p>이 로그인 및 등록 양식에 대해 사용하는 것을 권장드리는 것은 VS Code Studio입니다. 직관적이며 사용하기 쉽습니다.</p>
<h2 id="로그인-및-등록-양식은-반응형으로-제작되었나요" tabindex="-1"><a class="header-anchor" href="#로그인-및-등록-양식은-반응형으로-제작되었나요" aria-hidden="true">#</a> 로그인 및 등록 양식은 반응형으로 제작되었나요?</h2>
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
<p>네, 이 로그인 및 등록 양식은 반응형입니다.</p>
<p>완전한 HTML과 CSS를 사용하여 로그인 및 등록 양식을 만들었습니다.</p>
</div></template>
