<template><div><img src="@source/docs/Tech/2024-04-23-WhyDoesJavaScriptsparseInt00000005Print5/img/WhyDoesJavaScriptsparseInt00000005Print5_0.png" />
<h1 id="서문" tabindex="-1"><a class="header-anchor" href="#서문" aria-hidden="true">#</a> 서문</h1>
<p>요즘 프로젝트를 개발하면서 이상한 문제가 있었어요. parseInt(0.0000005) === 5 😱. 보통은 0이 출력되어야 하는데, 왜 5가 나오죠? 함께 이 문제를 살펴보도록 해요.</p>
<h1 id="_1-parseint를-언제-사용하나요" tabindex="-1"><a class="header-anchor" href="#_1-parseint를-언제-사용하나요" aria-hidden="true">#</a> 1. parseInt를 언제 사용하나요?</h1>
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
<p>먼저, 보통 언제 parseInt를 사용하나요? 대부분 우리는 문자열을 구문 분석하여 해당 정수 부분을 반환하기 위해 사용합니다. 이 질문을 통해 parseInt 메서드를 살펴보겠습니다.</p>
<h2 id="_2-parseint에-관한-몇-가지-사항" tabindex="-1"><a class="header-anchor" href="#_2-parseint에-관한-몇-가지-사항" aria-hidden="true">#</a> 2. parseInt에 관한 몇 가지 사항</h2>
<p>MDN 문서에 따르면 &quot;parseInt(string, radix) 함수는 문자열 인수를 구문 분석하고 지정된 진수의 정수를 반환합니다 (수치 체계의 진법에서의 기수).&quot;</p>
<p>구문</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">parseInt</span><span class="token punctuation">(</span>문자열<span class="token punctuation">)</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span>문자열<span class="token punctuation">,</span> 진법<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>예시</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'0.5'</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'0.5'</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'0.05'</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'0.005'</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'0.0005'</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'0.00005'</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'0.000005'</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'015'</span><span class="token punctuation">)</span> <span class="token comment">// 15</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'015'</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token comment">// 13</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'15px'</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">// 15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-parseint가-숫자를-어떻게-변환하는가" tabindex="-1"><a class="header-anchor" href="#_3-parseint가-숫자를-어떻게-변환하는가" aria-hidden="true">#</a> 3. parseInt가 숫자를 어떻게 변환하는가?</h1>
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
<p>parseInt의 첫 번째 매개 변수가 숫자인 경우, 어떻게 구문 분석되나요?</p>
<p>parseInt(0.0000005) === 5가 사실임을 여기에서도 확인할 수 있어요.</p>
<h2 id="_3-1-첫-번째-단계-숫자를-문자열로-변환하세요" tabindex="-1"><a class="header-anchor" href="#_3-1-첫-번째-단계-숫자를-문자열로-변환하세요" aria-hidden="true">#</a> 3.1. 첫 번째 단계? 숫자를 문자열로 변환하세요.</h2>
<p>이제 각각의 결과가 무엇인지 확인하기 위해 문자열 기반의 값들을 확인해보세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">String</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// => '0.5'</span>
<span class="token function">String</span><span class="token punctuation">(</span><span class="token number">0.05</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// => '0.05'</span>
<span class="token function">String</span><span class="token punctuation">(</span><span class="token number">0.005</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// => '0.005'</span>
<span class="token function">String</span><span class="token punctuation">(</span><span class="token number">0.0005</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// => '0.0005' </span>
<span class="token function">String</span><span class="token punctuation">(</span><span class="token number">0.00005</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// => '0.00005'</span>
<span class="token function">String</span><span class="token punctuation">(</span><span class="token number">0.000005</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => '0.000005'</span>
<span class="token function">String</span><span class="token punctuation">(</span><span class="token number">0.0000005</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => '5e-7' 여기에 주의하세요</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-2-두-번째-단계는-반올림-작업을-수행하는-것입니다" tabindex="-1"><a class="header-anchor" href="#_3-2-두-번째-단계는-반올림-작업을-수행하는-것입니다" aria-hidden="true">#</a> 3.2. 두 번째 단계는 반올림 작업을 수행하는 것입니다.</h2>
<p>사용자 SeyyedKhandon이 스택 오버플로우 응답에서 설명한 대로:</p>
<p>“parseInt(0.0000005)를 사용하면 parseInt(<code v-pre>5e-7</code>)와 같고 정의에 따라:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token number">0.0000005</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'5e-7'</span><span class="token punctuation">)</span> <span class="token comment">// 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>최종적으로 답은 5만 반환됩니다. 왜냐하면 e가 나오기 전까지 숫자에 해당하는 유일한 문자가 5이기 때문에 나머지인 e-7은 무시됩니다.”</p>
<h1 id="_4-부동-소수점-수의-정수-부분을-안전하게-얻는-방법" tabindex="-1"><a class="header-anchor" href="#_4-부동-소수점-수의-정수-부분을-안전하게-얻는-방법" aria-hidden="true">#</a> 4. 부동 소수점 수의 정수 부분을 안전하게 얻는 방법?</h1>
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
<p>The following Math.floor() function is recommended:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// => 0</span>
Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">0.05</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// => 0</span>
Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">0.005</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// => 0</span>
Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">0.0005</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// => 0</span>
Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">0.00005</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// => 0</span>
Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">0.000005</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => 0</span>
Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">0.0000005</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-비유를-통해-배우기" tabindex="-1"><a class="header-anchor" href="#_5-비유를-통해-배우기" aria-hidden="true">#</a> 5. 비유를 통해 배우기</h2>
<p>그러면, parseInt(99999999999999999999999999)가 1과 같은 이유를 설명해볼 수 있나요?</p>
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
<h1 id="마침내" tabindex="-1"><a class="header-anchor" href="#마침내" aria-hidden="true">#</a> 마침내</h1>
<p>읽어 주셔서 감사합니다. 당신을 따르고 더 많은 고품질 글을 읽는 것을 기대합니다.</p>
<h1 id="쉽게-이해하기-🚀" tabindex="-1"><a class="header-anchor" href="#쉽게-이해하기-🚀" aria-hidden="true">#</a> 쉽게 이해하기 🚀</h1>
<p>In Plain English 커뮤니티의 일원이 되어 주셔서 감사합니다! 떠나시기 전에:</p>
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
<li>작가를 클릭하고 팔로우해주세요! 👏</li>
<li>팔로우하기: X | LinkedIn | YouTube | Discord | 뉴스레터</li>
<li>다른 플랫폼 방문하기: Stackademic | CoFeed | Venture | Cubed</li>
<li>더 많은 콘텐츠: PlainEnglish.io</li>
</ul>
</div></template>
