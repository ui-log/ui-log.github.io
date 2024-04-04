<template><div><p><img src="@source/docs/Tech/2024-03-29-YoureDecentAtPythonIfYouCanAnswerThese7QuestionsCorrectly/img/YoureDecentAtPythonIfYouCanAnswerThese7QuestionsCorrectly_0.png" alt="이미지"></p>
<h1 id="_1-print" tabindex="-1"><a class="header-anchor" href="#_1-print" aria-hidden="true">#</a> 1) @print???</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@print
def <span class="token function">testing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">'hello!!'</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token number">1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이건 뭘 하는 거야?</p>
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
<li>A) 문법 오류입니다. Python에는 @라는 것이 없습니다.</li>
<li>B) 이것은 testing()을 호출할 때 자동으로 1000을 인쇄합니다.</li>
<li>C) 이건 <code v-pre>function testing at 0x1023e2340</code>를 인쇄합니다.</li>
<li>D) testing()을 호출하지 않아도 1000을 자동으로 인쇄합니다.</li>
<li>E) testing()의 메타데이터가 자동으로 호출될 때마다 인쇄됩니다.</li>
</ul>
<h1 id="_2" tabindex="-1"><a class="header-anchor" href="#_2" aria-hidden="true">#</a> 2) ???</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token operator">*</span>_ <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
<span class="token function">print</span><span class="token punctuation">(</span>_<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>이것은 무엇을 출력합니까?</p>
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
<li>A) 구문 오류</li>
<li>B) [3, 4, 5]</li>
<li>C) [1, 2, 3, 4, 5]</li>
<li>D) <code v-pre>generator object </code>genexpr<code v-pre> at 0x1003847c0</code></li>
<li>E) NameError: ‘_’는 유효한 변수 이름이 아닙니다</li>
</ul>
<h3 id="_3-이-1보다-많은-경우" tabindex="-1"><a class="header-anchor" href="#_3-이-1보다-많은-경우" aria-hidden="true">#</a> 3) *_이 1보다 많은 경우???</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">*</span>__<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token operator">*</span>_ <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
<span class="token function">print</span><span class="token punctuation">(</span>__<span class="token punctuation">,</span> _<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>이 코드는 무엇을 출력할까요?</p>
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
<li>A) 문법 오류</li>
<li>B) [1] [4, 5, 6]</li>
<li>C) [1, 2] [5, 6]</li>
<li>D) [1, 2, 3] [6]</li>
<li>E) <code v-pre>generator object </code>genexpr<code v-pre> at 0x1003847c0</code></li>
</ul>
<h1 id="_4-class-shenanigans" tabindex="-1"><a class="header-anchor" href="#_4-class-shenanigans" aria-hidden="true">#</a> 4) class shenanigans</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token operator">:</span>
  def <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token operator">:</span>
    args<span class="token punctuation">,</span> kwargs <span class="token operator">=</span> kwargs<span class="token punctuation">,</span> args
    self<span class="token punctuation">.</span>name <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span>
    self<span class="token punctuation">.</span>age <span class="token operator">=</span> kwargs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

dog <span class="token operator">=</span> <span class="token function">Dog</span><span class="token punctuation">(</span><span class="token string">'rocky'</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이것이 어떤 오류를 일으키나요?</p>
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
<li>A) 오류 없음</li>
<li>B) ZeroDivisionError</li>
<li>C) IndexError</li>
<li>D) KeyError</li>
<li>E) 위의 모든 것</li>
</ul>
<h2 id="_5-gil" tabindex="-1"><a class="header-anchor" href="#_5-gil" aria-hidden="true">#</a> 5) GIL</h2>
<p>파이썬 전역 인터프리터 락(Global Interpreter Lock, GIL)은 무엇인가요?</p>
<ul>
<li>A) 파이썬 서버를 침입자로부터 보호하는 물리적 잠금장치입니다.</li>
<li>B) 파이썬 인터프리터가 컴퓨터의 다른 프로세스에 데이터 누출을 방지하는 요소입니다.</li>
<li>C) 여러 Python 프로세스를 동시에 실행할 수 있는 프로그래밍 패러다임입니다.</li>
<li>D) 한 번에 하나의 스레드만 인터프리터에서 실행할 수 있는 요소입니다.</li>
<li>E) Python 인터프리터가 코드를 더 빠르게 실행할 수 있도록 하는 것입니다.</li>
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
<h1 id="_6-true-false" tabindex="-1"><a class="header-anchor" href="#_6-true-false" aria-hidden="true">#</a> 6) True = False</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>True <span class="token operator">=</span> False
False <span class="token operator">=</span> True

<span class="token function">print</span><span class="token punctuation">(</span>not True<span class="token punctuation">,</span> not False<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이것은 무엇을 출력합니까?</p>
<ul>
<li>A) SyntaxError</li>
<li>B) False True</li>
<li>C) True False</li>
<li>D) True True</li>
<li>E) False False</li>
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
<h1 id="_7-컨텍스트-매니저" tabindex="-1"><a class="header-anchor" href="#_7-컨텍스트-매니저" aria-hidden="true">#</a> 7) 컨텍스트 매니저</h1>
<p>컨텍스트 매니저는 무엇에 사용되나요?</p>
<ul>
<li>A) 컨텍스트를 관리하기 위해</li>
<li>B) 파일 작업 또는 데이터베이스와 같은 리소스를 올바르게 처리하기 위해</li>
<li>C) Python에서 타입 힌트가 강제적으로 적용되도록 하기 위해</li>
<li>D) 다른 컨텍스트에 영향을 미치지 않도록 예외를 처리하기 위해</li>
<li>E) Python 인터프리터가 과도한 RAM을 차지하지 않도록 하는 것</li>
</ul>
<h1 id="아래에-답이-있습니다" tabindex="-1"><a class="header-anchor" href="#아래에-답이-있습니다" aria-hidden="true">#</a> 아래에 답이 있습니다!!</h1>
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
<h1 id="답변" tabindex="-1"><a class="header-anchor" href="#답변" aria-hidden="true">#</a> 답변!!</h1>
<h1 id="_1-print-1" tabindex="-1"><a class="header-anchor" href="#_1-print-1" aria-hidden="true">#</a> 1) @print???</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@print
def <span class="token function">testing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">'hello!!'</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token number">1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이것은 무엇을 하는 건가요?</p>
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
<li>A) 문법 오류입니다. Python에는 @이라는 것이 없습니다.</li>
<li>B) 이것은 testing()을 호출할 때 자동으로 1000을 인쇄합니다.</li>
<li>C) 이것은 <code v-pre>function testing at 0x1023e2340</code>을 인쇄합니다.</li>
<li>D) 우리가 testing()을 호출하지 않아도, 이것은 자동으로 1000을 인쇄합니다.</li>
<li>E) testing()의 메타데이터는 호출될 때 자동으로 인쇄됩니다.</li>
</ul>
<p>여기서 testing()을 print()로 꾸며주었습니다. 이것은 아래와 동일합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>def <span class="token function">testing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">'hello!!'</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token number">1000</span>

testing <span class="token operator">=</span> <span class="token function">print</span><span class="token punctuation">(</span>testing<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>print(testing)이 호출되면, <code v-pre>function testing at 0x1023e2340</code>가 인쇄됩니다. (끝의 난해한 숫자는 다를 수 있습니다)</p>
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
<h1 id="_2-1" tabindex="-1"><a class="header-anchor" href="#_2-1" aria-hidden="true">#</a> 2) *_ ???</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token operator">*</span>_ <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
<span class="token function">print</span><span class="token punctuation">(</span>_<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>이 코드는 무엇을 출력할까요?</p>
<ul>
<li>A) 구문 오류</li>
<li>B) [3, 4, 5]</li>
<li>C) [1, 2, 3, 4, 5]</li>
<li>D) <code v-pre>generator object </code>genexpr<code v-pre> at 0x1003847c0</code></li>
<li>E) NameError: ‘_’는 유효한 변수명이 아닙니다.</li>
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
<ul>
<li>_은 유효한 변수 이름입니다.</li>
<li>a에는 1이, b에는 2가 할당됩니다 (튜플 언패킹).</li>
<li>_ 앞에 *를 붙이면 _가 여러 값을 &quot;잡을&quot; 수 있습니다 (0부터 무한대까지).</li>
<li>_는 따라서 모든 미할당 숫자를 &quot;잡아&quot;낼 것입니다 — 3, 4, 5를 포함한 모든 숫자.</li>
<li>_는 결국 [3, 4, 5]가 될 것입니다.</li>
</ul>
<h1 id="_3-가-1개-이상일까요" tabindex="-1"><a class="header-anchor" href="#_3-가-1개-이상일까요" aria-hidden="true">#</a> 3) *_가 1개 이상일까요???</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">*</span>__<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token operator">*</span>_ <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
<span class="token function">print</span><span class="token punctuation">(</span>__<span class="token punctuation">,</span> _<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>이 코드는 무엇을 출력할까요?</p>
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
<li>A) 구문 오류</li>
<li>B) [1] [4, 5, 6]</li>
<li>C) [1, 2] [5, 6]</li>
<li>D) [1, 2, 3] [6]</li>
<li>E) <code v-pre>generator object </code>genexpr<code v-pre> at 0x1003847c0</code></li>
</ul>
<p>표현식 당 *은 하나만 허용됩니다. 2개를 가지고 있으면 SyntaxError가 발생합니다.</p>
<h1 id="_4-class-shenanigans-1" tabindex="-1"><a class="header-anchor" href="#_4-class-shenanigans-1" aria-hidden="true">#</a> 4) class shenanigans</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token operator">:</span>
  def <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token operator">:</span>
    args<span class="token punctuation">,</span> kwargs <span class="token operator">=</span> kwargs<span class="token punctuation">,</span> args
    self<span class="token punctuation">.</span>name <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span>
    self<span class="token punctuation">.</span>age <span class="token operator">=</span> kwargs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

dog <span class="token operator">=</span> <span class="token function">Dog</span><span class="token punctuation">(</span><span class="token string">'rocky'</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위 코드에서 발생하는 오류는 무엇입니까?</p>
<ul>
<li>A) 오류 없음</li>
<li>B) ZeroDivisionError</li>
<li>C) IndexError</li>
<li>D) KeyError</li>
<li>E) 모두</li>
</ul>
<p><code v-pre>*args</code>는 함수가 임의의 개수의 위치 인수를 사용할 수 있도록 하며, <code v-pre>**kwargs</code>는 함수가 임의의 키워드 인수를 사용할 수 있도록 합니다.</p>
<p>Dog(<code v-pre>rocky</code>, 5)는 __init__에 2개의 위치 인수를 전달하므로, args=(<code v-pre>rocky</code>, 5)이 되고, kwargs={} (여기에는 키워드 인수가 없음)</p>
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
<p><code v-pre>args</code>, <code v-pre>kwargs</code> = <code v-pre>kwargs</code>, <code v-pre>args</code>는 <code v-pre>args</code>와 <code v-pre>kwargs</code>를 교환합니다. 따라서 이제 <code v-pre>args={}</code>이고 <code v-pre>kwargs=(</code>rocky<code v-pre>, 5)</code>입니다.</p>
<p><code v-pre>args['name']</code>을 호출하려고 할 때, 현재 <code v-pre>args</code>가 비어 있는 딕셔너리이므로 KeyError가 발생합니다.</p>
<h1 id="_5-gil-1" tabindex="-1"><a class="header-anchor" href="#_5-gil-1" aria-hidden="true">#</a> 5) GIL</h1>
<p>Python Global Interpreter Lock(GIL)이란 무엇인가요?</p>
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
<li>A) Python 서버를 침입자로부터 안전하게 보호하는 물리적 잠금 장치</li>
<li>B) Python 인터프리터가 컴퓨터의 다른 프로세스로부터 데이터 누출을 방지하는 것</li>
<li>C) 여러 Python 프로세스를 동시에 실행할 수 있게 해주는 프로그래밍 패러다임</li>
<li>D) 한 번에 한 스레드만 인터프리터 당에서 실행할 수 있도록 하는 것</li>
<li>E) Python 인터프리터가 코드를 빠르게 실행할 수 있도록 해주는 것</li>
</ul>
<p>Python GIL은 Python 인터프리터에서 한 번에 한 스레드만 실행할 수 있도록 만듭니다. (하지만 우리는 이를 우회하기 위해 multiprocessing을 사용할 수 있습니다)</p>
<h1 id="_6-true-false-1" tabindex="-1"><a class="header-anchor" href="#_6-true-false-1" aria-hidden="true">#</a> 6) True = False</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>True <span class="token operator">=</span> False
False <span class="token operator">=</span> True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">print</span><span class="token punctuation">(</span>not True<span class="token punctuation">,</span> not False<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이것은 무엇을 출력합니까?</p>
<ul>
<li>A) SyntaxError</li>
<li>B) False True</li>
<li>C) True False</li>
<li>D) True True</li>
<li>E) False False</li>
</ul>
<p>True는 Python의 예약어이기 때문에 True에 아무것도 할당할 수 없습니다. 제대로 답변했기를 바랍니다.</p>
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
<h1 id="_7-컨텍스트-매니저-1" tabindex="-1"><a class="header-anchor" href="#_7-컨텍스트-매니저-1" aria-hidden="true">#</a> 7) 컨텍스트 매니저</h1>
<p>컨텍스트 매니저는 무엇에 사용되나요?</p>
<ul>
<li>A) 컨텍스트를 관리하기 위해</li>
<li>B) 파일 작업이나 데이터베이스와 같은 리소스를 적절히 처리하기 위해</li>
<li>C) 파이썬에서 타입 힌트가 강제되도록 하는 데 사용됩니다</li>
<li>D) 예외가 다른 컨텍스트에 영향을 미치지 않도록 하는 데 사용됩니다</li>
<li>E) 파이썬 인터프리터가 과도한 RAM을 사용하지 않도록 하는 데 사용됩니다</li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># 파일을 읽어야 한다고 가정해 봅시다</span>

<span class="token builtin">file</span> <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'hi.txt'</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token builtin">file</span><span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>만약이를 실행하면 몇 가지 오류로 인해 file.close()가 실행되지 않을 수 있습니다. 파일을 닫지 않으면 다음과 같은 문제가 발생할 수 있습니다:</p>
<ul>
<li>파일이 RAM을 차지하여 프로그램이 느려질 수 있음</li>
<li>파일에 변경 사항이 저장되지 않을 수 있음. 많은 파일이 닫힐 때만 제대로 저장될 수 있기 때문임</li>
<li>Windows에서 파일이 열려있는 경우 다른 스캐너나 프로그램이 해당 파일을 읽을 수 없는 경우가 있음</li>
<li>그리고 다른 이상한 문제들</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code># 컨텍스트 매니저를 사용하여 파일 읽기

<span class="token keyword">with</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'hi.txt'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token literal-property property">file</span><span class="token operator">:</span>
  <span class="token function">print</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>with 키워드를 사용하면 open('hi.txt')를 컨텍스트 매니저로 사용할 수 있습니다. 이는 컨텍스트가 시작될 때 __enter__가 실행되고, 컨텍스트가 종료될 때 __exit__가 실행된다는 것을 의미합니다.</p>
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
<p>알아두어야 할 점: 이것은 파일을 제대로 닫을 것입니다.</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>속지 않고 정확히 몇 개를 맞췄는지 확인해 봤니?</p>
<p>다 맞추지 못했다고 해서 당신이 패배자라는 뜻은 아닙니다. 그저 1) 어딘가 부주의했거나 2) 아직 파이썬에 익숙하지 않은 것 뿐일 수도 있습니다.</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component></div></template>
