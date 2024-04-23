<template><div><h2 id="혼돈으로부터-질서로" tabindex="-1"><a class="header-anchor" href="#혼돈으로부터-질서로" aria-hidden="true">#</a> 혼돈으로부터 질서로</h2>
<p><img src="@source/docs/Tech/2024-04-19-UnderstandingCSSArchitecture/img/UnderstandingCSSArchitecture_0.png" alt="이미지"></p>
<p>여러 해 동안 CSS의 발전은 다양한 아키텍처와 방법론의 도입을 이끌어내어 코드 조직화, 유지보수 및 개발자 간의 협업을 향상시키는 데 도움이 되었습니다.</p>
<h1 id="방법론-이전의-css" tabindex="-1"><a class="header-anchor" href="#방법론-이전의-css" aria-hidden="true">#</a> 방법론 이전의 CSS</h1>
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
<p>웹 개발 초기에는 스타일링이 주로 HTML 파일 안에서 직접 처리되어 분산되고 유지하기 어렵게 되었습니다. 웹사이트가 더 복잡해지면서 체계적인 접근 방법에 대한 필요성이 대두되었습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>인라인 <span class="token constant">CSS</span> 예제<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
    
    <span class="token operator">&lt;</span>style<span class="token operator">></span>
        body <span class="token punctuation">{</span>
            font<span class="token operator">-</span>family<span class="token operator">:</span> Arial<span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
            background<span class="token operator">-</span>color<span class="token operator">:</span> #f0f0f0<span class="token punctuation">;</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">333</span><span class="token punctuation">;</span>
            <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token literal-property property">padding</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        h1 <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> #0066cc<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        p <span class="token punctuation">{</span>
            line<span class="token operator">-</span>height<span class="token operator">:</span> <span class="token number">1.6</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>

    <span class="token operator">&lt;</span>h1<span class="token operator">></span>안녕<span class="token punctuation">,</span> 인라인 <span class="token constant">CSS</span><span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>

    <span class="token operator">&lt;</span>p<span class="token operator">></span>이것은 <span class="token constant">HTML</span> 파일 내에서 인라인 <span class="token constant">CSS</span>를 사용한 예제입니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="혼돈에서-질서로" tabindex="-1"><a class="header-anchor" href="#혼돈에서-질서로" aria-hidden="true">#</a> 혼돈에서 질서로</h1>
<h2 id="smacss-소개" tabindex="-1"><a class="header-anchor" href="#smacss-소개" aria-hidden="true">#</a> SMACSS 소개</h2>
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
<p>SMACSS(Scalable and Modular Architecture for CSS)는 Jonathan Snook가 소개한 것으로, CSS 규칙을 base, layout, module, state 및 theme 카테고리로 분류하는 것을 강조합니다. 이 모듈식 접근 방식은 유지 보수성을 향상시키고 개발자 간의 협력을 더 원활하게 만들어줍니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* Base styles */</span>
body <span class="token punctuation">{</span>
 font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">'Arial'</span><span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
 line<span class="token operator">-</span>height<span class="token operator">:</span> <span class="token number">1.6</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Layout styles */</span>
<span class="token punctuation">.</span>container <span class="token punctuation">{</span>
 <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">80</span><span class="token operator">%</span><span class="token punctuation">;</span>
 <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Module styles */</span>
<span class="token punctuation">.</span>button <span class="token punctuation">{</span>
 background<span class="token operator">-</span>color<span class="token operator">:</span> #3498db<span class="token punctuation">;</span>
 <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
 <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="oocss-object-oriented-css" tabindex="-1"><a class="header-anchor" href="#oocss-object-oriented-css" aria-hidden="true">#</a> OOCSS (Object-Oriented CSS)</h2>
<p>Nicole Sullivan이 개척한 OOCSS는 재사용 가능하고 독립적인 스타일 구성 요소를 만드는 것을 장려합니다. 이 방법론은 구조와 스킨을 분리하여 코드의 유지 보수성을 향상시킵니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* Object styles */</span>
<span class="token punctuation">.</span>box <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> block<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Skin styles */</span>
<span class="token punctuation">.</span>box<span class="token operator">-</span>primary <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #3498db<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>box<span class="token operator">-</span>secondary <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #e74c3c<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bem-block-element-modifier" tabindex="-1"><a class="header-anchor" href="#bem-block-element-modifier" aria-hidden="true">#</a> BEM (Block Element Modifier)</h2>
<p>BEM은 Yandex에서 소개한 네이밍 규칙으로, 엄격한 네이밍 규칙을 통해 독립적이고 재사용 가능한 컴포넌트를 만드는 데 중점을 둡니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* Block component */</span>
<span class="token punctuation">.</span>header <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #<span class="token number">333</span><span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Element within the block */</span>
<span class="token punctuation">.</span>header__logo <span class="token punctuation">{</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>5em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Modifier to alter the block or element */</span>
<span class="token punctuation">.</span>header__logo<span class="token operator">-</span>small <span class="token punctuation">{</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 1em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Block component */</span>
<span class="token punctuation">.</span>btn <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">/* Element that depends upon the block */</span> 
<span class="token punctuation">.</span>btn__price <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">/* Modifier that changes the style of the block */</span>
<span class="token punctuation">.</span>btn<span class="token operator">--</span>orange <span class="token punctuation">{</span><span class="token punctuation">}</span> 
<span class="token punctuation">.</span>btn<span class="token operator">--</span>big <span class="token punctuation">{</span><span class="token punctuation">}</span>
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
<h2 id="글로벌-변수와-함께-하는-css4" tabindex="-1"><a class="header-anchor" href="#글로벌-변수와-함께-하는-css4" aria-hidden="true">#</a> 글로벌 변수와 함께 하는 CSS4</h2>
<p>CSS4는 글로벌 변수를 소개하여 스타일 시트 간의 값들을 효율적으로 관리하고 재사용할 수 있는 방법을 제공합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">:</span>root <span class="token punctuation">{</span>
   <span class="token operator">-</span>primary<span class="token operator">-</span>color<span class="token operator">:</span> #3498db<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>button <span class="token punctuation">{</span>
   background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">-</span>primary<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="전처리기-도움이-돼주는-도구" tabindex="-1"><a class="header-anchor" href="#전처리기-도움이-돼주는-도구" aria-hidden="true">#</a> 전처리기: 도움이 돼주는 도구</h2>
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
<p>Sass나 Less와 같은 전처리기는 변수, 믹스인, 중첩 구문과 같은 추가 기능을 제공하여 복잡한 스타일시트를 쉽게 작성할 수 있습니다.</p>
<p>Sass를 사용한 예시:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$primary<span class="token operator">-</span>color<span class="token operator">:</span> #3498db<span class="token punctuation">;</span>
<span class="token literal-property property">$white</span><span class="token operator">:</span> #fff
$border<span class="token operator">-</span>radius<span class="token operator">-</span>sm<span class="token operator">:</span> 5px<span class="token punctuation">;</span>

<span class="token punctuation">.</span>button <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> $primary<span class="token operator">-</span>color<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> $white<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> $border<span class="token operator">-</span>radius<span class="token operator">-</span>sm<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-in-js" tabindex="-1"><a class="header-anchor" href="#css-in-js" aria-hidden="true">#</a> CSS in JS</h2>
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
<p>자바스크립트 프레임워크의 등장으로 CSS-in-JS 솔루션이 등장했고, 개발자들이 스타일을 자바스크립트 컴포넌트 안에 캡슐화할 수 있게 되었습니다.</p>
<p>React에서 styled-components를 사용한 예시:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">'styled-components'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Button <span class="token operator">=</span> styled<span class="token punctuation">.</span>button<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  background-color: #3498db;
  color: #fff;
  padding: 10px 15px;
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="최상의-실천-방법과-고려-사항" tabindex="-1"><a class="header-anchor" href="#최상의-실천-방법과-고려-사항" aria-hidden="true">#</a> 최상의 실천 방법과 고려 사항</h1>
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
<li>반응형 디자인: 다양한 기기에서 원활한 사용자 경험을 보장하기 위해 반응형 디자인을 우선시합니다.</li>
<li>최적화: CSS 파일을 최소화하고 효율적인 선택자를 사용하며 브라우저 캐싱을 활용하여 최상의 성능을 보장합니다.</li>
<li>접근성: 포용적인 웹 애플리케이션을 만들기 위해 접근성 표준을 준수합니다.</li>
<li>일관성: 향상된 협업을 위해 일관된 코딩 스타일, 네이밍 규칙 및 디렉터리 구조를 유지합니다.</li>
<li>문서화: 향후 개발자들을 지원하기 위해 코드를 문서화합니다, 특히 복잡한 아키텍처를 사용할 때.</li>
</ul>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>결론적으로, CSS의 세계는 크게 발전하였으며, 코드 조직화와 유지보수성을 향상시키는 다양한 방법론과 도구를 개발자들에게 제공합니다. 올바른 방법론을 선택하는 것은 프로젝트 요구사항과 팀의 선호도에 달려있습니다. 신뢰할 만한 표준과 최고의 실천 방법에 대해 계속해서 정보를 습득하는 것은 견고하고 확장 가능한 웹 애플리케이션을 만드는 데 중요합니다.</p>
<h1 id="참고문헌" tabindex="-1"><a class="header-anchor" href="#참고문헌" aria-hidden="true">#</a> 참고문헌</h1>
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
<li>https://getbem.com/</li>
<li>https://smacss.com/</li>
<li>https://itcss.io/</li>
<li>http://oocss.org/</li>
</ul>
<p>의견이나 제안이 있으시면 언제든 댓글을 남겨주세요.
읽어주셔서 감사합니다.</p>
<p>X, Github 또는 LinkedIn에서 제 소식을 받아보실 수 있습니다.</p>
<p>다음에 봐요! 👋</p>
</div></template>
