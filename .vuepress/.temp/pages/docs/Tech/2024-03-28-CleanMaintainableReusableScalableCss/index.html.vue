<template><div><p><img src="@source/docs/Tech/2024-03-28-CleanMaintainableReusableScalableCss/img/CleanMaintainableReusableScalableCss_0.png" alt="CleanMaintainableReusableScalableCss_0.png"></p>
<p>리액트, 앵귤러, 뷰 등은 중요하지 않아요. 프로젝트의 시작점에서는 매우 깔끔한 CSS 파일이 있습니다. 하루하루가 지남에 따라 프로젝트가 커지면 CSS 파일도 프로젝트보다 빨리 성장합니다. 그래서 프론트엔드 개발자들은 CSS를 작성할 때 주의해야 합니다. 프로젝트가 작더라도 개발자는 대부분 프로젝트를 유지보수하게 됩니다. CSS 부분은 프로젝트의 얼굴을 대표하기 때문에 개발자들은 이를 깔끔하고 유지보수 가능하며 재사용 가능하며 확장 가능하게 유지해야 합니다. 깨끗한 CSS를 작성하는 데 도움이 되는 몇 가지 작성 방법론이 있습니다.</p>
<p>시작해 봅시다.</p>
<h2 id="객체-지향-css-oocss" tabindex="-1"><a class="header-anchor" href="#객체-지향-css-oocss" aria-hidden="true">#</a> 객체 지향 CSS (OOCSS):</h2>
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
<p>OOCSS는 수천 개의 페이지에 대한 확장 가능한 CSS를 위한 네이밍 방법론입니다. 주로 2가지 원칙이 있습니다.</p>
<h3 id="_1-컨테이너와-내용-분리" tabindex="-1"><a class="header-anchor" href="#_1-컨테이너와-내용-분리" aria-hidden="true">#</a> 1. 컨테이너와 내용 분리</h3>
<p>이 원칙은 스타일을 2 부분으로 나눕니다. 레이아웃 스타일과 디자인 스타일입니다.</p>
<p>레이아웃 스타일은 너비, 높이, 여백 등에 사용됩니다.</p>
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
<p>디자인 스타일은 테두리, 색상, 글꼴 등을 위한 것입니다.</p>
<p>주요 아이디어는 여러 구성 요소로 나누어 재사용성을 극대화하는 것입니다.</p>
<p>이 원칙에 대한 예시</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>block<span class="token operator">-</span>position<span class="token punctuation">{</span>
   <span class="token literal-property property">margin</span><span class="token operator">:</span> 8px<span class="token punctuation">;</span>
   <span class="token literal-property property">padding</span><span class="token operator">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">.</span>block<span class="token operator">-</span>header<span class="token punctuation">{</span>
   <span class="token literal-property property">color</span><span class="token operator">:</span> #4e4e4d<span class="token punctuation">;</span>
   <span class="token literal-property property">border</span><span class="token operator">:</span> 1px<span class="token punctuation">;</span>
   border<span class="token operator">-</span>radius<span class="token operator">:</span> 4px<span class="token punctuation">;</span>
   background<span class="token operator">-</span>color<span class="token operator">:</span> #e3e3e3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>block<span class="token operator">-</span>body<span class="token punctuation">{</span>
   <span class="token literal-property property">color</span><span class="token operator">:</span> #e3e3e3<span class="token punctuation">;</span>
   background<span class="token operator">-</span>color<span class="token operator">:</span> #4e4e4e<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 예시에서는 여백 및 안쪽 여백이 다른 클래스에 있고, 색상 및 테두리 값은 다른 클래스에 있습니다. HTML 부분에서 다음과 같이 작성합니다.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block-position block-header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>헤더 블록<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>block-position block-body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>바디 블록<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-컨테이너와-컨텐츠를-분리하세요" tabindex="-1"><a class="header-anchor" href="#_2-컨테이너와-컨텐츠를-분리하세요" aria-hidden="true">#</a> 2. 컨테이너와 컨텐츠를 분리하세요</h2>
<p>OOCSS 위키에 따르면 이는 &quot;위치에 의존적인 스타일을 드물게 사용해야 한다&quot;를 의미합니다.
최대한 자식-부모 관계를 피해야 합니다.</p>
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
<p>이 원칙에 대한 예시</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>h1<span class="token punctuation">.</span>header<span class="token operator">-</span>color <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #d5e0e0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

h1 <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #5cd1d1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"block-position block-header"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>h1 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"header-color"</span><span class="token operator">></span>헤더 블록<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"block-position block-body"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>h1<span class="token operator">></span>본문 블록<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서는 헤더 색상을 여러 번 사용할 수 있습니다. 만약 h1 태그에 header-color 클래스가 없으면 동일하게 보입니다. 반면에 header-color 클래스는 block-header 외부에서도 사용할 수 있습니다.</p>
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
<p>또한 OOCSS GitHub 위키 페이지를 확인해보세요 😊</p>
<p><a href="https://github.com/stubbornella/oocss/wiki" target="_blank" rel="noopener noreferrer">OOCSS 위키 페이지<ExternalLinkIcon/></a></p>
<h2 id="블록-요소-수정자-bem" tabindex="-1"><a class="header-anchor" href="#블록-요소-수정자-bem" aria-hidden="true">#</a> 블록 요소 수정자 (BEM):</h2>
<p>첫 번째 질문은, 왜 이 원칙을 BEM이라고 부르게 되었을까요? 🤔</p>
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
<p>BEM 방법론에서는 웹 페이지의 주요 구조 구성 요소를 블록이라고 합니다.</p>
<p>만약 페이지를 왼쪽, 가운데, 오른쪽 세 부분으로 나누면 다음과 같습니다.</p>
<p>예시는 아래와 같습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"left-side"</span><span class="token operator">></span>
   <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"left-side__url-text"</span><span class="token operator">></span>
      자세한 내용을 원하시면
      <span class="token operator">&lt;</span>a <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"left-side__url"</span> href<span class="token operator">=</span><span class="token string">"www.examplelink.com"</span><span class="token operator">></span>
      여기를 클릭해주세요<span class="token punctuation">.</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
   <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"center"</span><span class="token operator">></span>
   <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"center__form"</span><span class="token operator">></span>
      <span class="token literal-property property">이름</span><span class="token operator">:</span>
      <span class="token operator">&lt;</span>input <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"center__field"</span> <span class="token operator">/</span><span class="token operator">></span>
   <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"right-side"</span><span class="token operator">></span>
   <span class="token operator">&lt;</span>input <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"right-side__submit-button"</span> type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>제출<span class="token operator">&lt;</span><span class="token operator">/</span>input<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>더 많은 정보를 원하시면 공식 BEM 웹사이트를 확인해주세요.</p>
<h2 id="css용-확장-가능하고-모듈화된-아키텍처-smacss" tabindex="-1"><a class="header-anchor" href="#css용-확장-가능하고-모듈화된-아키텍처-smacss" aria-hidden="true">#</a> CSS용 확장 가능하고 모듈화된 아키텍처 (SMACSS):</h2>
<p>이 방법론은 모든 CSS 코드를 5가지 다른 파일로 나누는 것을 제안합니다.</p>
<p>Base, Layout, Module, State, Theme.</p>
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
<p>베이스: p, h1, span, div와 같은 기본 HTML 태그입니다.</p>
<p>레이아웃: 헤더, 본문, 네비게이션과 같은 특별한 컨테이너입니다.</p>
<p>모듈: 리스트, 콘텐츠, 메뉴와 같은 재사용 가능한 부분입니다.</p>
<p>상태: 요소의 활성, 활성화, 숨겨진 상태입니다.</p>
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
<p>테마: 모든 요소 스타일은 여기에 있습니다.</p>
<p>SMACSS에는 권장되는 네이밍 규칙이 있습니다.</p>
<p>레이아웃 클래스의 경우, -l 접두사를 추가합니다.</p>
<p>모듈의 경우, 접두사 없이 직접 모듈 이름을 사용합니다. 예: .contact-form</p>
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
<p>State에 대해서, 접두사로 -is를 사용하실 수 있습니다. 예를 들어 is-hidden 또는 is-tab-active 같이요.</p>
<p>결론</p>
<p>CSS 작성 방법론에는 총 3가지가 있습니다. 이 세 가지 방법론을 동시에 하나의 프로젝트에서 사용하거나 필요에 맞는 하나를 선택하여 사용할 수 있습니다. 이러한 방법론은 간결하고 유지보수가 용이하며 확장 가능한 CSS를 개발하기 위해 고안되었습니다. 또한 Less, Sass, SCSS와 같은 CSS 전처리기에도 이 방법론을 적용할 수 있습니다.</p>
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
<p>행복한 코딩하세요!</p>
</div></template>
