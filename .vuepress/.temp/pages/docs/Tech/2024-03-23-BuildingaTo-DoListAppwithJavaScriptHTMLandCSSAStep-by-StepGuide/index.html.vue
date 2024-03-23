<template><div><p><img src="@source/docs/Tech/2024-03-23-BuildingaTo-DoListAppwithJavaScriptHTMLandCSSAStep-by-StepGuide/img/Building-a-To-Do-List-App-with-JavaScript-HTML-and-CSS-A-Step-by-Step-Guide._0.png" alt="Building a To-Do List App with JavaScript, HTML, and CSS: A Step-by-Step Guide"></p>
<p>이 강좌에서는 JavaScript, HTML 및 CSS를 사용하여 간단하면서 기능적인 할 일 목록 앱을 만드는 과정을 안내합니다. 코드를 단계별로 나누어 자세히 설명할 것입니다.</p>
<h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h1>
<p>할 일 목록 앱은 작업을 조직화하고 시간을 효율적으로 관리하는 인기있는 도구입니다. 기본적인 웹 기술을 사용하여 처음부터 만들어보는 것은 JavaScript가 HTML 및 CSS와 상호 작용하여 동적 웹 애플리케이션을 만드는 방법을 이해하는 좋은 방법입니다.</p>
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
<h1 id="html-구조" tabindex="-1"><a class="header-anchor" href="#html-구조" aria-hidden="true">#</a> HTML 구조</h1>
<p>저희 앱의 HTML 구조부터 시작해봅시다. 이에는 새 할 일 항목을 입력하는 요소, 항목 목록을 표시하는 요소, 그리고 JavaScript 및 CSS 파일을 연결하는 요소가 포함됩니다.</p>
<p>index.html</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html<span class="token operator">></span>
  <span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>To<span class="token operator">-</span>Do List App<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"styles.css"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>To<span class="token operator">-</span>Do List App<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"to_do_input"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>input
          placeholder<span class="token operator">=</span><span class="token string">"할 일을 입력하세요"</span>
          id<span class="token operator">=</span><span class="token string">"to_do_name"</span>
          <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"to_do_name"</span>
        <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">"to_do_add_btn"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"to_do_add_btn"</span><span class="token operator">></span><span class="token operator">&amp;</span>#<span class="token number">43</span><span class="token punctuation">;</span> 추가<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"to_do_list_container"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>ul id<span class="token operator">=</span><span class="token string">"to_do_list"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"to_do_list"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"index.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="css-스타일링" tabindex="-1"><a class="header-anchor" href="#css-스타일링" aria-hidden="true">#</a> CSS 스타일링</h1>
<p>이제 CSS를 추가하여 앱을 스타일링하고 시각적으로 매력적으로 만들어 봅시다. CSS 규칙을 사용하여 다양한 요소의 레이아웃과 모양을 정의할 것입니다.</p>
<p>style.css</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>body <span class="token punctuation">{</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
  align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>to_do_input <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>to_do_name <span class="token punctuation">{</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid #ccc<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
  margin<span class="token operator">-</span>right<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">80</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>to_do_add_btn <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #4caf50<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px 20px<span class="token punctuation">;</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">20</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>to_do_list_container <span class="token punctuation">{</span>
  margin<span class="token operator">-</span>top<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>to_do_list <span class="token punctuation">{</span>
  list<span class="token operator">-</span>style<span class="token operator">-</span>type<span class="token operator">:</span> none<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>to_do_list li <span class="token punctuation">{</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 8px 10px<span class="token punctuation">;</span>
  margin<span class="token operator">-</span>bottom<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid #ccc<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> space<span class="token operator">-</span>between<span class="token punctuation">;</span>
  align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>actions span <span class="token punctuation">{</span>
  <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>to_do_done <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #45ca62<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="javascript-기능" tabindex="-1"><a class="header-anchor" href="#javascript-기능" aria-hidden="true">#</a> JavaScript 기능</h1>
<p>이제 JavaScript를 추가하여 우리의 to-do 목록 앱을 상호작용 가능하게 만들어봅시다. 사용자 입력을 처리하고, 목록에 새로운 to-do 아이템을 추가하며, 항목을 완료된 상태로 표시하고, 항목을 삭제할 것입니다.</p>
<p>index.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#to_do_add_btn"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> to_do_name <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#to_do_name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>to_do_name<span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"할 일 목록 이름을 입력해주세요"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> li <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"li"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> liContainer <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;div class="to-do-item">
      &lt;div class="to-do"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>to_do_name<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div>
      &lt;div class="actions">
        &lt;span class="done">&amp;#10003;&lt;/span>
        &lt;span class="delete">&amp;#10006;&lt;/span>
      &lt;/div>
    &lt;/div></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  li<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> liContainer<span class="token punctuation">;</span>

  li<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".delete"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span><span class="token function">closest</span><span class="token punctuation">(</span><span class="token string">"li"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  li<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".done"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span><span class="token function">closest</span><span class="token punctuation">(</span><span class="token string">"li"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"to_do_done"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#to_do_list"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>li<span class="token punctuation">)</span><span class="token punctuation">;</span>
  to_do_name<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="자바스크립트-코드-설명" tabindex="-1"><a class="header-anchor" href="#자바스크립트-코드-설명" aria-hidden="true">#</a> 자바스크립트 코드 설명</h1>
<ul>
<li>먼저 document.querySelector(&quot;#to_do_add_btn&quot;)를 사용하여 &quot;Add&quot; 버튼을 선택하고 클릭 이벤트 리스너를 추가합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#to_do_add_btn"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>버튼을 클릭하면 입력 필드 (#to_do_name)의 값을 가져옵니다. 입력 필드가 비어있으면 사용자에게 할 일 목록 이름을 입력하라는 경고 메시지가 표시됩니다.</li>
<li>입력 필드가 비어 있지 않으면 새로운 목록 항목 (<code v-pre>li</code>) 요소를 생성하고 입력한 할 일 항목으로 채웁니다. 또한 &quot;완료&quot; 및 &quot;삭제&quot; 용으로 목록 항목 내에 두 개의 span을 추가합니다.</li>
<li>&quot;완료&quot; 및 &quot;삭제&quot; span에 이벤트 리스너를 추가하여 각각 항목을 완료 표시하고 삭제하는 작업을 처리합니다.</li>
<li>마지막으로 새로운 목록 항목을 할 일 목록 (#to_do_list)에 추가하고 입력 필드를 재설정합니다.</li>
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
<h1 id="소스-코드" tabindex="-1"><a class="header-anchor" href="#소스-코드" aria-hidden="true">#</a> 소스 코드</h1>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>축하해요! 우리는 JavaScript, HTML 및 CSS를 사용하여 할 일 목록 앱을 성공적으로 만들었습니다. 이 간단한 프로젝트는 이러한 기술들이 결합될 때의 힘과 다양성을 보여줍니다. 데이터 지속성이나 추가적인 사용자 정의 옵션과 같은 기능을 추가하여 앱을 더 발전시키는 것도 괜찮아요. 즐거운 코딩 되세요!</p>
<h1 id="최종-생각" tabindex="-1"><a class="header-anchor" href="#최종-생각" aria-hidden="true">#</a> 최종 생각</h1>
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
<p>할 일 목록 앱을 만드는 것은 JavaScript, HTML, CSS 기술을 연습하기에 좋은 연습입니다. 이 자습서를 따라가면서 사용자 입력 처리, DOM을 동적으로 업데이트하는 방법, 인터페이스 스타일링 등 기본적인 할 일 목록 앱을 만드는 방법을 배웠습니다. 계속해서 새로운 기능을 추가하고 실험하여 웹 개발 기술을 더욱 향상시키세요.</p>
</div></template>
