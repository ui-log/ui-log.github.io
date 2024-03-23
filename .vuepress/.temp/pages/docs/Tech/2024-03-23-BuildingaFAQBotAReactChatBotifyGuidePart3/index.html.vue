<template><div><p><img src="@source/docs/Tech/2024-03-23-BuildingaFAQBotAReactChatBotifyGuidePart3/img/Building-a-FAQ-Bot:-A-React-ChatBotify-Guide-(Part-3)_0.png" alt="FAQ Chatbot"></p>
<h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h1>
<p>우리의 포괄적인 안내서 시리즈인 &quot;FAQ Bot 구축: React ChatBotify 가이드&quot;의 세 번째 편에 오신 것을 환영합니다. 만약 당신이 반복되는 사용자 질문에 고민하는 일이 있다면, FAQ 챗봇의 혜택에 대해 고민한 적이 있을 것입니다. 이 부분에서는 사용자에게 자주 요청되는 정보를 전달하기 위한 맞춤형 FAQ 챗봇을 구축하는 방법을 살펴보겠습니다!</p>
<h1 id="빠른-요약" tabindex="-1"><a class="header-anchor" href="#빠른-요약" aria-hidden="true">#</a> 빠른 요약</h1>
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
<p>이 시리즈의 이전 부분에서는 제1부에서 설정 안내서를 제공하고 제2부에서 챗봇의 기본 외관 및 대화 구조를 설정하는 방법을 안내했습니다. 저희에 합류한 지 얼마 안 된 경우거나 이러한 기본 단계를 다시 확인해야 하는 경우 이전 단계를 확인해 주세요. 이 세그먼트는 이미 React ChatBotify 챗봇 설정이 되어 있다고 가정합니다. 설정이 되어 있지 않은 경우에는 먼저 해당 안내서를 방문해 주세요.</p>
<p>3부로 나아가면 챗봇의 가장 일반적인 사용 사례 중 하나인 FAQ 봇을 만드는 방법에 대해 살펴보겠습니다. 이 FAQ 봇은 응답을 체계화할 뿐만 아니라 사용자 만족도와 운영 효율성을 향상시킵니다. 이 안내서를 마치면 React ChatBotify를 사용하여 지능적인 FAQ 봇을 구현하는 방법에 대한 지식과 도구를 모두 갖추게 될 것입니다.</p>
<h1 id="옵션-만들기" tabindex="-1"><a class="header-anchor" href="#옵션-만들기" aria-hidden="true">#</a> 옵션 만들기</h1>
<p>React ChatBotify를 사용하여 FAQ에 답변하는 챗봇을 만드는 것은 매우 쉽습니다. 사실, 이미 이전 안내서에서 챗봇을 설정한 경우에는 이어서 쉽게 구축할 수 있습니다! 그러나 이 튜토리얼을 완료하기 위해 사용자를 맞이하는 챗봇이 있는 깨끗한 설정을 가정해 봅시다! 다음 코드 스니펫을 사용하여 이것을 달성할 수 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// MyChatBot.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ChatBot <span class="token keyword">from</span> <span class="token string">"react-chatbotify"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"react-chatbotify/dist/react-chatbotify.css"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MyChatBot</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> flow <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"안녕하세요, FAQ 봇입니다!"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"예시"</span><span class="token punctuation">,</span> <span class="token string">"깃허브"</span><span class="token punctuation">,</span> <span class="token string">"디스코드"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ChatBot <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MyChatBot<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>지금은 인사말만 하는 매우 단조로운 챗봇이 만들어졌습니다. 사용자에게 옵션을 제시하도록 챗봇을 개선해보겠습니다. 옵션 속성과 옵션 배열을 추가함으로써 사용자에게 빠르게 예시, 깃허브, 디스코드 세 가지 옵션을 보여줄 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// MyChatBot.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ChatBot <span class="token keyword">from</span> <span class="token string">"react-chatbotify"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"react-chatbotify/dist/react-chatbotify.css"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MyChatBot</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> flow <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"안녕하세요, FAQ 봇입니다!"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"예시"</span><span class="token punctuation">,</span> <span class="token string">"깃허브"</span><span class="token punctuation">,</span> <span class="token string">"디스코드"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ChatBot <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MyChatBot<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>단 한 가지 간단한 변경으로 챗봇이 사용자에게 클릭할 수 있는 옵션을 제공하도록 지시했습니다. 그러나 옵션을 클릭해도 챗봇에서 응답을 받지 못한다는 것을 알 수 있습니다. 이제 챗봇 응답을 어떻게 작성할 수 있는지 알아보겠습니다!</p>
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
<h1 id="응답-작성하기" tabindex="-1"><a class="header-anchor" href="#응답-작성하기" aria-hidden="true">#</a> 응답 작성하기</h1>
<p>응답을 제공하기 위해 먼저 사용자가 선택한 옵션을 처리해야 합니다. 사용자가 선택한 옵션을 처리하고 제일 처음 블록에서 경로가 지정되었는지 확인하기 위해 두 번째 process_options 블록을 생성하세요. 아래 코드 스니펫은 완전한 두 번째 블록을 보여줍니다. 걱정하지 마세요, 자세히 설명해 드릴 거에요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// MyChatBot.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ChatBot <span class="token keyword">from</span> <span class="token string">"react-chatbotify"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"react-chatbotify/dist/react-chatbotify.css"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MyChatBot</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> flow <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"안녕, FAQ 봇이에요!"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"예시"</span><span class="token punctuation">,</span> <span class="token string">"깃헙"</span><span class="token punctuation">,</span> <span class="token string">"디스코드"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"process_options"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">process_options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">message</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> link <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>params<span class="token punctuation">.</span>userInput<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">case</span> <span class="token string">"예시"</span><span class="token operator">:</span>
            link <span class="token operator">=</span> <span class="token string">"https://react-chatbotify.tjtanjin.com/docs/examples/basic_form"</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token string">"깃헙"</span><span class="token operator">:</span>
            link <span class="token operator">=</span> <span class="token string">"https://github.com/tjtanjin/react-chatbotify/"</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token string">"디스코드"</span><span class="token operator">:</span>
            link <span class="token operator">=</span> <span class="token string">"https://discord.gg/6R4DK4G5Zh"</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token keyword">default</span><span class="token operator">:</span>
            <span class="token keyword">return</span> <span class="token string">"unknown_input"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>link<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">.</span>userInput<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">로 보냈어요! 잠시 기다려 주세요!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ChatBot <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MyChatBot<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 process_options 블록에서 메시지 속성을 정의합니다. 그러나 메시지는 첫 블록에서 사용자가 선택한 입력에 따라 동적으로 결정됩니다. 먼저 메시지 속성이 params를 가져와서 애플리케이션 논리에 사용될 수 있는 값을 포함한다는 점을 주목하세요.</p>
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
<p>API 문서에는 어떤 값들에 접근할 수 있는지에 대한 전체 목록이 있습니다. 이 예시에서는 사용자가 시작 블록에서 선택한 옵션을 포함하는 userInput 값을 사용하고 있습니다. 위 예시에서는 userInput을 사용하여 사용자가 어떤 링크를 방문할지 결정하고, 사용자에게 잠시 기다리라고 안내한 후 1초의 지연 시간을 두고 해당 링크로 사용자를 보내고 있습니다.</p>
<p>또한, 챗봇을 루프시키려면 루프 블록을 간단히 추가하여 챗봇이 자체적으로 반복하도록 할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// MyChatBot.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ChatBot <span class="token keyword">from</span> <span class="token string">"react-chatbotify"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"react-chatbotify/dist/react-chatbotify.css"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MyChatBot</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> flow <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"안녕, 여기는 FAQ 봇이야!"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"예시"</span><span class="token punctuation">,</span> <span class="token string">"깃허브"</span><span class="token punctuation">,</span> <span class="token string">"디스코드"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"process_options"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">process_options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">message</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> link <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>params<span class="token punctuation">.</span>userInput<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">case</span> <span class="token string">"예시"</span><span class="token operator">:</span>
            link <span class="token operator">=</span> <span class="token string">"https://react-chatbotify.tjtanjin.com/docs/examples/basic_form"</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token string">"깃허브"</span><span class="token operator">:</span>
            link <span class="token operator">=</span> <span class="token string">"https://github.com/tjtanjin/react-chatbotify/"</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token string">"디스코드"</span><span class="token operator">:</span>
            link <span class="token operator">=</span> <span class="token string">"https://discord.gg/6R4DK4G5Zh"</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token keyword">default</span><span class="token operator">:</span>
            <span class="token keyword">return</span> <span class="token string">"unknown_input"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>link<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">잠시만 기다려! </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">.</span>userInput<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 페이지로 안내할게!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">transition</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"loop"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">loop</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"더 도움이 필요하신가요?"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"예시"</span><span class="token punctuation">,</span> <span class="token string">"깃허브"</span><span class="token punctuation">,</span> <span class="token string">"디스코드"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"process_options"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ChatBot <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MyChatBot<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>간단히 상기시켜 드리자면, 시작 블록을 제외한 다른 블록들은 원하는 대로 이름을 지을 수 있습니다. 그렇지만 위에서 보여준 process_options 및 loop 블록과 같이 설명적인 이름을 사용하는 것이 권장됩니다.</p>
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
<p>지금까지 안내를 면밀히 따라 왔다면, 라이브 예시에 표시된 것과 비슷한 FAQ 봇이 만들어진 상태일 것입니다:</p>
<p><img src="@source/docs/Tech/2024-03-23-BuildingaFAQBotAReactChatBotifyGuidePart3/img/Building-a-FAQ-Bot:-A-React-ChatBotify-Guide-(Part-3)_1.png" alt="FAQ 봇 라이브 예시"></p>
<p>라이브 예시와 차이점을 알 수 있겠지만, 이는 예시가 더 상세하고 동일한 결과를 얻기 위한 다양한 방법이 있기 때문입니다. 그러니 플레이그라운드를 활용하여 여러분에게 가장 적합한 방법을 찾아보세요!</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
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
<p>이 가이드에서는 React ChatBotify를 사용하여 FAQ 챗봇을 만드는 방법을 간단히 살펴보았어요. 다음 가이드에서는 챗봇과 Gemini 통합을 통해 동적 대화를 만드는 또 다른 흥미로운 사용 사례를 살펴볼 거에요!</p>
</div></template>
