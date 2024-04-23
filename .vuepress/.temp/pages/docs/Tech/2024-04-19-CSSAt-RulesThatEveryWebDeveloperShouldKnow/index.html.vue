<template><div><img src="@source/docs/Tech/2024-04-19-CSSAt-RulesThatEveryWebDeveloperShouldKnow/img/CSSAt-RulesThatEveryWebDeveloperShouldKnow_0.png" />
<p>웹 개발자는 일반적으로 시맨틱 HTML 태그에 스타일을 추가하기 위해 별도의 스타일 시트 또는 스타일 태그에 CSS 정의를 작성합니다. 여러 키-값 스타일 지시문이 있는 CSS 블록은 DOM 요소에 스타일을 추가합니다. 이러한 CSS 블록은 스타일링 규칙이 적용되는 DOM 요소를 결정하기 위한 래핑 선택기 쿼리를 갖습니다. 이 개념은 웹 페이지를 잘 디자인하는 데 충분하지만, 때로는 CSS 블록의 동작을 제어해야 할 때가 있습니다. 또한 때로는 브라우저가 제공하는 내장 CSS 속성 값들을 확장해야 할 때도 있습니다.</p>
<p>CSS at-rules 기능은 CSS 블록의 동작을 제어하고 브라우저의 CSS 엔진에 사용자 정의 스타일 로직을 추가하는 방법을 제공합니다. 이러한 at-rules은 일반적으로 일반적인 CSS 선택기나 컨텍스트별 정의를 래핑하며, 예를 들어 순수 CSS 애니메이션을 위한 키프레임을 정의합니다.</p>
<p>이 이야기에서는 현대적이고 사용자 친화적이며 고품질의 웹 페이지를 개발하는 데 도움이 되는 여러 at-rules을 설명하겠습니다. 이 at-rules을 숙달하여 CSS 관련 개발 요구 사항에 대한 해결책을 제공할 수 있는 CSS 전문가가 되어보세요!</p>
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
<h1 id="keyframes를-사용하여-애니메이션-키프레임-정의하기" tabindex="-1"><a class="header-anchor" href="#keyframes를-사용하여-애니메이션-키프레임-정의하기" aria-hidden="true">#</a> @keyframes를 사용하여 애니메이션 키프레임 정의하기</h1>
<p>현대 CSS 표준은 DOM 요소에 대해 부드러운 애니메이션을 만드는 데 두 가지 솔루션을 제공합니다:</p>
<ul>
<li>transition 속성을 사용하여 사용자 상호작용에 기반하여 CSS 속성 값을 부드럽게 전환합니다.</li>
<li>animation 속성을 사용하여 키프레임 기반의 고급 애니메이션을 구현합니다.</li>
</ul>
<p>두 번째 접근 방식은 @keyframes at-rule을 사용하여 키프레임을 정의해야 합니다. 다음 예제를 살펴보세요:</p>
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
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.board</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 12px 50px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ff9d00<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #222<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> board-anim 3s infinite linear<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> board-anim</span> <span class="token punctuation">{</span>
  <span class="token selector">0%, 85%, 100%</span> <span class="token punctuation">{</span>
    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>0px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">90%</span> <span class="token punctuation">{</span>
    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>5px<span class="token punctuation">)</span> <span class="token function">contrast</span><span class="token punctuation">(</span>200%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 코드는 다음 미리보기에 나와 있는 것처럼 간단한 번쩍이는 효과를 렌더링합니다:</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1178/1*heY7a_mHKsvz1pNNBnntGg.gif" alt="미리보기"></p>
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
<h1 id="page를-사용하여-인쇄된-페이지-레이아웃-수정하기" tabindex="-1"><a class="header-anchor" href="#page를-사용하여-인쇄된-페이지-레이아웃-수정하기" aria-hidden="true">#</a> @page를 사용하여 인쇄된 페이지 레이아웃 수정하기</h1>
<p>가끔 사용자들은 오프라인 사용을 위해 웹 페이지를 실제 용지에 인쇄해야 할 때가 있습니다. 또한 일부 사용자는 나중에 사용할 목적으로 웹 페이지를 PDF 문서로 인쇄합니다. 일부 웹 앱은 서버 기반 기능을 제공하여 용지 친화적인 PDF 문서를 생성할 수 있지만, 브라우저의 기본 인쇄 기능을 사용하여 모든 웹 페이지를 인쇄할 수도 있습니다.</p>
<p>@page CSS at-rule을 사용하면 인쇄된 페이지의 크기, 방향 및 여백을 커스터마이즈할 수 있습니다. 예를 들어, 다음 CSS 코드 조각은 인쇄된 페이지에 1인치 여백 및 A4 레이아웃을 설정합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@page <span class="token punctuation">{</span>
  <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token constant">A4</span> landscape<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> 1in<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위에 나와 있는 CSS 정의를 샘플 HTML 문서에 사용한 후 Ctrl + P를 누르면 다음과 같은 인쇄 미리보기가 나타납니다:</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*RzzEHTVLJ6Yr6mpYlu_qcg.gif" alt="Print Preview"></p>
<p>이 at-rule에는 인쇄된 문서의 특정 페이지를 선택하기 위한 :first, :blank, :left 및 :right 가상 클래스가 포함되어 있습니다. 자세한 내용은 공식 MDN 문서를 참조하여 @page에 대한 자세한 내용을 확인하세요.</p>
<h1 id="media를-사용한-css-미디어-쿼리" tabindex="-1"><a class="header-anchor" href="#media를-사용한-css-미디어-쿼리" aria-hidden="true">#</a> @media를 사용한 CSS 미디어 쿼리</h1>
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
<p>CSS 미디어 쿼리 기능은 미디어 유형 및 속성에 기반한 동적 스타일 블록 활성화를 도와 웹 개발자가 구현할 수 있게 해줍니다. 이 CSS 기능은 반응형 페이지 디자인 및 인쇄 페이지 사용자 정의에 자주 사용됩니다. 예를 들어, 다음과 같은 미디어 쿼리를 사용하여 작은 화면에서 입력 요소를 뷰포트 폭에 맞게 늘릴 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@media screen <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">max<span class="token operator">-</span>width<span class="token operator">:</span> 550px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  input <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 미디어 쿼리는 화면이 작아지면 활성화됩니다.</p>
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
<p>위 구현은 미디어 쿼리의 화면 모드를 사용했습니다. 미디어 쿼리는 인쇄 유형도 지원하기 때문에 인쇄된 웹 페이지 버전을 위한 다른 스타일을 활성화하는 데 사용할 수 있습니다.</p>
<p>다음 CSS 코드 스니펫을 살펴보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@media print <span class="token punctuation">{</span>
  header <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 미디어 쿼리는 인쇄 모드에서 주 헤더 요소를 숨깁니다. 아래 미리보기에서 확인할 수 있습니다:</p>
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
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*b-yQfZeVuDljS8wE9u9XXA.gif" alt="image"></p>
<p>화면과 인쇄용 역동적인 스타일 블록을 추가할 수 있는 media type을 사용할 수 있습니다. 또한 다음과 같이 각 media type에 대한 별도의 스타일시트를 링크하는 것이 가능합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>link href<span class="token operator">=</span><span class="token string">"print.css"</span> rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> media<span class="token operator">=</span><span class="token string">"print"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link
  href<span class="token operator">=</span><span class="token string">"mobile.css"</span>
  rel<span class="token operator">=</span><span class="token string">"stylesheet"</span>
  media<span class="token operator">=</span><span class="token string">"screen and (max-width: 600px)"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="counter-style을-사용하여-사용자-정의-목록-스타일-정의하기" tabindex="-1"><a class="header-anchor" href="#counter-style을-사용하여-사용자-정의-목록-스타일-정의하기" aria-hidden="true">#</a> @counter-style을 사용하여 사용자 정의 목록 스타일 정의하기</h1>
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
<p>HTML 문서에서는 자주 순서 있는 목록과 순서 없는 목록을 사용합니다. 이러한 목록을 사용자 정의하기 위해 표준 브라우저는 list-style-type CSS 속성을 통해 다양한 내장 목록 표시기 유형을 제공합니다. @counter-style at-rule을 사용하여 이러한 목록 스타일을 확장하거나 처음부터 사용자 정의 스타일을 구현할 수 있습니다.</p>
<p>다음 CSS 코드 스니펫을 살펴보세요:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@counter-style</span> emojis</span> <span class="token punctuation">{</span>
  <span class="token property">system</span><span class="token punctuation">:</span> cyclic<span class="token punctuation">;</span>
  <span class="token property">symbols</span><span class="token punctuation">:</span> 🔴 🟠 🟢<span class="token punctuation">;</span>
  <span class="token property">suffix</span><span class="token punctuation">:</span> <span class="token string">' '</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">ul li</span> <span class="token punctuation">{</span>
  <span class="token property">list-style-type</span><span class="token punctuation">:</span> emojis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서 우리는 세 개의 이모티콘을 가진 사용자 정의 순환 목록 스타일을 만들었습니다. 위 CSS 정의를 순서 없는 목록에 사용하면 다음과 같은 결과를 볼 수 있습니다:</p>
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
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>! [CSSAt-RulesThatEveryWebDeveloperShouldKnow_5.png] (./img/CSSAt-RulesThatEveryWebDeveloperShouldKnow_5.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>뿐만 아니라 이 at-rule을 사용하여 기존 내장 목록 스타일을 사용자 정의할 수도 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> @counter<span class="token operator">-</span>style decimal<span class="token operator">-</span>mod <span class="token punctuation">{</span>
  <span class="token literal-property property">system</span><span class="token operator">:</span> <span class="token keyword">extends</span> <span class="token class-name">decimal</span><span class="token punctuation">;</span>
  <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">'( '</span><span class="token punctuation">;</span>
  <span class="token literal-property property">suffix</span><span class="token operator">:</span> <span class="token string">' ): '</span><span class="token punctuation">;</span>
  <span class="token literal-property property">pad</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token string">'0'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


ol li <span class="token punctuation">{</span>
  list<span class="token operator">-</span>style<span class="token operator">-</span>type<span class="token operator">:</span> decimal<span class="token operator">-</span>mod<span class="token punctuation">;</span>
  margin<span class="token operator">-</span>bottom<span class="token operator">:</span> 2px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

ol li<span class="token operator">:</span><span class="token operator">:</span>marker <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">780794</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 CSS 정의는 기본 10진수 목록 스타일을 확장하여 prefix, suffix 및 0으로 패딩을 추가합니다. 다음 미리보기를 확인해보세요:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
&lt;!-- ui-log 수평형 -->
&lt;ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true">&lt;/ins>
&lt;component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
&lt;/component>

&lt;img src="./img/CSSAt-RulesThatEveryWebDeveloperShouldKnow_6.png" />

@counter-style 규칙은 고급 패턴, 사용자 정의 번호 매기기 시스템 등을 구현하는 데 충분한 알고리즘을 제공합니다.

다음 이야기에서 더 많은 반드시 알아야 할 최신 CSS 기능을 배워보세요:

# @starting-style을 사용하여 초기 DOM 렌더링 전환 추가

&lt;!-- ui-log 수평형 -->
&lt;ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true">&lt;/ins>
&lt;component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
&lt;/component>

DOM 요소가 HTML 문서나 JavaScript 코드 스니펫에서 렌더링될 때 초기 전환 애니메이션없이 렌더링됩니다. 과거에는 일반적으로 이러한 초기 애니메이션을 JavaScript를 통해 동적으로 전환된 CSS 클래스로 구현했습니다. 요즘에는 CSS 애니메이션을 사용할 수 있지만 초기 애니메이션 개념은 확실히 CSS 전환 기능에 속합니다.

@starting-style at-rule을 사용하면 CSS 선택기에 대한 초기 스타일을 설정하여 초기 렌더링 단계에 대한 전환 애니메이션을 작성할 수 있습니다:

```js
button {
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  background-color: #bbb;
  opacity: 1;
  transform: scale(1);
  transition: all 1s linear;
  
  @starting-style {
    opacity: 0;
    transform: scale(0.5);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 코드 스니펫은 버튼 요소가 뷰포트에 렌더링될 때 전환 애니메이션을 재생합니다. 이 전환은 JavaScript로 새 요소를 동적으로 만들더라도 작동합니다.</p>
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
<p>아래 미리보기를 확인해보세요:</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1110/1*It_lvUN1oraymhe6ETUfYA.gif" alt="image"></p>
<p>이 기능은 네이티브 HTML 팝오버에 애니메이션을 추가하는 데 매우 유용합니다. 이 at-rule의 브라우저 지원이 아직 미흡하기 때문에 프로덕션에서 사용하기 전에 시간이 좀 더 필요할 것 같아요.</p>
<h1 id="scope를-사용한-스코프된-css-정의" tabindex="-1"><a class="header-anchor" href="#scope를-사용한-스코프된-css-정의" aria-hidden="true">#</a> @scope를 사용한 스코프된 CSS 정의</h1>
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
<p>기본적으로 전통적인 CSS 구현은 전역 스코프 개념으로 웹 페이지를 스타일링합니다. 또한 과거에는 스타일 태그로도 스코프 기능이 없었습니다. 스타일 태그는 DOM 트리에서의 위치와 관계없이 모든 HTML 노드에 대해 적용 가능했습니다. HTML 표준이 'scoped' 속성을 사용하여 스코핑을 지원하려고 했지만 웹 표준이 되기 전에 사용 중단되었습니다. 현재 현대적인 CSS 명세에서는 스코프 CSS를 정의하기 위한 @scope at-rule을 도입했습니다.</p>
<p>예를 들어, 다음과 같이 HTML 세그먼트에 대한 스타일을 지정하는 스코프 스타일 태그를 만들 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>style<span class="token operator">></span>
  @scope <span class="token punctuation">{</span>
    <span class="token operator">:</span>scope <span class="token punctuation">{</span>
      background<span class="token operator">-</span>color<span class="token operator">:</span> #ddd<span class="token punctuation">;</span>
      <span class="token literal-property property">padding</span><span class="token operator">:</span> 12px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    h3 <span class="token punctuation">{</span>
      <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> 6px <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
      border<span class="token operator">-</span>bottom<span class="token operator">:</span> solid 2px #eb7e3b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
  <span class="token operator">&lt;</span>h3<span class="token operator">></span>Lorem ipsum dolor sit amet<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
  <span class="token operator">&lt;</span>p<span class="token operator">></span>Lorem ipsum dolor sit amet<span class="token punctuation">,</span> consectetur adipiscing elit<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 스타일 태그는 @scope를 사용하여 부모 div 요소에 대한 스코프 CSS 내용을 정의합니다. 여기서는 :scope 의사 클래스를 사용하여 스코프 요소를 대상으로 했습니다. 위 HTML 스니펫은 다음과 같이 간단한 독립된 알림 컴포넌트를 렌더링합니다:</p>
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
<p><img src="@source/docs/Tech/2024-04-19-CSSAt-RulesThatEveryWebDeveloperShouldKnow/img/CSSAt-RulesThatEveryWebDeveloperShouldKnow_8.png" alt="CSSAt-RulesThatEveryWebDeveloperShouldKnow_8"></p>
<h1 id="container을-활용한-현대적인-컴포넌트-중심-반응형-디자인" tabindex="-1"><a class="header-anchor" href="#container을-활용한-현대적인-컴포넌트-중심-반응형-디자인" aria-hidden="true">#</a> @container을 활용한 현대적인 컴포넌트 중심 반응형 디자인</h1>
<p>2012년에 미디어 쿼리가 W3C 표준이 된 이후, 웹 개발자들은 반응형 디자인 시스템을 구현하는 데 널리 사용했습니다. 미디어 쿼리 기반의 반응형 디자인 기술은 장치 화면 너비에 따라 CSS 블록을 활성화/비활성화합니다. 미디어 쿼리는 장치 크기에만 기반하므로 HTML 요소 크기 조정 시 스타일을 조정하는 기능을 사용할 수 없습니다.</p>
<p>현대 CSS 명세는 이 요구 사항을 위해 @container at-rule을 통해 컨테이너 쿼리를 제공합니다.</p>
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
<p>다음 예시를 확인해 주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"alert"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>h3<span class="token operator">></span>로렘 입숨 돌로르 싿 아메트<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
  <span class="token operator">&lt;</span>button<span class="token operator">></span>로렘 입숨<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token operator">&lt;</span>button<span class="token operator">></span>로렘 입숨<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>alert <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #ddd<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 12px<span class="token punctuation">;</span>
  <span class="token literal-property property">resize</span><span class="token operator">:</span> horizontal<span class="token punctuation">;</span>
  <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
  container<span class="token operator">-</span>type<span class="token operator">:</span> inline<span class="token operator">-</span>size<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>alert h3 <span class="token punctuation">{</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> 6px <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> 12px <span class="token number">0</span><span class="token punctuation">;</span>
  border<span class="token operator">-</span>bottom<span class="token operator">:</span> solid 2px #eb7e3b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>alert button <span class="token punctuation">{</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 12px<span class="token punctuation">;</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
  margin<span class="token operator">-</span>right<span class="token operator">:</span> 6px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

@<span class="token function">container</span> <span class="token punctuation">(</span><span class="token parameter">width <span class="token operator">&lt;</span> 400px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span>alert button <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token punctuation">.</span>alert button<span class="token operator">:</span><span class="token function">not</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">:</span>last<span class="token operator">-</span>child</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    margin<span class="token operator">-</span>bottom<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서 container-type CSS 속성을 사용하여 모든 alert 요소에 대한 컨테이너 쿼리를 활성화했습니다. 위의 CSS 정의를 사용하여 경고 상자(alert boxes)와 함께 사용하면 다음 결과가 표시됩니다:</p>
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
<p><img src="https://miro.medium.com/v2/resize:fit:994/1*_J1HhO-YOU5M6wS2ZPo7_Q.gif" alt="alt text"></p>
<p>CSS 컨테이너 쿼리는 계산된 스타일을 감지할 수 있으며 중첩된 컨테이너 쿼리를 지원하며 전통적인 미디어 쿼리와 동일한 조합된 쿼리를 지원합니다. 이 at-rule은 아직 성숙한 미디어 쿼리와 비교해서 성숙하지 않으므로 제품 사용에 주의하십시오. MDN 문서에서 컨테이너 쿼리에 대해 더 알아보세요.</p>
<h1 id="layer를-사용한-css-우선순위-처리" tabindex="-1"><a class="header-anchor" href="#layer를-사용한-css-우선순위-처리" aria-hidden="true">#</a> @layer를 사용한 CSS 우선순위 처리</h1>
<p>웹 디자인 시나리오에서 개발자는 일반적으로 여러 CSS 선택기를 사용하고 종종 스타일을 재정의해야 합니다. 여러 선택기로 CSS 스타일을 직접 재정의하지 않더라도 작성한 모든 CSS 블록은 자동으로 사용자 에이전트 스타일시트의 스타일을 재정의합니다. CSS의 스타일 재정의 프로세스는 브라우저의 특이성 알고리즘을 기반으로 발생하여 우선순위를 처리하기 위해 CSS 선택기의 가중치를 계산합니다. 과거에는 따로 !important를 혼동스럽게 사용하지 않고는 CSS 우선순위를 처리하는 방법이 없었기 때문에 모든 개발자가 특이성 알고리즘에 기반한 CSS 재정의 관련 코드를 조정했습니다.</p>
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
<p>다음 코드 스니펫을 살펴보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bg-success"</span> style<span class="token operator">=</span><span class="token string">"width: 100px; height: 40px"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bg-danger"</span> style<span class="token operator">=</span><span class="token string">"width: 100px; height: 40px"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"btn"</span><span class="token operator">></span>Default<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"btn bg-success"</span><span class="token operator">></span>Success<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"btn bg-danger"</span><span class="token operator">></span>Danger<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>button<span class="token punctuation">.</span>btn <span class="token punctuation">{</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 6px 18px<span class="token punctuation">;</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #e0e0e0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>bg<span class="token operator">-</span>success <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #00bf7c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>bg<span class="token operator">-</span>danger <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #f51d41<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서 bg-success와 bg-danger 클래스는 버튼의 기본 배경색을 변경하지 못할 것입니다. 왜냐하면 button.btn의 특이성이 더 높기 때문이거든.</p>
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
<img src="@source/docs/Tech/2024-04-19-CSSAt-RulesThatEveryWebDeveloperShouldKnow/img/CSSAt-RulesThatEveryWebDeveloperShouldKnow_10.png" />
<p>@layer at-rule은 스타일 레이어를 정의하고 CSS 우선순위를 제어하여 명확성 효과를 제어할 수 있게 합니다. 그래서 우리는 다음과 같이 기본 버튼 선택기의 명확성을 바꾸지 않고도 이 스타일링 문제를 해결하기 위해 두 가지 레이어를 만들 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@layer base<span class="token punctuation">,</span> mods<span class="token punctuation">;</span>

@layer base <span class="token punctuation">{</span>
  button<span class="token punctuation">.</span>btn <span class="token punctuation">{</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 6px 18px<span class="token punctuation">;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #e0e0e0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

@layer mods <span class="token punctuation">{</span>
  <span class="token punctuation">.</span>bg<span class="token operator">-</span>danger <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #f51d41<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token punctuation">.</span>bg<span class="token operator">-</span>success <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #00bf7c<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서 mods 레이어는 base 레이어와 비교했을 때 가장 높은 우선순위를 가지므로 기존의 명확성 효과와는 상관없이 버튼은 적절한 배경색을 받을 것입니다. 아래 프리뷰에서 확인할 수 있습니다:</p>
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
<img src="@source/docs/Tech/2024-04-19-CSSAt-RulesThatEveryWebDeveloperShouldKnow/img/CSSAt-RulesThatEveryWebDeveloperShouldKnow_11.png" />
<p>앞으로 미래적이고 사용자 친화적인 웹 프론트엔드를 만들기 위해 가상 요소와 클래스를 배우세요:</p>
<p>읽어주셔서 감사합니다.</p>
</div></template>
