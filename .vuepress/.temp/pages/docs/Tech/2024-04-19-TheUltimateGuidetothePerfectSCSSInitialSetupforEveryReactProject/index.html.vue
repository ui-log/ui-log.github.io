<template><div><h2 id="템플릿-scss-폴더-구조를-찾기-어려우신가요-언제든-환영합니다" tabindex="-1"><a class="header-anchor" href="#템플릿-scss-폴더-구조를-찾기-어려우신가요-언제든-환영합니다" aria-hidden="true">#</a> 템플릿 SCSS 폴더 구조를 찾기 어려우신가요? 언제든 환영합니다...</h2>
<p><img src="@source/docs/Tech/2024-04-19-TheUltimateGuidetothePerfectSCSSInitialSetupforEveryReactProject/img/TheUltimateGuidetothePerfectSCSSInitialSetupforEveryReactProject_0.png" alt="SCSS"></p>
<p>리액트 프로젝트에서 SCSS(Sass)를 설정하면 변수, 믹스인, 중첩된 규칙 등 SCSS가 제공하는 강력한 기능과 문법을 활용할 수 있습니다. 이 기사는 React 애플리케이션에서 SCSS를 구성하는 포괄적인 가이드를 제공하며, 상세한 설명과 예제를 포함하고 있습니다.</p>
<h2 id="_1-필요한-종속-항목-설치-및-구성" tabindex="-1"><a class="header-anchor" href="#_1-필요한-종속-항목-설치-및-구성" aria-hidden="true">#</a> 1. 필요한 종속 항목 설치 및 구성:</h2>
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
<p>React에서 SCSS를 사용하려면 sass 패키지가 필요합니다. 아래 명령어를 사용하여 설치해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev sass sass<span class="token operator">-</span>loader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>rules 배열을 수정하여 Webpack 구성을 업데이트해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.scss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'style-loader'</span><span class="token punctuation">,</span> <span class="token string">'css-loader'</span><span class="token punctuation">,</span> <span class="token string">'sass-loader'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
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
<p>다음으로 기존의 .css 파일을 .scss 파일로 이름을 바꾸고 해당 JavaScript 파일에서 import 문을 업데이트하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// index.js</span>

<span class="token keyword">import</span> <span class="token string">'./styles/index.scss'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-scss-파일-및-폴더-구조화" tabindex="-1"><a class="header-anchor" href="#_2-scss-파일-및-폴더-구조화" aria-hidden="true">#</a> 2. SCSS 파일 및 폴더 구조화:</h2>
<p>SCSS 파일을 위한 전용 폴더를 생성하세요. 이 폴더는 일반적으로 src 폴더 내에 scss 또는 styles로 이름이 지어집니다. 이 폴더에는 전역 스타일, 변수 및 믹스인이 포함됩니다.</p>
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
<p>다음은 권장되는 폴더 구조입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>src<span class="token operator">/</span>
  ├── styles<span class="token operator">/</span>
  │   │
  │   ├── base<span class="token operator">/</span>
  │   │   ├── colors<span class="token punctuation">.</span>scss
  │   │   ├── global<span class="token punctuation">.</span>scss
  │   │   ├── reset<span class="token punctuation">.</span>scss
  │   │   └── typography<span class="token punctuation">.</span>scss
  │   │
  │   ├── components<span class="token operator">/</span>
  │   │   ├── buttons<span class="token punctuation">.</span>scss
  │   │   └── forms<span class="token punctuation">.</span>scss
  │   │
  │   ├── layout<span class="token operator">/</span>
  │   │   ├── footer<span class="token punctuation">.</span>scss
  │   │   └── header<span class="token punctuation">.</span>scss
  │   │
  │   ├── utilities<span class="token operator">/</span>
  │   │   ├── variables<span class="token punctuation">.</span>scss
  │   │   ├── mixins<span class="token punctuation">.</span>scss
  │   │   └── functions<span class="token punctuation">.</span>scss
  │   └── index<span class="token punctuation">.</span>scss
  │
  ├── App<span class="token punctuation">.</span>js
  └── index<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>base/: 이 폴더에는 프로젝트의 기본 스타일인 전역 스타일, 초기화 스타일, 타이포그래피 및 색상이 포함됩니다.</li>
<li>components/: 이 폴더에는 버튼, 폼, 카드, 모달과 같은 개별 UI 컴포넌트에 대한 스타일이 포함됩니다.</li>
<li>layout/: 이 폴더에는 프로젝트 전체 레이아웃과 관련된 스타일인 헤더, 푸터, 그리드 시스템, 내비게이션 등이 포함됩니다.</li>
<li>utils/: 이 폴더에는 프로젝트 전체에서 사용되는 변수, 믹스인, 함수와 같은 Sass 유틸리티가 포함됩니다.</li>
<li>index.scss: 이 파일은 모든 다른 SCSS 파일을 가져오는 주요 SCSS 파일입니다.</li>
</ul>
<h2 id="_3-각-scss-폴더에-대한-초기-설정" tabindex="-1"><a class="header-anchor" href="#_3-각-scss-폴더에-대한-초기-설정" aria-hidden="true">#</a> 3. 각 SCSS 폴더에 대한 초기 설정:</h2>
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
<h2 id="_3-1-reset-scss" tabindex="-1"><a class="header-anchor" href="#_3-1-reset-scss" aria-hidden="true">#</a> 3.1 reset.scss:</h2>
<p>이것은 브라우저별 기본 스타일을 제거하고 깨끗한 상태로 작업할 수 있도록 하여 일관된 크로스 브라우저 스타일링을 제공합니다. Eric Meyer의 CSS Reset: 모든 내장 브라우저 스타일을 제거하여 모든 요소에 대해 완전한 제어권을 제공합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>html<span class="token punctuation">,</span> body<span class="token punctuation">,</span> div<span class="token punctuation">,</span> span<span class="token punctuation">,</span> applet<span class="token punctuation">,</span> object<span class="token punctuation">,</span> iframe<span class="token punctuation">,</span>
h1<span class="token punctuation">,</span> h2<span class="token punctuation">,</span> h3<span class="token punctuation">,</span> h4<span class="token punctuation">,</span> h5<span class="token punctuation">,</span> h6<span class="token punctuation">,</span> p<span class="token punctuation">,</span> blockquote<span class="token punctuation">,</span> pre<span class="token punctuation">,</span>
a<span class="token punctuation">,</span> abbr<span class="token punctuation">,</span> acronym<span class="token punctuation">,</span> address<span class="token punctuation">,</span> big<span class="token punctuation">,</span> cite<span class="token punctuation">,</span> code<span class="token punctuation">,</span>
del<span class="token punctuation">,</span> dfn<span class="token punctuation">,</span> em<span class="token punctuation">,</span> img<span class="token punctuation">,</span> ins<span class="token punctuation">,</span> kbd<span class="token punctuation">,</span> q<span class="token punctuation">,</span> s<span class="token punctuation">,</span> samp<span class="token punctuation">,</span>
small<span class="token punctuation">,</span> strike<span class="token punctuation">,</span> strong<span class="token punctuation">,</span> sub<span class="token punctuation">,</span> sup<span class="token punctuation">,</span> tt<span class="token punctuation">,</span> <span class="token keyword">var</span><span class="token punctuation">,</span>
b<span class="token punctuation">,</span> u<span class="token punctuation">,</span> i<span class="token punctuation">,</span> center<span class="token punctuation">,</span>
dl<span class="token punctuation">,</span> dt<span class="token punctuation">,</span> dd<span class="token punctuation">,</span> ol<span class="token punctuation">,</span> ul<span class="token punctuation">,</span> li<span class="token punctuation">,</span>
fieldset<span class="token punctuation">,</span> form<span class="token punctuation">,</span> label<span class="token punctuation">,</span> legend<span class="token punctuation">,</span>
table<span class="token punctuation">,</span> caption<span class="token punctuation">,</span> tbody<span class="token punctuation">,</span> tfoot<span class="token punctuation">,</span> thead<span class="token punctuation">,</span> tr<span class="token punctuation">,</span> th<span class="token punctuation">,</span> td<span class="token punctuation">,</span>
article<span class="token punctuation">,</span> aside<span class="token punctuation">,</span> canvas<span class="token punctuation">,</span> details<span class="token punctuation">,</span> embed<span class="token punctuation">,</span> 
figure<span class="token punctuation">,</span> figcaption<span class="token punctuation">,</span> footer<span class="token punctuation">,</span> header<span class="token punctuation">,</span> hgroup<span class="token punctuation">,</span> 
menu<span class="token punctuation">,</span> nav<span class="token punctuation">,</span> output<span class="token punctuation">,</span> ruby<span class="token punctuation">,</span> section<span class="token punctuation">,</span> summary<span class="token punctuation">,</span>
time<span class="token punctuation">,</span> mark<span class="token punctuation">,</span> audio<span class="token punctuation">,</span> video <span class="token punctuation">{</span>
 <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
 font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
 <span class="token literal-property property">font</span><span class="token operator">:</span> inherit<span class="token punctuation">;</span>
 vertical<span class="token operator">-</span>align<span class="token operator">:</span> baseline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* HTML5 display-role reset for older browsers */</span>
article<span class="token punctuation">,</span> aside<span class="token punctuation">,</span> details<span class="token punctuation">,</span> figcaption<span class="token punctuation">,</span> figure<span class="token punctuation">,</span> 
footer<span class="token punctuation">,</span> header<span class="token punctuation">,</span> hgroup<span class="token punctuation">,</span> menu<span class="token punctuation">,</span> nav<span class="token punctuation">,</span> section <span class="token punctuation">{</span>
 <span class="token literal-property property">display</span><span class="token operator">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
body <span class="token punctuation">{</span>
 line<span class="token operator">-</span>height<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
ol<span class="token punctuation">,</span> ul <span class="token punctuation">{</span>
 list<span class="token operator">-</span>style<span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
blockquote<span class="token punctuation">,</span> q <span class="token punctuation">{</span>
 <span class="token literal-property property">quotes</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token literal-property property">blockquote</span><span class="token operator">:</span>before<span class="token punctuation">,</span> <span class="token literal-property property">blockquote</span><span class="token operator">:</span>after<span class="token punctuation">,</span>
<span class="token literal-property property">q</span><span class="token operator">:</span>before<span class="token punctuation">,</span> <span class="token literal-property property">q</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
 <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
 <span class="token literal-property property">content</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
table <span class="token punctuation">{</span>
 border<span class="token operator">-</span>collapse<span class="token operator">:</span> collapse<span class="token punctuation">;</span>
 border<span class="token operator">-</span>spacing<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>reset.css 대안으로 normalize.css가 있습니다. 내장된 브라우저 스타일을 일관되게 유지하면서 유용한 기본 스타일을 유지하려고 합니다.</p>
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
<h2 id="_3-2-global-scss" tabindex="-1"><a class="header-anchor" href="#_3-2-global-scss" aria-hidden="true">#</a> 3.2 global.scss:</h2>
<p>global.scss 파일은 전체 React 애플리케이션에 적용되는 전역 스타일을 저장하는 데 사용됩니다. 모든 요소의 box-sizing 속성을 border-box로 설정하여 요소 크기와 레이아웃을 쉽게 관리할 수 있습니다. box-sizing의 기본값은 content-box이며, 이는 패딩, 테두리 및 여백이 크기에 포함되지 않음을 의미합니다. 요소에 적용된 어떤 패딩, 테두리 또는 여백도 지정된 너비와 높이 외부에 추가되어 요소의 전체 렌더링 크기가 폭과 높이 속성으로 설정된 크기보다 큰 경우가 발생합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">*</span><span class="token punctuation">,</span>
<span class="token operator">*</span><span class="token operator">:</span><span class="token operator">:</span>before<span class="token punctuation">,</span>
<span class="token operator">*</span><span class="token operator">:</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
  box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-3-colors-scss" tabindex="-1"><a class="header-anchor" href="#_3-3-colors-scss" aria-hidden="true">#</a> 3.3 colors.scss:</h2>
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
<p>애플리케이션 전체에서 일관된 사용을 위해 색상 변수 및 관련 색상 클래스를 정의하세요. 프로젝트 요구 사항에 따라 설정을 변경할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$primary<span class="token operator">-</span>color<span class="token operator">:</span> #3498db<span class="token punctuation">;</span>
$secondary<span class="token operator">-</span>color<span class="token operator">:</span> #2ecc71<span class="token punctuation">;</span>

<span class="token comment">// 회색 스케일 색상</span>
$gray<span class="token operator">-</span><span class="token number">100</span><span class="token operator">:</span> #f8f9fa<span class="token punctuation">;</span>
$gray<span class="token operator">-</span><span class="token number">200</span><span class="token operator">:</span> #e9ecef<span class="token punctuation">;</span>
$gray<span class="token operator">-</span><span class="token number">300</span><span class="token operator">:</span> #dee2e6<span class="token punctuation">;</span>

$gray<span class="token operator">-</span><span class="token number">500</span><span class="token operator">:</span> #adb5bd<span class="token punctuation">;</span>
$gray<span class="token operator">-</span><span class="token number">600</span><span class="token operator">:</span> #6c757d<span class="token punctuation">;</span>
$gray<span class="token operator">-</span><span class="token number">700</span><span class="token operator">:</span> #<span class="token number">495057</span><span class="token punctuation">;</span>
$gray<span class="token operator">-</span><span class="token number">800</span><span class="token operator">:</span> #343a40<span class="token punctuation">;</span>
$gray<span class="token operator">-</span><span class="token number">900</span><span class="token operator">:</span> #<span class="token number">212529</span><span class="token punctuation">;</span>

<span class="token comment">// 배경 및 텍스트 색상</span>
$background<span class="token operator">-</span>color<span class="token operator">:</span> #ffffff<span class="token punctuation">;</span>
$text<span class="token operator">-</span>color<span class="token operator">:</span> $gray<span class="token operator">-</span><span class="token number">900</span><span class="token punctuation">;</span>

<span class="token comment">// 시맨틱 색상</span>
$success<span class="token operator">-</span>color<span class="token operator">:</span> #28a745<span class="token punctuation">;</span>
$error<span class="token operator">-</span>color<span class="token operator">:</span> #dc3545<span class="token punctuation">;</span>
$warning<span class="token operator">-</span>color<span class="token operator">:</span> #ffc107<span class="token punctuation">;</span>
$info<span class="token operator">-</span>color<span class="token operator">:</span> #17a2b8<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-4-typography-scss" tabindex="-1"><a class="header-anchor" href="#_3-4-typography-scss" aria-hidden="true">#</a> 3.4 typography.scss:</h2>
<p>글꼴 패밀리, 글꼴 크기, 글꼴 두께 및 기타 텍스트 관련 스타일과 같은 타이포그래피 스타일을 정의하세요.</p>
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
<h2 id="_3-5-index-scss" tabindex="-1"><a class="header-anchor" href="#_3-5-index-scss" aria-hidden="true">#</a> 3.5 index.scss:</h2>
<p>모든 SCSS 파일을 구성한 후에는 SCSS 폴더의 진입 지점인 index.scss에서 모두 import하는지 확인해주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Base</span>
@<span class="token keyword">import</span> <span class="token string">'base/global'</span><span class="token punctuation">;</span>
@<span class="token keyword">import</span> <span class="token string">'base/reset'</span><span class="token punctuation">;</span>
@<span class="token keyword">import</span> <span class="token string">'base/typography'</span><span class="token punctuation">;</span>
@<span class="token keyword">import</span> <span class="token string">'base/colors'</span><span class="token punctuation">;</span>

<span class="token comment">// Layout</span>
@<span class="token keyword">import</span> <span class="token string">'layout/header'</span><span class="token punctuation">;</span>
@<span class="token keyword">import</span> <span class="token string">'layout/footer'</span><span class="token punctuation">;</span>
@<span class="token keyword">import</span> <span class="token string">'layout/grid'</span><span class="token punctuation">;</span>
@<span class="token keyword">import</span> <span class="token string">'layout/navigation'</span><span class="token punctuation">;</span>

<span class="token comment">// Components</span>
@<span class="token keyword">import</span> <span class="token string">'components/buttons'</span><span class="token punctuation">;</span>
@<span class="token keyword">import</span> <span class="token string">'components/forms'</span><span class="token punctuation">;</span>
@<span class="token keyword">import</span> <span class="token string">'components/cards'</span><span class="token punctuation">;</span>
@<span class="token keyword">import</span> <span class="token string">'components/modals'</span><span class="token punctuation">;</span>

<span class="token comment">// Utils</span>
@<span class="token keyword">import</span> <span class="token string">'utils/variables'</span><span class="token punctuation">;</span>
@<span class="token keyword">import</span> <span class="token string">'utils/mixins'</span><span class="token punctuation">;</span>
@<span class="token keyword">import</span> <span class="token string">'utils/functions'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-프로덕션을-위한-scss-설정-최적화" tabindex="-1"><a class="header-anchor" href="#_4-프로덕션을-위한-scss-설정-최적화" aria-hidden="true">#</a> 4. 프로덕션을 위한 SCSS 설정 최적화:</h2>
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
<p>프로덕션을 위해 SCSS를 최적화하려면, PurgeCSS와 같은 도구를 사용하여 최종 번들에서 사용되지 않는 CSS를 제거하는 것을 고려해보세요. 이를 통해 CSS 파일의 크기를 상당히 줄이고 로드 시간을 개선할 수 있습니다. PurgeCSS를 웹팩 플러그인으로 구성하거나 PostCSS 플러그인으로 사용할 수 있습니다.</p>
<p>또한 cssnano와 같은 도구를 사용하여 CSS 파일을 압축할 수도 있습니다. cssnano는 인기 있는 PostCSS 플러그인으로, CSS 파일에서 주석, 공백 및 다른 불필요한 문자를 제거하여 번들 크기를 줄일 수 있습니다.</p>
<ul>
<li>먼저, 필요한 종속성을 설치하세요:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev @fullhuman<span class="token operator">/</span>postcss<span class="token operator">-</span>purgecss cssnano postcss postcss<span class="token operator">-</span>cli postcss<span class="token operator">-</span>loader
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
<ol start="2">
<li>다음 내용을 포함하여 프로젝트 루트 폴더에 postcss.config.js 파일을 만드세요:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> purgecss <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@fullhuman/postcss-purgecss'</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'./src/**/*.js'</span><span class="token punctuation">,</span> <span class="token string">'./src/**/*.jsx'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token function-variable function">defaultExtractor</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token operator">=></span> content<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\w-/:]+(?&lt;!:)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> cssnano <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'cssnano'</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">preset</span><span class="token operator">:</span> <span class="token string">'default'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'autoprefixer'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'production'</span> <span class="token operator">?</span> <span class="token punctuation">[</span>purgecss<span class="token punctuation">,</span> cssnano<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 구성 파일에서는 PurgeCSS를 설정하여 src 폴더의 .js 및 .jsx 파일을 스캔하여 사용되지 않는 CSS를 제거합니다. 또한 최소화를 위해 <code v-pre>default</code> 프리셋을 사용하여 cssnano를 구성합니다.</p>
<ol start="3">
<li>webpack.config.js 파일을 업데이트하여 postcss-loader를 포함하세요.</li>
</ol>
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
<p>Create React App (CRA)을 사용 중이라면, 먼저 npm run eject 명령을 실행하여 응용 프로그램을 eject해야 합니다. 그런 다음 webpack.config.js 파일을 찾아 CSS 규칙 섹션을 찾으세요. .css 및 .scss 규칙 모두에 postcss-loader를 use 배열에 추가해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> cssRegex<span class="token punctuation">,</span>
  <span class="token literal-property property">exclude</span><span class="token operator">:</span> cssModuleRegex<span class="token punctuation">,</span>
  <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token function">getStyleLoaders</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">importLoaders</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// importLoaders 카운트에 postcss-loader를 추가합니다</span>
      <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> isEnvProduction <span class="token operator">&amp;&amp;</span> shouldUseSourceMap<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">'postcss-loader'</span> <span class="token comment">// 여기에 postcss-loader를 추가합니다</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> sassRegex<span class="token punctuation">,</span>
  <span class="token literal-property property">exclude</span><span class="token operator">:</span> sassModuleRegex<span class="token punctuation">,</span>
  <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token function">getStyleLoaders</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">importLoaders</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// importLoaders 카운트에 postcss-loader를 추가합니다</span>
      <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> isEnvProduction <span class="token operator">&amp;&amp;</span> shouldUseSourceMap<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">'postcss-loader'</span><span class="token punctuation">,</span> <span class="token comment">// 여기에 postcss-loader를 추가합니다</span>
    <span class="token string">'sass-loader'</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>이러한 최적화를 적용하려면 응용 프로그램을 빌드할 때 NODE_ENV 환경 변수를 <code v-pre>production</code>으로 설정하세요.</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">NODE_ENV</span><span class="token operator">=</span>production npm run build
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
<p>이 구성을 사용하면 PurgeCSS가 최종 번들에서 사용되지 않는 CSS를 제거하고, cssnano가 CSS를 최소화하여 제작용 번들을 더 작고 최적화된 상태로 만들어 줍니다.</p>
<p>요약하면, React 프로젝트에 대한 완벽한 SCSS 초기 설정을 수립하면 개발 경험을 크게 향상시킬 수 있으며, 스타일 시트를 관리, 유지 및 확장하기가 더 쉬워집니다. 이 글에서 논의된 지침과 폴더 구조를 따라 스타일에 견고한 기반을 마련하여, 스타일을 정리하는 데 적은 시간을 쓰고 애플리케이션에 놀라운 기능을 구축하는 데 더 많은 시간을 쏟을 수 있습니다. 잘 구조화된 SCSS 설정을 생성하는 지식을 갖추었으니, 이제 새로운 자신감과 효율성으로 React 프로젝트에 진입해 보세요.</p>
<p>즐거운 코딩되세요!</p>
</div></template>
