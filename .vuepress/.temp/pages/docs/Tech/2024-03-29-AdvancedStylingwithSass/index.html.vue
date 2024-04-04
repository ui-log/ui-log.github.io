<template><div><img src="@source/docs/Tech/2024-03-29-AdvancedStylingwithSass/img/AdvancedStylingwithSass_0.png" />
<p>여기서 Sass를 사용한 고급 스타일링에 대해 이야기하고 있습니다. 이를 통해 사용자 정의 SCSS 클래스를 작성할 때 웹 디자인의 효율성을 향상시킬 수 있습니다.</p>
<h1 id="sass-변수" tabindex="-1"><a class="header-anchor" href="#sass-변수" aria-hidden="true">#</a> Sass 변수:</h1>
<p>Sass를 사용하면 문자열, 숫자, 색상, 부울 값, 리스트 및 널과 같은 다양한 변수 유형을 활용할 수 있습니다. 예를 들어:</p>
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
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$myColor</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$myWidth</span></span><span class="token punctuation">:</span> 680px<span class="token punctuation">;</span>

<span class="token selector">.sampleClass </span><span class="token punctuation">{</span>
  <span class="token property">color</span> <span class="token punctuation">:</span> <span class="token variable">$myColor</span><span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$myWidth</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 코드에서 .sampleClass는 Sass 변수를 사용하여 색상과 너비를 제공하여 스타일링을 유연하고 유지보수 가능하게 합니다.</p>
<h1 id="scss-중첩" tabindex="-1"><a class="header-anchor" href="#scss-중첩" aria-hidden="true">#</a> SCSS 중첩:</h1>
<p>Sass는 SCSS에서 중첩을 소개하여 스타일을 보다 구조화되고 가독성있게 구성할 수 있습니다. 다음의 SCSS 코드:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>content <span class="token punctuation">{</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>

  a <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #2ecc71<span class="token punctuation">;</span>

    <span class="token operator">&amp;</span><span class="token operator">:</span>hover <span class="token punctuation">{</span>
      text<span class="token operator">-</span>decoration<span class="token operator">:</span> underline<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 코드는 다음과 같은 CSS 코드와 동일합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>content <span class="token punctuation">{</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>content a <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #2ecc71<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>content a<span class="token operator">:</span>hover <span class="token punctuation">{</span>
  text<span class="token operator">-</span>decoration<span class="token operator">:</span> underline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="sass-파일-가져오기" tabindex="-1"><a class="header-anchor" href="#sass-파일-가져오기" aria-hidden="true">#</a> Sass 파일 가져오기:</h1>
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
<p>CSS와 유사하게, Sass는 외부 파일을 포함하기 위한 @import 지시문을 지원합니다. 예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// _colors.scss 파일</span>
<span class="token literal-property property">$myColor</span><span class="token operator">:</span> #<span class="token constant">EE82EE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token keyword">import</span> <span class="token string">"colors"</span><span class="token punctuation">;</span>
body <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> $myColor<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이를 통해 외부 파일에서 특정 스타일을 가져와 코드 조직화와 유지 보수성을 높일 수 있는 모듈식 접근이 가능합니다.</p>
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
<h1 id="sass-확장-클래스" tabindex="-1"><a class="header-anchor" href="#sass-확장-클래스" aria-hidden="true">#</a> Sass 확장 클래스:</h1>
<p>@extend은 Sass에서 스타일을 상속할 수 있게 해주어 스타일시트의 중복을 줄이는 기능입니다. 이를 통해 일관성을 유지하여 유지보수가 향상됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>text <span class="token punctuation">{</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">'Arial'</span><span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 16px<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">333</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// @extend를 사용하여 스타일 적용</span>
p <span class="token punctuation">{</span>
  @extend <span class="token punctuation">.</span>text<span class="token punctuation">;</span>
  font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">;</span> <span class="token comment">// &lt;p>에 대한 특정 스타일 추가</span>
<span class="token punctuation">}</span>

span <span class="token punctuation">{</span>
  @extend <span class="token punctuation">.</span>text<span class="token punctuation">;</span>
  font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">;</span> <span class="token comment">// &lt;span>에 대한 특정 스타일 추가</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="sass에서-함수-사용하기" tabindex="-1"><a class="header-anchor" href="#sass에서-함수-사용하기" aria-hidden="true">#</a> Sass에서 함수 사용하기:</h1>
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
<p>Sass 함수를 사용하면 계산을 수행하여 동적 스타일링을 가능하게 하며, 더 다양하고 재사용 가능한 스타일을 만들 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token keyword">function</span> <span class="token function">calculateMarginLeft</span><span class="token punctuation">(</span><span class="token parameter">$n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 계산 수행 후 값을 반환</span>
  @<span class="token keyword">return</span> $n <span class="token operator">*</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>sample <span class="token punctuation">{</span>
  <span class="token literal-property property">float</span><span class="token operator">:</span> left<span class="token punctuation">;</span>
  margin<span class="token operator">-</span>left<span class="token operator">:</span> <span class="token function">calculateMarginLeft</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="if-else-조건-사용" tabindex="-1"><a class="header-anchor" href="#if-else-조건-사용" aria-hidden="true">#</a> If Else 조건 사용:</h1>
<p>Sass의 조건문(@if 및 @else if)을 사용하면 특정 조건에 기반하여 스타일을 적용할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token keyword">function</span> get<span class="token operator">-</span>text<span class="token operator">-</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token parameter">$input</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  @<span class="token keyword">if</span> $input <span class="token operator">==</span> <span class="token string">"light"</span> <span class="token punctuation">{</span>
    @<span class="token keyword">return</span> #<span class="token number">333</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> @<span class="token keyword">else</span> <span class="token keyword">if</span> $input <span class="token operator">==</span> <span class="token string">"dark"</span> <span class="token punctuation">{</span>
    @<span class="token keyword">return</span> #fff<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>text <span class="token punctuation">{</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 16px<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> get<span class="token operator">-</span>text<span class="token operator">-</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token string">"light"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="scss에서-for-루프-사용하기" tabindex="-1"><a class="header-anchor" href="#scss에서-for-루프-사용하기" aria-hidden="true">#</a> SCSS에서 For 루프 사용하기:</h1>
<p>Sass @each 루프는 여러 요소에 대한 스타일 생성을 간편화하여 효율성을 높입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 초기값을 가진 테마 색상 맵 설정</span>
$theme<span class="token operator">-</span>colors<span class="token operator">:</span> <span class="token punctuation">(</span>
  <span class="token string-property property">"primary"</span><span class="token operator">:</span> #3498db<span class="token punctuation">,</span>
  <span class="token string-property property">"secondary"</span><span class="token operator">:</span> #2ecc71<span class="token punctuation">,</span>
  <span class="token string-property property">"success"</span><span class="token operator">:</span> #28a745<span class="token punctuation">,</span>
  <span class="token string-property property">"info"</span><span class="token operator">:</span> #17a2b8<span class="token punctuation">,</span>
  <span class="token string-property property">"warning"</span><span class="token operator">:</span> #ffc107<span class="token punctuation">,</span>
  <span class="token string-property property">"danger"</span><span class="token operator">:</span> #dc3545<span class="token punctuation">,</span>
  <span class="token string-property property">"light"</span><span class="token operator">:</span> #f8f9fa<span class="token punctuation">,</span>
  <span class="token string-property property">"dark"</span><span class="token operator">:</span> #343a40
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 테마 색상 맵을 순회하며 스타일 생성</span>
@each $state<span class="token punctuation">,</span> $color <span class="token keyword">in</span> $theme<span class="token operator">-</span>colors <span class="token punctuation">{</span>
  <span class="token punctuation">.</span>text<span class="token operator">-</span>#<span class="token punctuation">{</span>$state<span class="token punctuation">}</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> $color<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위의 코드는 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>text<span class="token operator">-</span>primary <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #3498db<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>text<span class="token operator">-</span>secondary <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #2ecc71<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>text<span class="token operator">-</span>success <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #28a745<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>text<span class="token operator">-</span>info <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #17a2b8<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>text<span class="token operator">-</span>warning <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #ffc107<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>text<span class="token operator">-</span>danger <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #dc3545<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>text<span class="token operator">-</span>light <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #f8f9fa<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>text<span class="token operator">-</span>dark <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #343a40<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="색상-함수" tabindex="-1"><a class="header-anchor" href="#색상-함수" aria-hidden="true">#</a> 색상 함수:</h1>
<p>Sass 색상 함수인 lighten과 같은 것들을 사용하면 색상을 동적으로 조작할 수 있습니다. 이 예시는 이러한 함수가 어떻게 다양한 색상 조합을 만들어내는 것을 단순화해주는지를 보여줍니다. 이를 통해 스타일 시트에서 각 색상 값을 수동으로 지정하지 않고도 동적으로 조정할 수 있습니다.</p>
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
<p>위의 내용을 한국어로 번역하면 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">$myColor</span><span class="token operator">:</span> #<span class="token number">004776</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span>sample <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token function">lighten</span><span class="token punctuation">(</span>$myColor<span class="token punctuation">,</span> <span class="token number">20</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>결과는 아래와 같이 나타납니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>sample <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #0084dc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>함수, if-else 조건 및 루프를 SCSS 코드에서 사용하여 스타일을 생성하는 과정을 더 쉽고 조직적으로 만들 수 있다는 것을 이해하실 수 있습니다. 이러한 도구들을 사용하면 값 계산, 색상 구성 관리 및 스타일 일관성 적용에 도움이 되어 코드가 효율적이고 다양한 디자인 요구에 적응 가능하게 됩니다.</p>
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
<h1 id="sass-믹스인" tabindex="-1"><a class="header-anchor" href="#sass-믹스인" aria-hidden="true">#</a> Sass 믹스인</h1>
<p>Sass 믹스인에 대해 더 알아보려면 여기를 클릭하세요.</p>
</div></template>
