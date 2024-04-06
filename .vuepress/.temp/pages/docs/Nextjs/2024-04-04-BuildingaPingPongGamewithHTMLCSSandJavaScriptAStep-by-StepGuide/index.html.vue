<template><div><p><img src="@source/docs/Nextjs/2024-04-04-BuildingaPingPongGamewithHTMLCSSandJavaScriptAStep-by-StepGuide/img/BuildingaPingPongGamewithHTMLCSSandJavaScriptAStep-by-StepGuide_0.png" alt="BuildingaPingPongGamewithHTMLCSSandJavaScriptAStep-by-StepGuide_0"></p>
<ul>
<li>소개</li>
<li>프로젝트 개요</li>
<li>핑 퐁 게임의 특징</li>
<li>선행 요건</li>
<li>코드 구조
<ul>
<li>단계 1. HTML 구조:</li>
<li>단계 2. CSS 스타일링:</li>
<li>단계 3. JavaScript 로직:</li>
</ul>
</li>
<li>배운 점</li>
<li>프로젝트 플레이 방법</li>
<li>배포</li>
<li>향후 개선 사항</li>
<li>결론</li>
</ul>
<h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h1>
<p>이 프로젝트는 HTML, CSS, 그리고 JavaScript의 기본 요소를 사용하여 즐겁고 상호작용적인 핑퐁 게임을 만드는 데 도움을 줄 것입니다. 이 과정을 통해 애니메이션, 사용자 참여, 그리고 게임의 기본 원칙에 관련된 중요한 기술들을 습득할 것입니다. 이는 웹 개발의 동적인 분야에 대한 훌륭한 입문서가 될 것입니다!</p>
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
<h1 id="프로젝트-개요" tabindex="-1"><a class="header-anchor" href="#프로젝트-개요" aria-hidden="true">#</a> 프로젝트 개요</h1>
<p>이 프로젝트는 웹 개발의 기본 구성 요소인 HTML, CSS 및 JavaScript을 사용하여 재미있고 플레이 가능한 탁구 게임을 만들 수 있도록 도와줍니다. 이 과정에서 애니메이션, 사용자 상호 작용 및 핵심 게임 메카닉스에 관련된 가치 있는 기술을 익힐 수 있습니다. 웹 개발의 흥미로운 세계로 첫걸음을 내딛는 좋은 기회입니다!</p>
<h1 id="탁구-게임의-특징" tabindex="-1"><a class="header-anchor" href="#탁구-게임의-특징" aria-hidden="true">#</a> 탁구 게임의 특징</h1>
<p>이 프로젝트에서는 다음과 같은 특징을 갖춘 탁구 게임을 개발할 예정입니다:</p>
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
<li>두 명용 패들: 게임에는 사용자와 컴퓨터용 패들이 포함되어 상호 작용하는 게임플레이를 가능하게 합니다.</li>
<li>공 움직임: 패들 간에 공이 움직이며, 플레이어들은 계속해서 공을 주고받아 게임을 이어나가야 합니다.</li>
<li>점수 추적: 게임은 양쪽 플레이어의 점수를 추적하며, 플레이어가 점수를 획득할 때마다 업데이트합니다.</li>
<li>시작, 일시정지, 다시 시작 버튼: 이러한 버튼을 통해 플레이어는 게임을 제어할 수 있으며, 필요에 따라 시작하거나 멈추거나 다시 시작할 수 있습니다.</li>
<li>간단한 AI: 게임에는 컴퓨터 패들을 제어하는 간단한 AI가 포함되어 있어 단일 플레이어 게임에 도전 요소를 더합니다.</li>
</ul>
<h1 id="준비-사항" tabindex="-1"><a class="header-anchor" href="#준비-사항" aria-hidden="true">#</a> 준비 사항</h1>
<p>이 핑퐁 게임을 만들기 위해 HTML, CSS 및 JavaScript의 기본적인 이해가 필요합니다. 응용 프로그램의 구조를 위한 HTML, 스타일링을 위한 CSS, 그리고 응용 프로그램 로직을 구현하기 위한 JavaScript에 익숙해야 합니다.</p>
<p>코드를 작성할 텍스트 편집기나 IDE(예: Visual Studio Code)가 필요하며, 테스트를 위해 웹 브라우저가 필요합니다. 선택 사항으로는 애플리케이션을 호스팅하기 위한 GitHub 계정이 포함될 수 있습니다.</p>
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
<h1 id="코드-구조" tabindex="-1"><a class="header-anchor" href="#코드-구조" aria-hidden="true">#</a> 코드 구조</h1>
<p>프로젝트용 새 폴더를 만들어주세요. 폴더 이름은 원하시는 대로 지으시고, 그 안에 index.html, style.css, 그리고 script.js라는 세 개의 파일을 만들어주세요. 이 파일들이 당신의 프로젝트의 기초가 될 것입니다. 이제 이 폴더를 텍스트 편집기나 IDE(예: Visual Studio Code)에서 열고 아래 단계를 따라주세요:</p>
<h2 id="단계-1-html-구조" tabindex="-1"><a class="header-anchor" href="#단계-1-html-구조" aria-hidden="true">#</a> 단계 1. HTML 구조:</h2>
<p>index.html 파일을 열고 다음 HTML 코드를 병합하여 &quot;핑퐁 게임&quot;을 만들어보세요:</p>
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
<p>위의 HTML 코드는 핑퐁 게임의 기본 구조를 설정합니다. 시작, 일시정지 및 재시작 버튼이 있는 헤더와 이미지 로고가 포함되어 있습니다. 게임 영역은 게임 렌더링을 위한 ping-pong id가 있는 캔버스 요소로 구성되어 있습니다.</p>
<p>스타일링을 위한 외부 CSS 파일과 게임 기능을 위한 JavaScript 파일에 대한 링크가 포함되어 있으며, 스크립트 태그는 최적의 로딩을 위해 defer로 설정되어 있습니다.</p>
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
<p><code v-pre>style.css</code> 파일을 열고 다음 CSS 코드를 붙여넣어 Ping Pong 게임을 스타일링하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">*</span><span class="token punctuation">{</span>
 <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
 box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

body<span class="token punctuation">{</span>
 background<span class="token operator">-</span>color<span class="token operator">:</span> darkgrey<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>header <span class="token punctuation">{</span>
 <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
 align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
 justify<span class="token operator">-</span>content<span class="token operator">:</span> space<span class="token operator">-</span>around<span class="token punctuation">;</span>
 <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>1em<span class="token punctuation">;</span>
 margin<span class="token operator">-</span>top<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>1em<span class="token punctuation">;</span>
 background<span class="token operator">-</span>color<span class="token operator">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>header img <span class="token punctuation">{</span>
 <span class="token literal-property property">width</span><span class="token operator">:</span> 60px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>buttons button <span class="token punctuation">{</span>
 letter<span class="token operator">-</span>spacing<span class="token operator">:</span> 2px<span class="token punctuation">;</span>
 text<span class="token operator">-</span>transform<span class="token operator">:</span> uppercase<span class="token punctuation">;</span>
 <span class="token literal-property property">border</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
 <span class="token literal-property property">color</span><span class="token operator">:</span> white<span class="token punctuation">;</span>
 background<span class="token operator">-</span>color<span class="token operator">:</span> green<span class="token punctuation">;</span>
 <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
 letter<span class="token operator">-</span>spacing<span class="token operator">:</span> 1px<span class="token punctuation">;</span>
 font<span class="token operator">-</span>size<span class="token operator">:</span> 1em<span class="token punctuation">;</span>
 font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span>
 font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">'Franklin Gothic Medium'</span><span class="token punctuation">,</span> <span class="token string">'Arial Narrow'</span><span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>buttons button<span class="token operator">:</span>hover <span class="token punctuation">{</span>
 text<span class="token operator">-</span>decoration<span class="token operator">:</span> underline<span class="token punctuation">;</span>
 font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>05em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>pong<span class="token operator">-</span>wrapper <span class="token punctuation">{</span>
 <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
 justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
 align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
 margin<span class="token operator">-</span>top<span class="token operator">:</span> 3em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

#ping<span class="token operator">-</span>pong <span class="token punctuation">{</span>
 <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">80</span><span class="token operator">%</span><span class="token punctuation">;</span>
 max<span class="token operator">-</span>width<span class="token operator">:</span> 680px<span class="token punctuation">;</span>
 <span class="token literal-property property">border</span><span class="token operator">:</span> 12px solid white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

@media screen <span class="token function">and</span> <span class="token punctuation">(</span><span class="token parameter">max<span class="token operator">-</span>width<span class="token operator">:</span> 480px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token punctuation">.</span>header img <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 40px<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token punctuation">.</span>buttons button <span class="token punctuation">{</span>
  letter<span class="token operator">-</span>spacing<span class="token operator">:</span> 1px<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 5px<span class="token punctuation">;</span>
  letter<span class="token operator">-</span>spacing<span class="token operator">:</span> 1px<span class="token punctuation">;</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>7em<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token punctuation">.</span>buttons button<span class="token operator">:</span>hover <span class="token punctuation">{</span>
  text<span class="token operator">-</span>decoration<span class="token operator">:</span> underline<span class="token punctuation">;</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>05em<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 CSS 코드는 탁구 게임 인터페이스를 스타일링합니다. body, 버튼과 로고가 있는 헤더, 그리고 주요 게임 영역에 대한 스타일이 포함되어 있습니다. 미디어 쿼리를 사용하여 작은 화면에 대한 스타일을 조정합니다.</p>
<h2 id="단계-3-javascript-로직" tabindex="-1"><a class="header-anchor" href="#단계-3-javascript-로직" aria-hidden="true">#</a> 단계 3. JavaScript 로직:</h2>
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
<p>'script.js' 파일을 열고 다음 JavaScript 코드를 사용하여 핑퐁 게임에 기능을 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#ping-pong"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> context <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> startBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".start-btn"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> pauseBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".pause-btn"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> restartBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".restart-btn"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> gameRunning <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> animationId<span class="token punctuation">;</span>

<span class="token comment">// 사용자 패들 생성</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
 <span class="token literal-property property">y</span><span class="token operator">:</span> canvas<span class="token punctuation">.</span>height<span class="token operator">/</span><span class="token number">2</span> <span class="token operator">-</span> <span class="token number">100</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">,</span>
 <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
 <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
 <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"red"</span><span class="token punctuation">,</span>
 <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token comment">// 컴퓨터 패들 생성</span>
<span class="token keyword">const</span> computer <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">x</span><span class="token operator">:</span> canvas<span class="token punctuation">.</span>width <span class="token operator">-</span> <span class="token number">10</span><span class="token punctuation">,</span>
 <span class="token literal-property property">y</span><span class="token operator">:</span> canvas<span class="token punctuation">.</span>height<span class="token operator">/</span><span class="token number">2</span> <span class="token operator">-</span> <span class="token number">100</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">,</span>
 <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
 <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
 <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"black"</span><span class="token punctuation">,</span>
 <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token comment">// 공 생성</span>
<span class="token keyword">const</span> ball <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">x</span><span class="token operator">:</span> canvas<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span>
 <span class="token literal-property property">y</span><span class="token operator">:</span> canvas<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span>
 <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
 <span class="token literal-property property">speed</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
 <span class="token literal-property property">velocityX</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
 <span class="token literal-property property">velocityY</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
 <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"white"</span>
<span class="token punctuation">}</span>

<span class="token comment">// 네트 생성</span>
<span class="token keyword">const</span> net <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">x</span><span class="token operator">:</span> canvas<span class="token punctuation">.</span>width<span class="token operator">/</span><span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span>
 <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
 <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
 <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
 <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"white"</span>
<span class="token punctuation">}</span>

restartBtn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 document<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"load"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 네트 그리기 함수</span>
<span class="token keyword">function</span> <span class="token function">drawNet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> netWidth <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// 필요에 따라 네트 폭 조절</span>
    <span class="token keyword">const</span> netSpacing <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span> <span class="token comment">// 필요에 따라 간격 조절</span>

    <span class="token comment">// 왼쪽 절반 네트 그리기</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">;</span> i <span class="token operator">+=</span> netSpacing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">drawRectangle</span><span class="token punctuation">(</span>net<span class="token punctuation">.</span>x<span class="token punctuation">,</span> net<span class="token punctuation">.</span>y <span class="token operator">+</span> i<span class="token punctuation">,</span> netWidth<span class="token punctuation">,</span> net<span class="token punctuation">.</span>height<span class="token punctuation">,</span> net<span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 오른쪽 절반 네트 그리기</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">;</span> i <span class="token operator">+=</span> netSpacing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">drawRectangle</span><span class="token punctuation">(</span>net<span class="token punctuation">.</span>x <span class="token operator">+</span> net<span class="token punctuation">.</span>width <span class="token operator">-</span> netWidth<span class="token punctuation">,</span> net<span class="token punctuation">.</span>y <span class="token operator">+</span> i<span class="token punctuation">,</span> netWidth<span class="token punctuation">,</span> net<span class="token punctuation">.</span>height<span class="token punctuation">,</span> net<span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// 직사각형 그리기 함수</span>
<span class="token keyword">function</span> <span class="token function">drawRectangle</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> w<span class="token punctuation">,</span> h<span class="token punctuation">,</span> color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 context<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> color<span class="token punctuation">;</span>
 context<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> w<span class="token punctuation">,</span> h<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 원 그리기 함수</span>
<span class="token keyword">function</span> <span class="token function">drawCircle</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> r<span class="token punctuation">,</span> color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 context<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> color<span class="token punctuation">;</span>
 context<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 context<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> r<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 context<span class="token punctuation">.</span><span class="token function">closePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 context<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 텍스트 그리기 함수</span>
<span class="token keyword">function</span> <span class="token function">drawText</span><span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 context<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> color<span class="token punctuation">;</span>
 context<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">"45px fantasy"</span><span class="token punctuation">;</span>
 context<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 게임 렌더링 함수</span>
<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 캔버스 초기화</span>
    <span class="token function">drawRectangle</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">,</span> <span class="token string">"green"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 네트 그리기</span>
    <span class="token function">drawNet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 점수 표시</span>
    <span class="token function">drawText</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>score<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">"white"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">drawText</span><span class="token punctuation">(</span>computer<span class="token punctuation">.</span>score<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">"white"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 사용자 및 컴퓨터 패들 그리기</span>
    <span class="token function">drawRectangle</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>x<span class="token punctuation">,</span> user<span class="token punctuation">.</span>y<span class="token punctuation">,</span> user<span class="token punctuation">.</span>width<span class="token punctuation">,</span> user<span class="token punctuation">.</span>height<span class="token punctuation">,</span> user<span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">drawRectangle</span><span class="token punctuation">(</span>computer<span class="token punctuation">.</span>x<span class="token punctuation">,</span> computer<span class="token punctuation">.</span>y<span class="token punctuation">,</span> computer<span class="token punctuation">.</span>width<span class="token punctuation">,</span> computer<span class="token punctuation">.</span>height<span class="token punctuation">,</span> computer<span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 공 그리기</span>
    <span class="token function">drawCircle</span><span class="token punctuation">(</span>ball<span class="token punctuation">.</span>x<span class="token punctuation">,</span> ball<span class="token punctuation">.</span>y<span class="token punctuation">,</span> ball<span class="token punctuation">.</span>radius<span class="token punctuation">,</span> ball<span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 중앙의 흰색 선 그리기</span>
    <span class="token function">drawRectangle</span><span class="token punctuation">(</span>net<span class="token punctuation">.</span>x<span class="token punctuation">,</span> net<span class="token punctuation">.</span>y<span class="token punctuation">,</span> net<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">,</span> net<span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 사용자 패들 제어</span>
canvas<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"mousemove"</span><span class="token punctuation">,</span> movePaddle<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">movePaddle</span><span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">let</span> rectangle <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 user<span class="token punctuation">.</span>y <span class="token operator">=</span> evt<span class="token punctuation">.</span>clientY <span class="token operator">-</span> rectangle<span class="token punctuation">.</span>top <span class="token operator">-</span> user<span class="token punctuation">.</span>height<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 충돌 검출 함수</span>
<span class="token keyword">function</span> <span class="token function">collision</span><span class="token punctuation">(</span><span class="token parameter">b<span class="token punctuation">,</span> p</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 b<span class="token punctuation">.</span>top <span class="token operator">=</span> b<span class="token punctuation">.</span>y <span class="token operator">-</span> b<span class="token punctuation">.</span>radius<span class="token punctuation">;</span>
 b<span class="token punctuation">.</span>bottom <span class="token operator">=</span> b<span class="token punctuation">.</span>y <span class="token operator">+</span> b<span class="token punctuation">.</span>radius<span class="token punctuation">;</span>
 b<span class="token punctuation">.</span>left <span class="token operator">=</span> b<span class="token punctuation">.</span>x <span class="token operator">-</span> b<span class="token punctuation">.</span>radius<span class="token punctuation">;</span>
 b<span class="token punctuation">.</span>right <span class="token operator">=</span> b<span class="token punctuation">.</span>x <span class="token operator">+</span> b<span class="token punctuation">.</span>radius<span class="token punctuation">;</span>

 p<span class="token punctuation">.</span>top <span class="token operator">=</span> p<span class="token punctuation">.</span>y<span class="token punctuation">;</span>
 p<span class="token punctuation">.</span>bottom <span class="token operator">=</span> p<span class="token punctuation">.</span>y <span class="token operator">+</span> p<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
 p<span class="token punctuation">.</span>left <span class="token operator">=</span> p<span class="token punctuation">.</span>x<span class="token punctuation">;</span>
 p<span class="token punctuation">.</span>right <span class="token operator">=</span> p<span class="token punctuation">.</span>x <span class="token operator">+</span> p<span class="token punctuation">.</span>width<span class="token punctuation">;</span>

 <span class="token keyword">return</span> b<span class="token punctuation">.</span>right <span class="token operator">></span> p<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">.</span>bottom <span class="token operator">></span> p<span class="token punctuation">.</span>top <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">.</span>left <span class="token operator">&lt;</span> p<span class="token punctuation">.</span>right <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">.</span>top <span class="token operator">&lt;</span> p<span class="token punctuation">.</span>bottom<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token comment">// 공 초기화 함수</span>
<span class="token keyword">function</span> <span class="token function">resetBall</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 ball<span class="token punctuation">.</span>x <span class="token operator">=</span> canvas<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
 ball<span class="token punctuation">.</span>y <span class="token operator">=</span> canvas<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>

 ball<span class="token punctuation">.</span>speed <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
 ball<span class="token punctuation">.</span>velocityX <span class="token operator">=</span> <span class="token operator">-</span>ball<span class="token punctuation">.</span>velocityX<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 업데이트 함수</span>
<span class="token keyword">function</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 ball<span class="token punctuation">.</span>x <span class="token operator">+=</span> ball<span class="token punctuation">.</span>velocityX<span class="token punctuation">;</span>
 ball<span class="token punctuation">.</span>y <span class="token operator">+=</span> ball<span class="token punctuation">.</span>velocityY<span class="token punctuation">;</span>

 <span class="token comment">// 컴퓨터 패들을 제어하는 간단한 AI</span>
 <span class="token keyword">let</span> computerLevel <span class="token operator">=</span> <span class="token number">0.1</span><span class="token punctuation">;</span>
 computer<span class="token punctuation">.</span>y <span class="token operator">+=</span> <span class="token punctuation">(</span>ball<span class="token punctuation">.</span>y <span class="token operator">-</span> <span class="token punctuation">(</span>computer<span class="token punctuation">.</span>y <span class="token operator">+</span> computer<span class="token punctuation">.</span>height<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> computerLevel<span class="token punctuation">;</span>

 <span class="token keyword">if</span><span class="token punctuation">(</span>ball<span class="token punctuation">.</span>y <span class="token operator">+</span> ball<span class="token punctuation">.</span>radius <span class="token operator">></span> canvas<span class="token punctuation">.</span>height <span class="token operator">||</span> ball<span class="token punctuation">.</span>y <span class="token operator">-</span> ball<span class="token punctuation">.</span>radius <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ball<span class="token punctuation">.</span>velocityY <span class="token operator">=</span> <span class="token operator">-</span>ball<span class="token punctuation">.</span>velocityY<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">let</span> player <span class="token operator">=</span> <span class="token punctuation">(</span>ball<span class="token punctuation">.</span>x <span class="token operator">&lt;</span> canvas<span class="token punctuation">.</span>width<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">?</span> user <span class="token operator">:</span> computer<span class="token punctuation">;</span>

 <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">collision</span><span class="token punctuation">(</span>ball<span class="token punctuation">,</span> player<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 공이 플레이어에 부딪힌 위치</span>
  <span class="token keyword">let</span> collidePoint <span class="token operator">=</span> ball<span class="token punctuation">.</span>y <span class="token operator">-</span> <span class="token punctuation">(</span>player<span class="token punctuation">.</span>y <span class="token operator">+</span> player<span class="token punctuation">.</span>height<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 정규화</span>
  collidePoint <span class="token operator">=</span> collidePoint <span class="token operator">/</span> <span class="token punctuation">(</span>player<span class="token punctuation">.</span>height<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 라디안 각도 계산</span>
  <span class="token keyword">let</span> angleRad <span class="token operator">=</span> collidePoint <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token operator">/</span><span class="token number">4</span><span class="token punctuation">;</span>

  <span class="token comment">// 부딪힐 때 공의 X 방향</span>
  <span class="token keyword">let</span> direction <span class="token operator">=</span> <span class="token punctuation">(</span>ball<span class="token punctuation">.</span>x <span class="token operator">&lt;</span> canvas<span class="token punctuation">.</span>width<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>


  <span class="token comment">// X 및 Y 속도 변경</span>
  ball<span class="token punctuation">.</span>velocityX <span class="token operator">=</span> direction <span class="token operator">*</span> ball<span class="token punctuation">.</span>speed <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">cos</span><span class="token punctuation">(</span>angleRad<span class="token punctuation">)</span><span class="token punctuation">;</span>

  ball<span class="token punctuation">.</span>velocityY <span class="token operator">=</span> ball<span class="token punctuation">.</span>speed <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span>angleRad<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 패들이 공을 받을 때 마다 속도 증가</span>
  ball<span class="token punctuation">.</span>speed <span class="token operator">+=</span> <span class="token number">0.5</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token comment">// 점수 업데이트</span>
 <span class="token keyword">if</span><span class="token punctuation">(</span>ball<span class="token punctuation">.</span>x <span class="token operator">-</span> ball<span class="token punctuation">.</span>radius <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 컴퓨터 1점 획득</span>
  computer<span class="token punctuation">.</span>score<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token function">resetBall</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>ball<span class="token punctuation">.</span>x <span class="token operator">+</span> ball<span class="token punctuation">.</span>radius <span class="token operator">></span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 사용자 1점 획득</span>
  user<span class="token punctuation">.</span>score<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token function">resetBall</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 게임 초기화 함수</span>
<span class="token keyword">function</span> <span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>gameRunning<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// 일시 중지된 경우 애니메이션을 계속하지 마세요.</span>
    <span class="token punctuation">}</span>

    <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    animationId <span class="token operator">=</span> <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>animate<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


startBtn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>gameRunning<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        gameRunning <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

pauseBtn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    gameRunning <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token function">cancelAnimationFrame</span><span class="token punctuation">(</span>animationId<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 JavaScript 코드는 HTML 캔버스와 JavaScript를 사용하여 핑퐁 게임을 설정합니다. 사용자 및 컴퓨터 패들, 공, 네트를 생성하고 충돌 검출, 점수 매기기, 패들 이동과 같은 게임 로직을 처리합니다. 게임 시작, 일시 중지, 재시작 버튼과 같은 게임 컨트롤용 이벤트 리스너를 포함합니다.</p>
<p>캔버스에 도형을 그리고 게임 요소를 업데이트하고 게임 루프를 애니메이션화하는 함수가 포함되어 있습니다. 컴퓨터 패들은 공의 수직 위치를 따르는 간단한 AI를 갖고 있습니다. 점수는 공이 패들을 지나치는 것을 기준으로 합니다. 공이 패들에 부딪힐 때마다 게임 속도가 증가합니다.</p>
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
<h1 id="배운-교훈" tabindex="-1"><a class="header-anchor" href="#배운-교훈" aria-hidden="true">#</a> 배운 교훈</h1>
<p>이 프로젝트를 통해 코딩에 뛰어들기 전에 게임 로직을 계획하고 디자인하는 중요성을 배웠어요. 또한 상호작용 웹 애플리케이션을 만드는 데 중요한 CSS 스타일링, JavaScript 이벤트 및 DOM 조작에 대한 이해력을 향상시켰습니다.</p>
<h1 id="플레이-방법" tabindex="-1"><a class="header-anchor" href="#플레이-방법" aria-hidden="true">#</a> 플레이 방법</h1>
<p>핑퐁 게임을 플레이하려면 다음 단계를 따라주세요:</p>
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
<li>게임 시작하기: 게임을 시작하려면 시작 버튼을 클릭하세요. 이렇게 하면 공이 움직이기 시작하고, 사용자 및 컴퓨터가 패들을 제어합니다.</li>
<li>패들 제어하기: 패들(즉, 빨간 패들)을 마우스로 상하로 이동하여 데스크톱에서 공을 쳐라.</li>
<li>공 치기: 패들로 공을 쳐서 게임을 계속 유지하려고 노력하세요. 공이 당신의 패들을 지나가서 뒤에 있는 화면 가장자리에 도달하면 상대방이 점수를 획득합니다.</li>
<li>점수 획득하기: 공이 상대의 패들을 지나가서 그들 뒤에있는 화면 가장자리에 도달할 때마다 당신은 한 점을 획득합니다.</li>
<li>게임 승리하기: 한 플레이어가 일정한 점수에 도달하거나 게임을 중지할 때까지 계속 플레이하세요. 해당 버튼을 사용하여 게임을 일시 중지하거나 다시 시작할 수 있습니다.</li>
</ul>
<h1 id="배포" tabindex="-1"><a class="header-anchor" href="#배포" aria-hidden="true">#</a> 배포</h1>
<p>핑퐁 게임 프로젝트는 GitHub Pages에서 호스팅되며 다음 링크를 방문하여 온라인으로 플레이할 수 있습니다:</p>
<p>게임하기: https://wasiu-akindoyin.github.io/Ping-Pong-Game-Web-Application/</p>
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
<p>위의 텍스트를 친근한 톤으로 한국어로 번역하면 다음과 같습니다:</p>
<p>GitHub 저장소에 접속하여 소스 코드를 확인하거나 기여할 수 있습니다.</p>
<h1 id="향후-개선-사항" tabindex="-1"><a class="header-anchor" href="#향후-개선-사항" aria-hidden="true">#</a> 향후 개선 사항</h1>
<p>앞으로 게임에 더 많은 기능을 추가할 계획입니다:</p>
<ul>
<li>모바일 기기에 대한 향상된 반응성: 현재 버전이 데스크톱 기반임으로 휴대전화에서 게임을 즐길 수 있게 합니다.</li>
<li>다중 플레이어 지원</li>
<li>향상된 그래픽 및 애니메이션</li>
<li>플레이어 점수 및 게임 기록을 저장하기 위한 백엔드 서버 통합</li>
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
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>HTML, CSS 및 JavaScript를 사용하여 핑퐁 게임을 만드는 것은 도전적이지만 보람있는 경험이었습니다. 게임 개발과 JavaScript 프로그래밍에 대해 유용한 통찰력을 얻었다고 생각합니다. 게임을 플레이하고 코드를 탐색하여 프론트엔드 개발에 대한 이해를 향상시키길 권유합니다.</p>
<p>만약 이 프로젝트 안내가 도움이 되었다면 박수를 보내주시고 공유하고 저를 팔로우해주세요. 프론트엔드 개발, 블록체인 네트워크 및 더 많은 것에 대해 더 배우기 위해 노력하겠습니다. 끝까지 함께해 주셔서 감사합니다. 다음 모임에서 뵙겠습니다.</p>
</div></template>
