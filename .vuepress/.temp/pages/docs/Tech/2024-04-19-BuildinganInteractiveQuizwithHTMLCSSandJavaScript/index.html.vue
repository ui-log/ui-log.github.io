<template><div><p>이 블로그 포스트에서는 HTML, CSS 및 JavaScript를 사용하여 대화형 퀴즈를 만드는 방법을 살펴보겠습니다. 퀴즈는 사용자들을 참여시키고 다양한 주제에 대한 지식을 테스트하는 훌륭한 방법입니다. 퀴즈의 구조화 과정, 사용자 인터페이스 디자인, 그리고 점수 부여 및 피드백을 위한 JavaScript 로직 구현에 대해 다룰 것입니다. 함께 흥미로운 퀴즈 경험을 만들어 보세요!</p>
<p>단계 1: HTML 구조 설정하기
질문, 선택지 및 제출 버튼을 포함한 기본 HTML 구조를 만듭니다.</p>
<p><img src="@source/docs/Tech/2024-04-19-BuildinganInteractiveQuizwithHTMLCSSandJavaScript/img/BuildinganInteractiveQuizwithHTMLCSSandJavaScript_0.png" alt="이미지"></p>
<p>단계 2: CSS로 퀴즈 스타일링하기
(예: 스타일.css) CSS 파일을 생성하여 퀴즈 요소를 원하는대로 스타일링합니다.</p>
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
<p><img src="@source/docs/Tech/2024-04-19-BuildinganInteractiveQuizwithHTMLCSSandJavaScript/img/BuildinganInteractiveQuizwithHTMLCSSandJavaScript_1.png" alt="이미지"></p>
<p>단계 3: JavaScript를 사용하여 퀴즈 로직 추가하기
퀴즈 로직을 처리할 JavaScript 파일 (index.js)을 생성합니다.</p>
<p><img src="@source/docs/Tech/2024-04-19-BuildinganInteractiveQuizwithHTMLCSSandJavaScript/img/BuildinganInteractiveQuizwithHTMLCSSandJavaScript_2.png" alt="이미지"></p>
<p>단계 4: 퀴즈를 사용자 정의하기
자신의 질문, 옵션 및 정답으로 퀴즈 데이터 배열을 JavaScript 파일에서 업데이트하세요.</p>
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
<p>style.css 파일에서 CSS 스타일을 수정하여 원하는 디자인에 맞게 변경할 수도 있어요.</p>
<p>여기까지입니다! HTML, CSS 및 JavaScript를 사용하여 대화형 퀴즈를 만들었어요. 타이머, 객관식 선택 또는 진행 막대와 같은 기능을 추가하여 퀴즈를 더 향상시킬 수도 있어요.</p>
<h1 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> OUTPUT</h1>
<p><img src="@source/docs/Tech/2024-04-19-BuildinganInteractiveQuizwithHTMLCSSandJavaScript/img/BuildinganInteractiveQuizwithHTMLCSSandJavaScript_3.png" alt="BuildinganInteractiveQuizwithHTMLCSSandJavaScript_3"></p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html<span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>title<span class="token operator">></span>인터랙티브 퀴즈<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
  <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> type<span class="token operator">=</span><span class="token string">"text/css"</span> href<span class="token operator">=</span><span class="token string">"style.css"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"quiz"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>h1<span class="token operator">></span>인터랙티브 퀴즈 <span class="token operator">|</span> 코드피커 제작<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"question"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"options"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>제출<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

  <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"index.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>body <span class="token punctuation">{</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> Arial<span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">214</span><span class="token punctuation">,</span> <span class="token number">117</span><span class="token punctuation">,</span> <span class="token number">117</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

#quiz <span class="token punctuation">{</span>
  max<span class="token operator">-</span>width<span class="token operator">:</span> 500px<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> auto<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #66ebf0<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
  box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> 10px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">198</span><span class="token punctuation">,</span> <span class="token number">222</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

h1 <span class="token punctuation">{</span>
  text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">333333</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

#question <span class="token punctuation">{</span>
  margin<span class="token operator">-</span>bottom<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

#options <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> grid<span class="token punctuation">;</span>
  <span class="token literal-property property">gap</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token operator">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

button <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> block<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> auto<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px 20px<span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">227</span><span class="token punctuation">,</span> <span class="token number">238</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">131313</span><span class="token punctuation">;</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
  <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token literal-property property">button</span><span class="token operator">:</span>hover <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #8f8d8d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> quizData <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">question</span><span class="token operator">:</span> <span class="token string">"프랑스의 수도는 무엇입니까?"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"파리"</span><span class="token punctuation">,</span> <span class="token string">"마드리드"</span><span class="token punctuation">,</span> <span class="token string">"로마"</span><span class="token punctuation">,</span> <span class="token string">"베를린"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">answer</span><span class="token operator">:</span> <span class="token string">"파리"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">question</span><span class="token operator">:</span> <span class="token string">"태양계에서 가장 큰 행성은 무엇인가요?"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"목성"</span><span class="token punctuation">,</span> <span class="token string">"토성"</span><span class="token punctuation">,</span> <span class="token string">"화성"</span><span class="token punctuation">,</span> <span class="token string">"지구"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">answer</span><span class="token operator">:</span> <span class="token string">"목성"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 더 많은 질문 추가...</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  
  <span class="token keyword">const</span> questionElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"question"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> optionsElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"options"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> submitButton <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"submit"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">let</span> currentQuestion <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> score <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  
  <span class="token keyword">function</span> <span class="token function">showQuestion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> question <span class="token operator">=</span> quizData<span class="token punctuation">[</span>currentQuestion<span class="token punctuation">]</span><span class="token punctuation">;</span>
    questionElement<span class="token punctuation">.</span>innerText <span class="token operator">=</span> question<span class="token punctuation">.</span>question<span class="token punctuation">;</span>
  
    optionsElement<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
    question<span class="token punctuation">.</span>options<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">option</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      button<span class="token punctuation">.</span>innerText <span class="token operator">=</span> option<span class="token punctuation">;</span>
      optionsElement<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span><span class="token punctuation">;</span>
      button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> selectAnswer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">function</span> <span class="token function">selectAnswer</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> selectedButton <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">;</span>
    <span class="token keyword">const</span> answer <span class="token operator">=</span> quizData<span class="token punctuation">[</span>currentQuestion<span class="token punctuation">]</span><span class="token punctuation">.</span>answer<span class="token punctuation">;</span>
  
    <span class="token keyword">if</span> <span class="token punctuation">(</span>selectedButton<span class="token punctuation">.</span>innerText <span class="token operator">===</span> answer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      score<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    currentQuestion<span class="token operator">++</span><span class="token punctuation">;</span>
  
    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentQuestion <span class="token operator">&lt;</span> quizData<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">showQuestion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">showResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">function</span> <span class="token function">showResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    quiz<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
      &lt;h1>퀴즈 완료!&lt;/h1>
      &lt;p>당신의 점수: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>score<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>quizData<span class="token punctuation">.</span>length<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/p>
    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">showQuestion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HTML, CSS, JavaScript를 이용하여 인터랙티브 퀴즈를 만드는 방법에 대한 가이드를 읽어주셔서 감사합니다! 여러분이 자신만의 매력적인 퀴즈를 만드는 데 도움이 되었으면 좋겠어요. 추가 질문이 있으시면 자유롭게 [댓글]로 물어보세요.```</p>
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
