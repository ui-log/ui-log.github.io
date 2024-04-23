<template><div><p><img src="@source/docs/Nextjs/2024-04-05-HowtoUseOpenAIAPIinReactJStoCreateaTextSummarizationTool/img/HowtoUseOpenAIAPIinReactJStoCreateaTextSummarizationTool_0.png" alt="How to Use OpenAI API in ReactJS to Create a Text Summarization Tool"></p>
<h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개:</h1>
<p>이 튜토리얼에서는 ReactJS를 사용하여 OpenAI의 API의 기능을 활용하여 텍스트 압축 도구를 만드는 방법을 배워보겠습니다. 이 안내서를 마치면 긴 텍스트를 간결한 요약으로 요약할 수있는 완전히 기능이 작동하는 응용 프로그램을 갖게 될 것입니다. 우리는 Tailwind CSS를 활용하여 응용 프로그램을 스타일링하고 시각적으로 매력적으로 만들 것입니다. 그러니 함께 시작해 봅시다!</p>
<h1 id="준비-사항" tabindex="-1"><a class="header-anchor" href="#준비-사항" aria-hidden="true">#</a> 준비 사항:</h1>
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
<li>ReactJS에 대한 기본 지식</li>
<li>HTML 및 CSS에 익숙함</li>
<li>OpenAI API 키 (여기에서 어떻게 얻는지 알아보세요: https://www.youtube.com/watch?v=bPG5d0o4BhU)</li>
</ul>
<p>단계 1: React 프로젝트 설정하기 먼저 터미널을 열고 프로젝트를 만들 디렉토리로 이동하세요. 다음 명령어를 실행하여 Tailwind CSS로 새 React 프로젝트를 만듭니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>react<span class="token operator">-</span>app my<span class="token operator">-</span>app
cd my<span class="token operator">-</span>app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>단계 2: Tailwind CSS 설치 및 구성하기 이제 Tailwind CSS를 개발 의존성으로 설치해 보겠습니다. 터미널에서 다음을 실행하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">-</span><span class="token constant">D</span> tailwindcss postcss autoprefixer
npx tailwindcss init <span class="token operator">-</span>p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>다음으로, tailwind.config.js 파일의 내용을 다음과 같이 교체해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"./src/**/*.{js,jsx,ts,tsx}"</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>src/index.css 파일을 열어 내용을 다음과 같이 교체해주세요:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@tailwind 기본 설정<span class="token punctuation">;</span>
@tailwind 구성요소<span class="token punctuation">;</span>
@tailwind 유틸리티<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3단계: 사용자 인터페이스 만들기 애플리케이션의 사용자 인터페이스를 만들어 봅시다. Tailwind CSS의 미리 만들어진 구성요소를 사용하여 프로세스를 가속화할 것입니다.</p>
<img src="@source/docs/Nextjs/2024-04-05-HowtoUseOpenAIAPIinReactJStoCreateaTextSummarizationTool/img/HowtoUseOpenAIAPIinReactJStoCreateaTextSummarizationTool_1.png" />
<p>src/App.js 파일의 내용을 다음 코드로 교체하십시오:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>content<span class="token punctuation">,</span> setContent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>summary<span class="token punctuation">,</span> setSummary<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">summarize</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> apiUrl <span class="token operator">=</span> <span class="token string">'https://api.openai.com/v1/chat/completions'</span>
    <span class="token keyword">const</span> apiKey <span class="token operator">=</span> <span class="token string">'YOUR_API_KEY'</span>
    <span class="token keyword">const</span> headers <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span><span class="token punctuation">,</span>
      <span class="token string-property property">'Authorization'</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>apiKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">'gpt-3.5-turbo'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">role</span><span class="token operator">:</span> <span class="token string">'system'</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'You are a helpful assistant. and you have to summarize the text provided by the user.'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">role</span><span class="token operator">:</span> <span class="token string">'user'</span><span class="token punctuation">,</span> content <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>apiUrl<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
      headers<span class="token punctuation">,</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> summary <span class="token operator">=</span> result<span class="token punctuation">.</span>choices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>message<span class="token punctuation">.</span>content
    <span class="token function">setSummary</span><span class="token punctuation">(</span>summary<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>header className<span class="token operator">=</span><span class="token string">"text-gray-600 body-font"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"/"</span> className<span class="token operator">=</span><span class="token string">"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">"ml-3 text-xl"</span><span class="token operator">></span>AyyazTech<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
          <span class="token operator">&lt;</span>nav className<span class="token operator">=</span><span class="token string">"md:ml-auto flex flex-wrap items-center text-base justify-center"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"/"</span> className<span class="token operator">=</span><span class="token string">"mr-5 hover:text-gray-900"</span><span class="token operator">></span>첫 번째 링크<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
            <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"/"</span> className<span class="token operator">=</span><span class="token string">"mr-5 hover:text-gray-900"</span><span class="token operator">></span>두 번째 링크<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
            <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"/"</span> className<span class="token operator">=</span><span class="token string">"mr-5 hover:text-gray-900"</span><span class="token operator">></span>세 번째 링크<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
            <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"/"</span> className<span class="token operator">=</span><span class="token string">"mr-5 hover:text-gray-900"</span><span class="token operator">></span>네 번째 링크<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">></span>
          <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token string">"inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"</span><span class="token operator">></span>버튼<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">></span>

      <span class="token operator">&lt;</span>section className<span class="token operator">=</span><span class="token string">"text-gray-600 body-font relative"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"container px-5 py-24 mx-auto"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex flex-col text-center w-full mb-12"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token string">"sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"</span><span class="token operator">></span><span class="token constant">AI</span> 요약 도구<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
            <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"lg:w-2/3 mx-auto leading-relaxed text-base"</span><span class="token operator">></span>
              이것은 어떤 텍스트든 몇 문장으로 요약할 수 있는 간단한 <span class="token constant">AI</span> 요약 도구입니다<span class="token punctuation">.</span> 아래 상자에 텍스트를 붙여넣고 요약을 받으려면 버튼을 클릭하십시오<span class="token punctuation">.</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"lg:w-1/2 md:w-2/3 mx-auto"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex flex-wrap -m-2"</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"p-2 w-full"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"relative"</span><span class="token operator">></span>
                  <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"message"</span> className<span class="token operator">=</span><span class="token string">"leading-7 text-sm text-gray-600"</span><span class="token operator">></span>내용<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
                  <span class="token operator">&lt;</span>textarea
                    value<span class="token operator">=</span><span class="token punctuation">{</span>content<span class="token punctuation">}</span>
                    onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token function">setContent</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
                    id<span class="token operator">=</span><span class="token string">"message"</span> name<span class="token operator">=</span><span class="token string">"message"</span> className<span class="token operator">=</span><span class="token string">"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>textarea<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
              <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"p-2 w-full"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>summarize<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">"flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"</span><span class="token operator">></span>요약<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>

      <span class="token punctuation">{</span><span class="token comment">/* Summary */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>hr <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>section className<span class="token operator">=</span><span class="token string">"text-gray-600 body-font"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"container px-5 py-24 mx-auto"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex flex-col text-center w-full mb-20"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token string">"sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"</span><span class="token operator">></span>요약<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
            <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"lg:w-2/3 mx-auto leading-relaxed text-base"</span><span class="token operator">></span>
              <span class="token punctuation">{</span>summary<span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Step 4: OpenAI API와 연동하기 이제 애플리케이션을 OpenAI API와 연결하여 요약을 생성해보겠습니다. 아래 코드를 handleSummarize 함수 안에 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> apiKey <span class="token operator">=</span> <span class="token string">'YOUR_API_KEY'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">'https://api.openai.com/v1/chat/completions'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> headers <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span><span class="token punctuation">,</span>
  <span class="token string-property property">'Authorization'</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>apiKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">'gpt-3.5-turbo'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">role</span><span class="token operator">:</span> <span class="token string">'system'</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'You are a helpful assistant that summarizes text.'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">role</span><span class="token operator">:</span> <span class="token string">'user'</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> content <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> headers<span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> summary <span class="token operator">=</span> data<span class="token punctuation">.</span>choices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>message<span class="token punctuation">.</span>content<span class="token punctuation">;</span>
    <span class="token function">setSummary</span><span class="token punctuation">(</span>summary<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>YOUR_API_KEY</code>를 실제 OpenAI API 키로 대체하십시오.```</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-HowtoUseOpenAIAPIinReactJStoCreateaTextSummarizationTool/img/HowtoUseOpenAIAPIinReactJStoCreateaTextSummarizationTool_2.png" alt="이미지"></p>
<p>단계 5: 요약 도구 테스트<br>
터미널에서 npm start를 실행하여 React 애플리케이션을 시작하십시오. 브라우저를 열고 http://localhost:3000 으로 이동하십시오. 그러면 요약 도구가 제대로 작동하는 것을 확인할 수 있습니다!</p>
<p>텍스트 영역에 긴 단락을 붙여넣고 &quot;Summarize&quot; 버튼을 클릭해보세요. OpenAI API가 텍스트를 처리하고 간결한 요약을 생성한 다음 아래에 표시될 것입니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtoUseOpenAIAPIinReactJStoCreateaTextSummarizationTool/img/HowtoUseOpenAIAPIinReactJStoCreateaTextSummarizationTool_3.png" alt="이미지"></p>
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
<p>결론: 축하드립니다! ReactJS와 OpenAI API를 사용하여 텍스트 요약 도구를 성공적으로 만들었습니다. 이 강좌는 인공 지능과 웹 개발을 결합하여 유용한 애플리케이션을 만드는 능력을 보여줍니다.</p>
<p>이 튜토리얼이 도움이 되었다면, 더 흥미로운 콘텐츨르 제공하는 제 YouTube 채널을 구독해 보시기 바랍니다. 댓글을 남겨주시고 향후 영상에 대한 생각이나 제안을 공유해 주세요.</p>
<p>좋은 코딩 되세요!</p>
<p>관련 동영상:</p>
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
<li>코더들을 위한 창조자들: ChatGPT 4 Vision의 반드시 볼 가치 있는 9가지 활용법! (https://www.youtube.com/watch?v=qN9CiYmfQIM)</li>
<li>React &amp; Tailwind CSS: ChatGPT 4에 안내받은 퀴즈 앱 만들기 (https://www.youtube.com/watch?v=-Y_khYHLTr4)</li>
<li>React &amp; Tailwind CSS: ChatGPT에 의해 안내받는 빠른 이미지 편집기 만들기 (https://www.youtube.com/watch?v=14-Bkt17i1M)</li>
</ul>
<p>GITHUB 저장소: https://github.com/ayyazzafar/reactjs_17_tutorials_code</p>
</div></template>
