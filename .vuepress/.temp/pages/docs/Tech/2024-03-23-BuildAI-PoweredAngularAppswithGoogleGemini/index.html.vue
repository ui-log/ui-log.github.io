<template><div><p>구글 젬니니를 Angular 애플리케이션에 통합하는 단계별 가이드입니다.</p>
<p><img src="@source/docs/Tech/2024-03-23-BuildAI-PoweredAngularAppswithGoogleGemini/img/Build-AI-Powered-Angular-Apps-with-Google-Gemini_0.png" alt="Gemini Image"></p>
<p>이 게시물에서는 Angular를 사용하여 AI가 가능한 어플리케이션의 차세대를 만들기 위해 젬니 API에 액세스하는 방법을 배울 것입니다.</p>
<p>우리는 공식 클라이언트를 통해 젬니 Pro 및 젬니 Pro Visual을 테스트하기 위한 간단한 어플리케이션을 만들 것입니다. 추가로 Vertex AI를 REST API를 통해 사용하는 방법도 보여드릴 예정입니다.</p>
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
<p>다음 내용을 다룰 것입니다:</p>
<ul>
<li>Google Gemini 소개</li>
<li>Google AI Studio에서 API 키 가져오기</li>
<li>Angular 애플리케이션 생성하기</li>
<li>텍스트만 있는 입력(텍스트)을 이용해 텍스트 생성하기</li>
<li>텍스트와 이미지가 있는 입력(멀티모달)을 이용해 텍스트 생성하기</li>
<li>다중 대화를 구축하기(채팅)</li>
<li>스트리밍을 이용해 콘텐츠 생성하기(스트림)</li>
<li>보너스: REST API를 통해 Vertex AI를 이용해 AI 콘텐츠 생성하기</li>
<li>코드 실행하고 응답 확인하기</li>
<li>결론</li>
</ul>
<h1 id="google-gemini-소개" tabindex="-1"><a class="header-anchor" href="#google-gemini-소개" aria-hidden="true">#</a> Google Gemini 소개</h1>
<p>Google Gemini은 Google AI가 만든 최신 AI 기능을 제공하는 대형 언어 모델(문장 집합) 가족입니다. Gemini 모델은 다음을 포함합니다:</p>
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
<li>Gemini Ultra. 가장 큰 크기에 가장 강력한 모델로, 코딩, 논리적 추론 및 창의적 협업과 같은 복잡한 작업에 능숙합니다. Gemini Advanced(이전 Bard)를 통해 이용 가능합니다.</li>
<li>Gemini Pro. 다양한 작업에 최적화된 중간 크기 모델로, Ultra와 유사한 성능을 제공합니다. Gemini Chatbot 및 Google Workspace와 Google Cloud에서 이용 가능합니다. Gemini Pro 1.5는 긴 문맥 이해에 대한 혁신을 포함하여, 텍스트, 코드, 이미지, 오디오 및 비디오를 포함한 백만 개의 토큰까지의 개선된 성능을 제공합니다.</li>
<li>Gemini Nano. 개별 사용을 위해 설계된 가벼운 모델로, AI 기능을 모바일 폰 및 소형 기기에 제공합니다. Pixel 8 및 Samsung S24 시리즈에서 이용 가능합니다.</li>
<li>Gemma. Gemini에서 영감을 받은 오픈 소스 모델로, 작은 크기에서 최첨단 성능을 제공하며 책임 있는 AI 원칙에 따라 디자인되었습니다.</li>
</ul>
<h1 id="google-ai-studio에서-api-키-받는-방법" tabindex="-1"><a class="header-anchor" href="#google-ai-studio에서-api-키-받는-방법" aria-hidden="true">#</a> Google AI Studio에서 API 키 받는 방법</h1>
<p>aistudio.google.com에 가서 API 키를 생성하세요. 미국을 기반으로 하지 않는 경우, 전 세계적으로 이용 가능한 Vertex AI를 사용하거나 VPN 서비스를 사용할 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-03-23-BuildAI-PoweredAngularAppswithGoogleGemini/img/Build-AI-Powered-Angular-Apps-with-Google-Gemini_1.png" alt="이미지"></p>
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
<h1 id="angular-애플리케이션-생성하기" tabindex="-1"><a class="header-anchor" href="#angular-애플리케이션-생성하기" aria-hidden="true">#</a> Angular 애플리케이션 생성하기</h1>
<p>Angular CLI를 사용하여 새 애플리케이션을 생성하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>ng <span class="token keyword">new</span> <span class="token class-name">google</span><span class="token operator">-</span>ai<span class="token operator">-</span>gemini<span class="token operator">-</span>angular
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 명령은 최신 Angular 버전으로 새 프로젝트의 틀을 만들어줍니다.</p>
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
<h2 id="프로젝트-설정하기" tabindex="-1"><a class="header-anchor" href="#프로젝트-설정하기" aria-hidden="true">#</a> 프로젝트 설정하기</h2>
<p>새로운 환경을 추가하려면 다음 명령을 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>ng g environments
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이렇게 하면 개발과 프로덕션용으로 다음과 같은 파일이 생성됩니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>src <span class="token operator">/</span> environments <span class="token operator">/</span> environment<span class="token punctuation">.</span>development<span class="token punctuation">.</span>ts<span class="token punctuation">;</span>
src <span class="token operator">/</span> environments <span class="token operator">/</span> environment<span class="token punctuation">.</span>ts<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>개발 파일을 편집하여 API 키를 포함시킵니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/environments/environment.development.ts</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> environment <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">API_KEY</span><span class="token operator">:</span> <span class="token string">"&lt;당신의-API-키>"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="google-ai-javascript-sdk" tabindex="-1"><a class="header-anchor" href="#google-ai-javascript-sdk" aria-hidden="true">#</a> Google AI JavaScript SDK</h1>
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
<p>이것은 Gemini 모델에 액세스하기 위한 공식 클라이언트입니다. 우리는 이를 사용하여 다음을 할 것입니다:</p>
<ul>
<li>텍스트만 있는 입력으로부터 텍스트 생성 (텍스트)</li>
<li>텍스트 및 이미지 입력으로부터 텍스트 생성 (멀티모달)</li>
<li>다중 턴 대화 구축 (채팅)</li>
<li>스트리밍을 사용하여 생성된 콘텐츠 생성 (스트림)</li>
</ul>
<p>프로젝트에 이 패키지를 추가해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install @google<span class="token operator">/</span>generative<span class="token operator">-</span>ai
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
<h1 id="모델-초기화하기" tabindex="-1"><a class="header-anchor" href="#모델-초기화하기" aria-hidden="true">#</a> 모델 초기화하기</h1>
<p>저희 Gemini을 호출하기 전에 모델 초기화 과정을 거쳐야 합니다. 이 단계에는 다음과 같은 작업이 포함됩니다:</p>
<ul>
<li>API 키로 GoogleGenerativeAI 클라이언트 초기화</li>
<li>Gemini 모델 선택: gemini-pro 또는 gemini-pro-vision</li>
<li>safetySettings, temperature, top_p, top_k 및 maxOutputTokens와 같은 모델 매개변수 설정</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  GoogleGenerativeAI<span class="token punctuation">,</span> HarmBlockThreshold<span class="token punctuation">,</span> HarmCategory
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@google/generative-ai'</span><span class="token punctuation">;</span>

<span class="token operator">...</span>
<span class="token keyword">const</span> genAI <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GoogleGenerativeAI</span><span class="token punctuation">(</span>environment<span class="token punctuation">.</span><span class="token constant">API_KEY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> generationConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">safetySettings</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">category</span><span class="token operator">:</span> HarmCategory<span class="token punctuation">.</span><span class="token constant">HARM_CATEGORY_HARASSMENT</span><span class="token punctuation">,</span>
      <span class="token literal-property property">threshold</span><span class="token operator">:</span> HarmBlockThreshold<span class="token punctuation">.</span><span class="token constant">BLOCK_LOW_AND_ABOVE</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">temperature</span><span class="token operator">:</span> <span class="token number">0.9</span><span class="token punctuation">,</span>
  <span class="token literal-property property">top_p</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">top_k</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
  <span class="token literal-property property">maxOutputTokens</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">// 출력 제한</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> model <span class="token operator">=</span> genAI<span class="token punctuation">.</span><span class="token function">getGenerativeModel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">'gemini-pro'</span><span class="token punctuation">,</span> <span class="token comment">// 또는 'gemini-pro-vision'</span>
  <span class="token operator">...</span>generationConfig<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>안전 설정에서는 기본 설정(중간 또는 높음 차단)을 사용하거나 필요에 따라 조정할 수 있습니다. 예를 들어, 우리는 괴롭힘에 대한 임계값을 높여 낮은 확률 이상의 결과를 차단해 안전성을 높였습니다. 더 자세한 설명은 여기에서 확인할 수 있습니다.</p>
<p>이것들은 모든 모델과 기본 설정입니다. 분당 요청 제한이 있습니다. 모델 매개변수에 대해 더 자세히 알아보세요.</p>
<h1 id="텍스트-입력만을-사용하여-텍스트-생성-text" tabindex="-1"><a class="header-anchor" href="#텍스트-입력만을-사용하여-텍스트-생성-text" aria-hidden="true">#</a> 텍스트 입력만을 사용하여 텍스트 생성(text)</h1>
<p>아래에서 Gemini Pro를 텍스트 입력만으로 보여주는 코드 조각을 확인할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token function">TestGeminiPro</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 모델 초기화를 간결히하기 위해 생략합니다.</span>

  <span class="token keyword">const</span> prompt <span class="token operator">=</span> <span class="token string">'이름이 있는 가장 큰 숫자는 무엇인가요?'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> model<span class="token punctuation">.</span><span class="token function">generateContent</span><span class="token punctuation">(</span>prompt<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> result<span class="token punctuation">.</span>response<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="텍스트-및-이미지-입력에서-텍스트-생성-멀티모달" tabindex="-1"><a class="header-anchor" href="#텍스트-및-이미지-입력에서-텍스트-생성-멀티모달" aria-hidden="true">#</a> 텍스트 및 이미지 입력에서 텍스트 생성 (멀티모달)</h1>
<p>이 예시는 Gemini Pro Vision을 텍스트 및 이미지를 입력으로 사용하는 방법을 보여줍니다. 편리성을 위해 src/assets에 이미지를 사용하고 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token function">TestGeminiProVisionImages</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> imageBase64 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fileConversionService<span class="token punctuation">.</span><span class="token function">convertToBase64</span><span class="token punctuation">(</span>
      <span class="token string">'assets/baked_goods_2.jpeg'</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Base64로 변환 성공 여부 확인</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> imageBase64 <span class="token operator">!==</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'이미지를 Base64로 변환하는 데 실패했습니다.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 모델 초기화를 간결히하기 위해 생략합니다.</span>
    <span class="token keyword">let</span> prompt <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">inlineData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">mimeType</span><span class="token operator">:</span> <span class="token string">'image/jpeg'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> imageBase64<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'요리 레시피를 제공해주세요.'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> model<span class="token punctuation">.</span><span class="token function">generateContent</span><span class="token punctuation">(</span>prompt<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> result<span class="token punctuation">.</span>response<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'파일을 Base64로 변환하는 중 오류 발생'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>입력 이미지를 Base64로 변환하려면 아래의 FileConversionService 또는 외부 라이브러리를 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// file-conversion.service.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Injectable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@angular/core'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> HttpClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@angular/common/http'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> firstValueFrom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'rxjs'</span><span class="token punctuation">;</span>

@<span class="token function">Injectable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">providedIn</span><span class="token operator">:</span> <span class="token string">'root'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">FileConversionService</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">private</span> <span class="token literal-property property">http</span><span class="token operator">:</span> HttpClient</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">async</span> <span class="token function">convertToBase64</span><span class="token punctuation">(</span>filePath<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span>string <span class="token operator">|</span> ArrayBuffer <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">firstValueFrom</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">'blob'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      reader<span class="token punctuation">.</span><span class="token function-variable function">onloadend</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> base64data <span class="token operator">=</span> reader<span class="token punctuation">.</span>result <span class="token keyword">as</span> string<span class="token punctuation">;</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>base64data<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>base64data<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Base64 데이터만 추출</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      reader<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      reader<span class="token punctuation">.</span><span class="token function">readAsDataURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Gemini을 위한 이미지 요구 사항:</p>
<ul>
<li>지원하는 MIME 유형: image/png, image/jpeg, image/webp, image/heic 및 image/heif.</li>
<li>최대 16개의 이미지.</li>
<li>텍스트와 이미지를 포함하여 최대 4MB.</li>
<li>큰 이미지는 원본 비율을 유지하면서 3072 x 3072 픽셀에 맞게 축소됩니다.</li>
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
<h1 id="다중-턴-대화-구축하기-채팅" tabindex="-1"><a class="header-anchor" href="#다중-턴-대화-구축하기-채팅" aria-hidden="true">#</a> 다중 턴 대화 구축하기 (채팅)</h1>
<p>이 예제는 Gemini Pro를 사용하여 다중 턴 대화를 구축하는 방법을 보여줍니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token function">TestGeminiProChat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 명료성을 위해 모델 초기화 부분 생략</span>

  <span class="token keyword">const</span> chat <span class="token operator">=</span> model<span class="token punctuation">.</span><span class="token function">startChat</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">role</span><span class="token operator">:</span> <span class="token string">"user"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">parts</span><span class="token operator">:</span> <span class="token string">"안녕하세요!"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">role</span><span class="token operator">:</span> <span class="token string">"model"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">parts</span><span class="token operator">:</span> <span class="token string">"만나서 반가워요. 무엇을 알고 싶으세요?"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">generationConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">maxOutputTokens</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> prompt <span class="token operator">=</span> <span class="token string">'이름이 있는 가장 큰 숫자는 무엇인가요? 간단히 대답해주세요.'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> chat<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>prompt<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> result<span class="token punctuation">.</span>response<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="스트리밍을-사용하여-생성된-내용을-생성하기" tabindex="-1"><a class="header-anchor" href="#스트리밍을-사용하여-생성된-내용을-생성하기" aria-hidden="true">#</a> 스트리밍을 사용하여 생성된 내용을 생성하기</h1>
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
<p>이 예시는 Gemini Pro를 사용하여 스트리밍을 통해 컨텐츠를 생성하는 방법을 보여줍니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token function">TestGeminiProStreaming</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 간략히 표시하기 위해 모델 초기화 누락</span>

  <span class="token keyword">const</span> prompt <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">contents</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">role</span><span class="token operator">:</span> <span class="token string">'user'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">parts</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'시를 생성하세요.'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> streamingResp <span class="token operator">=</span> <span class="token keyword">await</span> model<span class="token punctuation">.</span><span class="token function">generateContentStream</span><span class="token punctuation">(</span>prompt<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token keyword">await</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> streamingResp<span class="token punctuation">.</span>stream<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'스트림 청크: '</span> <span class="token operator">+</span> item<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'종합 응답: '</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">await</span> streamingResp<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>generateContentStream의 결과로 각 청크 스트림이 생성될 때마다 해당 스트림 청크를 읽을 수 있는 객체를 받게 됩니다.</p>
<h1 id="보너스-rest-api를-통해-vertex-ai를-사용하여-ai-컨텐츠를-생성하세요" tabindex="-1"><a class="header-anchor" href="#보너스-rest-api를-통해-vertex-ai를-사용하여-ai-컨텐츠를-생성하세요" aria-hidden="true">#</a> 보너스: REST API를 통해 Vertex AI를 사용하여 AI 컨텐츠를 생성하세요.</h1>
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
<p>공식 JavaScript 클라이언트 대신 Vertex AI에서 제공하는 Gemini REST API를 사용할 수도 있습니다. Vertex AI는 Google Cloud에서 제공되는 관리형 서비스로, Gemini를 포함한 AI 모델을 훈련하고 배포할 수 있는 완전한 AI 플랫폼입니다.</p>
<p>REST API에 대한 접속 보안을 강화하려면 계정을 만들고 응용 프로그램용 자격 증명을 받아 액세스 권한을 부여해야 합니다. 아래는 그 방법입니다.</p>
<ul>
<li>Google Cloud 계정을 만들고 과금을 활성화합니다. 이렇게 하면 Vertex AI에 액세스할 수 있습니다.</li>
<li>Cloud 콘솔에서 새 프로젝트를 만듭니다. 프로젝트 ID를 메모해 둡니다.</li>
<li>프로젝트에 Vertex AI API를 활성화합니다.</li>
<li>gcloud CLI를 설치하고 gcloud auth print-access-token을 실행합니다. 출력된 액세스 토큰을 저장합니다. 이를 인증에 사용하게 됩니다.</li>
</ul>
<p>프로젝트 ID와 액세스 토큰을 얻으면, Angular 앱으로 계속 진행할 준비가 되었습니다. 모든 설정이 올바르게 완료되었는지 확인하려면 다음 curl 명령어를 시도해 볼 수 있습니다.</p>
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
<p>개발 파일을 편집하여 프로젝트 ID와 액세스 토큰을 포함해 주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/environments/environment.development.ts</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> environment <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">API_KEY</span><span class="token operator">:</span> <span class="token string">"&lt;YOUR-API-KEY>"</span><span class="token punctuation">,</span> <span class="token comment">// Google AI JavaScript SDK 액세스</span>
  <span class="token constant">PROJECT_ID</span><span class="token operator">:</span> <span class="token string">"&lt;YOUR-PROJECT-ID>"</span><span class="token punctuation">,</span> <span class="token comment">// Vertex AI 액세스</span>
  <span class="token constant">GCLOUD_AUTH_PRINT_ACCESS_TOKEN</span><span class="token operator">:</span> <span class="token string">"&lt;YOUR-GCLOUD-AUTH-PRINT-ACCESS-TOKEN>"</span><span class="token punctuation">,</span> <span class="token comment">// Vertex AI 액세스</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>REST API를 통해 요청을 보내려면 HttpClient 프로바이더를 포함해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// app.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> provideHttpClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@angular/common/http"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">appConfig</span><span class="token operator">:</span> ApplicationConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">providers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">provideRouter</span><span class="token punctuation">(</span>routes<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">provideHttpClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<p>이 가져오기를 통해 HttpClient를 모든 구성 요소 또는 서비스에 주입하여 웹 요청을 만들 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// app.component.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> HttpClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@angular/common/http'</span><span class="token punctuation">;</span>

@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">'app-root'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">standalone</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppComponent</span> <span class="token keyword">implements</span> <span class="token class-name">OnInit</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">public</span> <span class="token literal-property property">http</span><span class="token operator">:</span> HttpClient</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>REST API를 통해 Vertex AI에 액세스하려면 클라이언트가 없기 때문에 더 많은 작업을 해야합니다. 도움 없이는 요청을 구축하고 응답을 읽는 것이 조금 힘들 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token function">TestGeminiProWithVertexAIViaREST</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 문서: https://cloud.google.com/vertex-ai/docs/generative-ai/model-reference/gemini#request_body</span>
  <span class="token keyword">const</span> prompt <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildPrompt</span><span class="token punctuation">(</span><span class="token string">'이름이 있는 가장 큰 숫자는 무엇입니까?'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> endpoint <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">buildEndpointUrl</span><span class="token punctuation">(</span>environment<span class="token punctuation">.</span><span class="token constant">PROJECT_ID</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> headers <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAuthHeaders</span><span class="token punctuation">(</span>
    environment<span class="token punctuation">.</span><span class="token constant">GCLOUD_AUTH_PRINT_ACCESS_TOKEN</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>endpoint<span class="token punctuation">,</span> prompt<span class="token punctuation">,</span> <span class="token punctuation">{</span> headers <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">response</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>candidates<span class="token operator">?.</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>content<span class="token punctuation">.</span>parts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">buildPrompt</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">text</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">contents</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">role</span><span class="token operator">:</span> <span class="token string">'user'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">parts</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> text<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">safety_settings</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">'HARM_CATEGORY_SEXUALLY_EXPLICIT'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token string">'BLOCK_LOW_AND_ABOVE'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">generation_config</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">temperature</span><span class="token operator">:</span> <span class="token number">0.9</span><span class="token punctuation">,</span>
      <span class="token literal-property property">top_p</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">top_k</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
      <span class="token literal-property property">max_output_tokens</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">buildEndpointUrl</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">projectId</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token constant">BASE_URL</span> <span class="token operator">=</span> <span class="token string">'https://us-central1-aiplatform.googleapis.com/'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token constant">API_VERSION</span> <span class="token operator">=</span> <span class="token string">'v1'</span><span class="token punctuation">;</span> <span class="token comment">// 현재 시기에 따라 다를 수 있습니다</span>
  <span class="token keyword">const</span> <span class="token constant">MODEL</span> <span class="token operator">=</span> <span class="token string">'gemini-pro'</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token constant">BASE_URL</span><span class="token punctuation">;</span> <span class="token comment">// 기본 URL</span>
  url <span class="token operator">+=</span> <span class="token constant">API_VERSION</span><span class="token punctuation">;</span> <span class="token comment">// API 버전</span>
  url <span class="token operator">+=</span> <span class="token string">'/projects/'</span> <span class="token operator">+</span> projectId<span class="token punctuation">;</span> <span class="token comment">// 프로젝트 ID</span>
  url <span class="token operator">+=</span> <span class="token string">'/locations/us-central1'</span><span class="token punctuation">;</span> <span class="token comment">// Google 클라우드 리전</span>
  url <span class="token operator">+=</span> <span class="token string">'/publishers/google'</span><span class="token punctuation">;</span> <span class="token comment">// 출판사</span>
  url <span class="token operator">+=</span> <span class="token string">'/models/'</span> <span class="token operator">+</span> <span class="token constant">MODEL</span><span class="token punctuation">;</span> <span class="token comment">// 모델</span>
  url <span class="token operator">+=</span> <span class="token string">':generateContent'</span><span class="token punctuation">;</span> <span class="token comment">// 액션</span>
  <span class="token keyword">return</span> url<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">getAuthHeaders</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">accessToken</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> headers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HttpHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>
    <span class="token string">'Authorization'</span><span class="token punctuation">,</span>
    <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>accessToken<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> headers<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="코드-실행하기" tabindex="-1"><a class="header-anchor" href="#코드-실행하기" aria-hidden="true">#</a> 코드 실행하기</h1>
<p>GitHub 프로젝트에서 ngOnInit 내부에서 테스트하려는 코드 주석 처리를 해제하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">ngOnInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token comment">// Google AI</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">TestGeminiPro</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//this.TestGeminiProChat();</span>
  <span class="token comment">//this.TestGeminiProVisionImages();</span>
  <span class="token comment">//this.TestGeminiProStreaming();</span>

  <span class="token comment">// Vertex AI</span>
  <span class="token comment">//this.TestGeminiProWithVertexAIViaREST();</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>터미널에서 다음 명령을 실행하고 localhost:4200으로 이동하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>ng serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="응답-확인" tabindex="-1"><a class="header-anchor" href="#응답-확인" aria-hidden="true">#</a> 응답 확인</h1>
<p>응답을 확인하려면 브라우저의 콘솔 출력을 빠르게 확인할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>가장 큰 이름이 붙은 숫자는 구구올플렉스입니다<span class="token punctuation">.</span> 구구올플렉스는 <span class="token number">1</span> 뒤에 <span class="token number">100</span>개의 <span class="token number">0</span>이 따릅니다<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>축하합니다! 이제 Gemini 기능에 액세스할 수 있습니다.</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>이 튜토리얼을 완료함으로써 다음을 배웠습니다:</p>
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
<li>API 키를 얻고 Gemini API에 액세스하는 방법</li>
<li>텍스트 및 채팅을 사용하여 Gemini Pro를 호출하는 방법</li>
<li>Gemini Pro Vision을 위한 입력 이미지 처리 방법</li>
<li>보너스: REST API를 통해 Vertex AI를 사용하여 Gemini를 설정하고 호출하는 방법</li>
<li>응답 및 출력 처리하는 방법</li>
</ul>
<p>이제 Angular 앱에서 Gemini를 사용하여 고급 텍스트 생성과 같은 AI 기능을 구축하는 기본기가 마련되었습니다. 전체 코드는 GitHub에서 확인할 수 있습니다.</p>
<h1 id="더-복잡한-프로젝트를-보고-싶나요" tabindex="-1"><a class="header-anchor" href="#더-복잡한-프로젝트를-보고-싶나요" aria-hidden="true">#</a> 더 복잡한 프로젝트를 보고 싶나요?</h1>
<p>Angular Material, ngx-quill 및 ngx-markdown을 사용하여 풀 스케일 Gemini 챗봇을 구축했습니다. 텍스트, 채팅 및 멀티모달 기능을 보여줍니다.</p>
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
<p><img src="@source/docs/Tech/2024-03-23-BuildAI-PoweredAngularAppswithGoogleGemini/img/Build-AI-Powered-Angular-Apps-with-Google-Gemini_2.png" alt="이미지"></p>
<p>프로젝트를 fork하여 자유롭게 사용해보세요. 이 프로젝트를 좋아하신다면 별표를 눌러서 제 작업과 Angular 커뮤니티의 다른 기여자들에게 지원을 표시해주세요.</p>
<h1 id="읽어주셔서-감사합니다" tabindex="-1"><a class="header-anchor" href="#읽어주셔서-감사합니다" aria-hidden="true">#</a> 읽어주셔서 감사합니다!</h1>
<p>질문이 있으신가요? 아래 댓글을 남기거나 Twitter에서 @gerardsans로 연락해주세요.</p>
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
<h1 id="자원" tabindex="-1"><a class="header-anchor" href="#자원" aria-hidden="true">#</a> 자원</h1>
<ul>
<li>Google AI JavaScript SDK</li>
<li>Gemini on the Web</li>
<li>Vertex AI: Gemini REST API</li>
</ul>
</div></template>
