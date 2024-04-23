<template><div><img src="@source/docs/Nextjs/2024-04-05-Whatdoes123toStringlength123PrintOutinJavaScript/img/Whatdoes123toStringlength123PrintOutinJavaScript_0.png" />
<p>얼마 전에 쉬운 면접 질문을 받았는데, 처음에는 제대로 된 답을 하지 못했어요. 실제로 95%의 프런트엔드 개발자도 정확히 대답하지 못했어요. 그 면접 질문은 무엇일까요? 함께 살펴보세요…</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 결과는 무엇인가요?</span>
<span class="token number">123</span><span class="token punctuation">[</span><span class="token string">'toString'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">123</span> <span class="token operator">=</span> <span class="token operator">?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>처음에 저는 답이 126(3 + 123)일 것이라고 생각했지만, 틀렸어요. 실제 답은 무엇일까요? 비밀을 한 걸음씩 밝혀보겠습니다.</p>
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
<h1 id="함수의-형식-매개변수-개수" tabindex="-1"><a class="header-anchor" href="#함수의-형식-매개변수-개수" aria-hidden="true">#</a> 함수의 형식 매개변수 개수</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">func1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">func2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">func3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>func1<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token comment">// 0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>func2<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>func3<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이것은 아주 쉽죠. 모든 프론트엔드 개발자가 이 정답을 알고 있어요.</p>
<p>함수는 길이만큼 매개변수를 갖고 있는데, 정말 그런 걸까요? 저를 따라와서 아래로 내려가 보세요...</p>
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
<h1 id="기본-매개변수" tabindex="-1"><a class="header-anchor" href="#기본-매개변수" aria-hidden="true">#</a> 기본 매개변수</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">func1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> func2 <span class="token operator">=</span> <span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">'fatfish'</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">func3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age <span class="token operator">=</span> <span class="token number">24</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">func4</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age <span class="token operator">=</span> <span class="token number">24</span><span class="token punctuation">,</span> gender</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> func5 <span class="token operator">=</span> <span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">'fatfish'</span><span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>func1<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>func2<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token comment">// 0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>func3<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>func4<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>func5<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이건 나를 놀라게 했고, 답변들과 조금 다른 점이 있는 것 같아. 네, 여기서 결론을 도출할 수 있어요:</p>
<p>function.length은 기본값을 가진 첫 번째 매개변수 이전의 매개변수 수를 나타냅니다.</p>
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
<h1 id="함수의-나머지-매개변수" tabindex="-1"><a class="header-anchor" href="#함수의-나머지-매개변수" aria-hidden="true">#</a> 함수의 나머지 매개변수</h1>
<p>함수에 나머지 매개변수가 있는 경우, &quot;function.length&quot;는 어떻게 계산될까요?</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">func1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>func1<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>네, 맞아요. 당신이 맞아요. 정답은 1입니다. 그러니까 또 다른 결론을 얻을 수 있어요:</p>
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
<p>남은 매개변수들은 &quot;function.length&quot; 계산에 포함되지 않습니다.</p>
<h1 id="요약" tabindex="-1"><a class="header-anchor" href="#요약" aria-hidden="true">#</a> 요약</h1>
<p>마지막으로, 이 질문에 대한 답을 알고 계신가요?</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Number.prototype.toString.length 출력 결과는 1입니다.</span>
<span class="token number">123</span><span class="token punctuation">[</span><span class="token string">'toString'</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">123</span> <span class="token operator">=</span> <span class="token number">124</span>
<span class="token comment">// 1 + 123 = 124</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>MDN의 요약을 확인해보세요</p>
<p>Length는 함수 객체의 속성이며, 함수가 기대하는 인수의 수를 나타냅니다. 즉, 형식 매개변수의 수입니다.</p>
<p>이 숫자는 나머지 매개변수를 제외하고, 기본값이 있는 첫 번째 매개변수 이전의 매개변수만 포함합니다.</p>
<p>반면에, arguments.length는 함수 내에서 지역적으로 동작하며, 함수에 실제로 전달된 인수의 수를 제공합니다.</p>
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
<h1 id="마지막으로" tabindex="-1"><a class="header-anchor" href="#마지막으로" aria-hidden="true">#</a> 마지막으로</h1>
<p>읽어 주셔서 감사합니다. 앞으로도 많은 고품질 기사를 기대하고 있습니다.</p>
<h1 id="쉽게-설명한-것들-🚀" tabindex="-1"><a class="header-anchor" href="#쉽게-설명한-것들-🚀" aria-hidden="true">#</a> 쉽게 설명한 것들 🚀</h1>
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
<li>작가에게 박수를 보내고 팔로우해 주세요 ️👏️️</li>
<li>팔로우하기: X | LinkedIn | YouTube | Discord | 뉴스레터</li>
<li>다른 플랫폼 방문하기: Stackademic | CoFeed | Venture | Cubed</li>
<li>더 많은 콘텐츠: PlainEnglish.io</li>
</ul>
</div></template>
