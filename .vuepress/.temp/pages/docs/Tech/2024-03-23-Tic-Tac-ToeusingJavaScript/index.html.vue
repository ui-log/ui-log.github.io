<template><div><p><img src="@source/docs/Tech/2024-03-23-Tic-Tac-ToeusingJavaScript/img/Tic-Tac-Toe-using-JavaScript_0.png" alt="Tic-Tac-Toe-using-JavaScript_0.png"></p>
<p>안녕하세요!!</p>
<p>모두가 학창 시절에 유명한 Tic-Tac-Toe 게임을 했을 것입니다. 그리고 오늘은 그것을 순수 자바스크립트(Vanilla JavaScript)를 사용하여 구현해 보려 합니다.</p>
<p>또한 이것은 제 친구 중 한 명이 머신 코딩 면접에서 물어본 질문이기도 했어요.</p>
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
<p>동일한 작업을 계속하기 위해 3개의 파일이 필요합니다:</p>
<ul>
<li>HTML</li>
<li>CSS (약간의 스타일링 추가를 위해)</li>
<li>JavaScript 파일 (여기에 마법이 들어갑니다)</li>
</ul>
<p>그러니 이제 코딩 부분으로 들어가 봅시다!!</p>
<ul>
<li>HTML 파일</li>
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
<p>파일에서 각 상자에 아이디를 부여했고, 배열과 같이 행 및 열을 지정했습니다. 게임을 시작하는 시작 버튼과 게임 상태를 보여주는 메시지도 있습니다 (h4 태그).</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>link href<span class="token operator">=</span><span class="token string">"game.css"</span> rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"box"</span> id<span class="token operator">=</span><span class="token string">"1"</span> data<span class="token operator">-</span>row<span class="token operator">=</span><span class="token string">"1"</span> data<span class="token operator">-</span>col<span class="token operator">=</span><span class="token string">"1"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"box"</span> id<span class="token operator">=</span><span class="token string">"2"</span> data<span class="token operator">-</span>row<span class="token operator">=</span><span class="token string">"1"</span> data<span class="token operator">-</span>col<span class="token operator">=</span><span class="token string">"2"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"box"</span> id<span class="token operator">=</span><span class="token string">"3"</span> data<span class="token operator">-</span>row<span class="token operator">=</span><span class="token string">"1"</span> data<span class="token operator">-</span>col<span class="token operator">=</span><span class="token string">"3"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"box"</span> id<span class="token operator">=</span><span class="token string">"4"</span> data<span class="token operator">-</span>row<span class="token operator">=</span><span class="token string">"2"</span> data<span class="token operator">-</span>col<span class="token operator">=</span><span class="token string">"1"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"box"</span> id<span class="token operator">=</span><span class="token string">"5"</span> data<span class="token operator">-</span>row<span class="token operator">=</span><span class="token string">"2"</span> data<span class="token operator">-</span>col<span class="token operator">=</span><span class="token string">"2"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"box"</span> id<span class="token operator">=</span><span class="token string">"6"</span> data<span class="token operator">-</span>row<span class="token operator">=</span><span class="token string">"2"</span> data<span class="token operator">-</span>col<span class="token operator">=</span><span class="token string">"3"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"box"</span> id<span class="token operator">=</span><span class="token string">"7"</span> data<span class="token operator">-</span>row<span class="token operator">=</span><span class="token string">"3"</span> data<span class="token operator">-</span>col<span class="token operator">=</span><span class="token string">"1"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"box"</span> id<span class="token operator">=</span><span class="token string">"8"</span> data<span class="token operator">-</span>row<span class="token operator">=</span><span class="token string">"3"</span> data<span class="token operator">-</span>col<span class="token operator">=</span><span class="token string">"2"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"box"</span> id<span class="token operator">=</span><span class="token string">"9"</span> data<span class="token operator">-</span>row<span class="token operator">=</span><span class="token string">"3"</span> data<span class="token operator">-</span>col<span class="token operator">=</span><span class="token string">"3"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">"start-btn"</span><span class="token operator">></span>시작<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span>h4 id<span class="token operator">=</span><span class="token string">"game-status"</span><span class="token operator">></span>게임이 시작되지 않았습니다<span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"game.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>CSS</li>
</ol>
<p>여기에는 기본적인 스타일이 구현되어 있습니다. 더 많은 스타일링을 추가하여 색상, 테두리 등을 변경하여 더 좋아 보이게 할 수 있습니다.```</p>
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
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">#container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 3rem<span class="token punctuation">;</span>
  <span class="token property">aspect-ratio</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid black<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">#container > div</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>#start<span class="token operator">-</span>btn <span class="token punctuation">{</span>
  margin<span class="token operator">-</span>top<span class="token operator">:</span> 1rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Tech/2024-03-23-Tic-Tac-ToeusingJavaScript/img/Tic-Tac-Toe-using-JavaScript_1.png" alt="Tic-Tac-Toe-using-JavaScript_1.png"></p>
<p>이것이 브라우저에서 우리의 HTML 및 CSS 결과물이 보이는 방식입니다.</p>
<p>이제 로직 부분으로 넘어가 봅시다.</p>
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
<ol start="3">
<li>자바스크립트</li>
</ol>
<p>게임이 동작하는 모든 곳입니다. 한 줄씩 살펴보시고 이해하기 쉽도록 최대한 간단하게 설명하겠습니다.</p>
<p>우선, 변수들을 정의했습니다.</p>
<p>boxes : HTML 요소들의 배열</p>
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
<p>totalMovesMade: 플레이어 'x'와 플레이어 'y'의 움직임 수의 합입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> boxes <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">"box"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> size <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// 보드의 사이즈*size</span>
<span class="token keyword">let</span> currentPlayer <span class="token operator">=</span> <span class="token string">"x"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> totalMovesMade <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> isGameOver <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> msg <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"game-status"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다른 변수들이 어떤 용도인지 쉽게 이해하실 수 있다고 생각해요 😃</p>
<p>이제 우리는 사이즈 = size*size의 2차원 배열을 생성하고 null 값으로 초기화합니다. 이 배열은 각 플레이어의 움직임을 추적하며 승자를 확인하거나 게임이 비겼는지를 확인하는 데 사용될 것입니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> boardArr <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">Array</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>우리의 HTML에 &quot;시작&quot; 버튼이 있습니다. 이제 &quot;click&quot; 이벤트 리스너를 추가하고, 이를 통해 &quot;startGame()&quot; 함수를 호출할 겁니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"start-btn"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> startGame<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">startGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  msg<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">"게임 진행 중..."</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"start-btn"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> box <span class="token keyword">of</span> boxes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    box<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>isGameOver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"게임 오버!! 페이지를 새로고침하여 재시작할 수 있습니다."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> id <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>id<span class="token punctuation">;</span> <span class="token comment">// 클릭한 상자의 id</span>
<span class="token keyword">const</span> row <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>row<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 플레이어가 클릭한 행</span>
<span class="token keyword">const</span> col <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>col<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 플레이어가 클릭한 열</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 이미 해당 행과 열에 수를 두었는지 확인하고 이미 둬져 있으면 반환</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>boardArr<span class="token punctuation">[</span>row <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>col <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">makeMove</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> row<span class="token punctuation">,</span> col<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">updateBoardArray</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span> col<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>totalMovesMade <span class="token operator">>=</span> size <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token function">checkIsGameOver</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span> col<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 선수 교체</span>
      currentPlayer <span class="token operator">=</span> currentPlayer <span class="token operator">==</span> <span class="token string">"x"</span> <span class="token operator">?</span> <span class="token string">"y"</span> <span class="token operator">:</span> <span class="token string">"x"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>버튼을 클릭하면 &quot;startGame()&quot;이 호출되고, 메시지가 &quot;게임 진행 중...&quot;으로 변경되며 &quot;시작&quot; 버튼이 비활성화됩니다.</p>
<p>함수 안에는 각 상자에 클릭 이벤트 리스너가 추가되었는데, 이는 함수를 2번째 인수로 전달하여 실행됩니다.</p>
<p>현재 플레이어가 상자 중 하나를 클릭하면 이 코드 블록이 실행됩니다. 여기서 makeMove(), updateBoard(), checkIsGameOver()와 같이 호출된 3개의 추가 함수를 볼 수 있습니다. 마지막에는 현재 플레이어를 토글합니다.```</p>
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
<p>위 함수에서 볼 수 있듯이 코드 라인이 있습니다. 플레이어가 한 번 움직였을 때 우승자를 확인하는 것은 의미가 없습니다. 따라서 우승자를 확인하려면 적어도 (size*2–1) 번의 움직임이 필요합니다. 저희의 경우 사이즈는 3이므로 총 5번 이상의 움직임이 필요합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>totalMovesMade <span class="token operator">>=</span> size <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token function">checkIsGameOver</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span> col<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>&quot;makeMove()&quot; 함수는 해당 상자에 'x' 또는 'y'를 표시하고 총 움직인 횟수를 1 증가시킵니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">makeMove</span><span class="token punctuation">(</span><span class="token parameter">boxId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  boxes<span class="token punctuation">[</span>boxId <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> currentPlayer<span class="token punctuation">;</span> <span class="token comment">// 상자에 x 또는 y를 입력합니다</span>
  totalMovesMade <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
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
<p>&quot;updateBoardArray()&quot; 함수는 currentPlayer 변수가 보유한 값을 사용하여 배열을 업데이트합니다 (x 또는 y).</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">updateBoardArray</span><span class="token punctuation">(</span><span class="token parameter">row<span class="token punctuation">,</span> col</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  boardArr<span class="token punctuation">[</span>row <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>col <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> currentPlayer<span class="token punctuation">;</span> <span class="token comment">// 해당 row-col에 움직임이 있음을 나타내는 보드를 업데이트합니다</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 승자를 확인하는 코드의 주요 로직을 진행하고 있습니다.</p>
<ul>
<li>게임에서 승자는 간단한 규칙을 통해 결정될 수 있습니다. 특정 플레이어가 행, 열 또는 대각선 중 하나를 자신의 기호로 채웠다면 해당 플레이어가 승자가 됩니다. 따라서 움직임이 있는 셀의 행, 열 및 양 대각선을 횡단해야 합니다. 이를 위해 4개의 변수가 필요합니다.</li>
<li>플레이어가 필요로 하는 움직임 수는 보드 크기와 같아야 합니다. 우리의 경우 3입니다. 따라서 4개의 변수 중 어느 하나의 카운트가 크기 변수와 일치한다면 승자가 있고 게임이 종료됩니다.</li>
<li>마지막으로 전체 움직임이 크기인 3에 도달하면 게임이 비긴 것으로 간주됩니다.</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">checkIsGameOver</span><span class="token punctuation">(</span><span class="token parameter">row<span class="token punctuation">,</span> col</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> horizontolCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> verticalCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> leftDiagonalCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> rightDiagonalCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 현재 플레이어의 이동을 수평, 수직 및 대각선으로 이동하며 계산합니다.</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>boardArr<span class="token punctuation">[</span>row <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> currentPlayer<span class="token punctuation">)</span> horizontolCount <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>boardArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>col <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> currentPlayer<span class="token punctuation">)</span> verticalCount <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// row == col 일 때만 왼쪽 대각선을 확인합니다.</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">==</span> col<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>boardArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> currentPlayer<span class="token punctuation">)</span> leftDiagonalCount <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//rightDiagonalTraverse</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>boardArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>size <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">]</span> <span class="token operator">==</span> currentPlayer<span class="token punctuation">)</span> rightDiagonalCount <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> condition1 <span class="token operator">=</span> horizontalCount <span class="token operator">==</span> size <span class="token operator">||</span> verticalCount <span class="token operator">==</span> size<span class="token punctuation">;</span>
<span class="token keyword">const</span> condition2 <span class="token operator">=</span> leftDiagonalCount <span class="token operator">==</span> size <span class="token operator">||</span> rightDiagonalCount <span class="token operator">==</span> size<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>condition1 <span class="token operator">||</span> condition2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      msg<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Player </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>currentPlayer<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> won!!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
      isGameOver <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>totalMovesMade <span class="token operator">==</span> size <span class="token operator">*</span> size<span class="token punctuation">)</span> msg<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Game draw!!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>행복한 코딩 하세요!!</p>
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
<p>감사합니다!! 좋아요와 댓글을 달아주시면 감사하겠어요.</p>
</div></template>
