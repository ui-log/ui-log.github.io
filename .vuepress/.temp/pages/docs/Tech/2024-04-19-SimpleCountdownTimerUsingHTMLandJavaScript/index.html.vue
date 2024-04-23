<template><div><p>안녕하세요, 코더 여러분! Codewithrandom 블로그에 오신 것을 환영합니다. 이 블로그에서는 HTML, CSS 및 JavaScript를 사용하여 카운트다운 타이머를 만드는 방법을 배웁니다. 카운트다운 타이머는 특정 시간부터 시작하여 제로로 카운트다운되는 기능을 말합니다. 중요한 이벤트가 다가오거나 게임에 남은 시간이 몇 초인 경우, 상황에서 흥미를 더하거나 긴장감을 증가시키는 데 자주 활용됩니다.</p>
<p>카운트다운 타이머는 이벤트, 프레젠테이션, 게임 뿐만 아니라 일상 생활에서도 시간 관리에 활용되는 다양한 상황에서 사용됩니다.
카운트다운 타이머는 사용자들이 생산성을 높이고 더 효율적으로 작업할 수 있도록 도와줍니다.</p>
<p><img src="@source/docs/Tech/2024-04-19-SimpleCountdownTimerUsingHTMLandJavaScript/img/SimpleCountdownTimerUsingHTMLandJavaScript_0.png" alt="이미지"></p>
<p>카운트다운 타이머 프로젝트는 경주나 수영 경기처럼 시간이 중요한 상황에서 항상 보는데, 우리의 카운트다운 타이머는 특별합니다. 왜냐하면 우리는 날, 시간, 분 그리고 초를 세는 기능을 추가했기 때문입니다. 그러니 카운트다운 타이머 만들기를 시작해봅시다.</p>
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
<p>우리 블로그를 즐기시기를 바랍니다, 그러면 이제 카운트다운 타이머를 위한 기본 HTML 구조로 시작해 봅시다.</p>
<h1 id="카운트다운-타이머-html-코드" tabindex="-1"><a class="header-anchor" href="#카운트다운-타이머-html-코드" aria-hidden="true">#</a> 카운트다운 타이머 HTML 코드:-</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>h1 id<span class="token operator">=</span><span class="token string">"headline"</span><span class="token operator">></span>내 생일까지 카운트다운<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"countdown"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>ul<span class="token operator">></span>
<span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>span id<span class="token operator">=</span><span class="token string">"days"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>일<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>span id<span class="token operator">=</span><span class="token string">"hours"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>시간<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>span id<span class="token operator">=</span><span class="token string">"minutes"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>분<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>span id<span class="token operator">=</span><span class="token string">"seconds"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>초<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"content"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"emoji"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>span<span class="token operator">></span>🥳<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
<span class="token operator">&lt;</span>span<span class="token operator">></span>🎉<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
<span class="token operator">&lt;</span>span<span class="token operator">></span>🎂<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>카운트다운 타이머를 위한 컨테이너를 만들기 위해 div 태그와 클래스 &quot;container&quot;를 사용할 것입니다. 카운트다운 타이머의 제목은 <code v-pre>h1</code> 태그를 사용하여 만들 것입니다. 이제 일, 시간, 분 및 초로 카운트다운되는 타이머를 만들어 보겠습니다. 비순차 목록을 활용하여 카운트다운을 만들 것입니다.</p>
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
<p>새로운 div 태그에 &quot;emoji&quot; 클래스가 추가됩니다. 각기 다른 이모지를 위한 span 태그는 세 가지 태그로 만들 것입니다.</p>
<p>카운트다운 타이머는 모든 HTML 코드가 준비되어 있습니다. 현재 JavaScript 및 CSS는 출력에 포함되어 있지 않습니다. countdown 타이머의 스타일링은 CSS로 처리되며, 기능은 JavaScript로 구성되어 있습니다.</p>
<p>HTML 코드 출력:</p>
<p><img src="@source/docs/Tech/2024-04-19-SimpleCountdownTimerUsingHTMLandJavaScript/img/SimpleCountdownTimerUsingHTMLandJavaScript_1.png" alt="이미지"></p>
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
<h1 id="카운트다운-타이머-css-코드" tabindex="-1"><a class="header-anchor" href="#카운트다운-타이머-css-코드" aria-hidden="true">#</a> 카운트다운 타이머 CSS 코드:-</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 일반 스타일링 */</span>
<span class="token operator">:</span>root <span class="token punctuation">{</span>
<span class="token operator">--</span>smaller<span class="token operator">:</span> <span class="token number">.75</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">*</span> <span class="token punctuation">{</span>
box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
<span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
html<span class="token punctuation">,</span> body <span class="token punctuation">{</span>
<span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
body <span class="token punctuation">{</span>
align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
background<span class="token operator">-</span>color<span class="token operator">:</span> #ffd54f<span class="token punctuation">;</span>
<span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token operator">-</span>apple<span class="token operator">-</span>system<span class="token punctuation">,</span>
BlinkMacSystemFont<span class="token punctuation">,</span>
<span class="token string">"Segoe UI"</span><span class="token punctuation">,</span>
Roboto<span class="token punctuation">,</span>
Oxygen<span class="token operator">-</span>Sans<span class="token punctuation">,</span>
Ubuntu<span class="token punctuation">,</span>
Cantarell<span class="token punctuation">,</span>
<span class="token string">"Helvetica Neue"</span><span class="token punctuation">,</span>
sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>container <span class="token punctuation">{</span>
<span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">333</span><span class="token punctuation">;</span>
<span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> auto<span class="token punctuation">;</span>
text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
h1 <span class="token punctuation">{</span>
font<span class="token operator">-</span>weight<span class="token operator">:</span> normal<span class="token punctuation">;</span>
letter<span class="token operator">-</span>spacing<span class="token operator">:</span> <span class="token punctuation">.</span>125rem<span class="token punctuation">;</span>
text<span class="token operator">-</span>transform<span class="token operator">:</span> uppercase<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
li <span class="token punctuation">{</span>
<span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token operator">-</span>block<span class="token punctuation">;</span>
font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>5em<span class="token punctuation">;</span>
list<span class="token operator">-</span>style<span class="token operator">-</span>type<span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token literal-property property">padding</span><span class="token operator">:</span> 1em<span class="token punctuation">;</span>
text<span class="token operator">-</span>transform<span class="token operator">:</span> uppercase<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
li span <span class="token punctuation">{</span>
<span class="token literal-property property">display</span><span class="token operator">:</span> block<span class="token punctuation">;</span>
font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">.</span>5rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>emoji <span class="token punctuation">{</span>
<span class="token literal-property property">display</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token literal-property property">padding</span><span class="token operator">:</span> 1rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>emoji span <span class="token punctuation">{</span>
font<span class="token operator">-</span>size<span class="token operator">:</span> 4rem<span class="token punctuation">;</span>
<span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">.</span>5rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
@media all <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">max<span class="token operator">-</span>width<span class="token operator">:</span> 768px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
h1 <span class="token punctuation">{</span>
font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">.</span>5rem <span class="token operator">*</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>smaller<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
li <span class="token punctuation">{</span>
font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">.</span>125rem <span class="token operator">*</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>smaller<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
li span <span class="token punctuation">{</span>
font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">.</span>375rem <span class="token operator">*</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>smaller<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>이 코드에서는 &quot;border-box&quot;로 box-sizing을 설정하고, 모든 여백과 안쪽 여백은 body 태그 셀렉터를 사용하여 리셋합니다. 또한, margin을 &quot;zero&quot;로 설정하고 body의 배경색을 &quot;yellow&quot;로 지정합니다.</li>
<li>또한, 표시에 &quot;inline-block&quot;을 사용하고 li 태그 셀렉터를 사용하여 글꼴 크기를 1.5em으로 설정합니다.</li>
</ul>
<p>이것이 카운트다운 타이머를 위한 모든 CSS 코드입니다. 여기에 Html + Css를 사용한 최신 출력이 있습니다.</p>
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
<p>CSS 출력:</p>
<img src="@source/docs/Tech/2024-04-19-SimpleCountdownTimerUsingHTMLandJavaScript/img/SimpleCountdownTimerUsingHTMLandJavaScript_2.png" />
<h1 id="javascript-카운트-다운-타이머-코드" tabindex="-1"><a class="header-anchor" href="#javascript-카운트-다운-타이머-코드" aria-hidden="true">#</a> JavaScript 카운트 다운 타이머 코드:-</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">const</span> second <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">,</span>
minute <span class="token operator">=</span> second <span class="token operator">*</span> <span class="token number">60</span><span class="token punctuation">,</span>
hour <span class="token operator">=</span> minute <span class="token operator">*</span> <span class="token number">60</span><span class="token punctuation">,</span>
day <span class="token operator">=</span> hour <span class="token operator">*</span> <span class="token number">24</span><span class="token punctuation">;</span>
<span class="token comment">// 매년이 변경하고 싶어서 이 섹션을 추가했어요. :-)</span>
<span class="token comment">// 필요하지 않다면 제거하세요</span>
<span class="token keyword">let</span> today <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
dd <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>today<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"0"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
mm <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>today<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"0"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
yyyy <span class="token operator">=</span> today<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
nextYear <span class="token operator">=</span> yyyy <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
dayMonth <span class="token operator">=</span> <span class="token string">"05/29/"</span><span class="token punctuation">,</span>
birthday <span class="token operator">=</span> dayMonth <span class="token operator">+</span> yyyy<span class="token punctuation">;</span>
today <span class="token operator">=</span> mm <span class="token operator">+</span> <span class="token string">"/"</span> <span class="token operator">+</span> dd <span class="token operator">+</span> <span class="token string">"/"</span> <span class="token operator">+</span> yyyy<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>today <span class="token operator">></span> birthday<span class="token punctuation">)</span> <span class="token punctuation">{</span>
birthday <span class="token operator">=</span> dayMonth <span class="token operator">+</span> nextYear<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// end</span>
<span class="token keyword">const</span> countDown <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>birthday<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
x <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">const</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
distance <span class="token operator">=</span> countDown <span class="token operator">-</span> now<span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"days"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>distance <span class="token operator">/</span> <span class="token punctuation">(</span>day<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"hours"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>distance <span class="token operator">%</span> <span class="token punctuation">(</span>day<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span>hour<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"minutes"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>distance <span class="token operator">%</span> <span class="token punctuation">(</span>hour<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span>minute<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"seconds"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>distance <span class="token operator">%</span> <span class="token punctuation">(</span>minute<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> second<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 날짜가 도달되면 나중에 뭔가를 처리하세요</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>distance <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"headline"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">"오늘은 내 생일이에요!"</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"countdown"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">"none"</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"content"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">"block"</span><span class="token punctuation">;</span>
<span class="token function">clearInterval</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 초</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 코드는 먼저 dayMonth라는 변수를 선언하여 값은 &quot;09/30/&quot;입니다. 이는 9월이고 연도가 30임을 의미합니다. 다음으로 birthday라는 변수를 선언하여 값은 &quot;09/30/2015&quot;입니다.</p>
<p>그런 다음 현재 날짜와 시간을 저장하는 today라는 변수와 생일부터 현재 시간까지 카운트다운을 위한 간격을 저장할 변수를 선언합니다. setInterval() 함수를 사용하여 매 초마다 텍스트 요소를 업데이트하여 생일이 생성된 이후 경과한 일, 시간, 분 또는 초가 얼마나 지났는지 표시할 수 있습니다.</p>
<p>이 코드는 특정 날짜까지 남은 시간을 계산하는 데 사용됩니다. 코드는 먼저 today라는 변수를 선언하여 &quot;09/30/&quot;로 설정합니다. 다음으로 dayMonth + yyyy로 설정된 birthday라는 또 다른 변수를 선언합니다. 그런 다음 today를 계산하여 mm + &quot;/&quot; + dd + &quot;/&quot; + yyyy으로 설정합니다. 마지막으로, today가 birthday와 같으면 프로그램은 birthday를 dayMonth + nextYear로 설정합니다.</p>
<h1 id="html-및-javascript-코드를-사용한-카운트다운-타이머의-최종-결과" tabindex="-1"><a class="header-anchor" href="#html-및-javascript-코드를-사용한-카운트다운-타이머의-최종-결과" aria-hidden="true">#</a> Html 및 JavaScript 코드를 사용한 카운트다운 타이머의 최종 결과:-</h1>
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
<p><img src="@source/docs/Tech/2024-04-19-SimpleCountdownTimerUsingHTMLandJavaScript/img/SimpleCountdownTimerUsingHTMLandJavaScript_3.png" alt="이미지"></p>
<p>카운트다운 타이머를 완료했습니다. 이제 Html, Css 및 JavaScript를 사용한 사용자 정의된 출력물을 확인해보세요. 카운트다운 타이머 프로젝트를 좋아하셨기를 바랍니다. 출력 영상과 프로젝트 스크린샷을 확인하실 수 있습니다. 다른 블로그를 읽고 프런트엔드 개발에 대한 지식을 쌓아보세요.</p>
<p>감사합니다!</p>
<p>이 포스트는 Html, Css 및 JavaScript를 사용하여 카운트다운 타이머를 만드는 방법을 가르쳐줍니다. 만약 실수나 혼란이 있으면 언제든 댓글을 남겨 질문하거나 쉽게 배울 수 있도록 도와드리겠습니다.</p>
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
<p>작성자 — Code With Random/Anki</p>
<p>작성 코드 — Silver Drop</p>
</div></template>
