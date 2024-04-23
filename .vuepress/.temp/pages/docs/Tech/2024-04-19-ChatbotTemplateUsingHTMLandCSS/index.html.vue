<template><div><p>안녕하세요, 코더님, Codewithrandom 블로그에 오신 것을 환영합니다. 이 글에서는 HTML과 CSS를 사용하여 챗봇 템플릿을 만드는 방법을 알아볼 거에요. 이 템플릿은 무료이며, 디자인에는 메시지 UI와 수신 메시지 템플릿이 포함되어 있습니다.</p>
<p>먼저 HTML 코드를 공유하고, 그 다음에는 챗봇 템플릿 디자인에 대한 CSS 코드를 공유할 거에요.</p>
<p>챗봇 템플릿 프로젝트에서는 조금의 자바스크립트를 사용합니다. 챗을 클릭하면 챗봇 UI 템플릿이 채팅을 위해 팝업됩니다. 그래서 우리는 JS를 사용해요.</p>
<p>학습자 여러분들은 웹사이트를 로딩한 후 왼쪽 하단에 작은 메시지 아이콘을 볼 수 있었을 겁니다. 클릭하면 웹사이트 핸들러나 봇(AI)과 채팅을 할 수 있는 팝업 미리보기가 나타납니다.</p>
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
<p>알지 못하는 것이 있다면 이 블로그에 참여해 보세요. 스크롤을 내리는 손가락만이 자유로운지 확인해주세요.</p>
<p><img src="@source/docs/Tech/2024-04-19-ChatbotTemplateUsingHTMLandCSS/img/ChatbotTemplateUsingHTMLandCSS_0.png" alt="이미지"></p>
<p>안녕, 학습자 여러분..!</p>
<p>이 블로그에서는 작동 방식을 알려주는 대신 채팅 상자 레이아웃이나 팝업 레이아웃을 어떻게 디자인할 수 있는지를 밀접히 살펴볼 것입니다.</p>
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
<p>저 외에도 사용자와의 상호작용이 더욱 높아요. 페이지의 동적 움직임이 보여줘요. 프로젝트에 대한 아이디어를 얻었기를 바래요.</p>
<p>저희 프로젝트를 살펴볼까요?</p>
<p><img src="@source/docs/Tech/2024-04-19-ChatbotTemplateUsingHTMLandCSS/img/ChatbotTemplateUsingHTMLandCSS_1.png" alt="ChatbotTemplateUsingHTMLandCSS_1.png"></p>
<p>메시지 보내기를 클릭하면 챗박스 UI가 팝업 될 거에요.</p>
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
<p><img src="@source/docs/Tech/2024-04-19-ChatbotTemplateUsingHTMLandCSS/img/ChatbotTemplateUsingHTMLandCSS_2.png" alt="이미지"></p>
<h1 id="html-챗봇-템플릿-코드" tabindex="-1"><a class="header-anchor" href="#html-챗봇-템플릿-코드" aria-hidden="true">#</a> Html 챗봇 템플릿 코드:-</h1>
<p>여기서는 HTML 파일의 구조를 처음부터 추가하지 않겠습니다. 본문 부분만 붙여넣을 것인데, 이는 본문이 브라우저 디자인의 주요 부분이기 때문입니다.</p>
<p>HTML 섹션에는 다음 부분이 있습니다. 먼저, <code v-pre>chat-box-header</code> 클래스를 갖는 div가 있습니다. 이 안에는 아이콘과 함께 'Message us'라고 쓰인 버튼이 있습니다. 별도의 Div 아래에는 UI 디자인 요소가 있습니다.</p>
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
<p>아래 코드를 참고해서 IDE나 CSS 스타일링 없이 HTML만으로 디자인하는 환경에서 실행해보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"chat-box"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"chat-box-header"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>h3<span class="token operator">></span>Message Us<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-times"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"chat-box-body"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"chat-box-body-send"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>p<span class="token operator">></span>This is my message<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
            <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token number">12</span><span class="token operator">:</span><span class="token number">00</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"chat-box-body-receive"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>p<span class="token operator">></span>This is my message<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
            <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token number">12</span><span class="token operator">:</span><span class="token number">00</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"chat-box-body-receive"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>p<span class="token operator">></span>This is my message<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
            <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token number">12</span><span class="token operator">:</span><span class="token number">00</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"chat-box-body-send"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>p<span class="token operator">></span>This is my message<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
            <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token number">12</span><span class="token operator">:</span><span class="token number">00</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"chat-box-body-send"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>p<span class="token operator">></span>This is my message<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
            <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token number">12</span><span class="token operator">:</span><span class="token number">00</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"chat-box-body-receive"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>p<span class="token operator">></span>This is my message<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
            <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token number">12</span><span class="token operator">:</span><span class="token number">00</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"chat-box-body-receive"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>p<span class="token operator">></span>This is my message<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
            <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token number">12</span><span class="token operator">:</span><span class="token number">00</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"chat-box-body-send"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>p<span class="token operator">></span>This is my message<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
            <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token number">12</span><span class="token operator">:</span><span class="token number">00</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"chat-box-footer"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">"addExtra"</span><span class="token operator">></span><span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fa fa-plus"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span>input placeholder<span class="token operator">=</span><span class="token string">"Enter Your Message"</span> type<span class="token operator">=</span><span class="token string">"text"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>i <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"send far fa-paper-plane"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"chat-button"</span><span class="token operator">></span><span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"modal"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"modal-content"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"modal-close-button"</span><span class="token operator">></span><span class="token operator">&amp;</span>times<span class="token punctuation">;</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span>h1<span class="token operator">></span>Add What you want here<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="html-css-챗봇-템플릿" tabindex="-1"><a class="header-anchor" href="#html-css-챗봇-템플릿" aria-hidden="true">#</a> Html + CSS 챗봇 템플릿:-</h1>
<p>CSS를 사용하여 입력 태그 버튼을 디자인하고 반응형으로 만들어보겠습니다.</p>
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
<p>아래 코드를 추가하면 더 많은 분석이 가능합니다. 저속된 HTML 파일을 추가하고 마법을 경험해 보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token keyword">import</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token string">"https://fonts.googleapis.com/css?family=Raleway|Ubuntu&amp;display=swap"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
body <span class="token punctuation">{</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #<span class="token constant">E8EBF5</span><span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    font<span class="token operator">-</span>family<span class="token operator">:</span> Raleway<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>chat<span class="token operator">-</span>box <span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">90</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 400px<span class="token punctuation">;</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> auto<span class="token punctuation">;</span>
    <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token operator">-</span>webkit<span class="token operator">-</span>box<span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token operator">-</span>ms<span class="token operator">-</span>flexbox<span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    <span class="token operator">-</span>webkit<span class="token operator">-</span>box<span class="token operator">-</span>orient<span class="token operator">:</span> vertical<span class="token punctuation">;</span>
    <span class="token operator">-</span>webkit<span class="token operator">-</span>box<span class="token operator">-</span>direction<span class="token operator">:</span> normal<span class="token punctuation">;</span>
    <span class="token operator">-</span>ms<span class="token operator">-</span>flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
    flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
    z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">;</span>
    box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> 10px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.005</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> 15px<span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 15px<span class="token punctuation">;</span>
    <span class="token literal-property property">visibility</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
    <span class="token operator">&amp;</span><span class="token operator">-</span>header <span class="token punctuation">{</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">8</span><span class="token operator">%</span><span class="token punctuation">;</span>
        border<span class="token operator">-</span>top<span class="token operator">-</span>left<span class="token operator">-</span>radius<span class="token operator">:</span> 15px<span class="token punctuation">;</span>
        border<span class="token operator">-</span>top<span class="token operator">-</span>right<span class="token operator">-</span>radius<span class="token operator">:</span> 15px<span class="token punctuation">;</span>
        <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
        font<span class="token operator">-</span>size<span class="token operator">:</span> 14px<span class="token punctuation">;</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>5em <span class="token number">0</span><span class="token punctuation">;</span>
        box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> 3px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> 3px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token number">0</span> <span class="token operator">-</span>1px 10px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">172</span><span class="token punctuation">,</span> <span class="token number">54</span><span class="token punctuation">,</span> <span class="token number">195</span><span class="token punctuation">,</span> <span class="token number">0.3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> 1px 10px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.025</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token operator">&amp;</span> h3 <span class="token punctuation">{</span>
            font<span class="token operator">-</span>family<span class="token operator">:</span> ubuntu<span class="token punctuation">;</span>
            font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">;</span>
            <span class="token literal-property property">float</span><span class="token operator">:</span> left<span class="token punctuation">;</span>
            <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
            <span class="token literal-property property">left</span><span class="token operator">:</span> 25px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token operator">&amp;</span> p <span class="token punctuation">{</span>
            <span class="token literal-property property">float</span><span class="token operator">:</span> right<span class="token punctuation">;</span>
            <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
            <span class="token literal-property property">right</span><span class="token operator">:</span> 16px<span class="token punctuation">;</span>
            <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> 50px<span class="token punctuation">;</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> 50px<span class="token punctuation">;</span>
            text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
            line<span class="token operator">-</span>height<span class="token operator">:</span> <span class="token number">3.25</span><span class="token punctuation">;</span>
            <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token operator">&amp;</span><span class="token operator">-</span>body <span class="token punctuation">{</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">75</span><span class="token operator">%</span><span class="token punctuation">;</span>
        <span class="token literal-property property">background</span><span class="token operator">:</span> #f8f8f8<span class="token punctuation">;</span>
        overflow<span class="token operator">-</span>y<span class="token operator">:</span> scroll<span class="token punctuation">;</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> 12px<span class="token punctuation">;</span>
        <span class="token operator">&amp;</span><span class="token operator">-</span>send <span class="token punctuation">{</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> 250px<span class="token punctuation">;</span>
            <span class="token literal-property property">float</span><span class="token operator">:</span> right<span class="token punctuation">;</span>
            <span class="token literal-property property">background</span><span class="token operator">:</span> white<span class="token punctuation">;</span>
            <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px 20px<span class="token punctuation">;</span>
            border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
            box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> 10px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.015</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            margin<span class="token operator">-</span>bottom<span class="token operator">:</span> 14px<span class="token punctuation">;</span>
            <span class="token operator">&amp;</span> p <span class="token punctuation">{</span>
                <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">444</span><span class="token punctuation">;</span>
                font<span class="token operator">-</span>size<span class="token operator">:</span> 14px<span class="token punctuation">;</span>
                margin<span class="token operator">-</span>bottom<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>25rem<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token operator">&amp;</span> span <span class="token punctuation">{</span>
                <span class="token literal-property property">float</span><span class="token operator">:</span> right<span class="token punctuation">;</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">777</span><span class="token punctuation">;</span>
                font<span class="token operator">-</span>size<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token operator">&amp;</span><span class="token operator">-</span>receive <span class="token punctuation">{</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> 250px<span class="token punctuation">;</span>
            <span class="token literal-property property">float</span><span class="token operator">:</span> left<span class="token punctuation">;</span>
            <span class="token literal-property property">background</span><span class="token operator">:</span> white<span class="token punctuation">;</span>
            <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px 20px<span class="token punctuation">;</span>
            border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
            box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> 10px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.015</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            margin<span class="token operator">-</span>bottom<span class="token operator">:</span> 14px<span class="token punctuation">;</span>
            <span class="token operator">&amp;</span> p <span class="token punctuation">{</span>
                <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">444</span><span class="token punctuation">;</span>
                font<span class="token operator">-</span>size<span class="token operator">:</span> 14px<span class="token punctuation">;</span>
                margin<span class="token operator">-</span>bottom<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>25rem<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token operator">&amp;</span> span <span class="token punctuation">{</span>
                <span class="token literal-property property">float</span><span class="token operator">:</span> right<span class="token punctuation">;</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">777</span><span class="token punctuation">;</span>
                font<span class="token operator">-</span>size<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token operator">&amp;</span><span class="token operator">:</span><span class="token operator">:</span><span class="token operator">-</span>webkit<span class="token operator">-</span>scrollbar <span class="token punctuation">{</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> 5px<span class="token punctuation">;</span>
            <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token operator">&amp;</span><span class="token operator">-</span>footer <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
        <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
        <span class="token operator">&amp;</span> button <span class="token punctuation">{</span>
            <span class="token literal-property property">border</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
            <span class="token literal-property property">padding</span><span class="token operator">:</span> 16px<span class="token punctuation">;</span>
            font<span class="token operator">-</span>size<span class="token operator">:</span> 14px<span class="token punctuation">;</span>
            <span class="token literal-property property">background</span><span class="token operator">:</span> white<span class="token punctuation">;</span>
            <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
            <span class="token operator">&amp;</span><span class="token operator">:</span>focus <span class="token punctuation">{</span>
                <span class="token literal-property property">outline</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token operator">&amp;</span> input <span class="token punctuation">{</span>
            <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
            <span class="token literal-property property">border</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
            <span class="token operator">-</span>webkit<span class="token operator">-</span>appearance<span class="token operator">:</span> none<span class="token punctuation">;</span>
            border<span class="token operator">-</span>radius<span class="token operator">:</span> 50px<span class="token punctuation">;</span>
            <span class="token literal-property property">background</span><span class="token operator">:</span> whitesmoke<span class="token punctuation">;</span>
            <span class="token literal-property property">margin</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
            font<span class="token operator">-</span>family<span class="token operator">:</span> ubuntu<span class="token punctuation">;</span>
            font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">;</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">444</span><span class="token punctuation">;</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> 280px<span class="token punctuation">;</span>
            <span class="token operator">&amp;</span><span class="token operator">:</span>focus <span class="token punctuation">{</span>
                <span class="token literal-property property">outline</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token operator">&amp;</span> <span class="token punctuation">.</span>send <span class="token punctuation">{</span>
            vertical<span class="token operator">-</span>align<span class="token operator">:</span> middle<span class="token punctuation">;</span>
            align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
            justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
            <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0px<span class="token punctuation">,</span> 20px<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>chat<span class="token operator">-</span>button <span class="token punctuation">{</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 25px 16px<span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #2C50EF<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 120px<span class="token punctuation">;</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
    <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> 15px<span class="token punctuation">;</span>
    border<span class="token operator">-</span>top<span class="token operator">-</span>left<span class="token operator">-</span>radius<span class="token operator">:</span> 25px<span class="token punctuation">;</span>
    border<span class="token operator">-</span>top<span class="token operator">-</span>right<span class="token operator">-</span>radius<span class="token operator">:</span> 25px<span class="token punctuation">;</span>
    border<span class="token operator">-</span>bottom<span class="token operator">-</span>left<span class="token operator">-</span>radius<span class="token operator">:</span> 25px<span class="token punctuation">;</span>
    box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> 2px 15px <span class="token function">rgba</span><span class="token punctuation">(</span>#2C50EF<span class="token punctuation">,</span> <span class="token number">0.21</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
    <span class="token operator">&amp;</span> span <span class="token punctuation">{</span>
        <span class="token operator">&amp;</span><span class="token operator">:</span><span class="token operator">:</span>before <span class="token punctuation">{</span>
            <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> 15px<span class="token punctuation">;</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> 15px<span class="token punctuation">;</span>
            <span class="token literal-property property">background</span><span class="token operator">:</span> #47cf73<span class="token punctuation">;</span>
            <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
            <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span>7px<span class="token punctuation">)</span><span class="token punctuation">;</span>
            border<span class="token operator">-</span>radius<span class="token operator">:</span> 15px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token operator">&amp;</span><span class="token operator">:</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
            <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"Message Us"</span><span class="token punctuation">;</span>
            font<span class="token operator">-</span>size<span class="token operator">:</span> 14px<span class="token punctuation">;</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> white<span class="token punctuation">;</span>
            <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
            <span class="token literal-property property">left</span><span class="token operator">:</span> 50px<span class="token punctuation">;</span>
            <span class="token literal-property property">top</span><span class="token operator">:</span> 18px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>modal <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> fixed<span class="token punctuation">;</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">visibility</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">1.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">transition</span><span class="token operator">:</span> visibility 0s linear <span class="token number">0</span><span class="token punctuation">.</span>25s<span class="token punctuation">,</span> opacity <span class="token number">0</span><span class="token punctuation">.</span>25s 0s<span class="token punctuation">,</span> transform <span class="token number">0</span><span class="token punctuation">.</span>25s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>modal<span class="token operator">-</span>content <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> white<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 1rem <span class="token number">1</span><span class="token punctuation">.</span>5rem<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 24rem<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>5rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>modal<span class="token operator">-</span>close<span class="token operator">-</span>button <span class="token punctuation">{</span>
    <span class="token literal-property property">float</span><span class="token operator">:</span> right<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>5rem<span class="token punctuation">;</span>
    line<span class="token operator">-</span>height<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>5rem<span class="token punctuation">;</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>25rem<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> lightgray<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>close<span class="token operator">-</span>button<span class="token operator">:</span>hover <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> darkgray<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>show<span class="token operator">-</span>modal <span class="token punctuation">{</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token literal-property property">visibility</span><span class="token operator">:</span> visible<span class="token punctuation">;</span>
    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">transition</span><span class="token operator">:</span> visibility 0s linear 0s<span class="token punctuation">,</span> opacity <span class="token number">0</span><span class="token punctuation">.</span>25s 0s<span class="token punctuation">,</span> transform <span class="token number">0</span><span class="token punctuation">.</span>25s<span class="token punctuation">;</span>
    z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
@media screen only <span class="token function">and</span><span class="token punctuation">(</span><span class="token parameter">max<span class="token operator">-</span>width<span class="token operator">:</span> 450px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span>chat<span class="token operator">-</span>box <span class="token punctuation">{</span>
        min<span class="token operator">-</span>width<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span> <span class="token operator">!</span>important<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Step1: 먼저 구글 &quot;Raleway&quot; 글꼴을 가져와서 챗봇 사용자 인터페이스에서 사용할 수 있도록 합니다.</p>
<p>웹페이지에 기본 스타일을 적용하겠습니다. background 속성을 사용하여 배경을 &quot;연한 파랑&quot;으로 설정하고, font-family 속성을 사용하여 글꼴을 &quot;Raleway&quot;로 변경하고, padding 및 margin을 &quot;제로&quot;로 설정하겠습니다.</p>
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
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'https://fonts.googleapis.com/css?family=Raleway|Ubuntu&amp;display=swap'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #E8EBF5<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> Raleway<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Step2: 높이와 너비를 클래스 선택자 (.chat-box)를 사용하여 각각 &quot;90%&quot;와 &quot;400px&quot;로 조정하고, position 속성을 &quot;absolute&quot;로 설정합니다. 오버플로우는 overflow 속성을 사용하여 &quot;hidden&quot;으로 구성했습니다.</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.chat-box</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -ms-flexbox<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
    <span class="token property">-webkit-box-direction</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
    <span class="token property">-ms-flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 15<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 10px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.005<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
    <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.chat-box-header</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 8%<span class="token punctuation">;</span>
    <span class="token property">border-top-left-radius</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
    <span class="token property">border-top-right-radius</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> .5em 0<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 3px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> .2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 3px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> .2<span class="token punctuation">)</span><span class="token punctuation">,</span> 0 -1px 10px <span class="token function">rgba</span><span class="token punctuation">(</span>172<span class="token punctuation">,</span> 54<span class="token punctuation">,</span> 195<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 1px 10px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.025<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.chat-box-header h3</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.chat-box-header p</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 3.25<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.chat-box-body</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 75%<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
    <span class="token property">overflow-y</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-04-19-ChatbotTemplateUsingHTMLandCSS/img/ChatbotTemplateUsingHTMLandCSS_3.png" />
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
<p><strong>단계3:</strong> 이제 우리는 클래스 선택자(.chart-button)를 사용하여 버튼에 스타일을 추가할 것입니다. 우리는 패딩을 25px로 지정하고 배경색을 &quot;dark-blue&quot;로 설정하며 버튼의 너비는 &quot;120px&quot;로 지정하고 위치는 &quot;절대&quot;로 설정할 것입니다. Bottom 및 right 속성을 사용하여 아래 및 오른쪽으로부터 0의 공간을 남기겠습니다.</p>
<p>미디어 쿼리를 사용하여 챗봇 UI에 반응형 요소를 추가할 것입니다. 화면 크기가 정의된 너비 이하 또는 같을 경우 챗봇의 너비를 100%로 변경할 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>chat<span class="token operator">-</span>button <span class="token punctuation">{</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 25px 16px<span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #2C50EF<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 120px<span class="token punctuation">;</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
    <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> 15px<span class="token punctuation">;</span>
    border<span class="token operator">-</span>top<span class="token operator">-</span>left<span class="token operator">-</span>radius<span class="token operator">:</span> 25px<span class="token punctuation">;</span>
    border<span class="token operator">-</span>top<span class="token operator">-</span>right<span class="token operator">-</span>radius<span class="token operator">:</span> 25px<span class="token punctuation">;</span>
    border<span class="token operator">-</span>bottom<span class="token operator">-</span>left<span class="token operator">-</span>radius<span class="token operator">:</span> 25px<span class="token punctuation">;</span>
    box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> 2px 15px <span class="token function">rgba</span><span class="token punctuation">(</span>#2C50EF<span class="token punctuation">,</span> <span class="token number">.21</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
    <span class="token operator">&amp;</span> span <span class="token punctuation">{</span>
        <span class="token operator">&amp;</span><span class="token operator">:</span><span class="token operator">:</span>before <span class="token punctuation">{</span>
            <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> 15px<span class="token punctuation">;</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> 15px<span class="token punctuation">;</span>
            <span class="token literal-property property">background</span><span class="token operator">:</span> #47cf73<span class="token punctuation">;</span>
            <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
            <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span>7px<span class="token punctuation">)</span><span class="token punctuation">;</span>
            border<span class="token operator">-</span>radius<span class="token operator">:</span> 15px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token operator">&amp;</span><span class="token operator">:</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
            <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"Message Us"</span><span class="token punctuation">;</span>
            font<span class="token operator">-</span>size<span class="token operator">:</span> 14px<span class="token punctuation">;</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> white<span class="token punctuation">;</span>
            <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
            <span class="token literal-property property">left</span><span class="token operator">:</span> 50px<span class="token punctuation">;</span>
            <span class="token literal-property property">top</span><span class="token operator">:</span> 18px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>modal <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> fixed<span class="token punctuation">;</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">visibility</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">1.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">transition</span><span class="token operator">:</span> visibility 0s linear <span class="token number">0</span><span class="token punctuation">.</span>25s<span class="token punctuation">,</span> opacity <span class="token number">0</span><span class="token punctuation">.</span>25s 0s<span class="token punctuation">,</span> transform <span class="token number">0</span><span class="token punctuation">.</span>25s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>modal<span class="token operator">-</span>content <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> white<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 1rem <span class="token number">1</span><span class="token punctuation">.</span>5rem<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 24rem<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>5rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>modal<span class="token operator">-</span>close<span class="token operator">-</span>button <span class="token punctuation">{</span>
    <span class="token literal-property property">float</span><span class="token operator">:</span> right<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>5rem<span class="token punctuation">;</span>
    line<span class="token operator">-</span>height<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>5rem<span class="token punctuation">;</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>25rem<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> lightgray<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>close<span class="token operator">-</span>button<span class="token operator">:</span>hover <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> darkgray<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>show<span class="token operator">-</span>modal <span class="token punctuation">{</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token literal-property property">visibility</span><span class="token operator">:</span> visible<span class="token punctuation">;</span>
    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">transition</span><span class="token operator">:</span> visibility 0s linear 0s<span class="token punctuation">,</span> opacity <span class="token number">0</span><span class="token punctuation">.</span>25s 0s<span class="token punctuation">,</span> transform <span class="token number">0</span><span class="token punctuation">.</span>25s<span class="token punctuation">;</span>
    z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
@media screen only <span class="token function">and</span><span class="token punctuation">(</span><span class="token parameter">max<span class="token operator">-</span>width<span class="token operator">:</span> 450px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span>chat<span class="token operator">-</span>box <span class="token punctuation">{</span>
        min<span class="token operator">-</span>width<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span> <span class="token operator">!</span>important<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<img src="@source/docs/Tech/2024-04-19-ChatbotTemplateUsingHTMLandCSS/img/ChatbotTemplateUsingHTMLandCSS_4.png" />
<h1 id="챗봇-템플릿을-위한-javascript-코드" tabindex="-1"><a class="header-anchor" href="#챗봇-템플릿을-위한-javascript-코드" aria-hidden="true">#</a> 챗봇 템플릿을 위한 JavaScript 코드:-</h1>
<p>자바스크립트 부분에서는 많은 로직을 사용하지 않았습니다. 단지 login 버튼에 onclick 함수를 사용했습니다.</p>
<p>로그인 폼을 클릭하면 챗박스 UI 폼 페이지가 표시됩니다.</p>
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
<p>비슷하게, '취소' 버튼을 클릭하면 숨겨집니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'.chat-button'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'.chat-button'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token string-property property">"display"</span><span class="token operator">:</span> <span class="token string">"none"</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'.chat-box'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token string-property property">"visibility"</span><span class="token operator">:</span> <span class="token string">"visible"</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'.chat-box .chat-box-header p'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'.chat-button'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token string-property property">"display"</span><span class="token operator">:</span> <span class="token string">"block"</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'.chat-box'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token string-property property">"visibility"</span><span class="token operator">:</span> <span class="token string">"hidden"</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#addExtra"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".modal"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toggleClass</span><span class="token punctuation">(</span><span class="token string">"show-modal"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".modal-close-button"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".modal"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toggleClass</span><span class="token punctuation">(</span><span class="token string">"show-modal"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>코드의 시작 부분에서 채팅 버튼은 클릭 이벤트가 지정되어 있습니다.</p>
<p>이제 채팅 상자가 숨겨진 상태에서 채팅 버튼이 보이게 됩니다.</p>
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
<p>다음 코드 줄에는 .chat-box 헤더 p 요소에 대한 onclick 이벤트가 추가되어 있습니다. 그 이벤트가 트리거될 때, display 속성이 block에서 none으로 변경됩니다.</p>
<p>#addExtra를 클릭하면 마지막 코드 줄이 visibility 속성을 hidden에서 visible로 변경합니다.</p>
<p>사용자가 채팅 버튼을 누르면 코드에 의해 채팅 상자가 숨겨지고, 닫기 버튼을 클릭하면 다시 나타납니다.</p>
<p>이 블로그를 통해... Chatbot 템플릿을 설계하는 방법을 배웠습니다.</p>
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
<p>이제 여러분의 리뷰를 기다리고 있어요. 그래서, 블로그는 어땠나요, Learners?</p>
<p>만약 이와 같이 좀 더 깔끔한 블로그를 원하시면, CodewithRandom 블로그 사이트를 확인해주세요. 매일매일 학습할 수 있도록 우리와 함께해주세요.</p>
<p>이 주제를 이해하게 도와드릴 수 있었기를 바라며, 이 블로그에서 새로운 것을 배웠다면 좋겠어요. 어려움이 있으시다면 문제를 자유롭게 댓글로 남겨주세요. 그리고 만약 마음에 드셨다면, 댓글 섹션에서 사랑을 보여주시기 바랍니다. 이것이 블로거의 마음을 채워 기쁨을 주어 더 많고 새로운 블로그를 작성할 수 있게 해줍니다.</p>
<p>Instagram에서 저를 팔로우할 수 있습니다.</p>
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
<p><strong>@Ankit kumar</strong>님의 글</p>
<p><strong>@Abhishek dana</strong>님의 코드</p>
<h1 id="이-챗봇-템플릿을-위해-어떤-코드-편집기를-사용하시나요" tabindex="-1"><a class="header-anchor" href="#이-챗봇-템플릿을-위해-어떤-코드-편집기를-사용하시나요" aria-hidden="true">#</a> 이 챗봇 템플릿을 위해 어떤 코드 편집기를 사용하시나요?</h1>
<p>제가 개인적으로 추천하는 것은 VS Code Studio입니다. 사용하기 간편하고 직관적이에요.</p>
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
<h1 id="이-프로젝트는-반응형인가요" tabindex="-1"><a class="header-anchor" href="#이-프로젝트는-반응형인가요" aria-hidden="true">#</a> 이 프로젝트는 반응형인가요?</h1>
<p>네, 이 챗봇 템플릿 프로젝트는 반응형입니다.</p>
<h1 id="이-프로젝트를-만드는-데-외부-링크를-사용했나요" tabindex="-1"><a class="header-anchor" href="#이-프로젝트를-만드는-데-외부-링크를-사용했나요" aria-hidden="true">#</a> 이 프로젝트를 만드는 데 외부 링크를 사용했나요?</h1>
<p>네, 챗봇에서 아이콘을 표시하기 위해 Font-awesome 아이콘 CDN 링크를 사용했습니다.</p>
</div></template>
