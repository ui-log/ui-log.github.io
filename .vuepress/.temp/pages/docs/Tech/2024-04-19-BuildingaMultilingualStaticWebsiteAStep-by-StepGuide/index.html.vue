<template><div><p><img src="@source/docs/Tech/2024-04-19-BuildingaMultilingualStaticWebsiteAStep-by-StepGuide/img/BuildingaMultilingualStaticWebsiteAStep-by-StepGuide_0.png" alt="다국어 정적 웹사이트 구축: 단계별 가이드"></p>
<p>다국어 웹사이트란 두 개 이상의 언어로 컨텐츠를 제공하는 웹사이트를 말합니다. 이를 통해 더 넓은 관객에 접근하고 웹사이트의 SEO를 개선할 수 있습니다.</p>
<p>본 문서에서는 HTML, CSS, JavaScript를 사용하여 다국어를 지원하는 정적 웹사이트를 구축하는 과정을 안내해 드리겠습니다.</p>
<h1 id="기초-설정하기" tabindex="-1"><a class="header-anchor" href="#기초-설정하기" aria-hidden="true">#</a> 기초 설정하기</h1>
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
<p>우리 다국어 웹사이트를 구축하기 위한 기초를 다지는 것부터 시작해봐요. HTML 파일에서 <code v-pre>html</code> 태그 안에 적절한 언어 속성을 포함하여 기본 언어를 지정해야 해요. 예를 들어, 영어를 기본 언어로 설정하려면:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 이곳에 웹사이트 콘텐츠를 추가해주세요 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또한, 문자 인코딩과 뷰포트 설정을 위한 필수 <code v-pre>meta</code> 태그를 포함해야 해요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 다른 메타 태그 및 스타일시트 <span class="token operator">--</span><span class="token operator">></span>
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
<h1 id="언어-옵션-만들기" tabindex="-1"><a class="header-anchor" href="#언어-옵션-만들기" aria-hidden="true">#</a> 언어 옵션 만들기</h1>
<p>사용자가 언어를 전환할 수 있도록, 네비게이션 바에 언어 옵션을 통합해보겠습니다. 다음은 이를 실행하는 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>nav<span class="token operator">></span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"index.html"</span> onclick<span class="token operator">=</span><span class="token string">"changeLanguage('en')"</span><span class="token operator">></span>영어<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"index.html"</span> onclick<span class="token operator">=</span><span class="token string">"changeLanguage('ar')"</span><span class="token operator">></span>عربي<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="본문-내용-업데이트하기" tabindex="-1"><a class="header-anchor" href="#본문-내용-업데이트하기" aria-hidden="true">#</a> 본문 내용 업데이트하기</h1>
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
<p>당신의 웹사이트의 핵심인 메인 콘텐츠로 집중해봅시다. 여기에는 다양한 언어로 사이트에 대한 핵심 정보를 표시할 것입니다. 중요한 것은 JavaScript 코드가 선택된 언어에 따라 콘텐츠를 동적으로 업데이트하도록 하는 것입니다.</p>
<p>당신의 HTML 코드에서 메인 콘텐츠는 다음과 같이 구조화되어 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>main<span class="token operator">></span>
    <span class="token operator">&lt;</span>h1 data<span class="token operator">-</span>i18n<span class="token operator">=</span><span class="token string">"welcome_message"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
    <span class="token operator">&lt;</span>p data<span class="token operator">-</span>i18n<span class="token operator">=</span><span class="token string">"about_us"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서 <code v-pre>h1</code>과 <code v-pre>p</code> 태그의 data-i18n 속성은 이러한 요소를 언어별 콘텐츠로 표시하기 위해 표시된 것입니다. 이러한 요소가 적절한 번역을 표시하도록 하려면, 제공된 JavaScript 코드가 그 마법을 부릅니다.</p>
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
<h1 id="언어-데이터-및-json-파일" tabindex="-1"><a class="header-anchor" href="#언어-데이터-및-json-파일" aria-hidden="true">#</a> 언어 데이터 및 JSON 파일</h1>
<p>각 언어에 대해 웹사이트의 다양한 요소에 대한 번역을 저장하기 위한 JSON 파일을 생성합니다. 예를 들어, 영어용으로 en.json 파일과 아랍어용으로 ar.json 파일을 가질 수 있습니다. 다음은 이러한 파일 구조를 단순화한 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* en.json */</span>
<span class="token punctuation">{</span>
    <span class="token string-property property">"welcome_message"</span><span class="token operator">:</span> <span class="token string">"웹사이트에 오신 걸 환영합니다!"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"about_us"</span><span class="token operator">:</span> <span class="token string">"우리에 대해 더 알아보기..."</span><span class="token punctuation">,</span>
    <span class="token string-property property">"footer_text"</span><span class="token operator">:</span> <span class="token string">"© 2023 모든 권리 보유."</span>
<span class="token punctuation">}</span>

<span class="token comment">/* ar.json */</span>
<span class="token punctuation">{</span>
    <span class="token string-property property">"welcome_message"</span><span class="token operator">:</span> <span class="token string">"مرحبًا بكم في موقعنا!"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"about_us"</span><span class="token operator">:</span> <span class="token string">"اعرف المزيد عنا..."</span><span class="token punctuation">,</span>
    <span class="token string-property property">"footer_text"</span><span class="token operator">:</span> <span class="token string">"© 2023 جميع الحقوق محفوظة."</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="동적-콘텐츠-업데이트" tabindex="-1"><a class="header-anchor" href="#동적-콘텐츠-업데이트" aria-hidden="true">#</a> 동적 콘텐츠 업데이트</h1>
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
<p>선택한 언어에 따라 콘텐츠를 동적으로 업데이트하려면 JavaScript를 사용합니다. 이렇게 할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 선택한 언어에 따라 콘텐츠 업데이트하는 함수</span>
<span class="token keyword">function</span> <span class="token function">updateContent</span><span class="token punctuation">(</span><span class="token parameter">langData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'[data-i18n]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">element</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> key <span class="token operator">=</span> element<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'data-i18n'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        element<span class="token punctuation">.</span>textContent <span class="token operator">=</span> langData<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>updateContent 함수는 data-i18n 속성을 가진 요소를 반복하고 해당 번역 데이터를 사용하여 텍스트 콘텐츠를 업데이트합니다.</p>
<h1 id="언어-설정하기" tabindex="-1"><a class="header-anchor" href="#언어-설정하기" aria-hidden="true">#</a> 언어 설정하기</h1>
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
<p>사용자의 언어 설정을 기억하기 위해 localStorage API를 사용할 것입니다. 이를 통해 사용자의 브라우저에 데이터를 로컬로 저장하고 검색할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 언어 설정을 저장하는 함수</span>
<span class="token keyword">function</span> <span class="token function">setLanguagePreference</span><span class="token punctuation">(</span><span class="token parameter">lang</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'language'</span><span class="token punctuation">,</span> lang<span class="token punctuation">)</span><span class="token punctuation">;</span>
    location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>사용자가 언어를 선택할 때마다, setLanguagePreference 함수가 호출되어 설정을 저장하고 새로운 언어 설정으로 페이지를 다시 로드합니다.</p>
<h1 id="언어-데이터-가져오기" tabindex="-1"><a class="header-anchor" href="#언어-데이터-가져오기" aria-hidden="true">#</a> 언어 데이터 가져오기</h1>
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
<p>다국어 정적 웹사이트가 작동하려면 JSON 파일에 저장된 언어별 콘텐츠를 검색할 수 있는 방법이 필요합니다. 이것이 fetchLanguageData 함수가 필요한 이유입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 언어 데이터를 가져오는 함수</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchLanguageData</span><span class="token punctuation">(</span><span class="token parameter">lang</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">languages/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>lang<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.json</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 함수는 선택한 언어를 인자로 받아 해당 JSON 파일을 가져오기 위한 URL을 구성합니다. fetch 요청이 발생하면 Response 객체로 해결되는 프로미스가 반환됩니다. 그런 다음 response.json() 메서드를 사용하여 Response 객체에서 JSON 콘텐츠를 구문 분석합니다.</p>
<p>간단히 말해, fetchLanguageData 함수는 JSON 파일에 저장된 언어별 콘텐츠를 가져와 동적으로 웹사이트 콘텐츠를 업데이트하는 역할을 합니다. 이는 웹사이트가 각 언어에 대해 올바른 번역을 표시하는 데 중요한 단계입니다.</p>
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
<h1 id="표시-언어-변경" tabindex="-1"><a class="header-anchor" href="#표시-언어-변경" aria-hidden="true">#</a> 표시 언어 변경</h1>
<p>이제 여러 언어로 된 정적 웹사이트의 기초를 다루었으니, 사용자가 실제로 다른 언어로 전환하는 방법을 살펴보는 것이 시간입니다. 이 프로세스의 핵심은 changeLanguage 함수에 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 언어 변경 함수</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">changeLanguage</span><span class="token punctuation">(</span><span class="token parameter">lang</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">setLanguagePreference</span><span class="token punctuation">(</span>lang<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">const</span> langData <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchLanguageData</span><span class="token punctuation">(</span>lang<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">updateContent</span><span class="token punctuation">(</span>langData<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">toggleArabicStylesheet</span><span class="token punctuation">(</span>lang<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 아랍어 스타일시트 전환</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 함수는 여러 언어 간의 원활한 전환을 만들기 위한 게이트웨이입니다. 여기서 무슨 일이 일어나고 있는지 쪼개 봅시다:</p>
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
<li>await setLanguagePreference(lang): 이 코드는 사용자의 언어 기본 설정을 먼저 설정합니다. 앞서 논의한 setLanguagePreference 함수를 사용합니다. 이 선호도를 localStorage에 저장함으로써 사용자가 웹사이트를 떠나도 선택한 언어 설정이 유지됩니다.</li>
<li>const langData = await fetchLanguageData(lang): fetchLanguageData 함수는 선택한 언어에 대한 언어별 콘텐츠를 검색하는 데 사용됩니다. 이 콘텐츠는 JSON 파일에 저장되어 있으며, 웹사이트의 다양한 요소에 대한 번역을 포함합니다.</li>
</ul>
<h1 id="스타일시트-및-자바스크립트-링크" tabindex="-1"><a class="header-anchor" href="#스타일시트-및-자바스크립트-링크" aria-hidden="true">#</a> 스타일시트 및 자바스크립트 링크</h1>
<p>마무리하기 전에, 스타일시트 및 자바스크립트 파일을 HTML에 링크하는 중요한 단계에 대해 알아봅시다. 이러한 파일을 올바르게 연결하는 것은 다국어 정적 웹사이트의 기능성과 미학에 있어서 중요합니다.</p>
<h1 id="스타일시트-링크" tabindex="-1"><a class="header-anchor" href="#스타일시트-링크" aria-hidden="true">#</a> 스타일시트 링크</h1>
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
<p><code v-pre>head</code> 섹션에는 주 스타일시트에 대한 링크가 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"./assets/css/style.css"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 줄은 HTML 파일을 assets/css/ 디렉토리에 위치한 style.css 파일에 연결합니다. 이 스타일시트에는 웹 사이트 레이아웃과 모양에 대한 기본 스타일이 포함되어 있습니다.</p>
<p>여러 언어로 된 웹 사이트를 다룰 때는 특히 다른 언어에 맞는 스타일이 필요한 경우 스타일이 어떻게 적응할지를 고려하는 것이 중요합니다. 예를 들어, 올바른 정렬과 타이포그래피를 보장하기 위해 아랍어 텍스트용 별도 스타일이 필요할 수 있습니다.</p>
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
<h1 id="javascript-링킹" tabindex="-1"><a class="header-anchor" href="#javascript-링킹" aria-hidden="true">#</a> JavaScript 링킹</h1>
<p>비슷하게, JavaScript 파일은 <code v-pre>body</code> 섹션의 끝에 링크됩니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"assets/js/script.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 라인은 HTML을 assets/js/ 디렉토리에 있는 script.js 파일에 연결합니다. 이 JavaScript 파일에는 다국어 기능과 콘텐츠 업데이트를 가능하게 하는 함수들이 포함되어 있습니다.</p>
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
<p>다국어 웹사이트를 개발하면서 JavaScript 코드가 더 많은 기능이나 최적화 기능을 포함하도록 발전할 수 있음을 염두에 두세요. 웹사이트 기능을 유지하는 데 중요한 부분인 JavaScript 파일을 정기적으로 검토하고 업데이트하는 것이 중요합니다.</p>
<h1 id="동적-스타일시트-전환" tabindex="-1"><a class="header-anchor" href="#동적-스타일시트-전환" aria-hidden="true">#</a> 동적 스타일시트 전환</h1>
<p>다른 언어는 올바른 타이포그래피와 레이아웃을 보장하기 위해 종종 다른 스타일이 필요합니다. 언어 선택에 따라 아랍어 스타일시트를 토글하는 함수를 만들어봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 언어 선택에 따라 아랍어 스타일시트를 토글하는 함수</span>
<span class="token keyword">function</span> <span class="token function">toggleArabicStylesheet</span><span class="token punctuation">(</span><span class="token parameter">lang</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> head <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'head'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> link <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#styles-link'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>link<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        head<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>link<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 이전 스타일시트 링크를 제거합니다</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>lang <span class="token operator">===</span> <span class="token string">'ar'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> newLink <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'link'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        newLink<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">'styles-link'</span><span class="token punctuation">;</span>
        newLink<span class="token punctuation">.</span>rel <span class="token operator">=</span> <span class="token string">'stylesheet'</span><span class="token punctuation">;</span>
        newLink<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">'./assets/css/style-ar.css'</span><span class="token punctuation">;</span> <span class="token comment">// 아랍어 스타일시트 경로</span>
        head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>newLink<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>참고: 여기서 &quot;style-ar.css&quot;라는 다른 스타일 시트를 만들었습니다.</p>
<p>이 함수는 언어를 전환할 때 올바른 스타일 시트가 적용되도록 합니다.</p>
<h1 id="페이지-초기화" tabindex="-1"><a class="header-anchor" href="#페이지-초기화" aria-hidden="true">#</a> 페이지 초기화</h1>
<p>마지막으로, 사용자가 선호하는 언어에 기반하여 페이지 콘텐츠와 스타일을 초기화하기 위해 DOMContentLoaded 이벤트를 사용할 것입니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 페이지 로드 시 updateContent() 호출</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'DOMContentLoaded'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> userPreferredLanguage <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'language'</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">'en'</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> langData <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchLanguageData</span><span class="token punctuation">(</span>userPreferredLanguage<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">updateContent</span><span class="token punctuation">(</span>langData<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">toggleArabicStylesheet</span><span class="token punctuation">(</span>userPreferredLanguage<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DOMContentLoaded 이벤트는 페이지의 HTML 콘텐츠가 완전히 로드되면 코드가 트리거됩니다. 이벤트는 localStorage에서 사용자의 선호하는 언어를 가져와 콘텐츠를 업데이트하고 해당하는 스타일 시트를 토글합니다.</p>
<p>프로젝트 전체는 [여기](Github 링크)에서 확인할 수 있습니다.</p>
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
<p>이러한 단계를 따르면 동적이고 사용자 친화적인 다국어 정적 웹 사이트를 만들 수 있습니다. 사용자들은 언어를 원활하게 전환할 수 있으며, 이를 통해 귀하의 웹 사이트 콘텐츠가 더 넓은 관객에게 접근 가능하게 됩니다. 웹 사이트가 발전함에 따라 JSON 번역 파일을 최신 상태로 유지하고 전 세계의 방문객들에게 훌륭한 사용자 경험을 제공하도록 계속 노력해 주세요.</p>
<p>다국어 정적 웹 사이트를 만드는 데는 HTML, CSS 및 JavaScript에 대한 세심한 주의와 견고한 이해가 필요합니다. 그러나 다양한 언어적 배경을 가진 사용자들을 위해 접근성과 참여를 향상시키면서 이러한 노력은 가치가 있습니다.</p>
</div></template>
