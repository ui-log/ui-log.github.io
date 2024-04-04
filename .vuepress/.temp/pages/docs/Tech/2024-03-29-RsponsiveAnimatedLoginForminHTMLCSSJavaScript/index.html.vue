<template><div><p><img src="@source/docs/Tech/2024-03-29-RsponsiveAnimatedLoginForminHTMLCSSJavaScript/img/RsponsiveAnimatedLoginForminHTMLCSS-JavaScript_0.png" alt="이미지"></p>
<p>안녕하세요 독자 여러분, 이 글에서는 HTML 및 CSS 및 JavaScript를 사용하여 반응형 애니메이션 로그인 폼을 만드는 방법을 배우게 됩니다. 이전에 HTML CSS 및 JavaScript를 사용하여 반응형 개인 포트폴리오 웹사이트를 게시했습니다.</p>
<p>오늘은 비밀번호 및 이메일 필드가 있는 인터랙티브 로그인 폼을 만드는 것에 주력할 것입니다. 또한 비밀번호 표시, 숨김 버튼을 클릭할 수있는 기능도 포함될 것입니다. HTML, CSS 및 JavaScript를 결합하여 멋진 애니메이션 로그인 폼을 만들 수 있습니다. 세련된 배경과 매력적인 플로팅 라벨 애니메이션을 사용하여 당신의 웹사이트가 더 돋보이게 할 수 있습니다.</p>
<p>이 새로운 비밀번호 토글 버튼은 사용자의 편의성을 향상시키고 이 사용자 친화적인 양식에서 보안을 강화합니다. 모바일 퍼스트 디자인 전략과 데스크톱 최적화 덕분에 모바일 플랫폼에서 뛰어난 기능을 제공하여 사용자 경험과 접근성을 향상시킵니다.</p>
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
<h1 id="html-css-및-javascript로-반응형-애니메이션-로그인-폼" tabindex="-1"><a class="header-anchor" href="#html-css-및-javascript로-반응형-애니메이션-로그인-폼" aria-hidden="true">#</a> HTML CSS 및 JavaScript로 반응형 애니메이션 로그인 폼</h1>
<p>먼저 기본 HTML 파일을 만듭시다. 항상 그렇듯이. 이를 애니메이션 로그인 폼의 뼈대로 생각해보세요. 이 문서에서는 로그인 폼의 기본 구조를 자세히 설명하여 로그인 폼의 기초를 마련할 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 배경 래퍼 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>main <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"background_wrapper"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"login_form_wrapper"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 폼 <span class="token operator">--</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token string">"#"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"login__form"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>h1 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"title"</span><span class="token operator">></span>Login<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>

          <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"login_form_content"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 로그인 콘텐츠 상자 <span class="token number">1</span> <span class="token operator">--</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"login_content_box"</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>ion<span class="token operator">-</span>icon name<span class="token operator">=</span><span class="token string">"person-outline"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>ion<span class="token operator">-</span>icon<span class="token operator">></span>

              <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"login_content_box--input"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>input
                  type<span class="token operator">=</span><span class="token string">"email"</span>
                  placeholder<span class="token operator">=</span><span class="token string">" "</span>
                  <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"login__input email--input"</span>
                  required
                <span class="token operator">/</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"email"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"login__label"</span><span class="token operator">></span>Email<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 로그인 콘텐츠 상자 <span class="token number">2</span> <span class="token operator">--</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"login_content_box"</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>ion<span class="token operator">-</span>icon name<span class="token operator">=</span><span class="token string">"lock-closed-outline"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>ion<span class="token operator">-</span>icon<span class="token operator">></span>

              <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"login_content_box--input"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>input
                  type<span class="token operator">=</span><span class="token string">"password"</span>
                  placeholder<span class="token operator">=</span><span class="token string">" "</span>
                  <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"login__input password--input"</span>
                  required
                <span class="token operator">/</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"password"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"login__label"</span><span class="token operator">></span>Password<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
                <span class="token operator">&lt;</span>ion<span class="token operator">-</span>icon
                  <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"password__hidden"</span>
                  id<span class="token operator">=</span><span class="token string">"password_hidden"</span>
                  name<span class="token operator">=</span><span class="token string">"eye-off-outline"</span>
                <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>ion<span class="token operator">-</span>icon<span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 로그인 기억하기 <span class="token operator">--</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"remember_login"</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"remember_login_content"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"checkbox"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"remember_login_input"</span> <span class="token operator">/</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"remember"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"remember_login_label text--sm"</span>
                  <span class="token operator">></span>Remember me<span class="token operator">&lt;</span><span class="token operator">/</span>label
                <span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 비밀번호 잊어버림 <span class="token operator">--</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"forget__login text--sm"</span><span class="token operator">></span>Forget password<span class="token operator">?</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 로그인 버튼 <span class="token operator">--</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"button__login"</span><span class="token operator">></span>Login<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 로그인 등록 <span class="token operator">--</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"register__login text--sm"</span><span class="token operator">></span>
              계정이 없으신가요<span class="token operator">?</span> <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span><span class="token operator">></span>등록<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HTML 기반을 마무리하면, 멋진 외관을 줄 수 있도록 CSS를 사용하여 포트폴리오를 스타일링해야 합니다. 웹사이트의 모든 것을 맞춤화할 수 있는 마법봉인 CSS입니다. 디자인을 사용자 정의하고 원하는 색상을 선택하며, 최적의 서체를 선택하여 완전히 자신만의 것으로 만들 수 있습니다.</p>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"table"</span><span class="token operator">:</span> <span class="token string">"Markdown 형식으로 표를 나타내세요"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
