<template><div><img src="@source/docs/Nextjs/2024-03-29-HowToWriteCleanCodeWithThese5JavascriptTipsAndTricks/img/HowToWriteCleanCodeWithThese5JavascriptTipsAndTricks_0.png" />
<p>자바스크립트에는 많은 기능이 있습니다. 매년 새로운 기능들이 추가됩니다. 그래서 우리는 항상 프로그래밍 지식을 향상시켜야 합니다. 이 자바스크립트 팁과 트릭을 탐색하고 적용함으로써 더 짧고 빠르며 간단한 코드를 작성하고, 소프트웨어 개발의 변화무쌍한 세계와 함께 최신 정보를 유지할 수 있습니다.</p>
<p>이 문서에서 언급된 모든 기능들은 ES6 이상에서 소개되었습니다(전개 연산자, 채우기, Intl.DateTimeFormat). 이러한 바로 가기를 통해 깔끔한 자바스크립트 코드를 작성할 수 있으며, 동시에 자바스크립트 최적화를 수행할 수 있습니다.</p>
<h2 id="_1-속성별-객체-배열-그룹화" tabindex="-1"><a class="header-anchor" href="#_1-속성별-객체-배열-그룹화" aria-hidden="true">#</a> 1. 속성별 객체 배열 그룹화</h2>
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
<p>많은 개발자들이 객체 배열을 속성별로 그룹화된 배열로 변환하는 데 어려움을 겪습니다. 이 기능은 특히 두 배열을 병합할 때 유용합니다. 각 항목을 id로 연결하여 검색할 때, 시간 복잡도는 O(N²)가 됩니다. 그러나 두 배열 중 하나를 맵으로 변환하면 상수 시간복잡도인 O(1)으로 항목에 바로 액세스할 수 있습니다. 이렇게 하면 병합의 복잡성이 O(N)으로 줄어들며, 포인터들 덕분에 메모리 소비도 미미해집니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">groupArrayOfObjects</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> property</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> array<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">map<span class="token punctuation">,</span> fruit</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> group <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>fruit<span class="token punctuation">[</span>property<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      group<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>fruit<span class="token punctuation">)</span><span class="token punctuation">;</span>
      map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>fruit<span class="token punctuation">[</span>property<span class="token punctuation">]</span><span class="token punctuation">,</span> group<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> map<span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-숫자-내림하기" tabindex="-1"><a class="header-anchor" href="#_2-숫자-내림하기" aria-hidden="true">#</a> 2. 숫자 내림하기</h2>
<p>숫자 내림은 매우 간단합니다. 그러나 긴 산술 연산을 수행할 때 더 간결하게 할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">1.245</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">~</span><span class="token operator">~</span><span class="token number">1.245</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이중 물결표(~~)는 정확히 floor이 아닙니다. 그들은 내림(반내림)을 하지 않고 숫자의 소수 부분을 제거합니다. 두 연산의 결과를 비교하면 동일합니다.</p>
<h2 id="_3-날짜-형식-지정" tabindex="-1"><a class="header-anchor" href="#_3-날짜-형식-지정" aria-hidden="true">#</a> 3. 날짜 형식 지정</h2>
<p>날짜 형식 지정은 꽤 귀찮을 수 있습니다. 많은 라이브러리들이 날짜 형식 지정을 수행합니다. 예를 들어 dateformat가 그 중 하나입니다. dateformat은 가장 널리 사용되고 있습니다. 하지만 유일한 옵션은 아닙니다. 번들 크기를 줄이고 싶을 때 라이브러리 없이 날짜 형식을 지정하고 싶다면 Intl.DateTimeFormat을 선택할 수 있습니다.```</p>
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
<p>날짜 형식을 변경하는 것은 간단하고 간결하며 직관적입니다. 다양한 옵션 중 선택할 수 있고 현재 언어로 날짜를 표시할 수도 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">formatDate</span><span class="token punctuation">(</span><span class="token parameter">date<span class="token punctuation">,</span> locale</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> dateFormat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Intl<span class="token punctuation">.</span>DateTimeFormat</span><span class="token punctuation">(</span>locale<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">hour</span><span class="token operator">:</span> <span class="token string">'numeric'</span><span class="token punctuation">,</span> <span class="token literal-property property">minute</span><span class="token operator">:</span> <span class="token string">'numeric'</span><span class="token punctuation">,</span> <span class="token literal-property property">second</span><span class="token operator">:</span> <span class="token string">'numeric'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> dateFormat<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-모든-숫자를-2자리로-형식화하기" tabindex="-1"><a class="header-anchor" href="#_4-모든-숫자를-2자리로-형식화하기" aria-hidden="true">#</a> 4. 모든 숫자를 2자리로 형식화하기</h2>
<p>날짜를 비교할 때 날짜의 길이는 날짜에 따라 다를 수 있습니다. 이 두 날짜는 연-월-일로 형식화할 때 서로 다른 길이를 가지고 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token number">1.</span> <span class="token number">1.</span> <span class="token number">2024</span> <span class="token operator">=></span> <span class="token number">2024</span>년 <span class="token number">1</span>월 <span class="token number">1</span>일
<span class="token number">10.2</span><span class="token punctuation">.</span> <span class="token number">2024</span> <span class="token operator">=></span> <span class="token number">2024</span>년 <span class="token number">2</span>월 <span class="token number">10</span>일
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>이러한 경우에 숫자를 2자리로 채우는 것이 편리합니다. (자바스크립트에서 월은 1부터 시작하는 것이 아니라 0부터 시작한다는 것이 아닙니다.)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">formatDate2Digit</span><span class="token punctuation">(</span><span class="token parameter">date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> <span class="token function-variable function">pad</span> <span class="token operator">=</span> <span class="token parameter">num</span> <span class="token operator">=></span> <span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'0'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token punctuation">[</span>date<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">pad</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">pad</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'-'</span><span class="token punctuation">)</span> <span class="token operator">+</span> 
      <span class="token string">' '</span> <span class="token operator">+</span> <span class="token punctuation">[</span><span class="token function">pad</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">pad</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">pad</span><span class="token punctuation">(</span>date<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">':'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-배열-복사하기" tabindex="-1"><a class="header-anchor" href="#_5-배열-복사하기" aria-hidden="true">#</a> 5. 배열 복사하기</h2>
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
<p>로드캐시나 다른 라이브러리를 사용하여 깊은 복사를 하지 않아도 괜찮아요. 자바스크립트에서는 복사하는 것이 이렇게 간단해요. 전개 연산자를 소개한 후에는 한 줄로 복사를 할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">...</span>fruits<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h2>
<p>앞으로 도움이 될 수 있는 팁이 있기를 바래요. 저에게는 특히 큰 복잡한 애플리케이션을 작성할 때 특히 유용한데요. 시간을 절약하고 코드의 길이와 번들 크기를 줄이며 라이브러리의 필요성을 해결할 수 있어요.
가장 많은 시간을 절약해 주는 팁이 무엇인가요?</p>
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
</div></template>
